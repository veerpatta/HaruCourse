# Information architecture

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the small-action teaching and tracking standard](docs/COURSE-AUTHORING.md#small-action-and-tracking-contract--12-september-2026). Only Lesson 1 currently uses the new action flow. Published, worksheet-enabled, teaching-refined, learner-validated and assessed are separate states.

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

**Where to practise:** Draw the inventory as a table or a deck of cards on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: A spreadsheet if you have one, or a plain text table, or index cards — cards are genuinely better for the next four lessons because you will be sorting them by hand. Write each item on a card now and you will not have to transcribe later. No IA or content-audit tool is required.

- Starting material: Your m05 findings, your marked experience map and your raw interview notes. The notes matter most here, because they contain the words people used for things — which is rarely what the product calls them.
- Create HaruCourse/Practice/m06-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Set the boundary

**See it first.** Made-up example. Setting the boundary for a bicycle repair shop by drawing it round a menu section, and watching two of the three tasks walk straight out of it.

- **What I drew first:** Everything under the Repairs tab. It was a tidy edge and I could point at it on the screen.
- **Where it came apart:** The first task, book a repair, sat inside. The second, find out whether the bike is ready, lived in a message the mechanic sends by hand. The third, know what a repair will cost, lived on a printed sheet by the till.
- **What I nearly did instead:** Widen it to the whole site. Then I was listing the shop’s history page and a photo gallery from years ago, and the list would still not have ended.
- **What I drew in the end:** A boundary round the three tasks: everything a person touches from deciding to bring a bike in to riding it away again. Then I named the first thing just outside it, which was hiring a bike for the weekend.
- **What that changed:** The mechanic’s message and the price sheet came inside as items. Nine pages under the Repairs tab that serve none of the three tasks went out, with one line saying why.

**The wrong turn:** The wrong turn is taking the boundary from the navigation, because the edge is already drawn there and somebody else drew it. It is the quickest boundary to write, and it quietly limits your inventory to what has already been published.

**What it costs:** A boundary drawn round tasks cuts across the product, so you cannot point at it on a screen and have to describe it in a sentence every time. Somebody will also ask why pages sitting inside the section are missing from your list.

**Still unknown:** Still unknown: whether these are the right three tasks. They came from a few conversations, and a fourth task nobody happened to mention would put its own answers outside the line you have just drawn.

- Read the assigned needs page. Write which product area you are inventorying and where its edges are, then list the three tasks from your research that this area has to support.

**You should end up with:** The product area you are inventorying, where its edges are, and the three tasks from your research that it has to support.

Worksheet fields for this step:

- The product area you are inventorying, and where its edges are — Name what is inside, then name the first thing that is just outside it.
- The three tasks from your research that this area has to support

<details>
<summary>Help with this step</summary>

- **Content inventory:** A flat list of everything a person might need, one row each. Not a list of pages, and not a structure.
- **Boundary:** What counts as inside this area and what is next door. Without one the list grows all evening.

Stuck starting? Name the area in one sentence, then write the first thing that is just outside it. If m05 gave you no participants, take the three tasks from real messages people have already sent you and label them as your own reading rather than research.

Is it enough? Someone else could read your boundary and tell whether a given item belongs inside it.

</details>

#### 2. List everything

**See it first.** Made-up example. Writing the first rows of an inventory for a class provider, and finding that the label and the thing were not the same.

- **What I wrote first:** A row saying label “Details”, and under what it actually is, “Details”. Ten minutes of that and I had a list of menu items, not an inventory.
- **What made me stop:** Three separate rows said “Details”. One was the class description, one was the venue address, one was the refund terms.
- **The sentence I used:** For each row I finished “this tells someone …”. “Details” could not finish it. “This tells someone what the class covers and who it suits” could.
- **What that turned up:** Two rows I could not finish at all. One was a PDF from 2019 nobody had opened. One was a page whose contents I had guessed from its name.
- **What the list became:** Fifty-three rows, only eleven of them pages. The rest were answers living in emails, in a message the owner retyped each week, and in her head.

**The wrong turn:** The wrong turn is copying the label into the description column. It fills the row, it takes no time, and it hides every place where the name and the contents have come apart.

**What it costs:** A plain sentence per row is slow, and forty rows is a long evening. It is what makes the collisions visible before you draw anything at all.

**Still unknown:** Still unknown: whether the items nobody mentioned are unused or merely unmentioned. A handful of conversations cannot settle that, and those rows stay on the list marked as such.

- Work through the product, the support material, your notes and any messages, adding one row per item: current label, what it actually is, who needs it and when. Do not organise anything yet.

**You should end up with:** Five rows worked out here, each with its current label, one plain sentence saying what it actually is, and who needs it and when.

Worksheet fields for this step, revealed a few at a time in the app:

- Item 1 · its current label, then what it actually is in one plain sentence, then who needs it and when — Finish the sentence “this tells someone …”. If you cannot finish it, open the thing and read it.
- Item 2 · label, what it actually is, who needs it and when
- Item 3 · label, what it actually is, who needs it and when
- Item 4 · label, what it actually is, who needs it and when
- Item 5 · label, what it actually is, who needs it and when

<details>
<summary>Help with this step</summary>

- **Plain-language description:** One sentence in your own words finishing “this tells someone …”. It is the test of whether the label matches the contents.
- **Item:** Anything a person might need to know, whether or not it is a page. An answer inside an email is an item.

Stuck starting? Start with something that is not a page: an answer you know lives in a message or in somebody’s head.

Is it enough? No description repeats its own label, and every row names a person and a moment.

</details>

#### 3. Add the reachability column

- For each item, record how a person reaches it today: main navigation, one page deep, search only, email only, or by asking a human. Mark the items your research showed people actually needed.

**You should end up with:** A route recorded for every item in your list, with the ask-a-person and email-only cases named here.

Worksheet fields for this step:

- How many items sit in each route: main navigation, one page deep, search only, email only, or by asking a person
- The items reachable only by asking a person or only from an email, and which of them your research showed people needed — This is where the real problems announce themselves. Renaming a menu cannot fix any of them.

<details>
<summary>Help with this step</summary>

- **Reachability:** What a person has to do today to get to the thing: the menu, a deep page, search, an email, or asking someone.

Stuck starting? Open the product as though you had never seen it and try to reach three items you know are in there.

Is it enough? Every item in your table has a route, and the ones that need a human are separated out.

</details>

#### 4. Find the collisions

- Mark duplicates, contradictions, items sharing a label and items with no owner. Write a one-line note for each collision; several will turn out to be content problems rather than structure problems.

**You should end up with:** Up to four collisions written out: which rows are involved, what kind of collision it is, and your one-line note on each.

**Try it with help.** Four supplied rows from the same made-up inventory. Row A: “What to bring”, a sentence inside a PDF. Row B: “What to bring”, a different sentence in the confirmation email, naming one item the PDF does not. Row C: “Details”, the venue address. Row D: “Details”, the refund terms.

Which pair should your note call a content problem rather than a structure problem?

- **A and B, because the two versions say different things and no arrangement of pages decides which is right.** — The two copies disagree with each other. Until somebody decides what a person should actually bring, moving them or merging them only hides the disagreement.
- C and D, because two unrelated things are sharing one label. — That pair is real, and it is a naming and structure problem. Give each its own plain label and it is solved, which is not true of the pair that disagrees.
- Both pairs, since both are duplicates. — Only one pair is a duplicate. C and D are different things wearing the same name, which is the opposite situation and takes a different fix.
- Neither, because you cannot tell until the structure is drawn. — The flat list is exactly where this shows. Drawing a structure first would place the two versions of what to bring in two places and settle nothing.

**Then:** Go through your own collisions and mark each one content or structure, so you know which ones need a decision about the words before anything moves.

Worksheet fields for this step, revealed a few at a time in the app:

- Collision 1 · the rows involved, what kind of collision it is, and your one-line note
- Collision 2 · the rows involved, what kind, and your note
- Collision 3 · the rows involved, what kind, and your note
- Collision 4 · the rows involved, what kind, and your note

<details>
<summary>Help with this step</summary>

- **Collision:** Two rows that fight: one label on different things, two answers that disagree, or the same thing written twice.

Stuck starting? Sort your table by label and read for repeats, then sort by description and read for the same thing under two names. The two passes find different collisions.

Is it enough? Each collision names which rows and what kind, not only that something is wrong.

</details>

#### 5. Count and pause

- Count the items, the collisions and the items nobody needed. Save the inventory as a table; every later lesson in this module works from it.

**You should end up with:** Your three counts, where the full inventory lives, and the repair the Check questions asked for.

Worksheet fields for this step:

- Your three counts: items, collisions, and items nobody in your research ever needed
- Where the full inventory lives — A file name, or “index cards, in the blue box”. Nothing is uploaded.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Check question:** A short question after the steps that tests one judgement from this lesson. Answering it wrongly sends you back with a specific thing to go and fix.
- **Repair:** The fix a Check question asks for. You make it in the earlier box, then say here what you changed.
- **Items nobody needed:** Rows that answer none of the tasks in your boundary. Counting them shows how much the product is carrying for its own sake.

Stuck starting? Count the rows first. The other two counts come from marks you have already made.

Is it enough? The counts are numbers you arrived at by counting, and the location is specific enough to find next week.

</details>

**Save and continue.** Saved for you: The boundary, your worked rows, the routes, the collisions and the counts save as you type, on this device first and then online. Kept outside the app: The full inventory stays in your own spreadsheet, text file or card box. Write where it lives here; naming a file does not upload it. What your creator sees: Your creator reads the counts, the collisions and a few of your rows. The plain-language column is the part worth his attention, because it is the one people skip. Your next action: Open Your work and choose Ready for review. The next lesson sets your participants’ words against these labels, so keep the inventory to hand.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Take the three tasks from your research and walk each one, writing down every question a person has to answer to finish it. Add every answer that is not already a row.

</details>

<details>
<summary>Hint 2</summary>

For each row, complete “this tells someone …”. Any row you cannot complete either needs opening and reading, or does not contain what its label promises.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Inventory what exists and what it is called.
Task: Produce a content inventory of at least forty items for one real product area, each row carrying its current label, what it actually is, who needs it and whether anything makes it findable today.
Challenge one thing at a time, and start with the mistake this lesson is about: “The inventory is the boring part before the real design work.” It is where most of the findings are. The duplicate that says two different things, the item that exists in three places with three names, the answer that lives only in someone's head — none of those are visible in a sitemap, and all of them are visible in a flat list with a plain-language column.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the extended inventory with its new rows marked and ask whether the inventory covers answers, not only pages. Look at the described inventory and ask whether every item carries a plain-language description. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A four-column table on paper or in a text file. Write the proposed labels onto the cards from lesson 1, since the card sort in lesson 5 must use the items rather than your new labels — keep the new labels on the back so you do not lead your participants.

- Starting material: Your inventory and your m05 interview notes. The notes are the source of vocabulary; a label you invented at your desk is a hypothesis and must be marked as one.
- Create HaruCourse/Practice/m06-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

<details>
<summary>Optional video paired with step 1</summary>

[Web Accessibility Perspectives: Understandable Content](https://www.w3.org/WAI/perspective-videos/understandable/) — W3C Web Accessibility Initiative, 46 s, English, English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page. Whole video, 46 seconds. Watch from 0:04 to 0:40.

What to notice:

- 0:04–0:18 — The same sentence twice: once in long words, then plainly. The plain one is the point.
- 0:18–0:24 — Many sites lack structure: headings, lists and separations.
- 0:24–0:30 — Or they use overly complex language, jargon and unexplained acronyms.
- 0:30–0:40 — That makes them hard for many people, including anyone reading in a second language.

**Then:** Straight after watching, write down every word in your current labels that is jargon, an acronym, or a word only your team uses. That list is where this lesson starts.

**Without the video:** No video needed: read your own labels aloud to somebody outside the project and note every word you have to explain. Same list, no connection required.

A deliberately absurd sentence and generic pages, not your labels. It is about wording in general; your table is about the words your own participants used. Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use. Checked 7 September 2026.

</details>

#### 1. Read the heuristic and the sorting guidance

- Read the assigned heuristic on matching the user's language and the card-sorting notes on labels. Write the three worst labels in your inventory and why each fails.

**You should end up with:** The three worst labels in your inventory, each with the reason it fails.

Worksheet fields for this step:

- The three worst labels in your inventory, and the reason each one fails — Three kinds recur: the internal word that names a department, the clever word invented for character, and the abstract word that is accurate and empty.

<details>
<summary>Help with this step</summary>

- **Internal word:** A label naming a department or a system rather than a thing a person wants: “Resources”, “Portal”, “My Account”.
- **Abstract word:** A label that is technically accurate and empty: “Information”, “Details”, “More”. Nobody can tell what is inside it.

Stuck starting? Read down your inventory labels and mark every one you could not explain to a stranger in five words.

Is it enough? Each of the three names the kind of failure, not only that you dislike the word.

</details>

#### 2. Harvest vocabulary

**See it first.** Made-up example. Reading five sets of interview notes for vocabulary, and throwing away the first pass.

- **What I did first:** I read the notes and wrote down what each participant meant. “She wanted the materials list.” Tidy, quick, and entirely in my own words.
- **What went wrong:** Nobody had said “materials list”. That was my phrase, arrived at while reading, and by the second page I could no longer tell which words were theirs.
- **The second pass:** I read again and copied only what was inside quotation marks, exactly, with a participant label beside each: “the list of things I need”, P2. “what I have to bring”, P4.
- **What the awkward one showed:** One person said “the kit”. It was ugly and I nearly smoothed it away. She had done a class elsewhere where that was the word, which is a fact about her, not about her phrasing.
- **What I ended with:** Nineteen phrases from five people, attributed, plus a list of eleven items nobody had ever mentioned. Both halves were useful and only one of them was evidence.

**The wrong turn:** The wrong turn is paraphrasing as you read. It feels like note-taking, and it quietly replaces the participant’s vocabulary with yours, which is the exact vocabulary this lesson exists to get away from.

**What it costs:** Copying verbatim is slower and leaves you holding awkward phrases you would never have chosen. Those are the ones carrying the information.

**Still unknown:** Still unknown: whether the words your few people used are the words anyone else would use. A handful of people gives you candidates, not a vocabulary.

- Read every interview note and record each word participants used for things in your inventory, verbatim, with who said it. Do not paraphrase into your own vocabulary as you go.

**You should end up with:** Four vocabulary lines copied out exactly from your notes, each attributed to a participant.

Worksheet fields for this step, revealed a few at a time in the app:

- Vocabulary 1 · the item, the exact words a participant used for it, and who said it
- Vocabulary 2 · the item, the exact words, and who said it
- Vocabulary 3 · the item, the exact words, and who said it
- Vocabulary 4 · the item, the exact words, and who said it

<details>
<summary>Help with this step</summary>

- **Verbatim:** The exact words, in the order they were said, with nothing improved. Anything you smooth is yours rather than theirs.

Stuck starting? Put the inventory beside the notes and mark every noun a participant used for a thing on your list. If m05 produced no participants at all, say so in the sample box and take your words from real messages people have already sent you, marking every row with no quotation as a guess. A rehearsal with yourself is never written down as research.

Is it enough? Every phrase is in somebody else’s words, with a participant label beside it.

</details>

#### 3. Build the labelling table

- For at least fifteen items, write current label, participant words, proposed label and the evidence. Where no participant ever mentioned the item, write your proposed label and mark it a guess.

**You should end up with:** Three worked rows of the labelling table, and a count of how many of your fifteen are guesses.

**Try it with help.** Six label lines from a made-up practice set. Each names a proposed label and the reason the designer wrote beside it. Decide whether that reason is a participant’s own words or the designer’s own guess.

- Proposed label “What to bring”. The reason says: two participants said “the list of things I need”.
  - **evidenced** — Two people supplied the words and the label sits close to them. That is exactly what the evidence column is for.
  - guess — Two participants said this in their own words, so the row is not yours. Marking it a guess would hide the strongest row you have.
- Proposed label “Where it is”. The reason says: one participant asked “where is it, exactly?” while talking about her first visit.
  - **evidenced** — A participant’s own question supplies the words, attributed to her, about this item. Short evidence is still evidence.
  - guess — One person is thin, and it is still a real quotation about this item. Write the count beside it rather than demoting it.
- Proposed label “Your toolbox”. The reason says: it sounds friendlier than “Account”.
  - evidenced — Nothing in the notes is quoted here. Sounding friendly is the designer’s ear, and the designer uses the product every day.
  - **guess** — The only reason given is how the word sounds. A clever word is unsearchable too, so this row earns the mark twice over.
- Proposed label “What happens if I cannot come”. The reason says: one participant used almost those words and the designer shortened them.
  - **evidenced** — The words came from a participant, and shortening somebody’s phrase is not inventing it. Keep the original beside the label.
  - guess — Editing a participant’s phrase for length does not make it yours. It would become a guess if you replaced the idea rather than the word count.
- Proposed label “Photos from past classes”. The reason says: nobody mentioned the page, and it plainly contains photographs.
  - evidenced — Nobody said anything about this item, so there is no participant word behind it. Describing the contents accurately is a different thing from being evidenced.
  - **guess** — It is a sensible, plain label that no participant supplied. Marked as a guess it stays available to test in the card sort.
- Proposed label “Classes”, chosen over “Workshops”. The reason says: two participants said “class”, two said “workshop”, and the designer picked the one first-timers used.
  - evidenced — Each word is evidenced and the choice between them is not. Four people splitting two and two cannot show you which audience uses which, so the reason for picking is still a hypothesis.
  - **guess** — Both words have evidence behind them, so the words are not the guess. The claim that first-timers use one and returning people the other is the guess, and the label rests on it.

**Then:** Go down your own evidence column. Any cell you cannot fill with a participant’s word makes that row a guess, and the mark stays until somebody says otherwise.

**What to watch for:** The question is never whether the label is good. It is whether somebody outside your own head supplied it.

Worksheet fields for this step, revealed a few at a time in the app:

- Row 1 · current label, participant words, your proposed label, and the evidence or the word guess
- Row 2 · current label, participant words, proposed label, evidence or guess
- Row 3 · current label, participant words, proposed label, evidence or guess
- How many of your fifteen rows are guesses — A high number is not a failure. An unmarked guess is.

<details>
<summary>Help with this step</summary>

- **Evidence column:** A participant’s own words, with who said them. If you cannot fill it, the row is a guess.
- **Guess:** A label you thought of yourself. Allowed, useful, and only dangerous when it is not marked.

Stuck starting? Do a row you have a quotation for first, so you can see what a filled evidence cell looks like.

Is it enough? Every row is either quoted or marked, with nothing in between.

</details>

#### 4. Resolve or record the conflicts

- Where participants disagreed, decide what the disagreement means: two audiences, two things, or too little evidence. Record the decision and what would settle it.

**You should end up with:** Your vocabulary conflicts, each with an interpretation and a sentence naming what would settle it.

Worksheet fields for this step:

- Conflict 1 · the two words, who used each, what you think the disagreement means, and what would settle it — Two words for one thing often means two audiences, and sometimes it means the thing is two things.
- Conflict 2 · the two words, who used each, what it means, and what would settle it
- Any conflict you are leaving unsettled, and why nothing you have distinguishes the two groups

<details>
<summary>Help with this step</summary>

- **Conflict:** Two participants using different words for one thing. It is information about them, not a tie for you to break.

Stuck starting? For each conflict write who used which word, and what else you know about those people, before you write what it means.

Is it enough? No conflict has been settled by which word you happen to prefer.

</details>

#### 5. Read it cold and pause

**See it first.** Made-up example. Reading my own proposed labels cold for a swimming pool, finding nothing wrong with any of them, and realising I had been remembering rather than reading.

- **What I did:** I covered every column but the proposed labels and read down the list. I could say what was inside each one, so I moved on.
- **Why that was suspicious:** I had written those labels that morning. I was not reading the words at all; I was recognising the row each one came from.
- **What I did instead:** I left them overnight, then read them bottom to top, asking one question of each: what would I expect to find here if I had never seen this project.
- **What failed the second time:** “Getting ready” could have meant the pool getting ready or a swimmer getting ready. “Your sessions” could have meant the ones already swum, the ones booked, or both, and I had meant only the ones booked.
- **What I wrote down:** Three labels marked as failing, each with the wrong thing it had made me expect. Naming the wrong expectation is what told me which word to change.

**The wrong turn:** The wrong turn is doing the cold read straight after writing the labels. Nothing feels wrong, because you are recognising your own rows rather than reading the words, and a clean read is quietly what you were hoping for.

**What it costs:** Leaving the labels overnight and reading them backwards costs you a day, and you still are not a stranger: the read is colder, not cold. It also turns up failures in labels you were pleased with.

**Still unknown:** Still unknown: whether the labels that survived are readable by anybody else. Your own second reading catches the vague ones, and only somebody arriving without the table can catch the rest.

- Read only your proposed labels, as a stranger scanning a menu. Mark any label that leaves you unable to say what is inside. Save the table.

**You should end up with:** The labels that failed the cold read, your sample line, where the table lives, and the repair the Check questions asked for.

Worksheet fields for this step:

- Reading only your proposed labels: the ones that leave you unable to say what is inside
- How many participants your notes cover, how they were recruited, and who is missing — This sentence travels with the table wherever it goes.
- Where the full labelling table lives
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Cold read:** Reading only the proposed labels, with every other column covered, as somebody who does not know what is inside them.
- **Sample line:** One sentence saying how many people your notes cover, how they were found, and who is missing. It travels with the table wherever the table goes.

Stuck starting? Cover every column but the proposed labels and read down the list once, quickly, as a stranger scanning a menu.

Is it enough? You can say what is inside each surviving label without looking at the other columns.

</details>

**Save and continue.** Saved for you: Your worst-label notes, harvested phrases, rows, conflicts and sample line save as you type, on this device first and then online. Kept outside the app: The full fifteen-row table stays in your own file, or on the backs of your cards. Write where it lives here so the two stay together. What your creator sees: Your creator reads the vocabulary column and the guess marks. The marks are the part worth his attention, because they are what make the rest believable. Your next action: Open Your work and choose Ready for review. The next lesson groups the items rather than the labels, so keep the card faces showing the items.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Go back through the notes with the inventory beside you and mark every noun a participant used for a thing on your list. Copy them exactly, including the awkward ones.

</details>

<details>
<summary>Hint 2</summary>

For each label, write what a person would expect to find under it. Where your answer and the actual contents differ, the label is wrong, not the contents.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Labels in the words people actually use.
Task: Produce a labelling table for at least fifteen items, each showing the current label, the words participants used, the label you propose and the evidence for it, with every guessed label marked as a guess.
Challenge one thing at a time, and start with the mistake this lesson is about: “We should use the term the industry uses, so people learn the right word.” People do not arrive to learn your vocabulary; they arrive to do something. Where an unfamiliar term is genuinely unavoidable — a legal or regulatory word, a term used everywhere in the field — pair it with the familiar word rather than choosing between them, and put the familiar one first.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the vocabulary column with attributions and ask whether vocabulary is harvested verbatim from real notes. Look at the label table with the expectation column and ask whether proposed labels are specific enough to scan. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Draw both groupings of your cards on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: The cards from lesson 1 on a table, photographed after each scheme. Physical sorting is faster than any tool and the photograph is your record. If you must work digitally, an indented list in a text file is enough; avoid diagram tools at this stage, since they make a structure look finished before it has been tested.

- Starting material: The inventory and the labelling table. You are grouping the items, not the labels: a group is a claim about what belongs together, and it can be right while the label on it is wrong.
- Create HaruCourse/Practice/m06-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read on grouping and load

- Read the assigned pages on proximity, common region and cognitive load. Note what each says and, for the grouping laws, note that the source publishes no limits — the caution is the course's.

**You should end up with:** What the assigned pages say about proximity, common region and cognitive load, plus an honest note about item limits.

Worksheet fields for this step:

- What the assigned pages say about proximity, common region and cognitive load — One line per idea, in your own words, before you touch the cards.
- What you will say about item limits, given that the source publishes none

<details>
<summary>Help with this step</summary>

- **Proximity:** Things placed near each other are read as belonging together, before anyone reads a word of them.
- **Common region:** A shared box, panel or background does the same job as closeness, and does it more strongly.

Stuck starting? Write one line per idea in your own words before you look at your cards at all.

Is it enough? Your note about limits says the source publishes none, rather than repeating a number you have heard.

</details>

#### 2. Group by scheme one

- Sort your cards into a task-based scheme. Name each group from what fell into it. Record any item you hesitated over for more than a few seconds.

**You should end up with:** A task-based grouping of every card, each group named from what fell into it, with every hesitation recorded.

Worksheet fields for this step:

- Your task-based groups, each named from what fell into it
- Every card you held for more than a few seconds, and the two places it nearly went

<details>
<summary>Help with this step</summary>

- **Organisation scheme:** The rule deciding which items go together: by task, by topic, by audience, or an exact one such as alphabetical.
- **Hesitation:** A card you held for a few seconds. It marks a place where the scheme is not deciding for you.

Stuck starting? Deal the cards face up and make piles without naming them. Name each pile only when nothing is left in your hand.

Is it enough? Every group name came from its contents rather than from a name you had in mind before you started.

</details>

#### 3. Group by scheme two

**See it first.** Made-up example. Sorting the same thirty-eight cards a second time for a community centre, and producing the first grouping wearing new names.

- **What I did:** I left the task piles where they were, moved a handful of cards between them, and renamed the piles Rooms, Money, Getting here and Help.
- **What it looked like:** Four groups with new names on a tidy table. It took a few minutes and I felt efficient.
- **What gave it away:** The hesitations were the same cards in the same two places as the first time. A different rule ought to be awkward somewhere else.
- **What I did instead:** I swept the whole table together, shuffled, and dealt from nothing, deciding each card only by what it is about rather than by what somebody is doing.
- **What came out:** Six groups rather than four, and the deposit rules left Booking a room to sit in with the money. That move is what broke the topic scheme in the next step.

**The wrong turn:** The wrong turn is editing the first grouping instead of starting again. The cards are already in piles, moving a few of them takes minutes, and from the outside the result is hard to tell apart from a second scheme.

**What it costs:** Dealing from nothing throws away an hour of sorting you have already done, and the second set of groups will usually please you less than the first. That is the cost of the second grouping being independent rather than a rewording of the first.

**Still unknown:** Still unknown: whether a third rule would suit this material better than either. You are choosing between two shapes you made yourself, and the card sort is where somebody who is not you gets a say.

- Re-sort the same cards under a different scheme — topic, audience or an exact scheme where it suits the material. Record the hesitations again.

**You should end up with:** A second grouping of the same cards under a different rule, named, with its own hesitations recorded.

Worksheet fields for this step:

- Which scheme you used for the second sort, and why it suits this material — By topic, by audience, or an exact scheme such as alphabetical or chronological.
- Your second set of groups, each named from what fell into it
- The cards you hesitated over this time, and where they nearly went

<details>
<summary>Help with this step</summary>

- **Exact scheme:** Alphabetical, chronological or geographic. Everyone agrees where an item goes, which helps only when the person already knows its name.

Stuck starting? Sweep the cards together and deal again from nothing. Editing the first grouping is not a second scheme.

Is it enough? Somebody reading only the group names could tell which rule you were following.

</details>

#### 4. Break both on purpose

**See it first.** Made-up example. Breaking two groupings of the same fifty-three cards on purpose, after first writing something useless.

- **What I wrote first:** “No scheme is perfect and both of these overlap a bit.” True, agreeable, and it told me nothing to do on Monday morning.
- **What I did instead:** I took one task from the research and walked it through the task scheme holding a specific person in mind: a first-timer, the night before her first class.
- **Where it stopped:** “What to bring” sat under Get ready for a class. She was still on the class page deciding whether to book, and that is where she wanted it.
- **The second scheme:** By topic, the cancellation policy sat under Booking. Nobody in the research had gone looking under Booking; they went looking under the money.
- **What the two cases gave me:** Two sentences, each naming an item and a person. The topic scheme broke worse, and I could say exactly where, which is what made the choice defensible.

**The wrong turn:** The wrong turn is conceding in general that every scheme overlaps. It sounds mature, it costs nothing, and it leaves you with no case anyone could test later.

**What it costs:** Naming a specific breakage commits you to a claim somebody can prove wrong. That is the point of it; a vague concession can never be checked at all.

**Still unknown:** Still unknown: whether the person you imagined resembles anyone real. The card sort and the tree test are where that gets checked.

- For each scheme, write the specific item and the specific person for whom it fails. Then decide each collision: duplicate, cross-link or restructure, with the reason.

**You should end up with:** A breakage case per scheme naming an item and a person, and a written decision for each item that belongs in two places.

Worksheet fields for this step:

- Scheme one breaks: the specific item, the specific kind of person, and the situation they are in
- Scheme two breaks: the specific item, the specific kind of person, and the situation
- Collision 1 · the item, its two candidate homes, and your choice of duplicate, cross-link or restructure, with the reason
- Collision 2 · the item, both homes, your choice and the reason
- Collision 3 · the item, both homes, your choice and the reason

<details>
<summary>Help with this step</summary>

- **Cross-link:** The item lives in one place and is linked from the other. It costs an extra click and keeps a single copy.
- **Restructure:** Changing the groups so the collision stops existing. Usually right when the same collision keeps coming back.

Stuck starting? Walk one research task through one scheme while holding a specific person in mind, and stop at the first place you hesitate. If m05 gave you nobody, use a person described in a real message you already have, and mark the case as your own reasoning rather than research.

Is it enough? Each breakage names a thing, a person and a moment, and no decision box says only that the item is difficult.

</details>

#### 5. Choose and record, then pause

- Choose the scheme you will carry forward. Write what you gave up and which tasks the loss affects, so the tree test can look for it. Save both groupings.

**You should end up with:** The scheme you are carrying forward, what you gave up, where the groupings live, and the repair the Check questions asked for.

**Try it with help.** A supplied decision from the same made-up project. The task scheme was carried forward, and “what to bring” is cross-linked from the class page rather than duplicated, so a person looking for it while choosing a class needs one extra click.

Which way of recording that trade-off is worth writing down?

- **“People deciding whether to book will now need one extra click to reach what to bring, and I will see it in the tree test as hesitation on the class page.”** — It names who pays, what they pay, and the specific thing a later test could show. That last part is what turns a note into a prediction.
- “The task scheme is better overall, although it has some drawbacks.” — It records a verdict and no cost. In three weeks nobody, including you, could say what was given up or check whether it mattered.
- “Cross-linking is a compromise between duplicating and restructuring.” — That describes the method rather than the consequence. It is true of every cross-link ever made and says nothing about this one.
- “We can revisit this if people complain about it.” — Complaints arrive only from the few who bother. The tree test is a few days away and would show the hesitation whether or not anybody spoke up.

**Then:** Write your own trade-off as “people doing … will now have to …, and I will see it in the tree test as …”. If you cannot finish that sentence, the cost is not yet understood.

Worksheet fields for this step:

- The scheme you are carrying forward
- What you gave up, which tasks the loss affects, and how a tree test would show it — Finish the sentence “people doing … will now have to …, and I will see it in the tree test as …”.
- Where the two groupings and their photographs live
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Carrying forward:** Choosing one grouping to build on in the next lesson. The other one is photographed and kept rather than thrown away.
- **Tree test:** A later test where people are shown only your group names and asked to find something. It is where a structure that sends people the wrong way becomes visible.
- **Trade-off note:** A written sentence naming who pays for your choice, what they pay, and what a later test would show. A verdict with no cost written beside it is not one.

Stuck starting? Choose the scheme whose breakage you would rather live with, and say why in one sentence.

Is it enough? The trade-off names who pays and what a later test would show.

</details>

**Save and continue.** Saved for you: Your group names, hesitations, breakages, decisions and trade-off save as you type, on this device first and then online. Kept outside the app: The cards and photographs stay in your own folder. Photograph each grouping before you disturb the table, and write the file names here. What your creator sees: Your creator reads the two breakage cases and the trade-off. Two schemes with their failures show more than one tidy structure ever could. Your next action: Open Your work and choose Ready for review. The next lesson draws your chosen scheme as a sitemap and then a shallower version of it, so keep both groupings.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Take the scheme you built and ask what the material would look like organised by what people are doing rather than what things are about. Re-sort completely rather than editing.

</details>

<details>
<summary>Hint 2</summary>

Take your three research tasks and walk each through both schemes. The first place you hesitate is the breakage; write down what you were holding and who you were being.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Organisation schemes and where they break.
Task: Group your inventory under two different organisation schemes, write the specific case where each one breaks, and decide which to carry forward with the trade-off recorded.
Challenge one thing at a time, and start with the mistake this lesson is about: “A good structure has no overlaps.” Real information overlaps, and a structure that eliminates every overlap has usually done so by inventing categories that match nothing in anyone's head. The goal is that a person looking for a specific thing has an obvious first place to look — not that a taxonomist could defend the partition.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the two groupings and ask whether two genuinely different schemes were built from the same items. Look at the two breakage cases and ask whether each scheme's breakage names an item and a person. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Draw the sitemap and its shallower alternative on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper and pencil, drawn wide rather than pretty; a phone photograph is the record. If you want it digital, an indented text list is a sitemap and is far easier to re-order than boxes in a diagram tool. Nothing here needs a diagramming account.

- Starting material: The scheme you chose and its recorded trade-off. A sitemap is that scheme drawn with its levels made explicit, which is when the depth problems become visible.
- Create HaruCourse/Practice/m06-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read on choices and load

- Read the assigned pages on the cost of choices and on cognitive load. Write what each says about the effort of choosing, and note that the source publishes no limits.

**You should end up with:** What the reading says about the effort of choosing, in your own words, including what it does not claim about a maximum.

Worksheet fields for this step:

- What the reading says about the effort of choosing and of scanning, and what it does not claim about a maximum number of options — Two or three sentences. The second half matters: the source publishes no limit, and the caution about that is the course’s, not theirs.

<details>
<summary>Help with this step</summary>

- **Sitemap:** Your grouping drawn with its levels made explicit, so you can see how far down each thing sits.
- **Depth and breadth:** Depth is how many levels a person passes through. Breadth is how many options sit side by side at one level.

Stuck starting? Write one sentence on what breadth costs a reader and one on what depth costs, then add what the source stays silent about.

Is it enough? You have said what each shape costs without repeating a number that nobody published.

</details>

#### 2. Draw the sitemap

**See it first.** Made-up example. Counting how deep each of three tasks reaches on my own sitemap of a small theatre, and getting every count too low.

- **What I wrote first:** Two levels for all three tasks. I had drawn the map an hour earlier and could see the route to each thing without moving my finger.
- **Why that was wrong:** I was counting my own route. I already knew the refund rule sat under Your visit, so the choice at level one was not a choice for me at all.
- **What I did instead:** I traced each task with a finger and made a mark wherever the map offered more than one plausible way down, whether or not I knew which one was right.
- **What the counts became:** Book a ticket stayed at two. Find out about step-free access went to three. Find out whether a ticket can be refunded went to four, and two of those points were guesses rather than choices.
- **The phone check:** I covered everything but level two with a sheet of paper. Seven labels side by side, no parent in sight, and three of them meant nothing without the group name that had scrolled away above them.

**The wrong turn:** The wrong turn is counting depth by walking your own route, because you drew the map and already know where everything sits. Every task comes out shallow, and the shape looks better than it is.

**What it costs:** Marking every uncertain point rather than every level gives you larger numbers that are harder to defend, and somebody will say you are being hard on your own work. You cannot show that the guesses are guesses until a tree test, so the honest count is the uncomfortable one.

**Still unknown:** Still unknown: which of the points you marked really are guesses for somebody else. You marked them by imagining that you did not know, and that is the one thing you cannot actually do.

- Draw your chosen scheme with every level, every group and every item's position. Count the levels each of your three research tasks must pass through.

**You should end up with:** Your map drawn with every level, how deep each of your three tasks reaches, and what level two looks like on a phone.

Worksheet fields for this step:

- How many levels your map has, and how many groups sit at level one
- Each of your three research tasks, and how many levels it has to pass through — Walk each task across the drawing with your finger and count the places where you had to choose.
- What level two looks like on a phone, once level one has scrolled off the screen — Cover everything but one level with a sheet of paper and read what is left. If you cannot tell where you are, neither can a reader.

<details>
<summary>Help with this step</summary>

- **Level one:** The groups a person sees first, before choosing anything.
- **Level two:** What sits inside a level-one group. Usually where vague containers accumulate.

Stuck starting? Draw level one across the top of a wide sheet, then hang each group’s contents beneath it.

Is it enough? Every item from your chosen scheme has a position, and the three task counts are real numbers you arrived at by tracing.

</details>

#### 3. Interrogate level two

- For each level-two group, write one sentence summarising its contents. Mark any group you cannot summarise; those are your vague containers.

**You should end up with:** A one-sentence summary for each level-two group, with any group you cannot summarise marked vague.

Worksheet fields for this step, revealed a few at a time in the app:

- Level-two group 1 · its name, one sentence saying what is inside, and the word vague if you cannot write that sentence
- Level-two group 2 · its name, one sentence saying what is inside, and the word vague if you cannot write that sentence
- Level-two group 3 · its name, one sentence saying what is inside, and the word vague if you cannot write that sentence
- Level-two group 4 · its name, one sentence saying what is inside, and the word vague if you cannot write that sentence

<details>
<summary>Help with this step</summary>

- **Summary sentence:** One sentence beginning “this contains …” that says what is actually inside a group. If it could describe three different groups, it has not worked.
- **Vague group:** A level-two group you cannot summarise in one sentence. It usually exists because two or three items had nowhere else to go.

Stuck starting? For each group write “this contains …” and list the actual items before you attempt the summary.

Is it enough? Each box either says plainly what is inside or says vague. A summary that could describe three different groups is a vague one.

</details>

#### 4. Build the shallower alternative

**See it first.** Made-up example. Flattening a three-level map, and finding out the flat version was worse for one of the three tasks.

- **What I started with:** Three levels. Get ready for a class, then Practical information, then What to bring. Every item had a home and the drawing looked orderly.
- **What I did first:** I lifted everything to level one. Nineteen labels across the top, on the grounds that nothing should be more than one choice away.
- **Why that failed:** Nineteen labels is a wall of reading, not a menu. On a phone the list ran past two screens, and the thing people needed most sat fourteenth.
- **What I did instead:** I lifted only the four items my research showed people needed, gave each a plain label at level one, and left the rare material one level down.
- **What it cost:** Someone browsing everything about a class now meets four separate entries instead of one tidy parent. Nobody in my research had ever browsed that way, so I accepted it and wrote it down.

**The wrong turn:** The wrong turn is treating shallow as a goal in itself. Flat helps only while the reader can still scan the row, and nineteen options stop being a row.

**What it costs:** The shallower map gives up the parent that held related things together. Someone who wanted to read around a subject now has to find the pieces separately.

**Still unknown:** Still unknown: whether four is the right number to lift. Only a tree test can show where people actually stop, and that is a later lesson.

- Produce a second sitemap for the same content that is one level shallower, lifting the most-needed items. Note what became crowded and what became harder to find.

**You should end up with:** A second map of the same content, one level shallower, with what you lifted and what that cost.

Worksheet fields for this step:

- Which items you lifted to level one, and why those ones — Lift what your research showed people need, not what you find interesting.
- What became crowded, and what became harder to find — Something always gets worse. If nothing did, the second map is probably the first map redrawn.

<details>
<summary>Help with this step</summary>

- **Lifting:** Moving an item up a level so a person meets it sooner. What you lift should come from your research rather than from what interests you.
- **Parent:** The group an item sits inside. Lifting an item out of one saves a step and loses whatever the parent was holding together.
- **Crowding:** So many labels side by side at one level that the row stops being scannable and becomes a wall of reading.

Stuck starting? Take the four items your research showed people need most, put them at level one, then re-place everything else around them.

Is it enough? Every item exists in both maps, and you can name something the shallower one made worse.

</details>

#### 5. Compare on tasks and pause

- For each of your three tasks, state which shape favours it and why. Choose the version to test in lesson 7 and record the choice. Save both maps.

**You should end up with:** Which shape favours each task, your chosen shape with what it costs, where the drawings live, and the repair the Check questions asked for.

**Try it with help.** Two supplied maps of the same made-up content. Map A has four groups at level one and three levels in total. Map B has eight groups at level one and two levels in total. Supplied task: a person booked a class for Saturday, something has come up, and she wants to know whether she can get her money back.

Which shape favours this task, and on what grounds?

- **Map B, because the refund rule can sit at level one where she reads it instead of guessing what a parent group contains.** — She arrives with one specific need and little patience. A visible label removes the guess, and the guess is the part that loses people.
- Map A, because four groups are easier to scan than eight. — Scanning eight short labels takes seconds. Choosing between four vague parents and then choosing again takes longer and can go wrong at either step.
- Map A, because three levels give the content room to be organised properly. — Room to organise serves the person drawing the map. This task is judged by whether one worried person finds one rule.
- Neither: the content is the same, so the shape cannot affect the task. — Same content, different number of decisions. The shape changes how many uncertain choices the task costs, which is exactly what is being compared.

**Then:** Do this for each of your three tasks and expect the answer to change between them. A shape that wins every task usually means the tasks were too alike.

Worksheet fields for this step:

- For each of your three tasks: which shape favours it, and why — Count uncertain decisions rather than clicks. Expect the answer to differ between tasks.
- Which shape you will take into the tree test (The deeper map / The shallower map)
- What you gave up, which task it affects, and what a tree test would show if it matters — Finish the sentence “people doing … will now have to …, and I would see it as …”.
- Where both drawings live — File names or “paper, in my folder”. Naming a file does not upload it.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Uncertain decision:** A point where a person has to guess which way to go. Two of these cost her more than four choices she is sure about.
- **Favouring a task:** A shape is not better in general. It is better for some tasks and worse for others, so the comparison is made one task at a time.

Stuck starting? Walk each task through both maps with your finger, marking every point where you would be unsure.

Is it enough? The chosen shape is named alongside a task it disadvantages, not presented as the obvious answer.

</details>

**Save and continue.** Saved for you: Your notes, the level-two summaries and the comparison save as you type, on this device first and then online. Kept outside the app: Both drawings stay on paper or in your own folder. Photograph them if you like and write the file name in the last box; naming a file does not upload it. What your creator sees: Your creator reads the comparison and the recorded cost. Share the photographs the way you normally share files if you want him to see the maps themselves. Your next action: Open Your work and choose Ready for review. The next lesson puts your inventory cards in front of people and asks them to group them.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Take your map and lift the four items your research showed people need most to level one, then re-place whatever is left. Check that no item disappeared in the process.

</details>

<details>
<summary>Hint 2</summary>

For each level-two group, write “this contains …” listing the actual items. If the list has no coherent theme, mark the group.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Depth, breadth and the sitemap.
Task: Draw a sitemap of your chosen scheme showing every level, then produce a shallower alternative for the same content and state which tasks each shape favours.
Challenge one thing at a time, and start with the mistake this lesson is about: “Three clicks maximum.” The number is folklore, and people will click many times when each click clearly moves them closer. What loses them is uncertainty, not distance: two confident clicks feel shorter than one gamble. Design for confident choices, and count clicks only as a rough symptom.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the two complete maps and ask whether both sitemaps cover the same content at different depths. Look at the summaries and marks and ask whether level-two groups are summarised and vague containers marked. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Index cards or paper cut into squares, a table and a phone camera. This is the required route: online sorting platforms are paid at the sizes that matter and add nothing at four participants, while a physical sort lets you see the hesitation that carries most of the information.

- Starting material: The cards from your inventory, your consent introduction from m05 and your recruitment route. The cards must show the item, not your proposed label, or you will be testing your own wording back at yourself.
- Create HaruCourse/Practice/m06-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Prepare the cards and the script

- Read the assigned method sections. Write or print thirty to fifty cards showing item descriptions, not your labels. Extend your consent introduction to cover a sorting session and photographs of the cards.

**You should end up with:** Your card set counted and checked, and the sentences you will say before anyone starts.

Worksheet fields for this step:

- How many cards you made, and where the card set lives — Thirty to fifty is workable. Past about sixty people tire and the last piles get made carelessly.
- Two cards you rewrote because the face hinted where the card belonged, before and after
- The sentences you will say before starting: what the session is, that nothing about it is a test of them, that you will photograph the cards, and that they can stop at any point — Extend the introduction you wrote in m05 rather than starting again.

<details>
<summary>Help with this step</summary>

- **Open sort:** You hand over the cards and the person makes their own groups and names them. Run it while the structure is still open.
- **Closed sort:** You supply the groups and the person decides where each card goes. It tests categories you have already chosen.
- **Consent:** The person understands what will happen, agrees to it beforehand, and can stop without explaining why.

Stuck starting? Deal the cards out and read only the faces. Any card whose wording points at a group has to be rewritten.

Is it enough? No card face carries a group name or one of your proposed labels, and you could say the consent sentences aloud without reading them.

</details>

#### 2. Run the open sort

**See it first.** Made-up example. Running an open sort and writing down a conclusion instead of what happened.

- **What I set up:** Forty-three cards on a kitchen table, one person who had agreed beforehand, and a phone ready to photograph the piles.
- **What I wrote at the time:** “She found the cancellation cards confusing.” One line, written while she was still sorting, and it felt like a finding.
- **Why it was useless a week later:** I could not say what she had done. Confusing was my word for something I had watched and never described.
- **What I should have written:** She picked up the cancellation policy card three times, put it with the money cards, moved it to the cancelling pile, then moved it back. She said “this depends on whose fault it is”.
- **What that gave me:** Two facts and one quotation, all of which survive being read by someone who was not there. Confusing is still available as my reading, on its own line, with my name on it.

**The wrong turn:** The wrong turn is writing the interpretation while the person is still in the room. It is the sentence you want to act on, it takes ten seconds, and it destroys the evidence underneath it.

**What it costs:** Writing what happened is slower and your notes read duller. It is what lets a change be traced to a person rather than to your memory of an afternoon.

**Still unknown:** Still unknown: why she thought about fault at all. One sort with one person cannot tell you, and it is worth asking the next person.

- With consent, ask a participant to group the cards however makes sense to them and name each group in their own words. Ask them to think aloud. Write down hesitations, moved cards and exact phrases. Photograph the final arrangement.

**You should end up with:** The open sort recorded: how it actually happened, the groups and names in their words, and every hesitation.

Worksheet fields for this step:

- How the open sort actually happened (A person consented and sorted the cards / Nobody has consented yet, so I sorted them myself as a rehearsal) — Answer this before you write anything else about the session. It decides what the rest of the record is allowed to claim.
- The groups they made and the name they gave each, in their words — Copy the names exactly, including the awkward ones. A name you tidy up is a name you invented.
- Every card moved twice, every pause, and the exact words spoken while hesitating

<details>
<summary>Help with this step</summary>

- **Hesitation:** A moment when someone slows down, changes their mind, or handles the same card more than once. Write the card and the movement, not the word hesitation.
- **Participant:** Someone who agreed beforehand to take part. You cannot be one in your own study, because you already know how the structure is meant to work.
- **In their words:** Copying a pile name exactly as the person said or wrote it, awkward phrasing and all. A name you tidy up becomes a name you invented.

Stuck starting? Say “there are no wrong groups, and I am interested in how you think about these”, then stop talking and write.

Is it enough? Someone reading your notes could describe the session without asking you a single question.

</details>

#### 3. Run the closed sort

**See it first.** Made-up example. Running a closed sort where every card found a home, and only afterwards noticing that I had left nobody any way to refuse.

- **What I set up:** Six group names from my own structure, written large and laid across the table. Forty-three item cards handed over a few at a time.
- **What I said:** “Put each card in the group it belongs to.” Every card landed somewhere. The sheet I filled in looked complete and looked like work.
- **What I noticed the next morning:** Two cards had gone down after a long pause and a shrug, and my sheet recorded only the group name. The pause was nowhere on it.
- **What I changed for the second sitting:** I added a seventh space marked “does not belong in any of these”, said out loud that using it was a real answer, and wrote a line beside every card that took more than a moment.
- **What that gave me:** The refund rule card sitting in the seventh space with the words “it is not really about money” beside it. My tidy version could not have produced that line at all.

**The wrong turn:** The wrong turn is telling the person that every card has to go somewhere. It fills the sheet, it feels like a finished piece of work, and it quietly turns doubt into a placement you can no longer see.

**What it costs:** A refusal space costs you completeness. You end up holding items with no home and no instruction about where they should live, and that is an unfinished structure you have to come back to with a different method.

**Still unknown:** Still unknown: whether a card was refused because your group names are wrong or because the item does not belong in the product at all. A closed sort cannot separate those two.

- With another participant, or the same one after a break, lay out your chosen groups and ask where each card goes. Record every card they place slowly, question or refuse to place.

**You should end up with:** The closed sort recorded: how it actually happened, and every card placed slowly, questioned or refused.

Worksheet fields for this step:

- How the closed sort actually happened (A person consented and placed the cards / Nobody has consented yet, so I placed them myself as a rehearsal)
- Every card placed slowly, questioned or refused, and what was said about each — A card placed instantly and a card placed after twenty seconds are different results, even when they land in the same group.

<details>
<summary>Help with this step</summary>

- **Placement:** One card going into one group. How it got there matters as much as where it landed, so record the speed and the muttering beside it.
- **Supplied groups:** The categories you write out before a closed sort begins. They come from your own structure, which is the thing being put to the test.
- **Refusal:** A person saying that a card fits none of your groups. Write it down as a result rather than talking them into a pile.

Stuck starting? Lay your chosen groups out first, then hand the cards over one small pile at a time.

Is it enough? The slow placements are written down separately from the fast ones.

</details>

#### 4. Capture the record

- Immediately write up each session: participant label, groups with their names, card placements, hesitations and quotations. Photograph everything before you disturb the table.

**You should end up with:** A written record of each session, three of your own lines split into did, said and concluded, and where the photographs live.

**Try it with help.** Six lines from a card-sort write-up, all made up for practice. They come from one session with one person. Sort each line by what it actually is.

- She picked up the cancellation policy card, put it with the money cards, then moved it to the cancelling pile.
  - **what she did** — It describes her hands. Anyone watching would have written down the same movement, which is what makes it usable later.
  - what she said — She was silent through this one. The record here is of movement, which is why it belongs under doing.
  - your conclusion — There is no judgement in it yet. Keeping it as an action is what lets you draw a conclusion later and still show your working.
- “This depends on whose fault it is,” she said, holding the card above the table.
  - what she did — Holding the card is doing, and the sentence is the valuable half. Keep the quotation as speech and note the holding beside it.
  - **what she said** — Her exact words, inside quotation marks. That is the form that survives being read by someone else in six months.
  - your conclusion — You have added nothing of your own. The words are hers, and that is precisely what makes them worth keeping.
- The cancellation cards confused her.
  - what she did — Confusion is not a movement. What she did was move one card twice; confused is your reading of that movement.
  - what she said — She never used the word. Putting your word into the speech column is how a quotation quietly becomes yours.
  - **your conclusion** — It may well be true, and it is yours. On its own line it stays a claim you can go and check with the next person.
- She made a pile and wrote “stuff before the class” on a note beside it.
  - **what she did** — She built something and named it. Both are actions you watched, and the wording of the name is hers rather than yours.
  - what she said — She wrote it rather than speaking it. Filing it as an action keeps the pile and its name together, which is where the value is.
  - your conclusion — Nothing here is your interpretation. The pile exists and the words are on the note.
- The split over the cancellation policy means there are two kinds of customer.
  - what she did — One person cannot split. This is a reading of a pattern across sessions, which makes it yours rather than hers.
  - what she said — She spoke about fault, not about kinds of customer. The leap from the first to the second is yours.
  - **your conclusion** — A reasonable idea and an unproven one. On its own line it becomes something the next session could test.
- She placed the directions card in under two seconds without looking up.
  - **what she did** — Speed is behaviour and you watched it happen. Recording it keeps a confident placement different from a resigned one.
  - what she said — She said nothing at all here. The speed is the whole of the evidence.
  - your conclusion — You have not yet said what the speed means. Keeping the fact separate leaves the meaning open for later.

**Then:** Take three lines from your own notes and split them the same way. Any line that will not split is already a conclusion.

**What to watch for:** Doing and saying can be checked by someone who was not in the room. Your conclusion cannot, so it needs its own line and your name on it.

Worksheet fields for this step:

- The write-up of each session: participant label, groups with their names, card placements, hesitations and quotations — Use a label such as P1, never a name. Anonymity is part of what you promised.
- Three lines from your notes, each split into what they did, what they said, and what you concluded — Any line that will not split is already a conclusion wearing the clothes of an observation.
- Where the photographs live — File names or “on my phone, in the card sort album”. Nothing is uploaded from here.

<details>
<summary>Help with this step</summary>

- **Session record:** The written account of one sitting with one person, built from the photographs and the rough notes together, on the same day.
- **Quotation:** A person’s exact words inside quotation marks, unchanged. It is the part of your notes that still means something to a reader who was not there.
- **Conclusion:** Your own reading of what you watched. It is worth keeping and it needs its own line, because nobody else can check it the way they can check a movement.

Stuck starting? Write the record from the photographs and the rough notes together, in that order, before you interpret anything.

Is it enough? Each session has a participant label, named groups, hesitations and at least one exact phrase.

</details>

#### 5. Note the sample and pause

- Write how many people sorted, how they were recruited and who is missing. If nobody consented, record the recruitment gap and run the sort with yourself as a rehearsal, labelled as such and never counted as data.

**You should end up with:** How many people sorted and who is missing, the recruitment gap if there is one, your rehearsal label, and the repair the Check questions asked for.

Worksheet fields for this step:

- How many people sorted, how you found them, and who is missing — This sentence goes at the top of the record, not the bottom, and travels with the results everywhere.
- If nobody consented: what you tried, on which dates, and what you will try next — A dated gap plus the prepared cards and the script is a complete answer to this lesson. It is a real finding about access.
- The words written on every rehearsal artefact so it can never be read as research
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Rehearsal:** You running the method on yourself to practise it. It shows you can run the session and it is never evidence about anybody.
- **Recruitment gap:** A dated written note of who you asked, when, and what you will try next. It is an honest finding about access, not a failure to hide.

Stuck starting? Write the count first, then the route you used to find people, then the kind of person you never reached.

Is it enough? A stranger reading only this box could tell whether any participant was involved.

</details>

**Save and continue.** Saved for you: The card notes, session records and sample line save as you type, on this device first and then online. Kept outside the app: The photographs stay on your phone or in your own folder. Write the file names in the photograph box; naming a file does not upload it. Keep participant names out of every file name. What your creator sees: Your creator reads the session records and the sample line. If nobody consented, he reads the dated gap and the rehearsal instead, and that is a complete submission. Your next action: Open Your work and choose Ready for review. The next lesson turns these records into counts, without turning four people into a percentage.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Read each card and ask whether it hints where it belongs. Rewrite any card that does, using the words your m05 participants used for that thing.

</details>

<details>
<summary>Hint 2</summary>

If recruitment failed, write what you tried, when, and what you will try next, then run both sorts on yourself and label every artefact rehearsal, permanently.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Run a card sort on paper.
Task: Run at least one open and one closed card sort with consenting participants using physical or hand-written cards, and record each participant's groups, their own group names and everything they said while hesitating.
Challenge one thing at a time, and start with the mistake this lesson is about: “A card sort tells you what the structure should be.” It tells you how a few people group and name things when handed a pile of cards with no task and no context. It is evidence about their expectations, not a design, and the structure you build from it still has to be tested against real tasks — which is what the tree test in the next lessons does.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the corrected card set and ask whether cards show items in plain words, not proposed labels. Look at both records, or the gap and the labelled rehearsal and ask whether both an open and a closed sort were run with consent. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A table on paper or in a text file with one row per item. Avoid similarity matrices and clustering diagrams entirely at this sample size — not because the tools are unavailable, but because their output would be more confident than your evidence.

- Starting material: The sort photographs, session notes and your two sitemaps. Both the sorts and the maps are inputs; neither wins automatically.
- Create HaruCourse/Practice/m06-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Build the item table

- Read the assigned analysis sections. Make one row per item and one column per participant, filling in where each card went and marking hesitations.

**You should end up with:** A table with one row per item and one column per participant, three rows written out in full, and any placement you could not recover.

Worksheet fields for this step:

- How many items are in your table, and how many participants have a column
- Three rows written out in full, each naming where every participant put the item and where anyone hesitated
- Any placement you could not recover from the photographs or the notes — Leave the cell blank and say so here. A reconstructed placement is an invented one.

<details>
<summary>Help with this step</summary>

- **Item-by-item analysis:** Reading the sort one card at a time across all participants, rather than one person’s piles at a time.
- **Placement:** Where one participant put one card, plus whether they arrived there quickly or slowly.

Stuck starting? Lay the photographs side by side and work down one card at a time, filling the whole row before you move on.

Is it enough? Every row has a cell for every participant, blank where the placement is genuinely unrecoverable.

</details>

#### 2. Classify the patterns

**See it first.** Made-up example. Classifying four sorts, and turning three people into a percentage before catching it.

- **What the rows said:** Twenty-one items, four participants. Three of the four put the refund rule with the money cards. One put it with cancelling.
- **What I wrote first:** “75 per cent of users group the refund rule with payment.” It looked like a result and it fitted neatly on one line.
- **Why it was wrong:** Four people are not a sample of users. The sentence promised something about everybody, from evidence about four, and the number lent it a confidence nothing had earned.
- **What I wrote instead:** “Three of four put the refund rule with the money cards. One put it with cancelling. Two of the three hesitated first.” Longer, duller, and true.
- **What the count showed that the rate hid:** Two of the three hesitated. A clean rate buries that; the count with the hesitations beside it made the item ambiguous rather than agreed, which changed what I did next.

**The wrong turn:** The wrong turn is the arithmetic. It takes one second, it makes the finding sound stronger, and it converts four people into a claim about a population you never met.

**What it costs:** Counts read as small and unimpressive, and somebody will ask whether that is really all you have. It is, and saying so plainly is what keeps the rest of your findings believable.

**Still unknown:** Still unknown: whether the money grouping holds for anyone who has never cancelled anything. None of the four had, and a count cannot cover a person you did not meet.

- Label each item agreement, disagreement or ambiguous. For each disagreement write what you think it means: two audiences, two items, or too little evidence.

**You should end up with:** Each item labelled agreement, disagreement or ambiguous, with counts and an interpretation written for every disagreement.

Worksheet fields for this step:

- How many of your items fell into each of the three patterns
- Each disagreement, with what you think it means: two audiences, two items, or too little evidence — Look at who placed it which way and what else you know about them. If nothing distinguishes them, say so rather than deciding.
- The items placed consistently but slowly, and what the hesitation looked or sounded like — This is the pattern people miss, and it predicts a wrong first click better than a clean split does.

<details>
<summary>Help with this step</summary>

- **Agreement:** An item that everybody placed the same way, and placed easily. Both halves of that have to be true before you write the word.
- **Disagreement:** An item that people placed in different groups. Write the counts, then write what you think the split means and who was on each side.
- **Ambiguous:** An item placed the same way by everybody, but slowly or after second thoughts. It is the pattern people miss, and it warns you about a label before a tree test does.

Stuck starting? Read down each row and ask two questions: did they all place it the same way, and did any of them take their time.

Is it enough? Every item carries one of the three labels, and every disagreement carries a sentence saying what you think it means.

</details>

#### 3. Revise the structure

**See it first.** Made-up example. Writing one traced change that turned out to be three changes hiding behind a single true sentence.

- **What the table showed:** All four participants put “change my booking” and “cancel my booking” in different piles. A plain disagreement, with both piles named in their own words.
- **What I wrote in the box as one change:** Split changing from cancelling. While I was in there I also renamed the group above them to “Booking admin” and moved the payments items underneath it.
- **The trace sentence I put beside it:** “Four of four put changing and cancelling in different piles.” Entirely true, and it covered about a third of what I had actually done.
- **What I saw reading it back:** Nobody had touched the name of the group above, and nobody had gone anywhere near the payments cards. Two of my three moves rested on my own taste.
- **What I did about it:** Cut the entry back to the split alone, moved the rename and the payments move to the preferences list, and wrote beside each one what a participant would have to do for it to come off that list.

**The wrong turn:** The wrong turn is letting one true trace sentence stand for everything you altered at the same sitting. The sentence is honest, the change around it is not, and you will not notice because you wrote both in the same minute.

**What it costs:** One change per box makes your revision look thin: three small moves instead of the nine you can see are needed. The thin list is the one you can defend line by line when somebody asks where each move came from.

**Still unknown:** Still unknown: whether the split is the right split. Four people separating two cards tells you they are not the same thing, and tells you nothing about what the two new groups should be called.

- Change your chosen sitemap from the analysis. For each change write the trace sentence naming the item, the participants and what they did.

**You should end up with:** Each change to your structure with a sentence naming the item, the participants and what they did.

Worksheet fields for this step, revealed a few at a time in the app:

- Change 1 · what moved, and the sentence naming the item, the participants and what they did
- Change 2 · what moved, and the sentence naming the item, the participants and what they did
- Change 3 · what moved, and the sentence naming the item, the participants and what they did
- Change 4 · what moved, and the sentence naming the item, the participants and what they did

<details>
<summary>Help with this step</summary>

- **Trace sentence:** The sentence beside a change naming the item, which participants, and what they actually did. If you cannot finish it, the change is not led by evidence.
- **Revision:** Your structure as it stands after these changes, kept beside the old version so anybody can see what moved and read why.

Stuck starting? Begin with the disagreement you understand best and finish the sentence “this moved because participants … did …”.

Is it enough? No change is left whose trace sentence you cannot complete.

</details>

#### 4. Separate preference from evidence

- List every change you wanted to make that no participant's behaviour supports. Keep them in a separate preferences list; do not smuggle them into the evidence-led changes.

**You should end up with:** Every change you wanted that no participant’s behaviour supports, kept on its own list.

Worksheet fields for this step:

- Every change you want to make that no participant’s behaviour supports — These are allowed and often sensible. They are simply not findings, and this list is where they say so.
- The one you most wanted to move onto the evidence list, and why it stays here

<details>
<summary>Help with this step</summary>

- **Preference:** A change you want to make because you think it is better. Allowed, often sensible, and not a finding.
- **Evidence:** Something a participant did or said that you wrote down at the time. Your memory of an afternoon does not qualify.

Stuck starting? Go through the changes you did not write in the last step and ask which participant did what to prompt each one.

Is it enough? The preferences list is not empty. If it is, you have probably filed a preference as a finding.

</details>

#### 5. Write the sample line and pause

- Write the sentence that will accompany these results everywhere: how many people, recruited how, and that the sort is exploratory. Save the table, the revised map and the preferences list.

**You should end up with:** The sentence that goes with these results everywhere, what your search for rates turned up, and the repair the Check questions asked for.

**Try it with help.** A supplied made-up result. Four people sorted twenty-one cards. Three put the refund rule with the money cards and one put it with cancelling, and two of the three hesitated before placing it. Four sentences were drafted for the write-up.

Which sentence can honestly carry this result?

- **Three of four participants put the refund rule with the money cards, two of them hesitating first; one put it with cancelling.** — It is a count of people and it keeps the hesitation in. A reader sees exactly what happened, and exactly how little of it there is.
- 75 per cent of participants group the refund rule with payment. — The same four people, dressed as a rate. A rate invites comparison with other rates, and there is nothing here worth comparing.
- Most users expect the refund rule to sit with payment. — Users is a far bigger word than participants, and most is a claim about a population. Four people in one afternoon support neither.
- The refund rule belongs with the money cards. — That is your decision, not the evidence. Write the decision separately so a reader can see what it rests on and disagree with it if they wish.

**Then:** Read your own write-up for sentences of the second and third kind, and rewrite each as a count of people with the hesitations kept in.

Worksheet fields for this step:

- How many people sorted, how you found them, and that a sort this size is exploratory — Write it once and copy it wherever these results appear, including any slide or portfolio page.
- What you found when you searched your write-up for the per cent sign and for anything drawn as a distance
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Sample line:** One sentence saying how many people took part, how you found them, and how far the results may be pushed. It travels with the results everywhere they appear.
- **Exploratory:** A word saying the work was done to find out what is going on, not to settle anything. It is the honest label for a sort with a handful of people.
- **Rate:** A share written as a percentage or a fraction of a whole. It invites comparison with other rates, which is why a handful of people belongs in a count instead.

Stuck starting? Write the count, then the recruitment route, then the word exploratory, in one sentence.

Is it enough? The sample line could be pasted beside any result in this lesson and still be accurate.

</details>

**Save and continue.** Saved for you: The item table notes, the classifications, the traced changes and the sample line save as you type, on this device first and then online. Kept outside the app: The full table can stay in a text file or on paper if it is easier to work with there. Write the file name in the last section; naming a file does not upload it. What your creator sees: Your creator reads the traced changes and the preferences list side by side. The preferences list is the part that shows the discipline, so do not thin it out before submitting. Your next action: Open Your work and choose Ready for review. The next lesson puts the revised structure in front of people as a paper tree and gives them tasks to find things in it.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Rebuild the table from the photographs and session notes. If a placement is unrecoverable, leave the cell blank rather than reconstructing it from memory.

</details>

<details>
<summary>Hint 2</summary>

Re-read your hesitation notes and mark every item that was placed slowly. Those are your ambiguous items, however consistent the placements look.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Read a card sort without overclaiming.
Task: Analyse your sorts into a written list of agreements, disagreements and ambiguous items, expressed as counts of participants, and revise your structure with each change traced to what a participant actually did.
Challenge one thing at a time, and start with the mistake this lesson is about: “Three out of four agreed, so 75 per cent of users would.” Four people are not a sample of anything and the second sentence is a different kind of claim from the first. Write the count and let it be a count; it is entirely respectable evidence in that form, and worthless in the other.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the completed item table and ask whether analysis is item by item with per-participant placements. Look at the classified table and ask whether agreement, disagreement and ambiguity are distinguished. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Draw the tree one level per sheet and the six task cards on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Sheets of paper, one per level, revealed in order — this is the required route. The platforms the assigned article names are paid, and at three to five participants they would add remote convenience and nothing else; running it by hand also lets you hear the hesitation, which the tool records only as elapsed time.

- Starting material: Your revised sitemap and the ambiguous items from the sort analysis. The tasks should aim at the places you are least sure of, not at the places you are proud of.
- Create HaruCourse/Practice/m06-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and build the paper tree

- Read the assigned article on running a tree test. Write your structure onto sheets, one per level, so you can reveal it a level at a time without showing what is below.

**You should end up with:** A paper tree with one sheet per level, copied from your revised structure without improving anything on the way.

Worksheet fields for this step:

- What is written on each sheet, level by level — Copy the labels exactly as they stand in your revised structure. Do not improve them while you copy.
- How you will keep the lower sheets out of sight — Face down in a pile, or in an envelope. A person who glimpses the second level has already been given the answer.

<details>
<summary>Help with this step</summary>

- **Tree test:** A test of the words alone. You show the structure a level at a time, with no page design, no pictures and no search box, and ask a person where they would go.
- **First choice:** The very first branch a person picks. It is where the structure works or fails, and everything after it is recovery.

Stuck starting? Write the top level on one sheet. Then give every group on it a sheet of its own.

Is it enough? You can reveal one level at a time without the next one showing.

</details>

#### 2. Write six tasks and their answers

**See it first.** Made-up example. Writing six tree-test tasks, and finding that the first three handed people the answer.

- **What I wrote first:** “Find the cancellation policy.” Six tasks in that shape, taken straight off my own sitemap.
- **Why it looked fine:** Each one named a real thing in the tree, so I thought I was testing whether people could reach it.
- **What happened in the room:** The word “cancel” was on the top sheet. The first person read it back to me and pointed. I had tested her eyesight.
- **What I wrote instead:** “You booked a class for Saturday and something has come up. Where would you go?” The word cancel never appears.
- **What that cost me:** Two of the six tasks now had more than one reasonable answer, so I had to decide and write the second acceptable answer before running anything.

**The wrong turn:** The wrong turn is writing tasks from the sitemap, because the labels are sitting in front of you. A task carrying the label of its target tests matching, not finding.

**What it costs:** A situation-shaped task takes longer to write and often has two reasonable answers. You have to settle both in advance, which is slower and is the only thing that makes the result readable.

**Still unknown:** Still unknown: whether these situations are ones your people actually meet. They came from your m05 notes, and those were a few people.

- Write six task scenarios with a situation and a goal, avoiding the label you are testing. Write the correct answer for each, including acceptable alternatives, before you run anything.

**You should end up with:** Six tasks, each a situation with a goal, and the answer you accept written down before anyone sits with you.

Worksheet fields for this step, revealed a few at a time in the app:

- Task 1 · the situation, the goal, and the answer you will accept — Describe a moment, not a destination. If the sentence names a label from your tree, it is not a task yet.
- Task 2 · the situation, the goal, and the answer you will accept
- Task 3 · the situation, the goal, and the answer you will accept
- Task 4 · the situation, the goal, and the answer you will accept
- Task 5 · the situation, the goal, and the answer you will accept
- Task 6 · the situation, the goal, and the answer you will accept

<details>
<summary>Help with this step</summary>

- **Task:** A short description of a situation and a goal, with no word from your tree inside it. It describes a moment, not a destination.
- **Accepted answer:** The place, or places, you decided beforehand would count as arriving. Deciding afterwards is how a person talks themselves into a success.
- **Leading:** Wording that hands over the answer, usually by using a word the person can already see on the sheet in front of them.

Stuck starting? Take a moment from your m05 notes and write what the person was holding, worrying about and trying to do.

Is it enough? No task contains a word that appears anywhere on your sheets.

</details>

#### 3. Run the test

- With consent, run all six tasks with at least three participants. For every task record first choice, path, backtracking and where they said they would stop. Ask nothing that guides them; answer questions with “where would you look?”

**You should end up with:** Every task run with each person, recording the first choice and the whole path, not only whether they arrived.

**Try it with help.** A supplied made-up record of one task with one person. She chose “Get help” first, went back to the top, then chose “Change or cancel”, then reached the target on the second sheet. She arrived.

What is the most important thing to write in your table about this task?

- **That her first choice was “Get help”, and that she went back to the top before reaching the target.** — The first choice is where the structure either works or fails, and a return to the top says a top-level label pointed her the wrong way. Neither is visible in a count of successes.
- That she arrived, because the task was completed. — Arriving hides the two moves before it. In a real product a person who backs out of a wrong branch often leaves instead of trying again.
- How long she took, so you can compare it with the other tasks. — Time is easy to record and hard to read with three people. The route she took says the same thing more plainly and cannot be mistaken for a score.
- That the target sat on the second sheet, so the second level is the problem. — How deep the target sits is a fact about your tree rather than about her. Her return to the top points at the level above, which is the opposite conclusion.

**Then:** Give your own table a column for first choice and a column for the whole path, and fill both before you write down whether the person arrived.

Worksheet fields for this step:

- How this run actually happened (Three or more people took part, with consent / One or two people took part, with consent, and the gap is recorded / Nobody was available: I ran it on myself as a rehearsal, labelled as a rehearsal and never counted as a result)
- For every task and every person: the first choice, the whole path, whether they went back up, and where they said they would stop — Write the first choice before you write the outcome. It is the column you cannot recover afterwards.

<details>
<summary>Help with this step</summary>

- **Path:** Every choice a person made, in order, including the ones they took back. It is the whole of what happened, not only where they finished.
- **Backtracking:** Going back up a level after choosing a branch. In a real product, somebody who does this twice often leaves instead of trying again.
- **Rehearsal:** You running the test on yourself to check that the tasks are clear. It never counts as a result, because you already know the tree.

Stuck starting? Ask for consent, explain that you are testing the words and not the person, and answer every question with “where would you look?”.

Is it enough? Every task and every person has a first choice and a path recorded. If nobody consented, choose the rehearsal option, run it on yourself, and label every sheet and every line rehearsal so it can never be read as research.

</details>

#### 4. Record confidence

**See it first.** Made-up example. Asking people how sure they were, and collecting six yeses that meant nothing at all.

- **How I asked it:** “Are you sure that is right?” after each task, with a column on my sheet for yes or no. It took three seconds and fitted the table beautifully.
- **What came back:** Yes, every time, from the first person. A straight line of yeses down the column, and I nearly wrote that everybody was confident in the structure.
- **Why the question was broken:** “Are you sure that is right?” tells a person there is a right answer and hints that I already know it. The polite reply to that is yes, and I had asked for the polite reply.
- **What I asked the second person instead:** “How sure are you that this is the place, and what would you do next?” She said fairly sure, and that she would have looked in Get help first if this had not worked.
- **What I stopped doing:** I had only been asking after the tasks that went badly. Asking after every task is the only thing that makes somebody who is certain and in the wrong place visible at all.

**The wrong turn:** The wrong turn is the yes-or-no confidence question. It is quick to ask, quick to write down, and it carries your own opinion inside it, so people answer the opinion rather than the question.

**What it costs:** Answers in their own words will not line up in a column and cannot be added up. You are left with sentences you have to sit and read, and no tidy figure to put anywhere.

**Still unknown:** Still unknown: what somebody who says fairly sure would do in a real product with a price on the page. Sitting at a table with paper costs her nothing, so this is a guess about her behaviour rather than a measure of it.

- After each task ask how sure they are they have arrived. Record the answer in their words. A confident wrong answer and an unsure right one are different results and lead to different changes.

**You should end up with:** How sure each person was that they had arrived, written in their own words.

Worksheet fields for this step:

- After each task, how sure they were that they had arrived, in their own words — Ask “how sure are you that this is the right place?” and write the answer down as said.
- Any task where somebody was sure and wrong, or unsure and right

<details>
<summary>Help with this step</summary>

- **Confidence:** How sure a person is that they have arrived, written in their own words rather than turned into a number.
- **Confidently wrong:** Somebody who is certain and is in the wrong place. It is the most serious result this test gives you, because nothing about the feeling prompts them to look further.
- **Unsure and right:** Somebody who arrives and doubts it. They found the thing and the words gave them no reassurance, which is a smaller trouble with the same cause.

Stuck starting? Ask the confidence question straight after each task, before you move the sheets.

Is it enough? A confident wrong answer and an unsure right one are marked as different results, because they lead to different changes.

</details>

#### 5. Capture and pause

- Write the raw results into one table before you interpret anything, and note the participant count and route. The next lesson interprets them. If nobody consented, record the gap and keep the tasks and the paper tree as the deliverable.

**You should end up with:** The sample line, where the sheets and the table live, and the repair the Check questions asked for.

Worksheet fields for this step:

- How many people took part, how you found them, who is missing, and whether any of this was a rehearsal — This sentence travels with the results everywhere they appear, so write it once and keep it at the top.
- Where the sheets, the task cards and the table live — File names or “paper, in my folder”. Nothing is uploaded.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Sample line:** One sentence saying how many people took part, how you found them, who is missing, and whether any of it was a rehearsal.
- **Recruitment:** How you went about finding people, written down plainly, including the kind of person you never managed to reach.
- **Raw table:** The results exactly as you wrote them down, before any reading or tidying. The next lesson works from this, so it has to survive untouched.

Stuck starting? Write the raw table out fully before you interpret anything. The next lesson does the interpreting.

Is it enough? The count of people appears at the top of the results, not at the bottom.

</details>

**Save and continue.** Saved for you: Your tasks, results table and confidence notes save as you type, on this device first and then online. Kept outside the app: The sheets and cards stay on paper. Photograph the tree and the table if you like and write the file name here; naming a file does not upload it. What your creator sees: Your creator reads the six tasks and the first-choice column. Those two together show whether the test could have told you anything. Your next action: Open Your work and choose Ready for review. The next lesson reads these results and changes exactly one thing.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Underline every word in a task that also appears in your structure. Rewrite the task using the situation your participants described in m05 instead.

</details>

<details>
<summary>Hint 2</summary>

Write the answer key now and mark honestly which answers you decided after the fact; those tasks are unreliable and should be re-run.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Tree test the structure by hand.
Task: Run a paper tree test of your revised structure with at least three participants and six tasks, recording for every task the first choice, the full path, whether they backtracked and where they said they would stop.
Challenge one thing at a time, and start with the mistake this lesson is about: “They found it, so the structure works.” Not if they found it after backing out of two wrong branches, and not if they hesitated at the top and said afterwards that they were not sure they were in the right place. In a real product the person who backtracks twice often leaves instead, and the tree test's value is that it shows you the backtracking a success count would hide.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the rewritten tasks and ask whether tasks state a situation and avoid the tested label. Look at the answer key with any re-run tasks and ask whether correct answers were defined before running. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: The same paper tree with one sheet rewritten. Keep the original sheets: a before-and-after pair of paper trees with results attached is the artefact, and it costs nothing to preserve.

- Starting material: The tree-test results table and the structure you tested. Do not change anything before this lesson: a diagnosis written after several simultaneous edits explains nothing.
- Create HaruCourse/Practice/m06-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read the interpretation guidance

- Read the assigned article on interpreting results. Note the four measures it discusses and write, for your own data, which you can honestly report at your sample size.

**You should end up with:** Which measures your own results can honestly carry at this number of people, written before you interpret anything.

Worksheet fields for this step:

- The measures the article discusses, and which of them your own numbers can carry — Write the ones you can report as counts of people, and the ones you would have to invent a rate for.

<details>
<summary>Help with this step</summary>

- **First click:** The first branch a person chose on the top sheet, before any recovery.
- **Success rate:** The share of tasks people completed. It is useful with many participants and misleading with three, so report counts of people instead.

Stuck starting? List the four measures the article names, then put a yes or a no beside each for your own data.

Is it enough? Anything you marked yes can be written as a count of people rather than a rate.

</details>

#### 2. Split by first click

**See it first.** Made-up example. Reading a bad-looking tree test as a broken structure, and finding that the top of it was fine.

- **What the table looked like:** Four of six tasks failed with three people. My first thought was that the structure was wrong and I should start again.
- **What I nearly did:** I sketched a whole new top level over lunch, with different groups and different names, and felt much better for an hour.
- **What the first choices said:** In four of the six tasks, all three people chose correctly on the top sheet. They failed one level down.
- **Where the failures actually sat:** Three of those four died at the same second-level label, “Booking admin”. Nobody could say what was inside it.
- **What I did instead:** Left the top alone and rewrote one label. The structure I nearly threw away had been doing its job.

**The wrong turn:** The wrong turn is reading a count of failures as a verdict on the whole structure. Failures concentrate, and a redesign discards the parts that were working.

**What it costs:** Keeping a structure you have just watched fail feels like defending it. It costs you the satisfaction of a fresh start, and it keeps the risks you had already tested away.

**Still unknown:** Still unknown: whether the top level survives tasks you did not write. Six tasks with three people cannot cover a structure.

- Sort your failed tasks into those where level one was correct and those where it scattered. Write what each group implies about where the fault lies.

**You should end up with:** Your failed tasks sorted into the ones where the top level was chosen correctly and the ones where the first choices scattered.

Worksheet fields for this step:

- Which failed tasks had a correct first choice, and which scattered across branches
- What each of those two groups tells you about where the fault cannot be — Finish the sentence “because they chose correctly at the top, the fault is not …”.

<details>
<summary>Help with this step</summary>

- **Top level:** The first sheet, holding the small set of names a person chooses between before anything else is visible to them.
- **Scatter:** First choices spread across several branches instead of gathering on one. It says the top-level names are not telling people what sits inside them.
- **Failed task:** A task where the person never reached any of the answers you decided to accept before the session started.

Stuck starting? Sort the results table by the first-choice column and read the failed rows in two piles.

Is it enough? Each pile has a written sentence saying where the fault cannot be.

</details>

#### 3. Diagnose each failure

- For each failed task write the cause: wrong label, wrong grouping or missing item. Support each diagnosis with the paths and the quotations from the session.

**You should end up with:** A named cause for each failure — a wrong label, a wrong grouping or a missing item — with the path or the quotation that supports it.

**Try it with help.** Six failed-task lines from somebody else’s tree test, all made up for practice. For each one, name the cause you would write in your own table.

- All three chose “Change or cancel” on the top sheet, then stopped at “Booking admin” and said they could not tell what was inside it.
  - **wrong label** — The right container, reached correctly, wearing a name that describes a department rather than its contents. Rename it in their words.
  - wrong grouping — The grouping held. Every one of them chose the branch you intended, so the item is sitting where they expect it.
  - missing item — The item is there. They reached the container that holds it and were stopped by what it is called.
- Two people hunted through three branches for the refund rule and gave up. Nothing anywhere in the structure is about refunds.
  - wrong label — Renaming cannot help when there is nothing behind the name. The search failed because the answer has never been written.
  - wrong grouping — Moving an item needs an item to move. This one does not exist yet.
  - **missing item** — The commonest result and the most ignored one. It is a content gap, and no structural change will clear it.
- All three looked for “What to bring” under “Choose a class” first. It lives under “Get ready”, and two of them never found it.
  - wrong label — The name says exactly what the thing is, and nobody was confused by it. They were looking somewhere else entirely.
  - **wrong grouping** — They want it while choosing, and it sits where you filed it for later. Move it, or list it in both places and accept the maintenance.
  - missing item — It exists, and one of them did reach it. The trouble is where it sits.
- First choices scattered across three branches on the top sheet. One person said “My account” could mean anything, and another said the same of “Services”.
  - **wrong label** — Scattering at the top, with people saying out loud that the names tell them nothing, is a top level naming itself rather than its contents.
  - wrong grouping — A grouping fault usually shows as people agreeing on one wrong branch. Scattering with spoken doubt about the names points at the names.
  - missing item — They had not decided anything was absent. They could not read the choices in front of them.
- Two people looked for directions to the venue under “Get help”. It sits under “About us”, and both said afterwards they would have rung the number instead.
  - wrong label — “About us” is understood perfectly well, which is exactly why nobody expected practical directions inside it.
  - **wrong grouping** — The item is filed where the organisation thinks about itself, not where a person arrives with that need. Move it, or list it in both.
  - missing item — The directions exist. They are in a branch nobody visits carrying that question.
- One person asked whether the deposit comes back if the provider cancels the class. No page, sentence or answer anywhere in the material addresses it.
  - wrong label — There is no name to change. Nothing in the material speaks to the question at all.
  - wrong grouping — Nothing can be moved to a better place, because nothing has been written to move.
  - **missing item** — A question with no answer in the product. Record it as a content gap and hand it to whoever writes the material.

**Then:** Now name the cause for each of your own failed tasks, and write the path or the quotation that supports it beside the name.

**What to watch for:** Look at what separated the hardest lines. When people reached the right branch and stopped, the name was at fault. When they went confidently to a branch that does not hold the item, the grouping was. When nothing in the material answers the question, neither move helps, and the fault is that the answer does not exist.

Worksheet fields for this step, revealed a few at a time in the app:

- Failure 1 · the task, the cause you name, and the evidence for it — The cause is one of three: a wrong label, a wrong grouping, or a missing item.
- Failure 2 · the task, the cause you name, and the evidence for it
- Failure 3 · the task, the cause you name, and the evidence for it
- Failure 4 · the task, the cause you name, and the evidence for it

<details>
<summary>Help with this step</summary>

- **Wrong label:** The item sits in the group people expect, and the name of that group does not tell them what is inside it. The repair is a rename, in their words.
- **Wrong grouping:** The item sits somewhere people do not go looking for it. The repair is a move, or listing it in two places and keeping both up to date.
- **Missing item:** Nothing anywhere in the material answers the question the person arrived with. Renaming and moving both fail, because there is nothing there to find.

Stuck starting? Take the failure you are surest about and write the path first, then the cause it points to.

Is it enough? Any cause you cannot support with a path or a quotation is written down as a guess.

</details>

#### 4. Change one thing and re-test

**See it first.** Made-up example. Re-testing one renamed label with the same two people, and learning nothing whatever about the label.

- **The change:** One sheet, one label. “Booking admin” became “Change or cancel a booking”, and nothing else on the tree moved.
- **Who I asked:** The same two people from the first round. They had agreed once already, they lived nearby, and the whole thing took ten minutes.
- **What happened:** Both went straight to it on the first task. I wrote “the change worked, two of two” and felt rather pleased with the afternoon.
- **What I had forgotten:** I had shown them both where the thing lived at the end of the first session, a week earlier. They were not reading the new label. They were remembering the answer I gave them.
- **What went in the record instead:** “Change made. Re-tested with two people who had already seen the structure, so this cannot be read as evidence about the label.” Then finding two fresh people went on the list for the following week.

**The wrong turn:** The wrong turn is re-testing with the people you already have. They are willing, they are quick, and they are the only people in the world who cannot tell you whether a new label reads clearly.

**What it costs:** Fresh people are the thing you have least of, and holding to this often means the change goes into the record as untested. An untested change you have labelled honestly is worth more than a tested-looking one you cannot trust.

**Still unknown:** Still unknown, even with two fresh people: whether the new label works for somebody who has never thought about booking a class at all. Two is two.

- Make exactly one change aimed at your clearest diagnosis. Re-test the affected tasks with at least two people who have not seen the structure. Record first clicks and confidence again.

**You should end up with:** Exactly one change, and a re-test of only the tasks it was aimed at.

Worksheet fields for this step:

- The single change you made, and the diagnosis it is aimed at — One sheet, one label, one move. If you cannot describe it in a sentence it is more than one change.
- How the re-test actually happened (Two or more people who had not seen the structure, with consent / One person only, with consent, and the gap recorded / Nobody was available: the change is recorded as untested and never described as an improvement)
- First choices, paths and confidence from the re-test, for the affected tasks only

<details>
<summary>Help with this step</summary>

- **One change:** A single alteration you can describe in one sentence: one label, or one move. Two at once and the re-test cannot tell you which of them did anything.
- **Re-test:** Running only the tasks the change was aimed at, with people who have not seen the structure before.
- **Untested:** The honest word for a change nobody has tried yet. Use it rather than calling the change an improvement.

Stuck starting? Choose the diagnosis you are surest about and change that one thing on one sheet.

Is it enough? The before and after structures differ in one respect. If nobody was available to re-test, choose the untested option and say so wherever the change appears; running it on yourself is not a re-test, because you wrote the new label.

</details>

#### 5. Report honestly and pause

- Write what the change did, including if it did not help or made things worse. List the remaining failures and their diagnoses for the next round. Save both versions of the structure.

**You should end up with:** What the change did, what is still failing, and the repair the Check questions asked for.

Worksheet fields for this step:

- What the change did, including if it did not help or made things worse — Write the counts into the sentence. Two of two, or one of two, says more than better or worse.
- Every failure you have not addressed, with the diagnosis it still carries
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Outcome:** One sentence saying what the change did, with the counts of people inside it. Two of two says more than better.
- **Remaining failures:** The failures you did not address, each still carrying the cause you named for it. They are the start of the next round rather than an admission.

Stuck starting? Write the outcome sentence with the counts inside it before you write anything else.

Is it enough? Every failure you did not address is still on the list with its diagnosis attached.

</details>

**Save and continue.** Saved for you: Your split, your diagnoses and your outcome save as you type, on this device first and then online. Kept outside the app: Keep both versions of the paper tree, the original sheets and the rewritten one. Note where they live; nothing is uploaded. What your creator sees: Your creator reads the diagnosis for each failure and the outcome sentence. An outcome that says the change did not help is a stronger entry than one that says it did. Your next action: Open Your work and choose Ready for review. The next lesson matches the failures you still cannot explain to the test that would explain them.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Return to the results table and sort by first choice. Write one sentence per group on where the fault cannot be.

</details>

<details>
<summary>Hint 2</summary>

For each failure, quote the path and anything the participant said. If neither supports your cause, the diagnosis is a guess and should be marked as one.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Interpret the tree test and change one thing.
Task: Turn your tree-test results into a diagnosis per failed task — a wrong label, a wrong grouping or a missing item — then make one bounded change, re-test it with at least two people, and report what happened including if it did not help.
Challenge one thing at a time, and start with the mistake this lesson is about: “The structure scored badly, so we should redesign it.” A poor result usually concentrates in two or three labels, and replacing the whole structure discards the parts that worked while re-introducing risks you had already tested away. Diagnose first; wholesale redesign is a decision you should have to argue for, not the default response to a bad number.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the split with its implications and ask whether failures are split by first click before diagnosis. Look at the diagnoses with evidence and ask whether each failure has a named cause with supporting evidence. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written planning only. A click test needs nothing more than a printed or drawn screen and a pen mark where the person would tap, which is the account-free version of every click-testing service, and works fine with three people.

- Starting material: Everything you have run so far and the failures you have not yet explained. This lesson is about the failures your card sort and tree test could not diagnose.
- Create HaruCourse/Practice/m06-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read the four methods

- Read the assigned article. For each of the four tests, write in one sentence what it diagnoses and what it cannot see.

**You should end up with:** One sentence per test on what it identifies, and one on what it is blind to, in your own words.

Worksheet fields for this step:

- For each of the four tests: one sentence on what it identifies, and one on what it cannot see — If two of your blind-spot sentences say the same thing, the tests are not yet separate in your head.
- The cheaper move before any test: which of your failures might just be a missing or badly written answer

<details>
<summary>Help with this step</summary>

- **Tree test:** Asks whether the branches themselves send people the right way, with the screen taken away.
- **Closed card sort:** Hands people your categories and asks where each item goes. It tests whether your names are understood.
- **Click test:** Shows a real layout, drawn or printed, and asks where the person would tap. It shows which navigation people use and which they walk past.
- **Usability test:** Watches somebody do the whole task. It shows the most, and tells you the least per person about which single thing is at fault.

Stuck starting? For each test, finish the sentence “this cannot tell me …”.

Is it enough? No two blind-spot sentences are the same.

</details>

#### 2. List your unexplained failures

**See it first.** Made-up example. Writing the list of unexplained failures for a class-booking site, and quietly leaving off the three I thought I had already explained.

- **What I had:** Six moments across my notes where somebody did not find something. Three of them went onto the list. Three I left off, because I already had a reason for each one.
- **The reasons I had:** One person was in a hurry. One was holding a phone in the other hand. One of them was my own fault, because I had worded the task badly. Each of those felt like an explanation.
- **What made me look again:** Writing the source beside the three I had kept, I noticed the three I had dropped had no source beside their reasons. The reasons were mine. Nobody had said any of them.
- **What went back on the list:** Two of the three. The person in a hurry took the same wrong branch as somebody unhurried a week earlier, so being in a hurry did not choose the branch.
- **What stayed off, and how it reads now:** The badly worded task stayed off, with a line saying the task itself was at fault and has to be rewritten before that moment means anything.

**The wrong turn:** The wrong turn is treating a reason you invented for a failure as an explanation of it. It is tempting because a reason closes that line, and a list of three feels finished a great deal sooner than a list of six.

**What it costs:** Keeping the ones you thought you had explained gives you more symptoms than your plan can possibly cover, so you will have to leave some untested and say plainly which. You buy a shorter list of tests with a longer list of symptoms.

**Still unknown:** Still unknown: whether the reasons you kept hold up either. A source line tells you where a symptom came from. It does not tell you that your reading of it was the only reading available.

- List every finding from your sort and tree test that you could not diagnose, plus anything from your m05 research about people not finding things.

**You should end up with:** Every finding from your sort, your tree test and your research that you could not explain, with where each one came from.

Worksheet fields for this step:

- Every finding from your sort, your tree test and your m05 research that you could not diagnose
- Where each symptom came from, and which came from a rehearsal rather than from a person — A symptom you noticed while walking the product yourself is a suspicion. Mark it, and it stays useful.

<details>
<summary>Help with this step</summary>

- **Symptom:** What you saw somebody do, or fail to do, written down with no reason attached to it.
- **Source:** Where a symptom came from: which session, which test, or your own walk through the product.
- **Rehearsal:** A walk through your own product, done by you alone. It produces suspicions worth testing, and never findings.

Stuck starting? Read your session notes for every moment somebody could not find something, including the ones you assumed you understood.

Is it enough? Every symptom has a source beside it. If your only source is a walkthrough you did alone, keep the symptoms and mark each one as your own suspicion; the plan is still worth writing, and a suspicion is never written up as a finding.

</details>

#### 3. Match symptom to test

**See it first.** Made-up example. Choosing a usability test for every symptom, and learning nothing about any of them.

- **What I planned:** One symptom: people were not reaching the page that lets them cancel. I booked three sessions on the real screens.
- **Why it felt right:** A usability test shows the whole task, so it looked like the test that would show me everything.
- **What I got:** Three people struggled in three different ways. One never opened the menu, one opened it and took the wrong branch, one found the branch and could not read the label.
- **Why that was no use:** Every variable was present at once, so each session pointed at a different cause and nothing separated them.
- **What I should have asked first:** Which cause do I suspect? If it is the branch, a tree test. If it is the name, a closed sort with two categories. If people never touch the menu, a click test on the layout.

**The wrong turn:** The wrong turn is picking the test that sees the most. It is also the test that tells you the least per person about which single thing is at fault.

**What it costs:** A narrow test asks you to commit to a suspected cause before running, and you can be wrong. It buys you an answer about one thing with three people and twenty minutes each.

**Still unknown:** Still unknown: whether the cause you suspect is the only one. A narrow test that comes back clean sends you to the next suspect rather than to a conclusion.

- Build a table of at least four symptoms, each with the likely cause, the test that would identify it, roughly how many people it needs and what it would cost you in time.

**You should end up with:** At least four symptoms, each with the cause you suspect, the test that would identify it, roughly how many people, and what it would cost you.

Worksheet fields for this step, revealed a few at a time in the app:

- Symptom 1 · what happens, the cause you suspect, the test, roughly how many people, and what it costs you — If you can think of two possible causes, write both, then say which one you would test first and why.
- Symptom 2 · what happens, the cause you suspect, the test, roughly how many people, and what it costs you
- Symptom 3 · what happens, the cause you suspect, the test, roughly how many people, and what it costs you
- Symptom 4 · what happens, the cause you suspect, the test, roughly how many people, and what it costs you

<details>
<summary>Help with this step</summary>

- **Suspected cause:** The single thing you think is at fault, named before you pick a test. The test follows the cause, not the other way round.
- **Variable:** Anything present that could be causing a failure. A test that leaves several of them in play cannot tell you which one acted.
- **Diagnostic plan:** The table you are building here: symptom, suspected cause, test, roughly how many people, and what it costs you.

Stuck starting? Take the symptom you understand least and write two possible causes for it before you write any test.

Is it enough? Every row names a cause, and the test named beside it is the one that would separate that cause from the others.

</details>

#### 4. Separate findability from discoverability

- Mark which of your symptoms are people failing to find something they were looking for, and which are people never knowing it existed. Write why no findability test can address the second.

**You should end up with:** Each symptom marked as somebody failing to find a thing, or somebody never knowing it existed, with the reason written for the second kind.

**Try it with help.** A supplied made-up symptom. A fee waiver exists, sits in the menu under a plain name, and in five sessions nobody visited it. When told it existed, every one of them found it in a single move.

Which test would identify the cause here?

- **None of the four, because they all begin by telling the person what to look for, and this is a person who never knew to look.** — Every findability test names the target before it starts. The failure is that nobody wanted the thing yet, so the fix sits in how it is raised during booking rather than in the structure.
- A tree test, because it takes the layout away and shows whether the branches work. — It would come back clean, because it hands the person the goal. Everyone found it in one move once told, which is that result already.
- A click test, because people may not be seeing the menu. — Worth asking when people ignore the menu on tasks they are actually trying to do. Here they were not trying, so the component was never the obstacle.
- A closed card sort, because the name may not be understood. — A sort would check whether the name reads correctly, and the name worked the moment anyone was pointed at it. The gap sits earlier than the name.

**Then:** Mark each of your own symptoms as looking and not finding, or never knowing, and write the reason for every one you mark as never knowing.

Worksheet fields for this step:

- Each symptom marked: a person looking for a thing and not reaching it, or a person who never knew it existed
- For every symptom you marked as never knowing: why no findability test can reach it, and where the fix would sit instead

<details>
<summary>Help with this step</summary>

- **Findability:** A person is looking for a specific thing and does not reach it.
- **Discoverability:** A person never learns the thing exists, so they never go looking for it.

Stuck starting? For each symptom ask whether the person knew the thing existed before they started.

Is it enough? Every symptom marked as never knowing says where the fix would sit instead.

</details>

#### 5. Choose the next test and pause

- Choose one symptom and the test you would run next. Write what result would make you abandon that test and run a different one instead. Save the plan.

**You should end up with:** The test you would run next, the result that would send you to a different one, and the repair the Check questions asked for.

Worksheet fields for this step:

- The symptom you chose, the test you would run, and why that one rather than the others — Write it as “I will run … because I suspect …”. A test you cannot finish that sentence for is not chosen yet.
- The result that would make you abandon that test and run a different one
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Next test sentence:** The one line naming what you would run, why, and what result would send you somewhere else instead.
- **Repair:** The change the Check questions ask you to make to your own work. Writing down what you changed is part of the step.

Stuck starting? Write “I will run … because I suspect …, and if I see … I will run … instead”.

Is it enough? The sentence names a suspected cause and a result that would change your mind.

</details>

**Save and continue.** Saved for you: Your four tests, your symptom table and your next-test sentence save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. Keep your tree-test results and your sort analysis to hand, since every symptom should trace back to one of them. What your creator sees: Your creator reads the symptom table and the next-test sentence. Being able to say why not the other three tests is the part that is hard to fake. Your next action: Open Your work and choose Ready for review. The next lesson takes one page inside this structure and makes its shape perceivable.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For each test, complete the sentence “this cannot tell me …”. If two of your answers are the same, you have not yet distinguished the tests.

</details>

<details>
<summary>Hint 2</summary>

Go back through your session notes for every moment a participant could not find something and add each to the list, including the ones you assumed you understood.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Choose the right test for the symptom.
Task: Write a diagnostic plan matching four symptoms of people not finding things to the test that would identify each cause, and state for one symptom in your own product which test you would run next and what would make you run a different one.
Challenge one thing at a time, and start with the mistake this lesson is about: “Usability testing will find everything, so run that.” It will show you a lot and tell you least per participant about which specific thing is at fault, because every variable is present at once. When you already suspect the structure or the labels, the narrow test isolates the cause with fewer people and less of their time; keep the usability test for when you need to see the whole task.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the four test descriptions with blind spots and ask whether each test is matched to what it can and cannot diagnose. Look at the symptom list with sources and ask whether symptoms come from your own unexplained findings. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Draw the page with its regions marked on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: An indented text outline and a sketch of the page with regions drawn on it. If your prototype is a local HTML file, the checks run in any browser with no extension; if it is on paper, run the heading and outline checks by reading and record the keyboard checks as untested rather than assumed.

- Starting material: Your revised structure and one page that sits inside it — ideally the page your tree test showed people reaching. Structure is not only between pages; the same failures happen inside one.
- Create HaruCourse/Practice/m06-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

<details>
<summary>Optional video paired with step 1</summary>

[Web Accessibility Perspectives: Clear Layout and Design](https://www.w3.org/WAI/perspective-videos/layout/) — W3C Web Accessibility Initiative, 54 s, English, English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page. Whole video, 54 seconds. Watch from 0:10 to 0:48.

What to notice:

- 0:10–0:15 — Good design involves good layout, and that means a better experience.
- 0:15–0:21 — It names the parts: clear headings, navigation bars and consistent styling.
- 0:27–0:34 — Complex layouts make finding information difficult or impossible for people with visual disabilities.
- 0:42–0:48 — Bad layout also affects anyone who is not confident around computers.

**Then:** Straight after watching, write your page’s headings as a plain indented list with nothing else on the page. The video says headings and navigation carry the structure; this is you writing that structure down.

**Without the video:** No video needed: the assigned structure tutorial covers the same ground in text. Write the heading outline first, then read it back with everything else covered.

Everyday clutter and generic pages, not your outline. It argues that headings and navigation carry structure; writing that structure down is your step. Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use. Checked 7 September 2026.

</details>

#### 1. Read the structure tutorial

- Read the assigned page-structure tutorial on headings and regions. Write the heading rule in your own words, including what skipping a level does.

**You should end up with:** The heading rule in your own words, and the one page you are going to work on.

Worksheet fields for this step:

- The heading rule, written by you, including what skipping a level does — Headings are an outline, not a size choice. Say what goes wrong when a level is skipped to make something look smaller.
- The page you are working on, and where it sits in your structure

<details>
<summary>Help with this step</summary>

- **Heading outline:** The page title and its section headings, in order, read on their own. Some people use it as their whole way of moving around a page.
- **Region:** A named large area of a page: the banner, the navigation, the main content, a side area, the footer. Naming them lets someone jump straight to the content.

Stuck starting? Pick the page your tree test showed people actually reaching. A page nobody visits teaches you less.

Is it enough? Your rule says what a level means, not only that levels should be in order.

</details>

#### 2. Write the heading outline

**See it first.** Made-up example. Writing the heading outline for a class page, and finding that three of the five headings said nothing.

- **What I started with:** The page already had five headings: “Saturday pottery”, “About”, “Details”, “More info”, “Book”. I copied them into an outline and thought I was finished in four minutes.
- **What I nearly did next:** I wanted “Details” to look smaller, so I dropped it two levels down. Nothing sat in between. I just liked the size.
- **Why that was wrong:** A level says what is inside what. Skipping one tells anybody reading the outline that a section is missing, and it fixed nothing: “Details” still did not say what was in it.
- **The test that caught it:** I read the five headings aloud with the page covered. “About”, “Details” and “More info” could have introduced anything on any page of the site.
- **What replaced them:** Straight from the labelling table: “What you’ll do”, “What to bring”, “When and where”, “What it costs”, “Book a place”. Same page, five headings, and the outline is now a summary of it.

**The wrong turn:** The wrong turn is choosing a heading level for how big it looks. The level is a claim about what sits inside what, and spending it on size quietly deletes a section from the outline.

**What it costs:** Descriptive headings are longer and the page looks less tidy. You give up a neat column of short words to gain a page someone can skim without reading it.

**Still unknown:** Still unknown: whether these headings work for someone using a screen reader. Reading them aloud yourself is a different test, and no session has been run.

- Write your chosen page as an outline: page title, then every section heading in order, correctly nested. Use the labels from your labelling table rather than inventing new ones.

**You should end up with:** One page title, then every section heading in order, each one inside the heading above it.

Worksheet fields for this step:

- The page title, the single heading at the top
- Every section heading in order, indented to show what sits inside what — A numbered, indented list is enough. Two spaces of indent shows that a heading belongs inside the one above it.
- Which headings came from your labelling table, and which you invented today — Anything invented today has no evidence behind it yet. Mark it as a guess, the way you marked labels in lesson 2.

<details>
<summary>Help with this step</summary>

- **Page title:** The single heading at the top saying what this page is. Everything else on the page sits inside it.
- **Level:** How deep a heading sits in the outline. A level is a claim that this section is inside the one above it, never a choice about size.
- **Skipping a level:** Jumping straight to a deeper level with nothing in between. It tells anybody reading the outline that a section is missing.

Stuck starting? Write the page title first, then list the sections in the order they appear on the page, before worrying about levels.

Is it enough? No level is skipped, and every heading came from your labelling table or is marked as invented today.

</details>

#### 3. Mark the regions and the navigation kinds

**See it first.** Made-up example. Marking the regions on a class page sketch, and calling a whole strip navigation because it ran along the top.

- **What I drew:** Five boxes on the paper sketch: banner, navigation, main content, a side area, footer. It took about four minutes and looked tidy.
- **What I put in the navigation box:** Everything in the top strip. The menu, the sign-in link, the language chooser, and the “Book a place” button that had been sitting up there since the first sketch.
- **Why that felt right:** They are all in one row, they are all links, and they all look like navigation to me. The box followed the shape of the design rather than what anything did.
- **Where it fell over:** I imagined somebody asking to jump straight to the main content. Booking is the thing this page is for, and I had put it outside the main content. Sign in and language are not about where you are in the structure at all.
- **What the sketch says now:** Sign in and language sit in the banner as utility. The navigation box holds the menu and nothing else. “Book a place” has moved inside the main content, because it is the page’s own action.

**The wrong turn:** The wrong turn is marking regions by where things sit on the screen. One strip along the top looks like a single thing, and it usually holds three different kinds that somebody moving by region needs kept apart.

**What it costs:** Splitting that strip means your sketch no longer matches the neat row you designed, and anyone reading it will ask why three boxes cover something that looks like one. What you gain is a jump to the main content that lands on the thing the page exists to do.

**Still unknown:** Still unknown: whether somebody who moves by region would draw the line between banner and navigation where you drew it. That is a question for a person who works that way, and no such session has happened.

- Identify the banner, navigation, main content, any complementary area and the footer. Then label each navigation element global, local, contextual or utility, and note anything sitting in the wrong one.

**You should end up with:** The five regions named, and every navigation element sorted into one of the four kinds.

Worksheet fields for this step:

- The regions of the page named, and what sits in each one — Banner, main navigation, main content, a side area if there is one, footer. Draw them on your sketch and list them here.
- Every navigation element, with global, local, contextual or utility written beside it
- Anything sitting in the wrong region or under the wrong kind

<details>
<summary>Help with this step</summary>

- **Global navigation:** The menu that says what the whole product contains. It is the same on every page.
- **Local navigation:** The menu for the section you are in. It changes as you move between sections.
- **Contextual link:** A link inside the text, pointing at something related to what the person is reading right now.
- **Utility element:** Sign in, help, language. Always available, and not part of the content hierarchy.

Stuck starting? Draw a box around each region on your sketch and write its name in the margin. Then list every link that is not part of the main content.

Is it enough? Every link outside the main content has one of the four kinds beside it. A link you cannot classify usually belongs somewhere else.

</details>

#### 4. Read it aloud and run the checks

- Read only the headings aloud, in order. Rewrite anything that does not describe its section. Then run the assigned preliminary checks that apply — page title, headings, keyboard access — on your prototype or on the live page.

**You should end up with:** What the headings alone said out loud, what you rewrote, and what the preliminary checks showed.

**Try it with help.** A supplied heading outline from another made-up class page, read aloud with nothing else visible: “Evening wheel throwing”, “Overview”, “What to bring”, “Good to know”, “Book a place”.

Hearing only that, which judgement is the honest one?

- **Two of them, “Overview” and “Good to know”, could sit on any page in the site, so the outline is not yet a summary of this one.** — A heading earns its place by being unmovable. Those two would fit a booking page, a help page or an about page and nobody would notice.
- The outline is sound, because five headings in order is a sensible shape for a page. — Shape and order are only half of it. An outline can be perfectly nested and still tell a listener nothing about what is on the page.
- It fails because “What to bring” is too long to be a heading. — Length is the cheapest thing a heading has to spend. That is the one heading here a listener could act on.
- You cannot judge it without seeing the page design. — Hiding the design is the test. If the outline only makes sense beside the layout, then people who never see the layout have no structure at all.

**Then:** Read your own headings aloud with the page covered, and mark every one that could move to another page unnoticed.

Worksheet fields for this step:

- What your headings alone said when you read them out, and what you rewrote afterwards — Read only the headings, in order, with the page covered. Write what a listener would think the page was about.
- The preliminary checks you ran, and what each one showed — The page title in the browser tab, the heading order, and reaching everything with the Tab key. Write what each one showed, not a verdict.

<details>
<summary>Help with this step</summary>

- **Preliminary check:** A quick check you can run on your own before any session: the page title in the browser tab, the heading order, and reaching everything with the Tab key.
- **Tab order:** The order things are reached when somebody presses the Tab key rather than pointing at them. If it jumps about, the page is hard to use without a mouse.
- **Verdict:** A judgement written instead of an observation. Write what each check showed, because a verdict hides the thing you actually saw.

Stuck starting? Read the headings to one other person and ask them what the page is about before you tell them.

Is it enough? Every heading you could move elsewhere unnoticed has been rewritten, and each check has a written result.

</details>

#### 5. Record what you could not verify, then pause

- Write what the checks did not cover and what you did not test, including that no assistive-technology session with a disabled participant took place. Save the outline, the region map and the check results.

**You should end up with:** What you could not check, the sentence about the missing session, where the artefacts live, and the repair the Check questions asked for.

Worksheet fields for this step:

- Which checks you could not run, and why — Mark each check run, not applicable, or not run. A check you skipped is not a check that passed.
- Your sentence saying no screen-reader session and no disabled participant took part
- Where the outline, the region sketch and the check results live — File names, or “paper, in my folder”. Nothing is uploaded.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Screen reader:** Software that reads a page aloud and lets somebody move through it by heading or by region. It is how a heading outline gets used in practice.
- **Artefact:** The thing this step leaves behind: here the outline, the region sketch and the check results. Where each one lives matters more than how it looks.
- **Not run:** A check you skipped, recorded plainly as skipped. Recorded as though it had happened, it makes everything else in the note untrustworthy.

Stuck starting? List the preliminary checks and put run, not applicable or not run beside each. Then write the one sentence about who did not take part.

Is it enough? A reader can tell exactly which checks happened, and nothing is recorded as passed that was never run.

</details>

**Save and continue.** Saved for you: The outline, the region list and the check results save as you type, on this device first and then online. Kept outside the app: The region sketch stays on paper or in your own folder. Write its file name in step 5; naming a file does not upload it. What your creator sees: Your creator reads the outline and the read-aloud note. The limits you recorded matter as much as the checks that came out clean. Your next action: Open Your work and choose Ready for review. The next lesson takes these same labels into search, where people type their own words at you.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write the outline as a numbered list and check each item is genuinely a subsection of the one above. Rewrite every heading you could move to another page without noticing.

</details>

<details>
<summary>Hint 2</summary>

Draw the page and outline each region. Then list every link outside the main content and assign it one of the four kinds; links you cannot classify usually belong somewhere else.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Structure people can perceive: headings, landmarks and navigation.
Task: Express one page of your structure as a heading outline and a set of regions, then check it by reading only the headings aloud and by running the relevant preliminary accessibility checks, recording what you could and could not verify.
Challenge one thing at a time, and start with the mistake this lesson is about: “Accessibility comes later, after the structure is agreed.” The heading outline and the regions are the structure, made perceivable. Deciding them late means retrofitting an outline onto a page whose visual design already assumed something different, which is exactly how pages end up with four level-one headings and a navigation region containing the main content.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the corrected outline and ask whether the heading outline is correctly nested and descriptive. Look at the region map and classification and ask whether regions and navigation kinds are identified. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Searching your own content by hand — with a browser's find-in-page, or by reading — and sketching the empty state on paper. No search platform, analytics tool or index is required; the by-hand pass finds the vocabulary problems that tuning a search engine would only mask.

- Starting material: Your labelling table, your inventory and any m05 evidence of people going straight to search. Search is where your labelling failures surface as typed words.
- Create HaruCourse/Practice/m06-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read on prevention and recovery

- Read the assigned pages on preventing user errors and on the relevant heuristics. Write the difference between stopping a dead end and helping someone out of one.

**You should end up with:** Your own sentence on preventing a dead end against getting somebody out of one, and what your notes say about search.

Worksheet fields for this step:

- The difference between stopping a dead end and helping somebody out of one, in your own words
- What your practice product offers today (A search box on the site / No search box at all / Only the browser’s own find-in-page)
- What your m05 notes show about people going straight to search instead of the menu — If your notes say nothing about it, write that. An absence is a real answer here.

<details>
<summary>Help with this step</summary>

- **Zero results:** The screen a person sees when a search or a filter combination returns nothing. It is a screen you design, not an error you allow to happen.
- **Synonym:** A different word for the same thing. If people say fees and your pages say pricing, either the search knows they are the same or it is broken for those people.

Stuck starting? Write one example of each: something the design stops happening, and something the design helps somebody recover from.

Is it enough? Your two examples are different actions, not the same action described twice.

</details>

#### 2. Build the query list

**See it first.** Made-up example. Building a twenty-query list from interview notes, and tidying every phrase into the words the site already uses.

- **What I had:** Five sets of interview notes and a blank page headed twenty queries. I did not open the notes.
- **What I wrote:** Class fees. Class times. Cancellation policy. Equipment list. Twenty tidy lines in half an hour, and every one of them sounded like a search.
- **What was wrong with them:** Those are my headings. Nobody in the notes had said cancellation policy. Two people had asked whether they could get their money back, and one had asked what happens if she is ill.
- **What the notes gave me instead:** I went back through with a pen and copied phrases exactly as written down. Nine of my twenty tidy lines turned out to have no person behind them at all.
- **What the list looks like now:** The awkward ones, kept as spoken: what do I need to bring, is there parking, can my daughter come with me. Three of those are phrases I would never have written.

**The wrong turn:** The wrong turn is writing the query list from memory instead of from the notes. Your own wording arrives faster, and it is already the wording your pages use, so every query on that list would have found something.

**What it costs:** Copying phrases exactly gives you a messy list: repeats, half-sentences, two people asking the same thing in different words, and no clean way to sort it into three kinds. What it buys is a list that is able to fail, which is the only kind worth running.

**Still unknown:** Still unknown: whether people type the words they say. A phrase somebody spoke aloud in an interview may become three words in a search box, and nobody here has been watched typing.

- Take at least twenty words and phrases your participants actually used, verbatim. Mark which are names of things, which are descriptions and which are questions.

**You should end up with:** At least twenty queries in your participants’ own words, sorted into names, descriptions and questions.

Worksheet fields for this step:

- At least twenty phrases your participants used, word for word, one per line — Copy them exactly, including the vague and awkward ones. Your tidier wording is the thing being tested, not the answer.
- How many are names of things, how many are descriptions, how many are questions

<details>
<summary>Help with this step</summary>

- **Query:** The words a person actually puts into a search box. Yours stay a guess about theirs until you copy them from your notes.
- **Word for word:** Copied exactly as the person said it, awkward wording and all. A tidied phrase is your vocabulary standing in for theirs.
- **Description:** A phrase describing the thing rather than naming it, such as the one with the wheels. People reach for these when they do not know your name for it.

Stuck starting? Go through your interview notes with a pen and copy out every phrase somebody used for something they were looking for.

Is it enough? Twenty lines exist and at least three of them are phrases you would never have written yourself.

</details>

#### 3. Run the queries by hand

**See it first.** Made-up example. Running twenty queries by hand against a class provider’s pages, and blaming the wrong thing for the failures.

- **What I did:** Twenty phrases taken from five interviews, looked for one by one in the content by hand. Eleven would have found the right thing.
- **What I wrote first:** “Nine failures. The search needs synonyms.” One sentence, one fix, and it felt like a finding.
- **Where it fell apart:** Three of the nine were about the cancellation rule, which existed only in a message the owner typed out by hand each time. No list of synonyms reaches a thing nobody has written down.
- **The three questions I ended up asking:** Does the thing exist? If it exists, can anybody reach it? If they can reach it, do the words match? The first no is the cause.
- **What that changed:** Four vocabulary gaps, three unreachable answers, two things that did not exist anywhere. Three separate fixes, and only one of them was about search.

**The wrong turn:** The wrong turn is calling every failed query a search problem. It is the fix you can imagine buying, and it leaves the missing content exactly as missing as it was.

**What it costs:** Placing nine failures one at a time takes an afternoon and gives you three pieces of work instead of one. What it buys is fixes that land on the actual fault.

**Still unknown:** Still unknown: whether twenty phrases from five people cover the words other people would type. It is a starting list, not a vocabulary study.

- For each query, search your content by hand and record whether the right thing would have been found. Classify every failure: vocabulary, unreachable content, or a thing that does not exist.

**You should end up with:** Each query run by hand against your own content, with every failure given one cause.

Worksheet fields for this step:

- Query by query: would the right thing have been found? — Search your own content by hand, with find-in-page or by reading. Write found or not found beside each one.
- Every failed query with its cause: a vocabulary gap, content nobody can reach, or a thing that does not exist
- The failure you found hardest to place, and how you decided

<details>
<summary>Help with this step</summary>

- **Find-in-page:** Your browser’s own search of the page you are looking at, opened with Ctrl and F. It is enough to run queries by hand with no search engine anywhere.
- **Vocabulary gap:** The thing exists and can be reached, and your words for it are not the person’s words.
- **Unreachable content:** The answer exists somewhere, in an email or in somebody’s head, but nowhere a person can get to on their own.
- **Failure class:** The one cause you give a failed query. One cause per failure, so that each fix lands on the actual fault.

Stuck starting? Take the first query and search your content for that exact phrase before you allow yourself to think of a better one.

Is it enough? Every failed query has one cause beside it, and you could say why it is that cause and not the next one.

</details>

#### 4. Design the filters and the empty state

- Define your filter categories from the structure and state what happens when a combination returns nothing. Then design the zero-results screen: the query shown, nearest matches, a non-search route, and a way to reach a person.

**You should end up with:** Filter categories, what an empty combination does, and a zero-results screen that offers a next move.

**Try it with help.** A supplied zero-results screen from another made-up product. It reads: “No results found for wheel throwing beginner. Check your spelling and try again.” Nothing else is on the screen.

What is the most serious thing missing here?

- **Any route that does not need the person to guess a different word — the structure to browse, or a person to ask.** — Everything on that screen sends them back to the box that just failed them. One route that works differently is what turns a dead end into a next move.
- The spelling advice, which blames the person for the failure. — It reads badly and it comes second. Rewording that sentence still leaves them with only one thing to try.
- A count of how many results came back, so they know it really is none. — They can already see it is none. A number changes nothing about what they can do next.
- Nothing serious: the screen names the query, which is the main thing. — Naming the query is genuinely useful, and it is where the screen should start rather than stop. On its own it is a polite dead end.

**Then:** Look at your own zero-results screen and count the routes forward that do not depend on typing another word. If the answer is none, add one.

Worksheet fields for this step:

- Your filter categories, taken from the structure, and the words on each one
- What happens when a combination returns nothing, and how the person sees which choice caused it
- Your zero-results screen: the query shown back, the nearest things you do have, a route that does not need the same words, and a way to reach a person — Sketch it if that is easier, then describe it here in four lines.

<details>
<summary>Help with this step</summary>

- **Filter:** A control that takes things out of a list rather than finding them. It works on categories you already decided in your structure.
- **Empty combination:** Two or more filter choices that between them leave nothing. The person has to see which choice emptied the list and undo only that one.
- **Dead end:** A screen offering nothing to do but repeat the thing that has just failed. It is what a zero-results screen exists to prevent.

Stuck starting? Write the zero-results screen first, while the failures from step 3 are still in front of you.

Is it enough? Your empty screen offers at least two ways forward, and one of them does not involve typing.

</details>

#### 5. Decide the fixes and pause

- For each failure class write the fix: content wording, a missing item, or search behaviour. Note which fixes need no search engine at all. Save the query list, the results and the empty-state design.

**You should end up with:** A fix for each failure class, which ones need no search engine, and the repair the Check questions asked for.

Worksheet fields for this step:

- The fix for each failure class: content wording, a missing item, or search behaviour
- Which of your fixes need no search engine at all
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Content wording:** The words on the page itself. Adding the words people use is a fix that needs no search engine at all.
- **Missing item:** A thing that does not exist anywhere yet. No wording and no search reaches it, so somebody has to write it from nothing.
- **Search behaviour:** What a search does with a query: near spellings, word endings, and words you have told it mean the same. It is the only fix here that needs an engine.

Stuck starting? Take the vocabulary gaps first; they are usually fixed by adding the words people use to the page itself.

Is it enough? Each of your three failure classes has its own fix, and the fixes are different from each other.

</details>

**Save and continue.** Saved for you: The query list, the hand-run results and the empty-state design save as you type, on this device first and then online. Kept outside the app: If you sketched the zero-results screen on paper, keep it in your own folder and describe it in the zero-results box in step 4. What your creator sees: Your creator reads the query list and the failure classes. Twenty real phrases with outcomes beside them says more than a search specification. Your next action: Open Your work and choose Ready for review. The last lesson of the module puts your labels under pressure and closes everything into a change note.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Return to your interview notes and copy out every phrase a participant used to describe something they were looking for, including the vague ones.

</details>

<details>
<summary>Hint 2</summary>

For each failure ask whether the thing exists, whether it is reachable, and whether the words match. The first no is the cause.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Search, filters and the zero-results path.
Task: Design the search and filtering behaviour for your structure, including what happens with no results, and write the query list that would test it — drawn from words your participants actually used.
Challenge one thing at a time, and start with the mistake this lesson is about: “Search fixes bad structure.” It relocates the problem into a place where you cannot see it. A person searching from failure is already having a poor time, and a search that returns nothing because your content uses a different word is a worse failure than a mislabelled menu — the menu at least showed them what existed.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the verbatim query list and ask whether queries are verbatim from participants and classified. Look at the classified failure list with fixes and ask whether failures are classified by cause, not lumped together. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Padding out label text by hand in a text editor simulates expansion honestly enough for a label set, and any Chromium browser's developer tools throttle the connection and disable the cache with no account. If you cannot render an Indic script in your prototype, write the labels by hand on paper at the same size and record that the digital rendering is untested rather than claiming it passed.

- Starting material: The whole module: inventory, labels, structure, sort and tree-test results, page outline and search work. This lesson closes it into something another person could pick up.
- Create HaruCourse/Practice/m06-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read the internationalization guidance

- Read the assigned page on localization versus internationalization and at least two relevant requirements from the India guidelines. Write which of your labels you expect to break and why.

**You should end up with:** What room to grow means, two India requirements that apply to your labels, and which labels you expect to break.

Worksheet fields for this step:

- What room to grow means for a label set, and two requirements from the India guidelines that apply to yours
- Which of your labels you expect to break, and why

<details>
<summary>Help with this step</summary>

- **Expansion:** Translated text is usually longer than the English it came from, often by about a third. A label set built to the tightest fit has nowhere to put the extra.
- **Matra:** The vowel mark written above or below a Devanagari letter. If the line height was set for Latin text the mark gets clipped, and the word changes.

Stuck starting? Write your predictions before you test anything. Being wrong about them is the useful part.

Is it enough? You have named specific labels, not a general worry that long labels are risky.

</details>

#### 2. Test the labels

**See it first.** Made-up example. Padding a nine-item label set by a third, writing “nothing broke”, and then actually looking.

- **What I did:** I copied the nine labels into a text file and added about a third more characters to each, the way a Hindi version would run longer.
- **What I wrote down:** “Nothing broke.” The menu ran down the side of the page, and every longer label simply wrapped onto a second line.
- **What I had not looked at:** The same labels also sit on buttons and on the tabs across the top. On the button, “Change or cancel a booking” stopped at “Change or cancel a…”.
- **The second thing I missed:** In Devanagari the menu wrapped without trouble, and one heading lost the marks above its letters, because the row height had been set for Latin text and nothing else.
- **What the record says now:** Nine labels, four places each label appears, three named breaks: one label cut off on a button, one clipped heading, one row that no longer fits.

**The wrong turn:** The wrong turn is testing a label in the one place you designed it and calling the whole set safe. A label breaks where it is tightest, which is almost never the menu.

**What it costs:** Checking every place a label appears turns a ten-minute test into an hour. It is the difference between a note saying “fine” and a note somebody else can act on.

**Still unknown:** Still unknown: whether a reader of Hindi finds the wrapped two-line version acceptable. Nobody who reads the script has looked at it.

- Render your label set with roughly a third more characters, and with one Indic-script version. Record every wrap, truncation, clipped character and overflow specifically.

**You should end up with:** Every break under a third more characters and under a second script, named one by one.

Worksheet fields for this step:

- With about a third more characters: every wrap, truncation and overflow, named one by one — Pad each label by hand in a text file. Write where it broke and in which place it appears, not that it broke.
- In an Indic script: clipped marks, missing characters, rows that no longer fit
- How you produced the second-script version (Rendered on screen / Written by hand on paper / Both)

<details>
<summary>Help with this step</summary>

- **Wrap:** Text carrying on to a second line because it ran out of width. Nothing is lost, and the row it sits in becomes taller.
- **Overflow:** Text running past the edge of the space it is in, so part of it cannot be seen or reached at all.
- **Indic script:** A writing system used across India, such as Devanagari for Hindi. Its letters carry marks above and below the line that Latin letters do not.

Stuck starting? List every place each label appears — menu, button, tab, heading — before you pad anything.

Is it enough? Each break names the label, the place it appears, and what happened to it.

</details>

#### 3. Test narrow and slow

- View the labels at about 320 px, then load the page on a throttled slow connection with the cache disabled and record what appears first and whether it makes sense alone.

**You should end up with:** What broke at about 320 px, and what arrived first on a slow connection.

**Try it with help.** Six break lines from somebody else’s label test, all made up for practice. She tested the same menu four ways. For each line, say which test found it: a length problem, a script problem, a width problem or a speed problem.

- With a third more characters added, “Change or cancel a booking” stops at “Change or cancel a…” on the button.
  - **length** — The label broke only once it got longer, and the button stayed the size it always was. More text in a fixed space is the length problem.
  - script — No second script is involved. These are the same Latin letters, simply more of them.
  - width — The screen was never narrowed. The container stayed put and the text grew into it.
  - speed — Nothing here is about what arrives first. The whole label was present and did not fit.
- In Devanagari the marks above two headings are cut off along the top edge of the row.
  - length — The line is not longer, it is taller. Latin letters rarely ask for the space above that these marks need.
  - **script** — That is the script problem exactly. A row height set for Latin text clips the marks, and a clipped mark changes the word.
  - width — The clipping is at the top, not the side. Narrowing the screen would never have found it.
  - speed — Everything had finished loading. What went wrong is the rendering itself.
- At about 320 px the row of tabs runs off the right edge, and the last two cannot be seen or reached.
  - length — The labels are the same length they have always been. It is the space around them that shrank.
  - script — One script, rendering as it should. The row simply has less room than it needs.
  - **width** — The narrow screen caused it, and losing the last two tabs entirely is worse than any wrap.
  - speed — Loading is not involved. It looks the same on any connection.
- On a throttled connection the page shows its headings for several seconds before any picture appears.
  - length — No label changed size or wrapped. What changed is the order in which things arrived.
  - script — The same script throughout, rendering as expected.
  - width — The width was untouched. This is the same page at the same size, arriving slowly.
  - **speed** — That is the speed test, and this one is worth keeping: the headings carried the page on their own while the rest was still coming.
- The Hindi version of the menu runs about a third longer, and every item wraps onto two lines.
  - **length** — The script rendered as it should and the only trouble is the extra characters. Longer text is a length problem, whichever language made it longer.
  - script — Tempting, because a translation is what triggered it. Nothing is clipped or missing though, so the script itself is fine.
  - width — The screen is the width it always was. The text grew rather than the space shrinking.
  - speed — Loading plays no part. The whole menu is there and takes two lines per item.
- Half the second-script labels come out as empty boxes, because the lettering in use has no characters for that script.
  - length — Length has nothing to do with it. Even a one-word label comes out as boxes.
  - **script** — Lettering that does not contain the script is the plainest script problem there is, and it stays invisible until somebody who reads it looks.
  - width — The boxes appear at any width. Space is not the constraint.
  - speed — It loaded. It simply does not have those letters in it.

**Then:** Go back through your own break list and write one of the four words beside every line. Anything you cannot label is usually two problems written as one.

**What to watch for:** Ask what you changed to cause it. More characters is length. A different script is script. Less room is width. A slower connection is speed. If two things changed at once, split the line in two.

Worksheet fields for this step:

- At about 320 px: every label that wrapped, was cut off, or ran off the edge
- On a throttled connection with the cache off: what arrived first, and whether it made sense on its own — If your page lives only on paper, write that this one could not be run. Do not guess the answer.

<details>
<summary>Help with this step</summary>

- **Throttling:** Telling your browser to pretend the connection is slow. It sits in the browser’s own developer tools and needs no account and no code.
- **Cut off:** Text ending in three dots because it did not fit. The end of a label is usually the part that told it apart from its neighbour.

Stuck starting? Do the narrow case first: it needs nothing but a smaller window and takes ten minutes.

Is it enough? Each line in both boxes names a label and what happened to it, and the slow test says plainly whether it was run.

</details>

#### 4. Repair and re-check

**See it first.** Made-up example. Shortening a cut-off label so it fits the button, and losing the word that told it apart from the item beside it.

- **What was broken:** At about 320 px, “Change or cancel a booking” stopped at “Change or cancel a…” on the button. It was the worst break on the list, so I repaired it first.
- **What I changed it to:** “Manage booking”. Eleven characters shorter, it fits at every width I tried, and it still fits with a third more characters added.
- **What I had not noticed:** The item beside it was “Manage your account”. Two neighbours now opened with the same word, and my card sort had shown people separating changing from cancelling.
- **What the shorter label stopped saying:** Somebody who wants their money back cannot tell from “Manage booking” whether cancelling is something this product allows at all. The fit was repaired and the meaning had gone.
- **What I did instead:** Two items: “Change a booking” and “Cancel a booking”. Each is short enough for the button, and each keeps the word doing the telling apart.

**The wrong turn:** The wrong turn is shortening a label to whatever fits. The fit is the visible problem and it is gone in seconds, while the word you dropped was carrying the whole difference between that label and its neighbour.

**What it costs:** Splitting one item into two makes the menu longer, and that is a real cost: more to read, more to scan past, and one more line for a translator to handle. You pay for it with the space you were trying to save.

**Still unknown:** Still unknown: whether two separate items read as two separate actions to somebody meeting them fresh. Your sort showed people separating the ideas. It did not show anybody meeting these particular words on a button.

- Fix what broke, preferring shorter distinct labels over truncation and giving rows room to grow. Re-run the two worst cases to confirm the repair.

**You should end up with:** Repairs that keep the word telling each label apart, with the two worst cases run again.

Worksheet fields for this step:

- What you changed, label by label, and how the new label keeps the word that tells it apart
- Any label that turned out to be two items
- The two worst cases run again, and what happened

<details>
<summary>Help with this step</summary>

- **The word that tells it apart:** The one word separating a label from its neighbour: change against cancel, book against browse. It is the word a shortened label usually loses.
- **Splitting a label:** Turning one item into two when no short version keeps both meanings. It lengthens the menu and it keeps the difference.
- **Re-check:** Running your two worst breaks again after the repair, to see whether the repair held. A repair with no second result written down is a hope.

Stuck starting? Start with whatever was cut off, since that is the break that removes meaning rather than moving it.

Is it enough? No repaired label depends on being cut short, and the two worst cases have a second result written down.

</details>

#### 5. Write the change note and pause

- Write the note: each decision, its evidence, what you rejected, what is still a guess, what remains untested and what you would test next. Save it with the structure.

**You should end up with:** The change note: each decision with its evidence, what you rejected, what is still a guess, and the repair the Check questions asked for.

Worksheet fields for this step:

- Every structural decision from this module, one line each, with the evidence beside it
- What you considered and did not do, and why
- What is still a guess, and what remains untested — Any decision whose evidence line is empty is a guess. So is any test you could not run, including the ones from lesson 10.
- What you would test next, and with whom
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Change note:** A short record of every structural decision with its evidence beside it. It is what lets somebody else pick your structure up without you in the room.
- **Evidence:** The session, sort or test a decision came from, named so a reader can go and look. A decision with an empty evidence line is a guess.
- **Guess:** A decision made without evidence, or a test you could not run. Written down as a guess it stays useful; written as a finding it costs the note its credibility.

Stuck starting? Work backwards through the module, one line per decision, and leave the evidence column empty where there is none.

Is it enough? Every line either names its evidence or sits in the guesses, and somebody else could pick the structure up from this note alone.

</details>

**Save and continue.** Saved for you: The break lists, the repairs and the change note save as you type, on this device first and then online. Kept outside the app: Hand-written script versions and any screenshots stay in your own folder. Describe them in step 2 rather than uploading anything. What your creator sees: Your creator reads the change note first. The guesses and the untested list are what make the rest of it believable. Your next action: Open Your work and choose Ready for review. Module 7 turns this structure into task flows, and it starts from your change note.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Pad each label with extra characters and write it out again in a second script by hand if you cannot render it. Name each breakage as a concrete sentence.

</details>

<details>
<summary>Hint 2</summary>

Run the throttled load in your browser's developer tools and screenshot the first paint. Then set the width to 320 px and list every label that wraps or truncates.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Stress-test the labels, then write the change note.
Task: Test your labels against a longer translation, an Indic script, a narrow screen and a slow connection, repair what breaks, and publish a change note recording every structural decision, its evidence and what remains untested.
Challenge one thing at a time, and start with the mistake this lesson is about: “Translation is a later, non-design problem.” The label set is a design decision that either survives translation or forces the translator to invent something shorter and different, which quietly changes your information architecture in a language you cannot read. Leaving room, avoiding truncation and not depending on English word order are design decisions, made now.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the two renderings and the breakage list and ask whether labels were tested under expansion and an Indic script. Look at both records and ask whether narrow width and a throttled connection were both checked. Anything you cannot show, write down as untested rather than assuming it holds.

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
