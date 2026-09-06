# Interface craft and design tools

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
