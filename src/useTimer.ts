import { useEffect, useRef, useState } from "react";
import {
  SESSION_CAP,
  type RecordData,
  type SessionEntry,
} from "../shared/record";

// The timer keeps counting for at most this long after the last input, then
// pauses itself at that boundary. It covers reading without scrolling,
// sketching in Figma over the browser (which Windows reports as a hidden
// tab), a locked phone, a reload and an OS kill with one rule. Ten minutes is
// the shortest practice step in the course and the most a forgotten timer
// can overcount.
export const AWAY_LIMIT_MS = 10 * 60_000;
// Running state is written to this device on every transition and on this
// cadence while running and visible. It is a local write only; the record
// itself is written to the server only when time is folded in.
export const TICK_PERSIST_MS = 15_000;
// A resume this long after an entry opened starts a new entry so a session
// picked up the next day is logged under the right date.
export const SESSION_MAX_AGE_MS = 12 * 3_600_000;
const INPUT_THROTTLE_MS = 5_000;
const MINUTE = 60_000;

type TimerState = {
  v: 1;
  running: boolean;
  segmentStart: number | null;
  lastInput: number;
  lastSeen: number;
  bankedMs: number;
  foldedMs: number;
  entryStartedAt: string | null;
  step: number | null;
  autoPausedAt: number | null;
};

const fresh = (): TimerState => ({
  v: 1,
  running: false,
  segmentStart: null,
  lastInput: 0,
  lastSeen: 0,
  bankedMs: 0,
  foldedMs: 0,
  entryStartedAt: null,
  step: null,
  autoPausedAt: null,
});

function load(key: string): TimerState {
  try {
    const raw = JSON.parse(localStorage.getItem(key) || "null");
    if (raw && raw.v === 1) return { ...fresh(), ...raw };
  } catch {
    // Unreadable state is treated as no session; nothing on the server is
    // affected because minutes already folded in live on the record.
  }
  return fresh();
}

function save(key: string, state: TimerState) {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch {
    // Device storage full or blocked. The display still works from memory
    // and the next fold still reaches the record.
  }
}

// Adds whole minutes to the entry for this session and step, or opens one.
// Keyed by startedAt so re-applying after a conflict swap is idempotent.
function upsert(
  sessions: SessionEntry[],
  startedAt: string,
  step: number | null,
  minutes: number,
): SessionEntry[] {
  const next = sessions.map((s) => ({ ...s }));
  const match = next.find(
    (s) => s.startedAt === startedAt && (s.step ?? null) === step && !s.manual,
  );
  if (match) match.minutes = Math.min(1440, match.minutes + minutes);
  else
    next.push(
      step === null
        ? { startedAt, minutes }
        : { startedAt, minutes, step },
    );
  return next.slice(-SESSION_CAP);
}

export type TimerSnapshot = {
  running: boolean;
  elapsedMs: number;
  hasSession: boolean;
  step: number | null;
  autoPausedAt: number | null;
};

// StrictMode mounts, unmounts and remounts effects in development. Pausing
// synchronously in cleanup would pause every running timer the moment a lesson
// opened in dev, so the pause is deferred one tick and cancelled by a remount.
const pendingPause = new Map<string, ReturnType<typeof setTimeout>>();

export function useTimer({
  storageKey,
  enabled,
  active,
  setRecord,
}: {
  storageKey: string;
  // False for the creator: no listeners, no local key, never a write.
  enabled: boolean;
  // False while the owning view is off screen; the timer pauses itself.
  active: boolean;
  setRecord: (update: (r: RecordData) => RecordData) => void;
}) {
  const state = useRef<TimerState>(enabled ? load(storageKey) : fresh());
  const [snapshot, setSnapshot] = useState<TimerSnapshot>(() =>
    snap(state.current, Date.now()),
  );
  const [notice, setNotice] = useState("");

  function snap(s: TimerState, now: number): TimerSnapshot {
    const live =
      s.running && s.segmentStart ? Math.max(0, now - s.segmentStart) : 0;
    return {
      running: s.running,
      elapsedMs: s.foldedMs + s.bankedMs + live,
      hasSession: s.entryStartedAt !== null,
      step: s.step,
      autoPausedAt: s.autoPausedAt,
    };
  }
  function commit(now = Date.now()) {
    save(storageKey, state.current);
    setSnapshot(snap(state.current, now));
  }

  // The only place the timer writes the record. Whole minutes move into the
  // total and the session log; the remainder stays banked on this device so
  // short pauses lose nothing. Never called on a tick.
  function fold(endMs: number, roundUp = false) {
    const s = state.current;
    const live = s.segmentStart ? Math.max(0, endMs - s.segmentStart) : 0;
    const total = s.bankedMs + live;
    let whole = Math.floor(total / MINUTE);
    let remainder = total - whole * MINUTE;
    if (roundUp && remainder >= MINUTE / 2) {
      whole += 1;
      remainder = 0;
    }
    s.bankedMs = roundUp ? 0 : remainder;
    s.segmentStart = s.running ? endMs : null;
    if (whole > 0 && s.entryStartedAt) {
      s.foldedMs += whole * MINUTE;
      const startedAt = s.entryStartedAt;
      const step = s.step;
      setRecord((r) => ({
        ...r,
        minutes: r.minutes + whole,
        sessions: upsert(r.sessions ?? [], startedAt, step, whole),
        status: r.status === "not-started" ? "practicing" : r.status,
      }));
    }
    return whole;
  }

  // Applies the away limit. Returns true when it paused the timer.
  function check(now: number) {
    const s = state.current;
    if (!s.running) return false;
    const limit = s.lastInput + AWAY_LIMIT_MS;
    if (now <= limit) return false;
    fold(limit);
    s.running = false;
    s.segmentStart = null;
    s.autoPausedAt = limit;
    setNotice(
      `Paused automatically after 10 quiet minutes. ${Math.floor(
        (s.foldedMs + s.bankedMs) / MINUTE,
      )} minutes kept.`,
    );
    return true;
  }

  function start() {
    if (!enabled) return;
    const now = Date.now();
    const s = state.current;
    if (s.running) return;
    const aged =
      s.entryStartedAt !== null &&
      now - Date.parse(s.entryStartedAt) > SESSION_MAX_AGE_MS;
    if (s.entryStartedAt === null || aged) {
      s.entryStartedAt = new Date(now).toISOString();
      s.foldedMs = 0;
      s.bankedMs = 0;
    }
    s.running = true;
    s.segmentStart = now;
    s.lastInput = now;
    s.lastSeen = now;
    s.autoPausedAt = null;
    setNotice(s.foldedMs || s.bankedMs ? "Timer resumed" : "Timer started");
    commit(now);
  }

  function pause() {
    if (!enabled) return;
    const now = Date.now();
    const s = state.current;
    if (!s.running) return;
    fold(now);
    s.running = false;
    s.segmentStart = null;
    setNotice(
      `Paused at ${Math.floor((s.foldedMs + s.bankedMs) / MINUTE)} minutes`,
    );
    commit(now);
  }

  function finish() {
    if (!enabled) return;
    const now = Date.now();
    const s = state.current;
    if (s.entryStartedAt === null) return;
    const before = s.foldedMs;
    fold(now, true);
    const added = Math.floor((s.foldedMs - before) / MINUTE);
    const sessionMinutes = Math.floor(s.foldedMs / MINUTE);
    s.running = false;
    s.segmentStart = null;
    s.entryStartedAt = null;
    s.step = null;
    s.bankedMs = 0;
    s.foldedMs = 0;
    s.autoPausedAt = null;
    setNotice(
      `Session finished. ${sessionMinutes} minutes recorded${
        added ? "" : " — under a minute was not counted"
      }.`,
    );
    commit(now);
  }

  function markStep(step: number | null) {
    if (!enabled) return;
    const now = Date.now();
    const s = state.current;
    const next = s.step === step ? null : step;
    if (s.running) fold(now);
    s.step = next;
    if (s.running) s.lastInput = now;
    setNotice(next ? `Now on step ${next}` : "Step cleared");
    commit(now);
  }

  // Practice done away from the app. A separate log entry, never mixed into a
  // timed one, and no effect on the running state.
  function addMinutes(n: number) {
    if (!enabled || !Number.isInteger(n) || n < 1) return;
    const startedAt = new Date().toISOString();
    setRecord((r) => ({
      ...r,
      minutes: r.minutes + n,
      sessions: [
        ...(r.sessions ?? []),
        { startedAt, minutes: Math.min(1440, n), manual: true as const },
      ].slice(-SESSION_CAP),
      status: r.status === "not-started" ? "practicing" : r.status,
    }));
    setNotice(`${n} minutes added`);
  }

  function setTotal(n: number) {
    if (!enabled || !Number.isInteger(n) || n < 0) return;
    setRecord((r) => ({ ...r, minutes: n }));
    setNotice(`Total set to ${n} minutes`);
  }

  function setConfidence(value: number | undefined) {
    if (!enabled) return;
    setRecord((r) => {
      const next = { ...r };
      if (value === undefined) delete next.confidence;
      else next.confidence = value;
      return next;
    });
  }

  useEffect(() => {
    if (!enabled) return;
    const pending = pendingPause.get(storageKey);
    if (pending) {
      clearTimeout(pending);
      pendingPause.delete(storageKey);
    }
    // A reload or a killed app lands here with running still true. The same
    // away rule applies, so at most ten minutes after the last known input is
    // counted, and a stale running flag becomes a pause with one write.
    const now = Date.now();
    state.current = load(storageKey);
    check(now);
    commit(now);

    let lastPersist = now;
    const tick = setInterval(() => {
      const s = state.current;
      if (!s.running || document.visibilityState === "hidden") return;
      const t = Date.now();
      if (check(t)) {
        commit(t);
        return;
      }
      if (t - lastPersist >= TICK_PERSIST_MS) {
        s.lastSeen = t;
        lastPersist = t;
        save(storageKey, s);
      }
      setSnapshot(snap(s, t));
    }, 1000);

    const input = () => {
      const s = state.current;
      if (!s.running) return;
      const t = Date.now();
      if (t - s.lastInput < INPUT_THROTTLE_MS) return;
      s.lastInput = t;
      save(storageKey, s);
    };
    const hidden = () => {
      const s = state.current;
      if (!s.running) return;
      const t = Date.now();
      // Fold now so the record is never more than the live segment stale if
      // the app is killed while hidden. Counting continues up to the limit.
      fold(t);
      s.lastInput = t;
      commit(t);
    };
    const visibility = () => {
      const t = Date.now();
      if (document.visibilityState === "hidden") hidden();
      else {
        check(t);
        commit(t);
      }
    };
    const options = { passive: true } as const;
    for (const type of ["pointerdown", "keydown", "touchstart", "wheel", "scroll"])
      document.addEventListener(type, input, options);
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("pagehide", hidden);
    return () => {
      clearInterval(tick);
      for (const type of ["pointerdown", "keydown", "touchstart", "wheel", "scroll"])
        document.removeEventListener(type, input);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("pagehide", hidden);
      // Leaving the lesson: fold what has run, then pause on the next tick so
      // a StrictMode remount cancels it and a real unmount completes it.
      const s = state.current;
      if (s.running) {
        fold(Date.now());
        save(storageKey, s);
        pendingPause.set(
          storageKey,
          setTimeout(() => {
            pendingPause.delete(storageKey);
            const latest = load(storageKey);
            if (!latest.running) return;
            latest.running = false;
            latest.segmentStart = null;
            save(storageKey, latest);
          }, 50),
        );
      }
    };
  }, [storageKey, enabled]);

  useEffect(() => {
    if (enabled && !active && state.current.running) pause();
  }, [active, enabled]);

  return {
    snapshot,
    notice,
    start,
    pause,
    resume: start,
    finish,
    markStep,
    addMinutes,
    setTotal,
    setConfidence,
  };
}

export type Timer = ReturnType<typeof useTimer>;
