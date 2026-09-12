import { useEffect, useId, useState } from "react";
import { Check, Pause, Play } from "lucide-react";
import type { RecordData, SessionEntry } from "../shared/record";
import { formatClock, humanDate, humanDuration } from "./labels";
import type { Timer } from "./useTimer";

type Step = { minutes: number; title: string; text: string };

// Keep focus state available to responsive styling; the timer stays inline.
function useKeyboardOpen() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const field = (t: EventTarget | null) =>
      t instanceof Element && t.matches("textarea, input, select");
    const focusIn = (e: FocusEvent) => {
      if (timer) clearTimeout(timer);
      setOpen(field(e.target));
    };
    const focusOut = () => {
      timer = setTimeout(() => setOpen(false), 100);
    };
    document.addEventListener("focusin", focusIn);
    document.addEventListener("focusout", focusOut);
    return () => {
      if (timer) clearTimeout(timer);
      document.removeEventListener("focusin", focusIn);
      document.removeEventListener("focusout", focusOut);
    };
  }, []);
  return open;
}

export function SessionTimer({
  timer,
  record,
  role,
  steps,
}: {
  timer: Timer;
  record: RecordData;
  role: "creator" | "learner";
  steps: Step[];
}) {
  const keyboardOpen = useKeyboardOpen();
  if (role === "creator") return <SessionSummary record={record} steps={steps} />;
  const { running, elapsedMs, hasSession, step, autoPausedAt } =
    timer.snapshot;
  const appliedMs = record.sessions?.find(s => s.id === timer.snapshot.segmentId)?.elapsedMs ?? 0;
  const lessonMs = record.minutes * 60000 + (record.timingRemainderMs ?? 0) + Math.max(0, elapsedMs - appliedMs);
  const stepTitle = step ? steps[step - 1]?.title : null;
  const sub = autoPausedAt
    ? "Paused after five minutes without interaction"
    : running
      ? stepTitle
        ? `Step ${step} · ${stepTitle}`
        : "Recording active course use"
      : hasSession
        ? "Paused"
        : `${humanDuration(record.minutes)} recorded so far`;
  return (
    <div
      className={`session-timer${hasSession ? " has-session" : ""}${running ? " is-running" : ""}${
        keyboardOpen ? " keyboard-open" : ""
      }`}
      role="group"
      aria-label="Practice timer"
      data-time-control
    >
      <div className="session-timer-main">
        <span className="session-timer-clock">
          {running && <span className="session-timer-dot" aria-hidden />}
          {formatClock(lessonMs)}
        </span>
        <span className="session-timer-sub">Lesson time · {sub}</span>
      </div>
      <div className="session-timer-actions">
        <button
          type="button"
          className="primary"
          onClick={running ? timer.pause : timer.start}
        >
          {running ? (
            <>
              <Pause size={17} /> Pause
            </>
          ) : (
            <>
              <Play size={17} /> Resume
            </>
          )}
        </button>
          <button type="button" className="secondary" disabled={!hasSession} onClick={timer.finish}>
            <Check size={17} /> End session
          </button>
      </div>
      <p className="timer-live" aria-live="polite">
        {timer.notice}
      </p>
      <details className="timer-details"><summary>Time details · {humanDuration(record.minutes)} saved</summary>
        <p>Automatic time pauses outside the course and after five quiet minutes. Add work in another app or on paper below.</p>
        <TimeAdjust minutes={record.minutes} onAdd={timer.addMinutes} onSetTotal={timer.setTotal}/>
      </details>
    </div>
  );
}

function SessionSummary({
  record,
  steps,
}: {
  record: RecordData;
  steps: Step[];
}) {
  const sessions = record.sessions ?? [];
  return (
    <section className="card session-summary">
      <span className="eyebrow">RECORDED PRACTICE</span>
      <h2>
        Haru has recorded {humanDuration(record.minutes)}
        {sessions.length
          ? ` across ${sessions.length} session${sessions.length === 1 ? "" : "s"}`
          : ""}
      </h2>
      {record.confidence && (
        <p>
          Confidence in this work: {record.confidence} of 5, self-rated. Not an
          assessment.
        </p>
      )}
      <SessionLog sessions={sessions} steps={steps} />
    </section>
  );
}

export function SessionLog({
  sessions,
  steps,
  limit = 30,
}: {
  sessions: SessionEntry[];
  steps?: Step[];
  limit?: number;
}) {
  if (!sessions.length) return <p className="muted">No sessions recorded yet.</p>;
  const ordered = [...sessions].reverse();
  const row = (s: SessionEntry, i: number) => (
    <li className="step session-row" key={`${s.startedAt}-${s.step ?? 0}-${i}`}>
      <span className="step-number">{s.step ?? "·"}</span>
      <div>
        <h3>
          {humanDate(s.startedAt)}
          <small>
            {s.manual
              ? "Added by hand"
              : s.step && steps?.[s.step - 1]
                ? `Step ${s.step} · ${steps[s.step - 1].title}`
                : "Timed"}
          </small>
        </h3>
        <p>{humanDuration(s.minutes)}</p>
      </div>
    </li>
  );
  return (
    <>
      <ol className="practice-steps session-log">
        {ordered.slice(0, limit).map(row)}
      </ol>
      {ordered.length > limit && (
        <details>
          <summary>Show earlier sessions</summary>
          <ol className="practice-steps session-log">
            {ordered.slice(limit).map((s, i) => row(s, i + limit))}
          </ol>
        </details>
      )}
    </>
  );
}

// The practice plan. Learners tap a row to say which step they are on; the
// timer attributes time from that moment to that step. Nothing here marks a
// step complete — the plan is guidance, not a checklist.
export function PracticeSteps({
  steps,
  current,
  canPick,
  onPick,
  sessions,
}: {
  steps: Step[];
  current: number | null;
  canPick: boolean;
  onPick?: (step: number | null) => void;
  sessions?: SessionEntry[];
}) {
  const recorded = (n: number) =>
    (sessions ?? [])
      .filter((s) => s.step === n)
      .reduce((sum, s) => sum + s.minutes, 0);
  return (
    <ol className="practice-steps">
      {steps.map((s, i) => {
        const n = i + 1;
        const done = recorded(n);
        const body = (
          <>
            <span className="step-number">{n}</span>
            <div>
              <h3>
                {s.title}
                <small>
                  About {s.minutes} min
                  {done ? ` · ${humanDuration(done)} so far` : ""}
                </small>
              </h3>
              <p>{s.text}</p>
            </div>
          </>
        );
        return (
          <li className="step" key={n}>
            {canPick ? (
              <button
                type="button"
                className="step-pick"
                aria-pressed={current === n}
                onClick={() => onPick?.(current === n ? null : n)}
              >
                {body}
              </button>
            ) : (
              <div className="step-pick">{body}</div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export function ConfidencePicker({
  value,
  onChange,
  disabled,
}: {
  value?: number;
  onChange: (value: number | undefined) => void;
  disabled?: boolean;
}) {
  return (
    <div className="confidence-wrap">
      <div
        className="confidence"
        role="radiogroup"
        aria-label="How confident do you feel about this work, from 1 unsure to 5 confident?"
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            type="button"
            role="radio"
            aria-checked={value === n}
            key={n}
            disabled={disabled}
            onClick={() => onChange(value === n ? undefined : n)}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="confidence-ends" aria-hidden>
        <span>Unsure</span>
        <span>Confident</span>
      </div>
    </div>
  );
}

// Time practised away from the app, and a way to correct the total. Kept
// behind a disclosure so the timer is the obvious path.
export function TimeAdjust({
  minutes,
  onAdd,
  onSetTotal,
}: {
  minutes: number;
  onAdd: (n: number) => void;
  onSetTotal: (n: number) => void;
}) {
  const [add, setAdd] = useState("");
  const fieldId = useId();
  const [total, setTotal] = useState("");
  const [message, setMessage] = useState("");
  const whole = (raw: string) => {
    const n = Number(raw);
    return raw.trim() && Number.isSafeInteger(n) && n >= 0 ? n : null;
  };
  return (
    <details className="time-adjust">
      <summary>Add or correct time</summary>
      <p className="muted">
        Practised on paper or in another app? Add those minutes here. They are
        logged separately from timed sessions.
      </p>
      <div className="time-adjust-row">
        <label htmlFor={fieldId + '-add'}>Minutes to add</label>
        <input
          id={fieldId + '-add'}
          type="number"
          inputMode="numeric"
          min={1}
          step={1}
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <button
          type="button"
          className="secondary"
          onClick={() => {
            const n = whole(add);
            if (n === null || n < 1 || n > 1440) {
              setMessage("Use whole minutes from 1 to 1440.");
              return;
            }
            onAdd(n);
            setAdd("");
            setMessage(`${n} minutes added.`);
          }}
        >
          Add
        </button>
      </div>
      <div className="muted">
        Total so far: {humanDuration(minutes)}.{" "}
        <details className="time-adjust-total">
          <summary>Edit total</summary>
          <div className="time-adjust-row">
            <label htmlFor={fieldId + '-total'}>New total in minutes</label>
            <input
              id={fieldId + '-total'}
              type="number"
              inputMode="numeric"
              min={0}
              step={1}
              value={total}
              onChange={(e) => setTotal(e.target.value)}
            />
            <button
              type="button"
              className="secondary"
              onClick={() => {
                const n = whole(total);
                if (n === null) {
                  setMessage("Use whole minutes from zero upwards.");
                  return;
                }
                onSetTotal(n);
                setTotal("");
                setMessage(`Total set to ${humanDuration(n)}.`);
              }}
            >
              Save total
            </button>
          </div>
        </details>
      </div>
      {message && <p role="status">{message}</p>}
    </details>
  );
}
