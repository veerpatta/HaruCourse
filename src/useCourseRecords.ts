import { useEffect, useRef, useState } from "react";
import { canPoll, onActivityResume } from "./activity";
import {
  recordSchema,
  type RecordData,
  type ReviewSummary,
  type SessionEntry,
  type User,
} from "../shared/record";

export type CourseRecord = {
  lessonId: string;
  revision?: number;
  record: RecordData;
};

// What this device already holds, so totals are not zero while offline. The
// server copy replaces it as soon as a fetch succeeds.
function readLocal(user: User): CourseRecord[] {
  if (user.role === 'creator') return [];
  const found: CourseRecord[] = [];
  try {
    const lessonPrefix = `harucourse:lesson:${user.id}:`;
    const baselineKey = `harucourse:baseline:v1:${user.id}`;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.getItem.length ? localStorage.key(i) : null;
      if (!key || key.endsWith(":sync")) continue;
      let lessonId: string | null = null;
      if (key === baselineKey) lessonId = "baseline-v1";
      else if (key.startsWith(lessonPrefix))
        lessonId = key.slice(lessonPrefix.length);
      if (!lessonId) continue;
      let value; try { value = JSON.parse(localStorage.getItem(key) || "null"); } catch { continue; }
      const parsed = recordSchema.safeParse(value);
      if (parsed.success) found.push({ lessonId, record: parsed.data });
    }
  } catch {
    // Storage unavailable; the fetch below is the only source.
  }
  return found;
}

// How often an open, visible app asks whether anything changed elsewhere. The
// question costs one database row; the full answer is fetched only when the
// server's records version has moved. This learner's own edits appear at once
// through the device copy, so the interval only bounds cross-device delay.
export const RECORDS_POLL_MS = 60_000;

// One shared read of every practice record for the signed-in account (the
// creator reads Haru's). Polls while the app can, and falls back to the
// device copy when the server cannot be reached.
export function useCourseRecords(user: User) {
  const [records, setRecords] = useState<CourseRecord[]>(() =>
    readLocal(user),
  );
  const [reviews, setReviews] = useState<ReviewSummary[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const version = useRef<number | null>(null);
  useEffect(() => {
    let active = true;
    let cloud: CourseRecord[] = [];
    const merge = () => {
      const local = readLocal(user);
      const merged = [...cloud];
      for (const row of local) {
        const key = row.lessonId === 'baseline-v1' ? `harucourse:baseline:v1:${user.id}` : `harucourse:lesson:${user.id}:${row.lessonId}`;
        let dirty = false, revision = 0; try { const meta = JSON.parse(localStorage.getItem(key + ':sync') || 'null'); dirty = !!meta?.dirty; revision = meta?.revision ?? 0; } catch {}
        const index = merged.findIndex(r => r.lessonId === row.lessonId);
        if (index < 0) merged.push(row); else if (dirty || revision > (merged[index].revision ?? 0)) merged[index] = {...row,revision};
      }
      if (active) setRecords(merged);
    };
    setRecords(readLocal(user));
    version.current = null;
    const refresh = () =>
      fetch(`/api/course-records${version.current === null ? "" : `?since=${version.current}`}`, { cache: "no-store" })
        .then(async (r) => {
          if (!r.ok) throw Error();
          return r.json();
        })
        .then((v: { records?: CourseRecord[]; reviews?: ReviewSummary[]; version?: number; unchanged?: true }) => {
          if (!active) return;
          if (!v.unchanged) {
            cloud = v.records || [];
            setReviews(v.reviews || []);
            merge();
          }
          version.current = typeof v.version === "number" ? v.version : null;
          setLoaded(true);
          setError("");
        })
        .catch(() => {
          merge(); if (active) setLoaded(true);
          if (active)
            setError(
              "Can't reach the server right now. Totals show the last saved figures; your work is safe on this device.",
            );
        });
    void refresh();
    // A creator review just saved changes the review summaries; read them now
    // rather than at the next poll.
    const refreshNow = () => void refresh();
    window.addEventListener('harucourse:records', merge);
    window.addEventListener('harucourse:reviews', refreshNow);
    window.addEventListener('storage', merge);
    const timer = setInterval(() => {
      if (canPoll()) void refresh();
    }, RECORDS_POLL_MS);
    const stopWatching = onActivityResume(() => void refresh());
    return () => {
      active = false;
      clearInterval(timer);
      stopWatching();
      window.removeEventListener('harucourse:records', merge);
      window.removeEventListener('harucourse:reviews', refreshNow);
      window.removeEventListener('storage', merge);
    };
  }, [user.id, user.role]);
  return { records, reviews, error, loaded };
}

export type LoggedSession = SessionEntry & { lessonId: string };

// Course-wide figures. Minutes come from the authoritative total on each
// record, not from summing the bounded session log.
export function practiceTotals(records: CourseRecord[]) {
  const sessions: LoggedSession[] = [];
  let minutes = 0;
  let started = 0;
  let ready = 0;
  for (const { lessonId, record } of records) {
    minutes += record.minutes;
    if (record.status !== "not-started") started++;
    if (record.status === "ready-for-review") ready++;
    for (const s of record.sessions ?? []) sessions.push({ ...s, lessonId });
  }
  sessions.sort((a, b) => b.startedAt.localeCompare(a.startedAt));
  return { minutes, started, ready, sessions };
}
