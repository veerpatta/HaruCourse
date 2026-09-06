import type { RecordData } from "../shared/record";

// Words a learner sees. Internal states and section ids stay as they are so
// saved records, bookmarks and the API never change; only the labels do.
export function statusLabel(status: RecordData["status"]) {
  return {
    "not-started": "Not started",
    practicing: "In progress",
    "ready-for-review": "Ready for review",
  }[status];
}

export function sectionLabel(id: string) {
  return (
    {
      learn: "Learn",
      "practice-plan": "Practice plan",
      check: "Check yourself",
      practice: "Your practice",
    }[id] || id.replaceAll("-", " ")
  );
}

// "45 min", "2 h", "2 h 5 min". Whole minutes only; the record never holds
// fractions.
export function humanDuration(minutes: number) {
  const whole = Math.max(0, Math.floor(minutes));
  if (whole < 60) return `${whole} min`;
  const h = Math.floor(whole / 60);
  const m = whole % 60;
  return m ? `${h} h ${m} min` : `${h} h`;
}

// Live timer digits: "12:34" or "1:02:05". Text, not a live region, so it can
// change every second without being read aloud every second.
export function formatClock(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return h ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

export function humanDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}
