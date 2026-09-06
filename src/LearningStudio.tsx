import { navigate as navigateHistory, useNavigation } from './navigation';
import { canPoll, onActivityResume } from './activity';
import { useTimer } from './useTimer';
import { practiceTotals } from './useCourseRecords';
import { humanDate, humanDuration, statusLabel } from './labels';
import { SessionTimer, SessionLog, TimeAdjust, ConfidencePicker } from './SessionTimer';
import { useEffect, useState } from "react";
import { usePosition } from "./usePosition";
import { sections } from "../shared/position";
import { modules } from "./modules";
import { publishedLessons as lessons, type Lesson } from "./lessons";
import { baseline, baselineLesson } from "./course";
import { usePractice } from "./usePractice";
import { readingSelections } from "./reading";
import {
  recordSchema,
  type User,
  type RecordData,
  type Feedback,
} from "../shared/record";
export const sectionLabels = {
  learn: "Learn",
  "practice-plan": "Do",
  check: "Check",
  practice: "Your work",
};
export function LearningStudio({
  user,
  mode = "Learn",
  target,
  clearTarget,
}: {
  user: User;
  mode?: string;
  target?: { id: string; section: string };
  clearTarget: () => void;
}) {
  const bookmark = usePosition(user.id);
  const {lesson: selected} = useNavigation();
  const [section, setSection] = useState(bookmark.position?.lessonId === selected ? bookmark.position.sectionId : target?.section || "learn");
  const [browsedWeek, setWeek] = useState<number | null>(null);
  const week =
    browsedWeek ??
    lessons.find((l) => l.id === bookmark.position?.lessonId)?.week ??
    1;
  const [records, setRecords] = useState<
    { lessonId: string; record: RecordData }[]
  >([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let active = true;
    async function refresh() {
      let saved: { lessonId: string; record: RecordData }[] = [];
      try {
        const r = await fetch("/api/course-records", { cache: "no-store" });
        if (!r.ok) throw Error();
        saved = (await r.json()).records;
        if (active) setError("");
      } catch {
        if (active)
          setError(
            user.role === "creator"
              ? "Reconnect to load Haru’s saved work."
              : "Cloud list unavailable. Showing saved work on this device.",
          );
      }
      // Include pending/offline drafts without replacing newer cloud summaries with clean caches.
      if (user.role !== "creator")
        for (const l of [baseline, ...lessons]) {
          const key =
            l.id === baseline.id
              ? `harucourse:baseline:v1:${user.id}`
              : `harucourse:lesson:${user.id}:${l.id}`;
          try {
            const raw =
              localStorage.getItem(key) ||
              (user.id === "haru" && l.id === baseline.id
                ? localStorage.getItem("harucourse:baseline:v1")
                : null);
            const parsed = recordSchema.safeParse(JSON.parse(raw || "null"));
            const pending = JSON.parse(
              localStorage.getItem(key + ":sync") || "null",
            )?.dirty;
            if (
              parsed.success &&
              (pending || !saved.some((r) => r.lessonId === l.id))
            )
              saved = [
                ...saved.filter((r) => r.lessonId !== l.id),
                { lessonId: l.id, record: parsed.data },
              ];
          } catch {
            /* Keep cloud summaries when device data cannot be read. */
          }
        }
      if (active) {
        setRecords(saved);
        setLoaded(true);
      }
    }
    void refresh();
    const timer = setInterval(() => {if(canPoll()) void refresh()}, 5000);
    const resume = onActivityResume(() => void refresh());
    return () => {
      active = false;
      clearInterval(timer);
      resume();
    };
  }, [user.id, user.role]);
  function open(id: string, targetSection = "learn") {
    if (![baseline, ...lessons].some((l) => l.id === id)) return;
    const safe = sections.includes(targetSection as (typeof sections)[number])
      ? targetSection
      : "learn";
    setSection(safe);
    navigateHistory({lesson:id,section:safe});
    if (id !== baseline.id) bookmark.remember(id, safe);
    window.scrollTo(0, 0);
  }
  const item =
    selected === baseline.id
      ? baselineLesson
      : lessons.find((l) => l.id === selected);
  if (item)
    return (
      <LessonReader
        key={item.id}
        lesson={item}
        section={section}
        remember={bookmark.remember}
        user={user}
        back={() => {
          navigateHistory({lesson:null});
          clearTarget();
        }}
        next={
          item.id === baseline.id
            ? lessons[0]
            : lessons[lessons.findIndex((l) => l.id === item.id) + 1]
        }
        open={open}
      />
    );
  const recent = records
    .filter(
      (r) =>
        r.record.status === "practicing" &&
        lessons.some((l) => l.id === r.lessonId),
    )
    .sort(
      (a, b) => Date.parse(b.record.updatedAt) - Date.parse(a.record.updatedAt),
    )[0];
  const resume =
    lessons.find((l) => l.id === bookmark.position?.lessonId) ||
    lessons.find((l) => l.id === recent?.lessonId) ||
    lessons.find((l) => !l.optional)!;
  if (mode === "My work")
    return (
      <>
        <h1>My work</h1>
          <p>Open a draft or review its feedback.</p>
          <details className="teaching-detail">
            <summary>Practice history · {humanDuration(practiceTotals(records).minutes)}</summary>
            <ul>{practiceTotals(records).sessions.map((s) => <li key={`${s.lessonId}:${s.startedAt}`}>{humanDate(s.startedAt)} · {lessons.find((l) => l.id === s.lessonId)?.title || "Baseline"} · {humanDuration(s.minutes)}</li>)}</ul>
            {!practiceTotals(records).sessions.length && <p>No sessions recorded yet.</p>}
          </details>
        {!loaded && <p role="status">Loading saved work…</p>}
        {error && <p role="status">{error}</p>}
        <div className="compact-list">
          {[baseline, ...lessons]
            .filter((l) =>
              records.some(
                (r) =>
                  r.lessonId === l.id &&
                  (r.record.notes ||
                    r.record.submission ||
                    r.record.minutes ||
                    r.record.status !== "not-started"),
              ),
            )
            .map((l) => {
              const saved = records.find((r) => r.lessonId === l.id)!.record;
              return (
                <button
                  className="lesson-row"
                  key={l.id}
                  onClick={() => open(l.id, "practice")}
                >
                  <strong>{l.title}</strong>
                  <span>{statusLabel(saved.status)} →</span>
                </button>
              );
            })}
        </div>
        {loaded &&
          !records.some(
            (r) =>
              r.record.notes ||
              r.record.submission ||
              r.record.minutes ||
              r.record.status !== "not-started",
          ) && <p>No saved work yet. Open a lesson to begin.</p>}
      </>
    );
  return (
    <>
      <span className="eyebrow">YOUR COURSE</span>
      <h1>Learn</h1>
      <section className="feature-card">
        <span className="pill">YOUR NEXT STEP</span>
        <h2>{resume.title}</h2>
        <button
          className="light-button"
          onClick={() =>
            open(
              resume.id,
              bookmark.position?.lessonId === resume.id
                ? bookmark.position.sectionId
                : "learn",
            )
          }
        >
          Continue learning →
        </button>
      </section>
      <p className="save-status" role="status">
        {bookmark.status}
      </p>
      {error && <p role="status">{error}</p>}
      <label htmlFor="module-choice">Browse a module</label>
      <select
        id="module-choice"
        value={week}
        onChange={(e) => setWeek(Number(e.target.value))}
      >
        {modules
          .filter((m) => lessons.some(l => (l.module || `m0${l.week || 1}`) === m.id))
          .map((m, i) => (
            <option value={Number(m.id.slice(1))} key={m.id}>
              {m.title}
            </option>
          ))}
      </select>
      <div className="compact-list">
        {lessons
          .filter((l) => (l.week || 1) === week)
          .map((l) => (
            <button
              className="lesson-row"
              key={l.id}
              onClick={() => open(l.id)}
            >
              <span>
                Lesson {l.day}
                {l.optional ? " · Optional" : ""}
              </span>
              <strong>{l.title}</strong>
              <span aria-hidden="true">→</span>
            </button>
          ))}
      </div>
      <button className="text-button" onClick={() => open(baseline.id)}>
        Open starting-point diagnostic →
      </button>
      <p className="muted">
        Study at your own pace. Later modules are on the Course map.
      </p>
    </>
  );
}
export function LessonReader({
  lesson,
  section,
  remember,
  user,
  back,
  next,
  open,
}: {
  lesson: Lesson;
  section: string;
  remember: (lessonId: string, sectionId: string) => void;
  user: User;
  back: () => void;
  next?: Lesson;
  open: (id: string) => void;
}) {
  const [activeSection, setActiveSection] = useState(sections.includes(section as typeof sections[number]) ? section : "learn");
  useEffect(() => {if(lesson.id !== "baseline-v1") remember(lesson.id, activeSection)}, [lesson.id]);
  function go(id: string) {
    setActiveSection(id);
    if (lesson.id !== "baseline-v1") remember(lesson.id, id);
  }
  useEffect(() => {
    document.getElementById(activeSection)?.focus();
    window.scrollTo(0, 0);
  }, [activeSection]);
  const practice = usePractice(
    user,
    lesson.id,
    lesson.id === "baseline-v1"
      ? `harucourse:baseline:v1:${user.id}`
      : `harucourse:lesson:${user.id}:${lesson.id}`,
  );
  const { record, setRecord, status, conflict, resolve } = practice;
  const timer = useTimer({storageKey:`harucourse:timer:${user.id}:${lesson.id}`,enabled:user.role === "learner",active:true,setRecord});
  const [feedback, setFeedback] = useState<Feedback[]>([]),
    [review, setReview] = useState(""),
    [message, setMessage] = useState("");
  const [feedbackError, setFeedbackError] = useState("");
  const endpoint = "/api/feedback?lessonId=" + lesson.id;
  useEffect(() => {
    let active = true;
    const refresh = () =>
      fetch(endpoint, { cache: "no-store" })
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((v) => {
          if (active) {
            setFeedback(v.feedback);
            setFeedbackError("");
          }
        })
        .catch(() => {
          if (active)
            setFeedbackError(
              "Feedback unavailable. Reconnect to load the latest review.",
            );
        });
    void refresh();
    const refreshTimer = setInterval(() => {if(canPoll()) void refresh()}, 10000);
    const stopWatching = onActivityResume(refresh);
    return () => {
      active = false;
      clearInterval(refreshTimer);
      stopWatching();
    };
  }, [endpoint]);
  return (
    <>
      <button className="text-button" onClick={back}>
        ← All lessons
      </button>
      <span className="eyebrow">
        {lesson.id === "baseline-v1"
          ? "LEVEL 0 · BASELINE"
          : `LEVEL ${lesson.level ?? 1} · MODULE ${lesson.week || 1} · LESSON ${lesson.day}`}
        {lesson.optional ? " · OPTIONAL" : ""}
      </span>
      <h1>{lesson.title}</h1>
      <p className="intro">{lesson.why}</p>
      <p className="save-status" role="status">
        {user.role === "creator" ? "Haru’s saved work · " : ""}
        {status}
      </p>
      <SessionTimer timer={timer} record={record} role={user.role} steps={lesson.steps}/>
      {conflict && (
        <section className="card">
          <h2>Two versions need your choice</h2>
          <p>
            Another device saved a different version. Your draft is preserved.
          </p>
          <pre className="record-preview">
            Cloud: {conflict.record?.notes || "Empty record"}
          </pre>
          <button className="secondary" onClick={() => resolve(true)}>
            Back up my draft and use cloud
          </button>
          <button className="secondary" onClick={() => resolve(false)}>
            Keep my draft and save it
          </button>
        </section>
      )}
      <nav className="section-tabs" aria-label="Lesson sections">
        {sections.map((id, i) => (
          <button
            key={id}
            aria-current={activeSection === id ? "step" : undefined}
            className={activeSection === id ? "primary" : "secondary"}
            onClick={() => go(id)}
          >
            {i + 1}. {sectionLabels[id]}
          </button>
        ))}
      </nav>
      <article
        id="learn"
        tabIndex={-1}
        hidden={activeSection !== "learn"}
        className="lesson-reading"
      >
        <h2>Learn</h2>
        <p>
          <strong>Bring:</strong> {lesson.prerequisite}
        </p>
        <ul>
          {lesson.teach.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {lesson.misconception && <details><summary>Common misconception</summary><p>{lesson.misconception}</p></details>}
        {lesson.example && (
          <details>
            <summary>Worked example</summary>
            <p>{lesson.example}</p>
          </details>
        )}
        {lesson.explanation.length > 0 && (
          <details>
            <summary>Why this works</summary>
            <ul>
              {lesson.explanation.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </details>
        )}
        {lesson.resources?.length ? <details><summary>Assigned reading and free alternatives</summary>{lesson.resources.map(r=><article key={r.id}><h3><a href={r.url} target="_blank" rel="noreferrer">{r.title}</a></h3><p>{r.section}</p><p>{r.purpose}</p><p>{r.limits} Fallback: {r.fallbackId}. Optional reading: {r.minutes} minutes.</p></article>)}</details> : lesson.resource.url && (
          <details>
            <summary>Reading and free alternative</summary>
            <p>
              <a href={lesson.resource.url} target="_blank" rel="noreferrer">
                {lesson.resource.title} ↗
              </a>
            </p>
            <p>Read: {readingSelections[lesson.resource.id]?.selection}.</p>
            <p className="muted">
              About {readingSelections[lesson.resource.id]?.minutes} minutes, at
              your pace. Public reading checked 6 September 2026; no account,
              card or trial.
            </p>
            <p>
              If unavailable, use this lesson’s concepts and worked example to
              complete the local exercise. Paper and local notes are sufficient;
              no paid tool is required.
            </p>
          </details>
        )}
      </article>
      <section
        id="practice-plan"
        tabIndex={-1}
        hidden={activeSection !== "practice-plan"}
        className="lesson-reading"
      >
        <h2>Do</h2>
        <h3>Make these</h3>
        <ul>
          {lesson.outputs.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {lesson.freeToolPath && <p>{lesson.freeToolPath}</p>}
        <ol className="instruction-steps">
          {lesson.steps.map((s, i) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              {user.role === "learner" && <button className="text-button" aria-pressed={timer.snapshot.step === i+1} onClick={()=>timer.markStep(timer.snapshot.step === i+1 ? null : i+1)}>Track this step</button>}
              <ul>
                {s.instructions.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="muted">
          Pause after any step. Save the artifact and your next action in Your
          work.
        </p>
        <details>
          <summary>Optional effort and portfolio context</summary>
          <ul>
            {lesson.steps.map((s) => (
              <li key={s.title}>
                {s.title}: about {s.minutes} minutes
              </li>
            ))}
          </ul>
          <p>No deadline. Split the work across sessions.</p>
          <p>{lesson.portfolio}</p>
        </details>
      </section>
      <section
        id="check"
        tabIndex={-1}
        hidden={activeSection !== "check"}
        className="lesson-reading"
      >
        <h2>Check</h2>
        {lesson.check.map((q) => (
          <details key={q.question}>
            <summary>{q.question}</summary>
            <p>{q.answer}</p>
          </details>
        ))}
        <h3>Review criteria</h3>
        <ul>
          {lesson.rubric.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        {lesson.criteria?.map(c=><details key={c.criterion}><summary>{c.criterion}: evidence and repair</summary><p>{c.evidence}</p><ul>{c.levels.map((t,i)=><li key={i}>{i}: {t}</li>)}</ul><p>{c.remediation}</p><p>Recheck: {c.recheck}</p></details>)}
        <details>
          <summary>Need to revise?</summary>
          <ul>
            {lesson.repairs.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p>
            Show the revised artifact and the criterion it addresses at recheck.
          </p>
        </details>
        <details>
          <summary>How review works</summary>
          <p>
            0 absent · 1 needs support · 2 independently adequate · 3 strong
            reasoning and trade-offs.
          </p>
          <p>
            Ready for review is a request state, not assessed completion. Formal
            scored assessment is not implemented.
          </p>
        </details>
      </section>
      <section
        id="practice"
        tabIndex={-1}
        hidden={activeSection !== "practice"}
        className="lesson-reading"
      >
        <h2>
          {user.role === "creator" ? "Review Haru’s practice" : "Your work"}
        </h2>
        <label htmlFor="lesson-notes">Notes and next action</label>
        <textarea
          id="lesson-notes"
          rows={8}
          value={record.notes}
          maxLength={20000}
          disabled={user.role === "creator"}
          onChange={(e) =>
            setRecord((r) => ({
              ...r,
              notes: e.target.value,
              status: r.status === "not-started" ? "practicing" : r.status,
            }))
          }
        />
        <label htmlFor="lesson-reference">Work reference or share link</label>
        <input
          id="lesson-reference"
          value={record.submission}
          maxLength={2000}
          disabled={user.role === "creator"}
          onChange={(e) =>
            setRecord((r) => ({ ...r, submission: e.target.value }))
          }
        />
        <small>
          Files are not uploaded by entering a reference. Share screenshots or
          PDFs with your reviewer separately.
        </small>
        <details><summary>Time, sessions and confidence</summary>
          <SessionLog sessions={record.sessions || []} steps={lesson.steps}/>
          {user.role === 'learner' && <><TimeAdjust minutes={record.minutes} onAdd={timer.addMinutes} onSetTotal={timer.setTotal}/><ConfidencePicker value={record.confidence} onChange={timer.setConfidence}/></>}
        </details>
        {user.role === "learner" && (
          <>
            <label htmlFor="lesson-status">Practice status</label>
            <select
              id="lesson-status"
              value={record.status}
              onChange={(e) =>
                setRecord((r) => ({
                  ...r,
                  status: e.target.value as RecordData["status"],
                }))
              }
            >
              <option value="not-started">Not started</option>
              <option value="practicing">Practicing</option>
              <option
                value="ready-for-review"
                disabled={!record.notes.trim() || !record.submission.trim()}
              >
                Ready for review
              </option>
            </select>
          </>
        )}
        {user.role === "creator" && (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const latest = await fetch(
                  "/api/progress?lessonId=" + lesson.id,
                ).then((r) => r.json());
                if (JSON.stringify(latest.record) !== JSON.stringify(record))
                  throw Error(
                    "Haru saved a newer version. Reopen the lesson before reviewing.",
                  );
                const r = await fetch(endpoint, {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({
                    id: crypto.randomUUID(),
                    revision: latest.revision,
                    body: review,
                  }),
                });
                if (!r.ok)
                  throw Error(
                    "Could not save review. A saved submission is required.",
                  );
                const f = await r.json();
                setFeedback((v) => [f, ...v]);
                setReview("");
                setMessage("Creator review saved.");
              } catch (e) {
                setMessage(e instanceof Error ? e.message : "Review failed");
              }
            }}
          >
            <label htmlFor="lesson-review">Creator feedback</label>
            <textarea
              id="lesson-review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              maxLength={12000}
            />
            <button className="primary">Save review</button>
          </form>
        )}
        {message && <p role="status">{message}</p>}
        <h3>Feedback</h3>
        {feedbackError && <p role="status">{feedbackError}</p>}
        {feedback.length ? (
          feedback.map((f) => (
            <article key={f.id}>
              <strong>
                {f.source === "ai" ? "AI critique" : "Creator review"} · version{" "}
                {f.revision}
              </strong>
              <p>{f.body}</p>
            </article>
          ))
        ) : (
          <p>No feedback yet.</p>
        )}
      </section>
      <div className="timer-clearance" aria-hidden="true"/>
      <div className="reader-actions">
        <button
          className="secondary"
          onClick={() =>
            activeSection === "learn"
              ? back()
              : go(
                  sections[
                    sections.indexOf(
                      activeSection as (typeof sections)[number],
                    ) - 1
                  ],
                )
          }
        >
          ← Back
        </button>
        {activeSection !== "practice" ? (
          <button
            className="primary"
            onClick={() =>
              go(
                sections[
                  sections.indexOf(activeSection as (typeof sections)[number]) +
                    1
                ],
              )
            }
          >
            Next:{" "}
            {
              sectionLabels[
                sections[
                  sections.indexOf(activeSection as (typeof sections)[number]) +
                    1
                ]
              ]
            }{" "}
            →
          </button>
        ) : next ? (
          <button className="secondary" onClick={() => open(next.id)}>
            Next lesson →
          </button>
        ) : (
          <button className="secondary" onClick={back}>
            All lessons
          </button>
        )}
      </div>
    </>
  );
}
