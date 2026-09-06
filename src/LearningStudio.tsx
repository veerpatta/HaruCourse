import { usePosition } from "./usePosition";
import { navigate, useNavigation } from "./navigation";
import { canPoll, onActivityResume } from "./activity";
import { sections } from "../shared/position";
import { modules } from "./modules";
import { useEffect, useState } from "react";
import {
  publishedLessons as lessons,
  moduleIdOf,
  type Lesson,
} from "./lessons";
import { practiceTotals, useCourseRecords } from "./useCourseRecords";
import { formatClock, humanDuration, sectionLabel, statusLabel } from "./labels";
import { useTimer } from "./useTimer";
import {
  ConfidencePicker,
  PracticeSteps,
  SessionTimer,
  TimeAdjust,
} from "./SessionTimer";
// `week` stays the grouping key because saved records, bookmarks and the
// legacy documents all use it. Everything shown to the reader — the module
// name, its number and its level — comes from src/modules.ts instead, so
// publishing another module never needs an edit here.
function moduleOf(lesson: Lesson) {
  return modules.find((m) => m.id === moduleIdOf(lesson));
}
function moduleOfWeek(week: number) {
  const first = lessons.find((l) => (l.week || 1) === week);
  return first && moduleOf(first);
}
function moduleLabel(lesson: Lesson) {
  const owner = moduleOf(lesson);
  return owner ? owner.id.replace(/^m0?/, "") : String(lesson.week || 1);
}
function effortMinutes(lesson: Lesson) {
  return lesson.steps.reduce((total, step) => total + step.minutes, 0);
}
const authoredModules = modules.filter((m) =>
  lessons.some((l) => moduleOf(l)?.id === m.id),
);
import { usePractice } from "./usePractice";
import type { User, RecordData, Feedback } from "../shared/record";
export function LearningStudio({ user }: { user: User }) {
  const bookmark = usePosition(user.id);
  const [section, setSection] = useState("learn");
  // Which lesson is open is history-backed so Back leaves the reader; the
  // section within a lesson deliberately is not, or leaving one lesson would
  // take four Back presses.
  const { lesson: selected } = useNavigation();
  const [week, setWeek] = useState(1);
  const weeks = [...new Set(lessons.map((l) => l.week || 1))];
  function open(id: string, target = "learn") {
    const l = lessons.find((l) => l.id === id);
    if (l) {
      setWeek(l.week || 1);
      const safe = sections.includes(target as (typeof sections)[number])
        ? target
        : "learn";
      setSection(safe);
      bookmark.remember(id, safe);
      navigate({ lesson: id });
      window.scrollTo(0, 0);
    }
  }
  const { records, error } = useCourseRecords(user);
  const item = lessons.find((l) => l.id === selected);
  if (item)
    return (
      <LessonReader
        key={item.id}
        lesson={item}
        section={section}
        remember={bookmark.remember}
        user={user}
        back={() => navigate({ lesson: null })}
        next={lessons[lessons.findIndex((l) => l.id === item.id) + 1]}
        open={open}
      />
    );
  const weekLessons = lessons.filter((l) => (l.week || 1) === week);
  const totals = practiceTotals(records);
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
    lessons.find((l) => !l.optional);
  return (
    <>
      <span className="eyebrow">
        LEVEL {moduleOfWeek(week)?.level ?? 1} · MODULE{" "}
        {moduleOfWeek(week)?.id.replace(/^m0?/, "") ?? week}
      </span>
      <h1>Your next step in design.</h1>
      <p className="intro">
        Learn at your own pace. Two hours is a suggested session, with no daily
        requirement or completion deadline. Pause and return whenever you need.
      </p>
      {resume && (
        <section className="card continue-card">
          <span className="eyebrow">
            {bookmark.position
              ? "PICK UP WHERE YOU LEFT OFF"
              : recent
                ? "RETURN TO YOUR PRACTICE"
                : "START HERE"}
          </span>
          <h2>{resume.title}</h2>
          <p>
            Module {moduleLabel(resume)} · Lesson {resume.day} · about{" "}
            {humanDuration(effortMinutes(resume))}. Your saved place, not a
            measure of how far you have come.
          </p>
          <button
            className="primary"
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
      )}
      <div className="actions" aria-label="Choose a module">
        {weeks.map((w) => (
          <button
            className={w === week ? "primary" : "secondary"}
            aria-pressed={w === week}
            key={w}
            onClick={() => setWeek(w)}
          >
            {moduleOfWeek(w)?.title ?? `Module ${w}`}
          </button>
        ))}
      </div>
      <div className="notice">
        {humanDuration(totals.minutes)} of practice recorded across the course
        {totals.started
          ? ` · ${totals.started} lesson${totals.started === 1 ? "" : "s"} in progress`
          : ""}
        {totals.ready
          ? ` · ${totals.ready} ready for review`
          : ""}
      </div>
      {bookmark.status && <p role="status">{bookmark.status}</p>}
      {error && <p role="status">{error}</p>}
      <div className="lesson-list">
        {weekLessons.map((l) => {
          const saved = records.find((r) => r.lessonId === l.id)?.record;
          return (
            <button
              className="card lesson-choice"
              key={l.id}
              onClick={() => open(l.id)}
            >
              <span className="eyebrow">
                LESSON {l.day} · {l.optional ? "OPTIONAL" : "CORE"} · ABOUT{" "}
                {humanDuration(effortMinutes(l)).toUpperCase()}
              </span>
              <h2>{l.title}</h2>
              <p>{l.why}</p>
              <span>
                {saved && saved.status !== "not-started"
                  ? `${humanDuration(saved.minutes)} practised · ${statusLabel(saved.status)}`
                  : "Start when you're ready"}{" "}
                →
              </span>
            </button>
          );
        })}
      </div>
      <p className="notice">
        {authoredModules.length} modules ({lessons.length} lessons) are
        published and ready to study. The remaining{" "}
        {modules.filter((m) => m.status === "planned").length} modules of the
        620-hour program are still being authored; the level map is the roadmap,
        not a claim of complete course content.
      </p>
    </>
  );
}
function LessonReader({
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
  useEffect(() => {
    (
      document.getElementById(section) || document.getElementById("learn")
    )?.scrollIntoView();
    const observe = () => {
      const current = [...sections]
        .reverse()
        .find(
          (id) =>
            (document.getElementById(id)?.getBoundingClientRect().top ??
              Infinity) <= 180,
        );
      if (current) remember(lesson.id, current);
    };
    window.addEventListener("scroll", observe, { passive: true });
    return () => window.removeEventListener("scroll", observe);
  }, [lesson.id, section]);
  const practice = usePractice(
    user,
    lesson.id,
    `harucourse:lesson:${user.id}:${lesson.id}`,
  );
  const { record, setRecord, status, conflict, resolve } = practice;
  // Declared after usePractice so its unmount fold runs while the practice
  // hook can still persist and flush it.
  const timer = useTimer({
    storageKey: `harucourse:timer:${user.id}:${lesson.id}`,
    enabled: user.role === "learner",
    active: true,
    setRecord,
  });
  const learner = user.role === "learner";
  const [feedback, setFeedback] = useState<Feedback[]>([]),
    [review, setReview] = useState(""),
    [message, setMessage] = useState("");
  const endpoint = "/api/feedback?lessonId=" + lesson.id;
  useEffect(() => {
    let active = true;
    const refresh = () =>
      fetch(endpoint, { cache: "no-store" })
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((v) => {
          if (active) setFeedback(v.feedback);
        })
        .catch(() => {});
    void refresh();
    const timer = setInterval(() => {
      if (canPoll()) void refresh();
    }, 10000);
    const stopWatching = onActivityResume(() => void refresh());
    return () => {
      active = false;
      clearInterval(timer);
      stopWatching();
    };
  }, [endpoint]);
  const readyBlocked = !record.notes.trim() || !record.submission.trim();
  return (
    <>
      <button className="text-button" onClick={back}>
        ← All lessons
      </button>
      <span className="eyebrow">
        LEVEL {moduleOf(lesson)?.level ?? 1} · MODULE {moduleLabel(lesson)} ·
        LESSON {lesson.day}
        {lesson.optional ? " · OPTIONAL" : ""}
      </span>
      <h1>{lesson.title}</h1>
      <p className="muted">
        {lesson.bringForward
          ? `Before you start: ${lesson.bringForward}`
          : lesson.week === 2 && lesson.day === 1
            ? "Before you start: bring your Product Design Foundations flow, screens, and unresolved questions."
            : lesson.day > 1
              ? "Before you start: bring the previous lesson’s output and reflection."
              : "Start here; no prior lesson is required."}
      </p>
      {lesson.objective && (
        <p className="muted">
          What this lesson asks you to produce: {lesson.objective}
        </p>
      )}
      <p className="intro">{lesson.why}</p>
      <p className="notice" role="status">
        {user.role === "creator" ? "Haru’s saved work · " : ""}
        {status}
      </p>
      <SessionTimer
        timer={timer}
        record={record}
        role={user.role}
        steps={lesson.steps}
      />
      {conflict && (
        <section className="card">
          <h2>Which version do you want to keep?</h2>
          <p>
            This lesson was also edited on another device or tab. Nothing here
            has been lost.
          </p>
          <pre className="record-preview">
            The other version’s notes:{" "}
            {conflict.record?.notes || "(no notes yet)"}
          </pre>
          <button className="secondary" onClick={() => resolve(true)}>
            Use the other version (a copy of this one is downloaded first)
          </button>
          <button className="secondary" onClick={() => resolve(false)}>
            Keep this device’s version
          </button>
        </section>
      )}
      <nav className="section-nav" aria-label="Lesson sections">
        {sections.map((id) => (
          <a
            key={id}
            className="section-link"
            href={`#${id}`}
            onClick={() => remember(lesson.id, id)}
          >
            {sectionLabel(id)}
          </a>
        ))}
      </nav>
      <article id="learn" className="card lesson-reading">
        <h2>Learn</h2>
        {lesson.teach.map((t) => (
          <p key={t}>{t}</p>
        ))}
        {lesson.misconception && (
          <>
            <h3>A common misconception</h3>
            <p>{lesson.misconception}</p>
          </>
        )}
        <h3>Worked example</h3>
        <p>{lesson.example}</p>
        {lesson.resources ? (
          <>
            <h3>Assigned reading</h3>
            <ul>
              {lesson.resources.map((r) => (
                <li key={r.id}>
                  <a href={r.url} target="_blank" rel="noreferrer">
                    {r.id}: {r.title} ↗
                  </a>
                  <br />
                  <small>
                    {r.section} {r.purpose} About {r.minutes} min. {r.limits} If
                    it is unavailable, use {r.fallbackId} from the resource
                    library.
                  </small>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>
            <a href={lesson.resource.url} target="_blank" rel="noreferrer">
              Read: {lesson.resource.title} ↗
            </a>
          </p>
        )}
        <small>
          Reference checked 6 September 2026. Split the reading across sessions
          as needed.
        </small>
      </article>
      <section id="practice-plan" className="card lesson-reading">
        <h2>Your practice plan</h2>
        {learner && (
          <p className="muted">
            Tap a step while the timer runs to record time against it. Steps
            are guidance, not a checklist — nothing here marks a step done.
          </p>
        )}
        <PracticeSteps
          steps={lesson.steps}
          current={timer.snapshot.step}
          canPick={learner}
          onPick={timer.markStep}
          sessions={record.sessions}
        />
        <p className="muted">
          About {humanDuration(effortMinutes(lesson))} in total, across as many
          sessions as you need.
          {record.minutes
            ? ` ${humanDuration(record.minutes)} recorded so far.`
            : ""}
        </p>
        <h3>Expected output</h3>
        <p>{lesson.deliverable}</p>
        {lesson.freeToolPath && (
          <>
            <h3>Free tool path</h3>
            <p>{lesson.freeToolPath}</p>
          </>
        )}
        <h3>Portfolio connection</h3>
        <p>{lesson.portfolio}</p>
      </section>
      <section id="check" className="card lesson-reading">
        <h2>Check your understanding</h2>
        {lesson.check.map((q) => (
          <details key={q.question}>
            <summary>{q.question}</summary>
            <p>{q.answer}</p>
          </details>
        ))}
        <h3>Review criteria</h3>
        {lesson.criteria ? (
          <>
            {lesson.criteria.map((c) => (
              <details key={c.criterion}>
                <summary>{c.criterion}</summary>
                <p>Adequate evidence: {c.evidence}</p>
                <ul>
                  {c.levels.map((text, score) => (
                    <li key={score}>
                      <strong>{score}</strong> — {text}
                    </li>
                  ))}
                </ul>
                <p>
                  <strong>If below 2:</strong> {c.remediation}
                </p>
                <p>
                  <strong>Show at recheck:</strong> {c.recheck}
                </p>
              </details>
            ))}
            <p>
              Scoring is a review judgement about work you submit. Nothing here
              computes, stores or displays a score, and reading these criteria
              does not record progress against them.
            </p>
          </>
        ) : (
          <ul>
            {lesson.rubric.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        )}
        <p>
          Self-check each criterion: 0 absent, 1 needs help, 2 independently
          adequate, 3 strong trade-off reasoning.
        </p>
      </section>
      <section id="practice" className="card lesson-reading">
        <h2>
          {user.role === "creator"
            ? "Review Haru’s practice"
            : "Your practice · saves automatically"}
          {learner && timer.snapshot.running && (
            <span className="inline-clock">
              {" "}
              · {formatClock(timer.snapshot.elapsedMs)} running
            </span>
          )}
        </h2>
        <label htmlFor="lesson-notes">Reflection and assignment notes</label>
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
        <label htmlFor="lesson-reference">
          Link to your work (Figma, Drive, or a file name)
        </label>
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
          Files stay where you keep them. This saves the link or name, not the
          file — share screenshots or PDFs with your reviewer separately.
        </small>
        {learner && (
          <>
            <TimeAdjust
              minutes={record.minutes}
              onAdd={timer.addMinutes}
              onSetTotal={timer.setTotal}
            />
            <h3>How confident do you feel about this work?</h3>
            <ConfidencePicker
              value={record.confidence}
              onChange={timer.setConfidence}
            />
            <small>
              A note to yourself, not a grade. Your reviewer sees it alongside
              your work.
            </small>
            <label htmlFor="lesson-status">Where is this lesson up to?</label>
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
              <option value="practicing">In progress</option>
              <option value="ready-for-review" disabled={readyBlocked}>
                Ready for review
              </option>
            </select>
            {readyBlocked && (
              <small>
                Add notes and a link to your work to mark it ready for review.
              </small>
            )}
            <details>
              <summary>How reviews work</summary>
              <p>
                Marking work ready for review tells your reviewer it is worth a
                look. It does not grade it, send it anywhere, or mark the lesson
                as finished. Your reviewer reads your notes and your linked work
                against the criteria above, then writes feedback here.
              </p>
            </details>
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
      {next && (
        <section className="card continue-card">
          <h2>Next: {next.title}</h2>
          <p>
            Module {moduleLabel(next)} · Lesson {next.day}
            {next.optional ? " · Optional" : ""}. Moving ahead does not mark
            this lesson complete.
          </p>
          <button className="secondary" onClick={() => open(next.id)}>
            Open next lesson →
          </button>
        </section>
      )}
      {learner && <div className="timer-clearance" aria-hidden />}
    </>
  );
}
