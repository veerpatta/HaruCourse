import { useEffect, useState } from "react";
import { lessons, type Lesson } from "./lessons";
import { usePractice } from "./usePractice";
import type { User, RecordData, Feedback } from "../shared/record";
export function LearningStudio({ user }: { user: User }) {
  const [selected, select] = useState<string | null>(null);
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
    const timer = setInterval(refresh, 5000);
    return () => {
      active = false;
      clearInterval(timer);
    };
  }, []);
  const item = lessons.find((l) => l.id === selected);
  if (item)
    return (
      <LessonReader
        key={item.id}
        lesson={item}
        user={user}
        back={() => select(null)}
      />
    );
  const weekRecords = records.filter((r) =>
    lessons.some((l) => l.id === r.lessonId),
  );
  return (
    <>
      <span className="eyebrow">LEVEL 1 · MONTH 1 · WEEK 1</span>
      <h1>Start your design practice.</h1>
      <p className="intro">
        Five core sessions · 10 hours. Days 6 and 7 are optional practice or
        rest. Work through the days in order; bring the previous day’s output
        with you.
      </p>
      <div className="notice">
        {weekRecords.reduce((sum, r) => sum + r.record.minutes, 0)} minutes
        recorded ·{" "}
        {
          weekRecords.filter((r) => r.record.status === "ready-for-review")
            .length
        }{" "}
        awaiting review · 0 assessed completions
      </div>
      {error && <p role="status">{error}</p>}
      <div className="lesson-list">
        {lessons.map((l) => {
          const saved = records.find((r) => r.lessonId === l.id)?.record;
          return (
            <button
              className="card lesson-choice"
              key={l.id}
              onClick={() => select(l.id)}
            >
              <span className="eyebrow">
                DAY {l.day} · {l.optional ? "OPTIONAL" : "CORE"} · 120 MIN
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
        This week is published and ready to study. Later weeks of the 620-hour
        program are still being authored; the level map is the roadmap, not a
        claim of complete course content.
      </p>
    </>
  );
}
function LessonReader({
  lesson,
  user,
  back,
}: {
  lesson: Lesson;
  user: User;
  back: () => void;
}) {
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
    const timer = setInterval(refresh, 10000);
    return () => {
      active = false;
      clearInterval(timer);
    };
  }, [endpoint]);
  return (
    <>
      <button className="text-button" onClick={back}>
        ← All lessons
      </button>
      <span className="eyebrow">
        MONTH 1 · WEEK 1 · DAY {lesson.day}
        {lesson.optional ? " · OPTIONAL" : ""}
      </span>
      <h1>{lesson.title}</h1>
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
      <article className="card lesson-reading">
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
          Reference checked 6 September 2026. Use the reading within today’s
          time budget.
        </small>
      </article>
      <section className="card lesson-reading">
        <h2>Your two-hour session</h2>
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
          Stop at 120 minutes. Note what remains rather than extending the core
          session.
        </p>
      </section>
      <section className="card lesson-reading">
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
      <section className="card lesson-reading">
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
          max={1440}
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
    </>
  );
}
