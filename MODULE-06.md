# Information architecture

> Experience refinement is applied lesson by lesson. See [the agreed learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for guided practice, worksheets, videos, free-tier constraints and the refinement ledger that records which lessons carry the guided worksheet. Existing teaching and diagnostic independence remain in force.

Generated from src/module6.ts; edit that source, then run npm run docs:generate. Level 2 · Module m06 · requirement areas 5. Optional effort 25 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m05. This is guidance for meaningful practice, not a lock. Module approved resource pair: R09 / R10. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: Inventory what exists and what it is called

Stable ID: m06-l01-v1. Core. Areas 5. Optional effort ~120 min.

**Objective.** Produce a content inventory of at least forty items for one real product area, each row carrying its current label, what it actually is, who needs it and whether anything makes it findable today.

**Bring forward.** Your m05 findings, your marked experience map and your raw interview notes. The notes matter most here, because they contain the words people used for things — which is rarely what the product calls them.

You cannot organise what you have not listed. Every structure argument that goes in circles — should this be under Help or under Account? — is usually an argument between two people holding different mental lists, and the argument ends the moment the list is on the table.

### Learn

An inventory is a flat list of everything a person might need: pages, but also the answers buried inside pages, the things only available by asking someone, the PDF nobody has opened since 2019, and the piece of information that exists only in an email confirmation. Product teams habitually inventory their own pages and stop, which produces a structure that organises the website rather than the knowledge, and leaves the most-asked question living in a support reply.

Record three things about every item, and the third is the one people skip. What it is currently called, in the product's exact words. What it actually is, in one plain sentence written by you. And who needs it and when — because an item nobody in your research ever needed is a candidate for removal, and removing things is the cheapest structural improvement there is.

Note how each item is reachable today: in the main navigation, only from one page deep inside, only by search, only by asking. This column is where the real problems announce themselves. A crucial item reachable only from the confirmation email is not an information architecture problem you can fix by renaming a menu, and knowing that before you draw a sitemap saves you drawing the wrong one.

Forty items is a threshold, not a target. Below about forty, any structure looks fine and the exercise teaches nothing; a real product area has hundreds. If your practice product is small, extend the inventory to everything a person needs across the whole task — including the things currently supplied by a person, a phone call or a WhatsApp message, which is the ordinary situation for a small business in India and elsewhere, and which the eventual structure has to account for rather than ignore.

**Common misconception.** “The inventory is the boring part before the real design work.” It is where most of the findings are. The duplicate that says two different things, the item that exists in three places with three names, the answer that lives only in someone's head — none of those are visible in a sitemap, and all of them are visible in a flat list with a plain-language column.

### Worked example

An inventory of a class provider's information reached fifty-three items. Eleven were pages. The rest included: what to bring, which existed as a sentence inside a PDF and as a different sentence in the confirmation email; the cancellation policy, which existed only in a WhatsApp reply the owner typed out each time; three items called “Details” meaning three unrelated things; and a “Resources” page nobody in five interviews had ever mentioned. Before any structure was drawn, two decisions were already obvious: the two versions of what to bring had to be reconciled, and the cancellation policy had to exist somewhere a person could reach without asking.

#### Inventory what exists and what it is called

Produce a content inventory of at least forty items for one real product area, each row carrying its current label, what it actually is, who needs it and whether anything makes it findable today.

**Where to work:** A spreadsheet if you have one, or a plain text table, or index cards — cards are genuinely better for the next four lessons because you will be sorting them by hand. Write each item on a card now and you will not have to transcribe later. No IA or content-audit tool is required.

- Starting material: Your m05 findings, your marked experience map and your raw interview notes. The notes matter most here, because they contain the words people used for things — which is rarely what the product calls them.
- Create HaruCourse/Practice/m06-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Inventory what exists and what it is called

Input artifact: Your m05 findings, your marked experience map and your raw interview notes. The notes matter most here, because they contain the words people used for things — which is rarely what the product calls them.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A content inventory of at least forty items with current label, plain-language description, who needs it, and how it is reachable today; a marked list of collisions; and counts of items, collisions and items nobody needed.

## 1. Set the boundary
- Read the assigned needs page. Write which product area you are inventorying and where its edges are, then list the three tasks from your research that this area has to support.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. List everything
- Work through the product, the support material, your notes and any messages, adding one row per item: current label, what it actually is, who needs it and when. Do not organise anything yet.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Add the reachability column
- For each item, record how a person reaches it today: main navigation, one page deep, search only, email only, or by asking a human. Mark the items your research showed people actually needed.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Find the collisions
- Mark duplicates, contradictions, items sharing a label and items with no owner. Write a one-line note for each collision; several will turn out to be content problems rather than structure problems.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Count and pause
- Count the items, the collisions and the items nobody needed. Save the inventory as a table; every later lesson in this module works from it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The inventory covers answers, not only pages: [evidence reference]
- Every item carries a plain-language description: [evidence reference]
- Reachability today is recorded per item: [evidence reference]
- Collisions are identified and counted: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Take the three tasks from your research and walk each one, writing down every question a person has to answer to finish it. Add every answer that is not already a row.

</details>

<details>
<summary>Hint 2</summary>

For each row, complete “this tells someone …”. Any row you cannot complete either needs opening and reading, or does not contain what its label promises.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m06-l01-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The inventory covers answers, not only pages: At least forty items including things that live in emails, documents, messages or people's heads, not merely a page list. Every item carries a plain-language description: A one-sentence description per item written in your own words, distinct from the product's label. Reachability today is recorded per item: A route recorded for every item, with the ask-a-human and email-only cases identified. Collisions are identified and counted: A marked list of duplicates, contradictions and shared labels, with counts.

**Bring forward:** Project evidence for the research-led project and the least glamorous artefact in this module. Include it as a summarised table or a photograph of the cards; a reviewer who sees a real inventory knows the structure that follows was not invented in an afternoon. Module handoff: Build task flows in m07


### Practice and pause points

- Set the boundary (~20 min): Read the assigned needs page. Write which product area you are inventorying and where its edges are, then list the three tasks from your research that this area has to support.
- List everything (~40 min): Work through the product, the support material, your notes and any messages, adding one row per item: current label, what it actually is, who needs it and when. Do not organise anything yet.
- Add the reachability column (~25 min): For each item, record how a person reaches it today: main navigation, one page deep, search only, email only, or by asking a human. Mark the items your research showed people actually needed.
- Find the collisions (~20 min): Mark duplicates, contradictions, items sharing a label and items with no owner. Write a one-line note for each collision; several will turn out to be content problems rather than structure problems.
- Count and pause (~15 min): Count the items, the collisions and the items nobody needed. Save the inventory as a table; every later lesson in this module works from it.

Pause after any step; save the artifact and next action.

**Free tool path.** A spreadsheet if you have one, or a plain text table, or index cards — cards are genuinely better for the next four lessons because you will be sorting them by hand. Write each item on a card now and you will not have to transcribe later. No IA or content-audit tool is required.

### Output

A content inventory of at least forty items with current label, plain-language description, who needs it, and how it is reachable today; a marked list of collisions; and counts of items, collisions and items nobody needed.

### Checks

- Why inventory things that are not pages? Answer: Because people need answers, not pages, and the most-needed answer is often the one that lives in an email, a PDF or a person's head. A structure built only from existing pages preserves exactly the gap that sends people to ask someone.
- You find one item with three different names in three places. Is that an IA problem? Answer: Partly. The structural half is that three routes exist to what should be one thing. The content half is that the three say different things, and no menu design fixes a contradiction — that needs a decision about which is true.
- What does the reachability column buy you? Answer: It separates problems of naming and grouping, which you can fix by restructuring, from problems of absence, which you cannot. An item reachable only by asking a person is missing, not misfiled.

### Rubric and remediation

**The inventory covers answers, not only pages**

Adequate evidence: At least forty items including things that live in emails, documents, messages or people's heads, not merely a page list.

- 0 — A list of existing pages.
- 1 — Mostly pages, with a few embedded items.
- 2 — Forty or more items including non-page sources of answers.
- 3 — As adequate, and the inventory names at least one thing people need that exists nowhere at all.

If below 2: Take the three tasks from your research and walk each one, writing down every question a person has to answer to finish it. Add every answer that is not already a row. Show at recheck: The extended inventory with its new rows marked.

**Every item carries a plain-language description**

Adequate evidence: A one-sentence description per item written in your own words, distinct from the product's label.

- 0 — Labels only.
- 1 — Descriptions that repeat the label in different words.
- 2 — Each item has a plain sentence saying what it actually is.
- 3 — As adequate, and at least one description reveals that the label is wrong for what the item contains.

If below 2: For each row, complete “this tells someone …”. Any row you cannot complete either needs opening and reading, or does not contain what its label promises. Show at recheck: The described inventory.

**Reachability today is recorded per item**

Adequate evidence: A route recorded for every item, with the ask-a-human and email-only cases identified.

- 0 — No reachability recorded.
- 1 — Recorded for navigation items only.
- 2 — Every item has a route, including the ones only reachable by asking.
- 3 — As adequate, and the items your research showed people needed are cross-marked, so the gap between needed and reachable is visible at a glance.

If below 2: Go through the inventory pretending you have never used the product and try to reach each item. Record what you actually had to do, not what you know. Show at recheck: The inventory with routes and the needed cross-marks.

**Collisions are identified and counted**

Adequate evidence: A marked list of duplicates, contradictions and shared labels, with counts.

- 0 — No collision analysis.
- 1 — Duplicates noted informally without counts.
- 2 — Collisions marked and counted, each with a one-line note.
- 3 — As adequate, and each collision is classified as a structure problem or a content problem, with the reason.

If below 2: Sort your inventory by label and read for repeats, then sort by description and read for the same thing under different names. Both passes find different collisions. Show at recheck: The collision list with counts and classifications.

### Portfolio contribution

Project evidence for the research-led project and the least glamorous artefact in this module. Include it as a summarised table or a photograph of the cards; a reviewer who sees a real inventory knows the structure that follows was not invented in an afternoon.

### Assigned resources

- R35: [GOV.UK: start by learning user needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs) — The section on needs across the whole journey, including the needs of the people who staff the service. Purpose: Keeps the inventory anchored to what people need to accomplish rather than to what the product currently publishes. Effort: 10–20 min. Free reading, no account. Verified 2026-09-06. It is about need statements rather than content inventories, so the inventory procedure here is the course's own. Fallback: R08.
- R09: [NN/g: card sorting](https://www.nngroup.com/articles/card-sorting-definition/) — The section on choosing which content items to use as cards, read now so your inventory rows are usable as cards in lesson 5. Purpose: Sets the granularity of an item so the inventory can be sorted later without being rewritten. Effort: 10–15 min. Free reading, no account. Verified 2026-09-06. The full method is used in lesson 5; here you need only the guidance on what makes a good item. Fallback: R10.

## Lesson 2: Labels in the words people actually use

Stable ID: m06-l02-v1. Core. Areas 5. Optional effort ~120 min.

**Objective.** Produce a labelling table for at least fifteen items, each showing the current label, the words participants used, the label you propose and the evidence for it, with every guessed label marked as a guess.

**Bring forward.** Your inventory and your m05 interview notes. The notes are the source of vocabulary; a label you invented at your desk is a hypothesis and must be marked as one.

Most findability failures are naming failures. The structure can be right and the person still fails, because the word on the menu is the word your organisation uses internally, and they were looking for the word they use at home.

### Learn

The second usability heuristic is the whole of this lesson: speak the user's language, with words and concepts familiar to them, rather than internal jargon. The trap is that internal words feel natural to you precisely because you use them daily, so the test can never be your own judgement. It has to be evidence — what your participants called the thing, unprompted, before you offered them a word.

Three kinds of bad label recur. The internal word names a department or a system: “Resources”, “Portal”, “My Account”. The clever word is invented for character and is unsearchable: “Toolbox”, “Hub”, “Journey”. And the abstract word is technically accurate and empty: “Information”, “Details”, “More”. Each fails the same test — a person scanning for a specific thing cannot tell whether their thing is inside it.

Good labels are usually longer and duller than the ones a team enjoys writing. “What to bring” beats “Preparation”. “Cancel or change a booking” beats “Manage”. Length costs a little space; ambiguity costs the person a wrong click, a back button and a small loss of trust — and if they were unsure of the site to begin with, they may not come back at all.

Harvest vocabulary from your notes systematically rather than from memory. Read every interview note and write down each noun a participant used for something in your inventory, in their exact words, with who said it. You will find that participants disagree, and the disagreement is information: two words for one thing often means two audiences, and sometimes it means the thing itself is two things.

**Common misconception.** “We should use the term the industry uses, so people learn the right word.” People do not arrive to learn your vocabulary; they arrive to do something. Where an unfamiliar term is genuinely unavoidable — a legal or regulatory word, a term used everywhere in the field — pair it with the familiar word rather than choosing between them, and put the familiar one first.

### Worked example

A menu item called “Resources” contained what to bring, directions and the cancellation policy. Across five interviews nobody said “resources” once. They said “the list of things I need”, “where it is”, and “what happens if I can't come”. The label became three separate items using close to those words. One label stayed contested: two participants called the session a “class” and two called it a “workshop”, which turned out to track whether they had attended before — so the site used “class” in navigation, where first-timers are, and kept “workshop” in the descriptions, where returning attendees read. That decision was recorded as a guess to be tested, because four people is not a vocabulary study.

#### Labels in the words people actually use

Produce a labelling table for at least fifteen items, each showing the current label, the words participants used, the label you propose and the evidence for it, with every guessed label marked as a guess.

**Where to work:** A four-column table on paper or in a text file. Write the proposed labels onto the cards from lesson 1, since the card sort in lesson 5 must use the items rather than your new labels — keep the new labels on the back so you do not lead your participants.

- Starting material: Your inventory and your m05 interview notes. The notes are the source of vocabulary; a label you invented at your desk is a hypothesis and must be marked as one.
- Create HaruCourse/Practice/m06-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Labels in the words people actually use

Input artifact: Your inventory and your m05 interview notes. The notes are the source of vocabulary; a label you invented at your desk is a hypothesis and must be marked as one.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A labelling table of at least fifteen items with current label, verbatim participant vocabulary, proposed label and evidence; guessed labels marked as guesses; and a written note per vocabulary conflict.

## 1. Read the heuristic and the sorting guidance
- Read the assigned heuristic on matching the user's language and the card-sorting notes on labels. Write the three worst labels in your inventory and why each fails.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Harvest vocabulary
- Read every interview note and record each word participants used for things in your inventory, verbatim, with who said it. Do not paraphrase into your own vocabulary as you go.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Build the labelling table
- For at least fifteen items, write current label, participant words, proposed label and the evidence. Where no participant ever mentioned the item, write your proposed label and mark it a guess.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Resolve or record the conflicts
- Where participants disagreed, decide what the disagreement means: two audiences, two things, or too little evidence. Record the decision and what would settle it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Read it cold and pause
- Read only your proposed labels, as a stranger scanning a menu. Mark any label that leaves you unable to say what is inside. Save the table.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Vocabulary is harvested verbatim from real notes: [evidence reference]
- Proposed labels are specific enough to scan: [evidence reference]
- Guessed labels are marked as guesses: [evidence reference]
- Vocabulary conflicts are interpreted, not resolved by preference: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Go back through the notes with the inventory beside you and mark every noun a participant used for a thing on your list. Copy them exactly, including the awkward ones.

</details>

<details>
<summary>Hint 2</summary>

For each label, write what a person would expect to find under it. Where your answer and the actual contents differ, the label is wrong, not the contents.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m06-l02-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Vocabulary is harvested verbatim from real notes: Participant words recorded exactly as said, attributed to a participant, for the items where evidence exists. Proposed labels are specific enough to scan: Labels that let a stranger say what is inside, with no internal, clever or abstract words surviving. Guessed labels are marked as guesses: Every label with no participant evidence behind it is visibly marked as a guess. Vocabulary conflicts are interpreted, not resolved by preference: Each conflict carries a written interpretation — two audiences, two things, or insufficient evidence — and what would settle it.

**Bring forward:** Portfolio material, and unusually persuasive: a before-and-after label table with verbatim quotations is concrete evidence that your decisions came from people. Keep the participant labels anonymous. Module handoff: Build task flows in m07


### Practice and pause points

- Read the heuristic and the sorting guidance (~20 min): Read the assigned heuristic on matching the user's language and the card-sorting notes on labels. Write the three worst labels in your inventory and why each fails.
- Harvest vocabulary (~35 min): Read every interview note and record each word participants used for things in your inventory, verbatim, with who said it. Do not paraphrase into your own vocabulary as you go.
- Build the labelling table (~30 min): For at least fifteen items, write current label, participant words, proposed label and the evidence. Where no participant ever mentioned the item, write your proposed label and mark it a guess.
- Resolve or record the conflicts (~20 min): Where participants disagreed, decide what the disagreement means: two audiences, two things, or too little evidence. Record the decision and what would settle it.
- Read it cold and pause (~15 min): Read only your proposed labels, as a stranger scanning a menu. Mark any label that leaves you unable to say what is inside. Save the table.

Pause after any step; save the artifact and next action.

**Free tool path.** A four-column table on paper or in a text file. Write the proposed labels onto the cards from lesson 1, since the card sort in lesson 5 must use the items rather than your new labels — keep the new labels on the back so you do not lead your participants.

### Output

A labelling table of at least fifteen items with current label, verbatim participant vocabulary, proposed label and evidence; guessed labels marked as guesses; and a written note per vocabulary conflict.

### Checks

- Why is “Details” a poor label? Answer: Because it is accurate about everything and specific about nothing. A person scanning for one thing cannot tell whether their thing is inside, so it converts a scan into a gamble.
- An industry term is unavoidable. What do you do with the familiar word? Answer: Pair them, with the familiar word first: the familiar word gets people to the right place, and the industry term teaches them the vocabulary they will meet elsewhere. Choosing only one loses either findability or accuracy.
- Two participants used different words for the same thing. What is the finding? Answer: That the vocabulary is not settled, and possibly that you have two audiences. It is recorded as a conflict with a way to settle it, not resolved by picking the word you prefer.

### Rubric and remediation

**Vocabulary is harvested verbatim from real notes**

Adequate evidence: Participant words recorded exactly as said, attributed to a participant, for the items where evidence exists.

- 0 — Labels proposed from the designer's own vocabulary only.
- 1 — Some participant words, paraphrased or unattributed.
- 2 — Verbatim words with attribution wherever evidence exists.
- 3 — As adequate, and the table notes where a participant hesitated or corrected themselves, which is often where the concept is unclear.

If below 2: Go back through the notes with the inventory beside you and mark every noun a participant used for a thing on your list. Copy them exactly, including the awkward ones. Show at recheck: The vocabulary column with attributions.

**Proposed labels are specific enough to scan**

Adequate evidence: Labels that let a stranger say what is inside, with no internal, clever or abstract words surviving.

- 0 — Internal or invented labels retained.
- 1 — Improved, but at least one abstract catch-all remains.
- 2 — All fifteen are specific enough to predict their contents.
- 3 — As adequate, and at least one label was made longer on purpose with the trade-off recorded.

If below 2: For each label, write what a person would expect to find under it. Where your answer and the actual contents differ, the label is wrong, not the contents. Show at recheck: The label table with the expectation column.

**Guessed labels are marked as guesses**

Adequate evidence: Every label with no participant evidence behind it is visibly marked as a guess.

- 0 — Guesses and evidenced labels are indistinguishable.
- 1 — Some marking, applied inconsistently.
- 2 — Every unevidenced label is marked.
- 3 — As adequate, and the guesses are listed as the priority items for the card sort and tree test in the coming lessons.

If below 2: Work down the evidence column. Any cell you cannot fill with a participant's word or a quotation makes that row a guess. Show at recheck: The marked table with the guess list.

**Vocabulary conflicts are interpreted, not resolved by preference**

Adequate evidence: Each conflict carries a written interpretation — two audiences, two things, or insufficient evidence — and what would settle it.

- 0 — Conflicts resolved silently by choosing one word.
- 1 — Conflicts noted but resolved by the designer's taste.
- 2 — Each conflict is interpreted and its settling evidence named.
- 3 — As adequate, and one conflict is handled by using different words in different places, with the reason recorded.

If below 2: For each conflict, look at who used which word and what else you know about them. If nothing distinguishes them, say so and mark it unsettled rather than deciding. Show at recheck: The conflict notes.

### Portfolio contribution

Portfolio material, and unusually persuasive: a before-and-after label table with verbatim quotations is concrete evidence that your decisions came from people. Keep the participant labels anonymous.

### Assigned resources

- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 2, match between the system and the real world, plus heuristic 6, recognition rather than recall, read for their bearing on naming. Purpose: States the standard this lesson applies and connects labels to the memory demand they place on a reader. Effort: 15–25 selected min. Free reading, no account. Verified 2026-09-06. Heuristics are review shorthand, not evidence: a label that violates one is a hypothesis about a problem, and your participants' words are the evidence. Fallback: R11.
- R09: [NN/g: card sorting](https://www.nngroup.com/articles/card-sorting-definition/) — The passages on what card sorting reveals about the words and groupings people bring. Purpose: Explains why participant vocabulary, not the team's, is the input to a structure. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. Small sorts are exploratory; this lesson uses the article's reasoning, not its analysis, which arrives in lesson 6. Fallback: R10.

## Lesson 3: Organisation schemes and where they break

Stable ID: m06-l03-v1. Core. Areas 5. Optional effort ~120 min.

**Objective.** Group your inventory under two different organisation schemes, write the specific case where each one breaks, and decide which to carry forward with the trade-off recorded.

**Bring forward.** The inventory and the labelling table. You are grouping the items, not the labels: a group is a claim about what belongs together, and it can be right while the label on it is wrong.

Every structure is a choice among several defensible ones, and the argument only ends when you compare them on the tasks they have to support. Producing one structure and defending it is how teams spend a fortnight discovering the obvious alternative.

### Learn

Content can be organised by several schemes and they are not equally exact. By subject or topic is the common default and the most arguable, because subjects overlap. By task — what the person is trying to do — usually beats it for products, because people arrive with an intent rather than a curiosity. By audience is attractive and dangerous: it only works when people can reliably identify which audience they are, which they frequently cannot. Alphabetical, chronological and geographic are exact schemes: everyone agrees where an item goes, which makes them excellent for reference material and useless for helping someone who does not yet know the name of what they need.

Grouping is not free of cognition. Items in one visual group are read as related, and a group of nine unlabelled options is harder to scan than three groups of three — but chunking has limits, and the popular version of the rule about seven items is stated far more confidently than its evidence supports. Use grouping to reduce scanning effort, not to hit a number, and check the assigned pages on grouping and cognitive load rather than reciting a limit.

Every scheme breaks somewhere, and naming the breakage is the actual work. A task scheme breaks on items belonging to two tasks. An audience scheme breaks on the person who is both a parent and an attendee. A topic scheme breaks on the item everyone looks for under a different topic. Write the specific item and the specific person for whom your scheme fails, rather than conceding in general that no scheme is perfect.

Where an item genuinely belongs in two places, you have three options and should choose deliberately. Duplicate it, and accept the maintenance risk that the two copies diverge — which they will. Cross-link it, and accept an extra click. Or restructure so the collision disappears, which is usually right when the same collision keeps recurring. What you must not do is put it in one place, know it is wrong, and hope.

**Common misconception.** “A good structure has no overlaps.” Real information overlaps, and a structure that eliminates every overlap has usually done so by inventing categories that match nothing in anyone's head. The goal is that a person looking for a specific thing has an obvious first place to look — not that a taxonomist could defend the partition.

### Worked example

The class provider's fifty-three items were grouped twice. By topic: Classes, Booking, Practical information, About us — which broke immediately, because “what to bring” is practical information that people look for while reading about a class, and the cancellation policy sat under Booking where nobody in the research had ever gone looking for it. By task: Choose a class, Get ready for a class, Change or cancel, Get help — which broke on “what to bring”, needed both while choosing and while getting ready. The task scheme was carried forward, with “what to bring” cross-linked from the class page rather than duplicated, and the trade-off — an extra click for people who look for it from the class listing — was written down so the tree test in lesson 7 could check whether it mattered.

#### Organisation schemes and where they break

Group your inventory under two different organisation schemes, write the specific case where each one breaks, and decide which to carry forward with the trade-off recorded.

**Where to work:** The cards from lesson 1 on a table, photographed after each scheme. Physical sorting is faster than any tool and the photograph is your record. If you must work digitally, an indented list in a text file is enough; avoid diagram tools at this stage, since they make a structure look finished before it has been tested.

- Starting material: The inventory and the labelling table. You are grouping the items, not the labels: a group is a claim about what belongs together, and it can be right while the label on it is wrong.
- Create HaruCourse/Practice/m06-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Organisation schemes and where they break

Input artifact: The inventory and the labelling table. You are grouping the items, not the labels: a group is a claim about what belongs together, and it can be right while the label on it is wrong.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] The same inventory grouped under two named schemes with photographs or lists of each, a written breakage case per scheme naming an item and a person, a decision per collision, and a recorded choice with its trade-off.

## 1. Read on grouping and load
- Read the assigned pages on proximity, common region and cognitive load. Note what each says and, for the grouping laws, note that the source publishes no limits — the caution is the course's.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Group by scheme one
- Sort your cards into a task-based scheme. Name each group from what fell into it. Record any item you hesitated over for more than a few seconds.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Group by scheme two
- Re-sort the same cards under a different scheme — topic, audience or an exact scheme where it suits the material. Record the hesitations again.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Break both on purpose
- For each scheme, write the specific item and the specific person for whom it fails. Then decide each collision: duplicate, cross-link or restructure, with the reason.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Choose and record, then pause
- Choose the scheme you will carry forward. Write what you gave up and which tasks the loss affects, so the tree test can look for it. Save both groupings.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Two genuinely different schemes were built from the same items: [evidence reference]
- Each scheme's breakage names an item and a person: [evidence reference]
- Collisions are decided deliberately: [evidence reference]
- The chosen scheme records what was given up: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Take the scheme you built and ask what the material would look like organised by what people are doing rather than what things are about. Re-sort completely rather than editing.

</details>

<details>
<summary>Hint 2</summary>

Take your three research tasks and walk each through both schemes. The first place you hesitate is the breakage; write down what you were holding and who you were being.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m06-l03-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Two genuinely different schemes were built from the same items: Two complete groupings of the same inventory under named schemes, with group names derived from contents. Each scheme's breakage names an item and a person: A specific failing case per scheme: this item, for this kind of person, in this situation. Collisions are decided deliberately: Each item belonging in two places carries a decision — duplicate, cross-link or restructure — with a reason. The chosen scheme records what was given up: A written statement of the trade-off and which tasks it affects, framed so a later test could detect it.

**Bring forward:** Two schemes with their breakages is stronger portfolio evidence than one polished sitemap, because it shows the alternatives you considered. Photographs of the card groupings work well as case-study images. Module handoff: Build task flows in m07


### Practice and pause points

- Read on grouping and load (~25 min): Read the assigned pages on proximity, common region and cognitive load. Note what each says and, for the grouping laws, note that the source publishes no limits — the caution is the course's.
- Group by scheme one (~30 min): Sort your cards into a task-based scheme. Name each group from what fell into it. Record any item you hesitated over for more than a few seconds.
- Group by scheme two (~30 min): Re-sort the same cards under a different scheme — topic, audience or an exact scheme where it suits the material. Record the hesitations again.
- Break both on purpose (~20 min): For each scheme, write the specific item and the specific person for whom it fails. Then decide each collision: duplicate, cross-link or restructure, with the reason.
- Choose and record, then pause (~15 min): Choose the scheme you will carry forward. Write what you gave up and which tasks the loss affects, so the tree test can look for it. Save both groupings.

Pause after any step; save the artifact and next action.

**Free tool path.** The cards from lesson 1 on a table, photographed after each scheme. Physical sorting is faster than any tool and the photograph is your record. If you must work digitally, an indented list in a text file is enough; avoid diagram tools at this stage, since they make a structure look finished before it has been tested.

### Output

The same inventory grouped under two named schemes with photographs or lists of each, a written breakage case per scheme naming an item and a person, a decision per collision, and a recorded choice with its trade-off.

### Checks

- Why is organising by audience risky? Answer: Because it requires people to classify themselves correctly before they can find anything, and many cannot: they are new and returning, or a parent and an attendee. When self-identification fails, the whole structure is unusable for them.
- An item genuinely belongs in two groups. What are your options? Answer: Duplicate it and accept that the copies will drift apart, cross-link it and accept an extra click, or restructure so the collision stops recurring. Choosing deliberately and recording why is the requirement; hoping is not an option.
- Should you keep every group to about seven items? Answer: No. Grouping should reduce scanning effort for real tasks, and the popular seven-item rule is stated far more confidently than its evidence supports. Judge by whether a person can scan the group and predict what is inside.

### Rubric and remediation

**Two genuinely different schemes were built from the same items**

Adequate evidence: Two complete groupings of the same inventory under named schemes, with group names derived from contents.

- 0 — One structure only.
- 1 — Two variants of the same scheme with different names.
- 2 — Two genuinely different schemes, each complete.
- 3 — As adequate, and the second scheme was built without looking at the first, then compared.

If below 2: Take the scheme you built and ask what the material would look like organised by what people are doing rather than what things are about. Re-sort completely rather than editing. Show at recheck: The two groupings.

**Each scheme's breakage names an item and a person**

Adequate evidence: A specific failing case per scheme: this item, for this kind of person, in this situation.

- 0 — No breakage identified, or a general admission of imperfection.
- 1 — A breakage named abstractly without an item or a person.
- 2 — Both schemes have a concrete failing case.
- 3 — As adequate, and one breakage is traced to a real participant from your research rather than a hypothetical person.

If below 2: Take your three research tasks and walk each through both schemes. The first place you hesitate is the breakage; write down what you were holding and who you were being. Show at recheck: The two breakage cases.

**Collisions are decided deliberately**

Adequate evidence: Each item belonging in two places carries a decision — duplicate, cross-link or restructure — with a reason.

- 0 — Collisions unresolved or silently placed.
- 1 — Decisions made without reasons.
- 2 — Every collision has a decision and a reason.
- 3 — As adequate, and a recurring collision is treated as a signal to restructure rather than patched again.

If below 2: List every item you hesitated over. For each, write the two candidate homes and choose one of the three options in writing. Show at recheck: The collision decisions.

**The chosen scheme records what was given up**

Adequate evidence: A written statement of the trade-off and which tasks it affects, framed so a later test could detect it.

- 0 — A choice with no trade-off recorded.
- 1 — A trade-off stated in general terms.
- 2 — The trade-off names the affected tasks and how it would show up.
- 3 — As adequate, and it is written as a prediction the tree test in lesson 7 can confirm or refute.

If below 2: Write the sentence “people doing … will now have to …, and I will see it in the tree test as …”. If you cannot finish it, the trade-off is not yet understood. Show at recheck: The trade-off prediction.

### Portfolio contribution

Two schemes with their breakages is stronger portfolio evidence than one polished sitemap, because it shows the alternatives you considered. Photographs of the card groupings work well as case-study images.

### Assigned resources

- R31: [Laws of UX](https://lawsofux.com/) — The assigned pages only: law-of-proximity, law-of-common-region, millers-law and cognitive-load. Purpose: Explains why grouping reduces scanning effort and where the popular chunk limit comes from. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. The site publishes no caveats, so the limits are supplied by this lesson: the seven-item rule in particular is stated far more confidently than its evidence supports and must not be used as a design target. A printed poster is sold and also offered as a free download; no purchase is required. Fallback: R02.
- R09: [NN/g: card sorting](https://www.nngroup.com/articles/card-sorting-definition/) — The passages on what a sort reveals about how people expect material to be grouped. Purpose: Connects your two schemes to what the coming card sort can actually test. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. It is a method article, not a taxonomy textbook; the scheme comparison here is the course's own. Fallback: R10.

## Lesson 4: Depth, breadth and the sitemap

Stable ID: m06-l04-v1. Core. Areas 5. Optional effort ~120 min.

**Objective.** Draw a sitemap of your chosen scheme showing every level, then produce a shallower alternative for the same content and state which tasks each shape favours.

**Bring forward.** The scheme you chose and its recorded trade-off. A sitemap is that scheme drawn with its levels made explicit, which is when the depth problems become visible.

The same groups can be arranged as a wide, shallow structure or a narrow, deep one, and the choice changes who finds what. Depth is invisible in a card sort and obvious the moment someone has to click through it.

### Learn

Breadth costs scanning; depth costs decisions and memory. A wide menu asks a person to read more options at once, which is cheap when the labels are good and the reader can see them all. A deep structure asks for a correct choice at every level, and each choice is a chance to be wrong — and a wrong choice at level one is usually invisible, because the person does not discover it until two levels further down, then has to reconstruct where they went astray.

Depth is worse on small screens, which is where most people in India and most people generally will meet your product. A three-level structure that is comfortable on a wide screen with a persistent side menu becomes three full-screen steps on a phone, with the parent context scrolled away. Draw the structure, then ask what the second level looks like when the first is no longer on screen.

The middle level is where structures rot. Level one gets argued about; level three is usually concrete content; level two accumulates the vague containers — “Information”, “Other”, “More about us” — that exist because two items had nowhere else to go. When you find a level-two group whose contents you cannot summarise in a sentence, you have found the part of your structure that is not real.

Not everything needs to be in the hierarchy. Frequently needed items can be lifted to a shortcut, a contextual link or a persistent element, and reference material can sit deep because people arrive at it by search or by link. Decide placement by how people arrive rather than by tidiness: an item reached mostly from search does not need a good position in the menu, and an item people need at a specific moment should be near that moment, wherever it sits in the tree.

**Common misconception.** “Three clicks maximum.” The number is folklore, and people will click many times when each click clearly moves them closer. What loses them is uncertainty, not distance: two confident clicks feel shorter than one gamble. Design for confident choices, and count clicks only as a rough symptom.

### Worked example

The task scheme drawn out came to three levels: Get ready for a class → Practical information → What to bring. On a phone that is three full screens, and the tree test later showed people stopping at level two, where “Practical information” told them nothing about whether their answer was inside. The shallower alternative moved the four most-needed items up to level one under their own plain labels, leaving genuinely rare material at level two, so the structure became wider and one level shorter. The wide version favoured first-timers looking for one specific thing; the deeper version favoured someone browsing everything about a class, which nobody in the research had ever done.

#### Depth, breadth and the sitemap

Draw a sitemap of your chosen scheme showing every level, then produce a shallower alternative for the same content and state which tasks each shape favours.

**Where to work:** Paper and pencil, drawn wide rather than pretty; a phone photograph is the record. If you want it digital, an indented text list is a sitemap and is far easier to re-order than boxes in a diagram tool. Nothing here needs a diagramming account.

- Starting material: The scheme you chose and its recorded trade-off. A sitemap is that scheme drawn with its levels made explicit, which is when the depth problems become visible.
- Create HaruCourse/Practice/m06-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Depth, breadth and the sitemap

Input artifact: The scheme you chose and its recorded trade-off. A sitemap is that scheme drawn with its levels made explicit, which is when the depth problems become visible.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Two sitemaps of the same content at different depths, a one-sentence summary per level-two group with vague containers marked, click-depth counts for three tasks, and a written comparison stating which shape favours which task.

## 1. Read on choices and load
- Read the assigned pages on the cost of choices and on cognitive load. Write what each says about the effort of choosing, and note that the source publishes no limits.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Draw the sitemap
- Draw your chosen scheme with every level, every group and every item's position. Count the levels each of your three research tasks must pass through.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Interrogate level two
- For each level-two group, write one sentence summarising its contents. Mark any group you cannot summarise; those are your vague containers.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Build the shallower alternative
- Produce a second sitemap for the same content that is one level shallower, lifting the most-needed items. Note what became crowded and what became harder to find.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Compare on tasks and pause
- For each of your three tasks, state which shape favours it and why. Choose the version to test in lesson 7 and record the choice. Save both maps.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Both sitemaps cover the same content at different depths: [evidence reference]
- Level-two groups are summarised and vague containers marked: [evidence reference]
- Depth is considered for a small screen: [evidence reference]
- The comparison is made on tasks, not on tidiness: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Take your map and lift the four items your research showed people need most to level one, then re-place whatever is left. Check that no item disappeared in the process.

</details>

<details>
<summary>Hint 2</summary>

For each level-two group, write “this contains …” listing the actual items. If the list has no coherent theme, mark the group.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m06-l04-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Both sitemaps cover the same content at different depths: Two complete maps of the same inventory, one measurably shallower, with every item placed in both. Level-two groups are summarised and vague containers marked: A one-sentence summary per level-two group, with unsummarisable groups explicitly marked. Depth is considered for a small screen: A written note on what each level looks like on a phone, where the parent context is no longer visible. The comparison is made on tasks, not on tidiness: For each of three tasks, a statement of which shape favours it and why, ending in a recorded choice.

**Bring forward:** Two sitemaps compared on tasks is a case-study section on its own. Present the chosen one as a decision with a stated cost, not as the obvious answer; it has not been tested yet, and lesson 7 is where that happens. Module handoff: Build task flows in m07


### Practice and pause points

- Read on choices and load (~25 min): Read the assigned pages on the cost of choices and on cognitive load. Write what each says about the effort of choosing, and note that the source publishes no limits.
- Draw the sitemap (~30 min): Draw your chosen scheme with every level, every group and every item's position. Count the levels each of your three research tasks must pass through.
- Interrogate level two (~25 min): For each level-two group, write one sentence summarising its contents. Mark any group you cannot summarise; those are your vague containers.
- Build the shallower alternative (~25 min): Produce a second sitemap for the same content that is one level shallower, lifting the most-needed items. Note what became crowded and what became harder to find.
- Compare on tasks and pause (~15 min): For each of your three tasks, state which shape favours it and why. Choose the version to test in lesson 7 and record the choice. Save both maps.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper and pencil, drawn wide rather than pretty; a phone photograph is the record. If you want it digital, an indented text list is a sitemap and is far easier to re-order than boxes in a diagram tool. Nothing here needs a diagramming account.

### Output

Two sitemaps of the same content at different depths, a one-sentence summary per level-two group with vague containers marked, click-depth counts for three tasks, and a written comparison stating which shape favours which task.

### Checks

- Why is a wrong choice at level one especially costly? Answer: Because it is invisible at the time. The person discovers it two levels down, and then has to work out not just where to go but where they went wrong, which is a harder and more discouraging problem than the original choice.
- What does a level-two group you cannot summarise indicate? Answer: That it is a container invented to hold leftovers rather than a real category. Its contents belong somewhere specific, or the level should not exist.
- Is a three-click limit a useful rule? Answer: Only loosely. People click willingly while each click clearly narrows the search; they give up under uncertainty. Optimise for confident choices, and treat click counts as a symptom to investigate rather than a target.

### Rubric and remediation

**Both sitemaps cover the same content at different depths**

Adequate evidence: Two complete maps of the same inventory, one measurably shallower, with every item placed in both.

- 0 — One map only.
- 1 — A second map that omits items or changes the content set.
- 2 — Two complete maps of the same content at different depths.
- 3 — As adequate, and the shallower map records exactly which items were lifted and what that cost the level they left.

If below 2: Take your map and lift the four items your research showed people need most to level one, then re-place whatever is left. Check that no item disappeared in the process. Show at recheck: The two complete maps.

**Level-two groups are summarised and vague containers marked**

Adequate evidence: A one-sentence summary per level-two group, with unsummarisable groups explicitly marked.

- 0 — No summaries.
- 1 — Summaries that restate the group name.
- 2 — Real summaries with vague containers marked.
- 3 — As adequate, and each vague container has a proposed resolution — dissolve it, rename it, or promote its contents.

If below 2: For each level-two group, write “this contains …” listing the actual items. If the list has no coherent theme, mark the group. Show at recheck: The summaries and marks.

**Depth is considered for a small screen**

Adequate evidence: A written note on what each level looks like on a phone, where the parent context is no longer visible.

- 0 — Small screens not considered.
- 1 — Mentioned generally without walking a level.
- 2 — Each level is considered as a separate screen without its parent visible.
- 3 — As adequate, and one structural change was made specifically because of what happens on a phone.

If below 2: Cover everything but one level of your map with paper and read what remains. If you cannot tell where you are or what is inside, neither can a person on a phone. Show at recheck: The small-screen note and any change it caused.

**The comparison is made on tasks, not on tidiness**

Adequate evidence: For each of three tasks, a statement of which shape favours it and why, ending in a recorded choice.

- 0 — A preference stated without tasks.
- 1 — Tasks mentioned but the comparison rests on neatness or symmetry.
- 2 — Each task is compared across both shapes with a reason, and a choice is recorded.
- 3 — As adequate, and the choice names the task it deliberately makes harder.

If below 2: Walk each of your three tasks through both maps, counting decisions rather than clicks. Write which shape asked for fewer uncertain decisions. Show at recheck: The task comparison and the recorded choice.

### Portfolio contribution

Two sitemaps compared on tasks is a case-study section on its own. Present the chosen one as a decision with a stated cost, not as the obvious answer; it has not been tested yet, and lesson 7 is where that happens.

### Assigned resources

- R31: [Laws of UX](https://lawsofux.com/) — The assigned pages only: hicks-law, cognitive-load and law-of-proximity. Purpose: Supplies the reasoning about the cost of choices and of scanning that the depth-versus-breadth trade turns on. Effort: 15–25 selected min. Free reading, no account. Verified 2026-09-06. Hick's law concerns choosing among comparable options; someone hunting for one specific item is searching, not choosing, so it must not be used to justify hiding navigation. The site publishes no such caveats, so this one is the course's. Fallback: R02.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 3, user control and freedom, and heuristic 7, flexibility and efficiency of use. Purpose: Covers what a deep structure owes a person who chose wrongly, and why shortcuts exist alongside the hierarchy. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. Heuristics are review shorthand; the depth decision is settled by the tree test, not by citation. Fallback: R11.

## Lesson 5: Run a card sort on paper

Stable ID: m06-l05-v1. Core. Areas 5. Optional effort ~120 min.

**Objective.** Run at least one open and one closed card sort with consenting participants using physical or hand-written cards, and record each participant's groups, their own group names and everything they said while hesitating.

**Bring forward.** The cards from your inventory, your consent introduction from m05 and your recruitment route. The cards must show the item, not your proposed label, or you will be testing your own wording back at yourself.

You have grouped this material as someone who knows it. A card sort shows you how it looks to someone who does not, which is the only relevant point of view, and it does it in twenty minutes with no software at all.

### Learn

An open sort hands a person the items and asks them to make groups and name them. It tells you what categories they bring and what vocabulary they use, and it is what you run when the structure is still open. A closed sort gives them your categories and asks where each item goes. It tests categories you have already chosen, tells you which labels are understood, and cannot tell you about a better structure you did not offer. Run open first when you are still deciding; run closed when you have a proposal to check.

Prepare the cards from the item, not from your new label. Each card carries the plain-language description you wrote in lesson 1, in the person's likely vocabulary, without the group name you intend it to end up in. Thirty to fifty cards is a workable sort; more than about sixty exhausts people and the last groups get made carelessly, which quietly corrupts your data at exactly the point you stop watching.

What the person says while sorting is worth more than the final arrangement. Ask them to think aloud, and write down every hesitation, every card they move twice, every “this could go in either” and every time they invent a group to hold leftovers. Two people can produce identical final piles for entirely different reasons, and a pile made confidently is different evidence from a pile made in resignation.

Small sorts are exploratory and the assigned article says so. Four or five participants will show you the confusions worth fixing and cannot tell you what proportion of people group things a given way. Run it as a source of hypotheses, name the number of participants everywhere the results appear, and resist the arithmetic that turns four people into a percentage — the analysis lesson that follows exists mostly to stop you doing that.

**Common misconception.** “A card sort tells you what the structure should be.” It tells you how a few people group and name things when handed a pile of cards with no task and no context. It is evidence about their expectations, not a design, and the structure you build from it still has to be tested against real tasks — which is what the tree test in the next lessons does.

### Worked example

An open sort with four participants used forty-three cards. Three of the four made a group they named something close to “before the class”, containing what to bring, directions and timing — which no version of the team's structure had contained. All four separated “change my booking” from “cancel my booking”, which the team had treated as one thing, and one participant said while doing it: “changing is easy, cancelling is a whole argument.” Two participants put “cancellation policy” with the money items and two put it with cancelling; both hesitated visibly. The closed sort that followed, using the four task groups, placed thirty-nine of forty-three cards consistently and left exactly the same four items scattered — which told the team where the structure was genuinely unclear rather than merely new.

#### Run a card sort on paper

Run at least one open and one closed card sort with consenting participants using physical or hand-written cards, and record each participant's groups, their own group names and everything they said while hesitating.

**Where to work:** Index cards or paper cut into squares, a table and a phone camera. This is the required route: online sorting platforms are paid at the sizes that matter and add nothing at four participants, while a physical sort lets you see the hesitation that carries most of the information.

- Starting material: The cards from your inventory, your consent introduction from m05 and your recruitment route. The cards must show the item, not your proposed label, or you will be testing your own wording back at yourself.
- Create HaruCourse/Practice/m06-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Run a card sort on paper

Input artifact: The cards from your inventory, your consent introduction from m05 and your recruitment route. The cards must show the item, not your proposed label, or you will be testing your own wording back at yourself.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Photographs and written records of at least one open and one closed sort, each with participant groups and names, card placements, hesitations and quotations, plus a sample statement naming how many people sorted and who is missing.

## 1. Prepare the cards and the script
- Read the assigned method sections. Write or print thirty to fifty cards showing item descriptions, not your labels. Extend your consent introduction to cover a sorting session and photographs of the cards.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Run the open sort
- With consent, ask a participant to group the cards however makes sense to them and name each group in their own words. Ask them to think aloud. Write down hesitations, moved cards and exact phrases. Photograph the final arrangement.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Run the closed sort
- With another participant, or the same one after a break, lay out your chosen groups and ask where each card goes. Record every card they place slowly, question or refuse to place.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Capture the record
- Immediately write up each session: participant label, groups with their names, card placements, hesitations and quotations. Photograph everything before you disturb the table.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Note the sample and pause
- Write how many people sorted, how they were recruited and who is missing. If nobody consented, record the recruitment gap and run the sort with yourself as a rehearsal, labelled as such and never counted as data.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Cards show items in plain words, not proposed labels: [evidence reference]
- Both an open and a closed sort were run with consent: [evidence reference]
- Hesitations and quotations are recorded, not only final groups: [evidence reference]
- The sample is stated wherever results appear: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Read each card and ask whether it hints where it belongs. Rewrite any card that does, using the words your m05 participants used for that thing.

</details>

<details>
<summary>Hint 2</summary>

If recruitment failed, write what you tried, when, and what you will try next, then run both sorts on yourself and label every artefact rehearsal, permanently.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m06-l05-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Cards show items in plain words, not proposed labels: The card set, showing item descriptions in likely participant vocabulary with no group names on the faces. Both an open and a closed sort were run with consent: Records of both sorts with consent obtained, or a dated recruitment gap plus a labelled rehearsal where nobody consented. Hesitations and quotations are recorded, not only final groups: Per-session notes of moved cards, spoken doubt and verbatim phrases alongside the photographed arrangement. The sample is stated wherever results appear: A sample statement naming participant count, recruitment route and who is missing, attached to the records.

**Bring forward:** Genuine research evidence for the project. Photographs of a real card sort, anonymised, are among the most convincing artefacts a junior portfolio can carry — provided the participant count appears beside them every time. Module handoff: Build task flows in m07


### Practice and pause points

- Prepare the cards and the script (~25 min): Read the assigned method sections. Write or print thirty to fifty cards showing item descriptions, not your labels. Extend your consent introduction to cover a sorting session and photographs of the cards.
- Run the open sort (~35 min): With consent, ask a participant to group the cards however makes sense to them and name each group in their own words. Ask them to think aloud. Write down hesitations, moved cards and exact phrases. Photograph the final arrangement.
- Run the closed sort (~30 min): With another participant, or the same one after a break, lay out your chosen groups and ask where each card goes. Record every card they place slowly, question or refuse to place.
- Capture the record (~20 min): Immediately write up each session: participant label, groups with their names, card placements, hesitations and quotations. Photograph everything before you disturb the table.
- Note the sample and pause (~10 min): Write how many people sorted, how they were recruited and who is missing. If nobody consented, record the recruitment gap and run the sort with yourself as a rehearsal, labelled as such and never counted as data.

Pause after any step; save the artifact and next action.

**Free tool path.** Index cards or paper cut into squares, a table and a phone camera. This is the required route: online sorting platforms are paid at the sizes that matter and add nothing at four participants, while a physical sort lets you see the hesitation that carries most of the information.

### Output

Photographs and written records of at least one open and one closed sort, each with participant groups and names, card placements, hesitations and quotations, plus a sample statement naming how many people sorted and who is missing.

### Checks

- When do you run an open sort rather than a closed one? Answer: While the structure is still open, because an open sort can show you a grouping you had not thought of. A closed sort can only tell you how well the categories you already chose are understood.
- Why put the description on the card rather than your label? Answer: Because a card carrying your label tests whether people can match your label to your group, which they usually can. The point is to learn where the item belongs in their head, which needs the item described in ordinary words.
- What does a hesitation tell you that a final pile does not? Answer: That the item is genuinely ambiguous for that person. Two people can reach the same pile, one confidently and one by giving up, and only the second predicts that people will look in the wrong place first.

### Rubric and remediation

**Cards show items in plain words, not proposed labels**

Adequate evidence: The card set, showing item descriptions in likely participant vocabulary with no group names on the faces.

- 0 — Cards carry the proposed labels or group names.
- 1 — Mostly descriptions, with some cards revealing the intended grouping.
- 2 — All cards describe the item in plain words.
- 3 — As adequate, and the card set was checked with one person for wording before the first sort.

If below 2: Read each card and ask whether it hints where it belongs. Rewrite any card that does, using the words your m05 participants used for that thing. Show at recheck: The corrected card set.

**Both an open and a closed sort were run with consent**

Adequate evidence: Records of both sorts with consent obtained, or a dated recruitment gap plus a labelled rehearsal where nobody consented.

- 0 — Neither run, and no gap recorded.
- 1 — One sort run, or sorts run without a consent introduction.
- 2 — Both run with consent, or the gap recorded honestly with a labelled rehearsal.
- 3 — As adequate, and the closed sort used categories that had been revised from what the open sort showed.

If below 2: If recruitment failed, write what you tried, when, and what you will try next, then run both sorts on yourself and label every artefact rehearsal, permanently. Show at recheck: Both records, or the gap and the labelled rehearsal.

**Hesitations and quotations are recorded, not only final groups**

Adequate evidence: Per-session notes of moved cards, spoken doubt and verbatim phrases alongside the photographed arrangement.

- 0 — Final groups only.
- 1 — Some notes, written after the session from memory.
- 2 — Hesitations, moves and quotations recorded during the session.
- 3 — As adequate, and at least one item is flagged as ambiguous purely on the strength of hesitation, despite being placed consistently.

If below 2: In your next session, keep a separate sheet for doubt: every pause, every card picked up twice, every question asked. Add it to the record. Show at recheck: The session notes with hesitations.

**The sample is stated wherever results appear**

Adequate evidence: A sample statement naming participant count, recruitment route and who is missing, attached to the records.

- 0 — Results presented with no sample statement.
- 1 — Count given without route or exclusions.
- 2 — Count, route and exclusions all stated.
- 3 — As adequate, and the statement says explicitly that the sort is exploratory and supports no proportion claim.

If below 2: Reuse the recruitment exclusion sentence you wrote in m05 and add the count. Put it at the top of the record, not the bottom. Show at recheck: The sample statement.

### Portfolio contribution

Genuine research evidence for the project. Photographs of a real card sort, anonymised, are among the most convincing artefacts a junior portfolio can carry — provided the participant count appears beside them every time.

### Assigned resources

- R09: [NN/g: card sorting](https://www.nngroup.com/articles/card-sorting-definition/) — The whole article: open and closed sorting, running a session, and the limitations of small samples. Purpose: Supplies the method, the open-versus-closed decision and the article's own statement about what small sorts can support. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. Label small samples exploratory, as the article requires. Online sorting tools are unnecessary here and paid at useful sizes; the physical sort is the required route. Fallback: R10.
- R52: [GOV.UK: finding user research participants](https://www.gov.uk/service-manual/user-research/find-user-research-participants) — The sections on recruitment criteria and lead times, re-read for a twenty-minute session that is easier to ask for than an interview. Purpose: A sort is short and portable, so the recruitment route can be wider than for interviews — but it still needs planning and consent. Effort: 10–20 min. Free reading, no account. Verified 2026-09-06; last updated 28 April 2020. UK government context and no incentive amounts; your own network remains a declared convenience sample. Fallback: R08.

## Lesson 6: Read a card sort without overclaiming

Stable ID: m06-l06-v1. Core. Areas 5. Optional effort ~120 min.

**Objective.** Analyse your sorts into a written list of agreements, disagreements and ambiguous items, expressed as counts of participants, and revise your structure with each change traced to what a participant actually did.

**Bring forward.** The sort photographs, session notes and your two sitemaps. Both the sorts and the maps are inputs; neither wins automatically.

The analysis is where a small sort either becomes a useful set of hypotheses or becomes a false statistic. Four people can tell you a great deal about what confuses people and nothing at all about how many people are confused, and the difference is entirely in how you write it down.

### Learn

Work item by item, not pile by pile. For each card, record where each participant put it, so you end with a row per item reading “three of four put this with the money items, one put it with cancelling, two hesitated”. That form is honest, it survives being read six months later, and it makes the ambiguous items — the ones that scattered — visible without any arithmetic.

Three patterns are worth naming. Agreement, where everyone placed an item the same way and nobody hesitated, means you can stop thinking about that item. Disagreement, where placements split, usually means either two audiences or an item that is really two items. Ambiguity, where an item was placed consistently but slowly and with doubt, is the pattern people miss, and it predicts wrong first clicks better than a clean split does.

Do not compute percentages, and do not use similarity matrices or dendrograms on four participants. Those techniques exist for sorts with thirty or more people, and applied to four they produce a picture with the visual authority of statistics and none of the substance. Report counts of people. If you ever do run a large sort, the interval reading in the catalog is the right companion, and it will show you how wide the uncertainty around a rate at small numbers really is.

Change your structure from the analysis, and record the trace. Every change should carry the sentence: this item moved because these participants did this. Changes you cannot trace are your own preferences arriving under cover of research, which is the specific failure that makes stakeholders stop believing the research is worth funding.

**Common misconception.** “Three out of four agreed, so 75 per cent of users would.” Four people are not a sample of anything and the second sentence is a different kind of claim from the first. Write the count and let it be a count; it is entirely respectable evidence in that form, and worthless in the other.

### Worked example

Item-by-item analysis of four sorts produced eleven agreements, six disagreements and four ambiguous items. “Cancellation policy” split two and two, with both pairs hesitating, and the notes explained why: two people thought about it as a money question and two as a cancelling question. Rather than choosing, the structure cross-linked it from both, and the trade-off was recorded for the tree test. “Change my booking” and “cancel my booking”, which all four had separated, were split into two items — a change traced to four of four participants. One proposed change was rejected explicitly: the designer wanted to rename a group, and no participant had said anything bearing on it, so it was recorded as a preference and left out.

#### Read a card sort without overclaiming

Analyse your sorts into a written list of agreements, disagreements and ambiguous items, expressed as counts of participants, and revise your structure with each change traced to what a participant actually did.

**Where to work:** A table on paper or in a text file with one row per item. Avoid similarity matrices and clustering diagrams entirely at this sample size — not because the tools are unavailable, but because their output would be more confident than your evidence.

- Starting material: The sort photographs, session notes and your two sitemaps. Both the sorts and the maps are inputs; neither wins automatically.
- Create HaruCourse/Practice/m06-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Read a card sort without overclaiming

Input artifact: The sort photographs, session notes and your two sitemaps. Both the sorts and the maps are inputs; neither wins automatically.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] An item-by-item table with per-participant placements and hesitations, a classification into agreement, disagreement and ambiguity with interpretations, a revised sitemap with a trace sentence per change, a separate preferences list, and a sample line.

## 1. Build the item table
- Read the assigned analysis sections. Make one row per item and one column per participant, filling in where each card went and marking hesitations.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Classify the patterns
- Label each item agreement, disagreement or ambiguous. For each disagreement write what you think it means: two audiences, two items, or too little evidence.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Revise the structure
- Change your chosen sitemap from the analysis. For each change write the trace sentence naming the item, the participants and what they did.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Separate preference from evidence
- List every change you wanted to make that no participant's behaviour supports. Keep them in a separate preferences list; do not smuggle them into the evidence-led changes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Write the sample line and pause
- Write the sentence that will accompany these results everywhere: how many people, recruited how, and that the sort is exploratory. Save the table, the revised map and the preferences list.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Analysis is item by item with per-participant placements: [evidence reference]
- Agreement, disagreement and ambiguity are distinguished: [evidence reference]
- Every structural change carries a trace to participant behaviour: [evidence reference]
- Counts are used and percentages avoided: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Rebuild the table from the photographs and session notes. If a placement is unrecoverable, leave the cell blank rather than reconstructing it from memory.

</details>

<details>
<summary>Hint 2</summary>

Re-read your hesitation notes and mark every item that was placed slowly. Those are your ambiguous items, however consistent the placements look.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m06-l06-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Analysis is item by item with per-participant placements: A table with one row per item showing where each participant placed it and where hesitation occurred. Agreement, disagreement and ambiguity are distinguished: Each item classified, with an interpretation written for every disagreement. Every structural change carries a trace to participant behaviour: A revised sitemap where each change has a sentence naming the item, the participants and what they did. Counts are used and percentages avoided: Results expressed as counts of participants throughout, with no percentages, matrices or clustering at this sample size.

**Bring forward:** Portfolio material. An item table with counts and traced changes demonstrates the discipline reviewers most often find missing: research that changed the design in ways someone else could check. Module handoff: Build task flows in m07


### Practice and pause points

- Build the item table (~25 min): Read the assigned analysis sections. Make one row per item and one column per participant, filling in where each card went and marking hesitations.
- Classify the patterns (~30 min): Label each item agreement, disagreement or ambiguous. For each disagreement write what you think it means: two audiences, two items, or too little evidence.
- Revise the structure (~30 min): Change your chosen sitemap from the analysis. For each change write the trace sentence naming the item, the participants and what they did.
- Separate preference from evidence (~20 min): List every change you wanted to make that no participant's behaviour supports. Keep them in a separate preferences list; do not smuggle them into the evidence-led changes.
- Write the sample line and pause (~15 min): Write the sentence that will accompany these results everywhere: how many people, recruited how, and that the sort is exploratory. Save the table, the revised map and the preferences list.

Pause after any step; save the artifact and next action.

**Free tool path.** A table on paper or in a text file with one row per item. Avoid similarity matrices and clustering diagrams entirely at this sample size — not because the tools are unavailable, but because their output would be more confident than your evidence.

### Output

An item-by-item table with per-participant placements and hesitations, a classification into agreement, disagreement and ambiguity with interpretations, a revised sitemap with a trace sentence per change, a separate preferences list, and a sample line.

### Checks

- Why report counts rather than percentages here? Answer: Because a percentage implies a population that four participants do not represent. “Three of four” is exactly as informative and cannot be misread as a measurement by someone who sees it in a slide a year later.
- An item was placed the same way by everyone, but slowly and with doubt. What is that? Answer: Ambiguity, and it is a real finding. Consistent placement under doubt predicts hesitation and wrong first clicks in the live product, which a clean agreement does not.
- You want to rename a group and no participant said anything about it. What happens to that change? Answer: It goes on the preferences list. It may still be a good idea, and it is not research; keeping the two lists apart is what lets someone else check your reasoning.

### Rubric and remediation

**Analysis is item by item with per-participant placements**

Adequate evidence: A table with one row per item showing where each participant placed it and where hesitation occurred.

- 0 — Impressions of the sorts, or pile-level summaries only.
- 1 — An item table without hesitation marks or with participants merged.
- 2 — One row per item, per-participant placements, hesitations marked.
- 3 — As adequate, and the table also records the participant's own group name where they invented one.

If below 2: Rebuild the table from the photographs and session notes. If a placement is unrecoverable, leave the cell blank rather than reconstructing it from memory. Show at recheck: The completed item table.

**Agreement, disagreement and ambiguity are distinguished**

Adequate evidence: Each item classified, with an interpretation written for every disagreement.

- 0 — No classification.
- 1 — Agreement and disagreement distinguished, ambiguity ignored.
- 2 — All three used, with interpretations for the disagreements.
- 3 — As adequate, and at least one ambiguous item is prioritised for the tree test because of the doubt rather than the placement.

If below 2: Re-read your hesitation notes and mark every item that was placed slowly. Those are your ambiguous items, however consistent the placements look. Show at recheck: The classified table.

**Every structural change carries a trace to participant behaviour**

Adequate evidence: A revised sitemap where each change has a sentence naming the item, the participants and what they did.

- 0 — Changes made with no trace.
- 1 — Some traces, others asserted as “research showed”.
- 2 — Every change traces to specific participant behaviour.
- 3 — As adequate, and one change you expected to make was abandoned because the sorts did not support it.

If below 2: For each change, write “this moved because participants … did …”. Any change you cannot complete belongs on the preferences list. Show at recheck: The revised map with trace sentences.

**Counts are used and percentages avoided**

Adequate evidence: Results expressed as counts of participants throughout, with no percentages, matrices or clustering at this sample size.

- 0 — Percentages or similarity diagrams produced from a handful of participants.
- 1 — Mostly counts, with one or two rates.
- 2 — Counts throughout, with the sample line attached.
- 3 — As adequate, and the write-up states what sample size would be needed before any rate could be reported.

If below 2: Search your write-up for the per cent sign and for any diagram implying a distance measure. Replace each with a count of people. Show at recheck: The corrected write-up.

### Portfolio contribution

Portfolio material. An item table with counts and traced changes demonstrates the discipline reviewers most often find missing: research that changed the design in ways someone else could check.

### Assigned resources

- R09: [NN/g: card sorting](https://www.nngroup.com/articles/card-sorting-definition/) — The analysis section and the article's statements about what small samples support. Purpose: Supplies the analysis approach and the explicit limits this lesson enforces. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. It describes analysis techniques intended for larger sorts; at four or five participants use counts only, which is this lesson's rule rather than the article's. Fallback: R10.
- R37: [NN/g: confidence intervals and margins of error](https://www.nngroup.com/articles/confidence-interval/) — What an interval means and how sample size widens it, read as the reason a rate is not reportable here. Purpose: Shows concretely why a proportion from four participants carries no information worth stating. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. It gives no formulas and is about quantitative studies; here it is the argument against computing a rate at all, not a technique to apply. Fallback: R45.

## Lesson 7: Tree test the structure by hand

Stable ID: m06-l07-v1. Core. Areas 5. Optional effort ~120 min.

**Objective.** Run a paper tree test of your revised structure with at least three participants and six tasks, recording for every task the first choice, the full path, whether they backtracked and where they said they would stop.

**Bring forward.** Your revised sitemap and the ambiguous items from the sort analysis. The tasks should aim at the places you are least sure of, not at the places you are proud of.

A card sort asks how people group things with no task in mind. A tree test asks whether a person with a real goal can find one specific thing in your structure — which is the question the structure exists to answer, and the one a tidy diagram cannot settle.

### Learn

A tree test shows only the words: no page design, no images, no search box, no colour. That is the point. It isolates the structure from everything that usually rescues it, so a failure means the labels and grouping failed rather than the layout. Running it on paper is straightforward: write the top level on one sheet, each second level on its own sheet, and reveal one level at a time as the person chooses, exactly as the accordion in a tool would.

Tasks decide what you learn. Write them as a situation with a goal, never as the label you are testing — “you booked a class for Saturday and something has come up; where would you go?” rather than “find the cancellation policy”, which hands them the word to match. Define the correct answer before you start, in writing, including any second location you would accept. Mix in a warm-up task, and include a task or two aimed at the items your sort flagged as ambiguous.

Record four things per task and the first is the most valuable. The first choice, because the first click is where the structure either works or fails and everything afterwards is recovery. The full path. Whether they went back up, which is the sign that a level-one label misled them. And where they said they would stop — because a person who reaches the right place and is not confident they are there has not really found it, and in a real product would keep looking or leave.

Three to five participants will find the broken labels. What they cannot give you is a success rate to compare against a benchmark: the published benchmarks come from studies with far more participants, and applying them to five people produces a number that looks like measurement and is not. Report counts and first clicks, and treat the test as a way of locating failures, not scoring the structure.

**Common misconception.** “They found it, so the structure works.” Not if they found it after backing out of two wrong branches, and not if they hesitated at the top and said afterwards that they were not sure they were in the right place. In a real product the person who backtracks twice often leaves instead, and the tree test's value is that it shows you the backtracking a success count would hide.

### Worked example

Six tasks with three participants, on paper. Task: “you booked a class for Saturday and something has come up.” All three began at “Change or cancel”, which was the intended answer, and all three then stopped at level two, where “Booking admin” told them nothing — two guessed, one said she would ring the number instead. Another task, aimed at an ambiguous item, sent two of three to “Practical information” and one to “Classes”, and all three said afterwards they had not been confident. The first-click data mattered more than the outcomes: level one was working, level two was not, and no amount of renaming at level one would have shown that.

#### Tree test the structure by hand

Run a paper tree test of your revised structure with at least three participants and six tasks, recording for every task the first choice, the full path, whether they backtracked and where they said they would stop.

**Where to work:** Sheets of paper, one per level, revealed in order — this is the required route. The platforms the assigned article names are paid, and at three to five participants they would add remote convenience and nothing else; running it by hand also lets you hear the hesitation, which the tool records only as elapsed time.

- Starting material: Your revised sitemap and the ambiguous items from the sort analysis. The tasks should aim at the places you are least sure of, not at the places you are proud of.
- Create HaruCourse/Practice/m06-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Tree test the structure by hand

Input artifact: Your revised sitemap and the ambiguous items from the sort analysis. The tasks should aim at the places you are least sure of, not at the places you are proud of.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A paper tree, six written tasks with their pre-defined correct answers, and a results table recording first choice, path, backtracking, stopping point and stated confidence for every task and participant, with the sample stated.

## 1. Read and build the paper tree
- Read the assigned article on running a tree test. Write your structure onto sheets, one per level, so you can reveal it a level at a time without showing what is below.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Write six tasks and their answers
- Write six task scenarios with a situation and a goal, avoiding the label you are testing. Write the correct answer for each, including acceptable alternatives, before you run anything.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Run the test
- With consent, run all six tasks with at least three participants. For every task record first choice, path, backtracking and where they said they would stop. Ask nothing that guides them; answer questions with “where would you look?”

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Record confidence
- After each task ask how sure they are they have arrived. Record the answer in their words. A confident wrong answer and an unsure right one are different results and lead to different changes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Capture and pause
- Write the raw results into one table before you interpret anything, and note the participant count and route. The next lesson interprets them. If nobody consented, record the gap and keep the tasks and the paper tree as the deliverable.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Tasks state a situation and avoid the tested label: [evidence reference]
- Correct answers were defined before running: [evidence reference]
- First choice, path, backtracking and confidence are all recorded: [evidence reference]
- The sample is stated and no benchmark is claimed: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Underline every word in a task that also appears in your structure. Rewrite the task using the situation your participants described in m05 instead.

</details>

<details>
<summary>Hint 2</summary>

Write the answer key now and mark honestly which answers you decided after the fact; those tasks are unreliable and should be re-run.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m06-l07-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Tasks state a situation and avoid the tested label: Six task scenarios describing a situation and goal, none containing the label of the target category. Correct answers were defined before running: Written correct answers with acceptable alternatives, dated or clearly produced before the sessions. First choice, path, backtracking and confidence are all recorded: A results table with all four columns filled for every task and participant. The sample is stated and no benchmark is claimed: Participant count and route recorded with the results, and no comparison to published success-rate benchmarks.

**Bring forward:** Strong portfolio evidence, and rare at junior level: most portfolios show a sitemap and no test of it. Photograph the paper tree and present the first-click results with the participant count beside them. Module handoff: Build task flows in m07


### Practice and pause points

- Read and build the paper tree (~25 min): Read the assigned article on running a tree test. Write your structure onto sheets, one per level, so you can reveal it a level at a time without showing what is below.
- Write six tasks and their answers (~25 min): Write six task scenarios with a situation and a goal, avoiding the label you are testing. Write the correct answer for each, including acceptable alternatives, before you run anything.
- Run the test (~40 min): With consent, run all six tasks with at least three participants. For every task record first choice, path, backtracking and where they said they would stop. Ask nothing that guides them; answer questions with “where would you look?”
- Record confidence (~20 min): After each task ask how sure they are they have arrived. Record the answer in their words. A confident wrong answer and an unsure right one are different results and lead to different changes.
- Capture and pause (~10 min): Write the raw results into one table before you interpret anything, and note the participant count and route. The next lesson interprets them. If nobody consented, record the gap and keep the tasks and the paper tree as the deliverable.

Pause after any step; save the artifact and next action.

**Free tool path.** Sheets of paper, one per level, revealed in order — this is the required route. The platforms the assigned article names are paid, and at three to five participants they would add remote convenience and nothing else; running it by hand also lets you hear the hesitation, which the tool records only as elapsed time.

### Output

A paper tree, six written tasks with their pre-defined correct answers, and a results table recording first choice, path, backtracking, stopping point and stated confidence for every task and participant, with the sample stated.

### Checks

- Why does a tree test hide the page design? Answer: To isolate the structure. In a real interface a good layout, a prominent link or a search box can rescue a bad hierarchy, so a test that includes them cannot tell you whether the hierarchy itself works.
- Why is the first choice the most valuable data point? Answer: Because it shows whether the structure directed the person correctly before any recovery began. Everything after it is them repairing a wrong turn, which is useful but is a different question.
- A participant reached the right place but said they were unsure. How do you record it? Answer: As reached-but-not-confident, which is nearer to a failure than a success. In a live product that person often keeps looking or gives up, so counting it as a success hides the problem you most want to see.

### Rubric and remediation

**Tasks state a situation and avoid the tested label**

Adequate evidence: Six task scenarios describing a situation and goal, none containing the label of the target category.

- 0 — Tasks name the target label or category.
- 1 — Mostly scenario-based, with at least one giving the word away.
- 2 — All six give a situation and goal without the tested wording.
- 3 — As adequate, and at least two tasks deliberately target items the card sort flagged as ambiguous.

If below 2: Underline every word in a task that also appears in your structure. Rewrite the task using the situation your participants described in m05 instead. Show at recheck: The rewritten tasks.

**Correct answers were defined before running**

Adequate evidence: Written correct answers with acceptable alternatives, dated or clearly produced before the sessions.

- 0 — Answers decided while reading the results.
- 1 — Answers written but with no alternatives, so any reasonable second location counted as failure.
- 2 — Answers and acceptable alternatives written before running.
- 3 — As adequate, and one task's answer set was revised before running because writing it exposed a genuine ambiguity in the structure.

If below 2: Write the answer key now and mark honestly which answers you decided after the fact; those tasks are unreliable and should be re-run. Show at recheck: The answer key with any re-run tasks.

**First choice, path, backtracking and confidence are all recorded**

Adequate evidence: A results table with all four columns filled for every task and participant.

- 0 — Success or failure only.
- 1 — Paths recorded but no first choice or no confidence.
- 2 — All four recorded for every task.
- 3 — As adequate, and the table marks the tasks where a participant said they would abandon the product or contact a person instead.

If below 2: Re-run the missing column with a fresh participant rather than reconstructing it; first choice and confidence cannot be recovered afterwards. Show at recheck: The complete results table.

**The sample is stated and no benchmark is claimed**

Adequate evidence: Participant count and route recorded with the results, and no comparison to published success-rate benchmarks.

- 0 — Results presented as a score or compared to a benchmark.
- 1 — Sample stated but rates computed from a handful of participants.
- 2 — Counts only, with the sample stated beside them.
- 3 — As adequate, and the record states what this test can and cannot establish in one sentence.

If below 2: Remove every rate and benchmark comparison and replace with counts of participants. Add the sample line at the top of the table. Show at recheck: The corrected results table.

### Portfolio contribution

Strong portfolio evidence, and rare at junior level: most portfolios show a sitemap and no test of it. Photograph the paper tree and present the first-click results with the participant count beside them.

### Assigned resources

- R60: [NN/g: tree testing](https://www.nngroup.com/articles/tree-testing/) — Building the tree, writing tasks that do not reveal the answer, defining correct answers in advance, and what a tree test measures. Purpose: Supplies the method, the task-writing discipline and the four things worth recording. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06; published 6 August 2023 with the publisher's own review on 19 August 2026. The platforms it names are paid, so the paper route is this course's required path; interpretation is covered separately in R61. Fallback: R09.
- R09: [NN/g: card sorting](https://www.nngroup.com/articles/card-sorting-definition/) — The passages contrasting what a sort generates with what a tree test evaluates. Purpose: Keeps the two methods distinct so the tree test is used to evaluate rather than to re-open the structure. Effort: 10–15 min. Free reading, no account. Verified 2026-09-06. Sorting is generative and testing is evaluative; neither substitutes for the other. Fallback: R10.

## Lesson 8: Interpret the tree test and change one thing

Stable ID: m06-l08-v1. Core. Areas 5. Optional effort ~120 min.

**Objective.** Turn your tree-test results into a diagnosis per failed task — a wrong label, a wrong grouping or a missing item — then make one bounded change, re-test it with at least two people, and report what happened including if it did not help.

**Bring forward.** The tree-test results table and the structure you tested. Do not change anything before this lesson: a diagnosis written after several simultaneous edits explains nothing.

Results only become useful when they name a cause. “People failed task three” is a symptom; “people chose the right level-one branch and then could not tell which of two level-two labels held it” is a diagnosis, and only the second tells you what to change.

### Learn

Read the first clicks before anything else. If people chose correctly at level one and failed lower down, level one is working and the fault is beneath it — usually a level-two label that names a container rather than its contents. If they scattered at level one, the top of your structure does not match how they think about the task, and renaming a lower level will change nothing. This single split resolves most tree-test results.

Failures have three common causes, and the fix differs for each. A wrong label means the right container has the wrong name: rename it, in participant vocabulary. A wrong grouping means the item is in a container people do not associate with it: move or cross-list it. A missing item means people were looking for something the structure does not contain at all — the commonest and most-ignored result, and no renaming will help. The assigned article names relabelling, cross-listing and restructuring as the corresponding moves.

Change one thing at a time. Making four changes and re-testing tells you the aggregate got better or worse, and nothing about which change did it — and if it got worse, you will not know which one to undo. One change, re-tested, is slower and is the only way to learn anything transferable about your own judgement.

Treat the article's success-rate benchmarks as context, not as a target. They come from studies far larger than yours, and comparing five participants against a published band is exactly the arithmetic this module keeps refusing. Report what happened: how many people chose correctly first, which paths they took, and whether the change moved the specific failure it was aimed at. And report it plainly when the change did not help, because a change that did not work and was recorded is worth more than a change that did and was not understood.

**Common misconception.** “The structure scored badly, so we should redesign it.” A poor result usually concentrates in two or three labels, and replacing the whole structure discards the parts that worked while re-introducing risks you had already tested away. Diagnose first; wholesale redesign is a decision you should have to argue for, not the default response to a bad number.

### Worked example

Six tasks, three participants. Diagnosis by first click: four of six tasks had correct level-one choices and failures below, so the top was sound. Three of those four failed at the same level-two label, “Booking admin”, which nobody could interpret — a labelling fault. One task scattered at level one, and the notes showed why: people were looking for the refund rule, which was not in the structure at all — a missing item, not a naming problem. One bounded change was made: “Booking admin” became “Change or cancel a booking”, nothing else. Re-tested with two new participants, both reached the target directly and one said “that's obviously it”. The missing refund rule was recorded as a content gap, since no structural change can fix an item that does not exist, and the second failed task was left alone for the next round rather than fixed in the same breath.

#### Interpret the tree test and change one thing

Turn your tree-test results into a diagnosis per failed task — a wrong label, a wrong grouping or a missing item — then make one bounded change, re-test it with at least two people, and report what happened including if it did not help.

**Where to work:** The same paper tree with one sheet rewritten. Keep the original sheets: a before-and-after pair of paper trees with results attached is the artefact, and it costs nothing to preserve.

- Starting material: The tree-test results table and the structure you tested. Do not change anything before this lesson: a diagnosis written after several simultaneous edits explains nothing.
- Create HaruCourse/Practice/m06-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Interpret the tree test and change one thing

Input artifact: The tree-test results table and the structure you tested. Do not change anything before this lesson: a diagnosis written after several simultaneous edits explains nothing.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A first-click split of failed tasks, a written diagnosis per failure with supporting paths and quotations, one bounded change re-tested with at least two new participants, and an honest report of the outcome including any remaining failures.

## 1. Read the interpretation guidance
- Read the assigned article on interpreting results. Note the four measures it discusses and write, for your own data, which you can honestly report at your sample size.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Split by first click
- Sort your failed tasks into those where level one was correct and those where it scattered. Write what each group implies about where the fault lies.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Diagnose each failure
- For each failed task write the cause: wrong label, wrong grouping or missing item. Support each diagnosis with the paths and the quotations from the session.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Change one thing and re-test
- Make exactly one change aimed at your clearest diagnosis. Re-test the affected tasks with at least two people who have not seen the structure. Record first clicks and confidence again.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Report honestly and pause
- Write what the change did, including if it did not help or made things worse. List the remaining failures and their diagnoses for the next round. Save both versions of the structure.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Failures are split by first click before diagnosis: [evidence reference]
- Each failure has a named cause with supporting evidence: [evidence reference]
- Exactly one change was made and re-tested: [evidence reference]
- The outcome is reported honestly, including no improvement: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Return to the results table and sort by first choice. Write one sentence per group on where the fault cannot be.

</details>

<details>
<summary>Hint 2</summary>

For each failure, quote the path and anything the participant said. If neither supports your cause, the diagnosis is a guess and should be marked as one.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m06-l08-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Failures are split by first click before diagnosis: A written split of failed tasks into correct-first-click and scattered-first-click groups, with what each implies. Each failure has a named cause with supporting evidence: One of wrong label, wrong grouping or missing item per failure, supported by paths or quotations. Exactly one change was made and re-tested: Before-and-after structures differing in one respect, with re-test results from at least two new participants. The outcome is reported honestly, including no improvement: A written outcome stating what happened, with remaining failures listed and their diagnoses carried forward.

**Bring forward:** The strongest artefact in this module: a structure, a test, a diagnosis, one change and a re-test is a complete iteration loop, and it is exactly what a hiring reviewer looks for. Report the counts and the participant numbers; never present the second version as validated. Module handoff: Build task flows in m07


### Practice and pause points

- Read the interpretation guidance (~25 min): Read the assigned article on interpreting results. Note the four measures it discusses and write, for your own data, which you can honestly report at your sample size.
- Split by first click (~30 min): Sort your failed tasks into those where level one was correct and those where it scattered. Write what each group implies about where the fault lies.
- Diagnose each failure (~25 min): For each failed task write the cause: wrong label, wrong grouping or missing item. Support each diagnosis with the paths and the quotations from the session.
- Change one thing and re-test (~25 min): Make exactly one change aimed at your clearest diagnosis. Re-test the affected tasks with at least two people who have not seen the structure. Record first clicks and confidence again.
- Report honestly and pause (~15 min): Write what the change did, including if it did not help or made things worse. List the remaining failures and their diagnoses for the next round. Save both versions of the structure.

Pause after any step; save the artifact and next action.

**Free tool path.** The same paper tree with one sheet rewritten. Keep the original sheets: a before-and-after pair of paper trees with results attached is the artefact, and it costs nothing to preserve.

### Output

A first-click split of failed tasks, a written diagnosis per failure with supporting paths and quotations, one bounded change re-tested with at least two new participants, and an honest report of the outcome including any remaining failures.

### Checks

- People chose the right branch at level one and failed at level two. What does that rule out? Answer: That the top of the structure is wrong. Renaming or reorganising level one would change nothing for these tasks; the fault is in the level-two labels or in what is grouped beneath them.
- Why change one thing at a time when several labels look wrong? Answer: Because a re-test after several changes cannot attribute the difference to any of them, and if the result worsens you have no way to know which change to undo. One change teaches you something about your own judgement; four teach you nothing.
- Your change did not improve anything. What do you write? Answer: That it did not, with the results, and what you now think the cause is. A recorded failed change is genuine evidence and stops the next person repeating it; quietly trying something else and reporting only the success is how a portfolio becomes fiction.

### Rubric and remediation

**Failures are split by first click before diagnosis**

Adequate evidence: A written split of failed tasks into correct-first-click and scattered-first-click groups, with what each implies.

- 0 — Failures treated as one undifferentiated group.
- 1 — First clicks mentioned but not used to locate the fault.
- 2 — The split is made and its implication stated for each group.
- 3 — As adequate, and a task where the first click was correct but confidence was low is treated as a failure rather than a success.

If below 2: Return to the results table and sort by first choice. Write one sentence per group on where the fault cannot be. Show at recheck: The split with its implications.

**Each failure has a named cause with supporting evidence**

Adequate evidence: One of wrong label, wrong grouping or missing item per failure, supported by paths or quotations.

- 0 — Failures listed without causes.
- 1 — Causes asserted without supporting data.
- 2 — Every failure has a named cause supported by the record.
- 3 — As adequate, and at least one failure is diagnosed as a missing item and routed to content rather than structure.

If below 2: For each failure, quote the path and anything the participant said. If neither supports your cause, the diagnosis is a guess and should be marked as one. Show at recheck: The diagnoses with evidence.

**Exactly one change was made and re-tested**

Adequate evidence: Before-and-after structures differing in one respect, with re-test results from at least two new participants.

- 0 — Several changes made together, or no re-test.
- 1 — One change but re-tested with someone who had already seen the structure.
- 2 — One change, re-tested with fresh participants.
- 3 — As adequate, and the write-up predicted what the change should do before re-testing.

If below 2: Revert to the tested structure, apply the single change you consider clearest, and re-run only the affected tasks with someone new. Show at recheck: The two structures and the re-test results.

**The outcome is reported honestly, including no improvement**

Adequate evidence: A written outcome stating what happened, with remaining failures listed and their diagnoses carried forward.

- 0 — Only the improvement reported, or the outcome asserted without data.
- 1 — Outcome reported but remaining failures dropped.
- 2 — Outcome reported with data, including any lack of improvement, and remaining failures carried forward.
- 3 — As adequate, and the report says what you would change next and why you did not change it now.

If below 2: Write the outcome sentence with the counts in it, then list every failure still unaddressed. Resist repairing them in the same write-up. Show at recheck: The outcome report and the remaining-failure list.

### Portfolio contribution

The strongest artefact in this module: a structure, a test, a diagnosis, one change and a re-test is a complete iteration loop, and it is exactly what a hiring reviewer looks for. Report the counts and the participant numbers; never present the second version as validated.

### Assigned resources

- R61: [NN/g: interpreting tree test results](https://www.nngroup.com/articles/interpreting-tree-test-results/) — Success rate, directness, time and pathway analysis, and translating findings into relabelling, cross-listing or restructuring. Purpose: Supplies the diagnostic vocabulary and the mapping from a symptom to a specific structural move. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06; published 19 January 2024. Its success-rate benchmarks come from studies far larger than yours: at three to five participants report counts and first clicks, not rates against a band. It does not explain significance testing and does not cover running the test. Fallback: R37.
- R37: [NN/g: confidence intervals and margins of error](https://www.nngroup.com/articles/confidence-interval/) — How sample size affects the width of an interval, read as the reason a benchmark comparison is unavailable to you. Purpose: Makes concrete why a five-participant success rate cannot be compared with a published benchmark. Effort: 10–20 min. Free reading, no account. Verified 2026-09-06. No formulas; used here as an argument about what not to report. Fallback: R45.

## Lesson 9: Choose the right test for the symptom

Stable ID: m06-l09-v1. Core. Areas 5. Optional effort ~120 min.

**Objective.** Write a diagnostic plan matching four symptoms of people not finding things to the test that would identify each cause, and state for one symptom in your own product which test you would run next and what would make you run a different one.

**Bring forward.** Everything you have run so far and the failures you have not yet explained. This lesson is about the failures your card sort and tree test could not diagnose.

Running the wrong test is expensive in the only currency you have, which is people's time. The four common findability tests answer different questions, and picking by familiarity rather than by symptom is how a team spends three weeks proving a structure is fine when the problem was that nobody could see the menu.

### Learn

The assigned article separates four tests by what they diagnose. A tree test asks whether the hierarchy itself directs people correctly, with the interface removed. A closed card sort asks whether your category names are understood and whether items are grouped where people expect. A click test asks which navigation components people actually use or ignore in a real layout — the question a tree test cannot reach, because it has hidden the layout. And a usability test watches the whole thing, showing you behaviour the other three abstract away, at the highest cost per participant.

Match the test to the symptom rather than the other way round. If people take the wrong branch from the top, that is a structure question and a tree test answers it. If they take the right branch and still cannot tell what is inside, that is a naming question and a closed sort is faster. If they never touch the menu at all — going straight to search, or scrolling past a navigation bar — no amount of structural testing will help you, because the structure is not being consulted; you need to know whether the component is visible and understood.

Discoverability and findability are different failures. Findability is a person looking for a specific thing and not reaching it. Discoverability is a person never learning that the thing exists, so they never look. A structure can be perfectly findable and undiscoverable — the item is exactly where it should be, and nobody knows to want it — and no tree test will ever tell you, because a tree test begins by telling the participant what to look for.

There is a cheaper move before any of them: check whether the item exists and is written clearly. A surprising share of findability failures resolve to a missing answer, a page written in the organisation's vocabulary, or two contradictory versions. Your lesson-one inventory already found some of those, and fixing them costs no participant time at all.

**Common misconception.** “Usability testing will find everything, so run that.” It will show you a lot and tell you least per participant about which specific thing is at fault, because every variable is present at once. When you already suspect the structure or the labels, the narrow test isolates the cause with fewer people and less of their time; keep the usability test for when you need to see the whole task.

### Worked example

Four symptoms from one product, each matched to a test. People choosing the wrong top-level branch — tree test, which had already shown level one was sound. People reaching the right branch and hesitating over two labels — closed card sort with just those two categories, ten minutes per person. People ignoring the menu entirely and using search on every task — a click test on the real layout, because the structure was never being consulted. And people who did not know a fee waiver existed at all — none of the four, since that is discoverability: the item was findable by anyone told to look for it, and the fix belonged in how it was surfaced during booking rather than in the hierarchy.

#### Choose the right test for the symptom

Write a diagnostic plan matching four symptoms of people not finding things to the test that would identify each cause, and state for one symptom in your own product which test you would run next and what would make you run a different one.

**Where to work:** Written planning only. A click test needs nothing more than a printed or drawn screen and a pen mark where the person would tap, which is the account-free version of every click-testing service, and works fine with three people.

- Starting material: Everything you have run so far and the failures you have not yet explained. This lesson is about the failures your card sort and tree test could not diagnose.
- Create HaruCourse/Practice/m06-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Choose the right test for the symptom

Input artifact: Everything you have run so far and the failures you have not yet explained. This lesson is about the failures your card sort and tree test could not diagnose.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A symptom-to-test table with at least four rows carrying cause, test, participant count and cost; a marked separation of findability from discoverability symptoms; and a chosen next test with the result that would change your mind.

## 1. Read the four methods
- Read the assigned article. For each of the four tests, write in one sentence what it diagnoses and what it cannot see.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. List your unexplained failures
- List every finding from your sort and tree test that you could not diagnose, plus anything from your m05 research about people not finding things.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Match symptom to test
- Build a table of at least four symptoms, each with the likely cause, the test that would identify it, roughly how many people it needs and what it would cost you in time.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Separate findability from discoverability
- Mark which of your symptoms are people failing to find something they were looking for, and which are people never knowing it existed. Write why no findability test can address the second.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Choose the next test and pause
- Choose one symptom and the test you would run next. Write what result would make you abandon that test and run a different one instead. Save the plan.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Each test is matched to what it can and cannot diagnose: [evidence reference]
- Symptoms come from your own unexplained findings: [evidence reference]
- Findability and discoverability are distinguished: [evidence reference]
- The chosen next test states what would change your mind: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

For each test, complete the sentence “this cannot tell me …”. If two of your answers are the same, you have not yet distinguished the tests.

</details>

<details>
<summary>Hint 2</summary>

Go back through your session notes for every moment a participant could not find something and add each to the list, including the ones you assumed you understood.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m06-l09-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Each test is matched to what it can and cannot diagnose: Four tests, each with what it identifies and what it is blind to, in your own words. Symptoms come from your own unexplained findings: At least four symptoms drawn from your own sort, tree test or research rather than invented for the exercise. Findability and discoverability are distinguished: Each symptom marked as one or the other, with a written reason for the discoverability cases. The chosen next test states what would change your mind: One chosen symptom and test, with the result that would cause you to abandon it for a different test.

**Bring forward:** Planning evidence, and a good interview answer. Being able to say which test you would run for a given symptom, and why not the others, is a question asked in real interviews and answered badly by most candidates. Module handoff: Build task flows in m07


### Practice and pause points

- Read the four methods (~25 min): Read the assigned article. For each of the four tests, write in one sentence what it diagnoses and what it cannot see.
- List your unexplained failures (~25 min): List every finding from your sort and tree test that you could not diagnose, plus anything from your m05 research about people not finding things.
- Match symptom to test (~30 min): Build a table of at least four symptoms, each with the likely cause, the test that would identify it, roughly how many people it needs and what it would cost you in time.
- Separate findability from discoverability (~25 min): Mark which of your symptoms are people failing to find something they were looking for, and which are people never knowing it existed. Write why no findability test can address the second.
- Choose the next test and pause (~15 min): Choose one symptom and the test you would run next. Write what result would make you abandon that test and run a different one instead. Save the plan.

Pause after any step; save the artifact and next action.

**Free tool path.** Written planning only. A click test needs nothing more than a printed or drawn screen and a pen mark where the person would tap, which is the account-free version of every click-testing service, and works fine with three people.

### Output

A symptom-to-test table with at least four rows carrying cause, test, participant count and cost; a marked separation of findability from discoverability symptoms; and a chosen next test with the result that would change your mind.

### Checks

- People go straight to search on every task. Which test do you run? Answer: Not a tree test — the structure is not being consulted, so testing it answers nothing. A click test on the real layout tells you whether the navigation is seen and understood; the structural question can wait until you know people look at it.
- How do findability and discoverability differ? Answer: Findability is failing to reach something you are looking for. Discoverability is never knowing it exists. A tree test tells the participant what to find, so it can only ever measure the first.
- What should you check before running any test? Answer: Whether the item exists, says one thing rather than two contradictory things, and is written in words people use. Those failures look exactly like structural failures and cost no participant time to fix.

### Rubric and remediation

**Each test is matched to what it can and cannot diagnose**

Adequate evidence: Four tests, each with what it identifies and what it is blind to, in your own words.

- 0 — Tests listed without distinctions.
- 1 — What each diagnoses is stated, but not what it cannot see.
- 2 — Both stated for all four.
- 3 — As adequate, and the write-up names a case where the cheaper test would have been enough and a more elaborate one was reached for out of habit.

If below 2: For each test, complete the sentence “this cannot tell me …”. If two of your answers are the same, you have not yet distinguished the tests. Show at recheck: The four test descriptions with blind spots.

**Symptoms come from your own unexplained findings**

Adequate evidence: At least four symptoms drawn from your own sort, tree test or research rather than invented for the exercise.

- 0 — Generic symptoms copied from the reading.
- 1 — Some real symptoms, some invented.
- 2 — All four come from your own evidence, with a reference to where.
- 3 — As adequate, and one symptom is one you had previously explained away without evidence.

If below 2: Go back through your session notes for every moment a participant could not find something and add each to the list, including the ones you assumed you understood. Show at recheck: The symptom list with sources.

**Findability and discoverability are distinguished**

Adequate evidence: Each symptom marked as one or the other, with a written reason for the discoverability cases.

- 0 — No distinction drawn.
- 1 — The terms used but applied inconsistently.
- 2 — Every symptom marked with reasons for the discoverability ones.
- 3 — As adequate, and a non-structural response is proposed for at least one discoverability symptom.

If below 2: For each symptom ask whether the person knew the thing existed. If they did not, no test that names the target can help, and the fix is elsewhere. Show at recheck: The marked symptom list.

**The chosen next test states what would change your mind**

Adequate evidence: One chosen symptom and test, with the result that would cause you to abandon it for a different test.

- 0 — A test chosen with no stated conditions.
- 1 — A choice justified only by preference or convenience.
- 2 — The choice names the symptom and the result that would redirect it.
- 3 — As adequate, and it also states the participant count and the time it would take, so it is a plan rather than an intention.

If below 2: Write “I will run … because …, and if I see … I will run … instead”. A test you cannot write that sentence for is not yet chosen. Show at recheck: The next-test sentence.

### Portfolio contribution

Planning evidence, and a good interview answer. Being able to say which test you would run for a given symptom, and why not the others, is a question asked in real interviews and answered badly by most candidates.

### Assigned resources

- R62: [NN/g: four tests for low findability](https://www.nngroup.com/articles/navigation-ia-tests/) — All four methods and what each diagnoses: tree testing, closed card sorting, click testing and usability testing. Purpose: Supplies the symptom-to-test mapping this lesson builds on. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06; published 6 July 2014 with the publisher's own review on 9 September 2019. It covers neither search nor mobile-specific findability, and gives no remediation steps; the discoverability distinction here is the course's own. Fallback: R02.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 6, recognition rather than recall, and heuristic 8, aesthetic and minimalist design, read for what makes a navigation component noticed or ignored. Purpose: Connects the click-test question — is the component seen at all — to a reviewable principle. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. A heuristic explains why a component may be missed; only a test tells you whether it was. Fallback: R11.

## Lesson 10: Structure people can perceive: headings, landmarks and navigation

Stable ID: m06-l10-v1. Core. Areas 5. Optional effort ~120 min.

**Objective.** Express one page of your structure as a heading outline and a set of regions, then check it by reading only the headings aloud and by running the relevant preliminary accessibility checks, recording what you could and could not verify.

**Bring forward.** Your revised structure and one page that sits inside it — ideally the page your tree test showed people reaching. Structure is not only between pages; the same failures happen inside one.

A hierarchy that exists only in a sitemap helps nobody. It reaches a person as headings, regions and navigation they can see or hear, and a person using a screen reader or scanning on a phone navigates by exactly those — so the in-page structure is where your architecture either becomes usable or stays a diagram.

### Learn

Headings are the outline of a page, not a size choice. One page title, then sections in a strict order, each nested heading a genuine child of the one above — skipping a level to get a smaller-looking heading breaks the outline that some people use as their entire navigation. The assigned tutorial covers this precisely: headings that describe sections, in order, with no gaps.

Regions give a page its large-scale shape: the banner, the main navigation, the main content, a complementary area, the footer. Marked up correctly, someone can jump straight to the main content and skip the navigation on every page; unmarked, they hear the same twenty links before the content every single time. This is the point where information architecture and accessibility become the same subject rather than two adjacent ones.

Navigation comes in kinds and each answers a different question. Global navigation says what the whole product contains; local navigation says what is in this section; contextual links say what is related to what you are reading now; utility elements — sign in, help, language — are always available and are not part of the content hierarchy. Confusing them produces the familiar mess where a global menu carries three items belonging to one section, or where the only route to something useful is a link in one paragraph.

Test it the cheapest way first: read only the headings aloud, in order, and see whether they describe the page. If the outline reads as a sensible summary, the structure is probably sound; if it reads as a list of decorative phrases, the page has no structure regardless of what the sitemap says. Then run the preliminary checks in the assigned resource — headings, page title, keyboard access — remembering that the page states plainly they are preliminary and passing them is not conformance, and that they are not testing with disabled participants.

**Common misconception.** “Accessibility comes later, after the structure is agreed.” The heading outline and the regions are the structure, made perceivable. Deciding them late means retrofitting an outline onto a page whose visual design already assumed something different, which is exactly how pages end up with four level-one headings and a navigation region containing the main content.

### Worked example

A class page read as headings alone: “Saturday pottery”, “About”, “Details”, “More info”, “Book”. Read aloud it described nothing — three of the five headings could have introduced anything. Rewritten from the labelling table: “Saturday pottery”, “What you'll do”, “What to bring”, “When and where”, “What it costs”, “Book a place”. The second version is a summary of the page, and the outline now matches the structure that the tree test had validated between pages. The regions were marked so the main content could be reached directly, and the preliminary checks found one further problem: the page title in the browser tab was the site name on every page, so a person with six tabs open could not tell them apart. What was not verified, and the record says so: no screen-reader session was run and no disabled participant took part.

#### Structure people can perceive: headings, landmarks and navigation

Express one page of your structure as a heading outline and a set of regions, then check it by reading only the headings aloud and by running the relevant preliminary accessibility checks, recording what you could and could not verify.

**Where to work:** An indented text outline and a sketch of the page with regions drawn on it. If your prototype is a local HTML file, the checks run in any browser with no extension; if it is on paper, run the heading and outline checks by reading and record the keyboard checks as untested rather than assumed.

- Starting material: Your revised structure and one page that sits inside it — ideally the page your tree test showed people reaching. Structure is not only between pages; the same failures happen inside one.
- Create HaruCourse/Practice/m06-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Structure people can perceive: headings, landmarks and navigation

Input artifact: Your revised structure and one page that sits inside it — ideally the page your tree test showed people reaching. Structure is not only between pages; the same failures happen inside one.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A correctly nested heading outline for one page, a region map with each navigation element classified, the results of the applicable preliminary checks, and a written statement of what was not verified.

## 1. Read the structure tutorial
- Read the assigned page-structure tutorial on headings and regions. Write the heading rule in your own words, including what skipping a level does.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Write the heading outline
- Write your chosen page as an outline: page title, then every section heading in order, correctly nested. Use the labels from your labelling table rather than inventing new ones.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Mark the regions and the navigation kinds
- Identify the banner, navigation, main content, any complementary area and the footer. Then label each navigation element global, local, contextual or utility, and note anything sitting in the wrong one.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Read it aloud and run the checks
- Read only the headings aloud, in order. Rewrite anything that does not describe its section. Then run the assigned preliminary checks that apply — page title, headings, keyboard access — on your prototype or on the live page.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record what you could not verify, then pause
- Write what the checks did not cover and what you did not test, including that no assistive-technology session with a disabled participant took place. Save the outline, the region map and the check results.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The heading outline is correctly nested and descriptive: [evidence reference]
- Regions and navigation kinds are identified: [evidence reference]
- The heading read-aloud test was actually run: [evidence reference]
- Unverified checks are stated rather than assumed: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Write the outline as a numbered list and check each item is genuinely a subsection of the one above. Rewrite every heading you could move to another page without noticing.

</details>

<details>
<summary>Hint 2</summary>

Draw the page and outline each region. Then list every link outside the main content and assign it one of the four kinds; links you cannot classify usually belong somewhere else.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m06-l10-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The heading outline is correctly nested and descriptive: An outline with one page title and correctly nested section headings, each describing its section. Regions and navigation kinds are identified: A region map naming banner, navigation, main content, complementary and footer, with every navigation element classified as global, local, contextual or utility. The heading read-aloud test was actually run: A record of reading the headings alone, with what was rewritten as a result. Unverified checks are stated rather than assumed: A written statement of which checks were run, which could not be, and that no assistive-technology session with a disabled participant took place.

**Bring forward:** Portfolio material that most junior portfolios lack: showing that your IA reached the page as a real heading outline and marked regions. State the limits of self-run checks every time you show it. Module handoff: Build task flows in m07


### Practice and pause points

- Read the structure tutorial (~25 min): Read the assigned page-structure tutorial on headings and regions. Write the heading rule in your own words, including what skipping a level does.
- Write the heading outline (~30 min): Write your chosen page as an outline: page title, then every section heading in order, correctly nested. Use the labels from your labelling table rather than inventing new ones.
- Mark the regions and the navigation kinds (~25 min): Identify the banner, navigation, main content, any complementary area and the footer. Then label each navigation element global, local, contextual or utility, and note anything sitting in the wrong one.
- Read it aloud and run the checks (~25 min): Read only the headings aloud, in order. Rewrite anything that does not describe its section. Then run the assigned preliminary checks that apply — page title, headings, keyboard access — on your prototype or on the live page.
- Record what you could not verify, then pause (~15 min): Write what the checks did not cover and what you did not test, including that no assistive-technology session with a disabled participant took place. Save the outline, the region map and the check results.

Pause after any step; save the artifact and next action.

**Free tool path.** An indented text outline and a sketch of the page with regions drawn on it. If your prototype is a local HTML file, the checks run in any browser with no extension; if it is on paper, run the heading and outline checks by reading and record the keyboard checks as untested rather than assumed.

### Output

A correctly nested heading outline for one page, a region map with each navigation element classified, the results of the applicable preliminary checks, and a written statement of what was not verified.

### Checks

- Why does skipping a heading level matter? Answer: Because the heading levels are the page's outline, and some people navigate by that outline alone. A skipped level tells them a section is nested inside something that does not exist, which makes the page's shape unreadable — while looking fine visually.
- What is the difference between global and local navigation? Answer: Global says what the whole product contains and is the same everywhere; local says what is inside this section and changes as you move. Merging them produces a menu that is either too long everywhere or wrong in most places.
- You ran the preliminary checks and everything passed. What can you claim? Answer: That those specific checks passed on that page, on your device. The resource states they are preliminary and not conformance, and running them yourself is not testing with disabled participants — both limits belong in your write-up.

### Rubric and remediation

**The heading outline is correctly nested and descriptive**

Adequate evidence: An outline with one page title and correctly nested section headings, each describing its section.

- 0 — Headings chosen by visual size, levels skipped.
- 1 — Correct nesting but vague headings such as Details or More.
- 2 — Correct nesting and every heading describes its section.
- 3 — As adequate, and the headings reuse the vocabulary from your labelling table with the evidence noted.

If below 2: Write the outline as a numbered list and check each item is genuinely a subsection of the one above. Rewrite every heading you could move to another page without noticing. Show at recheck: The corrected outline.

**Regions and navigation kinds are identified**

Adequate evidence: A region map naming banner, navigation, main content, complementary and footer, with every navigation element classified as global, local, contextual or utility.

- 0 — No regions identified.
- 1 — Regions marked but navigation elements unclassified.
- 2 — Both complete, with anything in the wrong place noted.
- 3 — As adequate, and one misplacement is corrected with the reason recorded.

If below 2: Draw the page and outline each region. Then list every link outside the main content and assign it one of the four kinds; links you cannot classify usually belong somewhere else. Show at recheck: The region map and classification.

**The heading read-aloud test was actually run**

Adequate evidence: A record of reading the headings alone, with what was rewritten as a result.

- 0 — Not run.
- 1 — Claimed but with no changes or notes resulting.
- 2 — Run, with the resulting rewrites recorded.
- 3 — As adequate, and someone else read the outline and said what they thought the page contained.

If below 2: Cover the page and read only the headings to another person. Ask them what the page is about. Rewrite whatever they cannot infer. Show at recheck: The read-aloud record and rewrites.

**Unverified checks are stated rather than assumed**

Adequate evidence: A written statement of which checks were run, which could not be, and that no assistive-technology session with a disabled participant took place.

- 0 — Accessibility claimed generally.
- 1 — Checks listed without stating what was not covered.
- 2 — Run, not run and not verifiable are all stated.
- 3 — As adequate, and the statement names which check would most change the result if it were run properly.

If below 2: List the preliminary checks and mark each run, not applicable or not run. Add one sentence on the difference between passing them and being accessible. Show at recheck: The check record with limits.

### Portfolio contribution

Portfolio material that most junior portfolios lack: showing that your IA reached the page as a real heading outline and marked regions. State the limits of self-run checks every time you show it.

### Assigned resources

- R10: [W3C: page structure](https://www.w3.org/WAI/tutorials/page-structure/) — The headings and the page regions sections, read as the way a structure becomes perceivable. Purpose: Supplies the heading-outline rule and the region vocabulary this lesson applies. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. It covers structural semantics rather than navigation patterns or sorting methodology; the global, local, contextual and utility distinction here is the course's own teaching. Fallback: R14.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The checks for page title, headings and keyboard access. Purpose: Gives a small set of checks you can run yourself on the page you just restructured. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. The page states the checks are preliminary and that passing them is not conformance; running them yourself never substitutes for testing with disabled participants. Fallback: R28.

## Lesson 11: Search, filters and the zero-results path

Stable ID: m06-l11-v1. Core. Areas 5. Optional effort ~120 min.

**Objective.** Design the search and filtering behaviour for your structure, including what happens with no results, and write the query list that would test it — drawn from words your participants actually used.

**Bring forward.** Your labelling table, your inventory and any m05 evidence of people going straight to search. Search is where your labelling failures surface as typed words.

Search is not an alternative to structure; it is a second route through the same material, and it fails in ways structure does not. A person who searched and got nothing has usually told you exactly what they wanted, in their own words — and most products throw that away.

### Learn

People arrive at search for different reasons and the design has to serve them all: they know the exact name of the thing, they know a word from it, they have already failed in the navigation, or they always search because it is faster than reading a menu. The last group is large and does not care about your hierarchy. What they all share is that they type their own vocabulary — which is why your labelling table matters here, and why synonyms are not a nicety: if people say “fees” and your content says “pricing”, either the search knows they are the same or the search is broken for those people.

Filters are the structure applied to a result set, and they inherit its problems. A filter whose categories nobody understands is an unused control that also consumes screen space, and filters that combine to produce nothing at all are a trap unless the interface says so before the person commits. Show how many results each filter value would leave where you can, and never let a person build a combination that silently returns nothing without being able to see which choice caused it.

The zero-results state is a designed screen, not an error. It should say what was searched for, offer the nearest thing you do have, offer a route that does not depend on the same words — browse the structure, ask a person — and, where you can, capture the query for later. Handled well it is a moment of recovery; handled as “No results found” it is the last thing that person does on your product. This is the difference between preventing an error and helping someone out of one, which the assigned reading treats as two distinct obligations.

You can test search with no search engine at all. Take the twenty words your participants actually used, look for each in your content by hand, and record whether the thing they wanted would have been found. That exercise finds the missing synonyms, the content that does not contain its own subject word, and the items that exist but are described in language nobody uses — and it costs an afternoon and no infrastructure.

**Common misconception.** “Search fixes bad structure.” It relocates the problem into a place where you cannot see it. A person searching from failure is already having a poor time, and a search that returns nothing because your content uses a different word is a worse failure than a mislabelled menu — the menu at least showed them what existed.

### Worked example

Twenty queries taken verbatim from five interviews were run by hand against a class provider's content. Eleven would have found the right thing. Four failed on vocabulary: people searched “fees” and every page said “pricing”. Three failed because the answer existed only in a confirmation email, which no search would ever reach. Two failed because the query was about something that did not exist at all — a refund rule, the same gap the tree test had found. The zero-results screen was then designed to name the query, list the three closest items, offer the browse route and show the phone number, and the four vocabulary failures were fixed by adding the alternate words to the page content rather than by tuning any search.

#### Search, filters and the zero-results path

Design the search and filtering behaviour for your structure, including what happens with no results, and write the query list that would test it — drawn from words your participants actually used.

**Where to work:** Searching your own content by hand — with a browser's find-in-page, or by reading — and sketching the empty state on paper. No search platform, analytics tool or index is required; the by-hand pass finds the vocabulary problems that tuning a search engine would only mask.

- Starting material: Your labelling table, your inventory and any m05 evidence of people going straight to search. Search is where your labelling failures surface as typed words.
- Create HaruCourse/Practice/m06-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Search, filters and the zero-results path

Input artifact: Your labelling table, your inventory and any m05 evidence of people going straight to search. Search is where your labelling failures surface as typed words.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A list of at least twenty verbatim participant queries with hand-run outcomes and classified failures, filter categories with a stated no-results behaviour, a designed zero-results screen, and a fix per failure class.

## 1. Read on prevention and recovery
- Read the assigned pages on preventing user errors and on the relevant heuristics. Write the difference between stopping a dead end and helping someone out of one.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Build the query list
- Take at least twenty words and phrases your participants actually used, verbatim. Mark which are names of things, which are descriptions and which are questions.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Run the queries by hand
- For each query, search your content by hand and record whether the right thing would have been found. Classify every failure: vocabulary, unreachable content, or a thing that does not exist.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Design the filters and the empty state
- Define your filter categories from the structure and state what happens when a combination returns nothing. Then design the zero-results screen: the query shown, nearest matches, a non-search route, and a way to reach a person.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Decide the fixes and pause
- For each failure class write the fix: content wording, a missing item, or search behaviour. Note which fixes need no search engine at all. Save the query list, the results and the empty-state design.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Queries are verbatim from participants and classified: [evidence reference]
- Failures are classified by cause, not lumped together: [evidence reference]
- The zero-results state is designed, not an error message: [evidence reference]
- Filter combinations that return nothing are handled: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Return to your interview notes and copy out every phrase a participant used to describe something they were looking for, including the vague ones.

</details>

<details>
<summary>Hint 2</summary>

For each failure ask whether the thing exists, whether it is reachable, and whether the words match. The first no is the cause.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m06-l11-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Queries are verbatim from participants and classified: At least twenty queries taken word for word from research notes, each marked as a name, a description or a question. Failures are classified by cause, not lumped together: Each failed query marked as a vocabulary gap, unreachable content or a non-existent item, with a fix per class. The zero-results state is designed, not an error message: A designed screen showing the query, nearest matches, a non-search route and a way to reach a person. Filter combinations that return nothing are handled: Filter categories defined from the structure, with a stated behaviour for combinations returning no results.

**Bring forward:** Good project evidence, and cheap to produce. A hand-run query list with classified failures is more convincing than a search feature specification, because it shows the problem was measured before anything was designed. Module handoff: Build task flows in m07


### Practice and pause points

- Read on prevention and recovery (~25 min): Read the assigned pages on preventing user errors and on the relevant heuristics. Write the difference between stopping a dead end and helping someone out of one.
- Build the query list (~25 min): Take at least twenty words and phrases your participants actually used, verbatim. Mark which are names of things, which are descriptions and which are questions.
- Run the queries by hand (~30 min): For each query, search your content by hand and record whether the right thing would have been found. Classify every failure: vocabulary, unreachable content, or a thing that does not exist.
- Design the filters and the empty state (~25 min): Define your filter categories from the structure and state what happens when a combination returns nothing. Then design the zero-results screen: the query shown, nearest matches, a non-search route, and a way to reach a person.
- Decide the fixes and pause (~15 min): For each failure class write the fix: content wording, a missing item, or search behaviour. Note which fixes need no search engine at all. Save the query list, the results and the empty-state design.

Pause after any step; save the artifact and next action.

**Free tool path.** Searching your own content by hand — with a browser's find-in-page, or by reading — and sketching the empty state on paper. No search platform, analytics tool or index is required; the by-hand pass finds the vocabulary problems that tuning a search engine would only mask.

### Output

A list of at least twenty verbatim participant queries with hand-run outcomes and classified failures, filter categories with a stated no-results behaviour, a designed zero-results screen, and a fix per failure class.

### Checks

- Why take queries verbatim from participants? Answer: Because the vocabulary gap is the commonest search failure and you cannot invent it: you will type the words your content already uses. Only the words other people chose can show you which ones your content is missing.
- What belongs on a zero-results screen? Answer: The query as typed, the nearest things you do have, a route that does not depend on the same words, and a way to reach a person. “No results found” ends the session; the alternatives continue it.
- A query failed because the answer lives only in a confirmation email. Is that a search problem? Answer: No, it is a content location problem, and no search improvement can reach it. It is the same missing-item class your tree test found, and the fix is to put the answer somewhere reachable.

### Rubric and remediation

**Queries are verbatim from participants and classified**

Adequate evidence: At least twenty queries taken word for word from research notes, each marked as a name, a description or a question.

- 0 — Queries invented by the designer.
- 1 — A mix of real and invented queries, unmarked.
- 2 — Twenty or more verbatim queries, classified.
- 3 — As adequate, and the list notes which queries came from people who had already failed in the navigation.

If below 2: Return to your interview notes and copy out every phrase a participant used to describe something they were looking for, including the vague ones. Show at recheck: The verbatim query list.

**Failures are classified by cause, not lumped together**

Adequate evidence: Each failed query marked as a vocabulary gap, unreachable content or a non-existent item, with a fix per class.

- 0 — Failures counted but not classified.
- 1 — Classified loosely, with fixes proposed for the search engine only.
- 2 — All failures classified with a fix appropriate to each class.
- 3 — As adequate, and the write-up states how many failures need no search functionality at all to fix.

If below 2: For each failure ask whether the thing exists, whether it is reachable, and whether the words match. The first no is the cause. Show at recheck: The classified failure list with fixes.

**The zero-results state is designed, not an error message**

Adequate evidence: A designed screen showing the query, nearest matches, a non-search route and a way to reach a person.

- 0 — No results state left as a message.
- 1 — Some elements present, but no route out that avoids the same vocabulary.
- 2 — All four elements present in a designed screen.
- 3 — As adequate, and the design captures the query for later review, with a note on how that data would be handled.

If below 2: Sketch the screen as though the person searching is about to give up, and give them three ways forward that do not require them to guess a different word. Show at recheck: The zero-results design.

**Filter combinations that return nothing are handled**

Adequate evidence: Filter categories defined from the structure, with a stated behaviour for combinations returning no results.

- 0 — Filters listed with no empty-combination behaviour.
- 1 — Behaviour mentioned but the person cannot tell which choice emptied the list.
- 2 — The behaviour is defined and the responsible choice is identifiable.
- 3 — As adequate, and result counts are shown per filter value so the dead end is visible before it is chosen.

If below 2: Walk two filter combinations that produce nothing and write exactly what the person sees and what they can do next. Then add the mechanism that would have warned them. Show at recheck: The filter design with empty-combination handling.

### Portfolio contribution

Good project evidence, and cheap to produce. A hand-run query list with classified failures is more convincing than a search feature specification, because it shows the problem was measured before anything was designed.

### Assigned resources

- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — The distinction between slips and mistakes, and the sections on prevention, feedback and recovery. Purpose: Supplies the prevention-versus-recovery frame the filter and zero-results design turns on. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. It is about errors in general rather than search specifically; the search and filter application here is the course's own. Fallback: R02.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 1, visibility of system status, and heuristic 9, help users recognise, diagnose and recover from errors. Purpose: Sets the standard for what a person must be told when a search or filter returns nothing. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. Heuristics identify candidate problems; the hand-run query list is the evidence in this lesson. Fallback: R11.

## Lesson 12: Stress-test the labels, then write the change note

Stable ID: m06-l12-v1. Core. Areas 5. Optional effort ~120 min.

**Objective.** Test your labels against a longer translation, an Indic script, a narrow screen and a slow connection, repair what breaks, and publish a change note recording every structural decision, its evidence and what remains untested.

**Bring forward.** The whole module: inventory, labels, structure, sort and tree-test results, page outline and search work. This lesson closes it into something another person could pick up.

A label that works only in English, only on a wide screen and only when everything has loaded is not finished. And a structure whose reasoning lives in your head is one you cannot defend in a review, hand to a developer, or explain in an interview six months from now.

### Learn

Text expands when translated, and layouts built around English label lengths break in ways that are invisible until they happen: a menu item wrapping to three lines, a truncated label ending mid-word, a button whose text no longer fits. The assigned internationalization page covers what this involves — encoding, expansion, formats, sorting order — and the practical move for a designer is to build the label set with room to grow rather than to the tightest fit that looked good today.

Indic scripts add constraints English does not have. Line height that suits Latin text can clip conjuncts and matras; a font that renders one script beautifully may not contain another at all; and sorting order differs by language, so an alphabetical list is a different list in a different language. India's own government guidelines cover local-language and mobile requirements and are the primary source available to you, so compare your work against two of their requirements rather than assuming a Latin-script layout transfers.

The narrow screen and the slow connection are the same test at different layers. A long label on a narrow screen either wraps, truncates or overflows, and truncation is the worst of the three because it removes the distinguishing end of a label — “Change or cancel a…” — that a person was using to choose. On a slow connection, structure is what arrives first: the person sees your labels before any image or refinement loads, which means the text has to work alone, and you can check this by throttling the connection in a browser's own developer tools.

The change note is the last artefact and the one that keeps its value. It records each decision, the evidence behind it, what you rejected, what is still a guess and what you would test next. Written honestly it is portfolio material, a handover document and the thing that stops the same argument being re-run next quarter — and the honesty is what makes it useful: a note claiming everything was validated is worth less than one saying which three labels are still untested.

**Common misconception.** “Translation is a later, non-design problem.” The label set is a design decision that either survives translation or forces the translator to invent something shorter and different, which quietly changes your information architecture in a language you cannot read. Leaving room, avoiding truncation and not depending on English word order are design decisions, made now.

### Worked example

Four labels broke under test. “Change or cancel a booking” truncated to “Change or cancel a…” at 320 px, so the two actions became indistinguishable, and the fix was two shorter separate items — which the card sort had already suggested. A Hindi rendering of the same menu ran about a third longer and wrapped to two lines, which was acceptable once the row height allowed it, and one heading clipped its matras until the line height was increased. On a throttled connection the page showed its headings first, which read as a sensible outline — the read-aloud test from lesson 10 paying off in a situation nobody had designed for. The change note recorded eleven decisions, four still marked as guesses, and one open content gap: the refund rule, found in the tree test, which still did not exist.

#### Stress-test the labels, then write the change note

Test your labels against a longer translation, an Indic script, a narrow screen and a slow connection, repair what breaks, and publish a change note recording every structural decision, its evidence and what remains untested.

**Where to work:** Padding out label text by hand in a text editor simulates expansion honestly enough for a label set, and any Chromium browser's developer tools throttle the connection and disable the cache with no account. If you cannot render an Indic script in your prototype, write the labels by hand on paper at the same size and record that the digital rendering is untested rather than claiming it passed.

- Starting material: The whole module: inventory, labels, structure, sort and tree-test results, page outline and search work. This lesson closes it into something another person could pick up.
- Create HaruCourse/Practice/m06-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Stress-test the labels, then write the change note

Input artifact: The whole module: inventory, labels, structure, sort and tree-test results, page outline and search work. This lesson closes it into something another person could pick up.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A tested label set with recorded breakages under expansion, an Indic script, a narrow width and a throttled connection; the repairs made and re-checked; and a change note recording every decision, its evidence, the guesses and the open questions.

## 1. Read the internationalization guidance
- Read the assigned page on localization versus internationalization and at least two relevant requirements from the India guidelines. Write which of your labels you expect to break and why.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Test the labels
- Render your label set with roughly a third more characters, and with one Indic-script version. Record every wrap, truncation, clipped character and overflow specifically.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Test narrow and slow
- View the labels at about 320 px, then load the page on a throttled slow connection with the cache disabled and record what appears first and whether it makes sense alone.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Repair and re-check
- Fix what broke, preferring shorter distinct labels over truncation and giving rows room to grow. Re-run the two worst cases to confirm the repair.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Write the change note and pause
- Write the note: each decision, its evidence, what you rejected, what is still a guess, what remains untested and what you would test next. Save it with the structure.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Labels were tested under expansion and an Indic script: [evidence reference]
- Narrow width and a throttled connection were both checked: [evidence reference]
- Repairs favour clearer labels over truncation: [evidence reference]
- The change note separates evidence from guesses: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Pad each label with extra characters and write it out again in a second script by hand if you cannot render it. Name each breakage as a concrete sentence.

</details>

<details>
<summary>Hint 2</summary>

Run the throttled load in your browser's developer tools and screenshot the first paint. Then set the width to 320 px and list every label that wraps or truncates.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m06-l12-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Labels were tested under expansion and an Indic script: Renderings or hand-written versions with about a third more characters and in an Indic script, with breakages named specifically. Narrow width and a throttled connection were both checked: A record of the label set at about 320 px and of what appears first on a throttled connection with the cache disabled. Repairs favour clearer labels over truncation: Repairs that shorten or split labels rather than clipping them, with the two worst cases re-checked. The change note separates evidence from guesses: A written note listing each decision with its evidence, the rejected alternatives, the remaining guesses and what you would test next.

**Bring forward:** The change note is the case-study section for this module: it shows a structure, the evidence behind it and the honesty about what is still unknown. The label stress test is a small, specific detail that distinguishes a designer who has worked with real Indian and multilingual constraints from one who has read about them. Module handoff: Build task flows in m07


### Practice and pause points

- Read the internationalization guidance (~25 min): Read the assigned page on localization versus internationalization and at least two relevant requirements from the India guidelines. Write which of your labels you expect to break and why.
- Test the labels (~30 min): Render your label set with roughly a third more characters, and with one Indic-script version. Record every wrap, truncation, clipped character and overflow specifically.
- Test narrow and slow (~25 min): View the labels at about 320 px, then load the page on a throttled slow connection with the cache disabled and record what appears first and whether it makes sense alone.
- Repair and re-check (~25 min): Fix what broke, preferring shorter distinct labels over truncation and giving rows room to grow. Re-run the two worst cases to confirm the repair.
- Write the change note and pause (~15 min): Write the note: each decision, its evidence, what you rejected, what is still a guess, what remains untested and what you would test next. Save it with the structure.

Pause after any step; save the artifact and next action.

**Free tool path.** Padding out label text by hand in a text editor simulates expansion honestly enough for a label set, and any Chromium browser's developer tools throttle the connection and disable the cache with no account. If you cannot render an Indic script in your prototype, write the labels by hand on paper at the same size and record that the digital rendering is untested rather than claiming it passed.

### Output

A tested label set with recorded breakages under expansion, an Indic script, a narrow width and a throttled connection; the repairs made and re-checked; and a change note recording every decision, its evidence, the guesses and the open questions.

### Checks

- Why is truncation worse than wrapping? Answer: Because it removes the end of the label, which is often the part that distinguishes it from its neighbour. A wrapped label is still readable; a truncated one turns a choice into a guess.
- What does a slow connection reveal about an information architecture? Answer: That the text arrives first and has to work alone. If the labels and headings make sense with nothing else loaded, the structure is doing its job; if they only make sense alongside images and styling, it is not.
- What makes a change note worth writing? Answer: That it separates what was tested from what was guessed, so a later reader can trust the first and re-examine the second. A note claiming everything was validated is less useful, because nothing in it can be relied on.

### Rubric and remediation

**Labels were tested under expansion and an Indic script**

Adequate evidence: Renderings or hand-written versions with about a third more characters and in an Indic script, with breakages named specifically.

- 0 — Not tested.
- 1 — Expansion tested but no second script, or breakages described as “looks cramped”.
- 2 — Both tested with specific named breakages.
- 3 — As adequate, and the record notes a requirement from the India guidelines that your work does or does not meet.

If below 2: Pad each label with extra characters and write it out again in a second script by hand if you cannot render it. Name each breakage as a concrete sentence. Show at recheck: The two renderings and the breakage list.

**Narrow width and a throttled connection were both checked**

Adequate evidence: A record of the label set at about 320 px and of what appears first on a throttled connection with the cache disabled.

- 0 — Neither checked.
- 1 — One of the two checked.
- 2 — Both checked with what was observed recorded.
- 3 — As adequate, and the record states whether the first-arriving text alone would let someone choose correctly.

If below 2: Run the throttled load in your browser's developer tools and screenshot the first paint. Then set the width to 320 px and list every label that wraps or truncates. Show at recheck: Both records.

**Repairs favour clearer labels over truncation**

Adequate evidence: Repairs that shorten or split labels rather than clipping them, with the two worst cases re-checked.

- 0 — Breakages left unrepaired, or fixed by allowing truncation.
- 1 — Repaired but not re-checked.
- 2 — Repaired by shortening or splitting, with the worst cases re-checked.
- 3 — As adequate, and one repair is traced back to something the card sort or tree test had already suggested.

If below 2: For each truncating label, write a shorter version that keeps the distinguishing word. If no shorter version works, the item is probably two items. Show at recheck: The repaired label set and re-check results.

**The change note separates evidence from guesses**

Adequate evidence: A written note listing each decision with its evidence, the rejected alternatives, the remaining guesses and what you would test next.

- 0 — No change note, or a summary of the final structure only.
- 1 — Decisions listed without evidence, or with guesses presented as findings.
- 2 — Every decision carries evidence or is marked a guess, with rejects and next tests recorded.
- 3 — As adequate, and the note names the decision you are least confident about and what it would take to settle it.

If below 2: Go through your structure and write one line per decision. Any line where the evidence column is empty is a guess and must be labelled as one. Show at recheck: The change note.

### Portfolio contribution

The change note is the case-study section for this module: it shows a structure, the evidence behind it and the honesty about what is still unknown. The label stress test is a small, specific detail that distinguishes a designer who has worked with real Indian and multilingual constraints from one who has read about them.

### Assigned resources

- R42: [W3C: localization versus internationalization](https://www.w3.org/International/questions/qa-i18n) — The definitions and what internationalization involves: encoding, text expansion, formats and sorting. Purpose: Explains why a label set must be designed with room to grow rather than translated afterwards. Effort: 10–15 min. Free reading, no account. Verified 2026-09-06. It is a short definitional page and gives no layout guidance; the expansion and truncation tests here are the course's own. Fallback: R10.
- R43: [Guidelines for Indian Government Websites and Apps](https://guidelines.india.gov.in/) — Two requirements of your choice from the local-language and mobile sections, compared against your own labels. Purpose: Supplies the India-specific requirements this course's learner will actually be held to. Effort: 45–60 selected min. Free HTML index with a downloadable PDF manual and no account. Verified 2026-09-06; the site records its own update as 4 September 2026. Comparing two requirements is the exercise; reading it end to end is not required and the document is written for government sites. Fallback: R41.
