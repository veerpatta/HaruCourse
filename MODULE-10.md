# Prototyping and evaluation

> Experience refinement is applied lesson by lesson. See [the agreed learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for guided practice, worksheets, videos, free-tier constraints and the refinement ledger that records which lessons carry the guided worksheet. Existing teaching and diagnostic independence remain in force.

Generated from src/module10.ts; edit that source, then run npm run docs:generate. Level 3 · Module m10 · requirement areas 10. Optional effort 35 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m09. This is guidance for meaningful practice, not a lock. Module approved resource pair: R12 / R05. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: Build the cheapest thing that answers the question

Stable ID: m10-l01-v1. Core. Areas 10. Optional effort ~120 min.

**Objective.** Write the question your prototype must answer, choose the lowest fidelity that can answer it, and state what that choice makes untestable.

**Bring forward.** Your m07 open questions, m08 screens and m09 interaction specifications.

Prototypes are built to be thrown away. The only reason to add fidelity is that a question demands it.

### Learn

The assigned guidance frames prototypes as tools for learning, and the practical consequence is that the artefact follows the question. “Do people understand what they are committing to?” is answerable on paper. “Can people find the cancellation route?” needs something clickable. “Does the wait feel acceptable on a slow connection?” needs a real page and real throttling. Building the highest fidelity you can manage answers the first two expensively and the third accidentally.

Low fidelity is not a lesser stage; it is a different instrument with its own reach. Paper is fast, invites criticism, and removes the visual polish that makes people comment on colour instead of order. Its limit is real: it cannot show timing, it cannot show what happens when data is slow or wrong, and it cannot test anything about the keyboard or a screen reader.

A clickable prototype built from a local HTML file — plain pages with links — answers flow questions honestly and costs an evening. It also has a boundary worth stating: it usually contains one path with clean data, so it tests whether the route works, not whether the product does.

Write the untestable list at the moment you choose, not when someone asks. This is the same discipline as m05's exclusion sentence, and it prevents the familiar failure where a paper test becomes evidence that the product is usable, or a clickable prototype becomes evidence that the performance is fine.

**Common misconception.** “A more realistic prototype gives more reliable results.” It gives results about a wider set of things, at more cost, and it makes people comment on the surface. If your question is about order or wording, realism is money spent buying feedback you did not want.

### Worked example

Three questions produced three prototypes. “Do people understand what they are committing to before paying?” — paper, because the question is about wording and order, and the untestable list said: nothing about timing, nothing about real prices. “Can people find how to change a booking?” — a local HTML click-through of six pages, with the note that only one path exists and all data is clean. “Does the payment wait feel bearable?” — a rough page with a deliberate delay and throttling, which was the only one that needed any code, and it answered a question the other two could not touch.

#### Build the cheapest thing that answers the question

Write the question your prototype must answer, choose the lowest fidelity that can answer it, and state what that choice makes untestable.

**Where to work:** Paper for order and wording; a folder of linked local HTML files for flow; the same files with throttling for timing. No account, subscription or design platform is required at any fidelity in this module.

- Starting material: Your open-questions list and current screens.
- Create HaruCourse/Practice/m10-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Build the cheapest thing that answers the question

Input artifact: Your open-questions list and current screens.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] One written question per prototype you plan
- [ ] A chosen fidelity for each, with the reason
- [ ] An untestable list per prototype
- [ ] One prototype started at the lowest fidelity that fits

## 1. Read and list questions
- Read the assigned guidance on choosing prototype fidelity.
- List the open questions from m07 and m09 you still cannot answer.
- Mark which are about order, flow or timing.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Match fidelity to question
- For each question choose paper, clickable or built.
- Justify every choice above paper by what paper cannot answer.
- Reject any fidelity chosen for how it will look.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Write the untestable lists
- For each prototype write what it cannot establish.
- Name the claim you would be tempted to make from it.
- Keep these lists; they go into the report later.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Start the lowest one
- Build the paper or clickable version for your first question.
- Include one failure path, not only the happy one.
- Stop as soon as it can answer the question.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record the decision
- Write why you stopped where you did.
- Note what you would add if a later question needed it.
- Save the questions, choices and untestable lists together.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Each prototype has a written question: [evidence reference]
- Fidelity is justified by what the level below cannot answer: [evidence reference]
- An untestable list exists per prototype: [evidence reference]
- The first prototype stops at the level that answers its question: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

For each prototype complete “this exists to find out whether …”. Anything you cannot complete is an artefact, not a prototype.

</details>

<details>
<summary>Hint 2</summary>

For each prototype ask what paper could not tell you. If the answer is nothing, build it on paper.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m10-l01-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Each prototype has a written question: One specific question per planned prototype, drawn from your open-questions list. Fidelity is justified by what the level below cannot answer: A justification for every choice above paper, naming the specific limitation. An untestable list exists per prototype: A written list per prototype naming what it cannot establish and the tempting claim. The first prototype stops at the level that answers its question: A built paper or clickable prototype including one failure path, with a note on why you stopped.

**Bring forward:** The question-to-fidelity table is small and shows judgement: it is the difference between prototyping to learn and prototyping to present. Module handoff: Bring unresolved issues to m11


### Practice and pause points

- Read and list questions (~20 min): Read the assigned guidance on choosing prototype fidelity. List the open questions from m07 and m09 you still cannot answer. Mark which are about order, flow or timing.
- Match fidelity to question (~25 min): For each question choose paper, clickable or built. Justify every choice above paper by what paper cannot answer. Reject any fidelity chosen for how it will look.
- Write the untestable lists (~30 min): For each prototype write what it cannot establish. Name the claim you would be tempted to make from it. Keep these lists; they go into the report later.
- Start the lowest one (~30 min): Build the paper or clickable version for your first question. Include one failure path, not only the happy one. Stop as soon as it can answer the question.
- Record the decision (~15 min): Write why you stopped where you did. Note what you would add if a later question needed it. Save the questions, choices and untestable lists together.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper for order and wording; a folder of linked local HTML files for flow; the same files with throttling for timing. No account, subscription or design platform is required at any fidelity in this module.

### Output

One written question per prototype you plan; A chosen fidelity for each, with the reason; An untestable list per prototype; One prototype started at the lowest fidelity that fits

### Checks

- What can paper not answer? Answer: Anything about timing, real or messy data, performance, keyboard behaviour or assistive technology. It is excellent for order, wording and expectation.
- Why write the untestable list when choosing? Answer: Because at reporting time the pressure runs the other way. Writing it early is what stops a paper test becoming evidence that the product is usable.
- When is higher fidelity justified? Answer: When a specific question cannot be answered lower down — timing, real data, implemented behaviour. Not because the result will look more convincing.

### Rubric and remediation

**Each prototype has a written question**

Adequate evidence: One specific question per planned prototype, drawn from your open-questions list.

- 0 — Prototypes planned as artefacts with no question.
- 1 — Questions written but too broad to answer.
- 2 — Each has a specific, answerable question.
- 3 — As adequate, and each question names the decision it would change.

If below 2: For each prototype complete “this exists to find out whether …”. Anything you cannot complete is an artefact, not a prototype. Show at recheck: The question list.

**Fidelity is justified by what the level below cannot answer**

Adequate evidence: A justification for every choice above paper, naming the specific limitation.

- 0 — Fidelity chosen by preference or appearance.
- 1 — Justified in general terms.
- 2 — Each choice names what the lower level could not answer.
- 3 — As adequate, and one planned prototype was moved down a level after the justification failed.

If below 2: For each prototype ask what paper could not tell you. If the answer is nothing, build it on paper. Show at recheck: The justifications.

**An untestable list exists per prototype**

Adequate evidence: A written list per prototype naming what it cannot establish and the tempting claim.

- 0 — No lists.
- 1 — Generic caveats about fidelity.
- 2 — Specific untestable items and the tempting claim named.
- 3 — As adequate, and the lists are written to be reused verbatim in the final report.

If below 2: Write the strongest sentence you would like to claim from each prototype, then decide whether it is licensed. Show at recheck: The untestable lists.

**The first prototype stops at the level that answers its question**

Adequate evidence: A built paper or clickable prototype including one failure path, with a note on why you stopped.

- 0 — Nothing built, or built beyond the question's needs.
- 1 — Built but happy path only.
- 2 — Built to the question's level with a failure path included.
- 3 — As adequate, and you stopped before adding detail you noticed yourself wanting to add.

If below 2: Remove anything in your prototype that the question does not need. Add the one failure path if it is missing. Show at recheck: The prototype and the stopping note.

### Portfolio contribution

The question-to-fidelity table is small and shows judgement: it is the difference between prototyping to learn and prototyping to present.

### Assigned resources

- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — Choosing what to prototype, the fidelity levels and what each is used to learn. Purpose: Supplies the question-first framing this module runs on. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. Written for government service teams; a paper click-through cannot validate performance, real data or implemented accessibility, and the untestable lists here make that explicit per prototype. Fallback: R05.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — All ten, used to generate candidate questions before testing. Purpose: Helps produce questions worth prototyping, kept separate from evidence. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. A heuristic finding is an expert opinion; it suggests what to test rather than settling it. Fallback: R11.

## Lesson 2: A clickable prototype without an account

Stable ID: m10-l02-v1. Core. Areas 10. Optional effort ~120 min.

**Objective.** Build a clickable prototype of one flow from linked local files, including one failure path, and record exactly what it fakes.

**Bring forward.** Your m08 screens and the flow chosen in lesson 1.

A prototype nobody can click is a picture. A prototype that requires a paid account is a dependency your course does not accept.

### Learn

A folder of HTML files with links between them is a genuine clickable prototype: it runs in any browser, needs no account or install, works offline, and can be handed to a participant on their own phone. The mechanism is not the point — the point is that the route is walkable — and building it this way removes the tool question entirely, which is why the course's required exercise uses it.

Prototypes with only a happy path produce tests where everything works and nothing is learned. Include at least one failure: a full class, a declined payment, an empty result. Those are the paths where your m07 exception table gets its first contact with a person, and where most of the real findings come from.

Fake data shapes results. All-short names and round prices hide layout problems and make comparisons easier than they will be; a set that includes one very long name, one missing value and one awkward number tests the design rather than the demo. This is the same discipline as the dense-data lesson in m08, applied to what the participant sees.

Write down what the prototype fakes: which buttons do nothing, which data is invented, what happens instantly that would really take seconds. Participants treat anything that responds as real, and a finding drawn from a faked behaviour is not a finding about your product.

**Common misconception.** “A prototype should feel like the real product.” It should behave like the real product in the ways your question cares about, and be obviously disposable in every other way. Feeling real makes people evaluate the surface and makes you reluctant to change it.

### Worked example

Seven linked files covered browse, detail, review, pay, confirm, a full-class failure and a payment failure. Data included one class with a very long title, one with no price shown, and one with a single place remaining. Buttons that did nothing were listed on a fakes sheet — the account link, the search box, the second page of results — along with the two-second delay inserted before confirmation. In testing, one participant tried the search box, which the fakes sheet had predicted, and the moderator recorded it as an untested route rather than a failure.

#### A clickable prototype without an account

Build a clickable prototype of one flow from linked local files, including one failure path, and record exactly what it fakes.

**Where to work:** A text editor and a browser. One file per screen, links between them, and your real content. Add a stylesheet if you want the fidelity; the point is that it opens on a participant's phone with no account and no install.

- Starting material: Your chosen flow and its screens.
- Create HaruCourse/Practice/m10-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# A clickable prototype without an account

Input artifact: Your chosen flow and its screens.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A clickable prototype of one flow, runnable in a browser
- [ ] At least one failure path included
- [ ] Awkward fake data: a long name, a missing value, an edge case
- [ ] A fakes sheet listing everything that does not really work

## 1. Plan the screens
- List the screens your chosen flow needs, including one failure.
- Decide which actions must work and which may be dead.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Build the click-through
- Create one file per screen with your real content.
- Link each action to the screen it should reach.
- Add the failure path from your exception table.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Make the data awkward
- Include one very long name and one missing value.
- Include one edge case: last place, zero results, or an unusual price.
- Check the layout survives all three.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Write the fakes sheet
- List every control that does nothing.
- List every invented value and every faked delay.
- Note which of these a participant is likely to try.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Open it on a phone
- Open the prototype on a phone and walk the flow.
- Fix anything unreachable or unreadable at that size.
- Save the prototype and the fakes sheet together.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The prototype runs in a browser with no account: [evidence reference]
- At least one failure path is included: [evidence reference]
- Data includes long, missing and edge-case values: [evidence reference]
- A fakes sheet records everything that does not work: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Rebuild as one file per screen with plain links, then open the first file on a phone and walk the flow.

</details>

<details>
<summary>Hint 2</summary>

Take the top failure from your exception table and add the screen plus the link that reaches it.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m10-l02-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The prototype runs in a browser with no account: Linked local files walkable end to end, opened on a phone as well as a computer. At least one failure path is included: A reachable failure from your exception table, with its real wording. Data includes long, missing and edge-case values: Content containing at least one very long value, one missing value and one edge case. A fakes sheet records everything that does not work: A list of dead controls, invented values and faked timings, with likely participant attempts noted.

**Bring forward:** An account-free clickable prototype is worth showing precisely because it is unglamorous: it demonstrates you can produce something testable without waiting for tools. Module handoff: Bring unresolved issues to m11


### Practice and pause points

- Plan the screens (~25 min): List the screens your chosen flow needs, including one failure. Decide which actions must work and which may be dead.
- Build the click-through (~40 min): Create one file per screen with your real content. Link each action to the screen it should reach. Add the failure path from your exception table.
- Make the data awkward (~20 min): Include one very long name and one missing value. Include one edge case: last place, zero results, or an unusual price. Check the layout survives all three.
- Write the fakes sheet (~20 min): List every control that does nothing. List every invented value and every faked delay. Note which of these a participant is likely to try.
- Open it on a phone (~15 min): Open the prototype on a phone and walk the flow. Fix anything unreachable or unreadable at that size. Save the prototype and the fakes sheet together.

Pause after any step; save the artifact and next action.

**Free tool path.** A text editor and a browser. One file per screen, links between them, and your real content. Add a stylesheet if you want the fidelity; the point is that it opens on a participant's phone with no account and no install.

### Output

A clickable prototype of one flow, runnable in a browser; At least one failure path included; Awkward fake data: a long name, a missing value, an edge case; A fakes sheet listing everything that does not really work

### Checks

- Why include a failure path in the prototype? Answer: Because the happy path rarely produces findings. The exception paths are where your m07 table meets a real person, and where most usability problems live.
- Why does fake data need to be awkward? Answer: Because tidy data hides the layout and comparison problems the design will actually meet. A long name and a missing value test the design rather than the demo.
- What is the fakes sheet for? Answer: Participants treat anything that responds as real. Without a record of what is faked, you will mistake a finding about your prototype for a finding about your product.

### Rubric and remediation

**The prototype runs in a browser with no account**

Adequate evidence: Linked local files walkable end to end, opened on a phone as well as a computer.

- 0 — Static images with no links.
- 1 — A click-through that requires an account or install.
- 2 — Linked local files, walkable, opened on a phone.
- 3 — As adequate, and the prototype works offline, so it can be used anywhere a participant is.

If below 2: Rebuild as one file per screen with plain links, then open the first file on a phone and walk the flow. Show at recheck: The prototype opened on a phone.

**At least one failure path is included**

Adequate evidence: A reachable failure from your exception table, with its real wording.

- 0 — Happy path only.
- 1 — A failure screen exists but is unreachable from the flow.
- 2 — At least one failure is reachable and uses the real wording.
- 3 — As adequate, and the failure chosen is the highest-harm one from your m07 ranking.

If below 2: Take the top failure from your exception table and add the screen plus the link that reaches it. Show at recheck: The failure path in the prototype.

**Data includes long, missing and edge-case values**

Adequate evidence: Content containing at least one very long value, one missing value and one edge case.

- 0 — Uniform tidy data.
- 1 — Some variation, but nothing that stresses the layout.
- 2 — All three present and the layout checked against them.
- 3 — As adequate, and one layout change was made because of the awkward data.

If below 2: Replace three items with your worst real examples and re-check the layout at phone width. Show at recheck: The prototype content.

**A fakes sheet records everything that does not work**

Adequate evidence: A list of dead controls, invented values and faked timings, with likely participant attempts noted.

- 0 — No record.
- 1 — Partial list of dead controls only.
- 2 — Controls, data and timings all recorded.
- 3 — As adequate, and the sheet predicts which fakes participants will try.

If below 2: Walk your own prototype tapping everything. Every non-response is a row on the sheet. Show at recheck: The fakes sheet.

### Portfolio contribution

An account-free clickable prototype is worth showing precisely because it is unglamorous: it demonstrates you can produce something testable without waiting for tools.

### Assigned resources

- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — What to include in a prototype and what it can be used to test. Purpose: Sets the scope of a click-through and what claims it can support. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. It cannot validate performance, real data volumes or implemented accessibility; your fakes sheet records the rest. Fallback: R05.
- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — The sections on failure, feedback and recovery. Purpose: Helps choose which failure path is worth including first. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Prevention techniques are options rather than a checklist. Fallback: R02.

## Lesson 3: Tasks that do not tell people the answer

Stable ID: m10-l03-v1. Core. Areas 10. Optional effort ~120 min.

**Objective.** Write five test tasks as situations with a goal and a stopping condition, define success for each in advance, and remove every word that names a control.

**Bring forward.** Your prototype and the questions it exists to answer.

A task containing your interface vocabulary tests whether people can match words, not whether the design works.

### Learn

The words in a task become the words a participant searches for. “Find the cancellation policy” makes the test about spotting the word cancellation; “you booked a class for Saturday and something has come up — what would you do?” makes it about whether the design supports the situation. This is the same discipline as the tree-test tasks in m06, and it fails in the same way when ignored.

Defining success in advance stops you deciding afterwards, when you already know what happened and want the session to have gone well. Write the destination and the acceptable alternatives, including routes you did not intend but would accept — a person who reaches the right outcome by an unexpected path has succeeded and taught you something.

Order matters because tasks teach. A task that requires opening the filter panel teaches the panel exists, so a later task about filtering will be easier for reasons that have nothing to do with your design. Put the discovery-sensitive tasks first, and note in the record when an earlier task has contaminated a later one.

Five tasks is about what fits a comfortable session with a person who is being helpful and unpaid. Beyond that, attention drops and later results are worse without being obviously worse, which is the most dangerous kind of unreliable data.

**Common misconception.** “Longer tests give more data.” They give more data of declining quality. A tired participant behaves differently, and the last two tasks in a long session tell you about fatigue as much as about your design.

### Worked example

Five tasks, none naming a control. “You want to do something on Saturday with your sister; find something and get to the point where you would pay” — success: reaching the review screen with a class selected, by any route. “Something has come up and you cannot attend the class you booked” — success: reaching the change or cancel route; alternative accepted: finding the phone number, with a note that this counts as a workaround rather than a success. The discovery-sensitive task ran first. A sixth task was cut because the session was already reaching forty minutes.

#### Tasks that do not tell people the answer

Write five test tasks as situations with a goal and a stopping condition, define success for each in advance, and remove every word that names a control.

**Where to work:** Written work: the tasks on paper or in a text file, with the success definitions beside them. Nothing else is needed.

- Starting material: Your prototype and its question list.
- Create HaruCourse/Practice/m10-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Tasks that do not tell people the answer

Input artifact: Your prototype and its question list.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Five tasks stated as situations with goals
- [ ] A success definition per task, written in advance
- [ ] One task targeting a failure path
- [ ] A deliberate task order with contamination noted

## 1. Read and draft
- Read the assigned guidance on writing tasks for a session.
- Draft five tasks from the questions your prototype answers.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Strip the vocabulary
- Underline every word in your tasks that appears in the interface.
- Rewrite each task to describe the situation instead.
- Check nothing names a button, menu or screen.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Define success
- Write the destination that counts as success for each task.
- List acceptable alternative routes, including workarounds you would note.
- Decide what counts as abandonment.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Order and prune
- Put discovery-sensitive tasks first.
- Note where an earlier task will teach a later one.
- Cut to five and record what you removed.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Rehearse
- Read the tasks aloud to check they sound natural.
- Time yourself completing all five as the expert.
- Save the tasks, the success definitions and the order.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Tasks describe situations and name no controls: [evidence reference]
- Success is defined in advance with alternatives: [evidence reference]
- One task targets a failure path: [evidence reference]
- Order is deliberate and contamination is noted: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Underline every word that also appears on screen and rewrite that task around the person's circumstances.

</details>

<details>
<summary>Hint 2</summary>

For each task write what you would accept as done, including a route you did not design.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m10-l03-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Tasks describe situations and name no controls: Five tasks with no interface vocabulary, each giving a situation and a goal. Success is defined in advance with alternatives: A written destination per task plus acceptable alternative routes and an abandonment definition. One task targets a failure path: A task whose situation leads into an exception path from your table. Order is deliberate and contamination is noted: A stated order with notes on which earlier tasks teach later ones.

**Bring forward:** Task wording with pre-written success definitions is small and reads as professional. Show one rejected wording beside its replacement. Module handoff: Bring unresolved issues to m11


### Practice and pause points

- Read and draft (~25 min): Read the assigned guidance on writing tasks for a session. Draft five tasks from the questions your prototype answers.
- Strip the vocabulary (~25 min): Underline every word in your tasks that appears in the interface. Rewrite each task to describe the situation instead. Check nothing names a button, menu or screen.
- Define success (~25 min): Write the destination that counts as success for each task. List acceptable alternative routes, including workarounds you would note. Decide what counts as abandonment.
- Order and prune (~30 min): Put discovery-sensitive tasks first. Note where an earlier task will teach a later one. Cut to five and record what you removed.
- Rehearse (~15 min): Read the tasks aloud to check they sound natural. Time yourself completing all five as the expert. Save the tasks, the success definitions and the order.

Pause after any step; save the artifact and next action.

**Free tool path.** Written work: the tasks on paper or in a text file, with the success definitions beside them. Nothing else is needed.

### Output

Five tasks stated as situations with goals; A success definition per task, written in advance; One task targeting a failure path; A deliberate task order with contamination noted

### Checks

- Why can a task not name a control? Answer: Because the participant will search for that word, and you will learn whether they can match text rather than whether your design supports the situation.
- Why define success before the session? Answer: Because afterwards you know what happened and will be tempted to define success as what occurred. Written first, the definition can be failed.
- Why does task order matter? Answer: Because tasks teach. An early task that reveals a control makes later tasks easier for reasons unrelated to your design, and the record has to note it.

### Rubric and remediation

**Tasks describe situations and name no controls**

Adequate evidence: Five tasks with no interface vocabulary, each giving a situation and a goal.

- 0 — Tasks name buttons, menus or screens.
- 1 — Mostly situational with one or two revealing words.
- 2 — All five are situational with no interface vocabulary.
- 3 — As adequate, and the situations come from your m05 research rather than being invented.

If below 2: Underline every word that also appears on screen and rewrite that task around the person's circumstances. Show at recheck: The rewritten tasks.

**Success is defined in advance with alternatives**

Adequate evidence: A written destination per task plus acceptable alternative routes and an abandonment definition.

- 0 — No definitions.
- 1 — Destinations without alternatives.
- 2 — Destinations, alternatives and abandonment all defined beforehand.
- 3 — As adequate, and one workaround is marked as a note-worthy success rather than a clean one.

If below 2: For each task write what you would accept as done, including a route you did not design. Show at recheck: The success definitions.

**One task targets a failure path**

Adequate evidence: A task whose situation leads into an exception path from your table.

- 0 — All tasks are happy paths.
- 1 — A failure task exists but the prototype cannot reach it.
- 2 — A failure task that the prototype supports.
- 3 — As adequate, and it targets the highest-harm failure you identified.

If below 2: Take one exception from your m07 table and write the situation that would lead a person into it. Show at recheck: The failure task.

**Order is deliberate and contamination is noted**

Adequate evidence: A stated order with notes on which earlier tasks teach later ones.

- 0 — No order considered.
- 1 — Ordered by convenience.
- 2 — Discovery-sensitive tasks first with contamination noted.
- 3 — As adequate, and the record says how you will interpret a later task that was taught by an earlier one.

If below 2: Read your tasks in order and mark where a control is revealed. Move the tasks that depend on discovering it earlier. Show at recheck: The ordered task list.

### Portfolio contribution

Task wording with pre-written success definitions is small and reads as professional. Show one rejected wording beside its replacement.

### Assigned resources

- R05: [GOV.UK: moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing) — Planning the session and writing tasks. Purpose: Supplies the task-writing discipline this lesson applies. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. Written for teams with a note-taker and a lab; adapt the procedure, not the staffing. Fallback: R12.
- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — What a prototype at your fidelity can be used to test. Purpose: Keeps the tasks inside what your prototype can honestly support. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Tasks about timing or real data cannot be answered by a paper or click-through prototype. Fallback: R05.

## Lesson 4: Recruit, consent and set up the session

Stable ID: m10-l04-v1. Core. Areas 10. Optional effort ~120 min.

**Objective.** Recruit at least three participants for a usability session, obtain consent covering recording and their own device, and prepare a session plan you can run alone.

**Bring forward.** Your m05 screener, consent introduction and data plan.

The session runs on preparation. Alone, without a note-taker, whatever you have not decided beforehand will be decided badly under pressure.

### Learn

Usability sessions need people with the relevant experience for the same reason interviews do: a person who has never booked anything online will teach you about first contact with the whole category rather than about your flow. That is sometimes exactly what you want, and it should be a choice recorded in the screener rather than an accident of who replied.

Consent here covers two things your earlier interviews did not: recording a screen or a device, and using the participant's own phone. If they use their device, be explicit that you are not installing anything, that you will not see their other apps or data, and that they can stop and delete anything captured.

Working without a note-taker forces an honest choice. Recording with consent lets you moderate properly and review later; taking full notes means you will miss things while writing. Choose before the session and write down which you chose, because a moderator who tries both does neither.

The failure modes of a solo session are practical: a prototype that will not load, a phone that dies, a participant who arrives with ten minutes. Have the prototype on the device already, have the fakes sheet printed, and have a short version of the session that covers the two most important tasks if time collapses.

**Common misconception.** “Anyone can be a participant for a usability test.” Anyone can reveal something, but who you recruit decides what you can conclude. A convenience sample is legitimate and must be declared, in the report, in the same sentence as the findings.

### Worked example

Three participants were recruited through the same route as the m05 study, screened for having booked something with a fixed time in the last two months. Consent covered audio recording, using their own phone, and stopping at any time; nothing was installed, and the prototype was opened as a local page on the researcher's phone for two of them and on the participant's phone for one, which was noted. The solo choice was recording plus sparse markers. A short version of the session was prepared covering the first two tasks, and it was used once when a participant had only twenty minutes.

#### Recruit, consent and set up the session

Recruit at least three participants for a usability session, obtain consent covering recording and their own device, and prepare a session plan you can run alone.

**Where to work:** Message threads for recruitment, a printed consent introduction, the prototype on a phone and a paper note sheet. No scheduling, recording or research platform is required.

- Starting material: Your m05 screener and consent introduction.
- Create HaruCourse/Practice/m10-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Recruit, consent and set up the session

Input artifact: Your m05 screener and consent introduction.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] At least three recruited participants with their relevant experience noted
- [ ] A consent introduction covering recording and device use
- [ ] A stated solo choice: recording or full notes
- [ ] A session plan with a short version for a truncated session

## 1. Screen and recruit
- Reuse your m05 screener, adjusted for this study's experience requirement.
- Recruit at least three people and record their relevant experience.
- Record who you could not reach.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Extend consent
- Add recording and device use to your consent introduction.
- State that nothing is installed and no personal data is viewed.
- State how and when anything captured will be deleted.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Choose how you will capture
- Decide between recording with sparse markers or full notes.
- Prepare the corresponding sheet or recorder.
- Test the setup on yourself once before the first session.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Prepare the session
- Load the prototype on the device you will use.
- Print the tasks, success definitions and fakes sheet.
- Write the short version covering the two most important tasks.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Rehearse and record gaps
- Run the whole session on yourself, timing it.
- Note anything you had to improvise and decide it now.
- If recruitment failed, record the gap and what you tried.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Participants are screened for relevant experience: [evidence reference]
- Consent covers recording and device use: [evidence reference]
- The capture method is chosen and prepared: [evidence reference]
- A short session version exists for a truncated slot: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Write the one experience each participant must have, then record which of yours has it.

</details>

<details>
<summary>Hint 2</summary>

Add two sentences: one about the recording, one about their device and what you will and will not see.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m10-l04-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Participants are screened for relevant experience: Three or more participants with their qualifying experience recorded, plus who was not reachable. Consent covers recording and device use: A consent introduction naming recording, device use, non-installation, and deletion. The capture method is chosen and prepared: A stated choice with the corresponding setup tested before the first session. A short session version exists for a truncated slot: A written short plan covering the two most important tasks.

**Bring forward:** Preparation artefacts rarely appear in portfolios and signal competence: a screener, a consent script and a contingency plan show you have actually run sessions. Module handoff: Bring unresolved issues to m11


### Practice and pause points

- Screen and recruit (~20 min): Reuse your m05 screener, adjusted for this study's experience requirement. Recruit at least three people and record their relevant experience. Record who you could not reach.
- Extend consent (~25 min): Add recording and device use to your consent introduction. State that nothing is installed and no personal data is viewed. State how and when anything captured will be deleted.
- Choose how you will capture (~25 min): Decide between recording with sparse markers or full notes. Prepare the corresponding sheet or recorder. Test the setup on yourself once before the first session.
- Prepare the session (~35 min): Load the prototype on the device you will use. Print the tasks, success definitions and fakes sheet. Write the short version covering the two most important tasks.
- Rehearse and record gaps (~15 min): Run the whole session on yourself, timing it. Note anything you had to improvise and decide it now. If recruitment failed, record the gap and what you tried.

Pause after any step; save the artifact and next action.

**Free tool path.** Message threads for recruitment, a printed consent introduction, the prototype on a phone and a paper note sheet. No scheduling, recording or research platform is required.

### Output

At least three recruited participants with their relevant experience noted; A consent introduction covering recording and device use; A stated solo choice: recording or full notes; A session plan with a short version for a truncated session

### Checks

- Why record who you could not reach? Answer: Because it bounds the findings. A study of people reachable through one group is a study of that group, and the report must say so beside the results.
- What does consent need to add for a usability session? Answer: Recording, and use of the participant's own device — including that nothing is installed, that you will not view their other data, and that they can stop and have material deleted.
- Why choose recording or notes in advance? Answer: Because doing both badly is the default when you are alone. Deciding beforehand means the moderation or the notes are protected rather than both being compromised.

### Rubric and remediation

**Participants are screened for relevant experience**

Adequate evidence: Three or more participants with their qualifying experience recorded, plus who was not reachable.

- 0 — Whoever was available, with no screening.
- 1 — Screened loosely without recording experience.
- 2 — Screened, with experience and exclusions recorded.
- 3 — As adequate, and one participant was deliberately recruited to differ from the others.

If below 2: Write the one experience each participant must have, then record which of yours has it. Show at recheck: The participant record.

**Consent covers recording and device use**

Adequate evidence: A consent introduction naming recording, device use, non-installation, and deletion.

- 0 — Reused unchanged from interviews.
- 1 — Recording covered but device use not addressed.
- 2 — Both covered, with deletion stated.
- 3 — As adequate, and it says explicitly that stopping costs them nothing.

If below 2: Add two sentences: one about the recording, one about their device and what you will and will not see. Show at recheck: The extended consent introduction.

**The capture method is chosen and prepared**

Adequate evidence: A stated choice with the corresponding setup tested before the first session.

- 0 — Undecided.
- 1 — Chosen but untested.
- 2 — Chosen, prepared and tested on yourself.
- 3 — As adequate, and the trade-off you accepted is recorded.

If below 2: Run one task on yourself using your chosen method and see what you miss. Show at recheck: The capture setup and rehearsal note.

**A short session version exists for a truncated slot**

Adequate evidence: A written short plan covering the two most important tasks.

- 0 — No contingency.
- 1 — An intention to shorten without deciding what to cut.
- 2 — A written short version naming the tasks kept.
- 3 — As adequate, and the choice of which tasks survive is justified by the questions they answer.

If below 2: Decide now which two tasks matter most and write the short plan around them. Show at recheck: The short session plan.

### Portfolio contribution

Preparation artefacts rarely appear in portfolios and signal competence: a screener, a consent script and a contingency plan show you have actually run sessions.

### Assigned resources

- R52: [GOV.UK: finding user research participants](https://www.gov.uk/service-manual/user-research/find-user-research-participants) — Recruitment criteria, lead times and accommodations. Purpose: Supplies realistic recruitment planning for a session-based study. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06; last updated 28 April 2020. Written for teams with agencies and budgets; your own network is a declared convenience sample. Fallback: R08.
- R53: [GOV.UK: getting informed consent](https://www.gov.uk/service-manual/user-research/getting-users-consent-for-research) — What participants must understand, recording consent and withdrawal. Purpose: Extends your existing consent to cover recording and the participant's own device. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06; last updated 5 November 2018. UK jurisdiction and no template; check Indian requirements before recruiting beyond practice participants. Fallback: R54.

## Lesson 5: Moderating without rescuing

Stable ID: m10-l05-v1. Core. Areas 10. Optional effort ~120 min.

**Objective.** Run three usability sessions in which you ask what people expect, wait through hesitation, and record every time you intervened and why.

**Bring forward.** Your prototype, tasks, success definitions, fakes sheet and consent introduction.

The moment you rescue someone, the finding disappears. Most of the skill is in what you do not say.

### Learn

The assigned guidance is explicit that a moderator's job is to observe, and the discipline is harder than it sounds because helping is a social reflex. A participant who is stuck has just given you the most valuable moment in the session, and the four seconds of discomfort before you speak are where the finding is. Count silently if you need to.

Answering a question with “what would you expect?” converts your knowledge into their data. It feels evasive the first time and quickly becomes normal, because participants understand that you are asking about their reading rather than withholding an answer.

There is a limit, and it is distress rather than difficulty. If a person is embarrassed, frustrated or apologising for themselves, help — you are a guest in their time and they are doing you a favour. Then write down that you helped, at what point, and what you said, because the record must show where natural behaviour ended.

Asking what someone expects before a screen changes, and whether it matched afterwards, produces the mismatch data that explains failures. Completion alone tells you that something went wrong; expectation-versus-outcome tells you what.

**Common misconception.** “A good session is one where the participant succeeds.” A session where everything works and nobody hesitates has told you little. Failures, hesitations and wrong expectations are the output; smoothness is pleasant and uninformative.

### Worked example

In the second session the participant stopped at the review screen and said “I suppose I press this?”. The moderator said “what would you expect it to do?” and waited. She answered “take my money, I think — but I don't know if the class is definitely mine yet”, which became the strongest finding of the study and would have been erased by a helpful “yes, that's the payment step”. Later she became visibly uncomfortable trying to find the cancellation route; after about ninety seconds the moderator helped, and the record noted the time, the words used and that everything after it was assisted.

#### Moderating without rescuing

Run three usability sessions in which you ask what people expect, wait through hesitation, and record every time you intervened and why.

**Where to work:** Your prepared materials, a phone recorder if consented, and a note sheet. Nothing else; a moderator with a laptop between them and the participant sees less.

- Starting material: Your prepared session materials and three participants.
- Create HaruCourse/Practice/m10-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Moderating without rescuing

Input artifact: Your prepared session materials and three participants.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Three session records with expectation before and after each change
- [ ] A log of every intervention with its timing and wording
- [ ] Verbatim quotations for the moments that surprised you
- [ ] A note of which sessions were assisted and from what point

## 1. Rehearse the discipline
- Read the assigned moderation guidance.
- Write your three standard responses to questions, and practise them aloud.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Run the sessions
- Read the consent introduction and confirm agreement before starting.
- Give each task, then stop speaking.
- Ask expectation before a change and confirmation after.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Log interventions
- Record every time you spoke beyond the task or a neutral probe.
- Note what you said and what prompted it.
- Mark where a session became assisted.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Write up immediately
- Within an hour, complete each session record.
- Separate what was said, what you observed and what you inferred.
- Mark anything reconstructed from memory.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Review your own moderation
- Read your intervention log and mark the ones that were unnecessary.
- Write one change for the next session.
- Save the records and the log together.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Expectation is asked before changes and confirmed after: [evidence reference]
- Interventions are logged with wording and timing: [evidence reference]
- Sessions are written up immediately with layers separated: [evidence reference]
- Assisted portions are marked in the record: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

In the next session, ask “what do you think will happen?” before every screen change and write the answer down.

</details>

<details>
<summary>Hint 2</summary>

Listen back to the recording, or reconstruct honestly, and list every time you spoke beyond the task.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m10-l05-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Expectation is asked before changes and confirmed after: Session records showing predicted and actual outcomes at each significant change. Interventions are logged with wording and timing: A log of every non-neutral statement, with when and why. Sessions are written up immediately with layers separated: Records completed within about an hour, separating said, observed and inferred. Assisted portions are marked in the record: Clear markers showing where a session became assisted and what preceded it.

**Bring forward:** The intervention log is an unusual thing to show and reads as maturity: it says you know your own presence is part of the data. Module handoff: Bring unresolved issues to m11


### Practice and pause points

- Rehearse the discipline (~20 min): Read the assigned moderation guidance. Write your three standard responses to questions, and practise them aloud.
- Run the sessions (~40 min): Read the consent introduction and confirm agreement before starting. Give each task, then stop speaking. Ask expectation before a change and confirmation after.
- Log interventions (~20 min): Record every time you spoke beyond the task or a neutral probe. Note what you said and what prompted it. Mark where a session became assisted.
- Write up immediately (~25 min): Within an hour, complete each session record. Separate what was said, what you observed and what you inferred. Mark anything reconstructed from memory.
- Review your own moderation (~15 min): Read your intervention log and mark the ones that were unnecessary. Write one change for the next session. Save the records and the log together.

Pause after any step; save the artifact and next action.

**Free tool path.** Your prepared materials, a phone recorder if consented, and a note sheet. Nothing else; a moderator with a laptop between them and the participant sees less.

### Output

Three session records with expectation before and after each change; A log of every intervention with its timing and wording; Verbatim quotations for the moments that surprised you; A note of which sessions were assisted and from what point

### Checks

- A participant asks what a control does. What do you say? Answer: “What would you expect it to do?” Their answer is the data; explaining repairs this session and hides the fact that the design did not communicate.
- When should you help? Answer: When the person is distressed rather than merely stuck. Then help, and record when you helped and what you said, because everything after it is assisted behaviour.
- Why log your own interventions? Answer: Because they change the data. A record without them makes assisted success look like unassisted success, which is the most flattering possible error.

### Rubric and remediation

**Expectation is asked before changes and confirmed after**

Adequate evidence: Session records showing predicted and actual outcomes at each significant change.

- 0 — Only outcomes recorded.
- 1 — Expectation asked occasionally.
- 2 — Asked consistently before changes and confirmed afterwards.
- 3 — As adequate, and at least one mismatch is quoted verbatim.

If below 2: In the next session, ask “what do you think will happen?” before every screen change and write the answer down. Show at recheck: The expectation records.

**Interventions are logged with wording and timing**

Adequate evidence: A log of every non-neutral statement, with when and why.

- 0 — No log.
- 1 — Interventions mentioned without wording.
- 2 — Each logged with wording, timing and trigger.
- 3 — As adequate, and unnecessary interventions are identified for your own improvement.

If below 2: Listen back to the recording, or reconstruct honestly, and list every time you spoke beyond the task. Show at recheck: The intervention log.

**Sessions are written up immediately with layers separated**

Adequate evidence: Records completed within about an hour, separating said, observed and inferred.

- 0 — Written days later from memory.
- 1 — Written promptly but layers merged.
- 2 — Prompt and layered, with reconstruction marked.
- 3 — As adequate, and at least one observation carries two candidate interpretations.

If below 2: Rewrite the records into three columns now and mark anything you cannot place in the first column. Show at recheck: The layered records.

**Assisted portions are marked in the record**

Adequate evidence: Clear markers showing where a session became assisted and what preceded it.

- 0 — Assistance not recorded.
- 1 — Mentioned without a boundary.
- 2 — The point of assistance is marked and later data flagged.
- 3 — As adequate, and the analysis treats assisted completions separately from unassisted ones.

If below 2: Mark the moment you first helped in each session and label everything after it as assisted. Show at recheck: The marked records.

### Portfolio contribution

The intervention log is an unusual thing to show and reads as maturity: it says you know your own presence is part of the data.

### Assigned resources

- R05: [GOV.UK: moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing) — Running the session and moderating. Purpose: Supplies the moderation discipline this lesson practises. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. Assumes a note-taker; alone, your capture choice from the previous lesson determines what you can record. Fallback: R12.
- R56: [GOV.UK: taking notes and recording sessions](https://www.gov.uk/service-manual/user-research/taking-notes-and-recording-user-research-sessions) — Note-taking and recording, and the consent each requires. Purpose: Keeps the record usable for analysis rather than a stream of impressions. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06; last updated 19 September 2017. It does not cover analysis or moderation technique. Fallback: R53.

## Lesson 6: From sessions to ranked problems

Stable ID: m10-l06-v1. Core. Areas 10. Optional effort ~120 min.

**Objective.** Turn your session records into a ranked problem list where each problem states how many participants met it, what it cost them, and the evidence behind it.

**Bring forward.** Your three session records, intervention log and success definitions.

A list of everything that happened is not a finding. Ranking by cost to the person is what turns observation into a decision.

### Learn

Analysis starts by separating problems from their occurrences. Three participants hesitating at three different screens may share one cause — the same unclear word, the same missing status — and treating them as three problems fragments the finding. Group by cause where the evidence supports it, and say when you are guessing.

Ranking by harm rather than frequency is what stops a small test misleading you. With three participants, frequency is nearly meaningless, while cost is observable: a problem that made someone pay twice outranks one that made three people pause, however tempting the count looks.

Count people. One participant meeting the same problem four times is one participant, and a report that says “occurred four times” invites a reader to imagine four people. Beside each problem write the count and the total, in the “two of three” form the course has used since m05.

Assisted completions must be visible in the analysis. A task that was finished after you intervened is evidence that the design failed and the moderator succeeded, and folding it into the success count is the most common way a small usability study flatters itself.

**Common misconception.** “Three participants found three different problems, so the design has three problems.” It may have one problem that presents differently, or five of which you saw three. Both readings matter, and the analysis should state which you believe and why.

### Worked example

Eleven observations became six problems. Two of three participants could not tell whether their place was held before payment — ranked first, because one of them said she would have paid again. Three of three hesitated at the same word on the review screen; grouped as one labelling problem, ranked second. One participant's confusion about the shortlist was left unexplained and moved to open questions rather than guessed at. Two task completions were marked assisted, which changed the picture: the unassisted completion rate on the cancellation task was zero of three.

#### From sessions to ranked problems

Turn your session records into a ranked problem list where each problem states how many participants met it, what it cost them, and the evidence behind it.

**Where to work:** Cards or a table: one observation per line, grouped by cause. Photograph the grouping. No analysis software is needed at this size and none would help.

- Starting material: Your session records and pre-written success definitions.
- Create HaruCourse/Practice/m10-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# From sessions to ranked problems

Input artifact: Your session records and pre-written success definitions.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A problem list grouped by cause, with participant counts
- [ ] A ranking by harm with the reasoning stated
- [ ] Assisted completions marked and excluded from success counts
- [ ] An open-questions list for observations you cannot explain

## 1. Extract observations
- Write each observation on its own line with a participant label.
- Read the assigned analysis guidance before grouping.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Group by cause
- Put observations that share a likely cause together.
- Name each group by the cause, not the screen.
- Mark groups where the shared cause is a guess.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Count and cost
- For each problem write how many of how many participants met it.
- Write what it cost them: time, confusion, money, abandonment.
- Mark assisted completions separately from unassisted ones.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Rank by harm
- Order the problems by cost to the person.
- Write why the top problem outranks the second.
- Check no problem is ranked by how easy it is to fix.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Keep the unexplained
- Move observations you cannot explain to an open-questions list.
- Write what would settle each.
- Save the ranked list and the open questions.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Observations are grouped by cause with guesses marked: [evidence reference]
- Counts are of participants, not incidents: [evidence reference]
- Ranking is by harm with reasoning: [evidence reference]
- Assisted completions are separated and unexplained items kept: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

For each group write the sentence “these happened because …”. If you cannot, mark it a guess or split it.

</details>

<details>
<summary>Hint 2</summary>

Recount each problem by participant and rewrite as “two of three”.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m10-l06-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Observations are grouped by cause with guesses marked: Groups named by cause, with speculative groupings explicitly marked. Counts are of participants, not incidents: Each problem shows how many of how many participants met it. Ranking is by harm with reasoning: An ordered list with a written reason for the top placements. Assisted completions are separated and unexplained items kept: Assisted tasks marked and excluded from unassisted counts; unexplained observations moved to open questions.

**Bring forward:** A ranked problem list with participant counts and assisted completions marked is credible in a way a percentage never is at this sample size. Module handoff: Bring unresolved issues to m11


### Practice and pause points

- Extract observations (~25 min): Write each observation on its own line with a participant label. Read the assigned analysis guidance before grouping.
- Group by cause (~30 min): Put observations that share a likely cause together. Name each group by the cause, not the screen. Mark groups where the shared cause is a guess.
- Count and cost (~25 min): For each problem write how many of how many participants met it. Write what it cost them: time, confusion, money, abandonment. Mark assisted completions separately from unassisted ones.
- Rank by harm (~25 min): Order the problems by cost to the person. Write why the top problem outranks the second. Check no problem is ranked by how easy it is to fix.
- Keep the unexplained (~15 min): Move observations you cannot explain to an open-questions list. Write what would settle each. Save the ranked list and the open questions.

Pause after any step; save the artifact and next action.

**Free tool path.** Cards or a table: one observation per line, grouped by cause. Photograph the grouping. No analysis software is needed at this size and none would help.

### Output

A problem list grouped by cause, with participant counts; A ranking by harm with the reasoning stated; Assisted completions marked and excluded from success counts; An open-questions list for observations you cannot explain

### Checks

- Why rank by harm rather than frequency? Answer: Because at three participants frequency is nearly meaningless while cost is observable. A problem that made one person pay twice matters more than three shrugs.
- How do assisted completions affect the analysis? Answer: They are design failures with a moderator patch. Counted as successes they hide the failure, so they are marked and excluded from unassisted counts.
- What happens to an observation you cannot explain? Answer: It goes to open questions with what would settle it. Explaining it with a plausible story is how a small study invents findings.

### Rubric and remediation

**Observations are grouped by cause with guesses marked**

Adequate evidence: Groups named by cause, with speculative groupings explicitly marked.

- 0 — A flat list of moments.
- 1 — Grouped by screen rather than cause.
- 2 — Grouped by cause with guesses marked.
- 3 — As adequate, and one group is split after the shared cause failed to hold.

If below 2: For each group write the sentence “these happened because …”. If you cannot, mark it a guess or split it. Show at recheck: The grouped list.

**Counts are of participants, not incidents**

Adequate evidence: Each problem shows how many of how many participants met it.

- 0 — Occurrence counts presented as prevalence.
- 1 — Participant counts for some problems.
- 2 — Participant counts throughout in the of-total form.
- 3 — As adequate, and repetition within one participant is noted separately as intensity.

If below 2: Recount each problem by participant and rewrite as “two of three”. Show at recheck: The recounted list.

**Ranking is by harm with reasoning**

Adequate evidence: An ordered list with a written reason for the top placements.

- 0 — Unordered, or ordered by frequency or ease of fixing.
- 1 — Ordered by harm without reasoning.
- 2 — Ordered by harm with the reasoning stated.
- 3 — As adequate, and the ranking distinguishes problems that stop a task from those that slow it.

If below 2: For each problem write what it cost the person, then sort by that. Show at recheck: The ranked list.

**Assisted completions are separated and unexplained items kept**

Adequate evidence: Assisted tasks marked and excluded from unassisted counts; unexplained observations moved to open questions.

- 0 — Assisted completions counted as successes.
- 1 — Marked but folded into totals.
- 2 — Separated in the counts, with unexplained items preserved.
- 3 — As adequate, and the unassisted result is reported first because it is the honest one.

If below 2: Go back to the intervention log and mark every task you helped with, then recompute the counts. Show at recheck: The separated counts and open questions.

### Portfolio contribution

A ranked problem list with participant counts and assisted completions marked is credible in a way a percentage never is at this sample size.

### Assigned resources

- R04: [GOV.UK: analyse a research session](https://www.gov.uk/service-manual/user-research/analyse-a-research-session) — Capturing observations, grouping them and moving to findings. Purpose: Supplies the observation-to-finding procedure this lesson uses. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. Written for a team analysing together; alone you lose the disagreement a second reader supplies, so seek one where you can. Fallback: R08.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — All ten, used to name causes precisely once problems are grouped. Purpose: Gives shared vocabulary for describing a cause without inventing one. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Naming a heuristic is not evidence of a cause; the sessions are. Fallback: R11.

## Lesson 7: What a small test can and cannot claim

Stable ID: m10-l07-v1. Core. Areas 10. Optional effort ~120 min.

**Objective.** Write the claims your study supports and the claims it does not, including a worked interval for one rate you might have been tempted to report.

**Bring forward.** Your ranked problem list and participant counts.

Small qualitative tests find real problems and prove nothing about how common they are. Both halves of that sentence matter.

### Learn

The value of a small usability test is discovery. Watching three people attempt a task reliably reveals blocking problems, and that is a strong result — it just is not a measurement. The distinction shows up in the sentence you write: “two of three participants could not tell whether their place was held” is defensible; “67 per cent of users are confused” is not, and no amount of care in running the session changes that.

The assigned sample-size reading is about quantitative studies with binary success metrics, and it says plainly that it does not cover surveys, card sorting or tree testing. It is included here so you can see what a study designed to measure would require, and so you do not borrow its numbers to justify a qualitative claim. The gap between the two is the point.

If a rate genuinely must appear — because someone insists — attach an interval and show the inputs. At n of five or eight the interval is wide enough to make the argument for you, and demonstrating that is more persuasive than refusing.

Severity rankings are your judgement, informed by what you saw. Presenting them as though they were measured is a small dishonesty that becomes a large one when a decision is made from it. Say “I ranked these by the cost I observed” rather than letting a numbered list imply a scale.

**Common misconception.** “Five users find 85 per cent of problems.” That figure comes from specific studies under specific assumptions, and it is routinely quoted as though it applied to any test of anything. Your honest claim is what you saw, with the participant count beside it.

### Worked example

The report's claims section said: three participants, recruited through one group, all comfortable with online payment; two could not tell whether their place was held; nobody completed the cancellation task unassisted; the review-screen wording confused all three. Its cannot-claim section said: nothing about how common these are, nothing about people who do not use online payment, nothing about performance or accessibility. One temptation was worked through: reporting “67 per cent unsure”, whose interval at n = 3 spanned almost the whole range, which was shown once in the appendix to settle the question.

#### What a small test can and cannot claim

Write the claims your study supports and the claims it does not, including a worked interval for one rate you might have been tempted to report.

**Where to work:** Written work plus a spreadsheet or calculator for the interval. The interval reading gives no formulas, so use a published one, show your inputs and state which you used.

- Starting material: Your ranked problem list.
- Create HaruCourse/Practice/m10-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# What a small test can and cannot claim

Input artifact: Your ranked problem list.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A claims list your study supports
- [ ] A cannot-claim list naming the tempting sentences
- [ ] One worked interval with inputs shown
- [ ] A statement that severity ranking is your judgement

## 1. Read both quantitative pages
- Read the assigned sample-size and interval readings.
- Write what each explicitly excludes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Write the claims
- Write each finding as a sentence with its participant count.
- Remove any sentence containing a percentage or the word most.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Write the cannot-claims
- List the sentences you would like to write and cannot.
- Include prevalence, performance, accessibility and other populations.
- Reuse your prototype's untestable list here.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Work one interval
- Take a rate you were tempted to report and compute its interval.
- Show the inputs and the method you used.
- Write one sentence on what the width tells you.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Label your judgements
- State that the severity ranking is your judgement from observation.
- Name what would make it more than a judgement.
- Save the claims, cannot-claims and interval work.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Claims carry participant counts and no percentages: [evidence reference]
- The cannot-claim list names specific tempting sentences: [evidence reference]
- One interval is worked with inputs shown: [evidence reference]
- Severity is labelled as judgement: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Search your text for the per cent sign, “most”, “users tend to” and rewrite each as a count.

</details>

<details>
<summary>Hint 2</summary>

Write the strongest sentences you wish you could write, then mark which are licensed.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m10-l07-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Claims carry participant counts and no percentages: Findings written as counts of participants, with no rates or generalising language. The cannot-claim list names specific tempting sentences: A list of the claims you would like to make, marked unlicensed, including prevalence and untested qualities. One interval is worked with inputs shown: A computed interval for one rate, with inputs, method and a sentence on its width. Severity is labelled as judgement: A written statement that the ranking is your judgement, with what would make it measured.

**Bring forward:** The cannot-claim list is the most professional page in a junior case study. Include it; reviewers who have run studies will notice immediately. Module handoff: Bring unresolved issues to m11


### Practice and pause points

- Read both quantitative pages (~25 min): Read the assigned sample-size and interval readings. Write what each explicitly excludes.
- Write the claims (~25 min): Write each finding as a sentence with its participant count. Remove any sentence containing a percentage or the word most.
- Write the cannot-claims (~25 min): List the sentences you would like to write and cannot. Include prevalence, performance, accessibility and other populations. Reuse your prototype's untestable list here.
- Work one interval (~30 min): Take a rate you were tempted to report and compute its interval. Show the inputs and the method you used. Write one sentence on what the width tells you.
- Label your judgements (~15 min): State that the severity ranking is your judgement from observation. Name what would make it more than a judgement. Save the claims, cannot-claims and interval work.

Pause after any step; save the artifact and next action.

**Free tool path.** Written work plus a spreadsheet or calculator for the interval. The interval reading gives no formulas, so use a published one, show your inputs and state which you used.

### Output

A claims list your study supports; A cannot-claim list naming the tempting sentences; One worked interval with inputs shown; A statement that severity ranking is your judgement

### Checks

- What does a three-participant test establish? Answer: That the problems you saw are real for those people, and often that they will recur. It establishes nothing about how many people meet them.
- Why include the sample-size reading at all? Answer: To show what a study designed to measure would require, and to prevent borrowing its numbers as cover for a qualitative claim. It excludes surveys, card sorting and tree testing by its own statement.
- What is a severity ranking? Answer: Your judgement from what you observed. Useful, and not a measurement — which the report should say in the same breath as presenting it.

### Rubric and remediation

**Claims carry participant counts and no percentages**

Adequate evidence: Findings written as counts of participants, with no rates or generalising language.

- 0 — Percentages or “users” as a general category.
- 1 — Counts present but some generalising language remains.
- 2 — Counts throughout with no generalisation.
- 3 — As adequate, and each claim names the recruitment route in the same section.

If below 2: Search your text for the per cent sign, “most”, “users tend to” and rewrite each as a count. Show at recheck: The claims list.

**The cannot-claim list names specific tempting sentences**

Adequate evidence: A list of the claims you would like to make, marked unlicensed, including prevalence and untested qualities.

- 0 — Generic caveats.
- 1 — Some specifics, mostly about sample size.
- 2 — Specific tempting sentences named across several categories.
- 3 — As adequate, and the list is written to be pasted into the final report unchanged.

If below 2: Write the strongest sentences you wish you could write, then mark which are licensed. Show at recheck: The cannot-claim list.

**One interval is worked with inputs shown**

Adequate evidence: A computed interval for one rate, with inputs, method and a sentence on its width.

- 0 — No interval work.
- 1 — An interval asserted without inputs.
- 2 — Computed with inputs and method shown.
- 3 — As adequate, and the width is used to explain why the rate is not reported.

If below 2: Take your most tempting rate, compute the interval in a spreadsheet and write down the numbers you used. Show at recheck: The interval work.

**Severity is labelled as judgement**

Adequate evidence: A written statement that the ranking is your judgement, with what would make it measured.

- 0 — Ranking presented as measurement.
- 1 — Judgement implied but not stated.
- 2 — Stated explicitly with what would change it.
- 3 — As adequate, and one ranking decision is shown as arguable, with the alternative order.

If below 2: Add one sentence before the ranked list saying who ranked it and on what basis. Show at recheck: The severity statement.

### Portfolio contribution

The cannot-claim list is the most professional page in a junior case study. Include it; reviewers who have run studies will notice immediately.

### Assigned resources

- R45: [NN/g: sample sizes for quantitative studies](https://www.nngroup.com/articles/summary-quant-sample-sizes/) — The recommended participant counts and the assumptions behind them. Purpose: Shows what a measuring study would require, so a qualitative test is not dressed as one. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Binary success metrics only: it states it does not cover A/B tests, surveys, card sorting or tree testing, and it does not license qualitative prevalence claims. Fallback: R37.
- R37: [NN/g: confidence intervals and margins of error](https://www.nngroup.com/articles/confidence-interval/) — What an interval means and how sample size and variability widen it. Purpose: Gives the instrument for the one worked interval and the argument against reporting rates at this size. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. It gives no formulas, so use a published one and show your inputs. Fallback: R45.

## Lesson 8: Repair, predict, re-test

Stable ID: m10-l08-v1. Core. Areas 10. Optional effort ~120 min.

**Objective.** Repair the top-ranked problem, write the prediction before re-testing, run the re-test with new participants, and report the result including a failure.

**Bring forward.** Your ranked problem list and the prototype.

A test that changes nothing was theatre. A repair that is not re-tested is a hope.

### Learn

Choosing the top-ranked problem is a discipline because the easy fix is always available and always tempting. Repairing the wording while the payment-uncertainty problem remains produces a case study that looks iterative and a product that still makes people pay twice.

One change at a time is what makes the re-test informative. Change three things and a better result tells you the combination helped; a worse one tells you nothing about which to undo. This costs an extra session and buys the only kind of learning that transfers.

The prediction written first is what makes the re-test capable of failing. “People should reach the review screen without asking whether the place is held” can be checked; “it should be clearer” cannot, and after the fact everything looks clearer to the person who changed it.

Fresh participants are necessary because a returning one is testing their memory. Two new people are enough for a re-test of a single change, and the record should name them as new.

**Common misconception.** “The repair worked because the second group finished faster.” Different people are faster or slower for many reasons. Tie the result to the specific prediction, and if the prediction was about time, say what else could explain it.

### Worked example

The top problem was uncertainty about whether a place was held before payment. One change: the review screen gained a line stating “Your place is held for 10 minutes” with the time remaining. The prediction, written first: neither new participant should ask whether the place is secured, and neither should hesitate before paying. Re-tested with two new people — one did not ask and paid without hesitation; the other asked anyway, and said the line looked like an advertisement. The report recorded a partial result, with the second finding as a new problem about visual weight rather than wording, and the repair was not claimed as validated.

#### Repair, predict, re-test

Repair the top-ranked problem, write the prediction before re-testing, run the re-test with new participants, and report the result including a failure.

**Where to work:** Edit the prototype file you already have and re-run the same tasks. Keep the previous version so the before-and-after pair survives.

- Starting material: Your ranked problems and a prototype you can change.
- Create HaruCourse/Practice/m10-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Repair, predict, re-test

Input artifact: Your ranked problems and a prototype you can change.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] One repair addressing the top-ranked problem
- [ ] A prediction written before the re-test
- [ ] Re-test records with new participants
- [ ] An honest result, including any failure or partial outcome

## 1. Choose and predict
- Take the top-ranked problem and decide the single change.
- Write what should be observable if the repair works.
- Write what would count as the repair failing.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Make one change
- Apply the change to a copy of the prototype.
- Keep the previous version intact.
- Change nothing else, however tempting.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Re-test
- Run the affected tasks with at least two new participants.
- Use the same wording and the same moderation discipline.
- Record expectation, outcome and hesitation as before.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Compare with the prediction
- Check the result against what you wrote beforehand.
- Note anything that changed which you had not predicted.
- Decide whether the repair is confirmed, partial or failed.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record and re-rank
- Write the outcome plainly, including a failure.
- Add any new problem the repair introduced.
- Re-rank the remaining problems and save both prototype versions.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The repair addresses the top-ranked problem: [evidence reference]
- Exactly one change was made: [evidence reference]
- A prediction was written before the re-test: [evidence reference]
- The outcome is reported honestly, including failure: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Compare your change against the ranking. If it is not the top item, either repair that or record why it is deferred.

</details>

<details>
<summary>Hint 2</summary>

Revert to the tested version and apply only the one change, listing what you were tempted to do as well.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m10-l08-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The repair addresses the top-ranked problem: A change traceable to the highest-harm problem in the ranking. Exactly one change was made: Before-and-after prototypes differing in one respect. A prediction was written before the re-test: A dated or clearly prior prediction naming an observable outcome and a failure condition. The outcome is reported honestly, including failure: A stated outcome — confirmed, partial or failed — with new problems recorded and the ranking updated.

**Bring forward:** A complete loop — problem, repair, prediction, re-test, honest outcome — is the strongest single artefact this course produces. Include the partial result. Module handoff: Bring unresolved issues to m11


### Practice and pause points

- Choose and predict (~20 min): Take the top-ranked problem and decide the single change. Write what should be observable if the repair works. Write what would count as the repair failing.
- Make one change (~25 min): Apply the change to a copy of the prototype. Keep the previous version intact. Change nothing else, however tempting.
- Re-test (~40 min): Run the affected tasks with at least two new participants. Use the same wording and the same moderation discipline. Record expectation, outcome and hesitation as before.
- Compare with the prediction (~20 min): Check the result against what you wrote beforehand. Note anything that changed which you had not predicted. Decide whether the repair is confirmed, partial or failed.
- Record and re-rank (~15 min): Write the outcome plainly, including a failure. Add any new problem the repair introduced. Re-rank the remaining problems and save both prototype versions.

Pause after any step; save the artifact and next action.

**Free tool path.** Edit the prototype file you already have and re-run the same tasks. Keep the previous version so the before-and-after pair survives.

### Output

One repair addressing the top-ranked problem; A prediction written before the re-test; Re-test records with new participants; An honest result, including any failure or partial outcome

### Checks

- Why repair the top-ranked problem rather than the easy one? Answer: Because the ranking is by harm. Fixing the easy one produces visible progress and leaves the costly failure in place, which is how products accumulate polish over broken flows.
- Why write the prediction first? Answer: Because afterwards every result looks like an improvement to the person who made the change. A prediction written first can fail, which is what makes the re-test evidence.
- How do you report a failed repair? Answer: Plainly, with the result and what you now think the cause is. A recorded failure is more useful than an unexamined success and protects the next person from repeating it.

### Rubric and remediation

**The repair addresses the top-ranked problem**

Adequate evidence: A change traceable to the highest-harm problem in the ranking.

- 0 — An easy or cosmetic fix.
- 1 — A relevant fix but not the top-ranked problem.
- 2 — The top-ranked problem addressed.
- 3 — As adequate, and the reason for not addressing the second problem yet is stated.

If below 2: Compare your change against the ranking. If it is not the top item, either repair that or record why it is deferred. Show at recheck: The change against the ranking.

**Exactly one change was made**

Adequate evidence: Before-and-after prototypes differing in one respect.

- 0 — Several changes bundled.
- 1 — One main change with incidental others.
- 2 — A single change, with the previous version retained.
- 3 — As adequate, and other tempting changes are listed as deferred rather than made quietly.

If below 2: Revert to the tested version and apply only the one change, listing what you were tempted to do as well. Show at recheck: The two versions.

**A prediction was written before the re-test**

Adequate evidence: A dated or clearly prior prediction naming an observable outcome and a failure condition.

- 0 — No prediction.
- 1 — A prediction too vague to fail.
- 2 — Observable prediction with a failure condition, written first.
- 3 — As adequate, and the prediction is specific about what participants should not do.

If below 2: Write the prediction now for any repair not yet re-tested, and mark retrospective ones honestly. Show at recheck: The prediction.

**The outcome is reported honestly, including failure**

Adequate evidence: A stated outcome — confirmed, partial or failed — with new problems recorded and the ranking updated.

- 0 — Only success reported.
- 1 — Outcome stated without new problems or re-ranking.
- 2 — Honest outcome with new problems and an updated ranking.
- 3 — As adequate, and a partial result is not upgraded to a success in the summary.

If below 2: Write the outcome sentence with the counts in it, then add anything the change introduced. Show at recheck: The outcome record.

### Portfolio contribution

A complete loop — problem, repair, prediction, re-test, honest outcome — is the strongest single artefact this course produces. Include the partial result.

### Assigned resources

- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — Iterating a prototype after testing. Purpose: Frames the repair as a further experiment rather than a conclusion. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. It does not cover prediction discipline, which is this course's own addition. Fallback: R05.
- R05: [GOV.UK: moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing) — Running sessions, re-read for consistency across the re-test. Purpose: Keeps the second round comparable to the first in wording and moderation. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Comparability across rounds is weak at these numbers; the prediction is what carries the argument. Fallback: R12.

## Lesson 9: Testing what only a running thing can test

Stable ID: m10-l09-v1. Core. Areas 10. Optional effort ~120 min.

**Objective.** Test one question that paper and click-throughs cannot answer — timing, a slow connection or real content volume — and record what changed compared with the prototype result.

**Bring forward.** Your untestable lists and the payment or loading questions still open.

Every module so far has been able to defer performance. The questions it defers are the ones that make people pay twice.

### Learn

A click-through moves instantly, which quietly removes the most consequential part of many flows: the wait. Questions about whether people understand a pending state, whether they press again, or whether they leave, cannot be asked without a real delay — and a delay is easy to add to a local page, so this is a question of choosing to test rather than of tooling.

Your own connection is unrepresentative, and the browser tools you already used in m07 let you impose a slow profile with the cache disabled. The result is what a person on a poor mobile connection sees, which for a product intended for India and for anyone outside a city centre is closer to typical than your studio conditions.

Content volume matters as much as speed. Three example classes scan differently from sixty; a list that felt clear becomes a wall, sorting starts to matter, and the empty state you designed never appears while a paging control you did not design becomes essential. Load real quantities before concluding the layout works.

Record the conditions: device, browser, throttling profile, content volume. Without them the observation cannot be repeated or compared, and a later “it seems fine now” has nothing to disagree with.

**Common misconception.** “Performance is an engineering concern.” What a person sees during a wait, what they conclude and what they do about it are design decisions. Engineering makes the wait shorter; design decides whether the wait is survivable.

### Worked example

Two questions needed a running page. First: does the pending state stop people paying twice? A local page with a deliberate four-second delay and a slow throttling profile was tested with two people — neither pressed again with the pending message present, and one said she would have without it. Second: does the list still work with sixty classes? It did not: the filter summary scrolled away, sorting became necessary, and the promoted items at the top pushed everything else below the fold. Both results were recorded with the device, the browser, the profile and the item count.

#### Testing what only a running thing can test

Test one question that paper and click-throughs cannot answer — timing, a slow connection or real content volume — and record what changed compared with the prototype result.

**Where to work:** A local HTML page, a deliberate delay written into it, and your browser's throttling. This is the whole toolchain; no hosting, account or performance service is required.

- Starting material: Your untestable lists and a rough running page.
- Create HaruCourse/Practice/m10-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Testing what only a running thing can test

Input artifact: Your untestable lists and a rough running page.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] One question tested that lower fidelity could not answer
- [ ] Results under a slow throttled connection with the cache disabled
- [ ] A test with realistic content volume
- [ ] Recorded conditions: device, browser, profile and volume

## 1. Pick the question
- Choose one item from your untestable lists that a running page can now answer.
- Write what result would change a decision.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Build the conditions
- Add a realistic delay where the real system would wait.
- Load realistic content volume, not three examples.
- Set a slow throttling profile and disable the cache.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Observe first paint and behaviour
- Record what appears first and how long the gap lasts.
- Run the task yourself, then with one or two people.
- Watch specifically for repeated actions and abandonment.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Compare with the prototype result
- Compare what happened here with the click-through result.
- Record anything that only appeared under real conditions.
- Add new problems to the ranked list.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record conditions
- Write the device, browser, throttling profile and content volume.
- State what remains untested even now.
- Save the results with the conditions.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The question needed a running page to answer: [evidence reference]
- Conditions include throttling and realistic volume: [evidence reference]
- First paint and behaviour under waiting are recorded: [evidence reference]
- Device, browser, profile and volume are stated: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Return to your untestable lists and choose the item that a running page uniquely answers.

</details>

<details>
<summary>Hint 2</summary>

Set the profile, disable the cache and multiply your content until the list behaves like a real one.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m10-l09-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The question needed a running page to answer: A question drawn from the untestable lists with a stated decision it would change. Conditions include throttling and realistic volume: A slow profile with the cache disabled, and content at realistic quantity. First paint and behaviour under waiting are recorded: Notes on what appeared first, how long the gap lasted, and what people did during it. Device, browser, profile and volume are stated: All four recorded alongside the results.

**Bring forward:** Testing under a slow connection with real volume is rare in junior portfolios and immediately credible, especially for products intended for India and other mobile-first contexts. Module handoff: Bring unresolved issues to m11


### Practice and pause points

- Pick the question (~20 min): Choose one item from your untestable lists that a running page can now answer. Write what result would change a decision.
- Build the conditions (~30 min): Add a realistic delay where the real system would wait. Load realistic content volume, not three examples. Set a slow throttling profile and disable the cache.
- Observe first paint and behaviour (~30 min): Record what appears first and how long the gap lasts. Run the task yourself, then with one or two people. Watch specifically for repeated actions and abandonment.
- Compare with the prototype result (~25 min): Compare what happened here with the click-through result. Record anything that only appeared under real conditions. Add new problems to the ranked list.
- Record conditions (~15 min): Write the device, browser, throttling profile and content volume. State what remains untested even now. Save the results with the conditions.

Pause after any step; save the artifact and next action.

**Free tool path.** A local HTML page, a deliberate delay written into it, and your browser's throttling. This is the whole toolchain; no hosting, account or performance service is required.

### Output

One question tested that lower fidelity could not answer; Results under a slow throttled connection with the cache disabled; A test with realistic content volume; Recorded conditions: device, browser, profile and volume

### Checks

- Why can a click-through not answer timing questions? Answer: Because it moves instantly. The wait — the part where people press again or leave — does not exist in it, so neither do the findings about it.
- What does realistic content volume change? Answer: Scanning, sorting, layout and the need for paging. A list that works with three items can be unusable with sixty, and only the second is the product.
- Why record the conditions? Answer: Because a performance observation without device, profile and volume cannot be repeated or disputed, which makes it useless three weeks later.

### Rubric and remediation

**The question needed a running page to answer**

Adequate evidence: A question drawn from the untestable lists with a stated decision it would change.

- 0 — A question answerable on paper.
- 1 — A relevant question with no decision attached.
- 2 — A genuinely higher-fidelity question with its decision.
- 3 — As adequate, and the question is the highest-harm item still open.

If below 2: Return to your untestable lists and choose the item that a running page uniquely answers. Show at recheck: The question and decision.

**Conditions include throttling and realistic volume**

Adequate evidence: A slow profile with the cache disabled, and content at realistic quantity.

- 0 — Tested on a fast connection with sample data.
- 1 — One of the two conditions applied.
- 2 — Both applied and recorded.
- 3 — As adequate, and the volume matches what the real product would hold rather than a round number.

If below 2: Set the profile, disable the cache and multiply your content until the list behaves like a real one. Show at recheck: The test conditions.

**First paint and behaviour under waiting are recorded**

Adequate evidence: Notes on what appeared first, how long the gap lasted, and what people did during it.

- 0 — Only the end state observed.
- 1 — Timing noted without behaviour.
- 2 — Both recorded, including repeated actions.
- 3 — As adequate, and the sequence is compared against what the person expected to see.

If below 2: Re-run and write the sequence with timings, then watch one person through the wait. Show at recheck: The observation notes.

**Device, browser, profile and volume are stated**

Adequate evidence: All four recorded alongside the results.

- 0 — None recorded.
- 1 — Some recorded.
- 2 — All four stated.
- 3 — As adequate, and a second device is included so the difference is visible.

If below 2: Add the four facts to the top of your results; without them the test cannot be repeated. Show at recheck: The conditions record.

### Portfolio contribution

Testing under a slow connection with real volume is rare in junior portfolios and immediately credible, especially for products intended for India and other mobile-first contexts.

### Assigned resources

- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — Throttling profiles, disabling the cache, and request timing. Purpose: Supplies the conditions this lesson tests under, with no account required. Effort: 10–20 selected min. Free documentation, no account; any Chromium browser. Verified 2026-09-06. Throttling simulates bandwidth and latency, not a connection that drops entirely — test that separately by turning the network off mid-action. Fallback: R16.
- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — What higher-fidelity prototypes can be used to learn. Purpose: Keeps the claims from this test bounded to what a rough running page supports. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. A rough page is not the product: it does not test real infrastructure, real data or implemented accessibility. Fallback: R05.

## Lesson 10: Unmoderated and remote testing, and their limits

Stable ID: m10-l10-v1. Core. Areas 10. Optional effort ~120 min.

**Objective.** Design one unmoderated task set that could run without you, state exactly what it cannot capture, and decide whether it is worth running for your question.

**Bring forward.** Your task set and the questions still unanswered after your sessions.

Unmoderated testing reaches people you cannot meet and loses the thing that made your sessions valuable.

### Learn

Without a moderator, everything depends on the written instructions. Ambiguity that a person would resolve with one question becomes a silent failure that looks like a design problem, so the task wording needs testing before the study runs, ideally with one person in front of you.

The trade is straightforward: you gain reach, timing flexibility and people outside your network; you lose the follow-up question, the hesitation you would have noticed and the ability to recover a derailed session. For discovering why something fails, that loss is decisive; for checking whether a specific route is findable, it may not matter.

Remote moderated sessions sit in between: you keep probing but lose the setting, the real device and often the ability to see what their hands are doing. For a product where people book on a shared phone in a noisy room, the setting was the finding, and losing it changes what the study can see.

Decide by the question, not by convenience. Reaching more people does not improve a discovery study, and a confirmation question — can people find this route — is often better served by more participants attempting it than by three watched closely.

**Common misconception.** “Unmoderated tests are objective because the researcher is not influencing them.” They are unsupervised, which removes both influence and understanding. What you get is behaviour without explanation, and misread instructions you will never know about.

### Worked example

One open question — can people find the change-or-cancel route without help — was suited to an unmoderated run, since it was a findability question rather than a why. The instructions were rewritten twice after one person misread the scenario, and the design specified: a written scenario, a start page, a self-reported outcome and an optional comment. The limits recorded: no probing, no hesitation data, no way to know whether a participant was interrupted, and no evidence about why anyone failed. It was judged worth running, and the two why-questions from the session findings were kept for moderated follow-ups.

#### Unmoderated and remote testing, and their limits

Design one unmoderated task set that could run without you, state exactly what it cannot capture, and decide whether it is worth running for your question.

**Where to work:** Written instructions plus your local prototype shared as a link or a file, and answers returned by message. Free unmoderated platforms exist with participant limits; nothing here requires one, and the message route keeps your data in your own hands.

- Starting material: Your task set and remaining open questions.
- Create HaruCourse/Practice/m10-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Unmoderated and remote testing, and their limits

Input artifact: Your task set and remaining open questions.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] One unmoderated task set with self-contained instructions
- [ ] Instructions tested with one person for misreading
- [ ] A written list of what this method cannot capture
- [ ] A decision on whether to run it, with the reason

## 1. Pick a suitable question
- List your remaining questions and mark each discovery or confirmation.
- Choose one confirmation question for an unmoderated run.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Write self-contained instructions
- Write the scenario, the goal and how to report the outcome.
- Remove every word that assumes context only you have.
- State what to do if something does not work.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Test the wording
- Ask one person to read the instructions aloud and say what they would do.
- Rewrite anything they hesitated over.
- Repeat if the second reading still produces a misreading.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Write the limits
- List what this method cannot capture: why, hesitation, interruptions, setting.
- State how you would follow up on any surprising result.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Decide
- Decide whether to run it, and write the reason either way.
- If you run it, plan how results return to you and where they are stored.
- Save the task set, the limits and the decision.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The question suits an unmoderated method: [evidence reference]
- Instructions are self-contained and tested for misreading: [evidence reference]
- The limits are written specifically: [evidence reference]
- The run-or-not decision is justified: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Mark each open question discovery or confirmation, then choose only from the second group.

</details>

<details>
<summary>Hint 2</summary>

Have someone read the instructions aloud and narrate what they would do. Rewrite every hesitation.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m10-l10-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The question suits an unmoderated method: A confirmation question chosen, with discovery questions kept for moderated sessions. Instructions are self-contained and tested for misreading: Instructions rewritten after at least one read-aloud test, with the changes visible. The limits are written specifically: A list naming the missing why, hesitation, interruption and setting data. The run-or-not decision is justified: A written decision with the reason, and a data-handling plan if running.

**Bring forward:** Deciding not to run a study, with the reason, is worth showing. It demonstrates method selection rather than method collection. Module handoff: Bring unresolved issues to m11


### Practice and pause points

- Pick a suitable question (~25 min): List your remaining questions and mark each discovery or confirmation. Choose one confirmation question for an unmoderated run.
- Write self-contained instructions (~30 min): Write the scenario, the goal and how to report the outcome. Remove every word that assumes context only you have. State what to do if something does not work.
- Test the wording (~25 min): Ask one person to read the instructions aloud and say what they would do. Rewrite anything they hesitated over. Repeat if the second reading still produces a misreading.
- Write the limits (~25 min): List what this method cannot capture: why, hesitation, interruptions, setting. State how you would follow up on any surprising result.
- Decide (~15 min): Decide whether to run it, and write the reason either way. If you run it, plan how results return to you and where they are stored. Save the task set, the limits and the decision.

Pause after any step; save the artifact and next action.

**Free tool path.** Written instructions plus your local prototype shared as a link or a file, and answers returned by message. Free unmoderated platforms exist with participant limits; nothing here requires one, and the message route keeps your data in your own hands.

### Output

One unmoderated task set with self-contained instructions; Instructions tested with one person for misreading; A written list of what this method cannot capture; A decision on whether to run it, with the reason

### Checks

- What does unmoderated testing lose? Answer: The why. You see outcomes without explanation, cannot probe a hesitation, and never learn when an instruction was misread.
- When is it a reasonable choice? Answer: For confirmation questions — can people find this, does this wording work — where more attempts help more than close observation.
- What does remote moderated lose compared with in person? Answer: The setting and often the real device, plus what a person's hands are doing. If the setting was where your findings came from, that loss changes the study.

### Rubric and remediation

**The question suits an unmoderated method**

Adequate evidence: A confirmation question chosen, with discovery questions kept for moderated sessions.

- 0 — A why-question chosen for unmoderated running.
- 1 — A suitable question chosen without stating the distinction.
- 2 — Chosen with the discovery-versus-confirmation reasoning stated.
- 3 — As adequate, and the discovery questions are explicitly retained for moderated follow-up.

If below 2: Mark each open question discovery or confirmation, then choose only from the second group. Show at recheck: The marked question list.

**Instructions are self-contained and tested for misreading**

Adequate evidence: Instructions rewritten after at least one read-aloud test, with the changes visible.

- 0 — Untested instructions.
- 1 — Read by someone without changes resulting.
- 2 — Tested and rewritten where hesitation occurred.
- 3 — As adequate, and a second read confirmed the rewrite resolved the misreading.

If below 2: Have someone read the instructions aloud and narrate what they would do. Rewrite every hesitation. Show at recheck: The tested instructions.

**The limits are written specifically**

Adequate evidence: A list naming the missing why, hesitation, interruption and setting data.

- 0 — Generic caveats.
- 1 — Some limits named.
- 2 — Specific limits with the follow-up plan for surprises.
- 3 — As adequate, and the limits explain which of your findings could not have been produced this way.

If below 2: Look at your strongest session finding and ask whether an unmoderated run would have produced it. Usually it would not; that is the first limit. Show at recheck: The limits list.

**The run-or-not decision is justified**

Adequate evidence: A written decision with the reason, and a data-handling plan if running.

- 0 — No decision.
- 1 — A decision without a reason.
- 2 — Decision and reason, with storage and return planned if running.
- 3 — As adequate, and the decision names what would make you change your mind.

If below 2: Write one paragraph: what you would learn, what it costs, and whether it is worth it for this question. Show at recheck: The decision.

### Portfolio contribution

Deciding not to run a study, with the reason, is worth showing. It demonstrates method selection rather than method collection.

### Assigned resources

- R05: [GOV.UK: moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing) — Session planning, read for what moderation contributes and therefore what its absence removes. Purpose: Grounds the comparison between moderated and unmoderated approaches. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. It is about moderated testing; the unmoderated trade-offs here are the course's own. Fallback: R12.
- R04: [GOV.UK: analyse a research session](https://www.gov.uk/service-manual/user-research/analyse-a-research-session) — Turning observations into findings, read for what unmoderated data cannot supply. Purpose: Shows which parts of your analysis depend on data an unmoderated run does not produce. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Written for observed sessions; self-reported outcomes need more caution than it discusses. Fallback: R08.

## Lesson 11: Report the evaluation and decide what to build

Stable ID: m10-l11-v1. Core. Areas 10. Optional effort ~120 min.

**Objective.** Write an evaluation report of at most two pages that leads with the decision, carries participant counts, states the limits and names one thing not to build.

**Bring forward.** Your ranked problems, repair result, claims and cannot-claims.

The report is where testing becomes a decision. Written as a diary of sessions, it becomes a document nobody finishes.

### Learn

A reader wants the decision first. Leading with method reads as self-justification and buries the recommendation under an account of your process; leading with the change, supported by the evidence, gives a person who stops after two paragraphs the thing they needed. Method belongs in the limits section, where it explains how much weight each finding carries.

Participant counts belong beside every finding, not once at the end, because findings get quoted individually. The habit costs six words and prevents the most common misreading of a small study.

The limits section is assembled, not written from scratch: your recruitment exclusions from m05, your prototype's untestable list, your fakes sheet and your cannot-claims. Pasted together they make an honest section in ten minutes, and they protect the findings when someone quotes them next quarter.

Naming something not to build is the most useful sentence in most evaluation reports, and the least written. Evidence that removes work is worth more than evidence that adds it, and stating it explicitly forces the discussion to happen now rather than after the work is done.

**Common misconception.** “The report should be thorough so nobody can question it.” Length reduces the chance anyone acts. Two pages with the decision first, the counts attached and the limits stated will change more than fifteen pages of session narrative.

### Worked example

Two pages. First paragraph: hold the payment work and fix the held-place uncertainty first, because two of three participants could not tell whether their place was secured and one said she would have paid twice. Then four findings, each with counts and a quotation. Then the repair result, reported as partial. Then limits: three participants from one group, all comfortable with online payment; a click-through with faked search and account controls; nothing tested on a real connection except the payment wait; no accessibility testing. Then one non-recommendation: do not build the reminder feature, because nobody's difficulty was forgetting.

#### Report the evaluation and decide what to build

Write an evaluation report of at most two pages that leads with the decision, carries participant counts, states the limits and names one thing not to build.

**Where to work:** Plain text or Markdown, two pages. If you present it aloud, six slides at most; the constraint is what forces the decision to the front.

- Starting material: Your ranked problems, repair result and claims lists.
- Create HaruCourse/Practice/m10-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Report the evaluation and decide what to build

Input artifact: Your ranked problems, repair result and claims lists.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A report of at most two pages leading with the decision
- [ ] Findings with participant counts and evidence
- [ ] A limits section assembled from your earlier lists
- [ ] One explicit non-recommendation

## 1. Write the decision first
- Write the single change you would make and why, in one paragraph.
- Read the assigned sharing guidance for the finding structure.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Write the findings
- Write each finding as headline, counts, evidence, and what it changes.
- Cut to the number that fits two pages.
- Include the repair result, however it turned out.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Assemble the limits
- Paste in recruitment exclusions, the untestable list and the fakes sheet.
- Add what remains untested after the running-page test.
- Keep it as a section, not a footnote.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Say what not to build
- Name one thing the evidence argues against.
- State what would change your mind about it.
- Separate expert opinion from tested findings in a short list.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Check and store
- Read it as someone who was not there; remove anything they could not follow.
- Anonymise quotations and check nothing identifies a participant.
- Save the report and file the raw material where it can be produced.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The decision comes first and fits a paragraph: [evidence reference]
- Every finding carries participant counts and evidence: [evidence reference]
- The limits section is specific and assembled from earlier lists: [evidence reference]
- One non-recommendation is stated with what would change it: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Move your recommendation to the top and cut everything before it.

</details>

<details>
<summary>Hint 2</summary>

Add the count and one piece of evidence to each finding; drop any finding you cannot support.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m10-l11-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The decision comes first and fits a paragraph: An opening paragraph naming the change and its reason, before any method. Every finding carries participant counts and evidence: Findings written with of-total counts and a quotation or observation each. The limits section is specific and assembled from earlier lists: A section naming participants, recruitment route, faked behaviour and untested areas. One non-recommendation is stated with what would change it: A named thing not to build, its reason, and the evidence that would reverse it.

**Bring forward:** The evaluation report is the case-study spine for this module and the artefact most like real professional output. Keep the raw material private. Module handoff: Bring unresolved issues to m11


### Practice and pause points

- Write the decision first (~25 min): Write the single change you would make and why, in one paragraph. Read the assigned sharing guidance for the finding structure.
- Write the findings (~30 min): Write each finding as headline, counts, evidence, and what it changes. Cut to the number that fits two pages. Include the repair result, however it turned out.
- Assemble the limits (~25 min): Paste in recruitment exclusions, the untestable list and the fakes sheet. Add what remains untested after the running-page test. Keep it as a section, not a footnote.
- Say what not to build (~25 min): Name one thing the evidence argues against. State what would change your mind about it. Separate expert opinion from tested findings in a short list.
- Check and store (~15 min): Read it as someone who was not there; remove anything they could not follow. Anonymise quotations and check nothing identifies a participant. Save the report and file the raw material where it can be produced.

Pause after any step; save the artifact and next action.

**Free tool path.** Plain text or Markdown, two pages. If you present it aloud, six slides at most; the constraint is what forces the decision to the front.

### Output

A report of at most two pages leading with the decision; Findings with participant counts and evidence; A limits section assembled from your earlier lists; One explicit non-recommendation

### Checks

- Why lead with the decision rather than the method? Answer: Because the reader has a decision to make. Method first reads as justification and buries the recommendation behind an account of your work.
- Why attach counts to each finding? Answer: Because findings are quoted individually. A count travelling with the sentence prevents a three-participant observation being read as a measurement.
- Why name something not to build? Answer: Because evidence that removes work is worth more than evidence that adds it, and stating it forces the argument to happen before the work rather than after.

### Rubric and remediation

**The decision comes first and fits a paragraph**

Adequate evidence: An opening paragraph naming the change and its reason, before any method.

- 0 — The report opens with what you did.
- 1 — A decision appears but after the method.
- 2 — The decision opens the report in one paragraph.
- 3 — As adequate, and it names the decision it unblocks for someone else.

If below 2: Move your recommendation to the top and cut everything before it. Show at recheck: The opening paragraph.

**Every finding carries participant counts and evidence**

Adequate evidence: Findings written with of-total counts and a quotation or observation each.

- 0 — Findings asserted without counts.
- 1 — Counts on some findings.
- 2 — Counts and evidence on all of them.
- 3 — As adequate, and assisted completions are visible in the counts.

If below 2: Add the count and one piece of evidence to each finding; drop any finding you cannot support. Show at recheck: The findings section.

**The limits section is specific and assembled from earlier lists**

Adequate evidence: A section naming participants, recruitment route, faked behaviour and untested areas.

- 0 — No limits, or one line about sample size.
- 1 — Some limits, missing the prototype's fakes or untested areas.
- 2 — All assembled from the earlier lists into one section.
- 3 — As adequate, and it names the finding most likely to change with a different sample.

If below 2: Collect your m05 exclusions, untestable list and fakes sheet and paste them in unchanged. Show at recheck: The limits section.

**One non-recommendation is stated with what would change it**

Adequate evidence: A named thing not to build, its reason, and the evidence that would reverse it.

- 0 — No non-recommendation.
- 1 — Stated without a reversal condition.
- 2 — Stated with reason and reversal condition.
- 3 — As adequate, and it addresses the idea the project began with.

If below 2: Ask what the evidence argues against. If the answer is nothing, the study probably confirmed what you already believed. Show at recheck: The non-recommendation.

### Portfolio contribution

The evaluation report is the case-study spine for this module and the artefact most like real professional output. Keep the raw material private.

### Assigned resources

- R59: [GOV.UK: sharing user research findings](https://www.gov.uk/service-manual/user-research/sharing-user-research-findings) — Structuring findings: headline, essential facts, why it matters, evidence. Purpose: Supplies the report structure this lesson applies. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06; published 24 May 2016. It does not cover anonymisation, which your data-handling reading supplies. Fallback: R04.
- R04: [GOV.UK: analyse a research session](https://www.gov.uk/service-manual/user-research/analyse-a-research-session) — Moving from findings to decisions. Purpose: Keeps the recommendation traceable to the observations behind it. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. It does not discuss non-recommendations, which are this course's addition. Fallback: R08.

## Lesson 12: Close the project loop

Stable ID: m10-l12-v1. Core. Areas 10. Optional effort ~120 min.

**Objective.** Assemble the first project into a single evidence trail from research question to tested repair, and write the honest summary of what it does and does not demonstrate.

**Bring forward.** Everything from m05 to m10: questions, findings, structure, flows, screens, prototypes, tests and reports.

This is the end of the first project. Its value depends entirely on whether the trail from question to decision holds together.

### Learn

The trail is the deliverable. A reviewer reading the project should be able to start at any screen and walk backwards: this label came from that participant's words, this structure came from that tree test, this state exists because of that observed payment failure. Where the walk stops, you have either an undocumented decision or a judgement call, and both are fine when marked.

Judgement is not a lesser category. Much of design is decided without evidence because evidence is expensive, and saying “I chose this because it seemed the smaller risk, and here is what would test it” is stronger than manufacturing a research-sounding justification after the fact.

Scope has to be stated plainly, because a portfolio reader assumes more than you did. You built a prototype, not a product; you tested with a handful of people from your own network; you faked payment; you did not test with assistive technology. Every one of those is normal for a first project and dishonest only when omitted.

The language rules from the whole course apply to the summary: no shipped, no validated, no percentages from small samples, no invented participants, no claims about business outcomes. What you have is a designed and tested response to a researched problem, which is exactly what a first portfolio project should be.

**Common misconception.** “The project needs a strong outcome to be worth showing.” It needs an honest trail. A project that found a problem, designed for it, tested it, half-fixed it and said so is more persuasive than one claiming a measured improvement nobody can verify.

### Worked example

The trail was assembled as one page of links: five research questions; the finding that people confirm with someone else before paying; the structure change that made the flow resumable; the wireframe and its paper test; the interface with its held-place message; the usability sessions; the partial repair. Three decisions were marked judgement rather than evidence, including the choice to keep the shortlist. The scope statement said: prototype only, three to five participants from two groups in one city, payment faked, no assistive-technology testing, no measured outcomes of any kind.

#### Close the project loop

Assemble the first project into a single evidence trail from research question to tested repair, and write the honest summary of what it does and does not demonstrate.

**Where to work:** One page of plain text linking to your existing artefacts. Nothing new is produced here except the trail and the summary.

- Starting material: All artefacts from m05 through m10.
- Create HaruCourse/Practice/m10-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Close the project loop

Input artifact: All artefacts from m05 through m10.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A one-page evidence trail from question to tested repair
- [ ] Decisions marked evidence-led or judgement
- [ ] A scope statement naming what was built, faked and untouched
- [ ] A summary using no shipped, validated or measured language

## 1. Assemble the trail
- List each major design decision in the project.
- Beside each, name the evidence it came from and where that evidence lives.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Mark the judgements
- Mark every decision with no evidence behind it as judgement.
- For each, write what would test it.
- Resist inventing a research-sounding reason.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Write the scope statement
- State what you built and at what fidelity.
- State what was faked and what was never tested.
- State who took part and how they were reached.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Write the summary
- Summarise the project in one paragraph without outcome claims.
- Remove the words shipped, validated, proven and any percentage.
- Name the two things you would do next and why.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. File everything
- Store the artefacts so each link in the trail can be produced.
- Keep raw participant material private and separate.
- Save the trail, scope and summary together.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Each major decision links to its evidence or is marked judgement: [evidence reference]
- The scope statement names built, faked and untested: [evidence reference]
- The summary contains no outcome or measurement claims: [evidence reference]
- Artefacts are filed so each link can be produced: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Take each decision and try to name the artefact behind it. If you cannot, mark it judgement rather than searching for a justification.

</details>

<details>
<summary>Hint 2</summary>

Reuse your fakes sheet, untestable lists and recruitment exclusions; they already contain the statement.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m10-l12-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Each major decision links to its evidence or is marked judgement: A trail listing decisions with sources, and judgement calls marked with what would test them. The scope statement names built, faked and untested: A statement covering fidelity, faked behaviour, participants and untested areas. The summary contains no outcome or measurement claims: A paragraph free of shipped, validated, proven, and of percentages from small samples. Artefacts are filed so each link can be produced: Stored artefacts matching the trail, with raw participant material kept private and separate.

**Bring forward:** This is the first complete project: a researched problem, a designed response, a test and an honest account of what it does not show. Present the trail and the scope statement together. Module handoff: Bring unresolved issues to m11


### Practice and pause points

- Assemble the trail (~30 min): List each major design decision in the project. Beside each, name the evidence it came from and where that evidence lives.
- Mark the judgements (~25 min): Mark every decision with no evidence behind it as judgement. For each, write what would test it. Resist inventing a research-sounding reason.
- Write the scope statement (~25 min): State what you built and at what fidelity. State what was faked and what was never tested. State who took part and how they were reached.
- Write the summary (~25 min): Summarise the project in one paragraph without outcome claims. Remove the words shipped, validated, proven and any percentage. Name the two things you would do next and why.
- File everything (~15 min): Store the artefacts so each link in the trail can be produced. Keep raw participant material private and separate. Save the trail, scope and summary together.

Pause after any step; save the artifact and next action.

**Free tool path.** One page of plain text linking to your existing artefacts. Nothing new is produced here except the trail and the summary.

### Output

A one-page evidence trail from question to tested repair; Decisions marked evidence-led or judgement; A scope statement naming what was built, faked and untouched; A summary using no shipped, validated or measured language

### Checks

- What is an evidence trail? Answer: A path from each design decision back to what you observed. Where it stops, the decision was judgement, which is fine when marked.
- Why mark judgement calls explicitly? Answer: Because unmarked they read as evidence-led, and a reviewer who finds one unsupported claim discounts the rest of the case study.
- What language is not available to you here? Answer: Shipped, validated, proven, measured improvement, and any percentage from a handful of participants. What you have is designed, tested and partially repaired.

### Rubric and remediation

**Each major decision links to its evidence or is marked judgement**

Adequate evidence: A trail listing decisions with sources, and judgement calls marked with what would test them.

- 0 — Decisions listed without sources.
- 1 — Some traced, others asserted as research-led without a source.
- 2 — Every decision traced or marked judgement with a test named.
- 3 — As adequate, and one decision is identified as contradicted by later evidence and corrected.

If below 2: Take each decision and try to name the artefact behind it. If you cannot, mark it judgement rather than searching for a justification. Show at recheck: The completed trail.

**The scope statement names built, faked and untested**

Adequate evidence: A statement covering fidelity, faked behaviour, participants and untested areas.

- 0 — No scope statement.
- 1 — Partial, usually omitting what was faked.
- 2 — All four covered plainly.
- 3 — As adequate, and it names the untested area most likely to change a conclusion.

If below 2: Reuse your fakes sheet, untestable lists and recruitment exclusions; they already contain the statement. Show at recheck: The scope statement.

**The summary contains no outcome or measurement claims**

Adequate evidence: A paragraph free of shipped, validated, proven, and of percentages from small samples.

- 0 — Outcome or measurement language present.
- 1 — Hedged but still implying validation.
- 2 — Clean of outcome claims, describing what was done and found.
- 3 — As adequate, and it says what would be needed to make an outcome claim.

If below 2: Search for those words and rewrite each sentence as what you did and what you observed. Show at recheck: The summary.

**Artefacts are filed so each link can be produced**

Adequate evidence: Stored artefacts matching the trail, with raw participant material kept private and separate.

- 0 — Artefacts scattered or missing.
- 1 — Filed but raw participant material mixed with shareable work.
- 2 — Filed with a clear separation between shareable and private material.
- 3 — As adequate, and the filing follows the deletion dates in your m05 data plan.

If below 2: Walk your own trail and try to open each artefact. Anything you cannot find is not evidence. Show at recheck: The filed artefacts.

### Portfolio contribution

This is the first complete project: a researched problem, a designed response, a test and an honest account of what it does not show. Present the trail and the scope statement together.

### Assigned resources

- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — What prototypes can and cannot be used to claim. Purpose: Bounds the project summary to what a prototype and a small test support. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Nothing in this project validates performance, real data volumes or implemented accessibility. Fallback: R05.
- R59: [GOV.UK: sharing user research findings](https://www.gov.uk/service-manual/user-research/sharing-user-research-findings) — Presenting findings so a decision can be made from them. Purpose: Shapes the summary for a reader who will spend two minutes on it. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. It does not cover portfolio presentation, which is m19's subject. Fallback: R04.
