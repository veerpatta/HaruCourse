# Delivery and collaboration

Generated from src/module14.ts; edit that source, then run npm run docs:generate. Level 4 · Module m14 · requirement areas 16. Optional effort 30 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m13. This is guidance for meaningful practice, not a lock. Module approved resource pair: R18 / R19. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: How the work actually reaches people

Stable ID: m14-l01-v1. Core. Areas 16. Optional effort ~120 min.

**Objective.** Map the path a design takes from agreed to used in a team you can observe or read about, and name the three points where designs most often change.

**Bring forward.** Your m12 handover and m13 system documentation.

Designers who do not understand delivery hand over work that gets changed without them and then feel surprised.

### Learn

The stages are recognisable across teams even when the vocabulary differs: someone decides what to do next, someone estimates it, someone builds it, someone reviews and tests it, and it reaches people. Learning to recognise those stages in whatever process you meet is more useful than learning one methodology's terminology.

Designs change at three predictable points. At slicing, because the whole thing does not fit and someone chooses a part. At estimation, because a detail turns out to be expensive. And during build, because reality asserts itself. A designer who is present at the first two changes the outcome; one who is absent finds out at review.

The assigned service standard is not a process description but a list of outcomes a process should protect: understanding users, solving whole problems, iterating, making things accessible, and measuring. Reading it as a checklist for your own delivery is a way of noticing which outcome your team is currently sacrificing.

None of this makes design decisions someone else's job. It makes the timing of your involvement a decision: specifications answer questions asked at build time, and presence answers questions asked at slicing time, which are usually the bigger ones.

**Common misconception.** “I hand over the design and the team builds it.” Every team modifies designs during delivery, because building reveals what drawing did not. The choice is whether those modifications happen with you or without you.

### Worked example

The path was mapped from a real team: a fortnightly planning session picks work; an engineer estimates and often splits it; a build takes days to a week; a review compares the build with the design; a test pass finds defects; and a release goes out weekly behind a flag. The three change points were named with examples: at slicing the booking flow was split so that the cancellation path shipped a fortnight later; at estimation the held-place timer turned out to need server work and was simplified; during build the empty state was invented by the engineer because the design had not included one — which the m08 lessons would have prevented.

### Practice and pause points

- Read the standard (~25 min): Read the assigned standard's points about iteration, accessibility and measurement. Write which outcomes a delivery process is supposed to protect.
- Map a real path (~30 min): Map the stages from decision to release in a team you can observe or read about. Name who decides at each stage.
- Find the change points (~25 min): Identify where designs get modified. Give a real or plausible example for each.
- Decide where to be (~25 min): Mark the stages where your presence changes the outcome. Mark the stages where a specification is enough.
- Check against the standard (~15 min): Name two outcomes your mapped process would currently fail. Save the map and the notes.

Pause after any step; save the artifact and next action.

**Free tool path.** Reading and observation. If you cannot observe a team, the assigned standard and a public project's issue tracker give enough structure to map the stages.

### Output

A mapped path from agreed design to person using it; Three named points where designs change, with examples; A note of where you would need to be present; Two outcomes from the standard your process would currently fail

### Checks

- Where do designs change most? Answer: At slicing, at estimation and during build. The first two are decisions about scope; the third is reality. A designer present at the first two changes the outcome.
- What is the service standard useful for here? Answer: It names the outcomes a delivery process should protect — user understanding, whole problems, iteration, accessibility, measurement — so you can see which one is being sacrificed.
- Is a good specification enough? Answer: It answers questions asked at build time. Questions asked at slicing time — what ships first, what is cut — need you in the room.

### Rubric and remediation

**The path is mapped with decision-makers named**

Adequate evidence: A stage-by-stage map from decision to release with who decides at each.

- 0 — A generic process diagram.
- 1 — Stages named without decision-makers.
- 2 — Both, based on a real or documented team.
- 3 — As adequate, and the map notes where the stages overlap or repeat.

If below 2: Write the stages you can actually observe or read about, and name who decides at each. Show at recheck: The mapped path.

**Three change points are identified with examples**

Adequate evidence: Slicing, estimation and build named with a concrete example each.

- 0 — Change points not identified.
- 1 — Named without examples.
- 2 — All three with examples.
- 3 — As adequate, and one example is from your own work.

If below 2: For each stage ask what could force the design to change there, and give an instance. Show at recheck: The change points.

**Presence versus specification is decided per stage**

Adequate evidence: A per-stage decision about whether documentation suffices.

- 0 — Not considered.
- 1 — A general preference for being involved.
- 2 — Each stage marked with a reason.
- 3 — As adequate, and the marking accounts for your own available time.

If below 2: For each stage ask what a specification could answer and what only a conversation could. Show at recheck: The per-stage decisions.

**Two failing standard outcomes are named**

Adequate evidence: Two outcomes the mapped process would currently fail, with why.

- 0 — Not checked.
- 1 — Outcomes named without reasoning.
- 2 — Two named with the reason each would fail.
- 3 — As adequate, and one is something you could influence yourself.

If below 2: Read the standard's points against your map and find the two weakest. Show at recheck: The failing outcomes.

### Portfolio contribution

A delivery map with change points is a useful interview artefact: it shows you understand where design decisions are actually made.

### Assigned resources

- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The points on solving a whole problem for users, iterating and improving frequently, making sure everyone can use the service, and defining what success looks like. Purpose: Names the outcomes a delivery process is supposed to protect. Effort: 60 selected min. Free reading, no account. Verified 2026-09-06. Written for UK government services with statutory obligations; the outcomes transfer, the compliance context does not. Fallback: R07.
- R18: [Atlassian: user stories](https://www.atlassian.com/agile/project-management/user-stories) — How work is described so it can be planned and built. Purpose: Introduces the unit of delivery work the rest of this module uses. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. Vendor-published but tool-neutral in content; no Jira subscription is required or implied. Fallback: R26.

## Lesson 2: Writing work that can be built

Stable ID: m14-l02-v1. Core. Areas 16. Optional effort ~120 min.

**Objective.** Write five stories for your product that each state who, what and why, are independently valuable, and are small enough to build in a few days.

**Bring forward.** Your m10 findings and m12 handover.

A story is where research becomes work. Written badly it delivers a screen; written well it delivers an outcome.

### Learn

The three-part form exists to keep the outcome attached to the work. “Add a status line to the review screen” describes a change; “as someone booking for two people, I can see that my place is held so that I do not pay twice” describes a result, and the second lets an engineer suggest a cheaper way to achieve it.

Independent value is the harder discipline. Work sliced by layer — the interface this week, the logic next — delivers nothing for weeks and hides risk. Work sliced by outcome delivers something usable each time, which is what makes feedback possible and cancellation cheap.

Size matters because feedback frequency matters. A story that takes a month accumulates decisions nobody revisits; a story that takes three days gets seen, used and corrected. If a story is too big, the honest move is to find the smaller outcome inside it rather than to split it by component.

The assigned reading is explicit that a story is a placeholder for a conversation. That is why your specification work still matters: the story carries the outcome and the conversation carries the detail, with your states, wording and behaviour as its material.

**Common misconception.** “Stories are a formality that translate designs into tickets.” Written as translations they lose the reason, and the first time an engineer meets a constraint they will guess at the intent. The why is the part that survives contact with reality.

### Worked example

Five stories from the booking work. “As someone who has booked, I can see that my place is held and for how long, so that I do not pay twice.” “As someone whose payment did not confirm, I can find out what happened without ringing, so that I do not book again.” Three were sized in days; two were too big and were re-sliced by outcome rather than by layer — the second became “I can see the status of a booking from the confirmation message” and “I can see the status without the message”, each independently useful.

### Practice and pause points

- Read and draft (~25 min): Read the assigned story guidance. Draft five stories from your findings and design work.
- Restore the why (~25 min): Check each story states why it matters to the person. Rewrite any that describes a change rather than an outcome.
- Test independence (~30 min): For each story ask whether shipping it alone would help someone. Merge or re-slice the ones that fail.
- Size and re-slice (~25 min): Estimate each in days. Re-slice anything over about a week by outcome, not by layer.
- Record (~15 min): Note which stories came directly from research findings. Save the five stories with their checks.

Pause after any step; save the artifact and next action.

**Free tool path.** Written work in any text file. Trackers are common in teams and are not required for the exercise.

### Output

Five stories in who, what, why form; An independence check per story; A size estimate in days with anything larger re-sliced; One story re-sliced by outcome rather than by layer

### Checks

- Why does the why matter to an engineer? Answer: Because it lets them propose a cheaper way to reach the same outcome. Without it they build the described change and cannot know what would have been acceptable instead.
- What is wrong with slicing by layer? Answer: It delivers nothing usable for weeks, hides risk until integration, and makes feedback impossible until everything is done.
- Is a story a specification? Answer: No, it is a placeholder for a conversation. Your states, wording and behaviour specifications are the material of that conversation.

### Rubric and remediation

**Each story names person, capability and reason**

Adequate evidence: Five stories in the three-part form with real outcomes.

- 0 — Stories describe changes to screens.
- 1 — Form used but the reason is a restatement of the capability.
- 2 — All five name a person, a capability and a genuine reason.
- 3 — As adequate, and the reasons trace to research findings.

If below 2: For each story complete “so that …” with something the person cares about, not a restatement. Show at recheck: The rewritten stories.

**Each is independently valuable**

Adequate evidence: An independence check per story with merges or re-slices where it failed.

- 0 — Stories depend on each other to be useful.
- 1 — Independence asserted without checking.
- 2 — Each checked, with failures resolved.
- 3 — As adequate, and the order of value is stated.

If below 2: For each story ask what shipping only that would give someone. If nothing, re-slice. Show at recheck: The independence checks.

**Sizes are estimated and large ones re-sliced**

Adequate evidence: Day estimates with anything over about a week split.

- 0 — No sizing.
- 1 — Sizes given without action on large stories.
- 2 — Sizes with large ones re-sliced.
- 3 — As adequate, and the sizing acknowledges what you cannot know without an engineer.

If below 2: Estimate in days, then split anything larger by finding the smaller outcome inside it. Show at recheck: The sized list.

**At least one re-slice is by outcome, not layer**

Adequate evidence: A split producing two independently useful stories rather than layers.

- 0 — Splits are by component or layer.
- 1 — One outcome-based split attempted but the halves are not independently useful.
- 2 — A genuine outcome split with both halves useful.
- 3 — As adequate, and the write-up shows the layer-based split you rejected.

If below 2: Take your largest story and find the smallest version that would still help someone. Show at recheck: The re-slice.

### Portfolio contribution

Five well-formed stories traced to research findings show that you can carry evidence into delivery, which is where most research is lost.

### Assigned resources

- R18: [Atlassian: user stories](https://www.atlassian.com/agile/project-management/user-stories) — The story structure, examples, and the point that a story is a placeholder for a conversation. Purpose: Supplies the form and the discipline this lesson applies. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. Vendor-published; the content is tool-neutral and no subscription is required. Fallback: R26.
- R47: [Ryan Singer: Shape Up](https://basecamp.com/shapeup/webbook) — Setting the appetite and fixed time with variable scope. Purpose: Frames sizing as a decision about how much time is worth spending rather than a prediction. Effort: 60–90 selected min. Free to read online; a print edition is sold and is not required. Verified 2026-09-06. It teaches scope strategy and deciding what not to build, not market positioning. Fallback: R07.

## Lesson 3: Acceptance criteria that can be checked

Stable ID: m14-l03-v1. Core. Areas 16. Optional effort ~120 min.

**Objective.** Write acceptance criteria for three stories, covering success, failure and accessibility, that another person could verify without asking you what you meant.

**Bring forward.** Your five stories and your m11 accessibility work.

Criteria are the difference between “it is done” and “we agree it is done”. They are also where accessibility either enters delivery or does not.

### Learn

Observable is the whole test. “The status is clear” cannot be checked; “the review screen states that the place is held and shows the remaining time” can. The assigned reading frames criteria as conditions of satisfaction, and the practical version is that a person with no context can read the criterion, look at the build and say yes or no.

Failure paths belong in the criteria because they are what gets dropped under time pressure. If the error state, the empty state and the expiry behaviour are not written as conditions, they are optional, and the first version to ship will not have them.

Accessibility is the same argument with higher stakes. Criteria naming keyboard operation, focus visibility, announced errors and contrast are what make those things part of done rather than a later ticket that is never scheduled. Your m11 work becomes deliverable here or it does not become deliverable at all.

Criteria should describe outcomes, not implementations. “Uses a dialog element” constrains the engineer without saying why; “can be dismissed with the keyboard and returns focus to the control that opened it” states what must be true and leaves the how open, which is both more respectful and more durable.

**Common misconception.** “Acceptance criteria are a testing artefact.” They are a design artefact that testing uses. They record what the design actually requires, which is why writing them is your work and not the tester's.

### Worked example

The held-place story got seven criteria. Success: the review screen states the place is held and the remaining time; the time counts down; when it expires the person is told and their details are preserved. Failure: if the hold cannot be confirmed the screen says so and does not proceed to payment. Accessibility: the timer is announced when it appears and at expiry rather than every second; the state is distinguishable without colour; the screen is operable from a keyboard. Two criteria were rewritten after someone read them and asked what “clearly” meant.

### Practice and pause points

- Read and draft (~25 min): Read the assigned guidance on acceptance criteria. Draft criteria for three stories, success paths first.
- Add the failure paths (~25 min): For each story, write criteria for the error, empty and expiry cases. Use the wording from your m07 exception table.
- Add accessibility (~25 min): Write criteria for keyboard operation, focus, announcement and contrast. Take them from your m11 checks rather than inventing them.
- Remove implementation (~25 min): Rewrite any criterion that names a technique rather than an outcome. Keep constraints only where they are genuinely required.
- Test for ambiguity (~20 min): Ask someone to read the criteria and say how they would check each. Rewrite anything two people could disagree about. Save the criteria with the stories.

Pause after any step; save the artifact and next action.

**Free tool path.** Written criteria beside each story. No tooling required.

### Output

Criteria for three stories covering success and failure; Accessibility criteria drawn from your m11 work; Outcome-shaped criteria with no implementation constraints; A read-through by someone else with ambiguities rewritten

### Checks

- What makes a criterion observable? Answer: Someone with no context can read it, look at the build and answer yes or no. Anything requiring your interpretation is not yet a criterion.
- Why put accessibility in the criteria? Answer: Because otherwise it is optional. Criteria are what define done, and anything outside them becomes a ticket that is never scheduled.
- Why avoid naming implementations? Answer: Because it constrains the engineer without stating why. Describe what must be true and leave the how open unless the how is genuinely the requirement.

### Rubric and remediation

**Criteria are observable by someone without context**

Adequate evidence: Criteria a reader could verify, confirmed by a read-through with someone else.

- 0 — Criteria use words like clear, easy or intuitive.
- 1 — Mostly observable with one or two subjective items.
- 2 — All observable and confirmed by a reader.
- 3 — As adequate, and the reader's questions are recorded and resolved.

If below 2: Rewrite any criterion containing a judgement word as something a person can look at and confirm. Show at recheck: The rewritten criteria.

**Failure paths are covered as well as success**

Adequate evidence: Criteria for error, empty and expiry cases per story where they apply.

- 0 — Success only.
- 1 — One failure case covered.
- 2 — All applicable failure paths covered.
- 3 — As adequate, and the wording matches the m07 exception table exactly.

If below 2: Take your exception table and write a criterion for each case that applies to these stories. Show at recheck: The failure criteria.

**Accessibility criteria come from the m11 work**

Adequate evidence: Criteria naming keyboard, focus, announcement and contrast requirements.

- 0 — Absent.
- 1 — A general accessibility criterion with no specifics.
- 2 — Specific criteria drawn from your own checks.
- 3 — As adequate, and the criteria name how each would be verified.

If below 2: Copy the relevant checks from m11 into criteria form for each story. Show at recheck: The accessibility criteria.

**Criteria describe outcomes rather than implementations**

Adequate evidence: No criterion names a technique unless the technique is the requirement.

- 0 — Implementation prescribed throughout.
- 1 — Some prescription remaining.
- 2 — Outcomes throughout, with justified exceptions.
- 3 — As adequate, and one prescription was removed after asking why it mattered.

If below 2: For each criterion naming a technique, ask what outcome it protects and write that instead. Show at recheck: The revised criteria.

### Portfolio contribution

Acceptance criteria including accessibility are direct evidence that your standards reach delivery rather than stopping at the design file.

### Assigned resources

- R26: [Atlassian: acceptance criteria](https://www.atlassian.com/work-management/project-management/acceptance-criteria) — What acceptance criteria are, with examples of good and poor ones. Purpose: Supplies the form and the observability test this lesson uses. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. Vendor-published and tool-neutral; no subscription is required. It does not cover accessibility criteria, which come from your own m11 work. Fallback: R18.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The checks relevant to your stories. Purpose: Gives verifiable accessibility conditions to turn into criteria. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Preliminary checks; passing them is not conformance, and criteria should say what will be checked and how. Fallback: R28.

## Lesson 4: Appetite, and deciding what not to build

Stable ID: m14-l04-v1. Core. Areas 16. Optional effort ~120 min.

**Objective.** Set an appetite for one feature, cut the scope to fit it, and write what you removed and what would justify bringing each part back.

**Bring forward.** Your stories and criteria.

Estimating how long something will take is guessing. Deciding how much time it is worth is a decision you can actually make.

### Learn

The assigned book's central move is to set the appetite first: this is worth two weeks, not six, and then shape something that fits. That inverts the usual order, where a design is produced and then estimated, and the estimate is negotiated by removing quality rather than scope.

Fixed time with variable scope is the practical consequence. When the date is fixed and the scope moves, the team makes design decisions under a constraint you set deliberately. When the scope is fixed and the date moves, the constraint arrives later as pressure, and the things that get dropped are the ones nobody wrote down: the error states, the accessibility work, the empty screens.

Cutting well is design work. It means finding the version that still delivers the outcome — the reason in your story — with less. That is why the story's why matters here: a feature described as a screen cannot be cut, while a feature described as an outcome usually has a smaller version.

Recording what you cut turns a loss into a decision. Each cut item should carry what would justify bringing it back: evidence, a specific number of complaints, a second use case. Without that, cuts return through advocacy rather than evidence, which is how scope grows again.

**Common misconception.** “We will build it properly and see how long it takes.” That defers the constraint rather than removing it, and the constraint arrives as a rushed final week in which quality is cut silently. Deciding the appetite first makes the trade visible while you can still design for it.

### Worked example

The appetite for the booking improvements was set at two weeks. The full design was six. Cutting to fit kept the held-place message, the payment states and the accessible form, and removed the shortlist, the filter presets and the redesigned card. Each removal recorded what would bring it back: the shortlist if a second study showed people comparing more than three options, the presets if support saw repeated requests, and the card if the system needed it elsewhere. One item was marked not worth building at all — an animated confirmation — with the reason.

### Practice and pause points

- Read and set the appetite (~30 min): Read the assigned chapters on appetite and fixed time with variable scope. Decide how much time this feature is worth, before scoping it. Write why that amount and not more.
- Cut to fit (~30 min): List everything in the current design. Keep only what delivers the outcome in your story's why. Stop when the remainder fits the appetite.
- Record the cuts (~25 min): For each removed item write what would justify bringing it back. Make the justification evidence, not enthusiasm.
- Name what should never be built (~20 min): Identify at least one item not worth building at all. Write the reason so it does not return.
- Check the remainder (~15 min): Confirm what survives still delivers the outcome. Save the appetite, the scope and the cut list.

Pause after any step; save the artifact and next action.

**Free tool path.** Written work. The discipline is deciding and recording, not tooling.

### Output

A stated appetite for one feature; A scope that fits it, with what survives; A cut list with what would bring each item back; At least one item marked not worth building

### Checks

- What does setting an appetite change? Answer: It makes the constraint a decision you design within rather than a pressure that arrives later and removes quality silently.
- Why does the story's why make cutting possible? Answer: Because an outcome usually has a smaller version, while a feature described as a screen can only be built or not built.
- Why record what would bring a cut item back? Answer: Because otherwise it returns through advocacy rather than evidence, and the scope grows again for reasons nobody can examine.

### Rubric and remediation

**An appetite is set before scoping, with a reason**

Adequate evidence: A stated time budget with the reasoning for that amount.

- 0 — Scope decided first and estimated afterwards.
- 1 — An appetite stated without reasoning.
- 2 — Appetite set first with a reason.
- 3 — As adequate, and the reason references the value of the outcome rather than availability.

If below 2: Write how much time this outcome is worth before looking at the design again. Show at recheck: The appetite statement.

**The scope fits and still delivers the outcome**

Adequate evidence: A reduced scope with a check that the story's why is still met.

- 0 — Scope unchanged.
- 1 — Reduced by removing quality — states, accessibility — rather than features.
- 2 — Reduced by feature while the outcome survives.
- 3 — As adequate, and the reduction is checked against the acceptance criteria.

If below 2: Restore any quality you cut and remove a feature instead; quality cuts are the ones that come back as defects. Show at recheck: The reduced scope.

**Cuts are recorded with evidence-based return conditions**

Adequate evidence: Each removed item with what evidence would justify building it.

- 0 — Cuts unrecorded.
- 1 — Recorded without return conditions.
- 2 — Each with an evidence-based condition.
- 3 — As adequate, and one condition names the study or signal that would produce it.

If below 2: For each cut write what you would have to see before building it. Show at recheck: The cut list.

**At least one item is refused outright**

Adequate evidence: One item marked as not worth building, with the reason.

- 0 — Everything deferred rather than refused.
- 1 — A refusal without reasoning.
- 2 — A clear refusal with the reason recorded.
- 3 — As adequate, and the refusal names what it would cost to maintain if built.

If below 2: Find the item that would add cost without serving the outcome, and refuse it in writing. Show at recheck: The refusal.

### Portfolio contribution

A cut list with return conditions is unusual and persuasive: it shows you can shape work to a constraint rather than only design the ideal.

### Assigned resources

- R47: [Ryan Singer: Shape Up](https://basecamp.com/shapeup/webbook) — Setting the appetite, fixed time with variable scope, and risks and rabbit holes. Purpose: Supplies the appetite-first method this lesson applies. Effort: 60–90 selected min. Free to read online; a print edition is sold and not required. Verified 2026-09-06. It teaches scope strategy and deciding what not to build; it is not market positioning and describes one company's process. Fallback: R07.
- R18: [Atlassian: user stories](https://www.atlassian.com/agile/project-management/user-stories) — The role of the reason in a story. Purpose: Connects cutting to the outcome the story protects. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Tool-neutral; no subscription required. Fallback: R26.

## Lesson 5: What an estimate is answering

Stable ID: m14-l05-v1. Core. Areas 16. Optional effort ~120 min.

**Objective.** Take three stories to an engineer or an informed reader, record what made each estimate uncertain, and redesign one to remove the uncertainty.

**Bring forward.** Your stories, criteria and cut scope.

Estimates are mostly a measure of how unclear the work is. Reading them that way turns them from a negotiation into information.

### Learn

When an engineer says something will take longer than you expected, the productive question is not whether that is right but what is uncertain. Large estimates usually come from unknowns — an integration nobody has tried, a data shape nobody has confirmed, a state nobody has defined — and unknowns are frequently removable by a decision rather than by effort.

That is where your specifications earn their cost. A story with defined states, wording and failure behaviour has fewer unknowns than one with a screen and an intention, and the estimate reflects it. It is common for the same work to halve when the undefined parts are defined, which is worth knowing before you are in the conversation.

The unknowns cluster predictably: anything involving another system, anything involving data whose shape you have assumed, anything with edge cases nobody has enumerated, and anything whose failure behaviour is undefined. Asking about those four directly is faster than waiting for them to surface.

Arguing an estimate down changes nothing except how much slack the engineer keeps to themselves. Changing what is being estimated — cutting a case, defining a state, deferring an integration — changes the work, and it is a design contribution rather than a negotiation.

**Common misconception.** “Engineers pad estimates.” They add contingency for uncertainty, which is rational. Removing the uncertainty removes the contingency; pressing on the number just moves it somewhere less visible.

### Worked example

Three stories were taken to an engineer. The held-place story estimated at a week, and the uncertainty was the timer's behaviour across devices and what happens if the person returns after expiry — both undefined in the design. Defining them dropped it to three days. The payment-status story stayed large because it depended on another system nobody had used; the response was to defer it and ship the message-based version first. The third was small and unchanged. The write-up recorded that specification, not persuasion, moved two of the three.

### Practice and pause points

- Prepare the stories (~25 min): Take three stories with their criteria. Mark anything you know is still undefined.
- Get the estimates (~30 min): Ask an engineer, or an informed reader, how long each would take and why. Record what they could not answer from your material.
- Name the uncertainty (~25 min): For each estimate write what made it uncertain. Classify each as integration, data, edge case or undefined state.
- Redesign one (~25 min): Choose the story whose uncertainty you can remove by deciding. Define what was undefined and re-estimate.
- Record (~15 min): Note which unknowns were decisions and which were genuine effort. Save the estimates, uncertainties and the redesign.

Pause after any step; save the artifact and next action.

**Free tool path.** Conversation and notes. If no engineer is available, ask an informed reader to identify what they could not answer from your story and criteria; the unanswerable parts are the unknowns.

### Output

Three stories estimated, with the reasoning recorded; The uncertainty behind each estimate named; One story redesigned to remove an unknown; A note of which unknowns were decisions rather than effort

### Checks

- What makes an estimate large? Answer: Usually uncertainty rather than effort. Unknowns attract contingency, and many of them are decisions nobody has made rather than work nobody has done.
- Where do unknowns cluster? Answer: Integrations, assumed data shapes, unenumerated edge cases and undefined failure states. Asking about those four directly saves waiting for them to appear.
- Why not argue an estimate down? Answer: Because it changes only how visible the contingency is. Changing what is being estimated — by deciding or deferring — changes the actual work.

### Rubric and remediation

**Three estimates are collected with reasoning**

Adequate evidence: Three estimates with what the estimator could not answer from your material.

- 0 — Estimates guessed by the designer.
- 1 — Estimates collected without reasoning.
- 2 — Three with reasoning and unanswered questions recorded.
- 3 — As adequate, and the questions are grouped by what would have prevented them.

If below 2: Ask an engineer or an informed reader what they cannot answer from your story and criteria. Show at recheck: The estimates and questions.

**The uncertainty behind each is named and classified**

Adequate evidence: Each estimate with its uncertainty labelled integration, data, edge case or undefined state.

- 0 — Uncertainty unexamined.
- 1 — Named without classification.
- 2 — Named and classified for all three.
- 3 — As adequate, and the classification points at which artefact would have removed it.

If below 2: For each estimate ask what the estimator did not know, then classify it. Show at recheck: The classified uncertainties.

**One story is redesigned to remove an unknown**

Adequate evidence: A story with the undefined part now defined and a revised estimate.

- 0 — No redesign.
- 1 — Redesigned without re-estimating.
- 2 — Redesigned, re-estimated and the change recorded.
- 3 — As adequate, and the definition came from an existing specification rather than new invention.

If below 2: Take the story with the most removable uncertainty and define what was missing. Show at recheck: The redesign and new estimate.

**Decisions are separated from genuine effort**

Adequate evidence: A note distinguishing unknowns you could resolve from work that is simply large.

- 0 — Not separated.
- 1 — Separated loosely.
- 2 — Each unknown marked as decision or effort.
- 3 — As adequate, and the genuine-effort items are accepted rather than argued about.

If below 2: Go through the uncertainties and mark which you could remove by deciding something. Show at recheck: The separation note.

### Portfolio contribution

Showing that specification reduced an estimate is concrete evidence that design work has delivery value, which is difficult to demonstrate any other way.

### Assigned resources

- R47: [Ryan Singer: Shape Up](https://basecamp.com/shapeup/webbook) — Risks and rabbit holes, and the betting table. Purpose: Explains why unknowns dominate estimates and how to remove them before committing. Effort: 60–90 selected min. Free to read online; print edition sold and not required. Verified 2026-09-06. One company's process; take the reasoning about unknowns rather than the ceremony. Fallback: R07.
- R26: [Atlassian: acceptance criteria](https://www.atlassian.com/work-management/project-management/acceptance-criteria) — How criteria remove ambiguity before work starts. Purpose: Connects your criteria work directly to the size of the estimate. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. Tool-neutral; no subscription required. Fallback: R18.

## Lesson 6: Handover as a conversation

Stable ID: m14-l06-v1. Core. Areas 16. Optional effort ~120 min.

**Objective.** Run a handover for one story: prepare the artefacts, hold the conversation, and record every question asked and every decision made in it.

**Bring forward.** Your m12 handover document and this module's stories.

A handover is where the design meets the constraints it will actually be built under. Treated as a delivery, it produces surprises later.

### Learn

Sending the material beforehand changes what the meeting is for. If people read the states, criteria and wording first, the time is spent on what they could not resolve alone, which is where your presence adds something. Narrating the design aloud spends the time on what the document already said.

The valuable output is a decision record. Handover conversations produce agreements — this state is out of scope for now, this animation will not be built, this error message needs the server to send something new — and if none of that is written down, each will be re-decided during the build, usually differently.

A handover where nothing changes was a briefing. The engineer knows things you do not: what is expensive, what already exists, what will conflict with something else. Expecting to leave with a modified design is what makes the conversation worth holding.

Agreeing the escalation path is the part everyone forgets. When something unexpected appears mid-build — a case nobody designed, a constraint nobody knew — who decides, and how fast? Without an answer, the build stops or the engineer decides alone, and both are worse than a named route.

**Common misconception.** “Handover means giving the design to the team.” It means agreeing what will be built, under what constraints, with what still undecided. The document is the input, not the event.

### Worked example

The held-place story was sent two days ahead with its criteria, states and wording. The conversation lasted forty minutes and produced six decisions: the timer would be server-driven rather than local, the expiry warning would come from the same source, two of the five states were deferred with a note, the announcement wording changed because the chosen phrasing would repeat every second, and one criterion was rewritten because it prescribed an implementation. The escalation route was agreed: anything not covered comes to the designer same day, and if unavailable, the engineer chooses the option that preserves the person's data.

### Practice and pause points

- Prepare and send (~25 min): Assemble the story, criteria, states and wording into one place. Send it far enough ahead to be read. Ask people to note questions before the conversation.
- Hold the conversation (~35 min): Start with their questions, not your narration. Write down every decision as it is made. Ask what is expensive and what already exists.
- Record the decisions (~25 min): Write the decision record and circulate it the same day. Mark anything deferred and anything still undecided.
- Agree the escalation (~20 min): Agree who decides when something unexpected appears. Agree the default if you are unavailable.
- Update the artefacts (~15 min): Change the design and criteria to match what was agreed. Save the decision record with them.

Pause after any step; save the artifact and next action.

**Free tool path.** Your existing documents plus a written decision record. No handover tool is required.

### Output

Artefacts sent before the conversation; A decision record from the conversation; At least one change to the design, recorded; An agreed escalation route for the unexpected

### Checks

- Why send the material beforehand? Answer: So the conversation is spent on what could not be resolved alone. Narrating the document aloud wastes the only time you have with everyone present.
- Why record decisions the same day? Answer: Because unrecorded agreements are re-made during the build, differently, and nobody can tell which version was intended.
- What does it mean if nothing changed? Answer: That it was a briefing rather than a handover. Engineers know what is expensive and what exists; a conversation that changes nothing did not use that.

### Rubric and remediation

**Artefacts were sent before the conversation**

Adequate evidence: Material shared in advance with a request for questions.

- 0 — Presented for the first time in the meeting.
- 1 — Sent too late to be read.
- 2 — Sent with enough time and questions invited.
- 3 — As adequate, and the questions arrived before the meeting and shaped its agenda.

If below 2: Send the material two days ahead next time and ask for questions in advance. Show at recheck: The send record.

**A decision record exists and was circulated**

Adequate evidence: A written record of decisions, deferrals and open items, shared promptly.

- 0 — No record.
- 1 — Notes kept privately.
- 2 — Record written and circulated the same day.
- 3 — As adequate, and deferrals name what would bring them back.

If below 2: Write the decisions from memory now and circulate them, marking anything uncertain as such. Show at recheck: The decision record.

**At least one design change came from the conversation**

Adequate evidence: A change made because of what the engineer knew, recorded with the reason.

- 0 — No changes.
- 1 — Changes made without recording why.
- 2 — At least one change with the reason recorded.
- 3 — As adequate, and the change improved the outcome rather than only reducing cost.

If below 2: Ask what is expensive and what already exists; those two questions usually produce a change. Show at recheck: The recorded change.

**An escalation route is agreed with a default**

Adequate evidence: A named route for unexpected cases and a default when you are unavailable.

- 0 — Not discussed.
- 1 — Route agreed without a default.
- 2 — Both agreed and written down.
- 3 — As adequate, and the default protects the person's data or money rather than the schedule.

If below 2: Agree who to ask and what to do if nobody answers, and write it in the record. Show at recheck: The escalation agreement.

### Portfolio contribution

A handover decision record shows that you work with delivery constraints rather than around them, which is what collaboration questions in interviews are asking about.

### Assigned resources

- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — What a prototype must communicate to the people who build the real thing. Purpose: Frames the handover artefacts as communication. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. It does not cover handover conversations, which are this lesson's own. Fallback: R05.
- R26: [Atlassian: acceptance criteria](https://www.atlassian.com/work-management/project-management/acceptance-criteria) — Criteria as the shared definition of done. Purpose: Gives the conversation a concrete object to agree or change. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Tool-neutral; no subscription required. Fallback: R18.

## Lesson 7: Design QA on a real build

Stable ID: m14-l07-v1. Core. Areas 16. Optional effort ~120 min.

**Objective.** Review a built feature against its criteria and specifications, and produce a prioritised list separating defects from changes of mind.

**Bring forward.** Your criteria, state specifications and the built feature.

The build is where specifications either survived or did not. Checking is your job, and doing it well makes you trusted rather than tiresome.

### Learn

Criteria are the agreement, so they are where the review starts. Anything failing a criterion is a defect and is not negotiable; anything else is a request. Keeping that line clear is what makes your reviews welcome, because an engineer can act on defects immediately and discuss the rest.

The changes of mind are legitimate and must be labelled. Seeing the built thing frequently reveals a better decision, and asking for it is fine — as a request, with a reason, going through the same prioritisation as any other work. Presenting it as a defect is how designers acquire a reputation for moving goalposts.

States are where builds differ from designs, because the default screen is what gets built first and checked most. Walk the state tables from m09 and the exception table from m07 explicitly, forcing each state rather than waiting to encounter it.

Check where people will use it. A build reviewed only on your laptop at a comfortable width will pass while failing on the phone your users have, and the difference is usually in touch targets, keyboard behaviour, long content and the connection.

**Common misconception.** “Design QA means checking the visual details.” Spacing matters and is the smallest part. The important part is whether the states exist, the failures behave, the keyboard works and the content survives — the things nobody sees in a screenshot.

### Worked example

The built held-place feature was reviewed against seven criteria. Five passed. Two failed: the expiry warning announced every second rather than at appearance and expiry, and the state was distinguishable only by colour. Both were logged as defects with the criterion quoted. Four further observations were logged as requests, including a spacing inconsistency and a better wording idea, each marked as a change of mind rather than a defect. The review was done on a phone at two widths and with the keyboard, which is where both defects were found.

### Practice and pause points

- Check the criteria (~25 min): Walk each acceptance criterion against the build. Record pass or fail with what you observed.
- Force the states (~30 min): Trigger every state from your tables, including failures. Record any state that does not exist or behaves differently.
- Check where it will be used (~25 min): Review on a real phone and at your specified widths. Check keyboard operation and long content.
- Separate and prioritise (~25 min): Label each finding a defect or a request. Order by harm rather than by ease of fixing.
- Send it well (~15 min): Write the list so each item is actionable without a conversation. Save the review with the criteria results.

Pause after any step; save the artifact and next action.

**Free tool path.** The built feature, your criteria and a phone. No QA tool is required; a written list is the deliverable.

### Output

A criterion-by-criterion pass or fail record; Defects separated from requests, each labelled; State-by-state checks including failure paths; A prioritised list ordered by harm

### Checks

- What separates a defect from a request? Answer: A defect fails an agreed criterion. A request is a change of mind, which is legitimate and goes through prioritisation like any other work.
- Why force the states rather than browsing? Answer: Because default screens get built first and checked most. Failure and empty states are where builds diverge from specifications.
- Why review on a phone? Answer: Because touch targets, keyboard behaviour, long content and connection speed differ there, and that is where your users are.

### Rubric and remediation

**Every criterion is checked and recorded**

Adequate evidence: A pass or fail per criterion with the observation.

- 0 — General impressions of the build.
- 1 — Some criteria checked.
- 2 — All checked with observations recorded.
- 3 — As adequate, and a criterion that turned out to be unverifiable is identified.

If below 2: Walk the criteria list one item at a time and record what you saw. Show at recheck: The criteria results.

**Defects and requests are separated and labelled**

Adequate evidence: Each finding labelled, with defects tied to a specific criterion.

- 0 — Everything reported as a bug.
- 1 — Some separation without criteria references.
- 2 — Clean separation with criteria quoted for defects.
- 3 — As adequate, and requests carry a reason and a priority suggestion.

If below 2: For each finding ask which criterion it fails. If none, it is a request. Show at recheck: The labelled list.

**States including failures were forced and checked**

Adequate evidence: A record of each state triggered deliberately, including error and empty.

- 0 — Only the default screen checked.
- 1 — Some states encountered incidentally.
- 2 — Each state forced and checked.
- 3 — As adequate, and a state that does not exist in the build is identified.

If below 2: Use your state tables as a checklist and trigger each one deliberately. Show at recheck: The state check record.

**The list is prioritised by harm and actionable**

Adequate evidence: An ordered list where each item can be acted on without further conversation.

- 0 — Unordered or ordered by ease.
- 1 — Ordered by harm but items need explanation.
- 2 — Ordered by harm and each item actionable alone.
- 3 — As adequate, and each defect names how to reproduce it.

If below 2: Rewrite each item so someone else could act on it, then sort by what it costs the person. Show at recheck: The prioritised list.

### Portfolio contribution

A design QA list that separates defects from requests demonstrates professional collaboration more convincingly than any statement about working well with engineers.

### Assigned resources

- R26: [Atlassian: acceptance criteria](https://www.atlassian.com/work-management/project-management/acceptance-criteria) — Criteria as the agreed definition of done. Purpose: Provides the line between a defect and a request. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Tool-neutral; it does not cover QA process, which is this lesson's own. Fallback: R18.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The checks relevant to the built feature. Purpose: Gives repeatable accessibility checks to run against the build rather than the design. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Preliminary checks; passing is not conformance and self-testing is not testing with disabled people. Fallback: R28.

## Lesson 8: Reporting a defect so it gets fixed

Stable ID: m14-l08-v1. Core. Areas 16. Optional effort ~120 min.

**Objective.** Write three defect reports that another person could reproduce and fix without asking you anything, and check them by having someone try.

**Bring forward.** Your design QA findings.

An unreproducible report is not a report. Most design bug reports are rejected for lack of detail rather than for disagreement.

### Learn

The three-part structure is what makes a report actionable: the steps, the observed result and the expected result. Missing the third is the commonest failure, because the writer assumes the expected behaviour is obvious, and it very often is not to someone who did not design it.

Conditions decide reproducibility. A defect that appears on a particular phone at a particular width with a long class name and a slow connection will not reproduce on a laptop with tidy test data, and a report that omits those conditions is closed as unreproducible — accurately, from the engineer's point of view.

One defect per report matters because reports get assigned, prioritised and closed as units. A report containing four issues gets the easiest one fixed and closed, and the rest are lost, which is why they resurface as complaints three weeks later.

Quoting the criterion turns your report from an opinion into a comparison. “The expiry announcement repeats every second; criterion four says it announces at appearance and at expiry” is checkable and needs no discussion, which is exactly what a busy engineer wants.

**Common misconception.** “The screenshot shows the problem.” It shows the symptom on one screen at one moment. Without the steps, the conditions and the expected result, it is an invitation to a conversation rather than something anyone can fix.

### Worked example

Three reports. First: steps — open the class page on a phone at 360 px with a class whose title runs long, throttle to a slow connection, tap book; observed — the price overlaps the button while the image loads; expected — the layout reserves the image space, per the m08 loading specification; conditions — device, browser, width, throttling profile, data used; severity — a person may tap the wrong control while paying. Two were reproduced by someone else on the first attempt; the third could not be, and the missing condition turned out to be the account state, which was added.

### Practice and pause points

- Write the three parts (~25 min): For each defect write the steps, what happened and what should have happened. Keep one defect per report.
- Add the conditions (~25 min): Record device, browser, viewport width, data used and connection. Note anything about account or state that matters.
- Quote the source (~20 min): Quote the criterion or specification the behaviour contradicts. If none exists, say so and mark it a request instead.
- Rate severity honestly (~25 min): State the effect on the person: blocked, at risk of loss, slowed, or cosmetic. Avoid severity language that reflects your own frustration.
- Test reproducibility (~25 min): Ask someone to reproduce each report using only what you wrote. Record failures and add the missing conditions. Save the three reports.

Pause after any step; save the artifact and next action.

**Free tool path.** Written reports with a screenshot or a short screen recording where it helps. No bug tracker is required for the exercise, though most teams use one.

### Output

Three reports with steps, observed and expected results; Full conditions on each: device, browser, size, data, connection; The criterion or specification quoted per report; A reproduction attempt by someone else, with the result

### Checks

- Which of the three parts is most often missing? Answer: The expected result. The writer assumes it is obvious, and it is not to anyone who did not design the thing.
- Why one defect per report? Answer: Because reports are assigned and closed as units. A combined report gets the easiest part fixed and the rest lost.
- Why quote the criterion? Answer: Because it converts an opinion into a comparison that anyone can check, which removes the discussion entirely.

### Rubric and remediation

**Each report has steps, observed and expected results**

Adequate evidence: Three reports with all three parts present.

- 0 — Screenshots with a comment.
- 1 — Steps and observation without the expected result.
- 2 — All three parts in each report.
- 3 — As adequate, and the steps start from a state anyone can reach.

If below 2: Add the expected result to every report; without it nobody knows what fixing means. Show at recheck: The three reports.

**Conditions are complete enough to reproduce**

Adequate evidence: Device, browser, size, data and connection recorded per report.

- 0 — No conditions.
- 1 — Some conditions, missing the ones that mattered.
- 2 — Complete conditions on each.
- 3 — As adequate, and any state-dependent condition such as account status is named.

If below 2: Reproduce the defect yourself and write down everything that had to be true. Show at recheck: The conditions.

**The contradicted criterion is quoted**

Adequate evidence: A quoted criterion or specification per defect, or a request label where none exists.

- 0 — No source given.
- 1 — Referenced vaguely.
- 2 — Quoted per defect, with requests labelled.
- 3 — As adequate, and a missing criterion is identified as a specification gap.

If below 2: Find the criterion each defect contradicts; if there is none, relabel it a request. Show at recheck: The quoted sources.

**Reproduction was attempted by someone else**

Adequate evidence: A record of someone attempting each report and what they could not do.

- 0 — Not tested.
- 1 — Tested by the author only.
- 2 — Attempted by someone else with results recorded.
- 3 — As adequate, and every failure to reproduce led to an added condition.

If below 2: Hand the reports to someone and watch them try; every question is a missing detail. Show at recheck: The reproduction results.

### Portfolio contribution

Defect reports are unglamorous and unusually revealing: reproducible, criterion-quoting reports mark out a designer who has actually shipped.

### Assigned resources

- R26: [Atlassian: acceptance criteria](https://www.atlassian.com/work-management/project-management/acceptance-criteria) — Criteria as verifiable conditions. Purpose: Provides the reference each defect report quotes. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Tool-neutral; defect reporting practice is this lesson's own. Fallback: R18.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The checks whose failures often become accessibility defects. Purpose: Helps write accessibility defects with a check anyone can repeat. Effort: 15–25 selected min. Free reading, no account. Verified 2026-09-06. Preliminary checks only; a failure is real, a pass is not conformance. Fallback: R28.

## Lesson 9: Arguing for the work with evidence

Stable ID: m14-l09-v1. Core. Areas 16. Optional effort ~120 min.

**Objective.** Make the case for one piece of design work in the terms the decision is actually made in, and write the version of the argument that would fail honestly.

**Bring forward.** Your findings, QA list and cut list.

Design work competes with everything else for the same time. Arguing in design terms to people deciding in business terms loses reliably.

### Learn

Decisions get made on criteria you can find out: revenue, support load, risk, a commitment already made, a deadline. Making a case in terms of craft to someone accountable for support volume is not a failure of their judgement; it is a translation you did not do. Ask what the decision rests on before writing anything.

Your evidence translates. Two of three participants unable to tell whether their place was held becomes a plausible cause of duplicate payments, refund requests and support calls — which is the thing the decider is accountable for. The translation must stay honest: you observed the confusion, you are inferring the consequence, and saying so protects you when someone checks.

The cost of not doing it is usually stronger than the benefit of doing it, and both should be grounded in what you observed rather than in a number you invented. This is where the honesty rules from m05 and m10 matter most: an invented percentage wins the meeting and loses your credibility permanently the first time someone tests it.

Offering the smaller version is what turns a rejection into a decision. The full redesign may be refused while the two-day fix to the held-place message is accepted, and the smaller version is often most of the value. Prepare it before the conversation rather than improvising it after a no.

**Common misconception.** “Good work speaks for itself.” It speaks to people who already share your standards. Everyone else needs the connection between the work and the thing they are accountable for, and making that connection is part of the job.

### Worked example

The case for the held-place work was written twice. The design version: the flow does not communicate state. The delivery version: two of three participants could not tell whether their place was secured, one said she would have paid again, and duplicate payments generate refunds and support contacts — this is a two-day change to a message and a state. The smaller version was prepared in advance: if two days is unavailable, one day covers the message without the countdown. The honest weakness was written too: three participants cannot establish how often this happens, and no support data was available to check it.

### Practice and pause points

- Find out the criteria (~25 min): Write what the person deciding is accountable for. If you do not know, ask before making the case.
- Translate the evidence (~30 min): State what you observed and what you infer from it, separately. Connect the inference to the decider's accountability. Keep every number honest, including the sample.
- Prepare the smaller version (~25 min): Write the reduced scope that delivers most of the value. State what the smaller version does not fix.
- Write the weakness (~20 min): State the strongest honest objection to your own case. Write what evidence would settle it.
- Make the case (~20 min): Deliver it, in writing or in person, and record the response. Note which part of the argument actually moved the decision.

Pause after any step; save the artifact and next action.

**Free tool path.** Written work. One page, or five sentences in a message; the format matters less than the translation.

### Output

A statement of how the decision is actually made; The case written in the decider's terms, with evidence labelled; A smaller version prepared in advance; The honest weakness in your own argument

### Checks

- Why translate evidence rather than presenting it? Answer: Because the decider is accountable for something specific. Untranslated findings are asking them to do the translation, and they usually will not.
- Why prepare the smaller version beforehand? Answer: Because a rejection of the large ask often hides an acceptance of a small one, and improvising the reduction after a no is worse than having designed it.
- Why state your own weakness? Answer: Because it will be found, and finding it first keeps your credibility for the next argument. Overclaiming wins once.

### Rubric and remediation

**The decision criteria are stated, not assumed**

Adequate evidence: A written statement of what the decider is accountable for, found out rather than guessed.

- 0 — Case made in design terms only.
- 1 — Criteria assumed without checking.
- 2 — Criteria found out and stated.
- 3 — As adequate, and the case names which criterion it addresses most directly.

If below 2: Ask what the decision rests on before writing the argument. Show at recheck: The criteria statement.

**Observation and inference are labelled separately**

Adequate evidence: A case distinguishing what you saw from what you conclude, with sample sizes attached.

- 0 — Inferences presented as findings.
- 1 — Some separation, with an unlabelled leap.
- 2 — Clean separation with samples attached.
- 3 — As adequate, and the inference names what would confirm it.

If below 2: Split each claim into what you observed and what you infer, and attach the count. Show at recheck: The labelled case.

**A smaller version exists with what it omits**

Adequate evidence: A prepared reduced scope, with what it does not fix stated.

- 0 — No smaller version.
- 1 — A reduction without stating what it loses.
- 2 — Both present and prepared in advance.
- 3 — As adequate, and the smaller version is the one you would run if given the choice.

If below 2: Write the one-day version of your ask and what it leaves unaddressed. Show at recheck: The smaller version.

**The honest weakness is written**

Adequate evidence: The strongest objection to your own case, with what would settle it.

- 0 — No weakness acknowledged.
- 1 — A token caveat.
- 2 — The strongest objection stated with settling evidence named.
- 3 — As adequate, and it is the objection someone actually raised.

If below 2: Ask what you would say against this if you were the decider, and write that down. Show at recheck: The weakness statement.

### Portfolio contribution

The two versions of the same argument, with the honest weakness, show that you can advocate without overclaiming — which is the harder half of influence.

### Assigned resources

- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The points on solving a whole problem for users and defining what success looks like. Purpose: Gives a shared vocabulary for arguing about outcomes rather than outputs. Effort: 45 selected min. Free reading, no account. Verified 2026-09-06. Written for government services with different accountability; translate rather than quote. Fallback: R07.
- R47: [Ryan Singer: Shape Up](https://basecamp.com/shapeup/webbook) — Setting the appetite and deciding what not to build. Purpose: Supplies the language for offering a smaller version rather than defending the whole. Effort: 45–60 selected min. Free to read online; print edition sold and not required. Verified 2026-09-06. One company's process, and not a market-positioning source. Fallback: R07.

## Lesson 10: Meetings that decide something

Stable ID: m14-l10-v1. Core. Areas 16. Optional effort ~120 min.

**Objective.** Run one design critique and one review with a stated purpose, a prepared question and a written decision record, and compare what each produced.

**Bring forward.** Your current design work and the QA findings.

Most design meetings produce opinions. A meeting with a stated question and a decision record produces a decision.

### Learn

A meeting without a stated question collects whatever is on people's minds, which is why design reviews so often produce colour opinions on a flow question. Naming the question — “does this state communicate that the place is held?” — narrows the input to the thing you need and makes irrelevant feedback easy to defer politely.

Critique and review are different events with different rules. Critique improves work that is still moving: it invites problems, alternatives and doubts, and produces no decisions. Review decides: it takes work presented as ready, tests it against criteria and evidence, and produces a yes, a no or a specific change. Running them as one produces a meeting where people are unsure whether they are helping or approving.

Feedback improves when the request is specific. “What do you think?” invites taste; “does this wording tell you your place is held, and what would you do next?” invites something checkable. This is the same discipline as writing a research task, applied to colleagues.

Writing decisions during the meeting, rather than afterwards, is what makes them real. Read them back before people leave. Anything nobody can restate was not a decision, and anything unwritten will be remembered differently by everyone in the room.

**Common misconception.** “Everyone should give feedback on everything.” Broad feedback on a specific question wastes the room's time and yours. Ask for what you need, and offer a separate route for the other things people noticed.

### Worked example

The critique was run on the held-place state with one question: does this communicate that a place is secured and for how long? Three people responded; two raised the same problem, that the phrasing read as marketing rather than status. No decisions were taken and the notes were kept. The review a week later presented the revised version against its criteria and the QA findings, and produced three decisions: accept the wording, defer the countdown to a later story, and change one criterion that had proved unverifiable. Both meetings had a written record; the critique's was a problem list and the review's was a decision list.

### Practice and pause points

- Prepare the critique (~20 min): Write the one question you need answered. Send the work and the question in advance. State that no decisions will be taken.
- Run the critique (~30 min): Ask for problems and alternatives, not approval. Record every problem raised, including the ones you disagree with. Defer off-topic feedback to a written route.
- Prepare and run the review (~30 min): Present the revised work against its criteria and evidence. Ask for a decision on each open item. Write the decisions as they are made.
- Close properly (~20 min): Read the decisions back before people leave. Name the next action, its owner and its date.
- Compare (~20 min): Write what each meeting produced. Note any feedback that would have been better in the other format. Save both records.

Pause after any step; save the artifact and next action.

**Free tool path.** A written agenda, a question, and notes. No meeting tool is required.

### Output

One critique with a stated question and a problem list; One review with criteria and a decision record; A comparison of what each produced; A next action with an owner and a date

### Checks

- What is the difference between critique and review? Answer: Critique improves work still in motion and produces problems and alternatives. Review decides on work presented as ready and produces yes, no or a specific change.
- Why state one question? Answer: Because an unstated question collects whatever is on people's minds, which is why flow questions receive colour opinions.
- Why write decisions in the room? Answer: Because unwritten decisions are remembered differently by everyone present, and anything nobody can restate was never decided.

### Rubric and remediation

**Each meeting had a stated purpose and question**

Adequate evidence: A written purpose and question sent before each meeting.

- 0 — No stated purpose.
- 1 — Purpose stated at the start only.
- 2 — Both sent in advance for each meeting.
- 3 — As adequate, and off-topic feedback was deferred to a stated route.

If below 2: Write the question you need answered and send it with the work. Show at recheck: The two agendas.

**Critique produced problems, not approval**

Adequate evidence: A problem list including items you disagree with, and no decisions taken.

- 0 — The critique became an approval meeting.
- 1 — Problems collected but filtered to the ones you accepted.
- 2 — All problems recorded, no decisions taken.
- 3 — As adequate, and at least one alternative you had not considered was raised.

If below 2: Re-read your notes and add the problems you dismissed at the time. Show at recheck: The problem list.

**Review produced written decisions with owners**

Adequate evidence: A decision record naming each decision and who made it.

- 0 — No decisions or no record.
- 1 — Decisions recorded without owners.
- 2 — Each decision recorded with its owner.
- 3 — As adequate, and deferrals name what would bring them back.

If below 2: Write the decisions now from memory, marking any you are unsure of as unconfirmed. Show at recheck: The decision record.

**The next action has an owner and a date**

Adequate evidence: A named action with a person and a date, agreed before the meeting ended.

- 0 — No next action.
- 1 — An action without an owner or date.
- 2 — Both named and agreed in the room.
- 3 — As adequate, and the action was read back and confirmed.

If below 2: End the next meeting by reading back the decisions and naming who does what by when. Show at recheck: The next action.

### Portfolio contribution

A critique problem list beside a review decision record demonstrates that you can run the meetings design work depends on.

### Assigned resources

- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The points on having a multidisciplinary team and iterating and improving frequently. Purpose: Frames these meetings as the mechanism by which iteration actually happens. Effort: 30 selected min. Free reading, no account. Verified 2026-09-06. It does not prescribe meeting formats; the critique-versus-review distinction is the course's own. Fallback: R07.
- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — Using a prototype to get a decision rather than approval. Purpose: Connects the artefact you bring to the kind of meeting you are running. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Government context; the framing transfers. Fallback: R05.

## Lesson 11: Release, and knowing whether it worked

Stable ID: m14-l11-v1. Core. Areas 16. Optional effort ~120 min.

**Objective.** Write a release plan for one feature naming what ships, what is held back, what you will look at afterwards and what would make you reverse it.

**Bring forward.** Your built feature, criteria and QA results.

Shipping is a decision with a follow-up. Without deciding what you will look at, a release produces relief rather than learning.

### Learn

Releasing part of something is normal and worth deciding rather than discovering. Holding a state back, releasing to a subset of people, or shipping behind a flag are all ways of reducing the cost of being wrong, and each has a design consequence: someone will meet a partial version, and that version needs to make sense on its own.

Deciding what to look at before shipping is what separates learning from relief. The assigned measuring guidance is about defining success in advance, and the design version is narrower: what would tell you this worked, what would tell you it did not, and where would you see either. Written afterwards, the answer is always the number that looks best.

The reversal condition is the honest half. If support contacts about payment confusion do not fall, or if people still ring rather than using the flow, what will you do? Naming that before release stops a feature persisting on the strength of the effort it took.

Be careful about what can be measured. Some things are countable — completions, contacts, repeat payments — and some are not, and asking a few people afterwards is a legitimate method rather than a failure. What is not legitimate is treating a released feature as evidence that the design was right; a release tells you what happened after it, and only if you decided to look.

**Common misconception.** “It shipped, so it worked.” Shipping means it exists. Whether it helped is a separate question, and one you can only answer if you decided in advance what you would look at.

### Worked example

The release plan: the held-place message and states ship; the countdown is held back until the timer is server-driven; the whole feature goes to everyone at once, since a subset would fragment support. Before shipping, three things were named: whether support contacts about payment status change over four weeks, whether anyone reports a duplicate payment, and a short round of three conversations with recent bookers. The reversal condition: if duplicate payments continue at the same rate after four weeks, the state design is not the cause and the work moves to the payment confirmation itself. It was recorded that none of the three is a controlled comparison.

### Practice and pause points

- Read on defining success (~25 min): Read the assigned guidance on defining success before release. Write the difference between an output and an outcome here.
- Decide the scope of the release (~25 min): Name what ships and what is deliberately held back. Check the partial version makes sense on its own.
- Decide what you will look at (~30 min): Name what would suggest it worked and what would suggest it did not. Say where you would see each, and over what period.
- Write the reversal condition (~25 min): State what would make you change or reverse the feature. Name who decides that and when.
- Record the limits (~15 min): State what cannot be measured and how you will ask instead. State that none of this is a controlled comparison. Save the release plan.

Pause after any step; save the artifact and next action.

**Free tool path.** A written plan. Counting support contacts or asking three people needs no analytics tool, and both are legitimate at this scale.

### Output

A release plan naming what ships and what is held back; What you will look at afterwards, decided in advance; A reversal or change condition; A note of what cannot be measured and how you will ask instead

### Checks

- Why decide what to look at before shipping? Answer: Because afterwards you will choose the number that flatters the work. Deciding in advance makes the result capable of disappointing you, which is what makes it evidence.
- What does holding something back cost? Answer: Someone meets a partial version, so it has to make sense alone. That is a design consequence, not only a delivery one.
- Is a release evidence the design was right? Answer: No. It is evidence the design exists. What happened afterwards is a separate question and only answerable if you decided to look.

### Rubric and remediation

**What ships and what is held back is decided**

Adequate evidence: A stated release scope with a check that the partial version stands alone.

- 0 — Everything ships by default.
- 1 — A scope decided without checking the partial experience.
- 2 — Scope decided and the partial version checked.
- 3 — As adequate, and the held-back part has a condition for release.

If below 2: Walk the partial version as a new person and check it makes sense without the held-back parts. Show at recheck: The release scope.

**Success and failure signals are named in advance**

Adequate evidence: Written signals for both, with where and over what period.

- 0 — Nothing named.
- 1 — Only success signals named.
- 2 — Both named with locations and periods.
- 3 — As adequate, and at least one signal is something that could realistically be observed.

If below 2: Write what you would expect to see if this worked and if it did not, and where. Show at recheck: The signals.

**A reversal condition exists with an owner**

Adequate evidence: A condition that would trigger change or reversal, with who decides.

- 0 — No condition.
- 1 — A condition without an owner or a date.
- 2 — Both stated.
- 3 — As adequate, and the condition would be uncomfortable to meet, which means it is real.

If below 2: Write what result would make you undo this, then name who would decide. Show at recheck: The reversal condition.

**Unmeasurable things are named with how you will ask**

Adequate evidence: A list of what cannot be counted and the conversational alternative.

- 0 — Everything treated as measurable.
- 1 — Limits acknowledged without an alternative.
- 2 — Named with a method for asking instead.
- 3 — As adequate, and it is stated that none of this is a controlled comparison.

If below 2: List the claims you cannot count and plan three conversations instead. Show at recheck: The limits note.

### Portfolio contribution

A release plan with a reversal condition is rare and shows you treat shipping as a decision rather than an achievement.

### Assigned resources

- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Defining success measures before release and using performance data honestly. Purpose: Supplies the discipline of deciding what to look at in advance. Effort: 45–60 selected min. Free reading, no account. Verified 2026-09-06. Written for government services with published performance data; at your scale, counts and conversations replace dashboards and neither is a controlled comparison. Fallback: R07.
- R67: [Semantic Versioning 2.0.0](https://semver.org/) — The rules for what a release means and cannot be changed. Purpose: Connects the release decision to the versioning discipline from m13. Effort: 10–15 min. Free reading, no account, CC BY 3.0. Verified 2026-09-06. Written for software APIs; the release-immutability idea is what transfers. Fallback: R18.

## Lesson 12: What to change about how you work

Stable ID: m14-l12-v1. Core. Areas 16. Optional effort ~120 min.

**Objective.** Run a retrospective on this delivery, identify the two things that cost the most, and commit to one change with a way of checking whether it helped.

**Bring forward.** Everything from this module: stories, criteria, handover, QA, release.

Delivery problems repeat until someone changes something. A retrospective that produces no change is a complaint session with an agenda.

### Learn

Retrospectives fail in two ways: they become complaint sessions, or they produce twelve improvements and nobody does any of them. Both are avoided by the same discipline — look at events rather than people, choose the costliest problem rather than the most irritating, and commit to one change with an owner.

Cost is measurable in rework, delay and defects. The spacing inconsistency that annoyed you all fortnight probably cost an hour; the undefined empty state cost an engineer a day and produced a defect. Ranking by cost rather than by irritation is what makes retrospectives change the expensive things.

One change is enough. A single change with an owner and a date has a chance of happening; a list of twelve is a document. If the same problem returns next time, that is information about the change rather than a reason to add eleven more.

Deciding how you will know it helped is the same discipline as the release plan and the repair prediction: write what should be different next time, so the retrospective after next can check. Over three or four rounds this produces something rare — a record of how your own working practice actually changed.

**Common misconception.** “The retrospective is where the team says what went wrong.” It is where the team decides what to change. Without a committed change and a way of checking it, the same problems will be listed again next time in the same words.

### Worked example

The retrospective looked at the whole delivery. The two costliest problems: undefined states that were invented during the build, costing a day and producing two defects; and a handover held too late, which meant the estimate was made without the criteria. The committed change: criteria and states go into the story before estimation, owned by the learner, starting with the next story. The check: at the next retrospective, count how many states were invented during the build; the target is zero, and if it is not, the change was not enough. A previous change — sending material two days ahead — was reviewed and had worked.

### Practice and pause points

- List what happened (~25 min): Write the events of this delivery, without names attached to failures. Include what went well.
- Cost the problems (~30 min): Estimate what each problem cost in rework, delay or defects. Rank by cost, not by how irritating it was.
- Choose one change (~25 min): Choose the change that addresses the costliest problem. Name who does it and when it starts.
- Decide the check (~25 min): Write what should be different next time if this works. Make it countable where you can.
- Review the last change (~15 min): If you have made a previous change, check whether it helped. Record the result, including if it did not. Save the retrospective and the change log.

Pause after any step; save the artifact and next action.

**Free tool path.** A written retrospective and a change log. No facilitation tool is needed for a team of one or a few.

### Output

A list of what happened, framed as events not people; The two costliest problems with their cost; One committed change with an owner and a date; A check for whether it helped, decided now

### Checks

- Why rank by cost rather than irritation? Answer: Because the irritating problems are usually small and the expensive ones are usually structural. Retrospectives that fix irritations feel productive and change nothing.
- Why commit to only one change? Answer: Because one change with an owner happens and twelve do not. If the problem returns, that is information about the change rather than a reason for a longer list.
- Why decide the check now? Answer: Because afterwards everyone remembers improvement. A countable check makes the next retrospective able to say the change failed.

### Rubric and remediation

**Events are described without blaming people**

Adequate evidence: A written account focused on what happened and what made it likely.

- 0 — Problems attributed to individuals.
- 1 — Neutral wording but no causes examined.
- 2 — Events described with the conditions that produced them.
- 3 — As adequate, and what went well is recorded as deliberately as what did not.

If below 2: Rewrite each item as an event and the condition that made it likely. Show at recheck: The event list.

**Problems are ranked by cost with estimates**

Adequate evidence: Cost estimates in rework, delay or defects, with a ranking.

- 0 — Unranked, or ranked by annoyance.
- 1 — Ranked without estimates.
- 2 — Estimated and ranked by cost.
- 3 — As adequate, and the most annoying problem is shown not to be the most expensive.

If below 2: For each problem estimate the hours or defects it produced, then re-sort. Show at recheck: The ranked list.

**One change is committed with an owner and a date**

Adequate evidence: A single change naming who and when, addressing the top problem.

- 0 — A list of improvements with no owners.
- 1 — One change without a date or owner.
- 2 — One change with both, addressing the costliest problem.
- 3 — As adequate, and the change is small enough to actually happen.

If below 2: Cut your list to one item and attach a person and a start date. Show at recheck: The committed change.

**A check for the change is decided in advance**

Adequate evidence: A countable or observable difference expected next time.

- 0 — No check.
- 1 — A vague expectation of improvement.
- 2 — A countable or observable check.
- 3 — As adequate, and a previous change was reviewed with its result recorded honestly.

If below 2: Write what you will count next time, and what number would mean the change failed. Show at recheck: The check.

### Portfolio contribution

A retrospective with a committed change and a later review of whether it worked is unusual evidence of professional practice rather than of design output.

### Assigned resources

- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The point on iterating and improving frequently. Purpose: Frames process change as part of the work rather than an extra. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. It states the outcome rather than a retrospective method, which is this lesson's own. Fallback: R07.
- R47: [Ryan Singer: Shape Up](https://basecamp.com/shapeup/webbook) — The reasoning about fixed time and what happens when work overruns. Purpose: Gives a frame for discussing overruns as scope decisions rather than personal failures. Effort: 45–60 selected min. Free to read online; print edition sold and not required. Verified 2026-09-06. One company's process; adopt the reasoning rather than the ceremony. Fallback: R07.
