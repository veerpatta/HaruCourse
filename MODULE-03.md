# Visual foundations refresh

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the small-action teaching and tracking standard](docs/COURSE-AUTHORING.md#small-action-and-tracking-contract--12-september-2026). All 43 lessons in Modules 1–5 use saved action flows. Published, teaching-refined, learner-validated and assessed remain separate states.

Generated from src/module3.ts; edit that source, then run npm run docs:generate. Level 1 · Module m03 · requirement areas 1, 8. Optional effort 20 hours across 10 lessons, which is the sum of the lesson steps themselves. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m01. This is guidance for meaningful practice, not a lock. Module approved resource pair: R03 / R06. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: A type scale that survives the screen

Stable ID: m03-l01-v1. Core.

You already set type well on a page you control. A screen does not stay the size you designed it at, and the reader may have enlarged the text before your design ever loaded.

Bring: The three screens and workshop flow you produced in Product Design Foundations. You will re-typeset one of those screens rather than starting a new design.

Starting route: Use one sketch or recreate this fictional class screen on paper: class name, instructor, date, price, materials and Reserve. Start with sizes 28, 22, 18, 17, 16, 15 and 13 so there is something to simplify. Annotate size and weight; a paper rendering is a specification, not a browser test.

- A type scale table of five or six steps with size, weight and job; one screen re-typeset with it; the same screen at narrow width and at enlarged text; and a short note of what broke.

### Start with a clear task

Section: learn. Stable action: welcome.

Produce a five-step type scale with stated sizes, weights and uses, and show it holding its hierarchy at two widths without hard-coding a pixel size for every element.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

A type scale is a short, deliberate list of sizes you allow yourself, each with a role. Five or six steps is usually enough for a product screen: a page title, a section heading, body text, a supporting line and a small label. The discipline is not the arithmetic of the ratio; it is refusing the sixth size when a screen feels crowded, because every extra size makes hierarchy harder to read, not easier.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Hierarchy is a comparison, not an absolute. A heading reads as a heading because it differs from what surrounds it in size, weight, spacing or colour. That means you can often strengthen a hierarchy by making the body text calmer rather than making the heading bigger, which matters on a small screen where a bigger heading costs you the content itself.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Screen type has one constraint print does not: the reader controls it. A person may set a larger default text size in their browser or phone, and a design that hard-codes every size in pixels can ignore that setting or break when it is honoured. Sizing text in relative units, so that a chosen scale multiplies the reader's own base size, keeps your hierarchy and their preference at the same time.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Weight and case do work that size cannot. A heavier weight separates a label from a value without adding height, which is how dense interfaces stay legible. All-capitals is a decision with a cost: it removes word shape, slows reading of anything longer than two or three words, and is read letter-by-letter by some screen readers when abbreviations are involved. Use it for short labels, not for sentences.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A workshop detail screen designed with eight sizes was rebuilt with five: 32/24/16/14/12. The title dropped from 40 to 32 and moved to a heavier weight, the two “supporting” sizes were merged into one 14, and the metadata row became 12 in a heavier weight instead of a lighter grey. At 390 px wide the title now holds one line, the date and price line is readable at arm's length, and the section headings are still obviously headings — with three fewer sizes to maintain.


### Get your practice ready

Section: learn. Stable action: workspace.

Use one sketch or recreate this fictional class screen on paper: class name, instructor, date, price, materials and Reserve. Start with sizes 28, 22, 18, 17, 16, 15 and 13 so there is something to simplify. Annotate size and weight; a paper rendering is a specification, not a browser test.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and inventory

Section: practice-plan. Stable action: step-1-brief.

A count of the text sizes already on your screen, and what they are.

- Read the assigned typography section. Then list every distinct text size, weight and colour already present in one of your Module 1 screens. Most people find more than they expected; write the real count.

**Start here:** Go through the screen naming each piece of text aloud and write its size beside it.

**Enough:** The count is a real number you arrived at by looking, not a guess.

**Type scale:** The short list of sizes you allow yourself, each with a job. Anything not on the list is not used.


### How many different text sizes are on your screen now?

Section: practice-plan. Stable action: write-sizes-found.

Count them, do not estimate. Most first screens have far more than anyone intends.

**Answer:** How many different text sizes are on your screen now?

Count them, do not estimate. Most first screens have far more than anyone intends.


### The sizes, weights and colours you found

Section: practice-plan. Stable action: write-inventory-notes.

Write your answer for “The sizes, weights and colours you found”. Use the task instructions below to decide what to include.

**Answer:** The sizes, weights and colours you found



<details>
<summary>Example</summary>

Example (made up): 28, 22, 18, 17, 16, 15 and 13; three weights; two greys that are nearly the same.

</details>


### Choose the scale

Section: practice-plan. Stable action: step-2-brief.

Five or six steps, each with a size, a weight and one stated job.

- Decide five or six steps. For each, write the size, the weight and the one job it does. Any size you cannot give a job to is removed at this step, not later.

**Start here:** Write the body text step first, then the title, then fill between them.

**Enough:** Every step names something on your screen that uses it.

**Weight:** How heavy the letters are: regular, medium, semibold. A cheap way to signal importance without taking space.

**Job:** What that step is for on this screen. “Big” is not a job; “the class name, once per screen” is.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Cutting seven sizes down to five on a class details screen.

**What I had:** 28, 22, 18, 17, 16, 15 and 13. The 17 and 16 existed because two screens were designed a week apart.

**My first instinct:** Keep them all and make the title 32 so the hierarchy is “stronger”. Bigger felt like clearer.

**Why that failed:** At 390 px the 32 title wrapped to three lines and pushed the price off the screen. The page looked shoutier and told me less.

**What I did instead:** Five steps: 24 semibold for the class name, 18 medium for section headings, 16 regular for body, 14 for the supporting line, 12 for labels.

**Where the strength came from:** Weight and space, not size. The 24 with a clear gap beneath it reads as a title more reliably than a 32 that wraps.

**Wrong turn:** The wrong turn is treating size as the only volume control. It is the one that costs the most on a small screen.

**Trade-off:** Five steps means two things that felt slightly different now look the same. Usually nobody notices, and you should record what you gave up in case they do.

**Unknown:** Still unknown: whether the 14 and 12 are distinguishable to someone reading in bright sunlight. That is a contrast and size question for later lessons.


### Step 1 · size, weight, and the one job it does

Section: practice-plan. Stable action: write-step-1.

If you cannot name the job, the step does not belong on the ladder.

**Answer:** Step 1 · size, weight, and the one job it does

If you cannot name the job, the step does not belong on the ladder.

<details>
<summary>Example</summary>

Example (made up): 28 / semibold / the class name, once per screen.

</details>


### Step 2 · size, weight, and the one job it does

Section: practice-plan. Stable action: write-step-2.

Write your answer for “Step 2 · size, weight, and the one job it does”. Use the task instructions below to decide what to include.

**Answer:** Step 2 · size, weight, and the one job it does




### Step 3 · size, weight, and the one job it does

Section: practice-plan. Stable action: write-step-3.

Write your answer for “Step 3 · size, weight, and the one job it does”. Use the task instructions below to decide what to include.

**Answer:** Step 3 · size, weight, and the one job it does




### Step 4 · size, weight, and the one job it does

Section: practice-plan. Stable action: write-step-4.

Write your answer for “Step 4 · size, weight, and the one job it does”. Use the task instructions below to decide what to include.

**Answer:** Step 4 · size, weight, and the one job it does




### Step 5 · size, weight, and the one job it does

Section: practice-plan. Stable action: write-step-5.

Write your answer for “Step 5 · size, weight, and the one job it does”. Use the task instructions below to decide what to include.

**Answer:** Step 5 · size, weight, and the one job it does




### Step 6 · size, weight, and the one job it does

Section: practice-plan. Stable action: write-step-6.

Write your answer for “Step 6 · size, weight, and the one job it does”. Use the task instructions below to decide what to include.

**Answer:** Step 6 · size, weight, and the one job it does

Optional: may be left empty.




### Re-typeset one screen

Section: practice-plan. Stable action: step-3-brief.

What collapsed when you applied the ladder, and what earned its own step.

- Apply the scale to your chosen screen. Where two old sizes collapse into one new step, note what you lost and whether it mattered.

**Start here:** Go through the screen replacing each old size with its nearest step, and write down every time it hurt.

**Enough:** You can say what was lost, not just that the screen is tidier.

**Collapse:** Two or more of the old sizes becoming one step of your ladder. The screen gets simpler and a distinction disappears, so each one is worth writing down.

**Re-typeset:** Setting the same words again with new type decisions. The content does not change; only the sizes, weights and spacing do.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Applying the five-step ladder to a class card, and losing something without noticing.

**How I applied it:** I went through the card replacing each old size with its nearest step. Seven replacements, four minutes, and the card looked calmer straight away.

**What I did not write down:** The date had been 15 and the instructor name 16. Both landed on the 14 step. I ticked them off as tidying and moved on.

**What I noticed later:** Reading the card cold, I could not tell at a glance which line was the date and which was the name. Same size, same weight, same grey, one above the other.

**The repair I nearly made:** Add a sixth step at 15 and put the date back where it was. Two minutes, and the ladder is back towards the pile it started as.

**What I did instead:** I asked what the old difference was for. The date has to be found quickly and the name does not, so the date kept the 14 step and gained medium weight and a gap above it. The ladder stayed at five, and the collapse went into the record with what it cost.

**Wrong turn:** The wrong turn is rounding each old size to its nearest step and calling the job done. It is tempting because the screen genuinely does look better afterwards, so nothing prompts you to ask what the old difference was carrying.

**Trade-off:** Carrying the date on weight and space rather than size means the two lines are closer in tone than they were, and somebody skimming very fast may still read them as one block. That is the price of holding the ladder at five steps.

**Unknown:** Still unknown: whether a reader looking for a date finds it any faster in this version. Nothing here was tried with a person, only reasoned about on paper.


### Which old sizes collapsed into one step, and what you lost

Section: practice-plan. Stable action: write-collapsed.

Write your answer for “Which old sizes collapsed into one step, and what you lost”. Use the task instructions below to decide what to include.

**Answer:** Which old sizes collapsed into one step, and what you lost




### Anything you kept separate, and why it earned its own step

Section: practice-plan. Stable action: write-kept-distinct.

Write your answer for “Anything you kept separate, and why it earned its own step”. Use the task instructions below to decide what to include.

**Answer:** Anything you kept separate, and why it earned its own step




### Test the two hard cases

Section: practice-plan. Stable action: step-4-brief.

What broke at narrow width and with enlarged text, in specific terms.

- Redraw or re-render the same screen at roughly 390 px wide, then again with the base text size increased by about 150 per cent. Record exactly what breaks: wrapping, truncation, overlap, a control pushed off screen.

**Start here:** Do the narrow case first: redraw the same content in a column about a third the width.

**Enough:** Each note names what broke and where, not “it looked bad”.

**Enlarged text:** The reader’s own setting, not yours. Many people run their phone text well above default, and a layout that assumes otherwise breaks for them daily.


### Try a supplied example

Section: practice-plan. Stable action: step-4-try.

A supplied narrow-width result from the same made-up screen: at 390 px the class name wraps to two lines, the price and the date now sit below the fold, and the section heading and the body text look the same size at a glance.

Which of these is the most serious problem to fix first?

- The price and date falling below the fold, because the reader now cannot make the decision without scrolling.
- The class name wrapping to two lines, because it looks careless.
- The heading and body looking similar, because the hierarchy has collapsed.
- All three equally, since they all appeared at the same width.

<details>
<summary>After your attempt</summary>

The price and date falling below the fold, because the reader now cannot make the decision without scrolling. — It is the only one that stops the task. A wrapped title is untidy; missing information is a decision the reader cannot make.

The class name wrapping to two lines, because it looks careless. — Wrapping is normal on a phone and often fine. Judged by the reader’s task rather than the look, it costs almost nothing.

The heading and body looking similar, because the hierarchy has collapsed. — A real problem and second in line: it slows reading, while the missing price stops the decision entirely.

All three equally, since they all appeared at the same width. — Appearing together does not make them equally costly. Ranking by what the reader cannot do is what makes the next hour useful.

Rank your own breakages the same way: what stops the task first, what slows it, what merely looks wrong.

</details>


### At about 390 px wide: what broke?

Section: practice-plan. Stable action: write-narrow-result.

Wrapping titles, a heading pushing content off the screen, two steps that now look identical.

**Answer:** At about 390 px wide: what broke?

Wrapping titles, a heading pushing content off the screen, two steps that now look identical.


### With text about 150 per cent larger: what broke?

Section: practice-plan. Stable action: write-enlarged-result.

On paper, letter the same screen with everything a step bigger and see what collides.

**Answer:** With text about 150 per cent larger: what broke?

On paper, letter the same screen with everything a step bigger and see what collides.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your title is 24 and the section headings are 18. To make the hierarchy clearer, what do you try first?

- More space around the title and a heavier weight, before touching the size.
- Raise the title to 32 so the difference is obvious.
- Drop the headings to 15 so the gap is wider.

<details>
<summary>After your attempt</summary>

More space around the title and a heavier weight, before touching the size. — Space and weight cost no width, so they survive a narrow screen. Size is the instrument that breaks first when the column gets small.

Raise the title to 32 so the difference is obvious. — On a phone that is where a title starts wrapping and pushing content down. The reader sees a big phrase and less of what they came for.

Drop the headings to 15 so the gap is wider. — It widens the ratio by weakening the smaller step, which now competes with body text. You have moved the problem rather than solved it.

Improve: Look at your narrow-width note in step 4. If the title broke there, change your ladder so the title relies on weight and space rather than size, and record it in step 5.

Check again: The narrow version keeps the price and date visible, and the title still reads as the title.

Answers to revisit: narrow-result, step-1, step-2

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You did not test enlarged text because your screen is a paper sketch. What is the honest response?

- Redraw the screen with every step one size larger and see what collides; that is the paper version of the test.
- Note that enlarged text cannot be tested on paper and move on.
- Assume it is fine because the type scale is proportional.

<details>
<summary>After your attempt</summary>

Redraw the screen with every step one size larger and see what collides; that is the paper version of the test. — The test is about what happens when text grows inside a fixed width, and a pencil can show that. It is real evidence about your layout.

Note that enlarged text cannot be tested on paper and move on. — It can, roughly, and roughly is enough to find collisions. Skipping it means shipping a layout that fails for a large number of readers.

Assume it is fine because the type scale is proportional. — Proportional sizes still collide with fixed containers, buttons and images. The failure is in the layout, not the ratio.

Improve: If your enlarged-text box in step 4 is empty, redraw the screen a step larger throughout and write what collides, then note it in step 5.

Check again: The enlarged case names at least one specific collision or says plainly that nothing broke and how you checked.

Answers to revisit: enlarged-result

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You cut seven sizes to five and two labels now look identical. What should the record say?

- Which distinction you gave up and whether it mattered, so the decision can be revisited.
- Nothing: fewer sizes is the point of the exercise.
- That the labels should be told apart by colour instead.

<details>
<summary>After your attempt</summary>

Which distinction you gave up and whether it mattered, so the decision can be revisited. — Reduction is a trade, not a virtue. Writing down what it cost is what separates a system from tidying.

Nothing: fewer sizes is the point of the exercise. — Fewer sizes is the method, not the goal. If the lost distinction carried meaning, you have made the screen worse and no record says so.

That the labels should be told apart by colour instead. — That moves the distinction onto colour alone, which the next two lessons are about undoing.

Improve: Fill the collapsed box in step 3 with what you lost. If a lost distinction mattered, restore one step and give it a job, then record it in step 5.

Check again: Every collapse is recorded with its cost, and any restored step has a stated job.

Answers to revisit: collapsed, kept-distinct

</details>


### Record and pause

Section: practice. Stable action: step-5-brief.

Your next change, where the artefacts are, and the repair the Check questions asked for.

- Save the scale table, the before and after screen, and your breakage notes. Write the one change you would make next. Stop here if the session is over; the next lesson continues from this artefact.

**Start here:** Choose the change that fixes the most serious breakage you listed.

**Enough:** The next change is one thing you could do in twenty minutes.

**Artefact:** Something you actually made and can point at: the ladder, the two drawings, the breakage notes. It is what shows the work happened.

**Repair:** The one change a Check question asks you to make to your own work. You make it in the worksheet itself rather than noting it for later.


### The one change you would make next

Section: practice. Stable action: write-next-change.

Write your answer for “The one change you would make next”. Use the task instructions below to decide what to include.

**Answer:** The one change you would make next




### Where the ladder and the two versions live

Section: practice. Stable action: write-photo-reference.

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.

**Answer:** Where the ladder and the two versions live

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson sets line length and leading on this same screen, so keep the ladder.


<details>
<summary>Optional hints and reference material</summary>

- Inventory roles before choosing sizes; two labels serving the same role should not drift accidentally.
- Use the longest heading in both comparisons. Record whether you tested actual reflow or only a paper approximation.

- R03: [web.dev: typography](https://web.dev/learn/design/typography) — The whole typography chapter, concentrating on type scales, sizing units and responsive text. Purpose: Gives the sizing and unit reasoning behind a scale that respects reader settings. Free reading, no account. Verified 2026-09-06. Illustrative examples are web-focused; the scale idea applies to any medium. Fallback: R06.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The scale is explicit and each step has a stated job**

Adequate evidence: A table listing every step with its size, weight and the one element type it is for, and no size used in the screen that is missing from the table.

0 — No scale is stated; sizes were chosen per element.

1 — A list of sizes exists but some steps have no stated job, or the screen uses sizes absent from the table.

2 — Five or six steps, each with a size, weight and job, and the screen uses only those steps.

3 — As adequate, and the write-up explains why a candidate step was rejected and what would justify adding it back.

Repair: Take the screen you submitted and mark every text element with the step it claims to use. For each mismatch, either change the element to the nearest step or add the step to the table with a written job. Do not add a step you cannot name a job for. Recheck: The corrected table and the marked-up screen showing each element's step.

**Hierarchy holds at narrow width**

Adequate evidence: The narrow rendering shows the title, the primary action and the first line of content all readable, with headings still visibly distinct from body text.

0 — No narrow version was produced.

1 — A narrow version exists but headings and body text are hard to tell apart, or the primary action is not visible.

2 — The narrow version keeps a readable distinction between levels and the primary action remains reachable.

3 — As adequate, and the design changes deliberately at narrow width — for example a step drops one size or a label moves — with the reason recorded.

Repair: Redraw only the top of the screen at about 390 px. If the levels blur, change one variable at a time — first weight, then space, and only then size — and record which change restored the distinction. Recheck: The narrow rendering plus a one-line note of which variable fixed the hierarchy.

**Enlarged text was actually tested and reported**

Adequate evidence: A second rendering at roughly 150 per cent text size with specific named breakages, or an explicit statement that nothing broke and how that was checked.

0 — Enlarged text was not tested.

1 — It is claimed to work but no rendering or method is shown.

2 — The enlarged rendering is shown and breakages are named specifically.

3 — As adequate, and at least one breakage is repaired with the repair explained.

Repair: Re-run the enlarged case and write the breakages as concrete sentences — “the price overlaps the button”, “the date truncates to three characters” — not as “it looks cramped”. Then fix exactly one. Recheck: The enlarged rendering, the breakage list and one repair.

**Reduction is reasoned, not merely tidy**

Adequate evidence: For each pair of old sizes merged into one step, a sentence on what distinction was lost and why that loss is acceptable here.

0 — Sizes were changed with no reasoning recorded.

1 — Reasoning is aesthetic only — tidier, cleaner, more modern.

2 — Each merge names the distinction lost and accepts or rejects that loss for this screen.

3 — As adequate, and one merge is identified as risky with a way to check it against a reader rather than by preference.

Repair: List your merges as a two-column table: what the two old sizes distinguished, and what now carries that distinction — weight, space, colour or nothing. Any row ending in “nothing” needs either a fix or an argument. Recheck: The merge table with no unexplained “nothing” rows.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson sets line length and leading on this same screen, so keep the ladder.

**Review criteria:**

- The scale is explicit and each step has a stated job
- Hierarchy holds at narrow width
- Enlarged text was actually tested and reported
- Reduction is reasoned, not merely tidy

<details>
<summary>Reading, video and deeper explanation</summary>



[web.dev: typography](https://web.dev/learn/design/typography).

</details>

## Lesson 2: Readability: measure, leading and the small screen

Stable ID: m03-l02-v1. Core.

Hierarchy tells someone where to start. Readability decides whether they finish. On a phone the two pull in opposite directions, and placeholder text hides the conflict completely.

Bring: The type scale and re-typeset screen from the previous lesson, plus at least one paragraph of real content — not placeholder text.

Starting route: Bring your type ladder, or use five labelled sizes: 24 title, 18 heading, 16 body, 14 supporting text and 12 labels. On paper, set a long fictional class name, instructor, date, price and empty state. Count real characters on three lines; annotate sizes and gaps rather than writing code.

- One content block with stated measure, line height and block spacing values, a worst-case content list, narrow and enlarged renderings, and a reason for each value.

### Start with a clear task

Section: learn. Stable action: welcome.

Set line length, line height and paragraph spacing for one block of real content, and justify each value against how the text is actually read rather than how the block looks.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Line length — the measure — is the strongest single lever on comfortable reading of continuous text. Very long lines make the return sweep to the next line error-prone, so readers lose their place; very short lines break phrases so often that the eye stops more than it reads. Roughly forty-five to seventy-five characters is the usual comfortable band for body text, and the point is to constrain the measure deliberately rather than let it default to whatever the container happens to be.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Line height works with the measure, not independently of it. Longer lines need more space between them to keep the return sweep accurate; short lines and large display type need less, and too much leading on a heading separates it from the text it introduces. Line height is also a ratio, not a fixed distance: express it relative to the font size so it scales when the reader enlarges the text.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Spacing between blocks must beat spacing within them. If the gap between two paragraphs is the same as the gap between their lines, the reader sees one undifferentiated column. This is the same grouping logic you will meet formally in the Gestalt lesson: proximity assigns membership, and the eye trusts it before it trusts your headings.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Real content changes all of these numbers. Placeholder text has even word lengths, no long words, no numbers, no names and no empty states, so it flatters every layout. A real workshop title in two languages, a long instructor name, a price with a currency symbol and a date format the reader recognises will each stress the measure differently. Test with the worst real content you can find, not the average.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A workshop description set at 16 px across a full 1280 px container ran to about 140 characters a line. Readers testing the page kept re-reading lines. Constraining the text column to roughly 65 characters and setting line height to 1.5 fixed the re-reading without changing the font, the size or the colour. On the phone the measure was already narrow, so the same block needed line height nearer 1.4 and a larger gap between paragraphs instead.


### Get your practice ready

Section: learn. Stable action: workspace.

Bring your type ladder, or use five labelled sizes: 24 title, 18 heading, 16 body, 14 supporting text and 12 labels. On paper, set a long fictional class name, instructor, date, price and empty state. Count real characters on three lines; annotate sizes and gaps rather than writing code.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Gather worst-case content

Section: practice-plan. Stable action: step-1-brief.

The real strings your screen must hold, including the longest title and an empty state.

- Collect the real strings your screen must hold: the longest title you can justify, a full instructor name, a date, a price, and one empty state. Write them down; you will use them for the rest of the module.

**Start here:** Look at a real class listing somewhere and copy the longest title you find.

**Enough:** Nothing in the list is placeholder text like “Lorem ipsum” or “Class name”.

**Worst-case content:** The real strings that will stress the layout: the longest name, the empty week, the price with a currency symbol.


### The longest title you can justify

Section: practice-plan. Stable action: write-longest-title.

Write your answer for “The longest title you can justify”. Use the task instructions below to decide what to include.

**Answer:** The longest title you can justify



<details>
<summary>Example</summary>

Example (made up): Introduction to Wheel-Thrown Pottery for Complete Beginners.

</details>


### A full instructor name, a date, a price, and one empty state

Section: practice-plan. Stable action: write-other-strings.

Empty state: what the screen says when there are no classes that week.

**Answer:** A full instructor name, a date, a price, and one empty state

Empty state: what the screen says when there are no classes that week.


### Set the measure

Section: practice-plan. Stable action: step-2-brief.

A counted character-per-line figure and the width you chose.

- Set a maximum width for your body text and count the characters on a full line. Record the number. Adjust until it sits in the comfortable band, and note what constrains you.

**Start here:** Rule a column, letter one real paragraph inside it, and count the characters on three full lines.

**Enough:** The number in the box came from counting.

**Measure:** The number of characters on a line. It is a count, not an impression, and it is what decides whether the eye finds the next line.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Setting the line length for a class description, by counting rather than by eye.

**What I did first:** I looked at the paragraph and thought “that reads fine”. The column was the width of the page because that is where the margin happened to be.

**What counting showed:** Three full lines came to 104, 98 and 101 characters. An average of 101, which is far past the band where the eye reliably finds the start of the next line.

**What the symptom was:** Rereading the same line. I had noticed it and blamed the font, because the number was invisible until I counted it.

**What I changed:** I narrowed the column until the count came to about 68 characters, which meant a wider margin on the wide layout and nothing at all on the phone.

**What stayed:** The phone column was already about 40 characters, which is short but unavoidable at that width, so leading matters more there than measure.

**Wrong turn:** The wrong turn is judging line length by how the block looks. A wide column looks generous and efficient, and the cost only shows up in rereading.

**Trade-off:** A narrower column means more scrolling and more white space, which can look empty to a client. It is the trade that makes long text readable.

**Unknown:** Still unknown: how this reads for someone using a large text setting, where the count drops sharply. That is the stress test two steps from now.


### Characters on a full line, averaged over three lines

Section: practice-plan. Stable action: write-measure-count.

Count them. Include spaces.

**Answer:** Characters on a full line, averaged over three lines

Count them. Include spaces.


### The width you settled on, and why

Section: practice-plan. Stable action: write-measure-decision.

Write your answer for “The width you settled on, and why”. Use the task instructions below to decide what to include.

**Answer:** The width you settled on, and why




### Tune leading and block spacing

Section: practice-plan. Stable action: step-3-brief.

Line heights as ratios, and a paragraph gap clearly larger than the line gap.

- Choose line height as a ratio for body, headings and small text. Then set the gap between paragraphs so it clearly exceeds the gap between lines. Write both values.

**Start here:** Write the body ratio first, then set the paragraph gap so it is visibly bigger than one line.

**Enough:** You can state the paragraph gap as “clearly more than one line” and see it on the page.

**Line height:** The distance from one line to the next, written as a ratio of the text size so it scales with it.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied block from the same made-up screen: body text at 16 with line height 1.9, paragraph gaps the same size as one line, and headings at 20 with line height 1.9 as well.

What is the main problem with these values?

- The paragraph gap does not exceed the line gap, so the paragraphs stop reading as separate units.
- The body line height of 1.9 is too loose on its own.
- The headings should have more line height than the body, not the same.
- Nothing: generous spacing is easier to read.

<details>
<summary>After your attempt</summary>

The paragraph gap does not exceed the line gap, so the paragraphs stop reading as separate units. — When the space between paragraphs equals the space between lines, the block becomes an undifferentiated column of sentences. That is the most damaging of the three.

The body line height of 1.9 is too loose on its own. — Loose, and the real damage comes from the paragraph gap failing to beat it. Fix the relationship first and 1.9 may be merely airy.

The headings should have more line height than the body, not the same. — The opposite: large text usually needs a tighter ratio, because the gaps grow with the size. Either way it is not the main fault here.

Nothing: generous spacing is easier to read. — Up to a point. Past it, lines stop cohering into paragraphs and a phone screen holds almost nothing, which costs the reader more than the air gains.

Set your own paragraph gap by comparing it with your line gap, not by choosing a number that looks pleasant.

</details>


### Body line height, as a ratio of the text size

Section: practice-plan. Stable action: write-line-height-body.

Write your answer for “Body line height, as a ratio of the text size”. Use the task instructions below to decide what to include.

**Answer:** Body line height, as a ratio of the text size



<details>
<summary>Example</summary>

Example (made up): 1.5 — so 16 point text sits on 24 point lines.

</details>


### Heading and small-text line heights

Section: practice-plan. Stable action: write-line-height-headings.

Headings usually need less than body text, not more.

**Answer:** Heading and small-text line heights

Headings usually need less than body text, not more.


### The gap between paragraphs, and how it compares with the gap between lines

Section: practice-plan. Stable action: write-block-spacing.

It has to be clearly larger, or paragraphs stop being paragraphs.

**Answer:** The gap between paragraphs, and how it compares with the gap between lines

It has to be clearly larger, or paragraphs stop being paragraphs.


### Stress it

Section: practice-plan. Stable action: step-4-brief.

What broke at narrow width and with enlarged text, using the real strings.

- Render the block at about 390 px wide and again at enlarged text with your worst-case strings. Record every place the reading breaks down, including anything that now scrolls when it did not before.

**Start here:** Put the longest title into the narrow column first; it usually breaks something immediately.

**Enough:** Each note names the string and what it did, such as a title taking four lines or a price wrapping away from its label.

**Stress test:** Putting your layout against the content and the settings most likely to break it, rather than the ones that suit it.

**Enlarged text:** The reader’s own text-size setting turned up. It is their choice rather than yours, and many people keep it well above the default.

**Wrapping:** A line running out of room and continuing on the next one. Where it happens decides whether a price still sits beside the word it belongs to.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Running the narrow-width test on a class description, and building a test that could not fail.

**How I ran it:** I redrew the card at about a third of the width, and to fit it on the page I lettered everything smaller too. Nothing broke, and I wrote down that it held.

**Why nothing broke:** Shrinking the text along with the column keeps the same number of characters on every line. The character count is the whole thing under test, so I had removed it.

**The second run:** I ruled a column about 390 px wide and lettered the same paragraph at true size. The longest title took four lines and the price wrapped away from the word it belonged to.

**The enlarged case:** Same column, everything a step and a half bigger. The count fell to roughly 26 characters a line, and the empty-state sentence became six short lines that read as a list rather than a sentence.

**What I wrote down:** Not “cramped”. “Longest title takes four lines and pushes the date past the card edge”, and “at enlarged size the measure falls to about 26 and the paragraph stops holding together”. Two notes I can act on.

**Wrong turn:** The wrong turn is scaling the text down with the column so the drawing fits the page. It is tempting because it looks like the same screen, smaller, and because a test that passes is quicker than one that does not.

**Trade-off:** Drawing at true size means the narrow version will not sit neatly beside the wide one, so you need two sheets and cannot compare them at a glance. That is what a test that can fail costs you.

**Unknown:** Still unknown: how far a real reader has turned their text size up. A step and a half is a guess, and some people run considerably more than that every day.


### At about 390 px with your worst-case strings: what breaks?

Section: practice-plan. Stable action: write-narrow-break.

Write your answer for “At about 390 px with your worst-case strings: what breaks?”. Use the task instructions below to decide what to include.

**Answer:** At about 390 px with your worst-case strings: what breaks?




### With enlarged text: what breaks?

Section: practice-plan. Stable action: write-enlarged-break.

Write your answer for “With enlarged text: what breaks?”. Use the task instructions below to decide what to include.

**Answer:** With enlarged text: what breaks?




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your body text reads awkwardly, so you increase the line height from 1.5 to 1.9. What have you risked?

- The paragraph may stop cohering, and on a phone much less content now fits above the fold.
- Nothing: more air is always easier to read.
- Only that it looks less dense, which is a matter of taste.

<details>
<summary>After your attempt</summary>

The paragraph may stop cohering, and on a phone much less content now fits above the fold. — Leading past a certain point separates lines instead of grouping them, and the vertical cost is paid on the smallest screen where it hurts most.

Nothing: more air is always easier to read. — Air helps until lines stop belonging to each other. The block then reads as a list of sentences rather than a paragraph.

Only that it looks less dense, which is a matter of taste. — It is a reading and a layout consequence, not taste. Content pushed below the fold is content the reader does not see.

Improve: Reread your leading values in step 3. If body line height is above about 1.7, try the awkwardness as a measure problem instead, recount your characters per line, and record the change in step 5.

Check again: Line height and measure were adjusted as a pair, and the paragraph gap still clearly exceeds the line gap.

Answers to revisit: line-height-body, measure-decision

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You wrote “about 60 to 70 characters” without counting. Why does the count matter?

- Because a column that looks right is routinely 90 or more characters, and only counting reveals it.
- It does not; the band is a guideline, not a rule.
- Because clients expect the number to be documented.

<details>
<summary>After your attempt</summary>

Because a column that looks right is routinely 90 or more characters, and only counting reveals it. — The eye adapts to whatever is in front of it. The number is the cheapest check available and it takes a minute.

It does not; the band is a guideline, not a rule. — The band is a guideline and the count is what tells you where you are. Without it you cannot know whether you are inside or far outside.

Because clients expect the number to be documented. — Documentation is not the reason. The reason is that your impression of line length is unreliable.

Improve: If your measure box in step 2 holds an estimate, count three full lines now and write the average, then record what changed in step 5.

Check again: The measure box contains a counted average, and the chosen width follows from it.

Answers to revisit: measure-count

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You tested with two short sentences of placeholder text and everything held. What does that establish?

- Very little: the layout has not met the longest title, the empty state or a wrapping price.
- That the typography settings are sound and can be applied.
- That the design works for average content, which is what most readers see.

<details>
<summary>After your attempt</summary>

Very little: the layout has not met the longest title, the empty state or a wrapping price. — Placeholder text is uniformly polite, and every real failure comes from content that is longer, shorter or emptier than expected.

That the typography settings are sound and can be applied. — The settings survived the easiest possible content. That is the least informative test available.

That the design works for average content, which is what most readers see. — Averages do not appear on screens; particular classes with particular names do. The awkward ones are where readers meet the failure.

Improve: Put your worst-case strings from step 1 into the block and redo the narrow test, then record what broke in step 5.

Check again: The stress notes name real strings, including the longest title and the empty state.

Answers to revisit: longest-title, narrow-break

</details>


### Decide and save

Section: practice. Stable action: step-5-brief.

Final values with reasons, your open question, and the repair the Check questions asked for.

- Write your final values with a one-line reason each. Save the artefact and note the next unresolved question. Pause here if needed.

**Start here:** Write each value as “X, because …” and delete any reason that is only about appearance.

**Enough:** Every value has a reason about reading rather than looks.

**Open question:** Something this work has not settled, written down on purpose so that later it is not mistaken for something you knew.

**Repair:** The change a Check question asks you to make to your own work. You make it here and record what you did.


### Your final values, one line of reasoning each

Section: practice. Stable action: write-final-values.

Write your answer for “Your final values, one line of reasoning each”. Use the task instructions below to decide what to include.

**Answer:** Your final values, one line of reasoning each




### The question you have not answered

Section: practice. Stable action: write-open-question.

Write your answer for “The question you have not answered”. Use the task instructions below to decide what to include.

**Answer:** The question you have not answered




### Where the ruled column and renderings live

Section: practice. Stable action: write-photo-reference.

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.

**Answer:** Where the ruled column and renderings live

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson recolours this same screen, so keep it as it stands.


<details>
<summary>Optional hints and reference material</summary>

- Use the same content in both versions so you are comparing layout rather than writing.
- Look for a button label that wraps poorly and a paragraph whose lines are hard to track; adjust one variable at a time.

- R03: [web.dev: typography](https://web.dev/learn/design/typography) — The line-length, line-height and vertical-rhythm parts of the typography chapter. Purpose: Supplies the reading-comfort reasoning behind measure and leading. Free reading, no account. Verified 2026-09-06. Fallback: R06.
- R16: [web.dev: learn responsive design](https://web.dev/learn/design/) — The layout and typography chapters, read only for how text reflows. Purpose: Shows what changes about the same text block at different widths. Free reading, no account. Verified 2026-09-06. Read chapters, not the whole site. Fallback: R15.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Measure is measured, not estimated**

Adequate evidence: An actual character count from a full line of the submitted block, with the chosen maximum width recorded.

0 — No measure is stated.

1 — A width is stated but no character count was taken.

2 — A character count and a maximum width are both recorded and sit in a defensible range.

3 — As adequate, and the write-up explains why this content justifies the top or bottom of the range rather than the middle.

Repair: Count the characters, including spaces, on three different full lines of your own block and record the average. If it falls outside roughly 45–75, change the container width and count again. Recheck: The three counts, the average and the final width.

**Line height and block spacing are stated as related decisions**

Adequate evidence: Both values written down, with the paragraph gap visibly larger than the line gap, and a sentence connecting the leading choice to the measure.

0 — Neither value is stated.

1 — Values are stated but unrelated to the measure, or the paragraph gap does not exceed the line gap.

2 — Both are stated, the paragraph gap clearly wins, and the leading is justified by the line length.

3 — As adequate, and different leading is set for body, heading and small text with the reason for each.

Repair: Measure the two gaps on your own artefact. If the paragraph gap is not clearly larger, increase it until the blocks separate at a glance, then restate your line height as a ratio. Recheck: The two measured gaps and the restated ratio.

**Real worst-case content was used**

Adequate evidence: A named list of the actual strings used, including at least one long title, one name, one number-bearing string and one empty state.

0 — Placeholder text only.

1 — Some real content, but no deliberately difficult strings.

2 — A worst-case list is present and visibly used in the rendering.

3 — As adequate, and one string was chosen because it is realistic for an Indian audience — a long transliterated name, a rupee amount or a second script — with what it changed.

Repair: Replace every remaining placeholder string with real content, then add one string you expect to break the layout and keep the result even if it looks bad. Recheck: The rendering with real strings and the breaking string kept visible.

**Narrow and enlarged cases are reported honestly**

Adequate evidence: Specific named failures at 390 px and at enlarged text, or a stated method showing why there were none.

0 — Neither case was produced.

1 — One case was produced, or failures are described only as “fine”.

2 — Both cases are shown with specific named failures or a stated checking method.

3 — As adequate, and the report separates a genuine readability failure from a merely unattractive result.

Repair: Produce the missing case and write each problem as an observable sentence naming the element and the behaviour. Then mark each one as readability or aesthetics. Recheck: Both renderings and the labelled problem list.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson recolours this same screen, so keep it as it stands.

**Review criteria:**

- Measure is measured, not estimated
- Line height and block spacing are stated as related decisions
- Real worst-case content was used
- Narrow and enlarged cases are reported honestly

<details>
<summary>Reading, video and deeper explanation</summary>



[web.dev: typography](https://web.dev/learn/design/typography). [Web Accessibility Perspectives: Customizable Text](https://www.w3.org/WAI/perspective-videos/customizable/). No video needed: set your longest real line, then reread it with the text one step larger and note what collides. The point is the same and paper can make it.

</details>

## Lesson 3: Colour that carries meaning, not decoration

Stable ID: m03-l03-v1. Core.

Colour is the part of your existing craft that transfers least cleanly to product work, because on a screen colour is often the only thing carrying a status — and some of your readers will not receive it.

Bring: Your re-typeset screen and worst-case content list. You will recolour that screen, not design a new one.

Starting route: Use a sketch, or draw a fictional reservation screen with heading, body text, price, link, error and Reserve. Give six roles their own written colour values. For a paper greyscale check, redraw using light/dark pencil shading. Label that as a simulation; it is not a measured contrast result.

- A palette table of role, value and meaning; the recoloured screen; a greyscale version; and a list of information that failed the greyscale test with the second channel you added for each.

### Start with a clear task

Section: learn. Stable action: welcome.

Define a working palette with a stated role for every colour, and prove that every piece of information it conveys survives when the colour is removed.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Give every colour a job before you choose a value. A product palette is usually smaller than a brand palette: a surface, a primary text colour, a secondary text colour, one action colour, and a small set of status colours for error, warning and success. Colours without a job accumulate, and a palette of nineteen greys is not richer than one of four — it is unmaintainable and inconsistent across screens.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Colour alone must never be the only carrier of information. Some readers cannot distinguish the hues you are relying on, some are on a washed-out screen in daylight, and some have colour overridden entirely. The rule is practical rather than moral: whatever the colour says, something else must also say — an icon, a word, a pattern, a position. The quickest check is to view the screen in greyscale and ask what you can no longer tell.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Hue, saturation and lightness are separable controls, and lightness does most of the accessible work. Two colours of the same lightness will look distinct to you and nearly identical to a reader with reduced colour vision, or on a dim screen. When you need two states to be reliably distinguishable, change lightness, not just hue.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Colour also carries convention, and convention is regional and contextual rather than universal. Red for danger is widespread in interface work, but red in an Indian context is also celebratory, and green appears in both money and success meanings. Do not assume your audience reads your palette the way you do; state the meaning in words somewhere in the interface, and treat a colour convention as a hypothesis you could check rather than a fact.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A booking list showed status as a coloured dot: green confirmed, amber pending, red cancelled. In greyscale all three dots became mid-grey circles and the list became unreadable. The repair was not a new palette but a second channel: each dot kept its colour and gained a distinct shape and the status word beside it. The colour still helps people who can use it, and no longer carries the meaning alone.


### Get your practice ready

Section: learn. Stable action: workspace.

Use a sketch, or draw a fictional reservation screen with heading, body text, price, link, error and Reserve. Give six roles their own written colour values. For a paper greyscale check, redraw using light/dark pencil shading. Label that as a simulation; it is not a measured contrast result.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and list roles

Section: practice-plan. Stable action: step-1-brief.

The roles your screen needs, each with one value.

- Read the assigned colour material. Then write the roles your screen actually needs — surface, text, secondary text, action, and each status — before opening any colour picker.

**Start here:** List the roles before opening any colour picker; the list is usually shorter than you expect.

**Enough:** Every colour on your screen appears in the list with a stated job.

**Role:** What a colour is for: a surface, a body text, an action, a status. Not a name like “the blue”.

**Status colour:** A colour carrying information, such as full, cancelled or confirmed. These are the ones that fail the greyscale test.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Listing the roles for a class list, and finding that the list was really a list of colours.

**What I wrote first:** Six lines: the teal, the warm grey, the near-black, the cream, the orange and the soft red. A set I liked, with a role written in beside each one afterwards.

**Where that went wrong:** I was working backwards from the colours, so every colour found a job. The orange became “accent”, which is not a job. Nothing on the screen needed it.

**What I did instead:** I put the colours away and listed what the screen has to say: this is a surface, this is body text, this is quieter text, this is the one thing to press, this class is full.

**What the list came to:** Five roles. Two of my six colours had no role at all, and one role, quieter text, had no colour yet, because I had been making it by fading the body colour whenever I needed it.

**The awkward one:** The orange kept asking to survive as “brand presence”. I let it go and wrote it into the box for step 2 as the place the palette felt too small.

**Wrong turn:** The wrong turn is starting from the colours you already have and finding a role for each. It is tempting because choosing colours is the enjoyable part, and any colour can be made to sound useful if you name its job late enough.

**Trade-off:** A role-first list is duller and shorter than a palette, and it usually costs you a colour you were fond of. It is what stops a screen collecting colours nobody can explain a year later.

**Unknown:** Still unknown: whether five roles hold once the screen gains a second status, such as a waiting list. New information may need a new role, and that is a decision to take deliberately rather than by reaching for another colour.


### Role 1 · what it is for, then the value you chose

Section: practice-plan. Stable action: write-role-1.

Surface, body text, secondary text, the main action, and one status such as full or cancelled.

**Answer:** Role 1 · what it is for, then the value you chose

Surface, body text, secondary text, the main action, and one status such as full or cancelled.

<details>
<summary>Example</summary>

Example (made up): main action · the Reserve button · #214e46.

</details>


### Role 2 · what it is for, then the value you chose

Section: practice-plan. Stable action: write-role-2.

Write your answer for “Role 2 · what it is for, then the value you chose”. Use the task instructions below to decide what to include.

**Answer:** Role 2 · what it is for, then the value you chose




### Role 3 · what it is for, then the value you chose

Section: practice-plan. Stable action: write-role-3.

Write your answer for “Role 3 · what it is for, then the value you chose”. Use the task instructions below to decide what to include.

**Answer:** Role 3 · what it is for, then the value you chose




### Role 4 · what it is for, then the value you chose

Section: practice-plan. Stable action: write-role-4.

Write your answer for “Role 4 · what it is for, then the value you chose”. Use the task instructions below to decide what to include.

**Answer:** Role 4 · what it is for, then the value you chose




### Role 5 · what it is for, then the value you chose

Section: practice-plan. Stable action: write-role-5.

Write your answer for “Role 5 · what it is for, then the value you chose”. Use the task instructions below to decide what to include.

**Answer:** Role 5 · what it is for, then the value you chose




### Role 6 · what it is for, then the value you chose

Section: practice-plan. Stable action: write-role-6.

Write your answer for “Role 6 · what it is for, then the value you chose”. Use the task instructions below to decide what to include.

**Answer:** Role 6 · what it is for, then the value you chose




### Choose values

Section: practice-plan. Stable action: step-2-brief.

How many colours you removed, and where you wanted to add one back.

- Assign one value to each role. Record each as a value plus its role and, where relevant, its lightness relative to its neighbours. Any colour without a role is dropped now.

**Start here:** Apply the palette and count what disappeared.

**Enough:** You noted at least one place the palette felt too small; that is where the next lesson starts.

**Palette:** The whole set of colours you allow yourself, each already tied to a role. Anything outside it does not go on the screen.

**Decoration:** Colour used because it looks good rather than because it tells the reader something. It is the first thing to remove and the hardest to let go of.


### How many colours you removed, and which you were tempted to add back

Section: practice-plan. Stable action: write-removed.

Write your answer for “How many colours you removed, and which you were tempted to add back”. Use the task instructions below to decide what to include.

**Answer:** How many colours you removed, and which you were tempted to add back




### Recolour the screen

Section: practice-plan. Stable action: step-3-brief.

Everything that becomes indistinguishable without colour, with a second channel for each.

- Apply the palette to your screen from the previous lessons. Count the colours you removed and note where you were tempted to add one back.

**Start here:** Photocopy the screen in black and white, or photograph it and turn the colour off. Then read it as if for the first time.

**Enough:** Nothing on the screen depends on hue alone to be understood.

**Second channel:** Another way the same information reaches the reader: a word, a shape, an icon, a position, or a clear difference in lightness.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Running the greyscale test on a class list and finding out what the colour was carrying.

**What I believed:** The palette was fine: I had checked the contrast of every colour against its background and everything passed.

**What the photocopy showed:** The red “Full” label and the green “2 places left” label came out as almost exactly the same grey. Side by side, they were indistinguishable.

**Why contrast had not caught it:** Contrast asks whether text can be read against its background. It never asks whether two pieces of information can be told apart from each other.

**What I added:** The word itself carries it: “Full” and “2 places left” already differ in text, so I made the label text the channel and used colour only as reinforcement.

**The one that was harder:** The primary and secondary buttons were the same shape and size, distinguished only by fill. I gave the secondary an outline and left the fill to the primary.

**Wrong turn:** The wrong turn is assuming a contrast check covers colour dependence. They are different failures and the first one hides the second.

**Trade-off:** Adding a word or an outline makes the screen slightly busier than a pure colour system. It is what keeps the information available to a reader who cannot separate those hues.

**Unknown:** Still unknown: whether the greys I chose are far enough apart in lightness for the remaining distinctions. That is the next lesson’s measurement.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied pair from the same made-up screen. Version A distinguishes a cancelled class from a running one by colouring the title red instead of dark grey. Version B keeps both titles dark grey and adds the word “Cancelled” before the title, with a lighter strike through the date.

Which version survives the greyscale test, and why?

- B, because the distinction is carried by a word and a mark, not by hue alone.
- A, provided the red passes contrast against the background.
- Both, since a reader can click through to find out.
- Neither: only an icon is a reliable second channel.

<details>
<summary>After your attempt</summary>

B, because the distinction is carried by a word and a mark, not by hue alone. — Remove the colour and B still reads correctly. A becomes two identically grey titles, and the information is simply gone.

A, provided the red passes contrast against the background. — Passing contrast means the red text is readable. It says nothing about whether a reader can tell it apart from the dark grey title beside it.

Both, since a reader can click through to find out. — That makes the reader do extra work to recover information the screen already had, and only if they suspect something is different.

Neither: only an icon is a reliable second channel. — A word is often the most reliable channel of all, and it needs no legend. Icons help, and they are not the only answer.

Apply the same test to each of your own failures: what would still be true with the colour removed?

</details>


### What you can no longer tell apart

Section: practice-plan. Stable action: write-greyscale-failures.

Write your answer for “What you can no longer tell apart”. Use the task instructions below to decide what to include.

**Answer:** What you can no longer tell apart



<details>
<summary>Example</summary>

Example (made up): the “full” and “places left” labels became the same grey, and the Reserve button stopped looking different from the outline button beside it.

</details>


### Failure 1 · the second channel you added

Section: practice-plan. Stable action: write-second-channel-1.

A word, an icon, a shape, an underline, or a real difference in lightness.

**Answer:** Failure 1 · the second channel you added

A word, an icon, a shape, an underline, or a real difference in lightness.


### Failure 2 · the second channel you added

Section: practice-plan. Stable action: write-second-channel-2.

Write your answer for “Failure 2 · the second channel you added”. Use the task instructions below to decide what to include.

**Answer:** Failure 2 · the second channel you added




### The greyscale test

Section: practice-plan. Stable action: step-4-brief.

One colour meaning you are not certain your reader shares.

- View or redraw the screen with all colour removed. Write down every piece of information you can no longer determine. For each, add a second channel — word, icon, shape or position — and record the change.

**Start here:** Look at your status colours and ask who taught you what they mean.

**Enough:** The doubt names a specific colour and the meaning you are relying on.

**Convention:** A learned association, not a fact. Red for danger and green for success are widespread in some places and not universal.


### One colour meaning you are not sure your reader shares

Section: practice-plan. Stable action: write-convention-doubt.

Red for danger, green for go, and much else, is learned rather than universal.

**Answer:** One colour meaning you are not sure your reader shares

Red for danger, green for go, and much else, is learned rather than universal.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Every colour on your screen passes its contrast check. Does that mean your colour use is accessible?

- No. Contrast asks whether text is readable; it never asks whether two colours can be told apart from each other.
- Yes, if every pair passes the required ratio.
- Yes for text, and non-text elements do not matter.

<details>
<summary>After your attempt</summary>

No. Contrast asks whether text is readable; it never asks whether two colours can be told apart from each other. — A red error and a green success can both pass against white and still be identical to a reader with red-green colour vision deficiency, because hue is the only difference between them.

Yes, if every pair passes the required ratio. — That covers legibility against the background and leaves colour dependence entirely unchecked. They are separate failures.

Yes for text, and non-text elements do not matter. — Essential non-text elements carry information too, and they are exactly where colour-only distinctions hide.

Improve: Run the greyscale test in step 3 if you have not, and add a second channel for anything you can no longer tell apart. Record it in step 5.

Check again: The greyscale copy is readable without guessing, and each failure has a named second channel.

Answers to revisit: greyscale-failures, second-channel-1, second-channel-2

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Two statuses need to be distinguishable. Which difference is most reliable?

- A clear difference in lightness, plus a word.
- Two hues far apart on the colour wheel, such as red and green.
- The same hue at different saturation.

<details>
<summary>After your attempt</summary>

A clear difference in lightness, plus a word. — Lightness survives most colour vision differences and survives a black and white print. The word survives everything.

Two hues far apart on the colour wheel, such as red and green. — Far apart on the wheel is not far apart in perception for everyone. Red and green is the classic pair that collapses.

The same hue at different saturation. — Saturation differences are the first to disappear on a poor screen, in sunlight, or in print.

Improve: Look at your status roles in step 1. If two are distinguished by hue at similar lightness, change one, and note it in step 5.

Check again: Status colours differ in lightness as well as hue, and each carries a word.

Answers to revisit: role-1, role-2, role-3, role-4, role-5, role-6

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You used green for available and red for full. What should your record say about that choice?

- That it is a convention your readers may or may not share, stated as an assumption rather than a fact.
- Nothing: red and green are universally understood.
- That the colours were chosen to match the brand.

<details>
<summary>After your attempt</summary>

That it is a convention your readers may or may not share, stated as an assumption rather than a fact. — These meanings are learned and vary. Writing it down as an assumption is what lets someone check it with real readers later.

Nothing: red and green are universally understood. — They are widespread in some contexts and neither universal nor stable across cultures, and they are the pair most likely to be indistinguishable.

That the colours were chosen to match the brand. — That records where they came from and not what they are asking the reader to know.

Improve: Fill the convention box in step 4 with the specific meaning you are relying on, then record it in step 5.

Check again: At least one colour meaning is written down as an assumption to test rather than a fact.

Answers to revisit: convention-doubt

</details>


### Record and pause

Section: practice. Stable action: step-5-brief.

Where the two versions live, and the repair the Check questions asked for.

- Save the palette table, the coloured and greyscale versions, and your repair list. Note one colour meaning you are unsure your audience shares.

**Start here:** Keep the coloured and greyscale copies together; the pair is the evidence.

**Enough:** Both versions exist and are named.

**Greyscale copy:** The same screen with the colour taken out, kept beside the coloured one. The two together are the evidence, and neither says much on its own.

**Repair:** The change a Check question asks you to make to your own work. You make it now and write down what you did.


### Where the coloured and greyscale versions live

Section: practice. Stable action: write-photo-reference.

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.

**Answer:** Where the coloured and greyscale versions live

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson measures the contrast of this palette, so keep the values exactly as recorded.


<details>
<summary>Optional hints and reference material</summary>

- Cover the colored mark and check whether the status remains understandable.
- Color associations depend on context. Label your assumption rather than calling a color universally positive.

- R29: [web.dev: colour and contrast](https://web.dev/learn/accessibility/color-contrast) — Colour perception and the HSL model, colour vision deficiency, and the section on not conveying information by colour alone. Purpose: Explains why lightness separates more reliably than hue and what the colour-alone rule means in practice. Free reading, no account. Verified 2026-09-06. The page carries no code samples, so any CSS in your exercise is your own. Fallback: R30.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Every colour has a stated role**

Adequate evidence: A table mapping each palette entry to a role and a meaning, with no colour appearing in the screen that is absent from the table.

0 — No palette is stated.

1 — A palette exists but some entries have no role, or the screen uses colours outside it.

2 — Each entry has a role and meaning, and the screen uses only those entries.

3 — As adequate, and the write-up names a colour that was removed and what it had been doing implicitly.

Repair: Sample every distinct colour actually present in your screen and add it to the table. Any row you cannot give a role to must be replaced by an existing role's colour. Recheck: The completed table and a screen using only its entries.

**No information depends on colour alone**

Adequate evidence: A greyscale version of the screen plus a list of what became indeterminate, each with the second channel added.

0 — No greyscale check was done.

1 — A greyscale version exists but failures were not listed or not repaired.

2 — Failures are listed and each has a second channel added.

3 — As adequate, and the repaired screen is shown again in greyscale to confirm the fix rather than assuming it.

Repair: Produce the greyscale version and, for every status or category, ask what tells you which one it is. Add a word or shape for each failure, then re-check in greyscale. Recheck: The greyscale before, the repair list and the greyscale after.

**Distinctions use lightness, not hue alone**

Adequate evidence: For each pair of states that must be told apart, a note of how their lightness differs, not only their hue.

0 — State colours differ in hue only, with no lightness noted.

1 — Lightness is mentioned but not for the pairs that actually need separating.

2 — Each critical pair differs in lightness and this is recorded.

3 — As adequate, and one pair is deliberately given the largest separation because confusing it would be the most costly.

Repair: List your state pairs. For any pair whose members look the same in greyscale, move one of them lighter or darker until they separate, and record the new values. Recheck: The state-pair list with lightness values and a greyscale view.

**Colour meanings are stated as conventions, not facts**

Adequate evidence: At least one sentence identifying a colour meaning the audience may not share, and how it could be checked.

0 — Colour meanings are asserted as universal.

1 — A caveat is present but generic.

2 — A specific meaning is named as a convention with a way to check it with a reader.

3 — As adequate, and the interface itself states the meaning in words so the convention is not load-bearing.

Repair: Pick the one colour in your palette whose meaning you are least sure about. Write who might read it differently and the smallest question you could ask a real person to find out. Recheck: The named colour, the alternative reading and the question.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson measures the contrast of this palette, so keep the values exactly as recorded.

**Review criteria:**

- Every colour has a stated role
- No information depends on colour alone
- Distinctions use lightness, not hue alone
- Colour meanings are stated as conventions, not facts

<details>
<summary>Reading, video and deeper explanation</summary>



[web.dev: colour and contrast](https://web.dev/learn/accessibility/color-contrast).

</details>

## Lesson 4: Contrast you can defend

Stable ID: m03-l04-v1. Core.

“It looks readable to me” is the weakest sentence in a design review. A measured ratio is a number you can put in a handoff, defend to an engineer and re-check after someone changes a colour.

Bring: Your palette table and recoloured screen from the previous lesson.

Starting route: Use the offline contrast calculator beside the measurement fields. Practice palette if yours is missing: text #777777, link #214e46, error #B3261E and button #567E48 on #FFFFFF, plus white button text. Enter foreground and background separately and record the element, size, applicable threshold and result.

- A contrast table covering every text and essential non-text element with colour, background, size, threshold and measured ratio, before and after repair, plus a note on your own reading test.

### Start with a clear task

Section: learn. Stable action: welcome.

Measure and record the contrast of every text and essential non-text element on one screen against the stated thresholds, and repair the failures without discarding the palette.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

The minimum contrast requirement is a ratio between the lightness of text and its background. Ordinary body text needs at least 4.5:1. Large text — from around 18 point, or 14 point when bold — needs at least 3:1, because larger, thicker letterforms remain legible at lower contrast. These are floors for a wide range of readers, not targets for good design, and comfortable reading often sits well above them.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

The requirement has genuine exceptions, and knowing them stops you from either over-claiming or over-correcting. Text that is purely decorative, text that is part of a logo or brand name, and text in a component that is currently inactive are not held to the ratio. An inactive control is the one designers most often get wrong in both directions: greying it out is legitimate, but if the reader cannot tell what the control would do, the problem is comprehension rather than conformance.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Measure the pair that actually renders, not the pair you intended. Text over an image, text over a gradient, semi-transparent overlays and a hover state that changes the background are all cases where the real background differs from the one in your palette. Take the worst point of the actual composite, not the average, because a caption is illegible at the point where the photograph is brightest, not on average.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Contrast is a floor for legibility, not a proof of readability. A screen can pass every ratio and still be exhausting: too-long lines, insufficient leading, an over-saturated background that vibrates against the text, or an all-capitals paragraph. Report the ratio as one piece of evidence alongside your own reading test, and never describe a passing ratio as an accessibility outcome for real users.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A workshop card used mid-grey #999999 body text on white — about 2.8:1, below the 4.5:1 floor. That grey also fails the 3:1 large-text threshold, so enlarging it alone cannot repair the contrast. The designer darkened the heading color until a new measurement exceeded 3:1, and moved body text to a darker grey that measures about 7:1. The visual softness the designer wanted was preserved exactly where it was legitimate, and removed where it was not.


### Get your practice ready

Section: learn. Stable action: workspace.

Use the offline contrast calculator beside the measurement fields. Practice palette if yours is missing: text #777777, link #214e46, error #B3261E and button #567E48 on #FFFFFF, plus white button text. Enter foreground and background separately and record the element, size, applicable threshold and result.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read the thresholds and exceptions

Section: practice-plan. Stable action: step-1-brief.

The two thresholds and the exceptions, written in your own words.

- Read the assigned understanding page. Write the two thresholds and the three exceptions in your own words, including what counts as large text.

**Start here:** Read the assigned page and write each threshold as a sentence you could say to someone else.

**Enough:** Your definition of large text names a size and a weight.

**Contrast ratio:** A number comparing the lightness of two colours, from 1 (identical) to 21 (black on white).

**Large text:** A defined size and weight above which a lower ratio is allowed. Write the actual definition; guessing it is how failures pass.


### Normal text needs at least…

Section: practice-plan. Stable action: write-threshold-normal.

Write your answer for “Normal text needs at least…”. Use the task instructions below to decide what to include.

**Answer:** Normal text needs at least…




### Large text needs at least… and “large” means…

Section: practice-plan. Stable action: write-threshold-large.

Say the size and weight that qualify, not just the ratio.

**Answer:** Large text needs at least… and “large” means…

Say the size and weight that qualify, not just the ratio.


### The exceptions, in your own words

Section: practice-plan. Stable action: write-exceptions.

Which text is exempt, and why placeholder text is not one of them.

**Answer:** The exceptions, in your own words

Which text is exempt, and why placeholder text is not one of them.


### Measure everything

Section: practice-plan. Stable action: step-2-brief.

Every text element measured, including placeholder text and anything over an image.

- Build a table listing every text element on your screen: its colour, its actual background, its size and weight, the applicable threshold and the measured ratio. Include placeholder text, disabled states and any text over an image.

**Start here:** List the elements first, then measure them in order. The calculator is in this section.

**Enough:** The table includes at least one element you were tempted to skip.

**Effective background:** What is actually behind the text after transparency and images are flattened. Measure that, not the colour you intended.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Measuring the awkward element on a booking form rather than the easy ones.

**What I measured first:** The headings and body text. Both were dark grey on near-white and passed comfortably, which felt like progress.

**What I nearly skipped:** The placeholder text inside the email field, a light grey hint reading “you@example.com”. It looked like decoration.

**Why I measured it anyway:** A reader has to read it to know what to type, so it is real text doing real work. It came out at 2.4 against the field background.

**What I did about it:** Darkening the hint would have helped and kept a weakness: the hint disappears the moment typing starts. I added a visible label above the field and kept the hint as an example.

**What that changed in the table:** The row now records the label, not the placeholder, as the thing carrying the instruction — and the label passes at 7.1.

**Wrong turn:** The wrong turn is measuring only the text that looks like content. The failures live in hints, disabled labels, small print and anything sitting over an image.

**Trade-off:** Adding a visible label costs vertical space on a phone, which is exactly what the earlier lessons were protecting. It buys an instruction that survives typing.

**Unknown:** Still unknown: the effective contrast of anything over a photograph, which varies pixel by pixel and needs a separate check.


### Element 1 · what it is, its colour, its background, its size, the threshold and the measured ratio

Section: practice-plan. Stable action: write-row-1.

Use the calculator for the ratio. Record the number it gives, not a rounded version.

**Answer:** Element 1 · what it is, its colour, its background, its size, the threshold and the measured ratio

Use the calculator for the ratio. Record the number it gives, not a rounded version.

<details>
<summary>Example</summary>

Example (made up): price label · #6b7b72 on #fffefb · 14 regular · needs 4.5 · measured 3.71 · fails.

</details>


### Element 2 · what it is, its colour, its background, its size, the threshold and the measured ratio

Section: practice-plan. Stable action: write-row-2.

Write your answer for “Element 2 · what it is, its colour, its background, its size, the threshold and the measured ratio”. Use the task instructions below to decide what to include.

**Answer:** Element 2 · what it is, its colour, its background, its size, the threshold and the measured ratio




### Element 3 · what it is, its colour, its background, its size, the threshold and the measured ratio

Section: practice-plan. Stable action: write-row-3.

Write your answer for “Element 3 · what it is, its colour, its background, its size, the threshold and the measured ratio”. Use the task instructions below to decide what to include.

**Answer:** Element 3 · what it is, its colour, its background, its size, the threshold and the measured ratio




### Element 4 · what it is, its colour, its background, its size, the threshold and the measured ratio

Section: practice-plan. Stable action: write-row-4.

Write your answer for “Element 4 · what it is, its colour, its background, its size, the threshold and the measured ratio”. Use the task instructions below to decide what to include.

**Answer:** Element 4 · what it is, its colour, its background, its size, the threshold and the measured ratio




### Element 5 · what it is, its colour, its background, its size, the threshold and the measured ratio

Section: practice-plan. Stable action: write-row-5.

Write your answer for “Element 5 · what it is, its colour, its background, its size, the threshold and the measured ratio”. Use the task instructions below to decide what to include.

**Answer:** Element 5 · what it is, its colour, its background, its size, the threshold and the measured ratio




### Repair the failures

Section: practice-plan. Stable action: step-3-brief.

A repair for each failure, with the new ratio, keeping the palette’s intent.

- For each failing row, choose a repair: darken the text, lighten the background, enlarge the text so the large-text threshold applies, or add a solid backing behind text on an image. Record which repair you chose and why.

**Start here:** Take the worst-failing row first; it usually forces the largest decision.

**Enough:** Every failing row has a new measured ratio beside it.

**Repair:** The specific edit that takes one failing element above its threshold, written down with the new measured number beside it. A general intention to improve the colours is not a repair.

**Palette intent:** What each colour was doing before you touched it. A repair that meets the number and erases the distinction the colour carried has traded one failure for another.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied failing row from the same made-up screen: a secondary link, #7a8b80 on #fffefb, 14 regular, needs 4.5, measured 3.1.

Which repair is soundest?

- Darken the link colour until it passes, keeping it recognisably the same hue.
- Enlarge the link to 19 semibold so the large-text threshold applies.
- Change the background of the whole screen to pure white.
- Make the link black, which certainly passes.

<details>
<summary>After your attempt</summary>

Darken the link colour until it passes, keeping it recognisably the same hue. — It fixes the failure at its source and keeps the palette’s intent: the link still reads as the secondary colour, just darker.

Enlarge the link to 19 semibold so the large-text threshold applies. — Legitimate in principle and wrong here: a secondary link enlarged past the body text now outranks the content it sits beside.

Change the background of the whole screen to pure white. — It buys a fraction of a ratio point and changes every other element on the screen to fix one link.

Make the link black, which certainly passes. — It passes and removes the distinction between a link and body text, which is information the reader was using.

Choose repairs for your own failures the same way: fix the element, keep what the colour was doing.

</details>


### For each failure: what you changed and the new ratio

Section: practice-plan. Stable action: write-repairs.

Darken the text, lighten the background, enlarge the text so the large-text threshold applies, or put a solid backing behind it.

**Answer:** For each failure: what you changed and the new ratio

Darken the text, lighten the background, enlarge the text so the large-text threshold applies, or put a solid backing behind it.


### How you kept the palette’s intent while repairing

Section: practice-plan. Stable action: write-palette-kept.

Repairs that flatten every colour to black on white pass the check and lose the design.

**Answer:** How you kept the palette’s intent while repairing

Repairs that flatten every colour to black on white pass the check and lose the design.


### Read it yourself

Section: practice-plan. Stable action: step-4-brief.

What your own eyes find that the numbers did not.

- Read the repaired screen at arm's length, and if possible outdoors or with the screen brightness lowered. Note anything that still reads poorly despite passing, and anything you over-corrected into harshness.

**Start here:** Take the screen to a window, or turn the brightness down, and read it at arm’s length.

**Enough:** You noted at least one thing that passes the number and still reads poorly, or said plainly that nothing did.

**Arm’s length:** Holding the page or screen as far away as a reader actually would, rather than close up the way you hold it while working on it.

**Floor:** A minimum rather than a target. A ratio that clears its threshold is the least that was acceptable, not evidence that the text reads well.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Reading a printed class list at a window, and nearly repairing the wrong thing.

**What I expected:** Every row in my table now met its threshold, so I carried the printed screen to the window mostly to confirm it.

**What happened:** The 12 point labels under each class were unreadable at arm’s length in the daylight. They had measured 5.2, comfortably above the number they needed.

**My first move:** Push every grey towards black. It would certainly help something, and I had already changed three elements before I stopped.

**What stopped me:** The label was not failing on its colour. It was failing on its size, and on light washing across the paper. Darkening it would have flattened the palette to fix a fault that was somewhere else.

**What I wrote instead:** “12 point labels meet 5.2 and are still unreadable outdoors at arm’s length.” Then one repair: the labels moved up to 14, which is a change to the type ladder rather than to any colour.

**Wrong turn:** The wrong turn is taking what your eyes find as a signal to raise every ratio. It is tempting because darkening is the repair you already know how to make, and it always improves something a little.

**Trade-off:** Moving the labels from 12 to 14 costs vertical space and pushes roughly one class per screen off the bottom. That is a real loss, taken because labels nobody can read are a larger one.

**Unknown:** Still unknown: how the same page reads for eyes that are not mine. One person at one window on one afternoon is a hint about the screen, not a finding about readers.


### At arm’s length, with the brightness low or outdoors: what still reads poorly?

Section: practice-plan. Stable action: write-own-reading.

The numbers are a floor, not a promise. Your own eyes find things they miss.

**Answer:** At arm’s length, with the brightness low or outdoors: what still reads poorly?

The numbers are a floor, not a promise. Your own eyes find things they miss.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The grey placeholder text inside your form field measures 2.6. Is that a failure?

- Yes. It is real text the reader must read to know what to type, and it is not an exempt case.
- No, because it is only a hint and disappears when typing starts.
- No, because placeholder text counts as inactive.

<details>
<summary>After your attempt</summary>

Yes. It is real text the reader must read to know what to type, and it is not an exempt case. — Placeholder text is often the only instruction present, and it is usually the faintest thing on the screen. The sturdier fix is a visible label.

No, because it is only a hint and disappears when typing starts. — Disappearing when typing starts is a second problem, not an exemption. Before it disappears it is the instruction.

No, because placeholder text counts as inactive. — The inactive exception is about genuinely disabled controls, not about hints in an active field.

Improve: Add your placeholder text as a row in step 2 and measure it. If it fails, repair it and record the change in step 5.

Check again: The table includes every hint and small-print element, each with a measured ratio.

Answers to revisit: row-1, row-2, row-3, row-4, row-5

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You enlarge a failing label to 19 semibold so the large-text threshold applies. When is that a good repair?

- When the element genuinely deserves that prominence in the hierarchy you already built.
- Always: it passes the check without changing any colour.
- Never: only colour changes are honest repairs.

<details>
<summary>After your attempt</summary>

When the element genuinely deserves that prominence in the hierarchy you already built. — It is a legitimate route and it changes the design. If the element was deliberately quiet, enlarging it to pass a check contradicts the hierarchy.

Always: it passes the check without changing any colour. — It passes by changing the type hierarchy instead, which is a bigger change than adjusting a colour.

Never: only colour changes are honest repairs. — Too strict. The threshold exists because larger, heavier text is genuinely easier to read.

Improve: Check your repairs in step 3. If you enlarged anything, confirm it deserves the prominence, or choose a colour repair instead, and note it in step 5.

Check again: Each repair is consistent with the type scale from lesson 1.

Answers to revisit: repairs, palette-kept

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Every element now passes. What may you claim?

- That these opaque pairs meet their stated thresholds, which is a floor and not proof the screen is readable.
- That the screen is accessible.
- That readers with low vision can use the screen comfortably.

<details>
<summary>After your attempt</summary>

That these opaque pairs meet their stated thresholds, which is a floor and not proof the screen is readable. — The numbers are one necessary condition. Sunlight, small sizes, transparency, images behind text and everything about layout are untouched by them.

That the screen is accessible. — Accessibility covers structure, keyboard use, announcement, motion, language and much else. Contrast is one measurable slice.

That readers with low vision can use the screen comfortably. — The thresholds are a minimum, set with a broad population in mind. Comfort for a particular reader is a different question and needs a person.

Improve: Write the bounding sentence in step 5 if it is missing, and remove any claim about accessibility from your notes.

Check again: The record separates what was measured from what was not.

Answers to revisit: bounded-claim

</details>


### Record and pause

Section: practice. Stable action: step-5-brief.

One sentence bounding what the numbers show, and the repair the Check questions asked for.

- Save the measurement table before and after, and write one sentence separating what the numbers establish from what they do not.

**Start here:** Finish “these measurements establish … and they do not establish …”.

**Enough:** The sentence does not claim the screen is accessible.

**Bounding a claim:** Saying plainly what your evidence covers and what it leaves out, in the same sentence, so a measurement is not read later as a promise.

**Opaque:** A colour with nothing showing through it. Your measured ratios hold for opaque pairs; text over a photograph or a partly see-through panel is a separate question.


### One sentence separating what the numbers establish from what they do not

Section: practice. Stable action: write-bounded-claim.

Write your answer for “One sentence separating what the numbers establish from what they do not”. Use the task instructions below to decide what to include.

**Answer:** One sentence separating what the numbers establish from what they do not



<details>
<summary>Example</summary>

Example (made up): every text element now meets its threshold for opaque colours; this says nothing about text over photographs, or about whether the screen is readable in sunlight.

</details>


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson regroups the densest screen you have, using space before anything else.


<details>
<summary>Optional hints and reference material</summary>

- Read the assigned W3C criterion before selecting a threshold; text and non-text uses differ.
- For paper work, specify candidate hex pairs and measure them in the supplied local calculator. Do not measure photographed swatches as exact design colors.

- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The intent, the 4.5:1 and 3:1 thresholds, the large-text definition, and the incidental and logotype exceptions. Purpose: The normative reference behind every number in your table. Free reading, no account. Verified 2026-09-06. This is the understanding document, not the standard itself; it explains rather than certifies. Fallback: R29.
- R29: [web.dev: colour and contrast](https://web.dev/learn/accessibility/color-contrast) — The contrast-ratio section only, re-read as the practical companion. Purpose: Connects the thresholds to choosing values in a palette. Free reading, no account. Verified 2026-09-06. Fallback: R30.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Every text element is measured, including the awkward ones**

Adequate evidence: A table row for each text element, explicitly including placeholder text, disabled labels, and any text over an image or gradient.

0 — No measurements were taken.

1 — Only obvious body text was measured; overlays, placeholders or disabled states are missing.

2 — Every text element appears, including the awkward cases, with its actual background.

3 — As adequate, and text over an image is measured at its worst point with that point identified.

Repair: Walk the screen element by element and add the missing rows. For anything over an image or gradient, measure at the lightest and darkest points and record the worse of the two. Recheck: The completed table with the awkward cases present.

**The correct threshold is applied per element**

Adequate evidence: Each row names the threshold used and, for large text, the size and weight that justify it.

0 — No thresholds are recorded.

1 — One threshold is applied to everything, or large text is claimed without size and weight.

2 — Each row states its threshold with the justification for the large-text rows.

3 — As adequate, and an exception is correctly claimed for a decorative, logo or inactive case with the reason.

Repair: For every row you marked as large text, record the actual size and weight and confirm it qualifies. Reclassify anything that does not and re-check the ratio against 4.5:1. Recheck: The table with thresholds and justifications per row.

**Repairs preserve intent rather than flattening the palette**

Adequate evidence: For each failing element, the repair chosen and the reason, showing at least one repair that is not simply “make it black”.

0 — Failures were not repaired.

1 — All failures were repaired by maximising contrast, losing the palette's character.

2 — Repairs vary by situation and each has a stated reason.

3 — As adequate, and one colour is deliberately retained where it legitimately passes, with the threshold that makes that true.

Repair: Revisit any element you set to pure black or white. Ask whether a darker version of the intended hue, a larger size or a solid backing would pass instead, and record the alternative you chose. Recheck: The repair list with reasons and at least one non-maximal repair.

**The claim made from the numbers is bounded**

Adequate evidence: An explicit sentence stating what the measurements establish and what they do not, without describing the screen as accessible.

0 — The screen is described as accessible on the strength of the ratios.

1 — A vague caveat is present.

2 — The claim is bounded to text legibility and names at least two things not established.

3 — As adequate, and the next check that would extend the claim is named — for example the keyboard and screen-reader pass in m11.

Repair: Rewrite your summary sentence so it says exactly what was measured, on what, by what method, and lists what remains unknown. Recheck: The rewritten bounded claim.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson regroups the densest screen you have, using space before anything else.

**Review criteria:**

- Every text element is measured, including the awkward ones
- The correct threshold is applied per element
- Repairs preserve intent rather than flattening the palette
- The claim made from the numbers is bounded

<details>
<summary>Reading, video and deeper explanation</summary>



[W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). [Web Accessibility Perspectives: Colors with Good Contrast](https://www.w3.org/WAI/perspective-videos/contrast/). No video needed: the assigned thresholds page says the same in text. List the coloured elements first, then measure.

</details>

## Lesson 5: Gestalt grouping, and where it stops working

Stable ID: m03-l05-v1. Core.

Grouping is what makes a screen legible before anyone reads a word of it, and it is the fastest fix available when a layout feels confusing — but it is a description of perception, not a law you can apply mechanically.

Bring: Your recoloured, contrast-repaired screen, and the densest screen from your Module 1 set.

Starting route: Use a paper screen, or draw a fictional class page with title, date, price, materials and Reserve at equal gaps. Circle the groups you actually see. Make a second version using spacing, similarity and shared regions. Keep an example where visual similarity would group unrelated things.

- The dense screen before and after regrouping, a note of which grouping tool each group required and why, and one worked counterexample where a principle misleads.

### Start with a clear task

Section: learn. Stable action: welcome.

Re-group one dense screen using proximity, similarity and common region, and produce a case where the grouping principles predict the wrong reading.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Proximity is the strongest grouping signal you control: things placed near each other are read as belonging together, and the eye applies this before it reads any label. This is why the gap around a group must exceed the gap inside it, and why an evenly spaced screen reads as one undifferentiated mass no matter how carefully you named the sections.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Similarity groups by shared appearance — the same colour, shape, size or weight reads as the same kind of thing. This cuts both ways. Two unrelated elements styled alike will be read as a set, so a decorative badge that happens to look like your status pills will be read as a status. Similarity is also how you can group things that cannot be placed near each other, such as items in different columns of a table.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Common region is often the cleanest tool and the most over-used: a shared background, a card or an enclosing border binds whatever is inside it, and it overrides proximity. That strength is exactly the risk. Wrapping every group in a card produces a screen of boxes where nothing is subordinate to anything else, and you have spent your strongest grouping signal on your least important distinction. Prefer space first, then a shared background, then a visible border.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

These principles describe how perception tends to work; they do not tell you what the reader should conclude. Grouping can be correct perceptually and wrong for the task — a well-grouped set of options is still wrong if the option someone actually needs is buried in the third group. Treat a grouping decision as a hypothesis about reading order that a five-second look by another person can challenge, and remember that the source pages state these as laws without stating their limits.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A workshop detail screen listed date, time, location, price, instructor and materials as six evenly spaced lines, and readers kept missing the materials note. Regrouping without changing a single word: date and time drew together as one “when” group, location stood alone, price and instructor became a “details” pair, and materials moved into its own region with a shared background. Total height changed by a few pixels; the materials line stopped being missed by the two people asked to find it — which is a signal, not a finding.


### Get your practice ready

Section: learn. Stable action: workspace.

Use a paper screen, or draw a fictional class page with title, date, price, materials and Reserve at equal gaps. Circle the groups you actually see. Make a second version using spacing, similarity and shared regions. Keep an example where visual similarity would group unrelated things.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read the assigned law pages

Section: practice-plan. Stable action: step-1-brief.

Five principles in your own sentences.

- Read the proximity, similarity, common region, Prägnanz and uniform connectedness pages. For each, write the one sentence you would use to explain it to an engineer.

**Start here:** Read the assigned pages and write each sentence without using the principle’s own name in it.

**Enough:** Someone who has never read the pages could follow each sentence.

**Proximity:** Things near each other are read as belonging together. The cheapest and strongest tool you have.

**Common region:** Things inside the same enclosed area are read as a set, even when they are far apart.

**Uniform connectedness:** Things joined by a line or a shared block are read as connected, which can override proximity.


### Proximity, similarity, common region, Prägnanz and uniform connectedness — one sentence each

Section: practice-plan. Stable action: write-principles.

Write them as you would say them to someone who has never heard the words.

**Answer:** Proximity, similarity, common region, Prägnanz and uniform connectedness — one sentence each

Write them as you would say them to someone who has never heard the words.


### Diagnose the dense screen

Section: practice-plan. Stable action: step-2-brief.

The groups a reader actually sees, and every place that disagrees with what you meant.

- On your densest screen, draw around what you believe the reader groups together at a glance. Mark every place where your intended grouping and the perceived grouping differ.

**Start here:** Print or redraw the screen and circle what you group at a glance, before you read any of it.

**Enough:** The mismatch list names distances or arrangements, not opinions about style.

**Perceived grouping:** What a reader’s eye puts together in the first second, before any of the words are read.

**Intended grouping:** What you meant to belong together when you made the screen.

**Mismatch:** A place where those two disagree. The mismatch, not the screen’s appearance, is the problem you are fixing.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Diagnosing a dense class list before touching it.

**What I was about to do:** Put every class in a bordered card. It is the reflex, and it looks organised in a screenshot.

**What I did instead:** Printed the screen and circled, in pencil, what my eye grouped in the first second without reading.

**What the circles showed:** The price of the first class had drifted closer to the second title than to its own. My eye grouped it downward, with the wrong class.

**Why that mattered:** No border would have fixed it, because the fault was distance. Boxing the wrong grouping just makes the wrong grouping official.

**What fixed it:** Six points of space moved from inside the block to between the blocks. One change, no new lines, nothing enclosed.

**Wrong turn:** The wrong turn is reaching for cards before diagnosing. When everything is a card, common region stops distinguishing anything and the screen gains borders that cost space on a phone.

**Trade-off:** Diagnosing first costs ten minutes and produces no visible progress. It is what stops you decorating a grouping problem instead of solving it.

**Unknown:** Still unknown: whether another reader groups it the way I do. The question in the last step is how to find out.


### Circle the groups you think a reader sees at a glance, and list them here

Section: practice-plan. Stable action: write-perceived-groups.

What the screen currently says, not what you meant it to say.

**Answer:** Circle the groups you think a reader sees at a glance, and list them here

What the screen currently says, not what you meant it to say.


### Where your intended grouping and the perceived grouping disagree

Section: practice-plan. Stable action: write-mismatches.

Write your answer for “Where your intended grouping and the perceived grouping disagree”. Use the task instructions below to decide what to include.

**Answer:** Where your intended grouping and the perceived grouping disagree



<details>
<summary>Example</summary>

Example (made up): the price sits closer to the next class than to its own title, so it reads as belonging to the wrong one.

</details>


### Re-group with the cheapest tool first

Section: practice-plan. Stable action: step-3-brief.

Each group fixed with the cheapest tool that worked, and a reason wherever you used a border.

- Fix each mismatch using space first. Only where space fails, add a shared background. Only where that fails, add a border. Record which tool each group needed.

**Start here:** Take your worst mismatch and try moving things before adding anything.

**Enough:** Every border you used has a written reason.

**Cheapest tool:** The one that adds least to the screen. Space costs nothing; a background costs a surface; a border costs a line and padding.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied problem from the same made-up screen: a class title, its date, its price and a Reserve button all sit with identical gaps between them, so the button reads as another line of information rather than the action.

What is the cheapest tool that fixes it?

- Space: tighten the gaps between title, date and price, and open a clearly larger gap before the button.
- A shared background behind the title, date and price.
- A border around the whole class block.
- Make the button a different colour so it stands out.

<details>
<summary>After your attempt</summary>

Space: tighten the gaps between title, date and price, and open a clearly larger gap before the button. — Proximity does the whole job. The three facts become one group and the button separates itself as something different, with nothing added to the screen.

A shared background behind the title, date and price. — It would work and it adds a surface, a colour decision and padding for something space alone can solve.

A border around the whole class block. — The most expensive option: a new line on the screen, more vertical space on a phone, and the same fix space would have produced.

Make the button a different colour so it stands out. — Colour distinguishes it and leaves the grouping unchanged, so the button still reads as a member of the same list.

Fix your own mismatches in the same order, and only record a border where you can say what space failed to do.

</details>


### Group 1 · what you changed and which tool it needed

Section: practice-plan. Stable action: write-group-1-tool.

Write your answer for “Group 1 · what you changed and which tool it needed”. Use the task instructions below to decide what to include.

**Answer:** Group 1 · what you changed and which tool it needed




### Group 2 · what you changed and which tool it needed

Section: practice-plan. Stable action: write-group-2-tool.

Write your answer for “Group 2 · what you changed and which tool it needed”. Use the task instructions below to decide what to include.

**Answer:** Group 2 · what you changed and which tool it needed




### Group 3 · what you changed and which tool it needed

Section: practice-plan. Stable action: write-group-3-tool.

Write your answer for “Group 3 · what you changed and which tool it needed”. Use the task instructions below to decide what to include.

**Answer:** Group 3 · what you changed and which tool it needed




### Anywhere you reached for a border, and why space was not enough

Section: practice-plan. Stable action: write-borders-used.

Write your answer for “Anywhere you reached for a border, and why space was not enough”. Use the task instructions below to decide what to include.

**Answer:** Anywhere you reached for a border, and why space was not enough




### Build the counterexample

Section: practice-plan. Stable action: step-4-brief.

One case where following a principle gives the wrong reading.

- Construct one small case where following a grouping principle produces the wrong reading — for example similarity making an unrelated element look like a status, or a card hiding the one item the task needs. Show it and explain the failure.

**Start here:** Look for two things that look alike but are not related, or two related things forced apart by a container.

**Enough:** The counterexample is from your own screen, not a textbook.

**Counterexample:** A case where a principle holds and the reading it produces is still wrong. It is not a case where you followed the principle badly.

**Similarity:** Things that look alike are read as one set, even when they have nothing to do with each other. It is the principle that misleads most often.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Writing the counterexample for a class list, and finding that the first thing I wrote was not a counterexample at all.

**My first attempt:** I wrote that the border around the section makes the screen look boxy, and called that a case where common region misleads.

**Why it did not count:** That is a complaint about how it looks. A counterexample is where the principle holds perfectly and the reading it produces is still wrong.

**Where I looked instead:** At similarity, and at two things sharing a treatment without sharing a purpose. I found small capitalised labels: “Sold out” on one class and “Book now” on another, in the same size and weight.

**What the reader gets:** Similarity does exactly what it is meant to do and puts the two labels in one set. So “Sold out” reads as something to press, and the one class that cannot be booked looks the most available on the screen.

**What I wrote down:** The pair, the reading it produces, and the fact that following the principle more carefully would not avoid it. The repair is to stop treating the two labels alike.

**Wrong turn:** The wrong turn is writing down something you dislike about the screen and calling it a counterexample. It is easy to find and it fills the box, and it teaches you nothing, because your taste was never what misled the reader.

**Trade-off:** Breaking the similarity means “Sold out” and “Book now” no longer look like one family of labels. The screen is less tidy, and you now have two small-label treatments to keep track of instead of one.

**Unknown:** Still unknown: how many other pairs on the screen share a treatment without sharing a purpose. I found this one by looking, and there is no way to be sure it is the only one.


### One case where following a principle produces the wrong reading

Section: practice-plan. Stable action: write-counterexample.

For example, similarity making an unrelated element look like part of a set.

**Answer:** One case where following a principle produces the wrong reading

For example, similarity making an unrelated element look like part of a set.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your screen feels disorganised, so you put every item in a card. What happens?

- Common region stops distinguishing anything, and the hierarchy disappears because every item is presented as a peer.
- The screen becomes organised, because every item has a clear boundary.
- It works if the cards have consistent padding.

<details>
<summary>After your attempt</summary>

Common region stops distinguishing anything, and the hierarchy disappears because every item is presented as a peer. — Enclosure only groups when some things are enclosed and others are not. Cards everywhere also cost real vertical space on a phone.

The screen becomes organised, because every item has a clear boundary. — It becomes enclosed, which is not the same as organised. What matters most on the screen is now indistinguishable from what matters least.

It works if the cards have consistent padding. — Consistency makes it tidier and does nothing about the lost hierarchy or the borders you did not need.

Improve: Look at your regrouping in step 3. Replace one border or background with space and see whether the grouping survives, then record it in step 5.

Check again: Space does the work wherever it can, and each enclosure has a reason.

Answers to revisit: group-1-tool, group-2-tool, group-3-tool, borders-used

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Why circle the perceived groups before changing anything?

- Because the screen may already be grouping things differently from how you intended, and that mismatch is the actual problem.
- To document the before state for a portfolio.
- It is not necessary if you designed the screen yourself.

<details>
<summary>After your attempt</summary>

Because the screen may already be grouping things differently from how you intended, and that mismatch is the actual problem. — Without the diagnosis you are decorating. With it, most fixes turn out to be a few points of space in the right place.

To document the before state for a portfolio. — Useful later and not the reason. The reason is that you cannot fix a grouping you have not read.

It is not necessary if you designed the screen yourself. — Designing it is exactly why you cannot see it. You know what belongs together, so your eye supplies the grouping the reader will not get.

Improve: If your perceived-groups box in step 2 is empty or repeats your intention, redo it from the printed screen and record what changed in step 5.

Check again: The perceived groups differ from your intended groups somewhere; if they do not, say how you checked.

Answers to revisit: perceived-groups, mismatches

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You could not find a counterexample where a principle misleads. What does that suggest?

- Look harder at similarity: things that look alike but are unrelated are the most common trap.
- That your screen is well designed and the principles hold.
- That counterexamples only occur in complex interfaces.

<details>
<summary>After your attempt</summary>

Look harder at similarity: things that look alike but are unrelated are the most common trap. — Two elements sharing a size or a colour read as a set even when one is an advertisement and the other is content. It is easy to miss because you know which is which.

That your screen is well designed and the principles hold. — The principles are descriptions of perception, not rules that hold. A screen with no counterexample usually has one you have not spotted.

That counterexamples only occur in complex interfaces. — They occur in a list of three items. Any repeated visual treatment can capture something that does not belong.

Improve: Look for two elements that share a treatment but not a purpose, and write that up as your counterexample in step 4, then note it in step 5.

Check again: The counterexample names two specific elements on your screen and what the reader would wrongly conclude.

Answers to revisit: counterexample

</details>


### Record and pause

Section: practice. Stable action: step-5-brief.

A question to test your grouping with a person, where the versions live, and the repair the Check questions asked for.

- Save the before, the after, the tool-per-group note and the counterexample. Write the question you would ask another person to test your grouping.

**Start here:** Write a question that can be answered in one glance, without reading the screen closely.

**Enough:** The question could be answered wrongly; that is what makes it a test.

**At a glance:** The first second of looking, before reading. A test question has to be answerable in that second or it is testing something else.

**Before and after:** The two versions of the same screen: the one you diagnosed and the one you regrouped. Keeping both is what makes the change checkable later.

**Repair:** The small change a Check question asks you to make. You record what you actually altered, not whether you agreed.


### The question you would ask another person to test your grouping

Section: practice. Stable action: write-test-question.

Write your answer for “The question you would ask another person to test your grouping”. Use the task instructions below to decide what to include.

**Answer:** The question you would ask another person to test your grouping



<details>
<summary>Example</summary>

Example (made up): without reading closely, which price belongs to the Saturday class?

</details>


### Where the before and after live

Section: practice. Stable action: write-photo-reference.

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.

**Answer:** Where the before and after live

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson turns the spacing you just used by eye into a named scale.


<details>
<summary>Optional hints and reference material</summary>

- Move pieces closer before drawing boxes around them.
- Try grouping an unrelated item by proximity. This exposes why a visual principle is not proof of the correct information structure.

- R31: [Laws of UX](https://lawsofux.com/) — Assigned pages only: law-of-proximity, law-of-similarity, law-of-common-region, law-of-pragnanz and law-of-uniform-connectedness. Purpose: Gives each grouping principle a definition, origin and takeaways you can quote in a review. Free reading, no account. Verified 2026-09-06. The site states these as laws and publishes no caveats, so the limitation and the counterexample in this lesson are the course's, not the source's. A printed poster is sold and also offered as a free download; nothing is required. Fallback: R02.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Perceived grouping was diagnosed before it was changed**

Adequate evidence: A marked-up before image showing perceived groups and the specific mismatches with intended grouping.

0 — No diagnosis; the screen was simply redrawn.

1 — A before image exists but mismatches are not marked.

2 — Perceived groups are drawn and each mismatch is identified.

3 — As adequate, and the diagnosis distinguishes a mismatch that misleads from one that is merely untidy.

Repair: Return to the original screen, circle what a first-time reader would group, and list each place that differs from your intent as a numbered mismatch. Recheck: The marked-up before image and the numbered mismatch list.

**The cheapest sufficient tool was used per group**

Adequate evidence: A note per group recording whether space, a shared background or a border was used, and why the weaker tool was insufficient.

0 — Every group was enclosed in a card or border by default.

1 — Tools vary but no reasoning is recorded.

2 — Each group records its tool and why the weaker option failed.

3 — As adequate, and at least one group was fixed with space alone where a card had previously been used.

Repair: Remove every border from your after version and re-check which groups actually stop reading correctly. Restore only those, and record what each restoration bought. Recheck: The border-free version, the failures found and the restored set.

**A genuine counterexample is produced**

Adequate evidence: A concrete case, shown not merely described, where applying a principle produces a wrong or harmful reading.

0 — No counterexample.

1 — A counterexample is described in words only, or restates the principle's caveat generically.

2 — A specific case is shown with the wrong reading it produces explained.

3 — As adequate, and the counterexample is drawn from your own screen rather than invented, with the repair that keeps the principle useful.

Repair: Take one grouping in your own after version and push it until it misleads — style an unrelated item like a status, or enclose the primary action inside a secondary card. Capture the result and explain the misreading. Recheck: The shown counterexample and the explanation.

**Grouping is treated as a hypothesis about reading**

Adequate evidence: A written question or task another person could attempt that would confirm or challenge the grouping.

0 — The new grouping is asserted as correct.

1 — A vague intention to test is stated.

2 — A specific, answerable question or five-second task is written.

3 — As adequate, and the question is neutral — it does not name the element you hope they find.

Repair: Rewrite your test question so it names a goal, not an element: “where would you look to find what to bring?” rather than “can you see the materials box?”. Recheck: The rewritten neutral question.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson turns the spacing you just used by eye into a named scale.

**Review criteria:**

- Perceived grouping was diagnosed before it was changed
- The cheapest sufficient tool was used per group
- A genuine counterexample is produced
- Grouping is treated as a hypothesis about reading

<details>
<summary>Reading, video and deeper explanation</summary>



[Laws of UX](https://lawsofux.com/).

</details>

## Lesson 6: Spacing as a system

Stable ID: m03-l06-v1. Core.

Spacing is where a design either becomes maintainable or becomes a thousand small decisions nobody can reproduce, and it is the mechanism behind the grouping you just fixed by eye.

Bring: The regrouped screen from the previous lesson and your type scale.

Starting route: Bring a sketch and ruler. If missing, draw a fictional class page with gaps of 3, 5, 8, 11, 16 and 23 mm. Measure the real marks, then select a short spacing scale. Label the units; paper millimetres demonstrate grouping, not a CSS implementation.

- A named spacing scale with base unit and rule; a before and after gap audit; and a per-group table showing inside gap versus surrounding gap.

### Start with a clear task

Section: learn. Stable action: welcome.

Replace ad-hoc spacing with a named spacing scale, apply it to one screen, and show that the space around a group reliably exceeds the space within it.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

A spacing scale is a small set of allowed distances, usually built by doubling or by multiplying a base unit, so that gaps relate to one another instead of drifting. Four to seven values is typical. The benefit is not tidiness: it is that a distance becomes a decision with a name, so two screens built weeks apart agree, and an engineer implementing your design has a value to reach for rather than a number to guess.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Space is directional and rarely symmetric. The gap above a heading and the gap below it do different jobs: the space above separates it from the previous section, the space below binds it to the content it introduces. When those two are equal, the heading floats between the sections and belongs to neither — a very common and very fixable defect.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Density is a decision you make per context, not a global preference. A settings screen someone scans occasionally can afford generous space; a table of bookings a coordinator reads all day cannot, because scrolling costs them more than air gains them. Choose density for the reading situation and record why, rather than applying one comfortable rhythm everywhere.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Space interacts with the reader's text settings. If gaps are fixed distances while text scales, then at enlarged text the type grows into space that did not grow with it, and groups collide. Expressing at least the vertical rhythm in units that scale with text keeps the relationship you designed, which is the whole point of having a scale.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A booking list used gaps of 6, 8, 10, 12, 13, 16, 18, 20 and 24 px, with no rule. Replacing them with a scale of 4, 8, 16, 24, 40 forced the question of what each gap was for: 8 inside a row between label and value, 16 between rows, 40 between the list and the next section. The screen became one pixel shorter overall and immediately readable as a list of items rather than a wall of text — and the engineer implementing it had five values instead of nine.


### Get your practice ready

Section: learn. Stable action: workspace.

Bring a sketch and ruler. If missing, draw a fictional class page with gaps of 3, 5, 8, 11, 16 and 23 mm. Measure the real marks, then select a short spacing scale. Label the units; paper millimetres demonstrate grouping, not a CSS implementation.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Audit the real gaps

Section: practice-plan. Stable action: step-1-brief.

A counted number of distinct gaps and the list of values.

- Measure and list every distinct vertical gap in your screen. Write the actual count; a large number is the normal starting point, not a failure.

**Start here:** Measure every vertical gap on a printout and write down each distinct value.

**Enough:** The count came from measuring, and it is probably larger than you expected.

**Spacing scale:** A short list of allowed gaps, each with a use. Anything not on the list is not used.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Auditing the spacing on a class list that felt “roughly consistent”.

**What I expected:** Four or five gaps. The screen looked orderly and I had been reasonably careful.

**What the ruler found:** Twelve distinct values, including a 7 and an 8 four centimetres apart, and a 14 that existed because something had been nudged.

**Where they came from:** None of them were decisions. They were the residue of dragging things until the screen looked balanced on one particular day.

**What I nearly did:** Set every gap to 16 for consistency. The screen went flat immediately: nothing grouped, because everything was equally far from everything else.

**What consistency actually meant:** Six values with jobs: 4 and 8 inside groups, 16 and 24 between them, 32 around sections. Deliberately unequal, from a short list.

**Wrong turn:** The wrong turn is making every gap the same. It satisfies the word consistent and destroys the grouping the previous lesson built.

**Trade-off:** A scale means some gaps snap to a value that is slightly wrong for their spot. In exchange every gap becomes a decision you can defend.

**Unknown:** Still unknown: whether 4 and 8 are distinguishable enough on a phone to separate anything. Worth checking at narrow width.


### How many distinct vertical gaps are on the screen now?

Section: practice-plan. Stable action: write-gap-count.

Measure with a ruler and count. A large number is the normal starting point.

**Answer:** How many distinct vertical gaps are on the screen now?

Measure with a ruler and count. A large number is the normal starting point.


### The values you found

Section: practice-plan. Stable action: write-gap-list.

Write your answer for “The values you found”. Use the task instructions below to decide what to include.

**Answer:** The values you found



<details>
<summary>Example</summary>

Example (made up): 4, 6, 7, 8, 10, 12, 14, 16, 18, 20, 24, 32 — twelve values, most of them accidents.

</details>


### Define the scale

Section: practice-plan. Stable action: step-2-brief.

A base unit, a rule, and four to seven named values.

- Choose four to seven values and give each a name and a typical use. State your base unit and the rule that generates the rest.

**Start here:** Pick a base of 4 or 8 and write multiples until you have five or six useful sizes.

**Enough:** Each value has a name describing its use, not its size.

**Base unit:** The smallest step. Everything else is a multiple of it, which is what makes the values look related.


### Your base unit and the rule that generates the rest

Section: practice-plan. Stable action: write-base-unit.

Write your answer for “Your base unit and the rule that generates the rest”. Use the task instructions below to decide what to include.

**Answer:** Your base unit and the rule that generates the rest



<details>
<summary>Example</summary>

Example (made up): base 4; the scale is 4, 8, 12, 16, 24, 32 — multiples of 4, doubling after 16.

</details>


### Four to seven values, each with a name and a typical use

Section: practice-plan. Stable action: write-scale-values.

Name them by use: inside a group, between groups, around a section.

**Answer:** Four to seven values, each with a name and a typical use

Name them by use: inside a group, between groups, around a section.


### Apply and resolve conflicts

Section: practice-plan. Stable action: step-3-brief.

Every old gap mapped onto the scale, with conflicts resolved deliberately.

- Map every existing gap to the nearest scale value. Where two different purposes collapse to the same value, decide which one moves and record why.

**Start here:** Go through the audit list and write the scale value each one becomes.

**Enough:** Where two purposes wanted the same value, you recorded which one moved and why.

**Mapping:** Replacing each gap you measured with a value from your scale, one at a time.

**Conflict:** Two gaps with different jobs that land on the same value, so the reader can no longer tell the jobs apart.

**Exception:** A gap you keep off the scale on purpose, written down with its reason. Unwritten exceptions are how the accidents come back.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Mapping twelve measured gaps onto a six-value scale, and inventing a thirteenth value to settle a conflict.

**How the mapping went:** Ten of the twelve gaps snapped without argument. The 7 and the 8 both became 8. The stray 14 became 16 and nothing read worse for it.

**Where it stopped:** The gap under a section heading and the gap between two sections both landed on 24. The heading now sat exactly halfway between the section it named and the section above it.

**What I did first:** I invented 20 for the heading gap. It looked right within about four seconds, and I nearly moved on.

**Why I took it back:** 20 existed on the scale for one element and nothing else. That is precisely how twelve accidental gaps appeared before I started measuring.

**What I did instead:** Dropped the heading gap one step down to 16. The heading now clearly attaches to the section below it, and every gap on the screen is still a value I can name.

**Wrong turn:** The wrong turn is inventing a value between two steps of the scale because it looks right. It is one small exception, it settles the problem immediately, and it quietly ends the scale.

**Trade-off:** At 16 the heading sits close to its own first line, and with enlarged text it comes near to touching it. You have bought a clear grouping and taken on the job of checking that pairing at large text sizes.

**Unknown:** Still unknown: whether 16 and 24 read as different enough on a small screen for the heading to attach downward. Two values one step apart are the hardest pair to tell apart.


### Where two different purposes collapsed onto the same value, and which one you moved

Section: practice-plan. Stable action: write-conflicts.

Write your answer for “Where two different purposes collapsed onto the same value, and which one you moved”. Use the task instructions below to decide what to include.

**Answer:** Where two different purposes collapsed onto the same value, and which one you moved




### Prove the grouping rule

Section: practice-plan. Stable action: step-4-brief.

For each group, the inside gap and the surrounding gap, with the outside clearly larger.

- For each group on the screen, record the inside gap and the surrounding gap. Any group where the outside gap is not clearly larger is a defect; fix it and record the change.

**Start here:** Measure one group first: the gap between its own items, then the gap to whatever is next.

**Enough:** No group has an outside gap equal to or smaller than its inside gap.

**Inside gap:** The space between items that belong to the same group.

**Surrounding gap:** The space between that group and whatever sits next to it.

**Grouping rule:** The surrounding gap must be clearly larger than the inside gap. That difference is the whole of what makes a group visible.


### Try a supplied example

Section: practice-plan. Stable action: step-4-try.

A supplied measurement from the same made-up screen: inside the class block, title to date is 12 and date to price is 12; the gap between one class block and the next is also 12.

What does that produce, and what is the fix?

- An undifferentiated list where the price could belong to either class; open the between-block gap to a larger scale value.
- A clean, consistent rhythm; nothing needs fixing.
- A grouping problem best fixed with a divider line between classes.
- Tighten the inside gaps to 4 so the blocks are denser.

<details>
<summary>After your attempt</summary>

An undifferentiated list where the price could belong to either class; open the between-block gap to a larger scale value. — Equal gaps give the eye nothing to group with. Widening the outside gap is the whole repair, and it costs one scale value.

A clean, consistent rhythm; nothing needs fixing. — It is consistent and unreadable. Consistency means the same values used for the same purposes, deliberately unequal where the purposes differ.

A grouping problem best fixed with a divider line between classes. — A line would work and buys with a new element what one larger gap gives free.

Tighten the inside gaps to 4 so the blocks are denser. — This also works, by widening the ratio from the other side. Check it still reads comfortably at enlarged text before choosing it.

Measure your own groups and make sure the outside gap wins in every one.

</details>


### Group 1 · inside gap vs surrounding gap

Section: practice-plan. Stable action: write-proof-1.

Write your answer for “Group 1 · inside gap vs surrounding gap”. Use the task instructions below to decide what to include.

**Answer:** Group 1 · inside gap vs surrounding gap



<details>
<summary>Example</summary>

Example (made up): title/date/price inside 8, surrounded by 24.

</details>


### Group 2 · inside gap vs surrounding gap

Section: practice-plan. Stable action: write-proof-2.

Write your answer for “Group 2 · inside gap vs surrounding gap”. Use the task instructions below to decide what to include.

**Answer:** Group 2 · inside gap vs surrounding gap




### Group 3 · inside gap vs surrounding gap

Section: practice-plan. Stable action: write-proof-3.

Write your answer for “Group 3 · inside gap vs surrounding gap”. Use the task instructions below to decide what to include.

**Answer:** Group 3 · inside gap vs surrounding gap




### Any group where the outside gap was not clearly larger, and what you did

Section: practice-plan. Stable action: write-proof-fixes.

Write your answer for “Any group where the outside gap was not clearly larger, and what you did”. Use the task instructions below to decide what to include.

**Answer:** Any group where the outside gap was not clearly larger, and what you did




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Consistent spacing means the same gap everywhere. True?

- No. It means a short list of values used for the same purposes, deliberately unequal where purposes differ.
- Yes: one gap value is the simplest system to maintain.
- Yes for vertical gaps, no for horizontal ones.

<details>
<summary>After your attempt</summary>

No. It means a short list of values used for the same purposes, deliberately unequal where purposes differ. — Uniform gaps destroy grouping and produce exactly the flat screen the previous lesson repaired.

Yes: one gap value is the simplest system to maintain. — It is simple and it removes your only free grouping tool. Simplicity here costs readability.

Yes for vertical gaps, no for horizontal ones. — The principle is the same in both directions: gaps carry meaning about what belongs together.

Improve: Check your proof table in step 4. If any group has equal inside and outside gaps, change one and record it in step 5.

Check again: Every group shows a clearly larger surrounding gap.

Answers to revisit: proof-1, proof-2, proof-3, proof-fixes

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You mapped every gap to the scale, and one heading now sits slightly too close to its section. What do you do?

- Move it to the next scale value up and record why, rather than inventing a value between them.
- Add a new value to the scale for this case.
- Leave it: the scale matters more than one heading.

<details>
<summary>After your attempt</summary>

Move it to the next scale value up and record why, rather than inventing a value between them. — Using the next value keeps the scale intact. Inventing 14 because it feels right is how twelve accidental gaps appeared in the first place.

Add a new value to the scale for this case. — Sometimes correct, and only if the new value has a general use. Added for one element, it is not a scale any more.

Leave it: the scale matters more than one heading. — The scale exists to serve the reading. If a gap now groups the wrong things, fix it and say so.

Improve: Look at your conflicts box in step 3 and make sure each collapse names which element moved and why. Record the change in step 5.

Check again: Every gap on the screen is a value from the scale, and each exception is written down.

Answers to revisit: conflicts

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Why measure the existing gaps before defining the scale?

- Because the count shows how much of the current spacing was never decided, which is what the scale is for.
- To produce a before image for the portfolio.
- It is not needed if you already have a type scale.

<details>
<summary>After your attempt</summary>

Because the count shows how much of the current spacing was never decided, which is what the scale is for. — People routinely expect four or five values and find a dozen. The audit is what makes the problem visible and the after comparable.

To produce a before image for the portfolio. — A side benefit. The reason is that you cannot fix spacing you have not looked at.

It is not needed if you already have a type scale. — A type scale governs text sizes; the gaps between things are a separate set of accidents.

Improve: If your audit in step 1 is an estimate, measure the gaps with a ruler now and record the real count, then note the change in step 5.

Check again: The gap count is a measured number and the after state maps to the scale.

Answers to revisit: gap-count, gap-list

</details>


### Record and pause

Section: practice. Stable action: step-5-brief.

Where you chose density deliberately, where the audits live, and the repair the Check questions asked for.

- Save the scale, the before and after gap audit, and the grouping proof table. Note where you deliberately chose higher density and why.

**Start here:** Look for a list where tighter spacing helps scanning, and say why.

**Enough:** Any tight spacing is a decision with a reason, not a leftover.

**Audit:** The measured list of every gap you had before the scale existed. It is what makes the after state comparable to the before.

**Density:** How tightly the content is packed. Tight can be the right choice where somebody is scanning a long list rather than reading it.

**Repair:** The change a Check question asks you to make, recorded as what you actually altered.


### Anywhere you deliberately chose tighter spacing, and why

Section: practice. Stable action: write-density-choice.

A dense list can be right. Say what made it right here.

**Answer:** Anywhere you deliberately chose tighter spacing, and why

A dense list can be right. Say what made it right here.


### Where the before and after audits live

Section: practice. Stable action: write-photo-reference.

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.

**Answer:** Where the before and after audits live

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson arranges this screen in columns and finds where it has to change.


<details>
<summary>Optional hints and reference material</summary>

- Measure gaps between content edges consistently; do not switch between baselines and bounding boxes.
- An exception is acceptable when you can explain the relationship it serves.

- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — The spacing and layout style pages only, read for how a fixed set of values is defined and applied. Purpose: A worked public example of a spacing system with stated uses rather than arbitrary distances. Free reading, no account. Verified 2026-09-06. Take the structure, not the government branding; the visual identity is not a universal aesthetic. Fallback: R03.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**A generated scale with named values and uses**

Adequate evidence: A stated base unit, the rule generating the values, and a typical use for each of four to seven values.

0 — No scale; gaps remain ad hoc.

1 — A list of values with no rule or no uses.

2 — Base unit, rule, values and uses are all stated.

3 — As adequate, and a value is deliberately omitted with the reason it is not needed at this density.

Repair: Write the base unit and the multiplication or doubling rule that produces your values, then give each value one sentence describing where it is used. Recheck: The completed scale definition.

**Every gap in the screen maps to the scale**

Adequate evidence: A before-and-after audit showing the original distinct gap count and the final count, with no off-scale value remaining.

0 — No audit was done.

1 — An audit exists but off-scale values remain unexplained.

2 — All gaps map to the scale, or an exception is named and justified.

3 — As adequate, and the write-up identifies which merges changed the reading and which were invisible.

Repair: Re-measure the after version and list any gap that is not a scale value. Move each to the nearest value and note whether the group reading changed. Recheck: The after audit with every value on the scale.

**Group separation is proven, not assumed**

Adequate evidence: A table with one row per group giving the inside gap, the surrounding gap and the resulting ratio or difference.

0 — No separation data.

1 — Some groups measured; failures unaddressed.

2 — Every group is measured and any failure is repaired.

3 — As adequate, and the tightest acceptable separation is identified and justified for the densest context.

Repair: For each group where the outside gap is not clearly larger, increase it by one scale step and re-measure. Record any group where you could not, and why. Recheck: The completed per-group table with no unexplained failures.

**Density choices are contextual and recorded**

Adequate evidence: At least one place where density was deliberately tightened or loosened, with the reading situation that justifies it.

0 — One density applied everywhere with no reasoning.

1 — Density varies but the reason is preference.

2 — A density choice is tied to a stated reading situation.

3 — As adequate, and the cost of that choice is named — what the tighter or looser setting gives up.

Repair: Pick the densest region of your screen and write who reads it, how often and for how long. Then state whether your current density serves that and what you gave up. Recheck: The written density rationale with its stated cost.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson arranges this screen in columns and finds where it has to change.

**Review criteria:**

- A generated scale with named values and uses
- Every gap in the screen maps to the scale
- Group separation is proven, not assumed
- Density choices are contextual and recorded

<details>
<summary>Reading, video and deeper explanation</summary>



[GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/).

</details>

## Lesson 7: Grid and layout structure that reflows

Stable ID: m03-l07-v1. Core.

A grid in print positions elements on a fixed page. On screen the page has no fixed size, so the grid's real job is to describe how the arrangement is allowed to change — and that is a different skill.

Bring: Your spacing scale and the regrouped screen. You will keep the content identical and change only its arrangement.

Starting route: Draw the same class details in three paper rectangles: narrow, medium and wide. Include a long title, price, materials and Reserve. Without an earlier layout, start with two columns and narrow it until content no longer fits. Record that failure as the reason to stack; no HTML is required.

- A stated column, gutter and margin structure; the same content at narrow, medium and wide widths; a change-point table giving each width and the content reason; and the narrow reading order.

### Start with a clear task

Section: learn. Stable action: welcome.

Define a column and gutter structure for one screen, state where the layout changes and why, and show the same content at narrow, medium and wide widths.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

A layout structure on screen is a set of columns, the gutters between them and the margins outside them, plus rules for what happens when there is more or less room. The columns are a convenience for alignment; the rules for change are the actual design. A twelve-column grid that only ever renders one way has told you nothing about behaviour.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Decide where the layout changes by watching the content, not by listing device names. Phones, tablets and laptops span a continuous range of widths and any list of device sizes is out of date on arrival. Widen the layout gradually until something reads badly — the measure grows too long, a two-column pairing becomes absurdly stretched, a control drifts far from what it controls — and put the change there. Then record what you saw, so the number has a reason attached.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Reflow is a re-ordering problem as much as a resizing one. When two columns become one, something must come first, and the correct order is usually the order of the reader's task rather than the visual order of the wide layout. A sidebar of filters that sits beside a list on a wide screen may need to sit above it, or behind a control, on a narrow one — and burying the primary action below a long secondary block is the most common reflow defect.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Alignment does most of the work a grid gets credit for. A consistent left edge shared by heading, body and controls gives a screen structure even with no visible columns, and a single element breaking that edge reads as an error before the reader knows why. When you check a layout, check the edges first; misalignment is more often the cause of a screen feeling wrong than the column count is.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A workshop list was designed at 1280 px as a three-column card grid with filters in a left sidebar. Narrowing it gradually, the cards became unreadably squeezed at around 900 px, so the grid dropped to two columns there; below about 620 px the filters could no longer sit beside the list, so they moved above it as a single collapsed control, and the card grid became one column. Neither number came from a device — both came from the point at which the content stopped reading.


### Get your practice ready

Section: learn. Stable action: workspace.

Draw the same class details in three paper rectangles: narrow, medium and wide. Include a long title, price, materials and Reserve. Without an earlier layout, start with two columns and narrow it until content no longer fits. Record that failure as the reason to stack; no HTML is required.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Define the structure

Section: practice-plan. Stable action: step-1-brief.

Columns, gutters and margins stated as values.

- State your columns, gutters and margins at the widest layout, using values from your spacing scale where they apply. Draw the structure over your screen.

**Start here:** Draw the structure over your widest sketch in pencil before deciding anything.

**Enough:** The values come from your spacing scale wherever they can.

**Gutter:** The gap between columns. It is what stops two columns of text reading as one.

**Margin:** The space from the content to the edge of the screen.


### Columns, gutters and margins, in values

Section: practice-plan. Stable action: write-columns.

Use your spacing scale where it applies.

**Answer:** Columns, gutters and margins, in values

Use your spacing scale where it applies.

<details>
<summary>Example</summary>

Example (made up): 12 columns, 24 gutters, 32 margins.

</details>


### Find the change points by narrowing

Section: practice-plan. Stable action: step-2-brief.

Three change points found by narrowing, each with the content failure that caused it.

- Narrow the layout gradually. Each time the content stops reading well, record the approximate width and exactly what failed. Do not start from a list of devices.

**Start here:** Take the widest sketch and cover it progressively from the right, watching what breaks first.

**Enough:** Every change point names the content that failed, not a device.

**Change point:** A width at which the arrangement has to change because the content stopped working. It is named for what failed, never for a device.

**Narrowing:** Covering the layout gradually from one side to find where it breaks, instead of jumping between widths you chose in advance.

**Content failure:** The specific thing that stopped reading well: a collision, a line that will not fit, a column too narrow for the longest name.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Finding where a class list has to change, without starting from device sizes.

**What I planned to do:** Design for mobile, tablet and desktop: 390, 768 and 1280. Three neat sketches.

**Why I stopped:** Those are three samples from a continuous range. Everything between them is untested, and readers sit everywhere in that range.

**What I did instead:** Started wide and narrowed slowly, watching for the first thing that stopped reading well.

**The first real failure:** At about 700 the longest class title collided with the price beside it. Nothing to do with a tablet; it was the length of that particular string.

**What that gave me:** A change point with a reason: the two-column row becomes one column when the title can no longer hold its line. The number came from the content.

**Wrong turn:** The wrong turn is starting from device widths. It produces three tidy layouts and guarantees that the widths between them were never looked at.

**Trade-off:** Narrowing gradually is slower and gives untidy numbers like 700. Those numbers are the ones tied to your actual content.

**Unknown:** Still unknown: how this behaves with a much longer title in another language. Worth testing before treating the change point as settled.


### Change point 1 · roughly what width, and exactly what failed

Section: practice-plan. Stable action: write-change-1.

Write your answer for “Change point 1 · roughly what width, and exactly what failed”. Use the task instructions below to decide what to include.

**Answer:** Change point 1 · roughly what width, and exactly what failed



<details>
<summary>Example</summary>

Example (made up): about 700 px — the class title and the price collided because the title column had become too narrow for the longest name.

</details>


### Change point 2 · roughly what width, and exactly what failed

Section: practice-plan. Stable action: write-change-2.

Write your answer for “Change point 2 · roughly what width, and exactly what failed”. Use the task instructions below to decide what to include.

**Answer:** Change point 2 · roughly what width, and exactly what failed




### Change point 3 · roughly what width, and exactly what failed

Section: practice-plan. Stable action: write-change-3.

Write your answer for “Change point 3 · roughly what width, and exactly what failed”. Use the task instructions below to decide what to include.

**Answer:** Change point 3 · roughly what width, and exactly what failed




### Design the reflow

Section: practice-plan. Stable action: step-3-brief.

The arrangement after each change, the narrow reading order, and where the main action sits.

- For each change point, decide the new arrangement and the resulting order. Write the reading order at the narrow width and confirm the primary action is not buried.

**Start here:** Write the narrow order as a numbered list before drawing it.

**Enough:** The main action comes after the information needed to take it.

**Reading order:** The sequence of the content as it will actually be read, including by a keyboard and a screen reader.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied narrow layout from the same made-up screen, ordered top to bottom: photograph, class title, instructor biography, date and time, price, what to bring, Reserve button, related classes.

What is the most important change to the order?

- Move the instructor biography below Reserve, so date, price and materials reach the reader before the decision.
- Move the photograph to the bottom, since it carries no information.
- Move Reserve to the top so it is always reachable.
- Nothing: on a phone people scroll, so order matters less.

<details>
<summary>After your attempt</summary>

Move the instructor biography below Reserve, so date, price and materials reach the reader before the decision. — The order is what a person reads and what a screen reader announces. Everything needed to decide should arrive before the control that acts on the decision.

Move the photograph to the bottom, since it carries no information. — Worth considering and it is not the costly problem. The photograph is one scroll; the biography sits between the reader and the facts they need.

Move Reserve to the top so it is always reachable. — It puts the action before the information the action depends on, which invites a decision made without the price.

Nothing: on a phone people scroll, so order matters less. — Order matters more on a phone, because only a little is visible at once and the sequence is the whole experience.

Number your own narrow order and check that everything needed to decide arrives before the action.

</details>


### For each change point: the new arrangement

Section: practice-plan. Stable action: write-reflow-plan.

Write your answer for “For each change point: the new arrangement”. Use the task instructions below to decide what to include.

**Answer:** For each change point: the new arrangement




### The reading order at the narrowest width, top to bottom

Section: practice-plan. Stable action: write-narrow-order.

Number it. This is the order a screen reader and a keyboard will follow too.

**Answer:** The reading order at the narrowest width, top to bottom

Number it. This is the order a screen reader and a keyboard will follow too.


### Where the main action sits at the narrow width, and whether it is reachable without hunting

Section: practice-plan. Stable action: write-primary-action.

Write your answer for “Where the main action sits at the narrow width, and whether it is reachable without hunting”. Use the task instructions below to decide what to include.

**Answer:** Where the main action sits at the narrow width, and whether it is reachable without hunting




### Check the edges

Section: practice-plan. Stable action: step-4-brief.

Which shared left edges hold at every width, and any break you kept deliberately.

- At all three widths, check that shared left edges align. Mark every element that breaks alignment and either fix it or record why the break is deliberate.

**Start here:** Lay a ruler down the left edge of each rendering and mark anything that does not meet it.

**Enough:** Every break is either fixed or recorded with a reason.

**Alignment:** Items sharing an edge, so the eye runs down one line instead of hunting for where each item starts.

**Shared left edge:** The invisible vertical line several items begin from. It is the one people notice when it breaks.

**Deliberate break:** An item that does not meet the shared edge because the difference carries meaning. Written down, so it is not read later as a slip.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Checking the left edges of a class list, and finding that the check itself had only been done at one width.

**What I checked:** I laid a ruler down the widest rendering. Every title, date and price met the same line, so I ticked the step off.

**What I had not checked:** The narrow rendering. At narrow I had centred the whole class block, because on its own it looked balanced that way.

**What centring cost:** The shared left edge that made four items read as one column was gone. Every line started somewhere different, so the eye had nothing to run down.

**The break I had flattened:** While tidying I had also pulled the “what to bring” list out to the main edge. That indent was the only thing saying the list belongs to the heading above it, so I put it back.

**What the step became:** Three rulers instead of one, and two lines of writing: which edges hold at every width, and the single break that is there on purpose.

**Wrong turn:** The wrong turn is checking alignment only on the layout you spent the most time on. It is the one you can already see in your head, so it is the one your ruler agrees with.

**Trade-off:** Keeping the deliberate indent means the left edge is no longer one unbroken line, and anyone reviewing the screen will ask about it. You have to be able to say in a sentence what the indent means.

**Unknown:** Still unknown: whether a reader uses that indent at all, or takes the list as belonging to its heading from the words alone. Nothing in this step settles it, so the indent stays until somebody is asked.


### At all three widths: which shared left edges hold, and which break

Section: practice-plan. Stable action: write-alignment.

Write your answer for “At all three widths: which shared left edges hold, and which break”. Use the task instructions below to decide what to include.

**Answer:** At all three widths: which shared left edges hold, and which break




### Any break you kept on purpose, and why

Section: practice-plan. Stable action: write-deliberate-breaks.

Write your answer for “Any break you kept on purpose, and why”. Use the task instructions below to decide what to include.

**Answer:** Any break you kept on purpose, and why




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You designed for 390, 768 and 1280. What has not been tested?

- Everything between them, which is where most readers actually are.
- Nothing important: those three cover phone, tablet and desktop.
- Only very large screens above 1280.

<details>
<summary>After your attempt</summary>

Everything between them, which is where most readers actually are. — Widths are continuous. Three samples guarantee the ranges between are unexamined, and that is where a title collides or a column collapses.

Nothing important: those three cover phone, tablet and desktop. — Those labels describe devices, not the widths a browser window can take. A resized desktop window sits nowhere near any of them.

Only very large screens above 1280. — Those matter too, and the bigger gap is the untested range between your three chosen numbers.

Improve: Check your change points in step 2. If any width came from a device list rather than a content failure, narrow the layout until you find the real one, and record it in step 5.

Check again: Every change point names what failed in the content at roughly that width.

Answers to revisit: change-1, change-2, change-3

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

At the narrow width the Reserve button appears above the price. Why does that matter?

- The reader meets the action before the information the action depends on, and the same order governs keyboard and screen-reader use.
- It does not matter, because the price is only a scroll away.
- It matters only for aesthetics.

<details>
<summary>After your attempt</summary>

The reader meets the action before the information the action depends on, and the same order governs keyboard and screen-reader use. — Order on a narrow screen is the whole experience, and it is also the sequence assistive technology follows.

It does not matter, because the price is only a scroll away. — A scroll away is out of sight at the moment of deciding, and some readers will act without it.

It matters only for aesthetics. — It is a sequence problem, not a visual one; it changes what the reader knows when they act.

Improve: Renumber the narrow reading order in step 3 so everything needed to decide precedes the action, then record the change in step 5.

Check again: The numbered narrow order puts price, date and materials before Reserve.

Answers to revisit: narrow-order, primary-action

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your change points came from watching the content fail. Why is that better than round numbers?

- Because they are tied to the strings and structure you actually have, so they hold when the layout is reused.
- Because untidy numbers look more rigorous.
- It is not better; standard values are easier to maintain.

<details>
<summary>After your attempt</summary>

Because they are tied to the strings and structure you actually have, so they hold when the layout is reused. — A change point at 700 because the longest title collides is a fact about your content. A change point at 768 is a fact about a device that may not exist for your reader.

Because untidy numbers look more rigorous. — Appearance is irrelevant. The value is that the number has a reason you can restate.

It is not better; standard values are easier to maintain. — Easier to type and unrelated to whether your content reads. A standard number that fits nothing is maintenance without benefit.

Improve: Add the content reason to any change point in step 2 that does not have one, then record it in step 5.

Check again: Each change point pairs a width with the specific failure that produced it.

Answers to revisit: change-1, change-2, change-3

</details>


### Record and pause

Section: practice. Stable action: step-5-brief.

The arrangement you are least sure about, where the renderings live, and the repair the Check questions asked for.

- Save the three renderings, the change-point table with reasons, and the narrow reading order. Note any arrangement you are unsure about.

**Start here:** Choose the change point you guessed at rather than derived.

**Enough:** The uncertainty names a specific width and arrangement.

**Rendering:** One drawing of the screen at one width. The three of them together are the evidence this lesson produces.

**Repair:** The change a Check question asks you to make, recorded as what you actually altered.


### The arrangement you are least sure about

Section: practice. Stable action: write-uncertain-arrangement.

Write your answer for “The arrangement you are least sure about”. Use the task instructions below to decide what to include.

**Answer:** The arrangement you are least sure about




### Where the three renderings live

Section: practice. Stable action: write-photo-reference.

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.

**Answer:** Where the three renderings live

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson turns every decision from this module into a named token sheet.


<details>
<summary>Optional hints and reference material</summary>

- Use the spacing scale, but let content failure explain the change point.
- Paper frames model layout intent; mark real browser behavior as untested unless you actually resize a working page.

- R16: [web.dev: learn responsive design](https://web.dev/learn/design/) — The layout chapters, read for how a layout is described by its behaviour rather than by fixed sizes. Purpose: Supplies the reasoning for change points derived from content rather than devices. Free reading, no account. Verified 2026-09-06. Read the selected chapters, not the whole site. Fallback: R15.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Structure is stated in values, not sketched vaguely**

Adequate evidence: Explicit column count, gutter and margin values at the widest layout, related to the spacing scale where applicable.

0 — No structure stated.

1 — A drawing exists but values are not recorded.

2 — Columns, gutters and margins are stated as values.

3 — As adequate, and the values reuse the spacing scale, with any deliberate exception explained.

Repair: Write the three values for your widest layout and check each against your spacing scale. Record any value that is off-scale and why it must be. Recheck: The stated structure with its relationship to the scale.

**Change points come from content failures**

Adequate evidence: A table of change points where each row gives an approximate width and the specific content behaviour that failed there.

0 — Change points are device names or absent.

1 — Widths are stated but reasons are generic.

2 — Each change point names the specific failure that caused it.

3 — As adequate, and one change point was moved after observing the failure, with the before and after widths recorded.

Repair: Narrow your layout again in small steps and write the first thing that breaks at each point as an observable sentence. Replace any device-derived number with the width you actually observed. Recheck: The change-point table with observed failures per row.

**Reflow order follows the task**

Adequate evidence: A written reading order for the narrow layout, with the primary action's position stated.

0 — No order recorded.

1 — An order is recorded but the primary action is buried without comment.

2 — The order follows the task and the primary action is reachable without a long scroll.

3 — As adequate, and the reason a wide-layout position was deliberately not preserved is explained.

Repair: List the narrow layout's elements top to bottom and mark the primary action's index. If it is far down, move it or add a persistent path to it and record the change. Recheck: The narrow reading order with the primary action's position.

**Alignment is checked at every width**

Adequate evidence: Marked-up renderings at all three widths showing the shared edges, with breaks either fixed or justified.

0 — No alignment check.

1 — Checked at one width only.

2 — Checked at all three, with breaks fixed or justified.

3 — As adequate, and a deliberate alignment break is used to draw attention, with the reason.

Repair: Draw a vertical line down the intended left edge on each rendering and mark every element that does not meet it. Fix or justify each mark. Recheck: The three marked-up renderings.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson turns every decision from this module into a named token sheet.

**Review criteria:**

- Structure is stated in values, not sketched vaguely
- Change points come from content failures
- Reflow order follows the task
- Alignment is checked at every width

<details>
<summary>Reading, video and deeper explanation</summary>



[web.dev: learn responsive design](https://web.dev/learn/design/).

</details>

## Lesson 8: A token sheet somebody else could build from

Stable ID: m03-l08-v1. Core.

Everything you have decided so far lives in your head and in one screen. A token sheet is the form those decisions have to take before anyone else — an engineer, a future collaborator, or you in three months — can apply them without guessing.

Bring: Your type scale, palette, contrast table, spacing scale and layout structure.

Starting route: Gather your type, colour and spacing choices. If missing, use the supplied fictional class content and define eight role-based tokens of your own on paper. Include a permitted text/background pair and measure it with the contrast lesson. Rebuild from your sheet with the original covered; record every missing decision.

- A token sheet of role-named type, colour and spacing tokens with values, usage notes and prohibitions; a permitted-pairing contrast check; and the list of gaps found by the build-it test.

### Start with a clear task

Section: learn. Stable action: welcome.

Write a single token sheet naming every type, colour and spacing decision from this module, and have it reviewed by finding at least one decision it fails to specify.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

A token is a named decision. Not “#1B1B1B” but “colour-text-primary, #1B1B1B, used for body copy and headings on light surfaces”. The name carries the intent, which is what makes the value changeable later: when you darken your body text, everything that means body text follows, and nothing that merely happened to share the hex value comes with it.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Name tokens by role, not by appearance. “colour-brand-blue” fails the moment the brand colour becomes green, and “spacing-16” fails the moment you decide inside-group gaps should be 12. Role names — text-primary, surface-raised, space-inset-tight — survive the change of value and tell a reader what the token is for, which is the only reliable way someone else picks the right one.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

A sheet that lists values without rules is only half a handoff. The genuinely useful part is the usage note: which token to reach for in which situation, what pairs are permitted, and what is forbidden. “Never place text-secondary on surface-raised; it fails contrast” prevents a whole class of defect that a table of hex values cannot.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Tokens are also where your accessibility work becomes durable. If your contrast table lives in a document nobody opens, the first person to adjust a colour will break it silently. If the permitted pairings are stated on the sheet beside the values, the constraint travels with the decision — and you can re-run the check by inspecting the sheet rather than the whole screen.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A first sheet listed twenty-two colours by hex with no names. Rewritten as nine role-named tokens with usage notes, it exposed three problems immediately: two hexes were doing the same job and could merge, one grey had no role at all and was deleted, and the pairing note revealed that the secondary text colour had never been checked against the raised surface — where it measured 3.1:1 and failed. The sheet found a defect the screen review had missed.


### Get your practice ready

Section: learn. Stable action: workspace.

Gather your type, colour and spacing choices. If missing, use the supplied fictional class content and define eight role-based tokens of your own on paper. Include a permitted text/background pair and measure it with the contrast lesson. Rebuild from your sheet with the original covered; record every missing decision.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Convert decisions to named tokens

Section: practice-plan. Stable action: step-1-brief.

Every type, colour and spacing decision written as a named token with a value and a role.

- Write every type, colour and spacing decision as a name, a value and a one-line role. Use role-based names throughout.

**Start here:** Start with the type scale from lesson 1; those five steps are already tokens waiting for names.

**Enough:** No token name mentions a colour, a size or a direction.

**Token:** A named decision: a name, a value and a role. The name is what other work refers to.

**Role name:** A name describing the job, such as text-secondary, rather than the appearance, such as light-grey.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Naming the first few tokens, and renaming them once.

**My first names:** dark-green, light-grey, big-heading, small-gap. They described what I could see, which felt honest.

**Where that failed:** When I darkened the secondary text for contrast, the token called light-grey was no longer light or grey, and every note referring to it became misleading.

**What I renamed them to:** action-surface, text-secondary, type-title, space-inside. Each says what it is for, so the value can change without the name lying.

**The one I nearly left out:** space-inside and space-between looked like the same idea. They are the grouping rule from the spacing lesson, and separating them is what makes it enforceable.

**What the sheet became:** Fourteen names, each with a value and one sentence of role. Shorter than I expected, because most of the screen reuses a few decisions.

**Wrong turn:** The wrong turn is naming tokens after their appearance. The name outlives the value, and an appearance name becomes a lie the first time you adjust anything.

**Trade-off:** Role names are less immediately readable: you have to learn that action-surface is the green. That cost is paid once and saves every later revision.

**Unknown:** Still unknown: whether these names make sense to anyone else. The build-it test is what finds out.


### Token 1 · name, value, role

Section: practice-plan. Stable action: write-token-1.

Name by role, not by appearance: text-primary, not dark-grey.

**Answer:** Token 1 · name, value, role

Name by role, not by appearance: text-primary, not dark-grey.

<details>
<summary>Example</summary>

Example (made up): action-surface · #214e46 · the background of the primary button, one per screen.

</details>


### Token 2 · name, value, role

Section: practice-plan. Stable action: write-token-2.

Write your answer for “Token 2 · name, value, role”. Use the task instructions below to decide what to include.

**Answer:** Token 2 · name, value, role




### Token 3 · name, value, role

Section: practice-plan. Stable action: write-token-3.

Write your answer for “Token 3 · name, value, role”. Use the task instructions below to decide what to include.

**Answer:** Token 3 · name, value, role




### Token 4 · name, value, role

Section: practice-plan. Stable action: write-token-4.

Write your answer for “Token 4 · name, value, role”. Use the task instructions below to decide what to include.

**Answer:** Token 4 · name, value, role




### Token 5 · name, value, role

Section: practice-plan. Stable action: write-token-5.

Write your answer for “Token 5 · name, value, role”. Use the task instructions below to decide what to include.

**Answer:** Token 5 · name, value, role




### Token 6 · name, value, role

Section: practice-plan. Stable action: write-token-6.

Write your answer for “Token 6 · name, value, role”. Use the task instructions below to decide what to include.

**Answer:** Token 6 · name, value, role




### Token 7 · name, value, role

Section: practice-plan. Stable action: write-token-7.

Write your answer for “Token 7 · name, value, role”. Use the task instructions below to decide what to include.

**Answer:** Token 7 · name, value, role




### Token 8 · name, value, role

Section: practice-plan. Stable action: write-token-8.

Write your answer for “Token 8 · name, value, role”. Use the task instructions below to decide what to include.

**Answer:** Token 8 · name, value, role




### Add usage and prohibitions

Section: practice-plan. Stable action: step-2-brief.

Usage notes, prohibitions and the permitted text-on-surface pairings.

- For each token, note where it is used and, where relevant, one thing it must not be used for. Include permitted text-on-surface pairings.

**Start here:** For each colour token, ask what someone might reasonably use it for that would be wrong.

**Enough:** At least two tokens carry a prohibition with a reason.

**Prohibition:** Where a token must not be used. It prevents the most common misuse better than any amount of description.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Writing prohibitions for a token sheet, and finding that none of the first five forbade anything.

**What I wrote first:** Five lines in the shape of “text-secondary is for supporting text”. Every one of them true, and not one of them a prohibition.

**The test I applied:** For each token: what would somebody reasonably do with this that I would not want? If I could not name it, the line was a description wearing a rule’s clothes.

**The one that mattered:** action-surface is the green behind the primary button. The reasonable misuse is a green “confirmed” chip on a booking, which would then look like something to press.

**The one I threw away:** “Never use type-title for body text.” Nobody was ever going to. A prohibition against something no one is tempted by only makes the sheet longer to read.

**Where pairings came in:** Listing which text token may sit on which surface token is the same exercise from the other side: every pair not on the list is forbidden by not being there.

**Wrong turn:** The wrong turn is writing prohibitions that restate the usage note in the negative. They read like rules and forbid nothing, because they only rule out what nobody would have done.

**Trade-off:** A short prohibition list leaves the sheet silent about most misuses, and the first time somebody does something you did not predict it gives them no help at all. Three real ones are worth more than twenty imagined, and they do leave that hole.

**Unknown:** Still unknown: which misuse you have not thought of. The build-it test finds decisions the sheet fails to specify; it does not find wrong uses of the things it does specify.


### The prohibitions worth writing down

Section: practice-plan. Stable action: write-prohibitions.

Write your answer for “The prohibitions worth writing down”. Use the task instructions below to decide what to include.

**Answer:** The prohibitions worth writing down



<details>
<summary>Example</summary>

Example (made up): action-surface is never used for a status label, because a green “confirmed” chip would then look like a button.

</details>


### The permitted text-on-surface pairings

Section: practice-plan. Stable action: write-pairings.

Which text token may sit on which surface token.

**Answer:** The permitted text-on-surface pairings

Which text token may sit on which surface token.


### Re-check pairings against contrast

Section: practice-plan. Stable action: step-3-brief.

Every permitted pairing measured against your contrast table, with failures turned into prohibitions.

- Take every permitted text-on-surface pairing and confirm it against your contrast table. Add any missing pair, measure it, and record failures as prohibitions.

**Start here:** List the pairings first, then check each against the table from lesson 4.

**Enough:** Every permitted pairing has a measured ratio beside it.

**Pairing:** A text colour together with the surface colour behind it. Contrast belongs to the pair, never to one colour on its own.

**Contrast ratio:** A number comparing the lightness of text against its background. A free contrast checker gives it to you; there is nothing to work out by hand.

**Contrast table:** The record from lesson 4 listing each pair you measured and the ratio it came back with.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied sheet from the same made-up project. It permits text-secondary on surface-raised, but the contrast table from lesson 4 has no row for that pair: it measured text-secondary on surface-base only.

What should happen to that pairing?

- Measure it now; until it is measured it is not permitted.
- Allow it, since text-secondary passed on the base surface.
- Prohibit it, because it was not measured.
- Allow it with a note that it is unverified.

<details>
<summary>After your attempt</summary>

Measure it now; until it is measured it is not permitted. — An unmeasured pairing is an assumption that the raised surface is close enough to the base. That is exactly the sort of drift a sheet exists to prevent.

Allow it, since text-secondary passed on the base surface. — A raised surface is a different colour. Passing on one background says nothing about another.

Prohibit it, because it was not measured. — Prohibiting without measuring throws away a pairing that may be perfectly good. Measure first, then decide.

Allow it with a note that it is unverified. — A permitted-with-doubt pairing will be used as permitted. The note will not travel with it.

Go through your own permitted list and measure anything your contrast table does not already cover.

</details>


### Each permitted pairing against your contrast table: measured ratio and result

Section: practice-plan. Stable action: write-pairing-check.

Any pairing you have not measured is not yet permitted.

**Answer:** Each permitted pairing against your contrast table: measured ratio and result

Any pairing you have not measured is not yet permitted.


### Pairings that failed and are now prohibited

Section: practice-plan. Stable action: write-new-prohibitions.

Write your answer for “Pairings that failed and are now prohibited”. Use the task instructions below to decide what to include.

**Answer:** Pairings that failed and are now prohibited




### The build-it test

Section: practice-plan. Stable action: step-4-brief.

A rebuild from the sheet alone, and every gap it exposed.

- Hand the sheet to another person, or set it aside and return to it, then rebuild one small component using only the sheet. Record every decision you had to invent because the sheet did not specify it.

**Start here:** Set the screen aside, take only the sheet, and rebuild one button from it.

**Enough:** The gap list is not empty; a first sheet always has gaps.

**Build-it test:** Rebuilding something using only the sheet. Every decision you have to invent is a gap in the specification.


### Every decision you had to make that the sheet did not specify

Section: practice-plan. Stable action: write-build-gaps.

Write your answer for “Every decision you had to make that the sheet did not specify”. Use the task instructions below to decide what to include.

**Answer:** Every decision you had to make that the sheet did not specify



<details>
<summary>Example</summary>

Example (made up): the sheet said nothing about the gap between a button’s label and its edge, so I invented 12.

</details>


### What you added to the sheet as a result

Section: practice-plan. Stable action: write-build-fixes.

Write your answer for “What you added to the sheet as a result”. Use the task instructions below to decide what to include.

**Answer:** What you added to the sheet as a result




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Are tokens worth the effort for one person working alone?

- Yes: the value appears the first time you build a second screen, because otherwise every value is re-derived by eye and drifts.
- No: tokens are overhead until a team needs to share decisions.
- Only if you are writing code.

<details>
<summary>After your attempt</summary>

Yes: the value appears the first time you build a second screen, because otherwise every value is re-derived by eye and drifts. — Drift is invisible until two screens are placed side by side, and by then both are built. Named decisions are what keep them together.

No: tokens are overhead until a team needs to share decisions. — The second screen is the team. Without names, you are the person who has to remember fourteen values exactly.

Only if you are writing code. — A sheet of paper with names, values and roles is a complete token sheet. The form is irrelevant; the naming is the point.

Improve: If any decision from lessons 1 to 7 is missing from step 1, add it as a named token now, and record the change in step 5.

Check again: Every type, colour and spacing decision from this module appears on the sheet.

Answers to revisit: token-1, token-2, token-3, token-4, token-5, token-6, token-7, token-8

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You named a token “light-grey”. What goes wrong later?

- When contrast forces you to darken it, the name no longer describes it and every reference becomes misleading.
- Nothing, as long as you update the value in one place.
- It only matters if other people use the sheet.

<details>
<summary>After your attempt</summary>

When contrast forces you to darken it, the name no longer describes it and every reference becomes misleading. — Names outlive values. A role name survives the change; an appearance name has to be renamed everywhere or quietly lie.

Nothing, as long as you update the value in one place. — The value updates fine. The name is what other people and future notes read, and it now says the wrong thing.

It only matters if other people use the sheet. — You are the main reader, weeks later, and you will trust the name rather than re-checking the value.

Improve: Rename any appearance-based token in step 1 to a role name, then record it in step 5.

Check again: No token name refers to a colour, a size or a position.

Answers to revisit: token-1, token-2, token-3, token-4, token-5, token-6, token-7, token-8

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The build-it test produced no gaps at all. What is the most likely explanation?

- You rebuilt it from memory of the original rather than from the sheet alone.
- The sheet is complete and no repair is needed.
- The component chosen was too complex.

<details>
<summary>After your attempt</summary>

You rebuilt it from memory of the original rather than from the sheet alone. — A first sheet essentially always misses something: internal padding, a focus treatment, a disabled colour. No gaps usually means the screen was still in view.

The sheet is complete and no repair is needed. — Possible and rare. Before accepting it, check whether the sheet specifies the space inside a control, not only around it.

The component chosen was too complex. — A complex component would expose more gaps, not fewer.

Improve: Redo the test with the original out of sight, or hand the sheet to someone else, and record every invented decision in step 4 and the change in step 5.

Check again: The gap list names at least one decision the sheet did not specify, and the sheet now covers it.

Answers to revisit: build-gaps, build-fixes

</details>


### Repair and save

Section: practice. Stable action: step-5-brief.

Where the sheet lives, and the repair the Check questions asked for.

- Add the missing specifications the test revealed. Save the sheet and the list of gaps it exposed.

**Start here:** Add the missing specifications the test revealed before saving.

**Enough:** The sheet now answers the questions that stopped you during the rebuild.

**Token sheet:** The single document naming every decision with its value and its role. It is the thing this lesson produces.

**Repair:** The change a Check question asks you to make, recorded as what you actually altered.


### Where the token sheet lives

Section: practice. Stable action: write-sheet-reference.

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.

**Answer:** Where the token sheet lives

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson builds one component in all of its states using only this sheet.


<details>
<summary>Optional hints and reference material</summary>

- Name a purpose such as text-muted instead of a particular location such as left-gray.
- A value without a unit or usage rule leaves implementation decisions unresolved.

- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — The colour and typography style pages, read for how each decision is named, described and given usage guidance. Purpose: A public worked example of decisions published as reusable, named rules rather than as a mood board. Free reading, no account. Verified 2026-09-06. Rebuild the structure with your own values; do not copy government branding. Fallback: R06.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Tokens are named by role and cover every decision**

Adequate evidence: A sheet where every value used in the screen appears as a role-named token, with no appearance-based names.

0 — Values are listed without names, or no sheet exists.

1 — Names exist but several are appearance-based, or decisions from the module are missing.

2 — All decisions appear as role-named tokens.

3 — As adequate, and a naming rule is stated so a future token can be named consistently.

Repair: Rename every appearance-based token by the job it does, then check your screen for any value that has no token and add it. Recheck: The renamed sheet and a confirmation that no value is untokenised.

**Usage notes and prohibitions are present**

Adequate evidence: Each token has a usage note, and at least three prohibitions are stated where misuse is plausible.

0 — No usage notes.

1 — Usage notes exist but no prohibitions.

2 — Usage notes throughout with meaningful prohibitions.

3 — As adequate, and each prohibition names the defect it prevents.

Repair: For your three most easily confused tokens, write the specific wrong use you expect and turn each into a prohibition naming the consequence. Recheck: The three prohibitions with their consequences.

**Permitted pairings are contrast-checked**

Adequate evidence: A pairing table showing each permitted text-on-surface combination with its measured ratio and threshold.

0 — No pairing check.

1 — Some pairings checked; gaps remain.

2 — All permitted pairings are measured and any failure is recorded as a prohibition.

3 — As adequate, and a pairing that fails is retained as prohibited rather than quietly deleted, so the constraint is visible.

Repair: Enumerate every text token against every surface token, measure the ones you would plausibly use, and mark each as permitted or prohibited. Recheck: The completed pairing table.

**The build-it test was run and its gaps repaired**

Adequate evidence: A component rebuilt from the sheet alone and a list of decisions that had to be invented, each now specified.

0 — The test was not run.

1 — The test was run but the gaps were not repaired.

2 — Gaps are listed and each is now specified on the sheet.

3 — As adequate, and the test was run by another person rather than by you, with what they misread recorded.

Repair: Rebuild one component using only the sheet, writing down each moment you had to decide something yourself, then add each of those to the sheet. Recheck: The rebuilt component, the gap list and the updated sheet.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson builds one component in all of its states using only this sheet.

**Review criteria:**

- Tokens are named by role and cover every decision
- Usage notes and prohibitions are present
- Permitted pairings are contrast-checked
- The build-it test was run and its gaps repaired

<details>
<summary>Reading, video and deeper explanation</summary>



[GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/).

</details>

## Lesson 9: Applying the system to one component set

Stable ID: m03-l09-v1. Core.

A system proves itself on states, not on the happy path. The default appearance of a button is the easy part; the disabled, loading, error and focused versions are where undocumented decisions hide.

Bring: Your token sheet and the gap list from the build-it test.

Starting route: Choose a Reserve button or reservation field and sketch six states on paper: default, focus, pressed, disabled, error and success. If a state is not meaningful for your component, explain that and choose a meaningful one. Label values from your token sheet; missing values go back into the sheet.

- One component specified in all its states, a state table giving state, triggering condition and tokens used, the new tokens added to the sheet, and the disabled-state explanation text.

### Start with a clear task

Section: learn. Stable action: welcome.

Build one component in all of its states using only your token sheet, and document each state with the tokens it uses and the condition that produces it.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

A component is defined by its states, and most designs specify only one of them. A single control typically needs a default, a hover or pressed appearance where a pointer exists, a keyboard focus appearance, a disabled appearance, and often a loading appearance while something is happening. Each is a real thing a reader will see, and each needs tokens or it will be invented later by whoever implements it.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Keyboard focus is not optional and is not the same as hover. Hover exists only where there is a pointer; focus is how a person navigating by keyboard knows where they are, and removing the focus indicator because it looks untidy makes the interface unusable for them. Design a focus appearance deliberately — usually a visible outline with its own token — rather than accepting or deleting a default.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

A disabled state must still communicate. The contrast exception means a disabled control is not held to the text ratio, but the reader still has to understand what the control is and, ideally, why it is unavailable. A disabled button with no explanation produces a reader who thinks the interface is broken, which is a comprehension failure even where it is not a conformance failure.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

This is a foundations pass, not the complete component repertoire. You are proving that your tokens survive contact with one real component's states. Navigation, modals, tables, charts, dashboards and notifications, and the full interaction behaviour around them, belong to the interface craft and interaction modules later in the course; do not describe this lesson's output as a component library.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A primary button was specified once, in default. Building its states from the token sheet exposed four undocumented decisions: focus had no token at all, hover reused a colour that failed against the raised surface, disabled had been drawn at 40 per cent opacity so its label became unreadable, and there was no loading appearance despite the booking action taking two seconds. Four states, four gaps — none visible in the original screen.


### Get your practice ready

Section: learn. Stable action: workspace.

Choose a Reserve button or reservation field and sketch six states on paper: default, focus, pressed, disabled, error and success. If a state is not meaningful for your component, explain that and choose a meaningful one. Label values from your token sheet; missing values go back into the sheet.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Choose the component and enumerate states

Section: practice-plan. Stable action: step-1-brief.

One component and every state it really has, each with its condition.

- Pick one component your screen genuinely needs. List every state it will really have, including the condition that produces each one.

**Start here:** Write default first, then ask what happens on the keyboard, on a slow connection, and when the action is unavailable.

**Enough:** Every state names the condition that produces it, not just the appearance.

**State:** How the component looks and behaves under one condition. The condition is part of the specification.

**Focus:** Where the keyboard currently is. It is not the same as hover, and it must be visible.


### The component you chose, and why your screen needs it

Section: practice-plan. Stable action: write-component.

Write your answer for “The component you chose, and why your screen needs it”. Use the task instructions below to decide what to include.

**Answer:** The component you chose, and why your screen needs it




### State 1 · its name and the condition that produces it

Section: practice-plan. Stable action: write-state-1.

Default, hover, focus, pressed, loading, disabled, error — whichever your component really has.

**Answer:** State 1 · its name and the condition that produces it

Default, hover, focus, pressed, loading, disabled, error — whichever your component really has.

<details>
<summary>Example</summary>

Example (made up): disabled · the class is full, so booking is unavailable.

</details>


### State 2 · its name and the condition that produces it

Section: practice-plan. Stable action: write-state-2.

Write your answer for “State 2 · its name and the condition that produces it”. Use the task instructions below to decide what to include.

**Answer:** State 2 · its name and the condition that produces it




### State 3 · its name and the condition that produces it

Section: practice-plan. Stable action: write-state-3.

Write your answer for “State 3 · its name and the condition that produces it”. Use the task instructions below to decide what to include.

**Answer:** State 3 · its name and the condition that produces it




### State 4 · its name and the condition that produces it

Section: practice-plan. Stable action: write-state-4.

Write your answer for “State 4 · its name and the condition that produces it”. Use the task instructions below to decide what to include.

**Answer:** State 4 · its name and the condition that produces it




### State 5 · its name and the condition that produces it

Section: practice-plan. Stable action: write-state-5.

Write your answer for “State 5 · its name and the condition that produces it”. Use the task instructions below to decide what to include.

**Answer:** State 5 · its name and the condition that produces it




### State 6 · its name and the condition that produces it

Section: practice-plan. Stable action: write-state-6.

Write your answer for “State 6 · its name and the condition that produces it”. Use the task instructions below to decide what to include.

**Answer:** State 6 · its name and the condition that produces it




### Build each state from tokens only

Section: practice-plan. Stable action: step-2-brief.

Each state built from tokens only, with every missing token recorded rather than invented.

- Specify each state using only tokens from your sheet. Every time you cannot, stop and record the missing token rather than inventing a value silently.

**Start here:** Take the default state and write the token name for every value it uses.

**Enough:** Nowhere did you write a raw value; where you wanted to, the token is on the missing list.

**Token:** A named entry on your sheet standing for one value, used everywhere that value is needed.

**Raw value:** A number or colour written straight into the design instead of a token name. It works in one place and matches nowhere else.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Building the hover state of a Reserve button from the sheet, and inventing a colour the moment the sheet ran out.

**Where it went smoothly:** The default state came straight off the sheet: surface-accent for the background, text-on-accent for the label, space-3 inside, radius-2 on the corners. Every value already had a name.

**Where it stopped:** Hover needs a slightly darker accent. The sheet has one accent and nothing darker than it.

**What I did:** I darkened it by eye until it looked right and wrote that value straight into the drawing. Thirty seconds, and the state looked finished.

**What that quietly cost:** The number now exists in one drawing and nowhere else. The next component that needs a hover will be darkened by eye again, slightly differently, and nobody will ever know why the two disagree.

**What I did instead:** I left the state marked “needs accent-dark”, put accent-dark on the missing list, and wrote the value I had guessed beside it as a proposal rather than a decision.

**Wrong turn:** The wrong turn is that inventing a value feels like progress and recording a gap feels like stopping. The invented value is the dangerous one precisely because it works here.

**Trade-off:** The state stays unfinished until the sheet catches up, and you will collect several of these before it is complete. A drawing with holes in it is harder to show anybody.

**Unknown:** Still unknown: whether one darker accent covers every case, or whether hover on a muted surface needs its own. That only shows up when you build the second component.


### For each state: the tokens it uses

Section: practice-plan. Stable action: write-state-tokens.

Write your answer for “For each state: the tokens it uses”. Use the task instructions below to decide what to include.

**Answer:** For each state: the tokens it uses




### Every token you needed and did not have

Section: practice-plan. Stable action: write-missing-tokens.

Record it rather than inventing a value silently. These go back into the sheet.

**Answer:** Every token you needed and did not have

Record it rather than inventing a value silently. These go back into the sheet.


### Design the focus appearance

Section: practice-plan. Stable action: step-3-brief.

A focus appearance with its own token, distinguishable from hover and visible on every surface.

- Give keyboard focus its own visible treatment and token. Check it is distinguishable from hover and visible against every surface the component sits on.

**Start here:** Draw the focused state beside the hovered one and ask whether you could tell them apart across the room.

**Enough:** Focus differs from hover in kind, not only in degree.

**Hover:** How a control looks while a pointer is resting on it. There is no hover on a phone.

**Surface:** The background a component sits on. The same focus ring can be unmistakable on one surface and invisible on another.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied focus treatment from the same made-up project: on focus the button’s background lightens slightly, which is also exactly what happens on hover.

What is wrong with that, and what is the smallest fix?

- Focus and hover are indistinguishable, so a keyboard user cannot tell where they are; give focus its own visible outline offset from the control.
- Nothing: a lightened background is visible, which is what focus needs.
- Remove the hover effect so the lightening only means focus.
- Rely on the browser default focus ring.

<details>
<summary>After your attempt</summary>

Focus and hover are indistinguishable, so a keyboard user cannot tell where they are; give focus its own visible outline offset from the control. — Focus needs to be unmistakable and must not depend on a mouse being present. An outline sitting just outside the control works on every surface.

Nothing: a lightened background is visible, which is what focus needs. — Visible is not enough if it means two different things. A mouse user hovering and a keyboard user focusing see the same thing.

Remove the hover effect so the lightening only means focus. — That solves the ambiguity by removing useful mouse feedback, and the focus signal remains a subtle background change.

Rely on the browser default focus ring. — A reasonable starting point and it often fails against particular surfaces, which is why the lesson asks you to check it against each one.

Give your own focus state a token of its own and check it against every surface the component sits on.

</details>


### What focus looks like, and which token carries it

Section: practice-plan. Stable action: write-focus-appearance.

It must differ from hover, and be visible against every surface the component sits on.

**Answer:** What focus looks like, and which token carries it

It must differ from hover, and be visible against every surface the component sits on.


### Where you checked it, and against which surfaces

Section: practice-plan. Stable action: write-focus-check.

Write your answer for “Where you checked it, and against which surfaces”. Use the task instructions below to decide what to include.

**Answer:** Where you checked it, and against which surfaces




### Make disabled comprehensible

Section: practice-plan. Stable action: step-4-brief.

A disabled state with its own tokens, and words explaining why the control is unavailable.

- Specify disabled with its own tokens, then write the words that tell the reader why the control is unavailable and where those words appear.

**Start here:** Write the sentence a reader needs before you choose any colour.

**Enough:** The disabled state does not rely on opacity and the reader is told why.

**Disabled:** A control that is visible but cannot be used at this moment, and the reason belongs on the screen.

**Opacity:** How see-through something is drawn. Below full, whatever sits behind mixes in, so the result is not a colour you chose.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Specifying the disabled Reserve button on a full class.

**What I did first:** Took the default button and set it to 40 per cent opacity. One line, done.

**What that produced:** The label became unreadable, the background turned into an unpredictable blend of the button and whatever was behind it, and the control still looked pressable.

**The worse problem:** It said nothing. A reader sees a faded button and cannot tell whether the class is full, whether they must sign in, or whether the page is broken.

**What I specified instead:** Its own tokens: surface-muted for the background, text-disabled for the label, no border. Deliberately flat, so it does not read as pressable.

**The words that did the real work:** Beneath it: “Saturday is full. Sunday at 11 has two places.” The state explains itself and offers the next move.

**Wrong turn:** The wrong turn is treating disabled as a visual effect. Opacity is cheap to apply and communicates nothing, while quietly breaking contrast.

**Trade-off:** Its own tokens mean two more entries on the sheet and a sentence to write for each disabled case. It is what turns a dead end into a next step.

**Unknown:** Still unknown: whether the explanation is noticed where it sits. That is a question for a person, not for the sheet.


### The tokens disabled uses (not the default at reduced opacity)

Section: practice-plan. Stable action: write-disabled-tokens.

Write your answer for “The tokens disabled uses (not the default at reduced opacity)”. Use the task instructions below to decide what to include.

**Answer:** The tokens disabled uses (not the default at reduced opacity)




### The words telling the reader why it is unavailable, and where they appear

Section: practice-plan. Stable action: write-disabled-words.

Write your answer for “The words telling the reader why it is unavailable, and where they appear”. Use the task instructions below to decide what to include.

**Answer:** The words telling the reader why it is unavailable, and where they appear



<details>
<summary>Example</summary>

Example (made up): beneath the button, “Saturday is full. Sunday at 11 has two places.”

</details>


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Is the disabled state just the default at reduced opacity?

- No: uniform opacity changes the background too, produces an unpredictable composite, and often leaves the label unreadable while still looking pressable.
- Yes, and it is the standard approach in most systems.
- Yes, provided the opacity stays above 50 per cent.

<details>
<summary>After your attempt</summary>

No: uniform opacity changes the background too, produces an unpredictable composite, and often leaves the label unreadable while still looking pressable. — Disabled deserves its own tokens and its own explanation, because it is a state that has to communicate a reason.

Yes, and it is the standard approach in most systems. — It is common, which is not the same as sound. It is the fastest way to produce an unreadable label over an unpredictable background.

Yes, provided the opacity stays above 50 per cent. — A threshold does not fix the composite problem, and it still leaves the control looking pressable and unexplained.

Improve: Specify disabled with its own tokens in step 4 and write the sentence that tells the reader why, then record it in step 5.

Check again: Disabled uses named tokens and is accompanied by words explaining the condition.

Answers to revisit: disabled-tokens, disabled-words

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your focus state looks like a slightly lighter version of hover. Why is that a problem?

- A keyboard user cannot reliably tell where they are, and focus must not depend on a pointer being present.
- It is fine, since both mean the control is active.
- It only matters if the component is a form field.

<details>
<summary>After your attempt</summary>

A keyboard user cannot reliably tell where they are, and focus must not depend on a pointer being present. — Focus is the keyboard user’s cursor. If it is a faint variant of a mouse effect, they lose their place on the screen.

It is fine, since both mean the control is active. — They mean different things: hover is where the pointer is, focus is where the keyboard is. Conflating them costs the keyboard user their position.

It only matters if the component is a form field. — Every focusable control needs a visible focus state, including buttons and links.

Improve: Give focus its own token and appearance in step 3 and check it against every surface, then record the change in step 5.

Check again: Focus is distinguishable from hover and visible on each surface the component uses.

Answers to revisit: focus-appearance, focus-check

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

While building a state you needed a value the sheet does not have. What do you do?

- Record it as a missing token and add it to the sheet, rather than inventing a value in place.
- Pick a sensible value now and add it to the sheet later if it is reused.
- Use the nearest existing token even if it is wrong.

<details>
<summary>After your attempt</summary>

Record it as a missing token and add it to the sheet, rather than inventing a value in place. — The invented value is invisible drift: it works here and diverges everywhere else. Recording it is how the sheet becomes complete.

Pick a sensible value now and add it to the sheet later if it is reused. — “Later if reused” is how the twelve accidental gaps in the spacing lesson happened.

Use the nearest existing token even if it is wrong. — That hides a real gap behind a value that does not fit, and the mismatch will be blamed on the component.

Improve: List every value you invented in the missing-tokens box in step 2, add them to the sheet, and note it in step 5.

Check again: The state table refers only to named tokens, and the sheet contains all of them.

Answers to revisit: missing-tokens, state-tokens

</details>


### Document and save

Section: practice. Stable action: step-5-brief.

Where the state table lives, and the repair the Check questions asked for.

- Write the state table: state, condition, tokens used, notes. Save it with the new tokens you had to add.

**Start here:** Write the table as state, condition, tokens used, notes.

**Enough:** The new tokens you needed have been added to the sheet from lesson 8.

**State table:** The written record of your component: each state, the condition that produces it, and the tokens it uses.

**Condition:** The circumstance that brings a state about, such as the class being full. It is part of the specification, not a side note.


### Where the state table lives

Section: practice. Stable action: write-state-table-reference.

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.

**Answer:** Where the state table lives

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The last lesson rebuilds a whole Module 1 screen from the sheet and compares the two honestly.


<details>
<summary>Optional hints and reference material</summary>

- Draw the states in a row so changes can be compared directly.
- Hover cannot carry information needed on touch. A focus drawing documents intent; it does not prove working keyboard access.

- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — The style pages covering how states and their usage are described, read as an example of documenting behaviour alongside appearance. Purpose: Shows the level of specification a component needs before someone else can build it. Free reading, no account. Verified 2026-09-06. The full component and variant repertoire is m08 and m13 work, not this lesson's. Fallback: R03.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**All real states are enumerated with their conditions**

Adequate evidence: A state table listing each state and the specific condition that produces it, including at least default, focus, disabled and one asynchronous state if the action takes time.

0 — Only the default is specified.

1 — Several states listed but conditions are absent or focus is missing.

2 — All real states are present with their triggering conditions.

3 — As adequate, and a state was added because of something specific about this product, such as a slow network or an offline case.

Repair: Walk through using the component as a reader: before acting, while acting, when not allowed, when it fails. Add any state that walk reveals, with its condition. Recheck: The extended state table with conditions.

**States are built from tokens, with gaps recorded not invented**

Adequate evidence: Each state names the tokens it uses, and every value that had no token is listed as a token added to the sheet.

0 — Values were chosen freely without reference to the sheet.

1 — Tokens are mostly used but some invented values are unrecorded.

2 — Every value is a token, and additions are recorded on the sheet.

3 — As adequate, and one addition prompted a change to an existing token's role rather than a new token, with the reason.

Repair: Go through your states and mark every value that is not on the sheet. Add each as a named token with a role, or replace it with an existing token. Recheck: The state table with token names and the updated sheet.

**Focus is designed deliberately and checked**

Adequate evidence: A focus appearance with its own token, visibly different from hover, checked against every surface the component appears on.

0 — No focus state, or the default was removed.

1 — A focus state exists but is identical to hover or unchecked against surfaces.

2 — Focus is distinct, tokenised and checked on each surface.

3 — As adequate, and the focus indicator's own contrast against its adjacent colours is measured.

Repair: Specify a focus appearance that does not rely on the same signal as hover, then place the component on each surface it uses and confirm the indicator remains visible. Recheck: The focus specification and the per-surface check.

**Disabled communicates, not merely dims**

Adequate evidence: A disabled specification with its own tokens plus the words that explain unavailability and where they appear.

0 — Disabled is uniform opacity applied to the default.

1 — Disabled has its own appearance but no explanation for the reader.

2 — Disabled has its own tokens and an explanation with a stated location.

3 — As adequate, and the explanation is written so it also answers what the reader could do to make the control available.

Repair: Replace any blanket opacity with explicit tokens for the disabled label and surface, then write one sentence the reader would see explaining why the control is unavailable. Recheck: The disabled specification and its explanatory sentence.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The last lesson rebuilds a whole Module 1 screen from the sheet and compares the two honestly.

**Review criteria:**

- All real states are enumerated with their conditions
- States are built from tokens, with gaps recorded not invented
- Focus is designed deliberately and checked
- Disabled communicates, not merely dims

<details>
<summary>Reading, video and deeper explanation</summary>



[GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/).

</details>

## Lesson 10: Rebuild and critique: what the system changed

Stable ID: m03-l10-v1. Core.

Ten lessons of decisions are worth nothing until one whole screen is rebuilt from them, and the rebuild is also the moment to be honest that a better-looking screen is not yet a better-working one.

Bring: Your original Module 1 screen, the token sheet, the component state table and every artefact from this module.

Starting route: Use your original class screen and its token sheet. If missing, draw an intentionally inconsistent version, write a small token sheet, and preserve both before rebuilding. Compare the two against three named heuristics. A neater sketch does not establish better completion or conversion.

- The rebuilt screen, a log of every value not covered by the token sheet, a heuristic review of both versions, the three-column change table, and the list of issues visual work cannot fix with the module that addresses each.

### Start with a clear task

Section: learn. Stable action: welcome.

Rebuild one complete Module 1 screen using only your token sheet and component work, then critique both versions against usability heuristics and separate craft improvements from claims about outcomes.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Rebuilding from a system is a test of the system, not of your taste. Every point where you reach past the token sheet for a value is a defect in the sheet, and the count of those moments is the most useful number this lesson produces. A rebuild that required no additions probably means the screen was too similar to the one the sheet was derived from.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Heuristic critique and evidence are different instruments and produce different sentences. A heuristic review says “this violates a recognised principle in the following specific way”, which is an expert judgement you can act on cheaply. It cannot say “this is better for readers”, because no reader was involved. Keep the two kinds of statement in separate columns so a stakeholder cannot mistake one for the other.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Critique your own work by re-describing it, not by defending it. Write what each change was intended to achieve, then what a reader would actually experience differently, then what you cannot know. The third column is the one that keeps the write-up honest and the one that most portfolios omit entirely.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Visual craft has real limits worth naming. A refreshed screen can improve legibility, grouping and consistency, and still fail because the underlying flow is wrong, the content is unclear or the task itself was misunderstood. Those are the problems the research and flow modules address, and this module's improvements do not touch them.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A rebuilt workshop detail screen needed six values not on the token sheet — a focus colour on a dark surface, two spacing values for a dense metadata row, and three type sizes for a table. The heuristic review then found four issues, only one of which the visual refresh had addressed: the error message still appeared far from the field that caused it, which is a visibility-of-status problem no palette can fix. The write-up recorded one improvement, three unresolved issues and zero measured outcomes.


### Get your practice ready

Section: learn. Stable action: workspace.

Use your original class screen and its token sheet. If missing, draw an intentionally inconsistent version, write a small token sheet, and preserve both before rebuilding. Compare the two against three named heuristics. A neater sketch does not establish better completion or conversion.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Rebuild from the system

Section: practice-plan. Stable action: step-1-brief.

The rebuilt screen, and every place the sheet could not carry you.

- Rebuild the whole screen using only your token sheet and component specifications. Log every moment you had to reach past them.

**Start here:** Put the original out of sight and rebuild from the sheet and the state table.

**Enough:** The gap list is honest; a system that covered everything on its first outing is unlikely.

**Token sheet:** The list of named values you built in lesson 8: every colour, size and space the system allows.

**Gap:** Something the screen needed and the sheet does not contain. It is what the rebuild is for, not a sign the rebuild went badly.


### Which Module 1 screen you rebuilt

Section: practice-plan. Stable action: write-screen-chosen.

Write your answer for “Which Module 1 screen you rebuilt”. Use the task instructions below to decide what to include.

**Answer:** Which Module 1 screen you rebuilt




### Anything you could not build from the sheet and component work alone

Section: practice-plan. Stable action: write-from-sheet-only.

Every one of these is a gap in the system, not a failure of the screen.

**Answer:** Anything you could not build from the sheet and component work alone

Every one of these is a gap in the system, not a failure of the screen.


### Heuristic review of both versions

Section: practice-plan. Stable action: step-2-brief.

Three heuristics applied to both versions.

- Review the original and the rebuild against the ten heuristics. Record each issue with the heuristic it violates and the specific element it concerns.

**Start here:** Choose the three heuristics most relevant to a booking screen and apply each to both versions.

**Enough:** At least one heuristic finds a problem the rebuild did not fix.

**Heuristic:** A rule of thumb from experience. It identifies a risk worth checking; it cannot report that a person failed.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Comparing the two versions of a class details screen after the rebuild.

**What I wanted to write:** “The new version is much clearer and will convert better.” I believed it and it was two claims, both unsupported.

**What I could actually support:** Every text element now meets its contrast threshold, the measure is 68 characters rather than 101, and each group’s outside gap exceeds its inside gap. Those are measured.

**What the heuristics found:** Both versions are silent while the booking is confirmed. The system work never touched it, because it is a behaviour rather than a surface.

**What that told me:** The rebuild improved craft and left one real usability problem untouched. Saying so is more useful than a claim about conversion.

**The honest summary:** The screen is measurably more legible and better grouped. Nobody has used either version, so nothing is known about outcomes.

**Wrong turn:** The wrong turn is letting the visible improvement stand in for evidence about people. The new screen looks better to the person who made it, which is the weakest possible test.

**Trade-off:** The honest summary is less impressive and it is the one that survives a reviewer asking how you know.

**Unknown:** Still unknown: whether anyone finds the price faster. That needs a person and a task, which is Module 2 work.


### Heuristic 1 · what it names, and what each version does about it

Section: practice-plan. Stable action: write-heuristic-1.

Write your answer for “Heuristic 1 · what it names, and what each version does about it”. Use the task instructions below to decide what to include.

**Answer:** Heuristic 1 · what it names, and what each version does about it



<details>
<summary>Example</summary>

Example (made up): visibility of system status — neither version says anything while the booking is being confirmed.

</details>


### Heuristic 2 · what it names, and what each version does about it

Section: practice-plan. Stable action: write-heuristic-2.

Write your answer for “Heuristic 2 · what it names, and what each version does about it”. Use the task instructions below to decide what to include.

**Answer:** Heuristic 2 · what it names, and what each version does about it




### Heuristic 3 · what it names, and what each version does about it

Section: practice-plan. Stable action: write-heuristic-3.

Write your answer for “Heuristic 3 · what it names, and what each version does about it”. Use the task instructions below to decide what to include.

**Answer:** Heuristic 3 · what it names, and what each version does about it




### Separate the columns

Section: practice-plan. Stable action: step-3-brief.

Craft improvements with evidence, and outcome claims rewritten honestly.

- Build a three-column table: what changed, what a reader would experience differently, and what you cannot know without evidence. Fill all three honestly.

**Start here:** List what you measured in this module first; those are the claims you can keep.

**Enough:** No sentence claims a change in what people will do.

**Craft improvement:** A change to the surface you can show by measuring, such as contrast or the number of characters in a line.

**Outcome claim:** A sentence about what people will do or find easier. It needs a person attempting a task behind it.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

Three supplied sentences from the same made-up write-up. A: “Every text element now meets its contrast threshold, measured with the calculator.” B: “The line length is now 68 characters, counted over three lines.” C: “The redesign makes the screen easier to use.”

Which sentence cannot be supported by anything in this module, and why?

- C, because ease of use is a claim about people and nobody has used either version.
- A, because contrast measurements are only estimates.
- B, because character counts vary by content.
- None: all three follow from careful work.

<details>
<summary>After your attempt</summary>

C, because ease of use is a claim about people and nobody has used either version. — A and B report measurements you took. C reports an outcome that would need a person attempting a task, which this module never did.

A, because contrast measurements are only estimates. — They are calculated from stated colour values, so within their scope they are exact. What they do not establish is readability in every condition.

B, because character counts vary by content. — The count is of your real content, over three lines, and it is reported as such. It is a measurement with a stated method.

None: all three follow from careful work. — Careful work supports A and B. C requires evidence of a different kind entirely, and this module produced none of it.

Sort your own sentences the same way: what you measured, and what would need a person.

</details>


### What genuinely improved in the craft, and how you can tell

Section: practice-plan. Stable action: write-craft-changes.

Measured contrast, a counted measure, a proven grouping gap: things with evidence behind them.

**Answer:** What genuinely improved in the craft, and how you can tell

Measured contrast, a counted measure, a proven grouping gap: things with evidence behind them.


### Anything you were tempted to claim about outcomes, rewritten honestly

Section: practice-plan. Stable action: write-outcome-claims.

Write your answer for “Anything you were tempted to claim about outcomes, rewritten honestly”. Use the task instructions below to decide what to include.

**Answer:** Anything you were tempted to claim about outcomes, rewritten honestly



<details>
<summary>Example</summary>

Example (made up): tempted to write “this will increase bookings”; honest version is that nobody has used either version and nothing has been measured.

</details>


### Name what craft did not fix

Section: practice-plan. Stable action: step-4-brief.

What is still wrong that a design system cannot fix.

- List the issues from the review that visual work cannot resolve, and say which later module addresses each one.

**Start here:** Look for a missing step, missing information, or a question about the reader that no amount of craft answers.

**Enough:** The list contains at least one thing that needs research or a behaviour change rather than a token.

**Design system:** Tokens, components and rules together: everything that decides how the surface looks and behaves.

**Unresolved list:** The record of what is still wrong once the rebuild is done, kept visible so it is not quietly dropped.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Listing what the rebuild left unfixed, and filling the list with things the sheet could fix in an afternoon.

**My first list:** Three items: the button colour still feels heavy, the gap under the heading is tight, the price sits too low on the page.

**What I noticed about them:** All three are token decisions. Any of them could be settled with the sheet I already have, which makes them gaps from step 1, not things a system cannot reach.

**The question I asked instead:** What is wrong with this screen that no amount of colour, spacing or type would touch?

**The first real one:** The screen never says whether Reserve holds a place or takes the money. No token answers that. It needs a decision about the product, and then words.

**The second real one:** I do not know whether people arrive knowing which class they want or wanting to browse. The whole structure rests on an answer nobody has looked for.

**Wrong turn:** The wrong turn is filling the list with visual complaints. They are easy to see, they show you are still being critical, and they are the work you already know how to do.

**Trade-off:** A list of two real problems looks thinner than a list of six, and neither of the real ones can be fixed this week. Naming them means carrying them.

**Unknown:** Still unknown: whether the missing sentence about holding against paying is the biggest problem or merely the most visible one. Only somebody attempting the task would say.


### What is still wrong with the screen that a design system cannot fix

Section: practice-plan. Stable action: write-still-wrong.

Wrong information, a missing step, an unanswered question about the reader.

**Answer:** What is still wrong with the screen that a design system cannot fix

Wrong information, a missing step, an unanswered question about the reader.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your rebuilt screen is measurably more legible. May you say it is easier to use?

- No: legibility was measured, ease of use was not, and nobody has attempted a task on either version.
- Yes, since legibility is a component of usability.
- Yes, if the heuristics also improved.

<details>
<summary>After your attempt</summary>

No: legibility was measured, ease of use was not, and nobody has attempted a task on either version. — The measurements are real and they are about the surface. What a person can accomplish is a different kind of evidence, and this module collected none of it.

Yes, since legibility is a component of usability. — It is a necessary condition and not the claim. A perfectly legible screen can still hide the price or omit a step.

Yes, if the heuristics also improved. — Heuristics identify risks by inspection. Improving against them is a reason to expect a better result, not a report of one.

Improve: Rewrite any outcome claim in step 3 as a measurement plus what would still need to be observed, then record it in step 5.

Check again: Every claim in the write-up names how it was established.

Answers to revisit: outcome-claims, craft-changes

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The heuristic review found a problem the rebuild did not fix. What should you do with it?

- Record it as an unresolved problem the system could not address, so it is visible rather than lost.
- Fix it now, since the module is about improving the screen.
- Leave it out: the module was about visual foundations.

<details>
<summary>After your attempt</summary>

Record it as an unresolved problem the system could not address, so it is visible rather than lost. — A design system fixes surfaces. Missing feedback, missing steps and unanswered questions about the reader survive it, and naming them is the useful output.

Fix it now, since the module is about improving the screen. — Sometimes right, and a behaviour problem usually needs evidence about people rather than another token. Recording it points at the next work.

Leave it out: the module was about visual foundations. — The critique step exists precisely to catch what the visual work could not reach. Omitting it makes the module look more successful than it was.

Improve: Add anything the heuristics found and the rebuild did not fix to step 4, then record it in step 5.

Check again: The unresolved list names at least one problem no token could solve.

Answers to revisit: still-wrong

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You could not rebuild part of the screen from the sheet alone. What does that mean?

- The sheet has a gap; record it and add the specification rather than treating it as a failure of the rebuild.
- The screen was too complex for a token system.
- The component work from lesson 9 was incomplete.

<details>
<summary>After your attempt</summary>

The sheet has a gap; record it and add the specification rather than treating it as a failure of the rebuild. — The rebuild is the test of the sheet, so the gaps are its output. This is the same build-it test from lesson 8, run at full size.

The screen was too complex for a token system. — Complexity shows where the sheet is thin. A system that only covers simple screens is not finished.

The component work from lesson 9 was incomplete. — Possibly, and either way the answer is the same: name the missing specification and add it.

Improve: List every place the sheet ran out in step 1 and add the missing specifications to the token sheet, then record it in step 5.

Check again: The gaps found by the rebuild have been added to the sheet from lesson 8.

Answers to revisit: from-sheet-only

</details>


### Submit and request review

Section: practice. Stable action: step-5-brief.

Where both versions live, and the repair the Check questions asked for.

- Save all artefacts, record your actual minutes, and set the practice status to ready for review with references to your outputs.

**Start here:** Keep the original and the rebuild side by side; the pair is the evidence.

**Enough:** Both versions exist, are named, and the original is unchanged.

**Original:** The untouched Module 1 screen. It is evidence, so it does not get tidied afterwards.

**Pair:** The two versions kept together. Neither one on its own shows what changed.


### Where the original and the rebuild live

Section: practice. Stable action: write-photo-reference.

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.

**Answer:** Where the original and the rebuild live

Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. This closes the visual foundations module; the reasoning modules build on the same screens.


<details>
<summary>Optional hints and reference material</summary>

- Choose which evidence best supports each decision; do not repeat every exercise in the presentation.
- A polished comparison is a craft artifact. A full case study also needs a real problem, research, testing and honest outcomes.

- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — All ten heuristics with their examples. Purpose: Provides the shared vocabulary for a critique that names principles rather than preferences. Free reading, no account. Verified 2026-09-06. Heuristics are expert judgement, not evidence from readers, and they are not universal laws. Fallback: R11.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The rebuild used the system and logged every exception**

Adequate evidence: The rebuilt screen plus a numbered log of each value reached for outside the token sheet, with what it was needed for.

0 — The screen was redesigned freely without reference to the sheet.

1 — The sheet was used but exceptions were not logged.

2 — Every exception is logged with its purpose.

3 — As adequate, and each logged exception is resolved into a token or explicitly rejected with a reason.

Repair: Go through the rebuilt screen and mark every value that is not on the sheet. For each, either add a role-named token or record why it should stay a one-off. Recheck: The exception log with a resolution for each entry.

**Heuristic issues are specific and attributed**

Adequate evidence: Each issue names the heuristic and the exact element or moment, not a general impression.

0 — No review, or only general impressions.

1 — Issues listed without naming heuristics or elements.

2 — Each issue names its heuristic and its specific element.

3 — As adequate, and issues are ordered by likely cost to the reader with the reasoning stated.

Repair: Rewrite each issue in the form: heuristic, element, what happens, why that is a problem. Delete any entry you cannot state that way. Recheck: The rewritten issue list.

**Craft claims are separated from outcome claims**

Adequate evidence: A three-column table where the third column genuinely contains what is unknown, not a restatement of the change.

0 — Improvements are asserted as outcomes.

1 — A caveat exists but the unknown column is empty or generic.

2 — All three columns are filled and the unknown column names specific things evidence would be needed for.

3 — As adequate, and one unknown is turned into a concrete question a reader could be asked in the next module.

Repair: For every row where you wrote an experience claim, ask how you know. If the answer is that it looks better, move the claim to the unknown column and rewrite it as a question. Recheck: The corrected three-column table.

**The limits of visual work are named with their later module**

Adequate evidence: A list of review issues visual work cannot resolve, each mapped to the module that addresses it.

0 — No limits acknowledged.

1 — Limits acknowledged generically without mapping.

2 — Each unresolved issue is mapped to the module that will address it.

3 — As adequate, and one issue is identified as possibly a problem with the task or content rather than the interface at all.

Repair: Take your heuristic issues and mark each as fixable by visual craft, by flow or structure, or by research. Map the second and third groups to the modules that cover them. Recheck: The mapped issue list.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. This closes the visual foundations module; the reasoning modules build on the same screens.

**Review criteria:**

- The rebuild used the system and logged every exception
- Heuristic issues are specific and attributed
- Craft claims are separated from outcome claims
- The limits of visual work are named with their later module

<details>
<summary>Reading, video and deeper explanation</summary>



[Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).

</details>
