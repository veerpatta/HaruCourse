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
import { adaptPublished, type Criterion, type Lesson } from './teaching';
import { withLessonActions } from './lessonActions';
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
      "Any detail you add beyond the brief — who, when, what it costs — is an assumption. Keep it in the frame and mark it (assumed) so it gets checked.",
    ],
    example:
      "Made-up example: the brief says only that first-time attendees arrive without aprons. A frame saying she checks “the evening before” marks that detail (assumed), because nobody reported it. A reminder, a materials summary and a checkbox are different responses; a click on a checkbox does not prove comprehension.",
    check: [
      {
        question: "Which assumption should be investigated first?",
        answer:
          "One with weak evidence whose failure would materially change the design or harm users.",
      },
      {
        question: "The brief never says when attendees prepare. May your frame say “the evening before”?",
        answer:
          "Yes, if you mark it (assumed). Added details make a frame concrete; unmarked, they turn a guess into a fact nobody reported.",
      },
    ],
    rubric: [
      "Needs without prescribed features",
      "A way to reduce uncertainty",
      "Alternatives compared against constraints",
    ],
    criteria: [
      {
        criterion: "Needs without prescribed features",
        evidence:
          "Three frames that each name a person, a moment, an unmet goal and a consequence, contain no feature word (reminder, email, checkbox, page, button), and mark every detail the brief did not state as (assumed).",
        levels: [
          "No frames, or every frame names a feature to build.",
          "Frames exist, but at least one names a feature or a screen, or adds details such as when people prepare as if the brief had reported them.",
          "Three feature-free frames, each naming a person, a moment, a goal and a consequence, with every added detail marked (assumed).",
          "As adequate, and the frames differ in person or moment so they would lead to different responses, with a note on which marked assumption matters most.",
        ],
        remediation:
          "Take the frame that names a feature, delete the feature word and write what the person needs to have happen instead. Then underline every detail the brief did not give and put (assumed) after it.",
        recheck: "The rewritten frame beside the original, with each added detail marked (assumed).",
      },
      {
        criterion: "A way to reduce uncertainty",
        evidence:
          "Six assumptions with consequence and confidence, two priorities chosen because being wrong costs most and the evidence is thinnest, and for each priority something a person could say or do that would change your mind.",
        levels: [
          "No priorities, or nothing named that could change your mind.",
          "Priorities are chosen for ease or interest, or the evidence line is a feeling (“people would like it”) rather than something observable.",
          "Two priorities justified by consequence and uncertainty, each with a concrete observation that would disprove it.",
          "As adequate, and the write-up compares the cost of being wrong for two assumptions and says what you would do differently under each answer.",
        ],
        remediation:
          "For each priority write two lines: “If this is wrong, then…” and “I would change my mind if I saw…”. Swap any priority whose consequence line turns out to be trivial.",
        recheck: "The two priorities with their consequence and disconfirming-evidence lines.",
      },
      {
        criterion: "Alternatives compared against constraints",
        evidence:
          "Three responses that differ in kind — for example one information change, one process change and one interface change — each with a constraint it must respect and a weakness you would say to the organiser.",
        levels: [
          "Fewer than two responses, or none has a constraint.",
          "Three responses that are variations of one idea (three ways to send the same list), or constraints and weaknesses are missing or vague.",
          "Three responses that differ in kind, each with a stated constraint and an honest weakness.",
          "As adequate, and the decision says which constraint rules a response in or out, and what would make you revisit the response you set aside.",
        ],
        remediation:
          "Check whether two responses would fail for the same reason. If they would, replace one with a change in a different place — what people are told, what the studio does or what a screen shows — and give it a constraint and a weakness.",
        recheck: "The three responses with their constraint and weakness lines, and one sentence on why they cannot all fail for the same reason.",
      },
    ] satisfies Criterion[],
    portfolio: "Keep the decision log as early reasoning evidence.",
    resource: {
      title: "Design Council: the Double Diamond",
      id: "R01",
      url: "https://www.designcouncil.org.uk/resources/the-double-diamond/",
    },
    explanation: [
      "A useful frame describes a person, situation, unmet goal, and consequence. “Attendees need to know what to bring before leaving home” leaves room for alternatives. “Attendees need a checkbox” already chooses a feature.",
      "A stakeholder report is a lead, not proof of frequency or cause. Assumptions are not necessarily false; they are claims that still need checking. Write what would change your mind. Details you add to make a frame concrete — when it happens, who it happens to, what it costs — are assumptions too: mark them (assumed) so they are checked rather than quietly believed.",
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
      "If a frame states a detail the brief never gave, mark it (assumed) and add it to your assumptions.",
      "If the priority has no rationale, compare the cost of being wrong for two assumptions.",
      "If nothing could change your mind, add one concrete disconfirming observation.",
    ],
    steps: [
      {
        minutes: 20,
        title: "Review",
        instructions: [
          "Read your earlier notes, or the practice brief if you have none.",
          "Mark explanations you have not verified.",
        ],
      },
      {
        minutes: 25,
        title: "Frame",
        instructions: [
          "Write three person–situation–goal–consequence statements about workshop attendance.",
          "Remove feature names such as checkbox or reminder.",
          "Put (assumed) after any detail the brief or your evidence does not state.",
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
      "Before beginning, explain what the notes are for, who will read them and when they will be deleted; ask permission before recording.",
      "One conversation cannot establish how common a behavior is.",
    ],
    example:
      "Made-up example: replace “Was checkout confusing because the button was hidden?” with “What happened when you tried to finish?” Then ask what the person expected.",
    check: [
      {
        question: "What if no participant is available?",
        answer:
          "Improve the guide and arrange a later conversation. Mark evidence missing rather than inventing findings. A rehearsal with the guide, the consent wording and what you learned reading it aloud is a complete result for this lesson.",
      },
      {
        question: "Your notes have no names in them. Are they anonymous?",
        answer:
          "Not necessarily. A job, a street or an unusual event can identify someone. Type only a de-identified summary into the course, and keep raw notes private with a date to delete them.",
      },
    ],
    rubric: [
      "Questions address uncertainty",
      "Neutral questions about experience",
      "Consent and limitations explicit",
    ],
    criteria: [
      {
        criterion: "Questions address uncertainty",
        evidence:
          "A one-sentence purpose and an uncertainty carried from Lesson 2, with six questions that each connect to it, so a reader could say which decision the answers would inform.",
        levels: [
          "No uncertainty is named, or the questions are unrelated to it.",
          "An uncertainty is named, but several questions drift to general opinions or to the feature you already have in mind.",
          "Every question connects to the named uncertainty, and the purpose says what the answers could change.",
          "As adequate, and the guide cuts or reorders a question with a stated reason, such as one whose answer could not change the decision.",
        ],
        remediation:
          "Beside each question, write which part of the uncertainty it serves. Cut or rewrite any question that serves none.",
        recheck: "The six questions, each with its link to the uncertainty.",
      },
      {
        criterion: "Neutral questions about experience",
        evidence:
          "Six open questions about a specific recent occasion and two follow-ups that work after any answer; none names a feature, asks for a prediction or contains the answer you hope for.",
        levels: [
          "Questions ask people to judge or predict, such as “Would you use…?”.",
          "Most questions ask about the past, but one or two still lead (“Was it confusing?”) or name your idea.",
          "All questions ask about a recent real occasion without naming your idea, and the follow-ups are neutral.",
          "As adequate, and the weakest question is shown before and after, with the reason the rewrite steers less.",
        ],
        remediation:
          "Read the questions aloud. Rewrite any that names a feature, asks “would you…”, or contains the word you hope to hear, starting from “Tell me about the last time…”.",
        recheck: "The weakest question before and after the rewrite.",
      },
      {
        criterion: "Consent and limitations explicit",
        evidence:
          "Consent wording that says what the notes are for, who will read them, when they will be deleted, that the person can skip or stop, and whether anything is recorded; a session status that matches what happened; and either a de-identified summary of a real conversation or, on the rehearsal route, the status “Rehearsal only” with the participant boxes left empty.",
        levels: [
          "No consent wording, or the notes contain names or identifying details, or a rehearsal is presented as a conversation.",
          "Consent wording leaves out who reads the notes, when they are deleted or the right to stop, or the session status is unclear.",
          "Complete consent wording and a status that matches what happened: a real conversation appears only as a de-identified summary, and a rehearsal leaves the participant boxes empty.",
          "As adequate, and the limits are stated plainly: one conversation cannot show how common anything is, and a rehearsal tests the guide rather than anyone’s experience.",
        ],
        remediation:
          "Add any missing consent element — purpose, who reads the notes, deletion date, the right to stop, recording. Then check the status: if nobody consented, choose rehearsal and empty the participant boxes.",
        recheck: "The consent introduction and the session status, with the participant boxes matching the status.",
      },
    ] satisfies Criterion[],
    portfolio: "Count research findings only when actually collected.",
    resource: {
      title: "GOV.UK: using in-depth interviews",
      id: "R27",
      url: "https://www.gov.uk/service-manual/user-research/using-in-depth-interviews",
    },
    explanation: [
      "Begin with the uncertainty an interview should reduce. A research question guides your study; a participant question is the plain-language prompt used in conversation.",
      "Ask about a recent specific experience. “Tell me about your last class booking” invites an account of behavior. “Would you use our helpful reminder?” invites prediction and agreement. Follow up without supplying the answer.",
      "Explain the purpose, voluntary participation, who will read the notes and when they will be deleted. Ask permission before recording. Avoid unnecessary identifying data and do not paste private research into AI tools. Keep raw notes on paper or in a private file with a deletion date, and type only a de-identified summary into the course: removing a name does not make notes anonymous, because a job, a street or an unusual event can still identify someone. Keep practice to adults and everyday topics; anything involving health or children needs qualified review first.",
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
          "With consent, hold a 15-minute practice conversation with an adult about an everyday booking; keep away from health or other sensitive topics.",
          "If nobody is available, rehearse the guide and mark “No participant evidence collected.”",
          "Keep raw notes on paper or in a private file with a deletion date; type only a de-identified summary here.",
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
      "Show price and preparation requirements before commitment, so nobody promises a place before knowing what it costs and what to bring.",
    ],
    example:
      "Made-up example: workshop full → explain availability → offer another date. A payment timeout should distinguish checking status from confirmed failure to reduce accidental repeat payments.",
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
    criteria: [
      {
        criterion: "Clear primary outcome",
        evidence:
          "A trigger written from the person’s side, an outcome stating what is true for the person at the end rather than which screen shows, and a list of what they need to know before committing.",
        levels: [
          "No outcome, or the outcome is a screen name such as “Confirmation page”.",
          "An outcome exists but is vague or system-centred, or the information list leaves out price, date and time, or what to bring.",
          "A trigger, a person-centred outcome and a complete before-commitment list.",
          "As adequate, and the outcome is used to judge the branches: a failure counts as handled only if the person can still reach the outcome or leave knowing where they stand.",
        ],
        remediation:
          "Rewrite the outcome as “She has … and knows …”. Then check the information list against price, date and time, what to bring, the refund rule and places left.",
        recheck: "The rewritten outcome and the completed information list.",
      },
      {
        criterion: "Three recoverable exceptions",
        evidence:
          "Branches for a full workshop, invalid input and an interrupted confirmation, each with a message saying what happened and a next action the person can take; the interrupted branch treats the result as unknown rather than failed.",
        levels: [
          "No failure branches.",
          "Branches exist, but at least one ends in a message only — a dead end — or the interrupted branch tells the person it failed.",
          "Three branches, each with a message and a next action the person takes, entered values kept, and an unknown-state message for the interruption.",
          "As adequate, and the walkthrough found and repaired a dead end, with the cost of the repair noted.",
        ],
        remediation:
          "For each failure, finish the sentence “Next, the person can…”. Any branch where the only answer is “read a message” needs a real action added.",
        recheck: "The three failure branches with their next actions.",
      },
      {
        criterion: "Prerequisites before commitment",
        evidence:
          "On the successful path, price, date and what to bring appear before the Reserve arrow, and every arrow is labelled with the action that causes the move.",
        levels: [
          "No path, or a list of screen names with unlabelled arrows.",
          "A path exists, but required information appears after Reserve or at payment, or some arrows carry no action.",
          "Required information sits before Reserve and every arrow carries an action.",
          "As adequate, and the flow notes an assumption about when people look for this information and how it could be checked.",
        ],
        remediation:
          "Trace the path with a finger and stop at Reserve. Anything the person needs that appears after that point moves before it; label every arrow that has no action.",
        recheck: "The redrawn successful path with the moved information and labelled arrows.",
      },
    ] satisfies Criterion[],
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
      "Persistent labels, clear errors and a logical order support access. Reading order covers everything; Tab order covers controls only, and a hint is tied to its field rather than given a Tab stop.",
      "Mockups specify accessibility intent; runtime tests verify implemented behavior.",
    ],
    example:
      "Made-up example: the Email label stays visible after typing, and the note explaining why the address is wanted is read before the field and tied to it, with no Tab stop of its own. The materials summary stays before Reserve on mobile instead of disappearing into a desktop sidebar.",
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
      {
        question: "Should a hint beside a field get its own Tab stop?",
        answer:
          "No. Tab moves between controls only. Place the hint before its field in reading order and tie it to the field, so a screen reader reads it out when the field receives focus.",
      },
    ],
    rubric: [
      "Task-based hierarchy",
      "Explained responsive behavior",
      "Labels and recovery",
      "Evidence-bounded accessibility claims",
    ],
    criteria: [
      {
        criterion: "Task-based hierarchy",
        evidence:
          "Details and reservation screens at narrow and wide widths, listed top to bottom, with date, price and what to bring above Reserve and reassurance such as photographs below the decision.",
        levels: [
          "No screens, or an order that follows looks rather than the decision.",
          "Screens exist, but price or what to bring sits below Reserve at one width, or the order is unexplained.",
          "At both widths, everything the decision needs sits above Reserve, in an order tied to that decision.",
          "As adequate, and the trade-off is named — for example a less striking page in exchange for no scrolling back and forth.",
        ],
        remediation:
          "Ask what the person must decide on this screen, then reorder the narrow version so everything that decision needs comes before Reserve.",
        recheck: "The reordered narrow screen, listed top to bottom.",
      },
      {
        criterion: "Explained responsive behavior",
        evidence:
          "A note saying what stacks, wraps, stays visible and moves between wide and narrow, with content reflowing at a readable size rather than shrinking, and what changed when a label got longer or text larger.",
        levels: [
          "Only one width, or the narrow version is the wide one scaled down.",
          "Both widths exist, but the change between them is not explained, or longer text was not tried.",
          "Stacking and wrapping are explained, content keeps its size, and the longer-label result is recorded.",
          "As adequate, and a collision found by the longer-label test was repaired without shrinking text, with the reason.",
        ],
        remediation:
          "Write three lines: what stacks, what wraps, and what stays above Reserve. Then lengthen one label on the sketch and record what it collides with.",
        recheck: "The stacking note and the longer-label result.",
      },
      {
        criterion: "Labels and recovery",
        evidence:
          "Visible labels that stay while typing; an error state that says in words what is wrong and how to fix it while keeping typed values; and an order annotation that separates reading order (everything, in sequence), Tab order (controls only) and hints tied to their fields.",
        levels: [
          "Placeholder-only labels, no error state, or no order annotation.",
          "Labels and an error exist, but the error clears the form or relies on colour alone, or the annotation treats reading order and Tab order as one list or gives hint text a Tab stop.",
          "Persistent labels, a worded error that keeps typed values, and separate reading and Tab orders with each hint tied to its field.",
          "As adequate, and the annotation explains why each hint must arrive before its field and what a builder has to do to tie it.",
        ],
        remediation:
          "Rewrite the order annotation as two lists — reading order first, then Tab stops (fields, buttons and links only) — and mark each hint as tied to its field. Then check that the error names the problem in words and keeps what was typed.",
        recheck: "The two order lists and the revised error state.",
      },
      {
        criterion: "Evidence-bounded accessibility claims",
        evidence:
          "No annotation claims the screens are accessible; a list names the keyboard and screen-reader checks that need a built version, such as the Tab order and whether tied hints and errors are read out.",
        levels: [
          "The work claims the design is accessible, or names no checks.",
          "Checks are listed only vaguely (“test accessibility”), or one sentence still claims a result from the sketch.",
          "Specific checks still needed are listed, and nothing claims a result from a drawing.",
          "As adequate, and each check says what would count as a failure — for example Tab stopping on the hint, or an error not being read out.",
        ],
        remediation:
          "Replace any sentence saying the screens are accessible with the specific check that would show it, written as still to do.",
        recheck: "The list of checks that still need a built version.",
      },
    ] satisfies Criterion[],
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
      "Three orders are easy to confuse. Reading order is everything a screen reader reads, text included, as someone moves down the page. Focus order is the shorter list of controls — fields, buttons, links — that the Tab key visits. A hint beside a field is not a control, so it gets no Tab stop. Place it before the field so anyone reading down the page meets it first, and note that the builder must tie it to the field so a screen reader reads it out when that field receives focus; someone tabbing straight to the field would otherwise usually not hear it.",
      "Use persistent input labels, plain instructions, nearby error messages, and a logical reading order. Explain how to correct an error and retain entered values. Record what you checked and what remains untested.",
    ],
    prerequisite:
      "Bring Lesson 4’s flow. Use paper or a familiar tool; no new software is required.",
    outputs: [
      "Details and reservation screens at narrow and wide widths",
      "Reading order, Tab order, labels, recovery and stacking annotations",
      "One error state",
      "An unresolved issue for review",
    ],
    repairs: [
      "If the next action is hard to find, reorder information around the task.",
      "If mobile is just a smaller desktop, show what stacks and wraps.",
      "If an error has no recovery, add corrective text and retained input.",
      "If reading order and Tab order are one list, or a hint has its own Tab stop, separate them and tie the hint to its field.",
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
          "Annotate persistent labels, stacking, reading order and Tab order (controls only).",
          "Mark each hint as tied to its field, not given a Tab stop of its own.",
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
    criteria: [
      {
        criterion: "Task-impact priority",
        evidence:
          "One chosen weak point written as something anyone could point to, what it stops the person doing, where the evidence came from (your walkthrough, a heuristic or a participant) and what remains uncertain.",
        levels: [
          "No critique, or a critique of taste only (“feels dated”).",
          "An observation is named, but its effect on the task is missing, or a guess about other people is written as observed.",
          "A specific observation, its effect on the task, a labelled source and an honest uncertainty.",
          "As adequate, and the choice is justified against another candidate weakness: why this one blocks the task more.",
        ],
        remediation:
          "Rewrite the critique as “On [screen], [what you can point to], so the person cannot [task].” Label the source, and move any claim about people to inferred.",
        recheck: "The rewritten critique with its source label.",
      },
      {
        criterion: "Repair addresses the issue",
        evidence:
          "An untouched original kept where it can be found, and one bounded change that answers the named concern while everything else stays as it was.",
        levels: [
          "No repair, or the original was overwritten.",
          "A repair exists, but it changes several things at once or does not touch the named concern.",
          "One bounded change that answers the concern, with the original kept for comparison.",
          "As adequate, and the write-up names what the repair deliberately left alone, and why.",
        ],
        remediation:
          "List every difference between the two versions. Undo any that do not serve the named concern, or relabel the work honestly as a redesign rather than a bounded repair.",
        recheck: "The before and after versions, with their single difference named.",
      },
      {
        criterion: "Limitations preserved",
        evidence:
          "The record calls the repair untested, says what it cannot prove, and names an observation — a person, a task and what you would watch for — that could show it did not help.",
        levels: [
          "The repair is described as fixing the problem.",
          "Limitations are mentioned only vaguely, or the check cannot fail (“it looks clearer”).",
          "The repair is called untested, and the check names who would do what and what would count as not helping.",
          "As adequate, and the record notes a way the repair could make something else harder, with how you would watch for it.",
        ],
        remediation:
          "Finish the sentence “This repair would be shown not to help if…”, and replace any claim that the problem is fixed.",
        recheck: "The limitations box and the check.",
      },
    ] satisfies Criterion[],
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
    criteria: [
      {
        criterion: "Clear choice and alternative",
        evidence:
          "A one-page note naming the decision, at least one alternative genuinely considered with the reason it was set aside, and the trade-off the choice carries.",
        levels: [
          "No decision named, or the note only describes what was built.",
          "A choice is stated, but there is no real alternative, or the alternative has no reason for being set aside.",
          "A choice, one serious alternative with its reason, and an honest trade-off.",
          "As adequate, and the note says what evidence would make you switch to the alternative.",
        ],
        remediation:
          "Add one alternative you genuinely considered and finish the sentence “I set it aside because…”. Then write what the choice made worse.",
        recheck: "The options, choice and trade-off sections.",
      },
      {
        criterion: "Evidence-matched claims",
        evidence:
          "Every claim carries a source label — observed, reported by a participant, assumed, or an explicit preference — and no sentence states an outcome nobody has observed. Your own walkthrough and labelled assumptions are enough evidence for this lesson if you have had no participant.",
        levels: [
          "Claims of results, or “research showed”, with nothing behind them.",
          "Most claims are labelled, but one states an unobserved outcome or turns one conversation into “research”.",
          "All claims labelled, outcomes written as expectations with a check, and thin evidence acknowledged — even when the only evidence is your own walkthrough.",
          "As adequate, and the spoken run-through found an unsupported word such as “intuitive”, with the note showing how it was repaired.",
        ],
        remediation:
          "Mark each sentence observed, reported, assumed or preference. Rewrite any outcome claim as “I expect… and I would check by…”.",
        recheck: "The evidence and choice sections with their source labels.",
      },
      {
        criterion: "Gap-based next steps",
        evidence:
          "One strength you can point to evidence for, two gaps a reviewer would ask about rather than a wish list, one repair small enough for one sitting, and a next learning action.",
        levels: [
          "No gaps or next action.",
          "The gaps are wishes (“add more screens”), or the repair is too large for one sitting.",
          "Two honest gaps tied to criteria you cannot yet evidence, a bounded repair and a next action.",
          "As adequate, and the next action is chosen by which gap matters most, with the reason.",
        ],
        remediation:
          "Look at the review criteria you could not evidence; those are your gaps. Cut the repair until it fits one sitting.",
        recheck: "The strength, the two gaps, the repair and the next action.",
      },
    ] satisfies Criterion[],
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
].map(withApprenticeship).map(withLessonActions);

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
