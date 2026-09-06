import { withLegacyText } from "./teaching";
export const week2 = [
  {
    id: "week2-day1-v1",
    week: 2,
    day: 1,
    title: "Choose the evidence you need",
    why: "Turn a vague desire to research into a small study that can change a design decision.",
    teach: [
      "Choose the decision and uncertainty before choosing a research method.",
      "Interviews reveal context; observing a task reveals interaction problems.",
      "Recruit for relevant experience, with voluntary participation.",
      "A rehearsal or self-walkthrough is not participant research.",
    ],
    example:
      "Decision: whether preparation information belongs before reservation or in a reminder. Question: when do attendees decide what to pack? Evidence: a recent attendee’s sequence of actions, with a follow-up about where they looked for information. Limitation: one person may have an unusual routine.",
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
    resource: {
      title: "GOV.UK: how discovery works",
      id: "R07",
      url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
    },
    explanation: [
      "Start with a decision, not a method. If you need to understand how people prepare for a workshop, a conversation about a recent visit can reveal context. If you need to know whether a materials summary is understandable, observe someone using it. A survey does not automatically answer either question well.",
      "Write a research question as an uncertainty: “When do attendees look for preparation instructions?” Then name the evidence that would help and the choice it would influence. This makes it easier to avoid collecting interesting but irrelevant information.",
      "Recruit people with experience related to the task, rather than choosing only whoever is easiest to reach. For this small practice study, one willing adult with a recent booking experience can help rehearse your method, but cannot represent the whole audience. Document that limitation.",
      "Keep participant access separate from study quality. If nobody is available during this module, improve the plan and do a clearly labelled self-walkthrough. Do not turn a fictional persona or an AI-generated interview into participant evidence. Never collect private booking or payment details for this exercise.",
    ],
    prerequisite:
      "Bring Module 1 Lesson 5’s flow, screens and unresolved questions.",
    outputs: [
      "One-page study plan",
      "Session guide and consent introduction",
      "Note-taking template",
      "Participant-access status",
    ],
    repairs: [
      "If the study has no decision, name the choice its evidence could change.",
      "If the method does not answer the question, compare interviewing with observing the task.",
      "If participants are chosen only for convenience, document relevant experience and sample limitations.",
      "Add voluntary consent and remove unnecessary personal data before any session.",
    ],
    steps: [
      {
        minutes: 20,
        title: "Reconnect to Module 1",
        instructions: [
          "Review your Module 1 flow and screens.",
          "Choose one decision you cannot yet justify.",
        ],
      },
      {
        minutes: 25,
        title: "Plan the study",
        instructions: [
          "Write the decision and research question.",
          "Name a suitable method, participant criteria and useful evidence.",
        ],
      },
      {
        minutes: 30,
        title: "Prepare materials",
        instructions: [
          "Adapt your interview guide or write a neutral task scenario.",
          "Add voluntary consent and how notes will be used.",
          "Create columns for actions, quotes, observations and interpretations.",
        ],
      },
      {
        minutes: 30,
        title: "Arrange or rehearse",
        instructions: [
          "If possible, invite a willing adult with relevant recent experience without pressure.",
          "Rehearse the session aloud.",
          "If nobody is available, record the recruitment gap; never invent an interview.",
        ],
      },
      {
        minutes: 15,
        title: "Review and save",
        instructions: [
          "Identify one way the plan could bias results and revise it.",
          "Save the plan and access status.",
          "Exclude private booking and payment details.",
        ],
      },
    ],
  },
  {
    id: "week2-day2-v1",
    week: 2,
    day: 2,
    title: "Turn notes into traceable findings",
    why: "Make interpretations that another person can trace back to actual observations.",
    teach: [
      "Observation: what happened. Interpretation: what it might mean. Recommendation: what to change.",
      "Give observations IDs so findings can be traced to sources.",
      "Retain contradictions; frequency alone does not determine severity.",
      "Keep simulated training data separate from real research.",
    ],
    example:
      "Simulated training notes: S1 looked for the materials list the evening before the class; S2 searched the confirmation email on the journey; S3 brought supplies from a previous class without checking; S4 noticed the list before booking and borrowed an item. A possible finding is that preparation happens at different times. “Nobody reads instructions” is contradicted by S4.",
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
    resource: {
      title: "GOV.UK: analyse a research session",
      id: "R04",
      url: "https://www.gov.uk/service-manual/user-research/analyse-a-research-session",
    },
    explanation: [
      "An observation describes something seen or heard. An interpretation explains what it might mean. A recommendation proposes an action. Keep these separate so a reviewer can challenge the reasoning without losing the original evidence.",
      "Give each observation a short ID and keep its source reference. Group related observations, then name a possible theme. A group name should describe a pattern, not disguise a solution: “preparation discovered late” is different from “send more reminders.”",
      "Look for observations that do not fit. Contradictory evidence can reveal different contexts or a mistaken explanation. A single important exception can matter even when most notes point elsewhere; frequency alone is not severity.",
      "For this lesson, use the clearly fictional practice notes below if no real session has occurred. The goal is to practice reasoning, not claim new user research. Label the resulting document simulated training data and never merge it into real participant findings.",
    ],
    prerequisite:
      "Bring consented notes, or use the four explicitly simulated notes in the worked example.",
    outputs: [
      "Observation table with source IDs and source type",
      "Two tentative findings with supporting and contrary evidence",
      "Confidence and unanswered questions",
      "One possible design implication",
    ],
    repairs: [
      "If a finding has no source, attach observation IDs or mark it unsupported.",
      "Move proposed explanations out of the observation column.",
      "If every note supports the claim, actively inspect exceptions such as S4.",
      "If simulated sources are unlabeled, label both the table and resulting findings.",
    ],
    steps: [
      {
        minutes: 20,
        title: "Read and distinguish",
        instructions: [
          "Read the analysis reference.",
          "Write your own definitions of observation, interpretation and recommendation.",
        ],
      },
      {
        minutes: 30,
        title: "Extract",
        instructions: [
          "Choose real consented notes or expand the simulated example.",
          "Assign each observation an ID.",
          "Label the table “Real session” or “Simulated training data.”",
        ],
      },
      {
        minutes: 30,
        title: "Group",
        instructions: [
          "Group related observations into two possible themes.",
          "Keep an exception or contradiction visible.",
        ],
      },
      {
        minutes: 25,
        title: "Build an evidence chain",
        instructions: [
          "Write two tentative findings.",
          "For each, list supporting IDs, counter-evidence, confidence and one unanswered question.",
        ],
      },
      {
        minutes: 15,
        title: "Explain and save",
        instructions: [
          "Write one possible design implication.",
          "Save the table and evidence chain without calling the implication proven.",
        ],
      },
    ],
  },
  {
    id: "week2-day3-v1",
    week: 2,
    day: 3,
    title: "Choose a small, testable opportunity",
    why: "Translate uncertain findings into a feasible next design move without pretending to know the outcome.",
    teach: [
      "An opportunity describes a better user outcome without prescribing a feature.",
      "Compare task impact, uncertainty, effort and constraints.",
      "A score remains an estimate unless measured.",
      "A hypothesis needs an observable signal and evidence that could weaken it.",
    ],
    example:
      "Hypothesis: if the materials summary is visible before reservation, a first-time visitor can explain what to bring without help. Counter-evidence: visitors still miss or misinterpret it. This tests comprehension, not whether attendance rates will improve.",
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
    resource: {
      title: "GOV.UK: how discovery works",
      id: "R07",
      url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
    },
    explanation: [
      "An opportunity describes an improvement in someone’s ability to accomplish a goal. It should leave room for more than one response. “Help attendees find preparation requirements when planning” is broader than “build email automation.”",
      "Compare options using task impact, uncertainty, effort, and constraints. Numbers can organize discussion but do not make guesses objective. Write the reason behind a rating, and distinguish measured information from an estimate.",
      "A testable hypothesis links a change, a person or context, and an observable behavior. Specify what would weaken the hypothesis. Avoid goals such as “make users happy” unless you explain how you will investigate that construct.",
      "A small prototype is a way to examine a question, not a reduced list of every feature you want. Leave out what the study does not need, but include enough context and failure behavior to avoid a misleading test.",
    ],
    prerequisite: "Bring Lesson 2’s findings and their limitations.",
    outputs: [
      "Comparison of three different options",
      "One choice with trade-off and excluded scope",
      "Hypothesis, success signal and counter-evidence",
      "Neutral task scenario",
    ],
    repairs: [
      "If options are cosmetic variations, add a different way to meet the goal.",
      "If the choice has no evidence, link the finding and state uncertainty.",
      "If scope is too broad, remove behavior unrelated to the hypothesis.",
      "Replace “users like it” with an observable behavior and counter-evidence.",
    ],
    steps: [
      {
        minutes: 20,
        title: "Review evidence",
        instructions: [
          "Choose one finding affecting the workshop flow.",
          "Keep its source type and limitations attached.",
        ],
      },
      {
        minutes: 30,
        title: "Explore three options",
        instructions: [
          "Describe three different responses.",
          "For each, estimate task impact, uncertainty and effort with reasons.",
        ],
      },
      {
        minutes: 30,
        title: "Select",
        instructions: [
          "Choose one response and explain the trade-off.",
          "List what you leave outside the test.",
        ],
      },
      {
        minutes: 25,
        title: "Write the test",
        instructions: [
          "Write: “If [change], [person/context] can [observable behavior].”",
          "Add a success signal and counter-evidence.",
          "Write a goal-based task without naming the desired route.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Save the comparison, scope and test question.",
          "Name the prototype behavior needed to examine it.",
        ],
      },
    ],
  },
  {
    id: "week2-day4-v1",
    week: 2,
    day: 4,
    title: "Build a prototype that can answer a question",
    why: "Practice enough interaction detail to test your hypothesis without spending the session on decoration.",
    teach: [
      "Choose fidelity to answer the question, not to impress.",
      "Relevant actions need destinations, outcomes and recovery.",
      "Use labelled example content, never private payment data.",
      "A self-pilot checks the prototype; it does not prove first-time usability.",
    ],
    example:
      "A paper prototype includes workshop details, materials, reservation form, an invalid-email state, and confirmation. The facilitator swaps the sheets in response to actions. This can investigate comprehension and recovery without simulating real payment.",
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
    resource: {
      title: "GOV.UK: moderated usability testing",
      id: "R05",
      url: "https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing",
    },
    explanation: [
      "Choose prototype fidelity to match the uncertainty. Paper screens can test content order and a simple path. A clickable prototype can make navigation more realistic. Neither demonstrates production performance or actual accessibility implementation.",
      "List the start state, actions, destinations, and outcome before linking screens. Every visible action relevant to the task should work or be clearly outside scope. A convincing screen with broken paths can produce findings about the prototype rather than the idea.",
      "Use plausible example content and label invented details. Avoid private participant data and real payment details. Write a scenario that provides a goal without naming the button or route you want the person to choose.",
      "Pilot the prototype yourself to catch technical dead ends, but label this as a pilot. You already know the intended route, so your success does not prove a first-time visitor can use it. Record the limitations to discuss during the test.",
    ],
    prerequisite:
      "Bring Lesson 3’s hypothesis and Module 1 layouts. Use paper or your existing tool.",
    outputs: [
      "Prototype and interaction map",
      "One working recovery path",
      "Neutral scenario and reset state",
      "Known limitations",
    ],
    repairs: [
      "If the prototype misses the hypothesis, add the behavior needed to observe its signal.",
      "If a path breaks, repair and rerun the primary and recovery paths.",
      "Remove button names from a leading task scenario.",
      "Document that prototype behavior does not verify a server or implemented accessibility.",
    ],
    steps: [
      {
        minutes: 20,
        title: "Specify states",
        instructions: [
          "List the screens and actions needed for your hypothesis.",
          "Include one relevant recovery path.",
        ],
      },
      {
        minutes: 50,
        title: "Build",
        instructions: [
          "Connect paper screens by swapping sheets, or link screens in your existing tool.",
          "Reuse Module 1 layouts.",
          "Label invented content and out-of-scope actions.",
        ],
      },
      {
        minutes: 20,
        title: "Pilot",
        instructions: [
          "Walk the primary and recovery paths yourself.",
          "Repair broken links and missing content.",
          "Label this check as a self-pilot.",
        ],
      },
      {
        minutes: 15,
        title: "Prepare the scenario",
        instructions: [
          "Write a goal-based task without button or route instructions.",
          "Prepare the starting state so the task can be repeated.",
        ],
      },
      {
        minutes: 15,
        title: "Save",
        instructions: [
          "Save the prototype reference, interaction map and scenario.",
          "List simulated behavior and checks the prototype cannot establish.",
        ],
      },
    ],
  },
  {
    id: "week2-day5-v1",
    week: 2,
    day: 5,
    title: "Observe, revise, and report honestly",
    why: "Complete a small learning loop and explain what changed because of evidence.",
    teach: [
      "Observe the task without teaching the interface; record any help.",
      "Describe behavior before proposing a cause.",
      "Keep the original and repair one issue with meaningful task impact.",
      "A revision needs another check; a small session cannot prove business impact.",
    ],
    example:
      "Observation: the participant asked whether “materials supplied” included a sketchbook. Interpretation: the summary may be ambiguous. Revision: list supplied and bring-your-own items separately. Next check: ask another visitor to explain the requirements without help.",
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
    resource: {
      title: "GOV.UK: moderated usability testing",
      id: "R05",
      url: "https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing",
    },
    explanation: [
      "In a usability session, ask someone to attempt the task and observe what they do. Avoid teaching the interface while testing it. If you help, record the intervention so assisted success is not mistaken for independent success.",
      "Capture the action, result, and context of a difficulty before proposing a cause. “Asked what to bring after reading the summary” is a useful observation. “People are careless” is a judgment that does not explain the interaction.",
      "Choose a small repair based on task impact and evidence. Preserve the original, state the intended improvement, and list what needs another check. Revising a design does not by itself establish that the revision works.",
      "Use the participant booked earlier if available. Otherwise run a self-pilot and label it accordingly; leave the research finding unconfirmed. One small session is a learning exercise, not a broad validation or proof of business impact. Ask your creator to review the evidence before claiming completion.",
    ],
    prerequisite:
      "Bring Lesson 4’s prototype, scenario and note template, plus your consent plan.",
    outputs: [
      "Consented session notes or labelled self-pilot notes",
      "Two observations with possible explanations",
      "One before/after revision",
      "Evidence–decision–revision report and next check",
    ],
    repairs: [
      "If session type or consent is unclear, document the actual conditions; never invent participation.",
      "Replace judgments about people with the actions observed.",
      "If the revision misses the main issue, connect the repair to task impact.",
      "If results overclaim success, separate assisted outcomes, untested revisions and remaining checks.",
    ],
    steps: [
      {
        minutes: 15,
        title: "Prepare",
        instructions: [
          "Check the prototype, task and note template.",
          "Confirm voluntary consent before involving a participant.",
          "Remove personal data.",
        ],
      },
      {
        minutes: 30,
        title: "Observe or pilot",
        instructions: [
          "Run a short consented session or a labelled self-pilot if nobody is available.",
          "Record help, dead ends and the task outcome.",
          "Leave participant findings unconfirmed after a self-pilot.",
        ],
      },
      {
        minutes: 25,
        title: "Interpret",
        instructions: [
          "Write two observations and possible explanations separately.",
          "Retain contrary evidence and limitations.",
        ],
      },
      {
        minutes: 30,
        title: "Repair",
        instructions: [
          "Keep the original and make one bounded repair.",
          "Explain the expected change and what remains untested.",
        ],
      },
      {
        minutes: 20,
        title: "Report and submit",
        instructions: [
          "Write short bullets under Evidence, Decision, Revision and Next check.",
          "Add both artifact references and request creator review.",
          "Save any unfinished next action.",
        ],
      },
    ],
  },
].map(withLegacyText);
