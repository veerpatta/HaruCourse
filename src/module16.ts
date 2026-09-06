import { withLegacyText, type Lesson } from "./teaching";
// Module 16 separates two subjects that get confused: using AI tools in
// design work, and designing products that contain AI. Both are taught with
// the same rule the course has applied since m05 — evidence is what someone
// observed, not what a model produced — and with the constraint that nothing
// here requires a paid model, a paid tool or uploading anyone's data.
const pair = {
  title: "Google PAIR: People + AI Guidebook",
  id: "R21",
  url: "https://pair.withgoogle.com/guidebook-v2/",
};
const nist = {
  title: "NIST: AI Risk Management Framework",
  id: "R69",
  url: "https://www.nist.gov/itl/ai-risk-management-framework",
};
const errors = {
  title: "NN/g: preventing user errors",
  id: "R36",
  url: "https://www.nngroup.com/articles/user-mistakes/",
};
const heuristics = {
  title: "Nielsen: ten usability heuristics",
  id: "R02",
  url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
};
const privacy = {
  title: "GOV.UK: managing research data and participant privacy",
  id: "R54",
  url: "https://www.gov.uk/service-manual/user-research/managing-user-research-data-participant-privacy",
};
const intervals = {
  title: "NN/g: confidence intervals and margins of error",
  id: "R37",
  url: "https://www.nngroup.com/articles/confidence-interval/",
};
const standard = {
  title: "GOV.UK: Service Standard",
  id: "R19",
  url: "https://www.gov.uk/service-manual/service-standard",
};
const usability = {
  title: "GOV.UK: moderated usability testing",
  id: "R05",
  url: "https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing",
};
export const module16: Lesson[] = [
  withLegacyText({
    id: "m16-l01-v1",
    module: "m16",
    week: 16,
    day: 1,
    level: 5,
    areas: [15],
    guided: true,
    title: "Two different subjects",
    objective:
      "Separate AI-assisted work from AI-containing products in your own practice, and write the rules you will hold to for each.",
    bringForward: "Your research materials, design work and the course's data rules.",
    prerequisite: "Your project materials and your m05 data plan.",
    why: "Using a model to help you write and designing a product that uses a model are different skills with different risks, and conflating them produces sloppy thinking about both.",
    teach: [
      "AI-assisted work is about your process; AI products are about someone else's experience.",
      "Assistance can accelerate drafting and cannot supply evidence.",
      "Never put participant data, notes or recordings into a model you do not control.",
      "Anything a model asserts is a claim to verify, not a finding.",
      "Write your own rules before you are under deadline pressure.",
    ],
    explanation: [
      "The two subjects share a technology and nothing else. Using a model to draft a first version of a message, summarise your own writing or generate variations to react against is a question about your working method. Designing a product where a model produces something a person relies on is a question about that person's understanding, control and recourse when it is wrong.",
      "For assistance, the boundary this course has held since m05 is the important one: a model can help you write, and it cannot tell you what a participant said. Anything produced by a model is a draft or a suggestion, and treating its fluent output as evidence is the single most damaging habit available to a designer right now.",
      "The data rule follows from the consent you gave participants. You promised that you were the only person with access to their notes; putting those notes into a service you do not control breaks that promise regardless of the service's policy. This applies to recordings, transcripts, contact details and anything identifying, and it is a rule rather than a preference.",
      "Writing your own rules now matters because the pressure arrives later, usually with a deadline. A written rule — what you will use assistance for, what you will never put into it, and what you will always verify — is easier to hold than a judgement made at eleven at night.",
    ],
    misconception:
      "“The model summarised my interviews, so I have my findings.” You have a plausible summary produced by something that cannot tell the difference between what a participant said and what usually gets said. The analysis is the work; skipping it removes the thing that made the findings yours.",
    example:
      "The rules were written in two halves. Assistance: acceptable for drafting message wording to react against, for generating alternative phrasings, for explaining an unfamiliar technical term, and for checking my own writing for jargon. Never: research notes, participant details, recordings, anything identifying, or anything a client has not agreed can leave their systems. Always verify: any factual claim, any statistic, any assertion about what people do. AI products: to be treated as a separate design problem with its own module rules about control, failure and disclosure.",
    freeToolPath:
      "This module requires no paid model, no API and no subscription. Where an exercise involves generation, scripted or hand-written example responses are sufficient and often better, because you control what the failure looks like.",
    outputs: [
      "A written separation of assisted work from AI products",
      "Rules for what you will use assistance for",
      "A list of what will never go into a model you do not control",
      "A verification rule for anything a model asserts",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read and separate",
        instructions: [
          "Read the assigned guidebook's framing of AI in products.",
          "Write the difference between assisted work and an AI product in your own words.",
        ],
      },
      {
        minutes: 30,
        title: "Write the assistance rules",
        instructions: [
          "List what you will use assistance for in your own process.",
          "List what you will not, and why.",
        ],
      },
      {
        minutes: 25,
        title: "Write the data rule",
        instructions: [
          "Re-read your m05 consent and data plan.",
          "Write what may never be put into a service you do not control.",
        ],
      },
      {
        minutes: 25,
        title: "Write the verification rule",
        instructions: [
          "Decide what you will always check before repeating something a model produced.",
          "Name where you will check it.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Save the rules where you will see them under deadline pressure.",
          "Note which rule you expect to find hardest.",
        ],
      },
    ],
    check: [
      {
        question: "What can assistance not do?",
        answer:
          "Supply evidence. It can draft, rephrase and explain; it cannot tell you what a participant said or what people do, and its fluency makes that easy to forget.",
      },
      {
        question: "Why is the participant-data rule absolute?",
        answer:
          "Because you promised the participant you were the only person with access. Putting their notes into a service you do not control breaks that promise whatever the service's policy says.",
      },
      {
        question: "Why write the rules in advance?",
        answer:
          "Because the pressure to bend them arrives with a deadline, and a written rule is easier to hold than a judgement made late at night.",
      },
    ],
    rubric: [
      "Assisted work and AI products are clearly separated",
      "Assistance rules state uses and non-uses",
      "The data rule covers participant material explicitly",
      "A verification rule exists for model assertions",
    ],
    criteria: [
      {
        criterion: "Assisted work and AI products are clearly separated",
        evidence:
          "A written distinction with an example of each from your own context.",
        levels: [
          "The two treated as one subject.",
          "Distinguished abstractly.",
          "Distinguished with examples from your own work.",
          "As adequate, and the different risks of each are named.",
        ],
        remediation:
          "Write one thing you might use a model for in your process and one product feature that would contain a model.",
        recheck: "The separation.",
      },
      {
        criterion: "Assistance rules state uses and non-uses",
        evidence:
          "Two lists with reasoning for the exclusions.",
        levels: [
          "No rules.",
          "Uses listed without exclusions.",
          "Both lists with reasons.",
          "As adequate, and one use is excluded because it would replace thinking you need to do.",
        ],
        remediation:
          "Write what you would be comfortable telling a client you used it for, and what you would not.",
        recheck: "The assistance rules.",
      },
      {
        criterion: "The data rule covers participant material explicitly",
        evidence:
          "A rule naming notes, recordings, transcripts and identifying details.",
        levels: [
          "No data rule.",
          "A general caution.",
          "Specific categories named as never.",
          "As adequate, and it references the consent you actually gave.",
        ],
        remediation:
          "Re-read your consent introduction and write the rule that keeps the promise you made.",
        recheck: "The data rule.",
      },
      {
        criterion: "A verification rule exists for model assertions",
        evidence:
          "A rule stating what is always checked and where.",
        levels: [
          "No rule.",
          "An intention to check things.",
          "Specific categories and a source for checking.",
          "As adequate, and it names what you will do if you cannot verify something.",
        ],
        remediation:
          "Write which kinds of claim you will always verify and against what.",
        recheck: "The verification rule.",
      },
    ],
    repairs: [
      "If the two subjects are merged, write an example of each.",
      "If exclusions are missing, write what you would not admit to using it for.",
      "If participant data is not covered, write that rule first.",
      "If verification is an intention, name the categories and the source.",
    ],
    portfolio:
      "A written policy for your own use of AI assistance is worth including in a portfolio or an interview: it is a question you will be asked, and having answered it deliberately is unusual.",
    resource: pair,
    resources: [
      {
        ...pair,
        section:
          "The chapters on user needs and mental models, read for how an AI product differs from a deterministic one.",
        purpose:
          "Establishes the distinction between the two subjects this module keeps apart.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It is a design guidebook rather than a statement of current model capability; nothing in this module requires a paid model or API.",
        fallbackId: "R19",
      },
      {
        ...privacy,
        section:
          "Treating research material as personal data and restricting who can access it.",
        purpose:
          "Grounds the data rule in the promise you made to participants.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 5 November 2018. It does not discuss AI tools at all, so this course's prohibition is its own rule, stated for that reason.",
        fallbackId: "R53",
      },
    ],
  }),
  withLegacyText({
    id: "m16-l02-v1",
    module: "m16",
    week: 16,
    day: 2,
    level: 5,
    areas: [15],
    guided: true,
    title: "Using assistance without losing the work",
    objective:
      "Use assistance on three design tasks, and for each record what it saved, what it got wrong, and what you had to do anyway.",
    bringForward: "Your current design work and your assistance rules.",
    prerequisite: "Your written assistance rules and work in progress.",
    why: "Assistance is genuinely useful for some tasks and quietly harmful for others, and the difference is learnable by keeping a record rather than by argument.",
    teach: [
      "Good uses: first drafts, alternatives to react against, explaining unfamiliar terms.",
      "Poor uses: anything requiring evidence, judgement about your users, or novelty.",
      "The output is a starting point; the editing is where the work happens.",
      "Verify every fact, name, number and claim before repeating it.",
      "Record what it got wrong; the pattern of errors is the useful knowledge.",
    ],
    explanation: [
      "The tasks where assistance helps share a shape: you know what good looks like, you can evaluate the output quickly, and the cost of a mediocre first draft is low. Writing twenty candidate microcopy lines to react against is a good use, because you will recognise the right one and the model's failures cost nothing.",
      "The tasks where it harms share a different shape: you cannot easily evaluate the output, or the output's plausibility substitutes for work you needed to do. Summarising research you have not read, generating personas, or asserting what users prefer all produce fluent text that feels like progress and removes the thinking that made it worth having.",
      "Verification is not optional and is frequently skipped because the output reads as authoritative. Names, numbers, citations, claims about standards and assertions about behaviour all need checking against a source, and the course's own rule applies: a model's assertion is a claim, not a finding.",
      "Recording the errors is what turns this from an opinion into knowledge. Over three tasks you will see a pattern — confident invention of specifics, plausible but wrong terminology, an average of everything rather than something particular — and that pattern is what tells you where assistance is safe for you.",
    ],
    misconception:
      "“It saved me hours.” Sometimes. Count the editing, the verification and the times you accepted something you would not have written. The honest measure includes those, and for some tasks it comes out negative.",
    example:
      "Three tasks were logged. Drafting twenty error-message variants: useful — three were usable after editing, the rest were generic, and it took ten minutes rather than forty. Explaining a technical term an engineer used: useful, and the explanation was verified against documentation before being repeated, where one detail turned out to be wrong. Summarising five interview notes: refused under the data rule, and done by hand, which took two hours and produced the contradiction that became the study's main finding — a contradiction the earlier trial summary had smoothed away.",
    freeToolPath:
      "Any assistance you already have access to, free tiers included; no paid model is required. Where you have none, the exercise still works: write the three tasks, predict what assistance would produce, and record what you did instead.",
    outputs: [
      "Three tasks attempted with assistance, logged",
      "What each saved and what each got wrong",
      "A verification record for any fact or claim used",
      "A pattern of errors noted across the three",
    ],
    steps: [
      {
        minutes: 25,
        title: "Choose the tasks",
        instructions: [
          "Choose three real tasks of different kinds.",
          "Predict for each whether assistance will help, and why.",
        ],
      },
      {
        minutes: 30,
        title: "Run them",
        instructions: [
          "Attempt each with assistance, staying inside your data rules.",
          "Keep the raw output before you edit it.",
        ],
      },
      {
        minutes: 25,
        title: "Verify",
        instructions: [
          "Check every fact, term, number and claim against a source.",
          "Record anything that was wrong or unverifiable.",
        ],
      },
      {
        minutes: 25,
        title: "Count the real saving",
        instructions: [
          "Record time spent including editing and verification.",
          "Note anything you accepted that you would not have written yourself.",
        ],
      },
      {
        minutes: 15,
        title: "Find the pattern",
        instructions: [
          "Compare the three logs for a pattern in the errors.",
          "Update your assistance rules if the evidence warrants it.",
        ],
      },
    ],
    check: [
      {
        question: "What shape of task suits assistance?",
        answer:
          "One where you know what good looks like, can evaluate output quickly, and a mediocre draft costs little. Then its failures are cheap and its speed is real.",
      },
      {
        question: "Why is summarising your own research a poor use?",
        answer:
          "Because the analysis is the work, and a fluent summary removes it while feeling like progress. It also smooths away contradictions, which are often the finding.",
      },
      {
        question: "How do you measure the saving honestly?",
        answer:
          "Include editing, verification and the things you accepted because they were there. For some tasks the total is negative.",
      },
    ],
    rubric: [
      "Three tasks of different kinds are logged with predictions",
      "Errors and unverifiable claims are recorded",
      "The time saving includes editing and verification",
      "A pattern across the three is identified",
    ],
    criteria: [
      {
        criterion: "Three tasks of different kinds are logged with predictions",
        evidence:
          "Three real tasks with a prediction made before each attempt.",
        levels: [
          "Fewer than three, or all of one kind.",
          "Three tasks without predictions.",
          "Three different kinds with predictions.",
          "As adequate, and one prediction turned out to be wrong, which is recorded.",
        ],
        remediation:
          "Choose tasks of different shapes — drafting, explaining, analysing — and predict before running each.",
        recheck: "The task log.",
      },
      {
        criterion: "Errors and unverifiable claims are recorded",
        evidence:
          "A record of what was wrong or could not be checked, per task.",
        levels: [
          "Output accepted without checking.",
          "Some checking without a record.",
          "Errors and unverifiable items recorded per task.",
          "As adequate, and one error would have been repeated confidently without the check.",
        ],
        remediation:
          "Go back through the raw output and check every specific claim against a source.",
        recheck: "The verification record.",
      },
      {
        criterion:
          "The time saving includes editing and verification",
        evidence:
          "Time recorded for the whole cycle, not only generation.",
        levels: [
          "Only generation time counted.",
          "Editing counted, verification omitted.",
          "The whole cycle counted per task.",
          "As adequate, and at least one task shows a negative saving.",
        ],
        remediation:
          "Re-count including the verification you did afterwards, and be honest where it cost more.",
        recheck: "The time record.",
      },
      {
        criterion: "A pattern across the three is identified",
        evidence:
          "A written pattern in the errors, with a rule updated as a result.",
        levels: [
          "No pattern sought.",
          "A pattern asserted without evidence from the logs.",
          "A pattern drawn from the three logs, with a rule change.",
          "As adequate, and the pattern names a category you will stop using assistance for.",
        ],
        remediation:
          "Read the three logs together and write what the failures had in common.",
        recheck: "The pattern note.",
      },
    ],
    repairs: [
      "If the tasks are all one kind, add a drafting and an analytical task.",
      "If output was accepted unchecked, verify every specific claim now.",
      "If only generation time was counted, add editing and verification.",
      "If no pattern was found, compare the three failures side by side.",
    ],
    portfolio:
      "An honest log of where assistance helped and where it cost time is a credible answer to an interview question most candidates answer with enthusiasm or suspicion.",
    resource: pair,
    resources: [
      {
        ...pair,
        section:
          "The chapters on errors and on setting expectations, read for how model output should be treated.",
        purpose:
          "Frames output as probabilistic rather than authoritative, which is the basis of the verification rule.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written about products rather than a designer's own tool use; the application here is the course's own.",
        fallbackId: "R19",
      },
      {
        ...heuristics,
        section: "Heuristic 1, visibility of system status, and heuristic 9, error recovery.",
        purpose:
          "Provides criteria for judging the assistance tools you use as products in their own right.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Not written about AI; the application is this lesson's.",
        fallbackId: "R11",
      },
    ],
  }),
  withLegacyText({
    id: "m16-l03-v1",
    module: "m16",
    week: 16,
    day: 3,
    level: 5,
    areas: [15],
    guided: true,
    title: "Designing for a system that is sometimes wrong",
    objective:
      "Design one AI feature's normal state so that a person can tell how much to trust it, without showing them a number they cannot interpret.",
    bringForward: "Your product and one place a model could plausibly help.",
    prerequisite: "One candidate AI feature in your own product.",
    why: "A feature that is right most of the time is a different design problem from one that is right always, and the difference is entirely in what the person is told.",
    teach: [
      "State what the feature does and what it is for, in the interface.",
      "Set expectations before the first output, not after the first error.",
      "A confidence percentage is usually meaningless to a reader.",
      "Show the basis: what it used, so the person can judge it.",
      "Design the ordinary case as though it will sometimes be wrong.",
    ],
    explanation: [
      "The guidebook's framing is that people build a mental model of what a system can do from their first encounters, and that setting expectations early is cheaper than correcting them later. In practice this means saying what the feature is doing — suggesting, sorting, drafting — in words, before the person has formed a theory from a lucky first result.",
      "Confidence numbers rarely help. Eighty-seven per cent means little without a reference class, and people read any number above about seventy as effectively certain. What helps is showing the basis: this suggestion is from classes you booked before, this draft is from the notes you wrote, this ranking is by distance. A person can evaluate a basis; they cannot evaluate a percentage.",
      "Design the ordinary case for occasional wrongness rather than treating errors as a separate screen. That means output that is easy to scan and reject, changes that are easy to reverse, and no irreversible action taken from a suggestion without a person's confirmation.",
      "The trust question is symmetrical: over-trust produces people accepting bad output, and under-trust produces a feature nobody uses. Both are design failures, and the fix for both is the same — say what it does, show what it used, and make disagreement cheap.",
    ],
    misconception:
      "“Showing a confidence score makes it honest.” It makes it look quantitative. Most readers cannot convert a percentage into a decision, and a high number reads as certainty, which is the opposite of what the number was for.",
    example:
      "The feature: suggesting classes a person might book. The normal state says “Suggested from classes you booked before and their times”, which is the basis rather than a score. Suggestions are presented as a list to scan rather than a single answer, each can be dismissed with one tap, and dismissal is remembered. No booking is ever made from a suggestion without the review screen. A confidence percentage was designed and rejected, with the reason recorded: in a small test, three of three people read anything above 70 per cent as “this is right”.",
    freeToolPath:
      "Paper or your existing prototype with scripted outputs. No model is required to design the state; write the outputs by hand, including the wrong ones.",
    outputs: [
      "A normal state that states what the feature does",
      "The basis for its output shown in the interface",
      "Cheap disagreement: dismiss, edit or ignore",
      "A rejected confidence display with the reason",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read and choose",
        instructions: [
          "Read the assigned chapters on mental models and setting expectations.",
          "Choose one plausible AI feature in your product.",
        ],
      },
      {
        minutes: 30,
        title: "Write what it does",
        instructions: [
          "Write the sentence the interface shows before the first output.",
          "Say what it is doing and what it is not.",
        ],
      },
      {
        minutes: 25,
        title: "Show the basis",
        instructions: [
          "Decide what information the output rests on and show it.",
          "Prefer a basis a person can evaluate over a number they cannot.",
        ],
      },
      {
        minutes: 25,
        title: "Make disagreement cheap",
        instructions: [
          "Design dismissal, editing and ignoring, each in one action.",
          "Ensure no irreversible action follows from a suggestion alone.",
        ],
      },
      {
        minutes: 15,
        title: "Reject a display",
        instructions: [
          "Design a confidence display and reject it, with the reason.",
          "Save the state, the basis and the rejection.",
        ],
      },
    ],
    check: [
      {
        question: "Why show the basis rather than a confidence score?",
        answer:
          "Because a person can evaluate a basis — these are classes you booked before — and cannot evaluate a percentage, which they will read as certainty above about seventy.",
      },
      {
        question: "What does cheap disagreement protect?",
        answer:
          "It keeps a wrong output from becoming a wrong action, and it stops people abandoning a feature that is mostly useful because rejecting it is annoying.",
      },
      {
        question: "Why set expectations before the first output?",
        answer:
          "Because people form a model from their first encounters, and correcting a wrong model later is far more expensive than stating what the feature does now.",
      },
    ],
    rubric: [
      "The interface states what the feature does before output",
      "The basis for the output is shown and evaluable",
      "Dismissing or editing takes one action",
      "A confidence display is designed and rejected with reasons",
    ],
    criteria: [
      {
        criterion: "The interface states what the feature does before output",
        evidence:
          "Wording shown before the first result, saying what it does and does not do.",
        levels: [
          "No statement.",
          "A statement after the first output or in help.",
          "Before the first output, in the interface.",
          "As adequate, and it names one thing the feature is not for.",
        ],
        remediation:
          "Write the sentence a first-time user sees before any output, and place it in the design.",
        recheck: "The expectation wording.",
      },
      {
        criterion: "The basis for the output is shown and evaluable",
        evidence:
          "The information the output rests on, shown in terms a person can judge.",
        levels: [
          "No basis shown.",
          "A score or a vague reference to personalisation.",
          "A specific, evaluable basis.",
          "As adequate, and the basis is specific enough for the person to notice when it is wrong.",
        ],
        remediation:
          "Replace any score with a sentence naming what the suggestion came from.",
        recheck: "The basis display.",
      },
      {
        criterion: "Dismissing or editing takes one action",
        evidence:
          "One-action dismissal and editing, with no irreversible action from a suggestion.",
        levels: [
          "Disagreement is costly or impossible.",
          "Dismissal exists but takes several steps.",
          "One action for dismissal and editing, with irreversible actions confirmed.",
          "As adequate, and dismissal is remembered rather than repeating the suggestion.",
        ],
        remediation:
          "Design the dismissal control and check no suggestion can trigger a commitment on its own.",
        recheck: "The disagreement design.",
      },
      {
        criterion:
          "A confidence display is designed and rejected with reasons",
        evidence:
          "A designed display plus a written rejection with the reasoning.",
        levels: [
          "Not considered.",
          "Rejected without designing it.",
          "Designed, tested against comprehension and rejected with reasons.",
          "As adequate, and the rejection cites how people read the number.",
        ],
        remediation:
          "Draw the version with a score, show it to two people and ask what it means to them.",
        recheck: "The rejection note.",
      },
    ],
    repairs: [
      "If expectations are unstated, write the sentence before the first output.",
      "If a score is shown, replace it with an evaluable basis.",
      "If disagreement is costly, make dismissal one action.",
      "If no display was rejected, design one and test what people read into it.",
    ],
    portfolio:
      "An AI feature whose basis is shown rather than scored demonstrates that you understand what people can actually do with uncertainty.",
    resource: pair,
    resources: [
      {
        ...pair,
        section:
          "The chapters on mental models, setting expectations and explainability.",
        purpose:
          "Supplies the expectation-setting and explanation patterns this lesson applies.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. A design guidebook, not a statement of what any current model can do; the rejection of confidence scores here is the course's own position.",
        fallbackId: "R19",
      },
      {
        ...intervals,
        section: "What a confidence figure means and how it is misread.",
        purpose:
          "Grounds the argument against showing a number people cannot interpret.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written about research statistics rather than model confidence; the transfer is about human interpretation, not mathematics.",
        fallbackId: "R45",
      },
    ],
  }),
  withLegacyText({
    id: "m16-l04-v1",
    module: "m16",
    week: 16,
    day: 4,
    level: 5,
    areas: [15],
    guided: true,
    title: "Keeping the person in control",
    objective:
      "Specify the control surface for your AI feature: how a person corrects it, overrides it, turns it off, and undoes what it did.",
    bringForward: "Your AI feature's normal state.",
    prerequisite: "Your designed AI feature.",
    why: "Control is what separates a feature people tolerate from one they trust, and it is the part most often designed last.",
    teach: [
      "Four controls: correct, override, disable, undo.",
      "Correction should teach the system, or say plainly that it does not.",
      "Override must be available before the action, not only after.",
      "Disabling must be findable, and the product must work without the feature.",
      "Undo is the safety net for everything the other three missed.",
    ],
    explanation: [
      "The four controls answer different situations. Correction is for output that is nearly right. Override is for output that is wrong when the person already knows the answer. Disabling is for a feature that is not useful to this person at all. Undo is for the case where something happened before anyone noticed, which will occur however careful the other three are.",
      "Correction raises an honesty question. If correcting a suggestion changes future suggestions, say so; if it does not, say that too, because a person who corrects the same thing five times and sees no change concludes the product is ignoring them — which it is. Neither behaviour is wrong; hiding which one applies is.",
      "Override has to exist before the action, not only as a correction afterwards. A person who knows the suggestion is wrong should be able to proceed their own way immediately rather than being routed through a rejection flow, and designing that path is often what makes an assistive feature bearable for experienced users.",
      "Disabling has two requirements: it must be findable without searching support pages, and the product must remain usable without the feature. A feature that cannot be turned off is not assistance, and one whose absence breaks the product was never optional.",
    ],
    misconception:
      "“People can just ignore the suggestion.” Ignoring is not control, especially where the suggestion occupies the primary position, resets after every action, or has already changed what the person sees. Control means being able to change what the system does, not only to look past it.",
    example:
      "The control surface for the suggestion feature. Correct: dismissing a suggestion removes it and, in this design, does change future suggestions — and the interface says so in one sentence. Override: the search remains available and prominent, so a person who knows what they want never has to engage with suggestions at all. Disable: a setting in the account section, one level deep, with the product fully usable without suggestions, checked by walking the main task with them off. Undo: nothing irreversible follows a suggestion, and the one action that persists — a dismissal — can be reversed for the session.",
    freeToolPath:
      "Paper or your prototype. Writing the four controls out is most of the work.",
    outputs: [
      "Four controls specified: correct, override, disable, undo",
      "A statement of whether correction changes future behaviour",
      "A check that the product works with the feature off",
      "An override path available before the action",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read on control",
        instructions: [
          "Read the assigned chapters on user control and feedback.",
          "List the four control situations for your feature.",
        ],
      },
      {
        minutes: 30,
        title: "Design correction and override",
        instructions: [
          "Design how a person corrects a nearly-right output.",
          "Design the path for someone who already knows the answer.",
          "State whether correction affects future output.",
        ],
      },
      {
        minutes: 25,
        title: "Design disabling",
        instructions: [
          "Place the control where someone would look for it.",
          "Walk the main task with the feature disabled and fix what breaks.",
        ],
      },
      {
        minutes: 25,
        title: "Design undo",
        instructions: [
          "Identify anything that persists after the feature acts.",
          "Provide a reversal with a stated window.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Write which control you expect to be used most and why.",
          "Save the control surface with the feature.",
        ],
      },
    ],
    check: [
      {
        question: "Why say whether correction changes future behaviour?",
        answer:
          "Because a person correcting the same thing repeatedly with no effect concludes they are being ignored. Either behaviour is acceptable; concealing which one applies is not.",
      },
      {
        question: "Why must override precede the action?",
        answer:
          "Because someone who already knows the answer should not be routed through a rejection flow. That path is what makes assistance bearable for experienced users.",
      },
      {
        question: "What does disabling require?",
        answer:
          "That it is findable without support pages, and that the product still works without the feature. Otherwise the feature was never optional.",
      },
    ],
    rubric: [
      "All four controls are specified",
      "Correction's effect on future output is stated",
      "The product works with the feature disabled",
      "Override is available before the action",
    ],
    criteria: [
      {
        criterion: "All four controls are specified",
        evidence:
          "Correct, override, disable and undo each designed with wording.",
        levels: [
          "One or two controls.",
          "Three, usually missing undo.",
          "All four specified.",
          "As adequate, and each names the situation it serves.",
        ],
        remediation:
          "Write the four situations and design the control each one needs.",
        recheck: "The control surface.",
      },
      {
        criterion: "Correction's effect on future output is stated",
        evidence:
          "A sentence in the interface saying whether correcting changes what happens next.",
        levels: [
          "Not stated.",
          "Stated in documentation only.",
          "Stated in the interface where correction happens.",
          "As adequate, and the statement is honest about a system that does not learn.",
        ],
        remediation:
          "Decide whether correction changes anything, then write the sentence people will see.",
        recheck: "The correction statement.",
      },
      {
        criterion: "The product works with the feature disabled",
        evidence:
          "A walkthrough of the main task with the feature off, and fixes for what broke.",
        levels: [
          "Not tested.",
          "Disabling exists but the task was not walked.",
          "Walked, with anything broken repaired.",
          "As adequate, and the disabled state is not degraded as a penalty.",
        ],
        remediation:
          "Turn the feature off and complete the main task; fix whatever no longer works.",
        recheck: "The disabled walkthrough.",
      },
      {
        criterion: "Override is available before the action",
        evidence:
          "A path for someone who already knows what they want, without engaging the feature.",
        levels: [
          "Only correction after the fact.",
          "Override exists but is harder than accepting.",
          "A direct path that does not require engaging with suggestions.",
          "As adequate, and the path is at least as prominent as the suggestion.",
        ],
        remediation:
          "Design the route an experienced person takes and check it is not slower than accepting a suggestion.",
        recheck: "The override path.",
      },
    ],
    repairs: [
      "If undo is missing, find what persists and design a reversal.",
      "If correction's effect is unstated, decide and say so in the interface.",
      "If disabling breaks the task, repair the product without the feature.",
      "If override comes only after output, add the direct path.",
    ],
    portfolio:
      "A specified control surface is the clearest evidence that an AI feature was designed for people rather than around a model.",
    resource: pair,
    resources: [
      {
        ...pair,
        section: "The chapters on user control and on feedback and correction.",
        purpose:
          "Supplies the control patterns this lesson specifies.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Guidance rather than a capability claim; the disabling requirement here is stated more strongly than the source does.",
        fallbackId: "R19",
      },
      {
        ...errors,
        section: "Undo, recovery and the slip-versus-mistake distinction.",
        purpose:
          "Frames control as recovery design rather than as settings.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Not written about AI; the application is this lesson's own.",
        fallbackId: "R02",
      },
    ],
  }),
  withLegacyText({
    id: "m16-l05-v1",
    module: "m16",
    week: 16,
    day: 5,
    level: 5,
    areas: [15],
    guided: true,
    title: "Designing the failures",
    objective:
      "Design what your AI feature does when it is confidently wrong, when it cannot answer, and when it produces something harmful, with the wording for each.",
    bringForward: "Your feature and its control surface.",
    prerequisite: "Your AI feature and controls.",
    why: "The failure cases are where AI features damage trust, and they are more common and more varied than the failures of an ordinary feature.",
    teach: [
      "Three failures: confidently wrong, cannot answer, and harmful output.",
      "Confidently wrong is the dangerous one; the person has no signal.",
      "Not answering is a legitimate outcome and needs its own design.",
      "Harmful output needs a route to a person, not only a dismissal.",
      "Say what happened without pretending the system understood.",
    ],
    explanation: [
      "Confidently wrong output has no visual difference from correct output, which is what makes it the central problem. The design responses are indirect: show the basis so the person can check, keep the output easy to verify against something they know, and never let it drive an irreversible action alone.",
      "Not answering is underdesigned almost everywhere. A feature that produces nothing useful should say so plainly and offer the ordinary route — the search, the manual form, the human — rather than producing a generic output to avoid an empty state. A confident non-answer is worse than an honest one.",
      "Harmful output covers a range: offensive, dangerous, or simply wrong in a way that costs someone money or time. The design requirement is a route to a person, a way to report, and a way to undo. The assigned framework's governance function is about exactly this — knowing who is accountable when something goes wrong — and a feature with no reporting route has answered that question by default.",
      "The wording of a failure should not overclaim understanding. “I did not understand” implies comprehension; “I could not find a match for that” describes what happened. This matters because the wording teaches people what the system is, and the anthropomorphic version produces expectations the system cannot meet.",
    ],
    misconception:
      "“We will add a feedback button.” A feedback button is not a failure design. It collects complaints while leaving the person with the same problem, no route forward and no correction.",
    example:
      "Three failures designed. Confidently wrong: suggestions always show their basis and are never the only route, so a wrong suggestion costs one glance; the review screen still shows the full details before any commitment. Cannot answer: “No suggestions yet — you can search classes by day or place”, with the search immediately available rather than a placeholder list. Harmful: a report control on every suggestion, a route to the provider's phone number, and a statement that reports are read by a person — with the owner named internally, since the framework's governance function asks who is accountable.",
    freeToolPath:
      "Paper and written wording, with scripted failure outputs. Writing the wrong outputs by hand is better than generating them, because you choose the failure you need to design for.",
    outputs: [
      "Designs for confidently wrong, cannot answer and harmful output",
      "Wording for each that does not overclaim understanding",
      "A reporting route with a named accountable owner",
      "A check that no failure leaves the person without a route",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read on failure",
        instructions: [
          "Read the assigned chapters on errors and graceful failure.",
          "Read the framework's governance function for accountability.",
        ],
      },
      {
        minutes: 30,
        title: "Design confidently wrong",
        instructions: [
          "Write what protects a person when output is wrong but looks right.",
          "Check no irreversible action can follow from it alone.",
        ],
      },
      {
        minutes: 25,
        title: "Design not answering",
        instructions: [
          "Write the wording for producing nothing useful.",
          "Offer the ordinary route prominently.",
        ],
      },
      {
        minutes: 25,
        title: "Design harmful output",
        instructions: [
          "Add a reporting route and a route to a person.",
          "Name who is accountable for reading reports.",
        ],
      },
      {
        minutes: 15,
        title: "Check the wording",
        instructions: [
          "Remove any phrasing implying the system understood or intended.",
          "Save the three failure designs.",
        ],
      },
    ],
    check: [
      {
        question: "Why is confidently wrong output the hardest case?",
        answer:
          "Because it looks exactly like correct output. The responses are indirect: show the basis, keep it verifiable, and never let it drive an irreversible action alone.",
      },
      {
        question: "What should a feature do when it has nothing useful?",
        answer:
          "Say so and offer the ordinary route. Generating something generic to avoid an empty state is worse, because it wastes the person's attention and teaches them not to trust it.",
      },
      {
        question: "Why avoid saying the system did not understand?",
        answer:
          "Because it implies comprehension and sets expectations the system cannot meet. Describing what happened is both more honest and more useful.",
      },
    ],
    rubric: [
      "All three failure kinds are designed",
      "Wording describes what happened without implying understanding",
      "A reporting route exists with a named owner",
      "No failure leaves the person without a route forward",
    ],
    criteria: [
      {
        criterion: "All three failure kinds are designed",
        evidence:
          "Designs for confidently wrong, no useful output and harmful output.",
        levels: [
          "One failure considered.",
          "Two designed.",
          "All three with wording.",
          "As adequate, and the confidently-wrong response is structural rather than a message.",
        ],
        remediation:
          "Write what a person sees and can do in each of the three cases.",
        recheck: "The three designs.",
      },
      {
        criterion:
          "Wording describes what happened without implying understanding",
        evidence:
          "Failure messages free of comprehension language.",
        levels: [
          "Anthropomorphic wording throughout.",
          "Mixed wording.",
          "Descriptive wording in all three cases.",
          "As adequate, and the wording says what the person can do next in the same sentence.",
        ],
        remediation:
          "Rewrite any message using understand, think or know as a description of what the system did.",
        recheck: "The wording.",
      },
      {
        criterion: "A reporting route exists with a named owner",
        evidence:
          "A report control, a route to a person, and an internal owner.",
        levels: [
          "No reporting.",
          "A feedback control with no destination.",
          "Reporting, a human route and a named owner.",
          "As adequate, and the person is told what happens to a report.",
        ],
        remediation:
          "Add the report control and name who reads it; a control with no reader is decoration.",
        recheck: "The reporting design.",
      },
      {
        criterion:
          "No failure leaves the person without a route forward",
        evidence:
          "Each failure design ends with something the person can do.",
        levels: [
          "Failures end in a message.",
          "Some offer a route.",
          "Every failure offers a route forward.",
          "As adequate, and the route does not require the feature to work.",
        ],
        remediation:
          "For each failure write the next action, and check it works without the AI feature.",
        recheck: "The routes.",
      },
    ],
    repairs: [
      "If a failure kind is missing, design what the person sees and can do.",
      "If wording implies understanding, rewrite it as description.",
      "If reporting has no owner, name one or remove the control.",
      "If a failure ends in a message, add a route forward.",
    ],
    portfolio:
      "Failure designs for an AI feature are rarely shown and immediately distinguish careful work from a demonstration of a happy path.",
    resource: pair,
    resources: [
      {
        ...pair,
        section: "The chapters on errors, graceful failure and feedback.",
        purpose: "Supplies the failure patterns this lesson designs.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Guidance rather than capability claims; scripted failures are sufficient for the exercise.",
        fallbackId: "R19",
      },
      {
        ...nist,
        section: "The govern function and its accountability framing.",
        purpose:
          "Names accountability for harmful output as a design and organisational question.",
        minutes: "30–45 selected",
        limits:
          "Free access, no account; AI RMF 1.0 released 26 January 2023. Verified 2026-09-06. Voluntary organisational guidance, not law, not certification, and not interface design.",
        fallbackId: "R21",
      },
    ],
  }),
  withLegacyText({
    id: "m16-l06-v1",
    module: "m16",
    week: 16,
    day: 6,
    level: 5,
    areas: [15],
    guided: true,
    title: "Conversational interfaces, and their alternatives",
    objective:
      "Design one task two ways — as a conversation and as a form or list — and write which is better for whom, with the reasons.",
    bringForward: "One task from your product suited to either treatment.",
    prerequisite: "One task and its current design.",
    why: "A chat box is the default answer to every AI feature and is frequently the wrong one, and being able to argue that in specifics is a useful skill.",
    teach: [
      "A conversation hides what is possible; a form shows it.",
      "Free text is expressive and expensive: people must compose rather than choose.",
      "Conversations suit open, unfamiliar or long-tail requests.",
      "Structured interfaces suit repeated, comparable and precise ones.",
      "Mixed is normal: structure for the common path, text for the exception.",
    ],
    explanation: [
      "The central trade is discoverability against expressiveness. A form shows what the system can do and constrains you to it; a conversation lets you ask anything and shows you nothing, so people ask for what they imagine and calibrate through failure. For a repeated task with a small set of options, that is a pure loss.",
      "Composing text costs more than choosing. On a phone, typing a request is slower than tapping three filters, and for someone with limited literacy in the interface language it may be much harder. Conversation is not automatically more accessible; it moves effort from recognition to production, which is the more demanding direction for many people.",
      "Conversation earns its place where the space of requests is genuinely open, where people cannot know the vocabulary in advance, or where the long tail matters more than the common case. It also suits situations where a person needs to explain something rather than select it.",
      "The mixed answer is usually right: structure for the common path, with text available for what the structure cannot express. Designing both versions and comparing them on the same task is what makes the argument concrete rather than fashionable.",
    ],
    misconception:
      "“Conversation is more natural.” It is more natural in speech between people who share context. With a system that has none, it produces guessing, retries and a person learning your vocabulary by failing at it.",
    example:
      "Finding a class was designed twice. As a conversation: a text box, an example prompt, and a model interpreting requests — which handled “something for my daughter on Saturday morning near the station” well and required the person to know that was possible. As a list with filters: day, time, place and age, all visible, three taps, and no composition. Comparison: the structured version was better for the common case and for anyone typing on a phone; the conversation was better for the unusual request, which was about one in ten. The design kept the filters as the primary route with a text field for anything they could not express.",
    freeToolPath:
      "Paper for both versions, with scripted responses for the conversational one. Writing the model's replies by hand lets you design the failures deliberately.",
    outputs: [
      "The same task designed as a conversation and as a structure",
      "A comparison naming who each serves better",
      "A decision with the reasoning recorded",
      "A note of what the rejected version did better",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read and choose the task",
        instructions: [
          "Read the assigned chapters on conversational patterns.",
          "Choose one task with both a common case and a long tail.",
        ],
      },
      {
        minutes: 30,
        title: "Design the conversation",
        instructions: [
          "Write the opening, an example prompt and three scripted exchanges.",
          "Include one exchange where the request is misunderstood.",
        ],
      },
      {
        minutes: 25,
        title: "Design the structure",
        instructions: [
          "Design the same task as a form or filtered list.",
          "Count the actions required for the common case.",
        ],
      },
      {
        minutes: 25,
        title: "Compare on people",
        instructions: [
          "Compare both for a first-time user, a repeat user and someone typing on a phone.",
          "Consider someone less comfortable in the interface language.",
        ],
      },
      {
        minutes: 15,
        title: "Decide and record",
        instructions: [
          "Choose the primary route and say what the other is kept for.",
          "Record what the rejected version did better.",
        ],
      },
    ],
    check: [
      {
        question: "What does a conversation hide?",
        answer:
          "What the system can do. A form shows its own capabilities; a text box leaves people to guess and to learn the vocabulary by failing.",
      },
      {
        question: "Why is composing more expensive than choosing?",
        answer:
          "Because production is harder than recognition, especially on a phone and especially for someone less fluent in the interface language.",
      },
      {
        question: "When does conversation earn its place?",
        answer:
          "When the request space is genuinely open, the vocabulary cannot be known in advance, or the person needs to explain rather than select.",
      },
    ],
    rubric: [
      "Both versions are designed for the same task",
      "The comparison names specific people, not users in general",
      "A decision is recorded with reasoning",
      "What the rejected version did better is stated",
    ],
    criteria: [
      {
        criterion: "Both versions are designed for the same task",
        evidence:
          "A conversational design with scripted exchanges and a structured design for the same task.",
        levels: [
          "One version only.",
          "Both sketched but the conversation has no failure exchange.",
          "Both designed, including a misunderstanding exchange.",
          "As adequate, and the structured version's action count is recorded.",
        ],
        remediation:
          "Design whichever version is missing, and script at least one failed exchange.",
        recheck: "The two designs.",
      },
      {
        criterion:
          "The comparison names specific people, not users in general",
        evidence:
          "A comparison across first-time, repeat, phone and language-fluency cases.",
        levels: [
          "A general preference.",
          "Two cases considered.",
          "Four specific cases compared.",
          "As adequate, and one case reverses the overall preference.",
        ],
        remediation:
          "Walk each version as each of the four people and record where each struggles.",
        recheck: "The comparison.",
      },
      {
        criterion: "A decision is recorded with reasoning",
        evidence:
          "A primary route chosen with the reason and the role of the alternative.",
        levels: [
          "No decision.",
          "A decision without reasoning.",
          "Decision, reasoning and the alternative's role.",
          "As adequate, and the decision is tied to how common each case is.",
        ],
        remediation:
          "Write which route is primary, why, and what the other is kept for.",
        recheck: "The decision.",
      },
      {
        criterion: "What the rejected version did better is stated",
        evidence:
          "A statement of the losses in the chosen approach.",
        levels: [
          "Not stated.",
          "A general acknowledgement.",
          "Specific advantages of the rejected version named.",
          "As adequate, and one of them is mitigated in the chosen design.",
        ],
        remediation:
          "Write the two things the version you rejected handled better, and whether you can recover either.",
        recheck: "The loss statement.",
      },
    ],
    repairs: [
      "If only one version exists, design the other.",
      "If the comparison is general, walk it as four specific people.",
      "If no decision is recorded, choose and justify a primary route.",
      "If losses are unstated, name what the rejected version did better.",
    ],
    portfolio:
      "Two designs of one task with a reasoned choice is a strong portfolio piece precisely because it argues against the fashionable answer with evidence.",
    resource: pair,
    resources: [
      {
        ...pair,
        section: "The chapters on conversational patterns and user needs.",
        purpose:
          "Supplies patterns for the conversational version and the criteria for judging it.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Guidance rather than capability claims; scripted exchanges are sufficient and let you design the failures.",
        fallbackId: "R19",
      },
      {
        ...heuristics,
        section:
          "Heuristic 6, recognition rather than recall, and heuristic 7, flexibility and efficiency of use.",
        purpose:
          "Grounds the recognition-versus-production argument in a reviewable principle.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Not written about conversational interfaces; the application is this lesson's.",
        fallbackId: "R11",
      },
    ],
  }),
  withLegacyText({
    id: "m16-l07-v1",
    module: "m16",
    week: 16,
    day: 7,
    level: 5,
    areas: [15],
    guided: true,
    title: "Saying what the system did",
    objective:
      "Write the explanation your AI feature gives, at the level a person needs to act, and test whether two people can predict its next output from it.",
    bringForward: "Your feature, its basis display and failure designs.",
    prerequisite: "Your AI feature design.",
    why: "An explanation is useful when it lets someone predict or correct the system. Anything else is reassurance.",
    teach: [
      "Explain at the level of the decision the person has to make.",
      "A useful explanation lets someone predict the next output.",
      "Technical accuracy is not the goal; actionable accuracy is.",
      "Say what the system used, not how the model works.",
      "Test the explanation by asking someone to predict.",
    ],
    explanation: [
      "Explanations fail in two directions. Too technical — describing embeddings or weights — tells a person nothing they can act on. Too vague — “personalised for you” — tells them nothing at all. The useful level is the input the system used and the rule it applied, because that is what a person can check against their own knowledge and correct.",
      "Prediction is the practical test. If someone reads your explanation and can say what the system will suggest next, the explanation is doing work; if they cannot, it is decoration however accurate it is. This test is cheap: two people, one explanation, two predictions.",
      "Actionable accuracy sometimes means simplifying. Saying “suggestions come from the classes you booked before” may omit half the ranking, and if the omitted half does not change what a person would do, the simplification is honest. What is not acceptable is an explanation that would lead someone to a wrong prediction.",
      "The guidebook's explainability material is about calibrating trust rather than satisfying curiosity, and that framing keeps this practical: an explanation exists so the person can decide how much to rely on the output and how to change it, not so the product appears transparent.",
    ],
    misconception:
      "“We should explain how the model works.” Almost nobody wants that, and it does not help them act. What helps is what it used and what would change the result.",
    example:
      "Three versions were written. Technical: a description of the ranking signals — rejected, since nobody could act on it. Vague: “suggested for you” — rejected, since it supports no prediction. Chosen: “Suggested from the classes you booked before and the times you usually choose. Dismissing a suggestion stops similar ones appearing.” Two people read it and both correctly predicted that a Saturday-morning booker would see Saturday-morning suggestions, and both knew how to change it — which is exactly the pair of outcomes the explanation exists for.",
    freeToolPath:
      "Written wording and two short conversations. No implementation is needed to test whether an explanation supports prediction.",
    outputs: [
      "The explanation wording, at the level of the person's decision",
      "Two rejected versions with reasons",
      "A prediction test with two people",
      "A note of any simplification and why it is honest",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read on explainability",
        instructions: [
          "Read the assigned chapters on explainability and trust.",
          "Write what an explanation is for in your own words.",
        ],
      },
      {
        minutes: 30,
        title: "Write three versions",
        instructions: [
          "Write a technical, a vague and a decision-level explanation.",
          "Keep the decision-level one to two sentences.",
        ],
      },
      {
        minutes: 25,
        title: "Test for prediction",
        instructions: [
          "Show the chosen explanation to two people.",
          "Ask each what the system will suggest next and how to change it.",
        ],
      },
      {
        minutes: 25,
        title: "Check the simplification",
        instructions: [
          "List anything your explanation omits.",
          "Check no omission would lead to a wrong prediction.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Record the rejected versions and why.",
          "Save the explanation with the prediction results.",
        ],
      },
    ],
    check: [
      {
        question: "What makes an explanation useful?",
        answer:
          "That someone can predict the next output and knows how to change it. Accuracy without that is decoration.",
      },
      {
        question: "When is simplifying an explanation acceptable?",
        answer:
          "When the omitted detail would not change what a person does. It becomes dishonest when the omission would lead them to a wrong prediction.",
      },
      {
        question: "Why not explain the model?",
        answer:
          "Because it does not support any decision the person has to make. What they need is what it used and what would change the result.",
      },
    ],
    rubric: [
      "The explanation is at the level of the person's decision",
      "Two alternative versions were written and rejected",
      "A prediction test was run with two people",
      "Omissions are listed and checked for misleading effect",
    ],
    criteria: [
      {
        criterion: "The explanation is at the level of the person's decision",
        evidence: "Two sentences naming what was used and what changes it.",
        levels: [
          "Technical or vague.",
          "Decision-level but incomplete about changing it.",
          "Both elements present and brief.",
          "As adequate, and it appears where the output does rather than in help.",
        ],
        remediation:
          "Rewrite it as what the system used plus what the person can do to change it.",
        recheck: "The explanation.",
      },
      {
        criterion: "Two alternative versions were written and rejected",
        evidence: "A technical and a vague version with reasons for rejection.",
        levels: [
          "One version only.",
          "Alternatives mentioned without writing them.",
          "Both written and rejected with reasons.",
          "As adequate, and the rejection reasons refer to what a person could do with each.",
        ],
        remediation:
          "Write the two rejected versions out; the contrast is what shows the choice was made.",
        recheck: "The three versions.",
      },
      {
        criterion: "A prediction test was run with two people",
        evidence:
          "Two people's predictions recorded, with whether they were correct.",
        levels: [
          "Not tested.",
          "Tested with one person or without recording predictions.",
          "Two predictions recorded and assessed.",
          "As adequate, and a wrong prediction led to a rewrite.",
        ],
        remediation:
          "Show the explanation to two people and ask what the system will do next.",
        recheck: "The prediction results.",
      },
      {
        criterion:
          "Omissions are listed and checked for misleading effect",
        evidence:
          "A list of what the explanation leaves out and a check against wrong predictions.",
        levels: [
          "Omissions unexamined.",
          "Listed without checking their effect.",
          "Listed and checked.",
          "As adequate, and one omission was restored because it would have misled.",
        ],
        remediation:
          "Write what the explanation does not say, and ask whether it would produce a wrong expectation.",
        recheck: "The omission list.",
      },
    ],
    repairs: [
      "If the explanation is technical, rewrite it at the level of the decision.",
      "If no alternatives exist, write and reject them explicitly.",
      "If it was not tested, ask two people to predict the next output.",
      "If an omission misleads, restore it.",
    ],
    portfolio:
      "An explanation tested by prediction is a small, concrete artefact that shows you treat transparency as a usability property rather than a statement.",
    resource: pair,
    resources: [
      {
        ...pair,
        section: "The explainability and trust chapters.",
        purpose: "Frames explanation as trust calibration rather than disclosure.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Design guidance rather than a capability claim; the prediction test is this lesson's own.",
        fallbackId: "R19",
      },
      {
        ...heuristics,
        section: "Heuristic 2, match between the system and the real world.",
        purpose:
          "Keeps the explanation in the person's vocabulary rather than the system's.",
        minutes: "10–15 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Not written about AI explanation; the application is this lesson's.",
        fallbackId: "R11",
      },
    ],
  }),
  withLegacyText({
    id: "m16-l08-v1",
    module: "m16",
    week: 16,
    day: 8,
    level: 5,
    areas: [15],
    guided: true,
    title: "What the feature knows about people",
    objective:
      "Specify what your AI feature collects, what it retains, what a person can see and delete, and what you will tell them before it starts.",
    bringForward: "Your m15 instrumentation plan and this feature's design.",
    prerequisite: "Your instrumentation plan and AI feature.",
    why: "An AI feature usually needs data about a person to be useful, which makes the collection question part of the design rather than a legal afterthought.",
    teach: [
      "State what is collected and why, before the feature starts working.",
      "Retention is a design decision with a visible consequence.",
      "People should be able to see and delete what the feature holds about them.",
      "A feature that only works with extensive history should say so.",
      "Legal requirements differ by country and are not settled by a design rule.",
    ],
    explanation: [
      "Personalised output depends on history, so the design question arrives immediately: what history, kept how long, visible to whom. Answering it in the interface rather than in a policy is what lets a person decide whether the trade is acceptable to them, and it is the difference between a feature that feels helpful and one that feels observed.",
      "Retention has visible consequences. A feature that forgets after thirty days behaves differently from one that remembers for ever, and saying which applies helps people predict it — the same prediction property as the explanation. It also limits your own exposure: data you do not keep cannot be lost.",
      "Seeing and deleting are the two controls people actually want. Being able to look at what the feature holds, and to remove it, converts an opaque system into one with a floor. Design both, and state what deletion does to the feature's behaviour, because a person deleting their history should not be surprised when suggestions reset.",
      "The legal position differs by jurisdiction and this course has not verified a primary source for India, as m05 recorded. Design decently — minimum collection, clear statement, visible controls — and check the current requirements from a primary source before shipping anything real.",
    ],
    misconception:
      "“The privacy policy covers it.” Nobody reads it, and it is not where the decision happens. What the person meets in the interface, at the moment the feature starts, is the disclosure that actually informs them.",
    example:
      "The specification: the feature uses classes booked in the last twelve months and dismissed suggestions, nothing else; the statement appears the first time suggestions are shown; a person can see the list of what it is using in the account section and remove any item or all of it; removing everything returns the feature to its unpersonalised state, which is stated. Retention is twelve months and is stated. Two things were deliberately not collected: browsing that did not lead to a booking, and time of day, because the improvement did not justify the record.",
    freeToolPath:
      "Written specification and interface wording. No implementation is required.",
    outputs: [
      "A statement of what is collected and why, shown in the interface",
      "A retention period with its behavioural consequence",
      "A way to see and delete what the feature holds",
      "Two things deliberately not collected",
    ],
    steps: [
      {
        minutes: 25,
        title: "List what the feature needs",
        instructions: [
          "List the data the feature actually needs to be useful.",
          "Remove anything that improves it only marginally.",
        ],
      },
      {
        minutes: 30,
        title: "Write the disclosure",
        instructions: [
          "Write the sentence shown when the feature first appears.",
          "State what is used, for what, and for how long.",
        ],
      },
      {
        minutes: 25,
        title: "Design see and delete",
        instructions: [
          "Design the view of what is held and the removal control.",
          "State what deletion does to the feature's behaviour.",
        ],
      },
      {
        minutes: 25,
        title: "Record the refusals",
        instructions: [
          "Name two things you chose not to collect and why.",
          "Note what the feature loses by not having them.",
        ],
      },
      {
        minutes: 15,
        title: "Note the jurisdiction",
        instructions: [
          "Record that legal requirements differ and have not been verified here.",
          "Save the specification with the wording.",
        ],
      },
    ],
    check: [
      {
        question: "Where should the disclosure appear?",
        answer:
          "In the interface, when the feature first appears. A policy page is not where the decision happens and is not read.",
      },
      {
        question: "Why state the retention period?",
        answer:
          "Because it changes behaviour people can predict, and because data you do not keep cannot be lost or misused.",
      },
      {
        question: "What should deletion do?",
        answer:
          "Remove the data and return the feature to its unpersonalised state, with that consequence stated so nobody is surprised.",
      },
    ],
    rubric: [
      "Collection is minimal and stated in the interface",
      "Retention is specified with its consequence",
      "Seeing and deleting are both designed",
      "Two deliberate non-collections are recorded",
    ],
    criteria: [
      {
        criterion: "Collection is minimal and stated in the interface",
        evidence:
          "A short list of data used with in-interface wording.",
        levels: [
          "Collection unspecified or hidden in policy.",
          "Specified but broader than the feature needs.",
          "Minimal and stated where the person meets the feature.",
          "As adequate, and something was removed for improving the feature only marginally.",
        ],
        remediation:
          "Cut the list to what the feature needs and write the sentence people will see.",
        recheck: "The collection specification.",
      },
      {
        criterion: "Retention is specified with its consequence",
        evidence:
          "A period and a statement of what happens at the end of it.",
        levels: [
          "No period.",
          "A period without consequence.",
          "Both stated.",
          "As adequate, and the period is short enough to be defensible.",
        ],
        remediation:
          "Choose a period and write what changes for the person when data ages out.",
        recheck: "The retention statement.",
      },
      {
        criterion: "Seeing and deleting are both designed",
        evidence:
          "A view of held data and a removal control, with the effect on behaviour stated.",
        levels: [
          "Neither.",
          "One of the two.",
          "Both with the behavioural effect stated.",
          "As adequate, and removal is possible per item as well as in full.",
        ],
        remediation:
          "Design the list of what is held and the control to remove it.",
        recheck: "The controls.",
      },
      {
        criterion: "Two deliberate non-collections are recorded",
        evidence:
          "Two items not collected, with what the feature loses.",
        levels: [
          "None recorded.",
          "One recorded.",
          "Two with the losses stated.",
          "As adequate, and one is something a stakeholder would plausibly request.",
        ],
        remediation:
          "Write what you could have collected and chose not to, and what that costs the feature.",
        recheck: "The refusal record.",
      },
    ],
    repairs: [
      "If collection is in a policy, write the in-interface statement.",
      "If retention is unstated, choose a period and its consequence.",
      "If deletion is missing, design it and state its effect.",
      "If nothing was refused, name what you could collect and will not.",
    ],
    portfolio:
      "A data specification with visible controls and recorded refusals shows you can design an AI feature without treating people's history as free material.",
    resource: privacy,
    resources: [
      {
        ...privacy,
        section:
          "Treating held material as personal data, retention and deletion on request.",
        purpose:
          "Supplies the retention and deletion discipline applied to a product rather than to research.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 5 November 2018. UK framing and written for research data; Indian requirements have not been verified by this course.",
        fallbackId: "R53",
      },
      {
        ...nist,
        section: "The map and govern functions, read for accountability over data.",
        purpose:
          "Places the collection decision inside a stated risk framework.",
        minutes: "30–45 selected",
        limits:
          "Free access, no account; AI RMF 1.0 released 26 January 2023. Verified 2026-09-06. Voluntary guidance, not law and not certification.",
        fallbackId: "R21",
      },
    ],
  }),
  withLegacyText({
    id: "m16-l09-v1",
    module: "m16",
    week: 16,
    day: 9,
    level: 5,
    areas: [15],
    guided: true,
    title: "Deciding what good would mean",
    objective:
      "Define what good performance means for your AI feature in terms a person would recognise, and design how you would find out whether it is achieving it.",
    bringForward: "Your feature and your m15 measurement discipline.",
    prerequisite: "Your AI feature and measurement plan.",
    why: "Model metrics measure the model. Whether the feature helps anybody is a different question and needs its own definition.",
    teach: [
      "Define good as an outcome for a person, not a model score.",
      "Decide what a false suggestion costs and what a missed one costs.",
      "The two errors are rarely equally bad; say which you prefer.",
      "Evaluate with people, not only with data.",
      "Say what you cannot evaluate at your scale.",
    ],
    explanation: [
      "A model can be accurate and useless: suggesting classes a person has already booked scores well on similarity and helps nobody. Defining good in terms a person would recognise — they found something they would not have found, and did not have to sift through irrelevant suggestions — keeps the evaluation attached to the reason the feature exists.",
      "The two error types have different costs and the difference is a design decision. A wrong suggestion costs attention and a little trust; a missing suggestion costs an opportunity nobody notices. Deciding which you would rather have — usually fewer, better suggestions in this kind of product — tells you how to tune and what to test.",
      "Evaluation with people is available to you and model metrics are not. Five people looking at ten suggestions each and saying which they would consider produces a usable judgement, and it captures what an accuracy figure cannot: whether the suggestions were obvious, irrelevant or genuinely helpful.",
      "The scale limits apply as they did in m15. You cannot establish a rate, you cannot compare against a baseline you do not have, and you should say so. What you can produce is a small, honest evaluation with a stated method — which is more than most feature launches manage.",
    ],
    misconception:
      "“Accuracy tells us whether it works.” Accuracy tells you how often the model matched a label. Whether the feature helped a person is a separate question that no model metric answers.",
    example:
      "Good was defined as: at least one suggestion in the top three that the person would consider and had not already seen, and no more than one clearly irrelevant suggestion in the top five. The error preference was stated: fewer, better suggestions, because an irrelevant suggestion costs trust and a missing one is invisible. The evaluation: five people, ten suggestions each, marking would-consider, already-known and irrelevant. Results reported as counts. What could not be evaluated: any comparison with a baseline, any effect on bookings, and anything about people who never open the feature.",
    freeToolPath:
      "Scripted or hand-written suggestion sets and five short conversations. No model is required to evaluate whether a set of suggestions is useful.",
    outputs: [
      "A definition of good in a person's terms",
      "A stated preference between false and missed suggestions",
      "An evaluation method using people, with counts",
      "A list of what cannot be evaluated at your scale",
    ],
    steps: [
      {
        minutes: 25,
        title: "Define good",
        instructions: [
          "Write what a person would say if the feature was working well.",
          "Turn it into something you could observe.",
        ],
      },
      {
        minutes: 25,
        title: "Weigh the two errors",
        instructions: [
          "Write what a wrong suggestion costs and what a missing one costs.",
          "State which you prefer and why.",
        ],
      },
      {
        minutes: 30,
        title: "Design the evaluation",
        instructions: [
          "Design a session where people judge a set of outputs.",
          "Decide the categories they will mark and how you will report them.",
        ],
      },
      {
        minutes: 25,
        title: "Run a small version",
        instructions: [
          "Run it with two or three people using scripted outputs.",
          "Report counts, not rates.",
        ],
      },
      {
        minutes: 15,
        title: "State the limits",
        instructions: [
          "List what this cannot establish.",
          "Save the definition, the method and the results.",
        ],
      },
    ],
    check: [
      {
        question: "Why is a model metric insufficient?",
        answer:
          "Because it measures agreement with a label, not whether a person was helped. A feature can be accurate and useless at the same time.",
      },
      {
        question: "Why state a preference between the two errors?",
        answer:
          "Because they cost different things and the choice shapes the design. A wrong suggestion costs trust; a missing one is invisible, which is why teams under-weight it.",
      },
      {
        question: "What can a five-person evaluation establish?",
        answer:
          "Whether suggestions are obvious, irrelevant or useful to those five people, as counts. Nothing about rates, baselines or people who never open it.",
      },
    ],
    rubric: [
      "Good is defined as an observable outcome for a person",
      "The two error costs are compared and a preference stated",
      "The evaluation uses people and reports counts",
      "Unevaluable questions are listed",
    ],
    criteria: [
      {
        criterion: "Good is defined as an observable outcome for a person",
        evidence:
          "A definition someone could check by watching or asking.",
        levels: [
          "Defined as a model metric.",
          "Defined in outcome language but unobservable.",
          "Observable and in the person's terms.",
          "As adequate, and it distinguishes useful from merely correct.",
        ],
        remediation:
          "Write what the person would say if it were working, then make it checkable.",
        recheck: "The definition.",
      },
      {
        criterion:
          "The two error costs are compared and a preference stated",
        evidence:
          "Costs written for false and missed outputs with a stated preference.",
        levels: [
          "Errors treated as equivalent.",
          "Costs described without a preference.",
          "Both costed with a preference and reason.",
          "As adequate, and the preference is reflected in a design decision.",
        ],
        remediation:
          "Write what each error costs the person and choose which you would rather have.",
        recheck: "The error comparison.",
      },
      {
        criterion: "The evaluation uses people and reports counts",
        evidence:
          "A session design plus results as counts of people and items.",
        levels: [
          "No evaluation with people.",
          "Sessions run but reported as rates.",
          "Run and reported as counts.",
          "As adequate, and the categories people marked are defined in advance.",
        ],
        remediation:
          "Run the judgement session with two or three people and report the counts.",
        recheck: "The evaluation results.",
      },
      {
        criterion: "Unevaluable questions are listed",
        evidence:
          "A list of what your scale cannot establish.",
        levels: [
          "Not stated.",
          "A general caveat.",
          "Specific unevaluable questions listed.",
          "As adequate, and it names what would be needed for each.",
        ],
        remediation:
          "Write the questions someone will ask that five people cannot answer.",
        recheck: "The limits list.",
      },
    ],
    repairs: [
      "If good is a model metric, redefine it as an outcome.",
      "If errors are treated equally, cost them and choose.",
      "If results are rates, convert them to counts.",
      "If limits are unstated, list what your scale cannot establish.",
    ],
    portfolio:
      "An evaluation of an AI feature by people, reported as counts with limits, is unusual and more credible than any accuracy figure a portfolio could claim.",
    resource: nist,
    resources: [
      {
        ...nist,
        section: "The measure function and the framing of trustworthiness.",
        purpose:
          "Places evaluation inside a structure that includes more than model performance.",
        minutes: "30–45 selected",
        limits:
          "Free access, no account; AI RMF 1.0 released 26 January 2023. Verified 2026-09-06. Organisational guidance rather than an evaluation method; the session design here is the course's own.",
        fallbackId: "R21",
      },
      {
        ...intervals,
        section: "Why small samples cannot support rates.",
        purpose:
          "Keeps the evaluation reported as counts rather than percentages.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. No formulas; the discipline is what transfers.",
        fallbackId: "R45",
      },
    ],
  }),
  withLegacyText({
    id: "m16-l10-v1",
    module: "m16",
    week: 16,
    day: 10,
    level: 5,
    areas: [15],
    guided: true,
    title: "Prototyping with scripted responses",
    objective:
      "Build a prototype of your AI feature using hand-written responses, including deliberate failures, and test it with three people.",
    bringForward: "Your feature, controls, failures and explanation.",
    prerequisite: "Your AI feature design and its wording.",
    why: "Scripting the responses lets you test the experience of being wrong, which a live model will not do on demand.",
    teach: [
      "Write the outputs by hand, including the wrong ones.",
      "Design the failure you most need to test, then script it.",
      "Tell participants the responses are scripted; do not fake a system.",
      "Watch what people do when the output is wrong.",
      "Record whether they noticed it was wrong at all.",
    ],
    explanation: [
      "A live model produces whatever it produces, which is a poor way to test a specific failure. Scripting lets you place the exact wrong output you need — the plausible-but-wrong suggestion, the confidently incorrect summary — at the moment you want to observe someone meeting it.",
      "Honesty with participants matters here as much as anywhere. Say that the responses are prepared. People behave differently when they believe they are testing a real system, and pretending otherwise is deception in a research session, which the consent rules of m05 do not permit.",
      "The observation that matters is whether they noticed. A person who accepts a wrong suggestion without checking has told you that your basis display and your verification affordances are not working, and that is a more important finding than whether they liked the feature.",
      "This is the same paper-prototype discipline from m10 applied to a different kind of uncertainty, and it is available to a learner with no model access at all — which is the point: you can design and test an AI feature's experience without any AI.",
    ],
    misconception:
      "“We need the real model to test it.” You need the real experience of meeting the output, including the wrong ones. Scripting gives you control over exactly the case you need to observe.",
    example:
      "The prototype had eight scripted suggestion sets. Three were good, three contained one plausible-but-wrong suggestion, and two were mostly irrelevant. Participants were told the responses were prepared. Two of three people accepted a wrong suggestion without checking the details, which was the finding: the basis line was being read as reassurance rather than as something to check. The third checked and corrected it, and said the basis line was what prompted her. The design changed to make the checkable detail visible in the suggestion rather than one step away.",
    freeToolPath:
      "Paper cards or a local HTML file with the scripted outputs, plus three conversations. Nothing here needs a model, an API or an account.",
    outputs: [
      "A scripted prototype with good, wrong and irrelevant outputs",
      "Sessions with three people, told the responses are scripted",
      "A record of whether wrong outputs were noticed",
      "One design change from what you observed",
    ],
    steps: [
      {
        minutes: 30,
        title: "Script the outputs",
        instructions: [
          "Write eight or more output sets by hand.",
          "Include plausible-but-wrong and irrelevant cases deliberately.",
        ],
      },
      {
        minutes: 20,
        title: "Prepare the session",
        instructions: [
          "Extend your consent introduction to say responses are prepared.",
          "Write the tasks and what you will observe.",
        ],
      },
      {
        minutes: 40,
        title: "Run three sessions",
        instructions: [
          "Give the task and watch without explaining.",
          "Record whether each wrong output was noticed, checked or accepted.",
        ],
      },
      {
        minutes: 20,
        title: "Analyse the acceptance",
        instructions: [
          "Count how many wrong outputs were accepted unchecked.",
          "Note what prompted anyone who did check.",
        ],
      },
      {
        minutes: 10,
        title: "Change one thing",
        instructions: [
          "Make one design change from what you observed.",
          "Save the scripts, the records and the change.",
        ],
      },
    ],
    check: [
      {
        question: "Why script rather than use a live model?",
        answer:
          "Because you need a specific failure at a specific moment. A live model produces whatever it produces, which is a poor way to study a case you care about.",
      },
      {
        question: "Why tell participants the responses are prepared?",
        answer:
          "Because deceiving them is not permitted under the consent you obtained, and because knowing changes behaviour in ways you should account for rather than hide.",
      },
      {
        question: "What is the key observation?",
        answer:
          "Whether they noticed the wrong output. Acceptance without checking says your basis and verification design is not working, which matters more than preference.",
      },
    ],
    rubric: [
      "Outputs are scripted including deliberate failures",
      "Participants were told the responses are prepared",
      "Noticing versus accepting is recorded per wrong output",
      "One design change follows from the observation",
    ],
    criteria: [
      {
        criterion: "Outputs are scripted including deliberate failures",
        evidence:
          "A set of hand-written outputs covering good, wrong and irrelevant cases.",
        levels: [
          "Only good outputs.",
          "Failures included but not the plausible-but-wrong kind.",
          "All three kinds, with plausible-but-wrong deliberately placed.",
          "As adequate, and the wrong output is one a person could plausibly accept.",
        ],
        remediation:
          "Write the wrong suggestion you would most fear someone accepting, and place it.",
        recheck: "The scripts.",
      },
      {
        criterion: "Participants were told the responses are prepared",
        evidence:
          "Consent wording naming the scripted nature of the responses.",
        levels: [
          "Not told.",
          "Told after the session.",
          "Told before, in the consent introduction.",
          "As adequate, and the effect of knowing is considered in the analysis.",
        ],
        remediation:
          "Add the sentence to your consent introduction and re-run if you concealed it.",
        recheck: "The consent wording.",
      },
      {
        criterion:
          "Noticing versus accepting is recorded per wrong output",
        evidence:
          "A record per wrong output of whether it was noticed, checked or accepted.",
        levels: [
          "Only preferences recorded.",
          "Noticing recorded informally.",
          "Recorded per output with what prompted checking.",
          "As adequate, and counts are given as people rather than instances.",
        ],
        remediation:
          "Go through your notes and mark each wrong output as noticed, checked or accepted.",
        recheck: "The acceptance record.",
      },
      {
        criterion: "One design change follows from the observation",
        evidence:
          "A change traced to what people did with a wrong output.",
        levels: [
          "No change.",
          "A change unrelated to the observation.",
          "A change traced to the acceptance behaviour.",
          "As adequate, and the change makes checking cheaper rather than adding a warning.",
        ],
        remediation:
          "Ask what would have helped the people who accepted a wrong output, and design that.",
        recheck: "The change.",
      },
    ],
    repairs: [
      "If only good outputs were scripted, add plausible-but-wrong ones.",
      "If participants were not told, add it to the consent and re-run.",
      "If only preferences were recorded, mark noticing and checking.",
      "If the change adds a warning, design cheaper checking instead.",
    ],
    portfolio:
      "Testing an AI experience with scripted failures is a technique worth showing: it demonstrates you can study the important case without waiting for a model.",
    resource: usability,
    resources: [
      {
        ...usability,
        section: "Running and moderating sessions.",
        purpose: "Supplies the session discipline for the scripted test.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for conventional prototypes; the scripted-response technique and the disclosure requirement are this course's own.",
        fallbackId: "R12",
      },
      {
        ...pair,
        section: "The chapters on errors and on trust calibration.",
        purpose:
          "Informs which failures are worth scripting and what to watch for.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Guidance rather than capability claims.",
        fallbackId: "R19",
      },
    ],
  }),
  withLegacyText({
    id: "m16-l11-v1",
    module: "m16",
    week: 16,
    day: 11,
    level: 5,
    areas: [15],
    guided: true,
    title: "Mapping the risk before building",
    objective:
      "Map your AI feature against govern, map, measure and manage, and name who is accountable for each, including where nobody currently is.",
    bringForward: "Your feature, its data specification and evaluation plan.",
    prerequisite: "Your complete AI feature design.",
    why: "Most AI harm comes from nobody owning a question, not from a technical failure. Naming the owner is a design contribution.",
    teach: [
      "Govern asks who decides and who is accountable.",
      "Map asks what context the system operates in and who is affected.",
      "Measure asks how you would know it is working or harming.",
      "Manage asks what happens when something goes wrong.",
      "An unowned function is a finding, not a gap to fill silently.",
    ],
    explanation: [
      "The framework's four functions are a checklist for organisational readiness rather than a design method, which is exactly why it is useful here: a designer can walk it in an hour and discover which questions nobody in the team has answered. The output is not compliance; it is a list of unowned questions.",
      "Mapping the context includes who is affected beyond the direct user. A suggestion feature affects the providers whose classes are suggested and those whose are not, and a recommendation system quietly allocates attention. Naming those people is part of the map, and it frequently surfaces a fairness question nobody had considered.",
      "Measure connects back to your evaluation work: what would tell you it is working, and separately, what would tell you it is harming. Those are different questions with different signals, and products routinely instrument the first and not the second.",
      "Manage is about response: who acts when a report arrives, how quickly, and what they can do — turn it off, correct it, apologise. A feature with no manage answer is one where the response will be improvised under pressure by whoever is available.",
    ],
    misconception:
      "“Risk frameworks are for large organisations.” The four questions apply to a feature built by two people, and answering them takes an hour. What differs is the ceremony, not the questions.",
    example:
      "The map for the suggestion feature. Govern: the learner decides what the feature suggests; nobody currently owns what happens if a provider complains about not being suggested — recorded as unowned. Map: affected people include bookers, providers whose classes are suggested, and providers whose are not; the last group had not been considered. Measure: usefulness by the five-person evaluation; harm by complaints from providers and by whether suggestions concentrate on the same three classes. Manage: reports go to the learner, the feature can be disabled per account within a day, and there is no faster route — which was recorded as a limitation.",
    freeToolPath:
      "A written map. The framework and its playbook are downloadable without an account.",
    outputs: [
      "The feature mapped against the four functions",
      "Named owners, including where nobody currently owns something",
      "People affected beyond the direct user",
      "A harm signal distinct from a usefulness signal",
    ],
    steps: [
      {
        minutes: 30,
        title: "Read the four functions",
        instructions: [
          "Read the assigned framework overview.",
          "Write what each function asks in your own words.",
        ],
      },
      {
        minutes: 30,
        title: "Map context and affected people",
        instructions: [
          "List everyone affected, including those not using the feature.",
          "Note any group whose interests conflict with the direct user's.",
        ],
      },
      {
        minutes: 25,
        title: "Name owners",
        instructions: [
          "For each function name who is accountable.",
          "Mark anything nobody currently owns.",
        ],
      },
      {
        minutes: 20,
        title: "Separate harm from usefulness",
        instructions: [
          "Write what would indicate the feature is working.",
          "Write separately what would indicate it is causing harm.",
        ],
      },
      {
        minutes: 15,
        title: "Write the response plan",
        instructions: [
          "State who acts on a report, how fast, and what they can do.",
          "Save the map with the unowned list.",
        ],
      },
    ],
    check: [
      {
        question: "What is the useful output of this mapping?",
        answer:
          "The list of unowned questions. It is not compliance; it is finding out which questions nobody in the team has answered before something goes wrong.",
      },
      {
        question: "Why map people beyond the direct user?",
        answer:
          "Because features allocate attention and opportunity. A recommendation affects those recommended and those not, and that is frequently where the fairness question lives.",
      },
      {
        question: "Why separate harm signals from usefulness signals?",
        answer:
          "Because they are different questions with different indicators, and products routinely instrument only the first.",
      },
    ],
    rubric: [
      "All four functions are addressed",
      "Owners are named, including unowned questions",
      "Affected people beyond the direct user are listed",
      "Harm and usefulness signals are distinct",
    ],
    criteria: [
      {
        criterion: "All four functions are addressed",
        evidence: "A written answer for govern, map, measure and manage.",
        levels: [
          "One or two addressed.",
          "All four named but answered generically.",
          "All four answered for this specific feature.",
          "As adequate, and the answers are short enough to be usable.",
        ],
        remediation:
          "Write one paragraph per function about your feature specifically.",
        recheck: "The four answers.",
      },
      {
        criterion: "Owners are named, including unowned questions",
        evidence:
          "A named person or role per function, with unowned items marked.",
        levels: [
          "No owners.",
          "Owners named where convenient.",
          "Owners named and gaps marked as unowned.",
          "As adequate, and an unowned question is escalated rather than assumed.",
        ],
        remediation:
          "For each function ask who would actually act; if nobody, write unowned.",
        recheck: "The owner list.",
      },
      {
        criterion:
          "Affected people beyond the direct user are listed",
        evidence:
          "A list including third parties and anyone affected by non-selection.",
        levels: [
          "Only the direct user considered.",
          "Others mentioned generally.",
          "Specific groups listed, including those affected by omission.",
          "As adequate, and a conflict between two affected groups is named.",
        ],
        remediation:
          "Ask who else the feature's choices affect, including people it never shows anything to.",
        recheck: "The affected list.",
      },
      {
        criterion: "Harm and usefulness signals are distinct",
        evidence:
          "Two separate signal sets with different sources.",
        levels: [
          "Only usefulness considered.",
          "Harm mentioned without a signal.",
          "Both with distinct signals.",
          "As adequate, and at least one harm signal is observable with what you have.",
        ],
        remediation:
          "Write what you would see if the feature were harming someone, and where you would see it.",
        recheck: "The signal sets.",
      },
    ],
    repairs: [
      "If functions are unanswered, write one paragraph each for your feature.",
      "If owners are assumed, mark the unowned questions honestly.",
      "If only users are considered, list third parties and the unselected.",
      "If harm has no signal, design one you could actually observe.",
    ],
    portfolio:
      "A risk map with unowned questions named is a professional artefact and an unusual one for a designer to bring to an AI conversation.",
    resource: nist,
    resources: [
      {
        ...nist,
        section: "The four functions and the trustworthiness framing.",
        purpose: "Supplies the structure this mapping walks.",
        minutes: "30–45 selected",
        limits:
          "Free access, no account; AI RMF 1.0 released 26 January 2023. Verified 2026-09-06. Voluntary organisational guidance: not law, not certification, and it says nothing about interface design.",
        fallbackId: "R21",
      },
      {
        ...standard,
        section: "The points on accountability and on solving whole problems.",
        purpose:
          "Connects the mapping to the delivery accountability discussed in m14.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government obligations; take the accountability framing.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m16-l12-v1",
    module: "m16",
    week: 16,
    day: 12,
    level: 5,
    areas: [15],
    guided: true,
    title: "When not to use it",
    objective:
      "Write the cases where you would argue against using AI in a product, and prepare the argument for one of them in the terms the decision would be made in.",
    bringForward: "Everything from this module.",
    prerequisite: "Your feature, its risk map and evaluation.",
    why: "The most valuable contribution a designer makes to an AI conversation is frequently the recommendation not to.",
    teach: [
      "A deterministic solution is better where the rules are known.",
      "High-stakes and irreversible decisions need more than probability.",
      "If a wrong output cannot be noticed or corrected, do not ship it.",
      "Novelty is not a reason; a stated problem is.",
      "Prepare the argument, because it will be needed under enthusiasm.",
    ],
    explanation: [
      "Where the rules are known, write the rules. Sorting classes by date, calculating a price, or checking a field against a list are deterministic problems, and using a model for them adds cost, unpredictability and an explanation burden in exchange for nothing.",
      "Stakes change the threshold. A wrong suggestion costs attention; a wrong decision about someone's money, access or safety costs something that cannot be returned. Where a person cannot notice the error or cannot recover from it, the feature should not exist in that form, whatever the accuracy.",
      "Novelty is the commonest actual reason a feature is proposed, and the honest response is to ask what problem it solves and for whom. Your m05 findings are the material for that conversation: if no finding supports the feature, saying so is the contribution.",
      "Preparing the argument matters because it is needed in a room with enthusiasm and a deadline. Written in advance, in the terms the decision is made in — cost, risk, support load, reputation — it is available when you need it rather than improvised badly.",
    ],
    misconception:
      "“Saying no makes me look unhelpful.” Saying no with a reason and an alternative makes you the person whose judgement is trusted. Saying yes to everything makes you the person who builds whatever was fashionable last quarter.",
    example:
      "Three cases were written. Do not use a model to decide who gets a refund: the rules are known, the stakes are money, and a wrong decision is not visible to the person until it costs them. Do not use one to write class descriptions unsupervised: the provider's voice matters and errors reach customers with the provider's name on them. Do not add a chat assistant for a task the filters already handle in three taps, because no research finding supports it. The third was prepared as an argument: it costs a fortnight, adds a support surface, and serves about one request in ten better while serving nine worse.",
    freeToolPath:
      "Written work. This is judgement and argument, not tooling.",
    outputs: [
      "Three cases where you would argue against using AI",
      "The reasoning for each, in decision terms",
      "One prepared argument with the alternative",
      "A note of what evidence would change your position",
    ],
    steps: [
      {
        minutes: 25,
        title: "List the cases",
        instructions: [
          "Write three plausible AI proposals for your product.",
          "For each, state what problem it claims to solve.",
        ],
      },
      {
        minutes: 30,
        title: "Test each against the criteria",
        instructions: [
          "Ask whether the rules are known, what the stakes are, and whether errors are noticeable and recoverable.",
          "Mark which fail and why.",
        ],
      },
      {
        minutes: 25,
        title: "Prepare one argument",
        instructions: [
          "Write the case against one proposal in cost, risk and support terms.",
          "Include the alternative you would build instead.",
        ],
      },
      {
        minutes: 25,
        title: "Write what would change your mind",
        instructions: [
          "State the evidence that would make you support it.",
          "Make it something that could actually be obtained.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Save the three cases and the prepared argument.",
          "Note which case you found hardest to argue against and why.",
        ],
      },
    ],
    check: [
      {
        question: "When is a deterministic solution better?",
        answer:
          "Whenever the rules are known. A model adds cost, unpredictability and an explanation burden in exchange for nothing you needed.",
      },
      {
        question: "What makes a case unshippable regardless of accuracy?",
        answer:
          "When a wrong output cannot be noticed by the person or cannot be recovered from. Accuracy does not help someone who cannot tell that this instance was wrong.",
      },
      {
        question: "Why prepare the argument in advance?",
        answer:
          "Because it is needed in a room with enthusiasm and a deadline, where an improvised objection loses to a prepared proposal.",
      },
    ],
    rubric: [
      "Three refusal cases with their claimed problems",
      "Each tested against known rules, stakes and recoverability",
      "One argument prepared in decision terms with an alternative",
      "The evidence that would change your position is stated",
    ],
    criteria: [
      {
        criterion: "Three refusal cases with their claimed problems",
        evidence:
          "Three plausible proposals, each with the problem it claims to solve.",
        levels: [
          "Fewer than three, or straw proposals.",
          "Three cases without the claimed problem.",
          "Three plausible cases with their claims.",
          "As adequate, and at least one is a proposal you find genuinely tempting.",
        ],
        remediation:
          "Write proposals someone might actually make, not ones that are easy to refuse.",
        recheck: "The three cases.",
      },
      {
        criterion:
          "Each tested against known rules, stakes and recoverability",
        evidence:
          "The three criteria applied to each case with a verdict.",
        levels: [
          "Refused by preference.",
          "Criteria applied loosely.",
          "All three criteria applied per case.",
          "As adequate, and one case passes the criteria and is therefore not refused.",
        ],
        remediation:
          "Apply the three questions to each proposal in writing before deciding.",
        recheck: "The tested cases.",
      },
      {
        criterion:
          "One argument prepared in decision terms with an alternative",
        evidence:
          "An argument in cost, risk and support terms, plus what you would build instead.",
        levels: [
          "An argument in design terms only.",
          "Decision terms without an alternative.",
          "Both, prepared for delivery.",
          "As adequate, and the alternative is cheaper and addresses the stated problem.",
        ],
        remediation:
          "Translate your objection into cost and risk, and write the alternative.",
        recheck: "The prepared argument.",
      },
      {
        criterion:
          "The evidence that would change your position is stated",
        evidence:
          "A specific, obtainable piece of evidence that would reverse the refusal.",
        levels: [
          "Position stated as fixed.",
          "A vague openness to evidence.",
          "Specific, obtainable evidence named.",
          "As adequate, and you would be able to collect it yourself.",
        ],
        remediation:
          "Write what you would have to see to support the proposal, and check it is obtainable.",
        recheck: "The change condition.",
      },
    ],
    repairs: [
      "If the cases are straw proposals, write ones you find tempting.",
      "If refusals rest on preference, apply the three criteria.",
      "If the argument is in design terms, translate it to cost and risk.",
      "If your position is fixed, name the evidence that would move it.",
    ],
    portfolio:
      "A prepared argument against an AI feature, with an alternative and a change condition, is a strong interview artefact in a market where enthusiasm is abundant and judgement is not.",
    resource: pair,
    resources: [
      {
        ...pair,
        section:
          "The chapters on deciding whether AI adds value and on user needs.",
        purpose:
          "Supports the case that a stated problem, not novelty, justifies the approach.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written by a company that builds AI products; read the value question critically rather than as neutral advice.",
        fallbackId: "R19",
      },
      {
        ...standard,
        section: "The points on solving whole problems and on proportionality.",
        purpose:
          "Frames refusal as serving the outcome rather than resisting technology.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government obligations; the refusal criteria here are the course's own.",
        fallbackId: "R07",
      },
    ],
  }),
];
