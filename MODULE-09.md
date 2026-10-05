# Interaction and motion

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the all-course action contract](docs/COURSE-AUTHORING.md#all-course-action-contract--13-september-2026). All 224 published teaching lessons use saved action flows. Published, teaching-refined, learner-validated and assessed remain separate states.

Generated from src/module9.ts; edit that source, then run npm run docs:generate. Level 3 · Module m09 · requirement areas 9. Optional effort 25 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m08. This is guidance for meaningful practice, not a lock. Module approved resource pair: R13 / R02. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: What motion is actually for

Stable ID: m09-l01-v1. Core.

Motion is expensive attention. Each animation should answer a question the person was about to ask, or it is spending their time for someone else's pleasure.

Bring: Your m08 screens and state specifications.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- An audit listing every animation with the question it answers
- A classification: feedback, continuity, attention or decoration
- A removal list with the time each removal gives back
- A stated rule for when your product animates

### Start here: in everyday words

Interaction design explains what happens when someone acts, what they see next and how they recover from a mistake. In this lesson, your first small result is: A list of everything in your designs that changes over time, including movement you have only imagined.

**Words you will use**

- **Animation:** Anything that changes over time rather than all at once: a fade, a slide, a colour easing in, a spinning shape.
- **Millisecond:** A thousandth of a second. Motion is written in milliseconds because the useful range is 100 to 400 of them.
- **Feedback motion:** Answers “did that work?” inside the moment of acting.

**Quick example.** Made-up example. Auditing eleven animations in a booking app, and getting the first classification wrong. Eleven animations, written down as effects: fade, slide, bounce, shimmer. A list of techniques rather than of purposes.

The reader demonstrates and guides the task before asking for “Every animation in your designs, one per line”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Audit every animation you have proposed or seen in your product, classify each as feedback, continuity, attention or decoration, and remove the ones that answer no question.


### Feedback motion answers “did that work

Section: learn. Stable action: learn-1.

Feedback motion answers “did that work?” within the moment of acting.


### Continuity motion answers “where did this come from

Section: learn. Stable action: learn-2.

Continuity motion answers “where did this come from?” when something appears or moves.


### Attention motion answers “what changed

Section: learn. Stable action: learn-3.

Attention motion answers “what changed?” for something the person did not cause.


### Decoration answers nothing

Section: learn. Stable action: learn-4.

Decoration answers nothing. It is not forbidden, but it must be cheap and skippable.


### Anything that delays the person's next action must earn the delay

Section: learn. Stable action: learn-5.

Anything that delays the person's next action must earn the delay.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Made-up example: an audit of the booking flow found eleven animations. Four were feedback and stayed. Three were continuity — the filter panel sliding from the control that opened it, the detail view expanding from its row — and stayed. Two were attention: one legitimate, marking a place that had just been taken by someone else, and one an animated banner promoting a class, which was demoted to a static card. Two were decoration: a bouncing icon on the confirmation screen, kept because it cost nothing and did not delay anything, and an animated page transition that added 400ms to every navigation, which was removed and immediately made the whole flow feel faster.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### List what moves

Section: practice-plan. Stable action: step-1-brief.

A list of everything in your designs that changes over time, including movement you have only imagined.

- List every animation in your designs, including ones you assumed.
- Include page transitions, hovers, presses and anything that fades.

**Start here:** Walk one booking from start to finish and say out loud what changes at each tap.

**Enough:** You have caught the quiet ones: hover states, presses, loading, and the change between screens.

**Animation:** Anything that changes over time rather than all at once: a fade, a slide, a colour easing in, a spinning shape.

**Millisecond:** A thousandth of a second. Motion is written in milliseconds because the useful range is 100 to 400 of them.


### Every animation in your designs, one per line

Section: practice-plan. Stable action: write-motion-list.

Walk one whole task slowly. Presses, hovers, screen changes, anything that fades, anything that loads.

**Answer:** Every animation in your designs, one per line

Walk one whole task slowly. Presses, hovers, screen changes, anything that fades, anything that loads.


### The ones you assumed rather than drew

Section: practice-plan. Stable action: write-assumed-motion.

Write your answer for “The ones you assumed rather than drew”. Use the task instructions below to decide what to include.

**Answer:** The ones you assumed rather than drew



<details>
<summary>Example</summary>

Example (made up): I never drew the screen change, but I have been picturing a slide the whole time.

</details>


### Ask what each answers

Section: practice-plan. Stable action: step-2-brief.

Each animation paired with the question a person is asking at that moment, then marked feedback, continuity, attention or decoration.

- For each, write the question a person is asking at that moment.
- Classify it as feedback, continuity, attention or decoration.
- Mark any that answers nothing.

**Start here:** Take the first animation on your list and finish the sentence “at this moment the person is wondering …”.

**Enough:** Every line has a question beside it, and the ones with no question are marked.

**Feedback motion:** Answers “did that work?” inside the moment of acting.

**Continuity motion:** Answers “where did this come from?” when something appears, grows or moves.

**Attention motion:** Answers “what changed?” for something the person did not cause.

**Decoration:** Answers nothing. Allowed, but only where it is free and does not repeat.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Auditing eleven animations in a booking app, and getting the first classification wrong.

**What I listed first:** Eleven animations, written down as effects: fade, slide, bounce, shimmer. A list of techniques rather than of purposes.

**My first classification:** I called the screen slide continuity, because the new screen came in from the right. It sounded like an explanation.

**The question that broke it:** Continuity answers “where did this come from?”. Nothing was to the right a moment earlier. There was no “there” for it to come from.

**What it actually was:** Decoration, charging about 400 milliseconds on every screen change. Decoration is allowed. Decoration that makes you wait is not.

**What removing it gave back:** About 1.6 seconds across a four-screen booking. The flow felt faster straight away, and nothing looked broken without the slide.

**Wrong turn:** The wrong turn is naming the label from the movement. A slide always sounds like continuity, which is exactly why the expensive ones survive an audit.

**Trade-off:** Classifying by the person’s question is slower, and it will make some of your favourite work look pointless. That is the finding, not a failure of the method.

**Unknown:** Still unknown: whether the durations you are estimating match what a real device does. Until something runs on a phone, these remain considered guesses.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-2-sort-1.

Six animations from a made-up booking app. For each one, decide which question it answers for the person in that moment.

The Book button darkens the instant your finger lands on it, before anything has been sent.

- feedback
- continuity
- attention
- decoration

<details>
<summary>After your attempt</summary>

feedback — The person acted and the product answered inside the same moment. That is what “did that work?” needs.

continuity — Nothing arrived from anywhere. The button stayed where it was and only changed its appearance.

attention — Attention motion reports a change the person did not cause. This one is caused by their own finger.

decoration — It answers a real question. Remove it and a slow connection leaves the press unacknowledged.

Now label your own list the same way, and mark every item that answers nothing.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-2-sort-2.

Six animations from a made-up booking app. For each one, decide which question it answers for the person in that moment.

The filter panel grows out of the filter button that opened it, and shrinks back into that button when it closes.

- feedback
- continuity
- attention
- decoration

<details>
<summary>After your attempt</summary>

feedback — The press is already acknowledged by the button itself. This one is about the panel’s place, not about the press.

continuity — It shows where the panel came from and where it will go back to, so the person does not have to remember.

attention — The person opened the panel, so nothing is being reported to them that they did not ask for.

decoration — Take it away and the panel appears from nowhere. Something is lost, so it is not decoration.

Now label your own list the same way, and mark every item that answers nothing.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-2-sort-3.

Six animations from a made-up booking app. For each one, decide which question it answers for the person in that moment.

While you are reading, the remaining-places number changes from 3 to 2 and glows once as it does.

- feedback
- continuity
- attention
- decoration

<details>
<summary>After your attempt</summary>

feedback — Feedback answers an action the person has just taken. Nobody took an action here.

continuity — Nothing travelled from one place to another. The number changed where it stood.

attention — The person did not cause this and would otherwise miss it. The glow answers “what changed?”.

decoration — Without it the number changes in silence and someone books a place that has already gone.

Now label your own list the same way, and mark every item that answers nothing.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-2-sort-4.

Six animations from a made-up booking app. For each one, decide which question it answers for the person in that moment.

Tapping a class row expands it into the full detail view, and the row stays visible beneath the top of it.

- feedback
- continuity
- attention
- decoration

<details>
<summary>After your attempt</summary>

feedback — The tap needs its own acknowledgement, and that should arrive sooner than this movement can.

continuity — The detail view comes out of the row it belongs to, so the way back is obvious without reading anything.

attention — The person caused this by tapping. Attention motion is for changes they did not cause.

decoration — It carries the link between the row and the detail. Removing it costs the person that link.

Now label your own list the same way, and mark every item that answers nothing.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-2-sort-5.

Six animations from a made-up booking app. For each one, decide which question it answers for the person in that moment.

After you press Pay, the label becomes “Paying” and a small dot pulses beside it until the reply arrives.

- feedback
- continuity
- attention
- decoration

<details>
<summary>After your attempt</summary>

feedback — It answers “did that work?” at once, and keeps answering it for as long as the person is waiting.

continuity — Nothing moved from anywhere. The control changed in place.

attention — The person pressed Pay, so this is a reply to them rather than news about something else.

decoration — Take it away and a slow connection leaves four silent seconds, which is where second presses come from.

Now label your own list the same way, and mark every item that answers nothing.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-2-sort-6.

Six animations from a made-up booking app. For each one, decide which question it answers for the person in that moment.

Every screen slides in from the right when you navigate, and you cannot read anything for about 400 milliseconds.

- feedback
- continuity
- attention
- decoration

<details>
<summary>After your attempt</summary>

feedback — The tap was already acknowledged by the control. This begins afterwards and only delays the result.

continuity — Continuity needs a place the content came from. An invented direction is not a place.

attention — The person asked for the new screen, so nothing is being reported to them.

decoration — Nothing was to the right a moment earlier, so it explains nothing, and it charges 400 milliseconds every single time.

Now label your own list the same way, and mark every item that answers nothing.

</details>


### For each animation: the question the person is asking at that moment, and its kind

Section: practice-plan. Stable action: write-classification.

Write your answer for “For each animation: the question the person is asking at that moment, and its kind”. Use the task instructions below to decide what to include.

**Answer:** For each animation: the question the person is asking at that moment, and its kind



<details>
<summary>Example</summary>

Example (made up): the panel growing out of the filter button answers “where did this come from?”, so continuity.

</details>


### The ones that answer no question at all

Section: practice-plan. Stable action: write-answers-nothing.

Write your answer for “The ones that answer no question at all”. Use the task instructions below to decide what to include.

**Answer:** The ones that answer no question at all




### Count the cost

Section: practice-plan. Stable action: step-3-brief.

An estimated delay for each animation, a total across one complete task, and anything that moves under a finger.

- Estimate the delay each animation adds before the next action is possible.
- Add up the delay across one complete task.
- Mark anything that moves an element the person is about to tap.

**Start here:** Count only the time before the next action is possible, not the whole length of the movement.

**Enough:** The total is a number you can say out loud, and it either surprised you or it did not.

**Delay:** The gap between finishing one action and being able to start the next. It is usually longer than the movement, because nothing accepts a tap until the movement has settled.

**Complete task:** One whole thing a person came to do, from the first tap to the moment they have what they wanted.

**Moving target:** Something that changes position while a finger is already travelling towards it.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Costing the motion in a bus timetable app, and getting a total that was far too small.

**What I wrote down first:** A duration beside each animation. 400 for the screen change, 200 for the panel, 300 for the shimmer while stops load. They added up to 900 milliseconds, which sounded like nothing at all.

**What the total hid:** I had counted each animation once, because my list had each animation once. Walking one whole journey lookup, the screen change fires four times and the shimmer fires twice.

**The second thing I had missed:** The number I wanted was not how long the movement lasts. It was how long until the next tap is possible, and the panel refuses taps until it has settled.

**What the honest count came to:** Around 2.4 seconds of waiting inside one lookup, instead of 900 milliseconds. Same design, same list, a number nearly three times larger.

**The cost that is not time:** The results list re-sorts itself as new times arrive, under a thumb already on its way down. That one is not measured in milliseconds. It is measured in taps on the wrong bus.

**Wrong turn:** The wrong turn is totalling the durations once each, straight off the list. It is tempting because the list is already written and the sum takes a minute, and it quietly reports the cost of reading your specification rather than the cost of using your product.

**Trade-off:** Counting by walking the task means doing the walk slowly, more than once, and ending up with an estimate you cannot defend to the decimal. You are trading a small tidy number for a larger vague one that happens to be true.

**Unknown:** Still unknown: whether 2.4 seconds across one lookup actually bothers anybody. You have a total and no evidence about where a person starts to feel it, because nobody has been watched using this.


### For each animation: how long before the next action is possible, in milliseconds

Section: practice-plan. Stable action: write-delay-estimates.

Where you do not know, say “one elephant” out loud. That is roughly one second, and it is enough to judge by.

**Answer:** For each animation: how long before the next action is possible, in milliseconds

Where you do not know, say “one elephant” out loud. That is roughly one second, and it is enough to judge by.


### The total delay added across one complete task

Section: practice-plan. Stable action: write-task-total.

Write your answer for “The total delay added across one complete task”. Use the task instructions below to decide what to include.

**Answer:** The total delay added across one complete task



<details>
<summary>Example</summary>

Example (made up): four screen changes at 400 milliseconds each, so 1.6 seconds of waiting inside one booking.

</details>


### Anything that moves an element the person is about to tap

Section: practice-plan. Stable action: write-moving-targets.

Write your answer for “Anything that moves an element the person is about to tap”. Use the task instructions below to decide what to include.

**Answer:** Anything that moves an element the person is about to tap




### Cut and justify

Section: practice-plan. Stable action: step-4-brief.

Every animation that answers nothing and costs time removed, with one sentence justifying each one you kept.

- Remove every animation that answers nothing and costs time.
- Keep decoration only where it delays nothing and does not repeat.
- Write one sentence justifying each animation you keep.

**Start here:** Start with the most expensive item on your cost list, not the ugliest one.

**Enough:** Nothing survives on the grounds that it looks current, and every kept item names its question.

**Justification:** One sentence naming the question this movement answers. If you cannot write the sentence, the movement is not earning the time it takes.

**Free:** Costing nobody any waiting. A flourish on a screen where nothing is pending is free; the same flourish in front of a tap is not.


### What you removed, and the time each removal gives back

Section: practice-plan. Stable action: write-removals.

Write your answer for “What you removed, and the time each removal gives back”. Use the task instructions below to decide what to include.

**Answer:** What you removed, and the time each removal gives back




### One sentence for each animation you kept, naming the question it answers

Section: practice-plan. Stable action: write-kept-justifications.

Write your answer for “One sentence for each animation you kept, naming the question it answers”. Use the task instructions below to decide what to include.

**Answer:** One sentence for each animation you kept, naming the question it answers




### Any decoration you kept, and why it costs nothing

Section: practice-plan. Stable action: write-decoration-kept.

Write your answer for “Any decoration you kept, and why it costs nothing”. Use the task instructions below to decide what to include.

**Answer:** Any decoration you kept, and why it costs nothing




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You are told the product “feels dated” and asked to add motion. What do you do first?

- Animate the things people look at most often, so the whole product feels more alive.
- Ask what question each proposed animation would answer, and add none that answers nothing.
- Add a transition between screens first, since nearly every current product has one.

<details>
<summary>After your attempt</summary>

Animate the things people look at most often, so the whole product feels more alive. — Those are the things people are trying to read. Movement there costs reading time and returns nothing.

Ask what question each proposed animation would answer, and add none that answers nothing. — Movement that answers no question adds waiting rather than quality. What people read as polish is nearly always fast acknowledgement, not the amount of movement.

Add a transition between screens first, since nearly every current product has one. — A transition between screens taxes every navigation in the product. It is usually the most expensive item on the list and it explains nothing.

Improve: Look at your answers-nothing box in step 2. Move each of those items into the removals box in step 4, then record the change in step 5.

Check again: Nothing you kept is there because it looks current.

Answers to revisit: classification, answers-nothing, removals, kept-justifications, decoration-kept, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A screen slides in from the right when you tap a class, and you labelled it continuity. What is worth checking?

- Whether anything was really to the right a moment before; if not, the slide invents a place.
- Whether its 400 milliseconds matches the durations used everywhere else across the whole product.
- Whether the easing is soft enough at both ends to make the slide feel pleasant.

<details>
<summary>After your attempt</summary>

Whether anything was really to the right a moment before; if not, the slide invents a place. — Continuity works by showing where something came from. Where there was no “there”, a slide is a direction invented to fill time.

Whether its 400 milliseconds matches the durations used everywhere else across the whole product. — Consistency matters when you write the rule, and a matching duration cannot rescue an animation that explains nothing.

Whether the easing is soft enough at both ends to make the slide feel pleasant. — Softening the ends makes an unexplained movement pleasanter. It is still 400 milliseconds of waiting for nothing.

Improve: Re-read every item you labelled continuity in step 2. Where nothing was on screen for it to come from, relabel it and record the relabel in step 5.

Check again: Every continuity item names something on screen that it came from.

Answers to revisit: classification, answers-nothing, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A small bounce on the confirmation screen answers nothing. Must it go?

- Keep it, and add a matching one to every screen so the product feels consistent.
- It must go, because you removed everything else that answers nothing.
- It can stay, if it delays nothing, does not repeat, and is not under a finger about to tap.

<details>
<summary>After your attempt</summary>

Keep it, and add a matching one to every screen so the product feels consistent. — Repeating it is what turns a free flourish into a tax. The second time it is noise and the tenth time it is a delay.

It must go, because you removed everything else that answers nothing. — The rule is about cost rather than purity. Removing something free buys you nothing and loses a small pleasure.

It can stay, if it delays nothing, does not repeat, and is not under a finger about to tap. — Decoration is not banned. The test is cost, and a flourish on a screen where nobody is waiting for anything costs nothing.

Improve: Check your decoration-kept box in step 4. Where a kept decoration repeats or delays anything, move it into the removals box and record it in step 5.

Check again: Every kept decoration is free, unrepeated and out of the way of taps.

Answers to revisit: removals, kept-justifications, decoration-kept, improvement-made

</details>


### Write the rule

Section: practice. Stable action: step-5-brief.

A written rule for when your product animates, the time your removals gave back, and the repair the Check questions asked for.

- Write when your product animates and when it does not.
- Record the total time your removals gave back across one task.
- Save the audit, the rule and the removal list.

**Start here:** Write the rule, then test it against the animation you cut. If the rule would have allowed it, tighten the rule.

**Enough:** The rule would settle a proposal made by someone who has not read this lesson.

**Rule:** A sentence you write down so the same decision gets made the same way in a room you are not in.

**Repair:** The one change you made after the Check questions, recorded next to the thing that prompted it.


### When your product animates, and when it does not

Section: practice. Stable action: write-motion-rule.

Write it so it would settle an argument you are not in the room for, and include what happens when someone has asked their device for less motion.

**Answer:** When your product animates, and when it does not

Write it so it would settle an argument you are not in the room for, and include what happens when someone has asked their device for less motion.


### The total time your removals gave back across one task

Section: practice. Stable action: write-time-given-back.

Write your answer for “The total time your removals gave back across one task”. Use the task instructions below to decide what to include.

**Answer:** The total time your removals gave back across one task




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Your decision for the new case, and why

Section: practice. Stable action: write-transfer-decision.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.

**New case.** Made-up case: a coffee pre-order app has four animations. Each of its four screens slides in over 350ms; the cup sizes pulse gently for as long as the screen is open; a “ready for collection” banner glows once when the café marks the order ready; and confetti falls on the final screen while nothing is pending.

**Task:** Decide which animations to keep and which to remove, and explain why, including the time the removals give back.

<details>
<summary>Compare after writing</summary>

- Weak: Keeps everything because motion makes the app feel modern, or removes all four, including the glow that reports a change the person did not cause.
- Adequate: Removes the slides (4 × 350ms = 1.4 seconds of waiting per order) and the endless pulse, keeps the one-off glow as attention motion, and keeps the confetti only because it delays nothing and does not repeat.
- Strong: As adequate, plus a written rule for when the app animates, a reduced-motion version of the glow, and a note that the durations are estimates until checked on a real phone.

</details>

**Answer:** Your decision for the new case, and why

Optional: may be left empty.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson takes the feedback items and specifies how each control acknowledges a press.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: What motion is actually for
What I am trying to do: Audit every animation you have proposed or seen in your product, classify each as feedback, continuity, attention or decoration, and remove the ones that answer no question.

Key idea or terms:
Animation: Anything that changes over time rather than all at once: a fade, a slide, a colour easing in, a spinning shape.
Millisecond: A thousandth of a second. Motion is written in milliseconds because the useful range is 100 to 400 of them.
Feedback motion: Answers “did that work?” inside the moment of acting.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Auditing eleven animations in a booking app, and getting the first classification wrong. Eleven animations, written down as effects: fade, slide, bounce, shimmer. A list of techniques rather than of purposes.

Activity: Before explaining the tool or method, ask me to predict what the next action will change. After I answer, explain the visible result and one common recovery step.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Every animation in your designs, one per line” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Every animation in your designs, one per line”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “Every animation in your designs, one per line” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Walk one task and note everything that changes over time, including hover and press states. Add each to the list.
- For each animation ask whether the person caused it, whether it explains a movement, and whether anything would be lost without it.

- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 1, visibility of system status, and heuristic 8, aesthetic and minimalist design. Purpose: Frames motion as feedback and noise rather than as style. Free reading, no account. Verified 2026-09-06. The heuristics do not discuss motion specifically; the four-way classification is this lesson's own. Fallback: R11.
- R13: [MDN: CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using) — The introduction on what an animation is composed of, read for vocabulary rather than for code at this stage. Purpose: Gives the shared terms — duration, easing, keyframes — the rest of the module uses. Free reading, no account. Verified 2026-09-06. It is implementation documentation, not motion design guidance; the design decisions here are the course's own. Fallback: R02.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Every animation is listed with the question it answers**

Adequate evidence: An audit covering presses, hovers, transitions and anything that fades, each with the person's question.

0 — A partial list of obvious animations.

1 — A full list without the questions.

2 — Every animation listed with the question it answers, including “none”.

3 — As adequate, and the list includes motion you had assumed rather than specified.

Repair: Walk one task and note everything that changes over time, including hover and press states. Add each to the list. Recheck: The completed audit.

**Each is classified into one of the four kinds**

Adequate evidence: A classification per animation, consistent with the definitions.

0 — No classification.

1 — Classified loosely, with attention and decoration conflated.

2 — Every animation classified with the definitions applied consistently.

3 — As adequate, and one animation is reclassified after examining what it actually does.

Repair: For each animation ask whether the person caused it, whether it explains a movement, and whether anything would be lost without it. Recheck: The classified audit.

**The time cost across one task is counted**

Adequate evidence: Estimated delays per animation and a total across one complete task.

0 — No cost considered.

1 — Individual durations noted but not summed.

2 — Per-animation delays and a task total.

3 — As adequate, and elements that move under a finger about to tap are identified separately.

Repair: Add the durations along one task path. If the total surprises you, that is the finding. Recheck: The cost total.

**A rule for when the product animates is written**

Adequate evidence: One or two sentences that would settle a future proposal, kept with the component inventory.

0 — No rule.

1 — A rule too vague to decide a case.

2 — A rule that resolves the next proposal.

3 — As adequate, and the rule is tested against the animation you removed.

Repair: Write the rule, then apply it to the animation you cut. If the rule permits it, tighten the rule. Recheck: The written rule.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson takes the feedback items and specifies how each control acknowledges a press.

**Review criteria:**

- Every animation is listed with the question it answers
- Each is classified into one of the four kinds
- The time cost across one task is counted
- A rule for when the product animates is written

<details>
<summary>Reading, video and deeper explanation</summary>

- The useful test for an animation is which question it answers. Feedback confirms that an action registered, and it must be immediate — a press state that appears after a delay reads as a failed tap. Continuity explains where a thing came from or went, which is what stops a panel appearing out of nowhere and forcing the person to reorient. Attention marks a change the person did not cause, and it is the category most often abused, because everything looks important to the team that built it.
- Decoration is not automatically wrong. A small flourish at the end of a booking can carry warmth that plain text cannot, and warmth is a legitimate design goal. What decoration must never do is delay the next action, repeat on every visit, or move the thing the person is about to tap. Judge it by whether it costs anything; if it does, it needs a better reason than that it looks nice in a demo.
- Every animation has a cost measured in the person's time and in the number of things they must track. A three-hundred-millisecond transition repeated at every step of a five-step booking is a second and a half of waiting spread across a task that felt fast before. Motion also competes for attention: two things moving at once means one of them is being missed.
- The audit is more useful than any single decision. Listing what you have and asking each one which question it answers usually removes a third of them, and the removals are the cheapest performance and clarity improvement available to you at this stage.

[Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).

</details>

## Lesson 2: Immediate feedback and the feel of a control

Stable ID: m09-l02-v1. Core.

The gap between tapping and seeing anything is where people tap twice. Acknowledgement is not the result; it is the promise that the result is coming.

Bring: Your m08 action components and their state tables.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Press, hover and focus feedback specified for three controls
- The three moments separated: press, acknowledgement, outcome
- A list of anything currently hover-only, with its touch route
- A tab pass recording where focus was invisible
- A failure state with a retry, and a reduced-motion version of the acknowledgement

### Start here: in everyday words

Interaction design explains what happens when someone acts, what they see next and how they recover from a mistake. In this lesson, your first small result is: What the state example showed at each state, one control written as three moments, what a four-second wait looks like today, and the failure with its retry.

**Words you will use**

- **Acknowledgement:** The immediate sign that the press registered. It is not the result, and it must not pretend to be.
- **Outcome:** What actually happened, which may arrive seconds later or not at all.
- **Hover:** A pointer resting on something without pressing. It does not exist on a touch screen, so nothing essential can live there.

**Quick example.** A supplied made up case. Pressing Book sends a request that takes about four seconds on a slow connection. Four proposals for what the person sees during those four seconds.

The reader demonstrates and guides the task before asking for “For one control: the press, the acknowledgement and the outcome, as three separate lines”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Specify press, hover and focus feedback for three controls so that every action is acknowledged immediately, and separate acknowledgement from the result that follows later.


### Acknowledge the press immediately, even when the result takes seconds

Section: learn. Stable action: learn-1.

Acknowledge the press immediately, even when the result takes seconds.


### Separate three moments: the press, the acknowledgement and the outcome

Section: learn. Stable action: learn-2.

Separate three moments: the press, the acknowledgement and the outcome.


### Idea 3: Touch screens have no hover, so anything essential needs a rou…

Section: learn. Stable action: learn-3.

Touch screens have no hover, so anything essential needs a route that works without it.


### Idea 4: Focus feedback is not optional styling; it is how keyboard use…

Section: learn. Stable action: learn-4.

Focus feedback is not optional styling; it is how keyboard users see where they are.


### Idea 5: If a control cannot respond instantly, change its label or sta…

Section: learn. Stable action: learn-5.

If a control cannot respond instantly, change its label or state rather than doing nothing.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Made-up example: the book button did nothing visible until the server replied, which on a throttled connection took four seconds; in the m07 paper test one participant had tapped twice. Rebuilt into three moments: pressed state on touch-down, immediate change to “Booking…” with the control disabled and a spinner, and the outcome message when the server replied. Hover-only reveal of the “remove from shortlist” control was replaced with a permanently visible quiet control. Focus rings were specified against both the light surface and the tinted panel, and the tab pass found one control that could be reached but showed no focus at all.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and separate

Section: practice-plan. Stable action: step-1-brief.

What the state example showed at each state, one control written as three moments, what a four-second wait looks like today, and the failure with its retry.

- Read the assigned status heuristic and the keyboard pattern for one component you use.
- Open the state example in this lesson and press Save with each outcome chosen, noting idle, the moment of pressing (hold the button down), saving, saved, failed and cancelled.
- Write the three moments for one control: press, acknowledgement, outcome, plus what it shows if the outcome fails.

**Start here:** Open the state example in this lesson and press Save with each outcome chosen, including Cancel while it saves, before you write anything. Then write your own three moments as three lines and read the middle one aloud. If it is empty, the person meets silence.

**Enough:** The acknowledgement line describes something visible that does not claim the outcome.

**Acknowledgement:** The immediate sign that the press registered. It is not the result, and it must not pretend to be.

**Outcome:** What actually happened, which may arrive seconds later or not at all.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. A Book button that stayed silent for four seconds, and the two people in an invented walkthrough who pressed it twice.

**What I specified:** One line: press Book, the booking is made. It looked complete, because on my own machine the reply came back before my finger lifted.

**What the line hid:** On a five-year-old phone on a slow connection the reply took about four seconds. In those four seconds nothing on the screen changed at all.

**What that produced:** In a made-up walkthrough, two people pressed the button a second time. From where they were sitting, the first press had not happened.

**What I had confused:** I had written one moment where there are three: the press, the acknowledgement and the outcome. The middle one was simply missing.

**What replaced it:** Darken under the finger. Label becomes “Booking…” and the control stops accepting presses. The result message arrives when the reply does.

**Wrong turn:** The wrong turn is judging the wait on your own machine. A reply that feels instant to you is the four seconds that decide whether someone books twice.

**Trade-off:** Three moments is more to specify and more to build than one line, and most of the time the middle one is on screen for a blink. The blink is what prevents the duplicate booking.

**Unknown:** Still unknown: how long the wait really is for your users. Until something runs on a real connection, four seconds is an assumption rather than a measurement.


### In the state example: what changed at idle, the moment of pressing, saving, saved, failed and cancelled

Section: practice-plan. Stable action: write-example-states.

Press Save with each outcome chosen. Hold the button down to see the moment of pressing; choose Take eight seconds and press Cancel while it saves to see cancelled. Write what you saw: words, shape, whether it still takes presses. No example on your screen, such as in a printed copy? Draw the states side by side and say so.

**Answer:** In the state example: what changed at idle, the moment of pressing, saving, saved, failed and cancelled

Press Save with each outcome chosen. Hold the button down to see the moment of pressing; choose Take eight seconds and press Cancel while it saves to see cancelled. Write what you saw: words, shape, whether it still takes presses. No example on your screen, such as in a printed copy? Draw the states side by side and say so.


### For one control: the press, the acknowledgement and the outcome, as three separate lines

Section: practice-plan. Stable action: write-three-moments.

Write your answer for “For one control: the press, the acknowledgement and the outcome, as three separate lines”. Use the task instructions below to decide what to include.

**Answer:** For one control: the press, the acknowledgement and the outcome, as three separate lines



<details>
<summary>Example</summary>

Example (made up): press, the button darkens under the finger; acknowledgement, the label becomes “Booking…” and the control stops accepting presses; outcome, “Booked. Saturday 10am.”

</details>


### What the person sees if the reply takes four seconds

Section: practice-plan. Stable action: write-slow-case.

If the honest answer is “nothing”, that is the finding this lesson exists for.

**Answer:** What the person sees if the reply takes four seconds

If the honest answer is “nothing”, that is the finding this lesson exists for.


### What your control shows if the outcome fails, and how the person retries without losing anything

Section: practice-plan. Stable action: write-failure-retry.

Write your answer for “What your control shows if the outcome fails, and how the person retries without losing anything”. Use the task instructions below to decide what to include.

**Answer:** What your control shows if the outcome fails, and how the person retries without losing anything



<details>
<summary>Example</summary>

Example (made up): “Not booked. Your place is still free. Try again”, with the button active again and the chosen date kept.

</details>


### Specify the feedback

Section: practice-plan. Stable action: step-2-brief.

Press, hover and focus specified for three controls, each state separable without colour, and each acknowledgement carrying a change of words.

- For three controls, specify what changes on press, on hover and on focus.
- Make each state distinguishable without colour.
- Give the acknowledgement a label change, not only a spinner, and give the failure a retry that keeps the person's work.

**Start here:** Do the press row for all three controls first, then hover, then focus. Doing one control end to end hides the inconsistencies.

**Enough:** Each state is separable with the colour taken out, and each acknowledgement changes words as well as appearance.

**Hover:** A pointer resting on something without pressing. It does not exist on a touch screen, so nothing essential can live there.

**Focus:** Where the keyboard currently is. Its outline is how a keyboard user knows their place, not styling to be tidied away.


### Try a supplied example

Section: practice-plan. Stable action: step-2-try.

A supplied made up case. Pressing Book sends a request that takes about four seconds on a slow connection. Four proposals for what the person sees during those four seconds.

Which proposal acknowledges the press without claiming an outcome that has not happened?

- It darkens on touch, its label becomes “Booking…”, it stops taking presses, and the result replaces it.
- Nothing changes for four seconds, because the result message will arrive soon enough on its own.
- The confirmation appears the moment Book is pressed, and is withdrawn if the booking then fails.
- A spinning shape covers the whole screen until the reply arrives, so nothing can be pressed a second time.

<details>
<summary>After your attempt</summary>

It darkens on touch, its label becomes “Booking…”, it stops taking presses, and the result replaces it. — The press, the acknowledgement and the outcome stay separate, and the person can always tell which of the three they are in.

Nothing changes for four seconds, because the result message will arrive soon enough on its own. — Four silent seconds is where second presses come from, and a second press can make a second booking.

The confirmation appears the moment Book is pressed, and is withdrawn if the booking then fails. — This tells the person something that is not yet true. Removing a confirmation afterwards is far worse than a short honest wait.

A spinning shape covers the whole screen until the reply arrives, so nothing can be pressed a second time. — It does acknowledge the press, and it also takes the screen away, so the person cannot re-read what they are booking while they wait.

Write the middle moment for each of your three controls, and give it a change of words rather than only a shape that spins.

</details>


### Control 1 · what changes on press, on hover and on focus

Section: practice-plan. Stable action: write-control-1.

Write your answer for “Control 1 · what changes on press, on hover and on focus”. Use the task instructions below to decide what to include.

**Answer:** Control 1 · what changes on press, on hover and on focus




### Control 2 · what changes on press, on hover and on focus

Section: practice-plan. Stable action: write-control-2.

Write your answer for “Control 2 · what changes on press, on hover and on focus”. Use the task instructions below to decide what to include.

**Answer:** Control 2 · what changes on press, on hover and on focus




### Control 3 · what changes on press, on hover and on focus

Section: practice-plan. Stable action: write-control-3.

Write your answer for “Control 3 · what changes on press, on hover and on focus”. Use the task instructions below to decide what to include.

**Answer:** Control 3 · what changes on press, on hover and on focus




### Which states you could still tell apart with the colour taken out

Section: practice-plan. Stable action: write-greyscale-check.

Photocopy the states in black and white, or look at them through a greyscale filter on your phone.

**Answer:** Which states you could still tell apart with the colour taken out

Photocopy the states in black and white, or look at them through a greyscale filter on your phone.


### Remove hover dependence

Section: practice-plan. Stable action: step-3-brief.

A list of everything currently revealed only on hover, each given a route that works on a touch screen or deleted.

- List everything currently revealed only on hover.
- Give each a route that works on touch.
- Delete any hover-only control that turns out to be unnecessary.

**Start here:** Open your design on your phone and try every action you can name. Anything you cannot reach is hidden behind hover.

**Enough:** Nothing essential is left that only a pointer can find.

**Hover-only:** Anything a person can reach or read only while a pointer rests on it. A finger has no resting state, so it is simply absent on a phone.

**Tooltip:** A small label that appears beside something when a pointer rests on it, usually to explain an icon or finish a title that was cut short.

**Route:** The way somebody on a touch screen still gets to the thing. Every hover-only item needs a route or an honest deletion.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Rescuing three hover-only things in a recipe app, and making the screen worse in the process.

**What the list came to:** Three things a pointer had to reveal. Delete and Duplicate on each recipe row. The full title in a small label when the title was cut short. A colour change telling you the row could be opened.

**My first repair:** Make them permanent. Every row now carried two visible buttons, so a list of twelve recipes carried twenty-four. Delete sat exactly where a thumb rests while scrolling.

**What I had actually done:** I had swapped hidden for permanent without asking what each thing was for. Three different jobs, one blunt answer, and a screen nobody could read.

**Taking them one at a time:** The cut-short title did not need a label at all; letting the title wrap to two lines removed the problem. Delete and Duplicate went behind one always-visible menu button per row. The colour hint was deleted, because on a phone the whole row is already tappable and nothing tells a finger to wait.

**What that left:** One visible control per row instead of two, one thing solved by layout rather than by a control, and one thing honestly removed.

**Wrong turn:** The wrong turn is making the hidden thing permanent. It is tempting because it is a single edit and it plainly does work on touch, and it trades a control nobody could reach for a screen nobody can read, with the destructive action parked under a scrolling thumb.

**Trade-off:** A menu costs one extra tap on every single deletion, for the life of the product. It also hides the action from somebody scanning the screen for it, so the first time they will not find it.

**Unknown:** Still unknown: whether people recognise that menu button as a menu. On your own screen it is obvious, and nobody unfamiliar has yet been handed the phone without being told.


### Everything currently revealed only when a pointer rests on it

Section: practice-plan. Stable action: write-hover-only-list.

Write your answer for “Everything currently revealed only when a pointer rests on it”. Use the task instructions below to decide what to include.

**Answer:** Everything currently revealed only when a pointer rests on it




### For each: the route that works on touch, or the note that you deleted it

Section: practice-plan. Stable action: write-hover-resolved.

Write your answer for “For each: the route that works on touch, or the note that you deleted it”. Use the task instructions below to decide what to include.

**Answer:** For each: the route that works on touch, or the note that you deleted it




### Test focus and touch

Section: practice-plan. Stable action: step-4-brief.

A keyboard pass naming where focus was invisible, a phone pass naming what you could not reach, the reduced-motion version, and one repair.

- Tab through your controls if they are built and record where focus is invisible; otherwise number the stops on a printed screen and mark each untested.
- Open the design, or a real-size photo of it, on a phone and note what you cannot reach, or write untested.
- Turn on Reduce motion in the state example, then write what still shows your acknowledgement without movement.
- Repair the worst failure you find.

**Start here:** Where nothing is built, print the screen and number the stops in the order a keyboard would reach them, then mark every row untested.

**Enough:** The notes say what you saw, not what you intended.

**Keyboard pass:** Going through a whole screen using the Tab key alone and writing down each stop in the order it comes.

**Phone pass:** Opening the same design at phone size and trying to finish the task with one hand, writing down whatever you could not get to.

**Reach:** Whether a thumb can actually get to a control on a phone held in one hand, rather than whether the control fits on the screen.


### Where the keyboard stops, in order, and where you could not see the focus

Section: practice-plan. Stable action: write-tab-pass.

Where nothing is built, number the stops on a printed screen and mark every row untested.

**Answer:** Where the keyboard stops, in order, and where you could not see the focus

Where nothing is built, number the stops on a printed screen and mark every row untested.


### What you could not reach when you opened the design, or a real-size photo of it, on a phone — or “untested”

Section: practice-plan. Stable action: write-phone-check.

Write your answer for “What you could not reach when you opened the design, or a real-size photo of it, on a phone — or “untested””. Use the task instructions below to decide what to include.

**Answer:** What you could not reach when you opened the design, or a real-size photo of it, on a phone — or “untested”




### With Reduce motion on: what still tells the person the press registered and the outcome is coming, without movement

Section: practice-plan. Stable action: write-reduced-motion-version.

Turn on Reduce motion in the state example first and watch which changes remain. Words and a steady mark carry it; a spinning shape does not.

**Answer:** With Reduce motion on: what still tells the person the press registered and the outcome is coming, without movement

Turn on Reduce motion in the state example first and watch which changes remain. Words and a steady mark carry it; a spinning shape does not.


### The worst failure you found, and what you changed

Section: practice-plan. Stable action: write-worst-repair.

Write your answer for “The worst failure you found, and what you changed”. Use the task instructions below to decide what to include.

**Answer:** The worst failure you found, and what you changed




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your remove control appears only when the pointer rests on the row. What breaks?

- It breaks only for people who have never used a mouse, which is a small group.
- On a touch screen nothing hovers, so the control never appears and the action has no route.
- Very little, because people can press and hold the row to reach the same control.

<details>
<summary>After your attempt</summary>

It breaks only for people who have never used a mouse, which is a small group. — It breaks for everyone on a phone, whatever they have used before. The pointer is what is missing, not the experience.

On a touch screen nothing hovers, so the control never appears and the action has no route. — A finger has no resting state. Anything only a pointer can reveal is missing entirely for anyone on a touch screen.

Very little, because people can press and hold the row to reach the same control. — Press and hold is a different gesture with its own meaning on each platform, and nothing on the screen tells anyone to try it.

Improve: Give every item in your hover-only-list box in step 3 a visible route in the hover-resolved box, or delete it, then record the change in step 5.

Check again: Every action in your design can be reached with a finger alone.

Answers to revisit: hover-only-list, hover-resolved, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You removed the focus outline because it clashed with the design. What have you removed?

- A browser default, which the design system quietly replaces with its own.
- The only sign a keyboard user has of where they are on the screen.
- Something that only people using screen readers ever rely on.

<details>
<summary>After your attempt</summary>

A browser default, which the design system quietly replaces with its own. — Nothing replaces it unless you specify a replacement. Removing it without one leaves the person with no indication at all.

The only sign a keyboard user has of where they are on the screen. — Focus is position, not decoration. With the outline gone the person is still moving through the page and can no longer see where they have got to.

Something that only people using screen readers ever rely on. — A screen reader announces position aloud. The visible outline is for people who are looking at the screen and using a keyboard.

Improve: Add a focus line to each control in step 2, specifying an outline that stays visible on every background you use, and record it in step 5.

Check again: Every control has a focus state you can see on every surface it sits on.

Answers to revisit: control-1, control-2, control-3, greyscale-check, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your pressed state is the same button in a slightly different blue. What is the risk?

- Anyone who cannot separate those two blues sees no change, so the press goes unacknowledged.
- It is a risk only on small buttons, where the colour change covers so few pixels.
- Very little, as long as the two blues sit far enough apart on the colour wheel.

<details>
<summary>After your attempt</summary>

Anyone who cannot separate those two blues sees no change, so the press goes unacknowledged. — A state carried by colour alone is a state some people never receive. Add a second signal: a border, a shift, a change of words.

It is a risk only on small buttons, where the colour change covers so few pixels. — Size changes how easy the button is to hit, not whether the change of state can be seen once it happens.

Very little, as long as the two blues sit far enough apart on the colour wheel. — Distance on a colour wheel is not the same as distance for a person with reduced colour vision, or for anyone outdoors in bright light.

Improve: Use your greyscale-check box in step 2. For any state that disappears without colour, add a second signal to that control and record it in step 5.

Check again: Every state in your three controls survives with the colour taken out.

Answers to revisit: control-1, control-2, control-3, greyscale-check, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

An honest note of what you could not verify without a build, and the repair the Check questions asked for.

- Write what you could not verify without a full implementation.
- Save the specifications with the tab-pass results.

**Start here:** Write two short lists: what you observed on your own device, and what you have not established at all.

**Enough:** Nothing untested is written as though it had been tested.

**Verify:** To check something against the thing itself running, rather than against your drawing of it.

**Build:** A version that actually runs, on a real device, on a real connection, with real timing.

**Limit:** A plain sentence saying what your check does not establish, written beside the finding it belongs to.


### What you could not verify without something built and running

Section: practice. Stable action: write-not-verified.

Write your answer for “What you could not verify without something built and running”. Use the task instructions below to decide what to include.

**Answer:** What you could not verify without something built and running




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Your decision for the new case, and why

Section: practice. Stable action: write-transfer-decision.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.

**New case.** Made-up case: a library app’s “Renew all” button takes up to five seconds to reply. Nothing on screen changes until the reply arrives, and some members press it twice and receive two renewal emails. When the network fails, the button simply returns to normal with no message.

**Task:** Specify what the button shows from press to outcome, including failure, and explain why each part is there.

<details>
<summary>Compare after writing</summary>

- Weak: Makes the reply faster or adds a spinner alone, and leaves the failure silent.
- Adequate: A pressed state on touch, then an immediate label change such as “Renewing…” with the button not accepting presses, then the outcome; a failure says what happened and offers a retry that keeps the request.
- Strong: As adequate, plus a reduced-motion version where the label change carries the state with nothing spinning, a visible focus state for keyboard users, and a note that five seconds needs checking on a slow phone.

</details>

**Answer:** Your decision for the new case, and why

Optional: may be left empty.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson takes the continuity items from lesson 1 and gives each a duration and an easing.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Immediate feedback and the feel of a control
What I am trying to do: Specify press, hover and focus feedback for three controls so that every action is acknowledged immediately, and separate acknowledgement from the result that follows later.

Key idea or terms:
Acknowledgement: The immediate sign that the press registered. It is not the result, and it must not pretend to be.
Outcome: What actually happened, which may arrive seconds later or not at all.
Hover: A pointer resting on something without pressing. It does not exist on a touch screen, so nothing essential can live there.

Supplied practice material (fictional or labelled practice, not my research):
A supplied made up case. Pressing Book sends a request that takes about four seconds on a slow connection. Four proposals for what the person sees during those four seconds.

Activity: Before explaining the tool or method, ask me to predict what the next action will change. After I answer, explain the visible result and one common recovery step.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “For one control: the press, the acknowledgement and the outcome, as three separate lines” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “For one control: the press, the acknowledgement and the outcome, as three separate lines”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try a supplied example” question. Choose an answer, read the explanation, then return to “For one control: the press, the acknowledgement and the outcome, as three separate lines” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- For each control, write what changes in each state. Then check the states in greyscale.
- Write the three moments as three rows. If the middle row is empty, the person will meet silence.

- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 1, visibility of system status. Purpose: States the obligation this lesson implements: the system tells people what is happening, promptly. Free reading, no account. Verified 2026-09-06. It gives no timings; the three-moment split and the timing rules here are the course's own. Fallback: R11.
- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — One pattern matching a component you use, read for its Keyboard Interaction section. Purpose: Shows the level of key-by-key specification a component owes before it is built. Free reading, no account. Verified 2026-09-06; the pages carry no date. Semantics and keyboard behaviour only — no visual design, no motion — and it is guidance rather than a conformance standard. Fallback: R14.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Press, hover and focus are specified for three controls**

Adequate evidence: A state specification per control covering all three, distinguishable without colour.

0 — Only default and pressed specified.

1 — Three states specified but distinguished by colour alone.

2 — All three, distinguishable without colour, for three controls.

3 — As adequate, and focus is specified against every surface it can appear on.

Repair: For each control, write what changes in each state. Then check the states in greyscale. Recheck: The state specifications and greyscale check.

**Acknowledgement, outcome and failure are separated**

Adequate evidence: A specification showing an immediate acknowledgement distinct from the later result, including a label change, a failure state with a retry that keeps the person's work, and a reduced-motion version.

0 — Only the outcome is specified.

1 — An acknowledgement exists but is a spinner alone with no label change, or failure is unspecified.

2 — Immediate acknowledgement with a label change, then the outcome, a failure with a retry, and a reduced-motion version that keeps the state visible.

3 — As adequate, and the acknowledgement prevents a second submission explicitly.

Repair: Write the three moments as three rows. If the middle row is empty, the person will meet silence. Recheck: The three-moment specification.

**Nothing essential depends on hover**

Adequate evidence: A list of previously hover-only elements, each with a touch route or removed.

0 — Hover-only controls remain.

1 — Identified but not resolved.

2 — Every one has a touch route or was removed.

3 — As adequate, and the check was made on a real phone rather than by emulation.

Repair: Open your design on a phone and try every action. Anything you cannot reach is hover-dependent. Recheck: The hover list with resolutions.

**A tab pass is recorded with failures named**

Adequate evidence: Notes from tabbing through the controls, naming where focus was invisible or the order was wrong — or, where nothing is built, the stops numbered on a printed screen and marked untested.

0 — No tab pass.

1 — Claimed without specifics.

2 — Every stop numbered, with specific failures where a build was tabbed, or each stop marked untested where nothing is built.

3 — As adequate, and one failure was repaired and re-checked.

Repair: Rehearse on the state example in this lesson, number the stops on your printed screen and mark untested what you could not try. Record what you see, not what you intend. Recheck: The tab-pass notes.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson takes the continuity items from lesson 1 and gives each a duration and an easing.

**Review criteria:**

- Press, hover and focus are specified for three controls
- Acknowledgement, outcome and failure are separated
- Nothing essential depends on hover
- A tab pass is recorded with failures named

<details>
<summary>Reading, video and deeper explanation</summary>

- Three moments need designing, and products routinely design only the third. The press is when the person's finger is down and the control should look pressed. The acknowledgement is the instant afterwards, when the interface must show it heard — a state change, a label change, a disabled control with a spinner beside it. The outcome may take a second or ten, and it is the only one most teams specify, which is why so many products feel unresponsive while being technically fast.
- On a touch screen there is no hover, so anything that only appears on hover does not exist for anyone using a touch screen. This is a structural rule rather than a preference: if an action is available on hover in a list row, it must also be reachable by another means, and a design where the only route to “remove” is hovering is a design that excludes every phone.
- Focus feedback is what a keyboard user has instead of a cursor. It must be visible against every background it can appear on, it must not be removed for aesthetic reasons, and it should be tested by pressing tab rather than assumed from the specification. This connects directly to the pattern guidance in this module: a component's keyboard behaviour and its focus appearance are the same design problem.
- When something genuinely cannot respond instantly, say so in the control itself. A button that becomes “Booking…” with a spinner tells the person their tap registered; a button that stays identical for two seconds tells them nothing, and the reasonable response to nothing is to try again.

[Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).

</details>

## Lesson 3: Transitions that explain a change

Stable ID: m09-l03-v1. Core.

When something appears without explanation, people spend a moment working out what happened. A transition can spend fifty milliseconds to save that moment — or waste four hundred and save nothing.

Bring: Your audit's continuity items and the screens they occur on.

Starting route: Recommended route: Draw the start and end frames of your three transitions on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder. Alternative route: Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

- Three transitions specified with origin, duration and easing
- A stated reason for each: what relationship it explains
- One rejected transition with the reason recorded
- A rule for what your product fades and what it moves
- A reduced-motion version and an interruption rule for each kept transition

### Start here: in everyday words

Interaction design explains what happens when someone acts, what they see next and how they recover from a mistake. In this lesson, your first small result is: Each continuity item from your audit mapped to what caused it and where it returns, with the placeless ones marked as fades.

**Words you will use**

- **Transition:** The change between two states of a screen, described by where it starts, where it ends and how long it takes.
- **Easing:** How the speed changes across the movement. Entering fast then settling reads as arrival; a steady speed reads as machinery.
- **Origin:** The place on screen a thing appears to come from. If you cannot point at it, there is no origin, and the thing should fade rather than travel.

**Quick example.** A supplied made up timing test. The same panel transition was tried at three durations. At 100 milliseconds the panel seemed to appear rather than travel. At 200 the travel was visible and the panel was ready before the hand had moved. At 400 the person was waiting for it.

The reader demonstrates and guides the task before asking for “For each item: what caused it, and where it goes when it is dismissed”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Design three transitions that show where content came from or went, each with a stated duration and easing, and prove each one is doing explanatory work rather than filling time.


### A transition should connect a cause to an effect: this opened from that

Section: learn. Stable action: learn-1.

A transition should connect a cause to an effect: this opened from that.


### Short is not always better: the distance travelled sets the duration

Section: learn. Stable action: learn-2.

Short is not always better: the distance travelled sets the duration.


### Easing carries meaning — entering fast then settling reads as arrival

Section: learn. Stable action: learn-3.

Easing carries meaning — entering fast then settling reads as arrival.


### If nothing moved from anywhere, a fade is honest and a slide is a lie

Section: learn. Stable action: learn-4.

If nothing moved from anywhere, a fade is honest and a slide is a lie.


### Two simultaneous transitions compete; sequence them or drop one

Section: learn. Stable action: learn-5.

Two simultaneous transitions compete; sequence them or drop one.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Made-up example: three transitions were designed. The filter panel scales and fades from the filter button, about 200ms, entering fast and settling — it explains where the panel came from and where it returns to. The detail view expands from its row over about 250ms, and the row stays in place beneath so the person knows what to go back to. The confirmation replaces the payment screen with a plain fade of 120ms, deliberately not a slide, because nothing moved anywhere and a slide would have implied a direction that does not exist. A fourth candidate — a staggered animation of every list row on load — was dropped: it delayed reading by half a second and explained nothing.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Draw the start and end frames of your three transitions on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder. Alternative route: Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and map the relationships

Section: practice-plan. Stable action: step-1-brief.

Each continuity item from your audit mapped to what caused it and where it returns, with the placeless ones marked as fades.

- Read the assigned animation guidance for duration and easing vocabulary.
- For each continuity item from your audit, write what caused it and where it goes.

**Start here:** For each item finish two sentences: “this came from …” and “when it closes it goes back to …”.

**Enough:** Anything you could not finish both sentences for is sitting in the fade list.

**Transition:** The change between two states of a screen, described by where it starts, where it ends and how long it takes.

**Easing:** How the speed changes across the movement. Entering fast then settling reads as arrival; a steady speed reads as machinery.


### For each item: what caused it, and where it goes when it is dismissed

Section: practice-plan. Stable action: write-relationship-map.

Write your answer for “For each item: what caused it, and where it goes when it is dismissed”. Use the task instructions below to decide what to include.

**Answer:** For each item: what caused it, and where it goes when it is dismissed



<details>
<summary>Example</summary>

Example (made up): the filter panel is caused by the filter button and returns into that button, which is still on screen.

</details>


### The ones with no place on screen to come from or return to

Section: practice-plan. Stable action: write-no-origin.

These are the fades. Nothing moved, so nothing should appear to travel.

**Answer:** The ones with no place on screen to come from or return to

These are the fades. Nothing moved, so nothing should appear to travel.


### Design three

Section: practice-plan. Stable action: step-2-brief.

Three transitions specified with an origin, a movement, a duration in milliseconds, an easing, and an exit that reverses the entry.

- Specify origin, movement, duration and easing for each.
- Set duration from the distance and size, not from a single house value.
- Make dismissal reverse the entry so the relationship holds both ways.

**Start here:** Write the origin before the duration. A transition with no origin does not need a number, it needs a fade.

**Enough:** Each exit is the entry run backwards, so the relationship holds in both directions.

**Origin:** The place on screen a thing appears to come from. If you cannot point at it, there is no origin, and the thing should fade rather than travel.

**Duration:** How long the movement takes, written in milliseconds so that somebody can argue with the number.

**Exit:** How the thing leaves. Running the entry backwards is what tells a person it went back to where it came from.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Three transitions for a booking app, and the one that was a slide pretending to be an explanation.

**What I designed first:** The confirmation screen sliding in from the right over 400 milliseconds, softened at both ends. It looked expensive and I was pleased with it.

**The question I had skipped:** Where did the confirmation come from? Nowhere. The payment screen had never been sitting to its left.

**What the slide was doing:** Claiming a direction that does not exist, and charging 400 milliseconds for the claim. It read as smooth and it taught nothing.

**What replaced it:** A plain fade of 120 milliseconds. Honest, because nothing moved from anywhere, and short enough to be over before you look for it.

**What the other two kept:** The filter panel scales out of the filter button over about 200 milliseconds. The detail view expands from its row over about 250 milliseconds, with the row staying put beneath.

**Wrong turn:** The wrong turn is choosing the movement first and finding the relationship afterwards. A slide always looks like an explanation, which is how the empty ones survive.

**Trade-off:** Fades look plainer than slides, and a screen of fades can seem flat next to a competitor’s reel. Flat and fast is the better trade.

**Unknown:** Still unknown: whether 200 milliseconds reads as connected on a slow phone, where frames arrive unevenly. That needs a device you may not own yet.


### Transition 1 · origin, movement, duration, easing and exit

Section: practice-plan. Stable action: write-transition-1.

Write your answer for “Transition 1 · origin, movement, duration, easing and exit”. Use the task instructions below to decide what to include.

**Answer:** Transition 1 · origin, movement, duration, easing and exit



<details>
<summary>Example</summary>

Example (made up): from the filter button; scales and fades outward; about 200 milliseconds; entering fast and settling; exit shrinks back into the button.

</details>


### Transition 2 · origin, movement, duration, easing and exit

Section: practice-plan. Stable action: write-transition-2.

Write your answer for “Transition 2 · origin, movement, duration, easing and exit”. Use the task instructions below to decide what to include.

**Answer:** Transition 2 · origin, movement, duration, easing and exit




### Transition 3 · origin, movement, duration, easing and exit

Section: practice-plan. Stable action: write-transition-3.

Write your answer for “Transition 3 · origin, movement, duration, easing and exit”. Use the task instructions below to decide what to include.

**Answer:** Transition 3 · origin, movement, duration, easing and exit




### Test the timings

Section: practice-plan. Stable action: step-3-brief.

Each transition tried at half and at double your duration, with the shortest one that still reads as connected kept.

- Play each transition at a set speed in a free prototyping tool that lets you set an animation's duration, for example Penpot's prototype interactions.
- Run each at half, chosen and double. Drawn frames only? Write “timing untested on paper” in timing-tests.
- Keep the shortest that still reads as connected.
- Switch Reduce motion on and off in the state example to see a change stay visible without movement.

**Start here:** Draw the first and last frame of each transition and flick between them to check the relationship reads. To try the speed, set the duration in a free prototyping tool such as Penpot’s prototype interactions; with paper alone, write that the timing is untested. To see a working no-code comparison, open the state example in this lesson and switch Reduce motion on and off: the change stays visible while the movement goes.

**Enough:** Each duration has a reason attached that is about distance and legibility, not about a house number.

**Reads as connected:** A person can see that the new thing came out of the old one, without being told so in words.

**Frames:** The start and end pictures of a movement, drawn side by side. Flicking between them tests the relationship when you have nothing to build with; it cannot test the speed.

**Prototype:** A rough runnable version made in a free tool, built for no reason other than to feel the timing.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied made up timing test. The same panel transition was tried at three durations. At 100 milliseconds the panel seemed to appear rather than travel. At 200 the travel was visible and the panel was ready before the hand had moved. At 400 the person was waiting for it.

Which duration do you keep, and on what grounds?

- 100 milliseconds, because a faster transition always feels more responsive to the person who is using it.
- 400 milliseconds, because the slower movement is easier to follow for everyone watching the panel.
- Any of the three, since the difference between them is too small for most people to notice at all.
- 200 milliseconds: the shortest of the three at which the panel still visibly travels from its button.

<details>
<summary>After your attempt</summary>

100 milliseconds, because a faster transition always feels more responsive to the person who is using it. — Faster is usually better and is not a rule. At 100 the panel arrives without showing its journey, so the time is spent and the explanation never lands.

400 milliseconds, because the slower movement is easier to follow for everyone watching the panel. — Easier to follow stops being useful once the relationship has landed. Everything after that point is the person waiting.

Any of the three, since the difference between them is too small for most people to notice at all. — The gap between 100 and 400 milliseconds is roughly the gap between instant and slow. It is one of the few timing differences almost everybody feels.

200 milliseconds: the shortest of the three at which the panel still visibly travels from its button. — Duration is set by the work the movement has to do. The shortest that still explains is the right one, and here that is the middle value.

Run the same test on your own three in a free prototyping tool, or write “timing untested on paper” if you only have drawn frames.

</details>


### For each transition: what happened at half your duration and at double it

Section: practice-plan. Stable action: write-timing-tests.

Play each at half, chosen and double in a free prototyping tool that lets you set a duration, such as Penpot’s prototype interactions (free, needs an account; not tested by the course on your computer). Drawn frames only? Write “timing untested on paper”: flicking frames by hand shows the relationship, not the speed. Say which route you used.

**Answer:** For each transition: what happened at half your duration and at double it

Play each at half, chosen and double in a free prototyping tool that lets you set a duration, such as Penpot’s prototype interactions (free, needs an account; not tested by the course on your computer). Drawn frames only? Write “timing untested on paper”: flicking frames by hand shows the relationship, not the speed. Say which route you used.


### The duration you kept for each, and why it is the shortest that still reads as connected

Section: practice-plan. Stable action: write-chosen-durations.

Write your answer for “The duration you kept for each, and why it is the shortest that still reads as connected”. Use the task instructions below to decide what to include.

**Answer:** The duration you kept for each, and why it is the shortest that still reads as connected




### Reject one and sequence the rest

Section: practice-plan. Stable action: step-4-brief.

One transition removed with its cost and what it explained, no two transitions running at once in the same view, and what an interruption does.

- Find a transition that explains nothing and remove it.
- Check no two transitions run at once in the same view.
- Sequence or drop where they compete.
- Decide what happens if a transition is interrupted, such as escape pressed while the panel is still opening.

**Start here:** Find the one that delays the most and explains the least. That is almost always the rejection.

**Enough:** The rejection note says what the transition cost, not only that you did not like it.

**Sequence:** To run one movement after another instead of together, so there is one thing to follow at a time.

**Competing motion:** Two or more movements in the same view at the same moment, each asking for the attention only one of them can have.

**Cost:** What is lost by removing something, written down so a later reader can see it was a choice rather than an oversight.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Three transitions firing together when a note is deleted, and cutting the wrong one of the three.

**What was happening at once:** Deleting a note ran three movements in the same moment. The row collapsing shut, the rows below sliding up to close the gap, and an undo bar rising from the bottom edge. All of them around 250 milliseconds.

**Which one I removed:** The undo bar entrance. I chose it because it was the newest of the three and I was the least attached to it.

**What that cost:** The undo bar is the only thing saying the deletion can still be taken back. Removing its entrance did not remove the bar; it made the bar arrive with no announcement, in a corner nobody was looking at.

**The question I had skipped:** Which of the three carries the relationship. The row collapsing is what shows this note is the one that went. The rows sliding up say the same fact a second time, more slowly.

**What I did instead:** Dropped the slide of the rows below. Kept the row collapsing at 200 milliseconds. Let the undo bar rise 100 milliseconds after that one finishes, so there is one thing to follow, then another.

**Wrong turn:** The wrong turn is choosing what to cut by how attached you are to it. It is tempting because you have to cut something and the newest thing feels cheapest to lose, and the transitions you have lived with longest are exactly the ones you have stopped seeing.

**Trade-off:** Sequencing adds the second movement onto the end of the first, so the deletion now takes longer from beginning to end than the version where everything happened together. You are paying time for legibility and there is no arrangement where it is free.

**Unknown:** Still unknown: whether a 100 millisecond gap reads as after rather than alongside. That judgement was made with your own eyes on your own machine, and a device dropping frames may close the gap.


### The transition you removed, what it cost, and what it explained

Section: practice-plan. Stable action: write-rejected.

Write your answer for “The transition you removed, what it cost, and what it explained”. Use the task instructions below to decide what to include.

**Answer:** The transition you removed, what it cost, and what it explained




### Anywhere two transitions ran at once, and how you sequenced or dropped them

Section: practice-plan. Stable action: write-competing.

Write your answer for “Anywhere two transitions ran at once, and how you sequenced or dropped them”. Use the task instructions below to decide what to include.

**Answer:** Anywhere two transitions ran at once, and how you sequenced or dropped them




### What happens if a transition is interrupted part way, such as escape pressed while the panel is still opening

Section: practice-plan. Stable action: write-interrupted.

Write your answer for “What happens if a transition is interrupted part way, such as escape pressed while the panel is still opening”. Use the task instructions below to decide what to include.

**Answer:** What happens if a transition is interrupted part way, such as escape pressed while the panel is still opening



<details>
<summary>Example</summary>

Example (made up): the panel reverses from wherever it has reached and shrinks back into the filter button; it never jumps.

</details>


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A settings screen replaces the class list. Nothing on the list turns into anything on the settings screen. What transition is honest?

- A slide from the right, because that is the usual direction for going deeper in an app.
- A short fade, because nothing moved from anywhere and a slide would invent a direction.
- A slide from the right made faster, so that the cost of the movement stays small.

<details>
<summary>After your attempt</summary>

A slide from the right, because that is the usual direction for going deeper in an app. — The convention describes a spatial relationship. Where there is no such relationship, the convention becomes a small untruth that also costs time.

A short fade, because nothing moved from anywhere and a slide would invent a direction. — A fade says “this is different now” and claims nothing more. That is exactly true, and it is the cheapest thing you can say.

A slide from the right made faster, so that the cost of the movement stays small. — Shortening it reduces the cost and not the claim. The direction is still invented, and the person still learns nothing from it.

Improve: Move that item into your no-origin box in step 1, respecify it as a fade in step 2, and record the change in step 5.

Check again: Everything that moves has a place on screen it moved from.

Answers to revisit: relationship-map, no-origin, transition-1, transition-2, transition-3, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You have set every transition in the product to 250 milliseconds so it feels consistent. What is wrong with that?

- Distance sets duration, so a small nearby change now drags and a big one may look abrupt.
- Very little, since one value is easier to remember, to specify and to build.
- The number is the problem; 200 milliseconds would make a much better single value everywhere.

<details>
<summary>After your attempt</summary>

Distance sets duration, so a small nearby change now drags and a big one may look abrupt. — A duration is not a brand value. A tick appearing beside a field and a panel crossing half the screen have different distances, so they need different times.

Very little, since one value is easier to remember, to specify and to build. — One value is easier and it makes half the product feel sluggish. Three named values are almost as easy and fit the work being done.

The number is the problem; 200 milliseconds would make a much better single value everywhere. — Any single value has the same fault at a different point. The fix is to set duration from distance rather than to move the one number.

Improve: Redo the half-and-double test in step 3 for your shortest and longest transitions, then rewrite their durations in step 2 and record it in step 5.

Check again: Your three durations are not all the same, and each has a distance behind it.

Answers to revisit: timing-tests, chosen-durations, transition-1, transition-2, transition-3, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A panel slides in while the list behind it fades out and the heading changes size. What should you do?

- Keep all three and give each its own easing, so they feel distinct from each other.
- Keep the movement that carries the relationship and sequence or drop the other two.
- Keep all three but shorten each one, so the whole change is over very quickly.

<details>
<summary>After your attempt</summary>

Keep all three and give each its own easing, so they feel distinct from each other. — Different easings make them distinguishable in a slow-motion recording. At real speed the eye still has three things to track.

Keep the movement that carries the relationship and sequence or drop the other two. — Two movements at once compete for the same attention and neither is read. Sequencing costs a little time; running them together costs the explanation.

Keep all three but shorten each one, so the whole change is over very quickly. — Three short movements at once is still three things happening at once. Speed does not make simultaneous movement legible.

Improve: Record the clash in your competing box in step 4, drop or sequence the extra movements in step 2, and note the change in step 5.

Check again: In every view, one thing moves at a time.

Answers to revisit: rejected, competing, interrupted, transition-1, transition-2, transition-3, improvement-made

</details>


### Write the rule

Section: practice. Stable action: step-5-brief.

A rule for what your product moves and what it fades, each transition’s reduced-motion version, where the frames live, and the repair the Check questions asked for.

- Write when your product moves something and when it simply fades.
- Write each kept transition's reduced-motion version beside it.
- Record the rejected transition and why.
- Save the three specifications with their timings.

**Start here:** Test your rule against the transition you rejected. If the rule would have allowed it, the rule is too loose.

**Enough:** The rule decides a case you have not met yet.

**Fade:** A change from see-through to solid in place, with no travel. It says this is different now and claims nothing about where it came from.

**Move-or-fade rule:** The sentence that settles, for any new change you meet later, whether the product travels it or simply fades it.


### When your product moves something, and when it simply fades

Section: practice. Stable action: write-move-or-fade-rule.

Write your answer for “When your product moves something, and when it simply fades”. Use the task instructions below to decide what to include.

**Answer:** When your product moves something, and when it simply fades




### Each kept transition with Reduce motion on: what replaces the movement, and what still shows where things came from

Section: practice. Stable action: write-reduced-versions.

Usually a short fade in place, with the thing that caused it kept marked. Check it against the Reduce motion toggle in the state example.

**Answer:** Each kept transition with Reduce motion on: what replaces the movement, and what still shows where things came from

Usually a short fade in place, with the thing that caused it kept marked. Check it against the Reduce motion toggle in the state example.


### Where the frames and timings live

Section: practice. Stable action: write-frames-reference.

File names or “paper, in my folder”. Naming a file does not upload it.

**Answer:** Where the frames and timings live

File names or “paper, in my folder”. Naming a file does not upload it.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Your decision for the new case, and why

Section: practice. Stable action: write-transfer-decision.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.

**New case.** Made-up case: in a weather app, tapping a day in the week list opens that day’s hourly forecast, which slides up from the bottom edge over 500ms. Opening Settings slides a screen in from the right, also over 500ms, though nothing on the forecast relates to it. Pressing back while the hourly panel is still moving makes it jump straight to closed.

**Task:** Decide the transition for each of the two changes, and what should happen when back is pressed mid-movement. Explain why.

<details>
<summary>Compare after writing</summary>

- Weak: Keeps the same 500ms slide for both so the app feels consistent, and ignores the interrupted case.
- Adequate: The hourly view expands from the tapped day (around 200 to 250ms) so its origin shows; Settings fades briefly because nothing moved; back mid-movement reverses from wherever the panel is.
- Strong: As adequate, plus a reduced-motion version (short fades with the tapped day kept highlighted), a try at half and double the duration, and a note that timing needs a real phone.

</details>

**Answer:** Your decision for the new case, and why

Optional: may be left empty.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson turns on the reduced-motion setting and gives every one of these a second version.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Transitions that explain a change
What I am trying to do: Design three transitions that show where content came from or went, each with a stated duration and easing, and prove each one is doing explanatory work rather than filling time.

Key idea or terms:
Transition: The change between two states of a screen, described by where it starts, where it ends and how long it takes.
Easing: How the speed changes across the movement. Entering fast then settling reads as arrival; a steady speed reads as machinery.
Origin: The place on screen a thing appears to come from. If you cannot point at it, there is no origin, and the thing should fade rather than travel.

Supplied practice material (fictional or labelled practice, not my research):
A supplied made up timing test. The same panel transition was tried at three durations. At 100 milliseconds the panel seemed to appear rather than travel. At 200 the travel was visible and the panel was ready before the hand had moved. At 400 the person was waiting for it.

Activity: Before explaining the tool or method, ask me to predict what the next action will change. After I answer, explain the visible result and one common recovery step.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “For each item: what caused it, and where it goes when it is dismissed” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “For each item: what caused it, and where it goes when it is dismissed”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try a supplied example” question. Choose an answer, read the explanation, then return to “For each item: what caused it, and where it goes when it is dismissed” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- For each transition ask what caused the change and where the content will go when dismissed. If neither has a place on screen, use a fade.
- Halve and double each duration and record which reads as connected. Keep the shortest that still does.

- R13: [MDN: CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using) — Configuring the animation: duration, timing function and the properties worth animating. Purpose: Supplies the vocabulary and mechanics for specifying a transition precisely. Free reading, no account. Verified 2026-09-06. Implementation documentation: it gives no guidance on when motion is appropriate, which is this lesson's subject. Fallback: R02.
- R33: [NN/g: recognition and recall](https://www.nngroup.com/articles/recognition-and-recall/) — Recognition versus recall and the interface implications. Purpose: Explains why showing where something came from removes a memory task. Free reading, no account. Verified 2026-09-06. It does not discuss motion; the application is this lesson's own. Fallback: R31.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Each transition states the relationship it explains, with and without motion**

Adequate evidence: A written origin and destination per transition, with what the person learns from it, and a reduced-motion version that keeps that explanation.

0 — Transitions specified as effects with no relationship stated.

1 — Relationships asserted but not matched to what actually causes the change, or no reduced-motion version.

2 — Each names its true origin and what it explains, with a reduced-motion version that keeps the explanation.

3 — As adequate, and one transition was changed to a fade because no real relationship existed.

Repair: For each transition ask what caused the change and where the content will go when dismissed. If neither has a place on screen, use a fade. Recheck: The relationship notes.

**Duration follows distance and was tested at two speeds**

Adequate evidence: Durations set per transition with a record of playing them faster and slower, or the timing marked untested with the route that would test it.

0 — One duration applied everywhere.

1 — Varied durations chosen without testing, and not marked untested.

2 — Durations set by distance and played at two speeds with the shortest readable kept, or the timing marked untested with the route that would test it.

3 — As adequate, and the specification states which transitions must stay under about 200ms.

Repair: Halve and double each duration and record which reads as connected. Keep the shortest that still does. Recheck: The timing test notes.

**Dismissal and interruption reverse the entry**

Adequate evidence: A specified exit for each transition that returns content to where it came from, including when the person dismisses it part way through.

0 — Exits unspecified.

1 — Exits specified but unrelated to the entry, or the interrupted case left open.

2 — Each exit reverses its entry, from wherever the movement has reached when interrupted.

3 — As adequate, and exits are shorter than entries, which is how dismissal usually reads best.

Repair: For each transition write the exit as the reverse of the entry, then check it does not fight the person's next action. Recheck: The exit specifications.

**One transition was rejected with the reason recorded**

Adequate evidence: A removed transition with what it cost and what it explained.

0 — Nothing rejected.

1 — Something removed with no reason recorded.

2 — A rejection with its cost and its absent explanation stated.

3 — As adequate, and the removal is connected to the time saved in the lesson 1 audit.

Repair: Find the animation that delays the most and explains the least. Remove it and record what it cost. Recheck: The rejection note.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson turns on the reduced-motion setting and gives every one of these a second version.

**Review criteria:**

- Each transition states the relationship it explains, with and without motion
- Duration follows distance and was tested at two speeds
- Dismissal and interruption reverse the entry
- One transition was rejected with the reason recorded

<details>
<summary>Reading, video and deeper explanation</summary>

- The explanatory work of a transition is spatial: a panel that grows from the button that opened it tells the person where it came from and, crucially, where it will go when dismissed. That is why the same panel appearing with a slide from the screen edge, when nothing on the edge caused it, is worse than a plain fade — it asserts a spatial relationship that does not exist, and people trust the assertion.
- Duration should follow distance and size. A small control changing state can settle in under a tenth of a second; a full-screen panel travelling a long way needs longer or it appears to teleport. The common mistake is a single duration applied everywhere, which makes small feedback feel sluggish and large movements feel abrupt. Where you cannot measure, err short: people notice slowness far more readily than they notice speed.
- Easing is meaning rather than polish. Something entering quickly and settling reads as arriving under its own weight; something leaving with acceleration reads as dismissed. Linear motion reads as mechanical, which is occasionally what you want — a progress indicator — and rarely what you want for content.
- Two things moving at once split attention, and one of them will not be seen. When a panel opens while a list re-sorts beneath it, sequence them or animate only the one carrying the explanation. This is the same attention budget the audit in lesson 1 was counting.

[MDN: CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using).

</details>

## Lesson 4: Reduced motion is not an afterthought

Stable ID: m09-l04-v1. Core.

Motion makes some people ill. The setting exists on every device you are designing for, and a product that ignores it is unusable for those people rather than merely unfashionable.

Bring: Your animation audit and the three transitions you designed.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- The reduced-motion setting turned on and what changed recorded
- An alternative specified for every kept animation
- A list of essential motion with its reduced form
- Anything removed entirely, with the reason

### Start here: in everyday words

Interaction design explains what happens when someone acts, what they see next and how they recover from a mistake. In this lesson, your first small result is: The reduced-motion setting turned on, on a named device, with a note of what visibly changed.

**Words you will use**

- **Reduced motion:** A setting in every major operating system by which a person asks for less movement. It is a request from them, not a preference you grant.
- **Parallax:** Two layers moving at different speeds as you scroll, so one appears to sit behind the other. It is the pattern most likely to cause harm.
- **Full version:** The movement exactly as you designed it, for people who have not asked for less.

**Quick example.** Made-up example. Turning the reduced-motion setting on for the first time, and assuming it meant switching every animation off. Reduced motion means no motion. One rule, easy to write: when the setting is on, nothing animates anywhere.

The reader demonstrates and guides the task before asking for “The device you used, and where the setting lives on it”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Turn on your own device's reduced-motion setting, design an alternative for every animation you kept, and state which are essential enough to survive in a reduced form.


### Idea 1: The setting is a request from the person, exposed by every maj…

Section: learn. Stable action: learn-1.

The setting is a request from the person, exposed by every major operating system.


### Idea 2: Reduced does not mean removed: replace movement with a gentler…

Section: learn. Stable action: learn-2.

Reduced does not mean removed: replace movement with a gentler change, usually a fade.


### Idea 3: Essential motion — showing that something is loading — must su…

Section: learn. Stable action: learn-3.

Essential motion — showing that something is loading — must survive in some form.


### Idea 4: Large-area and parallax movement is the most likely to cause h…

Section: learn. Stable action: learn-4.

Large-area and parallax movement is the most likely to cause harm; cut it first.


### Test with the setting on, on your own device, and record what you saw

Section: learn. Stable action: learn-5.

Test with the setting on, on your own device, and record what you saw.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Made-up example: with the setting on, three of the five kept animations needed alternatives. The filter panel's scale-and-fade became a fade of 120ms with no movement, keeping the change legible. The detail view's expansion became a cross-fade, and the row it came from stayed highlighted so the relationship survived. The loading spinner — essential — became a small pulsing dot with the label “Booking…”, local rather than crossing the screen. The confirmation flourish was removed entirely under the setting, since it explained nothing. Testing was done on the researcher's own phone with the setting on, and the result recorded with the device and version.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Turn it on and read

Section: practice-plan. Stable action: step-1-brief.

The reduced-motion setting turned on, on a named device, with a note of what visibly changed.

- Read the assigned page and find the setting on your own device.
- Turn it on and note which apps visibly change behaviour.

**Start here:** Find the setting on your own device first, then open two apps you use daily and watch what stops moving.

**Enough:** You have named the device and written what you actually saw, including “nothing visibly changed” if that is the truth.

**Reduced motion:** A setting in every major operating system by which a person asks for less movement. It is a request from them, not a preference you grant.

**Parallax:** Two layers moving at different speeds as you scroll, so one appears to sit behind the other. It is the pattern most likely to cause harm.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Turning the reduced-motion setting on for the first time, and assuming it meant switching every animation off.

**What I assumed:** Reduced motion means no motion. One rule, easy to write: when the setting is on, nothing animates anywhere.

**What that did:** The pulsing dot beside the Book button went too. With the setting on, pressing Book produced four silent seconds and no sign that anything was happening.

**What I had missed:** The request is for less movement, not for less information. That dot was carrying the only news the person had while they waited.

**What the rule became:** Three outcomes instead of one. Some animations survive in a smaller, gentler form. Some become an instant change. Some go entirely.

**What the dot became:** A small dot fading between two shades in one place, beside the words “Booking…”, rather than a shape travelling across the button.

**Wrong turn:** The wrong turn is treating the setting as an off switch. It strips the explanation out along with the decoration, and the person who asked for less movement ends up with less information than everybody else.

**Trade-off:** Two versions of each animation is twice the specification, and most of your users will never see half of it. It is a few minutes each, and it is the difference between a quieter product and a silent one.

**Unknown:** Still unknown: whether your reduced versions are comfortable for people who need the setting. Turning it on yourself shows what changes; it does not tell you how it feels to them.


### The device you used, and where the setting lives on it

Section: practice-plan. Stable action: write-device-and-setting.

Write your answer for “The device you used, and where the setting lives on it”. Use the task instructions below to decide what to include.

**Answer:** The device you used, and where the setting lives on it



<details>
<summary>Example</summary>

Example (made up): my own Android phone, Settings, Accessibility, Remove animations.

</details>


### What visibly changed once the setting was on

Section: practice-plan. Stable action: write-what-changed.

Open two or three apps you use daily and watch what stops moving. If nothing changes, write that too, with today’s date.

**Answer:** What visibly changed once the setting was on

Open two or three apps you use daily and watch what stops moving. If nothing changes, write that too, with today’s date.


### Classify your motion

Section: practice-plan. Stable action: step-2-brief.

Every kept animation given one of three outcomes, and each one that survives written out in both its full and its reduced form.

- Mark each kept animation essential, explanatory or decorative.
- For essential motion, design a smaller local version.
- For explanatory motion, design a fade that preserves the meaning.

**Start here:** Take the animation you would defend hardest and write what a person learns from it, in one sentence, before you design anything.

**Enough:** Every surviving animation has a reduced version that teaches the same thing without large movement.

**Full version:** The movement exactly as you designed it, for people who have not asked for less.

**Reduced version:** The same information carried with less travel. Usually something changing in place rather than journeying across the screen.

**Essential:** The movement is carrying information that nothing else on the screen carries. Essential things survive in a quieter form; they are never simply switched off.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-2-sort-1.

Six animations from the same made up booking app. The reduced-motion setting is on. For each one, decide what should happen to it.

A dot that pulses beside the Book button while the request is on its way.

- survives reduced
- becomes instant
- disappears

<details>
<summary>After your attempt</summary>

survives reduced — It carries the only news the person has while they wait. Make it smaller and keep it in one place, and keep it.

becomes instant — There is no end state to jump to. The whole point of it is the time in between, and that time has not finished yet.

disappears — Remove it and the person meets silence, which is the thing feedback exists to prevent.

Work down your own kept list and give every animation one of these three outcomes, then write both versions of the ones that survive.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-2-sort-2.

Six animations from the same made up booking app. The reduced-motion setting is on. For each one, decide what should happen to it.

The filter panel scaling out of the filter button over 200 milliseconds.

- survives reduced
- becomes instant
- disappears

<details>
<summary>After your attempt</summary>

survives reduced — The panel’s origin is worth keeping, so replace the travel with a short fade in place and leave the button marked as open.

becomes instant — Appearing with no change at all loses the link to the button, and that link was the work the animation was doing.

disappears — The movement can go; the explanation it carried cannot. Something quieter has to take its place.

Work down your own kept list and give every animation one of these three outcomes, then write both versions of the ones that survive.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-2-sort-3.

Six animations from the same made up booking app. The reduced-motion setting is on. For each one, decide what should happen to it.

The photograph at the top of the class page drifting at a different speed from the text as you scroll.

- survives reduced
- becomes instant
- disappears

<details>
<summary>After your attempt</summary>

survives reduced — There is no gentler version of a large area sliding under the reader’s eyes while they are trying to read.

becomes instant — There is no end state to arrive at. The effect exists only for as long as the person keeps scrolling.

disappears — Large, continuous, unrequested movement is the pattern most likely to make someone feel ill. Cut it first, then ask whether it earns its place at all.

Work down your own kept list and give every animation one of these three outcomes, then write both versions of the ones that survive.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-2-sort-4.

Six animations from the same made up booking app. The reduced-motion setting is on. For each one, decide what should happen to it.

The underline sliding along the tab bar to the tab you have just chosen.

- survives reduced
- becomes instant
- disappears

<details>
<summary>After your attempt</summary>

survives reduced — A fade would do no harm, and it is not needed here: the end state alone says which tab is chosen.

becomes instant — The underline’s final position is the whole message. Put it there at once and nothing has been lost.

disappears — The underline itself has to stay, or nothing shows which tab is chosen. It is the travel that goes, not the mark.

Work down your own kept list and give every animation one of these three outcomes, then write both versions of the ones that survive.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-2-sort-5.

Six animations from the same made up booking app. The reduced-motion setting is on. For each one, decide what should happen to it.

The password field shaking from side to side when the password is wrong.

- survives reduced
- becomes instant
- disappears

<details>
<summary>After your attempt</summary>

survives reduced — A smaller shake is still a shake. Repeating movement is the kind to remove rather than to shrink.

becomes instant — There is no end state here. Nothing is left behind once the shaking stops.

disappears — A repeating side-to-side movement is exactly what this setting exists to stop, and the message beside the field already says what is wrong.

Work down your own kept list and give every animation one of these three outcomes, then write both versions of the ones that survive.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-2-sort-6.

Six animations from the same made up booking app. The reduced-motion setting is on. For each one, decide what should happen to it.

The remaining-places number counting down from 5 to 4 over half a second.

- survives reduced
- becomes instant
- disappears

<details>
<summary>After your attempt</summary>

survives reduced — Counting through 5 and 4 adds nothing the final number does not already say.

becomes instant — The number that matters is 4. Show it at once, and mark the change some other way if the person needs to notice it.

disappears — The number has to change, or somebody books a place that has gone. It is the counting that goes, not the change.

Work down your own kept list and give every animation one of these three outcomes, then write both versions of the ones that survive.

</details>


### Animation 1 · the full version, what the person learns from it, and its reduced version

Section: practice-plan. Stable action: write-pair-1.

Write your answer for “Animation 1 · the full version, what the person learns from it, and its reduced version”. Use the task instructions below to decide what to include.

**Answer:** Animation 1 · the full version, what the person learns from it, and its reduced version



<details>
<summary>Example</summary>

Example (made up): the panel scaling out of the filter button over 200 milliseconds; the person learns where the panel came from; reduced version is a 120 millisecond fade in place, with the filter button staying marked as open.

</details>


### Animation 2 · the full version, what the person learns from it, and its reduced version

Section: practice-plan. Stable action: write-pair-2.

Write your answer for “Animation 2 · the full version, what the person learns from it, and its reduced version”. Use the task instructions below to decide what to include.

**Answer:** Animation 2 · the full version, what the person learns from it, and its reduced version




### Animation 3 · the full version, what the person learns from it, and its reduced version

Section: practice-plan. Stable action: write-pair-3.

Fill one pair per animation you kept; leave the rest empty and say how many you kept in pair 1.

**Answer:** Animation 3 · the full version, what the person learns from it, and its reduced version

Optional: may be left empty.

Fill one pair per animation you kept; leave the rest empty and say how many you kept in pair 1.


### Animation 4 · the full version, what the person learns from it, and its reduced version

Section: practice-plan. Stable action: write-pair-4.

Fill one pair per animation you kept; leave the rest empty and say how many you kept in pair 1.

**Answer:** Animation 4 · the full version, what the person learns from it, and its reduced version

Optional: may be left empty.

Fill one pair per animation you kept; leave the rest empty and say how many you kept in pair 1.


### Cut the risky patterns

Section: practice-plan. Stable action: step-3-brief.

Everything that moves a large area, repeats or drifts on scroll listed and removed under the setting, with the reason recorded.

- Identify anything moving a large area, repeating, or parallax.
- Remove those entirely under the setting, except an essential waiting signal, which becomes a steady or gently fading mark beside words.
- Ask whether each is worth keeping even without the setting.

**Start here:** Go through your kept list once looking only for size, repetition and scroll-linked drift. Ignore everything else on this pass.

**Enough:** Each removal has a reason, and you have asked of each whether it earns its place even with the setting off.

**Large-area motion:** Movement filling much of what a person can see at once, so there is no still part of the screen to rest the eye on.

**Looping motion:** A movement that begins again the moment it ends, so the screen is never at rest.

**Scroll-triggered motion:** Something that starts moving because the person scrolled, rather than because they asked for it.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Sorting the risky motion on a garden shop home page by how big each piece was, and letting the two worst through.

**How I sorted them:** By size, because size is the thing you can see without thinking. The large header photograph drifting behind the text was plainly the big one, so out it went. Everything small stayed.

**The one I kept:** A small badge on the basket icon that pulsed gently, on and on, whether or not anything had changed. Tiny, so it looked harmless.

**What size was hiding:** It never stopped. A small movement that repeats forever asks for attention forever, and it sits in the same corner of every screen, so there is nowhere to look away to.

**The second thing size hid:** Each product row fading upwards as you scroll is a small movement. Forty rows of it is the whole screen moving, against the direction the person is already moving in.

**What went in the end:** The drift, the endless pulse and the rows that move on scroll. Under the setting the badge simply appears with a number on it, and the rows are already there when you arrive at them.

**Wrong turn:** The wrong turn is sorting by the size of each element on its own. It is tempting because size needs no judgement at all, and it waves through the two patterns that actually cause trouble: the one that never ends, and the small one repeated forty times.

**Trade-off:** Rows that arrive without an entrance take the only signal you had that more of the list was loading. You now have to say that in words, and words take up space on a page you were trying to keep quiet.

**Unknown:** Still unknown: where the line sits. Nobody can tell you how many small repeated movements add up to one large one, and you cannot feel it yourself if the setting is not for you.


### Anything that moves a large area, repeats, or drifts as the person scrolls

Section: practice-plan. Stable action: write-large-motion.

Write your answer for “Anything that moves a large area, repeats, or drifts as the person scrolls”. Use the task instructions below to decide what to include.

**Answer:** Anything that moves a large area, repeats, or drifts as the person scrolls




### What you removed entirely under the setting, and the reason

Section: practice-plan. Stable action: write-removed-entirely.

Write your answer for “What you removed entirely under the setting, and the reason”. Use the task instructions below to decide what to include.

**Answer:** What you removed entirely under the setting, and the reason




### Test with the setting on

Section: practice-plan. Stable action: step-4-brief.

One complete task walked with the setting on, with anything that became confusing named and repaired by a gentler change.

- Walk one complete task with reduced motion enabled.
- Record anything that became confusing because a relationship was lost.
- Repair by adding a gentler change, not by restoring the movement.

**Start here:** Walk the task once without stopping and note where you lost track, then walk it again and write down why.

**Enough:** Every repair is a quieter change rather than the movement put back.

**Walk:** Going through one whole task yourself, slowly, saying out loud what changes at each step.

**Lost relationship:** Something a movement used to explain, which nothing explains now that the movement has gone.

**Gentler change:** The quieter replacement you add instead of restoring the movement: a change of words, a change of colour, a mark that stays put.


### What you saw walking one complete task with the setting on

Section: practice-plan. Stable action: write-task-walk.

Write your answer for “What you saw walking one complete task with the setting on”. Use the task instructions below to decide what to include.

**Answer:** What you saw walking one complete task with the setting on




### Anything that became confusing because a relationship was lost, and the gentler change you added

Section: practice-plan. Stable action: write-lost-relationship.

Repair by adding a quieter change, never by putting the movement back.

**Answer:** Anything that became confusing because a relationship was lost, and the gentler change you added

Repair by adding a quieter change, never by putting the movement back.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The plan is to add reduced-motion support at the end, once the animations are settled. What goes wrong?

- It costs a little more time to do late than to do early, which is acceptable.
- Very little goes wrong, as long as the switch is thorough and covers every single screen.
- Done last, it becomes one switch that turns everything off, stripping explanations too.

<details>
<summary>After your attempt</summary>

It costs a little more time to do late than to do early, which is acceptable. — The cost is not time, it is meaning. What is lost is the information the movement was carrying, and nobody notices it is gone.

Very little goes wrong, as long as the switch is thorough and covers every single screen. — Thoroughness is the problem here rather than the cure. A thorough off switch removes the loading signal and the origin of every panel.

Done last, it becomes one switch that turns everything off, stripping explanations too. — Designed alongside the original, each animation gets its own quieter version and keeps its meaning. Designed afterwards, there is only time for a single blunt rule.

Improve: Give every animation in your pairs section in step 2 a reduced version now rather than a single rule, and record the change in step 5.

Check again: No animation in your list is handled only by a blanket off switch.

Answers to revisit: pair-1, pair-2, pair-3, pair-4, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

With the setting on, your loading indicator disappears completely. Is that acceptable?

- Acceptable, as long as the outcome message eventually arrives to end the wait.
- She is still waiting, and with it gone nothing tells her the product is working.
- Acceptable, because the setting asks for no motion and you are honouring the request.

<details>
<summary>After your attempt</summary>

Acceptable, as long as the outcome message eventually arrives to end the wait. — The gap before that message is exactly the moment the person needs covering. Eventually is not an acknowledgement.

She is still waiting, and with it gone nothing tells her the product is working. — Essential motion has to survive in some form. A small dot fading in one place, beside a change of words, says the same thing without travel.

Acceptable, because the setting asks for no motion and you are honouring the request. — The request is for less movement, not for less information. Reduced is not removed, and a silent wait is a worse experience than a quiet signal.

Improve: Find your loading and progress items in step 2 and specify a small, local reduced version that does not travel, beside a change of words, for each, then record it in step 5.

Check again: Every wait is signalled in both versions of your specification.

Answers to revisit: pair-1, pair-2, pair-3, pair-4, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You turned the setting on, walked the task, and everything felt fine. What can you claim?

- That reduced motion is now handled across the product and the work is finished.
- Your reduced versions work for you on your device; nothing about how they feel to others.
- That the reduced versions are comfortable for people with motion sensitivity.

<details>
<summary>After your attempt</summary>

That reduced motion is now handled across the product and the work is finished. — Handled on one device by one person, with the parts you happened to walk through. That is worth recording as exactly that much.

Your reduced versions work for you on your device; nothing about how they feel to others. — Your own walk is a check, not a test with affected users. Writing the limit down is what keeps the claim honest when someone reads your work later.

That the reduced versions are comfortable for people with motion sensitivity. — You have no evidence about those people. One person’s comfortable walk says nothing about a symptom they do not experience.

Improve: Write the limit in your limits-statement box in step 5, naming the device and saying plainly who you have not tested with, then note it in step 5 as well.

Check again: Your record separates what you saw from what you have not established.

Answers to revisit: limits-statement, improvement-made

</details>


### Record honestly

Section: practice. Stable action: step-5-brief.

An honest statement of what your own test does not establish, and the repair the Check questions asked for.

- Write the device and setting you tested with.
- State that your own test is not testing with affected users.
- Save both versions of every animation.

**Start here:** Write one sentence saying plainly that testing the setting on yourself is not testing with people who rely on it.

**Enough:** Nothing in your notes reads as evidence about people you have not spoken to.

**Establish:** To show something is true firmly enough that another person could rely on it.

**Motion sensitivity:** Dizziness, nausea or headache brought on by movement on a screen. It is the reason the setting exists, and it is not something you can check by having a look yourself.


### What your own test does not tell you

Section: practice. Stable action: write-limits-statement.

Turning the setting on yourself shows what changes. It does not tell you how the result feels to someone who needs it.

**Answer:** What your own test does not tell you

Turning the setting on yourself shows what changes. It does not tell you how the result feels to someone who needs it.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Your decision for the new case, and why

Section: practice. Stable action: write-transfer-decision.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.

**New case.** Made-up case: a houseplant-care app has a header photo that drifts as you scroll, a watering timer drawn as a ring that sweeps round as the minutes pass, and a tick that bounces when you mark a plant as watered. A person has turned on reduced motion on her phone.

**Task:** Decide what happens to each of the three animations with the setting on, and explain why.

<details>
<summary>Compare after writing</summary>

- Weak: Switches every animation off, including the timer ring, so she loses the time remaining.
- Adequate: Removes the drifting header, keeps the timer’s information as a number that updates without sweeping, and shows the tick at once, because each keeps what she learns without large movement.
- Strong: As adequate, plus a check with the setting on, on a device like hers, and a stated limit: one person’s check does not show how it feels to people who need the setting.

</details>

**Answer:** Your decision for the new case, and why

Optional: may be left empty.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson looks at gestures and what people can actually discover without being told.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Reduced motion is not an afterthought
What I am trying to do: Turn on your own device's reduced-motion setting, design an alternative for every animation you kept, and state which are essential enough to survive in a reduced form.

Key idea or terms:
Reduced motion: A setting in every major operating system by which a person asks for less movement. It is a request from them, not a preference you grant.
Parallax: Two layers moving at different speeds as you scroll, so one appears to sit behind the other. It is the pattern most likely to cause harm.
Full version: The movement exactly as you designed it, for people who have not asked for less.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Turning the reduced-motion setting on for the first time, and assuming it meant switching every animation off. Reduced motion means no motion. One rule, easy to write: when the setting is on, nothing animates anywhere.

Activity: Before explaining the tool or method, ask me to predict what the next action will change. After I answer, explain the visible result and one common recovery step.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “The device you used, and where the setting lives on it” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “The device you used, and where the setting lives on it”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “The device you used, and where the setting lives on it” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Follow the assigned page to your platform's setting, turn it on and walk your task again, writing what you saw.
- For each animation write what the person learns from it, then design a change that teaches the same thing without movement.

- R64: [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — The reduce and no-preference values, the platform settings list, and the worked example that swaps rather than removes an animation. Purpose: Tells you how the request reaches your design and where to turn it on for yourself. Free reading, no account. Verified 2026-09-06; the page states its own last modification as 10 June 2026. It documents the signal, not motion design: no durations, no easing guidance and no conformance criteria. Fallback: R13.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The check on moving, flashing and blinking content. Purpose: Gives a preliminary check for motion that runs without the person asking for it. Free reading, no account. Verified 2026-09-06. The checks are preliminary and passing them is not conformance; they are not a substitute for testing with affected people. Fallback: R28.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The setting was turned on and the test recorded**

Adequate evidence: A record of enabling reduced motion on a named device and walking one complete task.

0 — Not tested.

1 — Claimed without a device or task named.

2 — Enabled on a named device with the task walked and results recorded.

3 — As adequate, and the record notes which other apps changed, showing the setting was genuinely active.

Repair: Follow the assigned page to your platform's setting, turn it on and walk your task again, writing what you saw. Recheck: The test record.

**Every kept animation has a reduced alternative**

Adequate evidence: A paired specification: full version and reduced version, for each animation retained.

0 — No alternatives.

1 — Alternatives for some, or a blanket disable.

2 — Each animation has a specified gentler alternative.

3 — As adequate, and each alternative preserves the explanation the original carried.

Repair: For each animation write what the person learns from it, then design a change that teaches the same thing without movement. Recheck: The paired specifications.

**Essential motion survives in a reduced form**

Adequate evidence: Loading and progress indicators specified in a smaller, local form that does not travel — a steady mark or a gentle fade in place — beside a change of words.

0 — Essential motion removed under the setting.

1 — Retained unchanged, defeating the setting.

2 — Reduced in size and movement while still communicating.

3 — As adequate, and a text alternative is specified for the case where any motion is unwelcome.

Repair: Replace the spinner with a small local pulse plus a label change, and check it still says the system is working. Recheck: The essential-motion specification.

**Large-area and repeating motion is removed under the setting**

Adequate evidence: A list of large, parallax or repeating motion, each removed when the setting is on, apart from an essential waiting signal kept as a steady or gently fading mark beside words.

0 — Retained.

1 — Reduced but still moving a large area.

2 — Removed under the setting, with the decision recorded.

3 — As adequate, and one is removed for everyone after considering what it cost and explained.

Repair: List everything that moves more than a small region or repeats. Remove each under the setting first, then ask whether it earns its place at all. Recheck: The removal list.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson looks at gestures and what people can actually discover without being told.

**Review criteria:**

- The setting was turned on and the test recorded
- Every kept animation has a reduced alternative
- Essential motion survives in a reduced form
- Large-area and repeating motion is removed under the setting

<details>
<summary>Reading, video and deeper explanation</summary>

- Vestibular disorders are common enough that any product with an audience will have users affected by them, and large or unexpected movement can cause genuine nausea and dizziness rather than mild annoyance. Every major operating system therefore exposes a reduced-motion setting, and the assigned page lists exactly where it lives on each — which means you can turn it on for yourself in under a minute and see what your design does.
- The right response is replacement rather than deletion. If a panel's entry explained where it came from, removing the animation entirely removes the explanation; a quick fade keeps the change legible without moving anything across the screen. The assigned example does exactly this: it swaps an animation for a gentler one rather than switching it off.
- Some motion is essential and must persist in a reduced form. A loading indicator communicates that the system is working, and a person who has asked for less motion still needs to know that. The reduced version should be smaller and local, and should not travel — a steady mark, a gentle fade in place or a text change rather than a spinning element crossing a large area.
- The riskiest patterns are the large ones: full-screen transitions, parallax scrolling, background video, anything that moves a large area or moves it repeatedly. Those are the first to cut when the setting is on, and honestly they are often worth cutting for everyone, since they cost the most and explain the least.

[MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).

</details>

## Lesson 5: Gestures and what people can discover

Stable ID: m09-l05-v1. Core.

A gesture nobody discovers is a feature nobody has. Gestures are shortcuts for people who already know, not routes for people who do not.

Bring: Your m08 list components and the flows using them.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A list of every gesture with its visible alternative
- Discoverability results from people who were not told, or the supplied results with the gap dated
- Destructive gestures specified with undo or confirmation
- Any gesture removed for being unconventional or one-handed-impossible

### Start here: in everyday words

Interaction design explains what happens when someone acts, what they see next and how they recover from a mistake. In this lesson, your first small result is: Every gesture in your design listed, with the invented ones marked and the ones that are the only route flagged.

**Words you will use**

- **Gesture:** An action done with a finger that has no control on the screen: a swipe, a pinch, a long press, a two-finger anything.
- **Platform convention:** A gesture the person’s phone already uses everywhere else, so they may arrive knowing it. Pull down to refresh is one.
- **Visible control:** A button, menu item or link that is on the screen already, without anybody having to do something to reveal it.

**Quick example.** Supplied made-up results. Three people were each asked to remove a class from a shortlist and told nothing else. The first pressed and held the row. The second opened the class page and looked for a control there. The third tapped the row twice, then said she would delete the whole shortlist and start again. Nobody swiped.

The reader demonstrates and guides the task before asking for “Every gesture your design uses or assumes, and whether you invented it”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Specify the gestures your product uses, give every one a visible alternative and a recoverable outcome, and record which were discoverable when someone tried the product without being told, or read the supplied results and date the gap.


### Every gesture needs a visible alternative that does the same thing

Section: learn. Stable action: learn-1.

Every gesture needs a visible alternative that does the same thing.


### Hidden gestures are shortcuts, never the only route to an action

Section: learn. Stable action: learn-2.

Hidden gestures are shortcuts, never the only route to an action.


### Match the platform's conventions; inventing a new swipe teaches nobody

Section: learn. Stable action: learn-3.

Match the platform's conventions; inventing a new swipe teaches nobody.


### Destructive gestures need either a confirmation or a working undo

Section: learn. Stable action: learn-4.

Destructive gestures need either a confirmation or a working undo.


### Idea 5: Gestures fail for people with tremors, one hand free, or a cra…

Section: learn. Stable action: learn-5.

Gestures fail for people with tremors, one hand free, or a cracked screen.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Made-up example: the shortlist row used swipe-left to remove, with no visible control. Three people were asked to remove an item without being told how; none swiped, two looked for a control and one opened the detail view. The revision kept the swipe as an accelerator and added a visible quiet remove control on every row. Removal became immediate with a five-second undo rather than a confirmation dialogue. Pull-to-refresh was left alone because it matched the platform convention, and a proposed two-finger gesture for changing dates was dropped: it was undiscoverable, unconventional and impossible one-handed.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### List the gestures

Section: practice-plan. Stable action: step-1-brief.

Every gesture in your design listed, with the invented ones marked and the ones that are the only route flagged.

- List every gesture your design uses or assumes.
- Mark which are platform conventions and which you invented.
- Mark which are the only route to their action.

**Start here:** Walk one task in your design and write down every place you imagined a finger moving rather than tapping.

**Enough:** Every gesture is marked invented or conventional, and you can say which ones have no button anywhere.

**Gesture:** An action done with a finger that has no control on the screen: a swipe, a pinch, a long press, a two-finger anything.

**Platform convention:** A gesture the person’s phone already uses everywhere else, so they may arrive knowing it. Pull down to refresh is one.


### Every gesture your design uses or assumes, and whether you invented it

Section: practice-plan. Stable action: write-gesture-list.

Include swipes, long presses, pinches, pull-to-refresh and drags. Include the ones you have only imagined so far.

**Answer:** Every gesture your design uses or assumes, and whether you invented it

Include swipes, long presses, pinches, pull-to-refresh and drags. Include the ones you have only imagined so far.

<details>
<summary>Example</summary>

Example (made up): swipe left on a shortlist row to remove it, invented; pull down to refresh the class list, a platform convention.

</details>


### Which gestures are the only way to reach their action

Section: practice-plan. Stable action: write-only-route.

If no button, menu item or link does the same job, the gesture goes here.

**Answer:** Which gestures are the only way to reach their action

If no button, menu item or link does the same job, the gesture goes here.


### Add visible alternatives

Section: practice-plan. Stable action: step-2-brief.

A visible control written beside every gesture, and any gesture you removed with what it was for.

- Give every gesture a visible control that does the same thing.
- Keep the gesture as an accelerator where it matches convention.
- Remove any invented gesture that has no clear benefit.

**Start here:** For each gesture, design the control somebody would use if they had never heard of the gesture. That control is the real route.

**Enough:** No line in your list has an empty control column.

**Visible control:** A button, menu item or link that is on the screen already, without anybody having to do something to reveal it.

**Shortcut:** A second, faster route to something that already has a route. If it is the only way to reach the action, it is not a shortcut.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Pairing a swipe with a visible control, after first deciding the swipe was fine on its own.

**What the design had:** Swipe left on a shortlist row to remove it. No button, no menu, nothing on the row. It looked wonderfully clean.

**What I wrote first:** “Swiping to remove is a standard pattern, so people will find it.” I added a small hint the first time the list opens and called it solved.

**Why that failed:** The hint appears once, to somebody who is not yet removing anything. By the time she wants to remove a class, the hint was weeks ago.

**What I did instead:** Every row got a quiet remove control that is always there. The swipe stayed as a shortcut for anyone who already knows it.

**What the pairing cost:** The row is busier by one small control. It is now the only version of the row that works for somebody who has never met a swipe.

**Wrong turn:** The wrong turn is teaching the gesture instead of pairing it. A hint, a tour or a little animation all assume the person is watching at the one moment you chose.

**Trade-off:** A visible control takes space and makes the row less clean. Clean was always being paid for by the people who could not find the action.

**Unknown:** Still unknown: whether the quiet control is quiet enough to stay out of the way, or so quiet that it reads as decoration.


### Each gesture, beside the visible control that does the same job

Section: practice-plan. Stable action: write-gesture-pairs.

Write your answer for “Each gesture, beside the visible control that does the same job”. Use the task instructions below to decide what to include.

**Answer:** Each gesture, beside the visible control that does the same job




### Any gesture you removed, and what it was for

Section: practice-plan. Stable action: write-gestures-removed.

Write your answer for “Any gesture you removed, and what it was for”. Use the task instructions below to decide what to include.

**Answer:** Any gesture you removed, and what it was for




### Test discoverability

Section: practice-plan. Stable action: step-3-brief.

What three people reached for when nobody told them how, or the supplied results with the gap dated.

- Before anyone starts, use your consent introduction from earlier modules: what you will ask, that they can stop at any time, and that only an unnamed summary is kept.
- Ask up to three adults who agree to take part to complete the action without telling them how; if nobody is available, read the supplied made-up results and date the gap.
- Record what each reached for first.
- Note anyone who gave up or used a longer route.

**Start here:** Ask an adult to hand, such as a flatmate, a colleague or a family member. First read your consent introduction from earlier modules: what you will ask, that they can stop at any time, and that you keep only an unnamed summary. If they agree, say the goal only, then say nothing at all while they try. If nobody is free today, use the supplied results above as practice, write today’s date, and record that discoverability is untested.

**Enough:** Each attempt names what the person touched first. A rehearsal with supplied material is written down as untested, never as research.

**Discoverability:** Whether somebody can work out that an action exists without being told about it.

**Prompting:** Saying or doing anything that hints at the answer while somebody is trying. A glance at the right part of the screen counts, which is why you sit still and say nothing.

**Untested:** Written down when nobody actually tried it. It is a real result, and it is not the same as leaving the box empty.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

Supplied made-up results. Three people were each asked to remove a class from a shortlist and told nothing else. The first pressed and held the row. The second opened the class page and looked for a control there. The third tapped the row twice, then said she would delete the whole shortlist and start again. Nobody swiped.

What do these three attempts tell you about the swipe?

- The swipe should be deleted from the design, since nobody used it at all.
- The swipe is only a shortcut; the real route is whatever those three reached for first.
- Three people is too few to conclude anything at all about the swipe or the row.
- They needed a hint, so a short tip shown on first use would fix the problem.

<details>
<summary>After your attempt</summary>

The swipe should be deleted from the design, since nobody used it at all. — Nobody found it, which is not the same as nobody wanting it. Kept as a shortcut beside a visible control it costs nothing and helps the people who do know.

The swipe is only a shortcut; the real route is whatever those three reached for first. — Three people wanted the action and none of them found the gesture. That makes the gesture an extra, and it makes the visible control the actual design.

Three people is too few to conclude anything at all about the swipe or the row. — Three is small for counting how often something happens. It is plenty for showing that a hidden action can be missed, which is all this claims.

They needed a hint, so a short tip shown on first use would fix the problem. — A tip arrives once, before anybody wants to remove anything. All three were already trying, and none of them had a tip in mind.

Read your own records the same way. For each gesture, write whether it is now a shortcut or still the only route to its action.

</details>


### How you found out

Section: practice-plan. Stable action: write-discovery-route.

Choose the option that honestly describes your work.

**Answer:** How you found out (Three people tried it without being told / One or two people tried it / Nobody was available: I used the supplied made-up results and dated the gap)




### What each person reached for first, in the order they tried things, with no names

Section: practice-plan. Stable action: write-discovery-records.

Only adults who agreed after your consent introduction and knew they could stop. Write what they touched, not what you think they meant, as “person 1, person 2”. Note anyone who gave up or took a longer route. Raw notes stay in a private file with a date to delete them. Leave this empty on the rehearsal route.

**Answer:** What each person reached for first, in the order they tried things, with no names

Required only when discovery-route is Three people tried it without being told or One or two people tried it. Otherwise leave participant evidence empty.

Only adults who agreed after your consent introduction and knew they could stop. Write what they touched, not what you think they meant, as “person 1, person 2”. Note anyone who gave up or took a longer route. Raw notes stay in a private file with a date to delete them. Leave this empty on the rehearsal route.


### What that tells you about each gesture

Section: practice-plan. Stable action: write-discovery-reading.

On the rehearsal route, say what the supplied results would suggest if they were real, then write that discoverability is untested for your design.

**Answer:** What that tells you about each gesture

On the rehearsal route, say what the supplied results would suggest if they were real, then write that discoverability is untested for your design.


### Make destruction recoverable

Section: practice-plan. Stable action: step-4-brief.

Undo specified for every destructive gesture, with a window, the wording and a place a thumb can reach, and what an abandoned swipe does.

- For each destructive gesture, specify undo with a stated window.
- Specify what happens when a swipe stops halfway or is released early.
- Reserve confirmation for actions that cannot be undone.
- Check the undo is reachable one-handed.

**Start here:** Write the five seconds after the gesture as a small story: what vanished, what appeared, where it sits, what it says.

**Enough:** Every destructive gesture has either an undo with a stated number of seconds or a reason it cannot be reversed.

**Slip:** Doing the wrong thing while meaning the right thing. An accidental swipe is a slip, and slips want undo rather than a question.

**Undo window:** How many seconds the reversal stays available. Say the number; “briefly” gets built as whatever the developer had that day.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Writing undo for a swipe that removes a class, and putting the undo somewhere her thumb could not reach in time.

**What I specified first:** The row goes, and a message appears at the top of the screen saying “Removed”, with Undo beside it. It stays three seconds.

**Why the top felt right:** That is where messages sit on most of the pages I had been looking at. Three seconds felt like the natural length of a message.

**What a phone in one hand does to it:** She swiped with her thumb near the bottom of a tall screen. The undo is at the top, so she has to shuffle the phone up her hand to reach it, and by then it has gone.

**What the wording was hiding:** “Removed” does not say what was removed. On a shortlist of six similar classes she cannot tell from the message which one vanished, so she cannot tell whether she wants it back.

**What I wrote instead:** The message sits low, near where the swipe happened. It says “Sunrise Flow removed” with Undo beside it, and it stays eight seconds.

**Wrong turn:** The wrong turn is treating undo as wording and forgetting it is a thing somebody has to physically get to. It is tempting because the sentence is the part you can write at a desk, and the reach is the part you only find out about holding a phone.

**Trade-off:** A message sitting low covers part of the list, and eight seconds keeps it in the way for longer than three did. The version that stayed out of the way was the version that expired while her hand was still moving.

**Unknown:** Still unknown: whether eight seconds is long enough for somebody reading slowly, or holding a child, or working out what just happened. Watching people swipe by accident would settle it, and nobody has.


### For each destructive gesture: what happens, how long undo lasts, and the words the person sees

Section: practice-plan. Stable action: write-undo-spec.

Write your answer for “For each destructive gesture: what happens, how long undo lasts, and the words the person sees”. Use the task instructions below to decide what to include.

**Answer:** For each destructive gesture: what happens, how long undo lasts, and the words the person sees




### Where the undo sits, and whether one thumb can reach it

Section: practice-plan. Stable action: write-undo-reach.

Write your answer for “Where the undo sits, and whether one thumb can reach it”. Use the task instructions below to decide what to include.

**Answer:** Where the undo sits, and whether one thumb can reach it




### What happens when a swipe stops halfway or is released early, and how the row returns

Section: practice-plan. Stable action: write-swipe-cancel.

Write your answer for “What happens when a swipe stops halfway or is released early, and how the row returns”. Use the task instructions below to decide what to include.

**Answer:** What happens when a swipe stops halfway or is released early, and how the row returns



<details>
<summary>Example</summary>

Example (made up): released before the halfway mark, the row slides back and nothing is removed; with reduced motion it simply snaps back.

</details>


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Nobody was free to try your product. What do you write in the discoverability section?

- That discoverability is untested, dated, with the supplied results used only as practice.
- Your own attempt at the task, written up carefully as a test of discoverability.
- That the gesture is discoverable, since it is a common pattern in other apps.

<details>
<summary>After your attempt</summary>

That discoverability is untested, dated, with the supplied results used only as practice. — A dated gap is a finding an engineer or a reviewer can act on. It also protects you from quoting a rehearsal as though somebody had really tried.

Your own attempt at the task, written up carefully as a test of discoverability. — You already know where everything is, so your attempt cannot show what a stranger would reach for. Your hand is the one hand that proves nothing.

That the gesture is discoverable, since it is a common pattern in other apps. — Common elsewhere is an argument, not a record. The whole point of this lesson is that arguments about gestures lose to three people reaching for the wrong thing.

Improve: Set the choice in step 3 to the honest option and write the date beside it, then record what you changed in step 5.

Check again: The discoverability section says plainly whether anybody tried it, and when.

Answers to revisit: discovery-route, discovery-records, discovery-reading, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

One person out of three found your swipe. What have you learned?

- Very little, since one success in three is well within the normal range of variation.
- One in three is promising, so a short teaching hint would bring the rest along.
- The swipe is a shortcut for that one; the visible control is the route for the rest.

<details>
<summary>After your attempt</summary>

Very little, since one success in three is well within the normal range of variation. — Two people could not do a thing they were asked to do. That is not variation to wait out, it is the finding.

One in three is promising, so a short teaching hint would bring the rest along. — Hints appear once and at the wrong moment. Teaching people a route they did not need to learn is more expensive than showing them a control.

The swipe is a shortcut for that one; the visible control is the route for the rest. — A gesture nobody discovers is not a feature. Beside a visible control it becomes a genuine accelerator instead of a barrier.

Improve: If any line in your pairs list in step 2 still has no visible control, add one now, then record the change in step 5.

Check again: Every gesture in the list has a visible control beside it.

Answers to revisit: gesture-pairs, gestures-removed, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A swipe on your list removes an item. Should it ask for confirmation first, or offer undo afterwards?

- Neither is needed, because the item can simply be added to the shortlist again.
- A confirmation dialogue, because a removed item cannot be taken back afterwards.
- Undo with a stated window, because an accidental swipe is a slip rather than a decision.

<details>
<summary>After your attempt</summary>

Neither is needed, because the item can simply be added to the shortlist again. — Adding it again is a new task, and it assumes she noticed and remembers which class it was. Recovery has to be offered, not left to her memory.

A confirmation dialogue, because a removed item cannot be taken back afterwards. — It can be taken back if you design it to be. Reserve the dialogue for the rare action you genuinely cannot reverse, such as closing an account.

Undo with a stated window, because an accidental swipe is a slip rather than a decision. — A dialogue after every swipe punishes the many people who meant it. Undo costs the careful person nothing and rescues the person whose thumb slid.

Improve: Write the undo window and the exact wording into your undo box in step 4, then record the change in step 5.

Check again: Every destructive gesture names a number of seconds and the words the person sees.

Answers to revisit: undo-spec, undo-reach, swipe-cancel, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

Which gestures survived, what one-handed use cannot do, and the repair the Check questions asked for.

- Write which gestures survived and why.
- Record what a person with one hand free cannot do.
- Save the specification with the discoverability results.

**Start here:** Try every gesture with one hand while holding something in the other, then write what you could not manage.

**Enough:** The one-handed note names specific gestures and the route those people use instead.

**One-handed use:** Using the product with one thumb while the other hand is holding something. It rules out anything that needs two fingers at once.

**Repair:** The change a Check question asked you to make, written down with what it was before and what it is now.


### Which gestures survived, and the reason for each

Section: practice. Stable action: write-survivors.

Write your answer for “Which gestures survived, and the reason for each”. Use the task instructions below to decide what to include.

**Answer:** Which gestures survived, and the reason for each




### What somebody with one hand free, a shaking hand or a cracked screen cannot do, and what they use instead

Section: practice. Stable action: write-hands-gap.

Write your answer for “What somebody with one hand free, a shaking hand or a cracked screen cannot do, and what they use instead”. Use the task instructions below to decide what to include.

**Answer:** What somebody with one hand free, a shaking hand or a cracked screen cannot do, and what they use instead




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Your decision for the new case, and why

Section: practice. Stable action: write-transfer-decision.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.

**New case.** Made-up case: a news app’s saved-articles list lets people archive an article only by swiping right, and share it only by pressing and holding. Archiving removes the article from the list at once. Nothing on the screen shows that either gesture exists.

**Task:** Decide what you would add or change for archiving and sharing, and explain why.

<details>
<summary>Compare after writing</summary>

- Weak: Adds a first-use tutorial or tooltip so people learn the gestures, keeping them as the only routes.
- Adequate: Adds a visible archive control and a visible share control on each article, keeps the gestures as shortcuts, and gives archiving an undo with a stated window.
- Strong: As adequate, plus what happens when a swipe is released halfway, whether the undo is reachable one-handed, and a plan to watch people try it unaided, or a dated note that nobody has.

</details>

**Answer:** Your decision for the new case, and why

Optional: may be left empty.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson writes the same kind of specification for the keyboard, key by key.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Gestures and what people can discover
What I am trying to do: Specify the gestures your product uses, give every one a visible alternative and a recoverable outcome, and record which were discoverable when someone tried the product without being told, or read the supplied results and date the gap.

Key idea or terms:
Gesture: An action done with a finger that has no control on the screen: a swipe, a pinch, a long press, a two-finger anything.
Platform convention: A gesture the person’s phone already uses everywhere else, so they may arrive knowing it. Pull down to refresh is one.
Visible control: A button, menu item or link that is on the screen already, without anybody having to do something to reveal it.

Supplied practice material (fictional or labelled practice, not my research):
Supplied made-up results. Three people were each asked to remove a class from a shortlist and told nothing else. The first pressed and held the row. The second opened the class page and looked for a control there. The third tapped the row twice, then said she would delete the whole shortlist and start again. Nobody swiped.

Activity: Before explaining the tool or method, ask me to predict what the next action will change. After I answer, explain the visible result and one common recovery step.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Every gesture your design uses or assumes, and whether you invented it” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Every gesture your design uses or assumes, and whether you invented it”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try a supplied example” question. Choose an answer, read the explanation, then return to “Every gesture your design uses or assumes, and whether you invented it” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- For each gesture, design the control someone would use if they had never met the gesture. That control is the real route.
- Hand someone the screen and state the goal only. Say nothing else, and write down what they try.

- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 6, recognition rather than recall, and heuristic 7, flexibility and efficiency of use. Purpose: Frames gestures as accelerators for experienced users layered over visible routes. Free reading, no account. Verified 2026-09-06. It does not cover touch gestures specifically; the discoverability rules here are the course's own. Fallback: R11.
- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — Slips, prevention and undo. Purpose: Explains why an accidental swipe is a slip and why undo suits it better than confirmation. Free reading, no account. Verified 2026-09-06. Prevention techniques are options rather than a checklist; the gesture application is this lesson's. Fallback: R02.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Every gesture has a visible alternative**

Adequate evidence: A paired list: gesture and the visible control performing the same action.

0 — Gestures are the only route to some actions.

1 — Alternatives exist for some gestures.

2 — Every gesture has a visible equivalent.

3 — As adequate, and the visible route is treated as primary in the specification.

Repair: For each gesture, design the control someone would use if they had never met the gesture. That control is the real route. Recheck: The paired list.

**Discoverability was tested without telling people, or the gap is dated**

Adequate evidence: De-identified records from three people attempting the action unaided, with what each reached for — or, on the rehearsal route, a dated statement that nobody was available and a reading of the supplied results labelled as practice.

0 — Not tested and not acknowledged.

1 — Tested after explaining the gesture, or supplied results written up as if they were your own.

2 — Three unaided attempts recorded with first actions, or the rehearsal route followed honestly with the gap dated.

3 — As adequate, and the results changed the design rather than confirming it.

Repair: Hand someone the screen and state the goal only. Say nothing else, and write down what they try. Recheck: The discoverability records.

**Destructive gestures are recoverable**

Adequate evidence: Undo specified with a window, or a confirmation where the action is irreversible, and a swipe released halfway returning the row untouched.

0 — Destructive gestures with no recovery.

1 — Confirmation on every swipe, removing the speed benefit.

2 — Undo with a stated window, confirmation reserved for the irreversible.

3 — As adequate, and the undo control is reachable one-handed.

Repair: Specify what happens in the five seconds after a destructive gesture and where the person taps to reverse it. Recheck: The recovery specification.

**One-handed and low-dexterity use is considered**

Adequate evidence: A written note of which gestures fail one-handed or with limited dexterity, and what those people use instead.

0 — Not considered.

1 — Mentioned without consequences.

2 — Specific failures named with the alternative route stated.

3 — As adequate, and a multi-finger or precision gesture was removed as a result.

Repair: Try every gesture with one hand while holding something in the other. Anything you cannot do is not available to many of your users. Recheck: The one-handed notes.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson writes the same kind of specification for the keyboard, key by key.

**Review criteria:**

- Every gesture has a visible alternative
- Discoverability was tested without telling people, or the gap is dated
- Destructive gestures are recoverable
- One-handed and low-dexterity use is considered

<details>
<summary>Reading, video and deeper explanation</summary>

- Discoverability is the whole problem. A swipe on a list row is invisible: nothing on screen says it exists, so only people who have met the pattern elsewhere will try it. That makes it a fine accelerator and a poor primary route, and the rule follows directly — if the only way to remove an item is to swipe, then for a large share of your users the item cannot be removed.
- Convention does the teaching you cannot do yourself. Swipe-to-go-back, pull-to-refresh and long-press-for-options carry meaning because other products established them, and a product that reassigns them creates errors rather than delight. Where you genuinely need a new gesture, treat it as an accelerator for repeat users and design the visible route as the real one.
- Destructive gestures deserve particular care because they are easy to trigger by accident: a swipe while scrolling with a thumb on a moving bus is a slip, not a decision. Either confirm, or — usually better — perform the action and offer a real undo for long enough that a person who did not mean it can recover.
- Physical circumstances break gestures. Someone holding a child, with a cracked screen corner, with limited dexterity or with one hand on a rail cannot perform a precise two-finger action. The visible alternative is not a courtesy for edge cases; it is the route most of your users will actually take.

[Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/). [Web Accessibility Perspectives: Speech Recognition](https://www.w3.org/WAI/perspective-videos/voice/). No video needed: for each gesture, name the visible control that does the same job. Anything with no visible control is the gap this step exists to find.

</details>

## Lesson 6: Keyboard behaviour, specified key by key

Stable ID: m09-l06-v1. Core.

Keyboard behaviour is designed or it is accidental. Written down before the build, it costs an hour; discovered afterwards, it is a rewrite.

Bring: Two components from your inventory, one composite.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A key-by-key table for two components
- Tab and arrow behaviour distinguished for the composite
- Escape behaviour including where focus returns
- Test results against the table, or an explicit untested note

### Start here: in everyday words

Interaction design explains what happens when someone acts, what they see next and how they recover from a mistake. In this lesson, your first small result is: Two components chosen, one simple and one made of parts, with each pattern’s keyboard section rewritten in your own words.

**Words you will use**

- **Composite component:** One control made of several smaller ones: a date grid, a set of tabs, a menu. It behaves as one thing from outside and has its own inside.
- **Tab stop:** A place the tab key can land. A composite should be one tab stop, not one per part.
- **Key row:** One line of the table covering one key in one situation. The same key often needs several rows, because it does different things in different places.

**Quick example.** A supplied made-up result. Your table says escape closes the filter panel and returns focus to the Filters button. Tabbing through a comparable panel in a real product, escape did nothing at all, and closing it another way sent focus back to the very top of the page.

The reader demonstrates and guides the task before asking for “Your two components: one simple, one made of several parts”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Write the expected keyboard behaviour for two of your components, key by key, against the assigned pattern, and test any built version against your own specification.


### Tab moves between components; arrow keys usually move within one

Section: learn. Stable action: learn-1.

Tab moves between components; arrow keys usually move within one.


### Idea 2: Enter and space activate, and the difference matters for butto…

Section: learn. Stable action: learn-2.

Enter and space activate, and the difference matters for buttons and links.


### Escape closes, and it must return focus to whatever opened the thing

Section: learn. Stable action: learn-3.

Escape closes, and it must return focus to whatever opened the thing.


### Idea 4: Every component you build should have a written key table befo…

Section: learn. Stable action: learn-4.

Every component you build should have a written key table before it is built.


### The assigned patterns are guidance, not a standard: cite them, then test

Section: learn. Stable action: learn-5.

The assigned patterns are guidance, not a standard: cite them, then test.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Made-up example: the date-selection component and the filter panel were specified before building. For the date component: one tab stop for the group, arrow keys to move between dates, enter or space to select, home and end for the first and last day of the week, page up and down for the month, escape to close returning focus to the field. For the filter panel: focus moves into the panel when it opens, escape closes it and returns focus to the filter button, and tab cycles inside while it is open. A rough build was tested against the table and failed two rows — escape did nothing, and focus returned to the document top — both recorded as defects rather than as design changes.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read the patterns

Section: practice-plan. Stable action: step-1-brief.

Two components chosen, one simple and one made of parts, with each pattern’s keyboard section rewritten in your own words.

- Read the assigned pattern pages for your two components.
- Copy out their keyboard interaction sections in your own words.

**Start here:** Pick the plainest control you have and the most complicated one. The gap between them is where this lesson happens.

**Enough:** Your notes are in your own sentences, and you could explain the arrow behaviour to somebody without looking at the page.

**Composite component:** One control made of several smaller ones: a date grid, a set of tabs, a menu. It behaves as one thing from outside and has its own inside.

**Tab stop:** A place the tab key can land. A composite should be one tab stop, not one per part.


### Your two components: one simple, one made of several parts

Section: practice-plan. Stable action: write-component-choice.

Write your answer for “Your two components: one simple, one made of several parts”. Use the task instructions below to decide what to include.

**Answer:** Your two components: one simple, one made of several parts



<details>
<summary>Example</summary>

Example (made up): the book button, and the date picker with a grid of days inside it.

</details>


### The keyboard section of each assigned pattern, written out in your own words

Section: practice-plan. Stable action: write-pattern-notes.

Copying it word for word teaches you nothing. Rewriting it is where you notice what you did not understand.

**Answer:** The keyboard section of each assigned pattern, written out in your own words

Copying it word for word teaches you nothing. Rewriting it is where you notice what you did not understand.


### Write the tables

Section: practice-plan. Stable action: step-2-brief.

A table with one row per key: the key, the component, the situation, and the behaviour you expect from it.

- For each component write one row per key: key, context, expected behaviour.
- Distinguish what tab does from what the arrow keys do.
- Include home, end and escape where the pattern uses them.

**Start here:** Write the tab row first for both components. The difference between those two rows is most of the lesson.

**Enough:** Every row says what happens, not what is allowed to happen, and the composite has one tab row rather than many.

**Key row:** One line of the table covering one key in one situation. The same key often needs several rows, because it does different things in different places.

**Modifier key:** A key held down while another is pressed, such as shift or control. Shift and tab together move backwards.

**Wrap:** What the arrow keys do at the end of a set of things: either carry on round to the other end, or stop dead. Your table has to say which.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Writing a key table for a date picker, and finding the first version unbearable to use.

**What I wrote first:** One row per day: tab moves to the next date. Thirty-one dates, thirty-one tab stops. Every key was accounted for.

**Why it looked right:** Every date was reachable by keyboard. That is exactly the sentence people mean when they say a thing has keyboard support.

**What using it was like:** Getting from the picker down to the Book button took thirty-one presses. Reaching the 28th took twenty-eight.

**What the pattern said:** One tab stop for the grid; arrows move between days; Home and End go to the first and last day of the week; Page Up and Page Down change month.

**What the table became:** Six rows instead of thirty-one: tab, arrows, enter and space, home and end, page up and down, escape. Shorter to write and far shorter to use.

**Wrong turn:** The wrong turn is treating reachable as finished. A tab stop on every element answers the reachability question and makes the component miserable.

**Trade-off:** One tab stop means the person has to know the arrows move inside. That is the convention the pattern exists to protect, and it is what the rest of their machine already does.

**Unknown:** Still unknown: what happens at the edge of the grid, whether the arrows wrap round to the next week or stop dead. The pattern allows both and your table has to choose.


### Key row 1 · the key, the component, where the person is, and what must happen

Section: practice-plan. Stable action: write-key-row-1.

Start with tab, because it is the one that separates your simple component from your composite one.

**Answer:** Key row 1 · the key, the component, where the person is, and what must happen

Start with tab, because it is the one that separates your simple component from your composite one.

<details>
<summary>Example</summary>

Example (made up): arrow right · date picker · focus is on a day in the grid · move to the next available day, and stop at the last one rather than wrapping.

</details>


### Key row 2 · the key, the component, where the person is, and what must happen

Section: practice-plan. Stable action: write-key-row-2.

Write your answer for “Key row 2 · the key, the component, where the person is, and what must happen”. Use the task instructions below to decide what to include.

**Answer:** Key row 2 · the key, the component, where the person is, and what must happen




### Key row 3 · the key, the component, where the person is, and what must happen

Section: practice-plan. Stable action: write-key-row-3.

Write your answer for “Key row 3 · the key, the component, where the person is, and what must happen”. Use the task instructions below to decide what to include.

**Answer:** Key row 3 · the key, the component, where the person is, and what must happen




### Key row 4 · the key, the component, where the person is, and what must happen

Section: practice-plan. Stable action: write-key-row-4.

Write your answer for “Key row 4 · the key, the component, where the person is, and what must happen”. Use the task instructions below to decide what to include.

**Answer:** Key row 4 · the key, the component, where the person is, and what must happen




### Key row 5 · the key, the component, where the person is, and what must happen

Section: practice-plan. Stable action: write-key-row-5.

Write your answer for “Key row 5 · the key, the component, where the person is, and what must happen”. Use the task instructions below to decide what to include.

**Answer:** Key row 5 · the key, the component, where the person is, and what must happen




### Key row 6 · the key, the component, where the person is, and what must happen

Section: practice-plan. Stable action: write-key-row-6.

Write your answer for “Key row 6 · the key, the component, where the person is, and what must happen”. Use the task instructions below to decide what to include.

**Answer:** Key row 6 · the key, the component, where the person is, and what must happen




### Specify focus movement

Section: practice-plan. Stable action: step-3-brief.

Where focus goes when each component opens, closes and is cancelled, and anywhere it could land unseen.

- State where focus goes when the component opens.
- State where focus returns when it closes or is cancelled.
- Check focus never lands somewhere invisible or off screen.

**Start here:** Write three sentences per component: focus on open, focus on close, focus on escape.

**Enough:** No sentence is missing. Any you leave out will be decided at build time, and usually decided as nothing.

**Focus:** The one place on the screen that the keyboard is talking to. If a person cannot see it, they have lost their position.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Writing where focus goes for a filter panel, and naming a region instead of naming a control.

**What I wrote first:** “On open, focus moves to the panel. On close, focus returns to the list.” One sentence each, and I thought this step was finished.

**What a panel is to a keyboard:** Nothing. It is a box drawn round some controls. Unless something inside it is named, focus stays on the Filters button behind the panel, and her next key press acts on a screen she cannot see.

**What returning to the list did:** The list is sixty rows long. Focus landed at the top of it, so she came out of the panel above everything she had just filtered and had to travel down again.

**The one I nearly missed:** On a narrow screen the panel covers the whole page. Sending focus back to the Filters button put her outline above the top of the window, where she could not see it.

**What I wrote instead:** On open, focus goes to the date field, which is the first control in the panel. On close and on escape it returns to the Filters button, and the page scrolls that button into view before focus lands on it.

**Wrong turn:** The wrong turn is naming a region. “The panel”, “the list”, “the page” all read like decisions on the page and leave exactly the hole an empty box would have left.

**Trade-off:** Naming one control ties the rule to the layout, so rearranging the panel means rewriting every rule that mentions a part of it. A rule loose enough never to need updating is a rule that never said anything.

**Unknown:** Still unknown: whether scrolling the button back into view is enough for somebody using a magnified screen, who may only ever see a small part of the page at once.


### For each component: focus when it opens, when it closes, and when it is cancelled

Section: practice-plan. Stable action: write-focus-open-close.

Write your answer for “For each component: focus when it opens, when it closes, and when it is cancelled”. Use the task instructions below to decide what to include.

**Answer:** For each component: focus when it opens, when it closes, and when it is cancelled




### Anywhere focus could land off screen, or on something with no visible outline

Section: practice-plan. Stable action: write-focus-visible-check.

Write your answer for “Anywhere focus could land off screen, or on something with no visible outline”. Use the task instructions below to decide what to include.

**Answer:** Anywhere focus could land off screen, or on something with no visible outline




### Test or mark untested

Section: practice-plan. Stable action: step-4-brief.

Every row marked with what actually happened, or marked untested, with what you checked it against.

- Build a rough version and test every row of the table.
- Record pass or fail per row with what happened.
- Where nothing is built, mark every row untested rather than assumed.

**Start here:** Open a real product that uses the same pattern, or a free prototype, put the mouse down and walk your rows in order.

**Enough:** Every row carries a result. Where nothing was available to try, every row says untested and the choice above says so too.

**Comparable product:** A real product using the same pattern, borrowed so you have something to press keys on. It is rehearsal: it shows you what to look for, and its results are not your build’s.

**Untested:** Written against a row nobody has actually tried. It is a result, and it is not the same as an empty box.


### Try a supplied example

Section: practice-plan. Stable action: step-4-try.

A supplied made-up result. Your table says escape closes the filter panel and returns focus to the Filters button. Tabbing through a comparable panel in a real product, escape did nothing at all, and closing it another way sent focus back to the very top of the page.

What do you write down?

- What that product did, marked not my build, with my own rows left untested.
- Change the table so escape is optional, since a real product manages without it.
- Leave both rows blank until something of your own exists to test them on.
- Mark both rows passed, because that behaviour is exactly what you designed.

<details>
<summary>After your attempt</summary>

What that product did, marked not my build, with my own rows left untested. — The table is your specification and the product you tried is rehearsal. Recording what it did, without passing it off as your build, tells you which risks your build must avoid.

Change the table so escape is optional, since a real product manages without it. — One product doing without something is not a reason for your specification to ask for less. That is how a table stops being a specification and becomes a description.

Leave both rows blank until something of your own exists to test them on. — A blank row cannot be told apart from a row nobody thought about. Untested is a real result; empty is not.

Mark both rows passed, because that behaviour is exactly what you designed. — Designing something does not make it happen. Marking untried rows as passed is the one thing a key table must never do.

Go through your own rows and mark each one with what happened in your own build, or with the word untested. Put anything a comparable product showed beside it, labelled as rehearsal. Leave no row empty.

</details>


### What you checked your table against

Section: practice-plan. Stable action: write-test-status.

Choose the option that honestly describes your work.

**Answer:** What you checked your table against (A real product using the same pattern, tabbed through in my browser / A free prototype I could tab through / Nothing existed to check: every row is untested)

A real product is a comparable product, not your build: what it did is rehearsal, and your own rows stay untested until something of yours exists.


### Row by row: what actually happened, or the word untested

Section: practice-plan. Stable action: write-row-results.

Write what the keys did, not what they were supposed to do. A comparable product’s result goes beside your row, labelled “comparable product, not my build”, and your row stays untested. No row may be left empty.

**Answer:** Row by row: what actually happened, or the word untested

Write what the keys did, not what they were supposed to do. A comparable product’s result goes beside your row, labelled “comparable product, not my build”, and your row stays untested. No row may be left empty.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your date picker has thirty-one tab stops, one per day. Is that keyboard support?

- It is full support, because every date can be reached without using a mouse.
- It depends on how many dates are usually available in the month on screen.
- It is reachable but not usable: the grid should be one tab stop, with arrows inside.

<details>
<summary>After your attempt</summary>

It is full support, because every date can be reached without using a mouse. — Reachable is the low bar the pattern exists to raise. A person going to the Book button below has to press tab thirty-one times to get there.

It depends on how many dates are usually available in the month on screen. — Even a week of dates is seven stops on the way to everything below. The rule does not soften with fewer items.

It is reachable but not usable: the grid should be one tab stop, with arrows inside. — Tab is for moving between components and arrows for moving within one. Thirty-one stops means every keyboard user pays for the grid on the way past it.

Improve: Rewrite your composite’s rows in step 2 so tab reaches the group once and the arrows move inside, then record the change in step 5.

Check again: The composite has one tab row and separate arrow rows, with the edge behaviour stated.

Answers to revisit: key-row-1, key-row-2, key-row-3, key-row-4, key-row-5, key-row-6, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your table says nothing about where focus goes when the panel closes. What happens?

- Focus returns to the Filters button on its own, whatever the panel is built from.
- It is decided at build time, often by accident, and focus can fall to the top of the page.
- Very little: where focus lands is a development detail, not a design decision.

<details>
<summary>After your attempt</summary>

Focus returns to the Filters button on its own, whatever the panel is built from. — Some built-in dialogues do return focus, and a custom panel often does not. Writing the destination down is what makes it happen either way.

It is decided at build time, often by accident, and focus can fall to the top of the page. — A silent specification is not neutral. A custom panel does whatever its code happens to do, and the person who closed it can find themselves at the start of the page.

Very little: where focus lands is a development detail, not a design decision. — Where somebody stands after a change is as much a design decision as where the panel sits. Left out, it becomes an accident.

Improve: Fill the focus box in step 3 with three sentences per component: on open, on close, on cancel, then record the change in step 5.

Check again: Both components name a destination for focus in all three situations.

Answers to revisit: focus-open-close, focus-visible-check, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Nothing is built and you cannot find a comparable product to try. What goes in the results?

- Every row marked as passing, since the behaviour is what the pattern specifies.
- Every row marked untested, said plainly, with what you looked for and could not find.
- Leave the results column out entirely until there is a build to test against.

<details>
<summary>After your attempt</summary>

Every row marked as passing, since the behaviour is what the pattern specifies. — The pattern says what should happen. Your results column is only for what did happen, and nothing happened yet.

Every row marked untested, said plainly, with what you looked for and could not find. — An untested table is still the most useful thing an engineer can be handed. It says what is expected and admits nothing has been checked.

Leave the results column out entirely until there is a build to test against. — A missing column reads as an oversight. An untested column reads as a person who knows exactly where they stand.

Improve: Set the choice in step 4 to the untested option and write untested against every row in your results box, then record it in step 5.

Check again: No row in either table is blank.

Answers to revisit: test-status, row-results, improvement-made

</details>


### Record the gaps

Section: practice. Stable action: step-5-brief.

Failures from your own build as defects, what a comparable product got wrong as risks to avoid, your deliberate departures from the pattern, and the repair the Check questions asked for.

- List failures from your own build as defects, not as design changes; list what a comparable product got wrong as risks for the build to avoid.
- Note where you departed from the pattern and why.
- Save both tables with their results.

**Start here:** Copy each row your own build failed into the defect list with the expected behaviour beside what happened. List what a comparable product got wrong separately, as risks.

**Enough:** Nothing that failed has quietly become the new design.

**Defect:** A written difference between what you specified and what the thing actually does, in a form a developer can pick up and act on.

**Deliberate departure:** A place where you knowingly did something the pattern does not, written down with your reason so nobody reads it as a slip.


### Failures from your own build as defects, what a comparable product got wrong as risks for the build to avoid, and anywhere you left the pattern on purpose

Section: practice. Stable action: write-defect-list.

Write your answer for “Failures from your own build as defects, what a comparable product got wrong as risks for the build to avoid, and anywhere you left the pattern on purpose”. Use the task instructions below to decide what to include.

**Answer:** Failures from your own build as defects, what a comparable product got wrong as risks for the build to avoid, and anywhere you left the pattern on purpose




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Your decision for the new case, and why

Section: practice. Stable action: write-transfer-decision.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.

**New case.** Made-up case: a cinema’s seat map is a grid of 120 seats, and every seat is its own tab stop. Pressing Escape closes the seat map but sends focus to the top of the page. Enter selects a seat; Space does nothing.

**Task:** Write the key rows you would change for this seat map, and explain why each change matters.

<details>
<summary>Compare after writing</summary>

- Weak: Says every seat is reachable by Tab, so keyboard support is done, or only adds a skip link.
- Adequate: One tab stop for the grid with arrow keys moving between seats, Enter and Space both selecting, and Escape closing the map and returning focus to the “Choose seats” button.
- Strong: As adequate, plus what the arrows do at the edges and over unavailable seats, and every row marked untested until it is tried in a build, with anything learned from a comparable product labelled as rehearsal.

</details>

**Answer:** Your decision for the new case, and why

Optional: may be left empty.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson takes the focus sentences further, into what happens when content changes underneath somebody.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Keyboard behaviour, specified key by key
What I am trying to do: Write the expected keyboard behaviour for two of your components, key by key, against the assigned pattern, and test any built version against your own specification.

Key idea or terms:
Composite component: One control made of several smaller ones: a date grid, a set of tabs, a menu. It behaves as one thing from outside and has its own inside.
Tab stop: A place the tab key can land. A composite should be one tab stop, not one per part.
Key row: One line of the table covering one key in one situation. The same key often needs several rows, because it does different things in different places.

Supplied practice material (fictional or labelled practice, not my research):
A supplied made-up result. Your table says escape closes the filter panel and returns focus to the Filters button. Tabbing through a comparable panel in a real product, escape did nothing at all, and closing it another way sent focus back to the very top of the page.

Activity: Before explaining the tool or method, ask me to predict what the next action will change. After I answer, explain the visible result and one common recovery step.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Your two components: one simple, one made of several parts” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Your two components: one simple, one made of several parts”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try a supplied example” question. Choose an answer, read the explanation, then return to “Your two components: one simple, one made of several parts” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Copy the pattern's keyboard section into a table and adapt each row to your component.
- Rewrite the composite's rows: one stop for the group, arrows to move inside, and state the wrap behaviour.

- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — The pattern pages for your two components, read for their Keyboard Interaction sections. Purpose: Supplies the expected key behaviour your tables are written from. Free reading, no account. Verified 2026-09-06; pages carry no date. Semantics and keyboard only — no visual design, no motion — and it is authoring guidance rather than a conformance standard, so the build still has to be tested. Fallback: R14.
- R14: [W3C: forms tutorial](https://www.w3.org/WAI/tutorials/forms/) — The sections on labels and on notifying users of errors, read for focus behaviour around validation. Purpose: Connects keyboard focus to the error handling you specified in m07 and m08. Free reading, no account. Verified 2026-09-06. It covers form accessibility rather than composite widget keyboard patterns, which is why the patterns resource carries this lesson. Fallback: R10.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**A key-by-key table exists for both components**

Adequate evidence: Two tables with one row per key giving context and expected behaviour.

0 — Keyboard mentioned in prose only.

1 — One component specified.

2 — Both specified key by key.

3 — As adequate, and the tables cover the keys the pattern lists rather than only tab and enter.

Repair: Copy the pattern's keyboard section into a table and adapt each row to your component. Recheck: The two key tables.

**Tab and arrow roles are distinguished**

Adequate evidence: A composite component where tab moves between components and arrows move within.

0 — Every child is a tab stop.

1 — Distinction asserted but not specified per key.

2 — Tab and arrow behaviour specified separately.

3 — As adequate, and the specification says what happens at the ends of the set.

Repair: Rewrite the composite's rows: one stop for the group, arrows to move inside, and state the wrap behaviour. Recheck: The revised composite table.

**Focus movement on open and close is specified**

Adequate evidence: Stated destinations for focus when the component opens, closes and is cancelled.

0 — Focus movement unspecified.

1 — Opening specified but not the return.

2 — Both specified, with cancellation included.

3 — As adequate, and the specification forbids focus landing off screen or on an invisible element.

Repair: Write three sentences: focus on open, focus on close, focus on escape. Any missing one will be decided at build time. Recheck: The focus specification.

**Results are recorded, including what was untested**

Adequate evidence: Pass or fail per row against a build, or an explicit statement that no build exists and every row is untested.

0 — Behaviour claimed without testing.

1 — Partially tested with results unrecorded.

2 — Every row marked tested with a result, or untested honestly.

3 — As adequate, and failures are recorded as build defects with the expected behaviour restated.

Repair: Build a rough page with the two components and walk your tables row by row. Record what happens, not what should. Recheck: The tables with results.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson takes the focus sentences further, into what happens when content changes underneath somebody.

**Review criteria:**

- A key-by-key table exists for both components
- Tab and arrow roles are distinguished
- Focus movement on open and close is specified
- Results are recorded, including what was untested

<details>
<summary>Reading, video and deeper explanation</summary>

- The tab-versus-arrow distinction is what separates a usable composite component from an exhausting one. If every tab in a tab strip is a tab stop, a keyboard user passes through all of them to reach the content; the established pattern makes the strip one stop and the arrow keys move within it. Getting this right is invisible to mouse users and decisive for everyone else.
- Activation keys carry meaning. A button responds to both enter and space; a link responds to enter. Reproducing that correctly matters because people have learned it, and a control that looks like a button but ignores space is a small, repeated failure that is hard to articulate and easy to feel.
- Escape has an obligation beyond closing: focus must return somewhere sensible, normally the control that opened the thing. A dialogue that closes and drops focus back to the top of the document forces the keyboard user to travel all the way back, which is the equivalent of scrolling a mouse user to the top of the page every time they close something.
- The assigned patterns give you the expected key behaviour for the common components, and writing your own table from them before building is the point of this lesson. They are authoring practices rather than a conformance standard, and they cover semantics and keys only — nothing about how the component should look or move — so your table is a specification you still have to test against a real build.

[W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/). [Web Accessibility Perspectives: Keyboard Compatibility](https://www.w3.org/WAI/perspective-videos/keyboard/). No video needed: put the mouse out of reach and do one task on a real page with the keyboard alone. Write where you got stuck; that is the same starting point.

</details>

## Lesson 7: Where focus goes when things change

Stable ID: m09-l07-v1. Core.

Focus is the keyboard user's cursor and the screen-reader user's position. Moving it carelessly is like scrolling someone else's page while they are reading.

Bring: Your key tables and the m08 message specifications.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Focus rules for opening, closing, replacing content and errors
- A list of places focus currently moves without reason
- A visible focus indicator specified for every surface
- Tab-through results with any lost-position steps named

### Start here: in everyday words

Interaction design explains what happens when someone acts, what they see next and how they recover from a mistake. In this lesson, your first small result is: A list of every moment in your product where content opens, closes, is replaced or fails.

**Words you will use**

- **Focus:** The one place the keyboard is talking to. It is a person’s place on the screen, and moving it moves them.
- **Announce:** Say what changed without moving anybody. A short line of text that a screen reader reads out and a sighted person can see.
- **Destination:** The one named control focus lands on. “The panel” is a place; “the date field” is a destination.

**Quick example.** Made-up example. Writing the rule for replaced content, after first sending focus to the results and throwing somebody out of the filters. Somebody picks a date in the filter panel. The list underneath changes from 63 classes to 12.

The reader demonstrates and guides the task before asking for “Each place in your product where content opens, closes, is replaced, or fails”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Specify focus behaviour for four situations — opening, closing, content replacing, and an error appearing — and check that nothing your product does moves a person's place without telling them.


### Idea 1: Move focus deliberately: on open, on close, on error, on conte…

Section: learn. Stable action: learn-1.

Move focus deliberately: on open, on close, on error, on content replacement.


### Never move focus without a reason the person would recognise

Section: learn. Stable action: learn-2.

Never move focus without a reason the person would recognise.


### Idea 3: New content that matters must be announced or given focus, not…

Section: learn. Stable action: learn-3.

New content that matters must be announced or given focus, not silently inserted.


### Keep focus visible at every step; an invisible focus is a lost position

Section: learn. Stable action: learn-4.

Keep focus visible at every step; an invisible focus is a lost position.


### Idea 5: Test by pressing tab, looking away, then looking back: can you…

Section: learn. Stable action: learn-5.

Test by pressing tab, looking away, then looking back: can you find where you are within a second?


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Made-up example: four rules were written. Opening the filter panel moves focus to its first control. Closing it — by escape or by the close control — returns focus to the filter button. Applying a filter leaves focus on the control and announces “12 classes match”, because moving focus to the list would lose the person's place in the filters. A validation error moves focus to the first field with a problem and the message is tied to that field. A fifth situation was found while testing: after removing a shortlist item, focus was landing on the document top, which was recorded as a defect with the expected behaviour — focus should move to the next item, or to the list heading when the list is now empty.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and list the moments

Section: practice-plan. Stable action: step-1-brief.

A list of every moment in your product where content opens, closes, is replaced or fails.

- Re-read the assigned pattern guidance on focus movement.
- List every moment in your product where content opens, closes, replaces or fails.

**Start here:** Walk one whole task and stop every time the screen is not what it was a second ago.

**Enough:** The list has at least one of each of the four kinds: opening, closing, replacing, failing.

**Focus:** The one place the keyboard is talking to. It is a person’s place on the screen, and moving it moves them.

**Announce:** Say what changed without moving anybody. A short line of text that a screen reader reads out and a sighted person can see.


### Each place in your product where content opens, closes, is replaced, or fails

Section: practice-plan. Stable action: write-moments-list.

Panels, dialogues, filters, search results, saved messages, validation errors, a list becoming empty.

**Answer:** Each place in your product where content opens, closes, is replaced, or fails

Panels, dialogues, filters, search results, saved messages, validation errors, a list becoming empty.

<details>
<summary>Example</summary>

Example (made up): filter panel opens; filter panel closes; the list refreshes after a date is chosen; the payment form rejects three fields.

</details>


### Write the four rules

Section: practice-plan. Stable action: step-2-brief.

Four rules, each naming a destination or naming what is announced instead.

- State where focus goes on open and where it returns on close.
- State whether focus moves when content is replaced, and what is announced.
- State where focus goes when an error appears.

**Start here:** Write the open rule first. It is the easiest, and the other three are all arguments with it.

**Enough:** Each rule names a specific destination, or says plainly that focus stays and gives the words that are announced.

**Destination:** The one named control focus lands on. “The panel” is a place; “the date field” is a destination.

**Cancel:** Leaving something without keeping the change, usually by pressing escape. It often needs a different destination from an ordinary close.

**Replaced content:** Content that changes underneath somebody while the screen around it stays put, such as a list refiltering or results reloading.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Writing the rule for replaced content, after first sending focus to the results and throwing somebody out of the filters.

**The situation:** Somebody picks a date in the filter panel. The list underneath changes from 63 classes to 12.

**What I wrote first:** “Move focus to the first result, so she sees straight away that something happened.” It felt helpful and considerate.

**What that actually does:** She was halfway down the filters and about to choose a price range. Focus is now in the list and the filters are behind her.

**What I wrote instead:** Focus stays exactly where it is. The count is announced: “12 classes match.” She carries on filtering and knows what happened.

**The rule underneath:** Move focus to a place the person asked to go. Never move it as a way of telling them something.

**Wrong turn:** The wrong turn is using focus as a notification. Moving somebody’s place is the loudest thing an interface can do, and a count does not deserve it.

**Trade-off:** Announcing rather than moving makes the change quieter, and somebody skimming may miss the count. Keeping her place is worth more than the noticing.

**Unknown:** Still unknown: whether “12 classes match” arrives at the right moment or while she is still pressing keys. That needs somebody who uses a screen reader every day.


### Where focus goes when something opens

Section: practice-plan. Stable action: write-rule-open.

Write your answer for “Where focus goes when something opens”. Use the task instructions below to decide what to include.

**Answer:** Where focus goes when something opens




### Where focus returns when it closes, and when it is cancelled

Section: practice-plan. Stable action: write-rule-close.

Write your answer for “Where focus returns when it closes, and when it is cancelled”. Use the task instructions below to decide what to include.

**Answer:** Where focus returns when it closes, and when it is cancelled




### When content is replaced: whether focus moves, and what is announced instead

Section: practice-plan. Stable action: write-rule-replace.

Write your answer for “When content is replaced: whether focus moves, and what is announced instead”. Use the task instructions below to decide what to include.

**Answer:** When content is replaced: whether focus moves, and what is announced instead




### Where focus goes when an error appears, and where the message sits

Section: practice-plan. Stable action: write-rule-error.

Write your answer for “Where focus goes when an error appears, and where the message sits”. Use the task instructions below to decide what to include.

**Answer:** Where focus goes when an error appears, and where the message sits




### Find unrequested movement

Section: practice-plan. Stable action: step-3-brief.

Every place focus moves without being asked, each removed or justified, and the one you decided to keep.

- Walk your flows looking for focus moving when the person did not ask.
- Record each and decide whether to remove or justify it.

**Start here:** Take one flow and press tab all the way through it, writing down every jump you did not cause.

**Enough:** Nothing in the list is unresolved: each move is removed or has a reason written beside it.

**Unrequested movement:** Focus moving somewhere when the person did nothing to ask to go there.

**Justified move:** An unrequested move you decided to keep, written down with the reason it is worth interrupting somebody for.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six made up situations from a class-booking product. None of these were observed; they are written for practice. For each one, decide what should happen to the person’s place on the screen.

Tapping Filters opens a filter panel on top of the list.

- move it
- leave it
- leave it and announce

<details>
<summary>After your attempt</summary>

move it — She asked to go there. Focus follows the request into the panel’s first control, so the next key she presses lands where she is looking.

leave it — Focus would stay on the Filters button behind a panel she is now looking at. Her next key press acts on something she cannot see.

leave it and announce — Telling her a panel opened while leaving her outside it gives her the news and not the place. She asked to go in.

Now walk your own flows. Write down every moment focus moves, mark each with one of these three, and record what you did about the ones that break your own rules.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six made up situations from a class-booking product. None of these were observed; they are written for practice. For each one, decide what should happen to the person’s place on the screen.

She presses escape and the filter panel closes.

- move it
- leave it
- leave it and announce

<details>
<summary>After your attempt</summary>

move it — The thing she was standing in has gone. Focus goes back to the Filters button that opened it, which is exactly where she left from.

leave it — There is nothing left to leave it on. Focus inside a closed panel usually falls to the top of the page, and she starts the screen again.

leave it and announce — A closing panel needs a destination more than it needs a sentence. Without one she is somewhere undefined.

Now walk your own flows. Write down every moment focus moves, mark each with one of these three, and record what you did about the ones that break your own rules.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six made up situations from a class-booking product. None of these were observed; they are written for practice. For each one, decide what should happen to the person’s place on the screen.

She picks a date. The list underneath changes from 63 classes to 12.

- move it
- leave it
- leave it and announce

<details>
<summary>After your attempt</summary>

move it — She is in the middle of filtering. Sending her to the list takes her out of the controls she is still using.

leave it — Silence leaves somebody who cannot see the list with no idea whether the date did anything at all.

leave it and announce — Her place is worth keeping and the change is worth knowing. “12 classes match” gives her the second without costing the first.

Now walk your own flows. Write down every moment focus moves, mark each with one of these three, and record what you did about the ones that break your own rules.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six made up situations from a class-booking product. None of these were observed; they are written for practice. For each one, decide what should happen to the person’s place on the screen.

She types a note on a booking, taps elsewhere, and the note saves.

- move it
- leave it
- leave it and announce

<details>
<summary>After your attempt</summary>

move it — She has already moved on to whatever she tapped. Dragging her back to the note undoes her own decision.

leave it — A save with no word is the one thing an automatic save must never be. She never learns that the note is safe.

leave it and announce — She stays where she went, and a short “Saved” tells her the note is no longer only in her head.

Now walk your own flows. Write down every moment focus moves, mark each with one of these three, and record what you did about the ones that break your own rules.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six made up situations from a class-booking product. None of these were observed; they are written for practice. For each one, decide what should happen to the person’s place on the screen.

While she is still typing a postcode, a quiet hint appears under the field saying the format is nearly right.

- move it
- leave it
- leave it and announce

<details>
<summary>After your attempt</summary>

move it — Moving focus mid-word takes the keyboard away from her. A hint is never worth interrupting typing for.

leave it — She is busy and the hint is not urgent. It waits for her, which is what a hint is for.

leave it and announce — Announcing every keystroke’s worth of guidance turns the field into a chatterbox. Save the words for the result when she stops.

Now walk your own flows. Write down every moment focus moves, mark each with one of these three, and record what you did about the ones that break your own rules.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six made up situations from a class-booking product. None of these were observed; they are written for practice. For each one, decide what should happen to the person’s place on the screen.

A photograph three rows below her finishes loading, and the row it sits in stays exactly the same size.

- move it
- leave it
- leave it and announce

<details>
<summary>After your attempt</summary>

move it — She asked for nothing and nothing changed for her. Focus moving here is the interface fidgeting.

leave it — The change is cosmetic, the layout did not shift, and she is unaffected. Doing nothing is the whole answer.

leave it and announce — Announcing a picture she never asked about adds noise. Announcements are for changes that alter what she can do.

Now walk your own flows. Write down every moment focus moves, mark each with one of these three, and record what you did about the ones that break your own rules.

</details>


### Every place focus moves without the person doing anything, and what you did about each

Section: practice-plan. Stable action: write-unrequested-moves.

Write your answer for “Every place focus moves without the person doing anything, and what you did about each”. Use the task instructions below to decide what to include.

**Answer:** Every place focus moves without the person doing anything, and what you did about each




### The one move you decided to keep, and why it is worth it

Section: practice-plan. Stable action: write-justified-move.

Write your answer for “The one move you decided to keep, and why it is worth it”. Use the task instructions below to decide what to include.

**Answer:** The one move you decided to keep, and why it is worth it




### Test the indicator

Section: practice-plan. Stable action: step-4-brief.

The focus outline described against every surface it lands on, and the steps where you lost your position.

- Tab through each screen and watch only the focus indicator.
- Note any step where you lose track of your position.
- Check the indicator is visible on every surface colour you use.

**Start here:** Tab through a free prototype or a comparable real page slowly, watching only the outline and nothing else.

**Enough:** Each lost-position step names the screen and the control, not “somewhere in the middle”.

**Focus indicator:** The visible mark showing where the keyboard is standing, usually an outline drawn round the control.

**Surface:** Any background a control can sit on: the page, a card, a dark banner, a coloured bar. The outline has to be checked against each one.

**Contrast:** How far apart two colours are in lightness. An outline as light as the thing behind it cannot be seen, however bright the colour looks on its own.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Specifying the focus outline as one colour, then losing my own place twice while tabbing through.

**What I specified:** A two-pixel dark blue outline, everywhere. One sentence, one colour, and I thought the indicator was settled.

**Where it vanished:** The banner across the top of the page is that same dark blue. Tabbing on to the button sitting on it, the outline was drawn and there was nothing to see. Present and invisible.

**The second place:** Rows in the list already glow faintly when the mouse passes over them. That glow and my outline read as the same mark, so I could not tell where the keyboard was standing from where a mouse had been.

**What I wrote instead:** Two lines drawn together, one pale and one dark. Whatever surface it lands on, one of the two shows. Then a line each for the page, the card, the banner and the sticky bar.

**What the walk found last:** At the top of a scrolling panel the outline was cut off by the panel edge, because nothing had left room for it. The rule gained a small gap around anything focusable near an edge.

**Wrong turn:** The wrong turn is treating the outline as a colour choice, set once in one place. It is tempting because that is how every other colour in the design behaves.

**Trade-off:** A double outline is heavier and louder than the quiet single line the page was designed around. It is the version that survives every surface, and delicacy that disappears is not delicacy.

**Unknown:** Still unknown: how any of it behaves when somebody turns on their own high-contrast setting or magnifies the page. Neither has been tried here.


### The focus outline described against every background colour it can land on

Section: practice-plan. Stable action: write-indicator-spec.

Write your answer for “The focus outline described against every background colour it can land on”. Use the task instructions below to decide what to include.

**Answer:** The focus outline described against every background colour it can land on




### The steps where you lost track of your position

Section: practice-plan. Stable action: write-tab-through.

Tab slowly through a free prototype or a comparable real page and watch only the outline.

**Answer:** The steps where you lost track of your position

Tab slowly through a free prototype or a comparable real page and watch only the outline.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You decide focus should jump to the first result whenever a filter changes the list. What does that cost?

- It costs only people using screen readers, who hear the list from the top.
- It pulls her out of the filters mid-task; announcing the new count keeps her place.
- Very little, because it shows her the change immediately, which is the point.

<details>
<summary>After your attempt</summary>

It costs only people using screen readers, who hear the list from the top. — A sighted keyboard user is moved just as far. Focus is everybody’s position, not an assistive-technology detail.

It pulls her out of the filters mid-task; announcing the new count keeps her place. — Moving somebody is the strongest thing you can do and a changed count is a small piece of news. Match the size of the response to the size of the event.

Very little, because it shows her the change immediately, which is the point. — It shows the change by relocating her. She now has to find her way back to the filter she was about to use.

Improve: Rewrite your replace rule in step 2 so focus stays and the change is announced, with the words written out, then record the change in step 5.

Check again: The replace rule says focus stays and gives the exact sentence that is announced.

Answers to revisit: rule-open, rule-close, rule-replace, rule-error, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A form is submitted and three fields are rejected. Where does focus go?

- To the first field with a problem, with its message attached to that field.
- To the top of the page, where a red banner says only that there were errors.
- Nowhere in particular, because the red borders already make all three visible.

<details>
<summary>After your attempt</summary>

To the first field with a problem, with its message attached to that field. — She lands on the thing she has to change, with the reason beside it. Nothing else has to be hunted for. Moving focus to an error summary that links to each field, as GOV.UK does and as the summary in your Module 8 form allows, is the other defensible choice.

To the top of the page, where a red banner says only that there were errors. — A banner that names no field leaves her to hunt through the form for all three. A summary that names each problem and links to its field would be a different, defensible choice.

Nowhere in particular, because the red borders already make all three visible. — Red borders are invisible to anybody not looking at that part of the screen, and to anybody who does not see red as red. Focus is what carries the person there.

Improve: Fill your error rule in step 2 with a named destination and where the message sits, then record the change in step 5.

Check again: The error rule names a specific destination — the first field with a problem, or a summary that links to each field — not a region.

Answers to revisit: rule-open, rule-close, rule-replace, rule-error, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You tabbed through and twice could not tell where you were. What do you write down?

- Very little, since the browser’s default outline is usually good enough.
- The two steps by name, and what the outline must look like on those two surfaces.
- A note that focus styling will be settled properly during the build itself.

<details>
<summary>After your attempt</summary>

Very little, since the browser’s default outline is usually good enough. — You have just watched it not be fine, twice. That observation is worth more than the general rule.

The two steps by name, and what the outline must look like on those two surfaces. — A named step and a named surface is something you can fix. An invisible outline is not a styling detail, it is a lost position.

A note that focus styling will be settled properly during the build itself. — Left to the build it becomes the browser default or nothing at all, on exactly the surfaces where it already failed.

Improve: Add the two steps to your tab-through notes in step 4 and describe the outline against those surfaces, then record the change in step 5.

Check again: Every surface colour in your design has an outline described against it.

Answers to revisit: indicator-spec, tab-through, improvement-made

</details>


### Record honestly

Section: practice. Stable action: step-5-brief.

Two separate lists, what you saw and what you have not established, plus the repair the Check questions asked for.

- Write which rules you could verify and which remain untested.
- State that your own checks are not testing with disabled users.
- Save the rules and the tab-through results.

**Start here:** Write the seen list first, then move anything you assumed into the second list.

**Enough:** The second list says in plain words that no test with a screen-reader user has been run.

**Established:** Something you watched happen yourself. What you expect, or what ought to be true, is not established.

**Screen reader:** Software that reads the screen aloud, used by people who cannot see it. Nothing here counts as tried until somebody who uses one every day has tried it.


### Two lists: what you saw for yourself, and what you have not established

Section: practice. Stable action: write-verified-and-not.

Write your answer for “Two lists: what you saw for yourself, and what you have not established”. Use the task instructions below to decide what to include.

**Answer:** Two lists: what you saw for yourself, and what you have not established




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Your decision for the new case, and why

Section: practice. Stable action: write-transfer-decision.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.

**New case.** Made-up case: on a hardware shop’s click-and-collect page, changing the “collect from” shop refreshes the stock list and sends focus to the top of the page. Pressing “Add to basket” opens a mini-basket that takes focus every time, even when the person is adding several items in a row.

**Task:** Decide what focus should do in each situation and what, if anything, is announced. Explain why.

<details>
<summary>Compare after writing</summary>

- Weak: Moves focus to every new piece of content so nothing is missed, or leaves both behaviours as they are.
- Adequate: Leaves focus on the shop selector and announces the new stock count; leaves focus on the item after adding and announces “Added, basket has 3 items”, opening the basket only when asked.
- Strong: As adequate, plus a visible focus indicator on every surface involved and a plain note that screen-reader behaviour stays untested until someone who uses one tries it.

</details>

**Answer:** Your decision for the new case, and why

Optional: may be left empty.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson takes one interaction where people move things about, and specifies it for a mouse, a finger and a keyboard.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Where focus goes when things change
What I am trying to do: Specify focus behaviour for four situations — opening, closing, content replacing, and an error appearing — and check that nothing your product does moves a person's place without telling them.

Key idea or terms:
Focus: The one place the keyboard is talking to. It is a person’s place on the screen, and moving it moves them.
Announce: Say what changed without moving anybody. A short line of text that a screen reader reads out and a sighted person can see.
Destination: The one named control focus lands on. “The panel” is a place; “the date field” is a destination.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Writing the rule for replaced content, after first sending focus to the results and throwing somebody out of the filters. Somebody picks a date in the filter panel. The list underneath changes from 63 classes to 12.

Activity: Before explaining the tool or method, ask me to predict what the next action will change. After I answer, explain the visible result and one common recovery step.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Each place in your product where content opens, closes, is replaced, or fails” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Each place in your product where content opens, closes, is replaced, or fails”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “Each place in your product where content opens, closes, is replaced, or fails” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Write one sentence per situation. Any missing sentence becomes whatever the framework does.
- Walk each flow watching the indicator. Every unexplained jump is an instance.

- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — The patterns for a dialogue and a disclosure, read for how focus enters and returns. Purpose: Gives worked focus behaviour for the two situations products most often get wrong. Free reading, no account. Verified 2026-09-06; no date on the pages. Guidance rather than a standard, and it covers no visual design; the indicator rules here are the course's own. Fallback: R14.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The keyboard access check. Purpose: Gives a preliminary self-check for reachability and visible focus. Free reading, no account. Verified 2026-09-06. The page states its checks are preliminary and not conformance, and running them yourself is not testing with disabled participants. Fallback: R28.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Focus rules cover open, close, replace and error**

Adequate evidence: Four written rules naming the destination in each situation.

0 — No rules.

1 — Two or three situations covered.

2 — All four covered with destinations named.

3 — As adequate, and the replace rule states what is announced instead of moving focus.

Repair: Write one sentence per situation. Any missing sentence becomes whatever the framework does. Recheck: The four rules.

**Unrequested focus movement is found and resolved**

Adequate evidence: A list of places focus moved without a person's action, each removed or justified.

0 — Not examined.

1 — Noticed without resolution.

2 — Each instance removed or justified in writing.

3 — As adequate, and one is identified as a defect for the build rather than a design intention.

Repair: Walk each flow watching the indicator. Every unexplained jump is an instance. Recheck: The list with resolutions.

**The focus indicator is specified for every surface**

Adequate evidence: A specification showing the indicator against each background colour it can appear on.

0 — Indicator unspecified or removed for aesthetics.

1 — Specified for one surface only.

2 — Specified and checked on every surface in use.

3 — As adequate, and the indicator does not rely on colour alone to be seen.

Repair: Place the indicator on each surface from your token sheet and check it is visible on all of them. Recheck: The indicator specification.

**Results distinguish what was verified from what was not**

Adequate evidence: Tab-through results with lost-position steps named, and an explicit statement about untested assistive-technology behaviour.

0 — Claims made without checks.

1 — Checks run but limits unstated.

2 — Results recorded with limits stated.

3 — As adequate, and one preliminary screen-reader observation is recorded as preliminary.

Repair: Write two lists: what you observed on your device, and what you have not established. Do not merge them. Recheck: The results and limits.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson takes one interaction where people move things about, and specifies it for a mouse, a finger and a keyboard.

**Review criteria:**

- Focus rules cover open, close, replace and error
- Unrequested focus movement is found and resolved
- The focus indicator is specified for every surface
- Results distinguish what was verified from what was not

<details>
<summary>Reading, video and deeper explanation</summary>

- Four moments deserve explicit decisions. Opening something — a panel, a dialogue — usually means focus moves into it, or the person's next tab lands somewhere unrelated. Closing means focus returns to the opener. Content replacing itself, as in a filtered list, usually means focus should stay where it is while the change is announced. An error appearing means focus moves to it, or to the first field concerned, so the person meets the problem rather than hunting for it.
- Unrequested focus movement is disorienting in the same way as an unrequested scroll. A page that steals focus to a newsletter field, or that resets focus to the top after each filter change, makes keyboard navigation feel like being pushed. The rule is simple: move focus when the person's action implies a new place to be, and leave it alone otherwise.
- Silently inserted content is invisible to anyone not looking at that part of the screen. Ten new results appearing below the fold, or an inline warning added above a field, needs either an announcement or focus, depending on urgency. This is the same obligation as the message design in m08, expressed for people who are not scanning visually.
- The cheapest test is to tab through your own component while watching only the focus indicator. If you lose track of where you are for even one step, so will someone who cannot see the whole layout at once — and if the indicator disappears entirely on some surface, that step is a hole in the interface.

[W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/).

</details>

## Lesson 8: Direct manipulation: drag, reorder and their consequences

Stable ID: m09-l08-v1. Core.

Dragging feels natural and excludes a lot of people. If you use it, it needs a keyboard route, a separate tap-or-click route that needs no dragging, and a way back.

Bring: One arranging or reordering task from your product.

Starting route: Recommended route: Draw the three drag signals on paper, try the reorder example in this lesson by keyboard and by single taps, then record your routes and what happened in the worksheet here so they are saved and reviewable. Photograph the sketches if you can; the photos stay in your own folder. Alternative route: Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work. Still try both routes in the reorder example in this lesson.

- A drag interaction with pick-up, drag and drop-target signals
- A keyboard route specified key by key and tested against the reorder example
- A single-pointer route without dragging, specified and tested against the reorder example
- Cancellation on each route, undo after a move with its wording, and a reduced-motion version
- A stated decision about drag versus scroll on touch

### Start here: in everyday words

Interaction design explains what happens when someone acts, what they see next and how they recover from a mistake. In this lesson, your first small result is: One arranging task chosen, and the keys the assigned pattern gives for a component like it.

**Words you will use**

- **Direct manipulation:** Moving the thing itself rather than telling a control to move it. Dragging a row is direct; choosing “move down” from a menu is not.
- **Drop target:** The place the thing will land. It has to be visible before the person lets go, not discovered afterwards.
- **Drag handle:** The small mark on a row saying pick me up here, and the only place a drag is allowed to start.

**Quick example.** A supplied made-up specification for reordering a shortlist. Mouse and touch: drag a row by its handle. Keyboard: Space picks the row up, the up and down arrows move it, Space puts it down and Escape puts it back. Nothing else is written.

The reader demonstrates and guides the task before asking for “The one arranging task you are designing”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Design one reordering interaction that can be completed three ways — by dragging, by keyboard, and by single taps or clicks with no dragging — with a clear drop target, cancellation, undo and a reduced-motion version, and test both alternatives against the reorder example.


### Idea 1: Give every drag two other routes to the same result: a keyboar…

Section: learn. Stable action: learn-1.

Give every drag two other routes to the same result: a keyboard route, and a single-pointer route with no dragging, such as tap Move then tap the destination.


### Idea 2: A keyboard route does not cover the second need: someone using…

Section: learn. Stable action: learn-2.

A keyboard route does not cover the second need: someone using a mouse, a stylus or one finger may click but not drag (WCAG 2.2, criterion 2.5.7).


### Show what can be picked up, what is being moved, and where it will land

Section: learn. Stable action: learn-3.

Show what can be picked up, what is being moved, and where it will land.


### Idea 4: Commit on release, let a move be cancelled part way, and keep…

Section: learn. Stable action: learn-4.

Commit on release, let a move be cancelled part way, and keep the result reversible for long enough to notice.


### Idea 5: Dragging on a phone competes with scrolling; decide which wins…

Section: learn. Stable action: learn-5.

Dragging on a phone competes with scrolling; decide which wins and when, and what still shows the move under Reduce motion.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Made-up example: the shortlist could be reordered only by dragging. Redesigned: a handle marks each draggable row, a line shows where the item will land, and the drop commits on release with a message — “Moved to position 2. Undo” — lasting several seconds. Keyboard route: focus the row, move it with Alt and the arrow keys or with the Move up and Move down buttons, escape to cancel. Single-pointer route: tap Move, then tap the gap where the row should go, or tap Cancel. On touch, dragging starts only from the handle so scrolling keeps working elsewhere; with reduced motion the row appears in its new place without sliding. Both routes were tried in a prototype; no test with a screen-reader user has been run, so they are specified but not validated with the people who depend on them.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Draw the three drag signals on paper, try the reorder example in this lesson by keyboard and by single taps, then record your routes and what happened in the worksheet here so they are saved and reviewable. Photograph the sketches if you can; the photos stay in your own folder. Alternative route: Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work. Still try both routes in the reorder example in this lesson.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Choose the task and read

Section: practice-plan. Stable action: step-1-brief.

One arranging task chosen, and the keys the assigned pattern gives for a component like it.

- Choose one arranging task in your product.
- Read the assigned pattern guidance for a comparable component's keys.
- Try the reorder example in this lesson three ways: drag, keyboard only, and single taps or clicks with no dragging.

**Start here:** Pick the smallest arranging task you have. One list of six rows is easier to specify completely than a whole board. Then try the reorder example in this lesson: drag an item, move one by keyboard, and move one with taps alone.

**Enough:** The task is one sentence, and you have the pattern’s keys written down beside it.

**Direct manipulation:** Moving the thing itself rather than telling a control to move it. Dragging a row is direct; choosing “move down” from a menu is not.

**Drop target:** The place the thing will land. It has to be visible before the person lets go, not discovered afterwards.


### The one arranging task you are designing

Section: practice-plan. Stable action: write-task-chosen.

Write your answer for “The one arranging task you are designing”. Use the task instructions below to decide what to include.

**Answer:** The one arranging task you are designing



<details>
<summary>Example</summary>

Example (made up): reordering the shortlist so the class she is most likely to book sits at the top.

</details>


### What the assigned pattern says about the keys for a comparable component

Section: practice-plan. Stable action: write-pattern-notes.

Write your answer for “What the assigned pattern says about the keys for a comparable component”. Use the task instructions below to decide what to include.

**Answer:** What the assigned pattern says about the keys for a comparable component




### Design the three signals

Section: practice-plan. Stable action: step-2-brief.

Three signals drawn and described: what can be picked up, what is held, and where it will land.

- Show what is draggable, using a handle or an equivalent affordance.
- Show the item while it is held.
- Show where it will land with a visible drop indicator.

**Start here:** Draw the three moments as three separate sketches: before the pick-up, during, and the instant before release.

**Enough:** Each of the three has its own visible signal, and you could point at it on the paper.

**Drag handle:** The small mark on a row saying pick me up here, and the only place a drag is allowed to start.

**Held state:** How the row looks while it is being carried: lifted, shadowed, or left as a faint gap in the place it came from.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Designing the drag signals for a shortlist, and having to redraw them once the keyboard route was written.

**What I drew first:** The whole row draggable, no grip. Pick it up anywhere, drop it anywhere. Nothing extra added to the row at all.

**Why it looked good:** Nothing to explain and nothing to draw. With a mouse it worked the first time I tried it on paper.

**The first crack:** On a phone that same press-and-move is a scroll. The list would have had to guess which one she meant, and guessing means being wrong sometimes.

**The second crack:** By keyboard there was nothing to land on. Picking up needs something focused, and a whole row is not a thing the keyboard can hold.

**What I drew instead:** A small grip at the left of every row. It is the drag handle for a finger, the focus target for the keyboard, and the mark that says this row moves.

**Wrong turn:** The wrong turn is designing the drag first and leaving the keyboard route for later. It is not a translation of the design; it changes what the design has to contain.

**Trade-off:** The grip adds a small mark to every row and costs a little width. It buys the only version of the row that works with a finger, a mouse and a keyboard.

**Unknown:** Still unknown: whether the grip is read as a grip or as decoration. Somebody who has never reordered a list would have to be watched trying it.


### What shows a row can be picked up at all

Section: practice-plan. Stable action: write-signal-pickup.

Write your answer for “What shows a row can be picked up at all”. Use the task instructions below to decide what to include.

**Answer:** What shows a row can be picked up at all




### What the row looks like while it is being held

Section: practice-plan. Stable action: write-signal-held.

Write your answer for “What the row looks like while it is being held”. Use the task instructions below to decide what to include.

**Answer:** What the row looks like while it is being held




### What shows where the row will land if it is released now

Section: practice-plan. Stable action: write-signal-target.

Write your answer for “What shows where the row will land if it is released now”. Use the task instructions below to decide what to include.

**Answer:** What shows where the row will land if it is released now




### Write the two other routes

Section: practice-plan. Stable action: step-3-brief.

A key table and a no-drag tap route that each reach every arrangement the drag can, with announcements, and what happened when you tried each in the reorder example.

- Specify pick up, move, drop and cancel as keys, and what is announced at each step.
- Specify a single-pointer route that needs no dragging, such as tap Move then tap the destination.
- Check both routes reach every arrangement the drag can, then complete the task each way in the reorder example and record what happened.

**Start here:** Try the reorder example first: move the third item to the top by keyboard (Alt and the arrow keys, or Move up and Move down), then again with taps alone (tap Move, then tap the destination). Write down every key and tap, then specify your own two routes.

**Enough:** Any arrangement you could reach by dragging can be reached by the keys and by taps alone, every key row has an announcement, and both test boxes say what actually happened.

**Announcement:** The short sentence read aloud when something changes, written by you rather than left to whatever the browser decides to say.

**Cancel:** Abandoning a move part-way and putting the row back where it started, usually by pressing escape.

**Screen reader:** Software that reads the screen aloud for people who cannot see it. It can only say what the design has given it words for.

**Single pointer:** One point of contact — a finger, a mouse click, a stylus — used to tap or click, never to hold and drag. Some people can do this and cannot drag.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied made-up specification for reordering a shortlist. Mouse and touch: drag a row by its handle. Keyboard: Space picks the row up, the up and down arrows move it, Space puts it down and Escape puts it back. Nothing else is written.

What is still missing before someone who can point and tap, but cannot drag, can reorder the list?

- A route that needs only taps or clicks, such as tap Move and then tap where it should go.
- Nothing is missing, because the keyboard route already serves everyone who is unable to drag.
- A modifier key so the arrow keys can jump ten rows at a time in a long shortlist.
- A confirmation dialogue after every drop, so that any mistaken move can be caught.

<details>
<summary>After your attempt</summary>

A route that needs only taps or clicks, such as tap Move and then tap where it should go. — Someone using a mouse, a stylus or one finger may be able to tap but not hold and drag, and may not use a keyboard at all. WCAG 2.2 success criterion 2.5.7 asks for this single-pointer route separately from the keyboard one.

Nothing is missing, because the keyboard route already serves everyone who is unable to drag. — This is the common mix-up. The keyboard route serves people who do not use a pointer; it does nothing for a person tapping a phone screen who cannot drag. The two needs are judged separately.

A modifier key so the arrow keys can jump ten rows at a time in a long shortlist. — A convenience for long lists, and still a keyboard feature. The person who can tap but not drag has no route at all yet.

A confirmation dialogue after every drop, so that any mistaken move can be caught. — A move is a slip, so undo suits it better than a question, and a dialogue still gives no way to move a row without dragging.

Add a tap route to your own specification, then try both routes in the reorder example and write what happened in each test box.

</details>


### Pick up, move, drop and cancel, one row per key

Section: practice-plan. Stable action: write-keyboard-table.

Write your answer for “Pick up, move, drop and cancel, one row per key”. Use the task instructions below to decide what to include.

**Answer:** Pick up, move, drop and cancel, one row per key




### What is said at each step, in the words the person would actually hear

Section: practice-plan. Stable action: write-keyboard-announce.

Write your answer for “What is said at each step, in the words the person would actually hear”. Use the task instructions below to decide what to include.

**Answer:** What is said at each step, in the words the person would actually hear




### The single-pointer route with no dragging: what she taps or clicks, in order, to move a row to any place in the list

Section: practice-plan. Stable action: write-pointer-route.

Write your answer for “The single-pointer route with no dragging: what she taps or clicks, in order, to move a row to any place in the list”. Use the task instructions below to decide what to include.

**Answer:** The single-pointer route with no dragging: what she taps or clicks, in order, to move a row to any place in the list



<details>
<summary>Example</summary>

Example (made up): tap Move on the row; the gaps between rows become targets; tap the gap where it should go; or tap Cancel to leave it where it was.

</details>


### In the reorder example, keyboard only: the keys you pressed, what moved, and anything you could not do

Section: practice-plan. Stable action: write-keyboard-test.

Move the third item to the top with the keyboard alone. Write what actually happened, not what should happen.

**Answer:** In the reorder example, keyboard only: the keys you pressed, what moved, and anything you could not do

Move the third item to the top with the keyboard alone. Write what actually happened, not what should happen.


### In the reorder example, single taps or clicks only, no dragging: what you pressed, what moved, and anything you could not do

Section: practice-plan. Stable action: write-pointer-test.

Move the same item using taps or clicks alone, such as Move then the destination, or Move up and Move down. If any step needed a drag, write that down.

**Answer:** In the reorder example, single taps or clicks only, no dragging: what you pressed, what moved, and anything you could not do

Move the same item using taps or clicks alone, such as Move then the destination, or Move up and Move down. If any step needed a drag, write that down.


### Design recovery and touch behaviour

Section: practice-plan. Stable action: step-4-brief.

Undo with a window and its exact wording, a cancel for each route, a reduced-motion version, and a rule that keeps dragging and scrolling apart on touch.

- Specify undo with a window and write the message.
- Specify how a move is cancelled on each route, and what the move looks like with Reduce motion on.
- Decide how drag and scroll are distinguished on touch, and check the decision does not break scrolling elsewhere.

**Start here:** Write the message first, in the words she reads: what moved, where it went, and how to put it back.

**Enough:** The touch rule names what starts a drag, and you have checked that ordinary scrolling on that same list still works.

**Undo window:** How many seconds the reversal stays on screen. Write the number; “a moment” gets built as whatever the developer had that day.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Writing the rule that tells a drag from a scroll on a phone, and choosing a long press that broke ordinary scrolling.

**What I wrote first:** Press and hold anywhere on a row for a second to pick it up. Nothing new drawn on the row, and the whole touch rule fitted on one line.

**Why it was tempting:** A long press is something phones already do elsewhere, so it felt free. It also let the row stay exactly as clean as it was in the sketch.

**What it did to scrolling:** A thumb rests on a list for a moment before it flicks. That rest is a hold, so the list kept picking rows up when she only meant to go past them.

**Who it failed hardest:** Somebody whose hand shakes cannot flick quickly, so most of her scrolls look like holds. The rule turned her ordinary scrolling into accidental rearranging.

**What I wrote instead:** A drag can only begin on the grip. A press anywhere else on the row scrolls, every time, with no timing involved. Then I walked the list top to bottom to check plain scrolling still worked.

**What the message ended up saying:** “Item moved. Undo” became “Sunrise Flow moved to third. Undo”, staying ten seconds, because she has to know which row moved and where before she can decide anything.

**Wrong turn:** The wrong turn is buying the drag with time instead of with space. A timed gesture costs no pixels, so it looks free, and it is paid for by every scroll that now has to be measured before it is believed.

**Trade-off:** The grip puts a mark on every row and makes the drag slower to start, because her thumb has to find one small place. Scrolling stops being a gamble, and scrolling is the thing she does far more often.

**Unknown:** Still unknown: whether the grip is big enough for a thumb on a small screen, and what a held row does when it reaches the bottom edge and the list has to scroll underneath it.


### How long undo lasts and the exact message shown after a move

Section: practice-plan. Stable action: write-undo-spec.

Write your answer for “How long undo lasts and the exact message shown after a move”. Use the task instructions below to decide what to include.

**Answer:** How long undo lasts and the exact message shown after a move




### How a move is cancelled part way on each route: drag, keyboard and single-pointer

Section: practice-plan. Stable action: write-cancel-routes.

Write your answer for “How a move is cancelled part way on each route: drag, keyboard and single-pointer”. Use the task instructions below to decide what to include.

**Answer:** How a move is cancelled part way on each route: drag, keyboard and single-pointer



<details>
<summary>Example</summary>

Example (made up): drag, release outside the list; keyboard, Escape; tap route, tap Cancel or tap Move again. The row goes back to where it started.

</details>


### What a move looks like with Reduce motion on, and what still shows the new position

Section: practice-plan. Stable action: write-reduced-move.

Write your answer for “What a move looks like with Reduce motion on, and what still shows the new position”. Use the task instructions below to decide what to include.

**Answer:** What a move looks like with Reduce motion on, and what still shows the new position




### How a finger dragging is told apart from a finger scrolling

Section: practice-plan. Stable action: write-touch-rule.

Write your answer for “How a finger dragging is told apart from a finger scrolling”. Use the task instructions below to decide what to include.

**Answer:** How a finger dragging is told apart from a finger scrolling




### Where you checked that scrolling the same list still works

Section: practice-plan. Stable action: write-scroll-check.

Write your answer for “Where you checked that scrolling the same list still works”. Use the task instructions below to decide what to include.

**Answer:** Where you checked that scrolling the same list still works




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your reorder works by dragging and by keyboard. A colleague says the keyboard route already covers anyone who cannot drag. What is missing?

- A tap-or-click route with no drag; some people can point but can neither drag nor use keys.
- Nothing that matters, since the keyboard route already reaches every arrangement the drag does.
- Only a short tutorial, so people who cannot drag learn that the keyboard route exists.

<details>
<summary>After your attempt</summary>

A tap-or-click route with no drag; some people can point but can neither drag nor use keys. — The two needs are different. A keyboard route serves people who do not use a pointer; a single-pointer route — tap Move, then tap the destination — serves people who can tap or click but cannot hold and drag. Designing both early also decides what each row must show.

Nothing that matters, since the keyboard route already reaches every arrangement the drag does. — Reaching every arrangement is necessary for each route, and it does not make one route serve the other group. A person tapping with one finger who cannot drag has no keyboard in hand.

Only a short tutorial, so people who cannot drag learn that the keyboard route exists. — A tutorial explains a route; it does not create one. The person who can tap but cannot drag still has nothing to tap.

Improve: If your pointer-route in step 3 is empty or needs a drag anywhere, write the taps that move a row to any position, try them in the reorder example, record what happened in pointer-test, then record the change in step 5.

Check again: The worksheet has a keyboard route and a separate no-drag tap route, and both test boxes say what happened in the reorder example.

Answers to revisit: keyboard-table, keyboard-announce, pointer-route, keyboard-test, pointer-test, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A row is dropped in the wrong place. Confirmation before every drop, or undo after it?

- Undo, with a stated window and a message naming what moved and where.
- Neither is needed, because she can simply drag the row back where it was.
- A confirmation before the drop, because reordering changes her saved list.

<details>
<summary>After your attempt</summary>

Undo, with a stated window and a message naming what moved and where. — A misplaced drop is a slip, and slips want a way back rather than a question. A dialogue on every drop punishes everybody who aimed correctly.

Neither is needed, because she can simply drag the row back where it was. — Dragging back assumes she noticed, remembers the old position, and can drag at all. Recovery has to be offered rather than left to her memory.

A confirmation before the drop, because reordering changes her saved list. — Asking her to confirm the thing she has just done with her own hand is a strange conversation. It also makes ten small moves into ten small arguments.

Improve: Write the undo window and the exact message into your undo box in step 4, then record the change in step 5.

Check again: The undo specification gives a number of seconds and the words the person reads.

Answers to revisit: undo-spec, cancel-routes, reduced-move, touch-rule, scroll-check, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

On a phone, your whole row is draggable. What breaks?

- Very little, because a modern phone can usually tell a slow drag from a quick scroll.
- Scrolling and dragging become one gesture, so the list must guess which she meant.
- Only the look of the row suffers, since it appears the same in either state.

<details>
<summary>After your attempt</summary>

Very little, because a modern phone can usually tell a slow drag from a quick scroll. — Sometimes it can, and the person who moves slowly because her hand shakes is exactly the one it gets wrong.

Scrolling and dragging become one gesture, so the list must guess which she meant. — A grip, or an explicit Move mode, tells the two apart deliberately; a timed long press does not, as the step 4 example showed. Without one, every attempt to scroll the list risks rearranging it.

Only the look of the row suffers, since it appears the same in either state. — The row looking the same is the problem. Nothing on it says which of the two things a press is about to do.

Improve: Fill the touch rule in step 4 with what has to be touched or held to begin a drag, then record what you changed in step 5.

Check again: The rule names a grip or a mode, and the scrolling check says ordinary scrolling still works.

Answers to revisit: undo-spec, cancel-routes, reduced-move, touch-rule, scroll-check, improvement-made

</details>


### Record the cost

Section: practice. Stable action: step-5-brief.

Who cannot use the drag route, what they use instead, what is untested, and the repair the Check questions asked for.

- Write who cannot use the drag route and what they use instead.
- State what remains untested, including any assistive-technology behaviour.
- Save the specification with the key table.

**Start here:** Describe three situations, not real people, in which dragging fails: a hand that shakes, a cracked screen, keyboard-only use. Write which of your two routes each situation uses instead.

**Enough:** The untested list says plainly that no test with a screen-reader user has been run.

**Equivalent route:** The other way of finishing the same task, for somebody who cannot drag. It has to be able to reach every arrangement the drag reaches.

**Untested:** Written against anything you have not watched somebody actually do. It is a result, and it is not a blank.


### Who cannot use the drag route, what they use instead, and what remains untested

Section: practice. Stable action: write-who-cannot.

Describe situations, not real people, and give no health details about anyone you know. Say plainly that no test with a screen-reader user has been run, if none has.

**Answer:** Who cannot use the drag route, what they use instead, and what remains untested

Describe situations, not real people, and give no health details about anyone you know. Say plainly that no test with a screen-reader user has been run, if none has.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Your decision for the new case, and why

Section: practice. Stable action: write-transfer-decision.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.

**New case.** Made-up case: a music app lets people reorder songs in a playlist only by dragging a row. The team has added a keyboard route, focusing a song and pressing Alt with the up or down arrow, and now says the playlist is usable by anyone who cannot drag.

**Task:** Decide whether that claim holds and what you would add, and explain why.

<details>
<summary>Compare after writing</summary>

- Weak: Agrees that the keyboard route covers everyone who cannot drag, so nothing more is needed.
- Adequate: Says the claim fails: some people can tap or click but cannot drag or use keys, so a single-pointer route is needed too, such as tap Move then tap the destination, or Move up and Move down buttons.
- Strong: As adequate, plus a cancel on each route, an undo that names the new position, what moves under reduced motion, and a test of both routes on the same list before claiming anything.

</details>

**Answer:** Your decision for the new case, and why

Optional: may be left empty.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson turns to scrolling, sticky elements and what a long list costs on a small screen.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Direct manipulation: drag, reorder and their consequences
What I am trying to do: Design one reordering interaction that can be completed three ways — by dragging, by keyboard, and by single taps or clicks with no dragging — with a clear drop target, cancellation, undo and a reduced-motion version, and test both alternatives against the reorder example.

Key idea or terms:
Direct manipulation: Moving the thing itself rather than telling a control to move it. Dragging a row is direct; choosing “move down” from a menu is not.
Drop target: The place the thing will land. It has to be visible before the person lets go, not discovered afterwards.
Drag handle: The small mark on a row saying pick me up here, and the only place a drag is allowed to start.

Supplied practice material (fictional or labelled practice, not my research):
A supplied made-up specification for reordering a shortlist. Mouse and touch: drag a row by its handle. Keyboard: Space picks the row up, the up and down arrows move it, Space puts it down and Escape puts it back. Nothing else is written.

Activity: Before explaining the tool or method, ask me to predict what the next action will change. After I answer, explain the visible result and one common recovery step.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “The one arranging task you are designing” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “The one arranging task you are designing”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try a supplied example” question. Choose an answer, read the explanation, then return to “The one arranging task you are designing” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Draw the three moments separately: before pick-up, during, and just before release. Each needs its own signal.
- Write the keys, then move the third item to the top by keyboard alone in the reorder example. If any arrangement is unreachable, the route is incomplete.

- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — A comparable pattern, read for how selection, movement and cancellation are expressed as keys. Purpose: Supplies conventions for the keyboard equivalent so it matches what people expect. Free reading, no account. Verified 2026-09-06; no date on the pages. It offers no drag-and-drop pattern of its own, so the keyboard route here is adapted rather than quoted. Fallback: R14.
- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — Slips, undo and recovery. Purpose: Frames an accidental move as a slip needing recovery rather than a confirmation. Free reading, no account. Verified 2026-09-06. Prevention techniques are options; the touch drag rules are this lesson's own. Fallback: R02.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**All three drag signals are specified**

Adequate evidence: Specifications for the draggable affordance, the held state and the drop indicator.

0 — Only the held state is designed.

1 — Two of the three.

2 — All three specified.

3 — As adequate, and the drop indicator shows the resulting order rather than merely a target.

Repair: Draw the three moments separately: before pick-up, during, and just before release. Each needs its own signal. Recheck: The three specifications.

**A keyboard route completes the same task and was tested**

Adequate evidence: A key table covering pick up, move, drop and cancel, achieving the same result as dragging, plus what happened when you completed the task by keyboard alone in the reorder example.

0 — No keyboard route.

1 — A reduced route that cannot reach every position, or a route never tried.

2 — A full route specified key by key and completed by keyboard alone in the reorder example.

3 — As adequate, and each step states what is announced for a screen-reader user.

Repair: Write the keys, then move the third item to the top by keyboard alone in the reorder example. If any arrangement is unreachable, the route is incomplete. Recheck: The key table and the keyboard test note.

**A single-pointer route without dragging completes the same task and was tested**

Adequate evidence: A tap-or-click route, such as tap Move then tap the destination, or Move up and Move down buttons, that reaches every arrangement, plus what happened when you completed the task that way in the reorder example.

0 — No route other than dragging for pointer users, or the keyboard route offered as the only alternative.

1 — A single-pointer route named but unable to reach every position, or never tried.

2 — A full single-pointer route specified and completed with taps or clicks alone, no dragging, in the reorder example.

3 — As adequate, and the route has its own cancel and shows which item is waiting to be placed.

Repair: Write the taps a person makes to move the third item to the top without dragging, then do exactly that in the reorder example. If any arrangement needs a drag, the route is incomplete. Recheck: The single-pointer route and its test note.

**A move can be cancelled, reversed and shown with reduced motion**

Adequate evidence: A cancel on each route, undo with a window and a message naming what changed, and a reduced-motion version where the item arrives without sliding.

0 — Moves persist silently and cannot be cancelled.

1 — Undo mentioned without wording or window, or no cancel.

2 — A cancel on each route, undo with a window and its message, and a reduced-motion version.

3 — As adequate, and the message says the new position rather than only offering undo.

Repair: Write what happens when a person changes her mind mid-move on each route, the message she sees after a move, and what the move looks like with Reduce motion on. Recheck: The cancel, undo and reduced-motion specification.

**The drag-versus-scroll decision is explicit**

Adequate evidence: A written rule for how touch distinguishes dragging from scrolling, checked against other scrolling areas.

0 — Not decided.

1 — Decided but untested against normal scrolling.

2 — A rule stated and checked so scrolling still works elsewhere.

3 — As adequate, and the rule was tried on a real phone rather than reasoned about.

Repair: Choose a handle or a mode, then try scrolling the same list on a phone to confirm it still works. Recheck: The touch rule and the check.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson turns to scrolling, sticky elements and what a long list costs on a small screen.

**Review criteria:**

- All three drag signals are specified
- A keyboard route completes the same task and was tested
- A single-pointer route without dragging completes the same task and was tested
- A move can be cancelled, reversed and shown with reduced motion
- The drag-versus-scroll decision is explicit

<details>
<summary>Reading, video and deeper explanation</summary>

- Drag and drop is a genuine improvement for arranging things and a genuine barrier for anyone with limited dexterity, a tremor, a touchpad they find awkward, or a screen reader. That does not make it wrong; it makes other routes mandatory, and there are two of them. A keyboard route — focus an item, then arrow keys, or Move up and Move down — serves people who do not use a pointer. A single-pointer route — tap Move, then tap where it should go, or Move up and Move down buttons — serves people who can point and click but cannot hold and drag. WCAG 2.2 success criterion 2.5.7, Dragging Movements, judges these separately: a keyboard equivalent alone does not meet the single-pointer requirement.
- Three signals make dragging legible: what is draggable, what is currently held, and where it will go. Products routinely provide the second and neglect the first and third, so people learn by accident that a row can be moved, and then guess where it will land. A visible drop indicator — a line, a gap, a highlighted target — is what turns a guess into a decision.
- Commit on release, let a move be cancelled before it lands — escape for the keyboard, a Cancel or a second tap for the pointer route — and offer a way back afterwards. An accidental reorder is a slip, and slips need recovery rather than confirmation; a brief undo is the right instrument, and the message that offers it should say what changed. Reordering that silently persists is unrecoverable for the person who did not notice they had done it.
- On touch screens, dragging and scrolling compete for the same gesture, and the resolution has to be deliberate: a dedicated handle, or drag only in a Move mode the person turned on. A timed long press looks free and is not, because every thumb resting before a flick becomes a possible drag. Choosing nothing means the product will feel unpredictable — sometimes scrolling, sometimes dragging — which is worse than either.
- Reduced motion applies here too. With the setting on, the row should arrive in its new place without sliding through the list, while the new position is still shown on screen and stated in the message.

[W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/).

</details>

## Lesson 9: Scrolling, sticky elements and long lists

Stable ID: m09-l09-v1. Core.

Scrolling is the most-used interaction in your product and usually the least designed.

Bring: Your browse loop and list components.

Starting route: Recommended route: Draw the phone-sized viewport with every fixed element measured on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder. Alternative route: Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

- A decision for each sticky element with its height cost
- A list ending: a count, a load-more control, or a stated end
- Scroll position restoration specified for the browse loop
- A rule preventing content moving under a finger

### Start here: in everyday words

Interaction design explains what happens when someone acts, what they see next and how they recover from a mistake. In this lesson, your first small result is: A measured height for every element you want fixed, and the total written as a share of the viewport.

**Words you will use**

- **Sticky:** An element that stays put while the rest of the page scrolls under it. It holds its space for the whole session.
- **Viewport:** The part of the page a person can see at once. On a phone it is small, and everything fixed comes out of it.
- **Fixed height:** The vertical space your unmoving elements take up together, before a single row of content appears.

**Quick example.** A supplied made-up design. The class list loads twenty more rows on its own every time the person nears the bottom, for as long as there are results. The footer holds the contact link, the refund policy and the accessibility statement.

The reader demonstrates and guides the task before asking for “The viewport height you are measuring against, at phone size”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Decide what stays fixed while a person scrolls, how a long list ends, and how someone returns to their place after leaving and coming back.


### Idea 1: Anything sticky costs screen height permanently; a phone has v…

Section: learn. Stable action: learn-1.

Anything sticky costs screen height permanently; a phone has very little to spend.


### Idea 2: Keep sticky only what people need while scrolling: usually pos…

Section: learn. Stable action: learn-2.

Keep sticky only what people need while scrolling: usually position and the primary action.


### Idea 3: A long list needs an end, a count, or a clear way to load more…

Section: learn. Stable action: learn-3.

A long list needs an end, a count, or a clear way to load more with the position kept.


### Idea 4: Restore scroll position when someone returns; losing it makes…

Section: learn. Stable action: learn-4.

Restore scroll position when someone returns; losing it makes comparison expensive.


### Never move content under a finger that is about to tap

Section: learn. Stable action: learn-5.

Never move content under a finger that is about to tap.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Made-up example: the class list had a sticky header with a logo, a sticky filter bar and a sticky book button — 190 pixels of a 640-pixel viewport. Rebuilt: the logo header scrolls away and returns on scroll up, the filter summary stays because people were observed checking it, and the book button appears only on the detail view where it belongs. The list loads twenty at a time with a count — “Showing 20 of 63” — and a load-more control, so the footer stays reachable. Returning from a detail view restores the row and the filters. New results are appended below the fold only.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Draw the phone-sized viewport with every fixed element measured on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder. Alternative route: Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Measure the tax

Section: practice-plan. Stable action: step-1-brief.

A measured height for every element you want fixed, and the total written as a share of the viewport.

- List every element you intend to keep fixed while scrolling.
- Measure each one's height at phone size and total them.
- Express the total as a share of the viewport.

**Start here:** Cut a window the size of a phone screen out of a sheet of paper and hold it over your drawing. Measure whatever never moves.

**Enough:** The total is a number you measured, not one you estimated.

**Sticky:** An element that stays put while the rest of the page scrolls under it. It holds its space for the whole session.

**Viewport:** The part of the page a person can see at once. On a phone it is small, and everything fixed comes out of it.


### The viewport height you are measuring against, at phone size

Section: practice-plan. Stable action: write-viewport-height.

A common phone leaves you roughly 640 points of usable height. Use a real number and say where it came from.

**Answer:** The viewport height you are measuring against, at phone size

A common phone leaves you roughly 640 points of usable height. Use a real number and say where it came from.


### Every element you intend to keep fixed while scrolling, with its measured height

Section: practice-plan. Stable action: write-sticky-list.

Write your answer for “Every element you intend to keep fixed while scrolling, with its measured height”. Use the task instructions below to decide what to include.

**Answer:** Every element you intend to keep fixed while scrolling, with its measured height



<details>
<summary>Example</summary>

Example (made up): logo header 56, filter bar 64, book button 70. Measured on paper at phone size with a ruler.

</details>


### The total fixed height, and what share of the viewport it takes

Section: practice-plan. Stable action: write-sticky-share.

Write your answer for “The total fixed height, and what share of the viewport it takes”. Use the task instructions below to decide what to include.

**Answer:** The total fixed height, and what share of the viewport it takes




### Justify or drop each

Section: practice-plan. Stable action: step-2-brief.

A decision for each fixed element, based on what the person does with it while scrolling, and a new total.

- For each sticky element, write what the person needs it for while scrolling.
- Drop anything that fails, or make it return on scroll up instead.
- Re-measure the remaining total.

**Start here:** Take the tallest element first and try to write its use during scrolling in one sentence.

**Enough:** Every element has either a stated use during scrolling or a decision to drop it.

**Fixed height:** The vertical space your unmoving elements take up together, before a single row of content appears.

**Scrolling away:** An element leaving the screen with the rest of the page, usually returning when the person scrolls back up.

**Filter summary:** A short line saying what the list is currently narrowed down to, such as “Tuesdays, beginners”.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Keeping three things fixed on a phone, then measuring what they cost.

**What I drew first:** A logo header, a filter bar and a book button, all fixed. Everything important, always available. It felt generous.

**What the ruler said:** 190 points of a 640 point screen gone before a single class row appeared. Nearly 30 per cent of what she can see.

**The test I applied:** For each one: what is she doing with this while she scrolls? The logo, nothing. The book button belongs to a class she has not chosen yet.

**What I changed:** The logo header scrolls away and comes back when she scrolls up. The book button moved to the detail view. The filter summary stayed.

**What that gave back:** 126 points, which is about two more class rows visible at every moment of every scroll.

**Wrong turn:** The wrong turn is judging each fixed element on its own. Each one sounds reasonable alone. The cost only appears when you add the heights together.

**Trade-off:** A header that scrolls away means one extra flick upward when someone wants the menu. You are trading a rare action against space every person loses on every screen.

**Unknown:** Still unknown: whether people actually use the filter summary while scrolling. That is something to watch, and nobody has watched it yet.


### Element 1 · what the person needs it for while scrolling, and your decision

Section: practice-plan. Stable action: write-keep-1.

Write your answer for “Element 1 · what the person needs it for while scrolling, and your decision”. Use the task instructions below to decide what to include.

**Answer:** Element 1 · what the person needs it for while scrolling, and your decision



<details>
<summary>Example</summary>

Example (made up): filter summary. Needed because people check what they filtered by while scrolling, so it stays. Logo header. Needed for nothing while scrolling, so it scrolls away and returns when she scrolls up.

</details>


### Element 2 · what the person needs it for while scrolling, and your decision

Section: practice-plan. Stable action: write-keep-2.

Write your answer for “Element 2 · what the person needs it for while scrolling, and your decision”. Use the task instructions below to decide what to include.

**Answer:** Element 2 · what the person needs it for while scrolling, and your decision




### Element 3 · what the person needs it for while scrolling, and your decision

Section: practice-plan. Stable action: write-keep-3.

One row per fixed element; leave the rest empty.

**Answer:** Element 3 · what the person needs it for while scrolling, and your decision

Optional: may be left empty.

One row per fixed element; leave the rest empty.


### Element 4 · what the person needs it for while scrolling, and your decision

Section: practice-plan. Stable action: write-keep-4.

One row per fixed element; leave the rest empty.

**Answer:** Element 4 · what the person needs it for while scrolling, and your decision

Optional: may be left empty.

One row per fixed element; leave the rest empty.


### The new total fixed height after your decisions

Section: practice-plan. Stable action: write-new-total.

Write your answer for “The new total fixed height after your decisions”. Use the task instructions below to decide what to include.

**Answer:** The new total fixed height after your decisions




### Design the list ending

Section: practice-plan. Stable action: step-3-brief.

A chosen way for the list to end, the total shown in words, and a footer that can still be reached.

- Choose paging, load-more or infinite loading and state why.
- Show how many items exist in total.
- Check the footer remains reachable.

**Start here:** Decide what a person should see at the very bottom, then work backwards to how the rows arrive.

**Enough:** You can say how many items exist and how a person reaches the end.

**Continuous loading:** More rows arrive on their own as you near the bottom. Often called infinite scroll. The bottom of the page never quite arrives.

**Footer:** The strip at the very end of a page. Contact details, refund policies and accessibility statements usually live there.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied made-up design. The class list loads twenty more rows on its own every time the person nears the bottom, for as long as there are results. The footer holds the contact link, the refund policy and the accessibility statement.

What has this design done, and what would you change first?

- It buried the policies, so move them above the list where every person will see them first.
- It slowed the list down, because twenty rows at a time is heavy for a phone; load ten at a time instead.
- It removed the end of the page, so the footer is out of reach; swap the loading for a load-more control.
- It has done nothing wrong, because those same links can surely be reached from the menu on every page.

<details>
<summary>After your attempt</summary>

It buried the policies, so move them above the list where every person will see them first. — That puts rarely wanted content in front of the content people came for. The footer is the right place; it just has to be reachable.

It slowed the list down, because twenty rows at a time is heavy for a phone; load ten at a time instead. — Weight is worth watching and it is not the failure here. Even a fast loader still pushes the footer out of reach every time.

It removed the end of the page, so the footer is out of reach; swap the loading for a load-more control. — The footer sits at the end, and continuous loading means the end keeps moving away. A load-more control gives the page a bottom again.

It has done nothing wrong, because those same links can surely be reached from the menu on every page. — Nothing in the design says the links are in the menu. If they live only in the footer today, they are unreachable today; a second route is a good later repair, not a reason to leave the footer out of reach.

Try to reach the footer on your own design, or on a comparable page, and write down what happened.

</details>


### Paging, a load-more control or continuous loading, and why you chose it

Section: practice-plan. Stable action: write-list-ending.

Say what happens at the bottom, and whether the footer can still be reached.

**Answer:** Paging, a load-more control or continuous loading, and why you chose it

Say what happens at the bottom, and whether the footer can still be reached.


### Where the total number of items appears, in the exact words you would use

Section: practice-plan. Stable action: write-total-shown.

Write your answer for “Where the total number of items appears, in the exact words you would use”. Use the task instructions below to decide what to include.

**Answer:** Where the total number of items appears, in the exact words you would use



<details>
<summary>Example</summary>

Example (made up): “Showing 20 of 63 classes”, sitting above the first row.

</details>


### Specify return and insertion

Section: practice-plan. Stable action: step-4-brief.

What is restored when someone comes back, and a rule for where new content is allowed to appear.

- Specify that returning from a detail view restores position and filters.
- State where new content is inserted and that nothing moves under a finger.
- Reserve space for content that is loading.

**Start here:** Walk the loop yourself: list, detail, back. Write down everything you lost on the way back.

**Enough:** The insertion rule would settle a case you have not met yet.

**Scroll position:** How far down a list a person had travelled before she left it.

**Insertion rule:** A sentence saying where new or still-arriving content is allowed to appear, so nothing lands above what somebody is reading.

**Reserved space:** A blank area held open at the right size for something still loading, so the page does not jump when it arrives.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Writing “she comes back to the same place” as if it were a specification, then finding that the same place had moved.

**What I wrote:** One line: coming back from a class detail returns her to the same place in the list. It read like a finished decision, so I moved on.

**The word I had not settled:** Same place can mean the same distance down the page, or the row she tapped. A page remembers distance. She remembers the row.

**Walking it on paper:** I slid my paper window down the drawing, added two new classes at the top the way a live list would, and came back. Same distance down, four rows adrift.

**What I changed:** She returns to the row she tapped, lightly marked so she can see where she is. Her filters and anything she typed come back with it, each one named separately.

**The rule that had to follow:** New rows may only appear above the first row when she is already at the top. Otherwise they wait behind a small “3 new classes” bar she can tap.

**Wrong turn:** The wrong turn is writing a restore in one clause and believing it is specified. It reads complete because you know which meaning you had in mind, and the two meanings give different answers.

**Trade-off:** Holding new rows back means she can sit reading a list that is quietly out of date, and may tap a class that has just filled. You are choosing a page that stays still over a page that stays current.

**Unknown:** Still unknown: how long an absence should be before restoring her old position stops being kind. Four hours, a day, a week. Nothing here settles that.


### What is restored when someone returns from a detail view

Section: practice-plan. Stable action: write-restore-spec.

Name each thing separately: the row, the scroll position, the filters, anything typed.

**Answer:** What is restored when someone returns from a detail view

Name each thing separately: the row, the scroll position, the filters, anything typed.


### Where new or still-loading content is allowed to appear, written as a rule

Section: practice-plan. Stable action: write-insertion-rule.

Include reserved space for anything still loading, so the page does not jump while someone is reading it.

**Answer:** Where new or still-loading content is allowed to appear, written as a rule

Include reserved space for anything still loading, so the page does not jump while someone is reading it.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A fixed header, a fixed filter bar and a fixed action button each look justified on their own. What is wrong with judging them one at a time?

- The real problem is that fixed elements are slow for an older phone to redraw.
- Very little, provided each of the three is genuinely useful to the person scrolling.
- They share one small screen: added together they can take nearly a third of it, permanently.

<details>
<summary>After your attempt</summary>

The real problem is that fixed elements are slow for an older phone to redraw. — Drawing speed is not the issue. The cost is height, and it is paid on every screen for the whole session.

Very little, provided each of the three is genuinely useful to the person scrolling. — Usefulness is not the whole test on a phone. Three useful things can still leave too little room for the content people came for.

They share one small screen: added together they can take nearly a third of it, permanently. — The cost is a total, not a series of separate small costs. Adding the heights up is what makes the trade visible at all.

Improve: If your sticky-share in step 1 is above a quarter of the viewport, go back to step 2 and drop or demote one element, then record the change in step 5.

Check again: The new total in step 2 is smaller, and every element left has a stated use during scrolling.

Answers to revisit: viewport-height, sticky-list, sticky-share, keep-1, keep-2, keep-3, keep-4, new-total, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your list loads more rows on its own as the person nears the bottom. Where does the refund policy live?

- In the footer, which is fine because policies are rarely read.
- Nowhere she can reach, because the bottom keeps moving away from her.
- In the footer, which she can reach by scrolling faster.

<details>
<summary>After your attempt</summary>

In the footer, which is fine because policies are rarely read. — Rarely read is not never needed. The person hunting for a refund policy is exactly the person you have blocked.

Nowhere she can reach, because the bottom keeps moving away from her. — Continuous loading removes the end of the page, and the footer sits at the end. Anything living only there becomes unreachable.

In the footer, which she can reach by scrolling faster. — Scrolling faster loads rows faster. Speed does not help when new content arrives ahead of you.

Improve: Look at your list-ending in step 3. If it loads continuously, change it to a load-more control or give the footer links a second route, then record it in step 5.

Check again: You can reach the footer from the bottom of the list without fighting the loader.

Answers to revisit: list-ending, total-shown, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A person taps a class, reads it, and comes back to the list. What should she find?

- The top of the list, freshly loaded, so nothing is out of date.
- The same row in the same place, with her filters still applied.
- The same row, with any new results inserted above it.

<details>
<summary>After your attempt</summary>

The top of the list, freshly loaded, so nothing is out of date. — Freshness costs her the place she was keeping. A quiet marker saying newer results exist serves both without moving her.

The same row in the same place, with her filters still applied. — Returning to the top with the filters cleared makes comparing two classes expensive. Keeping her place is what makes browsing possible at all.

The same row, with any new results inserted above it. — Inserting above shifts everything down under her finger. New results can wait below, or behind a control she chooses to press.

Improve: If your restore-spec in step 4 does not name the scroll position and the filters, add them both, then record the change in step 5.

Check again: The restoration list names the row, the position and the filters separately.

Answers to revisit: restore-spec, insertion-rule, improvement-made

</details>


### Test on a phone

Section: practice. Stable action: step-5-brief.

What a real phone showed you, how much content was left, and the repair the Check questions asked for.

- Scroll your own design or a comparable page on a real phone.
- Record how much content is visible under the sticky elements.
- Save the decisions with their measurements.

**Start here:** Open any long list on your own phone and count how many rows you can see without scrolling.

**Enough:** You wrote what you saw on the device, not what your drawing implies.

**Comparable page:** Somebody else’s long list that works like yours, used on a real phone when your own design only exists on paper.

**Repair:** The one change you make after the Check questions, written down together with the reason for it.


### What you saw scrolling your own design, or a comparable page, on a real phone

Section: practice. Stable action: write-phone-test.

Write your answer for “What you saw scrolling your own design, or a comparable page, on a real phone”. Use the task instructions below to decide what to include.

**Answer:** What you saw scrolling your own design, or a comparable page, on a real phone




### How much content was visible below the fixed elements

Section: practice. Stable action: write-content-visible.

Write your answer for “How much content was visible below the fixed elements”. Use the task instructions below to decide what to include.

**Answer:** How much content was visible below the fixed elements




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Your decision for the new case, and why

Section: practice. Stable action: write-transfer-decision.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.

**New case.** Made-up case: a campsite booking list on a phone with 640 points of usable height keeps three things fixed: a 60-point header, a 48-point map toggle and a 72-point “Book” bar. More pitches load on their own as you near the bottom, and returning from a pitch’s page puts you back at the top.

**Task:** Decide what stays fixed, how the list should end and what returning should restore. Explain why, with the numbers.

<details>
<summary>Compare after writing</summary>

- Weak: Keeps all three fixed because each is useful, and keeps endless loading and the reset to the top.
- Adequate: Totals 180 of 640 points (about 28%), lets the header scroll away and return, moves Book to the pitch page, uses load-more with a count so the footer is reachable, and restores the pitch and filters on return.
- Strong: As adequate, plus a rule that new pitches never push the list down under a finger, reserved space while loading, and a check on a real phone of how many rows stay visible.

</details>

**Answer:** Your decision for the new case, and why

Optional: may be left empty.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson takes one editable value and removes its save button.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Scrolling, sticky elements and long lists
What I am trying to do: Decide what stays fixed while a person scrolls, how a long list ends, and how someone returns to their place after leaving and coming back.

Key idea or terms:
Sticky: An element that stays put while the rest of the page scrolls under it. It holds its space for the whole session.
Viewport: The part of the page a person can see at once. On a phone it is small, and everything fixed comes out of it.
Fixed height: The vertical space your unmoving elements take up together, before a single row of content appears.

Supplied practice material (fictional or labelled practice, not my research):
A supplied made-up design. The class list loads twenty more rows on its own every time the person nears the bottom, for as long as there are results. The footer holds the contact link, the refund policy and the accessibility statement.

Activity: Before explaining the tool or method, ask me to predict what the next action will change. After I answer, explain the visible result and one common recovery step.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “The viewport height you are measuring against, at phone size” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “The viewport height you are measuring against, at phone size”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try a supplied example” question. Choose an answer, read the explanation, then return to “The viewport height you are measuring against, at phone size” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Measure the total sticky height at phone size and write it as a percentage of the viewport. Then justify each element or remove it.
- Add the total to the list header and check you can reach the footer without fighting the loader.

- R31: [Laws of UX](https://lawsofux.com/) — The assigned pages only: fittss-law, law-of-proximity and cognitive-load. Purpose: Explains why moving targets and crowded viewports cost accuracy and effort. Free reading, no account. Verified 2026-09-06. The site publishes no caveats; the sticky-height measurement in this lesson is the evidence, not the law. A printed poster is sold and also offered free; no purchase is required. Fallback: R02.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 1, visibility of system status, and heuristic 3, user control and freedom. Purpose: Frames position, totals and return behaviour as questions of control rather than convenience. Free reading, no account. Verified 2026-09-06. It gives no guidance on scrolling or sticky layout; those rules are the course's own. Fallback: R11.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Sticky elements are justified and their cost measured**

Adequate evidence: A list of sticky elements with measured heights, a viewport share, and a use-while-scrolling justification each.

0 — Sticky elements chosen without cost or justification.

1 — Justified in general terms with no measurements.

2 — Measured and justified individually.

3 — As adequate, and at least one was dropped or made to return on scroll up.

Repair: Measure the total sticky height at phone size and write it as a percentage of the viewport. Then justify each element or remove it. Recheck: The measurements and justifications.

**The list has a stated ending and a total**

Adequate evidence: A chosen loading approach with a visible total and a reachable footer.

0 — Infinite loading with no count or reachable end.

1 — A count without a way to reach the end.

2 — Loading approach chosen with a total shown and the footer reachable.

3 — As adequate, and the choice is justified by the comparison behaviour observed in m05.

Repair: Add the total to the list header and check you can reach the footer without fighting the loader. Recheck: The list specification.

**Position and filters are restored on return**

Adequate evidence: A specification stating what is restored when a person returns from a detail view.

0 — Return resets to the top.

1 — Filters kept, position lost.

2 — Both restored, with the behaviour stated.

3 — As adequate, and the specification covers returning later or on another device.

Repair: Walk the browse loop and write down everything lost on return. Specify each as preserved. Recheck: The restoration specification.

**Nothing moves under a finger about to tap**

Adequate evidence: A rule about where new content is inserted and reserved space for loading content.

0 — Content inserted anywhere as it arrives.

1 — A rule stated but no space reserved.

2 — Insertion rule and reserved space both specified.

3 — As adequate, and the rule was checked on a throttled connection where insertion is visible.

Repair: Specify that content loads into reserved space and that anything arriving above the viewport requires an explicit request. Recheck: The insertion rule.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson takes one editable value and removes its save button.

**Review criteria:**

- Sticky elements are justified and their cost measured
- The list has a stated ending and a total
- Position and filters are restored on return
- Nothing moves under a finger about to tap

<details>
<summary>Reading, video and deeper explanation</summary>

- Sticky elements are a permanent tax on the visible area. On a 640-pixel-tall phone viewport, a sticky header and a sticky action bar can take a quarter of the screen before any content appears, which means every scroll shows less and the person scrolls more. The test is whether the element is needed while scrolling — a filter summary or a running total usually is; a logo never is.
- Endless lists trade a clear ending for continuous browsing, and the cost falls on people who want to know how much there is, want to reach the footer, or want to come back to where they were. If you use infinite loading, provide a count, keep the position when the person returns, and make sure the footer is still reachable. A “load more” control is often the better trade for a product where people are comparing.
- Restoring position is the same requirement the browse loop had in m07, met here in the scroll layer: coming back from a detail view should return the person to the row they left, not the top. Products lose comparison behaviour here quietly, because nobody complains — they just stop comparing and take the first acceptable option.
- Content that arrives while a person is reaching for something moves the target under their finger. This is the layout-jump problem from m08 seen from the interaction side, and the answer is the same: reserve space for content that is coming, and insert new content above the viewport only when the person asked for it.

[Laws of UX](https://lawsofux.com/).

</details>

## Lesson 10: Editing in place and saving without a button

Stable ID: m09-l10-v1. Core.

Automatic saving removes a button and adds a burden: the person can no longer see whether their change is safe.

Bring: One editable value from your product.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Viewing, editing and saved states specified distinctly
- A visible save confirmation with its wording and duration
- Behaviour for leaving mid-edit, stated and justified
- Failure handling that retains the text and offers retry
- A Cancel that restores the previous value, and a reduced-motion version of the saving, saved and failed states

### Start here: in everyday words

Interaction design explains what happens when someone acts, what they see next and how they recover from a mistake. In this lesson, your first small result is: One editable value chosen, and a line on what the product owes the person about where her change stands.

**Words you will use**

- **Editing in place:** Changing a value where it sits on the screen, rather than on a separate edit page with its own save button.
- **Saving on its own:** The change is stored without anyone pressing anything. Often called autosave.
- **State:** What the same thing looks like at a different moment. One note, three appearances.

**Quick example.** A supplied made-up case. Someone is half way through typing a note on a booking. She taps a notification and the app closes. She comes back four hours later.

The reader demonstrates and guides the task before asking for “The one value you will make editable where it sits”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Design one in-place edit that shows clearly when it is editable, when it is saving and when it has saved, with a defined behaviour for failure and for leaving mid-edit.


### Show three states plainly: viewing, editing and saved

Section: learn. Stable action: learn-1.

Show three states plainly: viewing, editing and saved.


### If there is no save button, the save state must be visible and specific

Section: learn. Stable action: learn-2.

If there is no save button, the save state must be visible and specific.


### Decide what happens when the person leaves mid-edit, and say so

Section: learn. Stable action: learn-3.

Decide what happens when the person leaves mid-edit, and say so.


### A failed automatic save must not fail silently; the person must be told

Section: learn. Stable action: learn-4.

A failed automatic save must not fail silently; the person must be told.


### Editing in place still needs a cancel that restores the previous value

Section: learn. Stable action: learn-5.

Editing in place still needs a cancel that restores the previous value.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Made-up example: the note on a booking saved automatically with no feedback. Redesigned: the value shows a small pencil and the word Edit at all times, so a phone user can see it is editable; entering edit shows a bordered field with cancel and done controls; on blur the change saves and the label becomes “Saved 12:04” for several seconds before fading to a small “Saved” marker. If the save fails, the field keeps the text, shows “Not saved — check your connection” and offers retry, and the text is retained locally so a reload does not lose it. Cancel restores the previous value, and leaving mid-edit saves rather than discarding — with that decision recorded, because the alternative was defensible too.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Choose the value and read

Section: practice-plan. Stable action: step-1-brief.

One editable value chosen, and a line on what the product owes the person about where her change stands.

- Choose one editable value in your product.
- Read the assigned status heuristic and error guidance.

**Start here:** Choose something small and real: a note, a date, a display name.

**Enough:** The value is one you could draw in three states on a single sheet.

**Editing in place:** Changing a value where it sits on the screen, rather than on a separate edit page with its own save button.

**Saving on its own:** The change is stored without anyone pressing anything. Often called autosave.


### The one value you will make editable where it sits

Section: practice-plan. Stable action: write-chosen-value.

Write your answer for “The one value you will make editable where it sits”. Use the task instructions below to decide what to include.

**Answer:** The one value you will make editable where it sits



<details>
<summary>Example</summary>

Example (made up): the note attached to a booking, shown on the booking summary.

</details>


### From the assigned reading: what a product owes a person about the state of their change

Section: practice-plan. Stable action: write-read-note.

Write your answer for “From the assigned reading: what a product owes a person about the state of their change”. Use the task instructions below to decide what to include.

**Answer:** From the assigned reading: what a product owes a person about the state of their change




### Design the three states

Section: practice-plan. Stable action: step-2-brief.

Three states written as what a person sees, the saved wording and how long it stays, and what Cancel restores.

- Open the state example in this lesson and step through saving, saved and failed with Retry before writing your own wording.
- Specify how viewing shows that the value is editable.
- Specify the editing state with a cancel and a done route, and what Cancel restores.
- Specify the saved state with its wording and how long it shows.

**Start here:** Open the state example in this lesson and switch it through idle, saving, saved and failed with Retry. Then draw your three states side by side on one sheet before you write any wording. No example on screen, as in a printed copy? Draw the states and say so.

**Enough:** Someone could tell which state they were in from the drawing alone, with the labels covered.

**State:** What the same thing looks like at a different moment. One note, three appearances.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Taking the save button off a booking note, and finding that the person no longer knew she was safe.

**What I did first:** Removed the save button and let the note store itself when the field lost focus. One less control, and the screen looked calmer.

**What she saw:** Nothing. She typed, tapped elsewhere, and the screen looked exactly as it had before she typed a word.

**What I had actually removed:** Not a button. The moment she knew her words existed somewhere other than the screen in front of her.

**What replaced it:** “Saved 12:04” beside the note for six seconds, fading to a small grey “Saved” that stays until the next edit.

**What that cost me:** Three states to draw and to word, instead of one field and a button. Removing a control is only simpler if you pay for it in feedback.

**Wrong turn:** The wrong turn is treating the save button as clutter. It was doing a job, and the job does not disappear when the button does.

**Trade-off:** A visible saved state adds words to a quiet screen, and some people will find it fussy. That is the price of removing the control that used to reassure them.

**Unknown:** Still unknown: whether six seconds is long enough for someone who looks away mid-edit. That needs watching a person, not deciding at a desk.


### Viewing · how it shows that the value can be changed

Section: practice-plan. Stable action: write-viewing-state.

Something visible without hovering. Hover does not exist on a phone.

**Answer:** Viewing · how it shows that the value can be changed

Something visible without hovering. Hover does not exist on a phone.


### Editing · what changes, and how she cancels or finishes

Section: practice-plan. Stable action: write-editing-state.

Write your answer for “Editing · what changes, and how she cancels or finishes”. Use the task instructions below to decide what to include.

**Answer:** Editing · what changes, and how she cancels or finishes




### What Cancel restores, and what she sees straight after cancelling

Section: practice-plan. Stable action: write-cancel-restore.

Write your answer for “What Cancel restores, and what she sees straight after cancelling”. Use the task instructions below to decide what to include.

**Answer:** What Cancel restores, and what she sees straight after cancelling



<details>
<summary>Example</summary>

Example (made up): the note goes back to exactly what it said before editing began, and a quiet “Not changed” shows for a moment.

</details>


### Saved · the exact words, and how long they stay before settling

Section: practice-plan. Stable action: write-saved-state.

Write your answer for “Saved · the exact words, and how long they stay before settling”. Use the task instructions below to decide what to include.

**Answer:** Saved · the exact words, and how long they stay before settling



<details>
<summary>Example</summary>

Example (made up): “Saved 12:04” for six seconds, then a small grey “Saved” that stays until the next edit.

</details>


### Decide the leaving case

Section: practice-plan. Stable action: step-3-brief.

A stated behaviour for leaving part way through, the reason for it, and what she meets on her return.

- Choose save on blur, keep a draft, or discard with confirmation.
- Write the reason for your choice.
- Specify what the person sees when they return.

**Start here:** Ask what she would call the worst outcome, then rule that one out first.

**Enough:** Your reason would still hold up if someone preferred a different choice.

**Leaving mid-edit:** A person moving away with a change half typed: a notification tapped, a tab closed, a phone going to sleep.

**Draft:** A half-finished change held aside rather than stored over the old value, and offered back to her when she returns.

**Return view:** What she meets when she comes back: the old value, her draft, or a line telling her which of the two she is looking at.


### Try a supplied example

Section: practice-plan. Stable action: step-3-try.

A supplied made-up case. Someone is half way through typing a note on a booking. She taps a notification and the app closes. She comes back four hours later.

Which behaviour would you specify, and what makes it defensible?

- Throw the half-typed note away, since she left the app without finishing or saving it.
- Store the half-typed note as final, and show nothing on her return to say it was left unfinished.
- Keep it as a draft, show it in the editing state on her return, and say when it was changed.
- Ask her to confirm what to do with the note before the app finishes closing down.

<details>
<summary>After your attempt</summary>

Throw the half-typed note away, since she left the app without finishing or saving it. — Leaving is rarely a decision. A notification is not the same as pressing cancel, and discarding is the one outcome she cannot reverse.

Store the half-typed note as final, and show nothing on her return to say it was left unfinished. — It keeps her words and stores half a sentence as though it were final, with nothing to tell her or anyone else it was unfinished. On a shared booking someone else may read it before she does.

Keep it as a draft, show it in the editing state on her return, and say when it was changed. — Her words are kept, and nothing half-finished was stored under her name as though she meant it. The time tells her what she is looking at four hours later. Saving with a visible time, as the lesson’s example does, can also be defended; what fails is storing it silently as final.

Ask her to confirm what to do with the note before the app finishes closing down. — A tap on a notification does not wait for a question, and a question she never sees settles nothing. Keep the text and ask her later, when she is back.

Write your own choice, and beside it the one thing each other choice would have cost her.

</details>


### What happens when someone leaves part way through an edit

Section: practice-plan. Stable action: write-leaving-choice.

Choose the option that honestly describes your work.

**Answer:** What happens when someone leaves part way through an edit (Save what is there / Keep it as a draft and offer it on return / Discard it, after asking first)




### Why you chose that, and what the other choices would have cost

Section: practice-plan. Stable action: write-leaving-reason.

Write your answer for “Why you chose that, and what the other choices would have cost”. Use the task instructions below to decide what to include.

**Answer:** Why you chose that, and what the other choices would have cost




### What she sees when she comes back

Section: practice-plan. Stable action: write-return-view.

Write your answer for “What she sees when she comes back”. Use the task instructions below to decide what to include.

**Answer:** What she sees when she comes back




### Design failure

Section: practice-plan. Stable action: step-4-brief.

Failure specified: where the text is kept, the exact message, and a retry that does not lose the edit.

- Specify that text is retained locally when a save fails.
- Write the message: what happened and what to do.
- Provide retry that does not lose the edit.

**Start here:** Write the message before the mechanism. The words tell you what the mechanism has to do.

**Enough:** The message says what happened, where the text is, and what to do next.

**Kept locally:** Held on her own device, so a reload or a dropped connection does not take the words with it.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Writing a failure message that was honest about the failure and silent about her words.

**What I wrote first:** A small red line saying “Could not save”, with a Retry link beside it. Short, honest, and I was pleased with it.

**What she cannot tell from it:** Whether her words still exist anywhere. The message reports the failure and says nothing at all about the text she just typed.

**What I watch myself do:** When another product tells me a save failed, I select my text and paste it somewhere safe before I touch anything else. That is a person doing the product’s job for it.

**The wording I moved to:** “Not saved yet. Your note is kept on this device. Retry.” The middle sentence is the one carrying the weight.

**What retry had to become:** Retry sends whatever is in the field now, not the version that failed. Otherwise the second attempt quietly undoes everything she typed while waiting.

**Wrong turn:** The wrong turn is writing a message that is accurate about what went wrong and quiet about what it means for her. It reads honest, and it leaves her to assume the worst.

**Trade-off:** Keeping her text on the device means one version of the note can sit on that phone and not anywhere else. She may open the same booking on a laptop and meet older words. You are trading agreement between devices for losing nothing.

**Unknown:** Still unknown: what should happen when the retry fails a second and a third time. Nothing decided here says when the product should stop trying and hand the problem back to her.


### Where the text is kept when a save fails, and what survives a reload

Section: practice-plan. Stable action: write-retention.

Write your answer for “Where the text is kept when a save fails, and what survives a reload”. Use the task instructions below to decide what to include.

**Answer:** Where the text is kept when a save fails, and what survives a reload




### The failure message, in the exact words: what happened and what to do

Section: practice-plan. Stable action: write-failure-message.

Write your answer for “The failure message, in the exact words: what happened and what to do”. Use the task instructions below to decide what to include.

**Answer:** The failure message, in the exact words: what happened and what to do



<details>
<summary>Example</summary>

Example (made up): “Not saved. Your note is still here. Check your connection, then choose Retry.”

</details>


### How retry works without losing the edit

Section: practice-plan. Stable action: write-retry-route.

Write your answer for “How retry works without losing the edit”. Use the task instructions below to decide what to include.

**Answer:** How retry works without losing the edit




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You remove the save button and the value stores itself. What have you taken on?

- The whole job of telling her where her change stands, which pressing the button used to do.
- Only the failure case, since a save that works needs no message on the screen at all.
- Very little, provided the saving itself is reliable and almost never fails for anyone at all.

<details>
<summary>After your attempt</summary>

The whole job of telling her where her change stands, which pressing the button used to do. — The button was feedback as much as a control. Without it, every save and every failure has to announce itself in words.

Only the failure case, since a save that works needs no message on the screen at all. — A save that works is exactly when she needs to know. Silence after typing reads the same whether it worked or not.

Very little, provided the saving itself is reliable and almost never fails for anyone at all. — Reliability is invisible. Even a save that always works leaves her guessing, because nothing on the screen says so.

Improve: If your saved-state in step 2 has no exact wording and no duration, write both now and record the change in step 5.

Check again: The saved state has words a person would read and a stated length of time.

Answers to revisit: viewing-state, editing-state, cancel-restore, saved-state, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The save fails because the connection dropped. What must not happen?

- The text being kept safely on her device until a later save succeeds.
- Nothing visible, with the text sitting there looking stored.
- A message saying the save did not happen.

<details>
<summary>After your attempt</summary>

The text being kept safely on her device until a later save succeeds. — That is also what should happen. Keeping the words locally is what makes a retry possible at all.

Nothing visible, with the text sitting there looking stored. — A silent failure lets her walk away believing the change exists. She finds out later, when it matters and cannot be repaired.

A message saying the save did not happen. — That is what should happen. The message is how she learns in time to do something about it.

Improve: If your failure-message in step 4 is empty or vague, write the exact words and say where the text is kept, then record it in step 5.

Check again: The failure state says what happened, that the text is safe, and what to do next.

Answers to revisit: retention, failure-message, retry-route, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your viewing state and your editing state differ only by a blue border. What is the risk?

- There is little risk, since a blue border is a widely used convention for editing.
- The risk is only on small screens, where a thin blue border is easy to miss.
- Anyone who cannot see that blue cannot tell whether she is typing into it or just looking.

<details>
<summary>After your attempt</summary>

There is little risk, since a blue border is a widely used convention for editing. — Common does not mean perceivable. The convention still has to reach people who do not see that difference.

The risk is only on small screens, where a thin blue border is easy to miss. — A thin border makes it worse and is not the root of it. The state is carried by one colour and nothing else.

Anyone who cannot see that blue cannot tell whether she is typing into it or just looking. — One colour is one channel. Add a difference in shape: a background, a heavier border, or a visible cancel and done pair.

Improve: If your greyscale-check in step 5 could not tell viewing from editing, change the editing state in step 2, then record what you changed in step 5.

Check again: The three states are still distinguishable with the colour removed.

Answers to revisit: improvement-made, viewing-state, editing-state, cancel-restore, saved-state

</details>


### Check and record

Section: practice. Stable action: step-5-brief.

The greyscale check, your states with Reduce motion on, what you could not verify without a build, and the repair the Check questions asked for.

- Check the three states are distinguishable in greyscale.
- Turn on Reduce motion in the state example, then write how your saving, saved and failed states read without movement.
- Record what you could not verify without a build.
- Save the specification with the wording.

**Start here:** Look at the three states with the colour removed and ask which one you are in.

**Enough:** The unverified list names timing and failure behaviour, which a drawing cannot show.

**Greyscale check:** Looking at your drawing with every colour taken out, to see whether the states still tell themselves apart.

**Build:** A working version of the product that somebody can actually use, rather than a drawing of one.

**Unverified:** Something you wrote down but could not check, usually because it needs timing or a real failure that paper cannot show you.


### What happened when you looked at the three states with the colour removed

Section: practice. Stable action: write-greyscale-check.

Print in grey, or turn the colour down on a screenshot until only lightness is left.

**Answer:** What happened when you looked at the three states with the colour removed

Print in grey, or turn the colour down on a screenshot until only lightness is left.


### Your saving, saved and failed states with Reduce motion on: what changes, with no movement

Section: practice. Stable action: write-reduced-states.

Turn on Reduce motion in the state example first and note what still changes. Words and a steady mark should carry each state.

**Answer:** Your saving, saved and failed states with Reduce motion on: what changes, with no movement

Turn on Reduce motion in the state example first and note what still changes. Words and a steady mark should carry each state.


### What you could not check without something built

Section: practice. Stable action: write-unverified.

Write your answer for “What you could not check without something built”. Use the task instructions below to decide what to include.

**Answer:** What you could not check without something built




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Your decision for the new case, and why

Section: practice. Stable action: write-transfer-decision.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.

**New case.** Made-up case: a shared shopping-list app saves an edited item as soon as you tap away, with no message. Offline, edits vanish when the app reloads. If you leave mid-edit the change is thrown away, and there is no Cancel while editing.

**Task:** Specify what the person sees when an edit saves, fails, is cancelled and is left half-done. Explain your choices.

<details>
<summary>Compare after writing</summary>

- Weak: Says saving on its own is simpler, so no message is needed, or adds a message for failures only.
- Adequate: A visible “Saved” with a time; on failure the text stays on the phone with “Not saved yet” and Retry; Cancel restores the old value; leaving keeps a draft or saves, with the reason stated.
- Strong: As adequate, plus a reduced-motion version of the saved state, what happens if another person edits the same item meanwhile, and a note that the timing needs testing in a build.

</details>

**Answer:** Your decision for the new case, and why

Optional: may be left empty.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson gathers every duration and rule from this module onto one sheet.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Editing in place and saving without a button
What I am trying to do: Design one in-place edit that shows clearly when it is editable, when it is saving and when it has saved, with a defined behaviour for failure and for leaving mid-edit.

Key idea or terms:
Editing in place: Changing a value where it sits on the screen, rather than on a separate edit page with its own save button.
Saving on its own: The change is stored without anyone pressing anything. Often called autosave.
State: What the same thing looks like at a different moment. One note, three appearances.

Supplied practice material (fictional or labelled practice, not my research):
A supplied made-up case. Someone is half way through typing a note on a booking. She taps a notification and the app closes. She comes back four hours later.

Activity: Before explaining the tool or method, ask me to predict what the next action will change. After I answer, explain the visible result and one common recovery step.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “The one value you will make editable where it sits” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “The one value you will make editable where it sits”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try a supplied example” question. Choose an answer, read the explanation, then return to “The one value you will make editable where it sits” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Draw the three states side by side in greyscale. If you cannot tell them apart, add a border, a background or an icon.
- Write the exact words the person sees after a save and how long they stay.

- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 1, visibility of system status, and heuristic 3, user control and freedom. Purpose: States the obligation that replaces the save button: tell the person where their change stands. Free reading, no account. Verified 2026-09-06. It does not discuss automatic saving; the state model here is the course's own. Fallback: R11.
- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — Feedback, recovery and undo. Purpose: Frames a failed save as a recoverable event that must be visible rather than an error to log. Free reading, no account. Verified 2026-09-06. Prevention techniques are options rather than a checklist. Fallback: R02.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Viewing, editing and saved are visually distinct**

Adequate evidence: Three specified states, distinguishable in greyscale, with an edit affordance in the viewing state.

0 — View and edit look identical.

1 — Distinct but relying on colour alone.

2 — Three distinct states, distinguishable without colour.

3 — As adequate, and the viewing state shows the value is editable before the person hovers.

Repair: Draw the three states side by side in greyscale. If you cannot tell them apart, add a border, a background or an icon. Recheck: The three states.

**The save confirmation is specific, timed and survives reduced motion**

Adequate evidence: Wording for the saved state, how long it remains before settling, and how saving, saved and failed still read with Reduce motion on.

0 — No confirmation.

1 — A generic tick with no wording or duration.

2 — Specific wording with a stated duration and resting state.

3 — As adequate, and the confirmation says when it saved rather than only that it did.

Repair: Write the exact words the person sees after a save and how long they stay. Recheck: The confirmation specification.

**Leaving and cancelling mid-edit have stated, justified behaviours**

Adequate evidence: A chosen leaving behaviour with a reason and what the person sees on return, and a Cancel that restores the previous value.

0 — Undecided.

1 — Decided without a reason or a return state, or no Cancel.

2 — Leaving chosen, justified, with the return state specified, and Cancel restoring the previous value.

3 — As adequate, and the alternative you rejected is recorded with its trade-off.

Repair: Write what happens if the person navigates away with unsaved text, and what they find when they come back. Recheck: The leaving behaviour.

**Failure retains the text and offers a retry**

Adequate evidence: A failure state keeping the text locally, with plain wording and a retry that preserves the edit.

0 — Failures lose the text or are silent.

1 — The message exists but the text is lost on reload.

2 — Text retained, message plain, retry preserves the edit.

3 — As adequate, and the specification says what happens if the person closes the page before a retry succeeds.

Repair: Specify local retention explicitly and write the message that appears when the save has not happened. Recheck: The failure specification.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson gathers every duration and rule from this module onto one sheet.

**Review criteria:**

- Viewing, editing and saved are visually distinct
- The save confirmation is specific, timed and survives reduced motion
- Leaving and cancelling mid-edit have stated, justified behaviours
- Failure retains the text and offers a retry

<details>
<summary>Reading, video and deeper explanation</summary>

- In-place editing removes a step and removes a signal. With a save button, the person knows their change is committed when they press it; without one, they have to infer it, and inference under uncertainty produces the same behaviour as an unacknowledged payment — repeated attempts, or leaving without trusting the result. The replacement signal has to be explicit: “Saved” with a timestamp, or a clear transient state that resolves visibly.
- The three states need distinct appearances. Viewing shows the value; editing shows that this is now a field with a cursor and a way out; saved shows that the change has been kept. Products that make the view and edit states look identical produce people who type into what they think is a label, or who never realise the value can be changed at all.
- Leaving mid-edit is common and must be decided rather than inherited. Options are: save automatically on blur, keep the draft and warn, or discard with a confirmation. Each is defensible; silence is not, because a person who navigates away and returns to find their edit gone will not try again.
- Silent failure is the worst outcome of automatic saving. If the network drops, the change must be retained locally, the person must be told plainly that it has not been saved, and a retry must exist. This is the same obligation as the payment states in m07: an unknown outcome is a state, not an absence.

[Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).

</details>

## Lesson 11: An interaction sheet: durations, easings and rules

Stable ID: m09-l11-v1. Core.

Interaction decisions made per component drift. Named values and written rules are how a product feels like one thing.

Bring: Your m08 token sheet and this module's specifications.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Named durations and easings with their numbers
- Written interaction rules that would settle a future case
- A reduced-motion pairing for every entry
- Three components using the sheet, with exceptions resolved

### Start here: in everyday words

Interaction design explains what happens when someone acts, what they see next and how they recover from a mistake. In this lesson, your first small result is: Every duration and easing you used, listed with where it appeared, and the near-duplicates marked.

**Words you will use**

- **Duration:** How long a change takes, written in milliseconds. A thousand milliseconds is one second.
- **Easing:** How the speed changes across that time. Starting fast and settling feels like arriving; an even speed feels mechanical.
- **Role:** The job a value does, such as small movement or a panel arriving, rather than the screen you first happened to use it on.

**Quick example.** A supplied made-up entry from the sheet: moderate 250ms, used where the filter panel enters from the filter button, so the person can see where the panel came from.

The reader demonstrates and guides the task before asking for “Every duration and easing across this module’s specifications, with where each one was used”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Produce an interaction sheet naming your durations, easings and interaction rules, and apply it across three components so nothing is decided twice.


### Name durations by role: instant, quick, moderate — not by number alone

Section: learn. Stable action: learn-1.

Name durations by role: instant, quick, moderate — not by number alone.


### Two or three easings are enough: entering, exiting and moving

Section: learn. Stable action: learn-2.

Two or three easings are enough: entering, exiting and moving.


### Idea 3: Write the rules as sentences: what animates, what does not, wh…

Section: learn. Stable action: learn-3.

Write the rules as sentences: what animates, what does not, what must never move.


### Include the reduced-motion pairing for every duration and pattern

Section: learn. Stable action: learn-4.

Include the reduced-motion pairing for every duration and pattern.


### The sheet is real only when three components use it without exception

Section: learn. Stable action: learn-5.

The sheet is real only when three components use it without exception.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Made-up example: the sheet came to three durations — instant 0ms for state changes, quick 150ms for small movement, moderate 250ms for panels — three easings, and seven rules including “nothing animates while a person is typing”, “the price and remaining places never move”, and “only one thing animates at a time in a view”. Every duration carried its reduced-motion pair, mostly a 120ms fade. Applying the sheet to three components surfaced two exceptions: a 400ms transition nobody could justify, which became moderate, and a genuine missing role for a long list re-sort, which was added deliberately as a fourth duration with the reason recorded.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Collect what you used

Section: practice-plan. Stable action: step-1-brief.

Every duration and easing you used, listed with where it appeared, and the near-duplicates marked.

- List every duration and easing across this module's specifications.
- Mark near-duplicates: values within 50ms of each other.

**Start here:** Work backwards through this module’s specifications and copy out every number you find.

**Enough:** The list surprises you with how many values you used without ever deciding on them.

**Duration:** How long a change takes, written in milliseconds. A thousand milliseconds is one second.

**Easing:** How the speed changes across that time. Starting fast and settling feels like arriving; an even speed feels mechanical.


### Every duration and easing across this module’s specifications, with where each one was used

Section: practice-plan. Stable action: write-value-list.

Write your answer for “Every duration and easing across this module’s specifications, with where each one was used”. Use the task instructions below to decide what to include.

**Answer:** Every duration and easing across this module’s specifications, with where each one was used



<details>
<summary>Example</summary>

Example (made up): 200ms filter panel, 250ms detail view, 120ms confirmation fade, 400ms page transition, 150ms press state.

</details>


### Which values sit within 50ms of each other

Section: practice-plan. Stable action: write-near-duplicates.

Write your answer for “Which values sit within 50ms of each other”. Use the task instructions below to decide what to include.

**Answer:** Which values sit within 50ms of each other




### Name and cut

Section: practice-plan. Stable action: step-2-brief.

Three durations and three easings, each named for the role it serves and given a number.

- Group the values into three roles and give each a name and a number.
- Choose entering, exiting and moving easings.
- Remove every value that does not fit a role.

**Start here:** Sort your values into no movement, small movement and larger movement. Those are usually the three roles.

**Enough:** Each name would still make sense if every screen in your product were redrawn.

**Role:** The job a value does, such as small movement or a panel arriving, rather than the screen you first happened to use it on.

**Near-duplicate:** Two values so close that nobody could tell them apart, such as 200 and 220 milliseconds. One of the two goes.

**Entering and exiting:** Movement as something arrives on the screen, and movement as it leaves. The two usually want different easings.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Naming three durations after the screens they were used on, then having to rename all of them six weeks later.

**What I wrote first:** filter-panel 200ms, detail-view 250ms, confirmation-fade 120ms. Each name said exactly where the value was used.

**Why it felt right:** Anyone reading the sheet could see which value belonged to which screen. It looked organised and it read clearly.

**What broke it:** The filter panel became a full screen and the detail view became a panel. Two names now pointed at the wrong things.

**The question I could not answer:** Someone asked whether a new drawer should use filter-panel or detail-view. The names carried no reason, so there was nothing to decide with.

**What replaced them:** instant 0ms for state changes, quick 150ms for small movement, moderate 250ms for panels. The drawer is a panel, so it is moderate. The question answered itself.

**Wrong turn:** The wrong turn is naming a value after the place you first used it. It reads clearly on the day, and it stops meaning anything the moment the screen changes.

**Trade-off:** Role names are vaguer than screen names, and you lose the ability to see at a glance where a value is used. What you get is a sheet that survives a redesign.

**Unknown:** Still unknown: whether three roles is enough. A fourth may be needed, and adding one deliberately with a reason is a different act from inventing one at midnight.


### Three named durations: the name, the number, and the role each one serves

Section: practice-plan. Stable action: write-duration-names.

Write your answer for “Three named durations: the name, the number, and the role each one serves”. Use the task instructions below to decide what to include.

**Answer:** Three named durations: the name, the number, and the role each one serves



<details>
<summary>Example</summary>

Example (made up): instant 0ms for state changes, quick 150ms for small movement, moderate 250ms for panels.

</details>


### Your entering, exiting and moving easings, each with what it should feel like

Section: practice-plan. Stable action: write-easing-names.

Three is plenty. Entering fast and then settling reads as arrival.

**Answer:** Your entering, exiting and moving easings, each with what it should feel like

Three is plenty. Entering fast and then settling reads as arrival.


### Write the rules

Section: practice-plan. Stable action: step-3-brief.

Rules written as sentences, including what must never move and how many things may animate at once.

- Write the rules as sentences a new person could follow.
- Include what must never move and what never animates.
- Include the one-thing-at-a-time rule if your audit found competition.

**Start here:** Take the animation you removed in lesson 1 and write the rule that would have prevented it.

**Enough:** Each rule could settle a proposal without you being in the room.

**Rule:** A sentence that decides a case you have not met yet. If it cannot settle a disagreement, it is a preference rather than a rule.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Writing five motion rules, then finding that four of them could not settle a single disagreement.

**What I wrote:** “Motion should feel calm and purposeful.” Four more in the same voice. The sheet looked considered and I was fond of it.

**The test I put them through:** I imagined somebody proposing a badge that spins on the confirmation screen. Would any of my five sentences stop it? They would say their badge was calm and purposeful too.

**What a rule has to contain:** Something you can point at and count. A part of the screen, a number, or a thing named as never moving.

**What I rewrote them as:** “No row above the line somebody is reading may shift.” And “at most one thing animates in a view at a time; a second waits its turn.”

**What happened to the badge:** The proposal now fails on the counting rule, and the conversation is about the rule rather than about taste. Nobody has to win an argument.

**Wrong turn:** The wrong turn is writing rules that describe how you want the product to feel. They are pleasant to read, and every proposal passes them, including the ones you wrote them to prevent.

**Trade-off:** A countable rule will one day forbid something that would have been perfectly fine, and you will have to break your own rule in the open and write down why. A vague rule never puts you in that position.

**Unknown:** Still unknown: whether one thing at a time holds for a screen where several panels arrive together. That case has not come up yet, and it may need an exception with a reason attached.


### Rule 1

Section: practice-plan. Stable action: write-rule-1.

Write your answer for “Rule 1”. Use the task instructions below to decide what to include.

**Answer:** Rule 1



<details>
<summary>Example</summary>

Example (made up): nothing animates while a person is typing.

</details>


### Rule 2

Section: practice-plan. Stable action: write-rule-2.

Include one rule about what must never move, and one about how many things may animate at once in a view.

**Answer:** Rule 2

Include one rule about what must never move, and one about how many things may animate at once in a view.


### Rule 3

Section: practice-plan. Stable action: write-rule-3.

Write your answer for “Rule 3”. Use the task instructions below to decide what to include.

**Answer:** Rule 3




### Rule 4

Section: practice-plan. Stable action: write-rule-4.

Write your answer for “Rule 4”. Use the task instructions below to decide what to include.

**Answer:** Rule 4




### Rule 5

Section: practice-plan. Stable action: write-rule-5.

Write your answer for “Rule 5”. Use the task instructions below to decide what to include.

**Answer:** Rule 5




### Pair with reduced motion

Section: practice-plan. Stable action: step-4-brief.

A reduced-motion alternative for every duration and pattern, checked for whether the meaning survived.

- For every duration and pattern, record its reduced-motion alternative.
- Check the pairs preserve the explanation the original carried.

**Start here:** Work down the sheet row by row rather than picking out the interesting ones.

**Enough:** Every row has a pair, and you can say what each pair still tells the person.

**Reduced motion:** A setting on a person’s own device asking for less movement. Reduced means gentler, not deleted.


### Try a supplied example

Section: practice-plan. Stable action: step-4-try.

A supplied made-up entry from the sheet: moderate 250ms, used where the filter panel enters from the filter button, so the person can see where the panel came from.

Which reduced-motion pair keeps what the movement was explaining?

- Keep the slide but run it at 100ms instead of 250ms, so it is over almost at once.
- A 120ms fade in place, with the filter button staying marked while the panel is open.
- Replace it with a slower 400ms slide, so the movement feels gentler on the eye.
- Remove the transition entirely, so the panel simply appears in place with no change at all.

<details>
<summary>After your attempt</summary>

Keep the slide but run it at 100ms instead of 250ms, so it is over almost at once. — Faster movement is still movement, and speed can make it harder to follow rather than gentler. The request was for less, not quicker.

A 120ms fade in place, with the filter button staying marked while the panel is open. — The movement was saying this came from that. Keeping the button marked says the same thing without moving anything across the screen.

Replace it with a slower 400ms slide, so the movement feels gentler on the eye. — Slow and gentle are not the same thing. A long slide across the screen is the pattern the setting is asking you to stop.

Remove the transition entirely, so the panel simply appears in place with no change at all. — That deletes the explanation along with the movement. She now has a panel and no idea what produced it.

Work down your own sheet and write the pair for every row, including the rows where the honest pair is no change at all.

</details>


### For each duration and each pattern: its reduced-motion alternative

Section: practice-plan. Stable action: write-reduced-pairs.

Write your answer for “For each duration and each pattern: its reduced-motion alternative”. Use the task instructions below to decide what to include.

**Answer:** For each duration and each pattern: its reduced-motion alternative




### Any pair where the reduced version stopped explaining what the original explained

Section: practice-plan. Stable action: write-meaning-check.

Write your answer for “Any pair where the reduced version stopped explaining what the original explained”. Use the task instructions below to decide what to include.

**Answer:** Any pair where the reduced version stopped explaining what the original explained




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You name a duration card-flip, after the only place it is used. What happens when the card stops flipping?

- The name points at nothing, and nobody can tell whether a new component should use it.
- Very little, because the number behind the name still works exactly as before.
- You rename it to match the new component, which takes a minute and loses nothing.

<details>
<summary>After your attempt</summary>

The name points at nothing, and nobody can tell whether a new component should use it. — A name describing a place stops being true when the place changes. A name describing a role keeps deciding cases long afterwards.

Very little, because the number behind the name still works exactly as before. — The number still works, and the sheet has stopped doing its job, which is settling the next decision without a meeting.

You rename it to match the new component, which takes a minute and loses nothing. — Renaming is easy and the lost reason is not recoverable. Nobody remembers why it was that number, so the next person simply picks a new one.

Improve: Rename any value in step 2 that is named after a screen or a component, then record the change in step 5.

Check again: Every name describes a role, and would survive a redesign.

Answers to revisit: duration-names, easing-names, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

One of your rules reads “animations should feel snappy”. Does it settle anything?

- Very little: two people could both follow it and still pick opposite values.
- It settles the general direction, which is all a sheet of rules needs to do.
- It settles the question, provided the duration values are written underneath.

<details>
<summary>After your attempt</summary>

Very little: two people could both follow it and still pick opposite values. — A rule has to rule something out. Rewrite it as the thing it forbids: what must never move, what may not animate, how many things may move at once.

It settles the general direction, which is all a sheet of rules needs to do. — A direction is a preference. The next proposal will describe itself as snappy, and your sheet will have nothing to say about it.

It settles the question, provided the duration values are written underneath. — The durations already sit on the sheet. The rules are there to decide when those durations are used at all.

Improve: Rewrite any rule in step 3 that could not settle a disagreement, then record what you changed in step 5.

Check again: Every rule names something it forbids or something it permits.

Answers to revisit: rule-1, rule-2, rule-3, rule-4, rule-5, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Under reduced motion you switch every transition off. What is lost?

- Only the decoration, and removing decoration is the whole point of the setting.
- Very little, since the setting is a request to switch off animation altogether.
- The explanation the movement carried, which people asking for less motion still need.

<details>
<summary>After your attempt</summary>

Only the decoration, and removing decoration is the whole point of the setting. — Decoration should indeed go. The panel that entered from a button was explaining where it came from, and that goes with it.

Very little, since the setting is a request to switch off animation altogether. — The setting asks for reduced motion. Switching everything off is the version that strips the explanation out along with the decoration.

The explanation the movement carried, which people asking for less motion still need. — The request is for less movement, not less information. Replace each movement with a gentler change that says the same thing.

Improve: Look at your meaning-check in step 4. Any pair that lost its explanation needs a gentler change rather than a removal, and the change recorded in step 5.

Check again: Every reduced pair still tells the person what the original told them.

Answers to revisit: reduced-pairs, meaning-check, improvement-made

</details>


### Apply and record exceptions

Section: practice. Stable action: step-5-brief.

Three components respecified from the sheet, every invented value resolved, and the repair the Check questions asked for.

- Apply the sheet to three components without exception.
- Record every value you had to invent and resolve each deliberately.
- Save the sheet with the rules and the exception list.

**Start here:** Take the component you specified in most detail and respecify it using only the names on your sheet.

**Enough:** No component uses a number that is not on the sheet without a recorded reason.

**Component:** One reusable part of a product, such as a card, a menu or a button, specified once and used in many places.

**Respecify:** Writing a component’s motion out again using only the names on your sheet, instead of the numbers you first reached for.

**Exception:** A value you needed that the sheet does not cover, written down with its reason rather than quietly kept.


### The three components respecified using only what is on the sheet

Section: practice. Stable action: write-three-components.

Write your answer for “The three components respecified using only what is on the sheet”. Use the task instructions below to decide what to include.

**Answer:** The three components respecified using only what is on the sheet




### Every value you had to reach for that was not on the sheet, and how you resolved it

Section: practice. Stable action: write-exceptions.

There are two honest resolutions: it fits a role you already have, or the role was genuinely missing and you add it with a reason.

**Answer:** Every value you had to reach for that was not on the sheet, and how you resolved it

There are two honest resolutions: it fits a role you already have, or the role was genuinely missing and you add it with a reason.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Your decision for the new case, and why

Section: practice. Stable action: write-transfer-decision.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.

**New case.** Made-up case: an art gallery’s audio-guide app uses durations of 150, 180, 200, 220, 300 and 450 milliseconds across its screens. Its only motion rule reads “keep motion elegant”. Nothing says what happens when a visitor has asked for reduced motion.

**Task:** Propose the named durations and one rule for this sheet, and explain why they would settle future decisions.

<details>
<summary>Compare after writing</summary>

- Weak: Keeps all six values or the “elegant” rule, so the next proposal can still pick any number.
- Adequate: Merges 150, 180, 200 and 220 (each within 50ms of a neighbour) into one role such as quick 200, keeps 300 as moderate, writes a countable rule such as “one thing animates at a time”, and pairs each role with a reduced-motion version.
- Strong: As adequate, plus a decision on 450ms (justified as its own role, or removed) and a test of the rule against an animation it ought to refuse.

</details>

**Answer:** Your decision for the new case, and why

Optional: may be left empty.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson puts these interactions in front of three people on their own phones.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: An interaction sheet: durations, easings and rules
What I am trying to do: Produce an interaction sheet naming your durations, easings and interaction rules, and apply it across three components so nothing is decided twice.

Key idea or terms:
Duration: How long a change takes, written in milliseconds. A thousand milliseconds is one second.
Easing: How the speed changes across that time. Starting fast and settling feels like arriving; an even speed feels mechanical.
Role: The job a value does, such as small movement or a panel arriving, rather than the screen you first happened to use it on.

Supplied practice material (fictional or labelled practice, not my research):
A supplied made-up entry from the sheet: moderate 250ms, used where the filter panel enters from the filter button, so the person can see where the panel came from.

Activity: Before explaining the tool or method, ask me to predict what the next action will change. After I answer, explain the visible result and one common recovery step.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Every duration and easing across this module’s specifications, with where each one was used” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Every duration and easing across this module’s specifications, with where each one was used”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try a supplied example” question. Choose an answer, read the explanation, then return to “Every duration and easing across this module’s specifications, with where each one was used” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- List every value you used, group them into three, and merge anything within 50ms.
- Take the animation you removed in lesson 1 and check whether your rules would have prevented it. If not, tighten them.

- R13: [MDN: CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using) — Duration and timing-function configuration, read as the vocabulary your sheet names. Purpose: Gives precise terms for the values you are naming so the sheet is implementable. Free reading, no account. Verified 2026-09-06. Implementation reference only: it recommends no values and gives no design rules, which are yours to write. Fallback: R02.
- R64: [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — The reduce value and the example that swaps rather than removes an animation. Purpose: Ensures the sheet's reduced pairs replace motion rather than deleting meaning. Free reading, no account. Verified 2026-09-06; page last modified 10 June 2026. It documents the signal only; the pairing discipline is this lesson's. Fallback: R13.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Durations and easings are named by role with numbers**

Adequate evidence: A short table of named durations and easings, with near-duplicates merged.

0 — Raw values scattered through specifications.

1 — Named but with more entries than roles.

2 — Three duration roles and three easings, near-duplicates merged.

3 — As adequate, and any fourth entry is justified by a role the others cannot serve.

Repair: List every value you used, group them into three, and merge anything within 50ms. Recheck: The named table.

**Rules are written as sentences that settle cases**

Adequate evidence: Rules specific enough to decide a future proposal, including what must never move.

0 — No rules, or aspirations rather than rules.

1 — Rules too vague to decide a case.

2 — Rules that would settle a proposal, including never-move elements.

3 — As adequate, and the rules were tested against a case from the lesson 1 audit.

Repair: Take the animation you removed in lesson 1 and check whether your rules would have prevented it. If not, tighten them. Recheck: The rules and the test case.

**Every entry has a reduced-motion pair**

Adequate evidence: A paired column recording the reduced alternative for each duration and pattern.

0 — No pairs.

1 — Pairs for some entries.

2 — Every entry paired, preserving the original explanation.

3 — As adequate, and essential motion has a reduced form rather than being removed.

Repair: Work down the sheet and add the reduced alternative for each row, checking the meaning survives. Recheck: The paired sheet.

**Three components use the sheet with exceptions resolved**

Adequate evidence: Three components respecified from the sheet, with every invented value classified and resolved.

0 — The sheet is not applied.

1 — Applied with untracked exceptions.

2 — Applied to three components with each exception resolved.

3 — As adequate, and at least one exception was resolved by changing the component rather than the sheet.

Repair: Respecify each component using only the sheet and record every reach for something not on it. Recheck: The three components and the exception list.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson puts these interactions in front of three people on their own phones.

**Review criteria:**

- Durations and easings are named by role with numbers
- Rules are written as sentences that settle cases
- Every entry has a reduced-motion pair
- Three components use the sheet with exceptions resolved

<details>
<summary>Reading, video and deeper explanation</summary>

- Motion values behave like colour values: unnamed, they multiply. A product ends up with 150, 180, 200 and 220 millisecond transitions that nobody chose and nobody can tell apart, each of which must be maintained. Naming three durations by role, with a number attached, gives you a vocabulary and makes the fourth value an explicit decision rather than an accident.
- Easing needs fewer entries than people expect. One curve for things entering, one for things leaving, and one for things moving between positions covers almost everything at this scale. Linear belongs to progress indicators only, where the constant rate carries meaning.
- The written rules are the part that survives you. “Anything under 40 pixels of movement uses quick; anything full-screen uses moderate; nothing animates while a person is typing; the price never moves” answers next month's questions without another discussion, and it is the part of a system that a new person can actually follow.
- Every entry needs its reduced-motion counterpart recorded beside it, or the alternative gets invented separately per component and drifts. Writing them as pairs is what keeps the reduced experience coherent rather than a set of disconnected exceptions.

[MDN: CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using).

</details>

## Lesson 12: Test the interactions and repair one

Stable ID: m09-l12-v1. Core.

Interaction claims are the easiest to believe and the hardest to verify from a specification. Watching three people settles most of them.

Bring: Your interaction specifications and, if possible, a rough build.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- De-identified session records from people on their own devices, or a dated rehearsal record
- A count of double taps and where they happened
- One repair with its prediction written beforehand and re-tested
- A ranked list of remaining problems and an untested list

### Start here: in everyday words

Interaction design explains what happens when someone acts, what they see next and how they recover from a mistake. In this lesson, your first small result is: Two tasks in the words you will say, one thing each session is watching for, and an honest route for who you can ask.

**Words you will use**

- **Task:** A goal you hand someone. It never names the control, or you have already taught them the answer.
- **Rehearsal:** You walking the task yourself when nobody is available. It tells you about your design and nothing at all about people.
- **Second tap:** Someone pressing the same thing again. It nearly always means nothing told them the first press had worked.

**Quick example.** Made-up example. Ranking six findings by how bad they felt, then re-ranking them by what they actually cost. Top of the list was the confirmation screen looking unfinished. It had bothered me for a week, and someone finally said it out loud.

The reader demonstrates and guides the task before asking for “The two tasks you will ask for, in the words you will actually say”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Test your interactions with up to three people on their own devices — or, if nobody is available, run a dated rehearsal and say so — rank what you find by harm, repair the worst with a prediction written first, and record what remains untested.


### Test interactions on the device they will be used on, not on your laptop

Section: learn. Stable action: learn-1.

Test interactions on the device they will be used on, not on your laptop.


### Idea 2: Watch for the second tap: it means feedback arrived too late o…

Section: learn. Stable action: learn-2.

Watch for the second tap: it means feedback arrived too late or not at all.


### Test one thing per session; interaction problems hide behind each other

Section: learn. Stable action: learn-3.

Test one thing per session; interaction problems hide behind each other.


### Predict what a repair should change before you re-test it

Section: learn. Stable action: learn-4.

Predict what a repair should change before you re-test it.


### Idea 5: Record every claim you could not test, especially assistive-te…

Section: learn. Stable action: learn-5.

Record every claim you could not test, especially assistive-technology behaviour.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Made-up example: three sessions on the participants' own phones. Two double-tapped the book button, because the acknowledgement appeared only after the server replied on a slow connection — the worst finding by harm, since it produced duplicate requests. One could not find the remove control at all, having never met a swipe pattern. One had reduced motion enabled on her own device, which surfaced that the filter panel simply appeared with no fade, unexplained. The prediction for the repair was written first: with an immediate acknowledgement, nobody should tap twice. Re-tested with two new people on their own phones, neither did. The remaining findings were ranked and left recorded rather than repaired in the same pass.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Plan the sessions

Section: practice-plan. Stable action: step-1-brief.

Two tasks in the words you will say, one thing each session is watching for, and an honest route for who you can ask.

- Read the assigned session guidance and write two tasks.
- Decide which single aspect each session focuses on.
- Extend your consent introduction to cover using their device.

**Start here:** Write each task as the sentence a friend would say to you, then take out every word that names a control. If nobody is available at all, run both tasks yourself twice on a phone you did not design on, write it down as a rehearsal, and say plainly that no participant was involved.

**Enough:** Neither task could be completed by following your wording literally.

**Task:** A goal you hand someone. It never names the control, or you have already taught them the answer.

**Rehearsal:** You walking the task yourself when nobody is available. It tells you about your design and nothing at all about people.


### The two tasks you will ask for, in the words you will actually say

Section: practice-plan. Stable action: write-tasks.

Say the goal, never the route. “Remove the second class from your shortlist” and not “swipe the row”.

**Answer:** The two tasks you will ask for, in the words you will actually say

Say the goal, never the route. “Remove the second class from your shortlist” and not “swipe the row”.


### The single thing each session is watching for

Section: practice-plan. Stable action: write-focus-per-session.

Write your answer for “The single thing each session is watching for”. Use the task instructions below to decide what to include.

**Answer:** The single thing each session is watching for



<details>
<summary>Example</summary>

Example (made up): session one watches for what happens after a tap; session two watches whether the remove control is found at all.

</details>


### Who you can actually ask, described by kind of person with no names or contact details, and the honest route if the answer is nobody

Section: practice-plan. Stable action: write-access-route.

Such as “two neighbours who use their phones daily”. If nobody is available, say so plainly and use the rehearsal route in this step. A rehearsal is never written up as research.

**Answer:** Who you can actually ask, described by kind of person with no names or contact details, and the honest route if the answer is nobody

Such as “two neighbours who use their phones daily”. If nobody is available, say so plainly and use the rehearsal route in this step. A rehearsal is never written up as research.


### What actually happened with sessions

Section: practice-plan. Stable action: write-session-status.

Choose the option that honestly describes your work.

**Answer:** What actually happened with sessions (Three people tried it on their own phones / One or two people tried it / Nobody was available: rehearsal only, dated)




### Run three sessions

Section: practice-plan. Stable action: step-2-brief.

One de-identified record per person on their own device, or one dated rehearsal record, and a count of every repeated action you saw.

- Run the tasks on each participant's own phone where possible; if nobody is available, walk both tasks yourself twice on a phone you did not design on and label it rehearsal.
- Choose what is used: the working examples in lessons 2, 8 and 10 opened on the phone (feedback, reordering, saving), or a rough build if you have one.
- Or use your Module 8 screens as a paper prototype, changing sheets yourself as “the computer” (order and finding things only, not timing). Name which in each record.
- Record double taps, hesitations and anything they could not find.
- Do not explain gestures or controls during the task.

**Start here:** Choose what will be used: the working examples in lessons 2, 8 and 10 opened on the phone (feedback, reordering, saving); your Module 8 screens as a paper prototype, with you changing sheets as “the computer” (order and finding things only, not timing); or a rough build. Name it in each record. Then say the task and stop talking. Silence is the instrument.

**Enough:** Each record names a device and describes actions rather than opinions. A rehearsal says rehearsal and names no participant.

**Second tap:** Someone pressing the same thing again. It nearly always means nothing told them the first press had worked.


### Person 1 · device, what they did, where they hesitated, what they could not find

Section: practice-plan. Stable action: write-session-1.

Name what they used: the working examples, the paper prototype or a rough build. No names, contact details or recordings here; raw notes stay in a private file with a date to delete them.

**Answer:** Person 1 · device, what they did, where they hesitated, what they could not find

Required only when session-status is Three people tried it on their own phones or One or two people tried it. Otherwise leave participant evidence empty.

Name what they used: the working examples, the paper prototype or a rough build. No names, contact details or recordings here; raw notes stay in a private file with a date to delete them.


### Person 2 · device, what they did, where they hesitated, what they could not find

Section: practice-plan. Stable action: write-session-2.

Write your answer for “Person 2 · device, what they did, where they hesitated, what they could not find”. Use the task instructions below to decide what to include.

**Answer:** Person 2 · device, what they did, where they hesitated, what they could not find

Required only when session-status is Three people tried it on their own phones. Otherwise leave participant evidence empty.




### Person 3 · device, what they did, where they hesitated, what they could not find

Section: practice-plan. Stable action: write-session-3.

Write your answer for “Person 3 · device, what they did, where they hesitated, what they could not find”. Use the task instructions below to decide what to include.

**Answer:** Person 3 · device, what they did, where they hesitated, what they could not find

Required only when session-status is Three people tried it on their own phones. Otherwise leave participant evidence empty.




### Rehearsal only: the phone you used, what you ran on it (working examples, paper prototype or rough build), what you did on each task twice, and where you hesitated, labelled rehearsal

Section: practice-plan. Stable action: write-rehearsal-record.

Write your answer for “Rehearsal only: the phone you used, what you ran on it (working examples, paper prototype or rough build), what you did on each task twice, and where you hesitated, labelled rehearsal”. Use the task instructions below to decide what to include.

**Answer:** Rehearsal only: the phone you used, what you ran on it (working examples, paper prototype or rough build), what you did on each task twice, and where you hesitated, labelled rehearsal

Required only when session-status is Nobody was available: rehearsal only, dated. Otherwise leave participant evidence empty.



<details>
<summary>Example</summary>

Example (made up): rehearsal, 5 October, an old phone I did not design on, running the working examples from lessons 2 and 8. Task 1 twice: no second tap, but I knew where Book was. Task 2: the remove control took me a moment to find.

</details>


### Every moment someone acted twice, and where it happened, with no names

Section: practice-plan. Stable action: write-double-taps.

Write your answer for “Every moment someone acted twice, and where it happened, with no names”. Use the task instructions below to decide what to include.

**Answer:** Every moment someone acted twice, and where it happened, with no names

Required only when session-status is Three people tried it on their own phones or One or two people tried it. Otherwise leave participant evidence empty.




### Rank by harm

Section: practice-plan. Stable action: step-3-brief.

Everything you found, ordered by what it cost the person, with the worst one named.

- List the problems and rank them by what they cost the person.
- Put duplicate actions and lost work above confusion and slowness.

**Start here:** Take each finding and try to finish the sentence “this cost her …”. If the sentence will not finish, it is not a harm.

**Enough:** Everything that cost someone a repeated action or lost work sits above everything that did not.

**Harm:** Something that cost the person: lost work, an action she had to repeat, money, or time she does not get back.

**Finding:** One thing you saw happen, written as the action itself rather than as your explanation of it.

**Preference:** Something you would rather were different, which cost the person nothing at all.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Ranking six findings by how bad they felt, then re-ranking them by what they actually cost.

**My first order:** Top of the list was the confirmation screen looking unfinished. It had bothered me for a week, and someone finally said it out loud.

**What sat below it:** Two people tapping the book button twice. I had put that fourth, because both of them completed the booking anyway.

**The question that reordered everything:** What did this cost the person? A second tap can send a second request. An unfinished-looking screen costs nobody anything at all.

**The one I nearly lost:** A note that lost its last few characters. Nobody complained, because nobody noticed until much later.

**The order I ended with:** The lost text, then the repeated taps, then the person who could not find the remove control, then everything else.

**Wrong turn:** The wrong turn is ranking by how strongly you feel about each finding. The thing that has irritated you all week rises to the top and stays there.

**Trade-off:** Ranking by harm means the finding you most want to fix may sit fifth, untouched, for weeks. That is what working on the worst thing first actually costs.

**Unknown:** Still unknown: how often the lost text happens. Three sessions cannot say, and this ranking is a judgement about consequence rather than frequency.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six findings from a made-up round of sessions, written for practice. Sort each one: a real harm to the person, a preference you happen to share, or something only you would ever notice.

Two people tapped the book button a second time, because nothing changed until the server replied.

- harm
- shared preference
- only you noticed

<details>
<summary>After your attempt</summary>

harm — A second tap can send a second request, and she may be charged twice without ever knowing she did it.

shared preference — Nobody chose this. She tapped again because the product told her nothing, which is a defect rather than a taste.

only you noticed — Two participants did it in front of you. It is the most visible thing in your notes.

Sort your own findings the same way, then rank only the harms against each other.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six findings from a made-up round of sessions, written for practice. Sort each one: a real harm to the person, a preference you happen to share, or something only you would ever notice.

One person’s typed note lost its last few characters when the connection dropped, and she did not notice.

- harm
- shared preference
- only you noticed

<details>
<summary>After your attempt</summary>

harm — Her work disappeared and nothing said so. Not noticing at the time makes it worse rather than smaller.

shared preference — Nothing here is a matter of taste. Her words are gone, whatever anyone would have preferred.

only you noticed — You spotted it and it happened to her. Whose eyes caught it does not change whose work was lost.

Sort your own findings the same way, then rank only the harms against each other.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six findings from a made-up round of sessions, written for practice. Sort each one: a real harm to the person, a preference you happen to share, or something only you would ever notice.

A person said she would rather the filter panel opened on the left, and you have always thought so too.

- harm
- shared preference
- only you noticed

<details>
<summary>After your attempt</summary>

harm — She found the filters and used them. Nothing was lost, slowed or repeated.

shared preference — One person’s taste, agreeing with yours. That agreement is exactly what makes it easy to promote, and worth marking so it cannot.

only you noticed — She raised it herself, so it is not invisible. It is simply not costing anyone anything.

Sort your own findings the same way, then rank only the harms against each other.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six findings from a made-up round of sessions, written for practice. Sort each one: a real harm to the person, a preference you happen to share, or something only you would ever notice.

A person said the confirmation screen “could be prettier”, and you had been meaning to redraw it anyway.

- harm
- shared preference
- only you noticed

<details>
<summary>After your attempt</summary>

harm — She completed the booking and read the confirmation. Nothing about the task failed for her.

shared preference — A comment landing on a plan you already had. Marking it stops it jumping the queue on the strength of your agreement.

only you noticed — She said it out loud, so you were not alone in seeing it. The thing to be careful of here is your agreement.

Sort your own findings the same way, then rank only the harms against each other.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six findings from a made-up round of sessions, written for practice. Sort each one: a real harm to the person, a preference you happen to share, or something only you would ever notice.

The panel enters at 250ms and the drawer at 200ms. Nobody mentioned it, and you found it on your third replay.

- harm
- shared preference
- only you noticed

<details>
<summary>After your attempt</summary>

harm — Nothing failed, repeated or disappeared. Fifty milliseconds is well below what anyone was working at.

shared preference — Nobody expressed a view on it at all, so there is nothing shared. This one is yours alone.

only you noticed — Real, tidy, and belonging on your interaction sheet rather than in this week’s work.

Sort your own findings the same way, then rank only the harms against each other.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six findings from a made-up round of sessions, written for practice. Sort each one: a real harm to the person, a preference you happen to share, or something only you would ever notice.

The saved marker fades a fraction later on the note field than on the date field, which you saw while stepping through your recording.

- harm
- shared preference
- only you noticed

<details>
<summary>After your attempt</summary>

harm — Both markers appeared and both said saved. Nobody waited, repeated an action or lost anything.

shared preference — Nobody expressed a preference about it, because nobody saw it happen.

only you noticed — A difference of a frame or two, found on a replay. Record it on the sheet and let it wait.

Sort your own findings the same way, then rank only the harms against each other.

</details>


### Everything you found, in order of what it cost the person

Section: practice-plan. Stable action: write-ranked-list.

Repeated actions and lost work sit above confusion. Confusion sits above slowness. On the rehearsal route, rank your rehearsal notes beside the six made-up findings from the practice in this step, and label the ranking practice.

**Answer:** Everything you found, in order of what it cost the person

Repeated actions and lost work sit above confusion. Confusion sits above slowness. On the rehearsal route, rank your rehearsal notes beside the six made-up findings from the practice in this step, and label the ranking practice.


### The worst one, in a sentence, with which session it came from (no names)

Section: practice-plan. Stable action: write-worst-finding.

Write your answer for “The worst one, in a sentence, with which session it came from (no names)”. Use the task instructions below to decide what to include.

**Answer:** The worst one, in a sentence, with which session it came from (no names)




### Predict and repair

Section: practice-plan. Stable action: step-4-brief.

A prediction written before the change, one change made, and an honest account of the re-test.

- Write what the repair should change before making it.
- Change one thing only.
- Re-test with at least one person who has not seen it, or re-walk it as a labelled rehearsal and write that no participant has seen it.

**Start here:** Write the prediction as something you could watch happening or not happening, then stop and make the change.

**Enough:** The prediction was written before the change and has not been edited since.

**Prediction:** What you expect to see afterwards, written down first so that the result is able to disagree with you.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Predicting that a changed button would stop the second taps, then changing three things at once and having nothing left to read.

**The prediction I wrote:** “Nobody taps book a second time.” Written down before I touched the drawing, which was the one part I did in the right order.

**What I then changed:** The button says Booking and stops accepting taps, and I moved it up the screen, and I shortened the wait before the confirmation. Three changes in one sitting.

**The re-test I could actually run:** Nobody was free that week, so I walked both tasks myself, twice, on an old phone I had never designed on. That is a rehearsal, and I wrote it down as one.

**What the rehearsal could not tell me:** Nothing was tapped twice, but I already knew where the button was. And had it gone badly, I could not have said which of my three changes was at fault.

**What I recorded instead:** The prediction, the one change I kept, the two I set aside for the next round, and a plain line saying no participant has seen this version.

**Wrong turn:** The wrong turn is making every improvement you can see while the file is open in front of you. Each one is defensible on its own, and together they make the result unreadable.

**Trade-off:** One change at a time means the two faults you already know about stay in the product until the next round, where somebody may meet them. You are buying a readable result with time.

**Unknown:** Still unknown: whether the changed button helps anybody who is not you. Walking your own design cannot answer that, and the answer has to be written down as missing rather than assumed.


### Written before you change anything: what the repair should change, and how you would see it

Section: practice-plan. Stable action: write-prediction.

Write your answer for “Written before you change anything: what the repair should change, and how you would see it”. Use the task instructions below to decide what to include.

**Answer:** Written before you change anything: what the repair should change, and how you would see it



<details>
<summary>Example</summary>

Example (made up): with the button changing on touch-down, nobody should tap it a second time.

</details>


### The one thing you changed

Section: practice-plan. Stable action: write-one-change.

Write your answer for “The one thing you changed”. Use the task instructions below to decide what to include.

**Answer:** The one thing you changed




### What happened on the re-test, including if the repair did not help or made something else worse

Section: practice-plan. Stable action: write-retest-result.

A repair that failed is a finding. Write it as it happened and leave the prediction beside it, unedited.

**Answer:** What happened on the re-test, including if the repair did not help or made something else worse

A repair that failed is a finding. Write it as it happened and leave the prediction beside it, unedited.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You ran all three sessions on your own laptop, because it was easier to set up. What did that cost you?

- Very little, since the interactions themselves behave the same on every device.
- Only the touch behaviour, which you can check separately on a phone afterwards.
- The conditions feedback failures need: a slower connection, a small screen and a finger.

<details>
<summary>After your attempt</summary>

Very little, since the interactions themselves behave the same on every device. — The interactions are the same and the conditions are not. Timing and touch accuracy are exactly what this lesson is testing.

Only the touch behaviour, which you can check separately on a phone afterwards. — Touch is one part of it. Connection speed and screen size change what people see and how long they wait to see it.

The conditions feedback failures need: a slower connection, a small screen and a finger. — A second tap almost never happens on the machine you designed on. Testing there hides the failure you were looking for.

Improve: Re-run at least one session on a phone you did not design on, add it to your record in step 2, then note the change in step 5.

Check again: At least one session record names a device that is not yours.

Answers to revisit: session-1, session-2, session-3, rehearsal-record, double-taps, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You make the repair, then write down what you expected it to do. Why is that weaker than writing it first?

- Any result will match it, because you wrote the expectation after seeing what happened.
- It is just as strong, provided the prediction you write down afterwards is an honest one.
- It is weaker only if someone else reads it, since you know what you really expected.

<details>
<summary>After your attempt</summary>

Any result will match it, because you wrote the expectation after seeing what happened. — A prediction is only useful while it can still turn out wrong. Written afterwards, it can only ever agree with the result.

It is just as strong, provided the prediction you write down afterwards is an honest one. — Honesty is not the issue. Nobody can un-see a result, and memory quietly rewrites what was expected to match it.

It is weaker only if someone else reads it, since you know what you really expected. — The person it misleads most is you, when you decide whether the repair worked and whether to keep going.

Improve: If your prediction in step 4 was written after the change, say so in that field and write a fresh prediction for the next repair, then record it in step 5.

Check again: The prediction stands as written, with the re-test result sitting beside it.

Answers to revisit: prediction, one-change, retest-result, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You re-test and the repair did not help. What do you write?

- What happened, beside the prediction it disagreed with, and what you now think was wrong.
- That the original finding was probably not real, since the repair made no difference.
- Nothing yet: repair it properly first, then write up only the version that finally worked.

<details>
<summary>After your attempt</summary>

What happened, beside the prediction it disagreed with, and what you now think was wrong. — A repair that failed tells you the cause was misread. That is worth more than a repair that worked for a reason nobody checked.

That the original finding was probably not real, since the repair made no difference. — The finding was watched happening. What failed is your explanation of why, and those are two different things.

Nothing yet: repair it properly first, then write up only the version that finally worked. — The failed attempt is the evidence that your explanation was wrong. Repairing again without recording it loses the only thing you learned.

Improve: If your retest-result in step 4 is empty, or records only success, write what actually happened including anything that did not improve, then note it in step 5.

Check again: The re-test result reads as an observation, whichever way it went.

Answers to revisit: prediction, one-change, retest-result, improvement-made

</details>


### Record what is untested

Section: practice. Stable action: step-5-brief.

Every claim you could not verify, a plain statement about assistive technology, and the repair the Check questions asked for.

- List every interaction claim you could not verify.
- State plainly that no test with assistive-technology users was run.
- Save the records, the ranking and the repair result.

**Start here:** Go through your key tables and focus rules marking each row tested or untested. The untested rows are the list.

**Enough:** Nothing in the untested list is written as though it had been checked.

**Assistive technology:** Tools people use to reach a product, such as software that speaks the screen aloud, or a switch pressed instead of a tap.

**Screen reader:** Software that reads a screen aloud in order, so somebody can use a product without seeing it.

**Untested claim:** A line in your specification written as though it were settled, which you never watched anybody meet.


### Every interaction claim you could not verify

Section: practice. Stable action: write-untested-list.

Write your answer for “Every interaction claim you could not verify”. Use the task instructions below to decide what to include.

**Answer:** Every interaction claim you could not verify




### Your plain statement about assistive technology

Section: practice. Stable action: write-assistive-note.

Write your answer for “Your plain statement about assistive technology”. Use the task instructions below to decide what to include.

**Answer:** Your plain statement about assistive technology



<details>
<summary>Example</summary>

Example (made up): no session was run with a screen-reader user, so every screen-reader row in my key tables is untested.

</details>


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Your decision for the new case, and why

Section: practice. Stable action: write-transfer-decision.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.

**New case.** Made-up case: in three sessions on participants’ own phones, two people pressed “Unlock car” twice because nothing changed for several seconds, one could not find “End trip”, and one said the map colours look dull. The designer wants to fix all four in one pass before testing again.

**Task:** Rank the findings by harm, choose the one repair to make first, and write the prediction you would check. Explain your ranking.

<details>
<summary>Compare after writing</summary>

- Weak: Fixes the dull colours first, or changes everything at once so the re-test cannot show which change helped.
- Adequate: Ranks the double unlock first (repeated actions can send duplicate requests), then End trip, with the colours last as a preference; makes one change, with a prediction written first such as “nobody presses Unlock twice”.
- Strong: As adequate, plus a re-test with someone new on a different phone, or a labelled rehearsal, and an untested list naming screen-reader use and older devices.

</details>

**Answer:** Your decision for the new case, and why

Optional: may be left empty.

Write your decision first, then the reason it fits this new case. Compare with the example answers only after writing.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. Module 10 asks how much fidelity a prototype actually needs.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Test the interactions and repair one
What I am trying to do: Test your interactions with up to three people on their own devices — or, if nobody is available, run a dated rehearsal and say so — rank what you find by harm, repair the worst with a prediction written first, and record what remains untested.

Key idea or terms:
Task: A goal you hand someone. It never names the control, or you have already taught them the answer.
Rehearsal: You walking the task yourself when nobody is available. It tells you about your design and nothing at all about people.
Second tap: Someone pressing the same thing again. It nearly always means nothing told them the first press had worked.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Ranking six findings by how bad they felt, then re-ranking them by what they actually cost. Top of the list was the confirmation screen looking unfinished. It had bothered me for a week, and someone finally said it out loud.

Activity: Before explaining the tool or method, ask me to predict what the next action will change. After I answer, explain the visible result and one common recovery step.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “The two tasks you will ask for, in the words you will actually say” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “The two tasks you will ask for, in the words you will actually say”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “The two tasks you will ask for, in the words you will actually say” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Re-run at least one session on a phone you did not design on and record the device.
- Re-read your notes for every moment someone acted twice and record it as a defect with its location.

- R05: [GOV.UK: moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing) — Planning and running a session, writing tasks and moderating without leading. Purpose: Supplies the session discipline for testing interactions rather than opinions. Free reading, no account. Verified 2026-09-06. Written for sessions with a built prototype and a note-taker; alone, run fewer tasks and claim less. Fallback: R12.
- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — Throttling profiles and disabling the cache. Purpose: Lets you reproduce the slow-connection conditions where feedback failures actually appear. Free documentation, no account; any Chromium browser. Verified 2026-09-06. Throttling simulates bandwidth and latency, not a connection that drops entirely. Fallback: R16.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Sessions were run on participants' own devices**

Adequate evidence: Records naming the devices used, or an explicit note where a participant's device was unavailable — or, on the rehearsal route, a dated statement that nobody was available and a self-run walkthrough on a device you did not design on, labelled rehearsal.

0 — Tested only on the designer's machine, with no limit stated.

1 — Mixed, without recording which device each session used.

2 — Participants' own devices used and recorded, or a rehearsal on another device clearly labelled as rehearsal.

3 — As adequate, and at least one older or slower device is included deliberately.

Repair: Re-run at least one session on a phone you did not design on and record the device. Recheck: The session records with devices.

**Double taps and lost actions are counted, not interpreted away**

Adequate evidence: A count of repeated actions with where each occurred, treated as defects.

0 — Repeated actions attributed to the participant.

1 — Noted without counting or locating.

2 — Counted, located and treated as feedback defects — or, on the rehearsal route, none claimed, with the supplied practice findings used for ranking.

3 — As adequate, and each is linked to the specific acknowledgement that was missing.

Repair: Re-read your notes for every moment someone acted twice and record it as a defect with its location. Recheck: The double-tap record.

**The repair carried a prediction and was re-tested**

Adequate evidence: A prediction written before the change, one change made, and a re-test with someone new.

0 — Repairs made without prediction or re-test.

1 — Several changes made together.

2 — One change, predicted first, re-tested with a fresh participant — or re-walked as a labelled rehearsal with the gap stated.

3 — As adequate, and a prediction that failed is analysed rather than explained away.

Repair: Write the prediction now for any repair not yet re-tested, then run it with someone new. Recheck: The prediction and re-test result.

**The untested list names assistive technology explicitly**

Adequate evidence: A written list of unverified claims, including screen-reader use and devices you do not own.

0 — No untested list.

1 — A general note about limited testing.

2 — Specific untested claims named, including assistive technology.

3 — As adequate, and the list says which untested claim would most change a decision.

Repair: Go through your key tables and focus rules and mark each row tested or untested. The untested rows are the list. Recheck: The untested list.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. Module 10 asks how much fidelity a prototype actually needs.

**Review criteria:**

- Sessions were run on participants' own devices
- Double taps and lost actions are counted, not interpreted away
- The repair carried a prediction and was re-tested
- The untested list names assistive technology explicitly

<details>
<summary>Reading, video and deeper explanation</summary>

- Device matters more here than anywhere else in the course. Timing, target size, gesture conflicts and scroll behaviour all change between a laptop with a trackpad and a four-year-old phone held in one hand. Testing your interactions on the machine you designed them on will confirm they work and tell you almost nothing.
- The double tap is the single most informative observation in interaction testing. It means the person did not believe their first action registered, which is a feedback failure whatever the underlying system did. Count them, note where they happen and treat each as a defect rather than as user error.
- Interaction problems mask each other. If focus is invisible and the tab order is wrong, you cannot tell which caused the confusion, so test one at a time where you can: a session on the keyboard route, a session on touch, a session on the reduced-motion setting. Fewer variables per session produces findings you can act on.
- The prediction discipline from m07 applies again: write what the repair should change before you re-test, or any outcome will read as an improvement. And write the untested list plainly — no screen-reader testing with a screen-reader user, no testing on a low-end device you do not own, no long-term use — because these are the claims most likely to be assumed later.

[GOV.UK: moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing).

</details>
