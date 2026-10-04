import { useId, useState } from "react";
import type { RecordData } from "../shared/record";
import { courseProgress } from "../shared/learning";
import { coreProgress, coreSatisfied, coreStages, lessonTrack, nextCoreLesson, stageProgress } from "./corePath";
import type { Lesson } from "./teaching";
import type { SetPractice } from "./LearningProgress";
import { humanDate } from "./labels";

type RecordLike = { lessonId: string; record: RecordData };

// The learner's chosen view of the course. It is a display preference on this
// device: switching never changes, hides or deletes saved work.
export type PathMode = "core" | "library";
export function usePathMode(userId: string) {
  const key = `harucourse:path:${userId}`;
  const [mode, setMode] = useState<PathMode>(() => {
    try { return localStorage.getItem(key) === "library" ? "library" : "core"; } catch { return "core"; }
  });
  function choose(next: PathMode) {
    setMode(next);
    try { localStorage.setItem(key, next); } catch {}
  }
  return [mode, choose] as const;
}

export function PathModeSwitch({ mode, onChange }: { mode: PathMode; onChange: (m: PathMode) => void }) {
  const id = useId();
  return (
    <fieldset className="path-switch">
      <legend>Show me</legend>
      <label className="choice-option"><input type="radio" name={id} checked={mode === "core"} onChange={() => onChange("core")} /><span><strong>Recommended core path</strong> · the lessons this course recommends first, each with a reason</span></label>
      <label className="choice-option"><input type="radio" name={id} checked={mode === "library"} onChange={() => onChange("library")} /><span><strong>Full library</strong> · all 224 lessons by module</span></label>
      <p className="muted">Switching changes only what is listed. Every saved answer stays, and both progress figures keep counting.</p>
    </fieldset>
  );
}

// Core path and full library are different denominators; both are shown so
// choosing the shorter route never hides or redefines earlier progress.
export function PathProgress({ lessons, records }: { lessons: Lesson[]; records: RecordLike[] }) {
  const core = coreProgress(records);
  const library = courseProgress(lessons, records);
  return (
    <section className="path-progress" aria-label="Progress">
      <div className="work-progress">
        <div className="work-progress-head"><div><span className="progress-label">Core path</span><strong>{core.percent}%</strong></div><span className="progress-count">{core.done} / {core.total} lessons</span></div>
        <progress value={core.done} max={core.total} aria-label="Core path lessons finished or shown with existing skill" />
        <small>{core.finished} finished{core.shown ? `, ${core.shown} shown with existing skill (pending review)` : ""}. The recommended route for a designer moving into product design.</small>
      </div>
      <div className="work-progress">
        <div className="work-progress-head"><div><span className="progress-label">Full library</span><strong>{library.percent}%</strong></div><span className="progress-count">{library.finished} / {library.total} lessons</span></div>
        <progress value={library.finished} max={library.total || 1} aria-label="Full library practice finished" />
        <small>Every required lesson in all 20 modules. You control both numbers by finishing practice; time and review are tracked separately.</small>
      </div>
    </section>
  );
}

function statusOf(id: string, records: RecordLike[]) {
  const done = coreSatisfied(id, records);
  if (done === "finished") return "Finished ✓";
  if (done === "skill-shown") return "Skill shown ✓";
  const r = records.find((x) => x.lessonId === id)?.record;
  return r && (r.status !== "not-started" || r.learning?.action) ? "In progress" : "Not started";
}

export function CorePathPanel({ lessons, records, bookmarkId, open }: { lessons: Lesson[]; records: RecordLike[]; bookmarkId?: string; open: (id: string) => void }) {
  const next = nextCoreLesson(records, bookmarkId);
  const current = coreStages.findIndex((s) => s.lessons.some((l) => l.id === next));
  return (
    <section className="core-path" aria-labelledby="core-path-title">
      <h2 id="core-path-title">Your recommended path</h2>
      <p className="page-lead">Six stages, about {coreStages.reduce((n, s) => n + s.lessons.length, 0)} lessons. Each one says why it is on the path. Everything else stays in the full library for when a project needs it.</p>
      {coreStages.map((stage, i) => {
        const p = stageProgress(stage, records);
        return (
          <details key={stage.id} className="stage-card" open={i === current}>
            <summary>
              <span className="stage-number">Stage {i + 1}</span>
              <strong>{stage.title}</strong>
              <span className="progress-count">{p.done} / {p.total}</span>
            </summary>
            <p>{stage.purpose}</p>
            <p className="muted"><strong>Evidence to keep:</strong> {stage.evidence}</p>
            <ol className="stage-lessons">
              {stage.lessons.map((item) => {
                const lesson = lessons.find((l) => l.id === item.id);
                if (!lesson) return null;
                return (
                  <li key={item.id}>
                    <button className={`lesson-row lesson-preview${item.id === next ? " is-next" : ""}`} onClick={() => open(item.id)}>
                      <span className="lesson-number">Module {lesson.week || 1} · Lesson {lesson.day}{item.id === next ? " · Next" : ""}</span>
                      <strong className="lesson-title">{lesson.title}</strong>
                      <span className="lesson-status">{statusOf(item.id, records)} <span aria-hidden>→</span></span>
                      <span className="lesson-description"><b>Why it is on your path:</b> {item.why}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </details>
        );
      })}
    </section>
  );
}

export function TrackNote({ lessonId }: { lessonId: string }) {
  const track = lessonTrack(lessonId);
  if (track.kind === "core")
    return <p className="track-note is-core"><strong>Core path · stage {track.stageNumber}, {track.stage.title}.</strong> {track.why}</p>;
  if (track.kind === "extension")
    return <p className="track-note is-extension"><strong>Optional technical extension.</strong> This lesson is about building in code, with a runnable starter. The core path does not require it: the concepts are covered in Module 12 Lessons 1 and 12.</p>;
  return <p className="track-note"><strong>Library lesson.</strong> Not on the recommended core path. Open it when your project needs this depth; finishing it still counts in your full-library progress.</p>;
}

// Spaced retrieval: finished lessons whose "use it on a new case" task is
// still empty, oldest finish first, once at least a day has passed.
export function RevisitPanel({ lessons, records, open }: { lessons: Lesson[]; records: RecordLike[]; open: (id: string, section: string, action: string) => void }) {
  const dayAgo = Date.now() - 24 * 60 * 60 * 1000;
  const due = records
    .filter(({ record }) => record.learning?.finishedAt && Date.parse(record.learning.finishedAt) < dayAgo && !(record.worksheet?.["transfer-decision"] || "").trim())
    .map(({ lessonId, record }) => ({ lesson: lessons.find((l) => l.id === lessonId), at: record.learning!.finishedAt! }))
    .filter((x): x is { lesson: Lesson; at: string } => !!x.lesson?.apprenticeship?.transfer)
    .sort((a, b) => a.at.localeCompare(b.at))
    .slice(0, 3);
  if (!due.length) return null;
  return (
    <section className="revisit card" aria-labelledby="revisit-title">
      <h2 id="revisit-title">Revisit: use an idea on a new case</h2>
      <p>A short, new scenario for a lesson you finished earlier. Trying it after a gap shows whether the idea stays with you. About ten minutes each; optional.</p>
      <div className="compact-list">
        {due.map(({ lesson, at }) => (
          <button key={lesson.id} className="lesson-row" onClick={() => open(lesson.id, lesson.id === "week1-day1-v1" ? "check" : "practice", lesson.id === "week1-day1-v1" ? "transfer-decision" : "write-transfer-decision")}>
            <strong className="lesson-title">{lesson.title}</strong>
            <span className="lesson-status">Finished {humanDate(at)} <span aria-hidden>→</span></span>
          </button>
        ))}
      </div>
    </section>
  );
}

// Existing skill shown with the learner's own artefact, for the visual-refresh
// lessons the core path lets a working designer skip.
export function DemonstratedSkill({ lesson, record, setRecord, readOnly }: { lesson: Lesson; record: RecordData; setRecord: SetPractice; readOnly: boolean }) {
  const id = useId();
  const track = lessonTrack(lesson.id);
  const saved = record.learning?.demonstrated;
  const [reference, setReference] = useState(saved?.reference || "");
  const [evidence, setEvidence] = useState(saved?.evidence || "");
  if (track.kind !== "core" || !track.skippable) return null;
  const criteria = lesson.criteria || [];
  return (
    <details className="demonstrated-skill card" open={!!saved}>
      <summary>Already have this skill? Show it with your own work{saved ? " · shown" : ""}</summary>
      <p>As a working designer you may already meet this lesson's criteria. Link one piece of your existing work and explain, criterion by criterion, where it shows the “independently adequate” level. This counts toward your core path only: it is not finished practice, it stays labelled pending review, and you can still do the lesson at any time.</p>
      <ol className="criteria-anchors">
        {criteria.map((c) => <li key={c.criterion}><strong>{c.criterion}.</strong> Adequate: {c.levels[2]}</li>)}
      </ol>
      {saved && <p className="review-status" role="status">Shown {humanDate(saved.at)}. Ask for a review in Your work to confirm it.</p>}
      {!readOnly && (
        <form className="review-form" onSubmit={(e) => {
          e.preventDefault();
          if (!reference.trim() || evidence.trim().length < 40) return;
          setRecord((r) => ({ ...r, status: r.status === "not-started" ? "practicing" : r.status, learning: { ...r.learning, demonstrated: { reference: reference.trim(), evidence: evidence.trim(), at: new Date().toISOString() } } }));
        }}>
          <label htmlFor={`${id}-ref`}>Where the work is (a link you are happy to share, or a file name)</label>
          <input id={`${id}-ref`} maxLength={2000} value={reference} onChange={(e) => setReference(e.target.value)} />
          <label htmlFor={`${id}-evidence`}>Where it meets each criterion</label>
          <textarea id={`${id}-evidence`} rows={5} maxLength={4000} value={evidence} onChange={(e) => setEvidence(e.target.value)} placeholder="Criterion 1: … Criterion 2: …" />
          <button className="secondary" disabled={!reference.trim() || evidence.trim().length < 40}>{saved ? "Update" : "Use my existing work for the core path"}</button>
          {saved && <button type="button" className="text-button" onClick={() => setRecord((r) => ({ ...r, learning: { ...r.learning, demonstrated: undefined } }))}>Remove</button>}
        </form>
      )}
    </details>
  );
}
