import { useEffect, useRef, useState, type SetStateAction } from "react";
import {
  recordSchema,
  type RecordData,
  type CloudRecord,
  type User,
} from "../shared/record";
export const emptyRecord: RecordData = {
  version: 1,
  notes: "",
  submission: "",
  minutes: 0,
  status: "not-started",
  updatedAt: "",
};
export function usePractice(user: User, lessonId: string, storageKey: string) {
  const [record, render] = useState<RecordData>(() => {
    try {
      return recordSchema.parse(
        JSON.parse(
          localStorage.getItem(storageKey) ||
            (storageKey === "harucourse:baseline:v1:haru"
              ? localStorage.getItem("harucourse:baseline:v1")
              : null) ||
            "null",
        ),
      );
    } catch {
      return emptyRecord;
    }
  });
  const current = useRef(record),
    revision = useRef(0),
    dirty = useRef(false),
    ready = useRef(false),
    saving = useRef(false),
    generation = useRef(0),
    active = useRef(true);
  const [status, setStatus] = useState("Loading saved work…");
  const [conflict, setConflict] = useState<CloudRecord | null>(null);
  const blocked = useRef(false);
  const url = "/api/progress?lessonId=" + encodeURIComponent(lessonId);
  function persist() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(current.current));
      localStorage.setItem(
        storageKey + ":sync",
        JSON.stringify({ revision: revision.current, dirty: dirty.current }),
      );
      return true;
    } catch {
      setStatus(
        "Device storage unavailable. Keep this window open until saved online.",
      );
      return false;
    }
  }
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null);
  function setRecord(value: SetStateAction<RecordData>) {
    current.current =
      typeof value === "function" ? value(current.current) : value;
    if (
      current.current.status === "ready-for-review" &&
      (!current.current.notes.trim() || !current.current.submission.trim())
    )
      current.current = { ...current.current, status: "practicing" };
    generation.current++;
    if (debounce.current) clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      void flush();
    }, 800);
    dirty.current = true;
    render(current.current);
    persist();
    setStatus(
      navigator.onLine ? "Saving…" : "Saved on device · waiting for connection",
    );
  }
  async function hydrate() {
    try {
      const r = await fetch(url, { cache: "no-store" });
      if (!r.ok)
        throw Error(
          r.status === 401
            ? "Sign in again to sync."
            : "Cloud unavailable. Your draft stays on this device.",
        );
      const remote: CloudRecord = await r.json();
      if (!active.current) return;
      if (dirty.current && remote.revision !== revision.current) {
        blocked.current = true;
        setConflict(remote);
        setStatus("Another version exists. Choose which copy to keep.");
        ready.current = true;
        return;
      }
      revision.current = remote.revision;
      if (!dirty.current) {
        current.current = remote.record || emptyRecord;
        render(current.current);
      }
      ready.current = true;
      persist();
      setStatus(dirty.current ? "Saving…" : "Saved online");
    } catch (e) {
      if (active.current)
        setStatus(e instanceof Error ? e.message : "Waiting for connection");
    }
  }
  async function flush() {
    if (
      !ready.current ||
      saving.current ||
      blocked.current ||
      !dirty.current ||
      user.role !== "learner"
    )
      return;
    if (!navigator.onLine) {
      setStatus("Saved on device · waiting for connection");
      return;
    }
    const parsed = recordSchema.safeParse(current.current);
    if (!parsed.success) {
      setStatus(
        "Draft kept on device. Add required evidence or correct minutes to sync.",
      );
      return;
    }
    saving.current = true;
    const serial = generation.current;
    try {
      const r = await fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          record: parsed.data,
          expectedRevision: revision.current,
        }),
      });
      if (r.status === 409) {
        blocked.current = true;
        await hydrate();
        return;
      }
      if (!r.ok)
        throw Error(
          r.status === 401
            ? "Sign in again to sync."
            : "Sync failed · retrying with your draft preserved",
        );
      const saved: CloudRecord = await r.json();
      revision.current = saved.revision;
      if (serial === generation.current) {
        dirty.current = false;
        current.current = saved.record!;
        if (active.current) render(current.current);
      }
      if (active.current) persist();
      else {
        try {
          const local = JSON.parse(localStorage.getItem(storageKey) || "null");
          if (
            local &&
            local.notes === parsed.data.notes &&
            local.submission === parsed.data.submission &&
            local.minutes === parsed.data.minutes &&
            local.status === parsed.data.status
          )
            persist();
        } catch {}
      }
      if (active.current) setStatus(dirty.current ? "Saving…" : "Saved online");
    } catch (e) {
      if (active.current)
        setStatus(e instanceof Error ? e.message : "Sync failed");
    } finally {
      saving.current = false;
    }
  }
  useEffect(() => {
    active.current = true;
    try {
      const meta = JSON.parse(
        localStorage.getItem(storageKey + ":sync") || "null",
      );
      revision.current = meta?.revision || 0;
      dirty.current =
        meta?.dirty ??
        (!!current.current.notes ||
          !!current.current.submission ||
          current.current.minutes > 0);
    } catch {
      dirty.current = true;
    }
    if (user.role === "creator") dirty.current = false;
    void hydrate();
    const interval = setInterval(() => {
      if (!ready.current) void hydrate();
      else void flush();
    }, 2000);
    const reconnect = () => {
      if (!ready.current) void hydrate();
      else void flush();
    };
    window.addEventListener("online", reconnect);
    return () => {
      active.current = false;
      clearInterval(interval);
      window.removeEventListener("online", reconnect);
    };
  }, []);
  function resolve(useCloud: boolean) {
    if (!conflict) return;
    if (useCloud) {
      const a = document.createElement("a");
      const u = URL.createObjectURL(
        new Blob(
          [JSON.stringify({ lessonId, record: current.current }, null, 2)],
          {
            type: "application/json",
          },
        ),
      );
      a.href = u;
      a.download = lessonId + "-before-conflict.json";
      a.click();
      setTimeout(() => URL.revokeObjectURL(u), 1000);
      current.current = conflict.record || emptyRecord;
      render(current.current);
      dirty.current = false;
    }
    revision.current = conflict.revision;
    blocked.current = false;
    setConflict(null);
    persist();
    setStatus(useCloud ? "Saved online" : "Saving your chosen draft…");
  }
  return { record, setRecord, status, conflict, resolve };
}
