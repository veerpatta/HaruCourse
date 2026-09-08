# Visual foundations refresh

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Published, worksheet-enabled, teaching-refined, learner-validated and assessed are separate states.

Generated from src/module3.ts; edit that source, then run npm run docs:generate. Level 1 · Module m03 · requirement areas 1, 8. Optional effort 20 hours across 10 lessons, which is the sum of the lesson steps themselves. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m01. This is guidance for meaningful practice, not a lock. Module approved resource pair: R03 / R06. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: A type scale that survives the screen

Stable ID: m03-l01-v1. Core. Areas 1, 8. Optional effort ~120 min.

**Objective.** Produce a five-step type scale with stated sizes, weights and uses, and show it holding its hierarchy at two widths without hard-coding a pixel size for every element.

**Bring forward.** The three screens and workshop flow you produced in Product Design Foundations. You will re-typeset one of those screens rather than starting a new design.

You already set type well on a page you control. A screen does not stay the size you designed it at, and the reader may have enlarged the text before your design ever loaded.

### Learn

A type scale is a short, deliberate list of sizes you allow yourself, each with a role. Five or six steps is usually enough for a product screen: a page title, a section heading, body text, a supporting line and a small label. The discipline is not the arithmetic of the ratio; it is refusing the sixth size when a screen feels crowded, because every extra size makes hierarchy harder to read, not easier.

Hierarchy is a comparison, not an absolute. A heading reads as a heading because it differs from what surrounds it in size, weight, spacing or colour. That means you can often strengthen a hierarchy by making the body text calmer rather than making the heading bigger, which matters on a small screen where a bigger heading costs you the content itself.

Screen type has one constraint print does not: the reader controls it. A person may set a larger default text size in their browser or phone, and a design that hard-codes every size in pixels can ignore that setting or break when it is honoured. Sizing text in relative units, so that a chosen scale multiplies the reader's own base size, keeps your hierarchy and their preference at the same time.

Weight and case do work that size cannot. A heavier weight separates a label from a value without adding height, which is how dense interfaces stay legible. All-capitals is a decision with a cost: it removes word shape, slows reading of anything longer than two or three words, and is read letter-by-letter by some screen readers when abbreviations are involved. Use it for short labels, not for sentences.

**Common misconception.** “A bigger heading means a stronger hierarchy.” Not on a narrow screen. If the title grows until it wraps onto three lines and pushes the first paragraph below the fold, the reader now sees only a large phrase and no content, and the page reads as less organised, not more. Contrast in weight and space is usually the cheaper instrument.

### Worked example

A workshop detail screen designed with eight sizes was rebuilt with five: 32/24/16/14/12. The title dropped from 40 to 32 and moved to a heavier weight, the two “supporting” sizes were merged into one 14, and the metadata row became 12 in a heavier weight instead of a lighter grey. At 390 px wide the title now holds one line, the date and price line is readable at arm's length, and the section headings are still obviously headings — with three fewer sizes to maintain.

#### Typography comparison bench

Rebuild one workshop screen with two candidate type scales. Compare hierarchy at narrow width and with enlarged text before choosing.

**Where to practise:** Draw the type ladder and the re-typeset screen on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: The three screens and workshop flow you produced in Product Design Foundations. You will re-typeset one of those screens rather than starting a new design.
- Create HaruCourse/Practice/m03-l01-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

</details>

#### 1. Read and inventory

- Read the assigned typography section. Then list every distinct text size, weight and colour already present in one of your Module 1 screens. Most people find more than they expected; write the real count.

**You should end up with:** A count of the text sizes already on your screen, and what they are.

Worksheet fields for this step:

- How many different text sizes are on your screen now? — Count them, do not estimate. Most first screens have far more than anyone intends.
- The sizes, weights and colours you found

<details>
<summary>Help with this step</summary>

- **Type scale:** The short list of sizes you allow yourself, each with a job. Anything not on the list is not used.

Stuck starting? Go through the screen naming each piece of text aloud and write its size beside it.

Is it enough? The count is a real number you arrived at by looking, not a guess.

</details>

#### 2. Choose the scale

**See it first.** Made-up example. Cutting seven sizes down to five on a class details screen.

- **What I had:** 28, 22, 18, 17, 16, 15 and 13. The 17 and 16 existed because two screens were designed a week apart.
- **My first instinct:** Keep them all and make the title 32 so the hierarchy is “stronger”. Bigger felt like clearer.
- **Why that failed:** At 390 px the 32 title wrapped to three lines and pushed the price off the screen. The page looked shoutier and told me less.
- **What I did instead:** Five steps: 24 semibold for the class name, 18 medium for section headings, 16 regular for body, 14 for the supporting line, 12 for labels.
- **Where the strength came from:** Weight and space, not size. The 24 with a clear gap beneath it reads as a title more reliably than a 32 that wraps.

**The wrong turn:** The wrong turn is treating size as the only volume control. It is the one that costs the most on a small screen.

**What it costs:** Five steps means two things that felt slightly different now look the same. Usually nobody notices, and you should record what you gave up in case they do.

**Still unknown:** Still unknown: whether the 14 and 12 are distinguishable to someone reading in bright sunlight. That is a contrast and size question for later lessons.

- Decide five or six steps. For each, write the size, the weight and the one job it does. Any size you cannot give a job to is removed at this step, not later.

**You should end up with:** Five or six steps, each with a size, a weight and one stated job.

Worksheet fields for this step, revealed a few at a time in the app:

- Step 1 · size, weight, and the one job it does — If you cannot name the job, the step does not belong on the ladder.
- Step 2 · size, weight, and the one job it does
- Step 3 · size, weight, and the one job it does
- Step 4 · size, weight, and the one job it does
- Step 5 · size, weight, and the one job it does
- Step 6 · size, weight, and the one job it does

<details>
<summary>Help with this step</summary>

- **Weight:** How heavy the letters are: regular, medium, semibold. A cheap way to signal importance without taking space.
- **Job:** What that step is for on this screen. “Big” is not a job; “the class name, once per screen” is.

Stuck starting? Write the body text step first, then the title, then fill between them.

Is it enough? Every step names something on your screen that uses it.

</details>

#### 3. Re-typeset one screen

**See it first.** Made-up example. Applying the five-step ladder to a class card, and losing something without noticing.

- **How I applied it:** I went through the card replacing each old size with its nearest step. Seven replacements, four minutes, and the card looked calmer straight away.
- **What I did not write down:** The date had been 15 and the instructor name 16. Both landed on the 14 step. I ticked them off as tidying and moved on.
- **What I noticed later:** Reading the card cold, I could not tell at a glance which line was the date and which was the name. Same size, same weight, same grey, one above the other.
- **The repair I nearly made:** Add a sixth step at 15 and put the date back where it was. Two minutes, and the ladder is back towards the pile it started as.
- **What I did instead:** I asked what the old difference was for. The date has to be found quickly and the name does not, so the date kept the 14 step and gained medium weight and a gap above it. The ladder stayed at five, and the collapse went into the record with what it cost.

**The wrong turn:** The wrong turn is rounding each old size to its nearest step and calling the job done. It is tempting because the screen genuinely does look better afterwards, so nothing prompts you to ask what the old difference was carrying.

**What it costs:** Carrying the date on weight and space rather than size means the two lines are closer in tone than they were, and somebody skimming very fast may still read them as one block. That is the price of holding the ladder at five steps.

**Still unknown:** Still unknown: whether a reader looking for a date finds it any faster in this version. Nothing here was tried with a person, only reasoned about on paper.

- Apply the scale to your chosen screen. Where two old sizes collapse into one new step, note what you lost and whether it mattered.

**You should end up with:** What collapsed when you applied the ladder, and what earned its own step.

Worksheet fields for this step:

- Which old sizes collapsed into one step, and what you lost
- Anything you kept separate, and why it earned its own step

<details>
<summary>Help with this step</summary>

- **Collapse:** Two or more of the old sizes becoming one step of your ladder. The screen gets simpler and a distinction disappears, so each one is worth writing down.
- **Re-typeset:** Setting the same words again with new type decisions. The content does not change; only the sizes, weights and spacing do.

Stuck starting? Go through the screen replacing each old size with its nearest step, and write down every time it hurt.

Is it enough? You can say what was lost, not just that the screen is tidier.

</details>

#### 4. Test the two hard cases

- Redraw or re-render the same screen at roughly 390 px wide, then again with the base text size increased by about 150 per cent. Record exactly what breaks: wrapping, truncation, overlap, a control pushed off screen.

**You should end up with:** What broke at narrow width and with enlarged text, in specific terms.

**Try it with help.** A supplied narrow-width result from the same made-up screen: at 390 px the class name wraps to two lines, the price and the date now sit below the fold, and the section heading and the body text look the same size at a glance.

Which of these is the most serious problem to fix first?

- **The price and date falling below the fold, because the reader now cannot make the decision without scrolling.** — It is the only one that stops the task. A wrapped title is untidy; missing information is a decision the reader cannot make.
- The class name wrapping to two lines, because it looks careless. — Wrapping is normal on a phone and often fine. Judged by the reader’s task rather than the look, it costs almost nothing.
- The heading and body looking similar, because the hierarchy has collapsed. — A real problem and second in line: it slows reading, while the missing price stops the decision entirely.
- All three equally, since they all appeared at the same width. — Appearing together does not make them equally costly. Ranking by what the reader cannot do is what makes the next hour useful.

**Then:** Rank your own breakages the same way: what stops the task first, what slows it, what merely looks wrong.

Worksheet fields for this step:

- At about 390 px wide: what broke? — Wrapping titles, a heading pushing content off the screen, two steps that now look identical.
- With text about 150 per cent larger: what broke? — On paper, letter the same screen with everything a step bigger and see what collides.

<details>
<summary>Help with this step</summary>

- **Enlarged text:** The reader’s own setting, not yours. Many people run their phone text well above default, and a layout that assumes otherwise breaks for them daily.

Stuck starting? Do the narrow case first: redraw the same content in a column about a third the width.

Is it enough? Each note names what broke and where, not “it looked bad”.

</details>

#### 5. Record and pause

- Save the scale table, the before and after screen, and your breakage notes. Write the one change you would make next. Stop here if the session is over; the next lesson continues from this artefact.

**You should end up with:** Your next change, where the artefacts are, and the repair the Check questions asked for.

Worksheet fields for this step:

- The one change you would make next
- Where the ladder and the two versions live — File names or “paper, in my folder”. Nothing is uploaded.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Artefact:** Something you actually made and can point at: the ladder, the two drawings, the breakage notes. It is what shows the work happened.
- **Repair:** The one change a Check question asks you to make to your own work. You make it in the worksheet itself rather than noting it for later.

Stuck starting? Choose the change that fixes the most serious breakage you listed.

Is it enough? The next change is one thing you could do in twenty minutes.

</details>

**Save and continue.** Saved for you: The ladder, the breakage notes and your next change save as you type, on this device first and then online. Kept outside the app: The drawings stay on paper or in your own folder. Photograph them if you like and write the file name here; naming a file does not upload it. What your creator sees: Your creator reads the ladder and what broke. Share the photographs the way you normally share files if you want him to see the screens themselves. Your next action: Open Your work and choose Ready for review. The next lesson sets line length and leading on this same screen, so keep the ladder.

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

Inventory roles before choosing sizes; two labels serving the same role should not drift accidentally.

</details>

<details>
<summary>Hint 2</summary>

Use the longest heading in both comparisons. Record whether you tested actual reflow or only a paper approximation.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: A type scale that survives the screen.
Task: Rebuild one workshop screen with two candidate type scales. Compare hierarchy at narrow width and with enlarged text before choosing.
Challenge one thing at a time, and start with the mistake this lesson is about: “A bigger heading means a stronger hierarchy.” Not on a narrow screen. If the title grows until it wraps onto three lines and pushes the first paragraph below the fold, the reader now sees only a large phrase and no content, and the page reads as less organised, not more. Contrast in weight and space is usually the cheaper instrument.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the corrected table and the marked-up screen showing each element's step and ask whether the scale is explicit and each step has a stated job. Look at the narrow rendering plus a one-line note of which variable fixed the hierarchy and ask whether hierarchy holds at narrow width. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m03-l01-v1/work.md. Keep source observations separate from interpretations.
- Keep labelled paper originals or save readable images as before-01.jpg and after-01.jpg in the same folder. Preserve any editable digital source.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** The scale gives explicit values and shows what happened in both hard cases, with the testing method labelled.

**Bring forward:** Bring the chosen scale and original screen into the readability experiment.


### Practice and pause points

- Read and inventory (~20 min): Read the assigned typography section. Then list every distinct text size, weight and colour already present in one of your Module 1 screens. Most people find more than they expected; write the real count.
- Choose the scale (~25 min): Decide five or six steps. For each, write the size, the weight and the one job it does. Any size you cannot give a job to is removed at this step, not later.
- Re-typeset one screen (~35 min): Apply the scale to your chosen screen. Where two old sizes collapse into one new step, note what you lost and whether it mattered.
- Test the two hard cases (~25 min): Redraw or re-render the same screen at roughly 390 px wide, then again with the base text size increased by about 150 per cent. Record exactly what breaks: wrapping, truncation, overlap, a control pushed off screen.
- Record and pause (~15 min): Save the scale table, the before and after screen, and your breakage notes. Write the one change you would make next. Stop here if the session is over; the next lesson continues from this artefact.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper and a ruler are sufficient: draw the scale as a labelled ladder and re-letter the screen at two widths. If you prefer to see real reflow, a single local HTML file with a few CSS rules using rem units shows the enlarged-text case honestly, and needs no account, install or design tool.

### Output

A type scale table of five or six steps with size, weight and job; one screen re-typeset with it; the same screen at narrow width and at enlarged text; and a short note of what broke.

### Checks

- Why size text relative to the reader's base size? Answer: Because the reader may have already chosen a larger text size for their own reasons. A relative scale multiplies that choice, so your hierarchy survives and so does their setting. A fixed pixel size silently overrides a decision that was not yours to make.
- Your screen feels cluttered. Is adding a larger heading the fix? Answer: Usually not. Clutter is often too many competing sizes rather than too small a heading. Reducing the number of steps and increasing the space around a group typically restores hierarchy at no cost in vertical space.
- Is a five-step scale better than an eight-step scale? Answer: Not automatically. Fewer steps are easier to hold consistent and easier to hand over, but a genuinely different job needs its own step. The test is whether you can name the job each step does; a step you cannot justify is the one to remove.

### Rubric and remediation

**The scale is explicit and each step has a stated job**

Adequate evidence: A table listing every step with its size, weight and the one element type it is for, and no size used in the screen that is missing from the table.

- 0 — No scale is stated; sizes were chosen per element.
- 1 — A list of sizes exists but some steps have no stated job, or the screen uses sizes absent from the table.
- 2 — Five or six steps, each with a size, weight and job, and the screen uses only those steps.
- 3 — As adequate, and the write-up explains why a candidate step was rejected and what would justify adding it back.

If below 2: Take the screen you submitted and mark every text element with the step it claims to use. For each mismatch, either change the element to the nearest step or add the step to the table with a written job. Do not add a step you cannot name a job for. Show at recheck: The corrected table and the marked-up screen showing each element's step.

**Hierarchy holds at narrow width**

Adequate evidence: The narrow rendering shows the title, the primary action and the first line of content all readable, with headings still visibly distinct from body text.

- 0 — No narrow version was produced.
- 1 — A narrow version exists but headings and body text are hard to tell apart, or the primary action is not visible.
- 2 — The narrow version keeps a readable distinction between levels and the primary action remains reachable.
- 3 — As adequate, and the design changes deliberately at narrow width — for example a step drops one size or a label moves — with the reason recorded.

If below 2: Redraw only the top of the screen at about 390 px. If the levels blur, change one variable at a time — first weight, then space, and only then size — and record which change restored the distinction. Show at recheck: The narrow rendering plus a one-line note of which variable fixed the hierarchy.

**Enlarged text was actually tested and reported**

Adequate evidence: A second rendering at roughly 150 per cent text size with specific named breakages, or an explicit statement that nothing broke and how that was checked.

- 0 — Enlarged text was not tested.
- 1 — It is claimed to work but no rendering or method is shown.
- 2 — The enlarged rendering is shown and breakages are named specifically.
- 3 — As adequate, and at least one breakage is repaired with the repair explained.

If below 2: Re-run the enlarged case and write the breakages as concrete sentences — “the price overlaps the button”, “the date truncates to three characters” — not as “it looks cramped”. Then fix exactly one. Show at recheck: The enlarged rendering, the breakage list and one repair.

**Reduction is reasoned, not merely tidy**

Adequate evidence: For each pair of old sizes merged into one step, a sentence on what distinction was lost and why that loss is acceptable here.

- 0 — Sizes were changed with no reasoning recorded.
- 1 — Reasoning is aesthetic only — tidier, cleaner, more modern.
- 2 — Each merge names the distinction lost and accepts or rejects that loss for this screen.
- 3 — As adequate, and one merge is identified as risky with a way to check it against a reader rather than by preference.

If below 2: List your merges as a two-column table: what the two old sizes distinguished, and what now carries that distinction — weight, space, colour or nothing. Any row ending in “nothing” needs either a fix or an argument. Show at recheck: The merge table with no unexplained “nothing” rows.

### Portfolio contribution

Practice, and a foundation artefact. The scale itself may appear in a later case study as part of a design system section; this screen exercise is not a case study on its own and shows no user outcome.

### Assigned resources

- R03: [web.dev: typography](https://web.dev/learn/design/typography) — The whole typography chapter, concentrating on type scales, sizing units and responsive text. Purpose: Gives the sizing and unit reasoning behind a scale that respects reader settings. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. Illustrative examples are web-focused; the scale idea applies to any medium. Fallback: R06.

## Lesson 2: Readability: measure, leading and the small screen

Stable ID: m03-l02-v1. Core. Areas 1, 8. Optional effort ~120 min.

**Objective.** Set line length, line height and paragraph spacing for one block of real content, and justify each value against how the text is actually read rather than how the block looks.

**Bring forward.** The type scale and re-typeset screen from the previous lesson, plus at least one paragraph of real content — not placeholder text.

Hierarchy tells someone where to start. Readability decides whether they finish. On a phone the two pull in opposite directions, and placeholder text hides the conflict completely.

### Learn

Line length — the measure — is the strongest single lever on comfortable reading of continuous text. Very long lines make the return sweep to the next line error-prone, so readers lose their place; very short lines break phrases so often that the eye stops more than it reads. Roughly forty-five to seventy-five characters is the usual comfortable band for body text, and the point is to constrain the measure deliberately rather than let it default to whatever the container happens to be.

Line height works with the measure, not independently of it. Longer lines need more space between them to keep the return sweep accurate; short lines and large display type need less, and too much leading on a heading separates it from the text it introduces. Line height is also a ratio, not a fixed distance: express it relative to the font size so it scales when the reader enlarges the text.

Spacing between blocks must beat spacing within them. If the gap between two paragraphs is the same as the gap between their lines, the reader sees one undifferentiated column. This is the same grouping logic you will meet formally in the Gestalt lesson: proximity assigns membership, and the eye trusts it before it trusts your headings.

Real content changes all of these numbers. Placeholder text has even word lengths, no long words, no numbers, no names and no empty states, so it flatters every layout. A real workshop title in two languages, a long instructor name, a price with a currency symbol and a date format the reader recognises will each stress the measure differently. Test with the worst real content you can find, not the average.

**Common misconception.** “Generous line height always reads better.” Past a point it does the opposite: the lines stop cohering into a paragraph and the block reads as a list of separate sentences. Very loose leading also pushes content below the fold on a phone, which costs the reader more than the extra air gains them.

### Worked example

A workshop description set at 16 px across a full 1280 px container ran to about 140 characters a line. Readers testing the page kept re-reading lines. Constraining the text column to roughly 65 characters and setting line height to 1.5 fixed the re-reading without changing the font, the size or the colour. On the phone the measure was already narrow, so the same block needed line height nearer 1.4 and a larger gap between paragraphs instead.

#### Worst-content stress test

Test a long title, paragraph and action label in your screen. Compare two text-column widths without shortening the content to hide problems.

**Where to practise:** Draw the ruled column and the stress test on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: The type scale and re-typeset screen from the previous lesson, plus at least one paragraph of real content — not placeholder text.
- Create HaruCourse/Practice/m03-l02-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

</details>

<details>
<summary>Optional video paired with step 1</summary>

[Web Accessibility Perspectives: Customizable Text](https://www.w3.org/WAI/perspective-videos/customizable/) — W3C Web Accessibility Initiative, 39 s, English, English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page. Whole video, 39 seconds. Watch from 0:09 to 0:34.

What to notice:

- 0:09–0:17 — Customisation is not always a preference; sometimes it is a necessity.
- 0:17–0:22 — Being able to adjust the text is crucial with low vision and dyslexia.
- 0:22–0:34 — Properly built pages let text change size, spacing, font and colour without losing function or clarity.

**Then:** Straight after watching, write your worst-case line at the size you think it should be, then again one step larger. The video is about text having to grow; your measure has to survive that.

**Without the video:** No video needed: set your longest real line, then reread it with the text one step larger and note what collides. The point is the same and paper can make it.

Generic pages with text being resized, not your layout. It shows that text must be able to grow; finding what collides when it does is your own stress test. Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use. Checked 7 September 2026.

</details>

#### 1. Gather worst-case content

- Collect the real strings your screen must hold: the longest title you can justify, a full instructor name, a date, a price, and one empty state. Write them down; you will use them for the rest of the module.

**You should end up with:** The real strings your screen must hold, including the longest title and an empty state.

Worksheet fields for this step:

- The longest title you can justify
- A full instructor name, a date, a price, and one empty state — Empty state: what the screen says when there are no classes that week.

<details>
<summary>Help with this step</summary>

- **Worst-case content:** The real strings that will stress the layout: the longest name, the empty week, the price with a currency symbol.

Stuck starting? Look at a real class listing somewhere and copy the longest title you find.

Is it enough? Nothing in the list is placeholder text like “Lorem ipsum” or “Class name”.

</details>

#### 2. Set the measure

**See it first.** Made-up example. Setting the line length for a class description, by counting rather than by eye.

- **What I did first:** I looked at the paragraph and thought “that reads fine”. The column was the width of the page because that is where the margin happened to be.
- **What counting showed:** Three full lines came to 104, 98 and 101 characters. An average of 101, which is far past the band where the eye reliably finds the start of the next line.
- **What the symptom was:** Rereading the same line. I had noticed it and blamed the font, because the number was invisible until I counted it.
- **What I changed:** I narrowed the column until the count came to about 68 characters, which meant a wider margin on the wide layout and nothing at all on the phone.
- **What stayed:** The phone column was already about 40 characters, which is short but unavoidable at that width, so leading matters more there than measure.

**The wrong turn:** The wrong turn is judging line length by how the block looks. A wide column looks generous and efficient, and the cost only shows up in rereading.

**What it costs:** A narrower column means more scrolling and more white space, which can look empty to a client. It is the trade that makes long text readable.

**Still unknown:** Still unknown: how this reads for someone using a large text setting, where the count drops sharply. That is the stress test two steps from now.

- Set a maximum width for your body text and count the characters on a full line. Record the number. Adjust until it sits in the comfortable band, and note what constrains you.

**You should end up with:** A counted character-per-line figure and the width you chose.

Worksheet fields for this step:

- Characters on a full line, averaged over three lines — Count them. Include spaces.
- The width you settled on, and why

<details>
<summary>Help with this step</summary>

- **Measure:** The number of characters on a line. It is a count, not an impression, and it is what decides whether the eye finds the next line.

Stuck starting? Rule a column, letter one real paragraph inside it, and count the characters on three full lines.

Is it enough? The number in the box came from counting.

</details>

#### 3. Tune leading and block spacing

- Choose line height as a ratio for body, headings and small text. Then set the gap between paragraphs so it clearly exceeds the gap between lines. Write both values.

**You should end up with:** Line heights as ratios, and a paragraph gap clearly larger than the line gap.

**Try it with help.** A supplied block from the same made-up screen: body text at 16 with line height 1.9, paragraph gaps the same size as one line, and headings at 20 with line height 1.9 as well.

What is the main problem with these values?

- **The paragraph gap does not exceed the line gap, so the paragraphs stop reading as separate units.** — When the space between paragraphs equals the space between lines, the block becomes an undifferentiated column of sentences. That is the most damaging of the three.
- The body line height of 1.9 is too loose on its own. — Loose, and the real damage comes from the paragraph gap failing to beat it. Fix the relationship first and 1.9 may be merely airy.
- The headings should have more line height than the body, not the same. — The opposite: large text usually needs a tighter ratio, because the gaps grow with the size. Either way it is not the main fault here.
- Nothing: generous spacing is easier to read. — Up to a point. Past it, lines stop cohering into paragraphs and a phone screen holds almost nothing, which costs the reader more than the air gains.

**Then:** Set your own paragraph gap by comparing it with your line gap, not by choosing a number that looks pleasant.

Worksheet fields for this step:

- Body line height, as a ratio of the text size
- Heading and small-text line heights — Headings usually need less than body text, not more.
- The gap between paragraphs, and how it compares with the gap between lines — It has to be clearly larger, or paragraphs stop being paragraphs.

<details>
<summary>Help with this step</summary>

- **Line height:** The distance from one line to the next, written as a ratio of the text size so it scales with it.

Stuck starting? Write the body ratio first, then set the paragraph gap so it is visibly bigger than one line.

Is it enough? You can state the paragraph gap as “clearly more than one line” and see it on the page.

</details>

#### 4. Stress it

**See it first.** Made-up example. Running the narrow-width test on a class description, and building a test that could not fail.

- **How I ran it:** I redrew the card at about a third of the width, and to fit it on the page I lettered everything smaller too. Nothing broke, and I wrote down that it held.
- **Why nothing broke:** Shrinking the text along with the column keeps the same number of characters on every line. The character count is the whole thing under test, so I had removed it.
- **The second run:** I ruled a column about 390 px wide and lettered the same paragraph at true size. The longest title took four lines and the price wrapped away from the word it belonged to.
- **The enlarged case:** Same column, everything a step and a half bigger. The count fell to roughly 26 characters a line, and the empty-state sentence became six short lines that read as a list rather than a sentence.
- **What I wrote down:** Not “cramped”. “Longest title takes four lines and pushes the date past the card edge”, and “at enlarged size the measure falls to about 26 and the paragraph stops holding together”. Two notes I can act on.

**The wrong turn:** The wrong turn is scaling the text down with the column so the drawing fits the page. It is tempting because it looks like the same screen, smaller, and because a test that passes is quicker than one that does not.

**What it costs:** Drawing at true size means the narrow version will not sit neatly beside the wide one, so you need two sheets and cannot compare them at a glance. That is what a test that can fail costs you.

**Still unknown:** Still unknown: how far a real reader has turned their text size up. A step and a half is a guess, and some people run considerably more than that every day.

- Render the block at about 390 px wide and again at enlarged text with your worst-case strings. Record every place the reading breaks down, including anything that now scrolls when it did not before.

**You should end up with:** What broke at narrow width and with enlarged text, using the real strings.

Worksheet fields for this step:

- At about 390 px with your worst-case strings: what breaks?
- With enlarged text: what breaks?

<details>
<summary>Help with this step</summary>

- **Stress test:** Putting your layout against the content and the settings most likely to break it, rather than the ones that suit it.
- **Enlarged text:** The reader’s own text-size setting turned up. It is their choice rather than yours, and many people keep it well above the default.
- **Wrapping:** A line running out of room and continuing on the next one. Where it happens decides whether a price still sits beside the word it belongs to.

Stuck starting? Put the longest title into the narrow column first; it usually breaks something immediately.

Is it enough? Each note names the string and what it did, such as a title taking four lines or a price wrapping away from its label.

</details>

#### 5. Decide and save

- Write your final values with a one-line reason each. Save the artefact and note the next unresolved question. Pause here if needed.

**You should end up with:** Final values with reasons, your open question, and the repair the Check questions asked for.

Worksheet fields for this step:

- Your final values, one line of reasoning each
- The question you have not answered
- Where the ruled column and renderings live
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Open question:** Something this work has not settled, written down on purpose so that later it is not mistaken for something you knew.
- **Repair:** The change a Check question asks you to make to your own work. You make it here and record what you did.

Stuck starting? Write each value as “X, because …” and delete any reason that is only about appearance.

Is it enough? Every value has a reason about reading rather than looks.

</details>

**Save and continue.** Saved for you: Your counts, values and reasons save as you type, on this device first and then online. Kept outside the app: The ruled column and any renderings stay in your own folder. Write the file name here so you can find them beside the numbers. What your creator sees: Your creator reads the values and the reasoning. The counted measure is the part worth his attention, because it is the one people usually estimate. Your next action: Open Your work and choose Ready for review. The next lesson recolours this same screen, so keep it as it stands.

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

Use the same content in both versions so you are comparing layout rather than writing.

</details>

<details>
<summary>Hint 2</summary>

Look for a button label that wraps poorly and a paragraph whose lines are hard to track; adjust one variable at a time.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Readability: measure, leading and the small screen.
Task: Test a long title, paragraph and action label in your screen. Compare two text-column widths without shortening the content to hide problems.
Challenge one thing at a time, and start with the mistake this lesson is about: “Generous line height always reads better.” Past a point it does the opposite: the lines stop cohering into a paragraph and the block reads as a list of separate sentences. Very loose leading also pushes content below the fold on a phone, which costs the reader more than the extra air gains them.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the three counts, the average and the final width and ask whether measure is measured, not estimated. Look at the two measured gaps and the restated ratio and ask whether line height and block spacing are stated as related decisions. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m03-l02-v1/work.md. Keep source observations separate from interpretations.
- Keep labelled paper originals or save readable images as before-01.jpg and after-01.jpg in the same folder. Preserve any editable digital source.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** Before/after examples show readable content at both widths and document the effect of measure and leading.

**Bring forward:** Keep the readable layout as the base for color decisions.


### Practice and pause points

- Gather worst-case content (~20 min): Collect the real strings your screen must hold: the longest title you can justify, a full instructor name, a date, a price, and one empty state. Write them down; you will use them for the rest of the module.
- Set the measure (~25 min): Set a maximum width for your body text and count the characters on a full line. Record the number. Adjust until it sits in the comfortable band, and note what constrains you.
- Tune leading and block spacing (~30 min): Choose line height as a ratio for body, headings and small text. Then set the gap between paragraphs so it clearly exceeds the gap between lines. Write both values.
- Stress it (~30 min): Render the block at about 390 px wide and again at enlarged text with your worst-case strings. Record every place the reading breaks down, including anything that now scrolls when it did not before.
- Decide and save (~15 min): Write your final values with a one-line reason each. Save the artefact and note the next unresolved question. Pause here if needed.

Pause after any step; save the artifact and next action.

**Free tool path.** On paper, rule a column to your chosen measure and letter one real paragraph inside it; count characters on three lines and average them. A local HTML file with a max-width and a line-height ratio is the faster route and lets you resize the window to see the measure change, but it is optional.

### Output

One content block with stated measure, line height and block spacing values, a worst-case content list, narrow and enlarged renderings, and a reason for each value.

### Checks

- Why is placeholder text a poor test of readability? Answer: It has unnaturally even word lengths and no numbers, names, long compounds or empty states. It hides wrapping, truncation and alignment problems that appear immediately with real strings, so a layout that only works with placeholder text has not been tested.
- Your paragraphs run edge to edge on a wide monitor. Is a smaller font the fix? Answer: No. Shrinking the text keeps the same excessive measure and makes it harder to read as well. Constrain the width of the text column instead, and leave the size where it is comfortable.
- Why express line height as a ratio? Answer: So it scales with the text. If a reader enlarges the base size, a ratio keeps the same proportional breathing room, whereas a fixed distance becomes proportionally tighter and can cause lines to collide.

### Rubric and remediation

**Measure is measured, not estimated**

Adequate evidence: An actual character count from a full line of the submitted block, with the chosen maximum width recorded.

- 0 — No measure is stated.
- 1 — A width is stated but no character count was taken.
- 2 — A character count and a maximum width are both recorded and sit in a defensible range.
- 3 — As adequate, and the write-up explains why this content justifies the top or bottom of the range rather than the middle.

If below 2: Count the characters, including spaces, on three different full lines of your own block and record the average. If it falls outside roughly 45–75, change the container width and count again. Show at recheck: The three counts, the average and the final width.

**Line height and block spacing are stated as related decisions**

Adequate evidence: Both values written down, with the paragraph gap visibly larger than the line gap, and a sentence connecting the leading choice to the measure.

- 0 — Neither value is stated.
- 1 — Values are stated but unrelated to the measure, or the paragraph gap does not exceed the line gap.
- 2 — Both are stated, the paragraph gap clearly wins, and the leading is justified by the line length.
- 3 — As adequate, and different leading is set for body, heading and small text with the reason for each.

If below 2: Measure the two gaps on your own artefact. If the paragraph gap is not clearly larger, increase it until the blocks separate at a glance, then restate your line height as a ratio. Show at recheck: The two measured gaps and the restated ratio.

**Real worst-case content was used**

Adequate evidence: A named list of the actual strings used, including at least one long title, one name, one number-bearing string and one empty state.

- 0 — Placeholder text only.
- 1 — Some real content, but no deliberately difficult strings.
- 2 — A worst-case list is present and visibly used in the rendering.
- 3 — As adequate, and one string was chosen because it is realistic for an Indian audience — a long transliterated name, a rupee amount or a second script — with what it changed.

If below 2: Replace every remaining placeholder string with real content, then add one string you expect to break the layout and keep the result even if it looks bad. Show at recheck: The rendering with real strings and the breaking string kept visible.

**Narrow and enlarged cases are reported honestly**

Adequate evidence: Specific named failures at 390 px and at enlarged text, or a stated method showing why there were none.

- 0 — Neither case was produced.
- 1 — One case was produced, or failures are described only as “fine”.
- 2 — Both cases are shown with specific named failures or a stated checking method.
- 3 — As adequate, and the report separates a genuine readability failure from a merely unattractive result.

If below 2: Produce the missing case and write each problem as an observable sentence naming the element and the behaviour. Then mark each one as readability or aesthetics. Show at recheck: Both renderings and the labelled problem list.

### Portfolio contribution

Practice. Readability values may be quoted inside a later case study's craft section, but a comfortable measure is not evidence that anyone completed a task.

### Assigned resources

- R03: [web.dev: typography](https://web.dev/learn/design/typography) — The line-length, line-height and vertical-rhythm parts of the typography chapter. Purpose: Supplies the reading-comfort reasoning behind measure and leading. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Fallback: R06.
- R16: [web.dev: learn responsive design](https://web.dev/learn/design/) — The layout and typography chapters, read only for how text reflows. Purpose: Shows what changes about the same text block at different widths. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Read chapters, not the whole site. Fallback: R15.

## Lesson 3: Colour that carries meaning, not decoration

Stable ID: m03-l03-v1. Core. Areas 1, 8. Optional effort ~120 min.

**Objective.** Define a working palette with a stated role for every colour, and prove that every piece of information it conveys survives when the colour is removed.

**Bring forward.** Your re-typeset screen and worst-case content list. You will recolour that screen, not design a new one.

Colour is the part of your existing craft that transfers least cleanly to product work, because on a screen colour is often the only thing carrying a status — and some of your readers will not receive it.

### Learn

Give every colour a job before you choose a value. A product palette is usually smaller than a brand palette: a surface, a primary text colour, a secondary text colour, one action colour, and a small set of status colours for error, warning and success. Colours without a job accumulate, and a palette of nineteen greys is not richer than one of four — it is unmaintainable and inconsistent across screens.

Colour alone must never be the only carrier of information. Some readers cannot distinguish the hues you are relying on, some are on a washed-out screen in daylight, and some have colour overridden entirely. The rule is practical rather than moral: whatever the colour says, something else must also say — an icon, a word, a pattern, a position. The quickest check is to view the screen in greyscale and ask what you can no longer tell.

Hue, saturation and lightness are separable controls, and lightness does most of the accessible work. Two colours of the same lightness will look distinct to you and nearly identical to a reader with reduced colour vision, or on a dim screen. When you need two states to be reliably distinguishable, change lightness, not just hue.

Colour also carries convention, and convention is regional and contextual rather than universal. Red for danger is widespread in interface work, but red in an Indian context is also celebratory, and green appears in both money and success meanings. Do not assume your audience reads your palette the way you do; state the meaning in words somewhere in the interface, and treat a colour convention as a hypothesis you could check rather than a fact.

**Common misconception.** “I checked the contrast, so my colour use is accessible.” Contrast and colour-dependence are two different failures. A red error message and a green success message can both pass contrast against white and still be indistinguishable from each other to a reader with red–green colour vision deficiency, because the problem is that the hue is the only difference.

### Worked example

A booking list showed status as a coloured dot: green confirmed, amber pending, red cancelled. In greyscale all three dots became mid-grey circles and the list became unreadable. The repair was not a new palette but a second channel: each dot kept its colour and gained a distinct shape and the status word beside it. The colour still helps people who can use it, and no longer carries the meaning alone.

#### Color meaning repair

Imagine a status list whose only distinction is a red or green dot. Redesign its meaning with text and shape as well as color, then apply that lesson to your screen.

**Where to practise:** Draw the recoloured screen and its greyscale copy on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: Your re-typeset screen and worst-case content list. You will recolour that screen, not design a new one.
- Create HaruCourse/Practice/m03-l03-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

</details>

#### 1. Read and list roles

**See it first.** Made-up example. Listing the roles for a class list, and finding that the list was really a list of colours.

- **What I wrote first:** Six lines: the teal, the warm grey, the near-black, the cream, the orange and the soft red. A set I liked, with a role written in beside each one afterwards.
- **Where that went wrong:** I was working backwards from the colours, so every colour found a job. The orange became “accent”, which is not a job. Nothing on the screen needed it.
- **What I did instead:** I put the colours away and listed what the screen has to say: this is a surface, this is body text, this is quieter text, this is the one thing to press, this class is full.
- **What the list came to:** Five roles. Two of my six colours had no role at all, and one role, quieter text, had no colour yet, because I had been making it by fading the body colour whenever I needed it.
- **The awkward one:** The orange kept asking to survive as “brand presence”. I let it go and wrote it into the box for step 2 as the place the palette felt too small.

**The wrong turn:** The wrong turn is starting from the colours you already have and finding a role for each. It is tempting because choosing colours is the enjoyable part, and any colour can be made to sound useful if you name its job late enough.

**What it costs:** A role-first list is duller and shorter than a palette, and it usually costs you a colour you were fond of. It is what stops a screen collecting colours nobody can explain a year later.

**Still unknown:** Still unknown: whether five roles hold once the screen gains a second status, such as a waiting list. New information may need a new role, and that is a decision to take deliberately rather than by reaching for another colour.

- Read the assigned colour material. Then write the roles your screen actually needs — surface, text, secondary text, action, and each status — before opening any colour picker.

**You should end up with:** The roles your screen needs, each with one value.

Worksheet fields for this step, revealed a few at a time in the app:

- Role 1 · what it is for, then the value you chose — Surface, body text, secondary text, the main action, and one status such as full or cancelled.
- Role 2 · what it is for, then the value you chose
- Role 3 · what it is for, then the value you chose
- Role 4 · what it is for, then the value you chose
- Role 5 · what it is for, then the value you chose
- Role 6 · what it is for, then the value you chose

<details>
<summary>Help with this step</summary>

- **Role:** What a colour is for: a surface, a body text, an action, a status. Not a name like “the blue”.
- **Status colour:** A colour carrying information, such as full, cancelled or confirmed. These are the ones that fail the greyscale test.

Stuck starting? List the roles before opening any colour picker; the list is usually shorter than you expect.

Is it enough? Every colour on your screen appears in the list with a stated job.

</details>

#### 2. Choose values

- Assign one value to each role. Record each as a value plus its role and, where relevant, its lightness relative to its neighbours. Any colour without a role is dropped now.

**You should end up with:** How many colours you removed, and where you wanted to add one back.

Worksheet fields for this step:

- How many colours you removed, and which you were tempted to add back

<details>
<summary>Help with this step</summary>

- **Palette:** The whole set of colours you allow yourself, each already tied to a role. Anything outside it does not go on the screen.
- **Decoration:** Colour used because it looks good rather than because it tells the reader something. It is the first thing to remove and the hardest to let go of.

Stuck starting? Apply the palette and count what disappeared.

Is it enough? You noted at least one place the palette felt too small; that is where the next lesson starts.

</details>

#### 3. Recolour the screen

**See it first.** Made-up example. Running the greyscale test on a class list and finding out what the colour was carrying.

- **What I believed:** The palette was fine: I had checked the contrast of every colour against its background and everything passed.
- **What the photocopy showed:** The red “Full” label and the green “2 places left” label came out as almost exactly the same grey. Side by side, they were indistinguishable.
- **Why contrast had not caught it:** Contrast asks whether text can be read against its background. It never asks whether two pieces of information can be told apart from each other.
- **What I added:** The word itself carries it: “Full” and “2 places left” already differ in text, so I made the label text the channel and used colour only as reinforcement.
- **The one that was harder:** The primary and secondary buttons were the same shape and size, distinguished only by fill. I gave the secondary an outline and left the fill to the primary.

**The wrong turn:** The wrong turn is assuming a contrast check covers colour dependence. They are different failures and the first one hides the second.

**What it costs:** Adding a word or an outline makes the screen slightly busier than a pure colour system. It is what keeps the information available to a reader who cannot separate those hues.

**Still unknown:** Still unknown: whether the greys I chose are far enough apart in lightness for the remaining distinctions. That is the next lesson’s measurement.

- Apply the palette to your screen from the previous lessons. Count the colours you removed and note where you were tempted to add one back.

**You should end up with:** Everything that becomes indistinguishable without colour, with a second channel for each.

**Try it with help.** A supplied pair from the same made-up screen. Version A distinguishes a cancelled class from a running one by colouring the title red instead of dark grey. Version B keeps both titles dark grey and adds the word “Cancelled” before the title, with a lighter strike through the date.

Which version survives the greyscale test, and why?

- **B, because the distinction is carried by a word and a mark, not by hue alone.** — Remove the colour and B still reads correctly. A becomes two identically grey titles, and the information is simply gone.
- A, provided the red passes contrast against the background. — Passing contrast means the red text is readable. It says nothing about whether a reader can tell it apart from the dark grey title beside it.
- Both, since a reader can click through to find out. — That makes the reader do extra work to recover information the screen already had, and only if they suspect something is different.
- Neither: only an icon is a reliable second channel. — A word is often the most reliable channel of all, and it needs no legend. Icons help, and they are not the only answer.

**Then:** Apply the same test to each of your own failures: what would still be true with the colour removed?

Worksheet fields for this step:

- What you can no longer tell apart
- Failure 1 · the second channel you added — A word, an icon, a shape, an underline, or a real difference in lightness.
- Failure 2 · the second channel you added

<details>
<summary>Help with this step</summary>

- **Second channel:** Another way the same information reaches the reader: a word, a shape, an icon, a position, or a clear difference in lightness.

Stuck starting? Photocopy the screen in black and white, or photograph it and turn the colour off. Then read it as if for the first time.

Is it enough? Nothing on the screen depends on hue alone to be understood.

</details>

#### 4. The greyscale test

- View or redraw the screen with all colour removed. Write down every piece of information you can no longer determine. For each, add a second channel — word, icon, shape or position — and record the change.

**You should end up with:** One colour meaning you are not certain your reader shares.

Worksheet fields for this step:

- One colour meaning you are not sure your reader shares — Red for danger, green for go, and much else, is learned rather than universal.

<details>
<summary>Help with this step</summary>

- **Convention:** A learned association, not a fact. Red for danger and green for success are widespread in some places and not universal.

Stuck starting? Look at your status colours and ask who taught you what they mean.

Is it enough? The doubt names a specific colour and the meaning you are relying on.

</details>

#### 5. Record and pause

- Save the palette table, the coloured and greyscale versions, and your repair list. Note one colour meaning you are unsure your audience shares.

**You should end up with:** Where the two versions live, and the repair the Check questions asked for.

Worksheet fields for this step:

- Where the coloured and greyscale versions live
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Greyscale copy:** The same screen with the colour taken out, kept beside the coloured one. The two together are the evidence, and neither says much on its own.
- **Repair:** The change a Check question asks you to make to your own work. You make it now and write down what you did.

Stuck starting? Keep the coloured and greyscale copies together; the pair is the evidence.

Is it enough? Both versions exist and are named.

</details>

**Save and continue.** Saved for you: Your roles, values and greyscale findings save as you type, on this device first and then online. Kept outside the app: The coloured and greyscale versions stay in your own folder. Keep them together and name both here. What your creator sees: Your creator reads the palette roles and the greyscale failures. The repair list is the part that shows the reasoning. Your next action: Open Your work and choose Ready for review. The next lesson measures the contrast of this palette, so keep the values exactly as recorded.

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

Cover the colored mark and check whether the status remains understandable.

</details>

<details>
<summary>Hint 2</summary>

Color associations depend on context. Label your assumption rather than calling a color universally positive.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Colour that carries meaning, not decoration.
Task: Imagine a status list whose only distinction is a red or green dot. Redesign its meaning with text and shape as well as color, then apply that lesson to your screen.
Challenge one thing at a time, and start with the mistake this lesson is about: “I checked the contrast, so my colour use is accessible.” Contrast and colour-dependence are two different failures. A red error message and a green success message can both pass contrast against white and still be indistinguishable from each other to a reader with red–green colour vision deficiency, because the problem is that the hue is the only difference.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the completed table and a screen using only its entries and ask whether every colour has a stated role. Look at the greyscale before, the repair list and the greyscale after and ask whether no information depends on colour alone. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m03-l03-v1/work.md. Keep source observations separate from interpretations.
- Keep labelled paper originals or save readable images as before-01.jpg and after-01.jpg in the same folder. Preserve any editable digital source.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** Status meaning survives without hue, with semantic roles and exact candidate color values recorded.

**Bring forward:** Bring the foreground/background pairs to measured contrast checking.


### Practice and pause points

- Read and list roles (~25 min): Read the assigned colour material. Then write the roles your screen actually needs — surface, text, secondary text, action, and each status — before opening any colour picker.
- Choose values (~25 min): Assign one value to each role. Record each as a value plus its role and, where relevant, its lightness relative to its neighbours. Any colour without a role is dropped now.
- Recolour the screen (~30 min): Apply the palette to your screen from the previous lessons. Count the colours you removed and note where you were tempted to add one back.
- The greyscale test (~25 min): View or redraw the screen with all colour removed. Write down every piece of information you can no longer determine. For each, add a second channel — word, icon, shape or position — and record the change.
- Record and pause (~15 min): Save the palette table, the coloured and greyscale versions, and your repair list. Note one colour meaning you are unsure your audience shares.

Pause after any step; save the artifact and next action.

**Free tool path.** A greyscale photocopy or a phone photo converted to black and white is a complete test; no software is required. If you are working in a local HTML file, a temporary CSS grayscale filter over the page does the same thing and is easy to remove.

### Output

A palette table of role, value and meaning; the recoloured screen; a greyscale version; and a list of information that failed the greyscale test with the second channel you added for each.

### Checks

- Why is passing a contrast ratio not the same as not relying on colour? Answer: Contrast compares a colour against its background for legibility. Colour-dependence is about whether two pieces of information are distinguishable from each other. Two hues can each have excellent contrast against the page and still be indistinguishable from one another.
- Two statuses must be reliably distinguishable. What changes first? Answer: Lightness, plus a non-colour channel such as a word, icon or shape. Changing only hue is the option most likely to fail for a reader with colour vision deficiency or on a poor screen.
- Is “red means error” a fact you can build on? Answer: It is a widespread convention, not a universal meaning, and it carries other associations in different contexts including celebration. Treat it as a reasonable default that still needs a word beside it, and as something you could check with a reader rather than assert.

### Rubric and remediation

**Every colour has a stated role**

Adequate evidence: A table mapping each palette entry to a role and a meaning, with no colour appearing in the screen that is absent from the table.

- 0 — No palette is stated.
- 1 — A palette exists but some entries have no role, or the screen uses colours outside it.
- 2 — Each entry has a role and meaning, and the screen uses only those entries.
- 3 — As adequate, and the write-up names a colour that was removed and what it had been doing implicitly.

If below 2: Sample every distinct colour actually present in your screen and add it to the table. Any row you cannot give a role to must be replaced by an existing role's colour. Show at recheck: The completed table and a screen using only its entries.

**No information depends on colour alone**

Adequate evidence: A greyscale version of the screen plus a list of what became indeterminate, each with the second channel added.

- 0 — No greyscale check was done.
- 1 — A greyscale version exists but failures were not listed or not repaired.
- 2 — Failures are listed and each has a second channel added.
- 3 — As adequate, and the repaired screen is shown again in greyscale to confirm the fix rather than assuming it.

If below 2: Produce the greyscale version and, for every status or category, ask what tells you which one it is. Add a word or shape for each failure, then re-check in greyscale. Show at recheck: The greyscale before, the repair list and the greyscale after.

**Distinctions use lightness, not hue alone**

Adequate evidence: For each pair of states that must be told apart, a note of how their lightness differs, not only their hue.

- 0 — State colours differ in hue only, with no lightness noted.
- 1 — Lightness is mentioned but not for the pairs that actually need separating.
- 2 — Each critical pair differs in lightness and this is recorded.
- 3 — As adequate, and one pair is deliberately given the largest separation because confusing it would be the most costly.

If below 2: List your state pairs. For any pair whose members look the same in greyscale, move one of them lighter or darker until they separate, and record the new values. Show at recheck: The state-pair list with lightness values and a greyscale view.

**Colour meanings are stated as conventions, not facts**

Adequate evidence: At least one sentence identifying a colour meaning the audience may not share, and how it could be checked.

- 0 — Colour meanings are asserted as universal.
- 1 — A caveat is present but generic.
- 2 — A specific meaning is named as a convention with a way to check it with a reader.
- 3 — As adequate, and the interface itself states the meaning in words so the convention is not load-bearing.

If below 2: Pick the one colour in your palette whose meaning you are least sure about. Write who might read it differently and the smallest question you could ask a real person to find out. Show at recheck: The named colour, the alternative reading and the question.

### Portfolio contribution

Practice, with one reusable artefact. The palette table can become part of a design-system section later. The greyscale finding is a craft observation, not user research, and must not be described as a tested accessibility outcome.

### Assigned resources

- R29: [web.dev: colour and contrast](https://web.dev/learn/accessibility/color-contrast) — Colour perception and the HSL model, colour vision deficiency, and the section on not conveying information by colour alone. Purpose: Explains why lightness separates more reliably than hue and what the colour-alone rule means in practice. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. The page carries no code samples, so any CSS in your exercise is your own. Fallback: R30.

## Lesson 4: Contrast you can defend

Stable ID: m03-l04-v1. Core. Areas 1, 8. Optional effort ~120 min.

**Objective.** Measure and record the contrast of every text and essential non-text element on one screen against the stated thresholds, and repair the failures without discarding the palette.

**Bring forward.** Your palette table and recoloured screen from the previous lesson.

“It looks readable to me” is the weakest sentence in a design review. A measured ratio is a number you can put in a handoff, defend to an engineer and re-check after someone changes a colour.

### Learn

The minimum contrast requirement is a ratio between the lightness of text and its background. Ordinary body text needs at least 4.5:1. Large text — from around 18 point, or 14 point when bold — needs at least 3:1, because larger, thicker letterforms remain legible at lower contrast. These are floors for a wide range of readers, not targets for good design, and comfortable reading often sits well above them.

The requirement has genuine exceptions, and knowing them stops you from either over-claiming or over-correcting. Text that is purely decorative, text that is part of a logo or brand name, and text in a component that is currently inactive are not held to the ratio. An inactive control is the one designers most often get wrong in both directions: greying it out is legitimate, but if the reader cannot tell what the control would do, the problem is comprehension rather than conformance.

Measure the pair that actually renders, not the pair you intended. Text over an image, text over a gradient, semi-transparent overlays and a hover state that changes the background are all cases where the real background differs from the one in your palette. Take the worst point of the actual composite, not the average, because a caption is illegible at the point where the photograph is brightest, not on average.

Contrast is a floor for legibility, not a proof of readability. A screen can pass every ratio and still be exhausting: too-long lines, insufficient leading, an over-saturated background that vibrates against the text, or an all-capitals paragraph. Report the ratio as one piece of evidence alongside your own reading test, and never describe a passing ratio as an accessibility outcome for real users.

**Common misconception.** “Grey placeholder text inside a form field is fine because it is only a hint.” Placeholder text is real text that a reader must read to know what to type, and it is not a decorative or inactive case. If it is too faint to read it fails, and the more robust fix is usually a visible label rather than a darker hint.

### Worked example

A workshop card used mid-grey #999999 body text on white — about 2.8:1, below the 4.5:1 floor. That grey also fails the 3:1 large-text threshold, so enlarging it alone cannot repair the contrast. The designer darkened the heading color until a new measurement exceeded 3:1, and moved body text to a darker grey that measures about 7:1. The visual softness the designer wanted was preserved exactly where it was legitimate, and removed where it was not.

#### Contrast evidence lab

Measure the actual foreground/background pairs in your design, repair failing pairs and measure them again. A visual impression is not a ratio.

**Where to practise:** Use the contrast calculator in this lesson: enter each pair of six-digit hex values, read the ratio, and record it in the table below. It works offline and needs no account.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter, and note the file location in Your work.

Tools: Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: Your palette table and recoloured screen from the previous lesson.
- Create HaruCourse/Practice/m03-l04-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

</details>

<details>
<summary>Optional video paired with step 1</summary>

[Web Accessibility Perspectives: Colors with Good Contrast](https://www.w3.org/WAI/perspective-videos/contrast/) — W3C Web Accessibility Initiative, 55 s, English, English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page. Whole video, 55 seconds. Watch from 0:15 to 0:50.

What to notice:

- 0:15–0:20 — Poor contrast makes navigating, reading and interacting a real pain.
- 0:20–0:30 — Enough contrast is needed between foreground and background, and not only for text: links, icons and buttons too.
- 0:30–0:34 — If it is important enough to be seen, it needs to be clear.
- 0:34–0:41 — It is essential for people with low contrast sensitivity, which becomes more common with age.
- 0:48–0:50 — It also helps in different lighting conditions.

**Then:** Straight after watching, list every place on your screen where colour alone carries meaning, before you measure anything. The video names links, icons and buttons as well as text.

**Without the video:** No video needed: the assigned thresholds page says the same in text. List the coloured elements first, then measure.

Generic scenes and pages, not your palette. It gives no numbers; the thresholds and the measuring are your own step. Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use. Checked 7 September 2026.

</details>

#### 1. Read the thresholds and exceptions

- Read the assigned understanding page. Write the two thresholds and the three exceptions in your own words, including what counts as large text.

**You should end up with:** The two thresholds and the exceptions, written in your own words.

Worksheet fields for this step:

- Normal text needs at least…
- Large text needs at least… and “large” means… — Say the size and weight that qualify, not just the ratio.
- The exceptions, in your own words — Which text is exempt, and why placeholder text is not one of them.

<details>
<summary>Help with this step</summary>

- **Contrast ratio:** A number comparing the lightness of two colours, from 1 (identical) to 21 (black on white).
- **Large text:** A defined size and weight above which a lower ratio is allowed. Write the actual definition; guessing it is how failures pass.

Stuck starting? Read the assigned page and write each threshold as a sentence you could say to someone else.

Is it enough? Your definition of large text names a size and a weight.

</details>

#### 2. Measure everything

**See it first.** Made-up example. Measuring the awkward element on a booking form rather than the easy ones.

- **What I measured first:** The headings and body text. Both were dark grey on near-white and passed comfortably, which felt like progress.
- **What I nearly skipped:** The placeholder text inside the email field, a light grey hint reading “you@example.com”. It looked like decoration.
- **Why I measured it anyway:** A reader has to read it to know what to type, so it is real text doing real work. It came out at 2.4 against the field background.
- **What I did about it:** Darkening the hint would have helped and kept a weakness: the hint disappears the moment typing starts. I added a visible label above the field and kept the hint as an example.
- **What that changed in the table:** The row now records the label, not the placeholder, as the thing carrying the instruction — and the label passes at 7.1.

**The wrong turn:** The wrong turn is measuring only the text that looks like content. The failures live in hints, disabled labels, small print and anything sitting over an image.

**What it costs:** Adding a visible label costs vertical space on a phone, which is exactly what the earlier lessons were protecting. It buys an instruction that survives typing.

**Still unknown:** Still unknown: the effective contrast of anything over a photograph, which varies pixel by pixel and needs a separate check.

- Build a table listing every text element on your screen: its colour, its actual background, its size and weight, the applicable threshold and the measured ratio. Include placeholder text, disabled states and any text over an image.

**You should end up with:** Every text element measured, including placeholder text and anything over an image.

Worksheet fields for this step, revealed a few at a time in the app:

- Element 1 · what it is, its colour, its background, its size, the threshold and the measured ratio — Use the calculator for the ratio. Record the number it gives, not a rounded version.
- Element 2 · what it is, its colour, its background, its size, the threshold and the measured ratio
- Element 3 · what it is, its colour, its background, its size, the threshold and the measured ratio
- Element 4 · what it is, its colour, its background, its size, the threshold and the measured ratio
- Element 5 · what it is, its colour, its background, its size, the threshold and the measured ratio

<details>
<summary>Help with this step</summary>

- **Effective background:** What is actually behind the text after transparency and images are flattened. Measure that, not the colour you intended.

Stuck starting? List the elements first, then measure them in order. The calculator is in this section.

Is it enough? The table includes at least one element you were tempted to skip.

</details>

#### 3. Repair the failures

- For each failing row, choose a repair: darken the text, lighten the background, enlarge the text so the large-text threshold applies, or add a solid backing behind text on an image. Record which repair you chose and why.

**You should end up with:** A repair for each failure, with the new ratio, keeping the palette’s intent.

**Try it with help.** A supplied failing row from the same made-up screen: a secondary link, #7a8b80 on #fffefb, 14 regular, needs 4.5, measured 3.1.

Which repair is soundest?

- **Darken the link colour until it passes, keeping it recognisably the same hue.** — It fixes the failure at its source and keeps the palette’s intent: the link still reads as the secondary colour, just darker.
- Enlarge the link to 19 semibold so the large-text threshold applies. — Legitimate in principle and wrong here: a secondary link enlarged past the body text now outranks the content it sits beside.
- Change the background of the whole screen to pure white. — It buys a fraction of a ratio point and changes every other element on the screen to fix one link.
- Make the link black, which certainly passes. — It passes and removes the distinction between a link and body text, which is information the reader was using.

**Then:** Choose repairs for your own failures the same way: fix the element, keep what the colour was doing.

Worksheet fields for this step:

- For each failure: what you changed and the new ratio — Darken the text, lighten the background, enlarge the text so the large-text threshold applies, or put a solid backing behind it.
- How you kept the palette’s intent while repairing — Repairs that flatten every colour to black on white pass the check and lose the design.

<details>
<summary>Help with this step</summary>

- **Repair:** The specific edit that takes one failing element above its threshold, written down with the new measured number beside it. A general intention to improve the colours is not a repair.
- **Palette intent:** What each colour was doing before you touched it. A repair that meets the number and erases the distinction the colour carried has traded one failure for another.

Stuck starting? Take the worst-failing row first; it usually forces the largest decision.

Is it enough? Every failing row has a new measured ratio beside it.

</details>

#### 4. Read it yourself

**See it first.** Made-up example. Reading a printed class list at a window, and nearly repairing the wrong thing.

- **What I expected:** Every row in my table now met its threshold, so I carried the printed screen to the window mostly to confirm it.
- **What happened:** The 12 point labels under each class were unreadable at arm’s length in the daylight. They had measured 5.2, comfortably above the number they needed.
- **My first move:** Push every grey towards black. It would certainly help something, and I had already changed three elements before I stopped.
- **What stopped me:** The label was not failing on its colour. It was failing on its size, and on light washing across the paper. Darkening it would have flattened the palette to fix a fault that was somewhere else.
- **What I wrote instead:** “12 point labels meet 5.2 and are still unreadable outdoors at arm’s length.” Then one repair: the labels moved up to 14, which is a change to the type ladder rather than to any colour.

**The wrong turn:** The wrong turn is taking what your eyes find as a signal to raise every ratio. It is tempting because darkening is the repair you already know how to make, and it always improves something a little.

**What it costs:** Moving the labels from 12 to 14 costs vertical space and pushes roughly one class per screen off the bottom. That is a real loss, taken because labels nobody can read are a larger one.

**Still unknown:** Still unknown: how the same page reads for eyes that are not mine. One person at one window on one afternoon is a hint about the screen, not a finding about readers.

- Read the repaired screen at arm's length, and if possible outdoors or with the screen brightness lowered. Note anything that still reads poorly despite passing, and anything you over-corrected into harshness.

**You should end up with:** What your own eyes find that the numbers did not.

Worksheet fields for this step:

- At arm’s length, with the brightness low or outdoors: what still reads poorly? — The numbers are a floor, not a promise. Your own eyes find things they miss.

<details>
<summary>Help with this step</summary>

- **Arm’s length:** Holding the page or screen as far away as a reader actually would, rather than close up the way you hold it while working on it.
- **Floor:** A minimum rather than a target. A ratio that clears its threshold is the least that was acceptable, not evidence that the text reads well.

Stuck starting? Take the screen to a window, or turn the brightness down, and read it at arm’s length.

Is it enough? You noted at least one thing that passes the number and still reads poorly, or said plainly that nothing did.

</details>

#### 5. Record and pause

- Save the measurement table before and after, and write one sentence separating what the numbers establish from what they do not.

**You should end up with:** One sentence bounding what the numbers show, and the repair the Check questions asked for.

Worksheet fields for this step:

- One sentence separating what the numbers establish from what they do not
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Bounding a claim:** Saying plainly what your evidence covers and what it leaves out, in the same sentence, so a measurement is not read later as a promise.
- **Opaque:** A colour with nothing showing through it. Your measured ratios hold for opaque pairs; text over a photograph or a partly see-through panel is a separate question.

Stuck starting? Finish “these measurements establish … and they do not establish …”.

Is it enough? The sentence does not claim the screen is accessible.

</details>

**Save and continue.** Saved for you: The table, the repairs and your reading notes save as you type, on this device first and then online. The calculator itself stores nothing. Kept outside the app: The before and after screens stay in your own folder. Record the hex pairs here rather than relying on a photograph, which cannot establish exact colours. What your creator sees: Your creator reads the measurements, the repairs and your bounding sentence. The awkward rows are the ones worth his attention. Your next action: Open Your work and choose Ready for review. The next lesson regroups the densest screen you have, using space before anything else.

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

Use the offline contrast calculator in this lesson’s Do section. It accepts opaque six-digit sRGB colors; classification and exceptions come from R30. Record exact input values and the unrounded-threshold result, not only the displayed ratio.

<details>
<summary>Hint 1</summary>

Read the assigned W3C criterion before selecting a threshold; text and non-text uses differ.

</details>

<details>
<summary>Hint 2</summary>

For paper work, specify candidate hex pairs and measure them in the supplied local calculator. Do not measure photographed swatches as exact design colors.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Contrast you can defend.
Task: Measure the actual foreground/background pairs in your design, repair failing pairs and measure them again. A visual impression is not a ratio.
Challenge one thing at a time, and start with the mistake this lesson is about: “Grey placeholder text inside a form field is fine because it is only a hint.” Placeholder text is real text that a reader must read to know what to type, and it is not a decorative or inactive case. If it is too faint to read it fails, and the more robust fix is usually a visible label rather than a darker hint.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the completed table with the awkward cases present and ask whether every text element is measured, including the awkward ones. Look at the table with thresholds and justifications per row and ask whether the correct threshold is applied per element. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m03-l04-v1/work.md. Keep source observations separate from interpretations.
- Keep labelled paper originals or save readable images as before-01.jpg and after-01.jpg in the same folder. Preserve any editable digital source.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** Every claimed pass names values, method and applicable criterion; repairs have new measurements.

**Bring forward:** Save approved pairs for the token sheet. A contrast check alone is not a full accessibility audit.


### Practice and pause points

- Read the thresholds and exceptions (~25 min): Read the assigned understanding page. Write the two thresholds and the three exceptions in your own words, including what counts as large text.
- Measure everything (~30 min): Build a table listing every text element on your screen: its colour, its actual background, its size and weight, the applicable threshold and the measured ratio. Include placeholder text, disabled states and any text over an image.
- Repair the failures (~25 min): For each failing row, choose a repair: darken the text, lighten the background, enlarge the text so the large-text threshold applies, or add a solid backing behind text on an image. Record which repair you chose and why.
- Read it yourself (~25 min): Read the repaired screen at arm's length, and if possible outdoors or with the screen brightness lowered. Note anything that still reads poorly despite passing, and anything you over-corrected into harshness.
- Record and pause (~15 min): Save the measurement table before and after, and write one sentence separating what the numbers establish from what they do not.

Pause after any step; save the artifact and next action.

**Free tool path.** Use the local contrast calculator in this lesson’s Do section: enter the six-digit foreground and background hex values, record the ratio and compare with the applicable assigned criterion. It works offline without an account. For paper work, specify intended hex pairs and measure those; a photograph or printed swatch does not establish exact design-color contrast. Transparent or image backgrounds need separate effective-color checks.

### Output

A contrast table covering every text and essential non-text element with colour, background, size, threshold and measured ratio, before and after repair, plus a note on your own reading test.

### Checks

- Your heading is 24 px and measures 3.4:1. Does it pass? Answer: Yes, against the large-text threshold of 3:1, provided it genuinely qualifies as large text at that size and weight. Record which threshold you applied and why, because the same colour on 14 px body text would fail.
- A disabled button's label measures 2:1. Is that a defect to fix? Answer: Not a contrast failure — inactive components are excepted. It may still be a design problem if the reader cannot tell what the control is or why it is unavailable. Say which of the two you are claiming rather than blurring them.
- Does a screen of passing ratios prove the screen is accessible? Answer: No. It establishes one measurable floor for text legibility. It says nothing about keyboard access, semantics, focus order, motion or comprehension, and it is not evidence gathered from disabled readers.

### Rubric and remediation

**Every text element is measured, including the awkward ones**

Adequate evidence: A table row for each text element, explicitly including placeholder text, disabled labels, and any text over an image or gradient.

- 0 — No measurements were taken.
- 1 — Only obvious body text was measured; overlays, placeholders or disabled states are missing.
- 2 — Every text element appears, including the awkward cases, with its actual background.
- 3 — As adequate, and text over an image is measured at its worst point with that point identified.

If below 2: Walk the screen element by element and add the missing rows. For anything over an image or gradient, measure at the lightest and darkest points and record the worse of the two. Show at recheck: The completed table with the awkward cases present.

**The correct threshold is applied per element**

Adequate evidence: Each row names the threshold used and, for large text, the size and weight that justify it.

- 0 — No thresholds are recorded.
- 1 — One threshold is applied to everything, or large text is claimed without size and weight.
- 2 — Each row states its threshold with the justification for the large-text rows.
- 3 — As adequate, and an exception is correctly claimed for a decorative, logo or inactive case with the reason.

If below 2: For every row you marked as large text, record the actual size and weight and confirm it qualifies. Reclassify anything that does not and re-check the ratio against 4.5:1. Show at recheck: The table with thresholds and justifications per row.

**Repairs preserve intent rather than flattening the palette**

Adequate evidence: For each failing element, the repair chosen and the reason, showing at least one repair that is not simply “make it black”.

- 0 — Failures were not repaired.
- 1 — All failures were repaired by maximising contrast, losing the palette's character.
- 2 — Repairs vary by situation and each has a stated reason.
- 3 — As adequate, and one colour is deliberately retained where it legitimately passes, with the threshold that makes that true.

If below 2: Revisit any element you set to pure black or white. Ask whether a darker version of the intended hue, a larger size or a solid backing would pass instead, and record the alternative you chose. Show at recheck: The repair list with reasons and at least one non-maximal repair.

**The claim made from the numbers is bounded**

Adequate evidence: An explicit sentence stating what the measurements establish and what they do not, without describing the screen as accessible.

- 0 — The screen is described as accessible on the strength of the ratios.
- 1 — A vague caveat is present.
- 2 — The claim is bounded to text legibility and names at least two things not established.
- 3 — As adequate, and the next check that would extend the claim is named — for example the keyboard and screen-reader pass in m11.

If below 2: Rewrite your summary sentence so it says exactly what was measured, on what, by what method, and lists what remains unknown. Show at recheck: The rewritten bounded claim.

### Portfolio contribution

Practice, and a reusable method. A contrast table is legitimate craft evidence in a case study. It is not accessibility research and must never be presented as testing with disabled participants.

### Assigned resources

- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The intent, the 4.5:1 and 3:1 thresholds, the large-text definition, and the incidental and logotype exceptions. Purpose: The normative reference behind every number in your table. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. This is the understanding document, not the standard itself; it explains rather than certifies. Fallback: R29.
- R29: [web.dev: colour and contrast](https://web.dev/learn/accessibility/color-contrast) — The contrast-ratio section only, re-read as the practical companion. Purpose: Connects the thresholds to choosing values in a palette. Effort: 10–15 selected min. Free reading, no account. Verified 2026-09-06. Fallback: R30.

## Lesson 5: Gestalt grouping, and where it stops working

Stable ID: m03-l05-v1. Core. Areas 1, 8. Optional effort ~120 min.

**Objective.** Re-group one dense screen using proximity, similarity and common region, and produce a case where the grouping principles predict the wrong reading.

**Bring forward.** Your recoloured, contrast-repaired screen, and the densest screen from your Module 1 set.

Grouping is what makes a screen legible before anyone reads a word of it, and it is the fastest fix available when a layout feels confusing — but it is a description of perception, not a law you can apply mechanically.

### Learn

Proximity is the strongest grouping signal you control: things placed near each other are read as belonging together, and the eye applies this before it reads any label. This is why the gap around a group must exceed the gap inside it, and why an evenly spaced screen reads as one undifferentiated mass no matter how carefully you named the sections.

Similarity groups by shared appearance — the same colour, shape, size or weight reads as the same kind of thing. This cuts both ways. Two unrelated elements styled alike will be read as a set, so a decorative badge that happens to look like your status pills will be read as a status. Similarity is also how you can group things that cannot be placed near each other, such as items in different columns of a table.

Common region is often the cleanest tool and the most over-used: a shared background, a card or an enclosing border binds whatever is inside it, and it overrides proximity. That strength is exactly the risk. Wrapping every group in a card produces a screen of boxes where nothing is subordinate to anything else, and you have spent your strongest grouping signal on your least important distinction. Prefer space first, then a shared background, then a visible border.

These principles describe how perception tends to work; they do not tell you what the reader should conclude. Grouping can be correct perceptually and wrong for the task — a well-grouped set of options is still wrong if the option someone actually needs is buried in the third group. Treat a grouping decision as a hypothesis about reading order that a five-second look by another person can challenge, and remember that the source pages state these as laws without stating their limits.

**Common misconception.** “Cards make a layout organised.” Cards make a layout enclosed, which is different. When everything is a card, common region no longer distinguishes anything, the screen gains borders and padding that cost vertical space on a phone, and the actual hierarchy — what matters most — becomes invisible because every item is presented as a peer.

### Worked example

A workshop detail screen listed date, time, location, price, instructor and materials as six evenly spaced lines, and readers kept missing the materials note. Regrouping without changing a single word: date and time drew together as one “when” group, location stood alone, price and instructor became a “details” pair, and materials moved into its own region with a shared background. Total height changed by a few pixels; the materials line stopped being missed by the two people asked to find it — which is a signal, not a finding.

#### Cut-and-sort layout experiment

Cut workshop information into separate paper pieces and regroup it using space first. Compare two groupings without rewriting any words.

**Where to practise:** Draw the dense screen before and after regrouping on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: Your recoloured, contrast-repaired screen, and the densest screen from your Module 1 set.
- Create HaruCourse/Practice/m03-l05-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

</details>

#### 1. Read the assigned law pages

- Read the proximity, similarity, common region, Prägnanz and uniform connectedness pages. For each, write the one sentence you would use to explain it to an engineer.

**You should end up with:** Five principles in your own sentences.

Worksheet fields for this step:

- Proximity, similarity, common region, Prägnanz and uniform connectedness — one sentence each — Write them as you would say them to someone who has never heard the words.

<details>
<summary>Help with this step</summary>

- **Proximity:** Things near each other are read as belonging together. The cheapest and strongest tool you have.
- **Common region:** Things inside the same enclosed area are read as a set, even when they are far apart.
- **Uniform connectedness:** Things joined by a line or a shared block are read as connected, which can override proximity.

Stuck starting? Read the assigned pages and write each sentence without using the principle’s own name in it.

Is it enough? Someone who has never read the pages could follow each sentence.

</details>

#### 2. Diagnose the dense screen

**See it first.** Made-up example. Diagnosing a dense class list before touching it.

- **What I was about to do:** Put every class in a bordered card. It is the reflex, and it looks organised in a screenshot.
- **What I did instead:** Printed the screen and circled, in pencil, what my eye grouped in the first second without reading.
- **What the circles showed:** The price of the first class had drifted closer to the second title than to its own. My eye grouped it downward, with the wrong class.
- **Why that mattered:** No border would have fixed it, because the fault was distance. Boxing the wrong grouping just makes the wrong grouping official.
- **What fixed it:** Six points of space moved from inside the block to between the blocks. One change, no new lines, nothing enclosed.

**The wrong turn:** The wrong turn is reaching for cards before diagnosing. When everything is a card, common region stops distinguishing anything and the screen gains borders that cost space on a phone.

**What it costs:** Diagnosing first costs ten minutes and produces no visible progress. It is what stops you decorating a grouping problem instead of solving it.

**Still unknown:** Still unknown: whether another reader groups it the way I do. The question in the last step is how to find out.

- On your densest screen, draw around what you believe the reader groups together at a glance. Mark every place where your intended grouping and the perceived grouping differ.

**You should end up with:** The groups a reader actually sees, and every place that disagrees with what you meant.

Worksheet fields for this step:

- Circle the groups you think a reader sees at a glance, and list them here — What the screen currently says, not what you meant it to say.
- Where your intended grouping and the perceived grouping disagree

<details>
<summary>Help with this step</summary>

- **Perceived grouping:** What a reader’s eye puts together in the first second, before any of the words are read.
- **Intended grouping:** What you meant to belong together when you made the screen.
- **Mismatch:** A place where those two disagree. The mismatch, not the screen’s appearance, is the problem you are fixing.

Stuck starting? Print or redraw the screen and circle what you group at a glance, before you read any of it.

Is it enough? The mismatch list names distances or arrangements, not opinions about style.

</details>

#### 3. Re-group with the cheapest tool first

- Fix each mismatch using space first. Only where space fails, add a shared background. Only where that fails, add a border. Record which tool each group needed.

**You should end up with:** Each group fixed with the cheapest tool that worked, and a reason wherever you used a border.

**Try it with help.** A supplied problem from the same made-up screen: a class title, its date, its price and a Reserve button all sit with identical gaps between them, so the button reads as another line of information rather than the action.

What is the cheapest tool that fixes it?

- **Space: tighten the gaps between title, date and price, and open a clearly larger gap before the button.** — Proximity does the whole job. The three facts become one group and the button separates itself as something different, with nothing added to the screen.
- A shared background behind the title, date and price. — It would work and it adds a surface, a colour decision and padding for something space alone can solve.
- A border around the whole class block. — The most expensive option: a new line on the screen, more vertical space on a phone, and the same fix space would have produced.
- Make the button a different colour so it stands out. — Colour distinguishes it and leaves the grouping unchanged, so the button still reads as a member of the same list.

**Then:** Fix your own mismatches in the same order, and only record a border where you can say what space failed to do.

Worksheet fields for this step:

- Group 1 · what you changed and which tool it needed
- Group 2 · what you changed and which tool it needed
- Group 3 · what you changed and which tool it needed
- Anywhere you reached for a border, and why space was not enough

<details>
<summary>Help with this step</summary>

- **Cheapest tool:** The one that adds least to the screen. Space costs nothing; a background costs a surface; a border costs a line and padding.

Stuck starting? Take your worst mismatch and try moving things before adding anything.

Is it enough? Every border you used has a written reason.

</details>

#### 4. Build the counterexample

**See it first.** Made-up example. Writing the counterexample for a class list, and finding that the first thing I wrote was not a counterexample at all.

- **My first attempt:** I wrote that the border around the section makes the screen look boxy, and called that a case where common region misleads.
- **Why it did not count:** That is a complaint about how it looks. A counterexample is where the principle holds perfectly and the reading it produces is still wrong.
- **Where I looked instead:** At similarity, and at two things sharing a treatment without sharing a purpose. I found small capitalised labels: “Sold out” on one class and “Book now” on another, in the same size and weight.
- **What the reader gets:** Similarity does exactly what it is meant to do and puts the two labels in one set. So “Sold out” reads as something to press, and the one class that cannot be booked looks the most available on the screen.
- **What I wrote down:** The pair, the reading it produces, and the fact that following the principle more carefully would not avoid it. The repair is to stop treating the two labels alike.

**The wrong turn:** The wrong turn is writing down something you dislike about the screen and calling it a counterexample. It is easy to find and it fills the box, and it teaches you nothing, because your taste was never what misled the reader.

**What it costs:** Breaking the similarity means “Sold out” and “Book now” no longer look like one family of labels. The screen is less tidy, and you now have two small-label treatments to keep track of instead of one.

**Still unknown:** Still unknown: how many other pairs on the screen share a treatment without sharing a purpose. I found this one by looking, and there is no way to be sure it is the only one.

- Construct one small case where following a grouping principle produces the wrong reading — for example similarity making an unrelated element look like a status, or a card hiding the one item the task needs. Show it and explain the failure.

**You should end up with:** One case where following a principle gives the wrong reading.

Worksheet fields for this step:

- One case where following a principle produces the wrong reading — For example, similarity making an unrelated element look like part of a set.

<details>
<summary>Help with this step</summary>

- **Counterexample:** A case where a principle holds and the reading it produces is still wrong. It is not a case where you followed the principle badly.
- **Similarity:** Things that look alike are read as one set, even when they have nothing to do with each other. It is the principle that misleads most often.

Stuck starting? Look for two things that look alike but are not related, or two related things forced apart by a container.

Is it enough? The counterexample is from your own screen, not a textbook.

</details>

#### 5. Record and pause

- Save the before, the after, the tool-per-group note and the counterexample. Write the question you would ask another person to test your grouping.

**You should end up with:** A question to test your grouping with a person, where the versions live, and the repair the Check questions asked for.

Worksheet fields for this step:

- The question you would ask another person to test your grouping
- Where the before and after live
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **At a glance:** The first second of looking, before reading. A test question has to be answerable in that second or it is testing something else.
- **Before and after:** The two versions of the same screen: the one you diagnosed and the one you regrouped. Keeping both is what makes the change checkable later.
- **Repair:** The small change a Check question asks you to make. You record what you actually altered, not whether you agreed.

Stuck starting? Write a question that can be answered in one glance, without reading the screen closely.

Is it enough? The question could be answered wrongly; that is what makes it a test.

</details>

**Save and continue.** Saved for you: Your diagnosis, tools and counterexample save as you type, on this device first and then online. Kept outside the app: The printed screen with your pencil circles is the evidence; keep it and name it here. Nothing is uploaded. What your creator sees: Your creator reads the mismatch list and which tool each group needed. The borders you justified are the interesting part. Your next action: Open Your work and choose Ready for review. The next lesson turns the spacing you just used by eye into a named scale.

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

Move pieces closer before drawing boxes around them.

</details>

<details>
<summary>Hint 2</summary>

Try grouping an unrelated item by proximity. This exposes why a visual principle is not proof of the correct information structure.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Gestalt grouping, and where it stops working.
Task: Cut workshop information into separate paper pieces and regroup it using space first. Compare two groupings without rewriting any words.
Challenge one thing at a time, and start with the mistake this lesson is about: “Cards make a layout organised.” Cards make a layout enclosed, which is different. When everything is a card, common region no longer distinguishes anything, the screen gains borders and padding that cost vertical space on a phone, and the actual hierarchy — what matters most — becomes invisible because every item is presented as a peer.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the marked-up before image and the numbered mismatch list and ask whether perceived grouping was diagnosed before it was changed. Look at the border-free version, the failures found and the restored set and ask whether the cheapest sufficient tool was used per group. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m03-l05-v1/work.md. Keep source observations separate from interpretations.
- Keep labelled paper originals or save readable images as before-01.jpg and after-01.jpg in the same folder. Preserve any editable digital source.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** The comparison explains both the intended grouping and a case where its cue could mislead.

**Bring forward:** Use your preferred grouping to define repeatable spacing.


### Practice and pause points

- Read the assigned law pages (~25 min): Read the proximity, similarity, common region, Prägnanz and uniform connectedness pages. For each, write the one sentence you would use to explain it to an engineer.
- Diagnose the dense screen (~20 min): On your densest screen, draw around what you believe the reader groups together at a glance. Mark every place where your intended grouping and the perceived grouping differ.
- Re-group with the cheapest tool first (~35 min): Fix each mismatch using space first. Only where space fails, add a shared background. Only where that fails, add a border. Record which tool each group needed.
- Build the counterexample (~25 min): Construct one small case where following a grouping principle produces the wrong reading — for example similarity making an unrelated element look like a status, or a card hiding the one item the task needs. Show it and explain the failure.
- Record and pause (~15 min): Save the before, the after, the tool-per-group note and the counterexample. Write the question you would ask another person to test your grouping.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper is genuinely better here: print or redraw the screen and use a pencil to circle perceived groups, then cut and re-space the elements. No tool or account is required at any point in this lesson.

### Output

The dense screen before and after regrouping, a note of which grouping tool each group required and why, and one worked counterexample where a principle misleads.

### Checks

- When is a border the right grouping tool? Answer: Late. Space is cheapest and reads first; a shared background is stronger and still quiet; a visible border is the strongest and the most expensive in space and visual noise. Reaching for a border first usually means the spacing was never adjusted.
- You styled a promotional badge like your status pills. What will readers conclude? Answer: That it is a status, because similarity groups by appearance regardless of meaning. The fix is to make the badge visibly a different kind of thing, not to add a label explaining that it is not a status.
- Does correct grouping mean the screen works? Answer: No. Grouping affects how the screen is parsed, not whether the reader can complete their task. A perfectly grouped screen can still bury the one control someone came for; that question needs a person attempting the task.

### Rubric and remediation

**Perceived grouping was diagnosed before it was changed**

Adequate evidence: A marked-up before image showing perceived groups and the specific mismatches with intended grouping.

- 0 — No diagnosis; the screen was simply redrawn.
- 1 — A before image exists but mismatches are not marked.
- 2 — Perceived groups are drawn and each mismatch is identified.
- 3 — As adequate, and the diagnosis distinguishes a mismatch that misleads from one that is merely untidy.

If below 2: Return to the original screen, circle what a first-time reader would group, and list each place that differs from your intent as a numbered mismatch. Show at recheck: The marked-up before image and the numbered mismatch list.

**The cheapest sufficient tool was used per group**

Adequate evidence: A note per group recording whether space, a shared background or a border was used, and why the weaker tool was insufficient.

- 0 — Every group was enclosed in a card or border by default.
- 1 — Tools vary but no reasoning is recorded.
- 2 — Each group records its tool and why the weaker option failed.
- 3 — As adequate, and at least one group was fixed with space alone where a card had previously been used.

If below 2: Remove every border from your after version and re-check which groups actually stop reading correctly. Restore only those, and record what each restoration bought. Show at recheck: The border-free version, the failures found and the restored set.

**A genuine counterexample is produced**

Adequate evidence: A concrete case, shown not merely described, where applying a principle produces a wrong or harmful reading.

- 0 — No counterexample.
- 1 — A counterexample is described in words only, or restates the principle's caveat generically.
- 2 — A specific case is shown with the wrong reading it produces explained.
- 3 — As adequate, and the counterexample is drawn from your own screen rather than invented, with the repair that keeps the principle useful.

If below 2: Take one grouping in your own after version and push it until it misleads — style an unrelated item like a status, or enclose the primary action inside a secondary card. Capture the result and explain the misreading. Show at recheck: The shown counterexample and the explanation.

**Grouping is treated as a hypothesis about reading**

Adequate evidence: A written question or task another person could attempt that would confirm or challenge the grouping.

- 0 — The new grouping is asserted as correct.
- 1 — A vague intention to test is stated.
- 2 — A specific, answerable question or five-second task is written.
- 3 — As adequate, and the question is neutral — it does not name the element you hope they find.

If below 2: Rewrite your test question so it names a goal, not an element: “where would you look to find what to bring?” rather than “can you see the materials box?”. Show at recheck: The rewritten neutral question.

### Portfolio contribution

Practice. The before-and-after regrouping is a usable craft artefact for a case study's iteration section, provided you describe the two-person look as an informal signal and not as usability testing.

### Assigned resources

- R31: [Laws of UX](https://lawsofux.com/) — Assigned pages only: law-of-proximity, law-of-similarity, law-of-common-region, law-of-pragnanz and law-of-uniform-connectedness. Purpose: Gives each grouping principle a definition, origin and takeaways you can quote in a review. Effort: 40–60 selected min. Free reading, no account. Verified 2026-09-06. The site states these as laws and publishes no caveats, so the limitation and the counterexample in this lesson are the course's, not the source's. A printed poster is sold and also offered as a free download; nothing is required. Fallback: R02.

## Lesson 6: Spacing as a system

Stable ID: m03-l06-v1. Core. Areas 1, 8. Optional effort ~120 min.

**Objective.** Replace ad-hoc spacing with a named spacing scale, apply it to one screen, and show that the space around a group reliably exceeds the space within it.

**Bring forward.** The regrouped screen from the previous lesson and your type scale.

Spacing is where a design either becomes maintainable or becomes a thousand small decisions nobody can reproduce, and it is the mechanism behind the grouping you just fixed by eye.

### Learn

A spacing scale is a small set of allowed distances, usually built by doubling or by multiplying a base unit, so that gaps relate to one another instead of drifting. Four to seven values is typical. The benefit is not tidiness: it is that a distance becomes a decision with a name, so two screens built weeks apart agree, and an engineer implementing your design has a value to reach for rather than a number to guess.

Space is directional and rarely symmetric. The gap above a heading and the gap below it do different jobs: the space above separates it from the previous section, the space below binds it to the content it introduces. When those two are equal, the heading floats between the sections and belongs to neither — a very common and very fixable defect.

Density is a decision you make per context, not a global preference. A settings screen someone scans occasionally can afford generous space; a table of bookings a coordinator reads all day cannot, because scrolling costs them more than air gains them. Choose density for the reading situation and record why, rather than applying one comfortable rhythm everywhere.

Space interacts with the reader's text settings. If gaps are fixed distances while text scales, then at enlarged text the type grows into space that did not grow with it, and groups collide. Expressing at least the vertical rhythm in units that scale with text keeps the relationship you designed, which is the whole point of having a scale.

**Common misconception.** “Consistent spacing means the same gap everywhere.” Uniform gaps destroy grouping — that is precisely the flat, unreadable screen from the last lesson. Consistency means the same small set of values used for the same purposes, deliberately unequal where the purposes differ.

### Worked example

A booking list used gaps of 6, 8, 10, 12, 13, 16, 18, 20 and 24 px, with no rule. Replacing them with a scale of 4, 8, 16, 24, 40 forced the question of what each gap was for: 8 inside a row between label and value, 16 between rows, 40 between the list and the next section. The screen became one pixel shorter overall and immediately readable as a list of items rather than a wall of text — and the engineer implementing it had five values instead of nine.

#### Spacing system cleanup

Inventory gaps in one screen, choose a small spacing scale and rebuild the layout using named gaps instead of isolated adjustments.

**Where to practise:** Draw the gap audit and the regrouped screen on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: The regrouped screen from the previous lesson and your type scale.
- Create HaruCourse/Practice/m03-l06-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

</details>

#### 1. Audit the real gaps

**See it first.** Made-up example. Auditing the spacing on a class list that felt “roughly consistent”.

- **What I expected:** Four or five gaps. The screen looked orderly and I had been reasonably careful.
- **What the ruler found:** Twelve distinct values, including a 7 and an 8 four centimetres apart, and a 14 that existed because something had been nudged.
- **Where they came from:** None of them were decisions. They were the residue of dragging things until the screen looked balanced on one particular day.
- **What I nearly did:** Set every gap to 16 for consistency. The screen went flat immediately: nothing grouped, because everything was equally far from everything else.
- **What consistency actually meant:** Six values with jobs: 4 and 8 inside groups, 16 and 24 between them, 32 around sections. Deliberately unequal, from a short list.

**The wrong turn:** The wrong turn is making every gap the same. It satisfies the word consistent and destroys the grouping the previous lesson built.

**What it costs:** A scale means some gaps snap to a value that is slightly wrong for their spot. In exchange every gap becomes a decision you can defend.

**Still unknown:** Still unknown: whether 4 and 8 are distinguishable enough on a phone to separate anything. Worth checking at narrow width.

- Measure and list every distinct vertical gap in your screen. Write the actual count; a large number is the normal starting point, not a failure.

**You should end up with:** A counted number of distinct gaps and the list of values.

Worksheet fields for this step:

- How many distinct vertical gaps are on the screen now? — Measure with a ruler and count. A large number is the normal starting point.
- The values you found

<details>
<summary>Help with this step</summary>

- **Spacing scale:** A short list of allowed gaps, each with a use. Anything not on the list is not used.

Stuck starting? Measure every vertical gap on a printout and write down each distinct value.

Is it enough? The count came from measuring, and it is probably larger than you expected.

</details>

#### 2. Define the scale

- Choose four to seven values and give each a name and a typical use. State your base unit and the rule that generates the rest.

**You should end up with:** A base unit, a rule, and four to seven named values.

Worksheet fields for this step:

- Your base unit and the rule that generates the rest
- Four to seven values, each with a name and a typical use — Name them by use: inside a group, between groups, around a section.

<details>
<summary>Help with this step</summary>

- **Base unit:** The smallest step. Everything else is a multiple of it, which is what makes the values look related.

Stuck starting? Pick a base of 4 or 8 and write multiples until you have five or six useful sizes.

Is it enough? Each value has a name describing its use, not its size.

</details>

#### 3. Apply and resolve conflicts

**See it first.** Made-up example. Mapping twelve measured gaps onto a six-value scale, and inventing a thirteenth value to settle a conflict.

- **How the mapping went:** Ten of the twelve gaps snapped without argument. The 7 and the 8 both became 8. The stray 14 became 16 and nothing read worse for it.
- **Where it stopped:** The gap under a section heading and the gap between two sections both landed on 24. The heading now sat exactly halfway between the section it named and the section above it.
- **What I did first:** I invented 20 for the heading gap. It looked right within about four seconds, and I nearly moved on.
- **Why I took it back:** 20 existed on the scale for one element and nothing else. That is precisely how twelve accidental gaps appeared before I started measuring.
- **What I did instead:** Dropped the heading gap one step down to 16. The heading now clearly attaches to the section below it, and every gap on the screen is still a value I can name.

**The wrong turn:** The wrong turn is inventing a value between two steps of the scale because it looks right. It is one small exception, it settles the problem immediately, and it quietly ends the scale.

**What it costs:** At 16 the heading sits close to its own first line, and with enlarged text it comes near to touching it. You have bought a clear grouping and taken on the job of checking that pairing at large text sizes.

**Still unknown:** Still unknown: whether 16 and 24 read as different enough on a small screen for the heading to attach downward. Two values one step apart are the hardest pair to tell apart.

- Map every existing gap to the nearest scale value. Where two different purposes collapse to the same value, decide which one moves and record why.

**You should end up with:** Every old gap mapped onto the scale, with conflicts resolved deliberately.

Worksheet fields for this step:

- Where two different purposes collapsed onto the same value, and which one you moved

<details>
<summary>Help with this step</summary>

- **Mapping:** Replacing each gap you measured with a value from your scale, one at a time.
- **Conflict:** Two gaps with different jobs that land on the same value, so the reader can no longer tell the jobs apart.
- **Exception:** A gap you keep off the scale on purpose, written down with its reason. Unwritten exceptions are how the accidents come back.

Stuck starting? Go through the audit list and write the scale value each one becomes.

Is it enough? Where two purposes wanted the same value, you recorded which one moved and why.

</details>

#### 4. Prove the grouping rule

- For each group on the screen, record the inside gap and the surrounding gap. Any group where the outside gap is not clearly larger is a defect; fix it and record the change.

**You should end up with:** For each group, the inside gap and the surrounding gap, with the outside clearly larger.

**Try it with help.** A supplied measurement from the same made-up screen: inside the class block, title to date is 12 and date to price is 12; the gap between one class block and the next is also 12.

What does that produce, and what is the fix?

- **An undifferentiated list where the price could belong to either class; open the between-block gap to a larger scale value.** — Equal gaps give the eye nothing to group with. Widening the outside gap is the whole repair, and it costs one scale value.
- A clean, consistent rhythm; nothing needs fixing. — It is consistent and unreadable. Consistency means the same values used for the same purposes, deliberately unequal where the purposes differ.
- A grouping problem best fixed with a divider line between classes. — A line would work and buys with a new element what one larger gap gives free.
- Tighten the inside gaps to 4 so the blocks are denser. — This also works, by widening the ratio from the other side. Check it still reads comfortably at enlarged text before choosing it.

**Then:** Measure your own groups and make sure the outside gap wins in every one.

Worksheet fields for this step, revealed a few at a time in the app:

- Group 1 · inside gap vs surrounding gap
- Group 2 · inside gap vs surrounding gap
- Group 3 · inside gap vs surrounding gap
- Any group where the outside gap was not clearly larger, and what you did

<details>
<summary>Help with this step</summary>

- **Inside gap:** The space between items that belong to the same group.
- **Surrounding gap:** The space between that group and whatever sits next to it.
- **Grouping rule:** The surrounding gap must be clearly larger than the inside gap. That difference is the whole of what makes a group visible.

Stuck starting? Measure one group first: the gap between its own items, then the gap to whatever is next.

Is it enough? No group has an outside gap equal to or smaller than its inside gap.

</details>

#### 5. Record and pause

- Save the scale, the before and after gap audit, and the grouping proof table. Note where you deliberately chose higher density and why.

**You should end up with:** Where you chose density deliberately, where the audits live, and the repair the Check questions asked for.

Worksheet fields for this step:

- Anywhere you deliberately chose tighter spacing, and why — A dense list can be right. Say what made it right here.
- Where the before and after audits live
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Audit:** The measured list of every gap you had before the scale existed. It is what makes the after state comparable to the before.
- **Density:** How tightly the content is packed. Tight can be the right choice where somebody is scanning a long list rather than reading it.
- **Repair:** The change a Check question asks you to make, recorded as what you actually altered.

Stuck starting? Look for a list where tighter spacing helps scanning, and say why.

Is it enough? Any tight spacing is a decision with a reason, not a leftover.

</details>

**Save and continue.** Saved for you: The audit, the scale and the proof table save as you type, on this device first and then online. Kept outside the app: The measured printout stays in your own folder; name it here so the numbers and the drawing stay together. What your creator sees: Your creator reads the scale and the grouping proof. The proof table is what shows the system working rather than being declared. Your next action: Open Your work and choose Ready for review. The next lesson arranges this screen in columns and finds where it has to change.

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

Measure gaps between content edges consistently; do not switch between baselines and bounding boxes.

</details>

<details>
<summary>Hint 2</summary>

An exception is acceptable when you can explain the relationship it serves.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Spacing as a system.
Task: Inventory gaps in one screen, choose a small spacing scale and rebuild the layout using named gaps instead of isolated adjustments.
Challenge one thing at a time, and start with the mistake this lesson is about: “Consistent spacing means the same gap everywhere.” Uniform gaps destroy grouping — that is precisely the flat, unreadable screen from the last lesson. Consistency means the same small set of values used for the same purposes, deliberately unequal where the purposes differ.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the completed scale definition and ask whether A generated scale with named values and uses. Look at the after audit with every value on the scale and ask whether every gap in the screen maps to the scale. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m03-l06-v1/work.md. Keep source observations separate from interpretations.
- Keep labelled paper originals or save readable images as before-01.jpg and after-01.jpg in the same folder. Preserve any editable digital source.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** A compact scale accounts for the rebuilt screen, with intentional exceptions documented.

**Bring forward:** Bring spacing tokens to the responsive grid exercise.


### Practice and pause points

- Audit the real gaps (~20 min): Measure and list every distinct vertical gap in your screen. Write the actual count; a large number is the normal starting point, not a failure.
- Define the scale (~20 min): Choose four to seven values and give each a name and a typical use. State your base unit and the rule that generates the rest.
- Apply and resolve conflicts (~35 min): Map every existing gap to the nearest scale value. Where two different purposes collapse to the same value, decide which one moves and record why.
- Prove the grouping rule (~30 min): For each group on the screen, record the inside gap and the surrounding gap. Any group where the outside gap is not clearly larger is a defect; fix it and record the change.
- Record and pause (~15 min): Save the scale, the before and after gap audit, and the grouping proof table. Note where you deliberately chose higher density and why.

Pause after any step; save the artifact and next action.

**Free tool path.** A ruler on a printout is exact enough for this exercise. If you are working in a local HTML file, define the scale as a handful of CSS custom properties; that also gives you the named values you will need in the token lesson.

### Output

A named spacing scale with base unit and rule; a before and after gap audit; and a per-group table showing inside gap versus surrounding gap.

### Checks

- Should the space above and below a heading be equal? Answer: Usually not. More space above separates the heading from the previous section; less space below binds it to the content it introduces. Equal space makes the heading belong to neither.
- Two purposes both map to your 16 value. Is that a problem? Answer: Only if the two purposes need to be distinguishable at a glance. If one is an inside-group gap and the other a between-group gap, they must differ, so one moves to the next value. If they are unrelated contexts, sharing a value is exactly what a scale is for.
- Why express vertical rhythm in units that scale with text? Answer: Because if the text grows for a reader and the gaps do not, the proportions you designed invert and groups collide. Scaling space with text preserves the grouping relationships that carry your hierarchy.

### Rubric and remediation

**A generated scale with named values and uses**

Adequate evidence: A stated base unit, the rule generating the values, and a typical use for each of four to seven values.

- 0 — No scale; gaps remain ad hoc.
- 1 — A list of values with no rule or no uses.
- 2 — Base unit, rule, values and uses are all stated.
- 3 — As adequate, and a value is deliberately omitted with the reason it is not needed at this density.

If below 2: Write the base unit and the multiplication or doubling rule that produces your values, then give each value one sentence describing where it is used. Show at recheck: The completed scale definition.

**Every gap in the screen maps to the scale**

Adequate evidence: A before-and-after audit showing the original distinct gap count and the final count, with no off-scale value remaining.

- 0 — No audit was done.
- 1 — An audit exists but off-scale values remain unexplained.
- 2 — All gaps map to the scale, or an exception is named and justified.
- 3 — As adequate, and the write-up identifies which merges changed the reading and which were invisible.

If below 2: Re-measure the after version and list any gap that is not a scale value. Move each to the nearest value and note whether the group reading changed. Show at recheck: The after audit with every value on the scale.

**Group separation is proven, not assumed**

Adequate evidence: A table with one row per group giving the inside gap, the surrounding gap and the resulting ratio or difference.

- 0 — No separation data.
- 1 — Some groups measured; failures unaddressed.
- 2 — Every group is measured and any failure is repaired.
- 3 — As adequate, and the tightest acceptable separation is identified and justified for the densest context.

If below 2: For each group where the outside gap is not clearly larger, increase it by one scale step and re-measure. Record any group where you could not, and why. Show at recheck: The completed per-group table with no unexplained failures.

**Density choices are contextual and recorded**

Adequate evidence: At least one place where density was deliberately tightened or loosened, with the reading situation that justifies it.

- 0 — One density applied everywhere with no reasoning.
- 1 — Density varies but the reason is preference.
- 2 — A density choice is tied to a stated reading situation.
- 3 — As adequate, and the cost of that choice is named — what the tighter or looser setting gives up.

If below 2: Pick the densest region of your screen and write who reads it, how often and for how long. Then state whether your current density serves that and what you gave up. Show at recheck: The written density rationale with its stated cost.

### Portfolio contribution

Practice, and a system artefact. The spacing scale carries directly into the token sheet two lessons from now and may appear in a case study's system section.

### Assigned resources

- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — The spacing and layout style pages only, read for how a fixed set of values is defined and applied. Purpose: A worked public example of a spacing system with stated uses rather than arbitrary distances. Effort: 25–40 selected min. Free reading, no account. Verified 2026-09-06. Take the structure, not the government branding; the visual identity is not a universal aesthetic. Fallback: R03.

## Lesson 7: Grid and layout structure that reflows

Stable ID: m03-l07-v1. Core. Areas 1, 8. Optional effort ~120 min.

**Objective.** Define a column and gutter structure for one screen, state where the layout changes and why, and show the same content at narrow, medium and wide widths.

**Bring forward.** Your spacing scale and the regrouped screen. You will keep the content identical and change only its arrangement.

A grid in print positions elements on a fixed page. On screen the page has no fixed size, so the grid's real job is to describe how the arrangement is allowed to change — and that is a different skill.

### Learn

A layout structure on screen is a set of columns, the gutters between them and the margins outside them, plus rules for what happens when there is more or less room. The columns are a convenience for alignment; the rules for change are the actual design. A twelve-column grid that only ever renders one way has told you nothing about behaviour.

Decide where the layout changes by watching the content, not by listing device names. Phones, tablets and laptops span a continuous range of widths and any list of device sizes is out of date on arrival. Widen the layout gradually until something reads badly — the measure grows too long, a two-column pairing becomes absurdly stretched, a control drifts far from what it controls — and put the change there. Then record what you saw, so the number has a reason attached.

Reflow is a re-ordering problem as much as a resizing one. When two columns become one, something must come first, and the correct order is usually the order of the reader's task rather than the visual order of the wide layout. A sidebar of filters that sits beside a list on a wide screen may need to sit above it, or behind a control, on a narrow one — and burying the primary action below a long secondary block is the most common reflow defect.

Alignment does most of the work a grid gets credit for. A consistent left edge shared by heading, body and controls gives a screen structure even with no visible columns, and a single element breaking that edge reads as an error before the reader knows why. When you check a layout, check the edges first; misalignment is more often the cause of a screen feeling wrong than the column count is.

**Common misconception.** “Design for mobile, tablet and desktop.” Those are three arbitrary samples from a continuous range, and designing only at three widths guarantees that everything between them is untested. Design the behaviour between the changes, and use specific widths only as places to check.

### Worked example

A workshop list was designed at 1280 px as a three-column card grid with filters in a left sidebar. Narrowing it gradually, the cards became unreadably squeezed at around 900 px, so the grid dropped to two columns there; below about 620 px the filters could no longer sit beside the list, so they moved above it as a single collapsed control, and the card grid became one column. Neither number came from a device — both came from the point at which the content stopped reading.

#### Responsive constraint challenge

Arrange the same content at narrow, middle and wide widths. Decide where the structure must change because content no longer fits.

**Where to practise:** Draw the same content at three widths on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: Your spacing scale and the regrouped screen. You will keep the content identical and change only its arrangement.
- Create HaruCourse/Practice/m03-l07-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

</details>

#### 1. Define the structure

- State your columns, gutters and margins at the widest layout, using values from your spacing scale where they apply. Draw the structure over your screen.

**You should end up with:** Columns, gutters and margins stated as values.

Worksheet fields for this step:

- Columns, gutters and margins, in values — Use your spacing scale where it applies.

<details>
<summary>Help with this step</summary>

- **Gutter:** The gap between columns. It is what stops two columns of text reading as one.
- **Margin:** The space from the content to the edge of the screen.

Stuck starting? Draw the structure over your widest sketch in pencil before deciding anything.

Is it enough? The values come from your spacing scale wherever they can.

</details>

#### 2. Find the change points by narrowing

**See it first.** Made-up example. Finding where a class list has to change, without starting from device sizes.

- **What I planned to do:** Design for mobile, tablet and desktop: 390, 768 and 1280. Three neat sketches.
- **Why I stopped:** Those are three samples from a continuous range. Everything between them is untested, and readers sit everywhere in that range.
- **What I did instead:** Started wide and narrowed slowly, watching for the first thing that stopped reading well.
- **The first real failure:** At about 700 the longest class title collided with the price beside it. Nothing to do with a tablet; it was the length of that particular string.
- **What that gave me:** A change point with a reason: the two-column row becomes one column when the title can no longer hold its line. The number came from the content.

**The wrong turn:** The wrong turn is starting from device widths. It produces three tidy layouts and guarantees that the widths between them were never looked at.

**What it costs:** Narrowing gradually is slower and gives untidy numbers like 700. Those numbers are the ones tied to your actual content.

**Still unknown:** Still unknown: how this behaves with a much longer title in another language. Worth testing before treating the change point as settled.

- Narrow the layout gradually. Each time the content stops reading well, record the approximate width and exactly what failed. Do not start from a list of devices.

**You should end up with:** Three change points found by narrowing, each with the content failure that caused it.

Worksheet fields for this step, revealed a few at a time in the app:

- Change point 1 · roughly what width, and exactly what failed
- Change point 2 · roughly what width, and exactly what failed
- Change point 3 · roughly what width, and exactly what failed

<details>
<summary>Help with this step</summary>

- **Change point:** A width at which the arrangement has to change because the content stopped working. It is named for what failed, never for a device.
- **Narrowing:** Covering the layout gradually from one side to find where it breaks, instead of jumping between widths you chose in advance.
- **Content failure:** The specific thing that stopped reading well: a collision, a line that will not fit, a column too narrow for the longest name.

Stuck starting? Take the widest sketch and cover it progressively from the right, watching what breaks first.

Is it enough? Every change point names the content that failed, not a device.

</details>

#### 3. Design the reflow

- For each change point, decide the new arrangement and the resulting order. Write the reading order at the narrow width and confirm the primary action is not buried.

**You should end up with:** The arrangement after each change, the narrow reading order, and where the main action sits.

**Try it with help.** A supplied narrow layout from the same made-up screen, ordered top to bottom: photograph, class title, instructor biography, date and time, price, what to bring, Reserve button, related classes.

What is the most important change to the order?

- **Move the instructor biography below Reserve, so date, price and materials reach the reader before the decision.** — The order is what a person reads and what a screen reader announces. Everything needed to decide should arrive before the control that acts on the decision.
- Move the photograph to the bottom, since it carries no information. — Worth considering and it is not the costly problem. The photograph is one scroll; the biography sits between the reader and the facts they need.
- Move Reserve to the top so it is always reachable. — It puts the action before the information the action depends on, which invites a decision made without the price.
- Nothing: on a phone people scroll, so order matters less. — Order matters more on a phone, because only a little is visible at once and the sequence is the whole experience.

**Then:** Number your own narrow order and check that everything needed to decide arrives before the action.

Worksheet fields for this step:

- For each change point: the new arrangement
- The reading order at the narrowest width, top to bottom — Number it. This is the order a screen reader and a keyboard will follow too.
- Where the main action sits at the narrow width, and whether it is reachable without hunting

<details>
<summary>Help with this step</summary>

- **Reading order:** The sequence of the content as it will actually be read, including by a keyboard and a screen reader.

Stuck starting? Write the narrow order as a numbered list before drawing it.

Is it enough? The main action comes after the information needed to take it.

</details>

#### 4. Check the edges

**See it first.** Made-up example. Checking the left edges of a class list, and finding that the check itself had only been done at one width.

- **What I checked:** I laid a ruler down the widest rendering. Every title, date and price met the same line, so I ticked the step off.
- **What I had not checked:** The narrow rendering. At narrow I had centred the whole class block, because on its own it looked balanced that way.
- **What centring cost:** The shared left edge that made four items read as one column was gone. Every line started somewhere different, so the eye had nothing to run down.
- **The break I had flattened:** While tidying I had also pulled the “what to bring” list out to the main edge. That indent was the only thing saying the list belongs to the heading above it, so I put it back.
- **What the step became:** Three rulers instead of one, and two lines of writing: which edges hold at every width, and the single break that is there on purpose.

**The wrong turn:** The wrong turn is checking alignment only on the layout you spent the most time on. It is the one you can already see in your head, so it is the one your ruler agrees with.

**What it costs:** Keeping the deliberate indent means the left edge is no longer one unbroken line, and anyone reviewing the screen will ask about it. You have to be able to say in a sentence what the indent means.

**Still unknown:** Still unknown: whether a reader uses that indent at all, or takes the list as belonging to its heading from the words alone. Nothing in this step settles it, so the indent stays until somebody is asked.

- At all three widths, check that shared left edges align. Mark every element that breaks alignment and either fix it or record why the break is deliberate.

**You should end up with:** Which shared left edges hold at every width, and any break you kept deliberately.

Worksheet fields for this step:

- At all three widths: which shared left edges hold, and which break
- Any break you kept on purpose, and why

<details>
<summary>Help with this step</summary>

- **Alignment:** Items sharing an edge, so the eye runs down one line instead of hunting for where each item starts.
- **Shared left edge:** The invisible vertical line several items begin from. It is the one people notice when it breaks.
- **Deliberate break:** An item that does not meet the shared edge because the difference carries meaning. Written down, so it is not read later as a slip.

Stuck starting? Lay a ruler down the left edge of each rendering and mark anything that does not meet it.

Is it enough? Every break is either fixed or recorded with a reason.

</details>

#### 5. Record and pause

- Save the three renderings, the change-point table with reasons, and the narrow reading order. Note any arrangement you are unsure about.

**You should end up with:** The arrangement you are least sure about, where the renderings live, and the repair the Check questions asked for.

Worksheet fields for this step:

- The arrangement you are least sure about
- Where the three renderings live
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Rendering:** One drawing of the screen at one width. The three of them together are the evidence this lesson produces.
- **Repair:** The change a Check question asks you to make, recorded as what you actually altered.

Stuck starting? Choose the change point you guessed at rather than derived.

Is it enough? The uncertainty names a specific width and arrangement.

</details>

**Save and continue.** Saved for you: The structure, change points and reading order save as you type, on this device first and then online. Kept outside the app: The three renderings stay in your own folder. Name them here so the widths and the drawings stay together. What your creator sees: Your creator reads the change-point reasons and the narrow reading order. The reasons are what distinguish this from three sketches. Your next action: Open Your work and choose Ready for review. The next lesson turns every decision from this module into a named token sheet.

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

Use the spacing scale, but let content failure explain the change point.

</details>

<details>
<summary>Hint 2</summary>

Paper frames model layout intent; mark real browser behavior as untested unless you actually resize a working page.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Grid and layout structure that reflows.
Task: Arrange the same content at narrow, middle and wide widths. Decide where the structure must change because content no longer fits.
Challenge one thing at a time, and start with the mistake this lesson is about: “Design for mobile, tablet and desktop.” Those are three arbitrary samples from a continuous range, and designing only at three widths guarantees that everything between them is untested. Design the behaviour between the changes, and use specific widths only as places to check.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the stated structure with its relationship to the scale and ask whether structure is stated in values, not sketched vaguely. Look at the change-point table with observed failures per row and ask whether change points come from content failures. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m03-l07-v1/work.md. Keep source observations separate from interpretations.
- Keep labelled paper originals or save readable images as before-01.jpg and after-01.jpg in the same folder. Preserve any editable digital source.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** Three layouts preserve task priority and explain content-driven changes rather than merely shrinking everything.

**Bring forward:** Add grid decisions and their limits to the token documentation.


### Practice and pause points

- Define the structure (~20 min): State your columns, gutters and margins at the widest layout, using values from your spacing scale where they apply. Draw the structure over your screen.
- Find the change points by narrowing (~30 min): Narrow the layout gradually. Each time the content stops reading well, record the approximate width and exactly what failed. Do not start from a list of devices.
- Design the reflow (~30 min): For each change point, decide the new arrangement and the resulting order. Write the reading order at the narrow width and confirm the primary action is not buried.
- Check the edges (~25 min): At all three widths, check that shared left edges align. Mark every element that breaks alignment and either fix it or record why the break is deliberate.
- Record and pause (~15 min): Save the three renderings, the change-point table with reasons, and the narrow reading order. Note any arrangement you are unsure about.

Pause after any step; save the artifact and next action.

**Free tool path.** Three sheets of paper at proportional widths, with columns ruled in pencil, cover this fully. If you use a local HTML file, resizing the browser window shows the change points directly and is the honest way to find them; no design tool or account is needed.

### Output

A stated column, gutter and margin structure; the same content at narrow, medium and wide widths; a change-point table giving each width and the content reason; and the narrow reading order.

### Checks

- Why not choose change points from device sizes? Answer: Because device sizes are a moving, incomplete list and they say nothing about your content. A change point derived from the width at which your own text or pairing stops working has a reason attached and stays valid as devices change.
- Your two columns become one. What decides the order? Answer: The reader's task. The element they need first goes first, which is not always the element that was on the left. Check specifically that the primary action has not been pushed below a long secondary block.
- Does a screen with no visible columns lack structure? Answer: No. Alignment provides most of the perceived structure. A consistent shared left edge across headings, text and controls reads as ordered even when no grid is visible.

### Rubric and remediation

**Structure is stated in values, not sketched vaguely**

Adequate evidence: Explicit column count, gutter and margin values at the widest layout, related to the spacing scale where applicable.

- 0 — No structure stated.
- 1 — A drawing exists but values are not recorded.
- 2 — Columns, gutters and margins are stated as values.
- 3 — As adequate, and the values reuse the spacing scale, with any deliberate exception explained.

If below 2: Write the three values for your widest layout and check each against your spacing scale. Record any value that is off-scale and why it must be. Show at recheck: The stated structure with its relationship to the scale.

**Change points come from content failures**

Adequate evidence: A table of change points where each row gives an approximate width and the specific content behaviour that failed there.

- 0 — Change points are device names or absent.
- 1 — Widths are stated but reasons are generic.
- 2 — Each change point names the specific failure that caused it.
- 3 — As adequate, and one change point was moved after observing the failure, with the before and after widths recorded.

If below 2: Narrow your layout again in small steps and write the first thing that breaks at each point as an observable sentence. Replace any device-derived number with the width you actually observed. Show at recheck: The change-point table with observed failures per row.

**Reflow order follows the task**

Adequate evidence: A written reading order for the narrow layout, with the primary action's position stated.

- 0 — No order recorded.
- 1 — An order is recorded but the primary action is buried without comment.
- 2 — The order follows the task and the primary action is reachable without a long scroll.
- 3 — As adequate, and the reason a wide-layout position was deliberately not preserved is explained.

If below 2: List the narrow layout's elements top to bottom and mark the primary action's index. If it is far down, move it or add a persistent path to it and record the change. Show at recheck: The narrow reading order with the primary action's position.

**Alignment is checked at every width**

Adequate evidence: Marked-up renderings at all three widths showing the shared edges, with breaks either fixed or justified.

- 0 — No alignment check.
- 1 — Checked at one width only.
- 2 — Checked at all three, with breaks fixed or justified.
- 3 — As adequate, and a deliberate alignment break is used to draw attention, with the reason.

If below 2: Draw a vertical line down the intended left edge on each rendering and mark every element that does not meet it. Fix or justify each mark. Show at recheck: The three marked-up renderings.

### Portfolio contribution

Practice. The reflow reasoning is genuinely useful in a case study's responsive section, provided you present change points as design decisions rather than as tested outcomes.

### Assigned resources

- R16: [web.dev: learn responsive design](https://web.dev/learn/design/) — The layout chapters, read for how a layout is described by its behaviour rather than by fixed sizes. Purpose: Supplies the reasoning for change points derived from content rather than devices. Effort: 40–60 selected min. Free reading, no account. Verified 2026-09-06. Read the selected chapters, not the whole site. Fallback: R15.

## Lesson 8: A token sheet somebody else could build from

Stable ID: m03-l08-v1. Core. Areas 1, 8. Optional effort ~120 min.

**Objective.** Write a single token sheet naming every type, colour and spacing decision from this module, and have it reviewed by finding at least one decision it fails to specify.

**Bring forward.** Your type scale, palette, contrast table, spacing scale and layout structure.

Everything you have decided so far lives in your head and in one screen. A token sheet is the form those decisions have to take before anyone else — an engineer, a future collaborator, or you in three months — can apply them without guessing.

### Learn

A token is a named decision. Not “#1B1B1B” but “colour-text-primary, #1B1B1B, used for body copy and headings on light surfaces”. The name carries the intent, which is what makes the value changeable later: when you darken your body text, everything that means body text follows, and nothing that merely happened to share the hex value comes with it.

Name tokens by role, not by appearance. “colour-brand-blue” fails the moment the brand colour becomes green, and “spacing-16” fails the moment you decide inside-group gaps should be 12. Role names — text-primary, surface-raised, space-inset-tight — survive the change of value and tell a reader what the token is for, which is the only reliable way someone else picks the right one.

A sheet that lists values without rules is only half a handoff. The genuinely useful part is the usage note: which token to reach for in which situation, what pairs are permitted, and what is forbidden. “Never place text-secondary on surface-raised; it fails contrast” prevents a whole class of defect that a table of hex values cannot.

Tokens are also where your accessibility work becomes durable. If your contrast table lives in a document nobody opens, the first person to adjust a colour will break it silently. If the permitted pairings are stated on the sheet beside the values, the constraint travels with the decision — and you can re-run the check by inspecting the sheet rather than the whole screen.

**Common misconception.** “Tokens are for large teams.” The value appears the first time you build a second screen. Without named decisions, screen two re-derives every value by eye, drifts from screen one, and the drift is invisible until someone puts them side by side.

### Worked example

A first sheet listed twenty-two colours by hex with no names. Rewritten as nine role-named tokens with usage notes, it exposed three problems immediately: two hexes were doing the same job and could merge, one grey had no role at all and was deleted, and the pairing note revealed that the secondary text colour had never been checked against the raised surface — where it measured 3.1:1 and failed. The sheet found a defect the screen review had missed.

#### Handoff documentation desk

Combine your type, color and spacing decisions into a token sheet that another person could use without asking which value you meant.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A local text editor (for example Notepad) and the previous lesson artifacts. No account is needed.

- Starting material: Your type scale, palette, contrast table, spacing scale and layout structure.
- Create HaruCourse/Practice/m03-l08-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.

</details>

#### 1. Convert decisions to named tokens

**See it first.** Made-up example. Naming the first few tokens, and renaming them once.

- **My first names:** dark-green, light-grey, big-heading, small-gap. They described what I could see, which felt honest.
- **Where that failed:** When I darkened the secondary text for contrast, the token called light-grey was no longer light or grey, and every note referring to it became misleading.
- **What I renamed them to:** action-surface, text-secondary, type-title, space-inside. Each says what it is for, so the value can change without the name lying.
- **The one I nearly left out:** space-inside and space-between looked like the same idea. They are the grouping rule from the spacing lesson, and separating them is what makes it enforceable.
- **What the sheet became:** Fourteen names, each with a value and one sentence of role. Shorter than I expected, because most of the screen reuses a few decisions.

**The wrong turn:** The wrong turn is naming tokens after their appearance. The name outlives the value, and an appearance name becomes a lie the first time you adjust anything.

**What it costs:** Role names are less immediately readable: you have to learn that action-surface is the green. That cost is paid once and saves every later revision.

**Still unknown:** Still unknown: whether these names make sense to anyone else. The build-it test is what finds out.

- Write every type, colour and spacing decision as a name, a value and a one-line role. Use role-based names throughout.

**You should end up with:** Every type, colour and spacing decision written as a named token with a value and a role.

Worksheet fields for this step, revealed a few at a time in the app:

- Token 1 · name, value, role — Name by role, not by appearance: text-primary, not dark-grey.
- Token 2 · name, value, role
- Token 3 · name, value, role
- Token 4 · name, value, role
- Token 5 · name, value, role
- Token 6 · name, value, role
- Token 7 · name, value, role
- Token 8 · name, value, role

<details>
<summary>Help with this step</summary>

- **Token:** A named decision: a name, a value and a role. The name is what other work refers to.
- **Role name:** A name describing the job, such as text-secondary, rather than the appearance, such as light-grey.

Stuck starting? Start with the type scale from lesson 1; those five steps are already tokens waiting for names.

Is it enough? No token name mentions a colour, a size or a direction.

</details>

#### 2. Add usage and prohibitions

**See it first.** Made-up example. Writing prohibitions for a token sheet, and finding that none of the first five forbade anything.

- **What I wrote first:** Five lines in the shape of “text-secondary is for supporting text”. Every one of them true, and not one of them a prohibition.
- **The test I applied:** For each token: what would somebody reasonably do with this that I would not want? If I could not name it, the line was a description wearing a rule’s clothes.
- **The one that mattered:** action-surface is the green behind the primary button. The reasonable misuse is a green “confirmed” chip on a booking, which would then look like something to press.
- **The one I threw away:** “Never use type-title for body text.” Nobody was ever going to. A prohibition against something no one is tempted by only makes the sheet longer to read.
- **Where pairings came in:** Listing which text token may sit on which surface token is the same exercise from the other side: every pair not on the list is forbidden by not being there.

**The wrong turn:** The wrong turn is writing prohibitions that restate the usage note in the negative. They read like rules and forbid nothing, because they only rule out what nobody would have done.

**What it costs:** A short prohibition list leaves the sheet silent about most misuses, and the first time somebody does something you did not predict it gives them no help at all. Three real ones are worth more than twenty imagined, and they do leave that hole.

**Still unknown:** Still unknown: which misuse you have not thought of. The build-it test finds decisions the sheet fails to specify; it does not find wrong uses of the things it does specify.

- For each token, note where it is used and, where relevant, one thing it must not be used for. Include permitted text-on-surface pairings.

**You should end up with:** Usage notes, prohibitions and the permitted text-on-surface pairings.

Worksheet fields for this step:

- The prohibitions worth writing down
- The permitted text-on-surface pairings — Which text token may sit on which surface token.

<details>
<summary>Help with this step</summary>

- **Prohibition:** Where a token must not be used. It prevents the most common misuse better than any amount of description.

Stuck starting? For each colour token, ask what someone might reasonably use it for that would be wrong.

Is it enough? At least two tokens carry a prohibition with a reason.

</details>

#### 3. Re-check pairings against contrast

- Take every permitted text-on-surface pairing and confirm it against your contrast table. Add any missing pair, measure it, and record failures as prohibitions.

**You should end up with:** Every permitted pairing measured against your contrast table, with failures turned into prohibitions.

**Try it with help.** A supplied sheet from the same made-up project. It permits text-secondary on surface-raised, but the contrast table from lesson 4 has no row for that pair: it measured text-secondary on surface-base only.

What should happen to that pairing?

- **Measure it now; until it is measured it is not permitted.** — An unmeasured pairing is an assumption that the raised surface is close enough to the base. That is exactly the sort of drift a sheet exists to prevent.
- Allow it, since text-secondary passed on the base surface. — A raised surface is a different colour. Passing on one background says nothing about another.
- Prohibit it, because it was not measured. — Prohibiting without measuring throws away a pairing that may be perfectly good. Measure first, then decide.
- Allow it with a note that it is unverified. — A permitted-with-doubt pairing will be used as permitted. The note will not travel with it.

**Then:** Go through your own permitted list and measure anything your contrast table does not already cover.

Worksheet fields for this step:

- Each permitted pairing against your contrast table: measured ratio and result — Any pairing you have not measured is not yet permitted.
- Pairings that failed and are now prohibited

<details>
<summary>Help with this step</summary>

- **Pairing:** A text colour together with the surface colour behind it. Contrast belongs to the pair, never to one colour on its own.
- **Contrast ratio:** A number comparing the lightness of text against its background. A free contrast checker gives it to you; there is nothing to work out by hand.
- **Contrast table:** The record from lesson 4 listing each pair you measured and the ratio it came back with.

Stuck starting? List the pairings first, then check each against the table from lesson 4.

Is it enough? Every permitted pairing has a measured ratio beside it.

</details>

#### 4. The build-it test

- Hand the sheet to another person, or set it aside and return to it, then rebuild one small component using only the sheet. Record every decision you had to invent because the sheet did not specify it.

**You should end up with:** A rebuild from the sheet alone, and every gap it exposed.

Worksheet fields for this step:

- Every decision you had to make that the sheet did not specify
- What you added to the sheet as a result

<details>
<summary>Help with this step</summary>

- **Build-it test:** Rebuilding something using only the sheet. Every decision you have to invent is a gap in the specification.

Stuck starting? Set the screen aside, take only the sheet, and rebuild one button from it.

Is it enough? The gap list is not empty; a first sheet always has gaps.

</details>

#### 5. Repair and save

- Add the missing specifications the test revealed. Save the sheet and the list of gaps it exposed.

**You should end up with:** Where the sheet lives, and the repair the Check questions asked for.

Worksheet fields for this step:

- Where the token sheet lives
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Token sheet:** The single document naming every decision with its value and its role. It is the thing this lesson produces.
- **Repair:** The change a Check question asks you to make, recorded as what you actually altered.

Stuck starting? Add the missing specifications the test revealed before saving.

Is it enough? The sheet now answers the questions that stopped you during the rebuild.

</details>

**Save and continue.** Saved for you: The token list, prohibitions and gap findings save as you type, on this device first and then online. Kept outside the app: If you keep the sheet as its own document, name the file here so the sheet and this record stay together. What your creator sees: Your creator reads the token names, the prohibitions and the gaps the build-it test exposed. The gaps are the most useful part. Your next action: Open Your work and choose Ready for review. The next lesson builds one component in all of its states using only this sheet.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Name a purpose such as text-muted instead of a particular location such as left-gray.

</details>

<details>
<summary>Hint 2</summary>

A value without a unit or usage rule leaves implementation decisions unresolved.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: A token sheet somebody else could build from.
Task: Combine your type, color and spacing decisions into a token sheet that another person could use without asking which value you meant.
Act as an engineer reading only my token table. Ask about one ambiguous value or usage rule at a time; do not invent implementation requirements.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Hide your screen and try drawing one component from the token sheet alone. Record every missing instruction.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m03-l08-v1/work.md. Keep source observations separate from interpretations.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** Tokens have unambiguous values, roles and examples, including links to contrast and layout evidence.

**Bring forward:** Use this sheet to specify the component states in the next lesson.


### Practice and pause points

- Convert decisions to named tokens (~30 min): Write every type, colour and spacing decision as a name, a value and a one-line role. Use role-based names throughout.
- Add usage and prohibitions (~25 min): For each token, note where it is used and, where relevant, one thing it must not be used for. Include permitted text-on-surface pairings.
- Re-check pairings against contrast (~25 min): Take every permitted text-on-surface pairing and confirm it against your contrast table. Add any missing pair, measure it, and record failures as prohibitions.
- The build-it test (~25 min): Hand the sheet to another person, or set it aside and return to it, then rebuild one small component using only the sheet. Record every decision you had to invent because the sheet did not specify it.
- Repair and save (~15 min): Add the missing specifications the test revealed. Save the sheet and the list of gaps it exposed.

Pause after any step; save the artifact and next action.

**Free tool path.** A Markdown table or a sheet of paper is a complete token sheet; no design tool is required. If you are working in a local HTML file, CSS custom properties give you the same names in a form that is directly usable, which is a convenience rather than a requirement.

### Output

A token sheet of role-named type, colour and spacing tokens with values, usage notes and prohibitions; a permitted-pairing contrast check; and the list of gaps found by the build-it test.

### Checks

- Why not name a token after its colour? Answer: Because the name stops being true the moment the value changes, and it does not tell anyone what the token is for. A role name survives revaluation and guides someone else to the right choice.
- What does a prohibition add that a value list does not? Answer: It prevents a specific defect. Stating that a particular text token must not sit on a particular surface stops a failing combination from being assembled in the first place, which a list of individually valid values cannot do.
- The build-it test forced you to invent three values. What does that mean? Answer: That the sheet is incomplete in three specific places, which is exactly what the test is for. Every invented value is a decision that would otherwise be made differently by each person who builds from the sheet.

### Rubric and remediation

**Tokens are named by role and cover every decision**

Adequate evidence: A sheet where every value used in the screen appears as a role-named token, with no appearance-based names.

- 0 — Values are listed without names, or no sheet exists.
- 1 — Names exist but several are appearance-based, or decisions from the module are missing.
- 2 — All decisions appear as role-named tokens.
- 3 — As adequate, and a naming rule is stated so a future token can be named consistently.

If below 2: Rename every appearance-based token by the job it does, then check your screen for any value that has no token and add it. Show at recheck: The renamed sheet and a confirmation that no value is untokenised.

**Usage notes and prohibitions are present**

Adequate evidence: Each token has a usage note, and at least three prohibitions are stated where misuse is plausible.

- 0 — No usage notes.
- 1 — Usage notes exist but no prohibitions.
- 2 — Usage notes throughout with meaningful prohibitions.
- 3 — As adequate, and each prohibition names the defect it prevents.

If below 2: For your three most easily confused tokens, write the specific wrong use you expect and turn each into a prohibition naming the consequence. Show at recheck: The three prohibitions with their consequences.

**Permitted pairings are contrast-checked**

Adequate evidence: A pairing table showing each permitted text-on-surface combination with its measured ratio and threshold.

- 0 — No pairing check.
- 1 — Some pairings checked; gaps remain.
- 2 — All permitted pairings are measured and any failure is recorded as a prohibition.
- 3 — As adequate, and a pairing that fails is retained as prohibited rather than quietly deleted, so the constraint is visible.

If below 2: Enumerate every text token against every surface token, measure the ones you would plausibly use, and mark each as permitted or prohibited. Show at recheck: The completed pairing table.

**The build-it test was run and its gaps repaired**

Adequate evidence: A component rebuilt from the sheet alone and a list of decisions that had to be invented, each now specified.

- 0 — The test was not run.
- 1 — The test was run but the gaps were not repaired.
- 2 — Gaps are listed and each is now specified on the sheet.
- 3 — As adequate, and the test was run by another person rather than by you, with what they misread recorded.

If below 2: Rebuild one component using only the sheet, writing down each moment you had to decide something yourself, then add each of those to the sheet. Show at recheck: The rebuilt component, the gap list and the updated sheet.

### Portfolio contribution

Practice, and a portfolio-grade artefact. A token sheet with usage rules and pairing checks is legitimate evidence of systematic thinking in a case study's system section. It is not a design system, which is m13's work.

### Assigned resources

- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — The colour and typography style pages, read for how each decision is named, described and given usage guidance. Purpose: A public worked example of decisions published as reusable, named rules rather than as a mood board. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Rebuild the structure with your own values; do not copy government branding. Fallback: R06.

## Lesson 9: Applying the system to one component set

Stable ID: m03-l09-v1. Core. Areas 1, 8. Optional effort ~120 min.

**Objective.** Build one component in all of its states using only your token sheet, and document each state with the tokens it uses and the condition that produces it.

**Bring forward.** Your token sheet and the gap list from the build-it test.

A system proves itself on states, not on the happy path. The default appearance of a button is the easy part; the disabled, loading, error and focused versions are where undocumented decisions hide.

### Learn

A component is defined by its states, and most designs specify only one of them. A single control typically needs a default, a hover or pressed appearance where a pointer exists, a keyboard focus appearance, a disabled appearance, and often a loading appearance while something is happening. Each is a real thing a reader will see, and each needs tokens or it will be invented later by whoever implements it.

Keyboard focus is not optional and is not the same as hover. Hover exists only where there is a pointer; focus is how a person navigating by keyboard knows where they are, and removing the focus indicator because it looks untidy makes the interface unusable for them. Design a focus appearance deliberately — usually a visible outline with its own token — rather than accepting or deleting a default.

A disabled state must still communicate. The contrast exception means a disabled control is not held to the text ratio, but the reader still has to understand what the control is and, ideally, why it is unavailable. A disabled button with no explanation produces a reader who thinks the interface is broken, which is a comprehension failure even where it is not a conformance failure.

This is a foundations pass, not the complete component repertoire. You are proving that your tokens survive contact with one real component's states. Navigation, modals, tables, charts, dashboards and notifications, and the full interaction behaviour around them, belong to the interface craft and interaction modules later in the course; do not describe this lesson's output as a component library.

**Common misconception.** “The disabled state is just the default at reduced opacity.” Reducing opacity uniformly changes the background as well as the text, can produce an unpredictable composite over whatever is behind it, and often makes the label unreadable while leaving the control looking pressable. Specify a disabled state with its own tokens instead.

### Worked example

A primary button was specified once, in default. Building its states from the token sheet exposed four undocumented decisions: focus had no token at all, hover reused a colour that failed against the raised surface, disabled had been drawn at 40 per cent opacity so its label became unreadable, and there was no loading appearance despite the booking action taking two seconds. Four states, four gaps — none visible in the original screen.

#### Component state storyboard

Specify one component across default, hover, focus, disabled and loading states, using the token sheet rather than introducing unexplained values.

**Where to practise:** Draw the component in each of its states on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: Your token sheet and the gap list from the build-it test.
- Create HaruCourse/Practice/m03-l09-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

</details>

#### 1. Choose the component and enumerate states

- Pick one component your screen genuinely needs. List every state it will really have, including the condition that produces each one.

**You should end up with:** One component and every state it really has, each with its condition.

Worksheet fields for this step, revealed a few at a time in the app:

- The component you chose, and why your screen needs it
- State 1 · its name and the condition that produces it — Default, hover, focus, pressed, loading, disabled, error — whichever your component really has.
- State 2 · its name and the condition that produces it
- State 3 · its name and the condition that produces it
- State 4 · its name and the condition that produces it
- State 5 · its name and the condition that produces it
- State 6 · its name and the condition that produces it

<details>
<summary>Help with this step</summary>

- **State:** How the component looks and behaves under one condition. The condition is part of the specification.
- **Focus:** Where the keyboard currently is. It is not the same as hover, and it must be visible.

Stuck starting? Write default first, then ask what happens on the keyboard, on a slow connection, and when the action is unavailable.

Is it enough? Every state names the condition that produces it, not just the appearance.

</details>

#### 2. Build each state from tokens only

**See it first.** Made-up example. Building the hover state of a Reserve button from the sheet, and inventing a colour the moment the sheet ran out.

- **Where it went smoothly:** The default state came straight off the sheet: surface-accent for the background, text-on-accent for the label, space-3 inside, radius-2 on the corners. Every value already had a name.
- **Where it stopped:** Hover needs a slightly darker accent. The sheet has one accent and nothing darker than it.
- **What I did:** I darkened it by eye until it looked right and wrote that value straight into the drawing. Thirty seconds, and the state looked finished.
- **What that quietly cost:** The number now exists in one drawing and nowhere else. The next component that needs a hover will be darkened by eye again, slightly differently, and nobody will ever know why the two disagree.
- **What I did instead:** I left the state marked “needs accent-dark”, put accent-dark on the missing list, and wrote the value I had guessed beside it as a proposal rather than a decision.

**The wrong turn:** The wrong turn is that inventing a value feels like progress and recording a gap feels like stopping. The invented value is the dangerous one precisely because it works here.

**What it costs:** The state stays unfinished until the sheet catches up, and you will collect several of these before it is complete. A drawing with holes in it is harder to show anybody.

**Still unknown:** Still unknown: whether one darker accent covers every case, or whether hover on a muted surface needs its own. That only shows up when you build the second component.

- Specify each state using only tokens from your sheet. Every time you cannot, stop and record the missing token rather than inventing a value silently.

**You should end up with:** Each state built from tokens only, with every missing token recorded rather than invented.

Worksheet fields for this step:

- For each state: the tokens it uses
- Every token you needed and did not have — Record it rather than inventing a value silently. These go back into the sheet.

<details>
<summary>Help with this step</summary>

- **Token:** A named entry on your sheet standing for one value, used everywhere that value is needed.
- **Raw value:** A number or colour written straight into the design instead of a token name. It works in one place and matches nowhere else.

Stuck starting? Take the default state and write the token name for every value it uses.

Is it enough? Nowhere did you write a raw value; where you wanted to, the token is on the missing list.

</details>

#### 3. Design the focus appearance

- Give keyboard focus its own visible treatment and token. Check it is distinguishable from hover and visible against every surface the component sits on.

**You should end up with:** A focus appearance with its own token, distinguishable from hover and visible on every surface.

**Try it with help.** A supplied focus treatment from the same made-up project: on focus the button’s background lightens slightly, which is also exactly what happens on hover.

What is wrong with that, and what is the smallest fix?

- **Focus and hover are indistinguishable, so a keyboard user cannot tell where they are; give focus its own visible outline offset from the control.** — Focus needs to be unmistakable and must not depend on a mouse being present. An outline sitting just outside the control works on every surface.
- Nothing: a lightened background is visible, which is what focus needs. — Visible is not enough if it means two different things. A mouse user hovering and a keyboard user focusing see the same thing.
- Remove the hover effect so the lightening only means focus. — That solves the ambiguity by removing useful mouse feedback, and the focus signal remains a subtle background change.
- Rely on the browser default focus ring. — A reasonable starting point and it often fails against particular surfaces, which is why the lesson asks you to check it against each one.

**Then:** Give your own focus state a token of its own and check it against every surface the component sits on.

Worksheet fields for this step:

- What focus looks like, and which token carries it — It must differ from hover, and be visible against every surface the component sits on.
- Where you checked it, and against which surfaces

<details>
<summary>Help with this step</summary>

- **Hover:** How a control looks while a pointer is resting on it. There is no hover on a phone.
- **Surface:** The background a component sits on. The same focus ring can be unmistakable on one surface and invisible on another.

Stuck starting? Draw the focused state beside the hovered one and ask whether you could tell them apart across the room.

Is it enough? Focus differs from hover in kind, not only in degree.

</details>

#### 4. Make disabled comprehensible

**See it first.** Made-up example. Specifying the disabled Reserve button on a full class.

- **What I did first:** Took the default button and set it to 40 per cent opacity. One line, done.
- **What that produced:** The label became unreadable, the background turned into an unpredictable blend of the button and whatever was behind it, and the control still looked pressable.
- **The worse problem:** It said nothing. A reader sees a faded button and cannot tell whether the class is full, whether they must sign in, or whether the page is broken.
- **What I specified instead:** Its own tokens: surface-muted for the background, text-disabled for the label, no border. Deliberately flat, so it does not read as pressable.
- **The words that did the real work:** Beneath it: “Saturday is full. Sunday at 11 has two places.” The state explains itself and offers the next move.

**The wrong turn:** The wrong turn is treating disabled as a visual effect. Opacity is cheap to apply and communicates nothing, while quietly breaking contrast.

**What it costs:** Its own tokens mean two more entries on the sheet and a sentence to write for each disabled case. It is what turns a dead end into a next step.

**Still unknown:** Still unknown: whether the explanation is noticed where it sits. That is a question for a person, not for the sheet.

- Specify disabled with its own tokens, then write the words that tell the reader why the control is unavailable and where those words appear.

**You should end up with:** A disabled state with its own tokens, and words explaining why the control is unavailable.

Worksheet fields for this step:

- The tokens disabled uses (not the default at reduced opacity)
- The words telling the reader why it is unavailable, and where they appear

<details>
<summary>Help with this step</summary>

- **Disabled:** A control that is visible but cannot be used at this moment, and the reason belongs on the screen.
- **Opacity:** How see-through something is drawn. Below full, whatever sits behind mixes in, so the result is not a colour you chose.

Stuck starting? Write the sentence a reader needs before you choose any colour.

Is it enough? The disabled state does not rely on opacity and the reader is told why.

</details>

#### 5. Document and save

- Write the state table: state, condition, tokens used, notes. Save it with the new tokens you had to add.

**You should end up with:** Where the state table lives, and the repair the Check questions asked for.

Worksheet fields for this step:

- Where the state table lives
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **State table:** The written record of your component: each state, the condition that produces it, and the tokens it uses.
- **Condition:** The circumstance that brings a state about, such as the class being full. It is part of the specification, not a side note.

Stuck starting? Write the table as state, condition, tokens used, notes.

Is it enough? The new tokens you needed have been added to the sheet from lesson 8.

</details>

**Save and continue.** Saved for you: The state list, tokens and disabled wording save as you type, on this device first and then online. Kept outside the app: The drawn states stay in your own folder; name them here. If you built the component in a local HTML file, keep that file too and name it. What your creator sees: Your creator reads the state table, the focus treatment and the disabled wording. The missing-token list shows how the sheet is maturing. Your next action: Open Your work and choose Ready for review. The last lesson rebuilds a whole Module 1 screen from the sheet and compares the two honestly.

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

Draw the states in a row so changes can be compared directly.

</details>

<details>
<summary>Hint 2</summary>

Hover cannot carry information needed on touch. A focus drawing documents intent; it does not prove working keyboard access.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Applying the system to one component set.
Task: Specify one component across default, hover, focus, disabled and loading states, using the token sheet rather than introducing unexplained values.
Challenge one thing at a time, and start with the mistake this lesson is about: “The disabled state is just the default at reduced opacity.” Reducing opacity uniformly changes the background as well as the text, can produce an unpredictable composite over whatever is behind it, and often makes the label unreadable while leaving the control looking pressable. Specify a disabled state with its own tokens instead.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the extended state table with conditions and ask whether all real states are enumerated with their conditions. Look at the state table with token names and the updated sheet and ask whether states are built from tokens, with gaps recorded not invented. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m03-l09-v1/work.md. Keep source observations separate from interpretations.
- Keep labelled paper originals or save readable images as before-01.jpg and after-01.jpg in the same folder. Preserve any editable digital source.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** Each state has a trigger, visible response and named tokens, with specification distinguished from runtime testing.

**Bring forward:** Bring the state set and token sheet into the module rebuild review.


### Practice and pause points

- Choose the component and enumerate states (~20 min): Pick one component your screen genuinely needs. List every state it will really have, including the condition that produces each one.
- Build each state from tokens only (~35 min): Specify each state using only tokens from your sheet. Every time you cannot, stop and record the missing token rather than inventing a value silently.
- Design the focus appearance (~25 min): Give keyboard focus its own visible treatment and token. Check it is distinguishable from hover and visible against every surface the component sits on.
- Make disabled comprehensible (~25 min): Specify disabled with its own tokens, then write the words that tell the reader why the control is unavailable and where those words appear.
- Document and save (~15 min): Write the state table: state, condition, tokens used, notes. Save it with the new tokens you had to add.

Pause after any step; save the artifact and next action.

**Free tool path.** Draw each state on paper as a labelled row in a table; that is a complete specification. A local HTML file lets you actually reach the focus state with the Tab key, which is the honest way to check it, and needs no account or design tool.

### Output

One component specified in all its states, a state table giving state, triggering condition and tokens used, the new tokens added to the sheet, and the disabled-state explanation text.

### Checks

- Why is hover not a substitute for focus? Answer: Hover requires a pointer. A person navigating with a keyboard never triggers it, so without a distinct focus appearance they cannot tell which control they are on. The two states also often need to look different from one another.
- Your disabled button passes the contrast exception. Is it finished? Answer: Not necessarily. The exception means it is not a contrast failure, but the reader still needs to know what the control is and why it is unavailable. That is a comprehension requirement, and it is usually met with words rather than colour.
- Is this component set a component library? Answer: No. It is one component proving that your tokens hold up across real states. A library, with variants, documentation and governance, is the design systems module's work much later in the course.

### Rubric and remediation

**All real states are enumerated with their conditions**

Adequate evidence: A state table listing each state and the specific condition that produces it, including at least default, focus, disabled and one asynchronous state if the action takes time.

- 0 — Only the default is specified.
- 1 — Several states listed but conditions are absent or focus is missing.
- 2 — All real states are present with their triggering conditions.
- 3 — As adequate, and a state was added because of something specific about this product, such as a slow network or an offline case.

If below 2: Walk through using the component as a reader: before acting, while acting, when not allowed, when it fails. Add any state that walk reveals, with its condition. Show at recheck: The extended state table with conditions.

**States are built from tokens, with gaps recorded not invented**

Adequate evidence: Each state names the tokens it uses, and every value that had no token is listed as a token added to the sheet.

- 0 — Values were chosen freely without reference to the sheet.
- 1 — Tokens are mostly used but some invented values are unrecorded.
- 2 — Every value is a token, and additions are recorded on the sheet.
- 3 — As adequate, and one addition prompted a change to an existing token's role rather than a new token, with the reason.

If below 2: Go through your states and mark every value that is not on the sheet. Add each as a named token with a role, or replace it with an existing token. Show at recheck: The state table with token names and the updated sheet.

**Focus is designed deliberately and checked**

Adequate evidence: A focus appearance with its own token, visibly different from hover, checked against every surface the component appears on.

- 0 — No focus state, or the default was removed.
- 1 — A focus state exists but is identical to hover or unchecked against surfaces.
- 2 — Focus is distinct, tokenised and checked on each surface.
- 3 — As adequate, and the focus indicator's own contrast against its adjacent colours is measured.

If below 2: Specify a focus appearance that does not rely on the same signal as hover, then place the component on each surface it uses and confirm the indicator remains visible. Show at recheck: The focus specification and the per-surface check.

**Disabled communicates, not merely dims**

Adequate evidence: A disabled specification with its own tokens plus the words that explain unavailability and where they appear.

- 0 — Disabled is uniform opacity applied to the default.
- 1 — Disabled has its own appearance but no explanation for the reader.
- 2 — Disabled has its own tokens and an explanation with a stated location.
- 3 — As adequate, and the explanation is written so it also answers what the reader could do to make the control available.

If below 2: Replace any blanket opacity with explicit tokens for the disabled label and surface, then write one sentence the reader would see explaining why the control is unavailable. Show at recheck: The disabled specification and its explanatory sentence.

### Portfolio contribution

Practice, with a usable artefact. The state table is good evidence of thoroughness in a case study. It is one component, not a component library, and the write-up must say so.

### Assigned resources

- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — The style pages covering how states and their usage are described, read as an example of documenting behaviour alongside appearance. Purpose: Shows the level of specification a component needs before someone else can build it. Effort: 25–40 selected min. Free reading, no account. Verified 2026-09-06. The full component and variant repertoire is m08 and m13 work, not this lesson's. Fallback: R03.

## Lesson 10: Rebuild and critique: what the system changed

Stable ID: m03-l10-v1. Core. Areas 1, 8. Optional effort ~120 min.

**Objective.** Rebuild one complete Module 1 screen using only your token sheet and component work, then critique both versions against usability heuristics and separate craft improvements from claims about outcomes.

**Bring forward.** Your original Module 1 screen, the token sheet, the component state table and every artefact from this module.

Ten lessons of decisions are worth nothing until one whole screen is rebuilt from them, and the rebuild is also the moment to be honest that a better-looking screen is not yet a better-working one.

### Learn

Rebuilding from a system is a test of the system, not of your taste. Every point where you reach past the token sheet for a value is a defect in the sheet, and the count of those moments is the most useful number this lesson produces. A rebuild that required no additions probably means the screen was too similar to the one the sheet was derived from.

Heuristic critique and evidence are different instruments and produce different sentences. A heuristic review says “this violates a recognised principle in the following specific way”, which is an expert judgement you can act on cheaply. It cannot say “this is better for readers”, because no reader was involved. Keep the two kinds of statement in separate columns so a stakeholder cannot mistake one for the other.

Critique your own work by re-describing it, not by defending it. Write what each change was intended to achieve, then what a reader would actually experience differently, then what you cannot know. The third column is the one that keeps the write-up honest and the one that most portfolios omit entirely.

Visual craft has real limits worth naming. A refreshed screen can improve legibility, grouping and consistency, and still fail because the underlying flow is wrong, the content is unclear or the task itself was misunderstood. Those are the problems the research and flow modules address, and this module's improvements do not touch them.

**Common misconception.** “The redesign is a portfolio case study.” It is a craft artefact. A case study needs a problem, evidence about people, decisions traceable to that evidence, a test and honest measurement. A before-and-after image with no participant is a visual comparison, and presenting it as a case study is the most common way portfolios lose credibility.

### Worked example

A rebuilt workshop detail screen needed six values not on the token sheet — a focus colour on a dark surface, two spacing values for a dense metadata row, and three type sizes for a table. The heuristic review then found four issues, only one of which the visual refresh had addressed: the error message still appeared far from the field that caused it, which is a visibility-of-status problem no palette can fix. The write-up recorded one improvement, three unresolved issues and zero measured outcomes.

#### Independent craft review

Rebuild your original screen with the system you developed, then defend the changes using your saved comparisons and measurements.

**Where to practise:** Draw the rebuilt screen beside the original on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper, pencil, ruler, a camera if available, and a local text editor. Optional Figma Starter route below.

- Starting material: Your original Module 1 screen, the token sheet, the component state table and every artefact from this module.
- Create HaruCourse/Practice/m03-l10-v1 in your Documents folder. Open a blank text file and save it as work.md inside that folder; it is ordinary text.
- Copy the starter below into that file. Replace bracketed placeholders with your work; add rows as needed.
- Draw and label each screen or state on a separate sheet. Keep the original before changing it. If photographing, use even light and check that all labels are readable.

</details>

#### 1. Rebuild from the system

- Rebuild the whole screen using only your token sheet and component specifications. Log every moment you had to reach past them.

**You should end up with:** The rebuilt screen, and every place the sheet could not carry you.

Worksheet fields for this step:

- Which Module 1 screen you rebuilt
- Anything you could not build from the sheet and component work alone — Every one of these is a gap in the system, not a failure of the screen.

<details>
<summary>Help with this step</summary>

- **Token sheet:** The list of named values you built in lesson 8: every colour, size and space the system allows.
- **Gap:** Something the screen needed and the sheet does not contain. It is what the rebuild is for, not a sign the rebuild went badly.

Stuck starting? Put the original out of sight and rebuild from the sheet and the state table.

Is it enough? The gap list is honest; a system that covered everything on its first outing is unlikely.

</details>

#### 2. Heuristic review of both versions

**See it first.** Made-up example. Comparing the two versions of a class details screen after the rebuild.

- **What I wanted to write:** “The new version is much clearer and will convert better.” I believed it and it was two claims, both unsupported.
- **What I could actually support:** Every text element now meets its contrast threshold, the measure is 68 characters rather than 101, and each group’s outside gap exceeds its inside gap. Those are measured.
- **What the heuristics found:** Both versions are silent while the booking is confirmed. The system work never touched it, because it is a behaviour rather than a surface.
- **What that told me:** The rebuild improved craft and left one real usability problem untouched. Saying so is more useful than a claim about conversion.
- **The honest summary:** The screen is measurably more legible and better grouped. Nobody has used either version, so nothing is known about outcomes.

**The wrong turn:** The wrong turn is letting the visible improvement stand in for evidence about people. The new screen looks better to the person who made it, which is the weakest possible test.

**What it costs:** The honest summary is less impressive and it is the one that survives a reviewer asking how you know.

**Still unknown:** Still unknown: whether anyone finds the price faster. That needs a person and a task, which is Module 2 work.

- Review the original and the rebuild against the ten heuristics. Record each issue with the heuristic it violates and the specific element it concerns.

**You should end up with:** Three heuristics applied to both versions.

Worksheet fields for this step, revealed a few at a time in the app:

- Heuristic 1 · what it names, and what each version does about it
- Heuristic 2 · what it names, and what each version does about it
- Heuristic 3 · what it names, and what each version does about it

<details>
<summary>Help with this step</summary>

- **Heuristic:** A rule of thumb from experience. It identifies a risk worth checking; it cannot report that a person failed.

Stuck starting? Choose the three heuristics most relevant to a booking screen and apply each to both versions.

Is it enough? At least one heuristic finds a problem the rebuild did not fix.

</details>

#### 3. Separate the columns

- Build a three-column table: what changed, what a reader would experience differently, and what you cannot know without evidence. Fill all three honestly.

**You should end up with:** Craft improvements with evidence, and outcome claims rewritten honestly.

**Try it with help.** Three supplied sentences from the same made-up write-up. A: “Every text element now meets its contrast threshold, measured with the calculator.” B: “The line length is now 68 characters, counted over three lines.” C: “The redesign makes the screen easier to use.”

Which sentence cannot be supported by anything in this module, and why?

- **C, because ease of use is a claim about people and nobody has used either version.** — A and B report measurements you took. C reports an outcome that would need a person attempting a task, which this module never did.
- A, because contrast measurements are only estimates. — They are calculated from stated colour values, so within their scope they are exact. What they do not establish is readability in every condition.
- B, because character counts vary by content. — The count is of your real content, over three lines, and it is reported as such. It is a measurement with a stated method.
- None: all three follow from careful work. — Careful work supports A and B. C requires evidence of a different kind entirely, and this module produced none of it.

**Then:** Sort your own sentences the same way: what you measured, and what would need a person.

Worksheet fields for this step:

- What genuinely improved in the craft, and how you can tell — Measured contrast, a counted measure, a proven grouping gap: things with evidence behind them.
- Anything you were tempted to claim about outcomes, rewritten honestly

<details>
<summary>Help with this step</summary>

- **Craft improvement:** A change to the surface you can show by measuring, such as contrast or the number of characters in a line.
- **Outcome claim:** A sentence about what people will do or find easier. It needs a person attempting a task behind it.

Stuck starting? List what you measured in this module first; those are the claims you can keep.

Is it enough? No sentence claims a change in what people will do.

</details>

#### 4. Name what craft did not fix

**See it first.** Made-up example. Listing what the rebuild left unfixed, and filling the list with things the sheet could fix in an afternoon.

- **My first list:** Three items: the button colour still feels heavy, the gap under the heading is tight, the price sits too low on the page.
- **What I noticed about them:** All three are token decisions. Any of them could be settled with the sheet I already have, which makes them gaps from step 1, not things a system cannot reach.
- **The question I asked instead:** What is wrong with this screen that no amount of colour, spacing or type would touch?
- **The first real one:** The screen never says whether Reserve holds a place or takes the money. No token answers that. It needs a decision about the product, and then words.
- **The second real one:** I do not know whether people arrive knowing which class they want or wanting to browse. The whole structure rests on an answer nobody has looked for.

**The wrong turn:** The wrong turn is filling the list with visual complaints. They are easy to see, they show you are still being critical, and they are the work you already know how to do.

**What it costs:** A list of two real problems looks thinner than a list of six, and neither of the real ones can be fixed this week. Naming them means carrying them.

**Still unknown:** Still unknown: whether the missing sentence about holding against paying is the biggest problem or merely the most visible one. Only somebody attempting the task would say.

- List the issues from the review that visual work cannot resolve, and say which later module addresses each one.

**You should end up with:** What is still wrong that a design system cannot fix.

Worksheet fields for this step:

- What is still wrong with the screen that a design system cannot fix — Wrong information, a missing step, an unanswered question about the reader.

<details>
<summary>Help with this step</summary>

- **Design system:** Tokens, components and rules together: everything that decides how the surface looks and behaves.
- **Unresolved list:** The record of what is still wrong once the rebuild is done, kept visible so it is not quietly dropped.

Stuck starting? Look for a missing step, missing information, or a question about the reader that no amount of craft answers.

Is it enough? The list contains at least one thing that needs research or a behaviour change rather than a token.

</details>

#### 5. Submit and request review

- Save all artefacts, record your actual minutes, and set the practice status to ready for review with references to your outputs.

**You should end up with:** Where both versions live, and the repair the Check questions asked for.

Worksheet fields for this step:

- Where the original and the rebuild live
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Original:** The untouched Module 1 screen. It is evidence, so it does not get tidied afterwards.
- **Pair:** The two versions kept together. Neither one on its own shows what changed.

Stuck starting? Keep the original and the rebuild side by side; the pair is the evidence.

Is it enough? Both versions exist, are named, and the original is unchanged.

</details>

**Save and continue.** Saved for you: The critique, the claims and the unresolved list save as you type, on this device first and then online. Kept outside the app: The original and the rebuild stay in your own folder. Keep the original untouched; the pair is what makes the comparison meaningful. What your creator sees: Your creator reads the critique, what you could measure and what you deliberately did not claim. The unresolved list is the most useful part of the module. Your next action: Open Your work and choose Ready for review. This closes the visual foundations module; the reasoning modules build on the same screens.

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

Choose which evidence best supports each decision; do not repeat every exercise in the presentation.

</details>

<details>
<summary>Hint 2</summary>

A polished comparison is a craft artifact. A full case study also needs a real problem, research, testing and honest outcomes.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Rebuild and critique: what the system changed.
Task: Rebuild your original screen with the system you developed, then defend the changes using your saved comparisons and measurements.
Challenge one thing at a time, and start with the mistake this lesson is about: “The redesign is a portfolio case study.” It is a craft artefact. A case study needs a problem, evidence about people, decisions traceable to that evidence, a test and honest measurement. A before-and-after image with no participant is a visual comparison, and presenting it as a case study is the most common way portfolios lose credibility.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the exception log with a resolution for each entry and ask whether the rebuild used the system and logged every exception. Look at the rewritten issue list and ask whether heuristic issues are specific and attributed. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save your filled template as HaruCourse/Practice/m03-l10-v1/work.md. Keep source observations separate from interpretations.
- Keep labelled paper originals or save readable images as before-01.jpg and after-01.jpg in the same folder. Preserve any editable digital source.
- In Your work, record the file location or a reviewable link, your decision, evidence limits and next action. A local path is a locator, not an upload or a file another device can open.
- For remote review, share only the selected anonymized artifacts through your existing file-sharing method. Check viewer access; keep consent records private.

**Adequate evidence:** The review traces changes to the system and evidence while identifying remaining usability questions.

**Bring forward:** File selected comparisons in your evidence bank; reuse the method, not unsupported outcomes, in Project 1.


### Practice and pause points

- Rebuild from the system (~30 min): Rebuild the whole screen using only your token sheet and component specifications. Log every moment you had to reach past them.
- Heuristic review of both versions (~25 min): Review the original and the rebuild against the ten heuristics. Record each issue with the heuristic it violates and the specific element it concerns.
- Separate the columns (~25 min): Build a three-column table: what changed, what a reader would experience differently, and what you cannot know without evidence. Fill all three honestly.
- Name what craft did not fix (~25 min): List the issues from the review that visual work cannot resolve, and say which later module addresses each one.
- Submit and request review (~15 min): Save all artefacts, record your actual minutes, and set the practice status to ready for review with references to your outputs.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper throughout is acceptable; the heuristic review is a written table either way. A local HTML rebuild has the advantage that the tokens become real values you can change in one place, but it is optional and no account or paid tool is involved.

### Output

The rebuilt screen, a log of every value not covered by the token sheet, a heuristic review of both versions, the three-column change table, and the list of issues visual work cannot fix with the module that addresses each.

### Checks

- What does the count of reaches past the sheet tell you? Answer: How incomplete the sheet is, in specific places. Each one is a decision that would otherwise be made inconsistently by whoever builds the next screen, and the list is the most actionable output of the rebuild.
- A heuristic review found eleven issues. Have you proven the screen is hard to use? Answer: No. You have produced expert judgements against recognised principles, which is a cheap and useful way to find candidates. Whether readers actually struggle, and with which of the eleven, needs people attempting the task.
- Is this module's output a portfolio case study? Answer: No. It is craft evidence — a system, a rebuild and an honest critique — that can form the system or craft section of a case study built later on real research and testing.

### Rubric and remediation

**The rebuild used the system and logged every exception**

Adequate evidence: The rebuilt screen plus a numbered log of each value reached for outside the token sheet, with what it was needed for.

- 0 — The screen was redesigned freely without reference to the sheet.
- 1 — The sheet was used but exceptions were not logged.
- 2 — Every exception is logged with its purpose.
- 3 — As adequate, and each logged exception is resolved into a token or explicitly rejected with a reason.

If below 2: Go through the rebuilt screen and mark every value that is not on the sheet. For each, either add a role-named token or record why it should stay a one-off. Show at recheck: The exception log with a resolution for each entry.

**Heuristic issues are specific and attributed**

Adequate evidence: Each issue names the heuristic and the exact element or moment, not a general impression.

- 0 — No review, or only general impressions.
- 1 — Issues listed without naming heuristics or elements.
- 2 — Each issue names its heuristic and its specific element.
- 3 — As adequate, and issues are ordered by likely cost to the reader with the reasoning stated.

If below 2: Rewrite each issue in the form: heuristic, element, what happens, why that is a problem. Delete any entry you cannot state that way. Show at recheck: The rewritten issue list.

**Craft claims are separated from outcome claims**

Adequate evidence: A three-column table where the third column genuinely contains what is unknown, not a restatement of the change.

- 0 — Improvements are asserted as outcomes.
- 1 — A caveat exists but the unknown column is empty or generic.
- 2 — All three columns are filled and the unknown column names specific things evidence would be needed for.
- 3 — As adequate, and one unknown is turned into a concrete question a reader could be asked in the next module.

If below 2: For every row where you wrote an experience claim, ask how you know. If the answer is that it looks better, move the claim to the unknown column and rewrite it as a question. Show at recheck: The corrected three-column table.

**The limits of visual work are named with their later module**

Adequate evidence: A list of review issues visual work cannot resolve, each mapped to the module that addresses it.

- 0 — No limits acknowledged.
- 1 — Limits acknowledged generically without mapping.
- 2 — Each unresolved issue is mapped to the module that will address it.
- 3 — As adequate, and one issue is identified as possibly a problem with the task or content rather than the interface at all.

If below 2: Take your heuristic issues and mark each as fixable by visual craft, by flow or structure, or by research. Map the second and third groups to the modules that cover them. Show at recheck: The mapped issue list.

### Portfolio contribution

The strongest artefact of this module and still not a case study. Use the rebuild and critique as the craft and system evidence inside a case study whose problem, research and testing come from later modules. Do not present the before-and-after as a measured improvement.

### Assigned resources

- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — All ten heuristics with their examples. Purpose: Provides the shared vocabulary for a critique that names principles rather than preferences. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. Heuristics are expert judgement, not evidence from readers, and they are not universal laws. Fallback: R11.
