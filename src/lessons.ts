import { week2 } from "./week2";
import { module3 } from "./module3";
import { module4 } from "./module4";
import { modules } from "./modules";
// A single rubric line, scored 0-3. `levels` is indexed by the score, so
// levels[2] is what independently adequate work actually looks like, and
// `remediation` is the bounded repair for anything below it. The twelve
// lessons authored before this structure existed keep the flat `rubric` list.
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
export type Lesson = {
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
};
const design = {
  title: "Design Council: the Double Diamond",
  id: "R01",
  url: "https://www.designcouncil.org.uk/resources/the-double-diamond/",
};
const research = {
  title: "GOV.UK: using in-depth interviews",
  id: "R27",
  url: "https://www.gov.uk/service-manual/user-research/using-in-depth-interviews",
};
const access = {
  title: "W3C: introduction to web accessibility",
  id: "R28",
  url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
};
const week1: Lesson[] = [
  {
    id: "week1-day1-v1",
    day: 1,
    title: "From screens to product problems",
    why: "Use your visual-design experience while learning to judge whether a product helps someone accomplish a task.",
    teach: [
      "A product helps someone accomplish a goal repeatedly. Product design connects that goal to a viable service and an experience people can use. The screen is one part: instructions, waiting, support, and recovery also shape the experience.",
      "UX concerns the whole experience of a task. UI concerns its controls, information, and presentation. Product design also asks which problem deserves attention and how a response fits business and technical constraints. Job titles overlap; judge actual responsibilities.",
      "Your graphic-design skills help communicate clearly, but product decisions need evidence about use. A beautiful booking screen can fail if people cannot tell whether payment succeeded. Separate an output (a screen) from an outcome (people understand their booking status).",
      "Designers explore and explain alternatives. Product managers coordinate priorities; engineers investigate feasibility and build behavior; researchers reduce uncertainty about people. Collaboration begins before polished mockups.",
    ],
    example:
      "“Make Reserve bigger” is a proposed solution. People might instead struggle to find availability or understand the price. These are hypotheses until you collect evidence.",
    steps: [
      {
        minutes: 25,
        title: "Learn",
        text: "Read the lesson and linked process overview. Define product design, UX, and UI in your own words.",
      },
      {
        minutes: 20,
        title: "Observe",
        text: "Complete one task in a familiar app. Record the starting situation, goal, and actions without collecting private information.",
      },
      {
        minutes: 45,
        title: "Separate evidence",
        text: "Make an observed / inferred / unknown table with five entries. Add a user goal and a possible business goal.",
      },
      {
        minutes: 20,
        title: "Compare",
        text: "Propose one visual and one behavioral improvement. Explain how you would check each.",
      },
      {
        minutes: 10,
        title: "Reflect",
        text: "Save your evidence and reflection. Pause whenever needed and return to unfinished work.",
      },
    ],
    deliverable:
      "A task walkthrough, five evidence/assumption entries, two goals, and two improvement hypotheses.",
    check: [
      {
        question: "Is a larger button a problem statement?",
        answer:
          "No. It prescribes a response. First identify who struggles, with what task, and what evidence shows the difficulty.",
      },
      {
        question: "Can a polished screen prove a better outcome?",
        answer: "No. Craft and user outcomes need different evidence.",
      },
    ],
    rubric: [
      "A specific task and user goal",
      "Observations separated from assumptions",
      "One trade-off beyond appearance",
    ],
    portfolio: "Process practice, not a validated case study.",
    resource: design,
  },
  {
    id: "week1-day2-v1",
    day: 2,
    title: "Frame the problem before the feature",
    why: "Avoid polishing a solution to the wrong problem.",
    teach: [
      "A useful frame describes a person, situation, unmet goal, and consequence. “Attendees need to know what to bring before leaving home” leaves room for alternatives. “Attendees need a checkbox” already chooses a feature.",
      "A stakeholder report is a lead, not proof of frequency or cause. Assumptions are not necessarily false; they are claims that still need checking. Write what would change your mind.",
      "Expand options before narrowing them. Discover and define focus on understanding the problem; develop and deliver focus on responses. These are modes of work, not mandatory one-way stages.",
      "Distinguish constraints such as time or device access from preferences. Investigate assumptions that combine weak evidence with serious consequences if wrong.",
    ],
    example:
      "A reminder, materials summary, and checkbox are different responses to workshop preparation. A click on a checkbox does not prove comprehension.",
    steps: [
      {
        minutes: 20,
        title: "Review",
        text: "Underline unverified explanations in the previous lesson’s notes.",
      },
      {
        minutes: 25,
        title: "Frame",
        text: "Write three person–situation–goal–consequence statements for workshop attendance. Remove feature names.",
      },
      {
        minutes: 35,
        title: "Prioritize uncertainty",
        text: "List six assumptions, their consequences, and your confidence. Pick two to investigate and describe disconfirming evidence.",
      },
      {
        minutes: 30,
        title: "Explore",
        text: "Sketch three different responses. Note a constraint and weakness for each.",
      },
      {
        minutes: 10,
        title: "Decide",
        text: "Choose the next investigation and explain why.",
      },
    ],
    deliverable:
      "Three problem frames, six assumptions, three alternatives, and an investigation decision.",
    check: [
      {
        question: "Which assumption should be investigated first?",
        answer:
          "One with weak evidence whose failure would materially change the design or harm users.",
      },
    ],
    rubric: [
      "Needs without prescribed features",
      "A way to reduce uncertainty",
      "Alternatives compared against constraints",
    ],
    portfolio: "Keep the decision log as early reasoning evidence.",
    resource: design,
  },
  {
    id: "week1-day3-v1",
    day: 3,
    title: "Ask about real experiences",
    why: "Learn from people without steering them toward your preferred answer.",
    teach: [
      "Begin with the uncertainty an interview should reduce. A research question guides your study; a participant question is the plain-language prompt used in conversation.",
      "Ask about a recent specific experience. “Tell me about your last class booking” invites an account of behavior. “Would you use our helpful reminder?” invites prediction and agreement. Follow up without supplying the answer.",
      "Explain the purpose, voluntary participation, and use of notes. Ask permission before recording. Avoid unnecessary identifying data and do not paste private research into AI tools.",
      "One conversation does not establish prevalence. Separate quotations from interpretations. Label role-play as practice; never invent participants or findings when someone is unavailable.",
    ],
    example:
      "Replace “Was checkout confusing because the button was hidden?” with “What happened when you tried to finish?” Then ask what the person expected.",
    steps: [
      {
        minutes: 25,
        title: "Prepare",
        text: "Read the lesson and interview guide. Draft a purpose statement and consent introduction.",
      },
      {
        minutes: 35,
        title: "Write",
        text: "Choose one Lesson 2 uncertainty. Draft six open questions and two neutral follow-ups. Remove predictions and leading language.",
      },
      {
        minutes: 35,
        title: "Practice",
        text: "With consent, hold a 15-minute practice conversation and organize notes. If nobody is available, rehearse your guide and identify weaknesses; do not fabricate answers.",
      },
      {
        minutes: 15,
        title: "Distinguish",
        text: "Separate observations, interpretations, and follow-ups. Mark evidence not collected when applicable.",
      },
      {
        minutes: 10,
        title: "Improve",
        text: "Rewrite one weak question and save your guide.",
      },
    ],
    deliverable:
      "Research objective, consent introduction, question guide, labelled notes, and revised questions.",
    check: [
      {
        question: "What if no participant is available?",
        answer:
          "Improve the guide and arrange a later conversation. Mark evidence missing rather than inventing findings.",
      },
    ],
    rubric: [
      "Questions address uncertainty",
      "Neutral questions about experience",
      "Consent and limitations explicit",
    ],
    portfolio: "Count research findings only when actually collected.",
    resource: research,
  },
  {
    id: "week1-day4-v1",
    day: 4,
    title: "Map the task and its failures",
    why: "A usable flow helps people recover when things go wrong.",
    teach: [
      "A task flow shows actions and decisions from a trigger to an outcome. Start before the first screen: what brings someone here and what will count as done?",
      "The happy path assumes success. Real flows also need empty, loading, error, permission, and interrupted states. Explain what happened and the next action; preserve input when retrying where possible.",
      "Information architecture groups and labels content so people can find it. Use task language rather than internal department names, and show prerequisites before the decision that needs them.",
      "Screen names alone do not explain transitions. A confirmation screen does not answer what happens when payment takes time, the last seat disappears, or someone closes the browser.",
    ],
    example:
      "Workshop full → explain availability → offer another date. A payment timeout should distinguish checking status from confirmed failure to reduce accidental repeat payments.",
    steps: [
      {
        minutes: 20,
        title: "Define",
        text: "Write the reservation trigger, successful outcome, and information needed before committing.",
      },
      {
        minutes: 40,
        title: "Map",
        text: "Draw the workshop happy path with labelled actions, decisions, price, and materials.",
      },
      {
        minutes: 35,
        title: "Recover",
        text: "Add full workshop, invalid input, and interrupted confirmation branches. Write a message and next action for each.",
      },
      {
        minutes: 15,
        title: "Walk through",
        text: "Trace every branch aloud as a first-time visitor. Mark missing information and dead ends.",
      },
      {
        minutes: 10,
        title: "Revise",
        text: "Repair a dead end and explain the change.",
      },
    ],
    deliverable:
      "One annotated flow with three failures and recovery messages.",
    check: [
      {
        question: "What is missing from a list of screens?",
        answer:
          "Actions, conditions, transitions, and recovery that explain how a person reaches the outcome.",
      },
    ],
    rubric: [
      "Clear primary outcome",
      "Three recoverable exceptions",
      "Prerequisites before commitment",
    ],
    portfolio: "Early untested flow evidence for the practice project.",
    resource: design,
  },
  {
    id: "week1-day5-v1",
    day: 5,
    title: "Make the interface understandable",
    why: "Turn the flow into screens that support different abilities and device widths.",
    teach: [
      "Hierarchy expresses what matters for the next decision. Size, spacing, grouping, language, and contrast work together. Do not rely on color alone for essential meaning.",
      "Responsive design means reflow and priority, not shrinking a desktop layout. Explain what stacks, wraps, stays visible, and moves. Longer labels and larger text reveal hidden assumptions.",
      "Accessibility concerns whether people can perceive, understand, navigate, and operate the experience. A mockup can specify labels and focus order; implemented keyboard and screen-reader behavior require runtime testing.",
      "Use persistent input labels, plain instructions, nearby error messages, and a logical reading order. Explain how to correct an error and retain entered values. Record what you checked and what remains untested.",
    ],
    example:
      "The Email label stays visible after typing. The materials summary stays before Reserve on mobile instead of disappearing into a desktop sidebar.",
    steps: [
      {
        minutes: 25,
        title: "Learn",
        text: "Read the lesson and W3C introduction. Choose three considerations relevant to your flow.",
      },
      {
        minutes: 45,
        title: "Sketch",
        text: "Create workshop details and reservation screens at narrow and wide widths using paper or a familiar tool. Prioritize content before decoration.",
      },
      {
        minutes: 25,
        title: "Specify",
        text: "Annotate labels, reading/focus order, recovery, and stacking. Identify checks requiring code.",
      },
      {
        minutes: 15,
        title: "Critique",
        text: "Compare against Lesson 4’s flow and add one missing state.",
      },
      {
        minutes: 10,
        title: "Submit",
        text: "Reference the flow/screens and explain the main unresolved issue. Mark ready only when evidence is present.",
      },
    ],
    deliverable:
      "Two screens at two widths, behavior/accessibility annotations, and an error state.",
    check: [
      {
        question: "Does a mockup prove keyboard accessibility?",
        answer: "No. It specifies intent. Test the implemented interaction.",
      },
      {
        question: "Why use a persistent label?",
        answer:
          "It identifies the value after typing, when a placeholder is no longer visible.",
      },
    ],
    rubric: [
      "Task-based hierarchy",
      "Explained responsive behavior",
      "Labels and recovery",
      "Evidence-bounded accessibility claims",
    ],
    portfolio: "Creator review is required before portfolio-ready claims.",
    resource: access,
  },
  {
    id: "week1-day6-v1",
    day: 6,
    optional: true,
    title: "Critique and repair one weak point",
    why: "Use optional catch-up time to improve evidence, not add more tools.",
    teach: [
      "Useful critique links an observation to task impact. “Messy” is vague. “Materials appear after commitment, so people may reserve before understanding preparation” gives a concrete concern.",
      "Separate severity from taste. Fix primary-task blockers before decoration. Choose one bounded repair and describe how you would check whether it helps.",
      "Keep the previous version to explain iteration. This is an optional lesson; rest or catch up if five core sessions fill your capacity.",
    ],
    example:
      "Replace an unexplained disabled Reserve button with availability information and another date. Check whether a visitor can identify the next step.",
    steps: [
      {
        minutes: 20,
        title: "Review",
        text: "Choose one weak criterion from the module.",
      },
      {
        minutes: 25,
        title: "Critique",
        text: "Write observation, impact, evidence, and uncertainty. Request creator input if available.",
      },
      {
        minutes: 45,
        title: "Repair",
        text: "Revise one flow or screen while retaining the original.",
      },
      {
        minutes: 20,
        title: "Compare",
        text: "Explain the change and remaining uncertainty.",
      },
      {
        minutes: 10,
        title: "Save",
        text: "Reference both versions. Resting instead does not count as a failed required lesson.",
      },
    ],
    deliverable:
      "A before/after repair with specific critique and limitations.",
    check: [
      {
        question: "What makes feedback actionable?",
        answer:
          "A concrete observation, task impact, evidence or uncertainty, and a bounded next action.",
      },
    ],
    rubric: [
      "Task-impact priority",
      "Repair addresses the issue",
      "Limitations preserved",
    ],
    portfolio: "Potential iteration evidence with an honest explanation.",
    resource: access,
  },
  {
    id: "week1-day7-v1",
    day: 7,
    optional: true,
    title: "Explain decisions and plan your next steps",
    why: "Practice the written communication needed for remote collaboration.",
    teach: [
      "A decision story connects context, evidence, alternatives, choice, and next check. Explain one trade-off rather than narrating every screen or activity.",
      "Match claims to evidence. A concept can show reasoning and craft, but not a production conversion gain. Distinguish proposals, observations, and untested outcomes.",
      "Review actual hours before adding work. Reduce scope if the work felt too heavy. Rest is valid on this optional lesson; next steps should follow gaps rather than tool trends.",
    ],
    example:
      "“I moved materials before reservation because preparation is the reported concern. A checkbox records a click, not comprehension. I still need to observe visitors using the summary.”",
    steps: [
      {
        minutes: 20,
        title: "Select",
        text: "Gather evidence for one decision.",
      },
      {
        minutes: 35,
        title: "Write",
        text: "Write one page: context, evidence, options, choice, trade-off, next check.",
      },
      {
        minutes: 25,
        title: "Present",
        text: "Explain it aloud in five minutes, review the explanation, and repeat once.",
      },
      {
        minutes: 30,
        title: "Plan",
        text: "List actual hours, an evidence-backed strength, two gaps, and one bounded repair. Request review.",
      },
      {
        minutes: 10,
        title: "Save",
        text: "Save the note and plan. Do not infer mastery from one module.",
      },
    ],
    deliverable: "A decision note and plan for the next five core sessions.",
    check: [
      {
        question: "What can an unshipped concept demonstrate?",
        answer:
          "Work you produced and tests you actually ran, with limitations—not unobserved production outcomes.",
      },
    ],
    rubric: [
      "Clear choice and alternative",
      "Evidence-matched claims",
      "Gap-based next steps",
    ],
    portfolio: "Rehearsal for a future case-study presentation.",
    resource: design,
  },
];

export const lessons: Lesson[] = [...week1, ...week2, ...module3, ...module4];

// A lesson's owning module. Legacy lessons predate the `module` field and are
// identified by their compatibility week number instead.
export function moduleIdOf(lesson: Pick<Lesson, "module" | "week">) {
  return lesson.module || `m0${lesson.week || 1}`;
}
// Authoring a lesson file is not the same as publishing its module. Callers
// that expose lessons — the API, the MCP tools and the studio — must gate on
// this rather than on mere existence in `lessons`, or a lesson drafted for a
// still-planned module becomes reachable the moment its file is imported.
// The catalog is a parameter so this stays testable with a synthetic module.
export function isPublishedLesson(
  lesson: Pick<Lesson, "module" | "week">,
  catalog: { id: string; status: string }[] = modules,
) {
  return (
    catalog.find((m) => m.id === moduleIdOf(lesson))?.status === "published"
  );
}
export const publishedLessons: Lesson[] = lessons.filter((l) =>
  isPublishedLesson(l),
);
export const publishedLessonIds = new Set(publishedLessons.map((l) => l.id));
