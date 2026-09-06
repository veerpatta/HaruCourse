# Product Design Foundations

Generated from src/lessons.ts and src/week2.ts. Legacy filename retained for existing links. Level 1 · Module 1. No deadlines; split any lesson across sessions.

## Lesson 1: From screens to product problems

Stable ID: week1-day1-v1. Core.

Use your visual-design experience while learning to judge whether a product helps someone accomplish a task.

### Learn

A product helps someone accomplish a goal repeatedly. Product design connects that goal to a viable service and an experience people can use. The screen is one part: instructions, waiting, support, and recovery also shape the experience.

UX concerns the whole experience of a task. UI concerns its controls, information, and presentation. Product design also asks which problem deserves attention and how a response fits business and technical constraints. Job titles overlap; judge actual responsibilities.

Your graphic-design skills help communicate clearly, but product decisions need evidence about use. A beautiful booking screen can fail if people cannot tell whether payment succeeded. Separate an output (a screen) from an outcome (people understand their booking status).

Designers explore and explain alternatives. Product managers coordinate priorities; engineers investigate feasibility and build behavior; researchers reduce uncertainty about people. Collaboration begins before polished mockups.

### Worked example

“Make Reserve bigger” is a proposed solution. People might instead struggle to find availability or understand the price. These are hypotheses until you collect evidence.

### Practice and pause points

- Learn (~25 min): Read the lesson and linked process overview. Define product design, UX, and UI in your own words.
- Observe (~20 min): Complete one task in a familiar app. Record the starting situation, goal, and actions without collecting private information.
- Separate evidence (~45 min): Make an observed / inferred / unknown table with five entries. Add a user goal and a possible business goal.
- Compare (~20 min): Propose one visual and one behavioral improvement. Explain how you would check each.
- Reflect (~10 min): Save your evidence and reflection. Pause whenever needed and return to unfinished work.

Pause after any step; save the artifact and next action.

### Output

A task walkthrough, five evidence/assumption entries, two goals, and two improvement hypotheses.

### Checks

- Is a larger button a problem statement? Answer: No. It prescribes a response. First identify who struggles, with what task, and what evidence shows the difficulty.
- Can a polished screen prove a better outcome? Answer: No. Craft and user outcomes need different evidence.

### Rubric

- A specific task and user goal
- Observations separated from assumptions
- One trade-off beyond appearance

If a criterion is missing, revise that part and request a recheck.

### Portfolio contribution

Process practice, not a validated case study.

Resource R01: [Design Council: the Double Diamond](https://www.designcouncil.org.uk/resources/the-double-diamond/). Module approved pair: R01 / R02; catalog restrictions apply.

## Lesson 2: Frame the problem before the feature

Stable ID: week1-day2-v1. Core.

Avoid polishing a solution to the wrong problem.

### Learn

A useful frame describes a person, situation, unmet goal, and consequence. “Attendees need to know what to bring before leaving home” leaves room for alternatives. “Attendees need a checkbox” already chooses a feature.

A stakeholder report is a lead, not proof of frequency or cause. Assumptions are not necessarily false; they are claims that still need checking. Write what would change your mind.

Expand options before narrowing them. Discover and define focus on understanding the problem; develop and deliver focus on responses. These are modes of work, not mandatory one-way stages.

Distinguish constraints such as time or device access from preferences. Investigate assumptions that combine weak evidence with serious consequences if wrong.

### Worked example

A reminder, materials summary, and checkbox are different responses to workshop preparation. A click on a checkbox does not prove comprehension.

### Practice and pause points

- Review (~20 min): Underline unverified explanations in the previous lesson’s notes.
- Frame (~25 min): Write three person–situation–goal–consequence statements for workshop attendance. Remove feature names.
- Prioritize uncertainty (~35 min): List six assumptions, their consequences, and your confidence. Pick two to investigate and describe disconfirming evidence.
- Explore (~30 min): Sketch three different responses. Note a constraint and weakness for each.
- Decide (~10 min): Choose the next investigation and explain why.

Pause after any step; save the artifact and next action.

### Output

Three problem frames, six assumptions, three alternatives, and an investigation decision.

### Checks

- Which assumption should be investigated first? Answer: One with weak evidence whose failure would materially change the design or harm users.

### Rubric

- Needs without prescribed features
- A way to reduce uncertainty
- Alternatives compared against constraints

If a criterion is missing, revise that part and request a recheck.

### Portfolio contribution

Keep the decision log as early reasoning evidence.

Resource R01: [Design Council: the Double Diamond](https://www.designcouncil.org.uk/resources/the-double-diamond/). Module approved pair: R01 / R02; catalog restrictions apply.

## Lesson 3: Ask about real experiences

Stable ID: week1-day3-v1. Core.

Learn from people without steering them toward your preferred answer.

### Learn

Begin with the uncertainty an interview should reduce. A research question guides your study; a participant question is the plain-language prompt used in conversation.

Ask about a recent specific experience. “Tell me about your last class booking” invites an account of behavior. “Would you use our helpful reminder?” invites prediction and agreement. Follow up without supplying the answer.

Explain the purpose, voluntary participation, and use of notes. Ask permission before recording. Avoid unnecessary identifying data and do not paste private research into AI tools.

One conversation does not establish prevalence. Separate quotations from interpretations. Label role-play as practice; never invent participants or findings when someone is unavailable.

### Worked example

Replace “Was checkout confusing because the button was hidden?” with “What happened when you tried to finish?” Then ask what the person expected.

### Practice and pause points

- Prepare (~25 min): Read the lesson and interview guide. Draft a purpose statement and consent introduction.
- Write (~35 min): Choose one Lesson 2 uncertainty. Draft six open questions and two neutral follow-ups. Remove predictions and leading language.
- Practice (~35 min): With consent, hold a 15-minute practice conversation and organize notes. If nobody is available, rehearse your guide and identify weaknesses; do not fabricate answers.
- Distinguish (~15 min): Separate observations, interpretations, and follow-ups. Mark evidence not collected when applicable.
- Improve (~10 min): Rewrite one weak question and save your guide.

Pause after any step; save the artifact and next action.

### Output

Research objective, consent introduction, question guide, labelled notes, and revised questions.

### Checks

- What if no participant is available? Answer: Improve the guide and arrange a later conversation. Mark evidence missing rather than inventing findings.

### Rubric

- Questions address uncertainty
- Neutral questions about experience
- Consent and limitations explicit

If a criterion is missing, revise that part and request a recheck.

### Portfolio contribution

Count research findings only when actually collected.

Resource R27: [GOV.UK: using in-depth interviews](https://www.gov.uk/service-manual/user-research/using-in-depth-interviews). Module approved pair: R01 / R02; catalog restrictions apply.

## Lesson 4: Map the task and its failures

Stable ID: week1-day4-v1. Core.

A usable flow helps people recover when things go wrong.

### Learn

A task flow shows actions and decisions from a trigger to an outcome. Start before the first screen: what brings someone here and what will count as done?

The happy path assumes success. Real flows also need empty, loading, error, permission, and interrupted states. Explain what happened and the next action; preserve input when retrying where possible.

Information architecture groups and labels content so people can find it. Use task language rather than internal department names, and show prerequisites before the decision that needs them.

Screen names alone do not explain transitions. A confirmation screen does not answer what happens when payment takes time, the last seat disappears, or someone closes the browser.

### Worked example

Workshop full → explain availability → offer another date. A payment timeout should distinguish checking status from confirmed failure to reduce accidental repeat payments.

### Practice and pause points

- Define (~20 min): Write the reservation trigger, successful outcome, and information needed before committing.
- Map (~40 min): Draw the workshop happy path with labelled actions, decisions, price, and materials.
- Recover (~35 min): Add full workshop, invalid input, and interrupted confirmation branches. Write a message and next action for each.
- Walk through (~15 min): Trace every branch aloud as a first-time visitor. Mark missing information and dead ends.
- Revise (~10 min): Repair a dead end and explain the change.

Pause after any step; save the artifact and next action.

### Output

One annotated flow with three failures and recovery messages.

### Checks

- What is missing from a list of screens? Answer: Actions, conditions, transitions, and recovery that explain how a person reaches the outcome.

### Rubric

- Clear primary outcome
- Three recoverable exceptions
- Prerequisites before commitment

If a criterion is missing, revise that part and request a recheck.

### Portfolio contribution

Early untested flow evidence for the practice project.

Resource R01: [Design Council: the Double Diamond](https://www.designcouncil.org.uk/resources/the-double-diamond/). Module approved pair: R01 / R02; catalog restrictions apply.

## Lesson 5: Make the interface understandable

Stable ID: week1-day5-v1. Core.

Turn the flow into screens that support different abilities and device widths.

### Learn

Hierarchy expresses what matters for the next decision. Size, spacing, grouping, language, and contrast work together. Do not rely on color alone for essential meaning.

Responsive design means reflow and priority, not shrinking a desktop layout. Explain what stacks, wraps, stays visible, and moves. Longer labels and larger text reveal hidden assumptions.

Accessibility concerns whether people can perceive, understand, navigate, and operate the experience. A mockup can specify labels and focus order; implemented keyboard and screen-reader behavior require runtime testing.

Use persistent input labels, plain instructions, nearby error messages, and a logical reading order. Explain how to correct an error and retain entered values. Record what you checked and what remains untested.

### Worked example

The Email label stays visible after typing. The materials summary stays before Reserve on mobile instead of disappearing into a desktop sidebar.

### Practice and pause points

- Learn (~25 min): Read the lesson and W3C introduction. Choose three considerations relevant to your flow.
- Sketch (~45 min): Create workshop details and reservation screens at narrow and wide widths using paper or a familiar tool. Prioritize content before decoration.
- Specify (~25 min): Annotate labels, reading/focus order, recovery, and stacking. Identify checks requiring code.
- Critique (~15 min): Compare against Lesson 4’s flow and add one missing state.
- Submit (~10 min): Reference the flow/screens and explain the main unresolved issue. Mark ready only when evidence is present.

Pause after any step; save the artifact and next action.

### Output

Two screens at two widths, behavior/accessibility annotations, and an error state.

### Checks

- Does a mockup prove keyboard accessibility? Answer: No. It specifies intent. Test the implemented interaction.
- Why use a persistent label? Answer: It identifies the value after typing, when a placeholder is no longer visible.

### Rubric

- Task-based hierarchy
- Explained responsive behavior
- Labels and recovery
- Evidence-bounded accessibility claims

If a criterion is missing, revise that part and request a recheck.

### Portfolio contribution

Creator review is required before portfolio-ready claims.

Resource R28: [W3C: introduction to web accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/). Module approved pair: R01 / R02; catalog restrictions apply.

## Lesson 6: Critique and repair one weak point

Stable ID: week1-day6-v1. Optional.

Use optional catch-up time to improve evidence, not add more tools.

### Learn

Useful critique links an observation to task impact. “Messy” is vague. “Materials appear after commitment, so people may reserve before understanding preparation” gives a concrete concern.

Separate severity from taste. Fix primary-task blockers before decoration. Choose one bounded repair and describe how you would check whether it helps.

Keep the previous version to explain iteration. This is an optional lesson; rest or catch up if five core sessions fill your capacity.

### Worked example

Replace an unexplained disabled Reserve button with availability information and another date. Check whether a visitor can identify the next step.

### Practice and pause points

- Review (~20 min): Choose one weak criterion from the module.
- Critique (~25 min): Write observation, impact, evidence, and uncertainty. Request creator input if available.
- Repair (~45 min): Revise one flow or screen while retaining the original.
- Compare (~20 min): Explain the change and remaining uncertainty.
- Save (~10 min): Reference both versions. Resting instead does not count as a failed required lesson.

Pause after any step; save the artifact and next action.

### Output

A before/after repair with specific critique and limitations.

### Checks

- What makes feedback actionable? Answer: A concrete observation, task impact, evidence or uncertainty, and a bounded next action.

### Rubric

- Task-impact priority
- Repair addresses the issue
- Limitations preserved

If a criterion is missing, revise that part and request a recheck.

### Portfolio contribution

Potential iteration evidence with an honest explanation.

Resource R28: [W3C: introduction to web accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/). Module approved pair: R01 / R02; catalog restrictions apply.

## Lesson 7: Explain decisions and plan your next steps

Stable ID: week1-day7-v1. Optional.

Practice the written communication needed for remote collaboration.

### Learn

A decision story connects context, evidence, alternatives, choice, and next check. Explain one trade-off rather than narrating every screen or activity.

Match claims to evidence. A concept can show reasoning and craft, but not a production conversion gain. Distinguish proposals, observations, and untested outcomes.

Review actual hours before adding work. Reduce scope if the work felt too heavy. Rest is valid on this optional lesson; next steps should follow gaps rather than tool trends.

### Worked example

“I moved materials before reservation because preparation is the reported concern. A checkbox records a click, not comprehension. I still need to observe visitors using the summary.”

### Practice and pause points

- Select (~20 min): Gather evidence for one decision.
- Write (~35 min): Write one page: context, evidence, options, choice, trade-off, next check.
- Present (~25 min): Explain it aloud in five minutes, review the explanation, and repeat once.
- Plan (~30 min): List actual hours, an evidence-backed strength, two gaps, and one bounded repair. Request review.
- Save (~10 min): Save the note and plan. Do not infer mastery from one module.

Pause after any step; save the artifact and next action.

### Output

A decision note and plan for the next five core sessions.

### Checks

- What can an unshipped concept demonstrate? Answer: Work you produced and tests you actually ran, with limitations—not unobserved production outcomes.

### Rubric

- Clear choice and alternative
- Evidence-matched claims
- Gap-based next steps

If a criterion is missing, revise that part and request a recheck.

### Portfolio contribution

Rehearsal for a future case-study presentation.

Resource R01: [Design Council: the Double Diamond](https://www.designcouncil.org.uk/resources/the-double-diamond/). Module approved pair: R01 / R02; catalog restrictions apply.
