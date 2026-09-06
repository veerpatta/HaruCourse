import type { Lesson } from "./lessons";
const synthesis = {
  title: "GOV.UK: analyse a research session",
  url: "https://www.gov.uk/service-manual/user-research/analyse-a-research-session",
};
const testing = {
  title: "GOV.UK: moderated usability testing",
  url: "https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing",
};
const discovery = {
  title: "GOV.UK: how discovery works",
  url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
};
export const week2: Lesson[] = [
  {
    id: "week2-day1-v1",
    week: 2,
    day: 1,
    title: "Choose the evidence you need",
    why: "Turn a vague desire to research into a small study that can change a design decision.",
    teach: [
      "Start with a decision, not a method. If you need to understand how people prepare for a workshop, a conversation about a recent visit can reveal context. If you need to know whether a materials summary is understandable, observe someone using it. A survey does not automatically answer either question well.",
      "Write a research question as an uncertainty: “When do attendees look for preparation instructions?” Then name the evidence that would help and the choice it would influence. This makes it easier to avoid collecting interesting but irrelevant information.",
      "Recruit people with experience related to the task, rather than choosing only whoever is easiest to reach. For this small practice study, one willing adult with a recent booking experience can help rehearse your method, but cannot represent the whole audience. Document that limitation.",
      "Keep participant access separate from study quality. If nobody is available this week, improve the plan and do a clearly labelled self-walkthrough. Do not turn a fictional persona or an AI-generated interview into participant evidence. Never collect private booking or payment details for this exercise.",
    ],
    example:
      "Decision: whether preparation information belongs before reservation or in a reminder. Question: when do attendees decide what to pack? Evidence: a recent attendee’s sequence of actions, with a follow-up about where they looked for information. Limitation: one person may have an unusual routine.",
    steps: [
      {
        minutes: 20,
        title: "Reconnect to Week 1",
        text: "Read your Day 5 output and unresolved questions. Choose one decision you still cannot justify.",
      },
      {
        minutes: 25,
        title: "Plan the study",
        text: "Write the decision, research question, suitable method, participant criteria, and evidence you hope to collect.",
      },
      {
        minutes: 30,
        title: "Prepare materials",
        text: "Adapt your Week 1 interview guide or create a task scenario. Include a voluntary-consent introduction and a note-taking template.",
      },
      {
        minutes: 30,
        title: "Arrange or rehearse",
        text: "Invite an appropriate person yourself if possible, without pressure. Rehearse the session aloud. If unavailable, document the recruitment gap and continue planning.",
      },
      {
        minutes: 15,
        title: "Review and save",
        text: "Identify how the plan could bias the outcome. Save a revised version and actual minutes.",
      },
    ],
    deliverable:
      "A one-page study plan, session guide, consent introduction, and participant-access status.",
    check: [
      {
        question:
          "Should you select the method before stating the uncertainty?",
        answer:
          "No. The decision and uncertainty determine which evidence is useful, which then guides the method.",
      },
      {
        question: "What does one practice participant establish?",
        answer:
          "A bounded observation from that person and a chance to improve the method, not population-wide prevalence.",
      },
    ],
    rubric: [
      "A clear decision and uncertainty",
      "Method matches the question",
      "Participant criteria and limitations",
      "Voluntary participation and minimal data",
    ],
    portfolio:
      "A research-plan artifact; keep proposed evidence distinct from collected evidence.",
    resource: discovery,
  },
  {
    id: "week2-day2-v1",
    week: 2,
    day: 2,
    title: "Turn notes into traceable findings",
    why: "Make interpretations that another person can trace back to actual observations.",
    teach: [
      "An observation describes something seen or heard. An interpretation explains what it might mean. A recommendation proposes an action. Keep these separate so a reviewer can challenge the reasoning without losing the original evidence.",
      "Give each observation a short ID and keep its source reference. Group related observations, then name a possible theme. A group name should describe a pattern, not disguise a solution: “preparation discovered late” is different from “send more reminders.”",
      "Look for observations that do not fit. Contradictory evidence can reveal different contexts or a mistaken explanation. A single important exception can matter even when most notes point elsewhere; frequency alone is not severity.",
      "For this lesson, use the clearly fictional practice notes below if no real session has occurred. The goal is to practice reasoning, not claim new user research. Label the resulting document simulated training data and never merge it into real participant findings.",
    ],
    example:
      "Simulated training notes: S1 looked for the materials list the evening before the class; S2 searched the confirmation email on the journey; S3 brought supplies from a previous class without checking; S4 noticed the list before booking and borrowed an item. A possible finding is that preparation happens at different times. “Nobody reads instructions” is contradicted by S4.",
    steps: [
      {
        minutes: 20,
        title: "Read and distinguish",
        text: "Read this lesson and the analysis reference. Write your own definitions of observation, interpretation, and recommendation.",
      },
      {
        minutes: 30,
        title: "Extract",
        text: "Use consented notes from a real session, or the four simulated notes above. Assign IDs and label the source type prominently.",
      },
      {
        minutes: 30,
        title: "Group",
        text: "Group related observations and propose two themes. Retain an exception or contradiction rather than hiding it.",
      },
      {
        minutes: 25,
        title: "Build an evidence chain",
        text: "Write two tentative findings. Under each, list supporting IDs, counter-evidence, confidence, and an unanswered question.",
      },
      {
        minutes: 15,
        title: "Explain and save",
        text: "Write one possible design implication without claiming it is proven. Save the evidence map.",
      },
    ],
    deliverable:
      "An observation table, two tentative findings with source IDs, counter-evidence, and one design implication.",
    check: [
      {
        question: "Is “add a reminder” an observation?",
        answer:
          "No. It is a recommendation that should be connected to a finding and its evidence.",
      },
      {
        question: "How should simulated notes appear in a portfolio?",
        answer:
          "Clearly labelled as a training exercise, never presented as interviews or real-user findings.",
      },
    ],
    rubric: [
      "Sources can be traced",
      "Observations and interpretations differ",
      "Counter-evidence is retained",
      "Simulated data is labelled",
    ],
    portfolio:
      "A synthesis exercise; real study findings require real evidence.",
    resource: synthesis,
  },
  {
    id: "week2-day3-v1",
    week: 2,
    day: 3,
    title: "Choose a small, testable opportunity",
    why: "Translate uncertain findings into a feasible next design move without pretending to know the outcome.",
    teach: [
      "An opportunity describes an improvement in someone’s ability to accomplish a goal. It should leave room for more than one response. “Help attendees find preparation requirements when planning” is broader than “build email automation.”",
      "Compare options using task impact, uncertainty, effort, and constraints. Numbers can organize discussion but do not make guesses objective. Write the reason behind a rating, and distinguish measured information from an estimate.",
      "A testable hypothesis links a change, a person or context, and an observable behavior. Specify what would weaken the hypothesis. Avoid goals such as “make users happy” unless you explain how you will investigate that construct.",
      "A small prototype is a way to examine a question, not a reduced list of every feature you want. Leave out what the study does not need, but include enough context and failure behavior to avoid a misleading test.",
    ],
    example:
      "Hypothesis: if the materials summary is visible before reservation, a first-time visitor can explain what to bring without help. Counter-evidence: visitors still miss or misinterpret it. This tests comprehension, not whether attendance rates will improve.",
    steps: [
      {
        minutes: 20,
        title: "Review evidence",
        text: "Read yesterday’s findings and limitations. Choose one that affects the workshop flow.",
      },
      {
        minutes: 30,
        title: "Explore three options",
        text: "Describe three different responses. For each, write likely task impact, uncertainty, and implementation effort as estimates with reasons.",
      },
      {
        minutes: 30,
        title: "Select",
        text: "Choose one response and explain the trade-off. Name what you deliberately leave out of scope.",
      },
      {
        minutes: 25,
        title: "Write the test",
        text: "State a hypothesis, an observable success signal, and counter-evidence. Draft a neutral task scenario.",
      },
      {
        minutes: 15,
        title: "Record",
        text: "Save the option comparison, scope, and test question.",
      },
    ],
    deliverable:
      "Three-option comparison, one scoped choice, and a falsifiable usability hypothesis.",
    check: [
      {
        question: "Does assigning an effort score make it measured evidence?",
        answer:
          "No. It remains an estimate unless based on appropriate measurement; retain its rationale and uncertainty.",
      },
    ],
    rubric: [
      "Several meaningfully different options",
      "Choice linked to evidence",
      "Bounded scope",
      "Observable signal and counter-evidence",
    ],
    portfolio: "A prioritization decision with explicit assumptions.",
    resource: discovery,
  },
  {
    id: "week2-day4-v1",
    week: 2,
    day: 4,
    title: "Build a prototype that can answer a question",
    why: "Practice enough interaction detail to test your hypothesis without spending the session on decoration.",
    teach: [
      "Choose prototype fidelity to match the uncertainty. Paper screens can test content order and a simple path. A clickable prototype can make navigation more realistic. Neither demonstrates production performance or actual accessibility implementation.",
      "List the start state, actions, destinations, and outcome before linking screens. Every visible action relevant to the task should work or be clearly outside scope. A convincing screen with broken paths can produce findings about the prototype rather than the idea.",
      "Use plausible example content and label invented details. Avoid private participant data and real payment details. Write a scenario that provides a goal without naming the button or route you want the person to choose.",
      "Pilot the prototype yourself to catch technical dead ends, but label this as a pilot. You already know the intended route, so your success does not prove a first-time visitor can use it. Record the limitations to discuss during the test.",
    ],
    example:
      "A paper prototype includes workshop details, materials, reservation form, an invalid-email state, and confirmation. The facilitator swaps the sheets in response to actions. This can investigate comprehension and recovery without simulating real payment.",
    steps: [
      {
        minutes: 20,
        title: "Specify states",
        text: "Use Day 3’s hypothesis to list necessary screens and actions. Include one relevant recovery path.",
      },
      {
        minutes: 50,
        title: "Build",
        text: "Use paper or your existing design tool to connect the task. Use the Week 1 layouts as a starting point; avoid learning a new tool today.",
      },
      {
        minutes: 20,
        title: "Pilot",
        text: "Walk the primary and recovery paths. Repair broken links or missing content, and label the pilot as your own walkthrough.",
      },
      {
        minutes: 15,
        title: "Prepare the scenario",
        text: "Write a goal-based task that does not tell someone which button to use. Prepare a reset state.",
      },
      {
        minutes: 15,
        title: "Save",
        text: "Save the prototype reference, interaction map, scenario, and known limits.",
      },
    ],
    deliverable:
      "A testable prototype, one recovery path, neutral scenario, and limitation list.",
    check: [
      {
        question: "Can a clickable prototype demonstrate real server behavior?",
        answer:
          "No. It can represent intended behavior; distinguish simulated states from implemented functionality.",
      },
    ],
    rubric: [
      "Prototype addresses the hypothesis",
      "Relevant actions and recovery work",
      "Scenario avoids instructions to the answer",
      "Limitations documented",
    ],
    portfolio: "A prototype with a reason for its fidelity and scope.",
    resource: testing,
  },
  {
    id: "week2-day5-v1",
    week: 2,
    day: 5,
    title: "Observe, revise, and report honestly",
    why: "Complete a small learning loop and explain what changed because of evidence.",
    teach: [
      "In a usability session, ask someone to attempt the task and observe what they do. Avoid teaching the interface while testing it. If you help, record the intervention so assisted success is not mistaken for independent success.",
      "Capture the action, result, and context of a difficulty before proposing a cause. “Asked what to bring after reading the summary” is a useful observation. “People are careless” is a judgment that does not explain the interaction.",
      "Choose a small repair based on task impact and evidence. Preserve the original, state the intended improvement, and list what needs another check. Revising a design does not by itself establish that the revision works.",
      "Use the participant booked earlier if available. Otherwise run a self-pilot and label it accordingly; leave the research finding unconfirmed. One small session is a learning exercise, not a broad validation or proof of business impact. Ask your creator to review the evidence before claiming completion.",
    ],
    example:
      "Observation: the participant asked whether “materials supplied” included a sketchbook. Interpretation: the summary may be ambiguous. Revision: list supplied and bring-your-own items separately. Next check: ask another visitor to explain the requirements without help.",
    steps: [
      {
        minutes: 15,
        title: "Prepare",
        text: "Check the prototype, task, voluntary consent, and note template. Remove personal data.",
      },
      {
        minutes: 30,
        title: "Observe or pilot",
        text: "Run a short consented session, or a clearly labelled self-pilot if no participant is available. Record help, dead ends, and task outcome.",
      },
      {
        minutes: 25,
        title: "Interpret",
        text: "Write two observations and their possible explanations. Keep contrary evidence and limits visible.",
      },
      {
        minutes: 30,
        title: "Repair",
        text: "Make one bounded revision while keeping the original. Explain the expected change and what remains untested.",
      },
      {
        minutes: 20,
        title: "Report and submit",
        text: "Write a brief evidence–decision–revision summary, add output references, and request creator review. Record real minutes; stop at two hours.",
      },
    ],
    deliverable:
      "Session or pilot notes, one before/after revision, and an honest report with a next check.",
    check: [
      {
        question: "Does a revision prove the issue is fixed?",
        answer: "No. It is a response to evidence that still needs checking.",
      },
      {
        question: "How should facilitator help be recorded?",
        answer:
          "Mark when and how you intervened so assisted task completion is not counted as independent success.",
      },
    ],
    rubric: [
      "Session type and consent clear",
      "Observed behavior separated from cause",
      "Revision matches an important issue",
      "Results and limitations communicated",
    ],
    portfolio:
      "A complete small practice loop, not a validated business-impact case study.",
    resource: testing,
  },
];
