import type { Lesson } from "./lessons";
// Module 4 turns the evidence habits from Module 2 into reasoning about people
// and value. Areas 2 and 3: cognition on one side, worth and tradeoffs on the
// other. It deliberately stops short of strategy and metrics, which are m15
// and m17 work.
const models = {
  title: "NN/g: mental models",
  id: "R32",
  url: "https://www.nngroup.com/articles/mental-models/",
};
const memory = {
  title: "NN/g: recognition and recall",
  id: "R33",
  url: "https://www.nngroup.com/articles/recognition-and-recall/",
};
const errors = {
  title: "NN/g: preventing user errors",
  id: "R36",
  url: "https://www.nngroup.com/articles/user-mistakes/",
};
const laws = {
  title: "Laws of UX",
  id: "R31",
  url: "https://lawsofux.com/",
};
const needs = {
  title: "GOV.UK: start by learning user needs",
  id: "R35",
  url: "https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs",
};
const discovery = {
  title: "GOV.UK: how discovery works",
  id: "R07",
  url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
};
const alpha = {
  title: "GOV.UK: how the alpha phase works",
  id: "R34",
  url: "https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works",
};
export const module4: Lesson[] = [
  {
    id: "m04-l01-v1",
    module: "m04",
    week: 4,
    day: 1,
    level: 1,
    areas: [2, 3],
    title: "Mental models and the model you are actually building",
    objective:
      "Write the model a reader brings to one task, the model your design implies, and name three specific places they contradict each other.",
    bringForward:
      "Your Module 2 findings, hypothesis and the revision you made after testing. The contradictions you find here should be grounded in what you observed there, not invented.",
    why: "Most confusing interfaces are not ugly or illogical. They are logical according to a model the reader does not hold, and no amount of visual refinement closes that gap.",
    teach: [
      "A mental model is what a person believes about how something works, assembled from everything else they have used. It is usually incomplete and often wrong in detail, and it is still what they act on. When someone clicks the browser's back button expecting to undo a submission, they are not being careless; they are applying a model that has served them everywhere else.",
      "You have a much more detailed model than any reader will, because you built the thing. That asymmetry is the source of the problem: what feels self-evident to you was learned by you, in a sequence readers never experienced. The conceptual model your interface communicates — through its labels, structure and feedback — is the only thing they have to build a model from.",
      "There are two honest responses to a mismatch, and they are not equally cheap. You can conform to the model people already hold, which usually means adopting the structure and vocabulary they know from elsewhere. Or you can change their model, which requires clearer naming, visible structure and feedback that teaches, and which costs far more than designers expect. Choosing the second because the first feels unoriginal is a common and expensive mistake.",
      "Mismatches are findable but not guessable. Card sorting shows you how people expect things to be organised; a think-aloud walkthrough shows you the moment expectation breaks. What you cannot do is deduce someone's model from your own reasoning, which is exactly what a designer confident in their own logic will do by default.",
    ],
    misconception:
      "“If the structure is logical, people will learn it.” Logical to whom? A taxonomy that mirrors the organisation's internal departments is perfectly logical and routinely unusable, because readers arrive with a model built from their task, not from your org chart.",
    example:
      "On the workshop service, several people expected “my bookings” to include workshops they had merely saved, because that is how their shopping apps behave. The product's model separated saved from booked, which is defensible. The mismatch showed up as people reporting a booking they had never made. The chosen response was to conform partially — one list, with booked and saved clearly labelled within it — rather than to teach a distinction no one arrived expecting.",
    steps: [
      {
        minutes: 25,
        title: "Read and extract",
        text: "Read the assigned article. Write, in your own words, the difference between the model a reader brings and the conceptual model an interface communicates.",
      },
      {
        minutes: 30,
        title: "Write the reader's model",
        text: "For one task in your Module 2 work, write what you believe a first-time reader assumes: where things live, what an action will do, what happens next. Mark each line as observed in your testing or assumed.",
      },
      {
        minutes: 25,
        title: "Write your design's model",
        text: "Write what your design actually implies, using its real labels and structure. Do not soften it; write what the interface says, not what you meant.",
      },
      {
        minutes: 25,
        title: "Find the contradictions",
        text: "Place the two side by side and identify three specific contradictions. For each, note the consequence for the reader and whether you saw it happen or are predicting it.",
      },
      {
        minutes: 15,
        title: "Choose and record",
        text: "For one contradiction, decide whether to conform or to teach, and write the cost of your choice. Save all three artefacts.",
      },
    ],
    freeToolPath:
      "Two columns on paper is the whole exercise. If you want to check an expectation cheaply, ask one person where they would look for something before showing them anything — a question, not a tool, and no account or software is involved.",
    deliverable:
      "The reader's model with each line marked observed or assumed, your design's implied model in its real labels, three named contradictions with consequences, and one conform-or-teach decision with its cost.",
    check: [
      {
        question: "Why is conforming to an existing model usually cheaper?",
        answer:
          "Because the reader already holds it, so no learning is required. Changing a model means every reader must be taught, through naming, structure and feedback, and most will leave before that teaching completes.",
      },
      {
        question:
          "You are certain your structure is more logical. Does that settle it?",
        answer:
          "No. Your certainty comes from having built it. The relevant question is what model readers arrive with, which is an empirical question you can ask about — not one your reasoning can answer.",
      },
      {
        question: "What is the difference between a contradiction and a complaint?",
        answer:
          "A contradiction is a specific mismatch between what a reader expects and what the design implies, with a predicted consequence. A complaint is a reaction. Contradictions can be checked; complaints need translating into one first.",
      },
    ],
    rubric: [
      "The reader's model is written and evidence-marked",
      "The design's model is written from its real labels",
      "Contradictions are specific with named consequences",
      "The conform-or-teach decision states its cost",
    ],
    criteria: [
      {
        criterion: "The reader's model is written and evidence-marked",
        evidence:
          "A list of expectations where each line is marked as observed in Module 2 testing or as an assumption.",
        levels: [
          "No reader model written.",
          "A model is written but nothing distinguishes observation from assumption.",
          "Every line is marked observed or assumed.",
          "As adequate, and at least one assumption is paired with the smallest question that would test it.",
        ],
        remediation:
          "Go back through your Module 2 notes and mark each line of your reader model with where it came from. Anything with no source becomes an assumption, not a finding.",
        recheck: "The marked model with sources for the observed lines.",
      },
      {
        criterion: "The design's model is written from its real labels",
        evidence:
          "A description using the interface's actual words and structure, not the designer's intent.",
        levels: [
          "Only intent is described.",
          "A mixture of real labels and intended meaning.",
          "The model is written from the interface's own labels and structure.",
          "As adequate, and one label is identified as implying something the design does not actually do.",
        ],
        remediation:
          "Rewrite the model using only text that appears on screen. Where you needed a word that is not there, that absence is itself a finding — record it.",
        recheck: "The rewritten model plus any missing-word findings.",
      },
      {
        criterion: "Contradictions are specific with named consequences",
        evidence:
          "Three contradictions, each naming the expectation, what the design does instead, and the concrete consequence.",
        levels: [
          "Fewer than three, or stated as general confusion.",
          "Three exist but consequences are vague.",
          "Three specific contradictions each with a concrete consequence.",
          "As adequate, and each is marked as observed or predicted, with the predicted ones given a way to check.",
        ],
        remediation:
          "Rewrite each contradiction in the form: the reader expects X, the design does Y, so the reader ends up doing Z. Discard anything that does not fit that shape.",
        recheck: "The three rewritten contradictions.",
      },
      {
        criterion: "The conform-or-teach decision states its cost",
        evidence:
          "One decision with what it gives up — either the better structure abandoned, or the learning burden accepted.",
        levels: [
          "No decision, or a decision with no cost named.",
          "A decision with a generic cost.",
          "The decision names a specific cost it accepts.",
          "As adequate, and the decision states what evidence would reverse it.",
        ],
        remediation:
          "Write your decision, then write the sentence beginning “this is worse for…” and finish it honestly. If nothing is worse, you have probably not made a real choice.",
        recheck: "The decision with its stated cost and reversal condition.",
      },
    ],
    portfolio:
      "Practice, and reusable reasoning. A model-mismatch analysis grounded in real observation is genuine case-study material; the same analysis built only on assumptions is not, and must be labelled as reasoning rather than research.",
    resource: models,
    resources: [
      {
        ...models,
        section:
          "The whole article, particularly the designer-versus-user asymmetry and the two responses to a mismatch.",
        purpose:
          "Establishes why a mismatch is a design problem rather than a reader failure.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Its examples are from commercial products and illustrate the idea, not a rule for yours.",
        fallbackId: "R31",
      },
    ],
  },
  {
    id: "m04-l02-v1",
    module: "m04",
    week: 4,
    day: 2,
    level: 1,
    areas: [2, 3],
    title: "Recognition, recall and what you are asking people to remember",
    objective:
      "Audit one flow for everything it requires a reader to hold in mind or retrieve from memory, and convert at least two of those demands into recognition.",
    bringForward:
      "The flow you tested in Module 2 and the mental-model contradictions from the previous lesson.",
    why: "Interfaces routinely ask people to carry information across screens, and the person who designed the flow is the only one who never notices, because they already know what is coming.",
    teach: [
      "Recognising something is far easier than recalling it, because recognition supplies cues and recall does not. This is why a menu of visible options outperforms a box you must type the right word into, and why a list of recently viewed items is more useful than expecting someone to remember what they looked at. Every time you make a reader produce information from nothing, you are choosing the harder mode on their behalf.",
      "Working memory is small and easily disrupted. People hold only a few items at once, and holding them costs attention that is then unavailable for the actual task. Chunking helps — a phone number in groups is easier than a run of digits — but the reliable fix is not to require the holding at all: show the value where it is needed rather than asking someone to carry it from a previous screen.",
      "Interruption is the normal case, not the exception. Someone booking a workshop on a phone will be interrupted by a message, a call, or their own life, and will return with their working memory emptied. A flow that depends on remembering what was typed three screens ago fails not because the person was careless but because the design assumed uninterrupted attention it had no right to assume.",
      "The classic “about seven items” figure is widely quoted and widely over-applied; the assigned article on memory does not use it at all, and the number varies with the material and the person. Treat chunk limits as a reason to reduce what you demand, not as a rule that permits exactly seven of something. If you need the specific framing, read the Miller's Law page in the laws collection, and read it as a heuristic.",
    ],
    misconception:
      "“A confirmation step means the user checked their input.” It means the information was displayed. If the reader must compare it against something they saw two screens ago and no longer have, the confirmation is theatre — and worse, it transfers responsibility to them for an error your flow made likely.",
    example:
      "A booking flow asked for a reference code on screen four that had been shown on screen two, with no way back that preserved the entered data. Every observed participant either scrolled back and lost their input or guessed. The fix required no new feature: the code was displayed inline on screen four beside the field. The demand for recall disappeared, and so did the error.",
    steps: [
      {
        minutes: 25,
        title: "Read and separate the two modes",
        text: "Read the assigned article. Write three places in any product you use where recognition is offered and three where recall is demanded.",
      },
      {
        minutes: 30,
        title: "Audit your flow",
        text: "Walk your flow screen by screen. List everything the reader must remember, carry forward, or produce without a cue. Note which screen created the demand and which one collects it.",
      },
      {
        minutes: 25,
        title: "Add the interruption",
        text: "For each demand, ask what happens if the reader is interrupted for ten minutes between the two screens. Mark the demands that do not survive it.",
      },
      {
        minutes: 25,
        title: "Convert two demands",
        text: "Choose two demands — ideally the two that fail interruption — and redesign them into recognition: show the value, offer a list, or remove the need entirely. Record what each change costs in space or steps.",
      },
      {
        minutes: 15,
        title: "Record and pause",
        text: "Save the audit table, the interruption marks and the two conversions. Note one demand you could not remove and why.",
      },
    ],
    freeToolPath:
      "Paper screens laid out in order, with an arrow drawn from where information appears to where it is required, makes every carried demand visible. No tool or account is needed. If you want the interruption test to be real, put the paper down and do something else for ten minutes before continuing.",
    deliverable:
      "A memory-demand audit naming each demand and its two screens, interruption marks, two demands converted to recognition with their costs, and one unremovable demand with its justification.",
    check: [
      {
        question: "Why does a list of recent items beat a search box for return visits?",
        answer:
          "Because it offers recognition. The reader picks from what is shown instead of producing the right term from memory, which is the harder operation and the one that fails when they only half-remember the name.",
      },
      {
        question:
          "Is showing a value on the confirmation screen enough to prevent errors?",
        answer:
          "Only if the reader can check it against something. Displaying a value they cannot compare to anything does not enable verification; it just makes the mistake visible after the fact if at all.",
      },
      {
        question:
          "Does the seven-item figure mean you may show seven options safely?",
        answer:
          "No. It is a heuristic about chunking that varies by material and person, and the assigned memory article does not use it. Use it as a reason to reduce demand, not as a permitted quantity.",
      },
    ],
    rubric: [
      "The audit names demands with both screens involved",
      "The interruption case was genuinely applied",
      "Two conversions are real and their costs stated",
      "Memory claims are proportionate",
    ],
    criteria: [
      {
        criterion: "The audit names demands with both screens involved",
        evidence:
          "A table where each row names the information, the screen that supplies it and the screen that requires it.",
        levels: [
          "No audit.",
          "Demands listed without identifying the screens.",
          "Every demand names its supplying and requiring screen.",
          "As adequate, and the audit also catches demands created outside the product, such as a code from an email or SMS.",
        ],
        remediation:
          "Redraw your flow and draw an arrow for every piece of information the reader must carry. Any arrow spanning more than one screen becomes a row in the table.",
        recheck: "The arrow diagram and the completed table.",
      },
      {
        criterion: "The interruption case was genuinely applied",
        evidence:
          "Each demand marked for whether it survives a ten-minute interruption, with the reasoning.",
        levels: [
          "Interruption not considered.",
          "Mentioned but not applied per demand.",
          "Each demand is marked with reasoning.",
          "As adequate, and the interruption was actually experienced during the exercise rather than imagined.",
        ],
        remediation:
          "Take your audit and, for each row, write what the reader still has in front of them after ten minutes away. Mark the rows where the answer is nothing.",
        recheck: "The audit with interruption marks and reasoning.",
      },
      {
        criterion: "Two conversions are real and their costs stated",
        evidence:
          "Two demands redesigned into recognition, each with what the change costs in space, steps or complexity.",
        levels: [
          "No conversions, or conversions that still require recall.",
          "Two conversions but no costs stated.",
          "Two genuine conversions with stated costs.",
          "As adequate, and one demand is removed entirely rather than converted, with the reasoning for why it was never needed.",
        ],
        remediation:
          "For each conversion, ask what the reader must now produce from memory. If the answer is anything, the conversion is incomplete — show the value rather than hinting at it.",
        recheck: "The two conversions with the recall demand shown to be zero.",
      },
      {
        criterion: "Memory claims are proportionate",
        evidence:
          "No numeric capacity claim is presented as fact; any use of a chunking heuristic is labelled as such.",
        levels: [
          "A specific capacity is asserted as a rule and used to justify a decision.",
          "A number is quoted without a caveat.",
          "Memory limits are described qualitatively, or a heuristic is labelled as one.",
          "As adequate, and the write-up notes that the assigned memory article does not supply a capacity figure at all.",
        ],
        remediation:
          "Find every number in your write-up describing memory and either remove it or attach its source and its status as a heuristic.",
        recheck: "The corrected write-up.",
      },
    ],
    portfolio:
      "Practice. A memory-demand audit is useful supporting evidence inside a case study's problem section when the demands were observed rather than assumed.",
    resource: memory,
    resources: [
      {
        ...memory,
        section:
          "The whole article: recognition versus recall, activation, and the interface implications.",
        purpose:
          "Explains why cues make a task easier and where interfaces habitually demand production instead.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not cover Miller's 7±2; use the R31 millers-law page if you need that framing, and treat it as a heuristic.",
        fallbackId: "R31",
      },
      {
        ...laws,
        section: "The millers-law and cognitive-load pages only.",
        purpose: "Supplies the chunking vocabulary the memory article omits.",
        minutes: "10–15 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. The site states these as laws without caveats; the limitation is taught here, not there.",
        fallbackId: "R02",
      },
    ],
  },
  {
    id: "m04-l03-v1",
    module: "m04",
    week: 4,
    day: 3,
    level: 1,
    areas: [2, 3],
    title: "Affordances, signifiers and feedback",
    objective:
      "Identify what each control in one screen affords, what signals that affordance to the reader, and what tells them the action worked — then repair the weakest of the three.",
    bringForward:
      "Your flow and the memory-demand audit. Use the same screens so the analysis accumulates.",
    why: "On a screen every pixel can be clicked and almost none of them do anything. What a reader can do is invisible unless you make it visible, and whether it worked is invisible unless you say so.",
    teach: [
      "An affordance is what an object makes possible: a checkbox affords being turned on and off, a slider affords being moved. A signifier is the perceivable cue that tells someone the affordance exists — the shape, the colour, the label, the cursor change, the underline. The distinction matters because on a screen the affordance is decided by code and is entirely unperceivable; only signifiers reach the reader.",
      "Two gulfs sit either side of every action. The gulf of execution is the distance between what someone wants and working out how to do it, which signifiers close. The gulf of evaluation is the distance between acting and knowing what happened, which feedback closes. Designers spend most of their attention on the first gulf and most of their bugs live in the second.",
      "Feedback must be specific, timely and located where attention already is. “Saved” at the top of a page the reader has scrolled past is not feedback; a spinner with no end state is not feedback; a success message that does not say what succeeded leaves the reader checking manually anyway. The test is whether the reader can answer “did it work, and to what?” without doing extra work.",
      "Removing signifiers is a recurring cost of visual minimalism. Flat controls without borders, links without underlines, icons without labels and low-contrast placeholders all look calmer and all reduce what the reader can tell. That is a real tradeoff, not a mistake by definition — but it must be a decision you made knowingly and can state, not a side effect of preferring the cleaner mock.",
    ],
    misconception:
      "“Users will figure out it is clickable by hovering.” Hover does not exist on touch devices, which is where much of your audience will be, and it requires the reader to already suspect the element is interactive. A signifier that only appears after you have guessed correctly is not a signifier.",
    example:
      "A workshop card had its whole surface clickable, with the title in body-text colour and no other cue. On desktop, hovering revealed a subtle shade change; on a phone nothing indicated interactivity at all, and observed readers tapped the price text and then the image before finding it. Adding a coloured, weightier title and a visible chevron closed the execution gulf. Separately, the tap produced no immediate response during a slow load, so a pressed state was added to close the evaluation gulf.",
    steps: [
      {
        minutes: 25,
        title: "Read and define",
        text: "Read the assigned article's opening sections. Write your own one-line definitions of affordance, signifier and the two gulfs, with a screen example of each.",
      },
      {
        minutes: 30,
        title: "Inventory the controls",
        text: "For every interactive element on your screen, write three columns: what it affords, what signifies that, and what feedback follows the action. Leave cells blank where nothing exists — blanks are the finding.",
      },
      {
        minutes: 25,
        title: "Test on touch",
        text: "Check every signifier that depends on hover or a cursor change. Mark each as unavailable on touch, and note what remains for a reader on a phone.",
      },
      {
        minutes: 25,
        title: "Repair the weakest",
        text: "Choose the control with the weakest signifier and the one with the weakest feedback. Repair both, writing what a reader can now tell that they could not before.",
      },
      {
        minutes: 15,
        title: "Record and pause",
        text: "Save the three-column inventory with its blanks, the touch marks, and the two repairs. Note any signifier you removed for visual reasons and what it cost.",
      },
    ],
    freeToolPath:
      "A printed screen with three columns written beside each control is the complete exercise. If you have the screen in a local HTML file you can check the touch case honestly by using a phone browser or a browser's device emulation, but the paper analysis is sufficient.",
    deliverable:
      "A three-column affordance, signifier and feedback inventory with blanks left visible, touch-availability marks, and two repairs each stating what the reader can now tell.",
    check: [
      {
        question: "Why can an affordance not be perceived directly on a screen?",
        answer:
          "Because it is a property of the code, not of the pixels. Every region of the screen is physically clickable, so what is actually possible is unperceivable; only the signifier communicates it.",
      },
      {
        question: "A spinner appears and never resolves. Which gulf is open?",
        answer:
          "The gulf of evaluation. The reader acted but cannot tell what happened, so they wait, retry or abandon. Feedback must reach a definite end state, including a failure state.",
      },
      {
        question: "Is removing an underline from links always wrong?",
        answer:
          "Not automatically, but it removes a signifier that works everywhere, including for readers who cannot rely on colour. If you remove it, you owe a replacement cue and a stated reason — not just a preference for a cleaner look.",
      },
    ],
    rubric: [
      "Every control is inventoried across all three columns",
      "Blanks are preserved as findings, not filled in",
      "Touch availability was checked",
      "Repairs state what the reader can now tell",
    ],
    criteria: [
      {
        criterion: "Every control is inventoried across all three columns",
        evidence:
          "One row per interactive element with affordance, signifier and feedback considered for each.",
        levels: [
          "No inventory.",
          "Some controls covered, or only one or two columns used.",
          "Every interactive element has all three columns considered.",
          "As adequate, and non-obvious interactive elements — a whole clickable card, a swipe, a long press — are included.",
        ],
        remediation:
          "List every element a reader could act on, including whole regions and gestures, and complete all three columns for each.",
        recheck: "The completed inventory covering every interactive element.",
      },
      {
        criterion: "Blanks are preserved as findings, not filled in",
        evidence:
          "Visible empty cells where no signifier or feedback exists, carried into the findings rather than retroactively described.",
        levels: [
          "Every cell is filled with a plausible-sounding description.",
          "Blanks exist but are not treated as findings.",
          "Blanks are visible and listed as findings.",
          "As adequate, and the blanks are ordered by how costly the missing cue is to the reader.",
        ],
        remediation:
          "Re-examine each filled cell and ask what a first-time reader would actually perceive. Replace anything that describes your intent rather than a perceivable cue with a blank.",
        recheck: "The corrected inventory with honest blanks.",
      },
      {
        criterion: "Touch availability was checked",
        evidence:
          "Each hover-dependent or cursor-dependent signifier marked as unavailable on touch, with what remains stated.",
        levels: [
          "Touch not considered.",
          "Mentioned generally without marking specific signifiers.",
          "Each affected signifier is marked and the remaining cue is stated.",
          "As adequate, and one control is redesigned so it no longer depends on hover at all.",
        ],
        remediation:
          "Go through your signifier column and mark every entry that requires a pointer. For each, write what a phone reader perceives instead.",
        recheck: "The marked signifier column with touch alternatives.",
      },
      {
        criterion: "Repairs state what the reader can now tell",
        evidence:
          "Two repairs, each with a before-and-after sentence describing the reader's knowledge, not the visual change.",
        levels: [
          "No repairs, or repairs described only visually.",
          "Repairs made but the reader's knowledge is not described.",
          "Both repairs state what the reader can now determine.",
          "As adequate, and one repair addresses a failure case, not only the success case.",
        ],
        remediation:
          "Rewrite each repair as: before, the reader could not tell X; after, they can tell it because Y. Add a failure case if both your repairs assume success.",
        recheck: "The two rewritten repairs including a failure case.",
      },
    ],
    portfolio:
      "Practice. The inventory is a strong supporting artefact for a case study's analysis section, particularly where a blank cell corresponds to something you actually watched someone struggle with.",
    resource: errors,
    resources: [
      {
        ...errors,
        section:
          "The gulfs of execution and evaluation, and the affordances and signifiers sections.",
        purpose:
          "Supplies the vocabulary connecting what a reader can do to what they can perceive and confirm.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Its product examples illustrate the concepts and are not requirements for your design.",
        fallbackId: "R02",
      },
    ],
  },
  {
    id: "m04-l04-v1",
    module: "m04",
    week: 4,
    day: 4,
    level: 1,
    areas: [2, 3],
    title: "Slips, mistakes and designing for the error you caused",
    objective:
      "Classify the failures observed in your Module 2 testing as slips or mistakes, and design one prevention and one recovery for each class, without relying on the reader being more careful.",
    bringForward:
      "Your Module 2 session notes and every failure, hesitation or wrong turn you recorded there.",
    why: "The instinct after watching someone fail is to add a warning. Warnings work on one kind of error and make the other kind worse, so the classification has to come first.",
    teach: [
      "A slip is doing the wrong thing while intending the right thing: the goal was correct and the execution went astray, usually on a familiar, automatic task. Tapping the adjacent date, submitting before finishing, using the wrong one of two similar controls. Slips are properties of attention under normal conditions, and they respond to design that constrains, defaults and undoes.",
      "A mistake is doing the wrong thing on purpose, because the goal itself was formed from a wrong model. Booking the wrong session because two workshops share a name, or believing a save happened because the interface looked calm. Mistakes respond to clearer models, better naming, previews and feedback. Adding a confirmation dialogue to a mistake usually fails, because the reader confirms confidently — they were never uncertain.",
      "Prevention and recovery are both required, and prevention has a ceiling. Constraints — disabling impossible dates, formatting input as it is typed, defaulting to the common case — remove whole classes of slip cheaply. But no design prevents everything, so recovery matters: undo is generally better than confirmation, because confirmation interrupts everyone to catch a few, while undo costs nothing until it is needed.",
      "Blaming the reader is the default failure of error analysis, and it hides inside neutral-sounding language. “The user didn't read the instruction” describes a design that required reading an instruction. Rewrite every error observation so the subject is the design: not “they missed the toggle”, but “the toggle's state was not perceivable at a glance”. The rewritten sentence usually contains its own fix.",
    ],
    misconception:
      "“Add a confirmation dialogue so they cannot get it wrong.” Confirmations catch slips at best, and only briefly — people learn to dismiss them without reading. They do nothing for a mistake, because the reader is certain, and they add a step for everyone who was already correct.",
    example:
      "Two failures from one test looked identical and were not. One participant tapped “Reserve” before choosing a date, then said “oh, I meant to pick Saturday” — a slip, fixed by disabling the button until a date is selected. Another chose the Saturday session believing it was the beginners' one, because both were titled “Weekend Workshop” — a mistake, unaffected by any button state, fixed by distinguishing the titles and showing the level on the card.",
    steps: [
      {
        minutes: 25,
        title: "Read and classify the concepts",
        text: "Read the assigned article's sections on slips and mistakes. Write the distinguishing question you will use: was the intention correct?",
      },
      {
        minutes: 30,
        title: "Classify your observed failures",
        text: "Take every failure from your Module 2 notes and classify it. Where you cannot tell, record it as unclassified and write what you would have needed to ask at the time.",
      },
      {
        minutes: 20,
        title: "Rewrite the blame out",
        text: "Rewrite each observation so the design is the subject. Keep both versions so the difference is visible.",
      },
      {
        minutes: 30,
        title: "Design prevention and recovery",
        text: "For one slip and one mistake, design a prevention and a recovery each. Prefer constraints and defaults over warnings, and undo over confirmation. State why for each choice.",
      },
      {
        minutes: 15,
        title: "Record and pause",
        text: "Save the classification table, the rewritten observations and the four designs. Note any failure you could not classify and what that costs you.",
      },
    ],
    freeToolPath:
      "This is written and sketched work throughout; no tool is required. Your Module 2 notes plus paper are sufficient, and no account, subscription or AI assistance is needed at any step.",
    deliverable:
      "A classification table of observed failures with slips, mistakes and unclassified rows; blame-free rewrites alongside the originals; and one prevention and one recovery for each class with reasoning.",
    check: [
      {
        question: "What single question separates a slip from a mistake?",
        answer:
          "Was the intention correct? If the person meant to do the right thing and the action went astray, it is a slip. If the action matched an intention that was itself wrong, it is a mistake.",
      },
      {
        question: "Why is undo usually preferable to a confirmation dialogue?",
        answer:
          "Confirmation taxes everyone, including the majority who were correct, and is quickly dismissed automatically. Undo costs nothing until an error occurs and then repairs it fully, without requiring the reader to predict their own mistake.",
      },
      {
        question:
          "Your note says “the participant ignored the warning”. What is wrong with it?",
        answer:
          "It makes the reader the subject of the failure. Rewritten with the design as subject — “the warning appeared away from the control and was not seen before acting” — the sentence describes something you can change.",
      },
    ],
    rubric: [
      "Failures are classified with the intention test",
      "Unclassifiable cases are kept, not forced",
      "Observations are rewritten without blame",
      "Interventions match the class and prefer constraint over warning",
    ],
    criteria: [
      {
        criterion: "Failures are classified with the intention test",
        evidence:
          "A table where each observed failure is marked slip or mistake with the intention reasoning stated.",
        levels: [
          "No classification.",
          "Failures labelled without reasoning.",
          "Each classification states the intention evidence behind it.",
          "As adequate, and one classification is revised after re-reading the session notes, with the reason for the change.",
        ],
        remediation:
          "For each failure, write what the person appeared to be trying to do and how you know. Classify only after that sentence exists.",
        recheck: "The table with intention reasoning per row.",
      },
      {
        criterion: "Unclassifiable cases are kept, not forced",
        evidence:
          "At least one honestly unclassified row, or a stated reason why every case was determinable, plus the question that would have resolved it.",
        levels: [
          "Every case forced into a class regardless of evidence.",
          "Unclassified cases dropped from the table.",
          "Unclassified cases are retained with the missing question named.",
          "As adequate, and the missing question is added to the next session's guide.",
        ],
        remediation:
          "Re-examine any classification you made on thin evidence. Move it to unclassified and write the question you would ask to resolve it.",
        recheck: "The table with unclassified rows and their questions.",
      },
      {
        criterion: "Observations are rewritten without blame",
        evidence:
          "Original and rewritten pairs where the rewritten version makes the design the subject.",
        levels: [
          "Observations blame the reader throughout.",
          "Some rewrites, but blame persists in softened form.",
          "Every observation has a design-subject rewrite alongside it.",
          "As adequate, and at least one rewrite reveals a fix that was not visible in the original phrasing.",
        ],
        remediation:
          "Find every sentence whose subject is the participant and rewrite it with an interface element as the subject. Keep both versions side by side.",
        recheck: "The paired original and rewritten observations.",
      },
      {
        criterion:
          "Interventions match the class and prefer constraint over warning",
        evidence:
          "Four interventions, each stating the class it targets and why a constraint, default or undo was chosen over a warning.",
        levels: [
          "Warnings or confirmations applied to everything.",
          "Interventions exist but are not matched to class.",
          "Each intervention matches its class with reasoning.",
          "As adequate, and one intervention is rejected as ineffective with the reason it would not work on that class.",
        ],
        remediation:
          "For any confirmation dialogue you designed, ask whether the reader was uncertain. If they were not, replace it with a constraint, a clearer distinction or an undo.",
        recheck: "The four interventions with class matching and reasoning.",
      },
    ],
    portfolio:
      "Practice, and directly reusable. An error classification built from observed sessions is real case-study evidence. A classification built from imagined failures is reasoning and must be labelled as such.",
    resource: errors,
    resources: [
      {
        ...errors,
        section:
          "The slips-versus-mistakes distinction and the prevention techniques, including constraints, defaults, confirmation and undo.",
        purpose:
          "Gives the classification and the intervention repertoire this lesson applies.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Prevention techniques are options to choose between, not a checklist to apply wholesale.",
        fallbackId: "R02",
      },
    ],
  },
  {
    id: "m04-l05-v1",
    module: "m04",
    week: 4,
    day: 5,
    level: 1,
    areas: [2, 3],
    optional: true,
    title: "UX laws and where they stop applying",
    objective:
      "Apply three named heuristics to one decision and produce, for each, a concrete situation in which following it would make the design worse.",
    bringForward:
      "Any decision from this module you found hard to justify, plus the screens you have been working on.",
    why: "Named laws are useful shorthand in a review and dangerous as authority. Learning them without their limits produces a designer who can quote a principle at every decision and cannot tell when it does not apply.",
    teach: [
      "These heuristics are named regularities, not physical laws, and their sources present them without caveats. Fitts's law describes how target size and distance affect pointing time; Hick's law describes how the number of choices affects decision time; Jakob's law observes that people spend most of their time on other products and bring those expectations with them. Each is a genuine tendency and none of them settles a design decision on its own.",
      "The commonest misuse is applying a law outside the conditions it describes. Hick's law concerns choices among comparable options, so citing it to justify hiding navigation is a category error: a person looking for a specific item is not choosing between equivalent alternatives, and hiding the item makes their task harder while the law's number looks better. Ask what the law's underlying situation actually is before invoking it.",
      "Laws conflict, and the conflict is where the design work lives. Jakob's law argues for the familiar pattern; a genuine improvement argues for the unfamiliar one. Fitts's law argues for a large, close target; the surrounding layout argues that a control which dominates the screen distorts the hierarchy. Naming both sides and choosing with a stated reason is stronger practice than quoting whichever supports the decision you had already made.",
      "Every law is a hypothesis in your specific context. The honest form is: this principle suggests X, which predicts readers will do Y, which I could check by Z. That sentence is testable. “Hick's law says fewer options” is not, and it is the form that lets a confident designer win an argument they should have lost.",
    ],
    misconception:
      "“Fewer options are always better because of Hick's law.” Reducing options only helps when the options are genuinely comparable and the reader is choosing among them. Removing an option someone specifically came for does not reduce their decision time; it converts a quick choice into a search, or into leaving.",
    example:
      "A filter panel with eleven options was cut to four, citing Hick's law. Task time got worse: the two most-used filters had been removed, so people scrolled the full list instead of filtering. The law was real; the situation was wrong, because these were not comparable alternatives but tools for narrowing a search. Restoring the two and grouping the rest under a “more filters” control served both the principle and the task.",
    steps: [
      {
        minutes: 25,
        title: "Read three law pages",
        text: "Read the assigned pages for Fitts's law, Hick's law and Jakob's law. For each write the regularity it describes and the situation it assumes.",
      },
      {
        minutes: 25,
        title: "Apply them to one decision",
        text: "Take one unresolved decision from your work. Write what each of the three laws suggests. Note where two of them disagree.",
      },
      {
        minutes: 30,
        title: "Break each one",
        text: "For each law, construct a specific situation from your own product where following it would make the design worse. Describe the situation, the harm and why the law does not apply there.",
      },
      {
        minutes: 25,
        title: "Convert to testable claims",
        text: "Rewrite each application as: the principle suggests X, which predicts readers will do Y, which I could check by Z. Make each Z something you could actually do.",
      },
      {
        minutes: 15,
        title: "Decide and record",
        text: "Resolve your decision, stating which principle you followed, which you overrode and why. Save the three counterexamples.",
      },
    ],
    freeToolPath:
      "Written work only; no tool, account or software is involved. This lesson is marked optional because it deepens judgement rather than producing a required artefact, but the counterexamples are useful in every later critique.",
    deliverable:
      "Three law summaries with their assumed situations, an application to one real decision including a conflict, three concrete counterexamples from your own product, and three testable claim rewrites.",
    check: [
      {
        question: "Why is citing Hick's law to justify hidden navigation a category error?",
        answer:
          "Because the law concerns choosing among comparable options. Someone hunting for a specific item is searching, not choosing, and hiding the item lengthens their task while appearing to reduce the option count.",
      },
      {
        question: "Two laws point in opposite directions. What does that mean?",
        answer:
          "That you have found the actual design decision. The work is naming both, deciding which matters more in this situation, and recording the reason — not selecting the one that agrees with you.",
      },
      {
        question: "What makes an application of a law testable?",
        answer:
          "Stating the predicted reader behaviour and the check that would confirm or refute it. Without a prediction and a check, the citation is an appeal to authority.",
      },
    ],
    rubric: [
      "Each law is stated with the situation it assumes",
      "A genuine conflict between laws is identified",
      "Counterexamples are specific and from your own work",
      "Applications are rewritten as testable claims",
    ],
    criteria: [
      {
        criterion: "Each law is stated with the situation it assumes",
        evidence:
          "Three summaries, each naming both the regularity and the conditions under which it holds.",
        levels: [
          "Laws restated as slogans.",
          "Regularities stated but assumed situations missing.",
          "All three include the situation the law assumes.",
          "As adequate, and one summary notes that the source itself publishes no limits.",
        ],
        remediation:
          "For each law, write the sentence “this describes what happens when…” and complete it with the specific situation. Any law you cannot complete that sentence for has not been understood yet.",
        recheck: "The three completed situation sentences.",
      },
      {
        criterion: "A genuine conflict between laws is identified",
        evidence:
          "One decision where two of the three point in different directions, with both directions stated.",
        levels: [
          "No conflict identified.",
          "A conflict asserted but only one side stated.",
          "Both directions are stated for a real decision.",
          "As adequate, and the resolution names what would have to be true for the overridden principle to win instead.",
        ],
        remediation:
          "Take your decision and ask what each law would advise if it were the only consideration. If all three agree, choose a harder decision.",
        recheck: "The decision with both directions stated.",
      },
      {
        criterion: "Counterexamples are specific and from your own work",
        evidence:
          "Three situations drawn from your own product where following the law causes a named harm.",
        levels: [
          "No counterexamples, or generic ones borrowed from the reading.",
          "Counterexamples exist but are hypothetical and unconnected to your work.",
          "All three come from your own product with a named harm.",
          "As adequate, and one counterexample is one you were about to commit before writing it down.",
        ],
        remediation:
          "For each law, find a place in your own screens where applying it would remove something a reader needs. Describe the resulting harm concretely.",
        recheck: "The three product-specific counterexamples.",
      },
      {
        criterion: "Applications are rewritten as testable claims",
        evidence:
          "Three rewrites in the suggests–predicts–check form, with checks that are actually feasible.",
        levels: [
          "Citations remain as assertions.",
          "Rewrites attempted but the check is not something you could do.",
          "All three are testable with feasible checks.",
          "As adequate, and one check is scheduled into a later module's testing work.",
        ],
        remediation:
          "Rewrite any claim whose check requires resources you do not have into one that a single person attempting the task could resolve.",
        recheck: "The three feasible testable claims.",
      },
    ],
    portfolio:
      "Practice. The counterexamples are valuable in interviews and critiques as evidence of judgement, but this lesson produces no user evidence and belongs in no case study's findings.",
    resource: laws,
    resources: [
      {
        ...laws,
        section:
          "Assigned pages only: fittss-law, hicks-law and jakobs-law, each read with its origins and takeaways.",
        purpose:
          "Supplies the named regularities this lesson then bounds with counterexamples.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. The site states these as laws and publishes no caveats; every limitation in this lesson is the course's own and must be presented that way. A printed poster is sold and also offered free; nothing is required.",
        fallbackId: "R02",
      },
    ],
  },
  {
    id: "m04-l06-v1",
    module: "m04",
    week: 4,
    day: 6,
    level: 1,
    areas: [2, 3],
    title: "From requests to user needs",
    objective:
      "Convert five feature requests into evidence-linked need statements, and mark clearly which are supported by your Module 2 research and which remain assumptions.",
    bringForward:
      "Your Module 2 findings and any requests, suggestions or stakeholder asks you have collected since.",
    why: "Requests arrive as solutions. If you build them as stated you lose the ability to find a better response, and you also lose the ability to tell whether the request was ever grounded in anything.",
    teach: [
      "A need statement describes what someone must accomplish and why, without naming a solution. The standard shape — as a certain person, I need to do something, so that some outcome follows, with optional trigger and constraint — is useful precisely because it is hard to fill in honestly. If you cannot state the so-that, you probably have a preference rather than a need.",
      "Needs and wants both matter but they are different inputs. Someone may want an email reminder; the underlying need is to know what to bring before leaving home, and email is one of several responses to it. Stating the need keeps the alternatives available — a reminder, a summary on the confirmation screen, a note in the calendar entry — and lets you choose by cost and evidence rather than by whoever asked loudest.",
      "Needs run across the whole journey, not just the parts you designed. They include the moments before a service is used and after it ends, and they include people who are not the primary user: the organiser who has to prepare materials, the person answering questions when something goes wrong. A service that satisfies the visible user and breaks its own support staff has not met its needs.",
      "The rule that keeps this honest is that a need without research is an assumption wearing better clothes. Writing a request in need form makes it clearer, not truer. Mark every statement with its evidence source, and where there is none, keep it and label it — because an assumption you can see is one you can decide to test.",
    ],
    misconception:
      "“The stakeholder knows the business, so their request is a requirement.” Their knowledge is real and is not the same as evidence about behaviour. Treat the request as a strong lead: convert it to a need, record the reasoning behind it, and note what would confirm it. That respects the expertise without skipping the check.",
    example:
      "The organiser asked for a mandatory “I have read the instructions” checkbox. Converted: as an organiser, I need attendees to arrive with the right materials, so that sessions start on time. That reframing put three responses on the table — the checkbox, a materials summary on the confirmation screen, and a reminder the day before — and made it obvious that the checkbox is the only one that produces no evidence about whether anyone read anything.",
    steps: [
      {
        minutes: 20,
        title: "Read the need statement format",
        text: "Read the assigned page. Write the format with its optional parts, and note the difference the so-that clause makes.",
      },
      {
        minutes: 25,
        title: "Collect the requests",
        text: "Gather five real requests, suggestions or asks — from your Module 2 sessions, from the organiser brief, or from your own backlog. Write each in the words it arrived in.",
      },
      {
        minutes: 30,
        title: "Convert to needs",
        text: "Rewrite each as a need statement with no solution in it. Where the so-that is hard to write, record that difficulty rather than inventing an outcome.",
      },
      {
        minutes: 30,
        title: "Mark the evidence",
        text: "For each need, record the evidence source or mark it as an assumption. For the two most consequential assumptions, write the smallest question that would test them.",
      },
      {
        minutes: 15,
        title: "Widen and save",
        text: "Add one need belonging to someone other than the primary user. Save the request-to-need table with its evidence column.",
      },
    ],
    freeToolPath:
      "A table on paper or in Markdown is the entire deliverable. No research platform, tool or account is needed, and no AI-generated persona or interview may be used as an evidence source.",
    deliverable:
      "A five-row table giving each original request, its need statement, its evidence source or assumption label, plus two testing questions and one need belonging to a non-primary user.",
    check: [
      {
        question: "Why must a need statement contain no solution?",
        answer:
          "Because naming the solution ends the search. Once the need is stated as an outcome, several responses become comparable on cost and evidence, and the request becomes one candidate rather than the answer.",
      },
      {
        question:
          "You cannot write the so-that clause for one request. What does that tell you?",
        answer:
          "That no one has articulated what the request achieves. That is a finding worth recording, not a gap to fill with a plausible-sounding outcome you invented.",
      },
      {
        question: "Does writing a request in need form make it evidence-based?",
        answer:
          "No. The format improves clarity, not truth. Only the evidence column distinguishes a researched need from a well-phrased assumption, which is why an unmarked table is worse than no table.",
      },
    ],
    rubric: [
      "Statements contain no solution",
      "Every need has an evidence source or an assumption label",
      "Difficulty writing an outcome is recorded, not concealed",
      "A non-primary user's need is included",
    ],
    criteria: [
      {
        criterion: "Statements contain no solution",
        evidence:
          "Five need statements in which no interface element, feature name or channel appears.",
        levels: [
          "Statements restate the requested feature.",
          "Some statements are solution-free; others name a mechanism.",
          "All five are free of solutions.",
          "As adequate, and each need is accompanied by at least two candidate responses so the alternatives are visible.",
        ],
        remediation:
          "Scan each statement for nouns naming a mechanism — email, checkbox, button, notification — and rewrite around the outcome instead.",
        recheck: "The five rewritten statements.",
      },
      {
        criterion: "Every need has an evidence source or an assumption label",
        evidence:
          "An evidence column with a specific source, such as a named session observation, or an explicit assumption label.",
        levels: [
          "No evidence column.",
          "Column exists but entries are vague, such as “research” or “obvious”.",
          "Each row names a specific source or is labelled an assumption.",
          "As adequate, and the strength of each source is characterised, such as one participant's account rather than a pattern.",
        ],
        remediation:
          "For each need, name the exact observation or note it came from. If you cannot point to one, change the entry to assumption.",
        recheck: "The evidence column with specific sources or honest labels.",
      },
      {
        criterion: "Difficulty writing an outcome is recorded, not concealed",
        evidence:
          "At least one recorded case where the so-that clause was hard or impossible, kept as a finding.",
        levels: [
          "All outcomes written smoothly with no difficulty noted, despite thin inputs.",
          "Difficulty mentioned but the outcome was invented anyway.",
          "A difficult case is retained with the difficulty stated.",
          "As adequate, and the difficulty is turned into a question for whoever made the request.",
        ],
        remediation:
          "Re-read your outcomes and mark any you supplied yourself rather than heard. Replace each with the recorded difficulty and a question.",
        recheck: "The marked outcomes and the resulting question.",
      },
      {
        criterion: "A non-primary user's need is included",
        evidence:
          "One need belonging to an organiser, supporter or other affected person, stated in the same format.",
        levels: [
          "Only primary-user needs.",
          "Another person mentioned but not expressed as a need.",
          "A full need statement for a non-primary user.",
          "As adequate, and a tension between that need and a primary-user need is identified.",
        ],
        remediation:
          "List everyone affected when the service works and when it fails, pick one who is not the primary user, and write their need in full.",
        recheck: "The added need statement and any tension identified.",
      },
    ],
    portfolio:
      "Practice, and a genuine artefact. The needs marked with real evidence can carry into a case study's problem definition. Assumption-labelled rows must stay labelled if they appear.",
    resource: needs,
    resources: [
      {
        ...needs,
        section:
          "The whole page, particularly the statement format and the needs-versus-wants distinction.",
        purpose:
          "Supplies an operational format for stating needs without naming solutions.",
        minutes: "10–20",
        limits:
          "Free reading, no account. Verified 2026-09-06. It is written for government services; the format transfers, the examples are contextual.",
        fallbackId: "R08",
      },
    ],
  },
  {
    id: "m04-l07-v1",
    module: "m04",
    week: 4,
    day: 7,
    level: 1,
    areas: [2, 3],
    title: "Value under constraint: who gains, who pays",
    objective:
      "Write a value proposition for one response to your strongest need, and state explicitly what it costs — to the reader, to the organisation and to the people it does not serve.",
    bringForward:
      "Your need statements with their evidence marks, and the contradictions and error findings from earlier in this module.",
    why: "Value is the argument that a design deserves to exist, and it is usually written as a list of benefits with no costs — which is why it convinces nobody who has to fund or build it.",
    teach: [
      "A value proposition states who it is for, what changes for them, and why this response rather than another. The comparison is the part most often skipped: value is relative to what someone does today, including doing nothing. If your response is only slightly better than the workaround people already have, that is the honest finding, not a reason to write a stronger adjective.",
      "Every response has costs, and naming them is what makes the proposition credible. A reader may pay in extra steps, in learning, in giving up information, or in losing something the old way allowed. An organisation pays in build effort, support load and ongoing maintenance. A proposition with no costs listed has not been thought through; it has been sold.",
      "Constraints are the boundary of the argument, and they are not the same as preferences. Time, budget, the technology already in place, legal obligations, the languages and devices your audience actually uses — these limit what can be considered. Preferences masquerade as constraints constantly, so write each one down and mark whether it could change and what it would take.",
      "Discovery work exists to make this argument honest before anyone builds. Its purpose is to understand the problem, the constraints and whether there is a case for continuing at all, including the legitimate outcome of deciding not to proceed. Being able to argue that something should not be built is a product skill, not a failure of one.",
    ],
    misconception:
      "“If it helps users, it is valuable.” Helping users is necessary and not sufficient. A response can genuinely help and still be the wrong thing to build because a cheaper response captures most of the benefit, because it cannot be maintained, or because it makes something else materially worse for someone else.",
    example:
      "For the need “attendees arrive with the right materials”, three responses were compared against doing nothing. A checkbox costs almost nothing to build and produces no change in behaviour and no evidence. A materials summary on the confirmation screen costs a little and reaches everyone who books. A day-before reminder reaches people at the right moment, costs a message channel and ongoing support, and fails for anyone whose contact details are wrong. The summary won on cost per unit of benefit, with the reminder recorded as the next candidate if evidence showed timing mattered more than availability.",
    steps: [
      {
        minutes: 25,
        title: "Read discovery's purpose",
        text: "Read the assigned page. Write what discovery is for, including what deciding not to continue means.",
      },
      {
        minutes: 25,
        title: "Establish the baseline",
        text: "For your strongest need, write what people do today, including doing nothing. Describe the workaround accurately rather than dismissively.",
      },
      {
        minutes: 30,
        title: "Write the proposition",
        text: "State who it is for, what changes, and why this response rather than the alternatives. Compare against the baseline explicitly.",
      },
      {
        minutes: 25,
        title: "Write the costs",
        text: "List costs to the reader, to the organisation, and to anyone the response does not serve or actively disadvantages. Be specific.",
      },
      {
        minutes: 15,
        title: "List constraints and save",
        text: "Write your constraints and mark each as fixed or changeable with what changing it would require. Save all four artefacts.",
      },
    ],
    freeToolPath:
      "Written work throughout; paper or Markdown is sufficient and no account, tool or data source is required. Do not use invented market figures or fabricated demand estimates anywhere in this lesson.",
    deliverable:
      "A baseline description of today's behaviour, a value proposition with an explicit comparison, a three-part cost list, and a constraint list marked fixed or changeable.",
    check: [
      {
        question: "Why include doing nothing as a comparison?",
        answer:
          "Because it is what most people are actually doing, and it costs them nothing to continue. If your response is not clearly better than the existing workaround, you have found that out before building rather than after.",
      },
      {
        question:
          "Your proposition lists no costs. What does a reviewer conclude?",
        answer:
          "That the costs exist but have not been examined. Every response takes something from someone; an unnamed cost usually appears later as support load, abandonment, or a group quietly excluded.",
      },
      {
        question: "Is deciding not to build something a failed discovery?",
        answer:
          "No. Establishing that a response is not worth building is a legitimate and valuable outcome. It saves the build cost and redirects attention, and being able to argue it is a product skill.",
      },
    ],
    rubric: [
      "The baseline describes today accurately",
      "The proposition compares rather than asserts",
      "Costs are named for three groups",
      "Constraints are separated from preferences",
    ],
    criteria: [
      {
        criterion: "The baseline describes today accurately",
        evidence:
          "A description of the current behaviour or workaround, including its genuine advantages.",
        levels: [
          "No baseline.",
          "A baseline that only describes the current state as broken.",
          "The baseline is accurate and names at least one advantage of the current way.",
          "As adequate, and the baseline is sourced to something observed rather than assumed.",
        ],
        remediation:
          "Write what people currently do and then write why it persists. Anything that survives without design attention usually has a real advantage; name it.",
        recheck: "The baseline with its advantages named.",
      },
      {
        criterion: "The proposition compares rather than asserts",
        evidence:
          "An explicit comparison with at least two alternatives including doing nothing, on stated grounds.",
        levels: [
          "Benefits asserted with no comparison.",
          "Alternatives mentioned but not compared on any stated basis.",
          "A comparison against alternatives including doing nothing, on stated grounds.",
          "As adequate, and the grounds include cost relative to benefit rather than benefit alone.",
        ],
        remediation:
          "List your alternatives in a table with one column per ground of comparison, and fill the doing-nothing row honestly.",
        recheck: "The comparison table with a completed doing-nothing row.",
      },
      {
        criterion: "Costs are named for three groups",
        evidence:
          "Specific costs to readers, to the organisation, and to people the response does not serve or disadvantages.",
        levels: [
          "No costs listed.",
          "Costs listed for one group only, usually build effort.",
          "Specific costs for all three groups.",
          "As adequate, and one cost is identified as potentially disqualifying with what would have to change.",
        ],
        remediation:
          "For each group, ask what they lose or must now do that they did not before. If a group appears to lose nothing, you have probably not identified who is excluded.",
        recheck: "The three-part cost list.",
      },
      {
        criterion: "Constraints are separated from preferences",
        evidence:
          "A constraint list where each entry is marked fixed or changeable, with what changing it would require.",
        levels: [
          "Constraints and preferences are mixed with no distinction.",
          "A list exists but nothing is marked.",
          "Each entry is marked with what changing it would take.",
          "As adequate, and at least one item initially recorded as a constraint is reclassified as a preference.",
        ],
        remediation:
          "Take each constraint and ask who could change it and at what cost. Anything you or your team could decide differently this week is a preference.",
        recheck: "The marked constraint list with at least one reclassification considered.",
      },
    ],
    portfolio:
      "Practice, and case-study material. A value proposition with honest costs and constraints is a strong section of a case study. It must not include invented market size, demand figures or business impact.",
    resource: discovery,
    resources: [
      {
        ...discovery,
        section:
          "The purpose of discovery, understanding constraints, and deciding what happens next including stopping.",
        purpose:
          "Establishes that arguing against building is a legitimate outcome and how constraints bound the argument.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for government delivery phases; take the reasoning, not the phase names as a mandatory process.",
        fallbackId: "R19",
      },
    ],
  },
  {
    id: "m04-l08-v1",
    module: "m04",
    week: 4,
    day: 8,
    level: 1,
    areas: [2, 3],
    title: "The smallest thing that could change your decision",
    objective:
      "Define the smallest build that would resolve your riskiest assumption, state in advance what result would stop the work, and record what the build cannot tell you.",
    bringForward:
      "Your value proposition, cost list, constraint list and the assumptions marked in your need statements.",
    why: "“Minimum viable product” has become a name for a small first release. Its useful meaning is narrower and much more demanding: the smallest thing that resolves the uncertainty you would otherwise be betting on.",
    teach: [
      "Start from the riskiest assumption rather than from a feature list. The riskiest assumption is the one that combines weak evidence with a serious consequence if wrong — not the one that is most technically interesting or easiest to test. If your value proposition depends on people noticing a summary at the moment they pack their bag, that is the assumption to attack, and building the summary beautifully does not attack it.",
      "The build should be just complex enough to let you test the idea, and no more. It need not cover the whole journey, need not be production quality, and need not be code at all: a paper sequence, a clickable set of static screens, a manual process behind a form, or a message you send yourself can each resolve a specific uncertainty. The fidelity should be set by the question, not by what looks impressive.",
      "Decide the stopping rule before you build. Write what result would make you continue, what would make you change direction, and what would make you stop entirely. Written afterwards, any result can be read as encouraging, and it usually is — which is how a team ends up building something nobody wanted while pointing at a chart that never had a threshold.",
      "Every small build has a boundary, and naming it is part of the deliverable. A prototype tested with three people who agreed to help tells you about comprehension and obvious obstacles; it tells you nothing about demand, frequency, retention or what happens at scale. Say what it cannot answer, and say which later module — analytics and experiments, or research at greater depth — is where that question belongs.",
    ],
    misconception:
      "“The MVP is version one of the product.” Then it is a release plan, not a test. A release with no stated uncertainty and no stopping rule cannot fail, which means it cannot inform anything either; you will ship it and learn what you would have learned anyway.",
    example:
      "The riskiest assumption behind the materials summary was that attendees look for preparation information at all before travelling — not that a summary would be readable. The smallest build was therefore not a summary screen but a one-question message sent to five people who had recently booked, asking what they did before attending. The stopping rule was written first: if fewer than two described looking for information beforehand, the summary drops down the list and the reminder becomes the candidate instead. The result could not establish frequency across all attendees, and the write-up said so.",
    steps: [
      {
        minutes: 25,
        title: "Read and rank",
        text: "Read the assigned page on testing riskiest assumptions. Then rank your assumptions by evidence strength against consequence, and pick the top one.",
      },
      {
        minutes: 30,
        title: "Design the smallest build",
        text: "Describe the smallest thing that could resolve that assumption. Justify why each element is necessary and remove anything that is not.",
      },
      {
        minutes: 25,
        title: "Write the stopping rule first",
        text: "Before building anything, write what result continues, what redirects, and what stops the work. Make the thresholds concrete.",
      },
      {
        minutes: 25,
        title: "Name the boundary",
        text: "Write what this build cannot tell you, and map each unanswerable question to the module that addresses it. Include anything about demand, frequency or scale.",
      },
      {
        minutes: 15,
        title: "Submit and request review",
        text: "Save the ranking, the build description, the stopping rule and the boundary. Record actual minutes and set the practice status to ready for review with references to your outputs.",
      },
    ],
    freeToolPath:
      "Paper prototypes, a manual process behind a form, or a written message are all legitimate smallest builds and cost nothing. If you involve any real person, it must be voluntary, consented and free of private data. Do not simulate participants with AI and do not present generated responses as evidence.",
    deliverable:
      "A ranked assumption list with reasoning, a description of the smallest build with each element justified, a stopping rule written before building, and a boundary list mapping unanswerable questions to later modules.",
    check: [
      {
        question: "Why rank by consequence as well as by evidence strength?",
        answer:
          "Because a weakly evidenced assumption that costs little if wrong is not worth testing first. Risk is the combination: thin evidence plus serious consequence is what earns the first test.",
      },
      {
        question: "Why must the stopping rule be written before the build?",
        answer:
          "Because afterwards, results are interpreted in favour of continuing. A threshold set in advance is the only version that can actually stop work, which is the entire point of testing rather than shipping.",
      },
      {
        question:
          "Five people used your prototype successfully. What have you established?",
        answer:
          "That those five could complete the task under those conditions, which is useful evidence about comprehension and obstacles. It says nothing about how many people want this, how often they would use it, or what happens at scale.",
      },
    ],
    rubric: [
      "The assumption is ranked by evidence and consequence",
      "The build is minimal and each element justified",
      "A stopping rule exists and predates the build",
      "The boundary is named and mapped forward",
    ],
    criteria: [
      {
        criterion: "The assumption is ranked by evidence and consequence",
        evidence:
          "A ranked list where each entry carries both an evidence strength and a consequence, with the top choice justified on both.",
        levels: [
          "No ranking, or a single assumption chosen without comparison.",
          "Ranked on one dimension only.",
          "Ranked on both dimensions with the choice justified.",
          "As adequate, and an assumption that seemed important is explicitly deprioritised with the reason.",
        ],
        remediation:
          "Build a two-column table of evidence strength and consequence for every assumption, then choose from the weak-evidence, high-consequence quadrant.",
        recheck: "The two-dimension ranking and the justified choice.",
      },
      {
        criterion: "The build is minimal and each element justified",
        evidence:
          "A description where every element is tied to the assumption, with at least one element removed for not being necessary.",
        levels: [
          "A feature list, not a test.",
          "A build described but elements are not tied to the assumption.",
          "Each element is justified and something was removed.",
          "As adequate, and the chosen fidelity is justified by the question rather than by convenience or appearance.",
        ],
        remediation:
          "For each element of your build, ask what you would fail to learn without it. Remove everything that survives that question unchanged.",
        recheck: "The reduced build with per-element justification.",
      },
      {
        criterion: "A stopping rule exists and predates the build",
        evidence:
          "Concrete continue, redirect and stop thresholds, written and dated before any building.",
        levels: [
          "No stopping rule.",
          "A rule exists but thresholds are vague or only describe success.",
          "All three outcomes have concrete thresholds recorded before building.",
          "As adequate, and the rule was actually applied and the outcome honoured, including an unwelcome one.",
        ],
        remediation:
          "Write the three thresholds now, with numbers or observable descriptions, and record the order of writing relative to the build.",
        recheck: "The dated stopping rule with three concrete thresholds.",
      },
      {
        criterion: "The boundary is named and mapped forward",
        evidence:
          "A list of questions this build cannot answer, each mapped to the later module that addresses it.",
        levels: [
          "No boundary stated; results treated as general.",
          "A generic caveat with no specific questions.",
          "Specific unanswerable questions mapped to later modules.",
          "As adequate, and the boundary explicitly rules out any claim about demand, frequency, retention or business impact.",
        ],
        remediation:
          "Write down every conclusion you would like to draw, then mark which ones your build's participants and method cannot support. Map each to the module that could.",
        recheck: "The boundary list with module mappings.",
      },
    ],
    portfolio:
      "Practice, and the closing artefact of this module. A riskiest-assumption test with a pre-written stopping rule is genuinely strong case-study material, provided any participants were real, voluntary and consented, and no result is described as measured product impact.",
    resource: alpha,
    resources: [
      {
        ...alpha,
        section:
          "Identifying and testing riskiest assumptions, building only what is complex enough to test an idea, and deciding whether to continue.",
        purpose:
          "Supplies a public, non-commercial account of minimal building that avoids teaching MVP from vendor marketing.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Its timescales and team compositions describe government delivery and are not requirements for your practice.",
        fallbackId: "R07",
      },
    ],
  },
];
