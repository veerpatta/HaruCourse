# Delivery and collaboration

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the small-action teaching and tracking standard](docs/COURSE-AUTHORING.md#small-action-and-tracking-contract--12-september-2026). Only Lesson 1 currently uses the new action flow. Published, worksheet-enabled, teaching-refined, learner-validated and assessed are separate states.

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

#### How the work actually reaches people

Map the path a design takes from agreed to used in a team you can observe or read about, and name the three points where designs most often change.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Reading and observation. If you cannot observe a team, the assigned standard and a public project's issue tracker give enough structure to map the stages.

- Starting material: Your handover document and system pages.
- Create HaruCourse/Practice/m14-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read the standard

- Read the assigned standard's points about iteration, accessibility and measurement.
- Write which outcomes a delivery process is supposed to protect.

**You should end up with:** The outcomes a delivery process is supposed to protect, written in your own words.

Worksheet fields for this step:

- The outcomes a good delivery process protects, in your own words — Iteration, accessibility and measurement are the three the assigned standard is clearest about.

<details>
<summary>Help with this step</summary>

- **Delivery:** Everything between a design being agreed and a person using it. It is where most design decisions are actually finalised.
- **Iteration:** Changing the thing after it meets reality. A process that cannot iterate turns every mistake into a permanent feature.

Stuck starting? Read the assigned standard’s points on iteration, accessibility and measurement, and write one line for each.

Is it enough? Your three lines say what would go wrong if each were missing.

</details>

#### 2. Map a real path

**See it first.** Made-up example. Mapping a delivery path with no team to observe, and giving up on the lesson.

- **What I thought:** I have no team, no engineers and no release process, so this lesson cannot be done honestly. I nearly wrote a description of how delivery works in general and called it a map.
- **Why that would have been worse than nothing:** A general description of delivery is something I could have written before the lesson. It has no deciders in it, no change points, and nothing that could surprise me.
- **What I used instead:** A public project with an open issue tracker. Four months of issues, comments and release notes, all written by people doing the work rather than describing it.
- **What that actually showed:** One issue split into three during planning, with the reason in the comments. An estimate that doubled once somebody noticed a data problem. A review comment asking why the empty state was missing, and the designer answering three days later.
- **What I wrote in the source field:** That it was a public project read from its tracker, not a team I belong to. Everything else on the page is real, and it is real about somebody else’s team.

**The wrong turn:** The wrong turn is treating no access as no evidence, and writing a general description instead. A general description cannot contain a surprise, and the surprises are the point of mapping anything.

**What it costs:** A public tracker shows what people wrote down, which is a partial view: hallway conversations and quick calls never appear in it, and those are where a good deal of slicing happens.

**Still unknown:** Still unknown: how this team’s path differs from one I would eventually work in. It is one team, observed through what they typed, and the map says so.

- Map the stages from decision to release in a team you can observe or read about.
- Name who decides at each stage.

**You should end up with:** A real path mapped from decision to a person using it, with the decider named at each stage or marked unknown.

Worksheet fields for this step:

- Whose path you mapped, and how you could see it — A team you work with, a team you can ask, or a public project with an open tracker. Say which; the third is a complete answer.
- The stages from decision to a person using it, in order
- Who decides at each stage — Where you cannot tell, write that you cannot tell. An unknown decider is a finding.

<details>
<summary>Help with this step</summary>

- **Stage:** A point where the work changes hands or changes form: sliced, estimated, built, reviewed, tested, released. The names differ everywhere; the stages recur.
- **Reading a public project:** An open issue tracker shows slicing, estimation arguments, review comments and releases. It is real evidence about a real team, and it is available to anybody.

Stuck starting? If you have no team, open a public project’s issue tracker and read four months of it before writing anything.

Is it enough? The source line says plainly what you had access to, and the map has real deciders in it.

</details>

#### 3. Find the change points

- Identify where designs get modified.
- Give a real or plausible example for each.

**You should end up with:** Three points where designs change, each with the stage, what changes and an example.

**Try it with help.** Six things that happened to a design in a made up delivery process. For each one, decide where the change happened.

- The booking flow was split so the cancellation path shipped a fortnight after the booking path.
  - **at slicing** — Cutting one flow into two pieces is slicing, and it creates a fortnight in which people can book and cannot cancel. Nobody designed that fortnight.
  - at estimation — Nothing here is about how long it takes. It is about what counts as one piece.
  - during build — The decision was made before anybody started building.
- The held-place countdown turned out to need server work, so it became a fixed expiry time shown once.
  - at slicing — The piece stayed one piece; what changed was what was inside it.
  - **at estimation** — Somebody worked out the cost and the design changed to fit the smaller one. This is the change point designers most often hear about last.
  - during build — The decision was taken before the work started, once the cost was understood.
- The list had no empty state in the design, so the engineer wrote one.
  - at slicing — The piece was whole; something inside it was missing.
  - at estimation — Nobody noticed at estimation, because a missing state is invisible until something has to render.
  - **during build** — Building forces every case to exist. Somebody has to decide, and if the design is silent it will be whoever is typing.
- A screen was built behind a flag and released to a tenth of people first.
  - **at slicing** — How much of the work reaches how many people is a slicing decision, and it changes what the design has to handle: two versions existing at once.
  - at estimation — It is not about cost.
  - during build — The flag is built during the build and the decision to have one is taken earlier.
- A form field was dropped because the data behind it did not exist yet, discovered when the work was sized.
  - at slicing — The story stayed one story.
  - **at estimation** — Sizing is when somebody looks at what is actually available, and missing data is the commonest thing they find.
  - during build — It was found before building started, which is the good version of this.
- A message was reworded because the exact text did not fit on a narrow screen.
  - at slicing — Nothing about the size of the work changed.
  - at estimation — Nobody measures string lengths while estimating.
  - **during build** — It fits or it does not, and that is found by rendering it. This is why exact wording belongs in the handover as text.

**Then:** Now find three real examples from the path you mapped, and write what changed at each.

**What to watch for:** The three points have three different remedies. Slicing needs you in the room; estimation needs you reachable that afternoon; during build is decided by whatever your handover did or did not say.

Worksheet fields for this step, revealed a few at a time in the app:

- Change point 1 · the stage, what changes there, and an example
- Change point 2 · the stage, what changes there, and an example
- Change point 3 · the stage, what changes there, and an example

<details>
<summary>Help with this step</summary>

- **Slicing:** Cutting work into pieces that can be built separately. It is where a flow becomes two releases a fortnight apart, and it changes designs more than anything else.
- **Design changed without you:** The normal outcome, not a failure of the team. Building reveals what drawing did not, and somebody has to decide in the moment.

Stuck starting? Go back through the tracker or your notes and find three places where the thing built differed from the thing agreed.

Is it enough? Each change point has a concrete example rather than a category of change.

</details>

#### 4. Decide where to be

**See it first.** Made-up example. Deciding which delivery stages to attend for a tool-library feature, and choosing the comfortable ones.

- **What I chose:** Design review and the final check before release. Both are meetings where the work is looked at, and both are meetings where I know what I am doing.
- **What happened at those two:** At the design review everybody agreed the design was good. At the final check I found four things that were wrong and could not be changed, because the work was finished.
- **The stage I had not attended:** Slicing. The fortnightly session where somebody decides what counts as one piece of work.
- **What was decided there without me:** That booking and cancellation were two pieces, a fortnight apart. Nobody was being careless; the question was about size, and the person answering it had no reason to think about the fortnight in between.
- **What changed when I went:** I asked what happens to somebody who books in the first week. Ten minutes, one sentence, and the split moved so that cancellation by message shipped with the booking.

**The wrong turn:** The wrong turn is attending the stages where design is the subject, because those are the ones that feel like yours. Design is decided at those; delivery is decided at the ones about size and cost.

**What it costs:** Slicing sessions are long, mostly about things that do not concern you, and you will sit through forty minutes to say one sentence.

**Still unknown:** Still unknown: whether the final check is worth attending at all now. It found four things too late, and it may be that the same hour spent at estimation would find them early.

- Mark the stages where your presence changes the outcome.
- Mark the stages where a specification is enough.

**You should end up with:** The stages where your presence changes the outcome, and the stages where a specification is enough.

Worksheet fields for this step:

- The stages where your presence changes the outcome
- The stages where a specification is enough

<details>
<summary>Help with this step</summary>

- **Being present:** Being in the room when the decision is made. At slicing it is worth more than any document, because the document cannot answer a question.
- **A specification being enough:** Stages where a written answer works: during build, if the wording, states and behaviour are all written down.

Stuck starting? For each stage, ask what a document could not answer.

Is it enough? Your two lists together cover every stage on the map.

</details>

#### 5. Check against the standard

- Name two outcomes your mapped process would currently fail.
- Save the map and the notes.

**You should end up with:** Two outcomes from the standard the mapped process would currently fail, with how you can tell.

Worksheet fields for this step:

- Two outcomes from the standard the mapped process would currently fail, and how you can tell
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Failing an outcome:** The process not protecting something it is supposed to: shipping without measuring, or without iterating, or without an accessibility check.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Take your three outcomes from step 1 and look for each one in the map.

Is it enough? Each failure names evidence from the map rather than a general concern.

</details>

**Save and continue.** Saved for you: Your outcomes, the map, the change points and the presence decisions save as you type, on this device first and then online. Kept outside the app: Screenshots or notes from a tracker stay in your own folder. Do not copy anybody’s personal details out of a public project; the stages and the decisions are what you need. What your creator sees: Your creator reads the source line first. A map from a public tracker, labelled as such, is stronger than a description of delivery in general. Your next action: Open Your work and choose Ready for review. The next lesson writes the work itself, in pieces somebody could build.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write the stages you can actually observe or read about, and name who decides at each.

</details>

<details>
<summary>Hint 2</summary>

For each stage ask what could force the design to change there, and give an instance.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: How the work actually reaches people.
Task: Map the path a design takes from agreed to used in a team you can observe or read about, and name the three points where designs most often change.
Challenge one thing at a time, and start with the mistake this lesson is about: “I hand over the design and the team builds it.” Every team modifies designs during delivery, because building reveals what drawing did not. The choice is whether those modifications happen with you or without you.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the mapped path and ask whether the path is mapped with decision-makers named. Look at the change points and ask whether three change points are identified with examples. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m14-l01-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The path is mapped with decision-makers named: A stage-by-stage map from decision to release with who decides at each. Three change points are identified with examples: Slicing, estimation and build named with a concrete example each. Presence versus specification is decided per stage: A per-stage decision about whether documentation suffices. Two failing standard outcomes are named: Two outcomes the mapped process would currently fail, with why.

**Bring forward:** A delivery map with change points is a useful interview artefact: it shows you understand where design decisions are actually made. Module handoff: Define measurement questions in m15


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

#### Writing work that can be built

Write five stories for your product that each state who, what and why, are independently valuable, and are small enough to build in a few days.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written work in any text file. Trackers are common in teams and are not required for the exercise.

- Starting material: Your findings and a feature you want built.
- Create HaruCourse/Practice/m14-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and draft

- Read the assigned story guidance.
- Draft five stories from your findings and design work.

**You should end up with:** Five stories naming the person, what they can do, and why it matters to them.

Worksheet fields for this step, revealed a few at a time in the app:

- Story 1 · who, what they can do, and why it matters to them — The why is the part an engineer uses to propose a better how. Without it they can only build what you drew.
- Story 2 · who, what they can do, and why it matters to them
- Story 3 · who, what they can do, and why it matters to them
- Story 4 · who, what they can do, and why it matters to them
- Story 5 · who, what they can do, and why it matters to them

<details>
<summary>Help with this step</summary>

- **Story:** A placeholder for a conversation, written as who, what and why. It is not a specification and it is not a ticket for a screen.
- **The why:** What the person gets out of it. It is the part that lets somebody propose a cheaper or better way of achieving the same thing.

Stuck starting? Take one finding from your own research and write the story it implies before writing any of the others.

Is it enough? Each story names a person who is not “the user” in general.

</details>

#### 2. Restore the why

**See it first.** Made-up example. Writing stories for a tool-library booking, and writing the design back as a list.

- **What I wrote:** Five lines: add a countdown to the review screen, add a status chip to the list, build the cancellation screen, add an error state, and add the held-place message.
- **Why it felt right:** Every line was a real thing I had designed, and together they described the whole feature. It read like a plan.
- **What happened at estimation:** The countdown needed server work. Somebody asked what it was for, and I could not answer from the line, because the line said what to build rather than why.
- **What the why turned out to be:** People were paying twice, because nothing told them their place was already held. That is the outcome. A countdown is one way to reach it.
- **What the team proposed instead:** A held-until time shown once, no countdown, no server work. It solved the paying-twice problem in a day rather than a fortnight, and I would never have got there from my own line.

**The wrong turn:** The wrong turn is writing the design back as stories, because the design is what you have and translating it is quick. The first time a constraint appears, nobody can tell which part of your line mattered.

**What it costs:** Writing outcomes means giving up some control over the how, and the thing that ships may not be the thing you drew.

**Still unknown:** Still unknown: whether the held-until time works as well as a countdown would have. Nobody has tested either, and the story is what would make a comparison possible.

- Check each story states why it matters to the person.
- Rewrite any that describes a change rather than an outcome.

**You should end up with:** Every story stating an outcome for a person, with anything that described a change rewritten.

Worksheet fields for this step:

- Any story you rewrote because it described a change rather than an outcome

<details>
<summary>Help with this step</summary>

- **Describing a change:** Writing the thing you drew: add a countdown, build a filter panel. It tells somebody what to make and nothing about what it is for.
- **Outcome:** What is different for the person afterwards. It is what survives when a constraint makes your change impossible.

Stuck starting? Take your first line and finish this sentence: “so that they …”. If you cannot, the line is a change rather than a story.

Is it enough? Every story would still make sense if the thing you designed turned out to be impossible.

</details>

#### 3. Test independence

**See it first.** Made-up example. Checking whether tool-library stories are independently valuable, and checking them against my own plan.

- **The story:** “As somebody returning a tool, I can see the return date on the confirmation screen.” It looked complete: a person, a thing they can do, and a reason.
- **Why I passed it:** It was the first half of a pair I had already planned, and the second half was coming a fortnight later. In my head it was obviously useful.
- **What the question actually asks:** What could somebody do on the day this shipped, and only this. Not what could they do once the rest arrives.
- **The honest answer:** Nothing. The confirmation screen only appears after a return is booked, and booking a return was the second story. On its own the screen is unreachable.
- **What I did:** Merged the two. One story that lets somebody book a return and see the date, which is bigger and is the smallest thing anybody could actually use.

**The wrong turn:** The wrong turn is answering the independence question with the rest of your plan in mind, because the plan is in your head and the story is not read that way by anybody else. A story that depends on the next one is a task with a story’s grammar.

**What it costs:** Merging made the story larger than the guidance likes, and it is genuinely harder to estimate. A bigger honest piece beats two pieces that cannot ship apart.

**Still unknown:** Still unknown: whether there is a smaller genuinely useful slice hiding in it. I could not find one, and somebody who knows the system better might.

- For each story ask whether shipping it alone would help someone.
- Merge or re-slice the ones that fail.

**You should end up with:** For each story, what somebody could do if only that story shipped, with anything that fails merged or re-sliced.

Worksheet fields for this step:

- For each story: what somebody could do if only this shipped
- What you merged or re-sliced because the answer was nothing

<details>
<summary>Help with this step</summary>

- **Independently valuable:** Shipping it alone would help somebody. It is what lets a team release in pieces rather than all at once.
- **A story that helps nobody alone:** Usually half of something. It needs merging with its other half, or re-slicing so that each piece is useful.

Stuck starting? For each story, answer in one sentence what a person could do on the day it shipped.

Is it enough? No story’s answer is “nothing, until the next one ships”.

</details>

#### 4. Size and re-slice

- Estimate each in days.
- Re-slice anything over about a week by outcome, not by layer.

**You should end up with:** Every story sized in days, with one re-sliced by outcome rather than by layer.

**Try it with help.** Six ways a made up booking story was split. For each one, decide what kind of slice it is.

- I can see the status of my booking in the confirmation message; and separately, I can see it without the message.
  - **a good slice** — Both halves help somebody on the day they ship, and the first is much cheaper. It is the clearest example of slicing by outcome.
  - a slice by layer — Neither piece is a technical layer; both are things a person can do.
  - not really a slice — Two independently useful pieces is exactly what a slice should produce.
- Build the server part first, then the screen in the following sprint.
  - a good slice — Nobody can use a server part. The first piece helps no one and teaches nothing.
  - **a slice by layer** — The classic version. It looks orderly and delays all feedback until both pieces exist.
  - not really a slice — It is a real split, and a split into pieces nobody can use.
- Ship the path where everything works; the error and expiry cases follow in a later piece.
  - a good slice — It is tempting, and it ships something people can use. It also means real people meet an undesigned failure in the meantime.
  - **a slice by layer** — It is the same shape as building the server first: the difficult half is deferred and somebody meets its absence. A better slice ships a narrower feature with its failures intact.
  - not really a slice — It is a split, and a dangerous one.
- Ship it for one collection branch, then the other four.
  - **a good slice** — Everybody at that branch gets the whole thing, failures included, and you learn from real use before spreading it.
  - a slice by layer — Nothing technical is being deferred; the feature is whole and narrow.
  - not really a slice — It is a real reduction in scope with a real first release.
- Finish all the designs, then build them.
  - a good slice — Nothing ships at the end of the first piece.
  - a slice by layer — It has the shape of one, and design is not a layer that can be released.
  - **not really a slice** — It is a sequence of activities rather than a split of the work. It was how the whole thing was always going to happen.
- Ship booking now; cancellation follows in a fortnight.
  - a good slice — Booking alone is genuinely useful, which is what makes this hard to see.
  - a slice by layer — Neither piece is a technical layer.
  - **not really a slice** — It is a slice, and it creates a fortnight where people can book and cannot cancel. If nobody has designed that fortnight, the split has quietly invented a new situation rather than dividing an existing one.

**Then:** Now re-slice your own largest story by outcome, and write both halves.

**What to watch for:** The two that catch people out are the happy path and the missing cancellation. Both ship something useful and both leave a real person in a situation nobody designed, which is what makes a slice into a design decision rather than a planning one.

Worksheet fields for this step:

- Each story estimated in days — Your estimate as a designer is rough, and the purpose is to notice the ones that are obviously a fortnight.
- One story re-sliced by outcome rather than by layer, with both halves — By layer means design, then front end, then server. Nobody can use any of those on their own.

<details>
<summary>Help with this step</summary>

- **Slicing by layer:** Splitting into design, front end and server. Each piece is unusable alone, so nothing can be released or learned from until all three are done.
- **Slicing by outcome:** Splitting so each piece helps somebody: the status in the message, then the status without the message. Both are useful on their own.

Stuck starting? Take the story you sized largest and ask what smaller thing would still help somebody.

Is it enough? Both halves of your re-slice would help a person on the day they shipped.

</details>

#### 5. Record

- Note which stories came directly from research findings.
- Save the five stories with their checks.

**You should end up with:** Which stories came directly from a research finding, and which finding.

Worksheet fields for this step:

- Which stories came directly from a research finding, and which one
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Traced to a finding:** A story you can point at an observation for. It is what stops delivery becoming a list of things somebody thought of.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Go back to your own findings and mark which story each one produced.

Is it enough? At least one story names the observation behind it.

</details>

**Save and continue.** Saved for you: Your five stories, the rewrites, the independence checks and the re-slice save as you type, on this device first and then online. Kept outside the app: If your team uses a tracker, the stories go there as well. The versions here are yours, and nothing is sent anywhere from this worksheet. What your creator sees: Your creator reads the why on each story and the one traced to a finding. A set of stories with no research behind any of them is a list of ideas. Your next action: Open Your work and choose Ready for review. The next lesson writes what would have to be true for each of these to be done.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For each story complete “so that …” with something the person cares about, not a restatement.

</details>

<details>
<summary>Hint 2</summary>

For each story ask what shipping only that would give someone. If nothing, re-slice.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Writing work that can be built.
Task: Write five stories for your product that each state who, what and why, are independently valuable, and are small enough to build in a few days.
Challenge one thing at a time, and start with the mistake this lesson is about: “Stories are a formality that translate designs into tickets.” Written as translations they lose the reason, and the first time an engineer meets a constraint they will guess at the intent. The why is the part that survives contact with reality.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the rewritten stories and ask whether each story names person, capability and reason. Look at the independence checks and ask whether each is independently valuable. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m14-l02-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Each story names person, capability and reason: Five stories in the three-part form with real outcomes. Each is independently valuable: An independence check per story with merges or re-slices where it failed. Sizes are estimated and large ones re-sliced: Day estimates with anything over about a week split. At least one re-slice is by outcome, not layer: A split producing two independently useful stories rather than layers.

**Bring forward:** Five well-formed stories traced to research findings show that you can carry evidence into delivery, which is where most research is lost. Module handoff: Define measurement questions in m15


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

#### Acceptance criteria that can be checked

Write acceptance criteria for three stories, covering success, failure and accessibility, that another person could verify without asking you what you meant.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written criteria beside each story. No tooling required.

- Starting material: Your stories and accessibility requirements.
- Create HaruCourse/Practice/m14-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and draft

- Read the assigned guidance on acceptance criteria.
- Draft criteria for three stories, success paths first.

**You should end up with:** Success criteria for three stories, each observable enough that two people would agree whether it passed.

Worksheet fields for this step:

- Which three stories you are writing criteria for
- The success criteria for each, written so somebody could check them — Observable means two people would agree about whether it passed.

<details>
<summary>Help with this step</summary>

- **Acceptance criteria:** What has to be true for a story to be done. They are a design artefact that testing uses, which is why writing them is your work.
- **Observable:** Somebody can look and agree. If two people could reasonably disagree about whether it passed, it is not a criterion yet.

Stuck starting? Write the criteria for the simplest story first, and check each one by asking how somebody would look at it.

Is it enough? Every criterion names something a person could point at.

</details>

#### 2. Add the failure paths

**See it first.** Made-up example. Writing failure criteria for a tool-library booking, and writing the failure I had already drawn.

- **What I wrote:** One failure criterion: if the tool is no longer available, the screen says so and offers the waiting list. It was the error state in my design, so it was the one in my head.
- **What I had not covered:** The empty case, where the filters match nothing. The expiry case, where the hold runs out mid-form. And the case where the request never gets an answer at all.
- **Where those were already written down:** In my own Module 7 exception table, from months earlier. I had written criteria from the design rather than from the table, and the design only showed the failure I had drawn a screen for.
- **What the table added:** Three more criteria, including the one that mattered most: on an expiry, everything already entered is still there when the person tries again.
- **Why that one mattered most:** It is the difference between a delay and starting over, and nothing in any design file shows it, so nobody builds it unless it is written as a criterion.

**The wrong turn:** The wrong turn is writing failure criteria from the design, because the design contains the failures you thought to draw. The exception table contains the ones you thought of before you started drawing.

**What it costs:** Four failure criteria on a story with three success criteria looks unbalanced, and somebody will ask whether all of them are needed.

**Still unknown:** Still unknown: what happens if the hold expires while the payment is in progress. The table does not cover it and neither do these criteria, and it is written down as an open question rather than assumed away.

- For each story, write criteria for the error, empty and expiry cases.
- Use the wording from your m07 exception table.

**You should end up with:** Criteria for the error, empty and expiry cases, with what survives each failure.

Worksheet fields for this step:

- Criteria for the error, empty and expiry cases — Take the wording from your Module 7 exception table rather than inventing it here.
- What has to survive each failure

<details>
<summary>Help with this step</summary>

- **Failure path:** What happens when it does not work: the error, the empty result, the expiry. It is used more often than most features you will design.
- **Preservation:** What the person still has after the failure. Losing what they typed turns a delay into starting again.

Stuck starting? Open your Module 7 exception table and work from it rather than from memory.

Is it enough? Every story has at least one criterion about something going wrong.

</details>

#### 3. Add accessibility

**See it first.** Made-up example. Writing acceptance criteria for a tool-library booking, and leaving accessibility somewhere else.

- **What I did:** Wrote seven criteria covering the success and failure paths, and put the accessibility requirements in the handover document where the Module 11 work lived.
- **Why that seemed sensible:** The handover was thorough, it was linked from the story, and repeating things in two places is how two places disagree.
- **What happened at review:** The build met every criterion. It was accepted, marked done, and released.
- **What was missing from it:** The timer announced every second, which makes the screen unusable for anybody listening. Nothing in the criteria mentioned announcement, so nothing failed.
- **What I changed:** Three accessibility criteria moved into the criteria themselves: keyboard operable, state distinguishable without colour, timer announced at appearance and at expiry only. Done now means those are true.

**The wrong turn:** The wrong turn is keeping accessibility in the document it came from, because repeating it feels like duplication. Anything outside the criteria is optional in practice, however well it is written elsewhere.

**What it costs:** The same requirement now exists in two documents and they can drift. The criteria are the ones that gate release, so they are the ones kept correct.

**Still unknown:** Still unknown: whether announcing at appearance and expiry is enough, or whether a halfway warning is wanted. Nobody using a screen reader has tried this flow, and the criterion says what was decided rather than what was tested.

- Write criteria for keyboard operation, focus, announcement and contrast.
- Take them from your m11 checks rather than inventing them.

**You should end up with:** Accessibility criteria taken from your Module 11 checks, including when anything self-changing is announced.

Worksheet fields for this step:

- Criteria for keyboard operation, focus, announcement and contrast — Take them from your Module 11 checks. Criteria are where accessibility either enters delivery or does not.
- For anything that changes by itself: when it is announced and how often

<details>
<summary>Help with this step</summary>

- **Accessibility in the criteria:** The only place it becomes part of done. Written anywhere else it is a preference somebody may get to.
- **Announcement frequency:** How often something changing is spoken. A countdown announced every second is unusable; announced at appearance and at expiry it is informative.

Stuck starting? Copy the relevant lines from your Module 11 checks into the criteria rather than referring to them.

Is it enough? Each story has at least one accessibility criterion that could fail.

</details>

#### 4. Remove implementation

- Rewrite any criterion that names a technique rather than an outcome.
- Keep constraints only where they are genuinely required.

**You should end up with:** Implementation-shaped criteria rewritten as outcomes, with any genuine constraint kept and justified.

**Try it with help.** Six acceptance criteria from a made up booking story. For each one, decide what is wrong with it, if anything.

- The review screen states that the place is held and until what time.
  - **fine as written** — Somebody can look at the screen and agree in two seconds. It says what, not how.
  - two people could disagree — There is nothing to disagree about: either the time is stated or it is not.
  - it names an implementation — It says nothing about how the time is produced or displayed.
- The remaining time is clearly shown.
  - fine as written — Clearly is doing all the work and means nothing checkable.
  - **two people could disagree** — One person sees a small grey line and calls it shown; another calls it hidden. This is the word that most often survives review.
  - it names an implementation — It is too vague to constrain anything.
- The expiry message is shown in a modal dialogue.
  - fine as written — It is checkable, and it has already decided something that was not yours to decide here.
  - two people could disagree — Nobody would disagree about whether it is a dialogue.
  - **it names an implementation** — The outcome is that the person finds out before losing anything. A dialogue is one way; an inline message may be better and is now ruled out.
- After an expiry, everything the person had entered is still present when they try again.
  - **fine as written** — Observable, about the failure path, and about an outcome rather than a mechanism.
  - two people could disagree — Either the fields are filled or they are not.
  - it names an implementation — It says nothing about where the values are kept.
- The screen is accessible.
  - fine as written — Nobody can check it, so nothing will ever fail on it.
  - **two people could disagree** — It is the accessibility version of clearly. Replace it with the three or four things you actually mean: keyboard operable, announced, distinguishable without colour.
  - it names an implementation — It names nothing at all.
- The countdown is announced when it appears and at expiry, and not on every change.
  - **fine as written** — Specific, checkable by listening, and it rules out the failure that makes the screen unusable.
  - two people could disagree — The two moments are named, so there is nothing to interpret.
  - it names an implementation — It describes what a person experiences rather than the mechanism producing it.

**Then:** Now read your own criteria the same way and rewrite everything in the second and third groups.

**What to watch for:** Two words do most of the damage: clearly, and accessible. Both survive review because nobody disagrees with them, and neither can ever fail.

Worksheet fields for this step:

- Any criterion you rewrote because it named a technique rather than an outcome
- Constraints you kept, and why they are genuinely required — Some are. A legal requirement or a platform rule stays; a preference for how you would have built it does not.

<details>
<summary>Help with this step</summary>

- **Implementation criterion:** One that names how rather than what: use a dialogue, store it in the session. It removes options an engineer might have had.
- **Genuine constraint:** A requirement that really is about the how: a legal rule, a platform requirement, an agreed pattern. It stays and is labelled.

Stuck starting? Search your criteria for the words clearly, appropriately, properly and accessible.

Is it enough? No criterion uses a word that cannot be checked.

</details>

#### 5. Test for ambiguity

- Ask someone to read the criteria and say how they would check each.
- Rewrite anything two people could disagree about.
- Save the criteria with the stories.

**You should end up with:** Somebody reading the criteria and saying how they would check each, or the same test done alone after a day, with everything ambiguous rewritten.

Worksheet fields for this step:

- Who read them and how they said they would check each, or how you tested them alone — Alone: leave them a day, then write the check for each without looking at the design. Anything you cannot check is ambiguous.
- Everything you rewrote afterwards
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Testing for ambiguity:** Asking somebody how they would check each criterion. Where they cannot say, the criterion is a sentence rather than a test.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? If nobody is available, leave the criteria a day and write the check for each without opening the design.

Is it enough? Every criterion has a check somebody could carry out, written in their words rather than yours.

</details>

**Save and continue.** Saved for you: Your criteria, the failure paths, the accessibility lines and the rewrites save as you type, on this device first and then online. Kept outside the app: The criteria belong beside the stories wherever your team keeps them. This worksheet is your working copy and nothing is sent from it. What your creator sees: Your creator reads the accessibility criteria and the ambiguity rewrites. Criteria that could not fail are the commonest thing to find here. Your next action: Open Your work and choose Ready for review. The next lesson decides how much of this is worth building at all.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Rewrite any criterion containing a judgement word as something a person can look at and confirm.

</details>

<details>
<summary>Hint 2</summary>

Take your exception table and write a criterion for each case that applies to these stories.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Acceptance criteria that can be checked.
Task: Write acceptance criteria for three stories, covering success, failure and accessibility, that another person could verify without asking you what you meant.
Challenge one thing at a time, and start with the mistake this lesson is about: “Acceptance criteria are a testing artefact.” They are a design artefact that testing uses. They record what the design actually requires, which is why writing them is your work and not the tester's.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the rewritten criteria and ask whether criteria are observable by someone without context. Look at the failure criteria and ask whether failure paths are covered as well as success. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m14-l03-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Criteria are observable by someone without context: Criteria a reader could verify, confirmed by a read-through with someone else. Failure paths are covered as well as success: Criteria for error, empty and expiry cases per story where they apply. Accessibility criteria come from the m11 work: Criteria naming keyboard, focus, announcement and contrast requirements. Criteria describe outcomes rather than implementations: No criterion names a technique unless the technique is the requirement.

**Bring forward:** Acceptance criteria including accessibility are direct evidence that your standards reach delivery rather than stopping at the design file. Module handoff: Define measurement questions in m15


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

#### Appetite, and deciding what not to build

Set an appetite for one feature, cut the scope to fit it, and write what you removed and what would justify bringing each part back.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written work. The discipline is deciding and recording, not tooling.

- Starting material: Your stories, criteria and the feature they describe.
- Create HaruCourse/Practice/m14-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and set the appetite

**See it first.** Made-up example. Planning tool-library improvements, and deferring the constraint instead of deciding it.

- **What I said:** “Let us build it properly and see how long it takes.” It sounded like the careful answer and everybody agreed with it.
- **What happened for four weeks:** Steady work on the whole design: the shortlist, the filter presets, the new card, the held-place message, the payment states.
- **What happened in week five:** A date appeared that had always existed and nobody had said out loud. Two weeks of work remained and one week was available.
- **What got cut in that week:** The accessible form work, the error states and half the wording, because those were the parts still unfinished. Nobody decided that; it was simply what was left.
- **What deciding the appetite first would have changed:** Two weeks, decided in advance, with the message and the payment states in and the shortlist out. The same amount of work, chosen rather than survived, and the accessibility work inside it rather than at the end.

**The wrong turn:** The wrong turn is deferring the constraint rather than removing it. It does not disappear; it arrives late, as a rushed week in which quality is cut by whatever happens to be unfinished.

**What it costs:** Setting an appetite means saying no to things you can see would be good, before anybody has shown they are not worth building.

**Still unknown:** Still unknown: whether two weeks is right. It is a judgement about what this problem is worth, and the cut list is what makes it revisable rather than final.

- Read the assigned chapters on appetite and fixed time with variable scope.
- Decide how much time this feature is worth, before scoping it.
- Write why that amount and not more.

**You should end up with:** A stated appetite for one feature, decided before any scoping, with the reason for that amount.

Worksheet fields for this step:

- How much time this feature is worth — Decide before scoping. Two weeks, six weeks, three days. It is a decision about value, not a prediction about effort.
- Why that amount and not more

<details>
<summary>Help with this step</summary>

- **Appetite:** How much time something is worth, decided in advance. It is a judgement about value, which you can make, rather than a prediction about effort, which you cannot.
- **Fixed time, variable scope:** The date holds and what goes in it moves. The alternative is fixing the scope and letting quality move, which happens silently.

Stuck starting? Write the number before you look at the design. Looking first turns the appetite into an estimate.

Is it enough? Your reason is about the value of the problem, not about how much work you think it is.

</details>

#### 2. Cut to fit

- List everything in the current design.
- Keep only what delivers the outcome in your story's why.
- Stop when the remainder fits the appetite.

**You should end up with:** Everything currently in the design listed, and what survives, each survivor tied to the outcome in your story.

Worksheet fields for this step:

- Everything currently in the design
- What survives, and how each survivor delivers the outcome in your story’s why

<details>
<summary>Help with this step</summary>

- **Cutting:** Design work, not failure. Deciding what survives is the same skill as deciding what to draw, done under a constraint.
- **Delivering the outcome:** The test each survivor has to pass. If removing it would not stop the why in your story, it is a candidate for the cut list.

Stuck starting? List everything first, including the parts you are sure will survive.

Is it enough? Every survivor has a sentence saying how it delivers the outcome.

</details>

#### 3. Record the cuts

- For each removed item write what would justify bringing it back.
- Make the justification evidence, not enthusiasm.

**You should end up with:** Each removal recorded with what would justify bringing it back, stated as evidence rather than enthusiasm.

**Try it with help.** Six return conditions from a made up tool-library cut list. For each one, decide whether it would actually settle anything.

- The shortlist comes back if a study shows people comparing more than three options before booking.
  - **a real condition** — Somebody could run the study and the answer could be no. That is what makes it a condition rather than a delay.
  - enthusiasm in disguise — Nobody’s preference appears in it.
  - already true — Nothing so far has measured how many options people compare.
- The filter presets come back if the team decides they are important.
  - a real condition — Deciding they are important is not an observation, and the team can decide that any Tuesday.
  - **enthusiasm in disguise** — It reads like a process and is a way of saying when somebody pushes hard enough.
  - already true — Somebody clearly thinks they are important already, which is why they were designed.
- The presets come back if support logs more than ten requests for saved filters in a month.
  - **a real condition** — A number, a source and a period. It can fail, and somebody can check it without asking your opinion.
  - enthusiasm in disguise — It is the same item with a condition that could say no.
  - already true — Unless support is already logging ten a month, in which case the item should not have been cut.
- The redesigned card comes back if the design system needs it for another screen.
  - **a real condition** — A second use is checkable, and it is the same threshold the system’s own governance uses.
  - enthusiasm in disguise — Nothing about preference is in it.
  - already true — It was cut precisely because only one screen needs it.
- The animated confirmation comes back when we have time to do it well.
  - a real condition — Having time is not an observation about the product, and time never appears on its own.
  - **enthusiasm in disguise** — It is the sentence that keeps a cut item alive for ever without anybody having to justify it.
  - already true — Time is exactly what there is not.
- The accessible form work comes back if somebody reports being unable to complete the booking.
  - a real condition — It has the shape of one, and it is the wrong list. Waiting for somebody to report being excluded is not a condition; it is a plan to find out by excluding them.
  - enthusiasm in disguise — It is worse than enthusiasm. It reads as rigour.
  - **already true** — You already know the form is not operable from a keyboard. The report would tell you nothing new and would arrive at somebody else’s expense.

**Then:** Now write your own return conditions, and check each one could come back with the answer no.

**What to watch for:** The last one is the one to watch. A condition that waits for harm to be reported is not a condition at all, and accessibility work belongs with what you refuse to cut rather than on the list.

Worksheet fields for this step, revealed a few at a time in the app:

- Cut 1 · what you removed and what would justify bringing it back
- Cut 2 · what you removed and what would justify bringing it back
- Cut 3 · what you removed and what would justify bringing it back

<details>
<summary>Help with this step</summary>

- **Return condition:** What would have to be observed for a cut item to come back. It turns a cut from a loss into a question.
- **Enthusiasm as a condition:** Bringing it back because somebody wants it. That is how everything cut returns within a quarter and the appetite means nothing.

Stuck starting? For each cut, ask what somebody would have to observe. If the answer involves somebody wanting it, try again.

Is it enough? Every return condition could be answered no.

</details>

#### 4. Name what should never be built

**See it first.** Made-up example. Marking something as not worth building on a tool-library feature, and marking it as not now.

- **The item:** An animated confirmation: a tick that draws itself when a booking succeeds. I had spent an afternoon on it and liked it.
- **What I wrote:** Deferred. Nice to have. It went on the cut list with the others and I felt I had been disciplined about it.
- **What happened in the next planning round:** It came back, because everything on a cut list comes back. Somebody asked why it had been cut and the honest answer was that there had been no time.
- **What was different about it:** The other cuts were waiting for evidence. This one was waiting for nothing: no study would show it was needed, because it does not solve a problem anybody has.
- **What I wrote instead:** Not worth building. The confirmation already says the booking succeeded, in words; an animation adds half a second and one more thing to give a reduced-motion version of. Recorded with that reason so it does not return as a new idea.

**The wrong turn:** The wrong turn is putting everything on the cut list, because deferral is comfortable and refusal is not. An item waiting for no possible evidence is not deferred; it is undecided, and undecided things return every quarter.

**What it costs:** Writing not worth building means saying so about something a colleague may have proposed, and about something you enjoyed making.

**Still unknown:** Still unknown: whether people would enjoy it. They might, and enjoying it is not the same as needing it, and the reason recorded says which claim is being refused.

- Identify at least one item not worth building at all.
- Write the reason so it does not return.

**You should end up with:** At least one item named as not worth building at all, with a reason written so it does not return.

Worksheet fields for this step:

- At least one item not worth building at all, and why — Write the reason so it does not come back in three months as a new idea.

<details>
<summary>Help with this step</summary>

- **Not worth building:** Different from cut. A cut item is waiting for evidence; this one has been decided against, and the reason is recorded so it is not proposed again as a new idea.

Stuck starting? Look for the item you kept designing because it was enjoyable rather than because anything required it.

Is it enough? The reason would still convince you in three months.

</details>

#### 5. Check the remainder

- Confirm what survives still delivers the outcome.
- Save the appetite, the scope and the cut list.

**You should end up with:** A check that the remainder still delivers the outcome, and a statement of what you refused to cut.

Worksheet fields for this step:

- How what survives still delivers the outcome
- What you refused to cut, and why it is not optional — Accessibility and the failure paths are the usual two. Cutting them is how a deadline becomes a silent quality decision.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **What is not optional:** Accessibility and the failure paths. Cutting them is how a deadline becomes a silent quality decision made by whatever happened to be unfinished.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Read your story’s why, then read what survives, and check the second delivers the first.

Is it enough? Nothing in the not-optional list appears anywhere on the cut list.

</details>

**Save and continue.** Saved for you: Your appetite, the scope, the cut list and the never-build item save as you type, on this device first and then online. Kept outside the app: The cut list is worth keeping somewhere your team can see it, so cut items return through their conditions rather than through conversations. What your creator sees: Your creator reads the return conditions. A cut list whose conditions could never be answered no is a delay list. Your next action: Open Your work and choose Ready for review. The next lesson finds out what makes this work hard to size.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write how much time this outcome is worth before looking at the design again.

</details>

<details>
<summary>Hint 2</summary>

Restore any quality you cut and remove a feature instead; quality cuts are the ones that come back as defects.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Appetite, and deciding what not to build.
Task: Set an appetite for one feature, cut the scope to fit it, and write what you removed and what would justify bringing each part back.
Challenge one thing at a time, and start with the mistake this lesson is about: “We will build it properly and see how long it takes.” That defers the constraint rather than removing it, and the constraint arrives as a rushed final week in which quality is cut silently. Deciding the appetite first makes the trade visible while you can still design for it.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the appetite statement and ask whether an appetite is set before scoping, with a reason. Look at the reduced scope and ask whether the scope fits and still delivers the outcome. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m14-l04-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** An appetite is set before scoping, with a reason: A stated time budget with the reasoning for that amount. The scope fits and still delivers the outcome: A reduced scope with a check that the story's why is still met. Cuts are recorded with evidence-based return conditions: Each removed item with what evidence would justify building it. At least one item is refused outright: One item marked as not worth building, with the reason.

**Bring forward:** A cut list with return conditions is unusual and persuasive: it shows you can shape work to a constraint rather than only design the ideal. Module handoff: Define measurement questions in m15


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

#### What an estimate is answering

Take three stories to an engineer or an informed reader, record what made each estimate uncertain, and redesign one to remove the uncertainty.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Conversation and notes. If no engineer is available, ask an informed reader to identify what they could not answer from your story and criteria; the unanswerable parts are the unknowns.

- Starting material: Your stories with criteria.
- Create HaruCourse/Practice/m14-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Prepare the stories

**See it first.** Made-up example. Taking tool-library stories to be estimated, and tidying them first.

- **What I did:** Went through the three stories the night before and smoothed over the parts I was unsure about, so the material would look finished.
- **What I smoothed:** The expiry behaviour, which I had not decided, became “the person is told and can start again”. It sounded complete and it decided nothing.
- **What happened:** The estimate came back at a week, and nobody could say quite why. My sentence had hidden the gap without filling it, so the uncertainty was still there and now had no name.
- **What I did the second time:** Marked my own gaps before sending: three places where I knew the design was silent, written as questions on the story.
- **What that changed:** The conversation started at the gaps instead of hunting for them. Two were decided in ten minutes and the estimate dropped, and the third turned out to depend on another system, which was worth knowing.

**The wrong turn:** The wrong turn is tidying the material before it is estimated, because unfinished work feels unprofessional to hand over. A smoothed gap is worse than an open one: the uncertainty survives and loses its name.

**What it costs:** Sending material with your own gaps marked on it means walking into the conversation with your unfinished thinking visible.

**Still unknown:** Still unknown: how many gaps I did not know about. Marking three found three; the reader found two more, which is the argument for asking somebody at all.

- Take three stories with their criteria.
- Mark anything you know is still undefined.

**You should end up with:** Three stories prepared with your own known gaps marked, and a named person or an honest alternative route.

Worksheet fields for this step:

- Which three stories, and what you already know is undefined in them — Marking your own gaps first makes the conversation about theirs rather than yours.
- Who you asked, or how you did this without an engineer — No engineer: ask an informed reader what they could not answer from your story and criteria. The unanswerable parts are the unknowns.

<details>
<summary>Help with this step</summary>

- **Estimate:** Mostly a measure of how unclear the work is. Read that way it becomes information rather than a number to negotiate.
- **Informed reader:** Somebody who builds things, without being on your team. What they cannot answer from your story is the same list an engineer would produce.

Stuck starting? Mark your own undefined parts before showing anybody anything.

Is it enough? The access line says plainly who you had, including nobody.

</details>

#### 2. Get the estimates

- Ask an engineer, or an informed reader, how long each would take and why.
- Record what they could not answer from your material.

**You should end up with:** Three estimates with the reasoning, and a list of what could not be answered from your material.

Worksheet fields for this step:

- How long each would take, and the reasoning behind each figure
- What they could not answer from your material

<details>
<summary>Help with this step</summary>

- **The reasoning:** Why that number. It is the part worth recording; the number on its own tells you nothing you can act on.
- **Unanswerable from the material:** A question your story and criteria do not settle. Each one is a decision waiting to be made by somebody, usually mid-build.

Stuck starting? Ask for the reasoning before the number, or the number arrives first and the reasoning gets shaped to it.

Is it enough? Each estimate has a why beside it.

</details>

#### 3. Name the uncertainty

**See it first.** Made-up example. Hearing a week-long estimate for a tool-library story, and hearing it as a number.

- **What I heard:** A week. My immediate reaction was that a week seemed like a lot for a message and a timer, and I said so.
- **What that produced:** Four days, after some discussion. The work had not changed; the contingency had moved out of the number and into whatever would be rushed later.
- **What I should have asked:** What makes it a week rather than two days. The answer took thirty seconds: what the timer does across two devices, and what happens if somebody returns after it has expired.
- **What both of those were:** Decisions I had not made. Neither was effort; both were things my design was silent about, so the estimate had to cover several possible answers.
- **What happened after I defined them:** Three days, with no negotiation at all. The specification moved the number; pressing on it had only hidden the same uncertainty.

**The wrong turn:** The wrong turn is treating the number as a proposal to be negotiated. Pressing on it moves the contingency somewhere less visible, and the work is the same size afterwards.

**What it costs:** Asking what makes it uncertain often reveals that the uncertainty is yours, which is a less comfortable conversation than arguing about days.

**Still unknown:** Still unknown: whether three days is right either. It is a smaller number about a clearer thing, which is the most this exercise can claim.

- For each estimate write what made it uncertain.
- Classify each as integration, data, edge case or undefined state.

**You should end up with:** The uncertainty behind each estimate named and classified as integration, data, edge case or undefined state.

Worksheet fields for this step:

- For each estimate: what made it uncertain
- Classify each as integration, data, edge case or undefined state

<details>
<summary>Help with this step</summary>

- **Integration:** Something depending on another system. It is the uncertainty a designer can rarely remove, and the one most worth deferring around.
- **Undefined state:** A situation the design does not cover. It is the uncertainty a designer can remove entirely, in an afternoon.

Stuck starting? For each estimate, ask what would make it smaller. The answer is usually a decision rather than a shortcut.

Is it enough? Each uncertainty has a kind beside it.

</details>

#### 4. Redesign one

- Choose the story whose uncertainty you can remove by deciding.
- Define what was undefined and re-estimate.

**You should end up with:** One story redesigned so an unknown is decided, and re-estimated.

**Try it with help.** Six reasons behind estimates for a made up tool-library feature. For each one, decide whether a designer can remove it.

- We do not know what happens if somebody comes back after the hold has expired.
  - **a decision you can make** — Your design is silent about a state. Deciding it takes an afternoon and removes the contingency entirely.
  - genuine effort — The effort is small once the answer exists. The uncertainty is what is expensive.
  - somebody else’s unknown — Nothing outside your control is involved.
- The payment provider’s behaviour on a partial failure is undocumented and nobody here has used it.
  - a decision you can make — No amount of design settles what another system does.
  - genuine effort — Finding out is effort, and the size of it is unknown, which is the problem.
  - **somebody else’s unknown** — This is the kind to design around: defer it, ship the version that does not depend on it, and find out separately.
- The change touches thirty screens and each needs checking.
  - a decision you can make — You could reduce the scope, and the work that remains is still work.
  - **genuine effort** — Nothing is uncertain here. It is simply a lot of checking, and the estimate is honest.
  - somebody else’s unknown — It is all inside the team.
- We do not know what the list shows when the filters match nothing.
  - **a decision you can make** — An undefined state, and one you have the wording for in an earlier module. It should never have reached an estimate.
  - genuine effort — Building an empty state is an hour. Not knowing what it says is the cost.
  - somebody else’s unknown — It is entirely yours.
- We do not know whether the booking record holds a collection branch, and the person who does is away.
  - a decision you can make — You can decide what you want it to hold. Whether it does is a fact about a system.
  - genuine effort — If it does not hold it, adding it is effort, and nobody knows yet.
  - **somebody else’s unknown** — Waiting for one person is a real and common uncertainty. It is worth naming, because it may be answered in five minutes next week.
- We do not know what the timer should announce, or how often.
  - **a decision you can make** — It is wording and frequency, both yours, and both already covered by your accessibility work.
  - genuine effort — Implementing an announcement is small. Deciding it is what has not happened.
  - somebody else’s unknown — Nothing outside the team is involved.

**Then:** Now classify your own uncertainties and redesign the story whose unknowns are all in the first group.

**What to watch for:** Three of these six are silences in the design, and all three are afternoons of your time. The ones you cannot remove are worth designing around rather than arguing about.

Worksheet fields for this step:

- Which story you redesigned, and what you defined
- The new estimate, and what changed it

<details>
<summary>Help with this step</summary>

- **Removing an unknown:** Deciding what the design was silent about. It is usually an afternoon of your time and days of theirs.
- **A design worth more than a better-looking one:** One that answers the questions that were making the work uncertain. It rarely looks different.

Stuck starting? Pick the story whose uncertainty is entirely a decision, and make the decision.

Is it enough? The re-estimate came after the definition rather than after a discussion about the number.

</details>

#### 5. Record

- Note which unknowns were decisions and which were genuine effort.
- Save the estimates, uncertainties and the redesign.

**You should end up with:** A record of which unknowns were decisions and which were genuine effort, and the repair the Check questions asked for.

Worksheet fields for this step:

- Which unknowns were decisions you could make, and which were genuine effort
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Decision versus effort:** The split that tells you what to do next. Decisions are yours this afternoon; effort is real and has to be planned for.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Count how many of your unknowns were silences in your own design.

Is it enough? The split is written down, so the next estimate conversation starts from it.

</details>

**Save and continue.** Saved for you: Your stories, the estimates, the uncertainties and the redesign save as you type, on this device first and then online. Kept outside the app: Notes from the conversation stay with you. Do not record anybody’s estimate in a way that could be quoted back at them as a commitment. What your creator sees: Your creator reads the split between decisions and effort. A set of uncertainties that were all somebody else’s usually means the material was not read closely. Your next action: Open Your work and choose Ready for review. The next lesson holds the handover conversation itself.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Ask an engineer or an informed reader what they cannot answer from your story and criteria.

</details>

<details>
<summary>Hint 2</summary>

For each estimate ask what the estimator did not know, then classify it.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: What an estimate is answering.
Task: Take three stories to an engineer or an informed reader, record what made each estimate uncertain, and redesign one to remove the uncertainty.
Challenge one thing at a time, and start with the mistake this lesson is about: “Engineers pad estimates.” They add contingency for uncertainty, which is rational. Removing the uncertainty removes the contingency; pressing on the number just moves it somewhere less visible.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the estimates and questions and ask whether three estimates are collected with reasoning. Look at the classified uncertainties and ask whether the uncertainty behind each is named and classified. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m14-l05-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Three estimates are collected with reasoning: Three estimates with what the estimator could not answer from your material. The uncertainty behind each is named and classified: Each estimate with its uncertainty labelled integration, data, edge case or undefined state. One story is redesigned to remove an unknown: A story with the undefined part now defined and a revised estimate. Decisions are separated from genuine effort: A note distinguishing unknowns you could resolve from work that is simply large.

**Bring forward:** Showing that specification reduced an estimate is concrete evidence that design work has delivery value, which is difficult to demonstrate any other way. Module handoff: Define measurement questions in m15


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

#### Handover as a conversation

Run a handover for one story: prepare the artefacts, hold the conversation, and record every question asked and every decision made in it.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Your existing documents plus a written decision record. No handover tool is required.

- Starting material: Your handover document and criteria.
- Create HaruCourse/Practice/m14-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Prepare and send

- Assemble the story, criteria, states and wording into one place.
- Send it far enough ahead to be read.
- Ask people to note questions before the conversation.

**You should end up with:** The story, criteria, states and wording assembled and sent ahead, with a named person or a labelled rehearsal.

Worksheet fields for this step:

- What you assembled and sent, and how far ahead — Story, criteria, states and exact wording, in one place. Far enough ahead to be read properly.
- Who the handover was with, or how you rehearsed it — No team: rehearse it with an informed reader, or run it against the supplied situation and label it a rehearsal everywhere it appears.
- What you asked them to do before the conversation

<details>
<summary>Help with this step</summary>

- **Handover:** Agreeing what will be built, under what constraints, with what still undecided. The document is the input; the conversation is the event.
- **Rehearsal:** Running the conversation with somebody who is not going to build it. It is useful practice and it is labelled as a rehearsal everywhere it appears.

Stuck starting? Send everything two days ahead and ask people to bring questions rather than opinions.

Is it enough? Nobody will be reading your material for the first time in the conversation.

</details>

#### 2. Hold the conversation

**See it first.** Made-up example. Running a handover for a tool-library feature, and running it as a presentation.

- **What I did:** Sent nothing in advance, brought the screens, and walked through all eleven of them for thirty-five minutes.
- **What the last five minutes were:** Any questions? Two polite ones about spacing, and everybody left. It felt like a good meeting.
- **What came back a week later:** Four questions, by message, one at a time, each interrupting somebody: what happens on expiry, is the timer server-driven, what does the empty list say, and is the whole card clickable.
- **What the meeting had actually been for:** Me reading out a document nobody had. The forty minutes everybody was in a room together got spent on the part a document does better.
- **What I did the second time:** Sent everything two days ahead and opened with their questions. Six decisions came out of forty minutes, including two that changed the design while changing it was still cheap.

**The wrong turn:** The wrong turn is presenting in the meeting, because it is what you have prepared and it fills the time comfortably. Narration is what a document does well and a room does badly.

**What it costs:** Sending ahead means people arrive with objections you have not thought about, and the conversation is less under your control.

**Still unknown:** Still unknown: whether everybody read it. Two clearly had, one clearly had not, and opening with questions made that visible rather than hidden.

- Start with their questions, not your narration.
- Write down every decision as it is made.
- Ask what is expensive and what already exists.

**You should end up with:** Their questions recorded in their words, with what they said is expensive and what already exists.

Worksheet fields for this step:

- Their questions, in their words — Start with these rather than narrating your screens. The narration is what the document was for.
- What they said was expensive, and what already exists

<details>
<summary>Help with this step</summary>

- **What already exists:** Components, patterns and data the team already has. Asking is the cheapest way to find that half your design is already built.
- **What is expensive:** The parts that cost far more than they look. Knowing them lets you redesign while it is still cheap to.

Stuck starting? Open by asking what they could not answer from what you sent.

Is it enough? You wrote their questions down rather than answering all of them immediately.

</details>

#### 3. Record the decisions

- Write the decision record and circulate it the same day.
- Mark anything deferred and anything still undecided.

**You should end up with:** Every decision written as it was made, what was deferred, what is still undecided, and the record circulated the same day.

**Try it with help.** Six things that happened in a made up handover conversation. For each one, decide what belongs on the record.

- We agreed the timer will be server-driven rather than local.
  - **a decision to record** — A decision with consequences for accuracy and cost, made by people in the room. Unrecorded, it gets re-decided by whoever builds it.
  - something still undecided — It was settled.
  - not for the record — It is exactly what the record is for.
- Nobody knew what should happen if the hold expires during payment, and we ran out of time.
  - a decision to record — Nothing was decided.
  - **something still undecided** — Writing it down as open is what stops it being decided silently during build by whoever meets it.
  - not for the record — It is the most important line on the record, because it is the one nobody will otherwise remember.
- Two of the five states were deferred to a later piece of work.
  - **a decision to record** — Deferral is a decision. It needs recording with which states and until when, or the build simply omits them.
  - something still undecided — What happens to them was decided; the timing is part of the decision.
  - not for the record — An unrecorded deferral is indistinguishable from an omission.
- The announcement wording changed, because the phrasing chosen would repeat every second.
  - **a decision to record** — It changes an acceptance criterion, so it has to reach the criteria as well as the record.
  - something still undecided — The new wording was agreed in the room.
  - not for the record — A wording change that does not reach the criteria will not be built.
- Somebody said they had always disliked the card component.
  - a decision to record — Nothing was decided, and writing it down turns a passing remark into a position somebody has to defend.
  - something still undecided — It is not a question about this work at all.
  - **not for the record** — Worth hearing and worth following up separately. A decision record is not a transcript.
- One criterion was rewritten because it prescribed a dialogue rather than an outcome.
  - **a decision to record** — The criteria are what gate acceptance, so a change to them is a decision with teeth.
  - something still undecided — The rewrite happened in the room.
  - not for the record — Anything that changes what done means belongs on it.

**Then:** Now write your own record, and check the undecided items are on it as well as the decisions.

**What to watch for:** The line that matters most is the one where nothing was decided. Decisions are remembered by the people who made them; an open question left off the record is answered silently by whoever meets it first.

Worksheet fields for this step:

- Every decision made in the conversation — Write them as they are made. A decision nobody wrote down gets re-made differently in three weeks.
- What was deferred, and what is still undecided
- When you sent the record round — The same day. A record that arrives a week later is a correction rather than a record.

<details>
<summary>Help with this step</summary>

- **Decision record:** What was decided, by whom, on what day. Without it the same decision is made differently in three weeks by whoever remembers it least accurately.
- **Still undecided:** Written down as such. An undecided thing left off the record becomes a decision made silently during build.

Stuck starting? Write each decision as it happens, in one line, rather than reconstructing them afterwards.

Is it enough? The record went out the same day, with the open questions on it.

</details>

#### 4. Agree the escalation

**See it first.** Made-up example. Agreeing an escalation route for a tool-library build, and agreeing to be asked.

- **What we agreed:** Anything unexpected comes to me. Everybody was happy with that and it took four seconds.
- **What happened on the Friday:** A case nobody had considered: the hold expiring while the payment was being processed. I was away for two days.
- **What the engineer did:** Waited a day, then chose. Reasonably: the payment went through and the hold was extended silently, which meant somebody could pay for a place that had already gone to somebody else.
- **What was missing from our agreement:** What to do when I cannot be reached. Ask me is only half a route, and the half that fails is the one that matters.
- **What we agreed instead:** Ask me the same day. If I cannot be reached, choose the option that preserves what the person has already entered and does not take money, and leave a note. Two sentences, and the Friday would have gone differently.

**The wrong turn:** The wrong turn is agreeing to be asked and stopping there, because it sounds like availability rather than a gap. The route is only tested when you are unavailable, which is exactly when it has no second half.

**What it costs:** A default rule means somebody will occasionally make a decision you would have made differently, and you will find out afterwards.

**Still unknown:** Still unknown: whether preserving data is the right default in every case. It is the right one in most, and the note is what lets the exceptions be found.

- Agree who decides when something unexpected appears.
- Agree the default if you are unavailable.

**You should end up with:** An agreed escalation route and a default for when you are unavailable.

Worksheet fields for this step:

- Who decides when something unexpected appears mid-build
- The default if you are unavailable

<details>
<summary>Help with this step</summary>

- **Escalation route:** Who is asked when something unexpected appears mid-build. Agreed in advance it takes ten seconds; unagreed it takes three days.
- **Default rule:** What to do when you cannot be reached. A stated default is better than a guess, and preserving the person’s data is usually the right one.

Stuck starting? Agree the default out loud in the conversation rather than writing it afterwards.

Is it enough? Somebody building this on a Friday afternoon would know what to do.

</details>

#### 5. Update the artefacts

- Change the design and criteria to match what was agreed.
- Save the decision record with them.

**You should end up with:** The design and criteria updated to match what was agreed, with at least one change recorded.

Worksheet fields for this step:

- What changed in the design and the criteria as a result — A handover with no changes was a briefing. At least one thing usually moves.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **A handover with no changes:** A briefing. If nothing moved, either the constraints were not discussed or the questions were not asked.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Change the criteria first, since those are what gate acceptance.

Is it enough? The artefacts now describe what was agreed rather than what you sent.

</details>

**Save and continue.** Saved for you: What you sent, their questions, the decisions, the escalation route and the updates save as you type, on this device first and then online. Kept outside the app: The decision record goes wherever your team keeps such things, the same day. This worksheet is your own copy of it. What your creator sees: Your creator reads the open questions and the one thing that changed. A record with decisions and no open questions is usually an incomplete record. Your next action: Open Your work and choose Ready for review. The next lesson checks the thing that comes back against what was agreed.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Send the material two days ahead next time and ask for questions in advance.

</details>

<details>
<summary>Hint 2</summary>

Write the decisions from memory now and circulate them, marking anything uncertain as such.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Handover as a conversation.
Task: Run a handover for one story: prepare the artefacts, hold the conversation, and record every question asked and every decision made in it.
Challenge one thing at a time, and start with the mistake this lesson is about: “Handover means giving the design to the team.” It means agreeing what will be built, under what constraints, with what still undecided. The document is the input, not the event.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the send record and ask whether artefacts were sent before the conversation. Look at the decision record and ask whether A decision record exists and was circulated. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m14-l06-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Artefacts were sent before the conversation: Material shared in advance with a request for questions. A decision record exists and was circulated: A written record of decisions, deferrals and open items, shared promptly. At least one design change came from the conversation: A change made because of what the engineer knew, recorded with the reason. An escalation route is agreed with a default: A named route for unexpected cases and a default when you are unavailable.

**Bring forward:** A handover decision record shows that you work with delivery constraints rather than around them, which is what collaboration questions in interviews are asking about. Module handoff: Define measurement questions in m15


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

#### Design QA on a real build

Review a built feature against its criteria and specifications, and produce a prioritised list separating defects from changes of mind.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: The built feature, your criteria and a phone. No QA tool is required; a written list is the deliverable.

- Starting material: Your criteria and something built to check.
- Create HaruCourse/Practice/m14-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Check the criteria

- Walk each acceptance criterion against the build.
- Record pass or fail with what you observed.

**You should end up with:** Each acceptance criterion walked against the build, with pass or fail and what you actually observed.

Worksheet fields for this step:

- What you reviewed, and where it is — A built feature from your team, or your own Module 12 build. Both are real; say which.
- Each acceptance criterion, with pass or fail and what you observed — Observed means what you saw, not what you concluded.

<details>
<summary>Help with this step</summary>

- **Design QA:** Checking the built thing against what was agreed. It is your job because you know what the criteria meant.
- **Observed:** What you saw happen. Distinct from what you concluded from it, and the part somebody else can check.

Stuck starting? Open the criteria beside the build and go down them in order, before looking at anything else.

Is it enough? Every criterion has a result and an observation, including the ones that passed.

</details>

#### 2. Force the states

**See it first.** Made-up example. Reviewing a built tool-library feature, and reviewing what was on the screen.

- **What I checked:** The default screen, carefully. Spacing against the token sheet, type sizes, the colours, the alignment of the action row. Eleven small findings in forty minutes.
- **What the eleven were:** Four pixels here, a slightly wrong grey there. All real, all cosmetic, and the list read as fussy because it was.
- **What I had not done:** Triggered anything. Every state I had specified existed only as a specification, and I had reviewed the one screen that appears when everything works.
- **What twenty minutes of forcing states found:** The expiry warning announced every second. The held state was distinguishable only by colour. The empty list showed the loading skeleton for ever. Three criteria failed, and none of them was visible on the default screen.
- **What that did to the list:** Three defects at the top with criteria quoted, and the eleven cosmetic items below as requests. The same review, ordered by harm, read as useful rather than as fussy.

**The wrong turn:** The wrong turn is reviewing the screen in front of you, because it is there and checking it against a token sheet is satisfying. The states are where the specification either survived or did not, and none of them is on screen by default.

**What it costs:** Forcing states takes longer and produces fewer findings. Three findings nobody can dismiss is worth more than fourteen that look like preferences.

**Still unknown:** Still unknown: how the states behave together, such as an expiry during a slow load. I triggered them one at a time, and combinations are where the next round of defects will be.

- Trigger every state from your tables, including failures.
- Record any state that does not exist or behaves differently.

**You should end up with:** Every state triggered deliberately, including failures, with anything missing or different recorded.

Worksheet fields for this step:

- How you triggered each state, including the failures — Break the address, go offline, submit nothing, use a class that is full. Failures do not happen by waiting.
- Any state that does not exist or behaves differently from the specification

<details>
<summary>Help with this step</summary>

- **Forcing a state:** Making it happen on purpose: going offline, submitting nothing, using data that breaks the layout. Waiting for states to occur finds only the common ones.
- **Behaves differently:** The state exists and does something other than the specification says. It is a defect, and it is easy to miss because something does appear.

Stuck starting? Go offline in the network panel before you look at anything else.

Is it enough? You triggered every state from your own tables, not only the ones that appeared on their own.

</details>

#### 3. Check where it will be used

**See it first.** Made-up example. Checking a tool-library build against its widths, and checking them in the browser.

- **What I did:** Dragged the browser window down to 360 pixels, checked all three specified widths, and found nothing wrong.
- **What I concluded:** That the responsive work had come through correctly. It had, at those three widths, on a laptop.
- **What the phone showed in four minutes:** The action bar sitting under the on-screen keyboard while the notes field is focused, and a date control that meets the target size and is awkward at the bottom-right of a large screen.
- **Why neither appeared in the browser:** A resized window has no keyboard covering the bottom third and no thumb. Both are absent by construction, so no width check can find them.
- **What I changed about the review:** Widths in the browser, and everything involving a hand or a keyboard on the device. Two different checks, and only one of them can be done at a desk.

**The wrong turn:** The wrong turn is treating a resized window as a phone, because the width is the visible thing and it is the one the specification mentions. Everything else about holding a phone is missing from it.

**What it costs:** The device pass takes another twenty minutes and finds fewer things, and the things it finds cannot be found any other way.

**Still unknown:** Still unknown: how it behaves on a smaller or older phone. I checked the one I have, and that is what the review says.

- Review on a real phone and at your specified widths.
- Check keyboard operation and long content.

**You should end up with:** The build checked on a real phone, at your specified widths, with the keyboard and with long content.

Worksheet fields for this step:

- What you found on a real phone and at your specified widths
- What you found with the keyboard and with long content — These two and the states are where the important findings are. Spacing is the smallest part of this review.

<details>
<summary>Help with this step</summary>

- **Where it will be used:** A real device, at real widths, with real content. A review on your laptop with short test data checks the easiest version of everything.
- **Long content:** The longest real title, the largest real number. Layouts survive test data and fail on what people actually type.

Stuck starting? Do this part on a phone, standing up, with one thumb.

Is it enough? At least one finding came from the device or the keyboard rather than from the laptop screen.

</details>

#### 4. Separate and prioritise

- Label each finding a defect or a request.
- Order by harm rather than by ease of fixing.

**You should end up with:** Every finding labelled a defect or a request, and the list ordered by harm to the person.

**Try it with help.** Six findings from a made up design QA on a tool-library build. For each one, decide what it is.

- The expiry timer announces every second. The criteria say it is announced at appearance and at expiry only.
  - **a defect** — It contradicts a criterion you can quote. That quotation is what makes it unarguable.
  - a request — Nothing about it is a preference; it was agreed and it was not built that way.
  - not a finding at all — It makes the screen unusable for anybody listening.
- The gap under the title is 12 pixels and the design says 16.
  - **a defect** — It contradicts the specification, so it is a defect, and it belongs low on a list ordered by harm.
  - a request — A documented value is not a preference.
  - not a finding at all — It is real, small, and worth reporting once the important things are above it.
- The empty message would read better as “No tools match those dates” than “No results”.
  - a defect — The built wording is the wording that was agreed. Nothing has been contradicted.
  - **a request** — A genuine improvement and a change of mind. Labelling it honestly is what keeps the defects above it credible.
  - not a finding at all — It is worth raising; it is simply not a fault.
- The held state is distinguishable only by colour. The criteria require it to be distinguishable without colour.
  - **a defect** — A criterion exists and the build fails it. High on the list, because it excludes people rather than annoying them.
  - a request — It was agreed in writing.
  - not a finding at all — It is one of the two most serious things on this list.
- A short animation on success would make the confirmation feel better.
  - a defect — Nothing was agreed about an animation.
  - a request — It could be raised as one, and it is an idea for new work rather than an observation about this build. Putting it on a QA list makes the list look like a wish list.
  - **not a finding at all** — QA is about what was agreed against what was built. New ideas belong somewhere else.
- When the list is empty, the loading placeholder stays on screen indefinitely.
  - **a defect** — The empty state was specified and is not reachable. The person waits for ever for something that has already arrived.
  - a request — An unreachable specified state is a fault.
  - not a finding at all — It is the finding most likely to be mistaken for a slow connection by everybody who meets it.

**Then:** Now label your own findings and order them by what each one does to a person.

**What to watch for:** The two that damage your credibility are opposite. A request reported as a defect makes the whole list look like preference; a real defect buried under eleven cosmetic ones does not get read at all.

Worksheet fields for this step:

- Every finding, labelled defect or request — A defect contradicts something agreed. A request is something you would now prefer. Mixing them costs you trust.
- The list ordered by harm to the person, not by ease of fixing

<details>
<summary>Help with this step</summary>

- **Defect:** The build contradicts something agreed: a criterion, a specification, a decision record. It can be quoted.
- **Request:** Something you would now prefer. It is legitimate and it is not a defect, and labelling it honestly is what keeps your defects credible.

Stuck starting? Label everything before ordering anything, and order by harm rather than by how much it bothers you.

Is it enough? Every defect could be defended by quoting something agreed.

</details>

#### 5. Send it well

- Write the list so each item is actionable without a conversation.
- Save the review with the criteria results.

**You should end up with:** Each item written so somebody could act on it without a conversation.

Worksheet fields for this step:

- How you made each item actionable without a conversation
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Actionable:** It says what happens, what should happen, and where. Anything that needs a conversation first will wait for one.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Read your top item as though you had not been at the review, and see whether you could act on it.

Is it enough? Nothing on the list needs you present in order to be fixed.

</details>

**Save and continue.** Saved for you: Your criterion results, state checks, device findings and the labelled list save as you type, on this device first and then online. Kept outside the app: Screenshots and recordings stay in your own folder; note their file names beside the findings they support. What your creator sees: Your creator reads the defect and request labels, and the order. Those two say more about how you work with a team than the findings do. Your next action: Open Your work and choose Ready for review. The next lesson writes three of these up so somebody could fix them without asking you anything.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Walk the criteria list one item at a time and record what you saw.

</details>

<details>
<summary>Hint 2</summary>

For each finding ask which criterion it fails. If none, it is a request.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Design QA on a real build.
Task: Review a built feature against its criteria and specifications, and produce a prioritised list separating defects from changes of mind.
Challenge one thing at a time, and start with the mistake this lesson is about: “Design QA means checking the visual details.” Spacing matters and is the smallest part. The important part is whether the states exist, the failures behave, the keyboard works and the content survives — the things nobody sees in a screenshot.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the criteria results and ask whether every criterion is checked and recorded. Look at the labelled list and ask whether defects and requests are separated and labelled. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m14-l07-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every criterion is checked and recorded: A pass or fail per criterion with the observation. Defects and requests are separated and labelled: Each finding labelled, with defects tied to a specific criterion. States including failures were forced and checked: A record of each state triggered deliberately, including error and empty. The list is prioritised by harm and actionable: An ordered list where each item can be acted on without further conversation.

**Bring forward:** A design QA list that separates defects from requests demonstrates professional collaboration more convincingly than any statement about working well with engineers. Module handoff: Define measurement questions in m15


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

#### Reporting a defect so it gets fixed

Write three defect reports that another person could reproduce and fix without asking you anything, and check them by having someone try.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written reports with a screenshot or a short screen recording where it helps. No bug tracker is required for the exercise, though most teams use one.

- Starting material: Your QA list with its defects.
- Create HaruCourse/Practice/m14-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Write the three parts

- For each defect write the steps, what happened and what should have happened.
- Keep one defect per report.

**You should end up with:** Three reports, one defect each, with numbered steps, what happened and what should have happened.

Worksheet fields for this step, revealed a few at a time in the app:

- Report 1 · the steps, what happened, and what should have happened — Numbered steps somebody could follow without knowing anything about the design.
- Report 2 · the steps, what happened, and what should have happened
- Report 3 · the steps, what happened, and what should have happened

<details>
<summary>Help with this step</summary>

- **Reproducible:** Somebody else can make it happen from what you wrote. A report that is not reproducible is a conversation request.
- **Expected result:** What should have happened, taken from something agreed. Without it the reader has to guess what you wanted.

Stuck starting? Write the steps as though for somebody who has never seen the product.

Is it enough? Each report contains exactly one defect.

</details>

#### 2. Add the conditions

**See it first.** Made-up example. Reporting a layout defect on a tool-library page, and reporting it with a picture.

- **What I sent:** A screenshot of the price overlapping the button, with the message “this is broken on mobile”.
- **What came back:** A question: which phone, which tool, and at what point? Followed by a message two days later saying it could not be reproduced.
- **What the conditions actually were:** A phone at 360 pixels, a tool whose title runs to three lines, and a slow connection so the image arrives late. All three are needed; with any one missing the layout is fine.
- **Why I had not written them:** Because they were simply my situation. My phone, the tool I happened to be looking at, and the café network I was on. None of it felt like a condition at the time.
- **What the second report contained:** Three numbered steps, the width, the throttle profile, the tool used, the browser, and the specification it contradicts. Reproduced on the first attempt.

**The wrong turn:** The wrong turn is sending the screenshot, because it shows the problem perfectly and took four seconds. It shows the symptom on one screen at one moment, and everything needed to cause it is outside the frame.

**What it costs:** Writing conditions properly takes ten minutes per report, which feels absurd beside a screenshot, and it is the difference between a fix and a conversation.

**Still unknown:** Still unknown: whether it happens on other phones. I reported the one I could reproduce, with its conditions, rather than claiming it affects mobile generally.

- Record device, browser, viewport width, data used and connection.
- Note anything about account or state that matters.

**You should end up with:** Full conditions on each report, including anything about account or state.

Worksheet fields for this step:

- For each report: device, browser, width, data used and connection
- Anything about the account or the state that matters — Signed in or not, first visit or returning, a booking already held. These are the conditions people forget.

<details>
<summary>Help with this step</summary>

- **Conditions:** Device, browser, viewport width, the data used and the connection. Missing conditions are the commonest reason a report cannot be reproduced.
- **Account state:** Signed in or not, first visit or returning, something already held. It is invisible to you because it is your own account, and it is often the missing condition.

Stuck starting? Write down your own situation, item by item, even the parts that feel too ordinary to mention.

Is it enough? Somebody with a different phone and a different account could set up your conditions exactly.

</details>

#### 3. Quote the source

**See it first.** Made-up example. Reporting a tool-library defect, and reporting a disagreement as one.

- **What I wrote:** “The empty state wording is wrong. It should say no tools match those dates.” Clear, specific and actionable.
- **What I could not find:** Anything it contradicted. The built wording was the wording in the criteria, which I had written and approved two weeks earlier.
- **What it actually was:** A change of mind. A good one, and not a fault in anything.
- **What filing it as a defect would have cost:** The two real defects in the same list were criteria failures. A preference sitting beside them invites the reader to treat all three the same way.
- **What I did:** Moved it to the requests, said so plainly, and left the two defects with their criteria quoted. Both were fixed that week.

**The wrong turn:** The wrong turn is filing a preference as a defect, because it is specific and actionable and looks exactly like one. What it lacks is something to quote, and looking for that is the whole test.

**What it costs:** Moving it to requests means it goes behind other work and may never be done, which is the honest consequence of it being a preference.

**Still unknown:** Still unknown: whether the new wording is actually better. Nobody has tried either version with anybody, which is a reason to raise it rather than to assert it.

- Quote the criterion or specification the behaviour contradicts.
- If none exists, say so and mark it a request instead.

**You should end up with:** The criterion or specification quoted on each report, with anything unquotable marked as a request.

Worksheet fields for this step:

- For each report: the criterion or specification quoted
- Any report with nothing to quote, marked as a request instead

<details>
<summary>Help with this step</summary>

- **Quoting the source:** Naming what the behaviour contradicts. It turns a disagreement into a comparison, and it takes the argument out of the report.
- **Nothing to quote:** A sign it is a request rather than a defect. It may still be worth raising, under a different label.

Stuck starting? For each report, find the sentence it contradicts before writing anything about severity.

Is it enough? Every report either quotes something or is relabelled.

</details>

#### 4. Rate severity honestly

- State the effect on the person: blocked, at risk of loss, slowed, or cosmetic.
- Avoid severity language that reflects your own frustration.

**You should end up with:** A severity for each report stated in terms of what happens to the person.

**Try it with help.** Six defect reports from a made up tool-library build. For each one, decide how severe it is for the person.

- The price overlaps the Reserve button while the image loads, so a tap can land on the wrong control during payment.
  - blocked — The task can be completed; the risk is that the wrong thing happens on the way.
  - **at risk of losing something** — A mis-tap during payment can cost somebody money or a place. It sits above anything merely slow.
  - slowed or cosmetic — It looks cosmetic in a screenshot, which is exactly why it gets rated too low.
- The date field cannot be operated from a keyboard, and there is no other way to choose a date.
  - **blocked** — No route to the outcome for anybody without a pointer. Nothing on the list outranks a task that cannot be completed.
  - at risk of losing something — Nothing is lost, because nothing can be started.
  - slowed or cosmetic — It is a complete barrier for a group of people.
- On a failed submission the form clears everything the person typed.
  - blocked — They can start again, which is what makes it not quite a block.
  - **at risk of losing something** — Four fields and a date retyped on a phone is where people leave. It is the classic underrated severity.
  - slowed or cosmetic — Losing entered data is more than a delay.
- The gap under the title is 12 pixels where the specification says 16.
  - blocked — Nothing is prevented.
  - at risk of losing something — Nothing is at risk.
  - **slowed or cosmetic** — A real defect, correctly rated low, and it belongs at the bottom of the list rather than off it.
- When no tools match, the loading placeholder stays on screen indefinitely.
  - blocked — The person can go back and change the filters, so the task survives.
  - at risk of losing something — Nothing typed is lost.
  - **slowed or cosmetic** — It is squarely in this group and at the top of it: everybody who meets it waits for something that has already arrived, then gives up.
- The countdown announces every second, making the screen unusable for anybody listening.
  - **blocked** — Continuous speech makes the rest of the screen unreachable. For the people affected, the task cannot be done.
  - at risk of losing something — It is worse than a risk; the route is not usable at all.
  - slowed or cosmetic — It is invisible on screen, which is why it gets rated as minor by people who cannot hear it happening.

**Then:** Now rate your own three reports the same way and check none of them is rated by how much it annoyed you.

**What to watch for:** The two that get underrated are the ones that look fine in a screenshot: a cleared form and a continuous announcement. Rating by what happens to the person, rather than by what the screen looks like, moves both to the top.

Worksheet fields for this step:

- For each: blocked, at risk of losing something, slowed, or cosmetic — Rate what happens to the person. Your own frustration is not a severity level.

<details>
<summary>Help with this step</summary>

- **Severity:** What it does to somebody: blocked, at risk of losing something, slowed, or cosmetic. It is about them rather than about how much it bothers you.
- **Inflated severity:** Rating by annoyance. It works twice, and then every report you file is discounted by whoever reads it.

Stuck starting? For each report, finish this sentence: because of this, the person …

Is it enough? No severity is justified by how it made you feel.

</details>

#### 5. Test reproducibility

- Ask someone to reproduce each report using only what you wrote.
- Record failures and add the missing conditions.
- Save the three reports.

**You should end up with:** Somebody else reproducing each report from what you wrote, with the missing conditions added where it failed.

Worksheet fields for this step:

- Who tried, and whether each reproduced on the first attempt — If nobody is available, leave the reports a day and reproduce them yourself using only what you wrote.
- What was missing from any report that did not reproduce
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Reproduction test:** Somebody following your report without you. The ones that fail are the ones that would have been rejected.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Hand over the reports without explaining anything and watch.

Is it enough? Any report that failed has the missing condition added rather than an explanation attached.

</details>

**Save and continue.** Saved for you: Your three reports, the conditions, the quoted sources and the reproduction results save as you type, on this device first and then online. Kept outside the app: Screenshots and recordings stay in your own folder. Where your team uses a tracker, the reports go there too; these are your working copies. What your creator sees: Your creator reads which report failed to reproduce and what was missing from it. That is the one that teaches the most. Your next action: Open Your work and choose Ready for review. The next lesson argues for the work in the terms the decision is actually made in.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Add the expected result to every report; without it nobody knows what fixing means.

</details>

<details>
<summary>Hint 2</summary>

Reproduce the defect yourself and write down everything that had to be true.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Reporting a defect so it gets fixed.
Task: Write three defect reports that another person could reproduce and fix without asking you anything, and check them by having someone try.
Challenge one thing at a time, and start with the mistake this lesson is about: “The screenshot shows the problem.” It shows the symptom on one screen at one moment. Without the steps, the conditions and the expected result, it is an invitation to a conversation rather than something anyone can fix.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the three reports and ask whether each report has steps, observed and expected results. Look at the conditions and ask whether conditions are complete enough to reproduce. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m14-l08-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Each report has steps, observed and expected results: Three reports with all three parts present. Conditions are complete enough to reproduce: Device, browser, size, data and connection recorded per report. The contradicted criterion is quoted: A quoted criterion or specification per defect, or a request label where none exists. Reproduction was attempted by someone else: A record of someone attempting each report and what they could not do.

**Bring forward:** Defect reports are unglamorous and unusually revealing: reproducible, criterion-quoting reports mark out a designer who has actually shipped. Module handoff: Define measurement questions in m15


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

#### Arguing for the work with evidence

Make the case for one piece of design work in the terms the decision is actually made in, and write the version of the argument that would fail honestly.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written work. One page, or five sentences in a message; the format matters less than the translation.

- Starting material: Your research findings and delivery lists.
- Create HaruCourse/Practice/m14-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Find out the criteria

- Write what the person deciding is accountable for.
- If you do not know, ask before making the case.

**You should end up with:** What the person deciding is accountable for, and how you found out or that you are guessing.

Worksheet fields for this step:

- What the person deciding is accountable for — Not what they care about in general. What somebody asks them about, and what they have to report.
- How you found out, or that you are guessing — Asking is allowed and usually quick. A guess is a complete answer if it is labelled as one.

<details>
<summary>Help with this step</summary>

- **Accountable for:** What somebody else asks them about: a queue, a cost, a date, a number they report. It is narrower than what they care about.
- **Finding out:** Usually one question, asked before the case is made. Guessing is allowed when it is labelled, and it is the commonest reason a good case fails.

Stuck starting? Ask what they get asked about, before writing any of the argument.

Is it enough? Your line names something specific rather than “the business”.

</details>

#### 2. Translate the evidence

**See it first.** Made-up example. Arguing for held-place work on a tool library, and arguing in design terms.

- **What I said first:** “The flow does not communicate state.” It is true, it is precise, and it is the sentence I would use with another designer.
- **What happened:** Agreement, and no decision. Everybody agreed it was not ideal, and it went on a list behind things with numbers attached to them.
- **What I found out by asking:** The person deciding reports on the support queue every month, and refunds are the largest category in it.
- **What the same evidence became:** Two of three participants could not tell whether their place was secured, and one said she would have paid again. Duplicate payments produce refunds and support contacts, which is the queue that gets reported.
- **What I kept honest:** Three participants cannot establish how often this happens. I said so, and asked whether the support data could be checked, which turned out to take somebody ten minutes.

**The wrong turn:** The wrong turn is arguing in design terms to somebody deciding in other terms. It produces agreement rather than a decision, and agreement is where work goes to wait.

**What it costs:** Translating means your argument no longer sounds like the thing you actually care about, and it can feel like arguing for the wrong reasons.

**Still unknown:** Still unknown: how often people pay twice. Three accounts is three accounts, and the support data is what would settle it.

- State what you observed and what you infer from it, separately.
- Connect the inference to the decider's accountability.
- Keep every number honest, including the sample.

**You should end up with:** What you observed and what you infer, kept separate, connected to what the decider is accountable for, with the cost.

Worksheet fields for this step:

- What you observed, stated plainly — Including how many people. Three participants is three participants.
- What you infer from it, kept separate
- How the inference connects to what they are accountable for
- What the change would cost, as far as you know

<details>
<summary>Help with this step</summary>

- **Translation:** Connecting your evidence to the thing somebody else is answerable for. It is not spin; the same facts, expressed in the terms the decision is made in.
- **Keeping the sample visible:** Saying three participants when there were three. Overclaiming wins this argument and loses the next one permanently.

Stuck starting? Write what you observed first, with the number of people in it, before writing anything about consequences.

Is it enough? Somebody could tell from your case what was observed and what is your reading of it.

</details>

#### 3. Prepare the smaller version

**See it first.** Made-up example. Offering a smaller version of tool-library work, and offering it in the room.

- **What happened:** The two-week ask was refused on the spot: there was one week available and no more.
- **What I did:** Improvised. Said we could do it in a week by dropping the keyboard work and the error states, because those were the parts still unbuilt and therefore the easiest to give up.
- **Why I chose those:** Not because they mattered least. Because in that moment they were the least finished, and the pressure was to produce an answer immediately.
- **What a prepared version would have been:** The message without the countdown. Same accessibility work, same failure paths, one fewer feature, and it still solves the paying-twice problem.
- **What I do now:** Write the smaller version at the same time as the full one, before anybody has refused anything, and bring it on the same page.

**The wrong turn:** The wrong turn is improvising the smaller version under pressure, because a refusal wants an answer immediately. Whatever is least finished gets cut, and that is usually the accessibility work rather than the least valuable feature.

**What it costs:** Bringing a smaller version on the same page risks it becoming the opening ask, and some people will take it as the real number.

**Still unknown:** Still unknown: whether the one-week version fixes enough of the problem to matter. It is smaller and it is honest about what it leaves, and only the release signals would tell.

- Write the reduced scope that delivers most of the value.
- State what the smaller version does not fix.

**You should end up with:** A smaller version prepared in advance, with what it does not fix.

Worksheet fields for this step:

- The reduced version that delivers most of the value — Prepared in advance. A rejected large ask often hides an accepted small one.
- What the smaller version does not fix

<details>
<summary>Help with this step</summary>

- **The smaller version:** The reduced scope you offer when the full one is refused. Prepared in advance it is a decision; improvised it is a concession.
- **What it does not fix:** Said out loud, so the smaller version is not later treated as having solved the whole problem.

Stuck starting? Take your appetite work from earlier in the module and use the one-week version.

Is it enough? The smaller version is written before the conversation rather than during it.

</details>

#### 4. Write the weakness

- State the strongest honest objection to your own case.
- Write what evidence would settle it.

**You should end up with:** The strongest honest objection to your own case, and the evidence that would settle it.

**Try it with help.** Six sentences from a made up case for design work. For each one, decide what it does to the argument.

- Two of the three people we watched could not tell whether their place was secured.
  - **makes it stronger** — A specific observation with its sample visible. It is small and it is checkable, which is what makes it usable.
  - makes it weaker — Three is a small number and saying so is what keeps it credible.
  - will lose you the next argument — Nothing here can be found to be untrue later.
- Users are confused by the booking flow.
  - makes it stronger — It sounds broader and says less. No number, no observation, nothing anybody could check.
  - **makes it weaker** — It is the sentence everybody has heard about every product, so it carries no information.
  - will lose you the next argument — It is too vague to be caught out, which is also why it does nothing.
- Around 30 per cent of people are probably paying twice.
  - makes it stronger — A number moves a decision, and an invented one moves it until somebody checks.
  - makes it weaker — It is stronger this week, which is the trap.
  - **will lose you the next argument** — Three accounts cannot produce a rate. When the real figure appears, everything else you have said is discounted with it.
- Duplicate payments produce refunds and support contacts, which is the largest category in the queue you report on.
  - **makes it stronger** — It connects your evidence to something the decider is answerable for, using their own figure rather than yours.
  - makes it weaker — It is the translation the argument needed.
  - will lose you the next argument — Nothing is being claimed beyond what their own report says.
- Three participants cannot establish how often this happens, and the support data would settle it.
  - **makes it stronger** — Saying the weakness first makes everything else credible, and naming the evidence that would settle it turns the objection into a next step.
  - makes it weaker — It sounds weaker and makes the case harder to dismiss.
  - will lose you the next argument — It is the sentence that protects the next argument.
- Every well-designed booking flow shows held-place state.
  - makes it stronger — It appeals to authority nobody in the room accepts, and it invites a counter-example.
  - **makes it weaker** — It replaces your own evidence, which is specific and local, with a general claim that is easy to argue with.
  - will lose you the next argument — It is weak rather than damaging; nothing in it will later be shown false.

**Then:** Now read your own case the same way, and remove anything in the third group.

**What to watch for:** The invented percentage is the one to watch. It is the most persuasive sentence available and the only one that costs you every future argument, which is a bad trade even when it works.

Worksheet fields for this step:

- The strongest honest objection to your own case
- What evidence would settle it

<details>
<summary>Help with this step</summary>

- **The honest weakness:** The objection you would make if you were arguing against yourself. Saying it first is what makes the rest of the case credible.
- **Overclaiming:** Letting three accounts sound like a measured rate. It wins once and discounts everything you say afterwards.

Stuck starting? Argue against yourself for two minutes and write down the best thing you come up with.

Is it enough? Your weakness is one somebody could actually use against you.

</details>

#### 5. Make the case

- Deliver it, in writing or in person, and record the response.
- Note which part of the argument actually moved the decision.

**You should end up with:** The case delivered and the response recorded, or prepared with what you expect to happen.

Worksheet fields for this step:

- How you delivered it, or that it is prepared and unmade — Unmade is honest. Write what you expect the response to be, so you can compare later.
- Which part of the argument actually moved the decision, or what you expect to
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **What actually moved it:** The part of the argument that changed the decision. It is rarely the part you spent longest on, and knowing it changes how you write the next one.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? If there is nobody to make the case to, write what you expect the response to be and date it.

Is it enough? Either you recorded a real response, or your expectation is written down so it can be compared later.

</details>

**Save and continue.** Saved for you: Your account of the decision, the translated case, the smaller version and the weakness save as you type, on this device first and then online. Kept outside the app: Nothing about anybody’s accountability or the support data belongs outside your own notes. Keep names out of this worksheet. What your creator sees: Your creator reads the honest weakness and the sample. A case with no stated weakness is the one that will not survive being checked. Your next action: Open Your work and choose Ready for review. The next lesson runs the meetings where these decisions get made.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Ask what the decision rests on before writing the argument.

</details>

<details>
<summary>Hint 2</summary>

Split each claim into what you observed and what you infer, and attach the count.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Arguing for the work with evidence.
Task: Make the case for one piece of design work in the terms the decision is actually made in, and write the version of the argument that would fail honestly.
Challenge one thing at a time, and start with the mistake this lesson is about: “Good work speaks for itself.” It speaks to people who already share your standards. Everyone else needs the connection between the work and the thing they are accountable for, and making that connection is part of the job.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the criteria statement and ask whether the decision criteria are stated, not assumed. Look at the labelled case and ask whether observation and inference are labelled separately. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m14-l09-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The decision criteria are stated, not assumed: A written statement of what the decider is accountable for, found out rather than guessed. Observation and inference are labelled separately: A case distinguishing what you saw from what you conclude, with sample sizes attached. A smaller version exists with what it omits: A prepared reduced scope, with what it does not fix stated. The honest weakness is written: The strongest objection to your own case, with what would settle it.

**Bring forward:** The two versions of the same argument, with the honest weakness, show that you can advocate without overclaiming — which is the harder half of influence. Module handoff: Define measurement questions in m15


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

#### Meetings that decide something

Run one design critique and one review with a stated purpose, a prepared question and a written decision record, and compare what each produced.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A written agenda, a question, and notes. No meeting tool is required.

- Starting material: Work in progress worth discussing.
- Create HaruCourse/Practice/m14-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Prepare the critique

- Write the one question you need answered.
- Send the work and the question in advance.
- State that no decisions will be taken.

**You should end up with:** One question written down, the work sent in advance, and a statement that no decisions will be taken.

Worksheet fields for this step:

- The one question you need answered — One. A meeting with three questions answers none of them properly.
- What you sent in advance, and to whom — No colleagues: run it with two people who will look at a screen for ten minutes, and label it a rehearsal.
- How you said that no decisions would be taken

<details>
<summary>Help with this step</summary>

- **Critique:** A meeting for improving work in progress. Nothing is decided, which is what makes people willing to raise problems.
- **Review:** A meeting for deciding. The work is presented against its criteria, and people leave with answers rather than opinions.

Stuck starting? Write the question first. If you cannot get it to one sentence, the work is not ready for a critique.

Is it enough? Your question could be answered yes or no by somebody looking at the screen.

</details>

#### 2. Run the critique

**See it first.** Made-up example. Running a critique on a tool-library screen, and asking for feedback in general.

- **What I asked:** “Any thoughts on this?” Four people, twenty-five minutes, and a genuinely engaged conversation.
- **What I got:** Views on the photograph, a suggestion about the navigation, two people discussing whether the brand colour was right, and one remark about the wording of the held-place line.
- **What I had needed:** Whether the screen communicates that a place is secured and for how long. One person had touched on it, in passing, in the last two minutes.
- **What the open question had done:** Invited everybody to talk about whatever they noticed first, which is the photograph, because it is the largest thing on the screen.
- **What the second critique asked:** One question, sent two days ahead, with a note that no decisions would be taken. Three people answered it, two independently said the phrasing read as marketing rather than status, and that was the finding.

**The wrong turn:** The wrong turn is asking for thoughts, because it sounds open and generous. It hands the agenda to whatever is most visible, and the thing you needed to know gets two minutes at the end.

**What it costs:** A narrow question means people notice things you did not ask about and have nowhere to put them, which is why the written route matters.

**Still unknown:** Still unknown: whether the photograph comments were right. Two people raised it unprompted, which is worth a separate look, and it was not what the session was for.

- Ask for problems and alternatives, not approval.
- Record every problem raised, including the ones you disagree with.
- Defer off-topic feedback to a written route.

**You should end up with:** Every problem raised recorded, including the ones you disagree with, and off-topic feedback sent somewhere rather than refused.

Worksheet fields for this step:

- Every problem raised, including the ones you disagree with
- Off-topic feedback, and where you sent it instead — A written route rather than a refusal. People noticed something real; it is just not today’s question.

<details>
<summary>Help with this step</summary>

- **Asking for problems:** Asking what is wrong and what else would work, rather than whether people like it. Approval is the least useful thing a room can give you.
- **Off-topic feedback:** Something real that is not today’s question. Refusing it costs goodwill; giving it a written route costs nothing.

Stuck starting? Open by reading your question aloud and saying nothing else about the work.

Is it enough? Every problem is written down, including the ones you think are wrong.

</details>

#### 3. Prepare and run the review

- Present the revised work against its criteria and evidence.
- Ask for a decision on each open item.
- Write the decisions as they are made.

**You should end up with:** The revised work presented against its criteria and evidence, with the open items and the decisions written as they were made.

**Try it with help.** Six things somebody might say in a made up design meeting. For each one, decide which meeting it belongs in.

- The held-place line reads like marketing rather than a status.
  - **a critique** — A problem with work in progress, raised where it can still be changed cheaply. This is exactly what a critique is for.
  - a review — By the review the wording should already have been improved; raising it there turns a decision meeting into a redesign.
  - neither — it needs a separate conversation — It is on topic and specific.
- Do we accept this wording, or does it need another round?
  - a critique — Critiques do not decide anything, which is what makes people willing to raise problems in them.
  - **a review** — A decision on an open item, asked directly. The answer goes in the record.
  - neither — it needs a separate conversation — It is precisely what the meeting is for.
- I have never liked our brand colour.
  - a critique — It is not about this work, and it will occupy the room for ten minutes.
  - a review — Nothing here can be decided today.
  - **neither — it needs a separate conversation** — Real, possibly important, and not this session. A written route means it is not lost and does not take over.
- This criterion cannot actually be checked, so it should be rewritten.
  - a critique — It could surface in one, and it is a decision about what done means.
  - **a review** — Changing a criterion changes acceptance, so it belongs where decisions are recorded.
  - neither — it needs a separate conversation — It is directly about the work under review.
- Have you tried putting the status above the title instead?
  - **a critique** — An alternative offered while alternatives are still cheap. Critiques should produce these as well as problems.
  - a review — At review it arrives as a reopening rather than a suggestion.
  - neither — it needs a separate conversation — It is on topic and useful.
- Why are we doing this before the search work?
  - a critique — It is not about the work; it is about whether the work should exist.
  - a review — A review decides on this work, not on the order of everything.
  - **neither — it needs a separate conversation** — It is a fair question and it belongs with whoever sets the order, not in a meeting about a screen.

**Then:** Now sort what you actually got in your own two meetings, and note anything that arrived in the wrong one.

**What to watch for:** The two meetings fail in opposite ways. A decision taken in a critique makes people stop raising problems; a problem raised at review reopens work that was there to be signed off.

Worksheet fields for this step:

- What you presented, against which criteria and evidence
- The open items you asked for a decision on
- The decisions, as they were made

<details>
<summary>Help with this step</summary>

- **Presenting against criteria:** Showing the work beside what it was supposed to do. It turns a review from a reaction into a comparison.
- **Open item:** Something needing a decision today. Naming them in advance is what stops a review becoming a second critique.

Stuck starting? Name the open items at the start, so everybody knows what has to be settled before they leave.

Is it enough? Every open item has a decision or is explicitly deferred.

</details>

#### 4. Close properly

**See it first.** Made-up example. Closing a review on a tool-library feature, and closing it with agreement.

- **How it ended:** Everybody nodded, said it sounded good, and left. It had been a productive forty minutes and three things had clearly been settled.
- **What I wrote up afterwards:** Three decisions, from memory, that evening.
- **What came back:** One correction from somebody who thought the countdown had been deferred rather than dropped, and a second from somebody who thought the wording decision was still open.
- **What reading back would have caught:** Both, in ninety seconds, while everybody was still in the room and could say so.
- **What the closing now is:** Read the decisions aloud, name the next action with its owner and date, and send the record the same day. The reading is where the disagreements surface.

**The wrong turn:** The wrong turn is taking nods as agreement, because the meeting has gone well and reading a list aloud feels laborious. People agree with different versions of the same sentence, and the difference only appears when it is said back.

**What it costs:** Reading back takes two minutes at the point when everybody wants to leave, and occasionally reopens something you had thought settled.

**Still unknown:** Still unknown: whether the one who thought it was deferred would have spoken up. They might not have, and the read-back at least gives them the moment.

- Read the decisions back before people leave.
- Name the next action, its owner and its date.

**You should end up with:** The decisions read back before people left, with a next action, an owner and a date.

Worksheet fields for this step:

- What you read back before people left
- The next action, its owner and its date

<details>
<summary>Help with this step</summary>

- **Reading back:** Saying the decisions aloud before the meeting ends. It is where you find out that two people heard different things.
- **Owner and date:** A name and a day. Without both, the next action is a hope.

Stuck starting? Read the list out loud, even if it feels laborious.

Is it enough? Somebody could leave the meeting and start the next action tomorrow.

</details>

#### 5. Compare

- Write what each meeting produced.
- Note any feedback that would have been better in the other format.
- Save both records.

**You should end up with:** A written comparison of what each meeting produced, and any feedback that belonged in the other format.

Worksheet fields for this step:

- What each meeting produced
- Any feedback that would have been better in the other format
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **What each produced:** A problem list from one and a decision list from the other. If both produced the same kind of thing, one of them was not run as intended.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Put the two records side by side and see whether they look like different documents.

Is it enough? The comparison names a difference in kind, not only in length.

</details>

**Save and continue.** Saved for you: Your question, the problems raised, the decisions and the comparison save as you type, on this device first and then online. Kept outside the app: Both records go to the people who were there, the same day. Keep names out of the problem list; it is about the work. What your creator sees: Your creator reads the two records side by side. A critique record and a review record that look the same usually mean both meetings were the same meeting. Your next action: Open Your work and choose Ready for review. The next lesson decides what shipping this would actually mean.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write the question you need answered and send it with the work.

</details>

<details>
<summary>Hint 2</summary>

Re-read your notes and add the problems you dismissed at the time.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Meetings that decide something.
Task: Run one design critique and one review with a stated purpose, a prepared question and a written decision record, and compare what each produced.
Challenge one thing at a time, and start with the mistake this lesson is about: “Everyone should give feedback on everything.” Broad feedback on a specific question wastes the room's time and yours. Ask for what you need, and offer a separate route for the other things people noticed.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the two agendas and ask whether each meeting had a stated purpose and question. Look at the problem list and ask whether critique produced problems, not approval. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m14-l10-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Each meeting had a stated purpose and question: A written purpose and question sent before each meeting. Critique produced problems, not approval: A problem list including items you disagree with, and no decisions taken. Review produced written decisions with owners: A decision record naming each decision and who made it. The next action has an owner and a date: A named action with a person and a date, agreed before the meeting ended.

**Bring forward:** A critique problem list beside a review decision record demonstrates that you can run the meetings design work depends on. Module handoff: Define measurement questions in m15


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

#### Release, and knowing whether it worked

Write a release plan for one feature naming what ships, what is held back, what you will look at afterwards and what would make you reverse it.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A written plan. Counting support contacts or asking three people needs no analytics tool, and both are legitimate at this scale.

- Starting material: A feature ready to release and its criteria.
- Create HaruCourse/Practice/m14-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read on defining success

- Read the assigned guidance on defining success before release.
- Write the difference between an output and an outcome here.

**You should end up with:** The difference between an output and an outcome, in your own words and about this feature.

Worksheet fields for this step:

- The difference between an output and an outcome, in your own words

<details>
<summary>Help with this step</summary>

- **Output:** The thing that now exists. It is entirely within your control and it proves nothing about whether it helped.
- **Outcome:** What is different for people afterwards. It is not in your control and it is the only reason the output was built.

Stuck starting? Write the output in one line and the outcome in the next, both about your own feature.

Is it enough? Your outcome line is about people rather than about the product.

</details>

#### 2. Decide the scope of the release

**See it first.** Made-up example. Deciding what ships of a tool-library feature, and holding back the wrong half.

- **What I held back:** The countdown, because it needs server work. The message and the states would ship now and the countdown would follow.
- **Why that seemed clean:** The expensive part was deferred and the cheap part shipped, which is the usual shape of a good split.
- **What I found walking it:** The message says the place is held for a limited time and nothing anywhere says how long. Somebody reading it has been told there is a clock and not shown it.
- **Why that is worse than not shipping:** The full design answers the question the message raises. The partial version raises it and leaves it open, which is a situation nobody designed.
- **What shipped instead:** The message with a held-until time rather than a countdown. No server work, the question answered, and the countdown genuinely optional afterwards.

**The wrong turn:** The wrong turn is splitting by what is expensive rather than by what makes sense to meet. The cheap half can raise a question the deferred half was going to answer, and somebody meets the gap.

**What it costs:** A held-until time is less reassuring than a countdown, and it is a different design rather than a reduced one, which takes a little more thought than simply deferring.

**Still unknown:** Still unknown: whether a fixed time reassures people as well as a countdown would. That is one of the things the three conversations after release are for.

- Name what ships and what is deliberately held back.
- Check the partial version makes sense on its own.

**You should end up with:** What ships and what is held back, with the partial version making sense on its own.

Worksheet fields for this step:

- What ships
- What is deliberately held back, and why
- How the partial version makes sense on its own — If it does not, the split is a slice nobody designed rather than a decision.

<details>
<summary>Help with this step</summary>

- **Holding something back:** Deciding not to ship part of it yet, for a stated reason. It is different from not having finished it.
- **A partial version that makes sense:** One somebody could use without meeting a hole. If the held-back part leaves a gap, the split needs designing rather than announcing.

Stuck starting? Walk the shipping version as somebody who has never seen the full design.

Is it enough? Nothing held back leaves a visible hole in what ships.

</details>

#### 3. Decide what you will look at

**See it first.** Made-up example. Shipping a held-place message on a tool library, and deciding what it meant afterwards.

- **What we shipped:** The message and the states, on a Tuesday. Everybody was pleased and the work was marked done.
- **What happened three weeks later:** Somebody asked whether it had worked. Support contacts about payments were down, and so was everything else, because it was a quiet month.
- **What I found myself doing:** Looking for evidence that it had helped, in figures collected for other reasons, after the fact. Everything I found was consistent with it having worked and with it having done nothing.
- **What I should have written before shipping:** Three things: the number of support contacts about payment status over four weeks, whether anybody reports a duplicate payment, and three conversations with recent bookers.
- **Why writing them first changes anything:** Because after the fact, every number is available and the one that supports your work is the one you notice. Naming them in advance is what makes the answer able to be no.

**The wrong turn:** The wrong turn is deciding what to look at after shipping, because that is when somebody asks. By then everything looks like evidence, and the release produces relief rather than learning.

**What it costs:** Naming signals in advance means committing to a possible no, on work you have just spent two weeks on.

**Still unknown:** Still unknown: whether four weeks is long enough, and a quiet month can hide anything. None of this is a controlled comparison and the plan says so.

- Name what would suggest it worked and what would suggest it did not.
- Say where you would see each, and over what period.

**You should end up with:** Three things you will look at, each with where you would see it and over what period, decided before shipping.

**Try it with help.** Six things a team might look at after shipping a made up held-place feature. For each one, decide what it can tell you.

- The number of support contacts about payment status, counted from the support log over four weeks.
  - **a usable signal** — A count with a source and a period, and one that could come back saying nothing changed. It is not a controlled comparison and it is checkable.
  - a number that moves for other reasons — It does move for other reasons, which is why the period and the reversal condition matter, and it is still the closest available.
  - not evidence at all — It is the thing the decider already reports on.
- Total bookings this month compared with last month.
  - a usable signal — It is available and it answers a different question. Bookings move with the season, the weather and whatever else shipped.
  - **a number that moves for other reasons** — A big number with many causes. Watching it after a small change produces a story rather than a finding.
  - not evidence at all — It is real data; it simply cannot be attributed.
- Three conversations with people who booked in the last fortnight, asking what they understood about their place being held.
  - **a usable signal** — Three people is three people, and it is the only thing on the list that can tell you what somebody understood. It is asked about rather than counted, and the plan says so.
  - a number that moves for other reasons — It is not a number at all.
  - not evidence at all — Small and honest evidence is still evidence, as long as nothing later reports it as a rate.
- Nobody has complained since it shipped.
  - a usable signal — Most people who meet a problem never report it, so silence is consistent with everything.
  - a number that moves for other reasons — It is not a measurement of anything.
  - **not evidence at all** — It is the sentence that gets said three weeks after every release, and it would be equally true if the feature had made things worse.
- Whether anybody reports a duplicate payment, read from the same support log.
  - **a usable signal** — It is the specific harm the work was aimed at, with a place to look. Even a small count is informative because it should be near zero.
  - a number that moves for other reasons — It is narrow enough that other causes are few.
  - not evidence at all — It is the closest thing to the outcome this work has.
- The team thinks the new screen is much clearer.
  - a usable signal — The team designed it and knows what it means. Their reading of it is the least informative one available.
  - a number that moves for other reasons — No number is involved.
  - **not evidence at all** — Worth having as morale and worth keeping out of the release plan, where it will be read as a result.

**Then:** Now check your own three signals: each should have a place to look, a period, and the possibility of coming back as no.

**What to watch for:** Two failure shapes. A number that moves for many reasons gives you a story whatever happens; an absence of complaints gives you the same answer whether the work helped or harmed. Both feel like evidence three weeks after a release.

Worksheet fields for this step, revealed a few at a time in the app:

- Signal 1 · what you will look at, where you would see it, and over what period
- Signal 2 · what you will look at, where you would see it, and over what period
- Signal 3 · what you will look at, where you would see it, and over what period
- For each: what would suggest it worked, and what would suggest it did not

<details>
<summary>Help with this step</summary>

- **Deciding in advance:** Naming what you will look at before you ship. Afterwards, everything looks like evidence for whatever happened.
- **Where you would see it:** The support log, a conversation, a count you can do by hand. A signal with nowhere to look is a wish.

Stuck starting? For each signal, name the place you would look before naming the thing you would see.

Is it enough? Every signal could come back saying the work did not help.

</details>

#### 4. Write the reversal condition

- State what would make you change or reverse the feature.
- Name who decides that and when.

**You should end up with:** A stated condition that would make you reverse or change the feature, with who decides and when.

Worksheet fields for this step:

- What would make you reverse or change the feature
- Who decides that, and when

<details>
<summary>Help with this step</summary>

- **Reversal condition:** What would make you undo or rethink it. Written in advance it is a plan; written afterwards it is a rationalisation.
- **Who decides:** A name and a date. A reversal condition nobody owns is not one.

Stuck starting? Finish this sentence: “if, after four weeks, … then the design is not the cause and we …”.

Is it enough? The condition could actually be met, and somebody is named.

</details>

#### 5. Record the limits

- State what cannot be measured and how you will ask instead.
- State that none of this is a controlled comparison.
- Save the release plan.

**You should end up with:** What cannot be measured with how you will ask instead, and a plain statement that this is not a controlled comparison.

Worksheet fields for this step:

- What cannot be measured, and how you will ask instead — Three conversations with recent bookers is a legitimate answer at this scale.
- The sentence saying none of this is a controlled comparison
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Asking instead:** Three conversations with recent bookers. It is legitimate evidence at this scale and it is not a measurement.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? List what you would want to know and cross off everything you could actually count.

Is it enough? The not-controlled sentence sits beside the signals rather than at the end of the document.

</details>

**Save and continue.** Saved for you: Your scope, the signals, the reversal condition and the limits save as you type, on this device first and then online. Kept outside the app: The release plan goes wherever your team keeps such things, before the release rather than after it. What your creator sees: Your creator reads whether the signals were decided before shipping. That is the whole difference between a release plan and a report. Your next action: Open Your work and choose Ready for review. The last lesson of the module decides what to change about how you work.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Walk the partial version as a new person and check it makes sense without the held-back parts.

</details>

<details>
<summary>Hint 2</summary>

Write what you would expect to see if this worked and if it did not, and where.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Release, and knowing whether it worked.
Task: Write a release plan for one feature naming what ships, what is held back, what you will look at afterwards and what would make you reverse it.
Challenge one thing at a time, and start with the mistake this lesson is about: “It shipped, so it worked.” Shipping means it exists. Whether it helped is a separate question, and one you can only answer if you decided in advance what you would look at.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the release scope and ask whether what ships and what is held back is decided. Look at the signals and ask whether success and failure signals are named in advance. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m14-l11-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** What ships and what is held back is decided: A stated release scope with a check that the partial version stands alone. Success and failure signals are named in advance: Written signals for both, with where and over what period. A reversal condition exists with an owner: A condition that would trigger change or reversal, with who decides. Unmeasurable things are named with how you will ask: A list of what cannot be counted and the conversational alternative.

**Bring forward:** A release plan with a reversal condition is rare and shows you treat shipping as a decision rather than an achievement. Module handoff: Define measurement questions in m15


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

#### What to change about how you work

Run a retrospective on this delivery, identify the two things that cost the most, and commit to one change with a way of checking whether it helped.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A written retrospective and a change log. No facilitation tool is needed for a team of one or a few.

- Starting material: Your delivery artefacts from this module.
- Create HaruCourse/Practice/m14-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. List what happened

- Write the events of this delivery, without names attached to failures.
- Include what went well.

**You should end up with:** The events of this delivery written without names attached to failures, and what went well.

Worksheet fields for this step:

- The events of this delivery, without names attached to failures — What happened, not who did it. Names belong on the things that went well.
- What went well

<details>
<summary>Help with this step</summary>

- **Retrospective:** Where a team decides what to change. Without a committed change it is a complaint session with an agenda.
- **Events, not people:** Describing what happened rather than who did it. Once a name is attached to a failure, everybody defends rather than examines.

Stuck starting? Write the timeline first, then remove every name from anything that went wrong.

Is it enough? Nothing in the list would make somebody defensive to read.

</details>

#### 2. Cost the problems

**See it first.** Made-up example. Running a retrospective on a tool-library delivery, and ranking by how it felt.

- **What came top of my list:** The handover meeting, which overran by twenty minutes and went over things I had already written down. It had annoyed me for a week.
- **What was second:** A colleague changing a wording without asking. Also annoying, and also the thing I had complained about most.
- **What I had not costed:** Anything. I had ranked two irritations and neither had a number beside it.
- **What costing found:** The overrunning meeting cost twenty minutes. The undefined states cost about a day of rework and produced two defects that reached QA. The late handover meant the estimate was made without the criteria, which cost three days.
- **What the top two became:** Undefined states and the late handover. Neither had annoyed me at all, because both were invisible: the cost landed on somebody else’s week.

**The wrong turn:** The wrong turn is ranking by irritation, because irritation is the thing you can feel and cost is the thing you have to work out. Irritation tracks how often you met a problem rather than what it cost.

**What it costs:** Costing takes half an hour and produces a list that does not match how anybody felt about the delivery, including you.

**Still unknown:** Still unknown: what the two defects cost downstream. They were caught in QA, and if they had not been the figure would be much larger.

- Estimate what each problem cost in rework, delay or defects.
- Rank by cost, not by how irritating it was.

**You should end up with:** Each problem costed in rework, delay or defects, and the two costliest ranked by cost.

Worksheet fields for this step:

- For each problem: what it cost in rework, delay or defects
- The two costliest, ranked by cost rather than by irritation

<details>
<summary>Help with this step</summary>

- **Cost:** Time redone, days lost, defects produced. It is what makes a ranking arguable rather than a matter of who felt most strongly.
- **Irritation:** How much something annoyed you. It tracks how often you met a problem, not what it cost.

Stuck starting? Put a number beside each problem before ranking any of them.

Is it enough? Your top two have costs beside them, and at least one of them did not annoy you at the time.

</details>

#### 3. Choose one change

- Choose the change that addresses the costliest problem.
- Name who does it and when it starts.

**You should end up with:** One change addressing the costliest problem, with who does it and when it starts.

**Try it with help.** Six changes proposed at a made up retrospective. For each one, decide whether it could actually happen.

- Criteria and states go into the story before it is estimated. Owned by the designer, starting with the next story.
  - **a change somebody can make** — A named person, a named moment, and something entirely within their control. It is also countable next time.
  - a wish — Nothing about it depends on anybody’s mood.
  - a change to somebody else’s behaviour — The designer owns the story material, so this is theirs.
- We should communicate better.
  - a change somebody can make — Nobody can start doing it on Monday, because it names no action.
  - **a wish** — The classic retrospective sentence. Everybody agrees and nothing is different next time.
  - a change to somebody else’s behaviour — It is aimed at everybody, which is the same as nobody.
- Engineers should ask before changing wording.
  - a change somebody can make — You cannot commit on their behalf, and a retrospective item aimed at somebody else usually produces defensiveness rather than change.
  - a wish — It is specific enough to be a real request, which is what makes it the third kind rather than a wish.
  - **a change to somebody else’s behaviour** — If it matters, the version you own is putting the exact wording in the criteria, so changing it fails a criterion.
- The handover happens before estimation rather than after. Owned by the designer, from the next piece of work.
  - **a change somebody can make** — Timing something you arrange is within your control, and it addresses a three-day cost.
  - a wish — It has an owner and a start.
  - a change to somebody else’s behaviour — You call the handover, so the timing is yours.
- We need more time for design work.
  - a change somebody can make — Nobody in the room can grant it, and nothing starts on Monday.
  - **a wish** — It may well be true and it is not a change. The version that is one is setting an appetite, which is a different lesson.
  - a change to somebody else’s behaviour — It is not aimed at a person at all.
- Add a four-item checklist to the handover template. Owned by the designer, this week.
  - **a change somebody can make** — Small, owned, dated, and it changes an artefact rather than a habit. These are the ones that survive.
  - a wish — It is concrete enough to be done in an hour.
  - a change to somebody else’s behaviour — The template is yours.

**Then:** Now check your own committed change: can you start it on Monday without anybody’s permission?

**What to watch for:** The two that fail do so in different ways. A wish names no action; a change aimed at somebody else names an action nobody in the room can commit to. The ones that work change an artefact you own rather than a habit somebody has.

Worksheet fields for this step:

- The change that addresses the costliest problem — One. A retrospective producing four changes produces none.
- Who does it, and when it starts

<details>
<summary>Help with this step</summary>

- **One change:** The limit that makes a retrospective work. Four changes commit nobody to anything and are all forgotten by the next one.
- **Owner and start date:** A name and a day. A change without both is a good intention recorded in a document.

Stuck starting? Choose the change that addresses the costliest problem rather than the easiest one.

Is it enough? You could start it on Monday without asking anybody.

</details>

#### 4. Decide the check

**See it first.** Made-up example. Setting the check on a retrospective change, and setting one nobody could fail.

- **The change:** Criteria and states go into the story before it is estimated, starting with the next one.
- **The check I wrote:** “Estimation should go more smoothly.” It seemed obviously right and everybody agreed with it.
- **What happened at the next retrospective:** Somebody said it had gone more smoothly and somebody else said it had felt about the same. There was no way to settle it, so the change was recorded as probably helping and quietly dropped.
- **What I should have written:** Count how many states were invented during the build. Last time it was two; the target is zero.
- **What that would have produced:** A number at the next retrospective, and a clear answer: either the change worked, or it did not and something else is needed. Both are useful and neither is available from smoothly.

**The wrong turn:** The wrong turn is writing a check that cannot fail, because a smooth-sounding outcome is what everybody wants and nobody can dispute. A check that cannot come back as no does not check anything.

**What it costs:** A countable check is narrower than what you actually care about, and somebody will point out that zero invented states does not mean estimation went well.

**Still unknown:** Still unknown: whether invented states are the right thing to count. It is the thing the costliest problem produced, which makes it the best available proxy rather than a measure of the whole.

- Write what should be different next time if this works.
- Make it countable where you can.

**You should end up with:** What should be different next time if the change works, and how you will count it.

Worksheet fields for this step:

- What should be different next time if this works
- How you will count it

<details>
<summary>Help with this step</summary>

- **The check:** What you will look at next time to see whether the change helped. Decided now, so the answer can be no.
- **Countable:** A number you can produce without effort: how many states were invented, how many defects reached QA. It beats an impression every time.

Stuck starting? Finish this sentence: “if this works, next time there will be …”.

Is it enough? Your check produces a number rather than a feeling.

</details>

#### 5. Review the last change

- If you have made a previous change, check whether it helped.
- Record the result, including if it did not.
- Save the retrospective and the change log.

**You should end up with:** The previous change reviewed, or a plain statement that this is the first retrospective.

Worksheet fields for this step:

- The change you committed to last time, and whether it worked — If this is your first retrospective, say so and write what you will compare against next time.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Reviewing the last change:** Checking whether what you committed to last time helped. Without it, the same problems get listed again in the same words.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Look up what you committed to last time before writing anything about it.

Is it enough? Either the previous change has a verdict, or you have written what next time compares against.

</details>

**Save and continue.** Saved for you: Your events, the costs, the committed change and the check save as you type, on this device first and then online. Kept outside the app: The retrospective record goes to whoever was involved. Keep the no-names rule in that copy as well as this one. What your creator sees: Your creator reads the cost beside each problem and whether the top two annoyed you. Those two things say whether the ranking was worked out or felt. Your next action: Open Your work and choose Ready for review. This closes Module 14. Module 15 turns to what the numbers can and cannot tell you.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Rewrite each item as an event and the condition that made it likely.

</details>

<details>
<summary>Hint 2</summary>

For each problem estimate the hours or defects it produced, then re-sort.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: What to change about how you work.
Task: Run a retrospective on this delivery, identify the two things that cost the most, and commit to one change with a way of checking whether it helped.
Challenge one thing at a time, and start with the mistake this lesson is about: “The retrospective is where the team says what went wrong.” It is where the team decides what to change. Without a committed change and a way of checking it, the same problems will be listed again next time in the same words.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the event list and ask whether events are described without blaming people. Look at the ranked list and ask whether problems are ranked by cost with estimates. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m14-l12-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Events are described without blaming people: A written account focused on what happened and what made it likely. Problems are ranked by cost with estimates: Cost estimates in rework, delay or defects, with a ranking. One change is committed with an owner and a date: A single change naming who and when, addressing the top problem. A check for the change is decided in advance: A countable or observable difference expected next time.

**Bring forward:** A retrospective with a committed change and a later review of whether it worked is unusual evidence of professional practice rather than of design output. Module handoff: Define measurement questions in m15


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
