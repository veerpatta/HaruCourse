import type { ReactNode } from "react";
import type { Lesson } from "./teaching";
import { ReflowDemo, ReorderExample, StateExample, StarterFiles, UncertaintyCalculator, type StarterFile } from "./lessonTools";

// Which working examples and starter files each lesson offers. They appear on
// the lesson's "Choose where you will do the work" action, and stay one tap
// away beside every answer. Files live in public/ so the service worker
// caches them with the course for offline use.
type Tool = { label: string; render: () => ReactNode };

const examples: Record<string, Tool[]> = {
  "m03-l07-v1": [{ label: "Reflow or clipped: working example", render: () => <ReflowDemo /> }],
  "m09-l02-v1": [{ label: "Every state of a control: working example", render: () => <StateExample /> }],
  "m09-l03-v1": [{ label: "Every state of a control: working example", render: () => <StateExample /> }],
  "m09-l04-v1": [{ label: "Reduced motion that keeps every state: working example", render: () => <StateExample /> }],
  "m09-l10-v1": [{ label: "Saving, saved, failed and cancelled: working example", render: () => <StateExample /> }],
  "m09-l08-v1": [{ label: "Three ways to reorder: working example", render: () => <ReorderExample /> }],
  "m15-l02-v1": [{ label: "Uncertainty calculator", render: () => <UncertaintyCalculator /> }],
  "m15-l03-v1": [{ label: "Uncertainty calculator", render: () => <UncertaintyCalculator /> }],
  "m15-l04-v1": [{ label: "Uncertainty calculator", render: () => <UncertaintyCalculator /> }],
  "m15-l05-v1": [{ label: "Uncertainty calculator", render: () => <UncertaintyCalculator /> }],
  "m15-l08-v1": [{ label: "Uncertainty calculator", render: () => <UncertaintyCalculator /> }],
};

// Starter files and practice pages authored with the module corrections. A
// lesson offers every file its own text refers to, so the course text and the
// download list cannot drift apart.
const fileNotes: Record<string, Omit<StarterFile, "href">> = {
  "/starters/m08/booking-screen-starter.svg": { label: "Editable booking screen (SVG)", note: "A mid-fidelity 390 × 844 screen with named groups. Open it in a free vector tool such as Inkscape or Penpot, or in a text editor. Duplicate it before editing." },
  "/starters/m08/hierarchy-before-after.svg": { label: "Annotated before and after (SVG)", note: "Two versions of the same screen with numbered notes; the text of every note is also in the lesson's practice notes." },
};
const referenced = new Map<string, StarterFile[]>();
export function starterFilesFor(lesson: Lesson): StarterFile[] {
  if (!referenced.has(lesson.id)) {
    const hrefs = [...new Set((JSON.stringify(lesson).match(/\/(?:starters|labs)\/[a-z0-9/._-]+?\.(?:html|svg|css|js|txt)/gi) || []))];
    referenced.set(lesson.id, hrefs.map((href) => ({ href, ...(fileNotes[href] || { label: href.split("/").pop()!, note: href.startsWith("/labs/") ? "A practice page that works offline. Open it in a new tab." : "A starter file that works offline. Save a copy before editing." }) })));
  }
  return referenced.get(lesson.id)!;
}

export function lessonToolsFor(lesson: Lesson): Tool[] {
  const files = starterFilesFor(lesson);
  return [...(examples[lesson.id] || []), ...(files.length ? [{ label: "Starter files and practice pages", render: () => <StarterFiles files={files} /> }] : [])];
}

export function LessonTools({ tools, open = false }: { tools: Tool[]; open?: boolean }) {
  if (!tools.length) return null;
  if (open) return <div className="lesson-tools">{tools.map((t) => <div key={t.label}>{t.render()}</div>)}</div>;
  return (
    <div className="lesson-tools is-collapsed">
      {tools.map((t) => (
        <details key={t.label} className="tool-disclosure">
          <summary>{t.label}</summary>
          {t.render()}
        </details>
      ))}
    </div>
  );
}
