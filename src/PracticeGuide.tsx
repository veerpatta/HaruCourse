import { useId, useState, type SetStateAction } from "react";
import type { Apprenticeship, GuideStep, Lesson, VideoAction, WorksheetField } from "./teaching";
import type { RecordData } from "../shared/record";
import { WORKSHEET_VALUE_CAP } from "../shared/record";
import { downloadText, filledCount, resumeStep, worksheetFields, worksheetMarkdown } from "./worksheet";

// Shared guided-practice reader: one manageable step at a time, an editable
// worksheet inside each step, contextual help, and a clear place to resume.
// Everything a learner types goes through the lesson's existing record, so
// saving, conflicts, backups and review keep working unchanged.

type SetRecord = (value: SetStateAction<RecordData>) => void;

function Field({
  field,
  value,
  onChange,
  readOnly,
}: {
  field: WorksheetField;
  value: string;
  onChange: (v: string) => void;
  readOnly: boolean;
}) {
  const id = useId();
  const hintId = field.hint ? `${id}-hint` : undefined;
  const common = {
    id,
    "aria-describedby": hintId,
    disabled: readOnly,
    maxLength: WORKSHEET_VALUE_CAP,
  };
  return (
    <div className="worksheet-field">
      <label htmlFor={id}>{field.label}</label>
      {field.hint && (
        <p className="field-hint" id={hintId}>
          {field.hint}
        </p>
      )}
      {field.kind === "choice" ? (
        <select {...common} value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="">Choose…</option>
          {(field.options ?? []).map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : field.kind === "long" ? (
        <textarea {...common} rows={4} value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input {...common} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
      {field.example && (
        <details className="field-example">
          <summary>Show an example</summary>
          <p>{field.example}</p>
        </details>
      )}
    </div>
  );
}

export function VideoActionBlock({ video, online }: { video: VideoAction; online: boolean }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className="video-action" aria-label="Optional video">
      <h4>Optional video · {video.duration}</h4>
      <p>
        <a href={video.url} target="_blank" rel="noreferrer">
          {video.title} ↗
        </a>{" "}
        by {video.publisher}. {video.language}; {video.captions}.
      </p>
      <p>{video.segment}</p>
      {loaded ? (
        <div className="video-frame">
          <iframe
            src={video.embedUrl}
            title={video.title}
            allow="fullscreen; picture-in-picture"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <button type="button" className="secondary" onClick={() => setLoaded(true)} disabled={!online}>
          {online ? "Load the video here" : "Video needs an internet connection"}
        </button>
      )}
      <p className="muted">Nothing plays until you choose to load it. Opening the link above works too.</p>
      <h5>What to notice</h5>
      <ul>
        {video.notice.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <p>
        <strong>Then:</strong> {video.then}
      </p>
      <details>
        <summary>Without the video</summary>
        <p>{video.written}</p>
      </details>
      <details>
        <summary>About this video</summary>
        <p>{video.differences}</p>
        <p>
          {video.access} Checked {video.checked}.
        </p>
      </details>
    </section>
  );
}

function StepHelp({ step, activity }: { step: GuideStep; activity: Apprenticeship }) {
  const hasHelp = step.terms?.length || step.start || step.enough;
  if (!hasHelp) return null;
  return (
    <details className="step-help">
      <summary>Help with this step</summary>
      {step.terms?.length ? (
        <dl>
          {step.terms.map((t) => (
            <div key={t.term}>
              <dt>{t.term}</dt>
              <dd>{t.meaning}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {step.start && (
        <p>
          <strong>Stuck starting?</strong> {step.start}
        </p>
      )}
      {step.enough && (
        <p>
          <strong>Is it enough?</strong> {step.enough}
        </p>
      )}
      {activity.hints.length > 0 && (
        <p className="muted">More hints are under “Hints and optional rehearsal” below the steps.</p>
      )}
    </details>
  );
}

export function PracticeGuide({
  lesson,
  activity,
  record,
  setRecord,
  readOnly,
  status,
  online,
  trackedStep,
  onTrack,
}: {
  lesson: Lesson;
  activity: Apprenticeship;
  record: RecordData;
  setRecord: SetRecord;
  readOnly: boolean;
  status: string;
  online: boolean;
  trackedStep: number | null;
  onTrack?: (step: number | null) => void;
}) {
  const guide = activity.guide ?? [];
  const fields = worksheetFields(lesson);
  const byId = new Map(fields.map((f) => [f.id, f]));
  const done = new Set(record.guide?.done ?? []);
  // Which step is open: the learner's last choice this visit, else the saved
  // resume point. Choosing a step also saves it as the place to come back to.
  const [chosen, setChosen] = useState<number | null>(null);
  const openStep = chosen ?? resumeStep(lesson, record);
  const count = filledCount(lesson, record.worksheet);

  function updateGuide(update: (g: { step?: number; done: number[] }) => { step?: number; done: number[] }) {
    if (readOnly) return;
    setRecord((r) => ({
      ...r,
      guide: update({ step: r.guide?.step, done: r.guide?.done ?? [] }),
      status: r.status === "not-started" ? "practicing" : r.status,
    }));
  }
  function choose(step: number) {
    setChosen(step);
    if (record.guide?.step !== step) updateGuide((g) => ({ ...g, step }));
  }
  function setField(id: string, value: string) {
    if (readOnly) return;
    setRecord((r) => {
      const next = { ...(r.worksheet ?? {}) };
      if (value) next[id] = value;
      else delete next[id];
      return {
        ...r,
        worksheet: Object.keys(next).length ? next : undefined,
        status: r.status === "not-started" ? "practicing" : r.status,
      };
    });
  }
  function toggleDone(step: number) {
    const willBeDone = !done.has(step);
    updateGuide((g) => {
      const list = g.done.filter((n) => n !== step);
      if (willBeDone) list.push(step);
      list.sort((a, b) => a - b);
      const next = step < guide.length ? step + 1 : step;
      return { step: willBeDone ? next : step, done: list };
    });
    if (willBeDone && step < guide.length) setChosen(step + 1);
  }

  return (
    <section className="practice-guide" aria-label="Practice steps">
      <p className="guide-progress" role="status">
        Worksheet: {count.filled} of {count.total} answers filled · {done.size} of {guide.length} steps ticked ·{" "}
        {status}
      </p>
      <ol className="guide-steps">
        {lesson.steps.map((s, i) => {
          const n = i + 1;
          const g = guide[i];
          const isOpen = openStep === n;
          const isDone = done.has(n);
          return (
            <li key={s.title} className={`guide-step${isOpen ? " is-open" : ""}${isDone ? " is-done" : ""}`}>
              <h3 className="guide-step-title">
                <button
                  type="button"
                  className="guide-step-toggle"
                  aria-expanded={isOpen}
                  aria-controls={`guide-step-${n}`}
                  onClick={() => (isOpen ? setChosen(-1) : choose(n))}
                >
                  <span className="guide-step-number" aria-hidden="true">
                    {isDone ? "✓" : n}
                  </span>
                  <span>
                    Step {n} · {s.title}
                    {isDone ? <span className="muted"> · ticked</span> : ""}
                  </span>
                </button>
              </h3>
              <div id={`guide-step-${n}`} hidden={!isOpen} className="guide-step-body">
                <h4>Do this</h4>
                <ul>
                  {s.instructions.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {g && (
                  <p className="guide-expect">
                    <strong>You should end up with:</strong> {g.expect}
                  </p>
                )}
                {g?.video && activity.video && activity.video.id === g.video && (
                  <VideoActionBlock video={activity.video} online={online} />
                )}
                {g?.example && (
                  <details className="field-example">
                    <summary>Show an example</summary>
                    <p>{g.example}</p>
                  </details>
                )}
                {g?.fields?.length ? (
                  <div className="worksheet" role="group" aria-label={`Worksheet for step ${n}`}>
                    <h4>Fill in</h4>
                    {g.fields.map((id) => {
                      const f = byId.get(id);
                      if (!f) return null;
                      return (
                        <Field
                          key={id}
                          field={f}
                          value={record.worksheet?.[id] ?? ""}
                          onChange={(v) => setField(id, v)}
                          readOnly={readOnly}
                        />
                      );
                    })}
                  </div>
                ) : null}
                {g && <StepHelp step={g} activity={activity} />}
                {!readOnly && (
                  <div className="guide-step-actions">
                    <button type="button" className={isDone ? "secondary" : "primary"} onClick={() => toggleDone(n)}>
                      {isDone ? "Untick this step" : n < guide.length ? "Tick and go to next step" : "Tick this step"}
                    </button>
                    {onTrack && (
                      <button
                        type="button"
                        className="text-button"
                        aria-pressed={trackedStep === n}
                        onClick={() => onTrack(trackedStep === n ? null : n)}
                      >
                        {trackedStep === n ? "Timing this step" : "Time this step"}
                      </button>
                    )}
                  </div>
                )}
                <p className="muted">A tick only marks where you are. You can untick it, skip ahead or come back at any time.</p>
              </div>
            </li>
          );
        })}
      </ol>
      <div className="guide-actions">
        <button
          type="button"
          className="secondary"
          onClick={() => downloadText(`${lesson.id}-worksheet.md`, worksheetMarkdown(lesson, record))}
        >
          Download a copy of this worksheet
        </button>
        <p className="muted">
          A plain-text file for your own folder. The app keeps saving the worksheet whether or not you download it.
        </p>
      </div>
    </section>
  );
}

// Read-only view of every answer, for Your work and the creator's review.
export function WorksheetSummary({ lesson, record }: { lesson: Lesson; record: RecordData }) {
  const sections = lesson.apprenticeship?.worksheet ?? [];
  const w = record.worksheet ?? {};
  const count = filledCount(lesson, record.worksheet);
  if (!sections.length) return null;
  return (
    <details className="worksheet-summary">
      <summary>
        Worksheet answers · {count.filled} of {count.total} filled
      </summary>
      {sections.map((s) => (
        <section key={s.id}>
          <h4>{s.title}</h4>
          <dl>
            {s.fields.map((f) => (
              <div key={f.id}>
                <dt>{f.label}</dt>
                <dd>{(w[f.id] ?? "").trim() || <span className="muted">Not filled yet</span>}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </details>
  );
}
