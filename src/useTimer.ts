import { useEffect, useRef, useState } from 'react';
import { SESSION_CAP, type RecordData } from '../shared/record';
import { activeDelta, applyTimed, CHECKPOINT_MS, correctTotal, IDLE_MS, type TimedSegment } from './timing';
export const AWAY_LIMIT_MS = IDLE_MS;
export const TICK_PERSIST_MS = CHECKPOINT_MS;
type Stored = { v: 2; segment: TimedSegment | null; manualPaused: boolean };
export type TimerSnapshot = { running: boolean; elapsedMs: number; segmentId: string | null; hasSession: boolean; step: number | null; autoPausedAt: number | null };
export function useTimer({ storageKey, enabled, active, setRecord }: {
  storageKey: string; enabled: boolean; active: boolean;
  setRecord: (update: (r: RecordData) => RecordData) => void;
}) {
  const state = useRef<Stored>({v: 2, segment: null, manualPaused: false});
  const runtime = useRef({running: false, lastTick: 0, lastInput: 0, checkpoint: 0, cloud: 0, step: null as number | null});
  const callback = useRef(setRecord); callback.current = setRecord;
  const allowed = useRef(enabled && active); allowed.current = enabled && active;
  const owner = useRef(crypto.randomUUID());
  const lockKey = storageKey.replace(/:[^:]+$/, '') + ':active-tab';
  const [notice, setNotice] = useState('Time records automatically while you use this lesson.');
  const [snapshot, setSnapshot] = useState<TimerSnapshot>({running:false, elapsedMs:0, segmentId:null, hasSession:false, step:null, autoPausedAt:null});
  function save() { try {
    const lease = JSON.parse(localStorage.getItem(lockKey) || 'null');
    if (lease && lease.owner !== owner.current && Date.now() - lease.at < 5000) return;
    localStorage.setItem(storageKey, JSON.stringify(state.current));
  } catch { setNotice('Device storage unavailable. Keep this page open until your time saves online.'); } }
  function display(autoPausedAt: number | null = null) {
    setSnapshot({ running: runtime.current.running, elapsedMs: state.current.segment?.elapsedMs ?? 0,
      segmentId:state.current.segment?.id ?? null, hasSession: !!state.current.segment, step: runtime.current.step, autoPausedAt });
  }
  function fold() {
    const segment = state.current.segment;
    if (segment) callback.current(r => applyTimed(r, {...segment}));
  }
  function release() {
    try { const lease = JSON.parse(localStorage.getItem(lockKey) || 'null'); if (lease?.owner === owner.current) localStorage.removeItem(lockKey); } catch {}
  }
  function claim(now: number) {
    try {
      const lease = JSON.parse(localStorage.getItem(lockKey) || 'null');
      if (lease && lease.owner !== owner.current && now - lease.at < 5000) return false;
      localStorage.setItem(lockKey, JSON.stringify({owner: owner.current, at: now}));
      return true;
    } catch { return false; }
  }
  function accrue(now: number) {
    const rt = runtime.current;
    if (rt.running && state.current.segment && now - rt.lastTick <= 5000) state.current.segment.elapsedMs = Math.min(86400000,
      state.current.segment.elapsedMs + activeDelta(rt.lastTick, now, rt.lastInput));
    rt.lastTick = now;
  }
  function stop(manual: boolean, message: string) {
    accrue(Date.now()); runtime.current.running = false;
    if (manual) state.current.manualPaused = true;
    save(); fold(); release(); display(); setNotice(message);
  }
  function start() {
    if (!allowed.current || document.visibilityState === 'hidden' || !document.hasFocus()) return;
    const now = Date.now();
    if (!claim(now)) { setNotice('Time is recording in another course tab.'); return; }
    if (!state.current.segment || state.current.segment.elapsedMs >= 86400000) {
      state.current.segment = {id:crypto.randomUUID(), startedAt:new Date(now).toISOString(), elapsedMs:0,
        ...(runtime.current.step ? {step: runtime.current.step} : {})};
    }
    state.current.manualPaused = false;
    Object.assign(runtime.current, {running:true, lastTick:now, lastInput:now, checkpoint:now, cloud:now});
    save(); display(); setNotice('Recording active course time.');
  }
  function markStep(step: number | null) {
    if (!enabled) { runtime.current.step = step; return; }
    if (runtime.current.step === step) return;
    const wasRunning = runtime.current.running;
    if (state.current.segment) { stop(false, 'Activity changed.'); state.current.segment = null; }
    runtime.current.step = step; save(); display();
    if (wasRunning) start();
  }
  useEffect(() => {
    if (!enabled) return;
    // A second mounted tab must not recover or erase a live tab's checkpoint.
    let otherOwner = false;
    try { const lease = JSON.parse(localStorage.getItem(lockKey) || 'null'); otherOwner = lease && lease.owner !== owner.current && Date.now() - lease.at < 5000; } catch {}
    try {
      const old = otherOwner ? null : JSON.parse(localStorage.getItem(storageKey) || 'null');
      if (old?.v === 2) {
        state.current = old;
        // Recover only checkpointed elapsed time, never wall-clock absence.
        fold(); state.current.segment = null;
      } else if (old?.v === 1 && old.bankedMs > 0) {
        state.current.segment = {id:crypto.randomUUID(), startedAt:new Date().toISOString(), elapsedMs:Math.min(59999, old.bankedMs)};
        save(); fold(); state.current.segment = null;
      }
    } catch { state.current = {v:2,segment:null,manualPaused:false}; }
    if (!otherOwner) save(); display();
    const input = (e: Event) => {
      if (!allowed.current || state.current.manualPaused || !document.hasFocus() || document.visibilityState === 'hidden') return;
      if (e.target instanceof Element && e.target.closest('[data-time-control]')) return;
      const now = Date.now();
      if (runtime.current.running) { accrue(now); runtime.current.lastInput = now; }
      else start();
    };
    const away = () => { if (runtime.current.running) stop(false, 'Paused while you are away. Add time for other apps or paper work manually.'); };
    const visibility = () => { if (document.visibilityState === 'hidden') away(); };
    const interval = setInterval(() => {
      const rt = runtime.current;
      if (!rt.running) return;
      const now = Date.now();
      if (!allowed.current || !document.hasFocus() || document.visibilityState === 'hidden') { away(); return; }
      if (now - rt.lastTick > 5000 || now < rt.lastTick) { rt.running = false; save(); fold(); release(); display(); return; }
      if (!claim(now)) { away(); return; }
      accrue(now);
      if (now - rt.lastInput >= IDLE_MS) {
        stop(false, 'Paused after five minutes without interaction. Continue using the lesson to resume.'); display(now); return;
      }
      if (now - rt.checkpoint >= CHECKPOINT_MS) { save(); rt.checkpoint = now; }
      if (now - rt.cloud >= 60000) { fold(); rt.cloud = now; }
      display();
    }, 1000);
    for (const event of ['pointerdown','keydown','wheel','touchstart']) document.addEventListener(event, input, {passive:true});
    window.addEventListener('blur', away); window.addEventListener('pagehide', away);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      clearInterval(interval);
      for (const event of ['pointerdown','keydown','wheel','touchstart']) document.removeEventListener(event, input);
      window.removeEventListener('blur', away); window.removeEventListener('pagehide', away);
      document.removeEventListener('visibilitychange', visibility);
      if (runtime.current.running) stop(false, 'Time saved.');
      release();
    };
  }, [storageKey, enabled]);
  useEffect(() => { if (!active && runtime.current.running) stop(false, 'Tracking paused until the draft is ready.'); }, [active]);
  function addMinutes(n: number) {
    if (!allowed.current || !Number.isInteger(n) || n < 1 || n > 1440) return;
    stop(false, 'Adding external study time.'); state.current.segment = null; save(); display();
    callback.current(r => ({...r, minutes:r.minutes+n, status:r.status === 'not-started' ? 'practicing' : r.status,
      sessions:[...(r.sessions ?? []), {startedAt:new Date().toISOString(), minutes:n, manual:true as const}].slice(-SESSION_CAP)}));
    setNotice(`${n} minutes added for work outside the course.`);
  }
  return {snapshot, notice, start, resume:start,
    pause: () => stop(true, 'Paused by you. Choose Resume to record again.'),
    finish: () => { stop(true, 'Time saved. Finishing a timer does not finish lesson practice.'); state.current.segment = null; save(); display(); },
    markStep, addMinutes,
    setTotal: (n: number) => { if (allowed.current && Number.isSafeInteger(n) && n >= 0) { stop(true, 'Total corrected; tracking paused.'); callback.current(r => correctTotal(r,n)); } },
    setConfidence: (value: number | undefined) => { if (allowed.current) callback.current(r => ({...r, confidence:value})); },
  };
}
export type Timer = ReturnType<typeof useTimer>;
