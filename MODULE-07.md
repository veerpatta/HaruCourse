# Flows and wireframes

Generated from src/module7.ts; edit that source, then run npm run docs:generate. Level 2 · Module m07 · requirement areas 6, 7. Optional effort 30 hours across 13 lessons: 26 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m06. This is guidance for meaningful practice, not a lock. Module approved resource pair: R11 / R12. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: Draw the flow, including how people arrive and leave

Stable ID: m07-l01-v1. Core. Areas 6. Optional effort ~120 min.

**Objective.** Draw one end-to-end flow with every entry point, decision, system state and exit marked, and list the three moments where a person is most likely to stop — with the evidence for each.

**Bring forward.** Your m06 structure and change note, and the m05 journey map. The map showed the journey as experience over time; a flow states it precisely enough to build.

A flow is the first artefact that has to be exactly right. A vague journey map is still useful; a vague flow produces screens for the parts you thought about and silence for the parts you did not, which are the parts people get stuck in.

### Learn

A flow has four kinds of node and most beginners draw only one. Actions are what the person does. Decisions are points where the path forks, and the fork belongs to the person or to the system — “do they have an account?” is a system decision the person never sees and still shapes everything. States are what the system is doing while they wait: submitted, pending, failed, expired. And exits are how the flow ends, including the ways it ends badly — abandoned, timed out, transferred to a phone call.

Entry points are plural and you rarely control them. People arrive at a booking from a search engine on a class page rather than a home page, from a friend's forwarded link, from a message with a half-remembered detail, or by returning three days later on a different phone. Draw each real entry you have evidence for, because a flow that begins at a home page nobody visits describes a product nobody uses.

Mark what has to be true before each step, and what the person must be holding. To pay, someone needs an amount they trust, a payment method to hand and often a decision from someone else. Prerequisites drawn on the flow are how you notice that your third screen asks for something the person cannot possibly have yet — the single most common structural fault in a first flow, and it is invisible until the prerequisites are written down.

Waiting is part of the flow, not an absence of it. Anything involving payment, another person, or a network can hold someone in an ambiguous state, and that state needs its own node, its own message and its own way out. A flow that draws payment as a single arrow between two screens has hidden precisely where people pay twice, ring the shop or give up.

**Common misconception.** “The flow is the happy path, and errors are edge cases we will add later.” The recovery paths are where most of the design work lives and where the trust is won or lost. Added later, they get bolted onto screens whose layouts already assumed everything went well, which is why so many error messages appear in places nobody looks.

### Worked example

A booking flow redrawn with all four node kinds grew from six boxes to nineteen. Three entry points were real, and only one was the home page. Two decisions turned out to be system decisions the person never saw — whether a place was still available, and whether their earlier session had expired — and both had been drawn as if the person chose. Two states had been missing entirely: payment pending, where the observation session in m05 had shown someone standing at a window waiting, and place-held-but-unconfirmed. Four exits existed, of which only one was success: the others were abandonment at the price, expiry of a held place, and ringing the provider instead — the last being the most common ending in the research and the one nobody had drawn.

#### Draw the flow, including how people arrive and leave

Draw one end-to-end flow with every entry point, decision, system state and exit marked, and list the three moments where a person is most likely to stop — with the evidence for each.

**Where to work:** Paper and a pencil, photographed. Boxes and arrows drawn by hand are faster to change than any diagram tool, and at this stage changing it often is the point. If you want it digital later, an indented text list of steps with their decisions works and diffs cleanly.

- Starting material: Your m06 structure and change note, and the m05 journey map. The map showed the journey as experience over time; a flow states it precisely enough to build.
- Create HaruCourse/Practice/m07-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Draw the flow, including how people arrive and leave

Input artifact: Your m06 structure and change note, and the m05 journey map. The map showed the journey as experience over time; a flow states it precisely enough to build.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A one-page flow using distinct notation for actions, decisions, states and exits, showing every evidenced entry point and every ending, with prerequisites and waits marked and three evidenced stopping points named.

## 1. Read the multi-step patterns
- Read the assigned patterns for tasks that take several steps. Note how each handles progress, review and returning later.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Draw the spine
- Draw the main path from a real entry point to a successful outcome, using distinct shapes for actions, decisions, states and exits. Keep it to one page.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Add the other entries and exits
- Add every entry point you have evidence for, and every way the flow can end, including abandonment, expiry and moving to a phone call.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Mark prerequisites and waits
- For each step write what must be true and what the person must be holding. Add a node for every wait, including anything depending on another person.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Name the stopping points and pause
- Mark the three places a person is most likely to stop, and write the evidence for each — an observation, a quotation, a tree-test failure. Save the flow.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Actions, decisions, states and exits are distinguished: [evidence reference]
- Every evidenced entry point and ending appears: [evidence reference]
- Prerequisites and waits are marked on the flow: [evidence reference]
- Stopping points are named with evidence: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Go through your flow and label each node with one of the four words. Anything you cannot label is probably a screen name rather than a step.

</details>

<details>
<summary>Hint 2</summary>

List how each m05 participant actually arrived and how each session actually ended. Add every one to the flow.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m07-l01-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Actions, decisions, states and exits are distinguished: A flow using visibly different notation for the four kinds, with a small key. Every evidenced entry point and ending appears: Multiple entry points drawn from real evidence, and every ending including abandonment and transfer to another channel. Prerequisites and waits are marked on the flow: A prerequisite note on each step and a node for every wait, including waits on other people. Stopping points are named with evidence: Three marked stopping points, each with a source — an observation, a quotation or a test result.

**Bring forward:** Core project evidence. A flow showing real entry points, waits and unsuccessful endings reads as work done from research; a flow of five happy screens reads as work done from imagination. Module handoff: Build the interface in m08


### Practice and pause points

- Read the multi-step patterns (~25 min): Read the assigned patterns for tasks that take several steps. Note how each handles progress, review and returning later.
- Draw the spine (~30 min): Draw the main path from a real entry point to a successful outcome, using distinct shapes for actions, decisions, states and exits. Keep it to one page.
- Add the other entries and exits (~25 min): Add every entry point you have evidence for, and every way the flow can end, including abandonment, expiry and moving to a phone call.
- Mark prerequisites and waits (~25 min): For each step write what must be true and what the person must be holding. Add a node for every wait, including anything depending on another person.
- Name the stopping points and pause (~15 min): Mark the three places a person is most likely to stop, and write the evidence for each — an observation, a quotation, a tree-test failure. Save the flow.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper and a pencil, photographed. Boxes and arrows drawn by hand are faster to change than any diagram tool, and at this stage changing it often is the point. If you want it digital later, an indented text list of steps with their decisions works and diffs cleanly.

### Output

A one-page flow using distinct notation for actions, decisions, states and exits, showing every evidenced entry point and every ending, with prerequisites and waits marked and three evidenced stopping points named.

### Checks

- Why draw system decisions the person never sees? Answer: Because they change what the person meets next. Availability, session expiry and account status all fork the flow invisibly, and if they are not on the diagram nobody designs what the person sees when the fork goes the other way.
- What does marking prerequisites catch? Answer: Steps that ask for something the person cannot yet have — a total they have not been shown, a decision from someone who is not present, a document at home. It is the commonest structural fault in a first flow and is invisible until written down.
- Why does waiting need its own node? Answer: Because a person in an ambiguous state needs a message, a way out and often reassurance that their money is safe. Drawn as an arrow, waiting gets no design at all, and that is where people pay twice.

### Rubric and remediation

**Actions, decisions, states and exits are distinguished**

Adequate evidence: A flow using visibly different notation for the four kinds, with a small key.

- 0 — A sequence of screens joined by arrows.
- 1 — Actions and decisions distinguished, states and exits missing.
- 2 — All four kinds present and visually distinct, with a key.
- 3 — As adequate, and system decisions are marked separately from decisions the person makes.

If below 2: Go through your flow and label each node with one of the four words. Anything you cannot label is probably a screen name rather than a step. Show at recheck: The relabelled flow with its key.

**Every evidenced entry point and ending appears**

Adequate evidence: Multiple entry points drawn from real evidence, and every ending including abandonment and transfer to another channel.

- 0 — One entry point and one successful ending.
- 1 — Several entries or several endings, but not both.
- 2 — All evidenced entries and all endings, including the unsuccessful ones.
- 3 — As adequate, and the most common real ending in your research is identified even if it is not success.

If below 2: List how each m05 participant actually arrived and how each session actually ended. Add every one to the flow. Show at recheck: The flow with entries and endings.

**Prerequisites and waits are marked on the flow**

Adequate evidence: A prerequisite note on each step and a node for every wait, including waits on other people.

- 0 — Neither marked.
- 1 — Prerequisites noted on some steps; waiting still drawn as an arrow.
- 2 — Both marked throughout.
- 3 — As adequate, and one step is moved or split because its prerequisite could not be met when it was asked for.

If below 2: For each step write “to do this they must already have …”. Then find every place the system or another person takes time and give it a node. Show at recheck: The annotated flow.

**Stopping points are named with evidence**

Adequate evidence: Three marked stopping points, each with a source — an observation, a quotation or a test result.

- 0 — No stopping points, or points chosen by intuition.
- 1 — Points named but with no evidence attached.
- 2 — Three points named, each with its evidence.
- 3 — As adequate, and one stopping point contradicts what you expected before the research, with that noted.

If below 2: Go back to your m05 notes and m06 test results and find the moments where people actually stopped. Use those rather than the ones that feel risky. Show at recheck: The three stopping points with sources.

### Portfolio contribution

Core project evidence. A flow showing real entry points, waits and unsuccessful endings reads as work done from research; a flow of five happy screens reads as work done from imagination.

### Assigned resources

- R11: [GOV.UK Design System: patterns](https://design-system.service.gov.uk/patterns/) — The task list, check answers and complete related tasks patterns. Purpose: Shows how multi-step tasks handle progress, review and resumption — the structural questions a flow has to answer. Effort: 45–60 selected min. Free reading, no account. Verified 2026-09-06. These are patterns for multi-step government tasks, not a general navigation library, and their visual style is a government design system rather than a universal aesthetic; take the structure, not the look. Fallback: R02.
- R35: [GOV.UK: start by learning user needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs) — Needs across the whole journey, including before and after the product. Purpose: Keeps entry points and endings anchored to what people are actually doing rather than to where your product starts. Effort: 10–20 min. Free reading, no account. Verified 2026-09-06. It is about need statements rather than flow notation, which is this lesson's own. Fallback: R08.

## Lesson 2: First run: what must be learned now and what can wait

Stable ID: m07-l02-v1. Core. Areas 6. Optional effort ~120 min.

**Objective.** Design an onboarding path that lets someone reach a first real outcome without setup they do not yet need, and list every piece of information you deferred with the moment it becomes necessary.

**Bring forward.** Your flow and the entry points on it. Onboarding is not a separate product: it is the first pass through the same flow by someone who knows nothing.

Most onboarding asks for things before the person has any reason to care, which is why people abandon at setup screens. The design question is not how to explain your product; it is how little someone can know and still succeed once.

### Learn

Separate what someone must know now from what they can learn by using the thing. Must-know is anything without which the next action is impossible or dangerous: what this costs, what they are committing to, whether their data is shared. Everything else — features, preferences, profile details — can wait for the moment it matters, at which point it is easy to explain because the person now has a reason to listen.

A tour is not onboarding. Sequential overlays explaining the interface are read as an obstacle, forgotten immediately, and are usually a sign the interface itself needs work: if a screen requires a tour, the screen is the problem. Prefer showing a person something they recognise — a familiar pattern, sensible defaults, an example already filled in — because recognition costs almost nothing and recall costs a great deal, which the assigned reading covers directly.

Empty states are onboarding. The first screen of a product with no content yet is doing more teaching than any tour: it should say what will appear here, why, and what one action would produce the first item. A blank list with a plus button teaches nothing; a blank list saying “your bookings appear here — find a class to make your first one” teaches the model and offers the next step in one sentence.

Ask for setup at the moment it buys the person something. A phone number requested at registration is a cost with no benefit; the same request at the point of holding a place is obviously worth it. Deferral has a cost you must state — you will have less complete records and some flows will interrupt later — so record what you deferred and where it becomes necessary, rather than deferring everything and hoping.

**Common misconception.** “People need to be shown the features or they will not find them.” People find the features they have a reason to look for. Showing everything at the start reliably produces a person who remembers none of it and now believes the product is complicated. Teach at the moment of need, where the explanation is short and the motivation is present.

### Worked example

A first-run flow that asked for name, phone number, interests and notification preferences before showing a single class was rebuilt to ask for nothing. A first-time visitor could browse, see full prices, see what to bring and reach the booking step before anything was requested; there the flow asked for a name and a phone number, and said why — “so we can tell you if the class is cancelled” — which is a benefit rather than a form. The empty bookings list said what would appear there and linked to Saturday's classes. Deferred items were listed with their trigger: interests at the point of a second booking, notification preferences only after the first confirmation, and nothing else at all.

#### First run: what must be learned now and what can wait

Design an onboarding path that lets someone reach a first real outcome without setup they do not yet need, and list every piece of information you deferred with the moment it becomes necessary.

**Where to work:** Sketched screens on paper with the empty-state wording written out in full. Writing the words before drawing is the whole technique here, and it needs nothing but a pen.

- Starting material: Your flow and the entry points on it. Onboarding is not a separate product: it is the first pass through the same flow by someone who knows nothing.
- Create HaruCourse/Practice/m07-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# First run: what must be learned now and what can wait

Input artifact: Your flow and the entry points on it. Onboarding is not a separate product: it is the first pass through the same flow by someone who knows nothing.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A first-run path reaching a real outcome with minimum prerequisites, a two-column must-know and can-wait split, a deferral list with triggers and costs, and written wording for every empty state.

## 1. Read on recognition and patterns
- Read the assigned article on recognition versus recall and the patterns for starting a multi-step task. Note what each says about reducing what a person has to remember.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Split must-know from can-wait
- List everything your product currently asks for or explains at the start. Split it into what makes the next action possible and what does not. Be strict; the second list should be longer.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Design the shortest path to a first outcome
- Redraw the first-run path so someone reaches a real outcome with the minimum they must know. Mark where each deferred item now gets asked for and what it buys the person there.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Write the empty states
- Write the wording for every empty state in the flow: what appears here, why, and the one action that produces the first item. Use your m06 labels.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record the cost and pause
- Write what deferring each item costs — less complete records, an interruption later, a support question — and which deferrals you are least sure about. Save the path and the deferral list.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Must-know and can-wait are separated strictly: [evidence reference]
- A first real outcome is reachable with minimum prerequisites: [evidence reference]
- Every empty state has written wording: [evidence reference]
- Deferrals record their trigger and their cost: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

For each must-know item, write which action becomes impossible without it. Items with no answer move to can-wait.

</details>

<details>
<summary>Hint 2</summary>

Count the screens and fields before the first real outcome in both versions. If the number did not fall, nothing was actually deferred.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m07-l02-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Must-know and can-wait are separated strictly: Two lists, with must-know limited to what makes the next action possible or safe. A first real outcome is reachable with minimum prerequisites: A redrawn path where a new person reaches a genuine outcome, with the prerequisites counted before and after. Every empty state has written wording: Wording for each empty state saying what appears, why and the next action, using your m06 labels. Deferrals record their trigger and their cost: A list of deferred items, each with the moment it is asked for and what deferring it costs.

**Bring forward:** Project evidence, and a strong before-and-after: prerequisites before the first outcome is a number you can put in a case study honestly, because it is a property of your design rather than a claim about users. Module handoff: Build the interface in m08


### Practice and pause points

- Read on recognition and patterns (~25 min): Read the assigned article on recognition versus recall and the patterns for starting a multi-step task. Note what each says about reducing what a person has to remember.
- Split must-know from can-wait (~25 min): List everything your product currently asks for or explains at the start. Split it into what makes the next action possible and what does not. Be strict; the second list should be longer.
- Design the shortest path to a first outcome (~30 min): Redraw the first-run path so someone reaches a real outcome with the minimum they must know. Mark where each deferred item now gets asked for and what it buys the person there.
- Write the empty states (~25 min): Write the wording for every empty state in the flow: what appears here, why, and the one action that produces the first item. Use your m06 labels.
- Record the cost and pause (~15 min): Write what deferring each item costs — less complete records, an interruption later, a support question — and which deferrals you are least sure about. Save the path and the deferral list.

Pause after any step; save the artifact and next action.

**Free tool path.** Sketched screens on paper with the empty-state wording written out in full. Writing the words before drawing is the whole technique here, and it needs nothing but a pen.

### Output

A first-run path reaching a real outcome with minimum prerequisites, a two-column must-know and can-wait split, a deferral list with triggers and costs, and written wording for every empty state.

### Checks

- Why is a feature tour usually a poor answer? Answer: Because it is read as an obstacle to what the person came for, and it is forgotten before it becomes relevant. It also masks the real problem: a screen that needs a tour is a screen that needs redesigning.
- What should an empty state contain? Answer: What will appear here, why it will appear, and the single action that produces the first item. It is the clearest teaching moment in the product and is usually wasted on a blank panel.
- When should you ask for a phone number? Answer: At the moment it buys the person something they want — being told if the class is cancelled, for example — and with that reason stated. Asked at registration it is a cost with no visible benefit, which is what people abandon.

### Rubric and remediation

**Must-know and can-wait are separated strictly**

Adequate evidence: Two lists, with must-know limited to what makes the next action possible or safe.

- 0 — No separation; everything is treated as necessary.
- 1 — A separation that leaves most items in must-know.
- 2 — A strict split with must-know limited to what the next action requires.
- 3 — As adequate, and one item is moved to must-know for a safety or money reason with that reason stated.

If below 2: For each must-know item, write which action becomes impossible without it. Items with no answer move to can-wait. Show at recheck: The two lists with justifications.

**A first real outcome is reachable with minimum prerequisites**

Adequate evidence: A redrawn path where a new person reaches a genuine outcome, with the prerequisites counted before and after.

- 0 — Setup still precedes any outcome.
- 1 — Some setup deferred but the first outcome is still a configuration step.
- 2 — A real outcome is reachable, with the reduction in prerequisites shown.
- 3 — As adequate, and the path was walked by someone unfamiliar with the product, with what they asked recorded.

If below 2: Count the screens and fields before the first real outcome in both versions. If the number did not fall, nothing was actually deferred. Show at recheck: The two counts and the redrawn path.

**Every empty state has written wording**

Adequate evidence: Wording for each empty state saying what appears, why and the next action, using your m06 labels.

- 0 — Empty states unaddressed or shown as blank panels.
- 1 — Wording for some, or wording that only names the section.
- 2 — All three elements written for every empty state.
- 3 — As adequate, and one empty state also handles the case where the list is empty because of a filter rather than because nothing exists.

If below 2: List every screen that can be empty, including filtered lists and cancelled items, and write the three elements for each. Show at recheck: The empty-state wording.

**Deferrals record their trigger and their cost**

Adequate evidence: A list of deferred items, each with the moment it is asked for and what deferring it costs.

- 0 — Items deferred with no record.
- 1 — Triggers recorded but no costs.
- 2 — Both recorded for every deferral.
- 3 — As adequate, and the least certain deferral is named with what would settle it.

If below 2: For each deferred item write when it is asked for and what goes wrong because you waited. A deferral with no cost is usually a request you can remove entirely. Show at recheck: The deferral list.

### Portfolio contribution

Project evidence, and a strong before-and-after: prerequisites before the first outcome is a number you can put in a case study honestly, because it is a property of your design rather than a claim about users.

### Assigned resources

- R33: [NN/g: recognition and recall](https://www.nngroup.com/articles/recognition-and-recall/) — Recognition versus recall and the interface implications. Purpose: Explains why showing and defaulting beats explaining, and why a tour is remembered so poorly. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. It does not cover Miller's limit; if you need chunk limits use the assigned Laws of UX page, with the caution recorded there. Fallback: R31.
- R11: [GOV.UK Design System: patterns](https://design-system.service.gov.uk/patterns/) — The start pattern and the task list pattern, read for how a first pass through a long task is introduced. Purpose: Shows a worked approach to beginning a multi-step task without front-loading setup. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Government service patterns assume a citizen with an obligation rather than a customer who can leave; adapt the structure and question the motivation. Fallback: R02.

## Lesson 3: Getting in and getting back in

Stable ID: m07-l03-v1. Core. Areas 6, 7. Optional effort ~120 min.

**Objective.** Design the sign-in, sign-up and recovery paths for your product, including the shared-device and lost-access cases, with every form field labelled, every error message written and the recovery path shown to work without the thing that was lost.

**Bring forward.** Your flow and the deferral list. Whatever you deferred to “when they have an account” now needs an account path that people can actually complete.

Authentication is where products lose people who already wanted to use them. It is also the part most often designed from the happy path, and the recovery case — the person who cannot get in — is the one that decides whether they ever come back.

### Learn

Every field in an authentication form needs a persistent, visible label, an accessible error message tied to the field, and input that survives a failed attempt. The assigned forms tutorial covers labels, instructions, validation and notifications precisely, and these are not stylistic preferences: a placeholder that disappears when typing, an error at the top of the page with no link to the field, or a form that clears itself after a mistake are the three reliable ways to make a person give up on their third attempt.

Recovery must not depend on the thing that was lost. If a person cannot sign in because they have lost access to the phone number they registered with, sending a code to that number is not a recovery path, it is the same wall. Design at least one route that uses a different factor, and be explicit about what happens when someone genuinely has nothing: a way to reach a human is a legitimate part of the design and belongs on the flow rather than being left to the support inbox.

Shared and borrowed devices are ordinary, not an edge case — in India and in many contexts a phone is shared within a family, and a person may book from someone else's device once and never again. That has design consequences: staying signed in by default can expose one person's bookings to another; sending a code to a shared phone may reach the wrong person; and “remember me” has to be a visible choice rather than an assumption. Design for the borrowed device and the sole-device person, not only for the individual with their own laptop.

Ask what the account is actually for before designing it. Sometimes the answer is nothing: a booking can be identified by a reference and a phone number, and forcing an account is an obstacle that costs you the booking. Where an account genuinely serves the person — seeing history, changing a booking, not re-entering details — say which of those it provides, and let the identity requirement follow from that rather than from habit.

**Common misconception.** “More authentication steps mean better security.” They mean more failure points, and the commonest response to a wall is not a more careful person but a person who writes the password down, reuses one, or leaves. Security decisions are trade-offs against access, and a design that locks out the legitimate person has not made anyone safer.

### Worked example

A booking product asked people to register before seeing a price. Rebuilt: no account to browse or book, a booking reference plus phone number to look up a booking later, and an optional account for people who book often. Sign-in offered a code to phone or email, and recovery worked from either — because in the observation session a participant had changed her number and could no longer receive codes. On a shared device, “stay signed in” was off by default with the choice visible, and the confirmation screen offered “finish and sign out” explicitly. Every error message was written out: “That code has expired — request a new one” rather than “Invalid credentials”, and every failed attempt kept the phone number the person had already typed.

#### Getting in and getting back in

Design the sign-in, sign-up and recovery paths for your product, including the shared-device and lost-access cases, with every form field labelled, every error message written and the recovery path shown to work without the thing that was lost.

**Where to work:** Paper screens with the real message wording written on them. If you want to check the field behaviour, a single local HTML file with labelled inputs shows you what happens on a failed submission without any framework or account.

- Starting material: Your flow and the deferral list. Whatever you deferred to “when they have an account” now needs an account path that people can actually complete.
- Create HaruCourse/Practice/m07-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Getting in and getting back in

Input artifact: Your flow and the deferral list. Whatever you deferred to “when they have an account” now needs an account path that people can actually complete.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Sign-up, sign-in and recovery paths drawn on the flow, a stated purpose for the account with a no-account path, written wording for every error and confirmation attached to its field, and a recorded shared-device walkthrough with the changes it forced.

## 1. Read the forms guidance
- Read the assigned sections on labels, instructions, validation and user notifications. List the rules you will apply to every field.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Decide what the account is for
- Write what an account gives the person, and design the path for someone who never creates one. If nothing on your list benefits the person, remove the requirement.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Draw sign-up, sign-in and recovery
- Draw all three paths on your flow, including at least one recovery route that does not depend on the lost factor, and the ending for someone with nothing left — a route to a person.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Write every message
- Write the exact wording for each error and confirmation: what happened, what to do next, and what was kept. Attach each error to its field.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Walk the shared device and pause
- Walk the flow as someone using a family member's phone: what stays signed in, who receives the code, what the next person sees. Record the changes this forces. Save the paths and the messages.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Every field has a persistent label and a field-level error: [evidence reference]
- Recovery works without the lost factor: [evidence reference]
- The shared-device case is designed, not assumed away: [evidence reference]
- The account's purpose is stated or the requirement removed: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

List every field and write its label, its instruction and its error text. Any error that could apply to two fields is not yet field-level.

</details>

<details>
<summary>Hint 2</summary>

Walk the flow as someone who has changed their phone number and lost the email password. Draw what they can actually do.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m07-l03-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every field has a persistent label and a field-level error: Field-by-field wording showing labels that remain visible and error messages tied to specific fields, with input preserved. Recovery works without the lost factor: At least one recovery route using a different factor, plus a defined ending for someone with nothing left. The shared-device case is designed, not assumed away: A walkthrough on a borrowed or shared device with the resulting design changes recorded. The account's purpose is stated or the requirement removed: A written statement of what the account gives the person, plus a working path for someone who does not create one.

**Bring forward:** Project evidence, and a genuinely differentiating one: most junior portfolios show a sign-up screen and no recovery path. Showing the shared-device walkthrough demonstrates you design for the conditions people actually use products in. Module handoff: Build the interface in m08


### Practice and pause points

- Read the forms guidance (~25 min): Read the assigned sections on labels, instructions, validation and user notifications. List the rules you will apply to every field.
- Decide what the account is for (~25 min): Write what an account gives the person, and design the path for someone who never creates one. If nothing on your list benefits the person, remove the requirement.
- Draw sign-up, sign-in and recovery (~30 min): Draw all three paths on your flow, including at least one recovery route that does not depend on the lost factor, and the ending for someone with nothing left — a route to a person.
- Write every message (~25 min): Write the exact wording for each error and confirmation: what happened, what to do next, and what was kept. Attach each error to its field.
- Walk the shared device and pause (~15 min): Walk the flow as someone using a family member's phone: what stays signed in, who receives the code, what the next person sees. Record the changes this forces. Save the paths and the messages.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper screens with the real message wording written on them. If you want to check the field behaviour, a single local HTML file with labelled inputs shows you what happens on a failed submission without any framework or account.

### Output

Sign-up, sign-in and recovery paths drawn on the flow, a stated purpose for the account with a no-account path, written wording for every error and confirmation attached to its field, and a recorded shared-device walkthrough with the changes it forced.

### Checks

- Why must recovery avoid the lost factor? Answer: Because otherwise it is not recovery. Sending a code to the phone number the person no longer has is the same wall with a friendlier label; a real recovery path uses a different factor or reaches a human.
- Why is preserving input after a failed attempt a design requirement? Answer: Because retyping everything after one mistake is where people give up, and the mistake was usually small. Keeping what they typed also tells them the system noticed only the one problem, which is reassuring rather than punishing.
- When should a product not require an account? Answer: When the account gives the person nothing they want. If a reference number and a phone number identify a booking well enough, requiring registration is an obstacle that costs bookings and buys the person nothing.

### Rubric and remediation

**Every field has a persistent label and a field-level error**

Adequate evidence: Field-by-field wording showing labels that remain visible and error messages tied to specific fields, with input preserved.

- 0 — Placeholders used as labels, or errors only at page level.
- 1 — Labels present but errors generic or detached from fields.
- 2 — Persistent labels, field-level errors, and preserved input throughout.
- 3 — As adequate, and one message states what was kept so the person knows they need not retype it.

If below 2: List every field and write its label, its instruction and its error text. Any error that could apply to two fields is not yet field-level. Show at recheck: The field-by-field table.

**Recovery works without the lost factor**

Adequate evidence: At least one recovery route using a different factor, plus a defined ending for someone with nothing left.

- 0 — Recovery depends on the lost factor.
- 1 — An alternative exists but is not drawn or is unavailable to your real users.
- 2 — A genuine alternative route and a route to a human are both on the flow.
- 3 — As adequate, and the design states what identity check the human route uses, so it is not simply an unspecified promise.

If below 2: Walk the flow as someone who has changed their phone number and lost the email password. Draw what they can actually do. Show at recheck: The recovery paths on the flow.

**The shared-device case is designed, not assumed away**

Adequate evidence: A walkthrough on a borrowed or shared device with the resulting design changes recorded.

- 0 — Not considered.
- 1 — Mentioned without design consequences.
- 2 — Walked, with specific changes made — default sign-out, visible choice, sign-out prompt.
- 3 — As adequate, and the design considers who receives a code sent to a shared phone.

If below 2: Walk the flow twice on one device as two different people and write down everything the second person can see. Show at recheck: The walkthrough and the changes.

**The account's purpose is stated or the requirement removed**

Adequate evidence: A written statement of what the account gives the person, plus a working path for someone who does not create one.

- 0 — An account is required with no stated benefit.
- 1 — Benefits stated but no path exists without one.
- 2 — Purpose stated and a no-account path is designed.
- 3 — As adequate, and the write-up names what the product loses by not requiring an account and accepts it.

If below 2: Write what the account does for the person, not for you. If the list is empty or entirely about your records, design the flow without it. Show at recheck: The purpose statement and the no-account path.

### Portfolio contribution

Project evidence, and a genuinely differentiating one: most junior portfolios show a sign-up screen and no recovery path. Showing the shared-device walkthrough demonstrates you design for the conditions people actually use products in.

### Assigned resources

- R14: [W3C: forms tutorial](https://www.w3.org/WAI/tutorials/forms/) — Labels, instructions, validating input and user notifications. Purpose: Supplies the requirements every authentication field in this lesson must meet. Effort: 60–90 selected min. Free reading, no account. Verified 2026-09-06. It covers form accessibility rather than authentication design; the shared-device and recovery reasoning here is the course's own. Implemented keyboard and screen-reader behaviour still needs testing in a real build. Fallback: R10.
- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — Slips versus mistakes, prevention, and helping people recover. Purpose: Frames a failed sign-in as a recoverable event to be designed rather than a user failure to be reported. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Prevention techniques are options to choose between, not a checklist to apply wholesale. Fallback: R02.

## Lesson 4: Who may see and do what

Stable ID: m07-l04-v1. Core. Areas 6. Optional effort ~120 min.

**Objective.** Produce a two-role permission matrix for your product and design what each role sees when an action is unavailable, distinguishing hidden, visible-but-disabled and visible-with-a-route-to-ask.

**Bring forward.** Your flow, including anywhere a second person appears — someone booking for another person, an owner managing classes, a colleague with partial access.

Any product with more than one kind of user has permissions, whether or not anyone designed them. Undesigned, they surface as dead ends and confusing absences; designed, they are one of the clearest signals that you can think about a system rather than a screen.

### Learn

The vocabulary is worth borrowing precisely, and the assigned reading supplies it: a principal is who is acting, a permission is a specific thing that may be done, a role is a named bundle of permissions, resources are arranged in a hierarchy, and access granted higher up is inherited lower down. Least privilege means giving the smallest set that lets someone do their job. That page is infrastructure documentation, not an interface pattern library, so take the model from it and design the interface yourself.

The interface decision for an unavailable action has three answers and choosing badly is a common fault. Hide it when the person has no path to it and its presence would only confuse — a customer never needs to see class-management controls. Show it disabled when the person could plausibly have it and needs to know it exists, with an explanation of why it is unavailable. Show it with a route to ask when someone else can grant it, which turns a dead end into a request. A disabled control with no explanation is the worst of the three: it says no without saying why, and people conclude the product is broken.

Roles drift from reality. The real world contains the person covering for someone on leave, the owner who is also an attendee, and the family member with the phone. Model roles from what people actually do, expect overlap, and check what happens when one person holds two roles at once — that is where interfaces contradict themselves, showing an owner their own class as if they were a customer and then refusing to let them book it.

Permission errors need the same care as any other error, and usually get less. “Access denied” tells a person nothing about whether they took a wrong turn, need to sign in as someone else, or should ask a colleague. Write what is not permitted, why if you can say so safely, and what they can do next — including who can grant it.

**Common misconception.** “Permissions are a back-end concern.” The model may live in the back end, and every consequence is in the interface: what appears in navigation, which controls are visible, what an unavailable action says, and whether a person can tell they are looking at a limited view rather than the whole product. Undesigned, those appear as randomness.

### Worked example

A class provider had three real roles. Customers book and manage their own bookings. The owner manages classes and sees everyone's bookings. A helper takes attendance and sees the day's list with names, but no payment information — least privilege made concrete. The matrix showed twelve actions against three roles, and drawing it exposed two problems: nobody had decided whether a helper could cancel someone's place, which the owner did daily by message; and the owner's own view had no way to book a place as an attendee, which she also did. For unavailable actions the rule was: customers never see management controls at all; helpers see the refund control disabled with “only the owner can issue refunds — ask her”; and everyone gets a specific message rather than a generic denial.

#### Who may see and do what

Produce a two-role permission matrix for your product and design what each role sees when an action is unavailable, distinguishing hidden, visible-but-disabled and visible-with-a-route-to-ask.

**Where to work:** A grid on paper or in a text table, with the message wording written beside it. No permissions tooling is involved; the artefact is a matrix and a set of written messages.

- Starting material: Your flow, including anywhere a second person appears — someone booking for another person, an owner managing classes, a colleague with partial access.
- Create HaruCourse/Practice/m07-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Who may see and do what

Input artifact: Your flow, including anywhere a second person appears — someone booking for another person, an owner managing classes, a colleague with partial access.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A permission matrix of at least two roles against every action with undecided cells marked, a hidden, disabled or ask decision for every not-allowed cell with written wording, and a recorded dual-role walkthrough.

## 1. Read the permission model
- Read the assigned overview for the vocabulary: principals, permissions, roles, hierarchy, inheritance and least privilege. Write each in one sentence of your own.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. List the real roles and actions
- List the kinds of people in your product from your research, and every action anyone can take. Include the actions currently done by message or in person.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Build the matrix
- Draw actions against roles and mark each cell allowed, not allowed, or undecided. The undecided cells are the finding; write what would settle each one.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Design the unavailable states
- For each not-allowed cell, choose hidden, disabled with an explanation, or a route to ask. Write the message wording for every disabled and ask case.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Test the overlap and pause
- Walk the flow as one person holding two roles. Record every contradiction. Save the matrix, the state decisions and the messages.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The matrix covers real roles and every action: [evidence reference]
- Undecided cells are marked rather than guessed: [evidence reference]
- Each unavailable action has a designed state and wording: [evidence reference]
- The dual-role case was walked and its contradictions recorded: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

List everything anyone does in the whole service, including by phone and message, and add each as a row.

</details>

<details>
<summary>Hint 2</summary>

For each allowed or denied cell, ask who decided and when. Cells where the answer is “I just did, now” are undecided.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m07-l04-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The matrix covers real roles and every action: A grid of at least two roles against every action, including actions currently performed manually or by message. Undecided cells are marked rather than guessed: Cells with no settled answer marked undecided, each with what would settle it. Each unavailable action has a designed state and wording: A hidden, disabled or ask decision per not-allowed cell, with message wording for the latter two. The dual-role case was walked and its contradictions recorded: A walkthrough as one person with two roles, listing every contradictory or nonsensical state found.

**Bring forward:** Strong portfolio evidence for anyone aiming at B2B or internal-tool work, where permissions are most of the design. Present the matrix with the undecided cells visible; showing what was unresolved is more credible than a grid of confident ticks. Module handoff: Build the interface in m08


### Practice and pause points

- Read the permission model (~25 min): Read the assigned overview for the vocabulary: principals, permissions, roles, hierarchy, inheritance and least privilege. Write each in one sentence of your own.
- List the real roles and actions (~25 min): List the kinds of people in your product from your research, and every action anyone can take. Include the actions currently done by message or in person.
- Build the matrix (~30 min): Draw actions against roles and mark each cell allowed, not allowed, or undecided. The undecided cells are the finding; write what would settle each one.
- Design the unavailable states (~25 min): For each not-allowed cell, choose hidden, disabled with an explanation, or a route to ask. Write the message wording for every disabled and ask case.
- Test the overlap and pause (~15 min): Walk the flow as one person holding two roles. Record every contradiction. Save the matrix, the state decisions and the messages.

Pause after any step; save the artifact and next action.

**Free tool path.** A grid on paper or in a text table, with the message wording written beside it. No permissions tooling is involved; the artefact is a matrix and a set of written messages.

### Output

A permission matrix of at least two roles against every action with undecided cells marked, a hidden, disabled or ask decision for every not-allowed cell with written wording, and a recorded dual-role walkthrough.

### Checks

- When should an unavailable action be hidden rather than disabled? Answer: When the person has no path to it at all and its presence only raises a question with no answer. Disable it when they could plausibly obtain it and need to know it exists — and then explain why it is unavailable.
- What does an undecided cell in the matrix tell you? Answer: That a real decision has never been made and is currently resolved ad hoc, usually by a person doing it manually. Those cells are the most valuable output of the exercise.
- Why walk the flow as someone holding two roles? Answer: Because real people do — the owner is also an attendee, the helper is also a customer. Interfaces built on one-role-per-person contradict themselves there, and the contradiction is invisible until you walk it.

### Rubric and remediation

**The matrix covers real roles and every action**

Adequate evidence: A grid of at least two roles against every action, including actions currently performed manually or by message.

- 0 — Roles named without a matrix.
- 1 — A matrix covering only actions the product already has screens for.
- 2 — All roles and all actions, including the manual ones.
- 3 — As adequate, and the roles are drawn from observed behaviour rather than from job titles.

If below 2: List everything anyone does in the whole service, including by phone and message, and add each as a row. Show at recheck: The extended matrix.

**Undecided cells are marked rather than guessed**

Adequate evidence: Cells with no settled answer marked undecided, each with what would settle it.

- 0 — Every cell filled confidently, including ones nobody has decided.
- 1 — Some uncertainty noted informally.
- 2 — Undecided cells marked with the question that would settle each.
- 3 — As adequate, and one undecided cell is identified as the one most likely to cause harm if guessed wrongly.

If below 2: For each allowed or denied cell, ask who decided and when. Cells where the answer is “I just did, now” are undecided. Show at recheck: The matrix with undecided cells and questions.

**Each unavailable action has a designed state and wording**

Adequate evidence: A hidden, disabled or ask decision per not-allowed cell, with message wording for the latter two.

- 0 — Unavailable actions undefined or shown as generic denials.
- 1 — Decisions made but wording not written.
- 2 — Every not-allowed cell has a decision and, where needed, wording.
- 3 — As adequate, and at least one message names who can grant the permission and how to reach them.

If below 2: Write each message as what is not permitted, why where safe to say, and what to do next. Replace every generic denial. Show at recheck: The state decisions with wording.

**The dual-role case was walked and its contradictions recorded**

Adequate evidence: A walkthrough as one person with two roles, listing every contradictory or nonsensical state found.

- 0 — Not walked.
- 1 — Walked without recording specific contradictions.
- 2 — Walked with contradictions recorded.
- 3 — As adequate, and at least one contradiction is resolved with the resolution's cost stated.

If below 2: Take the most likely double role in your product and complete a full task as that person. Write down every moment the interface disagreed with itself. Show at recheck: The walkthrough record.

### Portfolio contribution

Strong portfolio evidence for anyone aiming at B2B or internal-tool work, where permissions are most of the design. Present the matrix with the undecided cells visible; showing what was unresolved is more credible than a grid of confident ticks.

### Assigned resources

- R44: [Google Cloud: IAM overview](https://docs.cloud.google.com/iam/docs/overview) — Principals, roles, permissions, the resource hierarchy, inheritance and least privilege. Purpose: Supplies precise vocabulary for a permission model so your matrix uses the same words engineers will. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. Permission-model vocabulary only: it is cloud infrastructure documentation, not a role-based interface pattern library, so every interface decision in this lesson is the course's own. Fallback: R19.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 1, visibility of system status, and heuristic 9, help users recognise, diagnose and recover from errors. Purpose: Sets the standard a permission message must meet: say what happened and what to do next. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. Heuristics identify candidate problems; whether your wording works is a question for a usability test. Fallback: R11.

## Lesson 5: Search, refine and get back to where you were

Stable ID: m07-l05-v1. Core. Areas 6. Optional effort ~120 min.

**Objective.** Design the browse-and-search flow through to a chosen item, including refinement, returning to results without losing them, and the paths for no results and too many results.

**Bring forward.** Your m06 search and filter work and your structure. That lesson designed what search should find; this one designs the journey around it.

Finding something is not one action; it is a loop of narrowing, opening, going back and comparing. Products that treat it as a single search box lose people at the moment they return from a detail page and find their results gone.

### Learn

The loop is: express a need, see a set, narrow it, open one, judge it, and either finish or go back. The back step is the one designed least often and used most: returning to results must restore the position, the filters and the scroll place, because a person who has to rebuild their search after every look stops comparing and settles for whatever they saw first — which is a design decision you did not intend to make.

Give people a way to hold candidates. Comparing three classes across four attributes exceeds what anyone will keep in their head, and the assigned reading on recognition and recall explains why: recall is expensive, recognition is cheap. A shortlist, a compare view or even keeping the last-viewed items visible converts a memory task into a looking task, and it is often the single most useful thing you can add to a browse flow.

Too many results and no results are the same failure of calibration and both need designed responses. Too many means the person cannot start; suggest the narrowing dimension that would help most, and show counts so they can see the effect before committing. None means they have over-narrowed or used words you do not have; say which filter is responsible where you can, offer removing it, and offer the route that does not depend on the same words.

The result item is where the whole design gets decided. It must contain exactly what people need to judge and no more — from your research, the price, the time, the place and whether there is space. Too little and everyone must open every result, which is the slowest possible loop; too much and the list becomes unscannable. This is where the m05 research pays off directly: you already know what people compared on, because you watched them.

**Common misconception.** “Search solves browsing.” Search works for people who can name what they want. Many arrive able to describe only a situation — “something on a Saturday near me that my daughter would like” — and for them the browse structure, the filters and the result content are the entire product. Design both and let people move between them.

### Worked example

The browse flow was redrawn as a loop after an observation showed a participant opening four classes and losing her filters each time, then booking the third because she could not face rebuilding the list. Returning to results restored filters and scroll position. Each result showed the four things she had actually compared: day and time, price, place and remaining spaces. A shortlist held candidates so she could compare without keeping them in her head. Filters showed counts, so “Saturday morning + under 500” could be seen to leave two before it was applied, and if a combination emptied the list the interface named the filter that had done it and offered to remove it.

#### Search, refine and get back to where you were

Design the browse-and-search flow through to a chosen item, including refinement, returning to results without losing them, and the paths for no results and too many results.

**Where to work:** Paper screens for the list, the detail and the return, with the filter state written on each so you can see what survives. Cutting the result item out as a small card and laying three side by side is the quickest way to test whether it carries enough to compare.

- Starting material: Your m06 search and filter work and your structure. That lesson designed what search should find; this one designs the journey around it.
- Create HaruCourse/Practice/m07-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Search, refine and get back to where you were

Input artifact: Your m06 search and filter work and your structure. That lesson designed what search should find; this one designs the journey around it.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A browse-and-search flow drawn as a loop with the preserved state named on the return step, a prioritised result-item content list with deliberate omissions, designed too-many and no-results states, and a candidate-holding mechanism with its justification.

## 1. Read on memory and status
- Read the assigned article on recognition and recall and the heuristics on system status and user control. Note what each implies for returning to a result set.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Draw the loop
- Draw the flow as a loop rather than a line: express, see, narrow, open, judge, return or finish. Mark exactly what must be preserved on the return step.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Design the result item
- Decide what appears on a result, using what your participants actually compared on. Write the fields in priority order and say what you deliberately left out.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Handle both extremes
- Design the too-many-results and no-results states: what is suggested, what is shown about which filter caused it, and what route out exists that does not need the same words.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Add a way to hold candidates, then pause
- Design the lightest mechanism that lets someone compare without remembering — shortlist, compare, or recently viewed. Record why you chose that one. Save the loop and the states.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The flow is drawn as a loop with a designed return: [evidence reference]
- Result content comes from what people compared on: [evidence reference]
- Too many and no results are both designed: [evidence reference]
- A candidate-holding mechanism is chosen and justified: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Walk your own flow: search, open the third result, go back. Write down everything you lost, then put each item on the return step.

</details>

<details>
<summary>Hint 2</summary>

Re-read your m05 notes for the attributes participants mentioned while choosing. Those are your fields; everything else is a candidate for omission.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m07-l05-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The flow is drawn as a loop with a designed return: A loop showing narrowing, opening and returning, with the preserved state explicitly named. Result content comes from what people compared on: A prioritised field list traced to research observations, with deliberate omissions stated. Too many and no results are both designed: Designed states for both extremes, naming the responsible filter where possible and offering a route out. A candidate-holding mechanism is chosen and justified: One mechanism designed, with a written reason for choosing it over the alternatives.

**Bring forward:** Project evidence. The return-to-results detail is small, specific and immediately recognisable to an experienced reviewer as something learned from watching someone rather than from a pattern library. Module handoff: Build the interface in m08


### Practice and pause points

- Read on memory and status (~25 min): Read the assigned article on recognition and recall and the heuristics on system status and user control. Note what each implies for returning to a result set.
- Draw the loop (~25 min): Draw the flow as a loop rather than a line: express, see, narrow, open, judge, return or finish. Mark exactly what must be preserved on the return step.
- Design the result item (~30 min): Decide what appears on a result, using what your participants actually compared on. Write the fields in priority order and say what you deliberately left out.
- Handle both extremes (~25 min): Design the too-many-results and no-results states: what is suggested, what is shown about which filter caused it, and what route out exists that does not need the same words.
- Add a way to hold candidates, then pause (~15 min): Design the lightest mechanism that lets someone compare without remembering — shortlist, compare, or recently viewed. Record why you chose that one. Save the loop and the states.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper screens for the list, the detail and the return, with the filter state written on each so you can see what survives. Cutting the result item out as a small card and laying three side by side is the quickest way to test whether it carries enough to compare.

### Output

A browse-and-search flow drawn as a loop with the preserved state named on the return step, a prioritised result-item content list with deliberate omissions, designed too-many and no-results states, and a candidate-holding mechanism with its justification.

### Checks

- What must be preserved when someone returns to results? Answer: The filters, the position in the list and the scroll place. Losing them makes comparison expensive enough that people stop comparing, which quietly turns your product into one that promotes whatever appeared first.
- Why does a shortlist help more than it looks like it should? Answer: Because comparing several items on several attributes is a recall task, and recall is expensive. Holding candidates where they can be seen converts it into recognition, which is close to free.
- How do you decide what appears on a result item? Answer: From what people were observed comparing on. Anything not used in the comparison makes the list harder to scan; anything missing forces the person to open every result to judge it.

### Rubric and remediation

**The flow is drawn as a loop with a designed return**

Adequate evidence: A loop showing narrowing, opening and returning, with the preserved state explicitly named.

- 0 — A linear search-to-detail flow.
- 1 — A loop drawn but the return step does not say what is preserved.
- 2 — The loop and the preserved state — filters, position, scroll — are both explicit.
- 3 — As adequate, and the design says what happens to the state when the person returns hours later or on another device.

If below 2: Walk your own flow: search, open the third result, go back. Write down everything you lost, then put each item on the return step. Show at recheck: The loop with the preserved-state list.

**Result content comes from what people compared on**

Adequate evidence: A prioritised field list traced to research observations, with deliberate omissions stated.

- 0 — Fields chosen by what the database contains.
- 1 — A reasoned list, but with no trace to what people actually compared.
- 2 — Fields traced to observed comparison behaviour, with omissions stated.
- 3 — As adequate, and one field is included specifically because its absence caused someone to open every result.

If below 2: Re-read your m05 notes for the attributes participants mentioned while choosing. Those are your fields; everything else is a candidate for omission. Show at recheck: The field list with sources.

**Too many and no results are both designed**

Adequate evidence: Designed states for both extremes, naming the responsible filter where possible and offering a route out.

- 0 — Neither designed.
- 1 — One designed, usually no-results.
- 2 — Both designed, with a route out that does not depend on the same words.
- 3 — As adequate, and filter counts are shown so a dead end is visible before it is chosen.

If below 2: Choose filter combinations that produce nothing and everything, and write exactly what the person sees and can do in each case. Show at recheck: The two designed states.

**A candidate-holding mechanism is chosen and justified**

Adequate evidence: One mechanism designed, with a written reason for choosing it over the alternatives.

- 0 — No mechanism; comparison left to memory.
- 1 — A mechanism added without justification or heavier than the task needs.
- 2 — One mechanism chosen with a reason and a stated cost.
- 3 — As adequate, and the choice is the lightest that solves the observed comparison, with heavier options explicitly rejected.

If below 2: Write what a person is trying to hold in mind and for how long. Choose the smallest mechanism that removes that burden, then say what you rejected. Show at recheck: The mechanism and its justification.

### Portfolio contribution

Project evidence. The return-to-results detail is small, specific and immediately recognisable to an experienced reviewer as something learned from watching someone rather than from a pattern library.

### Assigned resources

- R33: [NN/g: recognition and recall](https://www.nngroup.com/articles/recognition-and-recall/) — Recognition versus recall and the interface implications for comparison. Purpose: Explains why holding candidates visibly beats asking people to remember them. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. It does not cover Miller's limit; use the assigned Laws of UX page for chunk limits, with the caution recorded there. Fallback: R31.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 1, visibility of system status, heuristic 3, user control and freedom, and heuristic 6, recognition rather than recall. Purpose: Gives the standards for the return step, the filter feedback and the result content. Effort: 15–25 selected min. Free reading, no account. Verified 2026-09-06. Heuristics generate candidate problems; the loop design here is settled by your own observation evidence. Fallback: R11.

## Lesson 6: Commitment, payment and the uncertain wait

Stable ID: m07-l06-v1. Core. Areas 6. Optional effort ~120 min.

**Objective.** Design the commitment step through to confirmation, including a review before committing, every state the wait can be in, and what a person sees when they do not know whether their money left.

**Bring forward.** Your flow with its wait nodes, and any m05 evidence about payment — the observed session, anything a participant said about not knowing whether something worked.

This is the step where a design failure costs someone real money, and where uncertainty makes people act: they press again, they pay twice, they ring, they stop trusting the product. Everything else in the flow can be improved later; this has to be right the first time.

### Learn

Show everything being committed to before the commitment. The assigned check-answers pattern exists for exactly this: a single review of what has been entered and chosen, with a way to change each part, immediately before the irreversible step. The total must include everything — no charges appearing after the button — and anything that is a commitment rather than a payment, such as a place held for twenty minutes or a cancellation deadline, belongs on the same screen in the same plain words.

The wait has states and each one needs its own message. Submitted-not-yet-confirmed, confirmed, failed-and-nothing-taken, and the worst one: unknown, where the request left and no answer came back. Unknown is not an error; it is a state the person is in, and they need to be told what is true so far — “we have not confirmed your payment. Do not pay again. We will message you within an hour, and here is your reference” — because the alternative is a second payment made out of anxiety, which is a real cost you designed.

Design for the connection people actually have. Throttle your prototype to a slow profile with the cache disabled and watch what appears first and how long the gap between action and feedback lasts, using the browser tools you already have. A spinner that is honest for two seconds is dishonest at twenty; long waits need a message that says what is happening, an assurance about the money, and a way to check later that does not depend on this page staying open — because on a poor connection it will not.

Never let the same action be taken twice by accident. Disable the button on submission, but treat that as the weak defence it is: people close tabs, hit back, resend forms and press once more when nothing appears to happen. The strong defence is that the second identical request is recognised and does nothing new, which is a decision to agree with an engineer, and which belongs in your flow annotation because it is the difference between a slip and a double charge.

**Common misconception.** “The confirmation screen is the end of the flow.” It is the middle. People screenshot it, forward it, look for it in email, come back three days later to check, and arrive at the class holding a phone with no signal. The confirmation must exist somewhere that survives the tab closing, and your flow should show where it lives afterwards and how it is retrieved.

### Worked example

The commitment step became a review screen listing class, date, time, place, total, what is included, the cancellation deadline in plain words, and a change link beside each. The pay button carried the exact amount. Four wait states were designed after the m05 observation of a woman standing at a window waiting: pending said what was happening and told her not to pay again; failed said nothing had been taken and offered a retry that kept her details; unknown gave a reference, a promise of a message within an hour and a number to ring. Confirmation gave the reference first, sent it by message, and stated that it could be found later with the reference and phone number — no account needed. Throttled to a slow connection, the pending message arrived before any styling, which was the point of writing it as text rather than an animation.

#### Commitment, payment and the uncertain wait

Design the commitment step through to confirmation, including a review before committing, every state the wait can be in, and what a person sees when they do not know whether their money left.

**Where to work:** Paper screens with the full message wording, plus any browser's own developer tools for the throttling check — no account, extension or paid service. If you have no prototype yet, throttle any comparable live page and record what a slow connection does to feedback timing.

- Starting material: Your flow with its wait nodes, and any m05 evidence about payment — the observed session, anything a participant said about not knowing whether something worked.
- Create HaruCourse/Practice/m07-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Commitment, payment and the uncertain wait

Input artifact: Your flow with its wait nodes, and any m05 evidence about payment — the observed session, anything a participant said about not knowing whether something worked.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A review screen listing every commitment with change routes and an exact total, written screens for pending, confirmed, failed and unknown states, throttled-connection observations, and a stated mechanism for preventing a duplicate action plus where the confirmation lives afterwards.

## 1. Read the review pattern
- Read the assigned check-answers pattern and the error-prevention article. Note what the pattern shows before commitment and how it lets people change each part.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Design the review screen
- List everything being committed to, including money, time, place and any deadline or held place. Design the review with a change route for each item and the exact total on the button.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Design the four wait states
- Write the screen and message for pending, confirmed, failed and unknown. For unknown, state what is true, what not to do, when they will hear and how to check.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Throttle and watch
- Load your prototype or a comparable page on a slow throttled connection with the cache disabled. Record what appears first, how long the feedback gap is, and what you would do differently.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Prevent the double action and pause
- Write how a repeated identical request is prevented from doing anything twice, and where the confirmation lives after the tab closes. Save the review, the states and the throttling notes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Everything committed to is shown before the commitment: [evidence reference]
- Pending, confirmed, failed and unknown are all designed: [evidence reference]
- The design was checked on a throttled connection: [evidence reference]
- Duplicate actions are prevented beyond disabling a button: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

List everything a person is agreeing to, including anything they cannot undo later. Anything missing from the review must be added or removed from the commitment.

</details>

<details>
<summary>Hint 2</summary>

Write the unknown state first, as though to someone who has just paid and seen nothing. Then check the other three say what happened to their money too.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m07-l06-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Everything committed to is shown before the commitment: A review screen listing money, time, place, inclusions and deadlines, each with a route to change it, and an exact total on the action. Pending, confirmed, failed and unknown are all designed: Written screens and messages for all four, with the unknown state saying what is true, what not to do and when they will hear. The design was checked on a throttled connection: Recorded observations from a slow throttled load with the cache disabled: what appeared first and how long feedback took. Duplicate actions are prevented beyond disabling a button: A stated mechanism by which a repeated identical request does nothing new, plus where the confirmation is retrievable afterwards.

**Bring forward:** Strong project evidence. Payment uncertainty states are rarely designed in student work and are immediately recognisable as real product thinking. Present the four states together; the unknown one is the interesting artefact. Module handoff: Build the interface in m08


### Practice and pause points

- Read the review pattern (~25 min): Read the assigned check-answers pattern and the error-prevention article. Note what the pattern shows before commitment and how it lets people change each part.
- Design the review screen (~25 min): List everything being committed to, including money, time, place and any deadline or held place. Design the review with a change route for each item and the exact total on the button.
- Design the four wait states (~30 min): Write the screen and message for pending, confirmed, failed and unknown. For unknown, state what is true, what not to do, when they will hear and how to check.
- Throttle and watch (~25 min): Load your prototype or a comparable page on a slow throttled connection with the cache disabled. Record what appears first, how long the feedback gap is, and what you would do differently.
- Prevent the double action and pause (~15 min): Write how a repeated identical request is prevented from doing anything twice, and where the confirmation lives after the tab closes. Save the review, the states and the throttling notes.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper screens with the full message wording, plus any browser's own developer tools for the throttling check — no account, extension or paid service. If you have no prototype yet, throttle any comparable live page and record what a slow connection does to feedback timing.

### Output

A review screen listing every commitment with change routes and an exact total, written screens for pending, confirmed, failed and unknown states, throttled-connection observations, and a stated mechanism for preventing a duplicate action plus where the confirmation lives afterwards.

### Checks

- Why is the unknown state the most important one to design? Answer: Because it is where people act on anxiety. Told nothing, they pay again, ring, or both. Told what is true, what not to do and when they will hear, they wait — and the double charge you would otherwise have caused never happens.
- Why is disabling the submit button not enough? Answer: Because it only stops one of the ways a request repeats. Back buttons, closed tabs, resubmitted forms and impatient second attempts all bypass it, so the request itself has to be recognised as a repeat and do nothing new.
- What does a throttled connection reveal that a fast one hides? Answer: The real length of the gap between action and feedback, and what arrives first. A design that feels instant on your connection can leave someone staring at an unchanged screen for twenty seconds, which is when they press again.

### Rubric and remediation

**Everything committed to is shown before the commitment**

Adequate evidence: A review screen listing money, time, place, inclusions and deadlines, each with a route to change it, and an exact total on the action.

- 0 — The commitment happens with no review.
- 1 — A review showing some items, or a total that changes afterwards.
- 2 — Everything shown with change routes and an exact total.
- 3 — As adequate, and non-money commitments such as a cancellation deadline are stated in plain words rather than linked to.

If below 2: List everything a person is agreeing to, including anything they cannot undo later. Anything missing from the review must be added or removed from the commitment. Show at recheck: The review screen with the complete list.

**Pending, confirmed, failed and unknown are all designed**

Adequate evidence: Written screens and messages for all four, with the unknown state saying what is true, what not to do and when they will hear.

- 0 — Only success and a generic error.
- 1 — Three states, with unknown treated as an error.
- 2 — All four designed, with the unknown state's three elements present.
- 3 — As adequate, and each state says explicitly what has happened to the money.

If below 2: Write the unknown state first, as though to someone who has just paid and seen nothing. Then check the other three say what happened to their money too. Show at recheck: The four state designs.

**The design was checked on a throttled connection**

Adequate evidence: Recorded observations from a slow throttled load with the cache disabled: what appeared first and how long feedback took.

- 0 — Not checked.
- 1 — Checked informally without recording what appeared or how long it took.
- 2 — Checked with specific observations recorded.
- 3 — As adequate, and one change was made because of what the throttled load showed.

If below 2: Run the load again with throttling on and the cache disabled, and write down the sequence and the timings rather than the impression. Show at recheck: The throttling notes and any resulting change.

**Duplicate actions are prevented beyond disabling a button**

Adequate evidence: A stated mechanism by which a repeated identical request does nothing new, plus where the confirmation is retrievable afterwards.

- 0 — No prevention, or the button state only.
- 1 — Prevention mentioned without a mechanism to agree with an engineer.
- 2 — A specific mechanism stated, and the confirmation's later location defined.
- 3 — As adequate, and the design says how a person retrieves the confirmation with no account and no email.

If below 2: Write the sentence you would say to an engineer about what should happen if the same request arrives twice. Then write where the confirmation lives after the tab closes. Show at recheck: The mechanism note and retrieval route.

### Portfolio contribution

Strong project evidence. Payment uncertainty states are rarely designed in student work and are immediately recognisable as real product thinking. Present the four states together; the unknown one is the interesting artefact.

### Assigned resources

- R11: [GOV.UK Design System: patterns](https://design-system.service.gov.uk/patterns/) — The check answers pattern and the related multi-step task patterns. Purpose: Supplies a proven structure for reviewing everything before an irreversible step. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Government patterns cover submission rather than payment, and their visual style is not a universal aesthetic; the payment and wait-state design here is the course's own. Fallback: R02.
- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — Throttling profiles and disabling the cache. Purpose: Provides the account-free way to see what your design does on the connection people actually have. Effort: 10–20 selected min. Free documentation, no account; any Chromium browser works. Verified 2026-09-06. Throttling simulates bandwidth and latency, not an unreliable connection that drops entirely — test that by turning the network off mid-action. Fallback: R16.

## Lesson 7: The paths where things go wrong

Stable ID: m07-l07-v1. Core. Areas 6. Optional effort ~120 min.

**Objective.** Produce an exception table for your whole flow listing at least twelve failure cases, each classified as a slip or a mistake, with its prevention, its message and its recovery route.

**Bring forward.** Your complete flow with its states and waits. Every decision point and every wait is a place something can go wrong; this lesson makes that list exhaustive rather than intuitive.

The difference between a product people trust and one they abandon is almost entirely in what happens when something goes wrong. Happy paths are easy and everybody designs them; the exception table is the work.

### Learn

The assigned reading separates slips from mistakes, and the distinction decides the response. A slip is when someone knew what to do and their hands or attention failed — the wrong date tapped, a digit missed, the wrong button on a crowded screen. A mistake is when the person's model was wrong — they believed booking held a place, or that cancelling was free. Slips are prevented by design: bigger targets, sensible defaults, confirmation of consequential actions, forgiving formats. Mistakes are prevented by explanation and feedback: telling people what is true before they act on their assumption.

Generate the list systematically rather than by imagination. Walk your flow and at every node ask four questions: what if the input is wrong, what if the system fails, what if the person leaves and comes back, and what if someone else changed something meanwhile. That last one produces the failures nobody thinks of — the place taken while they were deciding, the class cancelled while they were paying, the price changed between two screens.

Every message needs three things and most have one. What happened, in the person's terms rather than the system's. What it means for them — is their money safe, is their place held, is the work they did lost. And what to do next, as an action they can take now. “Something went wrong” has none of the three; “We could not reach the payment service. Nothing has been taken and your place is held for ten more minutes — try again or pay later with this reference” has all three.

Recovery beats prevention where the cost of prevention is a worse experience for everyone. A confirmation dialogue on every action prevents rare slips and irritates people constantly; an undo that works for a few minutes costs nothing until it is needed. Prefer undo where the action can be reversed, confirmation where it truly cannot, and neither where the action is trivial — and write down which you chose and why, because this is one of the decisions reviewers most often ask you to defend.

**Common misconception.** “Error handling is a development detail.” The message text, the state the person is left in and the route back are design decisions with a direct cost in abandoned tasks and support calls. Left to be written during implementation, they become the database's vocabulary, which is how people meet the word “invalid” in a product they are trying to buy something from.

### Worked example

An exception table for a booking flow reached nineteen rows. Slips: wrong date tapped on a crowded calendar — prevented with larger targets and the day name shown beside the number; a mistyped phone number — prevented by a forgiving format and an echo of what was entered. Mistakes: believing a held place was a booking — prevented by naming the state on screen and in the message; believing cancellation was free — prevented by stating the deadline on the review screen. Concurrency: the last place taken while the person was on the payment screen, which had never been considered, and which produced the worst message in the product until it was written properly. Undo was chosen for cancelling a booking within five minutes; confirmation was reserved for the one genuinely irreversible action; nothing else got either.

#### The paths where things go wrong

Produce an exception table for your whole flow listing at least twelve failure cases, each classified as a slip or a mistake, with its prevention, its message and its recovery route.

**Where to work:** A table on paper or in a text file with one row per failure. Writing the message text in full is the required part — an exception table listing cases without their wording is a list of problems rather than a design.

- Starting material: Your complete flow with its states and waits. Every decision point and every wait is a place something can go wrong; this lesson makes that list exhaustive rather than intuitive.
- Create HaruCourse/Practice/m07-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# The paths where things go wrong

Input artifact: Your complete flow with its states and waits. Every decision point and every wait is a place something can go wrong; this lesson makes that list exhaustive rather than intuitive.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] An exception table of at least twelve cases, each classified slip or mistake, with the chosen response and its reason, full message wording covering what happened, what it means and what to do next, and a harm ranking with three cases marked to fix first.

## 1. Read on slips and mistakes
- Read the assigned article on preventing user errors and the recovery heuristic. Write the difference between a slip and a mistake in your own words, with one example from your own flow for each.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Walk every node with four questions
- At each node ask: wrong input, system failure, person leaves and returns, someone else changed something. Write down every case, including the ones that seem unlikely.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Classify and choose the response
- Mark each case slip or mistake, then choose prevention, undo, confirmation or recovery only — with a reason. Prefer undo to confirmation where the action can be reversed.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Write the messages
- For each case write what happened, what it means for the person and what to do next. No message may use system vocabulary or leave the money question unanswered.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Rank and pause
- Rank the cases by how much harm they do, not by how likely they are. Mark the three you would fix first. Save the table.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- At least twelve cases generated systematically, not by intuition: [evidence reference]
- Each case is classified slip or mistake: [evidence reference]
- Responses are chosen with a stated reason: [evidence reference]
- Every message says what happened, what it means and what to do: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Go back through the flow node by node with the four questions written in front of you. Do not skip nodes that feel safe; the wait states usually hide the worst cases.

</details>

<details>
<summary>Hint 2</summary>

For each case ask whether the person intended the right thing. If they did, it is a slip; if their belief was wrong, it is a mistake.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m07-l07-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** At least twelve cases generated systematically, not by intuition: A table covering every node against the four questions, including concurrency cases. Each case is classified slip or mistake: A classification per row, consistent with the definitions, with the response following from it. Responses are chosen with a stated reason: Prevention, undo, confirmation or recovery-only chosen per case, with a reason and no blanket use of confirmation. Every message says what happened, what it means and what to do: Full wording per case, in the person's vocabulary, answering the money and lost-work questions where they apply.

**Bring forward:** The exception table is one of the most useful things you can show. It is unglamorous and instantly credible: it demonstrates that you design the parts nobody demos, which is what separates product designers from people who make screens. Module handoff: Build the interface in m08


### Practice and pause points

- Read on slips and mistakes (~25 min): Read the assigned article on preventing user errors and the recovery heuristic. Write the difference between a slip and a mistake in your own words, with one example from your own flow for each.
- Walk every node with four questions (~35 min): At each node ask: wrong input, system failure, person leaves and returns, someone else changed something. Write down every case, including the ones that seem unlikely.
- Classify and choose the response (~25 min): Mark each case slip or mistake, then choose prevention, undo, confirmation or recovery only — with a reason. Prefer undo to confirmation where the action can be reversed.
- Write the messages (~25 min): For each case write what happened, what it means for the person and what to do next. No message may use system vocabulary or leave the money question unanswered.
- Rank and pause (~10 min): Rank the cases by how much harm they do, not by how likely they are. Mark the three you would fix first. Save the table.

Pause after any step; save the artifact and next action.

**Free tool path.** A table on paper or in a text file with one row per failure. Writing the message text in full is the required part — an exception table listing cases without their wording is a list of problems rather than a design.

### Output

An exception table of at least twelve cases, each classified slip or mistake, with the chosen response and its reason, full message wording covering what happened, what it means and what to do next, and a harm ranking with three cases marked to fix first.

### Checks

- Why does the slip-or-mistake classification matter? Answer: Because they need different responses. A slip is answered by making the right action easier and the wrong one recoverable; a mistake is answered by correcting what the person believes, which no amount of bigger buttons will do.
- When should you prefer undo over a confirmation dialogue? Answer: Whenever the action can be reversed. Confirmation taxes everyone on every action to prevent a rare slip; undo costs nothing until someone needs it, and it is there for the person who confirmed by reflex too.
- What must every error message answer? Answer: What happened, what it means for them — especially about money, time and lost work — and what to do next. A message missing the second is the one that generates a phone call.

### Rubric and remediation

**At least twelve cases generated systematically, not by intuition**

Adequate evidence: A table covering every node against the four questions, including concurrency cases.

- 0 — A handful of obvious errors.
- 1 — A longer list, but generated ad hoc and missing whole classes such as concurrency.
- 2 — Twelve or more from a systematic walk, including someone-else-changed-it cases.
- 3 — As adequate, and at least one case is one you would not have thought of without the four-question walk, and is marked as such.

If below 2: Go back through the flow node by node with the four questions written in front of you. Do not skip nodes that feel safe; the wait states usually hide the worst cases. Show at recheck: The extended exception table.

**Each case is classified slip or mistake**

Adequate evidence: A classification per row, consistent with the definitions, with the response following from it.

- 0 — No classification.
- 1 — Classified inconsistently, or all cases treated as slips.
- 2 — Every case classified and the response follows from the class.
- 3 — As adequate, and one case is identified as both — a slip made likely by a mistaken belief — with both addressed.

If below 2: For each case ask whether the person intended the right thing. If they did, it is a slip; if their belief was wrong, it is a mistake. Show at recheck: The classified table.

**Responses are chosen with a stated reason**

Adequate evidence: Prevention, undo, confirmation or recovery-only chosen per case, with a reason and no blanket use of confirmation.

- 0 — Responses missing, or confirmation applied everywhere.
- 1 — Responses chosen without reasons.
- 2 — Each response has a reason, with undo preferred where reversal is possible.
- 3 — As adequate, and at least one case is deliberately left unprevented because prevention would cost everyone more than the failure costs.

If below 2: For every confirmation dialogue, ask whether the action could simply be undone instead. Replace the ones that could. Show at recheck: The response column with reasons.

**Every message says what happened, what it means and what to do**

Adequate evidence: Full wording per case, in the person's vocabulary, answering the money and lost-work questions where they apply.

- 0 — Messages missing or written as system errors.
- 1 — Wording present but missing what it means for the person.
- 2 — All three elements in every message, in plain words.
- 3 — As adequate, and one message is written for the worst case — unknown outcome — and says what not to do.

If below 2: Read each message as someone who has just lost twenty minutes of work or six hundred rupees. Add whatever you would want to know first. Show at recheck: The message column.

### Portfolio contribution

The exception table is one of the most useful things you can show. It is unglamorous and instantly credible: it demonstrates that you design the parts nobody demos, which is what separates product designers from people who make screens.

### Assigned resources

- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — Slips versus mistakes, the gulfs of execution and evaluation, affordances, signifiers, feedback and undo. Purpose: Supplies the classification this lesson is built on and the range of responses available. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Prevention techniques are options to choose between, not a checklist to apply wholesale; the concurrency cases are this lesson's addition. Fallback: R02.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 5, error prevention, and heuristic 9, help users recognise, diagnose and recover from errors. Purpose: Sets the standard each message and recovery route is written against. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. A heuristic identifies a candidate problem; whether your message works is a question for the usability test in lesson 13. Fallback: R11.

## Lesson 8: From flow to low-fidelity wireframes

Stable ID: m07-l08-v1. Core. Areas 7. Optional effort ~120 min.

**Objective.** Turn one branch of your flow into low-fidelity wireframes for every screen it touches, each carrying its real content in priority order and none carrying visual styling.

**Bring forward.** Your flow, your exception table and your m06 labels. The wireframes take their words from the labelling table, not from new invention.

A wireframe exists to make the structure of a screen arguable before anyone spends time on how it looks. Its usefulness comes entirely from being cheap enough to throw away, which is why the fidelity is low on purpose rather than because you have not finished.

### Learn

Low fidelity means the arrangement and the priority are decided and nothing else is. Boxes, real words, sizes that show relative importance — no colour decisions, no type choices, no icon sets, no borrowed component library. The discipline is protective: the moment a wireframe starts looking finished, feedback shifts to the colours and away from whether the screen contains the right things in the right order, which is the only question it can answer.

Real content, always. Placeholder text hides every problem a wireframe exists to find: the label that is three words too long, the price that needs a qualifier, the empty state nobody wrote. Use the labels from your m06 table and the message wording from your exception table, and where you do not yet know what the words are, write “unknown — needs a decision” rather than filling the space with something plausible.

Design each screen around its one job. A screen usually exists to let a person do one thing and understand one state, and the content order should follow: the thing they came for first, what they need to judge it second, the action third, supporting material last. Write the job at the top of each wireframe. A screen with two jobs is usually two screens, or one screen that will test badly in both roles.

Wireframe the exceptions too, not only the happy path. Your exception table names states — pending, unavailable, empty, permission-denied — and each is a screen a person will actually see. Drawing them at low fidelity costs minutes and reveals immediately whether your layout has anywhere to put a two-line explanation, which is the commonest reason error messages end up somewhere useless.

**Common misconception.** “Wireframes are just ugly versions of the final design.” They are a different instrument. A wireframe answers what is on the screen and in what order; a visual design answers how it feels and where the eye goes. Skipping the first because you can do the second quickly means the ordering questions get settled by whatever looked balanced.

### Worked example

One branch — find a class, review it, commit, wait, confirm — produced nine wireframes including four states from the exception table. The class detail screen was drawn twice: once with the description first, as the product had it, and once with what to bring, price and time first, as the research said people compared on. Drawn at low fidelity the second version obviously worked better on a small screen, and the argument took four minutes instead of a week. The pending state got its own frame, which immediately showed that the layout had nowhere sensible for a three-line reassurance message — a problem discovered with a pencil rather than in code.

#### From flow to low-fidelity wireframes

Turn one branch of your flow into low-fidelity wireframes for every screen it touches, each carrying its real content in priority order and none carrying visual styling.

**Where to work:** Paper, a pencil and one pen weight for emphasis. This is the recommended route, not a fallback: hand-drawn frames stay low fidelity by nature, which keeps feedback on structure. If you prefer digital, use a plain shape tool without a component library, and if you want a vector version later, hand-written SVG needs only a text editor.

- Starting material: Your flow, your exception table and your m06 labels. The wireframes take their words from the labelling table, not from new invention.
- Create HaruCourse/Practice/m07-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# From flow to low-fidelity wireframes

Input artifact: Your flow, your exception table and your m06 labels. The wireframes take their words from the labelling table, not from new invention.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Low-fidelity wireframes for every screen and state in one branch, each with its job written at the top and real content in priority order, one screen drawn in two content orders with a comparison, and a list of open content decisions.

## 1. Read on prototype fidelity
- Read the assigned page on making prototypes and choosing fidelity. Write what a low-fidelity artefact can answer and what it cannot.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. List the screens and their jobs
- From one branch of your flow, list every screen including the exception states. Write the single job of each in one sentence.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Draw with real content
- Draw each screen using real labels and real message wording, ordered by priority. Mark anything you do not yet know as an open decision rather than inventing it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Draw one screen two ways
- Take the screen you are least sure about and draw a second version with a different content order. Note what each favours.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Check against the flow and pause
- Walk the branch screen by screen and confirm every state in your flow has a frame and every prerequisite is available when asked for. Save the set with the open decisions listed.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Every screen and state in the branch has a frame: [evidence reference]
- Real content is used and unknowns are marked: [evidence reference]
- Each screen states its single job: [evidence reference]
- One screen is drawn in two content orders and compared: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

List the states from your flow and tick off each frame. Draw the missing ones, however uninteresting they look.

</details>

<details>
<summary>Hint 2</summary>

Replace every invented string with either the real label from your m06 table or the words “unknown — needs a decision”.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m07-l08-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every screen and state in the branch has a frame: A frame set covering the happy path and the exception states from your table, checked against the flow. Real content is used and unknowns are marked: Frames carrying labels and messages from your earlier work, with open decisions marked rather than filled with plausible text. Each screen states its single job: A one-sentence job written on every frame, with any two-job screen identified. One screen is drawn in two content orders and compared: Two versions of one screen with a written note on what each favours and which was chosen.

**Bring forward:** Case-study material, especially the two-order comparison: showing an alternative you rejected and why is far more persuasive than showing one design that appears to have arrived complete. Module handoff: Build the interface in m08


### Practice and pause points

- Read on prototype fidelity (~25 min): Read the assigned page on making prototypes and choosing fidelity. Write what a low-fidelity artefact can answer and what it cannot.
- List the screens and their jobs (~25 min): From one branch of your flow, list every screen including the exception states. Write the single job of each in one sentence.
- Draw with real content (~35 min): Draw each screen using real labels and real message wording, ordered by priority. Mark anything you do not yet know as an open decision rather than inventing it.
- Draw one screen two ways (~20 min): Take the screen you are least sure about and draw a second version with a different content order. Note what each favours.
- Check against the flow and pause (~15 min): Walk the branch screen by screen and confirm every state in your flow has a frame and every prerequisite is available when asked for. Save the set with the open decisions listed.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper, a pencil and one pen weight for emphasis. This is the recommended route, not a fallback: hand-drawn frames stay low fidelity by nature, which keeps feedback on structure. If you prefer digital, use a plain shape tool without a component library, and if you want a vector version later, hand-written SVG needs only a text editor.

### Output

Low-fidelity wireframes for every screen and state in one branch, each with its job written at the top and real content in priority order, one screen drawn in two content orders with a comparison, and a list of open content decisions.

### Checks

- Why avoid placeholder text? Answer: Because it hides the problems the wireframe exists to find: labels that are too long, values needing qualifiers, and words nobody has written yet. A screen full of lorem ipsum tests a layout that will never exist.
- Why keep the fidelity deliberately low? Answer: Because feedback follows finish. A polished frame draws comments about colour and spacing, while the questions a wireframe can actually settle — what is here and in what order — go unasked.
- Why wireframe the error and empty states? Answer: Because people see them, and because drawing them shows immediately whether the layout has room for the explanation they need. That discovery costs minutes on paper and days in code.

### Rubric and remediation

**Every screen and state in the branch has a frame**

Adequate evidence: A frame set covering the happy path and the exception states from your table, checked against the flow.

- 0 — Happy path only.
- 1 — Some states included, chosen by convenience.
- 2 — Every screen and state in the branch has a frame.
- 3 — As adequate, and the check found a state in the flow with no frame, which was then drawn.

If below 2: List the states from your flow and tick off each frame. Draw the missing ones, however uninteresting they look. Show at recheck: The complete frame set with the checklist.

**Real content is used and unknowns are marked**

Adequate evidence: Frames carrying labels and messages from your earlier work, with open decisions marked rather than filled with plausible text.

- 0 — Placeholder text throughout.
- 1 — Real content in places, invented text elsewhere.
- 2 — Real content throughout, with unknowns explicitly marked.
- 3 — As adequate, and at least one layout change was forced by the true length of a real label.

If below 2: Replace every invented string with either the real label from your m06 table or the words “unknown — needs a decision”. Show at recheck: The frames with the open-decision list.

**Each screen states its single job**

Adequate evidence: A one-sentence job written on every frame, with any two-job screen identified.

- 0 — No jobs stated.
- 1 — Jobs written as screen names.
- 2 — Every frame has a one-sentence job.
- 3 — As adequate, and a screen doing two jobs is identified and either split or justified.

If below 2: For each frame complete “this screen lets someone …”. Frames needing “and” are candidates for splitting. Show at recheck: The frames with job statements.

**One screen is drawn in two content orders and compared**

Adequate evidence: Two versions of one screen with a written note on what each favours and which was chosen.

- 0 — One version only.
- 1 — Two versions with no comparison.
- 2 — Two versions compared on what each favours, with a choice.
- 3 — As adequate, and the comparison references the research about what people compared on.

If below 2: Take the screen you are least sure about and reorder its content deliberately. Write which task each order serves better. Show at recheck: The two versions and the comparison.

### Portfolio contribution

Case-study material, especially the two-order comparison: showing an alternative you rejected and why is far more persuasive than showing one design that appears to have arrived complete.

### Assigned resources

- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — Choosing the fidelity of a prototype and what each level can be used to learn. Purpose: Establishes what a low-fidelity artefact can and cannot answer, which is the discipline of this lesson. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. Written for government service prototypes; the fidelity reasoning transfers, the delivery context does not. A paper click-through cannot validate performance, real data or implemented accessibility. Fallback: R05.
- R11: [GOV.UK Design System: patterns](https://design-system.service.gov.uk/patterns/) — One or two patterns matching screens in your branch, read for content order rather than for visual style. Purpose: Gives worked examples of what belongs on a step of a multi-step task and in what order. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Do not copy the government visual style or brand; take the structure and the content order only. Fallback: R02.

## Lesson 9: The same screen at three widths

Stable ID: m07-l09-v1. Core. Areas 7. Optional effort ~120 min.

**Objective.** Take two screens to mid fidelity at narrow, medium and wide widths, stating for each what reflows, what changes priority, what is hidden and what must never move.

**Bring forward.** Your low-fidelity frames and the m03 type scale and spacing work. Mid fidelity means real proportions and real text lengths, still without final visual design.

A screen is not one layout. Deciding how it behaves across widths is a design decision that gets made either by you or by whatever the browser does when nobody decided — and the second reliably produces a phone layout that hides the thing people came for.

### Learn

Reflow is not shrinking. As the width narrows, content re-orders and re-groups rather than becoming smaller: a side panel moves below or above the main content, a row of cards becomes a column, a table becomes a set of records. The design question is what order things take when stacked, and the answer comes from the screen's job — the thing the person came for goes first, whatever it did on the wide layout.

Decide the three behaviours explicitly for every element: reflow, change priority, or hide. Hiding is the one to be careful with. Content hidden on narrow screens is content unavailable to the people most likely to be on a phone, and the common pattern of hiding “secondary” material on mobile frequently hides exactly what a first-time visitor needed. If something is genuinely unnecessary on a small screen, ask honestly whether it is necessary on a large one.

Some things must never move. The price, the total, the primary action, the state of the thing — anything a person is tracking must remain reachable and visible at every width, and its position should be predictable across the set of screens. This is where a stated rule beats case-by-case judgement: write down the elements that are fixed in the hierarchy and design the rest around them.

Mid fidelity means real proportions and real text at real lengths, on a real grid, and still no final colour, imagery or type personality. That is enough to answer whether the layout works, which is the question at this stage, and not so much that feedback moves to aesthetics. Test with the longest real label you have, not the average one, and check what happens when the reader has enlarged their text — which the m03 lesson already taught you to do.

**Common misconception.** “Design the desktop layout and then adapt it for mobile.” Adapting downward tends to preserve the desktop's priorities and squeeze them, which is how a phone screen ends up with a hero image, three navigation rows and the price below the fold. Deciding the narrow layout first forces the priority question honestly, and widening from there is easier than the reverse.

### Worked example

The class detail screen at three widths. Narrow: title, date and time, price, what to bring, book action, then description — the order the research supported, with the image moved below the action because nobody had ever mentioned it. Medium: two columns, with the same four items still first in reading order. Wide: a side panel holding price, date and the action, sticky as the description scrolls. The never-move rule was written down — price, date, action and remaining places are visible at every width — and one element was hidden on narrow: a related-classes list, which was checked honestly and moved to the end rather than removed, since a first-time visitor might well want it.

#### The same screen at three widths

Take two screens to mid fidelity at narrow, medium and wide widths, stating for each what reflows, what changes priority, what is hidden and what must never move.

**Where to work:** Paper at three sizes — a phone-width column, a half sheet and a full sheet — is enough, and drawing the narrow one first is the point. If you prefer to see real reflow, a single local HTML file with a few CSS rules shows it honestly at every width with no account, install or design tool.

- Starting material: Your low-fidelity frames and the m03 type scale and spacing work. Mid fidelity means real proportions and real text lengths, still without final visual design.
- Create HaruCourse/Practice/m07-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# The same screen at three widths

Input artifact: Your low-fidelity frames and the m03 type scale and spacing work. Mid fidelity means real proportions and real text lengths, still without final visual design.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Two screens drawn at three widths with real text at its longest, a written never-move, may-reprioritise and may-hide rule set with justified hides, results from the long-label, enlarged-text and failed-image checks, and behaviour notes a developer could work from.

## 1. Read on responsive layout
- Read the assigned responsive chapters and the layout and spacing guidance. Note the difference between reflowing content and scaling a layout.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Write the rules first
- Before drawing, write which elements must never move, which may change priority and which may be hidden. Justify every hide.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Draw narrow, then wide
- Draw both screens at a narrow width first, then medium, then wide, using real text at its longest. Keep the never-move elements visible in all three.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Test the hard cases
- Check the longest label, the enlarged-text case from your m03 work, and what happens when an image fails to load. Record what breaks.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Write the behaviour notes and pause
- For each screen write what reflows, what changes priority and what is hidden at each width, in words a developer could implement from. Save the three versions and the notes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Rules for never-move, reprioritise and hide are written first: [evidence reference]
- Both screens are drawn at three widths with real text: [evidence reference]
- Long labels, enlarged text and a failed image were checked: [evidence reference]
- Behaviour notes are specific enough to implement from: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

List the elements a person tracks through the task — price, state, action — and declare them never-move. Then justify every remaining hide in one sentence each.

</details>

<details>
<summary>Hint 2</summary>

Redraw the narrow version first from the content priority, then widen. Use your longest real label everywhere it appears.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m07-l09-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Rules for never-move, reprioritise and hide are written first: A written rule set produced before the drawings, with a justification for each hidden element. Both screens are drawn at three widths with real text: Six drawings using real content at its longest, with the narrow version drawn first. Long labels, enlarged text and a failed image were checked: Recorded results for all three checks, with specific breakages named. Behaviour notes are specific enough to implement from: Per-screen notes stating what reflows, what changes priority and what is hidden at each width, in implementable terms.

**Bring forward:** Project evidence, and one of the clearest signals of craft: three widths of the same screen with written behaviour rules shows you design behaviour rather than pictures. Include the enlarged-text check; almost nobody does. Module handoff: Build the interface in m08


### Practice and pause points

- Read on responsive layout (~25 min): Read the assigned responsive chapters and the layout and spacing guidance. Note the difference between reflowing content and scaling a layout.
- Write the rules first (~25 min): Before drawing, write which elements must never move, which may change priority and which may be hidden. Justify every hide.
- Draw narrow, then wide (~35 min): Draw both screens at a narrow width first, then medium, then wide, using real text at its longest. Keep the never-move elements visible in all three.
- Test the hard cases (~20 min): Check the longest label, the enlarged-text case from your m03 work, and what happens when an image fails to load. Record what breaks.
- Write the behaviour notes and pause (~15 min): For each screen write what reflows, what changes priority and what is hidden at each width, in words a developer could implement from. Save the three versions and the notes.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper at three sizes — a phone-width column, a half sheet and a full sheet — is enough, and drawing the narrow one first is the point. If you prefer to see real reflow, a single local HTML file with a few CSS rules shows it honestly at every width with no account, install or design tool.

### Output

Two screens drawn at three widths with real text at its longest, a written never-move, may-reprioritise and may-hide rule set with justified hides, results from the long-label, enlarged-text and failed-image checks, and behaviour notes a developer could work from.

### Checks

- What is wrong with hiding secondary content on mobile? Answer: That the people most likely to be on a phone then have less than everyone else, and “secondary” is usually judged from the wide layout. If it is genuinely unnecessary on a small screen, that is a reason to question whether it belongs on the large one.
- Why design the narrow layout first? Answer: Because it forces the priority question. Adapting a wide layout downward tends to preserve its assumptions and compress them, which is how the thing people came for ends up below the fold.
- Why test with the longest real label rather than the average? Answer: Because the longest one is what breaks the layout, and it exists. Designing to the average guarantees a broken screen for the real content you already know about — and worse after translation.

### Rubric and remediation

**Rules for never-move, reprioritise and hide are written first**

Adequate evidence: A written rule set produced before the drawings, with a justification for each hidden element.

- 0 — No rules; each screen decided ad hoc.
- 1 — Rules written after the fact to describe what was drawn.
- 2 — Rules written first, with every hide justified.
- 3 — As adequate, and one intended hide was rejected after the justification could not be written.

If below 2: List the elements a person tracks through the task — price, state, action — and declare them never-move. Then justify every remaining hide in one sentence each. Show at recheck: The rule set with justifications.

**Both screens are drawn at three widths with real text**

Adequate evidence: Six drawings using real content at its longest, with the narrow version drawn first.

- 0 — One width, or wide-first with narrow adapted.
- 1 — Three widths but with shortened or placeholder text.
- 2 — Three widths for both screens with real text at its longest.
- 3 — As adequate, and the medium width is a genuine decision rather than an interpolation between the other two.

If below 2: Redraw the narrow version first from the content priority, then widen. Use your longest real label everywhere it appears. Show at recheck: The six drawings.

**Long labels, enlarged text and a failed image were checked**

Adequate evidence: Recorded results for all three checks, with specific breakages named.

- 0 — No checks.
- 1 — One or two checks, or results described impressionistically.
- 2 — All three checked with specific breakages named.
- 3 — As adequate, and at least one breakage was repaired and re-checked.

If below 2: Run each check and write the breakages as concrete sentences — what overlaps, what truncates, what disappears — rather than as “it gets cramped”. Show at recheck: The check results and any repair.

**Behaviour notes are specific enough to implement from**

Adequate evidence: Per-screen notes stating what reflows, what changes priority and what is hidden at each width, in implementable terms.

- 0 — No notes.
- 1 — Notes describing intent without stating what happens at which width.
- 2 — Specific per-width behaviour a developer could work from.
- 3 — As adequate, and the notes state the reading order at narrow width, not only the visual arrangement.

If below 2: Write each note as “at narrow, X moves above Y; Z is hidden; the action remains visible”. Anything vaguer will be decided by someone else. Show at recheck: The behaviour notes.

### Portfolio contribution

Project evidence, and one of the clearest signals of craft: three widths of the same screen with written behaviour rules shows you design behaviour rather than pictures. Include the enlarged-text check; almost nobody does.

### Assigned resources

- R16: [web.dev: learn responsive design](https://web.dev/learn/design/) — The layout and typography chapters, read for reflow and content priority rather than for code. Purpose: Supplies the reasoning about how layouts respond to width rather than scale with it. Effort: 60–90 selected min. Free reading, no account. Verified 2026-09-06. Its examples are web-focused; the priority reasoning applies to any medium, and reading it is not the same as having tested a real layout. Fallback: R15.
- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — The layout and spacing sections. Purpose: Gives a worked spacing and grid vocabulary to keep proportions consistent across the three widths. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Rebuild the reasoning; do not copy government branding, and treat its aesthetic as one considered option rather than a standard. Fallback: R03.

## Lesson 10: Every state a component can be in

Stable ID: m07-l10-v1. Core. Areas 7. Optional effort ~120 min.

**Objective.** Specify one interactive component and one whole screen in every state they can occupy — default, focus, loading, empty, error, success, disabled and unavailable — with what triggers each and what the person can do in it.

**Bring forward.** Your wireframes, your exception table and the m03 component state work. This lesson makes states a deliverable rather than something discovered during development.

Unspecified states are decided by whoever implements them, usually at speed, and that is where most of the small failures in a product come from: the button that looks enabled and does nothing, the list that appears broken when it is merely empty, the form that gives no sign it was submitted.

### Learn

A component's states are a list you can enumerate rather than a matter of judgement: default, hover where a pointer exists, focus for keyboard users, active while being pressed, loading, disabled, and error. Focus is the one most often forgotten, and it is the only way a keyboard user knows where they are — an interface where focus is invisible is unusable without a mouse, however it looks. Specify what changes in each state and never signal a state with colour alone, since the difference must survive being seen in greyscale.

A screen has states too, and they are not the same list: empty, partially loaded, fully loaded, error, permission-denied, offline and success-after-action. Each needs its own content, not merely a spinner: an empty list should say what will appear and how to start it, an error should say what happened and what to do, and a successful action should say what changed and what is possible next. Your exception table already wrote most of this wording; this lesson places it.

State what triggers each state and what leaves it. A loading state that has no defined end is how an interface hangs forever; an error state with no route out is a dead end. Write each as a small table — trigger, appearance, what the person can do, what ends it — because that is the form a developer can build from and a reviewer can check, and because writing it exposes the states you had not decided.

Disabled and unavailable are different and the distinction matters more than it sounds. Disabled means not yet: something must be completed first, and the interface should say what. Unavailable means not for you, or not now, which is the permission and availability work from earlier lessons. A disabled control with no explanation is read as a broken product, and it is the single most common state failure in student work.

**Common misconception.** “States are visual details for the UI stage.” They are behaviour, and they change what a person can do. Deciding them at the visual stage means deciding them by appearance — what looks good greyed out — rather than by what a person needs to know at that moment, which is why so many disabled buttons never explain themselves.

### Worked example

The book-a-place button was specified in eight states. Default. Focus, with a visible outline that is not colour alone. Loading, showing that the request is in progress with the label changed rather than replaced by a spinner alone. Disabled before a date is chosen, with the reason beside it — “choose a date first” — rather than a silent grey. Unavailable when the class is full, with the alternative-dates route from the flow. Error after a failed submission, keeping everything the person had entered. Success, naming the reference. And offline, saying the action will not be attempted until the connection returns. The screen was specified in seven states, and the empty one — no classes this week — was the one nobody had drawn, which had been showing as a blank panel.

#### Every state a component can be in

Specify one interactive component and one whole screen in every state they can occupy — default, focus, loading, empty, error, success, disabled and unavailable — with what triggers each and what the person can do in it.

**Where to work:** A state table plus a small sketch per state; photocopying or photographing in greyscale is the cheapest way to run the colour check. A local HTML file with a few CSS rules lets you check real focus behaviour, which paper cannot show — record it as untested if you do not build it.

- Starting material: Your wireframes, your exception table and the m03 component state work. This lesson makes states a deliverable rather than something discovered during development.
- Create HaruCourse/Practice/m07-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Every state a component can be in

Input artifact: Your wireframes, your exception table and the m03 component state work. This lesson makes states a deliverable rather than something discovered during development.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] State tables for one component and one screen, each row giving trigger, appearance, available actions and exit; a greyscale check; a keyboard focus check or a statement that it was not verified; and a list of any dead ends found and fixed.

## 1. Enumerate the states
- Read the assigned heuristics on status and error recovery. List every state your chosen component and screen can be in; aim for completeness before judging which matter.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Specify the component
- For each component state write the trigger, what changes visually, what the person can do and what ends it. Ensure no state is signalled by colour alone and that focus is visible.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Specify the screen
- Do the same for the whole screen, including empty, partially loaded, error, permission-denied, offline and success. Place the wording from your exception table.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Find the dead ends
- Check every state has a way out and every loading state has a defined end, including timeout. Fix any state a person could be stuck in.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Check greyscale and keyboard, then pause
- View the states in greyscale and confirm each is still distinguishable. Walk the screen by keyboard order and confirm focus is always visible. Record what you could not verify on paper.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Component and screen states are both enumerated completely: [evidence reference]
- Each state has a trigger, an appearance, actions and an exit: [evidence reference]
- Disabled and unavailable are distinguished and explained: [evidence reference]
- Greyscale and focus checks were run or explicitly not verified: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Work through the standard list and mark each state as applicable or not, with a reason for each not. States excluded without a reason are usually the ones that were forgotten.

</details>

<details>
<summary>Hint 2</summary>

Fill the exit column first: any state you cannot say how a person leaves is a potential dead end, and that is the row to fix.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m07-l10-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Component and screen states are both enumerated completely: Two state lists covering the standard states plus offline, permission-denied and empty where they apply. Each state has a trigger, an appearance, actions and an exit: A table row per state with all four columns filled. Disabled and unavailable are distinguished and explained: Separate specifications for the two, each with wording explaining why the control cannot be used. Greyscale and focus checks were run or explicitly not verified: A greyscale check of all states and a keyboard focus check, or a written statement of what could not be verified on paper.

**Bring forward:** Portfolio material and a strong interview artefact: a state table is concrete, checkable and rare in junior work. Present it alongside the screen it belongs to rather than as a separate specification. Module handoff: Build the interface in m08


### Practice and pause points

- Enumerate the states (~25 min): Read the assigned heuristics on status and error recovery. List every state your chosen component and screen can be in; aim for completeness before judging which matter.
- Specify the component (~30 min): For each component state write the trigger, what changes visually, what the person can do and what ends it. Ensure no state is signalled by colour alone and that focus is visible.
- Specify the screen (~30 min): Do the same for the whole screen, including empty, partially loaded, error, permission-denied, offline and success. Place the wording from your exception table.
- Find the dead ends (~20 min): Check every state has a way out and every loading state has a defined end, including timeout. Fix any state a person could be stuck in.
- Check greyscale and keyboard, then pause (~15 min): View the states in greyscale and confirm each is still distinguishable. Walk the screen by keyboard order and confirm focus is always visible. Record what you could not verify on paper.

Pause after any step; save the artifact and next action.

**Free tool path.** A state table plus a small sketch per state; photocopying or photographing in greyscale is the cheapest way to run the colour check. A local HTML file with a few CSS rules lets you check real focus behaviour, which paper cannot show — record it as untested if you do not build it.

### Output

State tables for one component and one screen, each row giving trigger, appearance, available actions and exit; a greyscale check; a keyboard focus check or a statement that it was not verified; and a list of any dead ends found and fixed.

### Checks

- Why is focus state not optional? Answer: Because it is how a keyboard user knows where they are. Without a visible focus indicator the interface is unusable without a pointer, regardless of how it looks to someone using a mouse.
- What is the difference between disabled and unavailable? Answer: Disabled means not yet — something must be done first, and the interface should say what. Unavailable means not for you or not now. Conflating them produces a control that says no without saying why.
- Why must every loading state have a defined end? Answer: Because otherwise the interface can wait forever and the person has no idea whether to keep waiting. A timeout with a message and a route out is part of the state, not an implementation detail.

### Rubric and remediation

**Component and screen states are both enumerated completely**

Adequate evidence: Two state lists covering the standard states plus offline, permission-denied and empty where they apply.

- 0 — Default and one or two others.
- 1 — A reasonable component list but no screen states.
- 2 — Both enumerated, including empty, offline and permission-denied.
- 3 — As adequate, and a state specific to your product is identified and specified.

If below 2: Work through the standard list and mark each state as applicable or not, with a reason for each not. States excluded without a reason are usually the ones that were forgotten. Show at recheck: The two complete lists.

**Each state has a trigger, an appearance, actions and an exit**

Adequate evidence: A table row per state with all four columns filled.

- 0 — States named only.
- 1 — Appearance described but triggers or exits missing.
- 2 — All four columns filled for every state.
- 3 — As adequate, and every loading state names its timeout behaviour.

If below 2: Fill the exit column first: any state you cannot say how a person leaves is a potential dead end, and that is the row to fix. Show at recheck: The completed state tables.

**Disabled and unavailable are distinguished and explained**

Adequate evidence: Separate specifications for the two, each with wording explaining why the control cannot be used.

- 0 — One greyed state covering both, unexplained.
- 1 — Distinguished but at least one lacks an explanation.
- 2 — Both specified with explanations in the interface.
- 3 — As adequate, and the unavailable case offers the alternative route from your flow.

If below 2: For every disabled control write the sentence that appears beside it saying what must happen first. If no sentence is possible, the control should probably not be shown yet. Show at recheck: The two specifications with wording.

**Greyscale and focus checks were run or explicitly not verified**

Adequate evidence: A greyscale check of all states and a keyboard focus check, or a written statement of what could not be verified on paper.

- 0 — Neither run nor mentioned.
- 1 — One run; the other assumed to pass.
- 2 — Both run, or honestly recorded as unverifiable in the current medium.
- 3 — As adequate, and a state that failed the greyscale check was repaired with a second signal added.

If below 2: Photograph or photocopy the states in greyscale and look for any pair you can no longer tell apart. Add a second signal — a label, an icon, a border weight — to each. Show at recheck: The greyscale results and the focus check or its limitation.

### Portfolio contribution

Portfolio material and a strong interview artefact: a state table is concrete, checkable and rare in junior work. Present it alongside the screen it belongs to rather than as a separate specification.

### Assigned resources

- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — Heuristic 1, visibility of system status, and heuristic 9, error recovery, read as the requirements every state must satisfy. Purpose: Sets what a person must be told in each state, which is what turns a list of states into a specification. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Heuristics do not enumerate states; the state list and the disabled-versus-unavailable distinction are the course's own. Fallback: R11.
- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — Feedback, signifiers and recovery. Purpose: Explains why a state without feedback is read as a broken product and what recovery each failure state owes. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Prevention techniques are options rather than a checklist; the greyscale and focus checks come from the accessibility resources used in m03 and m06. Fallback: R02.

## Lesson 11: The wireflow: one artefact someone else could build from

Stable ID: m07-l11-v1. Core. Areas 6, 7. Optional effort ~120 min.

**Objective.** Combine the flow, the screens and the state specifications into a single annotated wireflow, and have it read by someone who was not involved, recording every question they had to ask you.

**Bring forward.** The flow, the wireframes at three widths, the exception table and the state specifications. This lesson joins them; it should not require new design decisions, and anywhere it does is a gap worth finding.

Four separate artefacts that only make sense together, in your head, are not a deliverable. A wireflow is the form a designer's work actually travels in — to an engineer, to a reviewer, to yourself in three months — and the test of it is whether someone else can follow it without you in the room.

### Learn

A wireflow is the flow diagram with each node replaced by, or linked to, the screen a person sees there, annotated with the transitions and the conditions. It answers three questions at once: what happens in what order, what the person sees at each point, and what causes each move. Kept as three separate documents those answers drift apart, and the drift is invisible until an engineer builds from the one that is out of date.

Annotate what is not visible in a picture. What is required and what is optional, what happens on submission, what the back behaviour is, what is preserved when a person returns, what the timeout is, which elements never move across widths, and what happens when a request fails. These are the questions an engineer will otherwise ask you one at a time over a week, or decide alone if you are not available.

Mark what is decided and what is not. A wireflow claiming completeness while three labels are still guesses invites everyone to build on them, and the guesses become facts by being drawn confidently. Use an explicit open-questions list on the artefact itself, carrying the guesses from your m06 change note, the undecided permission cells and any content nobody has written — that list is a feature of a good handover, not an admission.

Version it and date it. The moment work is shared, several copies exist, and the commonest handover failure is not a missing annotation but two people looking at different versions confidently. A date, a version and a one-line note of what changed since the last one costs nothing and prevents an entire class of expensive confusion.

**Common misconception.** “I will explain it in the handover meeting.” The meeting produces agreement in the room and nothing durable; the person building it two weeks later works from the artefact and their memory of a conversation. Anything that matters must survive on the page, and the meeting is best spent on the open questions rather than on narrating what the page already says.

### Worked example

The wireflow assembled from a booking branch was one long sheet: nineteen nodes, nine screens attached at the nodes they belong to, transitions labelled with their conditions, and a margin column of annotations — required fields, back behaviour, what is preserved on return, the payment timeout, the never-move elements. It carried a dated version line and an open-questions list of six items, including two labels still marked as guesses and the refund rule that had never existed. A friend who had never seen the project read it and asked four questions, all recorded: what happens if the class is cancelled by the provider, whether the held place survives closing the browser, what the helper role sees on the day, and what “pending” means to a person who has never seen the word in that context. Three became design work; the fourth became a wording change.

#### The wireflow: one artefact someone else could build from

Combine the flow, the screens and the state specifications into a single annotated wireflow, and have it read by someone who was not involved, recording every question they had to ask you.

**Where to work:** Paper laid out on a table and photographed in sections, or a single Markdown document with the screens as images and the annotations as text — the second is easier to version and reads well on a phone. No handoff platform is involved anywhere in this module.

- Starting material: The flow, the wireframes at three widths, the exception table and the state specifications. This lesson joins them; it should not require new design decisions, and anywhere it does is a gap worth finding.
- Create HaruCourse/Practice/m07-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# The wireflow: one artefact someone else could build from

Input artifact: The flow, the wireframes at three widths, the exception table and the state specifications. This lesson joins them; it should not require new design decisions, and anywhere it does is a gap worth finding.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] One dated, versioned wireflow with screens at their nodes, conditions on every transition, annotations for the non-visible behaviour, an open-questions list, and a recorded list of the questions an uninvolved reader had to ask.

## 1. Read on prototype purpose
- Read the assigned prototype guidance and the patterns you used. Note what a shared artefact has to carry that a conversation does not.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Assemble the wireflow
- Place each screen at its node, label every transition with its condition, and include the exception states. Keep it on one sheet or one continuous document.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Annotate the invisible
- Add annotations for required and optional fields, submission behaviour, back behaviour, preserved state, timeouts, never-move elements and failure handling.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. List what is still open
- Write the open-questions list on the artefact: guessed labels, undecided permissions, unwritten content, untested assumptions. Date and version the whole thing.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Have it read, then pause
- Give it to someone who was not involved and ask them to talk through what happens. Record every question they ask without answering until they finish. Save the artefact and the question list.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Screens, transitions and conditions are in one artefact: [evidence reference]
- Non-visible behaviour is annotated: [evidence reference]
- Open questions are listed on the artefact: [evidence reference]
- An uninvolved reader's questions were recorded: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Lay the flow out and attach each frame at its node. Any transition you cannot label with a condition is a decision that has not been made.

</details>

<details>
<summary>Hint 2</summary>

Go through your own screens asking what an engineer would have to guess. Write an annotation for each guess.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m07-l11-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Screens, transitions and conditions are in one artefact: A single document placing each screen at its node with every transition labelled by its condition, including exception states. Non-visible behaviour is annotated: Annotations covering required and optional fields, submission, back behaviour, preserved state, timeouts and failure handling. Open questions are listed on the artefact: A visible list of guesses, undecided items and unwritten content, carried forward from earlier lessons, with a date and version. An uninvolved reader's questions were recorded: A list of the questions someone not involved had to ask, with what each will change.

**Bring forward:** The single most reusable artefact from this module. A wireflow with annotations and an honest open-questions list is what a hiring reviewer means when they ask whether you can hand work over. Module handoff: Build the interface in m08


### Practice and pause points

- Read on prototype purpose (~25 min): Read the assigned prototype guidance and the patterns you used. Note what a shared artefact has to carry that a conversation does not.
- Assemble the wireflow (~35 min): Place each screen at its node, label every transition with its condition, and include the exception states. Keep it on one sheet or one continuous document.
- Annotate the invisible (~25 min): Add annotations for required and optional fields, submission behaviour, back behaviour, preserved state, timeouts, never-move elements and failure handling.
- List what is still open (~20 min): Write the open-questions list on the artefact: guessed labels, undecided permissions, unwritten content, untested assumptions. Date and version the whole thing.
- Have it read, then pause (~15 min): Give it to someone who was not involved and ask them to talk through what happens. Record every question they ask without answering until they finish. Save the artefact and the question list.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper laid out on a table and photographed in sections, or a single Markdown document with the screens as images and the annotations as text — the second is easier to version and reads well on a phone. No handoff platform is involved anywhere in this module.

### Output

One dated, versioned wireflow with screens at their nodes, conditions on every transition, annotations for the non-visible behaviour, an open-questions list, and a recorded list of the questions an uninvolved reader had to ask.

### Checks

- What belongs in an annotation rather than in a drawing? Answer: Everything a picture cannot show: what is required, what happens on submission and on back, what is preserved, timeouts, and what happens when a request fails. Left out, each becomes a question or an unrecorded decision by someone else.
- Why list what is still undecided? Answer: Because a confident-looking artefact turns guesses into facts. An explicit open list tells the reader which parts to build on and which to check, which makes the whole thing more trustworthy rather than less.
- Why record the reader's questions instead of answering them immediately? Answer: Because each question marks something the artefact failed to say, and answering it in the room repairs the reader's understanding while leaving the document broken for the next person.

### Rubric and remediation

**Screens, transitions and conditions are in one artefact**

Adequate evidence: A single document placing each screen at its node with every transition labelled by its condition, including exception states.

- 0 — Separate documents that only cohere in the designer's head.
- 1 — Combined but with transitions unlabelled or exception states omitted.
- 2 — One artefact with screens, labelled transitions and exception states.
- 3 — As adequate, and system-driven transitions are visually distinguished from ones the person initiates.

If below 2: Lay the flow out and attach each frame at its node. Any transition you cannot label with a condition is a decision that has not been made. Show at recheck: The assembled wireflow.

**Non-visible behaviour is annotated**

Adequate evidence: Annotations covering required and optional fields, submission, back behaviour, preserved state, timeouts and failure handling.

- 0 — No annotations.
- 1 — Some annotations, mostly restating what the drawing shows.
- 2 — All the non-visible behaviours annotated.
- 3 — As adequate, and each annotation is written as something implementable rather than as an intention.

If below 2: Go through your own screens asking what an engineer would have to guess. Write an annotation for each guess. Show at recheck: The annotated artefact.

**Open questions are listed on the artefact**

Adequate evidence: A visible list of guesses, undecided items and unwritten content, carried forward from earlier lessons, with a date and version.

- 0 — No open list; everything presented as settled.
- 1 — A list exists but omits known guesses from earlier work.
- 2 — A complete open list, dated and versioned.
- 3 — As adequate, and each open item names who or what would settle it.

If below 2: Collect the guesses from your m06 change note, the undecided permission cells and any unwritten content, and put them on the artefact. Show at recheck: The open-questions list with the version line.

**An uninvolved reader's questions were recorded**

Adequate evidence: A list of the questions someone not involved had to ask, with what each will change.

- 0 — Not read by anyone else.
- 1 — Read, but questions answered in conversation and not recorded.
- 2 — Questions recorded, each with what it changes in the artefact.
- 3 — As adequate, and the artefact was revised and re-read, with the second reader's questions also recorded.

If below 2: Ask someone to narrate what happens from the artefact alone. Write down every point where they stop, without helping until they have finished. Show at recheck: The question list and the resulting revisions.

### Portfolio contribution

The single most reusable artefact from this module. A wireflow with annotations and an honest open-questions list is what a hiring reviewer means when they ask whether you can hand work over.

### Assigned resources

- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — What a prototype is for and what it must communicate to the people who build from it. Purpose: Frames the wireflow as a communication artefact rather than a drawing exercise. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. It covers prototypes rather than handover documents specifically; the annotation list here is the course's own. Fallback: R05.
- R11: [GOV.UK Design System: patterns](https://design-system.service.gov.uk/patterns/) — The patterns used in your branch, re-read for the behaviour each specifies beyond its layout. Purpose: Shows the level of behavioural detail a documented pattern carries, as a standard for your annotations. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Take the specification habit and the structure; the visual style is a government design system and not a universal standard. Fallback: R02.

## Lesson 12: Walk it with someone: the paper prototype test

Stable ID: m07-l12-v1. Core. Areas 6, 7. Optional effort ~120 min.

**Objective.** Run a moderated paper prototype test of two tasks with at least three participants, recording where each person hesitated, what they expected next and every place they went somewhere you had not drawn.

**Bring forward.** The wireflow and the open-questions list. Test the tasks your open questions bear on, not the parts you are confident about.

Everything so far has been reasoning. This is the first time a person meets the design, and paper is enough: the failures that matter at this stage are about order, wording and expectation, all of which show up on a sheet of paper as clearly as in a built product.

### Learn

The assigned guidance covers running a moderated session, and three habits carry most of the value. Give a task and a situation rather than instructions — “you want to book the Saturday class for you and your sister” — and then stop talking. When the person asks what something does, ask what they expect it to do. And when they are stuck, wait: the pause before you rescue them is where you learn what the design failed to communicate.

You are the computer, and you must be a dumb one. Show only what the design would show, respond only as it would, and resist explaining. If they tap something you have not drawn, that is a finding — write down what they expected to happen — and it is the most valuable result a paper test produces, because it shows the parts of the flow that exist in your head and nowhere else.

Record expectation, not just outcome. Before a screen changes, ask what they think will happen; afterwards, ask whether it did. A mismatch between expected and actual is the mechanism behind most usability failures, and it is invisible if you record only whether the task was completed. Note hesitations with the same care you did in the tree test — a completed task done anxiously is not a success.

Three participants will show you the serious problems, and this is a formative test rather than a measurement: no scores, no success rates, no comparison to a benchmark. What you are producing is a ranked list of problems with evidence, and the ranking should be by harm — what stops someone, costs them money, or loses their work — rather than by how often you saw it in three sessions.

**Common misconception.** “Paper is too crude; people cannot judge it.” People judge tasks, not fidelity, and they will tell you plainly that they cannot find the price on a piece of paper. What paper does change is what they comment on: they critique structure and wording rather than colours, which at this stage is exactly what you want.

### Worked example

Three sessions, two tasks, printed frames on a table. All three participants tried to tap the price to see what it included, which nothing in the design had anticipated — the single most valuable finding, and it came from an interaction that did not exist. Two hesitated at the review screen because the cancellation deadline was written as a date and they wanted to know how many days that was. One went back looking for the results list and found it gone, which confirmed the return-state problem from the browse lesson in a way no reasoning had. Nobody commented on the fact that the screens were pencil drawings. The problems were ranked by harm: losing the result set first, the deadline wording second, the unanticipated price tap third.

#### Walk it with someone: the paper prototype test

Run a moderated paper prototype test of two tasks with at least three participants, recording where each person hesitated, what they expected next and every place they went somewhere you had not drawn.

**Where to work:** Printed or hand-drawn frames, a table and a pen. Moving paper by hand is the whole method and it costs nothing; a clickable prototype adds nothing at this fidelity and takes an evening you could spend running a third session.

- Starting material: The wireflow and the open-questions list. Test the tasks your open questions bear on, not the parts you are confident about.
- Create HaruCourse/Practice/m07-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Walk it with someone: the paper prototype test

Input artifact: The wireflow and the open-questions list. Test the tasks your open questions bear on, not the parts you are confident about.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Two task scenarios tied to open questions, session records for at least three participants covering expectation, action, outcome and hesitation, a list of undrawn interactions people attempted, and a problem list ranked by harm with the sample stated.

## 1. Prepare the tasks and the kit
- Read the assigned session guidance. Write two task scenarios aimed at your open questions, print or lay out your frames, and extend your consent introduction to cover a design session.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Rehearse being the computer
- Run the tasks yourself, moving the paper as the design dictates. Note anywhere you would have to improvise a screen; draw those before the first session.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Run three sessions
- With consent, run both tasks with three participants. Ask what they expect before each change, wait during hesitation, and never explain. Record expectation, action, outcome and doubt.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Record the undrawn moments
- Immediately write every place a participant tried something you had not designed, with what they expected. These are your missing screens and interactions.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Rank by harm and pause
- List the problems and rank them by harm, not frequency. Note the participant count and route. If nobody consented, record the gap and keep the tasks and kit as the deliverable.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Tasks are scenarios aimed at open questions: [evidence reference]
- Expectation and hesitation are recorded, not just outcomes: [evidence reference]
- Undrawn interactions people attempted are captured: [evidence reference]
- Problems are ranked by harm with the sample stated: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Take two items from your open-questions list and write the situation in which a person would meet each. Remove any control names from the wording.

</details>

<details>
<summary>Hint 2</summary>

In the next session, ask “what do you think will happen?” before every screen change and write the answer verbatim.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m07-l12-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Tasks are scenarios aimed at open questions: Two task scenarios describing a situation and goal, each traceable to an item on the open-questions list. Expectation and hesitation are recorded, not just outcomes: Session records showing what each participant expected before a change, what happened and where they hesitated. Undrawn interactions people attempted are captured: A list of everything participants tried that the design did not include, with what they expected it to do. Problems are ranked by harm with the sample stated: A ranked problem list ordered by harm, with participant count and recruitment route attached.

**Bring forward:** Real evidence, and a complete loop when shown with the repair in the next lesson. Photographs of a paper test in progress, anonymised, with a ranked problem list, are among the most credible artefacts in a junior portfolio. Module handoff: Build the interface in m08


### Practice and pause points

- Prepare the tasks and the kit (~25 min): Read the assigned session guidance. Write two task scenarios aimed at your open questions, print or lay out your frames, and extend your consent introduction to cover a design session.
- Rehearse being the computer (~20 min): Run the tasks yourself, moving the paper as the design dictates. Note anywhere you would have to improvise a screen; draw those before the first session.
- Run three sessions (~40 min): With consent, run both tasks with three participants. Ask what they expect before each change, wait during hesitation, and never explain. Record expectation, action, outcome and doubt.
- Record the undrawn moments (~20 min): Immediately write every place a participant tried something you had not designed, with what they expected. These are your missing screens and interactions.
- Rank by harm and pause (~15 min): List the problems and rank them by harm, not frequency. Note the participant count and route. If nobody consented, record the gap and keep the tasks and kit as the deliverable.

Pause after any step; save the artifact and next action.

**Free tool path.** Printed or hand-drawn frames, a table and a pen. Moving paper by hand is the whole method and it costs nothing; a clickable prototype adds nothing at this fidelity and takes an evening you could spend running a third session.

### Output

Two task scenarios tied to open questions, session records for at least three participants covering expectation, action, outcome and hesitation, a list of undrawn interactions people attempted, and a problem list ranked by harm with the sample stated.

### Checks

- A participant asks what a button does. What do you say? Answer: “What do you expect it to do?” Their answer is the finding. Explaining it repairs this session and hides the fact that the design did not communicate it.
- Why record what people expected before the screen changed? Answer: Because the gap between expectation and outcome is the mechanism behind most usability failures. Recording only completion tells you that something went wrong, never what.
- Someone tapped something you never drew. What kind of result is that? Answer: One of the best available at this stage. It shows an interaction people expect to exist, and it maps exactly onto a part of the flow that lives only in your head.

### Rubric and remediation

**Tasks are scenarios aimed at open questions**

Adequate evidence: Two task scenarios describing a situation and goal, each traceable to an item on the open-questions list.

- 0 — Tasks are instructions naming the controls to use.
- 1 — Scenarios written but aimed at parts of the design you were already confident about.
- 2 — Both are situational and target real open questions.
- 3 — As adequate, and one task deliberately begins from a non-obvious entry point drawn from your flow.

If below 2: Take two items from your open-questions list and write the situation in which a person would meet each. Remove any control names from the wording. Show at recheck: The two task scenarios with their open questions.

**Expectation and hesitation are recorded, not just outcomes**

Adequate evidence: Session records showing what each participant expected before a change, what happened and where they hesitated.

- 0 — Completion recorded only.
- 1 — Some commentary but no systematic expectation capture.
- 2 — Expectation, action, outcome and hesitation recorded throughout.
- 3 — As adequate, and at least one completed task is marked as a problem because of the doubt involved.

If below 2: In the next session, ask “what do you think will happen?” before every screen change and write the answer verbatim. Show at recheck: The session records.

**Undrawn interactions people attempted are captured**

Adequate evidence: A list of everything participants tried that the design did not include, with what they expected it to do.

- 0 — Not captured.
- 1 — Noted informally without what was expected.
- 2 — Captured with the expectation for each.
- 3 — As adequate, and at least one is designed as a result, with the change traced to the sessions.

If below 2: Re-read your notes for every moment you had to say “that does not do anything”. Each is a row on this list. Show at recheck: The undrawn-interaction list.

**Problems are ranked by harm with the sample stated**

Adequate evidence: A ranked problem list ordered by harm, with participant count and recruitment route attached.

- 0 — An unordered list, or one ordered by how often it appeared in three sessions.
- 1 — Ranked but with no sample statement.
- 2 — Ranked by harm with the sample stated.
- 3 — As adequate, and the ranking distinguishes problems that stop a task from those that merely slow it.

If below 2: For each problem write what it costs the person — the task, money, time, trust — and order by that. Then add the sample line. Show at recheck: The ranked list with the sample statement.

### Portfolio contribution

Real evidence, and a complete loop when shown with the repair in the next lesson. Photographs of a paper test in progress, anonymised, with a ranked problem list, are among the most credible artefacts in a junior portfolio.

### Assigned resources

- R05: [GOV.UK: moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing) — Planning and running a session, writing tasks and moderating without leading. Purpose: Supplies the moderation discipline this lesson practises, including how to respond when a participant asks for help. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. Written for sessions with a built prototype and a note-taker; alone and on paper, run fewer tasks and record less rather than claiming more. Fallback: R12.
- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — What a paper prototype can and cannot validate. Purpose: Keeps the claims from this test inside what paper can support — order, wording and expectation, not performance or real data. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. A paper click-through cannot validate implemented accessibility, timing, real content volumes or performance; state that beside any finding. Fallback: R05.

## Lesson 13: Repair, re-test and write the decision record

Stable ID: m07-l13-v1. Core. Areas 6, 7. Optional effort ~120 min.

**Objective.** Repair the two highest-harm problems from your test, re-test them with someone new, and write a decision record for the whole module stating each significant decision, its evidence, its alternatives and what remains untested.

**Bring forward.** The ranked problem list, the wireflow and every open question. This lesson closes the module the way m05 and m06 closed: with a repair that was checked and a record another person could act on.

A test that changes nothing was a way of spending three people's time. And a set of design decisions whose reasoning exists only in your memory cannot be defended in a review, handed over, or explained in an interview — which is where most of this work will eventually be judged.

### Learn

Repair the highest-harm problems, not the easiest ones. There is always a wording fix that takes ten minutes and a structural problem that takes an afternoon, and the ten-minute fix is tempting because it produces visible progress. Rank by harm, repair the top two, and record the rest honestly as known and unfixed — a known unfixed problem is a normal state for a real product, and pretending otherwise is what makes a case study unbelievable.

Re-test with someone new. A person who has already seen the design cannot tell you whether the new version is clearer; they can only tell you whether they remember it. Re-test only the affected tasks, with fresh participants, and predict beforehand what should change — a prediction written in advance is what turns a re-test into evidence rather than a confirmation exercise.

The decision record is the artefact that keeps its value longest. For each significant decision: what was decided, what evidence supports it, what alternatives were rejected and why, and what remains untested. Written properly it is the spine of a case study, the answer to “why did you do that?” in an interview, and the thing that stops a future team re-running an argument you already settled with evidence.

Be exact about what this module did and did not establish. You have tested a paper prototype with a handful of people on two tasks. You have not established that the flow works at volume, on a real connection with real content, for people unlike your participants, or with assistive technology. Some of those come later in the course; all of them belong in the record now, because the gap between what was tested and what is claimed is the single most common failure in a design portfolio.

**Common misconception.** “The case study should show the design improving until it works.” A record showing one repair that worked, one that did not, and three known problems left unfixed is more credible and more useful than a narrative of steady improvement. Reviewers who have shipped products recognise the second as fiction.

### Worked example

The two highest-harm problems were repaired: results were preserved on return, and the cancellation deadline was rewritten as “free to cancel until Thursday 10 am — 3 days before the class”. Predicted outcomes were written first: people should return to their filtered list and continue comparing, and nobody should ask how many days. Re-tested with two new participants, the first prediction held and the second did not — both still asked, because the class date itself was not visible on that screen, which was a different problem than the one repaired. That was recorded rather than repaired again in the same breath. The decision record ran to twenty-two entries, of which five were marked as guesses, three as known unfixed problems, and one — the refund rule — as still not existing at all, four lessons after it was first discovered.

#### Repair, re-test and write the decision record

Repair the two highest-harm problems from your test, re-test them with someone new, and write a decision record for the whole module stating each significant decision, its evidence, its alternatives and what remains untested.

**Where to work:** A written record in plain text or Markdown, one entry per decision. Keeping it as text means it can be searched, versioned and pasted into a case study later; a decision record inside a design file is one you will not find when you need it.

- Starting material: The ranked problem list, the wireflow and every open question. This lesson closes the module the way m05 and m06 closed: with a repair that was checked and a record another person could act on.
- Create HaruCourse/Practice/m07-l13-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Repair, re-test and write the decision record

Input artifact: The ranked problem list, the wireflow and every open question. This lesson closes the module the way m05 and m06 closed: with a repair that was checked and a record another person could act on.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Two repairs with predictions written in advance, re-test records from at least one new participant, a decision record covering every significant decision with evidence, alternatives and untested aspects, and a written statement of what the module did not establish.

## 1. Choose and predict
- Take the top two problems by harm. For each write what you will change and what should happen in the re-test if the change works.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Repair
- Make the two changes in the wireflow and any affected screens and states. Change nothing else, so the re-test can attribute the result.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Re-test with someone new
- Run the affected tasks with at least one and preferably two people who have not seen the design. Record expectation, action, outcome and doubt as before.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Write the decision record
- For every significant decision in this module write what was decided, the evidence, the rejected alternatives and what is untested. Include the decisions your test contradicted.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. State the limits and pause
- Write what this module established and what it did not — volume, real content, connection, participants unlike yours, assistive technology. Save the record with the wireflow.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The two highest-harm problems were repaired, not the easiest: [evidence reference]
- Predictions were written before the re-test: [evidence reference]
- The decision record carries evidence, alternatives and gaps: [evidence reference]
- The limits of what was established are stated plainly: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Re-read your harm ranking and check what you actually changed. If the top two are untouched, repair them now and record why you started elsewhere.

</details>

<details>
<summary>Hint 2</summary>

Write the prediction now for any repair not yet re-tested, then run it. For repairs already tested, mark honestly that the prediction was retrospective.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m07-l13-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The two highest-harm problems were repaired, not the easiest: Repairs addressing the top of the harm ranking, with unfixed problems recorded. Predictions were written before the re-test: A written prediction per repair, produced before the sessions, with the actual outcome beside it. The decision record carries evidence, alternatives and gaps: An entry per significant decision with what was decided, the evidence, the rejected alternatives and what remains untested. The limits of what was established are stated plainly: A written statement naming what was not tested: volume, real content, real connection, different participants and assistive technology.

**Bring forward:** This is the module's case-study spine, and the point where the research-led project has a documented design with tested decisions. Present the record with its guesses and unfixed problems intact; a design story with no unresolved parts reads as invented to anyone who has shipped anything. Module handoff: Build the interface in m08


### Practice and pause points

- Choose and predict (~25 min): Take the top two problems by harm. For each write what you will change and what should happen in the re-test if the change works.
- Repair (~30 min): Make the two changes in the wireflow and any affected screens and states. Change nothing else, so the re-test can attribute the result.
- Re-test with someone new (~25 min): Run the affected tasks with at least one and preferably two people who have not seen the design. Record expectation, action, outcome and doubt as before.
- Write the decision record (~25 min): For every significant decision in this module write what was decided, the evidence, the rejected alternatives and what is untested. Include the decisions your test contradicted.
- State the limits and pause (~15 min): Write what this module established and what it did not — volume, real content, connection, participants unlike yours, assistive technology. Save the record with the wireflow.

Pause after any step; save the artifact and next action.

**Free tool path.** A written record in plain text or Markdown, one entry per decision. Keeping it as text means it can be searched, versioned and pasted into a case study later; a decision record inside a design file is one you will not find when you need it.

### Output

Two repairs with predictions written in advance, re-test records from at least one new participant, a decision record covering every significant decision with evidence, alternatives and untested aspects, and a written statement of what the module did not establish.

### Checks

- Why write the prediction before the re-test? Answer: Because afterwards any result can be read as an improvement. A prediction written first makes the re-test capable of failing, which is what makes it evidence.
- Why re-test with someone new rather than the same participant? Answer: Because a person who has seen the design already knows where things are. They can tell you whether they remember it, not whether it is now clearer to someone arriving fresh.
- What should a decision record say about problems you did not fix? Answer: That they exist, how much harm they do and why they were not fixed. Known unfixed problems are the normal state of a real product; hiding them makes everything else in the record less believable.

### Rubric and remediation

**The two highest-harm problems were repaired, not the easiest**

Adequate evidence: Repairs addressing the top of the harm ranking, with unfixed problems recorded.

- 0 — Only quick fixes made.
- 1 — One high-harm repair and one convenience fix.
- 2 — Both repairs address the top of the harm ranking, with the rest recorded as known.
- 3 — As adequate, and the record states what it would take to fix the highest remaining problem.

If below 2: Re-read your harm ranking and check what you actually changed. If the top two are untouched, repair them now and record why you started elsewhere. Show at recheck: The repairs against the ranking.

**Predictions were written before the re-test**

Adequate evidence: A written prediction per repair, produced before the sessions, with the actual outcome beside it.

- 0 — No predictions.
- 1 — Predictions written after the sessions.
- 2 — Predictions written first with outcomes recorded against them.
- 3 — As adequate, and a prediction that failed is analysed rather than explained away.

If below 2: Write the prediction now for any repair not yet re-tested, then run it. For repairs already tested, mark honestly that the prediction was retrospective. Show at recheck: The predictions and outcomes.

**The decision record carries evidence, alternatives and gaps**

Adequate evidence: An entry per significant decision with what was decided, the evidence, the rejected alternatives and what remains untested.

- 0 — A summary of the final design.
- 1 — Decisions listed with evidence but no alternatives or gaps.
- 2 — All four elements per entry, including guesses marked as guesses.
- 3 — As adequate, and at least one entry records a decision your own test contradicted, with what you did about it.

If below 2: Go through the wireflow and write one entry per decision. Entries with an empty evidence column are guesses and must be marked. Show at recheck: The decision record.

**The limits of what was established are stated plainly**

Adequate evidence: A written statement naming what was not tested: volume, real content, real connection, different participants and assistive technology.

- 0 — Findings written as though the design is validated.
- 1 — A general note about limited testing.
- 2 — Specific untested aspects named, including who was not represented.
- 3 — As adequate, and the statement names which untested aspect is most likely to change a decision, and where in the course it will be addressed.

If below 2: List everything a real product meets that your paper test did not, then write the two sentences you would want a reviewer to read before believing anything else. Show at recheck: The limitations statement.

### Portfolio contribution

This is the module's case-study spine, and the point where the research-led project has a documented design with tested decisions. Present the record with its guesses and unfixed problems intact; a design story with no unresolved parts reads as invented to anyone who has shipped anything.

### Assigned resources

- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — Deciding what to change after testing, and what a prototype at this fidelity can support. Purpose: Keeps the repair and the claims inside what a paper test can license. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. It does not cover decision records, which are this lesson's own; nothing here validates performance, real data volumes or implemented accessibility. Fallback: R05.
- R02: [Nielsen: ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) — All ten, used once as a final review pass over the repaired wireflow. Purpose: Provides a last structured sweep for problems your two tasks did not touch, clearly separated from tested findings. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. A heuristic finding is an expert opinion, not evidence: record any issue found this way in a separate list from the tested problems. Fallback: R11.
