import { SESSION_CAP, type RecordData } from '../shared/record';
export const IDLE_MS = 5 * 60_000;
export const CHECKPOINT_MS = 15_000;
export type TimedSegment = { id: string; startedAt: string; elapsedMs: number; step?: number };
// Absolute elapsed time makes local recovery and retried folds idempotent.
export function applyTimed(record: RecordData, segment: TimedSegment): RecordData {
  const old = record.sessions?.find(s => s.id === segment.id);
  const delta = Math.max(0, segment.elapsedMs - (old?.elapsedMs ?? 0));
  if (!delta) return record;
  const elapsed = delta + (record.timingRemainderMs ?? 0);
  const minutes = Math.floor(elapsed / 60000);
  const entry = { ...segment, minutes: (old?.minutes ?? 0) + minutes };
  const sessions = old ? record.sessions!.map(s => s.id === segment.id ? entry : s) : [...(record.sessions ?? []), entry];
  return { ...record, minutes: record.minutes + minutes, timingRemainderMs: elapsed % 60000,
    sessions: sessions.slice(-SESSION_CAP), status: record.status === 'not-started' ? 'practicing' : record.status };
}
export function activeDelta(from: number, now: number, lastInput: number) {
  return Math.max(0, Math.min(now, lastInput + IDLE_MS) - from);
}
export function correctTotal(r: RecordData, minutes: number): RecordData {
  let remaining = minutes;
  const sessions = [...(r.sessions ?? [])].reverse().map(s => {
    const kept = Math.min(remaining, s.minutes); remaining -= kept;
    return { ...s, minutes: kept };
  }).reverse();
  return { ...r, minutes, sessions, timingRemainderMs: 0 };
}
