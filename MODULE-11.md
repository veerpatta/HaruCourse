# Accessible product design

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the all-course action contract](docs/COURSE-AUTHORING.md#all-course-action-contract--13-september-2026). All 224 published teaching lessons use saved action flows. Published, teaching-refined, learner-validated and assessed remain separate states.

Generated from src/module11.ts; edit that source, then run npm run docs:generate. Level 3 · Module m11 · requirement areas 11. Optional effort 35 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m08. This is guidance for meaningful practice, not a lock. Module approved resource pair: R14 / R10. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: Who is excluded, and by what

Stable ID: m11-l01-v1. Core.

Accessibility work fails when it starts from a checklist. It works when it starts from a person who cannot do something and the decision that stopped them.

Bring: Your current screens and interaction specifications.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Five specific barriers naming person, situation and cause
- The design decision behind each barrier
- A note of which are permanent, temporary or situational
- One barrier you had not previously considered

### Start with a clear task

Section: learn. Stable action: welcome.

Identify five specific barriers in your own product, each naming the person, the situation and the design decision that causes it.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Disability is a mismatch between a person and a design, not a property of the person.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Barriers are permanent, temporary and situational: one arm in a cast, bright sunlight, a noisy room.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Name the specific barrier, not the category: “focus is invisible on the tinted panel”.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Most barriers come from ordinary decisions: a colour, a target size, a hidden control.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Fixing one barrier usually improves the product for everyone.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Five barriers from the booking product. A person using a screen reader cannot tell which classes are full, because availability is shown only by a colour dot. A person with limited fine motor control cannot remove a shortlist item, because the only route is a swipe. Anyone in sunlight cannot read the quiet caption at 3.1:1 contrast. A person with a tremor mis-taps the destructive cancel control, which sits 4px from the primary action. And a person using the site in Hindi meets an English-only date format, which is a language barrier the team had never considered. Each names a decision rather than a category.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read the introduction

Section: practice-plan. Stable action: step-1-brief.

One sentence in your own words saying what makes something a barrier, written as a mismatch rather than as a property of a person.

- Read the assigned accessibility introduction.
- Write in your own words what makes something a barrier.

**Start here:** Finish this sentence: “something is a barrier when the design …”.

**Enough:** Your sentence names something the design does, and would still make sense if you never used the word disability.

**Barrier:** Something in a design that stops a particular person doing a particular thing. It lives in the design, which is why it can be removed.

**Assistive technology:** Software or hardware someone uses to reach a product: a screen reader, magnification, voice control, a switch. Most barriers are met by people using none of it.


### In your own words: what makes something a barrier?

Section: practice-plan. Stable action: write-barrier-definition.

Write it as something about the meeting between a person and a design, not about the person.

**Answer:** In your own words: what makes something a barrier?

Write it as something about the meeting between a person and a design, not about the person.


### Walk your product looking for exclusion

Section: practice-plan. Stable action: step-2-brief.

Five barriers, each naming a person, a situation, the task and the thing that stopped them.

- Walk one task asking at each step who could not do this.
- Include vision, hearing, motor, cognitive and language differences.
- Write each barrier as a person in a situation, not a category.

**Start here:** Pick one task from your own product and walk it slowly, asking at each screen who could not do this.

**Enough:** Every one of the five could be handed to somebody else, who could reproduce it without asking you a question.

**Permanent, temporary, situational:** One person may have low vision always, another after eye surgery, a third only in sunlight. All three meet the same design.

**Category:** A group of people named as a shorthand, such as “blind users” or “older users”. It sounds like a finding and cannot be fixed, because it names nobody in particular and no decision at all.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Writing the first barrier for a class-booking product, and writing a category instead.

**What I wrote first:** “Blind users cannot use the booking flow.” I wrote it, felt serious about accessibility, and moved to the next line.

**Why it was no use on Monday:** I could not act on it. It does not say which screen, which task, or what to change. A fortnight later it would still be sitting there, true and inert.

**What I did instead:** I took one task — choose between two classes — and asked at each step what a person hears rather than sees. On the results screen, availability is a coloured dot with no text beside it.

**What I wrote in the end:** “A person using a screen reader, choosing between two classes, cannot tell which one is full, because availability is shown only as a red or green dot.” That names a decision I made in Module 8.

**What it cost me:** The specific version covers one screen instead of sounding like it covers everything. I need four more, and each one takes a walk through a real task.

**Wrong turn:** The wrong turn is writing the category, because it sounds like more coverage than the specific line does. It reads as serious, it is unarguable, and nothing about the product changes because of it.

**Trade-off:** Specific barriers are narrow. Somebody may ask whether five is enough, and five is certainly not all of them. Five you can fix beats twenty you cannot.

**Unknown:** Still unknown: whether a person using a screen reader would even reach that screen the way I did. Nothing here is testing with disabled people, and this list does not pretend to be.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-2-sort-1.

Six lines from a made up accessibility review of a tool-library product. For each one, decide what it actually is.

A person using a screen reader, choosing between two drills, cannot tell which is already out on loan, because that is shown only as a coloured dot.

- a named barrier
- a category
- a repair in disguise

<details>
<summary>After your attempt</summary>

a named barrier — It names the person, the moment, the task and the decision — a dot carrying meaning by colour alone. Every part of it can be changed.

a category — A category would stop at “screen reader users”. This one carries on into the task and the decision, which is the difference.

a repair in disguise — No repair appears here. Several would fit: a text label, a different pattern, a change to the list itself.

Now write your own five. If a line has no person, no task or no decision in it, it is one of the other two kinds.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-2-sort-2.

Six lines from a made up accessibility review of a tool-library product. For each one, decide what it actually is.

Older users struggle with the interface.

- a named barrier
- a category
- a repair in disguise

<details>
<summary>After your attempt</summary>

a named barrier — Nothing here says which screen, which task, or what stopped anybody. Struggling is a summary, not something you can point at.

a category — A group of people, a vague verb and no decision. It cannot be fixed because it names nothing to fix.

a repair in disguise — There is no repair in it either. It is the sentence people write when they have not walked a task yet.

Now write your own five. If a line has no person, no task or no decision in it, it is one of the other two kinds.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-2-sort-3.

Six lines from a made up accessibility review of a tool-library product. For each one, decide what it actually is.

We should increase all our text to 16px minimum.

- a named barrier
- a category
- a repair in disguise

<details>
<summary>After your attempt</summary>

a named barrier — It may well be a good change. It does not say who could not read what, so you cannot tell whether it fixes anything.

a category — It names no group of people at all. It jumps straight past the problem to an answer.

a repair in disguise — It arrives as a finding and is actually an answer. If the real barrier is contrast rather than size, this changes nothing and looks like progress.

Now write your own five. If a line has no person, no task or no decision in it, it is one of the other two kinds.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-2-sort-4.

Six lines from a made up accessibility review of a tool-library product. For each one, decide what it actually is.

Anyone collecting a tool outside cannot read the collection code, because it is grey on white at about 3 to 1.

- a named barrier
- a category
- a repair in disguise

<details>
<summary>After your attempt</summary>

a named barrier — The situation is the disability here: bright light. It names the task, the element and the measurement, so it is fixable and checkable.

a category — No group is named, which is exactly why it works. It describes a situation anybody can be in.

a repair in disguise — It stops before the repair. Darkening the text is one answer; moving the code out of the sunlight is another.

Now write your own five. If a line has no person, no task or no decision in it, it is one of the other two kinds.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-2-sort-5.

Six lines from a made up accessibility review of a tool-library product. For each one, decide what it actually is.

The product is not WCAG compliant.

- a named barrier
- a category
- a repair in disguise

<details>
<summary>After your attempt</summary>

a named barrier — It names no person, no task and no decision. It is a verdict on the whole product rather than a description of anything in it.

a category — This is the same shape as “older users struggle”, with a standard in place of a group. It is unarguable and unfixable as written.

a repair in disguise — There is no repair here to disguise. Compliance is an outcome, and this sentence does not say of what.

Now write your own five. If a line has no person, no task or no decision in it, it is one of the other two kinds.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-2-sort-6.

Six lines from a made up accessibility review of a tool-library product. For each one, decide what it actually is.

A person with a hand tremor, returning a tool, cannot remove an item from the basket, because swiping is the only route.

- a named barrier
- a category
- a repair in disguise

<details>
<summary>After your attempt</summary>

a named barrier — Person, task, and the decision that caused it: one route, and that route needs a controlled gesture. The fix becomes obvious once it is written this way, which is the point.

a category — It would be a category if it stopped at “people with tremors”. It does not.

a repair in disguise — Adding a visible remove control is the likely repair, and this line deliberately stops short of it.

Now write your own five. If a line has no person, no task or no decision in it, it is one of the other two kinds.

</details>


### Barrier 1 · who, in what situation, trying to do what, stopped by what

Section: practice-plan. Stable action: write-barrier-1.

Finish this sentence: a person who … trying to … cannot, because ….

**Answer:** Barrier 1 · who, in what situation, trying to do what, stopped by what

Finish this sentence: a person who … trying to … cannot, because ….

<details>
<summary>Example</summary>

Example (made up): a person using a screen reader, choosing between two classes, cannot tell which one is full, because availability is shown only as a red or green dot.

</details>


### Barrier 2 · who, in what situation, trying to do what, stopped by what

Section: practice-plan. Stable action: write-barrier-2.

Write your answer for “Barrier 2 · who, in what situation, trying to do what, stopped by what”. Use the task instructions below to decide what to include.

**Answer:** Barrier 2 · who, in what situation, trying to do what, stopped by what




### Barrier 3 · who, in what situation, trying to do what, stopped by what

Section: practice-plan. Stable action: write-barrier-3.

Write your answer for “Barrier 3 · who, in what situation, trying to do what, stopped by what”. Use the task instructions below to decide what to include.

**Answer:** Barrier 3 · who, in what situation, trying to do what, stopped by what




### Barrier 4 · who, in what situation, trying to do what, stopped by what

Section: practice-plan. Stable action: write-barrier-4.

Write your answer for “Barrier 4 · who, in what situation, trying to do what, stopped by what”. Use the task instructions below to decide what to include.

**Answer:** Barrier 4 · who, in what situation, trying to do what, stopped by what




### Barrier 5 · who, in what situation, trying to do what, stopped by what

Section: practice-plan. Stable action: write-barrier-5.

Write your answer for “Barrier 5 · who, in what situation, trying to do what, stopped by what”. Use the task instructions below to decide what to include.

**Answer:** Barrier 5 · who, in what situation, trying to do what, stopped by what




### Name the decisions

Section: practice-plan. Stable action: step-3-brief.

For each barrier, the design decision behind it, and whether you made that decision or inherited it.

- For each barrier, name the design decision that causes it.
- Mark whether the decision was deliberate or inherited.

**Start here:** Take your first barrier and ask where the thing that caused it is defined: a screen, a component, or a rule you wrote earlier.

**Enough:** No line reads as a general failing. Each names something with a location you could open.

**Inherited decision:** Something that arrived with a component, a template or a pattern you copied, and was never decided by you. It is still yours now.

**Deliberate decision:** Something you chose, usually for a reason you can still remember. These are the ones you can argue with.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Naming the decision behind a barrier in a tool-library product, and stopping one step too early.

**The barrier:** A person with a tremor cannot cancel a booking without sometimes hitting delete instead. The two controls sit four pixels apart.

**What I wrote as the decision:** “Bad spacing.” Accurate, and useless. It reads like a mistake nobody made, which is why it is comfortable to write.

**Where the decision actually lived:** I went back to the component. The pair was copied from the card in Module 8, where the two controls were harmless. The four pixels came with it.

**What I wrote instead:** “Inherited from the card component: destructive and primary actions in a tight pair, four pixels apart. Never decided here.”

**Why that sentence is worth more:** It tells me the fix belongs in the component rather than on this screen, and that the same pair is probably on three other screens I have not looked at.

**Wrong turn:** The wrong turn is writing the decision as a fault rather than as a choice with an address. A fault gets fixed where you noticed it, and the same barrier stays everywhere else it was copied to.

**Trade-off:** Tracing a decision back to the component takes longer than writing “bad spacing”, and it can mean reopening work you thought was finished.

**Unknown:** Still unknown: how many screens carry the same copied pair. I have not looked, and this lesson is not the place to; it goes on the list for the module review.


### For each barrier: the design decision that causes it

Section: practice-plan. Stable action: write-decisions.

Point at the screen, the specification or the component where the decision lives.

**Answer:** For each barrier: the design decision that causes it

Point at the screen, the specification or the component where the decision lives.


### For each decision: did you make it, or did it arrive with something you copied?

Section: practice-plan. Stable action: write-decision-origin.

Write your answer for “For each decision: did you make it, or did it arrive with something you copied?”. Use the task instructions below to decide what to include.

**Answer:** For each decision: did you make it, or did it arrive with something you copied?



<details>
<summary>Example</summary>

Example (made up): the swipe-to-remove came from a component I copied in Module 8. I never decided it; I inherited it.

</details>


### Test the situational cases

Section: practice-plan. Stable action: step-4-brief.

Three situational tests actually run, any barrier they revealed, and a note of which barriers affect more than one group.

- Try your product outdoors, one-handed, and at lowest brightness.
- Add any barrier these reveal.
- Note which barriers apply to more than one group.

**Start here:** Take your phone outside, or to the brightest window you have, and try the task you walked in step 2.

**Enough:** Each of the three lines says what you actually did and what you actually saw, including “nothing changed” where that is the truth.

**Situational barrier:** The same difficulty arriving from the circumstances rather than the person: sunlight, one hand on a rail, a noisy room, a cracked screen.

**Preliminary check:** Something you can run yourself, today, without special equipment. It finds real problems, and it is not testing with disabled people.


### What happened outdoors, one-handed, and at the lowest brightness

Section: practice-plan. Stable action: write-situational-tests.

Three short lines. If you could not go outdoors, say so and use the brightest light you have.

**Answer:** What happened outdoors, one-handed, and at the lowest brightness

Three short lines. If you could not go outdoors, say so and use the brightest light you have.


### Any barrier these tests added or changed

Section: practice-plan. Stable action: write-situational-found.

Write your answer for “Any barrier these tests added or changed”. Use the task instructions below to decide what to include.

**Answer:** Any barrier these tests added or changed




### Which barriers affect more than one group

Section: practice-plan. Stable action: write-overlap.

Write your answer for “Which barriers affect more than one group”. Use the task instructions below to decide what to include.

**Answer:** Which barriers affect more than one group



<details>
<summary>Example</summary>

Example (made up): the quiet caption stops the person with low vision, the person outdoors and the person on a dimmed screen.

</details>


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You have five barriers and four of them are about screen readers. What does that suggest?

- That you walked the product asking about one assistive technology rather than asking who could not do this.
- That screen readers really are where most accessibility problems are.
- Nothing in particular — five barriers is five barriers.

<details>
<summary>After your attempt</summary>

That you walked the product asking about one assistive technology rather than asking who could not do this. — Screen readers are the part of accessibility most people have heard of, so attention goes there first. Most barriers in a typical product are met by people using none: small targets, invisible focus, colour-only status, time limits.

That screen readers really are where most accessibility problems are. — They are where a particular kind of problem concentrates. Contrast, target size, keyboard routes and time limits affect far more people and appear in almost every product.

Nothing in particular — five barriers is five barriers. — What the five are about tells you what question you were asking. Four of one kind usually means the walk was looking for a technology instead of a person.

Improve: Walk the same task again asking about motor, cognitive and language differences, and replace one screen-reader barrier in step 2 with what that walk finds. Record the change in step 5.

Check again: Your five barriers cover at least three different kinds of difficulty.

Answers to revisit: barrier-1, barrier-2, barrier-3, barrier-4, barrier-5, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

One of your barriers reads “the colour contrast is poor throughout”. Why is that weaker than it looks?

- It names no person, no task and no element, so nobody can fix it and nobody can check it.
- It is fine as it stands, because contrast is measurable.
- Contrast belongs in a later lesson, so it should not be in this list.

<details>
<summary>After your attempt</summary>

It names no person, no task and no element, so nobody can fix it and nobody can check it. — Throughout is the word doing the damage. It sounds comprehensive and it points at nothing, so it survives every round of fixes unchanged.

It is fine as it stands, because contrast is measurable. — Contrast is measurable, and this sentence measures nothing. The measurable version names an element and a ratio.

Contrast belongs in a later lesson, so it should not be in this list. — It belongs here if it stops someone. The problem is the writing, not the topic.

Improve: Rewrite that barrier in step 2 naming one element, one task and what you actually saw. Record the change in step 5.

Check again: No barrier uses the words throughout, generally or everywhere.

Answers to revisit: barrier-1, barrier-2, barrier-3, barrier-4, barrier-5, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You ran the three situational tests and want to write “the product is accessible in daylight”. Is that allowed?

- It is not. You checked one task, on your device, with your eyes, and that is what you can say.
- It is, since you actually went outside and it worked.
- It is, as long as you add that more testing is needed.

<details>
<summary>After your attempt</summary>

It is not. You checked one task, on your device, with your eyes, and that is what you can say. — The honest sentence is the narrow one: which task, which device, what you saw. It is smaller and it is defensible, and this module asks you to keep that boundary visible in every lesson.

It is, since you actually went outside and it worked. — It worked for you, on your screen, at your brightness, with your vision. Each of those is a condition on the claim, and the sentence drops all four.

It is, as long as you add that more testing is needed. — A general claim followed by a caveat is still quoted as the general claim. Narrow the sentence itself rather than appending a disclaimer to it.

Improve: Rewrite your situational lines in step 4 to say which task, which device and what you saw, then record the change in step 5.

Check again: No sentence in step 4 describes the product as a whole.

Answers to revisit: situational-tests, situational-found, overlap, improvement-made

</details>


### Record and rank

Section: practice. Stable action: step-5-brief.

The five barriers ranked by how completely they block the task, the one that surprised you marked, and the repair from the Check questions recorded.

- Rank the five barriers by how completely they block the task.
- Mark the one you had not considered before.
- Save the list; the rest of the module works from it.

**Start here:** Ask of each barrier: can this person finish the task another way? The ones with no other way go to the top.

**Enough:** The order is defended by routes rather than by how bad each one feels, and the surprise is marked.

**Total block:** There is no other route to the outcome, so the person stops. This ranks above anything that is merely slow or unpleasant.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### The five barriers in order, most completely blocking first

Section: practice. Stable action: write-ranked.

Ask of each one: can the person finish the task another way? The ones with no other route go first.

**Answer:** The five barriers in order, most completely blocking first

Ask of each one: can the person finish the task another way? The ones with no other route go first.


### The one you had not considered before

Section: practice. Stable action: write-new-barrier.

Write your answer for “The one you had not considered before”. Use the task instructions below to decide what to include.

**Answer:** The one you had not considered before




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson maps these five barriers onto the standard, so keep them exactly as they are.


<details>
<summary>Optional hints and reference material</summary>

- Rewrite each barrier as “a person who … trying to … cannot, because …”. Anything you cannot complete is a category, not a barrier.
- For each barrier, find the specification or screen where the decision was made and cite it.

- R28: [W3C: accessibility introduction](https://www.w3.org/WAI/fundamentals/accessibility-intro/) — What web accessibility is, who it affects, and the range of situations it covers. Purpose: Establishes the mismatch framing this module and the barrier list depend on. Free reading, no account. Verified 2026-09-06. Read the text if any video is inaccessible to you; it is an introduction and supplies no criteria or testing method. Fallback: R14.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The list of checks, skimmed now to see what will be checkable later. Purpose: Shows which barriers you will be able to verify yourself in the coming lessons. Free reading, no account. Verified 2026-09-06. The page states its checks are preliminary and not conformance, and self-checking is not testing with disabled people. Fallback: R28.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Five barriers name a person, a situation and a task**

Adequate evidence: Five written barriers, each specific enough to reproduce.

0 — General statements about disability groups.

1 — Some specific barriers mixed with categories.

2 — All five specify person, situation and task.

3 — As adequate, and at least one comes from a situational test you actually ran.

Repair: Rewrite each barrier as “a person who … trying to … cannot, because …”. Anything you cannot complete is a category, not a barrier. Recheck: The rewritten barrier list.

**Each barrier names the design decision behind it**

Adequate evidence: A decision per barrier, marked deliberate or inherited.

0 — Causes unstated.

1 — Causes described as general failings.

2 — Each names a specific decision in your design.

3 — As adequate, and at least one decision is one you made in an earlier module.

Repair: For each barrier, find the specification or screen where the decision was made and cite it. Recheck: The decision list.

**Permanent, temporary and situational cases are covered**

Adequate evidence: Barriers spanning all three, with the situational ones tested rather than imagined.

0 — Permanent disability only.

1 — Two of the three covered.

2 — All three, with situational cases actually tried.

3 — As adequate, and one barrier is shown to affect all three groups.

Repair: Take your product outside, use it one-handed and dim the screen. Add what those reveal. Recheck: The extended list.

**Barriers are ranked by how completely they block**

Adequate evidence: An ordered list distinguishing total blocks from difficulties.

0 — Unordered.

1 — Ordered by ease of fixing.

2 — Ordered by how completely the task becomes impossible.

3 — As adequate, and the ranking notes which barriers have no workaround at all.

Repair: For each barrier ask whether the person can finish the task another way. Those with no route go first. Recheck: The ranked list.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson maps these five barriers onto the standard, so keep them exactly as they are.

**Review criteria:**

- Five barriers name a person, a situation and a task
- Each barrier names the design decision behind it
- Permanent, temporary and situational cases are covered
- Barriers are ranked by how completely they block

<details>
<summary>Reading, video and deeper explanation</summary>

- The assigned introduction frames access as the outcome of design choices meeting human variation. That framing is practical rather than political: it points you at the decision you can change. “Blind users cannot use the product” is not actionable; “the only route to remove an item is a hover control, so it does not exist without a pointer” names a decision you made and can unmake.
- Barriers are not confined to permanent disability. A person with a broken wrist, a new parent holding a baby, someone on a train with one hand on a rail, or anyone in bright sunlight meets the same designs as a person with a permanent motor or vision impairment, and often meets the same barrier. Designing for the permanent case reliably improves the temporary and situational ones, which is why this work pays back beyond its stated audience.
- Specificity is what makes a barrier fixable. Write the person, the situation, the thing they were trying to do and the decision that stopped them. Five specific barriers in your own product are worth more than a general list of disability types, because each one converts directly into a change.
- This lesson deliberately precedes the standard. Criteria are useful once you know what you are looking for; started from cold they produce a compliance pass that misses the barrier your particular design creates.

[W3C: accessibility introduction](https://www.w3.org/WAI/fundamentals/accessibility-intro/).

</details>

## Lesson 2: Using the standard without drowning in it

Stable ID: m11-l02-v1. Core.

The standard is large and filterable. Used from your barriers, it is a set of answers; read front to back, it is a wall.

Bring: Your five barriers with their causes.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Each barrier mapped to a named success criterion
- What meeting it means in your specific design
- A note where no criterion covers your barrier
- A stated target level with the reason

### Start with a clear task

Section: learn. Stable action: welcome.

Map your five barriers to specific success criteria at levels A and AA, and record for each what would count as meeting it in your design.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Four principles: perceivable, operable, understandable, robust.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Criteria come at levels A, AA and AAA; AA is the common working target.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Filter to what your artefact affects rather than reading everything.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

A criterion tells you what must be true, not how to design it.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Reading a criterion is not conformance; only a tested build approaches that.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Five barriers mapped to five criteria. Colour-only availability mapped to the use-of-colour criterion, and meeting it here meant adding a text label beside the dot. The swipe-only removal mapped to the keyboard criterion: every function available from a keyboard, met by adding a visible control with a key route. The 3.1:1 caption mapped to contrast (minimum), met by darkening the text and re-measuring. The adjacent destructive control mapped to target size, met by increasing spacing. The English-only date format mapped to a language and localisation concern the standard covers only partly, so the lesson recorded it as a product requirement rather than a criterion.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Orient in the standard

Section: practice-plan. Stable action: step-1-brief.

The four principles in your own words, and one criterion you already meet with the reason you know it.

- Open the assigned quick reference and filter to levels A and AA.
- Write the four principles and one criterion you already meet.

**Start here:** Open the quick reference, set the filter to levels A and AA, and read only the four principle headings first.

**Enough:** Your four lines are in your own words, and the criterion you already meet names how you know rather than that it feels right.

**Success criterion:** One numbered statement of something that must be true. It says what, never how, so several designs can meet the same criterion.

**Level A, AA, AAA:** Three tiers. A is the floor, AA is the common working target, AAA is adopted criterion by criterion where an audience needs it rather than as a whole.

**Quick reference:** The filterable view of the standard. You set the level and the topic, and it shows only the criteria that apply, which is how it becomes usable.


### The four principles, in your own words

Section: practice-plan. Stable action: write-principles-note.

Perceivable, operable, understandable, robust. One short line each; you will use them as a filter, not as a quotation.

**Answer:** The four principles, in your own words

Perceivable, operable, understandable, robust. One short line each; you will use them as a filter, not as a quotation.


### One criterion your design already meets, and how you know

Section: practice-plan. Stable action: write-already-met.

Write your answer for “One criterion your design already meets, and how you know”. Use the task instructions below to decide what to include.

**Answer:** One criterion your design already meets, and how you know



<details>
<summary>Example</summary>

Example (made up): every page has a title that says what it is, because I wrote them in Module 6.

</details>


### Map your barriers

Section: practice-plan. Stable action: step-2-brief.

Each of your five barriers matched to a named, numbered criterion, or marked as something the standard does not cover.

- For each barrier, find the criterion that names it.
- Record the criterion number and its plain statement.
- Mark any barrier the standard does not cover.

**Start here:** Take barrier one and ask which of the three the person could not do: receive it, work it, or make sense of it. Then filter to that principle.

**Enough:** Each of the five names a criterion number, and any barrier with no criterion is marked uncovered rather than forced into one.

**Perceivable:** Can the person receive it at all — see it, hear it, feel it? Contrast, alternative text and colour-only meaning live here.

**Operable:** Can the person work it? Keyboard routes, target size, time limits and motion live here.

**Understandable:** Can the person make sense of it? Language, predictable behaviour, labels and error help live here.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Looking for the criterion that covers a swipe-only remove control, and reading the standard the wrong way round.

**What I did first:** I opened the standard at the top and started reading. Forty minutes later I was in the middle of the second principle, had read about sign language, and had matched nothing.

**Why that failed:** Read front to back, the standard is a wall. Nothing in it is written about my product, so every criterion looks either irrelevant or vaguely applicable.

**What I changed:** I went back to the barrier and asked one question: what can this person not do? Not see, not work, or not understand? Swiping is working a control, so this is operable.

**Where that put me:** Filtered to operable, at levels A and AA, there are far fewer criteria. The keyboard criterion says every function is available from a keyboard. That is exactly my barrier.

**What I wrote:** “Swipe-only removal · keyboard, 2.1.1 · every function can be worked from a keyboard.” Two minutes, once I asked the right question first.

**Wrong turn:** The wrong turn is starting in the standard rather than in the barrier. It feels thorough and it produces a compliance pass: a lot of reading, and no change to the thing that excludes somebody.

**Trade-off:** Filtering from your barriers means you will not read most of the standard, and there are certainly criteria you are failing that no barrier of yours named. That is a real gap, and it is smaller than the gap left by reading everything and mapping nothing.

**Unknown:** Still unknown: whether one criterion is enough for this barrier. A swipe-only control may also fail target size or pointer gestures, and I have not checked.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-2-sort-1.

Six barriers from a made up library-booking product. For each one, decide which principle to filter by first — that is the whole trick to finding the criterion quickly.

Availability is shown only by a red or green dot, so a person who cannot distinguish the two cannot tell them apart.

- perceivable
- operable
- understandable

<details>
<summary>After your attempt</summary>

perceivable — The information never reaches the person. That is the perceivable principle, and it leads straight to the use-of-colour criterion.

operable — Nothing here is about working a control. The person is not trying to do anything yet; they are trying to receive something.

understandable — The meaning would be clear if it arrived. The problem is that it does not arrive.

Now take your own five barriers and ask the same question of each before you open the standard: cannot receive it, cannot work it, or cannot make sense of it?

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-2-sort-2.

Six barriers from a made up library-booking product. For each one, decide which principle to filter by first — that is the whole trick to finding the criterion quickly.

The only way to remove an item is to swipe it, which needs a controlled gesture on a touchscreen.

- perceivable
- operable
- understandable

<details>
<summary>After your attempt</summary>

perceivable — The control is visible and its meaning is clear. The difficulty is entirely in working it.

operable — Working a control is the operable principle. Filtered there, the keyboard and pointer-gesture criteria both appear.

understandable — The person knows exactly what they want to do and what will happen. They cannot do it.

Now take your own five barriers and ask the same question of each before you open the standard: cannot receive it, cannot work it, or cannot make sense of it?

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-2-sort-3.

Six barriers from a made up library-booking product. For each one, decide which principle to filter by first — that is the whole trick to finding the criterion quickly.

When a booking fails, the message says “Error 4021” and nothing else.

- perceivable
- operable
- understandable

<details>
<summary>After your attempt</summary>

perceivable — The message is on screen, legible and announced. It reaches the person perfectly well.

operable — No control is involved. The person is stuck on meaning rather than on operation.

understandable — Error identification and error suggestion both live under understandable, and both apply here.

Now take your own five barriers and ask the same question of each before you open the standard: cannot receive it, cannot work it, or cannot make sense of it?

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-2-sort-4.

Six barriers from a made up library-booking product. For each one, decide which principle to filter by first — that is the whole trick to finding the criterion quickly.

The booking form clears itself after two minutes of inactivity, with no warning and no way to extend.

- perceivable
- operable
- understandable

<details>
<summary>After your attempt</summary>

perceivable — Everything was visible right up to the moment it disappeared. Perception is not the problem.

operable — Time limits sit under operable, alongside keyboard and target size. Anything about whether a person can complete an action in the time allowed belongs here.

understandable — The person understood the form. They ran out of time, which is a different thing.

Now take your own five barriers and ask the same question of each before you open the standard: cannot receive it, cannot work it, or cannot make sense of it?

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-2-sort-5.

Six barriers from a made up library-booking product. For each one, decide which principle to filter by first — that is the whole trick to finding the criterion quickly.

The collection instructions are grey on white and cannot be read outdoors.

- perceivable
- operable
- understandable

<details>
<summary>After your attempt</summary>

perceivable — Contrast is the classic perceivable criterion. If the text cannot be distinguished from its background, nothing else matters.

operable — Reading is not operating. No control is involved in this one.

understandable — The words would be perfectly clear if they could be seen.

Now take your own five barriers and ask the same question of each before you open the standard: cannot receive it, cannot work it, or cannot make sense of it?

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-2-sort-6.

Six barriers from a made up library-booking product. For each one, decide which principle to filter by first — that is the whole trick to finding the criterion quickly.

Choosing a collection branch reloads the page and moves the person to a different screen without warning.

- perceivable
- operable
- understandable

<details>
<summary>After your attempt</summary>

perceivable — Everything on both screens is visible and readable. The surprise is the problem, not the perception.

operable — The control worked exactly as built. Nobody was prevented from operating anything.

understandable — Predictability lives under understandable: a change of context on selection is the criterion this maps to.

Now take your own five barriers and ask the same question of each before you open the standard: cannot receive it, cannot work it, or cannot make sense of it?

</details>


### Barrier 1 · the criterion that names it, its number, and what it says in plain words

Section: practice-plan. Stable action: write-map-1.

Write your answer for “Barrier 1 · the criterion that names it, its number, and what it says in plain words”. Use the task instructions below to decide what to include.

**Answer:** Barrier 1 · the criterion that names it, its number, and what it says in plain words



<details>
<summary>Example</summary>

Example (made up): colour-only availability · use of colour, 1.4.1 · colour is never the only way of telling something apart or telling somebody what to do.

</details>


### Barrier 2 · the criterion that names it, its number, and what it says in plain words

Section: practice-plan. Stable action: write-map-2.

Write your answer for “Barrier 2 · the criterion that names it, its number, and what it says in plain words”. Use the task instructions below to decide what to include.

**Answer:** Barrier 2 · the criterion that names it, its number, and what it says in plain words




### Barrier 3 · the criterion that names it, its number, and what it says in plain words

Section: practice-plan. Stable action: write-map-3.

Write your answer for “Barrier 3 · the criterion that names it, its number, and what it says in plain words”. Use the task instructions below to decide what to include.

**Answer:** Barrier 3 · the criterion that names it, its number, and what it says in plain words




### Barrier 4 · the criterion that names it, its number, and what it says in plain words

Section: practice-plan. Stable action: write-map-4.

Write your answer for “Barrier 4 · the criterion that names it, its number, and what it says in plain words”. Use the task instructions below to decide what to include.

**Answer:** Barrier 4 · the criterion that names it, its number, and what it says in plain words




### Barrier 5 · the criterion that names it, its number, and what it says in plain words

Section: practice-plan. Stable action: write-map-5.

Write your answer for “Barrier 5 · the criterion that names it, its number, and what it says in plain words”. Use the task instructions below to decide what to include.

**Answer:** Barrier 5 · the criterion that names it, its number, and what it says in plain words




### Any barrier the standard does not cover, and what you will do about it

Section: practice-plan. Stable action: write-uncovered.

Some real barriers have no criterion. Record them as product requirements rather than stretching a criterion to fit.

**Answer:** Any barrier the standard does not cover, and what you will do about it

Some real barriers have no criterion. Record them as product requirements rather than stretching a criterion to fit.


### Translate to your design

Section: practice-plan. Stable action: step-3-brief.

For each criterion, one sentence naming the element in your own design and the change that would meet it.

- For each criterion write what meeting it means for your specific screens.
- Name the change required, not the criterion text.

**Start here:** Take your first criterion and finish this sentence: “in this design, meeting this means that …”, naming an element.

**Enough:** Somebody who had not read the standard could carry out every line without asking you what it means.

**Translation:** Turning “colour is not the only means of conveying information” into “the availability dot gains the word Full beside it”. The criterion is the rule; this is the work.

**Restating:** Writing the criterion again in slightly different words. It reads like progress and tells a builder nothing.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Translating the use-of-colour criterion for a library-booking product, and writing the criterion back to myself twice.

**What I wrote first:** “Ensure colour is not used as the only visual means of conveying information.” I had copied the criterion, changed one word, and felt I had done the step.

**What a builder would do with that:** Ask me which element. The sentence applies to the whole product, so it is a request for judgement rather than an instruction.

**What I asked instead:** Which element in my design? The availability dot on the results card. What change? Text beside it.

**What I wrote in the end:** “The availability dot on the results card gains the words Places available, 2 left, or Full beside it, at the same size as the class time.” One element, one change, checkable.

**What that let me do next:** I could see immediately that the same dot appears in the shortlist and the confirmation, so the translation needed a second line rather than a wider sentence.

**Wrong turn:** The wrong turn is restating the criterion, because it is fast and it looks like the same kind of sentence. The test is whether a person who has never read the standard could act on your line.

**Trade-off:** Naming elements means your mapping only covers the screens you named, and someone may point out you have three more. Better to know that than to have one sentence pretending to cover everything.

**Unknown:** Still unknown: whether the words fit on the card at the narrowest width. That is a layout question and it belongs to the next lesson, not to this one.


### For each criterion: what meeting it means in your own screens

Section: practice-plan. Stable action: write-translations.

Name the element and the change. Do not restate the criterion.

**Answer:** For each criterion: what meeting it means in your own screens

Name the element and the change. Do not restate the criterion.

<details>
<summary>Example</summary>

Example (made up): meeting this means the availability dot gains the words Places available, 2 left or Full beside it on the results card.

</details>


### Choose your target

Section: practice-plan. Stable action: step-4-brief.

A stated target level with a reason, and any AAA criterion you adopt justified by your audience.

- State whether you are working to A, AA, or AA plus specific AAA criteria.
- Record any AAA criterion you adopt and why your audience needs it.

**Start here:** Write the level first, then the reason. If you cannot write a reason, the level is inherited rather than chosen.

**Enough:** Your reason mentions this product and these people, not general good practice.

**Working target:** The level you hold your own work to. AA is the common one because it covers the barriers most people meet without demanding things few products can sustain.

**Adopting a AAA criterion:** Taking one higher criterion because your particular audience needs it, and saying which audience. It is a considered addition, not a claim to reach AAA.


### The level you are working to

Section: practice-plan. Stable action: write-target-level.

Choose the option that honestly describes your work.

**Answer:** The level you are working to (A / AA / AA plus named AAA criteria)




### Why that level fits this product and this audience

Section: practice-plan. Stable action: write-target-reason.

Write your answer for “Why that level fits this product and this audience”. Use the task instructions below to decide what to include.

**Answer:** Why that level fits this product and this audience




### Any AAA criterion you adopt, and the audience reason for it

Section: practice-plan. Stable action: write-aaa-adopted.

Leave blank if none. Adopting one is a choice you defend, not a badge.

**Answer:** Any AAA criterion you adopt, and the audience reason for it

Leave blank if none. Adopting one is a choice you defend, not a badge.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A colleague suggests doing the accessibility audit at the end, once the design is finished. What is the strongest objection?

- By then the expensive problems are structural, and the audit finds them when they are hardest to change.
- Audits are unreliable, so it is better to check things yourself.
- The standard requires accessibility work to happen during design.

<details>
<summary>After your attempt</summary>

By then the expensive problems are structural, and the audit finds them when they are hardest to change. — A layout with nowhere to put a visible focus ring, or a flow that depends on hover, cannot be repaired by adjusting a colour. Mapping barriers to criteria during design costs an hour and changes what gets built.

Audits are unreliable, so it is better to check things yourself. — A good audit is more thorough than your own check. The problem is when it happens, not who does it.

The standard requires accessibility work to happen during design. — The standard says what must be true of the result. It says nothing about when you do the work; the argument is practical rather than required.

Improve: Look at your translations in step 3. Any change that would need the layout rebuilt is a structural one — mark it as such, and record the change in step 5.

Check again: Structural changes are separated from surface ones in your mapping.

Answers to revisit: translations, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You have read five criteria and written what each means for your screens. Can you now say the product meets level AA?

- It cannot be said. You mapped five barriers, and conformance is a claim about every criterion in a tested build.
- It can, for those five criteria at least.
- It can, provided you add that testing is still to come.

<details>
<summary>After your attempt</summary>

It cannot be said. You mapped five barriers, and conformance is a claim about every criterion in a tested build. — Reading is not testing, five is not all of them, and a mapping made during design describes intent. The honest sentence names what you mapped and what remains untested.

It can, for those five criteria at least. — Even for those five it is a design intention rather than a tested result. Nothing has been built and checked against them yet.

It can, provided you add that testing is still to come. — A conformance claim with a caveat attached is still repeated as a conformance claim. Write the narrow sentence instead.

Improve: Rewrite your boundary sentence in step 5 so it names the number of criteria mapped and says the build is untested, then record the change.

Check again: No sentence in this lesson claims a level has been met.

Answers to revisit: read-vs-tested, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

One of your barriers has no matching criterion. What should you do with it?

- Record it as a product requirement of your own, marked as uncovered by the standard.
- Find the closest criterion and map it there.
- Drop it, since the module is about the standard.

<details>
<summary>After your attempt</summary>

Record it as a product requirement of your own, marked as uncovered by the standard. — The standard is a floor and it does not cover everything that excludes people. A date format nobody in your audience reads is a real barrier with no criterion, and it is still yours to fix.

Find the closest criterion and map it there. — A stretched mapping hides the barrier inside a criterion that does not describe it, and the change you actually need disappears from the list.

Drop it, since the module is about the standard. — The module starts from barriers precisely so the standard does not become the limit of the work. The barrier stays.

Improve: Move any stretched mapping into the uncovered field in step 2 and write what you will do about it instead. Record the change in step 5.

Check again: Every mapped criterion genuinely names its barrier, and the rest are marked uncovered.

Answers to revisit: map-1, map-2, map-3, map-4, map-5, uncovered, improvement-made

</details>


### Record the boundary

Section: practice. Stable action: step-5-brief.

One sentence separating criteria you have read from conformance nobody has tested, and the repair the Check questions asked for.

- Write one sentence separating criteria you have read from conformance you have tested.
- Save the mapping; later lessons check these one by one.

**Start here:** Write what you did today in one clause, and what nobody has done yet in the next.

**Enough:** The sentence would stop a reader quoting this mapping as evidence that the product conforms.

**Conformance:** A claim that a real, finished thing meets every criterion at a level. It rests on testing, so a mapping made during design cannot establish it.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### One sentence separating what you have read from what you have tested

Section: practice. Stable action: write-read-vs-tested.

Write your answer for “One sentence separating what you have read from what you have tested”. Use the task instructions below to decide what to include.

**Answer:** One sentence separating what you have read from what you have tested



<details>
<summary>Example</summary>

Example (made up): I have read five criteria and written what each means here. Nothing in this mapping has been tested in a build, and no disabled person has used it.

</details>


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson takes the structure criteria and checks two of your screens against them.


<details>
<summary>Optional hints and reference material</summary>

- Filter the reference by the topic of each barrier and find the criterion that names it. If none does, mark it uncovered.
- Rewrite each row as “in this design, meeting this means …”, naming the element.

- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — Levels A and AA, filtered to the topics your barriers name. Purpose: Supplies the criteria your barriers map to, without requiring a linear read. Free reading, no account. Verified 2026-09-06. It is a filterable index of the standard: no testing tools, no design method, no prioritisation. Reading a criterion is not conformance. Fallback: R41.
- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The thresholds and their exceptions, as a worked example of one criterion. Purpose: Shows the depth behind a single criterion so the mapping is not treated as a checklist. Free reading, no account. Verified 2026-09-06. A passing ratio is not proof of legibility at real sizes in real light. Fallback: R29.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Each barrier maps to a named criterion or is marked uncovered**

Adequate evidence: A mapping table with criterion numbers, or an explicit uncovered marker.

0 — No mapping.

1 — Loose mapping to principles rather than criteria.

2 — Specific criteria named, with uncovered barriers marked.

3 — As adequate, and an uncovered barrier is recorded as a product requirement instead.

Repair: Filter the reference by the topic of each barrier and find the criterion that names it. If none does, mark it uncovered. Recheck: The mapping table.

**Meeting each criterion is stated in terms of your screens**

Adequate evidence: A sentence per criterion naming the concrete change in your design.

0 — Criterion text copied without translation.

1 — Vague intentions such as “improve contrast”.

2 — Specific changes named per screen or component.

3 — As adequate, and each change is traceable to a component in your inventory.

Repair: Rewrite each row as “in this design, meeting this means …”, naming the element. Recheck: The translated mapping.

**A target level is chosen with a reason**

Adequate evidence: A stated target with any adopted AAA criteria justified by audience.

0 — No target stated.

1 — A level named without reasoning.

2 — Target stated with reasons, including any AAA adoption.

3 — As adequate, and the reason references a barrier or an audience fact from your research.

Repair: Write the target and one sentence on why it fits this product and audience. Recheck: The target statement.

**The read-versus-tested boundary is stated**

Adequate evidence: A written line distinguishing criteria consulted from conformance tested.

0 — Reading implied as compliance.

1 — Boundary implied but unstated.

2 — Stated plainly and kept with the mapping.

3 — As adequate, and it names what testing would be required to claim conformance.

Repair: Add one sentence: what you have read, and what remains untested about the build. Recheck: The boundary statement.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson takes the structure criteria and checks two of your screens against them.

**Review criteria:**

- Each barrier maps to a named criterion or is marked uncovered
- Meeting each criterion is stated in terms of your screens
- A target level is chosen with a reason
- The read-versus-tested boundary is stated

<details>
<summary>Reading, video and deeper explanation</summary>

- The quick reference is organised as principles, guidelines and success criteria, with filters for version, level, technology and topic. Used properly it is a lookup: you have a barrier about colour-only status, so you filter to the relevant topic and find the criterion that names it. Reading it linearly produces the familiar experience of a long document that changes nothing.
- Levels are about the breadth of the requirement, not its importance to your users. A and AA together are the usual working target and cover most of what your barrier list will contain. AAA criteria are worth knowing and are not expected across a whole product; where one addresses your specific audience, adopting it is a decision to record rather than a default.
- A criterion states an outcome — text has a contrast ratio of at least this, all functionality is available from a keyboard — and leaves the design to you. That is why this lesson comes after the barriers: the criterion confirms what must be true, and your design decides how.
- The gap between reading and conformance is worth naming once, here, for the whole module. You can check a criterion against a design; you can only test conformance against a build, with real assistive technology, and preferably with disabled people. Every claim in this module states which of those it rests on.

[W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/).

</details>

## Lesson 3: Structure people can navigate

Stable ID: m11-l03-v1. Core.

Structure is how someone who cannot see the whole screen navigates it. Without it they read everything, in whatever order the markup happens to be.

Bring: Two current screens and your m06 heading outline.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A heading outline per screen with correct nesting
- Named regions for banner, navigation, main and footer
- A reading-order check with any mismatch fixed
- A read-aloud test of the headings alone

### Start with a clear task

Section: learn. Stable action: welcome.

Give two screens a correct heading outline, named regions and a reading order that matches the visual order, and verify each with a check you can run yourself.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

One page title, then headings nested without skipping levels.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Regions let someone jump straight to the main content instead of hearing the menu again.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Reading order must match visual order; a two-column layout often breaks this.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Headings describe their section; “Details” describes nothing.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Check by reading the headings alone: they should summarise the page.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The class detail screen had five visual headings and no outline: three were level one because they looked large. Rewritten as page title, then four level-two sections, using the labels from the m06 table. The regions were named so the main content could be reached directly. The reading order was checked and one problem found: the price panel appeared visually beside the title but came after the description in order, so a person reading in sequence met the price three screens' worth of text later. It was moved. Reading the headings aloud now summarised the page in six phrases.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and write the outline

Section: practice-plan. Stable action: step-1-brief.

Two screens written as indented outlines, using the labels you already chose in Module 6.

- Read the assigned page-structure sections on headings and regions.
- Write each screen as an indented outline using your existing labels.

**Start here:** Write the screen name on the first line, then indent one step for each section under it.

**Enough:** Both outlines are indented text you could read to somebody, not a list of labels in visual order.

**Heading outline:** The headings of a screen, in order, with their levels shown by indentation. It is what a person hears when they ask for the structure instead of the text.

**Page title:** The single top heading that says what this screen is. One per screen; a second one tells a reader they have arrived somewhere new when they have not.


### Screen 1 · the heading outline, indented

Section: practice-plan. Stable action: write-outline-a.

Write your answer for “Screen 1 · the heading outline, indented”. Use the task instructions below to decide what to include.

**Answer:** Screen 1 · the heading outline, indented



<details>
<summary>Example</summary>

Example (made up):
Pottery evening class (page title)
  What the evening covers
  What to bring
  Dates and places
    This month
    Next month

</details>


### Screen 2 · the heading outline, indented

Section: practice-plan. Stable action: write-outline-b.

Write your answer for “Screen 2 · the heading outline, indented”. Use the task instructions below to decide what to include.

**Answer:** Screen 2 · the heading outline, indented




### Fix the levels

Section: practice-plan. Stable action: step-2-brief.

Corrected levels with one page title and no skipped level, and every heading that described nothing rewritten.

- Check no level is skipped and there is exactly one page title.
- Rewrite any heading that does not describe its section.

**Start here:** Cover the content. Read only your headings, and mark every one you could not guess the contents of.

**Enough:** One page title per screen, no skipped level, and no heading left that could sit above anything.

**Skipped level:** Going from level one to level three with nothing in between. A person navigating by structure hears a gap and cannot tell what the section belongs to.

**Empty heading:** A word that would sit equally well above any section: Details, More, Information, Other. It occupies the position of a signpost and points nowhere.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Fixing the outline of a class detail screen, where the levels had been chosen by how big the text looked.

**What I found:** Five headings, three of them level one. They were level one because they were set in the large size, and the large size had been chosen because they were important.

**Why that is a real problem:** Somebody navigating by structure hears three page titles and concludes they have landed on three different pages. The screen has no shape at all.

**The question I used instead:** Is this a section of the thing above it, or is it a new thing? Not: is this big? What to bring is part of the class. Dates is part of the class. Both are level two.

**What I changed:** One page title, four level-two sections, and the two month lists under Dates became level three. The visual sizes did not all change; size and level stopped being the same decision.

**The heading I rewrote:** Details became What to bring. Details could sit above anything, which is exactly why it was chosen and exactly why it was no use.

**Wrong turn:** The wrong turn is letting visual size decide the level, because in a design tool they are the same act. It produces four level-one headings and an outline that summarises nothing.

**Trade-off:** Separating level from size means the outline and the visual hierarchy have to be checked separately, and occasionally a level-two heading is set smaller than a level-three one elsewhere. That is fine, and it does have to be noticed.

**Unknown:** Still unknown: whether the two month lists should be headings at all, or a single list with dates in it. Both outlines read sensibly, and nothing in this lesson decides between them.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-2-sort-1.

Six headings from a made up tool-library screen. For each one, decide what kind of heading it is.

What you need to bring

- describes its own section
- could sit above anything
- describes the whole page

<details>
<summary>After your attempt</summary>

describes its own section — Read on its own it tells you what is underneath. That is the whole test for a heading.

could sit above anything — It could not. It names one specific thing and would be wrong above the opening hours.

describes the whole page — It names one part. A person hearing it knows they are inside something larger.

Now read your own two outlines and mark each heading with one of the three. Anything in the middle group gets rewritten.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-2-sort-2.

Six headings from a made up tool-library screen. For each one, decide what kind of heading it is.

Details

- describes its own section
- could sit above anything
- describes the whole page

<details>
<summary>After your attempt</summary>

describes its own section — It gives a reader nothing to decide with. Anything at all could be underneath it.

could sit above anything — This is the commonest empty heading. It occupies the position of a signpost and points nowhere.

describes the whole page — It is not doing that either. It is not describing anything.

Now read your own two outlines and mark each heading with one of the three. Anything in the middle group gets rewritten.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-2-sort-3.

Six headings from a made up tool-library screen. For each one, decide what kind of heading it is.

Northside Tool Library

- describes its own section
- could sit above anything
- describes the whole page

<details>
<summary>After your attempt</summary>

describes its own section — Nothing is underneath it in particular. It is naming the place rather than a part of it.

could sit above anything — It is specific. The difficulty is that it is specific about the whole thing.

describes the whole page — This is a page title. There should be exactly one, and a second one sends a reader looking for a page they have not left.

Now read your own two outlines and mark each heading with one of the three. Anything in the middle group gets rewritten.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-2-sort-4.

Six headings from a made up tool-library screen. For each one, decide what kind of heading it is.

More information

- describes its own section
- could sit above anything
- describes the whole page

<details>
<summary>After your attempt</summary>

describes its own section — A reader cannot tell whether it holds opening hours, safety notes or a phone number.

could sit above anything — Along with Details and Other, this is a heading written when the writer had not decided what the section was.

describes the whole page — It is too vague to name the page, and it would be an odd page title if it did.

Now read your own two outlines and mark each heading with one of the three. Anything in the middle group gets rewritten.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-2-sort-5.

Six headings from a made up tool-library screen. For each one, decide what kind of heading it is.

If you return a tool late

- describes its own section
- could sit above anything
- describes the whole page

<details>
<summary>After your attempt</summary>

describes its own section — It names a situation, so the reader knows whether to stop here or move on. That is what makes an outline usable.

could sit above anything — It is tied to one specific circumstance and would be wrong above almost everything else on the page.

describes the whole page — It is one case among several the page covers.

Now read your own two outlines and mark each heading with one of the three. Anything in the middle group gets rewritten.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-2-sort-6.

Six headings from a made up tool-library screen. For each one, decide what kind of heading it is.

Borrowing a cordless drill

- describes its own section
- could sit above anything
- describes the whole page

<details>
<summary>After your attempt</summary>

describes its own section — It could be, on a longer page about borrowing generally. On a page about this one drill it is the subject of the whole thing.

could sit above anything — It is entirely specific, which is why the choice here is between the other two.

describes the whole page — On a page about borrowing this drill, this is the page title. Deciding that is the point: the same words are a section heading somewhere else.

Now read your own two outlines and mark each heading with one of the three. Anything in the middle group gets rewritten.

</details>


### Every level you changed, and why

Section: practice-plan. Stable action: write-level-fixes.

Look for more than one page title, and for a level that jumps from one to three.

**Answer:** Every level you changed, and why

Look for more than one page title, and for a level that jumps from one to three.


### Every heading you rewrote because it described nothing

Section: practice-plan. Stable action: write-heading-rewrites.

Write your answer for “Every heading you rewrote because it described nothing”. Use the task instructions below to decide what to include.

**Answer:** Every heading you rewrote because it described nothing



<details>
<summary>Example</summary>

Example (made up): Details became What to bring, because Details could sit above anything.

</details>


### Mark the regions

Section: practice-plan. Stable action: step-3-brief.

A region map for each screen and a stated route to the main content that does not go through the navigation.

- Identify banner, navigation, main content, complementary and footer.
- Check the main content can be reached without passing the navigation.

**Start here:** Sketch each screen as boxes and write the region name inside each box.

**Enough:** Every part of both screens belongs to exactly one region, and the route to the main content is one sentence.

**Region:** A named area of the screen: the banner at the top, the navigation, the main content, anything alongside it, and the footer. Naming them lets somebody jump straight to one.

**Main content:** The part of this screen that is not repeated on every other screen. Being able to reach it directly is the difference between hearing the menu once and hearing it on every page.


### Screen 1 · banner, navigation, main content, complementary, footer

Section: practice-plan. Stable action: write-regions-a.

Write your answer for “Screen 1 · banner, navigation, main content, complementary, footer”. Use the task instructions below to decide what to include.

**Answer:** Screen 1 · banner, navigation, main content, complementary, footer




### Screen 2 · banner, navigation, main content, complementary, footer

Section: practice-plan. Stable action: write-regions-b.

Write your answer for “Screen 2 · banner, navigation, main content, complementary, footer”. Use the task instructions below to decide what to include.

**Answer:** Screen 2 · banner, navigation, main content, complementary, footer




### How somebody reaches the main content without going through the navigation first

Section: practice-plan. Stable action: write-main-route.

Write your answer for “How somebody reaches the main content without going through the navigation first”. Use the task instructions below to decide what to include.

**Answer:** How somebody reaches the main content without going through the navigation first




### Check reading order

Section: practice-plan. Stable action: step-4-brief.

The content order written as a numbered list, compared with the visual order, and every mismatch fixed or recorded.

- Write the order content is actually in, not how it looks.
- Compare with the visual order and fix any mismatch.
- Pay attention to sidebars, two-column forms and floating panels.

**Start here:** Write the numbered list first, from the structure, and only then compare it against the layout.

**Enough:** Every mismatch is either fixed or written down with the reason it stays.

**Reading order:** The order the content is really in, which is the order a person meets it when they cannot see the whole screen at once.

**Visual order:** The order the eye takes. Two columns, a floating panel or a sidebar can put these two badly out of step without anything looking wrong.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Checking the reading order of a class detail screen and finding the problem in the place that looked best.

**What I expected:** That the order would be fine. The screen reads top to bottom and nothing about it looks unusual.

**What I actually did:** I wrote the content order as a numbered list without looking at the layout, working from the structure rather than the picture.

**What the list showed:** The price panel, which sits beside the title, was item fourteen. Everything in the description came before it.

**Why that matters:** Somebody meeting the screen one item at a time hears three paragraphs about the class before learning what it costs. Visually the price is the second thing you see.

**What I changed:** I moved the price before the description. It looks identical, and it now arrives in both orders at roughly the same point.

**Wrong turn:** The wrong turn is checking the order by looking at the screen, because the screen is the thing that hides the problem. Writing the order out blind is what makes the mismatch visible.

**Trade-off:** Writing the order as a list for two screens is dull and takes twenty minutes, and most of it will confirm what you already thought. The one item that does not is the whole return on it.

**Unknown:** Still unknown: whether anyone actually reads in that order on this screen. I have not watched anybody use it, and nothing in this lesson does.


### The order the content is actually in, as a numbered list

Section: practice-plan. Stable action: write-content-order.

Not how it looks. What order would somebody meet it in if they met one thing at a time.

**Answer:** The order the content is actually in, as a numbered list

Not how it looks. What order would somebody meet it in if they met one thing at a time.


### Every place the content order differs from the visual order, and what you did

Section: practice-plan. Stable action: write-order-mismatch.

Write your answer for “Every place the content order differs from the visual order, and what you did”. Use the task instructions below to decide what to include.

**Answer:** Every place the content order differs from the visual order, and what you did



<details>
<summary>Example</summary>

Example (made up): the price panel sits beside the title but comes after the whole description, so somebody reading in order meets it far too late. Moved before the description.

</details>


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your designer instinct says the section heading should be large, so you set it as a page title. What is wrong with that?

- Level says where you are in the structure; size says what to look at. Tying them together produces several page titles and no outline.
- Nothing, as long as the visual hierarchy is clear.
- The heading should simply be made smaller.

<details>
<summary>After your attempt</summary>

Level says where you are in the structure; size says what to look at. Tying them together produces several page titles and no outline. — A person navigating by structure hears each page title as a new place. Three of them on one screen means the screen has no shape at all, however well it reads visually.

Nothing, as long as the visual hierarchy is clear. — The visual hierarchy is only one of the two hierarchies on the screen. The other one is what somebody hears, and it is currently wrong.

The heading should simply be made smaller. — That fixes the level by damaging the design. The two decisions are separate: keep the size and change the level.

Improve: Check both outlines in step 1 for more than one page title, correct them in step 2, and record the change in step 5.

Check again: Each screen has exactly one page title, whatever the text sizes are.

Answers to revisit: outline-a, outline-b, level-fixes, heading-rewrites, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You plan to leave the heading levels to the developer, who will see the visual design. What will happen?

- They will infer level from size, which is the mistake you just spent this lesson correcting.
- They will ask, since it is ambiguous.
- It will be fine, because developers know the structure rules.

<details>
<summary>After your attempt</summary>

They will infer level from size, which is the mistake you just spent this lesson correcting. — There is no other information available to them. Heading level is a decision about hierarchy, so it belongs with the screen that states the hierarchy.

They will ask, since it is ambiguous. — It does not look ambiguous from a visual design. It looks decided, which is why nobody asks.

It will be fine, because developers know the structure rules. — Knowing the rules does not tell them which of your sections belongs inside which. Only the design says that.

Improve: Add the level beside every heading in both outlines in step 1, so the outline itself is the specification. Record the change in step 5.

Check again: Both outlines state levels explicitly rather than implying them.

Answers to revisit: outline-a, outline-b, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You read the headings to somebody and they described the page almost correctly, missing one section. What is the useful response?

- Rewrite the heading for the section they missed, since that is exactly what the check is for.
- Nothing much — one miss out of five is a good result.
- Read it to somebody else to see whether they miss the same one.

<details>
<summary>After your attempt</summary>

Rewrite the heading for the section they missed, since that is exactly what the check is for. — Almost correct is the normal result, and the miss is the finding. One rewritten heading is a real improvement you would not have found by reading it yourself.

Nothing much — one miss out of five is a good result. — It is a good result and it still names the heading that is not working. The check has done its job and you would be discarding the answer.

Read it to somebody else to see whether they miss the same one. — A second reading is useful later. It is not a reason to leave a heading you now know did not convey its section.

Improve: Rewrite the heading they missed, add it to the rewrites field in step 5, and record the change.

Check again: The section that was missed now has a heading that names it.

Answers to revisit: aloud-who, aloud-result, aloud-rewrites, improvement-made

</details>


### Read the headings aloud

Section: practice. Stable action: step-5-brief.

A record of reading only the headings aloud, what the listener said the page contained, and what you rewrote.

- Read only the headings to another person and ask what the page contains.
- Rewrite anything they cannot infer.
- Save the outlines, regions and order notes.

**Start here:** Read the headings of screen one aloud, in order, and stop. Ask what the page is about.

**Enough:** You have written what they actually said, including the parts they got wrong, rather than what you hoped they would say.

**The read-aloud check:** Reading only the headings, in order, to somebody who has not seen the screen. If they cannot say what the page holds, the outline is not doing its job.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Who you read the headings to, or how you ran it alone

Section: practice. Stable action: write-aloud-who.

If nobody was available, read them aloud yourself, write down what they suggest, and say so here. That is an honest result.

**Answer:** Who you read the headings to, or how you ran it alone

If nobody was available, read them aloud yourself, write down what they suggest, and say so here. That is an honest result.


### What they said the page contains

Section: practice. Stable action: write-aloud-result.

Write your answer for “What they said the page contains”. Use the task instructions below to decide what to include.

**Answer:** What they said the page contains




### What you rewrote afterwards

Section: practice. Stable action: write-aloud-rewrites.

Write your answer for “What you rewrote afterwards”. Use the task instructions below to decide what to include.

**Answer:** What you rewrote afterwards




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson measures the text on these same two screens.


<details>
<summary>Optional hints and reference material</summary>

- Write each screen as a numbered outline and check each item is a genuine subsection of the one above.
- Draw each screen and outline its regions, then state how someone reaches the main content first.

- R10: [W3C: page structure](https://www.w3.org/WAI/tutorials/page-structure/) — The headings and page regions sections. Purpose: Supplies the outline and region rules this lesson applies. Free reading, no account. Verified 2026-09-06. It covers structural semantics, not navigation design or content wording. Fallback: R14.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The heading and page title checks. Purpose: Gives self-runnable verification for the outline you wrote. Free reading, no account. Verified 2026-09-06. Preliminary checks only; passing them is not conformance. Fallback: R28.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Headings are correctly nested and descriptive**

Adequate evidence: Two outlines with one page title each, no skipped levels, and headings that describe their sections.

0 — Headings chosen by visual size.

1 — Correct nesting with vague headings.

2 — Correct nesting and descriptive headings on both screens.

3 — As adequate, and headings reuse vocabulary evidenced in m06.

Repair: Write each screen as a numbered outline and check each item is a genuine subsection of the one above. Recheck: The two outlines.

**Regions are named and main content is directly reachable**

Adequate evidence: A region map per screen with a route that skips the navigation.

0 — No regions.

1 — Regions named but no skip route.

2 — Regions named and main content directly reachable.

3 — As adequate, and repeated content is identified as something to skip on every page.

Repair: Draw each screen and outline its regions, then state how someone reaches the main content first. Recheck: The region maps.

**Reading order matches visual order**

Adequate evidence: A written content order compared against the visual order, with mismatches fixed.

0 — Order not examined.

1 — Examined without fixing a known mismatch.

2 — Checked and mismatches corrected.

3 — As adequate, and a layout was changed rather than patched to make the orders agree.

Repair: Write the content order as a numbered list and walk the screen visually alongside it. Recheck: The order comparison.

**The read-aloud check was run and changed something**

Adequate evidence: A record of reading headings alone to someone, with resulting rewrites.

0 — Not run.

1 — Run alone with no changes.

2 — Run with another person and rewrites recorded.

3 — As adequate, and the listener's summary is quoted beside the outline.

Repair: Read only the headings to someone and ask what the page contains. Rewrite what they cannot infer. Recheck: The read-aloud record.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson measures the text on these same two screens.

**Review criteria:**

- Headings are correctly nested and descriptive
- Regions are named and main content is directly reachable
- Reading order matches visual order
- The read-aloud check was run and changed something

<details>
<summary>Reading, video and deeper explanation</summary>

- A heading outline is the page's table of contents, and for many people it is the primary navigation. Skipping a level tells them a section is nested inside something that does not exist, which makes the shape of the page unreadable while looking fine visually. The rule is strict because the outline has no other way to convey nesting.
- Regions solve the repetition problem. Marked correctly, someone can skip the banner and navigation and land on the main content on every page; unmarked, they hear the same twenty links before the content each time, which turns a five-page task into an endurance exercise.
- Reading order is where visually correct layouts go wrong. If a sidebar appears after the main content in the markup but beside it visually, someone reading in order meets it late; if a two-column form reads down each column instead of across each row, the labels and fields separate. Check the order the content is actually in, not the order it appears in.
- The cheapest verification is reading the headings aloud in order. If they summarise the page, the structure is probably sound. If they read as a list of decorative phrases, no amount of correct markup will help, because the words themselves carry no information.

[W3C: page structure](https://www.w3.org/WAI/tutorials/page-structure/).

</details>

## Lesson 4: Text people can actually read

Stable ID: m11-l04-v1. Core.

Text is the product for most people most of the time, and it is the easiest thing to make unreadable while it looks elegant.

Bring: Your token sheet with its text and surface pairs.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Measured ratios for every text-on-surface pair
- Repairs for every failing pair, recorded
- A 200 per cent text test with breakages named and fixed
- A line-length and spacing decision for body text

### Start with a clear task

Section: learn. Stable action: welcome.

Measure contrast for every text pair in your design, test the layout at 200 per cent text size, and repair what breaks without removing content.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Measure contrast; do not judge it by eye under studio lighting.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Quiet text — captions, placeholders, disabled labels — fails most often.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Enlarging text must reflow the layout, not clip or scroll it sideways.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Line length and spacing affect reading as much as size does.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Meeting a ratio is a floor, not proof that text is comfortable to read.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Nine text pairs were measured. Three failed: the caption at 3.1:1, the placeholder at 2.8:1 and the disabled button label at 2.4:1. The caption was darkened; the placeholder was replaced with a permanent hint under the label, removing the problem instead of repairing it; the disabled label was given a stronger colour and a written explanation beside it, since a disabled control with unreadable text tells nobody anything. At 200 per cent text the price panel clipped its last line and the header wrapped over the logo; both were fixed by allowing the containers to grow. Line length on the description exceeded ninety characters at wide widths and was capped.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Measure everything

Section: practice-plan. Stable action: step-1-brief.

Every text-on-surface pair listed, each with a measured ratio, and the failing ones marked with their size.

- List every text-on-surface pair, including quiet text.
- Measure each ratio and record it in the token sheet.
- Mark every pair below the relevant threshold.

**Start here:** Take one screen and go corner to corner, writing down every place text meets a surface before measuring anything.

**Enough:** Your list contains at least one pair you would not have thought of as a design decision.

**Contrast ratio:** A number from 1 to 21 comparing how light the text is against how light its background is. It is calculated, not judged by eye.

**Quiet text:** Captions, placeholder text, helper lines and disabled labels. They are set pale on purpose, which is exactly why they fail most often.

**Threshold:** The ratio a pair has to reach. Larger and heavier text is allowed a lower one, so the size has to be recorded beside the number.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Measuring the text on a tool-library card, and listing only the text I had designed on purpose.

**What I listed:** Six pairs: the title, the body, the two headings, the button label and the price. All six passed comfortably, and I nearly wrote that the screen was fine.

**What made me look again:** The barrier list from lesson one had a line about a collection code nobody could read outdoors, and the code was not among my six.

**What I had left out:** Placeholder text in the search box. Helper text under the date field. The disabled label on the unavailable button. The caption under the photograph. None of them felt like text I had designed; all of them are text somebody reads.

**What the numbers were:** Placeholder 2.8 to 1, helper 3.4 to 1, disabled label 2.4 to 1, caption 3.1 to 1. Four failures, none of them in my original list.

**What I changed about the method:** I stopped listing text and started listing places text sits on a surface, going through the screen area by area rather than from memory.

**Wrong turn:** The wrong turn is listing the text you chose rather than the text that is there. Everything you deliberately set is likely to be fine, because you were looking at it when you set it.

**Trade-off:** Going area by area is slower and produces a longer, duller list, most of which passes. It is the only way the quiet text gets measured at all.

**Unknown:** Still unknown: what the caption measures over the lighter part of the photograph. The ratio changes across the image, and a single number does not describe it.


### Every place text sits on a surface, including the quiet text

Section: practice-plan. Stable action: write-pairs-list.

Body, headings, captions, placeholder text, disabled labels, text over images, text inside buttons, and anything in a coloured panel.

**Answer:** Every place text sits on a surface, including the quiet text

Body, headings, captions, placeholder text, disabled labels, text over images, text inside buttons, and anything in a coloured panel.


### The measured ratio for each pair

Section: practice-plan. Stable action: write-ratios.

Write your answer for “The measured ratio for each pair”. Use the task instructions below to decide what to include.

**Answer:** The measured ratio for each pair



<details>
<summary>Example</summary>

Example (made up): caption on card 3.1 to 1 · placeholder in search 2.8 to 1 · disabled button label 2.4 to 1 · body on white 12.6 to 1.

</details>


### The pairs below the threshold that applies to them

Section: practice-plan. Stable action: write-failing.

The threshold depends on size and weight, so write the size beside each failing pair.

**Answer:** The pairs below the threshold that applies to them

The threshold depends on size and weight, so write the size beside each failing pair.


### Repair the failures

Section: practice-plan. Stable action: step-2-brief.

Each failing pair repaired, with the new ratio written beside the old one.

- Darken, remove or replace each failing pair.
- Prefer removing decorative text over dimming meaningful text.
- Re-measure after each repair.

**Start here:** Take the worst ratio first and decide which of the three repairs it needs before you touch any colour.

**Enough:** Every failing pair has a new measured number recorded, not an assumption that the repair worked.

**Repair by removal:** Taking the text away rather than darkening it. It is the right answer when the text was decorative, or when a permanent label can replace a placeholder.

**Disabled label:** The text on a control that cannot be used. If it is unreadable, the person cannot tell what they are not allowed to do, which is worse than no control at all.


### Try the distinction · 1 of 5

Section: practice-plan. Stable action: step-2-sort-1.

Five failing pairs from a made up tool-library screen. For each one, decide what the right repair is.

The caption under the photograph, at 3.1 to 1, which says what the photograph shows.

- darken the text
- replace it with something permanent
- remove it

<details>
<summary>After your attempt</summary>

darken the text — It carries meaning and it belongs where it is. Darkening it costs nothing but a value in the token sheet.

replace it with something permanent — It is already permanent. Nothing about it appears and disappears.

remove it — It says what the photograph shows, so removing it takes information away from exactly the people who need it most.

Now decide the repair for each of your own failing pairs, and write the new ratio beside the old one.

</details>


### Try the distinction · 2 of 5

Section: practice-plan. Stable action: step-2-sort-2.

Five failing pairs from a made up tool-library screen. For each one, decide what the right repair is.

Placeholder text inside the search box, at 2.8 to 1, which is the only thing telling anyone what to search for.

- darken the text
- replace it with something permanent
- remove it

<details>
<summary>After your attempt</summary>

darken the text — Darkening it makes it look like a value that is already typed, which is the other problem placeholders have. It disappears the moment anybody types, whatever its ratio is.

replace it with something permanent — A label above the field, or a hint line under it, says the same thing and stays on screen while the person types. The contrast failure and the disappearing act are fixed by the same change.

remove it — Removing it takes away the only instruction. The instruction needs to move, not to go.

Now decide the repair for each of your own failing pairs, and write the new ratio beside the old one.

</details>


### Try the distinction · 3 of 5

Section: practice-plan. Stable action: step-2-sort-3.

Five failing pairs from a made up tool-library screen. For each one, decide what the right repair is.

A pale word DRAFT across the middle of the page, at 1.4 to 1, left over from an earlier version.

- darken the text
- replace it with something permanent
- remove it

<details>
<summary>After your attempt</summary>

darken the text — Darkening it makes a decorative leftover more prominent than the content, which is the opposite of what anyone wants.

replace it with something permanent — There is nothing to replace it with. It is not telling a reader anything they need.

remove it — Decorative text that fails is the easy case. Take it out and the failure and the clutter both go.

Now decide the repair for each of your own failing pairs, and write the new ratio beside the old one.

</details>


### Try the distinction · 4 of 5

Section: practice-plan. Stable action: step-2-sort-4.

Five failing pairs from a made up tool-library screen. For each one, decide what the right repair is.

The label on a Reserve button that cannot be pressed because the class is full, at 2.4 to 1.

- darken the text
- replace it with something permanent
- remove it

<details>
<summary>After your attempt</summary>

darken the text — A person has to be able to read what they are not allowed to do, and why. Disabled is a state, not a licence to be unreadable, and a written reason beside it helps more still.

replace it with something permanent — The label is already permanent. What is wrong with it is the colour.

remove it — A control with no readable label tells nobody anything. The person cannot even tell what has been disabled.

Now decide the repair for each of your own failing pairs, and write the new ratio beside the old one.

</details>


### Try the distinction · 5 of 5

Section: practice-plan. Stable action: step-2-sort-5.

Five failing pairs from a made up tool-library screen. For each one, decide what the right repair is.

Helper text under the date field, at 3.4 to 1, repeating the label in different words.

- darken the text
- replace it with something permanent
- remove it

<details>
<summary>After your attempt</summary>

darken the text — Darkening it keeps a line that says nothing new and adds another thing to read.

replace it with something permanent — It is already permanent, and the trouble is that it duplicates the label rather than adding to it.

remove it — Text that repeats the label is decorative in practice. Removing it fixes the ratio and shortens the form.

Now decide the repair for each of your own failing pairs, and write the new ratio beside the old one.

</details>


### What you did to each failing pair

Section: practice-plan. Stable action: write-repairs.

Darken it, replace it, or remove it. Removing decorative text is a repair; dimming meaningful text is not.

**Answer:** What you did to each failing pair

Darken it, replace it, or remove it. Removing decorative text is a repair; dimming meaningful text is not.


### The new ratio beside the old one for each repair

Section: practice-plan. Stable action: write-remeasured.

Write your answer for “The new ratio beside the old one for each repair”. Use the task instructions below to decide what to include.

**Answer:** The new ratio beside the old one for each repair




### Enlarge the text

Section: practice-plan. Stable action: step-3-brief.

The screens opened again at about 200 per cent text, every breakage named, and containers changed so the text is not shrunk back.

- Set text to about 200 per cent and reload the screens.
- Record every clip, overlap, truncation and horizontal scroll.
- Fix by letting containers grow rather than shrinking the text.

**Start here:** Turn your browser text size up before you open the screens, so you meet them at the larger size rather than watching them change.

**Enough:** Every breakage is written down concretely, and no fix involves making the text smaller again.

**Reflow:** Content rearranging itself to fit when the text gets bigger: lines rewrap, containers grow, things stack. This is what should happen.

**Clipping:** Text being cut off because the box it is in refuses to grow. The words are still there and nobody can read them.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Enlarging the text on a tool-library screen, and repairing the test instead of the screen.

**What broke:** At 200 per cent, the price panel cut off its last line and the header wrapped over the logo. Two clear breakages in about ten seconds.

**What I did first:** I set the panel text to a smaller size so it fitted again. The screenshot at 200 per cent then looked perfect.

**Why that was worse than doing nothing:** Somebody who needs 200 per cent text now gets that panel at 140 per cent. I had not fixed the layout; I had opted that person out of their own setting.

**What the real repair was:** The panel had a fixed height. I let it grow, and let the header stack below the logo instead of beside it once there is no room.

**What it cost:** At the largest sizes the screen is a good deal longer and the header takes two lines. Both are correct: more text needs more room.

**Wrong turn:** The wrong turn is shrinking the text to make the test pass, because the screenshot afterwards looks exactly like a fix. It is the one repair that removes the accommodation the person had chosen.

**Trade-off:** Letting containers grow makes the enlarged layout much longer and, at some widths, uglier than the design you drew. That is the correct outcome, and it will not look like your original.

**Unknown:** Still unknown: how it behaves at 400 per cent, which the standard also cares about. I tested one setting and I am saying so rather than implying I tested the range.


### How you enlarged the text, and on what

Section: practice-plan. Stable action: write-enlarge-how.

Write your answer for “How you enlarged the text, and on what”. Use the task instructions below to decide what to include.

**Answer:** How you enlarged the text, and on what



<details>
<summary>Example</summary>

Example (made up): browser text size set to 200 per cent on my laptop, then the same two screens opened again.

</details>


### Every clip, overlap, truncation and sideways scroll you saw

Section: practice-plan. Stable action: write-breakages.

Write your answer for “Every clip, overlap, truncation and sideways scroll you saw”. Use the task instructions below to decide what to include.

**Answer:** Every clip, overlap, truncation and sideways scroll you saw




### What you changed, and what the container does now

Section: practice-plan. Stable action: write-enlarge-fixes.

Let the container grow. Shrinking the text back is not a fix; it is undoing the test.

**Answer:** What you changed, and what the container does now

Let the container grow. Shrinking the text back is not a fix; it is undoing the test.


### Check reading comfort

Section: practice-plan. Stable action: step-4-brief.

A counted line length at your widest layout, stated spacing values, and what the read-aloud test changed.

- Measure line length at your widest layout and cap it if needed.
- Check line height and paragraph spacing on the longest text block.
- Read one screen aloud at arm's length to test the result.

**Start here:** Count the characters on one full line at your widest layout. Count them; do not estimate.

**Enough:** You have a number rather than an impression, and the read-aloud line says what actually happened.

**Measure:** The number of characters on a line. Long lines make the eye lose its place on the way back to the start, which is tiring in a way that has nothing to do with contrast.

**Meeting the floor:** Passing the ratio. It means the text is distinguishable, and it does not mean it is comfortable to read for five minutes.


### Characters per line at your widest layout, counted

Section: practice-plan. Stable action: write-line-length.

Write your answer for “Characters per line at your widest layout, counted”. Use the task instructions below to decide what to include.

**Answer:** Characters per line at your widest layout, counted




### Your line height and paragraph spacing on the longest block

Section: practice-plan. Stable action: write-spacing.

Write your answer for “Your line height and paragraph spacing on the longest block”. Use the task instructions below to decide what to include.

**Answer:** Your line height and paragraph spacing on the longest block




### What happened when you read one screen aloud at arm’s length

Section: practice-plan. Stable action: write-aloud-test.

Write your answer for “What happened when you read one screen aloud at arm’s length”. Use the task instructions below to decide what to include.

**Answer:** What happened when you read one screen aloud at arm’s length




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Every pair passes its ratio. Can you say the text on this screen is fine?

- It cannot be said. The ratio covers one colour on another at a size, and says nothing about thin type, long lines, or text over a photograph.
- It can, because the ratio is the actual standard.
- It can for body text, though headings need a separate check.

<details>
<summary>After your attempt</summary>

It cannot be said. The ratio covers one colour on another at a size, and says nothing about thin type, long lines, or text over a photograph. — The ratio is a floor. A screen of 95-character lines in a hairline weight passes every check and is still tiring to read, and text over an image has a different ratio in every part of the image.

It can, because the ratio is the actual standard. — It is the criterion, which is the minimum somebody may ship. Comfort, line length and weight sit outside it and still decide whether the text gets read.

It can for body text, though headings need a separate check. — Headings are usually the safest case, because larger text is allowed a lower threshold and is easier to read anyway. The risk sits with the small, thin and quiet text.

Improve: Add the line length and the lightest font weight you use to your comfort notes in step 4, and record the change in step 5.

Check again: Your record separates the ratio from whether the text is comfortable to read.

Answers to revisit: line-length, spacing, aloud-test, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

At 200 per cent the price panel clips. The quickest fix is to reduce that panel’s text size. Why is that the wrong fix?

- It takes the enlargement away from the person who asked for it, and hides the layout problem instead of fixing it.
- It is acceptable if the panel is secondary content.
- It is fine as an interim fix while the layout is rebuilt.

<details>
<summary>After your attempt</summary>

It takes the enlargement away from the person who asked for it, and hides the layout problem instead of fixing it. — The person set 200 per cent because that is what they can read. Overriding it in one panel means the panel is now the least readable thing on the screen, and the fixed-height container is still there.

It is acceptable if the panel is secondary content. — Secondary content still has to be readable, and price is rarely secondary. The container is the thing that is wrong.

It is fine as an interim fix while the layout is rebuilt. — An interim fix that looks correct in a screenshot tends to become the permanent one, because nothing remains visibly broken to prompt the rebuild.

Improve: Change that container in step 3 so it grows with its content, and write what it does now. Record the change in step 5.

Check again: No fix in step 3 reduces a text size.

Answers to revisit: enlarge-how, breakages, enlarge-fixes, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A placeholder fails at 2.8 to 1 and you darken it until it passes. What is still wrong?

- It still disappears the moment anybody types, so the instruction is gone exactly when it is needed.
- Nothing, once it passes the threshold.
- Darkened placeholder text now looks like a typed value.

<details>
<summary>After your attempt</summary>

It still disappears the moment anybody types, so the instruction is gone exactly when it is needed. — Contrast was the measurable half of the problem. A placeholder is a label that vanishes on use, and that half does not show up in any ratio.

Nothing, once it passes the threshold. — It passes, and it is still the only place the instruction lives. Anyone who pauses mid-entry has nothing to look at.

Darkened placeholder text now looks like a typed value. — That is a genuine second problem and it is a symptom. Both come from using a placeholder to carry an instruction.

Improve: Move that instruction to a permanent label or hint in step 2, record the repair, and note the change in step 5.

Check again: No instruction in your design lives only in placeholder text.

Answers to revisit: repairs, remeasured, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

The token sheet updated with measured ratios, an honest list of what you could not fix, and the repair the Check questions asked for.

- Update the token sheet with measured ratios.
- Write what you could not fix and why.
- Save the enlarged-text screenshots with the notes.

**Start here:** Open your token sheet and write the measured number beside each colour pair you used today.

**Enough:** Anybody picking up your token sheet would know which pairs are measured and which are not.

**Token sheet:** The record of your values from Module 8. Measured ratios belong in it, so the next person who uses a colour does not have to measure it again.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### What you changed in the token sheet

Section: practice. Stable action: write-token-update.

Write your answer for “What you changed in the token sheet”. Use the task instructions below to decide what to include.

**Answer:** What you changed in the token sheet




### What you could not fix, and why

Section: practice. Stable action: write-unfixed.

An honest unfixed line with a reason is a result. A quiet omission is not.

**Answer:** What you could not fix, and why

An honest unfixed line with a reason is a result. A quiet omission is not.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson looks at everything on these screens whose meaning depends on colour.


<details>
<summary>Optional hints and reference material</summary>

- List every place text meets a surface and measure each; the ones you skipped are usually the failing ones.
- Repair each failing pair and record the new number beside the old one.

- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The thresholds and the large-text and incidental exceptions. Purpose: Supplies the measurable target for every pair you allow. Free reading, no account. Verified 2026-09-06. A passing ratio is not proof of legibility at real sizes in real light. Fallback: R29.
- R29: [web.dev: colour and contrast](https://web.dev/learn/accessibility/color-contrast) — Colour perception, colour-vision deficiency and contrast in practice. Purpose: Explains why measured contrast matters more than how the text looks to you. Free reading, no account. Verified 2026-09-06. No code samples; the measurement and reflow tests here are the practical work. Fallback: R30.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Every text pair carries a measured ratio**

Adequate evidence: A measured number per pair in the token sheet, including quiet text.

0 — No measurements.

1 — Body text measured only.

2 — All pairs measured including captions, placeholders and disabled text.

3 — As adequate, and the sheet marks which pairs are permitted and which are forbidden.

Repair: List every place text meets a surface and measure each; the ones you skipped are usually the failing ones. Recheck: The measured token sheet.

**Failing pairs are repaired and re-measured**

Adequate evidence: Repairs recorded with new ratios, including any text removed rather than dimmed.

0 — Failures left in place.

1 — Repaired without re-measuring.

2 — Repaired and re-measured, with removals justified.

3 — As adequate, and one repair removed the need for the text rather than restyling it.

Repair: Repair each failing pair and record the new number beside the old one. Recheck: The repair record.

**A 200 per cent test was run with breakages fixed**

Adequate evidence: Screens at enlarged text with named breakages and their fixes.

0 — Not tested.

1 — Tested with breakages recorded but unfixed.

2 — Tested, named and fixed by allowing reflow.

3 — As adequate, and no fix reduced the text size or removed content.

Repair: Enlarge the text and screenshot each screen. Name each breakage concretely, then let the containers grow. Recheck: The enlarged screenshots and fixes.

**Line length and spacing decisions are recorded**

Adequate evidence: A measured line length at the widest layout and stated spacing values.

0 — Not considered.

1 — Mentioned without measurement.

2 — Measured, capped where needed, and spacing recorded.

3 — As adequate, and the decision references your m03 typography work.

Repair: Count characters per line at your widest breakpoint and cap the container if it runs long. Recheck: The measurements.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson looks at everything on these screens whose meaning depends on colour.

**Review criteria:**

- Every text pair carries a measured ratio
- Failing pairs are repaired and re-measured
- A 200 per cent test was run with breakages fixed
- Line length and spacing decisions are recorded

<details>
<summary>Reading, video and deeper explanation</summary>

- Contrast is measurable, which means opinions about it are unnecessary. The assigned threshold reading gives the ratios and their exceptions for large text and incidental elements. Measure every pair you allow — including the ones you consider decorative, because a caption carrying the price is not decorative — and record the number beside the pair in your token sheet.
- Quiet text is where products fail. Placeholder grey, disabled labels, captions on tinted panels: each was chosen to be visually recessive, and recessive is exactly what fails a ratio. If a piece of text matters enough to appear, it matters enough to be readable; if it does not matter, remove it rather than dimming it.
- Enlarging text is a reflow test, not a zoom test. A person who has set their text larger should get a layout that adapts: content wrapping, columns stacking, nothing clipped, no horizontal scrolling of the page. Fixed-height containers and text sized in absolute units are the two usual causes of failure, and both are decisions you made in m03 and m08.
- Comfort is broader than the threshold. Line length, line height, paragraph spacing and the amount of text on screen all affect whether people read or skim, and none of them appear in a contrast measurement. Meeting the ratio is where you start rather than where you finish.

[W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

</details>

## Lesson 5: Never colour alone

Stable ID: m11-l05-v1. Core.

Colour is the signal most designers reach for and the one most likely to be unavailable to the reader.

Bring: Your state and message specifications.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A list of every place meaning is carried by colour
- A second signal added to each, named
- A greyscale pass with any remaining failures
- A colour-vision simulation pass with results

### Start with a clear task

Section: learn. Stable action: welcome.

Find every place your design carries meaning by colour, add a second signal to each, and prove the design still works in greyscale and in a colour-vision simulation.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Colour may reinforce meaning; it may not be the only carrier.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Second signals: text, shape, position, weight, an icon with a distinct silhouette.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Greyscale is the fastest test and catches most failures.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Colour-vision differences affect roughly one in twelve men; red and green pairs fail first.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Charts, status and required fields are the usual offenders.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Four places carried meaning by colour alone. Availability dots — green, amber, red — gained text: “Places available”, “2 left”, “Full”. Required fields, marked with red labels, gained the word “required”. The chart's three series gained direct labels rather than a colour legend. The error state, which had used only a red border, gained an icon with a distinct shape and the message text tied to the field. In greyscale all four remained readable, and a colour-vision simulation confirmed the amber and red dots had previously been indistinguishable for some readers.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Find the colour-only signals

Section: practice-plan. Stable action: step-1-brief.

Every place meaning depends on colour, with what a reader would miss written out for each.

- Walk your screens listing everything whose meaning depends on colour.
- Check status, charts, required fields, links and errors specifically.

**Start here:** Walk each screen asking one question: if every colour became the same grey, what would somebody no longer know?

**Enough:** You have checked status, charts, required fields, links and errors by name rather than trusting a general scan.

**Colour-only signal:** Anything where the colour is the whole message: a red border meaning error, a green dot meaning available, a coloured line on a chart with a legend.

**Second signal:** Something else carrying the same meaning: a word, a shape with a different outline, a position, a weight. The colour stays and stops being the only carrier.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Looking for colour-only signals on a borrowing product, and looking for the wrong thing.

**How I searched at first:** I scanned each screen for coloured things. Dots, the red error border, the chart. Three found, list finished, twenty minutes.

**What that method misses:** Anything whose colour is subtle enough not to catch the eye. A grey-blue label that means optional does not look coloured; it looks like a label.

**The question I switched to:** Not “what is coloured?” but “what would somebody no longer know if every colour became the same grey?”. That is a question about meaning rather than about appearance.

**What it added:** Two more. The optional labels, which were the only thing separating optional from required fields. And the read and unread rows in the notice list, distinguished by a slightly warmer background.

**Why the second search found them:** Both are quiet on purpose. A search for colour skips them precisely because the design made them unobtrusive.

**Wrong turn:** The wrong turn is searching for colour instead of searching for meaning. Bright things get found, quiet distinctions survive the audit, and the list looks complete.

**Trade-off:** The meaning question is slower and produces items you will argue with yourself about, such as whether a slightly warmer row background is really carrying anything. Arguing about it is better than never listing it.

**Unknown:** Still unknown: whether anybody uses the warmer background to tell read from unread, or whether they go by the bold title instead. The greyscale pass will show whether anything is left once colour is gone; it cannot say what people were relying on.


### Every place the meaning depends on colour

Section: practice-plan. Stable action: write-colour-signals.

Write your answer for “Every place the meaning depends on colour”. Use the task instructions below to decide what to include.

**Answer:** Every place the meaning depends on colour



<details>
<summary>Example</summary>

Example (made up): the availability dot, the required-field labels, the three chart series, the error border on the date field.

</details>


### For each one: what a person misses if every colour became the same grey

Section: practice-plan. Stable action: write-what-is-lost.

Be specific. Not “the status”, but “which of the two classes still has places”.

**Answer:** For each one: what a person misses if every colour became the same grey

Be specific. Not “the status”, but “which of the two classes still has places”.


### Add second signals

Section: practice-plan. Stable action: step-2-brief.

A named second signal for each colour-only place, preferring words where words will fit.

- Add text where possible; it works for every reader including screen readers.
- Use distinct shapes rather than same-shape different-colour icons.
- Keep the colour; you are adding, not replacing.

**Start here:** Take your first colour-only place and write the word that says what the colour means. Only reach for a shape if the word will not fit.

**Enough:** Each second signal would still carry its meaning if the whole screen were printed in black and white.

**Distinct silhouette:** Two icons whose outlines differ when both are black. A circle and a circle in two colours are the same icon to a great many readers.

**Direct label:** Putting the name on the thing itself rather than in a key elsewhere. On a chart it removes both the colour dependency and the need to remember.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Adding a second signal to the status dots on a tool-library list, and choosing a signal that was not one.

**What I added first:** A small circle icon beside each dot: filled for available, filled for out on loan, filled for reserved. Three icons, three colours, one shape.

**What I told myself:** That there was now an icon as well as a colour, so the meaning no longer rested on colour alone. That sentence is true and the icon is doing nothing.

**What the greyscale view showed:** Three identical grey circles. I had added a second element rather than a second signal, and it had cost me layout space to do it.

**What I did instead:** Words: Available, On loan, Reserved, set beside the dot at the same size as the item name. Readable in greyscale, in sunlight, on a monochrome display, and to somebody listening.

**What it cost:** The row is wider and the list holds fewer items on a narrow screen. I shortened the item name rather than the status, because the status is the thing people are scanning for.

**Wrong turn:** The wrong turn is adding a shape that is the same shape. It satisfies the sentence “there is more than colour here” while carrying no information at all, and it is easy to do without noticing.

**Trade-off:** Words take room, and on a narrow list they push something else out. Something else being pushed out is the decision you are actually making, so make it deliberately.

**Unknown:** Still unknown: whether On loan is the wording people expect, or whether they would look for Out. That is a wording question for a session with somebody, not something greyscale can settle.


### Signal 1 · the place, and the second signal you added

Section: practice-plan. Stable action: write-signal-1.

Text works for everybody, including somebody listening. A shape works only if its outline differs from its neighbours.

**Answer:** Signal 1 · the place, and the second signal you added

Text works for everybody, including somebody listening. A shape works only if its outline differs from its neighbours.

<details>
<summary>Example</summary>

Example (made up): availability dot · the words Places available, 2 left, or Full beside it, in the same size as the class time.

</details>


### Signal 2 · the place, and the second signal you added

Section: practice-plan. Stable action: write-signal-2.

Write your answer for “Signal 2 · the place, and the second signal you added”. Use the task instructions below to decide what to include.

**Answer:** Signal 2 · the place, and the second signal you added




### Signal 3 · the place, and the second signal you added

Section: practice-plan. Stable action: write-signal-3.

Write your answer for “Signal 3 · the place, and the second signal you added”. Use the task instructions below to decide what to include.

**Answer:** Signal 3 · the place, and the second signal you added




### Signal 4 · the place, and the second signal you added

Section: practice-plan. Stable action: write-signal-4.

Write your answer for “Signal 4 · the place, and the second signal you added”. Use the task instructions below to decide what to include.

**Answer:** Signal 4 · the place, and the second signal you added




### Greyscale everything

Section: practice-plan. Stable action: step-3-brief.

Every screen viewed in greyscale, anything still indistinguishable marked, and repairs checked on a second look.

- View every screen in greyscale.
- Mark anything you can no longer distinguish or interpret.
- Repair and re-check.

**Start here:** Turn greyscale on before you open the screens, so you see them as somebody would rather than watching them change.

**Enough:** You marked what you could not interpret, not only what looked different.

**Greyscale:** The same screen with all colour removed. It is the fastest accessibility test there is and it catches most colour-only failures in one pass.

**Monochrome display:** A real situation, not a hypothetical: e-ink readers, some low-power modes, printing, and photocopies of a printed page.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six things from a made up borrowing product. For each one, decide whether greyscale would still carry the meaning.

A green dot and a red dot, the same size, in the same position on two cards.

- survives greyscale
- fails greyscale
- survives only because of something else on the screen

<details>
<summary>After your attempt</summary>

survives greyscale — Both become the same medium grey. Nothing distinguishes them once the hue is gone.

fails greyscale — Two dots differing only by hue are the classic failure. This is the one the test exists to catch.

survives only because of something else on the screen — There is nothing else here. The dot is the whole signal.

Now put your own screens in greyscale and mark every line you can no longer interpret.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six things from a made up borrowing product. For each one, decide whether greyscale would still carry the meaning.

A green tick and a red cross, the same size, in the same position.

- survives greyscale
- fails greyscale
- survives only because of something else on the screen

<details>
<summary>After your attempt</summary>

survives greyscale — A tick and a cross have different outlines, so they stay different when both are black. The colour is reinforcing rather than carrying.

fails greyscale — The shapes differ, which is what makes this the acceptable version of the previous line.

survives only because of something else on the screen — It survives on its own, without help from a label or a position.

Now put your own screens in greyscale and mark every line you can no longer interpret.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six things from a made up borrowing product. For each one, decide whether greyscale would still carry the meaning.

A three-line chart with a colour key underneath naming each line.

- survives greyscale
- fails greyscale
- survives only because of something else on the screen

<details>
<summary>After your attempt</summary>

survives greyscale — The lines become three greys. The key still names three colours, and now nothing connects a name to a line.

fails greyscale — A colour key is the commonest chart failure. Labelling each line directly fixes it and removes the remembering as well.

survives only because of something else on the screen — The key is the something else, and the key is what stops working.

Now put your own screens in greyscale and mark every line you can no longer interpret.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six things from a made up borrowing product. For each one, decide whether greyscale would still carry the meaning.

Links in the body text, in a different colour and underlined.

- survives greyscale
- fails greyscale
- survives only because of something else on the screen

<details>
<summary>After your attempt</summary>

survives greyscale — The underline is doing the work. In grey the links are still obviously links.

fails greyscale — It would if the underline were removed, which is exactly what many designs do.

survives only because of something else on the screen — The underline is part of the link itself rather than something elsewhere on the screen.

Now put your own screens in greyscale and mark every line you can no longer interpret.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six things from a made up borrowing product. For each one, decide whether greyscale would still carry the meaning.

Required fields shown by a red label, with a line at the top of the form saying red labels are required.

- survives greyscale
- fails greyscale
- survives only because of something else on the screen

<details>
<summary>After your attempt</summary>

survives greyscale — In grey, the labels are all the same colour and the person cannot tell which were red.

fails greyscale — It does fail, and the interesting part is why it looked safe: an explanation was provided.

survives only because of something else on the screen — The sentence at the top makes it feel handled. It explains a distinction the reader can no longer see, which is worse than no explanation.

Now put your own screens in greyscale and mark every line you can no longer interpret.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six things from a made up borrowing product. For each one, decide whether greyscale would still carry the meaning.

A field with a red border, an icon of a triangle, and the message The date must be in the future underneath it.

- survives greyscale
- fails greyscale
- survives only because of something else on the screen

<details>
<summary>After your attempt</summary>

survives greyscale — The message is the signal and it is text. The border and the icon are reinforcement.

fails greyscale — The border alone would. With the message present, nothing is lost when the colour goes.

survives only because of something else on the screen — The message is attached to the field rather than being a key elsewhere, which is the difference.

Now put your own screens in greyscale and mark every line you can no longer interpret.

</details>


### How you viewed it in greyscale

Section: practice-plan. Stable action: write-greyscale-how.

Your operating system accessibility settings, a photocopy, or a phone photograph converted to black and white. Any of the three is fine.

**Answer:** How you viewed it in greyscale

Your operating system accessibility settings, a photocopy, or a phone photograph converted to black and white. Any of the three is fine.


### Anything you still could not tell apart or interpret

Section: practice-plan. Stable action: write-greyscale-fails.

Write your answer for “Anything you still could not tell apart or interpret”. Use the task instructions below to decide what to include.

**Answer:** Anything you still could not tell apart or interpret




### What you repaired, and the result on a second look

Section: practice-plan. Stable action: write-greyscale-repairs.

Write your answer for “What you repaired, and the result on a second look”. Use the task instructions below to decide what to include.

**Answer:** What you repaired, and the result on a second look




### Simulate colour-vision differences

Section: practice-plan. Stable action: step-4-brief.

A colour-vision simulation actually run, what became hard to tell apart, and anything left unfixed with its reason.

- Run a colour-vision simulation in your browser tools.
- Check red and green pairs first.
- Record what changed and what still fails.

**Start here:** Open the results screen, turn on the first simulation, and look at your status colours before anything else.

**Enough:** You checked red and green pairs specifically rather than glancing at the whole screen.

**Colour-vision difference:** Reduced ability to tell certain hues apart, most often red from green. It affects roughly one man in twelve, which is far more people than most teams assume.

**Simulation:** A filter that shows roughly what a screen looks like with a particular colour-vision difference. It is available in browser developer tools with no account and no purchase.


### Which simulations you ran, and where

Section: practice-plan. Stable action: write-simulation-run.

Write your answer for “Which simulations you ran, and where”. Use the task instructions below to decide what to include.

**Answer:** Which simulations you ran, and where



<details>
<summary>Example</summary>

Example (made up): the three simulations in my browser developer tools, on the results screen and the booking form.

</details>


### What became hard to tell apart, red and green pairs first

Section: practice-plan. Stable action: write-simulation-found.

Write your answer for “What became hard to tell apart, red and green pairs first”. Use the task instructions below to decide what to include.

**Answer:** What became hard to tell apart, red and green pairs first




### Anything that still fails, and why you left it

Section: practice-plan. Stable action: write-simulation-left.

Write your answer for “Anything that still fails, and why you left it”. Use the task instructions below to decide what to include.

**Answer:** Anything that still fails, and why you left it




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your team already uses a colour-blind-safe palette. Does that close this lesson?

- It does not. A safe palette lowers the chance of confusing two hues and carries no meaning at all for a printed page, a monochrome screen, or somebody listening.
- It does for colour-vision differences, and the rest is optional.
- It does, provided the palette was tested.

<details>
<summary>After your attempt</summary>

It does not. A safe palette lowers the chance of confusing two hues and carries no meaning at all for a printed page, a monochrome screen, or somebody listening. — The palette is a sensible precaution about hue. The second signal is what makes the meaning available when there is no hue to read, which is a different problem.

It does for colour-vision differences, and the rest is optional. — Even within colour-vision differences a palette reduces risk rather than removing it, and it does nothing for the grey, printed and spoken cases at all.

It does, provided the palette was tested. — A tested palette is still only about which hues can be told apart. Somebody hearing the screen read aloud gets no hue of any kind.

Improve: Write your one-sentence answer in the palette note in step 5, naming somebody a palette cannot reach. Record the change.

Check again: Your note names a reader for whom hue is unavailable entirely.

Answers to revisit: signals-summary, palette-note, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You added an icon beside each status dot, and in greyscale all three icons look the same. What went wrong?

- The icons differ by colour rather than by outline, so a second element was added but not a second signal.
- Icons are the wrong choice; only text works.
- The icons are too small for the difference to show.

<details>
<summary>After your attempt</summary>

The icons differ by colour rather than by outline, so a second element was added but not a second signal. — Three circles in three colours are one shape. The test is whether the outlines differ when everything is black, and it is easy to fail while feeling the problem is solved.

Icons are the wrong choice; only text works. — Text is the safest choice and icons can work, if their silhouettes genuinely differ. A tick and a cross survive greyscale perfectly well.

The icons are too small for the difference to show. — Size would make identical shapes bigger and still identical. The problem is the shapes, not the scale.

Improve: Replace that signal in step 2 with a word, or with shapes whose outlines differ, then check it in greyscale again. Record the change in step 5.

Check again: Every added signal is still distinguishable when the screen is entirely grey.

Answers to revisit: signal-1, signal-2, signal-3, signal-4, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your form marks required fields with red labels, and a line at the top explains that red means required. Is that a second signal?

- It is not. The sentence explains a distinction that disappears the moment colour does, so it does not help the reader who needs it.
- It is, because the meaning is stated in words somewhere on the screen.
- It is, provided the explanation is close to the fields.

<details>
<summary>After your attempt</summary>

It is not. The sentence explains a distinction that disappears the moment colour does, so it does not help the reader who needs it. — An explanation of a colour code is not a second carrier of the meaning. In grey, or read aloud, the reader knows the rule and cannot see which labels it applies to.

It is, because the meaning is stated in words somewhere on the screen. — The words state the rule rather than the status of each field. The person still cannot tell which fields are required.

It is, provided the explanation is close to the fields. — Moving the sentence nearer does not attach it to any particular field. The word required has to be on the field itself.

Improve: Put the word required on each required field in step 2 and remove the reliance on the explanatory line. Record the change in step 5.

Check again: Each required field states its own status rather than relying on a key.

Answers to revisit: signal-1, signal-2, signal-3, signal-4, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

A record of the signals you added, and one sentence on why a safe palette alone would not have been enough.

- List the signals you added and where.
- Note anything you could not fix and why.
- Save the greyscale and simulation evidence.

**Start here:** Finish this sentence: “a safe palette would not have helped the person who …”.

**Enough:** Your sentence names somebody a palette cannot reach: a printed page, a monochrome screen, or somebody listening.

**Colour-safe palette:** Hues chosen so they are less likely to be confused with one another. It lowers a risk and it carries no meaning of its own.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### The signals you added and where they now appear

Section: practice. Stable action: write-signals-summary.

Write your answer for “The signals you added and where they now appear”. Use the task instructions below to decide what to include.

**Answer:** The signals you added and where they now appear




### One sentence on why a safe palette would not have been enough on its own

Section: practice. Stable action: write-palette-note.

Write your answer for “One sentence on why a safe palette would not have been enough on its own”. Use the task instructions below to decide what to include.

**Answer:** One sentence on why a safe palette would not have been enough on its own




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson puts the mouse out of reach and tries to finish a whole task without it.


<details>
<summary>Optional hints and reference material</summary>

- Walk each screen asking what a person would miss if every colour were the same grey.
- For each case, add the word that states the meaning; then decide whether a shape helps as well.

- R29: [web.dev: colour and contrast](https://web.dev/learn/accessibility/color-contrast) — Colour-vision deficiency and the rule against relying on colour alone. Purpose: Supplies the rule and the perceptual reasoning behind it. Free reading, no account. Verified 2026-09-06. The page carries no code samples; the greyscale and simulation passes are the practical test. Fallback: R30.
- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — The use-of-colour criterion and the contrast criteria at level AA. Purpose: Names the criteria this lesson satisfies so the mapping stays traceable. Free reading, no account. Verified 2026-09-06. An index of the standard, not a design method; reading a criterion is not conformance. Fallback: R41.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Every colour-only signal is found and listed**

Adequate evidence: A list covering status, charts, required fields, links and error states.

0 — Not audited.

1 — Obvious cases only.

2 — All the usual categories checked and listed.

3 — As adequate, and one signal is found in a place you had not considered, such as a hover or a chart legend.

Repair: Walk each screen asking what a person would miss if every colour were the same grey. Recheck: The audit list.

**Each has a perceptible second signal**

Adequate evidence: A named second signal per case, preferring text where possible.

0 — Colour retained as the only signal.

1 — Second signals added but some rely on colour to be distinguished.

2 — Each has a genuinely perceptible second signal.

3 — As adequate, and at least one case uses text so the meaning also reaches a screen reader.

Repair: For each case, add the word that states the meaning; then decide whether a shape helps as well. Recheck: The signals list.

**A greyscale pass was run and repairs made**

Adequate evidence: Greyscale renderings with failures marked and repaired.

0 — Not run.

1 — Run without repairs.

2 — Run, failures marked and repaired.

3 — As adequate, and the pass covers states and messages as well as static screens.

Repair: Convert every screen and state to greyscale and repair anything you cannot interpret. Recheck: The greyscale evidence.

**A colour-vision simulation was run and recorded**

Adequate evidence: Simulation results, with red and green pairs specifically checked.

0 — Not run.

1 — Run without recording specific findings.

2 — Run with findings recorded and repairs made.

3 — As adequate, and a palette pair was changed as well as a second signal added.

Repair: Use your browser's simulation, check the status colours first, and record what becomes indistinguishable. Recheck: The simulation record.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson puts the mouse out of reach and tries to finish a whole task without it.

**Review criteria:**

- Every colour-only signal is found and listed
- Each has a perceptible second signal
- A greyscale pass was run and repairs made
- A colour-vision simulation was run and recorded

<details>
<summary>Reading, video and deeper explanation</summary>

- The rule is narrow and strict: information must not be conveyed by colour alone. It does not forbid colour, and it does not require a drab product. It requires that anyone who cannot distinguish your colours — through a colour-vision difference, a monochrome display, sunlight, a cheap projector or a printed page — can still get the information.
- The second signal has to be perceptible, not merely present. An icon that differs only in colour is not a second signal; an icon with a distinct silhouette is. Text is the most reliable of all: “Full” beside the red dot carries the meaning to everyone, including a screen-reader user for whom the dot does not exist at all.
- Greyscale catches most failures in seconds, and it is the check to run habitually. A colour-vision simulation catches the rest — particularly red and green pairs, which look distinct to you and identical to a significant share of readers, and which products use constantly for success and failure.
- Three places recur across products: chart series distinguished only by colour, status shown only by a coloured dot or background, and required fields marked only in red. Check these three first; they are almost always present and almost always unfixed.

[web.dev: colour and contrast](https://web.dev/learn/accessibility/color-contrast).

</details>

## Lesson 6: Everything works from a keyboard

Stable ID: m11-l06-v1. Core.

If a task cannot be completed from a keyboard, it cannot be completed by a large group of people, including many who do not consider themselves disabled.

Bring: Your key tables and, if possible, a rough running page.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A recorded keyboard-only attempt at one full task
- A list of unreachable, unoperable and trapping controls
- One repair addressing the most blocking failure
- A statement of which key tables were satisfied and which were not

### Start with a clear task

Section: learn. Stable action: welcome.

Complete one whole task using only a keyboard, record every point where it was impossible or unclear, and repair the worst without adding a mouse-only workaround.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Every function must be reachable and operable without a pointer.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Reachable is not enough: focus must be visible and the order sensible.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Traps are the worst failure: a place you can enter and cannot leave.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Custom controls are where keyboard support disappears.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Test by unplugging the mouse, not by imagining.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The booking task was attempted with the mouse unplugged. Four failures. The date picker could be reached and not operated: arrow keys did nothing, so no date could be chosen — a total block, repaired against the m09 key table. The filter panel trapped focus, with escape doing nothing. The remove control, hover-only, could not be reached at all. Focus was invisible on the tinted review panel. The repair addressed the date picker first, because it stopped the task entirely; the trap was recorded as the second, and the write-up noted that a mouse-only workaround was explicitly not acceptable as a fix.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Prepare the test

Section: practice-plan. Stable action: step-1-brief.

The thing you are testing, the one whole task, and your Module 9 key tables to hand, with the mouse genuinely out of reach.

- Open your prototype and put the mouse out of reach.
- Have your m09 key tables beside you.

**Start here:** Put the mouse where you cannot reach it without standing up. Imagining the test does not produce the finding.

**Enough:** The task you named ends in an outcome, and the mouse is genuinely out of reach rather than just unused.

**Keyboard-only:** Tab and shift-tab to move, arrows inside a group, enter or space to act, escape to leave. No pointer of any kind, including a trackpad.

**Key table:** The list you wrote in Module 9 saying which key does what in each control. It is the specification the repair is measured against.


### What you are testing, and where it runs

Section: practice-plan. Stable action: write-what-tested.

Write your answer for “What you are testing, and where it runs”. Use the task instructions below to decide what to include.

**Answer:** What you are testing, and where it runs



<details>
<summary>Example</summary>

Example (made up): the local HTML build of the booking flow, opened in my browser, mouse in the next room.

</details>


### The one whole task you will attempt

Section: practice-plan. Stable action: write-task-chosen.

Whole means from the first screen to the outcome. Half a task hides the failures in the second half.

**Answer:** The one whole task you will attempt

Whole means from the first screen to the outcome. Half a task hides the failures in the second half.


### Which Module 9 key tables you have beside you

Section: practice-plan. Stable action: write-tables-ready.

Write your answer for “Which Module 9 key tables you have beside you”. Use the task instructions below to decide what to include.

**Answer:** Which Module 9 key tables you have beside you




### Attempt the task

Section: practice-plan. Stable action: step-2-brief.

A written record of the attempt as it happened, with every blocked point and every place focus vanished or jumped.

- Complete one full task using only the keyboard.
- Record every point where you could not proceed or lost your place.
- Note anywhere focus disappeared or the order jumped.

**Start here:** Start the task and write the first key you press before you press it. Keep writing as you go.

**Enough:** Somebody else could repeat your attempt from the log, key for key.

**Focus:** Where the keyboard is pointing at this moment. If you cannot see it, you are working blind however well the controls respond.

**Reachable but not operable:** Focus lands on a control and no key does anything useful. It is the failure that looks like success, because tab order seems fine.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Attempting a borrowing task with the mouse away, and nearly recording the wrong failure as the worst one.

**What I found first:** Focus was invisible on the tinted review panel. I wrote it down immediately, because it was annoying and I noticed it at once.

**What I found next:** The date picker took focus and then nothing happened. Arrows did nothing, enter did nothing, typing did nothing. No date could be chosen at all.

**The thing I nearly got wrong:** I had the invisible focus at the top of my list because it was the first thing that irritated me. The date picker is the one that ends the task.

**How I decided:** I asked of each failure whether the task could still finish. Invisible focus is slow and survivable. No date means no booking, ever, by anybody without a pointer.

**What I wrote:** Date picker first, as a total block, with the key table rows beside it. Invisible focus second, as a severe difficulty rather than a block.

**Wrong turn:** The wrong turn is ranking by how irritating each failure was during your own attempt. Irritation tracks how often you met the problem, not whether anybody can finish.

**Trade-off:** Ranking by blocking means the visible, annoying failure waits while the invisible structural one gets fixed first. That will feel wrong to anybody who watched your attempt.

**Unknown:** Still unknown: whether somebody using voice control meets the same wall on the date picker. Voice often maps onto keyboard operation, so it may well, and I have not tested it and am not claiming it.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-2-sort-1.

Six things observed during a made up keyboard-only attempt at a borrowing task. For each one, decide how badly it matters.

Focus lands on the date field. Arrows, typing and enter all do nothing, and there is no other way to set a date.

- a total block
- a severe difficulty
- works as intended

<details>
<summary>After your attempt</summary>

a total block — No date means no booking, by this route, ever. Nothing else on the list outranks a step the task cannot get past.

a severe difficulty — A difficulty implies a slow or unpleasant route to the outcome. There is no route here at all.

works as intended — Focus arriving is not the same as the control working. This is the failure that looks like success in a tab-order check.

Now mark each of your own findings the same way, and let that ranking decide which one you repair in step 4.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-2-sort-2.

Six things observed during a made up keyboard-only attempt at a borrowing task. For each one, decide how badly it matters.

Focus is invisible on the tinted review panel, though every control there still responds to the keyboard.

- a total block
- a severe difficulty
- works as intended

<details>
<summary>After your attempt</summary>

a total block — The task can still be finished, by counting presses and watching what changes. It is horrible and it is possible.

a severe difficulty — Working blind for a whole panel is exhausting and error-prone, and it does not end the task. It ranks below anything that does.

works as intended — Being able to see where you are is part of the control working, not an extra.

Now mark each of your own findings the same way, and let that ranking decide which one you repair in step 4.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-2-sort-3.

Six things observed during a made up keyboard-only attempt at a borrowing task. For each one, decide how badly it matters.

The filter panel takes focus, tab cycles inside it forever, and escape does nothing.

- a total block
- a severe difficulty
- works as intended

<details>
<summary>After your attempt</summary>

a total block — The person cannot even leave and try another way. A trap is the one failure that removes the ability to abandon the attempt.

a severe difficulty — Reloading the page and losing everything entered is not a difficult route to the outcome. It is the absence of one.

works as intended — Cycling within a panel is correct only while there is also a way out.

Now mark each of your own findings the same way, and let that ranking decide which one you repair in step 4.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-2-sort-4.

Six things observed during a made up keyboard-only attempt at a borrowing task. For each one, decide how badly it matters.

Inside the collection-branch group, tab moves to the group and arrows move between the three branches.

- a total block
- a severe difficulty
- works as intended

<details>
<summary>After your attempt</summary>

a total block — Every branch can be reached and chosen. Nothing is prevented.

a severe difficulty — This is the expected pattern for a group of related choices, and it is what your Module 9 key table asks for.

works as intended — One tab stop for the group, arrows within it. Recording the things that work is part of the test, so the table can be marked honestly.

Now mark each of your own findings the same way, and let that ranking decide which one you repair in step 4.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-2-sort-5.

Six things observed during a made up keyboard-only attempt at a borrowing task. For each one, decide how badly it matters.

The remove control appears only on hover, so it never receives focus and cannot be reached at all.

- a total block
- a severe difficulty
- works as intended

<details>
<summary>After your attempt</summary>

a total block — A control that does not exist without a pointer cannot be operated without one. The person cannot correct a mistake.

a severe difficulty — There is no slower route to removal. There is no route.

works as intended — Hover is a pointer event. Anything that exists only on hover is invisible to every other way of using the product.

Now mark each of your own findings the same way, and let that ranking decide which one you repair in step 4.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-2-sort-6.

Six things observed during a made up keyboard-only attempt at a borrowing task. For each one, decide how badly it matters.

After the date panel closes, the next tab goes to the footer instead of back to the date field.

- a total block
- a severe difficulty
- works as intended

<details>
<summary>After your attempt</summary>

a total block — Shift-tab gets the person back, once they work out what happened. The task survives.

a severe difficulty — Losing your place after every panel makes a five-field form exhausting, and people abandon it for that reason. It is still not a block.

works as intended — Focus should return to the control that opened the panel. Landing in the footer is a defect with a clear expected behaviour.

Now mark each of your own findings the same way, and let that ranking decide which one you repair in step 4.

</details>


### What happened, step by step, keys and all

Section: practice-plan. Stable action: write-attempt-log.

Tab, arrows, enter, space, escape. Say which key you pressed and what the screen did.

**Answer:** What happened, step by step, keys and all

Tab, arrows, enter, space, escape. Say which key you pressed and what the screen did.


### Every point where you could not proceed

Section: practice-plan. Stable action: write-blocked-at.

Write your answer for “Every point where you could not proceed”. Use the task instructions below to decide what to include.

**Answer:** Every point where you could not proceed




### Every point where focus vanished or the order jumped

Section: practice-plan. Stable action: write-lost-focus.

Write your answer for “Every point where focus vanished or the order jumped”. Use the task instructions below to decide what to include.

**Answer:** Every point where focus vanished or the order jumped



<details>
<summary>Example</summary>

Example (made up): after closing the date panel, the next tab went to the footer. I could not tell where I was for three presses.

</details>


### Hunt for traps

Section: practice-plan. Stable action: step-3-brief.

Every custom control entered and left on purpose, with anything that captured focus written down.

- Enter every custom control and try to leave it with tab and escape.
- Record anything that captures focus.
- Check dialogues, pickers, menus and embedded content.

**Start here:** Enter your first custom control, then press tab repeatedly and see where focus goes. Then try escape.

**Enough:** Every custom control has two exit routes recorded, including the ones that worked.

**Keyboard trap:** A place you can move into and cannot move out of with the keyboard. It is the worst kind of failure, because the person cannot even leave and try something else.

**Custom control:** Anything built rather than taken from the browser: a date picker, a menu, a slider, a dialogue. Keyboard support usually disappears exactly here.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Hunting for traps in a borrowing product, and finding one only because I stopped testing the happy way round.

**What I did at first:** I entered the filter panel, used it, and left it by pressing the Apply button. Out cleanly, no trap, on to the next control.

**Why that proved nothing:** I left by the route the panel was designed around. A trap is about the routes nobody designed: tab past the end, and escape.

**What happened on the second try:** I entered the panel and pressed tab until I ran out of controls. Focus went back to the first control in the panel and stayed there. Tab could never leave.

**And escape:** Escape did nothing at all. With no pointer, the only way out of that panel was to reload the page and lose everything already entered.

**What I recorded:** A trap, with the two routes tried and the two results, and the expected behaviour from my key table: escape closes and returns focus to the control that opened it.

**Wrong turn:** The wrong turn is leaving each control by its intended exit. Everything passes, because you are testing the path you designed instead of the paths a person actually takes.

**Trade-off:** Trying to leave every control two wrong ways is slow and feels pedantic, and most controls will be fine. The one that is not would have stranded somebody completely.

**Unknown:** Still unknown: whether the panel also traps a screen reader, which has navigation modes of its own. That belongs to the listening lesson, not this one.


### Each custom control you entered, and how you got out

Section: practice-plan. Stable action: write-trap-hunt.

Dialogues, pickers, menus, anything embedded. Try tab first, then escape.

**Answer:** Each custom control you entered, and how you got out

Dialogues, pickers, menus, anything embedded. Try tab first, then escape.


### Anything that captured focus and would not release it

Section: practice-plan. Stable action: write-traps-found.

Write your answer for “Anything that captured focus and would not release it”. Use the task instructions below to decide what to include.

**Answer:** Anything that captured focus and would not release it




### Repair the worst

Section: practice-plan. Stable action: step-4-brief.

The most completely blocking failure repaired against your key table, with what now happens written down.

- Fix the failure that most completely blocks the task.
- Use your key table as the specification for the fix.
- Do not accept a pointer-based workaround as a repair.

**Start here:** Take the failure that ends the task and open the key table row that says what should happen instead.

**Enough:** The repair is specified by a key table row, and no part of it assumes a pointer.

**Total block:** The task cannot be finished by this route at all. It outranks anything slow, confusing or unpleasant.

**Pointer workaround:** Fixing a keyboard failure by suggesting the person use a mouse. It is not a repair; it is a restatement of the barrier.


### Which failure you repaired, and why it was the worst

Section: practice-plan. Stable action: write-repair-chosen.

Worst means most completely stops the task, not most irritating.

**Answer:** Which failure you repaired, and why it was the worst

Worst means most completely stops the task, not most irritating.


### The key table rows you used as the specification for the fix

Section: practice-plan. Stable action: write-repair-spec.

Write your answer for “The key table rows you used as the specification for the fix”. Use the task instructions below to decide what to include.

**Answer:** The key table rows you used as the specification for the fix




### What happens now when you attempt the same point with the keyboard

Section: practice-plan. Stable action: write-repair-result.

Write your answer for “What happens now when you attempt the same point with the keyboard”. Use the task instructions below to decide what to include.

**Answer:** What happens now when you attempt the same point with the keyboard




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Somebody says keyboard-only use is a niche case not worth this much effort. What is the strongest reply?

- It covers people with motor impairments, switch and voice users, many screen-reader users, anyone with a broken trackpad, and it is what other assistive technology is built on.
- Because the standard requires it.
- Because experienced users prefer the keyboard.

<details>
<summary>After your attempt</summary>

It covers people with motor impairments, switch and voice users, many screen-reader users, anyone with a broken trackpad, and it is what other assistive technology is built on. — Voice control commonly maps onto keyboard operation, and screen readers move through the same order. A keyboard failure is rarely only a keyboard failure.

Because the standard requires it. — It does, and a requirement rarely changes anybody’s mind about effort. The reason the requirement exists is the stronger answer.

Because experienced users prefer the keyboard. — Many do, and that is a convenience argument. It invites the reply that convenience can wait.

Improve: Add to your defect list in step 5 which of these groups each failure affects, so severity is arguable from the list itself. Record the change.

Check again: Each defect names who it affects beyond keyboard users.

Answers to revisit: table-results, defect-list, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You could reach the date picker with tab, so tab order is fine there. Is the control accessible?

- Not necessarily. Reachable and operable are separate: focus landing on a control proves nothing about whether any key does anything.
- It is, since the person can get to it and use enter.
- It is, if focus is visible on it.

<details>
<summary>After your attempt</summary>

Not necessarily. Reachable and operable are separate: focus landing on a control proves nothing about whether any key does anything. — This is the failure that looks like success. The tab order passes, focus moves correctly, and the person still cannot choose a date.

It is, since the person can get to it and use enter. — Enter may open it and do nothing inside it. What matters is whether the task can be completed once focus is there.

It is, if focus is visible on it. — Visible focus tells the person where they are. It does not give them a way to act.

Improve: Go back through your attempt log in step 2 and mark every control you reached but could not operate. Record the change in step 5.

Check again: Reachable and operable are marked separately for every control in the log.

Answers to revisit: attempt-log, blocked-at, lost-focus, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The quickest fix for the hover-only remove control is to say people can use the mouse for that one action. Is that acceptable?

- It is not a repair at all. It restates the barrier as an instruction and leaves the task impossible for anybody without a pointer.
- It is acceptable for a secondary action like removal.
- It is acceptable as a note while the fix is scheduled.

<details>
<summary>After your attempt</summary>

It is not a repair at all. It restates the barrier as an instruction and leaves the task impossible for anybody without a pointer. — Every function has to be available without a pointer. A documented workaround that requires the thing the person does not have changes nothing except the tone.

It is acceptable for a secondary action like removal. — Removing an item is how somebody corrects a mistake. Leaving them unable to correct a mistake is not a secondary failure.

It is acceptable as a note while the fix is scheduled. — Written as a note, it stops looking like a defect, and a thing that does not look like a defect does not get scheduled.

Improve: Write that control into your defect list in step 5 with the expected keyboard behaviour from your key table, and record the change.

Check again: No entry in your record accepts a pointer route as a resolution.

Answers to revisit: table-results, defect-list, improvement-made

</details>


### Record against the tables

Section: practice. Stable action: step-5-brief.

Every key table row marked satisfied or failed, and the remaining failures written as defects with expected behaviour.

- Mark each key-table row satisfied or failed.
- List failures as build defects with expected behaviour.
- Save the results and the repair.

**Start here:** Go down your key table row by row and mark each one from what you actually saw, not from what you intended.

**Enough:** Every failure carries the behaviour you expected, taken from the table rather than invented now.

**Defect:** A written statement of what happens, what should happen, and how to reproduce it. Without the middle part a builder has to guess your intention.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Each key table row marked satisfied or failed

Section: practice. Stable action: write-table-results.

Write your answer for “Each key table row marked satisfied or failed”. Use the task instructions below to decide what to include.

**Answer:** Each key table row marked satisfied or failed




### The remaining failures written as defects, each with the expected behaviour

Section: practice. Stable action: write-defect-list.

Expected behaviour comes from your key table, so a builder does not have to guess what you wanted.

**Answer:** The remaining failures written as defects, each with the expected behaviour

Expected behaviour comes from your key table, so a builder does not have to guess what you wanted.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson takes the same keyboard route through your forms.


<details>
<summary>Optional hints and reference material</summary>

- Put the mouse out of reach and try again from the start, writing down each step.
- Go through each custom control and try to enter, operate and leave it. Record which of the three fails.

- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — The patterns for the custom controls you use, read for expected keys and focus behaviour. Purpose: Supplies the specification your repair implements. Free reading, no account. Verified 2026-09-06; the pages carry no date. Guidance rather than a conformance standard, covering semantics and keys only. Fallback: R14.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The keyboard access check. Purpose: Gives the self-runnable procedure for the reachability and focus parts of this test. Free reading, no account. Verified 2026-09-06. Preliminary only; passing is not conformance and is not testing with disabled people. Fallback: R28.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**A full task was attempted with no pointer**

Adequate evidence: A record of a complete keyboard-only attempt, including where it stopped.

0 — Not attempted, or attempted partially.

1 — Attempted with occasional pointer use.

2 — A full attempt with the pointer unavailable, recorded step by step.

3 — As adequate, and a second task was attempted to check the failures generalise.

Repair: Put the mouse out of reach and try again from the start, writing down each step. Recheck: The attempt record.

**Unreachable, unoperable and trapping controls are listed**

Adequate evidence: A categorised list distinguishing the three failure kinds.

0 — Failures described generally.

1 — Listed without distinguishing the kinds.

2 — All three kinds distinguished with specific controls named.

3 — As adequate, and every custom control was explicitly checked for trapping.

Repair: Go through each custom control and try to enter, operate and leave it. Record which of the three fails. Recheck: The categorised list.

**The most blocking failure was repaired properly**

Adequate evidence: A repair implementing the key table, with no pointer-based workaround.

0 — Repair offers a mouse alternative instead.

1 — Repaired partially, leaving the control operable but not conventional.

2 — Repaired to the key table, keyboard-only.

3 — As adequate, and the repair was re-tested with the pointer unavailable.

Repair: Take the m09 key table for that control and implement each row; a workaround does not satisfy the criterion. Recheck: The repair and re-test.

**Key-table rows are marked satisfied or failed**

Adequate evidence: Your m09 tables annotated with results per row and defects named.

0 — Tables not used.

1 — Overall pass or fail without row detail.

2 — Row-level results with defects stated.

3 — As adequate, and untested rows are marked untested rather than assumed.

Repair: Walk each row of the table against the build and mark the result. Recheck: The annotated tables.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson takes the same keyboard route through your forms.

**Review criteria:**

- A full task was attempted with no pointer
- Unreachable, unoperable and trapping controls are listed
- The most blocking failure was repaired properly
- Key-table rows are marked satisfied or failed

<details>
<summary>Reading, video and deeper explanation</summary>

- The criterion is blunt: all functionality available from a keyboard. It is also the one most often failed by otherwise careful products, because keyboard support is invisible to anyone using a pointer and therefore never noticed in review. Testing it takes ten minutes and is the highest-value check in this module.
- Three things must hold together. Reachability: you can get to every control. Visibility: you can see where you are at every step. Order: the sequence follows the visual and logical order rather than the order elements happen to appear. A design failing any one of them fails the task, even if the other two are perfect.
- Keyboard traps are the most serious failure because they end the session. A custom dropdown that captures the arrow keys and never releases focus, a dialogue with no escape, an embedded widget you can enter and not exit: each strands the person entirely. Check every custom control specifically for whether you can leave it.
- Native controls mostly work; custom ones mostly do not, unless someone specified them. That is what your m09 key tables were for, and this lesson is where they meet reality — testing what was built against what you wrote.

[W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/).

</details>

## Lesson 7: Forms that do not exclude

Stable ID: m11-l07-v1. Core.

Forms are where accessibility failures cost money directly: a person who cannot complete the form cannot buy, book or apply.

Bring: Your field table and error messages.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A field table with associated labels, hints and error text
- Grouped fields where several answer one question
- An error summary that links to each problem field
- A statement of what was verified and what remains untested

### Start with a clear task

Section: learn. Stable action: welcome.

Rebuild one form so every field is labelled, grouped and described accessibly, errors are announced and locatable, and nothing depends on placeholder text or colour.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Every field needs a programmatically associated label, not a nearby word.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Group related fields so their shared question is announced with them.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Instructions belong before the field and must be associated with it.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Errors must say what to fix, be reachable, and be announced when they appear.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Do not rely on placeholder text, colour or position to carry meaning.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The booking form was rebuilt. Each field gained an associated label, including the ones whose labels had been visual only. The date fields were grouped under one question, and the group name was announced with them. The phone hint moved under the label and was associated with the field. Errors were rewritten to name the fix, a summary at the top linked to each problem field, and the summary was announced when it appeared. The placeholder text disappeared entirely; nothing in the form now depends on it, and one field was removed because no decision needed it.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and audit

Section: practice-plan. Stable action: step-1-brief.

One form audited field by field for a real label, a hint, an error message and a group.

- Read the assigned sections on labels, grouping, instructions and errors.
- Audit your form against each: label, hint, error, grouping.

**Start here:** List your fields down the page and put four columns beside them before you judge anything.

**Enough:** Every field has four marks, including the ones you are confident about.

**Associated label:** A label joined to its field, so that reaching the field announces the label and tapping the label moves into the field. A word sitting beside a box is not this.

**Standard field:** A plain text box, checkbox or select taken from the browser. It brings keyboard behaviour with it and brings no label, hint, grouping or error text at all.


### Which form you are rebuilding, and how many fields it has

Section: practice-plan. Stable action: write-form-chosen.

Write your answer for “Which form you are rebuilding, and how many fields it has”. Use the task instructions below to decide what to include.

**Answer:** Which form you are rebuilding, and how many fields it has




### For each field: does it have a real label, a hint, an error message, and a group?

Section: practice-plan. Stable action: write-audit-table.

Four marks per field. A word sitting near the box is not a label until something joins the two.

**Answer:** For each field: does it have a real label, a hint, an error message, and a group?

Four marks per field. A word sitting near the box is not a label until something joins the two.

<details>
<summary>Example</summary>

Example (made up): Phone · visual label only · hint inside the placeholder · error says Invalid · not grouped.

</details>


### Associate everything

Section: practice-plan. Stable action: step-2-brief.

Every field with an associated label and hint, related fields grouped under one named question, and no placeholder left carrying meaning.

- Give every field an associated label and hint.
- Group fields that answer one question, and name the group.
- Remove any placeholder that was carrying meaning.

**Start here:** Click each visible label word. If the cursor does not land in the field, the label is not attached.

**Enough:** No meaning in the form now lives in text that disappears when somebody types.

**Group:** Several fields that together answer one question, with the question named once. Without it a person hears three boxes and no idea what they are for.

**Hint:** The extra instruction a person needs before they type: the format, the limit, where to find the number. It belongs before the field and joined to it.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Rebuilding the labels on a tool-library request form, and trusting the field type to do the work.

**What I believed:** The form uses ordinary text boxes and checkboxes rather than anything custom, so I assumed the labelling was already sound.

**What I actually checked:** I clicked each visible label word. On four of the six fields, nothing happened: the word was text sitting above a box, with nothing joining them.

**Why that matters more than it looks:** Somebody moving through the form by keyboard arrives at an unnamed box. The label is on screen, a line above, and it is not attached to anything.

**The one that surprised me:** The three date boxes each had a small label — Day, Month, Year — and nothing anywhere said what date was being asked for. On screen the heading above them made it obvious. Field by field it did not exist.

**What I changed:** Four labels joined to their fields, and the three date boxes put into a group named Date you want to collect the tool.

**Wrong turn:** The wrong turn is treating standard fields as if they carried labelling with them. They carry keyboard behaviour, which is the part people notice, and nothing else.

**Trade-off:** Grouping the date boxes means the group name is announced before each of the three, which is more words than a sighted reader needs. That repetition is the cost of the boxes making sense at all.

**Unknown:** Still unknown: whether the group name reads well when announced, or whether it is too long. That needs the listening lesson and a real build.


### Every field whose label you associated, and what it now says

Section: practice-plan. Stable action: write-labels-fixed.

Write your answer for “Every field whose label you associated, and what it now says”. Use the task instructions below to decide what to include.

**Answer:** Every field whose label you associated, and what it now says




### Fields that answer one question together, and the name of the group

Section: practice-plan. Stable action: write-groups.

Write your answer for “Fields that answer one question together, and the name of the group”. Use the task instructions below to decide what to include.

**Answer:** Fields that answer one question together, and the name of the group



<details>
<summary>Example</summary>

Example (made up): day, month and year answer one question, so they sit in a group named Date of the class.

</details>


### Every placeholder that was carrying meaning, and where that meaning went

Section: practice-plan. Stable action: write-placeholders-removed.

A placeholder disappears as soon as somebody types. Anything it was telling them has to move to a label or a hint.

**Answer:** Every placeholder that was carrying meaning, and where that meaning went

A placeholder disappears as soon as somebody types. Anything it was telling them has to move to a label or a hint.


### Rebuild the errors

Section: practice-plan. Stable action: step-3-brief.

Each error rewritten to name the fix, a summary at the top linking to each problem field, and a stated announcement behaviour.

- Rewrite each error to name the fix.
- Add a summary at the top that links to each problem field.
- Specify that the summary is announced when it appears.

**Start here:** Take your worst error message and ask what the person types next. If you cannot answer, the message does not name a fix.

**Enough:** No message reports only that something is wrong, and none of them points at a colour or a position.

**Error summary:** A short list at the top of the form naming what went wrong, where each line takes the person to the field concerned.

**Announced:** The new message is spoken, rather than silently appearing. A message nobody is told about is a message for sighted readers only.


### Try the distinction · 1 of 7

Section: practice-plan. Stable action: step-3-sort-1.

Six error messages from a made up tool-library form. For each one, decide what it does for the person reading it.

Invalid input.

- names the fix
- describes the failure only
- blames the person

<details>
<summary>After your attempt</summary>

names the fix — Nothing here says what to change or what would be accepted. The person is told only that something is wrong.

describes the failure only — It states that a rule was broken, without saying which rule. This is the commonest error message there is.

blames the person — It is impersonal rather than accusing. Useless, and not unkind.

Now rewrite each of your own error messages so it names the fix, and check none of them points at a colour.

</details>


### Try the distinction · 2 of 7

Section: practice-plan. Stable action: step-3-sort-2.

Six error messages from a made up tool-library form. For each one, decide what it does for the person reading it.

The collection date must be today or later.

- names the fix
- describes the failure only
- blames the person

<details>
<summary>After your attempt</summary>

names the fix — The person knows what to type next. Naming the rule and naming the fix are the same act here.

describes the failure only — It goes further than that: the rule is stated in a form the person can act on immediately.

blames the person — It describes the field rather than the person, which is the whole difference.

Now rewrite each of your own error messages so it names the fix, and check none of them points at a colour.

</details>


### Try the distinction · 3 of 7

Section: practice-plan. Stable action: step-3-sort-3.

Six error messages from a made up tool-library form. For each one, decide what it does for the person reading it.

You did not fill this in correctly.

- names the fix
- describes the failure only
- blames the person

<details>
<summary>After your attempt</summary>

names the fix — Correctly is doing no work. The person still does not know what correct would be.

describes the failure only — It describes the person rather than the field, which is the extra thing it does.

blames the person — You is the word to notice. It adds no information and makes a form feel like an accusation.

Now rewrite each of your own error messages so it names the fix, and check none of them points at a colour.

</details>


### Try the distinction · 4 of 7

Section: practice-plan. Stable action: step-3-sort-4.

Six error messages from a made up tool-library form. For each one, decide what it does for the person reading it.

Enter the phone number as ten digits, with no spaces.

- names the fix
- describes the failure only
- blames the person

<details>
<summary>After your attempt</summary>

names the fix — Format, length and what to leave out. The person can act without guessing.

describes the failure only — It does not describe a failure at all. It states what to do.

blames the person — Nothing in it is about the person.

Now rewrite each of your own error messages so it names the fix, and check none of them points at a colour.

</details>


### Try the distinction · 5 of 7

Section: practice-plan. Stable action: step-3-sort-5.

Six error messages from a made up tool-library form. For each one, decide what it does for the person reading it.

Please complete the fields marked in red.

- names the fix
- describes the failure only
- blames the person

<details>
<summary>After your attempt</summary>

names the fix — It names a location that is unavailable to a good many readers, so for them it names nothing at all.

describes the failure only — It says something is missing, and points at it by colour, which is exactly what the previous lesson ruled out.

blames the person — It is polite. Politeness is not the same as being usable.

Now rewrite each of your own error messages so it names the fix, and check none of them points at a colour.

</details>


### Try the distinction · 6 of 7

Section: practice-plan. Stable action: step-3-sort-6.

Six error messages from a made up tool-library form. For each one, decide what it does for the person reading it.

Something went wrong. Please try again.

- names the fix
- describes the failure only
- blames the person

<details>
<summary>After your attempt</summary>

names the fix — Try again is an instruction to repeat the thing that just failed, so it is not a fix.

describes the failure only — It reports that a failure happened and nothing about it. The person has no way to do anything different.

blames the person — It carefully blames nobody, which is its only virtue.

Now rewrite each of your own error messages so it names the fix, and check none of them points at a colour.

</details>


### Try the distinction · 7 of 7

Section: practice-plan. Stable action: step-3-sort-7.

Six error messages from a made up tool-library form. For each one, decide what it does for the person reading it.

The notes field holds 200 characters. You have used 340.

- names the fix
- describes the failure only
- blames the person

<details>
<summary>After your attempt</summary>

names the fix — The limit and the current figure together tell the person exactly how much to remove.

describes the failure only — It would be, if it stopped at the limit. The second number is what makes it actionable.

blames the person — You appears and is doing real work here: it reports a count rather than a judgement.

Now rewrite each of your own error messages so it names the fix, and check none of them points at a colour.

</details>


### Each error message, rewritten to name the fix

Section: practice-plan. Stable action: write-error-rewrites.

Write your answer for “Each error message, rewritten to name the fix”. Use the task instructions below to decide what to include.

**Answer:** Each error message, rewritten to name the fix



<details>
<summary>Example</summary>

Example (made up): Invalid date became The class date must be today or later.

</details>


### What the summary at the top says, and what each line links to

Section: practice-plan. Stable action: write-error-summary.

Write your answer for “What the summary at the top says, and what each line links to”. Use the task instructions below to decide what to include.

**Answer:** What the summary at the top says, and what each line links to




### When the summary is announced, and what happens to focus

Section: practice-plan. Stable action: write-error-announce.

Somebody who cannot see the top of the form has to be told the summary appeared, not left to find it.

**Answer:** When the summary is announced, and what happens to focus

Somebody who cannot see the top of the form has to be told the summary appeared, not left to find it.


### Test what you can

Section: practice-plan. Stable action: step-4-brief.

A tab through the form, errors triggered deliberately, and a named list of what you could not verify without a build.

- Tab through the form and confirm labels and hints are reachable in order.
- Trigger errors and check the summary and links behave.
- Record anything you cannot verify without a build.

**Start here:** Submit the form with one required field empty, and watch what happens before reading any of your own notes.

**Enough:** Your untested list names specific behaviours rather than saying testing is incomplete.

**Specified but untested:** Something written down as required behaviour that nobody has yet seen working. It is honest and it is not evidence.

**Triggering an error:** Submitting bad input on purpose. Forms are almost always tested by people who fill them in correctly, which is why error paths stay broken.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Testing the rebuilt tool-library form, and writing the word tested against something I had only specified.

**What I could actually do:** Tab through the form in order, confirm each label reached me before its box, submit with an empty required field, and see the summary appear at the top.

**What I wrote at first:** “Errors announced and locatable — tested.” It was in the specification, the summary appeared, and it felt like the same thing.

**What I had not done:** Listened. I had seen the summary appear on screen. Whether anybody is told it appeared is a different behaviour, and I had no way to check it that day.

**What I wrote instead:** Two lines. Tested: tab order, label association, summary appears and its links move focus to the right field. Untested: whether the summary is announced when it appears.

**What that changed later:** The untested line went straight into the handover as a question for the build, instead of being discovered months later by somebody who could not find the errors.

**Wrong turn:** The wrong turn is letting seeing stand in for the behaviour you specified. The summary appearing on screen is exactly what a sighted check can confirm, and the criterion is about the person who is not looking at the screen.

**Trade-off:** Splitting the line into tested and untested makes your record look less finished than your colleagues’ records. It is the difference between a specification and a claim.

**Unknown:** Still unknown: whether the summary is announced at all in a real build. That is the next lesson’s work, and this lesson records it as open rather than guessing.


### What you found tabbing through the form, in order

Section: practice-plan. Stable action: write-tab-result.

Write your answer for “What you found tabbing through the form, in order”. Use the task instructions below to decide what to include.

**Answer:** What you found tabbing through the form, in order




### What happened when you triggered errors on purpose

Section: practice-plan. Stable action: write-error-test.

Write your answer for “What happened when you triggered errors on purpose”. Use the task instructions below to decide what to include.

**Answer:** What happened when you triggered errors on purpose




### What you could not check without a real build, named one by one

Section: practice-plan. Stable action: write-untested.

Announcement behaviour is the usual one. Write it down rather than assuming it works.

**Answer:** What you could not check without a real build, named one by one

Announcement behaviour is the usual one. Write it down rather than assuming it works.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your form uses ordinary browser fields rather than anything custom. Does that make it accessible?

- It supplies keyboard behaviour and nothing else. Labels, grouping, hints and error association are decisions somebody has to make, and by default nobody has.
- Largely, yes, since standard fields are built to be accessible.
- It does, as long as the visual labels are clear.

<details>
<summary>After your attempt</summary>

It supplies keyboard behaviour and nothing else. Labels, grouping, hints and error association are decisions somebody has to make, and by default nobody has. — Standard fields are a good starting point precisely because the keyboard part comes free. Everything this lesson is about has to be added deliberately.

Largely, yes, since standard fields are built to be accessible. — They are built to behave correctly once they are labelled. An unlabelled standard text box is an unnamed box that tabs nicely.

It does, as long as the visual labels are clear. — Visual clarity helps the reader who can see the layout. A label has to be joined to its field for anybody else.

Improve: Go back to your audit in step 1 and click each visible label word. Mark every field where nothing happens, then fix them in step 2 and record the change in step 5.

Check again: Every field in the table has a label that is joined to it, not merely near it.

Answers to revisit: form-chosen, audit-table, labels-fixed, groups, placeholders-removed, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You darkened the placeholder text so it passes contrast, and it now carries the format hint clearly. Is the form fixed?

- It is not. The hint vanishes the moment somebody types, so it is gone exactly when they are trying to follow it.
- It is, since the hint is readable now.
- It is, provided the hint is short.

<details>
<summary>After your attempt</summary>

It is not. The hint vanishes the moment somebody types, so it is gone exactly when they are trying to follow it. — Contrast was the measurable half of the problem. A placeholder is an instruction that removes itself on use, and no colour change alters that.

It is, since the hint is readable now. — It is readable right up to the first keystroke. Anybody who pauses mid-entry, or comes back to check, has nothing to read.

It is, provided the hint is short. — Length changes nothing about when it disappears. Short instructions vanish just as completely.

Improve: Move that hint to an associated line under the label in step 2, and record what moved where. Note the change in step 5.

Check again: No instruction in the form lives only in a placeholder.

Answers to revisit: labels-fixed, groups, placeholders-removed, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your error summary appears at the top of the form when submission fails, and you saw it appear. Can you write that errors are announced?

- It cannot be written. You confirmed it appears on screen, which is a different behaviour from anybody being told it appeared.
- It can, because appearing is what announcing means.
- It can, since you specified the announcement.

<details>
<summary>After your attempt</summary>

It cannot be written. You confirmed it appears on screen, which is a different behaviour from anybody being told it appeared. — Appearing and being announced are two different things, and only one of them is visible to a sighted check. The honest record splits the line in two.

It can, because appearing is what announcing means. — For a person looking at the top of the form, the two coincide. For everybody else, the message can appear in silence.

It can, since you specified the announcement. — Specifying it is what makes it likely to get built. It is not evidence that it works.

Improve: Split that line in your untested list in step 4 into what you saw and what nobody has heard, then record the change in step 5.

Check again: Nothing in your record claims announcement behaviour you could not check.

Answers to revisit: tab-result, error-test, untested, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

The Module 8 field table updated, and one sentence separating what you verified from what is specified and untested.

- Update the field table with associations and error text.
- List the untested behaviour explicitly.
- Save the table and the test notes.

**Start here:** Open your field table and add three columns: label, hint, error text.

**Enough:** Somebody could build the form from the table alone, and would know which behaviours nobody has seen working.

**Field table:** The per-field record from Module 8. Labels, hints and error text belong in it, so an engineer builds from one source rather than from three screenshots.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### What changed in your Module 8 field table

Section: practice. Stable action: write-field-table.

Write your answer for “What changed in your Module 8 field table”. Use the task instructions below to decide what to include.

**Answer:** What changed in your Module 8 field table




### One sentence separating what you verified from what is specified and untested

Section: practice. Stable action: write-verified-boundary.

Write your answer for “One sentence separating what you verified from what is specified and untested”. Use the task instructions below to decide what to include.

**Answer:** One sentence separating what you verified from what is specified and untested




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson writes the words that stand in for every image on these screens.


<details>
<summary>Optional hints and reference material</summary>

- List each field and write how its label and hint are associated. Anything ambiguous will be built ambiguously.
- Find every place several fields answer one question and specify the group and its name.

- R14: [W3C: forms tutorial](https://www.w3.org/WAI/tutorials/forms/) — Labels, grouping controls, instructions, validating input and user notifications. Purpose: Supplies every requirement this lesson applies to the form. Free reading, no account. Verified 2026-09-06. It covers form accessibility rather than form content or persuasion; implemented behaviour still needs testing in a build. Fallback: R10.
- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — The criteria on labels, instructions, error identification and error suggestion at level A and AA. Purpose: Names the criteria your rebuilt form is meeting so the mapping stays traceable. Free reading, no account. Verified 2026-09-06. An index of the standard; reading it is not conformance. Fallback: R41.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Every field has an associated label and hint**

Adequate evidence: A field table specifying the association for each label and hint, with no meaning left in placeholders.

0 — Visual labels only, or placeholders used as labels.

1 — Labels associated but hints left unassociated.

2 — Both associated for every field.

3 — As adequate, and a field was removed because it served no decision.

Repair: List each field and write how its label and hint are associated. Anything ambiguous will be built ambiguously. Recheck: The field table.

**Related fields are grouped and the group is named**

Adequate evidence: Groups specified for multi-field questions with the shared question named.

0 — No grouping.

1 — Visual grouping only.

2 — Groups specified with names.

3 — As adequate, and the group name is the question rather than a section label.

Repair: Find every place several fields answer one question and specify the group and its name. Recheck: The grouping specification.

**Errors name fixes and a summary links to each field**

Adequate evidence: Rewritten errors plus a linked summary with announcement behaviour specified.

0 — Errors describe the problem only.

1 — Fixes named but no linked summary.

2 — Fixes, summary links and announcement all specified.

3 — As adequate, and the specification says what happens when several fields fail at once.

Repair: Rewrite each error as the action to take, then add the summary and its links. Recheck: The error specification.

**Untested behaviour is recorded rather than assumed**

Adequate evidence: A list of what was checked in a build and what could not be.

0 — Behaviour claimed without testing.

1 — Testing implied without a list.

2 — Verified and unverified items both listed.

3 — As adequate, and the list names which untested item is most likely to fail.

Repair: Split your claims into two lists: observed in a build, and specified but untested. Recheck: The two lists.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson writes the words that stand in for every image on these screens.

**Review criteria:**

- Every field has an associated label and hint
- Related fields are grouped and the group is named
- Errors name fixes and a summary links to each field
- Untested behaviour is recorded rather than assumed

<details>
<summary>Reading, video and deeper explanation</summary>

- A label has to be associated with its field, not merely near it. Visually adjacent text is not a label to a screen reader, which is why a form that looks perfectly clear can announce a series of unlabelled edit fields. The assigned tutorial covers the association explicitly, and it is the single most common failure in forms.
- Grouping matters when several fields answer one question — a date split into three, a set of radio options, an address block. Without a group, each field is announced alone and the question they belong to is lost. With one, the person hears the question then the options, which is how the form reads visually.
- Instructions must be associated too. A hint sitting above a field is read at the wrong time, or not at all, unless it is tied to the field. That association is what makes the m08 rule — help before the mistake — work for people who are not reading the layout.
- Errors have three obligations here: name the fix, be reachable directly from a summary, and be announced when they appear rather than silently inserted. This is the same wording you already wrote; the difference is that this lesson makes it reach people who are not looking at the screen.

[W3C: forms tutorial](https://www.w3.org/WAI/tutorials/forms/).

</details>

## Lesson 8: Images, icons and the words that replace them

Stable ID: m11-l08-v1. Core.

Alternative text is writing, not markup. Written badly it is noise; written well it is the only version of the image some people get.

Bring: Your screens with their images and icons.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Every image classified informative, decorative or functional
- Alt text written for informative and functional images
- Empty alt specified for decorative images
- Any text inside images identified and moved out

### Start with a clear task

Section: learn. Stable action: welcome.

Write alternative text for every image and icon in your design, deciding for each whether it carries information, is decorative, or is itself a control.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Three kinds: informative, decorative, and functional — each handled differently.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Informative alt text carries the information, not a description of the picture.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Decorative images take empty alt text so they are skipped, not announced.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

An icon that is a control takes the name of the action, not the shape.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Text in an image is invisible to search, translation and screen readers.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Fourteen images and icons were classified. Two were informative: the class photograph, whose alt text became “Six people at a pottery wheel in a bright studio”, and the availability chart, whose alternative text carried the counts. Nine were decorative and took empty alt text, including the background pattern that had previously been announced. Three were functional: the shortlist heart became “Add to shortlist”, the logo became “Home”, and the filter icon became “Filters”. One promotional image had the price set inside it; the text was moved out of the image entirely rather than duplicated in alt text.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Inventory and classify

Section: practice-plan. Stable action: step-1-brief.

Every image, icon and illustration listed and classified as informative, decorative or functional, with any text inside an image marked.

- List every image, icon and illustration in your screens.
- Classify each informative, decorative or functional.
- Mark any image containing text.

**Start here:** Go screen by screen and list every image before you classify any of them.

**Enough:** Every image has exactly one of the three marks, including backgrounds and logos.

**Informative:** The image tells the reader something they cannot get elsewhere on the screen. The words have to carry that something.

**Decorative:** The image adds atmosphere and no information. It is marked so it is skipped silently, which is a decision rather than a lapse.

**Functional:** The image is the control. What matters is not what it looks like but what pressing it does.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Classifying the images on a tool-library screen, and describing everything because describing felt thorough.

**What I did first:** I wrote alt text for all fourteen images. Every one got a careful sentence, including the paper-texture background and the small divider flourish.

**What that produced:** Read aloud, the screen opened with a description of a paper texture, then a decorative rule, then finally the name of the tool. Three sentences of nothing before the content.

**What I had confused:** Effort with usefulness. Describing decoration is more work than skipping it, and every word of it is in the reader’s way.

**The question I used instead:** If this image vanished, would the reader have lost anything? Paper texture: no. Divider: no. Photograph of the drill in use: yes, it shows the size against a hand.

**What I ended with:** Two informative, nine decorative and marked to be skipped, three functional. The screen now reads as its content rather than as an inventory of its graphics.

**Wrong turn:** The wrong turn is describing everything, because it looks like the thorough option and it is the one most guidance appears to ask for. Every unnecessary description is noise the reader cannot skip.

**Trade-off:** Marking nine images to be skipped means a reader is never told the page has a photograph of a workshop. That is the right trade, and it is a real loss of atmosphere.

**Unknown:** Still unknown: whether the drill photograph is doing what I think. I believe it conveys scale; nobody has told me that, and the alt text I wrote assumes it.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-1-sort-1.

Six images from a made up tool-library screen. For each one, decide which of the three kinds it is.

A photograph of the cordless drill being held, which is the only thing showing how big it is.

- informative
- decorative
- functional

<details>
<summary>After your attempt</summary>

informative — The scale is available nowhere else on the screen, so the words have to carry it. That is what makes it informative rather than illustrative.

decorative — It would be, if the dimensions were written out beside it. They are not, so removing it loses something.

functional — Nothing happens when you press it. It is not a control.

Now classify your own images. Anything you hesitate over, ask what the reader loses if it disappears.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-1-sort-2.

Six images from a made up tool-library screen. For each one, decide which of the three kinds it is.

A pale paper texture behind the whole page.

- informative
- decorative
- functional

<details>
<summary>After your attempt</summary>

informative — Nobody needs to know the background has a texture in order to borrow a drill.

decorative — It is marked so it is skipped in silence. Describing it puts a sentence of nothing in front of the content.

functional — It does nothing when pressed and leads nowhere.

Now classify your own images. Anything you hesitate over, ask what the reader loses if it disappears.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-1-sort-3.

Six images from a made up tool-library screen. For each one, decide which of the three kinds it is.

A heart outline in the corner of each card, which saves the item to a list.

- informative
- decorative
- functional

<details>
<summary>After your attempt</summary>

informative — The shape itself tells the reader nothing worth knowing. What it does is the whole point.

decorative — Skipping it would leave the person unable to find the save control at all.

functional — The words become the action rather than the picture: Add to shortlist, not Heart icon.

Now classify your own images. Anything you hesitate over, ask what the reader loses if it disappears.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-1-sort-4.

Six images from a made up tool-library screen. For each one, decide which of the three kinds it is.

The library logo in the top corner, which takes you to the home page when pressed.

- informative
- decorative
- functional

<details>
<summary>After your attempt</summary>

informative — The look of the logo is not information anybody needs to act on.

decorative — It is a control, so skipping it removes the way back to the start.

functional — It takes the name of its destination. Home is more use to the reader than Northside Tool Library logo.

Now classify your own images. Anything you hesitate over, ask what the reader loses if it disappears.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-1-sort-5.

Six images from a made up tool-library screen. For each one, decide which of the three kinds it is.

A small chart showing how many of each tool are available this week.

- informative
- decorative
- functional

<details>
<summary>After your attempt</summary>

informative — The counts are the information. Words describing the shape of the bars would leave the reader knowing nothing they can use.

decorative — The numbers exist nowhere else on the screen, so skipping it removes them.

functional — Nothing happens when it is pressed.

Now classify your own images. Anything you hesitate over, ask what the reader loses if it disappears.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-1-sort-6.

Six images from a made up tool-library screen. For each one, decide which of the three kinds it is.

A promotional banner image with the words Free for members this month set inside the picture.

- informative
- decorative
- functional

<details>
<summary>After your attempt</summary>

informative — It carries a sentence, so it is informative by default. The better answer is to take the words out of the image entirely, and until that happens the alt text has to reproduce them in full.

decorative — Marking it decorative would delete the offer for anybody not looking at the picture.

functional — It may well be a link too, in which case it needs a destination as well. The text inside it is the problem this lesson is about.

Now classify your own images. Anything you hesitate over, ask what the reader loses if it disappears.

</details>


### Every image, icon and illustration on your screens

Section: practice-plan. Stable action: write-image-list.

Include background patterns, logos, arrows in buttons and anything inside a chart.

**Answer:** Every image, icon and illustration on your screens

Include background patterns, logos, arrows in buttons and anything inside a chart.


### For each one: informative, decorative, or functional

Section: practice-plan. Stable action: write-classification.

Write your answer for “For each one: informative, decorative, or functional”. Use the task instructions below to decide what to include.

**Answer:** For each one: informative, decorative, or functional



<details>
<summary>Example</summary>

Example (made up): class photograph · informative. Background pattern · decorative. Shortlist heart · functional.

</details>


### Any image with words inside it

Section: practice-plan. Stable action: write-text-in-images.

Text inside a picture cannot be searched, translated, enlarged or read aloud.

**Answer:** Any image with words inside it

Text inside a picture cannot be searched, translated, enlarged or read aloud.


### Write the informative alt text

Section: practice-plan. Stable action: step-2-brief.

Alt text for each informative image carrying what it tells the reader, and charts carried as information rather than description.

- Write what the image tells the reader, not what it looks like.
- Keep it as short as the information allows.
- Never start with image of or picture of.

**Start here:** For your first informative image, write what a reader would need to know if it were missing. That is the alt text.

**Enough:** No line begins with image of or picture of, and no chart is described by its shape.

**Alt text:** The words that stand in for an image. For some readers it is not a summary of the image; it is the image.

**Describing the picture:** Writing what it looks like rather than what it tells you. A common and well-meant way of producing something nobody can use.


### For each informative image: the alt text you wrote

Section: practice-plan. Stable action: write-alt-informative.

Write what it tells the reader, not what it looks like. Never begin with image of.

**Answer:** For each informative image: the alt text you wrote

Write what it tells the reader, not what it looks like. Never begin with image of.

<details>
<summary>Example</summary>

Example (made up): Six people at a pottery wheel in a bright studio.

</details>


### For any chart or diagram: how the information is carried in words

Section: practice-plan. Stable action: write-chart-alt.

A chart usually needs the numbers, not a description of the shape of the line.

**Answer:** For any chart or diagram: how the information is carried in words

A chart usually needs the numbers, not a description of the shape of the line.


### Name the functional ones

Section: practice-plan. Stable action: step-3-brief.

Each icon control announcing its action or destination, matching the labels you already wrote in Module 8.

- Give each icon control the name of its action or destination.
- Match the wording to your m08 action labels.

**Start here:** Take each icon and finish the sentence: pressing this does …. That sentence is the name.

**Enough:** No control is named after its shape, and every name matches your Module 8 label.

**Action name:** What pressing it does: Add to shortlist, Filters, Home. It is the only thing about a control the reader needs.

**Two names for one thing:** An icon announced as one word while the panel it opens is titled another. It makes a product feel unreliable to anybody who cannot see they are the same control.


### For each icon control: the action or destination it now announces

Section: practice-plan. Stable action: write-alt-functional.

Write your answer for “For each icon control: the action or destination it now announces”. Use the task instructions below to decide what to include.

**Answer:** For each icon control: the action or destination it now announces



<details>
<summary>Example</summary>

Example (made up): heart icon · Add to shortlist. Logo · Home. Funnel icon · Filters.

</details>


### How each one matches the action labels you wrote in Module 8

Section: practice-plan. Stable action: write-label-match.

If the icon says Filters and the panel says Refine, somebody hears two names for one thing.

**Answer:** How each one matches the action labels you wrote in Module 8

If the icon says Filters and the panel says Refine, somebody hears two names for one thing.


### Handle decoration and embedded text

Section: practice-plan. Stable action: step-4-brief.

Decorative images marked to be skipped, text moved out of images where it could move, and anything that could not move reproduced in full with its reason.

- Specify empty alt text for decorative images.
- Move any text out of images into real text.
- Where it cannot move, reproduce it fully in the alt text and record why.

**Start here:** List the decorative images first, then go back to the ones with words in them.

**Enough:** Every image with words in it has either been changed or has its full text written out with a reason.

**Skipped:** Marked so it is passed over silently. It is the correct handling for decoration, and it needs to be specified rather than left to chance.

**Text in an image:** Words set inside a picture. They cannot be searched, translated, enlarged with the rest of the text, or read aloud, so they are invisible four different ways.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Handling a promotional banner on a tool-library page, and solving it in the wrong place.

**What the banner was:** A picture of a workshop with Free for members this month set across it in large type.

**What I did first:** I wrote the sentence into the alt text. The words were now available to a screen reader, and I marked the row done.

**What was still broken:** Somebody enlarging their text got the banner at its original size, with the offer unchanged and now smaller than everything around it. Somebody translating the page got an English banner on a Hindi page. Nobody searching the site could find the offer.

**Where the fix belonged:** The words came out of the image and became real text beside it. The picture stayed as decoration and was marked to be skipped.

**What I kept from the first attempt:** One image genuinely could not change: a photograph of a printed safety notice on the workshop wall. Its full text went into the alt text, with a line saying why it stayed.

**Wrong turn:** The wrong turn is fixing text in an image with alt text. It closes the one failure you were thinking about and leaves three others open, and it looks complete from the outside.

**Trade-off:** Taking the words out of the picture usually means the banner no longer looks the way it was designed. The layout changes; the offer becomes findable.

**Unknown:** Still unknown: whether the photographed safety notice is legible enough to transcribe with confidence. I transcribed what I could read and said so rather than paraphrasing it.


### The images you are marking as decorative, so they are skipped rather than announced

Section: practice-plan. Stable action: write-decorative-list.

Write your answer for “The images you are marking as decorative, so they are skipped rather than announced”. Use the task instructions below to decide what to include.

**Answer:** The images you are marking as decorative, so they are skipped rather than announced




### Text you took out of an image and put into real text

Section: practice-plan. Stable action: write-text-moved.

Write your answer for “Text you took out of an image and put into real text”. Use the task instructions below to decide what to include.

**Answer:** Text you took out of an image and put into real text




### Any text that could not move, reproduced in full, with the reason it stayed

Section: practice-plan. Stable action: write-text-stuck.

Write your answer for “Any text that could not move, reproduced in full, with the reason it stayed”. Use the task instructions below to decide what to include.

**Answer:** Any text that could not move, reproduced in full, with the reason it stayed




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Somebody tells you every image needs alt text describing it. What is wrong with that rule?

- Every image needs a decision. Decorative images are marked to be skipped, and describing them puts words in the reader’s way.
- Nothing — it is safer to describe too much than too little.
- It is right for photographs and wrong for icons.

<details>
<summary>After your attempt</summary>

Every image needs a decision. Decorative images are marked to be skipped, and describing them puts words in the reader’s way. — Describing a background texture and a divider before the content is more work and a worse experience. The rule to follow is a decision per image, not a description per image.

Nothing — it is safer to describe too much than too little. — It is not safer for the reader, who cannot skip what you wrote. Noise makes the useful alt text harder to find.

It is right for photographs and wrong for icons. — The split is not by kind of graphic. A photograph can be pure decoration and an icon can carry the only meaning on the card.

Improve: Look at your classification in step 1 and move anything that adds no information into the decorative list in step 4. Record the change in step 5.

Check again: Nothing marked informative would be unmissed if it vanished.

Answers to revisit: image-list, classification, text-in-images, decorative-list, text-moved, text-stuck, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The shortlist icon is a heart. What should its alt text say?

- Add to shortlist — what pressing it does, matching the label you wrote in Module 8.
- Heart icon, so the person knows what is on screen.
- Save, since that is shorter and clearer.

<details>
<summary>After your attempt</summary>

Add to shortlist — what pressing it does, matching the label you wrote in Module 8. — For a control, the shape is irrelevant and the action is everything. Matching the Module 8 wording stops the same control having two names.

Heart icon, so the person knows what is on screen. — Knowing a heart is there tells the reader nothing about what it does, and they cannot see the visual convention that makes it obvious to you.

Save, since that is shorter and clearer. — Shorter is good and a second name is not. If the panel says shortlist, this control says shortlist.

Improve: Check each functional alt text in step 3 against your Module 8 action labels and fix any mismatch. Record the change in step 5.

Check again: Every icon control announces an action, and the words match the rest of the product.

Answers to revisit: alt-functional, label-match, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A promotional image has the price set inside the picture, and you have put the price into the alt text. Is that finished?

- It is not. Text inside an image cannot be searched, translated or enlarged, and alt text fixes only the fourth of those.
- It is, since the information is now available to a screen reader.
- It is, provided the alt text is an exact copy.

<details>
<summary>After your attempt</summary>

It is not. Text inside an image cannot be searched, translated or enlarged, and alt text fixes only the fourth of those. — The real repair is to take the words out of the image and make them real text. Alt text is the fallback for the rare case where the words genuinely cannot move.

It is, since the information is now available to a screen reader. — One of four failures is closed. Somebody enlarging their text still gets an unchanged banner, and nobody can search for the offer.

It is, provided the alt text is an exact copy. — An exact copy is the right thing to write when the text cannot move. It does not make the text findable, translatable or resizable.

Improve: Move that text out of the image in step 4, or write down the reason it cannot move and reproduce it in full. Record the change in step 5.

Check again: Every image with words in it has either changed or carries a written reason it could not.

Answers to revisit: decorative-list, text-moved, text-stuck, improvement-made

</details>


### Test by removal

Section: practice. Stable action: step-5-brief.

The screen read through with every image replaced by its words, and whatever that reading changed.

- Read the screen with every image replaced by its alt text.
- Check nothing essential disappeared and nothing noisy appeared.
- Save the classification and the alt text.

**Start here:** Read the whole screen aloud, substituting your alt text wherever an image sits.

**Enough:** You noted both kinds of problem, not only the missing information.

**The removal test:** Reading the screen with each image replaced by its alt text. It is the only way to hear both faults at once: something missing, and something pointless.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### What the screen reads like with every image replaced by its alt text

Section: practice. Stable action: write-removal-read.

Read it aloud. You are listening for two things: something missing, and something pointless.

**Answer:** What the screen reads like with every image replaced by its alt text

Read it aloud. You are listening for two things: something missing, and something pointless.


### What you changed afterwards

Section: practice. Stable action: write-removal-changes.

Write your answer for “What you changed afterwards”. Use the task instructions below to decide what to include.

**Answer:** What you changed afterwards




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson looks at anything that moves, plays or expires.


<details>
<summary>Optional hints and reference material</summary>

- List everything visual and ask what each adds. If nothing, it is decorative; if it acts, it is functional.
- For each image, write what a reader would lose without it, then make that the alt text.

- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The alternative text check. Purpose: Gives the self-runnable check and the classification this lesson applies. Free reading, no account. Verified 2026-09-06. Preliminary only; it does not teach how to write good alternative text, which is the work here. Fallback: R28.
- R10: [W3C: page structure](https://www.w3.org/WAI/tutorials/page-structure/) — The passages on how images relate to surrounding content and headings. Purpose: Places images in the page structure so alt text does not duplicate nearby text. Free reading, no account. Verified 2026-09-06. Structural semantics rather than content writing. Fallback: R14.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Every image is classified into one of the three kinds**

Adequate evidence: A complete inventory with a classification per item, including icons.

0 — No classification.

1 — Images classified but icons ignored.

2 — Everything classified including icons and illustrations.

3 — As adequate, and one image is reclassified after asking what it actually tells the reader.

Repair: List everything visual and ask what each adds. If nothing, it is decorative; if it acts, it is functional. Recheck: The classified inventory.

**Informative alt text carries information, not appearance**

Adequate evidence: Alt text stating what the image tells the reader, with no image-of prefixes.

0 — Descriptions of appearance or filenames.

1 — Some informative text mixed with descriptions.

2 — All informative images carry their information in words.

3 — As adequate, and one alt text is shorter than the original description because the surrounding text already carried part of it.

Repair: For each image, write what a reader would lose without it, then make that the alt text. Recheck: The alt text list.

**Functional images are named by action**

Adequate evidence: Icon controls named by their action or destination, consistent with your action labels.

0 — Icons named by shape.

1 — Some named by action.

2 — All functional images named by action or destination.

3 — As adequate, and the names match the visible labels used elsewhere for the same actions.

Repair: Rename each icon control after what it does, using the same words as your m08 labels. Recheck: The functional names.

**Text inside images is identified and moved out**

Adequate evidence: A list of images containing text, with the text moved into real text or fully reproduced with a reason.

0 — Embedded text unnoticed.

1 — Identified but left with partial alt text.

2 — Moved out, or fully reproduced with the reason recorded.

3 — As adequate, and the decision references the reflow and translation cost.

Repair: Find every image containing words and move those words into text; reproduce them only where the image cannot change. Recheck: The embedded-text list.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson looks at anything that moves, plays or expires.

**Review criteria:**

- Every image is classified into one of the three kinds
- Informative alt text carries information, not appearance
- Functional images are named by action
- Text inside images is identified and moved out

<details>
<summary>Reading, video and deeper explanation</summary>

- The first decision is what the image is for. An informative image adds something the surrounding text does not: a photograph showing what a class involves, a diagram carrying a relationship. Its alternative text must carry that same information in words, which is usually shorter than people expect and never begins with “image of”.
- Decorative images add mood and no information, and announcing them wastes the reader's time. They take empty alternative text so assistive technology skips them entirely. The mistake is describing them helpfully, which produces a screen reader announcing “abstract green background pattern” between the price and the button.
- A functional image is a control: an icon button, a logo linking home. Its alternative text is the action or destination — “Remove from shortlist”, “Home” — never the shape. This is the same rule as your m08 action labels: the person needs the outcome, not the picture.
- Text baked into an image is invisible to screen readers, to translation, to search and to anyone who enlarges it. Prices, dates and offers set inside a promotional image are the common case, and the alternative text has to reproduce all of it — which is usually the argument for not putting the text in the image at all.

[W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/).

</details>

## Lesson 9: Motion, media and time limits

Stable ID: m11-l09-v1. Core.

Automatic movement, missing captions and unannounced timeouts each exclude people completely rather than inconveniencing them.

Bring: Your m09 motion work and any timed or media elements.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- An audit of automatic motion with a pause or removal decision
- Captions or a transcript specified for any media
- Time limits with warning, extension and preservation
- A confirmation that nothing flashes rapidly

### Start with a clear task

Section: learn. Stable action: welcome.

Audit your design for motion that plays without asking, media without alternatives, and time limits people cannot control, and specify a fix for each.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Anything moving for more than a few seconds needs a way to pause or stop it.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Nothing should flash rapidly; it can trigger seizures.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Video and audio need captions or a transcript, and both are writing work.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Time limits need warning, extension, or removal.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Reduced motion is a request from the person, not a preference to override.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Three problems and three fixes. The class carousel rotated every four seconds with no pause; it was replaced with a static set of three cards, which also removed a motion problem for reduced-motion users. The introductory video had automatic captions that rendered the studio name as three different things; they were corrected by hand and a transcript was published beside the video. The held-place timer expired silently after ten minutes, losing the form; it now warns at two minutes, offers an extension, and preserves entered details either way. Nothing in the product flashes.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Audit automatic motion

Section: practice-plan. Stable action: step-1-brief.

Everything that moves without being started, each either removed or given a keyboard-reachable pause control.

- List everything that moves without the person starting it.
- For each, decide: remove, or provide a visible pause control.
- Check the pause is keyboard reachable.

**Start here:** Sit on each screen for thirty seconds without touching anything and write down what moves.

**Enough:** Every moving thing has a decision, and each decision says removed or names a control somebody can reach without a pointer.

**Automatic motion:** Movement the person did not start and cannot predict. Anything lasting more than a few seconds needs a way to stop it.

**Pause control:** A visible, reachable way to stop the movement. Hidden until hover, or pointer-only, and it is not one.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Fixing an automatic carousel on a tool-library home page, and managing the problem instead of removing it.

**What was there:** Three featured tools rotating every four seconds, with small dots underneath. Nobody had asked for it; it had come with the template.

**What I did first:** Added a pause button. That satisfies the criterion, and it took twenty minutes.

**What I noticed afterwards:** The pause button is a control somebody has to find, understand and press before they can read a sentence. For anybody who reads slowly, the first four seconds are already lost.

**The question I had not asked:** What is the carousel for? Three tools, shown one at a time, on a page with room for three. It existed because the template had one.

**What I did instead:** Removed it. Three static cards, all visible, no motion, no pause control, no dots, and a shorter page.

**Wrong turn:** The wrong turn is adding a control to manage motion nobody wanted. It passes the criterion, it adds a thing to learn, and it keeps a feature that was never earning its place.

**Trade-off:** Removing the carousel means only three tools can be featured instead of an unbounded list. That is a real constraint, and it is a content decision rather than an accessibility one.

**Unknown:** Still unknown: whether anybody ever looked at the second and third slides. Nothing here measured it, and the argument for removal does not depend on it.


### Everything that starts moving without the person starting it

Section: practice-plan. Stable action: write-motion-list.

Carousels, auto-advancing banners, looping animations, background video, anything that repeats.

**Answer:** Everything that starts moving without the person starting it

Carousels, auto-advancing banners, looping animations, background video, anything that repeats.


### For each one: removed, or given a visible pause control

Section: practice-plan. Stable action: write-motion-decision.

Write your answer for “For each one: removed, or given a visible pause control”. Use the task instructions below to decide what to include.

**Answer:** For each one: removed, or given a visible pause control



<details>
<summary>Example</summary>

Example (made up): the class carousel rotated every four seconds. Replaced with three static cards, which removed the motion problem rather than managing it.

</details>


### For each pause control: how somebody reaches it with a keyboard

Section: practice-plan. Stable action: write-pause-reachable.

A pause control that needs a pointer leaves the person with a pointer problem instead of a motion problem.

**Answer:** For each pause control: how somebody reaches it with a keyboard

A pause control that needs a pointer leaves the person with a pointer problem instead of a motion problem.


### Handle media

Section: practice-plan. Stable action: step-2-brief.

Any audio or video listed with captions, a transcript and a named person to write them, or the information carried as text instead.

- List any audio or video in your product.
- Specify captions and a transcript, and who will write them.
- If neither is possible, provide the information in text instead.

**Start here:** List your media first. If the list is empty, write none and go to the next step.

**Enough:** Every media item names a person who will write the text, or says plainly that nobody has been found yet.

**Captions:** The spoken words, timed to the video, including who is speaking and sounds that matter. They serve deaf readers, noisy rooms and anyone watching without sound.

**Transcript:** The whole content as text, readable without playing anything. It is also the version that can be searched, translated and skimmed.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-2-sort-1.

Six situations from a made up tool-library product. For each one, decide what the honest handling is.

A two-minute safety video on using the bench saw, where everything important is spoken aloud.

- captions are enough
- a transcript is needed too
- this cannot be fixed with captions at all

<details>
<summary>After your attempt</summary>

captions are enough — Captions cover the person watching. Somebody who wants to check one instruction before switching the saw on has to watch two minutes to find it.

a transcript is needed too — Safety instructions are referred back to. A transcript makes them searchable, skimmable and printable, which captions cannot do.

this cannot be fixed with captions at all — The content is spoken, so captions carry it well. The gap is about finding one part again.

Now decide the handling for your own media, and name who writes each piece of text. If you have none, write none and move on.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-2-sort-2.

Six situations from a made up tool-library product. For each one, decide what the honest handling is.

A video whose automatic captions render the library name as three different things and turn 16 millimetres into 60.

- captions are enough
- a transcript is needed too
- this cannot be fixed with captions at all

<details>
<summary>After your attempt</summary>

captions are enough — These captions exist and are wrong in ways that change the meaning. Wrong measurements in a workshop are worse than none.

a transcript is needed too — A transcript made from the same automatic text carries the same errors forward.

this cannot be fixed with captions at all — Not with these captions. Somebody has to correct them by hand, which is the work this lesson is asking you to name and assign.

Now decide the handling for your own media, and name who writes each piece of text. If you have none, write none and move on.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-2-sort-3.

Six situations from a made up tool-library product. For each one, decide what the honest handling is.

A silent thirty-second clip showing how to release the chuck, with no narration at all.

- captions are enough
- a transcript is needed too
- this cannot be fixed with captions at all

<details>
<summary>After your attempt</summary>

captions are enough — There is nothing to caption. Captions carry speech, and this clip has none.

a transcript is needed too — A transcript of silence is empty. What is needed is a written description of what the hands do.

this cannot be fixed with captions at all — Visual-only content needs a written description of the actions, which is a different piece of writing from captions.

Now decide the handling for your own media, and name who writes each piece of text. If you have none, write none and move on.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-2-sort-4.

Six situations from a made up tool-library product. For each one, decide what the honest handling is.

A fifteen-second clip of workshop sounds behind the home page, carrying no information.

- captions are enough
- a transcript is needed too
- this cannot be fixed with captions at all

<details>
<summary>After your attempt</summary>

captions are enough — Nothing is being said and nothing is being conveyed, so a short note that it is ambient sound is the whole obligation. Being able to turn it off matters more.

a transcript is needed too — There is no content to transcribe.

this cannot be fixed with captions at all — There is nothing here that needs fixing beyond letting people stop it.

Now decide the handling for your own media, and name who writes each piece of text. If you have none, write none and move on.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-2-sort-5.

Six situations from a made up tool-library product. For each one, decide what the honest handling is.

A four-minute interview with a member describing how they used the library, spoken throughout.

- captions are enough
- a transcript is needed too
- this cannot be fixed with captions at all

<details>
<summary>After your attempt</summary>

captions are enough — Captions serve somebody watching it through. Four minutes is long enough that many people would rather read it in one.

a transcript is needed too — Long spoken content is the clearest case for both: captions for watching, a transcript for reading, searching and quoting.

this cannot be fixed with captions at all — The speech carries everything, so captions do work here.

Now decide the handling for your own media, and name who writes each piece of text. If you have none, write none and move on.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-2-sort-6.

Six situations from a made up tool-library product. For each one, decide what the honest handling is.

A product with no audio or video anywhere in it.

- captions are enough
- a transcript is needed too
- this cannot be fixed with captions at all

<details>
<summary>After your attempt</summary>

captions are enough — The honest answer is that this step is already complete, and writing none is a finished answer rather than a gap.

a transcript is needed too — There is nothing to transcribe. Inventing work here would not help anybody.

this cannot be fixed with captions at all — Nothing is broken. Not every lesson has something to repair in every product.

Now decide the handling for your own media, and name who writes each piece of text. If you have none, write none and move on.

</details>


### Any audio or video in your product

Section: practice-plan. Stable action: write-media-list.

Write none if there is none. That is a complete answer to this step.

**Answer:** Any audio or video in your product

Write none if there is none. That is a complete answer to this step.


### For each one: captions, a transcript, and who writes them

Section: practice-plan. Stable action: write-captions-plan.

Write your answer for “For each one: captions, a transcript, and who writes them”. Use the task instructions below to decide what to include.

**Answer:** For each one: captions, a transcript, and who writes them




### If neither is possible: how the information appears as text instead

Section: practice-plan. Stable action: write-media-alternative.

Write your answer for “If neither is possible: how the information appears as text instead”. Use the task instructions below to decide what to include.

**Answer:** If neither is possible: how the information appears as text instead




### Find the time limits

Section: practice-plan. Stable action: step-3-brief.

Every time limit listed with a warning, an extension where possible, and what happens to anything already typed.

- List every timeout: held places, sessions, codes, forms.
- Specify a warning before expiry and an extension where possible.
- Specify that entered data survives expiry.

**Start here:** List everything in your product that expires, including the ones that came with a platform rather than from you.

**Enough:** Each limit says what warning appears, how long before, and what survives the expiry.

**Time limit:** Anything that expires: a held place, a session, a verification code, a form that clears itself. Each one assumes a speed somebody may not have.

**Preservation:** Keeping what the person already typed when a limit runs out. Losing it turns a delay into starting again, which is where people give up.


### Every time limit: held places, sessions, codes, forms, anything that expires

Section: practice-plan. Stable action: write-timeout-list.

Write your answer for “Every time limit: held places, sessions, codes, forms, anything that expires”. Use the task instructions below to decide what to include.

**Answer:** Every time limit: held places, sessions, codes, forms, anything that expires




### For each one: the warning, the extension, and what happens to what was typed

Section: practice-plan. Stable action: write-timeout-fix.

Write your answer for “For each one: the warning, the extension, and what happens to what was typed”. Use the task instructions below to decide what to include.

**Answer:** For each one: the warning, the extension, and what happens to what was typed



<details>
<summary>Example</summary>

Example (made up): the held place expired silently at ten minutes and cleared the form. It now warns at two minutes, offers one extension, and keeps the entries either way.

</details>


### Check flashing and reduced motion

Section: practice-plan. Stable action: step-4-brief.

A check for rapid flashing, and a statement of what your design does when somebody has asked for reduced motion.

- Confirm nothing flashes more than a couple of times per second.
- Re-check your reduced-motion pairs still cover everything here.
- Test with the reduced-motion setting enabled.

**Start here:** Check your Module 9 pairs and mark any transition that has no reduced version.

**Enough:** No motion is exempt because you judged it small, and the flashing line says what you actually checked.

**Rapid flashing:** Repeated flashes several times a second over a large area. It can trigger seizures, which makes it the one item here where the consequence is physical.

**Reduced motion:** A setting the person has already chosen on their own device. Your design reads it and follows it; it is a request, not a suggestion.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Handling reduced motion on a tool-library product, and treating a request as a preference.

**What my Module 9 pairs said:** Every transition had a reduced version. The sliding panel became a fade, the page change became an instant swap.

**The one I kept:** The confirmation animation. A tick that draws itself over half a second, which people liked, and which I argued was too small and too short to trouble anybody.

**Why that argument was mine to lose:** The person had already told their own device they did not want motion. My judgement that this particular motion is harmless is a judgement about somebody else’s body, made without them.

**What I did:** Gave it a reduced version too: the tick appears complete, with no drawing. The confirmation still reads as a confirmation.

**What I noticed while doing it:** It took four minutes. The reason I had kept it was that I liked it, and the reasoning had arrived afterwards.

**Wrong turn:** The wrong turn is deciding, case by case, which motion is small enough to keep. It sounds like careful judgement and it overrides a setting the person has already made.

**Trade-off:** Honouring the request everywhere means the reduced-motion version of the product is noticeably plainer, and some of the care you put into the transitions is invisible to those readers.

**Unknown:** Still unknown: whether the half-second tick would have bothered anybody. Not knowing is the reason to follow the setting rather than a reason to keep it.


### What you checked for rapid flashing, and what you found

Section: practice-plan. Stable action: write-flash-check.

Rapid flashing can trigger seizures. This is the one item in the module where the consequence is physical harm.

**Answer:** What you checked for rapid flashing, and what you found

Rapid flashing can trigger seizures. This is the one item in the module where the consequence is physical harm.


### What your design does when somebody has asked for reduced motion

Section: practice-plan. Stable action: write-reduced-motion.

Bring your Module 9 reduced-motion pairs. A request from the person is not a preference to override.

**Answer:** What your design does when somebody has asked for reduced motion

Bring your Module 9 reduced-motion pairs. A request from the person is not a preference to override.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your video is hosted on a platform that generates captions automatically. Is the captioning handled?

- It is not. Automatic captions are frequently wrong with names, numbers and accents, and somebody has to check them.
- It is, since automatic captions have become very accurate.
- It is, as long as viewers can report errors.

<details>
<summary>After your attempt</summary>

It is not. Automatic captions are frequently wrong with names, numbers and accents, and somebody has to check them. — Wrong captions are worse than missing ones, because everybody assumes the work has been done. If the video carries information, correcting them is a task with a name against it.

It is, since automatic captions have become very accurate. — They are good on clear speech in common accents. Names, measurements and technical words are exactly where they fail, and those are usually what matters.

It is, as long as viewers can report errors. — That asks the people least able to check the captions to proofread them. The errors are invisible to the reader who depends on them.

Improve: Name the person who will correct the captions in step 2, or write that nobody has been found. Record the change in step 5.

Check again: No media item is marked complete on the strength of automatic captions.

Answers to revisit: media-list, captions-plan, media-alternative, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your carousel now has a pause button, so it meets the criterion. Is there a better answer?

- Often, yes: removing motion nobody asked for beats adding a control to manage it.
- No, a pause control is what the criterion asks for.
- No, because removing it loses content.

<details>
<summary>After your attempt</summary>

Often, yes: removing motion nobody asked for beats adding a control to manage it. — A pause control is a thing to find, understand and press before the reading can start. If the carousel exists because the template had one, removing it solves the problem and shortens the page.

No, a pause control is what the criterion asks for. — It is what the criterion accepts. The criterion is a floor, and meeting it is not the same as having made the right decision.

No, because removing it loses content. — It loses the ability to feature an unbounded list. Whether that matters is a content decision worth making deliberately rather than inheriting.

Improve: For each moving thing in step 1, write why it exists. Anything you cannot answer is a candidate for removal; record the change in step 5.

Check again: Every remaining automatic motion has a stated reason for existing.

Answers to revisit: motion-list, motion-decision, pause-reachable, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

One animation is small and brief, and you judge it harmless, so you keep it when reduced motion is requested. Is that reasonable?

- It is not. The person has already told their device what they need, and this is a judgement about their body made without them.
- It is, provided the animation is genuinely brief.
- It is, if most people prefer keeping it.

<details>
<summary>After your attempt</summary>

It is not. The person has already told their device what they need, and this is a judgement about their body made without them. — Reduced motion is a request, not a preference to be weighed against your design. Case-by-case exemptions sound careful and rebuild the problem one animation at a time.

It is, provided the animation is genuinely brief. — Brevity is measured by you, on your screen, with your vestibular system. It is the one part of this judgement you cannot make.

It is, if most people prefer keeping it. — Most people have not asked for reduced motion. The setting exists for the people who have.

Improve: Give that animation a reduced version in step 4 and record what it now does. Note the change in step 5.

Check again: No motion in your design is exempt from the reduced-motion setting.

Answers to revisit: flash-check, reduced-motion, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

The fixes written out, and anything specified but not yet seen working named as untested.

- Write the decisions and who is responsible for captions.
- Note anything you could not fix and why.
- Save the audit with the fixes.

**Start here:** Write each fix as what it was and what it is now, in one line.

**Enough:** Somebody reading the summary could tell which fixes exist and which are still descriptions.

**Specified but untested:** Written down as required behaviour that nobody has seen working. It belongs in the handover as a question rather than in the record as a result.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### The three or four fixes, each naming what changed

Section: practice. Stable action: write-fix-summary.

Write your answer for “The three or four fixes, each naming what changed”. Use the task instructions below to decide what to include.

**Answer:** The three or four fixes, each naming what changed




### Anything specified that nobody has yet seen working

Section: practice. Stable action: write-motion-untested.

Write your answer for “Anything specified that nobody has yet seen working”. Use the task instructions below to decide what to include.

**Answer:** Anything specified that nobody has yet seen working




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson listens to the screens you have been looking at.


<details>
<summary>Optional hints and reference material</summary>

- List everything that moves on its own and decide each; a carousel with no pause is the usual offender.
- Watch the video with the captions on and correct every error; names and numbers first.

- R64: [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — The reduce value and where the setting lives on each platform. Purpose: Lets you test the reduced-motion behaviour on your own device. Free reading, no account. Verified 2026-09-06; page last modified 10 June 2026. It documents the signal only, and says nothing about media, captions or time limits. Fallback: R13.
- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — The criteria on pause, stop and hide, on flashing, on captions, and on timing adjustable. Purpose: Names the specific requirements this lesson satisfies. Free reading, no account. Verified 2026-09-06. An index of the standard; captions and transcripts remain content work it does not teach. Fallback: R41.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Automatic motion is removed or pausable**

Adequate evidence: A list of moving elements with a decision each, and a keyboard-reachable pause where kept.

0 — Automatic motion left uncontrolled.

1 — Pause added but only reachable by pointer.

2 — Each element removed or given a keyboard-reachable pause.

3 — As adequate, and one element was removed because it explained nothing.

Repair: List everything that moves on its own and decide each; a carousel with no pause is the usual offender. Recheck: The motion decisions.

**Media has checked captions or a transcript**

Adequate evidence: Captions corrected by a person, or a transcript, or the information provided as text instead.

0 — Media published with no alternative.

1 — Automatic captions accepted unchecked.

2 — Captions checked or a transcript written, with ownership named.

3 — As adequate, and the transcript is offered as an alternative route rather than a fallback.

Repair: Watch the video with the captions on and correct every error; names and numbers first. Recheck: The captions or transcript.

**Time limits warn, extend and preserve**

Adequate evidence: Each timeout specified with warning timing, extension and data preservation.

0 — Silent expiry.

1 — Warning specified without extension or preservation.

2 — All three specified for every timeout.

3 — As adequate, and the specification says what happens if the person is away when the warning appears.

Repair: List every timer in the product and write the three behaviours for each. Recheck: The timeout specifications.

**Flashing and reduced motion are both confirmed**

Adequate evidence: A statement that nothing flashes rapidly and a re-check of reduced-motion coverage.

0 — Neither checked.

1 — One checked.

2 — Both checked and recorded.

3 — As adequate, and the reduced-motion test was run on a device with the setting enabled.

Repair: Enable reduced motion, walk the product, and separately confirm nothing flashes. Recheck: The two confirmations.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson listens to the screens you have been looking at.

**Review criteria:**

- Automatic motion is removed or pausable
- Media has checked captions or a transcript
- Time limits warn, extend and preserve
- Flashing and reduced motion are both confirmed

<details>
<summary>Reading, video and deeper explanation</summary>

- Automatically moving content — a carousel, an animated banner, a live-updating region — competes for attention and, for some people, prevents reading entirely. If it moves for more than a few seconds it needs a pause control, and the pause has to be reachable by keyboard and visible without hovering. This is one of the least-implemented requirements in ordinary products.
- Rapid flashing is the one accessibility failure that can cause direct physical harm. If your design contains anything that flashes more than a couple of times a second — a loading effect, a video transition, an alert — it should not, and no visual justification outweighs that.
- Captions and transcripts are content work, not a technical step. Captions serve deaf and hard-of-hearing people, and also everyone in a noisy room or without headphones; a transcript additionally serves people who prefer to read, who want to search the content, or whose connection cannot carry the video. If you cannot produce them, the honest response is not to publish the media as the only route to the information.
- Time limits appear in more places than teams remember: a held place, a session timeout, a code that expires, a form that clears. Each needs warning before it expires, a way to extend where possible, and preservation of what the person had entered. This is your m07 payment work meeting the criterion that says so explicitly.

[MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).

</details>

## Lesson 10: Listening to your own product

Stable ID: m11-l10-v1. Core.

Reading about screen readers teaches you the concepts. Hearing your own product teaches you what your decisions actually produced.

Bring: Your structure, alt text and form specifications.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- One task attempted with a screen reader, recorded
- A list of what was announced and what was missing
- Each failure mapped to the design decision behind it
- A statement of what your session does and does not establish

### Start with a clear task

Section: learn. Stable action: welcome.

Run one task with the screen reader already on your device, record what was announced and what was missing, and state plainly what your own session does and does not establish.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Every major platform ships a screen reader: NVDA, VoiceOver or TalkBack.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Learn five commands, not fifty: next heading, next link, next form field, read all, stop.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Listen for what is missing: unlabelled fields, unannounced changes, silent images.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

You are a sighted occasional user; your session is preliminary, not representative.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Nothing here substitutes for testing with people who use these tools daily.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Twenty minutes with VoiceOver on the researcher's own phone. Navigating by heading confirmed the m06 outline worked. Six failures were found: the shortlist icon was announced as “button”, the availability dot was silent so full classes sounded identical to available ones, applying a filter announced nothing at all, the error summary was not announced when it appeared, one image was read as its filename, and the date group's question was not announced with its fields. Each mapped to a decision made earlier in the course. The write-up recorded the device, the software, the twenty minutes, and stated that no person who uses a screen reader daily had been involved.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and set up

Section: practice-plan. Stable action: step-1-brief.

The screen reader on your own device running, five commands learned, and whatever went wrong on the way written down.

- Read the assigned article, including what an occasional tester cannot conclude.
- Turn on the screen reader for your platform and learn five commands.

**Start here:** Turn it on, then immediately find the command that stops it talking. Knowing how to stop makes the rest bearable.

**Enough:** You can move by heading and stop the speech without looking anything up.

**Screen reader:** Software that speaks what is on screen and lets somebody move through it by structure. Every major platform ships one: NVDA on Windows, VoiceOver on Apple, TalkBack on Android.

**Five commands:** Next heading, next link, next form field, read all, stop. Learning these five is enough for this lesson; trying to learn the whole set is how people abandon it.


### Which screen reader, on which device, and how you turned it on

Section: practice-plan. Stable action: write-reader-used.

Write your answer for “Which screen reader, on which device, and how you turned it on”. Use the task instructions below to decide what to include.

**Answer:** Which screen reader, on which device, and how you turned it on



<details>
<summary>Example</summary>

Example (made up): VoiceOver on my own iPhone, turned on in Settings under Accessibility.

</details>


### The five commands you learned, written out

Section: practice-plan. Stable action: write-five-commands.

Next heading, next link, next form field, read all, stop. Five is enough; fifty is a reason to give up.

**Answer:** The five commands you learned, written out

Next heading, next link, next form field, read all, stop. Five is enough; fifty is a reason to give up.


### Anything that went wrong getting started, and how you got past it

Section: practice-plan. Stable action: write-setup-trouble.

The first ten minutes are usually the hardest part. Writing them down helps the next person, including you.

**Answer:** Anything that went wrong getting started, and how you got past it

The first ten minutes are usually the hardest part. Writing them down helps the next person, including you.


### Navigate by structure

Section: practice-plan. Stable action: step-2-brief.

What you heard moving by heading, link and form field, compared against the outline you wrote earlier in the module.

- Move by heading through one screen and note what you hear.
- Move by link and by form field.
- Compare with your written outline.

**Start here:** Move heading to heading through one screen and write each one down as you hear it, before comparing with anything.

**Enough:** You wrote what you actually heard, including the places where it matched your outline exactly.

**Navigating by structure:** Jumping from heading to heading rather than listening to everything. It is how people actually use these tools, and it is why the outline work in lesson 3 mattered.

**Link list:** Moving link to link, hearing only their text. Read this way, three links all called Read more are three identical links.


### What you heard moving heading to heading, in order

Section: practice-plan. Stable action: write-by-heading.

Write your answer for “What you heard moving heading to heading, in order”. Use the task instructions below to decide what to include.

**Answer:** What you heard moving heading to heading, in order




### What you heard moving by link and by form field

Section: practice-plan. Stable action: write-by-link-field.

Write your answer for “What you heard moving by link and by form field”. Use the task instructions below to decide what to include.

**Answer:** What you heard moving by link and by form field




### Where what you heard differed from the outline you wrote in lesson 3

Section: practice-plan. Stable action: write-outline-compare.

Write your answer for “Where what you heard differed from the outline you wrote in lesson 3”. Use the task instructions below to decide what to include.

**Answer:** Where what you heard differed from the outline you wrote in lesson 3




### Attempt the task

Section: practice-plan. Stable action: step-3-brief.

One full task attempted by listening, with every silence and every piece of noise recorded.

- Complete one full task listening rather than looking where you can.
- Record every silence where something happened.
- Record anything announced that was noise.

**Start here:** Turn the screen brightness down as far as it goes, then start the task.

**Enough:** Your log contains at least one silence, because almost every product has one.

**Silence:** Something changed on screen and nothing was said. It is the failure that is hardest to notice, because nothing draws attention to it.

**Noise:** Something announced that helps nobody: a filename, a decorative image, the same label twice. It makes the useful announcements harder to find.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Listening to a tool-library product, and hearing what I expected instead of what was said.

**What I did at first:** I kept the screen in front of me and listened while I worked. It went smoothly and I found two small problems in ten minutes.

**Why it went so smoothly:** I was reading the screen and hearing the speech at the same time. Where the speech was incomplete, my eyes filled the gap without my noticing.

**What I changed:** I turned the screen brightness to nothing and did the task again from the speech alone.

**What that found:** Applying a filter changed the entire list and said nothing. With the screen visible I had seen the list change and assumed I had heard it. Blind to the screen, I had no idea anything had happened at all.

**The second one:** Full and available classes sounded identical, because availability was a coloured dot with nothing to say. I had fixed that on paper in an earlier lesson and never in this build.

**Wrong turn:** The wrong turn is listening with the screen visible. Your eyes complete every announcement, so the product sounds far better than it is and the silences are invisible.

**Trade-off:** Working from speech alone in a design you built is slow and frustrating, and you will still know where things are from memory. It is the closest you can honestly get.

**Unknown:** Still unknown: how much my knowing the design flattered the result even so. Somebody meeting it for the first time, by ear, would meet things I walked past.


### What happened as you went, announcement by announcement

Section: practice-plan. Stable action: write-task-log.

Write your answer for “What happened as you went, announcement by announcement”. Use the task instructions below to decide what to include.

**Answer:** What happened as you went, announcement by announcement




### Every place something happened and nothing was said

Section: practice-plan. Stable action: write-silences.

Write your answer for “Every place something happened and nothing was said”. Use the task instructions below to decide what to include.

**Answer:** Every place something happened and nothing was said



<details>
<summary>Example</summary>

Example (made up): applying a filter changed the whole list and announced nothing at all. I only knew because I looked.

</details>


### Every place something was announced that was not worth saying

Section: practice-plan. Stable action: write-noise.

Filenames, the word button on its own, a decorative image being described, a label read twice.

**Answer:** Every place something was announced that was not worth saying

Filenames, the word button on its own, a decorative image being described, a label read twice.


### Map failures to decisions

Section: practice-plan. Stable action: step-4-brief.

Each failure traced back to the decision that caused it, and marked as missing from the specification or missing from the build.

- For each failure, name the earlier decision that caused it.
- Mark which are specification failures and which are build defects.

**Start here:** Take your first failure and ask whether your own documents say what should have happened.

**Enough:** Every finding carries a mark, and the ones that worked are recorded too.

**Specification failure:** You never said what should happen, so nobody built it. The repair is yours.

**Build defect:** You said what should happen and it was not done. The repair belongs with whoever builds it, and needs a written expected behaviour.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six findings from a made up screen-reader session on a tool-library product. For each one, decide where the repair belongs.

The shortlist icon is announced only as button. Your alt-text table says it should announce Add to shortlist.

- a specification failure
- a build defect
- neither — it works

<details>
<summary>After your attempt</summary>

a specification failure — You wrote it down in the previous lesson, so the decision exists.

a build defect — The intended behaviour is specified and absent from the build. It goes to whoever builds it, with the expected wording quoted.

neither — it works — Button on its own tells the person nothing about what pressing it will do.

Now mark each of your own findings the same way, and keep the ones that work.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six findings from a made up screen-reader session on a tool-library product. For each one, decide where the repair belongs.

Applying a filter replaces the whole list and announces nothing. Nothing anywhere in your specification says what should be announced.

- a specification failure
- a build defect
- neither — it works

<details>
<summary>After your attempt</summary>

a specification failure — Nobody could build this, because nobody was told what should happen. Writing the announcement is your work before it is anybody else’s.

a build defect — A builder cannot be at fault for not implementing something that was never written down.

neither — it works — A list silently becoming a different list leaves the person with no idea their action did anything.

Now mark each of your own findings the same way, and keep the ones that work.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six findings from a made up screen-reader session on a tool-library product. For each one, decide where the repair belongs.

Moving by heading gives exactly the outline you wrote in lesson 3, in the same order.

- a specification failure
- a build defect
- neither — it works

<details>
<summary>After your attempt</summary>

a specification failure — It was specified and the specification was right.

a build defect — It was built correctly, which is worth recording so the table can be marked honestly.

neither — it works — Recording what works is part of the session. A finding list with no successes in it is not a record of what happened.

Now mark each of your own findings the same way, and keep the ones that work.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six findings from a made up screen-reader session on a tool-library product. For each one, decide where the repair belongs.

One image is read out as its filename, and your table marks that image as decorative.

- a specification failure
- a build defect
- neither — it works

<details>
<summary>After your attempt</summary>

a specification failure — The decision was made: skip it. The table says so.

a build defect — A decorative image announcing a filename means the empty alt text was not applied. The specification is right and the build is not.

neither — it works — A filename read aloud is noise in front of the content.

Now mark each of your own findings the same way, and keep the ones that work.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six findings from a made up screen-reader session on a tool-library product. For each one, decide where the repair belongs.

The three date fields are announced as Day, Month and Year with no mention of what date is being asked for. Your field table has no group named.

- a specification failure
- a build defect
- neither — it works

<details>
<summary>After your attempt</summary>

a specification failure — You noticed this in the forms lesson and fixed it in one place. If the group name is missing from the table, there is nothing for anybody to build.

a build defect — Nothing was left unbuilt; nothing was asked for.

neither — it works — Three boxes with no shared question is exactly the failure the forms lesson was about.

Now mark each of your own findings the same way, and keep the ones that work.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six findings from a made up screen-reader session on a tool-library product. For each one, decide where the repair belongs.

The error summary appears and is not announced. Your specification says it should be announced when it appears.

- a specification failure
- a build defect
- neither — it works

<details>
<summary>After your attempt</summary>

a specification failure — You wrote this behaviour down in the forms lesson, and you also recorded it as untested. Now you have tested it.

a build defect — Specified, untested at the time, and now confirmed missing. This is exactly what the untested list was for.

neither — it works — The summary appearing silently is the failure the previous lesson predicted.

Now mark each of your own findings the same way, and keep the ones that work.

</details>


### For each failure: the earlier decision that caused it

Section: practice-plan. Stable action: write-failure-map.

Write your answer for “For each failure: the earlier decision that caused it”. Use the task instructions below to decide what to include.

**Answer:** For each failure: the earlier decision that caused it



<details>
<summary>Example</summary>

Example (made up): the dot was silent because availability was carried by colour, which I decided in Module 8 and repaired in lesson 5 on paper but not in this build.

</details>


### For each failure: is it missing from your specification, or missing from the build?

Section: practice-plan. Stable action: write-spec-or-build.

The two go to different people. Mixing them means neither gets fixed.

**Answer:** For each failure: is it missing from your specification, or missing from the build?

The two go to different people. Mixing them means neither gets fixed.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You ran a screen-reader session and found six failures. Can you write that the product works for blind users?

- It cannot be written. You found six real failures, and a sighted person who designed the product is not simulating anyone’s daily experience.
- It can, since the failures found were real and have been fixed.
- It can, provided you note the session was short.

<details>
<summary>After your attempt</summary>

It cannot be written. You found six real failures, and a sighted person who designed the product is not simulating anyone’s daily experience. — The findings are genuine and worth acting on. What the session cannot do is tell you how somebody who uses these tools every day would fare, because fluency, habits and settings all differ.

It can, since the failures found were real and have been fixed. — Fixing what you found removes those six. It says nothing about what a competent daily user would meet in the first two minutes.

It can, provided you note the session was short. — Length is the smallest of the differences. Seeing the screen and knowing the design matter far more than the twenty minutes.

Improve: Put both differences into your boundary statement in step 5: that you can see the screen, and that you designed it. Record the change.

Check again: Your boundary names sight and familiarity, not only duration.

Answers to revisit: session-record, boundary-statement, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Listening with the screen still visible, the product sounded almost fine. What was happening?

- Your eyes were completing every incomplete announcement, so the silences never registered.
- The product is largely fine and the failures are minor.
- Screen readers announce most things automatically.

<details>
<summary>After your attempt</summary>

Your eyes were completing every incomplete announcement, so the silences never registered. — A list that changes silently is obvious when you can see it change. Working from the speech alone is what makes a silence audible as a silence.

The product is largely fine and the failures are minor. — Possibly, and you have no way to tell yet. The test that would show you was not the one you ran.

Screen readers announce most things automatically. — They announce what the page gives them. Where nothing is provided, there is nothing to announce, and that is exactly the case your eyes covered up.

Improve: Redo one part of the task in step 3 with the screen brightness at its lowest, and add what that finds. Record the change in step 5.

Check again: At least part of your log comes from speech alone.

Answers to revisit: task-log, silences, noise, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The shortlist icon announces only “button”. Where does the repair belong?

- With the build, since your alt-text table already says it should announce Add to shortlist.
- With you, since the announcement is wrong.
- Nowhere yet — it needs investigating first.

<details>
<summary>After your attempt</summary>

With the build, since your alt-text table already says it should announce Add to shortlist. — The decision exists and was not applied. It goes to whoever builds it with the expected wording quoted, rather than being rewritten as though it were new.

With you, since the announcement is wrong. — It would be yours if nothing said what should happen. Your table already does, which is why this is a defect rather than a gap.

Nowhere yet — it needs investigating first. — The investigation is done: you know what it says and what it should say. That is a complete defect report.

Improve: Mark every finding in step 4 as specification or build, and check each one against your own earlier documents before deciding. Record the change in step 5.

Check again: No finding is marked a specification failure while your own table already specifies it.

Answers to revisit: failure-map, spec-or-build, improvement-made

</details>


### Write the boundary

Section: practice. Stable action: step-5-brief.

The device, software, version and duration recorded, and a written statement of what your session cannot establish.

- Record the device, software, version and duration.
- State that no daily screen-reader user was involved.
- Save the findings with the boundary statement.

**Start here:** Write the device, the software, the version and the number of minutes before you write anything about what you found.

**Enough:** The boundary sits beside the findings rather than after them, and it names both things that make your session different: sight, and knowing the design.

**Preliminary check:** A session run by somebody who can see the screen and knows the design. It finds real failures and describes nobody’s daily experience.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### See the decision being made

Section: practice. Stable action: step-5-demo.

Made-up example. Writing up a twenty-minute screen-reader session, and writing the boundary in a place nobody would read it.

**What I found:** Six real failures, each traceable to a decision. It was the most productive twenty minutes of the module.

**How I wrote it up:** Six findings on the first page, and a note at the end of the document saying the session was preliminary and no daily screen-reader user had been involved.

**What happened to that note:** The findings were quoted in a summary a week later. The note stayed in the document. What travelled was “tested with a screen reader”, which is the sentence I had been careful not to write.

**What I changed:** The boundary went into the first paragraph, beside the findings rather than after them: twenty minutes, my own phone, my own eyes, my own design, nobody who uses this daily.

**Why that placement is the whole point:** A limitation at the end is a limitation on a document. A limitation in the first line is a limitation on the finding, and the finding is the part that gets repeated.

**Wrong turn:** The wrong turn is putting the boundary at the end, where it reads as thoroughness and travels nowhere. The summary somebody else writes will keep the findings and drop the note.

**Trade-off:** Leading with what the session cannot establish makes your work sound smaller in the first sentence somebody reads, and some readers will value it less for that.

**Unknown:** Still unknown: whether any of the six failures would be the ones a daily user considered important. My ranking is a sighted occasional user’s ranking, and I have said so.


### Device, software, version and how long you spent

Section: practice. Stable action: write-session-record.

Write your answer for “Device, software, version and how long you spent”. Use the task instructions below to decide what to include.

**Answer:** Device, software, version and how long you spent




### The sentence saying what this session cannot tell you

Section: practice. Stable action: write-boundary-statement.

You can see the screen and you designed it. Both of those make your session different from a daily user’s.

**Answer:** The sentence saying what this session cannot tell you

You can see the screen and you designed it. Both of those make your session different from a daily user’s.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson checks the same product against Indian guidelines, language and connection conditions.


<details>
<summary>Optional hints and reference material</summary>

- Turn on the screen reader already on your device and attempt one task, writing what you hear.
- For each failure write what you heard and what you should have heard.

- R40: [WebAIM: screen reader testing](https://webaim.org/articles/screenreader_testing/) — How to run a basic test, and what a sighted occasional tester may not conclude from it. Purpose: Supplies both the procedure and the boundary this lesson enforces. Free reading, no account. Verified 2026-09-06. Use the free software already on your device: NVDA, VoiceOver or TalkBack. Your own session never substitutes for testing with disabled participants. Fallback: R41.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The checks you can pair with a listening session. Purpose: Provides complementary self-checks so failures can be confirmed visually as well. Free reading, no account. Verified 2026-09-06. Preliminary checks; passing them is not conformance. Fallback: R28.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**A real screen-reader session was run and recorded**

Adequate evidence: A record naming the software, device, duration and task attempted.

0 — Not run.

1 — Run briefly without recording conditions.

2 — Run with conditions and observations recorded.

3 — As adequate, and structure navigation was used as well as reading straight through.

Repair: Turn on the screen reader already on your device and attempt one task, writing what you hear. Recheck: The session record.

**Missing announcements are listed specifically**

Adequate evidence: A list of silences and noise, each naming the element and what should have been said.

0 — General impressions.

1 — Some failures named without the expected announcement.

2 — Each failure names the element and what was missing.

3 — As adequate, and the list distinguishes silence from misleading announcements.

Repair: For each failure write what you heard and what you should have heard. Recheck: The failure list.

**Failures map to earlier design decisions**

Adequate evidence: Each failure traced to a specification or a build defect.

0 — Failures listed without causes.

1 — Causes guessed generally.

2 — Each traced to a decision or marked a build defect.

3 — As adequate, and at least one failure traces to a decision you made earlier in the course.

Repair: For each failure, find the specification that should have prevented it. If none exists, that is the gap. Recheck: The mapped failures.

**The limits of a self-run session are stated plainly**

Adequate evidence: A written statement that a sighted occasional tester's session is preliminary and no daily user was involved.

0 — Findings presented as proof of accessibility.

1 — A vague acknowledgement of limits.

2 — The limit stated plainly with the conditions recorded.

3 — As adequate, and the statement names what testing with daily users would add.

Repair: Copy the boundary the assigned article states and apply it to your own session in your own words. Recheck: The boundary statement.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson checks the same product against Indian guidelines, language and connection conditions.

**Review criteria:**

- A real screen-reader session was run and recorded
- Missing announcements are listed specifically
- Failures map to earlier design decisions
- The limits of a self-run session are stated plainly

<details>
<summary>Reading, video and deeper explanation</summary>

- The assigned article is explicit about both halves of this lesson: how to run a basic screen-reader test, and what a sighted occasional tester may not conclude from it. Both matter. Running the test will show you concrete failures — an unlabelled field, an image announced as a filename, a status change nobody hears — and it will not tell you whether your product is usable for someone who navigates this way every day.
- Five commands are enough to start. Navigating by heading tells you whether your outline works. Navigating by link and by form field tells you whether your labels carry. Read-all tells you the order and what is announced. Stop is what you will need most in the first ten minutes. Learning the whole command set is a different project.
- Listen for absence rather than presence. The failures are usually silence where something happened: a filter applied and nothing announced, an error appearing with no notification, an icon button read as “button”. Your m09 focus rules and m11 form associations are exactly what these gaps test.
- Say what your session establishes. It establishes that specific failures exist — that is real and useful. It does not establish that the product works, because you know where everything is, you can see the screen, and you are not using the software the way a daily user does. The catalog row for this reading says the same thing, and your write-up should repeat it.

[WebAIM: screen reader testing](https://webaim.org/articles/screenreader_testing/).

</details>

## Lesson 11: Access in the Indian context

Stable ID: m11-l11-v1. Core.

Most accessibility guidance you have read is written for English-language, high-bandwidth, single-device contexts. Your learner and her users are frequently in none of those.

Bring: Your label work and current screens.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Two named requirements compared against your design
- A language check covering formats, embedded text and plain wording
- A script rendering check with line height and clipping
- A slow-connection check with a recorded time to usable

### Start with a clear task

Section: learn. Stable action: welcome.

Check your design against two named requirements from the Indian government guidelines and against language and bandwidth conditions your users will actually meet.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

India's government publishes its own guidelines covering accessibility, local language and mobile.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Language support is an access requirement, not a growth feature.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Scripts differ: line height, sorting and input methods all change.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

A slow or intermittent connection excludes people as effectively as a missing label.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Shared devices change what personal and private mean in your design.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Two requirements were compared. The first, on local-language support, exposed that dates were formatted in a way that assumed one convention and that the month names were English-only; both were changed. The second, on mobile, exposed a page weight that took eleven seconds to become usable on a throttled connection. Separately, a Hindi rendering of the navigation clipped matras until line height was increased, and the class list's alphabetical sort was noted as language-dependent and left with a recorded limitation. The shared-device question from m07 was revisited: notifications now say “a class you booked” rather than naming the class on the lock screen.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and choose two requirements

Section: practice-plan. Stable action: step-1-brief.

Two requirements from the Indian government guidelines, each written in your own words with the reason you chose it.

- Open the assigned guidelines and choose two requirements relevant to your product.
- Write each in your own words.

**Start here:** Open the guidelines and look for the sections on language and on mobile before anything else.

**Enough:** Both are in your own words, and each says why this product is affected by it.

**The Indian guidelines:** Guidelines published for Indian government websites and apps, covering accessibility, local language and mobile use together rather than separately.

**Choosing a requirement:** Picking the ones your product actually touches. Two you can act on this week are worth more than a list copied out in full.


### Requirement 1 · what it asks, in your own words, and why you chose it

Section: practice-plan. Stable action: write-requirement-1.

Write your answer for “Requirement 1 · what it asks, in your own words, and why you chose it”. Use the task instructions below to decide what to include.

**Answer:** Requirement 1 · what it asks, in your own words, and why you chose it




### Requirement 2 · what it asks, in your own words, and why you chose it

Section: practice-plan. Stable action: write-requirement-2.

Choose ones your product actually touches. Two you can act on beat six you cannot.

**Answer:** Requirement 2 · what it asks, in your own words, and why you chose it

Choose ones your product actually touches. Two you can act on beat six you cannot.


### Compare against your design

Section: practice-plan. Stable action: step-2-brief.

Your screens compared against both requirements, naming where you meet them, where you do not, and what would be needed.

- Check your screens against each requirement.
- Record where you meet it, where you do not, and what would be needed.

**Start here:** Take requirement one and walk one screen against it before writing anything general.

**Enough:** Each gap names a change somebody could make rather than an area to improve.

**What would be needed:** The actual change, named. Not “improve language support” but “month names come from a list rather than being written in English”.


### Requirement 1 · where you meet it, where you do not, and what would be needed

Section: practice-plan. Stable action: write-compare-1.

Write your answer for “Requirement 1 · where you meet it, where you do not, and what would be needed”. Use the task instructions below to decide what to include.

**Answer:** Requirement 1 · where you meet it, where you do not, and what would be needed




### Requirement 2 · where you meet it, where you do not, and what would be needed

Section: practice-plan. Stable action: write-compare-2.

Write your answer for “Requirement 2 · where you meet it, where you do not, and what would be needed”. Use the task instructions below to decide what to include.

**Answer:** Requirement 2 · where you meet it, where you do not, and what would be needed




### Check language and formats

Section: practice-plan. Stable action: step-3-brief.

Formats checked against local convention, embedded text moved out, and idiom replaced with plainer wording.

- Check date, number and address formats against local convention.
- Find any text embedded in images and move it out.
- Simplify wording that depends on idiom.

**Start here:** Find every date in your product and write it the way you would say it aloud.

**Enough:** No format in your product could be read two ways, and no meaning is left inside a picture.

**Localisation:** Making a product work in another language and convention. Most of its cost is decided during design, by layouts built to English string lengths and text baked into pictures.

**Idiom:** A phrase whose meaning is not its words. It reads as friendly to people who grew up with it and as noise to everybody else, including translation.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Checking the language readiness of a tool-library product, and deciding it was a job for after launch.

**What I told myself:** The product is English-only for now. Translation is a later project, so there is nothing to do in this lesson beyond noting it.

**What I looked at anyway:** Three things: the navigation labels, the date format, and the promotional banner with its price set inside the picture.

**What each one costs later:** The navigation is a row of five short English words with no room to grow; several languages need half again the width. The date is written 03/04, which is two different days depending on where you grew up. The banner is a picture, so translating it means redrawing it.

**What the cheap version was:** Let the navigation wrap and give it room. Write dates as 3 April 2026. Take the price out of the image. Three changes, one afternoon, no translator involved.

**What I still deferred:** Actual translation, an input method for a second script, and language-dependent sorting. Those are real projects and they are not made harder by today.

**Wrong turn:** The wrong turn is treating language as a switch you flip later. Most of the expense is not the translating; it is the layouts, the images and the formats decided now by somebody who was not thinking about it.

**Trade-off:** Giving labels room to grow means the English navigation has more space around it than it strictly needs, and looks slightly less tight today.

**Unknown:** Still unknown: which languages this product would actually need. I designed for the string lengths to change rather than for a particular language, because I do not know which one.


### Date, number and address formats in your design, and what you changed

Section: practice-plan. Stable action: write-formats.

Write your answer for “Date, number and address formats in your design, and what you changed”. Use the task instructions below to decide what to include.

**Answer:** Date, number and address formats in your design, and what you changed



<details>
<summary>Example</summary>

Example (made up): dates were written 03/04 with no year and no month name, which two people read two different ways. Now 3 April 2026.

</details>


### Any text still baked into an image, and where it went

Section: practice-plan. Stable action: write-embedded-text.

Write your answer for “Any text still baked into an image, and where it went”. Use the task instructions below to decide what to include.

**Answer:** Any text still baked into an image, and where it went




### Wording that depends on idiom, and the plainer version

Section: practice-plan. Stable action: write-idiom.

Anything that only works if you grew up with the phrase. Get the ball rolling, touch base, a quick heads-up.

**Answer:** Wording that depends on idiom, and the plainer version

Anything that only works if you grew up with the phrase. Get the ball rolling, touch base, a quick heads-up.


### Check script and connection

Section: practice-plan. Stable action: step-4-brief.

Key labels rendered in an Indic script with clipping fixed, and a timed load on a throttled connection.

- Render key labels in an Indic script and check for clipping.
- Increase line height where characters are cut.
- Load on a throttled connection and time when the page becomes usable.

**Start here:** Write three of your labels by hand in an Indic script at the same size, or render them if your prototype can.

**Enough:** You have a number of seconds for the throttled load, not an impression that it felt slow.

**Matra:** A vowel mark written above or below the base character in several Indic scripts. A line height set for Latin text cuts them off, and the word becomes a different word.

**Time to usable:** Seconds until somebody could actually do something, not until everything has finished loading. It is the number that matters on a slow connection.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Timing a tool-library page on a throttled connection, and timing the wrong moment.

**What I measured first:** I threw the connection down to slow, loaded the page, and watched the browser’s loading indicator. It stopped at 18 seconds. I wrote 18 seconds down.

**What that number describes:** When everything finished arriving, including three photographs below the fold that nobody had scrolled to. It is a number about the page, not about the person.

**What I had not noticed:** The search box and the first four tools were readable at about 11 seconds. From then on the person could work while the rest arrived.

**The other direction:** On a second page the indicator stopped at 6 seconds and the list was still empty, because the content arrived after the page did. Time to usable there was 9 seconds, and the smaller number was the flattering one.

**What I recorded:** Time to usable, with the throttle setting beside it, and a note of what “usable” meant on each page: the search box and the first results.

**Wrong turn:** The wrong turn is timing when loading stops, because that is the number the browser offers you. It can be far too pessimistic or far too optimistic, and it is never about what the person can do.

**Trade-off:** Time to usable needs you to decide what usable means on each page and write it down, which is a judgement somebody could disagree with. A number with a definition beats a number without one.

**Unknown:** Still unknown: how this behaves on a real slow connection rather than a throttled fast one. Throttling models the speed and not the dropouts, and this lesson is not claiming otherwise.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six observations from a made up check on a tool-library product. For each one, decide what kind of problem it is.

The five navigation labels fit exactly, with no room to grow, and the row does not wrap.

- a layout decision made now
- a translation job for later
- not a problem

<details>
<summary>After your attempt</summary>

a layout decision made now — Any language with longer words breaks this, and letting it wrap costs nothing today. It is a decision about the container, not about words.

a translation job for later — The translating is later. The room for the translation is a choice you are making now.

not a problem — It is not a problem in English, which is exactly why it survives until the day it becomes an expensive one.

Now go through your own findings and mark each one the same way, so the deferred list is deliberate rather than accidental.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six observations from a made up check on a tool-library product. For each one, decide what kind of problem it is.

Dates are written 03/04 with no year and no month name.

- a layout decision made now
- a translation job for later
- not a problem

<details>
<summary>After your attempt</summary>

a layout decision made now — It reads as two different days depending on where somebody grew up, today, in English. Writing 3 April 2026 fixes it in a minute.

a translation job for later — Nothing needs translating. The ambiguity is in the format itself.

not a problem — Two readers reading two different days from the same booking is a real problem before anything is translated.

Now go through your own findings and mark each one the same way, so the deferred list is deliberate rather than accidental.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six observations from a made up check on a tool-library product. For each one, decide what kind of problem it is.

A label written in Devanagari has the mark above the character cut off by the line height.

- a layout decision made now
- a translation job for later
- not a problem

<details>
<summary>After your attempt</summary>

a layout decision made now — Line height is set in your own design. A cut matra can change the word, so this is a correctness problem rather than a cosmetic one.

a translation job for later — The text is already there. What is failing is the space you gave it.

not a problem — A vowel mark removed is a different word, not a slightly untidy one.

Now go through your own findings and mark each one the same way, so the deferred list is deliberate rather than accidental.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six observations from a made up check on a tool-library product. For each one, decide what kind of problem it is.

The class list is sorted alphabetically by a rule that assumes Latin letters.

- a layout decision made now
- a translation job for later
- not a problem

<details>
<summary>After your attempt</summary>

a layout decision made now — Nothing about the layout causes it, and you cannot fix the sorting rule from a design file.

a translation job for later — Sorting is language-dependent and genuinely belongs with real language support. Recording it as a known limitation now is the right move.

not a problem — It will produce an order that looks arbitrary to a reader of that language. It is a real limitation, and a deferred one.

Now go through your own findings and mark each one the same way, so the deferred list is deliberate rather than accidental.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six observations from a made up check on a tool-library product. For each one, decide what kind of problem it is.

The offer is set inside a promotional picture.

- a layout decision made now
- a translation job for later
- not a problem

<details>
<summary>After your attempt</summary>

a layout decision made now — Translating a picture means redrawing it, for every language, for ever. Taking the words out now is a design change you can make today.

a translation job for later — It is made far more expensive by leaving it, which is what makes it a decision for now.

not a problem — It is invisible to translation, to search, to enlargement and to anybody listening.

Now go through your own findings and mark each one the same way, so the deferred list is deliberate rather than accidental.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six observations from a made up check on a tool-library product. For each one, decide what kind of problem it is.

A notification on the lock screen names the exact class that was booked.

- a layout decision made now
- a translation job for later
- not a problem

<details>
<summary>After your attempt</summary>

a layout decision made now — On a shared device the lock screen is read by whoever is nearby. Saying “a class you booked” instead is a wording decision available immediately.

a translation job for later — Nothing here is about language at all.

not a problem — It assumes the phone belongs to one person, which is the assumption this lesson is asking you to question.

Now go through your own findings and mark each one the same way, so the deferred list is deliberate rather than accidental.

</details>


### Which labels you rendered in an Indic script, and what happened

Section: practice-plan. Stable action: write-script-check.

If your prototype cannot render one, write the labels by hand on paper at the same size. That is a real check.

**Answer:** Which labels you rendered in an Indic script, and what happened

If your prototype cannot render one, write the labels by hand on paper at the same size. That is a real check.


### What you changed about line height or container size

Section: practice-plan. Stable action: write-script-fix.

Write your answer for “What you changed about line height or container size”. Use the task instructions below to decide what to include.

**Answer:** What you changed about line height or container size




### How you throttled the connection, and the seconds until the page was usable

Section: practice-plan. Stable action: write-throttle-result.

Write your answer for “How you throttled the connection, and the seconds until the page was usable”. Use the task instructions below to decide what to include.

**Answer:** How you throttled the connection, and the seconds until the page was usable



<details>
<summary>Example</summary>

Example (made up): browser throttling set to slow, first useful content at about 11 seconds, still loading images at 18.

</details>


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your product is English-only for now, so localisation is a later project. Is there anything to do today?

- Yes: layouts built to English string lengths, text inside images and ambiguous date formats are all decided now and expensive to undo.
- Not really, since nothing can be translated until there is a translator.
- Only the date format, which is a quick fix.

<details>
<summary>After your attempt</summary>

Yes: layouts built to English string lengths, text inside images and ambiguous date formats are all decided now and expensive to undo. — The translating is later. The cost of translating is set by decisions you are making this week, and the cheap versions of those decisions are available today.

Not really, since nothing can be translated until there is a translator. — Nothing needs translating to give a label room to grow or to take words out of a picture. Those are design decisions.

Only the date format, which is a quick fix. — The date is the quickest one. The containers and the images are the ones that cost real money later.

Improve: Mark each finding in step 4 as a decision for now or a job for later, and act on the ones marked now. Record the change in step 5.

Check again: Nothing on the deferred list is something you could change today in the design file.

Answers to revisit: script-check, script-fix, throttle-result, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You loaded the page on a throttled connection and it took a while. What should you write down?

- The number of seconds until somebody could actually do something, and which throttle setting you used.
- That the page is slow on poor connections.
- The total page weight, which is the underlying cause.

<details>
<summary>After your attempt</summary>

The number of seconds until somebody could actually do something, and which throttle setting you used. — A number with its conditions is evidence. Time to usable is the figure that matters, because the person is waiting to act rather than waiting for everything to arrive.

That the page is slow on poor connections. — Everybody already believes that, and nothing about it can be compared before and after a fix.

The total page weight, which is the underlying cause. — Weight is useful and it is not the experience. Two pages of the same weight can differ by ten seconds in when they become usable.

Improve: Put the throttle setting and the seconds to usable in step 4, replacing any impression you wrote. Record the change in step 5.

Check again: Your connection line contains a number and the conditions it was measured under.

Answers to revisit: script-check, script-fix, throttle-result, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your notification on the lock screen names the class somebody booked. Why does this module care?

- A shared device is common, and the lock screen is read by whoever is near it, so the design has assumed a private phone.
- It does not — that is a security question rather than an access one.
- Because notifications should always be minimal.

<details>
<summary>After your attempt</summary>

A shared device is common, and the lock screen is read by whoever is near it, so the design has assumed a private phone. — Access work includes the conditions people actually use the product in. One phone shared between a household changes what personal means, and the fix is a wording change.

It does not — that is a security question rather than an access one. — It is both, and the assumption behind it is the same one this lesson is about: that everybody has their own device, connection and language.

Because notifications should always be minimal. — A rule about brevity would fix this one by accident. The reasoning is about who else can see the screen.

Improve: Rewrite that notification so it says what happened without naming the detail, and record it in step 5 with the change.

Check again: No notification in your design assumes only one person sees the screen.

Answers to revisit: fixed-remaining, guidance-differences, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

What you fixed, what remains, and where the Indian guidance and the international guidance differ for your product.

- Write what you fixed and what remains.
- Note where the international guidance and the Indian guidance differ.
- Save the comparison with the evidence.

**Start here:** List the fixes first, then ask what the international guidance you read earlier did not mention at all.

**Enough:** The differences you name are about this product rather than about the documents in general.

**Shared device:** One phone used by several people. It changes what private means: lock-screen text, saved details, history and notifications are all read by somebody else.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### What you fixed and what remains

Section: practice. Stable action: write-fixed-remaining.

Write your answer for “What you fixed and what remains”. Use the task instructions below to decide what to include.

**Answer:** What you fixed and what remains




### Where the Indian guidance and the international guidance differ for your product

Section: practice. Stable action: write-guidance-differences.

Write your answer for “Where the Indian guidance and the international guidance differ for your product”. Use the task instructions below to decide what to include.

**Answer:** Where the Indian guidance and the international guidance differ for your product




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The last lesson of the module turns all of this into one honest statement.


<details>
<summary>Optional hints and reference material</summary>

- Choose two requirements that touch your product and walk your screens against each.
- List every formatted value and every image containing words, then fix each.

- R43: [Guidelines for Indian Government Websites and Apps](https://guidelines.india.gov.in/) — Two requirements of your choice from the accessibility, local-language or mobile sections. Purpose: Supplies the India-specific requirements your learner's work will be held to. Free HTML index with a downloadable PDF manual and no account. Verified 2026-09-06; the site records its own update as 4 September 2026. Written for government sites; comparing two requirements is the exercise, not reading it end to end. Fallback: R41.
- R42: [W3C: localization versus internationalization](https://www.w3.org/International/questions/qa-i18n) — What internationalization involves: encoding, text expansion, formats and sorting. Purpose: Explains the mechanical consequences of language and script differences. Free reading, no account. Verified 2026-09-06. A short definitional page with no layout guidance; the rendering and timing tests are the practical work. Fallback: R10.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Two named requirements are compared with results**

Adequate evidence: Two requirements quoted in your own words with a met, unmet or partial result each.

0 — No comparison.

1 — Requirements named without checking your design.

2 — Both compared with specific results.

3 — As adequate, and one requirement produced a change to the design.

Repair: Choose two requirements that touch your product and walk your screens against each. Recheck: The comparison.

**Formats and embedded text are checked and fixed**

Adequate evidence: A check of date, number and address formats, and a list of text moved out of images.

0 — Not checked.

1 — Formats checked but embedded text left.

2 — Both checked with fixes made.

3 — As adequate, and wording was simplified where it depended on idiom.

Repair: List every formatted value and every image containing words, then fix each. Recheck: The format and text list.

**A second script was rendered and clipping checked**

Adequate evidence: Labels rendered in an Indic script, with clipping identified and line height adjusted.

0 — Not attempted.

1 — Attempted without checking for clipping.

2 — Rendered, clipping checked and adjusted.

3 — As adequate, and sorting order is noted as language-dependent.

Repair: Write the labels by hand in the script if your prototype cannot render it, and record that the digital rendering is untested. Recheck: The script check.

**Time to usable on a slow connection is recorded**

Adequate evidence: A throttled load with a recorded time to first usable content.

0 — Not measured.

1 — Loaded slowly without timing.

2 — Timed with the profile recorded.

3 — As adequate, and one change was made because of the result.

Repair: Throttle the connection, disable the cache, and time when the page first becomes usable rather than fully loaded. Recheck: The timing record.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The last lesson of the module turns all of this into one honest statement.

**Review criteria:**

- Two named requirements are compared with results
- Formats and embedded text are checked and fixed
- A second script was rendered and clipping checked
- Time to usable on a slow connection is recorded

<details>
<summary>Reading, video and deeper explanation</summary>

- The assigned Indian guidelines are the primary source available to you for this context, covering accessibility alongside local-language and mobile requirements. Comparing two of their requirements against your own work is a concrete exercise, and it will usually surface something the international guidance did not: a format assumption, a language assumption, or an expectation about connectivity.
- Language is an access question. A person who reads Hindi or Tamil more comfortably than English meets an English-only interface as a barrier in the same sense as an unlabelled field. Full localisation may be beyond your project, and the honest intermediate steps are real: plain language, avoiding idiom, not embedding text in images, and making formats — dates, numbers, addresses — follow local convention.
- Scripts have mechanical consequences you can test now. Indic scripts need more line height than Latin text of the same size, and clipping matras or conjuncts makes text unreadable rather than merely tight. Sorting order differs by language, so an alphabetical list is a different list. Input methods differ too, which affects field behaviour and what autocomplete can offer.
- Connectivity and device sharing are access conditions. A product that only works on a fast connection excludes people at particular times and places rather than permanently, which is exactly the situational barrier this module started with. A shared family phone raises questions about staying signed in, notifications and what appears on a lock screen — questions your m07 authentication work opened and this lesson closes.

[Guidelines for Indian Government Websites and Apps](https://guidelines.india.gov.in/).

</details>

## Lesson 12: An honest accessibility statement

Stable ID: m11-l12-v1. Core.

A statement that claims compliance you have not tested is worse than none. A statement that says exactly what you know is a professional artefact.

Bring: All check results and your original barrier list.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A dated statement of what was tested, with what and on which device
- Lists of fixed, unfixed and untested items
- A stated target level with no untested conformance claim
- A plan for testing with disabled participants, with lead times

### Start with a clear task

Section: learn. Stable action: welcome.

Write an accessibility statement naming what you tested, what you found, what remains unfixed and what you have not tested at all, plus a plan for involving disabled participants.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Say what you tested, with what, on which device, and when.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

List known problems openly, with what you intend to do about them.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Distinguish tested from specified but unverified.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Never claim conformance you have not tested; say the target you worked to.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Plan for testing with disabled participants, including what it will cost.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The statement ran to one page. Tested: keyboard operation of the booking task on Windows with the pointer unavailable; a twenty-minute VoiceOver session on an iPhone; contrast measured for all text pairs; 200 per cent text; greyscale and colour-vision simulation; a throttled load. Found and fixed: nine items, listed. Found and not yet fixed: three, listed with intended dates — the date picker's arrow-key support, the unannounced filter change, and captions for the introductory video. Not tested at all: any use with switch access or voice control, any Android screen reader, and any session with a person who uses assistive technology daily. Target: WCAG 2.2 level AA, worked to and not tested for conformance. Plan: contact two local disability organisations, allow a month, and budget compensation.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Collect the evidence

Section: practice-plan. Stable action: step-1-brief.

Every check from this module gathered with its date and conditions, sorted into fixed, not yet fixed and untested.

- Gather every check from this module with its date and conditions.
- Separate results into fixed, unfixed and untested.

**Start here:** Go back through the eleven lessons and list every check you actually ran, with its date.

**Enough:** Every item says when and under what conditions, and nothing is listed that you did not do.

**Conditions:** The device, software, version and circumstances a check was run under. Without them a result cannot be repeated or judged.

**Not yet fixed:** A known problem with an intention attached. It is a more useful thing to publish than a promise that everything is fine.


### Every check from this module, with its date and conditions

Section: practice-plan. Stable action: write-evidence-list.

Write your answer for “Every check from this module, with its date and conditions”. Use the task instructions below to decide what to include.

**Answer:** Every check from this module, with its date and conditions



<details>
<summary>Example</summary>

Example (made up): keyboard-only attempt at the booking task, Windows laptop, pointer out of reach, 12 March.

</details>


### Found and fixed

Section: practice-plan. Stable action: write-fixed-list.

Write your answer for “Found and fixed”. Use the task instructions below to decide what to include.

**Answer:** Found and fixed




### Found and not yet fixed, each with what you intend to do

Section: practice-plan. Stable action: write-unfixed-list.

Write your answer for “Found and not yet fixed, each with what you intend to do”. Use the task instructions below to decide what to include.

**Answer:** Found and not yet fixed, each with what you intend to do




### Write the statement

Section: practice-plan. Stable action: step-2-brief.

A statement saying what was tested with what, on which device and when, the known problems, and the target level with no conformance claim.

- State what was tested, with what software, on which device and when.
- List the known problems with intended repairs.
- State the target level and that conformance was not tested.

**Start here:** Write the tested paragraph first, with dates. The rest of the statement is easier once that exists.

**Enough:** A reader could tell from the first paragraph whether their own situation was covered by anything you did.

**Accessibility statement:** A public page saying what you know about how well your product works for disabled people. Its value comes from what it admits.

**Conformance:** A claim that a finished thing meets every criterion at a level, resting on testing. Working to a target and having tested for conformance are different sentences.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Writing the statement for a tool-library product, and waiting until it would be a good one.

**What I decided at first:** Not to publish yet. Three known problems were still open, and a statement listing them felt like advertising the product’s faults.

**Who that decision was for:** Me. The person it affects is somebody deciding whether it is worth attempting to borrow a drill from us at all.

**What they get with no statement:** Nothing. They try, they meet the date picker that cannot be operated, they lose twenty minutes, and they cannot tell whether anything else would have worked.

**What they get with the honest one:** They know the date picker is broken and being repaired, that keyboard operation of everything else was checked in March, and that nobody has tested with a switch device. They can decide in thirty seconds.

**What I published:** One page, dated, with three open problems and their intended dates, and a contact line. It is not a good statement about the product. It is a good statement.

**Wrong turn:** The wrong turn is waiting until everything is fixed, because that day does not arrive and the silence in the meantime costs somebody a wasted afternoon.

**Trade-off:** Publishing known problems means anybody can read your faults, including a competitor and a client. That is the cost, and it is smaller than it feels.

**Unknown:** Still unknown: whether the three open items are the three that matter most. Nobody who uses assistive technology daily has told us, and the statement says so.


### What was tested, with what software, on which device, and when

Section: practice-plan. Stable action: write-tested-para.

A reader should be able to tell whether their own situation was covered.

**Answer:** What was tested, with what software, on which device, and when

A reader should be able to tell whether their own situation was covered.


### The known problems, written so somebody deciding whether to try your product can decide

Section: practice-plan. Stable action: write-known-problems.

Write your answer for “The known problems, written so somebody deciding whether to try your product can decide”. Use the task instructions below to decide what to include.

**Answer:** The known problems, written so somebody deciding whether to try your product can decide




### The target level, and the sentence saying conformance was not tested

Section: practice-plan. Stable action: write-target-sentence.

Write your answer for “The target level, and the sentence saying conformance was not tested”. Use the task instructions below to decide what to include.

**Answer:** The target level, and the sentence saying conformance was not tested




### Write the untested list

Section: practice-plan. Stable action: step-3-brief.

A named list of what you have not examined, and which untested area you think most likely hides a problem.

- Name what you have not examined, including assistive technologies you do not use.
- Say which untested area you think most likely hides a problem.

**Start here:** List the assistive technologies you do not personally use. That list is most of this step.

**Enough:** Every line names something specific, and none of them says further testing is needed.

**Untested:** Not looked at, by anybody, so far. It is different from tested and failing, and different again from specified and unverified.

**Naming the technology:** Switch access, voice control, braille displays, magnification, screen readers on platforms you do not own. A list of names is honest; “further testing needed” is not.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six sentences from a made up accessibility statement. For each one, decide what it actually claims.

On 12 March the booking task was completed using only a keyboard on a Windows laptop, with three failures found and two repaired.

- a tested result
- a specified intention
- an untested claim

<details>
<summary>After your attempt</summary>

a tested result — Date, method, device, outcome, and the number still open. A reader can judge it and, in principle, repeat it.

a specified intention — Nothing here is about what should happen. It says what did happen.

an untested claim — It is bounded exactly to what was done and claims nothing beyond it.

Now read your own draft statement line by line and mark each sentence the same way. Anything in the third group is rewritten or removed.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six sentences from a made up accessibility statement. For each one, decide what it actually claims.

This product conforms to WCAG 2.2 level AA.

- a tested result
- a specified intention
- an untested claim

<details>
<summary>After your attempt</summary>

a tested result — Conformance is a claim about every criterion in a tested build. Nothing in this module tested every criterion.

a specified intention — It is not written as an intention. It is written as a fact about the product.

an untested claim — This is the sentence the lesson exists to keep out. The honest version says which level you worked to, and that conformance was not tested.

Now read your own draft statement line by line and mark each sentence the same way. Anything in the third group is rewritten or removed.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six sentences from a made up accessibility statement. For each one, decide what it actually claims.

Error messages are announced when they appear.

- a tested result
- a specified intention
- an untested claim

<details>
<summary>After your attempt</summary>

a tested result — The forms lesson recorded this as specified and unverified, and the screen-reader lesson found it was not happening.

a specified intention — It describes required behaviour. Written in a statement without that qualifier, it reads as a fact and is not one.

an untested claim — It is closer to this than it looks, which is why the qualifier matters so much in a published document.

Now read your own draft statement line by line and mark each sentence the same way. Anything in the third group is rewritten or removed.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six sentences from a made up accessibility statement. For each one, decide what it actually claims.

We have not tested with switch access or voice control.

- a tested result
- a specified intention
- an untested claim

<details>
<summary>After your attempt</summary>

a tested result — It is an accurate report of the state of your knowledge, which is exactly what a statement is for. Naming what you did not do is a result.

a specified intention — Nothing is being promised here.

an untested claim — It claims nothing about the product at all. It describes the testing.

Now read your own draft statement line by line and mark each sentence the same way. Anything in the third group is rewritten or removed.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six sentences from a made up accessibility statement. For each one, decide what it actually claims.

The product is fully accessible.

- a tested result
- a specified intention
- an untested claim

<details>
<summary>After your attempt</summary>

a tested result — No test could establish it. Accessibility is not a state a product reaches and holds.

a specified intention — As an intention it is unfalsifiable, which is worse rather than better.

an untested claim — Fully is the word that makes it untestable. It is also the sentence a reader who meets a barrier will remember.

Now read your own draft statement line by line and mark each sentence the same way. Anything in the third group is rewritten or removed.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six sentences from a made up accessibility statement. For each one, decide what it actually claims.

Captions for the introduction video are being corrected by hand and will be published by the end of April.

- a tested result
- a specified intention
- an untested claim

<details>
<summary>After your attempt</summary>

a tested result — Nothing has been tested. The captions do not exist in their corrected form yet.

a specified intention — A known problem with a named repair and a date. This is the right shape for the unfixed list.

an untested claim — It claims nothing about the present state beyond that the captions are wrong, which is true.

Now read your own draft statement line by line and mark each sentence the same way. Anything in the third group is rewritten or removed.

</details>


### Everything you have not examined, including assistive technology you do not use

Section: practice-plan. Stable action: write-untested-list.

Switch access, voice control, screen readers on platforms you do not own, braille displays, magnification.

**Answer:** Everything you have not examined, including assistive technology you do not use

Switch access, voice control, screen readers on platforms you do not own, braille displays, magnification.


### Which untested area you think most likely hides a problem, and why

Section: practice-plan. Stable action: write-most-likely.

Write your answer for “Which untested area you think most likely hides a problem, and why”. Use the task instructions below to decide what to include.

**Answer:** Which untested area you think most likely hides a problem, and why




### Plan participant testing

Section: practice-plan. Stable action: step-4-brief.

Named routes to disabled participants, a lead time, the accommodations you would prepare, and the compensation you would offer.

- Read the assigned recruitment guidance on lead times and accommodations.
- Name the organisations or routes you would approach.
- Write the lead time and what compensation you would offer.

**Start here:** Find two real organisations or groups you could actually approach, and write their names.

**Enough:** The plan names real routes, a lead time in weeks, and a figure you could defend.

**Lead time:** How long before a session you need to start arranging it. Accessible sessions need longer: transport, interpreters, accommodation questions and people’s own schedules.

**Accommodation:** What somebody needs in order to take part: a particular format, an interpreter, breaks, their own device, a remote option. Asking in advance is part of the invitation.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Planning participant testing for a tool-library product, and planning it the way an ordinary session is planned.

**What I wrote first:** Recruit three participants who use assistive technology, one week, video call, the usual thank-you voucher.

**The first thing wrong with it:** One week. Reaching people through an organisation takes longer than a general recruitment call, because there is a person in the middle who has their own work.

**The second thing:** Video call, chosen by me. Somebody may need their own device and their own settings, which is exactly the setup worth watching, and a call on my platform may be the least accessible part of the session.

**The third thing:** The usual voucher. These participants bring expertise about a technology I do not use, and they are being asked to help fix an exclusion that is mine. Paying them the rate for a general session undervalues both.

**What the plan became:** A month’s lead time through two named local organisations, the session on the participant’s own device and platform, accommodations asked about in the invitation, and a fee rather than a voucher.

**Wrong turn:** The wrong turn is planning it as an ordinary usability session with a different recruitment line. Lead time, format and payment all change, and all three decide whether the session happens at all.

**Trade-off:** A month and a fee are real costs, and they will be questioned. The alternative is a plan that looks reasonable on paper and never produces a session.

**Unknown:** Still unknown: whether the organisations I named would want to work this way. They may have their own process and their own view of what is fair, and the plan should bend to it.


### The organisations or routes you would approach

Section: practice-plan. Stable action: write-routes.

Local disability organisations, user groups, existing contacts. Naming real routes is the point; you are not required to contact them in this lesson.

**Answer:** The organisations or routes you would approach

Local disability organisations, user groups, existing contacts. Naming real routes is the point; you are not required to contact them in this lesson.


### The lead time you would allow, and the accommodations you would prepare for

Section: practice-plan. Stable action: write-lead-time.

Write your answer for “The lead time you would allow, and the accommodations you would prepare for”. Use the task instructions below to decide what to include.

**Answer:** The lead time you would allow, and the accommodations you would prepare for




### What compensation you would offer, and why that figure

Section: practice-plan. Stable action: write-compensation.

People are giving you expertise and time. Unpaid testing by disabled people is asking the excluded to fix the exclusion for nothing.

**Answer:** What compensation you would offer, and why that figure

People are giving you expertise and time. Unpaid testing by disabled people is asking the excluded to fix the exclusion for nothing.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Three problems are still open, so you plan to publish the statement once they are fixed. Who does that decision serve?

- You. The person deciding whether to attempt your product gets nothing in the meantime and finds out by losing an afternoon.
- Users, who would otherwise be put off by a list of faults.
- Nobody in particular; it is just good practice to finish first.

<details>
<summary>After your attempt</summary>

You. The person deciding whether to attempt your product gets nothing in the meantime and finds out by losing an afternoon. — A dated statement with three known problems lets somebody decide in thirty seconds. Waiting for a perfect one means the page never appears, because there are always three more.

Users, who would otherwise be put off by a list of faults. — Being put off by a known fault is a decision made with information. Meeting it unannounced is the same fault without the choice.

Nobody in particular; it is just good practice to finish first. — It is the practice that produces no statement at all, which is why this lesson argues against it directly.

Improve: Move your three open items into the not-yet-fixed list in step 1 with intended dates, and keep the statement publishable today. Record the change in step 5.

Check again: The statement would be publishable as it stands, with its open problems listed.

Answers to revisit: evidence-list, fixed-list, unfixed-list, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your statement says error messages are announced when they appear. Your screen-reader session found they were not. What is the real problem with the sentence?

- It describes intended behaviour in a document readers take as fact, without saying whether it was tested.
- It is simply out of date and needs correcting.
- Nothing, since the behaviour will be built eventually.

<details>
<summary>After your attempt</summary>

It describes intended behaviour in a document readers take as fact, without saying whether it was tested. — Specified, tested and untested are three different states, and a published statement has to say which one each claim is in. Once it is on a public page, an intention reads as a fact.

It is simply out of date and needs correcting. — Correcting it fixes this line. The shape of the sentence is what let an untested behaviour be published as a fact in the first place.

Nothing, since the behaviour will be built eventually. — Somebody reading it today is deciding whether to use your product today.

Improve: Mark every sentence in step 2 as tested, specified or untested, and rewrite anything that does not say which. Record the change in step 5.

Check again: No sentence in the statement leaves its evidence status unstated.

Answers to revisit: tested-para, known-problems, target-sentence, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You plan to recruit three participants who use assistive technology, over one week, with the usual voucher. What is most likely to go wrong?

- The lead time. Reaching people through an organisation takes longer, and a week produces no sessions rather than three.
- The number: three is too few to conclude anything.
- Nothing, if the voucher is generous enough.

<details>
<summary>After your attempt</summary>

The lead time. Reaching people through an organisation takes longer, and a week produces no sessions rather than three. — A month is a realistic minimum, because there is a person in the middle with their own work, and participants need to be asked about accommodations before agreeing.

The number: three is too few to conclude anything. — Three is a reasonable number for finding problems, and it is not the thing that stops the sessions happening.

Nothing, if the voucher is generous enough. — Payment matters, and it is the second problem here rather than the first. No amount of money shortens a recruitment route.

Improve: Set a lead time in weeks in step 4, say who you would go through, and replace any voucher with a figure you can defend. Record the change in step 5.

Check again: The plan could actually be started on Monday and would produce a session.

Answers to revisit: routes, lead-time, compensation, improvement-made

</details>


### Check the language

Section: practice. Stable action: step-5-brief.

Every compliance claim removed, a contact route for somebody who meets a barrier, and the repair the Check questions asked for.

- Remove any sentence claiming compliance, conformance or full accessibility.
- Add a contact route for someone who meets a barrier.
- Save the statement with the evidence behind it.

**Start here:** Search your draft for the words compliant, conformant, fully and accessible, and read each sentence again.

**Enough:** The contact route works even for somebody blocked by the problem they are reporting.

**Contact route:** A way for a person who meets a barrier to tell you, that does not itself require the part of your product that is broken.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Every sentence you removed because it claimed compliance, conformance or full accessibility

Section: practice. Stable action: write-removed-claims.

Write your answer for “Every sentence you removed because it claimed compliance, conformance or full accessibility”. Use the task instructions below to decide what to include.

**Answer:** Every sentence you removed because it claimed compliance, conformance or full accessibility




### How somebody who meets a barrier can tell you

Section: practice. Stable action: write-contact-route.

Write your answer for “How somebody who meets a barrier can tell you”. Use the task instructions below to decide what to include.

**Answer:** How somebody who meets a barrier can tell you




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. This closes Module 11. Module 12 starts on web foundations, and the untested list you wrote here is what a real build will begin to answer.


<details>
<summary>Optional hints and reference material</summary>

- Go back through the module and record the conditions for each check you ran.
- Split your results into the three categories; anything you specified but did not verify goes in untested.

- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — The criteria you worked to, revisited to confirm what your statement can and cannot say. Purpose: Keeps the statement's target accurate and its claims bounded. Free reading, no account. Verified 2026-09-06. An index of the standard; conformance is a property of a tested build, not of a design that consulted the criteria. Fallback: R41.
- R52: [GOV.UK: finding user research participants](https://www.gov.uk/service-manual/user-research/find-user-research-participants) — Recruiting disabled participants, lead times and accommodations. Purpose: Supplies realistic timings and requirements for the testing this module could not do. Free reading, no account. Verified 2026-09-06; last updated 28 April 2020. It advises contacting organisations at least a month ahead, longer where cognitive disabilities are involved, and gives no compensation amounts. Fallback: R08.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The statement names what was tested, how and when**

Adequate evidence: A dated list of checks with software, device and task named.

0 — General claims about accessibility.

1 — Checks named without conditions or dates.

2 — Each check with software, device and date.

3 — As adequate, and the duration of each test is included so the depth is visible.

Repair: Go back through the module and record the conditions for each check you ran. Recheck: The tested list.

**Fixed, unfixed and untested are listed separately**

Adequate evidence: Three distinct lists, with intended repairs for the unfixed items.

0 — One undifferentiated list, or only fixed items.

1 — Fixed and unfixed listed; untested omitted.

2 — All three separated with repairs named for the unfixed.

3 — As adequate, and the untested list names the area most likely to hide a problem.

Repair: Split your results into the three categories; anything you specified but did not verify goes in untested. Recheck: The three lists.

**No untested conformance is claimed**

Adequate evidence: A stated target level with an explicit statement that conformance was not tested.

0 — Compliance or conformance claimed.

1 — Ambiguous wording that implies conformance.

2 — Target stated and the absence of a conformance test stated plainly.

3 — As adequate, and the statement says what a conformance evaluation would require.

Repair: Search the statement for compliant, conformant and accessible-as-a-claim, and rewrite each as what you worked to and what you tested. Recheck: The revised statement.

**A participant testing plan names routes, lead times and compensation**

Adequate evidence: A written plan with organisations or routes, realistic lead times and an offer.

0 — No plan.

1 — An intention without routes or timings.

2 — Routes, lead times and compensation all stated.

3 — As adequate, and the plan accounts for accommodations the sessions themselves will need.

Repair: Use the assigned lead times — up to a month, longer for cognitive disabilities — and name two real routes you could approach. Recheck: The plan.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. This closes Module 11. Module 12 starts on web foundations, and the untested list you wrote here is what a real build will begin to answer.

**Review criteria:**

- The statement names what was tested, how and when
- Fixed, unfixed and untested are listed separately
- No untested conformance is claimed
- A participant testing plan names routes, lead times and compensation

<details>
<summary>Reading, video and deeper explanation</summary>

- An accessibility statement is a factual document, and its usefulness comes from precision. What was checked, with which software, on what device, on what date. Which criteria you worked to. What you found and fixed. What you found and did not fix, and why. What you have not examined at all. Read by someone who relies on assistive technology, that document tells them whether to try, which is the point.
- Known problems belong in it. Listing an unfixed problem is not an admission of incompetence; it is information a person can act on, and it commits you publicly to a repair. The alternative — silence — means someone discovers it by being unable to complete a task.
- The tested-versus-specified distinction runs through this whole module. You specified associations, key behaviour and announcements; you tested some of them on your own device. Both are real; conflating them turns a design intention into a claim about a build.
- Involving disabled participants is the gap this module cannot close by itself, and the plan is part of the deliverable: who you would recruit, through which organisations, with what lead time, and what it would cost in time or compensation. Your recruitment reading gives the lead times, and they are longer than for other participants — a month is realistic, six to eight weeks where cognitive disabilities are involved.

[W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/).

</details>
