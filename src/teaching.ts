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
  optional?: boolean;
  requiredWhen?: { field: string; values: string[] };
};
export type WorksheetSection = {
  id: string;
  title: string;
  intro?: string;
  fields: WorksheetField[];
};
// "See it": one complete made-up example that shows the reasoning rather than
// the finished answer — including the turn the author nearly took and got
// wrong, what the choice cost, and what stayed unknown. Always labelled as
// invented; never presented as anyone's research.
export type Demonstration = {
  scenario: string;
  beats: { label: string; text: string }[];
  wrongTurn: string;
  tradeoff: string;
  uncertainty: string;
};
// "Try it with help": one small supplied case, answered before any feedback
// appears. Every option explains why it is right or wrong, so a plausible
// wrong answer teaches rather than just failing.
export type Choice = { label: string; correct?: true; feedback: string };
export type SupportedPractice = {
  material: string;
  question: string;
  options: Choice[];
  then: string;
};
// A richer form of "Try it with help": several supplied lines, each labelled
// from the same small set of options, each with its own explanation for every
// option. It exists because a lesson whose whole point is one distinction
// deserves more than one supported attempt at it. Answers live in component
// state only — nothing is saved, counted or scored, so `pattern` names the
// mistake people usually make rather than reporting a tally.
export type LabelItem = {
  id: string;
  text: string;
  answer: string;
  feedback: Record<string, string>;
};
export type LabelPractice = {
  intro: string;
  options: string[];
  items: LabelItem[];
  then: string;
  pattern: string;
};
// "Check the reason": the learner answers first, then reads why. `repair`
// sends one specific issue back into their own artefact. Nothing computes or
// stores a score; choices and feedback reveals are saved as formative practice.
export type ActiveCheck = {
  question: string;
  options: Choice[];
  repair: string;
  recheck: string;
};
// "Save and continue" for the route the lesson actually recommends, so the
// in-app worksheet is not contradicted by generic file instructions.
export type SaveRoute = {
  auto: string;
  external: string;
  creator: string;
  next: string;
};
// Guidance for one practice step, aligned by index with Lesson.steps. The
// step's `instructions` remain the actions; this adds what the learner should
// have at the end, an optional labelled example, word explanations, a way to
// start and a way to judge whether it is enough. `fields` names the
// worksheet fields filled during this step. `reveal` keeps a repeated set of
// fields from arriving all at once: only `first` are shown until the learner
// asks for the next group.
export type GuideStep = {
  expect: string;
  fields?: string[];
  example?: string;
  terms?: { term: string; meaning: string }[];
  start?: string;
  enough?: string;
  video?: string;
  demo?: Demonstration;
  supported?: SupportedPractice;
  sorter?: LabelPractice;
  // `count` bounds the repeated block; fields after it always show.
  reveal?: { first: number; group: number; count?: number; addLabel: string; note: string };
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
  // Present only on lessons refined against docs/BEGINNER-LESSON-AUDIT.md.
  checks?: ActiveCheck[];
  saveRoute?: SaveRoute;
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
  flow?: import('./lessonOneFlow').LessonAction[];
  actionPlan?: import('./moduleActionPlans').ActionPlan;
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
  // The teaching goes in the visible path. This adapter used to show only the
  // objective and push every authored paragraph into `explanation`, which the
  // reader renders inside a "Why this works" disclosure: 56 lessons across
  // m03-m07 opened with a single line and hid the lesson behind a click
  // (docs/BEGINNER-LESSON-AUDIT.md, "core teaching hidden"). The objective is
  // not lost — the reader shows it as what the lesson produces — and
  // `explanation` is left empty so the same text is never printed twice.
  return {...l, prerequisite: l.bringForward || 'Bring the preceding lesson output.',
    outputs: [l.deliverable], repairs: (l.criteria || []).map(c => c.remediation),
    explanation: [], teach: l.teach,
    steps: l.steps.map(s => ({...s, instructions: [s.text]}))};
}
