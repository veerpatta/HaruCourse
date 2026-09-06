export type Lesson = {
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
