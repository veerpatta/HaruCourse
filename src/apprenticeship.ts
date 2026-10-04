import type { ActiveCheck, Apprenticeship, GuideStep, Lesson, WorksheetField, WorksheetSection } from './teaching';
import { numbered, paperRoute, textRoute, type Guided } from './guided';
import { guided03 } from './guided03';
import { guided04 } from './guided04';
import { guided05 } from './guided05';
import { guided06 } from './guided06';
import { guided07 } from './guided07';
import { guided08 } from './guided08';
import { guided09 } from './guided09';
import { guided10 } from './guided10';
import { guided11 } from './guided11';
import { guided12 } from './guided12';
import { guided13 } from './guided13';
import { guided14 } from './guided14';
import { guided15 } from './guided15';
import { guided16 } from './guided16';
import { guided17 } from './guided17';
import { guided18 } from './guided18';
import { guided19 } from './guided19';
import { guided20 } from './guided20';
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
  transfer?: Apprenticeship['transfer'];
  material?: string[];
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
    { id: 'define-product-design', label: 'Product design is…', kind: 'short', hint: 'Try: what it decides, and who it is for.', example: 'Example (made up): Product design is deciding what a service should help someone do, and shaping it so it actually works for them.' },
    { id: 'define-ux', label: 'UX is…', kind: 'short', hint: 'The whole task, from the moment somebody needs something to the moment it is done.' },
    { id: 'define-ui', label: 'UI is…', kind: 'short', hint: 'The buttons, words and layout a person actually looks at.' },
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
    { id: 'business-goal', label: 'One thing the company behind the app probably wants', kind: 'short', hint: 'The app is run by someone who needs it to work for them too: more bookings, fewer phone calls, fewer refunds. A guess is fine here.', example: 'Example (made up): more people finishing a booking on their first visit, so staff answer fewer questions by phone.' },
  ] },
  { id: 'compare', title: 'Two improvements and how to check them', intro: 'One about looks, one about how the task behaves. Each needs an observation that would show whether it helped.', fields: [
    { id: 'visual-improvement', label: 'A visual improvement', kind: 'short', example: 'Example (made up): Make the date and price the same size as the class title.' },
    { id: 'visual-check', label: 'How would you know the look change helped?', kind: 'short', hint: 'Name something you could watch someone do. “It looks better” is not something you can watch.' },
    { id: 'behavior-improvement', label: 'A change to how the task behaves', kind: 'short', hint: 'Not colour or size: what happens, in what order, or what the app remembers.', example: 'Example (made up): Ask for the date before showing results, so sold-out classes are hidden.' },
    { id: 'behavior-check', label: 'How would you know the behaviour change helped?', kind: 'short', hint: 'Again, something you could watch. It should be possible for the answer to be no.' },
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
      { label: 'It names a fix before saying who is stuck or what shows it.', was: ['No. It names a repair before saying who is stuck and how anyone would know.'], correct: true, feedback: 'It may even be the right repair, but it skips the part that tells you whether it is: who struggled, with what task, and what you saw.' },
      { label: 'It is, because a small button is a real usability problem.', was: ['Yes, because a small button is a real usability problem.'], feedback: 'Size might be the cause, or the price might be unclear, or the date might be missing. A problem statement names the person and the difficulty, so more than one repair can compete.' },
      { label: 'It is, provided the bigger button gets tested afterwards.', was: ['Yes, as long as you tested the bigger button afterwards.'], feedback: 'Testing a repair only tells you whether that repair worked. It cannot tell you what people were actually struggling with, because you never wrote it down.' },
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
    sorter: {
      intro: 'Six lines from someone else’s notes, all made up for practice. She walked through a class-booking app on her own and spoke to nobody. Label each line the way you would label your own.',
      options: ['observed', 'inferred', 'unknown'],
      items: [
        { id: 'sponsored', text: 'The first two cards in the list say “Sponsored” in small grey letters.', answer: 'observed',
          feedback: {
            observed: 'You could point at it. Anyone opening the same screen would see the same two cards, which is what makes it observed.',
            inferred: 'Nothing is being worked out here. The words are on the screen, so this one is simply seen.',
            unknown: 'The screen answers this completely. Unknown is for things it cannot tell you.',
          } },
        { id: 'skip', text: 'People skip past the sponsored cards without reading them.', answer: 'inferred',
          feedback: {
            observed: 'She only watched herself. What other people do is never visible from one person’s walkthrough, however likely it feels.',
            inferred: 'That is the honest label. It may well be true, and it is her reading of other people rather than something she saw.',
            unknown: 'She does have a reading here, so inferred keeps it visible as something to go and check. Unknown would throw the idea away.',
          } },
        { id: 'price', text: 'The total price is not shown until the payment step.', answer: 'observed',
          feedback: {
            observed: 'She followed the task and the price appeared where it appeared. That is a fact about the screens.',
            inferred: 'No interpretation is involved. She reached the payment step and saw where the number first arrived.',
            unknown: 'She walked the whole task, so this one is settled.',
          } },
        { id: 'tricked', text: 'The late price makes people feel tricked.', answer: 'inferred',
          feedback: {
            observed: 'Feelings belong to other people, and nobody was asked. The late price is observed; how it lands is not.',
            inferred: 'A reasonable reading, and still a reading. Written down as inferred, it becomes a question worth asking someone.',
            unknown: 'She has a clear guess, so inferred is more useful. It says what to check rather than giving up on it.',
          } },
        { id: 'refund', text: 'Whether the class can be cancelled for a refund.', answer: 'unknown',
          feedback: {
            observed: 'Nothing on the screens said this. If it had, she could point at it.',
            inferred: 'Inferred means she has a reading of it. Here she has nothing at all to read, only a blank.',
            unknown: 'The screen never mentions it and she has no idea either way. Naming that blank is the whole point of the label.',
          } },
        { id: 'picker', text: 'The date picker is confusing.', answer: 'inferred',
          feedback: {
            observed: 'Confusing is a judgement, not a thing on the screen. What she could point at is that the picker opens on today.',
            inferred: 'A judgement of her own, which is what inferred means. It is worth splitting too: write what the picker does, then keep “confusing” as her reading of it.',
            unknown: 'She used the picker, so she is not without information. This is her conclusion about it.',
          } },
      ],
      then: 'Now do the same with your own first entry. Put the part you could point at in “What I saw or did”, and let the label carry your reading of why.',
      pattern: 'Look back at the two hardest lines, skipping the cards and feeling tricked. In both, half the sentence is on the screen and half is about somebody else. The sponsored cards are there to see; the skipping is not. The late price is there to see; the feeling is not.',
    },
    terms: [
      { term: 'Observed', meaning: 'You saw it or did it. You could point to it on the screen.' },
      { term: 'Inferred', meaning: 'Your reading of why something is there or how others behave. It may be right; it is not yet evidence.' },
      { term: 'Unknown', meaning: 'You cannot tell from the screen alone. Naming it is the point.' },
    ],
    start: 'Take the first action from your list and write what was on the screen at that moment. Label it. Then the next action.',
    enough: 'At least one entry is inferred or unknown. If all five are observed, you have not yet written down a guess, and everyone has guesses.' },
  { expect: 'Two improvements, one visual and one about behaviour, each with an observation that would show whether it helped.',
    fields: ['visual-improvement', 'visual-check', 'behavior-improvement', 'behavior-check'],
    demo: {
      scenario: 'Made-up example. Writing the “how would I know?” line for one improvement, and throwing the first version away.',
      beats: [
        { label: 'The improvement', text: 'Show the total cost, including materials, on the class card instead of at the payment step.' },
        { label: 'What I wrote first', text: '“I would know it helped because people would like it more.” I was pleased with it for about a minute.' },
        { label: 'Why it is useless', text: 'There is no version of the world where I could see that. Whatever happened next, I could read it as people liking it more.' },
        { label: 'What I changed it to', text: 'Ask two people to find what Saturday’s class would cost them in total, and watch whether they go to the payment step to find out.' },
        { label: 'What makes that different', text: 'It could come out badly. If they still go to payment, the change did not do its job, and I will have to admit it.' },
      ],
      wrongTurn: 'The wrong turn is a check that cannot fail. “People would like it more” sounds like a measure and quietly guarantees a pass.',
      tradeoff: 'The watchable version is narrower and slightly awkward to arrange. It is the only kind that can tell you that you were wrong.',
      uncertainty: 'Still unknown: whether finding the cost faster makes anyone more likely to book. That is a much bigger question than this check.',
    },
    terms: [
      { term: 'Hypothesis', meaning: 'A change you believe would help, stated so that something you could see would prove it wrong.' },
      { term: 'Behaviour improvement', meaning: 'A change in what the app does, asks or remembers, rather than how it looks.' },
    ],
    start: 'Look at your inferred and unknown entries. Each one is a place an improvement could be tested.',
    enough: 'Each check names something you could watch or count, not “people would like it more”.' },
  { expect: 'One question you could not answer from the screen, your next action, and the one change the Check questions sent you back to make.',
    fields: ['open-question', 'next-action', 'improvement-made'],
    terms: [
      { term: 'Open question', meaning: 'Something the screen could not tell you. Writing it down is how you remember to go and find out.' },
      { term: 'Repair', meaning: 'One specific change to one answer you already wrote, not a rewrite. Each Check question names one.' },
    ],
    start: 'Reread your unknown entries; one of them is your question. Answer the three Check questions before filling the last box, so you know what to change.',
    enough: 'Your next action is a single line you could act on in five minutes when you return, and the last box names one answer you actually changed.' },
];

// Guided material for the rest of Module 1, one entry per lesson, authored
// against each lesson's own steps and outputs. Field ids are record keys.
// The Guided shape and its route helpers live in ./guided, so a module's
// material can sit in its own file without importing this table back.

const framing: Guided = {
  route: textRoute,
  worksheet: [
    { id: 'review', title: 'Explanations you have not verified', intro: 'From your Lesson 1 table: the inferred or unknown entries that still read like facts. No Lesson 1 table? Use explanations someone might give for the practice brief.', fields: numbered('unverified', (n) => `Unverified explanation ${n}`, 2, 'short', (n) => (n === 1 ? { hint: 'No Lesson 1 table? Write one reason someone might give for why first-time attendees arrive without aprons, worded as the guess it is.', example: 'Example (made up): Attendees skip the materials list because it is below the fold.' } : {})) },
    { id: 'frames', title: 'Three problem frames', intro: 'Person, situation, unmet goal and consequence. No feature names: not checkbox, reminder, app or button. Mark anything the brief does not state with (assumed).', fields: numbered('frame', (n) => `Frame ${n}`, 3, 'long', (n) => (n === 1 ? { hint: 'One sentence each for who, when, what they need and what goes wrong if they do not get it. Put (assumed) after every detail you added that the brief or your Lesson 1 evidence does not state.', example: 'Example (made up): A first-time attendee, the evening before (assumed), needs to know what to bring, otherwise she arrives without an apron and loses the first twenty minutes (assumed).' } : {})) },
    { id: 'assumptions', title: 'Six assumptions', intro: 'Each one: the claim, what happens if it is wrong, and your confidence (low, medium or high). The details you marked (assumed) in your frames belong here too.', fields: [
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
      { id: 'improvement-made', label: 'What you changed after the Check questions, or why no change was needed', kind: 'long', hint: 'The Check section sends you back to one answer. Name which one and why you changed it.' },
    ] },
  ],
  checks: [
    {
      question: 'The brief says only that some first-time attendees arrive without aprons. Which line is a problem frame rather than a disguised feature?',
      options: [
        { label: 'A first-time attendee arrives without an apron because she could not tell what to bring (assumed).', correct: true, was: ['A first-time attendee, the evening before, cannot tell what to bring, so she arrives without materials and misses the start.'], feedback: 'It names a person, a moment and what goes wrong for her, and the one detail the brief never gave — why it happens — is marked as assumed. A reminder, a printed list or spare aprons could all answer it.' },
        { label: 'Attendees need a reminder email the day before the class, so nobody arrives without an apron.', was: ['Attendees need a reminder email the day before the workshop.'], feedback: 'This is one answer wearing the clothes of a problem. Written this way only one response can win, and you never find out whether email is read at all.' },
        { label: 'The booking page needs a clearer materials section, placed where first-time attendees cannot miss it.', was: ['The booking page needs a clearer materials section.'], feedback: 'It names a page and a section, so it has already decided the trouble is on that screen. The brief does not say anyone reached that screen, or looked for the list there.' },
      ],
      repair: 'Reread your three frames in step 2. If any contains a feature word — reminder, email, checkbox, page, button — rewrite it as what the person needs to have happen, and put (assumed) after any detail the brief did not give. Record the change in step 5.',
      recheck: 'Each frame names a person and a moment, every detail the brief did not give is marked (assumed), and someone else could propose a response you had not thought of.',
    },
    {
      question: 'Two assumptions are both unverified. Which do you investigate first?',
      options: [
        { label: 'The one where being wrong would do the most damage and your evidence is thinnest.', correct: true, was: ['The one where being wrong would do the most damage and you have the least evidence.'], feedback: 'Consequence and uncertainty together. An assumption you are confident about, or one that costs nothing if wrong, can wait however interesting it is.' },
        { label: 'The one that is quickest and cheapest to check, so you learn something useful today.', was: ['The one that is quickest and cheapest to check.'], feedback: 'Tempting, and sometimes it is the same assumption. On its own it leads you to answer easy questions while the expensive one stays untested.' },
        { label: 'The one your three responses all depend on, since it touches every option.', was: ['The one your three responses all depend on.'], feedback: 'Closer, because a shared dependency raises the consequence. Still incomplete: if you already have good evidence for it, checking again buys little.' },
      ],
      repair: 'Look at your two priority uncertainties in step 3. If either was chosen because it was easy, swap it for the one with the worse consequence, and say why in step 5.',
      recheck: 'Each priority names what would happen if you were wrong, and each has evidence that could disprove it.',
    },
    {
      question: 'You write beside an assumption: “Nothing could really disprove this.” What does that tell you?',
      options: [
        { label: 'Sharpen it until you can name a thing you could see that would change your mind.', correct: true, was: ['It is not an investigation yet — it needs a specific thing you could see that would change your mind.'], feedback: 'An assumption nothing could contradict cannot be tested, only defended. Making the claim more specific until something could count against it turns it into work you can do.' },
        { label: 'It is well supported, so you can safely build on it and move to the next assumption.', was: ['It is a strong assumption, so you can safely build on it.'], feedback: 'Unfalsifiable is not the same as well supported. It usually means the claim is vague rather than certain, and building on it hides the risk.' },
        { label: 'It is untestable, so delete it from the list and spend the time on the others.', was: ['It should be deleted from the list.'], feedback: 'Deleting it hides it, and the risk stays inside your frames. Sharpen it instead until you can say what evidence would count against it.' },
      ],
      repair: 'Take the priority uncertainty with the weakest evidence line and replace it with one concrete observation that would change your mind. Record it in step 5.',
      recheck: 'Both evidence lines name something a person could say or do, not a feeling.',
    },
  ],
  saveRoute: {
    auto: 'Your frames, assumptions and responses save as you type: on this device first, then online. The line above the steps says “Saved online” once the server has them.',
    external: 'Nothing is uploaded. If you sketched the responses on paper, keep the sheet and write its file name or location in Your work so you can find it beside the frames.',
    creator: 'Your creator can read this worksheet, your notes and your work reference as soon as they save online; choosing Ready for review in Your work tells him a version is ready to read. He cannot edit them.',
    next: 'Open Your work, add anything the worksheet did not ask for, then choose Ready for review. Lesson 3 turns your first priority uncertainty into interview questions, so keep it where you can see it.',
  },
  guide: [
    { expect: 'Two explanations from Lesson 1 that you wrote down but never checked, or two guesses about the practice brief.', fields: ['unverified-1', 'unverified-2'],
      terms: [{ term: 'Verified', meaning: 'You saw it happen, or someone told you it happened to them. Everything else is a guess, however sensible.' }],
      start: 'Open your Lesson 1 worksheet and look only at the rows labelled inferred or unknown. Without it, read the practice brief and write two reasons someone might give for it.', enough: 'Each line is something you believe about other people, not something you observed yourself.' },
    { expect: 'Three frames, each naming a person, a situation, an unmet goal and a consequence, with no feature words and every added detail marked (assumed).', fields: ['frame-1', 'frame-2', 'frame-3'],
      demo: {
        scenario: 'Made-up example. The organiser’s brief says only: “Some first-time attendees arrive without aprons. Could we send a reminder?” Here is the frame being written, including the version that had to be thrown away and the details that had to be marked.',
        beats: [
          { label: 'What the brief actually says', text: 'Some first-time attendees arrive without aprons, and the organiser already has a fix in mind. It does not say when they prepare, whether a materials list exists, or what arriving without one costs.' },
          { label: 'My first attempt', text: '“Attendees need a reminder email with the materials list the day before.” I wrote it in about four seconds.' },
          { label: 'Why I threw it away', text: 'It decides that the answer is an email. If nobody opens the email, or if the list only exists in the organiser’s head, that frame cannot lead anywhere useful.' },
          { label: 'The frame I kept', text: 'A first-time attendee, the evening before, cannot tell what to bring, so she arrives without an apron and loses the first twenty minutes of a two-hour class.' },
          { label: 'What I had to mark', text: '“The evening before”, “twenty minutes” and “a two-hour class” are mine, not the brief’s. Each got (assumed) beside it and a line on my assumptions list. Only “first-time” and “without an apron” came from the organiser.' },
          { label: 'What that opens up', text: 'Now an email, a line on the ticket, a text message, or the studio simply keeping spare aprons are all candidates, and they can be compared.' },
        ],
        wrongTurn: 'Two wrong turns sit close together. One is writing the response you already have in mind and calling it the problem. The other is adding vivid details — the evening before, twenty minutes — without marking them, so a guess reads like something the organiser reported.',
        tradeoff: 'The longer frame takes more thought and can sound like avoiding the question when someone wants a fix today. It buys you the ability to be wrong about the fix without being wrong about the work.',
        uncertainty: 'Still unknown: whether attendees ever see the confirmation email, when they actually prepare, and whether the studio can supply spares. Every (assumed) in the frame is on that list.',
      },
      terms: [{ term: 'Problem frame', meaning: 'A description of who is stuck, when, and what it costs them. It does not say what to build.' }, { term: 'Feature', meaning: 'A thing you could build: a reminder, a checkbox, a page. If a frame contains one, it has jumped to a solution.' }, { term: 'Assumption marker', meaning: 'Writing (assumed) after a detail you supplied yourself. The frame stays concrete, and the detail stays something to check rather than a fact.' }],
      start: 'Write “A [kind of person], [when], needs [goal], otherwise [what goes wrong].” three times with different people or moments, then put (assumed) after each detail you supplied.', enough: 'You could hand each frame to another designer and they could propose something you did not think of, and they could tell which details came from the brief.' },
    { expect: 'Six assumptions with consequence and confidence, and the two you will investigate with what would change your mind.',
      fields: ['assumption-1', 'assumption-2', 'assumption-3', 'assumption-4', 'assumption-5', 'assumption-6', 'priority-1', 'priority-1-evidence', 'priority-2', 'priority-2-evidence'],
      reveal: { first: 1, group: 1, count: 6, addLabel: 'Add another assumption', note: 'One at a time. Six is the target; each is something your frames quietly depend on.' },
      supported: {
        material: 'A supplied pair from the same made-up workshop. Assumption A: “Attendees read the confirmation email.” Nobody has checked; if it is wrong, every message you send is unread. Assumption B: “Attendees would prefer a printed list to a text message.” Nobody has checked; if it is wrong, you send the same information in a slightly different form.',
        question: 'Which one do you investigate first, and why?',
        options: [
          { label: 'A, because if it is wrong, every message you send goes unread.', correct: true, was: ['A, because being wrong about it breaks every other response you might choose.'], feedback: 'Both are unchecked, so uncertainty does not separate them. Consequence does: if the email is never read, a better-worded email cannot help, and neither can anything else delivered that way.' },
          { label: 'B, because preference questions are quick to ask and easy to act on.', was: ['B, because preference questions are quick to ask people.'], feedback: 'Speed is a real consideration, but here it buys the cheap answer. You would learn a format preference while still not knowing whether any message arrives.' },
          { label: 'Neither first: ask about both in one conversation to save time.', was: ['Neither: ask about both in the same conversation to save time.'], feedback: 'Reasonable in practice, and it still needs an order. Asked together, the preference question often eats the time, because people find it easier to answer than recalling what they actually did.' },
          { label: 'A, because printed lists cost money while email costs nothing.', was: ['A, because printed lists cost money and email is free.'], feedback: 'The right assumption for the wrong reason. Cost belongs in the response comparison, not in deciding which uncertainty threatens the work most.' },
        ],
        then: 'Apply the same test to your own six: for each, ask what breaks if it is wrong, then pick the two where the damage is worst and the evidence thinnest.',
      },
      example: 'Example (made up): “The organiser sends the list a week before” has low confidence and a serious consequence, so it goes first; “attendees own an apron” is low-consequence and waits.',
      terms: [{ term: 'Assumption', meaning: 'Something your frames depend on that you have not checked.' }, { term: 'Disconfirming evidence', meaning: 'What you would have to see to conclude you were wrong. If nothing could, it is not an investigation.' }],
      start: 'Take each frame and ask “this is only a problem if…”; the ending is an assumption.', enough: 'The two priorities are the ones where being wrong costs most and you know least, and each has something concrete that could disprove it.' },
    { demo: { scenario: 'Made-up example. Three responses to the same frame, written quickly, and the discovery that two of them were the same response in different clothes.', beats: [{ label: 'The frame I was answering', text: 'A first-time attendee, the evening before, cannot tell what to bring. I gave myself ten minutes to write three responses to it.' }, { label: 'What I wrote', text: 'Send a reminder email the day before. Send a text message the day before. Move the list to the top of the confirmation email.' }, { label: 'Why that is one response, not three', text: 'All three send her words in advance and hope she reads them. If she never looks at her phone the evening before, all three fail together, and comparing them tells me nothing.' }, { label: 'The rule that unstuck me', text: 'One change to what she is told, one change to what the studio does, one change on a screen. Three different places, so they cannot all fail for the same reason.' }, { label: 'The set I kept, and one honest weakness', text: 'Print the list on the ticket; keep spare aprons in the studio cupboard; show what to bring above the Reserve button. Under the aprons I first wrote “might be popular”, which is not a weakness at all — the real one is that it costs money every term and quietly teaches people not to prepare.' }], wrongTurn: 'The wrong turn is writing three versions of the idea you already like. It fills the boxes fast and it feels like breadth, but the three collapse for the same reason and the comparison decides nothing.', tradeoff: 'Forcing one response into the studio’s hands and one onto a screen means writing at least one you do not believe in. You then have to describe it fairly to the organiser, and she may well choose it.', uncertainty: 'Still unknown: whether the studio can afford spare aprons, or would agree to keep them. Every constraint box is a guess about other people until somebody says yes or no.' }, expect: 'Three different responses, each with a constraint and a weakness.', fields: ['option-1', 'option-1-constraint', 'option-1-weakness', 'option-2', 'option-2-constraint', 'option-2-weakness', 'option-3', 'option-3-constraint', 'option-3-weakness'],
      terms: [{ term: 'Information change', meaning: 'Change what people are told, or when.' }, { term: 'Process change', meaning: 'Change what the organiser or venue does, without any screen.' }, { term: 'Interface change', meaning: 'Change something on the screen.' }],
      start: 'Write the information change first; it is usually the cheapest and shows whether a screen is needed at all.', enough: 'No two responses are variations of the same idea, and every weakness is one you would say to the organiser.' },
    { terms: [{ term: 'Investigation', meaning: 'The smallest piece of work that could change your mind about one uncertainty: who you would ask, and what you would look for.' }, { term: 'Priority uncertainty', meaning: 'The one you picked in step 3 because being wrong about it costs most and you know least.' }, { term: 'Check questions', meaning: 'The questions in the Check section. They exist to send you back to one earlier answer and change it before you save.' }], expect: 'One chosen investigation, the reason it comes first, and the change the Check questions sent you back to make.',
      fields: ['decision', 'decision-reason', 'improvement-made'],
      start: 'Pick the priority uncertainty from step 3 and name the kind of person you could actually ask. Answer the Check questions before the last box.',
      enough: 'The reason compares the cost of being wrong, not which response you like, and the last box names one answer you changed or explains why it already met the check.' },
  ],
  material: [
    'Practice brief, made up for this lesson. Use it if you have no Lesson 1 evidence. The organiser of a small pottery studio writes: “Some first-time attendees arrive without aprons. Could we send a reminder?”',
    'Stated in the brief: some first-time attendees arrive without aprons, and the organiser has proposed a reminder.',
    'Not stated, so anything you write about it is an assumption: how many people, when they prepare, whether a materials list exists or was sent, read or understood, and what arriving unprepared costs them or the class.',
    'When a frame adds a detail to make it concrete — “the evening before”, “misses the first twenty minutes” — keep it and put (assumed) after it. It then becomes something to check rather than a fact nobody reported.',
  ],
  transfer: {
    scenario: 'Made-up case: A neighbourhood tool library lends drills and ladders. Its coordinator writes: “Lots of borrowers return tools late. Can we add an overdue fine?” Nothing else is known: not how many borrowers, how late, why, or what a late return costs the next person waiting.',
    prompt: 'Write one problem frame for this case that names no feature. Put (assumed) after every detail you add beyond the coordinator’s note, and explain why you chose that person and that moment.',
    anchors: {
      weak: 'Restates the fix as the need (“borrowers need a fine” or “a reminder text”), or adds vivid details — “they forget over the weekend”, “the next borrower waits a week” — as if the coordinator had reported them.',
      adequate: 'Names a person, a moment, an unmet goal and a consequence with no feature in it — for example a borrower who needs to know when a drill is due back, otherwise the next person waits — and every added detail is marked (assumed).',
      strong: 'Adequate, plus says which marked assumption matters most to check first and why (such as whether late returns actually delay anyone), and notes that a fine is one response among several, alongside reminders or longer loans.',
    },
  },
};

const interviewing: Guided = {
  route: textRoute,
  worksheet: [
    { id: 'prepare', title: 'Purpose and consent', fields: [
      { id: 'purpose', label: 'What this conversation is for, in one sentence', kind: 'short', example: 'Example (made up): To learn what people did the last time they prepared for a workshop, so I know whether the materials list is the real problem.' },
      { id: 'consent-intro', label: 'What you will say before starting', kind: 'long', hint: 'Who you are, what the notes are for, who will read them (your course reviewer can read what you type here), when you will delete them, that they can skip or stop, and whether you will record. Ask before recording.', example: 'Example (made up): I am practising interviewing for a design course. I will take written notes, with no recording unless you agree. My reviewer will read a short summary without your name or anything that identifies you, and I will delete my notes by the end of the month. You can skip a question or stop at any time.' },
    ] },
    { id: 'write', title: 'Your questions', intro: 'About a recent real experience, never about a feature you have in mind.', fields: [
      { id: 'uncertainty', label: 'The uncertainty from Lesson 2 these questions serve', kind: 'short' },
      ...numbered('question', (n) => `Question ${n}`, 6, 'short', (n) => (n === 1 ? { hint: 'Start with “Tell me about the last time…” or “What happened when…”.', example: 'Example (made up): Tell me about the last workshop or class you went to. How did you get ready for it?' } : {})),
      { id: 'followup-1', label: 'Neutral follow-up 1', kind: 'short', example: 'Example (made up): What did you expect to happen then?' },
      { id: 'followup-2', label: 'Neutral follow-up 2', kind: 'short', hint: 'A follow-up that works after any answer: “Can you say more about that?”' },
    ] },
    { id: 'practice', title: 'The conversation', fields: [
      { id: 'session-status', label: 'What actually happened', kind: 'choice', options: ['Real conversation with a consenting adult', 'Rehearsal only: no participant evidence collected'], hint: 'Choose honestly. Rehearsal only is a complete result for this lesson: your guide, your consent wording and what reading it aloud taught you. It is not participant evidence.' },
      { id: 'observations', label: 'A de-identified summary of what the person said or did (observations only)', kind: 'long', sensitive: true, hint: 'Raw notes stay on paper or in a private file on your own device, with a date to delete them. Here, write a short summary with no names, and leave out details such as a job, a street or a family event that could identify them: removing the name alone does not make notes anonymous. Leave empty after a rehearsal.' },
      { id: 'interpretations', label: 'What you think it means (interpretations)', kind: 'long', sensitive: true, hint: 'Your reading of the summary above, kept apart from it. Leave empty after a rehearsal.' },
      { id: 'quotes', label: 'A few exact words worth keeping, only if they agreed to be quoted', kind: 'long', sensitive: true, hint: 'Leave empty if you did not ask permission to quote, and leave out anything in the words that would identify them.' },
    ] },
    { id: 'distinguish', title: 'Follow-up questions', fields: [
      { id: 'followups-next', label: 'Questions the conversation or rehearsal raised for next time', kind: 'long', hint: 'After a rehearsal, these come from where you stumbled and what you realised you still do not know.' },
    ] },
    { id: 'improve', title: 'Improve one question', fields: [
      { id: 'weak-question', label: 'The weakest question, as written', kind: 'short' },
      { id: 'improved-question', label: 'The same question, rewritten', kind: 'short', example: 'Example (made up): Before: Would a reminder have helped? After: What happened the day before the class?' },
      { id: 'next-research-question', label: 'Your next research question', kind: 'short' },
      { id: 'improvement-made', label: 'What you changed after the Check questions, or why no change was needed', kind: 'long', hint: 'Name the question or note you changed, and why.' },
    ] },
  ],
  checks: [
    {
      question: 'Which question is most likely to tell you what actually happened?',
      options: [
        { label: 'Think of the last class you booked. What did you do the evening before it?', correct: true, was: ['Tell me about the last class you signed up for. What did you do the evening before?'], feedback: 'It asks about one real occasion the person can remember, and it does not tell them which part you care about, so the surprising detail has room to arrive.' },
        { label: 'Would a reminder the day before the class have helped you get ready for it?', was: ['Would a reminder the day before have helped you prepare?'], feedback: 'It hands over the answer. Many people say yes to a helpful-sounding thing, and you learn what they predict about themselves rather than what they did.' },
        { label: 'Do you usually find class booking pages confusing when you first open them?', was: ['Do you usually find booking pages confusing?'], feedback: 'It asks for a general habit and a judgement at once. “Usually” answers are reconstructions, and “confusing” invites agreement with your own suspicion.' },
        { label: 'How important is it to you to know exactly what to bring to a class?', was: ['How important is it to you to know what to bring?'], feedback: 'Almost nobody says it is unimportant. Importance questions produce flat, agreeable answers that cannot separate one situation from another.' },
      ],
      repair: 'Read your six questions in step 2 aloud. Rewrite any that name a feature, ask for a prediction, or contain the word you hope to hear, then record the change in step 5.',
      recheck: 'Every question can be answered by telling a story about one occasion, and none of them mentions your idea.',
    },
    {
      question: 'You rehearsed the questions alone because nobody was available. What may you write in your notes?',
      options: [
        { label: 'Rehearsal: which questions felt awkward, and that no participant evidence exists yet.', correct: true, was: ['That you rehearsed, what felt awkward to ask, and that no participant evidence exists yet.'], feedback: 'A rehearsal tests your questions, which is real work worth recording. What it cannot produce is anything about other people, so the honest note says so plainly.' },
        { label: 'Your own answers to the questions, clearly marked as the first data point you have.', was: ['Your own answers to the questions, marked as a first data point.'], feedback: 'You already know your own design and intentions, so your answers cannot stand in for a participant’s. Recording them as data quietly turns your assumptions into findings.' },
        { label: 'The answers a typical attendee would probably give, clearly marked as estimates for now.', was: ['A likely answer based on what people in your position usually say.'], feedback: 'That is an invented participant, however carefully it is labelled. Once it is written down it will be quoted later as though someone said it.' },
        { label: 'Nothing at all, since an interview without a participant has failed.', was: ['Nothing — an interview without a participant is a failure.'], feedback: 'Too harsh, and it hides useful work. The guide, the consent wording and the awkward questions you found are the output; the recruitment gap is a dated fact, not a failure.' },
      ],
      repair: 'Check the session-status choice in step 3. If it says a real conversation happened, be sure someone actually consented; if not, choose rehearsal and empty the observations and interpretations boxes, then say what you changed in step 5.',
      recheck: 'The status matches what happened, and nothing in the observations box is something you supplied yourself.',
    },
    {
      question: 'Halfway through, the person mentions something upsetting about a family member. What do you do?',
      options: [
        { label: 'Pause the topic, remind them they can skip or stop, and keep it out of your notes.', correct: true, was: ['Stop the topic, remind them they can skip anything or stop, and leave it out of your notes.'], feedback: 'Consent is a running permission, not a form signed once. The material is not yours to keep simply because it was said while you were listening.' },
        { label: 'Write it all down carefully, since it is honest and useful context about their life.', was: ['Write it down carefully — it is honest context about their life.'], feedback: 'It may well be true and relevant, and it was still shared in a moment they did not choose. Keeping it in notes your reviewer can read breaks the terms they agreed to.' },
        { label: 'Keep the conversation going and decide afterwards whether to include it.', was: ['Keep going and decide afterwards whether to include it.'], feedback: 'Deciding later means it is already written down. The moment to protect them is while it is happening, not while you edit.' },
      ],
      repair: 'Reread your consent wording in step 1. If it does not say plainly that they can skip a question or stop at any time, who will read the notes and when you will delete them, add that and note it in step 5.',
      recheck: 'The consent introduction names what the notes are for, who will read them, when they will be deleted, that they can stop, and whether anything is recorded.',
    },
  ],
  saveRoute: {
    auto: 'Your purpose, consent wording, questions and notes save as you type, on this device first and then online. Watch for “Saved online” above the steps.',
    external: 'Nothing is uploaded, and no participant’s name, contact details or recording belongs in this worksheet. Keep raw notes, any consent record and any audio in your own private folder or on paper, decide the date you will delete them, and refer to them here only by a file name.',
    creator: 'Your creator can read every answer here, including your notes, once they save. Write only a de-identified summary: no names, and no combination of details — a job, a street, an unusual event — that would let someone work out who it was. Removing the name alone does not make notes anonymous.',
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
    { expect: 'Honest status, then a de-identified summary kept apart from interpretations. A rehearsal with no participant is a complete result: leave both boxes empty.',
      fields: ['session-status', 'observations', 'interpretations', 'quotes'],
      supported: {
        material: 'A made-up practice line, written as if straight after a consented conversation: “She looked for the price, couldn’t find it on the first screen, went back twice, and said ‘I never know what these things cost until the end’ — she was clearly frustrated by the whole booking process.”',
        question: 'How should this be split between observations and interpretations?',
        options: [
          { label: 'Observed: her search, going back twice and her sentence. Inferred: frustration with the whole process.', correct: true, was: ['Observed: she searched for the price, returned twice, and said that sentence. Inferred: that she was frustrated by the process as a whole.'], feedback: 'Her actions and her words are what you can point to. “Clearly frustrated by the whole process” is your reading, and it stretches one moment into a verdict on everything.' },
          { label: 'All observed: her behaviour and her frustration were both plainly visible to you in the room at the time.', was: ['All observed: her behaviour and her frustration were both visible in the room.'], feedback: 'You saw behaviour and heard a sentence. Frustration is a reasonable interpretation of them, but writing it as observed removes the step where someone could disagree with you.' },
          { label: 'Observed: the quotation only. Everything else is your own summary of what she did, so it is inferred.', was: ['Observed: the quotation only. Everything else is your summary of what she did.'], feedback: 'Too strict. Actions you watched — searching, going back twice — are as observable as the words; describing them is not interpretation.' },
          { label: 'All inferred: memory is unreliable, so notes written after a session are interpretation.', was: ['Inferred: memory is unreliable, so notes written afterwards are all interpretation.'], feedback: 'Notes written immediately are the normal record of a session. Treating everything as interpretation would leave you nothing to reason from.' },
        ],
        then: 'Split your own notes the same way: what you could point to on one side, your reading of it on the other, and the exact words only if you were given permission to keep them. Only the de-identified summary goes into the course.',
      },
      terms: [{ term: 'Observation', meaning: 'What was said or done, as close to their words as you can.' }, { term: 'Interpretation', meaning: 'Your reading of why. Keep it in its own box so nobody mistakes it for what they said.' }, { term: 'De-identified summary', meaning: 'A short account with names removed and any other detail that could point to the person — a job, a place, an unusual event — left out.' }],
      start: 'If nobody is available today, read the questions aloud, note where you stumbled, choose “Rehearsal only” and leave observations empty.', enough: 'After a conversation: every line in observations could be checked against what was said, and nothing identifying is written down. After a rehearsal: the status says so and the participant boxes are empty.' },
    { terms: [{ term: 'Follow-up question', meaning: 'A question for a later conversation, raised by something you did not understand this time.' }, { term: 'Conclusion', meaning: 'A statement about what is true or what to do. It belongs in a later step, not in this list.' }], demo: { scenario: 'Made-up example. Turning the interpretations box into follow-up questions, and finding that the first list was a list of fixes.', beats: [{ label: 'What was in my interpretations box', text: 'Three guesses written beside some practice notes: that she looked for the price first, that she may not read anything sent in advance, and that she expected the materials list on the ticket. All three are mine, not hers.' }, { label: 'My first list', text: 'Move the price higher. Stop relying on email. Put the list on the ticket. I wrote them in about a minute and felt organised.' }, { label: 'Why none of them is a follow-up', text: 'Every line is something I would do. Nobody can answer a to-do list, and each line has already settled what the guess means. My guesses had quietly become decisions.' }, { label: 'The repair', text: '“The last time you booked a class, where did you look first?” Now the price guess can survive or fall, and there is room for an answer I did not predict.' }, { label: 'The one I nearly kept', text: '“Did the hidden price put you off?” It is shaped like a question, so it looked safe. The only thing it can do is agree with me. Rewritten: “What made you go back to the earlier screen?”' }], wrongTurn: 'The wrong turn is writing what you will change instead of what you still do not know. A fix list looks like progress, and it closes the question you were meant to carry into the next conversation.', tradeoff: 'Keeping these as questions leaves the design undecided for another week, and somebody may ask what you have actually produced. What you have is a shorter list of things you would otherwise have built on a guess.', uncertainty: 'Still unknown: whether any of these follow-ups matter to anyone but me. A rehearsal cannot tell you that, and the next conversation may raise something that makes all three look small.' }, expect: 'The questions the conversation raised, separated from what you observed.', fields: ['followups-next'],
      start: 'Reread the interpretations box; each guess is a follow-up question.', enough: 'Each item is a question, not a conclusion.' },
    { terms: [{ term: 'Weak question', meaning: 'The one you would least like to ask again. Usually it is the one you could hear steering the answer as you said it.' }, { term: 'Check questions', meaning: 'The questions in the Check section. They exist to send you back to one earlier answer and change it before you save.' }], expect: 'One rewritten question, your next research question, and the change the Check questions sent you back to make.',
      fields: ['weak-question', 'improved-question', 'next-research-question', 'improvement-made'],
      start: 'Pick the question you felt awkward asking; that is usually the leading one. Answer the Check questions before the last box.',
      enough: 'The rewrite asks about a past event and would work with a stranger, and the last box names one thing you changed or explains why it already met the check.' },
  ],
  transfer: {
    scenario: 'Made-up case: You are helping a community choir understand why some new members stop coming after their first month. You have drafted three questions for adults who joined this year: “Would a buddy system help you stay?”, “Do you find rehearsals too long?” and “Tell me about the last rehearsal you went to.”',
    prompt: 'Choose the weakest of the three questions and rewrite it so it asks about a real recent occasion. Explain why your version steers the person less than the original.',
    anchors: {
      weak: 'Keeps the buddy-system question, or rewrites it as another prediction (“Would more support help?”), or swaps one leading word for another, so the person can still hear which answer is wanted.',
      adequate: 'Rewrites a leading or prediction question as a story about one recent occasion, such as “Think of a rehearsal you missed. What happened that week?”, and explains that it names no idea and cannot be answered yes or no.',
      strong: 'Adequate, plus adds a neutral follow-up (“What did you expect to happen then?”), notes that one person’s account cannot show how common leaving is, and keeps the consent wording and de-identified notes in view.',
    },
  },
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
      { id: 'improvement-made', label: 'What you changed after the Check questions, or why no change was needed', kind: 'long', hint: 'Name the branch or box you changed, and why.' },
    ] },
  ],
  checks: [
    {
      question: 'A visitor reaches “Sorry, this workshop is full.” The box has no arrow leaving it. What is wrong?',
      options: [
        { label: 'A dead end: the person hears the bad news and has nothing they can do next.', correct: true, was: ['It is a dead end: the person is told the bad news with nothing they can do next.'], feedback: 'A failure is only handled when the person can act — see another date, join a waiting list, or leave knowing where they stand. A message alone stops the flow.' },
        { label: 'Nothing: the workshop really is full, so the flow has finished honestly.', feedback: 'Honest, and unfinished. The task was to get a place; being told no ends this route but not the need, and the flow should show where that need goes.' },
        { label: 'The message should be softer and apologise, so people feel less disappointed.', was: ['The message should be softer so people are less disappointed.'], feedback: 'Wording matters and it is not the structural problem. A gently worded dead end is still a dead end.' },
      ],
      repair: 'Look at your three failure branches in step 3. Any whose next action is only a message needs a real action the person can take. Change one and record it in step 5.',
      recheck: 'Every failure box has an arrow out of it, and each next action is something the person does rather than something the system says.',
    },
    {
      question: 'Your flow shows: Home → Details → Reserve → Payment → Confirmation. What is missing?',
      options: [
        { label: 'The actions and decisions between screens, and what the person must know before Reserve.', correct: true, was: ['The actions and decisions between the screens, and what the person needed to know before committing.'], feedback: 'That is a list of places, not a flow. What turns one box into the next, and what has to be true before Reserve, is where the design decisions live.' },
        { label: 'Nothing: the five screens cover the whole task, from the start right through to the finish.', was: ['Nothing: the five screens cover the whole task from start to finish.'], feedback: 'They cover the happy path only, and even there the arrows are unlabelled, so anyone reading it has to guess what causes each move.' },
        { label: 'The visual design of each screen, so a reader can picture the finished flow.', was: ['The visual design of each screen.'], feedback: 'Not at this stage. A flow is about order, decisions and recovery; how the screens look comes later and cannot fix a missing decision.' },
      ],
      repair: 'Reread your successful path in step 2. If your boxes are screen names, label each arrow with the action that causes the move, and make sure the price and what to bring appear before the Reserve arrow. Note the change in step 5.',
      recheck: 'Every arrow carries an action, and the information list from step 1 appears before commitment.',
    },
    {
      question: 'Payment is submitted and the connection drops before any answer arrives. What should the flow do?',
      options: [
        { label: 'Say the result is not yet known, offer a way to check, and keep what was entered.', correct: true, was: ['Say clearly that the result is not yet known and offer a way to check, keeping what was entered.'], feedback: 'Unknown is a real state and deserves its own box. Telling someone it failed when it may have succeeded is how people pay twice.' },
        { label: 'Show a failure message straight away, so the person can try paying again quickly.', was: ['Show a failure message so the person can try again straight away.'], feedback: 'This is the expensive mistake. You do not know it failed, and a confident retry can produce a second booking and a second charge.' },
        { label: 'Retry the payment automatically in the background until it finally succeeds.', was: ['Retry automatically in the background until it succeeds.'], feedback: 'Silent retries hide the state from the person and can repeat the charge. Any retry has to be their decision, after they know where things stand.' },
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
          { label: '“That email address is missing an @. Check it and press Reserve again.” Name and date stay.', correct: true, was: ['“That email address is missing an @. Check it and press Reserve again.” The name and date they typed stay on screen.'], feedback: 'It says what is wrong, where, and what to do, and it keeps the name and date they typed instead of emptying the form. Everything they can act on is in one place.' },
          { label: '“Invalid input. Please try again.” The whole form is cleared so they can start again cleanly.', was: ['“Invalid input. Please try again.” The form is cleared so they can start cleanly.'], feedback: 'Two failures at once: it does not say which field or what is wrong with it, and clearing the form makes the person retype work they had already done correctly.' },
          { label: 'The Reserve button quietly does nothing at all until the email address is valid.', was: ['The Reserve button quietly does nothing until the address is valid.'], feedback: 'The person presses a button and the world does not change, so they cannot tell whether the app is broken, slow, or waiting for them.' },
          { label: '“That email address is missing an @.” No further instruction, since the problem is now clear.', was: ['“That email address is missing an @.” No further instruction, since the problem is now obvious.'], feedback: 'Close, and it stops one step short. It names the fault without saying what to do, and it does not promise that their other answers survived.' },
        ],
        then: 'Write your own three branches the same way: name what is wrong, say what the person does next, and state what is preserved.',
      },
      terms: [{ term: 'Recovery', meaning: 'What the person can do next without starting over: change a date, fix a field, check a status.' }, { term: 'Dead end', meaning: 'A box with no arrow out except going back to the start.' }],
      start: 'Take the confirmation box and ask “what if the connection dropped right here?”', enough: 'Each next action is something the person can do, not something the system will do for them.' },
    { terms: [{ term: 'Walkthrough', meaning: 'Reading every box and arrow aloud in order, as though you had never seen the flow before.' }, { term: 'Branch', meaning: 'One path out of a decision point, followed to wherever it ends.' }, { term: 'Stumble', meaning: 'Any place where you had to explain something that is not written on the sheet.' }], demo: { scenario: 'Made-up example. Walking the reservation flow aloud, first as its author, which found nothing, and then again properly.', beats: [{ label: 'My first walk', text: 'I read the boxes in order, A to F, nodding along. Everything made sense and I found nothing wrong. That should have been the warning.' }, { label: 'Why it found nothing', text: 'I know what every box means, so I filled the gaps from memory as I went. The rule I use now: stop wherever I have to say something aloud that is not written on the sheet.' }, { label: 'The second walk', text: 'Reading as somebody who has never seen it, I stopped four times. Three were missing arrows. The fourth was a different kind of thing: nothing anywhere says the class cannot be refunded, and by box D she has paid.' }, { label: 'Why that one matters most', text: 'A missing arrow is a hole in the drawing. Missing information is a hole in her decision, and she meets it only after the money has gone.' }, { label: 'The dead end I chose', text: 'I was drawn to the easy repair, the unlabelled arrow between C and D. I took the refund one instead, because it changes what box B has to say, and the easy one can be fixed in two minutes whenever I reach it.' }], wrongTurn: 'The wrong turn is walking your own flow as its author. You supply every missing word from memory, the walk goes smoothly, and a smooth walk feels like a finished flow.', tradeoff: 'Reading aloud as a stranger is slow and faintly ridiculous, and it hands you a longer fault list the day before you meant to finish. Some faults will stay unrepaired, and the sheet stops looking tidy.', uncertainty: 'Still unknown: whether a first-time visitor stumbles where I did. My imagined stranger is me pretending, and pretending cannot find the things I am unable to un-know.' }, expect: 'A list of stumbles found by tracing every branch aloud, and the one dead end you will repair.', fields: ['walkthrough-findings', 'dead-end'],
      start: 'Read each box aloud as if you had never seen the app, and stop wherever you have to explain.', enough: 'At least one finding is missing information rather than a missing arrow.' },
    { terms: [{ term: 'Repair', meaning: 'The change you make to one branch, drawn again on a fresh sheet so the first version survives beside it.' }, { term: 'Check questions', meaning: 'The questions in the Check section. They exist to send you back to one earlier answer and change it before you save.' }], expect: 'What changed on the sheet and why, where the photo lives, and the change the Check questions sent you back to make.',
      fields: ['repair', 'photo-reference', 'improvement-made'],
      start: 'Redraw only the repaired branch on a fresh sheet; keep the original. Answer the Check questions before the last box.',
      enough: 'Someone reading the change could find the branch on the original sheet, and the last box names one thing you changed or explains why it already met the check.' },
  ],
  transfer: {
    scenario: 'Made-up case: A town library lets members reserve a meeting room online. Members choose a date, a time and a room size, then reach a box that says “No rooms free at that time.” In the current flow that box has no arrow leaving it.',
    prompt: 'Decide what the “No rooms free” box should offer the member next, and explain why your next action keeps them moving towards their goal rather than only reporting the bad news.',
    anchors: {
      weak: 'Rewords the message (“Sorry, nothing available, please try later”) or softens its tone, but leaves the box with no arrow out, so the member is still stuck at a dead end.',
      adequate: 'Adds a real next action the member can take — nearby times, another room size or a waiting list — keeps the date and size they chose, and explains that a failure is handled only when the person can act.',
      strong: 'Adequate, plus names a trade-off (offering alternatives needs up-to-date availability) or a check to run, such as watching whether members pick an offered time or leave the page.',
    },
  },
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
      { id: 'reading-order', label: 'Reading order, Tab order, and which hints are tied to their fields', kind: 'long', hint: 'First number every element, text included, in the order a screen reader reads down the page. Then list the Tab stops: only fields, buttons and links. Plain hint text is not a Tab stop, so say which hints the builder must tie to their field to be read out when it gets focus.', example: 'Example (made up): Reading: 1 heading, 2 Name, 3 hint about the list, 4 Email, 5 Date, 6 Reserve. Tab: Name → Email → Date → Reserve. Hint 3 tied to Email, no Tab stop of its own.' },
      { id: 'persistent-labels', label: 'Which labels stay visible while typing, and why', kind: 'short' },
      { id: 'stacking', label: 'What stacks, wraps or moves between wide and narrow', kind: 'long', hint: 'Content reflows; it does not shrink.' },
      { id: 'error-recovery', label: 'How an error keeps what was typed and says how to fix it', kind: 'short' },
      { id: 'checks-needed', label: 'Keyboard and screen-reader checks that still need a built version', kind: 'long', hint: 'A drawing cannot prove these. List them as still to do: for example, that Tab visits only the controls in your order, and that each tied hint and error is read out when its field gets focus.' },
    ] },
    { id: 'critique', title: 'Critique', fields: [
      { id: 'error-state', label: 'The error state you added', kind: 'long', example: 'Example (made up): Email field empty on submit: red text under the field, “Enter the email address for your confirmation”, typed name kept.' },
      { id: 'longer-labels', label: 'What broke with longer labels or larger text, and what you changed', kind: 'short' },
    ] },
    { id: 'submit', title: 'Save', fields: [
      { id: 'unresolved', label: 'The main unresolved issue for review', kind: 'short' },
      { id: 'photo-reference', label: 'File names or location of the screen sketches', kind: 'short', hint: 'Names only; nothing is uploaded here.' },
      { id: 'improvement-made', label: 'What you changed after the Check questions, or why no change was needed', kind: 'long', hint: 'Name the screen or annotation you changed, and why.' },
    ] },
  ],
  checks: [
    {
      question: 'Your annotations say the screens are keyboard accessible. What do the sketches actually establish?',
      options: [
        { label: 'Your intended order, labels and recovery; whether they work needs a built, tested version.', correct: true, was: ['What you intend: the order, the labels and the recovery. Whether it works can only be known once it is built and tested.'], feedback: 'A drawing records a design decision. Tab order, what a screen reader announces and keyboard traps are properties of running code, so the honest note names the checks still to do.' },
        { label: 'That the design is accessible, because the reading order and the labels are all specified.', was: ['That the design is accessible, since the reading order and labels are specified.'], feedback: 'Specifying them is necessary and not sufficient. A build can ignore the order, mislabel a field, or trap focus in a dialog, and only testing reveals it.' },
        { label: 'Nothing about accessibility at all, so the annotations can be left out of the handoff.', was: ['Nothing about accessibility at all, so the annotations are pointless.'], feedback: 'Too far the other way. The annotations are what a developer builds from and what a tester checks against; they just are not evidence of the result.' },
      ],
      repair: 'Reread your annotations in step 3. Replace any sentence that claims the screens are accessible with the specific checks that still need a built version, and check that reading order and Tab order are written as two lists. Record the change in step 5.',
      recheck: 'No annotation claims a result; the list of checks still needed names keyboard and screen-reader steps, and Tab stops are listed separately from reading order.',
    },
    {
      question: 'On the phone version you shrink the whole desktop layout so everything still fits. What is wrong with that?',
      options: [
        { label: 'Text and tap targets get smaller; content should reflow into one column at full size.', correct: true, was: ['Shrinking makes text and targets smaller; the content should reflow into one column and keep its size.'], feedback: 'Reflow rearranges what is there so it stays readable and tappable. Scaling down keeps the arrangement and takes away legibility and touch targets.' },
        { label: 'Nothing, as long as the person can pinch to zoom in on whatever part they need to read.', was: ['Nothing, as long as the person can pinch to zoom.'], feedback: 'Zooming shifts the work onto the reader, and a zoomed page usually needs sideways scrolling to read a single line.' },
        { label: 'It is wrong only if the body text falls below twelve pixels high on the phone screen.', was: ['It is wrong only if the text falls below twelve pixels.'], feedback: 'A size threshold is not the issue. Even at a readable size, a scaled desktop layout puts the price and the button in places built for a wide screen.' },
      ],
      repair: 'Look at your narrow and wide descriptions in step 2. If the narrow one is the wide one made smaller, rewrite it as a single column in the order the person needs, and say what changed in step 5.',
      recheck: 'The narrow version states what stacks and what moves, and the materials and price still sit above Reserve.',
    },
    {
      question: 'A label sits inside the field as grey placeholder text and disappears when typing starts. Why replace it?',
      options: [
        { label: 'Once typing starts nobody can see what the field was for, and an error has no label to point to.', correct: true, was: ['Once it is gone the person cannot check what the field was for, and an error message has nothing to point at.'], feedback: 'The label is needed most while filling in and while correcting. A placeholder removes it exactly then, and placeholder grey often fails contrast as well.' },
        { label: 'Placeholders are forbidden in accessible design, so any form field that uses one fails a review.', was: ['Placeholders are always forbidden in accessible design.'], feedback: 'Placeholders are fine as an extra hint beside a real label. The problem is using one as the only label.' },
        { label: 'Grey text inside a field looks unfinished and makes the whole form seem less polished.', was: ['Because grey text looks unfinished.'], feedback: 'Appearance is not the reason. The reason is that the information vanishes at the moment it is needed.' },
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
    { expect: 'Reading order, Tab order and tied hints, labels, stacking, error recovery, and an honest list of checks that need a built version.', fields: ['reading-order', 'persistent-labels', 'stacking', 'error-recovery', 'checks-needed'],
      supported: {
        material: 'A supplied phone sketch of the reservation form, made up for practice. Down the page: the heading “Reserve your place”, then Name, then Email, then a note reading “We will send your materials list here”, then the Date chooser, then the Reserve button. The note about the materials list is drawn in small grey text beside the Email field. It is plain text: nothing happens if you press it.',
        question: 'What should the annotation say about that grey note?',
        options: [
          { label: 'Read it before Email and tie it to that field, but give it no Tab stop of its own.', correct: true, was: ['It must come before the Email field in the order, because it explains what the address will be used for.'], feedback: 'Three things meet that note differently. A screen reader reading down the page should reach it before the field. Tab skips plain text and lands on Email, so the note must be tied to the field to be read out at that moment. A sighted keyboard user simply sees it beside the box.' },
          { label: 'Let it sit anywhere in the reading order, since a hint is extra help rather than a label.', was: ['It can sit anywhere, because it is only a hint rather than a label.'], feedback: 'Position decides whether a hint arrives in time. Read after the address has been typed, it no longer helps anyone decide whether to give it.' },
          { label: 'Give it its own Tab stop just before Email, so keyboard users land on it first.', was: ['It should be removed, because a field with a visible label needs no further text.'], feedback: 'Tab stops are for things you can operate. A stop on plain text adds a key press that does nothing, and a screen-reader user tabbing to Email usually hears nothing about the note unless it is tied to the field.' },
          { label: 'Turn it into placeholder text inside the Email field to save space on a phone.', was: ['It should become placeholder text inside the Email field to save space.'], feedback: 'That is two problems: it disappears the moment typing starts, and small grey text inside a field is the least readable place on the screen.' },
        ],
        then: 'Number every element on your own sketch in reading order, circle only the controls Tab should reach, and mark each hint that must be tied to its field.',
      },
      terms: [
        { term: 'Reading order', meaning: 'Everything on the screen, text included, in the order a screen reader reads it when someone moves down the page.' },
        { term: 'Focus order', meaning: 'The shorter sequence the Tab key moves through: only controls such as fields, buttons and links. It should follow the reading order.' },
        { term: 'Tied hint', meaning: 'Hint text connected to its field in the built page, so a screen reader reads it out when that field receives focus. Text drawn beside a field is not connected until a builder connects it.' },
      ],
      start: 'Number every element in reading order first; then circle only the ones Tab should stop on.', enough: 'Reading order and Tab order are two separate lists, hints are tied to fields rather than given Tab stops, and nothing claims the screens are accessible.' },
    { terms: [{ term: 'Error state', meaning: 'What the screen shows when something is missing or wrong: the message, where it sits, and what stays on screen.' }, { term: 'Collision', meaning: 'Two things wanting the same space, so one is pushed over the other or off the edge.' }], demo: { scenario: 'Made-up example. Adding an error state to the reservation sketch, and the two repairs it needed before it was any use.', beats: [{ label: 'The state I was missing', text: 'Every sketch showed the form filled in neatly. Nothing showed what she sees when she presses Reserve with the email box empty.' }, { label: 'My first attempt', text: 'A red outline round the Email box. It reads clearly on the sketch and took one pencil stroke.' }, { label: 'Why it is not enough', text: 'The colour is carrying the whole message. Anyone who cannot see the red, or who is hearing the page read aloud, is told nothing — and even seeing it, she is not told what is wanted or whether her typed name survived.' }, { label: 'The state I kept', text: 'Under the field, in words: “Enter the email address for your confirmation.” A line at the top says one thing needs attention, the name and date she typed stay where they are, and the outline remains as a second signal rather than the only one.' }, { label: 'What the longer label did', text: 'I rewrote “What to bring” as “What to bring to your first session” and it wrapped onto two lines, pushing the Reserve button into the message. My first fix was to set that label in smaller text, which is a way of hiding it. I let it wrap and moved the button down instead.' }], wrongTurn: 'The wrong turn is letting colour carry the meaning. A red outline looks like a finished error state, costs one stroke to draw, and says nothing at all to somebody who is not looking straight at it.', tradeoff: 'Words under the field and a line at the top make the screen busier and taller, and the form stops looking calm on the page. It buys somebody the ability to fix the thing without guessing what is wanted.', uncertainty: 'Still unknown: whether the message is announced when it appears, or whether she is left to hunt for it. A drawing cannot settle that, so it belongs on the list of checks that need a built version.' }, expect: 'One added error state and one change from trying longer labels or larger text.', fields: ['error-state', 'longer-labels'],
      start: 'Rewrite one label twice as long on the sketch and see what it collides with.', enough: 'The error says what was wrong and how to fix it, and the typed values survive.' },
    { terms: [{ term: 'Unresolved issue', meaning: 'The thing you would most want a second opinion on. Naming it is part of the work, not a confession.' }, { term: 'Check questions', meaning: 'The questions in the Check section. They exist to send you back to one earlier answer and change it before you save.' }], expect: 'The unresolved issue, where the sketches live, and the change the Check questions sent you back to make.',
      fields: ['unresolved', 'photo-reference', 'improvement-made'],
      start: 'Choose the issue you would most want a second opinion on, not the smallest one. Answer the Check questions before the last box.',
      enough: 'Your work has a reference or the worksheet is filled, and the last box names one thing you changed or explains why it already met the check.' },
  ],
  transfer: {
    scenario: 'Made-up case: A community garden’s plot-request form has Name, Phone and Submit. Beside the Phone field, in small grey text, sits the note “Only used to tell you when a plot is free.” The form’s designer suggests giving the note its own Tab stop so that keyboard users land on it.',
    prompt: 'Decide how your annotation should handle that note for someone using a screen reader and for someone using only a keyboard, and explain why your answer differs from the designer’s Tab-stop idea.',
    anchors: {
      weak: 'Agrees to a Tab stop on the note, or treats reading order and Tab order as one list, so plain text becomes an extra key press that does nothing.',
      adequate: 'Places the note before the Phone field in reading order, ties it to the field so it is read out when the field gets focus, and keeps Tab stops for controls only, explaining that plain text is not something you operate.',
      strong: 'Adequate, plus says the order and the tie must be checked in a built version with a keyboard and a screen reader, and notes that the note’s wording also affects whether people are willing to give their number.',
    },
  },
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
      { id: 'evidence', label: 'The evidence for this, and its source label', kind: 'short', sensitive: true, hint: 'Your own walkthrough, a heuristic risk, or something a participant said or did? If a participant, summarise it without their name or any detail that could identify them.' },
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
      { id: 'improvement-made', label: 'What you changed after the Check questions, or why no change was needed', kind: 'long', hint: 'Name the part of the critique or repair you changed, and why.' },
    ] },
  ],
  checks: [
    {
      question: 'Which critique can somebody act on?',
      options: [
        { label: 'On the full workshop, Reserve is greyed out with no reason, so visitors cannot tell what to do.', correct: true, was: ['On the full workshop, Reserve is greyed out with no explanation, so the visitor cannot tell whether to wait or look at another date.'], feedback: 'It points at one thing on the screen and says what it stops the person doing: deciding whether to wait or pick another date. Someone else could find it and judge whether the repair worked.' },
        { label: 'The reservation screen feels cluttered and rather dated next to all of the studio’s other pages.', was: ['The reservation screen feels cluttered and a bit dated.'], feedback: 'It records an impression without naming what is affected. Two people can disagree about it forever and nothing changes for the visitor.' },
        { label: 'Users are confused by the booking flow and give up before they reach the payment step.', was: ['Users are confused by the booking flow.'], feedback: 'It sounds like evidence and is a guess about other people. Unless you watched someone, the honest version says what you saw and marks the confusion as inferred.' },
        { label: 'The Reserve button colour does not match the studio’s brand guide or its printed posters.', was: ['The button colour does not match the studio’s brand.'], feedback: 'A real observation about consistency, and no stated effect on the task. It may be worth fixing later; it is not the weak point this lesson is for.' },
      ],
      repair: 'Reread your observation and task-impact boxes in step 2. If the critique names a feeling rather than something on the screen, rewrite it and record the change in step 5.',
      recheck: 'The observation could be verified by someone looking at your artefact, and the impact names a task the person cannot finish.',
    },
    {
      question: 'You repaired the disabled button and also changed the type scale, the spacing and the photograph. What has that cost you?',
      options: [
        { label: 'You can no longer tell which change did anything, so the comparison teaches little.', correct: true, was: ['You can no longer tell which change did anything, so neither version teaches you much.'], feedback: 'A comparison only works when one thing moved. Bundling changes feels efficient and destroys the reason for keeping a before version at all.' },
        { label: 'Nothing, as long as the repaired screen is clearly better overall than the original.', was: ['Nothing, as long as the screen is better overall.'], feedback: '“Better overall” is the judgement you were trying to test. Without a bounded change you are back to taste.' },
        { label: 'Only the extra time, since each of the additional changes was quick to make.', was: ['Only time, since the extra changes were quick.'], feedback: 'The cost is not effort but explanation: you have lost the ability to say why the screen improved.' },
      ],
      repair: 'Look at your repair box in step 3. If it lists changes beyond the one criterion, undo the extras on the copy or state plainly that this is a redesign rather than a bounded repair. Say what you did in step 5.',
      recheck: 'The repair changes one named thing, and the original is untouched and findable.',
    },
    {
      question: 'After the repair you write: “This fixes the problem.” Why is that too strong?',
      options: [
        { label: 'Nobody has used the repaired version yet, so the improvement is intended, not shown.', correct: true, was: ['You have changed the design, not observed anyone using it; until someone does, the improvement is intended rather than shown.'], feedback: 'A repair is a hypothesis with better reasoning behind it. Saying so keeps the next test honest and stops the claim hardening into a fact.' },
        { label: 'Because no design is ever truly finished, so every claim of a fix is premature.', was: ['Because no design is ever finished.'], feedback: 'True and unhelpfully general. The specific problem is that nothing yet distinguishes your intention from the result.' },
        { label: 'It is not too strong if a usability heuristic clearly supports the specific change you made.', was: ['It is fine if the heuristic clearly supports the change.'], feedback: 'A heuristic flags a risk; it cannot report that a person succeeded. It is the reason for trying, not evidence of the outcome.' },
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
    { terms: [{ term: 'Bounded repair', meaning: 'A change limited to the one concern you named. Everything else on the artefact stays exactly as it was.' }, { term: 'Original', meaning: 'The untouched version, copied or photographed before you change anything. It is what lets you explain the repair later.' }], demo: { scenario: 'Made-up example. One repair to a booking screen, where the first attempt changed something the critique had never named.', beats: [{ label: 'The concern I had written', text: 'On the full workshop, Reserve is greyed out with no explanation, so a visitor cannot tell whether to wait or to look at another date.' }, { label: 'What I did first', text: 'I redrew the whole card: new heading, a photograph of the studio, a warmer tone. The sheet looked better and the grey button was still sitting there unexplained.' }, { label: 'The question that caught it', text: 'Which of those changes answers the concern I wrote in step 2? None of them did. I had repaired the thing I disliked, not the thing I had named.' }, { label: 'Keeping the original', text: 'I photographed the untouched sheet and called it reserve-before, then worked on a copy called reserve-after. Two minutes, and it made everything after it explainable.' }, { label: 'The change I kept', text: 'Under the grey button: “Fully booked. Next session Thursday evening”, with the date as the thing you can press. Nothing else on the sheet moved.' }], wrongTurn: 'The wrong turn is repairing whatever you dislike most about the screen. It is the change your hand wants to make, it usually improves the look, and it can leave the named concern exactly where it was.', tradeoff: 'A bounded repair leaves the screen visibly imperfect, and everything you did not touch will keep bothering you each time you look at it. In exchange the two versions differ in one thing, so the comparison can say something.', uncertainty: 'Still unknown: whether the next date is what she wants, or whether she would rather be told when a place frees up. The repair answers one of those and guesses at the other.' }, expect: 'The original kept safe and one bounded change.', fields: ['original-reference', 'repair'],
      start: 'Copy or photograph the original before touching it.', enough: 'Everything you changed serves the one criterion; nothing else moved.' },
    { terms: [{ term: 'Before and after', meaning: 'The two versions side by side, differing in one thing only, so the difference has a cause you can name.' }, { term: 'Check', meaning: 'Something you could watch or count that would show whether the repair helped, including the case where it did not.' }], expect: 'A before/after comparison and a concrete way to check it.', fields: ['comparison', 'check'],
      supported: {
        material: 'A supplied pair from the same made-up repair. Before: the confirmation screen says only “Thank you”. After: it shows the class name, the date and time, the address, and one line saying what to bring, with the same “Thank you” heading.',
        question: 'Which way of checking whether the repair helped is worth writing down?',
        options: [
          { label: 'Watch two people book, then see if they can say which evening and what to bring.', correct: true, was: ['Watch two people finish a booking and see whether they can say, without scrolling back, which evening they are coming and what to bring.'], feedback: 'It names who, what they do, and what you would see — ideally without them scrolling back. It could also come out badly, which is what makes it a check rather than a demonstration.' },
          { label: 'Ask two people whether the new confirmation screen is clearer than the old one.', was: ['Ask two people whether the new screen is clearer than the old one.'], feedback: 'Shown two versions by the person who made them, people tend to prefer the newer one. You learn about politeness rather than about the task.' },
          { label: 'Count how much longer people spend on the new confirmation screen than the old.', was: ['Count how much longer people spend on the confirmation screen.'], feedback: 'Longer could mean reading carefully or being lost, and the number cannot tell you which. A measure you cannot interpret is not yet a check.' },
          { label: 'Compare both screens against the ten usability heuristics again, one item at a time.', was: ['Compare the two screens against the usability heuristics again.'], feedback: 'Useful for deciding what to try; it cannot report what happened. Re-reading a rule tells you about the design, not about a person using it.' },
        ],
        then: 'Write your own check the same way: a person, a task, and the specific thing you would watch for that could show the repair did not help.',
      },
      start: 'Put both sheets next to each other and describe the first thing you notice in each.', enough: 'The check is something you could watch or count, not “it looks clearer”.' },
    { terms: [{ term: 'Limitation', meaning: 'What this piece of work cannot show, however well it went. Writing it down is part of the work, not an apology.' }, { term: 'Untested', meaning: 'Changed on good reasoning and not yet put in front of anybody. It stays untested until somebody uses it.' }], expect: 'What still needs testing, and the change the Check questions sent you back to make.',
      fields: ['limitations', 'improvement-made'],
      start: 'Finish the sentence “This repair would be shown not to help if…”, then answer the Check questions before the last box.',
      enough: 'The repair is described as untested, not as fixed, and the last box names one thing you changed or explains why it already met the check.' },
  ],
  transfer: {
    scenario: 'Made-up case: A bike-share app’s return screen shows a grey “End ride” button that cannot be pressed when the dock is full, with no text explaining why. A teammate’s critique reads: “This screen feels clunky and old-fashioned.” You keep a copy of the screen as it is now.',
    prompt: 'Write one critique of this screen that someone could act on, and the single repair you would make. Explain why that repair answers your critique and nothing more.',
    anchors: {
      weak: 'Keeps the comment about taste (“make it look modern”), or redesigns the whole screen at once — new colours, layout and icons — so nobody could tell which change mattered.',
      adequate: 'Names what can be seen (a disabled End ride button with no reason) and its effect on the task (the rider cannot tell how to finish), and proposes one bounded repair, such as a line naming the nearest dock with space.',
      strong: 'Adequate, plus keeps the original for comparison, says the repair is untested until a rider uses it, and names a check, such as watching whether riders find another dock without help.',
    },
  },
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
      { id: 'evidence', label: 'Evidence, with its source labels', kind: 'long', sensitive: true, hint: 'Observed in your own walkthrough, reported by a participant, or assumed. Say which. No participant yet? Your walkthrough and your labelled assumptions are enough. Summarise any participant report without names or identifying details.' },
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
      { id: 'improvement-made', label: 'What you changed after the Check questions, or why no change was needed', kind: 'long', hint: 'Name the sentence or section you changed, and why.' },
    ] },
  ],
  checks: [
    {
      question: 'Your note ends: “This change will make booking much easier for users.” What is wrong with that sentence?',
      options: [
        { label: 'It reports an outcome nobody has observed; it should say what you expect and how to check.', correct: true, was: ['Nothing has been built or used, so the outcome is intended rather than observed; it should say what you expect and how you would find out.'], feedback: 'An unshipped design can show reasoning. Written as a result, the sentence will be quoted back at you later as though it had been measured.' },
        { label: 'Nothing is wrong with it, as long as the reasoning behind the change is sound.', was: ['Nothing, as long as the reasoning behind it is sound.'], feedback: 'Sound reasoning is why the change is worth trying. It is not a report of what happened, and the sentence is written as one.' },
        { label: 'It should name the percentage improvement you expect, so the claim can be measured.', was: ['It should name the percentage improvement expected.'], feedback: 'That would be worse: an invented number is harder to challenge than a vague claim and no more true.' },
      ],
      repair: 'Reread your choice and next-check sections in step 2. Rewrite any sentence that states an outcome as an expectation with the observation that would test it, then record the change in step 5.',
      recheck: 'No sentence claims a result; the next check names something you could watch.',
    },
    {
      question: 'Your note gives one option and the choice you made. What is missing?',
      options: [
        { label: 'One real alternative and why you set it aside, so the reader can see a decision was made.', correct: true, was: ['A real alternative and the reason you set it aside — otherwise the reader cannot tell whether a decision was made at all.'], feedback: 'A decision means something else could have happened. Without the rejected option the note reads as a description of what you built.' },
        { label: 'Nothing, if the choice was obviously correct and nobody on the team disagreed with it.', was: ['Nothing, if the choice was obviously correct.'], feedback: 'An obviously correct choice is the easiest to write an alternative for, and the reason it was obvious is worth stating.' },
        { label: 'A complete list of every idea you considered, so the reader sees how widely you searched.', was: ['A list of every idea you considered.'], feedback: 'Too much. One serious alternative with the reason it lost is more useful than an exhaustive list nobody reads.' },
      ],
      repair: 'Look at your options section in step 2. Add one alternative you genuinely considered and the reason you did not take it, then note the change in step 5.',
      recheck: 'The note names at least one alternative and why it was set aside, and the trade-off says what the choice cost.',
    },
    {
      question: 'Reading it aloud, you find yourself saying “it just feels more intuitive.” What does that tell you?',
      options: [
        { label: 'That part has no evidence yet; add what made you believe it, or call it a preference.', correct: true, was: ['That part of the note has no evidence behind it and needs the observation or reasoning that made you believe it.'], feedback: 'Words like intuitive, clean and obvious mark the places where the argument stopped. Saying it aloud is the quickest way to find them.' },
        { label: 'That the design is working, since it already feels natural and easy to you as its maker.', was: ['That the design is working, since it feels natural to you.'], feedback: 'It feels natural to the person who made it, who knows where everything is. That is the least reliable reader you have.' },
        { label: 'That the sentence is weak, so you should remove it from the note and move on.', was: ['That you should remove the sentence and move on.'], feedback: 'Deleting hides the gap. Either supply the reason or say plainly that this part is a preference.' },
      ],
      repair: 'Take the sentence that felt weakest when spoken and either give it a source label or mark it as an untested preference, then record what you changed in step 5.',
      recheck: 'Every claim in the note carries a source: observed, reported, assumed, or an explicit preference.',
    },
  ],
  saveRoute: {
    auto: 'The whole note saves as you type, on this device first and then online. There is nothing else to press.',
    external: 'If you would rather write the page in your own document, do that and keep the file; then paste the six sections here or put the file name in Your work, so the note and its review stay together.',
    creator: 'Your creator can read the note, the strength, the two gaps and your next action as soon as they save online; Ready for review tells him this version is ready. This is the piece he can respond to most usefully, because it shows your reasoning rather than the artefact alone.',
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
    { terms: [{ term: 'Source label', meaning: 'The word you attach to a claim to say where it came from: observed, reported or assumed.' }, { term: 'Unsupported claim', meaning: 'A sentence that sounds like evidence and has nothing behind it. Words like intuitive, clean and obvious usually mark one.' }], expect: 'The place your spoken explanation went unclear.', fields: ['unclear'],
      supported: {
        material: 'A supplied paragraph from someone else’s decision note, made up for practice: “Attendees want to know what to bring. I watched two people miss the materials line at the bottom of the page. Moving it above Reserve will reduce no-shows, and the studio agrees it is worth trying.”',
        question: 'Which sentence needs a source label most urgently before this note is shared?',
        options: [
          { label: '“Moving it above Reserve will reduce no-shows” — an outcome nobody has measured.', correct: true, was: ['“Moving it above Reserve will reduce no-shows” — a prediction about an outcome nobody has measured.'], feedback: 'It is the only sentence that claims a result, and results are what get repeated in later documents. It should say what is expected and how it would be checked.' },
          { label: '“Attendees want to know what to bring” — a broad, general claim about all people.', was: ['“Attendees want to know what to bring” — a general claim about people.'], feedback: 'It does need a label, and it is the softer problem: a reader can see it is a summary. The outcome claim will be quoted as a fact.' },
          { label: '“I watched two people miss the materials line” — a very small sample of people.', was: ['“I watched two people miss the materials line” — a small sample.'], feedback: 'Small, and honestly stated. It already says who and what was observed; two people is a limitation to note, not an unlabelled claim.' },
          { label: '“The studio agrees it is worth trying” — an opinion presented as if it were support.', was: ['“The studio agrees it is worth trying” — an opinion presented as support.'], feedback: 'Worth attributing, and it is not evidence about people using the design, so nobody is likely to mistake it for one.' },
        ],
        then: 'Read your own six sections and mark each claim observed, reported or assumed. Any sentence about an outcome needs the check that would test it.',
      },
      start: 'Set a five-minute timer and explain the note to an empty chair, then once more to a person if you can.', enough: 'You noticed at least one place you reached for a design word instead of an observation.' },
    { demo: { scenario: 'Made-up example. Writing the plan section of a decision note, where the first two gaps turned out to be a wish list.', beats: [{ label: 'The strength I claimed first', text: '“My screens are clear.” I could not point at anything that showed it, so it was a compliment to myself rather than a strength.' }, { label: 'The strength I could evidence', text: 'Somebody reading my flow cold could name the next step at every node. That is written down in my Lesson 4 worksheet, so a reader can go and look.' }, { label: 'My first two gaps', text: '“Add more screens” and “make the visuals stronger”. Both were work I already wanted to do, and neither is anything a reader would ask me for.' }, { label: 'The gaps I kept', text: 'I have never watched anybody use the flow, and I cannot say how common the materials problem is. Both came straight from the review criteria I could not evidence.' }, { label: 'Cutting the repair down', text: '“Test the whole flow with three people” does not fit one sitting. It became: write the consent wording and one task, and ask one person this week.' }], wrongTurn: 'The wrong turn is choosing gaps that are really a wish list. They are pleasant to write, they flatter the work already done, and they quietly avoid the question a reader would actually ask.', tradeoff: 'Two honest gaps make the note read as though you achieved less, and somebody may take them as an admission that the work is unfinished. What you get back is a next action you did not have to invent.', uncertainty: 'Still unknown: whether one conversation this week could close either gap. Probably not. It is the smallest thing that would move one of them at all.' }, expect: 'One evidenced strength, two gaps, one bounded repair and a next action.', fields: ['strength', 'gap-1', 'gap-2', 'repair', 'next-action'],
      terms: [{ term: 'Gap', meaning: 'Something a reviewer would ask for that you cannot yet show.' }],
      start: 'Look at the Module 1 review criteria; the two you cannot evidence are your gaps.', enough: 'The repair names an artefact and fits in one sitting.' },
    { terms: [{ term: 'Repair', meaning: 'The one change a Check question sends you back to make. It is deliberately small.' }, { term: 'Optional lesson', meaning: 'A lesson you may skip without leaving a hole in the module. Stopping here is a complete answer.' }], expect: 'The note is saved, and the change the Check questions sent you back to make. This lesson is optional.',
      fields: ['improvement-made'],
      start: 'Answer the Check questions, make any repair each points at, then say here what you changed or why no change was needed. Choose Ready for review in Your work if you want creator input.',
      enough: 'The last box names one sentence you changed, or explains why the note already met the check. Nothing more is required; stopping here is fine.' },
  ],
  transfer: {
    scenario: 'Made-up case: A park clean-up group used to ask volunteers for their availability at the end of its sign-up page. A designer moved that question to the first step. Her note says: “Volunteers will now sign up twice as fast.” She has walked through the new page herself; nobody else has used it yet.',
    prompt: 'Rewrite her claim so it matches the evidence she actually has. Explain why your version is more honest, and say what she should check next.',
    anchors: {
      weak: 'Keeps a measured-sounding outcome (“will be faster”, “twice as fast”) or swaps in a different number, treating her own walkthrough as evidence about other volunteers.',
      adequate: 'States the change and its intended effect as an expectation, labels the evidence as her own walkthrough, and names a check, such as watching two volunteers sign up and noting where they hesitate.',
      strong: 'Adequate, plus names the alternative she set aside (availability last) and what it costs, and says which result from the check would make her move the question back.',
    },
  },
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
      { id: 'criteria', label: 'Who would count as a relevant person', kind: 'short', hint: 'Describe the experience they need, not a name. Keep to adults and an everyday topic: health, money worries, children or anything else sensitive need qualified review, so leave them out of this practice.', example: 'Example (made up): anyone who has booked a class, course or workshop in the last few months.' },
      { id: 'useful-evidence', label: 'What you would need to hear or see to be satisfied', kind: 'long' },
    ] },
    { id: 'materials', title: 'What you will say and how you will take notes', fields: [
      { id: 'consent-intro', label: 'Your consent introduction, word for word', kind: 'long', hint: 'Who you are, what the notes are for, who will read them (your course reviewer can read what you type here), when you will delete them, that they can skip or stop, and whether anything is recorded.' },
      { id: 'task-or-questions', label: 'The task or the opening questions', kind: 'long', hint: 'A task states a goal without naming buttons. Questions ask about a real recent occasion.' },
      { id: 'note-columns', label: 'The headings you will use while taking notes', kind: 'short', example: 'Example (made up): what they did · their words · what I think it means · what I still need to ask.' },
    ] },
    { id: 'access', title: 'Who you can actually reach', fields: [
      { id: 'access-status', label: 'Where recruitment stands today', kind: 'choice', options: ['Someone has agreed', 'Asked, waiting for a reply', 'Nobody available: rehearsal only'], hint: 'Choose honestly. Rehearsal only is a complete result for this lesson: the prepared plan, a dated access note and what reading it aloud taught you.' },
      { id: 'access-gap', label: 'Your dated access note: who you still need and how you might reach them (no names)', kind: 'long', sensitive: true, hint: 'Waiting or rehearsal only: write today’s date, the kind of person you still need and a route to them, never a name or contact detail. If someone has agreed, write the date they agreed and “no gap”.' },
      { id: 'rehearsal-notes', label: 'What reading it aloud taught you', kind: 'long', hint: 'Which sentence was awkward, which question you wanted to answer for them.' },
    ] },
    { id: 'review', title: 'One way this could mislead you', fields: [
      { id: 'bias', label: 'One way your plan could push the answer', kind: 'long', example: 'Example (made up): I would be showing my own screen and asking if it is clear, so agreeing is the polite answer.' },
      { id: 'bias-fix', label: 'What you changed because of it', kind: 'short' },
      { id: 'limitation', label: 'What this study cannot tell you, however it goes', kind: 'short' },
      { id: 'improvement-made', label: 'What you changed after the Check questions, or why no change was needed', kind: 'long', hint: 'Name which answer you changed and why.' },
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
          { label: 'A: an interview about a recent booking. B: watching someone attempt the task on screen.', correct: true, was: ['A needs an interview about a recent booking; B needs watching someone attempt the task on the screen.'], feedback: 'A is about what happened around the booking, over days, in places your screen cannot see. B is about what this screen does to someone in the next two minutes, which you can watch.' },
          { label: 'Both need interviews, because what you want to understand is the thinking behind each.', was: ['Both need interviews, because you want to understand people’s thinking.'], feedback: 'For B an interview gets you a recollection or a guess. Watching someone hunt for the total is far more reliable than asking whether they could find it.' },
          { label: 'Both need a task, because watching what people do beats asking them about it.', was: ['Both need a task, because watching behaviour always beats asking.'], feedback: 'Watching cannot reach last Tuesday evening. A is about a sequence that already happened elsewhere, and only an account of it can reach that.' },
          { label: 'A short survey would answer both questions more cheaply and reach more people.', was: ['A survey would answer both more cheaply.'], feedback: 'A survey collects what people say they usually do, which is the least reliable version of A, and it cannot observe anyone failing to find a total.' },
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
    { expect: 'An honest recruitment status, a dated access note, and what rehearsing aloud taught you. With nobody available, this is the complete rehearsal result.',
      fields: ['access-status', 'access-gap', 'rehearsal-notes'],
      terms: [
        { term: 'Recruitment gap', meaning: 'A dated record that nobody was available. It is a real result of the work, not a failure to report.' },
        { term: 'Self-pilot', meaning: 'Running your own materials past yourself. It checks the materials; it tells you nothing about other people.' },
      ],
      start: 'If you are unsure whether to ask someone, write the message you would send. Deciding is easier once it exists.',
      enough: 'The status matches reality, the access note is dated and names no one, and if nobody is available the plan is still finished: nothing in it describes a participant.' },
    { terms: [{ term: 'Bias', meaning: 'Anything in your plan that makes one answer easier to give than another.' }, { term: 'Limitation', meaning: 'What the study cannot tell you even if it goes perfectly. You write it before you start, not afterwards.' }], demo: { scenario: 'Made-up example. Reading a finished study plan back aloud and finding the order that had already decided the answer.', beats: [{ label: 'The plan I was happy with', text: 'Explain the class, show what it involves, then ask her when she last worked out what to take somewhere.' }, { label: 'Why I put it in that order', text: 'So she would know what I meant. It felt like being considerate rather than like shaping anything.' }, { label: 'What that order does', text: 'By the time I ask, I have handed her the class, the materials and the moment I care about. Whatever she says next has my words sitting inside it.' }, { label: 'What I changed', text: 'The question about her last booking goes first, before I describe anything at all. The screen comes out afterwards, or not at all.' }, { label: 'The limitation I still wrote down', text: 'One session with one person cannot say how common anything is, however carefully the order is arranged. That sentence stays in whatever happens.' }], wrongTurn: 'The wrong turn is explaining the thing first so that the person knows what you mean. It feels like courtesy, and it puts your words in her mouth before she has answered.', tradeoff: 'Asking cold means part of the session goes somewhere you did not plan, and you may run out of time before the part you cared about. What you get is an account that was hers before it was yours.', uncertainty: 'Still unknown: whether she would have described that booking the same way on another day. One account carries the day it was told on.' }, expect: 'One way the plan could push the answer, what you changed, the limitation you accept, and the repair the Check questions asked for.',
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
      question: 'One person who booked a class last month tells you they never open confirmation emails. What have you established?',
      options: [
        { label: 'That at least one relevant person does not, so you cannot assume that everyone does.', correct: true, was: ['That at least one person with relevant experience does not, which is enough to make you stop assuming everyone does.'], feedback: 'One account cannot say how common it is, and it is real evidence that the behaviour exists. That is usually enough to change a design you were about to build on the opposite assumption.' },
        { label: 'That most people probably do not read confirmation emails, at least for classes.', was: ['That most people do not read confirmation emails.'], feedback: 'One person cannot support “most”. Written that way it will be repeated later without the caveat, and it will be treated as a number.' },
        { label: 'Nothing yet, because a single participant is not a sample of anything at all.', was: ['Nothing: a single participant is not a sample.'], feedback: 'Too dismissive. One clear account of a behaviour is a fact about the world; what it cannot give you is prevalence.' },
        { label: 'That your confirmation email design needs work before the next class goes out.', was: ['That your email design needs work.'], feedback: 'That jumps to a repair. If nobody opens it, better wording is not the answer, and you would have skipped past the finding.' },
      ],
      repair: 'Check the limitation box in step 5. If it does not say that this study cannot establish how common anything is, add that sentence and note it in step 5.',
      recheck: 'The limitation distinguishes what one or two accounts can show from what they cannot.',
    },
    {
      question: 'The easiest people to recruit are two designers you know. Why is that a problem worth writing down?',
      options: [
        { label: 'They read screens for a living, so their ease is untypical; the plan should record that.', correct: true, was: ['They read screens professionally, so their fluency is not typical, and the plan should record that limit.'], feedback: 'Convenience is not disqualifying, and it does shape what you can conclude. Recording who you actually reached is what keeps the finding honest later.' },
        { label: 'It is not a problem, since anyone at all can attempt a booking task and give feedback.', was: ['It is not a problem, since anyone can attempt a booking task.'], feedback: 'Anyone can attempt it, and a designer will notice conventions a first-time visitor never sees, which is exactly what you were trying to observe.' },
        { label: 'It means you should cancel and wait until you can recruit ideal participants instead.', was: ['You should cancel and wait for perfect participants.'], feedback: 'Waiting for the ideal participant usually means no evidence at all. Run it and record who they were.' },
      ],
      repair: 'Reread your criteria in step 2. If they describe who is easy to reach rather than the experience needed, rewrite them, and note in step 5 what you would record about whoever you actually get.',
      recheck: 'The criteria name the experience that makes an answer relevant, and the limitation says who you actually reached.',
    },
  ],
  saveRoute: {
    auto: 'The plan, consent wording, questions and access status save as you type, on this device first and then online.',
    external: 'No participant’s name, contact details or recording belongs here. Keep any consent record in your own private folder, decide the date you will delete it, and refer to it only by a file name.',
    creator: 'Your creator can read the plan and the recruitment status as soon as they save online; Ready for review tells him a version is ready. No-participant route: a plan with nobody available is complete when it holds the prepared materials, a dated access note and what rehearsing aloud taught you. It records no participant and claims nothing about people.',
    next: 'Open Your work and choose Ready for review. Lesson 2 turns notes into findings, and it supplies practice notes if your session has not happened yet.',
  },
  transfer: {
    scenario: 'Made-up case: A volunteer-run repair café is deciding whether to ask people to describe their broken item when they book, or only when they arrive. One volunteer says: “Let’s send a survey to everyone on the mailing list.” Nobody has written down what the café needs to find out.',
    prompt: 'Write the research question this decision needs, choose between an interview about a recent visit and watching someone use the booking page, and explain why that method can reach your question.',
    anchors: {
      weak: 'Accepts the survey, or picks a method first (“interviews are always best”) without a question, or asks people to predict their own behaviour (“Would you describe your item when booking?”).',
      adequate: 'Writes a question whose answer would change the decision (such as what people know about their item before they arrive), picks an interview about their last visit or a task observation, and says what that method reaches that the other cannot.',
      strong: 'Adequate, plus names who would count as relevant, one limit (a few accounts cannot show how common anything is) and what to record if nobody is available: a dated access note and a rehearsed guide.',
    },
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
        { id: `note-${n}`, label: `N0${n} · what happened`, kind: 'long' as const, sensitive: true as const,
          ...(n === 1 ? { hint: 'One thing only. If a line contains “because” or “so”, the second half is probably an interpretation. From your own session, write a de-identified one-line summary; raw notes stay in a private file or on paper with a date to delete them.', example: 'Example (made up, from the supplied notes): S1 looked for the materials list the evening before the class.' } : {}) },
        { id: `note-${n}-source`, label: `N0${n} · source`, kind: 'short' as const,
          ...(n === 1 ? { hint: 'The session or supplied note it came from: S1, S2, or a code you made up for your own session. Never a name.' } : {}) },
      ]),
    ] },
    { id: 'group', title: 'Two possible patterns', fields: [
      { id: 'group-1', label: 'Group 1 · a name for the pattern', kind: 'short', hint: 'A guess about what these notes have in common. It can be wrong.' },
      { id: 'group-1-notes', label: 'Group 1 · the note numbers in it', kind: 'short' },
      { id: 'group-2', label: 'Group 2 · a name for the pattern', kind: 'short' },
      { id: 'group-2-notes', label: 'Group 2 · the note numbers in it', kind: 'short' },
      { id: 'contradiction', label: 'The note that does not fit either group', kind: 'long', sensitive: true, hint: 'Keep it, by its note number and a short de-identified summary. The exception is often where the real finding is.', example: 'Example (made up): S4 noticed the list before booking and borrowed an item, which contradicts “nobody reads instructions”.' },
    ] },
    { id: 'findings', title: 'Two findings you could defend', fields: [
      { id: 'finding-1', label: 'Finding 1', kind: 'long' },
      { id: 'finding-1-support', label: 'Finding 1 · note numbers that support it', kind: 'short' },
      { id: 'finding-1-against', label: 'Finding 1 · what argues against it', kind: 'short', hint: 'Name the note numbers and say in a few words why they argue against it. If nothing does, look again; you may have written a summary rather than a finding.' },
      { id: 'finding-1-confidence', label: 'Finding 1 · how sure are you?', kind: 'choice', options: ['One account only', 'Two or more accounts agree', 'Accounts disagree'] },
      { id: 'finding-2', label: 'Finding 2', kind: 'long' },
      { id: 'finding-2-support', label: 'Finding 2 · note numbers that support it', kind: 'short' },
      { id: 'finding-2-against', label: 'Finding 2 · what argues against it', kind: 'short' },
      { id: 'finding-2-confidence', label: 'Finding 2 · how sure are you?', kind: 'choice', options: ['One account only', 'Two or more accounts agree', 'Accounts disagree'] },
      { id: 'unanswered', label: 'The question these notes cannot answer', kind: 'short' },
    ] },
    { id: 'implication', title: 'One thing this might mean for the design', fields: [
      { id: 'implication', label: 'A possible design implication', kind: 'long', hint: 'Possible. It follows from a finding; it is not proven by it.' },
      { id: 'improvement-made', label: 'What you changed after the Check questions, or why no change was needed', kind: 'long' },
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
      start: 'If you have no session of your own, choose the supplied notes and copy N01 to N06 into separate entries, keeping each S label.',
      enough: 'Every entry could be checked against a source, and none contains the word because.' },
    { demo: { scenario: 'Made-up example. Grouping six practice notes, where the first two groups were sorted by the words inside them.', beats: [{ label: 'My first two groups', text: '“Email” and “Website”. Every note that mentioned an email went into one pile and the rest went into the other.' }, { label: 'Why it felt right', text: 'Each note went somewhere at once and nothing was left over. It looked finished in about a minute.' }, { label: 'What was wrong with it', text: 'Email is where the note happened, not what happened. S2 searching on the journey and S4 reading the list before booking are two places and one behaviour.' }, { label: 'The names I ended with', text: '“Preparing at the last moment” and “Preparing before committing”. Names I could turn out to be wrong about, which is what a group name is for.' }, { label: 'The note that would not go in', text: 'S3 brought supplies from an earlier class and checked nothing. It sits outside both groups, written down, and it is the one I keep coming back to.' }], wrongTurn: 'The wrong turn is grouping by the word that appears in the note. It sorts everything quickly, it never leaves an awkward note over, and it describes your filing rather than the people.', tradeoff: 'A group named after a pattern can be wrong, and somebody can say so in front of you. Tidy topic piles cannot be argued with, which is exactly why they teach you nothing.', uncertainty: 'Still unknown: whether “preparing before committing” is one behaviour or two. Four accounts cannot separate them, and the name stays a guess.' }, expect: 'Two named groups with their note numbers, and the note that refuses to fit.',
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
          { label: 'These four checked at different moments, or not at all, so no single moment can be assumed.', correct: true, was: ['People prepare at different moments, from before booking to the journey itself, so no single moment can be assumed.'], feedback: 'It holds all four accounts, including S3 who did not check at all, and it says something a design has to answer: the information cannot live at one moment only.' },
          { label: 'Nobody reads the instructions before a class, so the list has to arrive later on.', was: ['Nobody reads the instructions before a class.'], feedback: 'S4 read them before booking. One counter-example is enough to sink a claim written as “nobody”, and it was in front of you.' },
          { label: 'People want a reminder the day before the class, sent straight to their phone.', was: ['People want a reminder the day before the class.'], feedback: 'Nobody said this. It is a recommendation dressed as a finding, and it fits only two of the four accounts.' },
          { label: 'Most people prepare at the last minute, usually on the way to the class itself.', was: ['Most people prepare at the last minute.'], feedback: 'Two of four is not “most”, and four accounts cannot establish proportions at all. The word most is doing work the evidence cannot support.' },
        ],
        then: 'Write your own two findings the same way: they must survive every note you have, including the one that did not fit.',
      },
      terms: [{ term: 'Counter-evidence', meaning: 'What argues against your finding. A finding with none is usually a summary of the notes you liked.' }],
      start: 'Take a group name and ask what it would mean if it were true of everyone in that group.',
      enough: 'Each finding names its supporting numbers, and neither uses most, all or nobody.' },
    { terms: [{ term: 'Design implication', meaning: 'Something the design would have to answer if a finding is right. It follows from evidence; it is not proved by it.' }, { term: 'Possible', meaning: 'A word doing real work here. It marks a consequence you are proposing, not a result you observed.' }], expect: 'One possible implication written as possible, and the repair the Check questions asked for.',
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
        { label: 'Send a reminder the day before the class starts.', was: ['Add a reminder the day before.'], feedback: 'A recommendation, and the furthest thing from an observation. It belongs at the end, attached to a finding with sources.' },
        { label: 'People prepare for classes at the last minute.', was: ['People prepare at the last minute.'], feedback: 'A finding, and a shaky one. It generalises several notes into a claim about people, which is a later step and needs its counter-evidence.' },
      ],
      repair: 'Reread your six entries in step 2. Move anything containing because, wanted, or a judgement about the person into an interpretation or a finding, then record the change in step 5.',
      recheck: 'Every entry describes what happened and could be traced to its source.',
    },
    {
      question: 'Five notes support your finding and one contradicts it. What do you do with the sixth?',
      options: [
        { label: 'Keep it beside the finding and say what it does to your confidence.', correct: true, was: ['Keep it visible beside the finding and say what it means for your confidence.'], feedback: 'The exception is where you learn something. Hiding it makes the finding look stronger and makes you worse at predicting what happens next.' },
        { label: 'Leave it out of the finding, since five against one is already a clear pattern.', was: ['Leave it out: five against one is a clear pattern.'], feedback: 'Counting notes is not measuring. With six accounts, one clear counter-example matters more than the tally.' },
        { label: 'Reword the finding until every one of the six notes agrees with it.', was: ['Change the finding until everything agrees.'], feedback: 'That usually produces something so vague it cannot be wrong. Better to keep a sharp finding and state where it fails.' },
        { label: 'Start the grouping again with different groups so that it fits.', was: ['Start again with different groups.'], feedback: 'Regrouping to escape a contradiction is how you end up with tidy findings nobody can use.' },
      ],
      repair: 'Check the counter-evidence boxes in step 4. If either says none, look again for the note that does not fit and write it in, then say what changed in step 5.',
      recheck: 'Each finding names what argues against it, and its confidence reflects that.',
    },
    {
      question: 'You used the supplied practice notes. How may this work appear later in a portfolio?',
      options: [
        { label: 'Labelled as a training exercise with supplied notes, not as interviews you ran.', correct: true, was: ['Clearly labelled as a training exercise with supplied notes, never as interviews you conducted.'], feedback: 'The method is genuinely yours to show. The participants are not, and a reader who discovers that later will doubt everything else you wrote.' },
        { label: 'As research findings, since the analysis you did on the notes was real work.', was: ['As research findings, since the analysis work was real.'], feedback: 'The analysis was real and the sources were invented. Presented as findings, the claim about people is false regardless of how careful the method was.' },
        { label: 'It should not appear in a portfolio at all, because the notes were made up.', was: ['It should not appear at all.'], feedback: 'It can appear, labelled. A worked synthesis with supplied notes shows exactly the skill a reviewer wants to see.' },
      ],
      repair: 'Check the source label in step 2 and the wording of your findings. If a finding reads as though real people said it, add the supplied-notes label to the finding itself, then record the change in step 5.',
      recheck: 'The source type is set, and any finding drawn from supplied notes says so where it is written.',
    },
  ],
  saveRoute: {
    auto: 'Your entries, groups and findings save as you type, on this device first and then online.',
    external: 'Keep any raw session notes in your own private folder or on paper, with a date to delete them. Nothing here should carry a participant’s name or any detail that could identify them — removing the name alone does not make a note anonymous — and nothing is uploaded.',
    creator: 'Your creator can read the entries, findings and their counter-evidence as soon as they save online; Ready for review tells him a version is ready. Supplied-notes route: the work is complete when every finding drawn from the supplied notes says simulated training data. It shows the method, not anything about real people.',
    next: 'Open Your work and choose Ready for review. Lesson 3 turns one of these findings into a small change worth testing.',
  },
  transfer: {
    scenario: 'Made-up case: four practice notes (simulated training data) from a community allotment. A1 read the watering rota before taking a plot. A2 asked a neighbour about the rota after a month. A3 never looked at the rota and watered every day. A4 found the rota pinned to the shed gate in the first week.',
    prompt: 'Write one finding these notes support, with the note IDs behind it and any note that argues against it, and explain why your finding claims no more than four notes can show.',
    anchors: {
      weak: 'Writes a claim the notes cannot support (“nobody reads the rota”, “most people ask neighbours”) or a recommendation (“put the rota online”), with no note IDs.',
      adequate: 'Writes a finding that holds for all four — for example, people learn about the rota at different times and in different places — cites A1 to A4, keeps A3 visible, and labels the notes as practice material.',
      strong: 'Adequate, plus says what four notes cannot show (how common each route is), names a question the notes cannot answer, and writes one implication as possible rather than proven.',
    },
  },
};

const opportunity: Guided = {
  route: textRoute,
  worksheet: [
    { id: 'evidence', title: 'The finding you are working from', fields: [
      { id: 'finding', label: 'The finding', kind: 'long', hint: 'Copy it from Lesson 2, with its source label. No Lesson 2 finding? Use the practice finding in the starting route and keep it labelled as practice.' },
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
      { id: 'improvement-made', label: 'What you changed after the Check questions, or why no change was needed', kind: 'long' },
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
    { demo: { scenario: 'Made-up example. Picking one of three options for a village library room-booking page, and picking the wrong one for the wrong reason.', beats: [{ label: 'The three on the table', text: 'Redraw the results page so rooms are easier to compare. Say on each room whether a key has to be collected from the desk. Let someone ring a number and have the desk book it for them.' }, { label: 'The one I reached for', text: 'The results page. I could already see it finished, and being able to picture something felt a great deal like being ready to build it.' }, { label: 'The question I had skipped', text: 'Not which one I want to draw. Which answer would change what I do next. If the key is the reason people ring the desk, a prettier results page changes nothing at all.' }, { label: 'What I chose instead', text: 'The key line. One sentence on a card, and the dullest of the three by a distance.' }, { label: 'The cost, written honestly', text: 'My first attempt said “costs a little extra work”. That is not a cost. The real one: the results page stays ugly for another fortnight and it is the screen anyone opening my folder sees first.' }, { label: 'What I left out on purpose', text: 'Filters, photographs of the rooms, and the map. Written down as excluded, because if I quietly slip the map back in I will not know which change did anything.' }], wrongTurn: 'The wrong turn is choosing the option you most want to draw. It is the one you can already picture, and picturing it feels like readiness rather than preference.', tradeoff: 'The choice that teaches you most is often the one with almost nothing to show. You spend the week on a single sentence about keys while the ugly screen stays ugly, and nobody looking through your work will be impressed by it.', uncertainty: 'Still unknown: whether people ring the desk about keys at all. Two accounts pointed that way and two accounts are a reason to test, not a reason to be sure.' }, expect: 'One choice, what it costs, and what you are leaving out.', fields: ['choice', 'tradeoff', 'out-of-scope'],
      terms: [{ term: 'Scope', meaning: 'What this test covers. Everything else is written down as excluded so the result stays interpretable.' }],
      start: 'Choose the option whose result would change your next decision most, not the one you most want to build.',
      enough: 'The excluded list contains something you would have enjoyed doing.' },
    { expect: 'A hypothesis with something you could watch, a success signal, a disconfirming signal written in advance, and a neutral task.',
      fields: ['hypothesis', 'signal', 'counter-signal', 'task'],
      supported: {
        material: 'Two supplied hypotheses for the same made-up change. A: “If the total cost appears before the form, first-time visitors will like the booking experience more.” B: “If the total cost appears before the form, a first-time visitor can say what the evening will cost, including materials, without scrolling back.”',
        question: 'Which one can a short session actually test, and why?',
        options: [
          { label: 'B, because it names something you could watch a person do or fail to do.', correct: true, was: ['B, because it names something you could watch someone do or fail to do.'], feedback: 'You can hand someone the task and see whether they can answer without going back. It can also come out badly, which is what makes it a test.' },
          { label: 'A, because liking the experience is what ultimately matters to the business.', was: ['A, because liking the experience is what ultimately matters.'], feedback: 'Liking is real and you cannot observe it, and asked directly people are kind to the person who made the thing. Nothing in a session would settle it.' },
          { label: 'Both, as long as you ask a satisfaction question at the end of each session.', was: ['Both, if you ask a satisfaction question at the end.'], feedback: 'Adding a rating to B does not make A testable; it adds a number with no meaning to a session of one or two people.' },
          { label: 'Neither, because a paper prototype cannot test anything about cost.', was: ['Neither: a prototype cannot test anything about cost.'], feedback: 'It can test whether the information can be found and understood, which is precisely what B claims. What it cannot test is whether more people would book.' },
        ],
        then: 'Write yours in the same shape, then write the disconfirming signal before you test anything.',
      },
      terms: [{ term: 'Disconfirming signal', meaning: 'What you would see if the change did not help. Writing it first is what stops an inconvenient result being explained away.' }],
      start: 'Fill in “If … then … can …” and make the last part something a person in the room could see.',
      enough: 'Both signals name observable behaviour, and the task names no button.' },
    { terms: [{ term: 'Prototype', meaning: 'The smallest set of screens someone can attempt your task on. It only has to work for that one task, and it may be paper.' }, { term: 'Repair', meaning: 'The change you make after a Check question shows a gap. You write down what you altered, so a reader can see the before and the after.' }], expect: 'What the prototype must be able to do, and the repair the Check questions asked for.',
      fields: ['prototype-needs', 'improvement-made'],
      start: 'Walk your task in your head and list every screen the person would have to reach.',
      enough: 'The list is the smallest set that lets someone attempt the task, including one thing going wrong.' },
  ],
  checks: [
    {
      question: 'You score three options for effort out of five and pick the lowest. Is that measured evidence?',
      options: [
        { label: 'It is an estimate written as a number, so the reason behind it should stay beside it.', correct: true, was: ['No. It is your estimate written as a number, and it should keep the reason beside it.'], feedback: 'Numbers look decided. Unless something measured the effort, the score is a judgement, and the reason is the part a reader can argue with.' },
        { label: 'It counts as measured once all three use the same five-point scale consistently.', was: ['Yes, if you use the same scale for all three.'], feedback: 'A consistent scale makes estimates comparable with each other. It does not turn any of them into a measurement.' },
        { label: 'It counts as evidence, because effort scores are standard practice in product teams.', was: ['Yes, effort estimates are standard practice in product teams.'], feedback: 'They are standard and they are still estimates. Teams that forget this build plans on numbers nobody checked.' },
      ],
      repair: 'Reread your effort lines in step 2. Add the reason behind each estimate, and record the change in step 5.',
      recheck: 'Every effort estimate names what it rests on, and none is presented as a measurement.',
    },
    {
      question: 'Your hypothesis says “users will find it easier”. What is missing?',
      options: [
        { label: 'Something you could watch that would show it working, and what would show it failing.', correct: true, was: ['Something you could watch: what a person would do or say that would show it, and what would show the opposite.'], feedback: 'Easier is a summary of an experience, not an event. Without an observable version, any session can be read as a success.' },
        { label: 'A number, such as the percentage improvement in ease that you expect to see.', was: ['A number, such as a percentage improvement.'], feedback: 'A number you cannot collect is worse than a vague claim, because it looks rigorous. One or two people cannot produce a rate.' },
        { label: 'Nothing, as long as you ask each person afterwards whether it felt easier to them.', was: ['Nothing, as long as you ask them afterwards whether it was easier.'], feedback: 'Asked by the person who designed it, many people say yes to be kind. That answer cannot separate a good change from a polite participant.' },
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
    creator: 'Your creator can read the three options, the choice and both signals as soon as they save online; Ready for review tells him a version is ready. The disconfirming signal is the part worth his attention. If your finding came from the supplied practice notes, keep that label: the choice is then practice reasoning, not a decision about real people.',
    next: 'Open Your work and choose Ready for review. Lesson 4 builds only the states your task needs, so keep the task wording exactly as you wrote it.',
  },
  transfer: {
    scenario: 'Made-up case: practice notes (simulated) from a city museum’s free timed-ticket booking: of four visitors, two went to the wrong entrance, one asked a guard, and one followed a sign. The team lists three options: a map printed on the ticket, a member of staff at both doors, and naming the entrance in the booking confirmation.',
    prompt: 'Choose the option you would test first and write a hypothesis that ends in something you could watch. Explain why your choice is worth testing before the others.',
    anchors: {
      weak: 'Picks the option that is most fun to design, or writes “it will improve visitor satisfaction”, with no observable signal and nothing that could show it failing.',
      adequate: 'Chooses one option for a stated reason tied to the notes and writes “If …, a first-time visitor can find the right entrance without asking staff”, with a signal that would show it failing.',
      strong: 'Adequate, plus labels effort as an estimate with its reason, lists what the test leaves out, and notes that four simulated notes cannot show how common wrong-entrance trips are.',
    },
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
      { id: 'recovery', label: 'The one thing that goes wrong, and how they recover', kind: 'long', hint: 'A full class, a mistyped email, a dropped connection. Draw the card before the session, not during it, and put the way forward on it — another date, a fix, a way back — not just the bad news.' },
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
      { id: 'improvement-made', label: 'What you changed after the Check questions, or why no change was needed', kind: 'long' },
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
      enough: 'Every screen you listed is needed to attempt the task, and one shows something going wrong with a way forward on it.' },
    { expect: 'Invented content marked as invented, and a plan for actions that will not work.',
      fields: ['invented-content', 'out-of-scope-actions'],
      terms: [{ term: 'Out of scope', meaning: 'Something the prototype cannot do. Named in advance it is a boundary; discovered mid-session it is a broken test.' }],
      start: 'Look at every price, name and date on your cards and ask where the number came from.',
      enough: 'No real payment details or real people appear anywhere, and each dead control has a sentence ready.' },
    { expect: 'What broke when you walked it yourself, and what you fixed. This is a self-pilot, not a test with a person.',
      fields: ['pilot-findings', 'pilot-fixes'],
      supported: {
        material: 'A supplied self-pilot from the same made-up prototype. Walking the task, the author found three things: the class list card had no prices on it; pressing Reserve led to a card that did not exist yet; and the full-class card said “Sorry, full” with nothing else on it, although the plan said that card would offer Sunday’s class instead.',
        question: 'Which of those three can safely stay as it is for the session?',
        options: [
          { label: 'The full-class card: an empty failure is worth watching someone hit.', was: ['The full-class card: its emptiness is a design problem worth watching someone hit.'], feedback: 'You already know an empty failure card is a dead end: Module 1 Lesson 4 called it one. Someone stuck there cannot reach Sunday, so you learn nothing new about the total you set out to test. Draw the recovery first.' },
          { label: 'The missing prices: the person can simply ask you what things cost.', was: ['The missing prices: the person can ask you what things cost.'], feedback: 'Asking you turns the facilitator into part of the interface, and the task was about finding the cost. That has to be on the card.' },
          { label: 'The missing card after Reserve: you can describe that screen aloud.', was: ['The missing card after Reserve: you can describe it aloud instead.'], feedback: 'Describing it aloud means you are designing during the session and the person is reacting to your narration rather than the design.' },
          { label: 'None of them: each one leaves the person stuck or forces you to improvise.', correct: true, was: ['All three should be fixed, since a session should run smoothly.'], feedback: 'A missing price and a missing card stop the task. The bare full card does too: it is a dead end, it was planned to offer Sunday, and without that nobody can show you whether the total was clear enough to compare. Fix all three before anyone else sees it.' },
        ],
        then: 'Sort your own findings the same way: repair anything that stops the task or departs from your plan, including a failure card with no way forward. Leave wording or layout you are unsure about in place; that is what the session is for.',
      },
      terms: [{ term: 'Self-pilot', meaning: 'Walking your own prototype to find broken links and missing screens. It checks the materials; it cannot tell you how a first-time visitor would use the design.' }],
      start: 'Do the task yourself, slowly, and stop every time you have to explain something to yourself.',
      enough: 'Nothing is missing that would force you to invent a screen while someone is watching, and the failure card offers a way forward.' },
    { demo: { scenario: 'Made-up example. Writing the task card for a parents-evening booking prototype, first with the route inside it and then with nothing left to observe.', beats: [{ label: 'What I wrote first', text: '“Use the calendar to pick a slot with Mr Ellis and press Confirm.” It reads like a clear instruction, which is the trouble with it.' }, { label: 'Why it looked fine to me', text: 'It describes exactly the thing I wanted to watch. Naming the calendar and the button hands over both decisions before the person has made either.' }, { label: 'Over-correcting', text: 'So I wrote “have a look around and tell me what you think”. Now there is nothing to reach and nothing to fail at, and whatever happens I can call it a success.' }, { label: 'Where it settled', text: '“You have two children at the school and one free evening this week. Find out whether you can see both of their teachers on the same night.” A situation, a goal, no part of the screen named.' }, { label: 'The reset I had not thought about', text: 'After my own walk-through the confirmation card was face up and one slot was crossed off. The second person would have started from a different prototype without either of us noticing.' }, { label: 'What the reset says now', text: 'Cards stacked S01 on top, a clean copy of the slot sheet for each attempt, confirmation card back in the pile. Thirty seconds between attempts, written down so I do not skip it when I am tired.' }], wrongTurn: 'The wrong turn is putting the control in the task. You want them to reach the part you built, so you point at it, and it feels like being helpful rather than like giving away the answer.', tradeoff: 'A task with no route means someone may spend four minutes somewhere you never expected and never arrive at the screen you care about. That silence is the finding, and it is uncomfortable to sit through without rescuing them.', uncertainty: 'Still unknown: whether “one free evening” makes people hurry in a way a real parent would not. The situation you invent shapes what you see, and you cannot take that out of the room.' }, expect: 'The task in the exact words you will say, and how you reset between attempts.',
      fields: ['scenario', 'reset'],
      terms: [{ term: 'Neutral task', meaning: 'A goal with a situation and no route. If it contains a button name, you have given away the answer.' }],
      start: 'Read your Lesson 3 task aloud and cross out every word that names part of the interface.',
      enough: 'Someone could attempt the task without you saying anything else.' },
    { terms: [{ term: 'Limitation', meaning: 'Something your method could not show, written beside what it did show. It is part of the result, not an apology for it.' }, { term: 'Screen reader', meaning: 'Software that reads a screen aloud, used by people who cannot see it or who find reading hard. Paper cannot tell you what it would say, or in what order.' }, { term: 'Server', meaning: 'A computer elsewhere that stores information and sends it back. Paper has none, so anything that waits, fails or arrives late cannot be tested here.' }], expect: 'What this prototype cannot establish, where the screens are, and the repair the Check questions asked for.',
      fields: ['limitations', 'photo-reference', 'improvement-made'],
      start: 'List everything a person might reasonably conclude from a paper session that would be wrong.',
      enough: 'The list names keyboard and screen-reader behaviour and anything requiring a server.' },
  ],
  checks: [
    {
      question: 'Your paper prototype works well in the session. What may you claim from that?',
      options: [
        { label: 'That the intended steps made sense to that person on paper, not that a build would work.', correct: true, was: ['That the intended behaviour made sense to that person on paper, which says nothing about a built version.'], feedback: 'Paper reaches comprehension and sequence. Speed, keyboard access, screen-reader output and anything a server does are all outside what you just saw.' },
        { label: 'That the design works for people and can now be built exactly as it was drawn.', was: ['That the design works and can be built as drawn.'], feedback: 'A built version introduces waiting, errors, focus order and states you never drew. Those are where designs usually fail.' },
        { label: 'That the flow is accessible, since you read every card aloud as the person went.', was: ['That the flow is accessible, since you read every card aloud.'], feedback: 'Reading aloud is you, not the technology. Whether a screen reader would announce it in that order is a property of code you have not written.' },
      ],
      repair: 'Reread your limitations in step 5. If it does not name keyboard and screen-reader behaviour and anything a server would do, add them and note the change.',
      recheck: 'The limitations distinguish what paper showed from what only a build could show.',
    },
    {
      question: 'Your task card says: “Use the filter to find Saturday’s pottery class and press Reserve.” What is wrong?',
      options: [
        { label: 'It names the route, so you will watch someone follow orders, not find their own way.', correct: true, was: ['It contains the route, so you will watch someone follow instructions rather than find their way.'], feedback: 'Naming the filter and the button hands over both decisions you wanted to observe. The session becomes a test of whether they can follow directions.' },
        { label: 'Nothing: being specific stops the person getting lost and keeps the session short.', was: ['Nothing: being specific stops the person getting lost.'], feedback: 'Getting lost is the finding. If you steer them past it, you have removed the only part that could have taught you something.' },
        { label: 'It is too long for someone to hold in mind while they work through the prototype.', was: ['It is too long for someone to remember.'], feedback: 'Length is a small matter; you can leave the card with them. The route inside it is the problem.' },
      ],
      repair: 'Rewrite your task in step 4 as a goal and a situation with no interface words, then record the change in step 5.',
      recheck: 'The task names no button, link or filter, and still says what a good outcome would be for the person.',
    },
    {
      question: 'You have one evening. Do you spend it drawing more screens or on the failure card and the reset?',
      options: [
        { label: 'The failure card with its way forward, and the reset, because the test needs both.', correct: true, was: ['The failure card and the reset, because the session collapses without them.'], feedback: 'A failure card with no way forward is a dead end you would have to rescue mid-session; no reset means the second attempt is not comparable. Extra screens rarely change what you learn.' },
        { label: 'More screens, so the person can explore the prototype naturally, as they would at home.', was: ['More screens, so the person can explore naturally.'], feedback: 'Exploration is pleasant and it is not the task. More surface makes every observation harder to attribute.' },
        { label: 'Neither: colour and typography are what make people take a prototype seriously.', was: ['Neither: colour and typography make people take it seriously.'], feedback: 'Polish on paper mostly buys politeness. People criticise a rough sketch more freely, which is what you want.' },
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
  transfer: {
    scenario: 'Made-up case: You are making a paper prototype to test whether visitors to a climbing wall’s booking page can find the total price for two people, including shoe hire. You have drawn a home page, a search page, a sign-in page, a session list, a session details card and a “session full” card that says only “Full”.',
    prompt: 'Decide which cards this test needs and what you would change on the “Full” card before anyone tries it. Explain why each decision serves the question about total price.',
    anchors: {
      weak: 'Keeps every card because a fuller prototype feels more realistic, or leaves “Full” as a bare dead end to “see what happens”.',
      adequate: 'Keeps the session list, the details card and the full card, cuts sign-in and search or marks them out of scope, and adds a way forward to the full card, such as the next free session, explaining each choice against the question.',
      strong: 'Adequate, plus writes a neutral task with no route in it, plans a reset between attempts, and notes that paper cannot show real payment or screen-reader behaviour.',
    },
  },
};

const observing: Guided = {
  route: paperRoute('the before and after versions of the screen you repair'),
  worksheet: [
    { id: 'prepare', title: 'Before you start', fields: [
      { id: 'session-status', label: 'What is actually happening', kind: 'choice', options: ['A consenting adult is taking part', 'Self-pilot only: nobody was available'], hint: 'Choose honestly. Self-pilot only is a complete result: you attempt the task yourself, record what it shows about the materials, mark the participant answers as self-pilot, and say that no participant evidence exists yet.' },
      { id: 'consent-confirmed', label: 'If someone is taking part, what you said before starting', kind: 'long', sensitive: true, hint: 'The words you used: voluntary, can stop, what the notes are for, who will read them, when they will be deleted, no recording without asking. Never a name or signature; keep any consent record in your private folder.' },
    ] },
    { id: 'observe', title: 'What happened', intro: 'Behaviour first. Reasons come in the next step.', fields: [
      { id: 'observation-1', label: 'Observation 1 · what they did or said, without identifying details (on a self-pilot, what you found)', kind: 'long', sensitive: true, hint: 'Raw notes stay on paper or in a private file with a date to delete them; write a short de-identified summary here. On a self-pilot, write what your own attempt showed about the materials.', example: 'Example (made up): she asked whether “materials supplied” included a sketchbook, then went back to the class list.' },
      { id: 'observation-2', label: 'Observation 2 · what they did or said, without identifying details (on a self-pilot, what you found)', kind: 'long', sensitive: true },
      { id: 'help-given', label: 'Any help you gave, and when', kind: 'long', sensitive: true, hint: 'Record it. Help changes what the outcome can mean. On a self-pilot, write “None: self-pilot”.', example: 'Example (made up): after two minutes I said “the details are on the class page”, which is how she found it.' },
      { id: 'task-outcome', label: 'How the attempt ended', kind: 'choice', sensitive: true, options: ['Finished without help', 'Finished after help from me', 'Did not finish', 'Self-pilot: not applicable'] },
    ] },
    { id: 'interpret', title: 'What it might mean', fields: [
      { id: 'explanation-1', label: 'A possible reason for observation 1', kind: 'long', sensitive: true },
      { id: 'explanation-2', label: 'A possible reason for observation 2', kind: 'long', sensitive: true },
      { id: 'contrary', label: 'Anything that argues against your reading', kind: 'short' },
      { id: 'severity', label: 'Which of the two matters more for finishing the task, and why', kind: 'long' },
    ] },
    { id: 'repair', title: 'One bounded change', fields: [
      { id: 'original-kept', label: 'Where the untouched original is', kind: 'short' },
      { id: 'repair', label: 'The one thing you changed', kind: 'long', hint: 'One. Everything else stays as it was so the comparison means something.' },
      { id: 'expected-change', label: 'What you expect to be different, and what stays untested', kind: 'long' },
    ] },
    { id: 'report', title: 'The short report', fields: [
      { id: 'report-evidence', label: 'Evidence', kind: 'long', sensitive: true, hint: 'What you saw, summarised without identifying details, with the session type in the first sentence: self-pilot, or a session with a consenting adult.' },
      { id: 'report-decision', label: 'Decision', kind: 'short' },
      { id: 'report-revision', label: 'Revision', kind: 'short' },
      { id: 'report-next-check', label: 'Next check', kind: 'short', hint: 'Who would you watch, doing what, to find out whether the repair helped?' },
      { id: 'photo-reference', label: 'Where the before and after versions live', kind: 'short' },
      { id: 'improvement-made', label: 'What you changed after the Check questions, or why no change was needed', kind: 'long' },
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
    { expect: 'Two observations, any help you gave, and how the attempt ended; on a self-pilot, what your own attempt showed and “None” for help.',
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
      enough: 'Nothing in the observation boxes is a word like confused, frustrated or careless. On a self-pilot, they describe your own attempt, help says none and the outcome says not applicable.' },
    { expect: 'A possible reason for each observation, anything arguing against it, and which one matters more.',
      fields: ['explanation-1', 'explanation-2', 'contrary', 'severity'],
      supported: {
        material: 'A made-up line from someone else’s session notes: “The participant clicked Reserve twice, then said ‘I don’t know if that worked’. The facilitator confirmed the booking had gone through.”',
        question: 'How should this be recorded?',
        options: [
          { label: 'Observed: two presses and the sentence. Assisted: facilitator confirmed. Inferred: no visible feedback.', was: ['Observed: two presses and that sentence. Assisted: the facilitator confirmed it. Interpretation: the button gave no visible feedback.'], correct: true, feedback: 'All three parts are separated, so a reader can see what happened, what you did, and what you concluded. The missing feedback is a strong reading and it is still a reading.' },
          { label: 'Observed: the participant was unsure whether the booking had worked, so pressed again.', was: ['Observed: the participant was unsure whether the booking worked.'], feedback: 'Unsure is your interpretation of the sentence and the second press. Close to certain, and still not what you saw.' },
          { label: 'Finding: the confirmation step is broken and needs a loading state before the next session.', was: ['Finding: the confirmation is broken and needs a loading state.'], feedback: 'That is a recommendation built on one moment, and it skips both the observation and the fact that you intervened.' },
          { label: 'Observed: the participant double-clicked, which is normal behaviour for older users anyway.', was: ['Observed: the participant double-clicked, which is normal behaviour for older users.'], feedback: 'It adds a claim about a whole group from one person, and it explains away the very thing you should be curious about.' },
        ],
        then: 'Split your own two observations the same way, and make sure any help you gave is recorded beside the outcome rather than inside it.',
      },
      terms: [{ term: 'Severity', meaning: 'How much an issue affects finishing the task. Not how annoying it looked, and not how often it happened in one session.' }],
      start: 'For each observation write “this might be because…” and stop before proposing a fix.',
      enough: 'The severity reason names the consequence for the person, not your preference.' },
    { demo: { scenario: 'Made-up example. Repairing a bike-repair drop-off form after one session, and fixing four things at once with the pen already in hand.', beats: [{ label: 'What I saw', text: 'She read the line “preferred collection”, left it blank, and went back to the first card twice before carrying on.' }, { label: 'What I did within a minute', text: 'Changed the label to “when would you like to collect it”, wrote an example underneath, moved the question above the contact details, and darkened the button while I was there.' }, { label: 'Why that ruins the next session', text: 'If the next person sails through, I cannot say which of the four did it. If she stumbles, I cannot say which of the four did that either. Four changes give one impression and no attribution.' }, { label: 'The original I nearly lost', text: 'I had rubbed the old label off the same card. Redrawing it from memory is not keeping it, so now the untouched version goes in an envelope before the pen comes out.' }, { label: 'What I kept', text: 'One change: the label. The example, the order and the button went on a list headed “not this time”, with the observation each of them was guessing about.' }, { label: 'What that list is for', text: 'Three things I am fairly sure are wrong are now written down as guesses instead of quietly done. That is the difference between a note and a decision.' }], wrongTurn: 'The wrong turn is repairing everything you noticed while you are already sitting there with the pen. It feels efficient, and it removes any chance of saying which change mattered.', tradeoff: 'You leave three things you believe are wrong exactly as they are, and the next person will probably hit them. Watching someone struggle with something you already know how to fix is the price of a comparison that means anything.', uncertainty: 'Still unknown: whether the label was the thing that mattered at all. It is the change you can argue for from what you saw, which is not the same as being right.' }, expect: 'The original kept, one bounded change, and what you expect versus what stays untested.',
      fields: ['original-kept', 'repair', 'expected-change'],
      terms: [{ term: 'Bounded repair', meaning: 'One change addressing one issue, so the before and after can be compared.' }],
      start: 'Copy or photograph the original first, then change exactly one thing.',
      enough: 'A reader could name the single difference between the two versions.' },
    { terms: [{ term: 'Evidence', meaning: 'Here it means what you actually saw or heard, with the session type beside it. Not what you concluded from it, and not what you expected.' }, { term: 'Revision', meaning: 'The changed version, named or filed so a reader can put it next to the original and see the one difference.' }, { term: 'Next check', meaning: 'The observation that would tell you whether the repair helped. It names a person and a task, and it has not happened yet.' }], expect: 'Four short sections, where the versions live, and the repair the Check questions asked for.',
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
        { label: 'Did not finish, because she needed help to reach the end of the task.', was: ['Did not finish, because she needed help.'], feedback: 'Too severe and it loses information. She did finish; the honest record says what it took.' },
      ],
      repair: 'Check the help and outcome boxes in step 2. If you helped and the outcome says finished without help, correct it and record the change in step 5. On a self-pilot, the outcome should read “Self-pilot: not applicable” and help should say none.',
      recheck: 'The outcome names whether help was given, and the help is written down where it happened.',
    },
    {
      question: 'After the repair you write: “This fixes the problem.” What is the honest version?',
      options: [
        { label: 'You changed the design in response to evidence; another check must show whether it helped.', was: ['That you changed the design in response to evidence, and it needs another check before anyone can say it helped.'], correct: true, feedback: 'A repair is a response, not a result. The next check is the sentence that keeps it that way and tells you what to do next.' },
        { label: 'The original sentence is fine, because the change directly addresses what you observed.', was: ['It is fine: the change directly addresses what you observed.'], feedback: 'Addressing an observation is the reason to try it. Whether it works for the next person is unknown until someone else meets it.' },
        { label: 'The original is fine if the participant agreed that the new version was the better one.', was: ['It is fine if the participant agreed the new version was better.'], feedback: 'Shown two versions by the person who made them, agreement is likely and tells you very little.' },
      ],
      repair: 'Reread your Revision and Next check sections in step 5. Rewrite any claim of a fix as an expectation with the observation that would test it, then note the change.',
      recheck: 'The report separates what changed from what remains untested, and the next check names a person and a task.',
    },
    {
      question: 'Nobody was available, so you ran the task yourself. What can the report say?',
      options: [
        { label: 'Self-pilot: what it found in the materials, and that no participant evidence exists yet.', was: ['That it was a self-pilot, what it found about the materials, and that no participant evidence exists yet.'], correct: true, feedback: 'A self-pilot finds broken paths, missing cards and unclear wording, which is real and worth reporting. It cannot tell you what a first-time visitor would do.' },
        { label: 'That the flow works, since you completed every step of it without any difficulty.', was: ['That the flow works, since you completed it without difficulty.'], feedback: 'You designed it, so you know where everything is. Your fluency is the least informative result available.' },
        { label: 'The findings you would expect a first-time participant to have produced, marked as likely.', was: ['The findings you would expect a participant to have produced.'], feedback: 'That is an invented participant. Once written it gets quoted, and everything else you report becomes suspect.' },
        { label: 'Nothing yet, since this lesson cannot be completed without a real participant.', was: ['Nothing, since the lesson needs a participant.'], feedback: 'The lesson is complete with a self-pilot honestly reported. A dated recruitment gap is a result, not a failure.' },
      ],
      repair: 'Check the session type in step 1 and the Evidence section in step 5. Make sure the session type appears in the first sentence of the report, then record the change.',
      recheck: 'A reader learns in the first line whether a participant took part, and no conclusion outruns that.',
    },
  ],
  saveRoute: {
    auto: 'Your notes, interpretations and report save as you type, on this device first and then online.',
    external: 'Keep the before and after screens, and any consent record, in your own private folder. No participant name or contact detail belongs in this worksheet, and nothing is uploaded.',
    creator: 'Your creator can read the report, the observations and the limits as soon as they save online; Ready for review tells him a version is ready. This is practice evidence for later reasoning, not a portfolio case study. No-participant route: a self-pilot is complete when the status says self-pilot, the observations describe your own attempt, help says none, the outcome says not applicable, and the report opens with “Self-pilot” and says no participant evidence exists yet.',
    next: 'Open Your work and choose Ready for review. This closes Module 2; Module 3 returns to visual foundations with the evidence you have gathered.',
  },
  transfer: {
    scenario: 'Made-up case: Nobody was available, so you walked through your own paper prototype of a ferry ticket booking. You noticed that the return-date card never says which port the return sailing leaves from, and you hesitated over the luggage question. Your draft report begins: “Users struggle with the luggage question.”',
    prompt: 'Rewrite the first sentence of the report so it matches what actually happened, and explain why your version is honest about the session type and about what it can and cannot show.',
    anchors: {
      weak: 'Keeps a claim about users or travellers (“people find the luggage question confusing”), or writes the findings a participant might have produced, although nobody else took part.',
      adequate: 'Opens with “Self-pilot:” and reports what the walk-through found in the materials — the missing return port and your own hesitation — and states that no participant evidence exists yet.',
      strong: 'Adequate, plus proposes one bounded repair (add the return port), keeps the original card, and names a next check with a real person and a task, written as still to do.',
    },
  },
};

export const activities: Record<string, Activity> = {
  'week1-day1-v1': {
    activity: 'Design detective',
    mission: 'Follow one task in an app you already use, such as finding a class or an event. Stop before booking or paying. One task, not the whole app.',
    columns: 'Step | What I saw or did | Observed / inferred / unknown | Goal affected | How to check',
    first: '1 | [name the starting page and action] | [choose a label] | [goal] | [missing evidence]',
    hints: ['If you can point at it on the screen, it is observed. Why anybody behaves a certain way is never on the screen.', 'If you wrote “people are confused”, write down the exact words or the step you saw instead, and keep confusion as your reading of it.'],
    adequate: 'Five entries where anyone can tell which parts came from your own walkthrough and which are your reading of other people. Both improvements say how you would know they helped.',
    handoff: 'Keep this table. Lesson 2 starts from it. If you followed a task outside the course brief, keep it as practice and start the brief separately rather than carrying these findings across.',
    coach: 'Ask me to defend one evidence label at a time. Spot an unsupported assumption without rewriting my table.',
    alternative: 'Cover the label column. Label each entry again, then say which ones somebody else could check for themselves.',
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
    handoff: 'Use de-identified observations in your flow — never raw notes — and keep recruitment gaps visible.',
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
    coach: 'Ask me what each arrow means and what happens after the failure I injected. Do not redraw my flow; make me say where a person ends up when there are no places left.',
    alternative: 'Cover your labels and hand the sheet to yourself an hour later. Trace the failure route with a finger. Anywhere you have to remember what an arrow meant, write the meaning on the sheet.',
    handoff: 'Bring the numbered flow to the screen exercise in Lesson 5.',
    ...flowMapping,
  },
  'week1-day5-v1': {
    activity: 'Screen construction workshop', visual: true,
    mission: 'Turn your numbered flow into two paper screens, the workshop details and the reservation form, each at a narrow and a wide width. Use real labels and content so another person can follow the task without your narration.',
    columns: 'Screen / flow node | Main action | Information needed | State / error | Why this order',
    first: '[screen name and node] | [verb + object] | [actual content] | [feedback] | [goal supported]',
    hints: ['Draw screen boundaries first, then place the information needed before the main action.', 'Cover your annotations and try following only the visible labels. Add missing feedback where you must explain aloud.'],
    adequate: 'Both screens at both widths trace to the flow, with legible labels, feedback, a reason for information priority, and reading order kept separate from Tab order.',
    coach: 'Ask me to read one screen aloud as though I had never seen it. Challenge any label that only makes sense because I drew it. Do not write my labels for me.',
    alternative: 'Give the three screens to someone with no explanation, or reread them cold tomorrow. Note every place a word had to be explained; those are the labels to rewrite.',
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
    coach: 'Ask me what decision changes depending on what I find, and what I would do if nobody replies. Challenge any plan that cannot produce a wrong answer.',
    alternative: 'For each planned question write the two answers you might get and what you would do differently for each. If both lead to the same action, cut the question.',
    handoff: 'Bring de-identified summaries of real notes to synthesis — never raw notes — or use the clearly labelled practice notes without asserting findings.',
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
    coach: 'Inspect my de-identified evidence chain. Ask which source supports one interpretation and identify a possible alternative explanation; do not invent notes.',
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
    coach: 'Ask me which evidence sits behind each of the three changes, and what I would have to see to abandon the one I picked. Do not choose for me.',
    alternative: 'Write the disconfirming observation for your chosen opportunity first, then check whether anything you already hold contradicts it. If nothing could contradict it, the opportunity is not yet a claim.',
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
    coach: 'Ask me which states I built and which I left out, and what I will do when the person taps something I did not draw. Do not design the missing screens.',
    alternative: 'Walk your own task twice, once deliberately going somewhere you did not draw. Write what you would say as the system, and add only the state that removes the guess.',
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
    coach: 'Ask me to separate what I saw from what I concluded, one line at a time. Challenge any percentage or any claim about people I did not observe.',
    alternative: 'Reread your report and mark each sentence as observed or concluded. Every conclusion needs the observation it rests on written next to it, or it comes out.',
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
    hints: ['Use the spacing scale, but let content failure explain the change point.', 'Paper frames specify layout intent and cannot reflow. Watch real reflow and clipping in the lesson demo or a real page, and mark your own layout’s browser behavior as untested until a working page is resized.'],
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
    first: '[observed failure (code, no name) or practice note F1–F4] | [intent] | [reasoning] | [design] | [your text] | [action]',
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
    first: '[request] | [role or code, no name] | [context] | [need without feature] | [real / practice / hypothesis] | [options]',
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

// The optional AI rehearsal used to be gated on an authored `coach` line, so
// every lesson without one silently had none — 94 refined lessons, including
// all of m03 onward. `coachedAi` keeps the authored wording where it exists and
// otherwise derives the coaching instruction from the lesson's own
// misconception and the non-AI exercise from its own criteria. Both are
// existing authorities, so no second assignment is invented. A lesson with
// neither returns nothing rather than being given filler.
// Guided material keyed by lesson id. `video` is stored as its catalog id plus
// the lesson's own pairing text; it is resolved against videoSelections here so
// the reader always receives a complete VideoAction. Before this existed no
// lesson from m03 onward could carry a video at all, because only the authored
// activity path resolved one.
function guidedMaterial(l: Lesson): Partial<Apprenticeship> {
  const g = guidedLessons[l.id];
  if (!g) return {};
  const { video, ...rest } = g;
  return { ...rest, ...(video ? { video: { ...videoSelections[video.id], ...video } } : {}) };
}
const AI_SETUP = ['Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.', 'Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.', 'Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.'];
const AI_RULES = 'Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.';
const moduleNumber = (l: Lesson) => l.id.startsWith('week1-') ? 1 : l.id.startsWith('week2-') ? 2 : Number(l.module?.slice(1));
const beginnerScope = (l: Lesson) => Number.isFinite(moduleNumber(l)) && moduleNumber(l) >= 1 && moduleNumber(l) <= 20;
const clean = (text: string, length = 520) => text.replace(/\s+/g, ' ').trim().slice(0, length);
function lessonTerms(guide?: Apprenticeship['guide']) {
  const terms = (guide || []).flatMap(step => step.terms || []);
  return [...new Map(terms.map(term => [term.term.toLowerCase(), term])).values()].slice(0, 3);
}
function firstPracticeExample(l: Lesson, guide?: Apprenticeship['guide']) {
  const supported = guide?.find(step => step.supported)?.supported?.material;
  const demo = guide?.find(step => step.demo)?.demo;
  return clean(supported || (demo ? `${demo.scenario} ${demo.beats[0]?.text || ''}` : l.example));
}
function firstReturnLabel(worksheet?: Apprenticeship['worksheet']) {
  return worksheet?.flatMap(section => section.fields)[0]?.label || 'your first worksheet answer';
}
function modulePlainLead(module: number) {
  if (module === 1) return 'Product design starts by understanding the task and the problem before choosing a screen change.';
  if (module === 2) return 'Evidence is something you can point to and check. A guess can still be useful, but it must stay labelled as a guess.';
  if (module === 3) return 'Visual design helps people notice, read and understand what matters on a screen.';
  if (module === 4) return 'This module looks at what people expect, what confuses them and how a design choice affects their task.';
  if (module === 5) return 'Research means learning from evidence without pretending that a guess, rehearsal or small study proves more than it does.';
  if (module === 6) return 'Information architecture means arranging and naming information so a newcomer can find what they need.';
  if (module === 7) return 'A flow is the series of steps and choices a person follows to finish a task.';
  if (module === 8) return 'Interface craft turns an idea into clear screens and controls that still work in difficult cases.';
  if (module === 9) return 'Interaction design explains what happens when someone acts, what they see next and how they recover from a mistake.';
  if (module === 10) return 'A prototype is a rough version made to answer a question before time is spent building the full product.';
  if (module === 11) return 'Accessible design removes barriers that stop people from perceiving, understanding or operating a product.';
  if (module === 12) return 'Web foundations explain how a browser turns structure, style and behavior into a page that must work at different sizes.';
  if (module === 13) return 'A design system is a shared set of decisions and reusable parts that helps a team build consistent products.';
  if (module === 14) return 'Delivery work makes a design clear enough for other people to build, question, test and change safely.';
  if (module === 15) return 'Product analytics uses recorded events and numbers to answer a decision without hiding uncertainty or context.';
  if (module === 16) return 'AI-assisted product work starts with a bounded task, checks every important output and keeps the human responsible for the decision.';
  if (module === 17) return 'Product strategy connects a real problem, evidence, constraints and trade-offs to a choice about what to do next.';
  if (module === 18) return 'An independent project brings the research, design, testing and decision trail together around one honest problem.';
  if (module === 19) return 'A portfolio story shows what you did, why you chose it, what evidence supports it and what remains uncertain.';
  return 'Career preparation turns your real work into clear evidence for a role, then practises explaining it without exaggeration.';
}
function beginnerSupport(l: Lesson, guide?: Apprenticeship['guide'], worksheet?: Apprenticeship['worksheet']): Pick<Apprenticeship, 'beginner'> {
  if (!beginnerScope(l)) return {};
  const module = moduleNumber(l);
  const first = clean(guide?.[0]?.expect || l.objective || l.title, 260);
  return { beginner: {
    plain: l.id === 'week1-day1-v1' ? clean(l.why || l.title) : `${modulePlainLead(module)} In this lesson, your first small result is: ${first}`,
    terms: lessonTerms(guide),
    example: firstPracticeExample(l, guide),
    returnLabel: firstReturnLabel(worksheet),
  } };
}
function activityInstruction(module: number) {
  if (module <= 2) return 'Use the supplied case to ask me whether each statement is a fact, a guess or an open question. After I answer, explain the distinction with one everyday example.';
  if (module === 3) return 'Describe the design decision in the supplied case, then ask me what I would notice first and why. Help me connect the visual choice to the task it supports.';
  if (module === 4) return 'Teach the idea with a simple everyday analogy. Then give me one believable wrong choice and ask me to find the risk before you explain it.';
  if (module <= 6) return 'Run a short simulated practice using only the supplied material. Ask what evidence supports my choice and what is still unknown.';
  if (module === 7) return 'Give me one constraint from the supplied case and ask me to make a choice inside it. Then ask what trade-off my choice creates.';
  if (module <= 9) return 'Before explaining the tool or method, ask me to predict what the next action will change. After I answer, explain the visible result and one common recovery step.';
  if (module === 10) return 'Ask me to make one prototype decision from the supplied case, name the question it can answer and state what it cannot test. Then point out one unsupported claim if I made one.';
  if (module === 11) return 'Give me one barrier from the supplied case. Ask who is blocked, in what situation and which design decision caused it. Then ask for one repair and one way to test the built result.';
  if (module === 12) return 'Ask me to predict what one small change to the supplied page will do before explaining it. Then ask for the visible result, the browser check and one recovery step if it fails.';
  if (module === 13) return 'Give me one inconsistent component or rule from the supplied case. Ask me to choose the shared decision, name what must stay flexible and explain how another person would know which version is current.';
  if (module === 14) return 'Run a short simulated handoff conversation using only the supplied case. Ask me to explain one decision, one unresolved question and what the builder should verify. Keep the simulation labelled.';
  if (module === 15) return 'Show one small synthetic result from the supplied case. Ask me what the number literally says, what context is missing and which decision it can support. Correct any claim that goes beyond the data.';
  if (module === 16) return 'Give me one hand-written model output from the supplied case. Ask me to find an unsupported claim, choose a source that could verify it and rewrite the claim with an honest boundary.';
  if (module === 17) return 'Change one constraint in the supplied strategy case. Ask me which choice changes, who gains, who carries the cost and what evidence would make me reconsider.';
  if (module === 18) return 'Act as a project reviewer using only the supplied case. Ask for my decision, the evidence behind it and the gap I would investigate next. Do not invent users, results or impact.';
  if (module === 19) return 'Act as a portfolio reader using only the supplied case. Ask what I did, why it mattered and which evidence proves the claim. Challenge one vague or exaggerated sentence.';
  return 'Run a short interview rehearsal using only the supplied role and evidence. Ask one question at a time, then tell me where my answer needs a clearer example, decision or honest limit. Do not write the final answer for me.';
}
function coachedAi(l: Lesson, task: string, coach?: string, alternative?: string, guide?: Apprenticeship['guide'], worksheet?: Apprenticeship['worksheet']): Pick<Apprenticeship, 'ai'> {
  const instruction = coach
    || (l.misconception ? `Challenge one thing at a time, and start with the mistake this lesson is about: ${l.misconception}` : '');
  // `recheck` names the artefact to look at and `criterion` is the question to
  // ask of it, so they are joined in that order rather than concatenated.
  const lower = (t: string) => (/^[A-Z][a-z]/.test(t) ? t[0].toLowerCase() + t.slice(1) : t);
  const without = alternative
    || (l.criteria?.length
      ? `Without any chat: mark your own work against the lesson's own standard, one criterion at a time. ${l.criteria.slice(0, 2).map(c => `Look at ${lower(c.recheck.trim().replace(/\.$/, ''))} and ask whether ${lower(c.criterion.trim())}.`).join(' ')} Anything you cannot show, write down as untested rather than assuming it holds.`
      : '');
  if (!instruction || !without) return {};
  if (beginnerScope(l)) {
    const terms = lessonTerms(guide);
    const example = firstPracticeExample(l, guide);
    const returnLabel = firstReturnLabel(worksheet);
    const localPractice = l.id === 'week1-day1-v1'
      ? 'the first “Practise with supplied note” question'
      : guide?.some(step => step.supported)
        ? 'the first “Try a supplied example” question'
        : 'the first “Try the distinction” question';
    const keyIdeas = terms.length ? terms.map(term => `${term.term}: ${term.meaning}`).join('\n') : clean(l.teach.slice(0, 2).join(' '));
    const prompt = l.id === 'week1-day1-v1'
      ? `I am a complete beginner learning product design. Teach me through a short conversation, not a lecture.\n\nLesson: ${l.title}\nToday I need to understand:\n- Product design: deciding which problem to solve and shaping the whole service.\n- UX: the full experience of completing a task, including delays and recovery.\n- UI: the visible words, buttons and layout used in that experience.\n\nUse this fictional case only: a pottery studio thinks a bigger Reserve button will stop people leaving its booking screen. Known: people leave at that screen. Guessed: the button is the reason. Unknown: whether price, materials or another issue causes it.\n\nAsk me one question at a time, at most three. First ask me to label one statement as known, guessed or unknown. Then ask me whether a suggested change is UI, UX or a product decision, and why. If I struggle, give one small hint. Do not give me a finished worksheet answer, score me or claim that fictional evidence is real. End by telling me to return to the course answer called “${returnLabel}” and write the idea in my own words.`
      : `I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.\n\nLesson: ${l.title}\nWhat I am trying to do: ${clean(task)}\n\nKey idea or terms:\n${keyIdeas}\n\nSupplied practice material (fictional or labelled practice, not my research):\n${example}\n\nActivity: ${activityInstruction(moduleNumber(l))}\n\n${AI_RULES}\nWhen the activity is finished, tell me to return to the course answer called “${returnLabel}” and write my own decision. Do not write that answer for me.`;
    return { ai: {
      purpose: 'Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.',
      setup: AI_SETUP,
      prompt,
      followUp: `Return to “${returnLabel}”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.`,
      alternative: `Stay in this course and use ${localPractice}. Choose an answer, read the explanation, then return to “${returnLabel}” and write one sentence in your own words.`,
    } };
  }
  return { ai: {
    purpose: 'Optional: attempt the work first, then use a free text chat for a focused rehearsal.',
    setup: AI_SETUP,
    prompt: `I am rebuilding my Product Design skills. Lesson: ${l.title}.\nTask: ${task}\n${instruction}\n${AI_RULES}\n\nMy own first attempt (replace this placeholder before sending):\n[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]`,
    followUp: 'Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.',
    alternative: without,
  } };
}

export function withApprenticeship(l: Lesson): Lesson {
  const a = activities[l.id];
  if (!a) return withPublishedWorkspace(l);
  const file = `HaruCourse/Practice/${l.id}/work.md`;
  const starter = `# ${l.title}\n\nSource labels: real observation / hypothesis / simulation / self-pilot\n\n${a.columns}\n${a.columns.split('|').map(() => '---').join(' | ')}\n${a.first}\n\n## Output checklist\n${l.outputs.map(o => `- [ ] ${o}`).join('\n')}\n\n## Decision and revision\nMy decision:\nEvidence reference:\nAlternative rejected and why:\nBefore / after files:\nWhat remains untested:\nAI suggestion accepted or rejected and why (if used):\nNext action when I return:\n`;
  const guided = guidedMaterial(l);
  const resolvedGuide = guided.guide || a.guide;
  const resolvedWorksheet = guided.worksheet || a.worksheet;
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
    ...(a.transfer ? { transfer: a.transfer } : {}),
    ...(a.material ? { material: a.material } : {}),
    // A lesson whose guided material lives in `guidedLessons` rather than in
    // its activity entry merges here, so both authoring routes reach the same
    // Apprenticeship shape.
    ...guided,
    ...beginnerSupport(l, resolvedGuide, resolvedWorksheet),
    ...coachedAi(l, a.mission, a.coach, a.alternative, resolvedGuide, resolvedWorksheet),
  };
  return { ...l, apprenticeship };
}

// Later modules were authored on main while the original 30-lesson redesign
// was in progress. Keep their authored task, free route, rubric and repairs;
// derive workspace support from those authorities instead of inventing a
// second assignment or dropping the newly published lessons during merge.
// Guided material for lessons that keep their derived workspace. Keyed by
// permanent lesson id; merged in withPublishedWorkspace below.
// Modules 11 to 20 keep their guided material in one file each, because a
// single table of 224 lessons is no longer readable or reviewable. The shape
// and the merge point are unchanged.
export const guidedLessons: Record<string, Guided> = {
  ...guided03, ...guided04, ...guided05, ...guided06, ...guided07, ...guided08, ...guided09, ...guided10,
  ...guided11, ...guided12, ...guided13, ...guided14, ...guided15,
  ...guided16, ...guided17, ...guided18, ...guided19, ...guided20,
};

function withPublishedWorkspace(l: Lesson): Lesson {
  const module = l.module;
  if (!module || !l.freeToolPath || !l.criteria?.length || !milestones[module]) throw new Error(`Missing activity or complete published contract: ${l.id}`);
  const folder = `HaruCourse/Practice/${l.id}`;
  const prompts = l.steps.map((s, i) => `## ${i + 1}. ${s.title}\n${s.instructions.map(t => '- ' + t).join('\n')}\n\nMy work / artifact reference:\nEvidence status and source:\nDecision and reason:\n`);
  const guided = guidedMaterial(l);
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
    // A lesson refined against docs/BEGINNER-LESSON-AUDIT.md adds its route,
    // worksheet, demonstrations, supported case, checks and save route here.
    // The derived workspace above stays as the local-file alternative, so the
    // authored task, criteria and handoff remain the single authority.
    ...guided,
    ...beginnerSupport(l, guided.guide, guided.worksheet),
    ...coachedAi(l, l.objective || l.deliverable, undefined, undefined, guided.guide, guided.worksheet),
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
