# UX reasoning and product value

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Published, worksheet-enabled, teaching-refined, learner-validated and assessed are separate states.

Generated from src/module4.ts; edit that source, then run npm run docs:generate. Level 1 · Module m04 · requirement areas 2, 3. Optional effort 16 hours across 8 lessons, which is the sum of the lesson steps themselves. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m02. This is guidance for meaningful practice, not a lock. Module approved resource pair: R02 / R07. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: Mental models and the model you are actually building

Stable ID: m04-l01-v1. Core. Areas 2, 3. Optional effort ~120 min.

**Objective.** Write the model a reader brings to one task, the model your design implies, and name three specific places they contradict each other.

**Bring forward.** Your Module 2 findings, hypothesis and the revision you made after testing. The contradictions you find here should be grounded in what you observed there, not invented.

Most confusing interfaces are not ugly or illogical. They are logical according to a model the reader does not hold, and no amount of visual refinement closes that gap.

### Learn

A mental model is what a person believes about how something works, assembled from everything else they have used. It is usually incomplete and often wrong in detail, and it is still what they act on. When someone clicks the browser's back button expecting to undo a submission, they are not being careless; they are applying a model that has served them everywhere else.

You have a much more detailed model than any reader will, because you built the thing. That asymmetry is the source of the problem: what feels self-evident to you was learned by you, in a sequence readers never experienced. The conceptual model your interface communicates — through its labels, structure and feedback — is the only thing they have to build a model from.

There are two honest responses to a mismatch, and they are not equally cheap. You can conform to the model people already hold, which usually means adopting the structure and vocabulary they know from elsewhere. Or you can change their model, which requires clearer naming, visible structure and feedback that teaches, and which costs far more than designers expect. Choosing the second because the first feels unoriginal is a common and expensive mistake.

Mismatches are findable but not guessable. Card sorting shows you how people expect things to be organised; a think-aloud walkthrough shows you the moment expectation breaks. What you cannot do is deduce someone's model from your own reasoning, which is exactly what a designer confident in their own logic will do by default.

**Common misconception.** “If the structure is logical, people will learn it.” Logical to whom? A taxonomy that mirrors the organisation's internal departments is perfectly logical and routinely unusable, because readers arrive with a model built from their task, not from your org chart.

### Worked example

On the workshop service, several people expected “my bookings” to include workshops they had merely saved, because that is how their shopping apps behave. The product's model separated saved from booked, which is defensible. The mismatch showed up as people reporting a booking they had never made. The chosen response was to conform partially — one list, with booked and saved clearly labelled within it — rather than to teach a distinction no one arrived expecting.

#### Expectation mismatch investigation

Compare what someone may expect in your workshop flow with what the interface actually does. Separate observed expectations from your hypotheses.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A local text editor (for example Notepad) and the previous lesson artifacts. No account is needed.

- Starting material: Your Module 2 findings, hypothesis and the revision you made after testing. The contradictions you find here should be grounded in what you observed there, not invented.
- Create HaruCourse/Practice/m04-l01-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.

</details>

#### 1. Read and extract

- Read the assigned article. Write, in your own words, the difference between the model a reader brings and the conceptual model an interface communicates.

**You should end up with:** Your own sentence distinguishing the reader’s model from the model your design implies.

Worksheet fields for this step:

- The difference between the model a reader brings and the model your design implies

<details>
<summary>Help with this step</summary>

- **Mental model:** What a person already believes about how something works, built from everything else they have used.
- **Conceptual model:** What your design implies is true, whether or not you intended it. The labels and structure make the claim.

Stuck starting? Read the assigned article and write the difference as you would explain it to a friend.

Is it enough? Neither sentence uses the word “user” as a way of avoiding saying who.

</details>

#### 2. Write the reader's model

**See it first.** Made-up example. Writing the reader’s model for a class booking, and catching myself writing my own.

- **My first attempt:** “She understands that Reserve starts a booking and that payment comes later.” Confident, tidy, and entirely mine.
- **Where it came from:** I designed the flow, so I know payment comes later. Nothing a first-time reader sees on that screen tells her so.
- **What my session notes actually held:** One participant asked, before pressing anything, “does this charge me now?” That is the only real evidence I have about this belief.
- **What I wrote instead:** She expects Reserve might charge immediately, and hesitates because the screen does not say. Marked: reported, one participant.
- **Why the difference matters:** The first version had no contradiction to find. The second one names the exact gap the next step is looking for.

**The wrong turn:** The wrong turn is writing your own understanding and labelling it the reader’s. It produces a model with no friction in it, which is the one thing it cannot be.

**What it costs:** The honest version is shorter and thinner, because most of what you believe about the reader is unevidenced. That thinness is the finding.

**Still unknown:** Still unknown: whether other people share that hesitation. One participant cannot say how common it is.

- For one task in your Module 2 work, write what you believe a first-time reader assumes: where things live, what an action will do, what happens next. Mark each line as observed in your testing or assumed.

**You should end up with:** One task, what a first-time reader assumes, and which parts you actually observed.

Worksheet fields for this step:

- The one task you are examining
- Where they expect things to live, what they expect an action to do, and what they expect to happen next — Write it as beliefs, not as complaints.
- Which parts of that came from your Module 2 sessions, and which are your guess — Mark each line observed, reported or assumed.

<details>
<summary>Help with this step</summary>



Stuck starting? Open your Module 2 notes before writing anything, and take the beliefs from there.

Is it enough? Every line is marked observed, reported or assumed, and at least one is assumed.

</details>

#### 3. Write your design's model

- Write what your design actually implies, using its real labels and structure. Do not soften it; write what the interface says, not what you meant.

**You should end up with:** What the interface actually claims, in its own labels.

Worksheet fields for this step:

- Using its real labels and structure, what does the interface say is true? — Do not soften it. Write what the labels claim, not what you meant.

<details>
<summary>Help with this step</summary>



Stuck starting? Read your screen aloud as if the labels were promises, and write down what they promise.

Is it enough? You wrote at least one thing the design implies that you did not intend.

</details>

#### 4. Find the contradictions

- Place the two side by side and identify three specific contradictions. For each, note the consequence for the reader and whether you saw it happen or are predicting it.

**You should end up with:** Three contradictions, each with the consequence for the reader.

**Try it with help.** A supplied pair from the same made-up project. Reader’s model: “the list shows classes near me.” Design’s model: the list shows all classes in the city, ordered by the studio’s promotion agreement.

What is the consequence worth writing down?

- **She judges distance from the order, so she may travel across the city believing it was the closest option.** — The consequence is a wrong action taken confidently, which is the expensive kind. Ordering carries a meaning nobody declared.
- The list is not sorted the way she expects, which is mildly confusing. — “Mildly confusing” is a feeling, not a consequence. Name what she does because of the mismatch.
- The promotion agreement is unfair to other studios. — That may be true and it is a business ethics question, not a contradiction between two models of how the thing works.
- She will learn the real order after using it a few times. — Possibly, and the first time is where the cost lands. Design for the first time and record what the learning costs.

**Then:** Write each of your own contradictions the same way: what she believes, what the design does, and what she does because of the gap.

Worksheet fields for this step, revealed a few at a time in the app:

- Contradiction 1 · what disagrees, and what it costs the reader
- Contradiction 2 · what disagrees, and what it costs the reader
- Contradiction 3 · what disagrees, and what it costs the reader

<details>
<summary>Help with this step</summary>



Stuck starting? Put the two lists side by side and look for the first line where they disagree.

Is it enough? Each consequence names something the reader does, not how they feel.

</details>

#### 5. Choose and record

- For one contradiction, decide whether to conform or to teach, and write the cost of your choice. Save all three artefacts.

**You should end up with:** One decision to conform or teach, its cost, and the repair the Check questions asked for.

Worksheet fields for this step:

- For one contradiction: will you change the design to match the expectation, or teach the reader the new model?
- What that choice costs — Teaching costs attention and is often ignored. Conforming can cost a feature you wanted.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Conform or teach:** Either change the design to match what people already believe, or accept that you must teach them something new and pay the cost of doing it.

Stuck starting? Take the contradiction with the worst consequence and ask which is cheaper: changing the design, or changing the reader.

Is it enough? The cost is written down even if you chose the easier option.

</details>

**Save and continue.** Saved for you: Both models, the contradictions and your decision save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. Keep your Module 2 notes to hand; the evidence marks depend on them. What your creator sees: Your creator reads both models and the contradictions. The evidence marks are what show whether the reader’s model came from sessions or from you. Your next action: Open Your work and choose Ready for review. The next lesson audits the same flow for everything it asks the reader to remember.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

A familiar icon does not establish what this person believes it does.

</details>

<details>
<summary>Hint 2</summary>

Write the system rule in plain language, then check whether visible feedback communicates that rule.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Mental models and the model you are actually building.
Task: Compare what someone may expect in your workshop flow with what the interface actually does. Separate observed expectations from your hypotheses.
Challenge one hypothesized expectation in my table. Ask what evidence could distinguish it from another mental model.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Write a second plausible expectation for the same situation and identify how a real task observation could distinguish them.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m04-l01-v1/work.md. Keep source observations separate from interpretations.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** Each proposed mismatch has a source label and a design or research response.

**Bring forward:** Bring the mismatch points to the memory-demand audit.


### Practice and pause points

- Read and extract (~25 min): Read the assigned article. Write, in your own words, the difference between the model a reader brings and the conceptual model an interface communicates.
- Write the reader's model (~30 min): For one task in your Module 2 work, write what you believe a first-time reader assumes: where things live, what an action will do, what happens next. Mark each line as observed in your testing or assumed.
- Write your design's model (~25 min): Write what your design actually implies, using its real labels and structure. Do not soften it; write what the interface says, not what you meant.
- Find the contradictions (~25 min): Place the two side by side and identify three specific contradictions. For each, note the consequence for the reader and whether you saw it happen or are predicting it.
- Choose and record (~15 min): For one contradiction, decide whether to conform or to teach, and write the cost of your choice. Save all three artefacts.

Pause after any step; save the artifact and next action.

**Free tool path.** Two columns on paper is the whole exercise. If you want to check an expectation cheaply, ask one person where they would look for something before showing them anything — a question, not a tool, and no account or software is involved.

### Output

The reader's model with each line marked observed or assumed, your design's implied model in its real labels, three named contradictions with consequences, and one conform-or-teach decision with its cost.

### Checks

- Why is conforming to an existing model usually cheaper? Answer: Because the reader already holds it, so no learning is required. Changing a model means every reader must be taught, through naming, structure and feedback, and most will leave before that teaching completes.
- You are certain your structure is more logical. Does that settle it? Answer: No. Your certainty comes from having built it. The relevant question is what model readers arrive with, which is an empirical question you can ask about — not one your reasoning can answer.
- What is the difference between a contradiction and a complaint? Answer: A contradiction is a specific mismatch between what a reader expects and what the design implies, with a predicted consequence. A complaint is a reaction. Contradictions can be checked; complaints need translating into one first.

### Rubric and remediation

**The reader's model is written and evidence-marked**

Adequate evidence: A list of expectations where each line is marked as observed in Module 2 testing or as an assumption.

- 0 — No reader model written.
- 1 — A model is written but nothing distinguishes observation from assumption.
- 2 — Every line is marked observed or assumed.
- 3 — As adequate, and at least one assumption is paired with the smallest question that would test it.

If below 2: Go back through your Module 2 notes and mark each line of your reader model with where it came from. Anything with no source becomes an assumption, not a finding. Show at recheck: The marked model with sources for the observed lines.

**The design's model is written from its real labels**

Adequate evidence: A description using the interface's actual words and structure, not the designer's intent.

- 0 — Only intent is described.
- 1 — A mixture of real labels and intended meaning.
- 2 — The model is written from the interface's own labels and structure.
- 3 — As adequate, and one label is identified as implying something the design does not actually do.

If below 2: Rewrite the model using only text that appears on screen. Where you needed a word that is not there, that absence is itself a finding — record it. Show at recheck: The rewritten model plus any missing-word findings.

**Contradictions are specific with named consequences**

Adequate evidence: Three contradictions, each naming the expectation, what the design does instead, and the concrete consequence.

- 0 — Fewer than three, or stated as general confusion.
- 1 — Three exist but consequences are vague.
- 2 — Three specific contradictions each with a concrete consequence.
- 3 — As adequate, and each is marked as observed or predicted, with the predicted ones given a way to check.

If below 2: Rewrite each contradiction in the form: the reader expects X, the design does Y, so the reader ends up doing Z. Discard anything that does not fit that shape. Show at recheck: The three rewritten contradictions.

**The conform-or-teach decision states its cost**

Adequate evidence: One decision with what it gives up — either the better structure abandoned, or the learning burden accepted.

- 0 — No decision, or a decision with no cost named.
- 1 — A decision with a generic cost.
- 2 — The decision names a specific cost it accepts.
- 3 — As adequate, and the decision states what evidence would reverse it.

If below 2: Write your decision, then write the sentence beginning “this is worse for…” and finish it honestly. If nothing is worse, you have probably not made a real choice. Show at recheck: The decision with its stated cost and reversal condition.

### Portfolio contribution

Practice, and reusable reasoning. A model-mismatch analysis grounded in real observation is genuine case-study material; the same analysis built only on assumptions is not, and must be labelled as reasoning rather than research.

### Assigned resources

- R32: [NN/g: mental models](https://www.nngroup.com/articles/mental-models/) — The whole article, particularly the designer-versus-user asymmetry and the two responses to a mismatch. Purpose: Establishes why a mismatch is a design problem rather than a reader failure. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Its examples are from commercial products and illustrate the idea, not a rule for yours. Fallback: R31.

## Lesson 2: Recognition, recall and what you are asking people to remember

Stable ID: m04-l02-v1. Core. Areas 2, 3. Optional effort ~120 min.

**Objective.** Audit one flow for everything it requires a reader to hold in mind or retrieve from memory, and convert at least two of those demands into recognition.

**Bring forward.** The flow you tested in Module 2 and the mental-model contradictions from the previous lesson.

Interfaces routinely ask people to carry information across screens, and the person who designed the flow is the only one who never notices, because they already know what is coming.

### Learn

Recognising something is far easier than recalling it, because recognition supplies cues and recall does not. This is why a menu of visible options outperforms a box you must type the right word into, and why a list of recently viewed items is more useful than expecting someone to remember what they looked at. Every time you make a reader produce information from nothing, you are choosing the harder mode on their behalf.

Working memory is small and easily disrupted. People hold only a few items at once, and holding them costs attention that is then unavailable for the actual task. Chunking helps — a phone number in groups is easier than a run of digits — but the reliable fix is not to require the holding at all: show the value where it is needed rather than asking someone to carry it from a previous screen.

Interruption is the normal case, not the exception. Someone booking a workshop on a phone will be interrupted by a message, a call, or their own life, and will return with their working memory emptied. A flow that depends on remembering what was typed three screens ago fails not because the person was careless but because the design assumed uninterrupted attention it had no right to assume.

The classic “about seven items” figure is widely quoted and widely over-applied; the assigned article on memory does not use it at all, and the number varies with the material and the person. Treat chunk limits as a reason to reduce what you demand, not as a rule that permits exactly seven of something. If you need the specific framing, read the Miller's Law page in the laws collection, and read it as a heuristic.

**Common misconception.** “A confirmation step means the user checked their input.” It means the information was displayed. If the reader must compare it against something they saw two screens ago and no longer have, the confirmation is theatre — and worse, it transfers responsibility to them for an error your flow made likely.

### Worked example

A booking flow asked for a reference code on screen four that had been shown on screen two, with no way back that preserved the entered data. Every observed participant either scrolled back and lost their input or guessed. The fix required no new feature: the code was displayed inline on screen four beside the field. The demand for recall disappeared, and so did the error.

#### Interruption challenge

Stop halfway through the flow, hide the preceding screen and resume. Identify information you must remember, then redesign two demands as visible choices or context.

**Where to practise:** Draw the flow with arrows from where information appears to where it is needed on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: The flow you tested in Module 2 and the mental-model contradictions from the previous lesson.
- Create HaruCourse/Practice/m04-l02-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

</details>

#### 1. Read and separate the two modes

- Read the assigned article. Write three places in any product you use where recognition is offered and three where recall is demanded.

**You should end up with:** Three examples of each mode from products you actually use.

Worksheet fields for this step:

- Three places in products you use where the answer is shown to you
- Three places where you have to produce it from memory

<details>
<summary>Help with this step</summary>

- **Recognition:** The answer is in front of you and you pick it. Far easier and far more reliable.
- **Recall:** You must produce the answer from memory with no cue. Fragile, and it fails completely under interruption.

Stuck starting? Open two apps on your phone and look for a field you have to fill from memory.

Is it enough? The examples are specific screens, not categories of app.

</details>

#### 2. Audit your flow

**See it first.** Made-up example. Auditing a booking flow for what it asks people to carry.

- **What I looked for first:** Form fields. There were only two, so I concluded the flow made almost no memory demands.
- **What I missed:** The materials list appears on the details screen and is never shown again. To pack for the class she must remember it from a screen she saw last week.
- **The second one:** The class start time appears before booking and not on the confirmation. She has to hold it, or go back and find the class again.
- **How I found them:** I drew an arrow from where each piece of information appears to where it is actually needed. Every long arrow is a demand.
- **What that changed:** The confirmation screen went from a thank-you to a summary: date, time, address and what to bring, all shown rather than remembered.

**The wrong turn:** The wrong turn is looking only at input fields. Most memory demands are about information the design showed once and then took away.

**What it costs:** Showing everything again costs space on the confirmation screen, which had been pleasantly minimal. Minimal is not the goal; being able to act is.

**Still unknown:** Still unknown: whether people go back to find the materials list or simply guess. Worth watching in a session.

- Walk your flow screen by screen. List everything the reader must remember, carry forward, or produce without a cue. Note which screen created the demand and which one collects it.

**You should end up with:** Every demand your flow makes, naming the screen where the information appears and the screen where it is needed.

Worksheet fields for this step, revealed a few at a time in the app:

- Demand 1 · what must be remembered, from which screen to which
- Demand 2 · what must be remembered, from which screen to which
- Demand 3 · what must be remembered, from which screen to which
- Demand 4 · what must be remembered, from which screen to which

<details>
<summary>Help with this step</summary>



Stuck starting? Lay your screens in order and draw an arrow wherever information is needed later than it appears.

Is it enough? Each demand names two screens, not one.

</details>

#### 3. Add the interruption

- For each demand, ask what happens if the reader is interrupted for ten minutes between the two screens. Mark the demands that do not survive it.

**You should end up with:** What happens to each demand under a ten-minute interruption.

Worksheet fields for this step:

- For each demand: what happens if the reader is interrupted between the two screens? — A phone call, a child, a bus stop. Mark which demands fail.

<details>
<summary>Help with this step</summary>

- **Interruption test:** Asking what survives ten minutes of real life between two screens. It separates a mild demand from a broken one.

Stuck starting? Take each demand and imagine the phone ringing between the two screens.

Is it enough? At least one demand is marked as failing.

</details>

#### 4. Convert two demands

- Choose two demands — ideally the two that fail interruption — and redesign them into recognition: show the value, offer a list, or remove the need entirely. Record what each change costs in space or steps.

**You should end up with:** Two demands converted into recognition, with their costs.

**Try it with help.** A supplied demand from the same made-up flow: the reader chooses a class on one screen, and three screens later must type the class name into a “which class?” field to confirm.

Which conversion actually removes the memory demand?

- **Show the chosen class name and time on the confirming screen, with an option to change it.** — The answer is now in front of her and she checks rather than produces. The change option keeps her in control without asking her to remember.
- Add a hint under the field reading “the class you selected earlier”. — That names what to remember without supplying it. The demand is unchanged.
- Add a confirmation dialogue asking “are you sure this is the right class?” — She still has no way to check. Confirming something you cannot verify is not a check.
- Let her open the class list in a new tab to look it up. — Better than nothing and it moves the work to her: she must leave the task, find the class and come back holding the answer.

**Then:** Convert your own two demands by showing the value where it is needed, not by labelling what should be remembered.

Worksheet fields for this step:

- Conversion 1 · the demand, and how the value is now shown or offered
- Conversion 2 · the demand, and how the value is now shown or offered
- What each conversion costs, in space or complexity

<details>
<summary>Help with this step</summary>



Stuck starting? Take the demands that failed the interruption test first.

Is it enough? In both conversions the reader can see the answer at the moment it is needed.

</details>

#### 5. Record and pause

- Save the audit table, the interruption marks and the two conversions. Note one demand you could not remove and why.

**You should end up with:** One demand you could not remove, where the flow lives, and the repair the Check questions asked for.

Worksheet fields for this step:

- One demand you could not remove, and why
- Where the annotated flow lives
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Look for something only the reader knows, such as a password or a personal preference.

Is it enough? The reason names why showing it is impossible or wrong, not merely inconvenient.

</details>

**Save and continue.** Saved for you: The audit, the interruption results and your conversions save as you type, on this device first and then online. Kept outside the app: The annotated flow with its arrows stays on paper or in your own folder. Name it here so the drawing and the table stay together. What your creator sees: Your creator reads the demands, the interruption marks and the conversions. The unremovable one is the interesting entry. Your next action: Open Your work and choose Ready for review. The next lesson inventories what each control affords, signals and confirms.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.

<details>
<summary>Optional Figma Starter route (workflow not authenticated)</summary>

- Optional route: open figma.com and sign in to a free Starter account. Decline upgrades and trials. If an assigned control is unavailable, use the paper route; no paid feature is required.
- Create a Design file in Drafts and rename it with the lesson ID. Use the Frame tool (F) to draw a screen boundary; set its width and height in the right panel. A frame groups one screen’s content.
- Use Text (T) for actual labels and Rectangle (R) for control boundaries. Select a layer to edit text size, fill and dimensions in the right panel. Start with these tools, not plugins or generated UI.
- Duplicate the frame before revising. Name the frames Before and After, or use the state IDs from your flow. For layout comparisons, duplicate again and change width; reposition content deliberately. A static frame does not prove browser reflow.
- To export, select the frame, find Export in the right panel, add an export setting, choose PNG and export. Open the downloaded image to check readable labels and uncropped content; keep it beside work.md.
- This route is documented but has not been tested in a signed-in Starter account for this release. Paper is the supported introductory route until that workflow is verified. Deeper components and prototyping training belongs to mapped later modules.

</details>



<details>
<summary>Hint 1</summary>

Run this as a self-walkthrough and label it accordingly, not as evidence about all users.

</details>

<details>
<summary>Hint 2</summary>

Showing everything can create clutter. Decide which detail is needed at this step.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Recognition, recall and what you are asking people to remember.
Task: Stop halfway through the flow, hide the preceding screen and resume. Identify information you must remember, then redesign two demands as visible choices or context.
Challenge one thing at a time, and start with the mistake this lesson is about: “A confirmation step means the user checked their input.” It means the information was displayed. If the reader must compare it against something they saw two screens ago and no longer have, the confirmation is theatre — and worse, it transfers responsibility to them for an error your flow made likely.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the arrow diagram and the completed table and ask whether the audit names demands with both screens involved. Look at the audit with interruption marks and reasoning and ask whether the interruption case was genuinely applied. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m04-l02-v1/work.md. Keep source observations separate from interpretations.
- Keep labelled paper originals or save readable images as before-01.jpg and after-01.jpg in the same folder. Preserve any editable digital source.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** Two changes reduce specific memory demands while explaining the extra information they introduce.

**Bring forward:** Keep the revised screens for the control and feedback audit.


### Practice and pause points

- Read and separate the two modes (~25 min): Read the assigned article. Write three places in any product you use where recognition is offered and three where recall is demanded.
- Audit your flow (~30 min): Walk your flow screen by screen. List everything the reader must remember, carry forward, or produce without a cue. Note which screen created the demand and which one collects it.
- Add the interruption (~25 min): For each demand, ask what happens if the reader is interrupted for ten minutes between the two screens. Mark the demands that do not survive it.
- Convert two demands (~25 min): Choose two demands — ideally the two that fail interruption — and redesign them into recognition: show the value, offer a list, or remove the need entirely. Record what each change costs in space or steps.
- Record and pause (~15 min): Save the audit table, the interruption marks and the two conversions. Note one demand you could not remove and why.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper screens laid out in order, with an arrow drawn from where information appears to where it is required, makes every carried demand visible. No tool or account is needed. If you want the interruption test to be real, put the paper down and do something else for ten minutes before continuing.

### Output

A memory-demand audit naming each demand and its two screens, interruption marks, two demands converted to recognition with their costs, and one unremovable demand with its justification.

### Checks

- Why does a list of recent items beat a search box for return visits? Answer: Because it offers recognition. The reader picks from what is shown instead of producing the right term from memory, which is the harder operation and the one that fails when they only half-remember the name.
- Is showing a value on the confirmation screen enough to prevent errors? Answer: Only if the reader can check it against something. Displaying a value they cannot compare to anything does not enable verification; it just makes the mistake visible after the fact if at all.
- Does the seven-item figure mean you may show seven options safely? Answer: No. It is a heuristic about chunking that varies by material and person, and the assigned memory article does not use it. Use it as a reason to reduce demand, not as a permitted quantity.

### Rubric and remediation

**The audit names demands with both screens involved**

Adequate evidence: A table where each row names the information, the screen that supplies it and the screen that requires it.

- 0 — No audit.
- 1 — Demands listed without identifying the screens.
- 2 — Every demand names its supplying and requiring screen.
- 3 — As adequate, and the audit also catches demands created outside the product, such as a code from an email or SMS.

If below 2: Redraw your flow and draw an arrow for every piece of information the reader must carry. Any arrow spanning more than one screen becomes a row in the table. Show at recheck: The arrow diagram and the completed table.

**The interruption case was genuinely applied**

Adequate evidence: Each demand marked for whether it survives a ten-minute interruption, with the reasoning.

- 0 — Interruption not considered.
- 1 — Mentioned but not applied per demand.
- 2 — Each demand is marked with reasoning.
- 3 — As adequate, and the interruption was actually experienced during the exercise rather than imagined.

If below 2: Take your audit and, for each row, write what the reader still has in front of them after ten minutes away. Mark the rows where the answer is nothing. Show at recheck: The audit with interruption marks and reasoning.

**Two conversions are real and their costs stated**

Adequate evidence: Two demands redesigned into recognition, each with what the change costs in space, steps or complexity.

- 0 — No conversions, or conversions that still require recall.
- 1 — Two conversions but no costs stated.
- 2 — Two genuine conversions with stated costs.
- 3 — As adequate, and one demand is removed entirely rather than converted, with the reasoning for why it was never needed.

If below 2: For each conversion, ask what the reader must now produce from memory. If the answer is anything, the conversion is incomplete — show the value rather than hinting at it. Show at recheck: The two conversions with the recall demand shown to be zero.

**Memory claims are proportionate**

Adequate evidence: No numeric capacity claim is presented as fact; any use of a chunking heuristic is labelled as such.

- 0 — A specific capacity is asserted as a rule and used to justify a decision.
- 1 — A number is quoted without a caveat.
- 2 — Memory limits are described qualitatively, or a heuristic is labelled as one.
- 3 — As adequate, and the write-up notes that the assigned memory article does not supply a capacity figure at all.

If below 2: Find every number in your write-up describing memory and either remove it or attach its source and its status as a heuristic. Show at recheck: The corrected write-up.

### Portfolio contribution

Practice. A memory-demand audit is useful supporting evidence inside a case study's problem section when the demands were observed rather than assumed.

### Assigned resources

- R33: [NN/g: recognition and recall](https://www.nngroup.com/articles/recognition-and-recall/) — The whole article: recognition versus recall, activation, and the interface implications. Purpose: Explains why cues make a task easier and where interfaces habitually demand production instead. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. It does not cover Miller's 7±2; use the R31 millers-law page if you need that framing, and treat it as a heuristic. Fallback: R31.
- R31: [Laws of UX](https://lawsofux.com/) — The millers-law and cognitive-load pages only. Purpose: Supplies the chunking vocabulary the memory article omits. Effort: 10–15 selected min. Free reading, no account. Verified 2026-09-06. The site states these as laws without caveats; the limitation is taught here, not there. Fallback: R02.

## Lesson 3: Affordances, signifiers and feedback

Stable ID: m04-l03-v1. Core. Areas 2, 3. Optional effort ~120 min.

**Objective.** Identify what each control in one screen affords, what signals that affordance to the reader, and what tells them the action worked — then repair the weakest of the three.

**Bring forward.** Your flow and the memory-demand audit. Use the same screens so the analysis accumulates.

On a screen every pixel can be clicked and almost none of them do anything. What a reader can do is invisible unless you make it visible, and whether it worked is invisible unless you say so.

### Learn

An affordance is what an object makes possible: a checkbox affords being turned on and off, a slider affords being moved. A signifier is the perceivable cue that tells someone the affordance exists — the shape, the colour, the label, the cursor change, the underline. The distinction matters because on a screen the affordance is decided by code and is entirely unperceivable; only signifiers reach the reader.

Two gulfs sit either side of every action. The gulf of execution is the distance between what someone wants and working out how to do it, which signifiers close. The gulf of evaluation is the distance between acting and knowing what happened, which feedback closes. Designers spend most of their attention on the first gulf and most of their bugs live in the second.

Feedback must be specific, timely and located where attention already is. “Saved” at the top of a page the reader has scrolled past is not feedback; a spinner with no end state is not feedback; a success message that does not say what succeeded leaves the reader checking manually anyway. The test is whether the reader can answer “did it work, and to what?” without doing extra work.

Removing signifiers is a recurring cost of visual minimalism. Flat controls without borders, links without underlines, icons without labels and low-contrast placeholders all look calmer and all reduce what the reader can tell. That is a real tradeoff, not a mistake by definition — but it must be a decision you made knowingly and can state, not a side effect of preferring the cleaner mock.

**Common misconception.** “Users will figure out it is clickable by hovering.” Hover does not exist on touch devices, which is where much of your audience will be, and it requires the reader to already suspect the element is interactive. A signifier that only appears after you have guessed correctly is not a signifier.

### Worked example

A workshop card had its whole surface clickable, with the title in body-text colour and no other cue. On desktop, hovering revealed a subtle shade change; on a phone nothing indicated interactivity at all, and observed readers tapped the price text and then the image before finding it. Adding a coloured, weightier title and a visible chevron closed the execution gulf. Separately, the tap produced no immediate response during a slow load, so a pressed state was added to close the evaluation gulf.

#### Control and feedback audit

Inventory controls and trace action to response. Find one that looks usable but gives unclear feedback, then specify a repair for touch and keyboard intent.

**Where to practise:** Draw the screen with three columns written beside each control on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: Your flow and the memory-demand audit. Use the same screens so the analysis accumulates.
- Create HaruCourse/Practice/m04-l03-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

</details>

#### 1. Read and define

- Read the assigned article's opening sections. Write your own one-line definitions of affordance, signifier and the two gulfs, with a screen example of each.

**You should end up with:** One-line definitions in your own words.

Worksheet fields for this step:

- Affordance, signifier, and feedback — One line each, without using the other two words.

<details>
<summary>Help with this step</summary>

- **Affordance:** What the thing makes possible: a button affords pressing, a text field affords typing.
- **Signifier:** What tells the reader the affordance exists. Without it the possibility is invisible.
- **Feedback:** What tells the reader the action happened, and what happened.

Stuck starting? Write the three sentences before looking at your screen, so the inventory is not shaped to fit them.

Is it enough? Each sentence could be understood by someone who has not read the article.

</details>

#### 2. Inventory the controls

**See it first.** Made-up example. Inventorying a booking screen and finding the empty column.

- **What I expected to find:** A few weak signifiers. My buttons look like buttons, so I thought the inventory would be quick and reassuring.
- **The first two rows:** Reserve: affords holding a place, signalled by a filled rectangle with a verb, feedback… I stopped there.
- **What was in the feedback column:** Nothing. Pressing Reserve does nothing visible until the next screen appears, which on a slow connection can take seconds.
- **Why I nearly filled it in:** I wrote “the next screen appears” and deleted it. That is the result arriving, not feedback that the press registered.
- **What the blank told me:** This is why people press twice. The blank was the finding, and filling it in would have hidden it.

**The wrong turn:** The wrong turn is filling every cell because an empty table looks unfinished. The empty cells are the entire value of the exercise.

**What it costs:** Leaving blanks makes the inventory look sparse and unimpressive. It is what makes the next step obvious.

**Still unknown:** Still unknown: how long the wait actually is on a slow connection. Worth measuring before deciding what the feedback should be.

- For every interactive element on your screen, write three columns: what it affords, what signifies that, and what feedback follows the action. Leave cells blank where nothing exists — blanks are the finding.

**You should end up with:** Every interactive element inventoried across all three columns, with blanks left as blanks.

Worksheet fields for this step, revealed a few at a time in the app:

- Control 1 · affords / signalled by / feedback — Leave a column blank if there is nothing there. A blank is a finding.
- Control 2 · affords / signalled by / feedback
- Control 3 · affords / signalled by / feedback
- Control 4 · affords / signalled by / feedback
- Control 5 · affords / signalled by / feedback

<details>
<summary>Help with this step</summary>



Stuck starting? Print the screen and write three short columns beside each control.

Is it enough? At least one cell is blank and stayed blank.

</details>

#### 3. Test on touch

- Check every signifier that depends on hover or a cursor change. Mark each as unavailable on touch, and note what remains for a reader on a phone.

**You should end up with:** Every hover-dependent signifier marked, with what remains on touch.

Worksheet fields for this step:

- Every signifier that needs hover or a cursor change, and what remains without it — Hover does not exist on a phone, which is where much of your audience will be.

<details>
<summary>Help with this step</summary>

- **Touch:** No hover, no cursor change, and a fingertip roughly the size of a small coin. Anything signalled only by pointer behaviour does not exist there.

Stuck starting? Go through the inventory and mark anything that only appears when a mouse is over it.

Is it enough? Each marked item says what a touch reader sees instead.

</details>

#### 4. Repair the weakest

- Choose the control with the weakest signifier and the one with the weakest feedback. Repair both, writing what a reader can now tell that they could not before.

**You should end up with:** The weakest signifier and the weakest feedback repaired, each stating what the reader can now tell.

**Try it with help.** A supplied row from the same made-up screen: a link in body text reading “see what to bring”, styled in the same colour and weight as the surrounding text, underlined only on hover.

What is the smallest sound repair?

- **Give it a persistent underline, so it is identifiable as a link without a pointer.** — It restores the signifier on every device without adding anything new to the screen, and it is the convention readers already know.
- Change its colour so it stands out from the body text. — Better than nothing and colour alone is exactly the failure the colour lesson warned about. It also fails in greyscale.
- Turn it into a button so it is obviously interactive. — A button is a much heavier element for an inline reference and changes the reading of the sentence around it.
- Add a hint elsewhere saying which words are links. — That asks the reader to hold a rule in mind, which is precisely the memory demand the previous lesson was removing.

**Then:** Repair your own weakest signifier the same way: restore the cue where the reader is, without adding a new element.

Worksheet fields for this step:

- The weakest signifier · what you changed, and what the reader can now tell before acting
- The weakest feedback · what you changed, and what the reader can now tell after acting

<details>
<summary>Help with this step</summary>



Stuck starting? Pick the control whose signifier column was thinnest, then the one whose feedback column was blank.

Is it enough? Each repair says what the reader can tell that they could not before.

</details>

#### 5. Record and pause

- Save the three-column inventory with its blanks, the touch marks, and the two repairs. Note any signifier you removed for visual reasons and what it cost.

**You should end up with:** Any signifier removed for tidiness, where the screen lives, and the repair the Check questions asked for.

Worksheet fields for this step:

- Any signifier you removed for tidiness, and what it was doing — Underlines, borders and shadows are often removed because they look busy.
- Where the annotated screen lives
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Think about what you took away because the screen looked busy.

Is it enough? If you removed nothing, say so; if you did, name what it was signalling.

</details>

**Save and continue.** Saved for you: The inventory, touch marks and repairs save as you type, on this device first and then online. Kept outside the app: The annotated printout stays in your own folder; name it here. Nothing is uploaded. What your creator sees: Your creator reads the inventory, especially the blanks. Those are what show the analysis was honest. Your next action: Open Your work and choose Ready for review. The next lesson classifies the failures you observed in Module 2.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.

<details>
<summary>Optional Figma Starter route (workflow not authenticated)</summary>

- Optional route: open figma.com and sign in to a free Starter account. Decline upgrades and trials. If an assigned control is unavailable, use the paper route; no paid feature is required.
- Create a Design file in Drafts and rename it with the lesson ID. Use the Frame tool (F) to draw a screen boundary; set its width and height in the right panel. A frame groups one screen’s content.
- Use Text (T) for actual labels and Rectangle (R) for control boundaries. Select a layer to edit text size, fill and dimensions in the right panel. Start with these tools, not plugins or generated UI.
- Duplicate the frame before revising. Name the frames Before and After, or use the state IDs from your flow. For layout comparisons, duplicate again and change width; reposition content deliberately. A static frame does not prove browser reflow.
- To export, select the frame, find Export in the right panel, add an export setting, choose PNG and export. Open the downloaded image to check readable labels and uncropped content; keep it beside work.md.
- This route is documented but has not been tested in a signed-in Starter account for this release. Paper is the supported introductory route until that workflow is verified. Deeper components and prototyping training belongs to mapped later modules.

</details>



<details>
<summary>Hint 1</summary>

Distinguish the action possible from the visible cue suggesting it.

</details>

<details>
<summary>Hint 2</summary>

Ask what the person sees while waiting and after failure, not just after success.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Affordances, signifiers and feedback.
Task: Inventory controls and trace action to response. Find one that looks usable but gives unclear feedback, then specify a repair for touch and keyboard intent.
Challenge one thing at a time, and start with the mistake this lesson is about: “Users will figure out it is clickable by hovering.” Hover does not exist on touch devices, which is where much of your audience will be, and it requires the reader to already suspect the element is interactive. A signifier that only appears after you have guessed correctly is not a signifier.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the completed inventory covering every interactive element and ask whether every control is inventoried across all three columns. Look at the corrected inventory with honest blanks and ask whether blanks are preserved as findings, not filled in. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m04-l03-v1/work.md. Keep source observations separate from interpretations.
- Keep labelled paper originals or save readable images as before-01.jpg and after-01.jpg in the same folder. Preserve any editable digital source.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** The weakest control has an explicit action, cue and response, including non-hover use.

**Bring forward:** Bring ambiguous or failed actions into error classification.


### Practice and pause points

- Read and define (~25 min): Read the assigned article's opening sections. Write your own one-line definitions of affordance, signifier and the two gulfs, with a screen example of each.
- Inventory the controls (~30 min): For every interactive element on your screen, write three columns: what it affords, what signifies that, and what feedback follows the action. Leave cells blank where nothing exists — blanks are the finding.
- Test on touch (~25 min): Check every signifier that depends on hover or a cursor change. Mark each as unavailable on touch, and note what remains for a reader on a phone.
- Repair the weakest (~25 min): Choose the control with the weakest signifier and the one with the weakest feedback. Repair both, writing what a reader can now tell that they could not before.
- Record and pause (~15 min): Save the three-column inventory with its blanks, the touch marks, and the two repairs. Note any signifier you removed for visual reasons and what it cost.

Pause after any step; save the artifact and next action.

**Free tool path.** A printed screen with three columns written beside each control is the complete exercise. If you have the screen in a local HTML file you can check the touch case honestly by using a phone browser or a browser's device emulation, but the paper analysis is sufficient.

### Output

A three-column affordance, signifier and feedback inventory with blanks left visible, touch-availability marks, and two repairs each stating what the reader can now tell.

### Checks

- Why can an affordance not be perceived directly on a screen? Answer: Because it is a property of the code, not of the pixels. Every region of the screen is physically clickable, so what is actually possible is unperceivable; only the signifier communicates it.
- A spinner appears and never resolves. Which gulf is open? Answer: The gulf of evaluation. The reader acted but cannot tell what happened, so they wait, retry or abandon. Feedback must reach a definite end state, including a failure state.
- Is removing an underline from links always wrong? Answer: Not automatically, but it removes a signifier that works everywhere, including for readers who cannot rely on colour. If you remove it, you owe a replacement cue and a stated reason — not just a preference for a cleaner look.

### Rubric and remediation

**Every control is inventoried across all three columns**

Adequate evidence: One row per interactive element with affordance, signifier and feedback considered for each.

- 0 — No inventory.
- 1 — Some controls covered, or only one or two columns used.
- 2 — Every interactive element has all three columns considered.
- 3 — As adequate, and non-obvious interactive elements — a whole clickable card, a swipe, a long press — are included.

If below 2: List every element a reader could act on, including whole regions and gestures, and complete all three columns for each. Show at recheck: The completed inventory covering every interactive element.

**Blanks are preserved as findings, not filled in**

Adequate evidence: Visible empty cells where no signifier or feedback exists, carried into the findings rather than retroactively described.

- 0 — Every cell is filled with a plausible-sounding description.
- 1 — Blanks exist but are not treated as findings.
- 2 — Blanks are visible and listed as findings.
- 3 — As adequate, and the blanks are ordered by how costly the missing cue is to the reader.

If below 2: Re-examine each filled cell and ask what a first-time reader would actually perceive. Replace anything that describes your intent rather than a perceivable cue with a blank. Show at recheck: The corrected inventory with honest blanks.

**Touch availability was checked**

Adequate evidence: Each hover-dependent or cursor-dependent signifier marked as unavailable on touch, with what remains stated.

- 0 — Touch not considered.
- 1 — Mentioned generally without marking specific signifiers.
- 2 — Each affected signifier is marked and the remaining cue is stated.
- 3 — As adequate, and one control is redesigned so it no longer depends on hover at all.

If below 2: Go through your signifier column and mark every entry that requires a pointer. For each, write what a phone reader perceives instead. Show at recheck: The marked signifier column with touch alternatives.

**Repairs state what the reader can now tell**

Adequate evidence: Two repairs, each with a before-and-after sentence describing the reader's knowledge, not the visual change.

- 0 — No repairs, or repairs described only visually.
- 1 — Repairs made but the reader's knowledge is not described.
- 2 — Both repairs state what the reader can now determine.
- 3 — As adequate, and one repair addresses a failure case, not only the success case.

If below 2: Rewrite each repair as: before, the reader could not tell X; after, they can tell it because Y. Add a failure case if both your repairs assume success. Show at recheck: The two rewritten repairs including a failure case.

### Portfolio contribution

Practice. The inventory is a strong supporting artefact for a case study's analysis section, particularly where a blank cell corresponds to something you actually watched someone struggle with.

### Assigned resources

- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — The gulfs of execution and evaluation, and the affordances and signifiers sections. Purpose: Supplies the vocabulary connecting what a reader can do to what they can perceive and confirm. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Its product examples illustrate the concepts and are not requirements for your design. Fallback: R02.

## Lesson 4: Slips, mistakes and designing for the error you caused

Stable ID: m04-l04-v1. Core. Areas 2, 3. Optional effort ~120 min.

**Objective.** Classify the failures observed in your Module 2 testing as slips or mistakes, and design one prevention and one recovery for each class, without relying on the reader being more careful.

**Bring forward.** Your Module 2 session notes and every failure, hesitation or wrong turn you recorded there.

The instinct after watching someone fail is to add a warning. Warnings work on one kind of error and make the other kind worse, so the classification has to come first.

### Learn

A slip is doing the wrong thing while intending the right thing: the goal was correct and the execution went astray, usually on a familiar, automatic task. Tapping the adjacent date, submitting before finishing, using the wrong one of two similar controls. Slips are properties of attention under normal conditions, and they respond to design that constrains, defaults and undoes.

A mistake is doing the wrong thing on purpose, because the goal itself was formed from a wrong model. Booking the wrong session because two workshops share a name, or believing a save happened because the interface looked calm. Mistakes respond to clearer models, better naming, previews and feedback. Adding a confirmation dialogue to a mistake usually fails, because the reader confirms confidently — they were never uncertain.

Prevention and recovery are both required, and prevention has a ceiling. Constraints — disabling impossible dates, formatting input as it is typed, defaulting to the common case — remove whole classes of slip cheaply. But no design prevents everything, so recovery matters: undo is generally better than confirmation, because confirmation interrupts everyone to catch a few, while undo costs nothing until it is needed.

Blaming the reader is the default failure of error analysis, and it hides inside neutral-sounding language. “The user didn't read the instruction” describes a design that required reading an instruction. Rewrite every error observation so the subject is the design: not “they missed the toggle”, but “the toggle's state was not perceivable at a glance”. The rewritten sentence usually contains its own fix.

**Common misconception.** “Add a confirmation dialogue so they cannot get it wrong.” Confirmations catch slips at best, and only briefly — people learn to dismiss them without reading. They do nothing for a mistake, because the reader is certain, and they add a step for everyone who was already correct.

### Worked example

Two failures from one test looked identical and were not. One participant tapped “Reserve” before choosing a date, then said “oh, I meant to pick Saturday” — a slip, fixed by disabling the button until a date is selected. Another chose the Saturday session believing it was the beginners' one, because both were titled “Weekend Workshop” — a mistake, unaffected by any button state, fixed by distinguishing the titles and showing the level on the card.

#### Error recovery workshop

Classify failures as slips or mistakes, rewrite blameful messages and design prevention plus recovery for one of each.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: Your Module 2 session notes and every failure, hesitation or wrong turn you recorded there.
- Create HaruCourse/Practice/m04-l04-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

</details>

#### 1. Read and classify the concepts

- Read the assigned article's sections on slips and mistakes. Write the distinguishing question you will use: was the intention correct?

**You should end up with:** The question you will use to classify, written in your own words.

Worksheet fields for this step:

- The question you will use to tell a slip from a mistake — It is about the intention, not the outcome.

<details>
<summary>Help with this step</summary>

- **Slip:** The intention was right and the action came out wrong: a mistyped digit, the wrong button pressed by accident.
- **Mistake:** The intention itself was wrong, usually because the person’s model of the system was wrong. Doing it more carefully would not help.

Stuck starting? Write the question as something you could ask about any failure in ten seconds.

Is it enough? The question is about intention, not about how bad the outcome was.

</details>

#### 2. Classify your observed failures

**See it first.** Made-up example. Classifying two failures from a session, and getting the first one wrong.

- **The observation:** She pressed Reserve, then immediately pressed Back. My note said “misclick”.
- **Why I classified it as a slip:** It looked like an accident, and slips are the comfortable category: they suggest the design is fine and the finger was clumsy.
- **What she actually said:** “I wanted to see if there were places left.” Her intention was to check availability, and Reserve was the only thing that looked like it would tell her.
- **The reclassification:** A mistake. Her model of what Reserve does was wrong, and the design gave her nothing else to press.
- **What that changed in the repair:** A confirmation dialogue would have caught nothing. Showing places remaining on the card removes the reason to press at all.

**The wrong turn:** The wrong turn is classifying by how it looked. Slips are comfortable because they blame the finger; mistakes point at your model of the system.

**What it costs:** Classifying honestly produces more mistakes than slips, and mistakes are harder to fix than adding a warning.

**Still unknown:** Still unknown: whether other people share that model of the button. One session cannot say how common it is.

- Take every failure from your Module 2 notes and classify it. Where you cannot tell, record it as unclassified and write what you would have needed to ask at the time.

**You should end up with:** Every failure from your Module 2 notes classified, with unclassifiable ones kept.

Worksheet fields for this step, revealed a few at a time in the app:

- Failure 1 · what happened, and slip, mistake or unclassified
- Failure 2 · what happened, and slip, mistake or unclassified
- Failure 3 · what happened, and slip, mistake or unclassified
- Failure 4 · what happened, and slip, mistake or unclassified
- For anything unclassified: what you would need to know

<details>
<summary>Help with this step</summary>



Stuck starting? Take each failure and ask what the person was trying to do at that moment.

Is it enough? At least one is classified as a mistake, or you can say why none is.

</details>

#### 3. Rewrite the blame out

- Rewrite each observation so the design is the subject. Keep both versions so the difference is visible.

**You should end up with:** Each observation rewritten with the design as the subject, keeping both versions.

**Try it with help.** A supplied note from the same made-up session: “The participant carelessly skipped the materials section and then complained she did not know what to bring.”

Which rewrite is useful?

- **The materials section sat below the Reserve button at this width, so it was not encountered before the decision, and nothing referred to it afterwards.** — It names what the design did, where, and what followed. It is checkable and it points straight at a repair.
- The participant did not read the materials section, which is common behaviour. — Softer wording, same blame, and now with a claim about people in general that one session cannot support.
- The materials section needs to be more prominent. — That is a repair, not an observation. Written here it hides what actually happened.
- The participant was in a hurry, which affected her reading. — Speculation about her state, and unfalsifiable. It also excuses the layout.

**Then:** Rewrite each of your own observations so the design is the subject and the sentence could be checked by someone else.

Worksheet fields for this step:

- Each observation rewritten with the design as the subject, keeping the original beside it

<details>
<summary>Help with this step</summary>

- **Blame:** Any word that makes the person the cause: careless, lazy, did not bother, failed to notice.

Stuck starting? Underline every word in your notes that describes the person rather than the screen.

Is it enough? No rewritten line contains a judgement about the person.

</details>

#### 4. Design prevention and recovery

- For one slip and one mistake, design a prevention and a recovery each. Prefer constraints and defaults over warnings, and undo over confirmation. State why for each choice.

**You should end up with:** A prevention and a recovery for one slip and one mistake.

Worksheet fields for this step:

- For one slip · the prevention — Prefer a constraint or a default over a warning.
- For that slip · the recovery
- For one mistake · the prevention — A mistake is a wrong intention, so the fix is usually information or a clearer model, not a guard.
- For that mistake · the recovery

<details>
<summary>Help with this step</summary>

- **Constraint:** Making the wrong action impossible or harder, rather than warning about it.
- **Recovery:** What the person can do after the failure. Undo is usually worth more than a confirmation.

Stuck starting? For the slip, ask what would make the wrong action physically harder; for the mistake, ask what information was missing.

Is it enough? Neither intervention relies on the reader being more careful.

</details>

#### 5. Record and pause

- Save the classification table, the rewritten observations and the four designs. Note any failure you could not classify and what that costs you.

**You should end up with:** A failure you could not resolve, and the repair the Check questions asked for.

Worksheet fields for this step:

- A failure you could not classify or design for, and why
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Look for the failure where you still cannot tell what she was trying to do.

Is it enough? The entry says what you would need to observe to classify it.

</details>

**Save and continue.** Saved for you: The classification, rewrites and interventions save as you type, on this device first and then online. Kept outside the app: Your Module 2 session notes stay in your own private folder. Nothing here should identify a participant. What your creator sees: Your creator reads the classifications and the rewritten observations. The unclassified entries show where the evidence ran out. Your next action: Open Your work and choose Ready for review. The next lesson is optional and tests three named laws against your own work.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.

<details>
<summary>Optional Figma Starter route (workflow not authenticated)</summary>

- Optional route: open figma.com and sign in to a free Starter account. Decline upgrades and trials. If an assigned control is unavailable, use the paper route; no paid feature is required.
- Create a Design file in Drafts and rename it with the lesson ID. Use the Frame tool (F) to draw a screen boundary; set its width and height in the right panel. A frame groups one screen’s content.
- Use Text (T) for actual labels and Rectangle (R) for control boundaries. Select a layer to edit text size, fill and dimensions in the right panel. Start with these tools, not plugins or generated UI.
- Duplicate the frame before revising. Name the frames Before and After, or use the state IDs from your flow. For layout comparisons, duplicate again and change width; reposition content deliberately. A static frame does not prove browser reflow.
- To export, select the frame, find Export in the right panel, add an export setting, choose PNG and export. Open the downloaded image to check readable labels and uncropped content; keep it beside work.md.
- This route is documented but has not been tested in a signed-in Starter account for this release. Paper is the supported introductory route until that workflow is verified. Deeper components and prototyping training belongs to mapped later modules.

</details>



<details>
<summary>Hint 1</summary>

Do not infer intent from a click alone. Mark uncertain classifications.

</details>

<details>
<summary>Hint 2</summary>

A useful message explains the issue and a recoverable next step without blaming the person.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Slips, mistakes and designing for the error you caused.
Task: Classify failures as slips or mistakes, rewrite blameful messages and design prevention plus recovery for one of each.
Challenge one thing at a time, and start with the mistake this lesson is about: “Add a confirmation dialogue so they cannot get it wrong.” Confirmations catch slips at best, and only briefly — people learn to dismiss them without reading. They do nothing for a mistake, because the reader is certain, and they add a step for everyone who was already correct.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the table with intention reasoning per row and ask whether failures are classified with the intention test. Look at the table with unclassified rows and their questions and ask whether unclassifiable cases are kept, not forced. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m04-l04-v1/work.md. Keep source observations separate from interpretations.
- Keep labelled paper originals or save readable images as before-01.jpg and after-01.jpg in the same folder. Preserve any editable digital source.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** Prevention and recovery respond to different failure causes and preserve useful user input where possible.

**Bring forward:** Use a recovery decision as a test case for the UX-law counterexample exercise.


### Practice and pause points

- Read and classify the concepts (~25 min): Read the assigned article's sections on slips and mistakes. Write the distinguishing question you will use: was the intention correct?
- Classify your observed failures (~30 min): Take every failure from your Module 2 notes and classify it. Where you cannot tell, record it as unclassified and write what you would have needed to ask at the time.
- Rewrite the blame out (~20 min): Rewrite each observation so the design is the subject. Keep both versions so the difference is visible.
- Design prevention and recovery (~30 min): For one slip and one mistake, design a prevention and a recovery each. Prefer constraints and defaults over warnings, and undo over confirmation. State why for each choice.
- Record and pause (~15 min): Save the classification table, the rewritten observations and the four designs. Note any failure you could not classify and what that costs you.

Pause after any step; save the artifact and next action.

**Free tool path.** This is written and sketched work throughout; no tool is required. Your Module 2 notes plus paper are sufficient, and no account, subscription or AI assistance is needed at any step.

### Output

A classification table of observed failures with slips, mistakes and unclassified rows; blame-free rewrites alongside the originals; and one prevention and one recovery for each class with reasoning.

### Checks

- What single question separates a slip from a mistake? Answer: Was the intention correct? If the person meant to do the right thing and the action went astray, it is a slip. If the action matched an intention that was itself wrong, it is a mistake.
- Why is undo usually preferable to a confirmation dialogue? Answer: Confirmation taxes everyone, including the majority who were correct, and is quickly dismissed automatically. Undo costs nothing until an error occurs and then repairs it fully, without requiring the reader to predict their own mistake.
- Your note says “the participant ignored the warning”. What is wrong with it? Answer: It makes the reader the subject of the failure. Rewritten with the design as subject — “the warning appeared away from the control and was not seen before acting” — the sentence describes something you can change.

### Rubric and remediation

**Failures are classified with the intention test**

Adequate evidence: A table where each observed failure is marked slip or mistake with the intention reasoning stated.

- 0 — No classification.
- 1 — Failures labelled without reasoning.
- 2 — Each classification states the intention evidence behind it.
- 3 — As adequate, and one classification is revised after re-reading the session notes, with the reason for the change.

If below 2: For each failure, write what the person appeared to be trying to do and how you know. Classify only after that sentence exists. Show at recheck: The table with intention reasoning per row.

**Unclassifiable cases are kept, not forced**

Adequate evidence: At least one honestly unclassified row, or a stated reason why every case was determinable, plus the question that would have resolved it.

- 0 — Every case forced into a class regardless of evidence.
- 1 — Unclassified cases dropped from the table.
- 2 — Unclassified cases are retained with the missing question named.
- 3 — As adequate, and the missing question is added to the next session's guide.

If below 2: Re-examine any classification you made on thin evidence. Move it to unclassified and write the question you would ask to resolve it. Show at recheck: The table with unclassified rows and their questions.

**Observations are rewritten without blame**

Adequate evidence: Original and rewritten pairs where the rewritten version makes the design the subject.

- 0 — Observations blame the reader throughout.
- 1 — Some rewrites, but blame persists in softened form.
- 2 — Every observation has a design-subject rewrite alongside it.
- 3 — As adequate, and at least one rewrite reveals a fix that was not visible in the original phrasing.

If below 2: Find every sentence whose subject is the participant and rewrite it with an interface element as the subject. Keep both versions side by side. Show at recheck: The paired original and rewritten observations.

**Interventions match the class and prefer constraint over warning**

Adequate evidence: Four interventions, each stating the class it targets and why a constraint, default or undo was chosen over a warning.

- 0 — Warnings or confirmations applied to everything.
- 1 — Interventions exist but are not matched to class.
- 2 — Each intervention matches its class with reasoning.
- 3 — As adequate, and one intervention is rejected as ineffective with the reason it would not work on that class.

If below 2: For any confirmation dialogue you designed, ask whether the reader was uncertain. If they were not, replace it with a constraint, a clearer distinction or an undo. Show at recheck: The four interventions with class matching and reasoning.

### Portfolio contribution

Practice, and directly reusable. An error classification built from observed sessions is real case-study evidence. A classification built from imagined failures is reasoning and must be labelled as such.

### Assigned resources

- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — The slips-versus-mistakes distinction and the prevention techniques, including constraints, defaults, confirmation and undo. Purpose: Gives the classification and the intervention repertoire this lesson applies. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Prevention techniques are options to choose between, not a checklist to apply wholesale. Fallback: R02.

## Lesson 5: UX laws and where they stop applying

Stable ID: m04-l05-v1. Optional. Areas 2, 3. Optional effort ~120 min.

**Objective.** Apply three named heuristics to one decision and produce, for each, a concrete situation in which following it would make the design worse.

**Bring forward.** Any decision from this module you found hard to justify, plus the screens you have been working on.

Named laws are useful shorthand in a review and dangerous as authority. Learning them without their limits produces a designer who can quote a principle at every decision and cannot tell when it does not apply.

### Learn

These heuristics are named regularities, not physical laws, and their sources present them without caveats. Fitts's law describes how target size and distance affect pointing time; Hick's law describes how the number of choices affects decision time; Jakob's law observes that people spend most of their time on other products and bring those expectations with them. Each is a genuine tendency and none of them settles a design decision on its own.

The commonest misuse is applying a law outside the conditions it describes. Hick's law concerns choices among comparable options, so citing it to justify hiding navigation is a category error: a person looking for a specific item is not choosing between equivalent alternatives, and hiding the item makes their task harder while the law's number looks better. Ask what the law's underlying situation actually is before invoking it.

Laws conflict, and the conflict is where the design work lives. Jakob's law argues for the familiar pattern; a genuine improvement argues for the unfamiliar one. Fitts's law argues for a large, close target; the surrounding layout argues that a control which dominates the screen distorts the hierarchy. Naming both sides and choosing with a stated reason is stronger practice than quoting whichever supports the decision you had already made.

Every law is a hypothesis in your specific context. The honest form is: this principle suggests X, which predicts readers will do Y, which I could check by Z. That sentence is testable. “Hick's law says fewer options” is not, and it is the form that lets a confident designer win an argument they should have lost.

**Common misconception.** “Fewer options are always better because of Hick's law.” Reducing options only helps when the options are genuinely comparable and the reader is choosing among them. Removing an option someone specifically came for does not reduce their decision time; it converts a quick choice into a search, or into leaving.

### Worked example

A filter panel with eleven options was cut to four, citing Hick's law. Task time got worse: the two most-used filters had been removed, so people scrolled the full list instead of filtering. The law was real; the situation was wrong, because these were not comparable alternatives but tools for narrowing a search. Restoring the two and grouping the rest under a “more filters” control served both the principle and the task.

#### Break the rule debate

Apply three assigned UX laws to one decision, then deliberately find a situation where each recommendation would be misleading.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A local text editor (for example Notepad) and the previous lesson artifacts. No account is needed.

- Starting material: Any decision from this module you found hard to justify, plus the screens you have been working on.
- Create HaruCourse/Practice/m04-l05-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.

</details>

#### 1. Read three law pages

- Read the assigned pages for Fitts's law, Hick's law and Jakob's law. For each write the regularity it describes and the situation it assumes.

**You should end up with:** Each law with the regularity it describes and the situation it assumes.

Worksheet fields for this step:

- Fitts · the regularity it describes, and the situation it assumes
- Hick · the regularity it describes, and the situation it assumes
- Jakob · the regularity it describes, and the situation it assumes

<details>
<summary>Help with this step</summary>

- **Assumed situation:** The conditions under which the regularity was observed. Outside them the law is a slogan.

Stuck starting? Read the three pages and write the assumption before the recommendation.

Is it enough? Each entry names a condition that could fail to hold.

</details>

#### 2. Apply them to one decision

- Take one unresolved decision from your work. Write what each of the three laws suggests. Note where two of them disagree.

**You should end up with:** One decision, what each law suggests, and where two disagree.

Worksheet fields for this step:

- The decision you have found hard to justify
- What each of the three suggests you do
- Where two of them disagree, and what the disagreement is about — A real conflict is more useful than three principles that happen to agree.

<details>
<summary>Help with this step</summary>



Stuck starting? Choose the decision you have changed your mind about more than once.

Is it enough? The conflict is stated as a disagreement about what matters, not as a tie.

</details>

#### 3. Break each one

**See it first.** Made-up example. Breaking Hick’s law on a class list.

- **What the law suggested:** Fewer options means faster choosing, so cut the list from nine classes to three.
- **What I did first:** Chose the three most popular. It felt decisive and the screen looked calmer immediately.
- **What broke:** Two of the nine were the only evening classes. Anyone who works during the day now has nothing, and no way to discover that evening classes exist.
- **Why the law did not apply:** It describes choosing among comparable options. These were not comparable: they differed on the one dimension that decided everything.
- **What I did instead:** Kept all nine and grouped them by time of day. Choosing is still fast, because the grouping does the reduction without removing anything.

**The wrong turn:** The wrong turn is applying the law to a set of options that are not interchangeable. Removing an option someone needs does not speed up their decision; it ends it.

**What it costs:** Keeping nine options means a longer screen, which is what the law was trying to avoid. Grouping pays most of that back.

**Still unknown:** Still unknown: whether the grouping labels match how people actually think about time of day. That is a question for a person.

- For each law, construct a specific situation from your own product where following it would make the design worse. Describe the situation, the harm and why the law does not apply there.

**You should end up with:** A specific counterexample for each law, taken from your own product.

**Try it with help.** A supplied application of Jakob’s law from the same made-up project: “Other booking sites put the price at the top right, so ours should too, because people expect it there.”

When would following that make the design worse?

- **When the price at the top is incomplete, because materials are charged separately, so the familiar position teaches a wrong number.** — Conventions carry meaning as well as position. Matching the position while changing the meaning is worse than being unfamiliar.
- It would never be worse; matching conventions always reduces effort. — It reduces effort when the convention means the same thing. When it does not, familiarity makes the wrong reading more confident.
- When your design is more innovative than the sites you are copying. — Innovation is not a reason on its own. The reason is whether the convention’s meaning holds in your case.
- When you have no competitors to copy. — Readers bring expectations from every site they use, not only from competitors.

**Then:** Write your own three counterexamples the same way: name the situation in your product where the assumption fails.

Worksheet fields for this step:

- Following Fitts would make it worse when…
- Following Hick would make it worse when…
- Following Jakob would make it worse when…

<details>
<summary>Help with this step</summary>



Stuck starting? For each law, ask what it assumes and then find the place in your product where that assumption is false.

Is it enough? Each counterexample names a real element of your own work.

</details>

#### 4. Convert to testable claims

- Rewrite each application as: the principle suggests X, which predicts readers will do Y, which I could check by Z. Make each Z something you could actually do.

**You should end up with:** Each application rewritten as a prediction you could check.

Worksheet fields for this step:

- Rewrite each application: the principle suggests X, which predicts readers will do Y, which I could check by Z

<details>
<summary>Help with this step</summary>



Stuck starting? Finish “this predicts readers will …, which I could check by …”.

Is it enough? Every check names something observable, not a satisfaction question.

</details>

#### 5. Decide and record

- Resolve your decision, stating which principle you followed, which you overrode and why. Save the three counterexamples.

**You should end up with:** Your resolved decision, and the repair the Check questions asked for.

Worksheet fields for this step:

- Your decision, which principle you followed and which you overrode
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Say which principle you overrode and why the other mattered more here.

Is it enough? The resolution names a principle you deliberately did not follow.

</details>

**Save and continue.** Saved for you: Your applications, counterexamples and resolution save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. This lesson is optional and produces no artefact the later lessons depend on. What your creator sees: Your creator reads the counterexamples and the resolution. The counterexamples show whether the principles are being used or merely cited. Your next action: Open Your work and choose Ready for review, or move on. The next lesson turns requests into need statements.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

A principle suggests what to investigate; it does not supply a result.

</details>

<details>
<summary>Hint 2</summary>

Reducing options may hide a necessary choice. Ask what your simplification removes.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: UX laws and where they stop applying.
Task: Apply three assigned UX laws to one decision, then deliberately find a situation where each recommendation would be misleading.
Debate my application of a UX law. Ask for its boundary conditions and a counterexample. Do not declare a universal winning design.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Argue the opposite recommendation in three sentences, then write the observation that would help choose.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m04-l05-v1/work.md. Keep source observations separate from interpretations.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** Each law has a meaningful boundary and a claim that can be checked in this context.

**Bring forward:** Keep the contextual reasoning when converting feature requests to needs.


### Practice and pause points

- Read three law pages (~25 min): Read the assigned pages for Fitts's law, Hick's law and Jakob's law. For each write the regularity it describes and the situation it assumes.
- Apply them to one decision (~25 min): Take one unresolved decision from your work. Write what each of the three laws suggests. Note where two of them disagree.
- Break each one (~30 min): For each law, construct a specific situation from your own product where following it would make the design worse. Describe the situation, the harm and why the law does not apply there.
- Convert to testable claims (~25 min): Rewrite each application as: the principle suggests X, which predicts readers will do Y, which I could check by Z. Make each Z something you could actually do.
- Decide and record (~15 min): Resolve your decision, stating which principle you followed, which you overrode and why. Save the three counterexamples.

Pause after any step; save the artifact and next action.

**Free tool path.** Written work only; no tool, account or software is involved. This lesson is marked optional because it deepens judgement rather than producing a required artefact, but the counterexamples are useful in every later critique.

### Output

Three law summaries with their assumed situations, an application to one real decision including a conflict, three concrete counterexamples from your own product, and three testable claim rewrites.

### Checks

- Why is citing Hick's law to justify hidden navigation a category error? Answer: Because the law concerns choosing among comparable options. Someone hunting for a specific item is searching, not choosing, and hiding the item lengthens their task while appearing to reduce the option count.
- Two laws point in opposite directions. What does that mean? Answer: That you have found the actual design decision. The work is naming both, deciding which matters more in this situation, and recording the reason — not selecting the one that agrees with you.
- What makes an application of a law testable? Answer: Stating the predicted reader behaviour and the check that would confirm or refute it. Without a prediction and a check, the citation is an appeal to authority.

### Rubric and remediation

**Each law is stated with the situation it assumes**

Adequate evidence: Three summaries, each naming both the regularity and the conditions under which it holds.

- 0 — Laws restated as slogans.
- 1 — Regularities stated but assumed situations missing.
- 2 — All three include the situation the law assumes.
- 3 — As adequate, and one summary notes that the source itself publishes no limits.

If below 2: For each law, write the sentence “this describes what happens when…” and complete it with the specific situation. Any law you cannot complete that sentence for has not been understood yet. Show at recheck: The three completed situation sentences.

**A genuine conflict between laws is identified**

Adequate evidence: One decision where two of the three point in different directions, with both directions stated.

- 0 — No conflict identified.
- 1 — A conflict asserted but only one side stated.
- 2 — Both directions are stated for a real decision.
- 3 — As adequate, and the resolution names what would have to be true for the overridden principle to win instead.

If below 2: Take your decision and ask what each law would advise if it were the only consideration. If all three agree, choose a harder decision. Show at recheck: The decision with both directions stated.

**Counterexamples are specific and from your own work**

Adequate evidence: Three situations drawn from your own product where following the law causes a named harm.

- 0 — No counterexamples, or generic ones borrowed from the reading.
- 1 — Counterexamples exist but are hypothetical and unconnected to your work.
- 2 — All three come from your own product with a named harm.
- 3 — As adequate, and one counterexample is one you were about to commit before writing it down.

If below 2: For each law, find a place in your own screens where applying it would remove something a reader needs. Describe the resulting harm concretely. Show at recheck: The three product-specific counterexamples.

**Applications are rewritten as testable claims**

Adequate evidence: Three rewrites in the suggests–predicts–check form, with checks that are actually feasible.

- 0 — Citations remain as assertions.
- 1 — Rewrites attempted but the check is not something you could do.
- 2 — All three are testable with feasible checks.
- 3 — As adequate, and one check is scheduled into a later module's testing work.

If below 2: Rewrite any claim whose check requires resources you do not have into one that a single person attempting the task could resolve. Show at recheck: The three feasible testable claims.

### Portfolio contribution

Practice. The counterexamples are valuable in interviews and critiques as evidence of judgement, but this lesson produces no user evidence and belongs in no case study's findings.

### Assigned resources

- R31: [Laws of UX](https://lawsofux.com/) — Assigned pages only: fittss-law, hicks-law and jakobs-law, each read with its origins and takeaways. Purpose: Supplies the named regularities this lesson then bounds with counterexamples. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. The site states these as laws and publishes no caveats; every limitation in this lesson is the course's own and must be presented that way. A printed poster is sold and also offered free; nothing is required. Fallback: R02.

## Lesson 6: From requests to user needs

Stable ID: m04-l06-v1. Core. Areas 2, 3. Optional effort ~120 min.

**Objective.** Convert five feature requests into evidence-linked need statements, and mark clearly which are supported by your Module 2 research and which remain assumptions.

**Bring forward.** Your Module 2 findings and any requests, suggestions or stakeholder asks you have collected since.

Requests arrive as solutions. If you build them as stated you lose the ability to find a better response, and you also lose the ability to tell whether the request was ever grounded in anything.

### Learn

A need statement describes what someone must accomplish and why, without naming a solution. The standard shape — as a certain person, I need to do something, so that some outcome follows, with optional trigger and constraint — is useful precisely because it is hard to fill in honestly. If you cannot state the so-that, you probably have a preference rather than a need.

Needs and wants both matter but they are different inputs. Someone may want an email reminder; the underlying need is to know what to bring before leaving home, and email is one of several responses to it. Stating the need keeps the alternatives available — a reminder, a summary on the confirmation screen, a note in the calendar entry — and lets you choose by cost and evidence rather than by whoever asked loudest.

Needs run across the whole journey, not just the parts you designed. They include the moments before a service is used and after it ends, and they include people who are not the primary user: the organiser who has to prepare materials, the person answering questions when something goes wrong. A service that satisfies the visible user and breaks its own support staff has not met its needs.

The rule that keeps this honest is that a need without research is an assumption wearing better clothes. Writing a request in need form makes it clearer, not truer. Mark every statement with its evidence source, and where there is none, keep it and label it — because an assumption you can see is one you can decide to test.

**Common misconception.** “The stakeholder knows the business, so their request is a requirement.” Their knowledge is real and is not the same as evidence about behaviour. Treat the request as a strong lead: convert it to a need, record the reasoning behind it, and note what would confirm it. That respects the expertise without skipping the check.

### Worked example

The organiser asked for a mandatory “I have read the instructions” checkbox. Converted: as an organiser, I need attendees to arrive with the right materials, so that sessions start on time. That reframing put three responses on the table — the checkbox, a materials summary on the confirmation screen, and a reminder the day before — and made it obvious that the checkbox is the only one that produces no evidence about whether anyone read anything.

#### Request translation studio

Translate feature requests into needs that allow several solutions. Use your existing requests and label supplied or invented practice requests as hypothetical.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A local text editor (for example Notepad) and the previous lesson artifacts. No account is needed.

- Starting material: Your Module 2 findings and any requests, suggestions or stakeholder asks you have collected since.
- Create HaruCourse/Practice/m04-l06-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.

</details>

#### 1. Read the need statement format

- Read the assigned page. Write the format with its optional parts, and note the difference the so-that clause makes.

**You should end up with:** The format written out, with what the so-that clause adds.

Worksheet fields for this step:

- The format, its optional parts, and what the so-that clause changes

<details>
<summary>Help with this step</summary>

- **Need statement:** Who, what they need, and so that what. The last part is the outcome, and it is what stops the statement being a feature.

Stuck starting? Read the assigned page and write the format with an example of your own.

Is it enough? Your note says what changes when the so-that clause is missing.

</details>

#### 2. Collect the requests

- Gather five real requests, suggestions or asks — from your Module 2 sessions, from the organiser brief, or from your own backlog. Write each in the words it arrived in.

**You should end up with:** Five real requests in the words they were actually said.

Worksheet fields for this step, revealed a few at a time in the app:

- Request 1 · as it was actually said, and who said it — Keep the original wording, including the solution it names.
- Request 2 · as it was actually said, and who said it
- Request 3 · as it was actually said, and who said it
- Request 4 · as it was actually said, and who said it
- Request 5 · as it was actually said, and who said it

<details>
<summary>Help with this step</summary>



Stuck starting? Look through your session notes and the brief before inventing any.

Is it enough? Each request names who said it.

</details>

#### 3. Convert to needs

**See it first.** Made-up example. Converting a stakeholder request, and finding out it had no outcome behind it.

- **The request:** “Add a reminder email the day before.” Clear, reasonable, and already a solution.
- **My first rewrite:** “Attendees need a reminder email so that they remember the class.” I had moved the words around and kept the email.
- **What the so-that clause exposed:** Remembering the class is not the outcome; turning up prepared is. Once I wrote that, the email stopped being the obvious answer.
- **The need I kept:** A first-time attendee needs to know what to bring in time to gather it, so that she can take part from the start.
- **The one that would not resolve:** Another request was “make the site feel more premium”. I could not write a so-that clause without inventing one, so I recorded the difficulty instead.

**The wrong turn:** The wrong turn is rewriting the sentence while keeping the solution inside it. It looks like a need and it has already decided the answer.

**What it costs:** Some requests will not convert, and saying so can be awkward with the person who made it. Recording the difficulty is more useful than a fabricated outcome.

**Still unknown:** Still unknown: whether attendees would read a reminder at all. That assumption now sits in the evidence column.

- Rewrite each as a need statement with no solution in it. Where the so-that is hard to write, record that difficulty rather than inventing an outcome.

**You should end up with:** Each request rewritten as a need with no solution in it, and any difficulty recorded.

**Try it with help.** A supplied conversion from the same made-up project: “Attendees need a materials checklist on the booking page so that they can see the materials checklist before booking.”

What is wrong with it?

- **The so-that clause repeats the solution, so the statement has no outcome and cannot be met any other way.** — A circular outcome is the commonest failure. It looks complete and permits exactly one answer, which is the one you started with.
- It is too specific about the page. — Specificity is not the fault; the fault is that the outcome restates the feature rather than naming what changes for the person.
- Nothing: it names who, what and why. — It names who and what twice. The why is missing, disguised as a repetition.
- It should say “users” rather than “attendees”. — The opposite: naming who they are is better. “Users” is the vaguer word.

**Then:** Check each of your own so-that clauses: if it repeats the need, the outcome is missing.

Worksheet fields for this step:

- Need 1 · with no solution in it
- Need 2
- Need 3
- Need 4
- Need 5
- Any so-that clause you found hard to write, and why — Difficulty here usually means the request has no outcome behind it. Record that rather than inventing one.

<details>
<summary>Help with this step</summary>



Stuck starting? Write the who first, then what they need, then force yourself to finish “so that…”.

Is it enough? No need statement contains a page, a button, an email or a feature.

</details>

#### 4. Mark the evidence

- For each need, record the evidence source or mark it as an assumption. For the two most consequential assumptions, write the smallest question that would test them.

**You should end up with:** An evidence source or an assumption label for every need, and the consequence of the two riskiest assumptions being wrong.

Worksheet fields for this step:

- For each need: the evidence source, or the word assumption
- For the two most consequential assumptions: what would happen if each is wrong

<details>
<summary>Help with this step</summary>

- **Assumption:** A need nobody has evidenced. Marking it is not a weakness; leaving it unmarked is.

Stuck starting? Go through the needs and try to name the session or note behind each.

Is it enough? At least one need is marked assumption, and its consequence is written down.

</details>

#### 5. Widen and save

- Add one need belonging to someone other than the primary user. Save the request-to-need table with its evidence column.

**You should end up with:** A need belonging to someone other than the primary user, and the repair the Check questions asked for.

Worksheet fields for this step:

- One need belonging to someone other than the primary user — The person who runs the class, the person who answers the phone, the person who cleans up afterwards.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Ask who else touches this service and what the design costs them.

Is it enough? The other person is named by role and their need is not simply “fewer questions”.

</details>

**Save and continue.** Saved for you: The requests, needs and evidence marks save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. Do not paste session notes containing a participant’s name into this worksheet. What your creator sees: Your creator reads the needs and the evidence column. The assumptions and the unconvertible requests are the most informative entries. Your next action: Open Your work and choose Ready for review. The next lesson writes a value proposition for your strongest need and states what it costs.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

A need statement describes what someone must accomplish, not the control they asked for.

</details>

<details>
<summary>Hint 2</summary>

Keep the original request beside the translation so you can explain what changed.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: From requests to user needs.
Task: Translate feature requests into needs that allow several solutions. Use your existing requests and label supplied or invented practice requests as hypothetical.
Challenge one thing at a time, and start with the mistake this lesson is about: “The stakeholder knows the business, so their request is a requirement.” Their knowledge is real and is not the same as evidence about behaviour. Treat the request as a strong lead: convert it to a need, record the reasoning behind it, and note what would confirm it. That respects the expertise without skipping the check.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the five rewritten statements and ask whether statements contain no solution. Look at the evidence column with specific sources or honest labels and ask whether every need has an evidence source or an assumption label. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m04-l06-v1/work.md. Keep source observations separate from interpretations.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** Needs retain the person’s goal while allowing different responses and exposing evidence gaps.

**Bring forward:** Bring the needs and alternatives into value-under-constraint decisions.


### Practice and pause points

- Read the need statement format (~20 min): Read the assigned page. Write the format with its optional parts, and note the difference the so-that clause makes.
- Collect the requests (~25 min): Gather five real requests, suggestions or asks — from your Module 2 sessions, from the organiser brief, or from your own backlog. Write each in the words it arrived in.
- Convert to needs (~30 min): Rewrite each as a need statement with no solution in it. Where the so-that is hard to write, record that difficulty rather than inventing an outcome.
- Mark the evidence (~30 min): For each need, record the evidence source or mark it as an assumption. For the two most consequential assumptions, write the smallest question that would test them.
- Widen and save (~15 min): Add one need belonging to someone other than the primary user. Save the request-to-need table with its evidence column.

Pause after any step; save the artifact and next action.

**Free tool path.** A table on paper or in Markdown is the entire deliverable. No research platform, tool or account is needed, and no AI-generated persona or interview may be used as an evidence source.

### Output

A five-row table giving each original request, its need statement, its evidence source or assumption label, plus two testing questions and one need belonging to a non-primary user.

### Checks

- Why must a need statement contain no solution? Answer: Because naming the solution ends the search. Once the need is stated as an outcome, several responses become comparable on cost and evidence, and the request becomes one candidate rather than the answer.
- You cannot write the so-that clause for one request. What does that tell you? Answer: That no one has articulated what the request achieves. That is a finding worth recording, not a gap to fill with a plausible-sounding outcome you invented.
- Does writing a request in need form make it evidence-based? Answer: No. The format improves clarity, not truth. Only the evidence column distinguishes a researched need from a well-phrased assumption, which is why an unmarked table is worse than no table.

### Rubric and remediation

**Statements contain no solution**

Adequate evidence: Five need statements in which no interface element, feature name or channel appears.

- 0 — Statements restate the requested feature.
- 1 — Some statements are solution-free; others name a mechanism.
- 2 — All five are free of solutions.
- 3 — As adequate, and each need is accompanied by at least two candidate responses so the alternatives are visible.

If below 2: Scan each statement for nouns naming a mechanism — email, checkbox, button, notification — and rewrite around the outcome instead. Show at recheck: The five rewritten statements.

**Every need has an evidence source or an assumption label**

Adequate evidence: An evidence column with a specific source, such as a named session observation, or an explicit assumption label.

- 0 — No evidence column.
- 1 — Column exists but entries are vague, such as “research” or “obvious”.
- 2 — Each row names a specific source or is labelled an assumption.
- 3 — As adequate, and the strength of each source is characterised, such as one participant's account rather than a pattern.

If below 2: For each need, name the exact observation or note it came from. If you cannot point to one, change the entry to assumption. Show at recheck: The evidence column with specific sources or honest labels.

**Difficulty writing an outcome is recorded, not concealed**

Adequate evidence: At least one recorded case where the so-that clause was hard or impossible, kept as a finding.

- 0 — All outcomes written smoothly with no difficulty noted, despite thin inputs.
- 1 — Difficulty mentioned but the outcome was invented anyway.
- 2 — A difficult case is retained with the difficulty stated.
- 3 — As adequate, and the difficulty is turned into a question for whoever made the request.

If below 2: Re-read your outcomes and mark any you supplied yourself rather than heard. Replace each with the recorded difficulty and a question. Show at recheck: The marked outcomes and the resulting question.

**A non-primary user's need is included**

Adequate evidence: One need belonging to an organiser, supporter or other affected person, stated in the same format.

- 0 — Only primary-user needs.
- 1 — Another person mentioned but not expressed as a need.
- 2 — A full need statement for a non-primary user.
- 3 — As adequate, and a tension between that need and a primary-user need is identified.

If below 2: List everyone affected when the service works and when it fails, pick one who is not the primary user, and write their need in full. Show at recheck: The added need statement and any tension identified.

### Portfolio contribution

Practice, and a genuine artefact. The needs marked with real evidence can carry into a case study's problem definition. Assumption-labelled rows must stay labelled if they appear.

### Assigned resources

- R35: [GOV.UK: start by learning user needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs) — The whole page, particularly the statement format and the needs-versus-wants distinction. Purpose: Supplies an operational format for stating needs without naming solutions. Effort: 10–20 min. Free reading, no account. Verified 2026-09-06. It is written for government services; the format transfers, the examples are contextual. Fallback: R08.

## Lesson 7: Value under constraint: who gains, who pays

Stable ID: m04-l07-v1. Core. Areas 2, 3. Optional effort ~120 min.

**Objective.** Write a value proposition for one response to your strongest need, and state explicitly what it costs — to the reader, to the organisation and to the people it does not serve.

**Bring forward.** Your need statements with their evidence marks, and the contradictions and error findings from earlier in this module.

Value is the argument that a design deserves to exist, and it is usually written as a list of benefits with no costs — which is why it convinces nobody who has to fund or build it.

### Learn

A value proposition states who it is for, what changes for them, and why this response rather than another. The comparison is the part most often skipped: value is relative to what someone does today, including doing nothing. If your response is only slightly better than the workaround people already have, that is the honest finding, not a reason to write a stronger adjective.

Every response has costs, and naming them is what makes the proposition credible. A reader may pay in extra steps, in learning, in giving up information, or in losing something the old way allowed. An organisation pays in build effort, support load and ongoing maintenance. A proposition with no costs listed has not been thought through; it has been sold.

Constraints are the boundary of the argument, and they are not the same as preferences. Time, budget, the technology already in place, legal obligations, the languages and devices your audience actually uses — these limit what can be considered. Preferences masquerade as constraints constantly, so write each one down and mark whether it could change and what it would take.

Discovery work exists to make this argument honest before anyone builds. Its purpose is to understand the problem, the constraints and whether there is a case for continuing at all, including the legitimate outcome of deciding not to proceed. Being able to argue that something should not be built is a product skill, not a failure of one.

**Common misconception.** “If it helps users, it is valuable.” Helping users is necessary and not sufficient. A response can genuinely help and still be the wrong thing to build because a cheaper response captures most of the benefit, because it cannot be maintained, or because it makes something else materially worse for someone else.

### Worked example

For the need “attendees arrive with the right materials”, three responses were compared against doing nothing. A checkbox costs almost nothing to build and produces no change in behaviour and no evidence. A materials summary on the confirmation screen costs a little and reaches everyone who books. A day-before reminder reaches people at the right moment, costs a message channel and ongoing support, and fails for anyone whose contact details are wrong. The summary won on cost per unit of benefit, with the reminder recorded as the next candidate if evidence showed timing mattered more than availability.

#### Stakeholder constraint rehearsal

Compare who gains and who pays for your proposal. Introduce the fictional constraint “no additional staff capacity” and revise your value proposition.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A local text editor (for example Notepad) and the previous lesson artifacts. No account is needed.

- Starting material: Your need statements with their evidence marks, and the contradictions and error findings from earlier in this module.
- Create HaruCourse/Practice/m04-l07-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.

</details>

#### 1. Read discovery's purpose

- Read the assigned page. Write what discovery is for, including what deciding not to continue means.

**You should end up with:** What discovery is for, including what stopping means.

Worksheet fields for this step:

- What discovery is for, including what deciding not to continue means

<details>
<summary>Help with this step</summary>

- **Discovery:** Finding out whether a problem is worth solving and how. Deciding not to continue is a successful outcome, not a failure.

Stuck starting? Read the assigned page and write what a decision not to continue would mean here.

Is it enough? Your note treats stopping as a legitimate result.

</details>

#### 2. Establish the baseline

**See it first.** Made-up example. Writing the baseline for the materials problem, and getting it wrong first.

- **My first baseline:** “Currently there is no way to find out what to bring.” Clean, and it made my proposal look essential.
- **Why it was false:** People manage. They text a friend, they ask at reception, or they turn up and borrow. The problem is real and it is not a vacuum.
- **What the accurate version changed:** My response now has to beat texting a friend, which is fast, personal and already trusted. That is a higher bar than beating nothing.
- **What it exposed:** The studio already lends aprons. For a large part of the need, the workaround is entirely adequate and my proposal adds a screen for nothing.
- **What survived:** The narrower need: things the studio cannot lend, like a sketchbook, where arriving without it costs the first twenty minutes.

**The wrong turn:** The wrong turn is describing the baseline as nothing. It makes the proposition look necessary and hides the workaround it actually has to beat.

**What it costs:** An accurate baseline shrinks the proposal, which is less exciting to present. It is what stops you building something people already have a better answer for.

**Still unknown:** Still unknown: how many people use the borrow-an-apron route. One session cannot say, and the proposition should not pretend otherwise.

- For your strongest need, write what people do today, including doing nothing. Describe the workaround accurately rather than dismissively.

**You should end up with:** Your strongest need and an accurate description of what people do today.

Worksheet fields for this step:

- Your strongest need, copied with its evidence mark
- What people actually do today, including doing nothing — Describe the workaround accurately. It is your real competitor.

<details>
<summary>Help with this step</summary>



Stuck starting? Ask what someone did the last time they had this problem, and write that.

Is it enough? The baseline includes at least one thing that already works reasonably well.

</details>

#### 3. Write the proposition

- State who it is for, what changes, and why this response rather than the alternatives. Compare against the baseline explicitly.

**You should end up with:** Who it is for, what changes, and why this response compared with the baseline.

Worksheet fields for this step:

- Who it is for
- What changes for them
- Why this response rather than the alternatives, compared with the baseline — Compare. An assertion that it is better is not a comparison.

<details>
<summary>Help with this step</summary>



Stuck starting? Write the comparison as “compared with texting a friend, this…”.

Is it enough? The why-this line mentions the baseline explicitly.

</details>

#### 4. Write the costs

- List costs to the reader, to the organisation, and to anyone the response does not serve or actively disadvantages. Be specific.

**You should end up with:** Costs to the reader, to the organisation, and to anyone it does not serve.

**Try it with help.** A supplied proposal from the same made-up project: replace the printed materials sheet at reception with a link in the confirmation email, because it is cheaper to keep up to date.

Which cost is most easily missed and most important to record?

- **The cost to people who do not use email or do not have a phone with them, who previously got the sheet at reception.** — Removing the old route disadvantages a group that used it. That cost is invisible in the proposal because those people are not the ones being designed for.
- The cost to the organisation of writing the email content. — Real and small, and it is the cost the organisation will notice by itself.
- The cost to the reader of opening an email. — Worth noting and minor compared with losing the only route you had.
- There is no cost: the proposal is cheaper and more current. — Cheaper for the studio, and the saving is paid by whoever relied on the sheet.

**Then:** Write your own third column the same way: who used the old route, and what happens to them.

Worksheet fields for this step:

- Cost to the reader — Attention, steps, a decision they now have to make.
- Cost to the organisation — Money, staff time, maintenance, something they must keep up to date.
- Cost to anyone it does not serve, or actively disadvantages

<details>
<summary>Help with this step</summary>

- **Cost bearer:** Whoever pays for the change in money, time, attention or lost access. It is rarely only the organisation.

Stuck starting? Write the third column first; it is the one that gets skipped.

Is it enough? The third column names a real group, not “edge cases”.

</details>

#### 5. List constraints and save

- Write your constraints and mark each as fixed or changeable with what changing it would require. Save all four artefacts.

**You should end up with:** Constraints separated from preferences, and the repair the Check questions asked for.

Worksheet fields for this step:

- Each constraint, marked fixed or changeable, with what changing it would require — A preference is not a constraint. Say which is which.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Constraint:** Something that genuinely cannot change now, with a reason. If it could change given a decision, it is a preference.

Stuck starting? For each constraint, ask what it would take to change it. If you can answer, it is changeable.

Is it enough? At least one thing you first called a constraint is marked changeable.

</details>

**Save and continue.** Saved for you: The baseline, proposition, costs and constraints save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file, and no invented market figures or demand numbers belong in it. What your creator sees: Your creator reads the baseline and the third cost column. Those two show whether the proposition was tested against reality. Your next action: Open Your work and choose Ready for review. The last lesson defines the smallest build that could change your decision.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Include learning, maintenance and support effort alongside money.

</details>

<details>
<summary>Hint 2</summary>

A fictional constraint trains reasoning. Do not present it as a real organizer requirement.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Value under constraint: who gains, who pays.
Task: Compare who gains and who pays for your proposal. Introduce the fictional constraint “no additional staff capacity” and revise your value proposition.
Role-play a fictional organizer with no extra staff capacity. Ask one concrete cost question at a time; stay within this constraint and invent no evidence.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Write a short objection from the person who bears the extra work, then revise the proposal or explain why its value justifies the cost.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m04-l07-v1/work.md. Keep source observations separate from interpretations.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** The proposition compares with the current workaround and makes costs and trade-offs visible.

**Bring forward:** Bring the highest-cost uncertainty to the smallest-test brief.


### Practice and pause points

- Read discovery's purpose (~25 min): Read the assigned page. Write what discovery is for, including what deciding not to continue means.
- Establish the baseline (~25 min): For your strongest need, write what people do today, including doing nothing. Describe the workaround accurately rather than dismissively.
- Write the proposition (~30 min): State who it is for, what changes, and why this response rather than the alternatives. Compare against the baseline explicitly.
- Write the costs (~25 min): List costs to the reader, to the organisation, and to anyone the response does not serve or actively disadvantages. Be specific.
- List constraints and save (~15 min): Write your constraints and mark each as fixed or changeable with what changing it would require. Save all four artefacts.

Pause after any step; save the artifact and next action.

**Free tool path.** Written work throughout; paper or Markdown is sufficient and no account, tool or data source is required. Do not use invented market figures or fabricated demand estimates anywhere in this lesson.

### Output

A baseline description of today's behaviour, a value proposition with an explicit comparison, a three-part cost list, and a constraint list marked fixed or changeable.

### Checks

- Why include doing nothing as a comparison? Answer: Because it is what most people are actually doing, and it costs them nothing to continue. If your response is not clearly better than the existing workaround, you have found that out before building rather than after.
- Your proposition lists no costs. What does a reviewer conclude? Answer: That the costs exist but have not been examined. Every response takes something from someone; an unnamed cost usually appears later as support load, abandonment, or a group quietly excluded.
- Is deciding not to build something a failed discovery? Answer: No. Establishing that a response is not worth building is a legitimate and valuable outcome. It saves the build cost and redirects attention, and being able to argue it is a product skill.

### Rubric and remediation

**The baseline describes today accurately**

Adequate evidence: A description of the current behaviour or workaround, including its genuine advantages.

- 0 — No baseline.
- 1 — A baseline that only describes the current state as broken.
- 2 — The baseline is accurate and names at least one advantage of the current way.
- 3 — As adequate, and the baseline is sourced to something observed rather than assumed.

If below 2: Write what people currently do and then write why it persists. Anything that survives without design attention usually has a real advantage; name it. Show at recheck: The baseline with its advantages named.

**The proposition compares rather than asserts**

Adequate evidence: An explicit comparison with at least two alternatives including doing nothing, on stated grounds.

- 0 — Benefits asserted with no comparison.
- 1 — Alternatives mentioned but not compared on any stated basis.
- 2 — A comparison against alternatives including doing nothing, on stated grounds.
- 3 — As adequate, and the grounds include cost relative to benefit rather than benefit alone.

If below 2: List your alternatives in a table with one column per ground of comparison, and fill the doing-nothing row honestly. Show at recheck: The comparison table with a completed doing-nothing row.

**Costs are named for three groups**

Adequate evidence: Specific costs to readers, to the organisation, and to people the response does not serve or disadvantages.

- 0 — No costs listed.
- 1 — Costs listed for one group only, usually build effort.
- 2 — Specific costs for all three groups.
- 3 — As adequate, and one cost is identified as potentially disqualifying with what would have to change.

If below 2: For each group, ask what they lose or must now do that they did not before. If a group appears to lose nothing, you have probably not identified who is excluded. Show at recheck: The three-part cost list.

**Constraints are separated from preferences**

Adequate evidence: A constraint list where each entry is marked fixed or changeable, with what changing it would require.

- 0 — Constraints and preferences are mixed with no distinction.
- 1 — A list exists but nothing is marked.
- 2 — Each entry is marked with what changing it would take.
- 3 — As adequate, and at least one item initially recorded as a constraint is reclassified as a preference.

If below 2: Take each constraint and ask who could change it and at what cost. Anything you or your team could decide differently this week is a preference. Show at recheck: The marked constraint list with at least one reclassification considered.

### Portfolio contribution

Practice, and case-study material. A value proposition with honest costs and constraints is a strong section of a case study. It must not include invented market size, demand figures or business impact.

### Assigned resources

- R07: [GOV.UK: how discovery works](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) — The purpose of discovery, understanding constraints, and deciding what happens next including stopping. Purpose: Establishes that arguing against building is a legitimate outcome and how constraints bound the argument. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. Written for government delivery phases; take the reasoning, not the phase names as a mandatory process. Fallback: R19.

## Lesson 8: The smallest thing that could change your decision

Stable ID: m04-l08-v1. Core. Areas 2, 3. Optional effort ~120 min.

**Objective.** Define the smallest build that would resolve your riskiest assumption, state in advance what result would stop the work, and record what the build cannot tell you.

**Bring forward.** Your value proposition, cost list, constraint list and the assumptions marked in your need statements.

“Minimum viable product” has become a name for a small first release. Its useful meaning is narrower and much more demanding: the smallest thing that resolves the uncertainty you would otherwise be betting on.

### Learn

Start from the riskiest assumption rather than from a feature list. The riskiest assumption is the one that combines weak evidence with a serious consequence if wrong — not the one that is most technically interesting or easiest to test. If your value proposition depends on people noticing a summary at the moment they pack their bag, that is the assumption to attack, and building the summary beautifully does not attack it.

The build should be just complex enough to let you test the idea, and no more. It need not cover the whole journey, need not be production quality, and need not be code at all: a paper sequence, a clickable set of static screens, a manual process behind a form, or a message you send yourself can each resolve a specific uncertainty. The fidelity should be set by the question, not by what looks impressive.

Decide the stopping rule before you build. Write what result would make you continue, what would make you change direction, and what would make you stop entirely. Written afterwards, any result can be read as encouraging, and it usually is — which is how a team ends up building something nobody wanted while pointing at a chart that never had a threshold.

Every small build has a boundary, and naming it is part of the deliverable. A prototype tested with three people who agreed to help tells you about comprehension and obvious obstacles; it tells you nothing about demand, frequency, retention or what happens at scale. Say what it cannot answer, and say which later module — analytics and experiments, or research at greater depth — is where that question belongs.

**Common misconception.** “The MVP is version one of the product.” Then it is a release plan, not a test. A release with no stated uncertainty and no stopping rule cannot fail, which means it cannot inform anything either; you will ship it and learn what you would have learned anyway.

### Worked example

The riskiest assumption behind the materials summary was that attendees look for preparation information at all before travelling — not that a summary would be readable. The smallest build was therefore not a summary screen but a one-question message sent to five people who had recently booked, asking what they did before attending. The stopping rule was written first: if fewer than two described looking for information beforehand, the summary drops down the list and the reminder becomes the candidate instead. The result could not establish frequency across all attendees, and the write-up said so.

#### Independent smallest-test brief

Choose the riskiest assumption and design the smallest test that could change your decision. Write the stopping rule before any results exist.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A local text editor (for example Notepad) and the previous lesson artifacts. No account is needed.

- Starting material: Your value proposition, cost list, constraint list and the assumptions marked in your need statements.
- Create HaruCourse/Practice/m04-l08-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.

</details>

#### 1. Read and rank

- Read the assigned page on testing riskiest assumptions. Then rank your assumptions by evidence strength against consequence, and pick the top one.

**You should end up with:** Assumptions ranked by evidence strength against consequence, and the riskiest named.

Worksheet fields for this step:

- Each assumption: how strong the evidence is, and what it would cost to be wrong — Rank by the two together, not by which is easiest to check.
- The riskiest one

<details>
<summary>Help with this step</summary>

- **Riskiest assumption:** The one where you know least and being wrong costs most. Not the one that is quickest to check.

Stuck starting? Bring the assumption marks from the need statements and put the consequence beside each.

Is it enough? The riskiest is not simply the easiest to test.

</details>

#### 2. Design the smallest build

**See it first.** Made-up example. Designing the smallest build for “nobody reads anything we send before the class”.

- **What I proposed first:** A booking flow with the materials list on the details page, a confirmation email and a reminder. Three weeks of work.
- **What it would have told me:** Whether that whole system produced better-prepared attendees. If not, I would not know which part failed.
- **The assumption underneath:** That people receive and read what we send before the class. Everything else depends on it and nothing tests it.
- **The smallest build:** A printed card handed over at booking, listing what to bring. No screens at all. If people arrive prepared, receiving works and the channel is the question.
- **What I removed:** The email, the reminder, the details page redesign. Each was there because it was on the plan, not because it tested the assumption.

**The wrong turn:** The wrong turn is treating the smallest build as version one of the product. Then it is a release plan, and a release with no stated uncertainty cannot fail, so it cannot inform anything.

**What it costs:** A printed card feels like a step backwards from the app you are meant to be designing. It answers the question in a week rather than a quarter.

**Still unknown:** Still unknown: whether a card works at scale, or whether people who read a card would read a screen. Neither is what this build is for.

- Describe the smallest thing that could resolve that assumption. Justify why each element is necessary and remove anything that is not.

**You should end up with:** The smallest build that could resolve it, with every element justified.

Worksheet fields for this step:

- What you would make — A paper prototype, a manual process behind a form, or a written message are all legitimate.
- Why each element is necessary, and what you removed

<details>
<summary>Help with this step</summary>



Stuck starting? Ask what the cheapest possible thing is that would change your mind about the riskiest assumption.

Is it enough? Every element of the build is there because removing it would stop the test working.

</details>

#### 3. Write the stopping rule first

- Before building anything, write what result continues, what redirects, and what stops the work. Make the thresholds concrete.

**You should end up with:** A stopping rule written before anything is built.

**Try it with help.** Two supplied stopping rules for the same made-up card test. Rule A: “If attendees seem better prepared, continue.” Rule B: “If at least twelve of the next twenty bookers arrive with the listed items, continue; if six to eleven, redirect to finding out what stopped the rest; if five or fewer, stop and investigate whether preparation is the real problem.”

Why is B the usable rule?

- **Its thresholds are concrete, so a disappointing result cannot be reinterpreted as encouraging afterwards.** — Written in advance with numbers, it constrains your future self. “Seem better prepared” can be read as success in almost any outcome.
- Because it uses numbers, and numbers are more scientific. — Numbers alone prove nothing. What matters is that the thresholds were fixed before the result arrived.
- Because twenty bookers is a statistically valid sample. — It is not, and it does not need to be. This is a decision rule for your own work, not a claim about a population.
- B is worse, because it might stop a promising direction on a small sample. — That risk is real and it is why the rule has a redirect band. Without any rule, nothing ever stops.

**Then:** Write your own three bands now, before building, and make them concrete enough to hold you to them.

Worksheet fields for this step:

- What result continues the work
- What result redirects it
- What result stops it — Concrete enough that you could not argue your way past it afterwards.

<details>
<summary>Help with this step</summary>

- **Stopping rule:** What result would make you stop, decided before you have the result. Written afterwards it is a justification.

Stuck starting? Write the stop band first; it is the one you will not want to write later.

Is it enough? You could not argue past any of the three bands after the fact.

</details>

#### 4. Name the boundary

- Write what this build cannot tell you, and map each unanswerable question to the module that addresses it. Include anything about demand, frequency or scale.

**You should end up with:** What the build cannot tell you, mapped to where those questions belong.

Worksheet fields for this step:

- The questions this build cannot answer, and which module addresses each
- If any real person is involved: what you will tell them, and what you will not collect — Leave this if nobody else is involved.

<details>
<summary>Help with this step</summary>



Stuck starting? List what someone might wrongly conclude from a good result.

Is it enough? Each unanswerable question names the module or activity that would address it.

</details>

#### 5. Submit and request review

- Save the ranking, the build description, the stopping rule and the boundary. Record actual minutes and set the practice status to ready for review with references to your outputs.

**You should end up with:** The work saved, and the repair the Check questions asked for.

Worksheet fields for this step:

- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Read the stopping rule once more and check you would still accept it if the result were bad.

Is it enough? Nothing in the record claims a result you have not obtained.

</details>

**Save and continue.** Saved for you: The ranking, the build, the stopping rule and the boundary save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. If you build something physical, keep it and name it in Your work. What your creator sees: Your creator reads the stopping rule and the boundary. A stopping rule written before the build is the part worth his attention. Your next action: Open Your work and choose Ready for review. This closes the module; your assumptions and stopping rule carry into the research modules.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Test the assumption with the greatest combination of consequence and uncertainty, not the easiest screen to polish.

</details>

<details>
<summary>Hint 2</summary>

A small exploratory test cannot estimate a market-wide conversion rate. State the decision it can inform.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: The smallest thing that could change your decision.
Task: Choose the riskiest assumption and design the smallest test that could change your decision. Write the stopping rule before any results exist.
Challenge one thing at a time, and start with the mistake this lesson is about: “The MVP is version one of the product.” Then it is a release plan, not a test. A release with no stated uncertainty and no stopping rule cannot fail, which means it cannot inform anything either; you will ship it and learn what you would have learned anyway.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the two-dimension ranking and the justified choice and ask whether the assumption is ranked by evidence and consequence. Look at the reduced build with per-element justification and ask whether the build is minimal and each element justified. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m04-l08-v1/work.md. Keep source observations separate from interpretations.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** The brief has a prewritten reconsideration rule, a feasible evidence plan and clear boundaries on conclusions.

**Bring forward:** Use this brief and your evidence bank when choosing Project 1 in m05. Recruitment gaps remain explicit; request creator review.


### Practice and pause points

- Read and rank (~25 min): Read the assigned page on testing riskiest assumptions. Then rank your assumptions by evidence strength against consequence, and pick the top one.
- Design the smallest build (~30 min): Describe the smallest thing that could resolve that assumption. Justify why each element is necessary and remove anything that is not.
- Write the stopping rule first (~25 min): Before building anything, write what result continues, what redirects, and what stops the work. Make the thresholds concrete.
- Name the boundary (~25 min): Write what this build cannot tell you, and map each unanswerable question to the module that addresses it. Include anything about demand, frequency or scale.
- Submit and request review (~15 min): Save the ranking, the build description, the stopping rule and the boundary. Record actual minutes and set the practice status to ready for review with references to your outputs.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper prototypes, a manual process behind a form, or a written message are all legitimate smallest builds and cost nothing. If you involve any real person, it must be voluntary, consented and free of private data. Do not simulate participants with AI and do not present generated responses as evidence.

### Output

A ranked assumption list with reasoning, a description of the smallest build with each element justified, a stopping rule written before building, and a boundary list mapping unanswerable questions to later modules.

### Checks

- Why rank by consequence as well as by evidence strength? Answer: Because a weakly evidenced assumption that costs little if wrong is not worth testing first. Risk is the combination: thin evidence plus serious consequence is what earns the first test.
- Why must the stopping rule be written before the build? Answer: Because afterwards, results are interpreted in favour of continuing. A threshold set in advance is the only version that can actually stop work, which is the entire point of testing rather than shipping.
- Five people used your prototype successfully. What have you established? Answer: That those five could complete the task under those conditions, which is useful evidence about comprehension and obstacles. It says nothing about how many people want this, how often they would use it, or what happens at scale.

### Rubric and remediation

**The assumption is ranked by evidence and consequence**

Adequate evidence: A ranked list where each entry carries both an evidence strength and a consequence, with the top choice justified on both.

- 0 — No ranking, or a single assumption chosen without comparison.
- 1 — Ranked on one dimension only.
- 2 — Ranked on both dimensions with the choice justified.
- 3 — As adequate, and an assumption that seemed important is explicitly deprioritised with the reason.

If below 2: Build a two-column table of evidence strength and consequence for every assumption, then choose from the weak-evidence, high-consequence quadrant. Show at recheck: The two-dimension ranking and the justified choice.

**The build is minimal and each element justified**

Adequate evidence: A description where every element is tied to the assumption, with at least one element removed for not being necessary.

- 0 — A feature list, not a test.
- 1 — A build described but elements are not tied to the assumption.
- 2 — Each element is justified and something was removed.
- 3 — As adequate, and the chosen fidelity is justified by the question rather than by convenience or appearance.

If below 2: For each element of your build, ask what you would fail to learn without it. Remove everything that survives that question unchanged. Show at recheck: The reduced build with per-element justification.

**A stopping rule exists and predates the build**

Adequate evidence: Concrete continue, redirect and stop thresholds, written and dated before any building.

- 0 — No stopping rule.
- 1 — A rule exists but thresholds are vague or only describe success.
- 2 — All three outcomes have concrete thresholds recorded before building.
- 3 — As adequate, and the rule was actually applied and the outcome honoured, including an unwelcome one.

If below 2: Write the three thresholds now, with numbers or observable descriptions, and record the order of writing relative to the build. Show at recheck: The dated stopping rule with three concrete thresholds.

**The boundary is named and mapped forward**

Adequate evidence: A list of questions this build cannot answer, each mapped to the later module that addresses it.

- 0 — No boundary stated; results treated as general.
- 1 — A generic caveat with no specific questions.
- 2 — Specific unanswerable questions mapped to later modules.
- 3 — As adequate, and the boundary explicitly rules out any claim about demand, frequency, retention or business impact.

If below 2: Write down every conclusion you would like to draw, then mark which ones your build's participants and method cannot support. Map each to the module that could. Show at recheck: The boundary list with module mappings.

### Portfolio contribution

Practice, and the closing artefact of this module. A riskiest-assumption test with a pre-written stopping rule is genuinely strong case-study material, provided any participants were real, voluntary and consented, and no result is described as measured product impact.

### Assigned resources

- R34: [GOV.UK: how the alpha phase works](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works) — Identifying and testing riskiest assumptions, building only what is complex enough to test an idea, and deciding whether to continue. Purpose: Supplies a public, non-commercial account of minimal building that avoids teaching MVP from vendor marketing. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Its timescales and team compositions describe government delivery and are not requirements for your practice. Fallback: R07.
