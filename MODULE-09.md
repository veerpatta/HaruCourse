# Interaction and motion

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the small-action teaching and tracking standard](docs/COURSE-AUTHORING.md#small-action-and-tracking-contract--12-september-2026). Only Lesson 1 currently uses the new action flow. Published, worksheet-enabled, teaching-refined, learner-validated and assessed are separate states.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: The audit is written work. Where you need to see a transition, a local HTML file with a few CSS rules shows real timing honestly; guessing at durations on paper is where most bad motion decisions are made.

- Starting material: Your m08 screens and state specifications.
- Create HaruCourse/Practice/m09-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. List what moves

- List every animation in your designs, including ones you assumed.
- Include page transitions, hovers, presses and anything that fades.

**You should end up with:** A list of everything in your designs that changes over time, including movement you have only imagined.

Worksheet fields for this step:

- Every animation in your designs, one per line — Walk one whole task slowly. Presses, hovers, screen changes, anything that fades, anything that loads.
- The ones you assumed rather than drew

<details>
<summary>Help with this step</summary>

- **Animation:** Anything that changes over time rather than all at once: a fade, a slide, a colour easing in, a spinning shape.
- **Millisecond:** A thousandth of a second. Motion is written in milliseconds because the useful range is 100 to 400 of them.

Stuck starting? Walk one booking from start to finish and say out loud what changes at each tap.

Is it enough? You have caught the quiet ones: hover states, presses, loading, and the change between screens.

</details>

#### 2. Ask what each answers

**See it first.** Made-up example. Auditing eleven animations in a booking app, and getting the first classification wrong.

- **What I listed first:** Eleven animations, written down as effects: fade, slide, bounce, shimmer. A list of techniques rather than of purposes.
- **My first classification:** I called the screen slide continuity, because the new screen came in from the right. It sounded like an explanation.
- **The question that broke it:** Continuity answers “where did this come from?”. Nothing was to the right a moment earlier. There was no “there” for it to come from.
- **What it actually was:** Decoration, charging about 400 milliseconds on every screen change. Decoration is allowed. Decoration that makes you wait is not.
- **What removing it gave back:** About 1.6 seconds across a four-screen booking. The flow felt faster straight away, and nothing looked broken without the slide.

**The wrong turn:** The wrong turn is naming the label from the movement. A slide always sounds like continuity, which is exactly why the expensive ones survive an audit.

**What it costs:** Classifying by the person’s question is slower, and it will make some of your favourite work look pointless. That is the finding, not a failure of the method.

**Still unknown:** Still unknown: whether the durations you are estimating match what a real device does. Until something runs on a phone, these remain considered guesses.

- For each, write the question a person is asking at that moment.
- Classify it as feedback, continuity, attention or decoration.
- Mark any that answers nothing.

**You should end up with:** Each animation paired with the question a person is asking at that moment, then marked feedback, continuity, attention or decoration.

**Try it with help.** Six animations from a made-up booking app. For each one, decide which question it answers for the person in that moment.

- The Book button darkens the instant your finger lands on it, before anything has been sent.
  - **feedback** — The person acted and the product answered inside the same moment. That is what “did that work?” needs.
  - continuity — Nothing arrived from anywhere. The button stayed where it was and only changed its appearance.
  - attention — Attention motion reports a change the person did not cause. This one is caused by their own finger.
  - decoration — It answers a real question. Remove it and a slow connection leaves the press unacknowledged.
- The filter panel grows out of the filter button that opened it, and shrinks back into that button when it closes.
  - feedback — The press is already acknowledged by the button itself. This one is about the panel’s place, not about the press.
  - **continuity** — It shows where the panel came from and where it will go back to, so the person does not have to remember.
  - attention — The person opened the panel, so nothing is being reported to them that they did not ask for.
  - decoration — Take it away and the panel appears from nowhere. Something is lost, so it is not decoration.
- While you are reading, the remaining-places number changes from 3 to 2 and glows once as it does.
  - feedback — Feedback answers an action the person has just taken. Nobody took an action here.
  - continuity — Nothing travelled from one place to another. The number changed where it stood.
  - **attention** — The person did not cause this and would otherwise miss it. The glow answers “what changed?”.
  - decoration — Without it the number changes in silence and someone books a place that has already gone.
- Tapping a class row expands it into the full detail view, and the row stays visible beneath the top of it.
  - feedback — The tap needs its own acknowledgement, and that should arrive sooner than this movement can.
  - **continuity** — The detail view comes out of the row it belongs to, so the way back is obvious without reading anything.
  - attention — The person caused this by tapping. Attention motion is for changes they did not cause.
  - decoration — It carries the link between the row and the detail. Removing it costs the person that link.
- After you press Pay, the label becomes “Paying” and a small dot pulses beside it until the reply arrives.
  - **feedback** — It answers “did that work?” at once, and keeps answering it for as long as the person is waiting.
  - continuity — Nothing moved from anywhere. The control changed in place.
  - attention — The person pressed Pay, so this is a reply to them rather than news about something else.
  - decoration — Take it away and a slow connection leaves four silent seconds, which is where second presses come from.
- Every screen slides in from the right when you navigate, and you cannot read anything for about 400 milliseconds.
  - feedback — The tap was already acknowledged by the control. This begins afterwards and only delays the result.
  - continuity — Continuity needs a place the content came from. An invented direction is not a place.
  - attention — The person asked for the new screen, so nothing is being reported to them.
  - **decoration** — Nothing was to the right a moment earlier, so it explains nothing, and it charges 400 milliseconds every single time.

**Then:** Now label your own list the same way, and mark every item that answers nothing.

**What to watch for:** The pattern: ask the person’s question first and let the label follow. Feedback answers “did that work?”. Continuity answers “where did this come from?”. Attention answers “what changed?”. Anything left over is decoration.

Worksheet fields for this step:

- For each animation: the question the person is asking at that moment, and its kind
- The ones that answer no question at all

<details>
<summary>Help with this step</summary>

- **Feedback motion:** Answers “did that work?” inside the moment of acting.
- **Continuity motion:** Answers “where did this come from?” when something appears, grows or moves.
- **Attention motion:** Answers “what changed?” for something the person did not cause.
- **Decoration:** Answers nothing. Allowed, but only where it is free and does not repeat.

Stuck starting? Take the first animation on your list and finish the sentence “at this moment the person is wondering …”.

Is it enough? Every line has a question beside it, and the ones with no question are marked.

</details>

#### 3. Count the cost

**See it first.** Made-up example. Costing the motion in a bus timetable app, and getting a total that was far too small.

- **What I wrote down first:** A duration beside each animation. 400 for the screen change, 200 for the panel, 300 for the shimmer while stops load. They added up to 900 milliseconds, which sounded like nothing at all.
- **What the total hid:** I had counted each animation once, because my list had each animation once. Walking one whole journey lookup, the screen change fires four times and the shimmer fires twice.
- **The second thing I had missed:** The number I wanted was not how long the movement lasts. It was how long until the next tap is possible, and the panel refuses taps until it has settled.
- **What the honest count came to:** Around 2.4 seconds of waiting inside one lookup, instead of 900 milliseconds. Same design, same list, a number nearly three times larger.
- **The cost that is not time:** The results list re-sorts itself as new times arrive, under a thumb already on its way down. That one is not measured in milliseconds. It is measured in taps on the wrong bus.

**The wrong turn:** The wrong turn is totalling the durations once each, straight off the list. It is tempting because the list is already written and the sum takes a minute, and it quietly reports the cost of reading your specification rather than the cost of using your product.

**What it costs:** Counting by walking the task means doing the walk slowly, more than once, and ending up with an estimate you cannot defend to the decimal. You are trading a small tidy number for a larger vague one that happens to be true.

**Still unknown:** Still unknown: whether 2.4 seconds across one lookup actually bothers anybody. You have a total and no evidence about where a person starts to feel it, because nobody has been watched using this.

- Estimate the delay each animation adds before the next action is possible.
- Add up the delay across one complete task.
- Mark anything that moves an element the person is about to tap.

**You should end up with:** An estimated delay for each animation, a total across one complete task, and anything that moves under a finger.

Worksheet fields for this step:

- For each animation: how long before the next action is possible, in milliseconds — Where you do not know, say “one elephant” out loud. That is roughly one second, and it is enough to judge by.
- The total delay added across one complete task
- Anything that moves an element the person is about to tap

<details>
<summary>Help with this step</summary>

- **Delay:** The gap between finishing one action and being able to start the next. It is usually longer than the movement, because nothing accepts a tap until the movement has settled.
- **Complete task:** One whole thing a person came to do, from the first tap to the moment they have what they wanted.
- **Moving target:** Something that changes position while a finger is already travelling towards it.

Stuck starting? Count only the time before the next action is possible, not the whole length of the movement.

Is it enough? The total is a number you can say out loud, and it either surprised you or it did not.

</details>

#### 4. Cut and justify

- Remove every animation that answers nothing and costs time.
- Keep decoration only where it delays nothing and does not repeat.
- Write one sentence justifying each animation you keep.

**You should end up with:** Every animation that answers nothing and costs time removed, with one sentence justifying each one you kept.

Worksheet fields for this step:

- What you removed, and the time each removal gives back
- One sentence for each animation you kept, naming the question it answers
- Any decoration you kept, and why it costs nothing

<details>
<summary>Help with this step</summary>

- **Justification:** One sentence naming the question this movement answers. If you cannot write the sentence, the movement is not earning the time it takes.
- **Free:** Costing nobody any waiting. A flourish on a screen where nothing is pending is free; the same flourish in front of a tap is not.

Stuck starting? Start with the most expensive item on your cost list, not the ugliest one.

Is it enough? Nothing survives on the grounds that it looks current, and every kept item names its question.

</details>

#### 5. Write the rule

- Write when your product animates and when it does not.
- Record the total time your removals gave back across one task.
- Save the audit, the rule and the removal list.

**You should end up with:** A written rule for when your product animates, the time your removals gave back, and the repair the Check questions asked for.

Worksheet fields for this step:

- When your product animates, and when it does not — Write it so it would settle an argument you are not in the room for.
- The total time your removals gave back across one task
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Rule:** A sentence you write down so the same decision gets made the same way in a room you are not in.
- **Repair:** The one change you made after the Check questions, recorded next to the thing that prompted it.

Stuck starting? Write the rule, then test it against the animation you cut. If the rule would have allowed it, tighten the rule.

Is it enough? The rule would settle a proposal made by someone who has not read this lesson.

</details>

**Save and continue.** Saved for you: The list, the classification, the costs and the rule save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. Keep your Module 8 screens and state notes to hand; most of the list comes from them. What your creator sees: Your creator reads the removals and the rule. The removals are the part that shows judgement, so leave the reasons in. Your next action: Open Your work and choose Ready for review. The next lesson takes the feedback items and specifies how each control acknowledges a press.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Walk one task and note everything that changes over time, including hover and press states. Add each to the list.

</details>

<details>
<summary>Hint 2</summary>

For each animation ask whether the person caused it, whether it explains a movement, and whether anything would be lost without it.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: What motion is actually for.
Task: Audit every animation you have proposed or seen in your product, classify each as feedback, continuity, attention or decoration, and remove the ones that answer no question.
Challenge one thing at a time, and start with the mistake this lesson is about: “Motion makes an interface feel modern.” It makes an interface feel slower when it delays action, and it makes an interface feel confusing when several things move at once. What reads as quality is usually immediate feedback and continuity, not the amount of movement.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the completed audit and ask whether every animation is listed with the question it answers. Look at the classified audit and ask whether each is classified into one of the four kinds. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A local HTML file with three buttons and a few CSS rules shows press, hover and focus honestly, including what happens on a touch screen if you open it on your phone. Paper cannot show feedback timing.

- Starting material: Your m08 action components and their state tables.
- Create HaruCourse/Practice/m09-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and separate

**See it first.** Made-up example. A Book button that stayed silent for four seconds, and the two people in an invented walkthrough who pressed it twice.

- **What I specified:** One line: press Book, the booking is made. It looked complete, because on my own machine the reply came back before my finger lifted.
- **What the line hid:** On a five-year-old phone on a slow connection the reply took about four seconds. In those four seconds nothing on the screen changed at all.
- **What that produced:** In a made-up walkthrough, two people pressed the button a second time. From where they were sitting, the first press had not happened.
- **What I had confused:** I had written one moment where there are three: the press, the acknowledgement and the outcome. The middle one was simply missing.
- **What replaced it:** Darken under the finger. Label becomes “Booking…” and the control stops accepting presses. The result message arrives when the reply does.

**The wrong turn:** The wrong turn is judging the wait on your own machine. A reply that feels instant to you is the four seconds that decide whether someone books twice.

**What it costs:** Three moments is more to specify and more to build than one line, and most of the time the middle one is on screen for a blink. The blink is what prevents the duplicate booking.

**Still unknown:** Still unknown: how long the wait really is for your users. Until something runs on a real connection, four seconds is an assumption rather than a measurement.

- Read the assigned status heuristic and the keyboard pattern for one component you use.
- Write the three moments for one control: press, acknowledgement, outcome.

**You should end up with:** One control written as three separate moments, and an honest answer about what a four-second wait looks like today.

Worksheet fields for this step:

- For one control: the press, the acknowledgement and the outcome, as three separate lines
- What the person sees if the reply takes four seconds — If the honest answer is “nothing”, that is the finding this lesson exists for.

<details>
<summary>Help with this step</summary>

- **Acknowledgement:** The immediate sign that the press registered. It is not the result, and it must not pretend to be.
- **Outcome:** What actually happened, which may arrive seconds later or not at all.

Stuck starting? Write the three moments as three lines, then read the middle one aloud. If it is empty, the person meets silence.

Is it enough? The acknowledgement line describes something visible that does not claim the outcome.

</details>

#### 2. Specify the feedback

- For three controls, specify what changes on press, on hover and on focus.
- Make each state distinguishable without colour.
- Give the acknowledgement a label change, not only a spinner.

**You should end up with:** Press, hover and focus specified for three controls, each state separable without colour, and each acknowledgement carrying a change of words.

**Try it with help.** A supplied made up case. Pressing Book sends a request that takes about four seconds on a slow connection. Four proposals for what the person sees during those four seconds.

Which proposal acknowledges the press without claiming an outcome that has not happened?

- **The button darkens on touch, its label becomes “Booking…”, it stops accepting presses, and the result message replaces it when the reply arrives.** — The press, the acknowledgement and the outcome stay separate, and the person can always tell which of the three they are in.
- The confirmation message appears the moment Book is pressed, and is taken away again if the booking turns out to have failed. — This tells the person something that is not yet true. Removing a confirmation afterwards is far worse than a short honest wait.
- A spinning shape covers the whole screen until the reply arrives. — It does acknowledge the press, and it also takes the screen away, so the person cannot re-read what they are booking while they wait.
- Nothing changes, because four seconds is short and the message will arrive on its own. — Four silent seconds is where second presses come from, and a second press can make a second booking.

**Then:** Write the middle moment for each of your three controls, and give it a change of words rather than only a shape that spins.

Worksheet fields for this step:

- Control 1 · what changes on press, on hover and on focus
- Control 2 · what changes on press, on hover and on focus
- Control 3 · what changes on press, on hover and on focus
- Which states you could still tell apart with the colour taken out — Photocopy the states in black and white, or look at them through a greyscale filter on your phone.

<details>
<summary>Help with this step</summary>

- **Hover:** A pointer resting on something without pressing. It does not exist on a touch screen, so nothing essential can live there.
- **Focus:** Where the keyboard currently is. Its outline is how a keyboard user knows their place, not styling to be tidied away.

Stuck starting? Do the press row for all three controls first, then hover, then focus. Doing one control end to end hides the inconsistencies.

Is it enough? Each state is separable with the colour taken out, and each acknowledgement changes words as well as appearance.

</details>

#### 3. Remove hover dependence

**See it first.** Made-up example. Rescuing three hover-only things in a recipe app, and making the screen worse in the process.

- **What the list came to:** Three things a pointer had to reveal. Delete and Duplicate on each recipe row. The full title in a small label when the title was cut short. A colour change telling you the row could be opened.
- **My first repair:** Make them permanent. Every row now carried two visible buttons, so a list of twelve recipes carried twenty-four. Delete sat exactly where a thumb rests while scrolling.
- **What I had actually done:** I had swapped hidden for permanent without asking what each thing was for. Three different jobs, one blunt answer, and a screen nobody could read.
- **Taking them one at a time:** The cut-short title did not need a label at all; letting the title wrap to two lines removed the problem. Delete and Duplicate went behind one always-visible menu button per row. The colour hint was deleted, because on a phone the whole row is already tappable and nothing tells a finger to wait.
- **What that left:** One visible control per row instead of two, one thing solved by layout rather than by a control, and one thing honestly removed.

**The wrong turn:** The wrong turn is making the hidden thing permanent. It is tempting because it is a single edit and it plainly does work on touch, and it trades a control nobody could reach for a screen nobody can read, with the destructive action parked under a scrolling thumb.

**What it costs:** A menu costs one extra tap on every single deletion, for the life of the product. It also hides the action from somebody scanning the screen for it, so the first time they will not find it.

**Still unknown:** Still unknown: whether people recognise that menu button as a menu. On your own screen it is obvious, and nobody unfamiliar has yet been handed the phone without being told.

- List everything currently revealed only on hover.
- Give each a route that works on touch.
- Delete any hover-only control that turns out to be unnecessary.

**You should end up with:** A list of everything currently revealed only on hover, each given a route that works on a touch screen or deleted.

Worksheet fields for this step:

- Everything currently revealed only when a pointer rests on it
- For each: the route that works on touch, or the note that you deleted it

<details>
<summary>Help with this step</summary>

- **Hover-only:** Anything a person can reach or read only while a pointer rests on it. A finger has no resting state, so it is simply absent on a phone.
- **Tooltip:** A small label that appears beside something when a pointer rests on it, usually to explain an icon or finish a title that was cut short.
- **Route:** The way somebody on a touch screen still gets to the thing. Every hover-only item needs a route or an honest deletion.

Stuck starting? Open your design on your phone and try every action you can name. Anything you cannot reach is hidden behind hover.

Is it enough? Nothing essential is left that only a pointer can find.

</details>

#### 4. Test focus and touch

- Tab through your controls and record where focus is invisible.
- Open the same page on a phone and check every control is reachable.
- Repair the worst failure you find.

**You should end up with:** A recorded keyboard pass naming where focus was invisible, a phone pass naming what you could not reach, and one repair.

Worksheet fields for this step:

- Where the keyboard stops, in order, and where you could not see the focus — Where nothing is built, number the stops on a printed screen and mark every row untested.
- What you could not reach when you opened the same design on a phone
- The worst failure you found, and what you changed

<details>
<summary>Help with this step</summary>

- **Keyboard pass:** Going through a whole screen using the Tab key alone and writing down each stop in the order it comes.
- **Phone pass:** Opening the same design at phone size and trying to finish the task with one hand, writing down whatever you could not get to.
- **Reach:** Whether a thumb can actually get to a control on a phone held in one hand, rather than whether the control fits on the screen.

Stuck starting? Where nothing is built, print the screen and number the stops in the order a keyboard would reach them, then mark every row untested.

Is it enough? The notes say what you saw, not what you intended.

</details>

#### 5. Record

- Write what you could not verify without a full implementation.
- Save the specifications with the tab-pass results.

**You should end up with:** An honest note of what you could not verify without a build, and the repair the Check questions asked for.

Worksheet fields for this step:

- What you could not verify without something built and running
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Verify:** To check something against the thing itself running, rather than against your drawing of it.
- **Build:** A version that actually runs, on a real device, on a real connection, with real timing.
- **Limit:** A plain sentence saying what your check does not establish, written beside the finding it belongs to.

Stuck starting? Write two short lists: what you observed on your own device, and what you have not established at all.

Is it enough? Nothing untested is written as though it had been tested.

</details>

**Save and continue.** Saved for you: The three moments, the control specifications and the test notes save as you type, on this device first and then online. Kept outside the app: Keep your Module 8 action specification and state tables open beside this; the three controls should come from there. What your creator sees: Your creator reads the three-moment specification and the keyboard pass. The untested rows are as useful to him as the tested ones. Your next action: Open Your work and choose Ready for review. The next lesson takes the continuity items from lesson 1 and gives each a duration and an easing.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For each control, write what changes in each state. Then check the states in greyscale.

</details>

<details>
<summary>Hint 2</summary>

Write the three moments as three rows. If the middle row is empty, the person will meet silence.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Immediate feedback and the feel of a control.
Task: Specify press, hover and focus feedback for three controls so that every action is acknowledged immediately, and separate acknowledgement from the result that follows later.
Challenge one thing at a time, and start with the mistake this lesson is about: “The action completes quickly, so feedback is unnecessary.” Quickly on your machine and quickly on a five-year-old phone on a slow connection are different. Feedback costs nothing when the response is fast and saves the interaction when it is not.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the state specifications and greyscale check and ask whether press, hover and focus are specified for three controls. Look at the three-moment specification and ask whether acknowledgement is separated from outcome. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Draw the start and end frames of your three transitions on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: A local HTML file with CSS transitions lets you feel durations honestly and change them in seconds. Paper storyboards work for the spatial relationship; they cannot tell you whether 400ms is too slow, and it usually is.

- Starting material: Your audit's continuity items and the screens they occur on.
- Create HaruCourse/Practice/m09-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and map the relationships

- Read the assigned animation guidance for duration and easing vocabulary.
- For each continuity item from your audit, write what caused it and where it goes.

**You should end up with:** Each continuity item from your audit mapped to what caused it and where it returns, with the placeless ones marked as fades.

Worksheet fields for this step:

- For each item: what caused it, and where it goes when it is dismissed
- The ones with no place on screen to come from or return to — These are the fades. Nothing moved, so nothing should appear to travel.

<details>
<summary>Help with this step</summary>

- **Transition:** The change between two states of a screen, described by where it starts, where it ends and how long it takes.
- **Easing:** How the speed changes across the movement. Entering fast then settling reads as arrival; a steady speed reads as machinery.

Stuck starting? For each item finish two sentences: “this came from …” and “when it closes it goes back to …”.

Is it enough? Anything you could not finish both sentences for is sitting in the fade list.

</details>

#### 2. Design three

**See it first.** Made-up example. Three transitions for a booking app, and the one that was a slide pretending to be an explanation.

- **What I designed first:** The confirmation screen sliding in from the right over 400 milliseconds, softened at both ends. It looked expensive and I was pleased with it.
- **The question I had skipped:** Where did the confirmation come from? Nowhere. The payment screen had never been sitting to its left.
- **What the slide was doing:** Claiming a direction that does not exist, and charging 400 milliseconds for the claim. It read as smooth and it taught nothing.
- **What replaced it:** A plain fade of 120 milliseconds. Honest, because nothing moved from anywhere, and short enough to be over before you look for it.
- **What the other two kept:** The filter panel scales out of the filter button over about 200 milliseconds. The detail view expands from its row over about 250 milliseconds, with the row staying put beneath.

**The wrong turn:** The wrong turn is choosing the movement first and finding the relationship afterwards. A slide always looks like an explanation, which is how the empty ones survive.

**What it costs:** Fades look plainer than slides, and a screen of fades can seem flat next to a competitor’s reel. Flat and fast is the better trade.

**Still unknown:** Still unknown: whether 200 milliseconds reads as connected on a slow phone, where frames arrive unevenly. That needs a device you may not own yet.

- Specify origin, movement, duration and easing for each.
- Set duration from the distance and size, not from a single house value.
- Make dismissal reverse the entry so the relationship holds both ways.

**You should end up with:** Three transitions specified with an origin, a movement, a duration in milliseconds, an easing, and an exit that reverses the entry.

Worksheet fields for this step:

- Transition 1 · origin, movement, duration, easing and exit
- Transition 2 · origin, movement, duration, easing and exit
- Transition 3 · origin, movement, duration, easing and exit

<details>
<summary>Help with this step</summary>

- **Origin:** The place on screen a thing appears to come from. If you cannot point at it, there is no origin, and the thing should fade rather than travel.
- **Duration:** How long the movement takes, written in milliseconds so that somebody can argue with the number.
- **Exit:** How the thing leaves. Running the entry backwards is what tells a person it went back to where it came from.

Stuck starting? Write the origin before the duration. A transition with no origin does not need a number, it needs a fade.

Is it enough? Each exit is the entry run backwards, so the relationship holds in both directions.

</details>

#### 3. Test the timings

- Build the transitions roughly in a local file or storyboard the frames.
- Try each at half and double your chosen duration.
- Keep the shortest that still reads as connected.

**You should end up with:** Each transition tried at half and at double your duration, with the shortest one that still reads as connected kept.

**Try it with help.** A supplied made up timing test. The same panel transition was tried at three durations. At 100 milliseconds the panel seemed to appear rather than travel. At 200 the travel was visible and the panel was ready before the hand had moved. At 400 the person was waiting for it.

Which duration do you keep, and on what grounds?

- **200 milliseconds, because it is the shortest one where the travel is still visible enough to show where the panel came from.** — Duration is set by the work the movement has to do. The shortest that still explains is the right one, and here that is the middle value.
- 100 milliseconds, because faster is always better. — Faster is usually better and is not a rule. At 100 the panel arrives without showing its journey, so the time is spent and the explanation never lands.
- 400 milliseconds, because the movement is easier to follow. — Easier to follow stops being useful once the relationship has landed. Everything after that point is the person waiting.
- Any of the three, since the difference is too small for a person to notice. — The gap between 100 and 400 milliseconds is roughly the gap between instant and slow. It is one of the few timing differences almost everybody feels.

**Then:** Run the same test on your own three, and write down which route you used: drawn frames flicked by hand, or a free prototyping tool.

Worksheet fields for this step:

- For each transition: what happened at half your duration and at double it — Draw the start and end frames and flick between them, or build it in a free prototyping tool. Say which route you used.
- The duration you kept for each, and why it is the shortest that still reads as connected

<details>
<summary>Help with this step</summary>

- **Reads as connected:** A person can see that the new thing came out of the old one, without being told so in words.
- **Frames:** The start and end pictures of a movement, drawn side by side. Flicking between them is a real test when you have nothing to build with.
- **Prototype:** A rough runnable version made in a free tool, built for no reason other than to feel the timing.

Stuck starting? Draw the first and last frame of each transition, then flick between them at the speed you intend and at half that speed.

Is it enough? Each duration has a reason attached that is about distance and legibility, not about a house number.

</details>

#### 4. Reject one and sequence the rest

**See it first.** Made-up example. Three transitions firing together when a note is deleted, and cutting the wrong one of the three.

- **What was happening at once:** Deleting a note ran three movements in the same moment. The row collapsing shut, the rows below sliding up to close the gap, and an undo bar rising from the bottom edge. All of them around 250 milliseconds.
- **Which one I removed:** The undo bar entrance. I chose it because it was the newest of the three and I was the least attached to it.
- **What that cost:** The undo bar is the only thing saying the deletion can still be taken back. Removing its entrance did not remove the bar; it made the bar arrive with no announcement, in a corner nobody was looking at.
- **The question I had skipped:** Which of the three carries the relationship. The row collapsing is what shows this note is the one that went. The rows sliding up say the same fact a second time, more slowly.
- **What I did instead:** Dropped the slide of the rows below. Kept the row collapsing at 200 milliseconds. Let the undo bar rise 100 milliseconds after that one finishes, so there is one thing to follow, then another.

**The wrong turn:** The wrong turn is choosing what to cut by how attached you are to it. It is tempting because you have to cut something and the newest thing feels cheapest to lose, and the transitions you have lived with longest are exactly the ones you have stopped seeing.

**What it costs:** Sequencing adds the second movement onto the end of the first, so the deletion now takes longer from beginning to end than the version where everything happened together. You are paying time for legibility and there is no arrangement where it is free.

**Still unknown:** Still unknown: whether a 100 millisecond gap reads as after rather than alongside. That judgement was made with your own eyes on your own machine, and a device dropping frames may close the gap.

- Find a transition that explains nothing and remove it.
- Check no two transitions run at once in the same view.
- Sequence or drop where they compete.

**You should end up with:** One transition removed with its cost and what it explained recorded, and no two transitions running at once in the same view.

Worksheet fields for this step:

- The transition you removed, what it cost, and what it explained
- Anywhere two transitions ran at once, and how you sequenced or dropped them

<details>
<summary>Help with this step</summary>

- **Sequence:** To run one movement after another instead of together, so there is one thing to follow at a time.
- **Competing motion:** Two or more movements in the same view at the same moment, each asking for the attention only one of them can have.
- **Cost:** What is lost by removing something, written down so a later reader can see it was a choice rather than an oversight.

Stuck starting? Find the one that delays the most and explains the least. That is almost always the rejection.

Is it enough? The rejection note says what the transition cost, not only that you did not like it.

</details>

#### 5. Write the rule

- Write when your product moves something and when it simply fades.
- Record the rejected transition and why.
- Save the three specifications with their timings.

**You should end up with:** A rule for what your product moves and what it fades, where the frames live, and the repair the Check questions asked for.

Worksheet fields for this step:

- When your product moves something, and when it simply fades
- Where the frames and timings live — File names or “paper, in my folder”. Naming a file does not upload it.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Fade:** A change from see-through to solid in place, with no travel. It says this is different now and claims nothing about where it came from.
- **Move-or-fade rule:** The sentence that settles, for any new change you meet later, whether the product travels it or simply fades it.

Stuck starting? Test your rule against the transition you rejected. If the rule would have allowed it, the rule is too loose.

Is it enough? The rule decides a case you have not met yet.

</details>

**Save and continue.** Saved for you: The relationship map, the three specifications, the timing tests and the rule save as you type, on this device first and then online. Kept outside the app: The frames stay on paper or in your own folder. Photograph them if you like and write the file name in step 5; naming a file does not upload it. What your creator sees: Your creator reads the three specifications and the rejection. Show the rejected transition beside the ones you kept. Your next action: Open Your work and choose Ready for review. The next lesson turns on the reduced-motion setting and gives every one of these a second version.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For each transition ask what caused the change and where the content will go when dismissed. If neither has a place on screen, use a fade.

</details>

<details>
<summary>Hint 2</summary>

Halve and double each duration and record which reads as connected. Keep the shortest that still does.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Transitions that explain a change.
Task: Design three transitions that show where content came from or went, each with a stated duration and easing, and prove each one is doing explanatory work rather than filling time.
Challenge one thing at a time, and start with the mistake this lesson is about: “Animation makes the change feel smooth.” It makes the change legible when it shows a relationship, and it makes the product slow when it does not. Smoothness is not the goal; understanding what happened is.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the relationship notes and ask whether each transition states the relationship it explains. Look at the timing test notes and ask whether duration follows distance and was tested at two speeds. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Your own device: the assigned page lists where the setting lives on Windows, macOS, iOS, Android and Linux. A local HTML file with a reduced-motion media query shows both versions side by side with no account or tooling.

- Starting material: Your animation audit and the three transitions you designed.
- Create HaruCourse/Practice/m09-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Turn it on and read

**See it first.** Made-up example. Turning the reduced-motion setting on for the first time, and assuming it meant switching every animation off.

- **What I assumed:** Reduced motion means no motion. One rule, easy to write: when the setting is on, nothing animates anywhere.
- **What that did:** The pulsing dot beside the Book button went too. With the setting on, pressing Book produced four silent seconds and no sign that anything was happening.
- **What I had missed:** The request is for less movement, not for less information. That dot was carrying the only news the person had while they waited.
- **What the rule became:** Three outcomes instead of one. Some animations survive in a smaller, gentler form. Some become an instant change. Some go entirely.
- **What the dot became:** A small dot fading between two shades in one place, beside the words “Booking…”, rather than a shape travelling across the button.

**The wrong turn:** The wrong turn is treating the setting as an off switch. It strips the explanation out along with the decoration, and the person who asked for less movement ends up with less information than everybody else.

**What it costs:** Two versions of each animation is twice the specification, and most of your users will never see half of it. It is a few minutes each, and it is the difference between a quieter product and a silent one.

**Still unknown:** Still unknown: whether your reduced versions are comfortable for people who need the setting. Turning it on yourself shows what changes; it does not tell you how it feels to them.

- Read the assigned page and find the setting on your own device.
- Turn it on and note which apps visibly change behaviour.

**You should end up with:** The reduced-motion setting turned on, on a named device, with a note of what visibly changed.

Worksheet fields for this step:

- The device you used, and where the setting lives on it
- What visibly changed once the setting was on — Open two or three apps you use daily and watch what stops moving. If nothing changes, write that too, with today’s date.

<details>
<summary>Help with this step</summary>

- **Reduced motion:** A setting in every major operating system by which a person asks for less movement. It is a request from them, not a preference you grant.
- **Parallax:** Two layers moving at different speeds as you scroll, so one appears to sit behind the other. It is the pattern most likely to cause harm.

Stuck starting? Find the setting on your own device first, then open two apps you use daily and watch what stops moving.

Is it enough? You have named the device and written what you actually saw, including “nothing visibly changed” if that is the truth.

</details>

#### 2. Classify your motion

- Mark each kept animation essential, explanatory or decorative.
- For essential motion, design a smaller local version.
- For explanatory motion, design a fade that preserves the meaning.

**You should end up with:** Every kept animation given one of three outcomes, and each one that survives written out in both its full and its reduced form.

**Try it with help.** Six animations from the same made up booking app. The reduced-motion setting is on. For each one, decide what should happen to it.

- A dot that pulses beside the Book button while the request is on its way.
  - **survives reduced** — It carries the only news the person has while they wait. Make it smaller and keep it in one place, and keep it.
  - becomes instant — There is no end state to jump to. The whole point of it is the time in between, and that time has not finished yet.
  - disappears — Remove it and the person meets silence, which is the thing feedback exists to prevent.
- The filter panel scaling out of the filter button over 200 milliseconds.
  - **survives reduced** — The panel’s origin is worth keeping, so replace the travel with a short fade in place and leave the button marked as open.
  - becomes instant — Appearing with no change at all loses the link to the button, and that link was the work the animation was doing.
  - disappears — The movement can go; the explanation it carried cannot. Something quieter has to take its place.
- The photograph at the top of the class page drifting at a different speed from the text as you scroll.
  - survives reduced — There is no gentler version of a large area sliding under the reader’s eyes while they are trying to read.
  - becomes instant — There is no end state to arrive at. The effect exists only for as long as the person keeps scrolling.
  - **disappears** — Large, continuous, unrequested movement is the pattern most likely to make someone feel ill. Cut it first, then ask whether it earns its place at all.
- The underline sliding along the tab bar to the tab you have just chosen.
  - survives reduced — A fade would do no harm, and it is not needed here: the end state alone says which tab is chosen.
  - **becomes instant** — The underline’s final position is the whole message. Put it there at once and nothing has been lost.
  - disappears — The underline itself has to stay, or nothing shows which tab is chosen. It is the travel that goes, not the mark.
- The password field shaking from side to side when the password is wrong.
  - survives reduced — A smaller shake is still a shake. Repeating movement is the kind to remove rather than to shrink.
  - becomes instant — There is no end state here. Nothing is left behind once the shaking stops.
  - **disappears** — A repeating side-to-side movement is exactly what this setting exists to stop, and the message beside the field already says what is wrong.
- The remaining-places number counting down from 5 to 4 over half a second.
  - survives reduced — Counting through 5 and 4 adds nothing the final number does not already say.
  - **becomes instant** — The number that matters is 4. Show it at once, and mark the change some other way if the person needs to notice it.
  - disappears — The number has to change, or somebody books a place that has gone. It is the counting that goes, not the change.

**Then:** Work down your own kept list and give every animation one of these three outcomes, then write both versions of the ones that survive.

**What to watch for:** The pattern: ask what the person learns from the animation. If they learn something nothing else tells them, it survives in a gentler form, usually a fade. If the end state alone tells them, it becomes instant. If they learn nothing, it goes. Reduced is not removed.

Worksheet fields for this step, revealed a few at a time in the app:

- Animation 1 · the full version, what the person learns from it, and its reduced version
- Animation 2 · the full version, what the person learns from it, and its reduced version
- Animation 3 · the full version, what the person learns from it, and its reduced version
- Animation 4 · the full version, what the person learns from it, and its reduced version

<details>
<summary>Help with this step</summary>

- **Full version:** The movement exactly as you designed it, for people who have not asked for less.
- **Reduced version:** The same information carried with less travel. Usually something changing in place rather than journeying across the screen.
- **Essential:** The movement is carrying information that nothing else on the screen carries. Essential things survive in a quieter form; they are never simply switched off.

Stuck starting? Take the animation you would defend hardest and write what a person learns from it, in one sentence, before you design anything.

Is it enough? Every surviving animation has a reduced version that teaches the same thing without large movement.

</details>

#### 3. Cut the risky patterns

**See it first.** Made-up example. Sorting the risky motion on a garden shop home page by how big each piece was, and letting the two worst through.

- **How I sorted them:** By size, because size is the thing you can see without thinking. The large header photograph drifting behind the text was plainly the big one, so out it went. Everything small stayed.
- **The one I kept:** A small badge on the basket icon that pulsed gently, on and on, whether or not anything had changed. Tiny, so it looked harmless.
- **What size was hiding:** It never stopped. A small movement that repeats forever asks for attention forever, and it sits in the same corner of every screen, so there is nowhere to look away to.
- **The second thing size hid:** Each product row fading upwards as you scroll is a small movement. Forty rows of it is the whole screen moving, against the direction the person is already moving in.
- **What went in the end:** The drift, the endless pulse and the rows that move on scroll. Under the setting the badge simply appears with a number on it, and the rows are already there when you arrive at them.

**The wrong turn:** The wrong turn is sorting by the size of each element on its own. It is tempting because size needs no judgement at all, and it waves through the two patterns that actually cause trouble: the one that never ends, and the small one repeated forty times.

**What it costs:** Rows that arrive without an entrance take the only signal you had that more of the list was loading. You now have to say that in words, and words take up space on a page you were trying to keep quiet.

**Still unknown:** Still unknown: where the line sits. Nobody can tell you how many small repeated movements add up to one large one, and you cannot feel it yourself if the setting is not for you.

- Identify anything moving a large area, repeating, or parallax.
- Remove those entirely under the setting.
- Ask whether each is worth keeping even without the setting.

**You should end up with:** Everything that moves a large area, repeats or drifts on scroll listed and removed under the setting, with the reason recorded.

Worksheet fields for this step:

- Anything that moves a large area, repeats, or drifts as the person scrolls
- What you removed entirely under the setting, and the reason

<details>
<summary>Help with this step</summary>

- **Large-area motion:** Movement filling much of what a person can see at once, so there is no still part of the screen to rest the eye on.
- **Looping motion:** A movement that begins again the moment it ends, so the screen is never at rest.
- **Scroll-triggered motion:** Something that starts moving because the person scrolled, rather than because they asked for it.

Stuck starting? Go through your kept list once looking only for size, repetition and scroll-linked drift. Ignore everything else on this pass.

Is it enough? Each removal has a reason, and you have asked of each whether it earns its place even with the setting off.

</details>

#### 4. Test with the setting on

- Walk one complete task with reduced motion enabled.
- Record anything that became confusing because a relationship was lost.
- Repair by adding a gentler change, not by restoring the movement.

**You should end up with:** One complete task walked with the setting on, with anything that became confusing named and repaired by a gentler change.

Worksheet fields for this step:

- What you saw walking one complete task with the setting on
- Anything that became confusing because a relationship was lost, and the gentler change you added — Repair by adding a quieter change, never by putting the movement back.

<details>
<summary>Help with this step</summary>

- **Walk:** Going through one whole task yourself, slowly, saying out loud what changes at each step.
- **Lost relationship:** Something a movement used to explain, which nothing explains now that the movement has gone.
- **Gentler change:** The quieter replacement you add instead of restoring the movement: a change of words, a change of colour, a mark that stays put.

Stuck starting? Walk the task once without stopping and note where you lost track, then walk it again and write down why.

Is it enough? Every repair is a quieter change rather than the movement put back.

</details>

#### 5. Record honestly

- Write the device and setting you tested with.
- State that your own test is not testing with affected users.
- Save both versions of every animation.

**You should end up with:** An honest statement of what your own test does not establish, and the repair the Check questions asked for.

Worksheet fields for this step:

- What your own test does not tell you — Turning the setting on yourself shows what changes. It does not tell you how the result feels to someone who needs it.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Establish:** To show something is true firmly enough that another person could rely on it.
- **Motion sensitivity:** Dizziness, nausea or headache brought on by movement on a screen. It is the reason the setting exists, and it is not something you can check by having a look yourself.

Stuck starting? Write one sentence saying plainly that testing the setting on yourself is not testing with people who rely on it.

Is it enough? Nothing in your notes reads as evidence about people you have not spoken to.

</details>

**Save and continue.** Saved for you: The device note, both versions of each animation, the removals and the limits save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. Keep your lesson 3 transition specifications open beside this, since each one needs its reduced pair. What your creator sees: Your creator reads the paired specifications and the honest limit at the end. The limit is the part that makes the rest believable. Your next action: Open Your work and choose Ready for review. The next lesson looks at gestures and what people can actually discover without being told.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Follow the assigned page to your platform's setting, turn it on and walk your task again, writing what you saw.

</details>

<details>
<summary>Hint 2</summary>

For each animation write what the person learns from it, then design a change that teaches the same thing without movement.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Reduced motion is not an afterthought.
Task: Turn on your own device's reduced-motion setting, design an alternative for every animation you kept, and state which are essential enough to survive in a reduced form.
Challenge one thing at a time, and start with the mistake this lesson is about: “We will add reduced motion at the end.” Designed at the end it becomes “disable all animation”, which strips the explanatory work along with the decoration. Designing the alternative alongside the original takes minutes and keeps the meaning.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the test record and ask whether the setting was turned on and the test recorded. Look at the paired specifications and ask whether every kept animation has a reduced alternative. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Paper prototypes work for discoverability: hand someone the printed screen and ask them to do the task, then watch what they reach for. For real gesture behaviour, open a local HTML page on your own phone.

- Starting material: Your m08 list components and the flows using them.
- Create HaruCourse/Practice/m09-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

<details>
<summary>Optional video paired with step 2</summary>

[Web Accessibility Perspectives: Speech Recognition](https://www.w3.org/WAI/perspective-videos/voice/) — W3C Web Accessibility Initiative, 1 min 3 s, English, English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page. Whole video, 63 seconds. Watch from 0:12 to 0:54.

What to notice:

- 0:12–0:16 — Voice recognition as one of the advances of technology, used for search, dictation and navigation.
- 0:28–0:33 — Many people with physical disabilities rely on it to use a computer at all.
- 0:35–0:42 — When a site is not built for it, the person is left saying “Go? Cancel?” with nothing to act on.
- 0:42–0:54 — It also helps people with a temporary limitation such as an injured arm, and can stop an injury getting worse.

**Then:** Straight after watching, take one gesture from your list and write how somebody would do the same thing by speaking, or by pressing something visible. If there is no answer, that gesture has no alternative yet.

**Without the video:** No video needed: for each gesture, name the visible control that does the same job. Anything with no visible control is the gap this step exists to find.

Live-action scenes of people speaking to devices, not your product. It shows why an action needs a name that can be spoken or reached another way; your gesture list is where that gets specific. Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use. Checked 7 September 2026.

</details>

#### 1. List the gestures

- List every gesture your design uses or assumes.
- Mark which are platform conventions and which you invented.
- Mark which are the only route to their action.

**You should end up with:** Every gesture in your design listed, with the invented ones marked and the ones that are the only route flagged.

Worksheet fields for this step:

- Every gesture your design uses or assumes, and whether you invented it — Include swipes, long presses, pinches, pull-to-refresh and drags. Include the ones you have only imagined so far.
- Which gestures are the only way to reach their action — If no button, menu item or link does the same job, the gesture goes here.

<details>
<summary>Help with this step</summary>

- **Gesture:** An action done with a finger that has no control on the screen: a swipe, a pinch, a long press, a two-finger anything.
- **Platform convention:** A gesture the person’s phone already uses everywhere else, so they may arrive knowing it. Pull down to refresh is one.

Stuck starting? Walk one task in your design and write down every place you imagined a finger moving rather than tapping.

Is it enough? Every gesture is marked invented or conventional, and you can say which ones have no button anywhere.

</details>

#### 2. Add visible alternatives

**See it first.** Made-up example. Pairing a swipe with a visible control, after first deciding the swipe was fine on its own.

- **What the design had:** Swipe left on a shortlist row to remove it. No button, no menu, nothing on the row. It looked wonderfully clean.
- **What I wrote first:** “Swiping to remove is a standard pattern, so people will find it.” I added a small hint the first time the list opens and called it solved.
- **Why that failed:** The hint appears once, to somebody who is not yet removing anything. By the time she wants to remove a class, the hint was weeks ago.
- **What I did instead:** Every row got a quiet remove control that is always there. The swipe stayed as a shortcut for anyone who already knows it.
- **What the pairing cost:** The row is busier by one small control. It is now the only version of the row that works for somebody who has never met a swipe.

**The wrong turn:** The wrong turn is teaching the gesture instead of pairing it. A hint, a tour or a little animation all assume the person is watching at the one moment you chose.

**What it costs:** A visible control takes space and makes the row less clean. Clean was always being paid for by the people who could not find the action.

**Still unknown:** Still unknown: whether the quiet control is quiet enough to stay out of the way, or so quiet that it reads as decoration.

- Give every gesture a visible control that does the same thing.
- Keep the gesture as an accelerator where it matches convention.
- Remove any invented gesture that has no clear benefit.

**You should end up with:** A visible control written beside every gesture, and any gesture you removed with what it was for.

Worksheet fields for this step:

- Each gesture, beside the visible control that does the same job
- Any gesture you removed, and what it was for

<details>
<summary>Help with this step</summary>

- **Visible control:** A button, menu item or link that is on the screen already, without anybody having to do something to reveal it.
- **Shortcut:** A second, faster route to something that already has a route. If it is the only way to reach the action, it is not a shortcut.

Stuck starting? For each gesture, design the control somebody would use if they had never heard of the gesture. That control is the real route.

Is it enough? No line in your list has an empty control column.

</details>

#### 3. Test discoverability

- Ask three people to complete the action without telling them how.
- Record what each reached for first.
- Note anyone who gave up or used a longer route.

**You should end up with:** What three people reached for when nobody told them how, or the supplied results with the gap dated.

**Try it with help.** Supplied made-up results. Three people were each asked to remove a class from a shortlist and told nothing else. The first pressed and held the row. The second opened the class page and looked for a control there. The third tapped the row twice, then said she would delete the whole shortlist and start again. Nobody swiped.

What do these three attempts tell you about the swipe?

- **The swipe is a shortcut for people who already know it, and the real route is whatever those three could find.** — Three people wanted the action and none of them found the gesture. That makes the gesture an extra, and it makes the visible control the actual design.
- They needed a hint, so a short tip on first use would fix it. — A tip arrives once, before anybody wants to remove anything. All three were already trying, and none of them had a tip in mind.
- Three people is too few to conclude anything. — Three is small for counting how often something happens. It is plenty for showing that a hidden action can be missed, which is all this claims.
- The swipe should be deleted, since nobody used it. — Nobody found it, which is not the same as nobody wanting it. Kept as a shortcut beside a visible control it costs nothing and helps the people who do know.

**Then:** Read your own records the same way. For each gesture, write whether it is now a shortcut or still the only route to its action.

Worksheet fields for this step:

- How you found out (Three people tried it without being told / One or two people tried it / Nobody was available: I used the supplied made-up results and dated the gap)
- What each person reached for first, in the order they tried things — Write what they touched, not what you think they meant. Note anyone who gave up or took a longer route.
- What that tells you about each gesture

<details>
<summary>Help with this step</summary>

- **Discoverability:** Whether somebody can work out that an action exists without being told about it.
- **Prompting:** Saying or doing anything that hints at the answer while somebody is trying. A glance at the right part of the screen counts, which is why you sit still and say nothing.
- **Untested:** Written down when nobody actually tried it. It is a real result, and it is not the same as leaving the box empty.

Stuck starting? Ask anyone to hand: a flatmate, a colleague, a family member. Say the goal only, then say nothing at all while they try. If nobody is free today, use the supplied results above as practice, write today’s date, and record that discoverability is untested.

Is it enough? Each attempt names what the person touched first. A rehearsal with supplied material is written down as untested, never as research.

</details>

#### 4. Make destruction recoverable

**See it first.** Made-up example. Writing undo for a swipe that removes a class, and putting the undo somewhere her thumb could not reach in time.

- **What I specified first:** The row goes, and a message appears at the top of the screen saying “Removed”, with Undo beside it. It stays three seconds.
- **Why the top felt right:** That is where messages sit on most of the pages I had been looking at. Three seconds felt like the natural length of a message.
- **What a phone in one hand does to it:** She swiped with her thumb near the bottom of a tall screen. The undo is at the top, so she has to shuffle the phone up her hand to reach it, and by then it has gone.
- **What the wording was hiding:** “Removed” does not say what was removed. On a shortlist of six similar classes she cannot tell from the message which one vanished, so she cannot tell whether she wants it back.
- **What I wrote instead:** The message sits low, near where the swipe happened. It says “Sunrise Flow removed” with Undo beside it, and it stays eight seconds.

**The wrong turn:** The wrong turn is treating undo as wording and forgetting it is a thing somebody has to physically get to. It is tempting because the sentence is the part you can write at a desk, and the reach is the part you only find out about holding a phone.

**What it costs:** A message sitting low covers part of the list, and eight seconds keeps it in the way for longer than three did. The version that stayed out of the way was the version that expired while her hand was still moving.

**Still unknown:** Still unknown: whether eight seconds is long enough for somebody reading slowly, or holding a child, or working out what just happened. Watching people swipe by accident would settle it, and nobody has.

- For each destructive gesture, specify undo with a stated window.
- Reserve confirmation for actions that cannot be undone.
- Check the undo is reachable one-handed.

**You should end up with:** Undo specified for every destructive gesture, with a window, the wording, and a place a thumb can reach.

Worksheet fields for this step:

- For each destructive gesture: what happens, how long undo lasts, and the words the person sees
- Where the undo sits, and whether one thumb can reach it

<details>
<summary>Help with this step</summary>

- **Slip:** Doing the wrong thing while meaning the right thing. An accidental swipe is a slip, and slips want undo rather than a question.
- **Undo window:** How many seconds the reversal stays available. Say the number; “briefly” gets built as whatever the developer had that day.

Stuck starting? Write the five seconds after the gesture as a small story: what vanished, what appeared, where it sits, what it says.

Is it enough? Every destructive gesture has either an undo with a stated number of seconds or a reason it cannot be reversed.

</details>

#### 5. Record

- Write which gestures survived and why.
- Record what a person with one hand free cannot do.
- Save the specification with the discoverability results.

**You should end up with:** Which gestures survived, what one-handed use cannot do, and the repair the Check questions asked for.

Worksheet fields for this step:

- Which gestures survived, and the reason for each
- What somebody with one hand free, a shaking hand or a cracked screen cannot do, and what they use instead
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **One-handed use:** Using the product with one thumb while the other hand is holding something. It rules out anything that needs two fingers at once.
- **Repair:** The change a Check question asked you to make, written down with what it was before and what it is now.

Stuck starting? Try every gesture with one hand while holding something in the other, then write what you could not manage.

Is it enough? The one-handed note names specific gestures and the route those people use instead.

</details>

**Save and continue.** Saved for you: Your gesture list, the pairs and the discoverability records save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. Keep your m08 list and card components to hand, because the visible controls belong to them. What your creator sees: Your creator reads the pairs and the discoverability records. The record of three people reaching for the wrong thing is the persuasive part, so leave it in even where it is unflattering. Your next action: Open Your work and choose Ready for review. The next lesson writes the same kind of specification for the keyboard, key by key.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For each gesture, design the control someone would use if they had never met the gesture. That control is the real route.

</details>

<details>
<summary>Hint 2</summary>

Hand someone the screen and state the goal only. Say nothing else, and write down what they try.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Gestures and what people can discover.
Task: Specify the gestures your product uses, give every one a visible alternative, and record which were discoverable when someone tried the product without being told.
Challenge one thing at a time, and start with the mistake this lesson is about: “Gestures make the interface cleaner.” They make it emptier, which is not the same. The controls are still needed; they have been moved somewhere the person has to already know about, and the cleanliness is paid for by everyone who does not.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the paired list and ask whether every gesture has a visible alternative. Look at the discoverability records and ask whether discoverability was tested with people who were not told. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Writing the table needs nothing. Testing it needs a rough local HTML file and your own keyboard; where nothing is built, record every row as untested rather than assumed.

- Starting material: Two components from your inventory, one composite.
- Create HaruCourse/Practice/m09-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

<details>
<summary>Optional video paired with step 1</summary>

[Web Accessibility Perspectives: Keyboard Compatibility](https://www.w3.org/WAI/perspective-videos/keyboard/) — W3C Web Accessibility Initiative, 36 s, English, English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page. Whole video, 36 seconds. Watch from 0:09 to 0:29.

What to notice:

- 0:09–0:16 — Many people use only the keyboard to move around a site, by preference or by circumstance.
- 0:16–0:25 — Temporarily limited mobility, a permanent physical disability, or simply a broken mouse: the result is the same.
- 0:25–0:29 — Sites and apps need to be operable by keyboard.

**Then:** Straight after watching, try your own product or the nearest real page using only the keyboard, and write where you got stuck before you write any table.

**Without the video:** No video needed: put the mouse out of reach and do one task on a real page with the keyboard alone. Write where you got stuck; that is the same starting point.

Short live-action scenes and a plain website, not the product you are specifying. It makes the case for keyboard operation; it does not name any key. Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use. Checked 7 September 2026.

</details>

#### 1. Read the patterns

- Read the assigned pattern pages for your two components.
- Copy out their keyboard interaction sections in your own words.

**You should end up with:** Two components chosen, one simple and one made of parts, with each pattern’s keyboard section rewritten in your own words.

Worksheet fields for this step:

- Your two components: one simple, one made of several parts
- The keyboard section of each assigned pattern, written out in your own words — Copying it word for word teaches you nothing. Rewriting it is where you notice what you did not understand.

<details>
<summary>Help with this step</summary>

- **Composite component:** One control made of several smaller ones: a date grid, a set of tabs, a menu. It behaves as one thing from outside and has its own inside.
- **Tab stop:** A place the tab key can land. A composite should be one tab stop, not one per part.

Stuck starting? Pick the plainest control you have and the most complicated one. The gap between them is where this lesson happens.

Is it enough? Your notes are in your own sentences, and you could explain the arrow behaviour to somebody without looking at the page.

</details>

#### 2. Write the tables

**See it first.** Made-up example. Writing a key table for a date picker, and finding the first version unbearable to use.

- **What I wrote first:** One row per day: tab moves to the next date. Thirty-one dates, thirty-one tab stops. Every key was accounted for.
- **Why it looked right:** Every date was reachable by keyboard. That is exactly the sentence people mean when they say a thing has keyboard support.
- **What using it was like:** Getting from the picker down to the Book button took thirty-one presses. Reaching the 28th took twenty-eight.
- **What the pattern said:** One tab stop for the whole grid. Arrow keys move between dates inside it. Home and end jump to the first and last day available.
- **What the table became:** Six rows instead of thirty-one: tab, arrows, enter, space, home and end, escape. Shorter to write and far shorter to use.

**The wrong turn:** The wrong turn is treating reachable as finished. A tab stop on every element answers the reachability question and makes the component miserable.

**What it costs:** One tab stop means the person has to know the arrows move inside. That is the convention the pattern exists to protect, and it is what the rest of their machine already does.

**Still unknown:** Still unknown: what happens at the edge of the grid, whether the arrows wrap round to the next week or stop dead. The pattern allows both and your table has to choose.

- For each component write one row per key: key, context, expected behaviour.
- Distinguish what tab does from what the arrow keys do.
- Include home, end and escape where the pattern uses them.

**You should end up with:** A table with one row per key: the key, the component, the situation, and the behaviour you expect from it.

Worksheet fields for this step, revealed a few at a time in the app:

- Key row 1 · the key, the component, where the person is, and what must happen — Start with tab, because it is the one that separates your simple component from your composite one.
- Key row 2 · the key, the component, where the person is, and what must happen
- Key row 3 · the key, the component, where the person is, and what must happen
- Key row 4 · the key, the component, where the person is, and what must happen
- Key row 5 · the key, the component, where the person is, and what must happen
- Key row 6 · the key, the component, where the person is, and what must happen

<details>
<summary>Help with this step</summary>

- **Key row:** One line of the table covering one key in one situation. The same key often needs several rows, because it does different things in different places.
- **Modifier key:** A key held down while another is pressed, such as shift or control. Shift and tab together move backwards.
- **Wrap:** What the arrow keys do at the end of a set of things: either carry on round to the other end, or stop dead. Your table has to say which.

Stuck starting? Write the tab row first for both components. The difference between those two rows is most of the lesson.

Is it enough? Every row says what happens, not what is allowed to happen, and the composite has one tab row rather than many.

</details>

#### 3. Specify focus movement

**See it first.** Made-up example. Writing where focus goes for a filter panel, and naming a region instead of naming a control.

- **What I wrote first:** “On open, focus moves to the panel. On close, focus returns to the list.” One sentence each, and I thought this step was finished.
- **What a panel is to a keyboard:** Nothing. It is a box drawn round some controls. Unless something inside it is named, focus stays on the Filters button behind the panel, and her next key press acts on a screen she cannot see.
- **What returning to the list did:** The list is sixty rows long. Focus landed at the top of it, so she came out of the panel above everything she had just filtered and had to travel down again.
- **The one I nearly missed:** On a narrow screen the panel covers the whole page. Sending focus back to the Filters button put her outline above the top of the window, where she could not see it.
- **What I wrote instead:** On open, focus goes to the date field, which is the first control in the panel. On close and on escape it returns to the Filters button, and the page scrolls that button into view before focus lands on it.

**The wrong turn:** The wrong turn is naming a region. “The panel”, “the list”, “the page” all read like decisions on the page and leave exactly the hole an empty box would have left.

**What it costs:** Naming one control ties the rule to the layout, so rearranging the panel means rewriting every rule that mentions a part of it. A rule loose enough never to need updating is a rule that never said anything.

**Still unknown:** Still unknown: whether scrolling the button back into view is enough for somebody using a magnified screen, who may only ever see a small part of the page at once.

- State where focus goes when the component opens.
- State where focus returns when it closes or is cancelled.
- Check focus never lands somewhere invisible or off screen.

**You should end up with:** Where focus goes when each component opens, closes and is cancelled, and anywhere it could land unseen.

Worksheet fields for this step:

- For each component: focus when it opens, when it closes, and when it is cancelled
- Anywhere focus could land off screen, or on something with no visible outline

<details>
<summary>Help with this step</summary>

- **Focus:** The one place on the screen that the keyboard is talking to. If a person cannot see it, they have lost their position.

Stuck starting? Write three sentences per component: focus on open, focus on close, focus on escape.

Is it enough? No sentence is missing. Any you leave out will be decided at build time, and usually decided as nothing.

</details>

#### 4. Test or mark untested

- Build a rough version and test every row of the table.
- Record pass or fail per row with what happened.
- Where nothing is built, mark every row untested rather than assumed.

**You should end up with:** Every row marked with what actually happened, or marked untested, with what you checked it against.

**Try it with help.** A supplied made-up result. Your table says escape closes the filter panel and returns focus to the Filters button. Tabbing through a comparable panel in a real product, escape did nothing at all, and closing it another way sent focus back to the very top of the page.

What do you write down?

- **Two failed rows against the table, each with what actually happened.** — The table is the specification and the thing you tried is the evidence. Recording the difference is the entire reason for writing the table first.
- Change the table so escape is optional, since a real product manages without it. — One product doing without something is not a reason for your specification to ask for less. That is how a table stops being a specification and becomes a description.
- Leave both rows blank until something of your own exists. — A blank row cannot be told apart from a row nobody thought about. Untested is a real result; empty is not.
- Mark both rows passed, because that behaviour is what you designed. — Designing something does not make it happen. Marking untried rows as passed is the one thing a key table must never do.

**Then:** Go through your own rows and mark each one with what happened, or with the word untested. Leave no row empty.

Worksheet fields for this step:

- What you checked your table against (A real product using the same pattern, tabbed through in my browser / A free prototype I could tab through / Nothing existed to check: every row is untested)
- Row by row: what actually happened, or the word untested — Write what the keys did, not what they were supposed to do. No row may be left empty.

<details>
<summary>Help with this step</summary>

- **Comparable product:** A real product using the same pattern, borrowed so you have something to press keys on. It stands in for the build you do not have yet.
- **Untested:** Written against a row nobody has actually tried. It is a result, and it is not the same as an empty box.

Stuck starting? Open a real product that uses the same pattern, or a free prototype, put the mouse down and walk your rows in order.

Is it enough? Every row carries a result. Where nothing was available to try, every row says untested and the choice above says so too.

</details>

#### 5. Record the gaps

- List the failures as defects for the build, not as design changes.
- Note where you departed from the pattern and why.
- Save both tables with their results.

**You should end up with:** The failures written as defects for the build, your deliberate departures from the pattern, and the repair the Check questions asked for.

Worksheet fields for this step:

- The failures written as defects for the build, and anywhere you left the pattern on purpose
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Defect:** A written difference between what you specified and what the thing actually does, in a form a developer can pick up and act on.
- **Deliberate departure:** A place where you knowingly did something the pattern does not, written down with your reason so nobody reads it as a slip.

Stuck starting? Copy each failed row into the defect list and add the expected behaviour beside what happened.

Is it enough? Nothing that failed has quietly become the new design.

</details>

**Save and continue.** Saved for you: Both key tables, the focus sentences and the results save as you type, on this device first and then online. Kept outside the app: Nothing is uploaded. Keep the assigned pattern pages open in a tab while you write; the tables are worth nothing if they drift from the conventions. What your creator sees: Your creator reads the tables and the results column. The untested rows are not a weakness here, they are the honest part. Your next action: Open Your work and choose Ready for review. The next lesson takes the focus sentences further, into what happens when content changes underneath somebody.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Copy the pattern's keyboard section into a table and adapt each row to your component.

</details>

<details>
<summary>Hint 2</summary>

Rewrite the composite's rows: one stop for the group, arrows to move inside, and state the wrap behaviour.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Keyboard behaviour, specified key by key.
Task: Write the expected keyboard behaviour for two of your components, key by key, against the assigned pattern, and test any built version against your own specification.
Challenge one thing at a time, and start with the mistake this lesson is about: “Keyboard support means everything is reachable by tab.” Reachable is not usable. A composite where every element is a tab stop is technically reachable and practically unbearable, and a dialogue that traps focus with no escape is reachable and inescapable.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the two key tables and ask whether A key-by-key table exists for both components. Look at the revised composite table and ask whether tab and arrow roles are distinguished. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A rough local HTML page and your own keyboard. If a screen reader is already on your device — the assigned catalog entry names the free ones — try one step with it, and record that as a preliminary check rather than a test with disabled users.

- Starting material: Your key tables and the m08 message specifications.
- Create HaruCourse/Practice/m09-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and list the moments

- Re-read the assigned pattern guidance on focus movement.
- List every moment in your product where content opens, closes, replaces or fails.

**You should end up with:** A list of every moment in your product where content opens, closes, is replaced or fails.

Worksheet fields for this step:

- Each place in your product where content opens, closes, is replaced, or fails — Panels, dialogues, filters, search results, saved messages, validation errors, a list becoming empty.

<details>
<summary>Help with this step</summary>

- **Focus:** The one place the keyboard is talking to. It is a person’s place on the screen, and moving it moves them.
- **Announce:** Say what changed without moving anybody. A short line of text that a screen reader reads out and a sighted person can see.

Stuck starting? Walk one whole task and stop every time the screen is not what it was a second ago.

Is it enough? The list has at least one of each of the four kinds: opening, closing, replacing, failing.

</details>

#### 2. Write the four rules

**See it first.** Made-up example. Writing the rule for replaced content, after first sending focus to the results and throwing somebody out of the filters.

- **The situation:** Somebody picks a date in the filter panel. The list underneath changes from 63 classes to 12.
- **What I wrote first:** “Move focus to the first result, so she sees straight away that something happened.” It felt helpful and considerate.
- **What that actually does:** She was halfway down the filters and about to choose a price range. Focus is now in the list and the filters are behind her.
- **What I wrote instead:** Focus stays exactly where it is. The count is announced: “12 classes match.” She carries on filtering and knows what happened.
- **The rule underneath:** Move focus to a place the person asked to go. Never move it as a way of telling them something.

**The wrong turn:** The wrong turn is using focus as a notification. Moving somebody’s place is the loudest thing an interface can do, and a count does not deserve it.

**What it costs:** Announcing rather than moving makes the change quieter, and somebody skimming may miss the count. Keeping her place is worth more than the noticing.

**Still unknown:** Still unknown: whether “12 classes match” arrives at the right moment or while she is still pressing keys. That needs somebody who uses a screen reader every day.

- State where focus goes on open and where it returns on close.
- State whether focus moves when content is replaced, and what is announced.
- State where focus goes when an error appears.

**You should end up with:** Four rules, each naming a destination or naming what is announced instead.

Worksheet fields for this step:

- Where focus goes when something opens
- Where focus returns when it closes, and when it is cancelled
- When content is replaced: whether focus moves, and what is announced instead
- Where focus goes when an error appears, and where the message sits

<details>
<summary>Help with this step</summary>

- **Destination:** The one named control focus lands on. “The panel” is a place; “the date field” is a destination.
- **Cancel:** Leaving something without keeping the change, usually by pressing escape. It often needs a different destination from an ordinary close.
- **Replaced content:** Content that changes underneath somebody while the screen around it stays put, such as a list refiltering or results reloading.

Stuck starting? Write the open rule first. It is the easiest, and the other three are all arguments with it.

Is it enough? Each rule names a specific destination, or says plainly that focus stays and gives the words that are announced.

</details>

#### 3. Find unrequested movement

- Walk your flows looking for focus moving when the person did not ask.
- Record each and decide whether to remove or justify it.

**You should end up with:** Every place focus moves without being asked, each removed or justified, and the one you decided to keep.

**Try it with help.** Six made up situations from a class-booking product. None of these were observed; they are written for practice. For each one, decide what should happen to the person’s place on the screen.

- Tapping Filters opens a filter panel on top of the list.
  - **move it** — She asked to go there. Focus follows the request into the panel’s first control, so the next key she presses lands where she is looking.
  - leave it — Focus would stay on the Filters button behind a panel she is now looking at. Her next key press acts on something she cannot see.
  - leave it and announce — Telling her a panel opened while leaving her outside it gives her the news and not the place. She asked to go in.
- She presses escape and the filter panel closes.
  - **move it** — The thing she was standing in has gone. Focus goes back to the Filters button that opened it, which is exactly where she left from.
  - leave it — There is nothing left to leave it on. Focus inside a closed panel usually falls to the top of the page, and she starts the screen again.
  - leave it and announce — A closing panel needs a destination more than it needs a sentence. Without one she is somewhere undefined.
- She picks a date. The list underneath changes from 63 classes to 12.
  - move it — She is in the middle of filtering. Sending her to the list takes her out of the controls she is still using.
  - leave it — Silence leaves somebody who cannot see the list with no idea whether the date did anything at all.
  - **leave it and announce** — Her place is worth keeping and the change is worth knowing. “12 classes match” gives her the second without costing the first.
- She types a note on a booking, taps elsewhere, and the note saves.
  - move it — She has already moved on to whatever she tapped. Dragging her back to the note undoes her own decision.
  - leave it — A save with no word is the one thing an automatic save must never be. She never learns that the note is safe.
  - **leave it and announce** — She stays where she went, and a short “Saved” tells her the note is no longer only in her head.
- While she is still typing a postcode, a quiet hint appears under the field saying the format is nearly right.
  - move it — Moving focus mid-word takes the keyboard away from her. A hint is never worth interrupting typing for.
  - **leave it** — She is busy and the hint is not urgent. It waits for her, which is what a hint is for.
  - leave it and announce — Announcing every keystroke’s worth of guidance turns the field into a chatterbox. Save the words for the result when she stops.
- A photograph three rows below her finishes loading, and the row it sits in stays exactly the same size.
  - move it — She asked for nothing and nothing changed for her. Focus moving here is the interface fidgeting.
  - **leave it** — The change is cosmetic, the layout did not shift, and she is unaffected. Doing nothing is the whole answer.
  - leave it and announce — Announcing a picture she never asked about adds noise. Announcements are for changes that alter what she can do.

**Then:** Now walk your own flows. Write down every moment focus moves, mark each with one of these three, and record what you did about the ones that break your own rules.

**What to watch for:** Look at the two panel lines beside the two quiet ones. Focus moves when the person asked to travel, and only then. It stays put when the change is small, and it stays put with a few words attached when the change matters but she did not ask to go anywhere.

Worksheet fields for this step:

- Every place focus moves without the person doing anything, and what you did about each
- The one move you decided to keep, and why it is worth it

<details>
<summary>Help with this step</summary>

- **Unrequested movement:** Focus moving somewhere when the person did nothing to ask to go there.
- **Justified move:** An unrequested move you decided to keep, written down with the reason it is worth interrupting somebody for.

Stuck starting? Take one flow and press tab all the way through it, writing down every jump you did not cause.

Is it enough? Nothing in the list is unresolved: each move is removed or has a reason written beside it.

</details>

#### 4. Test the indicator

**See it first.** Made-up example. Specifying the focus outline as one colour, then losing my own place twice while tabbing through.

- **What I specified:** A two-pixel dark blue outline, everywhere. One sentence, one colour, and I thought the indicator was settled.
- **Where it vanished:** The banner across the top of the page is that same dark blue. Tabbing on to the button sitting on it, the outline was drawn and there was nothing to see. Present and invisible.
- **The second place:** Rows in the list already glow faintly when the mouse passes over them. That glow and my outline read as the same mark, so I could not tell where the keyboard was standing from where a mouse had been.
- **What I wrote instead:** Two lines drawn together, one pale and one dark. Whatever surface it lands on, one of the two shows. Then a line each for the page, the card, the banner and the sticky bar.
- **What the walk found last:** At the top of a scrolling panel the outline was cut off by the panel edge, because nothing had left room for it. The rule gained a small gap around anything focusable near an edge.

**The wrong turn:** The wrong turn is treating the outline as a colour choice, set once in one place. It is tempting because that is how every other colour in the design behaves.

**What it costs:** A double outline is heavier and louder than the quiet single line the page was designed around. It is the version that survives every surface, and delicacy that disappears is not delicacy.

**Still unknown:** Still unknown: how any of it behaves when somebody turns on their own high-contrast setting or magnifies the page. Neither has been tried here.

- Tab through each screen and watch only the focus indicator.
- Note any step where you lose track of your position.
- Check the indicator is visible on every surface colour you use.

**You should end up with:** The focus outline described against every surface it lands on, and the steps where you lost your position.

Worksheet fields for this step:

- The focus outline described against every background colour it can land on
- The steps where you lost track of your position — Tab slowly through a free prototype or a comparable real page and watch only the outline.

<details>
<summary>Help with this step</summary>

- **Focus indicator:** The visible mark showing where the keyboard is standing, usually an outline drawn round the control.
- **Surface:** Any background a control can sit on: the page, a card, a dark banner, a coloured bar. The outline has to be checked against each one.
- **Contrast:** How far apart two colours are in lightness. An outline as light as the thing behind it cannot be seen, however bright the colour looks on its own.

Stuck starting? Tab through a free prototype or a comparable real page slowly, watching only the outline and nothing else.

Is it enough? Each lost-position step names the screen and the control, not “somewhere in the middle”.

</details>

#### 5. Record honestly

- Write which rules you could verify and which remain untested.
- State that your own checks are not testing with disabled users.
- Save the rules and the tab-through results.

**You should end up with:** Two separate lists, what you saw and what you have not established, plus the repair the Check questions asked for.

Worksheet fields for this step:

- Two lists: what you saw for yourself, and what you have not established
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Established:** Something you watched happen yourself. What you expect, or what ought to be true, is not established.
- **Screen reader:** Software that reads the screen aloud, used by people who cannot see it. Nothing here counts as tried until somebody who uses one every day has tried it.

Stuck starting? Write the seen list first, then move anything you assumed into the second list.

Is it enough? The second list says in plain words that no test with a screen-reader user has been run.

</details>

**Save and continue.** Saved for you: The four rules, the movement list and the tab-through notes save as you type, on this device first and then online. Kept outside the app: Nothing is uploaded. Keep your key tables from the last lesson beside this; the two documents are meant to be read together. What your creator sees: Your creator reads the four rules and the two lists at the end. The list of what you have not established is the part that shows judgement. Your next action: Open Your work and choose Ready for review. The next lesson takes one interaction where people move things about, and specifies it for a mouse, a finger and a keyboard.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write one sentence per situation. Any missing sentence becomes whatever the framework does.

</details>

<details>
<summary>Hint 2</summary>

Walk each flow watching the indicator. Every unexplained jump is an instance.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Where focus goes when things change.
Task: Specify focus behaviour for four situations — opening, closing, content replacing, and an error appearing — and check that nothing your product does moves a person's place without telling them.
Challenge one thing at a time, and start with the mistake this lesson is about: “Screen-reader support is a development task.” Where focus moves is a design decision with visible consequences for sighted keyboard users too. Left to implementation it becomes whatever the framework does, which is usually nothing or the document top.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the four rules and ask whether focus rules cover open, close, replace and error. Look at the list with resolutions and ask whether unrequested focus movement is found and resolved. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Draw the three drag signals and the drop indicator on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper works for the drop-target design: cut a row out and move it around the printed list, asking someone where they expect it to land. The keyboard route is written as a key table like the previous lesson's.

- Starting material: One arranging or reordering task from your product.
- Create HaruCourse/Practice/m09-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Choose the task and read

- Choose one arranging task in your product.
- Read the assigned pattern guidance for a comparable component's keys.

**You should end up with:** One arranging task chosen, and the keys the assigned pattern gives for a component like it.

Worksheet fields for this step:

- The one arranging task you are designing
- What the assigned pattern says about the keys for a comparable component

<details>
<summary>Help with this step</summary>

- **Direct manipulation:** Moving the thing itself rather than telling a control to move it. Dragging a row is direct; choosing “move down” from a menu is not.
- **Drop target:** The place the thing will land. It has to be visible before the person lets go, not discovered afterwards.

Stuck starting? Pick the smallest arranging task you have. One list of six rows is easier to specify completely than a whole board.

Is it enough? The task is one sentence, and you have the pattern’s keys written down beside it.

</details>

#### 2. Design the three signals

**See it first.** Made-up example. Designing the drag signals for a shortlist, and having to redraw them once the keyboard route was written.

- **What I drew first:** The whole row draggable, no grip. Pick it up anywhere, drop it anywhere. Nothing extra added to the row at all.
- **Why it looked good:** Nothing to explain and nothing to draw. With a mouse it worked the first time I tried it on paper.
- **The first crack:** On a phone that same press-and-move is a scroll. The list would have had to guess which one she meant, and guessing means being wrong sometimes.
- **The second crack:** By keyboard there was nothing to land on. Picking up needs something focused, and a whole row is not a thing the keyboard can hold.
- **What I drew instead:** A small grip at the left of every row. It is the drag handle for a finger, the focus target for the keyboard, and the mark that says this row moves.

**The wrong turn:** The wrong turn is designing the drag first and leaving the keyboard route for later. It is not a translation of the design; it changes what the design has to contain.

**What it costs:** The grip adds a small mark to every row and costs a little width. It buys the only version of the row that works with a finger, a mouse and a keyboard.

**Still unknown:** Still unknown: whether the grip is read as a grip or as decoration. Somebody who has never reordered a list would have to be watched trying it.

- Show what is draggable, using a handle or an equivalent affordance.
- Show the item while it is held.
- Show where it will land with a visible drop indicator.

**You should end up with:** Three signals drawn and described: what can be picked up, what is held, and where it will land.

Worksheet fields for this step:

- What shows a row can be picked up at all
- What the row looks like while it is being held
- What shows where the row will land if it is released now

<details>
<summary>Help with this step</summary>

- **Drag handle:** The small mark on a row saying pick me up here, and the only place a drag is allowed to start.
- **Held state:** How the row looks while it is being carried: lifted, shadowed, or left as a faint gap in the place it came from.

Stuck starting? Draw the three moments as three separate sketches: before the pick-up, during, and the instant before release.

Is it enough? Each of the three has its own visible signal, and you could point at it on the paper.

</details>

#### 3. Write the keyboard route

- Specify pick up, move, drop and cancel as keys.
- State what is announced at each step.
- Check the route completes the same task, not a reduced version.

**You should end up with:** A key table that completes the same arrangement as the drag, with what is said at each step.

**Try it with help.** A supplied made-up key table for reordering a list. Space picks the row up. The up and down arrows move it. Space puts it down. Nothing else is written.

What is missing before this route is finished?

- **Escape to abandon the move and put the row back, plus what is said at each step.** — Somebody who picks up a row by accident currently has no way out except to drop it somewhere. A cancel is what makes the route safe to try.
- Nothing: picking up, moving and dropping completes the task. — It completes the task when everything goes right. It offers nothing at all to the person who started a move she did not mean to start.
- A modifier key so the arrows jump ten rows at a time. — That is a convenience for long lists rather than the gap. She still cannot get out of a move once she is in one.
- A confirmation dialogue after the drop. — A move is a slip, so undo suits it better than a question. It also still leaves no way to abandon a pick-up before anything has moved.

**Then:** Add the missing rows to your own table, then write the sentence the person hears at pick-up, at each move and at the drop.

Worksheet fields for this step:

- Pick up, move, drop and cancel, one row per key
- What is said at each step, in the words the person would actually hear

<details>
<summary>Help with this step</summary>

- **Announcement:** The short sentence read aloud when something changes, written by you rather than left to whatever the browser decides to say.
- **Cancel:** Abandoning a move part-way and putting the row back where it started, usually by pressing escape.
- **Screen reader:** Software that reads the screen aloud for people who cannot see it. It can only say what the design has given it words for.

Stuck starting? Walk the task on paper with your fingers off the mouse: what would you press first, and what would you need to be told?

Is it enough? Any arrangement you could reach by dragging can be reached by the keys, and every key row has an announcement beside it.

</details>

#### 4. Design recovery and touch behaviour

**See it first.** Made-up example. Writing the rule that tells a drag from a scroll on a phone, and choosing a long press that broke ordinary scrolling.

- **What I wrote first:** Press and hold anywhere on a row for a second to pick it up. Nothing new drawn on the row, and the whole touch rule fitted on one line.
- **Why it was tempting:** A long press is something phones already do elsewhere, so it felt free. It also let the row stay exactly as clean as it was in the sketch.
- **What it did to scrolling:** A thumb rests on a list for a moment before it flicks. That rest is a hold, so the list kept picking rows up when she only meant to go past them.
- **Who it failed hardest:** Somebody whose hand shakes cannot flick quickly, so most of her scrolls look like holds. The rule turned her ordinary scrolling into accidental rearranging.
- **What I wrote instead:** A drag can only begin on the grip. A press anywhere else on the row scrolls, every time, with no timing involved. Then I walked the list top to bottom to check plain scrolling still worked.
- **What the message ended up saying:** “Item moved. Undo” became “Sunrise Flow moved to third. Undo”, staying ten seconds, because she has to know which row moved and where before she can decide anything.

**The wrong turn:** The wrong turn is buying the drag with time instead of with space. A timed gesture costs no pixels, so it looks free, and it is paid for by every scroll that now has to be measured before it is believed.

**What it costs:** The grip puts a mark on every row and makes the drag slower to start, because her thumb has to find one small place. Scrolling stops being a gamble, and scrolling is the thing she does far more often.

**Still unknown:** Still unknown: whether the grip is big enough for a thumb on a small screen, and what a held row does when it reaches the bottom edge and the list has to scroll underneath it.

- Specify undo with a window and write the message.
- Decide how drag and scroll are distinguished on touch.
- Check the decision does not break scrolling elsewhere.

**You should end up with:** Undo with a window and its exact wording, and a rule that keeps dragging and scrolling apart on touch.

Worksheet fields for this step:

- How long undo lasts and the exact message shown after a move
- How a finger dragging is told apart from a finger scrolling
- Where you checked that scrolling the same list still works

<details>
<summary>Help with this step</summary>

- **Undo window:** How many seconds the reversal stays on screen. Write the number; “a moment” gets built as whatever the developer had that day.

Stuck starting? Write the message first, in the words she reads: what moved, where it went, and how to put it back.

Is it enough? The touch rule names what starts a drag, and you have checked that ordinary scrolling on that same list still works.

</details>

#### 5. Record the cost

- Write who cannot use the drag route and what they use instead.
- State what remains untested, including any assistive-technology behaviour.
- Save the specification with the key table.

**You should end up with:** Who cannot use the drag route, what they use instead, what is untested, and the repair the Check questions asked for.

Worksheet fields for this step:

- Who cannot use the drag route, what they use instead, and what remains untested
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Equivalent route:** The other way of finishing the same task, for somebody who cannot drag. It has to be able to reach every arrangement the drag reaches.
- **Untested:** Written against anything you have not watched somebody actually do. It is a result, and it is not a blank.

Stuck starting? Name three people who cannot drag: one with a tremor, one on a cracked screen, one using only a keyboard. Write what each of them does instead.

Is it enough? The untested list says plainly that no test with a screen-reader user has been run.

</details>

**Save and continue.** Saved for you: The three signals, the key table, the undo wording and the touch rule save as you type, on this device first and then online. Kept outside the app: The three sketches stay on paper or in your own folder. Photograph them if you like and write the file name in the signals boxes; naming a file does not upload it. What your creator sees: Your creator reads the key table beside the drag sketches. Showing the two together is the point: it says you designed for everybody rather than for the demonstration. Your next action: Open Your work and choose Ready for review. The next lesson turns to scrolling, sticky elements and what a long list costs on a small screen.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Draw the three moments separately: before pick-up, during, and just before release. Each needs its own signal.

</details>

<details>
<summary>Hint 2</summary>

Write the keys, then walk the task by keyboard on paper. If any arrangement is unreachable, the route is incomplete.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Direct manipulation: drag, reorder and their consequences.
Task: Design one direct-manipulation interaction with a keyboard equivalent, a clear drop target, a recovery path, and a stated decision about what it costs people who cannot drag.
Challenge one thing at a time, and start with the mistake this lesson is about: “Drag and drop is intuitive.” It is familiar to people who have used it. It is invisible to people who have not, impossible for some, and ambiguous on touch screens where the same gesture already means scroll.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the three specifications and ask whether all three drag signals are specified. Look at the key table and ask whether A keyboard equivalent completes the same task. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Draw the phone-sized viewport with every fixed element measured on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper at phone size, with a window cut out to represent the viewport, shows exactly how much a sticky element costs. A local HTML page shows real scroll and restore behaviour.

- Starting material: Your browse loop and list components.
- Create HaruCourse/Practice/m09-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Measure the tax

- List every element you intend to keep fixed while scrolling.
- Measure each one's height at phone size and total them.
- Express the total as a share of the viewport.

**You should end up with:** A measured height for every element you want fixed, and the total written as a share of the viewport.

Worksheet fields for this step:

- The viewport height you are measuring against, at phone size — A common phone leaves you roughly 640 points of usable height. Use a real number and say where it came from.
- Every element you intend to keep fixed while scrolling, with its measured height
- The total fixed height, and what share of the viewport it takes

<details>
<summary>Help with this step</summary>

- **Sticky:** An element that stays put while the rest of the page scrolls under it. It holds its space for the whole session.
- **Viewport:** The part of the page a person can see at once. On a phone it is small, and everything fixed comes out of it.

Stuck starting? Cut a window the size of a phone screen out of a sheet of paper and hold it over your drawing. Measure whatever never moves.

Is it enough? The total is a number you measured, not one you estimated.

</details>

#### 2. Justify or drop each

**See it first.** Made-up example. Keeping three things fixed on a phone, then measuring what they cost.

- **What I drew first:** A logo header, a filter bar and a book button, all fixed. Everything important, always available. It felt generous.
- **What the ruler said:** 190 points of a 640 point screen gone before a single class row appeared. Close to a third of what she can see.
- **The test I applied:** For each one: what is she doing with this while she scrolls? The logo, nothing. The book button belongs to a class she has not chosen yet.
- **What I changed:** The logo header scrolls away and comes back when she scrolls up. The book button moved to the detail view. The filter summary stayed.
- **What that gave back:** 126 points, which is about two more class rows visible at every moment of every scroll.

**The wrong turn:** The wrong turn is judging each fixed element on its own. Each one sounds reasonable alone. The cost only appears when you add the heights together.

**What it costs:** A header that scrolls away means one extra flick upward when someone wants the menu. You are trading a rare action against space every person loses on every screen.

**Still unknown:** Still unknown: whether people actually use the filter summary while scrolling. That is something to watch, and nobody has watched it yet.

- For each sticky element, write what the person needs it for while scrolling.
- Drop anything that fails, or make it return on scroll up instead.
- Re-measure the remaining total.

**You should end up with:** A decision for each fixed element, based on what the person does with it while scrolling, and a new total.

Worksheet fields for this step, revealed a few at a time in the app:

- Element 1 · what the person needs it for while scrolling, and your decision
- Element 2 · what the person needs it for while scrolling, and your decision
- Element 3 · what the person needs it for while scrolling, and your decision
- Element 4 · what the person needs it for while scrolling, and your decision
- The new total fixed height after your decisions

<details>
<summary>Help with this step</summary>

- **Fixed height:** The vertical space your unmoving elements take up together, before a single row of content appears.
- **Scrolling away:** An element leaving the screen with the rest of the page, usually returning when the person scrolls back up.
- **Filter summary:** A short line saying what the list is currently narrowed down to, such as “Tuesdays, beginners”.

Stuck starting? Take the tallest element first and try to write its use during scrolling in one sentence.

Is it enough? Every element has either a stated use during scrolling or a decision to drop it.

</details>

#### 3. Design the list ending

- Choose paging, load-more or infinite loading and state why.
- Show how many items exist in total.
- Check the footer remains reachable.

**You should end up with:** A chosen way for the list to end, the total shown in words, and a footer that can still be reached.

**Try it with help.** A supplied made-up design. The class list loads twenty more rows on its own every time the person nears the bottom, for as long as there are results. The footer holds the contact link, the refund policy and the accessibility statement.

What has this design done, and what would you change first?

- **It has removed the end of the page, so the footer is unreachable. Replace the automatic loading with a load-more control.** — The footer sits at the end, and continuous loading means the end keeps moving away. A load-more control gives the page a bottom again.
- It has slowed the list down, because twenty rows at a time is heavy on a phone. — Weight is worth watching and it is not the failure here. Even a fast loader still pushes the footer out of reach every time.
- It has done nothing wrong, because those links are also in the menu. — That is a real repair and it is the second one, not the first. If they are only in the footer today, they are gone today.
- It has buried the policies, so move them above the list where they are seen first. — That puts rarely wanted content in front of the content people came for. The footer is the right place; it just has to be reachable.

**Then:** Try to reach the footer on your own design, or on a comparable page, and write down what happened.

Worksheet fields for this step:

- Paging, a load-more control or continuous loading, and why you chose it — Say what happens at the bottom, and whether the footer can still be reached.
- Where the total number of items appears, in the exact words you would use

<details>
<summary>Help with this step</summary>

- **Continuous loading:** More rows arrive on their own as you near the bottom. Often called infinite scroll. The bottom of the page never quite arrives.
- **Footer:** The strip at the very end of a page. Contact details, refund policies and accessibility statements usually live there.

Stuck starting? Decide what a person should see at the very bottom, then work backwards to how the rows arrive.

Is it enough? You can say how many items exist and how a person reaches the end.

</details>

#### 4. Specify return and insertion

**See it first.** Made-up example. Writing “she comes back to the same place” as if it were a specification, then finding that the same place had moved.

- **What I wrote:** One line: coming back from a class detail returns her to the same place in the list. It read like a finished decision, so I moved on.
- **The word I had not settled:** Same place can mean the same distance down the page, or the row she tapped. A page remembers distance. She remembers the row.
- **Walking it on paper:** I slid my paper window down the drawing, added two new classes at the top the way a live list would, and came back. Same distance down, four rows adrift.
- **What I changed:** She returns to the row she tapped, lightly marked so she can see where she is. Her filters and anything she typed come back with it, each one named separately.
- **The rule that had to follow:** New rows may only appear above the first row when she is already at the top. Otherwise they wait behind a small “3 new classes” bar she can tap.

**The wrong turn:** The wrong turn is writing a restore in one clause and believing it is specified. It reads complete because you know which meaning you had in mind, and the two meanings give different answers.

**What it costs:** Holding new rows back means she can sit reading a list that is quietly out of date, and may tap a class that has just filled. You are choosing a page that stays still over a page that stays current.

**Still unknown:** Still unknown: how long an absence should be before restoring her old position stops being kind. Four hours, a day, a week. Nothing here settles that.

- Specify that returning from a detail view restores position and filters.
- State where new content is inserted and that nothing moves under a finger.
- Reserve space for content that is loading.

**You should end up with:** What is restored when someone comes back, and a rule for where new content is allowed to appear.

Worksheet fields for this step:

- What is restored when someone returns from a detail view — Name each thing separately: the row, the scroll position, the filters, anything typed.
- Where new or still-loading content is allowed to appear, written as a rule — Include reserved space for anything still loading, so the page does not jump while someone is reading it.

<details>
<summary>Help with this step</summary>

- **Scroll position:** How far down a list a person had travelled before she left it.
- **Insertion rule:** A sentence saying where new or still-arriving content is allowed to appear, so nothing lands above what somebody is reading.
- **Reserved space:** A blank area held open at the right size for something still loading, so the page does not jump when it arrives.

Stuck starting? Walk the loop yourself: list, detail, back. Write down everything you lost on the way back.

Is it enough? The insertion rule would settle a case you have not met yet.

</details>

#### 5. Test on a phone

- Scroll your own design or a comparable page on a real phone.
- Record how much content is visible under the sticky elements.
- Save the decisions with their measurements.

**You should end up with:** What a real phone showed you, how much content was left, and the repair the Check questions asked for.

Worksheet fields for this step:

- What you saw scrolling your own design, or a comparable page, on a real phone
- How much content was visible below the fixed elements
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Comparable page:** Somebody else’s long list that works like yours, used on a real phone when your own design only exists on paper.
- **Repair:** The one change you make after the Check questions, written down together with the reason for it.

Stuck starting? Open any long list on your own phone and count how many rows you can see without scrolling.

Is it enough? You wrote what you saw on the device, not what your drawing implies.

</details>

**Save and continue.** Saved for you: Your measurements, decisions and rules save as you type, on this device first and then online. Kept outside the app: The paper viewport and the measured drawing stay in your own folder. Note the file name here if you photograph them; naming a file does not upload it. What your creator sees: Your creator reads the fixed-height total and what you dropped. The measurement is the part that shows this was decided rather than assumed. Your next action: Open Your work and choose Ready for review. The next lesson takes one editable value and removes its save button.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Measure the total sticky height at phone size and write it as a percentage of the viewport. Then justify each element or remove it.

</details>

<details>
<summary>Hint 2</summary>

Add the total to the list header and check you can reach the footer without fighting the loader.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Scrolling, sticky elements and long lists.
Task: Decide what stays fixed while a person scrolls, how a long list ends, and how someone returns to their place after leaving and coming back.
Challenge one thing at a time, and start with the mistake this lesson is about: “Sticky headers keep navigation available.” They keep it visible, at the cost of content, on the device with the least of it. Available means reachable; a header that returns when the person scrolls up is usually the better trade.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the measurements and justifications and ask whether sticky elements are justified and their cost measured. Look at the list specification and ask whether the list has a stated ending and a total. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Write the three states out on paper with the exact wording, then check the transitions in a local HTML file if you want to feel the timing of the saved indicator.

- Starting material: One editable value from your product.
- Create HaruCourse/Practice/m09-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Choose the value and read

- Choose one editable value in your product.
- Read the assigned status heuristic and error guidance.

**You should end up with:** One editable value chosen, and a line on what the product owes the person about where her change stands.

Worksheet fields for this step:

- The one value you will make editable where it sits
- From the assigned reading: what a product owes a person about the state of their change

<details>
<summary>Help with this step</summary>

- **Editing in place:** Changing a value where it sits on the screen, rather than on a separate edit page with its own save button.
- **Saving on its own:** The change is stored without anyone pressing anything. Often called autosave.

Stuck starting? Choose something small and real: a note, a date, a display name.

Is it enough? The value is one you could draw in three states on a single sheet.

</details>

#### 2. Design the three states

**See it first.** Made-up example. Taking the save button off a booking note, and finding that the person no longer knew she was safe.

- **What I did first:** Removed the save button and let the note store itself when the field lost focus. One less control, and the screen looked calmer.
- **What she saw:** Nothing. She typed, tapped elsewhere, and the screen looked exactly as it had before she typed a word.
- **What I had actually removed:** Not a button. The moment she knew her words existed somewhere other than the screen in front of her.
- **What replaced it:** “Saved 12:04” beside the note for six seconds, fading to a small grey “Saved” that stays until the next edit.
- **What that cost me:** Three states to draw and to word, instead of one field and a button. Removing a control is only simpler if you pay for it in feedback.

**The wrong turn:** The wrong turn is treating the save button as clutter. It was doing a job, and the job does not disappear when the button does.

**What it costs:** A visible saved state adds words to a quiet screen, and some people will find it fussy. That is the price of removing the control that used to reassure them.

**Still unknown:** Still unknown: whether six seconds is long enough for someone who looks away mid-edit. That needs watching a person, not deciding at a desk.

- Specify how viewing shows that the value is editable.
- Specify the editing state with a cancel and a done route.
- Specify the saved state with its wording and how long it shows.

**You should end up with:** Three states written as what a person sees, with the saved wording and how long it stays.

Worksheet fields for this step:

- Viewing · how it shows that the value can be changed — Something visible without hovering. Hover does not exist on a phone.
- Editing · what changes, and how she cancels or finishes
- Saved · the exact words, and how long they stay before settling

<details>
<summary>Help with this step</summary>

- **State:** What the same thing looks like at a different moment. One note, three appearances.

Stuck starting? Draw the three side by side on one sheet before you write any wording.

Is it enough? Someone could tell which state they were in from the drawing alone, with the labels covered.

</details>

#### 3. Decide the leaving case

- Choose save on blur, keep a draft, or discard with confirmation.
- Write the reason for your choice.
- Specify what the person sees when they return.

**You should end up with:** A stated behaviour for leaving part way through, the reason for it, and what she meets on her return.

**Try it with help.** A supplied made-up case. Someone is half way through typing a note on a booking. She taps a notification and the app closes. She comes back four hours later.

Which behaviour would you specify, and what makes it defensible?

- **Keep the half-typed note as a draft, show it in the editing state on her return, and say when it was last changed.** — Her words are kept, and nothing half-finished was stored under her name as though she meant it. The time tells her what she is looking at four hours later.
- Store what was typed, quietly, as if she had finished. — It keeps her words and it also publishes half a sentence as though it were final. On a shared booking someone else may read it before she does.
- Throw it away, since she left without finishing. — Leaving is rarely a decision. A notification is not the same as pressing cancel, and discarding is the one outcome she cannot reverse.
- Ask her to confirm before the app closes. — A tap on a notification does not wait for a question, and a question she never sees settles nothing. Keep the text and ask her later, when she is back.

**Then:** Write your own choice, and beside it the one thing each other choice would have cost her.

Worksheet fields for this step:

- What happens when someone leaves part way through an edit (Save what is there / Keep it as a draft and offer it on return / Discard it, after asking first)
- Why you chose that, and what the other choices would have cost
- What she sees when she comes back

<details>
<summary>Help with this step</summary>

- **Leaving mid-edit:** A person moving away with a change half typed: a notification tapped, a tab closed, a phone going to sleep.
- **Draft:** A half-finished change held aside rather than stored over the old value, and offered back to her when she returns.
- **Return view:** What she meets when she comes back: the old value, her draft, or a line telling her which of the two she is looking at.

Stuck starting? Ask what she would call the worst outcome, then rule that one out first.

Is it enough? Your reason would still hold up if someone preferred a different choice.

</details>

#### 4. Design failure

**See it first.** Made-up example. Writing a failure message that was honest about the failure and silent about her words.

- **What I wrote first:** A small red line saying “Could not save”, with a Retry link beside it. Short, honest, and I was pleased with it.
- **What she cannot tell from it:** Whether her words still exist anywhere. The message reports the failure and says nothing at all about the text she just typed.
- **What I watch myself do:** When another product tells me a save failed, I select my text and paste it somewhere safe before I touch anything else. That is a person doing the product’s job for it.
- **The wording I moved to:** “Not saved yet. Your note is kept on this device. Retry.” The middle sentence is the one carrying the weight.
- **What retry had to become:** Retry sends whatever is in the field now, not the version that failed. Otherwise the second attempt quietly undoes everything she typed while waiting.

**The wrong turn:** The wrong turn is writing a message that is accurate about what went wrong and quiet about what it means for her. It reads honest, and it leaves her to assume the worst.

**What it costs:** Keeping her text on the device means one version of the note can sit on that phone and not anywhere else. She may open the same booking on a laptop and meet older words. You are trading agreement between devices for losing nothing.

**Still unknown:** Still unknown: what should happen when the retry fails a second and a third time. Nothing decided here says when the product should stop trying and hand the problem back to her.

- Specify that text is retained locally when a save fails.
- Write the message: what happened and what to do.
- Provide retry that does not lose the edit.

**You should end up with:** Failure specified: where the text is kept, the exact message, and a retry that does not lose the edit.

Worksheet fields for this step:

- Where the text is kept when a save fails, and what survives a reload
- The failure message, in the exact words: what happened and what to do
- How retry works without losing the edit

<details>
<summary>Help with this step</summary>

- **Kept locally:** Held on her own device, so a reload or a dropped connection does not take the words with it.

Stuck starting? Write the message before the mechanism. The words tell you what the mechanism has to do.

Is it enough? The message says what happened, where the text is, and what to do next.

</details>

#### 5. Check and record

- Check the three states are distinguishable in greyscale.
- Record what you could not verify without a build.
- Save the specification with the wording.

**You should end up with:** The greyscale check, what you could not verify without a build, and the repair the Check questions asked for.

Worksheet fields for this step:

- What happened when you looked at the three states with the colour removed — Print in grey, or turn the colour down on a screenshot until only lightness is left.
- What you could not check without something built
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Greyscale check:** Looking at your drawing with every colour taken out, to see whether the states still tell themselves apart.
- **Build:** A working version of the product that somebody can actually use, rather than a drawing of one.
- **Unverified:** Something you wrote down but could not check, usually because it needs timing or a real failure that paper cannot show you.

Stuck starting? Look at the three states with the colour removed and ask which one you are in.

Is it enough? The unverified list names timing and failure behaviour, which a drawing cannot show.

</details>

**Save and continue.** Saved for you: The three states, the wording and the failure message save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. If you drew the three states, keep the sheet in your own folder and note its name. What your creator sees: Your creator reads the saved wording, the leaving behaviour and the failure message. The leaving decision with its reason is the part that shows judgement. Your next action: Open Your work and choose Ready for review. The next lesson gathers every duration and rule from this module onto one sheet.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Draw the three states side by side in greyscale. If you cannot tell them apart, add a border, a background or an icon.

</details>

<details>
<summary>Hint 2</summary>

Write the exact words the person sees after a save and how long they stay.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Editing in place and saving without a button.
Task: Design one in-place edit that shows clearly when it is editable, when it is saving and when it has saved, with a defined behaviour for failure and for leaving mid-edit.
Challenge one thing at a time, and start with the mistake this lesson is about: “Autosave is simpler for the user.” It is simpler when it works and worse when it does not, because it removes the moment the person knew they were safe. Simplicity here is paid for with a specific, visible save state.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the three states and ask whether viewing, editing and saved are visually distinct. Look at the confirmation specification and ask whether the save confirmation is specific and timed. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A written table plus the rules. If you want to compare durations honestly, a local HTML file with three buttons using your three values takes ten minutes and settles arguments quickly.

- Starting material: Your m08 token sheet and this module's specifications.
- Create HaruCourse/Practice/m09-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Collect what you used

- List every duration and easing across this module's specifications.
- Mark near-duplicates: values within 50ms of each other.

**You should end up with:** Every duration and easing you used, listed with where it appeared, and the near-duplicates marked.

Worksheet fields for this step:

- Every duration and easing across this module’s specifications, with where each one was used
- Which values sit within 50ms of each other

<details>
<summary>Help with this step</summary>

- **Duration:** How long a change takes, written in milliseconds. A thousand milliseconds is one second.
- **Easing:** How the speed changes across that time. Starting fast and settling feels like arriving; an even speed feels mechanical.

Stuck starting? Work backwards through this module’s specifications and copy out every number you find.

Is it enough? The list surprises you with how many values you used without ever deciding on them.

</details>

#### 2. Name and cut

**See it first.** Made-up example. Naming three durations after the screens they were used on, then having to rename all of them six weeks later.

- **What I wrote first:** filter-panel 200ms, detail-view 250ms, confirmation-fade 120ms. Each name said exactly where the value was used.
- **Why it felt right:** Anyone reading the sheet could see which value belonged to which screen. It looked organised and it read clearly.
- **What broke it:** The filter panel became a full screen and the detail view became a panel. Two names now pointed at the wrong things.
- **The question I could not answer:** Someone asked whether a new drawer should use filter-panel or detail-view. The names carried no reason, so there was nothing to decide with.
- **What replaced them:** instant 0ms for state changes, quick 150ms for small movement, moderate 250ms for panels. The drawer is a panel, so it is moderate. The question answered itself.

**The wrong turn:** The wrong turn is naming a value after the place you first used it. It reads clearly on the day, and it stops meaning anything the moment the screen changes.

**What it costs:** Role names are vaguer than screen names, and you lose the ability to see at a glance where a value is used. What you get is a sheet that survives a redesign.

**Still unknown:** Still unknown: whether three roles is enough. A fourth may be needed, and adding one deliberately with a reason is a different act from inventing one at midnight.

- Group the values into three roles and give each a name and a number.
- Choose entering, exiting and moving easings.
- Remove every value that does not fit a role.

**You should end up with:** Three durations and three easings, each named for the role it serves and given a number.

Worksheet fields for this step:

- Three named durations: the name, the number, and the role each one serves
- Your entering, exiting and moving easings, each with what it should feel like — Three is plenty. Entering fast and then settling reads as arrival.

<details>
<summary>Help with this step</summary>

- **Role:** The job a value does, such as small movement or a panel arriving, rather than the screen you first happened to use it on.
- **Near-duplicate:** Two values so close that nobody could tell them apart, such as 200 and 220 milliseconds. One of the two goes.
- **Entering and exiting:** Movement as something arrives on the screen, and movement as it leaves. The two usually want different easings.

Stuck starting? Sort your values into no movement, small movement and larger movement. Those are usually the three roles.

Is it enough? Each name would still make sense if every screen in your product were redrawn.

</details>

#### 3. Write the rules

**See it first.** Made-up example. Writing five motion rules, then finding that four of them could not settle a single disagreement.

- **What I wrote:** “Motion should feel calm and purposeful.” Four more in the same voice. The sheet looked considered and I was fond of it.
- **The test I put them through:** I imagined somebody proposing a badge that spins on the confirmation screen. Would any of my five sentences stop it? They would say their badge was calm and purposeful too.
- **What a rule has to contain:** Something you can point at and count. A part of the screen, a number, or a thing named as never moving.
- **What I rewrote them as:** “No row above the line somebody is reading may shift.” And “at most one thing animates in a view at a time; a second waits its turn.”
- **What happened to the badge:** The proposal now fails on the counting rule, and the conversation is about the rule rather than about taste. Nobody has to win an argument.

**The wrong turn:** The wrong turn is writing rules that describe how you want the product to feel. They are pleasant to read, and every proposal passes them, including the ones you wrote them to prevent.

**What it costs:** A countable rule will one day forbid something that would have been perfectly fine, and you will have to break your own rule in the open and write down why. A vague rule never puts you in that position.

**Still unknown:** Still unknown: whether one thing at a time holds for a screen where several panels arrive together. That case has not come up yet, and it may need an exception with a reason attached.

- Write the rules as sentences a new person could follow.
- Include what must never move and what never animates.
- Include the one-thing-at-a-time rule if your audit found competition.

**You should end up with:** Rules written as sentences, including what must never move and how many things may animate at once.

Worksheet fields for this step, revealed a few at a time in the app:

- Rule 1
- Rule 2 — Include one rule about what must never move, and one about how many things may animate at once in a view.
- Rule 3
- Rule 4
- Rule 5

<details>
<summary>Help with this step</summary>

- **Rule:** A sentence that decides a case you have not met yet. If it cannot settle a disagreement, it is a preference rather than a rule.

Stuck starting? Take the animation you removed in lesson 1 and write the rule that would have prevented it.

Is it enough? Each rule could settle a proposal without you being in the room.

</details>

#### 4. Pair with reduced motion

- For every duration and pattern, record its reduced-motion alternative.
- Check the pairs preserve the explanation the original carried.

**You should end up with:** A reduced-motion alternative for every duration and pattern, checked for whether the meaning survived.

**Try it with help.** A supplied made-up entry from the sheet: moderate 250ms, used where the filter panel enters from the filter button, so the person can see where the panel came from.

Which reduced-motion pair keeps what the movement was explaining?

- **A 120ms fade in place, with the filter button staying marked while the panel is open.** — The movement was saying this came from that. Keeping the button marked says the same thing without moving anything across the screen.
- Remove the transition entirely, so the panel simply appears. — That deletes the explanation along with the movement. She now has a panel and no idea what produced it.
- Keep the slide, at 100ms instead of 250ms. — Faster movement is still movement, and speed can make it harder to follow rather than gentler. The request was for less, not quicker.
- Replace it with a slower 400ms slide, so it feels gentler. — Slow and gentle are not the same thing. A long slide across the screen is the pattern the setting is asking you to stop.

**Then:** Work down your own sheet and write the pair for every row, including the rows where the honest pair is no change at all.

Worksheet fields for this step:

- For each duration and each pattern: its reduced-motion alternative
- Any pair where the reduced version stopped explaining what the original explained

<details>
<summary>Help with this step</summary>

- **Reduced motion:** A setting on a person’s own device asking for less movement. Reduced means gentler, not deleted.

Stuck starting? Work down the sheet row by row rather than picking out the interesting ones.

Is it enough? Every row has a pair, and you can say what each pair still tells the person.

</details>

#### 5. Apply and record exceptions

- Apply the sheet to three components without exception.
- Record every value you had to invent and resolve each deliberately.
- Save the sheet with the rules and the exception list.

**You should end up with:** Three components respecified from the sheet, every invented value resolved, and the repair the Check questions asked for.

Worksheet fields for this step:

- The three components respecified using only what is on the sheet
- Every value you had to reach for that was not on the sheet, and how you resolved it — There are two honest resolutions: it fits a role you already have, or the role was genuinely missing and you add it with a reason.
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Component:** One reusable part of a product, such as a card, a menu or a button, specified once and used in many places.
- **Respecify:** Writing a component’s motion out again using only the names on your sheet, instead of the numbers you first reached for.
- **Exception:** A value you needed that the sheet does not cover, written down with its reason rather than quietly kept.

Stuck starting? Take the component you specified in most detail and respecify it using only the names on your sheet.

Is it enough? No component uses a number that is not on the sheet without a recorded reason.

</details>

**Save and continue.** Saved for you: The sheet, the rules and the exception list save as you type, on this device first and then online. Kept outside the app: Nothing here needs a file. Keep your m08 token sheet beside this one; they are two halves of the same document. What your creator sees: Your creator reads the rules and the exception list. The exceptions show whether the sheet survived contact with real components. Your next action: Open Your work and choose Ready for review. The next lesson puts these interactions in front of three people on their own phones.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

List every value you used, group them into three, and merge anything within 50ms.

</details>

<details>
<summary>Hint 2</summary>

Take the animation you removed in lesson 1 and check whether your rules would have prevented it. If not, tighten them.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: An interaction sheet: durations, easings and rules.
Task: Produce an interaction sheet naming your durations, easings and interaction rules, and apply it across three components so nothing is decided twice.
Challenge one thing at a time, and start with the mistake this lesson is about: “Motion values belong in the code.” The numbers can live in code; the decisions and their reasons cannot, or the next person changes 200 to 320 because it felt nicer on their machine and nobody can say why it was 200.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the named table and ask whether durations and easings are named by role with numbers. Look at the rules and the test case and ask whether rules are written as sentences that settle cases. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A rough local HTML page opened on the participants' own phones over a shared connection, or a paper prototype for the parts that are about order rather than timing. No testing platform or device lab is required.

- Starting material: Your interaction specifications and, if possible, a rough build.
- Create HaruCourse/Practice/m09-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Plan the sessions

- Read the assigned session guidance and write two tasks.
- Decide which single aspect each session focuses on.
- Extend your consent introduction to cover using their device.

**You should end up with:** Two tasks in the words you will say, one thing each session is watching for, and an honest route for who you can ask.

Worksheet fields for this step:

- The two tasks you will ask for, in the words you will actually say — Say the goal, never the route. “Remove the second class from your shortlist” and not “swipe the row”.
- The single thing each session is watching for
- Who you can actually ask, and the honest route if the answer is nobody — If nobody is available, say so plainly and use the rehearsal route in this step. A rehearsal is never written up as research.

<details>
<summary>Help with this step</summary>

- **Task:** A goal you hand someone. It never names the control, or you have already taught them the answer.
- **Rehearsal:** You walking the task yourself when nobody is available. It tells you about your design and nothing at all about people.

Stuck starting? Write each task as the sentence a friend would say to you, then take out every word that names a control. If nobody is available at all, run both tasks yourself twice on a phone you did not design on, write it down as a rehearsal, and say plainly that no participant was involved.

Is it enough? Neither task could be completed by following your wording literally.

</details>

#### 2. Run three sessions

- Run the tasks on each participant's own phone where possible.
- Record double taps, hesitations and anything they could not find.
- Do not explain gestures or controls during the task.

**You should end up with:** One written record per person, on their own device where possible, and a count of every repeated action.

Worksheet fields for this step:

- Person 1 · device, what they did, where they hesitated, what they could not find
- Person 2 · device, what they did, where they hesitated, what they could not find
- Person 3 · device, what they did, where they hesitated, what they could not find
- Every moment someone acted twice, and where it happened

<details>
<summary>Help with this step</summary>

- **Second tap:** Someone pressing the same thing again. It nearly always means nothing told them the first press had worked.

Stuck starting? Say the task, then stop talking. Silence is the instrument.

Is it enough? Each record names a device and describes actions rather than opinions.

</details>

#### 3. Rank by harm

**See it first.** Made-up example. Ranking six findings by how bad they felt, then re-ranking them by what they actually cost.

- **My first order:** Top of the list was the confirmation screen looking unfinished. It had bothered me for a week, and someone finally said it out loud.
- **What sat below it:** Two people tapping the book button twice. I had put that fourth, because both of them completed the booking anyway.
- **The question that reordered everything:** What did this cost the person? A second tap can send a second request. An unfinished-looking screen costs nobody anything at all.
- **The one I nearly lost:** A note that lost its last few characters. Nobody complained, because nobody noticed until much later.
- **The order I ended with:** The lost text, then the repeated taps, then the person who could not find the remove control, then everything else.

**The wrong turn:** The wrong turn is ranking by how strongly you feel about each finding. The thing that has irritated you all week rises to the top and stays there.

**What it costs:** Ranking by harm means the finding you most want to fix may sit fifth, untouched, for weeks. That is what working on the worst thing first actually costs.

**Still unknown:** Still unknown: how often the lost text happens. Three sessions cannot say, and this ranking is a judgement about consequence rather than frequency.

- List the problems and rank them by what they cost the person.
- Put duplicate actions and lost work above confusion and slowness.

**You should end up with:** Everything you found, ordered by what it cost the person, with the worst one named.

**Try it with help.** Six findings from a made-up round of sessions, written for practice. Sort each one: a real harm to the person, a preference you happen to share, or something only you would ever notice.

- Two people tapped the book button a second time, because nothing changed until the server replied.
  - **harm** — A second tap can send a second request, and she may be charged twice without ever knowing she did it.
  - shared preference — Nobody chose this. She tapped again because the product told her nothing, which is a defect rather than a taste.
  - only you noticed — Two participants did it in front of you. It is the most visible thing in your notes.
- One person’s typed note lost its last few characters when the connection dropped, and she did not notice.
  - **harm** — Her work disappeared and nothing said so. Not noticing at the time makes it worse rather than smaller.
  - shared preference — Nothing here is a matter of taste. Her words are gone, whatever anyone would have preferred.
  - only you noticed — You spotted it and it happened to her. Whose eyes caught it does not change whose work was lost.
- A person said she would rather the filter panel opened on the left, and you have always thought so too.
  - harm — She found the filters and used them. Nothing was lost, slowed or repeated.
  - **shared preference** — One person’s taste, agreeing with yours. That agreement is exactly what makes it easy to promote, and worth marking so it cannot.
  - only you noticed — She raised it herself, so it is not invisible. It is simply not costing anyone anything.
- A person said the confirmation screen “could be prettier”, and you had been meaning to redraw it anyway.
  - harm — She completed the booking and read the confirmation. Nothing about the task failed for her.
  - **shared preference** — A comment landing on a plan you already had. Marking it stops it jumping the queue on the strength of your agreement.
  - only you noticed — She said it out loud, so you were not alone in seeing it. The thing to be careful of here is your agreement.
- The panel enters at 250ms and the drawer at 200ms. Nobody mentioned it, and you found it on your third replay.
  - harm — Nothing failed, repeated or disappeared. Fifty milliseconds is well below what anyone was working at.
  - shared preference — Nobody expressed a view on it at all, so there is nothing shared. This one is yours alone.
  - **only you noticed** — Real, tidy, and belonging on your interaction sheet rather than in this week’s work.
- The saved marker fades a fraction later on the note field than on the date field, which you saw while stepping through your recording.
  - harm — Both markers appeared and both said saved. Nobody waited, repeated an action or lost anything.
  - shared preference — Nobody expressed a preference about it, because nobody saw it happen.
  - **only you noticed** — A difference of a frame or two, found on a replay. Record it on the sheet and let it wait.

**Then:** Sort your own findings the same way, then rank only the harms against each other.

**What to watch for:** The question is never how strongly you feel about it. It is what it cost the person in front of you. The one that disguises itself best is the preference you happen to share.

Worksheet fields for this step:

- Everything you found, in order of what it cost the person — Repeated actions and lost work sit above confusion. Confusion sits above slowness.
- The worst one, in a sentence, with who it happened to

<details>
<summary>Help with this step</summary>

- **Harm:** Something that cost the person: lost work, an action she had to repeat, money, or time she does not get back.
- **Finding:** One thing you saw happen, written as the action itself rather than as your explanation of it.
- **Preference:** Something you would rather were different, which cost the person nothing at all.

Stuck starting? Take each finding and try to finish the sentence “this cost her …”. If the sentence will not finish, it is not a harm.

Is it enough? Everything that cost someone a repeated action or lost work sits above everything that did not.

</details>

#### 4. Predict and repair

**See it first.** Made-up example. Predicting that a changed button would stop the second taps, then changing three things at once and having nothing left to read.

- **The prediction I wrote:** “Nobody taps book a second time.” Written down before I touched the drawing, which was the one part I did in the right order.
- **What I then changed:** The button says Booking and stops accepting taps, and I moved it up the screen, and I shortened the wait before the confirmation. Three changes in one sitting.
- **The re-test I could actually run:** Nobody was free that week, so I walked both tasks myself, twice, on an old phone I had never designed on. That is a rehearsal, and I wrote it down as one.
- **What the rehearsal could not tell me:** Nothing was tapped twice, but I already knew where the button was. And had it gone badly, I could not have said which of my three changes was at fault.
- **What I recorded instead:** The prediction, the one change I kept, the two I set aside for the next round, and a plain line saying no participant has seen this version.

**The wrong turn:** The wrong turn is making every improvement you can see while the file is open in front of you. Each one is defensible on its own, and together they make the result unreadable.

**What it costs:** One change at a time means the two faults you already know about stay in the product until the next round, where somebody may meet them. You are buying a readable result with time.

**Still unknown:** Still unknown: whether the changed button helps anybody who is not you. Walking your own design cannot answer that, and the answer has to be written down as missing rather than assumed.

- Write what the repair should change before making it.
- Change one thing only.
- Re-test with at least one person who has not seen it.

**You should end up with:** A prediction written before the change, one change made, and an honest account of the re-test.

Worksheet fields for this step:

- Written before you change anything: what the repair should change, and how you would see it
- The one thing you changed
- What happened on the re-test, including if the repair did not help or made something else worse — A repair that failed is a finding. Write it as it happened and leave the prediction beside it, unedited.

<details>
<summary>Help with this step</summary>

- **Prediction:** What you expect to see afterwards, written down first so that the result is able to disagree with you.

Stuck starting? Write the prediction as something you could watch happening or not happening, then stop and make the change.

Is it enough? The prediction was written before the change and has not been edited since.

</details>

#### 5. Record what is untested

- List every interaction claim you could not verify.
- State plainly that no test with assistive-technology users was run.
- Save the records, the ranking and the repair result.

**You should end up with:** Every claim you could not verify, a plain statement about assistive technology, and the repair the Check questions asked for.

Worksheet fields for this step:

- Every interaction claim you could not verify
- Your plain statement about assistive technology
- What you changed after the Check questions

<details>
<summary>Help with this step</summary>

- **Assistive technology:** Tools people use to reach a product, such as software that speaks the screen aloud, or a switch pressed instead of a tap.
- **Screen reader:** Software that reads a screen aloud in order, so somebody can use a product without seeing it.
- **Untested claim:** A line in your specification written as though it were settled, which you never watched anybody meet.

Stuck starting? Go through your key tables and focus rules marking each row tested or untested. The untested rows are the list.

Is it enough? Nothing in the untested list is written as though it had been checked.

</details>

**Save and continue.** Saved for you: The session records, the ranking and the repair save as you type, on this device first and then online. Kept outside the app: Recordings and photographs stay in your own folder. Note the file names here; naming a file does not upload it. What your creator sees: Your creator reads the ranking, the prediction and the untested list. The untested list is what makes the rest of it believable. Your next action: Open Your work and choose Ready for review. Module 10 asks how much fidelity a prototype actually needs.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Re-run at least one session on a phone you did not design on and record the device.

</details>

<details>
<summary>Hint 2</summary>

Re-read your notes for every moment someone acted twice and record it as a defect with its location.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Test the interactions and repair one.
Task: Test your interactions with at least three people on a real device, rank what you find by harm, repair the worst with a prediction written first, and record what remains untested.
Challenge one thing at a time, and start with the mistake this lesson is about: “It works on my machine, so the interaction is fine.” Your machine has a precise pointer, a fast connection, a large screen and a person who knows where everything is. None of those describe your users.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the session records with devices and ask whether sessions were run on participants' own devices. Look at the double-tap record and ask whether double taps and lost actions are counted, not interpreted away. Anything you cannot show, write down as untested rather than assuming it holds.

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
