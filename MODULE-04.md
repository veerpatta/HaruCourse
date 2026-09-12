# UX reasoning and product value

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the small-action teaching and tracking standard](docs/COURSE-AUTHORING.md#small-action-and-tracking-contract--12-september-2026). All 43 lessons in Modules 1–5 use saved action flows. Published, teaching-refined, learner-validated and assessed remain separate states.

Generated from src/module4.ts; edit that source, then run npm run docs:generate. Level 1 · Module m04 · requirement areas 2, 3. Optional effort 16 hours across 8 lessons, which is the sum of the lesson steps themselves. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m02. This is guidance for meaningful practice, not a lock. Module approved resource pair: R02 / R07. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: Mental models and the model you are actually building

Stable ID: m04-l01-v1. Core.

Most confusing interfaces are not ugly or illogical. They are logical according to a model the reader does not hold, and no amount of visual refinement closes that gap.

Bring: Your Module 2 findings, hypothesis and the revision you made after testing. The contradictions you find here should be grounded in what you observed there, not invented.

Starting route: Bring a flow and notes, or use this fictional practice mismatch: a reader assumes the first class is nearest; the list actually orders paid promotions first. Keep that expectation labelled assumed. Describe what the design says, then the action the mismatch might cause.

- The reader's model with each line marked observed or assumed, your design's implied model in its real labels, three named contradictions with consequences, and one conform-or-teach decision with its cost.

### Start with a clear task

Section: learn. Stable action: welcome.

Write the model a reader brings to one task, the model your design implies, and name three specific places they contradict each other.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

A mental model is what a person believes about how something works, assembled from everything else they have used. It is usually incomplete and often wrong in detail, and it is still what they act on. When someone clicks the browser's back button expecting to undo a submission, they are not being careless; they are applying a model that has served them everywhere else.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

You have a much more detailed model than any reader will, because you built the thing. That asymmetry is the source of the problem: what feels self-evident to you was learned by you, in a sequence readers never experienced. The conceptual model your interface communicates — through its labels, structure and feedback — is the only thing they have to build a model from.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

There are two honest responses to a mismatch, and they are not equally cheap. You can conform to the model people already hold, which usually means adopting the structure and vocabulary they know from elsewhere. Or you can change their model, which requires clearer naming, visible structure and feedback that teaches, and which costs far more than designers expect. Choosing the second because the first feels unoriginal is a common and expensive mistake.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Mismatches are findable but not guessable. Card sorting shows you how people expect things to be organised; a think-aloud walkthrough shows you the moment expectation breaks. What you cannot do is deduce someone's model from your own reasoning, which is exactly what a designer confident in their own logic will do by default.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- On the workshop service, several people expected “my bookings” to include workshops they had merely saved, because that is how their shopping apps behave. The product's model separated saved from booked, which is defensible. The mismatch showed up as people reporting a booking they had never made. The chosen response was to conform partially — one list, with booked and saved clearly labelled within it — rather than to teach a distinction no one arrived expecting.


### Get your practice ready

Section: learn. Stable action: workspace.

Bring a flow and notes, or use this fictional practice mismatch: a reader assumes the first class is nearest; the list actually orders paid promotions first. Keep that expectation labelled assumed. Describe what the design says, then the action the mismatch might cause.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and extract

Section: practice-plan. Stable action: step-1-brief.

Your own sentence distinguishing the reader’s model from the model your design implies.

- Read the assigned article. Write, in your own words, the difference between the model a reader brings and the conceptual model an interface communicates.

**Start here:** Read the assigned article and write the difference as you would explain it to a friend.

**Enough:** Neither sentence uses the word “user” as a way of avoiding saying who.

**Mental model:** What a person already believes about how something works, built from everything else they have used.

**Conceptual model:** What your design implies is true, whether or not you intended it. The labels and structure make the claim.


### The difference between the model a reader brings and the model your design implies

Section: practice-plan. Stable action: write-definitions.

Write your answer for “The difference between the model a reader brings and the model your design implies”. Use the task instructions below to decide what to include.

**Answer:** The difference between the model a reader brings and the model your design implies




### Write the reader's model

Section: practice-plan. Stable action: step-2-brief.

One task, what a first-time reader assumes, and which parts you actually observed.

- For one task in your Module 2 work, write what you believe a first-time reader assumes: where things live, what an action will do, what happens next. Mark each line as observed in your testing or assumed.

**Start here:** Open your Module 2 notes before writing anything, and take the beliefs from there.

**Enough:** Every line is marked observed, reported or assumed, and at least one is assumed.

**Observed:** You watched it happen in a session. The strongest mark you can put beside a line.

**Reported:** The person said it. That is what they believe or remember, which is not always what they did.

**Assumed:** You believe it and have no session behind it. Marking it as such is what keeps the model honest.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Writing the reader’s model for a class booking, and catching myself writing my own.

**My first attempt:** “She understands that Reserve starts a booking and that payment comes later.” Confident, tidy, and entirely mine.

**Where it came from:** I designed the flow, so I know payment comes later. Nothing a first-time reader sees on that screen tells her so.

**What my session notes actually held:** One participant asked, before pressing anything, “does this charge me now?” That is the only real evidence I have about this belief.

**What I wrote instead:** She expects Reserve might charge immediately, and hesitates because the screen does not say. Marked: reported, one participant.

**Why the difference matters:** The first version had no contradiction to find. The second one names the exact gap the next step is looking for.

**Wrong turn:** The wrong turn is writing your own understanding and labelling it the reader’s. It produces a model with no friction in it, which is the one thing it cannot be.

**Trade-off:** The honest version is shorter and thinner, because most of what you believe about the reader is unevidenced. That thinness is the finding.

**Unknown:** Still unknown: whether other people share that hesitation. One participant cannot say how common it is.


### The one task you are examining

Section: practice-plan. Stable action: write-task.

Write your answer for “The one task you are examining”. Use the task instructions below to decide what to include.

**Answer:** The one task you are examining




### Where they expect things to live, what they expect an action to do, and what they expect to happen next

Section: practice-plan. Stable action: write-reader-model.

Write it as beliefs, not as complaints.

**Answer:** Where they expect things to live, what they expect an action to do, and what they expect to happen next

Write it as beliefs, not as complaints.

<details>
<summary>Example</summary>

Example (made up): she expects the price shown to be the full price; she expects Reserve to hold a place, not to charge her; she expects a confirmation by email.

</details>


### Which parts of that came from your Module 2 sessions, and which are your guess

Section: practice-plan. Stable action: write-reader-evidence.

Mark each line observed, reported or assumed.

**Answer:** Which parts of that came from your Module 2 sessions, and which are your guess

Mark each line observed, reported or assumed.


### Write your design's model

Section: practice-plan. Stable action: step-3-brief.

What the interface actually claims, in its own labels.

- Write what your design actually implies, using its real labels and structure. Do not soften it; write what the interface says, not what you meant.

**Start here:** Read your screen aloud as if the labels were promises, and write down what they promise.

**Enough:** You wrote at least one thing the design implies that you did not intend.

**Label:** The words on a control or a heading. To a reader they are a promise about what the thing does.

**Structure:** What sits inside what, and in what order. Structure makes claims too, whether or not you meant it to.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Writing down what a booking screen claims, and writing down my own intentions instead.

**What I wrote first:** “The screen offers a class, shows the price, and lets you reserve a place.” True to what I meant, and not a description of anything on the screen.

**Reading the labels aloud:** The button says Reserve. A line above it says eighteen pounds. Nothing joins the two, and nothing anywhere says when the money moves.

**What the design therefore claims:** That the price is a fact about the class, and that Reserve is something you do to a class. Both are readable straight off the screen, and neither is what I had in mind.

**The claim I did not intend:** “Places left: 3” sits under the price in small grey text, so the design says availability is a detail. It is the first thing several people came to find.

**What that gave me:** Two claims I can hold against the reader’s model in the next step. Written as intentions, both would have agreed with her perfectly.

**Wrong turn:** The wrong turn is describing what you meant. You cannot unsee your own reasons, and a screen described by its author never contradicts anybody.

**Trade-off:** Reading your own labels as promises is slow and uncomfortable, and it hands you a list of claims you must now either defend or change. Some of them you were fond of.

**Unknown:** Still unknown: whether a reader notices the small grey line at all. What the design claims and what is read are two different questions.


### Using its real labels and structure, what does the interface say is true?

Section: practice-plan. Stable action: write-design-model.

Do not soften it. Write what the labels claim, not what you meant.

**Answer:** Using its real labels and structure, what does the interface say is true?

Do not soften it. Write what the labels claim, not what you meant.


### Find the contradictions

Section: practice-plan. Stable action: step-4-brief.

Three contradictions, each with the consequence for the reader.

- Place the two side by side and identify three specific contradictions. For each, note the consequence for the reader and whether you saw it happen or are predicting it.

**Start here:** Put the two lists side by side and look for the first line where they disagree.

**Enough:** Each consequence names something the reader does, not how they feel.

**Contradiction:** One place where what the reader believes and what the design does disagree.

**Consequence:** What the reader does because of the gap. Not how they feel about it.


### Try a supplied example

Section: practice-plan. Stable action: step-4-try.

A supplied pair from the same made-up project. Reader’s model: “the list shows classes near me.” Design’s model: the list shows all classes in the city, ordered by the studio’s promotion agreement.

What is the consequence worth writing down?

- She judges distance from the order, so she may travel across the city believing it was the closest option.
- The list is not sorted the way she expects, which is mildly confusing.
- The promotion agreement is unfair to other studios.
- She will learn the real order after using it a few times.

<details>
<summary>After your attempt</summary>

She judges distance from the order, so she may travel across the city believing it was the closest option. — The consequence is a wrong action taken confidently, which is the expensive kind. Ordering carries a meaning nobody declared.

The list is not sorted the way she expects, which is mildly confusing. — “Mildly confusing” is a feeling, not a consequence. Name what she does because of the mismatch.

The promotion agreement is unfair to other studios. — That may be true and it is a business ethics question, not a contradiction between two models of how the thing works.

She will learn the real order after using it a few times. — Possibly, and the first time is where the cost lands. Design for the first time and record what the learning costs.

Write each of your own contradictions the same way: what she believes, what the design does, and what she does because of the gap.

</details>


### Contradiction 1 · what disagrees, and what it costs the reader

Section: practice-plan. Stable action: write-contradiction-1.

Write your answer for “Contradiction 1 · what disagrees, and what it costs the reader”. Use the task instructions below to decide what to include.

**Answer:** Contradiction 1 · what disagrees, and what it costs the reader



<details>
<summary>Example</summary>

Example (made up): she expects Reserve to hold a place; the design charges immediately. Consequence: she presses it to check availability and is charged.

</details>


### Contradiction 2 · what disagrees, and what it costs the reader

Section: practice-plan. Stable action: write-contradiction-2.

Write your answer for “Contradiction 2 · what disagrees, and what it costs the reader”. Use the task instructions below to decide what to include.

**Answer:** Contradiction 2 · what disagrees, and what it costs the reader




### Contradiction 3 · what disagrees, and what it costs the reader

Section: practice-plan. Stable action: write-contradiction-3.

Write your answer for “Contradiction 3 · what disagrees, and what it costs the reader”. Use the task instructions below to decide what to include.

**Answer:** Contradiction 3 · what disagrees, and what it costs the reader




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your structure mirrors how the studio organises its classes internally, and it is entirely logical. Is that enough?

- No. Logical to whom matters: a structure that mirrors an organisation is routinely unusable because readers do not know the organisation.
- Yes, provided the labels are clear and consistent.
- Yes, because people learn a structure after a few visits.

<details>
<summary>After your attempt</summary>

No. Logical to whom matters: a structure that mirrors an organisation is routinely unusable because readers do not know the organisation. — Internal logic is real logic and it encodes knowledge the reader does not have. They look where their own model says to look.

Yes, provided the labels are clear and consistent. — Clear labels on the wrong structure send people confidently to the wrong place.

Yes, because people learn a structure after a few visits. — Some do, and the first visit is where most decisions are made. Learning is a cost you are choosing to impose.

Improve: Reread your design model in step 3. If any part of the structure exists because of how you or the studio think about classes, write it as a contradiction in step 4 and record the change in step 5.

Check again: At least one contradiction names a structure the reader has no way to predict.

Answers to revisit: design-model, contradiction-1

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You wrote the reader’s model from your own understanding of the flow. What is wrong with that?

- It produces a model with no friction in it, so there are no real contradictions to find.
- Nothing, if you designed it for a reader like yourself.
- It is acceptable as a starting point to be tested later.

<details>
<summary>After your attempt</summary>

It produces a model with no friction in it, so there are no real contradictions to find. — You know where everything is and why. Writing that down as the reader’s belief guarantees the two models agree.

Nothing, if you designed it for a reader like yourself. — Even then you know the decisions behind it, which no reader does. Your fluency is the least transferable thing about you.

It is acceptable as a starting point to be tested later. — It is, if it is labelled as an assumption. Written as the reader’s model it will be treated as evidence.

Improve: Mark every line in your reader model in step 2 as observed, reported or assumed. If none are observed, go back to your Module 2 notes and find one, then record it in step 5.

Check again: The evidence marks are present and at least one belief traces to a session.

Answers to revisit: reader-model, reader-evidence

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You decide to teach the reader your model with a short explanation on the screen. What should the cost line say?

- That explanations are frequently skipped, so the cost is a reader who acts on the old model anyway.
- That there is no cost, since the explanation is short.
- That the cost falls on you, in writing time.

<details>
<summary>After your attempt</summary>

That explanations are frequently skipped, so the cost is a reader who acts on the old model anyway. — Teaching is a legitimate choice and it is the expensive one, because it relies on attention you have not been given.

That there is no cost, since the explanation is short. — Length is not the cost. The cost is that it competes with the task the reader came to do.

That the cost falls on you, in writing time. — That is your cost, and the one that matters is what happens to the reader who does not read it.

Improve: Write the cost of your choice in step 5 in terms of what happens to a reader who does not notice, then record the change.

Check again: The cost line describes a consequence for a reader, not effort for you.

Answers to revisit: decision, decision-cost

</details>


### Choose and record

Section: practice. Stable action: step-5-brief.

One decision to conform or teach, its cost, and the repair the Check questions asked for.

- For one contradiction, decide whether to conform or to teach, and write the cost of your choice. Save all three artefacts.

**Start here:** Take the contradiction with the worst consequence and ask which is cheaper: changing the design, or changing the reader.

**Enough:** The cost is written down even if you chose the easier option.

**Conform or teach:** Either change the design to match what people already believe, or accept that you must teach them something new and pay the cost of doing it.


### For one contradiction: will you change the design to match the expectation, or teach the reader the new model?

Section: practice. Stable action: write-decision.

Write your answer for “For one contradiction: will you change the design to match the expectation, or teach the reader the new model?”. Use the task instructions below to decide what to include.

**Answer:** For one contradiction: will you change the design to match the expectation, or teach the reader the new model?




### What that choice costs

Section: practice. Stable action: write-decision-cost.

Teaching costs attention and is often ignored. Conforming can cost a feature you wanted.

**Answer:** What that choice costs

Teaching costs attention and is often ignored. Conforming can cost a feature you wanted.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson audits the same flow for everything it asks the reader to remember.


<details>
<summary>Optional hints and reference material</summary>

- A familiar icon does not establish what this person believes it does.
- Write the system rule in plain language, then check whether visible feedback communicates that rule.

- R32: [NN/g: mental models](https://www.nngroup.com/articles/mental-models/) — The whole article, particularly the designer-versus-user asymmetry and the two responses to a mismatch. Purpose: Establishes why a mismatch is a design problem rather than a reader failure. Free reading, no account. Verified 2026-09-06. Its examples are from commercial products and illustrate the idea, not a rule for yours. Fallback: R31.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The reader's model is written and evidence-marked**

Adequate evidence: A list of expectations where each line is marked as observed in Module 2 testing or as an assumption.

0 — No reader model written.

1 — A model is written but nothing distinguishes observation from assumption.

2 — Every line is marked observed or assumed.

3 — As adequate, and at least one assumption is paired with the smallest question that would test it.

Repair: Go back through your Module 2 notes and mark each line of your reader model with where it came from. Anything with no source becomes an assumption, not a finding. Recheck: The marked model with sources for the observed lines.

**The design's model is written from its real labels**

Adequate evidence: A description using the interface's actual words and structure, not the designer's intent.

0 — Only intent is described.

1 — A mixture of real labels and intended meaning.

2 — The model is written from the interface's own labels and structure.

3 — As adequate, and one label is identified as implying something the design does not actually do.

Repair: Rewrite the model using only text that appears on screen. Where you needed a word that is not there, that absence is itself a finding — record it. Recheck: The rewritten model plus any missing-word findings.

**Contradictions are specific with named consequences**

Adequate evidence: Three contradictions, each naming the expectation, what the design does instead, and the concrete consequence.

0 — Fewer than three, or stated as general confusion.

1 — Three exist but consequences are vague.

2 — Three specific contradictions each with a concrete consequence.

3 — As adequate, and each is marked as observed or predicted, with the predicted ones given a way to check.

Repair: Rewrite each contradiction in the form: the reader expects X, the design does Y, so the reader ends up doing Z. Discard anything that does not fit that shape. Recheck: The three rewritten contradictions.

**The conform-or-teach decision states its cost**

Adequate evidence: One decision with what it gives up — either the better structure abandoned, or the learning burden accepted.

0 — No decision, or a decision with no cost named.

1 — A decision with a generic cost.

2 — The decision names a specific cost it accepts.

3 — As adequate, and the decision states what evidence would reverse it.

Repair: Write your decision, then write the sentence beginning “this is worse for…” and finish it honestly. If nothing is worse, you have probably not made a real choice. Recheck: The decision with its stated cost and reversal condition.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson audits the same flow for everything it asks the reader to remember.

**Review criteria:**

- The reader's model is written and evidence-marked
- The design's model is written from its real labels
- Contradictions are specific with named consequences
- The conform-or-teach decision states its cost

<details>
<summary>Reading, video and deeper explanation</summary>



[NN/g: mental models](https://www.nngroup.com/articles/mental-models/).

</details>

## Lesson 2: Recognition, recall and what you are asking people to remember

Stable ID: m04-l02-v1. Core.

Interfaces routinely ask people to carry information across screens, and the person who designed the flow is the only one who never notices, because they already know what is coming.

Bring: The flow you tested in Module 2 and the mental-model contradictions from the previous lesson.

Starting route: Trace an existing task or draw a fictional booking across details, form and confirmation. Put price, date and materials on details and cover that page at confirmation. List what must now be remembered. Interrupt yourself between cards and specify what information should remain visible.

- A memory-demand audit naming each demand and its two screens, interruption marks, two demands converted to recognition with their costs, and one unremovable demand with its justification.

### Start with a clear task

Section: learn. Stable action: welcome.

Audit one flow for everything it requires a reader to hold in mind or retrieve from memory, and convert at least two of those demands into recognition.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Recognising something is far easier than recalling it, because recognition supplies cues and recall does not. This is why a menu of visible options outperforms a box you must type the right word into, and why a list of recently viewed items is more useful than expecting someone to remember what they looked at. Every time you make a reader produce information from nothing, you are choosing the harder mode on their behalf.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Working memory is small and easily disrupted. People hold only a few items at once, and holding them costs attention that is then unavailable for the actual task. Chunking helps — a phone number in groups is easier than a run of digits — but the reliable fix is not to require the holding at all: show the value where it is needed rather than asking someone to carry it from a previous screen.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Interruption is the normal case, not the exception. Someone booking a workshop on a phone will be interrupted by a message, a call, or their own life, and will return with their working memory emptied. A flow that depends on remembering what was typed three screens ago fails not because the person was careless but because the design assumed uninterrupted attention it had no right to assume.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

The classic “about seven items” figure is widely quoted and widely over-applied; the assigned article on memory does not use it at all, and the number varies with the material and the person. Treat chunk limits as a reason to reduce what you demand, not as a rule that permits exactly seven of something. If you need the specific framing, read the Miller's Law page in the laws collection, and read it as a heuristic.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A booking flow asked for a reference code on screen four that had been shown on screen two, with no way back that preserved the entered data. Every observed participant either scrolled back and lost their input or guessed. The fix required no new feature: the code was displayed inline on screen four beside the field. The demand for recall disappeared, and so did the error.


### Get your practice ready

Section: learn. Stable action: workspace.

Trace an existing task or draw a fictional booking across details, form and confirmation. Put price, date and materials on details and cover that page at confirmation. List what must now be remembered. Interrupt yourself between cards and specify what information should remain visible.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and separate the two modes

Section: practice-plan. Stable action: step-1-brief.

Three examples of each mode from products you actually use.

- Read the assigned article. Write three places in any product you use where recognition is offered and three where recall is demanded.

**Start here:** Open two apps on your phone and look for a field you have to fill from memory.

**Enough:** The examples are specific screens, not categories of app.

**Recognition:** The answer is in front of you and you pick it. Far easier and far more reliable.

**Recall:** You must produce the answer from memory with no cue. Fragile, and it fails completely under interruption.


### Three places in products you use where the answer is shown to you

Section: practice-plan. Stable action: write-recognition-examples.

Write your answer for “Three places in products you use where the answer is shown to you”. Use the task instructions below to decide what to include.

**Answer:** Three places in products you use where the answer is shown to you




### Three places where you have to produce it from memory

Section: practice-plan. Stable action: write-recall-examples.

Write your answer for “Three places where you have to produce it from memory”. Use the task instructions below to decide what to include.

**Answer:** Three places where you have to produce it from memory




### Audit your flow

Section: practice-plan. Stable action: step-2-brief.

Every demand your flow makes, naming the screen where the information appears and the screen where it is needed.

- Walk your flow screen by screen. List everything the reader must remember, carry forward, or produce without a cue. Note which screen created the demand and which one collects it.

**Start here:** Lay your screens in order and draw an arrow wherever information is needed later than it appears.

**Enough:** Each demand names two screens, not one.

**Demand:** One thing your flow asks the reader to carry from the screen where it appears to the screen where it is needed.

**Flow:** The screens in the order a reader actually meets them while doing one task.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Auditing a booking flow for what it asks people to carry.

**What I looked for first:** Form fields. There were only two, so I concluded the flow made almost no memory demands.

**What I missed:** The materials list appears on the details screen and is never shown again. To pack for the class she must remember it from a screen she saw last week.

**The second one:** The class start time appears before booking and not on the confirmation. She has to hold it, or go back and find the class again.

**How I found them:** I drew an arrow from where each piece of information appears to where it is actually needed. Every long arrow is a demand.

**What that changed:** The confirmation screen went from a thank-you to a summary: date, time, address and what to bring, all shown rather than remembered.

**Wrong turn:** The wrong turn is looking only at input fields. Most memory demands are about information the design showed once and then took away.

**Trade-off:** Showing everything again costs space on the confirmation screen, which had been pleasantly minimal. Minimal is not the goal; being able to act is.

**Unknown:** Still unknown: whether people go back to find the materials list or simply guess. Worth watching in a session.


### Demand 1 · what must be remembered, from which screen to which

Section: practice-plan. Stable action: write-demand-1.

Write your answer for “Demand 1 · what must be remembered, from which screen to which”. Use the task instructions below to decide what to include.

**Answer:** Demand 1 · what must be remembered, from which screen to which



<details>
<summary>Example</summary>

Example (made up): the class start time appears on the details screen and is needed on the confirmation screen, where it is not shown again.

</details>


### Demand 2 · what must be remembered, from which screen to which

Section: practice-plan. Stable action: write-demand-2.

Write your answer for “Demand 2 · what must be remembered, from which screen to which”. Use the task instructions below to decide what to include.

**Answer:** Demand 2 · what must be remembered, from which screen to which




### Demand 3 · what must be remembered, from which screen to which

Section: practice-plan. Stable action: write-demand-3.

Write your answer for “Demand 3 · what must be remembered, from which screen to which”. Use the task instructions below to decide what to include.

**Answer:** Demand 3 · what must be remembered, from which screen to which




### Demand 4 · what must be remembered, from which screen to which

Section: practice-plan. Stable action: write-demand-4.

Write your answer for “Demand 4 · what must be remembered, from which screen to which”. Use the task instructions below to decide what to include.

**Answer:** Demand 4 · what must be remembered, from which screen to which




### Add the interruption

Section: practice-plan. Stable action: step-3-brief.

What happens to each demand under a ten-minute interruption.

- For each demand, ask what happens if the reader is interrupted for ten minutes between the two screens. Mark the demands that do not survive it.

**Start here:** Take each demand and imagine the phone ringing between the two screens.

**Enough:** At least one demand is marked as failing.

**Interruption test:** Asking what survives ten minutes of real life between two screens. It separates a mild demand from a broken one.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Running the interruption test on a booking flow, and passing every single demand.

**How I ran it first:** I took each demand and asked whether I would still remember it ten minutes later. All four survived comfortably.

**Why they survived:** I built the flow. The start time is not something I am holding in mind, it is something I know. The test measured my familiarity with my own work.

**What I did instead:** For each demand I wrote out exactly what a reader would have to reproduce, word for word, ten minutes later, with nothing in front of her.

**What failed:** The materials list failed outright: a mat, loose clothing and a bottle is three items with no cue. The start time survived as “about eleven”, which is close enough to be wrong.

**The one that surprised me:** The studio address. It appears on the details screen and never again. Ten minutes is not its problem; three days is.

**Wrong turn:** The wrong turn is running the test on yourself as the author. You will pass every time, because you are not remembering the flow, you are the person who decided it.

**Trade-off:** Writing out what must be reproduced word for word turns a four-line audit into most of a page, and it is slower than it looks. It is the only version that catches the partial failures.

**Unknown:** Still unknown: whether “about eleven” is good enough in practice, or whether people go back and check anyway. That needs watching rather than reasoning.


### For each demand: what happens if the reader is interrupted between the two screens?

Section: practice-plan. Stable action: write-interruption-results.

A phone call, a child, a bus stop. Mark which demands fail.

**Answer:** For each demand: what happens if the reader is interrupted between the two screens?

A phone call, a child, a bus stop. Mark which demands fail.


### Convert two demands

Section: practice-plan. Stable action: step-4-brief.

Two demands converted into recognition, with their costs.

- Choose two demands — ideally the two that fail interruption — and redesign them into recognition: show the value, offer a list, or remove the need entirely. Record what each change costs in space or steps.

**Start here:** Take the demands that failed the interruption test first.

**Enough:** In both conversions the reader can see the answer at the moment it is needed.

**Conversion:** Changing a demand so the answer is shown at the moment it is needed, instead of remembered.

**Cost:** What the conversion takes from the screen: space, another line, one more thing to read past.


### Try a supplied example

Section: practice-plan. Stable action: step-4-try.

A supplied demand from the same made-up flow: the reader chooses a class on one screen, and three screens later must type the class name into a “which class?” field to confirm.

Which conversion actually removes the memory demand?

- Show the chosen class name and time on the confirming screen, with an option to change it.
- Add a hint under the field reading “the class you selected earlier”.
- Add a confirmation dialogue asking “are you sure this is the right class?”
- Let her open the class list in a new tab to look it up.

<details>
<summary>After your attempt</summary>

Show the chosen class name and time on the confirming screen, with an option to change it. — The answer is now in front of her and she checks rather than produces. The change option keeps her in control without asking her to remember.

Add a hint under the field reading “the class you selected earlier”. — That names what to remember without supplying it. The demand is unchanged.

Add a confirmation dialogue asking “are you sure this is the right class?” — She still has no way to check. Confirming something you cannot verify is not a check.

Let her open the class list in a new tab to look it up. — Better than nothing and it moves the work to her: she must leave the task, find the class and come back holding the answer.

Convert your own two demands by showing the value where it is needed, not by labelling what should be remembered.

</details>


### Conversion 1 · the demand, and how the value is now shown or offered

Section: practice-plan. Stable action: write-conversion-1.

Write your answer for “Conversion 1 · the demand, and how the value is now shown or offered”. Use the task instructions below to decide what to include.

**Answer:** Conversion 1 · the demand, and how the value is now shown or offered




### Conversion 2 · the demand, and how the value is now shown or offered

Section: practice-plan. Stable action: write-conversion-2.

Write your answer for “Conversion 2 · the demand, and how the value is now shown or offered”. Use the task instructions below to decide what to include.

**Answer:** Conversion 2 · the demand, and how the value is now shown or offered




### What each conversion costs, in space or complexity

Section: practice-plan. Stable action: write-conversion-costs.

Write your answer for “What each conversion costs, in space or complexity”. Use the task instructions below to decide what to include.

**Answer:** What each conversion costs, in space or complexity




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your flow ends with a confirmation screen showing everything entered. Does that mean the reader checked it?

- No. It means the information was displayed. Checking requires comparing it against something they can still see.
- Yes: displaying the values gives them the opportunity to check.
- Yes, if the values are large and clearly laid out.

<details>
<summary>After your attempt</summary>

No. It means the information was displayed. Checking requires comparing it against something they can still see. — If the reader must compare against a value from two screens ago that is no longer visible, the confirmation is a formality rather than a check.

Yes: displaying the values gives them the opportunity to check. — Opportunity without the reference is not a check. They can read what is there and have nothing to compare it with.

Yes, if the values are large and clearly laid out. — Legibility helps them read it. It does not give them the original to compare against.

Improve: Look at your confirmation screen in step 2. If it asks the reader to verify something whose source is no longer visible, add that as a demand and convert it, then record the change in step 5.

Check again: Anything the reader is asked to confirm is shown beside what it should match.

Answers to revisit: demand-1, demand-2, demand-3, demand-4, conversion-1

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You skipped the interruption test because your flow takes only two minutes. Why apply it anyway?

- Because real use is interrupted regardless of how long the flow takes; two minutes on a bus is not two uninterrupted minutes.
- It is unnecessary for short flows; the test is for long forms.
- Only if the flow involves payment.

<details>
<summary>After your attempt</summary>

Because real use is interrupted regardless of how long the flow takes; two minutes on a bus is not two uninterrupted minutes. — The flow’s length is your measurement under ideal conditions. Interruption is the normal case, not the exception.

It is unnecessary for short flows; the test is for long forms. — Short flows are more often done in fragments, precisely because they feel quick to start.

Only if the flow involves payment. — Payment raises the cost of failure and does not create the demand. Any carried value fails the same way.

Improve: Apply the interruption test to every demand in step 3 and mark which fail, then record what changed in step 5.

Check again: Each demand carries an interruption result.

Answers to revisit: interruption-results

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

One demand cannot be removed: the reader must remember which email address they used. What should you write?

- That it is genuinely unremovable, why, and what you did to soften it, such as showing a masked hint.
- That the reader should use a password manager.
- Nothing: unremovable demands are not part of the audit.

<details>
<summary>After your attempt</summary>

That it is genuinely unremovable, why, and what you did to soften it, such as showing a masked hint. — Some demands are real. Recording why, and what you did to reduce the cost, is the honest end of the audit.

That the reader should use a password manager. — That moves the demand onto a tool they may not have, and it is advice rather than design.

Nothing: unremovable demands are not part of the audit. — They are the most important part, because they are what you are knowingly asking of people.

Improve: Fill the unremovable box in step 5 with the reason and any softening you added, then record the change.

Check again: The unremovable demand names why it cannot be shown and what you did about the cost.

Answers to revisit: unremovable

</details>


### Record and pause

Section: practice. Stable action: step-5-brief.

One demand you could not remove, where the flow lives, and the repair the Check questions asked for.

- Save the audit table, the interruption marks and the two conversions. Note one demand you could not remove and why.

**Start here:** Look for something only the reader knows, such as a password or a personal preference.

**Enough:** The reason names why showing it is impossible or wrong, not merely inconvenient.

**Unremovable demand:** Something only the reader knows, so no screen can supply it. An email address or a password.

**Softening:** Reducing the cost of a demand you cannot remove, such as showing a masked hint of the address they used.


### One demand you could not remove, and why

Section: practice. Stable action: write-unremovable.

Write your answer for “One demand you could not remove, and why”. Use the task instructions below to decide what to include.

**Answer:** One demand you could not remove, and why




### Where the annotated flow lives

Section: practice. Stable action: write-photo-reference.

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.

**Answer:** Where the annotated flow lives

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson inventories what each control affords, signals and confirms.


<details>
<summary>Optional hints and reference material</summary>

- Run this as a self-walkthrough and label it accordingly, not as evidence about all users.
- Showing everything can create clutter. Decide which detail is needed at this step.

- R33: [NN/g: recognition and recall](https://www.nngroup.com/articles/recognition-and-recall/) — The whole article: recognition versus recall, activation, and the interface implications. Purpose: Explains why cues make a task easier and where interfaces habitually demand production instead. Free reading, no account. Verified 2026-09-06. It does not cover Miller's 7±2; use the R31 millers-law page if you need that framing, and treat it as a heuristic. Fallback: R31.
- R31: [Laws of UX](https://lawsofux.com/) — The millers-law and cognitive-load pages only. Purpose: Supplies the chunking vocabulary the memory article omits. Free reading, no account. Verified 2026-09-06. The site states these as laws without caveats; the limitation is taught here, not there. Fallback: R02.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The audit names demands with both screens involved**

Adequate evidence: A table where each row names the information, the screen that supplies it and the screen that requires it.

0 — No audit.

1 — Demands listed without identifying the screens.

2 — Every demand names its supplying and requiring screen.

3 — As adequate, and the audit also catches demands created outside the product, such as a code from an email or SMS.

Repair: Redraw your flow and draw an arrow for every piece of information the reader must carry. Any arrow spanning more than one screen becomes a row in the table. Recheck: The arrow diagram and the completed table.

**The interruption case was genuinely applied**

Adequate evidence: Each demand marked for whether it survives a ten-minute interruption, with the reasoning.

0 — Interruption not considered.

1 — Mentioned but not applied per demand.

2 — Each demand is marked with reasoning.

3 — As adequate, and the interruption was actually experienced during the exercise rather than imagined.

Repair: Take your audit and, for each row, write what the reader still has in front of them after ten minutes away. Mark the rows where the answer is nothing. Recheck: The audit with interruption marks and reasoning.

**Two conversions are real and their costs stated**

Adequate evidence: Two demands redesigned into recognition, each with what the change costs in space, steps or complexity.

0 — No conversions, or conversions that still require recall.

1 — Two conversions but no costs stated.

2 — Two genuine conversions with stated costs.

3 — As adequate, and one demand is removed entirely rather than converted, with the reasoning for why it was never needed.

Repair: For each conversion, ask what the reader must now produce from memory. If the answer is anything, the conversion is incomplete — show the value rather than hinting at it. Recheck: The two conversions with the recall demand shown to be zero.

**Memory claims are proportionate**

Adequate evidence: No numeric capacity claim is presented as fact; any use of a chunking heuristic is labelled as such.

0 — A specific capacity is asserted as a rule and used to justify a decision.

1 — A number is quoted without a caveat.

2 — Memory limits are described qualitatively, or a heuristic is labelled as one.

3 — As adequate, and the write-up notes that the assigned memory article does not supply a capacity figure at all.

Repair: Find every number in your write-up describing memory and either remove it or attach its source and its status as a heuristic. Recheck: The corrected write-up.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson inventories what each control affords, signals and confirms.

**Review criteria:**

- The audit names demands with both screens involved
- The interruption case was genuinely applied
- Two conversions are real and their costs stated
- Memory claims are proportionate

<details>
<summary>Reading, video and deeper explanation</summary>



[NN/g: recognition and recall](https://www.nngroup.com/articles/recognition-and-recall/).

</details>

## Lesson 3: Affordances, signifiers and feedback

Stable ID: m04-l03-v1. Core.

On a screen every pixel can be clicked and almost none of them do anything. What a reader can do is invisible unless you make it visible, and whether it worked is invisible unless you say so.

Bring: Your flow and the memory-demand audit. Use the same screens so the analysis accumulates.

Starting route: Use five controls from a sketch or a familiar app. Fallback controls: Reserve, date selection, quantity, back and confirmation. For each, separate what can be done, the clue before acting and the response afterward. Leave absent clues explicit; drawings specify feedback but cannot prove runtime behaviour.

- A three-column affordance, signifier and feedback inventory with blanks left visible, touch-availability marks, and two repairs each stating what the reader can now tell.

### Start with a clear task

Section: learn. Stable action: welcome.

Identify what each control in one screen affords, what signals that affordance to the reader, and what tells them the action worked — then repair the weakest of the three.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

An affordance is what an object makes possible: a checkbox affords being turned on and off, a slider affords being moved. A signifier is the perceivable cue that tells someone the affordance exists — the shape, the colour, the label, the cursor change, the underline. The distinction matters because on a screen the affordance is decided by code and is entirely unperceivable; only signifiers reach the reader.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Two gulfs sit either side of every action. The gulf of execution is the distance between what someone wants and working out how to do it, which signifiers close. The gulf of evaluation is the distance between acting and knowing what happened, which feedback closes. Designers spend most of their attention on the first gulf and most of their bugs live in the second.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Feedback must be specific, timely and located where attention already is. “Saved” at the top of a page the reader has scrolled past is not feedback; a spinner with no end state is not feedback; a success message that does not say what succeeded leaves the reader checking manually anyway. The test is whether the reader can answer “did it work, and to what?” without doing extra work.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Removing signifiers is a recurring cost of visual minimalism. Flat controls without borders, links without underlines, icons without labels and low-contrast placeholders all look calmer and all reduce what the reader can tell. That is a real tradeoff, not a mistake by definition — but it must be a decision you made knowingly and can state, not a side effect of preferring the cleaner mock.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A workshop card had its whole surface clickable, with the title in body-text colour and no other cue. On desktop, hovering revealed a subtle shade change; on a phone nothing indicated interactivity at all, and observed readers tapped the price text and then the image before finding it. Adding a coloured, weightier title and a visible chevron closed the execution gulf. Separately, the tap produced no immediate response during a slow load, so a pressed state was added to close the evaluation gulf.


### Get your practice ready

Section: learn. Stable action: workspace.

Use five controls from a sketch or a familiar app. Fallback controls: Reserve, date selection, quantity, back and confirmation. For each, separate what can be done, the clue before acting and the response afterward. Leave absent clues explicit; drawings specify feedback but cannot prove runtime behaviour.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and define

Section: practice-plan. Stable action: step-1-brief.

One-line definitions in your own words.

- Read the assigned article's opening sections. Write your own one-line definitions of affordance, signifier and the two gulfs, with a screen example of each.

**Start here:** Write the three sentences before looking at your screen, so the inventory is not shaped to fit them.

**Enough:** Each sentence could be understood by someone who has not read the article.

**Affordance:** What the thing makes possible: a button affords pressing, a text field affords typing.

**Signifier:** What tells the reader the affordance exists. Without it the possibility is invisible.

**Feedback:** What tells the reader the action happened, and what happened.


### Affordance, signifier, and feedback

Section: practice-plan. Stable action: write-definitions.

One line each, without using the other two words.

**Answer:** Affordance, signifier, and feedback

One line each, without using the other two words.


### Inventory the controls

Section: practice-plan. Stable action: step-2-brief.

Every interactive element inventoried across all three columns, with blanks left as blanks.

- For every interactive element on your screen, write three columns: what it affords, what signifies that, and what feedback follows the action. Leave cells blank where nothing exists — blanks are the finding.

**Start here:** Print the screen and write three short columns beside each control.

**Enough:** At least one cell is blank and stayed blank.

**Control:** Anything a reader can act on: a button, a link in a sentence, a card, the back arrow.

**Inventory:** The list of every control with its three columns either filled in or deliberately left empty.

**Blank:** A column with nothing in it. It is a finding about the screen, not an unfinished cell in your table.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Inventorying a booking screen and finding the empty column.

**What I expected to find:** A few weak signifiers. My buttons look like buttons, so I thought the inventory would be quick and reassuring.

**The first two rows:** Reserve: affords holding a place, signalled by a filled rectangle with a verb, feedback… I stopped there.

**What was in the feedback column:** Nothing. Pressing Reserve does nothing visible until the next screen appears, which on a slow connection can take seconds.

**Why I nearly filled it in:** I wrote “the next screen appears” and deleted it. That is the result arriving, not feedback that the press registered.

**What the blank told me:** This is why people press twice. The blank was the finding, and filling it in would have hidden it.

**Wrong turn:** The wrong turn is filling every cell because an empty table looks unfinished. The empty cells are the entire value of the exercise.

**Trade-off:** Leaving blanks makes the inventory look sparse and unimpressive. It is what makes the next step obvious.

**Unknown:** Still unknown: how long the wait actually is on a slow connection. Worth measuring before deciding what the feedback should be.


### Control 1 · affords / signalled by / feedback

Section: practice-plan. Stable action: write-control-1.

Leave a column blank if there is nothing there. A blank is a finding.

**Answer:** Control 1 · affords / signalled by / feedback

Leave a column blank if there is nothing there. A blank is a finding.

<details>
<summary>Example</summary>

Example (made up): Reserve button · affords holding a place · signalled by a filled green rectangle and a verb · feedback: (blank — nothing happens visibly until the next screen loads).

</details>


### Control 2 · affords / signalled by / feedback

Section: practice-plan. Stable action: write-control-2.

Write your answer for “Control 2 · affords / signalled by / feedback”. Use the task instructions below to decide what to include.

**Answer:** Control 2 · affords / signalled by / feedback




### Control 3 · affords / signalled by / feedback

Section: practice-plan. Stable action: write-control-3.

Write your answer for “Control 3 · affords / signalled by / feedback”. Use the task instructions below to decide what to include.

**Answer:** Control 3 · affords / signalled by / feedback




### Control 4 · affords / signalled by / feedback

Section: practice-plan. Stable action: write-control-4.

Write your answer for “Control 4 · affords / signalled by / feedback”. Use the task instructions below to decide what to include.

**Answer:** Control 4 · affords / signalled by / feedback




### Control 5 · affords / signalled by / feedback

Section: practice-plan. Stable action: write-control-5.

Write your answer for “Control 5 · affords / signalled by / feedback”. Use the task instructions below to decide what to include.

**Answer:** Control 5 · affords / signalled by / feedback




### Test on touch

Section: practice-plan. Stable action: step-3-brief.

Every hover-dependent signifier marked, with what remains on touch.

- Check every signifier that depends on hover or a cursor change. Mark each as unavailable on touch, and note what remains for a reader on a phone.

**Start here:** Go through the inventory and mark anything that only appears when a mouse is over it.

**Enough:** Each marked item says what a touch reader sees instead.

**Touch:** No hover, no cursor change, and a fingertip roughly the size of a small coin. Anything signalled only by pointer behaviour does not exist there.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Checking a booking screen on touch, with a mouse still in my hand.

**What I did:** Dragged the browser narrow until the layout stacked, looked at it, and marked the screen as fine on touch.

**What that actually tested:** The layout at a narrow width. My pointer was still on the page, so every pointer-dependent cue was still appearing for me.

**The one that caught me:** The class cards lift slightly when the pointer is over them. That lift is the only thing saying they can be tapped, and on a phone it never happens.

**What I did instead:** Opened the same page on a phone, sat on my hands, and asked what tells me this is tappable before I touch anything. For the cards: nothing.

**What went in the column:** “Cards — signalled by the hover lift only — on touch nothing remains.” A blank with a note beside it is the finding.

**Wrong turn:** The wrong turn is treating narrow as touch. Width is the easy thing to change, and hover is the thing that disappears, so the test that matters is the one you cannot run with a pointer attached.

**Trade-off:** Actually opening it on a phone means getting work in progress onto a phone, which is fiddly and sometimes not possible. Reading the printout and asking what the pointer was doing is second best.

**Unknown:** Still unknown: whether readers tap the cards anyway because cards elsewhere are tappable. Convention may carry it, and it is not something you can count on.


### Every signifier that needs hover or a cursor change, and what remains without it

Section: practice-plan. Stable action: write-hover-dependent.

Hover does not exist on a phone, which is where much of your audience will be.

**Answer:** Every signifier that needs hover or a cursor change, and what remains without it

Hover does not exist on a phone, which is where much of your audience will be.


### Repair the weakest

Section: practice-plan. Stable action: step-4-brief.

The weakest signifier and the weakest feedback repaired, each stating what the reader can now tell.

- Choose the control with the weakest signifier and the one with the weakest feedback. Repair both, writing what a reader can now tell that they could not before.

**Start here:** Pick the control whose signifier column was thinnest, then the one whose feedback column was blank.

**Enough:** Each repair says what the reader can tell that they could not before.

**Repair:** The smallest change that restores what was missing, made without adding a new element to the screen where you can.

**Convention:** A signal readers already know from everywhere else, such as an underline meaning link. Using one costs the reader nothing to learn.


### Try a supplied example

Section: practice-plan. Stable action: step-4-try.

A supplied row from the same made-up screen: a link in body text reading “see what to bring”, styled in the same colour and weight as the surrounding text, underlined only on hover.

What is the smallest sound repair?

- Give it a persistent underline, so it is identifiable as a link without a pointer.
- Change its colour so it stands out from the body text.
- Turn it into a button so it is obviously interactive.
- Add a hint elsewhere saying which words are links.

<details>
<summary>After your attempt</summary>

Give it a persistent underline, so it is identifiable as a link without a pointer. — It restores the signifier on every device without adding anything new to the screen, and it is the convention readers already know.

Change its colour so it stands out from the body text. — Better than nothing and colour alone is exactly the failure the colour lesson warned about. It also fails in greyscale.

Turn it into a button so it is obviously interactive. — A button is a much heavier element for an inline reference and changes the reading of the sentence around it.

Add a hint elsewhere saying which words are links. — That asks the reader to hold a rule in mind, which is precisely the memory demand the previous lesson was removing.

Repair your own weakest signifier the same way: restore the cue where the reader is, without adding a new element.

</details>


### The weakest signifier · what you changed, and what the reader can now tell before acting

Section: practice-plan. Stable action: write-repair-signifier.

Write your answer for “The weakest signifier · what you changed, and what the reader can now tell before acting”. Use the task instructions below to decide what to include.

**Answer:** The weakest signifier · what you changed, and what the reader can now tell before acting




### The weakest feedback · what you changed, and what the reader can now tell after acting

Section: practice-plan. Stable action: write-repair-feedback.

Write your answer for “The weakest feedback · what you changed, and what the reader can now tell after acting”. Use the task instructions below to decide what to include.

**Answer:** The weakest feedback · what you changed, and what the reader can now tell after acting




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your card is clickable and readers will discover that by hovering. What is wrong with relying on that?

- Hover does not exist on touch devices, and it requires the reader to already suspect the thing is interactive.
- Nothing, provided the site is mainly used on desktop.
- It is acceptable if the card has a shadow.

<details>
<summary>After your attempt</summary>

Hover does not exist on touch devices, and it requires the reader to already suspect the thing is interactive. — It is a signifier that only appears to people who already guessed. On a phone it never appears at all.

Nothing, provided the site is mainly used on desktop. — Even on desktop, hover only rewards a reader who was already exploring. It cannot invite the first action.

It is acceptable if the card has a shadow. — A shadow may be a persistent signifier, in which case the shadow is doing the work and the hover is decoration.

Improve: Check your hover-dependent list in step 3. Give the most important one a signifier that is present without a pointer, and record it in step 5.

Check again: Every interactive element is identifiable on a touch screen without exploring.

Answers to revisit: hover-dependent, repair-signifier

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A control has nothing in its feedback column. What should you do?

- Leave it blank and treat it as the finding, then repair it deliberately.
- Write “the next screen appears” to complete the row.
- Remove the row, since it is incomplete.

<details>
<summary>After your attempt</summary>

Leave it blank and treat it as the finding, then repair it deliberately. — The blank is what the exercise is for. It usually explains a behaviour you have already seen, such as people pressing twice.

Write “the next screen appears” to complete the row. — That is the result arriving, not confirmation that the press registered. On a slow connection there is a gap where nothing has happened.

Remove the row, since it is incomplete. — Removing it hides the most valuable line in the table.

Improve: Restore any cell you filled in to make the table look complete, then repair the weakest feedback in step 4 and record it in step 5.

Check again: Blanks are preserved as findings, and the repairs address the blanks.

Answers to revisit: repair-feedback, control-1, control-2, control-3, control-4, control-5

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You removed the underline from links because the screen looked busy. What did that cost?

- The signifier that told readers which words are interactive, on every device.
- Nothing, since the links are still a different colour.
- Only aesthetics; the links still work.

<details>
<summary>After your attempt</summary>

The signifier that told readers which words are interactive, on every device. — Tidiness routinely removes signifiers, because signifiers are visual noise until you need them. Record what you took away.

Nothing, since the links are still a different colour. — Colour alone fails in greyscale and for many readers. It also collides with the colour lesson’s rule.

Only aesthetics; the links still work. — They work for anyone who finds them. Finding them is what the underline was for.

Improve: Write what you removed and what it was doing in step 5, and restore it if the repair column has no substitute.

Check again: Any removed signifier is either restored or replaced by something present on every device.

Answers to revisit: removed-signifier

</details>


### Record and pause

Section: practice. Stable action: step-5-brief.

Any signifier removed for tidiness, where the screen lives, and the repair the Check questions asked for.

- Save the three-column inventory with its blanks, the touch marks, and the two repairs. Note any signifier you removed for visual reasons and what it cost.

**Start here:** Think about what you took away because the screen looked busy.

**Enough:** If you removed nothing, say so; if you did, name what it was signalling.

**Tidying:** Taking visual detail away because the screen looks busy. It is the usual way a signal gets lost.

**Decoration:** A visual detail carrying no meaning. Anything doing real work looks like decoration right up to the moment somebody needs it.


### Any signifier you removed for tidiness, and what it was doing

Section: practice. Stable action: write-removed-signifier.

Underlines, borders and shadows are often removed because they look busy.

**Answer:** Any signifier you removed for tidiness, and what it was doing

Underlines, borders and shadows are often removed because they look busy.


### Where the annotated screen lives

Section: practice. Stable action: write-photo-reference.

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.

**Answer:** Where the annotated screen lives

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson classifies the failures you observed in Module 2.


<details>
<summary>Optional hints and reference material</summary>

- Distinguish the action possible from the visible cue suggesting it.
- Ask what the person sees while waiting and after failure, not just after success.

- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — The gulfs of execution and evaluation, and the affordances and signifiers sections. Purpose: Supplies the vocabulary connecting what a reader can do to what they can perceive and confirm. Free reading, no account. Verified 2026-09-06. Its product examples illustrate the concepts and are not requirements for your design. Fallback: R02.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Every control is inventoried across all three columns**

Adequate evidence: One row per interactive element with affordance, signifier and feedback considered for each.

0 — No inventory.

1 — Some controls covered, or only one or two columns used.

2 — Every interactive element has all three columns considered.

3 — As adequate, and non-obvious interactive elements — a whole clickable card, a swipe, a long press — are included.

Repair: List every element a reader could act on, including whole regions and gestures, and complete all three columns for each. Recheck: The completed inventory covering every interactive element.

**Blanks are preserved as findings, not filled in**

Adequate evidence: Visible empty cells where no signifier or feedback exists, carried into the findings rather than retroactively described.

0 — Every cell is filled with a plausible-sounding description.

1 — Blanks exist but are not treated as findings.

2 — Blanks are visible and listed as findings.

3 — As adequate, and the blanks are ordered by how costly the missing cue is to the reader.

Repair: Re-examine each filled cell and ask what a first-time reader would actually perceive. Replace anything that describes your intent rather than a perceivable cue with a blank. Recheck: The corrected inventory with honest blanks.

**Touch availability was checked**

Adequate evidence: Each hover-dependent or cursor-dependent signifier marked as unavailable on touch, with what remains stated.

0 — Touch not considered.

1 — Mentioned generally without marking specific signifiers.

2 — Each affected signifier is marked and the remaining cue is stated.

3 — As adequate, and one control is redesigned so it no longer depends on hover at all.

Repair: Go through your signifier column and mark every entry that requires a pointer. For each, write what a phone reader perceives instead. Recheck: The marked signifier column with touch alternatives.

**Repairs state what the reader can now tell**

Adequate evidence: Two repairs, each with a before-and-after sentence describing the reader's knowledge, not the visual change.

0 — No repairs, or repairs described only visually.

1 — Repairs made but the reader's knowledge is not described.

2 — Both repairs state what the reader can now determine.

3 — As adequate, and one repair addresses a failure case, not only the success case.

Repair: Rewrite each repair as: before, the reader could not tell X; after, they can tell it because Y. Add a failure case if both your repairs assume success. Recheck: The two rewritten repairs including a failure case.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson classifies the failures you observed in Module 2.

**Review criteria:**

- Every control is inventoried across all three columns
- Blanks are preserved as findings, not filled in
- Touch availability was checked
- Repairs state what the reader can now tell

<details>
<summary>Reading, video and deeper explanation</summary>



[NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/).

</details>

## Lesson 4: Slips, mistakes and designing for the error you caused

Stable ID: m04-l04-v1. Core.

The instinct after watching someone fail is to add a warning. Warnings work on one kind of error and make the other kind worse, so the classification has to come first.

Bring: Your Module 2 session notes and every failure, hesitation or wrong turn you recorded there.

Starting route: Use genuine anonymised observations, or label these fictional failures: tapping the adjacent date, expecting promotions to be distance-sorted, losing form text after an error, and paying again after an unclear confirmation. Do not force an unknown intention into slip or mistake; plan the missing evidence.

- A classification table of observed failures with slips, mistakes and unclassified rows; blame-free rewrites alongside the originals; and one prevention and one recovery for each class with reasoning.

### Start with a clear task

Section: learn. Stable action: welcome.

Classify the failures observed in your Module 2 testing as slips or mistakes, and design one prevention and one recovery for each class, without relying on the reader being more careful.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

A slip is doing the wrong thing while intending the right thing: the goal was correct and the execution went astray, usually on a familiar, automatic task. Tapping the adjacent date, submitting before finishing, using the wrong one of two similar controls. Slips are properties of attention under normal conditions, and they respond to design that constrains, defaults and undoes.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

A mistake is doing the wrong thing on purpose, because the goal itself was formed from a wrong model. Booking the wrong session because two workshops share a name, or believing a save happened because the interface looked calm. Mistakes respond to clearer models, better naming, previews and feedback. Adding a confirmation dialogue to a mistake usually fails, because the reader confirms confidently — they were never uncertain.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Prevention and recovery are both required, and prevention has a ceiling. Constraints — disabling impossible dates, formatting input as it is typed, defaulting to the common case — remove whole classes of slip cheaply. But no design prevents everything, so recovery matters: undo is generally better than confirmation, because confirmation interrupts everyone to catch a few, while undo costs nothing until it is needed.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Blaming the reader is the default failure of error analysis, and it hides inside neutral-sounding language. “The user didn't read the instruction” describes a design that required reading an instruction. Rewrite every error observation so the subject is the design: not “they missed the toggle”, but “the toggle's state was not perceivable at a glance”. The rewritten sentence usually contains its own fix.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Two failures from one test looked identical and were not. One participant tapped “Reserve” before choosing a date, then said “oh, I meant to pick Saturday” — a slip, fixed by disabling the button until a date is selected. Another chose the Saturday session believing it was the beginners' one, because both were titled “Weekend Workshop” — a mistake, unaffected by any button state, fixed by distinguishing the titles and showing the level on the card.


### Get your practice ready

Section: learn. Stable action: workspace.

Use genuine anonymised observations, or label these fictional failures: tapping the adjacent date, expecting promotions to be distance-sorted, losing form text after an error, and paying again after an unclear confirmation. Do not force an unknown intention into slip or mistake; plan the missing evidence.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and classify the concepts

Section: practice-plan. Stable action: step-1-brief.

The question you will use to classify, written in your own words.

- Read the assigned article's sections on slips and mistakes. Write the distinguishing question you will use: was the intention correct?

**Start here:** Write the question as something you could ask about any failure in ten seconds.

**Enough:** The question is about intention, not about how bad the outcome was.

**Slip:** The intention was right and the action came out wrong: a mistyped digit, the wrong button pressed by accident.

**Mistake:** The intention itself was wrong, usually because the person’s model of the system was wrong. Doing it more carefully would not help.


### The question you will use to tell a slip from a mistake

Section: practice-plan. Stable action: write-test-question.

It is about the intention, not the outcome.

**Answer:** The question you will use to tell a slip from a mistake

It is about the intention, not the outcome.

<details>
<summary>Example</summary>

Example (made up): was the intention right and the action wrong (slip), or was the intention itself wrong (mistake)?

</details>


### Classify your observed failures

Section: practice-plan. Stable action: step-2-brief.

Every failure from your Module 2 notes classified, with unclassifiable ones kept.

- Take every failure from your Module 2 notes and classify it. Where you cannot tell, record it as unclassified and write what you would have needed to ask at the time.

**Start here:** Take each failure and ask what the person was trying to do at that moment.

**Enough:** At least one is classified as a mistake, or you can say why none is.

**Failure:** Any place the reader did not get what she intended, including a hesitation or a wrong turn, not only an outright error.

**Unclassified:** Kept as its own answer when you cannot tell what the person intended. It names a question for the next session.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Classifying two failures from a session, and getting the first one wrong.

**The observation:** She pressed Reserve, then immediately pressed Back. My note said “misclick”.

**Why I classified it as a slip:** It looked like an accident, and slips are the comfortable category: they suggest the design is fine and the finger was clumsy.

**What she actually said:** “I wanted to see if there were places left.” Her intention was to check availability, and Reserve was the only thing that looked like it would tell her.

**The reclassification:** A mistake. Her model of what Reserve does was wrong, and the design gave her nothing else to press.

**What that changed in the repair:** A confirmation dialogue would have caught nothing. Showing places remaining on the card removes the reason to press at all.

**Wrong turn:** The wrong turn is classifying by how it looked. Slips are comfortable because they blame the finger; mistakes point at your model of the system.

**Trade-off:** Classifying honestly produces more mistakes than slips, and mistakes are harder to fix than adding a warning.

**Unknown:** Still unknown: whether other people share that model of the button. One session cannot say how common it is.


### Failure 1 · what happened, and slip, mistake or unclassified

Section: practice-plan. Stable action: write-failure-1.

Write your answer for “Failure 1 · what happened, and slip, mistake or unclassified”. Use the task instructions below to decide what to include.

**Answer:** Failure 1 · what happened, and slip, mistake or unclassified



<details>
<summary>Example</summary>

Example (made up): she pressed Reserve intending to check availability. Intention wrong about what the button did — mistake.

</details>


### Failure 2 · what happened, and slip, mistake or unclassified

Section: practice-plan. Stable action: write-failure-2.

Write your answer for “Failure 2 · what happened, and slip, mistake or unclassified”. Use the task instructions below to decide what to include.

**Answer:** Failure 2 · what happened, and slip, mistake or unclassified




### Failure 3 · what happened, and slip, mistake or unclassified

Section: practice-plan. Stable action: write-failure-3.

Write your answer for “Failure 3 · what happened, and slip, mistake or unclassified”. Use the task instructions below to decide what to include.

**Answer:** Failure 3 · what happened, and slip, mistake or unclassified




### Failure 4 · what happened, and slip, mistake or unclassified

Section: practice-plan. Stable action: write-failure-4.

Write your answer for “Failure 4 · what happened, and slip, mistake or unclassified”. Use the task instructions below to decide what to include.

**Answer:** Failure 4 · what happened, and slip, mistake or unclassified




### For anything unclassified: what you would need to know

Section: practice-plan. Stable action: write-unclassified-why.

Write your answer for “For anything unclassified: what you would need to know”. Use the task instructions below to decide what to include.

**Answer:** For anything unclassified: what you would need to know




### Rewrite the blame out

Section: practice-plan. Stable action: step-3-brief.

Each observation rewritten with the design as the subject, keeping both versions.

- Rewrite each observation so the design is the subject. Keep both versions so the difference is visible.

**Start here:** Underline every word in your notes that describes the person rather than the screen.

**Enough:** No rewritten line contains a judgement about the person.

**Blame:** Any word that makes the person the cause: careless, lazy, did not bother, failed to notice.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied note from the same made-up session: “The participant carelessly skipped the materials section and then complained she did not know what to bring.”

Which rewrite is useful?

- The materials section sat below the Reserve button at this width, so it was not encountered before the decision, and nothing referred to it afterwards.
- The participant did not read the materials section, which is common behaviour.
- The materials section needs to be more prominent.
- The participant was in a hurry, which affected her reading.

<details>
<summary>After your attempt</summary>

The materials section sat below the Reserve button at this width, so it was not encountered before the decision, and nothing referred to it afterwards. — It names what the design did, where, and what followed. It is checkable and it points straight at a repair.

The participant did not read the materials section, which is common behaviour. — Softer wording, same blame, and now with a claim about people in general that one session cannot support.

The materials section needs to be more prominent. — That is a repair, not an observation. Written here it hides what actually happened.

The participant was in a hurry, which affected her reading. — Speculation about her state, and unfalsifiable. It also excuses the layout.

Rewrite each of your own observations so the design is the subject and the sentence could be checked by someone else.

</details>


### Each observation rewritten with the design as the subject, keeping the original beside it

Section: practice-plan. Stable action: write-rewritten.

Write your answer for “Each observation rewritten with the design as the subject, keeping the original beside it”. Use the task instructions below to decide what to include.

**Answer:** Each observation rewritten with the design as the subject, keeping the original beside it



<details>
<summary>Example</summary>

Example (made up): before — she did not notice the price. After — the price was placed below the fold at this width and the design gave no cue that it existed.

</details>


### Design prevention and recovery

Section: practice-plan. Stable action: step-4-brief.

A prevention and a recovery for one slip and one mistake.

- For one slip and one mistake, design a prevention and a recovery each. Prefer constraints and defaults over warnings, and undo over confirmation. State why for each choice.

**Start here:** For the slip, ask what would make the wrong action physically harder; for the mistake, ask what information was missing.

**Enough:** Neither intervention relies on the reader being more careful.

**Constraint:** Making the wrong action impossible or harder, rather than warning about it.

**Recovery:** What the person can do after the failure. Undo is usually worth more than a confirmation.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Designing the recovery for one slip, and writing one that only works during office hours.

**The slip:** She meant to book the Sunday class and tapped the Saturday one, sitting one row above it.

**My prevention:** More space between rows, and the day in bold on every row. Sensible, and it makes the wrong tap less likely rather than impossible.

**My recovery, first version:** “If you booked the wrong class, email the studio and we will move you.” Written down in the box, it looked like a recovery.

**What is wrong with it:** It costs her a message, a wait, and the worry that eighteen pounds has gone. The design tripped her and she does the work of getting up.

**What I designed instead:** A Change class link on the confirmation screen, live for as long as the studio can still move somebody, and a plain line saying when that closes.

**Wrong turn:** The wrong turn is counting a support route as a recovery. It exists, it is honest, and it moves the cost of your design’s failure onto the person who tripped over it.

**Trade-off:** A change the reader can make herself needs a rule about when it closes and a screen that states it. That is real product work, not a sentence of help text.

**Unknown:** Still unknown: how long the studio can actually move someone. Until somebody tells you, the recovery has a hole in it, and the honest thing is to say so on the screen.


### For one slip · the prevention

Section: practice-plan. Stable action: write-slip-prevention.

Prefer a constraint or a default over a warning.

**Answer:** For one slip · the prevention

Prefer a constraint or a default over a warning.


### For that slip · the recovery

Section: practice-plan. Stable action: write-slip-recovery.

Write your answer for “For that slip · the recovery”. Use the task instructions below to decide what to include.

**Answer:** For that slip · the recovery




### For one mistake · the prevention

Section: practice-plan. Stable action: write-mistake-prevention.

A mistake is a wrong intention, so the fix is usually information or a clearer model, not a guard.

**Answer:** For one mistake · the prevention

A mistake is a wrong intention, so the fix is usually information or a clearer model, not a guard.


### For that mistake · the recovery

Section: practice-plan. Stable action: write-mistake-recovery.

Write your answer for “For that mistake · the recovery”. Use the task instructions below to decide what to include.

**Answer:** For that mistake · the recovery




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You add a confirmation dialogue so people cannot get it wrong. What does that actually catch?

- Some slips, briefly, until people learn to dismiss it; it does nothing for a mistake.
- Both slips and mistakes, since it forces a pause.
- Mistakes mainly, since it makes people think about the consequence.

<details>
<summary>After your attempt</summary>

Some slips, briefly, until people learn to dismiss it; it does nothing for a mistake. — Someone whose intention is wrong confirms the wrong intention. The dialogue asks them to check a decision they believe is correct.

Both slips and mistakes, since it forces a pause. — A pause helps only if the person has reason to doubt themselves. A mistake feels correct from the inside.

Mistakes mainly, since it makes people think about the consequence. — It states a consequence they have already accepted, because their model says this is the right action.

Improve: Look at your interventions in step 4. If either is a warning or a confirmation, replace it with a constraint, a default or better information, and record it in step 5.

Check again: The slip repair changes what is possible; the mistake repair changes what the reader knows.

Answers to revisit: slip-prevention, mistake-prevention

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your notes say a participant was careless. Why rewrite it?

- Because “careless” cannot be designed for, while “the price was below the fold and nothing cued it” can.
- Because it is unkind to the participant.
- Only if the notes will be shared with others.

<details>
<summary>After your attempt</summary>

Because “careless” cannot be designed for, while “the price was below the fold and nothing cued it” can. — The rewrite is not politeness. It converts an unusable note into a specific, checkable statement about the design.

Because it is unkind to the participant. — It is unkind and that is not the working reason. The working reason is that blame ends the investigation.

Only if the notes will be shared with others. — You are the main reader, and you will act on what the note says. A blaming note tells you there is nothing to fix.

Improve: Rewrite any remaining blaming observation in step 3 with the design as the subject, keeping the original, and record it in step 5.

Check again: Both versions are present and the rewritten one names what the design did.

Answers to revisit: rewritten

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

One failure could be either a slip or a mistake and you cannot tell. What do you do?

- Record it as unclassified with what you would need to observe to decide.
- Classify it as a slip, since that is the safer assumption.
- Drop it, since an unclassified failure cannot be designed for.

<details>
<summary>After your attempt</summary>

Record it as unclassified with what you would need to observe to decide. — Forcing a classification invents evidence. Keeping it open names a specific question for the next session.

Classify it as a slip, since that is the safer assumption. — It is the comfortable assumption, and it leads to a warning that will not help if the intention was wrong.

Drop it, since an unclassified failure cannot be designed for. — It can be investigated, which is the point. Dropping it loses the clearest question you have.

Improve: Move any forced classification back to unclassified in step 2 and write what you would need to know, then record it in step 5.

Check again: Unclassifiable cases are preserved with the observation that would settle them.

Answers to revisit: failure-1, failure-2, failure-3, failure-4, unclassified-why

</details>


### Record and pause

Section: practice. Stable action: step-5-brief.

A failure you could not resolve, and the repair the Check questions asked for.

- Save the classification table, the rewritten observations and the four designs. Note any failure you could not classify and what that costs you.

**Start here:** Look for the failure where you still cannot tell what she was trying to do.

**Enough:** The entry says what you would need to observe to classify it.

**Unresolved:** A failure you could neither classify nor design for. Writing it down is what stops it quietly disappearing.

**Repair:** The change a Check question asked you to make, recorded so you can see what the checking actually altered.


### A failure you could not classify or design for, and why

Section: practice. Stable action: write-unresolved.

Write your answer for “A failure you could not classify or design for, and why”. Use the task instructions below to decide what to include.

**Answer:** A failure you could not classify or design for, and why




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson is optional and tests three named laws against your own work.


<details>
<summary>Optional hints and reference material</summary>

- Do not infer intent from a click alone. Mark uncertain classifications.
- A useful message explains the issue and a recoverable next step without blaming the person.

- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — The slips-versus-mistakes distinction and the prevention techniques, including constraints, defaults, confirmation and undo. Purpose: Gives the classification and the intervention repertoire this lesson applies. Free reading, no account. Verified 2026-09-06. Prevention techniques are options to choose between, not a checklist to apply wholesale. Fallback: R02.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Failures are classified with the intention test**

Adequate evidence: A table where each observed failure is marked slip or mistake with the intention reasoning stated.

0 — No classification.

1 — Failures labelled without reasoning.

2 — Each classification states the intention evidence behind it.

3 — As adequate, and one classification is revised after re-reading the session notes, with the reason for the change.

Repair: For each failure, write what the person appeared to be trying to do and how you know. Classify only after that sentence exists. Recheck: The table with intention reasoning per row.

**Unclassifiable cases are kept, not forced**

Adequate evidence: At least one honestly unclassified row, or a stated reason why every case was determinable, plus the question that would have resolved it.

0 — Every case forced into a class regardless of evidence.

1 — Unclassified cases dropped from the table.

2 — Unclassified cases are retained with the missing question named.

3 — As adequate, and the missing question is added to the next session's guide.

Repair: Re-examine any classification you made on thin evidence. Move it to unclassified and write the question you would ask to resolve it. Recheck: The table with unclassified rows and their questions.

**Observations are rewritten without blame**

Adequate evidence: Original and rewritten pairs where the rewritten version makes the design the subject.

0 — Observations blame the reader throughout.

1 — Some rewrites, but blame persists in softened form.

2 — Every observation has a design-subject rewrite alongside it.

3 — As adequate, and at least one rewrite reveals a fix that was not visible in the original phrasing.

Repair: Find every sentence whose subject is the participant and rewrite it with an interface element as the subject. Keep both versions side by side. Recheck: The paired original and rewritten observations.

**Interventions match the class and prefer constraint over warning**

Adequate evidence: Four interventions, each stating the class it targets and why a constraint, default or undo was chosen over a warning.

0 — Warnings or confirmations applied to everything.

1 — Interventions exist but are not matched to class.

2 — Each intervention matches its class with reasoning.

3 — As adequate, and one intervention is rejected as ineffective with the reason it would not work on that class.

Repair: For any confirmation dialogue you designed, ask whether the reader was uncertain. If they were not, replace it with a constraint, a clearer distinction or an undo. Recheck: The four interventions with class matching and reasoning.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson is optional and tests three named laws against your own work.

**Review criteria:**

- Failures are classified with the intention test
- Unclassifiable cases are kept, not forced
- Observations are rewritten without blame
- Interventions match the class and prefer constraint over warning

<details>
<summary>Reading, video and deeper explanation</summary>



[NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/).

</details>

## Lesson 5: UX laws and where they stop applying

Stable ID: m04-l05-v1. Optional.

Named laws are useful shorthand in a review and dangerous as authority. Learning them without their limits produces a designer who can quote a principle at every decision and cannot tell when it does not apply.

Bring: Any decision from this module you found hard to justify, plus the screens you have been working on.

Starting route: Choose a difficult interface decision. Fallback: a fictional class filter has many options, some essential for access. Consider making targets easier to reach, reducing decision burden and preserving familiar patterns. For each, write when following it blindly would make this task worse.

- Three law summaries with their assumed situations, an application to one real decision including a conflict, three concrete counterexamples from your own product, and three testable claim rewrites.

### Start with a clear task

Section: learn. Stable action: welcome.

Apply three named heuristics to one decision and produce, for each, a concrete situation in which following it would make the design worse.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

These heuristics are named regularities, not physical laws, and their sources present them without caveats. Fitts's law describes how target size and distance affect pointing time; Hick's law describes how the number of choices affects decision time; Jakob's law observes that people spend most of their time on other products and bring those expectations with them. Each is a genuine tendency and none of them settles a design decision on its own.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

The commonest misuse is applying a law outside the conditions it describes. Hick's law concerns choices among comparable options, so citing it to justify hiding navigation is a category error: a person looking for a specific item is not choosing between equivalent alternatives, and hiding the item makes their task harder while the law's number looks better. Ask what the law's underlying situation actually is before invoking it.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Laws conflict, and the conflict is where the design work lives. Jakob's law argues for the familiar pattern; a genuine improvement argues for the unfamiliar one. Fitts's law argues for a large, close target; the surrounding layout argues that a control which dominates the screen distorts the hierarchy. Naming both sides and choosing with a stated reason is stronger practice than quoting whichever supports the decision you had already made.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Every law is a hypothesis in your specific context. The honest form is: this principle suggests X, which predicts readers will do Y, which I could check by Z. That sentence is testable. “Hick's law says fewer options” is not, and it is the form that lets a confident designer win an argument they should have lost.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A filter panel with eleven options was cut to four, citing Hick's law. Task time got worse: the two most-used filters had been removed, so people scrolled the full list instead of filtering. The law was real; the situation was wrong, because these were not comparable alternatives but tools for narrowing a search. Restoring the two and grouping the rest under a “more filters” control served both the principle and the task.


### Get your practice ready

Section: learn. Stable action: workspace.

Choose a difficult interface decision. Fallback: a fictional class filter has many options, some essential for access. Consider making targets easier to reach, reducing decision burden and preserving familiar patterns. For each, write when following it blindly would make this task worse.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read three law pages

Section: practice-plan. Stable action: step-1-brief.

Each law with the regularity it describes and the situation it assumes.

- Read the assigned pages for Fitts's law, Hick's law and Jakob's law. For each write the regularity it describes and the situation it assumes.

**Start here:** Read the three pages and write the assumption before the recommendation.

**Enough:** Each entry names a condition that could fail to hold.

**Assumed situation:** The conditions under which the regularity was observed. Outside them the law is a slogan.


### Fitts · the regularity it describes, and the situation it assumes

Section: practice-plan. Stable action: write-fitts.

Write your answer for “Fitts · the regularity it describes, and the situation it assumes”. Use the task instructions below to decide what to include.

**Answer:** Fitts · the regularity it describes, and the situation it assumes




### Hick · the regularity it describes, and the situation it assumes

Section: practice-plan. Stable action: write-hicks.

Write your answer for “Hick · the regularity it describes, and the situation it assumes”. Use the task instructions below to decide what to include.

**Answer:** Hick · the regularity it describes, and the situation it assumes




### Jakob · the regularity it describes, and the situation it assumes

Section: practice-plan. Stable action: write-jakob.

Write your answer for “Jakob · the regularity it describes, and the situation it assumes”. Use the task instructions below to decide what to include.

**Answer:** Jakob · the regularity it describes, and the situation it assumes




### Apply them to one decision

Section: practice-plan. Stable action: step-2-brief.

One decision, what each law suggests, and where two disagree.

- Take one unresolved decision from your work. Write what each of the three laws suggests. Note where two of them disagree.

**Start here:** Choose the decision you have changed your mind about more than once.

**Enough:** The conflict is stated as a disagreement about what matters, not as a tie.

**Fitts’s law:** The regularity that a target is quicker to hit when it is bigger and nearer to where the hand already is.

**Hick’s law:** The regularity that choosing takes longer as the number of comparable options grows.

**Jakob’s law:** The regularity that people expect your product to work like the other products they already use.


### The decision you have found hard to justify

Section: practice-plan. Stable action: write-decision.

Write your answer for “The decision you have found hard to justify”. Use the task instructions below to decide what to include.

**Answer:** The decision you have found hard to justify




### What each of the three suggests you do

Section: practice-plan. Stable action: write-suggestions.

Write your answer for “What each of the three suggests you do”. Use the task instructions below to decide what to include.

**Answer:** What each of the three suggests you do




### Where two of them disagree, and what the disagreement is about

Section: practice-plan. Stable action: write-conflict.

A real conflict is more useful than three principles that happen to agree.

**Answer:** Where two of them disagree, and what the disagreement is about

A real conflict is more useful than three principles that happen to agree.


### Break each one

Section: practice-plan. Stable action: step-3-brief.

A specific counterexample for each law, taken from your own product.

- For each law, construct a specific situation from your own product where following it would make the design worse. Describe the situation, the harm and why the law does not apply there.

**Start here:** For each law, ask what it assumes and then find the place in your product where that assumption is false.

**Enough:** Each counterexample names a real element of your own work.

**Counterexample:** One specific situation in your own work where following the law would make the design worse. A single real case is worth more than a general doubt.

**Comparable options:** Options a reader would genuinely weigh against each other. A law about choosing among options says nothing about options that are not interchangeable.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Breaking Hick’s law on a class list.

**What the law suggested:** Fewer options means faster choosing, so cut the list from nine classes to three.

**What I did first:** Chose the three most popular. It felt decisive and the screen looked calmer immediately.

**What broke:** Two of the nine were the only evening classes. Anyone who works during the day now has nothing, and no way to discover that evening classes exist.

**Why the law did not apply:** It describes choosing among comparable options. These were not comparable: they differed on the one dimension that decided everything.

**What I did instead:** Kept all nine and grouped them by time of day. Choosing is still fast, because the grouping does the reduction without removing anything.

**Wrong turn:** The wrong turn is applying the law to a set of options that are not interchangeable. Removing an option someone needs does not speed up their decision; it ends it.

**Trade-off:** Keeping nine options means a longer screen, which is what the law was trying to avoid. Grouping pays most of that back.

**Unknown:** Still unknown: whether the grouping labels match how people actually think about time of day. That is a question for a person.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied application of Jakob’s law from the same made-up project: “Other booking sites put the price at the top right, so ours should too, because people expect it there.”

When would following that make the design worse?

- When the price at the top is incomplete, because materials are charged separately, so the familiar position teaches a wrong number.
- It would never be worse; matching conventions always reduces effort.
- When your design is more innovative than the sites you are copying.
- When you have no competitors to copy.

<details>
<summary>After your attempt</summary>

When the price at the top is incomplete, because materials are charged separately, so the familiar position teaches a wrong number. — Conventions carry meaning as well as position. Matching the position while changing the meaning is worse than being unfamiliar.

It would never be worse; matching conventions always reduces effort. — It reduces effort when the convention means the same thing. When it does not, familiarity makes the wrong reading more confident.

When your design is more innovative than the sites you are copying. — Innovation is not a reason on its own. The reason is whether the convention’s meaning holds in your case.

When you have no competitors to copy. — Readers bring expectations from every site they use, not only from competitors.

Write your own three counterexamples the same way: name the situation in your product where the assumption fails.

</details>


### Following Fitts would make it worse when…

Section: practice-plan. Stable action: write-counter-fitts.

Write your answer for “Following Fitts would make it worse when…”. Use the task instructions below to decide what to include.

**Answer:** Following Fitts would make it worse when…




### Following Hick would make it worse when…

Section: practice-plan. Stable action: write-counter-hicks.

Write your answer for “Following Hick would make it worse when…”. Use the task instructions below to decide what to include.

**Answer:** Following Hick would make it worse when…



<details>
<summary>Example</summary>

Example (made up): cutting the class list to three options makes choosing faster and removes the Saturday class most people actually want.

</details>


### Following Jakob would make it worse when…

Section: practice-plan. Stable action: write-counter-jakob.

Write your answer for “Following Jakob would make it worse when…”. Use the task instructions below to decide what to include.

**Answer:** Following Jakob would make it worse when…




### Convert to testable claims

Section: practice-plan. Stable action: step-4-brief.

Each application rewritten as a prediction you could check.

- Rewrite each application as: the principle suggests X, which predicts readers will do Y, which I could check by Z. Make each Z something you could actually do.

**Start here:** Finish “this predicts readers will …, which I could check by …”.

**Enough:** Every check names something observable, not a satisfaction question.

**Testable claim:** An application rewritten so that a real outcome could show it was wrong.

**Prediction:** What you expect readers to do if the principle holds here. It has to allow for the possibility that they do not.

**Observable:** Something you could watch or count, such as a tap, a wrong turn, or a step somebody skips, rather than an opinion they report.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Turning a Fitts application into a claim I could check, and writing a check that could never come back no.

**The application:** Fitts suggests a target is quicker to hit when it is bigger and closer to the hand, so I moved the Book button to the bottom of the phone screen and made it wider.

**My first rewrite:** “This predicts the button is easier to hit, which I could check by asking readers whether it feels easier.” It looked like a testable claim because it named a check.

**Why it was not one:** Nobody tells you a large button at the bottom of the screen feels hard to reach. There is no answer that would send me back to the design, so the check has one possible result.

**The version that could fail:** It predicts that people reaching for Book stop hitting the Change date link beside it. I could watch five people book on their own phone and count the mis-taps.

**What that exposed:** The risk was never the size of the button. It was the neighbour I had put under the same thumb, and my first claim pointed away from it.

**Wrong turn:** The tempting error is writing the check as a question about how the design feels. It is quick, it involves real people so it looks like research, and everyone agrees with you.

**Trade-off:** Watching five people book on their own phones costs an afternoon and access you may not have, and the claim it produces is narrow: it covers one button and one mistake. A feelings question could go out this evening and cover everything vaguely.

**Unknown:** Still unknown: whether mis-taps have anything to do with why people abandon the booking. Someone can hit the button first time and still leave for a reason this claim does not reach.


### Rewrite each application: the principle suggests X, which predicts readers will do Y, which I could check by Z

Section: practice-plan. Stable action: write-testable-claims.

Write your answer for “Rewrite each application: the principle suggests X, which predicts readers will do Y, which I could check by Z”. Use the task instructions below to decide what to include.

**Answer:** Rewrite each application: the principle suggests X, which predicts readers will do Y, which I could check by Z




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Are fewer options always better because of Hick’s law?

- No. It applies to comparable options being chosen among; removing an option someone needs ends their task rather than speeding it.
- Yes: choice time rises with the number of options, so reducing them always helps.
- Yes for navigation, no for content.

<details>
<summary>After your attempt</summary>

No. It applies to comparable options being chosen among; removing an option someone needs ends their task rather than speeding it. — The law describes a regularity under conditions. Outside them, fewer options simply means less available.

Yes: choice time rises with the number of options, so reducing them always helps. — Choice time is not the only cost. An absent option costs the whole task for the person who needed it.

Yes for navigation, no for content. — The distinction is not navigation versus content; it is whether the options are genuinely interchangeable for this reader.

Improve: Reread your Hick counterexample in step 3. If it is generic, replace it with a specific option in your own product whose removal would end someone’s task, and record the change in step 5.

Check again: The counterexample names a real option and the reader it would fail.

Answers to revisit: counter-hicks

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Two of the three laws point in opposite directions for your decision. What is the useful response?

- Say what the disagreement is about, then choose with a stated reason and record what you overrode.
- Follow the more established law.
- Find a compromise that partly satisfies both.

<details>
<summary>After your attempt</summary>

Say what the disagreement is about, then choose with a stated reason and record what you overrode. — A conflict makes the decision visible. Resolving it with a reason is judgement; averaging them is not.

Follow the more established law. — Age is not evidence about your case. The question is which assumption holds here.

Find a compromise that partly satisfies both. — Sometimes right, and often it produces a design that serves neither reason. Say which one you are prioritising.

Improve: If your conflict box in step 2 says the laws agree, look harder or say plainly that no conflict arose, then record it in step 5.

Check again: The resolution names a principle that was overridden and why.

Answers to revisit: conflict

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You wrote “this follows Fitts’s law” as the justification for a decision. What is missing?

- The prediction it makes about what readers will do, and how you could check it.
- A citation to the original research.
- Nothing: a well-established law is sufficient justification.

<details>
<summary>After your attempt</summary>

The prediction it makes about what readers will do, and how you could check it. — Naming a law is an appeal to authority. Turning it into a prediction makes it something your own work can confirm or refute.

A citation to the original research. — A citation makes the claim traceable and still not testable in your product.

Nothing: a well-established law is sufficient justification. — Established laws describe regularities under conditions. Your design either meets those conditions or does not, and only a prediction reveals which.

Improve: Rewrite each application in step 4 as suggestion, prediction and check, then record the change in step 5.

Check again: Every application names something observable that would show it was wrong.

Answers to revisit: testable-claims

</details>


### Decide and record

Section: practice. Stable action: step-5-brief.

Your resolved decision, and the repair the Check questions asked for.

- Resolve your decision, stating which principle you followed, which you overrode and why. Save the three counterexamples.

**Start here:** Say which principle you overrode and why the other mattered more here.

**Enough:** The resolution names a principle you deliberately did not follow.

**Override:** Deciding not to follow a principle, with the reason written down. It is different from forgetting the principle was there.

**Resolution:** Your decision plus the reasoning behind it: which principle you followed, which you set aside, and what made this case tip that way.


### Your decision, which principle you followed and which you overrode

Section: practice. Stable action: write-resolution.

Write your answer for “Your decision, which principle you followed and which you overrode”. Use the task instructions below to decide what to include.

**Answer:** Your decision, which principle you followed and which you overrode




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review, or move on. The next lesson turns requests into need statements.


<details>
<summary>Optional hints and reference material</summary>

- A principle suggests what to investigate; it does not supply a result.
- Reducing options may hide a necessary choice. Ask what your simplification removes.

- R31: [Laws of UX](https://lawsofux.com/) — Assigned pages only: fittss-law, hicks-law and jakobs-law, each read with its origins and takeaways. Purpose: Supplies the named regularities this lesson then bounds with counterexamples. Free reading, no account. Verified 2026-09-06. The site states these as laws and publishes no caveats; every limitation in this lesson is the course's own and must be presented that way. A printed poster is sold and also offered free; nothing is required. Fallback: R02.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Each law is stated with the situation it assumes**

Adequate evidence: Three summaries, each naming both the regularity and the conditions under which it holds.

0 — Laws restated as slogans.

1 — Regularities stated but assumed situations missing.

2 — All three include the situation the law assumes.

3 — As adequate, and one summary notes that the source itself publishes no limits.

Repair: For each law, write the sentence “this describes what happens when…” and complete it with the specific situation. Any law you cannot complete that sentence for has not been understood yet. Recheck: The three completed situation sentences.

**A genuine conflict between laws is identified**

Adequate evidence: One decision where two of the three point in different directions, with both directions stated.

0 — No conflict identified.

1 — A conflict asserted but only one side stated.

2 — Both directions are stated for a real decision.

3 — As adequate, and the resolution names what would have to be true for the overridden principle to win instead.

Repair: Take your decision and ask what each law would advise if it were the only consideration. If all three agree, choose a harder decision. Recheck: The decision with both directions stated.

**Counterexamples are specific and from your own work**

Adequate evidence: Three situations drawn from your own product where following the law causes a named harm.

0 — No counterexamples, or generic ones borrowed from the reading.

1 — Counterexamples exist but are hypothetical and unconnected to your work.

2 — All three come from your own product with a named harm.

3 — As adequate, and one counterexample is one you were about to commit before writing it down.

Repair: For each law, find a place in your own screens where applying it would remove something a reader needs. Describe the resulting harm concretely. Recheck: The three product-specific counterexamples.

**Applications are rewritten as testable claims**

Adequate evidence: Three rewrites in the suggests–predicts–check form, with checks that are actually feasible.

0 — Citations remain as assertions.

1 — Rewrites attempted but the check is not something you could do.

2 — All three are testable with feasible checks.

3 — As adequate, and one check is scheduled into a later module's testing work.

Repair: Rewrite any claim whose check requires resources you do not have into one that a single person attempting the task could resolve. Recheck: The three feasible testable claims.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review, or move on. The next lesson turns requests into need statements.

**Review criteria:**

- Each law is stated with the situation it assumes
- A genuine conflict between laws is identified
- Counterexamples are specific and from your own work
- Applications are rewritten as testable claims

<details>
<summary>Reading, video and deeper explanation</summary>



[Laws of UX](https://lawsofux.com/).

</details>

## Lesson 6: From requests to user needs

Stable ID: m04-l06-v1. Core.

Requests arrive as solutions. If you build them as stated you lose the ability to find a better response, and you also lose the ability to tell whether the request was ever grounded in anything.

Bring: Your Module 2 findings and any requests, suggestions or stakeholder asks you have collected since.

Starting route: Use real labelled requests, or mark these five as fictional practice: add reminders; add a map; add a saved list; add larger buttons; add a refund page. Convert each to a possible person, need and reason. These requests are not proof of a need; mark the resulting needs as assumptions.

- A five-row table giving each original request, its need statement, its evidence source or assumption label, plus two testing questions and one need belonging to a non-primary user.

### Start with a clear task

Section: learn. Stable action: welcome.

Convert five feature requests into evidence-linked need statements, and mark clearly which are supported by your Module 2 research and which remain assumptions.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

A need statement describes what someone must accomplish and why, without naming a solution. The standard shape — as a certain person, I need to do something, so that some outcome follows, with optional trigger and constraint — is useful precisely because it is hard to fill in honestly. If you cannot state the so-that, you probably have a preference rather than a need.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Needs and wants both matter but they are different inputs. Someone may want an email reminder; the underlying need is to know what to bring before leaving home, and email is one of several responses to it. Stating the need keeps the alternatives available — a reminder, a summary on the confirmation screen, a note in the calendar entry — and lets you choose by cost and evidence rather than by whoever asked loudest.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Needs run across the whole journey, not just the parts you designed. They include the moments before a service is used and after it ends, and they include people who are not the primary user: the organiser who has to prepare materials, the person answering questions when something goes wrong. A service that satisfies the visible user and breaks its own support staff has not met its needs.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

The rule that keeps this honest is that a need without research is an assumption wearing better clothes. Writing a request in need form makes it clearer, not truer. Mark every statement with its evidence source, and where there is none, keep it and label it — because an assumption you can see is one you can decide to test.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The organiser asked for a mandatory “I have read the instructions” checkbox. Converted: as an organiser, I need attendees to arrive with the right materials, so that sessions start on time. That reframing put three responses on the table — the checkbox, a materials summary on the confirmation screen, and a reminder the day before — and made it obvious that the checkbox is the only one that produces no evidence about whether anyone read anything.


### Get your practice ready

Section: learn. Stable action: workspace.

Use real labelled requests, or mark these five as fictional practice: add reminders; add a map; add a saved list; add larger buttons; add a refund page. Convert each to a possible person, need and reason. These requests are not proof of a need; mark the resulting needs as assumptions.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read the need statement format

Section: practice-plan. Stable action: step-1-brief.

The format written out, with what the so-that clause adds.

- Read the assigned page. Write the format with its optional parts, and note the difference the so-that clause makes.

**Start here:** Read the assigned page and write the format with an example of your own.

**Enough:** Your note says what changes when the so-that clause is missing.

**Need statement:** Who, what they need, and so that what. The last part is the outcome, and it is what stops the statement being a feature.


### The format, its optional parts, and what the so-that clause changes

Section: practice-plan. Stable action: write-format-note.

Write your answer for “The format, its optional parts, and what the so-that clause changes”. Use the task instructions below to decide what to include.

**Answer:** The format, its optional parts, and what the so-that clause changes




### Collect the requests

Section: practice-plan. Stable action: step-2-brief.

Five real requests in the words they were actually said.

- Gather five real requests, suggestions or asks — from your Module 2 sessions, from the organiser brief, or from your own backlog. Write each in the words it arrived in.

**Start here:** Look through your session notes and the brief before inventing any.

**Enough:** Each request names who said it.

**Request:** What somebody asked for, usually with a solution already inside it. The solution is worth keeping, because it shows you what they pictured.

**Verbatim:** The exact words somebody used, kept without tidying. Tidying quietly changes what was meant.


### Request 1 · as it was actually said, and who said it

Section: practice-plan. Stable action: write-request-1.

Keep the original wording, including the solution it names.

**Answer:** Request 1 · as it was actually said, and who said it

Keep the original wording, including the solution it names.

<details>
<summary>Example</summary>

Example (made up): “Add a reminder email the day before” — the studio owner.

</details>


### Request 2 · as it was actually said, and who said it

Section: practice-plan. Stable action: write-request-2.

Write your answer for “Request 2 · as it was actually said, and who said it”. Use the task instructions below to decide what to include.

**Answer:** Request 2 · as it was actually said, and who said it




### Request 3 · as it was actually said, and who said it

Section: practice-plan. Stable action: write-request-3.

Write your answer for “Request 3 · as it was actually said, and who said it”. Use the task instructions below to decide what to include.

**Answer:** Request 3 · as it was actually said, and who said it




### Request 4 · as it was actually said, and who said it

Section: practice-plan. Stable action: write-request-4.

Write your answer for “Request 4 · as it was actually said, and who said it”. Use the task instructions below to decide what to include.

**Answer:** Request 4 · as it was actually said, and who said it




### Request 5 · as it was actually said, and who said it

Section: practice-plan. Stable action: write-request-5.

Write your answer for “Request 5 · as it was actually said, and who said it”. Use the task instructions below to decide what to include.

**Answer:** Request 5 · as it was actually said, and who said it




### Convert to needs

Section: practice-plan. Stable action: step-3-brief.

Each request rewritten as a need with no solution in it, and any difficulty recorded.

- Rewrite each as a need statement with no solution in it. Where the so-that is hard to write, record that difficulty rather than inventing an outcome.

**Start here:** Write the who first, then what they need, then force yourself to finish “so that…”.

**Enough:** No need statement contains a page, a button, an email or a feature.

**So-that clause:** The last part of the statement, naming what changes for the person. Without it you have a feature with somebody’s name attached.

**Outcome:** What is different for the person once the need is met. Several different designs could achieve the same outcome, which is the point of naming it.

**Solution-free:** Written with no page, button, email or feature in it, so that more than one response could satisfy it.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Converting a stakeholder request, and finding out it had no outcome behind it.

**The request:** “Add a reminder email the day before.” Clear, reasonable, and already a solution.

**My first rewrite:** “Attendees need a reminder email so that they remember the class.” I had moved the words around and kept the email.

**What the so-that clause exposed:** Remembering the class is not the outcome; turning up prepared is. Once I wrote that, the email stopped being the obvious answer.

**The need I kept:** A first-time attendee needs to know what to bring in time to gather it, so that she can take part from the start.

**The one that would not resolve:** Another request was “make the site feel more premium”. I could not write a so-that clause without inventing one, so I recorded the difficulty instead.

**Wrong turn:** The wrong turn is rewriting the sentence while keeping the solution inside it. It looks like a need and it has already decided the answer.

**Trade-off:** Some requests will not convert, and saying so can be awkward with the person who made it. Recording the difficulty is more useful than a fabricated outcome.

**Unknown:** Still unknown: whether attendees would read a reminder at all. That assumption now sits in the evidence column.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied conversion from the same made-up project: “Attendees need a materials checklist on the booking page so that they can see the materials checklist before booking.”

What is wrong with it?

- The so-that clause repeats the solution, so the statement has no outcome and cannot be met any other way.
- It is too specific about the page.
- Nothing: it names who, what and why.
- It should say “users” rather than “attendees”.

<details>
<summary>After your attempt</summary>

The so-that clause repeats the solution, so the statement has no outcome and cannot be met any other way. — A circular outcome is the commonest failure. It looks complete and permits exactly one answer, which is the one you started with.

It is too specific about the page. — Specificity is not the fault; the fault is that the outcome restates the feature rather than naming what changes for the person.

Nothing: it names who, what and why. — It names who and what twice. The why is missing, disguised as a repetition.

It should say “users” rather than “attendees”. — The opposite: naming who they are is better. “Users” is the vaguer word.

Check each of your own so-that clauses: if it repeats the need, the outcome is missing.

</details>


### Need 1 · with no solution in it

Section: practice-plan. Stable action: write-need-1.

Write your answer for “Need 1 · with no solution in it”. Use the task instructions below to decide what to include.

**Answer:** Need 1 · with no solution in it



<details>
<summary>Example</summary>

Example (made up): a first-time attendee needs to know what to bring in time to gather it, so that she can take part from the start of the class.

</details>


### Need 2

Section: practice-plan. Stable action: write-need-2.

Write your answer for “Need 2”. Use the task instructions below to decide what to include.

**Answer:** Need 2




### Need 3

Section: practice-plan. Stable action: write-need-3.

Write your answer for “Need 3”. Use the task instructions below to decide what to include.

**Answer:** Need 3




### Need 4

Section: practice-plan. Stable action: write-need-4.

Write your answer for “Need 4”. Use the task instructions below to decide what to include.

**Answer:** Need 4




### Need 5

Section: practice-plan. Stable action: write-need-5.

Write your answer for “Need 5”. Use the task instructions below to decide what to include.

**Answer:** Need 5




### Any so-that clause you found hard to write, and why

Section: practice-plan. Stable action: write-hard-outcomes.

Difficulty here usually means the request has no outcome behind it. Record that rather than inventing one.

**Answer:** Any so-that clause you found hard to write, and why

Difficulty here usually means the request has no outcome behind it. Record that rather than inventing one.


### Mark the evidence

Section: practice-plan. Stable action: step-4-brief.

An evidence source or an assumption label for every need, and the consequence of the two riskiest assumptions being wrong.

- For each need, record the evidence source or mark it as an assumption. For the two most consequential assumptions, write the smallest question that would test them.

**Start here:** Go through the needs and try to name the session or note behind each.

**Enough:** At least one need is marked assumption, and its consequence is written down.

**Assumption:** A need nobody has evidenced. Marking it is not a weakness; leaving it unmarked is.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Marking the evidence behind five needs, and finding that two of my sources were my own memory of a conversation.

**My first pass:** Four needs marked with a session number and one marked assumption. The column looked strong and I nearly moved on.

**What one mark actually was:** Beside the materials need I had written “session 2”. Session 2 was where the studio owner said attendees turn up unprepared. That is her account of other people, not anything an attendee told me.

**The re-mark:** It became an assumption, with the source written beside it as the owner’s observation. Her knowledge is still on the page; it is just no longer standing in for evidence about behaviour.

**Choosing the two riskiest:** Not the two with the least evidence. The two where being wrong changes what gets built. If people do not read anything before the class, the materials list is in the wrong place entirely.

**The consequence I wrote:** “If this is wrong, the list moves off the booking page and onto the morning of the class, and most of what I have planned changes.” That sentence is what makes the mark worth having.

**Wrong turn:** The tempting error is writing a session number beside a need without checking who said it and whether they were speaking about themselves. A source that names a session looks evidenced, and second-hand impressions pass straight through.

**Trade-off:** Marking honestly can leave one line in the evidenced column and four in the assumption column, and that page is uncomfortable to show anyone. It also makes the argument for building thinner than it looked yesterday.

**Unknown:** Still unknown: whether the owner is right. She may be describing exactly what happens. The mark records that nobody has checked, not that she is wrong.


### For each need: the evidence source, or the word assumption

Section: practice-plan. Stable action: write-evidence-marks.

Write your answer for “For each need: the evidence source, or the word assumption”. Use the task instructions below to decide what to include.

**Answer:** For each need: the evidence source, or the word assumption




### For the two most consequential assumptions: what would happen if each is wrong

Section: practice-plan. Stable action: write-consequential-assumptions.

Write your answer for “For the two most consequential assumptions: what would happen if each is wrong”. Use the task instructions below to decide what to include.

**Answer:** For the two most consequential assumptions: what would happen if each is wrong




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The studio owner knows the business well and asks for a reminder email. Is that a requirement?

- It is a strong lead about a real problem, and it is not evidence about behaviour until something confirms it.
- Yes: the person who runs the business is the authority on what it needs.
- No: only research findings count as requirements.

<details>
<summary>After your attempt</summary>

It is a strong lead about a real problem, and it is not evidence about behaviour until something confirms it. — Their knowledge is genuine and it is knowledge of the business, not of what attendees do. Treat the request as a pointer to a need worth investigating.

Yes: the person who runs the business is the authority on what it needs. — They are the authority on constraints and goals. What attendees do is a different question that their position does not answer.

No: only research findings count as requirements. — Too dismissive. A stakeholder request often points at a real pattern they have seen many times; it just has to be converted and checked.

Improve: Check your evidence marks in step 4. Any need traceable only to a stakeholder request should be marked as an assumption with its consequence, then record the change in step 5.

Check again: Requests and evidence are distinguished in the evidence column.

Answers to revisit: evidence-marks, consequential-assumptions

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your need statement reads “Attendees need a reminder email so that they receive a reminder.” What is wrong?

- The outcome repeats the solution, so only one response can ever satisfy it.
- Nothing, if the reminder is what the stakeholder asked for.
- It should specify the timing of the reminder.

<details>
<summary>After your attempt</summary>

The outcome repeats the solution, so only one response can ever satisfy it. — The so-that clause exists to open the field. Circular, it closes it and hides that no outcome was identified.

Nothing, if the reminder is what the stakeholder asked for. — Then it is the request rewritten, and the conversion has done no work.

It should specify the timing of the reminder. — More detail about the solution moves further from the need.

Improve: Rewrite any circular so-that clause in step 3 to name what changes for the person, then record the change in step 5.

Check again: Each so-that clause names an outcome that several different responses could achieve.

Answers to revisit: need-1, need-2, need-3, need-4, need-5

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You could not write a so-that clause for one request. What should you do?

- Record the difficulty as a finding: the request may have no outcome behind it, which is worth knowing.
- Write the most plausible outcome so the table is complete.
- Drop the request from the list.

<details>
<summary>After your attempt</summary>

Record the difficulty as a finding: the request may have no outcome behind it, which is worth knowing. — Inventing an outcome to complete the table manufactures a justification. The gap is a real and useful result.

Write the most plausible outcome so the table is complete. — That is a fabricated need, and it will be quoted later as though someone wanted it.

Drop the request from the list. — Dropping it hides a request that will come back. Keep it with the difficulty recorded.

Improve: Fill the hard-outcomes box in step 3 with any request you could not convert and why, then record it in step 5.

Check again: Unconvertible requests are kept with the reason, not silently completed.

Answers to revisit: hard-outcomes

</details>


### Widen and save

Section: practice. Stable action: step-5-brief.

A need belonging to someone other than the primary user, and the repair the Check questions asked for.

- Add one need belonging to someone other than the primary user. Save the request-to-need table with its evidence column.

**Start here:** Ask who else touches this service and what the design costs them.

**Enough:** The other person is named by role and their need is not simply “fewer questions”.

**Primary user:** The person the design is mainly for. Naming them makes it obvious that other people are affected as well.

**Role:** Who somebody is in relation to the service, such as the person who runs the class or answers the phone. Naming the role keeps their need specific.


### One need belonging to someone other than the primary user

Section: practice. Stable action: write-other-need.

The person who runs the class, the person who answers the phone, the person who cleans up afterwards.

**Answer:** One need belonging to someone other than the primary user

The person who runs the class, the person who answers the phone, the person who cleans up afterwards.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson writes a value proposition for your strongest need and states what it costs.


<details>
<summary>Optional hints and reference material</summary>

- A need statement describes what someone must accomplish, not the control they asked for.
- Keep the original request beside the translation so you can explain what changed.

- R35: [GOV.UK: start by learning user needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs) — The whole page, particularly the statement format and the needs-versus-wants distinction. Purpose: Supplies an operational format for stating needs without naming solutions. Free reading, no account. Verified 2026-09-06. It is written for government services; the format transfers, the examples are contextual. Fallback: R08.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Statements contain no solution**

Adequate evidence: Five need statements in which no interface element, feature name or channel appears.

0 — Statements restate the requested feature.

1 — Some statements are solution-free; others name a mechanism.

2 — All five are free of solutions.

3 — As adequate, and each need is accompanied by at least two candidate responses so the alternatives are visible.

Repair: Scan each statement for nouns naming a mechanism — email, checkbox, button, notification — and rewrite around the outcome instead. Recheck: The five rewritten statements.

**Every need has an evidence source or an assumption label**

Adequate evidence: An evidence column with a specific source, such as a named session observation, or an explicit assumption label.

0 — No evidence column.

1 — Column exists but entries are vague, such as “research” or “obvious”.

2 — Each row names a specific source or is labelled an assumption.

3 — As adequate, and the strength of each source is characterised, such as one participant's account rather than a pattern.

Repair: For each need, name the exact observation or note it came from. If you cannot point to one, change the entry to assumption. Recheck: The evidence column with specific sources or honest labels.

**Difficulty writing an outcome is recorded, not concealed**

Adequate evidence: At least one recorded case where the so-that clause was hard or impossible, kept as a finding.

0 — All outcomes written smoothly with no difficulty noted, despite thin inputs.

1 — Difficulty mentioned but the outcome was invented anyway.

2 — A difficult case is retained with the difficulty stated.

3 — As adequate, and the difficulty is turned into a question for whoever made the request.

Repair: Re-read your outcomes and mark any you supplied yourself rather than heard. Replace each with the recorded difficulty and a question. Recheck: The marked outcomes and the resulting question.

**A non-primary user's need is included**

Adequate evidence: One need belonging to an organiser, supporter or other affected person, stated in the same format.

0 — Only primary-user needs.

1 — Another person mentioned but not expressed as a need.

2 — A full need statement for a non-primary user.

3 — As adequate, and a tension between that need and a primary-user need is identified.

Repair: List everyone affected when the service works and when it fails, pick one who is not the primary user, and write their need in full. Recheck: The added need statement and any tension identified.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson writes a value proposition for your strongest need and states what it costs.

**Review criteria:**

- Statements contain no solution
- Every need has an evidence source or an assumption label
- Difficulty writing an outcome is recorded, not concealed
- A non-primary user's need is included

<details>
<summary>Reading, video and deeper explanation</summary>



[GOV.UK: start by learning user needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs).

</details>

## Lesson 7: Value under constraint: who gains, who pays

Stable ID: m04-l07-v1. Core.

Value is the argument that a design deserves to exist, and it is usually written as a list of benefits with no costs — which is why it convinces nobody who has to fund or build it.

Bring: Your need statements with their evidence marks, and the contradictions and error findings from earlier in this module.

Starting route: Bring your strongest need. Fallback assumption: a first-time attendee needs to know materials before travelling. Compare showing a list with asking the studio or doing nothing. State who gains, who pays and who is excluded; keep the assumed baseline distinct from observed behaviour.

- A baseline description of today's behaviour, a value proposition with an explicit comparison, a three-part cost list, and a constraint list marked fixed or changeable.

### Start with a clear task

Section: learn. Stable action: welcome.

Write a value proposition for one response to your strongest need, and state explicitly what it costs — to the reader, to the organisation and to the people it does not serve.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

A value proposition states who it is for, what changes for them, and why this response rather than another. The comparison is the part most often skipped: value is relative to what someone does today, including doing nothing. If your response is only slightly better than the workaround people already have, that is the honest finding, not a reason to write a stronger adjective.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Every response has costs, and naming them is what makes the proposition credible. A reader may pay in extra steps, in learning, in giving up information, or in losing something the old way allowed. An organisation pays in build effort, support load and ongoing maintenance. A proposition with no costs listed has not been thought through; it has been sold.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Constraints are the boundary of the argument, and they are not the same as preferences. Time, budget, the technology already in place, legal obligations, the languages and devices your audience actually uses — these limit what can be considered. Preferences masquerade as constraints constantly, so write each one down and mark whether it could change and what it would take.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Discovery work exists to make this argument honest before anyone builds. Its purpose is to understand the problem, the constraints and whether there is a case for continuing at all, including the legitimate outcome of deciding not to proceed. Being able to argue that something should not be built is a product skill, not a failure of one.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- For the need “attendees arrive with the right materials”, three responses were compared against doing nothing. A checkbox costs almost nothing to build and produces no change in behaviour and no evidence. A materials summary on the confirmation screen costs a little and reaches everyone who books. A day-before reminder reaches people at the right moment, costs a message channel and ongoing support, and fails for anyone whose contact details are wrong. The summary won on cost per unit of benefit, with the reminder recorded as the next candidate if evidence showed timing mattered more than availability.


### Get your practice ready

Section: learn. Stable action: workspace.

Bring your strongest need. Fallback assumption: a first-time attendee needs to know materials before travelling. Compare showing a list with asking the studio or doing nothing. State who gains, who pays and who is excluded; keep the assumed baseline distinct from observed behaviour.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read discovery's purpose

Section: practice-plan. Stable action: step-1-brief.

What discovery is for, including what stopping means.

- Read the assigned page. Write what discovery is for, including what deciding not to continue means.

**Start here:** Read the assigned page and write what a decision not to continue would mean here.

**Enough:** Your note treats stopping as a legitimate result.

**Discovery:** Finding out whether a problem is worth solving and how. Deciding not to continue is a successful outcome, not a failure.


### What discovery is for, including what deciding not to continue means

Section: practice-plan. Stable action: write-discovery-note.

Write your answer for “What discovery is for, including what deciding not to continue means”. Use the task instructions below to decide what to include.

**Answer:** What discovery is for, including what deciding not to continue means




### Establish the baseline

Section: practice-plan. Stable action: step-2-brief.

Your strongest need and an accurate description of what people do today.

- For your strongest need, write what people do today, including doing nothing. Describe the workaround accurately rather than dismissively.

**Start here:** Ask what someone did the last time they had this problem, and write that.

**Enough:** The baseline includes at least one thing that already works reasonably well.

**Baseline:** What people already do about this problem today, including doing nothing. It is the thing any response has to beat.

**Workaround:** The way somebody copes now without your design, such as asking a friend or borrowing at the door. Workarounds are usually fast and already trusted.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Writing the baseline for the materials problem, and getting it wrong first.

**My first baseline:** “Currently there is no way to find out what to bring.” Clean, and it made my proposal look essential.

**Why it was false:** People manage. They text a friend, they ask at reception, or they turn up and borrow. The problem is real and it is not a vacuum.

**What the accurate version changed:** My response now has to beat texting a friend, which is fast, personal and already trusted. That is a higher bar than beating nothing.

**What it exposed:** The studio already lends aprons. For a large part of the need, the workaround is entirely adequate and my proposal adds a screen for nothing.

**What survived:** The narrower need: things the studio cannot lend, like a sketchbook, where arriving without it costs the first twenty minutes.

**Wrong turn:** The wrong turn is describing the baseline as nothing. It makes the proposition look necessary and hides the workaround it actually has to beat.

**Trade-off:** An accurate baseline shrinks the proposal, which is less exciting to present. It is what stops you building something people already have a better answer for.

**Unknown:** Still unknown: how many people use the borrow-an-apron route. One session cannot say, and the proposition should not pretend otherwise.


### Your strongest need, copied with its evidence mark

Section: practice-plan. Stable action: write-need-chosen.

Write your answer for “Your strongest need, copied with its evidence mark”. Use the task instructions below to decide what to include.

**Answer:** Your strongest need, copied with its evidence mark




### What people actually do today, including doing nothing

Section: practice-plan. Stable action: write-baseline.

Describe the workaround accurately. It is your real competitor.

**Answer:** What people actually do today, including doing nothing

Describe the workaround accurately. It is your real competitor.

<details>
<summary>Example</summary>

Example (made up): she texts a friend who took the class last year, or turns up and borrows an apron from the studio.

</details>


### Write the proposition

Section: practice-plan. Stable action: step-3-brief.

Who it is for, what changes, and why this response compared with the baseline.

- State who it is for, what changes, and why this response rather than the alternatives. Compare against the baseline explicitly.

**Start here:** Write the comparison as “compared with texting a friend, this…”.

**Enough:** The why-this line mentions the baseline explicitly.

**Value proposition:** A short statement of who a response is for, what changes for them, and why this response rather than what they do now.

**Alternative:** Another response that could meet the same need, including a much cheaper one and doing nothing at all.

**Comparison:** Setting your response beside the baseline and the alternatives. Saying it is better is an assertion; saying better than what, and in what way, is a comparison.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Writing the proposition for the sketchbook problem, and describing the feature instead of the change.

**My first draft:** “For attendees. A materials list on the booking page. Better than not having one.” Three lines, and every one of them was about the thing I wanted to build.

**Who it was really for:** “Attendees” includes the regular who owns everything already and knows what the room has. The person with this problem is someone booking a first class in a craft she has not tried.

**Rewriting what changes:** My line described the page. The change for her is that she finds out on the evening she books, while the shops are still open, rather than at the door on the day.

**Why this rather than the alternatives:** Texting a friend works well and is faster than anything I could build. A first-timer in an unfamiliar craft has nobody to text. That absence is the whole reason the response exists.

**What narrowed:** The proposition now covers first-timers in unfamiliar classes. Regulars gain very little, and I stopped writing sentences that implied they did.

**Wrong turn:** The tempting error is writing the what-changes line as a description of the feature. It reads like a benefit, it takes ten seconds, and nobody can argue with it because it says nothing about a person.

**Trade-off:** A proposition for first-timers in unfamiliar classes is small, and somebody will ask whether that is worth building anything for. The wide version sounded like it served everybody and could not be checked against anybody.

**Unknown:** Still unknown: how many of the studio’s bookings are first classes in an unfamiliar craft. That is a question about numbers, and the proposition should not answer it by implying the group is large.


### Who it is for

Section: practice-plan. Stable action: write-who-for.

Write your answer for “Who it is for”. Use the task instructions below to decide what to include.

**Answer:** Who it is for




### What changes for them

Section: practice-plan. Stable action: write-what-changes.

Write your answer for “What changes for them”. Use the task instructions below to decide what to include.

**Answer:** What changes for them




### Why this response rather than the alternatives, compared with the baseline

Section: practice-plan. Stable action: write-why-this.

Compare. An assertion that it is better is not a comparison.

**Answer:** Why this response rather than the alternatives, compared with the baseline

Compare. An assertion that it is better is not a comparison.


### Write the costs

Section: practice-plan. Stable action: step-4-brief.

Costs to the reader, to the organisation, and to anyone it does not serve.

- List costs to the reader, to the organisation, and to anyone the response does not serve or actively disadvantages. Be specific.

**Start here:** Write the third column first; it is the one that gets skipped.

**Enough:** The third column names a real group, not “edge cases”.

**Cost bearer:** Whoever pays for the change in money, time, attention or lost access. It is rarely only the organisation.


### Try a supplied example

Section: practice-plan. Stable action: step-4-try.

A supplied proposal from the same made-up project: replace the printed materials sheet at reception with a link in the confirmation email, because it is cheaper to keep up to date.

Which cost is most easily missed and most important to record?

- The cost to people who do not use email or do not have a phone with them, who previously got the sheet at reception.
- The cost to the organisation of writing the email content.
- The cost to the reader of opening an email.
- There is no cost: the proposal is cheaper and more current.

<details>
<summary>After your attempt</summary>

The cost to people who do not use email or do not have a phone with them, who previously got the sheet at reception. — Removing the old route disadvantages a group that used it. That cost is invisible in the proposal because those people are not the ones being designed for.

The cost to the organisation of writing the email content. — Real and small, and it is the cost the organisation will notice by itself.

The cost to the reader of opening an email. — Worth noting and minor compared with losing the only route you had.

There is no cost: the proposal is cheaper and more current. — Cheaper for the studio, and the saving is paid by whoever relied on the sheet.

Write your own third column the same way: who used the old route, and what happens to them.

</details>


### Cost to the reader

Section: practice-plan. Stable action: write-cost-reader.

Attention, steps, a decision they now have to make.

**Answer:** Cost to the reader

Attention, steps, a decision they now have to make.


### Cost to the organisation

Section: practice-plan. Stable action: write-cost-organisation.

Money, staff time, maintenance, something they must keep up to date.

**Answer:** Cost to the organisation

Money, staff time, maintenance, something they must keep up to date.


### Cost to anyone it does not serve, or actively disadvantages

Section: practice-plan. Stable action: write-cost-unserved.

Write your answer for “Cost to anyone it does not serve, or actively disadvantages”. Use the task instructions below to decide what to include.

**Answer:** Cost to anyone it does not serve, or actively disadvantages



<details>
<summary>Example</summary>

Example (made up): someone without a smartphone now gets less information than before, because the studio stops printing the list.

</details>


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your response genuinely helps readers. Is that enough to justify building it?

- No. Helping is necessary and not sufficient: a cheaper response, or the existing workaround, may serve the need well enough.
- Yes: user benefit is the point of design work.
- Yes, provided the organisation can afford it.

<details>
<summary>After your attempt</summary>

No. Helping is necessary and not sufficient: a cheaper response, or the existing workaround, may serve the need well enough. — The comparison is against the baseline and the alternatives, not against nothing. Helping while being the wrong thing to build is common.

Yes: user benefit is the point of design work. — Benefit at any cost, ignoring who pays and what already works, is how effort goes into things nobody needed.

Yes, provided the organisation can afford it. — Affordability is one cost among several, and it says nothing about whether the workaround already suffices.

Improve: Reread your why-this line in step 3. If it does not compare against the baseline and at least one alternative, rewrite it and record the change in step 5.

Check again: The proposition compares rather than asserts.

Answers to revisit: why-this

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your baseline says “currently there is no way to do this.” What is likely wrong?

- People almost always have a workaround, and it is the thing your response actually has to beat.
- Nothing, if the feature genuinely does not exist yet.
- It is fine as long as research confirmed it.

<details>
<summary>After your attempt</summary>

People almost always have a workaround, and it is the thing your response actually has to beat. — An empty baseline makes any proposal look necessary. The workaround is usually fast, trusted, and already in place.

Nothing, if the feature genuinely does not exist yet. — The feature not existing is not the same as the need going unmet. People solve it some other way.

It is fine as long as research confirmed it. — Research rarely confirms an absence of coping behaviour; it usually reveals more of it.

Improve: Rewrite your baseline in step 2 to describe what people actually do, including asking someone or doing nothing, then record it in step 5.

Check again: The baseline names at least one existing workaround.

Answers to revisit: baseline

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You listed “must work on mobile” as a constraint. Is it?

- Probably a decision rather than a constraint; if it could be changed by someone deciding, mark it changeable and say what changing it would require.
- Yes: most readers are on mobile, so it cannot change.
- No: nothing is truly fixed, so the list is meaningless.

<details>
<summary>After your attempt</summary>

Probably a decision rather than a constraint; if it could be changed by someone deciding, mark it changeable and say what changing it would require. — The distinction matters because constraints stop conversation and preferences should not. Marking it honestly keeps the option visible.

Yes: most readers are on mobile, so it cannot change. — That is a strong reason for the decision, which is what makes it a decision.

No: nothing is truly fixed, so the list is meaningless. — Some things genuinely are fixed within your horizon, such as a legal requirement or a budget already spent.

Improve: Go through your constraint list in step 5 and mark each fixed or changeable, adding what changing it would take, then record the change.

Check again: Every constraint carries a mark and a reason.

Answers to revisit: constraints

</details>


### List constraints and save

Section: practice. Stable action: step-5-brief.

Constraints separated from preferences, and the repair the Check questions asked for.

- Write your constraints and mark each as fixed or changeable with what changing it would require. Save all four artefacts.

**Start here:** For each constraint, ask what it would take to change it. If you can answer, it is changeable.

**Enough:** At least one thing you first called a constraint is marked changeable.

**Constraint:** Something that genuinely cannot change now, with a reason. If it could change given a decision, it is a preference.


### Each constraint, marked fixed or changeable, with what changing it would require

Section: practice. Stable action: write-constraints.

A preference is not a constraint. Say which is which.

**Answer:** Each constraint, marked fixed or changeable, with what changing it would require

A preference is not a constraint. Say which is which.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The last lesson defines the smallest build that could change your decision.


<details>
<summary>Optional hints and reference material</summary>

- Include learning, maintenance and support effort alongside money.
- A fictional constraint trains reasoning. Do not present it as a real organizer requirement.

- R07: [GOV.UK: how discovery works](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) — The purpose of discovery, understanding constraints, and deciding what happens next including stopping. Purpose: Establishes that arguing against building is a legitimate outcome and how constraints bound the argument. Free reading, no account. Verified 2026-09-06. Written for government delivery phases; take the reasoning, not the phase names as a mandatory process. Fallback: R19.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The baseline describes today accurately**

Adequate evidence: A description of the current behaviour or workaround, including its genuine advantages.

0 — No baseline.

1 — A baseline that only describes the current state as broken.

2 — The baseline is accurate and names at least one advantage of the current way.

3 — As adequate, and the baseline is sourced to something observed rather than assumed.

Repair: Write what people currently do and then write why it persists. Anything that survives without design attention usually has a real advantage; name it. Recheck: The baseline with its advantages named.

**The proposition compares rather than asserts**

Adequate evidence: An explicit comparison with at least two alternatives including doing nothing, on stated grounds.

0 — Benefits asserted with no comparison.

1 — Alternatives mentioned but not compared on any stated basis.

2 — A comparison against alternatives including doing nothing, on stated grounds.

3 — As adequate, and the grounds include cost relative to benefit rather than benefit alone.

Repair: List your alternatives in a table with one column per ground of comparison, and fill the doing-nothing row honestly. Recheck: The comparison table with a completed doing-nothing row.

**Costs are named for three groups**

Adequate evidence: Specific costs to readers, to the organisation, and to people the response does not serve or disadvantages.

0 — No costs listed.

1 — Costs listed for one group only, usually build effort.

2 — Specific costs for all three groups.

3 — As adequate, and one cost is identified as potentially disqualifying with what would have to change.

Repair: For each group, ask what they lose or must now do that they did not before. If a group appears to lose nothing, you have probably not identified who is excluded. Recheck: The three-part cost list.

**Constraints are separated from preferences**

Adequate evidence: A constraint list where each entry is marked fixed or changeable, with what changing it would require.

0 — Constraints and preferences are mixed with no distinction.

1 — A list exists but nothing is marked.

2 — Each entry is marked with what changing it would take.

3 — As adequate, and at least one item initially recorded as a constraint is reclassified as a preference.

Repair: Take each constraint and ask who could change it and at what cost. Anything you or your team could decide differently this week is a preference. Recheck: The marked constraint list with at least one reclassification considered.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The last lesson defines the smallest build that could change your decision.

**Review criteria:**

- The baseline describes today accurately
- The proposition compares rather than asserts
- Costs are named for three groups
- Constraints are separated from preferences

<details>
<summary>Reading, video and deeper explanation</summary>



[GOV.UK: how discovery works](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works).

</details>

## Lesson 8: The smallest thing that could change your decision

Stable ID: m04-l08-v1. Core.

“Minimum viable product” has become a name for a small first release. Its useful meaning is narrower and much more demanding: the smallest thing that resolves the uncertainty you would otherwise be betting on.

Bring: Your value proposition, cost list, constraint list and the assumptions marked in your need statements.

Starting route: Choose an assumption whose failure would change your decision. Fallback: attendees notice a materials list on a ticket. A paper ticket may test noticing; a full booking app is unnecessary. Define continue, redirect and stop signals before any attempt, and record an honest no-participant route.

- A ranked assumption list with reasoning, a description of the smallest build with each element justified, a stopping rule written before building, and a boundary list mapping unanswerable questions to later modules.

### Start with a clear task

Section: learn. Stable action: welcome.

Define the smallest build that would resolve your riskiest assumption, state in advance what result would stop the work, and record what the build cannot tell you.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Start from the riskiest assumption rather than from a feature list. The riskiest assumption is the one that combines weak evidence with a serious consequence if wrong — not the one that is most technically interesting or easiest to test. If your value proposition depends on people noticing a summary at the moment they pack their bag, that is the assumption to attack, and building the summary beautifully does not attack it.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

The build should be just complex enough to let you test the idea, and no more. It need not cover the whole journey, need not be production quality, and need not be code at all: a paper sequence, a clickable set of static screens, a manual process behind a form, or a message you send yourself can each resolve a specific uncertainty. The fidelity should be set by the question, not by what looks impressive.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Decide the stopping rule before you build. Write what result would make you continue, what would make you change direction, and what would make you stop entirely. Written afterwards, any result can be read as encouraging, and it usually is — which is how a team ends up building something nobody wanted while pointing at a chart that never had a threshold.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Every small build has a boundary, and naming it is part of the deliverable. A prototype tested with three people who agreed to help tells you about comprehension and obvious obstacles; it tells you nothing about demand, frequency, retention or what happens at scale. Say what it cannot answer, and say which later module — analytics and experiments, or research at greater depth — is where that question belongs.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The riskiest assumption behind the materials summary was that attendees look for preparation information at all before travelling — not that a summary would be readable. The smallest build was therefore not a summary screen but a one-question message sent to five people who had recently booked, asking what they did before attending. The stopping rule was written first: if fewer than two described looking for information beforehand, the summary drops down the list and the reminder becomes the candidate instead. The result could not establish frequency across all attendees, and the write-up said so.


### Get your practice ready

Section: learn. Stable action: workspace.

Choose an assumption whose failure would change your decision. Fallback: attendees notice a materials list on a ticket. A paper ticket may test noticing; a full booking app is unnecessary. Define continue, redirect and stop signals before any attempt, and record an honest no-participant route.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and rank

Section: practice-plan. Stable action: step-1-brief.

Assumptions ranked by evidence strength against consequence, and the riskiest named.

- Read the assigned page on testing riskiest assumptions. Then rank your assumptions by evidence strength against consequence, and pick the top one.

**Start here:** Bring the assumption marks from the need statements and put the consequence beside each.

**Enough:** The riskiest is not simply the easiest to test.

**Riskiest assumption:** The one where you know least and being wrong costs most. Not the one that is quickest to check.


### Each assumption: how strong the evidence is, and what it would cost to be wrong

Section: practice-plan. Stable action: write-ranking.

Rank by the two together, not by which is easiest to check.

**Answer:** Each assumption: how strong the evidence is, and what it would cost to be wrong

Rank by the two together, not by which is easiest to check.


### The riskiest one

Section: practice-plan. Stable action: write-riskiest.

Write your answer for “The riskiest one”. Use the task instructions below to decide what to include.

**Answer:** The riskiest one




### Design the smallest build

Section: practice-plan. Stable action: step-2-brief.

The smallest build that could resolve it, with every element justified.

- Describe the smallest thing that could resolve that assumption. Justify why each element is necessary and remove anything that is not.

**Start here:** Ask what the cheapest possible thing is that would change your mind about the riskiest assumption.

**Enough:** Every element of the build is there because removing it would stop the test working.

**Smallest build:** The cheapest thing you could make that would change your mind about one assumption. It is not the first version of the product.

**Prototype:** Any stand-in made to answer a question, including paper, a printed card, or a conversation held in a fixed order.

**Manual process behind a form:** A test where people fill something in and a person, rather than software, does the work behind it. It tells you whether the thing is wanted before anyone builds it.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Designing the smallest build for “nobody reads anything we send before the class”.

**What I proposed first:** A booking flow with the materials list on the details page, a confirmation email and a reminder. Three weeks of work.

**What it would have told me:** Whether that whole system produced better-prepared attendees. If not, I would not know which part failed.

**The assumption underneath:** That people receive and read what we send before the class. Everything else depends on it and nothing tests it.

**The smallest build:** A printed card handed over at booking, listing what to bring. No screens at all. If people arrive prepared, receiving works and the channel is the question.

**What I removed:** The email, the reminder, the details page redesign. Each was there because it was on the plan, not because it tested the assumption.

**Wrong turn:** The wrong turn is treating the smallest build as version one of the product. Then it is a release plan, and a release with no stated uncertainty cannot fail, so it cannot inform anything.

**Trade-off:** A printed card feels like a step backwards from the app you are meant to be designing. It answers the question in a week rather than a quarter.

**Unknown:** Still unknown: whether a card works at scale, or whether people who read a card would read a screen. Neither is what this build is for.


### What you would make

Section: practice-plan. Stable action: write-build-description.

A paper prototype, a manual process behind a form, or a written message are all legitimate.

**Answer:** What you would make

A paper prototype, a manual process behind a form, or a written message are all legitimate.

<details>
<summary>Example</summary>

Example (made up): a single printed card at reception listing what to bring, handed to the next twenty bookers.

</details>


### Why each element is necessary, and what you removed

Section: practice-plan. Stable action: write-element-justification.

Write your answer for “Why each element is necessary, and what you removed”. Use the task instructions below to decide what to include.

**Answer:** Why each element is necessary, and what you removed




### Write the stopping rule first

Section: practice-plan. Stable action: step-3-brief.

A stopping rule written before anything is built.

- Before building anything, write what result continues, what redirects, and what stops the work. Make the thresholds concrete.

**Start here:** Write the stop band first; it is the one you will not want to write later.

**Enough:** You could not argue past any of the three bands after the fact.

**Stopping rule:** What result would make you stop, decided before you have the result. Written afterwards it is a justification.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

Two supplied stopping rules for the same made-up card test. Rule A: “If attendees seem better prepared, continue.” Rule B: “If at least twelve of the next twenty bookers arrive with the listed items, continue; if six to eleven, redirect to finding out what stopped the rest; if five or fewer, stop and investigate whether preparation is the real problem.”

Why is B the usable rule?

- Its thresholds are concrete, so a disappointing result cannot be reinterpreted as encouraging afterwards.
- Because it uses numbers, and numbers are more scientific.
- Because twenty bookers is a statistically valid sample.
- B is worse, because it might stop a promising direction on a small sample.

<details>
<summary>After your attempt</summary>

Its thresholds are concrete, so a disappointing result cannot be reinterpreted as encouraging afterwards. — Written in advance with numbers, it constrains your future self. “Seem better prepared” can be read as success in almost any outcome.

Because it uses numbers, and numbers are more scientific. — Numbers alone prove nothing. What matters is that the thresholds were fixed before the result arrived.

Because twenty bookers is a statistically valid sample. — It is not, and it does not need to be. This is a decision rule for your own work, not a claim about a population.

B is worse, because it might stop a promising direction on a small sample. — That risk is real and it is why the rule has a redirect band. Without any rule, nothing ever stops.

Write your own three bands now, before building, and make them concrete enough to hold you to them.

</details>


### What result continues the work

Section: practice-plan. Stable action: write-continue-signal.

Write your answer for “What result continues the work”. Use the task instructions below to decide what to include.

**Answer:** What result continues the work




### What result redirects it

Section: practice-plan. Stable action: write-redirect-signal.

Write your answer for “What result redirects it”. Use the task instructions below to decide what to include.

**Answer:** What result redirects it




### What result stops it

Section: practice-plan. Stable action: write-stop-signal.

Concrete enough that you could not argue your way past it afterwards.

**Answer:** What result stops it

Concrete enough that you could not argue your way past it afterwards.


### Name the boundary

Section: practice-plan. Stable action: step-4-brief.

What the build cannot tell you, mapped to where those questions belong.

- Write what this build cannot tell you, and map each unanswerable question to the module that addresses it. Include anything about demand, frequency or scale.

**Start here:** List what someone might wrongly conclude from a good result.

**Enough:** Each unanswerable question names the module or activity that would address it.

**Boundary:** The edge of what this build can tell you. Outside it, even a very good result is not evidence.

**Generalising:** Treating a result from one small situation as though it held everywhere. It is the commonest way a small build gets misused later.

**Consent:** The person knows what is about to happen and agrees to it before you observe them. Whoever runs the place can give you permission to be there, and cannot agree on their behalf.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Writing what the card test cannot tell me, and finding that my boundary list was a list of excuses.

**My first boundary list:** “Small numbers, one studio, two weeks.” All true, and all of it about size. It would fit under any small build ever made.

**The test I applied instead:** Imagine the result is good. What would somebody read into it that this build does not support? They would read “people arrived prepared” as “our messages work”.

**Why that reading is wrong:** The card was handed over in person, at the moment of booking, by someone the reader was already talking to. Nothing here was sent, so nothing here says whether anything sent gets read.

**What went on the list instead:** Whether a message received later is read at all. Whether preparation holds once being handed something stops feeling novel. Whether any of this survives a class where the materials are expensive.

**Where each one belongs:** The receiving question is the next build. The expensive-materials question goes back to the need statements, because it may be a different need wearing the same words.

**Wrong turn:** The tempting error is filling the boundary with caveats about sample size. They sound careful, they are true of every small build, and because they rule nothing out in particular they let a good result be read as general support.

**Trade-off:** A specific boundary makes the build look as though it answers very little, and somebody reading the record may ask why you bothered. It is the only thing that stops a good result being spent on a claim it cannot carry.

**Unknown:** Still unknown: whether you have thought of the conclusion somebody else will draw. You can only rule out the readings you imagined, and a second reader usually finds one more.


### The questions this build cannot answer, and which module addresses each

Section: practice-plan. Stable action: write-boundary.

Write your answer for “The questions this build cannot answer, and which module addresses each”. Use the task instructions below to decide what to include.

**Answer:** The questions this build cannot answer, and which module addresses each




### If any real person is involved: what you will tell them, and what you will not collect

Section: practice-plan. Stable action: write-ethics.

Leave this if nobody else is involved.

**Answer:** If any real person is involved: what you will tell them, and what you will not collect

Leave this if nobody else is involved.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Is the smallest build the first version of your product?

- No. If it is, it is a release plan: with no stated uncertainty and no stopping rule it cannot fail, so it cannot inform anything.
- Yes: it is the minimum you would be willing to release.
- Yes, provided you gather feedback afterwards.

<details>
<summary>After your attempt</summary>

No. If it is, it is a release plan: with no stated uncertainty and no stopping rule it cannot fail, so it cannot inform anything. — The build exists to resolve one assumption. A first version exists to be used, which is a different purpose with different content.

Yes: it is the minimum you would be willing to release. — Willingness to release is about quality and scope. This is about which uncertainty you are resolving.

Yes, provided you gather feedback afterwards. — Feedback on a release tells you about the release. It rarely isolates the assumption you were unsure about.

Improve: Reread your build in step 2. If it resembles a first version, cut it to the smallest thing that tests the riskiest assumption and record what you removed in step 5.

Check again: Every element of the build is justified by the assumption it tests.

Answers to revisit: build-description, element-justification

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Why write the stopping rule before building rather than after the result?

- Because afterwards almost any result can be read as encouraging, and the rule stops that.
- To save time when the results arrive.
- It is a formality that funders expect.

<details>
<summary>After your attempt</summary>

Because afterwards almost any result can be read as encouraging, and the rule stops that. — It is a commitment made while you are still able to be impartial. Written after, it is a justification for what you already want.

To save time when the results arrive. — Time is not the point. The point is that your judgement changes once you are invested in the outcome.

It is a formality that funders expect. — It is a discipline for your own decision-making, whether or not anyone else reads it.

Improve: If any band in step 3 is vague, rewrite it with a concrete threshold, and record the change in step 5.

Check again: All three bands are concrete and were written before the build.

Answers to revisit: continue-signal, redirect-signal, stop-signal

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your build will involve twenty real people at the studio. What must be true?

- They know what is happening, agree to it, and you collect nothing about them you do not need.
- Nothing special: they are customers receiving a card, not research participants.
- Only that the studio owner agrees.

<details>
<summary>After your attempt</summary>

They know what is happening, agree to it, and you collect nothing about them you do not need. — A test involving real people is research, however informal, and consent and data minimisation apply to it.

Nothing special: they are customers receiving a card, not research participants. — You are observing their behaviour to answer a question. That is what makes it research regardless of the label.

Only that the studio owner agrees. — The owner can permit the activity on their premises. They cannot consent on behalf of the people you are observing.

Improve: Fill the ethics box in step 4 with what you will tell people and what you will not collect, then record the change in step 5.

Check again: If real people are involved, the record says what they are told and what is collected.

Answers to revisit: ethics

</details>


### Submit and request review

Section: practice. Stable action: step-5-brief.

The work saved, and the repair the Check questions asked for.

- Save the ranking, the build description, the stopping rule and the boundary. Record actual minutes and set the practice status to ready for review with references to your outputs.

**Start here:** Read the stopping rule once more and check you would still accept it if the result were bad.

**Enough:** Nothing in the record claims a result you have not obtained.

**Ready for review:** The state you put the work into when you want your creator to read it. Nothing here is marked; he reads what you wrote and replies.

**Repair:** The small change a Check question asks you to make, together with the note saying what you changed and why.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. This closes the module; your assumptions and stopping rule carry into the research modules.


<details>
<summary>Optional hints and reference material</summary>

- Test the assumption with the greatest combination of consequence and uncertainty, not the easiest screen to polish.
- A small exploratory test cannot estimate a market-wide conversion rate. State the decision it can inform.

- R34: [GOV.UK: how the alpha phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works) — Identifying and testing riskiest assumptions, building only what is complex enough to test an idea, and deciding whether to continue. Purpose: Supplies a public, non-commercial account of minimal building that avoids teaching MVP from vendor marketing. Free reading, no account. Verified 2026-09-06. Its timescales and team compositions describe government delivery and are not requirements for your practice. Fallback: R07.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The assumption is ranked by evidence and consequence**

Adequate evidence: A ranked list where each entry carries both an evidence strength and a consequence, with the top choice justified on both.

0 — No ranking, or a single assumption chosen without comparison.

1 — Ranked on one dimension only.

2 — Ranked on both dimensions with the choice justified.

3 — As adequate, and an assumption that seemed important is explicitly deprioritised with the reason.

Repair: Build a two-column table of evidence strength and consequence for every assumption, then choose from the weak-evidence, high-consequence quadrant. Recheck: The two-dimension ranking and the justified choice.

**The build is minimal and each element justified**

Adequate evidence: A description where every element is tied to the assumption, with at least one element removed for not being necessary.

0 — A feature list, not a test.

1 — A build described but elements are not tied to the assumption.

2 — Each element is justified and something was removed.

3 — As adequate, and the chosen fidelity is justified by the question rather than by convenience or appearance.

Repair: For each element of your build, ask what you would fail to learn without it. Remove everything that survives that question unchanged. Recheck: The reduced build with per-element justification.

**A stopping rule exists and predates the build**

Adequate evidence: Concrete continue, redirect and stop thresholds, written and dated before any building.

0 — No stopping rule.

1 — A rule exists but thresholds are vague or only describe success.

2 — All three outcomes have concrete thresholds recorded before building.

3 — As adequate, and the rule was actually applied and the outcome honoured, including an unwelcome one.

Repair: Write the three thresholds now, with numbers or observable descriptions, and record the order of writing relative to the build. Recheck: The dated stopping rule with three concrete thresholds.

**The boundary is named and mapped forward**

Adequate evidence: A list of questions this build cannot answer, each mapped to the later module that addresses it.

0 — No boundary stated; results treated as general.

1 — A generic caveat with no specific questions.

2 — Specific unanswerable questions mapped to later modules.

3 — As adequate, and the boundary explicitly rules out any claim about demand, frequency, retention or business impact.

Repair: Write down every conclusion you would like to draw, then mark which ones your build's participants and method cannot support. Map each to the module that could. Recheck: The boundary list with module mappings.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. This closes the module; your assumptions and stopping rule carry into the research modules.

**Review criteria:**

- The assumption is ranked by evidence and consequence
- The build is minimal and each element justified
- A stopping rule exists and predates the build
- The boundary is named and mapped forward

<details>
<summary>Reading, video and deeper explanation</summary>



[GOV.UK: how the alpha phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works).

</details>
