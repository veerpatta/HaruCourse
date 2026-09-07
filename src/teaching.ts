// One editable field of an in-app worksheet. `id` is the key stored in the
// learner's record (shared/record.ts worksheetSchema), so it is permanent
// once a lesson ships: rename the label, never the id. `example` text is
// always synthetic and must say so in the text itself.
export type WorksheetField = {
  id: string;
  label: string;
  kind: "short" | "long" | "choice";
  options?: string[];
  hint?: string;
  example?: string;
};
export type WorksheetSection = {
  id: string;
  title: string;
  intro?: string;
  fields: WorksheetField[];
};
// Guidance for one practice step, aligned by index with Lesson.steps. The
// step's `instructions` remain the actions; this adds what the learner should
// have at the end, an optional labelled example, word explanations, a way to
// start and a way to judge whether it is enough. `fields` names the
// worksheet fields filled during this step.
export type GuideStep = {
  expect: string;
  fields?: string[];
  example?: string;
  terms?: { term: string; meaning: string }[];
  start?: string;
  enough?: string;
  video?: string;
};
// A verified video segment paired with an immediate action. The catalog row
// (RESOURCE-LIBRARY.md) holds the access evidence; src/reading.ts holds the
// selection under the same id; the lesson supplies only `then`.
export type VideoSelection = {
  title: string;
  publisher: string;
  url: string;
  embedUrl: string;
  duration: string;
  language: string;
  captions: string;
  segment: string;
  notice: string[];
  differences: string;
  access: string;
  checked: string;
};
export type VideoAction = VideoSelection & { id: string; then: string; written: string };
export type Apprenticeship = {
  activity: string;
  mission: string;
  workspace: { tools: string; setup: string[]; file: string; save: string[] };
  starter: string;
  hints: string[];
  adequate: string;
  handoff: string;
  ai?: { purpose: string; setup: string[]; prompt: string; followUp: string; alternative: string };
  visual?: boolean;
  // Present only on lessons refined under docs/LEARNING-EXPERIENCE-PLAN.md.
  route?: { recommended: string; alternative: string };
  worksheet?: WorksheetSection[];
  guide?: GuideStep[];
  video?: VideoAction;
};
export type Criterion = {
  criterion: string;
  evidence: string;
  levels: [string, string, string, string];
  remediation: string;
  recheck: string;
};
export type AssignedResource = {
  id: string;
  title: string;
  url: string;
  section: string;
  purpose: string;
  minutes: string;
  limits: string;
  fallbackId: string;
};
export type LegacyLesson = {
  id: string;
  day: number;
  week?: number;
  title: string;
  optional?: boolean;
  why: string;
  teach: string[];
  example: string;
  steps: { minutes: number; title: string; text: string }[];
  deliverable: string;
  check: { question: string; answer: string }[];
  rubric: string[];
  portfolio: string;
  resource: { id: string; title: string; url: string };
  // Everything below arrived with the m03/m04 lesson contract. The earlier
  // lessons omit these fields, so every reader must tolerate their absence
  // rather than assume the richer shape.
  module?: string;
  level?: number;
  areas?: number[];
  objective?: string;
  bringForward?: string;
  misconception?: string;
  freeToolPath?: string;
  resources?: AssignedResource[];
  criteria?: Criterion[];
  // Set by modules authored directly in the guided Learn -> Do -> Check shape
  // rather than bridged through adaptPublished. It is what lets the content
  // checker hold new lessons to the concise standard while leaving m03-m07,
  // which predate it, exempt by design.
  guided?: true;
};
export type Lesson = Omit<LegacyLesson, "steps"> & {
  apprenticeship?: Apprenticeship;
  id: string;
  day: number;
  week?: number;
  title: string;
  optional?: boolean;
  why: string;
  teach: string[];
  explanation: string[];
  example: string;
  prerequisite: string;
  outputs: string[];
  repairs: string[];
  steps: {
    minutes: number;
    title: string;
    instructions: string[];
    text: string;
  }[];
  deliverable: string;
  check: { question: string; answer: string }[];
  rubric: string[];
  portfolio: string;
  resource: { id: string; title: string; url: string };
};
export function withLegacyText(
  l: Omit<Lesson, "deliverable" | "steps"> & {
    steps: Omit<Lesson["steps"][number], "text">[];
  },
): Lesson {
  return {
    ...l,
    deliverable: l.outputs.join("; "),
    steps: l.steps.map((s) => ({ ...s, text: s.instructions.join(" ") })),
  };
}

export function adaptPublished(l: LegacyLesson): Lesson {
  return {...l, prerequisite: l.bringForward || 'Bring the preceding lesson output.',
    outputs: [l.deliverable], repairs: (l.criteria || []).map(c => c.remediation),
    explanation: l.teach, teach: [l.objective || l.why],
    steps: l.steps.map(s => ({...s, instructions: [s.text]}))};
}
