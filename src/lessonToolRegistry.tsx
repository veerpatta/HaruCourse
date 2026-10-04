import type { ReactNode } from "react";
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

// Starter files and practice pages authored with the module corrections.
export const starterFiles: Record<string, StarterFile[]> = {};

export function lessonToolsFor(lessonId: string): Tool[] {
  const files = starterFiles[lessonId] || [];
  return [...(examples[lessonId] || []), ...(files.length ? [{ label: "Starter files", render: () => <StarterFiles files={files} /> }] : [])];
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
