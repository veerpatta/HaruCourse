import { module3 } from './module3';
import { lessonOneFlow } from './lessonOneFlow';
import { withApprenticeship } from './apprenticeship';
import { module4 } from './module4';
import { module5 } from './module5';
import { module6 } from './module6';
import { module7 } from './module7';
import { module8 } from './module8';
import { module9 } from './module9';
import { module10 } from './module10';
import { module11 } from './module11';
import { module12 } from './module12';
import { module13 } from './module13';
import { module14 } from './module14';
import { module15 } from './module15';
import { module16 } from './module16';
import { module17 } from './module17';
import { module18 } from './module18';
import { module19 } from './module19';
import { module20 } from './module20';
import { modules } from './modules';
import { adaptPublished, type Lesson } from './teaching';
import { week2 } from "./week2";
import { withLegacyText } from "./teaching";
export type { Lesson } from "./teaching";
const week1 = [
  {
    id: "week1-day1-v1",
    flow: lessonOneFlow,
    day: 1,
    title: "From screens to product problems",
    why: "Your eye already knows when a screen looks right. This lesson adds the other half of the job: working out whether it actually helps the person using it.",
    teach: [
      "Product design is deciding what a service should help someone do, then shaping it so they can do it and the people running it can keep it going.",
      "UX is short for user experience: the whole task, start to finish. UI is short for user interface: the controls, words and layout on the screen.",
      "A screen is something you made. Someone finishing what they came to do is what happened. Only the second one tells you the design worked.",
      "Sort what you notice into three. Observed: you can point at it. Inferred: your guess about why. Unknown: the screen cannot tell you. Telling these apart is the skill of this lesson.",
      "You will not do this alone in a job. Designers work with product managers, engineers and researchers, and that starts long before anything looks finished.",
    ],
    example:
      "Someone says “make the Reserve button bigger”. Maybe. People might also be stuck because they cannot find a free date, or because the price only appears at the very end. Until you look, all three are guesses.",
    check: [
      {
        question: "Is “make the button bigger” a problem statement?",
        answer:
          "No. It jumps straight to a fix. A problem statement says who is stuck, what they were trying to do, and what you saw that shows it.",
      },
      {
        question: "Your screen looks good and you finished the task easily. Does that prove it works?",
        answer:
          "No. You already know the app. Looking good and working for a stranger need different kinds of evidence.",
      },
    ],
    rubric: [
      "A specific task and what the person wanted",
      "What you saw kept apart from what you guessed",
      "One trade-off that is not about how it looks",
    ],
    portfolio:
      "Practice, not a case study yet. It is the first piece of evidence in a bank you will build across the course.",
    resource: {
      title: "Design Council: the Double Diamond",
      id: "R01",
      url: "https://www.designcouncil.org.uk/resources/the-double-diamond/",
    },
    explanation: [
      "A product is something people come back to because it helps them get something done. Product design is deciding what that something is, then shaping the whole service around it. The screen is one part. Waiting, instructions, help when something goes wrong and what happens afterwards are all part of the same experience.",
      "UX and UI are usually said in the same breath and they are not the same thing. UX is everything a person goes through to finish a task. UI is the controls, words and layout in front of them. Product design also asks which problem deserves attention at all, and whether an answer can be built and paid for. Job titles overlap everywhere, so look at what someone actually does rather than what they are called.",
      "Your visual training is an advantage here, and it is not the whole job. A beautiful booking screen can still fail if nobody can tell whether their payment went through. The screen is what you made; the person knowing their booking is confirmed is what happened. Keeping those two apart in your notes puts you ahead of most people starting out.",
      "Designers rarely decide alone. Product managers weigh up what to do next, engineers work out what is possible and build the behaviour, researchers reduce the guessing about people. That conversation starts long before anyone opens a design tool.",
    ],
    prerequisite:
      "Nothing from an earlier lesson. Bring an app you already use and somewhere to write.",
    outputs: [
      "One task, followed from start to finish",
      "Five things you noticed, each labelled observed, inferred or unknown",
      "What the person wanted, and what the company probably wanted",
      "Two improvements, each with a way to tell whether it helped",
    ],
    repairs: [
      "If your goal names a screen or a button, rewrite it as something the person needs to have happen.",
      "If a guess is written as a fact, move it to inferred and say what would tell you whether it is true.",
      "If both improvements are about how it looks, add one about what the app does, and say how you would know it helped.",
    ],
    steps: [
      {
        minutes: 25,
        title: "Learn",
        instructions: [
          "Read the explanation and made-up example here. The video and Double Diamond reading are optional extras.",
          "Write one plain sentence each for product design, UX and UI.",
        ],
      },
      {
        minutes: 20,
        title: "Observe",
        instructions: [
          "Pick one task in an app you already use. Stop before booking or paying.",
          "Write down where you started, what you were trying to do, and each thing you did. Leave out anything private.",
        ],
      },
      {
        minutes: 45,
        title: "Separate evidence",
        instructions: [
          "Practise on the six supplied lines first.",
          "Then write five things you noticed, and label each one observed, inferred or unknown.",
          "Write what the person wanted, and what the company behind the app probably wanted.",
        ],
      },
      {
        minutes: 20,
        title: "Compare",
        instructions: [
          "Suggest one change to how it looks, and one change to what it does.",
          "For each, name something you could watch to tell whether it helped.",
        ],
      },
      {
        minutes: 10,
        title: "Reflect",
        instructions: [
          "Answer the three Check questions and improve your answers beside the feedback.",
          "Then record your open question, improvement and next action in Your work.",
        ],
      },
    ],
  },
  {
    id: "week1-day2-v1",
    day: 2,
    title: "Frame the problem before the feature",
    why: "Avoid polishing a solution to the wrong problem.",
    teach: [
      "Frame the person, situation, unmet goal and consequence before choosing a feature.",
      "A stakeholder report suggests a problem; it does not prove its cause.",
      "Explore alternatives before narrowing the response.",
      "Check assumptions with serious consequences and weak evidence first.",
    ],
    example:
      "A reminder, materials summary, and checkbox are different responses to workshop preparation. A click on a checkbox does not prove comprehension.",
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
    resource: {
      title: "Design Council: the Double Diamond",
      id: "R01",
      url: "https://www.designcouncil.org.uk/resources/the-double-diamond/",
    },
    explanation: [
      "A useful frame describes a person, situation, unmet goal, and consequence. “Attendees need to know what to bring before leaving home” leaves room for alternatives. “Attendees need a checkbox” already chooses a feature.",
      "A stakeholder report is a lead, not proof of frequency or cause. Assumptions are not necessarily false; they are claims that still need checking. Write what would change your mind.",
      "Expand options before narrowing them. Discover and define focus on understanding the problem; develop and deliver focus on responses. These are modes of work, not mandatory one-way stages.",
      "Distinguish constraints such as time or device access from preferences. Investigate assumptions that combine weak evidence with serious consequences if wrong.",
    ],
    prerequisite:
      "Bring Lesson 1’s walkthrough and evidence table. Use workshop preparation as the practice context.",
    outputs: [
      "Three problem frames",
      "Six assumptions and two priority uncertainties",
      "Three alternatives with constraints and weaknesses",
      "One investigation decision",
    ],
    repairs: [
      "If the frame prescribes a feature, remove it and state the unmet goal.",
      "If the priority has no rationale, compare the cost of being wrong for two assumptions.",
      "If nothing could change your mind, add one concrete disconfirming observation.",
    ],
    steps: [
      {
        minutes: 20,
        title: "Review",
        instructions: [
          "Read your earlier notes.",
          "Mark explanations you have not verified.",
        ],
      },
      {
        minutes: 25,
        title: "Frame",
        instructions: [
          "Write three person–situation–goal–consequence statements about workshop attendance.",
          "Remove feature names such as checkbox or reminder.",
        ],
      },
      {
        minutes: 35,
        title: "Prioritize uncertainty",
        instructions: [
          "List six assumptions with consequences and confidence.",
          "Choose two to investigate.",
          "For each, name evidence that would change your mind.",
        ],
      },
      {
        minutes: 30,
        title: "Explore",
        instructions: [
          "Sketch three different responses to the workshop preparation problem.",
          "For each, note a constraint and a weakness.",
        ],
      },
      {
        minutes: 10,
        title: "Decide",
        instructions: [
          "Choose the next investigation and explain why.",
          "Save the frames, assumptions and alternatives.",
        ],
      },
    ],
  },
  {
    id: "week1-day3-v1",
    day: 3,
    title: "Ask about real experiences",
    why: "Learn from people without steering them toward your preferred answer.",
    teach: [
      "A research question states an uncertainty; an interview question starts a conversation.",
      "Ask about a recent experience instead of predicting future behavior.",
      "Explain consent and note use before beginning; ask permission before recording.",
      "One conversation cannot establish how common a behavior is.",
    ],
    example:
      "Replace “Was checkout confusing because the button was hidden?” with “What happened when you tried to finish?” Then ask what the person expected.",
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
    resource: {
      title: "GOV.UK: using in-depth interviews",
      id: "R27",
      url: "https://www.gov.uk/service-manual/user-research/using-in-depth-interviews",
    },
    explanation: [
      "Begin with the uncertainty an interview should reduce. A research question guides your study; a participant question is the plain-language prompt used in conversation.",
      "Ask about a recent specific experience. “Tell me about your last class booking” invites an account of behavior. “Would you use our helpful reminder?” invites prediction and agreement. Follow up without supplying the answer.",
      "Explain the purpose, voluntary participation, and use of notes. Ask permission before recording. Avoid unnecessary identifying data and do not paste private research into AI tools.",
      "One conversation does not establish prevalence. Separate quotations from interpretations. Label role-play as practice; never invent participants or findings when someone is unavailable.",
    ],
    prerequisite:
      "Bring Lesson 2’s two priority uncertainties and a place to take notes.",
    outputs: [
      "Research objective and consent introduction",
      "Six open questions and two neutral follow-ups",
      "Labelled notes or an explicit evidence gap",
      "One improved question",
    ],
    repairs: [
      "If the questions miss the uncertainty, connect each question to the decision it informs.",
      "Replace a leading question with “What happened when…?” and rehearse it.",
      "If consent or source type is missing, document it; do not retrospectively invent consent or answers.",
    ],
    steps: [
      {
        minutes: 25,
        title: "Prepare",
        instructions: [
          "Read the interview reference.",
          "Write the study purpose and a voluntary-consent introduction.",
        ],
      },
      {
        minutes: 35,
        title: "Write",
        instructions: [
          "Choose one uncertainty from Lesson 2.",
          "Draft six questions about recent experience and two neutral follow-ups.",
          "Remove leading language and predictions.",
        ],
      },
      {
        minutes: 35,
        title: "Practice",
        instructions: [
          "With consent, hold a 15-minute practice conversation.",
          "If nobody is available, rehearse the guide and mark “No participant evidence collected.”",
          "Exclude identifying details and private research from AI tools.",
        ],
      },
      {
        minutes: 15,
        title: "Distinguish",
        instructions: [
          "Separate observations, interpretations and follow-up questions.",
          "Keep actual quotations distinct from your explanation.",
        ],
      },
      {
        minutes: 10,
        title: "Improve",
        instructions: [
          "Rewrite one weak question.",
          "Save your guide, labelled notes and next research question.",
        ],
      },
    ],
  },
  {
    id: "week1-day4-v1",
    day: 4,
    title: "Map the task and its failures",
    why: "A usable flow helps people recover when things go wrong.",
    teach: [
      "A task flow connects a trigger, actions, decisions and an outcome.",
      "Every failure needs an explanation and a next action.",
      "Group and label information using the visitor’s task language.",
      "Show price and preparation requirements before commitment.",
    ],
    example:
      "Workshop full → explain availability → offer another date. A payment timeout should distinguish checking status from confirmed failure to reduce accidental repeat payments.",
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
    resource: {
      title: "Design Council: the Double Diamond",
      id: "R01",
      url: "https://www.designcouncil.org.uk/resources/the-double-diamond/",
    },
    explanation: [
      "A task flow shows actions and decisions from a trigger to an outcome. Start before the first screen: what brings someone here and what will count as done?",
      "The happy path assumes success. Real flows also need empty, loading, error, permission, and interrupted states. Explain what happened and the next action; preserve input when retrying where possible.",
      "Information architecture groups and labels content so people can find it. Use task language rather than internal department names, and show prerequisites before the decision that needs them.",
      "Screen names alone do not explain transitions. A confirmation screen does not answer what happens when payment takes time, the last seat disappears, or someone closes the browser.",
    ],
    prerequisite:
      "Bring your workshop problem frame and interview notes or labelled evidence gaps. Use paper or a familiar drawing tool.",
    outputs: [
      "One annotated reservation flow",
      "Three failure branches with recovery messages",
      "One repaired dead end and explanation",
    ],
    repairs: [
      "If the flow is only screen names, label the actions and decisions between them.",
      "If an exception ends without help, add its next action and recovery destination.",
      "If required information appears too late, move it before commitment and retrace the path.",
    ],
    steps: [
      {
        minutes: 20,
        title: "Define",
        instructions: [
          "Write the reservation trigger and successful outcome.",
          "List information needed before committing.",
        ],
      },
      {
        minutes: 40,
        title: "Map",
        instructions: [
          "Draw the successful reservation path.",
          "Label actions and decisions.",
          "Place price and materials before the reservation decision.",
        ],
      },
      {
        minutes: 35,
        title: "Recover",
        instructions: [
          "Add branches for a full workshop, invalid input and interrupted confirmation.",
          "Write a message and next action for each.",
          "Preserve entered values where possible; check uncertain payment status before retrying.",
        ],
      },
      {
        minutes: 15,
        title: "Walk through",
        instructions: [
          "Trace every branch aloud as a first-time visitor.",
          "Mark missing information and dead ends.",
        ],
      },
      {
        minutes: 10,
        title: "Revise",
        instructions: [
          "Repair one dead end.",
          "Save the flow and explain what changed.",
        ],
      },
    ],
  },
  {
    id: "week1-day5-v1",
    day: 5,
    title: "Make the interface understandable",
    why: "Turn the flow into screens that support different abilities and device widths.",
    teach: [
      "Hierarchy helps someone make the next decision.",
      "Responsive layouts reflow content instead of shrinking it.",
      "Persistent labels, clear errors and logical reading order support access.",
      "Mockups specify accessibility intent; runtime tests verify implemented behavior.",
    ],
    example:
      "The Email label stays visible after typing. The materials summary stays before Reserve on mobile instead of disappearing into a desktop sidebar.",
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
    resource: {
      title: "W3C: introduction to web accessibility",
      id: "R28",
      url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
    },
    explanation: [
      "Hierarchy expresses what matters for the next decision. Size, spacing, grouping, language, and contrast work together. Do not rely on color alone for essential meaning.",
      "Responsive design means reflow and priority, not shrinking a desktop layout. Explain what stacks, wraps, stays visible, and moves. Longer labels and larger text reveal hidden assumptions.",
      "Accessibility concerns whether people can perceive, understand, navigate, and operate the experience. A mockup can specify labels and focus order; implemented keyboard and screen-reader behavior require runtime testing.",
      "Use persistent input labels, plain instructions, nearby error messages, and a logical reading order. Explain how to correct an error and retain entered values. Record what you checked and what remains untested.",
    ],
    prerequisite:
      "Bring Lesson 4’s flow. Use paper or a familiar tool; no new software is required.",
    outputs: [
      "Details and reservation screens at narrow and wide widths",
      "Reading order, labels, recovery and stacking annotations",
      "One error state",
      "An unresolved issue for review",
    ],
    repairs: [
      "If the next action is hard to find, reorder information around the task.",
      "If mobile is just a smaller desktop, show what stacks and wraps.",
      "If an error has no recovery, add corrective text and retained input.",
      "Replace any accessibility pass claim with the specific checks performed and still needed.",
    ],
    steps: [
      {
        minutes: 25,
        title: "Learn",
        instructions: [
          "Read the W3C accessibility introduction.",
          "Choose three considerations that affect your flow.",
        ],
      },
      {
        minutes: 45,
        title: "Sketch",
        instructions: [
          "Sketch workshop details and reservation screens at two widths.",
          "Keep preparation information before Reserve.",
          "Use spacing, grouping and words; do not rely on color alone.",
        ],
      },
      {
        minutes: 25,
        title: "Specify",
        instructions: [
          "Annotate persistent labels, reading/focus order and stacking.",
          "Explain how errors retain input and can be corrected.",
          "List keyboard and screen-reader checks that need implementation.",
        ],
      },
      {
        minutes: 15,
        title: "Critique",
        instructions: [
          "Compare the screens against your flow.",
          "Add one missing error state.",
          "Try longer labels and larger text.",
        ],
      },
      {
        minutes: 10,
        title: "Submit",
        instructions: [
          "Save the flow and screen references.",
          "Name the main unresolved issue.",
          "Add notes and a work reference before selecting Ready for review.",
        ],
      },
    ],
  },
  {
    id: "week1-day6-v1",
    day: 6,
    optional: true,
    title: "Critique and repair one weak point",
    why: "Use optional catch-up time to improve evidence, not add more tools.",
    teach: [
      "Useful critique connects a specific observation to task impact.",
      "Prioritize a task blocker before a matter of taste.",
      "Keep the original so the change can be explained.",
    ],
    example:
      "Replace an unexplained disabled Reserve button with availability information and another date. Check whether a visitor can identify the next step.",
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
    resource: {
      title: "W3C: introduction to web accessibility",
      id: "R28",
      url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
    },
    explanation: [
      "Useful critique links an observation to task impact. “Messy” is vague. “Materials appear after commitment, so people may reserve before understanding preparation” gives a concrete concern.",
      "Separate severity from taste. Fix primary-task blockers before decoration. Choose one bounded repair and describe how you would check whether it helps.",
      "Keep the previous version to explain iteration. This is an optional lesson; rest or catch up if five core sessions fill your capacity.",
    ],
    prerequisite:
      "Optional. Bring one flow or screen from Lessons 1–5 and its review criteria.",
    outputs: [
      "One critique with evidence and uncertainty",
      "Before and after versions",
      "A next check",
    ],
    repairs: [
      "If the critique is taste-based, identify the affected task.",
      "If the change does not address the issue, revise the relevant flow or screen only.",
      "If the repair is called proven, state the test still needed.",
    ],
    steps: [
      {
        minutes: 20,
        title: "Review",
        instructions: [
          "Choose one weak criterion from the module.",
          "Identify the flow or screen that shows it.",
        ],
      },
      {
        minutes: 25,
        title: "Critique",
        instructions: [
          "Write the observation, task impact, evidence and uncertainty.",
          "Ask for creator input if available.",
        ],
      },
      {
        minutes: 45,
        title: "Repair",
        instructions: [
          "Keep a copy of the original.",
          "Repair only the chosen issue.",
        ],
      },
      {
        minutes: 20,
        title: "Compare",
        instructions: [
          "Compare both versions.",
          "Explain the change and how you would check whether it helps.",
        ],
      },
      {
        minutes: 10,
        title: "Save",
        instructions: [
          "Save both references and remaining limitations.",
          "Skip this optional lesson whenever you prefer.",
        ],
      },
    ],
  },
  {
    id: "week1-day7-v1",
    day: 7,
    optional: true,
    title: "Explain decisions and plan your next steps",
    why: "Practice the written communication needed for remote collaboration.",
    teach: [
      "Explain context, evidence, alternatives, choice and next check.",
      "A concept shows reasoning; it cannot prove production impact.",
      "Choose your next practice from evidence gaps, not tool trends.",
    ],
    example:
      "“I moved materials before reservation because preparation is the reported concern. A checkbox records a click, not comprehension. I still need to observe visitors using the summary.”",
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
    resource: {
      title: "Design Council: the Double Diamond",
      id: "R01",
      url: "https://www.designcouncil.org.uk/resources/the-double-diamond/",
    },
    explanation: [
      "A decision story connects context, evidence, alternatives, choice, and next check. Explain one trade-off rather than narrating every screen or activity.",
      "Match claims to evidence. A concept can show reasoning and craft, but not a production conversion gain. Distinguish proposals, observations, and untested outcomes.",
      "Review actual hours before adding work. Reduce scope if the work felt too heavy. Rest is valid on this optional lesson; next steps should follow gaps rather than tool trends.",
    ],
    prerequisite:
      "Optional. Bring one design decision, its alternatives and supporting artifacts from Module 1.",
    outputs: [
      "A one-page decision note",
      "One evidence-backed strength and two gaps",
      "One bounded repair and next learning action",
    ],
    repairs: [
      "If there is no alternative, add one and explain why it was not chosen.",
      "If impact is unmeasured, label the intended outcome as untested.",
      "If the next step is vague, name the artifact and specific gap to repair.",
    ],
    steps: [
      {
        minutes: 20,
        title: "Select",
        instructions: [
          "Choose one decision.",
          "Gather its evidence and artifact references.",
        ],
      },
      {
        minutes: 35,
        title: "Write",
        instructions: [
          "Write six short headings: context, evidence, options, choice, trade-off, next check.",
          "Add concise bullets under each; keep it to one page.",
        ],
      },
      {
        minutes: 25,
        title: "Present",
        instructions: [
          "Explain the decision aloud in five minutes.",
          "Identify unclear reasoning and try once more.",
        ],
      },
      {
        minutes: 30,
        title: "Plan",
        instructions: [
          "Record one evidenced strength and two gaps.",
          "Choose one small repair; reduce scope if needed.",
          "Request creator review.",
        ],
      },
      {
        minutes: 10,
        title: "Save",
        instructions: [
          "Save the decision note and next action.",
          "Record actual time only if useful; this lesson is optional.",
        ],
      },
    ],
  },
];
export const lessons = [
  ...week1.map(withLegacyText),
  ...week2,
  ...module3.map(adaptPublished),
  ...module4.map(adaptPublished),
  ...module5.map(adaptPublished),
  ...module6.map(adaptPublished),
  ...module7.map(adaptPublished),
  ...module8,
  ...module9,
  ...module10,
  ...module11,
  ...module12,
  ...module13,
  ...module14,
  ...module15,
  ...module16,
  ...module17,
  ...module18,
  ...module19,
  ...module20,
].map(withApprenticeship);

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
