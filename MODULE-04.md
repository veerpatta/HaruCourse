# UX reasoning and product value

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

**Where to work:** A local text editor (for example Notepad) and the previous lesson artifacts. No account is needed.

- Starting material: Your Module 2 findings, hypothesis and the revision you made after testing. The contradictions you find here should be grounded in what you observed there, not invented.
- Create HaruCourse/Practice/m04-l01-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.

<details>
<summary>Copyable starter template</summary>

```text
# Mental models and the model you are actually building

Source labels: real observation / hypothesis / simulation / self-pilot

Situation | Expected behavior | Evidence / hypothesis | Actual design behavior | Mismatch | Revision / test
--- | --- | --- | --- | --- | ---
[point in flow] | [expectation] | [source] | [specified response] | [difference] | [next action]

## Output checklist
- [ ] The reader's model with each line marked observed or assumed, your design's implied model in its real labels, three named contradictions with consequences, and one conform-or-teach decision with its cost.

## Decision and revision
My decision:
Evidence reference:
Alternative rejected and why:
Before / after files:
What remains untested:
AI suggestion accepted or rejected and why (if used):
Next action when I return:

```

</details>





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
[Paste only the relevant table rows and describe the artifact in text. No private participant or account details.]
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

**Where to work:** Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: The flow you tested in Module 2 and the mental-model contradictions from the previous lesson.
- Create HaruCourse/Practice/m04-l02-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

<details>
<summary>Copyable starter template</summary>

```text
# Recognition, recall and what you are asking people to remember

Source labels: real observation / hypothesis / simulation / self-pilot

Step | Information needed | Visible / remembered | Interruption consequence | Proposed cue | Trade-off
--- | --- | --- | --- | --- | ---
[step] | [detail] | [mode] | [risk] | [cue] | [cost]

## Output checklist
- [ ] A memory-demand audit naming each demand and its two screens, interruption marks, two demands converted to recognition with their costs, and one unremovable demand with its justification.

## Decision and revision
My decision:
Evidence reference:
Alternative rejected and why:
Before / after files:
What remains untested:
AI suggestion accepted or rejected and why (if used):
Next action when I return:

```

</details>

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

**Where to work:** Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: Your flow and the memory-demand audit. Use the same screens so the analysis accumulates.
- Create HaruCourse/Practice/m04-l03-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

<details>
<summary>Copyable starter template</summary>

```text
# Affordances, signifiers and feedback

Source labels: real observation / hypothesis / simulation / self-pilot

Control | Possible action | Signifier | Feedback | Touch behavior | Repair | Tested / specified
--- | --- | --- | --- | --- | --- | ---
[control] | [action] | [cue] | [response] | [no hover assumption] | [change] | [label]

## Output checklist
- [ ] A three-column affordance, signifier and feedback inventory with blanks left visible, touch-availability marks, and two repairs each stating what the reader can now tell.

## Decision and revision
My decision:
Evidence reference:
Alternative rejected and why:
Before / after files:
What remains untested:
AI suggestion accepted or rejected and why (if used):
Next action when I return:

```

</details>

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

**Where to work:** Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: Your Module 2 session notes and every failure, hesitation or wrong turn you recorded there.
- Create HaruCourse/Practice/m04-l04-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

<details>
<summary>Copyable starter template</summary>

```text
# Slips, mistakes and designing for the error you caused

Source labels: real observation / hypothesis / simulation / self-pilot

Failure / source | Intended action | Slip / mistake and why | Prevention | Recovery message | Next action
--- | --- | --- | --- | --- | ---
[observed failure or hypothetical scenario] | [intent] | [reasoning] | [design] | [your text] | [action]

## Output checklist
- [ ] A classification table of observed failures with slips, mistakes and unclassified rows; blame-free rewrites alongside the originals; and one prevention and one recovery for each class with reasoning.

## Decision and revision
My decision:
Evidence reference:
Alternative rejected and why:
Before / after files:
What remains untested:
AI suggestion accepted or rejected and why (if used):
Next action when I return:

```

</details>

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

**Where to work:** A local text editor (for example Notepad) and the previous lesson artifacts. No account is needed.

- Starting material: Any decision from this module you found hard to justify, plus the screens you have been working on.
- Create HaruCourse/Practice/m04-l05-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.

<details>
<summary>Copyable starter template</summary>

```text
# UX laws and where they stop applying

Source labels: real observation / hypothesis / simulation / self-pilot

Law | Prediction for my design | Boundary / counterexample | Testable claim | Evidence needed
--- | --- | --- | --- | ---
[assigned law] | [prediction] | [condition] | [specific claim] | [observation]

## Output checklist
- [ ] Three law summaries with their assumed situations, an application to one real decision including a conflict, three concrete counterexamples from your own product, and three testable claim rewrites.

## Decision and revision
My decision:
Evidence reference:
Alternative rejected and why:
Before / after files:
What remains untested:
AI suggestion accepted or rejected and why (if used):
Next action when I return:

```

</details>





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
[Paste only the relevant table rows and describe the artifact in text. No private participant or account details.]
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

**Where to work:** A local text editor (for example Notepad) and the previous lesson artifacts. No account is needed.

- Starting material: Your Module 2 findings and any requests, suggestions or stakeholder asks you have collected since.
- Create HaruCourse/Practice/m04-l06-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.

<details>
<summary>Copyable starter template</summary>

```text
# From requests to user needs

Source labels: real observation / hypothesis / simulation / self-pilot

Request / source | Person | Situation | Needed outcome | Evidence status | Alternative responses
--- | --- | --- | --- | --- | ---
[request] | [person] | [context] | [need without feature] | [real / hypothesis] | [options]

## Output checklist
- [ ] A five-row table giving each original request, its need statement, its evidence source or assumption label, plus two testing questions and one need belonging to a non-primary user.

## Decision and revision
My decision:
Evidence reference:
Alternative rejected and why:
Before / after files:
What remains untested:
AI suggestion accepted or rejected and why (if used):
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

A need statement describes what someone must accomplish, not the control they asked for.

</details>

<details>
<summary>Hint 2</summary>

Keep the original request beside the translation so you can explain what changed.

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

**Where to work:** A local text editor (for example Notepad) and the previous lesson artifacts. No account is needed.

- Starting material: Your need statements with their evidence marks, and the contradictions and error findings from earlier in this module.
- Create HaruCourse/Practice/m04-l07-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.

<details>
<summary>Copyable starter template</summary>

```text
# Value under constraint: who gains, who pays

Source labels: real observation / hypothesis / simulation / self-pilot

Current workaround | User gain | Organization gain | Cost bearer | Constraint | Trade-off | Evidence status
--- | --- | --- | --- | --- | --- | ---
[baseline] | [benefit hypothesis] | [benefit hypothesis] | [who does extra work] | [constraint] | [choice] | [source]

## Output checklist
- [ ] A baseline description of today's behaviour, a value proposition with an explicit comparison, a three-part cost list, and a constraint list marked fixed or changeable.

## Decision and revision
My decision:
Evidence reference:
Alternative rejected and why:
Before / after files:
What remains untested:
AI suggestion accepted or rejected and why (if used):
Next action when I return:

```

</details>





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
[Paste only the relevant table rows and describe the artifact in text. No private participant or account details.]
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

**Where to work:** A local text editor (for example Notepad) and the previous lesson artifacts. No account is needed.

- Starting material: Your value proposition, cost list, constraint list and the assumptions marked in your need statements.
- Create HaruCourse/Practice/m04-l08-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.

<details>
<summary>Copyable starter template</summary>

```text
# The smallest thing that could change your decision

Source labels: real observation / hypothesis / simulation / self-pilot

Assumption | Consequence if wrong | Current evidence | Smallest test | Stop / revise signal | Cannot conclude | Next step
--- | --- | --- | --- | --- | --- | ---
[claim] | [consequence] | [source or none] | [bounded test] | [prewritten rule] | [boundary] | [action]

## Output checklist
- [ ] A ranked assumption list with reasoning, a description of the smallest build with each element justified, a stopping rule written before building, and a boundary list mapping unanswerable questions to later modules.

## Decision and revision
My decision:
Evidence reference:
Alternative rejected and why:
Before / after files:
What remains untested:
AI suggestion accepted or rejected and why (if used):
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Test the assumption with the greatest combination of consequence and uncertainty, not the easiest screen to polish.

</details>

<details>
<summary>Hint 2</summary>

A small exploratory test cannot estimate a market-wide conversion rate. State the decision it can inform.

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
