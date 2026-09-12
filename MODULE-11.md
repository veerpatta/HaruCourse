# Accessible product design

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Published, worksheet-enabled, teaching-refined, learner-validated and assessed are separate states.

Generated from src/module11.ts; edit that source, then run npm run docs:generate. Level 3 · Module m11 · requirement areas 11. Optional effort 35 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m08. This is guidance for meaningful practice, not a lock. Module approved resource pair: R14 / R10. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: Who is excluded, and by what

Stable ID: m11-l01-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Identify five specific barriers in your own product, each naming the person, the situation and the design decision that causes it.

**Bring forward.** Your m08 screens, m09 interaction specifications and m10 prototype.

Accessibility work fails when it starts from a checklist. It works when it starts from a person who cannot do something and the decision that stopped them.

### Learn

The assigned introduction frames access as the outcome of design choices meeting human variation. That framing is practical rather than political: it points you at the decision you can change. “Blind users cannot use the product” is not actionable; “the only route to remove an item is a hover control, so it does not exist without a pointer” names a decision you made and can unmake.

Barriers are not confined to permanent disability. A person with a broken wrist, a new parent holding a baby, someone on a train with one hand on a rail, or anyone in bright sunlight meets the same designs as a person with a permanent motor or vision impairment, and often meets the same barrier. Designing for the permanent case reliably improves the temporary and situational ones, which is why this work pays back beyond its stated audience.

Specificity is what makes a barrier fixable. Write the person, the situation, the thing they were trying to do and the decision that stopped them. Five specific barriers in your own product are worth more than a general list of disability types, because each one converts directly into a change.

This lesson deliberately precedes the standard. Criteria are useful once you know what you are looking for; started from cold they produce a compliance pass that misses the barrier your particular design creates.

**Common misconception.** “Accessibility means supporting screen readers.” Screen readers are one assistive technology among many, and most barriers in a typical product are met by people who use none: small targets, invisible focus, colour-only status, unreadable contrast, timeouts, and controls that need two hands.

### Worked example

Five barriers from the booking product. A person using a screen reader cannot tell which classes are full, because availability is shown only by a colour dot. A person with limited fine motor control cannot remove a shortlist item, because the only route is a swipe. Anyone in sunlight cannot read the quiet caption at 3.1:1 contrast. A person with a tremor mis-taps the destructive cancel control, which sits 4px from the primary action. And a person using the site in Hindi meets an English-only date format, which is a language barrier the team had never considered. Each names a decision rather than a category.

#### Who is excluded, and by what

Identify five specific barriers in your own product, each naming the person, the situation and the design decision that causes it.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Your own product and your own eyes, plus the situational tests you can do now: outdoors in daylight, one-handed, with the screen at its dimmest. No tools or purchases are required for this lesson.

- Starting material: Your current screens and interaction specifications.
- Create HaruCourse/Practice/m11-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read the introduction

- Read the assigned accessibility introduction.
- Write in your own words what makes something a barrier.

**You should end up with:** One sentence in your own words saying what makes something a barrier, written as a mismatch rather than as a property of a person.

Worksheet fields for this step:

- In your own words: what makes something a barrier? — Write it as something about the meeting between a person and a design, not about the person.

<details>
<summary>Help with this step</summary>

- **Barrier:** Something in a design that stops a particular person doing a particular thing. It lives in the design, which is why it can be removed.
- **Assistive technology:** Software or hardware someone uses to reach a product: a screen reader, magnification, voice control, a switch. Most barriers are met by people using none of it.

Stuck starting? Finish this sentence: “something is a barrier when the design …”.

Is it enough? Your sentence names something the design does, and would still make sense if you never used the word disability.

</details>

#### 2. Walk your product looking for exclusion

**See it first.** Made-up example. Writing the first barrier for a class-booking product, and writing a category instead.

- **What I wrote first:** “Blind users cannot use the booking flow.” I wrote it, felt serious about accessibility, and moved to the next line.
- **Why it was no use on Monday:** I could not act on it. It does not say which screen, which task, or what to change. A fortnight later it would still be sitting there, true and inert.
- **What I did instead:** I took one task — choose between two classes — and asked at each step what a person hears rather than sees. On the results screen, availability is a coloured dot with no text beside it.
- **What I wrote in the end:** “A person using a screen reader, choosing between two classes, cannot tell which one is full, because availability is shown only as a red or green dot.” That names a decision I made in Module 8.
- **What it cost me:** The specific version covers one screen instead of sounding like it covers everything. I need four more, and each one takes a walk through a real task.

**The wrong turn:** The wrong turn is writing the category, because it sounds like more coverage than the specific line does. It reads as serious, it is unarguable, and nothing about the product changes because of it.

**What it costs:** Specific barriers are narrow. Somebody may ask whether five is enough, and five is certainly not all of them. Five you can fix beats twenty you cannot.

**Still unknown:** Still unknown: whether a person using a screen reader would even reach that screen the way I did. Nothing here is testing with disabled people, and this list does not pretend to be.

- Walk one task asking at each step who could not do this.
- Include vision, hearing, motor, cognitive and language differences.
- Write each barrier as a person in a situation, not a category.

**You should end up with:** Five barriers, each naming a person, a situation, the task and the thing that stopped them.

**Try it with help.** Six lines from a made up accessibility review of a tool-library product. For each one, decide what it actually is.

- A person using a screen reader, choosing between two drills, cannot tell which is already out on loan, because that is shown only as a coloured dot.
  - **a named barrier** — It names the person, the moment, the task and the decision — a dot carrying meaning by colour alone. Every part of it can be changed.
  - a category — A category would stop at “screen reader users”. This one carries on into the task and the decision, which is the difference.
  - a repair in disguise — No repair appears here. Several would fit: a text label, a different pattern, a change to the list itself.
- Older users struggle with the interface.
  - a named barrier — Nothing here says which screen, which task, or what stopped anybody. Struggling is a summary, not something you can point at.
  - **a category** — A group of people, a vague verb and no decision. It cannot be fixed because it names nothing to fix.
  - a repair in disguise — There is no repair in it either. It is the sentence people write when they have not walked a task yet.
- We should increase all our text to 16px minimum.
  - a named barrier — It may well be a good change. It does not say who could not read what, so you cannot tell whether it fixes anything.
  - a category — It names no group of people at all. It jumps straight past the problem to an answer.
  - **a repair in disguise** — It arrives as a finding and is actually an answer. If the real barrier is contrast rather than size, this changes nothing and looks like progress.
- Anyone collecting a tool outside cannot read the collection code, because it is grey on white at about 3 to 1.
  - **a named barrier** — The situation is the disability here: bright light. It names the task, the element and the measurement, so it is fixable and checkable.
  - a category — No group is named, which is exactly why it works. It describes a situation anybody can be in.
  - a repair in disguise — It stops before the repair. Darkening the text is one answer; moving the code out of the sunlight is another.
- The product is not WCAG compliant.
  - a named barrier — It names no person, no task and no decision. It is a verdict on the whole product rather than a description of anything in it.
  - **a category** — This is the same shape as “older users struggle”, with a standard in place of a group. It is unarguable and unfixable as written.
  - a repair in disguise — There is no repair here to disguise. Compliance is an outcome, and this sentence does not say of what.
- A person with a hand tremor, returning a tool, cannot remove an item from the basket, because swiping is the only route.
  - **a named barrier** — Person, task, and the decision that caused it: one route, and that route needs a controlled gesture. The fix becomes obvious once it is written this way, which is the point.
  - a category — It would be a category if it stopped at “people with tremors”. It does not.
  - a repair in disguise — Adding a visible remove control is the likely repair, and this line deliberately stops short of it.

**Then:** Now write your own five. If a line has no person, no task or no decision in it, it is one of the other two kinds.

**What to watch for:** The two that catch people out are the standard and the pixel value, because both sound more professional than the specific sentence. A category tells you nothing to change. A repair tells you what to change before anyone has said what is wrong.

Worksheet fields for this step, revealed a few at a time in the app:

- Barrier 1 · who, in what situation, trying to do what, stopped by what — Finish this sentence: a person who … trying to … cannot, because ….
- Barrier 2 · who, in what situation, trying to do what, stopped by what
- Barrier 3 · who, in what situation, trying to do what, stopped by what
- Barrier 4 · who, in what situation, trying to do what, stopped by what
- Barrier 5 · who, in what situation, trying to do what, stopped by what

<details>
<summary>Help with this step</summary>

- **Permanent, temporary, situational:** One person may have low vision always, another after eye surgery, a third only in sunlight. All three meet the same design.
- **Category:** A group of people named as a shorthand, such as “blind users” or “older users”. It sounds like a finding and cannot be fixed, because it names nobody in particular and no decision at all.

Stuck starting? Pick one task from your own product and walk it slowly, asking at each screen who could not do this.

Is it enough? Every one of the five could be handed to somebody else, who could reproduce it without asking you a question.

</details>

#### 3. Name the decisions

**See it first.** Made-up example. Naming the decision behind a barrier in a tool-library product, and stopping one step too early.

- **The barrier:** A person with a tremor cannot cancel a booking without sometimes hitting delete instead. The two controls sit four pixels apart.
- **What I wrote as the decision:** “Bad spacing.” Accurate, and useless. It reads like a mistake nobody made, which is why it is comfortable to write.
- **Where the decision actually lived:** I went back to the component. The pair was copied from the card in Module 8, where the two controls were harmless. The four pixels came with it.
- **What I wrote instead:** “Inherited from the card component: destructive and primary actions in a tight pair, four pixels apart. Never decided here.”
- **Why that sentence is worth more:** It tells me the fix belongs in the component rather than on this screen, and that the same pair is probably on three other screens I have not looked at.

**The wrong turn:** The wrong turn is writing the decision as a fault rather than as a choice with an address. A fault gets fixed where you noticed it, and the same barrier stays everywhere else it was copied to.

**What it costs:** Tracing a decision back to the component takes longer than writing “bad spacing”, and it can mean reopening work you thought was finished.

**Still unknown:** Still unknown: how many screens carry the same copied pair. I have not looked, and this lesson is not the place to; it goes on the list for the module review.

- For each barrier, name the design decision that causes it.
- Mark whether the decision was deliberate or inherited.

**You should end up with:** For each barrier, the design decision behind it, and whether you made that decision or inherited it.

Worksheet fields for this step:

- For each barrier: the design decision that causes it — Point at the screen, the specification or the component where the decision lives.
- For each decision: did you make it, or did it arrive with something you copied?

<details>
<summary>Help with this step</summary>

- **Inherited decision:** Something that arrived with a component, a template or a pattern you copied, and was never decided by you. It is still yours now.
- **Deliberate decision:** Something you chose, usually for a reason you can still remember. These are the ones you can argue with.

Stuck starting? Take your first barrier and ask where the thing that caused it is defined: a screen, a component, or a rule you wrote earlier.

Is it enough? No line reads as a general failing. Each names something with a location you could open.

</details>

#### 4. Test the situational cases

- Try your product outdoors, one-handed, and at lowest brightness.
- Add any barrier these reveal.
- Note which barriers apply to more than one group.

**You should end up with:** Three situational tests actually run, any barrier they revealed, and a note of which barriers affect more than one group.

Worksheet fields for this step:

- What happened outdoors, one-handed, and at the lowest brightness — Three short lines. If you could not go outdoors, say so and use the brightest light you have.
- Any barrier these tests added or changed
- Which barriers affect more than one group

<details>
<summary>Help with this step</summary>

- **Situational barrier:** The same difficulty arriving from the circumstances rather than the person: sunlight, one hand on a rail, a noisy room, a cracked screen.
- **Preliminary check:** Something you can run yourself, today, without special equipment. It finds real problems, and it is not testing with disabled people.

Stuck starting? Take your phone outside, or to the brightest window you have, and try the task you walked in step 2.

Is it enough? Each of the three lines says what you actually did and what you actually saw, including “nothing changed” where that is the truth.

</details>

#### 5. Record and rank

- Rank the five barriers by how completely they block the task.
- Mark the one you had not considered before.
- Save the list; the rest of the module works from it.

**You should end up with:** The five barriers ranked by how completely they block the task, the one that surprised you marked, and the repair from the Check questions recorded.

Worksheet fields for this step:

- The five barriers in order, most completely blocking first — Ask of each one: can the person finish the task another way? The ones with no other route go first.
- The one you had not considered before
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Total block:** There is no other route to the outcome, so the person stops. This ranks above anything that is merely slow or unpleasant.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Ask of each barrier: can this person finish the task another way? The ones with no other way go to the top.

Is it enough? The order is defended by routes rather than by how bad each one feels, and the surprise is marked.

</details>

**Save and continue.** Saved for you: Your definition, the five barriers, the decisions and the ranking save as you type, on this device first and then online. Kept outside the app: Screens and prototypes stay where they already are on your computer. If you photographed anything during the situational tests, keep it in your own folder and note the file name here. What your creator sees: Your creator reads the five barriers and the decision beside each one. A barrier traced back to a component you copied reads better than one blamed on nothing. Your next action: Open Your work and choose Ready for review. The next lesson maps these five barriers onto the standard, so keep them exactly as they are.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Rewrite each barrier as “a person who … trying to … cannot, because …”. Anything you cannot complete is a category, not a barrier.

</details>

<details>
<summary>Hint 2</summary>

For each barrier, find the specification or screen where the decision was made and cite it.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Who is excluded, and by what.
Task: Identify five specific barriers in your own product, each naming the person, the situation and the design decision that causes it.
Challenge one thing at a time, and start with the mistake this lesson is about: “Accessibility means supporting screen readers.” Screen readers are one assistive technology among many, and most barriers in a typical product are met by people who use none: small targets, invisible focus, colour-only status, unreadable contrast, timeouts, and controls that need two hands.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the rewritten barrier list and ask whether five barriers name a person, a situation and a task. Look at the decision list and ask whether each barrier names the design decision behind it. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m11-l01-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Five barriers name a person, a situation and a task: Five written barriers, each specific enough to reproduce. Each barrier names the design decision behind it: A decision per barrier, marked deliberate or inherited. Permanent, temporary and situational cases are covered: Barriers spanning all three, with the situational ones tested rather than imagined. Barriers are ranked by how completely they block: An ordered list distinguishing total blocks from difficulties.

**Bring forward:** A barrier list written as decisions is a strong opening for an accessibility section, and it shows the work started from people rather than from a checklist. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Read the introduction (~25 min): Read the assigned accessibility introduction. Write in your own words what makes something a barrier.
- Walk your product looking for exclusion (~30 min): Walk one task asking at each step who could not do this. Include vision, hearing, motor, cognitive and language differences. Write each barrier as a person in a situation, not a category.
- Name the decisions (~25 min): For each barrier, name the design decision that causes it. Mark whether the decision was deliberate or inherited.
- Test the situational cases (~25 min): Try your product outdoors, one-handed, and at lowest brightness. Add any barrier these reveal. Note which barriers apply to more than one group.
- Record and rank (~15 min): Rank the five barriers by how completely they block the task. Mark the one you had not considered before. Save the list; the rest of the module works from it.

Pause after any step; save the artifact and next action.

**Free tool path.** Your own product and your own eyes, plus the situational tests you can do now: outdoors in daylight, one-handed, with the screen at its dimmest. No tools or purchases are required for this lesson.

### Output

Five specific barriers naming person, situation and cause; The design decision behind each barrier; A note of which are permanent, temporary or situational; One barrier you had not previously considered

### Checks

- Why write barriers as decisions rather than categories? Answer: Because a decision can be changed. “Blind users cannot use this” gives you nothing; “availability is shown only by colour” tells you exactly what to fix.
- Why do situational barriers matter to this work? Answer: Because the same design decisions produce them, and fixing the permanent case fixes the sunlight, the broken wrist and the crowded train at the same time.
- Why start from barriers rather than from the standard? Answer: Because criteria read cold produce a compliance pass. Starting from what your design actually excludes tells you which criteria matter here.

### Rubric and remediation

**Five barriers name a person, a situation and a task**

Adequate evidence: Five written barriers, each specific enough to reproduce.

- 0 — General statements about disability groups.
- 1 — Some specific barriers mixed with categories.
- 2 — All five specify person, situation and task.
- 3 — As adequate, and at least one comes from a situational test you actually ran.

If below 2: Rewrite each barrier as “a person who … trying to … cannot, because …”. Anything you cannot complete is a category, not a barrier. Show at recheck: The rewritten barrier list.

**Each barrier names the design decision behind it**

Adequate evidence: A decision per barrier, marked deliberate or inherited.

- 0 — Causes unstated.
- 1 — Causes described as general failings.
- 2 — Each names a specific decision in your design.
- 3 — As adequate, and at least one decision is one you made in an earlier module.

If below 2: For each barrier, find the specification or screen where the decision was made and cite it. Show at recheck: The decision list.

**Permanent, temporary and situational cases are covered**

Adequate evidence: Barriers spanning all three, with the situational ones tested rather than imagined.

- 0 — Permanent disability only.
- 1 — Two of the three covered.
- 2 — All three, with situational cases actually tried.
- 3 — As adequate, and one barrier is shown to affect all three groups.

If below 2: Take your product outside, use it one-handed and dim the screen. Add what those reveal. Show at recheck: The extended list.

**Barriers are ranked by how completely they block**

Adequate evidence: An ordered list distinguishing total blocks from difficulties.

- 0 — Unordered.
- 1 — Ordered by ease of fixing.
- 2 — Ordered by how completely the task becomes impossible.
- 3 — As adequate, and the ranking notes which barriers have no workaround at all.

If below 2: For each barrier ask whether the person can finish the task another way. Those with no route go first. Show at recheck: The ranked list.

### Portfolio contribution

A barrier list written as decisions is a strong opening for an accessibility section, and it shows the work started from people rather than from a checklist.

### Assigned resources

- R28: [W3C: accessibility introduction](https://www.w3.org/WAI/fundamentals/accessibility-intro/) — What web accessibility is, who it affects, and the range of situations it covers. Purpose: Establishes the mismatch framing this module and the barrier list depend on. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Read the text if any video is inaccessible to you; it is an introduction and supplies no criteria or testing method. Fallback: R14.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The list of checks, skimmed now to see what will be checkable later. Purpose: Shows which barriers you will be able to verify yourself in the coming lessons. Effort: 15–25 selected min. Free reading, no account. Verified 2026-09-06. The page states its checks are preliminary and not conformance, and self-checking is not testing with disabled people. Fallback: R28.

## Lesson 2: Using the standard without drowning in it

Stable ID: m11-l02-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Map your five barriers to specific success criteria at levels A and AA, and record for each what would count as meeting it in your design.

**Bring forward.** Your ranked barrier list.

The standard is large and filterable. Used from your barriers, it is a set of answers; read front to back, it is a wall.

### Learn

The quick reference is organised as principles, guidelines and success criteria, with filters for version, level, technology and topic. Used properly it is a lookup: you have a barrier about colour-only status, so you filter to the relevant topic and find the criterion that names it. Reading it linearly produces the familiar experience of a long document that changes nothing.

Levels are about the breadth of the requirement, not its importance to your users. A and AA together are the usual working target and cover most of what your barrier list will contain. AAA criteria are worth knowing and are not expected across a whole product; where one addresses your specific audience, adopting it is a decision to record rather than a default.

A criterion states an outcome — text has a contrast ratio of at least this, all functionality is available from a keyboard — and leaves the design to you. That is why this lesson comes after the barriers: the criterion confirms what must be true, and your design decides how.

The gap between reading and conformance is worth naming once, here, for the whole module. You can check a criterion against a design; you can only test conformance against a build, with real assistive technology, and preferably with disabled people. Every claim in this module states which of those it rests on.

**Common misconception.** “We will do an accessibility audit at the end.” An audit at the end finds problems that are expensive to fix and often structural — a layout that cannot carry a visible focus ring, a flow that depends on hover. Mapping barriers to criteria during design costs an hour and changes what you build.

### Worked example

Five barriers mapped to five criteria. Colour-only availability mapped to the use-of-colour criterion, and meeting it here meant adding a text label beside the dot. The swipe-only removal mapped to the keyboard criterion: every function available from a keyboard, met by adding a visible control with a key route. The 3.1:1 caption mapped to contrast (minimum), met by darkening the text and re-measuring. The adjacent destructive control mapped to target size, met by increasing spacing. The English-only date format mapped to a language and localisation concern the standard covers only partly, so the lesson recorded it as a product requirement rather than a criterion.

#### Using the standard without drowning in it

Map your five barriers to specific success criteria at levels A and AA, and record for each what would count as meeting it in your design.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: The quick reference in a browser, filtered to level A and AA. No account, tooling or subscription is involved; the mapping is written work.

- Starting material: Your five barriers with their causes.
- Create HaruCourse/Practice/m11-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Orient in the standard

- Open the assigned quick reference and filter to levels A and AA.
- Write the four principles and one criterion you already meet.

**You should end up with:** The four principles in your own words, and one criterion you already meet with the reason you know it.

Worksheet fields for this step:

- The four principles, in your own words — Perceivable, operable, understandable, robust. One short line each; you will use them as a filter, not as a quotation.
- One criterion your design already meets, and how you know

<details>
<summary>Help with this step</summary>

- **Success criterion:** One numbered statement of something that must be true. It says what, never how, so several designs can meet the same criterion.
- **Level A, AA, AAA:** Three tiers. A is the floor, AA is the common working target, AAA is adopted criterion by criterion where an audience needs it rather than as a whole.
- **Quick reference:** The filterable view of the standard. You set the level and the topic, and it shows only the criteria that apply, which is how it becomes usable.

Stuck starting? Open the quick reference, set the filter to levels A and AA, and read only the four principle headings first.

Is it enough? Your four lines are in your own words, and the criterion you already meet names how you know rather than that it feels right.

</details>

#### 2. Map your barriers

**See it first.** Made-up example. Looking for the criterion that covers a swipe-only remove control, and reading the standard the wrong way round.

- **What I did first:** I opened the standard at the top and started reading. Forty minutes later I was in the middle of the second principle, had read about sign language, and had matched nothing.
- **Why that failed:** Read front to back, the standard is a wall. Nothing in it is written about my product, so every criterion looks either irrelevant or vaguely applicable.
- **What I changed:** I went back to the barrier and asked one question: what can this person not do? Not see, not work, or not understand? Swiping is working a control, so this is operable.
- **Where that put me:** Filtered to operable, at levels A and AA, there are far fewer criteria. The keyboard criterion says every function is available from a keyboard. That is exactly my barrier.
- **What I wrote:** “Swipe-only removal · keyboard, 2.1.1 · every function can be worked from a keyboard.” Two minutes, once I asked the right question first.

**The wrong turn:** The wrong turn is starting in the standard rather than in the barrier. It feels thorough and it produces a compliance pass: a lot of reading, and no change to the thing that excludes somebody.

**What it costs:** Filtering from your barriers means you will not read most of the standard, and there are certainly criteria you are failing that no barrier of yours named. That is a real gap, and it is smaller than the gap left by reading everything and mapping nothing.

**Still unknown:** Still unknown: whether one criterion is enough for this barrier. A swipe-only control may also fail target size or pointer gestures, and I have not checked.

- For each barrier, find the criterion that names it.
- Record the criterion number and its plain statement.
- Mark any barrier the standard does not cover.

**You should end up with:** Each of your five barriers matched to a named, numbered criterion, or marked as something the standard does not cover.

**Try it with help.** Six barriers from a made up library-booking product. For each one, decide which principle to filter by first — that is the whole trick to finding the criterion quickly.

- Availability is shown only by a red or green dot, so a person who cannot distinguish the two cannot tell them apart.
  - **perceivable** — The information never reaches the person. That is the perceivable principle, and it leads straight to the use-of-colour criterion.
  - operable — Nothing here is about working a control. The person is not trying to do anything yet; they are trying to receive something.
  - understandable — The meaning would be clear if it arrived. The problem is that it does not arrive.
- The only way to remove an item is to swipe it, which needs a controlled gesture on a touchscreen.
  - perceivable — The control is visible and its meaning is clear. The difficulty is entirely in working it.
  - **operable** — Working a control is the operable principle. Filtered there, the keyboard and pointer-gesture criteria both appear.
  - understandable — The person knows exactly what they want to do and what will happen. They cannot do it.
- When a booking fails, the message says “Error 4021” and nothing else.
  - perceivable — The message is on screen, legible and announced. It reaches the person perfectly well.
  - operable — No control is involved. The person is stuck on meaning rather than on operation.
  - **understandable** — Error identification and error suggestion both live under understandable, and both apply here.
- The booking form clears itself after two minutes of inactivity, with no warning and no way to extend.
  - perceivable — Everything was visible right up to the moment it disappeared. Perception is not the problem.
  - **operable** — Time limits sit under operable, alongside keyboard and target size. Anything about whether a person can complete an action in the time allowed belongs here.
  - understandable — The person understood the form. They ran out of time, which is a different thing.
- The collection instructions are grey on white and cannot be read outdoors.
  - **perceivable** — Contrast is the classic perceivable criterion. If the text cannot be distinguished from its background, nothing else matters.
  - operable — Reading is not operating. No control is involved in this one.
  - understandable — The words would be perfectly clear if they could be seen.
- Choosing a collection branch reloads the page and moves the person to a different screen without warning.
  - perceivable — Everything on both screens is visible and readable. The surprise is the problem, not the perception.
  - operable — The control worked exactly as built. Nobody was prevented from operating anything.
  - **understandable** — Predictability lives under understandable: a change of context on selection is the criterion this maps to.

**Then:** Now take your own five barriers and ask the same question of each before you open the standard: cannot receive it, cannot work it, or cannot make sense of it?

**What to watch for:** The two that people mis-sort are the time limit and the unexpected reload, because both feel like the person “could not use it” in a general way. Ask what the person was doing at the moment it went wrong: receiving, working, or making sense.

Worksheet fields for this step, revealed a few at a time in the app:

- Barrier 1 · the criterion that names it, its number, and what it says in plain words
- Barrier 2 · the criterion that names it, its number, and what it says in plain words
- Barrier 3 · the criterion that names it, its number, and what it says in plain words
- Barrier 4 · the criterion that names it, its number, and what it says in plain words
- Barrier 5 · the criterion that names it, its number, and what it says in plain words
- Any barrier the standard does not cover, and what you will do about it — Some real barriers have no criterion. Record them as product requirements rather than stretching a criterion to fit.

<details>
<summary>Help with this step</summary>

- **Perceivable:** Can the person receive it at all — see it, hear it, feel it? Contrast, alternative text and colour-only meaning live here.
- **Operable:** Can the person work it? Keyboard routes, target size, time limits and motion live here.
- **Understandable:** Can the person make sense of it? Language, predictable behaviour, labels and error help live here.

Stuck starting? Take barrier one and ask which of the three the person could not do: receive it, work it, or make sense of it. Then filter to that principle.

Is it enough? Each of the five names a criterion number, and any barrier with no criterion is marked uncovered rather than forced into one.

</details>

#### 3. Translate to your design

**See it first.** Made-up example. Translating the use-of-colour criterion for a library-booking product, and writing the criterion back to myself twice.

- **What I wrote first:** “Ensure colour is not used as the only visual means of conveying information.” I had copied the criterion, changed one word, and felt I had done the step.
- **What a builder would do with that:** Ask me which element. The sentence applies to the whole product, so it is a request for judgement rather than an instruction.
- **What I asked instead:** Which element in my design? The availability dot on the results card. What change? Text beside it.
- **What I wrote in the end:** “The availability dot on the results card gains the words Places available, 2 left, or Full beside it, at the same size as the class time.” One element, one change, checkable.
- **What that let me do next:** I could see immediately that the same dot appears in the shortlist and the confirmation, so the translation needed a second line rather than a wider sentence.

**The wrong turn:** The wrong turn is restating the criterion, because it is fast and it looks like the same kind of sentence. The test is whether a person who has never read the standard could act on your line.

**What it costs:** Naming elements means your mapping only covers the screens you named, and someone may point out you have three more. Better to know that than to have one sentence pretending to cover everything.

**Still unknown:** Still unknown: whether the words fit on the card at the narrowest width. That is a layout question and it belongs to the next lesson, not to this one.

- For each criterion write what meeting it means for your specific screens.
- Name the change required, not the criterion text.

**You should end up with:** For each criterion, one sentence naming the element in your own design and the change that would meet it.

Worksheet fields for this step:

- For each criterion: what meeting it means in your own screens — Name the element and the change. Do not restate the criterion.

<details>
<summary>Help with this step</summary>

- **Translation:** Turning “colour is not the only means of conveying information” into “the availability dot gains the word Full beside it”. The criterion is the rule; this is the work.
- **Restating:** Writing the criterion again in slightly different words. It reads like progress and tells a builder nothing.

Stuck starting? Take your first criterion and finish this sentence: “in this design, meeting this means that …”, naming an element.

Is it enough? Somebody who had not read the standard could carry out every line without asking you what it means.

</details>

#### 4. Choose your target

- State whether you are working to A, AA, or AA plus specific AAA criteria.
- Record any AAA criterion you adopt and why your audience needs it.

**You should end up with:** A stated target level with a reason, and any AAA criterion you adopt justified by your audience.

Worksheet fields for this step:

- The level you are working to (A / AA / AA plus named AAA criteria)
- Why that level fits this product and this audience
- Any AAA criterion you adopt, and the audience reason for it — Leave blank if none. Adopting one is a choice you defend, not a badge.

<details>
<summary>Help with this step</summary>

- **Working target:** The level you hold your own work to. AA is the common one because it covers the barriers most people meet without demanding things few products can sustain.
- **Adopting a AAA criterion:** Taking one higher criterion because your particular audience needs it, and saying which audience. It is a considered addition, not a claim to reach AAA.

Stuck starting? Write the level first, then the reason. If you cannot write a reason, the level is inherited rather than chosen.

Is it enough? Your reason mentions this product and these people, not general good practice.

</details>

#### 5. Record the boundary

- Write one sentence separating criteria you have read from conformance you have tested.
- Save the mapping; later lessons check these one by one.

**You should end up with:** One sentence separating criteria you have read from conformance nobody has tested, and the repair the Check questions asked for.

Worksheet fields for this step:

- One sentence separating what you have read from what you have tested
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Conformance:** A claim that a real, finished thing meets every criterion at a level. It rests on testing, so a mapping made during design cannot establish it.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write what you did today in one clause, and what nobody has done yet in the next.

Is it enough? The sentence would stop a reader quoting this mapping as evidence that the product conforms.

</details>

**Save and continue.** Saved for you: Your principle notes, the five mappings, the translations and the target level save as you type, on this device first and then online. Kept outside the app: The quick reference stays open in your browser and nothing is copied out of it beyond the criterion numbers and your own plain-words summary. What your creator sees: Your creator reads the translation beside each criterion. A line naming an element and a change is the one that shows the standard was used as a tool. Your next action: Open Your work and choose Ready for review. The next lesson takes the structure criteria and checks two of your screens against them.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Filter the reference by the topic of each barrier and find the criterion that names it. If none does, mark it uncovered.

</details>

<details>
<summary>Hint 2</summary>

Rewrite each row as “in this design, meeting this means …”, naming the element.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Using the standard without drowning in it.
Task: Map your five barriers to specific success criteria at levels A and AA, and record for each what would count as meeting it in your design.
Challenge one thing at a time, and start with the mistake this lesson is about: “We will do an accessibility audit at the end.” An audit at the end finds problems that are expensive to fix and often structural — a layout that cannot carry a visible focus ring, a flow that depends on hover. Mapping barriers to criteria during design costs an hour and changes what you build.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the mapping table and ask whether each barrier maps to a named criterion or is marked uncovered. Look at the translated mapping and ask whether meeting each criterion is stated in terms of your screens. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m11-l02-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Each barrier maps to a named criterion or is marked uncovered: A mapping table with criterion numbers, or an explicit uncovered marker. Meeting each criterion is stated in terms of your screens: A sentence per criterion naming the concrete change in your design. A target level is chosen with a reason: A stated target with any adopted AAA criteria justified by audience. The read-versus-tested boundary is stated: A written line distinguishing criteria consulted from conformance tested.

**Bring forward:** A barrier-to-criterion mapping is compact and shows you can use the standard as a tool rather than quoting it. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Orient in the standard (~25 min): Open the assigned quick reference and filter to levels A and AA. Write the four principles and one criterion you already meet.
- Map your barriers (~30 min): For each barrier, find the criterion that names it. Record the criterion number and its plain statement. Mark any barrier the standard does not cover.
- Translate to your design (~25 min): For each criterion write what meeting it means for your specific screens. Name the change required, not the criterion text.
- Choose your target (~25 min): State whether you are working to A, AA, or AA plus specific AAA criteria. Record any AAA criterion you adopt and why your audience needs it.
- Record the boundary (~15 min): Write one sentence separating criteria you have read from conformance you have tested. Save the mapping; later lessons check these one by one.

Pause after any step; save the artifact and next action.

**Free tool path.** The quick reference in a browser, filtered to level A and AA. No account, tooling or subscription is involved; the mapping is written work.

### Output

Each barrier mapped to a named success criterion; What meeting it means in your specific design; A note where no criterion covers your barrier; A stated target level with the reason

### Checks

- Why map from barriers to criteria rather than the reverse? Answer: Because the standard is large and your product's failures are specific. Barrier-first turns the reference into a lookup rather than a reading task.
- What does a success criterion give you? Answer: A statement of what must be true. It does not tell you how to design, which is why the mapping needs a sentence about your own screens.
- Does reading criteria make a design conformant? Answer: No. Conformance is a property of an implemented, tested build, ideally checked with disabled people. Reading criteria makes your design more likely to get there.

### Rubric and remediation

**Each barrier maps to a named criterion or is marked uncovered**

Adequate evidence: A mapping table with criterion numbers, or an explicit uncovered marker.

- 0 — No mapping.
- 1 — Loose mapping to principles rather than criteria.
- 2 — Specific criteria named, with uncovered barriers marked.
- 3 — As adequate, and an uncovered barrier is recorded as a product requirement instead.

If below 2: Filter the reference by the topic of each barrier and find the criterion that names it. If none does, mark it uncovered. Show at recheck: The mapping table.

**Meeting each criterion is stated in terms of your screens**

Adequate evidence: A sentence per criterion naming the concrete change in your design.

- 0 — Criterion text copied without translation.
- 1 — Vague intentions such as “improve contrast”.
- 2 — Specific changes named per screen or component.
- 3 — As adequate, and each change is traceable to a component in your inventory.

If below 2: Rewrite each row as “in this design, meeting this means …”, naming the element. Show at recheck: The translated mapping.

**A target level is chosen with a reason**

Adequate evidence: A stated target with any adopted AAA criteria justified by audience.

- 0 — No target stated.
- 1 — A level named without reasoning.
- 2 — Target stated with reasons, including any AAA adoption.
- 3 — As adequate, and the reason references a barrier or an audience fact from your research.

If below 2: Write the target and one sentence on why it fits this product and audience. Show at recheck: The target statement.

**The read-versus-tested boundary is stated**

Adequate evidence: A written line distinguishing criteria consulted from conformance tested.

- 0 — Reading implied as compliance.
- 1 — Boundary implied but unstated.
- 2 — Stated plainly and kept with the mapping.
- 3 — As adequate, and it names what testing would be required to claim conformance.

If below 2: Add one sentence: what you have read, and what remains untested about the build. Show at recheck: The boundary statement.

### Portfolio contribution

A barrier-to-criterion mapping is compact and shows you can use the standard as a tool rather than quoting it.

### Assigned resources

- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — Levels A and AA, filtered to the topics your barriers name. Purpose: Supplies the criteria your barriers map to, without requiring a linear read. Effort: 60–90 selected min. Free reading, no account. Verified 2026-09-06. It is a filterable index of the standard: no testing tools, no design method, no prioritisation. Reading a criterion is not conformance. Fallback: R41.
- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The thresholds and their exceptions, as a worked example of one criterion. Purpose: Shows the depth behind a single criterion so the mapping is not treated as a checklist. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. A passing ratio is not proof of legibility at real sizes in real light. Fallback: R29.

## Lesson 3: Structure people can navigate

Stable ID: m11-l03-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Give two screens a correct heading outline, named regions and a reading order that matches the visual order, and verify each with a check you can run yourself.

**Bring forward.** Your m06 heading work and two m08 screens.

Structure is how someone who cannot see the whole screen navigates it. Without it they read everything, in whatever order the markup happens to be.

### Learn

A heading outline is the page's table of contents, and for many people it is the primary navigation. Skipping a level tells them a section is nested inside something that does not exist, which makes the shape of the page unreadable while looking fine visually. The rule is strict because the outline has no other way to convey nesting.

Regions solve the repetition problem. Marked correctly, someone can skip the banner and navigation and land on the main content on every page; unmarked, they hear the same twenty links before the content each time, which turns a five-page task into an endurance exercise.

Reading order is where visually correct layouts go wrong. If a sidebar appears after the main content in the markup but beside it visually, someone reading in order meets it late; if a two-column form reads down each column instead of across each row, the labels and fields separate. Check the order the content is actually in, not the order it appears in.

The cheapest verification is reading the headings aloud in order. If they summarise the page, the structure is probably sound. If they read as a list of decorative phrases, no amount of correct markup will help, because the words themselves carry no information.

**Common misconception.** “The developer will add the headings.” Heading level is a design decision about hierarchy, and a developer choosing it from visual size produces four level-one headings and no outline. Specify the outline with the screen.

### Worked example

The class detail screen had five visual headings and no outline: three were level one because they looked large. Rewritten as page title, then four level-two sections, using the labels from the m06 table. The regions were named so the main content could be reached directly. The reading order was checked and one problem found: the price panel appeared visually beside the title but came after the description in order, so a person reading in sequence met the price three screens' worth of text later. It was moved. Reading the headings aloud now summarised the page in six phrases.

#### Structure people can navigate

Give two screens a correct heading outline, named regions and a reading order that matches the visual order, and verify each with a check you can run yourself.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: An indented text outline plus a sketch with regions marked. If your prototype is a local HTML file, the browser alone lets you check heading levels and tab order without any extension.

- Starting material: Two current screens and your m06 heading outline.
- Create HaruCourse/Practice/m11-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and write the outline

- Read the assigned page-structure sections on headings and regions.
- Write each screen as an indented outline using your existing labels.

**You should end up with:** Two screens written as indented outlines, using the labels you already chose in Module 6.

Worksheet fields for this step:

- Screen 1 · the heading outline, indented
- Screen 2 · the heading outline, indented

<details>
<summary>Help with this step</summary>

- **Heading outline:** The headings of a screen, in order, with their levels shown by indentation. It is what a person hears when they ask for the structure instead of the text.
- **Page title:** The single top heading that says what this screen is. One per screen; a second one tells a reader they have arrived somewhere new when they have not.

Stuck starting? Write the screen name on the first line, then indent one step for each section under it.

Is it enough? Both outlines are indented text you could read to somebody, not a list of labels in visual order.

</details>

#### 2. Fix the levels

**See it first.** Made-up example. Fixing the outline of a class detail screen, where the levels had been chosen by how big the text looked.

- **What I found:** Five headings, three of them level one. They were level one because they were set in the large size, and the large size had been chosen because they were important.
- **Why that is a real problem:** Somebody navigating by structure hears three page titles and concludes they have landed on three different pages. The screen has no shape at all.
- **The question I used instead:** Is this a section of the thing above it, or is it a new thing? Not: is this big? What to bring is part of the class. Dates is part of the class. Both are level two.
- **What I changed:** One page title, four level-two sections, and the two month lists under Dates became level three. The visual sizes did not all change; size and level stopped being the same decision.
- **The heading I rewrote:** Details became What to bring. Details could sit above anything, which is exactly why it was chosen and exactly why it was no use.

**The wrong turn:** The wrong turn is letting visual size decide the level, because in a design tool they are the same act. It produces four level-one headings and an outline that summarises nothing.

**What it costs:** Separating level from size means the outline and the visual hierarchy have to be checked separately, and occasionally a level-two heading is set smaller than a level-three one elsewhere. That is fine, and it does have to be noticed.

**Still unknown:** Still unknown: whether the two month lists should be headings at all, or a single list with dates in it. Both outlines read sensibly, and nothing in this lesson decides between them.

- Check no level is skipped and there is exactly one page title.
- Rewrite any heading that does not describe its section.

**You should end up with:** Corrected levels with one page title and no skipped level, and every heading that described nothing rewritten.

**Try it with help.** Six headings from a made up tool-library screen. For each one, decide what kind of heading it is.

- What you need to bring
  - **describes its own section** — Read on its own it tells you what is underneath. That is the whole test for a heading.
  - could sit above anything — It could not. It names one specific thing and would be wrong above the opening hours.
  - describes the whole page — It names one part. A person hearing it knows they are inside something larger.
- Details
  - describes its own section — It gives a reader nothing to decide with. Anything at all could be underneath it.
  - **could sit above anything** — This is the commonest empty heading. It occupies the position of a signpost and points nowhere.
  - describes the whole page — It is not doing that either. It is not describing anything.
- Northside Tool Library
  - describes its own section — Nothing is underneath it in particular. It is naming the place rather than a part of it.
  - could sit above anything — It is specific. The difficulty is that it is specific about the whole thing.
  - **describes the whole page** — This is a page title. There should be exactly one, and a second one sends a reader looking for a page they have not left.
- More information
  - describes its own section — A reader cannot tell whether it holds opening hours, safety notes or a phone number.
  - **could sit above anything** — Along with Details and Other, this is a heading written when the writer had not decided what the section was.
  - describes the whole page — It is too vague to name the page, and it would be an odd page title if it did.
- If you return a tool late
  - **describes its own section** — It names a situation, so the reader knows whether to stop here or move on. That is what makes an outline usable.
  - could sit above anything — It is tied to one specific circumstance and would be wrong above almost everything else on the page.
  - describes the whole page — It is one case among several the page covers.
- Borrowing a cordless drill
  - describes its own section — It could be, on a longer page about borrowing generally. On a page about this one drill it is the subject of the whole thing.
  - could sit above anything — It is entirely specific, which is why the choice here is between the other two.
  - **describes the whole page** — On a page about borrowing this drill, this is the page title. Deciding that is the point: the same words are a section heading somewhere else.

**Then:** Now read your own two outlines and mark each heading with one of the three. Anything in the middle group gets rewritten.

**What to watch for:** The last one is the useful case: the same words are a page title on one screen and a section heading on another. A heading level is a statement about where you are, so it depends on the screen rather than on the words.

Worksheet fields for this step:

- Every level you changed, and why — Look for more than one page title, and for a level that jumps from one to three.
- Every heading you rewrote because it described nothing

<details>
<summary>Help with this step</summary>

- **Skipped level:** Going from level one to level three with nothing in between. A person navigating by structure hears a gap and cannot tell what the section belongs to.
- **Empty heading:** A word that would sit equally well above any section: Details, More, Information, Other. It occupies the position of a signpost and points nowhere.

Stuck starting? Cover the content. Read only your headings, and mark every one you could not guess the contents of.

Is it enough? One page title per screen, no skipped level, and no heading left that could sit above anything.

</details>

#### 3. Mark the regions

- Identify banner, navigation, main content, complementary and footer.
- Check the main content can be reached without passing the navigation.

**You should end up with:** A region map for each screen and a stated route to the main content that does not go through the navigation.

Worksheet fields for this step:

- Screen 1 · banner, navigation, main content, complementary, footer
- Screen 2 · banner, navigation, main content, complementary, footer
- How somebody reaches the main content without going through the navigation first

<details>
<summary>Help with this step</summary>

- **Region:** A named area of the screen: the banner at the top, the navigation, the main content, anything alongside it, and the footer. Naming them lets somebody jump straight to one.
- **Main content:** The part of this screen that is not repeated on every other screen. Being able to reach it directly is the difference between hearing the menu once and hearing it on every page.

Stuck starting? Sketch each screen as boxes and write the region name inside each box.

Is it enough? Every part of both screens belongs to exactly one region, and the route to the main content is one sentence.

</details>

#### 4. Check reading order

**See it first.** Made-up example. Checking the reading order of a class detail screen and finding the problem in the place that looked best.

- **What I expected:** That the order would be fine. The screen reads top to bottom and nothing about it looks unusual.
- **What I actually did:** I wrote the content order as a numbered list without looking at the layout, working from the structure rather than the picture.
- **What the list showed:** The price panel, which sits beside the title, was item fourteen. Everything in the description came before it.
- **Why that matters:** Somebody meeting the screen one item at a time hears three paragraphs about the class before learning what it costs. Visually the price is the second thing you see.
- **What I changed:** I moved the price before the description. It looks identical, and it now arrives in both orders at roughly the same point.

**The wrong turn:** The wrong turn is checking the order by looking at the screen, because the screen is the thing that hides the problem. Writing the order out blind is what makes the mismatch visible.

**What it costs:** Writing the order as a list for two screens is dull and takes twenty minutes, and most of it will confirm what you already thought. The one item that does not is the whole return on it.

**Still unknown:** Still unknown: whether anyone actually reads in that order on this screen. I have not watched anybody use it, and nothing in this lesson does.

- Write the order content is actually in, not how it looks.
- Compare with the visual order and fix any mismatch.
- Pay attention to sidebars, two-column forms and floating panels.

**You should end up with:** The content order written as a numbered list, compared with the visual order, and every mismatch fixed or recorded.

Worksheet fields for this step:

- The order the content is actually in, as a numbered list — Not how it looks. What order would somebody meet it in if they met one thing at a time.
- Every place the content order differs from the visual order, and what you did

<details>
<summary>Help with this step</summary>

- **Reading order:** The order the content is really in, which is the order a person meets it when they cannot see the whole screen at once.
- **Visual order:** The order the eye takes. Two columns, a floating panel or a sidebar can put these two badly out of step without anything looking wrong.

Stuck starting? Write the numbered list first, from the structure, and only then compare it against the layout.

Is it enough? Every mismatch is either fixed or written down with the reason it stays.

</details>

#### 5. Read the headings aloud

- Read only the headings to another person and ask what the page contains.
- Rewrite anything they cannot infer.
- Save the outlines, regions and order notes.

**You should end up with:** A record of reading only the headings aloud, what the listener said the page contained, and what you rewrote.

Worksheet fields for this step:

- Who you read the headings to, or how you ran it alone — If nobody was available, read them aloud yourself, write down what they suggest, and say so here. That is an honest result.
- What they said the page contains
- What you rewrote afterwards
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **The read-aloud check:** Reading only the headings, in order, to somebody who has not seen the screen. If they cannot say what the page holds, the outline is not doing its job.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Read the headings of screen one aloud, in order, and stop. Ask what the page is about.

Is it enough? You have written what they actually said, including the parts they got wrong, rather than what you hoped they would say.

</details>

**Save and continue.** Saved for you: Both outlines, the region maps, the order list and the read-aloud result save as you type, on this device first and then online. Kept outside the app: Any sketch of the regions stays in your own folder. Note its file name here so you can find it when the module review comes round. What your creator sees: Your creator reads the outlines and the order mismatch you found. A mismatch you found and fixed is worth more than an outline that was right first time. Your next action: Open Your work and choose Ready for review. The next lesson measures the text on these same two screens.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write each screen as a numbered outline and check each item is a genuine subsection of the one above.

</details>

<details>
<summary>Hint 2</summary>

Draw each screen and outline its regions, then state how someone reaches the main content first.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Structure people can navigate.
Task: Give two screens a correct heading outline, named regions and a reading order that matches the visual order, and verify each with a check you can run yourself.
Challenge one thing at a time, and start with the mistake this lesson is about: “The developer will add the headings.” Heading level is a design decision about hierarchy, and a developer choosing it from visual size produces four level-one headings and no outline. Specify the outline with the screen.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the two outlines and ask whether headings are correctly nested and descriptive. Look at the region maps and ask whether regions are named and main content is directly reachable. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m11-l03-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Headings are correctly nested and descriptive: Two outlines with one page title each, no skipped levels, and headings that describe their sections. Regions are named and main content is directly reachable: A region map per screen with a route that skips the navigation. Reading order matches visual order: A written content order compared against the visual order, with mismatches fixed. The read-aloud check was run and changed something: A record of reading headings alone to someone, with resulting rewrites.

**Bring forward:** A heading outline and region map beside the screen is a small artefact that shows structural thinking most portfolios omit. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Read and write the outline (~25 min): Read the assigned page-structure sections on headings and regions. Write each screen as an indented outline using your existing labels.
- Fix the levels (~25 min): Check no level is skipped and there is exactly one page title. Rewrite any heading that does not describe its section.
- Mark the regions (~30 min): Identify banner, navigation, main content, complementary and footer. Check the main content can be reached without passing the navigation.
- Check reading order (~25 min): Write the order content is actually in, not how it looks. Compare with the visual order and fix any mismatch. Pay attention to sidebars, two-column forms and floating panels.
- Read the headings aloud (~15 min): Read only the headings to another person and ask what the page contains. Rewrite anything they cannot infer. Save the outlines, regions and order notes.

Pause after any step; save the artifact and next action.

**Free tool path.** An indented text outline plus a sketch with regions marked. If your prototype is a local HTML file, the browser alone lets you check heading levels and tab order without any extension.

### Output

A heading outline per screen with correct nesting; Named regions for banner, navigation, main and footer; A reading-order check with any mismatch fixed; A read-aloud test of the headings alone

### Checks

- Why does skipping a heading level matter? Answer: Because levels are the only signal of nesting for someone navigating by outline. A skipped level describes a structure that does not exist.
- What do regions buy a person? Answer: The ability to skip repeated navigation and land on the content. Without them, every page starts with the same twenty links.
- Where does reading order usually break? Answer: Two-column layouts, sidebars and floating panels, where the visual position and the content order diverge and someone reading in sequence meets things late or separated.

### Rubric and remediation

**Headings are correctly nested and descriptive**

Adequate evidence: Two outlines with one page title each, no skipped levels, and headings that describe their sections.

- 0 — Headings chosen by visual size.
- 1 — Correct nesting with vague headings.
- 2 — Correct nesting and descriptive headings on both screens.
- 3 — As adequate, and headings reuse vocabulary evidenced in m06.

If below 2: Write each screen as a numbered outline and check each item is a genuine subsection of the one above. Show at recheck: The two outlines.

**Regions are named and main content is directly reachable**

Adequate evidence: A region map per screen with a route that skips the navigation.

- 0 — No regions.
- 1 — Regions named but no skip route.
- 2 — Regions named and main content directly reachable.
- 3 — As adequate, and repeated content is identified as something to skip on every page.

If below 2: Draw each screen and outline its regions, then state how someone reaches the main content first. Show at recheck: The region maps.

**Reading order matches visual order**

Adequate evidence: A written content order compared against the visual order, with mismatches fixed.

- 0 — Order not examined.
- 1 — Examined without fixing a known mismatch.
- 2 — Checked and mismatches corrected.
- 3 — As adequate, and a layout was changed rather than patched to make the orders agree.

If below 2: Write the content order as a numbered list and walk the screen visually alongside it. Show at recheck: The order comparison.

**The read-aloud check was run and changed something**

Adequate evidence: A record of reading headings alone to someone, with resulting rewrites.

- 0 — Not run.
- 1 — Run alone with no changes.
- 2 — Run with another person and rewrites recorded.
- 3 — As adequate, and the listener's summary is quoted beside the outline.

If below 2: Read only the headings to someone and ask what the page contains. Rewrite what they cannot infer. Show at recheck: The read-aloud record.

### Portfolio contribution

A heading outline and region map beside the screen is a small artefact that shows structural thinking most portfolios omit.

### Assigned resources

- R10: [W3C: page structure](https://www.w3.org/WAI/tutorials/page-structure/) — The headings and page regions sections. Purpose: Supplies the outline and region rules this lesson applies. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. It covers structural semantics, not navigation design or content wording. Fallback: R14.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The heading and page title checks. Purpose: Gives self-runnable verification for the outline you wrote. Effort: 15–25 selected min. Free reading, no account. Verified 2026-09-06. Preliminary checks only; passing them is not conformance. Fallback: R28.

## Lesson 4: Text people can actually read

Stable ID: m11-l04-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Measure contrast for every text pair in your design, test the layout at 200 per cent text size, and repair what breaks without removing content.

**Bring forward.** Your m08 token sheet and two screens.

Text is the product for most people most of the time, and it is the easiest thing to make unreadable while it looks elegant.

### Learn

Contrast is measurable, which means opinions about it are unnecessary. The assigned threshold reading gives the ratios and their exceptions for large text and incidental elements. Measure every pair you allow — including the ones you consider decorative, because a caption carrying the price is not decorative — and record the number beside the pair in your token sheet.

Quiet text is where products fail. Placeholder grey, disabled labels, captions on tinted panels: each was chosen to be visually recessive, and recessive is exactly what fails a ratio. If a piece of text matters enough to appear, it matters enough to be readable; if it does not matter, remove it rather than dimming it.

Enlarging text is a reflow test, not a zoom test. A person who has set their text larger should get a layout that adapts: content wrapping, columns stacking, nothing clipped, no horizontal scrolling of the page. Fixed-height containers and text sized in absolute units are the two usual causes of failure, and both are decisions you made in m03 and m08.

Comfort is broader than the threshold. Line length, line height, paragraph spacing and the amount of text on screen all affect whether people read or skim, and none of them appear in a contrast measurement. Meeting the ratio is where you start rather than where you finish.

**Common misconception.** “It passes the contrast check, so the text is fine.” The ratio covers foreground against background at a given size and weight. It says nothing about thin type at small sizes, long unbroken lines, or text over an image where the background varies.

### Worked example

Nine text pairs were measured. Three failed: the caption at 3.1:1, the placeholder at 2.8:1 and the disabled button label at 2.4:1. The caption was darkened; the placeholder was replaced with a permanent hint under the label, removing the problem instead of repairing it; the disabled label was given a stronger colour and a written explanation beside it, since a disabled control with unreadable text tells nobody anything. At 200 per cent text the price panel clipped its last line and the header wrapped over the logo; both were fixed by allowing the containers to grow. Line length on the description exceeded ninety characters at wide widths and was capped.

#### Text people can actually read

Measure contrast for every text pair in your design, test the layout at 200 per cent text size, and repair what breaks without removing content.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Any free browser-based contrast checker, or compute the ratio in a spreadsheet from the published formula. For enlarged text, your browser's own text-size setting shows real reflow with no tooling.

- Starting material: Your token sheet with its text and surface pairs.
- Create HaruCourse/Practice/m11-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Measure everything

**See it first.** Made-up example. Measuring the text on a tool-library card, and listing only the text I had designed on purpose.

- **What I listed:** Six pairs: the title, the body, the two headings, the button label and the price. All six passed comfortably, and I nearly wrote that the screen was fine.
- **What made me look again:** The barrier list from lesson one had a line about a collection code nobody could read outdoors, and the code was not among my six.
- **What I had left out:** Placeholder text in the search box. Helper text under the date field. The disabled label on the unavailable button. The caption under the photograph. None of them felt like text I had designed; all of them are text somebody reads.
- **What the numbers were:** Placeholder 2.8 to 1, helper 3.4 to 1, disabled label 2.4 to 1, caption 3.1 to 1. Four failures, none of them in my original list.
- **What I changed about the method:** I stopped listing text and started listing places text sits on a surface, going through the screen area by area rather than from memory.

**The wrong turn:** The wrong turn is listing the text you chose rather than the text that is there. Everything you deliberately set is likely to be fine, because you were looking at it when you set it.

**What it costs:** Going area by area is slower and produces a longer, duller list, most of which passes. It is the only way the quiet text gets measured at all.

**Still unknown:** Still unknown: what the caption measures over the lighter part of the photograph. The ratio changes across the image, and a single number does not describe it.

- List every text-on-surface pair, including quiet text.
- Measure each ratio and record it in the token sheet.
- Mark every pair below the relevant threshold.

**You should end up with:** Every text-on-surface pair listed, each with a measured ratio, and the failing ones marked with their size.

Worksheet fields for this step:

- Every place text sits on a surface, including the quiet text — Body, headings, captions, placeholder text, disabled labels, text over images, text inside buttons, and anything in a coloured panel.
- The measured ratio for each pair
- The pairs below the threshold that applies to them — The threshold depends on size and weight, so write the size beside each failing pair.

<details>
<summary>Help with this step</summary>

- **Contrast ratio:** A number from 1 to 21 comparing how light the text is against how light its background is. It is calculated, not judged by eye.
- **Quiet text:** Captions, placeholder text, helper lines and disabled labels. They are set pale on purpose, which is exactly why they fail most often.
- **Threshold:** The ratio a pair has to reach. Larger and heavier text is allowed a lower one, so the size has to be recorded beside the number.

Stuck starting? Take one screen and go corner to corner, writing down every place text meets a surface before measuring anything.

Is it enough? Your list contains at least one pair you would not have thought of as a design decision.

</details>

#### 2. Repair the failures

- Darken, remove or replace each failing pair.
- Prefer removing decorative text over dimming meaningful text.
- Re-measure after each repair.

**You should end up with:** Each failing pair repaired, with the new ratio written beside the old one.

**Try it with help.** Five failing pairs from a made up tool-library screen. For each one, decide what the right repair is.

- The caption under the photograph, at 3.1 to 1, which says what the photograph shows.
  - **darken the text** — It carries meaning and it belongs where it is. Darkening it costs nothing but a value in the token sheet.
  - replace it with something permanent — It is already permanent. Nothing about it appears and disappears.
  - remove it — It says what the photograph shows, so removing it takes information away from exactly the people who need it most.
- Placeholder text inside the search box, at 2.8 to 1, which is the only thing telling anyone what to search for.
  - darken the text — Darkening it makes it look like a value that is already typed, which is the other problem placeholders have. It disappears the moment anybody types, whatever its ratio is.
  - **replace it with something permanent** — A label above the field, or a hint line under it, says the same thing and stays on screen while the person types. The contrast failure and the disappearing act are fixed by the same change.
  - remove it — Removing it takes away the only instruction. The instruction needs to move, not to go.
- A pale word DRAFT across the middle of the page, at 1.4 to 1, left over from an earlier version.
  - darken the text — Darkening it makes a decorative leftover more prominent than the content, which is the opposite of what anyone wants.
  - replace it with something permanent — There is nothing to replace it with. It is not telling a reader anything they need.
  - **remove it** — Decorative text that fails is the easy case. Take it out and the failure and the clutter both go.
- The label on a Reserve button that cannot be pressed because the class is full, at 2.4 to 1.
  - **darken the text** — A person has to be able to read what they are not allowed to do, and why. Disabled is a state, not a licence to be unreadable, and a written reason beside it helps more still.
  - replace it with something permanent — The label is already permanent. What is wrong with it is the colour.
  - remove it — A control with no readable label tells nobody anything. The person cannot even tell what has been disabled.
- Helper text under the date field, at 3.4 to 1, repeating the label in different words.
  - darken the text — Darkening it keeps a line that says nothing new and adds another thing to read.
  - replace it with something permanent — It is already permanent, and the trouble is that it duplicates the label rather than adding to it.
  - **remove it** — Text that repeats the label is decorative in practice. Removing it fixes the ratio and shortens the form.

**Then:** Now decide the repair for each of your own failing pairs, and write the new ratio beside the old one.

**What to watch for:** The placeholder is the one worth remembering. When text fails and also disappears, the repair is to move it somewhere permanent rather than to change its colour, because the colour was never the only problem.

Worksheet fields for this step:

- What you did to each failing pair — Darken it, replace it, or remove it. Removing decorative text is a repair; dimming meaningful text is not.
- The new ratio beside the old one for each repair

<details>
<summary>Help with this step</summary>

- **Repair by removal:** Taking the text away rather than darkening it. It is the right answer when the text was decorative, or when a permanent label can replace a placeholder.
- **Disabled label:** The text on a control that cannot be used. If it is unreadable, the person cannot tell what they are not allowed to do, which is worse than no control at all.

Stuck starting? Take the worst ratio first and decide which of the three repairs it needs before you touch any colour.

Is it enough? Every failing pair has a new measured number recorded, not an assumption that the repair worked.

</details>

#### 3. Enlarge the text

**See it first.** Made-up example. Enlarging the text on a tool-library screen, and repairing the test instead of the screen.

- **What broke:** At 200 per cent, the price panel cut off its last line and the header wrapped over the logo. Two clear breakages in about ten seconds.
- **What I did first:** I set the panel text to a smaller size so it fitted again. The screenshot at 200 per cent then looked perfect.
- **Why that was worse than doing nothing:** Somebody who needs 200 per cent text now gets that panel at 140 per cent. I had not fixed the layout; I had opted that person out of their own setting.
- **What the real repair was:** The panel had a fixed height. I let it grow, and let the header stack below the logo instead of beside it once there is no room.
- **What it cost:** At the largest sizes the screen is a good deal longer and the header takes two lines. Both are correct: more text needs more room.

**The wrong turn:** The wrong turn is shrinking the text to make the test pass, because the screenshot afterwards looks exactly like a fix. It is the one repair that removes the accommodation the person had chosen.

**What it costs:** Letting containers grow makes the enlarged layout much longer and, at some widths, uglier than the design you drew. That is the correct outcome, and it will not look like your original.

**Still unknown:** Still unknown: how it behaves at 400 per cent, which the standard also cares about. I tested one setting and I am saying so rather than implying I tested the range.

- Set text to about 200 per cent and reload the screens.
- Record every clip, overlap, truncation and horizontal scroll.
- Fix by letting containers grow rather than shrinking the text.

**You should end up with:** The screens opened again at about 200 per cent text, every breakage named, and containers changed so the text is not shrunk back.

Worksheet fields for this step:

- How you enlarged the text, and on what
- Every clip, overlap, truncation and sideways scroll you saw
- What you changed, and what the container does now — Let the container grow. Shrinking the text back is not a fix; it is undoing the test.

<details>
<summary>Help with this step</summary>

- **Reflow:** Content rearranging itself to fit when the text gets bigger: lines rewrap, containers grow, things stack. This is what should happen.
- **Clipping:** Text being cut off because the box it is in refuses to grow. The words are still there and nobody can read them.

Stuck starting? Turn your browser text size up before you open the screens, so you meet them at the larger size rather than watching them change.

Is it enough? Every breakage is written down concretely, and no fix involves making the text smaller again.

</details>

#### 4. Check reading comfort

- Measure line length at your widest layout and cap it if needed.
- Check line height and paragraph spacing on the longest text block.
- Read one screen aloud at arm's length to test the result.

**You should end up with:** A counted line length at your widest layout, stated spacing values, and what the read-aloud test changed.

Worksheet fields for this step:

- Characters per line at your widest layout, counted
- Your line height and paragraph spacing on the longest block
- What happened when you read one screen aloud at arm’s length

<details>
<summary>Help with this step</summary>

- **Measure:** The number of characters on a line. Long lines make the eye lose its place on the way back to the start, which is tiring in a way that has nothing to do with contrast.
- **Meeting the floor:** Passing the ratio. It means the text is distinguishable, and it does not mean it is comfortable to read for five minutes.

Stuck starting? Count the characters on one full line at your widest layout. Count them; do not estimate.

Is it enough? You have a number rather than an impression, and the read-aloud line says what actually happened.

</details>

#### 5. Record

- Update the token sheet with measured ratios.
- Write what you could not fix and why.
- Save the enlarged-text screenshots with the notes.

**You should end up with:** The token sheet updated with measured ratios, an honest list of what you could not fix, and the repair the Check questions asked for.

Worksheet fields for this step:

- What you changed in the token sheet
- What you could not fix, and why — An honest unfixed line with a reason is a result. A quiet omission is not.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Token sheet:** The record of your values from Module 8. Measured ratios belong in it, so the next person who uses a colour does not have to measure it again.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Open your token sheet and write the measured number beside each colour pair you used today.

Is it enough? Anybody picking up your token sheet would know which pairs are measured and which are not.

</details>

**Save and continue.** Saved for you: Your pair list, ratios, repairs, breakages and comfort measurements save as you type, on this device first and then online. Kept outside the app: Screenshots of the enlarged screens stay in your own folder. Note their file names in step 3 so the module review can find them. What your creator sees: Your creator reads the pairs you nearly left out and the new number beside each old one. Those are what show the measuring was real. Your next action: Open Your work and choose Ready for review. The next lesson looks at everything on these screens whose meaning depends on colour.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

List every place text meets a surface and measure each; the ones you skipped are usually the failing ones.

</details>

<details>
<summary>Hint 2</summary>

Repair each failing pair and record the new number beside the old one.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Text people can actually read.
Task: Measure contrast for every text pair in your design, test the layout at 200 per cent text size, and repair what breaks without removing content.
Challenge one thing at a time, and start with the mistake this lesson is about: “It passes the contrast check, so the text is fine.” The ratio covers foreground against background at a given size and weight. It says nothing about thin type at small sizes, long unbroken lines, or text over an image where the background varies.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the measured token sheet and ask whether every text pair carries a measured ratio. Look at the repair record and ask whether failing pairs are repaired and re-measured. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m11-l04-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every text pair carries a measured ratio: A measured number per pair in the token sheet, including quiet text. Failing pairs are repaired and re-measured: Repairs recorded with new ratios, including any text removed rather than dimmed. A 200 per cent test was run with breakages fixed: Screens at enlarged text with named breakages and their fixes. Line length and spacing decisions are recorded: A measured line length at the widest layout and stated spacing values.

**Bring forward:** Measured ratios and an enlarged-text screenshot are concrete craft evidence and take minutes to produce. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Measure everything (~25 min): List every text-on-surface pair, including quiet text. Measure each ratio and record it in the token sheet. Mark every pair below the relevant threshold.
- Repair the failures (~25 min): Darken, remove or replace each failing pair. Prefer removing decorative text over dimming meaningful text. Re-measure after each repair.
- Enlarge the text (~30 min): Set text to about 200 per cent and reload the screens. Record every clip, overlap, truncation and horizontal scroll. Fix by letting containers grow rather than shrinking the text.
- Check reading comfort (~25 min): Measure line length at your widest layout and cap it if needed. Check line height and paragraph spacing on the longest text block. Read one screen aloud at arm's length to test the result.
- Record (~15 min): Update the token sheet with measured ratios. Write what you could not fix and why. Save the enlarged-text screenshots with the notes.

Pause after any step; save the artifact and next action.

**Free tool path.** Any free browser-based contrast checker, or compute the ratio in a spreadsheet from the published formula. For enlarged text, your browser's own text-size setting shows real reflow with no tooling.

### Output

Measured ratios for every text-on-surface pair; Repairs for every failing pair, recorded; A 200 per cent text test with breakages named and fixed; A line-length and spacing decision for body text

### Checks

- Why measure rather than judge contrast? Answer: Because your eyes are adapted to your screen and your lighting. The ratio is a number, and the number is the same for everyone reading your design.
- What usually breaks at 200 per cent text? Answer: Fixed-height containers and absolute text sizes: content clips, headers wrap over other elements, and pages start scrolling sideways. Both causes are earlier design decisions.
- Is a passing ratio enough? Answer: No. It is a floor. Thin type, long lines, tight spacing and text over variable backgrounds can pass and still be hard to read.

### Rubric and remediation

**Every text pair carries a measured ratio**

Adequate evidence: A measured number per pair in the token sheet, including quiet text.

- 0 — No measurements.
- 1 — Body text measured only.
- 2 — All pairs measured including captions, placeholders and disabled text.
- 3 — As adequate, and the sheet marks which pairs are permitted and which are forbidden.

If below 2: List every place text meets a surface and measure each; the ones you skipped are usually the failing ones. Show at recheck: The measured token sheet.

**Failing pairs are repaired and re-measured**

Adequate evidence: Repairs recorded with new ratios, including any text removed rather than dimmed.

- 0 — Failures left in place.
- 1 — Repaired without re-measuring.
- 2 — Repaired and re-measured, with removals justified.
- 3 — As adequate, and one repair removed the need for the text rather than restyling it.

If below 2: Repair each failing pair and record the new number beside the old one. Show at recheck: The repair record.

**A 200 per cent test was run with breakages fixed**

Adequate evidence: Screens at enlarged text with named breakages and their fixes.

- 0 — Not tested.
- 1 — Tested with breakages recorded but unfixed.
- 2 — Tested, named and fixed by allowing reflow.
- 3 — As adequate, and no fix reduced the text size or removed content.

If below 2: Enlarge the text and screenshot each screen. Name each breakage concretely, then let the containers grow. Show at recheck: The enlarged screenshots and fixes.

**Line length and spacing decisions are recorded**

Adequate evidence: A measured line length at the widest layout and stated spacing values.

- 0 — Not considered.
- 1 — Mentioned without measurement.
- 2 — Measured, capped where needed, and spacing recorded.
- 3 — As adequate, and the decision references your m03 typography work.

If below 2: Count characters per line at your widest breakpoint and cap the container if it runs long. Show at recheck: The measurements.

### Portfolio contribution

Measured ratios and an enlarged-text screenshot are concrete craft evidence and take minutes to produce.

### Assigned resources

- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The thresholds and the large-text and incidental exceptions. Purpose: Supplies the measurable target for every pair you allow. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. A passing ratio is not proof of legibility at real sizes in real light. Fallback: R29.
- R29: [web.dev: colour and contrast](https://web.dev/learn/accessibility/color-contrast) — Colour perception, colour-vision deficiency and contrast in practice. Purpose: Explains why measured contrast matters more than how the text looks to you. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. No code samples; the measurement and reflow tests here are the practical work. Fallback: R30.

## Lesson 5: Never colour alone

Stable ID: m11-l05-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Find every place your design carries meaning by colour, add a second signal to each, and prove the design still works in greyscale and in a colour-vision simulation.

**Bring forward.** Your m08 states, messages and charts.

Colour is the signal most designers reach for and the one most likely to be unavailable to the reader.

### Learn

The rule is narrow and strict: information must not be conveyed by colour alone. It does not forbid colour, and it does not require a drab product. It requires that anyone who cannot distinguish your colours — through a colour-vision difference, a monochrome display, sunlight, a cheap projector or a printed page — can still get the information.

The second signal has to be perceptible, not merely present. An icon that differs only in colour is not a second signal; an icon with a distinct silhouette is. Text is the most reliable of all: “Full” beside the red dot carries the meaning to everyone, including a screen-reader user for whom the dot does not exist at all.

Greyscale catches most failures in seconds, and it is the check to run habitually. A colour-vision simulation catches the rest — particularly red and green pairs, which look distinct to you and identical to a significant share of readers, and which products use constantly for success and failure.

Three places recur across products: chart series distinguished only by colour, status shown only by a coloured dot or background, and required fields marked only in red. Check these three first; they are almost always present and almost always unfixed.

**Common misconception.** “We use a colour-blind-safe palette, so we are fine.” A safe palette reduces the chance of confusion between hues and does nothing for a monochrome display, sunlight, printing, or a screen-reader user. The second signal is what carries the meaning.

### Worked example

Four places carried meaning by colour alone. Availability dots — green, amber, red — gained text: “Places available”, “2 left”, “Full”. Required fields, marked with red labels, gained the word “required”. The chart's three series gained direct labels rather than a colour legend. The error state, which had used only a red border, gained an icon with a distinct shape and the message text tied to the field. In greyscale all four remained readable, and a colour-vision simulation confirmed the amber and red dots had previously been indistinguishable for some readers.

#### Never colour alone

Find every place your design carries meaning by colour, add a second signal to each, and prove the design still works in greyscale and in a colour-vision simulation.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Greyscale is free: your operating system's accessibility settings, a photocopy, or a phone photo converted to black and white. Colour-vision simulation is available in browser developer tools with no account.

- Starting material: Your state and message specifications.
- Create HaruCourse/Practice/m11-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Find the colour-only signals

**See it first.** Made-up example. Looking for colour-only signals on a borrowing product, and looking for the wrong thing.

- **How I searched at first:** I scanned each screen for coloured things. Dots, the red error border, the chart. Three found, list finished, twenty minutes.
- **What that method misses:** Anything whose colour is subtle enough not to catch the eye. A grey-blue label that means optional does not look coloured; it looks like a label.
- **The question I switched to:** Not “what is coloured?” but “what would somebody no longer know if every colour became the same grey?”. That is a question about meaning rather than about appearance.
- **What it added:** Two more. The optional labels, which were the only thing separating optional from required fields. And the read and unread rows in the notice list, distinguished by a slightly warmer background.
- **Why the second search found them:** Both are quiet on purpose. A search for colour skips them precisely because the design made them unobtrusive.

**The wrong turn:** The wrong turn is searching for colour instead of searching for meaning. Bright things get found, quiet distinctions survive the audit, and the list looks complete.

**What it costs:** The meaning question is slower and produces items you will argue with yourself about, such as whether a slightly warmer row background is really carrying anything. Arguing about it is better than never listing it.

**Still unknown:** Still unknown: whether anybody uses the warmer background to tell read from unread, or whether they go by the bold title instead. The greyscale pass will show whether anything is left once colour is gone; it cannot say what people were relying on.

- Walk your screens listing everything whose meaning depends on colour.
- Check status, charts, required fields, links and errors specifically.

**You should end up with:** Every place meaning depends on colour, with what a reader would miss written out for each.

Worksheet fields for this step:

- Every place the meaning depends on colour
- For each one: what a person misses if every colour became the same grey — Be specific. Not “the status”, but “which of the two classes still has places”.

<details>
<summary>Help with this step</summary>

- **Colour-only signal:** Anything where the colour is the whole message: a red border meaning error, a green dot meaning available, a coloured line on a chart with a legend.
- **Second signal:** Something else carrying the same meaning: a word, a shape with a different outline, a position, a weight. The colour stays and stops being the only carrier.

Stuck starting? Walk each screen asking one question: if every colour became the same grey, what would somebody no longer know?

Is it enough? You have checked status, charts, required fields, links and errors by name rather than trusting a general scan.

</details>

#### 2. Add second signals

**See it first.** Made-up example. Adding a second signal to the status dots on a tool-library list, and choosing a signal that was not one.

- **What I added first:** A small circle icon beside each dot: filled for available, filled for out on loan, filled for reserved. Three icons, three colours, one shape.
- **What I told myself:** That there was now an icon as well as a colour, so the meaning no longer rested on colour alone. That sentence is true and the icon is doing nothing.
- **What the greyscale view showed:** Three identical grey circles. I had added a second element rather than a second signal, and it had cost me layout space to do it.
- **What I did instead:** Words: Available, On loan, Reserved, set beside the dot at the same size as the item name. Readable in greyscale, in sunlight, on a monochrome display, and to somebody listening.
- **What it cost:** The row is wider and the list holds fewer items on a narrow screen. I shortened the item name rather than the status, because the status is the thing people are scanning for.

**The wrong turn:** The wrong turn is adding a shape that is the same shape. It satisfies the sentence “there is more than colour here” while carrying no information at all, and it is easy to do without noticing.

**What it costs:** Words take room, and on a narrow list they push something else out. Something else being pushed out is the decision you are actually making, so make it deliberately.

**Still unknown:** Still unknown: whether On loan is the wording people expect, or whether they would look for Out. That is a wording question for a session with somebody, not something greyscale can settle.

- Add text where possible; it works for every reader including screen readers.
- Use distinct shapes rather than same-shape different-colour icons.
- Keep the colour; you are adding, not replacing.

**You should end up with:** A named second signal for each colour-only place, preferring words where words will fit.

Worksheet fields for this step, revealed a few at a time in the app:

- Signal 1 · the place, and the second signal you added — Text works for everybody, including somebody listening. A shape works only if its outline differs from its neighbours.
- Signal 2 · the place, and the second signal you added
- Signal 3 · the place, and the second signal you added
- Signal 4 · the place, and the second signal you added

<details>
<summary>Help with this step</summary>

- **Distinct silhouette:** Two icons whose outlines differ when both are black. A circle and a circle in two colours are the same icon to a great many readers.
- **Direct label:** Putting the name on the thing itself rather than in a key elsewhere. On a chart it removes both the colour dependency and the need to remember.

Stuck starting? Take your first colour-only place and write the word that says what the colour means. Only reach for a shape if the word will not fit.

Is it enough? Each second signal would still carry its meaning if the whole screen were printed in black and white.

</details>

#### 3. Greyscale everything

- View every screen in greyscale.
- Mark anything you can no longer distinguish or interpret.
- Repair and re-check.

**You should end up with:** Every screen viewed in greyscale, anything still indistinguishable marked, and repairs checked on a second look.

**Try it with help.** Six things from a made up borrowing product. For each one, decide whether greyscale would still carry the meaning.

- A green dot and a red dot, the same size, in the same position on two cards.
  - survives greyscale — Both become the same medium grey. Nothing distinguishes them once the hue is gone.
  - **fails greyscale** — Two dots differing only by hue are the classic failure. This is the one the test exists to catch.
  - survives only because of something else on the screen — There is nothing else here. The dot is the whole signal.
- A green tick and a red cross, the same size, in the same position.
  - **survives greyscale** — A tick and a cross have different outlines, so they stay different when both are black. The colour is reinforcing rather than carrying.
  - fails greyscale — The shapes differ, which is what makes this the acceptable version of the previous line.
  - survives only because of something else on the screen — It survives on its own, without help from a label or a position.
- A three-line chart with a colour key underneath naming each line.
  - survives greyscale — The lines become three greys. The key still names three colours, and now nothing connects a name to a line.
  - **fails greyscale** — A colour key is the commonest chart failure. Labelling each line directly fixes it and removes the remembering as well.
  - survives only because of something else on the screen — The key is the something else, and the key is what stops working.
- Links in the body text, in a different colour and underlined.
  - **survives greyscale** — The underline is doing the work. In grey the links are still obviously links.
  - fails greyscale — It would if the underline were removed, which is exactly what many designs do.
  - survives only because of something else on the screen — The underline is part of the link itself rather than something elsewhere on the screen.
- Required fields shown by a red label, with a line at the top of the form saying red labels are required.
  - survives greyscale — In grey, the labels are all the same colour and the person cannot tell which were red.
  - fails greyscale — It does fail, and the interesting part is why it looked safe: an explanation was provided.
  - **survives only because of something else on the screen** — The sentence at the top makes it feel handled. It explains a distinction the reader can no longer see, which is worse than no explanation.
- A field with a red border, an icon of a triangle, and the message The date must be in the future underneath it.
  - **survives greyscale** — The message is the signal and it is text. The border and the icon are reinforcement.
  - fails greyscale — The border alone would. With the message present, nothing is lost when the colour goes.
  - survives only because of something else on the screen — The message is attached to the field rather than being a key elsewhere, which is the difference.

**Then:** Now put your own screens in greyscale and mark every line you can no longer interpret.

**What to watch for:** The required-fields line is the one to remember. A sentence explaining a colour code feels like a second signal and is not: it explains a difference the reader can no longer perceive.

Worksheet fields for this step:

- How you viewed it in greyscale — Your operating system accessibility settings, a photocopy, or a phone photograph converted to black and white. Any of the three is fine.
- Anything you still could not tell apart or interpret
- What you repaired, and the result on a second look

<details>
<summary>Help with this step</summary>

- **Greyscale:** The same screen with all colour removed. It is the fastest accessibility test there is and it catches most colour-only failures in one pass.
- **Monochrome display:** A real situation, not a hypothetical: e-ink readers, some low-power modes, printing, and photocopies of a printed page.

Stuck starting? Turn greyscale on before you open the screens, so you see them as somebody would rather than watching them change.

Is it enough? You marked what you could not interpret, not only what looked different.

</details>

#### 4. Simulate colour-vision differences

- Run a colour-vision simulation in your browser tools.
- Check red and green pairs first.
- Record what changed and what still fails.

**You should end up with:** A colour-vision simulation actually run, what became hard to tell apart, and anything left unfixed with its reason.

Worksheet fields for this step:

- Which simulations you ran, and where
- What became hard to tell apart, red and green pairs first
- Anything that still fails, and why you left it

<details>
<summary>Help with this step</summary>

- **Colour-vision difference:** Reduced ability to tell certain hues apart, most often red from green. It affects roughly one man in twelve, which is far more people than most teams assume.
- **Simulation:** A filter that shows roughly what a screen looks like with a particular colour-vision difference. It is available in browser developer tools with no account and no purchase.

Stuck starting? Open the results screen, turn on the first simulation, and look at your status colours before anything else.

Is it enough? You checked red and green pairs specifically rather than glancing at the whole screen.

</details>

#### 5. Record

- List the signals you added and where.
- Note anything you could not fix and why.
- Save the greyscale and simulation evidence.

**You should end up with:** A record of the signals you added, and one sentence on why a safe palette alone would not have been enough.

Worksheet fields for this step:

- The signals you added and where they now appear
- One sentence on why a safe palette would not have been enough on its own
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Colour-safe palette:** Hues chosen so they are less likely to be confused with one another. It lowers a risk and it carries no meaning of its own.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Finish this sentence: “a safe palette would not have helped the person who …”.

Is it enough? Your sentence names somebody a palette cannot reach: a printed page, a monochrome screen, or somebody listening.

</details>

**Save and continue.** Saved for you: The colour-only list, the signals you added, the greyscale results and the simulation results save as you type, on this device first and then online. Kept outside the app: Greyscale and simulation screenshots stay in your own folder. Note their file names in steps 3 and 4; a before-and-after pair is the most convincing evidence this module produces. What your creator sees: Your creator reads the second signal beside each place and the greyscale result. A signal that survives grey is the thing being checked, not the number of signals added. Your next action: Open Your work and choose Ready for review. The next lesson puts the mouse out of reach and tries to finish a whole task without it.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Walk each screen asking what a person would miss if every colour were the same grey.

</details>

<details>
<summary>Hint 2</summary>

For each case, add the word that states the meaning; then decide whether a shape helps as well.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Never colour alone.
Task: Find every place your design carries meaning by colour, add a second signal to each, and prove the design still works in greyscale and in a colour-vision simulation.
Challenge one thing at a time, and start with the mistake this lesson is about: “We use a colour-blind-safe palette, so we are fine.” A safe palette reduces the chance of confusion between hues and does nothing for a monochrome display, sunlight, printing, or a screen-reader user. The second signal is what carries the meaning.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the audit list and ask whether every colour-only signal is found and listed. Look at the signals list and ask whether each has a perceptible second signal. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m11-l05-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every colour-only signal is found and listed: A list covering status, charts, required fields, links and error states. Each has a perceptible second signal: A named second signal per case, preferring text where possible. A greyscale pass was run and repairs made: Greyscale renderings with failures marked and repaired. A colour-vision simulation was run and recorded: Simulation results, with red and green pairs specifically checked.

**Bring forward:** Before-and-after greyscale pairs are compact, visual and immediately convincing evidence of accessible craft. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Find the colour-only signals (~20 min): Walk your screens listing everything whose meaning depends on colour. Check status, charts, required fields, links and errors specifically.
- Add second signals (~30 min): Add text where possible; it works for every reader including screen readers. Use distinct shapes rather than same-shape different-colour icons. Keep the colour; you are adding, not replacing.
- Greyscale everything (~25 min): View every screen in greyscale. Mark anything you can no longer distinguish or interpret. Repair and re-check.
- Simulate colour-vision differences (~30 min): Run a colour-vision simulation in your browser tools. Check red and green pairs first. Record what changed and what still fails.
- Record (~15 min): List the signals you added and where. Note anything you could not fix and why. Save the greyscale and simulation evidence.

Pause after any step; save the artifact and next action.

**Free tool path.** Greyscale is free: your operating system's accessibility settings, a photocopy, or a phone photo converted to black and white. Colour-vision simulation is available in browser developer tools with no account.

### Output

A list of every place meaning is carried by colour; A second signal added to each, named; A greyscale pass with any remaining failures; A colour-vision simulation pass with results

### Checks

- Does the rule forbid using colour? Answer: No. It forbids colour being the only carrier of information. Colour reinforcing a text or shape signal is exactly what it is for.
- Why is text the most reliable second signal? Answer: Because it survives greyscale, colour-vision differences, printing and screen readers. A shape helps sighted readers; text helps everyone.
- Which three places usually fail? Answer: Chart series distinguished by colour, status shown as a coloured dot or background, and required fields marked only in red.

### Rubric and remediation

**Every colour-only signal is found and listed**

Adequate evidence: A list covering status, charts, required fields, links and error states.

- 0 — Not audited.
- 1 — Obvious cases only.
- 2 — All the usual categories checked and listed.
- 3 — As adequate, and one signal is found in a place you had not considered, such as a hover or a chart legend.

If below 2: Walk each screen asking what a person would miss if every colour were the same grey. Show at recheck: The audit list.

**Each has a perceptible second signal**

Adequate evidence: A named second signal per case, preferring text where possible.

- 0 — Colour retained as the only signal.
- 1 — Second signals added but some rely on colour to be distinguished.
- 2 — Each has a genuinely perceptible second signal.
- 3 — As adequate, and at least one case uses text so the meaning also reaches a screen reader.

If below 2: For each case, add the word that states the meaning; then decide whether a shape helps as well. Show at recheck: The signals list.

**A greyscale pass was run and repairs made**

Adequate evidence: Greyscale renderings with failures marked and repaired.

- 0 — Not run.
- 1 — Run without repairs.
- 2 — Run, failures marked and repaired.
- 3 — As adequate, and the pass covers states and messages as well as static screens.

If below 2: Convert every screen and state to greyscale and repair anything you cannot interpret. Show at recheck: The greyscale evidence.

**A colour-vision simulation was run and recorded**

Adequate evidence: Simulation results, with red and green pairs specifically checked.

- 0 — Not run.
- 1 — Run without recording specific findings.
- 2 — Run with findings recorded and repairs made.
- 3 — As adequate, and a palette pair was changed as well as a second signal added.

If below 2: Use your browser's simulation, check the status colours first, and record what becomes indistinguishable. Show at recheck: The simulation record.

### Portfolio contribution

Before-and-after greyscale pairs are compact, visual and immediately convincing evidence of accessible craft.

### Assigned resources

- R29: [web.dev: colour and contrast](https://web.dev/learn/accessibility/color-contrast) — Colour-vision deficiency and the rule against relying on colour alone. Purpose: Supplies the rule and the perceptual reasoning behind it. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. The page carries no code samples; the greyscale and simulation passes are the practical test. Fallback: R30.
- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — The use-of-colour criterion and the contrast criteria at level AA. Purpose: Names the criteria this lesson satisfies so the mapping stays traceable. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. An index of the standard, not a design method; reading a criterion is not conformance. Fallback: R41.

## Lesson 6: Everything works from a keyboard

Stable ID: m11-l06-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Complete one whole task using only a keyboard, record every point where it was impossible or unclear, and repair the worst without adding a mouse-only workaround.

**Bring forward.** Your m09 key tables and focus rules, and a rough build.

If a task cannot be completed from a keyboard, it cannot be completed by a large group of people, including many who do not consider themselves disabled.

### Learn

The criterion is blunt: all functionality available from a keyboard. It is also the one most often failed by otherwise careful products, because keyboard support is invisible to anyone using a pointer and therefore never noticed in review. Testing it takes ten minutes and is the highest-value check in this module.

Three things must hold together. Reachability: you can get to every control. Visibility: you can see where you are at every step. Order: the sequence follows the visual and logical order rather than the order elements happen to appear. A design failing any one of them fails the task, even if the other two are perfect.

Keyboard traps are the most serious failure because they end the session. A custom dropdown that captures the arrow keys and never releases focus, a dialogue with no escape, an embedded widget you can enter and not exit: each strands the person entirely. Check every custom control specifically for whether you can leave it.

Native controls mostly work; custom ones mostly do not, unless someone specified them. That is what your m09 key tables were for, and this lesson is where they meet reality — testing what was built against what you wrote.

**Common misconception.** “Keyboard use is a niche case.” It includes people with motor impairments, people using switch devices and voice control that maps to keyboard interaction, many screen-reader users, anyone with a broken trackpad, and a large number of fast, experienced users. It is also the substrate other assistive technologies build on.

### Worked example

The booking task was attempted with the mouse unplugged. Four failures. The date picker could be reached and not operated: arrow keys did nothing, so no date could be chosen — a total block, repaired against the m09 key table. The filter panel trapped focus, with escape doing nothing. The remove control, hover-only, could not be reached at all. Focus was invisible on the tinted review panel. The repair addressed the date picker first, because it stopped the task entirely; the trap was recorded as the second, and the write-up noted that a mouse-only workaround was explicitly not acceptable as a fix.

#### Everything works from a keyboard

Complete one whole task using only a keyboard, record every point where it was impossible or unclear, and repair the worst without adding a mouse-only workaround.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Unplug the mouse or put it out of reach, and use the tab, arrow, enter, space and escape keys. If your prototype is a local HTML file, this test is fully available with no tooling.

- Starting material: Your key tables and, if possible, a rough running page.
- Create HaruCourse/Practice/m11-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Prepare the test

- Open your prototype and put the mouse out of reach.
- Have your m09 key tables beside you.

**You should end up with:** The thing you are testing, the one whole task, and your Module 9 key tables to hand, with the mouse genuinely out of reach.

Worksheet fields for this step:

- What you are testing, and where it runs
- The one whole task you will attempt — Whole means from the first screen to the outcome. Half a task hides the failures in the second half.
- Which Module 9 key tables you have beside you

<details>
<summary>Help with this step</summary>

- **Keyboard-only:** Tab and shift-tab to move, arrows inside a group, enter or space to act, escape to leave. No pointer of any kind, including a trackpad.
- **Key table:** The list you wrote in Module 9 saying which key does what in each control. It is the specification the repair is measured against.

Stuck starting? Put the mouse where you cannot reach it without standing up. Imagining the test does not produce the finding.

Is it enough? The task you named ends in an outcome, and the mouse is genuinely out of reach rather than just unused.

</details>

#### 2. Attempt the task

**See it first.** Made-up example. Attempting a borrowing task with the mouse away, and nearly recording the wrong failure as the worst one.

- **What I found first:** Focus was invisible on the tinted review panel. I wrote it down immediately, because it was annoying and I noticed it at once.
- **What I found next:** The date picker took focus and then nothing happened. Arrows did nothing, enter did nothing, typing did nothing. No date could be chosen at all.
- **The thing I nearly got wrong:** I had the invisible focus at the top of my list because it was the first thing that irritated me. The date picker is the one that ends the task.
- **How I decided:** I asked of each failure whether the task could still finish. Invisible focus is slow and survivable. No date means no booking, ever, by anybody without a pointer.
- **What I wrote:** Date picker first, as a total block, with the key table rows beside it. Invisible focus second, as a severe difficulty rather than a block.

**The wrong turn:** The wrong turn is ranking by how irritating each failure was during your own attempt. Irritation tracks how often you met the problem, not whether anybody can finish.

**What it costs:** Ranking by blocking means the visible, annoying failure waits while the invisible structural one gets fixed first. That will feel wrong to anybody who watched your attempt.

**Still unknown:** Still unknown: whether somebody using voice control meets the same wall on the date picker. Voice often maps onto keyboard operation, so it may well, and I have not tested it and am not claiming it.

- Complete one full task using only the keyboard.
- Record every point where you could not proceed or lost your place.
- Note anywhere focus disappeared or the order jumped.

**You should end up with:** A written record of the attempt as it happened, with every blocked point and every place focus vanished or jumped.

**Try it with help.** Six things observed during a made up keyboard-only attempt at a borrowing task. For each one, decide how badly it matters.

- Focus lands on the date field. Arrows, typing and enter all do nothing, and there is no other way to set a date.
  - **a total block** — No date means no booking, by this route, ever. Nothing else on the list outranks a step the task cannot get past.
  - a severe difficulty — A difficulty implies a slow or unpleasant route to the outcome. There is no route here at all.
  - works as intended — Focus arriving is not the same as the control working. This is the failure that looks like success in a tab-order check.
- Focus is invisible on the tinted review panel, though every control there still responds to the keyboard.
  - a total block — The task can still be finished, by counting presses and watching what changes. It is horrible and it is possible.
  - **a severe difficulty** — Working blind for a whole panel is exhausting and error-prone, and it does not end the task. It ranks below anything that does.
  - works as intended — Being able to see where you are is part of the control working, not an extra.
- The filter panel takes focus, tab cycles inside it forever, and escape does nothing.
  - **a total block** — The person cannot even leave and try another way. A trap is the one failure that removes the ability to abandon the attempt.
  - a severe difficulty — Reloading the page and losing everything entered is not a difficult route to the outcome. It is the absence of one.
  - works as intended — Cycling within a panel is correct only while there is also a way out.
- Inside the collection-branch group, tab moves to the group and arrows move between the three branches.
  - a total block — Every branch can be reached and chosen. Nothing is prevented.
  - a severe difficulty — This is the expected pattern for a group of related choices, and it is what your Module 9 key table asks for.
  - **works as intended** — One tab stop for the group, arrows within it. Recording the things that work is part of the test, so the table can be marked honestly.
- The remove control appears only on hover, so it never receives focus and cannot be reached at all.
  - **a total block** — A control that does not exist without a pointer cannot be operated without one. The person cannot correct a mistake.
  - a severe difficulty — There is no slower route to removal. There is no route.
  - works as intended — Hover is a pointer event. Anything that exists only on hover is invisible to every other way of using the product.
- After the date panel closes, the next tab goes to the footer instead of back to the date field.
  - a total block — Shift-tab gets the person back, once they work out what happened. The task survives.
  - **a severe difficulty** — Losing your place after every panel makes a five-field form exhausting, and people abandon it for that reason. It is still not a block.
  - works as intended — Focus should return to the control that opened the panel. Landing in the footer is a defect with a clear expected behaviour.

**Then:** Now mark each of your own findings the same way, and let that ranking decide which one you repair in step 4.

**What to watch for:** The two that get misranked are the invisible focus and the trap. Invisible focus is the one you notice most and it does not stop anybody; a trap is quiet until you try to leave, and it strands the person completely.

Worksheet fields for this step:

- What happened, step by step, keys and all — Tab, arrows, enter, space, escape. Say which key you pressed and what the screen did.
- Every point where you could not proceed
- Every point where focus vanished or the order jumped

<details>
<summary>Help with this step</summary>

- **Focus:** Where the keyboard is pointing at this moment. If you cannot see it, you are working blind however well the controls respond.
- **Reachable but not operable:** Focus lands on a control and no key does anything useful. It is the failure that looks like success, because tab order seems fine.

Stuck starting? Start the task and write the first key you press before you press it. Keep writing as you go.

Is it enough? Somebody else could repeat your attempt from the log, key for key.

</details>

#### 3. Hunt for traps

**See it first.** Made-up example. Hunting for traps in a borrowing product, and finding one only because I stopped testing the happy way round.

- **What I did at first:** I entered the filter panel, used it, and left it by pressing the Apply button. Out cleanly, no trap, on to the next control.
- **Why that proved nothing:** I left by the route the panel was designed around. A trap is about the routes nobody designed: tab past the end, and escape.
- **What happened on the second try:** I entered the panel and pressed tab until I ran out of controls. Focus went back to the first control in the panel and stayed there. Tab could never leave.
- **And escape:** Escape did nothing at all. With no pointer, the only way out of that panel was to reload the page and lose everything already entered.
- **What I recorded:** A trap, with the two routes tried and the two results, and the expected behaviour from my key table: escape closes and returns focus to the control that opened it.

**The wrong turn:** The wrong turn is leaving each control by its intended exit. Everything passes, because you are testing the path you designed instead of the paths a person actually takes.

**What it costs:** Trying to leave every control two wrong ways is slow and feels pedantic, and most controls will be fine. The one that is not would have stranded somebody completely.

**Still unknown:** Still unknown: whether the panel also traps a screen reader, which has navigation modes of its own. That belongs to the listening lesson, not this one.

- Enter every custom control and try to leave it with tab and escape.
- Record anything that captures focus.
- Check dialogues, pickers, menus and embedded content.

**You should end up with:** Every custom control entered and left on purpose, with anything that captured focus written down.

Worksheet fields for this step:

- Each custom control you entered, and how you got out — Dialogues, pickers, menus, anything embedded. Try tab first, then escape.
- Anything that captured focus and would not release it

<details>
<summary>Help with this step</summary>

- **Keyboard trap:** A place you can move into and cannot move out of with the keyboard. It is the worst kind of failure, because the person cannot even leave and try something else.
- **Custom control:** Anything built rather than taken from the browser: a date picker, a menu, a slider, a dialogue. Keyboard support usually disappears exactly here.

Stuck starting? Enter your first custom control, then press tab repeatedly and see where focus goes. Then try escape.

Is it enough? Every custom control has two exit routes recorded, including the ones that worked.

</details>

#### 4. Repair the worst

- Fix the failure that most completely blocks the task.
- Use your key table as the specification for the fix.
- Do not accept a pointer-based workaround as a repair.

**You should end up with:** The most completely blocking failure repaired against your key table, with what now happens written down.

Worksheet fields for this step:

- Which failure you repaired, and why it was the worst — Worst means most completely stops the task, not most irritating.
- The key table rows you used as the specification for the fix
- What happens now when you attempt the same point with the keyboard

<details>
<summary>Help with this step</summary>

- **Total block:** The task cannot be finished by this route at all. It outranks anything slow, confusing or unpleasant.
- **Pointer workaround:** Fixing a keyboard failure by suggesting the person use a mouse. It is not a repair; it is a restatement of the barrier.

Stuck starting? Take the failure that ends the task and open the key table row that says what should happen instead.

Is it enough? The repair is specified by a key table row, and no part of it assumes a pointer.

</details>

#### 5. Record against the tables

- Mark each key-table row satisfied or failed.
- List failures as build defects with expected behaviour.
- Save the results and the repair.

**You should end up with:** Every key table row marked satisfied or failed, and the remaining failures written as defects with expected behaviour.

Worksheet fields for this step:

- Each key table row marked satisfied or failed
- The remaining failures written as defects, each with the expected behaviour — Expected behaviour comes from your key table, so a builder does not have to guess what you wanted.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Defect:** A written statement of what happens, what should happen, and how to reproduce it. Without the middle part a builder has to guess your intention.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Go down your key table row by row and mark each one from what you actually saw, not from what you intended.

Is it enough? Every failure carries the behaviour you expected, taken from the table rather than invented now.

</details>

**Save and continue.** Saved for you: Your attempt log, the traps, the repair and the table results save as you type, on this device first and then online. Kept outside the app: The build stays on your computer. If you recorded the attempt or photographed the screen, keep it in your own folder and note the file name in step 2. What your creator sees: Your creator reads the attempt log and which failure you ranked first. Ranking a dull structural block above a visible irritation is the judgement being looked for. Your next action: Open Your work and choose Ready for review. The next lesson takes the same keyboard route through your forms.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Put the mouse out of reach and try again from the start, writing down each step.

</details>

<details>
<summary>Hint 2</summary>

Go through each custom control and try to enter, operate and leave it. Record which of the three fails.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Everything works from a keyboard.
Task: Complete one whole task using only a keyboard, record every point where it was impossible or unclear, and repair the worst without adding a mouse-only workaround.
Challenge one thing at a time, and start with the mistake this lesson is about: “Keyboard use is a niche case.” It includes people with motor impairments, people using switch devices and voice control that maps to keyboard interaction, many screen-reader users, anyone with a broken trackpad, and a large number of fast, experienced users. It is also the substrate other assistive technologies build on.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the attempt record and ask whether A full task was attempted with no pointer. Look at the categorised list and ask whether unreachable, unoperable and trapping controls are listed. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m11-l06-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** A full task was attempted with no pointer: A record of a complete keyboard-only attempt, including where it stopped. Unreachable, unoperable and trapping controls are listed: A categorised list distinguishing the three failure kinds. The most blocking failure was repaired properly: A repair implementing the key table, with no pointer-based workaround. Key-table rows are marked satisfied or failed: Your m09 tables annotated with results per row and defects named.

**Bring forward:** A keyboard-only walkthrough with named failures and one repair is direct evidence of accessible practice, and it costs an afternoon. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Prepare the test (~20 min): Open your prototype and put the mouse out of reach. Have your m09 key tables beside you.
- Attempt the task (~30 min): Complete one full task using only the keyboard. Record every point where you could not proceed or lost your place. Note anywhere focus disappeared or the order jumped.
- Hunt for traps (~25 min): Enter every custom control and try to leave it with tab and escape. Record anything that captures focus. Check dialogues, pickers, menus and embedded content.
- Repair the worst (~30 min): Fix the failure that most completely blocks the task. Use your key table as the specification for the fix. Do not accept a pointer-based workaround as a repair.
- Record against the tables (~15 min): Mark each key-table row satisfied or failed. List failures as build defects with expected behaviour. Save the results and the repair.

Pause after any step; save the artifact and next action.

**Free tool path.** Unplug the mouse or put it out of reach, and use the tab, arrow, enter, space and escape keys. If your prototype is a local HTML file, this test is fully available with no tooling.

### Output

A recorded keyboard-only attempt at one full task; A list of unreachable, unoperable and trapping controls; One repair addressing the most blocking failure; A statement of which key tables were satisfied and which were not

### Checks

- Why is reachability not enough? Answer: Because a control you can reach and cannot see or operate still blocks the task. Visibility of focus and a sensible order are part of the same requirement.
- Why are keyboard traps the most serious failure? Answer: Because they end the session entirely. A person who enters a control and cannot leave it has no route forward and no route back.
- Where does keyboard support usually disappear? Answer: In custom controls — pickers, dropdowns, menus, embedded widgets — which have no behaviour except what someone specified and built.

### Rubric and remediation

**A full task was attempted with no pointer**

Adequate evidence: A record of a complete keyboard-only attempt, including where it stopped.

- 0 — Not attempted, or attempted partially.
- 1 — Attempted with occasional pointer use.
- 2 — A full attempt with the pointer unavailable, recorded step by step.
- 3 — As adequate, and a second task was attempted to check the failures generalise.

If below 2: Put the mouse out of reach and try again from the start, writing down each step. Show at recheck: The attempt record.

**Unreachable, unoperable and trapping controls are listed**

Adequate evidence: A categorised list distinguishing the three failure kinds.

- 0 — Failures described generally.
- 1 — Listed without distinguishing the kinds.
- 2 — All three kinds distinguished with specific controls named.
- 3 — As adequate, and every custom control was explicitly checked for trapping.

If below 2: Go through each custom control and try to enter, operate and leave it. Record which of the three fails. Show at recheck: The categorised list.

**The most blocking failure was repaired properly**

Adequate evidence: A repair implementing the key table, with no pointer-based workaround.

- 0 — Repair offers a mouse alternative instead.
- 1 — Repaired partially, leaving the control operable but not conventional.
- 2 — Repaired to the key table, keyboard-only.
- 3 — As adequate, and the repair was re-tested with the pointer unavailable.

If below 2: Take the m09 key table for that control and implement each row; a workaround does not satisfy the criterion. Show at recheck: The repair and re-test.

**Key-table rows are marked satisfied or failed**

Adequate evidence: Your m09 tables annotated with results per row and defects named.

- 0 — Tables not used.
- 1 — Overall pass or fail without row detail.
- 2 — Row-level results with defects stated.
- 3 — As adequate, and untested rows are marked untested rather than assumed.

If below 2: Walk each row of the table against the build and mark the result. Show at recheck: The annotated tables.

### Portfolio contribution

A keyboard-only walkthrough with named failures and one repair is direct evidence of accessible practice, and it costs an afternoon.

### Assigned resources

- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — The patterns for the custom controls you use, read for expected keys and focus behaviour. Purpose: Supplies the specification your repair implements. Effort: 45–90 selected min. Free reading, no account. Verified 2026-09-06; the pages carry no date. Guidance rather than a conformance standard, covering semantics and keys only. Fallback: R14.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The keyboard access check. Purpose: Gives the self-runnable procedure for the reachability and focus parts of this test. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. Preliminary only; passing is not conformance and is not testing with disabled people. Fallback: R28.

## Lesson 7: Forms that do not exclude

Stable ID: m11-l07-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Rebuild one form so every field is labelled, grouped and described accessibly, errors are announced and locatable, and nothing depends on placeholder text or colour.

**Bring forward.** Your m08 field table and the m07 error wording.

Forms are where accessibility failures cost money directly: a person who cannot complete the form cannot buy, book or apply.

### Learn

A label has to be associated with its field, not merely near it. Visually adjacent text is not a label to a screen reader, which is why a form that looks perfectly clear can announce a series of unlabelled edit fields. The assigned tutorial covers the association explicitly, and it is the single most common failure in forms.

Grouping matters when several fields answer one question — a date split into three, a set of radio options, an address block. Without a group, each field is announced alone and the question they belong to is lost. With one, the person hears the question then the options, which is how the form reads visually.

Instructions must be associated too. A hint sitting above a field is read at the wrong time, or not at all, unless it is tied to the field. That association is what makes the m08 rule — help before the mistake — work for people who are not reading the layout.

Errors have three obligations here: name the fix, be reachable directly from a summary, and be announced when they appear rather than silently inserted. This is the same wording you already wrote; the difference is that this lesson makes it reach people who are not looking at the screen.

**Common misconception.** “The form is accessible because it uses standard fields.” Standard fields help and do not supply labels, grouping, instructions or error association. Those are decisions someone has to make, and by default they are not made.

### Worked example

The booking form was rebuilt. Each field gained an associated label, including the ones whose labels had been visual only. The date fields were grouped under one question, and the group name was announced with them. The phone hint moved under the label and was associated with the field. Errors were rewritten to name the fix, a summary at the top linked to each problem field, and the summary was announced when it appeared. The placeholder text disappeared entirely; nothing in the form now depends on it, and one field was removed because no decision needed it.

#### Forms that do not exclude

Rebuild one form so every field is labelled, grouped and described accessibly, errors are announced and locatable, and nothing depends on placeholder text or colour.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A local HTML file with proper labels, groups and hints costs an evening and lets you check the behaviour. On paper, specify each association explicitly and mark the announcement behaviour as untested.

- Starting material: Your field table and error messages.
- Create HaruCourse/Practice/m11-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and audit

- Read the assigned sections on labels, grouping, instructions and errors.
- Audit your form against each: label, hint, error, grouping.

**You should end up with:** One form audited field by field for a real label, a hint, an error message and a group.

Worksheet fields for this step:

- Which form you are rebuilding, and how many fields it has
- For each field: does it have a real label, a hint, an error message, and a group? — Four marks per field. A word sitting near the box is not a label until something joins the two.

<details>
<summary>Help with this step</summary>

- **Associated label:** A label joined to its field, so that reaching the field announces the label and tapping the label moves into the field. A word sitting beside a box is not this.
- **Standard field:** A plain text box, checkbox or select taken from the browser. It brings keyboard behaviour with it and brings no label, hint, grouping or error text at all.

Stuck starting? List your fields down the page and put four columns beside them before you judge anything.

Is it enough? Every field has four marks, including the ones you are confident about.

</details>

#### 2. Associate everything

**See it first.** Made-up example. Rebuilding the labels on a tool-library request form, and trusting the field type to do the work.

- **What I believed:** The form uses ordinary text boxes and checkboxes rather than anything custom, so I assumed the labelling was already sound.
- **What I actually checked:** I clicked each visible label word. On four of the six fields, nothing happened: the word was text sitting above a box, with nothing joining them.
- **Why that matters more than it looks:** Somebody moving through the form by keyboard arrives at an unnamed box. The label is on screen, a line above, and it is not attached to anything.
- **The one that surprised me:** The three date boxes each had a small label — Day, Month, Year — and nothing anywhere said what date was being asked for. On screen the heading above them made it obvious. Field by field it did not exist.
- **What I changed:** Four labels joined to their fields, and the three date boxes put into a group named Date you want to collect the tool.

**The wrong turn:** The wrong turn is treating standard fields as if they carried labelling with them. They carry keyboard behaviour, which is the part people notice, and nothing else.

**What it costs:** Grouping the date boxes means the group name is announced before each of the three, which is more words than a sighted reader needs. That repetition is the cost of the boxes making sense at all.

**Still unknown:** Still unknown: whether the group name reads well when announced, or whether it is too long. That needs the listening lesson and a real build.

- Give every field an associated label and hint.
- Group fields that answer one question, and name the group.
- Remove any placeholder that was carrying meaning.

**You should end up with:** Every field with an associated label and hint, related fields grouped under one named question, and no placeholder left carrying meaning.

Worksheet fields for this step:

- Every field whose label you associated, and what it now says
- Fields that answer one question together, and the name of the group
- Every placeholder that was carrying meaning, and where that meaning went — A placeholder disappears as soon as somebody types. Anything it was telling them has to move to a label or a hint.

<details>
<summary>Help with this step</summary>

- **Group:** Several fields that together answer one question, with the question named once. Without it a person hears three boxes and no idea what they are for.
- **Hint:** The extra instruction a person needs before they type: the format, the limit, where to find the number. It belongs before the field and joined to it.

Stuck starting? Click each visible label word. If the cursor does not land in the field, the label is not attached.

Is it enough? No meaning in the form now lives in text that disappears when somebody types.

</details>

#### 3. Rebuild the errors

- Rewrite each error to name the fix.
- Add a summary at the top that links to each problem field.
- Specify that the summary is announced when it appears.

**You should end up with:** Each error rewritten to name the fix, a summary at the top linking to each problem field, and a stated announcement behaviour.

**Try it with help.** Six error messages from a made up tool-library form. For each one, decide what it does for the person reading it.

- Invalid input.
  - names the fix — Nothing here says what to change or what would be accepted. The person is told only that something is wrong.
  - **describes the failure only** — It states that a rule was broken, without saying which rule. This is the commonest error message there is.
  - blames the person — It is impersonal rather than accusing. Useless, and not unkind.
- The collection date must be today or later.
  - **names the fix** — The person knows what to type next. Naming the rule and naming the fix are the same act here.
  - describes the failure only — It goes further than that: the rule is stated in a form the person can act on immediately.
  - blames the person — It describes the field rather than the person, which is the whole difference.
- You did not fill this in correctly.
  - names the fix — Correctly is doing no work. The person still does not know what correct would be.
  - describes the failure only — It describes the person rather than the field, which is the extra thing it does.
  - **blames the person** — You is the word to notice. It adds no information and makes a form feel like an accusation.
- Enter the phone number as ten digits, with no spaces.
  - **names the fix** — Format, length and what to leave out. The person can act without guessing.
  - describes the failure only — It does not describe a failure at all. It states what to do.
  - blames the person — Nothing in it is about the person.
- Please complete the fields marked in red.
  - names the fix — It names a location that is unavailable to a good many readers, so for them it names nothing at all.
  - **describes the failure only** — It says something is missing, and points at it by colour, which is exactly what the previous lesson ruled out.
  - blames the person — It is polite. Politeness is not the same as being usable.
- Something went wrong. Please try again.
  - names the fix — Try again is an instruction to repeat the thing that just failed, so it is not a fix.
  - **describes the failure only** — It reports that a failure happened and nothing about it. The person has no way to do anything different.
  - blames the person — It carefully blames nobody, which is its only virtue.
- The notes field holds 200 characters. You have used 340.
  - **names the fix** — The limit and the current figure together tell the person exactly how much to remove.
  - describes the failure only — It would be, if it stopped at the limit. The second number is what makes it actionable.
  - blames the person — You appears and is doing real work here: it reports a count rather than a judgement.

**Then:** Now rewrite each of your own error messages so it names the fix, and check none of them points at a colour.

**What to watch for:** The red one catches people out because it is polite and specific-sounding. Pointing at a colour is pointing at nothing for a large group of readers, and it is easy to write without noticing.

Worksheet fields for this step:

- Each error message, rewritten to name the fix
- What the summary at the top says, and what each line links to
- When the summary is announced, and what happens to focus — Somebody who cannot see the top of the form has to be told the summary appeared, not left to find it.

<details>
<summary>Help with this step</summary>

- **Error summary:** A short list at the top of the form naming what went wrong, where each line takes the person to the field concerned.
- **Announced:** The new message is spoken, rather than silently appearing. A message nobody is told about is a message for sighted readers only.

Stuck starting? Take your worst error message and ask what the person types next. If you cannot answer, the message does not name a fix.

Is it enough? No message reports only that something is wrong, and none of them points at a colour or a position.

</details>

#### 4. Test what you can

**See it first.** Made-up example. Testing the rebuilt tool-library form, and writing the word tested against something I had only specified.

- **What I could actually do:** Tab through the form in order, confirm each label reached me before its box, submit with an empty required field, and see the summary appear at the top.
- **What I wrote at first:** “Errors announced and locatable — tested.” It was in the specification, the summary appeared, and it felt like the same thing.
- **What I had not done:** Listened. I had seen the summary appear on screen. Whether anybody is told it appeared is a different behaviour, and I had no way to check it that day.
- **What I wrote instead:** Two lines. Tested: tab order, label association, summary appears and its links move focus to the right field. Untested: whether the summary is announced when it appears.
- **What that changed later:** The untested line went straight into the handover as a question for the build, instead of being discovered months later by somebody who could not find the errors.

**The wrong turn:** The wrong turn is letting seeing stand in for the behaviour you specified. The summary appearing on screen is exactly what a sighted check can confirm, and the criterion is about the person who is not looking at the screen.

**What it costs:** Splitting the line into tested and untested makes your record look less finished than your colleagues’ records. It is the difference between a specification and a claim.

**Still unknown:** Still unknown: whether the summary is announced at all in a real build. That is the next lesson’s work, and this lesson records it as open rather than guessing.

- Tab through the form and confirm labels and hints are reachable in order.
- Trigger errors and check the summary and links behave.
- Record anything you cannot verify without a build.

**You should end up with:** A tab through the form, errors triggered deliberately, and a named list of what you could not verify without a build.

Worksheet fields for this step:

- What you found tabbing through the form, in order
- What happened when you triggered errors on purpose
- What you could not check without a real build, named one by one — Announcement behaviour is the usual one. Write it down rather than assuming it works.

<details>
<summary>Help with this step</summary>

- **Specified but untested:** Something written down as required behaviour that nobody has yet seen working. It is honest and it is not evidence.
- **Triggering an error:** Submitting bad input on purpose. Forms are almost always tested by people who fill them in correctly, which is why error paths stay broken.

Stuck starting? Submit the form with one required field empty, and watch what happens before reading any of your own notes.

Is it enough? Your untested list names specific behaviours rather than saying testing is incomplete.

</details>

#### 5. Record

- Update the field table with associations and error text.
- List the untested behaviour explicitly.
- Save the table and the test notes.

**You should end up with:** The Module 8 field table updated, and one sentence separating what you verified from what is specified and untested.

Worksheet fields for this step:

- What changed in your Module 8 field table
- One sentence separating what you verified from what is specified and untested
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Field table:** The per-field record from Module 8. Labels, hints and error text belong in it, so an engineer builds from one source rather than from three screenshots.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Open your field table and add three columns: label, hint, error text.

Is it enough? Somebody could build the form from the table alone, and would know which behaviours nobody has seen working.

</details>

**Save and continue.** Saved for you: Your audit, the associations, the rewritten errors and the test results save as you type, on this device first and then online. Kept outside the app: A local build of the form stays on your computer. Note the folder in step 1; nothing about the form is uploaded from here. What your creator sees: Your creator reads the error rewrites and the untested list. A short untested list written in specifics is a better result than a long one written in generalities. Your next action: Open Your work and choose Ready for review. The next lesson writes the words that stand in for every image on these screens.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

List each field and write how its label and hint are associated. Anything ambiguous will be built ambiguously.

</details>

<details>
<summary>Hint 2</summary>

Find every place several fields answer one question and specify the group and its name.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Forms that do not exclude.
Task: Rebuild one form so every field is labelled, grouped and described accessibly, errors are announced and locatable, and nothing depends on placeholder text or colour.
Challenge one thing at a time, and start with the mistake this lesson is about: “The form is accessible because it uses standard fields.” Standard fields help and do not supply labels, grouping, instructions or error association. Those are decisions someone has to make, and by default they are not made.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the field table and ask whether every field has an associated label and hint. Look at the grouping specification and ask whether related fields are grouped and the group is named. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m11-l07-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every field has an associated label and hint: A field table specifying the association for each label and hint, with no meaning left in placeholders. Related fields are grouped and the group is named: Groups specified for multi-field questions with the shared question named. Errors name fixes and a summary links to each field: Rewritten errors plus a linked summary with announcement behaviour specified. Untested behaviour is recorded rather than assumed: A list of what was checked in a build and what could not be.

**Bring forward:** An accessible field table is directly usable by an engineer and shows the level of specification a designer can own. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Read and audit (~25 min): Read the assigned sections on labels, grouping, instructions and errors. Audit your form against each: label, hint, error, grouping.
- Associate everything (~30 min): Give every field an associated label and hint. Group fields that answer one question, and name the group. Remove any placeholder that was carrying meaning.
- Rebuild the errors (~25 min): Rewrite each error to name the fix. Add a summary at the top that links to each problem field. Specify that the summary is announced when it appears.
- Test what you can (~25 min): Tab through the form and confirm labels and hints are reachable in order. Trigger errors and check the summary and links behave. Record anything you cannot verify without a build.
- Record (~15 min): Update the field table with associations and error text. List the untested behaviour explicitly. Save the table and the test notes.

Pause after any step; save the artifact and next action.

**Free tool path.** A local HTML file with proper labels, groups and hints costs an evening and lets you check the behaviour. On paper, specify each association explicitly and mark the announcement behaviour as untested.

### Output

A field table with associated labels, hints and error text; Grouped fields where several answer one question; An error summary that links to each problem field; A statement of what was verified and what remains untested

### Checks

- Why is nearby text not a label? Answer: Because the association has to be explicit for assistive technology. Visually adjacent text leaves the field announced as an unlabelled input.
- When do fields need grouping? Answer: When several answer one question — a split date, a radio set, an address. Without a group each field is announced alone and the question is lost.
- What does an error summary need to do? Answer: Name the fix, link to each problem field, and be announced when it appears. A silent summary is invisible to the people who most need it.

### Rubric and remediation

**Every field has an associated label and hint**

Adequate evidence: A field table specifying the association for each label and hint, with no meaning left in placeholders.

- 0 — Visual labels only, or placeholders used as labels.
- 1 — Labels associated but hints left unassociated.
- 2 — Both associated for every field.
- 3 — As adequate, and a field was removed because it served no decision.

If below 2: List each field and write how its label and hint are associated. Anything ambiguous will be built ambiguously. Show at recheck: The field table.

**Related fields are grouped and the group is named**

Adequate evidence: Groups specified for multi-field questions with the shared question named.

- 0 — No grouping.
- 1 — Visual grouping only.
- 2 — Groups specified with names.
- 3 — As adequate, and the group name is the question rather than a section label.

If below 2: Find every place several fields answer one question and specify the group and its name. Show at recheck: The grouping specification.

**Errors name fixes and a summary links to each field**

Adequate evidence: Rewritten errors plus a linked summary with announcement behaviour specified.

- 0 — Errors describe the problem only.
- 1 — Fixes named but no linked summary.
- 2 — Fixes, summary links and announcement all specified.
- 3 — As adequate, and the specification says what happens when several fields fail at once.

If below 2: Rewrite each error as the action to take, then add the summary and its links. Show at recheck: The error specification.

**Untested behaviour is recorded rather than assumed**

Adequate evidence: A list of what was checked in a build and what could not be.

- 0 — Behaviour claimed without testing.
- 1 — Testing implied without a list.
- 2 — Verified and unverified items both listed.
- 3 — As adequate, and the list names which untested item is most likely to fail.

If below 2: Split your claims into two lists: observed in a build, and specified but untested. Show at recheck: The two lists.

### Portfolio contribution

An accessible field table is directly usable by an engineer and shows the level of specification a designer can own.

### Assigned resources

- R14: [W3C: forms tutorial](https://www.w3.org/WAI/tutorials/forms/) — Labels, grouping controls, instructions, validating input and user notifications. Purpose: Supplies every requirement this lesson applies to the form. Effort: 60–90 selected min. Free reading, no account. Verified 2026-09-06. It covers form accessibility rather than form content or persuasion; implemented behaviour still needs testing in a build. Fallback: R10.
- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — The criteria on labels, instructions, error identification and error suggestion at level A and AA. Purpose: Names the criteria your rebuilt form is meeting so the mapping stays traceable. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. An index of the standard; reading it is not conformance. Fallback: R41.

## Lesson 8: Images, icons and the words that replace them

Stable ID: m11-l08-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Write alternative text for every image and icon in your design, deciding for each whether it carries information, is decorative, or is itself a control.

**Bring forward.** Your m08 screens, icons and any charts.

Alternative text is writing, not markup. Written badly it is noise; written well it is the only version of the image some people get.

### Learn

The first decision is what the image is for. An informative image adds something the surrounding text does not: a photograph showing what a class involves, a diagram carrying a relationship. Its alternative text must carry that same information in words, which is usually shorter than people expect and never begins with “image of”.

Decorative images add mood and no information, and announcing them wastes the reader's time. They take empty alternative text so assistive technology skips them entirely. The mistake is describing them helpfully, which produces a screen reader announcing “abstract green background pattern” between the price and the button.

A functional image is a control: an icon button, a logo linking home. Its alternative text is the action or destination — “Remove from shortlist”, “Home” — never the shape. This is the same rule as your m08 action labels: the person needs the outcome, not the picture.

Text baked into an image is invisible to screen readers, to translation, to search and to anyone who enlarges it. Prices, dates and offers set inside a promotional image are the common case, and the alternative text has to reproduce all of it — which is usually the argument for not putting the text in the image at all.

**Common misconception.** “Every image needs alt text describing it.” Every image needs a decision. Decorative images need empty alt text; describing them makes the experience worse, and long descriptions of photographs that add nothing are a common way of appearing to do the work.

### Worked example

Fourteen images and icons were classified. Two were informative: the class photograph, whose alt text became “Six people at a pottery wheel in a bright studio”, and the availability chart, whose alternative text carried the counts. Nine were decorative and took empty alt text, including the background pattern that had previously been announced. Three were functional: the shortlist heart became “Add to shortlist”, the logo became “Home”, and the filter icon became “Filters”. One promotional image had the price set inside it; the text was moved out of the image entirely rather than duplicated in alt text.

#### Images, icons and the words that replace them

Write alternative text for every image and icon in your design, deciding for each whether it carries information, is decorative, or is itself a control.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Writing. If your prototype is a local HTML file you can add the alt attributes and check them; on paper, write the alt text beside each image in the specification.

- Starting material: Your screens with their images and icons.
- Create HaruCourse/Practice/m11-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Inventory and classify

**See it first.** Made-up example. Classifying the images on a tool-library screen, and describing everything because describing felt thorough.

- **What I did first:** I wrote alt text for all fourteen images. Every one got a careful sentence, including the paper-texture background and the small divider flourish.
- **What that produced:** Read aloud, the screen opened with a description of a paper texture, then a decorative rule, then finally the name of the tool. Three sentences of nothing before the content.
- **What I had confused:** Effort with usefulness. Describing decoration is more work than skipping it, and every word of it is in the reader’s way.
- **The question I used instead:** If this image vanished, would the reader have lost anything? Paper texture: no. Divider: no. Photograph of the drill in use: yes, it shows the size against a hand.
- **What I ended with:** Two informative, nine decorative and marked to be skipped, three functional. The screen now reads as its content rather than as an inventory of its graphics.

**The wrong turn:** The wrong turn is describing everything, because it looks like the thorough option and it is the one most guidance appears to ask for. Every unnecessary description is noise the reader cannot skip.

**What it costs:** Marking nine images to be skipped means a reader is never told the page has a photograph of a workshop. That is the right trade, and it is a real loss of atmosphere.

**Still unknown:** Still unknown: whether the drill photograph is doing what I think. I believe it conveys scale; nobody has told me that, and the alt text I wrote assumes it.

- List every image, icon and illustration in your screens.
- Classify each informative, decorative or functional.
- Mark any image containing text.

**You should end up with:** Every image, icon and illustration listed and classified as informative, decorative or functional, with any text inside an image marked.

**Try it with help.** Six images from a made up tool-library screen. For each one, decide which of the three kinds it is.

- A photograph of the cordless drill being held, which is the only thing showing how big it is.
  - **informative** — The scale is available nowhere else on the screen, so the words have to carry it. That is what makes it informative rather than illustrative.
  - decorative — It would be, if the dimensions were written out beside it. They are not, so removing it loses something.
  - functional — Nothing happens when you press it. It is not a control.
- A pale paper texture behind the whole page.
  - informative — Nobody needs to know the background has a texture in order to borrow a drill.
  - **decorative** — It is marked so it is skipped in silence. Describing it puts a sentence of nothing in front of the content.
  - functional — It does nothing when pressed and leads nowhere.
- A heart outline in the corner of each card, which saves the item to a list.
  - informative — The shape itself tells the reader nothing worth knowing. What it does is the whole point.
  - decorative — Skipping it would leave the person unable to find the save control at all.
  - **functional** — The words become the action rather than the picture: Add to shortlist, not Heart icon.
- The library logo in the top corner, which takes you to the home page when pressed.
  - informative — The look of the logo is not information anybody needs to act on.
  - decorative — It is a control, so skipping it removes the way back to the start.
  - **functional** — It takes the name of its destination. Home is more use to the reader than Northside Tool Library logo.
- A small chart showing how many of each tool are available this week.
  - **informative** — The counts are the information. Words describing the shape of the bars would leave the reader knowing nothing they can use.
  - decorative — The numbers exist nowhere else on the screen, so skipping it removes them.
  - functional — Nothing happens when it is pressed.
- A promotional banner image with the words Free for members this month set inside the picture.
  - **informative** — It carries a sentence, so it is informative by default. The better answer is to take the words out of the image entirely, and until that happens the alt text has to reproduce them in full.
  - decorative — Marking it decorative would delete the offer for anybody not looking at the picture.
  - functional — It may well be a link too, in which case it needs a destination as well. The text inside it is the problem this lesson is about.

**Then:** Now classify your own images. Anything you hesitate over, ask what the reader loses if it disappears.

**What to watch for:** The banner is the one to notice. Text inside an image is invisible to search, translation, enlargement and reading aloud, so the real answer is to move the words out rather than to write them twice.

Worksheet fields for this step:

- Every image, icon and illustration on your screens — Include background patterns, logos, arrows in buttons and anything inside a chart.
- For each one: informative, decorative, or functional
- Any image with words inside it — Text inside a picture cannot be searched, translated, enlarged or read aloud.

<details>
<summary>Help with this step</summary>

- **Informative:** The image tells the reader something they cannot get elsewhere on the screen. The words have to carry that something.
- **Decorative:** The image adds atmosphere and no information. It is marked so it is skipped silently, which is a decision rather than a lapse.
- **Functional:** The image is the control. What matters is not what it looks like but what pressing it does.

Stuck starting? Go screen by screen and list every image before you classify any of them.

Is it enough? Every image has exactly one of the three marks, including backgrounds and logos.

</details>

#### 2. Write the informative alt text

- Write what the image tells the reader, not what it looks like.
- Keep it as short as the information allows.
- Never start with image of or picture of.

**You should end up with:** Alt text for each informative image carrying what it tells the reader, and charts carried as information rather than description.

Worksheet fields for this step:

- For each informative image: the alt text you wrote — Write what it tells the reader, not what it looks like. Never begin with image of.
- For any chart or diagram: how the information is carried in words — A chart usually needs the numbers, not a description of the shape of the line.

<details>
<summary>Help with this step</summary>

- **Alt text:** The words that stand in for an image. For some readers it is not a summary of the image; it is the image.
- **Describing the picture:** Writing what it looks like rather than what it tells you. A common and well-meant way of producing something nobody can use.

Stuck starting? For your first informative image, write what a reader would need to know if it were missing. That is the alt text.

Is it enough? No line begins with image of or picture of, and no chart is described by its shape.

</details>

#### 3. Name the functional ones

- Give each icon control the name of its action or destination.
- Match the wording to your m08 action labels.

**You should end up with:** Each icon control announcing its action or destination, matching the labels you already wrote in Module 8.

Worksheet fields for this step:

- For each icon control: the action or destination it now announces
- How each one matches the action labels you wrote in Module 8 — If the icon says Filters and the panel says Refine, somebody hears two names for one thing.

<details>
<summary>Help with this step</summary>

- **Action name:** What pressing it does: Add to shortlist, Filters, Home. It is the only thing about a control the reader needs.
- **Two names for one thing:** An icon announced as one word while the panel it opens is titled another. It makes a product feel unreliable to anybody who cannot see they are the same control.

Stuck starting? Take each icon and finish the sentence: pressing this does …. That sentence is the name.

Is it enough? No control is named after its shape, and every name matches your Module 8 label.

</details>

#### 4. Handle decoration and embedded text

**See it first.** Made-up example. Handling a promotional banner on a tool-library page, and solving it in the wrong place.

- **What the banner was:** A picture of a workshop with Free for members this month set across it in large type.
- **What I did first:** I wrote the sentence into the alt text. The words were now available to a screen reader, and I marked the row done.
- **What was still broken:** Somebody enlarging their text got the banner at its original size, with the offer unchanged and now smaller than everything around it. Somebody translating the page got an English banner on a Hindi page. Nobody searching the site could find the offer.
- **Where the fix belonged:** The words came out of the image and became real text beside it. The picture stayed as decoration and was marked to be skipped.
- **What I kept from the first attempt:** One image genuinely could not change: a photograph of a printed safety notice on the workshop wall. Its full text went into the alt text, with a line saying why it stayed.

**The wrong turn:** The wrong turn is fixing text in an image with alt text. It closes the one failure you were thinking about and leaves three others open, and it looks complete from the outside.

**What it costs:** Taking the words out of the picture usually means the banner no longer looks the way it was designed. The layout changes; the offer becomes findable.

**Still unknown:** Still unknown: whether the photographed safety notice is legible enough to transcribe with confidence. I transcribed what I could read and said so rather than paraphrasing it.

- Specify empty alt text for decorative images.
- Move any text out of images into real text.
- Where it cannot move, reproduce it fully in the alt text and record why.

**You should end up with:** Decorative images marked to be skipped, text moved out of images where it could move, and anything that could not move reproduced in full with its reason.

Worksheet fields for this step:

- The images you are marking as decorative, so they are skipped rather than announced
- Text you took out of an image and put into real text
- Any text that could not move, reproduced in full, with the reason it stayed

<details>
<summary>Help with this step</summary>

- **Skipped:** Marked so it is passed over silently. It is the correct handling for decoration, and it needs to be specified rather than left to chance.
- **Text in an image:** Words set inside a picture. They cannot be searched, translated, enlarged with the rest of the text, or read aloud, so they are invisible four different ways.

Stuck starting? List the decorative images first, then go back to the ones with words in them.

Is it enough? Every image with words in it has either been changed or has its full text written out with a reason.

</details>

#### 5. Test by removal

- Read the screen with every image replaced by its alt text.
- Check nothing essential disappeared and nothing noisy appeared.
- Save the classification and the alt text.

**You should end up with:** The screen read through with every image replaced by its words, and whatever that reading changed.

Worksheet fields for this step:

- What the screen reads like with every image replaced by its alt text — Read it aloud. You are listening for two things: something missing, and something pointless.
- What you changed afterwards
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **The removal test:** Reading the screen with each image replaced by its alt text. It is the only way to hear both faults at once: something missing, and something pointless.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Read the whole screen aloud, substituting your alt text wherever an image sits.

Is it enough? You noted both kinds of problem, not only the missing information.

</details>

**Save and continue.** Saved for you: The inventory, the classifications, the alt text and the removal-test notes save as you type, on this device first and then online. Kept outside the app: The images themselves stay in your own folder. Nothing here uploads a picture; the worksheet holds the words that stand in for them. What your creator sees: Your creator reads the classification column and the removal test. Nine images marked decorative on purpose reads better than fourteen careful descriptions. Your next action: Open Your work and choose Ready for review. The next lesson looks at anything that moves, plays or expires.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

List everything visual and ask what each adds. If nothing, it is decorative; if it acts, it is functional.

</details>

<details>
<summary>Hint 2</summary>

For each image, write what a reader would lose without it, then make that the alt text.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Images, icons and the words that replace them.
Task: Write alternative text for every image and icon in your design, deciding for each whether it carries information, is decorative, or is itself a control.
Challenge one thing at a time, and start with the mistake this lesson is about: “Every image needs alt text describing it.” Every image needs a decision. Decorative images need empty alt text; describing them makes the experience worse, and long descriptions of photographs that add nothing are a common way of appearing to do the work.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the classified inventory and ask whether every image is classified into one of the three kinds. Look at the alt text list and ask whether informative alt text carries information, not appearance. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m11-l08-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every image is classified into one of the three kinds: A complete inventory with a classification per item, including icons. Informative alt text carries information, not appearance: Alt text stating what the image tells the reader, with no image-of prefixes. Functional images are named by action: Icon controls named by their action or destination, consistent with your action labels. Text inside images is identified and moved out: A list of images containing text, with the text moved into real text or fully reproduced with a reason.

**Bring forward:** An alt-text table with classifications is a small artefact that demonstrates you treat accessibility as writing rather than markup. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Inventory and classify (~20 min): List every image, icon and illustration in your screens. Classify each informative, decorative or functional. Mark any image containing text.
- Write the informative alt text (~30 min): Write what the image tells the reader, not what it looks like. Keep it as short as the information allows. Never start with image of or picture of.
- Name the functional ones (~20 min): Give each icon control the name of its action or destination. Match the wording to your m08 action labels.
- Handle decoration and embedded text (~25 min): Specify empty alt text for decorative images. Move any text out of images into real text. Where it cannot move, reproduce it fully in the alt text and record why.
- Test by removal (~25 min): Read the screen with every image replaced by its alt text. Check nothing essential disappeared and nothing noisy appeared. Save the classification and the alt text.

Pause after any step; save the artifact and next action.

**Free tool path.** Writing. If your prototype is a local HTML file you can add the alt attributes and check them; on paper, write the alt text beside each image in the specification.

### Output

Every image classified informative, decorative or functional; Alt text written for informative and functional images; Empty alt specified for decorative images; Any text inside images identified and moved out

### Checks

- What should informative alt text contain? Answer: The information the image carries, in words. Not a description of its appearance, and not a caption repeated from the surrounding text.
- Why do decorative images take empty alt text? Answer: So they are skipped. Describing them inserts noise between the things the reader actually needs.
- What is wrong with text inside an image? Answer: It is invisible to screen readers, translation and search, and it does not reflow when enlarged. The usual fix is to take the text out of the image.

### Rubric and remediation

**Every image is classified into one of the three kinds**

Adequate evidence: A complete inventory with a classification per item, including icons.

- 0 — No classification.
- 1 — Images classified but icons ignored.
- 2 — Everything classified including icons and illustrations.
- 3 — As adequate, and one image is reclassified after asking what it actually tells the reader.

If below 2: List everything visual and ask what each adds. If nothing, it is decorative; if it acts, it is functional. Show at recheck: The classified inventory.

**Informative alt text carries information, not appearance**

Adequate evidence: Alt text stating what the image tells the reader, with no image-of prefixes.

- 0 — Descriptions of appearance or filenames.
- 1 — Some informative text mixed with descriptions.
- 2 — All informative images carry their information in words.
- 3 — As adequate, and one alt text is shorter than the original description because the surrounding text already carried part of it.

If below 2: For each image, write what a reader would lose without it, then make that the alt text. Show at recheck: The alt text list.

**Functional images are named by action**

Adequate evidence: Icon controls named by their action or destination, consistent with your action labels.

- 0 — Icons named by shape.
- 1 — Some named by action.
- 2 — All functional images named by action or destination.
- 3 — As adequate, and the names match the visible labels used elsewhere for the same actions.

If below 2: Rename each icon control after what it does, using the same words as your m08 labels. Show at recheck: The functional names.

**Text inside images is identified and moved out**

Adequate evidence: A list of images containing text, with the text moved into real text or fully reproduced with a reason.

- 0 — Embedded text unnoticed.
- 1 — Identified but left with partial alt text.
- 2 — Moved out, or fully reproduced with the reason recorded.
- 3 — As adequate, and the decision references the reflow and translation cost.

If below 2: Find every image containing words and move those words into text; reproduce them only where the image cannot change. Show at recheck: The embedded-text list.

### Portfolio contribution

An alt-text table with classifications is a small artefact that demonstrates you treat accessibility as writing rather than markup.

### Assigned resources

- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The alternative text check. Purpose: Gives the self-runnable check and the classification this lesson applies. Effort: 15–25 selected min. Free reading, no account. Verified 2026-09-06. Preliminary only; it does not teach how to write good alternative text, which is the work here. Fallback: R28.
- R10: [W3C: page structure](https://www.w3.org/WAI/tutorials/page-structure/) — The passages on how images relate to surrounding content and headings. Purpose: Places images in the page structure so alt text does not duplicate nearby text. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Structural semantics rather than content writing. Fallback: R14.

## Lesson 9: Motion, media and time limits

Stable ID: m11-l09-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Audit your design for motion that plays without asking, media without alternatives, and time limits people cannot control, and specify a fix for each.

**Bring forward.** Your m09 motion audit and reduced-motion pairs, and any media or timed states.

Automatic movement, missing captions and unannounced timeouts each exclude people completely rather than inconveniencing them.

### Learn

Automatically moving content — a carousel, an animated banner, a live-updating region — competes for attention and, for some people, prevents reading entirely. If it moves for more than a few seconds it needs a pause control, and the pause has to be reachable by keyboard and visible without hovering. This is one of the least-implemented requirements in ordinary products.

Rapid flashing is the one accessibility failure that can cause direct physical harm. If your design contains anything that flashes more than a couple of times a second — a loading effect, a video transition, an alert — it should not, and no visual justification outweighs that.

Captions and transcripts are content work, not a technical step. Captions serve deaf and hard-of-hearing people, and also everyone in a noisy room or without headphones; a transcript additionally serves people who prefer to read, who want to search the content, or whose connection cannot carry the video. If you cannot produce them, the honest response is not to publish the media as the only route to the information.

Time limits appear in more places than teams remember: a held place, a session timeout, a code that expires, a form that clears. Each needs warning before it expires, a way to extend where possible, and preservation of what the person had entered. This is your m07 payment work meeting the criterion that says so explicitly.

**Common misconception.** “Captions are the video platform's job.” Automatic captions are frequently wrong in ways that change meaning, particularly with names, numbers and accents. If the video carries information, someone has to check them, and that someone is on your team.

### Worked example

Three problems and three fixes. The class carousel rotated every four seconds with no pause; it was replaced with a static set of three cards, which also removed a motion problem for reduced-motion users. The introductory video had automatic captions that rendered the studio name as three different things; they were corrected by hand and a transcript was published beside the video. The held-place timer expired silently after ten minutes, losing the form; it now warns at two minutes, offers an extension, and preserves entered details either way. Nothing in the product flashes.

#### Motion, media and time limits

Audit your design for motion that plays without asking, media without alternatives, and time limits people cannot control, and specify a fix for each.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Writing captions and transcripts by hand costs time and no money. Pause controls and timer warnings are specification work; test them in a local HTML file if you have one.

- Starting material: Your m09 motion work and any timed or media elements.
- Create HaruCourse/Practice/m11-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Audit automatic motion

**See it first.** Made-up example. Fixing an automatic carousel on a tool-library home page, and managing the problem instead of removing it.

- **What was there:** Three featured tools rotating every four seconds, with small dots underneath. Nobody had asked for it; it had come with the template.
- **What I did first:** Added a pause button. That satisfies the criterion, and it took twenty minutes.
- **What I noticed afterwards:** The pause button is a control somebody has to find, understand and press before they can read a sentence. For anybody who reads slowly, the first four seconds are already lost.
- **The question I had not asked:** What is the carousel for? Three tools, shown one at a time, on a page with room for three. It existed because the template had one.
- **What I did instead:** Removed it. Three static cards, all visible, no motion, no pause control, no dots, and a shorter page.

**The wrong turn:** The wrong turn is adding a control to manage motion nobody wanted. It passes the criterion, it adds a thing to learn, and it keeps a feature that was never earning its place.

**What it costs:** Removing the carousel means only three tools can be featured instead of an unbounded list. That is a real constraint, and it is a content decision rather than an accessibility one.

**Still unknown:** Still unknown: whether anybody ever looked at the second and third slides. Nothing here measured it, and the argument for removal does not depend on it.

- List everything that moves without the person starting it.
- For each, decide: remove, or provide a visible pause control.
- Check the pause is keyboard reachable.

**You should end up with:** Everything that moves without being started, each either removed or given a keyboard-reachable pause control.

Worksheet fields for this step:

- Everything that starts moving without the person starting it — Carousels, auto-advancing banners, looping animations, background video, anything that repeats.
- For each one: removed, or given a visible pause control
- For each pause control: how somebody reaches it with a keyboard — A pause control that needs a pointer leaves the person with a pointer problem instead of a motion problem.

<details>
<summary>Help with this step</summary>

- **Automatic motion:** Movement the person did not start and cannot predict. Anything lasting more than a few seconds needs a way to stop it.
- **Pause control:** A visible, reachable way to stop the movement. Hidden until hover, or pointer-only, and it is not one.

Stuck starting? Sit on each screen for thirty seconds without touching anything and write down what moves.

Is it enough? Every moving thing has a decision, and each decision says removed or names a control somebody can reach without a pointer.

</details>

#### 2. Handle media

- List any audio or video in your product.
- Specify captions and a transcript, and who will write them.
- If neither is possible, provide the information in text instead.

**You should end up with:** Any audio or video listed with captions, a transcript and a named person to write them, or the information carried as text instead.

**Try it with help.** Six situations from a made up tool-library product. For each one, decide what the honest handling is.

- A two-minute safety video on using the bench saw, where everything important is spoken aloud.
  - captions are enough — Captions cover the person watching. Somebody who wants to check one instruction before switching the saw on has to watch two minutes to find it.
  - **a transcript is needed too** — Safety instructions are referred back to. A transcript makes them searchable, skimmable and printable, which captions cannot do.
  - this cannot be fixed with captions at all — The content is spoken, so captions carry it well. The gap is about finding one part again.
- A video whose automatic captions render the library name as three different things and turn 16 millimetres into 60.
  - captions are enough — These captions exist and are wrong in ways that change the meaning. Wrong measurements in a workshop are worse than none.
  - a transcript is needed too — A transcript made from the same automatic text carries the same errors forward.
  - **this cannot be fixed with captions at all** — Not with these captions. Somebody has to correct them by hand, which is the work this lesson is asking you to name and assign.
- A silent thirty-second clip showing how to release the chuck, with no narration at all.
  - captions are enough — There is nothing to caption. Captions carry speech, and this clip has none.
  - a transcript is needed too — A transcript of silence is empty. What is needed is a written description of what the hands do.
  - **this cannot be fixed with captions at all** — Visual-only content needs a written description of the actions, which is a different piece of writing from captions.
- A fifteen-second clip of workshop sounds behind the home page, carrying no information.
  - **captions are enough** — Nothing is being said and nothing is being conveyed, so a short note that it is ambient sound is the whole obligation. Being able to turn it off matters more.
  - a transcript is needed too — There is no content to transcribe.
  - this cannot be fixed with captions at all — There is nothing here that needs fixing beyond letting people stop it.
- A four-minute interview with a member describing how they used the library, spoken throughout.
  - captions are enough — Captions serve somebody watching it through. Four minutes is long enough that many people would rather read it in one.
  - **a transcript is needed too** — Long spoken content is the clearest case for both: captions for watching, a transcript for reading, searching and quoting.
  - this cannot be fixed with captions at all — The speech carries everything, so captions do work here.
- A product with no audio or video anywhere in it.
  - **captions are enough** — The honest answer is that this step is already complete, and writing none is a finished answer rather than a gap.
  - a transcript is needed too — There is nothing to transcribe. Inventing work here would not help anybody.
  - this cannot be fixed with captions at all — Nothing is broken. Not every lesson has something to repair in every product.

**Then:** Now decide the handling for your own media, and name who writes each piece of text. If you have none, write none and move on.

**What to watch for:** The two that catch people out are the silent clip and the automatic captions. Captions carry speech, so silence needs a written description instead; and captions that exist but are wrong are worse than absent ones, because everybody assumes the work is done.

Worksheet fields for this step:

- Any audio or video in your product — Write none if there is none. That is a complete answer to this step.
- For each one: captions, a transcript, and who writes them
- If neither is possible: how the information appears as text instead

<details>
<summary>Help with this step</summary>

- **Captions:** The spoken words, timed to the video, including who is speaking and sounds that matter. They serve deaf readers, noisy rooms and anyone watching without sound.
- **Transcript:** The whole content as text, readable without playing anything. It is also the version that can be searched, translated and skimmed.

Stuck starting? List your media first. If the list is empty, write none and go to the next step.

Is it enough? Every media item names a person who will write the text, or says plainly that nobody has been found yet.

</details>

#### 3. Find the time limits

- List every timeout: held places, sessions, codes, forms.
- Specify a warning before expiry and an extension where possible.
- Specify that entered data survives expiry.

**You should end up with:** Every time limit listed with a warning, an extension where possible, and what happens to anything already typed.

Worksheet fields for this step:

- Every time limit: held places, sessions, codes, forms, anything that expires
- For each one: the warning, the extension, and what happens to what was typed

<details>
<summary>Help with this step</summary>

- **Time limit:** Anything that expires: a held place, a session, a verification code, a form that clears itself. Each one assumes a speed somebody may not have.
- **Preservation:** Keeping what the person already typed when a limit runs out. Losing it turns a delay into starting again, which is where people give up.

Stuck starting? List everything in your product that expires, including the ones that came with a platform rather than from you.

Is it enough? Each limit says what warning appears, how long before, and what survives the expiry.

</details>

#### 4. Check flashing and reduced motion

**See it first.** Made-up example. Handling reduced motion on a tool-library product, and treating a request as a preference.

- **What my Module 9 pairs said:** Every transition had a reduced version. The sliding panel became a fade, the page change became an instant swap.
- **The one I kept:** The confirmation animation. A tick that draws itself over half a second, which people liked, and which I argued was too small and too short to trouble anybody.
- **Why that argument was mine to lose:** The person had already told their own device they did not want motion. My judgement that this particular motion is harmless is a judgement about somebody else’s body, made without them.
- **What I did:** Gave it a reduced version too: the tick appears complete, with no drawing. The confirmation still reads as a confirmation.
- **What I noticed while doing it:** It took four minutes. The reason I had kept it was that I liked it, and the reasoning had arrived afterwards.

**The wrong turn:** The wrong turn is deciding, case by case, which motion is small enough to keep. It sounds like careful judgement and it overrides a setting the person has already made.

**What it costs:** Honouring the request everywhere means the reduced-motion version of the product is noticeably plainer, and some of the care you put into the transitions is invisible to those readers.

**Still unknown:** Still unknown: whether the half-second tick would have bothered anybody. Not knowing is the reason to follow the setting rather than a reason to keep it.

- Confirm nothing flashes more than a couple of times per second.
- Re-check your reduced-motion pairs still cover everything here.
- Test with the reduced-motion setting enabled.

**You should end up with:** A check for rapid flashing, and a statement of what your design does when somebody has asked for reduced motion.

Worksheet fields for this step:

- What you checked for rapid flashing, and what you found — Rapid flashing can trigger seizures. This is the one item in the module where the consequence is physical harm.
- What your design does when somebody has asked for reduced motion — Bring your Module 9 reduced-motion pairs. A request from the person is not a preference to override.

<details>
<summary>Help with this step</summary>

- **Rapid flashing:** Repeated flashes several times a second over a large area. It can trigger seizures, which makes it the one item here where the consequence is physical.
- **Reduced motion:** A setting the person has already chosen on their own device. Your design reads it and follows it; it is a request, not a suggestion.

Stuck starting? Check your Module 9 pairs and mark any transition that has no reduced version.

Is it enough? No motion is exempt because you judged it small, and the flashing line says what you actually checked.

</details>

#### 5. Record

- Write the decisions and who is responsible for captions.
- Note anything you could not fix and why.
- Save the audit with the fixes.

**You should end up with:** The fixes written out, and anything specified but not yet seen working named as untested.

Worksheet fields for this step:

- The three or four fixes, each naming what changed
- Anything specified that nobody has yet seen working
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Specified but untested:** Written down as required behaviour that nobody has seen working. It belongs in the handover as a question rather than in the record as a result.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write each fix as what it was and what it is now, in one line.

Is it enough? Somebody reading the summary could tell which fixes exist and which are still descriptions.

</details>

**Save and continue.** Saved for you: The motion audit, the media plan, the time limits and the reduced-motion notes save as you type, on this device first and then online. Kept outside the app: Any video or audio file stays where it already is. Captions and transcripts are writing, so draft them in your own folder and note the file names in step 2. What your creator sees: Your creator reads what you removed as well as what you managed. A carousel deleted is a stronger answer than a carousel with a pause button. Your next action: Open Your work and choose Ready for review. The next lesson listens to the screens you have been looking at.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

List everything that moves on its own and decide each; a carousel with no pause is the usual offender.

</details>

<details>
<summary>Hint 2</summary>

Watch the video with the captions on and correct every error; names and numbers first.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Motion, media and time limits.
Task: Audit your design for motion that plays without asking, media without alternatives, and time limits people cannot control, and specify a fix for each.
Challenge one thing at a time, and start with the mistake this lesson is about: “Captions are the video platform's job.” Automatic captions are frequently wrong in ways that change meaning, particularly with names, numbers and accents. If the video carries information, someone has to check them, and that someone is on your team.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the motion decisions and ask whether automatic motion is removed or pausable. Look at the captions or transcript and ask whether media has checked captions or a transcript. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m11-l09-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Automatic motion is removed or pausable: A list of moving elements with a decision each, and a keyboard-reachable pause where kept. Media has checked captions or a transcript: Captions corrected by a person, or a transcript, or the information provided as text instead. Time limits warn, extend and preserve: Each timeout specified with warning timing, extension and data preservation. Flashing and reduced motion are both confirmed: A statement that nothing flashes rapidly and a re-check of reduced-motion coverage.

**Bring forward:** Time-limit handling is rarely designed and easy to show: the warning, the extension and the preserved data make a small, convincing sequence. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Audit automatic motion (~25 min): List everything that moves without the person starting it. For each, decide: remove, or provide a visible pause control. Check the pause is keyboard reachable.
- Handle media (~30 min): List any audio or video in your product. Specify captions and a transcript, and who will write them. If neither is possible, provide the information in text instead.
- Find the time limits (~25 min): List every timeout: held places, sessions, codes, forms. Specify a warning before expiry and an extension where possible. Specify that entered data survives expiry.
- Check flashing and reduced motion (~25 min): Confirm nothing flashes more than a couple of times per second. Re-check your reduced-motion pairs still cover everything here. Test with the reduced-motion setting enabled.
- Record (~15 min): Write the decisions and who is responsible for captions. Note anything you could not fix and why. Save the audit with the fixes.

Pause after any step; save the artifact and next action.

**Free tool path.** Writing captions and transcripts by hand costs time and no money. Pause controls and timer warnings are specification work; test them in a local HTML file if you have one.

### Output

An audit of automatic motion with a pause or removal decision; Captions or a transcript specified for any media; Time limits with warning, extension and preservation; A confirmation that nothing flashes rapidly

### Checks

- What does automatically moving content require? Answer: A way to pause or stop it if it runs beyond a few seconds, reachable by keyboard and visible without hovering — or removal, which is often the better design anyway.
- Why are automatic captions insufficient? Answer: Because they misrender names, numbers and accents in ways that change meaning. If the video carries information, someone has to check them.
- What does a time limit owe the person? Answer: A warning before it expires, an extension where possible, and preservation of what they had entered. A silent expiry that clears a form is a designed loss.

### Rubric and remediation

**Automatic motion is removed or pausable**

Adequate evidence: A list of moving elements with a decision each, and a keyboard-reachable pause where kept.

- 0 — Automatic motion left uncontrolled.
- 1 — Pause added but only reachable by pointer.
- 2 — Each element removed or given a keyboard-reachable pause.
- 3 — As adequate, and one element was removed because it explained nothing.

If below 2: List everything that moves on its own and decide each; a carousel with no pause is the usual offender. Show at recheck: The motion decisions.

**Media has checked captions or a transcript**

Adequate evidence: Captions corrected by a person, or a transcript, or the information provided as text instead.

- 0 — Media published with no alternative.
- 1 — Automatic captions accepted unchecked.
- 2 — Captions checked or a transcript written, with ownership named.
- 3 — As adequate, and the transcript is offered as an alternative route rather than a fallback.

If below 2: Watch the video with the captions on and correct every error; names and numbers first. Show at recheck: The captions or transcript.

**Time limits warn, extend and preserve**

Adequate evidence: Each timeout specified with warning timing, extension and data preservation.

- 0 — Silent expiry.
- 1 — Warning specified without extension or preservation.
- 2 — All three specified for every timeout.
- 3 — As adequate, and the specification says what happens if the person is away when the warning appears.

If below 2: List every timer in the product and write the three behaviours for each. Show at recheck: The timeout specifications.

**Flashing and reduced motion are both confirmed**

Adequate evidence: A statement that nothing flashes rapidly and a re-check of reduced-motion coverage.

- 0 — Neither checked.
- 1 — One checked.
- 2 — Both checked and recorded.
- 3 — As adequate, and the reduced-motion test was run on a device with the setting enabled.

If below 2: Enable reduced motion, walk the product, and separately confirm nothing flashes. Show at recheck: The two confirmations.

### Portfolio contribution

Time-limit handling is rarely designed and easy to show: the warning, the extension and the preserved data make a small, convincing sequence.

### Assigned resources

- R64: [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — The reduce value and where the setting lives on each platform. Purpose: Lets you test the reduced-motion behaviour on your own device. Effort: 10–20 min. Free reading, no account. Verified 2026-09-06; page last modified 10 June 2026. It documents the signal only, and says nothing about media, captions or time limits. Fallback: R13.
- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — The criteria on pause, stop and hide, on flashing, on captions, and on timing adjustable. Purpose: Names the specific requirements this lesson satisfies. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. An index of the standard; captions and transcripts remain content work it does not teach. Fallback: R41.

## Lesson 10: Listening to your own product

Stable ID: m11-l10-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Run one task with the screen reader already on your device, record what was announced and what was missing, and state plainly what your own session does and does not establish.

**Bring forward.** Your heading outlines, alt text, form associations and key tables.

Reading about screen readers teaches you the concepts. Hearing your own product teaches you what your decisions actually produced.

### Learn

The assigned article is explicit about both halves of this lesson: how to run a basic screen-reader test, and what a sighted occasional tester may not conclude from it. Both matter. Running the test will show you concrete failures — an unlabelled field, an image announced as a filename, a status change nobody hears — and it will not tell you whether your product is usable for someone who navigates this way every day.

Five commands are enough to start. Navigating by heading tells you whether your outline works. Navigating by link and by form field tells you whether your labels carry. Read-all tells you the order and what is announced. Stop is what you will need most in the first ten minutes. Learning the whole command set is a different project.

Listen for absence rather than presence. The failures are usually silence where something happened: a filter applied and nothing announced, an error appearing with no notification, an icon button read as “button”. Your m09 focus rules and m11 form associations are exactly what these gaps test.

Say what your session establishes. It establishes that specific failures exist — that is real and useful. It does not establish that the product works, because you know where everything is, you can see the screen, and you are not using the software the way a daily user does. The catalog row for this reading says the same thing, and your write-up should repeat it.

**Common misconception.** “I tested with a screen reader, so the product is accessible for blind users.” You found some failures. A sighted person who can see the screen and knows the design is not simulating blindness, and a competent write-up says so in the same paragraph as the findings.

### Worked example

Twenty minutes with VoiceOver on the researcher's own phone. Navigating by heading confirmed the m06 outline worked. Six failures were found: the shortlist icon was announced as “button”, the availability dot was silent so full classes sounded identical to available ones, applying a filter announced nothing at all, the error summary was not announced when it appeared, one image was read as its filename, and the date group's question was not announced with its fields. Each mapped to a decision made earlier in the course. The write-up recorded the device, the software, the twenty minutes, and stated that no person who uses a screen reader daily had been involved.

#### Listening to your own product

Run one task with the screen reader already on your device, record what was announced and what was missing, and state plainly what your own session does and does not establish.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: The screen reader already on your device: NVDA on Windows, VoiceOver on Apple devices, TalkBack on Android. All are free and already installed or freely downloadable; no purchase and no account are involved.

- Starting material: Your structure, alt text and form specifications.
- Create HaruCourse/Practice/m11-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and set up

- Read the assigned article, including what an occasional tester cannot conclude.
- Turn on the screen reader for your platform and learn five commands.

**You should end up with:** The screen reader on your own device running, five commands learned, and whatever went wrong on the way written down.

Worksheet fields for this step:

- Which screen reader, on which device, and how you turned it on
- The five commands you learned, written out — Next heading, next link, next form field, read all, stop. Five is enough; fifty is a reason to give up.
- Anything that went wrong getting started, and how you got past it — The first ten minutes are usually the hardest part. Writing them down helps the next person, including you.

<details>
<summary>Help with this step</summary>

- **Screen reader:** Software that speaks what is on screen and lets somebody move through it by structure. Every major platform ships one: NVDA on Windows, VoiceOver on Apple, TalkBack on Android.
- **Five commands:** Next heading, next link, next form field, read all, stop. Learning these five is enough for this lesson; trying to learn the whole set is how people abandon it.

Stuck starting? Turn it on, then immediately find the command that stops it talking. Knowing how to stop makes the rest bearable.

Is it enough? You can move by heading and stop the speech without looking anything up.

</details>

#### 2. Navigate by structure

- Move by heading through one screen and note what you hear.
- Move by link and by form field.
- Compare with your written outline.

**You should end up with:** What you heard moving by heading, link and form field, compared against the outline you wrote earlier in the module.

Worksheet fields for this step:

- What you heard moving heading to heading, in order
- What you heard moving by link and by form field
- Where what you heard differed from the outline you wrote in lesson 3

<details>
<summary>Help with this step</summary>

- **Navigating by structure:** Jumping from heading to heading rather than listening to everything. It is how people actually use these tools, and it is why the outline work in lesson 3 mattered.
- **Link list:** Moving link to link, hearing only their text. Read this way, three links all called Read more are three identical links.

Stuck starting? Move heading to heading through one screen and write each one down as you hear it, before comparing with anything.

Is it enough? You wrote what you actually heard, including the places where it matched your outline exactly.

</details>

#### 3. Attempt the task

**See it first.** Made-up example. Listening to a tool-library product, and hearing what I expected instead of what was said.

- **What I did at first:** I kept the screen in front of me and listened while I worked. It went smoothly and I found two small problems in ten minutes.
- **Why it went so smoothly:** I was reading the screen and hearing the speech at the same time. Where the speech was incomplete, my eyes filled the gap without my noticing.
- **What I changed:** I turned the screen brightness to nothing and did the task again from the speech alone.
- **What that found:** Applying a filter changed the entire list and said nothing. With the screen visible I had seen the list change and assumed I had heard it. Blind to the screen, I had no idea anything had happened at all.
- **The second one:** Full and available classes sounded identical, because availability was a coloured dot with nothing to say. I had fixed that on paper in an earlier lesson and never in this build.

**The wrong turn:** The wrong turn is listening with the screen visible. Your eyes complete every announcement, so the product sounds far better than it is and the silences are invisible.

**What it costs:** Working from speech alone in a design you built is slow and frustrating, and you will still know where things are from memory. It is the closest you can honestly get.

**Still unknown:** Still unknown: how much my knowing the design flattered the result even so. Somebody meeting it for the first time, by ear, would meet things I walked past.

- Complete one full task listening rather than looking where you can.
- Record every silence where something happened.
- Record anything announced that was noise.

**You should end up with:** One full task attempted by listening, with every silence and every piece of noise recorded.

Worksheet fields for this step:

- What happened as you went, announcement by announcement
- Every place something happened and nothing was said
- Every place something was announced that was not worth saying — Filenames, the word button on its own, a decorative image being described, a label read twice.

<details>
<summary>Help with this step</summary>

- **Silence:** Something changed on screen and nothing was said. It is the failure that is hardest to notice, because nothing draws attention to it.
- **Noise:** Something announced that helps nobody: a filename, a decorative image, the same label twice. It makes the useful announcements harder to find.

Stuck starting? Turn the screen brightness down as far as it goes, then start the task.

Is it enough? Your log contains at least one silence, because almost every product has one.

</details>

#### 4. Map failures to decisions

- For each failure, name the earlier decision that caused it.
- Mark which are specification failures and which are build defects.

**You should end up with:** Each failure traced back to the decision that caused it, and marked as missing from the specification or missing from the build.

**Try it with help.** Six findings from a made up screen-reader session on a tool-library product. For each one, decide where the repair belongs.

- The shortlist icon is announced only as button. Your alt-text table says it should announce Add to shortlist.
  - a specification failure — You wrote it down in the previous lesson, so the decision exists.
  - **a build defect** — The intended behaviour is specified and absent from the build. It goes to whoever builds it, with the expected wording quoted.
  - neither — it works — Button on its own tells the person nothing about what pressing it will do.
- Applying a filter replaces the whole list and announces nothing. Nothing anywhere in your specification says what should be announced.
  - **a specification failure** — Nobody could build this, because nobody was told what should happen. Writing the announcement is your work before it is anybody else’s.
  - a build defect — A builder cannot be at fault for not implementing something that was never written down.
  - neither — it works — A list silently becoming a different list leaves the person with no idea their action did anything.
- Moving by heading gives exactly the outline you wrote in lesson 3, in the same order.
  - a specification failure — It was specified and the specification was right.
  - a build defect — It was built correctly, which is worth recording so the table can be marked honestly.
  - **neither — it works** — Recording what works is part of the session. A finding list with no successes in it is not a record of what happened.
- One image is read out as its filename, and your table marks that image as decorative.
  - a specification failure — The decision was made: skip it. The table says so.
  - **a build defect** — A decorative image announcing a filename means the empty alt text was not applied. The specification is right and the build is not.
  - neither — it works — A filename read aloud is noise in front of the content.
- The three date fields are announced as Day, Month and Year with no mention of what date is being asked for. Your field table has no group named.
  - **a specification failure** — You noticed this in the forms lesson and fixed it in one place. If the group name is missing from the table, there is nothing for anybody to build.
  - a build defect — Nothing was left unbuilt; nothing was asked for.
  - neither — it works — Three boxes with no shared question is exactly the failure the forms lesson was about.
- The error summary appears and is not announced. Your specification says it should be announced when it appears.
  - a specification failure — You wrote this behaviour down in the forms lesson, and you also recorded it as untested. Now you have tested it.
  - **a build defect** — Specified, untested at the time, and now confirmed missing. This is exactly what the untested list was for.
  - neither — it works — The summary appearing silently is the failure the previous lesson predicted.

**Then:** Now mark each of your own findings the same way, and keep the ones that work.

**What to watch for:** The two kinds go to different people, which is why the mark matters. What catches people out is that a thing you fixed on paper in an earlier lesson can still be a build defect here, and it looks like a new problem when it is an unapplied old decision.

Worksheet fields for this step:

- For each failure: the earlier decision that caused it
- For each failure: is it missing from your specification, or missing from the build? — The two go to different people. Mixing them means neither gets fixed.

<details>
<summary>Help with this step</summary>

- **Specification failure:** You never said what should happen, so nobody built it. The repair is yours.
- **Build defect:** You said what should happen and it was not done. The repair belongs with whoever builds it, and needs a written expected behaviour.

Stuck starting? Take your first failure and ask whether your own documents say what should have happened.

Is it enough? Every finding carries a mark, and the ones that worked are recorded too.

</details>

#### 5. Write the boundary

**See it first.** Made-up example. Writing up a twenty-minute screen-reader session, and writing the boundary in a place nobody would read it.

- **What I found:** Six real failures, each traceable to a decision. It was the most productive twenty minutes of the module.
- **How I wrote it up:** Six findings on the first page, and a note at the end of the document saying the session was preliminary and no daily screen-reader user had been involved.
- **What happened to that note:** The findings were quoted in a summary a week later. The note stayed in the document. What travelled was “tested with a screen reader”, which is the sentence I had been careful not to write.
- **What I changed:** The boundary went into the first paragraph, beside the findings rather than after them: twenty minutes, my own phone, my own eyes, my own design, nobody who uses this daily.
- **Why that placement is the whole point:** A limitation at the end is a limitation on a document. A limitation in the first line is a limitation on the finding, and the finding is the part that gets repeated.

**The wrong turn:** The wrong turn is putting the boundary at the end, where it reads as thoroughness and travels nowhere. The summary somebody else writes will keep the findings and drop the note.

**What it costs:** Leading with what the session cannot establish makes your work sound smaller in the first sentence somebody reads, and some readers will value it less for that.

**Still unknown:** Still unknown: whether any of the six failures would be the ones a daily user considered important. My ranking is a sighted occasional user’s ranking, and I have said so.

- Record the device, software, version and duration.
- State that no daily screen-reader user was involved.
- Save the findings with the boundary statement.

**You should end up with:** The device, software, version and duration recorded, and a written statement of what your session cannot establish.

Worksheet fields for this step:

- Device, software, version and how long you spent
- The sentence saying what this session cannot tell you — You can see the screen and you designed it. Both of those make your session different from a daily user’s.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Preliminary check:** A session run by somebody who can see the screen and knows the design. It finds real failures and describes nobody’s daily experience.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write the device, the software, the version and the number of minutes before you write anything about what you found.

Is it enough? The boundary sits beside the findings rather than after them, and it names both things that make your session different: sight, and knowing the design.

</details>

**Save and continue.** Saved for you: Your setup notes, what you heard, the failure map and the boundary statement save as you type, on this device first and then online. Kept outside the app: If you recorded the audio of your session, keep it in your own private folder and note the file name. Nothing is uploaded from here. What your creator sees: Your creator reads the boundary statement first and the findings second. That order is deliberate, and it is how a reviewer will read it too. Your next action: Open Your work and choose Ready for review. The next lesson checks the same product against Indian guidelines, language and connection conditions.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Turn on the screen reader already on your device and attempt one task, writing what you hear.

</details>

<details>
<summary>Hint 2</summary>

For each failure write what you heard and what you should have heard.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Listening to your own product.
Task: Run one task with the screen reader already on your device, record what was announced and what was missing, and state plainly what your own session does and does not establish.
Challenge one thing at a time, and start with the mistake this lesson is about: “I tested with a screen reader, so the product is accessible for blind users.” You found some failures. A sighted person who can see the screen and knows the design is not simulating blindness, and a competent write-up says so in the same paragraph as the findings.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the session record and ask whether A real screen-reader session was run and recorded. Look at the failure list and ask whether missing announcements are listed specifically. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m11-l10-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** A real screen-reader session was run and recorded: A record naming the software, device, duration and task attempted. Missing announcements are listed specifically: A list of silences and noise, each naming the element and what should have been said. Failures map to earlier design decisions: Each failure traced to a specification or a build defect. The limits of a self-run session are stated plainly: A written statement that a sighted occasional tester's session is preliminary and no daily user was involved.

**Bring forward:** A screen-reader session with its boundary clearly stated is credible; the same session presented as proof of accessibility is not, and experienced reviewers can tell the difference immediately. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Read and set up (~25 min): Read the assigned article, including what an occasional tester cannot conclude. Turn on the screen reader for your platform and learn five commands.
- Navigate by structure (~20 min): Move by heading through one screen and note what you hear. Move by link and by form field. Compare with your written outline.
- Attempt the task (~35 min): Complete one full task listening rather than looking where you can. Record every silence where something happened. Record anything announced that was noise.
- Map failures to decisions (~25 min): For each failure, name the earlier decision that caused it. Mark which are specification failures and which are build defects.
- Write the boundary (~15 min): Record the device, software, version and duration. State that no daily screen-reader user was involved. Save the findings with the boundary statement.

Pause after any step; save the artifact and next action.

**Free tool path.** The screen reader already on your device: NVDA on Windows, VoiceOver on Apple devices, TalkBack on Android. All are free and already installed or freely downloadable; no purchase and no account are involved.

### Output

One task attempted with a screen reader, recorded; A list of what was announced and what was missing; Each failure mapped to the design decision behind it; A statement of what your session does and does not establish

### Checks

- What are the five commands worth learning first? Answer: Next heading, next link, next form field, read all, and stop. They test your outline, your labels and your announcement behaviour without learning the whole tool.
- What are you listening for? Answer: Absence. Silence where something changed, fields announced without labels, images read as filenames, and status that is never spoken at all.
- What does your own session establish? Answer: That specific failures exist, which is genuinely useful. It does not establish usability for daily screen-reader users, and the write-up must say so.

### Rubric and remediation

**A real screen-reader session was run and recorded**

Adequate evidence: A record naming the software, device, duration and task attempted.

- 0 — Not run.
- 1 — Run briefly without recording conditions.
- 2 — Run with conditions and observations recorded.
- 3 — As adequate, and structure navigation was used as well as reading straight through.

If below 2: Turn on the screen reader already on your device and attempt one task, writing what you hear. Show at recheck: The session record.

**Missing announcements are listed specifically**

Adequate evidence: A list of silences and noise, each naming the element and what should have been said.

- 0 — General impressions.
- 1 — Some failures named without the expected announcement.
- 2 — Each failure names the element and what was missing.
- 3 — As adequate, and the list distinguishes silence from misleading announcements.

If below 2: For each failure write what you heard and what you should have heard. Show at recheck: The failure list.

**Failures map to earlier design decisions**

Adequate evidence: Each failure traced to a specification or a build defect.

- 0 — Failures listed without causes.
- 1 — Causes guessed generally.
- 2 — Each traced to a decision or marked a build defect.
- 3 — As adequate, and at least one failure traces to a decision you made earlier in the course.

If below 2: For each failure, find the specification that should have prevented it. If none exists, that is the gap. Show at recheck: The mapped failures.

**The limits of a self-run session are stated plainly**

Adequate evidence: A written statement that a sighted occasional tester's session is preliminary and no daily user was involved.

- 0 — Findings presented as proof of accessibility.
- 1 — A vague acknowledgement of limits.
- 2 — The limit stated plainly with the conditions recorded.
- 3 — As adequate, and the statement names what testing with daily users would add.

If below 2: Copy the boundary the assigned article states and apply it to your own session in your own words. Show at recheck: The boundary statement.

### Portfolio contribution

A screen-reader session with its boundary clearly stated is credible; the same session presented as proof of accessibility is not, and experienced reviewers can tell the difference immediately.

### Assigned resources

- R40: [WebAIM: screen reader testing](https://webaim.org/articles/screenreader_testing/) — How to run a basic test, and what a sighted occasional tester may not conclude from it. Purpose: Supplies both the procedure and the boundary this lesson enforces. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Use the free software already on your device: NVDA, VoiceOver or TalkBack. Your own session never substitutes for testing with disabled participants. Fallback: R41.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The checks you can pair with a listening session. Purpose: Provides complementary self-checks so failures can be confirmed visually as well. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Preliminary checks; passing them is not conformance. Fallback: R28.

## Lesson 11: Access in the Indian context

Stable ID: m11-l11-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Check your design against two named requirements from the Indian government guidelines and against language and bandwidth conditions your users will actually meet.

**Bring forward.** Your m06 label stress test and your m08 screens.

Most accessibility guidance you have read is written for English-language, high-bandwidth, single-device contexts. Your learner and her users are frequently in none of those.

### Learn

The assigned Indian guidelines are the primary source available to you for this context, covering accessibility alongside local-language and mobile requirements. Comparing two of their requirements against your own work is a concrete exercise, and it will usually surface something the international guidance did not: a format assumption, a language assumption, or an expectation about connectivity.

Language is an access question. A person who reads Hindi or Tamil more comfortably than English meets an English-only interface as a barrier in the same sense as an unlabelled field. Full localisation may be beyond your project, and the honest intermediate steps are real: plain language, avoiding idiom, not embedding text in images, and making formats — dates, numbers, addresses — follow local convention.

Scripts have mechanical consequences you can test now. Indic scripts need more line height than Latin text of the same size, and clipping matras or conjuncts makes text unreadable rather than merely tight. Sorting order differs by language, so an alphabetical list is a different list. Input methods differ too, which affects field behaviour and what autocomplete can offer.

Connectivity and device sharing are access conditions. A product that only works on a fast connection excludes people at particular times and places rather than permanently, which is exactly the situational barrier this module started with. A shared family phone raises questions about staying signed in, notifications and what appears on a lock screen — questions your m07 authentication work opened and this lesson closes.

**Common misconception.** “Localisation comes after launch.” Layouts built to English string lengths, text baked into images and hard-coded date formats are decisions that make later localisation expensive. The cheap steps are design decisions available now.

### Worked example

Two requirements were compared. The first, on local-language support, exposed that dates were formatted in a way that assumed one convention and that the month names were English-only; both were changed. The second, on mobile, exposed a page weight that took eleven seconds to become usable on a throttled connection. Separately, a Hindi rendering of the navigation clipped matras until line height was increased, and the class list's alphabetical sort was noted as language-dependent and left with a recorded limitation. The shared-device question from m07 was revisited: notifications now say “a class you booked” rather than naming the class on the lock screen.

#### Access in the Indian context

Check your design against two named requirements from the Indian government guidelines and against language and bandwidth conditions your users will actually meet.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: The guidelines site with its free PDF manual, your browser's throttling, and hand-written text in a second script if your prototype cannot render one. No paid localisation service is required for any of this.

- Starting material: Your label work and current screens.
- Create HaruCourse/Practice/m11-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and choose two requirements

- Open the assigned guidelines and choose two requirements relevant to your product.
- Write each in your own words.

**You should end up with:** Two requirements from the Indian government guidelines, each written in your own words with the reason you chose it.

Worksheet fields for this step:

- Requirement 1 · what it asks, in your own words, and why you chose it
- Requirement 2 · what it asks, in your own words, and why you chose it — Choose ones your product actually touches. Two you can act on beat six you cannot.

<details>
<summary>Help with this step</summary>

- **The Indian guidelines:** Guidelines published for Indian government websites and apps, covering accessibility, local language and mobile use together rather than separately.
- **Choosing a requirement:** Picking the ones your product actually touches. Two you can act on this week are worth more than a list copied out in full.

Stuck starting? Open the guidelines and look for the sections on language and on mobile before anything else.

Is it enough? Both are in your own words, and each says why this product is affected by it.

</details>

#### 2. Compare against your design

- Check your screens against each requirement.
- Record where you meet it, where you do not, and what would be needed.

**You should end up with:** Your screens compared against both requirements, naming where you meet them, where you do not, and what would be needed.

Worksheet fields for this step:

- Requirement 1 · where you meet it, where you do not, and what would be needed
- Requirement 2 · where you meet it, where you do not, and what would be needed

<details>
<summary>Help with this step</summary>

- **What would be needed:** The actual change, named. Not “improve language support” but “month names come from a list rather than being written in English”.

Stuck starting? Take requirement one and walk one screen against it before writing anything general.

Is it enough? Each gap names a change somebody could make rather than an area to improve.

</details>

#### 3. Check language and formats

**See it first.** Made-up example. Checking the language readiness of a tool-library product, and deciding it was a job for after launch.

- **What I told myself:** The product is English-only for now. Translation is a later project, so there is nothing to do in this lesson beyond noting it.
- **What I looked at anyway:** Three things: the navigation labels, the date format, and the promotional banner with its price set inside the picture.
- **What each one costs later:** The navigation is a row of five short English words with no room to grow; several languages need half again the width. The date is written 03/04, which is two different days depending on where you grew up. The banner is a picture, so translating it means redrawing it.
- **What the cheap version was:** Let the navigation wrap and give it room. Write dates as 3 April 2026. Take the price out of the image. Three changes, one afternoon, no translator involved.
- **What I still deferred:** Actual translation, an input method for a second script, and language-dependent sorting. Those are real projects and they are not made harder by today.

**The wrong turn:** The wrong turn is treating language as a switch you flip later. Most of the expense is not the translating; it is the layouts, the images and the formats decided now by somebody who was not thinking about it.

**What it costs:** Giving labels room to grow means the English navigation has more space around it than it strictly needs, and looks slightly less tight today.

**Still unknown:** Still unknown: which languages this product would actually need. I designed for the string lengths to change rather than for a particular language, because I do not know which one.

- Check date, number and address formats against local convention.
- Find any text embedded in images and move it out.
- Simplify wording that depends on idiom.

**You should end up with:** Formats checked against local convention, embedded text moved out, and idiom replaced with plainer wording.

Worksheet fields for this step:

- Date, number and address formats in your design, and what you changed
- Any text still baked into an image, and where it went
- Wording that depends on idiom, and the plainer version — Anything that only works if you grew up with the phrase. Get the ball rolling, touch base, a quick heads-up.

<details>
<summary>Help with this step</summary>

- **Localisation:** Making a product work in another language and convention. Most of its cost is decided during design, by layouts built to English string lengths and text baked into pictures.
- **Idiom:** A phrase whose meaning is not its words. It reads as friendly to people who grew up with it and as noise to everybody else, including translation.

Stuck starting? Find every date in your product and write it the way you would say it aloud.

Is it enough? No format in your product could be read two ways, and no meaning is left inside a picture.

</details>

#### 4. Check script and connection

**See it first.** Made-up example. Timing a tool-library page on a throttled connection, and timing the wrong moment.

- **What I measured first:** I threw the connection down to slow, loaded the page, and watched the browser’s loading indicator. It stopped at 18 seconds. I wrote 18 seconds down.
- **What that number describes:** When everything finished arriving, including three photographs below the fold that nobody had scrolled to. It is a number about the page, not about the person.
- **What I had not noticed:** The search box and the first four tools were readable at about 11 seconds. From then on the person could work while the rest arrived.
- **The other direction:** On a second page the indicator stopped at 6 seconds and the list was still empty, because the content arrived after the page did. Time to usable there was 9 seconds, and the smaller number was the flattering one.
- **What I recorded:** Time to usable, with the throttle setting beside it, and a note of what “usable” meant on each page: the search box and the first results.

**The wrong turn:** The wrong turn is timing when loading stops, because that is the number the browser offers you. It can be far too pessimistic or far too optimistic, and it is never about what the person can do.

**What it costs:** Time to usable needs you to decide what usable means on each page and write it down, which is a judgement somebody could disagree with. A number with a definition beats a number without one.

**Still unknown:** Still unknown: how this behaves on a real slow connection rather than a throttled fast one. Throttling models the speed and not the dropouts, and this lesson is not claiming otherwise.

- Render key labels in an Indic script and check for clipping.
- Increase line height where characters are cut.
- Load on a throttled connection and time when the page becomes usable.

**You should end up with:** Key labels rendered in an Indic script with clipping fixed, and a timed load on a throttled connection.

**Try it with help.** Six observations from a made up check on a tool-library product. For each one, decide what kind of problem it is.

- The five navigation labels fit exactly, with no room to grow, and the row does not wrap.
  - **a layout decision made now** — Any language with longer words breaks this, and letting it wrap costs nothing today. It is a decision about the container, not about words.
  - a translation job for later — The translating is later. The room for the translation is a choice you are making now.
  - not a problem — It is not a problem in English, which is exactly why it survives until the day it becomes an expensive one.
- Dates are written 03/04 with no year and no month name.
  - **a layout decision made now** — It reads as two different days depending on where somebody grew up, today, in English. Writing 3 April 2026 fixes it in a minute.
  - a translation job for later — Nothing needs translating. The ambiguity is in the format itself.
  - not a problem — Two readers reading two different days from the same booking is a real problem before anything is translated.
- A label written in Devanagari has the mark above the character cut off by the line height.
  - **a layout decision made now** — Line height is set in your own design. A cut matra can change the word, so this is a correctness problem rather than a cosmetic one.
  - a translation job for later — The text is already there. What is failing is the space you gave it.
  - not a problem — A vowel mark removed is a different word, not a slightly untidy one.
- The class list is sorted alphabetically by a rule that assumes Latin letters.
  - a layout decision made now — Nothing about the layout causes it, and you cannot fix the sorting rule from a design file.
  - **a translation job for later** — Sorting is language-dependent and genuinely belongs with real language support. Recording it as a known limitation now is the right move.
  - not a problem — It will produce an order that looks arbitrary to a reader of that language. It is a real limitation, and a deferred one.
- The offer is set inside a promotional picture.
  - **a layout decision made now** — Translating a picture means redrawing it, for every language, for ever. Taking the words out now is a design change you can make today.
  - a translation job for later — It is made far more expensive by leaving it, which is what makes it a decision for now.
  - not a problem — It is invisible to translation, to search, to enlargement and to anybody listening.
- A notification on the lock screen names the exact class that was booked.
  - **a layout decision made now** — On a shared device the lock screen is read by whoever is nearby. Saying “a class you booked” instead is a wording decision available immediately.
  - a translation job for later — Nothing here is about language at all.
  - not a problem — It assumes the phone belongs to one person, which is the assumption this lesson is asking you to question.

**Then:** Now go through your own findings and mark each one the same way, so the deferred list is deliberate rather than accidental.

**What to watch for:** The useful split is between what you are deciding now and what you are deferring. Almost everything expensive about later language support is a container, an image or a format chosen today by somebody who was not thinking about it.

Worksheet fields for this step:

- Which labels you rendered in an Indic script, and what happened — If your prototype cannot render one, write the labels by hand on paper at the same size. That is a real check.
- What you changed about line height or container size
- How you throttled the connection, and the seconds until the page was usable

<details>
<summary>Help with this step</summary>

- **Matra:** A vowel mark written above or below the base character in several Indic scripts. A line height set for Latin text cuts them off, and the word becomes a different word.
- **Time to usable:** Seconds until somebody could actually do something, not until everything has finished loading. It is the number that matters on a slow connection.

Stuck starting? Write three of your labels by hand in an Indic script at the same size, or render them if your prototype can.

Is it enough? You have a number of seconds for the throttled load, not an impression that it felt slow.

</details>

#### 5. Record

- Write what you fixed and what remains.
- Note where the international guidance and the Indian guidance differ.
- Save the comparison with the evidence.

**You should end up with:** What you fixed, what remains, and where the Indian guidance and the international guidance differ for your product.

Worksheet fields for this step:

- What you fixed and what remains
- Where the Indian guidance and the international guidance differ for your product
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Shared device:** One phone used by several people. It changes what private means: lock-screen text, saved details, history and notifications are all read by somebody else.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? List the fixes first, then ask what the international guidance you read earlier did not mention at all.

Is it enough? The differences you name are about this product rather than about the documents in general.

</details>

**Save and continue.** Saved for you: The two requirements, both comparisons, the language checks and the timing save as you type, on this device first and then online. Kept outside the app: A photograph of hand-written script labels stays in your own folder; note its file name in step 4. The guidelines site needs no account and nothing is uploaded to it. What your creator sees: Your creator reads the split between what you decided now and what you deferred. A deliberate deferral with a reason reads far better than a silent one. Your next action: Open Your work and choose Ready for review. The last lesson of the module turns all of this into one honest statement.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Choose two requirements that touch your product and walk your screens against each.

</details>

<details>
<summary>Hint 2</summary>

List every formatted value and every image containing words, then fix each.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Access in the Indian context.
Task: Check your design against two named requirements from the Indian government guidelines and against language and bandwidth conditions your users will actually meet.
Challenge one thing at a time, and start with the mistake this lesson is about: “Localisation comes after launch.” Layouts built to English string lengths, text baked into images and hard-coded date formats are decisions that make later localisation expensive. The cheap steps are design decisions available now.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the comparison and ask whether two named requirements are compared with results. Look at the format and text list and ask whether formats and embedded text are checked and fixed. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m11-l11-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Two named requirements are compared with results: Two requirements quoted in your own words with a met, unmet or partial result each. Formats and embedded text are checked and fixed: A check of date, number and address formats, and a list of text moved out of images. A second script was rendered and clipping checked: Labels rendered in an Indic script, with clipping identified and line height adjusted. Time to usable on a slow connection is recorded: A throttled load with a recorded time to first usable content.

**Bring forward:** This section distinguishes a designer who has worked with Indian and multilingual constraints from one who has read international guidance. Include the script and timing evidence. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Read and choose two requirements (~25 min): Open the assigned guidelines and choose two requirements relevant to your product. Write each in your own words.
- Compare against your design (~30 min): Check your screens against each requirement. Record where you meet it, where you do not, and what would be needed.
- Check language and formats (~25 min): Check date, number and address formats against local convention. Find any text embedded in images and move it out. Simplify wording that depends on idiom.
- Check script and connection (~25 min): Render key labels in an Indic script and check for clipping. Increase line height where characters are cut. Load on a throttled connection and time when the page becomes usable.
- Record (~15 min): Write what you fixed and what remains. Note where the international guidance and the Indian guidance differ. Save the comparison with the evidence.

Pause after any step; save the artifact and next action.

**Free tool path.** The guidelines site with its free PDF manual, your browser's throttling, and hand-written text in a second script if your prototype cannot render one. No paid localisation service is required for any of this.

### Output

Two named requirements compared against your design; A language check covering formats, embedded text and plain wording; A script rendering check with line height and clipping; A slow-connection check with a recorded time to usable

### Checks

- Why is language an accessibility question? Answer: Because a person who cannot read the interface cannot use it, whatever its contrast and focus behaviour. The barrier is the same kind; only the cause differs.
- What changes with a different script? Answer: Line height needs, character clipping, sorting order and input methods. A layout tuned to Latin text frequently cuts marks that carry meaning.
- How does a slow connection exclude people? Answer: By making the product unusable at particular times and places. It is a situational barrier with the same effect as a permanent one, and it is measurable with throttling.

### Rubric and remediation

**Two named requirements are compared with results**

Adequate evidence: Two requirements quoted in your own words with a met, unmet or partial result each.

- 0 — No comparison.
- 1 — Requirements named without checking your design.
- 2 — Both compared with specific results.
- 3 — As adequate, and one requirement produced a change to the design.

If below 2: Choose two requirements that touch your product and walk your screens against each. Show at recheck: The comparison.

**Formats and embedded text are checked and fixed**

Adequate evidence: A check of date, number and address formats, and a list of text moved out of images.

- 0 — Not checked.
- 1 — Formats checked but embedded text left.
- 2 — Both checked with fixes made.
- 3 — As adequate, and wording was simplified where it depended on idiom.

If below 2: List every formatted value and every image containing words, then fix each. Show at recheck: The format and text list.

**A second script was rendered and clipping checked**

Adequate evidence: Labels rendered in an Indic script, with clipping identified and line height adjusted.

- 0 — Not attempted.
- 1 — Attempted without checking for clipping.
- 2 — Rendered, clipping checked and adjusted.
- 3 — As adequate, and sorting order is noted as language-dependent.

If below 2: Write the labels by hand in the script if your prototype cannot render it, and record that the digital rendering is untested. Show at recheck: The script check.

**Time to usable on a slow connection is recorded**

Adequate evidence: A throttled load with a recorded time to first usable content.

- 0 — Not measured.
- 1 — Loaded slowly without timing.
- 2 — Timed with the profile recorded.
- 3 — As adequate, and one change was made because of the result.

If below 2: Throttle the connection, disable the cache, and time when the page first becomes usable rather than fully loaded. Show at recheck: The timing record.

### Portfolio contribution

This section distinguishes a designer who has worked with Indian and multilingual constraints from one who has read international guidance. Include the script and timing evidence.

### Assigned resources

- R43: [Guidelines for Indian Government Websites and Apps](https://guidelines.india.gov.in/) — Two requirements of your choice from the accessibility, local-language or mobile sections. Purpose: Supplies the India-specific requirements your learner's work will be held to. Effort: 45–60 selected min. Free HTML index with a downloadable PDF manual and no account. Verified 2026-09-06; the site records its own update as 4 September 2026. Written for government sites; comparing two requirements is the exercise, not reading it end to end. Fallback: R41.
- R42: [W3C: localization versus internationalization](https://www.w3.org/International/questions/qa-i18n) — What internationalization involves: encoding, text expansion, formats and sorting. Purpose: Explains the mechanical consequences of language and script differences. Effort: 10–15 min. Free reading, no account. Verified 2026-09-06. A short definitional page with no layout guidance; the rendering and timing tests are the practical work. Fallback: R10.

## Lesson 12: An honest accessibility statement

Stable ID: m11-l12-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Write an accessibility statement naming what you tested, what you found, what remains unfixed and what you have not tested at all, plus a plan for involving disabled participants.

**Bring forward.** Every check from this module and your barrier list.

A statement that claims compliance you have not tested is worse than none. A statement that says exactly what you know is a professional artefact.

### Learn

An accessibility statement is a factual document, and its usefulness comes from precision. What was checked, with which software, on what device, on what date. Which criteria you worked to. What you found and fixed. What you found and did not fix, and why. What you have not examined at all. Read by someone who relies on assistive technology, that document tells them whether to try, which is the point.

Known problems belong in it. Listing an unfixed problem is not an admission of incompetence; it is information a person can act on, and it commits you publicly to a repair. The alternative — silence — means someone discovers it by being unable to complete a task.

The tested-versus-specified distinction runs through this whole module. You specified associations, key behaviour and announcements; you tested some of them on your own device. Both are real; conflating them turns a design intention into a claim about a build.

Involving disabled participants is the gap this module cannot close by itself, and the plan is part of the deliverable: who you would recruit, through which organisations, with what lead time, and what it would cost in time or compensation. Your recruitment reading gives the lead times, and they are longer than for other participants — a month is realistic, six to eight weeks where cognitive disabilities are involved.

**Common misconception.** “We should not publish a statement until everything is fixed.” Then it will never be published. A dated, specific statement with known problems listed is more useful to a person deciding whether to attempt your product than a perfect one that does not exist.

### Worked example

The statement ran to one page. Tested: keyboard operation of the booking task on Windows with the pointer unavailable; a twenty-minute VoiceOver session on an iPhone; contrast measured for all text pairs; 200 per cent text; greyscale and colour-vision simulation; a throttled load. Found and fixed: nine items, listed. Found and not yet fixed: three, listed with intended dates — the date picker's arrow-key support, the unannounced filter change, and captions for the introductory video. Not tested at all: any use with switch access or voice control, any Android screen reader, and any session with a person who uses assistive technology daily. Target: WCAG 2.2 level AA, worked to and not tested for conformance. Plan: contact two local disability organisations, allow a month, and budget compensation.

#### An honest accessibility statement

Write an accessibility statement naming what you tested, what you found, what remains unfixed and what you have not tested at all, plus a plan for involving disabled participants.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: One page of plain text. The statement is writing, and the honesty is the whole deliverable.

- Starting material: All check results and your original barrier list.
- Create HaruCourse/Practice/m11-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Collect the evidence

- Gather every check from this module with its date and conditions.
- Separate results into fixed, unfixed and untested.

**You should end up with:** Every check from this module gathered with its date and conditions, sorted into fixed, not yet fixed and untested.

Worksheet fields for this step:

- Every check from this module, with its date and conditions
- Found and fixed
- Found and not yet fixed, each with what you intend to do

<details>
<summary>Help with this step</summary>

- **Conditions:** The device, software, version and circumstances a check was run under. Without them a result cannot be repeated or judged.
- **Not yet fixed:** A known problem with an intention attached. It is a more useful thing to publish than a promise that everything is fine.

Stuck starting? Go back through the eleven lessons and list every check you actually ran, with its date.

Is it enough? Every item says when and under what conditions, and nothing is listed that you did not do.

</details>

#### 2. Write the statement

**See it first.** Made-up example. Writing the statement for a tool-library product, and waiting until it would be a good one.

- **What I decided at first:** Not to publish yet. Three known problems were still open, and a statement listing them felt like advertising the product’s faults.
- **Who that decision was for:** Me. The person it affects is somebody deciding whether it is worth attempting to borrow a drill from us at all.
- **What they get with no statement:** Nothing. They try, they meet the date picker that cannot be operated, they lose twenty minutes, and they cannot tell whether anything else would have worked.
- **What they get with the honest one:** They know the date picker is broken and being repaired, that keyboard operation of everything else was checked in March, and that nobody has tested with a switch device. They can decide in thirty seconds.
- **What I published:** One page, dated, with three open problems and their intended dates, and a contact line. It is not a good statement about the product. It is a good statement.

**The wrong turn:** The wrong turn is waiting until everything is fixed, because that day does not arrive and the silence in the meantime costs somebody a wasted afternoon.

**What it costs:** Publishing known problems means anybody can read your faults, including a competitor and a client. That is the cost, and it is smaller than it feels.

**Still unknown:** Still unknown: whether the three open items are the three that matter most. Nobody who uses assistive technology daily has told us, and the statement says so.

- State what was tested, with what software, on which device and when.
- List the known problems with intended repairs.
- State the target level and that conformance was not tested.

**You should end up with:** A statement saying what was tested with what, on which device and when, the known problems, and the target level with no conformance claim.

Worksheet fields for this step:

- What was tested, with what software, on which device, and when — A reader should be able to tell whether their own situation was covered.
- The known problems, written so somebody deciding whether to try your product can decide
- The target level, and the sentence saying conformance was not tested

<details>
<summary>Help with this step</summary>

- **Accessibility statement:** A public page saying what you know about how well your product works for disabled people. Its value comes from what it admits.
- **Conformance:** A claim that a finished thing meets every criterion at a level, resting on testing. Working to a target and having tested for conformance are different sentences.

Stuck starting? Write the tested paragraph first, with dates. The rest of the statement is easier once that exists.

Is it enough? A reader could tell from the first paragraph whether their own situation was covered by anything you did.

</details>

#### 3. Write the untested list

- Name what you have not examined, including assistive technologies you do not use.
- Say which untested area you think most likely hides a problem.

**You should end up with:** A named list of what you have not examined, and which untested area you think most likely hides a problem.

**Try it with help.** Six sentences from a made up accessibility statement. For each one, decide what it actually claims.

- On 12 March the booking task was completed using only a keyboard on a Windows laptop, with three failures found and two repaired.
  - **a tested result** — Date, method, device, outcome, and the number still open. A reader can judge it and, in principle, repeat it.
  - a specified intention — Nothing here is about what should happen. It says what did happen.
  - an untested claim — It is bounded exactly to what was done and claims nothing beyond it.
- This product conforms to WCAG 2.2 level AA.
  - a tested result — Conformance is a claim about every criterion in a tested build. Nothing in this module tested every criterion.
  - a specified intention — It is not written as an intention. It is written as a fact about the product.
  - **an untested claim** — This is the sentence the lesson exists to keep out. The honest version says which level you worked to, and that conformance was not tested.
- Error messages are announced when they appear.
  - a tested result — The forms lesson recorded this as specified and unverified, and the screen-reader lesson found it was not happening.
  - **a specified intention** — It describes required behaviour. Written in a statement without that qualifier, it reads as a fact and is not one.
  - an untested claim — It is closer to this than it looks, which is why the qualifier matters so much in a published document.
- We have not tested with switch access or voice control.
  - **a tested result** — It is an accurate report of the state of your knowledge, which is exactly what a statement is for. Naming what you did not do is a result.
  - a specified intention — Nothing is being promised here.
  - an untested claim — It claims nothing about the product at all. It describes the testing.
- The product is fully accessible.
  - a tested result — No test could establish it. Accessibility is not a state a product reaches and holds.
  - a specified intention — As an intention it is unfalsifiable, which is worse rather than better.
  - **an untested claim** — Fully is the word that makes it untestable. It is also the sentence a reader who meets a barrier will remember.
- Captions for the introduction video are being corrected by hand and will be published by the end of April.
  - a tested result — Nothing has been tested. The captions do not exist in their corrected form yet.
  - **a specified intention** — A known problem with a named repair and a date. This is the right shape for the unfixed list.
  - an untested claim — It claims nothing about the present state beyond that the captions are wrong, which is true.

**Then:** Now read your own draft statement line by line and mark each sentence the same way. Anything in the third group is rewritten or removed.

**What to watch for:** The error-message line is the one worth studying. A sentence describing what should happen reads as a fact once it is published, so a statement has to say tested, specified or untested about every claim it makes.

Worksheet fields for this step:

- Everything you have not examined, including assistive technology you do not use — Switch access, voice control, screen readers on platforms you do not own, braille displays, magnification.
- Which untested area you think most likely hides a problem, and why

<details>
<summary>Help with this step</summary>

- **Untested:** Not looked at, by anybody, so far. It is different from tested and failing, and different again from specified and unverified.
- **Naming the technology:** Switch access, voice control, braille displays, magnification, screen readers on platforms you do not own. A list of names is honest; “further testing needed” is not.

Stuck starting? List the assistive technologies you do not personally use. That list is most of this step.

Is it enough? Every line names something specific, and none of them says further testing is needed.

</details>

#### 4. Plan participant testing

**See it first.** Made-up example. Planning participant testing for a tool-library product, and planning it the way an ordinary session is planned.

- **What I wrote first:** Recruit three participants who use assistive technology, one week, video call, the usual thank-you voucher.
- **The first thing wrong with it:** One week. Reaching people through an organisation takes longer than a general recruitment call, because there is a person in the middle who has their own work.
- **The second thing:** Video call, chosen by me. Somebody may need their own device and their own settings, which is exactly the setup worth watching, and a call on my platform may be the least accessible part of the session.
- **The third thing:** The usual voucher. These participants bring expertise about a technology I do not use, and they are being asked to help fix an exclusion that is mine. Paying them the rate for a general session undervalues both.
- **What the plan became:** A month’s lead time through two named local organisations, the session on the participant’s own device and platform, accommodations asked about in the invitation, and a fee rather than a voucher.

**The wrong turn:** The wrong turn is planning it as an ordinary usability session with a different recruitment line. Lead time, format and payment all change, and all three decide whether the session happens at all.

**What it costs:** A month and a fee are real costs, and they will be questioned. The alternative is a plan that looks reasonable on paper and never produces a session.

**Still unknown:** Still unknown: whether the organisations I named would want to work this way. They may have their own process and their own view of what is fair, and the plan should bend to it.

- Read the assigned recruitment guidance on lead times and accommodations.
- Name the organisations or routes you would approach.
- Write the lead time and what compensation you would offer.

**You should end up with:** Named routes to disabled participants, a lead time, the accommodations you would prepare, and the compensation you would offer.

Worksheet fields for this step:

- The organisations or routes you would approach — Local disability organisations, user groups, existing contacts. Naming real routes is the point; you are not required to contact them in this lesson.
- The lead time you would allow, and the accommodations you would prepare for
- What compensation you would offer, and why that figure — People are giving you expertise and time. Unpaid testing by disabled people is asking the excluded to fix the exclusion for nothing.

<details>
<summary>Help with this step</summary>

- **Lead time:** How long before a session you need to start arranging it. Accessible sessions need longer: transport, interpreters, accommodation questions and people’s own schedules.
- **Accommodation:** What somebody needs in order to take part: a particular format, an interpreter, breaks, their own device, a remote option. Asking in advance is part of the invitation.

Stuck starting? Find two real organisations or groups you could actually approach, and write their names.

Is it enough? The plan names real routes, a lead time in weeks, and a figure you could defend.

</details>

#### 5. Check the language

- Remove any sentence claiming compliance, conformance or full accessibility.
- Add a contact route for someone who meets a barrier.
- Save the statement with the evidence behind it.

**You should end up with:** Every compliance claim removed, a contact route for somebody who meets a barrier, and the repair the Check questions asked for.

Worksheet fields for this step:

- Every sentence you removed because it claimed compliance, conformance or full accessibility
- How somebody who meets a barrier can tell you
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Contact route:** A way for a person who meets a barrier to tell you, that does not itself require the part of your product that is broken.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Search your draft for the words compliant, conformant, fully and accessible, and read each sentence again.

Is it enough? The contact route works even for somebody blocked by the problem they are reporting.

</details>

**Save and continue.** Saved for you: Your evidence list, the statement, the untested list and the participant plan save as you type, on this device first and then online. Kept outside the app: The published statement will live with your product rather than here. Keep the draft in your own folder too if you prefer, and note where. What your creator sees: Your creator reads the untested list and the open problems first. The statement is the module’s case-study artefact, and its value comes from what it admits. Your next action: Open Your work and choose Ready for review. This closes Module 11. Module 12 starts on web foundations, and the untested list you wrote here is what a real build will begin to answer.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Go back through the module and record the conditions for each check you ran.

</details>

<details>
<summary>Hint 2</summary>

Split your results into the three categories; anything you specified but did not verify goes in untested.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: An honest accessibility statement.
Task: Write an accessibility statement naming what you tested, what you found, what remains unfixed and what you have not tested at all, plus a plan for involving disabled participants.
Challenge one thing at a time, and start with the mistake this lesson is about: “We should not publish a statement until everything is fixed.” Then it will never be published. A dated, specific statement with known problems listed is more useful to a person deciding whether to attempt your product than a perfect one that does not exist.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the tested list and ask whether the statement names what was tested, how and when. Look at the three lists and ask whether fixed, unfixed and untested are listed separately. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m11-l12-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The statement names what was tested, how and when: A dated list of checks with software, device and task named. Fixed, unfixed and untested are listed separately: Three distinct lists, with intended repairs for the unfixed items. No untested conformance is claimed: A stated target level with an explicit statement that conformance was not tested. A participant testing plan names routes, lead times and compensation: A written plan with organisations or routes, realistic lead times and an offer.

**Bring forward:** The accessibility statement is the module's case-study artefact and the clearest signal of professional judgement in the whole course: it is a document whose value comes from what it admits. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Collect the evidence (~25 min): Gather every check from this module with its date and conditions. Separate results into fixed, unfixed and untested.
- Write the statement (~30 min): State what was tested, with what software, on which device and when. List the known problems with intended repairs. State the target level and that conformance was not tested.
- Write the untested list (~25 min): Name what you have not examined, including assistive technologies you do not use. Say which untested area you think most likely hides a problem.
- Plan participant testing (~25 min): Read the assigned recruitment guidance on lead times and accommodations. Name the organisations or routes you would approach. Write the lead time and what compensation you would offer.
- Check the language (~15 min): Remove any sentence claiming compliance, conformance or full accessibility. Add a contact route for someone who meets a barrier. Save the statement with the evidence behind it.

Pause after any step; save the artifact and next action.

**Free tool path.** One page of plain text. The statement is writing, and the honesty is the whole deliverable.

### Output

A dated statement of what was tested, with what and on which device; Lists of fixed, unfixed and untested items; A stated target level with no untested conformance claim; A plan for testing with disabled participants, with lead times

### Checks

- Why list unfixed problems publicly? Answer: Because it tells a person whether to attempt the task and commits you to a repair. The alternative is that they discover it by failing.
- What is the difference between a target and a claim? Answer: A target is what you worked to; a claim is what you tested. Stating the target honestly is normal practice, and claiming untested conformance is not.
- Why does the plan for participant testing belong here? Answer: Because it is the gap self-testing cannot close. Naming the route, the lead time and the cost turns an intention into something that can actually be scheduled.

### Rubric and remediation

**The statement names what was tested, how and when**

Adequate evidence: A dated list of checks with software, device and task named.

- 0 — General claims about accessibility.
- 1 — Checks named without conditions or dates.
- 2 — Each check with software, device and date.
- 3 — As adequate, and the duration of each test is included so the depth is visible.

If below 2: Go back through the module and record the conditions for each check you ran. Show at recheck: The tested list.

**Fixed, unfixed and untested are listed separately**

Adequate evidence: Three distinct lists, with intended repairs for the unfixed items.

- 0 — One undifferentiated list, or only fixed items.
- 1 — Fixed and unfixed listed; untested omitted.
- 2 — All three separated with repairs named for the unfixed.
- 3 — As adequate, and the untested list names the area most likely to hide a problem.

If below 2: Split your results into the three categories; anything you specified but did not verify goes in untested. Show at recheck: The three lists.

**No untested conformance is claimed**

Adequate evidence: A stated target level with an explicit statement that conformance was not tested.

- 0 — Compliance or conformance claimed.
- 1 — Ambiguous wording that implies conformance.
- 2 — Target stated and the absence of a conformance test stated plainly.
- 3 — As adequate, and the statement says what a conformance evaluation would require.

If below 2: Search the statement for compliant, conformant and accessible-as-a-claim, and rewrite each as what you worked to and what you tested. Show at recheck: The revised statement.

**A participant testing plan names routes, lead times and compensation**

Adequate evidence: A written plan with organisations or routes, realistic lead times and an offer.

- 0 — No plan.
- 1 — An intention without routes or timings.
- 2 — Routes, lead times and compensation all stated.
- 3 — As adequate, and the plan accounts for accommodations the sessions themselves will need.

If below 2: Use the assigned lead times — up to a month, longer for cognitive disabilities — and name two real routes you could approach. Show at recheck: The plan.

### Portfolio contribution

The accessibility statement is the module's case-study artefact and the clearest signal of professional judgement in the whole course: it is a document whose value comes from what it admits.

### Assigned resources

- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — The criteria you worked to, revisited to confirm what your statement can and cannot say. Purpose: Keeps the statement's target accurate and its claims bounded. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. An index of the standard; conformance is a property of a tested build, not of a design that consulted the criteria. Fallback: R41.
- R52: [GOV.UK: finding user research participants](https://www.gov.uk/service-manual/user-research/find-user-research-participants) — Recruiting disabled participants, lead times and accommodations. Purpose: Supplies realistic timings and requirements for the testing this module could not do. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06; last updated 28 April 2020. It advises contacting organisations at least a month ahead, longer where cognitive disabilities are involved, and gives no compensation amounts. Fallback: R08.
