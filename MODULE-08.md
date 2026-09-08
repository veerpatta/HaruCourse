# Interface craft and design tools

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Published, worksheet-enabled, teaching-refined, learner-validated and assessed are separate states.

Generated from src/module8.ts; edit that source, then run npm run docs:generate. Level 3 · Module m08 · requirement areas 8. Optional effort 35 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m03, m07. This is guidance for meaningful practice, not a lock. Module approved resource pair: R06 / R03. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: What fidelity adds, and what it hides

Stable ID: m08-l01-v1. Core. Areas 8. Optional effort ~120 min.

**Objective.** Take one tested wireframe to interface fidelity and write what the added detail decided, what it hid, and which question can no longer be asked cheaply.

**Bring forward.** One screen from your m07 wireflow, its state table and the ranked problems from your paper test.

Fidelity is not a stage you graduate to. It is a trade: each layer of detail settles some questions and makes others expensive to reopen.

### Learn

Every increase in fidelity buys precision and costs flexibility. At wireframe level you can move a whole section in a minute and nobody argues about it, because nothing looks decided. Once type, colour and imagery are settled, the same move requires redoing work that other people have already approved, so it stops being proposed — which is why structural mistakes that survive into high fidelity tend to ship.

This is also why feedback changes character. People respond to what looks unfinished, so a polished screen collects comments about tone and colour while the content order goes unexamined. If you need a decision about order, show the rough version; if you need a decision about how something should be built, show the detailed one. Deciding which conversation you are having before you open the file is most of the skill.

Interface craft is not the same as decoration, and the difference is testable. Craft is whether a person can tell at a glance which element is the action, whether something has changed since they last looked, whether an item is selected, disabled or merely quiet, and whether two similar things are actually different. Those are perceptual questions with right answers, and they survive being viewed in greyscale, at arm's length, and by someone who has never seen the screen before.

Keep every earlier version. A structural question will come back — a tree test result, a new constraint, an engineer's estimate — and having the rough version to return to is what lets you answer it without unpicking a week of detail.

**Common misconception.** “High fidelity means the design is further along.” It means the design is more expensive to change. A polished screen built on an untested structure is further from shipping than a rough one built on a tested structure, because the expensive rework is still ahead of it.

### Worked example

A booking screen taken from wireframe to interface settled six things: type scale, the price treatment, the button hierarchy, the spacing rhythm, the image size and the state colours. It also hid two: with real type sizes the description no longer fit above the fold, which the wireframe had implied it would, and the availability line — which the paper test had shown people looking for — became visually quiet enough that two reviewers did not mention it at all. Both were caught only because the wireframe was still on the table beside it.

#### What fidelity adds, and what it hides

Take one tested wireframe to interface fidelity and write what the added detail decided, what it hid, and which question can no longer be asked cheaply.

**Where to practise:** Draw the interface-fidelity screen beside its wireframe on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper and coloured pencils, or one local HTML file with a small stylesheet. A design tool is convenient and not required; hand-written SVG or plain CSS produces a real, exportable screen with no account.

- Starting material: One tested m07 screen, its state table and your ranked problem list.
- Create HaruCourse/Practice/m08-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Choose and read

- Pick the m07 screen your paper test raised the most problems about.
- Read the assigned component guidance for one component that appears on it.
- Write in one sentence what this version of the screen is for.

**You should end up with:** The screen you chose, one sentence saying what this version is for, and what the component guidance specifies beyond appearance.

Worksheet fields for this step:

- The screen you picked, and the problem your paper test raised about it
- What this version of the screen is for, in one sentence — Agreeing the content order is one purpose. Agreeing how it should be built is a different one. Say which.
- The component guidance you read, and what it specifies beyond appearance — States, content rules, and when not to use it. Copy out only the parts that are not about how it looks.

<details>
<summary>Help with this step</summary>

- **Fidelity:** How settled a drawing is. A wireframe leaves type, colour and spacing open; an interface-fidelity screen closes them.
- **Wireframe:** The rough version that shows what is on the screen and in what order, without deciding how any of it looks.

Stuck starting? Pick the screen your paper test produced the most notes about, not the one you most want to draw.

Is it enough? The purpose sentence names one decision this version exists to settle.

</details>

#### 2. Raise the fidelity

- Apply your m03 type scale and spacing to the screen.
- Use real content at its longest, not sample text.
- Settle the button hierarchy, the price treatment and the state colours.

**You should end up with:** The screen redrawn with your m03 type scale and spacing, using the real labels at their longest.

Worksheet fields for this step:

- The real strings you used, where each came from, and which one is the longest — Your m06 labelling table holds them. If a label is not written yet, write it now rather than drawing round a gap.
- What you settled: type steps, spacing, button hierarchy, price treatment, state colours — Write the actual values you used, not that you “applied the scale”.

<details>
<summary>Help with this step</summary>

- **Type scale:** The short list of sizes you allow yourself, each with a job, from Module 3.
- **Real content:** The actual words the product will show, at the longest they get. Sample text is always a comfortable length.

Stuck starting? Write the longest real label first and draw the layout around it.

Is it enough? Nothing on the sheet says “Lorem” or “Class name here”.

</details>

#### 3. Compare with the wireframe

**See it first.** Made-up example. Writing the “what it decided” list for a class booking screen, and throwing the first version away.

- **What I put beside each other:** The wireframe on the left, the new screen on the right, both at the same width so the differences were differences and not scale.
- **My first list:** “It decided the colours and the type.” Two lines, and neither of them tells anybody anything they could argue with.
- **Why that failed:** A decision is something the wireframe left genuinely open and this version has now closed. “Colours” is a category. “The price is grey and one step smaller than the class name” is a decision.
- **What I wrote instead:** Six lines, one per difference: the type steps, the price treatment, which button is filled, the spacing rhythm, the image height, and the two state colours.
- **What I nearly missed:** With real type sizes the availability line sat below the fold and read as grey supporting text. The paper test had shown people hunting for exactly that line.

**The wrong turn:** The wrong turn is listing only what improved. The new screen is nicer to look at, so the list writes itself as praise and records nothing you could act on.

**What it costs:** Keeping the wireframe on the table slows the session and invites people to reopen structure you thought was agreed. That is the point of it.

**Still unknown:** Still unknown: whether the availability line is actually too quiet. One person looking at her own screen, knowing where it is, cannot tell.

- Put both versions side by side.
- List what the detail decided that the wireframe had left open.
- List anything that became quiet, cramped or invisible.

**You should end up with:** Two lists: what the added detail decided, and what it made quiet.

Worksheet fields for this step:

- What the added detail decided that the wireframe had left open — Every difference between the two sheets is a decision. Name each one as a decision, not as a change.
- What became quiet, cramped or invisible

<details>
<summary>Help with this step</summary>



Stuck starting? Go difference by difference. For each, finish the sentence “the wireframe left this open, and now it says …”.

Is it enough? Every line in the decided list names a value or a choice, not a category.

</details>

#### 4. Test the craft claims

- View both in greyscale and mark anything you can no longer distinguish.
- Look from arm's length and name the first three things you see.
- Check the order matches what the task needs first.

**You should end up with:** The greyscale result, the first three things you see from arm’s length, and whether that order matches the task.

**Try it with help.** A supplied set of results from the same made-up booking screen. In greyscale the “Book a place” button and the “Add to shortlist” button become the same grey. From arm’s length the first three things seen are the photograph, the class name and the price. The availability line, which the paper test showed people hunting for, is not among them.

Which of these is the most serious problem to repair first?

- **The availability line missing from the first three, because the paper test showed that is what people look for.** — The check is measured against the task, not against the picture. Something people were observed hunting for should not need hunting.
- The two buttons matching in greyscale, because the person cannot tell which action is the main one. — A real problem and second in line. It is repaired by weight or containment, while the missing availability line costs the person the decision itself.
- The photograph arriving first, because an image should not outrank the content. — An image arriving first is often right on a details screen. Judge it by whether it delays the task, and here it does not.
- All three equally, because both checks produced failures. — Both checks did produce findings, and a list with no order sends you to the easiest repair rather than the costliest problem.

**Then:** Rank your own two results the same way: what stops the task, what slows it, what only looks wrong.

Worksheet fields for this step:

- In greyscale: what you can no longer tell apart — Photograph the sheet and turn the photograph greyscale on your phone. That is the whole test.
- From arm’s length: the first three things you see, in order
- Does that order match what the task needs first?

<details>
<summary>Help with this step</summary>

- **Greyscale test:** Looking at the screen with the colour removed, to see whether anything you meant to rank still ranks.

Stuck starting? Do the arm’s-length look first, before you know what you are hoping to see.

Is it enough? Each note names a specific element, not “the hierarchy is weaker”.

</details>

#### 5. Record the trade

- Write the question that is now expensive to reopen.
- Write how you would answer it if you had to.
- Save both versions together; do not discard the wireframe.

**You should end up with:** The question fidelity has made expensive, how you would answer it, where both versions live, and the repair the Check questions asked for.

Worksheet fields for this step:

- The question that is now expensive to reopen — Ask what you would now resist changing. The resistance names the question.
- The cheapest way you could answer it if you had to
- Where both versions live, the wireframe and this one — File names or “paper, in my folder”. Nothing is uploaded.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Look down your decided list and mark the one you would most resist undoing.

Is it enough? The route to an answer is something you could do in an afternoon, on paper if necessary.

</details>

**Save and continue.** Saved for you: Your purpose sentence, both lists, the check results and the trade save as you type, on this device first and then online. Kept outside the app: The screen and the wireframe stay on paper or in your own folder. Write where they live; naming a file does not upload it. What your creator sees: Your creator reads the two lists and the expensive question. Share the two images the way you normally share files if you want him to see them side by side. Your next action: Open Your work and choose Ready for review. The next lesson audits this screen and every other one into a component inventory, so keep them all together.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Replace every string with the real one from your m06 labelling table, then map each text element to a step in your scale.

</details>

<details>
<summary>Hint 2</summary>

Put the two versions side by side and note every difference. Each difference is a decision; name it.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: What fidelity adds, and what it hides.
Task: Take one tested wireframe to interface fidelity and write what the added detail decided, what it hid, and which question can no longer be asked cheaply.
Challenge one thing at a time, and start with the mistake this lesson is about: “High fidelity means the design is further along.” It means the design is more expensive to change. A polished screen built on an untested structure is further from shipping than a rough one built on a tested structure, because the expensive rework is still ahead of it.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the screen with a scale map beside it and ask whether the screen uses real content and a stated type and spacing scale. Look at the decision list and ask whether what the detail decided is listed explicitly. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m08-l01-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The screen uses real content and a stated type and spacing scale: An interface-fidelity screen using your m03 scale, with real labels at their longest rather than sample text. What the detail decided is listed explicitly: A list naming each decision the wireframe had left open and this version has now settled. What became quiet or hidden is identified: A list of elements that lost prominence, plus the greyscale and arm's-length results. The now-expensive question is named with a way to answer it: One structural question that fidelity has made costly, with the cheapest route to an answer.

**Bring forward:** Case-study material: a wireframe and its interface version side by side, with what each decided, shows judgement rather than only output. Module handoff: Support interaction and accessibility in m09–m11


### Practice and pause points

- Choose and read (~20 min): Pick the m07 screen your paper test raised the most problems about. Read the assigned component guidance for one component that appears on it. Write in one sentence what this version of the screen is for.
- Raise the fidelity (~35 min): Apply your m03 type scale and spacing to the screen. Use real content at its longest, not sample text. Settle the button hierarchy, the price treatment and the state colours.
- Compare with the wireframe (~25 min): Put both versions side by side. List what the detail decided that the wireframe had left open. List anything that became quiet, cramped or invisible.
- Test the craft claims (~25 min): View both in greyscale and mark anything you can no longer distinguish. Look from arm's length and name the first three things you see. Check the order matches what the task needs first.
- Record the trade (~15 min): Write the question that is now expensive to reopen. Write how you would answer it if you had to. Save both versions together; do not discard the wireframe.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper and coloured pencils, or one local HTML file with a small stylesheet. A design tool is convenient and not required; hand-written SVG or plain CSS produces a real, exportable screen with no account.

### Output

One screen at interface fidelity, beside its wireframe; A list of what the added detail decided; A list of what the detail hid or made quiet; One question you can no longer ask cheaply, and how you would answer it

### Checks

- Why does a polished screen collect different feedback? Answer: Because people respond to what looks unfinished. Detail signals that ordering decisions are settled, so reviewers move to tone and colour and the structure goes unexamined.
- What makes craft testable rather than a matter of taste? Answer: It asks perceptual questions with answers: can a person tell what is actionable, what changed, what is selected. Those survive greyscale, distance and a first-time viewer.
- Why keep the wireframe after raising fidelity? Answer: Because a structural question will return, and answering it from the rough version costs minutes rather than unpicking a week of detail.

### Rubric and remediation

**The screen uses real content and a stated type and spacing scale**

Adequate evidence: An interface-fidelity screen using your m03 scale, with real labels at their longest rather than sample text.

- 0 — Sample text or invented content.
- 1 — Real content but sizes chosen per element rather than from a scale.
- 2 — Real content at its longest, using the stated scale throughout.
- 3 — As adequate, and a scale step was changed with the reason recorded.

If below 2: Replace every string with the real one from your m06 labelling table, then map each text element to a step in your scale. Show at recheck: The screen with a scale map beside it.

**What the detail decided is listed explicitly**

Adequate evidence: A list naming each decision the wireframe had left open and this version has now settled.

- 0 — No list.
- 1 — A general statement that the design is more detailed.
- 2 — Each settled decision named specifically.
- 3 — As adequate, and one decision is marked as provisional with what would reopen it.

If below 2: Put the two versions side by side and note every difference. Each difference is a decision; name it. Show at recheck: The decision list.

**What became quiet or hidden is identified**

Adequate evidence: A list of elements that lost prominence, plus the greyscale and arm's-length results.

- 0 — Not examined.
- 1 — Examined by impression, with no greyscale or distance check.
- 2 — Both checks run and losses named specifically.
- 3 — As adequate, and one loss is repaired and re-checked.

If below 2: View the screen in greyscale and from two metres. Write down anything you cannot find that the task needs. Show at recheck: The check results and any repair.

**The now-expensive question is named with a way to answer it**

Adequate evidence: One structural question that fidelity has made costly, with the cheapest route to an answer.

- 0 — Not identified.
- 1 — A question named with no route to an answer.
- 2 — Question and route both stated.
- 3 — As adequate, and the route uses the retained wireframe rather than the detailed screen.

If below 2: Ask what you would now resist changing. That resistance names the question. Show at recheck: The question and its route.

### Portfolio contribution

Case-study material: a wireframe and its interface version side by side, with what each decided, shows judgement rather than only output.

### Assigned resources

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — One component that appears on your screen, read for its usage guidance and states rather than its visual style. Purpose: Shows the level of specification a production component carries before anyone builds it. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Do not copy the government visual style or brand; the reasoning transfers, the aesthetic is one design system's. Fallback: R06.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 4, consistency and standards, and heuristic 8, aesthetic and minimalist design. Purpose: Frames craft decisions as questions about recognition and noise rather than taste. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. A heuristic names a candidate problem; the greyscale and distance checks are the evidence in this lesson. Fallback: R11.

## Lesson 2: The component inventory hiding in your screens

Stable ID: m08-l02-v1. Core. Areas 8. Optional effort ~120 min.

**Objective.** Audit your own screens into a component inventory, merge the near-duplicates and record which merges lost a real distinction.

**Bring forward.** Every screen you have drawn in m07 and lesson 1, including the exception states.

Products accumulate seven button styles and four card layouts by accident. An audit turns that into a decision.

### Learn

The useful definition of a component is a pattern that repeats and carries a job: a way to trigger an action, to show the status of something, to represent one item in a list. Anything that appears once is a layout, not a component, and treating it as one produces a library full of single-use entries that nobody can navigate. The test is whether you can name the job and point to two or more places it is done.

Auditing before designing is what keeps the library honest. Screens accumulate variations without anyone choosing them: a button that is 2px taller because it was drawn on a different day, a card with slightly different padding because the content was longer. Laid out side by side these become obviously accidental, and the merge is uncontroversial. Designed from scratch instead, you tend to invent the tidy set you wish existed and then discover it does not cover the real screens.

Not every duplicate is accidental. Two visually similar cards may distinguish a bookable class from a cancelled one, and merging them removes a signal people were relying on even if nobody could articulate it. So each merge needs a sentence: what distinction did these two carry, and what now carries it — colour, position, a label, or nothing. A merge ending in “nothing” is a decision to remove meaning, which is sometimes right and never accidental.

Name by job rather than appearance. “Primary action” survives a redesign; “green button” does not, and the day someone makes it blue the name becomes a small lie that everyone has to remember. The same applies to “card”, which describes a shape rather than a purpose — “class summary” tells a reader what belongs inside it.

**Common misconception.** “We need a design system before we can design.” You need an inventory. A component library invented ahead of real screens describes an imaginary product, and the first week of real work breaks it. Audit what you actually drew, then generalise the parts that repeat.

### Worked example

An audit of nine screens found five button variants: three were the same intent drawn on different days, one was a genuinely different job — a destructive cancel — and one was a link wearing a button's clothes. It found three card layouts that were one card with different content lengths. The merges reduced five buttons to three real jobs and three cards to one, and one merge was recorded as a loss: the cancelled-class card had used a lighter background, and after merging, cancelled status rested entirely on a text label, which was noted as a candidate problem for the next test.

#### The component inventory hiding in your screens

Audit your own screens into a component inventory, merge the near-duplicates and record which merges lost a real distinction.

**Where to practise:** Draw the grouped cut-outs, the comparison rows and the merge table on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Print or sketch every screen, cut out each repeated element and group them on a table. Photograph the groups. This is faster than any tool and shows near-duplicates immediately.

- Starting material: All your m07 screens, including error and empty states.
- Create HaruCourse/Practice/m08-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read one specification

- Read the assigned component page for one component you use.
- Note what it specifies beyond appearance: states, content rules, when not to use it.

**You should end up with:** What one real component specification says beyond how the component looks.

Worksheet fields for this step:

- The component you read about, and what its entry specifies beyond appearance — States, content rules, and when not to use it. Those are the parts you cannot get by looking at a picture.

<details>
<summary>Help with this step</summary>

- **Component:** A repeated pattern with a job. Not any box you happened to draw twice.
- **Inventory:** A list of what already exists in your screens, made before you decide what should exist.

Stuck starting? Choose the entry for something you have actually drawn, then copy out only the lines that are not about appearance.

Is it enough? You have at least one rule about when not to use it.

</details>

#### 2. Cut and group

- Lay out every screen you have, including error and empty states.
- Mark every element that appears more than once.
- Group the marked elements by what they do, not how they look.

**You should end up with:** Every element that appears more than once, grouped by job, with the exception states included.

Worksheet fields for this step:

- How many screens are on the table, and which error, empty and loading states are among them
- Every element that appears more than once, grouped by the job it does — Group by what it does, not how it looks. Two things that look alike and do different jobs belong in different groups.

<details>
<summary>Help with this step</summary>



Stuck starting? Lay every screen out flat, error and empty ones included, and mark anything you have drawn twice.

Is it enough? The exception states are in the pile rather than in a folder.

</details>

#### 3. Find the near-duplicates

**See it first.** Made-up example. Comparing three card layouts on a table, and nearly merging away the one difference that meant something.

- **What I had on the table:** Three class cards cut out of nine screens, laid side by side because they looked like the same thing drawn on different days.
- **What I measured:** Two differed by 4px of padding and nothing else. The third had a lighter background and slightly greyer text.
- **My first move:** I called all three the same card and merged them. It felt like the tidy answer, and the sheet looked better immediately.
- **Why that was wrong:** The lighter card was the cancelled class. The background was not a drawing accident; it was the only thing carrying the status at a glance.
- **What I did instead:** Merged the 4px pair into one card. Kept the cancelled one as the same card with a status variant, and wrote the loss line for a different merge where nothing survived.

**The wrong turn:** The wrong turn is treating every difference as untidiness. Tidying is satisfying, it looks like system-building, and it removes meaning without asking anyone.

**What it costs:** Keeping a variant costs you a second thing to specify and maintain. That is the price of the distinction still existing at all.

**Still unknown:** Still unknown: whether the lighter background was doing the work or the word “Cancelled” was. Cut-outs on a table cannot tell you that.

- Within each group, put visually similar items side by side.
- Record the exact differences: size, weight, padding, colour.
- Mark each difference accidental or meaningful.

**You should end up with:** Each near-duplicate pair compared with the exact difference measured, and marked accidental or meaningful.

**Try it with help.** Six pairs of elements from someone else’s screens, all made up for practice. For each pair, decide whether the two are the same component, genuinely different components, or one component with a variant.

- Two “Book a place” buttons on different screens. Same colour, same weight, same words. One is 44px tall and one is 40px tall, and the two screens were drawn a week apart.
  - **same component** — Same job, same words, and a four-pixel difference nobody could read anything from. That is one component drawn twice.
  - different components — Nothing about the job differs. Two components means two jobs, and both of these book a class.
  - one component with a variant — A variant exists to carry a difference on purpose. Four pixels of height carries nothing, so there is no variant to keep.
- Three class cards that look different because one class has a two-word name, one has a nine-word name, and one has no photograph.
  - **same component** — The differences come from the content, not from any decision you made. One card that copes with long names and a missing photograph.
  - different components — They do the same job on the same list. What changed is what was poured into them.
  - one component with a variant — A variant would mean you chose to treat these classes differently. Here the content simply differs in length.
- Two class cards, identical except that the cancelled class sits on a lighter background with greyer text.
  - same component — This is the merge that quietly costs you something. Merge them and the cancelled status rests entirely on a text label, which is exactly the trap this lesson is about.
  - different components — The job is the same: show one class in a list. Only the status differs, which is what a variant is for.
  - **one component with a variant** — Same job, and a deliberate difference carrying the status. Keep it as a variant and write down what the variant means.
- Two message strips at the top of the page. Same width, same layout. One says the booking failed; the other says the place is held for ten minutes.
  - same component — Merging them means one wording, one icon and one duration for both. A failure and a countdown do not want the same behaviour.
  - different components — They sit in the same place and do the same job of announcing something. Splitting them into two components duplicates everything they share.
  - **one component with a variant** — One message strip with variants for failure and progress. The variant is what carries the different icon, wording and duration.
- Two things that look like the same filled button. One submits the booking. The other takes the person to a different page about class materials.
  - same component — They look alike and that is all. One does something and one goes somewhere, which people need to be able to tell apart before they press.
  - **different components** — Different jobs, so different components. A link that goes somewhere should not wear a button’s clothes.
  - one component with a variant — A variant is for the same job under different conditions. Going somewhere is not a condition of submitting.
- Two actions drawn with the same fill and weight. One books a place. The other cancels a booking and releases the place immediately, with no way back.
  - same component — The drawing matches and the jobs do not. Merging them means the irreversible action inherits the emphasis of the everyday one.
  - **different components** — A destructive action is its own job. It needs its own placement, its own spacing and its own confirmation, so it is its own component.
  - one component with a variant — Tempting, and it puts something irreversible one small setting away from something routine. This lesson keeps it separate.

**Then:** Now take your own hardest pair and give it one of these three labels. Write the exact difference on the line first, then decide.

**What to watch for:** Look back at the two hardest, the cancelled card and the two booking buttons. The question is never how big the difference is. It is whether a person could tell anything from it. Four pixels of padding tells nobody anything. A lighter background on a cancelled class tells them the class is off.

Worksheet fields for this step:

- Each near-duplicate pair, with the exact difference measured — Put each pair on one line and measure it. “Slightly different” is not a finding; 4px is.
- Each difference marked accidental or meaningful, and what tells you which

<details>
<summary>Help with this step</summary>

- **Near-duplicate:** Two things that are almost the same. The gap between them is the finding, whether it turns out to be an accident or a meaning.
- **Variant:** One component with a deliberate difference that carries something: a status, a size, a level of emphasis.

Stuck starting? Put one pair side by side and measure the difference before you form an opinion about it.

Is it enough? Every row names a number or a property, and no row says slightly, a bit or roughly.

</details>

#### 4. Merge and record the losses

- Merge accidental variants into one component.
- For each merge write what distinction the two carried.
- Write what now carries that distinction, or that nothing does.

**You should end up with:** The merges you made, what each pair distinguished, and what carries that distinction now.

Worksheet fields for this step:

- What you merged into what
- For each merge: the distinction the two versions carried, and what carries it now
- Merges where nothing now carries the distinction — Write these down even when you think they are fine. They are the candidates for the next test.

<details>
<summary>Help with this step</summary>



Stuck starting? For each merge, ask what a person could tell before that they cannot tell now.

Is it enough? Every merge has an answer, including the ones where the answer is “nothing was lost”.

</details>

#### 5. Name by job

- Rename every component after the job it does.
- Remove any name describing colour, size or shape.
- Save the inventory, the merge table and the loss list.

**You should end up with:** Job-based names for every component you kept, the appearance words you removed, where the inventory lives, and the repair the Check questions asked for.

Worksheet fields for this step:

- Every component you kept, named after the job it does
- The appearance words you removed from names
- Where the inventory, the merge table and the loss list live — Photographs of the grouped cut-outs count. Note the file names; nothing is uploaded.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Rename the one with the most decorative name first; the rest follow easily.

Is it enough? No name contains a colour, a size or a shape.

</details>

**Save and continue.** Saved for you: The inventory, the comparison rows, the merge table and the loss list save as you type, on this device first and then online. Kept outside the app: The cut-outs and their groups stay on your table. Photograph the groups and note the file names here; naming a file does not upload it. What your creator sees: Your creator reads the loss list first. It shows whether you reduced on purpose or tidied by instinct. Your next action: Open Your work and choose Ready for review. The next lesson takes the action components out of this inventory and specifies them properly.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Go through the error, empty and loading screens specifically; they usually hold the elements the audit missed.

</details>

<details>
<summary>Hint 2</summary>

Put each pair on one line and measure. “Slightly different” is not a finding; 4px is.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: The component inventory hiding in your screens.
Task: Audit your own screens into a component inventory, merge the near-duplicates and record which merges lost a real distinction.
Challenge one thing at a time, and start with the mistake this lesson is about: “We need a design system before we can design.” You need an inventory. A component library invented ahead of real screens describes an imaginary product, and the first week of real work breaks it. Audit what you actually drew, then generalise the parts that repeat.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the extended inventory and ask whether every repeated element is inventoried with its job. Look at the comparison table and ask whether near-duplicates are compared with exact differences recorded. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m08-l02-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every repeated element is inventoried with its job: An inventory covering all your screens including exception states, each entry naming the job it does. Near-duplicates are compared with exact differences recorded: Side-by-side comparisons naming the specific difference — size, weight, padding, colour — for each near-duplicate. Merges that lost a distinction are named: A loss list stating, for each merge, what the two variants distinguished and what now carries it. Components are named by job, not appearance: A name per component describing purpose, with no colour, size or shape words.

**Bring forward:** Good case-study evidence of systems thinking: an audit with merges and named losses shows you reduce deliberately rather than tidy by instinct. Module handoff: Support interaction and accessibility in m09–m11


### Practice and pause points

- Read one specification (~20 min): Read the assigned component page for one component you use. Note what it specifies beyond appearance: states, content rules, when not to use it.
- Cut and group (~35 min): Lay out every screen you have, including error and empty states. Mark every element that appears more than once. Group the marked elements by what they do, not how they look.
- Find the near-duplicates (~25 min): Within each group, put visually similar items side by side. Record the exact differences: size, weight, padding, colour. Mark each difference accidental or meaningful.
- Merge and record the losses (~25 min): Merge accidental variants into one component. For each merge write what distinction the two carried. Write what now carries that distinction, or that nothing does.
- Name by job (~15 min): Rename every component after the job it does. Remove any name describing colour, size or shape. Save the inventory, the merge table and the loss list.

Pause after any step; save the artifact and next action.

**Free tool path.** Print or sketch every screen, cut out each repeated element and group them on a table. Photograph the groups. This is faster than any tool and shows near-duplicates immediately.

### Output

A component inventory listing every repeated element and its job; A merge table: what was merged and what distinction it carried; A list of merges that lost a distinction, with what now carries it; Job-based names for every component you keep

### Checks

- What makes something a component rather than a layout? Answer: It repeats and carries a nameable job. If it appears once, it is a layout; putting it in a library adds an entry nobody can reuse.
- Why audit before designing the set? Answer: Because a set invented ahead of real screens describes an imaginary product. The audit shows which variations are accidental and which are load-bearing.
- Why name components by job? Answer: Because appearance changes. “Primary action” survives a restyle; “green button” becomes a lie the whole team has to remember around.

### Rubric and remediation

**Every repeated element is inventoried with its job**

Adequate evidence: An inventory covering all your screens including exception states, each entry naming the job it does.

- 0 — A list of screens rather than components.
- 1 — Components listed without jobs, or only from the happy path.
- 2 — Every repeated element from every screen, each with a job.
- 3 — As adequate, and single-use elements are marked as layouts rather than promoted to components.

If below 2: Go through the error, empty and loading screens specifically; they usually hold the elements the audit missed. Show at recheck: The extended inventory.

**Near-duplicates are compared with exact differences recorded**

Adequate evidence: Side-by-side comparisons naming the specific difference — size, weight, padding, colour — for each near-duplicate.

- 0 — Near-duplicates not identified.
- 1 — Identified but differences described as “slightly different”.
- 2 — Exact differences recorded for each pair.
- 3 — As adequate, and each difference is marked accidental or meaningful with a reason.

If below 2: Put each pair on one line and measure. “Slightly different” is not a finding; 4px is. Show at recheck: The comparison table.

**Merges that lost a distinction are named**

Adequate evidence: A loss list stating, for each merge, what the two variants distinguished and what now carries it.

- 0 — Merges made with no record.
- 1 — Merges recorded but losses not examined.
- 2 — Every merge states the distinction and its new carrier, including “nothing”.
- 3 — As adequate, and each “nothing” row is either repaired or listed as a candidate problem to test.

If below 2: For each merge, ask what a person could tell before that they cannot tell now. Write the answer even when it is “nothing”. Show at recheck: The loss list.

**Components are named by job, not appearance**

Adequate evidence: A name per component describing purpose, with no colour, size or shape words.

- 0 — Names describe appearance.
- 1 — Mixed naming.
- 2 — All names describe the job.
- 3 — As adequate, and one name was changed because the component turned out to do two jobs, which were split.

If below 2: Search your names for colour and shape words and rewrite each as what the element is for. Show at recheck: The renamed inventory.

### Portfolio contribution

Good case-study evidence of systems thinking: an audit with merges and named losses shows you reduce deliberately rather than tidy by instinct.

### Assigned resources

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — Two components you use, read for what each specifies: states, content rules and when not to use it. Purpose: Sets the standard for what a component entry must say beyond how it looks. Effort: 45–60 selected min. Free reading, no account. Verified 2026-09-06. It is one organisation's library for government services; borrow the specification habit, not the components or the brand. Fallback: R06.
- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — The layout and spacing sections. Purpose: Gives the spacing vocabulary that makes accidental variants visible as accidents. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Rebuild the reasoning rather than copying the values; the scale is one considered option. Fallback: R03.

## Lesson 3: Actions: hierarchy, targets and labels

Stable ID: m08-l03-v1. Core. Areas 8. Optional effort ~120 min.

**Objective.** Specify your action components at three levels of emphasis with measured target sizes and verb-first labels, and prove the hierarchy survives greyscale.

**Bring forward.** The action components from your inventory and the screens they appear on.

If a person cannot tell in a glance which action is the main one, every screen costs a decision it did not need to.

### Learn

Emphasis is comparative, so a hierarchy exists only if the levels differ in more than one dimension. A primary action that differs from a secondary one only by colour disappears for a person with a colour-vision deficiency, in bright sunlight, or in a greyscale printout — and those are the ordinary conditions your booking screen will meet on a phone outside. Containment, weight and size are what carry emphasis reliably; colour is a reinforcement, not the signal.

One primary per screen is a structural rule more than a visual one. When you find two, the honest reading is usually that the screen is doing two jobs, and the fix is to split the screen or to decide which job it is actually for. Screens with three primaries teach people to read everything as equally urgent, after which nothing is emphasised at all.

Labels carry more weight than the styling. “Submit” describes what the software does; “Book a place” describes what the person gets, and a person scanning for their outcome finds the second and not the first. Verb-first labels also make destructive actions honest: “Cancel booking” beside “Keep booking” is unambiguous, while “Yes” and “No” beside a question people did not read carefully is a trap.

Target size is a physical property, not a style. A control that is comfortable with a mouse can be unreachable with a thumb on a moving bus, and a destructive action sitting next to a common one converts a slip into a loss. Give consequential actions space as well as size, and put distance between actions whose outcomes differ sharply.

**Common misconception.** “Make the important button a stronger colour.” Colour alone is the weakest available signal: it fails in greyscale, in sunlight, for some readers, and when your palette is later changed by someone else. Carry emphasis in weight, size and containment first, then add colour.

### Worked example

A screen had two filled buttons of equal weight — “Book a place” and “Add to shortlist” — and a text link for “Cancel booking”. In greyscale the two filled buttons were indistinguishable, and in the m07 paper test one participant had tapped the shortlist button believing she had booked. The repair made booking the only filled action, shortlist an outlined secondary, and cancellation a quiet action moved away from both with its own confirmation. Targets were measured rather than eyeballed, and the destructive action was given clear separation from the primary one.

#### Actions: hierarchy, targets and labels

Specify your action components at three levels of emphasis with measured target sizes and verb-first labels, and prove the hierarchy survives greyscale.

**Where to practise:** Draw the three action levels at real size and their greyscale photograph on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Draw the three levels at real size on paper, photograph them and convert the photograph to greyscale on your phone. Measure targets with a ruler against your own screen; no plugin or tool is needed.

- Starting material: Your component inventory and the screens using its actions.
- Create HaruCourse/Practice/m08-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

<details>
<summary>Optional video paired with step 1</summary>

[Web Accessibility Perspectives: Large Links, Buttons, and Controls](https://www.w3.org/WAI/perspective-videos/controls/) — W3C Web Accessibility Initiative, 33 s, English, English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page. Whole video, 33 seconds. Watch from 0:05 to 0:28.

What to notice:

- 0:05–0:12 — Hitting a small target takes effort, and many sites try to thread the needle.
- 0:13–0:18 — The area for clicking and tapping can be made larger and easier to hit.
- 0:18–0:24 — That matters most on a phone, and especially when somebody is moving at the time.
- 0:24–0:28 — It is critical for people with reduced dexterity.

**Then:** Straight after watching, mark the smallest thing on your screen somebody has to hit, and measure it. The video argues for larger targets; the measurement is yours.

**Without the video:** No video needed: find the smallest control on your screen and measure it against your own fingertip on the paper. Record the number either way.

A threading-a-needle metaphor and generic web scenes, not your screens. It argues for larger targets; it gives no measurement, which is what your own step does. Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use. Checked 7 September 2026.

</details>

#### 1. Read and audit

- Read the assigned button guidance and the law page on target size.
- List every action across your screens and mark its current emphasis.
- Mark any screen carrying more than one primary action.

**You should end up with:** Every action across your screens with its current emphasis, and any screen carrying more than one main action.

Worksheet fields for this step:

- Each action, the screen it is on, and the emphasis it currently has — One action per line. Write them all down before judging any of them.
- Screens carrying more than one main action

<details>
<summary>Help with this step</summary>

- **Primary action:** The outcome the screen exists to produce. One per screen; two means the screen has two jobs.
- **Target:** The area a finger can actually hit, which is usually larger than the part you drew.

Stuck starting? Go screen by screen and write each action on its own line, including the ones you think are obvious.

Is it enough? Every screen appears in the list, including the ones with only one action on them.

</details>

#### 2. Specify three levels

**See it first.** Made-up example. Defining three levels of emphasis in five minutes, then finding out that colour had been doing all the work.

- **What I wrote first:** Primary is the brand green, secondary is grey, quiet is a text link. It took five minutes and it looked like a specification.
- **The test:** Drew the three at real size on paper, photographed the sheet, and turned the photograph greyscale on my phone.
- **What the greyscale showed:** The green and the grey filled buttons became the same mid-grey. Two actions of equal weight, and no way to tell which one the screen was for.
- **What I changed:** Primary: filled, semibold, full-width container. Secondary: outlined, medium weight, same height as primary. Quiet: no container, regular weight, one step smaller.
- **What colour ended up doing:** Colour went on last and repeats the ranking rather than making it. Remove it now and the three levels still rank.

**The wrong turn:** The wrong turn is settling the emphasis with colour, because it is the fastest control and it looks convincing on your own screen in good light.

**What it costs:** Three levels separated by weight and containment look plainer than three colours. Plain is what survives greyscale, sunlight, and somebody else changing the palette next year.

**Still unknown:** Still unknown: whether the outlined secondary reads as pressable to a person who has never used the product. That is a question for a test, not for the specification.

- Define primary, secondary and quiet with weight, size and containment.
- Make each level differ from the next in at least two properties.
- Add colour last, as reinforcement rather than as the signal.

**You should end up with:** Three levels defined by weight, size and containment, each differing from the next in at least two properties.

**Try it with help.** Six actions from someone else’s screens, all made up for practice. Each line says what the screen is for, then names one action on it. Decide whether that action is the screen’s primary, a secondary one, or a quiet one.

- Class details screen, which exists so a person can decide about one class and take it. The action: “Book a place”.
  - **primary** — It is the outcome the screen exists to produce, so it holds the fill and the weight. One screen, one job, one primary.
  - secondary — A secondary action is one a person might reasonably take instead. Demote this and the screen is left with no job at all.
  - quiet — Quiet is for actions that must exist and rarely apply. Booking is the reason the person opened the screen.
- The same class details screen. The action: “Add to shortlist”, currently drawn as a second filled button of exactly the same weight as booking.
  - primary — That is the trap the screen is already in. Two filled buttons of equal weight means two primaries, and a person can press one believing she pressed the other.
  - **secondary** — It is a genuine alternative and it is not what the screen is for. Outline it, keep the height, and let booking hold the fill.
  - quiet — Quiet would hide a choice people really make. Secondary keeps it available without competing with the booking.
- The same class details screen. The action: “Share this class”, currently a small text link near the bottom.
  - primary — Nobody opens a class page in order to share it, and raising it takes attention from the action that pays for the screen.
  - secondary — Secondary is the alternative to the main outcome. Sharing is not an alternative to booking; it is an extra.
  - **quiet** — It must exist, it is used rarely, and it costs nothing to leave unshouted. Quiet is exactly right.
- Payment screen at the end of a booking, which exists to take the payment. The action: “Pay 45 pounds”.
  - **primary** — The screen has one job and this is it. The label carries the amount so the person is not paying blind.
  - secondary — Everything else on this screen exists to support the payment. Making the payment secondary leaves nothing for it to be secondary to.
  - quiet — A quiet payment button is an unfinished booking. This is the outcome the whole flow was building towards.
- The same payment screen. The action: “Change the date”, which sends the person back one step in the booking.
  - primary — Going backwards is not what the screen is for, and a filled back-step competes with the payment for attention.
  - **secondary** — It is the reasonable alternative to paying now, so it stays visible and outlined rather than filled.
  - quiet — Quiet would bury a correction people need at exactly this moment, when they are checking the details for the last time.
- Booking detail screen, which exists so a person can check a booking she already holds and change the date if she needs to. The action: “Cancel this booking”, which releases the place immediately.
  - primary — Consequence is not emphasis. Making the irreversible action the loudest thing on the screen is how it gets pressed by mistake.
  - secondary — Secondary sits beside the main action and invites comparison. A destructive action wants distance rather than a neighbouring position.
  - **quiet** — It is rare and it is serious, and its safety comes from separation and a confirmation rather than from weight.

**Then:** Now label every action on your own list from step 1 with one of these three. Any screen that ends up with two primaries goes on your list of screens to split.

**What to watch for:** Look back at the two hardest, the shortlist button and the cancellation. Emphasis is not how much the action matters. It is whether the action is the outcome this screen exists to produce. Shortlisting matters and is not the outcome. Cancelling matters enormously and still is not the outcome of that screen.

Worksheet fields for this step:

- Primary: weight, size and containment
- Secondary: weight, size and containment
- Quiet: weight, size and containment
- Which two properties separate each level from the next, and what colour is doing — If a level differs from its neighbour by colour alone, it is not yet a level.

<details>
<summary>Help with this step</summary>

- **Containment:** Whether the action sits inside a shape: filled, outlined, or nothing at all. A cheap signal that survives greyscale.
- **Greyscale test:** Looking at the screen with the colour removed. Anything you can no longer rank was ranked by colour alone.

Stuck starting? Write the quiet level first. It is the easiest to define, and the other two are then differences from it.

Is it enough? Each level differs from its neighbour in two properties before colour is added.

</details>

#### 3. Rewrite the labels

- Rewrite each label to lead with the verb of the person's outcome.
- Replace every OK, Submit, Yes and No.
- Pair destructive labels with an explicit safe alternative.

**You should end up with:** Every action label rewritten to lead with the verb of the outcome, and every destructive label paired with a safe alternative.

Worksheet fields for this step:

- Each label as it was, and as you rewrote it — Read each one aloud as the sentence “I want to …”. Rewrite any that does not finish it.
- Each destructive label and the safe alternative beside it

<details>
<summary>Help with this step</summary>



Stuck starting? Start with any label that is OK, Submit, Yes or No, since those carry no outcome anywhere.

Is it enough? Every label finishes the sentence “I want to …” on its own, without the question above it.

</details>

#### 4. Measure and test

- Measure each target's size and the spacing around it at phone size.
- Increase spacing between actions with sharply different outcomes.
- View every screen in greyscale and mark anything you cannot rank.

**You should end up with:** Measured target sizes and spacing at phone size, the spacing you increased, and what greyscale left unrankable.

Worksheet fields for this step:

- Measured size and surrounding spacing for each level, at phone size — Print or draw at real size and use a ruler. Estimates are the thing this step exists to replace.
- Where you increased spacing, and between which two actions
- In greyscale: which actions you can no longer rank

<details>
<summary>Help with this step</summary>



Stuck starting? Draw or print at real size and try each action with your thumb before reaching for the ruler.

Is it enough? Every number came from measuring, and no line says “looks big enough”.

</details>

#### 5. Fix and record

- Repair the worst greyscale failure by changing weight or containment.
- Record any screen you split because it had two primaries.
- Save the specification with the greyscale evidence.

**You should end up with:** The repaired greyscale failure, any screen you split, and the repair the Check questions asked for.

Worksheet fields for this step:

- The worst greyscale failure, and the weight or containment change that repaired it
- Any screen you split because it had two main actions, and the two jobs it was doing
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Change one property at a time and re-photograph, so you know which change did the work.

Is it enough? You can name the property that fixed it, not just that it is fixed.

</details>

**Save and continue.** Saved for you: The action list, the three levels, the labels and the measurements save as you type, on this device first and then online. Kept outside the app: The real-size drawings and the greyscale photograph stay in your own folder. Note the file names here; naming a file does not upload it. What your creator sees: Your creator reads the greyscale photograph beside the specification. The photograph is the evidence; the specification is the claim. Your next action: Open Your work and choose Ready for review. The next lesson takes one form to production quality, and it reuses these three levels for its buttons.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Convert your buttons to greyscale. If you cannot rank them, change weight or containment until you can, then note which change did it.

</details>

<details>
<summary>Hint 2</summary>

For each screen with two primaries, write the two jobs it is doing. Then choose one or split the screen.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Actions: hierarchy, targets and labels.
Task: Specify your action components at three levels of emphasis with measured target sizes and verb-first labels, and prove the hierarchy survives greyscale.
Challenge one thing at a time, and start with the mistake this lesson is about: “Make the important button a stronger colour.” Colour alone is the weakest available signal: it fails in greyscale, in sunlight, for some readers, and when your palette is later changed by someone else. Carry emphasis in weight, size and containment first, then add colour.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the greyscale rendering and the revised specification and ask whether three levels differ in at least two properties each. Look at the per-screen list and any split and ask whether one primary action per screen, or the screen was split. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m08-l03-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Three levels differ in at least two properties each: A specification giving weight, size and containment per level, plus a greyscale rendering where the ranking is still readable. One primary action per screen, or the screen was split: A per-screen list showing a single primary, with any exception justified or resolved by splitting. Labels lead with the verb of the outcome: Every action label rewritten as the person's outcome, with no OK, Submit, Yes or No remaining. Targets and spacing are measured, not estimated: Recorded measurements at phone size for each level, and increased spacing around consequential actions.

**Bring forward:** Portfolio material with proof attached: a greyscale hierarchy test and measured targets are concrete, checkable craft evidence. Module handoff: Support interaction and accessibility in m09–m11


### Practice and pause points

- Read and audit (~20 min): Read the assigned button guidance and the law page on target size. List every action across your screens and mark its current emphasis. Mark any screen carrying more than one primary action.
- Specify three levels (~30 min): Define primary, secondary and quiet with weight, size and containment. Make each level differ from the next in at least two properties. Add colour last, as reinforcement rather than as the signal.
- Rewrite the labels (~25 min): Rewrite each label to lead with the verb of the person's outcome. Replace every OK, Submit, Yes and No. Pair destructive labels with an explicit safe alternative.
- Measure and test (~30 min): Measure each target's size and the spacing around it at phone size. Increase spacing between actions with sharply different outcomes. View every screen in greyscale and mark anything you cannot rank.
- Fix and record (~15 min): Repair the worst greyscale failure by changing weight or containment. Record any screen you split because it had two primaries. Save the specification with the greyscale evidence.

Pause after any step; save the artifact and next action.

**Free tool path.** Draw the three levels at real size on paper, photograph them and convert the photograph to greyscale on your phone. Measure targets with a ruler against your own screen; no plugin or tool is needed.

### Output

Three action levels specified: primary, secondary and quiet; A greyscale test showing the hierarchy still readable; Measured target sizes and spacing for each level; Verb-first labels for every action on your screens

### Checks

- Why must emphasis differ in more than one property? Answer: Because a single property fails in ordinary conditions — greyscale, sunlight, colour-vision deficiency, a later palette change. Two properties keep the ranking readable when one is lost.
- What does a screen with two primary actions usually mean? Answer: That it is doing two jobs. Deciding which job the screen is for, or splitting it, is the real fix; restyling one button hides the problem.
- Why does “Submit” lose to “Book a place”? Answer: Because people scan for their own outcome, not for the system's operation. The verb of the outcome is findable; the system's verb has to be translated first.

### Rubric and remediation

**Three levels differ in at least two properties each**

Adequate evidence: A specification giving weight, size and containment per level, plus a greyscale rendering where the ranking is still readable.

- 0 — Levels differ by colour only.
- 1 — Two properties differ but the greyscale test was not run.
- 2 — Two or more properties per level, verified in greyscale.
- 3 — As adequate, and the specification says which property carries the ranking when colour is unavailable.

If below 2: Convert your buttons to greyscale. If you cannot rank them, change weight or containment until you can, then note which change did it. Show at recheck: The greyscale rendering and the revised specification.

**One primary action per screen, or the screen was split**

Adequate evidence: A per-screen list showing a single primary, with any exception justified or resolved by splitting.

- 0 — Multiple primaries left in place.
- 1 — Identified but unresolved.
- 2 — One primary per screen, or a recorded split.
- 3 — As adequate, and a screen that resisted splitting is documented with the trade-off accepted.

If below 2: For each screen with two primaries, write the two jobs it is doing. Then choose one or split the screen. Show at recheck: The per-screen list and any split.

**Labels lead with the verb of the outcome**

Adequate evidence: Every action label rewritten as the person's outcome, with no OK, Submit, Yes or No remaining.

- 0 — System vocabulary retained.
- 1 — Mostly rewritten, with generic labels left on confirmations.
- 2 — All labels are verb-first outcomes, including destructive pairs.
- 3 — As adequate, and one label was lengthened deliberately to remove ambiguity.

If below 2: Read each label aloud as the sentence “I want to …”. Rewrite any that does not complete it. Show at recheck: The label list.

**Targets and spacing are measured, not estimated**

Adequate evidence: Recorded measurements at phone size for each level, and increased spacing around consequential actions.

- 0 — No measurements.
- 1 — Sizes recorded but spacing near destructive actions unexamined.
- 2 — Sizes and spacing measured, with separation added where outcomes differ sharply.
- 3 — As adequate, and the check was done with a thumb on a real device rather than a cursor.

If below 2: Print the screen at real size and try each action with your thumb. Anything you hit twice or mis-hit needs size or space. Show at recheck: The measurements and the thumb-test note.

### Portfolio contribution

Portfolio material with proof attached: a greyscale hierarchy test and measured targets are concrete, checkable craft evidence.

### Assigned resources

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — The button component, read for variants, when to use each and its content guidance. Purpose: Gives a worked specification of action emphasis and labelling from a production library. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Its variants suit government transactional services; take the specification and the labelling reasoning, not the colours. Fallback: R06.
- R31: [Laws of UX](https://lawsofux.com/) — The assigned pages only: fittss-law and law-of-proximity. Purpose: Explains why target size, distance and grouping change how quickly and safely an action is hit. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. The site publishes no caveats: a law describes a tendency, and your measured thumb test is the evidence. A printed poster is sold and also offered free; no purchase is required. Fallback: R02.

## Lesson 4: Inputs and forms at production quality

Stable ID: m08-l04-v1. Core. Areas 8. Optional effort ~120 min.

**Objective.** Take one form to production quality with persistent labels, inline help, field-level errors that preserve input, and a keyboard pass recorded honestly.

**Bring forward.** The form from your m07 authentication or booking flow, with its message wording.

Forms are where products lose people who had already decided to say yes.

### Learn

A persistent label is not a style preference. Once someone types, a placeholder is gone, and with it the only statement of what the field wanted — which matters most when they return to check before submitting, or when an error sends them back to a field they filled ten minutes ago. The assigned tutorial covers labels, instructions, validation and notifications precisely, and its requirements are the floor rather than an aspiration.

Help placed before the field prevents the error; help placed in the error message only explains it. If a password needs a number, say so under the label, not after a rejected attempt. This is the cheapest quality improvement in most forms, and it is invisible in a screenshot, which is why it survives so rarely from wireframe to build unless you specify it.

Errors have three obligations: appear at the field they concern, say what to do rather than what went wrong, and preserve everything already entered. A page-level “There is a problem” summary is useful in addition, particularly for someone using a screen reader, but it must link to the field. Clearing a form after an error is the single most reliable way to end a session.

Be generous about input. People paste card numbers with spaces, write phone numbers with country codes or without, capitalise names differently, and type dates in the format they grew up with. Rejecting those is a decision to make the person work for your parser. Normalise on your side, echo back what you understood, and reserve rejection for what you genuinely cannot interpret.

**Common misconception.** “Inline validation on every keystroke helps people.” Validating a half-typed email as invalid teaches people they are failing while they are still working. Validate on leaving the field, or on submission, and reserve immediate feedback for things that can only improve — like a strength meter that never says “wrong”.

### Worked example

A booking form used placeholders as labels, validated the phone number on every keystroke, and cleared the form on a failed submission. Rebuilt: labels above every field and permanently visible; a line under the phone field saying which formats are accepted; validation on leaving the field; errors shown at the field with the fix stated; and everything preserved after a failure, with the page-level summary linking to the first problem. A keyboard pass found that the date control could be reached but not operated without a mouse, which was recorded as an implementation issue rather than claimed as fixed.

#### Inputs and forms at production quality

Take one form to production quality with persistent labels, inline help, field-level errors that preserve input, and a keyboard pass recorded honestly.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Specify the form on paper with the exact wording for label, help and error per field. To test behaviour, one local HTML file with labelled inputs shows tab order and error handling honestly with no framework or account.

- Starting material: One m07 form and the error wording you already wrote.
- Create HaruCourse/Practice/m08-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read the requirements

- Read the assigned sections on labels, instructions, validation and notifications.
- List the rules you will apply to every field.
- Mark which rules your current form breaks.

**You should end up with:** The rules you will apply to every field, and the ones your form breaks today.

Worksheet fields for this step:

- The rules you will apply to every field on this form — Labels, help text, error wording, accepted formats, and when validation runs. One rule per line.
- Which of those rules your form breaks today, field by field

<details>
<summary>Help with this step</summary>

- **Persistent label:** The name of the field, sitting above it and staying visible after the person has typed.
- **Help text:** A short line under the label saying what you accept, shown before anyone makes the mistake.

Stuck starting? Take one field of your own and write down every rule you would want applied to it. Those are your rules.

Is it enough? Each rule is specific enough that you could tell whether a field obeys it.

</details>

#### 2. Write the field table

**See it first.** Made-up example. Writing the field table for a booking form, starting from a version where the labels were placeholders.

- **What I had:** Six boxes with grey text inside them: Name, Email, Phone, Date, Places, Notes. It looked calm and modern and I was pleased with it.
- **What I wrote first:** A tidier version of the same thing. I kept the placeholders and spent the time on the spacing between the boxes.
- **What broke it:** I filled the form in myself and looked away for a minute. Coming back, four boxes held text and not one of them said what the text was.
- **The rule I took from it:** Every field keeps its name above it, always visible. The grey text either goes, or becomes help under the label where it can stay.
- **What the row became:** Phone number as the label; “we send the class reminder here, any format is fine” as help; and an error that names the fix rather than restating the rule.

**The wrong turn:** The tempting error is using the placeholder as the label. It is the neatest-looking form you will ever draw, and it erases every label exactly when someone reads back what they entered.

**What it costs:** Persistent labels cost vertical space, so a phone form gets longer and people scroll more. Scrolling is cheaper than re-typing a form you cannot read back.

**Still unknown:** Still unknown: whether the help line under the phone field is read at all. Only watching someone fill the form in would tell you that.

- For each field write its label, its help text and its error wording.
- State the input formats you will accept without complaint.
- Delete any field you cannot justify by a decision it serves.

**You should end up with:** A row for each field: label, help text, error wording and the formats you accept.

Worksheet fields for this step, revealed a few at a time in the app:

- Field 1 · label, help text, error wording, and the formats you accept — If you cannot say what decision the field serves, delete the field instead of designing it.
- Field 2 · label, help text, error wording, and the formats you accept
- Field 3 · label, help text, error wording, and the formats you accept
- Field 4 · label, help text, error wording, and the formats you accept
- Field 5 · label, help text, error wording, and the formats you accept

<details>
<summary>Help with this step</summary>

- **Placeholder:** The grey sample text inside an empty box. It disappears the moment the person types, which is when they need it most.

Stuck starting? Write the label first, then the error, then ask what help would have prevented that error.

Is it enough? Every row names a format you accept without complaint, not only the ones you reject.

</details>

#### 3. Move help before the mistake

- Find each error caused by a rule people could not know.
- Move that rule under the label as help text.
- Keep the error message for the case where help was missed.

**You should end up with:** One rule moved from an error message into help text, and the error you kept anyway.

Worksheet fields for this step:

- The rule you moved out of an error message and into help under the label — Look for any error that teaches a rule the person had no way of knowing before they typed.
- The error wording you kept for the person who missed the help

<details>
<summary>Help with this step</summary>



Stuck starting? Read your error messages aloud and mark any that teach a rule for the first time.

Is it enough? At least one rule now appears before the field rather than after the mistake.

</details>

#### 4. Design the failure path

- Specify that all entered values are preserved after a failed submission.
- Add a page-level summary that links to the first field with a problem.
- State when validation runs: on leaving a field, or on submission.

**You should end up with:** The failure path written out: what survives, what the summary says, and when validation runs.

**Try it with help.** A supplied booking form, made up for practice. Someone fills in six fields, mistypes the card expiry date, and presses Book. The page reloads with a red banner reading “There was a problem. Please try again.” and all six fields empty.

What is the most serious thing wrong with this screen?

- **The six fields were cleared, so one mistake has cost the person five answers that were right.** — Losing the input is the only failure here that takes back work already done. The rest of this screen is irritating; this is the part that makes people give up and ring instead.
- The banner does not say which field was wrong. — A real problem and the second one to fix. It costs the person a hunt through the form, while the cleared fields cost them the form itself.
- The message is red, and some people cannot distinguish that. — Carrying meaning in colour alone is a genuine fault, and it matters more once the message actually says something. Here the wording is empty whatever colour it is.
- The form validated on submission rather than as the person typed. — Validating on submission is a reasonable choice. Checking a half-typed expiry date on every keystroke tells someone they are wrong while they are still working.

**Then:** Write your own failure path so every value survives, the summary names the first field with a problem, and the error sits at that field.

Worksheet fields for this step:

- What the screen shows one second after a failed submission, field by field — Write it as a description of the screen. Anything you do not describe will be decided by whoever builds it.
- What the summary at the top of the form says, and where it takes the person
- When validation runs on this form (When the person leaves a field / When the form is submitted / On leaving a field and again on submission / On every keystroke)

<details>
<summary>Help with this step</summary>



Stuck starting? Describe the screen one second after a failed submission, as though you were looking at it.

Is it enough? Nothing a person typed is missing from your description.

</details>

#### 5. Keyboard pass and record

- Tab through the form and note the order and whether focus is visible.
- Record anything you could not verify without building it.
- Save the field table and the keyboard notes.

**You should end up with:** A keyboard pass written down honestly, including what you could not check.

Worksheet fields for this step:

- The order the keyboard moved through the form, and whether you could see where you were
- What you could not check without a built version, stated plainly — A named gap is evidence. A guess written as a result is not.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Keyboard pass:** Moving through a form using only the tab key and the arrow keys, writing down where you land and whether you can see it.
- **Focus:** The place the keyboard is pointing at right now. If you cannot see it, you cannot use the form without a mouse.

Stuck starting? If nothing of yours is built, tab through a booking form on a real site instead, note how it behaves, and then say plainly that yours is untested.

Is it enough? Every keyboard claim is either something you did or something you have marked as unchecked.

</details>

**Save and continue.** Saved for you: The field table, the failure path and the keyboard notes save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. Keep your m07 flow beside you; the wording for each field comes from it. What your creator sees: Your creator reads the field table and the failure path. The failure path is the part an engineer would otherwise decide alone. Your next action: Open Your work and choose Ready for review. The next lesson takes the same product’s navigation to two widths.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

List each field and write what the person must be able to see after typing. Any field relying on a placeholder needs a label.

</details>

<details>
<summary>Hint 2</summary>

Read each error message and ask whether the person could have known the rule. If not, the rule belongs above the field.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Inputs and forms at production quality.
Task: Take one form to production quality with persistent labels, inline help, field-level errors that preserve input, and a keyboard pass recorded honestly.
Challenge one thing at a time, and start with the mistake this lesson is about: “Inline validation on every keystroke helps people.” Validating a half-typed email as invalid teaches people they are failing while they are still working. Validate on leaving the field, or on submission, and reserve immediate feedback for things that can only improve — like a strength meter that never says “wrong”.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the field table and ask whether every field has a persistent label and stated accepted formats. Look at the revised help and error wording and ask whether help appears before the mistake it prevents. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m08-l04-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every field has a persistent label and stated accepted formats: A field table listing label, help and the input formats accepted without complaint. Help appears before the mistake it prevents: At least one rule moved from an error message to help text under the label. Errors sit at the field and input survives failure: A specification placing each error at its field, stating the fix, preserving input, and linking any summary to the field. A keyboard pass is recorded, including what was not verified: Notes on tab order and focus visibility, with an explicit statement of what could not be checked without an implementation.

**Bring forward:** Strong evidence of production thinking. A field table with help, errors and accepted formats is the artefact an engineer can build from and a reviewer can check. Module handoff: Support interaction and accessibility in m09–m11


### Practice and pause points

- Read the requirements (~25 min): Read the assigned sections on labels, instructions, validation and notifications. List the rules you will apply to every field. Mark which rules your current form breaks.
- Write the field table (~30 min): For each field write its label, its help text and its error wording. State the input formats you will accept without complaint. Delete any field you cannot justify by a decision it serves.
- Move help before the mistake (~25 min): Find each error caused by a rule people could not know. Move that rule under the label as help text. Keep the error message for the case where help was missed.
- Design the failure path (~25 min): Specify that all entered values are preserved after a failed submission. Add a page-level summary that links to the first field with a problem. State when validation runs: on leaving a field, or on submission.
- Keyboard pass and record (~15 min): Tab through the form and note the order and whether focus is visible. Record anything you could not verify without building it. Save the field table and the keyboard notes.

Pause after any step; save the artifact and next action.

**Free tool path.** Specify the form on paper with the exact wording for label, help and error per field. To test behaviour, one local HTML file with labelled inputs shows tab order and error handling honestly with no framework or account.

### Output

A field-by-field table: label, help, error wording and accepted formats; A form specification where input survives a failed submission; A keyboard pass recording what worked and what could not be verified; One prevented error: help moved before the field that caused it

### Checks

- Why is a placeholder not a label? Answer: It disappears when typing starts, so it is absent exactly when someone checks their answers or returns after an error — the two moments the label exists for.
- Where does help belong? Answer: Before the field, under the label, where it prevents the mistake. In the error message it only explains a failure that need not have happened.
- Why avoid validating on every keystroke? Answer: Because a half-typed entry is not yet wrong, and telling someone they are failing while they work is discouraging. Validate on leaving the field or on submission.

### Rubric and remediation

**Every field has a persistent label and stated accepted formats**

Adequate evidence: A field table listing label, help and the input formats accepted without complaint.

- 0 — Placeholders used as labels.
- 1 — Labels present but accepted formats unstated.
- 2 — Persistent labels and stated formats for every field.
- 3 — As adequate, and at least one field was removed because no decision needed it.

If below 2: List each field and write what the person must be able to see after typing. Any field relying on a placeholder needs a label. Show at recheck: The field table.

**Help appears before the mistake it prevents**

Adequate evidence: At least one rule moved from an error message to help text under the label.

- 0 — All guidance lives in error messages.
- 1 — Help added but the corresponding error still carries the rule for the first time.
- 2 — Rules people could not know appear as help before the field.
- 3 — As adequate, and the write-up names which error should now become rare.

If below 2: Read each error message and ask whether the person could have known the rule. If not, the rule belongs above the field. Show at recheck: The revised help and error wording.

**Errors sit at the field and input survives failure**

Adequate evidence: A specification placing each error at its field, stating the fix, preserving input, and linking any summary to the field.

- 0 — Page-level errors only, or input cleared on failure.
- 1 — Field-level errors but no preservation stated.
- 2 — Field errors, stated fixes, preserved input and a linked summary.
- 3 — As adequate, and the specification states when validation runs and why.

If below 2: Write what the screen looks like immediately after a failed submission, field by field. Anything missing from it will be lost in the build. Show at recheck: The failure-path specification.

**A keyboard pass is recorded, including what was not verified**

Adequate evidence: Notes on tab order and focus visibility, with an explicit statement of what could not be checked without an implementation.

- 0 — No keyboard consideration.
- 1 — Claimed to work with no evidence.
- 2 — Pass recorded with unverifiable items named.
- 3 — As adequate, and one ordering problem was found and repaired in the specification.

If below 2: Tab through a built version, even a rough local HTML file. If nothing is built, record every keyboard claim as untested rather than assumed. Show at recheck: The keyboard notes.

### Portfolio contribution

Strong evidence of production thinking. A field table with help, errors and accepted formats is the artefact an engineer can build from and a reviewer can check.

### Assigned resources

- R14: [W3C: forms tutorial](https://www.w3.org/WAI/tutorials/forms/) — Labels, instructions, validating input and user notifications. Purpose: Supplies the requirements this lesson applies field by field. Effort: 60–90 selected min. Free reading, no account. Verified 2026-09-06. It covers form accessibility rather than form craft or content; implemented keyboard and screen-reader behaviour still needs testing in a real build. Fallback: R10.
- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — The text input and error message components, read for their content and usage rules. Purpose: Shows a worked example of input, hint and error specification in one place. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Government form conventions assume an obligation to complete; a commercial form must earn the same attention, so borrow the structure and question the tone. Fallback: R06.

## Lesson 5: Navigation components at two widths

Stable ID: m08-l05-v1. Core. Areas 8. Optional effort ~120 min.

**Objective.** Specify the navigation for your product at narrow and wide widths, showing where you are, what else exists and how to get back, without hiding anything people need.

**Bring forward.** Your m06 structure and change note, and the screens from lesson 1.

Navigation is where information architecture becomes something people can see. A good structure with an unusable menu is an unusable product.

### Learn

Every navigation component is answering the same three questions, and it is worth checking each against them explicitly. Where am I is the one most often skipped: without a current-location signal a person navigating by menu has to remember their own path, and that is precisely the memory cost that recognition-based interfaces exist to remove. The signal must survive greyscale, so a coloured tab label alone is not enough — weight, an underline, or a shape change carries it.

Hiding a menu behind an icon is a real trade, not a default. It buys space and costs a tap plus some discovery, and the cost falls hardest on people who do not already know what is inside. On a narrow screen the trade is often worth making for secondary destinations and rarely worth making for the one or two things people came to do, which should stay visible as actions rather than becoming menu items.

Priority is the honest response to a small screen. Decide what stays visible — usually the current task's primary action and the route back — and let the rest collapse. Concealment without priority is what produces a phone header containing a logo, a search icon, a menu icon and nothing the person needed.

Back behaviour has to be decided rather than inherited. Inside a multi-step task, back should return to the previous step with the entered values intact; from a detail view it should return to the list, at the position and with the filters the person left. The browser's own back button will also be used, and a design that breaks under it will lose people who trusted it.

**Common misconception.** “The hamburger menu is fine, everyone knows it.” Recognition of the icon is not the issue; what is behind it is. People do not open menus to browse, so anything essential placed there is effectively removed for anyone who does not already know it exists.

### Worked example

A phone header held a logo, a search icon and a menu icon; the only route to “Change or cancel a booking” was inside the menu, and in the m07 paper test two people said they would ring instead. The revision kept the logo small, put the current section name in the header as the location signal, promoted “My bookings” to a visible item, and left genuinely secondary destinations in the menu. On the wide layout the same items appeared as a row with the current one underlined and bolded, and the underline was checked in greyscale.

#### Navigation components at two widths

Specify the navigation for your product at narrow and wide widths, showing where you are, what else exists and how to get back, without hiding anything people need.

**Where to practise:** Draw both navigation layouts and the visibility rule on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Draw both widths on paper at real size, then walk three tasks with a finger and count taps. A local HTML file with a list and a media query shows real collapse behaviour if you want to see it move.

- Starting material: Your m06 structure and one screen at interface fidelity.
- Create HaruCourse/Practice/m08-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and list destinations

- Read the assigned responsive layout chapter.
- List every destination in your structure and mark the two or three people need most.
- Note which destinations came from the m06 tree test as high-traffic.

**You should end up with:** Every destination listed, with the two or three people need most marked.

Worksheet fields for this step:

- Every destination in your structure, with the two or three people need most marked — Take these from your m06 structure. Mark what people came for, not what the organisation would like them to see.
- The evidence behind those marks, or a plain note that you are guessing

<details>
<summary>Help with this step</summary>

- **Destination:** A place a person arrives at and recognises. A menu is not a destination; it is a door.
- **Global navigation:** The small set of destinations available from every screen in the product.

Stuck starting? Copy the top level of your m06 structure straight across, then add anything people reach by some other route.

Is it enough? The marked set is two or three, and you have said whether the marks came from evidence or from judgement.

</details>

#### 2. Design the wide layout

**See it first.** Made-up example. Marking the current section on a wide layout, after the first attempt used colour and nothing else.

- **What I drew first:** Five words across the top with the current one in the brand green. It looked right on my screen, at my desk, in the afternoon.
- **Why I liked it:** It was quiet. Adding weight or a line underneath felt heavy-handed next to something so clean.
- **What broke it:** I photographed it and turned the photograph to greyscale on my phone. All five words were the same grey. There was no current section at all.
- **What replaced it:** The current word in semibold with a thick rule beneath it, and the green kept as reinforcement rather than as the signal.
- **The check I run now:** Greyscale first, colour second. A location signal that survives greyscale survives most other conditions as well.

**The wrong turn:** The tempting error is letting colour be the location signal, because it is the tidiest one available. It is also the signal that fails in sunlight, in greyscale, and for a large number of readers.

**What it costs:** Weight and a rule are louder than a colour change, so the header looks less delicate than you wanted. That is the price of a header that still works outside your own conditions.

**Still unknown:** Still unknown: whether the rule underneath reads as “you are here” or as “this is a link”. Watching someone use it would settle it; nothing you can see from your own desk will.

- Place global destinations, keeping the set short.
- Add a current-location signal using weight or an underline, not colour alone.
- Show where local navigation for a section appears.

**You should end up with:** A wide layout with a short set of destinations and a location signal that is not colour.

Worksheet fields for this step:

- The global destinations on the wide layout, in the order you placed them
- How the current destination is signalled, using something other than colour
- Where a section’s own navigation appears on the wide layout

<details>
<summary>Help with this step</summary>

- **Greyscale:** The same picture with the colour taken out. A phone can do it to a photograph in a few taps.

Stuck starting? Write the destination names down first and cut until there are five or fewer.

Is it enough? You can tell which destination is current with the colour removed.

</details>

#### 3. Design the narrow layout

- Decide what stays visible on a phone and write the rule you used.
- Collapse only secondary destinations; keep the current task's action visible.
- Show the menu's open state, not just the closed one.

**You should end up with:** A narrow layout with a written rule for what stays visible and what collapses.

**Try it with help.** A made-up phone header for a class booking product. It holds a logo, a search icon and a menu icon. Behind the menu sit Find a class, My bookings, Change or cancel a booking, About us, Careers and Terms. Most people using this product are coming back to check a booking they already made.

What should come out from behind the menu?

- **My bookings, because returning to a booking they already hold is what most people came to do.** — The visible set is decided by what people arrived for, and here that is the existing booking. Careers and Terms can stay behind the icon because almost nobody arrives wanting them.
- Nothing: the icon is understood, so the menu costs almost nothing. — Recognising the icon was never the problem. People do not open a menu to find out what a product offers, so anything essential behind it is effectively gone for anyone who does not already know it is there.
- Everything, since hiding navigation is always a mistake. — Six visible destinations on a phone header leave no room for the screen itself. A narrow layout needs priority, which means some things do go behind the icon.
- About us, because it explains the product to newcomers. — It reads as the generous choice and it serves almost nobody. The header is small enough that promoting About us means demoting something people arrived to use.

**Then:** Apply the same test to your own list: promote what people came for, then write down what the menu now costs everything else.

Worksheet fields for this step:

- The rule: what stays visible on a phone, and why those and not others — Write it as a sentence beginning “on a phone, these stay visible because …”.
- What you put behind the menu, and what that costs someone who does not know it is there
- What the open menu shows, including how a person closes it

<details>
<summary>Help with this step</summary>

- **Collapse:** Moving something out of sight behind a control, usually an icon, when the screen is narrow.

Stuck starting? Start from the destinations you marked in step 1 and put those on the header first.

Is it enough? The rule is a sentence someone else could apply to a destination you have not thought of.

</details>

#### 4. Define back

- Write what back does inside a multi-step task.
- Write what back does from a detail view, including filters and scroll position.
- Check the design still works if the browser's back button is used instead.

**You should end up with:** What back does inside a task, from a detail view, and when the browser’s own back is used.

Worksheet fields for this step:

- What back does inside a multi-step task
- What back does from a detail view, including filters and scroll position
- What happens if the browser’s own back button is used instead of yours

<details>
<summary>Help with this step</summary>



Stuck starting? Walk your own flow: go into a detail view, come back, and write down everything you lost on the way.

Is it enough? Each behaviour says what is preserved, not only which screen appears.

</details>

#### 5. Test and record

- Walk three tasks at narrow width and count taps to each.
- View both layouts in greyscale and confirm the location signal survives.
- Save both layouts with the visibility rule and back behaviour.

**You should end up with:** Three tasks walked at narrow width, the greyscale result, and the repair the Check questions asked for.

Worksheet fields for this step:

- Three tasks walked at narrow width, and the taps each one took
- Whether you could still tell where you were with the colour removed
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Draw the narrow layout at real size, then walk each task with a finger and count as you go.

Is it enough? Each task has a number beside it, and you know which of the three was worst.

</details>

**Save and continue.** Saved for you: The destination list, the visibility rule and the back behaviours save as you type, on this device first and then online. Kept outside the app: The two layouts stay on paper or in your own folder. Write down where they live; naming a file does not upload it. What your creator sees: Your creator reads the visibility rule and the back behaviours. The rule is the decision; the drawings only show it. Your next action: Open Your work and choose Ready for review. The next lesson takes the lists and tables inside these screens down to phone width.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Take one screen and write the three answers beside it. Any blank answer is a missing component.

</details>

<details>
<summary>Hint 2</summary>

Convert the navigation to greyscale. If you cannot tell where you are, add weight, an underline or a shape change.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Navigation components at two widths.
Task: Specify the navigation for your product at narrow and wide widths, showing where you are, what else exists and how to get back, without hiding anything people need.
Challenge one thing at a time, and start with the mistake this lesson is about: “The hamburger menu is fine, everyone knows it.” Recognition of the icon is not the issue; what is behind it is. People do not open menus to browse, so anything essential placed there is effectively removed for anyone who does not already know it exists.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the annotated layouts and ask whether navigation answers where am I, what else, how back. Look at the greyscale rendering and ask whether the location signal survives greyscale. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m08-l05-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Navigation answers where am I, what else, how back: Both layouts annotated with how each of the three questions is answered. The location signal survives greyscale: A greyscale rendering where the current destination is still identifiable. A visibility rule for narrow screens is stated: A written rule naming what stays visible and what collapses, with the reason. Back is defined for a task step and a detail view: Two written behaviours, including what is preserved, and a note on browser back.

**Bring forward:** Project evidence connecting m06's structure to a real interface. Show both widths together with the visibility rule; the rule is the design decision. Module handoff: Support interaction and accessibility in m09–m11


### Practice and pause points

- Read and list destinations (~20 min): Read the assigned responsive layout chapter. List every destination in your structure and mark the two or three people need most. Note which destinations came from the m06 tree test as high-traffic.
- Design the wide layout (~30 min): Place global destinations, keeping the set short. Add a current-location signal using weight or an underline, not colour alone. Show where local navigation for a section appears.
- Design the narrow layout (~30 min): Decide what stays visible on a phone and write the rule you used. Collapse only secondary destinations; keep the current task's action visible. Show the menu's open state, not just the closed one.
- Define back (~25 min): Write what back does inside a multi-step task. Write what back does from a detail view, including filters and scroll position. Check the design still works if the browser's back button is used instead.
- Test and record (~15 min): Walk three tasks at narrow width and count taps to each. View both layouts in greyscale and confirm the location signal survives. Save both layouts with the visibility rule and back behaviour.

Pause after any step; save the artifact and next action.

**Free tool path.** Draw both widths on paper at real size, then walk three tasks with a finger and count taps. A local HTML file with a list and a media query shows real collapse behaviour if you want to see it move.

### Output

Navigation specified at narrow and wide widths; A current-location signal that survives greyscale; A stated rule for what stays visible and what collapses; Back behaviour defined for a task step and for a detail view

### Checks

- Why is a current-location signal worth the space? Answer: Because without it people must remember their own path. Showing location converts a memory task into a recognition one, which is far cheaper for the reader.
- What does hiding a destination in a menu actually cost? Answer: A tap plus discovery. People do not open menus to browse, so anything essential inside is effectively unavailable to anyone who does not already know it is there.
- Why specify back behaviour explicitly? Answer: Because inherited behaviour breaks tasks: back from a detail view that loses filters and position makes comparison expensive, and people stop comparing.

### Rubric and remediation

**Navigation answers where am I, what else, how back**

Adequate evidence: Both layouts annotated with how each of the three questions is answered.

- 0 — Destinations listed with no location or return signal.
- 1 — Two of the three questions answered.
- 2 — All three answered at both widths.
- 3 — As adequate, and the annotation names which question was weakest before this lesson.

If below 2: Take one screen and write the three answers beside it. Any blank answer is a missing component. Show at recheck: The annotated layouts.

**The location signal survives greyscale**

Adequate evidence: A greyscale rendering where the current destination is still identifiable.

- 0 — Location shown by colour alone, or not at all.
- 1 — A second signal exists but was not checked in greyscale.
- 2 — Checked and identifiable without colour.
- 3 — As adequate, and the signal is also stated for a screen reader as text rather than styling.

If below 2: Convert the navigation to greyscale. If you cannot tell where you are, add weight, an underline or a shape change. Show at recheck: The greyscale rendering.

**A visibility rule for narrow screens is stated**

Adequate evidence: A written rule naming what stays visible and what collapses, with the reason.

- 0 — Everything collapsed into a menu by default.
- 1 — A rule implied by the drawing but not written.
- 2 — The rule is written with its reason.
- 3 — As adequate, and the rule protects the current task's action explicitly.

If below 2: Write the sentence “on a phone, these stay visible because …”. If the list is empty, the design has hidden the product. Show at recheck: The written rule.

**Back is defined for a task step and a detail view**

Adequate evidence: Two written behaviours, including what is preserved, and a note on browser back.

- 0 — Back undefined.
- 1 — One case defined.
- 2 — Both defined with preserved state named.
- 3 — As adequate, and the design was checked against the browser's own back button.

If below 2: Walk your own flow: go into a detail view and come back. Write down everything you lost, then specify that it is preserved. Show at recheck: The two back behaviours.

### Portfolio contribution

Project evidence connecting m06's structure to a real interface. Show both widths together with the visibility rule; the rule is the design decision.

### Assigned resources

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — The header, service navigation and back-link components, read for structure and usage rather than styling. Purpose: Gives worked navigation components with their content rules and when-not-to-use guidance. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Written for government services with few destinations; a commercial product usually has more, so take the structure and decide the set yourself. Fallback: R06.
- R16: [web.dev: learn responsive design](https://web.dev/learn/design/) — The layout chapter, read for how components reflow rather than shrink. Purpose: Supplies the reasoning behind priority and collapse at narrow widths. Effort: 45–60 selected min. Free reading, no account. Verified 2026-09-06. Web-focused examples; the priority reasoning applies to any medium, and reading it is not the same as having tested a layout. Fallback: R15.

## Lesson 6: Lists, tables and dense data on a small screen

Stable ID: m08-l06-v1. Core. Areas 8. Optional effort ~120 min.

**Objective.** Design one list and one table for narrow and wide widths, choosing what each row must show, how it is sorted and what happens when the data is long, empty or unusually large.

**Bring forward.** The result item from your m07 browse loop and any real data you have, including its worst cases.

Lists and tables are where real content breaks designs built on tidy examples.

### Learn

The content of a row is a research question you have already answered. In m05 you watched what people compared on; those attributes belong in the row and the rest do not, because every extra column makes scanning slower for everyone in order to serve the few who needed it. When you cannot decide, the honest test is whether a person could choose between two rows without opening either.

Default sort is a design decision that is usually left to the database. Whatever arrives first gets disproportionate attention, so choose it deliberately — soonest first for a schedule, nearest first for a location, most recent first for a log — and say so on screen, because a person who cannot tell how a list is ordered has to read all of it.

A table is a comparison grid, and on a phone the grid is gone. Squeezing six columns into 360 pixels produces something unreadable in both directions. The reliable transformation is to turn each row into a record: a small block with the identifying value as a heading and the remaining fields labelled beneath it. You lose easy comparison, which is why keeping the two or three most-compared fields visible matters, and you keep legibility.

Real data is messier than examples. Names run long, numbers reach unexpected magnitudes, values go missing, and text arrives in another script. Design each of those cases explicitly: a truncation rule that keeps the distinguishing part, a way to show a missing value that is not an empty cell, and enough room for the longest realistic label rather than the average one.

**Common misconception.** “We can just make the table scroll horizontally on mobile.” Horizontal scrolling hides which column you are reading and separates values from their row identity. It is occasionally the right answer for genuinely wide reference data, and it is a poor default for a table people must act on.

### Worked example

A class list showed eight columns on desktop and scrolled sideways on a phone. Rebuilt: rows kept the four attributes the m05 sessions showed people comparing — day and time, price, place, remaining places — with the rest moved to the detail view. Default sort became soonest first, stated above the list. On a phone each row became a record with the class name as the heading. The longest real class name was used for layout, missing prices showed “price on request” rather than a blank, and a full class showed “Full — see other dates” instead of a zero.

#### Lists, tables and dense data on a small screen

Design one list and one table for narrow and wide widths, choosing what each row must show, how it is sorted and what happens when the data is long, empty or unusually large.

**Where to practise:** Draw the list at both widths and the hard-case rows on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper and your real data. Write out the ten worst real rows by hand at phone width; the layout problems appear immediately and cost nothing to fix at that stage.

- Starting material: Your m07 result item and a set of real, messy example data.
- Create HaruCourse/Practice/m08-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Decide the row content

**See it first.** Made-up example. Cutting a class list row from eight things to four, after the first version tried to save people a tap.

- **What I had:** Eight columns in a desktop table: name, teacher, day, time, level, place, price, remaining places.
- **What I did first:** Kept all eight on the phone and let the table scroll sideways. It felt generous, as though I were hiding nothing from anybody.
- **What that actually did:** At phone width you see three columns at a time, and never the class name alongside them. Every value had lost the thing it belonged to.
- **The question that fixed it:** Which of these does someone compare two classes on? Day and time, price, where it is, and whether places are left. Not the level, not the teacher.
- **What the row became:** Four attributes, the rest moved to the detail view, and a written note of what I removed so I can put something back if I was wrong.

**The wrong turn:** The tempting error is keeping everything, because removing a column feels like withholding. Sideways scrolling is how that decision gets postponed instead of made.

**What it costs:** Four attributes means anyone comparing on the teacher now has to open two detail views. That is a real cost, and it is smaller than nobody being able to compare on anything.

**Still unknown:** Still unknown: whether the level belongs in the row after all. Two sessions is thin evidence, and the omission list is what makes it cheap to change my mind.

- List the attributes your m05 participants compared on.
- Put those in the row and move everything else to the detail view.
- Write what you deliberately omitted and why.

**You should end up with:** The two to four attributes your row carries, each with the reason it earned the space.

Worksheet fields for this step, revealed a few at a time in the app:

- Attribute 1 · what it is, and the evidence that people compare on it — If your evidence is “it seemed useful”, write that. A guess you have labelled is worth more than a guess you have dressed up.
- Attribute 2 · what it is, and the evidence that people compare on it
- Attribute 3 · what it is, and the evidence that people compare on it
- Attribute 4 · what it is, and the evidence that people compare on it

<details>
<summary>Help with this step</summary>

- **Row:** One line in a list standing for one thing: a class, an order, a person.
- **Detail view:** The screen you reach by choosing a row. Everything you left out of the row lives there.

Stuck starting? Write down the attributes people named while choosing, before you look at your table.

Is it enough? Every attribute has a reason beside it, even when the reason is “I am guessing”.

</details>

#### 2. Choose and show the sort

- Choose a default sort that serves the common task.
- State the sort visibly above the list.
- Decide which alternative sorts exist, if any, and where they live.

**You should end up with:** What you left out, the default sort, and the words that show that sort on screen.

Worksheet fields for this step:

- What you deliberately left out of the row, and where it went instead
- The default sort, and the task it serves
- The words that appear above the list saying how it is sorted

<details>
<summary>Help with this step</summary>



Stuck starting? Write the sort as a sentence the reader will see, such as “Soonest first”.

Is it enough? The sort is justified by a task, not by the order the data happened to arrive in.

</details>

#### 3. Transform the table

- Draw the table at wide width with numbers right-aligned and text left.
- Redraw each row as a record at narrow width with a heading and labelled fields.
- Keep the two most-compared fields visible in both forms.

**You should end up with:** The table at wide width, and one row redrawn as a record at narrow width.

Worksheet fields for this step:

- The wide table: the columns in order, and which of them are aligned right
- One row redrawn as a record: the heading, then each field with its label — The two things people compare on most should be findable in both forms.

<details>
<summary>Help with this step</summary>

- **Record:** A small block standing for one row: an identifying heading, then each remaining value with its own label beneath it.

Stuck starting? Redraw one row as a block before you redraw the whole list.

Is it enough? Every value in the record sits next to a label saying what it is.

</details>

#### 4. Break it with real data

- Lay out the longest real name and the largest real number.
- Show a missing value as words rather than an empty cell.
- Design the empty list, saying what will appear and how to start.

**You should end up with:** The longest name, the largest number, a worded missing value and a designed empty list.

**Try it with help.** A made-up class list at phone width. Three rows break. One class is called “Saturday morning beginners’ pottery and glaze workshop, Bermondsey”. One has no price recorded, so the cell is blank. One has no places left, shown as “0”.

Which of these should you deal with first, and why?

- **The class with no places left showing “0”, because a number invites the person to try to book it.** — A zero reads as a value among other values, so people tap it and meet a dead end. Words such as “Full, see other dates” stop the wasted trip and offer the next move.
- The very long class name, because it wraps to four lines and pulls the row apart. — A real problem and the second one to work on. A tall row is untidy; a full class that looks bookable sends someone down a path ending in nothing.
- The missing price, because a blank cell looks like broken data. — A blank does look broken, and “price on request” is worth writing. It leaves the person uncertain, while the zero actively sends them the wrong way.
- None of them: these are rare rows and the ordinary ones matter more. — The ordinary rows were never going to break. Rare rows are exactly where a list stops working, and on paper they cost almost nothing to fix.

**Then:** Work through your own hard cases in the same order: what sends someone the wrong way, what leaves them uncertain, what merely looks untidy.

Worksheet fields for this step:

- The longest real name and the largest real number at phone width, and what broke
- What a missing value says, in words rather than a blank
- The empty list: what it says, and the one action that starts it

<details>
<summary>Help with this step</summary>



Stuck starting? Take your ten worst real rows and lay them out at phone width before you touch the tidy ones.

Is it enough? Nothing in the hard cases is represented by an empty space.

</details>

#### 5. Check and record

- Read the narrow version aloud as records; confirm each field is identifiable.
- Record any case you could not resolve without more data.
- Save both widths with the omission list and sort rule.

**You should end up with:** The narrow version read back as records, anything unresolved, and the repair the Check questions asked for.

Worksheet fields for this step:

- Reading the narrow version aloud as records: any value you could not name
- Any case you could not settle without more data
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Read one record aloud to yourself, value by value, and stop wherever you cannot say what a value is.

Is it enough? Every value in the record can be named without looking at the wide table.

</details>

**Save and continue.** Saved for you: The row attributes, the sort, the omissions and the hard cases save as you type, on this device first and then online. Kept outside the app: The two layouts stay on paper or in your own folder. Keep the real data you used beside them; the worst rows are the evidence. What your creator sees: Your creator reads the row attributes with their reasons and the hard cases. The omission list shows the decision more clearly than the layout does. Your next action: Open Your work and choose Ready for review. The next lesson decides which interruptions in your product deserve a modal.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Re-read your m05 notes for the attributes participants named while choosing. Those are the row; the rest is the detail view.

</details>

<details>
<summary>Hint 2</summary>

Write the sort as a sentence the reader sees: “Soonest first”. If you cannot justify it by a task, you have not chosen it.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Lists, tables and dense data on a small screen.
Task: Design one list and one table for narrow and wide widths, choosing what each row must show, how it is sorted and what happens when the data is long, empty or unusually large.
Challenge one thing at a time, and start with the mistake this lesson is about: “We can just make the table scroll horizontally on mobile.” Horizontal scrolling hides which column you are reading and separates values from their row identity. It is occasionally the right answer for genuinely wide reference data, and it is a poor default for a table people must act on.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the row specification with citations and ask whether row content is traced to observed comparison behaviour. Look at the list with its visible sort and ask whether the default sort is chosen and shown. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m08-l06-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Row content is traced to observed comparison behaviour: A row specification citing m05 evidence per attribute, plus a written list of omissions. The default sort is chosen and shown: A stated default sort, visible on screen, with the task it serves. The narrow form is records, not a shrunken table: A narrow layout where each row is a labelled block with an identifying heading. Longest, missing and empty cases are designed: Layouts using the longest real value and the largest real number, a worded missing value, and a designed empty state.

**Bring forward:** Useful case-study evidence: a table redesigned for a phone using real messy data shows craft that tidy portfolio screenshots never do. Module handoff: Support interaction and accessibility in m09–m11


### Practice and pause points

- Decide the row content (~20 min): List the attributes your m05 participants compared on. Put those in the row and move everything else to the detail view. Write what you deliberately omitted and why.
- Choose and show the sort (~25 min): Choose a default sort that serves the common task. State the sort visibly above the list. Decide which alternative sorts exist, if any, and where they live.
- Transform the table (~30 min): Draw the table at wide width with numbers right-aligned and text left. Redraw each row as a record at narrow width with a heading and labelled fields. Keep the two most-compared fields visible in both forms.
- Break it with real data (~30 min): Lay out the longest real name and the largest real number. Show a missing value as words rather than an empty cell. Design the empty list, saying what will appear and how to start.
- Check and record (~15 min): Read the narrow version aloud as records; confirm each field is identifiable. Record any case you could not resolve without more data. Save both widths with the omission list and sort rule.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper and your real data. Write out the ten worst real rows by hand at phone width; the layout problems appear immediately and cost nothing to fix at that stage.

### Output

A list row specification naming the compared attributes and the omissions; A default sort with the reason stated on screen; A table transformed to records at narrow width; Handling for the longest value, the missing value and the empty list

### Checks

- How do you decide what goes in a row? Answer: From what people were observed comparing on. If a person cannot choose between two rows without opening either, the row is missing something; if a column never enters a comparison, it is costing scan time.
- Why state the default sort on screen? Answer: Because whatever comes first gets the attention, and a person who cannot tell the order has to read the whole list to be sure they have not missed something.
- What is wrong with a horizontally scrolling table on a phone? Answer: It separates values from the row they belong to and hides which column you are in. For data people must act on, a record-per-row layout keeps meaning intact.

### Rubric and remediation

**Row content is traced to observed comparison behaviour**

Adequate evidence: A row specification citing m05 evidence per attribute, plus a written list of omissions.

- 0 — Row content chosen from what the data contains.
- 1 — A reasoned list with no trace to observed behaviour.
- 2 — Each attribute traced to evidence, with omissions listed.
- 3 — As adequate, and one attribute is included because its absence made people open every result.

If below 2: Re-read your m05 notes for the attributes participants named while choosing. Those are the row; the rest is the detail view. Show at recheck: The row specification with citations.

**The default sort is chosen and shown**

Adequate evidence: A stated default sort, visible on screen, with the task it serves.

- 0 — No default stated.
- 1 — Chosen but not shown to the reader.
- 2 — Chosen, shown and justified by the common task.
- 3 — As adequate, and the alternatives are limited to ones people asked for rather than every field.

If below 2: Write the sort as a sentence the reader sees: “Soonest first”. If you cannot justify it by a task, you have not chosen it. Show at recheck: The list with its visible sort.

**The narrow form is records, not a shrunken table**

Adequate evidence: A narrow layout where each row is a labelled block with an identifying heading.

- 0 — The table is scaled down or scrolls sideways.
- 1 — Records attempted but fields lose their labels.
- 2 — Each row is a record with a heading and labelled fields.
- 3 — As adequate, and the two most-compared fields stay adjacent for scanning.

If below 2: Redraw one row as a small block: identifying value as heading, each remaining field labelled beneath. Show at recheck: The narrow layout.

**Longest, missing and empty cases are designed**

Adequate evidence: Layouts using the longest real value and the largest real number, a worded missing value, and a designed empty state.

- 0 — Only tidy example data used.
- 1 — One or two hard cases handled.
- 2 — All three designed with real values.
- 3 — As adequate, and a truncation rule keeps the distinguishing part of a long value.

If below 2: Take your ten worst real rows and lay them out at phone width. Fix what breaks rather than choosing gentler examples. Show at recheck: The hard-case layouts.

### Portfolio contribution

Useful case-study evidence: a table redesigned for a phone using real messy data shows craft that tidy portfolio screenshots never do.

### Assigned resources

- R16: [web.dev: learn responsive design](https://web.dev/learn/design/) — The layout chapter, read for how dense content reflows at narrow widths. Purpose: Supplies the reflow reasoning behind turning a table into records. Effort: 45–60 selected min. Free reading, no account. Verified 2026-09-06. Web-focused; it does not cover data table conventions, so alignment and sort rules here come from the lesson and R63. Fallback: R15.
- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — The layout and spacing sections, read for rhythm in dense content. Purpose: Keeps spacing consistent when rows become records and density changes. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Rebuild the reasoning; do not copy government branding or treat its density as a universal standard. Fallback: R03.

## Lesson 7: Interruptions: modals, sheets and when not to use one

Stable ID: m08-l07-v1. Core. Areas 8. Optional effort ~120 min.

**Objective.** Decide for three interruptions in your product whether a modal is justified, design the two that are, and record what the rejected one became instead.

**Bring forward.** Your m07 exception table and any point in the flow where the product asks something mid-task.

A modal takes control away from the person. Sometimes that is right; usually it is a shortcut around a layout problem.

### Learn

The test for a modal is what it prevents. Interrupting someone to confirm an irreversible deletion prevents a real loss; interrupting them to ask for a newsletter signup prevents nothing and spends attention they had allocated to a task. If the interruption exists because there was nowhere else to put the content, the layout is the problem and the modal is hiding it.

For destructive actions, confirmation and undo are alternatives with different costs. Confirmation taxes everyone every time to prevent a rare slip, and people learn to dismiss it without reading, which removes the protection while keeping the cost. Undo costs nothing until it is needed and protects the person who confirmed by reflex. Reserve confirmation for actions that genuinely cannot be reversed, and say what will be lost.

A modal that can only be left through its main action is a trap, and people meet it at exactly the wrong moment — mid-task, unsure, on a small screen. There must be a visible dismissal, the escape key must work, and dismissing must return the person to their unchanged work. If dismissing loses their input, the modal has become a way of taking work away.

Because a modal traps focus, everything behind it is unreadable while it is open. That makes it the wrong container for anything the person needs to consult — help text, a price breakdown, terms they are agreeing to. Those belong on the page, in a disclosure, or on their own screen, where the person can look at them alongside the thing they are deciding about.

**Common misconception.** “A confirmation dialogue makes destructive actions safe.” It makes them slower. Repeated confirmations are dismissed automatically, so the protection erodes while the cost remains. Undo protects the person who has already made the mistake, which is the person who needs protecting.

### Worked example

Three interruptions were reviewed. Cancelling a booking: kept as a confirmation, because the place is released immediately and cannot be recovered — the dialogue now states exactly what will be lost and offers “Keep booking” as the safe default. Removing a shortlist item: replaced with an undo message, since nothing is lost permanently. A newsletter prompt appearing over the payment step: removed entirely and moved to the confirmation screen, where the person has finished and can consider it — with the reason recorded, since someone will propose it again.

#### Interruptions: modals, sheets and when not to use one

Decide for three interruptions in your product whether a modal is justified, design the two that are, and record what the rejected one became instead.

**Where to practise:** Draw the two interruptions you keep and what the third became on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper screens plus a written decision table. If you want to feel the focus trap, a local HTML file with a dialog element shows how dismissal and the escape key behave with no framework.

- Starting material: Your m07 exception table and flow.
- Create HaruCourse/Practice/m08-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and list

- Read the assigned sections on error prevention and user control.
- List every point in your flow where the product interrupts.
- Mark what each interruption prevents, if anything.

**You should end up with:** A list of every interruption in your flow, each with what it prevents or a plain note that it prevents nothing.

Worksheet fields for this step:

- Every point in your flow where the product interrupts — Walk your m07 flow and note each dialogue, prompt, banner and confirmation, including any you copied from another product without deciding.
- For each interruption: what it prevents, or nothing

<details>
<summary>Help with this step</summary>

- **Interruption:** Anything that stops the person mid-task to ask or tell them something: a dialogue, a prompt, a banner, a confirmation.
- **Modal:** A box that covers the screen and must be answered or closed before anything else can be done. It holds the keyboard as well as the eye.

Stuck starting? Walk your own flow slowly and write down every moment something appears that you did not ask for.

Is it enough? At least one line says the interruption prevents nothing. Most flows have one.

</details>

#### 2. Decide each one

**See it first.** Made-up example. Deciding three interruptions in a class-booking product, and getting the easiest one wrong first.

- **What I had:** Three interruptions: a confirmation for cancelling a booking, a confirmation for removing a saved class, and a newsletter prompt over the payment step.
- **What I wrote first:** Keep all three as dialogues, with firmer wording. A dialogue felt decisive, and firm wording felt like care.
- **Why the second one failed:** Removing a saved class loses nothing. The dialogue asked a question whose answer was always the same, so people stopped reading it, and it protected nobody.
- **What replaced it:** The class is removed at once and a line at the top of the list says “Removed. Put it back” for ten seconds. The mistake is now repaired by the person who made it.
- **What happened to the third:** The newsletter prompt prevented nothing and stole the payment step. It moved to the confirmation screen as a quiet line, and the reason went in writing.

**The wrong turn:** The wrong turn is reaching for a dialogue because it feels decisive. It stops the person, takes their place in the task, and buys protection only when something truly cannot be recovered.

**What it costs:** Undo costs you the comfort of having asked. If the ten seconds pass unnoticed the person has to redo the work, and that is a smaller cost than a question nobody reads.

**Still unknown:** Still unknown: whether ten seconds is long enough for someone who looked away. That needs a test with a person, and no decision table will settle it.

- For each, choose modal, inline, undo or remove.
- Justify every modal by naming the loss it prevents.
- Replace any confirmation for a reversible action with undo.

**You should end up with:** Three interruptions, each with a choice — modal, inline, undo or remove — and the loss that justifies it.

**Try it with help.** Six interruptions from a made-up class-booking product. For each one, decide whether it needs a modal that blocks everything, whether an inline message would do, or whether it deserves a screen of its own.

- Cancelling a booked place. The place is released to someone else immediately and cannot be got back.
  - **modal** — The loss is immediate and cannot be recovered, which is the one case where stopping the person is worth it. Say what will be lost in the wording.
  - inline message — An inline message tells someone after the fact, and there is no after the fact here. Once the place is gone it is gone.
  - own screen — A whole screen is more ceremony than one question needs, and it takes the person out of the list they were working in.
- Removing a class from a saved list. It can be added again in one tap.
  - modal — A question with only one sensible answer gets dismissed without reading, and that habit spreads to the dialogues that do matter.
  - **inline message** — Nothing is lost permanently, so the repair belongs after the action: remove it, then offer to put it back for a few seconds.
  - own screen — A screen for a one-tap change turns something small into a journey.
- New booking terms, four paragraphs long, which must be read and accepted before booking again.
  - modal — A modal covers the screen and holds the keyboard, so it is the worst place for anything a person needs to read carefully or compare with something else.
  - inline message — A line in the page cannot carry four paragraphs, and accepting them needs a moment of its own.
  - **own screen** — Long reference text needs room, scrolling and a way back. A screen gives all three, and the person can leave and return.
- The place held during payment has ninety seconds left before it is released.
  - modal — Urgency is exactly what tempts you here, and a modal takes the card field away at the moment the person is typing into it.
  - **inline message** — It belongs at the top of the payment step, staying put and counting down, so it can be read without leaving the task.
  - own screen — Moving to another screen loses the payment step, which is the thing the deadline is about.
- Replacing the saved payment card, which needs a card number, an expiry date and a billing address.
  - modal — Three fields inside a box that traps the keyboard is a small form in a bad room, and the error messages then have nowhere to sit.
  - inline message — A message tells someone something. It does not collect three fields and check them.
  - **own screen** — This is a task, not an interruption. A screen gives it space, room for errors and a route back.
- Leaving a half-written review. The text is not saved anywhere and will be gone.
  - **modal** — Losing the person’s work is worse than stopping them, which is the whole test. Make carrying on writing the safe default.
  - inline message — By the time a message could appear the writing is already gone, and nothing can put it back.
  - own screen — The person is on their way out. Sending them somewhere new is not a way of keeping what they wrote.

**Then:** Now decide your own three the same way, and write the loss beside each one.

**What to watch for:** Look at the two hardest lines: the expiring hold and the new terms. Urgency pulled towards a modal and long reference text pulled towards one too, and both were wrong for the same reason. A modal takes away the screen and the keyboard. That is worth paying only when something unrecoverable is about to be lost, never for reading and never for waiting.

Worksheet fields for this step, revealed a few at a time in the app:

- Interruption 1 · what it is, the choice you made, and the loss that justifies it — A modal is only justified when losing the person’s work is worse than stopping them.
- Interruption 2 · what it is, the choice you made, and the loss that justifies it
- Interruption 3 · what it is, the choice you made, and the loss that justifies it

<details>
<summary>Help with this step</summary>

- **Undo:** The action happens, and a message offers to put it back for a stated time. It protects the person who has already made the mistake.

Stuck starting? Take the interruption you are least sure about first, and finish the sentence “without this, the person could lose …”.

Is it enough? Every modal you kept names a loss you could not recover. Everything else has become inline, undo or nothing.

</details>

#### 3. Design the two that stay

- Write the exact wording, naming what will be lost.
- Make the safe option the default and label both options with verbs.
- Specify dismissal: a visible control, the escape key, and unchanged work behind.

**You should end up with:** Both surviving interruptions written out: exact wording, two verb labels, the safe default, and how each one is left.

Worksheet fields for this step:

- First interruption: the exact wording, both option labels, and which one is the safe default — Name what will be lost in the words themselves. Label both options with verbs, so neither of them is “OK”.
- Second interruption: the exact wording, both option labels, and which one is the safe default
- How each one is left: the visible control, the escape key, and what happens to the work behind it

<details>
<summary>Help with this step</summary>

- **Safe default:** The option that changes nothing, placed and worded so that a person answering quickly keeps their work.
- **Focus:** Where the keyboard is pointing. A modal holds it, which is why nothing behind can be reached until the modal closes.

Stuck starting? Write the sentence naming the loss first. The two option labels come out of it.

Is it enough? Neither option is “OK”, and leaving the box by any route leaves the work behind it untouched.

</details>

#### 4. Design the replacement

- Take the interruption you rejected and design what it becomes.
- Place any reference content on the page rather than in a dialogue.
- Check that no two interruptions can now appear at once.

**You should end up with:** The rejected interruption redesigned as something that does not stop the person, plus a check that no two interruptions can collide.

Worksheet fields for this step:

- The interruption you rejected, and the exact thing that replaces it — An undo message, a line on the page, or a screen of its own. Write the wording, not the intention.
- Which two interruptions could have appeared at once, and what you changed so they cannot

<details>
<summary>Help with this step</summary>



Stuck starting? Ask where the person would be willing to meet this. Usually it is after the task rather than during it.

Is it enough? The replacement is written as wording on a screen, not as an intention.

</details>

#### 5. Write the rule

- Write one sentence stating when your product uses a modal.
- Record the rejected interruption and why, so it is not reproposed blindly.
- Save the decision table and both designs.

**You should end up with:** A one-sentence rule for using a modal, the rejected interruption on record, where the work lives, and the repair the Check questions asked for.

Worksheet fields for this step:

- One sentence saying when this product uses a modal — Test the sentence against the interruption you rejected. If the rule would let it back in, the rule is too weak.
- The rejected interruption and why, written so nobody proposes it again next month
- Where the screens and the decision table live — File names or “paper, in my folder”. Nothing is uploaded.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Write the rule, then read it back against the interruption you rejected.

Is it enough? The rule would not let the interruption you removed back in.

</details>

**Save and continue.** Saved for you: Your interruption list, the three decisions and both designs save as you type, on this device first and then online. Kept outside the app: The screens stay on paper or in your own folder. Note the file name in the last step; naming a file does not upload it. What your creator sees: Your creator reads the decision table and the rejected interruption. The one you removed shows more judgement than the two you styled. Your next action: Open Your work and choose Ready for review. The next lesson designs the messages this product uses to say what just happened.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For each dialogue, complete “without this, the person could lose …”. Anything you cannot complete should not interrupt.

</details>

<details>
<summary>Hint 2</summary>

List your confirmations and mark which actions could be reversed. Replace those with undo.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Interruptions: modals, sheets and when not to use one.
Task: Decide for three interruptions in your product whether a modal is justified, design the two that are, and record what the rejected one became instead.
Challenge one thing at a time, and start with the mistake this lesson is about: “A confirmation dialogue makes destructive actions safe.” It makes them slower. Repeated confirmations are dismissed automatically, so the protection erodes while the cost remains. Undo protects the person who has already made the mistake, which is the person who needs protecting.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the decision table and ask whether every interruption is justified by the loss it prevents. Look at the undo specification and ask whether reversible actions use undo rather than confirmation. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m08-l07-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every interruption is justified by the loss it prevents: A decision table naming, for each interruption, what it prevents and the choice made. Reversible actions use undo rather than confirmation: At least one confirmation replaced by an undo affordance, with the time window stated. Each remaining modal has dismissal and a safe default: Specified dismissal control, escape behaviour, unchanged work behind, and the safe option as default. A rule for using modals is written down: One sentence stating when this product interrupts, kept with the component inventory.

**Bring forward:** Good evidence of restraint. Showing an interruption you removed, and what it became, reads as stronger judgement than showing three well-styled dialogues. Module handoff: Support interaction and accessibility in m09–m11


### Practice and pause points

- Read and list (~20 min): Read the assigned sections on error prevention and user control. List every point in your flow where the product interrupts. Mark what each interruption prevents, if anything.
- Decide each one (~25 min): For each, choose modal, inline, undo or remove. Justify every modal by naming the loss it prevents. Replace any confirmation for a reversible action with undo.
- Design the two that stay (~30 min): Write the exact wording, naming what will be lost. Make the safe option the default and label both options with verbs. Specify dismissal: a visible control, the escape key, and unchanged work behind.
- Design the replacement (~30 min): Take the interruption you rejected and design what it becomes. Place any reference content on the page rather than in a dialogue. Check that no two interruptions can now appear at once.
- Write the rule (~15 min): Write one sentence stating when your product uses a modal. Record the rejected interruption and why, so it is not reproposed blindly. Save the decision table and both designs.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper screens plus a written decision table. If you want to feel the focus trap, a local HTML file with a dialog element shows how dismissal and the escape key behave with no framework.

### Output

A decision table for three interruptions with the reason for each; Two designed interruptions with dismissal and a safe default; One interruption removed, with what replaced it; A stated rule for when your product uses a modal

### Checks

- When is a modal justified? Answer: When the interruption prevents a loss that is worse than the interruption — typically an irreversible action. If it prevents nothing, it is spending attention for someone else's benefit.
- Why does undo often beat confirmation? Answer: Confirmation taxes everyone and is dismissed by reflex, so the protection fades while the cost stays. Undo costs nothing until needed and still protects the person who confirmed without reading.
- Why should reference content never live in a modal? Answer: Because the modal hides the thing the person is deciding about. Consulting a price breakdown or terms requires seeing both at once, which a focus trap prevents.

### Rubric and remediation

**Every interruption is justified by the loss it prevents**

Adequate evidence: A decision table naming, for each interruption, what it prevents and the choice made.

- 0 — Interruptions kept without justification.
- 1 — Justifications given in general terms such as “to be safe”.
- 2 — Each names a specific loss, or is removed.
- 3 — As adequate, and at least one interruption is removed with what replaced it recorded.

If below 2: For each dialogue, complete “without this, the person could lose …”. Anything you cannot complete should not interrupt. Show at recheck: The decision table.

**Reversible actions use undo rather than confirmation**

Adequate evidence: At least one confirmation replaced by an undo affordance, with the time window stated.

- 0 — Confirmations used for reversible actions.
- 1 — Undo proposed but with no window or recovery path defined.
- 2 — Undo specified with a window and a clear message.
- 3 — As adequate, and the write-up says what happens if the person leaves before the window ends.

If below 2: List your confirmations and mark which actions could be reversed. Replace those with undo. Show at recheck: The undo specification.

**Each remaining modal has dismissal and a safe default**

Adequate evidence: Specified dismissal control, escape behaviour, unchanged work behind, and the safe option as default.

- 0 — Dismissal only through the primary action.
- 1 — A dismissal exists but the safe option is not the default.
- 2 — Visible dismissal, escape, preserved work and safe default.
- 3 — As adequate, and both options are labelled with verbs rather than yes and no.

If below 2: Write what happens on escape, on the dismissal control and on dismissal by tapping outside. Any of these losing work is a defect. Show at recheck: The modal specification.

**A rule for using modals is written down**

Adequate evidence: One sentence stating when this product interrupts, kept with the component inventory.

- 0 — No rule.
- 1 — A rule too vague to decide a future case.
- 2 — A rule that would settle the next proposal.
- 3 — As adequate, and the rejected interruption is recorded with its reason for future reference.

If below 2: Write the rule, then test it against the interruption you rejected. If the rule permits it, the rule is too weak. Show at recheck: The written rule.

### Portfolio contribution

Good evidence of restraint. Showing an interruption you removed, and what it became, reads as stronger judgement than showing three well-styled dialogues.

### Assigned resources

- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — Prevention, feedback, undo and the slip and mistake distinction. Purpose: Supplies the confirmation-versus-undo reasoning this lesson turns on. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Prevention techniques are options rather than a checklist; the modal rules here are the course's own. Fallback: R02.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 3, user control and freedom, and heuristic 5, error prevention. Purpose: Sets the standard that a person can always leave an interruption without losing work. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. A heuristic names a candidate problem; whether your dialogue is dismissed by reflex is a question for a test. Fallback: R11.

## Lesson 8: Telling people what happened

Stable ID: m08-l08-v1. Core. Areas 8. Optional effort ~120 min.

**Objective.** Design your product's system messages — success, progress, warning and failure — deciding for each where it appears, how long it stays and whether it needs an action.

**Bring forward.** The message wording from your m07 exception table and state specifications.

A person who cannot tell whether something worked will do it again, and doing it again is how people pay twice.

### Learn

Messages should be proportionate. A saved draft can be confirmed quietly and briefly; a failed payment must stay on screen until the person acts on it, because dismissing it silently leaves them without the one fact they need. Getting this wrong in either direction is costly: a toast for a payment failure loses people money, and a blocking dialogue for an autosave trains people to dismiss everything.

Position matters as much as wording. A message about a field belongs at the field, a message about a list belongs at the list, and a message about the whole task belongs at the top of the task. Messages that appear in a fixed corner make people search for the cause, and on a phone they frequently cover the very control the message is telling them to use.

Anything that disappears on a timer is unavailable to a person who looked away, was interrupted, uses a screen reader that had not reached it, or reads more slowly than your timer assumes. Reserve auto-dismissal for confirmations of routine, reversible actions, and let anything consequential stay until it is dismissed or resolved.

Colour alone fails for the same reasons it fails in a button hierarchy, and it fails harder here because a status message is often the only signal that something went wrong. Pair the colour with a distinct icon shape and with words that carry the meaning on their own: “Payment failed. Nothing was taken.” is legible in greyscale, in a screen reader, and to someone who is not looking at colour at all.

**Common misconception.** “Toasts are a clean way to show status.” They are a clean way to show status to someone watching that corner at that moment. For anything a person must act on or will need later, a toast is a way of appearing to communicate without communicating.

### Worked example

The product had one toast style for everything. Rebuilt into four: a quiet inline confirmation for a saved draft that fades; a persistent banner at the top of the task for “Your place is held for 10 minutes”, with the time remaining; a warning beside the affected field when a chosen date had just filled; and a persistent failure message at the payment step saying what happened, that nothing had been taken, and what to do next. Each pairs colour with an icon shape and words, and each was checked in greyscale.

#### Telling people what happened

Design your product's system messages — success, progress, warning and failure — deciding for each where it appears, how long it stays and whether it needs an action.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Write all four messages out on paper at the position they will appear on the screen sketch. Read each aloud to someone and ask what they would do next; that is the whole test.

- Starting material: Your m07 message wording and state tables.
- Create HaruCourse/Practice/m08-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

<details>
<summary>Optional video paired with step 1</summary>

[Web Accessibility Perspectives: Notifications and Feedback](https://www.w3.org/WAI/perspective-videos/notifications/) — W3C Web Accessibility Initiative, 56 s, English, English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page. Whole video, 56 seconds. Watch from 0:12 to 0:36.

What to notice:

- 0:12–0:18 — When the response is not the one you expected, you start wondering whether something is wrong.
- 0:21–0:27 — Without clear notifications and feedback, people are quickly disorientated and confused.
- 0:27–0:32 — Error messages especially are often complex and confusing.
- 0:32–0:36 — Making them understandable is usually quite simple.

**Then:** Straight after watching, find the message a person is most likely to miss, and write what they would do next if they missed it.

**Without the video:** No video needed: gather your existing messages first and read each one as somebody who does not know what just happened. The gap shows up the same way.

A clockwork metaphor and generic interfaces, not your product. It says why messages matter; the wording, placement and duration are yours to decide. Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use. Checked 7 September 2026.

</details>

#### 1. Collect what you already wrote

- Gather every message from your m07 exception table and state specifications.
- Sort them into success, progress, warning and failure.
- Mark which concern money, time or lost work.

**You should end up with:** Every message you already have, sorted into the four types, with the consequential ones marked.

Worksheet fields for this step:

- Every message from your m07 exception table and state specifications, sorted into success, progress, warning and failure — Copy them across word for word. Rewriting them now hides how thin some of them are.
- Which of them concern money, a deadline or work that could be lost

<details>
<summary>Help with this step</summary>

- **Toast:** A small message that appears in a corner and fades on its own. It reaches only someone who was looking at that corner at that moment.
- **Persistent message:** One that stays until something clears it: the person acts, or the situation it describes ends.

Stuck starting? Copy the messages across word for word before you decide anything about them.

Is it enough? Every message sits in one of the four types, and the money, deadline and lost-work ones are marked.

</details>

#### 2. Decide placement and duration

**See it first.** Made-up example. One toast style used for everything in a class-booking product, and the message that was never delivered.

- **What the product did:** Every message was a small dark box in the bottom-left corner that faded after four seconds. It looked consistent and calm.
- **What I wrote first:** Keep the one style and improve the wording. Consistency felt like a quality in itself.
- **Where it broke:** “Your place is held for 10 minutes” appeared while the person was looking at the card field, four inches away. It faded. The deadline existed and nobody had been told.
- **What I changed:** That message became a banner at the top of the payment step showing the time left, staying until the payment finished or the hold ended.
- **What stayed a toast:** “Draft saved.” Nothing depends on seeing it, and it happens often enough that a persistent message would turn into noise.

**The wrong turn:** The wrong turn is choosing duration by style rather than by consequence. One treatment for everything looks tidy, and it quietly drops the messages that mattered most.

**What it costs:** Persistent messages take space and have to be cleared, so the screen is busier and someone has to decide what clears each one. That is the price of the message actually arriving.

**Still unknown:** Still unknown: whether four seconds is enough for the routine ones. Reading aloud to one person will not settle it, and lengthening it costs almost nothing if you doubt it.

- Place each message where the change it describes happened.
- Set duration by consequence: fading only for routine, reversible confirmations.
- Make anything about money or lost work persist until resolved.

**You should end up with:** Four types specified: where each appears, how long it stays and what clears it.

**Try it with help.** Three supplied messages from a made-up booking product, all shown the same way: a small box in the bottom-left corner that fades after four seconds. A is “Draft saved.” B is “Your place is held for 10 minutes.” C is “Payment failed. No money has been taken.”

Which of these is still delivered by a box that fades after four seconds?

- **A only. Nothing depends on the person seeing it, and it will happen again.** — A missed save note costs nothing, so the quiet treatment fits. B carries a deadline and C carries money, and both are gone before someone looking at the form could read them.
- B and C as well. Four seconds is long enough to read a short sentence. — Four seconds is long enough to read one, and only if the person happens to be looking at that corner. During payment they are looking at the card field.
- None of them. A message that fades has not been delivered at all. — The rule is about consequence rather than fading. For a saved draft, quiet and repeated is the right treatment.
- C only. People watch for failures. — People watch for a failure once they suspect one. The failure arrives before the suspicion, and a fading box is how someone ends up unsure whether they have been charged.

**Then:** Go back through your own four rows and mark any message that would be gone before it was read.

Worksheet fields for this step, revealed a few at a time in the app:

- Success · where it appears, how long it stays, what clears it
- Progress · where it appears, how long it stays, what clears it
- Warning · where it appears, how long it stays, what clears it
- Failure · where it appears, how long it stays, what clears it

<details>
<summary>Help with this step</summary>

- **Duration:** How long a message stays on screen. It is a decision with a reason behind it, not a default left to whoever builds the screen.

Stuck starting? Put each message where the change it describes happened, then ask what the person loses if they look away.

Is it enough? No message about money, a deadline or unsaved work fades on its own.

</details>

#### 3. Rewrite for meaning without colour

- Rewrite each message as what happened, what it means, what to do.
- Pair each type with a distinct icon shape as well as a colour.
- Check every message reads correctly in greyscale.

**You should end up with:** Every message rewritten as what happened, what it means and what to do, with a shape as well as a colour for each type.

Worksheet fields for this step:

- Each message rewritten as what happened, what it means, what to do
- The distinct icon shape you have given each of the four types
- What you found when you read them all with the colour taken away — On paper, shade over the colour with a pencil. On a screen, a greyscale photograph does the same job.

<details>
<summary>Help with this step</summary>

- **Greyscale:** The same design with the colour taken away. It shows what your message says to someone who cannot separate your two colours.

Stuck starting? Rewrite the failure message first; it is the one where a missing sentence hurts most.

Is it enough? With the colour gone, you can still tell good news from bad by the words alone.

</details>

#### 4. Decide the actions

- Mark which messages carry an action and which are informational.
- Give every failure message a route forward, not just a description.
- Check that two messages cannot appear in the same place at once.

**You should end up with:** Which messages need an action, a route forward on every failure, and a rule stopping two messages sharing one place.

Worksheet fields for this step:

- Which messages need something from the person, and which only inform
- For each failure: the one thing the person can do now, or who to contact
- What stops two messages appearing in the same place at once

<details>
<summary>Help with this step</summary>



Stuck starting? For each failure, write the sentence the person would say next and answer it inside the message.

Is it enough? No failure message ends without something the person can do.

</details>

#### 5. Test aloud and record

- Read each message to someone and ask what they would do next.
- Rewrite any message that produces a shrug or a wrong answer.
- Save the four specifications with placement and duration rules.

**You should end up with:** What happened when the messages were read aloud, and the repair the Check questions asked for.

Worksheet fields for this step:

- What happened when you read each message aloud and asked what they would do next — If nobody is available, read them aloud yourself after a break and note where you hesitated. Write plainly that no one else heard them.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Read each message to one person and ask only “what would you do next?”.

Is it enough? Any message that produced a shrug has been rewritten, or the gap is written down honestly.

</details>

**Save and continue.** Saved for you: The message list, the four specifications and your wording save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. Keep your m07 exception table beside you; most of these messages come from it. What your creator sees: Your creator reads the four rows and the failure wording. The duration column is the part most message sets never have. Your next action: Open Your work and choose Ready for review. The next lesson designs the states these messages appear in: empty, loading and error.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write the four rows out. Any row missing a duration will be decided by whoever builds it.

</details>

<details>
<summary>Hint 2</summary>

Mark every message concerning money, a deadline or unsaved work. Each must persist until acted on.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Telling people what happened.
Task: Design your product's system messages — success, progress, warning and failure — deciding for each where it appears, how long it stays and whether it needs an action.
Challenge one thing at a time, and start with the mistake this lesson is about: “Toasts are a clean way to show status.” They are a clean way to show status to someone watching that corner at that moment. For anything a person must act on or will need later, a toast is a way of appearing to communicate without communicating.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the four specifications and ask whether four types are specified with placement and duration. Look at the revised duration rules and ask whether consequential messages persist until resolved. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m08-l08-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Four types are specified with placement and duration: A specification per type stating where it appears, how long it stays and what dismisses it. Consequential messages persist until resolved: Money, time-limit and lost-work messages specified as persistent, with what clears them. Meaning survives without colour: Greyscale renderings plus wording that states the outcome explicitly, with distinct icon shapes per type. Every failure message offers a route forward: Each failure states an action the person can take now, or who to contact.

**Bring forward:** Small, specific and credible: a message set with placement and duration rules shows you design the moments products usually leave to whoever implements them. Module handoff: Support interaction and accessibility in m09–m11


### Practice and pause points

- Collect what you already wrote (~20 min): Gather every message from your m07 exception table and state specifications. Sort them into success, progress, warning and failure. Mark which concern money, time or lost work.
- Decide placement and duration (~30 min): Place each message where the change it describes happened. Set duration by consequence: fading only for routine, reversible confirmations. Make anything about money or lost work persist until resolved.
- Rewrite for meaning without colour (~25 min): Rewrite each message as what happened, what it means, what to do. Pair each type with a distinct icon shape as well as a colour. Check every message reads correctly in greyscale.
- Decide the actions (~30 min): Mark which messages carry an action and which are informational. Give every failure message a route forward, not just a description. Check that two messages cannot appear in the same place at once.
- Test aloud and record (~15 min): Read each message to someone and ask what they would do next. Rewrite any message that produces a shrug or a wrong answer. Save the four specifications with placement and duration rules.

Pause after any step; save the artifact and next action.

**Free tool path.** Write all four messages out on paper at the position they will appear on the screen sketch. Read each aloud to someone and ask what they would do next; that is the whole test.

### Output

Four message types specified: success, progress, warning and failure; Placement and duration rules for each type; Wording that carries meaning without colour; A list of which messages require an action and which do not

### Checks

- When is a fading message acceptable? Answer: For routine, reversible confirmations where missing it costs nothing. Anything about money, time limits or lost work must persist until the person deals with it.
- Why place messages at the change rather than in a corner? Answer: Because a message far from its cause makes people search for what happened, and on a phone a fixed corner often covers the control the message is telling them to use.
- What are the three parts of a good message? Answer: What happened, what it means for the person — especially about money and lost work — and what to do next. Most products write only the first.

### Rubric and remediation

**Four types are specified with placement and duration**

Adequate evidence: A specification per type stating where it appears, how long it stays and what dismisses it.

- 0 — One message style used for everything.
- 1 — Types distinguished visually but placement or duration unstated.
- 2 — All four specified with placement, duration and dismissal.
- 3 — As adequate, and the specification states what happens when two messages occur together.

If below 2: Write the four rows out. Any row missing a duration will be decided by whoever builds it. Show at recheck: The four specifications.

**Consequential messages persist until resolved**

Adequate evidence: Money, time-limit and lost-work messages specified as persistent, with what clears them.

- 0 — Consequential messages fade.
- 1 — Persistence claimed but no clearing condition given.
- 2 — Persistent with a stated clearing condition.
- 3 — As adequate, and a persistent message survives a page reload where the state still applies.

If below 2: Mark every message concerning money, a deadline or unsaved work. Each must persist until acted on. Show at recheck: The revised duration rules.

**Meaning survives without colour**

Adequate evidence: Greyscale renderings plus wording that states the outcome explicitly, with distinct icon shapes per type.

- 0 — Status carried by colour alone.
- 1 — Icons added but the wording still requires the colour to interpret.
- 2 — Words, shape and colour together, verified in greyscale.
- 3 — As adequate, and the wording alone would be sufficient if all styling were lost.

If below 2: Read each message with the styling removed. If you cannot tell whether it is good or bad news, rewrite the words. Show at recheck: The greyscale check and revised wording.

**Every failure message offers a route forward**

Adequate evidence: Each failure states an action the person can take now, or who to contact.

- 0 — Failures described but no route offered.
- 1 — A route offered in some cases.
- 2 — Every failure carries a next action.
- 3 — As adequate, and one route is a person or a phone number for the case where the product cannot help.

If below 2: For each failure write the sentence a person would say next: “so what do I do?”. Answer it in the message. Show at recheck: The failure messages.

### Portfolio contribution

Small, specific and credible: a message set with placement and duration rules shows you design the moments products usually leave to whoever implements them.

### Assigned resources

- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 1, visibility of system status, and heuristic 9, help users recognise, diagnose and recover from errors. Purpose: Sets the obligations a status message carries: say what is happening and how to recover. Effort: 15–25 selected min. Free reading, no account. Verified 2026-09-06. Heuristics do not specify placement or duration; those rules are this lesson's own. Fallback: R11.
- R29: [web.dev: colour and contrast](https://web.dev/learn/accessibility/color-contrast) — The sections on not relying on colour alone and on colour-vision deficiency. Purpose: Explains why status needs words and shape as well as colour. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. The page carries no code samples; the greyscale check in this lesson is the practical test. Fallback: R30.

## Lesson 9: Empty, loading and error states with craft

Stable ID: m08-l09-v1. Core. Areas 8. Optional effort ~120 min.

**Objective.** Design the empty, loading and error states of two screens so each teaches, reassures or recovers, and check them on a throttled connection.

**Bring forward.** Your m07 state tables and the screens from this module.

These states are what people meet on their first visit, on a slow connection and on a bad day. They are not edge cases.

### Learn

The first-run empty state carries more teaching than any tour, because it appears exactly where the person is looking and describes the thing they are about to have. Three sentences do the work: what will appear here, why it is worth having, and the single action that creates the first one. A blank panel with an icon teaches nothing and reads as a product that is not working.

Empty has causes, and the response differs. Nothing yet needs teaching and a start action. Nothing matched needs the filter that excluded everything named and offered for removal. Nothing left — the class is full, the item is gone — needs an alternative. Treating all three as one state produces the familiar message that tells a person nothing about their own situation.

Honest progress means telling people what is happening when it takes long enough to notice. A spinner communicates only that something is happening; after a few seconds people need to know what, and after a payment they need to know whether their money is at risk. Where you know the steps, name the current one. Where you do not, say what you are waiting for and how long it usually takes.

Reserving the space that content will occupy prevents the jump that makes people tap the wrong thing — a real cost, not an aesthetic one, since a person who taps just as the layout shifts activates whatever moved under their finger. A simple placeholder block of roughly the right size solves it without needing an animated skeleton.

**Common misconception.** “Empty and loading states are polish for later.” They are the first thing a new person sees and the thing everyone sees on a poor connection. Designed last, they get whatever the framework provides, which is usually a blank area and a spinner.

### Worked example

The bookings screen showed a blank panel to new people and the same panel when a filter matched nothing. Rebuilt into three: for a new person, “Your bookings appear here once you book a class. Find a class on Saturday” with the action beside it; for a filter with no matches, “No classes match Saturday morning under 500. Remove the price filter to see three more”; and for a full class, the alternative dates. Loading reserved the row heights so nothing jumped, and after three seconds the message changed to name what was being waited for.

#### Empty, loading and error states with craft

Design the empty, loading and error states of two screens so each teaches, reassures or recovers, and check them on a throttled connection.

**Where to practise:** Draw the three empty states, the loading treatment and the error states on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Sketch the three empty causes side by side and write the full wording. Use your browser's throttling to watch a comparable real page load slowly and time how long the gap feels.

- Starting material: Your m07 state tables and two interface-fidelity screens.
- Create HaruCourse/Practice/m08-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. List the states you owe

- From your m07 state tables, list every empty, loading and error state on two screens.
- Mark the cause of each empty state: new, filtered or exhausted.

**You should end up with:** Every empty, loading and error state on your two screens, with the cause of each empty one named.

Worksheet fields for this step:

- Every empty, loading and error state across your two screens — Take them from your m07 state tables. If a state is missing there, it is missing from the design too.
- For each empty state: the cause — new, filtered or exhausted

<details>
<summary>Help with this step</summary>

- **Empty state:** What a screen shows when there is nothing to show. It is the first thing a new person meets, and the only thing on the screen to learn from.
- **Exhausted:** Empty because there genuinely is nothing left: the class is full, or every date has already passed.

Stuck starting? Open your m07 state tables and copy every state across before you write any wording.

Is it enough? Each empty state has one of the three causes beside it.

</details>

#### 2. Write the empty states

**See it first.** Made-up example. One blank panel doing the work of three empty states in a class-booking product.

- **What the screen did:** The bookings list showed a grey box and the words “Nothing here yet.” It showed exactly the same thing when a filter matched nothing.
- **What I wrote first:** “No bookings found.” Shorter and cleaner, and I thought clean was the goal.
- **Why that was the worst version:** It is the first screen a new person sees. It had one job — teach her what this list is for — and it spent the space apologising instead.
- **What replaced it:** “Your bookings appear here once you book a class. Classes run on Saturdays and Wednesdays.” with an action beside it reading “Find a class on Saturday”.
- **What the filtered case got:** A different sentence entirely: “No classes match Saturday morning under 500. Remove the price filter to see three more.” It names the filter that did it.

**The wrong turn:** The wrong turn is treating an empty screen as a gap to apologise for. It is the one moment where the person has nothing to read but you, and a shrug wastes it.

**What it costs:** Three separate messages are three things to write and keep true as the product changes. One sentence would be cheaper and would teach nobody anything.

**Still unknown:** Still unknown: whether the suggested action offers the right first class. That is a question about what people book first, and this lesson cannot answer it.

- For the new case write what appears, why and the first action.
- For the filtered case name the filter responsible and offer to remove it.
- For the exhausted case offer the alternative.

**You should end up with:** Three empty states written out in full, one per cause, each saying what appears here, why it is blank, and how to start.

**Try it with help.** Two supplied empty states for the same made-up bookings list. A is a grey illustration of an empty box with the words “Nothing here yet.” B is “Your bookings appear here once you book a class. Classes run on Saturdays and Wednesdays.” with an action reading “Find a class on Saturday”.

What is B actually doing that A is not?

- **B says what belongs here, why the screen is blank and the one action that starts it, so the empty screen teaches.** — Those three parts turn a blank area into the clearest lesson in the product. A has the same space and spends it on an apology.
- B is longer, and a new person needs more words. — Length is not the difference. A long empty state that still fails to say what appears here, or how to begin, teaches nothing.
- B has an action, and an action is what every empty state needs. — The action helps and is not enough on its own. An action with no explanation of what the list is for leaves a new person guessing.
- B has no illustration, and illustrations do not belong in empty states. — An illustration is fine beside wording that teaches. What fails in A is the sentence, not the picture.

**Then:** Read your own three empty states back and check each one names what appears here, why it is blank now, and what to do next.

Worksheet fields for this step, revealed a few at a time in the app:

- Empty because the person is new · what appears here, why, and the one action that starts it
- Empty because a filter excluded everything · which filter did it, and the offer to remove it
- Empty because there is genuinely nothing left · the alternative you offer instead

<details>
<summary>Help with this step</summary>



Stuck starting? Write the new-person one first, out loud, as if you were explaining the screen to someone standing beside you.

Is it enough? Each of the three could only belong to its own cause.

</details>

#### 3. Design loading honestly

- Reserve the space the content will occupy so nothing jumps.
- Write what the message says after about three seconds.
- Say what is being waited for where you know it.

**You should end up with:** A loading treatment that holds the eventual space, and what the screen says at about three seconds and at about fifteen.

Worksheet fields for this step:

- How the loading state holds the space the content will take, so nothing jumps when it arrives
- What the screen says at about three seconds, and at about fifteen — Name what is being waited for wherever you know it. A slow thing needs a sentence, not a faster spinner.

<details>
<summary>Help with this step</summary>

- **Reserved layout:** Drawing the loading state at the size the real content will take, so nothing shifts under the person’s finger when it arrives.

Stuck starting? Trace the loaded screen and shade the content out. That outline is your loading state.

Is it enough? Nothing on the screen changes position between loading and loaded.

</details>

#### 4. Design the error states

- Specify that entered work is preserved through the failure.
- Write what happened, what it means and the route forward.
- Add a retry that does not lose position or filters.

**You should end up with:** Errors that keep everything the person entered, say what happened and what it means, and a retry that keeps position and filters.

Worksheet fields for this step:

- Everything the person had entered or chosen, specified as preserved through the failure
- For each error: what happened, what it means, and the route forward
- What the retry does, and what it keeps: position, filters and anything typed

<details>
<summary>Help with this step</summary>



Stuck starting? Walk one failure in your own flow and write down everything you would lose.

Is it enough? Nothing the person typed or chose appears on the lost list.

</details>

#### 5. Throttle and record

- Load a comparable page on a slow throttled connection with the cache disabled.
- Record what appeared first and how long the gap lasted.
- Change one thing because of what you saw, and save the states.

**You should end up with:** What a slow load actually looked like, one change made because of it, what you could not check, and the repair the Check questions asked for.

Worksheet fields for this step:

- What you saw on a slow connection: what appeared first, what appeared last, and how long the gap lasted — Use the free network-throttling setting in your browser’s own developer tools, with the cache turned off, on a page like the one you are designing. Write times, not impressions.
- The one thing you changed because of what you saw
- Anything you could not check because nothing is built, written down as untested rather than assumed
- Where the state drawings live — File names or “paper, in my folder”. Nothing is uploaded.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Throttling:** A setting in your browser’s own developer tools that pretends the connection is slow. It is free and changes nothing outside that tab.

Stuck starting? Open the developer tools on a page like yours, set the network to a slow profile with the cache turned off, reload, and watch what arrives first.

Is it enough? The notes carry times and an order of arrival, and anything you could not check is written down as untested.

</details>

**Save and continue.** Saved for you: The state list, the three empty states and your throttling notes save as you type, on this device first and then online. Kept outside the app: The drawings stay on paper or in your own folder. Note the file name in the last step; naming a file does not upload it. What your creator sees: Your creator reads the three empty states and the throttling notes. Three states that could not be swapped for one another is the thing to look for. Your next action: Open Your work and choose Ready for review. The next lesson draws one chart from numbers you actually hold.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

List the ways your list can be empty and write three separate messages. If two read the same, one of them is wrong.

</details>

<details>
<summary>Hint 2</summary>

Draw the loading state at the same size as the loaded one. Then write what the screen says at three seconds and at fifteen.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Empty, loading and error states with craft.
Task: Design the empty, loading and error states of two screens so each teaches, reassures or recovers, and check them on a throttled connection.
Challenge one thing at a time, and start with the mistake this lesson is about: “Empty and loading states are polish for later.” They are the first thing a new person sees and the thing everyone sees on a poor connection. Designed last, they get whatever the framework provides, which is usually a blank area and a spinner.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the three empty states and ask whether empty states are distinguished by cause with full wording. Look at the loading specification and ask whether loading reserves layout and reports what is awaited. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m08-l09-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Empty states are distinguished by cause with full wording: Three written states — new, filtered, exhausted — each with what appears, why and a next action. Loading reserves layout and reports what is awaited: A loading treatment holding the eventual space, with the message shown after a few seconds. Errors preserve work and offer a route: Error states specifying preserved input, plain wording and a retry that keeps position and filters. A throttled check was run and changed something: Recorded observations from a slow load with the cache disabled, and one resulting change.

**Bring forward:** Reviewers notice these. Empty and error states designed with real wording are among the clearest signals that a designer has shipped, or is ready to. Module handoff: Support interaction and accessibility in m09–m11


### Practice and pause points

- List the states you owe (~20 min): From your m07 state tables, list every empty, loading and error state on two screens. Mark the cause of each empty state: new, filtered or exhausted.
- Write the empty states (~30 min): For the new case write what appears, why and the first action. For the filtered case name the filter responsible and offer to remove it. For the exhausted case offer the alternative.
- Design loading honestly (~25 min): Reserve the space the content will occupy so nothing jumps. Write what the message says after about three seconds. Say what is being waited for where you know it.
- Design the error states (~30 min): Specify that entered work is preserved through the failure. Write what happened, what it means and the route forward. Add a retry that does not lose position or filters.
- Throttle and record (~15 min): Load a comparable page on a slow throttled connection with the cache disabled. Record what appeared first and how long the gap lasted. Change one thing because of what you saw, and save the states.

Pause after any step; save the artifact and next action.

**Free tool path.** Sketch the three empty causes side by side and write the full wording. Use your browser's throttling to watch a comparable real page load slowly and time how long the gap feels.

### Output

Three empty states distinguished by cause, with full wording; A loading treatment that reserves layout and names what is awaited; Error states that preserve work and offer a route; Throttled-connection observations with one change made

### Checks

- Why distinguish the three causes of empty? Answer: Because the person's situation differs. A new person needs teaching, a filtered person needs the responsible filter named, and someone facing an exhausted list needs an alternative.
- What does reserving layout during loading prevent? Answer: The jump that makes people activate whatever moved under their finger. It is a correctness problem, not a polish one.
- What does an error state owe the person? Answer: Their work, kept; a plain statement of what happened and what it means; and a route forward that does not restart the task.

### Rubric and remediation

**Empty states are distinguished by cause with full wording**

Adequate evidence: Three written states — new, filtered, exhausted — each with what appears, why and a next action.

- 0 — One generic empty message.
- 1 — Two causes distinguished, or wording that only names the section.
- 2 — All three with complete wording.
- 3 — As adequate, and the filtered case names the specific filter that excluded everything.

If below 2: List the ways your list can be empty and write three separate messages. If two read the same, one of them is wrong. Show at recheck: The three empty states.

**Loading reserves layout and reports what is awaited**

Adequate evidence: A loading treatment holding the eventual space, with the message shown after a few seconds.

- 0 — A spinner with no layout reservation.
- 1 — Layout reserved but no message for a long wait.
- 2 — Both, with the message naming what is being waited for.
- 3 — As adequate, and a timeout behaviour is specified for when the wait does not end.

If below 2: Draw the loading state at the same size as the loaded one. Then write what the screen says at three seconds and at fifteen. Show at recheck: The loading specification.

**Errors preserve work and offer a route**

Adequate evidence: Error states specifying preserved input, plain wording and a retry that keeps position and filters.

- 0 — Errors lose work or offer no route.
- 1 — Work preserved but retry restarts the task.
- 2 — Work, wording and a non-destructive retry all specified.
- 3 — As adequate, and the retry preserves scroll position and filters as well as input.

If below 2: Walk a failure in your own flow and write down everything the person loses. Specify each as preserved. Show at recheck: The error specification.

**A throttled check was run and changed something**

Adequate evidence: Recorded observations from a slow load with the cache disabled, and one resulting change.

- 0 — Not run.
- 1 — Run without recording what appeared or how long it took.
- 2 — Run, recorded, and one change made.
- 3 — As adequate, and the record notes what a person would reasonably do during the gap.

If below 2: Run the throttled load again and write the sequence with timings rather than an impression. Show at recheck: The throttling notes and the change.

### Portfolio contribution

Reviewers notice these. Empty and error states designed with real wording are among the clearest signals that a designer has shipped, or is ready to.

### Assigned resources

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — The notification banner and error message components, read for content rules rather than styling. Purpose: Gives worked wording patterns for states people meet under stress. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. It does not cover empty or loading states, which are this lesson's own; take the content discipline. Fallback: R06.
- R33: [NN/g: recognition and recall](https://www.nngroup.com/articles/recognition-and-recall/) — Recognition versus recall and the interface implications. Purpose: Explains why an empty state teaching in place beats an instruction the person had to remember. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. It does not discuss empty states directly; the application is this lesson's. Fallback: R31.

## Lesson 10: Charts that do not mislead

Stable ID: m08-l10-v1. Core. Areas 8. Optional effort ~120 min.

**Objective.** Draw one chart from data you actually hold, following the assigned conventions, and write the alternative text that carries the same information to someone who cannot see it.

**Bring forward.** Any real counts you hold: your m05 survey responses, your m06 tree-test results or your own practice log.

A chart makes a claim look measured. Drawing one from four participants and reading it as a trend is the fastest way to mislead yourself and everyone downstream.

### Learn

The chart type follows from the comparison you want a reader to make. Bars compare amounts across categories and rely on length, which is why truncating their axis is a distortion rather than a style choice: half the bar is missing but the reader still compares lengths. Lines show change across a continuous scale, usually time, and their axis may be broken when the change is small relative to the values, provided the break is visible and labelled.

The assigned guidance is precise about the mechanics: horizontal axis text, thousands separated, light gridlines and few of them, legends ordered to match the data, direct labelling preferred, and colour contrast meeting the accessibility threshold. Following it costs nothing and removes the most common ways a chart becomes harder to read than the table it came from.

Alternative text is not a caption. Someone who cannot see the chart needs the information it carries — the comparison and the values that matter — not a description of its appearance. “Bar chart of bookings by day” carries nothing; “Bookings by day: Saturday 34, Sunday 21, weekdays fewer than 10 each; n = 96 over four weeks” carries the finding. Publishing the underlying numbers alongside is better still.

The sample belongs on the chart itself, not in a footnote elsewhere, because a chart is the part that gets screenshotted and forwarded. A chart of eight survey responses drawn without n reads as a measurement of a population, and the person who reposts it will not know it was not.

**Common misconception.** “Charts make findings clearer.” They make comparisons visible, which is not the same thing. A chart drawn from a small sample makes an uncertain finding look precise, and precision is exactly what a reader takes from a picture with an axis.

### Worked example

Twenty-two survey responses became a bar chart of “was it clear your payment had gone through?”. The first draft had a truncated axis that made nine look nearly twice fifteen, a legend requiring decoding, and no n. Redrawn: full axis from zero, direct labels on each bar, light gridlines, n = 22 stated in the subtitle with the recruitment route named, and alternative text reading “Of 22 people recruited through two WhatsApp groups, 9 were unsure their payment had gone through, 13 were sure.” The underlying counts were published beneath it.

#### Charts that do not mislead

Draw one chart from data you actually hold, following the assigned conventions, and write the alternative text that carries the same information to someone who cannot see it.

**Where to practise:** Draw the chart and the counts printed beneath it on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Graph paper and a ruler, photographed, is a legitimate chart and forces you to plot the real values. A spreadsheet works if you have one; no paid tool or plotting library is required.

- Starting material: A small set of real counts you can honestly attribute.
- Create HaruCourse/Practice/m08-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

<details>
<summary>Optional video paired with step 4</summary>

[Web Accessibility Perspectives: Text to Speech](https://www.w3.org/WAI/perspective-videos/speech/) — W3C Web Accessibility Initiative, 45 s, English, English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page. Whole video, 45 seconds. Watch from 0:04 to 0:40.

What to notice:

- 0:04–0:11 — A computer voice reads the screen aloud, because some people cannot see the text on it.
- 0:11–0:20 — Blind people have relied on this for years, and it matters for many people with dyslexia too.
- 0:29–0:34 — For it to work, the page has to be properly built.
- 0:34–0:40 — The same structure also helps search engines index what is there.

**Then:** Straight after watching, write your chart’s alternative text without looking at the chart. If you cannot, the text is describing the picture rather than carrying the finding.

**Without the video:** No video needed: cover your chart and write the sentence you would say to somebody on the telephone. That is the alternative text.

A synthetic voice reading generic pages, not your chart. It shows why something has to carry the meaning when the picture cannot; writing that sentence is your step. Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use. Checked 7 September 2026.

</details>

#### 1. Read the conventions

- Read the assigned chart guidance for the type you plan to use.
- Write down its rules for axes, gridlines, labelling and contrast.

**You should end up with:** The drawing rules you are working to, written as instructions to yourself.

Worksheet fields for this step:

- What the guidance says about axes and gridlines — Write the rules as instructions to yourself, not as a summary of the page.
- What it says about labelling, legends and colour contrast

<details>
<summary>Help with this step</summary>

- **Gridline:** A faint line across the chart that helps the eye reach a value. Few and light, or they compete with the data.
- **Legend:** A key off to one side saying what each colour means. It makes the reader hold two things in mind at once.

Stuck starting? Read the assigned guidance once, then close it and write the rules from memory. Go back for the ones you could not recall.

Is it enough? Each line tells you to do or not do something specific when you pick up the ruler.

</details>

#### 2. Choose the comparison

- Write the one comparison you want a reader to make.
- Choose the chart type that serves it: amounts across categories, or change over time.
- Reject the type that would flatter your finding.

**You should end up with:** One comparison in a sentence, the chart type that serves it, and the type you turned down.

Worksheet fields for this step:

- The one comparison you want a reader to make
- The real counts you are using, and where they came from — Your m05 survey answers, your m06 tree-test results, or your own practice log. Real numbers only.
- The chart type you chose (Bar chart · amounts across categories / Line chart · change over time / Something else, named in the next box)
- The type you rejected, and how it would have flattered your finding

<details>
<summary>Help with this step</summary>

- **n:** How many people or things the chart is drawn from. A chart of eight answers is a picture of eight answers.

Stuck starting? Write the sentence you want the reader to leave with. The chart type is whatever makes exactly that sentence visible.

Is it enough? Your counts are real numbers you already hold, not numbers you expect to have later.

</details>

#### 3. Draw it honestly

**See it first.** Made-up example. Drawing one bar chart from twenty-two survey answers, and finding the first draft said something the answers could not support.

- **What I had:** Twenty-two answers to one question: was it clear your payment had gone through? Nine said no, thirteen said yes.
- **My first draft:** Two bars, with the axis starting at eight because that fitted the graph paper neatly, and a legend in the corner. The nine looked like roughly a third of the thirteen.
- **What a reader took from it:** She looked at it and said “so hardly anyone was confused”. The cut axis had done that, not the answers.
- **What I changed:** Axis from zero. The counts written on the bars themselves. Legend deleted. And under the title, in the same ink: 22 people, reached through two WhatsApp groups.
- **What it cost:** The redrawn chart is duller. Nine against thirteen now looks like what it is, and the picture no longer promises more than twenty-two people can give.

**The wrong turn:** The wrong turn is cutting the axis so the difference is easier to see. On bars the length is the comparison, so a cut axis is not emphasis. It is a different number.

**What it costs:** A full axis and a stated n make a small study look small, and you may stop wanting to show it. That feeling is the finding being honest about its size.

**Still unknown:** Still unknown: whether twenty-two people reached through two group chats resemble anyone else. Nothing in the drawing can fix that, which is why the sample line says it.

- Start the numerical axis at zero for bars.
- Label directly rather than using a legend where you can.
- Check the colours against the contrast threshold.

**You should end up with:** The chart drawn to the rules: axis from zero for bars, direct labels, measured colours.

Worksheet fields for this step:

- Where your numerical axis starts, and why — For bars the only answer is zero. Write it down anyway, so you notice if it is not.
- How each value is labelled, and any legend you were able to remove
- The contrast ratios you measured for the chart colours and their labels, and the checker you used — A free browser-based checker, or the offline calculation from earlier in the course. No plugin needed.

<details>
<summary>Help with this step</summary>



Stuck starting? Rule the axis first and mark zero before you plot anything. It is much harder to talk yourself into cutting it later.

Is it enough? Every value can be read off the chart without going to a key, and each colour has a measured number beside it.

</details>

#### 4. Write the alternative text

- Write the comparison and the values, not a description of the picture.
- State n and how those people were reached.
- Publish the underlying numbers beneath the chart.

**You should end up with:** Alternative text carrying the comparison, the values and the sample, with the counts published beneath.

**Try it with help.** One made-up chart: of 22 people, 9 were unsure their payment had gone through and 13 were sure. It is two bars with the counts written on them.

Which alternative text carries the same information to someone who cannot see it?

- **Of 22 people reached through two WhatsApp groups, 9 were unsure their payment had gone through and 13 were sure.** — It gives the comparison, both counts and the sample. A reader who never sees the bars can use it exactly as you can.
- A bar chart showing responses to the payment clarity question. — It names the subject and withholds the answer. The reader learns that a chart exists, which is not what the chart is for.
- Two vertical bars, the right one taller than the left, with a light grid behind them. — This describes the drawing. Someone could redraw the picture from it and still not know what anybody answered.
- Most people were sure their payment had gone through. — It carries a conclusion instead of the values, and “most” from thirteen of twenty-two is doing more work than the counts allow.

**Then:** Cover your own chart and read only your alternative text. If you cannot answer the question the chart was drawn to answer, rewrite it with the counts in it.

Worksheet fields for this step:

- The sample line as it appears on the chart: how many people, and how they were reached
- Your alternative text — The comparison and the values. Not the colours, the shapes or the gridlines.
- The counts published beside the chart

<details>
<summary>Help with this step</summary>

- **Alternative text:** The words offered in place of a picture. Its job is to carry the information, not to describe the drawing.

Stuck starting? Write the sentence you would say aloud to someone on the phone who cannot see the page. That sentence is the alternative text.

Is it enough? The text contains the values, the comparison and how many people, and none of the colours.

</details>

#### 5. Test the claim

- Show the chart to someone and ask what it tells them.
- If they state something your sample cannot support, change the chart or its labels.
- Save the chart, the alternative text and the numbers.

**You should end up with:** What a reader took from the chart, anything your data cannot support, and the change the Check questions sent you back to make.

Worksheet fields for this step:

- What the person you showed it to said it told them — Ask, then write their words down before you explain anything.
- Anything they claimed your data cannot support, and what you changed
- Where the chart and the counts live — A file name, or “paper, in my folder”. Nothing is uploaded.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Show it without introducing it. Ask “what does this tell you?” and write the answer down before you say anything.

Is it enough? You have their words, and any claim your numbers cannot carry has been fixed in the chart or its labels.

</details>

**Save and continue.** Saved for you: The comparison, the alternative text and the counts save as you type, on this device first and then online. Kept outside the app: The chart itself stays on your graph paper or in your spreadsheet. Note where it lives in the last step; nothing is uploaded. What your creator sees: Your creator reads the alternative text beside the counts. A chart whose text carries the finding is the part that cannot be faked. Your next action: Open Your work and choose Ready for review. The next lesson names every colour, size and space you use, and measures the ones that carry text.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write the sentence you want a reader to take away, then choose the chart that makes exactly that comparison visible.

</details>

<details>
<summary>Hint 2</summary>

Take the guidance as a checklist and mark your chart against each rule. Fix every failure or justify it in writing.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Charts that do not mislead.
Task: Draw one chart from data you actually hold, following the assigned conventions, and write the alternative text that carries the same information to someone who cannot see it.
Challenge one thing at a time, and start with the mistake this lesson is about: “Charts make findings clearer.” They make comparisons visible, which is not the same thing. A chart drawn from a small sample makes an uncertain finding look precise, and precision is exactly what a reader takes from a picture with an axis.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the comparison sentence and the chart and ask whether the chart type matches the comparison. Look at the checked chart and ask whether axes, labelling and contrast follow the assigned conventions. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m08-l10-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The chart type matches the comparison: A stated comparison and a chart type chosen for it, with the rejected alternative named. Axes, labelling and contrast follow the assigned conventions: A chart with a full bar axis, horizontal axis text, light and few gridlines, direct labels where possible, and checked contrast. n and the recruitment route appear on the chart: Sample size and how those people were reached, visible on the chart itself. Alternative text carries the information, not the appearance: Text stating the comparison, the values that matter and the sample, plus the underlying numbers published beside the chart.

**Bring forward:** Portfolio evidence of honesty rather than flourish. A chart with n on it and real alternative text is unusual in junior work and reads as trustworthy. Module handoff: Support interaction and accessibility in m09–m11


### Practice and pause points

- Read the conventions (~25 min): Read the assigned chart guidance for the type you plan to use. Write down its rules for axes, gridlines, labelling and contrast.
- Choose the comparison (~20 min): Write the one comparison you want a reader to make. Choose the chart type that serves it: amounts across categories, or change over time. Reject the type that would flatter your finding.
- Draw it honestly (~30 min): Start the numerical axis at zero for bars. Label directly rather than using a legend where you can. Check the colours against the contrast threshold.
- Write the alternative text (~30 min): Write the comparison and the values, not a description of the picture. State n and how those people were reached. Publish the underlying numbers beneath the chart.
- Test the claim (~15 min): Show the chart to someone and ask what it tells them. If they state something your sample cannot support, change the chart or its labels. Save the chart, the alternative text and the numbers.

Pause after any step; save the artifact and next action.

**Free tool path.** Graph paper and a ruler, photographed, is a legitimate chart and forces you to plot the real values. A spreadsheet works if you have one; no paid tool or plotting library is required.

### Output

One chart drawn from data you actually hold, following the conventions; n and the recruitment route stated on the chart; Alternative text carrying the same information as the chart; The underlying numbers published beside it

### Checks

- Why must a bar chart's axis start at zero? Answer: Because the comparison is bar length. Truncating the axis removes part of every bar while readers still compare lengths, which changes the apparent ratio.
- What belongs in alternative text? Answer: The information the chart carries — the comparison, the values that matter and the sample — not a description of its appearance.
- Why put n on the chart itself? Answer: Because the chart travels alone. Screenshotted into a message without its footnote, a chart of eight responses reads as a measurement of everyone.

### Rubric and remediation

**The chart type matches the comparison**

Adequate evidence: A stated comparison and a chart type chosen for it, with the rejected alternative named.

- 0 — Chart type chosen by habit or appearance.
- 1 — A reasonable type with no stated comparison.
- 2 — Comparison stated, type justified, alternative rejected with a reason.
- 3 — As adequate, and the rejected type is the one that would have flattered the finding.

If below 2: Write the sentence you want a reader to take away, then choose the chart that makes exactly that comparison visible. Show at recheck: The comparison sentence and the chart.

**Axes, labelling and contrast follow the assigned conventions**

Adequate evidence: A chart with a full bar axis, horizontal axis text, light and few gridlines, direct labels where possible, and checked contrast.

- 0 — Conventions ignored; axis truncated or text rotated.
- 1 — Some conventions followed, contrast unchecked.
- 2 — All the listed conventions followed and contrast checked.
- 3 — As adequate, and a deviation is justified explicitly against the guidance.

If below 2: Take the guidance as a checklist and mark your chart against each rule. Fix every failure or justify it in writing. Show at recheck: The checked chart.

**n and the recruitment route appear on the chart**

Adequate evidence: Sample size and how those people were reached, visible on the chart itself.

- 0 — No sample stated.
- 1 — n given in a separate document or footnote.
- 2 — n and route on the chart.
- 3 — As adequate, and the subtitle states what the chart cannot support.

If below 2: Add the sample line into the chart's subtitle, where it survives being screenshotted. Show at recheck: The chart with its subtitle.

**Alternative text carries the information, not the appearance**

Adequate evidence: Text stating the comparison, the values that matter and the sample, plus the underlying numbers published beside the chart.

- 0 — No alternative text, or a description of the chart type.
- 1 — Some values given but the comparison left implicit.
- 2 — Comparison, values and sample all present, with numbers published.
- 3 — As adequate, and someone who cannot see the chart confirmed the text told them what they needed.

If below 2: Cover the chart and read only your alternative text. If you could not answer the question the chart exists to answer, rewrite it. Show at recheck: The alternative text and the published numbers.

### Portfolio contribution

Portfolio evidence of honesty rather than flourish. A chart with n on it and real alternative text is unusual in junior work and reads as trustworthy.

### Assigned resources

- R63: [UK Analysis Function: data visualisation charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/) — The rules for the chart type you use: axes, gridlines, legends versus direct labelling, colour contrast and alternative text. Purpose: Supplies the drawing conventions and the accessibility requirements this lesson applies. Effort: 45–60 selected min. Free reading, no account. Verified 2026-09-06; published 19 May 2022. Written for government statistics and it excludes interactive charts and dashboards; it tells you how to draw a chart honestly, not which analysis to run. Fallback: R29.
- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The 4.5:1 and 3:1 thresholds and the exceptions. Purpose: Gives the measurable threshold for chart colours and their labels. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. A passing ratio is not proof of legibility; check the chart at real size as well. Fallback: R29.

## Lesson 11: The token sheet

Stable ID: m08-l11-v1. Core. Areas 8. Optional effort ~120 min.

**Objective.** Produce a token sheet for colour, type, space and radius with every value named by role, measured for contrast where it carries text, and applied to one screen without exception.

**Bring forward.** Your m03 type scale and spacing work, your component inventory and the screens from this module.

Named values are how a design survives being handed to someone else, and how you notice you have invented a fourth grey.

### Learn

Tokens turn scattered decisions into a vocabulary. Once “surface” and “text-primary” exist, a change of palette becomes one edit rather than a hunt through screens, and a conversation with an engineer stops being about hex codes. The naming rule matters as much as the existence: “light-grey” describes what a value looks like today, so redefining it produces a token whose name is a lie, while “surface-muted” describes a role and can be any colour that fills it.

Small sets stay consistent. Five neutrals, two or three semantic colours, five or six type steps and a spacing scale of about six values will cover a product of this size, and the discipline is refusing the seventh grey when a screen looks slightly off — because that screen is usually telling you a spacing or hierarchy problem rather than a colour problem.

Contrast is measurable, so measure it and write the number beside the pair rather than trusting your eye, which is a poor judge under studio lighting. Record every text-on-surface pair you intend to allow, including the quiet ones — disabled text, placeholder text, captions on tinted backgrounds — because those are where products routinely fall below the threshold, and note that meeting a ratio is a floor rather than proof of legibility.

The test of a token sheet is a screen built from it with no exceptions. The first attempt always produces two or three values that are not in the set, and each of those is information: either the set is missing a genuine role, or the screen is carrying an accidental variation. Resolve each one deliberately, and record which you chose.

**Common misconception.** “More tokens means more flexibility.” More tokens means more places to be inconsistent and more decisions for whoever comes next. A small set with clear roles constrains usefully; a large set is a palette with extra steps.

### Worked example

The token sheet came to twenty-two values: five neutrals, three semantic colours, six type steps, six spacing values and two radii. Applying it to the booking screen surfaced three exceptions — a one-off border grey, a 10px gap and a heading half a step smaller than any token. The border grey became an existing neutral, the gap moved to the nearest spacing value, and the heading revealed a real missing role, so a step was added deliberately. Every text pair was measured; the caption on the tinted panel failed and was darkened, and the measured numbers were written on the sheet.

#### The token sheet

Produce a token sheet for colour, type, space and radius with every value named by role, measured for contrast where it carries text, and applied to one screen without exception.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A written table is a token sheet. For contrast, any free browser-based checker or your operating system's own tools will do, and you can also compute the ratio in a spreadsheet from the published formula; no paid plugin is needed.

- Starting material: Your m03 scale, component inventory and one built screen.
- Create HaruCourse/Practice/m08-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Collect what you already use

- List every colour, type size, spacing value and radius across your screens.
- Mark the near-duplicates: two greys within a few percent, two similar gaps.

**You should end up with:** A count of every colour, type size, spacing value and radius already in use, with the near-duplicates marked.

Worksheet fields for this step:

- Every colour, type size, spacing value and radius you found, with how many of each kind
- The near-duplicates, with the exact difference between them — “Slightly different” is not a finding. Two greys three per cent apart, or a 10 and a 12 gap, is.

<details>
<summary>Help with this step</summary>

- **Token:** A named decision you reuse: surface-raised, text-quiet, space-3. The name is the point; the value behind it can change.
- **Radius:** How rounded a corner is. Two values are almost always enough for a whole product.

Stuck starting? Go through one screen at a time and write down every value as you meet it. Duplicates only become visible once the list is complete.

Is it enough? The counts are real numbers you arrived at by looking, and the near-duplicate list names the exact difference.

</details>

#### 2. Name by role

- Group the values into roles: surface, text, border, action, status.
- Name each token after its role, never after its appearance.
- Cut the set to the smallest that covers your screens.

**You should end up with:** Every value named after the job it does, with the set cut to the smallest that covers your screens.

**Try it with help.** Four made-up names for one value: a mid grey used behind cards and behind the page header. The candidates are light-grey, grey-200, surface-raised and card-background.

Which name is still true after the product gains a dark theme and the value becomes a near-black?

- **surface-raised, because it names what the value is for rather than what it looks like or where it sits.** — The role survives the change. The value behind it becomes near-black and every screen using it stays right with no rename.
- light-grey, because anyone reading the sheet can picture it at once. — It is the easiest name to read today and the first to become a lie. A token called light-grey holding a near-black is worse than no name at all.
- grey-200, because the number keeps the greys in order. — A numbered grey survives a value change and says nothing about when to use it, so two people pick different ones for the same job.
- card-background, because it says exactly where it goes. — It is honest until the header uses it too. A token named after one place it appears leaves you renaming or misusing it as soon as there is a second place.

**Then:** Go through your own names and mark any that describe a colour, a size, a shape or a single place. Rewrite each one as the job it does.

Worksheet fields for this step:

- Colour tokens: role name and value
- Type tokens: role name, size and weight
- Spacing and radius tokens: role name and value
- How many tokens the sheet holds in total — Write the number. If it is more than about twenty-five, look again for near-duplicates.
- Any name you changed from appearance to role, and what the old name would have broken

<details>
<summary>Help with this step</summary>



Stuck starting? Sort the values into roles first — surface, text, border, action, status — and name them only once the piles exist.

Is it enough? No name mentions a colour, a size or one particular screen, and you can recite the set from memory.

</details>

#### 3. Measure contrast

- Measure every text-on-surface pair you intend to allow.
- Record the ratio beside each pair on the sheet.
- Repair or forbid any pair that falls below the threshold.

**You should end up with:** A measured contrast ratio beside every text-on-surface pair you allow, including the quiet ones.

Worksheet fields for this step:

- Every text-on-surface pair you allow, with its measured ratio and the checker you used — Include the quiet ones: captions, placeholder text, disabled labels, text on tinted panels.
- Any pair below the threshold, and whether you repaired it or forbade it

<details>
<summary>Help with this step</summary>

- **Contrast ratio:** A number comparing the lightness of text against what is behind it. Measured with a free checker, never guessed by eye.

Stuck starting? List the pairs before you measure anything. The pairs you forget to list are the ones that fail.

Is it enough? Every pair on the sheet carries a number, and any failure has been repaired or written down as forbidden.

</details>

#### 4. Apply without exception

**See it first.** Made-up example. Rebuilding one booking screen from a token sheet, and finding three values the sheet did not have.

- **Where I started:** A sheet of twenty-two values: five neutrals, three status colours, six type steps, six spacing values and two radii.
- **What I told myself:** The rebuild would take twenty minutes, because the screen was already made of those values. It was not.
- **What I had to invent:** A border grey that was on no list, a ten-pixel gap between the heading and the list, and a heading half a step smaller than any type token.
- **The mistake I nearly made:** Adding all three to the sheet. That would have made twenty-five values and three fresh ways to be inconsistent, and it felt like progress.
- **What I did instead:** The border grey became an existing neutral, and nobody could tell. The gap moved to the nearest spacing value. The heading was a real missing role, so one step was added on purpose.

**The wrong turn:** The wrong turn is adding a token every time the screen resists. Each one is reasonable on its own, and together they turn a sheet of decisions back into a box of values.

**What it costs:** Forcing a screen onto the nearest token means some spacing ends up a little tighter or looser than you drew it. What you get back is a sheet another person can apply without asking you.

**Still unknown:** Still unknown: whether the added type step earns its place. One screen needed it. If no second screen does, it was an accident with a good story.

- Rebuild one screen using only tokens.
- List every value you had to invent to finish it.
- For each, either add a role or change the screen.

**You should end up with:** One screen rebuilt from tokens alone, with every value you had to invent written down.

Worksheet fields for this step:

- Which screen you rebuilt using only tokens
- Every value you had to invent to finish the screen — Write each one down as it happens. They are easy to forget and they are the finding.

<details>
<summary>Help with this step</summary>



Stuck starting? Work through the screen element by element and say the token name aloud as you place it. The moment you cannot, write the value down.

Is it enough? The screen is finished and the exception list contains every value you reached for that was not on the sheet.

</details>

#### 5. Record and save

- Write which exceptions revealed a missing role and which were accidents.
- Save the sheet with the measured numbers and the rebuilt screen.

**You should end up with:** Each exception marked as a missing role or an accident, with what you did, and the change the Check questions asked for.

Worksheet fields for this step:

- Exceptions that revealed a missing role, and the token you added
- Exceptions that were accidents, and what you changed on the screen instead
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? For each exception ask one question: does a second screen need this? That answer decides which list it belongs in.

Is it enough? Every exception sits in one of the two lists, and each accident names what you changed on the screen instead.

</details>

**Save and continue.** Saved for you: The token names, the measured ratios and the exception list save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. Keep your m03 type scale to hand; several type tokens come straight from it. What your creator sees: Your creator reads the names and the exception list. Names that describe roles, and exceptions resolved on purpose, are what make it a sheet rather than a palette. Your next action: Open Your work and choose Ready for review. The next lesson assembles two whole screens from your components and this sheet, then critiques them against your research.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Rename every appearance-based token, then put near-identical values side by side and merge them.

</details>

<details>
<summary>Hint 2</summary>

List every pair you actually use, including placeholder and disabled text, and measure each one.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: The token sheet.
Task: Produce a token sheet for colour, type, space and radius with every value named by role, measured for contrast where it carries text, and applied to one screen without exception.
Challenge one thing at a time, and start with the mistake this lesson is about: “More tokens means more flexibility.” More tokens means more places to be inconsistent and more decisions for whoever comes next. A small set with clear roles constrains usefully; a large set is a palette with extra steps.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the renamed sheet and ask whether tokens are named by role and the set is small. Look at the measured pair list and ask whether every allowed text pair carries a measured ratio. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m08-l11-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Tokens are named by role and the set is small: A sheet where names describe roles, with a stated count and no appearance-based names. Every allowed text pair carries a measured ratio: Measured numbers beside each text-on-surface pair, including quiet text such as captions and disabled states. One screen is built with no exceptions: A rebuilt screen using only tokens, with the exception list produced during the attempt. Exceptions found are resolved deliberately and recorded: Each exception marked as a missing role or an accident, with the resolution.

**Bring forward:** Strong portfolio material and a direct bridge to m13's design systems work. Show the sheet with measured ratios and the exception list rather than a colour swatch grid. Module handoff: Support interaction and accessibility in m09–m11


### Practice and pause points

- Collect what you already use (~25 min): List every colour, type size, spacing value and radius across your screens. Mark the near-duplicates: two greys within a few percent, two similar gaps.
- Name by role (~30 min): Group the values into roles: surface, text, border, action, status. Name each token after its role, never after its appearance. Cut the set to the smallest that covers your screens.
- Measure contrast (~30 min): Measure every text-on-surface pair you intend to allow. Record the ratio beside each pair on the sheet. Repair or forbid any pair that falls below the threshold.
- Apply without exception (~25 min): Rebuild one screen using only tokens. List every value you had to invent to finish it. For each, either add a role or change the screen.
- Record and save (~10 min): Write which exceptions revealed a missing role and which were accidents. Save the sheet with the measured numbers and the rebuilt screen.

Pause after any step; save the artifact and next action.

**Free tool path.** A written table is a token sheet. For contrast, any free browser-based checker or your operating system's own tools will do, and you can also compute the ratio in a spreadsheet from the published formula; no paid plugin is needed.

### Output

A token sheet naming every value by role; Measured contrast ratios for every text-on-surface pair; One screen rebuilt using only tokens; A list of exceptions found, each resolved deliberately

### Checks

- Why name a token by role rather than appearance? Answer: Because appearance changes. A token called light-grey cannot be redefined without its name becoming false, while surface-muted can hold whatever fills that role.
- What does an exception during application tell you? Answer: Either the set is missing a real role, or the screen carries an accidental variation. Both are useful, and each needs a deliberate choice rather than a quiet addition.
- Is meeting a contrast ratio the same as being legible? Answer: No. It is a floor. Small type, thin weights and coloured text on tinted panels can pass a ratio and still be hard to read at real size in real light.

### Rubric and remediation

**Tokens are named by role and the set is small**

Adequate evidence: A sheet where names describe roles, with a stated count and no appearance-based names.

- 0 — Hex codes or appearance names.
- 1 — Roles used inconsistently, or the set duplicates near-identical values.
- 2 — All names are roles and near-duplicates are merged.
- 3 — As adequate, and the sheet records what was merged and what it cost.

If below 2: Rename every appearance-based token, then put near-identical values side by side and merge them. Show at recheck: The renamed sheet.

**Every allowed text pair carries a measured ratio**

Adequate evidence: Measured numbers beside each text-on-surface pair, including quiet text such as captions and disabled states.

- 0 — No measurements.
- 1 — Body text measured; quiet text unchecked.
- 2 — Every allowed pair measured and recorded.
- 3 — As adequate, and a failing pair was repaired and re-measured.

If below 2: List every pair you actually use, including placeholder and disabled text, and measure each one. Show at recheck: The measured pair list.

**One screen is built with no exceptions**

Adequate evidence: A rebuilt screen using only tokens, with the exception list produced during the attempt.

- 0 — Screen not rebuilt.
- 1 — Rebuilt with untracked one-off values.
- 2 — Rebuilt using only tokens, with exceptions listed as they arose.
- 3 — As adequate, and the rebuild changed the screen rather than the token set where the variation was accidental.

If below 2: Rebuild the screen and write down every time you reach for a value that is not on the sheet. Show at recheck: The rebuilt screen and exception list.

**Exceptions found are resolved deliberately and recorded**

Adequate evidence: Each exception marked as a missing role or an accident, with the resolution.

- 0 — Exceptions absorbed silently as new values.
- 1 — Recorded but resolved by adding a token every time.
- 2 — Each classified and resolved with a reason.
- 3 — As adequate, and at least one exception was resolved by changing the screen rather than the sheet.

If below 2: For each exception ask whether any other screen needs the same value. If not, it is an accident, not a role. Show at recheck: The exception resolutions.

### Portfolio contribution

Strong portfolio material and a direct bridge to m13's design systems work. Show the sheet with measured ratios and the exception list rather than a colour swatch grid.

### Assigned resources

- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — The colour, typography, spacing and layout sections, read for how values are named and organised. Purpose: Gives a worked example of a small, role-named value set in production use. Effort: 45–60 selected min. Free reading, no account. Verified 2026-09-06. Rebuild the reasoning and your own values; do not copy government branding or treat its palette as a standard. Fallback: R03.
- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The 4.5:1 and 3:1 thresholds, with the large-text and incidental exceptions. Purpose: Supplies the measurable threshold each recorded pair is checked against. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. Meeting a ratio is a floor, not proof of legibility; check at real size in real light too. Fallback: R29.

## Lesson 12: Assemble, check and critique against evidence

Stable ID: m08-l12-v1. Core. Areas 8. Optional effort ~120 min.

**Objective.** Assemble two complete screens from your components and tokens, run the preliminary checks, and critique the result against your own research evidence rather than taste.

**Bring forward.** Everything from this module: components, tokens, states, messages and the research findings behind them.

A module of parts is not a product. Assembly is where inconsistencies appear, and where a screen either serves the evidence or quietly drifts from it.

### Learn

Assembly is a test of the parts. When a screen forces you to invent a component, a token or a state, that is information about the set rather than a nuisance: either something is genuinely missing, or the screen is asking for a variation it does not need. Recording each invention as it happens keeps the library honest and produces the list of decisions the next module builds on.

The strongest critique goes finding by finding. Take your m05 findings and m07 test results and ask, for each, whether this screen serves it — the payment uncertainty, the shared-device booking, the comparison people were making. That converts critique from an exchange of preferences into a checkable exercise, and it usually surfaces one finding the design has quietly stopped serving.

Run the preliminary checks that apply — page title, headings, contrast, resize, keyboard where a build exists — and record both what passed and what those checks cannot establish. The resource states plainly that they are preliminary and that passing them is not conformance, and running them yourself is not testing with disabled people. Both statements belong in your write-up every time you show this work.

Rank what you find by task impact. A misaligned label is worth noting; a status that cannot be distinguished in greyscale stops someone. Fixing in that order is the difference between a screen that looks tidier and one that works better, and stating the ranking is what lets a reviewer disagree with your priorities rather than your taste.

**Common misconception.** “It looks finished, so it is ready.” Looking finished is a property of the surface. Ready means the states exist, the evidence is served, the checks were run and the remaining gaps are written down where someone else can see them.

### Worked example

Assembling two screens from the library required inventing three things: a status pill for a held place, a compact price treatment, and a spacing value between a heading and a dense list. The pill was a genuine missing component and was added; the price treatment was an accidental variation and was replaced with the existing one; the spacing became the nearest token. The finding-by-finding critique showed the screen no longer surfaced remaining places, which the m05 research had shown people comparing on, so it was restored. The preliminary checks found a heading level skipped and a caption below the contrast threshold; the keyboard check could not be completed because nothing was built, and that was recorded as untested rather than assumed.

#### Assemble, check and critique against evidence

Assemble two complete screens from your components and tokens, run the preliminary checks, and critique the result against your own research evidence rather than taste.

**Where to practise:** Draw the two assembled screens, including one non-happy state on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper or a local HTML file, whichever you have been using. If you want the accessibility checks to be real rather than theoretical, a local HTML file lets you check headings, resize and keyboard behaviour with a browser alone.

- Starting material: Your component inventory, token sheet, state and message specifications.
- Create HaruCourse/Practice/m08-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Assemble

- Build two complete screens using only your components and tokens.
- Write down every component, token or state you had to invent.
- Include at least one non-happy state among the two screens.

**You should end up with:** Two complete screens built only from your components and tokens, with everything you had to invent listed.

Worksheet fields for this step:

- The two screens you assembled, which one carries a non-happy state, and where the drawings live — A non-happy state is empty, loading, an error or a limit reached. One of the two must show one.
- Everything you had to invent while assembling: components, tokens or states — Write each one down as it happens, before you decide what to do about it.

<details>
<summary>Help with this step</summary>

- **Assembling:** Building a screen from parts you already have, rather than drawing it fresh. Anything you cannot find is a finding.
- **Non-happy state:** A screen when things are not going smoothly: empty, loading, an error, or a class already full.

Stuck starting? Lay your inventory and token sheet beside you and build with them open. Reaching past them is the thing you are trying to notice.

Is it enough? Both screens are complete, one of them is a non-happy state, and the invention list is written rather than remembered.

</details>

#### 2. Resolve the inventions

**See it first.** Made-up example. Three things invented while assembling two screens, and getting the first decision wrong.

- **What I invented:** A status pill for a held place, a smaller price treatment, and a gap between a heading and a dense list that was on no sheet.
- **My first decision:** All three into the library. Assembling had shown I needed them, so they were obviously missing. That took about a minute to decide.
- **The question that changed it:** For each one: does a second screen need this? Only the status pill did. The other two were needed once, by one screen, on one afternoon.
- **What happened to the rest:** The price treatment turned out to be an accidental copy of the existing one, four per cent smaller. It went. The gap moved to the nearest token and the screen was fine.
- **What that left:** One new component with a job, and two small changes to the screens. The library grew by one instead of three.

**The wrong turn:** The wrong turn is treating everything you invent as a gap in the set. Assembling under time pressure invents plenty, and most of it is drift rather than a missing part.

**What it costs:** Changing the screen instead of the set means giving up a size or a spacing you liked. It keeps the set small enough for someone else to use without asking you.

**Still unknown:** Still unknown: whether the status pill is right. One screen needed it, and until a second one does, it is a component with a single use.

- For each invention decide: missing from the set, or unnecessary variation.
- Add what is genuinely missing and remove the rest.
- Update the inventory and token sheet accordingly.

**You should end up with:** Each invention decided as a missing part or an unnecessary variation, with the set updated.

Worksheet fields for this step:

- For each invention: missing from the set or unnecessary variation, and what you did about it
- What you added to the component inventory or the token sheet

<details>
<summary>Help with this step</summary>



Stuck starting? Take the inventions one at a time and ask only whether a second screen needs it. Decide that before you look at how it turned out.

Is it enough? Every invention has a decision beside it, and the inventory or token sheet shows what you added.

</details>

#### 3. Critique against findings

- List your m05 findings and m07 test results.
- For each, write whether this screen serves it and how you can tell.
- Repair the strongest failure you find.

**You should end up with:** Every finding answered in writing, each critique line labelled evidence, guess or taste, and the strongest failure repaired.

**Try it with help.** Six made-up critique lines about the same booking screen. For each one, decide whether it is backed by evidence you actually hold, a reasonable guess, or taste. Taste is allowed here. It just has to be named as taste.

- The row does not show how many places are left, and three of the five people in my m05 sessions named remaining places while choosing.
  - **evidence** — The line names its source and how many people. Anyone can go and check those notes, which is what makes it evidence rather than a strong feeling.
  - guess — It would be a guess without the session note. The count of people and the named source are what lift it out of guessing.
  - taste — Nothing here is about how the screen looks. It reports what people did while they were choosing.
- The button says “Submit”, and in my m07 paper test two people asked what it would do.
  - **evidence** — Two people asking is a small, dated observation you can point at. Small is fine, as long as the line says it was two.
  - guess — A guess is what you hold before anyone reacts. Here somebody already did, and you wrote it down at the time.
  - taste — Disliking the word Submit would be taste. Two people asking what it does is something that happened in front of you.
- The blue on the primary button feels cold for a pottery studio.
  - evidence — Nobody has told you the blue feels cold. Until someone does, the only source for this is your own eye.
  - guess — A guess predicts what a person would do. This describes how a colour feels to you, which is a different kind of claim.
  - **taste** — A preference about tone, worth keeping as long as it carries the label. Labelled taste does not get to outrank a finding.
- People will probably miss the date, because it sits below the price.
  - evidence — Nothing observed is named anywhere in the line. The word probably is doing the work a session note would otherwise do.
  - **guess** — It predicts behaviour you have not watched. That is fine as long as the word probably stays in and you write down what would settle it.
  - taste — It is not about liking the layout. It is a claim about what somebody would fail to see.
- The soft corners on the cards sit oddly next to the square photographs.
  - evidence — Nobody has looked at this screen except you, so there is nothing here to point at.
  - guess — A guess would name something a person might do or fail to do. This names a mismatch you can see for yourself.
  - **taste** — A judgement about how two shapes sit together, with no consequence to a task claimed. Record it and rank it below anything that stops someone.
- Someone arriving with no bookings would not know where to start from this screen.
  - evidence — It would be evidence if a new person had tried it in front of you. So far nobody has.
  - **guess** — A plausible prediction about a person you have not yet watched using this screen. Write it as a guess and name the test that would settle it.
  - taste — It claims somebody would be stuck, not that the screen looks wrong. That is a claim about behaviour.

**Then:** Go through your own critique line by line and put one of the three labels beside each. Do not delete the taste lines; label them.

**What to watch for:** The label depends on what you can point at. A named source with a count is evidence. A prediction about behaviour nobody has watched is a guess. A judgement about how it looks or feels is taste, and it ranks below the other two.

Worksheet fields for this step:

- Your m05 findings and m07 test results, one per line
- For each finding: whether this screen serves it, and how you can tell
- Each line of your critique labelled evidence, guess or taste — Every line gets one label. Taste stays in; it just gets named.
- The strongest failure you found, and the repair you made

<details>
<summary>Help with this step</summary>



Stuck starting? Put your findings list beside the screen and answer each one in writing before you write any critique of your own. Blank answers are the work.

Is it enough? Every finding has an answer, every critique line has one of the three labels, and the strongest failure has been repaired.

</details>

#### 4. Run the checks

- Run the applicable preliminary checks: title, headings, contrast, resize.
- Record what passed and what failed with specifics.
- Note every check you could not run without an implementation.

**You should end up with:** The checks you could run, with specifics, and the ones you could not run without something built.

Worksheet fields for this step:

- Title, headings, contrast and text at a larger size: what passed and what failed, with specifics
- Every check you could not run without something built, and what passing the others does not prove

<details>
<summary>Help with this step</summary>

- **Preliminary checks:** A short set you can run alone on a drawing or a page: the title, the heading order, contrast, and text at a larger size.

Stuck starting? Work down the assigned list and mark each check run, failed or not possible. Write the specific failure, not the word failed.

Is it enough? Each failure names what and where, and the not-possible list says plainly what passing the rest does not prove.

</details>

#### 5. Rank and record

- Rank remaining problems by task impact, not by how much they bother you.
- Write what remains untested about these screens.
- Save the screens, the critique and the check results together.

**You should end up with:** Remaining problems ranked by task impact, what stays untested, and the change the Check questions asked for.

Worksheet fields for this step:

- Remaining problems ranked by task impact, with the reason for the top one — Task impact means what would stop someone, not what bothers you most.
- What remains untested about these screens
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>



Stuck starting? Rank by asking what would stop someone finishing, then what would slow them, then what only bothers you.

Is it enough? The top problem is one that stops a task, and the untested list is written where someone else could read it.

</details>

**Save and continue.** Saved for you: The invention list, the critique with its labels and the check results save as you type, on this device first and then online. Kept outside the app: The two screens stay on your paper or in your own folder. Note where they live in the first step; nothing is uploaded. What your creator sees: Your creator reads the labelled critique and the untested list. Those two together show judgement more clearly than the screens do. Your next action: Open Your work and choose Ready for review. Module 9 takes these screens into interaction and accessibility, and your untested list is the first thing it picks up.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Rebuild one screen strictly from the inventory, writing down each reach for something that is not in it.

</details>

<details>
<summary>Hint 2</summary>

For each invention ask whether a second screen needs it. If not, change the screen rather than the set.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Assemble, check and critique against evidence.
Task: Assemble two complete screens from your components and tokens, run the preliminary checks, and critique the result against your own research evidence rather than taste.
Challenge one thing at a time, and start with the mistake this lesson is about: “It looks finished, so it is ready.” Looking finished is a property of the surface. Ready means the states exist, the evidence is served, the checks were run and the remaining gaps are written down where someone else can see them.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the screens and the invention list and ask whether screens are assembled from the existing set, inventions recorded. Look at the resolutions and the updated set and ask whether every invention is resolved as missing or unnecessary. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m08-l12-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Screens are assembled from the existing set, inventions recorded: Two complete screens including a non-happy state, with a list of everything invented during assembly. Every invention is resolved as missing or unnecessary: A decision per invention with the inventory and token sheet updated. The critique runs finding by finding against research: Each m05 finding and m07 result listed with whether the screen serves it and the evidence. Check results and untested areas are both recorded: Preliminary check results with specifics, plus a written statement of what could not be verified.

**Bring forward:** The module's case-study spine: assembled screens, the library they came from, a critique tied to evidence and an honest list of what is untested. Module handoff: Support interaction and accessibility in m09–m11


### Practice and pause points

- Assemble (~30 min): Build two complete screens using only your components and tokens. Write down every component, token or state you had to invent. Include at least one non-happy state among the two screens.
- Resolve the inventions (~20 min): For each invention decide: missing from the set, or unnecessary variation. Add what is genuinely missing and remove the rest. Update the inventory and token sheet accordingly.
- Critique against findings (~30 min): List your m05 findings and m07 test results. For each, write whether this screen serves it and how you can tell. Repair the strongest failure you find.
- Run the checks (~25 min): Run the applicable preliminary checks: title, headings, contrast, resize. Record what passed and what failed with specifics. Note every check you could not run without an implementation.
- Rank and record (~15 min): Rank remaining problems by task impact, not by how much they bother you. Write what remains untested about these screens. Save the screens, the critique and the check results together.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper or a local HTML file, whichever you have been using. If you want the accessibility checks to be real rather than theoretical, a local HTML file lets you check headings, resize and keyboard behaviour with a browser alone.

### Output

Two assembled screens using only your components and tokens; A list of everything you had to invent during assembly, each resolved; A finding-by-finding critique against your research; Preliminary check results and a written list of what stays untested

### Checks

- What does an invention during assembly tell you? Answer: That the set is missing a role, or that the screen is asking for a variation it does not need. Both are findings; absorbing it silently loses the information.
- Why critique finding by finding? Answer: Because it makes critique checkable. Taste-based review produces preferences; asking whether each piece of evidence is still served produces a list someone else can verify.
- What can you claim after the preliminary checks pass? Answer: That those specific checks passed on those screens on your device. The resource states they are preliminary and not conformance, and self-testing is not testing with disabled people.

### Rubric and remediation

**Screens are assembled from the existing set, inventions recorded**

Adequate evidence: Two complete screens including a non-happy state, with a list of everything invented during assembly.

- 0 — Screens drawn freely without reference to the set.
- 1 — Assembled from the set but inventions absorbed silently.
- 2 — Assembled with every invention recorded as it arose.
- 3 — As adequate, and one screen is a state rather than a happy path.

If below 2: Rebuild one screen strictly from the inventory, writing down each reach for something that is not in it. Show at recheck: The screens and the invention list.

**Every invention is resolved as missing or unnecessary**

Adequate evidence: A decision per invention with the inventory and token sheet updated.

- 0 — Inventions left unresolved.
- 1 — All resolved by adding to the set.
- 2 — Each classified and resolved, with removals as well as additions.
- 3 — As adequate, and one addition names the other screens that will now use it.

If below 2: For each invention ask whether a second screen needs it. If not, change the screen rather than the set. Show at recheck: The resolutions and the updated set.

**The critique runs finding by finding against research**

Adequate evidence: Each m05 finding and m07 result listed with whether the screen serves it and the evidence.

- 0 — Critique based on appearance.
- 1 — Some findings referenced generally.
- 2 — Every finding checked with a stated answer.
- 3 — As adequate, and a finding the design had stopped serving is identified and restored.

If below 2: Put your findings list beside the screen and answer each one in writing. Blank answers are the work. Show at recheck: The finding-by-finding critique.

**Check results and untested areas are both recorded**

Adequate evidence: Preliminary check results with specifics, plus a written statement of what could not be verified.

- 0 — Accessibility claimed generally.
- 1 — Checks run but limits unstated.
- 2 — Results and limits both recorded, including that self-checks are not conformance.
- 3 — As adequate, and the record names which untested area is most likely to hide a real problem.

If below 2: List the preliminary checks and mark each run, failed or not possible. Add one sentence on what passing does not prove. Show at recheck: The check record.

### Portfolio contribution

The module's case-study spine: assembled screens, the library they came from, a critique tied to evidence and an honest list of what is untested.

### Assigned resources

- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The checks for page title, headings, contrast, resizing text and keyboard access. Purpose: Provides a small set of checks you can run yourself on the screens you just assembled. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. The page states the checks are preliminary and passing them is not conformance; running them yourself never substitutes for testing with disabled participants. Fallback: R28.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — All ten, used as a final structured sweep separate from your evidence-based critique. Purpose: Catches candidate problems your findings did not cover, kept in a separate list from tested ones. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. A heuristic finding is an expert opinion, not evidence; keep it separate from anything a participant showed you. Fallback: R11.
