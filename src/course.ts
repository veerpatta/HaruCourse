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

export const baseline = {
  id: "baseline-v1",
  title: "Start with what you know.",
  purpose:
    "Discover your strengths and the gaps we should work on. This is a starting point, not a pass/fail exam.",
  brief:
    "A community workshop website lets people find an event and reserve a place. People sometimes arrive without understanding what materials to bring. The organizer proposes a mandatory “I have read the instructions” checkbox. You have no research or analytics yet. Treat this as a stakeholder report, not a verified explanation.",
  steps: [
    {
      minutes: 15,
      title: "Frame the problem",
      text: "Write the user goal, organizer goal, known facts, and assumptions. Label the assumptions.",
    },
    {
      minutes: 20,
      title: "Plan your investigation",
      text: "Identify who you would speak with and draft five neutral interview questions. Keep the plan to one page.",
    },
    {
      minutes: 25,
      title: "Map the task",
      text: "Sketch the path from finding a workshop to confirming a reservation. Include one failure and a way to recover.",
    },
    {
      minutes: 30,
      title: "Sketch two screens",
      text: "Show the key information and reservation screen on mobile and desktop. Use paper or a familiar tool.",
    },
    {
      minutes: 20,
      title: "Explain your decisions",
      text: "Describe information priority, two accessibility considerations, and an alternative to the checkbox.",
    },
    {
      minutes: 10,
      title: "Reflect and save",
      text: "What felt easy, unfamiliar, or uncertain? Record your actual time. Pause whenever needed and return to unfinished work.",
    },
  ],
  rubric: [
    "Separate assumptions from evidence",
    "Ask neutral research questions",
    "Create a coherent flow with recovery",
    "Explain mobile and desktop behaviour",
    "Make hierarchy and accessibility intentional",
    "Connect decisions to user and business goals",
  ],
  deliverable:
    "A short problem note, research plan, task flow, two annotated wireframes, and a reflection. Keep images or PDFs in your own files and add a reference below.",
};
