import type { Lesson } from "./teaching";
import type { LessonAction } from "./lessonOneFlow";

// A lesson's actions grouped into short sittings with visible pause points
// (improvement plan, 4 October 2026). Sessions are a reading aid only: they
// change no action IDs, saved answers or completion rules, and the learner can
// stop after any action. Lesson 1 authors its own sessions; every other lesson
// is grouped by the same rule so the pattern is predictable.
export type LessonSession = {
  number: number;
  title: string;
  purpose: string;
  // Inclusive indices into lesson.flow.
  start: number;
  end: number;
};

const generic = [
  { title: "See it and try it", purpose: "Learn the idea, see a worked example and try the first part with help." },
  { title: "Make your work", purpose: "Build the main piece of work, one answer at a time." },
  { title: "Check, repair and keep", purpose: "Explain your reasoning, improve one answer and leave yourself a next step." },
];

export type SessionPlan = { title: string; purpose: string; firstAction: string }[];

export function lessonSessions(lesson: Lesson, authored?: SessionPlan): LessonSession[] {
  const flow = lesson.flow ?? [];
  if (!flow.length) return [];
  if (authored?.length) {
    const starts = authored.map((s) => flow.findIndex((a) => a.id === s.firstAction));
    if (starts.every((i, n) => i >= 0 && (n === 0 ? i === 0 : i > starts[n - 1])))
      return authored.map((s, n) => ({ number: n + 1, title: s.title, purpose: s.purpose, start: starts[n], end: n + 1 < starts.length ? starts[n + 1] - 1 : flow.length - 1 }));
  }
  const lastIndex = (test: (a: LessonAction) => boolean) => flow.reduce((last, a, i) => (test(a) ? i : last), -1);
  const firstEnd = lastIndex((a) => a.section === "learn" || (a.section === "practice-plan" && a.step === 1));
  const secondEnd = lastIndex((a) => a.section === "practice-plan");
  const bounds = [firstEnd, secondEnd, flow.length - 1];
  const sessions: LessonSession[] = [];
  let start = 0;
  bounds.forEach((end, n) => {
    if (end < start) return;
    sessions.push({ number: sessions.length + 1, ...generic[n], start, end });
    start = end + 1;
  });
  return sessions;
}

export function sessionOf(sessions: LessonSession[], index: number) {
  return sessions.find((s) => index >= s.start && index <= s.end) ?? sessions[0];
}
