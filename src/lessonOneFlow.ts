import type { Choice, Criterion, TransferTask } from './teaching';
import type { SessionPlan } from './sessions';

// Lesson 1 (week1-day1-v1), redesigned on 4 October 2026 as three short
// sessions with visible pause points. The lesson ID and all 36 worksheet field
// IDs are unchanged; earlier single-answer actions for an evidence entry now
// live in one row action, and lessonOneAliases reopens an older saved position
// on that row. Worksheet IDs, step indices and section bookmarks keep their
// meaning.
// `fields` (kind 'fields') shows several answers of one row together — for
// example one evidence entry's claim, label, goal and check — so the learner
// keeps the claim in view while labelling it.
export type LessonAction = {
  id: string; section: 'learn' | 'practice-plan' | 'check' | 'practice'; step: number;
  kind: 'intro' | 'example' | 'field' | 'fields' | 'sort' | 'check' | 'review' | 'teach' | 'setup' | 'demo' | 'supported';
  title: string; instruction: string; field?: string; fields?: string[]; index?: number;
  body?: string[]; guideIndex?: number; answerId?: string; repairFields?: string[];
};
export const lessonOneExample = [
  'Made-up practice case: a pottery studio asks for a bigger Reserve button because people leave the booking screen.',
  'What is known: in this supplied case, a count shows where people leave.',
  'What is guessed: the button might be hard to find. A late price or unclear materials list could also explain it.',
  'A useful question: what information does a first-time visitor need before deciding to book?',
  'Next: plan to observe people using the screen before choosing a fix. You do not need participants for today’s practice.',
  'A bigger button is quick to make, but may solve the wrong problem. Finding out takes effort; the reason people leave is still unknown.',
  'Output: a screen you made. Outcome: a person can finish the task. A good-looking screen alone does not prove the outcome.',
];
export const suppliedWalkthrough = [
  'Fictional material, not research. Write “Supplied pottery-class walkthrough” as the app. Task: find a Saturday class and check its cost.',
  'Home: a Find classes search box appears above a list of classes.',
  'Search: type pottery. Results show titles and images; prices are missing.',
  'Class details: open Saturday pottery. The date is near the title; the price is below a long description.',
  'Booking: select Saturday. The screen shows ₹800 and “materials included”. Stop here.',
  'Describe only these supplied screens. Label explanations as guesses and questions as unknown. Do not claim you used a real app or observed other people.',
];
const field = (id: string, title: string, instruction: string, step: number, section: LessonAction['section'] = 'practice-plan'): LessonAction =>
  ({ id, field: id, kind: 'field', title, instruction, step, section });
const entry = (n: number, step: number, title: string, instruction: string): LessonAction =>
  ({ id: `entry-${n}-saw`, kind: 'fields', fields: [`entry-${n}-saw`, `entry-${n}-label`, `entry-${n}-goal`, `entry-${n}-check`], title, instruction, step, section: 'practice-plan' });

// Questions that belong to Lesson 1's first session. Saved under their own
// answer keys; the option labels are what a saved answer stores.
const LABEL_OPTIONS = ['observed', 'inferred', 'unknown'];
export const lessonOneQuestions: Record<string, { question: string; options: Choice[] }> = {
  'point-price': {
    question: 'On screen A, where does the price appear?',
    options: [
      { label: 'Below the long description, after scrolling', correct: true, feedback: 'You can point to it: the price sits under the description, so a visitor scrolls past the text before seeing it. That is something the screen shows.' },
      { label: 'Beside the class title, next to the date', feedback: 'The date sits beside the title; the price does not. Look at callout 2 on screen A.' },
      { label: 'Only on screen B, once Saturday is chosen', feedback: 'Screen B repeats the price after a date is chosen, but screen A already shows it lower down. Both are visible facts.' },
    ],
  },
  'three-price': {
    question: '“The price is shown after selecting Saturday.”',
    options: LABEL_OPTIONS.map((label) => ({ label, ...(label === 'observed' ? { correct: true as const } : {}), feedback: {
      observed: 'Screen B shows it: choose Saturday and ₹800 appears. Anyone opening the same screens could point to it.',
      inferred: 'Nothing is being explained here. It is a fact about what the supplied screen shows.',
      unknown: 'The supplied screen answers this completely, so it is not an open question.',
    }[label]! })),
  },
  'three-reason': {
    question: '“People leave because of the price.”',
    options: LABEL_OPTIONS.map((label) => ({ label, ...(label === 'inferred' ? { correct: true as const } : {}), feedback: {
      observed: 'No screen shows why anyone leaves. It may be true, but it is a reading of other people, not something you can point to.',
      inferred: 'A plausible explanation, kept as a guess. It tells you what to go and check rather than what is established.',
      unknown: 'You do have a reading here, so inferred keeps it visible as something to test. Unknown would drop the idea entirely.',
    }[label]! })),
  },
  'three-why': {
    question: '“Why did they leave?”',
    options: LABEL_OPTIONS.map((label) => ({ label, ...(label === 'unknown' ? { correct: true as const } : {}), feedback: {
      observed: 'A question cannot be observed. The screens show where things are, never why people act.',
      inferred: 'Inferred is a proposed answer. This is the open question itself, still waiting for evidence.',
      unknown: 'An honest open question. Writing it down is how you remember to find out instead of assuming.',
    }[label]! })),
  },
};

export const lessonOneFlow: LessonAction[] = [
  // Session 1 — screens show; people do.
  { id: 'welcome', section: 'learn', step: 1, kind: 'intro', title: 'What a screen shows, and what we assume', instruction: 'Today’s first goal is small: explain one difference between what a screen shows and what you assume about the people using it. You will look at two made-up booking screens, sort three statements, then make one observation of your own with a way to check it. You can stop after any answer.' },
  { id: 'see-example', section: 'learn', step: 1, kind: 'example', title: 'Look at two booking screens', instruction: 'These are made-up screens from a fictional pottery studio. Read the numbered notes beside them. Each note is either something you can point to, or a reminder of what the screens cannot tell you.' },
  { id: 'point-price', answerId: 'point-price', section: 'learn', step: 1, kind: 'supported', title: 'Point to the price', instruction: 'Look at the two screens below, this time without the notes. Choose where screen A shows the price, then select Show me why.' },
  ...['three-price', 'three-reason', 'three-why'].map((answerId, i): LessonAction => ({ id: `three-${i + 1}`, answerId, section: 'learn', step: 1, kind: 'sort', index: i, title: `Sort the statement · ${i + 1} of 3`, instruction: 'Observed: you can point to it on a screen. Inferred: a possible explanation. Unknown: a question the screens cannot answer yet. Choose the label that fits.' })),
  { id: 'pottery-example', section: 'learn', step: 1, kind: 'example', title: 'UI, UX and product design in one problem', instruction: 'Read the same made-up case once more. The Reserve button is UI. Finding, understanding and booking the class is UX. Deciding whether the real problem deserves a button change, clearer price information or something else is product design.' },
  field('define-product-design', 'What does product design do?', 'Product design decides which problem to solve and shapes a service that people can use and the business can run. Explain that in one sentence of your own.', 1, 'learn'),
  field('define-ux', 'Describe the whole experience', 'UX means user experience: everything a person goes through to finish a task, including waiting and recovery. Explain it in one sentence.', 1, 'learn'),
  field('define-ui', 'Describe the interface', 'UI means user interface: the buttons, words and layout someone sees and uses. Explain it in one sentence.', 1, 'learn'),
  field('app', 'Choose somewhere to practise', 'Open an app you already use for finding events, classes or bookings. If none is available, use the supplied walkthrough below and label your work as supplied practice.', 2),
  entry(1, 3, 'Your first observation and how to check it', 'Look at one screen in your chosen app. Write one thing you can point to, label it, name the goal it affects and say what you could watch or ask to check it. This is your first complete result; a good place to stop.'),
  // Session 2 — your walkthrough as evidence.
  field('task', 'Choose one small task', 'Choose something with a clear result, such as finding a class on Saturday. You will stop before booking or paying. Write the task below.', 2),
  field('start', 'Name your starting screen', 'Open the screen where the task begins. Write its visible title or describe it so you can find it again.', 2),
  field('actions', 'Follow the task once', 'Try the task. Return here and list what you clicked, typed or looked for, one action per line. Stop before booking or paying. Leave out private details.', 2),
  ...Array.from({length: 6}, (_, i): LessonAction => ({ id: `sorter-${i + 1}`, section: 'practice-plan', step: 3, kind: 'sort', index: i, title: `Practise with supplied note ${i + 1} of 6`, instruction: 'Observed: something directly seen or done. Inferred: a proposed explanation. Unknown: a question you cannot answer yet. Choose the label that best describes this note.' })),
  ...[2, 3, 4, 5].map((n) => entry(n, 3, `Your evidence · entry ${n} of 5`, 'Return to your walkthrough. Write one claim, label it honestly, name the goal it affects and say how you could check it. Keep the claim in view while you label it.')),
  field('user-goal', 'What does the person want?', 'Use your walkthrough to describe the result the person needs. Avoid naming a page, button or proposed fix.', 3),
  field('business-goal', 'What might the business want?', 'Write one possible goal for the people running the service. This is a guess, so say “might” or “probably”.', 3),
  field('visual-improvement', 'Improve how information looks', 'Choose one visual change, such as clearer size, contrast or grouping. Name what you would change and why it helps the task.', 4),
  field('visual-check', 'How could you tell if it helped?', 'Name an action you could watch, such as someone finding the price without help. “It looks better” is not an observable check.', 4),
  field('behavior-improvement', 'Improve how the task works', 'Choose one change to the order, behavior or information in the task. Keep it different from your visual change, and say what it costs and who pays it: staff time, money, a busier screen, or something a person can no longer do.', 4),
  field('behavior-check', 'How would you check that change?', 'Name what someone could do that would support your idea, and what would show it did not help.', 4),
  // Session 3 — a new case, your reasons and your next step.
  { id: 'transfer-decision', field: 'transfer-decision', kind: 'field', section: 'check', step: 5, title: 'Try the idea on a new screen', instruction: 'A different made-up screen, with no notes. Write your answer first; the example answers appear afterwards.' },
  ...[0,1,2].map((i): LessonAction => ({ id: `reason-${i + 1}`, section: 'check', step: 5, kind: 'check', index: i, title: `Check your reasoning · ${i + 1} of 3`, instruction: 'Choose the explanation you believe. Then compare the feedback with your own work and improve the answer shown below if needed.' })),
  field('open-question', 'What is still unknown?', 'Write one question your walkthrough could not answer. Be honest about what you have not checked.', 5, 'practice'),
  field('improvement-made', 'Record your improvement', 'Name one answer you changed after checking and explain why. If no change was needed, name the answer you checked and explain how it already meets the criterion.', 5, 'practice'),
  field('next-action', 'Leave yourself a next action', 'Write one small action to take when you return. Your saved work will carry into Lesson 2.', 5, 'practice'),
  { id: 'review-work', section: 'practice', step: 5, kind: 'review', title: 'Your work is ready to check', instruction: 'Review your answers below. Finish practice when the required work is present. Asking a reviewer to check it against the three criteria is a separate choice.' },
];

export const lessonOneSessions: SessionPlan = [
  { title: 'Screens show; people do', purpose: 'Look at two made-up screens, sort three statements, then make one observation of your own with a way to check it.', firstAction: 'welcome' },
  { title: 'Your walkthrough as evidence', purpose: 'Follow one task, write four more evidence entries as complete rows, then name the goals and two improvements.', firstAction: 'task' },
  { title: 'A new case and your reasons', purpose: 'Try the idea on a new screen, check your reasoning, improve one answer and leave a next action.', firstAction: 'transfer-decision' },
];

// Positions saved before the redesign, mapped to the action that now holds them.
export const lessonOneAliases: Record<string, string> = Object.fromEntries(
  [1, 2, 3, 4, 5].flatMap((n) => ['label', 'goal', 'check'].map((part) => [`entry-${n}-${part}`, `entry-${n}-saw`])),
);

export const lessonOneTransfer: TransferTask = {
  scenario: 'Made-up case: a neighbourhood library app shows a book page. The title and author sit at the top. A Reserve button sits below a long summary. The pickup branch and the expected waiting time appear only after Reserve is pressed. The library says: “People abandon reservations, so make the Reserve button bigger.”',
  prompt: 'Write one thing on this screen that is observed, one inferred explanation and one unknown. Then say what you would check before changing the button, and why.',
  anchors: {
    weak: 'Treats “people abandon because the button is small” as observed, or goes straight to a bigger button without naming anything unknown.',
    adequate: 'Separates a visible fact (the waiting time appears only after Reserve) from a guess (people leave because of it), names a real unknown and gives one check, such as watching two people try to reserve.',
    strong: 'Adds a competing explanation such as the pickup branch, says what result would show the button is not the problem, and notes that one walkthrough cannot show what other people do.',
  },
};

// Review anchors for the three existing criteria. The criterion text is the
// lesson's rubric, unchanged.
export const lessonOneCriteria: Criterion[] = [
  {
    criterion: 'A specific task and what the person wanted',
    evidence: 'One walkthrough of a named task with its start and actions, and a user goal written as an outcome for a person.',
    levels: [
      'No task or goal is recorded.',
      'A task is named, but the goal names a screen, button or fix rather than what the person needs.',
      'A specific task is followed from a named start, and the user goal describes what the person needs to have happen.',
      'As above, and the goal is tied to the evidence entries, with the business goal labelled as a guess and kept separate.',
    ],
    remediation: 'Rewrite the user goal so it names what the person needs to have happen, without naming a screen or button.',
    recheck: 'The user goal reads as an outcome for a person, and the task has a clear start and end.',
  },
  {
    criterion: 'What you saw kept apart from what you guessed',
    evidence: 'Five evidence entries, each labelled observed, inferred or unknown, with a way to check anything that was not observed.',
    levels: [
      'No labelled entries.',
      'Entries exist, but claims about other people’s behaviour or feelings are labelled observed.',
      'Each label matches what the entry is; nothing about other people sits under observed, and at least one entry is inferred or unknown with a way to check it.',
      'As above, and mixed sentences are split into the visible part and the reading of it, with checks that could come out against the guess.',
    ],
    remediation: 'Move any claim about other people’s behaviour or feelings from observed to inferred, and write what you would watch to check it.',
    recheck: 'Every observed entry is something you could point to on the screen.',
  },
  {
    criterion: 'One trade-off that is not about how it looks',
    evidence: 'Two improvements, one visual and one about behaviour, each with a check someone could watch, and one stated cost.',
    levels: [
      'No improvements.',
      'Both improvements are visual, or the checks cannot fail (for example “people will like it”).',
      'One visual and one behaviour change, each with a check someone could watch, and the cost of one choice stated.',
      'As above, and the trade-off names who pays the cost and what result would show the change did not help.',
    ],
    remediation: 'Add a behaviour change with a check that could come out against it, and name what one change costs.',
    recheck: 'Both improvements have a watchable check, and one trade-off is not about appearance.',
  },
];
