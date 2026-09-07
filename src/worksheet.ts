import type { Lesson, WorksheetField } from "./teaching";
import type { RecordData, Worksheet } from "../shared/record";

// Helpers shared by the reader, the Your work summary, the review export and
// the downloadable copy. Everything here runs in the browser on the record it
// already holds; nothing fetches.

export function worksheetFields(lesson: Lesson): WorksheetField[] {
  return (lesson.apprenticeship?.worksheet ?? []).flatMap((s) => s.fields);
}

export function filledCount(lesson: Lesson, worksheet?: Worksheet | null) {
  const fields = worksheetFields(lesson);
  const filled = fields.filter((f) => (worksheet?.[f.id] ?? "").trim()).length;
  return { filled, total: fields.length };
}

// Which step to reopen: the saved one, else the first not ticked, else 1.
export function resumeStep(lesson: Lesson, record: RecordData | undefined) {
  const count = lesson.steps.length;
  if (!count) return 1;
  const saved = record?.guide?.step;
  if (saved && saved <= count) return saved;
  const done = new Set(record?.guide?.done ?? []);
  for (let i = 1; i <= count; i++) if (!done.has(i)) return i;
  return count;
}

// A plain-text copy of the worksheet the learner can keep in her own folder.
// Ordinary Markdown headings and labels; no table syntax to type or repair.
export function worksheetBody(lesson: Lesson, record: RecordData) {
  const sections = lesson.apprenticeship?.worksheet ?? [];
  const w = record.worksheet ?? {};
  return sections
    .map(
      (s) =>
        `## ${s.title}\n\n` +
        s.fields
          .map((f) => `**${f.label}**\n${(w[f.id] ?? "").trim() || "(not filled yet)"}\n`)
          .join("\n"),
    )
    .join("\n");
}

export function worksheetMarkdown(lesson: Lesson, record: RecordData) {
  const done = record.guide?.done ?? [];
  return `# ${lesson.title}\n\nLesson: ${lesson.id}\nSaved copy of the in-app worksheet. Practice status: ${record.status} (self-reported, not assessed).\nSteps ticked as a navigation aid: ${done.length ? done.join(", ") : "none"}.\n\n${worksheetBody(lesson, record)}\n## Notes and next action\n${record.notes.trim() || "(none)"}\n\n## Work reference\n${record.submission.trim() || "(worksheet kept in the app)"}\n`;
}

export function downloadText(name: string, value: string, type = "text/markdown") {
  const url = URL.createObjectURL(new Blob([value], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
