import { withLegacyText } from "./teaching";
import { diagnosticWorkspace } from './apprenticeship';
export const levels = [
  {
    title: "Find your starting point",
    hours: 10,
    description:
      "A baseline, a fresh perspective, and a practice that fits your life.",
  },
  {
    title: "Think like a product designer",
    hours: 60,
    description:
      "People, business, products, and the decisions connecting them.",
  },
  {
    title: "Discover the right problem",
    hours: 100,
    description:
      "Research, synthesis, information architecture, and user flows.",
  },
  {
    title: "Shape the experience",
    hours: 130,
    description:
      "Responsive interfaces, interaction, accessibility, and testing.",
  },
  {
    title: "Build systems that work",
    hours: 100,
    description: "Design systems, web fundamentals, handoff, and quality.",
  },
  {
    title: "Own the whole problem",
    hours: 140,
    description: "Complex workflows, analytics, AI, and independent practice.",
  },
  {
    title: "Tell your design story",
    hours: 80,
    description:
      "Portfolio case studies, presentations, and career preparation.",
  },
];

export const baselineLesson = withLegacyText({
  apprenticeship: diagnosticWorkspace,
  id: "baseline-v1",
  day: 0,
  title: "Find your starting point",
  why: "Show how you frame, investigate and explain a design problem.",
  prerequisite:
    "No preparation. Use paper or a familiar tool and a blank note.",
  teach: [
    "Context: a workshop website lets people find an event and reserve a place.",
    "Stakeholder report: some attendees arrive without knowing what materials to bring.",
    "Proposed response: a mandatory “I have read the instructions” checkbox.",
    "Evidence available: no research or analytics. Treat the report as unverified; do not invent findings.",
  ],
  explanation: [],
  example: "",
  outputs: [
    "Problem note with labelled assumptions",
    "One-page research plan with five neutral questions",
    "Task flow with one failure and recovery",
    "Two annotated wireframes: key information/reservation at mobile and desktop widths",
    "Decision notes and reflection",
  ],
  steps: [
    {
      title: "Frame the problem",
      minutes: 15,
      instructions: [
        "Write the user goal and organizer goal.",
        "Separate known facts from assumptions.",
      ],
    },
    {
      title: "Plan your investigation",
      minutes: 20,
      instructions: [
        "Name who you would speak with.",
        "Draft five neutral interview questions.",
        "Keep the plan to one page.",
      ],
    },
    {
      title: "Map the task",
      minutes: 25,
      instructions: [
        "Sketch the path from finding a workshop to confirming a reservation.",
        "Add one failure and a recovery path.",
      ],
    },
    {
      title: "Sketch two screens",
      minutes: 30,
      instructions: [
        "Show key information and reservation at mobile and desktop widths.",
        "Use paper or a familiar tool.",
      ],
    },
    {
      title: "Explain your decisions",
      minutes: 20,
      instructions: [
        "Annotate information priority and two accessibility considerations.",
        "Explain one alternative to the checkbox.",
      ],
    },
    {
      title: "Reflect and save",
      minutes: 10,
      instructions: [
        "Note what felt easy, unfamiliar or uncertain.",
        "List tools you use and whether you can access interview participants.",
        "Save readable images or a PDF in your own files.",
        "Add the work reference and next action in Your work.",
      ],
    },
  ],
  check: [],
  rubric: [
    "Assumptions separated from evidence",
    "Five neutral research questions",
    "Coherent flow with recovery",
    "Explained mobile and desktop behavior",
    "Intentional hierarchy and accessibility",
    "Decisions linked to user and business goals",
  ],
  repairs: [
    "If a claim has no evidence, mark it as an assumption.",
    "If a flow ends at a failure, show a recovery action.",
    "If a decision lacks reasoning, annotate the goal it supports.",
    "Bring unfinished work and uncertainties to review; do not add invented results.",
  ],
  portfolio:
    "Diagnostic practice, not a pass/fail exam or a portfolio project. Creator review informs the next practice and any exemptions.",
  resource: { id: "", title: "", url: "" },
});
export const baseline = {
  ...baselineLesson,
  purpose: baselineLesson.why,
  brief: baselineLesson.teach.join(" "),
};
