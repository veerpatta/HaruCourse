# Prototyping and evaluation

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the small-action teaching and tracking standard](docs/COURSE-AUTHORING.md#small-action-and-tracking-contract--12-september-2026). Only Lesson 1 currently uses the new action flow. Published, worksheet-enabled, teaching-refined, learner-validated and assessed are separate states.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Paper for order and wording; a folder of linked local HTML files for flow; the same files with throttling for timing. No account, subscription or design platform is required at any fidelity in this module.

- Starting material: Your open-questions list and current screens.
- Create HaruCourse/Practice/m10-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and list questions

- Read the assigned guidance on choosing prototype fidelity.
- List the open questions from m07 and m09 you still cannot answer.
- Mark which are about order, flow or timing.

**You should end up with:** Every question you still cannot answer, each marked as being about wording, about moving between screens, or about waiting and real content.

Worksheet fields for this step:

- Every question about this design you still cannot answer — Take them from your Module 7 open questions and your Module 9 interaction notes. Write them all down before you judge any of them.
- Beside each question: is it about wording and order, about moving between screens, or about waiting and real content?

<details>
<summary>Help with this step</summary>

- **Prototype:** Something rough you make in order to find out one thing. If you cannot say what it exists to find out, it is an artefact rather than a prototype.
- **Fidelity:** How close the prototype is to a real product. Paper is low, a clickable set of screens is middling, something that actually runs is high.

Stuck starting? Go back to your open questions and finish this sentence for each: “I still do not know whether …”.

Is it enough? Every question carries one of the three marks, and at least two different marks appear.

</details>

#### 2. Match fidelity to question

**See it first.** Made-up example. Choosing a prototype for a question about wording, and starting far too high.

- **What I set out to build:** A clickable prototype of the whole booking flow. Twelve screens, real photographs, the studio’s colours. It felt like the serious answer.
- **The question I actually had:** “Do people understand what they are agreeing to before they pay?” That is about the words on two screens and the order those screens come in.
- **The test I applied:** What could the level below not tell me? Paper could tell me all of it. So the twelve screens were buying me nothing I had asked for.
- **What I built instead:** Three sheets of paper: the class page, the review page and the payment page, with the real wording on each. An afternoon, not two days.
- **What it cost me:** Paper cannot tell me whether the wait after paying feels bearable. That went on the untestable list and became a separate question with its own prototype later.

**The wrong turn:** The wrong turn is choosing the fidelity that will look best when you show it. A prototype built to be admired collects comments about photographs and colours, and the question you started with goes unanswered.

**What it costs:** Paper feels unimpressive and you will want to apologise for it. It also gets built in an afternoon, so you can rewrite it after the first person hesitates.

**Still unknown:** Still unknown: whether people read wording differently on paper than on a screen. That is a real risk, and it is smaller than never asking the question at all.

- For each question choose paper, clickable or built.
- Justify every choice above paper by what paper cannot answer.
- Reject any fidelity chosen for how it will look.

**You should end up with:** One fidelity per question, with the cheaper level named and what it could not have told you.

**Try it with help.** Six questions from a made-up class-booking project. For each one, decide the cheapest thing that could answer it.

- Do people understand what they are agreeing to before they pay?
  - **paper** — The question is about the wording and the order of two screens. Sheets of paper carry both, and you can rewrite one in a minute.
  - clickable — Linking the screens adds nothing, because the person only has to read them in order. You would be paying for screens the question does not need.
  - built — Nothing here waits, loads or uses real data. A built version would answer it and cost you a fortnight.
- Can people find the way to change a booking they have already made?
  - paper — Finding something means looking in several places. On paper you hand over the next sheet, and that is you doing the finding.
  - **clickable** — Looking for something means moving between screens with nobody helping. Linked screens are exactly what that needs.
  - built — Real data and real waiting are not part of this question. The click-through answers it, so building is money spent on nothing.
- After pressing pay, does the wait feel bearable, or do people press again?
  - paper — Paper cannot wait. You would have to say “imagine four seconds pass”, and imagining a wait is not the same as sitting through one.
  - clickable — A click-through changes screen the instant it is tapped. The gap is the thing you want to watch, and there is no gap.
  - **built** — Only something that actually waits shows you what a person does during the wait. This is what the top of the ladder is for.
- Which of two names do people expect to hold the classes they saved?
  - **paper** — Two words on two sheets, shown to the same person. Nothing cheaper could answer it and nothing dearer would answer it better.
  - clickable — You would be building screens in order to hold one word. The word is the whole question.
  - built — A built version tests the same word at a hundred times the cost.
- Does the list still work when sixty classes load on a slow connection?
  - paper — Sixty classes on paper is a pile you lay out at your own speed. The question is about loading and scrolling, which paper does not do.
  - clickable — A click-through shows a screen that is already there. It cannot show you a long list arriving slowly.
  - **built** — Loading, waiting and real content volume all need something that actually runs. This is the one on the list that earns it.
- When a class turns out to be full, can people get from there to something they would book instead?
  - paper — The person has to leave one screen and reach another without being handed it. Passing the next sheet across removes the question.
  - **clickable** — A failure screen with ways out of it is exactly what linked screens are for, and it needs no real data at all.
  - built — Nothing here depends on real prices, real waiting or real places remaining. The click-through answers it.

**Then:** Now do the same with your own questions. For each one, name the cheapest level and what the level below could not have told you.

**What to watch for:** Look back at the two you found hardest. The test is not how important the question is. It is what the person has to do to answer it. Reading words is paper. Going looking is clickable. Waiting, and real amounts of content, are built.

Worksheet fields for this step, revealed a few at a time in the app:

- Prototype 1 · the question, the fidelity you chose, and what the cheaper level could not answer
- Prototype 2 · the question, the fidelity you chose, and what the cheaper level could not answer
- Prototype 3 · the question, the fidelity you chose, and what the cheaper level could not answer

<details>
<summary>Help with this step</summary>

- **Paper prototype:** The flow drawn or printed on sheets, with you putting the next sheet in front of the person. It is the quickest thing to change.
- **Clickable prototype:** Screens joined so a person can move between them by tapping, with nothing real behind them.
- **Built version:** Something that actually runs, so it can load, wait and hold real amounts of content. It is the dearest of the three and the only one that can answer a question about waiting.

Stuck starting? Take your first question and ask what paper could not tell you. If the answer is nothing, it is a paper prototype.

Is it enough? Every choice above paper names something specific that paper could not have shown you.

</details>

#### 3. Write the untestable lists

**See it first.** Made-up example. Writing what a paper prototype cannot establish, and writing modesty instead of a limit.

- **What I wrote first:** “It is only paper, so it is not the real thing.” I wrote that under all three prototypes and moved on feeling honest.
- **Why it was no use:** The sentence is true and it stops nothing. Something that vague would let me claim almost anything a fortnight later.
- **The sentence I nearly wrote:** This was a made-up tool library, and the flow was returning a borrowed drill. After walking it twice myself I very nearly wrote “people find the return date easily”.
- **What the list should have said:** One item borrowed, never six. The date printed on the only sheet in front of you. One path that works and no way to get lost. Each line names something that made the flow easier than real use will be.
- **What I could claim instead:** “With one item borrowed and the date on the same sheet, the date was read without hesitation in two run-throughs of my own.” Narrow, and every word of it is mine to defend.

**The wrong turn:** The wrong turn is writing the untestable list as modesty about the prototype rather than as a limit on your own sentences. Modesty is comfortable, it sounds honest, and it constrains nothing you write afterwards.

**What it costs:** Naming the limits leaves you with a narrow claim full of conditions, and somebody will read it and ask whether that is really all you found. You also have to write the list while the prototype still feels promising, which is exactly when you least want to.

**Still unknown:** Still unknown: whether the date was easy to read because of the wording or because there was only one item on the sheet. Nothing but a version with six items on it can separate those two.

- For each prototype write what it cannot establish.
- Name the claim you would be tempted to make from it.
- Keep these lists; they go into the report later.

**You should end up with:** For each prototype, what it cannot establish and the sentence you would like to claim from it.

Worksheet fields for this step:

- For each prototype: the list of things it cannot establish — Invented prices, faked waiting, one working path only, three items where there will one day be sixty.
- For each prototype: the strongest sentence you would like to claim from it, and whether it is allowed

<details>
<summary>Help with this step</summary>

- **Untestable list:** The written list of what a prototype cannot show, made before you test it. It is the thing that stops you overclaiming afterwards.

Stuck starting? Walk your own prototype and note everything that is pretend: the prices, the waiting, the single path that works.

Is it enough? Each list names a specific sentence you might otherwise have written, not a general limitation.

</details>

#### 4. Start the lowest one

- Build the paper or clickable version for your first question.
- Include one failure path, not only the happy one.
- Stop as soon as it can answer the question.

**You should end up with:** One prototype built at the lowest fidelity that answers its question, including one failure path.

Worksheet fields for this step:

- Which question it answers, which fidelity, and how many screens
- The one failure path you included, and how a person reaches it
- Where the prototype lives — A folder name, or “paper, in my folder”. Nothing is uploaded.

<details>
<summary>Help with this step</summary>

- **Failure path:** What a person meets when something goes wrong: the class is full, the payment is refused, nothing matches. Most of what people learn about a service, they learn here.

Stuck starting? Build only the screens the question needs, then add the one failure from your Module 7 exception table.

Is it enough? You could hand it to somebody and they could reach both the ordinary ending and the failure.

</details>

#### 5. Record the decision

- Write why you stopped where you did.
- Note what you would add if a later question needed it.
- Save the questions, choices and untestable lists together.

**You should end up with:** Why you stopped where you did, and the repair the Check questions asked for.

Worksheet fields for this step:

- Why you stopped where you did, and what you would add if a later question needed it
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Stopping note:** The short written reason for building no further, naming what you would add and which later question would make it worth adding.
- **Repair:** The one change a Check question asks you to make. You make it in the step it belongs to, then write down here that you made it.

Stuck starting? Finish this sentence: “I stopped here because the question is already answered, and adding more would only …”.

Is it enough? The note names what you would add, and which later question would make it worth adding.

</details>

**Save and continue.** Saved for you: Your questions, fidelity choices and untestable lists save as you type, on this device first and then online. Kept outside the app: The prototype itself stays with you, on paper or in a folder. Write down where it lives in step 4; nothing is uploaded. What your creator sees: Your creator reads the question beside each fidelity choice, and the untestable lists. Those are what show the prototype was built to learn rather than to show. Your next action: Open Your work and choose Ready for review. The next lesson builds the click-through for the flow you chose here.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For each prototype complete “this exists to find out whether …”. Anything you cannot complete is an artefact, not a prototype.

</details>

<details>
<summary>Hint 2</summary>

For each prototype ask what paper could not tell you. If the answer is nothing, build it on paper.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Build the cheapest thing that answers the question.
Task: Write the question your prototype must answer, choose the lowest fidelity that can answer it, and state what that choice makes untestable.
Challenge one thing at a time, and start with the mistake this lesson is about: “A more realistic prototype gives more reliable results.” It gives results about a wider set of things, at more cost, and it makes people comment on the surface. If your question is about order or wording, realism is money spent buying feedback you did not want.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the question list and ask whether each prototype has a written question. Look at the justifications and ask whether fidelity is justified by what the level below cannot answer. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Draw the screen list and the click-through you build from it on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: A text editor and a browser. One file per screen, links between them, and your real content. Add a stylesheet if you want the fidelity; the point is that it opens on a participant's phone with no account and no install.

- Starting material: Your chosen flow and its screens.
- Create HaruCourse/Practice/m10-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Plan the screens

**See it first.** Made-up example. Listing the screens for a collection flow, and choosing the failure that was easiest to draw.

- **The list I wrote:** Six screens for a made-up food co-op collection flow: the slot list, choosing a slot, confirming, the ticket. Then one failure screen, card declined.
- **Why the declined card appealed:** I had drawn one before and I knew exactly what it said. Ten minutes, and my list had a failure on it, so nothing looked missing.
- **What my exception table actually said:** The thing that goes wrong in this flow is a slot filling up while somebody is still deciding. A declined card had happened once. I had chosen the failure I could draw rather than the one people meet.
- **What I swapped it for:** A screen saying the slot has just gone, with two ways onward: the next slot that day, or the same slot tomorrow.
- **What that did to the must-work column:** Both ways onward now have to really work, because watching which one a person takes is the entire reason that screen exists. The card fields can stay dead.

**The wrong turn:** The wrong turn is choosing the failure you already know how to draw. It is quick, and the screen list ends up with a failure on it, so the plan looks complete while the going-wrong you were least worried about is the only one you can watch.

**What it costs:** The failure that actually happens is one you have never designed, so you are inventing a screen and two ways out of it inside a step that was meant to be planning. Some of that invention will be thrown away after the first session.

**Still unknown:** Still unknown: whether those two ways onward are the two people want. The prototype can show which of the two they take, and it cannot show the third one they were hoping for.

- List the screens your chosen flow needs, including one failure.
- Decide which actions must work and which may be dead.

**You should end up with:** The screens your flow needs, including one where something goes wrong, and which actions must really work.

Worksheet fields for this step:

- The one flow you are building, in a few words
- Every screen the flow needs, including at least one where something goes wrong — One line per screen. Take the failure from your Module 7 exception table.
- Which actions must really work, and which may be dead — Dead means nothing happens when it is tapped. That is allowed, and it goes on the fakes sheet later.

<details>
<summary>Help with this step</summary>

- **Click-through:** A set of screens joined so that tapping one takes you to the next. On paper you turn the sheets yourself; in a free tool the links do it.
- **Exception table:** Your Module 7 list of the things that can go wrong in this flow, with what the service should say.

Stuck starting? Walk the flow in your head and write a line for each screen you would see. Then add the one where it goes wrong.

Is it enough? One screen on the list is a failure, and every other screen has a reason to exist.

</details>

#### 2. Build the click-through

**See it first.** Made-up example. Building a click-through of a booking flow, polishing it, and then refusing to change it.

- **What I built first:** Seven screens with the real photographs, the studio’s colours and a soft shadow under every card. Two days of work, and it looked like a product.
- **What the first session was about:** The person said the photographs were lovely and asked what typeface I had used. Twenty minutes of the hour, gone.
- **What I would not do:** She hesitated at the review screen. I found I did not want to change that screen, because I had spent a day on it.
- **What I built the second time:** Seven sheets of paper with the real wording, no photographs, no colour. An afternoon, with me turning the pages.
- **What that changed:** When the next person hesitated in the same place, I rewrote the sheet between sessions. Four minutes, and the third session tested the new wording.

**The wrong turn:** The wrong turn is making it look finished. A finished-looking prototype collects comments about the surface, and it turns you into someone defending work instead of someone changing it.

**What it costs:** A plain prototype means somebody will say it looks unfinished, and you will feel that. It buys you the ability to change it between one session and the next.

**Still unknown:** Still unknown: whether people behave differently in front of something obviously rough. They may be gentler with it, and no test at this size can settle that.

- Create one file per screen with your real content.
- Link each action to the screen it should reach.
- Add the failure path from your exception table.

**You should end up with:** A working click-through of the flow, with each action reaching the screen it should.

Worksheet fields for this step:

- How you are building it (Paper screens, with you acting as the computer / A free prototyping tool with the screens linked) — Both are real prototypes. The point of either is that the person taking part needs no account and installs nothing.
- Each action and the screen it should reach

<details>
<summary>Help with this step</summary>

- **Link:** The join between one action and the screen it opens. On paper the link is you, turning to that sheet when the person points at it.
- **Acting as the computer:** The paper way of running a prototype: you watch where the person points and put the next sheet in front of them, saying nothing.
- **Prototyping tool:** A free program for drawing screens and joining them, which gives you a link to open. The person taking part needs no account and installs nothing.

Stuck starting? Make the screens first with nothing linked. Then join them one action at a time, following your own flow.

Is it enough? You can walk from the first screen to the ordinary ending and to the failure, without touching anything except the screens.

</details>

#### 3. Make the data awkward

- Include one very long name and one missing value.
- Include one edge case: last place, zero results, or an unusual price.
- Check the layout survives all three.

**You should end up with:** Content that includes one very long value, one missing value and one edge case, with what each did to the layout.

Worksheet fields for this step:

- The very long value, the missing value and the edge case you put in, and what each one did to the layout — A class title that runs to three lines, a class with no price shown, a class with one place left.

<details>
<summary>Help with this step</summary>

- **Edge case:** A value at the far end of what is possible: the last place left, the class with no price, the booking made for today.
- **Missing value:** A place in the layout where the content simply is not there, which is common in real data and rare in the examples you invent.
- **Wrapping:** What text does when it will not fit on one line: it runs onto the next and pushes everything below it further down the screen.

Stuck starting? Take your three worst real examples. If you have none, invent the longest title you can imagine somebody typing.

Is it enough? Something moved, wrapped or fell off the screen, and you wrote down what.

</details>

#### 4. Write the fakes sheet

- List every control that does nothing.
- List every invented value and every faked delay.
- Note which of these a participant is likely to try.

**You should end up with:** A fakes sheet listing every dead control, every invented value and every faked wait, and which ones a person is likely to try.

**Try it with help.** A fakes sheet from a made-up prototype of a class-booking flow. Four rows: the search box does nothing; the account link does nothing; every price is invented; a two-second wait was added before the confirmation screen.

In the session, one person tapped the search box, waited, and said “I think it’s broken”. Which row on that sheet was doing the most work?

- **The search box row, because it was written before the session and turns that moment into a route you had not built.** — Without the row you would write down “person could not finish the task”. With it you write down “person went looking for search, which does not exist yet”. Those two notes lead to different decisions.
- The invented prices row, because somebody who spots a wrong price stops trusting the rest. — Invented prices are worth recording, and people rarely act on them. The rows that earn their place are the ones a person will try to use.
- The faked wait row, because a wait you invented is not evidence about the real one. — That row protects a claim you might make weeks later, which is a different job from reading the session correctly while it is happening.
- None of them, because the sheet is a record for you and does not change what happened. — It changes what you write down, and what you write down is the only part of the session that survives it.

**Then:** Now walk your own prototype and tap everything, including the things you already know are dead. Every non-response is a row.

Worksheet fields for this step:

- Every control that does nothing when a person taps it
- Every invented value and every faked wait
- Which of these a person is most likely to try

<details>
<summary>Help with this step</summary>

- **Fakes sheet:** The written record of everything in the prototype that only pretends to work. It is usually the most useful page you produce in this lesson.

Stuck starting? Go through screen by screen and tap every word, icon and box, not only the ones you built.

Is it enough? Somebody else could read the sheet and predict which taps will do nothing.

</details>

#### 5. Open it on a phone

- Open the prototype on a phone and walk the flow.
- Fix anything unreachable or unreadable at that size.
- Save the prototype and the fakes sheet together.

**You should end up with:** The prototype walked on a phone, with what you fixed, and the repair the Check questions asked for.

Worksheet fields for this step:

- What was unreachable or unreadable at phone size, and what you changed
- Where the prototype and the fakes sheet live together
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Walking it:** Doing the whole flow yourself at phone size, start to finish, without helping yourself past anything that sticks.
- **Reachable:** Whether a person can actually get to a control with a thumb, rather than it sitting under something or off the edge of the screen.
- **Repair:** The one change a Check question asks you to make. You make it in the step it belongs to, then write down here that you made it.

Stuck starting? Open it on a phone, or hold the paper sheets at phone size, and do the whole flow without helping yourself.

Is it enough? Nothing in the flow is unreachable or unreadable at that size, and the fakes sheet is stored with the prototype.

</details>

**Save and continue.** Saved for you: The screen list, the links, the awkward content and the fakes sheet save as you type, on this device first and then online. Kept outside the app: The prototype stays with you: paper sheets in a folder, or a link in a free tool. Write down in step 5 where the two of them live together. What your creator sees: Your creator reads the fakes sheet first. It shows you know exactly what your prototype is pretending, which is what makes any later finding believable. Your next action: Open Your work and choose Ready for review. The next lesson writes the tasks you will give people in front of this prototype.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Rebuild as one file per screen with plain links, then open the first file on a phone and walk the flow.

</details>

<details>
<summary>Hint 2</summary>

Take the top failure from your exception table and add the screen plus the link that reaches it.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: A clickable prototype without an account.
Task: Build a clickable prototype of one flow from linked local files, including one failure path, and record exactly what it fakes.
Challenge one thing at a time, and start with the mistake this lesson is about: “A prototype should feel like the real product.” It should behave like the real product in the ways your question cares about, and be obviously disposable in every other way. Feeling real makes people evaluate the surface and makes you reluctant to change it.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the prototype opened on a phone and ask whether the prototype runs in a browser with no account. Look at the failure path in the prototype and ask whether at least one failure path is included. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written work: the tasks on paper or in a text file, with the success definitions beside them. Nothing else is needed.

- Starting material: Your prototype and its question list.
- Create HaruCourse/Practice/m10-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and draft

- Read the assigned guidance on writing tasks for a session.
- Draft five tasks from the questions your prototype answers.

**You should end up with:** Five rough tasks, one per question your prototype exists to answer.

Worksheet fields for this step:

- One rough task per question your prototype exists to answer — Write them badly and quickly. All the rewriting happens in the next step.

<details>
<summary>Help with this step</summary>

- **Task:** One thing you ask a person to get done during a session. It has a situation, a goal and a point at which they stop.
- **Control:** Anything on the screen a person can operate or read as a signpost: a button, a menu, an icon, a page name.

Stuck starting? Take your first question and finish this sentence: “to find that out, somebody would have to try to …”.

Is it enough? There are five, and each one traces back to a question the prototype exists to answer.

</details>

#### 2. Strip the vocabulary

**See it first.** Made-up example. Writing one task, reading it back, and finding I had told the person where to go.

- **What I wrote first:** “Use the search box to find a pottery class on Saturday, then add it to your basket.”
- **Why it felt fine:** It is short, it is clear, and anybody could follow it. That turned out to be exactly the problem.
- **What it was actually testing:** Whether a person can follow instructions. I already know they can. What I wanted to know was whether it would occur to them to search at all.
- **What I wrote instead:** “You want to do something on Saturday with your sister. Find something you would both be happy with, and stop when you reach the point where you would pay.”
- **What that gave me:** The first person never searched. She scrolled the whole list instead. That is a finding, and the first wording would have hidden it completely.

**The wrong turn:** The wrong turn is writing the task in the words that are on your own screens, because those are the words in your head. Every one of them hands the person a piece of the answer.

**What it costs:** A task written as a situation is longer and vaguer, and people will ask you what you mean. Saying “whatever you would normally do” is uncomfortable, and it is the whole method.

**Still unknown:** Still unknown: whether the situation you invented is one this person would ever really be in. If it is not, they are acting, and all you can do is watch for it.

- Underline every word in your tasks that appears in the interface.
- Rewrite each task to describe the situation instead.
- Check nothing names a button, menu or screen.

**You should end up with:** Each task rewritten as a situation with a goal and a stopping point, naming no control.

**Try it with help.** Six task wordings from a made-up class-booking study. For each one, decide what it does to the person taking part.

- “Open the Manage booking page and cancel Saturday’s class.”
  - **names a control** — “Manage booking” is printed on the screen. Reading it aloud means you never find out whether anybody would have looked there.
  - leads them there — It goes further than leading. It gives the exact words to hunt for, so no hunting happens at all.
  - leaves it to them — Nothing is left to them. The route, the page and the outcome are all in the sentence.
- “You booked a class for Saturday and now you cannot go. Do whatever you would normally do about it, and stop when you feel it is dealt with.”
  - names a control — Read it again for words that appear on your screens. Booked, class and Saturday describe her circumstances, not your controls.
  - leads them there — It says nothing about what exists or where to look. Cancelling, changing and telephoning are all still open to her.
  - **leaves it to them** — A situation, a goal and a stopping point, with the route left open. That is the shape you are after.
- “There is a way to change the date of a booking without cancelling it. See if you can find it.”
  - names a control — No button or page is named. What it gives away is that the thing exists at all.
  - **leads them there** — Telling the person the feature is there removes the most useful thing you could have watched: whether she expected it to be there.
  - leaves it to them — The decision has already been taken for her. She is now searching for something you promised is somewhere.
- “You want to give your sister a class for her birthday. Get as far as the point where you would pay.”
  - names a control — Nothing in it appears on a screen. Present, birthday and sister all belong to her life rather than your design.
  - leads them there — It sets a goal without saying anything about how the site works, or even whether it can do this.
  - **leaves it to them** — A reason, a goal and a clear stopping point. If the site cannot do it at all, you will find that out too.
- “Tap the filter icon and narrow the list to Saturday mornings under twenty pounds.”
  - **names a control** — Filter is on the screen and so is the icon. She is now operating your design rather than using it.
  - leads them there — It does much more than lead. It supplies the control, the order to use it in, and the values to type.
  - leaves it to them — The only thing left to her is the tapping.
- “The class you were going to book is full. Find the alternative the site suggests.”
  - names a control — No control is named. “Alternative” describes an outcome rather than anything printed on a button.
  - **leads them there** — It promises that a suggestion exists. Whether anybody notices one is exactly what a full-class screen needs testing for.
  - leaves it to them — She is told there is something there to find, so the decision about what to do next has been made for her.

**Then:** Now read your own five aloud and mark each one the same way. Rewrite anything that is not in the third group.

**What to watch for:** Look back at the two you found hardest. Naming a control is easy to spot, because the word is on your screen. Leading is harder, because the sentence sounds like a situation while quietly promising that something exists. The test is whether the person could still come away believing the feature is not there.

Worksheet fields for this step, revealed a few at a time in the app:

- Task 1 · the situation, the goal, and where the person stops — Underline every word that also appears on your screens, then write the task again without any of them.
- Task 2 · the situation, the goal, and where the person stops
- Task 3 · the situation, the goal, and where the person stops
- Task 4 · the situation, the goal, and where the person stops
- Task 5 · the situation, the goal, and where the person stops

<details>
<summary>Help with this step</summary>

- **Situation:** The circumstances you hand the person so the task has a reason: who they are with, what they want, and why it is today.
- **Stopping point:** The sentence telling the person when they are finished, so they are not left guessing whether you want more.
- **Leading:** Wording that promises a feature exists without naming it, such as “find the waiting list”. It costs you the finding about whether anybody expected one.

Stuck starting? Take your first rough task and cross out every word that also appears on your screens. Write what is left as a situation.

Is it enough? No task names a button, menu, icon or page, and none of them promises that a feature exists.

</details>

#### 3. Define success

**See it first.** Made-up example. Writing what counts as success for one task, and describing my own route instead of the person’s goal.

- **What I wrote first:** “Success: she uses the change-date route and reaches the new confirmation screen.” One line, and it looked like a decision taken in advance.
- **Why it felt right:** That route is the thing I built and the thing I am anxious about. Writing it down felt like being strict with myself.
- **What I saw reading it back:** It is written from inside my design. Her goal is not to use a route. It is to not be there on Saturday and to not lose the money.
- **What I wrote instead:** Destination: the Saturday booking is gone and she says the matter is settled. Routes I would accept: changing the date; cancelling and booking again; finding the telephone number, written down as a workaround.
- **The line I had been missing:** Giving up: two minutes of looking with nothing tried, or her saying she would sort it out later. Without that line I would let a task run until I could bear it no longer, which is a decision made by me, in the room.

**The wrong turn:** The wrong turn is writing success as the route you designed, because that is the part you are worried about and it is easy to tick. It quietly turns every other way of getting there into a failure.

**What it costs:** Accepting three routes means far fewer clean failures, so a route that is genuinely poor can still pass. You then have to write the workaround down beside the result, and the result reads as weaker than a tidy tick would have.

**Still unknown:** Still unknown: whether “the matter is settled” is something you can see or only something you are told. In a rehearsal on yourself you do not even get that much.

- Write the destination that counts as success for each task.
- List acceptable alternative routes, including workarounds you would note.
- Decide what counts as abandonment.

**You should end up with:** A written destination for each task, the alternative routes you would accept, and what counts as giving up.

Worksheet fields for this step:

- For each task: the destination that counts as success — Write it before anybody sits down. Afterwards it is a description of what happened.
- For each task: the other routes you would accept, including workarounds you would note
- What counts as the person giving up

<details>
<summary>Help with this step</summary>

- **Workaround:** A route that gets the person there by a way you did not design, such as telephoning. Worth accepting, and always written down as a workaround rather than a success.

Stuck starting? For each task ask what you would be happy to see, then what you would grudgingly accept, then what would make you stop the task.

Is it enough? Every task has a destination and at least one route you did not design.

</details>

#### 4. Order and prune

- Put discovery-sensitive tasks first.
- Note where an earlier task will teach a later one.
- Cut to five and record what you removed.

**You should end up with:** The five in a deliberate order, with a note wherever an earlier task teaches a later one, and what you cut.

Worksheet fields for this step:

- Your five in the order you will give them, with the reason for the first one — Whatever depends on discovering something goes first, before another task reveals it.
- Where an earlier task teaches the answer to a later one
- What you cut to get down to five

<details>
<summary>Help with this step</summary>

- **Contamination:** When one task shows the person something a later task was meant to test. The later answer then tells you about your own ordering.

Stuck starting? Read the tasks in order and mark the point at which each control first becomes visible.

Is it enough? Anything that depends on discovering something comes before the task that reveals it, and the cuts are written down.

</details>

#### 5. Rehearse

- Read the tasks aloud to check they sound natural.
- Time yourself completing all five as the expert.
- Save the tasks, the success definitions and the order.

**You should end up with:** The tasks read aloud, timed by you, and the repair the Check questions asked for.

Worksheet fields for this step:

- What sounded wrong when you read them aloud, and how long all five took you
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Rehearsal:** Running the tasks out loud with nobody else there. It finds the wording that cannot be said aloud, and it is never written up as research.
- **Repair:** The one change a Check question asks you to make. You make it in the step it belongs to, then write down here that you made it.

Stuck starting? Read each task out to the empty room. Anything you would not say to a person out loud is written wrong.

Is it enough? They sound like something one person would say to another, and you know how long all five take.

</details>

**Save and continue.** Saved for you: The tasks, the success definitions and the order save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. Print the five tasks and the success definitions on one sheet before your first session. What your creator sees: Your creator reads one rejected wording beside its replacement. That pair shows the discipline more clearly than five finished tasks do. Your next action: Open Your work and choose Ready for review. The next lesson recruits the people who will be given these tasks.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Underline every word that also appears on screen and rewrite that task around the person's circumstances.

</details>

<details>
<summary>Hint 2</summary>

For each task write what you would accept as done, including a route you did not design.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Tasks that do not tell people the answer.
Task: Write five test tasks as situations with a goal and a stopping condition, define success for each in advance, and remove every word that names a control.
Challenge one thing at a time, and start with the mistake this lesson is about: “Longer tests give more data.” They give more data of declining quality. A tired participant behaves differently, and the last two tasks in a long session tell you about fatigue as much as about your design.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the rewritten tasks and ask whether tasks describe situations and name no controls. Look at the success definitions and ask whether success is defined in advance with alternatives. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Message threads for recruitment, a printed consent introduction, the prototype on a phone and a paper note sheet. No scheduling, recording or research platform is required.

- Starting material: Your m05 screener and consent introduction.
- Create HaruCourse/Practice/m10-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Screen and recruit

**See it first.** Made-up example. Recruiting three people, getting two, and writing the third one down as a gap.

- **Who I asked first:** Three friends who were free on Thursday. It took ten minutes and I felt organised.
- **The question I had not asked:** What must each of them have done for their hour to be worth anything? None of the three had booked something with a fixed time in years.
- **What I did instead:** I wrote one line: has booked something with a fixed time and place in the last two months. Then I went back to the group where I found the Module 5 participants.
- **What actually happened:** Two people said yes. A third said yes and then stopped replying. I waited four days and stopped chasing her.
- **What I wrote down:** “Two participants, both from one group, both comfortable paying online. A third agreed on 12 March and did not reply after that.” That sentence goes into the report beside the findings.

**The wrong turn:** The wrong turn is taking whoever is free and then saying nothing about it. The sample is not the problem; the silence about it is, because every finding then reads as though it came from anybody at all.

**What it costs:** Screening loses you people, and two participants feels thin. Two who have actually done the thing tell you more than five who are imagining it.

**Still unknown:** Still unknown: what people outside that one group would have done. Nothing in a study this size can reach them, and the recruitment sentence is what keeps that visible.

- Reuse your m05 screener, adjusted for this study's experience requirement.
- Recruit at least three people and record their relevant experience.
- Record who you could not reach.

**You should end up with:** The one experience each person must have, who you recruited, and a dated record of who you could not reach.

Worksheet fields for this step:

- The one experience each person must have for their hour to be worth anything
- Each person you recruited, and the experience that qualifies them — Reuse your Module 5 screener, adjusted for this study. No names are needed here.
- Dated: who you approached and could not reach, and what you tried — Write the date, where you asked and what happened. If nobody agreed, this field plus your prepared plan is a complete answer for this lesson.

<details>
<summary>Help with this step</summary>

- **Screener:** The short set of questions you ask before inviting somebody, to find out whether they have the experience the study needs.
- **Convenience sample:** People you recruited because they were available. It is allowed, and it must be said out loud in the report, in the same sentence as the findings.

Stuck starting? Write the one experience first, in a single line, before you think about anybody you know.

Is it enough? Either three people are recorded with their qualifying experience, or the dated record says who you asked and what happened.

</details>

#### 2. Extend consent

**See it first.** Made-up example. Writing a consent introduction as one friendly sentence, then reading it aloud and finding three things I had not said.

- **What I wrote first:** “I will record this and it stays between us, is that all right?” Short, polite, and out of the way in ten seconds.
- **Reading it to the empty room:** I asked it the questions a person would ask back. Who hears it. What happens on my phone. When does it go away. My sentence answered none of the three.
- **The one I could not answer honestly:** I had been planning to send two minutes of the audio to the person reviewing my work. “Stays between us” was not true, and I had almost said it out loud.
- **What I wrote instead:** Separate sentences. Audio only, not your screen and not your face. Heard by me, and a short clip may go to the person who reviews my work. Nothing is installed on your phone and I see only what you show me on it. Deleted within two weeks, sooner if you ask. You may say no to the recording and still take part.
- **What that did to the session:** The opening went from ten seconds to about two minutes, so I moved it in front of the timer and stopped treating it as a formality to get past.

**The wrong turn:** The wrong turn is bundling it all into one agreeable sentence. A long introduction feels as though it will make the person nervous, and you want to reach the tasks, so you ask for agreement to a vague whole instead of to each named thing.

**What it costs:** Naming each thing costs you two minutes of a session you may only have an hour of, and some people will say no to the recording once they hear what it is. You are then working from notes on a session you would rather have been able to hear again.

**Still unknown:** Still unknown: whether saying all of it slowly makes people more careful in front of you than a quick sentence would have. A rehearsal on yourself cannot show you that.

- Add recording and device use to your consent introduction.
- State that nothing is installed and no personal data is viewed.
- State how and when anything captured will be deleted.

**You should end up with:** A consent introduction covering recording, their own device, what is not installed, and deletion.

Worksheet fields for this step:

- The sentences covering recording: what is recorded, who hears it, and that they may say no and still take part
- The sentences covering their own device: that nothing is installed, and what you will and will not see
- How and when anything you capture is deleted

<details>
<summary>Help with this step</summary>

- **Consent:** Agreement to the specific things you named. Agreement to a conversation is not agreement to a recording, and neither is agreement to using their phone.

Stuck starting? Take your Module 5 consent introduction and add two sentences: one about the recording, one about their device.

Is it enough? Somebody reading it aloud would know what is captured, what you will see, and that they can stop at any point.

</details>

#### 3. Choose how you will capture

- Decide between recording with sparse markers or full notes.
- Prepare the corresponding sheet or recorder.
- Test the setup on yourself once before the first session.

**You should end up with:** One capture method chosen, and what you missed when you tried it on yourself.

**Try it with help.** A made up situation. You are running the session on your own. The person has agreed to audio recording. You have five tasks, a fakes sheet to hand, and nobody else in the room.

Which way of capturing the session keeps the most of what you will need afterwards?

- **Record the audio and write sparse markers: the time, the task, and one word for what happened.** — Writing full notes while moderating means you stop watching. The markers exist only so you can find the right moments in the recording later.
- Write full notes and skip the recording, so nothing depends on the audio. — It is a real choice, and it costs you the moderating. Every minute your head is down is a minute you did not see a hesitation.
- Record and write nothing at all, then listen back to the whole thing. — Listening to three sessions end to end takes longer than the sessions did, and you still will not find the moment you half-remember.
- Ask the person to describe what happened at the end, and write that down. — A summary from memory tells you what they concluded, and what somebody concludes is the part that changes most between the moment and the end.

**Then:** Now run one task on yourself using the method you chose, and write down what you missed.

Worksheet fields for this step:

- What you will do during the session (Record the audio and write sparse markers / Write full notes and record nothing / Write from memory straight afterwards, if recording is refused)
- What you missed when you tried your chosen method on yourself

<details>
<summary>Help with this step</summary>

- **Capture:** Everything you keep from a session: the recording, the notes you write during it, and anything you write from memory straight afterwards.
- **Marker:** A two or three word note with the time beside it, written so you can find that moment in the recording later. It is not a note about what happened.
- **Moderating:** The job of running the session: watching, staying quiet, and asking only the few questions you decided on beforehand.

Stuck starting? Choose by asking what you would rather lose: the second half of a sentence, or the look on somebody’s face.

Is it enough? You have tried the method once and written down what it costs you.

</details>

#### 4. Prepare the session

- Load the prototype on the device you will use.
- Print the tasks, success definitions and fakes sheet.
- Write the short version covering the two most important tasks.

**You should end up with:** Everything loaded, printed and to hand, plus a short version covering the two most important tasks.

Worksheet fields for this step:

- What is loaded, printed and to hand before the person arrives — The prototype on the device you will use, the tasks, the success definitions, the fakes sheet, a charged phone.
- The short version: the two tasks you would keep if you had twenty minutes

<details>
<summary>Help with this step</summary>

- **Session pack:** Everything loaded, printed and within reach before the person arrives, so that nothing has to be found while they wait.
- **Short version:** The twenty-minute plan, naming the two tasks you would keep. It is decided at your desk rather than in the room with somebody watching.

Stuck starting? Lay out physically what you will need, then write the list from what is in front of you.

Is it enough? The short version names the two tasks and could be run in about twenty minutes.

</details>

#### 5. Rehearse and record gaps

- Run the whole session on yourself, timing it.
- Note anything you had to improvise and decide it now.
- If recruitment failed, record the gap and what you tried.

**You should end up with:** The session run on yourself and timed, what you had to improvise, and the repair the Check questions asked for.

Worksheet fields for this step:

- How long the whole session took when you ran it on yourself
- Anything you had to make up as you went, and what you have now decided instead
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Rehearsal:** Running the whole thing on yourself, out loud, from the consent introduction to the last task. It stays labelled a rehearsal and is never written up as research.
- **Improvising:** Anything you had to make up in the moment because it had not been decided. Each one you notice is a decision to take now, at your desk.
- **Repair:** The one change a Check question asks you to make. You make it in the step it belongs to, then write down here that you made it.

Stuck starting? Sit down and run the whole thing on yourself, out loud, from the consent introduction to the last task.

Is it enough? Nothing in the session is still being decided in the moment, and the rehearsal is recorded as a rehearsal rather than as a session.

</details>

**Save and continue.** Saved for you: The screening line, the consent sentences, the capture choice and the session plan save as you type, on this device first and then online. Kept outside the app: Print the consent introduction, the tasks and the fakes sheet before the first session. Keep anything you record off this app and separate from your notes. What your creator sees: Your creator reads the consent introduction and the dated record of who you could not reach. Preparation and an honest gap read better than three participants and no plan. Your next action: Open Your work and choose Ready for review. The next lesson runs the sessions themselves, and asks you to log every time you helped.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write the one experience each participant must have, then record which of yours has it.

</details>

<details>
<summary>Hint 2</summary>

Add two sentences: one about the recording, one about their device and what you will and will not see.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Recruit, consent and set up the session.
Task: Recruit at least three participants for a usability session, obtain consent covering recording and their own device, and prepare a session plan you can run alone.
Challenge one thing at a time, and start with the mistake this lesson is about: “Anyone can be a participant for a usability test.” Anyone can reveal something, but who you recruit decides what you can conclude. A convenience sample is legitimate and must be declared, in the report, in the same sentence as the findings.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the participant record and ask whether participants are screened for relevant experience. Look at the extended consent introduction and ask whether consent covers recording and device use. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Your prepared materials, a phone recorder if consented, and a note sheet. Nothing else; a moderator with a laptop between them and the participant sees less.

- Starting material: Your prepared session materials and three participants.
- Create HaruCourse/Practice/m10-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Rehearse the discipline

**See it first.** Made-up example. A session where I answered a participant’s question and deleted the strongest finding of the study.

- **The moment:** She stopped at the review screen, thumb hovering, and said “I suppose I press this?”.
- **What I said:** “That’s the payment step.” Helpful, quick, and over in a second. She pressed it and carried on.
- **Why it was wrong:** The answer I gave her was the answer I needed from her. I had just told her what the screen meant, so I could no longer find out what she thought it meant.
- **The same moment, next session:** I said “what would you expect that to do?” and then said nothing. The silence lasted about six seconds and felt much longer.
- **What came back:** “Take my money, I think — but I don’t know if the class is definitely mine yet.” That sentence became the strongest finding of the study.
- **Where I did step in:** Later she became visibly uncomfortable hunting for the cancellation route. After about ninety seconds I helped, wrote down the time and my words, and marked everything after it as assisted.

**The wrong turn:** The wrong turn is answering. It feels like courtesy and it is the one thing only you can do wrong, because the participant cannot un-hear it.

**What it costs:** Waiting is uncomfortable for both of you, and some participants will feel briefly stupid. You reduce that with your opening words, not by rescuing them mid-task.

**Still unknown:** Still unknown: whether ninety seconds was the right point to step in. There is no rule for it, so the time goes in the log and a reader can disagree with me.

- Read the assigned moderation guidance.
- Write your three standard responses to questions, and practise them aloud.

**You should end up with:** Three sentences you can say without thinking, and the moment you know you will want to step in.

**Try it with help.** Six moments from three sessions, all made up for practice. For each one, decide whether the moderator should wait, ask a neutral question, or has already rescued the participant.

- The participant goes quiet, thumb hovering over the screen. Twenty seconds pass. The moderator says nothing.
  - **wait** — Silence is the instrument. Twenty seconds of somebody deciding is data you cannot get any other way.
  - neutral question — A question here would interrupt her while she is still working it out. Ask afterwards what she was weighing up.
  - rescued — Nothing was supplied. The moderator gave her nothing at all, which is the point.
- She says “I suppose I press this?”. The moderator says “what would you expect that to do?” and waits.
  - wait — She has asked a direct question, so pure silence would feel like being ignored. The neutral question keeps the thinking with her and is still an answer of sorts.
  - **neutral question** — It hands the question straight back without hinting. Her answer is the finding the moment exists to produce.
  - rescued — No information about the screen was given. She still has to say what she thinks it does.
- She asks where to cancel a booking. The moderator says “it’s under the little menu at the top”.
  - wait — Something was said, and what was said was the answer. Waiting would have been the alternative here.
  - neutral question — A neutral question would be “where would you look for that?”. This one named the control instead.
  - **rescued** — The location of the cancel route is exactly what the task was testing. Log the words and the time, and mark what follows as assisted.
- She scrolls up and down the same page three times and sighs. The moderator counts to ten and stays quiet.
  - **wait** — A sigh is not distress. Repeated scanning is how people search, and the counting keeps the moderator from filling the gap.
  - neutral question — Asking now interrupts the search. If it goes on and she looks stuck, “what are you looking for at the moment?” is the next move.
  - rescued — Nothing was offered. The discomfort is the moderator’s, not hers.
- She pauses before the pay button. The moderator asks “what do you think will happen next?”.
  - wait — Waiting is fine too, and this is the one place worth speaking. Expectation before a screen changes cannot be recovered afterwards.
  - **neutral question** — It captures the prediction while she still has it. Once the screen changes, she will describe what she saw instead.
  - rescued — She is told nothing about what the button does. The question is about her expectation, not the design.
- She asks “am I doing this right?”. The moderator says “you’re doing fine, that’s exactly it”.
  - wait — A direct question to you needs some reply. The problem is the content of this one, not that it was answered at all.
  - neutral question — “There is no wrong way to do this, what were you about to try?” would be the neutral version. This one confirmed her route.
  - **rescued** — She was told her path was the intended one. Everything after it is her following your approval rather than the design.

**Then:** Read your three standard responses again. Rewrite any of them that supplies information rather than asking for it.

**What to watch for:** The test is simple: does what you are about to say contain any part of the answer? If it does, wait or ask instead.

Worksheet fields for this step:

- The three things you will say when a participant asks you a question — Write them as sentences you can say without thinking. You will need the first one within two minutes.
- The moment you already know you will want to rescue — Most people have one. Naming it now makes it easier to sit through.

<details>
<summary>Help with this step</summary>

- **Neutral question:** A question that hands the thinking back to the participant without hinting at an answer.
- **Rescuing:** Any moment where you supply the answer the session existed to collect. It feels like kindness and it deletes the finding.
- **Assisted:** The part of a session that follows your help. It still counts as a record, and it no longer counts as the person managing alone.

Stuck starting? Write the sentence you would say if a participant asked you what a button does, then take the answer out of it.

Is it enough? None of your three responses tells the participant anything about the design.

</details>

#### 2. Run the sessions

- Read the consent introduction and confirm agreement before starting.
- Give each task, then stop speaking.
- Ask expectation before a change and confirmation after.

**You should end up with:** Sessions run, or an honest smaller route recorded with a date, plus expectations captured before each screen change.

Worksheet fields for this step:

- Which route you are taking (Three sessions with participants / One or two sessions, plus a rehearsal on yourself / A rehearsal only, because nobody was available)
- Dated note: who you asked, who could not take part, and what you had ready for them — Put today’s date on it. A rehearsal stays labelled a rehearsal and is never written up as research.
- For each screen change: what the person said would happen, and what did happen

<details>
<summary>Help with this step</summary>

- **Expectation:** What a person says will happen before it happens. Once the screen changes she will describe what she saw instead, so it cannot be collected afterwards.
- **Rehearsal:** A run of the whole session on yourself. It shows your materials and tasks work, and it shows nothing at all about other people.
- **Dated note:** A short written record of who you asked, who could not take part, and what you had ready for them, with the day you wrote it.

Stuck starting? Read the consent introduction aloud and get agreement before anything else. Then give the first task and stop speaking.

Is it enough? Every significant screen change has a predicted outcome and an actual one written beside it.

</details>

#### 3. Log interventions

- Record every time you spoke beyond the task or a neutral probe.
- Note what you said and what prompted it.
- Mark where a session became assisted.

**You should end up with:** Every time you spoke beyond the task, with the time and your words, and the point each session became assisted.

Worksheet fields for this step:

- Every time you spoke beyond the task or one of your three responses, with the time and your exact words
- Where each session became assisted, and what was happening just before

<details>
<summary>Help with this step</summary>

- **Intervention:** Anything you said beyond the task itself or one of your three prepared responses.
- **Intervention log:** The running list of those moments, each with the time it happened and your words as you actually said them.
- **Assisted marker:** The point in a record where your help begins. Everything after it is the person following you rather than following the design.

Stuck starting? Go through the recording, or reconstruct honestly, and write down anything you said that was not the task or one of your three responses.

Is it enough? The log includes at least one entry you are not proud of.

</details>

#### 4. Write up immediately

**See it first.** Made-up example. A session record written three days late, in which my conclusions had quietly become my observations.

- **What I wrote:** “She was confused by the review screen and gave up on cancelling.” It read like a record of what had happened. I filed it and moved on.
- **Pulling one sentence apart:** Confused is not a thing I watched. What I watched was her reading one line twice, taking her hand away from the screen, and coming back to it.
- **How little I actually had:** In the whole record, one sentence was in her words. Everything else was my paraphrase, tidied up three days after the evening it came from.
- **Why three days mattered:** By then I could no longer tell my memory of the room from my explanation of it. Written within the hour, the said part is long and the inferred part is short.
- **The same moment, in three parts:** Said: “I suppose I press this?”. Observed: she read the line twice, hand away for about four seconds, then returned. Inferred: she was unsure whether the place was already hers.
- **The part I could not place:** Those four seconds came from memory, not from a recording. They go in marked as reconstructed, so a reader can see which numbers were counted and which were remembered.

**The wrong turn:** The wrong turn is writing “she was confused”. It feels like an observation because you were sure of it at the time, and it is a conclusion with the evidence deleted, so nobody can check it and nobody can disagree with it.

**What it costs:** Three parts make a longer, duller record, and the inferred part often comes out thin and unsatisfying. You give up the confident summary a reader would rather have, and that summary was the part with nothing underneath it.

**Still unknown:** Still unknown: whether the pause was doubt about the screen or doubt about spending the money. The record cannot settle it, and watching her again would not have settled it either.

- Within an hour, complete each session record.
- Separate what was said, what you observed and what you inferred.
- Mark anything reconstructed from memory.

**You should end up with:** One record per session, written within the hour, with said, observed and inferred kept apart.

Worksheet fields for this step, revealed a few at a time in the app:

- Record 1 · what was said, what you observed, what you inferred, and anything you reconstructed from memory
- Record 2 · what was said, what you observed, what you inferred, and anything you reconstructed from memory
- Record 3 · what was said, what you observed, what you inferred, and anything you reconstructed from memory

<details>
<summary>Help with this step</summary>

- **Said:** The words that came out of the person’s mouth, written as they were spoken rather than summarised.
- **Observed:** What you watched happen, described so that somebody who was not there could picture it: a pause, a scroll, a hand moving away.
- **Inferred:** Your explanation of why. It is worth writing and it is kept apart, because it is the part that could be wrong.
- **Reconstructed:** Anything you put in from memory rather than from a recording or a note made at the time. Marking it lets a reader weigh it accordingly.

Stuck starting? Write the words you actually heard first. Everything else is either what you watched or what you concluded.

Is it enough? Anything you cannot place under said or observed is marked as inferred or reconstructed.

</details>

#### 5. Review your own moderation

- Read your intervention log and mark the ones that were unnecessary.
- Write one change for the next session.
- Save the records and the log together.

**You should end up with:** The interventions you now think were unnecessary, one change for next time, and the repair the Check questions asked for.

Worksheet fields for this step:

- The interventions you now think were unnecessary
- One thing you will do differently in the next session
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Unnecessary intervention:** One where waiting would have given you the same thing or something better. You can usually only see these afterwards.
- **Check questions:** The questions at the end of the lesson. Each one names a specific change to make in an earlier step.
- **Repair:** The change a Check question asks for, made where the work actually is, and then noted here so you can see what shifted.

Stuck starting? Read the log as though somebody else had moderated. Mark every entry where waiting would have worked.

Is it enough? Your one change is a specific sentence or pause, not a resolution to be better.

</details>

**Save and continue.** Saved for you: Your responses, logs and session records save as you type, on this device first and then online. Kept outside the app: Keep the recording, if you made one, off this app and somewhere private. Only your written record belongs here. What your creator sees: Your creator reads the intervention log first. Admitting where you spoke is what shows you understand your own presence is part of the data. Your next action: Open Your work and choose Ready for review. The next lesson turns these records into a ranked list of problems.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

In the next session, ask “what do you think will happen?” before every screen change and write the answer down.

</details>

<details>
<summary>Hint 2</summary>

Listen back to the recording, or reconstruct honestly, and list every time you spoke beyond the task.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Moderating without rescuing.
Task: Run three usability sessions in which you ask what people expect, wait through hesitation, and record every time you intervened and why.
Challenge one thing at a time, and start with the mistake this lesson is about: “A good session is one where the participant succeeds.” A session where everything works and nobody hesitates has told you little. Failures, hesitations and wrong expectations are the output; smoothness is pleasant and uninformative.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the expectation records and ask whether expectation is asked before changes and confirmed after. Look at the intervention log and ask whether interventions are logged with wording and timing. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Cards or a table: one observation per line, grouped by cause. Photograph the grouping. No analysis software is needed at this size and none would help.

- Starting material: Your session records and pre-written success definitions.
- Create HaruCourse/Practice/m10-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Extract observations

- Write each observation on its own line with a participant label.
- Read the assigned analysis guidance before grouping.

**You should end up with:** Every observation on its own line with a person’s label, and an honest statement of what the records are.

Worksheet fields for this step:

- What your analysis rests on (Three session records with participants / One or two session records, plus a rehearsal record / Rehearsal records only, because nobody was available)
- Dated note: who you could not reach, and what you had prepared for them — A rehearsal record can be analysed for practice. It is labelled a rehearsal wherever it appears, and it is never reported as research.
- Every observation on its own line, each with the label of the person it came from — One thing per line. A line with two things in it will not group cleanly later.

<details>
<summary>Help with this step</summary>

- **Observation:** One thing that happened, tied to one person. Not yet a problem and not yet explained.
- **Problem:** A group of observations that you believe share a cause. Several moments can be one problem.
- **Assisted completion:** A task the person finished after you helped. It is not a success and it is counted separately.

Stuck starting? Go through each record and copy out anything that happened, one line at a time, without deciding yet what it means.

Is it enough? Every line carries a person’s label and describes one thing.

</details>

#### 2. Group by cause

**See it first.** Made-up example. Sorting nine observations by the screen they happened on, and finishing with three tidy groups and no causes.

- **My first three boxes:** I put every line into “Search list”, “Class page” or “Emails”. It took four minutes and it looked finished.
- **What was inside one box:** Under “Search list” sat one person scrolling back and forth between two similar classes, and another who thought “Saved” meant she had booked. Two different reasons to stop, in one box.
- **What the boxes had split:** The same trouble with the word “Saved” turned up again in the reminder email, so it sat in a second box as well. One cause in two places, counted properly in neither.
- **The sentence test:** I tried to finish “these happened because …” for each box. For “Search list” I could not get past the first word. For “people read Saved as booked” it came out in one go.
- **The groups I ended with:** “People read Saved as booked” held three lines from two people across two places. “People cannot tell two similar classes apart” held four lines from two people.
- **The one I marked a guess:** A third group, “the class times are hard to scan”, held three lines. I could finish the sentence for one of them and was inventing it for the other two, so the group carries a guess mark.

**The wrong turn:** The wrong turn is grouping by screen. Every line already names a screen, so the boxes fill themselves in minutes and look orderly. None of them is a problem, because a place is not a reason.

**What it costs:** Groups named by cause cut across screens, so no group points at one thing to change. Whoever makes the change will ask you which screen you mean, and you will have to answer with a list rather than a name.

**Still unknown:** Still unknown: whether the two main groups share one cause underneath, something about words that describe a state rather than an action. Nine lines from three people cannot separate that.

- Put observations that share a likely cause together.
- Name each group by the cause, not the screen.
- Mark groups where the shared cause is a guess.

**You should end up with:** Groups named by the cause you believe is underneath them, with the speculative ones marked as guesses.

Worksheet fields for this step:

- Your groups, each named by the likely cause rather than the screen it happened on
- The groups where the shared cause is your guess

<details>
<summary>Help with this step</summary>

- **Cause:** The reason underneath several observations. You have found one when you can finish the sentence “these happened because …” without inventing anything.
- **Group:** A set of observations you believe share one cause, named after that cause rather than after the screen they happened on.
- **Speculative group:** One where the shared cause is still your guess. It stays in the analysis with the guess marked, rather than being quietly presented as settled.

Stuck starting? For each group finish the sentence “these happened because …”. If you cannot finish it, mark the group a guess or split it.

Is it enough? No group is named after a screen. At least one group is marked as a guess.

</details>

#### 3. Count and cost

**See it first.** Made-up example. Turning eleven observations into six problems, and getting the first ranking wrong.

- **What I had:** Eleven lines across three sessions. Several were the same difficulty seen twice, and I had been treating every line as its own problem.
- **My first count:** I wrote “six people hesitated at the review screen”. There were three people in the whole study. I had counted incidents and quietly turned them into people.
- **What I wrote instead:** Three of three hesitated at one word on the review screen. Two of three could not tell whether their place was held before paying.
- **The cost line:** The hesitation cost seconds and some doubt. Not knowing whether the place was held cost one person a second payment she said she would have made.
- **What that did to the order:** The hesitation looked far worse in the room, because I watched it three times. The other one cost money, so it went first and the hesitation went second.
- **What I left alone:** One person kept returning to the shortlist and I have no idea why. It went to open questions rather than into a group I would have invented for it.

**The wrong turn:** The wrong turn is counting incidents. Eleven lines from three people is still three people, and “six hesitations” reads as six people to anyone who was not in the room.

**What it costs:** Ranking by cost puts a quiet problem above a loud one, and the loud one is the one you remember. You will have to argue for the order, which is why the reason sits beside it.

**Still unknown:** Still unknown: whether the top two problems share one cause. They might both come from the same missing message, and three sessions cannot tell me.

- For each problem write how many of how many participants met it.
- Write what it cost them: time, confusion, money, abandonment.
- Mark assisted completions separately from unassisted ones.

**You should end up with:** One row per problem: how many of how many people met it, what it cost them, the evidence, and any assisted completions.

Worksheet fields for this step, revealed a few at a time in the app:

- Problem 1 · how many of how many people met it, what it cost them, the evidence, and whether any completion was assisted
- Problem 2 · how many of how many people met it, what it cost them, the evidence, and whether any completion was assisted
- Problem 3 · how many of how many people met it, what it cost them, the evidence, and whether any completion was assisted
- Problem 4 · how many of how many people met it, what it cost them, the evidence, and whether any completion was assisted
- Problem 5 · how many of how many people met it, what it cost them, the evidence, and whether any completion was assisted

<details>
<summary>Help with this step</summary>

- **Count:** How many of the people you sat with met a problem, out of how many there were. Written as “two of three”, never as a share of a bigger group.
- **Cost:** What the problem actually took from the person: money, work they lost, a task they gave up on, or time and doubt.
- **Evidence:** The particular line in a record you could point at if somebody asked how you know. A problem without one is a belief.

Stuck starting? Take one group and write the count as “two of three”, then write the sentence describing what it cost that person.

Is it enough? Every problem has a count of people, a cost, and a line of evidence you could point at.

</details>

#### 4. Rank by harm

- Order the problems by cost to the person.
- Write why the top problem outranks the second.
- Check no problem is ranked by how easy it is to fix.

**You should end up with:** The problems in order of cost to the person, with the reason the top one outranks the second.

**Try it with help.** Two supplied problems from the same made-up study. A: all three participants hesitated at the word “Reserve” on the review screen, each read it twice, and one went back a screen before carrying on. Cost: a few seconds and some doubt. B: two of three could not tell whether their place was held before paying, and one said she would have paid a second time.

Which one belongs at the top of the ranking?

- **B, because the cost is money and a payment made twice.** — Losing money is the worst thing that happened to anyone in this study. Ranking is by what it cost the person, and nothing in A costs more than seconds.
- A, because three of three met it and only two of three met B. — That is ranking by frequency. A common small cost stays below a rare large one, which is why the count and the cost are written in separate parts of the row.
- A, because the hesitation was visible in every session and B was only what someone said. — How visible a difficulty was is about your seat in the room. A sentence saying “I would have paid again” is evidence of a real cost, even though it was quiet.
- They rank equally, because both happen on the review screen. — The screen they share is a location, not a cause and not a cost. Two problems on one screen can still sit at opposite ends of the ranking.

**Then:** Read your own order again. Move anything ranked because it looked bad or because it would be quick to fix.

Worksheet fields for this step:

- Your problems in order, worst cost to the person first
- Why the top problem outranks the second — Say what each one cost the person. If your reason mentions how easy it is to fix, it is the wrong reason.

<details>
<summary>Help with this step</summary>

- **Ranking:** Your problems put into a single order, worst cost to the person first, with the reason for the top place written beside it.
- **Frequency:** How many people met a problem. It is worth recording and it is not what the order is built on, because a common small cost still sits below a rare large one.

Stuck starting? Sort by what each problem cost the person: money first, then lost work, then abandonment, then time and doubt.

Is it enough? Your reason for the top place names a cost, not a frequency and not a fix.

</details>

#### 5. Keep the unexplained

- Move observations you cannot explain to an open-questions list.
- Write what would settle each.
- Save the ranked list and the open questions.

**You should end up with:** The observations you cannot explain, moved to open questions with what would settle each, and the repair the Check questions asked for.

Worksheet fields for this step:

- Observations you cannot explain, moved here rather than guessed at
- For each: what would settle it
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Open question:** An observation you cannot explain, kept as a question rather than pushed into the nearest group. It is usually the first question of your next study.
- **Unexplained observation:** One where you cannot name a cause. Leaving it unexplained is honest; inventing a cause for it makes a finding nobody can trace.
- **Repair:** The change a Check question asks for, made in the earlier step it names, and then recorded here so the change is visible.

Stuck starting? Look for the lines you skipped over while grouping. Those are usually the ones you could not explain.

Is it enough? Nothing has been forced into a group to avoid leaving it unexplained.

</details>

**Save and continue.** Saved for you: Your observations, groups, problem rows and ranking save as you type, on this device first and then online. Kept outside the app: If you laid the lines out as cards on a table, photograph the grouping and keep the photograph with your records. What your creator sees: Your creator reads the counts and the ranking reason. Counts of people with assisted completions marked are what make the list credible. Your next action: Open Your work and choose Ready for review. The next lesson decides what this list is allowed to claim.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For each group write the sentence “these happened because …”. If you cannot, mark it a guess or split it.

</details>

<details>
<summary>Hint 2</summary>

Recount each problem by participant and rewrite as “two of three”.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: From sessions to ranked problems.
Task: Turn your session records into a ranked problem list where each problem states how many participants met it, what it cost them, and the evidence behind it.
Challenge one thing at a time, and start with the mistake this lesson is about: “Three participants found three different problems, so the design has three problems.” It may have one problem that presents differently, or five of which you saw three. Both readings matter, and the analysis should state which you believe and why.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the grouped list and ask whether observations are grouped by cause with guesses marked. Look at the recounted list and ask whether counts are of participants, not incidents. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written work plus a spreadsheet or calculator for the interval. The interval reading gives no formulas, so use a published one, show your inputs and state which you used.

- Starting material: Your ranked problem list.
- Create HaruCourse/Practice/m10-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read both quantitative pages

- Read the assigned sample-size and interval readings.
- Write what each explicitly excludes.

**You should end up with:** What each reading says it does not cover, and an honest statement of what your own claims rest on.

Worksheet fields for this step:

- For each reading: what it says it does not cover — Both readings are about measuring studies. Write the sentence in each that says so.
- What your claims rest on (Sessions with three or more participants / One or two sessions, plus a rehearsal on yourself / A rehearsal only, because nobody was available)
- Dated note: who you could not reach, and what you had prepared for them — If your basis is a rehearsal, every claim below says so. A rehearsal shows the materials work and shows nothing about other people.

<details>
<summary>Help with this step</summary>

- **Count:** How many of the people you actually sat with did something. Three of five. It can be checked against your records.
- **Rate:** The same thing turned into a share of a larger group you never met. Sixty per cent. It cannot be checked against anything.
- **Interval:** The range a rate could plausibly cover, given how few people it came from. At small numbers it is very wide.

Stuck starting? Look for the paragraph in each reading that says which kind of study it is about. Copy the sentence out.

Is it enough? You can say in one line why guidance about measuring studies does not license claims from three sessions.

</details>

#### 2. Write the claims

**See it first.** Made-up example. Writing “60 per cent of users were unsure”, then working out what that number was allowed to mean.

- **What I wrote first:** “60 per cent of users were unsure whether their place was held.” It looked like a result. It looked like something somebody could act on.
- **What was underneath it:** Three of the five people I sat with. Nothing else at all. The percentage was those same three people wearing a much bigger coat.
- **The arithmetic, part one:** The published method I used adds two to the top and four to the bottom. Three of five became five of nine, which is 0.56.
- **The arithmetic, part two:** 0.56 times 0.44 is 0.25. Divided by nine that is 0.027. The square root of 0.027 is 0.17. Multiplied by 1.96, which I rounded to 2, that is 0.33.
- **What the range came to:** 0.56 minus 0.33 is 0.23, and 0.56 plus 0.33 is 0.89. Somewhere between about a quarter of people and about nine in ten. That is not a finding, it is the whole middle of the range.
- **What I wrote instead:** “Three of the five people I sat with could not tell whether their place was held before paying.” Smaller, plainer, and true.

**The wrong turn:** The wrong turn is the percentage itself. It is not a rounding choice or a matter of style: it converts five people into a population you never met.

**What it costs:** A count sounds smaller, and somebody will ask “is that all?”. It is all, and unlike the percentage it survives being checked against your records.

**Still unknown:** Still unknown: how common this is among people unlike these five. Nothing in the study reaches them, and no arithmetic can fetch them back.

- Write each finding as a sentence with its participant count.
- Remove any sentence containing a percentage or the word most.

**You should end up with:** Each finding written as a sentence with a count of people, and no percentage or generalising word anywhere in it.

Worksheet fields for this step, revealed a few at a time in the app:

- Claim 1 · the finding, written with how many of how many people met it
- Claim 2 · the finding, written with how many of how many people met it
- Claim 3 · the finding, written with how many of how many people met it
- Claim 4 · the finding, written with how many of how many people met it

<details>
<summary>Help with this step</summary>

- **Claim:** A sentence your study can actually support, written so that somebody could hold it against your records and see whether it stands.
- **Generalising word:** A word such as most, users, or the phrase people tend to. It widens a finding to people you never met, without any arithmetic that could be checked.

Stuck starting? Take each problem from your ranked list and write it as “two of three people …” with what they did.

Is it enough? No claim contains a per cent sign, the word most, or the phrase people tend to.

</details>

#### 3. Write the cannot-claims

- List the sentences you would like to write and cannot.
- Include prevalence, performance, accessibility and other populations.
- Reuse your prototype's untestable list here.

**You should end up with:** The sentences you wish you could write, copied out in full, each with the reason this study does not license it.

**Try it with help.** Four supplied sentences about the same made-up study. Three of the five people who took part could not tell whether their place was held before paying.

Which sentence can the study support?

- **Three of the five people I sat with could not tell whether their place was held before paying.** — It says what happened, to whom, and how many of them. Anyone can hold it against your records and see whether it stands.
- Sixty per cent of users could not tell whether their place was held. — The percentage turns five people into everyone, and it hides the five, so the reader cannot judge how much weight to give it.
- Most people are unsure whether their place is held before paying. — Most is a percentage with the arithmetic left out. It makes the same claim about a population and gives the reader no numbers to argue with.
- Around sixty per cent, though the sample was small, could not tell whether their place was held. — The hedge sits beside the number rather than replacing it, and the number is what a reader carries away. If it cannot stand alone, it does not go in.

**Then:** Read your own claims again and rewrite any sentence carrying a rate as a count of the people you sat with.

Worksheet fields for this step:

- The sentences you would like to write, copied out in full — Write them as you would actually write them, not as summaries. The temptation lives in the wording.
- Beside each: why this study does not license it — Cover how common it is, speed, assistive technology, and people unlike your participants.

<details>
<summary>Help with this step</summary>

- **Cannot-claim:** A sentence you would like to write, copied out in full and kept beside the reason your study does not support it.
- **Licensed:** A claim is licensed when the evidence you actually gathered reaches it. Anything beyond that reach is unlicensed, however true it may turn out to be.
- **Assistive technology:** Software or hardware somebody uses to operate a screen, such as a screen reader or a switch. If nobody in your sessions used any, your claims say nothing about it.

Stuck starting? Write the strongest sentences you would like to be able to write. Then work out, one at a time, which are licensed.

Is it enough? The list names how common it is, speed, assistive technology and unlike people, and copies out at least one sentence you genuinely wanted.

</details>

#### 4. Work one interval

- Take a rate you were tempted to report and compute its interval.
- Show the inputs and the method you used.
- Write one sentence on what the width tells you.

**You should end up with:** One rate worked through to a range, with your inputs, the published method you used, and a sentence on the width.

Worksheet fields for this step:

- The rate you were tempted to report, the numbers you put in, and the published method you used
- The range you got, written out
- One sentence on what that width tells you

<details>
<summary>Help with this step</summary>

- **Published method:** An arithmetic recipe somebody worked out and wrote down, which you follow exactly and name, so a reader can look it up and repeat your sum.
- **Inputs:** The plain numbers you fed into the sum: how many people did the thing, and how many people there were altogether.
- **Width:** The distance between the two ends of your range. The wider it is, the less the number in the middle is worth saying out loud.

Stuck starting? Take the rate you most wanted to report. Follow the same arithmetic as the demonstration, with your own numbers.

Is it enough? Somebody else could repeat your sum from what you wrote down.

</details>

#### 5. Label your judgements

**See it first.** Made-up example. Putting “Severity: high” beside three problems, then being unable to say where the word had come from.

- **The column I added:** Beside each problem I wrote High, Medium or Low. Set out in a column, in a table, it looked like something that had been measured.
- **Where the words came from:** From me, on a Tuesday evening, out of what I remembered feeling while I watched. No instrument, no scale, nobody else’s reading to compare with.
- **The question that broke it:** Somebody asked what made one problem High and another Medium. Every answer I could give was a description of my own memory of the room.
- **The rescue I tried and dropped:** I began justifying the labels with participant counts. That was worse. It dressed a judgement as arithmetic, and it ordered the list by how many people met a problem rather than by what it cost them.
- **The sentence I wrote instead:** “I ranked these problems myself, from what each one cost the person in the sessions I ran. Nothing in this order was measured.” It sits directly above the list.
- **What would make it measured:** The same tasks, a number of people fixed in advance, and completion and time recorded to a rule decided before anybody sat down. I wrote that down too, so the gap is visible rather than implied.

**The wrong turn:** The wrong turn is borrowing the vocabulary of a scale. High, Medium and Low read as figures taken off an instrument, and they are the same opinion in a uniform.

**What it costs:** Naming the order as your own judgement invites a reader to argue with the whole list, and somebody will. You keep every observation underneath it, and you give up the authority those three words were lending you.

**Still unknown:** Still unknown: whether anybody else would put the problems in this order. Nobody else watched the sessions, so there is nothing to hold my order against.

- State that the severity ranking is your judgement from observation.
- Name what would make it more than a judgement.
- Save the claims, cannot-claims and interval work.

**You should end up with:** A sentence naming the ranking as your judgement, what would make it measured, and the repair the Check questions asked for.

Worksheet fields for this step:

- The sentence saying who ranked the problems and on what basis
- What would have to happen for the ranking to be measured rather than judged
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Judgement:** An order or a label that came out of you rather than out of a procedure. Saying so lets a reader disagree with it without doubting your observations.
- **Severity:** A word for how bad a problem is. It sounds like a reading and it is somebody’s opinion, whatever scale is used to write it down.
- **Measured:** Counted by a rule you decided before the sessions began, so it would have come out the same whoever ran them.

Stuck starting? Write who did the ranking and on what basis, in one sentence, and put it above the ranked list.

Is it enough? Nothing in the report implies the ordering was measured.

</details>

**Save and continue.** Saved for you: Your claims, cannot-claims and interval work save as you type, on this device first and then online. Kept outside the app: If you used a spreadsheet for the arithmetic, keep it. The inputs matter more than the answer. What your creator sees: Your creator reads the cannot-claim list first. It is the page that shows you know what your own study is worth. Your next action: Open Your work and choose Ready for review. The next lesson repairs the top problem and tests whether the repair did anything.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Search your text for the per cent sign, “most”, “users tend to” and rewrite each as a count.

</details>

<details>
<summary>Hint 2</summary>

Write the strongest sentences you wish you could write, then mark which are licensed.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: What a small test can and cannot claim.
Task: Write the claims your study supports and the claims it does not, including a worked interval for one rate you might have been tempted to report.
Challenge one thing at a time, and start with the mistake this lesson is about: “Five users find 85 per cent of problems.” That figure comes from specific studies under specific assumptions, and it is routinely quoted as though it applied to any test of anything. Your honest claim is what you saw, with the participant count beside it.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the claims list and ask whether claims carry participant counts and no percentages. Look at the cannot-claim list and ask whether the cannot-claim list names specific tempting sentences. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Edit the prototype file you already have and re-run the same tasks. Keep the previous version so the before-and-after pair survives.

- Starting material: Your ranked problems and a prototype you can change.
- Create HaruCourse/Practice/m10-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Choose and predict

**See it first.** Made-up example. Writing the prediction after the re-test, and finding out it was worth nothing.

- **The repair:** The top problem was not knowing whether a place was held. One change: a line on the review screen reading “Your place is held for 10 minutes”, with the time remaining.
- **What I did first:** I re-tested with two new people, then wrote down what I had expected. It took two minutes and felt like the same exercise.
- **Why it was not the same:** What I wrote matched what happened. Of course it did. I had just watched it happen, and there was no version of that evening where my note came out wrong.
- **The second time:** Before the next re-test I wrote it down: neither new person asks whether the place is secured, and neither hesitates before paying. Then I wrote what would count as failing.
- **What happened:** One did not ask and paid straight away. The other asked anyway, and said the new line looked like an advertisement so she had skimmed past it. Half the prediction held.
- **What I reported:** A partial result, plus a new problem about how the line looks rather than what it says. The repair was not called validated, because it had not been.

**The wrong turn:** The wrong turn is writing the prediction afterwards. It always fits, because you write it around what you saw, so it can never fail and never teaches you anything.

**What it costs:** A prediction written first can fail where somebody can see it, and you will want to soften the wording. That risk is the only thing that makes the re-test worth running.

**Still unknown:** Still unknown: whether two new people can separate a real improvement from two different personalities. They cannot, and the report says so.

- Take the top-ranked problem and decide the single change.
- Write what should be observable if the repair works.
- Write what would count as the repair failing.

**You should end up with:** The top problem, the single change, what should be observable if it works, and what would count as failing.

Worksheet fields for this step:

- The top-ranked problem you are repairing
- The one change you are making, in a sentence — One change. If your sentence contains the word and, you are probably making two.
- What should be observable if the repair works
- What would count as the repair failing — Write this now, while you still do not know. It is the half people leave out.

<details>
<summary>Help with this step</summary>

- **Prediction:** A statement of what you expect to see, written before you see anything. Written afterwards it cannot be wrong, so it tells you nothing.
- **Partial result:** Part of the prediction held and part did not. It is a real outcome, not a halfway point on the way to success.

Stuck starting? Open your ranked list, take the top row, and write the smallest change that could address it.

Is it enough? Both halves are written: what success would look like and what failure would look like.

</details>

#### 2. Make one change

- Apply the change to a copy of the prototype.
- Keep the previous version intact.
- Change nothing else, however tempting.

**You should end up with:** The old version kept intact, the new version differing in one respect, and a list of what you did not change.

Worksheet fields for this step:

- Where the old version is, where the new one is, and the single difference between them
- Everything else you were tempted to change and did not

<details>
<summary>Help with this step</summary>

- **Single change:** A change a reader could name in one sentence with no and in it. If your sentence needs an and, you are making two.
- **Version:** One saved state of the prototype. The old one is kept whole so that the two can be set side by side afterwards.
- **Tempted list:** Everything else you wanted to change and did not, written down. It is where the next round starts, and it stops the improvements leaking into this one.

Stuck starting? Copy the prototype before you touch it. Paper, printed screens or files all work, as long as both versions still exist.

Is it enough? You could show somebody the two versions and they could name the single difference.

</details>

#### 3. Re-test

- Run the affected tasks with at least two new participants.
- Use the same wording and the same moderation discipline.
- Record expectation, outcome and hesitation as before.

**You should end up with:** The re-test run with people who have not seen the prototype, or an honest smaller route recorded with a date.

Worksheet fields for this step:

- Which route you are taking (Two or more people who have not seen the prototype / One new person, plus a rehearsal on yourself / A rehearsal only, because nobody new was available)
- Dated note: who you asked, who could not take part, and what you had ready for them — A rehearsal on yourself cannot test the repair, because you already know the answer. It is still labelled a rehearsal and it never becomes a result.
- For each re-test: expectation before each change, what happened, and every hesitation

<details>
<summary>Help with this step</summary>

- **Re-test:** Running the same tasks, in the same words, on the changed version. Anything else you alter about the session makes the two rounds impossible to compare.
- **Fresh participant:** Somebody who has seen neither version. A person who already met the problem cannot show you whether it has gone.
- **Rehearsal:** A run on yourself. It shows the change works mechanically, and because you already know the answer it can never become a result.

Stuck starting? Use the same task wording and the same moderation discipline as before, or the two rounds are not comparable.

Is it enough? Each record carries the expectation before each change and every hesitation, as the first round did.

</details>

#### 4. Compare with the prediction

- Check the result against what you wrote beforehand.
- Note anything that changed which you had not predicted.
- Decide whether the repair is confirmed, partial or failed.

**You should end up with:** Your prediction set beside what happened, anything you had not predicted, and the outcome named.

**Try it with help.** A supplied made-up situation. The repair was made and re-tested with two new people, and both finished the task without asking about the held place. The prediction was written down that evening, after the sessions had ended.

What can the report say about this re-test?

- **That both new people finished without asking, and that the prediction was written after the sessions rather than before.** — The observation stands on its own, and dating the prediction honestly tells a reader exactly how much weight to put on the match.
- That the repair is confirmed, because the result matched the prediction. — A prediction written after the event matches whatever happened. There was never an evening on which that note came out wrong.
- That the repair is confirmed, because two of two finished. — Two people finishing is a real observation and it is not a test of the repair. With no prior prediction, nothing was ever at risk.
- Nothing, because the re-test is spoilt. — The sessions happened and the observations are real. What is missing is the prior prediction, so say that plainly and keep everything else.

**Then:** Check when your own prediction was written. If it came after the re-test, mark it so and write a fresh one for the next change.

Worksheet fields for this step:

- Your prediction beside what actually happened, including anything you had not predicted
- What the re-test showed (Confirmed / Partial / Failed / Cannot say, because the prediction was written afterwards)

<details>
<summary>Help with this step</summary>

- **Comparison:** The prediction set beside what happened, read in that order, so you meet your own words before you meet the records.
- **Unpredicted result:** Something that changed which you had not written down beforehand. It is kept and reported, and it does not count as the prediction holding.
- **Outcome label:** The single word you put on the re-test: confirmed, partial, failed, or cannot say. Cannot say is the honest one when the prediction came afterwards.

Stuck starting? Read the prediction before you read the records, so you meet it in the order you wrote it.

Is it enough? Anything that changed which you had not predicted is written down as well.

</details>

#### 5. Record and re-rank

**See it first.** Made-up example. Re-ranking after a partial result, and quietly crossing off the problem I had just repaired.

- **The result I was holding:** The top problem was that two similar classes looked alike. The repair added the tutor’s name to each row. One of two new people chose straight away; the other still chose the wrong evening.
- **What I did in two minutes:** I crossed the top problem off, moved everything up one place, and put the new problem at the bottom because it had only just appeared.
- **Why the crossing off was wrong:** Half the prediction had failed. One of the two still chose wrongly. The problem had got smaller, not gone, and a crossed-off line says gone.
- **Why the bottom was wrong too:** The new problem was that the tutor names meant nothing to her, and it cost her a booking on an evening she could not attend. New is not a rank. Cost is.
- **The list I ended with:** The repaired problem stayed on it, marked partly addressed, with both rounds of counts beside it. The new problem came in above two older ones, because it cost more than either.
- **The line above the list:** One sentence saying this order rests on a re-test with two people, so it is a weaker order than the one it replaced.

**The wrong turn:** The wrong turn is crossing off the problem you have just repaired. It is the reward for the work and it makes the list shorter, which feels like progress. A partial result has not earned it.

**What it costs:** Keeping a partly addressed problem on the list means the list never gets shorter, and it will look to anyone reading as though you finish nothing. The alternative is a list that hides its own failures, which is worth less to everybody, you included.

**Still unknown:** Still unknown: whether the second person’s difficulty is the old problem in a new form or a separate one about names. Two people cannot separate those, so the list carries both readings.

- Write the outcome plainly, including a failure.
- Add any new problem the repair introduced.
- Re-rank the remaining problems and save both prototype versions.

**You should end up with:** The outcome in one sentence with counts, any new problem, the re-ranked list, and the repair the Check questions asked for.

Worksheet fields for this step:

- The outcome in one sentence, with the counts in it
- Any new problem the change introduced
- The remaining problems, re-ranked after this result
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Outcome sentence:** One sentence saying what the re-test showed, with the counts of people inside it rather than beside it.
- **New problem:** One the change itself introduced. It joins the list on what it cost the person, not at the bottom because it arrived last.
- **Re-ranking:** Putting the remaining problems back into order once the result is in, including any problem the repair only partly addressed.

Stuck starting? Write the sentence you would least like to write first. If the repair failed, that sentence is the result.

Is it enough? The outcome sentence would still be true if somebody read your records afterwards.

</details>

**Save and continue.** Saved for you: Your prediction, records and outcome save as you type, on this device first and then online. Kept outside the app: Keep both prototype versions, whether paper or files. The before-and-after pair is the artefact; neither half is worth much alone. What your creator sees: Your creator reads the prediction and its date first, then the outcome. A partial or failed result reported plainly is the strongest thing here. Your next action: Open Your work and choose Ready for review. The next lesson tests the questions a paper or clickable version could never reach.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Compare your change against the ranking. If it is not the top item, either repair that or record why it is deferred.

</details>

<details>
<summary>Hint 2</summary>

Revert to the tested version and apply only the one change, listing what you were tempted to do as well.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Repair, predict, re-test.
Task: Repair the top-ranked problem, write the prediction before re-testing, run the re-test with new participants, and report the result including a failure.
Challenge one thing at a time, and start with the mistake this lesson is about: “The repair worked because the second group finished faster.” Different people are faster or slower for many reasons. Tie the result to the specific prediction, and if the prediction was about time, say what else could explain it.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the change against the ranking and ask whether the repair addresses the top-ranked problem. Look at the two versions and ask whether exactly one change was made. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A local HTML page, a deliberate delay written into it, and your browser's throttling. This is the whole toolchain; no hosting, account or performance service is required.

- Starting material: Your untestable lists and a rough running page.
- Create HaruCourse/Practice/m10-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Pick the question

- Choose one item from your untestable lists that a running page can now answer.
- Write what result would change a decision.

**You should end up with:** One question that only a waiting or loaded-up thing can answer, and the decision it would change.

Worksheet fields for this step:

- The question from your untestable lists that only a waiting or loaded-up thing can answer, and the decision it would change — If a tidy paper screen could already answer it, choose a different one.
- Which comfort of the prototype you are removing (Speed — the prototype never makes anyone wait / Tidiness — every name and number in the prototype is neat and short / Length — the prototype holds three items, not sixty) — A prototype is fast, tidy and short. All three of those are lies. Pick the one that matters for your question.

<details>
<summary>Help with this step</summary>

- **Untestable list:** The list you wrote earlier in this module of what each prototype cannot establish.
- **Throttling:** Making a browser pretend the connection is slow, so pages arrive at the speed most people actually get.

Stuck starting? Read your untestable lists and mark every item that mentions timing, waiting, real data or the amount of content.

Is it enough? A tidy paper version of your screen could not answer the question you chose.

</details>

#### 2. Build the conditions

**See it first.** Made-up example. Trying to test a payment wait with no build at all, and nearly reporting a rehearsal as research.

- **What I did first:** I clicked through the paper screens and timed myself. About two seconds a screen, no waiting anywhere. I wrote down that the flow felt quick.
- **Why that was empty:** Nothing in a paper flow can be slow. I had measured my own hand moving cards, not a product.
- **What I changed:** My sister held the paper screen face down and counted four seconds on her phone before turning it over. That was the whole apparatus.
- **What appeared:** I pressed the button twice during the second wait, and said out loud “did that work?”. On paper I had never once pressed anything twice.
- **What I wrote down:** Four seconds, paper screens, a person counting, one person watching. Labelled a rehearsal. It gave me a problem worth testing properly, not a finding.

**The wrong turn:** The wrong turn is reporting the counted wait as a test of loading. Nobody waited for a real page; a person turned a card over.

**What it costs:** The rehearsal costs you any right to speak about real timings. What you get is a problem you did not know existed, for the price of four seconds and a phone.

**Still unknown:** Still unknown: whether four seconds is anything like what people would really get. That needs a page that loads and a slowed connection, which comes later in the course.

- Add a realistic delay where the real system would wait.
- Load realistic content volume, not three examples.
- Set a slow throttling profile and disable the cache.

**You should end up with:** A wait you can time, and content heavy enough to be real.

Worksheet fields for this step:

- How you will produce the wait (A running page you already have, with a delay in it and the browser set to a slow profile / A person who holds the screen back for a counted wait, timed on a phone / Both, so the two can be compared) — You do not need a running page. The counted wait is a real option, and this course does not ask you to write code yet.
- How long the wait is, in seconds, and how you timed it
- The real content you loaded: the longest names, the largest numbers, and how many items are in the list — Take the worst real examples you can find. Inventing neat ones defeats the whole purpose.

<details>
<summary>Help with this step</summary>

- **Counted wait:** A wait you make yourself, by holding the screen back while somebody counts the seconds on a clock.
- **Rehearsal:** A staged stand-in for a test. It shows you the shape of a problem, and it is never written up as research.

Stuck starting? Do the content first. Open your prototype and replace three tidy examples with the longest and largest real ones you can find.

Is it enough? The wait has a number of seconds beside it, and the screen holds as much content as the real thing would.

</details>

#### 3. Observe first paint and behaviour

**See it first.** Made-up example. Watching somebody sit through a wait, filling the silence, and writing down my reading of her face instead of what appeared.

- **What I wrote down:** “The wait felt endless and she got annoyed.” That was the whole of my note from the first run.
- **What was missing from it:** I could not say what appeared first, what appeared last, or how many seconds sat between the two. I had recorded my reading of her face.
- **What I did in the room:** About three seconds in I said “it’s just loading”. She stopped, waited politely and did nothing. Whatever she would have done next, I had taken it away from myself.
- **The second run:** Timer on, mouth shut. The heading and the empty boxes came up, then nothing for six seconds, then the prices. At about four seconds she pressed the button again.
- **What the loaded-up screen broke:** With sixty classes in the list rather than three, the price summary she was waiting for had moved below the bottom of the screen. It arrived, and she still did not see it.

**The wrong turn:** The wrong turn is filling the silence. A wait is uncomfortable to watch, explaining it is the kind thing to do, and it deletes the only behaviour you came for.

**What it costs:** Saying nothing for six seconds while somebody struggles feels rude, and one or two people will leave thinking you were cold. That silence is the measurement.

**Still unknown:** Still unknown: whether she pressed again because six seconds is too long, or because nothing on the screen said anything was coming. Those are two different repairs, and this run cannot separate them.

- Record what appears first and how long the gap lasts.
- Run the task yourself, then with one or two people.
- Watch specifically for repeated actions and abandonment.

**You should end up with:** What appeared first, what people did during the wait, and what the real content broke.

Worksheet fields for this step:

- What appeared first, what appeared last, and how long the gap between them lasted
- What you and the one or two people with you did during the wait: pressing again, leaving, asking whether it had worked
- What the real content broke: wrapping, scrolling, things pushed out of sight, sorting that suddenly became necessary

<details>
<summary>Help with this step</summary>

- **First paint:** The moment the first thing appears on the screen, before the rest of the page arrives.
- **Wrapping:** What a line of text does when it is too long for its space: it carries on to the next line and pushes everything below it further down.
- **Volume:** The amount of content actually on the screen at once, which is sixty rows rather than the three tidy ones you drew.

Stuck starting? Run it yourself once with a timer, then once each with one or two people, saying nothing while they wait.

Is it enough? You can describe the wait as a sequence with seconds in it, not as a feeling.

</details>

#### 4. Compare with the prototype result

- Compare what happened here with the click-through result.
- Record anything that only appeared under real conditions.
- Add new problems to the ranked list.

**You should end up with:** The difference between what the prototype said and what happened under real weight.

**Try it with help.** Two supplied made up results for the same task. The click-through: three people found the pay button in under ten seconds and none hesitated. The same task with a counted four-second wait and sixty items in the list: two of three pressed pay twice, and one scrolled straight past the class she wanted.

What is the honest thing to record from the pair?

- **Both results, each labelled with the conditions it came from, and the pressing-twice problem added to the ranked list.** — The two results are not in conflict. They answer different questions, and only the conditions written beside each one keep that clear.
- The second result only, because it was closer to real conditions and replaces the first. — The click-through still tells you the button is findable, which the crowded version cannot show. Throwing it away loses a result you already paid for.
- The first result only, because the second was a rehearsal with a person counting rather than a real connection. — The rehearsal cannot speak about real timings, and it did show two people pressing twice. That is an observation about behaviour, and it belongs in the list with its label attached.
- Neither, until you can run the test on a real build. — Waiting for a build leaves you with nothing for weeks. Both results are usable as long as each carries what it was and what it was not.

**Then:** Write your own pair the same way: the prototype result, the waiting or loaded-up result, and the conditions beside each.

Worksheet fields for this step:

- What the paper or click-through result said about this same task
- What changed under real conditions, and what stayed the same
- New problems to add to your ranked list, each with how many of how many people met it

<details>
<summary>Help with this step</summary>

- **Click-through:** A prototype whose screens are joined up so you can tap from one to the next, with nothing really working behind them.
- **Ranked list:** Your running list of problems, ordered by how much harm each one does. New problems join it rather than starting a fresh list.

Stuck starting? Put the two results side by side before you write anything about either.

Is it enough? Each result has its conditions beside it, and neither has been deleted to make a tidier story.

</details>

#### 5. Record conditions

- Write the device, browser, throttling profile and content volume.
- State what remains untested even now.
- Save the results with the conditions.

**You should end up with:** The conditions written down, the rehearsal labelled, and the repair the Check questions asked for.

Worksheet fields for this step:

- Device, browser or method, wait length in seconds, and how many items were in the list
- If a person held the screen back rather than a page actually loading, write that here as a rehearsal — A rehearsal shows you the shape of a problem. It is never reported as research.
- What remains untested even now
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Conditions:** The facts about how a run was set up: the device, the method, the length of the wait in seconds, and how many items were on the screen.
- **Check questions:** The few questions at the end of a lesson that send you back to mend one specific thing.

Stuck starting? Write the four facts at the top of your results: device, method, seconds, item count.

Is it enough? Someone else could set the same conditions up from your notes alone.

</details>

**Save and continue.** Saved for you: The question, the conditions, the observations and the comparison save as you type, on this device first and then online. Kept outside the app: Keep your untestable lists and your fakes sheet beside you; step 1 and step 5 both draw on them. If you photographed a paper screen loaded with real content, note the file name here. What your creator sees: Your creator reads the conditions record first. It is what turns the result into something more than an impression. Your next action: Open Your work and choose Ready for review. The next lesson designs a task set that could run without you, and works out what that costs.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Return to your untestable lists and choose the item that a running page uniquely answers.

</details>

<details>
<summary>Hint 2</summary>

Set the profile, disable the cache and multiply your content until the list behaves like a real one.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Testing what only a running thing can test.
Task: Test one question that paper and click-throughs cannot answer — timing, a slow connection or real content volume — and record what changed compared with the prototype result.
Challenge one thing at a time, and start with the mistake this lesson is about: “Performance is an engineering concern.” What a person sees during a wait, what they conclude and what they do about it are design decisions. Engineering makes the wait shorter; design decides whether the wait is survivable.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the question and decision and ask whether the question needed a running page to answer. Look at the test conditions and ask whether conditions include throttling and realistic volume. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written instructions plus your local prototype shared as a link or a file, and answers returned by message. Free unmoderated platforms exist with participant limits; nothing here requires one, and the message route keeps your data in your own hands.

- Starting material: Your task set and remaining open questions.
- Create HaruCourse/Practice/m10-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Pick a suitable question

**See it first.** Made-up example. Sending out the wrong question unmoderated, and getting five answers that explained nothing.

- **The question I chose:** Why do people hesitate before paying. It was my most interesting open question, so it was the one I sent to five people.
- **What came back:** Five outcomes. Four paid, one did not. The comment boxes said “fine”, “fine”, “ok”, nothing at all, and “couldn’t see it”.
- **What I could not do:** Ask the one who stopped what she was thinking. She was gone, and the answer to a why question lives entirely inside that moment.
- **What I found out later:** One person had walked a route through the flow that does not exist. She had misread the scenario, and I only learned it because she mentioned it in a message a week afterwards.
- **What I sent the second time:** Can a person find the change-or-cancel route without help. An outcome answers that on its own, and there is no why to lose.

**The wrong turn:** The wrong turn is sending your most interesting question, because interesting usually means it asks why. An unmoderated run tells you what happened and never why.

**What it costs:** Keeping the why questions for moderated sessions means fewer people and more of your evenings. It is the only way those questions get answered at all.

**Still unknown:** Still unknown: how many of the five read the scenario the way I meant it. In an unmoderated run you cannot find that out, which is itself a limit worth writing down.

- List your remaining questions and mark each discovery or confirmation.
- Choose one confirmation question for an unmoderated run.

**You should end up with:** One confirmation question chosen, with the discovery questions kept back for moderated sessions.

Worksheet fields for this step:

- Every question still open after your sessions, each marked discovery or confirmation — Discovery asks why, or what is going on. Confirmation asks whether a specific thing happens.
- The one confirmation question you will build the task set around, and why it does not need anyone to explain themselves

<details>
<summary>Help with this step</summary>

- **Unmoderated test:** The person does the task alone, from written instructions, with you nowhere nearby.
- **Confirmation question:** A question about whether a specific thing happens, which an outcome on its own can answer.

Stuck starting? Go through your open questions and finish this sentence for each: “what a person did, on its own, would answer this” — or it would not.

Is it enough? The question you chose could be answered by what a person did, with nothing they say.

</details>

#### 2. Write self-contained instructions

**See it first.** Made-up example. Writing unmoderated instructions with the screen open beside me, so the task tested whether people could read rather than whether they could find.

- **What I wrote:** “Open My bookings, tap Change booking, and move your Tuesday class to Thursday.” It was short and clear, and I was pleased with it.
- **What it would have measured:** Five people telling me they can follow three instructions. My question was whether anybody reaches the change route without help, and I had put the route in the instructions.
- **Why I wrote it that way:** The screen was open in front of me while I typed. Every name on it felt like an ordinary word rather than the answer to my own question.
- **The rewrite:** “You booked a class for Tuesday and something has come up. Get as far as the point where you would move it to another day. If you cannot get there, tell me where you stopped.”
- **What I still had to add:** A line saying what to do if something does not work, and a line saying where to send the outcome. I checked that neither of them named a button either.

**The wrong turn:** The wrong turn is naming the buttons, and it is very hard to avoid while the screen sits open beside you. Instructions written that way test reading, and reading was never the thing in doubt.

**What it costs:** A situation with no names in it means one or two of your five will go somewhere else entirely, and you cannot lean over and put them right. Those runs are simply lost, and they are what the useful ones cost you.

**Still unknown:** Still unknown: whether the word change in your scenario means the same thing to a reader as the word on the screen. An unmoderated run can never tell you how somebody read your sentence.

- Write the scenario, the goal and how to report the outcome.
- Remove every word that assumes context only you have.
- State what to do if something does not work.

**You should end up with:** Instructions a stranger could follow with you nowhere nearby.

Worksheet fields for this step:

- The scenario exactly as the person will read it
- What you are asking them to do, and how they send the outcome back to you
- What you tell them to do if something does not work

<details>
<summary>Help with this step</summary>

- **Scenario:** The short situation you give a person so the task has a reason, written in their words rather than the product’s.
- **Leading:** Wording that hands over the answer, so the task tests reading rather than finding.
- **Self-contained:** Everything needed to do the task sits inside the instructions, because you will not be there to add anything.

Stuck starting? Write it as though you are messaging someone who has never heard of the project.

Is it enough? Nothing in the instructions assumes anything only you know.

</details>

#### 3. Test the wording

- Ask one person to read the instructions aloud and say what they would do.
- Rewrite anything they hesitated over.
- Repeat if the second reading still produces a misreading.

**You should end up with:** One read-aloud test, with the hesitations and the rewrites recorded.

Worksheet fields for this step:

- Where the reader paused, re-read, or described doing something you did not intend
- What you changed, with the old wording beside the new

<details>
<summary>Help with this step</summary>

- **Read-aloud test:** Asking one person to read your instructions out loud and say what they would do next, while you say nothing at all.
- **Hesitation:** A pause, a stumble or a re-read. It marks the exact word that is not working.

Stuck starting? Ask one person to read it aloud and narrate what they would do next. Say nothing at all while they do it. If there is nobody to ask, read it aloud yourself the next morning and note that no second reader ever saw it.

Is it enough? You rewrote at least one sentence, and the old wording is still visible beside the new one.

</details>

#### 4. Write the limits

- List what this method cannot capture: why, hesitation, interruptions, setting.
- State how you would follow up on any surprising result.

**You should end up with:** A specific list of what this method cannot capture, tested against your own strongest finding.

**Try it with help.** A supplied made up unmoderated result. Five people were sent one task: reach the point where you would change a booking. Four reported reaching it, one reported giving up. The comment boxes say “fine”, “fine”, “ok”, nothing, and “couldn’t see it”.

Which limit is the one worth writing down first?

- **You cannot say why the fifth person gave up, and “couldn’t see it” is the whole account you will ever get.** — The one failure is the most interesting line in the result, and the method has already closed the door on explaining it. Naming that is what tells you whether to follow up.
- Five people is too few to report a rate. — True of every study this size, and it is a limit about counting rather than about this method. An unmoderated run with five hundred people still could not tell you why.
- You cannot be sure the participants were representative. — A recruitment limit that belongs in your report and would apply just as much to a moderated session.
- You cannot check whether anyone was interrupted while doing it. — A real limit of the method, and a smaller one than the missing why. Write it second.

**Then:** Write your own limits in the same order: the one that damages your strongest finding goes first.

Worksheet fields for this step:

- What an unmoderated run cannot capture: the why, hesitation, interruptions, the setting, a misread instruction you never hear about
- Take your strongest finding from the moderated sessions. Would an unmoderated run have produced it? Write the answer and what that tells you.
- How you would follow up a surprising result

<details>
<summary>Help with this step</summary>

- **Limit:** Something your method cannot capture, written down by you before anybody else finds it.
- **The why:** The reason behind what a person did. An outcome on its own never carries it.
- **Follow-up:** A later message or session that chases one surprising result you cannot explain.

Stuck starting? Take your strongest session finding and ask whether an outcome alone would have produced it.

Is it enough? The first limit on your list names something specific that your own study would have lost.

</details>

#### 5. Decide

- Decide whether to run it, and write the reason either way.
- If you run it, plan how results return to you and where they are stored.
- Save the task set, the limits and the decision.

**You should end up with:** A decision either way, with the reason, and the repair the Check questions asked for.

Worksheet fields for this step:

- Your decision (Run it / Do not run it / Run it only after something changes)
- The reason either way: what you would learn, what it costs, and whether that is worth it for this question
- If you are running it: where answers arrive and where they are stored. If you have nobody to send it to: today’s date and what you tried.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Dated gap:** A line saying, with today’s date, that a study was designed and not run, and what you tried.
- **Method choice:** The decision to use one kind of study rather than another. The decision itself is worth filing, with its reason beside it.

Stuck starting? Write the reason before you write the decision. The reason usually settles it.

Is it enough? Someone reading the reason could reach the same decision, and the not-run case is written just as fully as the run case.

</details>

**Save and continue.** Saved for you: The question list, the instructions, the limits and the decision save as you type, on this device first and then online. Kept outside the app: If you share the prototype as a file or a link, note where it lives. Answers that come back by message belong in your own folder, not in this app. What your creator sees: Your creator reads the limits and the decision. A study you decided not to run, with the reason attached, reads as a method chosen rather than a method collected. Your next action: Open Your work and choose Ready for review. The next lesson turns everything from this module into a report of at most two pages.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Mark each open question discovery or confirmation, then choose only from the second group.

</details>

<details>
<summary>Hint 2</summary>

Have someone read the instructions aloud and narrate what they would do. Rewrite every hesitation.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Unmoderated and remote testing, and their limits.
Task: Design one unmoderated task set that could run without you, state exactly what it cannot capture, and decide whether it is worth running for your question.
Challenge one thing at a time, and start with the mistake this lesson is about: “Unmoderated tests are objective because the researcher is not influencing them.” They are unsupervised, which removes both influence and understanding. What you get is behaviour without explanation, and misread instructions you will never know about.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the marked question list and ask whether the question suits an unmoderated method. Look at the tested instructions and ask whether instructions are self-contained and tested for misreading. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Plain text or Markdown, two pages. If you present it aloud, six slides at most; the constraint is what forces the decision to the front.

- Starting material: Your ranked problems, repair result and claims lists.
- Create HaruCourse/Practice/m10-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Write the decision first

**See it first.** Made-up example. Writing the report in the order it happened, and watching nobody reach the point.

- **What I wrote first:** Nine pages. Method, recruitment, then session by session, then the findings, then what I thought should change, on page eight.
- **What happened to it:** The two people I asked to read it both stopped somewhere in the third session. Neither could tell me what I wanted changed.
- **What I had confused:** I was proving I had done the work. A report exists to change a decision, and my decision was buried behind my evidence for it.
- **The rewrite:** One paragraph at the top: hold the payment work and fix the held-place uncertainty first, because two of three could not tell whether their place was secured.
- **What it cost:** Nine pages became two. Four sessions of detail went into a folder nobody has opened since, which is where they belong.

**The wrong turn:** The wrong turn is leading with the method, because the method is the part you are least sure of and most want to defend. It is also the part a reader is willing to trust you with.

**What it costs:** Two pages means most of what you did is invisible. What you get is that the one thing you want changed is read by everyone who opens it.

**Still unknown:** Still unknown: whether the change you name is the right one. The report says what the evidence supports, not that you are right.

- Write the single change you would make and why, in one paragraph.
- Read the assigned sharing guidance for the finding structure.

**You should end up with:** One paragraph naming the change and its reason, before any method.

Worksheet fields for this step:

- The single change you would make and why, in one paragraph, before any method
- What you are asking to stop or wait while this is fixed

<details>
<summary>Help with this step</summary>

- **Non-recommendation:** A thing the evidence says not to build. It is a finding in its own right, not an omission.

Stuck starting? Write the sentence “the first thing to change is …, because …” and let the rest of the report grow behind it.

Is it enough? The paragraph names a change and a reason, and mentions no method at all.

</details>

#### 2. Write the findings

**See it first.** Made-up example. Merging two different problems into one finding so that the count would look stronger.

- **What I wrote:** “Everyone found the booking flow confusing — three of three.” It went at the top of the findings and it looked settled.
- **Where the three came from:** Two people could not tell whether their place was held before paying. The third got as far as the dates and gave up, because she could not tell which week she was looking at.
- **Why I merged them:** Three of three sounds like something nobody will argue with. Two of three sounds like an opinion I would have to defend.
- **What the merged finding cost:** It named no change at all. Confusing cannot be repaired. The two problems underneath it each had an obvious repair, and my headline had hidden both.
- **What I wrote instead:** Two findings. Held place, two of three, with what she said, and the review screen has to name what is already secured. Week unclear, one of three, and the date view has to say which week it is showing.

**The wrong turn:** The wrong turn is rolling near-neighbour problems into one headline, because a bigger count feels safer and a soft word like confusing seems to cover everything you saw.

**What it costs:** Split findings are each smaller, and the one-of-three finding will sit at the bottom looking ignorable beside the other. What you get is that each one names a repair somebody could actually make.

**Still unknown:** Still unknown: how common the week problem is. One person met it, and nothing in this study says whether the next ten would.

- Write each finding as headline, counts, evidence, and what it changes.
- Cut to the number that fits two pages.
- Include the repair result, however it turned out.

**You should end up with:** Each finding with its headline, participant count, evidence and what it changes.

Worksheet fields for this step, revealed a few at a time in the app:

- Finding 1 · headline, how many of how many people met it, the evidence, and what it changes
- Finding 2 · headline, how many of how many people met it, the evidence, and what it changes
- Finding 3 · headline, how many of how many people met it, the evidence, and what it changes
- Finding 4 · headline, how many of how many people met it, the evidence, and what it changes
- The repair you tested, the prediction you wrote first, and how it actually turned out — A partial or failed repair is a result. Write it exactly as it happened.

<details>
<summary>Help with this step</summary>

- **Finding:** One problem you saw, written with how many people met it, what they said or did, and what it changes.
- **Headline:** The one line naming a finding, short enough that a reader can hold it in their head.
- **Count:** How many of how many people met the problem, written as two numbers. Three people never make a percentage.

Stuck starting? Take the top of your ranked problem list and write it as four short parts.

Is it enough? Every finding says how many of how many people met it, and the repair result is there however it turned out.

</details>

#### 3. Assemble the limits

- Paste in recruitment exclusions, the untestable list and the fakes sheet.
- Add what remains untested after the running-page test.
- Keep it as a section, not a footnote.

**You should end up with:** A limits section assembled from lists you have already written.

Worksheet fields for this step:

- How many people took part, how they were reached, and who was left out — If part of this came from a rehearsal or from supplied practice material, say so here, in the same sentence as the numbers.
- From your fakes sheet: the controls that did nothing and the values you invented
- What was never tested at all: the connection, assistive technology, other groups of people

<details>
<summary>Help with this step</summary>

- **Limits section:** The part of the report saying who was not asked, what did not really work, and what was never tested.
- **Fakes sheet:** The running list you kept of every control that did nothing and every value you invented.
- **Recruitment:** How you found the people who took part, and therefore who was left out.

Stuck starting? Open your recruitment notes, your untestable lists and your fakes sheet, and paste them in unchanged.

Is it enough? A reader could tell who was never asked and what did not really work, without asking you.

</details>

#### 4. Say what not to build

- Name one thing the evidence argues against.
- State what would change your mind about it.
- Separate expert opinion from tested findings in a short list.

**You should end up with:** One thing the evidence argues against, with what would reverse it.

**Try it with help.** A supplied made up study. Three people booked a class. Two could not tell whether their place was held before paying. Nobody forgot about a class they had booked. One person said, unprompted, that she would like a reminder the day before.

Which non-recommendation does this evidence license?

- **Do not build the reminder feature yet, because nobody’s difficulty was forgetting, and one person asking for it is a request rather than a problem.** — The strongest non-recommendation names something you were likely to build anyway. It also carries its own reversal: watch for someone who actually missed a class.
- Do not build the reminder feature, because reminders are common elsewhere and add nothing new. — The reason has to come from what you saw, not from what other products do. A reader cannot check the second kind of reason at all.
- Do not build anything until more people have been tested. — That is a recommendation to stop, and it is not what this evidence says. Two of three people meeting one specific problem is enough to act on that one thing.
- Do not build the held-place message, because only two of three people met the problem. — Two of three met the highest-harm problem in the study. Arguing against the repair you have most support for turns the section into caution rather than a finding.

**Then:** Write your own non-recommendation the same way: the thing, what you saw, and what would reverse it.

Worksheet fields for this step:

- The one thing the evidence argues against building, and why
- The evidence that would reverse it
- The short list of things you believe from experience rather than from anything you tested

<details>
<summary>Help with this step</summary>

- **Reversal:** The evidence that would change your mind, written down at the same time as the decision it would overturn.
- **Expert opinion:** Something you believe from experience rather than from anything you tested here, labelled so a reader can tell the two apart.

Stuck starting? Ask what the evidence argues against. If the answer is nothing, the study probably confirmed what you already believed.

Is it enough? The non-recommendation names something you were tempted to build.

</details>

#### 5. Check and store

- Read it as someone who was not there; remove anything they could not follow.
- Anonymise quotations and check nothing identifies a participant.
- Save the report and file the raw material where it can be produced.

**You should end up with:** A report readable by someone who was not there, and the repair the Check questions asked for.

Worksheet fields for this step:

- What you removed because a reader who was not there could not follow it
- Quotations checked for anything that points at a person (Checked: no name, workplace or detail that points at anyone / Not checked yet / No quotations are used)
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Anonymising:** Taking out of a quotation anything that points at the person who said it: a name, a workplace, an unusual detail.
- **Outsider read:** Reading your own report as somebody who was not there, to find the parts that only work with you standing beside them.

Stuck starting? Read it aloud once as a person who has never heard of the project.

Is it enough? Nothing in it needs you standing beside it, and no quotation points at a person.

</details>

**Save and continue.** Saved for you: The decision paragraph, the findings, the limits and the non-recommendation save as you type, on this device first and then online. Kept outside the app: The report itself is two pages of plain text on your own computer. Keep the raw session material in a separate private folder and note only where it is. What your creator sees: Your creator reads the opening paragraph, then the limits section. Those two decide whether the rest is worth trusting. Your next action: Open Your work and choose Ready for review. The next lesson gathers the whole first project into one trail and says honestly what it does and does not show.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Move your recommendation to the top and cut everything before it.

</details>

<details>
<summary>Hint 2</summary>

Add the count and one piece of evidence to each finding; drop any finding you cannot support.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Report the evaluation and decide what to build.
Task: Write an evaluation report of at most two pages that leads with the decision, carries participant counts, states the limits and names one thing not to build.
Challenge one thing at a time, and start with the mistake this lesson is about: “The report should be thorough so nobody can question it.” Length reduces the chance anyone acts. Two pages with the decision first, the counts attached and the limits stated will change more than fifteen pages of session narrative.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the opening paragraph and ask whether the decision comes first and fits a paragraph. Look at the findings section and ask whether every finding carries participant counts and evidence. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: One page of plain text linking to your existing artefacts. Nothing new is produced here except the trail and the summary.

- Starting material: All artefacts from m05 through m10.
- Create HaruCourse/Practice/m10-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Assemble the trail

**See it first.** Made-up example. Building the trail and finding that my favourite decision had nothing at all behind it.

- **What I expected:** A tidy line from five research questions to a tested repair. I had done every step, so I assumed every step joined up.
- **Where it broke:** The shortlist. I could not name one thing anyone said or did that led to it. I had wanted it since the first sketch.
- **What I nearly wrote:** “People needed a way to compare options.” It sounds like a finding. Nobody in my notes compared anything.
- **What I wrote instead:** “Kept the shortlist. Judgement, not evidence. A task asking someone to choose between two classes would test it.”
- **What that changed:** The trail gained one honest gap and stopped being a story. Two other decisions turned out to be judgement as well, which was the more useful discovery.

**The wrong turn:** The wrong turn is writing a research-sounding sentence for a decision you simply liked. It reads well, and it is the one thing a reader can catch you on.

**What it costs:** Marking three decisions as judgement makes the project look less researched than it felt. It is exactly what makes the evidence-led parts believable.

**Still unknown:** Still unknown: whether the shortlist helps anyone at all. Nothing in the project touched it, and the trail now says so.

- List each major design decision in the project.
- Beside each, name the evidence it came from and where that evidence lives.

**You should end up with:** Each major decision beside the evidence it came from and the place that evidence lives.

Worksheet fields for this step:

- Each major design decision in the project, and beside it the evidence it came from and where that evidence lives
- The link in the trail you would least like to be asked about

<details>
<summary>Help with this step</summary>

- **Evidence trail:** A list linking each design decision back to something you actually observed, and to the file where it is kept.

Stuck starting? Work backwards from the prototype. For each thing on the screen, ask what put it there.

Is it enough? Every decision has either a source and a location, or a blank you have not filled in with a guess.

</details>

#### 2. Mark the judgements

- Mark every decision with no evidence behind it as judgement.
- For each, write what would test it.
- Resist inventing a research-sounding reason.

**You should end up with:** Each line of the trail marked by what actually backs it.

**Try it with help.** Six made up lines from somebody else’s portfolio page. None of them are yours and none of them happened. For each, say what backs it: evidence she holds, a rehearsal or supplied practice material, or nothing at all.

- Three people I recruited from a local craft group tried the booking flow. Two could not tell whether their place was held before paying. The session notes are in the project folder.
  - **evidence you hold** — Real people, a specific observation, and a file she can produce on request. That is the whole test.
  - rehearsal or supplied material — The people were recruited and the sessions happened. A rehearsal is when she stands in for a participant herself.
  - not backed — A count, a specific observation and a location are all named. Everything a reader would need in order to check it is there.
- I tested the loading wait by asking my flatmate to hold the paper screen face down and count four seconds. She pressed the button twice.
  - evidence you hold — She did watch a person press twice, and nothing loaded and nothing was slow. Written up as a loading test, this becomes a claim about something that never happened.
  - **rehearsal or supplied material** — A staged wait with a person counting. It shows the shape of a problem, and the label says what it was.
  - not backed — Something did happen and she watched it. What it cannot do is stand as a test of a real connection.
- The new review screen reduced payment confusion by 40 per cent.
  - evidence you hold — A rate needs a measurement before and a measurement after. Three people cannot make a percentage, and nothing here was measured.
  - rehearsal or supplied material — A rehearsal could not produce this either. The number has no source anywhere in the trail.
  - **not backed** — A measured-sounding figure with nothing behind it. This is the sentence that makes a reader doubt every other line on the page.
- I designed an unmoderated task set, decided not to run it because the question was really a why question, and filed the design with the reason and the date.
  - **evidence you hold** — The claim is about a decision she made, and she holds the design, the reason and the date.
  - rehearsal or supplied material — Nothing here stands in for anything. She is reporting a method choice, not a result.
  - not backed — The artefact exists and she can produce it. The claim goes no further than saying she made the decision.
- Users prefer the shorter flow.
  - evidence you hold — Preference was never asked about, and the word users names nobody. Even three people saying it would only license “two of three said”.
  - rehearsal or supplied material — A rehearsal would still give her a person and a moment. This sentence has neither.
  - **not backed** — A general claim about people in the plural, with no count, no moment and no file behind it.
- I practised grouping observations on the made up transcript the course supplied, and the method is the one I then used on my own sessions.
  - evidence you hold — The transcript was written for practice. Nobody ever said any of it, so nothing in it is an observation she made.
  - **rehearsal or supplied material** — Supplied practice material, named as supplied. Showing the practice is fine; presenting it as a study would not be.
  - not backed — It is backed, by material the course gave her. The label only has to say where it came from.

**Then:** Go through your own trail and put one of these three labels beside every line.

**What to watch for:** The question is always the same: what would you hand a reader who asked to see it? A file with real people in it, a staged or supplied thing you must name, or nothing.

Worksheet fields for this step:

- Every decision with nothing behind it, marked judgement, with what would test each one
- Anything in the trail that came from a rehearsal or from supplied practice material, labelled as what it was
- The research-sounding reason you were tempted to write for one judgement call

<details>
<summary>Help with this step</summary>

- **Judgement call:** A decision you made because it seemed right, with nothing you observed standing behind it.
- **Rehearsal:** A stand-in for a test that you staged yourself. It shows the shape of a problem and is never reported as research.
- **Supplied practice material:** The made-up transcripts and results this course gives you to practise on. Nobody ever said any of it.

Stuck starting? Take the decisions with no source first. Those are the ones the labels are for.

Is it enough? No line in the trail is unlabelled, and no judgement has been given a research-sounding reason.

</details>

#### 3. Write the scope statement

- State what you built and at what fidelity.
- State what was faked and what was never tested.
- State who took part and how they were reached.

**You should end up with:** A scope statement naming what was built, what was faked and who took part.

Worksheet fields for this step:

- What you built, and at what fidelity
- What was faked, taken from your fakes sheet
- What you never tested at all
- Who took part and how they were reached, or the dated gap where nobody did

<details>
<summary>Help with this step</summary>

- **Fidelity:** How close a prototype is to the real thing: paper, a click-through, or something that actually runs.
- **Scope statement:** The short passage saying what was built, what was faked, what was never touched, and who took part.
- **Fakes sheet:** The running list of every control that did nothing and every value you made up while building.

Stuck starting? Reuse your fakes sheet, your untestable lists and your recruitment notes; they already contain most of the statement.

Is it enough? A reader could tell what you never touched without asking you a single question.

</details>

#### 4. Write the summary

**See it first.** Made-up example. Writing the summary in a portfolio voice, and finding almost nothing left once the claims came out.

- **What I wrote first:** “Researched, designed and tested a booking flow, improving clarity for people booking classes.” It read like every portfolio page I had ever admired.
- **The search:** I searched my own paragraph for shipped, validated, proven, improved and the per cent sign. Four hits in three sentences, and one sentence had nothing left in it once they were gone.
- **What that told me:** That sentence had been carrying the claim rather than the work. There was no observation underneath it to survive the deletion.
- **The rewrite:** “Three people tried a paper booking flow. Two could not tell whether their place was held before paying. I changed the review screen and tried it with two more people; one of them still checked twice.”
- **What I nearly left out:** The last clause. A half-working repair felt like a poor ending, and it is the only line in the paragraph that shows the project could have contradicted me.

**The wrong turn:** The wrong turn is writing the summary in the voice of a finished case study, because that is the voice of every portfolio you have read and it arrives before you have decided anything.

**What it costs:** A summary with no outcome claims cannot compete with one saying a number went up by thirty per cent. You give up the sentence that gets skimmed and remembered, and you get a paragraph where every line can be produced on request.

**Still unknown:** Still unknown: whether the review screen change helps anybody beyond the two people who saw it. The paragraph now says so, rather than implying otherwise.

- Summarise the project in one paragraph without outcome claims.
- Remove the words shipped, validated, proven and any percentage.
- Name the two things you would do next and why.

**You should end up with:** One paragraph with no outcome claims, and the two things you would do next.

Worksheet fields for this step:

- The project in one paragraph, with no outcome claims
- The words you searched for and removed — shipped, validated, proven, improved, and every percentage.
- The two things you would do next, and why those two

<details>
<summary>Help with this step</summary>

- **Outcome claim:** A sentence saying how well something worked: improved, validated, proven, or any percentage at all.
- **Banned words:** The short list of words you search your own summary for before you file it, because each one promises more than you can show.

Stuck starting? Write what you did and what you observed. Stop before any sentence about how well it worked.

Is it enough? The paragraph contains no percentage and none of the words on your list.

</details>

#### 5. File everything

- Store the artefacts so each link in the trail can be produced.
- Keep raw participant material private and separate.
- Save the trail, scope and summary together.

**You should end up with:** Every link in the trail able to be produced, and the repair the Check questions asked for.

Worksheet fields for this step:

- Where each artefact in the trail lives, so any link in it can be produced
- Raw participant material (Stored separately from the trail, and private / Not separated yet / There is no raw participant material)
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **File map:** A list saying where each thing in the trail is kept, so any link in it can be produced when somebody asks.
- **Raw participant material:** Recordings, notes and anything else with a real person in it, kept apart from the trail and private.

Stuck starting? Walk your own trail and try to open each artefact in turn.

Is it enough? Anything you could not open has been found or marked missing, and raw participant material sits apart from everything else.

</details>

**Save and continue.** Saved for you: The trail, the labels, the scope statement and the summary save as you type, on this device first and then online. Kept outside the app: The trail is one page of plain text linking to artefacts already on your computer. Keep raw participant material in a separate private folder and link only to its location. What your creator sees: Your creator reads the label beside each line, then the scope statement. An honest gap reads better than a smooth story. Your next action: Open Your work and choose Ready for review. That closes the first project. What you do with it next is yours to decide, and nothing here commits you to a particular direction.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Take each decision and try to name the artefact behind it. If you cannot, mark it judgement rather than searching for a justification.

</details>

<details>
<summary>Hint 2</summary>

Reuse your fakes sheet, untestable lists and recruitment exclusions; they already contain the statement.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Close the project loop.
Task: Assemble the first project into a single evidence trail from research question to tested repair, and write the honest summary of what it does and does not demonstrate.
Challenge one thing at a time, and start with the mistake this lesson is about: “The project needs a strong outcome to be worth showing.” It needs an honest trail. A project that found a problem, designed for it, tested it, half-fixed it and said so is more persuasive than one claiming a measured improvement nobody can verify.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the completed trail and ask whether each major decision links to its evidence or is marked judgement. Look at the scope statement and ask whether the scope statement names built, faked and untested. Anything you cannot show, write down as untested rather than assuming it holds.

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
