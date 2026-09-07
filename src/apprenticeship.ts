import type { Apprenticeship, GuideStep, Lesson, WorksheetField, WorksheetSection } from './teaching';
import { milestones } from './journey';
import { videoSelections } from './reading';

// Authored activity material, keyed by permanent lesson identity. The reader,
// Markdown generator and MCP all receive the same enriched Lesson object.
type Activity = {
  activity: string; mission: string; columns: string; first: string;
  hints: [string, string]; adequate: string; handoff: string;
  visual?: boolean; coach?: string; alternative?: string;
  // Guided-practice refinement (docs/LEARNING-EXPERIENCE-PLAN.md), added one
  // lesson at a time. `guide` aligns by index with the lesson's steps.
  route?: { recommended: string; alternative: string };
  worksheet?: WorksheetSection[];
  guide?: GuideStep[];
  video?: { id: string; then: string; written: string };
};

// Five evidence rows for the first lesson's table. Each row is four ordinary
// fields rather than a Markdown table, so it can be filled on a phone.
const LABELS = ['observed', 'inferred', 'unknown'];
const evidenceRows = (count: number): WorksheetField[] => Array.from({ length: count }, (_, i) => i + 1).flatMap((n) => {
  return [
    { id: `entry-${n}-saw`, label: `Entry ${n} · What I saw or did`, kind: 'long' as const,
      hint: n === 1 ? 'Something you can point to on the screen, or an action you took. One entry per line of the table.' : undefined,
      example: n === 1 ? 'Example (made up, not your research): The home screen shows a search box labelled Find events and a list titled This weekend.' : undefined },
    { id: `entry-${n}-label`, label: `Entry ${n} · Observed, inferred or unknown?`, kind: 'choice' as const, options: LABELS,
      hint: n === 1 ? 'Observed: you saw it. Inferred: your guess about why. Unknown: you cannot tell from the screen.' : undefined },
    { id: `entry-${n}-goal`, label: `Entry ${n} · Which goal does this affect?`, kind: 'short' as const,
      example: n === 1 ? 'Example (made up): Finding an event nearby this weekend.' : undefined },
    { id: `entry-${n}-check`, label: `Entry ${n} · How could you check it?`, kind: 'short' as const,
      hint: n === 1 ? 'What would you watch for, or whom would you ask, to find out whether your reading is right?' : undefined,
      example: n === 1 ? 'Example (made up): Watch whether I use the search box or scroll the list first.' : undefined },
  ];
});

const detectiveWorksheet: WorksheetSection[] = [
  { id: 'words', title: 'Three sentences in your own words', intro: 'Short is fine. These are for you, not for a reviewer.', fields: [
    { id: 'define-product-design', label: 'Product design is…', kind: 'short', hint: 'Try: what it connects, and for whom.', example: 'Example (made up): Product design is deciding what a service should help someone do, and shaping it so it actually works for them.' },
    { id: 'define-ux', label: 'UX is…', kind: 'short', hint: 'The whole task, from first need to finished.' },
    { id: 'define-ui', label: 'UI is…', kind: 'short', hint: 'The controls and the presentation on the screen.' },
  ] },
  { id: 'walkthrough', title: 'Your walkthrough', intro: 'One app you already use, one task, stopping before any booking or payment.', fields: [
    { id: 'app', label: 'The app', kind: 'short', hint: 'Any app that lists events, shows, classes or bookings.' },
    { id: 'task', label: 'The one task you followed', kind: 'short', example: 'Example (made up): Find a pottery class near me next Saturday.' },
    { id: 'start', label: 'Where you started', kind: 'short', hint: 'The first screen you saw when you began the task.' },
    { id: 'actions', label: 'What you did, one action per line', kind: 'long', hint: 'Leave out anything private: names, addresses, payment details.', example: 'Example (made up):\nOpened the app to the home screen.\nTapped the search box and typed pottery.\nScrolled past three sponsored results.\nOpened the first class and looked for the date.' },
  ] },
  { id: 'evidence', title: 'Evidence table: five entries', intro: 'One entry for each thing you noticed. Label it honestly; unknown is a good label.', fields: [
    ...evidenceRows(5),
    { id: 'user-goal', label: 'The user goal, without naming a screen or button', kind: 'short', hint: 'What does the person need to have happened by the end?', example: 'Example (made up): Know which class fits Saturday and whether there is a place left.' },
    { id: 'business-goal', label: 'One possible business goal', kind: 'short', hint: 'A guess is fine; label it as one in your head.', example: 'Example (made up): More bookings completed on the first visit.' },
  ] },
  { id: 'compare', title: 'Two improvements and how to check them', intro: 'One about looks, one about how the task behaves. Each needs an observation that would show whether it helped.', fields: [
    { id: 'visual-improvement', label: 'A visual improvement', kind: 'short', example: 'Example (made up): Make the date and price the same size as the class title.' },
    { id: 'visual-check', label: 'What would show whether it helped?', kind: 'short', hint: 'Something you could watch or count, not an opinion.' },
    { id: 'behavior-improvement', label: 'A change to how the task behaves', kind: 'short', hint: 'Not colour or size: what happens, in what order, or what the app remembers.', example: 'Example (made up): Ask for the date before showing results, so sold-out classes are hidden.' },
    { id: 'behavior-check', label: 'What would show whether it helped?', kind: 'short' },
  ] },
  { id: 'reflect', title: 'Reflect', fields: [
    { id: 'open-question', label: 'One question you could not answer from the screen', kind: 'short', example: 'Example (made up): Do other people notice the sponsored results, or only me?' },
    { id: 'next-action', label: 'Your next action when you return', kind: 'short', hint: 'One line. It is what the Learn page will remind you of.' },
  ] },
];

const detectiveGuide: GuideStep[] = [
  { expect: 'Three sentences in your own words: product design, UX and UI. No quotation needed.',
    fields: ['define-product-design', 'define-ux', 'define-ui'], video: 'VID01',
    terms: [
      { term: 'Product design', meaning: 'Deciding which problem a service should solve and shaping the whole service so people can use it and the business can run it.' },
      { term: 'UX (user experience)', meaning: 'Everything a person goes through to finish a task, including waiting, instructions and recovering from mistakes.' },
      { term: 'UI (user interface)', meaning: 'The controls, words and layout on the screen itself.' },
      { term: 'Output versus outcome', meaning: 'A screen is an output. A person finishing the task is an outcome.' },
    ],
    start: 'Begin the first sentence with “Product design is deciding…” and finish it however feels true to you.',
    enough: 'Each sentence names something a person is trying to do, not just a screen.' },
  { expect: 'The app, the one task, where you started and a short list of what you did.',
    fields: ['app', 'task', 'start', 'actions'],
    terms: [
      { term: 'Task', meaning: 'One thing the person is trying to get done, with a clear end. “Find a class on Saturday” is a task; “use the app” is not.' },
      { term: 'Walkthrough', meaning: 'Doing the task yourself, slowly, and writing down each action as you go.' },
    ],
    start: 'Pick the app you used most recently that lists events or bookings. Do the task once without writing, then once more while writing.',
    enough: 'Someone else could repeat your actions from the list without asking you anything.' },
  { expect: 'Five entries, each labelled observed, inferred or unknown, plus one user goal and one possible business goal.',
    fields: [
      'entry-1-saw', 'entry-1-label', 'entry-1-goal', 'entry-1-check',
      'entry-2-saw', 'entry-2-label', 'entry-2-goal', 'entry-2-check',
      'entry-3-saw', 'entry-3-label', 'entry-3-goal', 'entry-3-check',
      'entry-4-saw', 'entry-4-label', 'entry-4-goal', 'entry-4-check',
      'entry-5-saw', 'entry-5-label', 'entry-5-goal', 'entry-5-check',
      'user-goal', 'business-goal',
    ],
    example: 'Example (made up, not your research): “Sponsored results appear above the class I searched for” is observed. “People probably skip them” is inferred. “Whether anyone books a sponsored class” is unknown.',
    terms: [
      { term: 'Observed', meaning: 'You saw it or did it. You could point to it on the screen.' },
      { term: 'Inferred', meaning: 'Your reading of why something is there or how others behave. It may be right; it is not yet evidence.' },
      { term: 'Unknown', meaning: 'You cannot tell from the screen alone. Naming it is the point.' },
    ],
    start: 'Take the first action from your list and write what was on the screen at that moment. Label it. Then the next action.',
    enough: 'At least one entry is inferred or unknown. If all five are observed, you have not yet written down a guess, and everyone has guesses.' },
  { expect: 'Two improvements, one visual and one about behaviour, each with an observation that would show whether it helped.',
    fields: ['visual-improvement', 'visual-check', 'behavior-improvement', 'behavior-check'],
    terms: [
      { term: 'Hypothesis', meaning: 'A change you believe would help, stated so that something you could see would prove it wrong.' },
      { term: 'Behaviour improvement', meaning: 'A change in what the app does, asks or remembers, rather than how it looks.' },
    ],
    start: 'Look at your inferred and unknown entries. Each one is a place an improvement could be tested.',
    enough: 'Each check names something you could watch or count, not “people would like it more”.' },
  { expect: 'One question you could not answer from the screen, and your next action. The worksheet is saved as you type.',
    fields: ['open-question', 'next-action'],
    start: 'Reread your unknown entries; one of them is your question.',
    enough: 'Your next action is a single line you could act on in five minutes when you return.' },
];

export const activities: Record<string, Activity> = {
  'week1-day1-v1': {
    activity: 'Design detective',
    mission: 'Investigate finding an event in an app you already use. Stop before booking or payment. Follow one task, not the whole app.',
    columns: 'Step | What I saw or did | Observed / inferred / unknown | Goal affected | How to check',
    first: '1 | [name the starting page and action] | [choose a label] | [goal] | [missing evidence]',
    hints: ['An observation describes something you can point to on screen. It does not explain why other people behave that way.', 'If you wrote “people are confused,” replace it with the exact label or behavior you noticed, then put confusion under inferred.'],
    adequate: 'Five traceable entries distinguish your own walkthrough from claims about other users; both proposed improvements name a way to check them.',
    handoff: 'Bring this table to problem framing. If you investigated another domain, keep it as practice and begin the workshop brief separately; do not transfer its findings.',
    coach: 'Ask me to defend one evidence label at a time. Spot an unsupported assumption without rewriting my table.',
    alternative: 'Cover the label column. Re-label each entry and explain which entries another observer could verify.',
    route: {
      recommended: 'Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.',
      alternative: 'Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.',
    },
    worksheet: detectiveWorksheet,
    guide: detectiveGuide,
    video: {
      id: 'VID01',
      then: 'Straight after watching, fill “Product design is…” below. If it helps, use his question: was the app built to solve the right problem?',
      written: 'No video needed: the Double Diamond page (R01) says the same in four short paragraphs, Discover, Define, Develop, Deliver. Read those, then write your three sentences.',
    },
  },
  'week1-day2-v1': {
    activity: 'Make three, defend one',
    mission: 'Use the diagnostic workshop report: attendees may not know what to bring. Explore three responses without treating that report as proven.',
    columns: 'Person and situation | Unmet goal and consequence | Assumption | Option | Constraint | Evidence needed',
    first: '[attendee situation] | [goal, without naming a feature] | [unverified claim] | [your option] | [restriction] | [test]',
    hints: ['Write the need without the words app, button or reminder.', 'Compare one information change, one process change and one interface change. You still choose the actual responses.'],
    adequate: 'Three different approaches address the same need; the two priority uncertainties have consequences and disconfirming evidence.',
    handoff: 'Keep the two priority uncertainties open for the interview lesson.',
    coach: 'Role-play a workshop organizer in an explicitly fictional rehearsal. Ask why my preferred option is worth its cost; do not invent customer findings.',
    alternative: 'Write the organizer’s objection “We cannot add ongoing staff work.” Reconsider your three options and defend a choice.'
  },
  'week1-day3-v1': {
    activity: 'Interview rehearsal and field mission',
    mission: 'Prepare questions about a recent real event experience, then invite a consenting adult you can reach. A rehearsal tests your questions, not your hypothesis.',
    columns: 'Question | What uncertainty it addresses | Neutral follow-up | Session ID | Observation | Interpretation',
    first: '[ask about a specific past occasion] | [uncertainty] | [follow-up] | [anonymous ID or REHEARSAL] | [leave blank until session] | [separate inference]',
    hints: ['Ask what happened last time instead of whether someone likes your proposed feature.', 'If recruiting is delayed, rehearse reading the questions aloud and flag leading wording. Leave participant findings blank.'],
    adequate: 'Questions invite past experiences; consent and withdrawal are explained; notes distinguish real participation from rehearsal.',
    handoff: 'Use anonymized observations in your flow; keep recruitment gaps visible.',
    coach: 'Review my interview questions for leading wording. Ask me to repair one question at a time. Do not answer as a real participant or supply research findings.',
    alternative: 'Underline words that suggest an answer, remove them, and rehearse the question aloud without explaining your proposed solution.'
  },
  'week1-day4-v1': {
    activity: 'Paper flow laboratory', visual: true,
    mission: 'Lay out the workshop reservation journey on paper. Trace a normal route, then inject “no places left” and draw how the person recovers.',
    columns: 'Node ID | Person’s action | System response | Next node | Failure and recovery | Evidence / assumption',
    first: 'A | [starting action] | [what appears] | [node ID] | [alternative route] | [source or assumption]',
    hints: ['Use one box per state and label arrows with the action that changes state.', 'A failure box needs a next action: revise, retry, leave safely or choose another option.'],
    adequate: 'A reader can trace the path and recover from failure without guessing what an arrow means.',
    handoff: 'Bring the numbered flow to the three-screen interface exercise.'
  },
  'week1-day5-v1': {
    activity: 'Screen construction workshop', visual: true,
    mission: 'Turn your numbered flow into three paper screens. Use real labels and content so another person can follow the task without your narration.',
    columns: 'Screen / flow node | Main action | Information needed | State / error | Why this order',
    first: '[screen name and node] | [verb + object] | [actual content] | [feedback] | [goal supported]',
    hints: ['Draw screen boundaries first, then place the information needed before the main action.', 'Cover your annotations and try following only the visible labels. Add missing feedback where you must explain aloud.'],
    adequate: 'Three screens trace to the flow, with legible labels, feedback and a reason for information priority.',
    handoff: 'Save the original screens before critique so revisions remain comparable.'
  },
  'week1-day6-v1': {
    activity: 'Repair clinic', visual: true,
    mission: 'Choose one weak point in your screens. Preserve the original, make one focused repair and explain what still needs testing.',
    columns: 'Location | Heuristic concern | Evidence | Before | Repair | Expected difference | Next check',
    first: '[screen and control] | [principle] | [observation, not a verdict] | [reference] | [your change] | [hypothesis] | [check]',
    hints: ['A heuristic identifies a risk; it cannot prove that people failed.', 'Keep unrelated visual changes out of the comparison so the repair is explainable.'],
    adequate: 'The before/after pair addresses a named concern with a bounded change and a testable expectation.',
    handoff: 'Use the comparison in your decision presentation.',
    coach: 'Question whether my repair addresses the stated concern. Ask for one counterexample and leave the redesign to me.',
    alternative: 'Try to describe a situation where your repair would make the task harder. Record how you would check that risk.'
  },
  'week1-day7-v1': {
    activity: 'Design review rehearsal',
    mission: 'Present one decision using your own artifacts. Explain it aloud, notice where you rely on unsupported claims, then revise the note.',
    columns: 'Context | Evidence reference | Alternatives | Decision | Trade-off | Next check',
    first: '[bounded task] | [artifact + location] | [options considered] | [choice] | [cost] | [missing evidence]',
    hints: ['Show the artifact when explaining a decision rather than reading a list of design terms.', 'Replace “users will love this” with the observed problem, intended change and how it could be checked.'],
    adequate: 'A one-page account connects a decision to evidence and acknowledges two gaps without claiming measured impact.',
    handoff: 'Bring the evidence gaps into Module 2 research planning.',
    coach: 'Act as a review audience. Ask one question about the weakest evidence link in my decision note. Do not score or rewrite my presentation.',
    alternative: 'Record or speak the presentation once. Note where you cannot point to supporting work, then repair that sentence.'
  },
  'week2-day1-v1': {
    activity: 'Research planning desk',
    mission: 'Choose a real uncertainty from Module 1 and plan the smallest ethical study that could change your decision.',
    columns: 'Decision | Uncertainty | Method and why | Participant access | Consent | Task / question | Limitation',
    first: '[decision at risk] | [unknown] | [method] | [reachable adults, no names here] | [consent plan] | [neutral task] | [boundary]',
    hints: ['Choose the question before the method; an interview about past behavior and a prototype task answer different questions.', 'If access is missing, record who is needed and prepare materials. A self-pilot only checks the materials.'],
    adequate: 'The method fits the uncertainty and includes consent, neutral tasks, recruitment status and limits.',
    handoff: 'Bring actual anonymized notes to synthesis; otherwise use clearly labelled practice notes without asserting findings.'
  },
  'week2-day2-v1': {
    activity: 'Evidence sorting room',
    mission: 'Cut or copy individual observations into separate notes, group them, then trace every proposed finding back to its source.',
    columns: 'Note ID | Session ID / synthetic label | Observation | Group | Interpretation | Design implication | Counterevidence',
    first: 'N01 | [source] | [one observation] | [working label] | [your interpretation] | [possible response] | [contradiction or missing evidence]',
    hints: ['Keep one observation per note. Give notes IDs before moving them into groups.', 'A group title is a hypothesis about a pattern. Keep contradictory notes visible instead of discarding them.'],
    adequate: 'A reviewer can follow an implication back through an interpretation to a specific source note.',
    handoff: 'Carry the evidence chains and their limitations into opportunity selection.',
    coach: 'Inspect my anonymized evidence chain. Ask which source supports one interpretation and identify a possible alternative explanation; do not invent notes.',
    alternative: 'Pick your strongest claim and trace it backward to a note. Write one other explanation for that same note.'
  },
  'week2-day3-v1': {
    activity: 'Opportunity decision table',
    mission: 'Compare three changes against your evidence, select a small opportunity and write the observation that could disprove its value.',
    columns: 'Option | Evidence IDs | Benefit hypothesis | Effort / risk | Test | Signal to reconsider',
    first: '[option] | [note IDs] | [expected change] | [constraint] | [neutral task] | [observable result]',
    hints: ['A large feature list makes it harder to learn which change mattered.', 'Write your reconsideration signal before testing, so an inconvenient result cannot quietly disappear.'],
    adequate: 'The selected opportunity is smaller than the whole product and has an evidence link and a disconfirming signal.',
    handoff: 'Bring the chosen hypothesis and test task into prototyping.'
  },
  'week2-day4-v1': {
    activity: 'Paper prototype theatre', visual: true,
    mission: 'Build only the states needed to test your chosen hypothesis. Act as the system by swapping paper screens after the person indicates an action.',
    columns: 'State ID | Visible content | Trigger | Next state | What this prototype can / cannot test',
    first: 'S01 | [actual content] | [person’s action] | [state ID] | [scope boundary]',
    hints: ['Write the neutral task on a separate card; do not include the button label they should press.', 'Prepare failure and recovery cards before the pilot. A paper prototype cannot establish keyboard or screen-reader behavior.'],
    adequate: 'The pilot can proceed without designing missing screens mid-session; scope and evidence limits are explicit.',
    handoff: 'Save a numbered screen set, task script and pilot corrections for evaluation.'
  },
  'week2-day5-v1': {
    activity: 'Observe, change, compare', visual: true,
    mission: 'Run the consented task if a participant is available. Preserve the first design, repair one observed issue and explain the remaining uncertainty.',
    columns: 'Session / source | Task | Observed action | Interpretation | Severity reason | Revision reference | Recheck / limitation',
    first: '[anonymous ID or SELF-PILOT] | [task] | [actual action] | [possible reason] | [consequence] | [before and after] | [next test]',
    hints: ['Let the person attempt the task before helping. Record help given because it changes what you can conclude.', 'With no participant, report a self-pilot and recruitment gap. Do not turn your own expectation into a usability finding.'],
    adequate: 'The report separates observations from explanations, shows a traceable revision and avoids improvement percentages without measurements.',
    handoff: 'Keep this practice evidence for Module 4 reasoning and future research planning; it is not yet a complete portfolio case study.'
  },
  'm03-l01-v1': {
    activity: 'Typography comparison bench', visual: true,
    mission: 'Rebuild one workshop screen with two candidate type scales. Compare hierarchy at narrow width and with enlarged text before choosing.',
    columns: 'Text role | Size | Weight | Line height | Narrow-width result | Enlarged-text result | Decision',
    first: '[heading / body / label] | [value and unit] | [value] | [value] | [observation] | [observation] | [reason]',
    hints: ['Inventory roles before choosing sizes; two labels serving the same role should not drift accidentally.', 'Use the longest heading in both comparisons. Record whether you tested actual reflow or only a paper approximation.'],
    adequate: 'The scale gives explicit values and shows what happened in both hard cases, with the testing method labelled.',
    handoff: 'Bring the chosen scale and original screen into the readability experiment.'
  },
  'm03-l02-v1': {
    activity: 'Worst-content stress test', visual: true,
    mission: 'Test a long title, paragraph and action label in your screen. Compare two text-column widths without shortening the content to hide problems.',
    columns: 'Content sample | Column width | Line height | Wrapping / clipping | Change | Reason',
    first: '[paste your longest text] | [value] | [value] | [what happened] | [adjustment] | [why]',
    hints: ['Use the same content in both versions so you are comparing layout rather than writing.', 'Look for a button label that wraps poorly and a paragraph whose lines are hard to track; adjust one variable at a time.'],
    adequate: 'Before/after examples show readable content at both widths and document the effect of measure and leading.',
    handoff: 'Keep the readable layout as the base for color decisions.'
  },
  'm03-l03-v1': {
    activity: 'Color meaning repair', visual: true,
    mission: 'Imagine a status list whose only distinction is a red or green dot. Redesign its meaning with text and shape as well as color, then apply that lesson to your screen.',
    columns: 'Meaning | Color value | Text / shape cue | Grayscale result | Cultural assumption | Repair',
    first: '[status meaning] | [hex] | [visible cue] | [still understandable?] | [assumption] | [change]',
    hints: ['Cover the colored mark and check whether the status remains understandable.', 'Color associations depend on context. Label your assumption rather than calling a color universally positive.'],
    adequate: 'Status meaning survives without hue, with semantic roles and exact candidate color values recorded.',
    handoff: 'Bring the foreground/background pairs to measured contrast checking.'
  },
  'm03-l04-v1': {
    activity: 'Contrast evidence lab', visual: true,
    mission: 'Measure the actual foreground/background pairs in your design, repair failing pairs and measure them again. A visual impression is not a ratio.',
    columns: 'Use | Foreground hex | Background hex | Text size / weight | Ratio | Applicable criterion | Repair ratio | Tool / date',
    first: '[body text] | [#......] | [#......] | [actual values] | [measured] | [assigned criterion] | [remeasured] | [method]',
    hints: ['Read the assigned W3C criterion before selecting a threshold; text and non-text uses differ.', 'For paper work, specify candidate hex pairs and measure them in the supplied local calculator. Do not measure photographed swatches as exact design colors.'],
    adequate: 'Every claimed pass names values, method and applicable criterion; repairs have new measurements.',
    handoff: 'Save approved pairs for the token sheet. A contrast check alone is not a full accessibility audit.'
  },
  'm03-l05-v1': {
    activity: 'Cut-and-sort layout experiment', visual: true,
    mission: 'Cut workshop information into separate paper pieces and regroup it using space first. Compare two groupings without rewriting any words.',
    columns: 'Information group | Intended relationship | Space / region / border | Possible misreading | Counterexample',
    first: '[group] | [relationship] | [chosen cue] | [risk] | [when cue misleads]',
    hints: ['Move pieces closer before drawing boxes around them.', 'Try grouping an unrelated item by proximity. This exposes why a visual principle is not proof of the correct information structure.'],
    adequate: 'The comparison explains both the intended grouping and a case where its cue could mislead.',
    handoff: 'Use your preferred grouping to define repeatable spacing.'
  },
  'm03-l06-v1': {
    activity: 'Spacing system cleanup', visual: true,
    mission: 'Inventory gaps in one screen, choose a small spacing scale and rebuild the layout using named gaps instead of isolated adjustments.',
    columns: 'Gap location | Old value | Scale token | New value | Relationship communicated | Exception reason',
    first: '[between two elements] | [measurement] | [name] | [value] | [relationship] | [if needed]',
    hints: ['Measure gaps between content edges consistently; do not switch between baselines and bounding boxes.', 'An exception is acceptable when you can explain the relationship it serves.'],
    adequate: 'A compact scale accounts for the rebuilt screen, with intentional exceptions documented.',
    handoff: 'Bring spacing tokens to the responsive grid exercise.'
  },
  'm03-l07-v1': {
    activity: 'Responsive constraint challenge', visual: true,
    mission: 'Arrange the same content at narrow, middle and wide widths. Decide where the structure must change because content no longer fits.',
    columns: 'Width | Columns | Outer margin | Gap | Content failure | Structural change | Reading order',
    first: '[width and unit] | [count] | [value] | [value] | [what stops working] | [your response] | [sequence]',
    hints: ['Use the spacing scale, but let content failure explain the change point.', 'Paper frames model layout intent; mark real browser behavior as untested unless you actually resize a working page.'],
    adequate: 'Three layouts preserve task priority and explain content-driven changes rather than merely shrinking everything.',
    handoff: 'Add grid decisions and their limits to the token documentation.'
  },
  'm03-l08-v1': {
    activity: 'Handoff documentation desk',
    mission: 'Combine your type, color and spacing decisions into a token sheet that another person could use without asking which value you meant.',
    columns: 'Token name | Value and unit | Semantic role | Use | Avoid | Evidence reference',
    first: '[role-based name] | [exact value] | [meaning] | [where] | [misuse] | [earlier test]',
    hints: ['Name a purpose such as text-muted instead of a particular location such as left-gray.', 'A value without a unit or usage rule leaves implementation decisions unresolved.'],
    adequate: 'Tokens have unambiguous values, roles and examples, including links to contrast and layout evidence.',
    handoff: 'Use this sheet to specify the component states in the next lesson.',
    coach: 'Act as an engineer reading only my token table. Ask about one ambiguous value or usage rule at a time; do not invent implementation requirements.',
    alternative: 'Hide your screen and try drawing one component from the token sheet alone. Record every missing instruction.'
  },
  'm03-l09-v1': {
    activity: 'Component state storyboard', visual: true,
    mission: 'Specify one component across default, hover, focus, disabled and loading states, using the token sheet rather than introducing unexplained values.',
    columns: 'State | Trigger | Visible label / cue | Token references | Available action | Accessibility intent',
    first: '[state] | [event] | [actual text or cue] | [names] | [action] | [intent, not tested behavior]',
    hints: ['Draw the states in a row so changes can be compared directly.', 'Hover cannot carry information needed on touch. A focus drawing documents intent; it does not prove working keyboard access.'],
    adequate: 'Each state has a trigger, visible response and named tokens, with specification distinguished from runtime testing.',
    handoff: 'Bring the state set and token sheet into the module rebuild review.'
  },
  'm03-l10-v1': {
    activity: 'Independent craft review', visual: true,
    mission: 'Rebuild your original screen with the system you developed, then defend the changes using your saved comparisons and measurements.',
    columns: 'Before reference | After reference | Intended improvement | Evidence | Trade-off | Unverified claim | Next test',
    first: '[original] | [revision] | [specific change] | [test reference] | [cost] | [limit] | [check]',
    hints: ['Choose which evidence best supports each decision; do not repeat every exercise in the presentation.', 'A polished comparison is a craft artifact. A full case study also needs a real problem, research, testing and honest outcomes.'],
    adequate: 'The review traces changes to the system and evidence while identifying remaining usability questions.',
    handoff: 'File selected comparisons in your evidence bank; reuse the method, not unsupported outcomes, in Project 1.'
  },
  'm04-l01-v1': {
    activity: 'Expectation mismatch investigation',
    mission: 'Compare what someone may expect in your workshop flow with what the interface actually does. Separate observed expectations from your hypotheses.',
    columns: 'Situation | Expected behavior | Evidence / hypothesis | Actual design behavior | Mismatch | Revision / test',
    first: '[point in flow] | [expectation] | [source] | [specified response] | [difference] | [next action]',
    hints: ['A familiar icon does not establish what this person believes it does.', 'Write the system rule in plain language, then check whether visible feedback communicates that rule.'],
    adequate: 'Each proposed mismatch has a source label and a design or research response.',
    handoff: 'Bring the mismatch points to the memory-demand audit.',
    coach: 'Challenge one hypothesized expectation in my table. Ask what evidence could distinguish it from another mental model.',
    alternative: 'Write a second plausible expectation for the same situation and identify how a real task observation could distinguish them.'
  },
  'm04-l02-v1': {
    activity: 'Interruption challenge', visual: true,
    mission: 'Stop halfway through the flow, hide the preceding screen and resume. Identify information you must remember, then redesign two demands as visible choices or context.',
    columns: 'Step | Information needed | Visible / remembered | Interruption consequence | Proposed cue | Trade-off',
    first: '[step] | [detail] | [mode] | [risk] | [cue] | [cost]',
    hints: ['Run this as a self-walkthrough and label it accordingly, not as evidence about all users.', 'Showing everything can create clutter. Decide which detail is needed at this step.'],
    adequate: 'Two changes reduce specific memory demands while explaining the extra information they introduce.',
    handoff: 'Keep the revised screens for the control and feedback audit.'
  },
  'm04-l03-v1': {
    activity: 'Control and feedback audit', visual: true,
    mission: 'Inventory controls and trace action to response. Find one that looks usable but gives unclear feedback, then specify a repair for touch and keyboard intent.',
    columns: 'Control | Possible action | Signifier | Feedback | Touch behavior | Repair | Tested / specified',
    first: '[control] | [action] | [cue] | [response] | [no hover assumption] | [change] | [label]',
    hints: ['Distinguish the action possible from the visible cue suggesting it.', 'Ask what the person sees while waiting and after failure, not just after success.'],
    adequate: 'The weakest control has an explicit action, cue and response, including non-hover use.',
    handoff: 'Bring ambiguous or failed actions into error classification.'
  },
  'm04-l04-v1': {
    activity: 'Error recovery workshop', visual: true,
    mission: 'Classify failures as slips or mistakes, rewrite blameful messages and design prevention plus recovery for one of each.',
    columns: 'Failure / source | Intended action | Slip / mistake and why | Prevention | Recovery message | Next action',
    first: '[observed failure or hypothetical scenario] | [intent] | [reasoning] | [design] | [your text] | [action]',
    hints: ['Do not infer intent from a click alone. Mark uncertain classifications.', 'A useful message explains the issue and a recoverable next step without blaming the person.'],
    adequate: 'Prevention and recovery respond to different failure causes and preserve useful user input where possible.',
    handoff: 'Use a recovery decision as a test case for the UX-law counterexample exercise.'
  },
  'm04-l05-v1': {
    activity: 'Break the rule debate',
    mission: 'Apply three assigned UX laws to one decision, then deliberately find a situation where each recommendation would be misleading.',
    columns: 'Law | Prediction for my design | Boundary / counterexample | Testable claim | Evidence needed',
    first: '[assigned law] | [prediction] | [condition] | [specific claim] | [observation]',
    hints: ['A principle suggests what to investigate; it does not supply a result.', 'Reducing options may hide a necessary choice. Ask what your simplification removes.'],
    adequate: 'Each law has a meaningful boundary and a claim that can be checked in this context.',
    handoff: 'Keep the contextual reasoning when converting feature requests to needs.',
    coach: 'Debate my application of a UX law. Ask for its boundary conditions and a counterexample. Do not declare a universal winning design.',
    alternative: 'Argue the opposite recommendation in three sentences, then write the observation that would help choose.'
  },
  'm04-l06-v1': {
    activity: 'Request translation studio',
    mission: 'Translate feature requests into needs that allow several solutions. Use your existing requests and label supplied or invented practice requests as hypothetical.',
    columns: 'Request / source | Person | Situation | Needed outcome | Evidence status | Alternative responses',
    first: '[request] | [person] | [context] | [need without feature] | [real / hypothesis] | [options]',
    hints: ['A need statement describes what someone must accomplish, not the control they asked for.', 'Keep the original request beside the translation so you can explain what changed.'],
    adequate: 'Needs retain the person’s goal while allowing different responses and exposing evidence gaps.',
    handoff: 'Bring the needs and alternatives into value-under-constraint decisions.'
  },
  'm04-l07-v1': {
    activity: 'Stakeholder constraint rehearsal',
    mission: 'Compare who gains and who pays for your proposal. Introduce the fictional constraint “no additional staff capacity” and revise your value proposition.',
    columns: 'Current workaround | User gain | Organization gain | Cost bearer | Constraint | Trade-off | Evidence status',
    first: '[baseline] | [benefit hypothesis] | [benefit hypothesis] | [who does extra work] | [constraint] | [choice] | [source]',
    hints: ['Include learning, maintenance and support effort alongside money.', 'A fictional constraint trains reasoning. Do not present it as a real organizer requirement.'],
    adequate: 'The proposition compares with the current workaround and makes costs and trade-offs visible.',
    handoff: 'Bring the highest-cost uncertainty to the smallest-test brief.',
    coach: 'Role-play a fictional organizer with no extra staff capacity. Ask one concrete cost question at a time; stay within this constraint and invent no evidence.',
    alternative: 'Write a short objection from the person who bears the extra work, then revise the proposal or explain why its value justifies the cost.'
  },
  'm04-l08-v1': {
    activity: 'Independent smallest-test brief',
    mission: 'Choose the riskiest assumption and design the smallest test that could change your decision. Write the stopping rule before any results exist.',
    columns: 'Assumption | Consequence if wrong | Current evidence | Smallest test | Stop / revise signal | Cannot conclude | Next step',
    first: '[claim] | [consequence] | [source or none] | [bounded test] | [prewritten rule] | [boundary] | [action]',
    hints: ['Test the assumption with the greatest combination of consequence and uncertainty, not the easiest screen to polish.', 'A small exploratory test cannot estimate a market-wide conversion rate. State the decision it can inform.'],
    adequate: 'The brief has a prewritten reconsideration rule, a feasible evidence plan and clear boundaries on conclusions.',
    handoff: 'Use this brief and your evidence bank when choosing Project 1 in m05. Recruitment gaps remain explicit; request creator review.'
  }
};

export function withApprenticeship(l: Lesson): Lesson {
  const a = activities[l.id];
  if (!a) return withPublishedWorkspace(l);
  const file = `HaruCourse/Practice/${l.id}/work.md`;
  const starter = `# ${l.title}\n\nSource labels: real observation / hypothesis / simulation / self-pilot\n\n${a.columns}\n${a.columns.split('|').map(() => '---').join(' | ')}\n${a.first}\n\n## Output checklist\n${l.outputs.map(o => `- [ ] ${o}`).join('\n')}\n\n## Decision and revision\nMy decision:\nEvidence reference:\nAlternative rejected and why:\nBefore / after files:\nWhat remains untested:\nAI suggestion accepted or rejected and why (if used):\nNext action when I return:\n`;
  const apprenticeship: Apprenticeship = {
    activity: a.activity, mission: a.mission, visual: a.visual,
    workspace: {
      tools: a.visual ? 'Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.' : 'A local text editor (for example Notepad) and the previous lesson artifacts. No account is needed.',
      setup: [
        `Starting material: ${l.prerequisite}`,
        `Create HaruCourse/Practice/${l.id} in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.`,
        'Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.',
        ...(a.visual ? ['Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.'] : []),
      ], file,
      save: [
        `Save your filled template as ${file}. Keep source observations separate from interpretations.`,
        ...(a.visual ? ['Keep labelled paper originals or save readable images as before-01.jpg and after-01.jpg in the same folder. Preserve any editable digital source.'] : []),
        'In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.',
        'For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.',
      ],
    }, starter, hints: a.hints, adequate: a.adequate, handoff: a.handoff,
    ...(a.route ? { route: a.route } : {}),
    ...(a.worksheet ? { worksheet: a.worksheet } : {}),
    ...(a.guide ? { guide: a.guide } : {}),
    ...(a.video ? { video: { ...videoSelections[a.video.id], ...a.video } } : {}),
    ...(a.coach ? { ai: {
      purpose: 'Optional: attempt the work first, then use a free text chat for a focused rehearsal.',
      setup: ['Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.', 'Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.', 'Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.'],
      prompt: `I am rebuilding my Product Design skills. Lesson: ${l.title}.\nTask: ${a.mission}\n${a.coach}\nAsk one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.\n\nMy own first attempt (replace this placeholder before sending):\n[Paste only the relevant table rows and describe the artifact in text. No private participant or account details.]`,
      followUp: 'Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.',
      alternative: a.alternative!,
    }} : {}),
  };
  return { ...l, apprenticeship };
}

// Later modules were authored on main while the original 30-lesson redesign
// was in progress. Keep their authored task, free route, rubric and repairs;
// derive workspace support from those authorities instead of inventing a
// second assignment or dropping the newly published lessons during merge.
function withPublishedWorkspace(l: Lesson): Lesson {
  const module = l.module;
  if (!module || !l.freeToolPath || !l.criteria?.length || !milestones[module]) throw new Error(`Missing activity or complete published contract: ${l.id}`);
  const folder = `HaruCourse/Practice/${l.id}`;
  const prompts = l.steps.map((s, i) => `## ${i + 1}. ${s.title}\n${s.instructions.map(t => '- ' + t).join('\n')}\n\nMy work / artifact reference:\nEvidence status and source:\nDecision and reason:\n`);
  return { ...l, apprenticeship: {
    activity: l.title,
    mission: l.objective || l.why,
    workspace: {
      tools: l.freeToolPath,
      setup: [
        `Starting material: ${l.prerequisite}`,
        `Create ${folder} in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.`,
        'Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.',
      ], file: `${folder}/work.md`,
      save: [
        `Save the filled note as ${folder}/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.`,
        'Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.',
        'Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.',
      ],
    },
    starter: `# ${l.title}\n\nInput artifact: ${l.prerequisite}\nSource labels: real observation / hypothesis / simulation / self-pilot\n\n## Output checklist\n${l.outputs.map(o => '- [ ] ' + o).join('\n')}\n\n${prompts.join('\n')}\n## Review and handoff\n${l.criteria.map(c => `- ${c.criterion}: [evidence reference]`).join('\n')}\nWhat remains untested:\nNext action when I return:\n`,
    hints: [l.criteria[0].remediation, l.criteria.length > 1 ? l.criteria[1].remediation : l.misconception || l.repairs[0]],
    adequate: l.criteria.map(c => `${c.criterion}: ${c.evidence}`).join(' '),
    handoff: `${l.portfolio} Module handoff: ${milestones[module].later}`,
  }};
}

export const diagnosticWorkspace: Apprenticeship = {
  activity: 'Independent starting-point diagnostic',
  mission: 'Attempt the existing brief using your current knowledge. Save unfinished work and uncertainties for review; do not prepare with a model answer or AI coaching.',
  workspace: {
    tools: 'Paper, pencil and a local text editor or a tool you already know.',
    setup: ['Create HaruCourse/Practice/baseline-v1 in Documents.', 'Save a blank note as work.md. Label sheets with the task name and keep them together.'],
    file: 'HaruCourse/Practice/baseline-v1/work.md',
    save: ['Save your notes and readable images or a PDF in the baseline folder.', 'Record the location in Your work with uncertainties and your next action. The reference does not upload the files.'],
  },
  starter: '# Baseline work inventory\n\nProblem note file:\nResearch plan file:\nFlow file:\nWireframes file:\nDecision notes file:\nUnfinished work:\nTools used:\nParticipant access:\nNext action:\n',
  hints: [],
  adequate: 'Submit the requested artifacts and explain what you could not yet do. This diagnostic informs guidance; it is not a pass/fail exam.',
  handoff: 'Keep the original diagnostic unchanged as a starting-point reference. Begin the published foundations lessons after your attempt.',
};
