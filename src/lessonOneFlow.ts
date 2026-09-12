// Stable action IDs: the new reader maps back to the five shipped timing steps.
// Worksheet IDs, step indices and section bookmarks retain their original meaning.
export type LessonAction = {
  id: string; section: 'learn' | 'practice-plan' | 'check' | 'practice'; step: number;
  kind: 'intro' | 'example' | 'field' | 'sort' | 'check' | 'review' | 'teach' | 'setup' | 'demo' | 'supported';
  title: string; instruction: string; field?: string; index?: number;
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
export const lessonOneFlow: LessonAction[] = [
  { id: 'welcome', section: 'learn', step: 1, kind: 'intro', title: 'Look beyond the screen', instruction: 'You will follow one task, separate facts from guesses, and propose two improvements. Keep this course open beside your chosen app. You can stop after any answer.' },
  { id: 'see-example', section: 'learn', step: 1, kind: 'example', title: 'See how a designer starts', instruction: 'Read this made-up example. Notice how a suggested fix turns into a question to investigate.' },
  field('define-product-design', 'What does product design do?', 'Product design decides which problem to solve and shapes a service that people can use and the business can run. Explain that in one sentence of your own.', 1, 'learn'),
  field('define-ux', 'Describe the whole experience', 'UX means user experience: everything a person goes through to finish a task, including waiting and recovery. Explain it in one sentence.', 1, 'learn'),
  field('define-ui', 'Describe the interface', 'UI means user interface: the buttons, words and layout someone sees and uses. Explain it in one sentence.', 1, 'learn'),
  field('app', 'Choose somewhere to practise', 'Open an app you already use for finding events, classes or bookings. If none is available, use the supplied walkthrough below and label your work as supplied practice.', 2),
  field('task', 'Choose one small task', 'Choose something with a clear result, such as finding a class on Saturday. You will stop before booking or paying. Write the task below.', 2),
  field('start', 'Name your starting screen', 'Open the screen where the task begins. Write its visible title or describe it so you can find it again.', 2),
  field('actions', 'Follow the task once', 'Try the task. Return here and list what you clicked, typed or looked for, one action per line. Stop before booking or paying. Leave out private details.', 2),
  ...Array.from({length: 6}, (_, i): LessonAction => ({ id: `sorter-${i + 1}`, section: 'practice-plan', step: 3, kind: 'sort', index: i, title: `Practise with supplied note ${i + 1} of 6`, instruction: 'Observed: something directly seen or done. Inferred: a proposed explanation. Unknown: a question you cannot answer yet. Choose the label that best describes this note.' })),
  ...[1,2,3,4,5].flatMap(n => [
    field(`entry-${n}-saw`, `Your evidence · entry ${n} of 5`, 'Return to your walkthrough. Write one thing you noticed, one possible explanation, or one unanswered question. Keep it to one claim.', 3),
    field(`entry-${n}-label`, 'Is this a fact, a guess, or a question?', 'Label the entry you just wrote. Seeing a screen does not tell you what other people think or do.', 3),
    field(`entry-${n}-goal`, 'Why does this entry matter?', 'Name the task or goal this entry affects. Describe what the person wants to achieve, not the button they press.', 3),
    field(`entry-${n}-check`, 'What would help you check it?', 'Name something you could observe or ask to check this claim. You are planning the check; you do not need to recruit anyone today.', 3),
  ]),
  field('user-goal', 'What does the person want?', 'Use your walkthrough to describe the result the person needs. Avoid naming a page, button or proposed fix.', 3),
  field('business-goal', 'What might the business want?', 'Write one possible goal for the people running the service. This is a guess, so say “might” or “probably”.', 3),
  field('visual-improvement', 'Improve how information looks', 'Choose one visual change, such as clearer size, contrast or grouping. Name what you would change and why it helps the task.', 4),
  field('visual-check', 'How could you tell if it helped?', 'Name an action you could watch, such as someone finding the price without help. “It looks better” is not an observable check.', 4),
  field('behavior-improvement', 'Improve how the task works', 'Choose one change to the order, behavior or information in the task. Keep it different from your visual change.', 4),
  field('behavior-check', 'How would you check that change?', 'Name what someone could do that would support your idea, and what would show it did not help.', 4),
  ...[0,1,2].map((i): LessonAction => ({ id: `reason-${i + 1}`, section: 'check', step: 5, kind: 'check', index: i, title: `Check your reasoning · ${i + 1} of 3`, instruction: 'Choose the explanation you believe. Then compare the feedback with your own work and improve the answer shown below if needed.' })),
  field('open-question', 'What is still unknown?', 'Write one question your walkthrough could not answer. Be honest about what you have not checked.', 5, 'practice'),
  field('improvement-made', 'Record your improvement', 'Name one answer you changed after checking and explain why. If no change was needed, name the answer you checked and explain how it already meets the criterion.', 5, 'practice'),
  field('next-action', 'Leave yourself a next action', 'Write one small action to take when you return. Your saved work will carry into Lesson 2.', 5, 'practice'),
  { id: 'review-work', section: 'practice', step: 5, kind: 'review', title: 'Your work is ready to check', instruction: 'Review your answers below. Finish practice when the required work is present. Requesting creator feedback is a separate choice.' },
];
