import { useEffect, useState } from "react";
import { canPoll, onActivityResume } from "./activity";
import {
  recordSchema,
  type RecordData,
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

// One shared read of every practice record for the signed-in account (the
// creator reads Haru's). Polls while the app can, and falls back to the
// device copy when the server cannot be reached.
export function useCourseRecords(user: User) {
  const [records, setRecords] = useState<CourseRecord[]>(() =>
    readLocal(user),
  );
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
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
    const refresh = () =>
      fetch("/api/course-records", { cache: "no-store" })
        .then(async (r) => {
          if (!r.ok) throw Error();
          return r.json();
        })
        .then((v: { records: CourseRecord[] }) => {
          if (active) {
            cloud = v.records;
            merge(); setLoaded(true);
            setError("");
          }
        })
        .catch(() => {
          merge(); if (active) setLoaded(true);
          if (active)
            setError(
              "Can't reach the server right now. Totals show the last saved figures; your work is safe on this device.",
            );
        });
    void refresh();
    window.addEventListener('harucourse:records', merge);
    window.addEventListener('storage', merge);
    const timer = setInterval(() => {
      if (canPoll()) void refresh();
    }, 5000);
    const stopWatching = onActivityResume(() => void refresh());
    return () => {
      active = false;
      clearInterval(timer);
      stopWatching();
      window.removeEventListener('harucourse:records', merge);
      window.removeEventListener('storage', merge);
    };
  }, [user.id, user.role]);
  return { records, error, loaded };
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
