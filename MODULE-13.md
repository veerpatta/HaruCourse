# Design systems

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the small-action teaching and tracking standard](docs/COURSE-AUTHORING.md#small-action-and-tracking-contract--12-september-2026). All 43 lessons in Modules 1–5 use saved action flows. Published, teaching-refined, learner-validated and assessed remain separate states.

Generated from src/module13.ts; edit that source, then run npm run docs:generate. Level 4 · Module m13 · requirement areas 12. Optional effort 35 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m12. This is guidance for meaningful practice, not a lock. Module approved resource pair: R17 / R06. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: What a design system is for

Stable ID: m13-l01-v1. Core. Areas 12. Optional effort ~120 min.

**Objective.** Write the purpose of your system as three problems it solves for named people, and identify what it will not attempt.

**Bring forward.** Your m08 component inventory and token sheet, and your m12 built pages.

Systems built without a stated purpose become libraries nobody uses and everybody works around.

### Learn

The value of a system is decisions not re-made. When the button hierarchy, the spacing scale and the error pattern are settled, every screen after that starts further along, and disagreements are about the product rather than the pixel. A collection of components without those settled decisions is a folder, and folders do not reduce anyone's work.

Naming the people is what keeps it honest. A system for one designer needs documentation of decisions and their reasons. A system shared with an engineer needs specification of behaviour and states. A system used by people you have never met needs governance and versioning. Building the third when you need the first is a common and expensive mistake.

Coverage beats completeness. Twelve components covering the cases that recur every week are more useful than sixty covering everything imaginable, and far cheaper to keep correct. The repeated cases are visible in your own inventory: they are the things you have already drawn more than twice.

Systems cost something. Someone maintains them, someone answers questions about them, and they make unusual solutions harder — which is sometimes exactly the point and sometimes a real loss. Stating the cost and the out-of-scope boundary at the start prevents the slow expansion that turns a useful system into an obligation.

**Common misconception.** “We need a design system.” Sometimes what is needed is three settled decisions and a page of documentation. A full system is worth building when the same decisions recur across people and time; before that it is an investment with no return.

### Worked example

The system's purpose was written as three problems: I re-decide button hierarchy and spacing on every screen and they drift; an engineer has to ask me what each state should do, which costs a day per feature; and accessibility decisions get remade badly under time pressure. The people served: the learner in three months, one engineer, and any reviewer reading a case study. Out of scope, stated: marketing pages, anything about brand illustration, and any component used only once. The cost was written too: about a day a month of maintenance, and the loss of some freedom on individual screens.

#### What a design system is for

Write the purpose of your system as three problems it solves for named people, and identify what it will not attempt.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written work. The system itself will live in Markdown and a stylesheet; no design tool, subscription or documentation platform is needed.

- Starting material: Your inventory, token sheet and built pages.
- Create HaruCourse/Practice/m13-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Find the repeated decisions

- Look through your screens for decisions you have made more than twice.
- List the ones that drifted between screens.

**You should end up with:** Every decision you have made more than twice, with the ones that drifted marked and the evidence for the drift.

Worksheet fields for this step:

- Every decision you have made more than twice across your screens — Button hierarchy, spacing between groups, how a status is shown, what an empty list says.
- Which of them drifted between screens, and how you can tell

<details>
<summary>Help with this step</summary>

- **Design system:** A set of decisions made once and reused, with the documentation that lets somebody else use them. It is not a folder of components.
- **Drift:** The same decision made slightly differently in different places, by you, over time. It is the evidence that a decision was never actually settled.

Stuck starting? Open three of your own screens side by side and measure the same gap on each.

Is it enough? Your drift examples name a measurement or a word rather than a general feeling of inconsistency.

</details>

#### 2. Write the three problems

**See it first.** Made-up example. Writing the purpose of a tool-library design system, and writing a wish instead of a problem.

- **What I wrote first:** “The system will provide a consistent, scalable foundation for the product.” I was pleased with it, and it survived exactly one question.
- **The question:** Somebody asked which component to build first. The sentence gave no answer, because it names nobody and no cost, so nothing follows from it at all.
- **What I did instead:** Looked at the last month rather than the next year. Where had I actually lost time, and where had somebody else?
- **What came out:** I re-decide button hierarchy on every screen and it drifts. An engineer asks me what each state should do, which costs about a day per feature. Accessibility decisions get remade badly whenever anything is urgent.
- **What that settled immediately:** Which component to build first: the one in the second problem, because it is the only one costing somebody else a day.

**The wrong turn:** The wrong turn is writing the purpose as a description of the system, because that is what purposes usually sound like. A description cannot be used to decide anything, which is what a purpose is for.

**What it costs:** Three specific problems make the system look small and local rather than strategic. Somebody will ask whether it is ambitious enough, and the answer is that it is the right size for three problems.

**Still unknown:** Still unknown: whether the drift is actually costing anybody anything. I can see it; nobody has complained about it, and the second problem is the one with a day attached.

- State each as a problem for a named person, not as a feature.
- Include at least one that costs someone else time.

**You should end up with:** Three problems, each stated as a problem for a named person, with at least one costing somebody else time.

**Try it with help.** Six purpose lines from a made up tool-library design system. For each one, decide what it actually is.

- An engineer asks me what each state should do, which costs about a day per feature and half a day of mine answering.
  - **a problem with a person and a cost** — A person, a recurring situation and a number. It tells you which component to specify first, which is what a purpose is for.
  - a description of the system — Nothing here describes the system at all. It describes what happens without one.
  - a component wish — No component is named. Several would fix it, and the problem is what decides between them.
- The system provides a consistent, scalable foundation for the product.
  - a problem with a person and a cost — Nobody appears in it and nothing is being lost.
  - **a description of the system** — It says what the system is. It cannot settle a single argument, because no decision follows from it.
  - a component wish — It is too general even for that.
- We need a proper modal component.
  - a problem with a person and a cost — It may well be true. It names nobody and no cost, so nothing says whether it comes before or after everything else.
  - a description of the system — It describes one piece rather than the whole.
  - **a component wish** — It arrives as a purpose and is actually an answer. If the real problem is that confirmations are inconsistent, a modal may not be the fix.
- Accessibility decisions get remade badly whenever something is urgent, and I have twice shipped a colour-only status after deciding not to.
  - **a problem with a person and a cost** — The person is you, the situation is time pressure, and the cost is a specific failure that happened twice. It points straight at what the foundations must carry.
  - a description of the system — It describes a failure rather than a system.
  - a component wish — No component is named.
- The system will be the single source of truth for all design decisions.
  - a problem with a person and a cost — It names an ambition rather than a cost anybody is paying now.
  - **a description of the system** — It is a claim about what the system will be, and everything it excludes is invisible in it.
  - a component wish — It is broader than a component and just as unusable.
- I re-decide button hierarchy and spacing on every screen, and three screens now disagree about the gap under a title.
  - **a problem with a person and a cost** — The person is you, the cost is repeated work, and the evidence is three screens that disagree. It is small, and it is the kind that actually gets fixed.
  - a description of the system — It describes what happens without one.
  - a component wish — It names no component; the fix is a rule rather than a thing.

**Then:** Now read your own three problems the same way, and rewrite anything in the other two groups.

**What to watch for:** The component wish is the one to watch, because it sounds like the most practical of the three. It arrives as a purpose and is really an answer, which means the real problem never gets stated and the wrong thing gets built.

Worksheet fields for this step, revealed a few at a time in the app:

- Problem 1 · who it affects and what it costs them — At least one of the three should cost somebody other than you time.
- Problem 2 · who it affects and what it costs them
- Problem 3 · who it affects and what it costs them

<details>
<summary>Help with this step</summary>

- **Problem for a person:** Somebody, doing something, paying a cost. “We need consistency” names nobody and costs nothing, so nothing follows from it.
- **Coverage:** Solving the cases that actually recur, rather than every case. A system covering six repeated decisions beats one covering forty rare ones.

Stuck starting? Look at last month rather than next year, and find where you or somebody else actually lost time.

Is it enough? Each problem names a person and a cost, and at least one cost is somebody else’s.

</details>

#### 3. Name the audience

- Decide who the system is for now, not eventually.
- Write what each audience needs from it.

**You should end up with:** The audience named as it exists now, with what each of them needs from the system.

Worksheet fields for this step:

- Who the system is for now, not eventually — Naming a future team you do not have makes every decision hypothetical.
- What each of them needs from it

<details>
<summary>Help with this step</summary>

- **Audience now:** The people who will use it this month: you in three months, one engineer, a reviewer reading a case study. Not a team you do not have.

Stuck starting? Write the names or roles of the people who will open this in the next eight weeks.

Is it enough? Nobody on the list is hypothetical.

</details>

#### 4. Write the boundary

- List what the system will not cover.
- Include one-off components and anything outside the product.

**You should end up with:** A written list of what the system will not cover, each with a one-line reason.

Worksheet fields for this step:

- What the system will not attempt — One-off components, marketing pages, brand illustration, anything outside the product.
- Why each exclusion, in one line

<details>
<summary>Help with this step</summary>

- **Out of scope:** What the system deliberately does not attempt. Without it, everything drifts in: marketing pages, illustration, one-off screens, and the maintenance grows past what anybody can do.
- **One-off component:** Something used once. Putting it in the system costs maintenance for ever and saves nothing, because it is never reused.

Stuck starting? Go through your component inventory and mark everything used exactly once.

Is it enough? Each exclusion has a reason somebody could argue with, rather than being a list of things you did not get to.

</details>

#### 5. Cost it honestly

**See it first.** Made-up example. Writing the cost of a tool-library design system, and writing a cost of nothing.

- **What I wrote first:** Under costs: “minimal ongoing maintenance”. I believed it, because the system was six components and a page of foundations.
- **What the first month actually took:** Two components changed, which meant the documentation, the stylesheet and two screens. A new state arrived and the grid had to be re-decided. About four hours.
- **The cost I had not written at all:** Rigidity. The listing screen would genuinely have been better with a slightly tighter card, and it uses the shared one, so it is a little worse than it could be.
- **Why writing that down mattered:** Because somebody was going to notice the screen and ask why it looked cramped. Written in advance it is a trade I made; discovered later it is a mistake I did not notice.
- **What the entry became:** About four hours a month, done by me. Makes harder: individual screens lose some freedom, and any change now costs three edits rather than one.

**The wrong turn:** The wrong turn is writing minimal, because it is true of the first week and of no week after that. A cost of nothing means nobody plans for the maintenance, and the system quietly stops matching the product.

**What it costs:** An honest cost makes the system look like a worse investment on the page where you are proposing it. It is also the number that decides whether it is the right size.

**Still unknown:** Still unknown: whether four hours holds as the product grows. It is one month, and I have written the figure with that attached rather than as a rate.

- Estimate the maintenance in hours per month.
- Write what the system will make harder or slower.
- Save the purpose, audience, boundary and cost together.

**You should end up with:** An honest maintenance estimate in hours a month, and a written statement of what the system makes harder.

Worksheet fields for this step:

- Maintenance, in hours a month, and who does it
- What the system will make harder or slower — It will. A system that costs nothing and constrains nothing is a folder of pictures.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Maintenance:** Keeping the documentation, the code and the design in step as things change. It is the cost people forget, and it never goes to zero.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Estimate how long it took to write one component specification, then multiply by how often things change.

Is it enough? You named something the system genuinely makes worse, which every real system does.

</details>

**Save and continue.** Saved for you: Your repeated decisions, the three problems, the audience, the boundary and the cost save as you type, on this device first and then online. Kept outside the app: The system itself will live as Markdown and a stylesheet in your own folder. Nothing here needs a documentation platform or a design tool. What your creator sees: Your creator reads the out-of-scope list and the cost. Both are what separate a system from a folder of components. Your next action: Open Your work and choose Ready for review. The next lesson publishes the foundations everything else in the system rests on.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For each problem write who suffers it and how much time or quality it costs.

</details>

<details>
<summary>Hint 2</summary>

Write who will actually open this in the next three months and design for them.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: What a design system is for.
Task: Write the purpose of your system as three problems it solves for named people, and identify what it will not attempt.
Challenge one thing at a time, and start with the mistake this lesson is about: “We need a design system.” Sometimes what is needed is three settled decisions and a page of documentation. A full system is worth building when the same decisions recur across people and time; before that it is an investment with no return.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the three problems and ask whether three problems are stated for named people. Look at the audience statement and ask whether the current audience is named, not aspirational. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m13-l01-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Three problems are stated for named people: Three problems, each naming who has it and what it costs them. The current audience is named, not aspirational: A stated audience for now, with what each needs. An out-of-scope list exists: A written list of what the system does not cover. Maintenance cost and rigidity are stated: An hours-per-month estimate and a statement of what becomes harder.

**Bring forward:** A system purpose with an out-of-scope list and a maintenance cost reads as senior thinking; a component library with no stated purpose reads as decoration. Module handoff: Prepare delivery in m14


### Practice and pause points

- Find the repeated decisions (~25 min): Look through your screens for decisions you have made more than twice. List the ones that drifted between screens.
- Write the three problems (~25 min): State each as a problem for a named person, not as a feature. Include at least one that costs someone else time.
- Name the audience (~25 min): Decide who the system is for now, not eventually. Write what each audience needs from it.
- Write the boundary (~25 min): List what the system will not cover. Include one-off components and anything outside the product.
- Cost it honestly (~20 min): Estimate the maintenance in hours per month. Write what the system will make harder or slower. Save the purpose, audience, boundary and cost together.

Pause after any step; save the artifact and next action.

**Free tool path.** Written work. The system itself will live in Markdown and a stylesheet; no design tool, subscription or documentation platform is needed.

### Output

Three problems the system solves, each with the person affected; A named audience for the system; An out-of-scope list; A stated maintenance cost and what the system makes harder

### Checks

- What is the unit of value in a design system? Answer: A decision made once and reused. Components are how decisions travel; without settled decisions they are just files.
- Why does the audience change what you build? Answer: A system for yourself needs recorded reasons. One shared with an engineer needs behaviour specifications. One used by strangers needs governance and versioning, which is far more work.
- Why state what a system makes harder? Answer: Because it does: unusual solutions cost more, and someone maintains it. Stating the cost prevents the expansion that turns a useful system into an obligation.

### Rubric and remediation

**Three problems are stated for named people**

Adequate evidence: Three problems, each naming who has it and what it costs them.

- 0 — Purpose stated as consistency in general.
- 1 — Problems named without people or costs.
- 2 — Three problems with people and costs.
- 3 — As adequate, and at least one problem is drawn from an observed drift between your own screens.

If below 2: For each problem write who suffers it and how much time or quality it costs. Show at recheck: The three problems.

**The current audience is named, not aspirational**

Adequate evidence: A stated audience for now, with what each needs.

- 0 — Audience unstated or imagined as a large team.
- 1 — Audience named without needs.
- 2 — Current audience with their needs.
- 3 — As adequate, and the scope of governance matches that audience rather than a future one.

If below 2: Write who will actually open this in the next three months and design for them. Show at recheck: The audience statement.

**An out-of-scope list exists**

Adequate evidence: A written list of what the system does not cover.

- 0 — No boundary.
- 1 — A vague statement of focus.
- 2 — A specific list including one-offs and adjacent areas.
- 3 — As adequate, and the list names something you were tempted to include.

If below 2: List everything you might be asked to systematise and mark what stays out. Show at recheck: The boundary list.

**Maintenance cost and rigidity are stated**

Adequate evidence: An hours-per-month estimate and a statement of what becomes harder.

- 0 — Costs not considered.
- 1 — Maintenance mentioned without an estimate.
- 2 — Both stated concretely.
- 3 — As adequate, and the estimate accounts for answering other people's questions.

If below 2: Estimate the time to keep documentation current and to answer questions, and name one thing the system will slow down. Show at recheck: The cost statement.

### Portfolio contribution

A system purpose with an out-of-scope list and a maintenance cost reads as senior thinking; a component library with no stated purpose reads as decoration.

### Assigned resources

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — Two component pages, read for what a published system documents beyond appearance. Purpose: Shows the level of decision-recording a working system carries. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. One organisation's system for government services; take the documentation habits, not the components or the brand. Fallback: R06.
- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — The styles index, read for how foundational decisions are grouped. Purpose: Gives a worked example of foundations documented separately from components. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Rebuild the reasoning; do not copy the values or treat them as a standard. Fallback: R03.

## Lesson 2: Foundations: the decisions everything else rests on

Stable ID: m13-l02-v1. Core. Areas 12. Optional effort ~120 min.

**Objective.** Publish your foundations — colour, type, spacing, radius, elevation and motion — as documented decisions with reasons, measured contrast and usage rules.

**Bring forward.** Your m08 token sheet and m09 interaction sheet.

Foundations are what make components consistent. Documented as values only, they get used inconsistently within a month.

### Learn

A palette is not a foundation. “Surface-muted, used for panels that sit behind primary content, never for text backgrounds below 14px” is a foundation, because it answers the question someone will actually have. Publishing values alone leaves every future decision to be re-argued from taste, which is exactly what the system was supposed to prevent.

Reasons are what survive disagreement. Someone will want a slightly different grey, and a reason — this is the lightest neutral that keeps body text above the contrast threshold — settles it in one sentence. Without reasons, the discussion is preference against preference and the person with more time wins.

Contrast belongs in the foundations because it is where pairs get chosen. Publishing the measured ratios beside permitted combinations prevents the common failure where a component is built from two tokens that individually seem fine and together fall below the threshold.

Showing the wrong usage is unusually valuable. A do-and-do-not pair communicates a rule faster than a paragraph, and it pre-empts the specific misuse you have already seen happen — which, in your own work, you can name from experience rather than imagining.

**Common misconception.** “Foundations are the easy part.” They are the part everything else inherits. A weak spacing scale or an unmeasured colour pair propagates into every component, and fixing it later means touching everything.

### Worked example

The foundations page documented six groups. Colour: five neutrals and three semantic colours, each with permitted usages, forbidden usages and measured ratios for every text pair. Type: six steps with their jobs, minimum sizes and line-height rules. Spacing: six values with a rule that spacing between groups is always larger than spacing within them. Radius: two values with a rule about which components use which. Elevation: two levels with the statement that elevation never carries meaning alone. Motion: three durations with their reduced-motion pairs. Each group carried one do-and-do-not pair drawn from a real mistake.

#### Foundations: the decisions everything else rests on

Publish your foundations — colour, type, spacing, radius, elevation and motion — as documented decisions with reasons, measured contrast and usage rules.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A Markdown page plus your stylesheet's custom properties. Screenshots or hand-drawn examples for the do-and-do-not pairs; no documentation platform or design tool is required.

- Starting material: Your token and interaction sheets.
- Create HaruCourse/Practice/m13-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Convert values into decisions

**See it first.** Made-up example. Publishing spacing foundations for a tool-library system, and publishing the numbers alone.

- **What I published:** Six spacing values: 4, 8, 12, 16, 24 and 40. Neatly laid out, named, and in the stylesheet as custom properties.
- **What happened within a fortnight:** Every screen used values from the scale and none of them looked related. One screen had 16 between a title and its meta row; another had 24 in the same place.
- **Why the scale had not helped:** It said which numbers were allowed and nothing about when. Six permitted values used arbitrarily is the same problem as arbitrary values, with extra steps.
- **What I added:** One rule: the gap between two groups is always larger than the gap within either. That single sentence decided most of the cases the scale had left open.
- **What it cost me:** Two screens had to change, because they had been using a within-group gap larger than the between-group one, and neither had looked wrong until the rule existed.

**The wrong turn:** The wrong turn is publishing the values and calling it a foundation, because the values are the part that already exists and is easy to lay out. The rule is the whole difference between a scale and a system.

**What it costs:** A rule removes freedom on individual screens, and two of mine were worse for a week until I found a better arrangement within it.

**Still unknown:** Still unknown: whether six values is too many. Four might decide more and allow less, and I have not tried it.

- Take each token group and write the rule for when to use it.
- Add the reason the value was chosen.

**You should end up with:** Six foundation groups, each with its values, the rule for when to use them, and why those values.

Worksheet fields for this step, revealed a few at a time in the app:

- Group 1 · the values, the rule for using them, and why these values — Colour, type, spacing, radius, elevation, motion. Start with the one you use most.
- Group 2 · the values, the rule for using them, and why these values
- Group 3 · the values, the rule for using them, and why these values
- Group 4 · the values, the rule for using them, and why these values
- Group 5 · the values, the rule for using them, and why these values
- Group 6 · the values, the rule for using them, and why these values

<details>
<summary>Help with this step</summary>

- **Foundation:** A value plus a rule for when it applies. A list of values with no rules gets used inconsistently within a month.
- **The reason:** Why this value rather than another. Without it, the value gets overridden by whoever has the strongest taste in the room, including you on a bad day.

Stuck starting? Take the group you use most and write one sentence about when each value applies.

Is it enough? Every group has a rule that would settle an argument, not only a list of permitted values.

</details>

#### 2. Publish the contrast table

- List permitted text-on-surface pairs with measured ratios.
- List forbidden pairs explicitly.

**You should end up with:** A table of permitted text pairs with measured ratios, and a list of pairs that are explicitly forbidden.

Worksheet fields for this step:

- Every permitted text-on-surface pair, with its measured ratio
- Pairs that are explicitly forbidden, and why — A forbidden pair listed is a pair nobody has to measure again.

<details>
<summary>Help with this step</summary>

- **Permitted pair:** A text colour on a surface colour that has been measured and passes. Publishing it means nobody measures it again.
- **Forbidden pair:** One that has been measured and fails. Listing it is more useful than leaving it out, because leaving it out looks like nobody checked.

Stuck starting? Copy the measurements you already made in Module 11 rather than measuring again.

Is it enough? The forbidden list is not empty, because in any real palette some pairs fail.

</details>

#### 3. Document motion

- Bring your m09 durations and easings into the foundations.
- Record the reduced-motion pair for each.

**You should end up with:** Motion durations and easings brought into the foundations with their reduced-motion pairs.

Worksheet fields for this step:

- Your durations and easings from Module 9, with what each is for
- The reduced-motion pair for each one

<details>
<summary>Help with this step</summary>

- **Reduced-motion pair:** What each transition does when somebody has asked their device for less motion. It belongs beside the value, or it gets forgotten per component.

Stuck starting? Open your Module 9 sheet and move the values across rather than rewriting them.

Is it enough? Every motion value has a reduced version beside it, including the ones you think are too small to matter.

</details>

#### 4. Show the wrong usage

- For each group, produce one do-and-do-not example.
- Draw each from a mistake you have actually made.

**You should end up with:** One do-and-do-not pair for each group, each drawn from a mistake you actually made.

**Try it with help.** Six foundation entries from a made up tool-library system. For each one, decide what it is missing, if anything.

- Spacing: 4, 8, 12, 16, 24, 40. Use these values only.
  - complete — It says which numbers are allowed. It does not say when any of them applies, so six permitted values get used arbitrarily.
  - **missing the rule** — Use these only is a constraint, not a rule. A rule would say that gaps between groups exceed gaps within them.
  - missing the reason — It is missing that too, and the rule is the more urgent gap.
- Status colour: amber. Use for items with fewer than three places left, always with the count beside it. Chosen because the greyscale check showed it indistinguishable from red on its own.
  - **complete** — Value, rule and reason, with the reason coming from a check that actually happened. A reader could apply it and could argue with it.
  - missing the rule — The rule is there: fewer than three places, always with the count.
  - missing the reason — The reason is the greyscale finding, which is the strongest kind because it is evidence rather than preference.
- Radius: 4 pixels for controls, 8 for containers.
  - complete — It is usable, and the first time somebody prefers 6 there is nothing to say back.
  - missing the rule — The rule is present and clear: controls get one, containers get the other.
  - **missing the reason** — Without a reason it is a preference, and preferences lose to whoever feels strongest that week.
- Elevation: two levels. Never use elevation as the only way of conveying meaning, because it disappears in high-contrast modes and in print.
  - complete — It has a prohibition and a reason. What it lacks is a rule for when each of the two levels is used.
  - **missing the rule** — Never do this is half a rule. A reader still does not know which level a dialogue gets and which a card gets.
  - missing the reason — The reason is there and it is a good one.
- Type: six steps. Step 5 for page titles, 4 for section headings, 3 for body, 2 for meta, never below 2 for anything a person must read. Six because seven produced two steps nobody could tell apart.
  - **complete** — Values, a rule per step, a floor, and a reason taken from an actual attempt at seven. Nothing is left to taste.
  - missing the rule — Each step has a job and there is a minimum.
  - missing the reason — The reason names something that happened rather than a principle.
- Motion: 120ms for state changes, 240ms for things entering. Reduced-motion pairs are documented per component.
  - complete — The durations have jobs, so it looks complete. Documented per component is where it falls down.
  - **missing the rule** — The reduced pair belongs beside the value, not per component. Left to each component it gets forgotten by the third one.
  - missing the reason — It is missing a reason as well, and the scattered reduced pairs are the more damaging gap.

**Then:** Now read your own six groups the same way, and fix whichever part is missing.

**What to watch for:** Rules go missing more often than values, and reasons go missing more often than rules. A value with no reason survives until somebody with stronger taste arrives; a value with no rule does not survive a fortnight.

Worksheet fields for this step:

- For each group: one do and one do-not, drawn from a mistake you actually made

<details>
<summary>Help with this step</summary>

- **Do-and-do-not:** The right usage beside the wrong one. The wrong one is what people learn from, because it names the mistake they were about to make.
- **From a real mistake:** Taken from your own screens rather than invented. Invented wrong examples tend to be absurd, and nobody was going to make them.

Stuck starting? For each group, find a screen where you got it wrong and use that as the do-not.

Is it enough? Every do-not is something you actually did, not something nobody would do.

</details>

#### 5. Check against a screen

**See it first.** Made-up example. Checking a tool-library screen against its own foundations, and letting the screen win every time.

- **What I found:** Nine values on the screen that the foundations did not permit. A 10 pixel gap, a 14 pixel type size, a grey that was not on the list, and six more.
- **What I did:** Added all nine to the foundations. It took ten minutes, the screen passed, and the foundations page was now longer and more complete.
- **What the foundations had become:** A record of every value I had ever used. Fifteen spacing values instead of six, which permits everything and decides nothing.
- **What I should have asked of each one:** Is this value doing something the permitted ones cannot? For the 10 pixel gap, no: 8 worked and nobody could tell. For one of the greys, yes: it was the only one that passed contrast on the tinted panel.
- **What happened in the end:** Seven of the nine changed on the screen. Two joined the foundations, each with a rule saying when they apply and a note of what forced them.

**The wrong turn:** The wrong turn is adding every unpermitted value to the foundations, because it is quicker than changing the screen and it makes the check pass. A foundation that permits everything you have already done is a record rather than a decision.

**What it costs:** Changing seven values on a finished screen is fiddly, and two of them looked very slightly better before.

**Still unknown:** Still unknown: whether the tinted panel should exist at all, since it is the thing that forced a new grey. That is a question for the component review rather than for the foundations.

- Take one built screen and check every value against the foundations.
- Record any value in use that the foundations do not permit.
- Save the foundations page.

**You should end up with:** One built screen checked value by value, with every value in use that the foundations do not permit.

Worksheet fields for this step:

- Which screen you checked, value by value
- Every value in use that the foundations do not permit — There will be some. Deciding whether to add the value or change the screen is the point of this step.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Value in use but not permitted:** Something on a real screen that the foundations do not allow. Either the foundations are wrong or the screen is, and both are useful findings.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Open the inspector on one screen and read the computed values rather than trusting the stylesheet.

Is it enough? For each unpermitted value you decided whether to add it to the foundations or change the screen.

</details>

**Save and continue.** Saved for you: Your six groups, the contrast table, the motion values and the do-and-do-not pairs save as you type, on this device first and then online. Kept outside the app: The foundations page itself is Markdown in your own folder, beside the stylesheet whose custom properties it documents. Screenshots for the examples sit with it. What your creator sees: Your creator reads the rules and the reasons rather than the values. A value with a reason drawn from a check you ran is the strongest entry a foundations page can carry. Your next action: Open Your work and choose Ready for review. The next lesson specifies one component completely enough for somebody else to build it.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For each group write when to use it and why the value was chosen; both are needed.

</details>

<details>
<summary>Hint 2</summary>

Measure every pair you allow, including quiet text, and split them into permitted and forbidden.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Foundations: the decisions everything else rests on.
Task: Publish your foundations — colour, type, spacing, radius, elevation and motion — as documented decisions with reasons, measured contrast and usage rules.
Challenge one thing at a time, and start with the mistake this lesson is about: “Foundations are the easy part.” They are the part everything else inherits. A weak spacing scale or an unmeasured colour pair propagates into every component, and fixing it later means touching everything.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the foundations page and ask whether each foundation group has values, rules and reasons. Look at the contrast table and ask whether contrast is measured and permitted pairs listed. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m13-l02-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Each foundation group has values, rules and reasons: Six documented groups, each with usage rules and the reasoning behind key values. Contrast is measured and permitted pairs listed: A table of permitted pairs with ratios and an explicit forbidden list. Motion values include reduced-motion pairs: Durations and easings documented with their reduced alternatives. Do-and-do-not pairs come from real mistakes: One pair per group, each traceable to something that actually went wrong.

**Bring forward:** A foundations page with reasons and forbidden pairs demonstrates systems thinking that a colour swatch grid cannot. Module handoff: Prepare delivery in m14


### Practice and pause points

- Convert values into decisions (~30 min): Take each token group and write the rule for when to use it. Add the reason the value was chosen.
- Publish the contrast table (~25 min): List permitted text-on-surface pairs with measured ratios. List forbidden pairs explicitly.
- Document motion (~25 min): Bring your m09 durations and easings into the foundations. Record the reduced-motion pair for each.
- Show the wrong usage (~25 min): For each group, produce one do-and-do-not example. Draw each from a mistake you have actually made.
- Check against a screen (~15 min): Take one built screen and check every value against the foundations. Record any value in use that the foundations do not permit. Save the foundations page.

Pause after any step; save the artifact and next action.

**Free tool path.** A Markdown page plus your stylesheet's custom properties. Screenshots or hand-drawn examples for the do-and-do-not pairs; no documentation platform or design tool is required.

### Output

Six foundation groups documented with values and rules; A reason recorded for each group's key decisions; Measured contrast for every permitted text pair; One do-and-do-not pair per group, drawn from a real mistake

### Checks

- What turns a value into a foundation? Answer: A rule for when to use it and a reason it was chosen. Values alone leave every future decision to be re-argued.
- Why publish forbidden pairs as well as permitted ones? Answer: Because components get built from two individually acceptable tokens that fail together. Listing the forbidden combinations prevents that directly.
- Why show wrong usage? Answer: Because a do-and-do-not pair communicates a rule faster than a paragraph, and it pre-empts the specific misuse you have already seen.

### Rubric and remediation

**Each foundation group has values, rules and reasons**

Adequate evidence: Six documented groups, each with usage rules and the reasoning behind key values.

- 0 — Values only.
- 1 — Values and rules without reasons.
- 2 — All three for every group.
- 3 — As adequate, and one reason references evidence from an earlier module.

If below 2: For each group write when to use it and why the value was chosen; both are needed. Show at recheck: The foundations page.

**Contrast is measured and permitted pairs listed**

Adequate evidence: A table of permitted pairs with ratios and an explicit forbidden list.

- 0 — No contrast information.
- 1 — Ratios recorded without permitted or forbidden guidance.
- 2 — Both lists with measured ratios.
- 3 — As adequate, and quiet text such as captions and disabled labels is covered.

If below 2: Measure every pair you allow, including quiet text, and split them into permitted and forbidden. Show at recheck: The contrast table.

**Motion values include reduced-motion pairs**

Adequate evidence: Durations and easings documented with their reduced alternatives.

- 0 — Motion absent from the foundations.
- 1 — Durations documented without reduced pairs.
- 2 — Both documented together.
- 3 — As adequate, and essential motion is distinguished from decorative.

If below 2: Bring your m09 sheet into the foundations and add the reduced pair for each entry. Show at recheck: The motion foundations.

**Do-and-do-not pairs come from real mistakes**

Adequate evidence: One pair per group, each traceable to something that actually went wrong.

- 0 — No examples.
- 1 — Invented examples.
- 2 — Examples drawn from real mistakes in your work.
- 3 — As adequate, and each names the consequence of the wrong usage.

If below 2: Look back through your screens for misuse you have already committed and photograph both versions. Show at recheck: The example pairs.

### Portfolio contribution

A foundations page with reasons and forbidden pairs demonstrates systems thinking that a colour swatch grid cannot.

### Assigned resources

- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — Colour, typography, spacing and layout, read for how each decision is documented and constrained. Purpose: Shows a working example of foundations published as rules rather than values. Effort: 45–60 selected min. Free reading, no account. Verified 2026-09-06. Rebuild the reasoning and your own values; the government palette and type are not a standard. Fallback: R03.
- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The thresholds and their exceptions. Purpose: Supplies the measurable requirement the contrast table records against. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. A passing ratio is a floor, not proof of legibility. Fallback: R29.

## Lesson 3: The anatomy of one component

Stable ID: m13-l03-v1. Core. Areas 12. Optional effort ~120 min.

**Objective.** Specify one component completely: anatomy, variants, states, content rules, keyboard behaviour and when not to use it.

**Bring forward.** Your m08 component inventory and m09 key tables.

A component specification is what lets someone else build it correctly without asking you. That is the whole test.

### Learn

Naming the parts makes everything else possible. Once a component has a container, a label, an optional icon and a status area, a conversation about it stops being gestural and becomes precise: “the status area wraps when the label runs long” is actionable, and “the card looks broken sometimes” is not.

Variants and states get confused constantly. A variant is a deliberate difference you chose — primary, secondary, quiet — while a state is a situation the component finds itself in: focused, loading, disabled, error. Every variant can enter every applicable state, which is what makes the specification a grid rather than a list, and which is where most gaps are found.

Content rules are what keep a component alive in production. Minimum and maximum lengths, what happens when the label wraps or truncates, whether an icon is optional, what a missing value shows — all of these were discovered in your m08 dense-data lesson, and writing them down here prevents rediscovering them per screen.

The when-not-to-use section is the mark of a specification written by someone who has watched a component be misused. It is also the cheapest governance available: a rule that says “not for navigation; use a link” prevents an entire category of future misuse without a single meeting.

**Common misconception.** “The component is the visual design.” The visual design is one part. The specification that makes it reusable is the anatomy, the state grid, the content rules and the boundaries — and those are what an engineer needs and a designer forgets.

### Worked example

The class card was specified. Anatomy: container, image slot (optional), title, meta row, status area, action. Variants: default, compact, unavailable. States for each: default, hover, focus, loading, error. Content rules: title truncates to two lines keeping the beginning, meta row wraps rather than truncating, status area always shows text as well as colour, image slot may be absent without changing layout height. Keyboard: the whole card is not a target — the title is the link and the action is a button, matching the m09 tables. When not to use: not for a single featured item, where a dedicated layout reads better; not as a navigation element.

#### The anatomy of one component

Specify one component completely: anatomy, variants, states, content rules, keyboard behaviour and when not to use it.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A Markdown page with a table for the state grid, plus screenshots or drawings of the variants. Building the component in HTML and CSS makes the states demonstrable and costs an evening.

- Starting material: Your inventory and key tables.
- Create HaruCourse/Practice/m13-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Name the parts

- Read the assigned component page for a comparable component.
- Name every part of your component, marking optional ones.

**You should end up with:** One component chosen with a reason, and every part named with the optional ones marked.

Worksheet fields for this step:

- Which component you are specifying, and why this one — The one that appears most often, or the one an engineer has asked you about.
- Every part, with the optional ones marked

<details>
<summary>Help with this step</summary>

- **Anatomy:** The named parts of a component. Naming them is what lets two people talk about the same thing without pointing at a screen.
- **Optional part:** Something that may be absent. Marking it forces the question of what the layout does without it, which is where most components break.

Stuck starting? Draw the component and label every part, including the container itself.

Is it enough? Somebody could refer to any part of it by name in a sentence you would understand.

</details>

#### 2. Build the grid

**See it first.** Made-up example. Specifying a tool card, and putting a state in the variant column.

- **What I listed as variants:** Default, compact, unavailable, loading and error. Five variants, which felt thorough.
- **What went wrong when it was built:** The engineer asked what the compact card looks like while loading. My list had no answer, because loading was sitting beside compact rather than crossing it.
- **The distinction I had missed:** Compact is a decision I make when I place the card. Loading is a situation the card is in for two seconds. One is chosen at design time, the other at run time.
- **What the grid became:** Three variants down the side — default, compact, unavailable — and five states across the top. Fifteen cells, of which twelve needed deciding and three could not occur.
- **The three that could not occur:** An unavailable card has no hover treatment, because there is nothing to press. I marked those cells rather than leaving them blank, so nobody has to ask whether I forgot.

**The wrong turn:** The wrong turn is listing states as variants, because in a design file they all look like different versions of the card. The grid is what exposes it: a list has no second axis for the question to appear on.

**What it costs:** Fifteen cells is more work than five, and eight of them are nearly identical. The four that are not are the ones somebody would otherwise have had to ask about.

**Still unknown:** Still unknown: whether the compact variant needs an error state at all, since nothing in it can fail independently. I decided the cell anyway rather than leaving it open.

- List variants down one axis and states across the other.
- Decide every applicable cell, marking the ones that cannot occur.

**You should end up with:** Variants and states separated, with every applicable cell of the grid decided and the impossible ones marked.

Worksheet fields for this step:

- The variants, and what makes each one a deliberate difference — A variant is a decision. A state is a situation the same variant enters.
- Every variant against every state, with the cells that cannot occur marked

<details>
<summary>Help with this step</summary>

- **Variant:** A deliberate difference you decided: compact, unavailable, featured. It is chosen at design time.
- **State:** A situation the same variant enters: hover, focus, loading, error. It is entered at run time.
- **Impossible cell:** A combination that cannot happen. Marking it is a decision; leaving it blank looks like an oversight.

Stuck starting? Draw the grid before filling anything in: variants down, states across.

Is it enough? No cell is blank. Every one is either decided or marked as impossible.

</details>

#### 3. Write content rules

- Specify behaviour for long, short, missing and unusual values.
- State the truncation rule and what it preserves.

**You should end up with:** Content rules covering long values, missing optional parts, and a truncation rule that says what it preserves.

**Try it with help.** Six lines from a made up tool card specification. For each one, decide whether an engineer could build it without asking you.

- The title truncates to two lines, keeping the beginning, because the beginning distinguishes one tool from another.
  - **buildable as written** — How many lines, which end survives, and why. Nothing is left to interpretation.
  - needs one question answered — The three things somebody would ask are all answered in the sentence.
  - not a specification at all — It is one of the more complete lines a specification can carry.
- The title should be an appropriate length for the card.
  - buildable as written — Appropriate is decided by whoever is building it, which means it is not decided.
  - needs one question answered — It needs the whole rule, not a clarification.
  - **not a specification at all** — It reads like a requirement and contains no decision. These lines are the ones that survive review because nobody can disagree with them.
- If the image is absent, the card keeps its full height and the text block is vertically centred.
  - **buildable as written** — The two things that matter about a missing optional part — the height and the arrangement — are both decided.
  - needs one question answered — Nothing is left open.
  - not a specification at all — It is exactly what a content rule should look like.
- The meta row wraps rather than truncating.
  - buildable as written — It says what happens and not how far. Three lines of meta on a compact card may be wrong, and nothing here says.
  - **needs one question answered** — Wrapping to a maximum of how many lines, and what happens after that. One question, quickly answered.
  - not a specification at all — It carries a real decision: wrap rather than truncate. It is simply incomplete.
- The status area shows the status.
  - buildable as written — It names the part and restates its name. Nothing about what it shows, in what words, or how.
  - needs one question answered — It needs all of them: the wording, whether colour is involved, and what happens when the status is unknown.
  - **not a specification at all** — A part described by its own name is the commonest empty line in a component specification.
- The whole card is not a target. The title is the link and the action is a button, matching the Module 9 key table.
  - **buildable as written** — It says what is interactive, what each thing is, and where the behaviour is specified. An engineer can build it and check it.
  - needs one question answered — The reference to the key table answers the questions about keys.
  - not a specification at all — It is a decision with consequences, which is what a specification is made of.

**Then:** Now read your own content rules the same way, and rewrite anything in the second or third group.

**What to watch for:** The empty lines have a shape: they name a part and then restate its name, or they use a word like appropriate that puts the decision back on the reader. Both survive review because there is nothing in them to disagree with.

Worksheet fields for this step:

- What happens with a value far longer than you designed for
- What happens when an optional part is absent — Does the layout keep its height, collapse, or rearrange? Decide it here rather than per screen.
- The truncation rule, and what it preserves

<details>
<summary>Help with this step</summary>

- **Content rule:** What the component does with text it was not designed for. Real content is longer, shorter and stranger than the content in your design file.
- **Truncation:** Cutting text that does not fit. The rule has to say what is preserved, because the beginning and the end carry different information.

Stuck starting? Find the longest real title in your data and put it into the component.

Is it enough? No content rule uses the words appropriate, reasonable or sensible.

</details>

#### 4. Add behaviour and boundaries

- Bring the keyboard behaviour from your m09 table.
- Write when not to use this component and what to use instead.

**You should end up with:** Keyboard behaviour brought from your Module 9 table, and a when-not-to-use section naming what to use instead.

Worksheet fields for this step:

- The keyboard behaviour, brought from your Module 9 table
- When not to use this component, and what to use instead — This is the section that stops a component being applied to things it was never for.

<details>
<summary>Help with this step</summary>

- **When not to use:** The section that stops a component being applied to something it was never for. Without it, every component eventually becomes every component.
- **What to use instead:** The other half of the boundary. A prohibition with no alternative gets ignored, because somebody still has to build the screen.

Stuck starting? Copy the keyboard rows from your Module 9 table rather than writing them again.

Is it enough? Each prohibition names an alternative.

</details>

#### 5. Test the specification

**See it first.** Made-up example. Testing a tool card specification, and defending it instead of testing it.

- **What I did:** Sent the specification and sat with the person while they read it, which seemed helpful.
- **What happened:** They asked what the compact card does with a long title. I answered in four seconds, they nodded, and we both moved on.
- **What that cost:** The question was a hole in the document, and it had just been filled by my being in the room. Nothing changed in the specification, and I had forgotten the question by the afternoon.
- **What I did the second time:** Sent it and said I would answer everything at the end. Five questions arrived, written down, and I answered all five afterwards.
- **What the five turned into:** Four sentences added to the specification, and one genuine ambiguity I had not noticed: whether the unavailable variant can also be compact. Nothing in the document said, and I had not decided.

**The wrong turn:** The wrong turn is answering questions as they arrive, because being helpful is the natural thing to do and it destroys the result. The questions are the finding, and answering them in the room deletes the evidence.

**What it costs:** Refusing to answer for twenty minutes feels obstructive, and the person reading it works more slowly than they would have with you narrating.

**Still unknown:** Still unknown: how many holes remain that this reader happened not to hit. One reader finds the holes one reader finds.

- Give it to someone and ask what they would build.
- Record every question they had to ask you.
- Save the specification and the questions.

**You should end up with:** The specification given to somebody, or built from cold by you, with every question they had to ask recorded.

Worksheet fields for this step:

- Who you gave it to, or how you tested it alone — If nobody is available, leave it a day and build from it yourself without looking at the screens. Write that here.
- Every question they had to ask you — Each question is a hole in the specification. That is the whole result of this step.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Testing a specification:** Giving it to somebody and asking what they would build. Every question they ask is a hole, and the questions are the result.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Hand it over without explaining anything, and write down every question rather than answering it immediately.

Is it enough? The questions are recorded as holes in the document rather than as things you explained away.

</details>

**Save and continue.** Saved for you: The anatomy, the grid, the content rules, the behaviour and the questions save as you type, on this device first and then online. Kept outside the app: Drawings or screenshots of the variants stay in your own folder beside the specification. The specification itself is Markdown with a table for the grid. What your creator sees: Your creator reads the questions from step 5. A specification that produced no questions usually was not tested rather than being complete. Your next action: Open Your work and choose Ready for review. The next lesson builds this component and finds out which of its states actually exist.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Draw the component and label each region; mark anything that may be absent.

</details>

<details>
<summary>Hint 2</summary>

Draw the grid and fill every cell; the empty ones are the work.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: The anatomy of one component.
Task: Specify one component completely: anatomy, variants, states, content rules, keyboard behaviour and when not to use it.
Challenge one thing at a time, and start with the mistake this lesson is about: “The component is the visual design.” The visual design is one part. The specification that makes it reusable is the anatomy, the state grid, the content rules and the boundaries — and those are what an engineer needs and a designer forgets.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the anatomy and ask whether anatomy names every part including optional ones. Look at the completed grid and ask whether the variant-by-state grid is complete. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m13-l03-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Anatomy names every part including optional ones: A labelled diagram or list of parts with optionality marked. The variant-by-state grid is complete: A grid with every applicable cell decided and impossible cells marked. Content rules cover long, missing and unusual values: Rules for truncation, wrapping, absence and edge values. Keyboard behaviour and boundaries are specified: Key behaviour from the m09 table plus a when-not-to-use section.

**Bring forward:** One completely specified component is stronger evidence than a screen of many; it shows the level of thinking you bring to reusable work. Module handoff: Prepare delivery in m14


### Practice and pause points

- Name the parts (~25 min): Read the assigned component page for a comparable component. Name every part of your component, marking optional ones.
- Build the grid (~30 min): List variants down one axis and states across the other. Decide every applicable cell, marking the ones that cannot occur.
- Write content rules (~25 min): Specify behaviour for long, short, missing and unusual values. State the truncation rule and what it preserves.
- Add behaviour and boundaries (~25 min): Bring the keyboard behaviour from your m09 table. Write when not to use this component and what to use instead.
- Test the specification (~15 min): Give it to someone and ask what they would build. Record every question they had to ask you. Save the specification and the questions.

Pause after any step; save the artifact and next action.

**Free tool path.** A Markdown page with a table for the state grid, plus screenshots or drawings of the variants. Building the component in HTML and CSS makes the states demonstrable and costs an evening.

### Output

Named anatomy for one component; A variant-by-state grid with every cell decided; Content rules covering long, missing and unusual values; Keyboard behaviour and a when-not-to-use section

### Checks

- What is the difference between a variant and a state? Answer: A variant is a deliberate difference you designed; a state is a situation the component enters. Every variant can enter its applicable states, which is why the specification is a grid.
- Why do content rules matter so much? Answer: Because real text is longer, shorter and stranger than the example. Without rules, every screen rediscovers the same truncation and wrapping problems.
- What does a when-not-to-use section prevent? Answer: Misapplication, which is the commonest way a good component damages a product. It is governance that costs one sentence.

### Rubric and remediation

**Anatomy names every part including optional ones**

Adequate evidence: A labelled diagram or list of parts with optionality marked.

- 0 — No anatomy.
- 1 — Parts named without optionality.
- 2 — All parts named with optional ones marked.
- 3 — As adequate, and the naming is reused consistently in the rest of the specification.

If below 2: Draw the component and label each region; mark anything that may be absent. Show at recheck: The anatomy.

**The variant-by-state grid is complete**

Adequate evidence: A grid with every applicable cell decided and impossible cells marked.

- 0 — Variants listed without states.
- 1 — A partial grid.
- 2 — Complete grid with impossible combinations marked.
- 3 — As adequate, and one gap found by the grid is recorded as a design decision.

If below 2: Draw the grid and fill every cell; the empty ones are the work. Show at recheck: The completed grid.

**Content rules cover long, missing and unusual values**

Adequate evidence: Rules for truncation, wrapping, absence and edge values.

- 0 — No content rules.
- 1 — Length limits without behaviour.
- 2 — Behaviour specified for each case.
- 3 — As adequate, and the truncation rule preserves the distinguishing part of the value.

If below 2: Take your worst real content and write what the component does with each case. Show at recheck: The content rules.

**Keyboard behaviour and boundaries are specified**

Adequate evidence: Key behaviour from the m09 table plus a when-not-to-use section.

- 0 — Neither specified.
- 1 — One of the two.
- 2 — Both specified with alternatives named.
- 3 — As adequate, and the boundary section cites a real misuse you have seen.

If below 2: Copy the key table into the specification and write two sentences on when to use something else. Show at recheck: The behaviour and boundary sections.

### Portfolio contribution

One completely specified component is stronger evidence than a screen of many; it shows the level of thinking you bring to reusable work.

### Assigned resources

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — One comparable component, read for anatomy, variants, states, content rules and when not to use it. Purpose: Supplies the structure of a complete specification. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Take the specification structure, not the visual design or the government brand. Fallback: R06.
- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — The pattern matching your component, read for its keyboard interaction. Purpose: Ensures the specification's key behaviour matches established expectations. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06; pages carry no date. Semantics and keys only; guidance rather than a conformance standard. Fallback: R14.

## Lesson 4: Build it, and prove the states exist

Stable ID: m13-l04-v1. Core. Areas 12. Optional effort ~120 min.

**Objective.** Build your specified component in HTML and CSS with every state demonstrable, and publish a page showing all of them at once.

**Bring forward.** Your component specification and m12 build skills.

A specified state that has never been rendered is a guess. Building the grid is what turns the specification into a system.

### Learn

Building from tokens is what keeps the component consistent with everything else, and it is the moment your foundations get tested: a component that needs a value the foundations do not have has found either a missing role or an unnecessary variation, exactly as in m08.

A demonstrable state is one you can show without simulating a server or waiting for an error. Building a page where every state is rendered side by side — every variant against every state — is unglamorous and repays itself constantly: in review, in handover, in testing, and in noticing that two states look identical.

The awkward content case belongs in that page. Show the long title, the missing image and the unusual number beside the tidy versions, because those are the ones that break and the ones people forget to check when they change something.

Difficulty is information. A state that is awkward to build often indicates a specification problem: two states that need to be visible simultaneously, a variant that is really a different component, or content rules that contradict each other. Record the difficulty rather than working around it silently.

**Common misconception.** “The states can be added when they are needed.” They are needed on the first screen that uses the component under real conditions, and adding them later means retrofitting them into a design that assumed they did not exist.

### Worked example

The class card was built in about eighty lines, every value from a token. The states page shows three variants against five states, plus three content cases: a very long title, a missing image and a class with one place left. Building revealed two specification problems. The loading and unavailable states looked nearly identical in greyscale and needed a second distinguishing signal. And the compact variant could not accommodate the status text at all, which meant it was either a different component or the status rule needed changing — recorded as an open decision rather than patched.

#### Build it, and prove the states exist

Build your specified component in HTML and CSS with every state demonstrable, and publish a page showing all of them at once.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A text editor and a browser, using your token custom properties from m12. The states page is one HTML file; no framework, build step or documentation tool is required.

- Starting material: Your component specification and a text editor.
- Create HaruCourse/Practice/m13-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Build the default

- Build the component using only token values.
- Record any value you needed that the foundations do not have.

**You should end up with:** The component built from token values only, with any value the foundations do not have written down rather than added.

Worksheet fields for this step:

- Where the component and its states page live — One HTML file and your existing stylesheet, in your own folder. No framework or build step.
- How you kept every value coming from a token
- Any value you needed that the foundations do not have — Do not quietly add it. Write it here and decide in step 5 whether the foundations or the component is wrong.

<details>
<summary>Help with this step</summary>

- **Built from tokens:** Every colour, size and space coming from a named foundation value rather than being typed in. It is what makes one change reach everything.
- **Missing token:** A value the component needs that the foundations do not offer. It is a finding about one of the two, and it should not be resolved by quietly typing a number.

Stuck starting? Open your foundations page beside the editor and refer to it rather than to the design file.

Is it enough? No raw value appears in the component, and anything you were tempted to type is written down instead.

</details>

#### 2. Build the states

**See it first.** Made-up example. Building the states of a tool card, and treating a difficult state as a coding problem.

- **What was difficult:** The loading state on the compact variant. I spent an hour on it and every version either changed the card’s height or lost the status line.
- **What I assumed:** That I was not good enough at CSS yet. It was my second week of building and that assumption was comfortable.
- **What was actually wrong:** The compact variant has no room for the status text at all. The loading state has to reserve that room, and the variant’s whole reason for existing is not having it.
- **What that meant:** Either the compact card is a different component, or the status rule is wrong. Both are design decisions, and neither is fixable in CSS.
- **What I recorded:** The hour as a finding rather than a failure, and the question as an open decision for the variant lesson rather than something patched at three in the afternoon.

**The wrong turn:** The wrong turn is treating a state that will not build as a problem with your skill, because early on that is always plausible. A state that fights the markup is usually a specification saying two incompatible things.

**What it costs:** Stopping to record it leaves a visibly incomplete states page, and somebody looking at it will assume you ran out of time.

**Still unknown:** Still unknown: whether the compact variant should exist at all. It was added because a screen felt cramped, which is a weaker reason than I thought when I wrote it.

- Add each state from the grid so it can be shown on demand.
- Include focus, loading, disabled and error where applicable.

**You should end up with:** Every state from the grid built so it can be shown on demand, with any that were hard to build noted.

Worksheet fields for this step:

- Which states you built, and how each one can be shown on demand — Showable on demand means a class you can add, or a copy of the markup on the page. Not something that only appears if the network is slow.
- Any state that was hard to build, and what that suggested about the specification

<details>
<summary>Help with this step</summary>

- **Demonstrable on demand:** You can make the state appear whenever you want, usually by adding a class. A state that only shows up when the network is slow cannot be reviewed.
- **Hard to build:** A signal, not an obstacle. A state that fights the markup usually means the specification asked for something the component is not shaped for.

Stuck starting? Build the state you are least sure about first, before the easy ones.

Is it enough? Every state can be shown by you, deliberately, in a second.

</details>

#### 3. Make the states page

**See it first.** Made-up example. Building the states page for a tool-library system, and building it for somebody who already knew.

- **What I made:** A grid of fifteen cards, three rows and five columns, laid out neatly with no text on it anywhere.
- **Why it looked fine to me:** I knew the order. Row two was compact, column four was loading, and I could read the page as a table because I had drawn the table.
- **What happened when somebody else opened it:** They asked which one was the error state. Two of the columns look very similar until you know what you are looking at, and the page offered nothing to look it up with.
- **What I added:** The variant and the state named above every cell. Thirty small labels, ten minutes, and the page stopped needing me beside it.
- **What else the labels caught:** Writing them out showed that two cells were the same markup pasted twice. One state had never actually been built and I had not noticed while the page was unlabelled.

**The wrong turn:** The wrong turn is laying out a states page as a grid whose meaning comes from its position, because that reads perfectly to the person who built it. Everyone else sees a collection of similar cards.

**What it costs:** Thirty labels make the page busier and less attractive to show. It is a reference rather than a portfolio image, and a reference has to be readable alone.

**Still unknown:** Still unknown: whether anybody will use this page in a month. It exists, and whether it is consulted is something the documentation lesson tests rather than this one.

- Render every variant against every state on one page.
- Label each cell so the page is readable without explanation.

**You should end up with:** One page showing every variant against every state, with each cell labelled so it reads without explanation.

Worksheet fields for this step:

- How the page is laid out, and how each cell is labelled
- What somebody would understand from it without you explaining anything

<details>
<summary>Help with this step</summary>

- **States page:** One page holding every combination at once. It is the most useful artefact a design system produces, because it is checkable in one look.
- **Labelled cell:** The variant and the state named beside each example. Without labels the page is a mood board.

Stuck starting? Copy the markup once per cell rather than trying to build something clever that generates them.

Is it enough? Somebody could find the cell they need without asking you which is which.

</details>

#### 4. Add the awkward content

- Render the long title, the missing value and the edge case.
- Check the content rules hold.

**You should end up with:** Three awkward content cases rendered, with which content rules held and which did not.

**Try it with help.** Six things found while building a made up tool card. For each one, decide what kind of problem it is.

- A title of eleven words pushes the action out of the card, and the specification says nothing about how long a title may be.
  - a build problem — You can make it stop overflowing in a minute. What you cannot decide in a minute is which end of the title survives.
  - **a specification problem** — The content rule is missing. Fixing it in CSS chooses an answer silently, and the next person builds a different one.
  - a foundations problem — Nothing about spacing or type is at fault.
- The loading and unavailable states are indistinguishable in greyscale.
  - a build problem — Both were built exactly as specified.
  - **a specification problem** — The specification gave two states one distinguishing signal, and it was colour. A second signal has to be decided rather than picked in the editor.
  - a foundations problem — The foundations already forbid colour-only meaning, which is how this was caught. The component broke the rule.
- The card needs a 6 pixel gap, and the spacing scale offers 4 and 8.
  - a build problem — Typing 6 makes it look right and puts a raw value in a component built from tokens.
  - a specification problem — The specification did not name a number, and it was not supposed to.
  - **a foundations problem** — Either 4 or 8 works and nobody can tell, or the scale genuinely lacks a step. Both answers belong on the foundations page rather than in the card.
- The focus ring is clipped by the card’s edge because the container hides overflow.
  - **a build problem** — The specification asks for a visible focus ring and the markup is cutting it off. This one really is a coding fix.
  - a specification problem — The specification is right; the build does not do what it says.
  - a foundations problem — The ring value came from the foundations and is fine.
- The compact variant has no room for the status text, which every card is required to show.
  - a build problem — No amount of building creates room that the variant exists in order not to have.
  - **a specification problem** — Two rules contradict each other: compact means less, and status is always shown. One of them has to change, and it is a decision.
  - a foundations problem — Nothing in the foundations is involved.
- With no image the card collapses to half height, and the specification says the height is kept.
  - **a build problem** — The rule exists, is clear, and is not implemented. Straightforward to fix.
  - a specification problem — The specification already decided this one, which is what makes it a build problem rather than a question.
  - a foundations problem — No foundation value is involved.

**Then:** Now sort your own findings the same way, and let the specification problems go into step 5 rather than being patched here.

**What to watch for:** The useful habit is asking who can fix it. A build problem you fix now; a specification problem is a decision, and fixing it in the editor makes the decision silently; a foundations problem affects everything else built on it.

Worksheet fields for this step:

- The three awkward cases you rendered, and what happened
- Which content rules held, and which did not

<details>
<summary>Help with this step</summary>

- **Awkward content:** The long title, the missing value, the edge case. Components survive tidy content and break on real content, so tidy content proves nothing.

Stuck starting? Find the longest real title in your data and paste it in before you look at anything else.

Is it enough? Each awkward case is rendered on the page rather than described.

</details>

#### 5. Record what the build revealed

- List the specification problems you found.
- Check the states in greyscale and by keyboard.
- Save the component, the page and the problem list.

**You should end up with:** The specification problems the build revealed, plus greyscale and keyboard checks run on the states page.

Worksheet fields for this step:

- Every specification problem the build found
- What the greyscale and keyboard checks showed on the states page — A states page is the easiest place in the whole system to run both, because everything is visible at once.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **What the build reveals:** Contradictions a document can hold quite comfortably and a browser cannot. Every one is a finding about the specification.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Turn on greyscale with the whole states page open, and look across the rows rather than down them.

Is it enough? The specification problems are written as open decisions rather than as things you patched.

</details>

**Save and continue.** Saved for you: Your build notes, the states, the page layout, the awkward cases and the specification problems save as you type, on this device first and then online. Kept outside the app: The component, the stylesheet and the states page stay in your own folder. The states page is the artefact to keep; later lessons and your portfolio both use it. What your creator sees: Your creator reads the specification problems and the hard-to-build note. A build that revealed nothing usually means the specification was too vague to contradict. Your next action: Open Your work and choose Ready for review. The next lesson settles whether the compact card is a variant at all.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Search the component's styles for literal values and replace or record each one.

</details>

<details>
<summary>Hint 2</summary>

Build the missing states and put them all on one page with labels.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Build it, and prove the states exist.
Task: Build your specified component in HTML and CSS with every state demonstrable, and publish a page showing all of them at once.
Challenge one thing at a time, and start with the mistake this lesson is about: “The states can be added when they are needed.” They are needed on the first screen that uses the component under real conditions, and adding them later means retrofitting them into a design that assumed they did not exist.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the component source and ask whether the component is built entirely from tokens. Look at the states page and ask whether every state is demonstrable on one page. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m13-l04-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The component is built entirely from tokens: Source using custom properties throughout, with any exception recorded. Every state is demonstrable on one page: A states page rendering every applicable variant-state combination, labelled. Awkward content cases are rendered: Long, missing and edge-case content shown beside the tidy versions. Specification problems found are recorded: A list of contradictions, gaps or ambiguities surfaced by building.

**Bring forward:** A states page is the single most useful design-system artefact to show: it is checkable, complete and immediately understandable. Module handoff: Prepare delivery in m14


### Practice and pause points

- Build the default (~30 min): Build the component using only token values. Record any value you needed that the foundations do not have.
- Build the states (~30 min): Add each state from the grid so it can be shown on demand. Include focus, loading, disabled and error where applicable.
- Make the states page (~25 min): Render every variant against every state on one page. Label each cell so the page is readable without explanation.
- Add the awkward content (~20 min): Render the long title, the missing value and the edge case. Check the content rules hold.
- Record what the build revealed (~15 min): List the specification problems you found. Check the states in greyscale and by keyboard. Save the component, the page and the problem list.

Pause after any step; save the artifact and next action.

**Free tool path.** A text editor and a browser, using your token custom properties from m12. The states page is one HTML file; no framework, build step or documentation tool is required.

### Output

The component built from tokens; A page showing every variant against every state; Three awkward content cases rendered; A list of specification problems the build revealed

### Checks

- Why build a page showing every state at once? Answer: Because it makes the whole grid checkable in one glance, catches states that look identical, and gives review, handover and testing a single artefact.
- What does a value missing from your foundations tell you? Answer: Either the foundations lack a real role, or the component is asking for an unnecessary variation. Both need a decision rather than a one-off value.
- What does a hard-to-build state usually mean? Answer: That the specification has a problem: contradictory rules, two states needing to coexist, or a variant that is really a separate component.

### Rubric and remediation

**The component is built entirely from tokens**

Adequate evidence: Source using custom properties throughout, with any exception recorded.

- 0 — Raw values used.
- 1 — Mostly tokens with untracked exceptions.
- 2 — Tokens throughout, exceptions recorded and resolved.
- 3 — As adequate, and a missing foundation role was added deliberately.

If below 2: Search the component's styles for literal values and replace or record each one. Show at recheck: The component source.

**Every state is demonstrable on one page**

Adequate evidence: A states page rendering every applicable variant-state combination, labelled.

- 0 — Only the default state built.
- 1 — Some states built, not collected on one page.
- 2 — All states on one labelled page.
- 3 — As adequate, and states that look alike are identified and differentiated.

If below 2: Build the missing states and put them all on one page with labels. Show at recheck: The states page.

**Awkward content cases are rendered**

Adequate evidence: Long, missing and edge-case content shown beside the tidy versions.

- 0 — Tidy content only.
- 1 — One awkward case.
- 2 — Three cases rendered with content rules verified.
- 3 — As adequate, and a content rule was corrected because of what rendering showed.

If below 2: Add your worst real values to the states page and check the rules hold. Show at recheck: The content cases.

**Specification problems found are recorded**

Adequate evidence: A list of contradictions, gaps or ambiguities surfaced by building.

- 0 — Problems worked around silently.
- 1 — Noticed but not recorded.
- 2 — Recorded with the decision or the open question.
- 3 — As adequate, and one problem is left open rather than patched.

If below 2: Write down every moment the build did not match the specification. Show at recheck: The problem list.

### Portfolio contribution

A states page is the single most useful design-system artefact to show: it is checkable, complete and immediately understandable.

### Assigned resources

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The CSS sections you need for states: pseudo-classes, custom properties and layout. Purpose: Supplies the implementation for the state grid. Effort: 60 selected min. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.
- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — The same comparable component, read for how its states are presented and documented. Purpose: Shows how a published system demonstrates states rather than describing them. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Take the presentation approach, not the visual design. Fallback: R06.

## Lesson 5: Variant, or a different component?

Stable ID: m13-l05-v1. Core. Areas 12. Optional effort ~120 min.

**Objective.** Decide for three borderline cases whether they are variants of an existing component or new components, using a written test you can reuse.

**Bring forward.** Your component inventory and the built component.

Every system eventually accumulates a component with eleven variants that nobody can hold in their head. The decision rule is what prevents it.

### Learn

The job is the test. A compact card and a default card do the same job — represent one item in a list — at different densities, so they are variants. A card that summarises a booking and a card that advertises a class look similar and do different jobs, and merging them produces a component whose rules contradict each other within a month.

Content rules are a reliable signal. If the candidate variant needs different truncation, a different required field or a different set of states, it is carrying a different job, and the shared component will accumulate conditional rules until nobody can predict its behaviour.

Counting is a useful discipline. Beyond four or five variants, the component is usually a family pretending to be one thing, and splitting it makes both halves simpler. The exception is a genuine dimension — size, for instance — where variants multiply legitimately and can be described by a rule rather than enumerated.

Writing the test once matters more than any individual decision. A rule you can apply — same job, same content rules, same states, fewer than five — settles future cases in a minute and produces a system whose shape someone else can predict.

**Common misconception.** “Reuse is always better.” Reusing a component for a different job creates a component with conditional behaviour, which is harder to maintain than two clear components and produces screens that behave inconsistently for reasons nobody can explain.

### Worked example

Three borderline cases were tested. The compact card: same job, same content rules, one fewer state — a variant. The booking summary: different job (a record of something you own, not an option to choose), different required fields, different actions — a separate component, despite looking almost identical. The promotional card: different job again, and its own content rules — separate, and marked out of scope entirely, since marketing surfaces were excluded in lesson 1. The test was written down and applied to two further cases the following week without re-argument.

#### Variant, or a different component?

Decide for three borderline cases whether they are variants of an existing component or new components, using a written test you can reuse.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written decisions plus your existing inventory. Nothing new is built here.

- Starting material: Your inventory and one built component.
- Create HaruCourse/Practice/m13-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Write the test

- Write the questions that decide variant or component: job, content rules, states, count.
- Make each answerable in a sentence.

**You should end up with:** Four questions written down that decide variant or component, each answerable in a sentence.

Worksheet fields for this step:

- The question about the job it does
- The question about content rules
- The question about states
- The question about how many variants there already are — Beyond about four, the abstraction is usually wrong and you are holding two components in one.

<details>
<summary>Help with this step</summary>

- **Variant:** The same job, done with different emphasis or density. A compact card is still offering you something to choose.
- **Separate component:** A different job, however similar it looks. A record of something you already own is not an option to choose, whatever the shape of the box.

Stuck starting? Write the job question first. It settles most cases on its own.

Is it enough? Each question can be answered yes or no about a real item, without discussion.

</details>

#### 2. Apply it to three cases

**See it first.** Made-up example. Deciding whether a booking summary is a variant of the tool card, and deciding by looking.

- **What I saw:** A box with an image, a title, a meta row and an action. Beside the tool card, the two were almost indistinguishable.
- **What I decided:** A variant. It would have meant one more entry in the grid and no new documentation, which was the answer I wanted.
- **What the job question found:** The tool card offers you something to choose. The booking summary is a record of something you already have. The reader is doing two different things.
- **What followed from that:** Different required fields, because a booking has a collection time and a reference. Different actions: Reserve against Cancel. Different states: a booking can be overdue and a tool cannot.
- **What reuse would have produced:** One component with conditional behaviour, where half the fields are hidden depending on context, and two screens that behave differently for reasons nobody could explain a month later.

**The wrong turn:** The wrong turn is deciding by how similar they look, because in a design file that is the most visible fact about them. Similar appearance is what a shared foundation produces, and it says nothing about the job.

**What it costs:** Two components mean two specifications, two documentation pages and two things to maintain, for boxes that look nearly the same. Somebody will ask why, and the answer is the job.

**Still unknown:** Still unknown: whether they will drift apart visually over time. If they do not, somebody will propose merging them again, and the test is what settles it without re-arguing.

- Take three borderline items from your inventory.
- Answer each question and record the decision.

**You should end up with:** Three borderline items decided by answering all four questions, not by how similar they look.

Worksheet fields for this step, revealed a few at a time in the app:

- Case 1 · the item, the four answers, and the decision
- Case 2 · the item, the four answers, and the decision
- Case 3 · the item, the four answers, and the decision

<details>
<summary>Help with this step</summary>

- **The job:** What the reader is doing with it. Choosing between options, reading a record, being sold something: three different jobs that can look identical.
- **Conditional behaviour:** A component that behaves differently depending on where it is. It is what reuse-for-a-different-job produces, and it is harder to maintain than two clear components.

Stuck starting? For each case, write what the reader is doing with it before writing anything about how it looks.

Is it enough? Each decision rests on the answers rather than on how similar the two things are.

</details>

#### 3. Count the variants

**See it first.** Made-up example. Counting variants in a tool-library system, and counting the ones on the documentation page.

- **What I counted:** Three. Default, compact, unavailable, exactly as documented, comfortably under the limit I had set.
- **What made me look again:** A screen that looked unfamiliar. The card on it had no image and a tighter meta row, and it was not any of the three.
- **What I found in the stylesheet:** Four more. A card with the image hidden, one with reduced padding, one with the action moved, and one that existed only inside the search results. Each added on a screen, each perfectly reasonable at the time.
- **What the real count was:** Seven. Past the limit, and four of them undocumented, which is why nobody had noticed the system passing its own rule.
- **What I did:** Two of the four merged into the compact variant with a small change. Two were a different job and became the search result row, which is now its own component.

**The wrong turn:** The wrong turn is counting from the documentation, because the documentation is the record of variants somebody decided to write down. The stylesheet is the record of variants that exist.

**What it costs:** Counting from the code takes an afternoon and finds things you would rather not have found, in screens that are already shipped.

**Still unknown:** Still unknown: how many more are hiding in screens I did not open. I checked the eleven screens in the product and there may be others in prototypes.

- Count variants per component.
- Flag anything over four and check whether it is a family.

**You should end up with:** A variant count per component, with anything over four examined as a possible family.

Worksheet fields for this step:

- Variants per component
- Anything over four, and whether it is really a family of components

<details>
<summary>Help with this step</summary>

- **Variant count:** How many deliberate versions one component has. Beyond about four, nobody can hold them in their head and the abstraction is usually wrong.
- **Family:** Several related components sharing foundations rather than one component with many variants. It is often what an over-varied component really is.

Stuck starting? Count them from your inventory rather than from memory.

Is it enough? Anything over four has been looked at rather than noted.

</details>

#### 4. Split or merge

- Split one component that was carrying two jobs, or merge two that share one.
- Update the inventory and the specifications.

**You should end up with:** One component split or merged, with the inventory and the affected specifications updated.

**Try it with help.** Six pairs from a made up tool-library inventory. For each one, decide what the relationship is.

- The compact card: the same offer to choose a tool, with less room, one fewer state and the same content rules.
  - **a variant** — Same job, same rules, less density. This is what a variant is, and it needs no documentation of its own beyond a line.
  - a separate component — Nothing about the reader’s task changes, so a second specification would say the same things twice.
  - out of scope entirely — It is squarely inside the product.
- The booking summary: a record of a tool you already have, with a reference, a collection time and a Cancel action.
  - a variant — It looks almost identical, which is the trap. The reader is reading a record rather than choosing an option.
  - **a separate component** — Different job, different required fields, different actions, and a state a tool card cannot have. Two clear components beat one with conditions.
  - out of scope entirely — It is part of the product and needs documenting.
- A promotional card advertising a membership offer on the marketing pages.
  - a variant — Its job is to sell rather than to help somebody borrow a drill.
  - a separate component — It would be, if the system covered marketing surfaces. Lesson 1 excluded them.
  - **out of scope entirely** — The boundary you wrote is doing its job. Letting this in is how a system acquires the maintenance that eventually stops it being maintained.
- A large card used once, on the home page, for the tool of the month.
  - a variant — A variant used once costs maintenance for ever and saves nothing, because it is never reused.
  - a separate component — Same objection: a component of one is a screen.
  - **out of scope entirely** — One-off components were excluded in lesson 1. Build it on the screen and leave it there.
- The unavailable card: the same tool, presented as not currently borrowable, with the action replaced by a waiting-list link.
  - **a variant** — The reader is still choosing between tools; this one happens not to be available. Same job, same content rules.
  - a separate component — The differences are all within the same task, which is what keeps it a variant.
  - out of scope entirely — It is a core case rather than an edge one.
- A search result row: the same tool, one line, no image, used in a list of thirty.
  - a variant — It is tempting, because it is the same subject. It has different content rules, no image slot and no states in common beyond focus.
  - **a separate component** — Scanning thirty rows is a different job from comparing three cards, and it would be the fourth or fifth variant of the card as well.
  - out of scope entirely — It is used constantly and belongs in the system.

**Then:** Now apply your own four questions to your three cases and record the answers rather than the impressions.

**What to watch for:** Two different traps. The booking summary is a separate component that looks like a variant; the featured card is a variant that should not exist at all. Similar appearance pulls things together, and being used once pulls things in.

Worksheet fields for this step:

- What you split or merged, and what changed in the inventory
- Which specifications you had to update

<details>
<summary>Help with this step</summary>

- **Splitting:** Turning one component carrying two jobs into two. It usually removes conditional behaviour and shortens both specifications.
- **Merging:** Combining two that genuinely share a job. It is rarer than splitting and worth doing when it happens.

Stuck starting? Take the component with the most variants and ask whether two of them are really doing the same job.

Is it enough? The inventory reflects the decision, not only your notes.

</details>

#### 5. Record

- Save the test where future cases will be decided.
- Record the case where you decided against reuse and why.

**You should end up with:** The test saved where the next case will be decided, and the case where you decided against reuse recorded with its reason.

Worksheet fields for this step:

- Where the test lives, so the next case is decided rather than argued
- The case where you decided against reuse, and why
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Deciding against reuse:** Choosing two components over one. It goes against the instinct that reuse is always better, so the reason has to be written down.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Put the test on the system’s own documentation page, not in your notes.

Is it enough? Somebody else could apply your test to a new case without you.

</details>

**Save and continue.** Saved for you: The test, the three cases, the counts and the split or merge save as you type, on this device first and then online. Kept outside the app: The inventory and specifications live with the system in your own folder. The test itself belongs on the system documentation page rather than in these notes. What your creator sees: Your creator reads the case you decided against reuse on. That is the one the instinct argues with, so it is the one that shows the test working. Your next action: Open Your work and choose Ready for review. The next lesson writes the documentation somebody will actually use.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write the questions you actually asked while deciding, then generalise them.

</details>

<details>
<summary>Hint 2</summary>

Take three cases and answer each question in writing before deciding.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Variant, or a different component?.
Task: Decide for three borderline cases whether they are variants of an existing component or new components, using a written test you can reuse.
Challenge one thing at a time, and start with the mistake this lesson is about: “Reuse is always better.” Reusing a component for a different job creates a component with conditional behaviour, which is harder to maintain than two clear components and produces screens that behave inconsistently for reasons nobody can explain.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the written test and ask whether A reusable test is written down. Look at the three decisions and ask whether three cases are decided by applying it. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m13-l05-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** A reusable test is written down: A short set of questions that would settle a future case. Three cases are decided by applying it: Three borderline cases with the questions answered and a decision each. Variant counts are checked against a limit: A count per component with anything above the limit examined. One decision against reuse is recorded: A case where you chose a separate component, with the reason.

**Bring forward:** A written decision rule with three applied cases shows judgement that scales, which is what systems work is assessed on. Module handoff: Prepare delivery in m14


### Practice and pause points

- Write the test (~25 min): Write the questions that decide variant or component: job, content rules, states, count. Make each answerable in a sentence.
- Apply it to three cases (~30 min): Take three borderline items from your inventory. Answer each question and record the decision.
- Count the variants (~25 min): Count variants per component. Flag anything over four and check whether it is a family.
- Split or merge (~25 min): Split one component that was carrying two jobs, or merge two that share one. Update the inventory and the specifications.
- Record (~15 min): Save the test where future cases will be decided. Record the case where you decided against reuse and why.

Pause after any step; save the artifact and next action.

**Free tool path.** Written decisions plus your existing inventory. Nothing new is built here.

### Output

A written variant-or-component test; Three borderline cases decided with the test applied; A variant count per component with anything over the limit flagged; One case decided against reuse, with the reason

### Checks

- What is the primary test? Answer: Whether the two things do the same job. Visual similarity is not the test; a booking record and a class option can look identical and behave differently.
- Why are differing content rules a signal to split? Answer: Because they accumulate as conditional behaviour inside one component, which becomes unpredictable and unmaintainable.
- Is reuse always the better answer? Answer: No. Reusing across different jobs creates conditional components and inconsistent screens. Two clear components are often cheaper than one clever one.

### Rubric and remediation

**A reusable test is written down**

Adequate evidence: A short set of questions that would settle a future case.

- 0 — Decisions made ad hoc.
- 1 — A rule stated too vaguely to apply.
- 2 — A test whose questions produce a decision.
- 3 — As adequate, and the test names what to do when the answers conflict.

If below 2: Write the questions you actually asked while deciding, then generalise them. Show at recheck: The written test.

**Three cases are decided by applying it**

Adequate evidence: Three borderline cases with the questions answered and a decision each.

- 0 — Cases decided by preference.
- 1 — Test applied loosely.
- 2 — Each case answered question by question.
- 3 — As adequate, and one decision contradicted your initial instinct.

If below 2: Take three cases and answer each question in writing before deciding. Show at recheck: The three decisions.

**Variant counts are checked against a limit**

Adequate evidence: A count per component with anything above the limit examined.

- 0 — Not counted.
- 1 — Counted without examining the large ones.
- 2 — Counted and the large ones examined for hidden families.
- 3 — As adequate, and one component was split as a result.

If below 2: Count the variants per component and look hard at anything above four. Show at recheck: The variant counts.

**One decision against reuse is recorded**

Adequate evidence: A case where you chose a separate component, with the reason.

- 0 — Everything reused.
- 1 — A split made without recorded reasoning.
- 2 — A separation decided with the reason recorded.
- 3 — As adequate, and the reason cites the conditional behaviour reuse would have created.

If below 2: Find the case where reuse would have required conditional rules, and record the split. Show at recheck: The recorded decision.

### Portfolio contribution

A written decision rule with three applied cases shows judgement that scales, which is what systems work is assessed on.

### Assigned resources

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — Two components with overlapping appearance, read for how their purposes are distinguished. Purpose: Shows a published system's boundaries between similar components. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. One organisation's decisions; your test is your own and should be written for your product. Fallback: R06.
- R11: [GOV.UK Design System: patterns](https://design-system.service.gov.uk/patterns/) — One pattern, read for how components combine rather than multiply. Purpose: Shows the alternative to adding variants: composing existing components. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Patterns for multi-step government tasks; take the composition idea, not the specific patterns. Fallback: R02.

## Lesson 6: Documentation someone will actually read

Stable ID: m13-l06-v1. Core. Areas 12. Optional effort ~120 min.

**Objective.** Write the documentation for two components so that a person can use them correctly without asking you, and test it by watching someone try.

**Bring forward.** Your component specifications and states pages.

Undocumented systems are systems that only work while you are available. The test is not whether it is written; it is whether it is used.

### Learn

People arrive at documentation with a task, not a curiosity. The first thing they need is whether this is the right component, which means the page opens with when to use it and when not to. Appearance and anatomy come after, because they matter only once the choice is made.

Design and code belong together. A designer looking at the specification and an engineer looking at the implementation should see one page, not two artefacts that drift apart. Even in a small system, keeping them together prevents the commonest system failure: documentation describing a component that no longer behaves that way.

Content rules are used by whoever writes the words, who is often neither the designer nor the engineer. Putting maximum lengths, truncation behaviour and tone guidance where they will look — with the component, not in a separate writing document — is what stops labels arriving that break the layout.

Testing documentation is the same discipline as testing a design. Give it to someone with a task, watch, and record every question they had to ask you. Each question is a defect in the page, and the fix is usually one sentence added where they were looking.

**Common misconception.** “The components are self-explanatory.” They are to you. Every question someone has to ask is a small tax, and in a system meant to save time, those taxes are the thing you were trying to remove.

### Worked example

The card and the button pages were rewritten. Each opens with when to use it, when not to, and the alternative. Then a live example with the code beside it, the anatomy, the state grid, the content rules — including maximum label length and truncation behaviour — and the keyboard behaviour. Two people were then asked to build a screen using them. Four questions came up: what happens with two actions, whether the compact variant may be used in a grid, what the maximum title length actually is, and whether the card is clickable as a whole. All four became sentences on the pages.

#### Documentation someone will actually read

Write the documentation for two components so that a person can use them correctly without asking you, and test it by watching someone try.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Markdown files beside your code, or one HTML page per component with the live example embedded. No documentation platform, account or static-site tool is required.

- Starting material: Two specified components.
- Create HaruCourse/Practice/m13-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Structure the page

- Read the assigned component pages for structure.
- Write when to use, when not to use, and the alternative.
- Place the example immediately after.

**You should end up with:** Both pages opening with when to use, when not to use and the alternative, with the example immediately after.

Worksheet fields for this step:

- For each of your two components: when to use it, when not to, and what to use instead — This goes first, before anything about appearance. It is the question people actually arrive with.
- What the first example shows, and where it sits on the page

<details>
<summary>Help with this step</summary>

- **When to use it:** The question every reader arrives with. Leading with appearance answers a question nobody asked and buries the one they did.
- **The alternative:** What to use instead when this component is wrong. A prohibition with no alternative gets ignored, because somebody still has to build the screen.

Stuck starting? Write the when-not-to-use line first. It is harder and it decides the rest of the page.

Is it enough? A reader could tell in fifteen seconds whether this is the component they need.

</details>

#### 2. Bring code and design together

- Embed the live component or its markup beside the specification.
- Include the state grid and anatomy on the same page.

**You should end up with:** The markup and the specification on one page, with the state grid and anatomy alongside.

Worksheet fields for this step:

- How the markup and the specification sit together on the page — A live example with its markup beside it. If the two live in different documents they will disagree within a month.
- How the state grid and anatomy appear on the same page

<details>
<summary>Help with this step</summary>

- **Live example:** The real component rendered on the documentation page, rather than a picture of it. It cannot go out of date the way a screenshot can.
- **One place:** Design and code in the same document. Split across two, they disagree within a month and nobody knows which is current.

Stuck starting? Embed the component itself rather than a screenshot, so the page cannot drift from the build.

Is it enough? Nothing on the page is a picture of something that exists elsewhere.

</details>

#### 3. Write for the content author

**See it first.** Made-up example. Documenting content rules for a tool-library card, and putting them where writers do not go.

- **What I wrote:** A content guidelines document. Tone of voice, capitalisation, how to write titles, maximum lengths per component. Eleven pages, and genuinely good.
- **What happened:** Titles kept arriving at fourteen words. I asked the person writing them whether they had read the guidelines, and they had, in March.
- **What they were actually doing:** Typing a title into a form while looking at a card. The guidelines were a separate document, in a different place, describing a situation rather than the one in front of them.
- **What I changed:** Moved the length rule, the truncation behaviour and one example onto the card’s own page, three lines under the live example.
- **What that changed:** Titles got shorter within a fortnight, and the eleven-page document became the place for the things that genuinely are general.

**The wrong turn:** The wrong turn is writing one good content document, because it is more coherent than scattering rules across components. Coherent for you, invisible for the person typing.

**What it costs:** The same rule now appears in two places, and they can drift. Keeping the component page authoritative and the document general is how that is managed rather than avoided.

**Still unknown:** Still unknown: whether the titles got shorter because of the placement or because I had just asked about them. A fortnight is not a measurement.

- Add maximum lengths, truncation behaviour and tone guidance.
- Put them with the component, not in a separate document.

**You should end up with:** Content guidance written for a writer, placed with the component rather than in a separate document.

Worksheet fields for this step:

- Maximum lengths, truncation behaviour and tone guidance, written for a writer
- Where you put it, and why there — With the component. A separate content document is a document nobody opens while building a screen.

<details>
<summary>Help with this step</summary>

- **Content author:** Whoever types the words that go into the component. They are not reading a design system; they are trying to write a title that fits.
- **Tone guidance:** How the words should sound in this component, with an example. Two words of guidance beside the field beat a page of principles elsewhere.

Stuck starting? Put the length and truncation rules three lines under the live example, where somebody typing will see them.

Is it enough? Nothing a writer needs is in a different document.

</details>

#### 4. Test the documentation

**See it first.** Made-up example. Testing tool-library documentation, and testing it on somebody who had helped write it.

- **Who I asked:** The person who had reviewed the component specification a fortnight earlier. They were available, interested and already familiar with it.
- **What happened:** They built the screen in twenty minutes with one question, and I concluded the pages were in good shape.
- **What was wrong with the test:** They knew the answers. Everything the page failed to say, they supplied from memory of our earlier conversation, and neither of us noticed.
- **What the second reader found:** Somebody who had never seen the component asked four questions in ten minutes, including whether the whole card is clickable, which the specification had settled and the documentation had never mentioned.
- **What I do now:** Ask somebody who was not involved. If nobody is available, leave the pages three days and build from them myself without opening the specification.

**The wrong turn:** The wrong turn is testing documentation on somebody who helped make the thing, because they are the easiest person to ask and the only one guaranteed to pass. Their knowledge fills exactly the holes you need to find.

**What it costs:** A reader who knows nothing is slower, asks things you consider obvious, and the session is less comfortable. That discomfort is the result.

**Still unknown:** Still unknown: whether four questions is a good or bad score. One reader finds one reader’s holes, and the number means little on its own.

- Ask someone to build a small screen using only the pages.
- Record every question they ask without answering immediately.

**You should end up with:** Somebody building a small screen from the pages alone, with every question recorded rather than answered.

**Try it with help.** Six questions a reader asked about a made up tool card documentation page. For each one, decide what it tells you.

- What happens if a card needs two actions?
  - a sentence is missing from the page — There is no sentence to add yet, because nobody has decided whether two actions are allowed.
  - the page says it and says it badly — The page does not address it at all.
  - **a decision nobody has made** — The most valuable kind of question. It has to be decided before it can be written, and it would have appeared on a screen instead.
- What is the maximum title length? The page says the title truncates to two lines.
  - a sentence is missing from the page — Something is there. It answers what happens when it is too long and not what too long is.
  - **the page says it and says it badly** — A writer needs a number of words to aim for, not the behaviour when they overshoot. Both belong on the page.
  - a decision nobody has made — The truncation decision exists; the guidance for the writer does not.
- May the compact variant be used in a grid?
  - **a sentence is missing from the page** — The answer exists and is not written down. One sentence in when-to-use closes it.
  - the page says it and says it badly — The page does not mention grids at all.
  - a decision nobody has made — You know the answer, which is what makes this the easy category.
- Is the whole card clickable, or just the title?
  - **a sentence is missing from the page** — The keyboard specification decided this. It has not reached the documentation page.
  - the page says it and says it badly — It is absent rather than unclear.
  - a decision nobody has made — It was made in the component specification. The gap is between two documents of yours.
- Should the title be sentence case or title case?
  - **a sentence is missing from the page** — If your foundations settle it, the card page needs a line pointing there. If they do not, it moves to the third category.
  - the page says it and says it badly — Nothing on the page addresses it.
  - a decision nobody has made — Possible, and most systems have settled case long before components.
- The unavailable card looks the same as the loading one to me. Which is which?
  - a sentence is missing from the page — A sentence explaining which is which does not fix two states that look alike.
  - the page says it and says it badly — The page is accurate. The component is the problem.
  - **a decision nobody has made** — The distinguishing signal has never been decided, which the build already suggested. A reader has now found it independently.

**Then:** Now sort your own reader’s questions the same way before fixing any of them.

**What to watch for:** Three different repairs hide behind one behaviour. Most questions are a missing sentence; some are a sentence that answers the wrong half; and a few are decisions nobody has made, which is the only group that cannot be fixed by writing.

Worksheet fields for this step:

- Who you asked and what small screen they built — If nobody is available, leave it three days and build a screen yourself from the pages alone. Write that here.
- Every question they asked, recorded rather than answered
- Any question you could not answer either — These are the most valuable ones. They are decisions nobody has made yet.

<details>
<summary>Help with this step</summary>

- **Testing documentation:** Watching somebody use it. Whether it is written is not the test; whether it is used without asking you is.
- **A question you cannot answer:** A decision nobody has made. It is the most valuable output of this step and the easiest to talk past.

Stuck starting? Hand over the pages and say you will answer everything at the end.

Is it enough? The questions are written down in their own words, not summarised into what you think they meant.

</details>

#### 5. Fix and record

- Turn each question into a sentence on the page.
- Note which questions you could not answer either.
- Save both pages and the question list.

**You should end up with:** Each question turned into a sentence on the page, and the repair the Check questions asked for.

Worksheet fields for this step:

- Each question, and the sentence you added to the page
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Turning a question into a sentence:** Adding the answer to the page rather than to the conversation. It is the only version that helps the next reader.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Take the questions in the order they were asked; that order is usually the order a reader meets the gaps.

Is it enough? Every answerable question is now on the page, and the unanswerable ones are recorded as open decisions.

</details>

**Save and continue.** Saved for you: Your page structure, the content guidance, the reader’s questions and the fixes save as you type, on this device first and then online. Kept outside the app: The documentation pages live beside the components in your own folder, as Markdown or as HTML with the live example embedded. No documentation platform is needed. What your creator sees: Your creator reads the questions your reader asked and which of them you could not answer. A documentation test that produced no questions was probably not a test. Your next action: Open Your work and choose Ready for review. The next lesson decides who gets to change any of this.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Move the purpose to the top and add the when-not-to-use paragraph.

</details>

<details>
<summary>Hint 2</summary>

Embed the component you built in m13 lesson 4 and put the markup next to it.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Documentation someone will actually read.
Task: Write the documentation for two components so that a person can use them correctly without asking you, and test it by watching someone try.
Challenge one thing at a time, and start with the mistake this lesson is about: “The components are self-explanatory.” They are to you. Every question someone has to ask is a small tax, and in a system meant to save time, those taxes are the thing you were trying to remove.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the two pages and ask whether pages open with when to use and when not to. Look at the page with its example and ask whether live examples sit beside the specification. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m13-l06-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Pages open with when to use and when not to: Both pages beginning with purpose and boundaries, with an alternative named. Live examples sit beside the specification: A working example and its markup on the same page as the specification. Content rules are where a writer will find them: Length limits, truncation and tone guidance on the component page. Reader questions were recorded and turned into content: A list of questions from a real reader with the sentences added.

**Bring forward:** Documentation with a record of the questions it failed to answer, and the fixes, shows that you treat documentation as a designed artefact. Module handoff: Prepare delivery in m14


### Practice and pause points

- Structure the page (~30 min): Read the assigned component pages for structure. Write when to use, when not to use, and the alternative. Place the example immediately after.
- Bring code and design together (~30 min): Embed the live component or its markup beside the specification. Include the state grid and anatomy on the same page.
- Write for the content author (~20 min): Add maximum lengths, truncation behaviour and tone guidance. Put them with the component, not in a separate document.
- Test the documentation (~25 min): Ask someone to build a small screen using only the pages. Record every question they ask without answering immediately.
- Fix and record (~15 min): Turn each question into a sentence on the page. Note which questions you could not answer either. Save both pages and the question list.

Pause after any step; save the artifact and next action.

**Free tool path.** Markdown files beside your code, or one HTML page per component with the live example embedded. No documentation platform, account or static-site tool is required.

### Output

Two component pages opening with when to use and when not to; Live examples with the code beside them; Content rules placed where a writer will find them; A record of the questions a real reader had to ask

### Checks

- Why open with when to use it? Answer: Because the reader's first question is whether this is the right component. Appearance matters only after that choice is made.
- Why keep design and code on one page? Answer: Because separate artefacts drift, and documentation describing behaviour the component no longer has is worse than none.
- How do you know the documentation works? Answer: Someone completes a task with it and asks you nothing. Every question they do ask is a defect in the page.

### Rubric and remediation

**Pages open with when to use and when not to**

Adequate evidence: Both pages beginning with purpose and boundaries, with an alternative named.

- 0 — Pages open with appearance.
- 1 — Purpose stated but no boundary.
- 2 — Both, with an alternative named.
- 3 — As adequate, and the boundary cites a real misuse.

If below 2: Move the purpose to the top and add the when-not-to-use paragraph. Show at recheck: The two pages.

**Live examples sit beside the specification**

Adequate evidence: A working example and its markup on the same page as the specification.

- 0 — Static images only.
- 1 — Example present, code elsewhere.
- 2 — Example and code together with the specification.
- 3 — As adequate, and the example is the built component rather than a copy.

If below 2: Embed the component you built in m13 lesson 4 and put the markup next to it. Show at recheck: The page with its example.

**Content rules are where a writer will find them**

Adequate evidence: Length limits, truncation and tone guidance on the component page.

- 0 — Content rules absent.
- 1 — In a separate writing document.
- 2 — On the component page with the rest.
- 3 — As adequate, and the maximum lengths are the ones you verified by rendering.

If below 2: Move the content rules onto the component page and check the numbers against your states page. Show at recheck: The content section.

**Reader questions were recorded and turned into content**

Adequate evidence: A list of questions from a real reader with the sentences added.

- 0 — Documentation untested.
- 1 — Tested with questions answered verbally only.
- 2 — Questions recorded and turned into page content.
- 3 — As adequate, and questions you could not answer are recorded as open decisions.

If below 2: Ask someone to build a screen from the pages alone and write down every question. Show at recheck: The question list and the updated pages.

### Portfolio contribution

Documentation with a record of the questions it failed to answer, and the fixes, shows that you treat documentation as a designed artefact.

### Assigned resources

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — Two component pages, read for their structure: when to use, when not to use, example, anatomy, content and behaviour. Purpose: Supplies the page structure this lesson adopts. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Take the structure; the components and brand are one organisation's. Fallback: R06.
- R18: [Atlassian: user stories](https://www.atlassian.com/agile/project-management/user-stories) — How a story states who, what and why, read as a model for writing usage guidance briefly. Purpose: Helps keep guidance short and centred on the reader's task. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. Written about agile stories rather than documentation; no Jira subscription is required or implied. Fallback: R26.

## Lesson 7: Who decides, and how something gets in

Stable ID: m13-l07-v1. Core. Areas 12. Optional effort ~120 min.

**Objective.** Write the governance for your system: how a change is proposed, who decides, what evidence is required, and how long it takes.

**Bring forward.** Your system's purpose, audience and documentation.

Without a route in, people fork the system quietly. Governance is what keeps a system used rather than worked around.

### Learn

People work around systems that have no route in. If proposing a new component means an unanswered message, the practical alternative is a one-off component in a screen, and after four of those the system no longer describes the product. A written route — how to propose, what to include, who answers, how long — costs a paragraph and prevents the fork.

Naming the decider is uncomfortable and necessary. In a system of one, it is you, and writing that down makes the process legible to anyone else and reminds you to apply the same standard to your own proposals as to others'.

Requiring evidence keeps the system small. Where is this needed, what does it replace, why do the existing components not fit, and how many screens would use it — four questions that reject most proposals honestly and improve the rest.

Recording rejections matters more than recording acceptances. A rejected proposal with its reason prevents the same request arriving three times and gives the person a real answer rather than silence. Over a year, the rejection log is the clearest statement of what the system is for.

**Common misconception.** “Governance is bureaucracy.” Governance is the difference between a system people use and one they route around. A paragraph naming the route, the decider and the response time is enough for a small system, and skipping it costs more.

### Worked example

The governance was one page. To propose: open an issue with the screens where it is needed, what existing component you tried, and why it did not fit. Decider: the learner, until someone else joins. Response time: within a week. Criteria: needed in at least two screens, not achievable by composing existing components, and specifiable with states and content rules. Decisions are recorded in a log with the reason. Three proposals in the first month: one accepted, one rejected because composition covered it, and one deferred pending a second use — all recorded, and the rejected one was not re-raised.

#### Who decides, and how something gets in

Write the governance for your system: how a change is proposed, who decides, what evidence is required, and how long it takes.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A Markdown page and a decision log file. Issue trackers help and are not required; the process matters more than the tool.

- Starting material: Your system purpose and component pages.
- Create HaruCourse/Practice/m13-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Write the route

- State how someone proposes a change and where.
- List the evidence a proposal must include.

**You should end up with:** A written route for proposing a change, and the evidence a proposal has to carry.

Worksheet fields for this step:

- Where a proposal goes, and in what form — A file, an issue, a message. The tool matters less than it being written down and findable.
- What a proposal must include

<details>
<summary>Help with this step</summary>

- **Governance:** The stated way things get into and out of the system. It is the difference between a system people use and one they route around.
- **Required evidence:** What a proposal must show before it is considered: where it is needed, what was tried, why it did not fit. It turns a wish into something decidable.

Stuck starting? Write where a proposal goes before writing anything about deciding it.

Is it enough? Somebody could propose something today without asking you how.

</details>

#### 2. Name the decider and timing

**See it first.** Made-up example. Writing governance for a tool-library system, and writing the part that felt important.

- **What I wrote:** A careful proposal template, three acceptance criteria, and a note that proposals would be reviewed regularly.
- **What happened to the first proposal:** Somebody asked for a filter chip. I read it, thought about it, meant to reply, and did not. Three weeks passed.
- **What they did:** Built one on their screen. Reasonably, because they had a screen to finish and no answer. It used a spacing value that was not in the foundations and had no focus state.
- **What was actually missing from my page:** Not the criteria. A response time, and a rule for what happens when I do not meet it. Regularly is not a time.
- **What I added:** An answer within a week. If there is no answer in a week, build what you need on your screen and open a note so the system can catch up later.

**The wrong turn:** The wrong turn is writing the criteria and skipping the timing, because criteria feel like the substance of governance. The thing that makes people route around a system is waiting, not being refused.

**What it costs:** A week is a promise, and some weeks it will be inconvenient to keep. The alternative is silence, which people read as a no they did not have to accept.

**Still unknown:** Still unknown: whether a week is the right length. It is short enough not to block a screen and long enough to think, and nothing here has tested it.

- State who decides and within how long.
- State what happens if nobody responds.

**You should end up with:** A named decider, a response time, and a rule for what happens when nobody responds.

Worksheet fields for this step:

- Who decides — Name yourself if it is you. An unnamed decider means everybody assumes somebody else.
- Within how long a proposal gets an answer
- What happens if nobody responds in that time — Silence is the commonest outcome, and without a rule it means the proposer quietly builds their own.

<details>
<summary>Help with this step</summary>

- **The decider:** The person who says yes or no. Naming yourself is a complete answer; leaving it unnamed means everybody assumes somebody else is handling it.
- **Response time:** How long a proposal waits. Without one, proposals go unanswered, and an unanswered proposal becomes a component built quietly on a screen.

Stuck starting? Write your own name and a number of days. Both are shorter to write than to decide.

Is it enough? Somebody who gets no answer knows what they are allowed to do.

</details>

#### 3. Write the criteria

**See it first.** Made-up example. Writing acceptance criteria for a tool-library system, and writing criteria that accept everything.

- **What I wrote:** A new component must be useful, consistent with the foundations, and well specified. Three criteria, and they read like the sort of thing a system should say.
- **What happened to the first four proposals:** All four passed. Everything anybody proposes is useful to the person proposing it, nothing arrives deliberately inconsistent, and well specified describes the proposal rather than the need.
- **What I had not written:** Anything that could produce a no. Criteria that cannot reject are a description of good manners.
- **What I replaced them with:** Needed in at least two screens. Not achievable by arranging existing components. Specifiable with states and content rules.
- **What the same four proposals did then:** One passed, two failed the composition check in about a minute each, and one failed on a single use and was recorded as deferred until a second appeared.

**The wrong turn:** The wrong turn is writing criteria as qualities rather than as tests, because qualities are easier to agree on. A criterion nothing can fail is not doing any work, and the system grows by default.

**What it costs:** Real criteria mean saying no to people, including to yourself, about components you would quite like to build.

**Still unknown:** Still unknown: whether two screens is the right threshold. It is low enough not to block obvious cases and high enough to catch a screen pretending to be a component, and nothing here has tested it.

- Write what a new component must satisfy to be accepted.
- Include a minimum number of uses and a composition check.

**You should end up with:** Written criteria a new component must satisfy, including a minimum number of uses and a composition check.

Worksheet fields for this step:

- What a new component must satisfy to be accepted — A minimum number of uses, a composition check, and whether it can be specified with states and content rules.

<details>
<summary>Help with this step</summary>

- **Composition check:** Asking whether existing parts arranged differently would do the job. It rejects a surprising number of proposals and costs one minute.
- **Minimum uses:** A rule that something appears in at least two places before it joins the system. One use is a screen, not a component.

Stuck starting? Write the composition check first; it is the criterion that does most of the work.

Is it enough? Each criterion could be answered from a proposal without a conversation.

</details>

#### 4. Run it on three cases

- Apply the process to three real proposals from your own backlog.
- Accept, reject or defer each, recording the reason.

**You should end up with:** Three real proposals from your own backlog run through the process, each accepted, rejected or deferred with a reason.

**Try it with help.** Six proposals to a made up tool-library system. For each one, decide what the process should answer.

- A filter chip. Needed on the listing screen and the search screen, nothing existing does it, and it can be specified with states and content rules.
  - **accept** — Two uses, no existing fit, specifiable. It meets every criterion, which is what makes it an easy decision rather than a generous one.
  - reject — Nothing in it fails a criterion.
  - defer — The second use already exists, so there is nothing to wait for.
- A statistics block for the home page. Used in exactly one place, and nowhere else is planned.
  - accept — One use is a screen, not a component. Adding it costs maintenance for ever and saves nothing.
  - **reject** — It fails the minimum-uses criterion, and the reason is short enough to record in a line.
  - defer — Deferring implies a second use might arrive. Nothing suggests one, and a clear no is kinder than an indefinite maybe.
- A card with a badge in the corner. A badge component already exists, and it can be placed on the existing card.
  - accept — It would add a variant that composition already covers, and the variant count is the thing that eventually breaks a system.
  - **reject** — The composition check catches it in one minute. The answer is to place the badge on the card, which somebody can do today.
  - defer — There is nothing to wait for; the answer exists now.
- A brief message that appears and disappears after an action. Needed on one screen now, and the booking flow being designed next month will need it.
  - accept — One current use, and a second that exists in a plan rather than in a screen.
  - reject — A flat no here is likely to be wrong within a month and produces a quietly built version in the meantime.
  - **defer** — A named condition holds it: when the booking flow exists, it has two uses. That is a real answer somebody can plan around.
- A receipt-style record component. Genuinely needed, and marketing and account pages were excluded in the system’s scope.
  - accept — It is needed, and being needed is not the same as being in scope.
  - **reject** — The boundary decides it. Rejecting it with the scope line attached is how the boundary stays meaningful.
  - defer — Deferring suggests the scope might change, which is a bigger decision than this proposal.
- A dark theme for every component. One person has asked, and nothing in the product currently supports it.
  - accept — It touches every component and every token. Accepting it as a proposal treats a project as a component.
  - reject — A flat no discards a reasonable request, and the tokens would have to change for it either way.
  - **defer** — Not as a proposal. It is a piece of work with its own decision, and deferring it names that rather than deciding it in a queue.

**Then:** Now run your own three proposals through your criteria and record the answers with their reasons.

**What to watch for:** Three different kinds of no. Not enough uses, composition already covers it, and out of scope are all rejections, and they read very differently to the person who proposed. A defer needs a named condition or it is silence with better manners.

Worksheet fields for this step, revealed a few at a time in the app:

- Proposal 1 · what it is, the evidence, the decision and the reason
- Proposal 2 · what it is, the evidence, the decision and the reason
- Proposal 3 · what it is, the evidence, the decision and the reason

<details>
<summary>Help with this step</summary>

- **Deferred:** Not yet, with a condition: a second use, a decision elsewhere, a screen that does not exist. It is a real answer, unlike silence.
- **Rejected with a reason:** A no that says why, so the same proposal does not return every six weeks with the same argument.

Stuck starting? Take the proposal you already have an opinion about and answer the criteria before reading your opinion back.

Is it enough? Each decision cites a criterion rather than a preference.

</details>

#### 5. Start the log

- Record the three decisions in a log.
- Save the governance page beside the system documentation.

**You should end up with:** A decision log started, with the rejection written so it does not have to be argued again.

Worksheet fields for this step:

- Where the decision log lives
- The rejection, written so it does not have to be argued again — A rejection with a reason is what stops the same proposal returning every six weeks.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Decision log:** A dated list of what was proposed and what was decided, with reasons. It is what stops the same argument recurring every few weeks.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write the three decisions with dates, including the accepted one.

Is it enough? Somebody re-raising the rejected proposal could be pointed at a line rather than argued with.

</details>

**Save and continue.** Saved for you: Your route, decider, criteria, the three decisions and the log location save as you type, on this device first and then online. Kept outside the app: The governance page and the decision log are files beside the system documentation in your own folder. An issue tracker helps and is not required. What your creator sees: Your creator reads the rejection and its reason. A governance page with no recorded no has usually not been used yet. Your next action: Open Your work and choose Ready for review. The next lesson decides how a change is announced once it has been accepted.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write the four questions a proposal must answer and where it goes.

</details>

<details>
<summary>Hint 2</summary>

Write who decides, in how long, and what to do if that does not happen.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Who decides, and how something gets in.
Task: Write the governance for your system: how a change is proposed, who decides, what evidence is required, and how long it takes.
Challenge one thing at a time, and start with the mistake this lesson is about: “Governance is bureaucracy.” Governance is the difference between a system people use and one they route around. A paragraph naming the route, the decider and the response time is enough for a small system, and skipping it costs more.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the proposal route and ask whether A proposal route with required evidence exists. Look at the decider statement and ask whether the decider and response time are named. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m13-l07-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** A proposal route with required evidence exists: A written route naming where to propose and what to include. The decider and response time are named: A named decider and a stated turnaround, with a fallback. Acceptance criteria include a composition check: Criteria requiring at least two uses and a check that composition cannot cover it. A decision log records at least one rejection with its reason: A log of three decisions including a rejection and its reasoning.

**Bring forward:** Governance is what distinguishes a design system from a component folder, and a one-page process with a decision log demonstrates it concretely. Module handoff: Prepare delivery in m14


### Practice and pause points

- Write the route (~25 min): State how someone proposes a change and where. List the evidence a proposal must include.
- Name the decider and timing (~20 min): State who decides and within how long. State what happens if nobody responds.
- Write the criteria (~30 min): Write what a new component must satisfy to be accepted. Include a minimum number of uses and a composition check.
- Run it on three cases (~30 min): Apply the process to three real proposals from your own backlog. Accept, reject or defer each, recording the reason.
- Start the log (~15 min): Record the three decisions in a log. Save the governance page beside the system documentation.

Pause after any step; save the artifact and next action.

**Free tool path.** A Markdown page and a decision log file. Issue trackers help and are not required; the process matters more than the tool.

### Output

A written proposal route with required evidence; A named decider and response time; Acceptance criteria for new components; A decision log including at least one rejection

### Checks

- What happens without a route in? Answer: People build one-off components in screens, and after a few the system stops describing the product. The fork is quiet and hard to reverse.
- Why record rejections? Answer: Because they prevent the same proposal arriving repeatedly, give the person a real answer, and over time state what the system is for more clearly than the acceptances do.
- Why state a response time? Answer: Because an unanswered proposal is a rejection with extra waiting, and people stop proposing after the second one.

### Rubric and remediation

**A proposal route with required evidence exists**

Adequate evidence: A written route naming where to propose and what to include.

- 0 — No route.
- 1 — A route without required evidence.
- 2 — Route and evidence requirements both stated.
- 3 — As adequate, and the evidence list is short enough that people will actually complete it.

If below 2: Write the four questions a proposal must answer and where it goes. Show at recheck: The proposal route.

**The decider and response time are named**

Adequate evidence: A named decider and a stated turnaround, with a fallback.

- 0 — Neither stated.
- 1 — Decider named without timing.
- 2 — Both stated with a fallback for no response.
- 3 — As adequate, and the same standard is stated to apply to the decider's own proposals.

If below 2: Write who decides, in how long, and what to do if that does not happen. Show at recheck: The decider statement.

**Acceptance criteria include a composition check**

Adequate evidence: Criteria requiring at least two uses and a check that composition cannot cover it.

- 0 — No criteria.
- 1 — Criteria without a composition check.
- 2 — Both present and applied.
- 3 — As adequate, and the criteria require a specification with states before acceptance.

If below 2: Add the question “can this be built from existing components?” and require two uses. Show at recheck: The criteria.

**A decision log records at least one rejection with its reason**

Adequate evidence: A log of three decisions including a rejection and its reasoning.

- 0 — No log.
- 1 — Acceptances recorded only.
- 2 — All decisions recorded including a rejection.
- 3 — As adequate, and a deferral is recorded with what would change it.

If below 2: Apply the process to three real proposals and record each outcome with a reason. Show at recheck: The decision log.

### Portfolio contribution

Governance is what distinguishes a design system from a component folder, and a one-page process with a decision log demonstrates it concretely.

### Assigned resources

- R18: [Atlassian: user stories](https://www.atlassian.com/agile/project-management/user-stories) — How a request is written so it can be judged: who, what and why. Purpose: Gives a shape for proposals that makes them decidable rather than conversational. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. About agile stories rather than design-system governance; no subscription is required or implied. Fallback: R26.
- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — Two component pages, read for the guidance a published component has to carry. Purpose: Shows what a contribution has to produce before a component is published. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Its governance suits a large organisation; scale it down deliberately rather than copying it. Fallback: R06.

## Lesson 8: Versions and breaking changes

Stable ID: m13-l08-v1. Core. Areas 12. Optional effort ~120 min.

**Objective.** Version your system, classify three real changes as major, minor or patch, and write the change note that tells people what to do.

**Bring forward.** Your component pages and the changes you have already made.

A system that changes silently is a system people stop trusting. Versioning is how a change becomes something others can plan around.

### Learn

The assigned specification is written for software interfaces and its rules transfer cleanly: a change that forces others to alter their work is major, one that adds without breaking is minor, and a fix that changes nothing about how it is used is a patch. Applying it to a design system means treating your tokens, component names and behaviour as the interface, because that is what other people build against.

The rule that a released version is never modified matters more in design than people expect. Quietly changing a token's value after release means two screens built a week apart look different for reasons nobody recorded, and the difference is found much later by someone who cannot explain it.

Breaking changes in a design system are often invisible to the person making them. Renaming a token, removing a variant, changing a default, tightening a content rule — each forces work on everyone who used the old one. Classifying honestly is uncomfortable and is what makes the version number meaningful.

The change note is what turns a version into communication. What changed, why, what you must do, and by when. The specification says nothing about how to communicate, so this part is your own: written well, it is read; written as a list of commits, it is not.

**Common misconception.** “It is a small change, so it is a patch.” Size is irrelevant; effect is what counts. Renaming one token is a one-character change and forces work on everyone who used it, which makes it major.

### Worked example

The system was versioned 1.0.0 at the point the two components were documented. Three changes followed. Adding the compact card variant: minor, since nothing existing changed. Fixing the focus ring's contrast on the tinted surface: patch, because usage is unchanged. Renaming surface-alt to surface-muted for consistency: major, because every use must change, and it was released with the old name deprecated for one minor version, a change note explaining the rename, and a list of the four places it appeared. The rename was deliberately delayed until it could travel with another major change.

#### Versions and breaking changes

Version your system, classify three real changes as major, minor or patch, and write the change note that tells people what to do.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A version number in your documentation and a changelog file. Nothing else is required; the discipline is the deliverable.

- Starting material: Your documented components and their change history.
- Create HaruCourse/Practice/m13-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read the rules and set a version

- Read the assigned specification's major, minor and patch definitions.
- Give your current system a version number and say what it covers.

**You should end up with:** A version number for the system as it stands, and the three levels written in your own words.

Worksheet fields for this step:

- The version number you are giving the system now, and what it covers
- Major, minor and patch in your own words — Major means people must change something. Minor adds without changing. Patch fixes without changing usage.

<details>
<summary>Help with this step</summary>

- **Major, minor, patch:** Three levels of change. Major forces work on people using it, minor adds something new, patch fixes something without changing how it is used.
- **A released version:** One that is never edited afterwards. Changing something means a new version, which is what makes a version number worth anything.

Stuck starting? Give the system a number today, even if it feels early. A system with no version cannot have a change note.

Is it enough? Your three definitions turn on effect rather than on size.

</details>

#### 2. Classify three changes

**See it first.** Made-up example. Classifying a token rename in a tool-library system, and classifying it by how much typing it took.

- **The change:** Renaming surface-alt to surface-muted, because alt said nothing and muted says what it is for.
- **What I called it:** A patch. It is one word, it changes nothing visually, and nothing about the product looks different afterwards.
- **What happened:** Four places in my own stylesheet stopped working, plus a screen somebody else had built. Nothing looked broken; the colour simply fell back to white and two panels lost their tint.
- **What the classification should have been:** Major. Everyone using the old name has to change, and a silent fallback is the worst way to find out.
- **What I did instead:** Released it with the old name kept and marked deprecated for one minor version, a change note listing the four places, and the removal date stated. The rename waited to travel with the next major change.

**The wrong turn:** The wrong turn is classifying by how much you typed, because a rename is the smallest edit there is. The test is whether anybody else has to do something, and a rename forces work on everyone who used the old name.

**What it costs:** Keeping both names for a version means the system briefly has two names for one thing, which is exactly the confusion the rename was meant to end.

**Still unknown:** Still unknown: whether anybody outside my own files is using the old name. I searched what I can see, and a system used elsewhere would need the change note to reach them.

- Take three changes you have already made or plan to make.
- Classify each by whether it forces work on others.
- Record any you had assumed was smaller than it is.

**You should end up with:** Three real changes classified by whether they force work on anybody, with any you underestimated marked.

Worksheet fields for this step:

- Change 1 · what it is, its classification, and why
- Change 2 · what it is, its classification, and why
- Change 3 · what it is, its classification, and why
- Any change you had assumed was smaller than it is — There is usually one. A rename is the classic case.

<details>
<summary>Help with this step</summary>

- **Breaking change:** Anything that makes existing use stop working: a renamed token, a removed variant, a changed default. Its size in characters is irrelevant.
- **Effect, not size:** The test for classification. Renaming one token is a one-word edit and forces work on everyone who used it.

Stuck starting? For each change, ask one question: does anybody have to do something because of this?

Is it enough? At least one change is classified higher than it first felt.

</details>

#### 3. Write the change note

- For the largest change write what changed, why, and what to do.
- List the places affected.
- Give a date or version by which the old form stops working.

**You should end up with:** A change note for the largest change, listing every place affected and when the old form stops working.

**Try it with help.** Six changes to a made up tool-library system. For each one, decide how it should be classified.

- Renaming surface-alt to surface-muted.
  - **major** — Everyone using the old name has to change, and the failure is silent: the colour falls back and panels quietly lose their tint.
  - minor — Nothing is being added. Something is being taken away and replaced.
  - patch — The size of the edit is not the test. The effect on everybody else is.
- Adding a compact variant to the card. Nothing existing changes.
  - major — Nobody has to do anything. Every existing use keeps working exactly as it did.
  - **minor** — New capability, no existing use affected. This is the textbook minor change.
  - patch — Patch is for fixes, and nothing here was broken.
- Darkening the focus ring so it passes contrast on the tinted surface. Usage is unchanged.
  - major — Nobody has to change anything they wrote.
  - minor — Nothing new is available. Something that was wrong is now right.
  - **patch** — A fix with no change to how the component is used. It should still appear in the changelog.
- Removing the featured variant, which two screens still use.
  - **major** — Two screens break. Removal is always major, which is why deprecation exists as the step before it.
  - minor — Removing is the opposite of adding.
  - patch — Two screens stopping working is not a fix.
- Changing the card’s default padding from 16 to 12, which affects every existing card.
  - **major** — Every existing use changes appearance without anybody asking. A changed default is a breaking change even though nothing stops working.
  - minor — Nothing is being added, and existing use is affected.
  - patch — It is not a fix; it is a different decision, and it arrives everywhere at once.
- Correcting a spelling mistake on the card documentation page.
  - major — Nobody has to do anything, and nothing renders differently.
  - minor — Nothing new exists.
  - **patch** — A fix with no effect on usage. Small, and still worth a line in the changelog so the page has a history.

**Then:** Now classify your own three changes the same way and write the note for whichever came out largest.

**What to watch for:** The two that people get wrong are the rename and the changed default, because neither breaks anything visibly. A silent change of appearance everywhere is a breaking change, and its size in characters has nothing to do with it.

Worksheet fields for this step:

- For the largest change: what changed, why, and what the reader must do
- Every place it affects — Search your own stylesheet and documentation. A change note without a list of places is a warning rather than an instruction.
- The version or date by which the old form stops working

<details>
<summary>Help with this step</summary>

- **Change note:** What changed, why, and what the reader must do. The third part is the one people write last and need first.
- **Places affected:** The list of files, components or screens that have to change. A note without it is a warning rather than an instruction.

Stuck starting? Search your own files for the thing you are changing, and paste the list of hits into the places field.

Is it enough? A reader could carry out the change from the note without asking you where to look.

</details>

#### 4. Write the deprecation rule

**See it first.** Made-up example. Removing an unused variant from a tool-library system, and removing it the day it stopped being needed.

- **What I removed:** The featured card variant. The home page had been redesigned and no longer used it, so it was dead code in the stylesheet and a row in the grid nobody needed.
- **What I checked:** The home page. It was clean, so I deleted the variant, released it, and noted it in the changelog as a removal.
- **What broke two days later:** The anniversary page, which somebody had built in February and which I had not opened in months. It still used the variant, and the card fell back to the default with its layout half wrong.
- **What deprecation would have done:** Kept the variant working, marked it as going away in the documentation, and named the version it would be removed at. The anniversary page would have been found during that window rather than by breaking.
- **What the rule became:** A deprecated name survives one minor version, is marked on its documentation page with the removal version, and appears in the changelog when it is deprecated as well as when it goes.

**The wrong turn:** The wrong turn is removing something the moment you can see it is unused, because your own view of what uses it is always incomplete. Deprecation is what turns a removal from a surprise into a window.

**What it costs:** Keeping something working for a version means the system carries code you have already decided against, and the grid has a row marked as going away in it.

**Still unknown:** Still unknown: how many screens I do not know about. The rule assumes a window catches them, which is a better assumption than the one I made and still an assumption.

- State how long a deprecated name survives before removal.
- State how deprecation is signalled in the documentation.

**You should end up with:** A deprecation rule saying how long an old name survives and how deprecation is signalled.

Worksheet fields for this step:

- How long a deprecated name survives before removal
- How deprecation is signalled in the documentation

<details>
<summary>Help with this step</summary>

- **Deprecation:** Marking something as going away while keeping it working. It gives people a window to change, which is the difference between a plan and a surprise.
- **Signalled:** Visible where somebody would meet it: on the documentation page, in the changelog, and ideally where the old name is used.

Stuck starting? Choose a length in versions rather than in weeks. Weeks pass without anybody noticing.

Is it enough? Somebody using a deprecated name would find out before it stopped working.

</details>

#### 5. Start the changelog

- Record the three changes in a changelog with versions.
- Save the versioning rules with the system documentation.

**You should end up with:** The three changes recorded as changelog entries with versions, and the repair the Check questions asked for.

Worksheet fields for this step:

- The three changes as changelog entries, with versions
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Changelog:** A dated list of what changed at each version. It is how somebody who has been away for a month finds out what they missed.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write the newest entry at the top, with the version and the date.

Is it enough? Each entry says what changed and what the reader must do, if anything.

</details>

**Save and continue.** Saved for you: Your version, the classifications, the change note, the deprecation rule and the changelog save as you type, on this device first and then online. Kept outside the app: The changelog is a file beside the system documentation in your own folder. Nothing here needs a release tool. What your creator sees: Your creator reads the change you underestimated. A set of three changes where nothing was underestimated usually means all three were small. Your next action: Open Your work and choose Ready for review. The next lesson finds out whether anything you have built is actually used.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Assign a version and write which parts of the system it governs.

</details>

<details>
<summary>Hint 2</summary>

For each change ask who must alter their work. If anyone must, it is major.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Versions and breaking changes.
Task: Version your system, classify three real changes as major, minor or patch, and write the change note that tells people what to do.
Challenge one thing at a time, and start with the mistake this lesson is about: “It is a small change, so it is a patch.” Size is irrelevant; effect is what counts. Renaming one token is a one-character change and forces work on everyone who used it, which makes it major.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the version statement and ask whether the system carries a version and a stated scope. Look at the classifications and ask whether three changes are classified by effect, not size. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m13-l08-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The system carries a version and a stated scope: A version number with a statement of what is covered by it. Three changes are classified by effect, not size: Three classifications with the reasoning about forced work. A change note states what to do and by when: A note with the change, the reason, the affected places and a deadline. A deprecation rule exists: A stated survival period for deprecated names and how deprecation is signalled.

**Bring forward:** A changelog with an honest major version and a readable change note demonstrates that you can run a system rather than only design one. Module handoff: Prepare delivery in m14


### Practice and pause points

- Read the rules and set a version (~25 min): Read the assigned specification's major, minor and patch definitions. Give your current system a version number and say what it covers.
- Classify three changes (~30 min): Take three changes you have already made or plan to make. Classify each by whether it forces work on others. Record any you had assumed was smaller than it is.
- Write the change note (~25 min): For the largest change write what changed, why, and what to do. List the places affected. Give a date or version by which the old form stops working.
- Write the deprecation rule (~25 min): State how long a deprecated name survives before removal. State how deprecation is signalled in the documentation.
- Start the changelog (~15 min): Record the three changes in a changelog with versions. Save the versioning rules with the system documentation.

Pause after any step; save the artifact and next action.

**Free tool path.** A version number in your documentation and a changelog file. Nothing else is required; the discipline is the deliverable.

### Output

A version number for the current system; Three real changes classified major, minor or patch; A change note for the largest one; A deprecation rule stating how long old names survive

### Checks

- What makes a change major? Answer: That it forces others to change their work. Size is irrelevant: a one-character rename that everyone must follow is major.
- Why must a released version never be edited? Answer: Because otherwise two screens built at different times differ for unrecorded reasons, and nobody can reconstruct which version they used.
- What does a change note owe the reader? Answer: What changed, why, what they must do and by when. The specification does not cover communication, so this part is the designer's own work.

### Rubric and remediation

**The system carries a version and a stated scope**

Adequate evidence: A version number with a statement of what is covered by it.

- 0 — No version.
- 1 — A version without a stated scope.
- 2 — Both, with the interface named — tokens, component names, behaviour.
- 3 — As adequate, and the scope says what is explicitly not part of the versioned interface.

If below 2: Assign a version and write which parts of the system it governs. Show at recheck: The version statement.

**Three changes are classified by effect, not size**

Adequate evidence: Three classifications with the reasoning about forced work.

- 0 — Classified by how large the edit felt.
- 1 — Mostly by effect with one misclassification.
- 2 — All three classified by whether others must change.
- 3 — As adequate, and one is reclassified upward after considering who is affected.

If below 2: For each change ask who must alter their work. If anyone must, it is major. Show at recheck: The classifications.

**A change note states what to do and by when**

Adequate evidence: A note with the change, the reason, the affected places and a deadline.

- 0 — No note.
- 1 — A note describing the change only.
- 2 — All four elements present.
- 3 — As adequate, and the note is written for someone who did not attend any discussion.

If below 2: Rewrite the note answering: what changed, why, what do I do, by when. Show at recheck: The change note.

**A deprecation rule exists**

Adequate evidence: A stated survival period for deprecated names and how deprecation is signalled.

- 0 — No rule.
- 1 — A vague intention to give notice.
- 2 — A stated period and signalling method.
- 3 — As adequate, and the rule matches the pace at which your system actually releases.

If below 2: Write how long an old name stays and how someone finds out it is going. Show at recheck: The deprecation rule.

### Portfolio contribution

A changelog with an honest major version and a readable change note demonstrates that you can run a system rather than only design one.

### Assigned resources

- R67: [Semantic Versioning 2.0.0](https://semver.org/) — The major, minor and patch definitions and the rule that a released version is never modified. Purpose: Supplies the classification this lesson applies to design changes. Effort: 15–25 min. Free reading, no account, CC BY 3.0. Verified 2026-09-06; the specification is 2.0.0 and states no date. Written for software APIs: it says nothing about design systems and gives only a minimal deprecation rule, so applying and announcing are your own work. Fallback: R18.
- R18: [Atlassian: user stories](https://www.atlassian.com/agile/project-management/user-stories) — Writing a change so that its audience knows what to do. Purpose: Shapes the change note around the reader's action rather than the author's activity. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. About agile stories rather than release notes; no subscription is required. Fallback: R26.

## Lesson 9: Getting it adopted

Stable ID: m13-l09-v1. Core. Areas 12. Optional effort ~120 min.

**Objective.** Migrate two existing screens onto the system, measure how much of each now comes from it, and record what blocked full adoption.

**Bring forward.** Your built screens and the system's components.

A system nobody has adopted has no effect. Migration is where you learn whether it fits the product it was built from.

### Learn

Adoption is measurable in a rough and useful way: count the elements on a screen and count how many come from the system. That number, tracked across two or three screens, tells you far more about whether the system works than any amount of internal satisfaction with the documentation.

The screen you migrate must be a real one. Demonstration screens are built from the components that exist, which proves nothing. A real screen contains the awkward cases, the one-offs and the compromises, and it is those that show which parts of the system are missing or wrong.

Blockers are the most valuable output of migration. A component that nearly fits, a token that has no equivalent, a content rule that the real content violates — each is a specific improvement, and collecting them is the point of the exercise rather than an obstacle to it.

There is a temptation to change the product so the system fits. Sometimes that is right, and it must be a recorded decision rather than a quiet simplification: a screen that lost a distinction people relied on, because the system had no component for it, is a regression dressed as consistency.

**Common misconception.** “Adoption is a rollout problem.” It is a fit problem first. If the system does not cover the real screens, no amount of advocacy will get it adopted, and the blockers list is what tells you which is which.

### Worked example

Two screens were migrated. The class list reached 90 per cent system-provided after two blockers were fixed: a missing filter chip and a spacing value that did not exist. The booking summary reached 55 per cent, and the reasons were recorded: it needs a component the system deliberately does not cover — a receipt-style record — and its status treatment carries a distinction the system's status component flattens. The second was explicitly not resolved by simplifying the screen, since the distinction was one the m05 research had shown people using.

#### Getting it adopted

Migrate two existing screens onto the system, measure how much of each now comes from it, and record what blocked full adoption.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Your existing files. Counting elements by hand on two screens takes fifteen minutes and is accurate enough to steer decisions.

- Starting material: Your system and two existing screens.
- Create HaruCourse/Practice/m13-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Migrate the first screen

- Rebuild one real screen using system components and tokens.
- Record every element that could not come from the system.

**You should end up with:** One real screen rebuilt from system components and tokens, with every element that could not come from the system recorded.

Worksheet fields for this step:

- Which real screen, and why this one — A real one. A screen built to demonstrate the system will reach a hundred per cent and prove nothing.
- Every element that could not come from the system, and what it needed

<details>
<summary>Help with this step</summary>

- **Adoption:** How much of a real screen actually comes from the system. It is the only measure of whether the system has an effect.
- **Blocker:** Something the screen needs that the system cannot supply. Each one is information about fit rather than an obstacle to migration.

Stuck starting? Choose the screen you are least confident about rather than the one that will migrate cleanly.

Is it enough? Every blocker names what the screen needed, not only that something did not fit.

</details>

#### 2. Measure adoption

**See it first.** Made-up example. Measuring adoption on a tool-library screen, and measuring the wrong screen.

- **What I measured:** A screen I had built the week before, specifically to show the system working. It came out at 100 per cent.
- **What that told me:** That components I had designed together worked together. It was a demonstration measuring itself.
- **What I measured instead:** The real listing screen, built four months earlier, before any of this existed.
- **What that came out at:** Sixty-two per cent, with two blockers: a filter chip nothing covered, and a spacing value the scale did not have.
- **Why the lower number was the useful one:** It named two specific gaps, one of which went into the governance process that afternoon. The hundred per cent named nothing at all.

**The wrong turn:** The wrong turn is migrating a screen you built to show the system off, because it is quick and the number is flattering. A demonstration screen measures the system against itself.

**What it costs:** A real screen migrates slowly and produces a number you would rather not show anybody. It is the only number that tells you whether the system fits the product.

**Still unknown:** Still unknown: whether 62 per cent is good. There is nothing to compare it with, so it is a starting figure rather than a verdict.

- Count total elements and system-provided ones.
- State the counting method so the figure is repeatable.

**You should end up with:** An adoption figure with the counting method stated so somebody could repeat it.

Worksheet fields for this step:

- How you counted, stated so the figure could be repeated
- The figure for the first screen

<details>
<summary>Help with this step</summary>

- **Counting method:** What counts as one element. Any consistent rule works; an unstated one makes the figure impossible to repeat or compare.
- **By hand:** Counting from the markup with a pencil. Fifteen minutes on two screens is accurate enough to steer decisions.

Stuck starting? Count from the markup rather than from the picture, and write the rule you used before you start.

Is it enough? Somebody could recount your screen and get the same number.

</details>

#### 3. Migrate the second and compare

**See it first.** Made-up example. Comparing adoption on two tool-library screens, and reading the gap as a failure.

- **The two figures:** The listing screen reached 90 per cent after two fixes. The booking summary reached 55, and I was ready to treat that as a problem with the summary.
- **What I nearly did:** Started listing what the booking summary would need in order to catch up: a record component, a second status treatment, a different action row.
- **What the gap actually said:** The listing screen is the kind of screen the system was built from. The booking summary is a record of something you own, which is a different job the system was never shaped around.
- **Why that matters more than the number:** Closing the gap means building a second half of the system for records. That is a real project with a cost, and it was invisible while the number looked like a screen-level failure.
- **What I recorded:** Two figures, the reason they differ stated as a kind of screen, and the coverage decision written out as something to decide rather than something to fix this week.

**The wrong turn:** The wrong turn is reading a low figure as a problem with the screen, because the screen is what you were just looking at. The gap between two different kinds of screen is where the system’s coverage ends, and that is a decision rather than a defect.

**What it costs:** Naming it as a coverage decision means the low figure stays low for now, and anybody reading the summary sees a system that covers half the product.

**Still unknown:** Still unknown: whether records are worth covering at all. There are three such screens, and three may not justify a second half of the system.

- Repeat with a different kind of screen.
- Compare the two figures and note why they differ.

**You should end up with:** A second screen of a different kind migrated and counted the same way, with the reason the two figures differ.

Worksheet fields for this step:

- The second screen, and how it differs from the first
- Its figure, counted the same way
- Why the two numbers differ

<details>
<summary>Help with this step</summary>

- **A different kind of screen:** One with a different job: a list against a record, a form against a summary. The gap between the two figures is where the system’s coverage ends.

Stuck starting? Pick something as unlike the first screen as your product allows.

Is it enough? The reason for the difference names a kind of screen rather than a difficulty.

</details>

#### 4. Decide the blockers

- For each blocker choose: add to the system, leave as a one-off, or change the screen.
- Record any decision that removes a distinction the research supported.

**You should end up with:** Each blocker decided as an addition, a one-off, or a change to the screen, with any research-supported distinction you removed made visible.

**Try it with help.** Six blockers found migrating made up tool-library screens. For each one, decide what the right answer is.

- A filter chip, which also appears on the search screen and has no equivalent in the system.
  - **add it to the system** — Two screens, no existing fit. It passes the governance criteria, so it goes through the process rather than being built twice.
  - leave it as a one-off — Two uses is what a component is for.
  - change the screen — Removing filtering to fit the system would be the system deciding the product.
- A 10 pixel gap the scale does not have. Trying 8 makes no visible difference.
  - add it to the system — Adding a value nobody can distinguish from an existing one makes the scale permit more and decide less.
  - leave it as a one-off — A raw value left in a screen is how drift starts again.
  - **change the screen** — Use 8. Nobody can tell, and the screen now comes from the system entirely.
- A decorative banner used once a year on the anniversary page.
  - add it to the system — One use a year is a screen, not a component, and it costs maintenance for ever.
  - **leave it as a one-off** — Build it on the screen and record it as deliberately outside. That record is what stops it looking like an oversight later.
  - change the screen — Nothing is wrong with the screen.
- The booking screen distinguishes overdue from due today, and the system’s status component flattens both to late.
  - **add it to the system** — The research showed people using the distinction, so flattening it removes something that works. The component has to carry it.
  - leave it as a one-off — A second status treatment on one screen is how two vocabularies start.
  - change the screen — This is the decision that has to be recorded in the research-cost field if you make it. Here the evidence argues against it.
- A receipt-style record, on a screen the system deliberately placed out of scope.
  - add it to the system — The boundary was written for a reason, and this is the first test of it.
  - **leave it as a one-off** — Outside the scope, built on the screen, recorded as such. The adoption figure for that screen stays low and the reason is stated.
  - change the screen — The screen needs what it needs; the system chose not to cover it.
- A card variant with the action moved to the top, built on one screen months ago for no recorded reason.
  - add it to the system — A variant with no reason behind it is the kind that takes the count past four.
  - leave it as a one-off — It would be, if there were a reason. Nobody can remember one.
  - **change the screen** — Use the standard card. If something breaks, the reason will reappear, and if nothing does, it never had one.

**Then:** Now decide each of your own blockers and write the reason beside it.

**What to watch for:** Three of these are the system bending and three are the screen bending, and the one that needs watching is the status distinction. Changing a screen to fit the system is allowed, and when it removes something the research supported it has to be written down rather than absorbed.

Worksheet fields for this step:

- For each blocker: add to the system, leave as a one-off, or change the screen
- Any decision that removes a distinction your research supported — Simplifying a screen to fit the system is allowed and has to be visible. This field is where it becomes visible.

<details>
<summary>Help with this step</summary>

- **One-off:** Leaving something outside the system deliberately. It is a legitimate answer and it has to be recorded, or it becomes an accidental component.
- **Changing the screen to fit:** Simplifying the product so the system covers it. Allowed, and it must be said out loud, because sometimes it removes something people were using.

Stuck starting? Take the blocker you find most annoying and decide it by the criteria rather than by the annoyance.

Is it enough? Every blocker has a decision, and any distinction you removed is written down.

</details>

#### 5. Record

- Write the adoption figures, blockers and decisions.
- Feed accepted additions into the governance process.
- Save the migrated screens.

**You should end up with:** Accepted additions fed into the governance process, and a few lines summarising the figures, the blockers and what remains.

Worksheet fields for this step:

- Which accepted additions went into the governance process
- The two figures, the blockers and what remains, in a few lines
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Feeding the process:** Putting an accepted addition through the route you wrote last lesson rather than adding it directly. A process you bypass yourself is not a process.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Open your governance page and put the accepted blocker through it as a proposal.

Is it enough? Nothing was added to the system without going through your own route.

</details>

**Save and continue.** Saved for you: Your migrations, the figures, the counting method and the blocker decisions save as you type, on this device first and then online. Kept outside the app: The migrated screens stay in your own folder beside the originals. Keep the originals; the pair is what shows the migration. What your creator sees: Your creator reads the lower of the two figures and the blockers behind it. That is the number with information in it. Your next action: Open Your work and choose Ready for review. The next lesson decides what the system is actually promising.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Choose two screens you actually built earlier and rebuild them from the system.

</details>

<details>
<summary>Hint 2</summary>

Count elements and system-provided elements on each screen and write how you counted.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Getting it adopted.
Task: Migrate two existing screens onto the system, measure how much of each now comes from it, and record what blocked full adoption.
Challenge one thing at a time, and start with the mistake this lesson is about: “Adoption is a rollout problem.” It is a fit problem first. If the system does not cover the real screens, no amount of advocacy will get it adopted, and the blockers list is what tells you which is which.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the migrated screens and ask whether two real screens are migrated. Look at the adoption figures and ask whether adoption is measured with a stated method. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m13-l09-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Two real screens are migrated: Two migrated screens from actual product work, not demonstrations. Adoption is measured with a stated method: A figure per screen with the counting method written down. Blockers are listed with decisions: Each blocker with a decision: add, leave, or change the screen. Product changes made to fit the system are recorded: Any simplification of a screen recorded with what it removed.

**Bring forward:** Adoption figures with a blockers list are unusually concrete evidence that a system was used rather than merely built. Module handoff: Prepare delivery in m14


### Practice and pause points

- Migrate the first screen (~30 min): Rebuild one real screen using system components and tokens. Record every element that could not come from the system.
- Measure adoption (~25 min): Count total elements and system-provided ones. State the counting method so the figure is repeatable.
- Migrate the second and compare (~30 min): Repeat with a different kind of screen. Compare the two figures and note why they differ.
- Decide the blockers (~20 min): For each blocker choose: add to the system, leave as a one-off, or change the screen. Record any decision that removes a distinction the research supported.
- Record (~15 min): Write the adoption figures, blockers and decisions. Feed accepted additions into the governance process. Save the migrated screens.

Pause after any step; save the artifact and next action.

**Free tool path.** Your existing files. Counting elements by hand on two screens takes fifteen minutes and is accurate enough to steer decisions.

### Output

Two real screens migrated onto the system; An adoption figure per screen with the counting method stated; A blockers list with a decision for each; Any product change made to fit the system, recorded

### Checks

- Why migrate a real screen rather than a demonstration one? Answer: Because demonstration screens are built from what exists and prove nothing. Real screens contain the awkward cases that reveal what the system lacks.
- What is a blocker worth? Answer: More than a smooth migration. Each one names a missing component, a wrong rule or a real gap, which is exactly the information the system needs.
- When is changing the screen to fit the system wrong? Answer: When it removes a distinction people were using. Consistency that deletes meaning is a regression, and the decision must be recorded rather than absorbed.

### Rubric and remediation

**Two real screens are migrated**

Adequate evidence: Two migrated screens from actual product work, not demonstrations.

- 0 — No migration.
- 1 — One screen, or a demonstration screen.
- 2 — Two real screens migrated.
- 3 — As adequate, and the two are different kinds of screen so the comparison is meaningful.

If below 2: Choose two screens you actually built earlier and rebuild them from the system. Show at recheck: The migrated screens.

**Adoption is measured with a stated method**

Adequate evidence: A figure per screen with the counting method written down.

- 0 — No measurement.
- 1 — An impression of coverage.
- 2 — Counted figures with the method stated.
- 3 — As adequate, and the method is repeatable by someone else.

If below 2: Count elements and system-provided elements on each screen and write how you counted. Show at recheck: The adoption figures.

**Blockers are listed with decisions**

Adequate evidence: Each blocker with a decision: add, leave, or change the screen.

- 0 — Blockers worked around silently.
- 1 — Listed without decisions.
- 2 — Each has a decision and a reason.
- 3 — As adequate, and accepted additions have gone into the governance process rather than straight into the system.

If below 2: List everything that could not come from the system and decide each one explicitly. Show at recheck: The blockers list.

**Product changes made to fit the system are recorded**

Adequate evidence: Any simplification of a screen recorded with what it removed.

- 0 — Screens simplified silently.
- 1 — Changes noted without what was lost.
- 2 — Each recorded with what it removed and why that is acceptable.
- 3 — As adequate, and one change was rejected because it would have removed an evidenced distinction.

If below 2: Compare the migrated screens with the originals and record anything that disappeared. Show at recheck: The change record.

### Portfolio contribution

Adoption figures with a blockers list are unusually concrete evidence that a system was used rather than merely built.

### Assigned resources

- R11: [GOV.UK Design System: patterns](https://design-system.service.gov.uk/patterns/) — One pattern, read for how components combine into a working screen. Purpose: Shows composition as the route to coverage rather than adding components. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Government task patterns; take the composition approach, not the specific screens. Fallback: R02.
- R67: [Semantic Versioning 2.0.0](https://semver.org/) — The rules for additive changes. Purpose: Frames additions from migration as minor changes with a version and a note. Effort: 10–15 min. Free reading, no account, CC BY 3.0. Verified 2026-09-06. Written for software APIs; the design-system application is yours. Fallback: R18.

## Lesson 10: What the system guarantees

Stable ID: m13-l10-v1. Core. Areas 12. Optional effort ~120 min.

**Objective.** Write the accessibility guarantees your system makes, prove each with a check, and state plainly what remains the responsibility of whoever uses it.

**Bring forward.** Your m11 checks and your component specifications.

A system's greatest accessibility value is making the right thing the default. Its greatest risk is people assuming it guarantees more than it does.

### Learn

A component can guarantee its own properties: that its focus ring meets contrast on the surfaces it permits, that its keyboard behaviour matches the pattern, that its states are distinguishable without colour. Those are testable in isolation and worth stating, because they remove decisions from every future screen.

What a component cannot guarantee is what happens when it is composed. Heading order is a property of the page; focus order depends on arrangement; contrast depends on the surface someone places it on, which is why the permitted-surfaces rule exists. Being explicit about this split is what stops a team believing the system made the product accessible.

The responsibilities list is the other half of the guarantee. Whoever uses the system still owns the page structure, the content, the alternative text, the reading order and the testing. Writing that down is not a disclaimer; it is the instruction that makes the guarantee usable.

Every guarantee needs a re-runnable check, or it decays. A contrast pair that passed when the token was chosen fails silently when the token changes, unless something re-checks it. At this scale the check can be manual and written down; what matters is that it exists and is repeated when the component changes.

**Common misconception.** “We use an accessible design system, so the product is accessible.” The system can make the defaults right. Structure, content, order, and testing remain with the person building the page, and most real failures live there.

### Worked example

Four guarantees were written. Focus rings meet contrast on all permitted surfaces — checked by measurement, with the surfaces listed. Interactive components match their documented keyboard behaviour — checked by walking each key table. States are distinguishable without colour — checked in greyscale. Text tokens meet the contrast threshold in their permitted pairs — checked by measurement. Four responsibilities were written opposite: page heading order, alternative text for images you supply, reading order of your composition, and testing the assembled page. The statement ended by saying the system claims no conformance, since conformance is a property of a page.

#### What the system guarantees

Write the accessibility guarantees your system makes, prove each with a check, and state plainly what remains the responsibility of whoever uses it.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Your existing checks written up as a repeatable list. No auditing tool or service is required at this scale.

- Starting material: Your m11 results and component pages.
- Create HaruCourse/Practice/m13-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Separate component from composition

- List accessibility properties your components can own alone.
- List the ones that depend on how they are composed.

**You should end up with:** Two lists: what a component can guarantee alone, and what depends on how components are composed.

Worksheet fields for this step:

- Accessibility properties a component can guarantee by itself
- Properties that depend on how components are put together — Heading order, focus order across a page, reading order, and whether the right alternative text was supplied.

<details>
<summary>Help with this step</summary>

- **Component-owned:** Something true of the component wherever it is used: its own focus ring, its keyboard behaviour, whether its states differ without colour.
- **Composition-owned:** Something that only exists once components are arranged: heading order, focus order across a page, reading order. No component can own it.

Stuck starting? Take one accessibility property and ask whether it could be true of the component sitting alone on an empty page.

Is it enough? Nothing on the component list depends on what surrounds it.

</details>

#### 2. Write the guarantees

**See it first.** Made-up example. Writing accessibility guarantees for a tool-library system, and writing one that covered everything.

- **What I wrote:** “All components are accessible.” It was the shortest possible version and it felt like the strongest.
- **What somebody did with it:** Built a page from four components, assumed the page was accessible because the parts were, and shipped it with three level-one headings and a focus order that jumped backwards.
- **What my sentence had promised:** Everything, including things no component can own. Nothing in a card can decide the heading order of a page it does not know about.
- **What I wrote instead:** Four narrow statements with conditions. Focus rings meet contrast on the five permitted surfaces. Interactive components match their documented keyboard behaviour. States are distinguishable in greyscale. Text tokens meet the threshold in their permitted pairs.
- **What went beside them:** Four responsibilities, in the same size type: heading order, alternative text, reading order, and testing the assembled page.

**The wrong turn:** The wrong turn is writing the broad guarantee, because it is shorter and sounds more confident. It transfers responsibility for the things you cannot control onto a promise you cannot keep.

**What it costs:** Four conditioned statements plus four responsibilities is a page rather than a sentence, and it reads as less impressive to somebody skimming for reassurance.

**Still unknown:** Still unknown: whether the responsibilities list is complete. It covers what I have met so far, and a person building an unusual page will find more.

- Write each guarantee as a testable statement.
- Include the conditions it holds under, such as permitted surfaces.

**You should end up with:** Four guarantees written as testable statements, each naming the conditions it holds under.

Worksheet fields for this step, revealed a few at a time in the app:

- Guarantee 1 · the statement and the conditions it holds under
- Guarantee 2 · the statement and the conditions it holds under
- Guarantee 3 · the statement and the conditions it holds under
- Guarantee 4 · the statement and the conditions it holds under

<details>
<summary>Help with this step</summary>

- **Guarantee:** Something you have tested and will keep testing. It is a promise with a check behind it rather than a description of intent.
- **Conditions:** Where the guarantee holds: which surfaces, which variants, which states. Without them the promise quietly covers cases nobody checked.

Stuck starting? Write the conditions before the statement. They are what stop the statement growing.

Is it enough? Each guarantee names what it covers and, by implication, what it does not.

</details>

#### 3. Attach a check to each

- Write the check that proves each guarantee.
- Run every check now and record the result.

**You should end up with:** A re-runnable check attached to every guarantee, with all of them run today and the results recorded.

**Try it with help.** Six statements from a made up tool-library system. For each one, decide whether the system can guarantee it.

- The focus ring meets the contrast threshold on every surface the foundations permit.
  - **the system can guarantee it** — It is a property of the component and a fixed list of surfaces, measurable today and re-measurable when either changes.
  - the page author owns it — They cannot change it without leaving the system.
  - nobody can guarantee it — It is one of the more straightforwardly checkable things here.
- The page has one page title and no skipped heading levels.
  - the system can guarantee it — No component knows what else is on the page. A heading component can be correct and a page of them wrong.
  - **the page author owns it** — It exists only once components are arranged, which makes it composition rather than component.
  - nobody can guarantee it — It is entirely checkable, by the person who built the page.
- Every interactive component behaves as its documented key table says.
  - **the system can guarantee it** — The table is yours and the behaviour is in the component. Walking each table is the check, and it is re-runnable.
  - the page author owns it — They receive the behaviour; they do not build it.
  - nobody can guarantee it — It takes an afternoon to check and can be repeated.
- Every image has appropriate alternative text.
  - the system can guarantee it — The component can require alternative text. It cannot know whether the words supplied describe the picture.
  - **the page author owns it** — The words come with the content. This is the clearest example of a shared responsibility landing on the author.
  - nobody can guarantee it — The author can, for their own page.
- The product conforms to WCAG 2.2 level AA.
  - the system can guarantee it — Conformance is a property of a page, and a component set is not a page.
  - the page author owns it — They own testing their page, and even then conformance rests on a full tested build rather than on a claim.
  - **nobody can guarantee it** — Not as a standing promise about a product that keeps changing. This is the sentence the boundary in step 5 exists to keep out.
- Every documented state is distinguishable with colour removed.
  - **the system can guarantee it** — The states page makes it checkable in one look, and the check can be re-run whenever a state changes.
  - the page author owns it — They do not define the states.
  - nobody can guarantee it — It is one of the easiest checks in the whole system.

**Then:** Now sort your own candidate guarantees the same way, and move anything in the second group into the responsibilities list.

**What to watch for:** The line falls between one component and several arranged together. Anything that only exists once things are composed belongs to the page author, and conformance belongs to nobody as a standing promise.

Worksheet fields for this step:

- The check that proves each guarantee, written so it can be re-run — Re-run means somebody else could do it when the component changes, in a few minutes.
- The result of running every check now — Run them today. A guarantee whose check has never been run is a claim.

<details>
<summary>Help with this step</summary>

- **Re-runnable check:** One somebody else could carry out in a few minutes when the component changes. A guarantee without one decays silently.
- **Running it now:** Doing the check today rather than describing it. An unrun check is a plan.

Stuck starting? Run the greyscale check on your states page first; it is the quickest of the four.

Is it enough? Every guarantee has a result beside it from today.

</details>

#### 4. Write the responsibilities

**See it first.** Made-up example. Writing the responsibilities list for a tool-library system, and writing it as small print.

- **What I wrote:** A short paragraph at the foot of the guarantees page, beginning “Note that the system cannot guarantee page-level accessibility”, in the grey used for footnotes.
- **How it read:** As a disclaimer. Something protecting me rather than something telling anybody what to do, and grey text under a list of guarantees is read by nobody.
- **What happened:** A page shipped with three level-one headings. The person who built it could tell you the system was accessible and had never read the paragraph.
- **What I changed:** Four numbered responsibilities beside the four guarantees, in the same type, written as instructions: set one page title, supply alternative text for your own images, check the reading order of your composition, test the assembled page.
- **Why that worked better:** Each one is a thing to do rather than a thing the system does not do. Somebody reading the guarantees now reads their own tasks at the same moment.

**The wrong turn:** The wrong turn is writing responsibilities as a disclaimer, because after a page of promises the natural shape is a caveat. A caveat protects you; an instruction helps them.

**What it costs:** Four instructions beside four guarantees makes the page look like more work for the reader, which is exactly what it is honestly reporting.

**Still unknown:** Still unknown: whether people read the second column. It is at least in the same type, on the same page, which the footnote never was.

- List what remains the page author's job.
- Be specific: structure, content, order, testing.

**You should end up with:** A specific list of what remains the page author’s job.

Worksheet fields for this step:

- What remains the page author’s job, specifically

<details>
<summary>Help with this step</summary>

- **Responsibility list:** What the system does not do, written as clearly as what it does. It is what stops a guarantee being read as a guarantee about the page.

Stuck starting? Write it as instructions to somebody building a page, not as a disclaimer.

Is it enough? Each item names a specific thing somebody must do rather than an area to be careful about.

</details>

#### 5. State the boundary

- Write that the system claims no page-level conformance.
- Save the guarantees, checks and responsibilities together.

**You should end up with:** A written statement that the system claims no page-level conformance, and the repair the Check questions asked for.

Worksheet fields for this step:

- The sentence saying the system claims no page-level conformance — Conformance is a property of a page. A component set cannot have it, whatever it guarantees.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Page-level conformance:** A claim about a whole tested page. Components are not pages, so a system cannot carry it however good its parts are.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write it in one sentence, positioned beside the guarantees rather than at the bottom of the page.

Is it enough? Somebody reading the guarantees would meet the boundary in the same breath.

</details>

**Save and continue.** Saved for you: Your two lists, the guarantees, the checks and the responsibilities save as you type, on this device first and then online. Kept outside the app: The guarantees page sits with the system documentation in your own folder. The checks belong beside it so somebody can re-run them without asking you. What your creator sees: Your creator reads the responsibilities list beside the guarantees. A page of guarantees with no responsibilities opposite is the version that causes the damage. Your next action: Open Your work and choose Ready for review. The next lesson finds out which version of your system is actually true.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Move anything that depends on arrangement into the responsibilities list.

</details>

<details>
<summary>Hint 2</summary>

For each guarantee write how you would prove it, then do it and record what you found.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: What the system guarantees.
Task: Write the accessibility guarantees your system makes, prove each with a check, and state plainly what remains the responsibility of whoever uses it.
Challenge one thing at a time, and start with the mistake this lesson is about: “We use an accessible design system, so the product is accessible.” The system can make the defaults right. Structure, content, order, and testing remain with the person building the page, and most real failures live there.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the guarantees list and ask whether guarantees are limited to component-level properties. Look at the check results and ask whether each guarantee has a re-runnable check that was run. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m13-l10-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Guarantees are limited to component-level properties: A list where every item is testable in the component in isolation. Each guarantee has a re-runnable check that was run: A written check per guarantee with a recorded result. Responsibilities left to the user are specific: A list naming structure, content, order and testing at minimum. No page-level conformance is claimed: An explicit statement that the system does not claim conformance.

**Bring forward:** Guarantees with checks and a responsibilities list demonstrate a rare combination: system thinking and honesty about its limits. Module handoff: Prepare delivery in m14


### Practice and pause points

- Separate component from composition (~25 min): List accessibility properties your components can own alone. List the ones that depend on how they are composed.
- Write the guarantees (~30 min): Write each guarantee as a testable statement. Include the conditions it holds under, such as permitted surfaces.
- Attach a check to each (~25 min): Write the check that proves each guarantee. Run every check now and record the result.
- Write the responsibilities (~25 min): List what remains the page author's job. Be specific: structure, content, order, testing.
- State the boundary (~15 min): Write that the system claims no page-level conformance. Save the guarantees, checks and responsibilities together.

Pause after any step; save the artifact and next action.

**Free tool path.** Your existing checks written up as a repeatable list. No auditing tool or service is required at this scale.

### Output

A list of guarantees the system makes; A re-runnable check per guarantee; A list of responsibilities left to the user of the system; A statement that the system claims no page-level conformance

### Checks

- What can a component guarantee alone? Answer: Its own properties: focus contrast on permitted surfaces, documented keyboard behaviour, states distinguishable without colour. Anything depending on arrangement it cannot.
- Why list the user's responsibilities? Answer: Because without them people assume the system covers structure, content and testing, which is where most real accessibility failures happen.
- Why can a system not claim conformance? Answer: Because conformance is a property of a page, and pages are composed by other people from content the system never sees.

### Rubric and remediation

**Guarantees are limited to component-level properties**

Adequate evidence: A list where every item is testable in the component in isolation.

- 0 — Guarantees include page-level properties.
- 1 — Mostly component-level with one composition claim.
- 2 — All items are component-level with their conditions stated.
- 3 — As adequate, and the conditions name the permitted surfaces or contexts.

If below 2: Move anything that depends on arrangement into the responsibilities list. Show at recheck: The guarantees list.

**Each guarantee has a re-runnable check that was run**

Adequate evidence: A written check per guarantee with a recorded result.

- 0 — Guarantees asserted without checks.
- 1 — Checks described without results.
- 2 — Every check written and run with results recorded.
- 3 — As adequate, and the checks are written to be repeated when a component changes.

If below 2: For each guarantee write how you would prove it, then do it and record what you found. Show at recheck: The check results.

**Responsibilities left to the user are specific**

Adequate evidence: A list naming structure, content, order and testing at minimum.

- 0 — No responsibilities listed.
- 1 — A general statement that users must also do work.
- 2 — Specific responsibilities named.
- 3 — As adequate, and each responsibility points to the module or check that covers it.

If below 2: Write what a page author still has to do that no component can do for them. Show at recheck: The responsibilities list.

**No page-level conformance is claimed**

Adequate evidence: An explicit statement that the system does not claim conformance.

- 0 — Conformance implied.
- 1 — Ambiguous wording.
- 2 — Explicit statement present.
- 3 — As adequate, and it explains why conformance is a property of a page.

If below 2: Add one sentence stating what the system does not claim and why. Show at recheck: The boundary statement.

### Portfolio contribution

Guarantees with checks and a responsibilities list demonstrate a rare combination: system thinking and honesty about its limits.

### Assigned resources

- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — The patterns for your interactive components, used as the standard your keyboard guarantee is checked against. Purpose: Gives an external reference for the behaviour you are guaranteeing. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06; pages carry no date. Guidance rather than a conformance standard; matching it is not conformance. Fallback: R14.
- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The thresholds and exceptions used for the contrast guarantees. Purpose: Supplies the measurable basis for the focus and text guarantees. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. A ratio is a floor; the guarantee holds only for the permitted surfaces you list. Fallback: R29.

## Lesson 11: One source of truth, and the copies

Stable ID: m13-l11-v1. Core. Areas 12. Optional effort ~120 min.

**Objective.** Decide which representation of your system is authoritative, write how the others stay in step, and find the drift that already exists.

**Bring forward.** Your documentation, built components and any design files.

Every system has a design representation and a code representation, and they diverge. Deciding which one is true is what prevents arguments nobody can settle.

### Learn

Design and code representations of the same component are never quite identical, and when a screen disagrees with a design file, someone has to decide which is right. Naming the authority in advance settles it: usually the code, because that is what people meet, with the design file as a working copy. Whichever you choose, choosing is what matters.

Copies should announce themselves. A design file that says at the top which version of the system it reflects, and when it was last synchronised, prevents a designer building against a component that changed a month ago — which is the commonest way drift becomes screens.

Drift is not preventable at any scale you will work at; the goal is finding it quickly. A short periodic audit — compare three components in both representations, record the differences — is enough at this size, and it is far cheaper than the confusion it prevents.

The change process is where drift is created. If a change updates the code and not the documentation, or the design file and not the code, the divergence starts immediately. Writing the steps a change must take through every representation is the practical fix, and it belongs with your governance page.

**Common misconception.** “The design file is the design system.” It is one representation. What people encounter is the built product, and a system whose authority lives in a file most of the team cannot open will be overtaken by the code within weeks.

### Worked example

The code was named authoritative, with the documentation generated from or checked against it and any design file marked a working copy carrying the version it reflected. An audit of three components found three drifts already: the card's padding differed by 4 pixels between the drawing and the build, the button had a disabled state in the drawing that had never been built, and the documentation described a truncation rule the component did not implement. Each was recorded, and the change process was rewritten to require the documentation update in the same change as the code.

#### One source of truth, and the copies

Decide which representation of your system is authoritative, write how the others stay in step, and find the drift that already exists.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Your existing files. The audit is a comparison by eye and by measurement; nothing needs syncing software.

- Starting material: Your documentation and built components.
- Create HaruCourse/Practice/m13-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Choose the authority

**See it first.** Made-up example. Choosing the authority for a tool-library system, and choosing the one that was easiest to change.

- **What I chose:** The design file. It is where I work, it is where the components look right, and changing something there takes a minute.
- **What happened over six weeks:** Three changes were made in the build and not in the file, because a screen needed them that afternoon. Two changes were made in the file and never built.
- **What people were actually using:** The build. Every screen in the product came from it, and nobody except me could open the design file at all.
- **What that made the authority:** A document describing a system that did not exist, which nobody consulted, being overtaken weekly by the one everybody used.
- **What I changed:** Named the code authoritative, with the documentation checked against it, and marked the design file a working copy carrying the version it reflects.

**The wrong turn:** The wrong turn is naming the representation you work in, because authority feels like it should sit where the design happens. What people encounter is the built product, and a system whose truth lives somewhere most of the team cannot open is overtaken within weeks.

**What it costs:** It means your own working file is officially not the system, which is uncomfortable, and a change now has to reach the code before it counts.

**Still unknown:** Still unknown: whether this survives somebody else joining who works only in the design file. The rule would need restating rather than rewriting.

- Decide which representation is authoritative and write why.
- State what the others are and how they should be treated.

**You should end up with:** One representation named authoritative with the reason, and a statement of what the others are.

Worksheet fields for this step:

- Which representation is authoritative, and why — The one people actually encounter is usually the built code. Whatever you choose, say why.
- What the others are, and how they should be treated

<details>
<summary>Help with this step</summary>

- **Authoritative representation:** The one that is true when two disagree. Naming it is what stops an argument nobody can settle.
- **Copy:** Any other representation. It is useful, it is not the system, and it has to say so on itself.

Stuck starting? Ask which representation the product is actually built from, and start there.

Is it enough? If two representations disagreed tomorrow, your page says which one wins.

</details>

#### 2. Audit for drift

- Compare three components across representations.
- Measure rather than eyeballing where you can.
- Record every difference, however small.

**You should end up with:** Three components compared across every representation, with each difference measured rather than eyeballed.

Worksheet fields for this step, revealed a few at a time in the app:

- Component 1 · every difference between representations, however small
- Component 2 · every difference between representations, however small
- Component 3 · every difference between representations, however small

<details>
<summary>Help with this step</summary>

- **Drift:** Two representations quietly disagreeing. It is inevitable; the only question is how quickly it is found.
- **Measuring:** Reading the computed value in the inspector and the number in the drawing, rather than looking at both and deciding they match.

Stuck starting? Open the inspector on the built component and the drawing side by side, and compare one value at a time.

Is it enough? Every difference is written down, including the ones too small to matter.

</details>

#### 3. Reconcile

- For each drift decide which version is correct.
- Update the others and record what changed.

**You should end up with:** Each drift resolved by deciding which version is correct, with anything surprising recorded.

**Try it with help.** Six differences found auditing a made up tool-library system. For each one, decide what it tells you.

- Card padding is 16 in the drawing and 12 in the build. The build was changed to fit a narrow screen and the drawing was never updated.
  - **the build is right** — It was changed for a reason that still applies, and it is what every screen currently shows. The drawing is behind.
  - the drawing is right — The drawing records an intention that a real constraint overtook.
  - the documentation is describing something that never existed — Both values existed; one is simply older.
- The drawing has a disabled state for the button. Nothing in the build implements it, and no screen uses it.
  - the build is right — The build is right about today and says nothing about whether the state should exist.
  - the drawing is right — It is right that a disabled state is probably needed. It is not evidence that one exists.
  - **the documentation is describing something that never existed** — A state that was drawn, documented and never built is the commonest drift of all, and the honest fix is to build it or to remove it from the documentation.
- The documentation says the title truncates to two lines. The build truncates to one.
  - the build is right — Truncating to one line loses the second half of most titles, and the two-line rule was decided against real content.
  - **the drawing is right** — The rule was reasoned from real titles. The build is a defect, and this is a case where the authority is true and wrong.
  - the documentation is describing something that never existed — It was decided and specified; it simply was not built.
- The focus ring is one colour in the drawing and another in the build. The build’s version passes contrast on the tinted panel and the drawing’s does not.
  - **the build is right** — It was changed for a measured reason during the accessibility work. The drawing predates the measurement.
  - the drawing is right — It looks better and fails a check that matters more.
  - the documentation is describing something that never existed — Both rings exist; one has been superseded.
- The drawing shows a compact variant with an image. The build has no image slot in compact, and the specification says compact has none.
  - **the build is right** — The build and the specification agree, which makes the drawing the odd one out, probably an experiment nobody deleted.
  - the drawing is right — One representation against two, with no recorded decision behind it.
  - the documentation is describing something that never existed — The documentation is correct here; the drawing is the stray.
- The documentation describes a hover treatment for the unavailable card. The specification marked that cell as impossible.
  - the build is right — The build follows the specification, so it is right and it is not the interesting finding.
  - the drawing is right — No drawing is involved.
  - **the documentation is describing something that never existed** — Somebody wrote a section for completeness that contradicts a decision already made. Written documentation drifts towards being tidy rather than being true.

**Then:** Now decide each of your own drifts, and note the ones where the authoritative version turned out to be wrong.

**What to watch for:** The authority decides which version is true today, not which is right. Two of these are cases where the authoritative build is true and wrong, and both need fixing in the build rather than in the record.

Worksheet fields for this step:

- For each drift: which version is correct, and what you changed
- Anything that surprised you about which one was right — The build is right more often than people expect, because it is the version that had to work.

<details>
<summary>Help with this step</summary>

- **Which one is correct:** Not automatically the authoritative one. The authority decides which is true today; it does not decide which is right.

Stuck starting? For each difference, find out when and why each version changed before deciding which is correct.

Is it enough? At least one decision went against the authoritative representation, or you can say why none did.

</details>

#### 4. Fix the process

**See it first.** Made-up example. Fixing the change process for a tool-library system, and fixing it with an intention.

- **What I wrote:** “Keep the documentation and the design file up to date when components change.” True, agreed by everybody, and impossible to fail.
- **What happened over the next month:** Three changes reached the code. One reached the documentation. The design file was updated once, for a change that had not been made anywhere else.
- **Why the sentence had not helped:** It describes a state rather than a step. Nothing in it ever tells you that you are not finished, because nothing in it is a thing to do.
- **What I replaced it with:** Four steps a change must pass: change the code, update the component documentation, update the changelog, mark the design file with the version it now reflects. A change is not done until all four are ticked.
- **What that changed:** The next change took eight minutes longer and left nothing behind. The one after that revealed the design file had been stale for six weeks, which the checklist made visible rather than the drift audit.

**The wrong turn:** The wrong turn is writing the process as a principle, because principles are what change processes usually sound like. A principle cannot be unfinished, so nothing ever reminds you that you have only done part of it.

**What it costs:** Four steps make every change slower, including the one-line urgent ones, and there will be afternoons when you skip them knowingly.

**Still unknown:** Still unknown: whether the checklist survives pressure. It is a list I wrote for myself, and nothing enforces it except noticing.

- Write the steps a change must take through every representation.
- Add it to the governance page.

**You should end up with:** The steps a change must take through every representation, added to the governance page.

Worksheet fields for this step:

- The steps a change must take through every representation
- How this reached the governance page

<details>
<summary>Help with this step</summary>

- **Updating one representation:** The guaranteed way to produce drift. A change process that does not name every representation produces it by design.

Stuck starting? Write the steps as a checklist a change has to pass, not as a principle.

Is it enough? The process names every representation you have, including the working copy.

</details>

#### 5. Label the copies

- Mark each non-authoritative representation with its version and date.
- Save the audit and the updated process.

**You should end up with:** Every non-authoritative representation labelled with what it reflects and when.

Worksheet fields for this step:

- What each non-authoritative representation now says about itself
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Labelling a copy:** Writing on it what version it reflects and when it was updated. It turns a misleading document into a dated one.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Put the label on the first page of the copy, not in a note at the end.

Is it enough? Somebody opening a copy learns immediately that it is one.

</details>

**Save and continue.** Saved for you: Your authority decision, the drift audit, the reconciliations and the process save as you type, on this device first and then online. Kept outside the app: The representations themselves stay in your own folder. Label the copies in the files rather than only here, or the label does not reach anybody opening them. What your creator sees: Your creator reads the drifts you found and which of them the build got wrong. An audit with no findings usually means the comparison was made by eye. Your next action: Open Your work and choose Ready for review. The last lesson of the module reviews the system and removes something from it.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Choose the representation people actually meet and write one sentence naming it as authoritative.

</details>

<details>
<summary>Hint 2</summary>

Add a line at the top of each copy stating the version it reflects and when it was synchronised.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: One source of truth, and the copies.
Task: Decide which representation of your system is authoritative, write how the others stay in step, and find the drift that already exists.
Challenge one thing at a time, and start with the mistake this lesson is about: “The design file is the design system.” It is one representation. What people encounter is the built product, and a system whose authority lives in a file most of the team cannot open will be overtaken by the code within weeks.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the authority statement and ask whether an authoritative representation is named with a reason. Look at the labelled copies and ask whether copies state what they reflect and when. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m13-l11-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** An authoritative representation is named with a reason: A written statement naming the authority and why. Copies state what they reflect and when: Each non-authoritative representation labelled with version and date. A drift audit covers at least three components: Three components compared with differences recorded, measured where possible. The change process updates every representation: A written process requiring all representations to be updated together.

**Bring forward:** A drift audit with real findings is concrete evidence of system maintenance, which is the part of systems work most portfolios never show. Module handoff: Prepare delivery in m14


### Practice and pause points

- Choose the authority (~25 min): Decide which representation is authoritative and write why. State what the others are and how they should be treated.
- Audit for drift (~30 min): Compare three components across representations. Measure rather than eyeballing where you can. Record every difference, however small.
- Reconcile (~25 min): For each drift decide which version is correct. Update the others and record what changed.
- Fix the process (~25 min): Write the steps a change must take through every representation. Add it to the governance page.
- Label the copies (~15 min): Mark each non-authoritative representation with its version and date. Save the audit and the updated process.

Pause after any step; save the artifact and next action.

**Free tool path.** Your existing files. The audit is a comparison by eye and by measurement; nothing needs syncing software.

### Output

A named authoritative representation with the reason; A statement on every copy of what it reflects and when; A drift audit of at least three components; A change process that updates every representation

### Checks

- Why name an authoritative representation? Answer: Because when two disagree someone must decide, and deciding in advance settles the argument in one sentence instead of every time.
- Why label copies with a version and date? Answer: Because otherwise someone designs against a component that changed a month ago, and the drift becomes screens before anyone notices.
- Where does drift come from? Answer: A change process that updates one representation and not the others. Fixing the process is more effective than repeated clean-ups.

### Rubric and remediation

**An authoritative representation is named with a reason**

Adequate evidence: A written statement naming the authority and why.

- 0 — No authority named.
- 1 — Named without reasoning.
- 2 — Named with a reason connected to what people actually encounter.
- 3 — As adequate, and the statement says how a disagreement is resolved in practice.

If below 2: Choose the representation people actually meet and write one sentence naming it as authoritative. Show at recheck: The authority statement.

**Copies state what they reflect and when**

Adequate evidence: Each non-authoritative representation labelled with version and date.

- 0 — Copies unlabelled.
- 1 — Some labelled.
- 2 — All labelled with version and date.
- 3 — As adequate, and the label says what to do if the copy disagrees with the authority.

If below 2: Add a line at the top of each copy stating the version it reflects and when it was synchronised. Show at recheck: The labelled copies.

**A drift audit covers at least three components**

Adequate evidence: Three components compared with differences recorded, measured where possible.

- 0 — No audit.
- 1 — Compared by eye without recording specifics.
- 2 — Three compared with differences recorded.
- 3 — As adequate, and at least one drift was found that had already reached a screen.

If below 2: Pick three components and compare their values across representations, measuring rather than judging. Show at recheck: The audit record.

**The change process updates every representation**

Adequate evidence: A written process requiring all representations to be updated together.

- 0 — No process.
- 1 — A process covering one representation.
- 2 — All representations covered in one change.
- 3 — As adequate, and the process is short enough that it will actually be followed.

If below 2: Write the change steps and add them to the governance page. Show at recheck: The updated process.

### Portfolio contribution

A drift audit with real findings is concrete evidence of system maintenance, which is the part of systems work most portfolios never show.

### Assigned resources

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — How a published system presents code and design together for one component. Purpose: Shows a working answer to the single-source question at a larger scale. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Its scale and staffing differ from yours; scale the approach down deliberately. Fallback: R06.
- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The CSS custom properties sections, read as the mechanism that keeps token values in one place. Purpose: Connects the single-source principle to how values are actually shared in code. Effort: 30 selected min. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.

## Lesson 12: Review the system and remove something

Stable ID: m13-l12-v1. Core. Areas 12. Optional effort ~120 min.

**Objective.** Review the system against how it has actually been used, remove or deprecate at least one thing, and write the six-month plan with its maintenance cost.

**Bring forward.** Your adoption figures, blockers, decision log and drift audit.

Systems accumulate. Reviewing what is unused and removing it is the maintenance work that keeps a system usable.

### Learn

The review question is what has actually been used. Components that appear in no screen are pure cost: they are documented, maintained, versioned and read by people deciding what to use. Removing them makes the rest easier to hold in mind, which is the main thing a small system has going for it.

Workarounds are the other half. Where someone built a one-off instead of using the system, something did not fit — a missing component, a wrong content rule, a variant that could not stretch. Those are the additions worth making, and they are visible in your migration blockers and your own screens.

Removal is a breaking change and should go through the same route as an addition: proposed, decided, versioned, announced with a deprecation period. Systems that remove things quietly are as untrustworthy as systems that change values quietly.

The plan matters because systems fail slowly. Six months of no maintenance produces documentation nobody trusts and drift nobody has measured. An honest estimate — a few hours a month, with what happens if that time is not available — is more useful than an ambitious plan that will not be followed.

**Common misconception.** “A bigger system is a more mature system.” A system that covers the real cases in twelve components is more mature than one with sixty that nobody can navigate. Maturity shows in what has been removed.

### Worked example

The review found three unused components, two of which had been built speculatively in the first week; both were deprecated with a note, and the third was kept because a planned screen needed it, with the reason recorded. Two workarounds were found in the learner's own screens: a status treatment the system flattened and a compact list row that did not exist. The first became a governance proposal; the second was accepted as a minor addition. The plan estimated three hours a month, listed what would be skipped if that was not available — the drift audit first, documentation last — and named the review date.

#### Review the system and remove something

Review the system against how it has actually been used, remove or deprecate at least one thing, and write the six-month plan with its maintenance cost.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Your existing artefacts and a written plan. Nothing new is required.

- Starting material: Your adoption data and decision log.
- Create HaruCourse/Practice/m13-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Review against use

- List every component and where it is actually used.
- Mark anything used nowhere.

**You should end up with:** Every component listed with where it is actually used, and anything used nowhere marked.

Worksheet fields for this step:

- Every component and where it is actually used — Search your screens. Where you believe it is used is not the same as where it is.
- Anything used nowhere

<details>
<summary>Help with this step</summary>

- **Review against use:** Judging the system by what the product actually contains rather than by whether the set feels complete.
- **Unused component:** Cost with no benefit. It is maintained, documented, versioned and looked at by everybody learning the system, and it does nothing.

Stuck starting? Search your screens for each component name rather than working from memory.

Is it enough? Every component has a list of places or the word nowhere beside it.

</details>

#### 2. Find the workarounds

**See it first.** Made-up example. Reviewing a tool-library system, and reviewing it for completeness.

- **How I started:** Went through the system asking what was missing. A modal, a tabs component, a pagination control — three obvious holes in any component set.
- **What that list was based on:** Other people’s systems. None of the three appeared anywhere in my product, and building them would have added three components nobody would use.
- **What I did instead:** Went through the screens asking what had been built outside the system. That is a search of eleven real pages rather than a memory of what systems usually contain.
- **What it found:** Two workarounds. A status treatment that carried a distinction the system flattens, and a compact list row that did not exist. Both were mine, built in a hurry, and both were real gaps.
- **What happened to them:** The status went through governance as a proposal. The list row was accepted as a minor addition. Neither would have appeared on a list of what a component set ought to have.

**The wrong turn:** The wrong turn is reviewing for completeness, because a component set has an obvious shape and it is easy to notice what is missing from it. It produces components for a product you do not have.

**What it costs:** Reviewing against use means the system stays lopsided: no modal, no tabs, and two things nobody else’s system has. That is the correct shape for this product and it looks unfinished beside a published one.

**Still unknown:** Still unknown: whether a modal will be needed next quarter. If it is, it arrives through governance with two screens behind it rather than by anticipation.

- Look through your screens for one-offs built instead of using the system.
- For each, name what did not fit.

**You should end up with:** Every one-off built instead of using the system, with what did not fit named for each.

Worksheet fields for this step:

- Every one-off built on a screen instead of using the system — Your own screens count. A workaround you built yourself is the clearest evidence of a gap.
- For each: what did not fit

<details>
<summary>Help with this step</summary>

- **Workaround:** Something built on a screen rather than taken from the system. Each one is a gap, and the person who built it already knows what the gap is.

Stuck starting? Search your screens for styling that does not come from the system, rather than listing what the system lacks.

Is it enough? Every workaround names what did not fit, in the words of the person who built it.

</details>

#### 3. Remove and add through the process

- Deprecate at least one unused component with a note and a period.
- Propose the additions the workarounds justify.
- Version both changes correctly.

**You should end up with:** At least one thing deprecated through the process, the justified additions proposed, and both changes versioned.

**Try it with help.** Six components from a made up tool-library system, reviewed against real use. For each one, decide what should happen.

- The card. Used on six screens.
  - **keep it** — Six uses is exactly what a component is for. Nothing to decide.
  - deprecate it — It is the most used thing in the system.
  - keep it and record why — No reasoning is needed for something this widely used.
- A statistics tile, built in the first week, used nowhere.
  - keep it — It costs maintenance, documentation and the attention of everybody learning the system, and returns nothing.
  - **deprecate it** — Speculative components from the first week are the classic case. Deprecate with a note and a period, through the process.
  - keep it and record why — There is no why. Nothing is planned that needs it.
- A notification banner, used nowhere yet, and the booking flow being designed this month needs it.
  - keep it — Keeping it silently means the next reviewer deprecates it, having no idea why it is there.
  - deprecate it — It has a use arriving within weeks, and deprecating it now means building it again in a month.
  - **keep it and record why** — Keep it with the reason and the expected date attached. That note is what survives until the flow exists.
- An older button variant, used on two screens, both of which are being retired next month.
  - keep it — Its only uses are going away, so keeping it means carrying it indefinitely for nothing.
  - **deprecate it** — Deprecate now with a period that outlasts the two screens. The window and the retirement can run together.
  - keep it and record why — There is no reason to keep it once the screens go.
- The filter chip, added last month through governance, used on two screens.
  - **keep it** — Two uses, added deliberately, doing its job.
  - deprecate it — Nothing about it has failed.
  - keep it and record why — The governance log already records why it exists.
- A tabs component, built because most design systems have one, used nowhere and nothing planned.
  - keep it — It is in the system because other systems have one, which is a reason about other systems.
  - **deprecate it** — No use, nothing planned. It is the completeness instinct made permanent, and removing it is what maturity looks like.
  - keep it and record why — There is nothing to record beyond a habit.

**Then:** Now decide each of your own components and put the deprecation through your own governance route.

**What to watch for:** Two kinds of keep. One is obvious from use; the other needs a written reason and a date, or the next reviewer removes it. And a component that exists because other systems have one is the easiest thing in any system to remove.

Worksheet fields for this step:

- What you deprecated, with the note and the period
- The additions the workarounds justify, put through governance
- How both changes were versioned

<details>
<summary>Help with this step</summary>

- **Deprecating:** Marking something as going away while keeping it working. Removal is a major change, and it goes through the same process as an addition.
- **Through the process:** Using your own governance route rather than editing directly. A process the owner bypasses is not one.

Stuck starting? Take the component used nowhere and write the deprecation note before anything else.

Is it enough? Nothing was removed or added by editing directly.

</details>

#### 4. Write the plan

**See it first.** Made-up example. Planning six months of maintenance for a tool-library system, and planning for a good month.

- **What I wrote:** Three hours a month: a drift audit, documentation updates, and a look at anything proposed. It was a reasonable estimate of the work.
- **What the third month was like:** A deadline. The three hours did not happen at all, and what got dropped was decided at half past five on a Thursday.
- **What got dropped:** The drift audit, because it feels like checking rather than doing. The documentation got updated, because a change had just been made and it was in front of me.
- **Why that was the wrong order:** Documentation for one change catches up next month anyway. The drift audit is the only thing that finds problems nobody has noticed, and skipping it is invisible for months.
- **What I added to the plan:** A skip order, written in advance: the drift audit is protected, documentation waits, the proposal review waits. Deciding it calmly meant a busy Thursday did not decide it.

**The wrong turn:** The wrong turn is planning the hours without planning what happens when there are none, because the estimate is the part that feels like planning. The busy month decides the order instead, and it always drops the invisible thing.

**What it costs:** Protecting the audit means documentation is sometimes a month behind, and somebody will read a page that describes last month’s component.

**Still unknown:** Still unknown: whether three hours is right. It is an estimate from one month of real work, and the next review is where it gets corrected.

- Estimate monthly maintenance in hours.
- List what gets skipped first if that time is unavailable.
- Set the next review date.

**You should end up with:** A monthly maintenance estimate, an order for what gets skipped first, and the next review date.

Worksheet fields for this step:

- Monthly maintenance, in hours
- What gets skipped first if that time is not available — Deciding the order now is what stops the wrong thing being dropped in a busy month.
- The next review date

<details>
<summary>Help with this step</summary>

- **What gets skipped first:** The order in which maintenance is dropped when the time is not there. Deciding it now prevents the wrong thing being dropped in a busy month.
- **Review date:** A date rather than an intention. Systems accumulate quietly, and the review is what catches it.

Stuck starting? Estimate from what this module actually took rather than from what you hope it will take.

Is it enough? The skip order is written down, so a busy month does not decide it.

</details>

#### 5. Record

- Update the decision log and the changelog.
- Save the review with the plan.

**You should end up with:** The decision log and changelog updated, and the repair the Check questions asked for.

Worksheet fields for this step:

- What you added to the decision log and the changelog
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Closing the loop:** Every decision from this review appearing in the log, and every change in the changelog, so the next review starts from a record rather than from memory.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write the deprecation into the changelog with its version before you close anything.

Is it enough? Somebody picking this up in six months could see what was decided and why.

</details>

**Save and continue.** Saved for you: Your usage review, the workarounds, the deprecation, the proposals and the plan save as you type, on this device first and then online. Kept outside the app: The system, its documentation, the decision log and the changelog all live in your own folder. Nothing about them is uploaded from here. What your creator sees: Your creator reads what you removed and what you kept with a reason. A review that removed nothing is usually a review that measured completeness. Your next action: Open Your work and choose Ready for review. This closes Module 13. Module 14 moves from building the system to working with the people who use it.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Go through your screens and record where each component actually appears.

</details>

<details>
<summary>Hint 2</summary>

Take one unused component and deprecate it properly, including the note.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Review the system and remove something.
Task: Review the system against how it has actually been used, remove or deprecate at least one thing, and write the six-month plan with its maintenance cost.
Challenge one thing at a time, and start with the mistake this lesson is about: “A bigger system is a more mature system.” A system that covers the real cases in twelve components is more mature than one with sixty that nobody can navigate. Maturity shows in what has been removed.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the usage list and ask whether usage is reviewed and unused components identified. Look at the deprecation record and ask whether at least one removal or deprecation went through the process. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m13-l12-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Usage is reviewed and unused components identified: A list of components with where each is used, and the unused ones marked. At least one removal or deprecation went through the process: A deprecation with a note, a period and a version, recorded in the log. Workarounds are found in real screens and decided: One-offs identified with what did not fit and a decision each. The plan has an honest estimate and a skip order: Monthly hours, what is dropped first when time is short, and a review date.

**Bring forward:** A review that removes things, with the reasoning, is the clearest signal that you can maintain a system rather than only launch one. Module handoff: Prepare delivery in m14


### Practice and pause points

- Review against use (~25 min): List every component and where it is actually used. Mark anything used nowhere.
- Find the workarounds (~25 min): Look through your screens for one-offs built instead of using the system. For each, name what did not fit.
- Remove and add through the process (~30 min): Deprecate at least one unused component with a note and a period. Propose the additions the workarounds justify. Version both changes correctly.
- Write the plan (~25 min): Estimate monthly maintenance in hours. List what gets skipped first if that time is unavailable. Set the next review date.
- Record (~15 min): Update the decision log and the changelog. Save the review with the plan.

Pause after any step; save the artifact and next action.

**Free tool path.** Your existing artefacts and a written plan. Nothing new is required.

### Output

A usage review naming unused components; At least one thing deprecated or removed, through the process; Workarounds found in real screens, each with a decision; A six-month plan with an honest maintenance estimate

### Checks

- Why remove unused components? Answer: Because they cost documentation, maintenance and attention while providing nothing. A smaller system is easier to hold in mind, which is a small system's main advantage.
- What does a workaround tell you? Answer: That the system did not fit a real case. It is the most reliable signal of what to add, and it is visible in screens rather than in discussions.
- Why is removal a major change? Answer: Because anyone using the component must change their work. It needs the same process, versioning and notice as any breaking change.

### Rubric and remediation

**Usage is reviewed and unused components identified**

Adequate evidence: A list of components with where each is used, and the unused ones marked.

- 0 — No usage review.
- 1 — Usage described from memory.
- 2 — Each component checked against real screens.
- 3 — As adequate, and speculative components built without a use are identified as such.

If below 2: Go through your screens and record where each component actually appears. Show at recheck: The usage list.

**At least one removal or deprecation went through the process**

Adequate evidence: A deprecation with a note, a period and a version, recorded in the log.

- 0 — Nothing removed.
- 1 — Something removed quietly.
- 2 — Removal through the process with note, period and version.
- 3 — As adequate, and a component was kept with a recorded reason rather than removed reflexively.

If below 2: Take one unused component and deprecate it properly, including the note. Show at recheck: The deprecation record.

**Workarounds are found in real screens and decided**

Adequate evidence: One-offs identified with what did not fit and a decision each.

- 0 — Not examined.
- 1 — Workarounds noticed without decisions.
- 2 — Each with a cause and a decision.
- 3 — As adequate, and at least one has entered the governance process as a proposal.

If below 2: Look for the components you built inside screens rather than in the system, and ask why. Show at recheck: The workaround list.

**The plan has an honest estimate and a skip order**

Adequate evidence: Monthly hours, what is dropped first when time is short, and a review date.

- 0 — No plan.
- 1 — A plan without an estimate.
- 2 — Estimate, skip order and review date all present.
- 3 — As adequate, and the estimate matches the time you actually spent this module.

If below 2: Estimate from what this module actually cost you, then decide what is dropped first. Show at recheck: The plan.

### Portfolio contribution

A review that removes things, with the reasoning, is the clearest signal that you can maintain a system rather than only launch one.

### Assigned resources

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — Two component pages, read for how usage guidance is stated and would have to be revised. Purpose: Shows the documentation a removal or replacement would have to update. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Larger scale than yours; take the practice and reduce the ceremony. Fallback: R06.
- R67: [Semantic Versioning 2.0.0](https://semver.org/) — The rules for breaking changes and the minimal deprecation guidance. Purpose: Classifies removal correctly and sets the deprecation period. Effort: 10–15 min. Free reading, no account, CC BY 3.0. Verified 2026-09-06. It recommends at least one minor release before removal and says nothing about how to announce it. Fallback: R18.
