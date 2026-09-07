# Interaction and motion

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Published, worksheet-enabled, teaching-refined, learner-validated and assessed are separate states.

Generated from src/module9.ts; edit that source, then run npm run docs:generate. Level 3 · Module m09 · requirement areas 9. Optional effort 25 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m08. This is guidance for meaningful practice, not a lock. Module approved resource pair: R13 / R02. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: What motion is actually for

Stable ID: m09-l01-v1. Core. Areas 9. Optional effort ~120 min.

**Objective.** Audit every animation you have proposed or seen in your product, classify each as feedback, continuity, attention or decoration, and remove the ones that answer no question.

**Bring forward.** Your m08 screens, state specifications and message set.

Motion is expensive attention. Each animation should answer a question the person was about to ask, or it is spending their time for someone else's pleasure.

### Learn

The useful test for an animation is which question it answers. Feedback confirms that an action registered, and it must be immediate — a press state that appears after a delay reads as a failed tap. Continuity explains where a thing came from or went, which is what stops a panel appearing out of nowhere and forcing the person to reorient. Attention marks a change the person did not cause, and it is the category most often abused, because everything looks important to the team that built it.

Decoration is not automatically wrong. A small flourish at the end of a booking can carry warmth that plain text cannot, and warmth is a legitimate design goal. What decoration must never do is delay the next action, repeat on every visit, or move the thing the person is about to tap. Judge it by whether it costs anything; if it does, it needs a better reason than that it looks nice in a demo.

Every animation has a cost measured in the person's time and in the number of things they must track. A three-hundred-millisecond transition repeated at every step of a five-step booking is a second and a half of waiting spread across a task that felt fast before. Motion also competes for attention: two things moving at once means one of them is being missed.

The audit is more useful than any single decision. Listing what you have and asking each one which question it answers usually removes a third of them, and the removals are the cheapest performance and clarity improvement available to you at this stage.

**Common misconception.** “Motion makes an interface feel modern.” It makes an interface feel slower when it delays action, and it makes an interface feel confusing when several things move at once. What reads as quality is usually immediate feedback and continuity, not the amount of movement.

### Worked example

An audit of the booking flow found eleven animations. Four were feedback and stayed. Three were continuity — the filter panel sliding from the control that opened it, the detail view expanding from its row — and stayed. Two were attention: one legitimate, marking a place that had just been taken by someone else, and one an animated banner promoting a class, which was demoted to a static card. Two were decoration: a bouncing icon on the confirmation screen, kept because it cost nothing and did not delay anything, and an animated page transition that added 400ms to every navigation, which was removed and immediately made the whole flow feel faster.

#### What motion is actually for

Audit every animation you have proposed or seen in your product, classify each as feedback, continuity, attention or decoration, and remove the ones that answer no question.

**Where to work:** The audit is written work. Where you need to see a transition, a local HTML file with a few CSS rules shows real timing honestly; guessing at durations on paper is where most bad motion decisions are made.

- Starting material: Your m08 screens and state specifications.
- Create HaruCourse/Practice/m09-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# What motion is actually for

Input artifact: Your m08 screens and state specifications.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] An audit listing every animation with the question it answers
- [ ] A classification: feedback, continuity, attention or decoration
- [ ] A removal list with the time each removal gives back
- [ ] A stated rule for when your product animates

## 1. List what moves
- List every animation in your designs, including ones you assumed.
- Include page transitions, hovers, presses and anything that fades.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Ask what each answers
- For each, write the question a person is asking at that moment.
- Classify it as feedback, continuity, attention or decoration.
- Mark any that answers nothing.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Count the cost
- Estimate the delay each animation adds before the next action is possible.
- Add up the delay across one complete task.
- Mark anything that moves an element the person is about to tap.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Cut and justify
- Remove every animation that answers nothing and costs time.
- Keep decoration only where it delays nothing and does not repeat.
- Write one sentence justifying each animation you keep.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Write the rule
- Write when your product animates and when it does not.
- Record the total time your removals gave back across one task.
- Save the audit, the rule and the removal list.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Every animation is listed with the question it answers: [evidence reference]
- Each is classified into one of the four kinds: [evidence reference]
- The time cost across one task is counted: [evidence reference]
- A rule for when the product animates is written: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Walk one task and note everything that changes over time, including hover and press states. Add each to the list.

</details>

<details>
<summary>Hint 2</summary>

For each animation ask whether the person caused it, whether it explains a movement, and whether anything would be lost without it.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m09-l01-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every animation is listed with the question it answers: An audit covering presses, hovers, transitions and anything that fades, each with the person's question. Each is classified into one of the four kinds: A classification per animation, consistent with the definitions. The time cost across one task is counted: Estimated delays per animation and a total across one complete task. A rule for when the product animates is written: One or two sentences that would settle a future proposal, kept with the component inventory.

**Bring forward:** A motion audit with removals is unusual and persuasive: it shows judgement about restraint rather than a reel of transitions. Module handoff: Choose prototype fidelity in m10


### Practice and pause points

- List what moves (~20 min): List every animation in your designs, including ones you assumed. Include page transitions, hovers, presses and anything that fades.
- Ask what each answers (~30 min): For each, write the question a person is asking at that moment. Classify it as feedback, continuity, attention or decoration. Mark any that answers nothing.
- Count the cost (~25 min): Estimate the delay each animation adds before the next action is possible. Add up the delay across one complete task. Mark anything that moves an element the person is about to tap.
- Cut and justify (~30 min): Remove every animation that answers nothing and costs time. Keep decoration only where it delays nothing and does not repeat. Write one sentence justifying each animation you keep.
- Write the rule (~15 min): Write when your product animates and when it does not. Record the total time your removals gave back across one task. Save the audit, the rule and the removal list.

Pause after any step; save the artifact and next action.

**Free tool path.** The audit is written work. Where you need to see a transition, a local HTML file with a few CSS rules shows real timing honestly; guessing at durations on paper is where most bad motion decisions are made.

### Output

An audit listing every animation with the question it answers; A classification: feedback, continuity, attention or decoration; A removal list with the time each removal gives back; A stated rule for when your product animates

### Checks

- What question does continuity motion answer? Answer: Where did this come from, or where did it go. Without it a panel appears from nowhere and the person has to reorient before they can read it.
- Is decoration always wrong? Answer: No. It is wrong when it costs something: delaying the next action, repeating on every visit, or moving a target. Warmth that costs nothing is a legitimate design choice.
- Why audit before designing new motion? Answer: Because the fastest improvement is usually removal. Listing what exists and asking what each answers typically eliminates a third of it, at no cost to anyone.

### Rubric and remediation

**Every animation is listed with the question it answers**

Adequate evidence: An audit covering presses, hovers, transitions and anything that fades, each with the person's question.

- 0 — A partial list of obvious animations.
- 1 — A full list without the questions.
- 2 — Every animation listed with the question it answers, including “none”.
- 3 — As adequate, and the list includes motion you had assumed rather than specified.

If below 2: Walk one task and note everything that changes over time, including hover and press states. Add each to the list. Show at recheck: The completed audit.

**Each is classified into one of the four kinds**

Adequate evidence: A classification per animation, consistent with the definitions.

- 0 — No classification.
- 1 — Classified loosely, with attention and decoration conflated.
- 2 — Every animation classified with the definitions applied consistently.
- 3 — As adequate, and one animation is reclassified after examining what it actually does.

If below 2: For each animation ask whether the person caused it, whether it explains a movement, and whether anything would be lost without it. Show at recheck: The classified audit.

**The time cost across one task is counted**

Adequate evidence: Estimated delays per animation and a total across one complete task.

- 0 — No cost considered.
- 1 — Individual durations noted but not summed.
- 2 — Per-animation delays and a task total.
- 3 — As adequate, and elements that move under a finger about to tap are identified separately.

If below 2: Add the durations along one task path. If the total surprises you, that is the finding. Show at recheck: The cost total.

**A rule for when the product animates is written**

Adequate evidence: One or two sentences that would settle a future proposal, kept with the component inventory.

- 0 — No rule.
- 1 — A rule too vague to decide a case.
- 2 — A rule that resolves the next proposal.
- 3 — As adequate, and the rule is tested against the animation you removed.

If below 2: Write the rule, then apply it to the animation you cut. If the rule permits it, tighten the rule. Show at recheck: The written rule.

### Portfolio contribution

A motion audit with removals is unusual and persuasive: it shows judgement about restraint rather than a reel of transitions.

### Assigned resources

- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 1, visibility of system status, and heuristic 8, aesthetic and minimalist design. Purpose: Frames motion as feedback and noise rather than as style. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. The heuristics do not discuss motion specifically; the four-way classification is this lesson's own. Fallback: R11.
- R13: [MDN: CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using) — The introduction on what an animation is composed of, read for vocabulary rather than for code at this stage. Purpose: Gives the shared terms — duration, easing, keyframes — the rest of the module uses. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. It is implementation documentation, not motion design guidance; the design decisions here are the course's own. Fallback: R02.

## Lesson 2: Immediate feedback and the feel of a control

Stable ID: m09-l02-v1. Core. Areas 9. Optional effort ~120 min.

**Objective.** Specify press, hover and focus feedback for three controls so that every action is acknowledged immediately, and separate acknowledgement from the result that follows later.

**Bring forward.** Your m08 action specification and state tables.

The gap between tapping and seeing anything is where people tap twice. Acknowledgement is not the result; it is the promise that the result is coming.

### Learn

Three moments need designing, and products routinely design only the third. The press is when the person's finger is down and the control should look pressed. The acknowledgement is the instant afterwards, when the interface must show it heard — a state change, a label change, a disabled control with a spinner beside it. The outcome may take a second or ten, and it is the only one most teams specify, which is why so many products feel unresponsive while being technically fast.

On a touch screen there is no hover, so anything that only appears on hover does not exist for most of your users. This is a structural rule rather than a preference: if an action is available on hover in a list row, it must also be reachable by another means, and a design where the only route to “remove” is hovering is a design that excludes every phone.

Focus feedback is what a keyboard user has instead of a cursor. It must be visible against every background it can appear on, it must not be removed for aesthetic reasons, and it should be tested by pressing tab rather than assumed from the specification. This connects directly to the pattern guidance in this module: a component's keyboard behaviour and its focus appearance are the same design problem.

When something genuinely cannot respond instantly, say so in the control itself. A button that becomes “Booking…” with a spinner tells the person their tap registered; a button that stays identical for two seconds tells them nothing, and the reasonable response to nothing is to try again.

**Common misconception.** “The action completes quickly, so feedback is unnecessary.” Quickly on your machine and quickly on a five-year-old phone on a slow connection are different. Feedback costs nothing when the response is fast and saves the interaction when it is not.

### Worked example

The book button did nothing visible until the server replied, which on a throttled connection took four seconds; in the m07 paper test one participant had tapped twice. Rebuilt into three moments: pressed state on touch-down, immediate change to “Booking…” with the control disabled and a spinner, and the outcome message when the server replied. Hover-only reveal of the “remove from shortlist” control was replaced with a permanently visible quiet control. Focus rings were specified against both the light surface and the tinted panel, and the tab pass found one control that could be reached but showed no focus at all.

#### Immediate feedback and the feel of a control

Specify press, hover and focus feedback for three controls so that every action is acknowledged immediately, and separate acknowledgement from the result that follows later.

**Where to work:** A local HTML file with three buttons and a few CSS rules shows press, hover and focus honestly, including what happens on a touch screen if you open it on your phone. Paper cannot show feedback timing.

- Starting material: Your m08 action components and their state tables.
- Create HaruCourse/Practice/m09-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Immediate feedback and the feel of a control

Input artifact: Your m08 action components and their state tables.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Press, hover and focus feedback specified for three controls
- [ ] The three moments separated: press, acknowledgement, outcome
- [ ] A list of anything currently hover-only, with its touch route
- [ ] A tab pass recording where focus was invisible

## 1. Read and separate
- Read the assigned status heuristic and the keyboard pattern for one component you use.
- Write the three moments for one control: press, acknowledgement, outcome.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Specify the feedback
- For three controls, specify what changes on press, on hover and on focus.
- Make each state distinguishable without colour.
- Give the acknowledgement a label change, not only a spinner.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Remove hover dependence
- List everything currently revealed only on hover.
- Give each a route that works on touch.
- Delete any hover-only control that turns out to be unnecessary.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Test focus and touch
- Tab through your controls and record where focus is invisible.
- Open the same page on a phone and check every control is reachable.
- Repair the worst failure you find.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Write what you could not verify without a full implementation.
- Save the specifications with the tab-pass results.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Press, hover and focus are specified for three controls: [evidence reference]
- Acknowledgement is separated from outcome: [evidence reference]
- Nothing essential depends on hover: [evidence reference]
- A tab pass is recorded with failures named: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

For each control, write what changes in each state. Then check the states in greyscale.

</details>

<details>
<summary>Hint 2</summary>

Write the three moments as three rows. If the middle row is empty, the person will meet silence.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m09-l02-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Press, hover and focus are specified for three controls: A state specification per control covering all three, distinguishable without colour. Acknowledgement is separated from outcome: A specification showing an immediate acknowledgement distinct from the later result, including a label change. Nothing essential depends on hover: A list of previously hover-only elements, each with a touch route or removed. A tab pass is recorded with failures named: Notes from tabbing through the controls, naming where focus was invisible or the order was wrong.

**Bring forward:** Craft evidence with proof: a three-moment specification and a tab pass show interaction thinking that screenshots cannot. Module handoff: Choose prototype fidelity in m10


### Practice and pause points

- Read and separate (~20 min): Read the assigned status heuristic and the keyboard pattern for one component you use. Write the three moments for one control: press, acknowledgement, outcome.
- Specify the feedback (~30 min): For three controls, specify what changes on press, on hover and on focus. Make each state distinguishable without colour. Give the acknowledgement a label change, not only a spinner.
- Remove hover dependence (~25 min): List everything currently revealed only on hover. Give each a route that works on touch. Delete any hover-only control that turns out to be unnecessary.
- Test focus and touch (~30 min): Tab through your controls and record where focus is invisible. Open the same page on a phone and check every control is reachable. Repair the worst failure you find.
- Record (~15 min): Write what you could not verify without a full implementation. Save the specifications with the tab-pass results.

Pause after any step; save the artifact and next action.

**Free tool path.** A local HTML file with three buttons and a few CSS rules shows press, hover and focus honestly, including what happens on a touch screen if you open it on your phone. Paper cannot show feedback timing.

### Output

Press, hover and focus feedback specified for three controls; The three moments separated: press, acknowledgement, outcome; A list of anything currently hover-only, with its touch route; A tab pass recording where focus was invisible

### Checks

- Why acknowledge a press before the outcome arrives? Answer: Because the person needs to know their tap registered. Silence for two seconds reads as a failed tap, and the reasonable response to a failed tap is another tap.
- What is wrong with hover-only controls? Answer: Hover does not exist on touch screens, so the control does not exist for most people. Anything essential needs a route that works without a pointer.
- Why is focus feedback not a styling preference? Answer: Because it is the keyboard user's cursor. Removing it for aesthetics makes the interface unusable without a pointer, whatever it looks like in a screenshot.

### Rubric and remediation

**Press, hover and focus are specified for three controls**

Adequate evidence: A state specification per control covering all three, distinguishable without colour.

- 0 — Only default and pressed specified.
- 1 — Three states specified but distinguished by colour alone.
- 2 — All three, distinguishable without colour, for three controls.
- 3 — As adequate, and focus is specified against every surface it can appear on.

If below 2: For each control, write what changes in each state. Then check the states in greyscale. Show at recheck: The state specifications and greyscale check.

**Acknowledgement is separated from outcome**

Adequate evidence: A specification showing an immediate acknowledgement distinct from the later result, including a label change.

- 0 — Only the outcome is specified.
- 1 — An acknowledgement exists but is a spinner alone with no label change.
- 2 — Immediate acknowledgement with a label change, then the outcome.
- 3 — As adequate, and the acknowledgement prevents a second submission explicitly.

If below 2: Write the three moments as three rows. If the middle row is empty, the person will meet silence. Show at recheck: The three-moment specification.

**Nothing essential depends on hover**

Adequate evidence: A list of previously hover-only elements, each with a touch route or removed.

- 0 — Hover-only controls remain.
- 1 — Identified but not resolved.
- 2 — Every one has a touch route or was removed.
- 3 — As adequate, and the check was made on a real phone rather than by emulation.

If below 2: Open your design on a phone and try every action. Anything you cannot reach is hover-dependent. Show at recheck: The hover list with resolutions.

**A tab pass is recorded with failures named**

Adequate evidence: Notes from tabbing through the controls, naming where focus was invisible or the order was wrong.

- 0 — No tab pass.
- 1 — Claimed without specifics.
- 2 — Recorded with specific failures.
- 3 — As adequate, and one failure was repaired and re-checked.

If below 2: Build a rough local page with your controls and tab through it. Record what you see, not what you intend. Show at recheck: The tab-pass notes.

### Portfolio contribution

Craft evidence with proof: a three-moment specification and a tab pass show interaction thinking that screenshots cannot.

### Assigned resources

- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 1, visibility of system status. Purpose: States the obligation this lesson implements: the system tells people what is happening, promptly. Effort: 10–15 selected min. Free reading, no account. Verified 2026-09-06. It gives no timings; the three-moment split and the timing rules here are the course's own. Fallback: R11.
- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — One pattern matching a component you use, read for its Keyboard Interaction section. Purpose: Shows the level of key-by-key specification a component owes before it is built. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06; the pages carry no date. Semantics and keyboard behaviour only — no visual design, no motion — and it is guidance rather than a conformance standard. Fallback: R14.

## Lesson 3: Transitions that explain a change

Stable ID: m09-l03-v1. Core. Areas 9. Optional effort ~120 min.

**Objective.** Design three transitions that show where content came from or went, each with a stated duration and easing, and prove each one is doing explanatory work rather than filling time.

**Bring forward.** Your m08 screens and the continuity animations from the lesson 1 audit.

When something appears without explanation, people spend a moment working out what happened. A transition can spend fifty milliseconds to save that moment — or waste four hundred and save nothing.

### Learn

The explanatory work of a transition is spatial: a panel that grows from the button that opened it tells the person where it came from and, crucially, where it will go when dismissed. That is why the same panel appearing with a slide from the screen edge, when nothing on the edge caused it, is worse than a plain fade — it asserts a spatial relationship that does not exist, and people trust the assertion.

Duration should follow distance and size. A small control changing state can settle in under a tenth of a second; a full-screen panel travelling a long way needs longer or it appears to teleport. The common mistake is a single duration applied everywhere, which makes small feedback feel sluggish and large movements feel abrupt. Where you cannot measure, err short: people notice slowness far more readily than they notice speed.

Easing is meaning rather than polish. Something entering quickly and settling reads as arriving under its own weight; something leaving with acceleration reads as dismissed. Linear motion reads as mechanical, which is occasionally what you want — a progress indicator — and rarely what you want for content.

Two things moving at once split attention, and one of them will not be seen. When a panel opens while a list re-sorts beneath it, sequence them or animate only the one carrying the explanation. This is the same attention budget the audit in lesson 1 was counting.

**Common misconception.** “Animation makes the change feel smooth.” It makes the change legible when it shows a relationship, and it makes the product slow when it does not. Smoothness is not the goal; understanding what happened is.

### Worked example

Three transitions were designed. The filter panel scales and fades from the filter button, about 200ms, entering fast and settling — it explains where the panel came from and where it returns to. The detail view expands from its row over about 250ms, and the row stays in place beneath so the person knows what to go back to. The confirmation replaces the payment screen with a plain fade of 120ms, deliberately not a slide, because nothing moved anywhere and a slide would have implied a direction that does not exist. A fourth candidate — a staggered animation of every list row on load — was dropped: it delayed reading by half a second and explained nothing.

#### Transitions that explain a change

Design three transitions that show where content came from or went, each with a stated duration and easing, and prove each one is doing explanatory work rather than filling time.

**Where to work:** A local HTML file with CSS transitions lets you feel durations honestly and change them in seconds. Paper storyboards work for the spatial relationship; they cannot tell you whether 400ms is too slow, and it usually is.

- Starting material: Your audit's continuity items and the screens they occur on.
- Create HaruCourse/Practice/m09-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Transitions that explain a change

Input artifact: Your audit's continuity items and the screens they occur on.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Three transitions specified with origin, duration and easing
- [ ] A stated reason for each: what relationship it explains
- [ ] One rejected transition with the reason recorded
- [ ] A rule for what your product fades and what it moves

## 1. Read and map the relationships
- Read the assigned animation guidance for duration and easing vocabulary.
- For each continuity item from your audit, write what caused it and where it goes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Design three
- Specify origin, movement, duration and easing for each.
- Set duration from the distance and size, not from a single house value.
- Make dismissal reverse the entry so the relationship holds both ways.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Test the timings
- Build the transitions roughly in a local file or storyboard the frames.
- Try each at half and double your chosen duration.
- Keep the shortest that still reads as connected.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Reject one and sequence the rest
- Find a transition that explains nothing and remove it.
- Check no two transitions run at once in the same view.
- Sequence or drop where they compete.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Write the rule
- Write when your product moves something and when it simply fades.
- Record the rejected transition and why.
- Save the three specifications with their timings.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Each transition states the relationship it explains: [evidence reference]
- Duration follows distance and was tested at two speeds: [evidence reference]
- Dismissal reverses entry: [evidence reference]
- One transition was rejected with the reason recorded: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

For each transition ask what caused the change and where the content will go when dismissed. If neither has a place on screen, use a fade.

</details>

<details>
<summary>Hint 2</summary>

Halve and double each duration and record which reads as connected. Keep the shortest that still does.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m09-l03-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Each transition states the relationship it explains: A written origin and destination per transition, with what the person learns from it. Duration follows distance and was tested at two speeds: Durations set per transition with a record of trying them faster and slower. Dismissal reverses entry: A specified exit for each transition that returns content to where it came from. One transition was rejected with the reason recorded: A removed transition with what it cost and what it explained.

**Bring forward:** Show the rejected transition alongside the three you kept; the rejection is the part that demonstrates judgement. Module handoff: Choose prototype fidelity in m10


### Practice and pause points

- Read and map the relationships (~20 min): Read the assigned animation guidance for duration and easing vocabulary. For each continuity item from your audit, write what caused it and where it goes.
- Design three (~30 min): Specify origin, movement, duration and easing for each. Set duration from the distance and size, not from a single house value. Make dismissal reverse the entry so the relationship holds both ways.
- Test the timings (~25 min): Build the transitions roughly in a local file or storyboard the frames. Try each at half and double your chosen duration. Keep the shortest that still reads as connected.
- Reject one and sequence the rest (~30 min): Find a transition that explains nothing and remove it. Check no two transitions run at once in the same view. Sequence or drop where they compete.
- Write the rule (~15 min): Write when your product moves something and when it simply fades. Record the rejected transition and why. Save the three specifications with their timings.

Pause after any step; save the artifact and next action.

**Free tool path.** A local HTML file with CSS transitions lets you feel durations honestly and change them in seconds. Paper storyboards work for the spatial relationship; they cannot tell you whether 400ms is too slow, and it usually is.

### Output

Three transitions specified with origin, duration and easing; A stated reason for each: what relationship it explains; One rejected transition with the reason recorded; A rule for what your product fades and what it moves

### Checks

- When is a fade more honest than a slide? Answer: When nothing moved from anywhere. A slide asserts a spatial relationship, and if there is none, the person builds a mental model of the product that is wrong.
- Why not use one duration everywhere? Answer: Because duration should follow distance and size. One value makes small feedback sluggish and large movements abrupt, and both read as poor quality.
- What happens when two things animate at once? Answer: Attention splits and one is missed. Sequence them, or animate only the one that carries the explanation.

### Rubric and remediation

**Each transition states the relationship it explains**

Adequate evidence: A written origin and destination per transition, with what the person learns from it.

- 0 — Transitions specified as effects with no relationship stated.
- 1 — Relationships asserted but not matched to what actually causes the change.
- 2 — Each names its true origin and what it explains.
- 3 — As adequate, and one transition was changed to a fade because no real relationship existed.

If below 2: For each transition ask what caused the change and where the content will go when dismissed. If neither has a place on screen, use a fade. Show at recheck: The relationship notes.

**Duration follows distance and was tested at two speeds**

Adequate evidence: Durations set per transition with a record of trying them faster and slower.

- 0 — One duration applied everywhere.
- 1 — Varied durations chosen without testing.
- 2 — Durations set by distance and tested at two speeds, with the shortest readable kept.
- 3 — As adequate, and the specification states which transitions must stay under about 200ms.

If below 2: Halve and double each duration and record which reads as connected. Keep the shortest that still does. Show at recheck: The timing test notes.

**Dismissal reverses entry**

Adequate evidence: A specified exit for each transition that returns content to where it came from.

- 0 — Exits unspecified.
- 1 — Exits specified but unrelated to the entry.
- 2 — Each exit reverses its entry.
- 3 — As adequate, and exits are shorter than entries, which is how dismissal usually reads best.

If below 2: For each transition write the exit as the reverse of the entry, then check it does not fight the person's next action. Show at recheck: The exit specifications.

**One transition was rejected with the reason recorded**

Adequate evidence: A removed transition with what it cost and what it explained.

- 0 — Nothing rejected.
- 1 — Something removed with no reason recorded.
- 2 — A rejection with its cost and its absent explanation stated.
- 3 — As adequate, and the removal is connected to the time saved in the lesson 1 audit.

If below 2: Find the animation that delays the most and explains the least. Remove it and record what it cost. Show at recheck: The rejection note.

### Portfolio contribution

Show the rejected transition alongside the three you kept; the rejection is the part that demonstrates judgement.

### Assigned resources

- R13: [MDN: CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using) — Configuring the animation: duration, timing function and the properties worth animating. Purpose: Supplies the vocabulary and mechanics for specifying a transition precisely. Effort: 45–60 min. Free reading, no account. Verified 2026-09-06. Implementation documentation: it gives no guidance on when motion is appropriate, which is this lesson's subject. Fallback: R02.
- R33: [NN/g: recognition and recall](https://www.nngroup.com/articles/recognition-and-recall/) — Recognition versus recall and the interface implications. Purpose: Explains why showing where something came from removes a memory task. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. It does not discuss motion; the application is this lesson's own. Fallback: R31.

## Lesson 4: Reduced motion is not an afterthought

Stable ID: m09-l04-v1. Core. Areas 9. Optional effort ~120 min.

**Objective.** Turn on your own device's reduced-motion setting, design an alternative for every animation you kept, and state which are essential enough to survive in a reduced form.

**Bring forward.** Your kept animations and transition specifications.

Motion makes some people ill. The setting exists on every device you are designing for, and a product that ignores it is unusable for those people rather than merely unfashionable.

### Learn

Vestibular disorders are common enough that any product with an audience will have users affected by them, and large or unexpected movement can cause genuine nausea and dizziness rather than mild annoyance. Every major operating system therefore exposes a reduced-motion setting, and the assigned page lists exactly where it lives on each — which means you can turn it on for yourself in under a minute and see what your design does.

The right response is replacement rather than deletion. If a panel's entry explained where it came from, removing the animation entirely removes the explanation; a quick fade keeps the change legible without moving anything across the screen. The assigned example does exactly this: it swaps an animation for a gentler one rather than switching it off.

Some motion is essential and must persist in a reduced form. A loading indicator communicates that the system is working, and a person who has asked for less motion still needs to know that. The reduced version should be smaller, local and non-oscillating — a subtle pulse or a text change rather than a spinning element crossing a large area.

The riskiest patterns are the large ones: full-screen transitions, parallax scrolling, background video, anything that moves a large area or moves it repeatedly. Those are the first to cut when the setting is on, and honestly they are often worth cutting for everyone, since they cost the most and explain the least.

**Common misconception.** “We will add reduced motion at the end.” Designed at the end it becomes “disable all animation”, which strips the explanatory work along with the decoration. Designing the alternative alongside the original takes minutes and keeps the meaning.

### Worked example

With the setting on, three of the five kept animations needed alternatives. The filter panel's scale-and-fade became a fade of 120ms with no movement, keeping the change legible. The detail view's expansion became a cross-fade, and the row it came from stayed highlighted so the relationship survived. The loading spinner — essential — became a small pulsing dot with the label “Booking…”, local rather than crossing the screen. The confirmation flourish was removed entirely under the setting, since it explained nothing. Testing was done on the researcher's own phone with the setting on, and the result recorded with the device and version.

#### Reduced motion is not an afterthought

Turn on your own device's reduced-motion setting, design an alternative for every animation you kept, and state which are essential enough to survive in a reduced form.

**Where to work:** Your own device: the assigned page lists where the setting lives on Windows, macOS, iOS, Android and Linux. A local HTML file with a reduced-motion media query shows both versions side by side with no account or tooling.

- Starting material: Your animation audit and the three transitions you designed.
- Create HaruCourse/Practice/m09-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Reduced motion is not an afterthought

Input artifact: Your animation audit and the three transitions you designed.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] The reduced-motion setting turned on and what changed recorded
- [ ] An alternative specified for every kept animation
- [ ] A list of essential motion with its reduced form
- [ ] Anything removed entirely, with the reason

## 1. Turn it on and read
- Read the assigned page and find the setting on your own device.
- Turn it on and note which apps visibly change behaviour.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Classify your motion
- Mark each kept animation essential, explanatory or decorative.
- For essential motion, design a smaller local version.
- For explanatory motion, design a fade that preserves the meaning.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Cut the risky patterns
- Identify anything moving a large area, repeating, or parallax.
- Remove those entirely under the setting.
- Ask whether each is worth keeping even without the setting.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Test with the setting on
- Walk one complete task with reduced motion enabled.
- Record anything that became confusing because a relationship was lost.
- Repair by adding a gentler change, not by restoring the movement.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record honestly
- Write the device and setting you tested with.
- State that your own test is not testing with affected users.
- Save both versions of every animation.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The setting was turned on and the test recorded: [evidence reference]
- Every kept animation has a reduced alternative: [evidence reference]
- Essential motion survives in a reduced form: [evidence reference]
- Large-area and repeating motion is removed under the setting: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Follow the assigned page to your platform's setting, turn it on and walk your task again, writing what you saw.

</details>

<details>
<summary>Hint 2</summary>

For each animation write what the person learns from it, then design a change that teaches the same thing without movement.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m09-l04-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The setting was turned on and the test recorded: A record of enabling reduced motion on a named device and walking one complete task. Every kept animation has a reduced alternative: A paired specification: full version and reduced version, for each animation retained. Essential motion survives in a reduced form: Loading and progress indicators specified in a smaller, local, non-oscillating form. Large-area and repeating motion is removed under the setting: A list of large, parallax or repeating motion, each removed when the setting is on.

**Bring forward:** Rare and credible in a junior portfolio: both versions of each animation with a recorded device test, and an honest statement that self-testing is not testing with affected users. Module handoff: Choose prototype fidelity in m10


### Practice and pause points

- Turn it on and read (~20 min): Read the assigned page and find the setting on your own device. Turn it on and note which apps visibly change behaviour.
- Classify your motion (~30 min): Mark each kept animation essential, explanatory or decorative. For essential motion, design a smaller local version. For explanatory motion, design a fade that preserves the meaning.
- Cut the risky patterns (~25 min): Identify anything moving a large area, repeating, or parallax. Remove those entirely under the setting. Ask whether each is worth keeping even without the setting.
- Test with the setting on (~30 min): Walk one complete task with reduced motion enabled. Record anything that became confusing because a relationship was lost. Repair by adding a gentler change, not by restoring the movement.
- Record honestly (~15 min): Write the device and setting you tested with. State that your own test is not testing with affected users. Save both versions of every animation.

Pause after any step; save the artifact and next action.

**Free tool path.** Your own device: the assigned page lists where the setting lives on Windows, macOS, iOS, Android and Linux. A local HTML file with a reduced-motion media query shows both versions side by side with no account or tooling.

### Output

The reduced-motion setting turned on and what changed recorded; An alternative specified for every kept animation; A list of essential motion with its reduced form; Anything removed entirely, with the reason

### Checks

- Why is “disable all animation” the wrong implementation? Answer: Because it strips explanation along with decoration. A person who asked for less motion still needs to know where a panel came from and that something is loading.
- Which motion must survive in reduced form? Answer: Essential motion — chiefly that the system is working. It should become smaller, local and non-oscillating, or be replaced by a text change.
- What can you claim after testing with the setting yourself? Answer: That the design responds to the setting on your device. Not that it is comfortable for people with vestibular disorders; that needs those people, and your write-up should say so.

### Rubric and remediation

**The setting was turned on and the test recorded**

Adequate evidence: A record of enabling reduced motion on a named device and walking one complete task.

- 0 — Not tested.
- 1 — Claimed without a device or task named.
- 2 — Enabled on a named device with the task walked and results recorded.
- 3 — As adequate, and the record notes which other apps changed, showing the setting was genuinely active.

If below 2: Follow the assigned page to your platform's setting, turn it on and walk your task again, writing what you saw. Show at recheck: The test record.

**Every kept animation has a reduced alternative**

Adequate evidence: A paired specification: full version and reduced version, for each animation retained.

- 0 — No alternatives.
- 1 — Alternatives for some, or a blanket disable.
- 2 — Each animation has a specified gentler alternative.
- 3 — As adequate, and each alternative preserves the explanation the original carried.

If below 2: For each animation write what the person learns from it, then design a change that teaches the same thing without movement. Show at recheck: The paired specifications.

**Essential motion survives in a reduced form**

Adequate evidence: Loading and progress indicators specified in a smaller, local, non-oscillating form.

- 0 — Essential motion removed under the setting.
- 1 — Retained unchanged, defeating the setting.
- 2 — Reduced in size and movement while still communicating.
- 3 — As adequate, and a text alternative is specified for the case where any motion is unwelcome.

If below 2: Replace the spinner with a small local pulse plus a label change, and check it still says the system is working. Show at recheck: The essential-motion specification.

**Large-area and repeating motion is removed under the setting**

Adequate evidence: A list of large, parallax or repeating motion, each removed when the setting is on.

- 0 — Retained.
- 1 — Reduced but still moving a large area.
- 2 — Removed under the setting, with the decision recorded.
- 3 — As adequate, and one is removed for everyone after considering what it cost and explained.

If below 2: List everything that moves more than a small region or repeats. Remove each under the setting first, then ask whether it earns its place at all. Show at recheck: The removal list.

### Portfolio contribution

Rare and credible in a junior portfolio: both versions of each animation with a recorded device test, and an honest statement that self-testing is not testing with affected users.

### Assigned resources

- R64: [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — The reduce and no-preference values, the platform settings list, and the worked example that swaps rather than removes an animation. Purpose: Tells you how the request reaches your design and where to turn it on for yourself. Effort: 10–20 min. Free reading, no account. Verified 2026-09-06; the page states its own last modification as 10 June 2026. It documents the signal, not motion design: no durations, no easing guidance and no conformance criteria. Fallback: R13.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The check on moving, flashing and blinking content. Purpose: Gives a preliminary check for motion that runs without the person asking for it. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. The checks are preliminary and passing them is not conformance; they are not a substitute for testing with affected people. Fallback: R28.

## Lesson 5: Gestures and what people can discover

Stable ID: m09-l05-v1. Core. Areas 9. Optional effort ~120 min.

**Objective.** Specify the gestures your product uses, give every one a visible alternative, and record which were discoverable when someone tried the product without being told.

**Bring forward.** Your m08 list and card components and the m07 flows they appear in.

A gesture nobody discovers is a feature nobody has. Gestures are shortcuts for people who already know, not routes for people who do not.

### Learn

Discoverability is the whole problem. A swipe on a list row is invisible: nothing on screen says it exists, so only people who have met the pattern elsewhere will try it. That makes it a fine accelerator and a poor primary route, and the rule follows directly — if the only way to remove an item is to swipe, then for a large share of your users the item cannot be removed.

Convention does the teaching you cannot do yourself. Swipe-to-go-back, pull-to-refresh and long-press-for-options carry meaning because other products established them, and a product that reassigns them creates errors rather than delight. Where you genuinely need a new gesture, treat it as an accelerator for repeat users and design the visible route as the real one.

Destructive gestures deserve particular care because they are easy to trigger by accident: a swipe while scrolling with a thumb on a moving bus is a slip, not a decision. Either confirm, or — usually better — perform the action and offer a real undo for long enough that a person who did not mean it can recover.

Physical circumstances break gestures. Someone holding a child, with a cracked screen corner, with limited dexterity or with one hand on a rail cannot perform a precise two-finger action. The visible alternative is not a courtesy for edge cases; it is the route most of your users will actually take.

**Common misconception.** “Gestures make the interface cleaner.” They make it emptier, which is not the same. The controls are still needed; they have been moved somewhere the person has to already know about, and the cleanliness is paid for by everyone who does not.

### Worked example

The shortlist row used swipe-left to remove, with no visible control. Three people were asked to remove an item without being told how; none swiped, two looked for a control and one opened the detail view. The revision kept the swipe as an accelerator and added a visible quiet remove control on every row. Removal became immediate with a five-second undo rather than a confirmation dialogue. Pull-to-refresh was left alone because it matched the platform convention, and a proposed two-finger gesture for changing dates was dropped: it was undiscoverable, unconventional and impossible one-handed.

#### Gestures and what people can discover

Specify the gestures your product uses, give every one a visible alternative, and record which were discoverable when someone tried the product without being told.

**Where to work:** Paper prototypes work for discoverability: hand someone the printed screen and ask them to do the task, then watch what they reach for. For real gesture behaviour, open a local HTML page on your own phone.

- Starting material: Your m08 list components and the flows using them.
- Create HaruCourse/Practice/m09-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Gestures and what people can discover

Input artifact: Your m08 list components and the flows using them.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A list of every gesture with its visible alternative
- [ ] Discoverability results from three people who were not told
- [ ] Destructive gestures specified with undo or confirmation
- [ ] Any gesture removed for being unconventional or one-handed-impossible

## 1. List the gestures
- List every gesture your design uses or assumes.
- Mark which are platform conventions and which you invented.
- Mark which are the only route to their action.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Add visible alternatives
- Give every gesture a visible control that does the same thing.
- Keep the gesture as an accelerator where it matches convention.
- Remove any invented gesture that has no clear benefit.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Test discoverability
- Ask three people to complete the action without telling them how.
- Record what each reached for first.
- Note anyone who gave up or used a longer route.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Make destruction recoverable
- For each destructive gesture, specify undo with a stated window.
- Reserve confirmation for actions that cannot be undone.
- Check the undo is reachable one-handed.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Write which gestures survived and why.
- Record what a person with one hand free cannot do.
- Save the specification with the discoverability results.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Every gesture has a visible alternative: [evidence reference]
- Discoverability was tested with people who were not told: [evidence reference]
- Destructive gestures are recoverable: [evidence reference]
- One-handed and low-dexterity use is considered: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

For each gesture, design the control someone would use if they had never met the gesture. That control is the real route.

</details>

<details>
<summary>Hint 2</summary>

Hand someone the screen and state the goal only. Say nothing else, and write down what they try.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m09-l05-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every gesture has a visible alternative: A paired list: gesture and the visible control performing the same action. Discoverability was tested with people who were not told: Records from three people attempting the action unaided, with what each reached for. Destructive gestures are recoverable: Undo specified with a window, or a confirmation where the action is irreversible. One-handed and low-dexterity use is considered: A written note of which gestures fail one-handed or with limited dexterity, and what those people use instead.

**Bring forward:** The unaided discoverability test is the valuable part: three people reaching for the wrong thing is more convincing than any argument about affordances. Module handoff: Choose prototype fidelity in m10


### Practice and pause points

- List the gestures (~20 min): List every gesture your design uses or assumes. Mark which are platform conventions and which you invented. Mark which are the only route to their action.
- Add visible alternatives (~30 min): Give every gesture a visible control that does the same thing. Keep the gesture as an accelerator where it matches convention. Remove any invented gesture that has no clear benefit.
- Test discoverability (~30 min): Ask three people to complete the action without telling them how. Record what each reached for first. Note anyone who gave up or used a longer route.
- Make destruction recoverable (~25 min): For each destructive gesture, specify undo with a stated window. Reserve confirmation for actions that cannot be undone. Check the undo is reachable one-handed.
- Record (~15 min): Write which gestures survived and why. Record what a person with one hand free cannot do. Save the specification with the discoverability results.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper prototypes work for discoverability: hand someone the printed screen and ask them to do the task, then watch what they reach for. For real gesture behaviour, open a local HTML page on your own phone.

### Output

A list of every gesture with its visible alternative; Discoverability results from three people who were not told; Destructive gestures specified with undo or confirmation; Any gesture removed for being unconventional or one-handed-impossible

### Checks

- Why can a gesture not be the only route to an action? Answer: Because it is invisible: only people who already know the pattern will find it. Everyone else experiences the action as missing.
- Why prefer undo to confirmation for a swipe? Answer: Because a swipe is easily triggered by accident while scrolling, and a confirmation on every swipe destroys the speed the gesture existed for. Undo protects the accident without taxing the intention.
- What does a one-handed check reveal? Answer: Which actions require a grip or a precision most people do not have while standing, carrying something, or using a damaged screen — which is a large share of real use.

### Rubric and remediation

**Every gesture has a visible alternative**

Adequate evidence: A paired list: gesture and the visible control performing the same action.

- 0 — Gestures are the only route to some actions.
- 1 — Alternatives exist for some gestures.
- 2 — Every gesture has a visible equivalent.
- 3 — As adequate, and the visible route is treated as primary in the specification.

If below 2: For each gesture, design the control someone would use if they had never met the gesture. That control is the real route. Show at recheck: The paired list.

**Discoverability was tested with people who were not told**

Adequate evidence: Records from three people attempting the action unaided, with what each reached for.

- 0 — Not tested.
- 1 — Tested after explaining the gesture.
- 2 — Three unaided attempts recorded with first actions.
- 3 — As adequate, and the results changed the design rather than confirming it.

If below 2: Hand someone the screen and state the goal only. Say nothing else, and write down what they try. Show at recheck: The discoverability records.

**Destructive gestures are recoverable**

Adequate evidence: Undo specified with a window, or a confirmation where the action is irreversible.

- 0 — Destructive gestures with no recovery.
- 1 — Confirmation on every swipe, removing the speed benefit.
- 2 — Undo with a stated window, confirmation reserved for the irreversible.
- 3 — As adequate, and the undo control is reachable one-handed.

If below 2: Specify what happens in the five seconds after a destructive gesture and where the person taps to reverse it. Show at recheck: The recovery specification.

**One-handed and low-dexterity use is considered**

Adequate evidence: A written note of which gestures fail one-handed or with limited dexterity, and what those people use instead.

- 0 — Not considered.
- 1 — Mentioned without consequences.
- 2 — Specific failures named with the alternative route stated.
- 3 — As adequate, and a multi-finger or precision gesture was removed as a result.

If below 2: Try every gesture with one hand while holding something in the other. Anything you cannot do is not available to many of your users. Show at recheck: The one-handed notes.

### Portfolio contribution

The unaided discoverability test is the valuable part: three people reaching for the wrong thing is more convincing than any argument about affordances.

### Assigned resources

- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 6, recognition rather than recall, and heuristic 7, flexibility and efficiency of use. Purpose: Frames gestures as accelerators for experienced users layered over visible routes. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. It does not cover touch gestures specifically; the discoverability rules here are the course's own. Fallback: R11.
- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — Slips, prevention and undo. Purpose: Explains why an accidental swipe is a slip and why undo suits it better than confirmation. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Prevention techniques are options rather than a checklist; the gesture application is this lesson's. Fallback: R02.

## Lesson 6: Keyboard behaviour, specified key by key

Stable ID: m09-l06-v1. Core. Areas 9. Optional effort ~120 min.

**Objective.** Write the expected keyboard behaviour for two of your components, key by key, against the assigned pattern, and test any built version against your own specification.

**Bring forward.** Two interactive components from your m08 inventory — ideally one simple and one composite.

Keyboard behaviour is designed or it is accidental. Written down before the build, it costs an hour; discovered afterwards, it is a rewrite.

### Learn

The tab-versus-arrow distinction is what separates a usable composite component from an exhausting one. If every tab in a tab strip is a tab stop, a keyboard user passes through all of them to reach the content; the established pattern makes the strip one stop and the arrow keys move within it. Getting this right is invisible to mouse users and decisive for everyone else.

Activation keys carry meaning. A button responds to both enter and space; a link responds to enter. Reproducing that correctly matters because people have learned it, and a control that looks like a button but ignores space is a small, repeated failure that is hard to articulate and easy to feel.

Escape has an obligation beyond closing: focus must return somewhere sensible, normally the control that opened the thing. A dialogue that closes and drops focus back to the top of the document forces the keyboard user to travel all the way back, which is the equivalent of scrolling a mouse user to the top of the page every time they close something.

The assigned patterns give you the expected key behaviour for the common components, and writing your own table from them before building is the point of this lesson. They are authoring practices rather than a conformance standard, and they cover semantics and keys only — nothing about how the component should look or move — so your table is a specification you still have to test against a real build.

**Common misconception.** “Keyboard support means everything is reachable by tab.” Reachable is not usable. A composite where every element is a tab stop is technically reachable and practically unbearable, and a dialogue that traps focus with no escape is reachable and inescapable.

### Worked example

The date-selection component and the filter panel were specified before building. For the date component: one tab stop for the group, arrow keys to move between dates, enter or space to select, home and end for the first and last available, escape to close returning focus to the field. For the filter panel: focus moves into the panel when it opens, escape closes it and returns focus to the filter button, and tab cycles inside while it is open. A rough build was tested against the table and failed two rows — escape did nothing, and focus returned to the document top — both recorded as defects rather than as design changes.

#### Keyboard behaviour, specified key by key

Write the expected keyboard behaviour for two of your components, key by key, against the assigned pattern, and test any built version against your own specification.

**Where to work:** Writing the table needs nothing. Testing it needs a rough local HTML file and your own keyboard; where nothing is built, record every row as untested rather than assumed.

- Starting material: Two components from your inventory, one composite.
- Create HaruCourse/Practice/m09-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Keyboard behaviour, specified key by key

Input artifact: Two components from your inventory, one composite.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A key-by-key table for two components
- [ ] Tab and arrow behaviour distinguished for the composite
- [ ] Escape behaviour including where focus returns
- [ ] Test results against the table, or an explicit untested note

## 1. Read the patterns
- Read the assigned pattern pages for your two components.
- Copy out their keyboard interaction sections in your own words.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Write the tables
- For each component write one row per key: key, context, expected behaviour.
- Distinguish what tab does from what the arrow keys do.
- Include home, end and escape where the pattern uses them.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Specify focus movement
- State where focus goes when the component opens.
- State where focus returns when it closes or is cancelled.
- Check focus never lands somewhere invisible or off screen.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Test or mark untested
- Build a rough version and test every row of the table.
- Record pass or fail per row with what happened.
- Where nothing is built, mark every row untested rather than assumed.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record the gaps
- List the failures as defects for the build, not as design changes.
- Note where you departed from the pattern and why.
- Save both tables with their results.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- A key-by-key table exists for both components: [evidence reference]
- Tab and arrow roles are distinguished: [evidence reference]
- Focus movement on open and close is specified: [evidence reference]
- Results are recorded, including what was untested: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Copy the pattern's keyboard section into a table and adapt each row to your component.

</details>

<details>
<summary>Hint 2</summary>

Rewrite the composite's rows: one stop for the group, arrows to move inside, and state the wrap behaviour.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m09-l06-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** A key-by-key table exists for both components: Two tables with one row per key giving context and expected behaviour. Tab and arrow roles are distinguished: A composite component where tab moves between components and arrows move within. Focus movement on open and close is specified: Stated destinations for focus when the component opens, closes and is cancelled. Results are recorded, including what was untested: Pass or fail per row against a build, or an explicit statement that no build exists and every row is untested.

**Bring forward:** A key table with test results is exactly the artefact an engineer wants and most portfolios lack. Include the untested rows honestly. Module handoff: Choose prototype fidelity in m10


### Practice and pause points

- Read the patterns (~25 min): Read the assigned pattern pages for your two components. Copy out their keyboard interaction sections in your own words.
- Write the tables (~30 min): For each component write one row per key: key, context, expected behaviour. Distinguish what tab does from what the arrow keys do. Include home, end and escape where the pattern uses them.
- Specify focus movement (~25 min): State where focus goes when the component opens. State where focus returns when it closes or is cancelled. Check focus never lands somewhere invisible or off screen.
- Test or mark untested (~25 min): Build a rough version and test every row of the table. Record pass or fail per row with what happened. Where nothing is built, mark every row untested rather than assumed.
- Record the gaps (~15 min): List the failures as defects for the build, not as design changes. Note where you departed from the pattern and why. Save both tables with their results.

Pause after any step; save the artifact and next action.

**Free tool path.** Writing the table needs nothing. Testing it needs a rough local HTML file and your own keyboard; where nothing is built, record every row as untested rather than assumed.

### Output

A key-by-key table for two components; Tab and arrow behaviour distinguished for the composite; Escape behaviour including where focus returns; Test results against the table, or an explicit untested note

### Checks

- Why should a composite component be one tab stop? Answer: So a keyboard user can pass it or enter it. Making every child a tab stop forces them through the whole set before reaching anything else.
- Where should focus go when a dialogue closes? Answer: To the control that opened it. Dropping focus to the document start makes the person travel back through everything they had already passed.
- Are the assigned patterns a standard you must meet? Answer: No, they are authoring guidance. Cite them, write your table from them, then test the build — meeting the pattern on paper proves nothing about the implementation.

### Rubric and remediation

**A key-by-key table exists for both components**

Adequate evidence: Two tables with one row per key giving context and expected behaviour.

- 0 — Keyboard mentioned in prose only.
- 1 — One component specified.
- 2 — Both specified key by key.
- 3 — As adequate, and the tables cover the keys the pattern lists rather than only tab and enter.

If below 2: Copy the pattern's keyboard section into a table and adapt each row to your component. Show at recheck: The two key tables.

**Tab and arrow roles are distinguished**

Adequate evidence: A composite component where tab moves between components and arrows move within.

- 0 — Every child is a tab stop.
- 1 — Distinction asserted but not specified per key.
- 2 — Tab and arrow behaviour specified separately.
- 3 — As adequate, and the specification says what happens at the ends of the set.

If below 2: Rewrite the composite's rows: one stop for the group, arrows to move inside, and state the wrap behaviour. Show at recheck: The revised composite table.

**Focus movement on open and close is specified**

Adequate evidence: Stated destinations for focus when the component opens, closes and is cancelled.

- 0 — Focus movement unspecified.
- 1 — Opening specified but not the return.
- 2 — Both specified, with cancellation included.
- 3 — As adequate, and the specification forbids focus landing off screen or on an invisible element.

If below 2: Write three sentences: focus on open, focus on close, focus on escape. Any missing one will be decided at build time. Show at recheck: The focus specification.

**Results are recorded, including what was untested**

Adequate evidence: Pass or fail per row against a build, or an explicit statement that no build exists and every row is untested.

- 0 — Behaviour claimed without testing.
- 1 — Partially tested with results unrecorded.
- 2 — Every row marked tested with a result, or untested honestly.
- 3 — As adequate, and failures are recorded as build defects with the expected behaviour restated.

If below 2: Build a rough page with the two components and walk your tables row by row. Record what happens, not what should. Show at recheck: The tables with results.

### Portfolio contribution

A key table with test results is exactly the artefact an engineer wants and most portfolios lack. Include the untested rows honestly.

### Assigned resources

- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — The pattern pages for your two components, read for their Keyboard Interaction sections. Purpose: Supplies the expected key behaviour your tables are written from. Effort: 45–90 selected min. Free reading, no account. Verified 2026-09-06; pages carry no date. Semantics and keyboard only — no visual design, no motion — and it is authoring guidance rather than a conformance standard, so the build still has to be tested. Fallback: R14.
- R14: [W3C: forms tutorial](https://www.w3.org/WAI/tutorials/forms/) — The sections on labels and on notifying users of errors, read for focus behaviour around validation. Purpose: Connects keyboard focus to the error handling you specified in m07 and m08. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. It covers form accessibility rather than composite widget keyboard patterns, which is why the patterns resource carries this lesson. Fallback: R10.

## Lesson 7: Where focus goes when things change

Stable ID: m09-l07-v1. Core. Areas 9. Optional effort ~120 min.

**Objective.** Specify focus behaviour for four situations — opening, closing, content replacing, and an error appearing — and check that nothing your product does moves a person's place without telling them.

**Bring forward.** Your key tables and the m08 message and state specifications.

Focus is the keyboard user's cursor and the screen-reader user's position. Moving it carelessly is like scrolling someone else's page while they are reading.

### Learn

Four moments deserve explicit decisions. Opening something — a panel, a dialogue — usually means focus moves into it, or the person's next tab lands somewhere unrelated. Closing means focus returns to the opener. Content replacing itself, as in a filtered list, usually means focus should stay where it is while the change is announced. An error appearing means focus moves to it, or to the first field concerned, so the person meets the problem rather than hunting for it.

Unrequested focus movement is disorienting in the same way as an unrequested scroll. A page that steals focus to a newsletter field, or that resets focus to the top after each filter change, makes keyboard navigation feel like being pushed. The rule is simple: move focus when the person's action implies a new place to be, and leave it alone otherwise.

Silently inserted content is invisible to anyone not looking at that part of the screen. Ten new results appearing below the fold, or an inline warning added above a field, needs either an announcement or focus, depending on urgency. This is the same obligation as the message design in m08, expressed for people who are not scanning visually.

The cheapest test is to tab through your own component while watching only the focus indicator. If you lose track of where you are for even one step, so will someone who cannot see the whole layout at once — and if the indicator disappears entirely on some surface, that step is a hole in the interface.

**Common misconception.** “Screen-reader support is a development task.” Where focus moves is a design decision with visible consequences for sighted keyboard users too. Left to implementation it becomes whatever the framework does, which is usually nothing or the document top.

### Worked example

Four rules were written. Opening the filter panel moves focus to its first control. Closing it — by escape or by the close control — returns focus to the filter button. Applying a filter leaves focus on the control and announces “12 classes match”, because moving focus to the list would lose the person's place in the filters. A validation error moves focus to the first field with a problem and the message is tied to that field. A fifth situation was found while testing: after removing a shortlist item, focus was landing on the document top, which was recorded as a defect with the expected behaviour — focus should move to the next item, or to the list heading when the list is now empty.

#### Where focus goes when things change

Specify focus behaviour for four situations — opening, closing, content replacing, and an error appearing — and check that nothing your product does moves a person's place without telling them.

**Where to work:** A rough local HTML page and your own keyboard. If a screen reader is already on your device — the assigned catalog entry names the free ones — try one step with it, and record that as a preliminary check rather than a test with disabled users.

- Starting material: Your key tables and the m08 message specifications.
- Create HaruCourse/Practice/m09-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Where focus goes when things change

Input artifact: Your key tables and the m08 message specifications.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Focus rules for opening, closing, replacing content and errors
- [ ] A list of places focus currently moves without reason
- [ ] A visible focus indicator specified for every surface
- [ ] Tab-through results with any lost-position steps named

## 1. Read and list the moments
- Re-read the assigned pattern guidance on focus movement.
- List every moment in your product where content opens, closes, replaces or fails.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Write the four rules
- State where focus goes on open and where it returns on close.
- State whether focus moves when content is replaced, and what is announced.
- State where focus goes when an error appears.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Find unrequested movement
- Walk your flows looking for focus moving when the person did not ask.
- Record each and decide whether to remove or justify it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Test the indicator
- Tab through each screen and watch only the focus indicator.
- Note any step where you lose track of your position.
- Check the indicator is visible on every surface colour you use.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record honestly
- Write which rules you could verify and which remain untested.
- State that your own checks are not testing with disabled users.
- Save the rules and the tab-through results.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Focus rules cover open, close, replace and error: [evidence reference]
- Unrequested focus movement is found and resolved: [evidence reference]
- The focus indicator is specified for every surface: [evidence reference]
- Results distinguish what was verified from what was not: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Write one sentence per situation. Any missing sentence becomes whatever the framework does.

</details>

<details>
<summary>Hint 2</summary>

Walk each flow watching the indicator. Every unexplained jump is an instance.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m09-l07-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Focus rules cover open, close, replace and error: Four written rules naming the destination in each situation. Unrequested focus movement is found and resolved: A list of places focus moved without a person's action, each removed or justified. The focus indicator is specified for every surface: A specification showing the indicator against each background colour it can appear on. Results distinguish what was verified from what was not: Tab-through results with lost-position steps named, and an explicit statement about untested assistive-technology behaviour.

**Bring forward:** Include the focus rules with your key tables. Together they are the interaction specification an engineer builds from and a reviewer can check. Module handoff: Choose prototype fidelity in m10


### Practice and pause points

- Read and list the moments (~20 min): Re-read the assigned pattern guidance on focus movement. List every moment in your product where content opens, closes, replaces or fails.
- Write the four rules (~30 min): State where focus goes on open and where it returns on close. State whether focus moves when content is replaced, and what is announced. State where focus goes when an error appears.
- Find unrequested movement (~25 min): Walk your flows looking for focus moving when the person did not ask. Record each and decide whether to remove or justify it.
- Test the indicator (~30 min): Tab through each screen and watch only the focus indicator. Note any step where you lose track of your position. Check the indicator is visible on every surface colour you use.
- Record honestly (~15 min): Write which rules you could verify and which remain untested. State that your own checks are not testing with disabled users. Save the rules and the tab-through results.

Pause after any step; save the artifact and next action.

**Free tool path.** A rough local HTML page and your own keyboard. If a screen reader is already on your device — the assigned catalog entry names the free ones — try one step with it, and record that as a preliminary check rather than a test with disabled users.

### Output

Focus rules for opening, closing, replacing content and errors; A list of places focus currently moves without reason; A visible focus indicator specified for every surface; Tab-through results with any lost-position steps named

### Checks

- When should focus move on its own? Answer: When the person's action implies a new place to be — opening a panel, submitting a form with an error. Otherwise leaving focus alone is the respectful default.
- What does silently inserted content cost? Answer: Anyone not looking at that region misses it entirely. New content that matters needs an announcement or focus, chosen by urgency.
- What can a self-run tab-through establish? Answer: That focus is visible and ordered sensibly on your device. It is a preliminary check, not evidence that the product works for people who rely on assistive technology.

### Rubric and remediation

**Focus rules cover open, close, replace and error**

Adequate evidence: Four written rules naming the destination in each situation.

- 0 — No rules.
- 1 — Two or three situations covered.
- 2 — All four covered with destinations named.
- 3 — As adequate, and the replace rule states what is announced instead of moving focus.

If below 2: Write one sentence per situation. Any missing sentence becomes whatever the framework does. Show at recheck: The four rules.

**Unrequested focus movement is found and resolved**

Adequate evidence: A list of places focus moved without a person's action, each removed or justified.

- 0 — Not examined.
- 1 — Noticed without resolution.
- 2 — Each instance removed or justified in writing.
- 3 — As adequate, and one is identified as a defect for the build rather than a design intention.

If below 2: Walk each flow watching the indicator. Every unexplained jump is an instance. Show at recheck: The list with resolutions.

**The focus indicator is specified for every surface**

Adequate evidence: A specification showing the indicator against each background colour it can appear on.

- 0 — Indicator unspecified or removed for aesthetics.
- 1 — Specified for one surface only.
- 2 — Specified and checked on every surface in use.
- 3 — As adequate, and the indicator does not rely on colour alone to be seen.

If below 2: Place the indicator on each surface from your token sheet and check it is visible on all of them. Show at recheck: The indicator specification.

**Results distinguish what was verified from what was not**

Adequate evidence: Tab-through results with lost-position steps named, and an explicit statement about untested assistive-technology behaviour.

- 0 — Claims made without checks.
- 1 — Checks run but limits unstated.
- 2 — Results recorded with limits stated.
- 3 — As adequate, and one preliminary screen-reader observation is recorded as preliminary.

If below 2: Write two lists: what you observed on your device, and what you have not established. Do not merge them. Show at recheck: The results and limits.

### Portfolio contribution

Include the focus rules with your key tables. Together they are the interaction specification an engineer builds from and a reviewer can check.

### Assigned resources

- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — The patterns for a dialogue and a disclosure, read for how focus enters and returns. Purpose: Gives worked focus behaviour for the two situations products most often get wrong. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06; no date on the pages. Guidance rather than a standard, and it covers no visual design; the indicator rules here are the course's own. Fallback: R14.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The keyboard access check. Purpose: Gives a preliminary self-check for reachability and visible focus. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. The page states its checks are preliminary and not conformance, and running them yourself is not testing with disabled participants. Fallback: R28.

## Lesson 8: Direct manipulation: drag, reorder and their consequences

Stable ID: m09-l08-v1. Core. Areas 9. Optional effort ~120 min.

**Objective.** Design one direct-manipulation interaction with a keyboard equivalent, a clear drop target, a recovery path, and a stated decision about what it costs people who cannot drag.

**Bring forward.** Any part of your product where people arrange, reorder or move something.

Dragging feels natural and excludes a lot of people. If you use it, it needs a keyboard route and a way back.

### Learn

Drag and drop is a genuine improvement for arranging things and a genuine barrier for anyone with limited dexterity, a tremor, a touchpad they find awkward, or a screen reader. That does not make it wrong; it makes the equivalent route mandatory. Move up and move down controls, or a keyboard mode where the item is picked up and moved with arrow keys, cover the same task and are usually easy to add once you have decided to.

Three signals make dragging legible: what is draggable, what is currently held, and where it will go. Products routinely provide the second and neglect the first and third, so people learn by accident that a row can be moved, and then guess where it will land. A visible drop indicator — a line, a gap, a highlighted target — is what turns a guess into a decision.

Commit on release and offer a way back. An accidental reorder is a slip, and slips need recovery rather than confirmation; a brief undo is the right instrument, and the message that offers it should say what changed. Reordering that silently persists is unrecoverable for the person who did not notice they had done it.

On touch screens, dragging and scrolling compete for the same gesture, and the resolution has to be deliberate: a long press to enter a drag mode, a dedicated handle, or drag only in a mode the person turned on. Choosing nothing means the product will feel unpredictable — sometimes scrolling, sometimes dragging — which is worse than either.

**Common misconception.** “Drag and drop is intuitive.” It is familiar to people who have used it. It is invisible to people who have not, impossible for some, and ambiguous on touch screens where the same gesture already means scroll.

### Worked example

The shortlist could be reordered by dragging, with no other route. Redesigned: a handle marks each draggable row, a line shows where the item will land, and the drop commits on release with a message — “Moved to position 2. Undo” — lasting several seconds. Keyboard equivalent: focus the handle, press space to pick up, arrow keys to move, space to drop, escape to cancel, matching the assigned pattern conventions. On touch, dragging requires the handle so scrolling keeps working elsewhere. The write-up records that no test with a screen-reader user has been run, so the keyboard route is specified but not validated.

#### Direct manipulation: drag, reorder and their consequences

Design one direct-manipulation interaction with a keyboard equivalent, a clear drop target, a recovery path, and a stated decision about what it costs people who cannot drag.

**Where to work:** Paper works for the drop-target design: cut a row out and move it around the printed list, asking someone where they expect it to land. The keyboard route is written as a key table like the previous lesson's.

- Starting material: One arranging or reordering task from your product.
- Create HaruCourse/Practice/m09-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Direct manipulation: drag, reorder and their consequences

Input artifact: One arranging or reordering task from your product.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A drag interaction with pick-up, drag and drop-target signals
- [ ] A keyboard equivalent specified key by key
- [ ] Undo after a move, with the message wording
- [ ] A stated decision about drag versus scroll on touch

## 1. Choose the task and read
- Choose one arranging task in your product.
- Read the assigned pattern guidance for a comparable component's keys.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Design the three signals
- Show what is draggable, using a handle or an equivalent affordance.
- Show the item while it is held.
- Show where it will land with a visible drop indicator.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Write the keyboard route
- Specify pick up, move, drop and cancel as keys.
- State what is announced at each step.
- Check the route completes the same task, not a reduced version.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Design recovery and touch behaviour
- Specify undo with a window and write the message.
- Decide how drag and scroll are distinguished on touch.
- Check the decision does not break scrolling elsewhere.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record the cost
- Write who cannot use the drag route and what they use instead.
- State what remains untested, including any assistive-technology behaviour.
- Save the specification with the key table.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- All three drag signals are specified: [evidence reference]
- A keyboard equivalent completes the same task: [evidence reference]
- A move is reversible with stated wording: [evidence reference]
- The drag-versus-scroll decision is explicit: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Draw the three moments separately: before pick-up, during, and just before release. Each needs its own signal.

</details>

<details>
<summary>Hint 2</summary>

Write the keys, then walk the task by keyboard on paper. If any arrangement is unreachable, the route is incomplete.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m09-l08-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** All three drag signals are specified: Specifications for the draggable affordance, the held state and the drop indicator. A keyboard equivalent completes the same task: A key table covering pick up, move, drop and cancel, achieving the same result as dragging. A move is reversible with stated wording: Undo specified with a window and a message naming what changed. The drag-versus-scroll decision is explicit: A written rule for how touch distinguishes dragging from scrolling, checked against other scrolling areas.

**Bring forward:** Showing the keyboard equivalent beside the drag interaction demonstrates that you design for the whole audience rather than the demo. Module handoff: Choose prototype fidelity in m10


### Practice and pause points

- Choose the task and read (~20 min): Choose one arranging task in your product. Read the assigned pattern guidance for a comparable component's keys.
- Design the three signals (~30 min): Show what is draggable, using a handle or an equivalent affordance. Show the item while it is held. Show where it will land with a visible drop indicator.
- Write the keyboard route (~30 min): Specify pick up, move, drop and cancel as keys. State what is announced at each step. Check the route completes the same task, not a reduced version.
- Design recovery and touch behaviour (~25 min): Specify undo with a window and write the message. Decide how drag and scroll are distinguished on touch. Check the decision does not break scrolling elsewhere.
- Record the cost (~15 min): Write who cannot use the drag route and what they use instead. State what remains untested, including any assistive-technology behaviour. Save the specification with the key table.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper works for the drop-target design: cut a row out and move it around the printed list, asking someone where they expect it to land. The keyboard route is written as a key table like the previous lesson's.

### Output

A drag interaction with pick-up, drag and drop-target signals; A keyboard equivalent specified key by key; Undo after a move, with the message wording; A stated decision about drag versus scroll on touch

### Checks

- Why is a keyboard equivalent mandatory? Answer: Because dragging is impossible or unreliable for many people. Without an equivalent, the task is unavailable to them rather than merely harder.
- What are the three signals a drag needs? Answer: What can be picked up, what is currently held, and where it will land. Products usually show only the second, leaving people to guess the outcome.
- Why does dragging need a deliberate touch decision? Answer: Because the same gesture already means scroll. Without a handle or a mode, the product behaves unpredictably, which is worse than either behaviour alone.

### Rubric and remediation

**All three drag signals are specified**

Adequate evidence: Specifications for the draggable affordance, the held state and the drop indicator.

- 0 — Only the held state is designed.
- 1 — Two of the three.
- 2 — All three specified.
- 3 — As adequate, and the drop indicator shows the resulting order rather than merely a target.

If below 2: Draw the three moments separately: before pick-up, during, and just before release. Each needs its own signal. Show at recheck: The three specifications.

**A keyboard equivalent completes the same task**

Adequate evidence: A key table covering pick up, move, drop and cancel, achieving the same result as dragging.

- 0 — No keyboard route.
- 1 — A reduced route that cannot reach every position.
- 2 — A full equivalent specified key by key.
- 3 — As adequate, and each step states what is announced for a screen-reader user.

If below 2: Write the keys, then walk the task by keyboard on paper. If any arrangement is unreachable, the route is incomplete. Show at recheck: The key table.

**A move is reversible with stated wording**

Adequate evidence: Undo specified with a window and a message naming what changed.

- 0 — Moves persist silently.
- 1 — Undo mentioned without wording or window.
- 2 — Undo specified with a window and the message written.
- 3 — As adequate, and the message says the new position rather than only offering undo.

If below 2: Write the message a person sees immediately after a move, including how to reverse it. Show at recheck: The undo specification.

**The drag-versus-scroll decision is explicit**

Adequate evidence: A written rule for how touch distinguishes dragging from scrolling, checked against other scrolling areas.

- 0 — Not decided.
- 1 — Decided but untested against normal scrolling.
- 2 — A rule stated and checked so scrolling still works elsewhere.
- 3 — As adequate, and the rule was tried on a real phone rather than reasoned about.

If below 2: Choose a handle, a long press or a mode, then try scrolling the same list on a phone to confirm it still works. Show at recheck: The touch rule and the check.

### Portfolio contribution

Showing the keyboard equivalent beside the drag interaction demonstrates that you design for the whole audience rather than the demo.

### Assigned resources

- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — A comparable pattern, read for how selection, movement and cancellation are expressed as keys. Purpose: Supplies conventions for the keyboard equivalent so it matches what people expect. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06; no date on the pages. It offers no drag-and-drop pattern of its own, so the keyboard route here is adapted rather than quoted. Fallback: R14.
- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — Slips, undo and recovery. Purpose: Frames an accidental move as a slip needing recovery rather than a confirmation. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Prevention techniques are options; the touch drag rules are this lesson's own. Fallback: R02.

## Lesson 9: Scrolling, sticky elements and long lists

Stable ID: m09-l09-v1. Core. Areas 9. Optional effort ~120 min.

**Objective.** Decide what stays fixed while a person scrolls, how a long list ends, and how someone returns to their place after leaving and coming back.

**Bring forward.** Your m07 browse loop and the m08 list and navigation components.

Scrolling is the most-used interaction in your product and usually the least designed.

### Learn

Sticky elements are a permanent tax on the visible area. On a 640-pixel-tall phone viewport, a sticky header and a sticky action bar can take a quarter of the screen before any content appears, which means every scroll shows less and the person scrolls more. The test is whether the element is needed while scrolling — a filter summary or a running total usually is; a logo never is.

Endless lists trade a clear ending for continuous browsing, and the cost falls on people who want to know how much there is, want to reach the footer, or want to come back to where they were. If you use infinite loading, provide a count, keep the position when the person returns, and make sure the footer is still reachable. A “load more” control is often the better trade for a product where people are comparing.

Restoring position is the same requirement the browse loop had in m07, met here in the scroll layer: coming back from a detail view should return the person to the row they left, not the top. Products lose comparison behaviour here quietly, because nobody complains — they just stop comparing and take the first acceptable option.

Content that arrives while a person is reaching for something moves the target under their finger. This is the layout-jump problem from m08 seen from the interaction side, and the answer is the same: reserve space for content that is coming, and insert new content above the viewport only when the person asked for it.

**Common misconception.** “Sticky headers keep navigation available.” They keep it visible, at the cost of content, on the device with the least of it. Available means reachable; a header that returns when the person scrolls up is usually the better trade.

### Worked example

The class list had a sticky header with a logo, a sticky filter bar and a sticky book button — 190 pixels of a 640-pixel viewport. Rebuilt: the logo header scrolls away and returns on scroll up, the filter summary stays because people were observed checking it, and the book button appears only on the detail view where it belongs. The list loads twenty at a time with a count — “Showing 20 of 63” — and a load-more control, so the footer stays reachable. Returning from a detail view restores the row and the filters. New results are appended below the fold only.

#### Scrolling, sticky elements and long lists

Decide what stays fixed while a person scrolls, how a long list ends, and how someone returns to their place after leaving and coming back.

**Where to work:** Paper at phone size, with a window cut out to represent the viewport, shows exactly how much a sticky element costs. A local HTML page shows real scroll and restore behaviour.

- Starting material: Your browse loop and list components.
- Create HaruCourse/Practice/m09-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Scrolling, sticky elements and long lists

Input artifact: Your browse loop and list components.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A decision for each sticky element with its height cost
- [ ] A list ending: a count, a load-more control, or a stated end
- [ ] Scroll position restoration specified for the browse loop
- [ ] A rule preventing content moving under a finger

## 1. Measure the tax
- List every element you intend to keep fixed while scrolling.
- Measure each one's height at phone size and total them.
- Express the total as a share of the viewport.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Justify or drop each
- For each sticky element, write what the person needs it for while scrolling.
- Drop anything that fails, or make it return on scroll up instead.
- Re-measure the remaining total.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Design the list ending
- Choose paging, load-more or infinite loading and state why.
- Show how many items exist in total.
- Check the footer remains reachable.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Specify return and insertion
- Specify that returning from a detail view restores position and filters.
- State where new content is inserted and that nothing moves under a finger.
- Reserve space for content that is loading.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Test on a phone
- Scroll your own design or a comparable page on a real phone.
- Record how much content is visible under the sticky elements.
- Save the decisions with their measurements.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Sticky elements are justified and their cost measured: [evidence reference]
- The list has a stated ending and a total: [evidence reference]
- Position and filters are restored on return: [evidence reference]
- Nothing moves under a finger about to tap: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Measure the total sticky height at phone size and write it as a percentage of the viewport. Then justify each element or remove it.

</details>

<details>
<summary>Hint 2</summary>

Add the total to the list header and check you can reach the footer without fighting the loader.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m09-l09-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Sticky elements are justified and their cost measured: A list of sticky elements with measured heights, a viewport share, and a use-while-scrolling justification each. The list has a stated ending and a total: A chosen loading approach with a visible total and a reachable footer. Position and filters are restored on return: A specification stating what is restored when a person returns from a detail view. Nothing moves under a finger about to tap: A rule about where new content is inserted and reserved space for loading content.

**Bring forward:** The measured sticky tax is a small, specific detail that reads as real product experience rather than portfolio polish. Module handoff: Choose prototype fidelity in m10


### Practice and pause points

- Measure the tax (~20 min): List every element you intend to keep fixed while scrolling. Measure each one's height at phone size and total them. Express the total as a share of the viewport.
- Justify or drop each (~30 min): For each sticky element, write what the person needs it for while scrolling. Drop anything that fails, or make it return on scroll up instead. Re-measure the remaining total.
- Design the list ending (~25 min): Choose paging, load-more or infinite loading and state why. Show how many items exist in total. Check the footer remains reachable.
- Specify return and insertion (~30 min): Specify that returning from a detail view restores position and filters. State where new content is inserted and that nothing moves under a finger. Reserve space for content that is loading.
- Test on a phone (~15 min): Scroll your own design or a comparable page on a real phone. Record how much content is visible under the sticky elements. Save the decisions with their measurements.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper at phone size, with a window cut out to represent the viewport, shows exactly how much a sticky element costs. A local HTML page shows real scroll and restore behaviour.

### Output

A decision for each sticky element with its height cost; A list ending: a count, a load-more control, or a stated end; Scroll position restoration specified for the browse loop; A rule preventing content moving under a finger

### Checks

- What does a sticky element actually cost? Answer: Screen height on every scroll, permanently. On a phone, two sticky bars can consume a quarter of the viewport, so each one has to be needed while scrolling rather than merely convenient.
- What does infinite loading take away? Answer: A sense of how much there is, a reachable footer and, usually, position on return. Those matter most for people comparing options, which is the common case in a browse list.
- Why is restoring scroll position a design requirement? Answer: Because losing it makes comparison expensive, and people respond by comparing less and settling for the first acceptable option — a behaviour change nobody reports as a bug.

### Rubric and remediation

**Sticky elements are justified and their cost measured**

Adequate evidence: A list of sticky elements with measured heights, a viewport share, and a use-while-scrolling justification each.

- 0 — Sticky elements chosen without cost or justification.
- 1 — Justified in general terms with no measurements.
- 2 — Measured and justified individually.
- 3 — As adequate, and at least one was dropped or made to return on scroll up.

If below 2: Measure the total sticky height at phone size and write it as a percentage of the viewport. Then justify each element or remove it. Show at recheck: The measurements and justifications.

**The list has a stated ending and a total**

Adequate evidence: A chosen loading approach with a visible total and a reachable footer.

- 0 — Infinite loading with no count or reachable end.
- 1 — A count without a way to reach the end.
- 2 — Loading approach chosen with a total shown and the footer reachable.
- 3 — As adequate, and the choice is justified by the comparison behaviour observed in m05.

If below 2: Add the total to the list header and check you can reach the footer without fighting the loader. Show at recheck: The list specification.

**Position and filters are restored on return**

Adequate evidence: A specification stating what is restored when a person returns from a detail view.

- 0 — Return resets to the top.
- 1 — Filters kept, position lost.
- 2 — Both restored, with the behaviour stated.
- 3 — As adequate, and the specification covers returning later or on another device.

If below 2: Walk the browse loop and write down everything lost on return. Specify each as preserved. Show at recheck: The restoration specification.

**Nothing moves under a finger about to tap**

Adequate evidence: A rule about where new content is inserted and reserved space for loading content.

- 0 — Content inserted anywhere as it arrives.
- 1 — A rule stated but no space reserved.
- 2 — Insertion rule and reserved space both specified.
- 3 — As adequate, and the rule was checked on a throttled connection where insertion is visible.

If below 2: Specify that content loads into reserved space and that anything arriving above the viewport requires an explicit request. Show at recheck: The insertion rule.

### Portfolio contribution

The measured sticky tax is a small, specific detail that reads as real product experience rather than portfolio polish.

### Assigned resources

- R31: [Laws of UX](https://lawsofux.com/) — The assigned pages only: fittss-law, law-of-proximity and cognitive-load. Purpose: Explains why moving targets and crowded viewports cost accuracy and effort. Effort: 15–25 selected min. Free reading, no account. Verified 2026-09-06. The site publishes no caveats; the sticky-height measurement in this lesson is the evidence, not the law. A printed poster is sold and also offered free; no purchase is required. Fallback: R02.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 1, visibility of system status, and heuristic 3, user control and freedom. Purpose: Frames position, totals and return behaviour as questions of control rather than convenience. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. It gives no guidance on scrolling or sticky layout; those rules are the course's own. Fallback: R11.

## Lesson 10: Editing in place and saving without a button

Stable ID: m09-l10-v1. Core. Areas 9. Optional effort ~120 min.

**Objective.** Design one in-place edit that shows clearly when it is editable, when it is saving and when it has saved, with a defined behaviour for failure and for leaving mid-edit.

**Bring forward.** Any editable value in your product: a booking date, a note, a profile field.

Automatic saving removes a button and adds a burden: the person can no longer see whether their change is safe.

### Learn

In-place editing removes a step and removes a signal. With a save button, the person knows their change is committed when they press it; without one, they have to infer it, and inference under uncertainty produces the same behaviour as an unacknowledged payment — repeated attempts, or leaving without trusting the result. The replacement signal has to be explicit: “Saved” with a timestamp, or a clear transient state that resolves visibly.

The three states need distinct appearances. Viewing shows the value; editing shows that this is now a field with a cursor and a way out; saved shows that the change has been kept. Products that make the view and edit states look identical produce people who type into what they think is a label, or who never realise the value can be changed at all.

Leaving mid-edit is common and must be decided rather than inherited. Options are: save automatically on blur, keep the draft and warn, or discard with a confirmation. Each is defensible; silence is not, because a person who navigates away and returns to find their edit gone will not try again.

Silent failure is the worst outcome of automatic saving. If the network drops, the change must be retained locally, the person must be told plainly that it has not been saved, and a retry must exist. This is the same obligation as the payment states in m07: an unknown outcome is a state, not an absence.

**Common misconception.** “Autosave is simpler for the user.” It is simpler when it works and worse when it does not, because it removes the moment the person knew they were safe. Simplicity here is paid for with a specific, visible save state.

### Worked example

The note on a booking saved automatically with no feedback. Redesigned: the value shows an edit affordance on hover and focus; entering edit shows a bordered field with cancel and done controls; on blur the change saves and the label becomes “Saved 12:04” for several seconds before fading to a small “Saved” marker. If the save fails, the field keeps the text, shows “Not saved — check your connection” and offers retry, and the text is retained locally so a reload does not lose it. Cancel restores the previous value, and leaving mid-edit saves rather than discarding — with that decision recorded, because the alternative was defensible too.

#### Editing in place and saving without a button

Design one in-place edit that shows clearly when it is editable, when it is saving and when it has saved, with a defined behaviour for failure and for leaving mid-edit.

**Where to work:** Write the three states out on paper with the exact wording, then check the transitions in a local HTML file if you want to feel the timing of the saved indicator.

- Starting material: One editable value from your product.
- Create HaruCourse/Practice/m09-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Editing in place and saving without a button

Input artifact: One editable value from your product.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Viewing, editing and saved states specified distinctly
- [ ] A visible save confirmation with its wording and duration
- [ ] Behaviour for leaving mid-edit, stated and justified
- [ ] Failure handling that retains the text and offers retry

## 1. Choose the value and read
- Choose one editable value in your product.
- Read the assigned status heuristic and error guidance.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Design the three states
- Specify how viewing shows that the value is editable.
- Specify the editing state with a cancel and a done route.
- Specify the saved state with its wording and how long it shows.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Decide the leaving case
- Choose save on blur, keep a draft, or discard with confirmation.
- Write the reason for your choice.
- Specify what the person sees when they return.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Design failure
- Specify that text is retained locally when a save fails.
- Write the message: what happened and what to do.
- Provide retry that does not lose the edit.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Check and record
- Check the three states are distinguishable in greyscale.
- Record what you could not verify without a build.
- Save the specification with the wording.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Viewing, editing and saved are visually distinct: [evidence reference]
- The save confirmation is specific and timed: [evidence reference]
- Leaving mid-edit has a stated, justified behaviour: [evidence reference]
- Failure retains the text and offers a retry: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Draw the three states side by side in greyscale. If you cannot tell them apart, add a border, a background or an icon.

</details>

<details>
<summary>Hint 2</summary>

Write the exact words the person sees after a save and how long they stay.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m09-l10-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Viewing, editing and saved are visually distinct: Three specified states, distinguishable in greyscale, with an edit affordance in the viewing state. The save confirmation is specific and timed: Wording for the saved state and how long it remains before settling. Leaving mid-edit has a stated, justified behaviour: A chosen behaviour with a reason and what the person sees on return. Failure retains the text and offers a retry: A failure state keeping the text locally, with plain wording and a retry that preserves the edit.

**Bring forward:** A small interaction specified completely — three states, a failure and a leaving case — demonstrates thoroughness better than a large one specified partially. Module handoff: Choose prototype fidelity in m10


### Practice and pause points

- Choose the value and read (~20 min): Choose one editable value in your product. Read the assigned status heuristic and error guidance.
- Design the three states (~30 min): Specify how viewing shows that the value is editable. Specify the editing state with a cancel and a done route. Specify the saved state with its wording and how long it shows.
- Decide the leaving case (~25 min): Choose save on blur, keep a draft, or discard with confirmation. Write the reason for your choice. Specify what the person sees when they return.
- Design failure (~30 min): Specify that text is retained locally when a save fails. Write the message: what happened and what to do. Provide retry that does not lose the edit.
- Check and record (~15 min): Check the three states are distinguishable in greyscale. Record what you could not verify without a build. Save the specification with the wording.

Pause after any step; save the artifact and next action.

**Free tool path.** Write the three states out on paper with the exact wording, then check the transitions in a local HTML file if you want to feel the timing of the saved indicator.

### Output

Viewing, editing and saved states specified distinctly; A visible save confirmation with its wording and duration; Behaviour for leaving mid-edit, stated and justified; Failure handling that retains the text and offers retry

### Checks

- What does removing the save button remove? Answer: The moment the person knew their change was committed. Something explicit has to replace it, or they are left inferring safety from nothing.
- Why must leaving mid-edit be decided explicitly? Answer: Because all three behaviours are defensible and silence is not. A person who loses an edit without warning stops trusting the field.
- What should a failed automatic save do? Answer: Keep the text, say plainly that it is not saved, and offer a retry. Failing silently is the one option that guarantees lost work.

### Rubric and remediation

**Viewing, editing and saved are visually distinct**

Adequate evidence: Three specified states, distinguishable in greyscale, with an edit affordance in the viewing state.

- 0 — View and edit look identical.
- 1 — Distinct but relying on colour alone.
- 2 — Three distinct states, distinguishable without colour.
- 3 — As adequate, and the viewing state shows the value is editable before the person hovers.

If below 2: Draw the three states side by side in greyscale. If you cannot tell them apart, add a border, a background or an icon. Show at recheck: The three states.

**The save confirmation is specific and timed**

Adequate evidence: Wording for the saved state and how long it remains before settling.

- 0 — No confirmation.
- 1 — A generic tick with no wording or duration.
- 2 — Specific wording with a stated duration and resting state.
- 3 — As adequate, and the confirmation says when it saved rather than only that it did.

If below 2: Write the exact words the person sees after a save and how long they stay. Show at recheck: The confirmation specification.

**Leaving mid-edit has a stated, justified behaviour**

Adequate evidence: A chosen behaviour with a reason and what the person sees on return.

- 0 — Undecided.
- 1 — Decided without a reason or a return state.
- 2 — Chosen, justified, with the return state specified.
- 3 — As adequate, and the alternative you rejected is recorded with its trade-off.

If below 2: Write what happens if the person navigates away with unsaved text, and what they find when they come back. Show at recheck: The leaving behaviour.

**Failure retains the text and offers a retry**

Adequate evidence: A failure state keeping the text locally, with plain wording and a retry that preserves the edit.

- 0 — Failures lose the text or are silent.
- 1 — The message exists but the text is lost on reload.
- 2 — Text retained, message plain, retry preserves the edit.
- 3 — As adequate, and the specification says what happens if the person closes the page before a retry succeeds.

If below 2: Specify local retention explicitly and write the message that appears when the save has not happened. Show at recheck: The failure specification.

### Portfolio contribution

A small interaction specified completely — three states, a failure and a leaving case — demonstrates thoroughness better than a large one specified partially.

### Assigned resources

- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 1, visibility of system status, and heuristic 3, user control and freedom. Purpose: States the obligation that replaces the save button: tell the person where their change stands. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. It does not discuss automatic saving; the state model here is the course's own. Fallback: R11.
- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — Feedback, recovery and undo. Purpose: Frames a failed save as a recoverable event that must be visible rather than an error to log. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Prevention techniques are options rather than a checklist. Fallback: R02.

## Lesson 11: An interaction sheet: durations, easings and rules

Stable ID: m09-l11-v1. Core. Areas 9. Optional effort ~120 min.

**Objective.** Produce an interaction sheet naming your durations, easings and interaction rules, and apply it across three components so nothing is decided twice.

**Bring forward.** Every specification from this module and your m08 token sheet.

Interaction decisions made per component drift. Named values and written rules are how a product feels like one thing.

### Learn

Motion values behave like colour values: unnamed, they multiply. A product ends up with 150, 180, 200 and 220 millisecond transitions that nobody chose and nobody can tell apart, each of which must be maintained. Naming three durations by role, with a number attached, gives you a vocabulary and makes the fourth value an explicit decision rather than an accident.

Easing needs fewer entries than people expect. One curve for things entering, one for things leaving, and one for things moving between positions covers almost everything at this scale. Linear belongs to progress indicators only, where the constant rate carries meaning.

The written rules are the part that survives you. “Anything under 40 pixels of movement uses quick; anything full-screen uses moderate; nothing animates while a person is typing; the price never moves” answers next month's questions without another discussion, and it is the part of a system that a new person can actually follow.

Every entry needs its reduced-motion counterpart recorded beside it, or the alternative gets invented separately per component and drifts. Writing them as pairs is what keeps the reduced experience coherent rather than a set of disconnected exceptions.

**Common misconception.** “Motion values belong in the code.” The numbers can live in code; the decisions and their reasons cannot, or the next person changes 200 to 320 because it felt nicer on their machine and nobody can say why it was 200.

### Worked example

The sheet came to three durations — instant 0ms for state changes, quick 150ms for small movement, moderate 250ms for panels — three easings, and seven rules including “nothing animates while a person is typing”, “the price and remaining places never move”, and “only one thing animates at a time in a view”. Every duration carried its reduced-motion pair, mostly a 120ms fade. Applying the sheet to three components surfaced two exceptions: a 400ms transition nobody could justify, which became moderate, and a genuine missing role for a long list re-sort, which was added deliberately as a fourth duration with the reason recorded.

#### An interaction sheet: durations, easings and rules

Produce an interaction sheet naming your durations, easings and interaction rules, and apply it across three components so nothing is decided twice.

**Where to work:** A written table plus the rules. If you want to compare durations honestly, a local HTML file with three buttons using your three values takes ten minutes and settles arguments quickly.

- Starting material: Your m08 token sheet and this module's specifications.
- Create HaruCourse/Practice/m09-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# An interaction sheet: durations, easings and rules

Input artifact: Your m08 token sheet and this module's specifications.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Named durations and easings with their numbers
- [ ] Written interaction rules that would settle a future case
- [ ] A reduced-motion pairing for every entry
- [ ] Three components using the sheet, with exceptions resolved

## 1. Collect what you used
- List every duration and easing across this module's specifications.
- Mark near-duplicates: values within 50ms of each other.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Name and cut
- Group the values into three roles and give each a name and a number.
- Choose entering, exiting and moving easings.
- Remove every value that does not fit a role.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Write the rules
- Write the rules as sentences a new person could follow.
- Include what must never move and what never animates.
- Include the one-thing-at-a-time rule if your audit found competition.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Pair with reduced motion
- For every duration and pattern, record its reduced-motion alternative.
- Check the pairs preserve the explanation the original carried.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Apply and record exceptions
- Apply the sheet to three components without exception.
- Record every value you had to invent and resolve each deliberately.
- Save the sheet with the rules and the exception list.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Durations and easings are named by role with numbers: [evidence reference]
- Rules are written as sentences that settle cases: [evidence reference]
- Every entry has a reduced-motion pair: [evidence reference]
- Three components use the sheet with exceptions resolved: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

List every value you used, group them into three, and merge anything within 50ms.

</details>

<details>
<summary>Hint 2</summary>

Take the animation you removed in lesson 1 and check whether your rules would have prevented it. If not, tighten them.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m09-l11-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Durations and easings are named by role with numbers: A short table of named durations and easings, with near-duplicates merged. Rules are written as sentences that settle cases: Rules specific enough to decide a future proposal, including what must never move. Every entry has a reduced-motion pair: A paired column recording the reduced alternative for each duration and pattern. Three components use the sheet with exceptions resolved: Three components respecified from the sheet, with every invented value classified and resolved.

**Bring forward:** The interaction sheet with its rules is a systems artefact and a direct bridge to m13. Show the rules; they are the reusable part. Module handoff: Choose prototype fidelity in m10


### Practice and pause points

- Collect what you used (~25 min): List every duration and easing across this module's specifications. Mark near-duplicates: values within 50ms of each other.
- Name and cut (~30 min): Group the values into three roles and give each a name and a number. Choose entering, exiting and moving easings. Remove every value that does not fit a role.
- Write the rules (~25 min): Write the rules as sentences a new person could follow. Include what must never move and what never animates. Include the one-thing-at-a-time rule if your audit found competition.
- Pair with reduced motion (~25 min): For every duration and pattern, record its reduced-motion alternative. Check the pairs preserve the explanation the original carried.
- Apply and record exceptions (~15 min): Apply the sheet to three components without exception. Record every value you had to invent and resolve each deliberately. Save the sheet with the rules and the exception list.

Pause after any step; save the artifact and next action.

**Free tool path.** A written table plus the rules. If you want to compare durations honestly, a local HTML file with three buttons using your three values takes ten minutes and settles arguments quickly.

### Output

Named durations and easings with their numbers; Written interaction rules that would settle a future case; A reduced-motion pairing for every entry; Three components using the sheet, with exceptions resolved

### Checks

- Why name durations by role? Answer: So the vocabulary survives a change of value, and so a fourth number becomes a decision someone has to justify rather than a quiet addition.
- What makes a rule useful? Answer: That it would settle the next proposal without another discussion. “Use motion tastefully” settles nothing; “nothing animates while a person is typing” settles a lot.
- Why pair reduced-motion alternatives in the sheet? Answer: Because otherwise each component invents its own, and the reduced experience becomes a collection of unrelated exceptions rather than a coherent one.

### Rubric and remediation

**Durations and easings are named by role with numbers**

Adequate evidence: A short table of named durations and easings, with near-duplicates merged.

- 0 — Raw values scattered through specifications.
- 1 — Named but with more entries than roles.
- 2 — Three duration roles and three easings, near-duplicates merged.
- 3 — As adequate, and any fourth entry is justified by a role the others cannot serve.

If below 2: List every value you used, group them into three, and merge anything within 50ms. Show at recheck: The named table.

**Rules are written as sentences that settle cases**

Adequate evidence: Rules specific enough to decide a future proposal, including what must never move.

- 0 — No rules, or aspirations rather than rules.
- 1 — Rules too vague to decide a case.
- 2 — Rules that would settle a proposal, including never-move elements.
- 3 — As adequate, and the rules were tested against a case from the lesson 1 audit.

If below 2: Take the animation you removed in lesson 1 and check whether your rules would have prevented it. If not, tighten them. Show at recheck: The rules and the test case.

**Every entry has a reduced-motion pair**

Adequate evidence: A paired column recording the reduced alternative for each duration and pattern.

- 0 — No pairs.
- 1 — Pairs for some entries.
- 2 — Every entry paired, preserving the original explanation.
- 3 — As adequate, and essential motion has a reduced form rather than being removed.

If below 2: Work down the sheet and add the reduced alternative for each row, checking the meaning survives. Show at recheck: The paired sheet.

**Three components use the sheet with exceptions resolved**

Adequate evidence: Three components respecified from the sheet, with every invented value classified and resolved.

- 0 — The sheet is not applied.
- 1 — Applied with untracked exceptions.
- 2 — Applied to three components with each exception resolved.
- 3 — As adequate, and at least one exception was resolved by changing the component rather than the sheet.

If below 2: Respecify each component using only the sheet and record every reach for something not on it. Show at recheck: The three components and the exception list.

### Portfolio contribution

The interaction sheet with its rules is a systems artefact and a direct bridge to m13. Show the rules; they are the reusable part.

### Assigned resources

- R13: [MDN: CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using) — Duration and timing-function configuration, read as the vocabulary your sheet names. Purpose: Gives precise terms for the values you are naming so the sheet is implementable. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Implementation reference only: it recommends no values and gives no design rules, which are yours to write. Fallback: R02.
- R64: [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — The reduce value and the example that swaps rather than removes an animation. Purpose: Ensures the sheet's reduced pairs replace motion rather than deleting meaning. Effort: 10–15 min. Free reading, no account. Verified 2026-09-06; page last modified 10 June 2026. It documents the signal only; the pairing discipline is this lesson's. Fallback: R13.

## Lesson 12: Test the interactions and repair one

Stable ID: m09-l12-v1. Core. Areas 9. Optional effort ~120 min.

**Objective.** Test your interactions with at least three people on a real device, rank what you find by harm, repair the worst with a prediction written first, and record what remains untested.

**Bring forward.** Your interaction sheet, key tables, focus rules and specified components.

Interaction claims are the easiest to believe and the hardest to verify from a specification. Watching three people settles most of them.

### Learn

Device matters more here than anywhere else in the course. Timing, target size, gesture conflicts and scroll behaviour all change between a laptop with a trackpad and a four-year-old phone held in one hand. Testing your interactions on the machine you designed them on will confirm they work and tell you almost nothing.

The double tap is the single most informative observation in interaction testing. It means the person did not believe their first action registered, which is a feedback failure whatever the underlying system did. Count them, note where they happen and treat each as a defect rather than as user error.

Interaction problems mask each other. If focus is invisible and the tab order is wrong, you cannot tell which caused the confusion, so test one at a time where you can: a session on the keyboard route, a session on touch, a session on the reduced-motion setting. Fewer variables per session produces findings you can act on.

The prediction discipline from m07 applies again: write what the repair should change before you re-test, or any outcome will read as an improvement. And write the untested list plainly — no screen-reader testing with a screen-reader user, no testing on a low-end device you do not own, no long-term use — because these are the claims most likely to be assumed later.

**Common misconception.** “It works on my machine, so the interaction is fine.” Your machine has a precise pointer, a fast connection, a large screen and a person who knows where everything is. None of those describe your users.

### Worked example

Three sessions on the participants' own phones. Two double-tapped the book button, because the acknowledgement appeared only after the server replied on a slow connection — the worst finding by harm, since it produced duplicate requests. One could not find the remove control at all, having never met a swipe pattern. One had reduced motion enabled on her own device, which surfaced that the filter panel simply appeared with no fade, unexplained. The prediction for the repair was written first: with an immediate acknowledgement, nobody should tap twice. Re-tested with two new people on their own phones, neither did. The remaining findings were ranked and left recorded rather than repaired in the same pass.

#### Test the interactions and repair one

Test your interactions with at least three people on a real device, rank what you find by harm, repair the worst with a prediction written first, and record what remains untested.

**Where to work:** A rough local HTML page opened on the participants' own phones over a shared connection, or a paper prototype for the parts that are about order rather than timing. No testing platform or device lab is required.

- Starting material: Your interaction specifications and, if possible, a rough build.
- Create HaruCourse/Practice/m09-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Test the interactions and repair one

Input artifact: Your interaction specifications and, if possible, a rough build.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Session records from three people on their own devices
- [ ] A count of double taps and where they happened
- [ ] One repair with its prediction written beforehand and re-tested
- [ ] A ranked list of remaining problems and an untested list

## 1. Plan the sessions
- Read the assigned session guidance and write two tasks.
- Decide which single aspect each session focuses on.
- Extend your consent introduction to cover using their device.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Run three sessions
- Run the tasks on each participant's own phone where possible.
- Record double taps, hesitations and anything they could not find.
- Do not explain gestures or controls during the task.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Rank by harm
- List the problems and rank them by what they cost the person.
- Put duplicate actions and lost work above confusion and slowness.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Predict and repair
- Write what the repair should change before making it.
- Change one thing only.
- Re-test with at least one person who has not seen it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record what is untested
- List every interaction claim you could not verify.
- State plainly that no test with assistive-technology users was run.
- Save the records, the ranking and the repair result.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Sessions were run on participants' own devices: [evidence reference]
- Double taps and lost actions are counted, not interpreted away: [evidence reference]
- The repair carried a prediction and was re-tested: [evidence reference]
- The untested list names assistive technology explicitly: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Re-run at least one session on a phone you did not design on and record the device.

</details>

<details>
<summary>Hint 2</summary>

Re-read your notes for every moment someone acted twice and record it as a defect with its location.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m09-l12-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Sessions were run on participants' own devices: Records naming the devices used, or an explicit note where a participant's device was unavailable. Double taps and lost actions are counted, not interpreted away: A count of repeated actions with where each occurred, treated as defects. The repair carried a prediction and was re-tested: A prediction written before the change, one change made, and a re-test with someone new. The untested list names assistive technology explicitly: A written list of unverified claims, including screen-reader use and devices you do not own.

**Bring forward:** The module's case-study spine: an interaction specification, a device test, a predicted repair and an honest untested list. Module handoff: Choose prototype fidelity in m10


### Practice and pause points

- Plan the sessions (~25 min): Read the assigned session guidance and write two tasks. Decide which single aspect each session focuses on. Extend your consent introduction to cover using their device.
- Run three sessions (~40 min): Run the tasks on each participant's own phone where possible. Record double taps, hesitations and anything they could not find. Do not explain gestures or controls during the task.
- Rank by harm (~20 min): List the problems and rank them by what they cost the person. Put duplicate actions and lost work above confusion and slowness.
- Predict and repair (~25 min): Write what the repair should change before making it. Change one thing only. Re-test with at least one person who has not seen it.
- Record what is untested (~10 min): List every interaction claim you could not verify. State plainly that no test with assistive-technology users was run. Save the records, the ranking and the repair result.

Pause after any step; save the artifact and next action.

**Free tool path.** A rough local HTML page opened on the participants' own phones over a shared connection, or a paper prototype for the parts that are about order rather than timing. No testing platform or device lab is required.

### Output

Session records from three people on their own devices; A count of double taps and where they happened; One repair with its prediction written beforehand and re-tested; A ranked list of remaining problems and an untested list

### Checks

- What does a double tap tell you? Answer: That the person did not believe their first action registered. It is a feedback defect regardless of what the system was doing, and it produces duplicate requests.
- Why test one aspect per session? Answer: Because interaction problems hide behind each other. With invisible focus and a wrong tab order in the same session, you cannot tell which caused the failure.
- Why must the untested list be explicit? Answer: Because unstated gaps get read as tested. Assistive-technology behaviour and low-end devices are the two most commonly assumed, and both need naming.

### Rubric and remediation

**Sessions were run on participants' own devices**

Adequate evidence: Records naming the devices used, or an explicit note where a participant's device was unavailable.

- 0 — Tested only on the designer's machine.
- 1 — Mixed, without recording which device each session used.
- 2 — Participants' own devices used and recorded.
- 3 — As adequate, and at least one older or slower device is included deliberately.

If below 2: Re-run at least one session on a phone you did not design on and record the device. Show at recheck: The session records with devices.

**Double taps and lost actions are counted, not interpreted away**

Adequate evidence: A count of repeated actions with where each occurred, treated as defects.

- 0 — Repeated actions attributed to the participant.
- 1 — Noted without counting or locating.
- 2 — Counted, located and treated as feedback defects.
- 3 — As adequate, and each is linked to the specific acknowledgement that was missing.

If below 2: Re-read your notes for every moment someone acted twice and record it as a defect with its location. Show at recheck: The double-tap record.

**The repair carried a prediction and was re-tested**

Adequate evidence: A prediction written before the change, one change made, and a re-test with someone new.

- 0 — Repairs made without prediction or re-test.
- 1 — Several changes made together.
- 2 — One change, predicted first, re-tested with a fresh participant.
- 3 — As adequate, and a prediction that failed is analysed rather than explained away.

If below 2: Write the prediction now for any repair not yet re-tested, then run it with someone new. Show at recheck: The prediction and re-test result.

**The untested list names assistive technology explicitly**

Adequate evidence: A written list of unverified claims, including screen-reader use and devices you do not own.

- 0 — No untested list.
- 1 — A general note about limited testing.
- 2 — Specific untested claims named, including assistive technology.
- 3 — As adequate, and the list says which untested claim would most change a decision.

If below 2: Go through your key tables and focus rules and mark each row tested or untested. The untested rows are the list. Show at recheck: The untested list.

### Portfolio contribution

The module's case-study spine: an interaction specification, a device test, a predicted repair and an honest untested list.

### Assigned resources

- R05: [GOV.UK: moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing) — Planning and running a session, writing tasks and moderating without leading. Purpose: Supplies the session discipline for testing interactions rather than opinions. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. Written for sessions with a built prototype and a note-taker; alone, run fewer tasks and claim less. Fallback: R12.
- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — Throttling profiles and disabling the cache. Purpose: Lets you reproduce the slow-connection conditions where feedback failures actually appear. Effort: 10–20 selected min. Free documentation, no account; any Chromium browser. Verified 2026-09-06. Throttling simulates bandwidth and latency, not a connection that drops entirely. Fallback: R16.
