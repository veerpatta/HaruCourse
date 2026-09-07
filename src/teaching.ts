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
