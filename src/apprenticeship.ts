import type { ActiveCheck, Apprenticeship, GuideStep, Lesson, WorksheetField, WorksheetSection } from './teaching';
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
  checks?: ActiveCheck[];
  saveRoute?: Apprenticeship['saveRoute'];
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
    { id: 'improvement-made', label: 'What you changed after the Check questions', kind: 'long', hint: 'The Check section sends you back to one specific answer. Write which one you changed and why.', example: 'Example (made up): I had written “people find the date confusing” as observed. Nobody told me that, so I moved it to inferred and added “ask two friends to find the date” as the check.' },
  ] },
];

// Two questions the learner answers before any feedback, plus one that targets
// the misconception the old reveal-only Check could not catch: treating a
// confident guess as something observed. Each repair points at one field the
// learner already filled. Nothing is scored or stored.
const detectiveChecks: ActiveCheck[] = [
  {
    question: 'A friend says: “The fix is obvious — make the Reserve button bigger.” Is that a problem statement?',
    options: [
      { label: 'No. It names a repair before saying who is stuck and how anyone would know.', correct: true, feedback: 'It may even be the right repair, but it skips the part that tells you whether it is: who struggled, with what task, and what you saw.' },
      { label: 'Yes, because a small button is a real usability problem.', feedback: 'Size might be the cause, or the price might be unclear, or the date might be missing. A problem statement names the person and the difficulty, so more than one repair can compete.' },
      { label: 'Yes, as long as you tested the bigger button afterwards.', feedback: 'Testing a repair only tells you whether that repair worked. It cannot tell you what people were actually struggling with, because you never wrote it down.' },
    ],
    repair: 'Reread your user goal in step 3. If it names a screen, a button or a page, rewrite it as something the person needs to have happen, then note the change in step 5.',
    recheck: 'The user goal reads as an outcome for a person, and your two improvements are still ways of reaching it rather than the goal itself.',
  },
  {
    question: 'Your walkthrough screen looks well made and you finished the task easily. What does that prove about other people?',
    options: [
      { label: 'Nothing yet. You are one person who already knows the app.', correct: true, feedback: 'You brought knowledge a first-time visitor does not have. Craft and outcomes need different evidence, and yours is one walkthrough.' },
      { label: 'That the design works, because a real task was completed.', feedback: 'It shows the task can be completed by you, today, knowing what you know. That is worth recording, and it is not evidence about anyone else.' },
      { label: 'That the visual design is good enough to leave alone.', feedback: 'A screen can look well made and still hide the price or the date. Ease for you is not evidence about a person seeing it for the first time.' },
    ],
    repair: 'Look at your five entries in step 3. Any line that describes what other people do or feel belongs under inferred or unknown, not observed. Change one and say why in step 5.',
    recheck: 'At least one entry is labelled inferred or unknown, and its “how could you check it” column names something you could watch.',
  },
  {
    question: 'You wrote: “People skip the sponsored results.” You did not watch anyone else use the app. Which label is honest?',
    options: [
      { label: 'Inferred — it is your reading of why, and it may well be right.', correct: true, feedback: 'Inferred is not a lesser answer; it is the honest one, and it tells you exactly what to go and find out.' },
      { label: 'Observed, because you saw the sponsored results yourself.', feedback: 'You observed that sponsored results appear. “People skip them” is a claim about other people’s behaviour, which the screen cannot show you.' },
      { label: 'Unknown, because you have no data at all.', feedback: 'Unknown is for things you cannot tell from the screen and have no reading of at all. Here you do have a reading, so inferred keeps it visible as something to check.' },
    ],
    repair: 'Pick the entry you were least sure about, set its label honestly, and write in its check column what you would watch to find out. Record the change in step 5.',
    recheck: 'Every entry label matches the kind of thing it is, and no claim about other people sits under observed.',
  },
];

const detectiveGuide: GuideStep[] = [
  { expect: 'Three sentences in your own words: product design, UX and UI. No quotation needed.',
    fields: ['define-product-design', 'define-ux', 'define-ui'], video: 'VID01',
    demo: {
      scenario: 'Made-up example. A pottery studio says: “Bookings drop off on the last screen. Make the Reserve button bigger.” Here is how a product designer thinks about that sentence before touching the button.',
      beats: [
        { label: 'What I can point to', text: 'The studio has numbers showing people leave on the last screen. That part is real: it is counted, not guessed.' },
        { label: 'What the sentence assumes', text: '“Make the button bigger” assumes people could not find or press it. Nobody has said that. It is one explanation out of several.' },
        { label: 'What else would fit the same numbers', text: 'They might not know what to bring, or the price might appear only at the end, or they might want to check a date with someone first.' },
        { label: 'What I would write instead', text: 'A person booking a first class, on the last screen, needs to be sure what the evening costs and what to bring, otherwise she stops and asks a friend. That is a goal, not a control.' },
        { label: 'What I would do next', text: 'Watch two people reach that screen and say what they are looking for. Only then choose between a bigger button, an earlier price, or a materials line.' },
      ],
      wrongTurn: 'The turn I nearly took was accepting the button. It is the easiest thing to do, it sounds decisive, and if the real trouble is the price it changes nothing while looking like progress.',
      tradeoff: 'Writing the goal instead of the fix costs time and can feel evasive when someone wants an answer today. What it buys is that several repairs can now compete on evidence.',
      uncertainty: 'Still unknown: why people actually leave. The numbers show where, never why.',
    },
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
    reveal: { first: 4, group: 4, count: 20, addLabel: 'Add the next entry', note: 'One entry at a time. Finish this one, then ask for the next; five is the target, and you can stop and come back.' },
    demo: {
      scenario: 'Made-up example. One entry from someone else’s walkthrough of a class-booking app, written out with the thinking left in.',
      beats: [
        { label: 'What I saw or did', text: 'On the results list, the first two cards say “Sponsored” in small grey text above the class title. I scrolled past them to the class I had searched for.' },
        { label: 'What I nearly wrote', text: '“Sponsored results annoy people and waste their time.” It felt obviously true as I typed it.' },
        { label: 'Why I changed it', text: 'I can point to the cards on the screen. I cannot point to anybody being annoyed — I only know that I scrolled past. So the card is observed and the annoyance is my reading.' },
        { label: 'How I split it', text: 'Observed: two sponsored cards sit above the searched class. Inferred: people scroll past them. Unknown: whether anyone books one.' },
        { label: 'How I would check it', text: 'Watch two people search for a named class and see whether they stop on the sponsored cards or scroll straight past.' },
      ],
      wrongTurn: 'The wrong turn is writing the interesting sentence — the one about people being annoyed — under observed, because it is the sentence you want to act on.',
      tradeoff: 'Splitting one thought into three lines is slower and can feel pedantic. It pays off when someone asks “how do you know?”, because the answer is already written down.',
      uncertainty: 'Still unknown: whether the sponsored cards affect what anyone books. One walkthrough by one person cannot show that.',
    },
    supported: {
      material: 'Here is a line from someone else’s notes, before any labelling. They walked through the app themselves and did not speak to anyone: “The date picker opens on today, so people have to scroll forward to next Saturday and some of them give up.”',
      question: 'How should this one line be split before it goes in the table?',
      options: [
        { label: 'Observed: the picker opens on today. Inferred: people give up. That second part needs checking.', correct: true, feedback: 'The first half is on the screen and anyone could confirm it. The second half is a claim about other people that this walkthrough cannot support — so it goes under inferred with a way to check it.' },
        { label: 'All observed: they watched it happen while using the app.', feedback: 'They watched themselves. Nothing in a solo walkthrough shows what other people do, so “some of them give up” cannot be observed here.' },
        { label: 'All inferred: the whole line is an opinion until someone else confirms it.', feedback: 'Too cautious, and it loses something useful. That the picker opens on today is a fact about the screen; keeping it under observed is what makes the guess beside it checkable.' },
        { label: 'Unknown: nobody has data on drop-off, so it cannot be used.', feedback: 'Unknown is for things the screen cannot tell you and you have no reading of. Here half the line is visible fact and the other half is a reading, so “unknown” would throw away both.' },
      ],
      then: 'Do the same to your own first entry: put the part you could point to in “What I saw or did”, and let the label carry your reading of why.',
    },
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
  { expect: 'One question you could not answer from the screen, your next action, and the one change the Check questions sent you back to make.',
    fields: ['open-question', 'next-action', 'improvement-made'],
    start: 'Reread your unknown entries; one of them is your question. Answer the three Check questions before filling the last box, so you know what to change.',
    enough: 'Your next action is a single line you could act on in five minutes when you return, and the last box names one answer you actually changed.' },
];

// Guided material for the rest of Module 1, one entry per lesson, authored
// against each lesson's own steps and outputs. Field ids are record keys.
type Guided = Pick<Activity, 'route' | 'worksheet' | 'guide' | 'checks' | 'saveRoute'>;
const paperRoute = (what: string): Activity['route'] => ({
  recommended: `Draw ${what} on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.`,
  alternative: 'Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.',
});
const textRoute: Activity['route'] = {
  recommended: 'Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.',
  alternative: 'Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.',
};
const numbered = (prefix: string, label: (n: number) => string, count: number, kind: 'short' | 'long', extra: (n: number) => Partial<WorksheetField> = () => ({})): WorksheetField[] =>
  Array.from({ length: count }, (_, i) => ({ id: `${prefix}-${i + 1}`, label: label(i + 1), kind, ...extra(i + 1) }));

const framing: Guided = {
  route: textRoute,
  worksheet: [
    { id: 'review', title: 'Explanations you have not verified', intro: 'From your Lesson 1 table: the inferred or unknown entries that still read like facts.', fields: numbered('unverified', (n) => `Unverified explanation ${n}`, 2, 'short', (n) => (n === 1 ? { example: 'Example (made up): Attendees skip the materials list because it is below the fold.' } : {})) },
    { id: 'frames', title: 'Three problem frames', intro: 'Person, situation, unmet goal and consequence. No feature names: not checkbox, reminder, app or button.', fields: numbered('frame', (n) => `Frame ${n}`, 3, 'long', (n) => (n === 1 ? { hint: 'One sentence each for who, when, what they need and what goes wrong if they do not get it.', example: 'Example (made up): A first-time attendee, the evening before a pottery workshop, needs to know what to bring, otherwise she arrives without an apron and loses the first twenty minutes.' } : {})) },
    { id: 'assumptions', title: 'Six assumptions', intro: 'Each one: the claim, what happens if it is wrong, and your confidence (low, medium or high).', fields: [
      ...numbered('assumption', (n) => `Assumption ${n}`, 6, 'short', (n) => (n === 1 ? { example: 'Example (made up): Attendees read the confirmation email · if wrong, nobody sees the list · confidence low.' } : {})),
      { id: 'priority-1', label: 'First uncertainty to investigate', kind: 'short', hint: 'The one where being wrong costs most and you know least.' },
      { id: 'priority-1-evidence', label: 'What evidence would change your mind about it?', kind: 'short', example: 'Example (made up): Three attendees say they never open the confirmation email.' },
      { id: 'priority-2', label: 'Second uncertainty to investigate', kind: 'short' },
      { id: 'priority-2-evidence', label: 'What evidence would change your mind about it?', kind: 'short' },
    ] },
    { id: 'explore', title: 'Three different responses', intro: 'Try one information change, one process change and one interface change. Each gets a constraint and a weakness.', fields: [1, 2, 3].flatMap((n) => [
      { id: `option-${n}`, label: `Response ${n}`, kind: 'short' as const, ...(n === 1 ? { example: 'Example (made up): Print the materials list on the ticket.' } : {}) },
      { id: `option-${n}-constraint`, label: `Response ${n} · a constraint it must respect`, kind: 'short' as const, ...(n === 1 ? { hint: 'Money, staff time, the venue, what the organiser will accept.' } : {}) },
      { id: `option-${n}-weakness`, label: `Response ${n} · its weakness`, kind: 'short' as const },
    ]) },
    { id: 'decide', title: 'Decide', fields: [
      { id: 'decision', label: 'The next investigation you will do', kind: 'long', hint: 'Which uncertainty, with whom, and what you will look for.' },
      { id: 'decision-reason', label: 'Why this one first', kind: 'short' },
      { id: 'improvement-made', label: 'What you changed after the Check questions', kind: 'long', hint: 'The Check section sends you back to one answer. Name which one and why you changed it.' },
    ] },
  ],
  checks: [
    {
      question: 'Which of these is a problem frame rather than a disguised feature?',
      options: [
        { label: 'A first-time attendee, the evening before, cannot tell what to bring, so she arrives without materials and misses the start.', correct: true, feedback: 'It names a person, a moment, what she needs and what it costs her. A reminder, a printed list or a phone call could all answer it, which is exactly the point.' },
        { label: 'Attendees need a reminder email the day before the workshop.', feedback: 'This is one answer wearing the clothes of a problem. Written this way, only one response can ever win, and you never find out whether email is read at all.' },
        { label: 'The booking page needs a clearer materials section.', feedback: 'It names a page and a section, so it has already decided that the trouble is on that screen. The person may never reach that screen.' },
      ],
      repair: 'Reread your three frames in step 2. If any of them contains a feature word — reminder, email, checkbox, page, button — rewrite it as what the person needs to have happen, then record the change in step 5.',
      recheck: 'Each frame names a person and a moment, and someone else could propose a response you had not thought of.',
    },
    {
      question: 'Two assumptions are both unverified. Which do you investigate first?',
      options: [
        { label: 'The one where being wrong would do the most damage and you have the least evidence.', correct: true, feedback: 'Consequence and uncertainty together. An assumption you are confident about, or one that costs nothing if wrong, can wait however interesting it is.' },
        { label: 'The one that is quickest and cheapest to check.', feedback: 'Tempting, and sometimes it is the same assumption. On its own it leads you to answer easy questions while the expensive one stays untested.' },
        { label: 'The one your three responses all depend on.', feedback: 'Closer, because a shared dependency raises the consequence. Still incomplete: if you already have good evidence for it, checking again buys little.' },
      ],
      repair: 'Look at your two priority uncertainties in step 3. If either was chosen because it was easy, swap it for the one with the worse consequence, and say why in step 5.',
      recheck: 'Each priority names what would happen if you were wrong, and each has evidence that could disprove it.',
    },
    {
      question: 'You write beside an assumption: “Nothing could really disprove this.” What does that tell you?',
      options: [
        { label: 'It is not an investigation yet — it needs a specific thing you could see that would change your mind.', correct: true, feedback: 'An assumption nothing could contradict cannot be tested, only defended. Naming what would change your mind is what turns it into work you can do.' },
        { label: 'It is a strong assumption, so you can safely build on it.', feedback: 'Unfalsifiable is not the same as well supported. It usually means the claim is vague rather than certain.' },
        { label: 'It should be deleted from the list.', feedback: 'Deleting it hides it. Sharpen it instead until you can say what evidence would count against it.' },
      ],
      repair: 'Take the priority uncertainty with the weakest evidence line and replace it with one concrete observation that would change your mind. Record it in step 5.',
      recheck: 'Both evidence lines name something a person could say or do, not a feeling.',
    },
  ],
  saveRoute: {
    auto: 'Your frames, assumptions and responses save as you type: on this device first, then online. The line above the steps says “Saved online” once the server has them.',
    external: 'Nothing is uploaded. If you sketched the responses on paper, keep the sheet and write its file name or location in Your work so you can find it beside the frames.',
    creator: 'Your creator can read this worksheet, your notes and your work reference once you choose Ready for review in Your work. He cannot edit them.',
    next: 'Open Your work, add anything the worksheet did not ask for, then choose Ready for review. Lesson 3 turns your first priority uncertainty into interview questions, so keep it where you can see it.',
  },
  guide: [
    { expect: 'Two explanations from Lesson 1 that you wrote down but never checked.', fields: ['unverified-1', 'unverified-2'],
      terms: [{ term: 'Verified', meaning: 'You saw it happen, or someone told you it happened to them. Everything else is a guess, however sensible.' }],
      start: 'Open your Lesson 1 worksheet and look only at the rows labelled inferred or unknown.', enough: 'Each line is something you believe about other people, not something you observed yourself.' },
    { expect: 'Three frames, each naming a person, a situation, an unmet goal and a consequence, with no feature words.', fields: ['frame-1', 'frame-2', 'frame-3'],
      demo: {
        scenario: 'Made-up example. The workshop report says only: “Attendees turn up unprepared.” Here is the frame being written, including the version that had to be thrown away.',
        beats: [
          { label: 'What the report actually says', text: 'People arrive without materials. That is the symptom somebody noticed. It does not say who, when, or what they were doing beforehand.' },
          { label: 'My first attempt', text: '“Attendees need a reminder email with the materials list the day before.” I wrote it in about four seconds.' },
          { label: 'Why I threw it away', text: 'It decides that the answer is an email. If nobody opens the email, or if the list only exists in the organiser’s head, that frame cannot lead anywhere useful.' },
          { label: 'The frame I kept', text: 'A first-time attendee, the evening before, cannot tell what to bring, so she arrives without an apron and loses the first twenty minutes of a two-hour class.' },
          { label: 'What that opens up', text: 'Now an email, a line on the ticket, a text message, or the studio simply keeping spare aprons are all candidates, and they can be compared.' },
        ],
        wrongTurn: 'The wrong turn is the fast one: writing the response you already have in mind and calling it the problem. It feels productive and it quietly closes every other option.',
        tradeoff: 'The longer frame takes more thought and can sound like avoiding the question when someone wants a fix today. It buys you the ability to be wrong about the fix without being wrong about the work.',
        uncertainty: 'Still unknown: whether attendees ever see the confirmation email, and whether the studio can supply spares. Both are assumptions for the next step.',
      },
      terms: [{ term: 'Problem frame', meaning: 'A description of who is stuck, when, and what it costs them. It does not say what to build.' }, { term: 'Feature', meaning: 'A thing you could build: a reminder, a checkbox, a page. If a frame contains one, it has jumped to a solution.' }],
      start: 'Write “A [kind of person], [when], needs [goal], otherwise [what goes wrong].” three times with different people or moments.', enough: 'You could hand each frame to another designer and they could propose something you did not think of.' },
    { expect: 'Six assumptions with consequence and confidence, and the two you will investigate with what would change your mind.',
      fields: ['assumption-1', 'assumption-2', 'assumption-3', 'assumption-4', 'assumption-5', 'assumption-6', 'priority-1', 'priority-1-evidence', 'priority-2', 'priority-2-evidence'],
      reveal: { first: 1, group: 1, count: 6, addLabel: 'Add another assumption', note: 'One at a time. Six is the target; each is something your frames quietly depend on.' },
      supported: {
        material: 'A supplied pair from the same made-up workshop. Assumption A: “Attendees read the confirmation email.” Nobody has checked; if it is wrong, every message you send is unread. Assumption B: “Attendees would prefer a printed list to a text message.” Nobody has checked; if it is wrong, you send the same information in a slightly different form.',
        question: 'Which one do you investigate first, and why?',
        options: [
          { label: 'A, because being wrong about it breaks every other response you might choose.', correct: true, feedback: 'Both are unchecked, so uncertainty does not separate them. Consequence does: if the email is never read, a better-worded email cannot help, and neither can anything else delivered that way.' },
          { label: 'B, because preference questions are quick to ask people.', feedback: 'Speed is a real consideration, but here it buys the cheap answer. You would learn a format preference while still not knowing whether any message arrives.' },
          { label: 'Neither: ask about both in the same conversation to save time.', feedback: 'Reasonable in practice, and it still needs an order. Asked together, the preference question usually eats the time, because people find it easier to answer than recalling what they actually did.' },
          { label: 'A, because printed lists cost money and email is free.', feedback: 'The right assumption for the wrong reason. Cost belongs in the response comparison, not in deciding which uncertainty threatens the work most.' },
        ],
        then: 'Apply the same test to your own six: for each, ask what breaks if it is wrong, then pick the two where the damage is worst and the evidence thinnest.',
      },
      example: 'Example (made up): “The organiser sends the list a week before” has low confidence and a serious consequence, so it goes first; “attendees own an apron” is low-consequence and waits.',
      terms: [{ term: 'Assumption', meaning: 'Something your frames depend on that you have not checked.' }, { term: 'Disconfirming evidence', meaning: 'What you would have to see to conclude you were wrong. If nothing could, it is not an investigation.' }],
      start: 'Take each frame and ask “this is only a problem if…”; the ending is an assumption.', enough: 'The two priorities are the ones where being wrong costs most and you know least, and each has something concrete that could disprove it.' },
    { expect: 'Three different responses, each with a constraint and a weakness.', fields: ['option-1', 'option-1-constraint', 'option-1-weakness', 'option-2', 'option-2-constraint', 'option-2-weakness', 'option-3', 'option-3-constraint', 'option-3-weakness'],
      terms: [{ term: 'Information change', meaning: 'Change what people are told, or when.' }, { term: 'Process change', meaning: 'Change what the organiser or venue does, without any screen.' }, { term: 'Interface change', meaning: 'Change something on the screen.' }],
      start: 'Write the information change first; it is usually the cheapest and shows whether a screen is needed at all.', enough: 'No two responses are variations of the same idea, and every weakness is one you would say to the organiser.' },
    { expect: 'One chosen investigation, the reason it comes first, and the change the Check questions sent you back to make.',
      fields: ['decision', 'decision-reason', 'improvement-made'],
      start: 'Pick the priority uncertainty from step 3 and name a person you could actually ask. Answer the Check questions before the last box.',
      enough: 'The reason compares the cost of being wrong, not which response you like, and the last box names one answer you actually changed.' },
  ],
};

const interviewing: Guided = {
  route: textRoute,
  worksheet: [
    { id: 'prepare', title: 'Purpose and consent', fields: [
      { id: 'purpose', label: 'What this conversation is for, in one sentence', kind: 'short', example: 'Example (made up): To learn what people did the last time they prepared for a workshop, so I know whether the materials list is the real problem.' },
      { id: 'consent-intro', label: 'What you will say before starting', kind: 'long', hint: 'Who you are, what the notes are for, that they can stop or skip any question, and whether you will record. Ask before recording.', example: 'Example (made up): I am practising interviewing for a design course. I will take written notes, no recording unless you agree, and nothing will be shared with your name. You can stop at any time.' },
    ] },
    { id: 'write', title: 'Your questions', intro: 'About a recent real experience, never about a feature you have in mind.', fields: [
      { id: 'uncertainty', label: 'The uncertainty from Lesson 2 these questions serve', kind: 'short' },
      ...numbered('question', (n) => `Question ${n}`, 6, 'short', (n) => (n === 1 ? { hint: 'Start with “Tell me about the last time…” or “What happened when…”.', example: 'Example (made up): Tell me about the last workshop or class you went to. How did you get ready for it?' } : {})),
      { id: 'followup-1', label: 'Neutral follow-up 1', kind: 'short', example: 'Example (made up): What did you expect to happen then?' },
      { id: 'followup-2', label: 'Neutral follow-up 2', kind: 'short', hint: 'A follow-up that works after any answer: “Can you say more about that?”' },
    ] },
    { id: 'practice', title: 'The conversation', fields: [
      { id: 'session-status', label: 'What actually happened', kind: 'choice', options: ['Real conversation with a consenting adult', 'Rehearsal only: no participant evidence collected'], hint: 'Choose honestly. A rehearsal is useful and is not participant evidence.' },
      { id: 'observations', label: 'What the person said or did (observations only)', kind: 'long', hint: 'No names or identifying details. If you were not given permission to quote, paraphrase.' },
      { id: 'interpretations', label: 'What you think it means (interpretations)', kind: 'long' },
      { id: 'quotes', label: 'Exact words worth keeping, if consented', kind: 'long', hint: 'Leave empty if you did not ask permission to quote.' },
    ] },
    { id: 'distinguish', title: 'Follow-up questions', fields: [
      { id: 'followups-next', label: 'Questions the conversation raised for next time', kind: 'long' },
    ] },
    { id: 'improve', title: 'Improve one question', fields: [
      { id: 'weak-question', label: 'The weakest question, as written', kind: 'short' },
      { id: 'improved-question', label: 'The same question, rewritten', kind: 'short', example: 'Example (made up): Before: Would a reminder have helped? After: What happened the day before the class?' },
      { id: 'next-research-question', label: 'Your next research question', kind: 'short' },
      { id: 'improvement-made', label: 'What you changed after the Check questions', kind: 'long', hint: 'Name the question or note you changed, and why.' },
    ] },
  ],
  checks: [
    {
      question: 'Which question is most likely to tell you what actually happened?',
      options: [
        { label: 'Tell me about the last class you signed up for. What did you do the evening before?', correct: true, feedback: 'It asks about one real occasion the person can remember, and it does not tell them which part you care about, so the surprising detail has room to arrive.' },
        { label: 'Would a reminder the day before have helped you prepare?', feedback: 'It hands over the answer. Most people say yes to a helpful-sounding thing, and you learn what they predict about themselves rather than what they did.' },
        { label: 'Do you usually find booking pages confusing?', feedback: 'It asks for a general habit and a judgement at once. “Usually” answers are reconstructions, and “confusing” invites agreement with your own suspicion.' },
        { label: 'How important is it to you to know what to bring?', feedback: 'Almost nobody says it is unimportant. Importance questions produce flat, agreeable answers that cannot separate one situation from another.' },
      ],
      repair: 'Read your six questions in step 2 aloud. Rewrite any that name a feature, ask for a prediction, or contain the word you hope to hear, then record the change in step 5.',
      recheck: 'Every question can be answered by telling a story about one occasion, and none of them mentions your idea.',
    },
    {
      question: 'You rehearsed the questions alone because nobody was available. What may you write in your notes?',
      options: [
        { label: 'That you rehearsed, what felt awkward to ask, and that no participant evidence exists yet.', correct: true, feedback: 'A rehearsal tests your questions, which is real work worth recording. What it cannot produce is anything about other people, so the honest note says so plainly.' },
        { label: 'Your own answers to the questions, marked as a first data point.', feedback: 'You already know your own design and intentions, so your answers cannot stand in for a participant’s. Recording them as data quietly turns your assumptions into findings.' },
        { label: 'A likely answer based on what people in your position usually say.', feedback: 'That is an invented participant. Once it is written down it will be quoted later as though someone said it.' },
        { label: 'Nothing — an interview without a participant is a failure.', feedback: 'Too harsh, and it hides useful work. The guide, the consent wording and the awkward questions you found are the output; the recruitment gap is a dated fact, not a failure.' },
      ],
      repair: 'Check the session-status choice in step 3. If it says a real conversation happened, be sure someone actually consented; if not, choose rehearsal and empty the observations box, then say what you changed in step 5.',
      recheck: 'The status matches what happened, and nothing in the observations box is something you supplied yourself.',
    },
    {
      question: 'Halfway through, the person mentions something upsetting about a family member. What do you do?',
      options: [
        { label: 'Stop the topic, remind them they can skip anything or stop, and leave it out of your notes.', correct: true, feedback: 'Consent is a running permission, not a form signed once. The material is not yours to keep simply because it was said while you were listening.' },
        { label: 'Write it down carefully — it is honest context about their life.', feedback: 'It may well be true and relevant, and it was still shared in a moment they did not choose. Keeping it in notes you may show someone else breaks the terms they agreed to.' },
        { label: 'Keep going and decide afterwards whether to include it.', feedback: 'Deciding later means it is already written down. The moment to protect them is while it is happening, not while you edit.' },
      ],
      repair: 'Reread your consent wording in step 1. If it does not say plainly that they can skip a question or stop at any time, add that sentence and note it in step 5.',
      recheck: 'The consent introduction names what the notes are for, that they can stop, and whether anything is recorded.',
    },
  ],
  saveRoute: {
    auto: 'Your purpose, consent wording, questions and notes save as you type, on this device first and then online. Watch for “Saved online” above the steps.',
    external: 'Nothing is uploaded, and no participant’s name, contact details or recording belongs in this worksheet. Keep any consent record or audio in your own private folder and refer to it only by a file name.',
    creator: 'Your creator can read the worksheet, your notes and your work reference once you choose Ready for review. Write your notes so that a person reading them cannot identify the participant.',
    next: 'Open Your work and choose Ready for review. Lesson 4 takes the task you asked about and maps it, including the moments where it goes wrong, so keep your observations to hand.',
  },
  guide: [
    { expect: 'One-sentence purpose and the consent words you will actually say.', fields: ['purpose', 'consent-intro'],
      terms: [{ term: 'Consent', meaning: 'The person knows what you are doing with their words and agrees, before you start. It can be withdrawn at any point.' }, { term: 'Research question', meaning: 'What you are uncertain about. You do not ask it out loud; it decides what you ask.' }],
      start: 'Copy the example consent introduction and change every phrase until it sounds like you.', enough: 'Someone hearing the introduction would know they can stop, and whether they are being recorded.' },
    { expect: 'Six open questions about a recent experience and two neutral follow-ups.', fields: ['uncertainty', 'question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'question-6', 'followup-1', 'followup-2'],
      reveal: { first: 3, group: 2, count: 7, addLabel: 'Add two more questions', note: 'Write a couple, read them aloud, then ask for the next pair. Six is the target.' },
      demo: {
        scenario: 'Made-up example. The uncertainty is “attendees may never see the materials list”. Here is one question being written and repaired.',
        beats: [
          { label: 'The uncertainty', text: 'I do not know whether anything I send before a class is read. Everything else depends on it.' },
          { label: 'My first question', text: '“Did you read the confirmation email before the class?” It is short and it points straight at what I want to know.' },
          { label: 'Why it fails', text: 'It can be answered yes or no, and it invites the tidy answer. People remember being organised more often than they were, especially when a stranger is asking.' },
          { label: 'The repair', text: '“Think about the last class you booked. Walk me through the evening before — what did you do?” Now the email either appears in their story or it does not.' },
          { label: 'The follow-up I hold ready', text: '“What did you expect to happen then?” It works after any answer and does not steer.' },
        ],
        wrongTurn: 'The wrong turn is asking directly about the thing you care about. It looks efficient and it teaches the person what you want to hear.',
        tradeoff: 'The story question takes longer and can wander. In exchange you find out what they actually did, including the parts you would never have asked about.',
        uncertainty: 'Still unknown after one conversation: how common any of this is. One person’s evening is one person’s evening.',
      },
      example: 'Example (made up): Leading: “Was the materials list hard to find?” Open: “How did you find out what to bring?”',
      terms: [{ term: 'Leading question', meaning: 'A question that contains the answer you hope for. “Was it confusing?” tells them it was confusing.' }, { term: 'Open question', meaning: 'One that cannot be answered yes or no and does not name your idea.' }],
      start: 'Write “Tell me about the last time you…” six times and finish each with a different moment from the experience.', enough: 'No question mentions a feature, a screen or the future; each can be answered by telling a story.' },
    { expect: 'Honest status, then observations kept apart from interpretations. A rehearsal with no participant is a valid result.',
      fields: ['session-status', 'observations', 'interpretations', 'quotes'],
      supported: {
        material: 'A supplied line from someone else’s notes, written straight after a real consented conversation: “She looked for the price, couldn’t find it on the first screen, went back twice, and said ‘I never know what these things cost until the end’ — she was clearly frustrated by the whole booking process.”',
        question: 'How should this be split between observations and interpretations?',
        options: [
          { label: 'Observed: she searched for the price, returned twice, and said that sentence. Inferred: that she was frustrated by the process as a whole.', correct: true, feedback: 'Her actions and her words are what you can point to. “Clearly frustrated by the whole process” is your reading, and it stretches one moment into a verdict on everything.' },
          { label: 'All observed: her behaviour and her frustration were both visible in the room.', feedback: 'You saw behaviour and heard a sentence. Frustration is a reasonable interpretation of them, but writing it as observed removes the step where someone could disagree with you.' },
          { label: 'Observed: the quotation only. Everything else is your summary of what she did.', feedback: 'Too strict. Actions you watched — searching, going back twice — are as observable as the words; describing them is not interpretation.' },
          { label: 'Inferred: memory is unreliable, so notes written afterwards are all interpretation.', feedback: 'Notes written immediately are the normal record of a session. Treating everything as interpretation would leave you nothing to reason from.' },
        ],
        then: 'Split your own notes the same way: what you could point to on one side, your reading of it on the other, and the exact words only if you were given permission to keep them.',
      },
      terms: [{ term: 'Observation', meaning: 'What was said or done, as close to their words as you can.' }, { term: 'Interpretation', meaning: 'Your reading of why. Keep it in its own box so nobody mistakes it for what they said.' }],
      start: 'If nobody is available today, read the questions aloud, note where you stumbled, choose “Rehearsal only” and leave observations empty.', enough: 'Every line in observations could be checked against what was said; nothing private or identifying is written down.' },
    { expect: 'The questions the conversation raised, separated from what you observed.', fields: ['followups-next'],
      start: 'Reread the interpretations box; each guess is a follow-up question.', enough: 'Each item is a question, not a conclusion.' },
    { expect: 'One rewritten question, your next research question, and the change the Check questions sent you back to make.',
      fields: ['weak-question', 'improved-question', 'next-research-question', 'improvement-made'],
      start: 'Pick the question you felt awkward asking; that is usually the leading one. Answer the Check questions before the last box.',
      enough: 'The rewrite asks about a past event and would work with a stranger, and the last box names one thing you actually changed.' },
  ],
};

const flowMapping: Guided = {
  route: paperRoute('the reservation flow'),
  worksheet: [
    { id: 'define', title: 'Define the task', fields: [
      { id: 'trigger', label: 'What starts the reservation (the trigger)', kind: 'short', example: 'Example (made up): A visitor taps a workshop in the Saturday list.' },
      { id: 'outcome', label: 'The successful outcome', kind: 'short', hint: 'What is true for the person at the end, not which screen shows.' },
      { id: 'info-before', label: 'Information the person needs before committing', kind: 'long', hint: 'Price, date and time, what to bring, refund rule, how many places are left.' },
    ] },
    { id: 'map', title: 'The successful path, as drawn', intro: 'One line per box on your paper: the node ID, the person’s action, what appears next.', fields: [
      { id: 'path', label: 'Boxes on the successful path', kind: 'long', example: 'Example (made up):\nA · taps Saturday pottery · sees details with price and materials\nB · taps Reserve · sees a date and name form\nC · submits · sees a confirmation with what to bring' },
      { id: 'decisions', label: 'The decision points, and what decides them', kind: 'short', hint: 'Diamonds on paper: places left? payment confirmed?' },
    ] },
    { id: 'recover', title: 'Three failures and their recoveries', fields: [
      { id: 'fail-full', label: 'Workshop full · the message the person sees', kind: 'short', example: 'Example (made up): Saturday is full. Two places are left on Sunday at 11.' },
      { id: 'fail-full-next', label: 'Workshop full · the next action offered', kind: 'short' },
      { id: 'fail-input', label: 'Invalid input · the message', kind: 'short', hint: 'Say what was wrong and how to fix it; keep what they typed.' },
      { id: 'fail-input-next', label: 'Invalid input · the next action', kind: 'short' },
      { id: 'fail-interrupt', label: 'Interrupted confirmation · the message', kind: 'short', hint: 'Distinguish “we are checking” from “this failed” so nobody pays twice.' },
      { id: 'fail-interrupt-next', label: 'Interrupted confirmation · the next action', kind: 'short' },
    ] },
    { id: 'walk', title: 'Walk it through', fields: [
      { id: 'walkthrough-findings', label: 'What a first-time visitor would miss or get stuck on', kind: 'long', hint: 'Trace every branch aloud. Write each stumble as one line.' },
      { id: 'dead-end', label: 'The dead end you chose to repair', kind: 'short' },
    ] },
    { id: 'revise', title: 'Revise and save', fields: [
      { id: 'repair', label: 'What changed, and why', kind: 'long' },
      { id: 'photo-reference', label: 'File name or location of the paper flow (photo or scan)', kind: 'short', hint: 'A name only; nothing is uploaded here.' },
      { id: 'improvement-made', label: 'What you changed after the Check questions', kind: 'long', hint: 'Name the branch or box you changed, and why.' },
    ] },
  ],
  checks: [
    {
      question: 'A visitor reaches “Sorry, this workshop is full.” The box has no arrow leaving it. What is wrong?',
      options: [
        { label: 'It is a dead end: the person is told the bad news with nothing they can do next.', correct: true, feedback: 'A failure is only handled when the person can act — see another date, join a waiting list, or leave knowing where they stand. A message alone stops the flow.' },
        { label: 'Nothing: the workshop really is full, so the flow has finished honestly.', feedback: 'Honest, and unfinished. The task was to get a place; being told no ends this route but not the need, and the flow should show where that need goes.' },
        { label: 'The message should be softer so people are less disappointed.', feedback: 'Wording matters and it is not the structural problem. A gently worded dead end is still a dead end.' },
      ],
      repair: 'Look at your three failure branches in step 3. Any whose next action is only a message needs a real action the person can take. Change one and record it in step 5.',
      recheck: 'Every failure box has an arrow out of it, and each next action is something the person does rather than something the system says.',
    },
    {
      question: 'Your flow shows: Home → Details → Reserve → Payment → Confirmation. What is missing?',
      options: [
        { label: 'The actions and decisions between the screens, and what the person needed to know before committing.', correct: true, feedback: 'That is a list of places, not a flow. What turns one box into the next, and what has to be true before Reserve, is where the design decisions live.' },
        { label: 'Nothing: the five screens cover the whole task from start to finish.', feedback: 'They cover the happy path only, and even there the arrows are unlabelled, so anyone reading it has to guess what causes each move.' },
        { label: 'The visual design of each screen.', feedback: 'Not at this stage. A flow is about order, decisions and recovery; how the screens look comes later and cannot fix a missing decision.' },
      ],
      repair: 'Reread your successful path in step 2. If your boxes are screen names, label each arrow with the action that causes the move, and make sure the price and what to bring appear before the Reserve arrow. Note the change in step 5.',
      recheck: 'Every arrow carries an action, and the information list from step 1 appears before commitment.',
    },
    {
      question: 'Payment is submitted and the connection drops before any answer arrives. What should the flow do?',
      options: [
        { label: 'Say clearly that the result is not yet known and offer a way to check, keeping what was entered.', correct: true, feedback: 'Unknown is a real state and deserves its own box. Telling someone it failed when it may have succeeded is how people pay twice.' },
        { label: 'Show a failure message so the person can try again straight away.', feedback: 'This is the expensive mistake. You do not know it failed, and a confident retry can produce a second booking and a second charge.' },
        { label: 'Retry automatically in the background until it succeeds.', feedback: 'Silent retries hide the state from the person and can repeat the charge. Any retry has to be their decision, after they know where things stand.' },
      ],
      repair: 'Check your interrupted-confirmation branch in step 3. If its message says the booking failed, rewrite it as an unknown state with a way to check, then record it in step 5.',
      recheck: 'The interrupted branch distinguishes “we are checking” from “this failed”, and keeps the entered values.',
    },
  ],
  saveRoute: {
    auto: 'Everything you type here saves by itself, on this device first and then online. The sheet you drew does not: it stays on your table until you photograph it.',
    external: 'The photo or scan of the flow lives in your own folder. Write its file name in the last step so you can find it later; entering a name does not upload the picture, and nobody else can open it from here.',
    creator: 'Your creator reads what you typed, not the drawing. If you want him to see the sheet, share the photo the way you normally share files and put the same file name in Your work.',
    next: 'Open Your work and choose Ready for review. Lesson 5 turns this flow into screens, so keep the sheet and its numbering.',
  },
  guide: [
    { expect: 'A trigger, a successful outcome and the list of what the person needs to know before committing.', fields: ['trigger', 'outcome', 'info-before'],
      terms: [{ term: 'Trigger', meaning: 'The moment the task starts, from the person’s side.' }, { term: 'Commitment', meaning: 'The point after which backing out costs something: paying, or promising a place.' }],
      start: 'Write the outcome as “She has a place on Saturday and knows what to bring.”', enough: 'Everything in the information list appears somewhere before the Reserve action in the next step.' },
    { expect: 'The successful path on paper, and its boxes and decision points recorded here.', fields: ['path', 'decisions'],
      demo: {
        scenario: 'Made-up example. The first three boxes of a reservation flow, drawn twice because the first attempt was a list of screens.',
        beats: [
          { label: 'My first attempt', text: 'Home → Details → Reserve → Payment → Confirmation. Five boxes, five arrows, no words on the arrows.' },
          { label: 'Why it taught me nothing', text: 'Every box is a place, not a state, and nothing says what moves the person along. It is a sitemap wearing a flow’s clothes.' },
          { label: 'The redraw', text: 'A · looking at Saturday’s list — taps a class → B · reading the class details, price and materials visible — taps Reserve → C · filling name and date.' },
          { label: 'What the redraw exposed', text: 'Between B and C there is a decision I had not drawn: are there places left? Until I drew the arrow labels, that question had nowhere to live.' },
          { label: 'Where the information had to move', text: 'The price sat on the payment screen in my first sketch. Because commitment happens at Reserve, it had to move up to B.' },
        ],
        wrongTurn: 'The wrong turn is drawing the screens you expect to design. It produces a tidy diagram that hides every decision and every failure.',
        tradeoff: 'Labelled states and arrows take longer and look messier. They pay for themselves the moment you ask what happens when something goes wrong, because there is somewhere to attach the answer.',
        uncertainty: 'Still unknown: whether people look for the price before or after they choose a date. The flow assumes before, which is a guess worth checking.',
      },
      terms: [{ term: 'Node', meaning: 'One box: a state the person is in. Give each a letter so the failures can point back to it.' }, { term: 'Decision', meaning: 'A point where the path splits depending on something the person or the system knows.' }],
      start: 'Draw the trigger box at the top left and the outcome box at the bottom right, then fill the shortest path between them.', enough: 'Price and materials appear before the Reserve arrow, and every arrow has a label.' },
    { expect: 'Three failure branches, each with a message and a next action.', fields: ['fail-full', 'fail-full-next', 'fail-input', 'fail-input-next', 'fail-interrupt', 'fail-interrupt-next'],
      reveal: { first: 2, group: 2, count: 6, addLabel: 'Add the next failure', note: 'One failure at a time: the message first, then what the person can do about it.' },
      supported: {
        material: 'A supplied branch from the same made-up flow. The person types an email address without an @ and presses Reserve. Someone has drafted three versions of what happens next.',
        question: 'Which one handles the failure properly?',
        options: [
          { label: '“That email address is missing an @. Check it and press Reserve again.” The name and date they typed stay on screen.', correct: true, feedback: 'It says what is wrong, where, and what to do, and it does not punish them by emptying the form. Everything they can act on is in one place.' },
          { label: '“Invalid input. Please try again.” The form is cleared so they can start cleanly.', feedback: 'Two failures at once: it does not say which field or what is wrong with it, and clearing the form makes the person retype work they had already done correctly.' },
          { label: 'The Reserve button quietly does nothing until the address is valid.', feedback: 'The person presses a button and the world does not change, so they cannot tell whether the app is broken, slow, or waiting for them.' },
          { label: '“That email address is missing an @.” No further instruction, since the problem is now obvious.', feedback: 'Close, and it stops one step short. It names the fault without saying what to do, and it does not promise that their other answers survived.' },
        ],
        then: 'Write your own three branches the same way: name what is wrong, say what the person does next, and state what is preserved.',
      },
      terms: [{ term: 'Recovery', meaning: 'What the person can do next without starting over: change a date, fix a field, check a status.' }, { term: 'Dead end', meaning: 'A box with no arrow out except going back to the start.' }],
      start: 'Take the confirmation box and ask “what if the connection dropped right here?”', enough: 'Each next action is something the person can do, not something the system will do for them.' },
    { expect: 'A list of stumbles found by tracing every branch aloud, and the one dead end you will repair.', fields: ['walkthrough-findings', 'dead-end'],
      start: 'Read each box aloud as if you had never seen the app, and stop wherever you have to explain.', enough: 'At least one finding is missing information rather than a missing arrow.' },
    { expect: 'What changed on the sheet and why, where the photo lives, and the change the Check questions sent you back to make.',
      fields: ['repair', 'photo-reference', 'improvement-made'],
      start: 'Redraw only the repaired branch on a fresh sheet; keep the original. Answer the Check questions before the last box.',
      enough: 'Someone reading the change could find the branch on the original sheet, and the last box names one thing you actually changed.' },
  ],
};

const screenMaking: Guided = {
  route: paperRoute('the two screens at two widths'),
  worksheet: [
    { id: 'learn', title: 'Three accessibility considerations', intro: 'From the W3C introduction: the three that affect your flow most.', fields: numbered('consideration', (n) => `Consideration ${n} and where it touches your flow`, 3, 'short', (n) => (n === 1 ? { example: 'Example (made up): People using a screen reader hear the page in order, so the materials list must come before Reserve in the code order, not only visually.' } : {})) },
    { id: 'sketch', title: 'The screens, as drawn', intro: 'For each, list what is on it from top to bottom. Preparation information stays before Reserve.', fields: [
      { id: 'details-narrow', label: 'Workshop details · narrow (phone)', kind: 'long', example: 'Example (made up):\nTitle and date\nPrice\nWhat to bring\nPlaces left\nReserve button' },
      { id: 'details-wide', label: 'Workshop details · wide (desktop)', kind: 'long', hint: 'Same content; say what sits beside what.' },
      { id: 'reservation-narrow', label: 'Reservation form · narrow', kind: 'long' },
      { id: 'reservation-wide', label: 'Reservation form · wide', kind: 'long' },
    ] },
    { id: 'specify', title: 'Annotations', fields: [
      { id: 'reading-order', label: 'Reading and focus order', kind: 'long', hint: 'Number the elements in the order a keyboard or screen reader would meet them.' },
      { id: 'persistent-labels', label: 'Which labels stay visible while typing, and why', kind: 'short' },
      { id: 'stacking', label: 'What stacks, wraps or moves between wide and narrow', kind: 'long', hint: 'Content reflows; it does not shrink.' },
      { id: 'error-recovery', label: 'How an error keeps what was typed and says how to fix it', kind: 'short' },
      { id: 'checks-needed', label: 'Keyboard and screen-reader checks that still need a built version', kind: 'long', hint: 'A drawing cannot prove these. List them as still to do.' },
    ] },
    { id: 'critique', title: 'Critique', fields: [
      { id: 'error-state', label: 'The error state you added', kind: 'long', example: 'Example (made up): Email field empty on submit: red text under the field, “Enter the email address for your confirmation”, typed name kept.' },
      { id: 'longer-labels', label: 'What broke with longer labels or larger text, and what you changed', kind: 'short' },
    ] },
    { id: 'submit', title: 'Save', fields: [
      { id: 'unresolved', label: 'The main unresolved issue for review', kind: 'short' },
      { id: 'photo-reference', label: 'File names or location of the screen sketches', kind: 'short', hint: 'Names only; nothing is uploaded here.' },
      { id: 'improvement-made', label: 'What you changed after the Check questions', kind: 'long', hint: 'Name the screen or annotation you changed, and why.' },
    ] },
  ],
  checks: [
    {
      question: 'Your annotations say the screens are keyboard accessible. What do the sketches actually establish?',
      options: [
        { label: 'What you intend: the order, the labels and the recovery. Whether it works can only be known once it is built and tested.', correct: true, feedback: 'A drawing records a design decision. Focus order, announcement and keyboard traps are properties of running code, so the honest note names the checks still to do.' },
        { label: 'That the design is accessible, since the reading order and labels are specified.', feedback: 'Specifying them is necessary and not sufficient. A build can ignore the order, mislabel a field, or trap focus in a dialog, and only testing reveals it.' },
        { label: 'Nothing about accessibility at all, so the annotations are pointless.', feedback: 'Too far the other way. The annotations are what a developer builds from and what a tester checks against; they just are not evidence of the result.' },
      ],
      repair: 'Reread your annotations in step 3. Replace any sentence that claims the screens are accessible with the specific checks that still need a built version, and record the change in step 5.',
      recheck: 'No annotation claims a result; the list of checks still needed names keyboard and screen-reader steps.',
    },
    {
      question: 'On the phone version you shrink the whole desktop layout so everything still fits. What is wrong with that?',
      options: [
        { label: 'Shrinking makes text and targets smaller; the content should reflow into one column and keep its size.', correct: true, feedback: 'Reflow rearranges what is there so it stays readable and tappable. Scaling down keeps the arrangement and takes away legibility and touch targets.' },
        { label: 'Nothing, as long as the person can pinch to zoom.', feedback: 'Zooming shifts the work onto the reader, and a zoomed page usually requires sideways scrolling to read a single line.' },
        { label: 'It is wrong only if the text falls below twelve pixels.', feedback: 'A size threshold is not the issue. Even at a readable size, a scaled desktop layout puts the price and the button in places built for a wide screen.' },
      ],
      repair: 'Look at your narrow and wide descriptions in step 2. If the narrow one is the wide one made smaller, rewrite it as a single column in the order the person needs, and say what changed in step 5.',
      recheck: 'The narrow version states what stacks and what moves, and the materials and price still sit above Reserve.',
    },
    {
      question: 'A label sits inside the field as grey placeholder text and disappears when typing starts. Why replace it?',
      options: [
        { label: 'Once it is gone the person cannot check what the field was for, and an error message has nothing to point at.', correct: true, feedback: 'The label is needed most while filling in and while correcting. A placeholder removes it exactly then, and it usually fails contrast as well.' },
        { label: 'Placeholders are always forbidden in accessible design.', feedback: 'Placeholders are fine as an extra hint beside a real label. The problem is using one as the only label.' },
        { label: 'Because grey text looks unfinished.', feedback: 'Appearance is not the reason. The reason is that the information vanishes at the moment it is needed.' },
      ],
      repair: 'Check your persistent-label annotation in step 3. If any field relies on placeholder text alone, give it a visible label that stays, then record it in step 5.',
      recheck: 'Every field keeps a visible label while being typed into, and the error text can name it.',
    },
  ],
  saveRoute: {
    auto: 'What you type here saves by itself, first on this device and then online. Your sketches do not: they stay on paper until you photograph them.',
    external: 'Keep the sheets and any photographs in your own folder and write the file names in the last step. Naming a file here does not upload it or let anyone else open it.',
    creator: 'Your creator reads the descriptions and annotations you typed. Share the photographs the way you normally share files if you want him to see the drawings themselves.',
    next: 'Open Your work, name the unresolved issue you most want read, and choose Ready for review. Lesson 6 repairs one weak point from these screens, so keep the originals unchanged.',
  },
  guide: [
    { expect: 'Three considerations from the reading, each tied to a place in your flow.', fields: ['consideration-1', 'consideration-2', 'consideration-3'],
      terms: [{ term: 'Screen reader', meaning: 'Software that reads the page aloud in code order, so order and labels matter more than position.' }, { term: 'Persistent label', meaning: 'A label that stays visible after typing, unlike placeholder text that disappears.' }],
      start: 'Read only the “Making the Web Accessible” part first and pick the three lines that mention something your screens contain.', enough: 'Each consideration names an element on your sketch, not a general principle.' },
    { expect: 'Four sketches on paper (two screens at two widths), recorded here top to bottom.', fields: ['details-narrow', 'details-wide', 'reservation-narrow', 'reservation-wide'],
      demo: {
        scenario: 'Made-up example. Ordering the workshop details screen for a phone, with the arrangement that had to be undone.',
        beats: [
          { label: 'My first order', text: 'A large photograph of the studio, the class title, a paragraph about the teacher, then price, then what to bring, then Reserve.' },
          { label: 'The question that broke it', text: 'What does she have to decide on this screen? Whether this class, on this date, at this price, is one she can turn up to prepared.' },
          { label: 'What that changes', text: 'The photograph and the teacher’s biography are reassurance, not decisions. They can sit below the button; the date, price and materials cannot.' },
          { label: 'The order I kept', text: 'Title and date, price, what to bring, places left, Reserve — then the photograph and the biography underneath for anyone still deciding.' },
          { label: 'What the wide version does', text: 'The same order, with the photograph moved beside the details instead of above them. Nothing shrinks; the column simply becomes two.' },
        ],
        wrongTurn: 'The wrong turn is arranging the screen by what looks handsome. A big photograph at the top makes a good first impression and pushes the only information she needs below the fold.',
        tradeoff: 'Leading with plain facts makes the page less striking, and the studio may not like it. It buys a person who can decide without scrolling back and forth.',
        uncertainty: 'Still unknown: whether the photograph actually helps anyone choose. It stays on the page, lower down, until there is a reason to say otherwise.',
      },
      terms: [{ term: 'Hierarchy', meaning: 'What you see first, second and third. It should follow the next decision the person has to make.' }, { term: 'Reflow', meaning: 'Content rearranging into one column on a phone rather than shrinking the desktop layout.' }],
      start: 'Draw the phone version first; the wide version is the same list placed side by side.', enough: 'What to bring and the price appear above Reserve at both widths.' },
    { expect: 'Order, labels, stacking, error recovery, and an honest list of checks that need a built version.', fields: ['reading-order', 'persistent-labels', 'stacking', 'error-recovery', 'checks-needed'],
      supported: {
        material: 'A supplied phone sketch of the reservation form, made up for practice. Down the page: the heading “Reserve your place”, then Name, then Email, then a note reading “We will send your materials list here”, then the Date chooser, then the Reserve button. The note about the materials list is drawn in small grey text beside the Email field.',
        question: 'What should the reading and focus order annotation say about that grey note?',
        options: [
          { label: 'It must come before the Email field in the order, because it explains what the address will be used for.', correct: true, feedback: 'Anyone hearing the page read aloud, or tabbing through it, meets the field before the note if it is placed beside it. The explanation only helps if it arrives first.' },
          { label: 'It can sit anywhere, because it is only a hint rather than a label.', feedback: 'Position is exactly what decides whether a hint is heard in time. A hint met after the answer has been typed is decoration.' },
          { label: 'It should be removed, because a field with a visible label needs no further text.', feedback: 'The label says what to type; this note says why it is wanted, which changes whether someone is willing to give it.' },
          { label: 'It should become placeholder text inside the Email field to save space.', feedback: 'That is two problems: it disappears the moment typing starts, and small grey text inside a field is the least readable place on the screen.' },
        ],
        then: 'Number every element on your own sketch in the order you would want it read aloud, and check that each explanation arrives before the thing it explains.',
      },
      terms: [{ term: 'Focus order', meaning: 'The sequence the Tab key moves through. It should match the reading order.' }],
      start: 'Number every element on the phone sketch in the order you would want it read aloud.', enough: 'Nothing here claims the screens are accessible; it says what was designed and what still needs testing.' },
    { expect: 'One added error state and one change from trying longer labels or larger text.', fields: ['error-state', 'longer-labels'],
      start: 'Rewrite one label twice as long on the sketch and see what it collides with.', enough: 'The error says what was wrong and how to fix it, and the typed values survive.' },
    { expect: 'The unresolved issue, where the sketches live, and the change the Check questions sent you back to make.',
      fields: ['unresolved', 'photo-reference', 'improvement-made'],
      start: 'Choose the issue you would most want a second opinion on, not the smallest one. Answer the Check questions before the last box.',
      enough: 'Your work has a reference or the worksheet is filled, and the last box names one thing you actually changed.' },
  ],
};

const repairClinic: Guided = {
  route: paperRoute('the repaired screen or flow'),
  worksheet: [
    { id: 'review', title: 'Choose the weak point', fields: [
      { id: 'criterion', label: 'The review criterion you are weakest on', kind: 'short', hint: 'Pick from any Module 1 lesson’s review criteria.' },
      { id: 'artifact', label: 'The flow or screen that shows it', kind: 'short' },
    ] },
    { id: 'critique', title: 'The critique', fields: [
      { id: 'observation', label: 'What you can point to', kind: 'long', example: 'Example (made up): The Reserve button is greyed out on the full workshop with no text explaining why.' },
      { id: 'task-impact', label: 'What it stops the person doing', kind: 'short' },
      { id: 'evidence', label: 'The evidence for this, and its source label', kind: 'short', hint: 'Observed in your walkthrough, said by a participant, or a heuristic risk?' },
      { id: 'uncertainty', label: 'What you are not sure about', kind: 'short' },
    ] },
    { id: 'repair', title: 'The repair', fields: [
      { id: 'original-reference', label: 'Where the untouched original is kept', kind: 'short' },
      { id: 'repair', label: 'What you changed, and only that', kind: 'long' },
    ] },
    { id: 'compare', title: 'Compare', fields: [
      { id: 'comparison', label: 'Before and after, side by side', kind: 'long', hint: 'What a visitor sees first in each version, and what they can do next.' },
      { id: 'check', label: 'How you would check whether it helps', kind: 'short', example: 'Example (made up): Watch two people reach the full workshop and see whether they find the other date without help.' },
    ] },
    { id: 'save', title: 'Save', fields: [
      { id: 'limitations', label: 'What this repair still does not prove', kind: 'long' },
      { id: 'improvement-made', label: 'What you changed after the Check questions', kind: 'long', hint: 'Name the part of the critique or repair you changed, and why.' },
    ] },
  ],
  checks: [
    {
      question: 'Which critique can somebody act on?',
      options: [
        { label: 'On the full workshop, Reserve is greyed out with no explanation, so the visitor cannot tell whether to wait or look at another date.', correct: true, feedback: 'It points at one thing on the screen and says what it stops the person doing. Someone else could find it and judge whether the repair worked.' },
        { label: 'The reservation screen feels cluttered and a bit dated.', feedback: 'It records an impression without naming what is affected. Two people can disagree about it forever and nothing changes for the visitor.' },
        { label: 'Users are confused by the booking flow.', feedback: 'It sounds like evidence and is a guess about other people. Unless you watched someone, the honest version says what you saw and marks the confusion as inferred.' },
        { label: 'The button colour does not match the studio’s brand.', feedback: 'A real observation about consistency, and no stated effect on the task. It may be worth fixing later; it is not the weak point this lesson is for.' },
      ],
      repair: 'Reread your observation and task-impact boxes in step 2. If the critique names a feeling rather than something on the screen, rewrite it and record the change in step 5.',
      recheck: 'The observation could be verified by someone looking at your artefact, and the impact names a task the person cannot finish.',
    },
    {
      question: 'You repaired the disabled button and also changed the type scale, the spacing and the photograph. What has that cost you?',
      options: [
        { label: 'You can no longer tell which change did anything, so neither version teaches you much.', correct: true, feedback: 'A comparison only works when one thing moved. Bundling changes feels efficient and destroys the reason for keeping a before version at all.' },
        { label: 'Nothing, as long as the screen is better overall.', feedback: '“Better overall” is the judgement you were trying to test. Without a bounded change you are back to taste.' },
        { label: 'Only time, since the extra changes were quick.', feedback: 'The cost is not effort but explanation: you have lost the ability to say why the screen improved.' },
      ],
      repair: 'Look at your repair box in step 3. If it lists changes beyond the one criterion, undo the extras on the copy or state plainly that this is a redesign rather than a bounded repair. Say what you did in step 5.',
      recheck: 'The repair changes one named thing, and the original is untouched and findable.',
    },
    {
      question: 'After the repair you write: “This fixes the problem.” Why is that too strong?',
      options: [
        { label: 'You have changed the design, not observed anyone using it; until someone does, the improvement is intended rather than shown.', correct: true, feedback: 'A repair is a hypothesis with better reasoning behind it. Saying so keeps the next test honest and stops the claim hardening into a fact.' },
        { label: 'Because no design is ever finished.', feedback: 'True and unhelpfully general. The specific problem is that nothing yet distinguishes your intention from the result.' },
        { label: 'It is fine if the heuristic clearly supports the change.', feedback: 'A heuristic flags a risk; it cannot report that a person succeeded. It is the reason for trying, not evidence of the outcome.' },
      ],
      repair: 'Reread your limitations box in step 5. If any sentence claims the problem is fixed, rewrite it as what you would need to watch to find out, then note the change.',
      recheck: 'The record separates what you changed from what remains untested, and names one observation that would settle it.',
    },
  ],
  saveRoute: {
    auto: 'Your critique, repair description and limitations save as you type, on this device first and then online.',
    external: 'The before and after artefacts stay in your own folder or on paper. Keep the original untouched and give the two versions names you can tell apart, then write those names here.',
    creator: 'Your creator reads the critique, the repair and the limitations. He can only see the artefacts themselves if you share them the way you normally share files.',
    next: 'Open Your work and choose Ready for review. This lesson is optional, so stopping here is a complete answer; Lesson 7 explains one decision in writing.',
  },
  guide: [
    { expect: 'One criterion and the artefact that shows the weakness.', fields: ['criterion', 'artifact'],
      terms: [{ term: 'Task blocker', meaning: 'Something that stops the person finishing. It comes before anything that is merely ugly.' }],
      start: 'Reread the Check section of each Module 1 lesson and choose the criterion you skipped.', enough: 'The artefact is one screen or one branch, not the whole module.' },
    { expect: 'An observation, its effect on the task, the evidence with its label, and what remains uncertain.', fields: ['observation', 'task-impact', 'evidence', 'uncertainty'],
      demo: {
        scenario: 'Made-up example. One weak point being written up, starting from the sentence that was not usable.',
        beats: [
          { label: 'What I wrote first', text: '“The confirmation screen is weak.” I knew what I meant and nobody else could have acted on it.' },
          { label: 'What I could actually point to', text: 'After Reserve, the screen says “Thank you” and nothing else. No date, no address, no mention of what to bring.' },
          { label: 'What it stops the person doing', text: 'She cannot check she booked the right evening, and she has nowhere to look for the materials list she was told about.' },
          { label: 'How I labelled my evidence', text: 'Observed in my own walkthrough. Nobody else has used it, so “people would feel unsure” stays inferred.' },
          { label: 'What I still do not know', text: 'Whether the confirmation email covers this. If it does, the screen may matter less than I think, and that changes the repair.' },
        ],
        wrongTurn: 'The wrong turn is the confident summary — “this screen is weak” — which sounds like expertise and gives nobody a way to check or repair it.',
        tradeoff: 'Writing it out takes four lines instead of one, and it can feel laborious for something you already understand. It is what lets someone disagree with you specifically rather than generally.',
        uncertainty: 'Still unknown: whether anyone reads the confirmation screen at all, or goes straight to their email.',
      },
      terms: [{ term: 'Heuristic', meaning: 'A rule of thumb from experience. It flags a risk; it cannot prove anyone failed.' }, { term: 'Taste', meaning: 'A preference about looks. Keep it out unless it affects the task.' }],
      start: 'Write the observation as if describing a photo to someone on the phone.', enough: 'The evidence line names a source: your walkthrough, a participant, or a heuristic.' },
    { expect: 'The original kept safe and one bounded change.', fields: ['original-reference', 'repair'],
      start: 'Copy or photograph the original before touching it.', enough: 'Everything you changed serves the one criterion; nothing else moved.' },
    { expect: 'A before/after comparison and a concrete way to check it.', fields: ['comparison', 'check'],
      supported: {
        material: 'A supplied pair from the same made-up repair. Before: the confirmation screen says only “Thank you”. After: it shows the class name, the date and time, the address, and one line saying what to bring, with the same “Thank you” heading.',
        question: 'Which way of checking whether the repair helped is worth writing down?',
        options: [
          { label: 'Watch two people finish a booking and see whether they can say, without scrolling back, which evening they are coming and what to bring.', correct: true, feedback: 'It names who, what they do, and what you would see. It could also come out badly, which is what makes it a check rather than a demonstration.' },
          { label: 'Ask two people whether the new screen is clearer than the old one.', feedback: 'Shown two versions by the person who made them, people tend to prefer the newer one. You learn about politeness rather than about the task.' },
          { label: 'Count how much longer people spend on the confirmation screen.', feedback: 'Longer could mean reading carefully or being lost, and the number cannot tell you which. A measure you cannot interpret is not yet a check.' },
          { label: 'Compare the two screens against the usability heuristics again.', feedback: 'Useful for deciding what to try; it cannot report what happened. Re-reading a rule tells you about the design, not about a person using it.' },
        ],
        then: 'Write your own check the same way: a person, a task, and the specific thing you would watch for that could show the repair did not help.',
      },
      start: 'Put both sheets next to each other and describe the first thing you notice in each.', enough: 'The check is something you could watch or count, not “it looks clearer”.' },
    { expect: 'What still needs testing, and the change the Check questions sent you back to make.',
      fields: ['limitations', 'improvement-made'],
      start: 'Finish the sentence “This repair would be proven wrong if…”, then answer the Check questions before the last box.',
      enough: 'The repair is described as untested, not as fixed, and the last box names one thing you actually changed.' },
  ],
};

const decisionNote: Guided = {
  route: textRoute,
  worksheet: [
    { id: 'select', title: 'The decision', fields: [
      { id: 'decision', label: 'One decision from Module 1', kind: 'short', example: 'Example (made up): Putting what to bring above the Reserve button.' },
      { id: 'artifact-refs', label: 'The artefacts that show it', kind: 'short', hint: 'File names or worksheet steps.' },
    ] },
    { id: 'write', title: 'The one-page note', intro: 'Short bullets under each heading; a page at most.', fields: [
      { id: 'context', label: 'Context', kind: 'long' },
      { id: 'evidence', label: 'Evidence, with its source labels', kind: 'long', hint: 'Observed, reported by a participant, or assumed. Say which.' },
      { id: 'options', label: 'Options considered', kind: 'long' },
      { id: 'choice', label: 'The choice', kind: 'long' },
      { id: 'trade-off', label: 'The trade-off', kind: 'long' },
      { id: 'next-check', label: 'The next check', kind: 'long', example: 'Example (made up): I still need to watch a visitor use the summary; until then the benefit is untested.' },
    ] },
    { id: 'present', title: 'Say it aloud', fields: [
      { id: 'unclear', label: 'Where the reasoning was unclear when spoken', kind: 'short' },
    ] },
    { id: 'plan', title: 'Plan', fields: [
      { id: 'strength', label: 'One strength with the evidence behind it', kind: 'short' },
      { id: 'gap-1', label: 'Gap 1', kind: 'short' },
      { id: 'gap-2', label: 'Gap 2', kind: 'short' },
      { id: 'repair', label: 'One small repair (reduce scope until it fits a session)', kind: 'short' },
      { id: 'next-action', label: 'Your next learning action', kind: 'short' },
      { id: 'improvement-made', label: 'What you changed after the Check questions', kind: 'long', hint: 'Name the sentence or section you changed, and why.' },
    ] },
  ],
  checks: [
    {
      question: 'Your note ends: “This change will make booking much easier for users.” What is wrong with that sentence?',
      options: [
        { label: 'Nothing has been built or used, so the outcome is intended rather than observed; it should say what you expect and how you would find out.', correct: true, feedback: 'An unshipped design can show reasoning. Written as a result, the sentence will be quoted back at you later as though it had been measured.' },
        { label: 'Nothing, as long as the reasoning behind it is sound.', feedback: 'Sound reasoning is why the change is worth trying. It is not a report of what happened, and the sentence is written as one.' },
        { label: 'It should name the percentage improvement expected.', feedback: 'That would be worse: an invented number is harder to challenge than a vague claim and no more true.' },
      ],
      repair: 'Reread your choice and next-check sections in step 2. Rewrite any sentence that states an outcome as an expectation with the observation that would test it, then record the change in step 5.',
      recheck: 'No sentence claims a result; the next check names something you could watch.',
    },
    {
      question: 'Your note gives one option and the choice you made. What is missing?',
      options: [
        { label: 'A real alternative and the reason you set it aside — otherwise the reader cannot tell whether a decision was made at all.', correct: true, feedback: 'A decision means something else could have happened. Without the rejected option the note reads as a description of what you built.' },
        { label: 'Nothing, if the choice was obviously correct.', feedback: 'An obviously correct choice is the easiest to write an alternative for, and the reason it was obvious is worth stating.' },
        { label: 'A list of every idea you considered.', feedback: 'Too much. One serious alternative with the reason it lost is more useful than an exhaustive list nobody reads.' },
      ],
      repair: 'Look at your options section in step 2. Add one alternative you genuinely considered and the reason you did not take it, then note the change in step 5.',
      recheck: 'The note names at least one alternative and why it was set aside, and the trade-off says what the choice cost.',
    },
    {
      question: 'Reading it aloud, you find yourself saying “it just feels more intuitive.” What does that tell you?',
      options: [
        { label: 'That part of the note has no evidence behind it and needs the observation or reasoning that made you believe it.', correct: true, feedback: 'Words like intuitive, clean and obvious mark the places where the argument stopped. Saying it aloud is the quickest way to find them.' },
        { label: 'That the design is working, since it feels natural to you.', feedback: 'It feels natural to the person who made it, who knows where everything is. That is the least reliable reader you have.' },
        { label: 'That you should remove the sentence and move on.', feedback: 'Deleting hides the gap. Either supply the reason or say plainly that this part is a preference.' },
      ],
      repair: 'Take the sentence that felt weakest when spoken and either give it a source label or mark it as an untested preference, then record what you changed in step 5.',
      recheck: 'Every claim in the note carries a source: observed, reported, assumed, or an explicit preference.',
    },
  ],
  saveRoute: {
    auto: 'The whole note saves as you type, on this device first and then online. There is nothing else to press.',
    external: 'If you would rather write the page in your own document, do that and keep the file; then paste the six sections here or put the file name in Your work, so the note and its review stay together.',
    creator: 'Your creator reads the note, the strength, the two gaps and your next action once you choose Ready for review. This is the piece he can respond to most usefully, because it shows your reasoning rather than the artefact alone.',
    next: 'Open Your work and choose Ready for review. This lesson is optional and it closes Module 1; Module 2 begins by choosing what evidence you need next, which your two gaps already point at.',
  },
  guide: [
    { expect: 'One decision and the artefacts that show it.', fields: ['decision', 'artifact-refs'],
      terms: [{ term: 'Decision', meaning: 'A place where you could have done something else and chose not to.' }],
      start: 'Pick the decision you would find hardest to defend; it will teach the most.', enough: 'Each artefact reference points at something that exists.' },
    { expect: 'Six short sections: context, evidence, options, choice, trade-off, next check.', fields: ['context', 'evidence', 'options', 'choice', 'trade-off', 'next-check'],
      reveal: { first: 2, group: 2, count: 6, addLabel: 'Add the next two sections', note: 'Two headings at a time. Context and evidence first; what you chose reads differently once the evidence is written down.' },
      demo: {
        scenario: 'Made-up example. The evidence and choice sections of a one-page note, written twice.',
        beats: [
          { label: 'My first evidence line', text: '“Research showed that attendees want to know what to bring.” It sounded solid and I was pleased with it.' },
          { label: 'What was actually behind it', text: 'One conversation with one person who mentioned an apron, plus my own walkthrough. That is not research showing anything.' },
          { label: 'The line I kept', text: 'One participant said she did not know what to bring (reported, one person). I could not find the materials list before booking (observed, my walkthrough). Whether this is common is assumed.' },
          { label: 'How the choice section changed', text: 'It went from “so we should show materials earlier” to “I moved materials above Reserve on the strength of one account and my own walkthrough; if the next two conversations do not mention it, I would reconsider.”' },
          { label: 'What the reader can now do', text: 'Disagree with the strength of the evidence rather than with my taste, which is a far more useful argument to have.' },
        ],
        wrongTurn: 'The wrong turn is the word “research”. It converts one conversation into an authority, and once written it is repeated in the next document without the caveat.',
        tradeoff: 'The honest version makes your case look weaker, and it is the version that survives someone asking how you know. It also tells you exactly what to do next.',
        uncertainty: 'Still unknown: how common the problem is. One account cannot say, and the note has to survive that.',
      },
      example: 'Example (made up): “I moved materials before reservation because preparation is the reported concern. A checkbox records a click, not comprehension. I still need to observe visitors using the summary.”',
      terms: [{ term: 'Trade-off', meaning: 'What you gave up or made worse by choosing this.' }, { term: 'Concept', meaning: 'An unshipped design. It can show reasoning; it cannot show impact.' }],
      start: 'Fill Evidence first; if it is thin, the Choice section should say so.', enough: 'No sentence claims people will prefer it; every claim has a source label.' },
    { expect: 'The place your spoken explanation went unclear.', fields: ['unclear'],
      supported: {
        material: 'A supplied paragraph from someone else’s decision note, made up for practice: “Attendees want to know what to bring. I watched two people miss the materials line at the bottom of the page. Moving it above Reserve will reduce no-shows, and the studio agrees it is worth trying.”',
        question: 'Which sentence needs a source label most urgently before this note is shared?',
        options: [
          { label: '“Moving it above Reserve will reduce no-shows” — a prediction about an outcome nobody has measured.', correct: true, feedback: 'It is the only sentence that claims a result, and results are what get repeated in later documents. It should say what is expected and how it would be checked.' },
          { label: '“Attendees want to know what to bring” — a general claim about people.', feedback: 'It does need a label, and it is the softer problem: a reader can see it is a summary. The outcome claim will be quoted as a fact.' },
          { label: '“I watched two people miss the materials line” — a small sample.', feedback: 'Small, and honestly stated. It already says who and what was observed; two people is a limitation to note, not an unlabelled claim.' },
          { label: '“The studio agrees it is worth trying” — an opinion presented as support.', feedback: 'Worth attributing, and it is not evidence about people using the design, so nobody is likely to mistake it for one.' },
        ],
        then: 'Read your own six sections and mark each claim observed, reported or assumed. Any sentence about an outcome needs the check that would test it.',
      },
      start: 'Set a five-minute timer and explain the note to an empty chair, then once more to a person if you can.', enough: 'You noticed at least one place you reached for a design word instead of an observation.' },
    { expect: 'One evidenced strength, two gaps, one bounded repair and a next action.', fields: ['strength', 'gap-1', 'gap-2', 'repair', 'next-action'],
      terms: [{ term: 'Gap', meaning: 'Something a reviewer would ask for that you cannot yet show.' }],
      start: 'Look at the Module 1 review criteria; the two you cannot evidence are your gaps.', enough: 'The repair names an artefact and fits in one sitting.' },
    { expect: 'The note is saved, and the change the Check questions sent you back to make. This lesson is optional.',
      fields: ['improvement-made'],
      start: 'Answer the Check questions, make the one repair each points at, then say here what you changed. Choose Ready for review in Your work if you want creator input.',
      enough: 'The last box names one sentence you actually changed. Nothing more is required; stopping here is fine.' },
  ],
};


// ---------------------------------------------------------------------------
// Module 2, refined 7 September 2026 against docs/BEGINNER-LESSON-AUDIT.md.
// These five lessons had no guided practice at all: they sent the learner to a
// text file with a seven-column table. Each now has a route, a worksheet sized
// to the evidence, one demonstration, one supplied case and answer-first
// checks. Participant access is the running theme, so every lesson makes the
// no-participant route an honest recorded outcome rather than a failure.
// ---------------------------------------------------------------------------

const studyPlan: Guided = {
  route: textRoute,
  worksheet: [
    { id: 'reconnect', title: 'The decision you cannot yet justify', intro: 'From your Module 1 flow and screens.', fields: [
      { id: 'decision', label: 'The decision', kind: 'short', example: 'Example (made up): whether what to bring belongs on the details screen or in a message after booking.' },
      { id: 'decision-stake', label: 'What happens if you get it wrong', kind: 'short', hint: 'For the person, not for you.' },
    ] },
    { id: 'plan', title: 'The study, in one page', fields: [
      { id: 'question', label: 'The research question', kind: 'short', hint: 'What you do not know, written so an answer would change the decision above.', example: 'Example (made up): when do people decide what to take to a class, and where do they look?' },
      { id: 'method', label: 'Interview about the past, or watch someone do a task?', kind: 'choice', options: ['Interview about a recent experience', 'Watch someone attempt a task', 'Both, in one short session'] },
      { id: 'method-why', label: 'Why that method answers this question', kind: 'long', hint: 'An interview reaches what happened before and around; watching reaches what the screen does to someone now.' },
      { id: 'criteria', label: 'Who would count as a relevant person', kind: 'short', hint: 'Describe the experience they need, not a name.', example: 'Example (made up): anyone who has booked a class, course or workshop in the last few months.' },
      { id: 'useful-evidence', label: 'What you would need to hear or see to be satisfied', kind: 'long' },
    ] },
    { id: 'materials', title: 'What you will say and how you will take notes', fields: [
      { id: 'consent-intro', label: 'Your consent introduction, word for word', kind: 'long', hint: 'Who you are, what the notes are for, that they can skip or stop, and whether anything is recorded.' },
      { id: 'task-or-questions', label: 'The task or the opening questions', kind: 'long', hint: 'A task states a goal without naming buttons. Questions ask about a real recent occasion.' },
      { id: 'note-columns', label: 'The headings you will use while taking notes', kind: 'short', example: 'Example (made up): what they did · their words · what I think it means · what I still need to ask.' },
    ] },
    { id: 'access', title: 'Who you can actually reach', fields: [
      { id: 'access-status', label: 'Where recruitment stands today', kind: 'choice', options: ['Someone has agreed', 'Asked, waiting for a reply', 'Nobody available: rehearsal only'], hint: 'Choose honestly. Rehearsal only is a real, recordable outcome.' },
      { id: 'access-gap', label: 'If nobody is available, who would you need and how might you reach them?', kind: 'long', hint: 'Dating the gap is the finding. Leave it if someone has agreed.' },
      { id: 'rehearsal-notes', label: 'What reading it aloud taught you', kind: 'long', hint: 'Which sentence was awkward, which question you wanted to answer for them.' },
    ] },
    { id: 'review', title: 'One way this could mislead you', fields: [
      { id: 'bias', label: 'One way your plan could push the answer', kind: 'long', example: 'Example (made up): I would be showing my own screen and asking if it is clear, so agreeing is the polite answer.' },
      { id: 'bias-fix', label: 'What you changed because of it', kind: 'short' },
      { id: 'limitation', label: 'What this study cannot tell you, however it goes', kind: 'short' },
      { id: 'improvement-made', label: 'What you changed after the Check questions', kind: 'long', hint: 'Name which answer you changed and why.' },
    ] },
  ],
  guide: [
    { expect: 'One decision from Module 1 that you cannot yet defend, and what it costs the person if you choose wrongly.',
      fields: ['decision', 'decision-stake'],
      demo: {
        scenario: 'Made-up example. Choosing what to study after Module 1, starting from the wrong end.',
        beats: [
          { label: 'Where I started', text: 'I wrote “I want to interview people about the booking screen.” A method, a subject, and no reason.' },
          { label: 'The question that stopped me', text: 'If someone answered, what would I do differently? I had no answer, which meant any result would be interesting and useless.' },
          { label: 'The decision underneath', text: 'I had put what to bring on the details screen instead of in a message after booking. I chose that in ten seconds and cannot defend it.' },
          { label: 'What that makes the question', text: 'When do people decide what to take, and where do they look? If it is on the morning of the class, the details screen is the wrong place entirely.' },
          { label: 'What it rules out', text: 'Asking “is this screen clear?”. It cannot change where the information belongs, and people say yes to be kind.' },
        ],
        wrongTurn: 'The wrong turn is starting with the method. Interviews sound like research, so it is easy to arrange one and only afterwards notice that no answer would change anything.',
        tradeoff: 'Naming the decision first makes the study smaller and less impressive. It also makes it worth running.',
        uncertainty: 'Still unknown: whether anyone reads a message after booking at all. That is a second question, not this one.',
      },
      terms: [
        { term: 'Decision', meaning: 'A choice you have already made or are about to make, where you could reasonably have done something else.' },
        { term: 'Uncertainty', meaning: 'The thing you do not know that makes the decision a gamble.' },
      ],
      start: 'Open your Module 1 screens and find something you placed without being able to say why.',
      enough: 'You can say what you would do differently depending on the answer.' },
    { expect: 'A research question, a method with a reason, who would count as relevant, and what evidence would satisfy you.',
      fields: ['question', 'method', 'method-why', 'criteria', 'useful-evidence'],
      supported: {
        material: 'A supplied pair from the same made-up project. Question A: “Where do people look for what to bring, and when?” Question B: “Can a first-time visitor tell, from this screen, what the class costs in total?”',
        question: 'Which method fits which question?',
        options: [
          { label: 'A needs an interview about a recent booking; B needs watching someone attempt the task on the screen.', correct: true, feedback: 'A is about what happened around the booking, over days, in places your screen cannot see. B is about what this screen does to someone in the next two minutes, which you can watch.' },
          { label: 'Both need interviews, because you want to understand people’s thinking.', feedback: 'For B an interview gets you a recollection or a guess. Watching someone hunt for the total is far more reliable than asking whether they could find it.' },
          { label: 'Both need a task, because watching behaviour always beats asking.', feedback: 'Watching cannot reach last Tuesday evening. A is about a sequence that already happened elsewhere, and only an account of it can reach that.' },
          { label: 'A survey would answer both more cheaply.', feedback: 'A survey collects what people say they usually do, which is the least reliable version of A, and it cannot observe anyone failing to find a total.' },
        ],
        then: 'Apply the same test to your own question: does it ask about something that already happened elsewhere, or about what this screen does to someone now?',
      },
      terms: [
        { term: 'Method', meaning: 'How you get evidence: asking about the past, or watching someone do something now.' },
        { term: 'Recruitment criteria', meaning: 'The experience a person needs for their answers to be relevant. Not their name, age or job.' },
      ],
      start: 'Write the question as “I do not know…” and finish it, then choose the method that could actually reach it.',
      enough: 'The reason names what the method reaches that the other one cannot.' },
    { expect: 'Consent wording you would actually say, the task or questions, and the headings for your notes.',
      fields: ['consent-intro', 'task-or-questions', 'note-columns'],
      terms: [
        { term: 'Consent', meaning: 'They know what you are doing with their words and agree before you start, and can stop at any time.' },
        { term: 'Neutral task', meaning: 'A goal with no route in it. “Find a class you could attend on Saturday and see what it would cost you” names no button.' },
      ],
      start: 'Write the consent sentences first; they are the part you will be most nervous about saying.',
      enough: 'Nothing in the task tells the person where to click, and the consent wording says they can stop.' },
    { expect: 'An honest recruitment status, and either a dated gap or what rehearsing aloud taught you.',
      fields: ['access-status', 'access-gap', 'rehearsal-notes'],
      terms: [
        { term: 'Recruitment gap', meaning: 'A dated record that nobody was available. It is a real result of the work, not a failure to report.' },
        { term: 'Self-pilot', meaning: 'Running your own materials past yourself. It checks the materials; it tells you nothing about other people.' },
      ],
      start: 'If you are unsure whether to ask someone, write the message you would send. Deciding is easier once it exists.',
      enough: 'The status matches reality, and if nobody is available the plan is still finished and ready.' },
    { expect: 'One way the plan could push the answer, what you changed, the limitation you accept, and the repair the Check questions asked for.',
      fields: ['bias', 'bias-fix', 'limitation', 'improvement-made'],
      start: 'Ask what answer you are hoping for; the bias is usually whatever makes that answer easy to give.',
      enough: 'The limitation names something the study cannot establish even if it goes perfectly.' },
  ],
  checks: [
    {
      question: 'You have a willing participant on Saturday and no study plan yet. What do you decide first?',
      options: [
        { label: 'The decision the evidence could change, then the question, then the method.', correct: true, feedback: 'The order matters because it is what stops you collecting interesting material that changes nothing. A session without a decision behind it is a pleasant conversation.' },
        { label: 'The method, since you only have one session and interviews fit most things.', feedback: 'Choosing the method first quietly decides what you can learn. Some questions cannot be reached by asking at all.' },
        { label: 'The questions, so you are ready when they arrive.', feedback: 'Questions written before you know the decision tend to be about your screen. They produce agreement rather than evidence.' },
      ],
      repair: 'Reread your question in step 2. If it could be answered without changing your decision in step 1, rewrite it so an answer would move you, then record the change in step 5.',
      recheck: 'The question names something you do not know, and each possible answer leads somewhere different.',
    },
    {
      question: 'One person tells you they never open confirmation emails. What have you established?',
      options: [
        { label: 'That at least one person with relevant experience does not, which is enough to make you stop assuming everyone does.', correct: true, feedback: 'One account cannot say how common it is, and it is real evidence that the behaviour exists. That is usually enough to change a design you were about to build on the opposite assumption.' },
        { label: 'That most people do not read confirmation emails.', feedback: 'One person cannot support “most”. Written that way it will be repeated later without the caveat, and it will be treated as a number.' },
        { label: 'Nothing: a single participant is not a sample.', feedback: 'Too dismissive. One clear account of a behaviour is a fact about the world; what it cannot give you is prevalence.' },
        { label: 'That your email design needs work.', feedback: 'That jumps to a repair. If nobody opens it, better wording is not the answer, and you would have skipped past the finding.' },
      ],
      repair: 'Check the limitation box in step 5. If it does not say that this study cannot establish how common anything is, add that sentence and note it in step 5.',
      recheck: 'The limitation distinguishes what one or two accounts can show from what they cannot.',
    },
    {
      question: 'The easiest people to recruit are two designers you know. Why is that a problem worth writing down?',
      options: [
        { label: 'They read screens professionally, so their fluency is not typical, and the plan should record that limit.', correct: true, feedback: 'Convenience is not disqualifying, and it does shape what you can conclude. Recording who you actually reached is what keeps the finding honest later.' },
        { label: 'It is not a problem, since anyone can attempt a booking task.', feedback: 'Anyone can attempt it, and a designer will notice conventions a first-time visitor never sees, which is exactly what you were trying to observe.' },
        { label: 'You should cancel and wait for perfect participants.', feedback: 'Waiting for the ideal participant usually means no evidence at all. Run it and record who they were.' },
      ],
      repair: 'Reread your criteria in step 2. If they describe who is easy to reach rather than the experience needed, rewrite them, and note in step 5 what you would record about whoever you actually get.',
      recheck: 'The criteria name the experience that makes an answer relevant, and the limitation says who you actually reached.',
    },
  ],
  saveRoute: {
    auto: 'The plan, consent wording, questions and access status save as you type, on this device first and then online.',
    external: 'No participant’s name, contact details or recording belongs here. Keep any consent record in your own private folder and refer to it only by a file name.',
    creator: 'Your creator can read the plan and the recruitment status once you choose Ready for review. A plan with nobody available is a complete answer to this lesson.',
    next: 'Open Your work and choose Ready for review. Lesson 2 turns notes into findings, and it supplies practice notes if your session has not happened yet.',
  },
};

const synthesis: Guided = {
  route: textRoute,
  worksheet: [
    { id: 'define', title: 'Three words in your own sentences', fields: [
      { id: 'define-observation', label: 'An observation is…', kind: 'short', hint: 'Something that happened, that another person could have seen too.' },
      { id: 'define-interpretation', label: 'An interpretation is…', kind: 'short' },
      { id: 'define-recommendation', label: 'A recommendation is…', kind: 'short' },
    ] },
    { id: 'source', title: 'Where your notes come from', fields: [
      { id: 'source-type', label: 'Which notes are you working from?', kind: 'choice', options: ['My own consented session notes', 'The supplied practice notes (simulated training data)', 'Both, kept separate'], hint: 'This label travels with every finding you write below.' },
    ] },
    { id: 'extract', title: 'One observation per line', intro: 'Give each a number so a finding can point back to it. Six is plenty.', fields: [
      ...[1, 2, 3, 4, 5, 6].flatMap((n) => [
        { id: `note-${n}`, label: `N0${n} · what happened`, kind: 'long' as const,
          ...(n === 1 ? { hint: 'One thing only. If a line contains “because” or “so”, the second half is probably an interpretation.', example: 'Example (made up, from the supplied notes): S1 looked for the materials list the evening before the class.' } : {}) },
        { id: `note-${n}-source`, label: `N0${n} · source`, kind: 'short' as const,
          ...(n === 1 ? { hint: 'The session or supplied note it came from: S1, S2, or your own anonymous ID.' } : {}) },
      ]),
    ] },
    { id: 'group', title: 'Two possible patterns', fields: [
      { id: 'group-1', label: 'Group 1 · a name for the pattern', kind: 'short', hint: 'A guess about what these notes have in common. It can be wrong.' },
      { id: 'group-1-notes', label: 'Group 1 · the note numbers in it', kind: 'short' },
      { id: 'group-2', label: 'Group 2 · a name for the pattern', kind: 'short' },
      { id: 'group-2-notes', label: 'Group 2 · the note numbers in it', kind: 'short' },
      { id: 'contradiction', label: 'The note that does not fit either group', kind: 'long', hint: 'Keep it. The exception is usually where the real finding is.', example: 'Example (made up): S4 noticed the list before booking and borrowed an item, which contradicts “nobody reads instructions”.' },
    ] },
    { id: 'findings', title: 'Two findings you could defend', fields: [
      { id: 'finding-1', label: 'Finding 1', kind: 'long' },
      { id: 'finding-1-support', label: 'Finding 1 · note numbers that support it', kind: 'short' },
      { id: 'finding-1-against', label: 'Finding 1 · what argues against it', kind: 'short', hint: 'If nothing does, look again; you may have written a summary rather than a finding.' },
      { id: 'finding-1-confidence', label: 'Finding 1 · how sure are you?', kind: 'choice', options: ['One account only', 'Two or more accounts agree', 'Accounts disagree'] },
      { id: 'finding-2', label: 'Finding 2', kind: 'long' },
      { id: 'finding-2-support', label: 'Finding 2 · note numbers that support it', kind: 'short' },
      { id: 'finding-2-against', label: 'Finding 2 · what argues against it', kind: 'short' },
      { id: 'finding-2-confidence', label: 'Finding 2 · how sure are you?', kind: 'choice', options: ['One account only', 'Two or more accounts agree', 'Accounts disagree'] },
      { id: 'unanswered', label: 'The question these notes cannot answer', kind: 'short' },
    ] },
    { id: 'implication', title: 'One thing this might mean for the design', fields: [
      { id: 'implication', label: 'A possible design implication', kind: 'long', hint: 'Possible. It follows from a finding; it is not proven by it.' },
      { id: 'improvement-made', label: 'What you changed after the Check questions', kind: 'long' },
    ] },
  ],
  guide: [
    { expect: 'Your own sentences for observation, interpretation and recommendation.',
      fields: ['define-observation', 'define-interpretation', 'define-recommendation'],
      terms: [
        { term: 'Observation', meaning: 'What happened. Another person in the room would have seen the same thing.' },
        { term: 'Interpretation', meaning: 'What you think it meant. Reasonable, and still yours rather than theirs.' },
        { term: 'Recommendation', meaning: 'What to change. It should arrive last, attached to a finding.' },
      ],
      start: 'Write each as “… is when …”. Plain is better than clever here.',
      enough: 'Your observation sentence contains no word like because, confused or wanted.' },
    { expect: 'Six numbered observations, each with the note or session it came from, labelled real or supplied.',
      fields: ['source-type', 'note-1', 'note-1-source', 'note-2', 'note-2-source', 'note-3', 'note-3-source', 'note-4', 'note-4-source', 'note-5', 'note-5-source', 'note-6', 'note-6-source'],
      reveal: { first: 3, group: 2, count: 13, addLabel: 'Add another observation', note: 'One at a time. Six is plenty; four is enough to find a pattern and a contradiction.' },
      demo: {
        scenario: 'Made-up example. One line of raw notes being turned into an entry, using the supplied practice notes.',
        beats: [
          { label: 'The raw line', text: '“S2 was searching her email on the bus because she had not bothered to check before leaving.”' },
          { label: 'What I can actually point to', text: 'She searched her confirmation email during the journey. That is the part another person in the room would have seen.' },
          { label: 'What I nearly kept', text: '“Because she had not bothered.” That is a judgement about her character, and it was mine, not hers.' },
          { label: 'The entry I wrote', text: 'N02 · S2 searched the confirmation email during the journey to the class. Source: S2, supplied practice note.' },
          { label: 'Where the rest went', text: '“Maybe preparation happens on the way” became an interpretation attached to a finding, where someone can disagree with it.' },
        ],
        wrongTurn: 'The wrong turn is keeping the explanation inside the observation. It reads as one solid fact, and later nobody can tell which half was seen and which half was guessed.',
        tradeoff: 'Splitting produces more lines and duller reading. It is what lets a reader trace a finding back and challenge exactly one link.',
        uncertainty: 'Still unknown: whether she usually prepares later, or whether that day was unusual. One note cannot say.',
      },
      terms: [
        { term: 'Simulated training data', meaning: 'Practice notes supplied by this course. Useful for learning the method; never presentable as research you did.' },
        { term: 'Note ID', meaning: 'A number so a finding can point at its source. Without it, findings float free.' },
      ],
      start: 'If you have no session of your own, choose the supplied notes and expand the four S1 to S4 lines into separate entries.',
      enough: 'Every entry could be checked against a source, and none contains the word because.' },
    { expect: 'Two named groups with their note numbers, and the note that refuses to fit.',
      fields: ['group-1', 'group-1-notes', 'group-2', 'group-2-notes', 'contradiction'],
      terms: [{ term: 'Contradiction', meaning: 'A note that argues against the pattern you are forming. It stays visible; it is not a mistake in the data.' }],
      start: 'Read your entries and put two of them together that feel related; the reason you put them together is the group name.',
      enough: 'At least one note sits outside both groups and is still written down.' },
    { expect: 'Two findings, each with supporting numbers, counter-evidence, a confidence level, and the question none of it answers.',
      fields: ['finding-1', 'finding-1-support', 'finding-1-against', 'finding-1-confidence', 'finding-2', 'finding-2-support', 'finding-2-against', 'finding-2-confidence', 'unanswered'],
      supported: {
        material: 'Supplied practice notes. S1 looked for the materials list the evening before. S2 searched the confirmation email on the journey. S3 brought supplies from a previous class without checking. S4 noticed the list before booking and borrowed an item.',
        question: 'Which finding do these four notes actually support?',
        options: [
          { label: 'People prepare at different moments, from before booking to the journey itself, so no single moment can be assumed.', correct: true, feedback: 'It holds all four accounts, including S3 who did not check at all, and it says something a design has to answer: the information cannot live at one moment only.' },
          { label: 'Nobody reads the instructions before a class.', feedback: 'S4 read them before booking. One counter-example is enough to sink a claim written as “nobody”, and it was in front of you.' },
          { label: 'People want a reminder the day before the class.', feedback: 'Nobody said this. It is a recommendation dressed as a finding, and it fits only two of the four accounts.' },
          { label: 'Most people prepare at the last minute.', feedback: 'Two of four is not “most”, and four accounts cannot establish proportions at all. The word most is doing work the evidence cannot support.' },
        ],
        then: 'Write your own two findings the same way: they must survive every note you have, including the one that did not fit.',
      },
      terms: [{ term: 'Counter-evidence', meaning: 'What argues against your finding. A finding with none is usually a summary of the notes you liked.' }],
      start: 'Take a group name and ask what it would mean if it were true of everyone in that group.',
      enough: 'Each finding names its supporting numbers, and neither uses most, all or nobody.' },
    { expect: 'One possible implication written as possible, and the repair the Check questions asked for.',
      fields: ['implication', 'improvement-made'],
      start: 'Finish the sentence “If that is right, then the design would have to…”.',
      enough: 'The implication is a consequence of a finding, not a feature you already wanted to build.' },
  ],
  checks: [
    {
      question: 'Which of these belongs in the observation column?',
      options: [
        { label: 'S2 searched the confirmation email during the journey.', correct: true, feedback: 'It says what happened and nothing about why. Anyone reading it can check it against the source note.' },
        { label: 'S2 was disorganised about preparing for the class.', feedback: 'That is a judgement about a person. It cannot be checked, and it will quietly become the reason for a design decision later.' },
        { label: 'Add a reminder the day before.', feedback: 'A recommendation, and the furthest thing from an observation. It belongs at the end, attached to a finding with sources.' },
        { label: 'People prepare at the last minute.', feedback: 'A finding, and a shaky one. It generalises several notes into a claim about people, which is a later step and needs its counter-evidence.' },
      ],
      repair: 'Reread your six entries in step 2. Move anything containing because, wanted, or a judgement about the person into an interpretation or a finding, then record the change in step 5.',
      recheck: 'Every entry describes what happened and could be traced to its source.',
    },
    {
      question: 'Five notes support your finding and one contradicts it. What do you do with the sixth?',
      options: [
        { label: 'Keep it visible beside the finding and say what it means for your confidence.', correct: true, feedback: 'The exception is where you learn something. Hiding it makes the finding look stronger and makes you worse at predicting what happens next.' },
        { label: 'Leave it out: five against one is a clear pattern.', feedback: 'Counting notes is not measuring. With six accounts, one clear counter-example matters more than the tally.' },
        { label: 'Change the finding until everything agrees.', feedback: 'That usually produces something so vague it cannot be wrong. Better to keep a sharp finding and state where it fails.' },
        { label: 'Start again with different groups.', feedback: 'Regrouping to escape a contradiction is how you end up with tidy findings nobody can use.' },
      ],
      repair: 'Check the counter-evidence boxes in step 4. If either says none, look again for the note that does not fit and write it in, then say what changed in step 5.',
      recheck: 'Each finding names what argues against it, and its confidence reflects that.',
    },
    {
      question: 'You used the supplied practice notes. How may this work appear later in a portfolio?',
      options: [
        { label: 'Clearly labelled as a training exercise with supplied notes, never as interviews you conducted.', correct: true, feedback: 'The method is genuinely yours to show. The participants are not, and a reader who discovers that later will doubt everything else you wrote.' },
        { label: 'As research findings, since the analysis work was real.', feedback: 'The analysis was real and the sources were invented. Presented as findings, the claim about people is false regardless of how careful the method was.' },
        { label: 'It should not appear at all.', feedback: 'It can appear, labelled. A worked synthesis with supplied notes shows exactly the skill a reviewer wants to see.' },
      ],
      repair: 'Check the source label in step 2 and the wording of your findings. If a finding reads as though real people said it, add the supplied-notes label to the finding itself, then record the change in step 5.',
      recheck: 'The source type is set, and any finding drawn from supplied notes says so where it is written.',
    },
  ],
  saveRoute: {
    auto: 'Your entries, groups and findings save as you type, on this device first and then online.',
    external: 'Keep any raw session notes in your own private folder. Nothing here should carry a participant’s name, and nothing is uploaded.',
    creator: 'Your creator can read the entries, findings and their counter-evidence once you choose Ready for review. The source label travels with them.',
    next: 'Open Your work and choose Ready for review. Lesson 3 turns one of these findings into a small change worth testing.',
  },
};

const opportunity: Guided = {
  route: textRoute,
  worksheet: [
    { id: 'evidence', title: 'The finding you are working from', fields: [
      { id: 'finding', label: 'The finding', kind: 'long', hint: 'Copy it from Lesson 2, with its source label.' },
      { id: 'finding-limits', label: 'What it cannot tell you', kind: 'short' },
    ] },
    { id: 'options', title: 'Three genuinely different responses', intro: 'One at a time. They must differ in kind, not in wording.', fields: [1, 2, 3].flatMap((n) => [
      { id: `option-${n}`, label: `Option ${n} · the change`, kind: 'short' as const,
        ...(n === 1 ? { hint: 'Describe the outcome for the person, not the component you would build.', example: 'Example (made up): the total cost, including materials, is visible before the booking form.' } : {}) },
      { id: `option-${n}-impact`, label: `Option ${n} · what it would do for the person, and why you think so`, kind: 'long' as const },
      { id: `option-${n}-effort`, label: `Option ${n} · effort and risk, with your reason`, kind: 'short' as const,
        ...(n === 1 ? { hint: 'An estimate. Say what it rests on, so a reader knows it is not a measurement.' } : {}) },
    ]) },
    { id: 'select', title: 'The one you will test', fields: [
      { id: 'choice', label: 'Your choice', kind: 'short' },
      { id: 'tradeoff', label: 'What it costs, or what it gives up', kind: 'long' },
      { id: 'out-of-scope', label: 'What you are deliberately leaving out of this test', kind: 'long', hint: 'Everything unrelated to the one thing you want to learn.' },
    ] },
    { id: 'hypothesis', title: 'What you expect, and what would change your mind', fields: [
      { id: 'hypothesis', label: 'If [change], then [who] can [something you could watch]', kind: 'long', example: 'Example (made up): if the total cost appears before the form, a first-time visitor can say what the evening will cost without scrolling back.' },
      { id: 'signal', label: 'What you would see if it worked', kind: 'short' },
      { id: 'counter-signal', label: 'What you would see if it did not', kind: 'short', hint: 'Write this now, before testing. Afterwards it is much harder to be honest about it.' },
      { id: 'task', label: 'The task you will give someone, with no route in it', kind: 'long', hint: 'A goal, not instructions. No button names.' },
    ] },
    { id: 'record', title: 'What the prototype must do', fields: [
      { id: 'prototype-needs', label: 'The behaviour the prototype needs for this test', kind: 'long', hint: 'The smallest set of screens and states that lets someone attempt the task.' },
      { id: 'improvement-made', label: 'What you changed after the Check questions', kind: 'long' },
    ] },
  ],
  guide: [
    { expect: 'One finding from Lesson 2 with its limits still attached.', fields: ['finding', 'finding-limits'],
      terms: [{ term: 'Opportunity', meaning: 'A better outcome for the person, stated without naming what you would build.' }],
      start: 'Choose the finding that would most change your Module 1 screens if it were true.',
      enough: 'The limits line survives the copy: you have not quietly upgraded a one-account finding.' },
    { expect: 'Three responses that differ in kind, each with an expected effect and an effort estimate you can justify.',
      fields: ['option-1', 'option-1-impact', 'option-1-effort', 'option-2', 'option-2-impact', 'option-2-effort', 'option-3', 'option-3-impact', 'option-3-effort'],
      reveal: { first: 3, group: 3, count: 9, addLabel: 'Add another option', note: 'One option at a time. Three is the target, and they should not be variations of each other.' },
      demo: {
        scenario: 'Made-up example. Turning the finding “people prepare at different moments” into options, badly and then better.',
        beats: [
          { label: 'My first three', text: 'A materials list on the details page, a materials list in the confirmation email, and a materials list in a reminder. Three places for one thing.' },
          { label: 'Why that is one option', text: 'Every version assumes the answer is to send a list, and only argues about where. If the assumption is wrong, all three fail together and I learn nothing.' },
          { label: 'The finding again', text: 'People prepare at different moments, including not at all. S3 simply reused what she had from a previous class.' },
          { label: 'Three that differ', text: 'Show total cost and materials before booking; let someone add the list to their calendar for the day they choose; have the studio keep spares so nothing is needed in advance.' },
          { label: 'What that buys', text: 'The third one has no screen at all. If it works best, I have learned something no amount of interface polish would have found.' },
        ],
        wrongTurn: 'The wrong turn is three variations of one idea. It feels like a comparison and it has already decided the answer.',
        tradeoff: 'Genuinely different options are harder to think of and one usually falls outside what you can build. Keeping it in the comparison is what stops the screen being assumed.',
        uncertainty: 'Still unknown: whether the studio would agree to keep spares. That is a constraint to check, not a reason to drop the option.',
      },
      terms: [
        { term: 'Effort estimate', meaning: 'Your guess at the work involved. It stays an estimate unless something measured it, so write the reason beside it.' },
        { term: 'Task impact', meaning: 'What changes for the person trying to finish, not how much of the screen changes.' },
      ],
      start: 'Write one option with no screen in it. If you cannot, the finding may be about a screen you already decided on.',
      enough: 'No two options would succeed or fail for the same reason.' },
    { expect: 'One choice, what it costs, and what you are leaving out.', fields: ['choice', 'tradeoff', 'out-of-scope'],
      terms: [{ term: 'Scope', meaning: 'What this test covers. Everything else is written down as excluded so the result stays interpretable.' }],
      start: 'Choose the option whose result would change your next decision most, not the one you most want to build.',
      enough: 'The excluded list contains something you would have enjoyed doing.' },
    { expect: 'A hypothesis with something you could watch, a success signal, a disconfirming signal written in advance, and a neutral task.',
      fields: ['hypothesis', 'signal', 'counter-signal', 'task'],
      supported: {
        material: 'Two supplied hypotheses for the same made-up change. A: “If the total cost appears before the form, first-time visitors will like the booking experience more.” B: “If the total cost appears before the form, a first-time visitor can say what the evening will cost, including materials, without scrolling back.”',
        question: 'Which one can a short session actually test, and why?',
        options: [
          { label: 'B, because it names something you could watch someone do or fail to do.', correct: true, feedback: 'You can hand someone the task and see whether they can answer without going back. It can also come out badly, which is what makes it a test.' },
          { label: 'A, because liking the experience is what ultimately matters.', feedback: 'Liking is real and you cannot observe it, and asked directly people are kind to the person who made the thing. Nothing in a session would settle it.' },
          { label: 'Both, if you ask a satisfaction question at the end.', feedback: 'Adding a rating to B does not make A testable; it adds a number with no meaning to a session of one or two people.' },
          { label: 'Neither: a prototype cannot test anything about cost.', feedback: 'It can test whether the information can be found and understood, which is precisely what B claims. What it cannot test is whether more people would book.' },
        ],
        then: 'Write yours in the same shape, then write the disconfirming signal before you test anything.',
      },
      terms: [{ term: 'Disconfirming signal', meaning: 'What you would see if the change did not help. Writing it first is what stops an inconvenient result being explained away.' }],
      start: 'Fill in “If … then … can …” and make the last part something a person in the room could see.',
      enough: 'Both signals name observable behaviour, and the task names no button.' },
    { expect: 'What the prototype must be able to do, and the repair the Check questions asked for.',
      fields: ['prototype-needs', 'improvement-made'],
      start: 'Walk your task in your head and list every screen the person would have to reach.',
      enough: 'The list is the smallest set that lets someone attempt the task, including one thing going wrong.' },
  ],
  checks: [
    {
      question: 'You score three options for effort out of five and pick the lowest. Is that measured evidence?',
      options: [
        { label: 'No. It is your estimate written as a number, and it should keep the reason beside it.', correct: true, feedback: 'Numbers look decided. Unless something measured the effort, the score is a judgement, and the reason is the part a reader can argue with.' },
        { label: 'Yes, if you use the same scale for all three.', feedback: 'A consistent scale makes estimates comparable with each other. It does not turn any of them into a measurement.' },
        { label: 'Yes, effort estimates are standard practice in product teams.', feedback: 'They are standard and they are still estimates. Teams that forget this build plans on numbers nobody checked.' },
      ],
      repair: 'Reread your effort lines in step 2. Add the reason behind each estimate, and record the change in step 5.',
      recheck: 'Every effort estimate names what it rests on, and none is presented as a measurement.',
    },
    {
      question: 'Your hypothesis says “users will find it easier”. What is missing?',
      options: [
        { label: 'Something you could watch: what a person would do or say that would show it, and what would show the opposite.', correct: true, feedback: 'Easier is a summary of an experience, not an event. Without an observable version, any session can be read as a success.' },
        { label: 'A number, such as a percentage improvement.', feedback: 'A number you cannot collect is worse than a vague claim, because it looks rigorous. One or two people cannot produce a rate.' },
        { label: 'Nothing, as long as you ask them afterwards whether it was easier.', feedback: 'Asked by the person who designed it, most people say yes. That answer cannot separate a good change from a polite participant.' },
      ],
      repair: 'Rewrite your hypothesis in step 4 so its last part is something you could see, then fill the disconfirming signal and note the change in step 5.',
      recheck: 'The hypothesis ends in observable behaviour and has a signal that would show it failing.',
    },
    {
      question: 'Your chosen change grew to include a new results page, a filter and a rewritten confirmation. Why does that hurt?',
      options: [
        { label: 'Whatever happens, you will not know which part caused it.', correct: true, feedback: 'One session with three changes gives you one impression and no way to attribute it. Cutting scope is what makes a small test worth running.' },
        { label: 'It takes too long to build in paper.', feedback: 'Effort is a real cost and not the main one. Even if it were quick, the result would still be uninterpretable.' },
        { label: 'It does not hurt: testing more of the design gives more feedback.', feedback: 'You get more reactions and less knowledge. More surface means more explanations for every observation.' },
      ],
      repair: 'Look at your scope in step 3. Move everything not needed to observe your signal into the excluded list, then record what you cut in step 5.',
      recheck: 'The excluded list is longer than it was, and what remains is the smallest thing that could show the signal.',
    },
  ],
  saveRoute: {
    auto: 'Your comparison, choice, hypothesis and task save as you type, on this device first and then online.',
    external: 'Nothing here needs a file. If you sketched an option on paper, keep the sheet and name it in Your work.',
    creator: 'Your creator can read the three options, the choice and both signals once you choose Ready for review. The disconfirming signal is the part worth his attention.',
    next: 'Open Your work and choose Ready for review. Lesson 4 builds only the states your task needs, so keep the task wording exactly as you wrote it.',
  },
};

const prototyping: Guided = {
  route: paperRoute('the screens your task needs'),
  worksheet: [
    { id: 'states', title: 'The screens this test needs', intro: 'One at a time. Only what the task requires, plus one thing going wrong.', fields: [
      { id: 'hypothesis-carried', label: 'The hypothesis you are testing', kind: 'short', hint: 'Copy it from Lesson 3 so the build stays honest.' },
      ...[1, 2, 3, 4].flatMap((n) => [
        { id: `state-${n}`, label: `S0${n} · what is on this screen`, kind: 'long' as const,
          ...(n === 1 ? { hint: 'Real words, not “headline here”. Invented content is fine and should be labelled.', example: 'Example (made up): S01 · class list for Saturday, three classes with times and prices.' } : {}) },
        { id: `state-${n}-trigger`, label: `S0${n} · what the person does to leave it, and where they arrive`, kind: 'short' as const },
      ]),
      { id: 'recovery', label: 'The one thing that goes wrong, and how they recover', kind: 'long', hint: 'A full class, a mistyped email, a dropped connection. Draw the card before the session, not during it.' },
    ] },
    { id: 'build', title: 'What you actually made', fields: [
      { id: 'invented-content', label: 'Which content is invented, and how it is marked', kind: 'short', hint: 'Prices, names and dates you made up. Never a real card number or a real person’s details.' },
      { id: 'out-of-scope-actions', label: 'Actions that will not work, and what you will say if someone tries', kind: 'long', example: 'Example (made up): the Sign in link does nothing; I will say “assume you are already signed in”.' },
    ] },
    { id: 'pilot', title: 'Your own walk-through', fields: [
      { id: 'pilot-findings', label: 'What broke when you walked the task yourself', kind: 'long', hint: 'Missing screens, cards you had to invent mid-walk, a step with nowhere to go.' },
      { id: 'pilot-fixes', label: 'What you fixed before anyone else sees it', kind: 'short' },
    ] },
    { id: 'scenario', title: 'The task you will read out', fields: [
      { id: 'scenario', label: 'The task, word for word', kind: 'long', hint: 'A goal and a situation. No button names, no route.' },
      { id: 'reset', label: 'How you put everything back for the next attempt', kind: 'short' },
    ] },
    { id: 'save', title: 'What this cannot show', fields: [
      { id: 'limitations', label: 'What a paper prototype cannot establish', kind: 'long', hint: 'Keyboard and screen-reader behaviour, real payment, speed, anything a server does.' },
      { id: 'photo-reference', label: 'Where the screens live (file name or “paper, in my folder”)', kind: 'short' },
      { id: 'improvement-made', label: 'What you changed after the Check questions', kind: 'long' },
    ] },
  ],
  guide: [
    { expect: 'The hypothesis, the screens the task needs, and one thing going wrong.',
      fields: ['hypothesis-carried', 'state-1', 'state-1-trigger', 'state-2', 'state-2-trigger', 'state-3', 'state-3-trigger', 'state-4', 'state-4-trigger', 'recovery'],
      reveal: { first: 3, group: 2, count: 9, addLabel: 'Add the next screen', note: 'One screen at a time. Most tasks need three or four, not the whole product.' },
      demo: {
        scenario: 'Made-up example. Deciding what to build for the task “find out what Saturday’s class would cost you in total”.',
        beats: [
          { label: 'What I planned to build', text: 'Home, search, filters, class list, details, booking form, payment, confirmation, plus a sign-in screen. Nine screens.' },
          { label: 'The task again', text: 'Find out what Saturday’s class would cost you in total. Nobody has to book anything to answer that.' },
          { label: 'What survived', text: 'The class list, the details screen with cost and materials, and the first step of the booking form so I can see whether they go looking there.' },
          { label: 'What goes wrong on purpose', text: 'One card that says the Saturday class is full, because that is when people find out whether the total was clear enough to compare with Sunday.' },
          { label: 'What I wrote on the unbuilt parts', text: '“Sign in does nothing — assume you are signed in.” Said once at the start, it stops the session becoming about missing screens.' },
        ],
        wrongTurn: 'The wrong turn is building the product rather than the question. Nine screens takes an evening, and eight of them cannot affect the result.',
        tradeoff: 'A small prototype looks unimpressive and someone may wander somewhere you have not drawn. Saying so in advance costs one sentence.',
        uncertainty: 'Still unknown: whether people would behave the same with a real payment at the end. Paper cannot reach that and the notes should say so.',
      },
      terms: [
        { term: 'Fidelity', meaning: 'How finished a prototype looks and behaves. Choose the least that can answer your question.' },
        { term: 'State', meaning: 'One screen as the person sees it at one moment, including empty, full and error versions.' },
      ],
      start: 'Walk your task in your head and write down only the screens you actually pass through.',
      enough: 'Every screen you listed is needed to attempt the task, and one shows something going wrong.' },
    { expect: 'Invented content marked as invented, and a plan for actions that will not work.',
      fields: ['invented-content', 'out-of-scope-actions'],
      terms: [{ term: 'Out of scope', meaning: 'Something the prototype cannot do. Named in advance it is a boundary; discovered mid-session it is a broken test.' }],
      start: 'Look at every price, name and date on your cards and ask where the number came from.',
      enough: 'No real payment details or real people appear anywhere, and each dead control has a sentence ready.' },
    { expect: 'What broke when you walked it yourself, and what you fixed. This is a self-pilot, not a test with a person.',
      fields: ['pilot-findings', 'pilot-fixes'],
      supported: {
        material: 'A supplied self-pilot from the same made-up prototype. Walking the task, the author found: the class list card had no prices on it; pressing Reserve led to a card that did not exist yet; and the full-class card said “Sorry, full” with nothing else on it.',
        question: 'Which of those three is not a prototype bug to fix before the session?',
        options: [
          { label: 'The full-class card: its emptiness is a design problem worth watching someone hit.', correct: true, feedback: 'A missing price and a missing card stop the session working at all. A bare failure message is the design as it stands, and what someone does when they meet it is exactly what you want to see.' },
          { label: 'The missing prices: the person can ask you what things cost.', feedback: 'Asking you turns the facilitator into part of the interface, and the task was about finding the cost. That has to be on the card.' },
          { label: 'The missing card after Reserve: you can describe it aloud instead.', feedback: 'Describing it aloud means you are designing during the session and the person is reacting to your narration rather than the design.' },
          { label: 'All three should be fixed, since a session should run smoothly.', feedback: 'Smoothness is not the goal. Fixing the bare failure card would remove the very moment most likely to teach you something.' },
        ],
        then: 'Separate your own findings the same way: repair what stops the task, and leave the design weaknesses in place to be observed.',
      },
      terms: [{ term: 'Self-pilot', meaning: 'Walking your own prototype to find broken links and missing screens. It checks the materials, never the design.' }],
      start: 'Do the task yourself, slowly, and stop every time you have to explain something to yourself.',
      enough: 'Nothing is missing that would force you to invent a screen while someone is watching.' },
    { expect: 'The task in the exact words you will say, and how you reset between attempts.',
      fields: ['scenario', 'reset'],
      terms: [{ term: 'Neutral task', meaning: 'A goal with a situation and no route. If it contains a button name, you have given away the answer.' }],
      start: 'Read your Lesson 3 task aloud and cross out every word that names part of the interface.',
      enough: 'Someone could attempt the task without you saying anything else.' },
    { expect: 'What this prototype cannot establish, where the screens are, and the repair the Check questions asked for.',
      fields: ['limitations', 'photo-reference', 'improvement-made'],
      start: 'List everything a person might reasonably conclude from a paper session that would be wrong.',
      enough: 'The list names keyboard and screen-reader behaviour and anything requiring a server.' },
  ],
  checks: [
    {
      question: 'Your paper prototype works well in the session. What may you claim from that?',
      options: [
        { label: 'That the intended behaviour made sense to that person on paper, which says nothing about a built version.', correct: true, feedback: 'Paper reaches comprehension and sequence. Speed, keyboard access, screen-reader output and anything a server does are all outside what you just saw.' },
        { label: 'That the design works and can be built as drawn.', feedback: 'A built version introduces waiting, errors, focus order and states you never drew. Those are where designs usually fail.' },
        { label: 'That the flow is accessible, since you read every card aloud.', feedback: 'Reading aloud is you, not the technology. Whether a screen reader would announce it in that order is a property of code you have not written.' },
      ],
      repair: 'Reread your limitations in step 5. If it does not name keyboard and screen-reader behaviour and anything a server would do, add them and note the change.',
      recheck: 'The limitations distinguish what paper showed from what only a build could show.',
    },
    {
      question: 'Your task card says: “Use the filter to find Saturday’s pottery class and press Reserve.” What is wrong?',
      options: [
        { label: 'It contains the route, so you will watch someone follow instructions rather than find their way.', correct: true, feedback: 'Naming the filter and the button hands over both decisions you wanted to observe. The session becomes a test of whether they can follow directions.' },
        { label: 'Nothing: being specific stops the person getting lost.', feedback: 'Getting lost is the finding. If you steer them past it, you have removed the only part that could have taught you something.' },
        { label: 'It is too long for someone to remember.', feedback: 'Length is a small matter; you can leave the card with them. The route inside it is the problem.' },
      ],
      repair: 'Rewrite your task in step 4 as a goal and a situation with no interface words, then record the change in step 5.',
      recheck: 'The task names no button, link or filter, and still says what a good outcome would be for the person.',
    },
    {
      question: 'You have one evening. Do you spend it drawing more screens or on the failure card and the reset?',
      options: [
        { label: 'The failure card and the reset, because the session collapses without them.', correct: true, feedback: 'A missing failure card means improvising mid-session; no reset means the second attempt is not comparable. Extra screens rarely change what you learn.' },
        { label: 'More screens, so the person can explore naturally.', feedback: 'Exploration is pleasant and it is not the task. More surface makes every observation harder to attribute.' },
        { label: 'Neither: colour and typography make people take it seriously.', feedback: 'Polish on paper mostly buys politeness. People criticise a rough sketch more freely, which is what you want.' },
      ],
      repair: 'Check step 1 and step 4: if you have no failure card or no reset, add them before any session, then note it in step 5.',
      recheck: 'One failure card exists with a recovery, and the reset lets a second person start from the same place.',
    },
  ],
  saveRoute: {
    auto: 'What you type here saves by itself, on this device first and then online. The cards themselves stay on your table.',
    external: 'Keep the numbered screens and the task card in your own folder. Photograph them if you like and write the file name here; naming a file does not upload it.',
    creator: 'Your creator reads the state list, the task and the limitations. Share photographs the way you normally share files if you want him to see the cards.',
    next: 'Open Your work and choose Ready for review. Lesson 5 runs the task with a person if you have one, and honestly as a self-pilot if you do not.',
  },
};

const observing: Guided = {
  route: paperRoute('the before and after versions of the screen you repair'),
  worksheet: [
    { id: 'prepare', title: 'Before you start', fields: [
      { id: 'session-status', label: 'What is actually happening', kind: 'choice', options: ['A consenting adult is taking part', 'Self-pilot only: nobody was available'], hint: 'Choose honestly. A self-pilot is a complete answer to this lesson.' },
      { id: 'consent-confirmed', label: 'If someone is taking part, what you said before starting', kind: 'long', hint: 'Voluntary, can stop, what the notes are for, no recording without asking.' },
    ] },
    { id: 'observe', title: 'What happened', intro: 'Behaviour first. Reasons come in the next step.', fields: [
      { id: 'observation-1', label: 'Observation 1 · what they did or said', kind: 'long', example: 'Example (made up): she asked whether “materials supplied” included a sketchbook, then went back to the class list.' },
      { id: 'observation-2', label: 'Observation 2 · what they did or said', kind: 'long' },
      { id: 'help-given', label: 'Any help you gave, and when', kind: 'long', hint: 'Record it. Help changes what the outcome can mean.', example: 'Example (made up): after two minutes I said “the details are on the class page”, which is how she found it.' },
      { id: 'task-outcome', label: 'How the attempt ended', kind: 'choice', options: ['Finished without help', 'Finished after help from me', 'Did not finish', 'Self-pilot: not applicable'] },
    ] },
    { id: 'interpret', title: 'What it might mean', fields: [
      { id: 'explanation-1', label: 'A possible reason for observation 1', kind: 'long' },
      { id: 'explanation-2', label: 'A possible reason for observation 2', kind: 'long' },
      { id: 'contrary', label: 'Anything that argues against your reading', kind: 'short' },
      { id: 'severity', label: 'Which of the two matters more for finishing the task, and why', kind: 'long' },
    ] },
    { id: 'repair', title: 'One bounded change', fields: [
      { id: 'original-kept', label: 'Where the untouched original is', kind: 'short' },
      { id: 'repair', label: 'The one thing you changed', kind: 'long', hint: 'One. Everything else stays as it was so the comparison means something.' },
      { id: 'expected-change', label: 'What you expect to be different, and what stays untested', kind: 'long' },
    ] },
    { id: 'report', title: 'The short report', fields: [
      { id: 'report-evidence', label: 'Evidence', kind: 'long', hint: 'What you saw, with the session type beside it.' },
      { id: 'report-decision', label: 'Decision', kind: 'short' },
      { id: 'report-revision', label: 'Revision', kind: 'short' },
      { id: 'report-next-check', label: 'Next check', kind: 'short', hint: 'Who would you watch, doing what, to find out whether the repair helped?' },
      { id: 'photo-reference', label: 'Where the before and after versions live', kind: 'short' },
      { id: 'improvement-made', label: 'What you changed after the Check questions', kind: 'long' },
    ] },
  ],
  guide: [
    { expect: 'An honest session type, and the consent words if someone is taking part.',
      fields: ['session-status', 'consent-confirmed'],
      terms: [
        { term: 'Consent', meaning: 'Agreement given before you start, which they can withdraw at any moment without explaining.' },
        { term: 'Self-pilot', meaning: 'You attempting your own task. It checks the materials and cannot produce a finding about other people.' },
      ],
      start: 'If nobody is available, choose self-pilot now and keep going. The lesson works either way.',
      enough: 'The status matches what is really happening today.' },
    { expect: 'Two observations, any help you gave, and how the attempt ended.',
      fields: ['observation-1', 'observation-2', 'help-given', 'task-outcome'],
      demo: {
        scenario: 'Made-up example. Two lines from a session, written first the way that hides what happened.',
        beats: [
          { label: 'What I wrote at the time', text: '“She was confused by the materials section and struggled with the booking.” Two conclusions and no events.' },
          { label: 'What I could actually see', text: 'She read the materials line, asked whether “materials supplied” included a sketchbook, and went back to the class list twice.' },
          { label: 'The help I nearly did not record', text: 'After two minutes I said “the details are on the class page”. She found it immediately afterwards.' },
          { label: 'Why that matters', text: 'Without that line the notes say she completed the task. With it, they say she completed it after being told where to look, which is a different result entirely.' },
          { label: 'Where the reason went', text: '“The summary may be ambiguous” moved to interpretations, where someone can disagree with me without disagreeing about what happened.' },
        ],
        wrongTurn: 'The wrong turn is writing “confused”. It feels like an observation because you were there, and it cannot be checked by anyone who was not.',
        tradeoff: 'Behavioural notes are longer and duller to write in the moment. They are the only kind that still means something a week later.',
        uncertainty: 'Still unknown: whether the sketchbook question is common or particular to her. One session cannot say.',
      },
      terms: [
        { term: 'Assisted completion', meaning: 'Finishing after you intervened. It is not the same result as finishing alone, and the notes must show which happened.' },
      ],
      start: 'Let them work. Wait longer than feels comfortable before saying anything, and write down whatever you say.',
      enough: 'Nothing in the observation boxes is a word like confused, frustrated or careless.' },
    { expect: 'A possible reason for each observation, anything arguing against it, and which one matters more.',
      fields: ['explanation-1', 'explanation-2', 'contrary', 'severity'],
      supported: {
        material: 'A supplied line from someone else’s session: “The participant clicked Reserve twice, then said ‘I don’t know if that worked’. The facilitator confirmed the booking had gone through.”',
        question: 'How should this be recorded?',
        options: [
          { label: 'Observed: two presses and that sentence. Assisted: the facilitator confirmed it. Interpretation: the button gave no visible feedback.', correct: true, feedback: 'All three parts are separated, so a reader can see what happened, what you did, and what you concluded. The missing feedback is a strong reading and it is still a reading.' },
          { label: 'Observed: the participant was unsure whether the booking worked.', feedback: 'Unsure is your interpretation of the sentence and the second press. Close to certain, and still not what you saw.' },
          { label: 'Finding: the confirmation is broken and needs a loading state.', feedback: 'That is a recommendation built on one moment, and it skips both the observation and the fact that you intervened.' },
          { label: 'Observed: the participant double-clicked, which is normal behaviour for older users.', feedback: 'It adds a claim about a whole group from one person, and it explains away the very thing you should be curious about.' },
        ],
        then: 'Split your own two observations the same way, and make sure any help you gave is recorded beside the outcome rather than inside it.',
      },
      terms: [{ term: 'Severity', meaning: 'How much an issue affects finishing the task. Not how annoying it looked, and not how often it happened in one session.' }],
      start: 'For each observation write “this might be because…” and stop before proposing a fix.',
      enough: 'The severity reason names the consequence for the person, not your preference.' },
    { expect: 'The original kept, one bounded change, and what you expect versus what stays untested.',
      fields: ['original-kept', 'repair', 'expected-change'],
      terms: [{ term: 'Bounded repair', meaning: 'One change addressing one issue, so the before and after can be compared.' }],
      start: 'Copy or photograph the original first, then change exactly one thing.',
      enough: 'A reader could name the single difference between the two versions.' },
    { expect: 'Four short sections, where the versions live, and the repair the Check questions asked for.',
      fields: ['report-evidence', 'report-decision', 'report-revision', 'report-next-check', 'photo-reference', 'improvement-made'],
      start: 'Write Evidence first and put the session type in its first sentence.',
      enough: 'No sentence claims the repair worked, and the next check names who would do what.' },
  ],
  checks: [
    {
      question: 'The participant finished the task after you told her where the details were. How should the outcome read?',
      options: [
        { label: 'Finished after help, with the help itself recorded and quoted.', correct: true, feedback: 'The same words that helped her would not be there in real use. Recording them is what stops a rescued attempt being counted as a success.' },
        { label: 'Finished, since she completed it and the help was minor.', feedback: 'Minor help still supplied the missing piece. Reported as a completion, it makes the design look like it worked when you made it work.' },
        { label: 'Did not finish, because she needed help.', feedback: 'Too severe and it loses information. She did finish; the honest record says what it took.' },
      ],
      repair: 'Check the help and outcome boxes in step 2. If you helped and the outcome says finished without help, correct it and record the change in step 5.',
      recheck: 'The outcome names whether help was given, and the help is written down where it happened.',
    },
    {
      question: 'After the repair you write: “This fixes the problem.” What is the honest version?',
      options: [
        { label: 'That you changed the design in response to evidence, and it needs another check before anyone can say it helped.', correct: true, feedback: 'A repair is a response, not a result. The next check is the sentence that keeps it that way and tells you what to do next.' },
        { label: 'It is fine: the change directly addresses what you observed.', feedback: 'Addressing an observation is the reason to try it. Whether it works for the next person is unknown until someone else meets it.' },
        { label: 'It is fine if the participant agreed the new version was better.', feedback: 'Shown two versions by the person who made them, agreement is close to guaranteed and tells you very little.' },
      ],
      repair: 'Reread your Revision and Next check sections in step 5. Rewrite any claim of a fix as an expectation with the observation that would test it, then note the change.',
      recheck: 'The report separates what changed from what remains untested, and the next check names a person and a task.',
    },
    {
      question: 'Nobody was available, so you ran the task yourself. What can the report say?',
      options: [
        { label: 'That it was a self-pilot, what it found about the materials, and that no participant evidence exists yet.', correct: true, feedback: 'A self-pilot finds broken paths, missing cards and unclear wording, which is real and worth reporting. It cannot tell you what a first-time visitor would do.' },
        { label: 'That the flow works, since you completed it without difficulty.', feedback: 'You designed it, so you know where everything is. Your fluency is the least informative result available.' },
        { label: 'The findings you would expect a participant to have produced.', feedback: 'That is an invented participant. Once written it gets quoted, and everything else you report becomes suspect.' },
        { label: 'Nothing, since the lesson needs a participant.', feedback: 'The lesson is complete with a self-pilot honestly reported. A dated recruitment gap is a result, not a failure.' },
      ],
      repair: 'Check the session type in step 1 and the Evidence section in step 5. Make sure the session type appears in the first sentence of the report, then record the change.',
      recheck: 'A reader learns in the first line whether a participant took part, and no conclusion outruns that.',
    },
  ],
  saveRoute: {
    auto: 'Your notes, interpretations and report save as you type, on this device first and then online.',
    external: 'Keep the before and after screens, and any consent record, in your own private folder. No participant name or contact detail belongs in this worksheet, and nothing is uploaded.',
    creator: 'Your creator reads the report, the observations and the limits once you choose Ready for review. This is practice evidence for later reasoning, not a portfolio case study.',
    next: 'Open Your work and choose Ready for review. This closes Module 2; Module 3 returns to visual foundations with the evidence you have gathered.',
  },
};

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
    checks: detectiveChecks,
    saveRoute: {
      auto: 'Everything you type in the worksheet saves by itself: first on this device, then online a moment later. The line above the steps tells you which, and says “Saved online” when it has reached the server.',
      external: 'Nothing is uploaded from your computer. If you kept anything outside the app — a photo of a sketch, a text file — it stays where it is; write its file name in Your work so you can find it again.',
      creator: 'Your creator can read this worksheet, your notes and your work reference. He cannot change them, and he sees them only as they are saved. Choosing Ready for review in Your work is how you say a version is ready to be read.',
      next: 'Open Your work, read your worksheet answers back, add anything the worksheet did not ask for, then choose Ready for review. Lesson 2 starts from this same walkthrough, so keep it.',
    },
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
    alternative: 'Write the organizer’s objection “We cannot add ongoing staff work.” Reconsider your three options and defend a choice.',
    ...framing,
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
    alternative: 'Underline words that suggest an answer, remove them, and rehearse the question aloud without explaining your proposed solution.',
    ...interviewing,
  },
  'week1-day4-v1': {
    activity: 'Paper flow laboratory', visual: true,
    mission: 'Lay out the workshop reservation journey on paper. Trace a normal route, then inject “no places left” and draw how the person recovers.',
    columns: 'Node ID | Person’s action | System response | Next node | Failure and recovery | Evidence / assumption',
    first: 'A | [starting action] | [what appears] | [node ID] | [alternative route] | [source or assumption]',
    hints: ['Use one box per state and label arrows with the action that changes state.', 'A failure box needs a next action: revise, retry, leave safely or choose another option.'],
    adequate: 'A reader can trace the path and recover from failure without guessing what an arrow means.',
    handoff: 'Bring the numbered flow to the three-screen interface exercise.',
    ...flowMapping,
  },
  'week1-day5-v1': {
    activity: 'Screen construction workshop', visual: true,
    mission: 'Turn your numbered flow into three paper screens. Use real labels and content so another person can follow the task without your narration.',
    columns: 'Screen / flow node | Main action | Information needed | State / error | Why this order',
    first: '[screen name and node] | [verb + object] | [actual content] | [feedback] | [goal supported]',
    hints: ['Draw screen boundaries first, then place the information needed before the main action.', 'Cover your annotations and try following only the visible labels. Add missing feedback where you must explain aloud.'],
    adequate: 'Three screens trace to the flow, with legible labels, feedback and a reason for information priority.',
    handoff: 'Save the original screens before critique so revisions remain comparable.',
    ...screenMaking,
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
    alternative: 'Try to describe a situation where your repair would make the task harder. Record how you would check that risk.',
    ...repairClinic,
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
    alternative: 'Record or speak the presentation once. Note where you cannot point to supporting work, then repair that sentence.',
    ...decisionNote,
  },
  'week2-day1-v1': {
    activity: 'Research planning desk',
    mission: 'Choose a real uncertainty from Module 1 and plan the smallest ethical study that could change your decision.',
    columns: 'Decision | Uncertainty | Method and why | Participant access | Consent | Task / question | Limitation',
    first: '[decision at risk] | [unknown] | [method] | [reachable adults, no names here] | [consent plan] | [neutral task] | [boundary]',
    hints: ['Choose the question before the method; an interview about past behavior and a prototype task answer different questions.', 'If access is missing, record who is needed and prepare materials. A self-pilot only checks the materials.'],
    adequate: 'The method fits the uncertainty and includes consent, neutral tasks, recruitment status and limits.',
    handoff: 'Bring actual anonymized notes to synthesis; otherwise use clearly labelled practice notes without asserting findings.',
    ...studyPlan,
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
    alternative: 'Pick your strongest claim and trace it backward to a note. Write one other explanation for that same note.',
    ...synthesis,
  },
  'week2-day3-v1': {
    activity: 'Opportunity decision table',
    mission: 'Compare three changes against your evidence, select a small opportunity and write the observation that could disprove its value.',
    columns: 'Option | Evidence IDs | Benefit hypothesis | Effort / risk | Test | Signal to reconsider',
    first: '[option] | [note IDs] | [expected change] | [constraint] | [neutral task] | [observable result]',
    hints: ['A large feature list makes it harder to learn which change mattered.', 'Write your reconsideration signal before testing, so an inconvenient result cannot quietly disappear.'],
    adequate: 'The selected opportunity is smaller than the whole product and has an evidence link and a disconfirming signal.',
    handoff: 'Bring the chosen hypothesis and test task into prototyping.',
    ...opportunity,
  },
  'week2-day4-v1': {
    activity: 'Paper prototype theatre', visual: true,
    mission: 'Build only the states needed to test your chosen hypothesis. Act as the system by swapping paper screens after the person indicates an action.',
    columns: 'State ID | Visible content | Trigger | Next state | What this prototype can / cannot test',
    first: 'S01 | [actual content] | [person’s action] | [state ID] | [scope boundary]',
    hints: ['Write the neutral task on a separate card; do not include the button label they should press.', 'Prepare failure and recovery cards before the pilot. A paper prototype cannot establish keyboard or screen-reader behavior.'],
    adequate: 'The pilot can proceed without designing missing screens mid-session; scope and evidence limits are explicit.',
    handoff: 'Save a numbered screen set, task script and pilot corrections for evaluation.',
    ...prototyping,
  },
  'week2-day5-v1': {
    activity: 'Observe, change, compare', visual: true,
    mission: 'Run the consented task if a participant is available. Preserve the first design, repair one observed issue and explain the remaining uncertainty.',
    columns: 'Session / source | Task | Observed action | Interpretation | Severity reason | Revision reference | Recheck / limitation',
    first: '[anonymous ID or SELF-PILOT] | [task] | [actual action] | [possible reason] | [consequence] | [before and after] | [next test]',
    hints: ['Let the person attempt the task before helping. Record help given because it changes what you can conclude.', 'With no participant, report a self-pilot and recruitment gap. Do not turn your own expectation into a usability finding.'],
    adequate: 'The report separates observations from explanations, shows a traceable revision and avoids improvement percentages without measurements.',
    handoff: 'Keep this practice evidence for Module 4 reasoning and future research planning; it is not yet a complete portfolio case study.',
    ...observing,
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
    ...(a.checks ? { checks: a.checks } : {}),
    ...(a.saveRoute ? { saveRoute: a.saveRoute } : {}),
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
