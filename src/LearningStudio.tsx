import { usePosition } from "./usePosition";
import { navigate, useNavigation } from "./navigation";
import { canPoll, onActivityResume } from "./activity";
import { sections } from "../shared/position";
import { modules } from "./modules";
const moduleNames = modules
  .filter((m) => ["m01", "m02"].includes(m.id))
  .map((m) => m.title);
import { useEffect, useState } from "react";
import { lessons, type Lesson } from "./lessons";
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
  const [records, setRecords] = useState<
    { lessonId: string; record: RecordData }[]
  >([]);
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    const refresh = () =>
      fetch("/api/course-records", { cache: "no-store" })
        .then(async (r) => {
          if (!r.ok) throw Error();
          return r.json();
        })
        .then((v) => {
          if (active) {
            setRecords(v.records);
            setError("");
          }
        })
        .catch(() => {
          if (active)
            setError(
              "Cloud summary unavailable. Your lesson drafts remain on this device.",
            );
        });
    void refresh();
    const timer = setInterval(() => {
      if (canPoll()) void refresh();
    }, 5000);
    const stopWatching = onActivityResume(() => void refresh());
    return () => {
      active = false;
      clearInterval(timer);
      stopWatching();
    };
  }, []);
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
  const weekRecords = records.filter((r) =>
    weekLessons.some((l) => l.id === r.lessonId),
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
    lessons.find((l) => !l.optional);
  return (
    <>
      <span className="eyebrow">LEVEL 1 · MODULE {week}</span>
      <h1>Your next step in design.</h1>
      <p className="intro">
        Learn at your own pace. Two hours is a suggested session, with no daily
        requirement or completion deadline. Pause and return whenever you need.
      </p>
      <div className="actions" aria-label="Choose a module">
        {weeks.map((w) => (
          <button
            className={w === week ? "primary" : "secondary"}
            aria-pressed={w === week}
            key={w}
            onClick={() => setWeek(w)}
          >
            {moduleNames[w - 1]}
          </button>
        ))}
      </div>
      {resume && (
        <section className="card continue-card">
          <span className="eyebrow">
            {bookmark.position
              ? "CONTINUE READING"
              : recent
                ? "RETURN TO YOUR PRACTICE"
                : "FIRST CORE LESSON"}
          </span>
          <h2>{resume.title}</h2>
          <p>
            Module {resume.week || 1} · Lesson {resume.day}. Your saved place or
            suggested next step, not an assessment of mastery.
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
      <div className="notice">
        {weekRecords.reduce((sum, r) => sum + r.record.minutes, 0)} minutes
        recorded ·{" "}
        {
          weekRecords.filter((r) => r.record.status === "ready-for-review")
            .length
        }{" "}
        awaiting review · 0 assessed completions
      </div>
      <p role="status">{bookmark.status}</p>
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
                LESSON {l.day} · {l.optional ? "OPTIONAL" : "CORE"} · ~120 MIN
                EFFORT
              </span>
              <h2>{l.title}</h2>
              <p>{l.why}</p>
              <span>
                {saved
                  ? `${saved.minutes} min · ${saved.status.replaceAll("-", " ")}`
                  : "Not started"}{" "}
                →
              </span>
            </button>
          );
        })}
      </div>
      <p className="notice">
        The first two modules are published and ready to study. Later modules of
        the 620-hour program are still being authored; the level map is the
        roadmap, not a claim of complete course content.
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
  return (
    <>
      <button className="text-button" onClick={back}>
        ← All lessons
      </button>
      <span className="eyebrow">
        LEVEL 1 · MODULE {lesson.week || 1} · LESSON {lesson.day}
        {lesson.optional ? " · OPTIONAL" : ""}
      </span>
      <h1>{lesson.title}</h1>
      <p className="muted">
        {lesson.week === 2 && lesson.day === 1
          ? "Before you start: bring your Product Design Foundations flow, screens, and unresolved questions."
          : lesson.day > 1
            ? "Before you start: bring the previous lesson’s output and reflection."
            : "Start here; no prior lesson is required."}
      </p>
      <p className="intro">{lesson.why}</p>
      <p className="notice" role="status">
        {user.role === "creator" ? "Haru’s saved work · " : ""}
        {status}
      </p>
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
      <nav className="section-nav" aria-label="Lesson sections">
        {sections.map((id) => (
          <a
            key={id}
            className="section-link"
            href={`#${id}`}
            onClick={() => remember(lesson.id, id)}
          >
            {id.replaceAll("-", " ")}
          </a>
        ))}
      </nav>
      <article id="learn" className="card lesson-reading">
        <h2>Learn</h2>
        {lesson.teach.map((t) => (
          <p key={t}>{t}</p>
        ))}
        <h3>Worked example</h3>
        <p>{lesson.example}</p>
        <p>
          <a href={lesson.resource.url} target="_blank" rel="noreferrer">
            Read: {lesson.resource.title} ↗
          </a>
        </p>
        <small>
          Reference checked 6 September 2026. Split the reading across sessions
          as needed.
        </small>
      </article>
      <section id="practice-plan" className="card lesson-reading">
        <h2>Your practice plan</h2>
        <ol>
          {lesson.steps.map((s) => (
            <li key={s.title}>
              <h3>
                {s.minutes} min · {s.title}
              </h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <h3>Expected output</h3>
        <p>{lesson.deliverable}</p>
        <h3>Portfolio connection</h3>
        <p>{lesson.portfolio}</p>
        <p>
          Pause after any step. Save your work and return here. Times are
          optional effort estimates across as many sessions as you need.
        </p>
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
        <ul>
          {lesson.rubric.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p>
          Self-check each criterion: 0 absent, 1 needs help, 2 independently
          adequate, 3 strong trade-off reasoning. Ready for review is a
          submission state; it does not mark the lesson mastered.
        </p>
      </section>
      <section id="practice" className="card lesson-reading">
        <h2>
          {user.role === "creator"
            ? "Review Haru’s practice"
            : "Your practice · saves automatically"}
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
        <label htmlFor="lesson-minutes">Actual minutes</label>
        <input
          id="lesson-minutes"
          type="number"
          min={0}
          max={Number.MAX_SAFE_INTEGER}
          step={1}
          value={record.minutes}
          disabled={user.role === "creator"}
          onChange={(e) =>
            setRecord((r) => ({ ...r, minutes: Number(e.target.value) }))
          }
        />
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
            Module {next.week || 1} · Lesson {next.day}
            {next.optional ? " · Optional" : ""}. Moving ahead does not mark
            this lesson complete.
          </p>
          <button className="secondary" onClick={() => open(next.id)}>
            Open next lesson →
          </button>
        </section>
      )}
    </>
  );
}
