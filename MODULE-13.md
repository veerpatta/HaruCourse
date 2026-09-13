# Design systems

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the all-course action contract](docs/COURSE-AUTHORING.md#all-course-action-contract--13-september-2026). All 224 published teaching lessons use saved action flows. Published, teaching-refined, learner-validated and assessed remain separate states.

Generated from src/module13.ts; edit that source, then run npm run docs:generate. Level 4 · Module m13 · requirement areas 12. Optional effort 35 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m12. This is guidance for meaningful practice, not a lock. Module approved resource pair: R17 / R06. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: What a design system is for

Stable ID: m13-l01-v1. Core.

Systems built without a stated purpose become libraries nobody uses and everybody works around.

Bring: Your inventory, token sheet and built pages.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Three problems the system solves, each with the person affected
- A named audience for the system
- An out-of-scope list
- A stated maintenance cost and what the system makes harder

### Start here: in everyday words

A design system is a shared set of decisions and reusable parts that helps a team build consistent products. In this lesson, your first small result is: Every decision you have made more than twice, with the ones that drifted marked and the evidence for the drift.

**Words you will use**

- **Design system:** A set of decisions made once and reused, with the documentation that lets somebody else use them. It is not a folder of components.
- **Drift:** The same decision made slightly differently in different places, by you, over time. It is the evidence that a decision was never actually settled.
- **Problem for a person:** Somebody, doing something, paying a cost. “We need consistency” names nobody and costs nothing, so nothing follows from it.

**Quick example.** Made-up example. Writing the purpose of a tool-library design system, and writing a wish instead of a problem. “The system will provide a consistent, scalable foundation for the product.” I was pleased with it, and it survived exactly one question.

The reader demonstrates and guides the task before asking for “Every decision you have made more than twice across your screens”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Write the purpose of your system as three problems it solves for named people, and identify what it will not attempt.


### Idea 1: A system exists to make decisions once and reuse them, not to…

Section: learn. Stable action: learn-1.

A system exists to make decisions once and reuse them, not to store components.


### Name the people it serves: you next month, another designer, an engineer

Section: learn. Stable action: learn-2.

Name the people it serves: you next month, another designer, an engineer.


### Coverage matters more than completeness: solve the repeated cases

Section: learn. Stable action: learn-3.

Coverage matters more than completeness: solve the repeated cases.


### Idea 4: A system has costs — maintenance, governance, rigidity — and t…

Section: learn. Stable action: learn-4.

A system has costs — maintenance, governance, rigidity — and they are real.


### State what is out of scope, or everything drifts into it

Section: learn. Stable action: learn-5.

State what is out of scope, or everything drifts into it.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- The system's purpose was written as three problems: I re-decide button hierarchy and spacing on every screen and they drift; an engineer has to ask me what each state should do, which costs a day per feature; and accessibility decisions get remade badly under time pressure. The people served: the learner in three months, one engineer, and any reviewer reading a case study. Out of scope, stated: marketing pages, anything about brand illustration, and any component used only once. The cost was written too: about a day a month of maintenance, and the loss of some freedom on individual screens.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Find the repeated decisions

Section: practice-plan. Stable action: step-1-brief.

Every decision you have made more than twice, with the ones that drifted marked and the evidence for the drift.

- Look through your screens for decisions you have made more than twice.
- List the ones that drifted between screens.

**Start here:** Open three of your own screens side by side and measure the same gap on each.

**Enough:** Your drift examples name a measurement or a word rather than a general feeling of inconsistency.

**Design system:** A set of decisions made once and reused, with the documentation that lets somebody else use them. It is not a folder of components.

**Drift:** The same decision made slightly differently in different places, by you, over time. It is the evidence that a decision was never actually settled.


### Every decision you have made more than twice across your screens

Section: practice-plan. Stable action: write-repeated-decisions.

Button hierarchy, spacing between groups, how a status is shown, what an empty list says.

**Answer:** Every decision you have made more than twice across your screens

Button hierarchy, spacing between groups, how a status is shown, what an empty list says.


### Which of them drifted between screens, and how you can tell

Section: practice-plan. Stable action: write-drifted.

Write your answer for “Which of them drifted between screens, and how you can tell”. Use the task instructions below to decide what to include.

**Answer:** Which of them drifted between screens, and how you can tell



<details>
<summary>Example</summary>

Example (made up): the gap between a title and its meta row is 8 pixels on two screens and 12 on a third, and nothing decided the difference.

</details>


### Write the three problems

Section: practice-plan. Stable action: step-2-brief.

Three problems, each stated as a problem for a named person, with at least one costing somebody else time.

- State each as a problem for a named person, not as a feature.
- Include at least one that costs someone else time.

**Start here:** Look at last month rather than next year, and find where you or somebody else actually lost time.

**Enough:** Each problem names a person and a cost, and at least one cost is somebody else’s.

**Problem for a person:** Somebody, doing something, paying a cost. “We need consistency” names nobody and costs nothing, so nothing follows from it.

**Coverage:** Solving the cases that actually recur, rather than every case. A system covering six repeated decisions beats one covering forty rare ones.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Writing the purpose of a tool-library design system, and writing a wish instead of a problem.

**What I wrote first:** “The system will provide a consistent, scalable foundation for the product.” I was pleased with it, and it survived exactly one question.

**The question:** Somebody asked which component to build first. The sentence gave no answer, because it names nobody and no cost, so nothing follows from it at all.

**What I did instead:** Looked at the last month rather than the next year. Where had I actually lost time, and where had somebody else?

**What came out:** I re-decide button hierarchy on every screen and it drifts. An engineer asks me what each state should do, which costs about a day per feature. Accessibility decisions get remade badly whenever anything is urgent.

**What that settled immediately:** Which component to build first: the one in the second problem, because it is the only one costing somebody else a day.

**Wrong turn:** The wrong turn is writing the purpose as a description of the system, because that is what purposes usually sound like. A description cannot be used to decide anything, which is what a purpose is for.

**Trade-off:** Three specific problems make the system look small and local rather than strategic. Somebody will ask whether it is ambitious enough, and the answer is that it is the right size for three problems.

**Unknown:** Still unknown: whether the drift is actually costing anybody anything. I can see it; nobody has complained about it, and the second problem is the one with a day attached.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-2-sort-1.

Six purpose lines from a made up tool-library design system. For each one, decide what it actually is.

An engineer asks me what each state should do, which costs about a day per feature and half a day of mine answering.

- a problem with a person and a cost
- a description of the system
- a component wish

<details>
<summary>After your attempt</summary>

a problem with a person and a cost — A person, a recurring situation and a number. It tells you which component to specify first, which is what a purpose is for.

a description of the system — Nothing here describes the system at all. It describes what happens without one.

a component wish — No component is named. Several would fix it, and the problem is what decides between them.

Now read your own three problems the same way, and rewrite anything in the other two groups.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-2-sort-2.

Six purpose lines from a made up tool-library design system. For each one, decide what it actually is.

The system provides a consistent, scalable foundation for the product.

- a problem with a person and a cost
- a description of the system
- a component wish

<details>
<summary>After your attempt</summary>

a problem with a person and a cost — Nobody appears in it and nothing is being lost.

a description of the system — It says what the system is. It cannot settle a single argument, because no decision follows from it.

a component wish — It is too general even for that.

Now read your own three problems the same way, and rewrite anything in the other two groups.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-2-sort-3.

Six purpose lines from a made up tool-library design system. For each one, decide what it actually is.

We need a proper modal component.

- a problem with a person and a cost
- a description of the system
- a component wish

<details>
<summary>After your attempt</summary>

a problem with a person and a cost — It may well be true. It names nobody and no cost, so nothing says whether it comes before or after everything else.

a description of the system — It describes one piece rather than the whole.

a component wish — It arrives as a purpose and is actually an answer. If the real problem is that confirmations are inconsistent, a modal may not be the fix.

Now read your own three problems the same way, and rewrite anything in the other two groups.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-2-sort-4.

Six purpose lines from a made up tool-library design system. For each one, decide what it actually is.

Accessibility decisions get remade badly whenever something is urgent, and I have twice shipped a colour-only status after deciding not to.

- a problem with a person and a cost
- a description of the system
- a component wish

<details>
<summary>After your attempt</summary>

a problem with a person and a cost — The person is you, the situation is time pressure, and the cost is a specific failure that happened twice. It points straight at what the foundations must carry.

a description of the system — It describes a failure rather than a system.

a component wish — No component is named.

Now read your own three problems the same way, and rewrite anything in the other two groups.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-2-sort-5.

Six purpose lines from a made up tool-library design system. For each one, decide what it actually is.

The system will be the single source of truth for all design decisions.

- a problem with a person and a cost
- a description of the system
- a component wish

<details>
<summary>After your attempt</summary>

a problem with a person and a cost — It names an ambition rather than a cost anybody is paying now.

a description of the system — It is a claim about what the system will be, and everything it excludes is invisible in it.

a component wish — It is broader than a component and just as unusable.

Now read your own three problems the same way, and rewrite anything in the other two groups.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-2-sort-6.

Six purpose lines from a made up tool-library design system. For each one, decide what it actually is.

I re-decide button hierarchy and spacing on every screen, and three screens now disagree about the gap under a title.

- a problem with a person and a cost
- a description of the system
- a component wish

<details>
<summary>After your attempt</summary>

a problem with a person and a cost — The person is you, the cost is repeated work, and the evidence is three screens that disagree. It is small, and it is the kind that actually gets fixed.

a description of the system — It describes what happens without one.

a component wish — It names no component; the fix is a rule rather than a thing.

Now read your own three problems the same way, and rewrite anything in the other two groups.

</details>


### Problem 1 · who it affects and what it costs them

Section: practice-plan. Stable action: write-problem-1.

At least one of the three should cost somebody other than you time.

**Answer:** Problem 1 · who it affects and what it costs them

At least one of the three should cost somebody other than you time.

<details>
<summary>Example</summary>

Example (made up): an engineer has to ask me what each state should do, which costs about a day per feature and a day of mine answering.

</details>


### Problem 2 · who it affects and what it costs them

Section: practice-plan. Stable action: write-problem-2.

Write your answer for “Problem 2 · who it affects and what it costs them”. Use the task instructions below to decide what to include.

**Answer:** Problem 2 · who it affects and what it costs them




### Problem 3 · who it affects and what it costs them

Section: practice-plan. Stable action: write-problem-3.

Write your answer for “Problem 3 · who it affects and what it costs them”. Use the task instructions below to decide what to include.

**Answer:** Problem 3 · who it affects and what it costs them




### Name the audience

Section: practice-plan. Stable action: step-3-brief.

The audience named as it exists now, with what each of them needs from the system.

- Decide who the system is for now, not eventually.
- Write what each audience needs from it.

**Start here:** Write the names or roles of the people who will open this in the next eight weeks.

**Enough:** Nobody on the list is hypothetical.

**Audience now:** The people who will use it this month: you in three months, one engineer, a reviewer reading a case study. Not a team you do not have.


### Who the system is for now, not eventually

Section: practice-plan. Stable action: write-audience-named.

Naming a future team you do not have makes every decision hypothetical.

**Answer:** Who the system is for now, not eventually

Naming a future team you do not have makes every decision hypothetical.


### What each of them needs from it

Section: practice-plan. Stable action: write-audience-needs.

Write your answer for “What each of them needs from it”. Use the task instructions below to decide what to include.

**Answer:** What each of them needs from it




### Write the boundary

Section: practice-plan. Stable action: step-4-brief.

A written list of what the system will not cover, each with a one-line reason.

- List what the system will not cover.
- Include one-off components and anything outside the product.

**Start here:** Go through your component inventory and mark everything used exactly once.

**Enough:** Each exclusion has a reason somebody could argue with, rather than being a list of things you did not get to.

**Out of scope:** What the system deliberately does not attempt. Without it, everything drifts in: marketing pages, illustration, one-off screens, and the maintenance grows past what anybody can do.

**One-off component:** Something used once. Putting it in the system costs maintenance for ever and saves nothing, because it is never reused.


### What the system will not attempt

Section: practice-plan. Stable action: write-out-of-scope.

One-off components, marketing pages, brand illustration, anything outside the product.

**Answer:** What the system will not attempt

One-off components, marketing pages, brand illustration, anything outside the product.


### Why each exclusion, in one line

Section: practice-plan. Stable action: write-boundary-reason.

Write your answer for “Why each exclusion, in one line”. Use the task instructions below to decide what to include.

**Answer:** Why each exclusion, in one line




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You have four screens and one engineer. Does that justify a design system?

- Possibly not a full one. Sometimes what is needed is three settled decisions and a page of documentation.
- Yes, because consistency always pays back.
- No, systems are for large teams only.

<details>
<summary>After your attempt</summary>

Possibly not a full one. Sometimes what is needed is three settled decisions and a page of documentation. — A system pays back when the same decisions recur across people and time. Before that it is maintenance with no return, and the honest answer is to settle the three decisions that keep drifting.

Yes, because consistency always pays back. — Consistency pays back; the machinery for producing it does not always. The question is whether the decisions recur often enough to be worth documenting.

No, systems are for large teams only. — Size is not the test. The same person re-deciding the same thing every month is a real cost, and one page may fix it.

Improve: Check your three problems in step 2 are things that have actually recurred, and replace any that have not. Record the change in step 5.

Check again: Every problem names something that has happened more than twice.

Answers to revisit: problem-1, problem-2, problem-3, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your purpose statement says the system provides a consistent, scalable foundation. What is wrong with it?

- It names nobody and no cost, so it cannot be used to decide what to build first.
- Nothing, though it could be more specific.
- Scalable is the wrong word for a small product.

<details>
<summary>After your attempt</summary>

It names nobody and no cost, so it cannot be used to decide what to build first. — A purpose exists to settle arguments. Three problems with people and costs attached will tell you which component to build first; a description of the system will not.

Nothing, though it could be more specific. — Specificity is not a polish here. Without a person and a cost, the sentence cannot answer any question you will ask it.

Scalable is the wrong word for a small product. — The vocabulary is a symptom. Replacing scalable with something else leaves the same unusable sentence.

Improve: Rewrite any problem in step 2 that does not name a person and a cost. Record the change in step 5.

Check again: Reading your three problems tells you which component to build first.

Answers to revisit: problem-1, problem-2, problem-3, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You have not written a maintenance cost or anything the system makes harder. Does that matter?

- Yes. A system that costs nothing and constrains nothing is a folder of pictures, and stating the cost is what gets it maintained.
- Not much, since the cost is obvious to anyone who has built one.
- It matters only if somebody else pays the cost.

<details>
<summary>After your attempt</summary>

Yes. A system that costs nothing and constrains nothing is a folder of pictures, and stating the cost is what gets it maintained. — Rigidity is real: some screens will be worse because they had to use the shared component. Saying so in advance is what makes the trade an argument rather than a surprise.

Not much, since the cost is obvious to anyone who has built one. — It is obvious to people who have. It is exactly the thing that surprises everybody else, including you in four months.

It matters only if somebody else pays the cost. — You will pay it, monthly, and the estimate is what decides whether the system is the right size.

Improve: Write an hours-a-month figure and one thing the system makes harder in step 5, then record the change.

Check again: Your purpose page states a cost as well as a benefit.

Answers to revisit: maintenance, made-harder, improvement-made

</details>


### Cost it honestly

Section: practice. Stable action: step-5-brief.

An honest maintenance estimate in hours a month, and a written statement of what the system makes harder.

- Estimate the maintenance in hours per month.
- Write what the system will make harder or slower.
- Save the purpose, audience, boundary and cost together.

**Start here:** Estimate how long it took to write one component specification, then multiply by how often things change.

**Enough:** You named something the system genuinely makes worse, which every real system does.

**Maintenance:** Keeping the documentation, the code and the design in step as things change. It is the cost people forget, and it never goes to zero.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### See the decision being made

Section: practice. Stable action: step-5-demo.

Made-up example. Writing the cost of a tool-library design system, and writing a cost of nothing.

**What I wrote first:** Under costs: “minimal ongoing maintenance”. I believed it, because the system was six components and a page of foundations.

**What the first month actually took:** Two components changed, which meant the documentation, the stylesheet and two screens. A new state arrived and the grid had to be re-decided. About four hours.

**The cost I had not written at all:** Rigidity. The listing screen would genuinely have been better with a slightly tighter card, and it uses the shared one, so it is a little worse than it could be.

**Why writing that down mattered:** Because somebody was going to notice the screen and ask why it looked cramped. Written in advance it is a trade I made; discovered later it is a mistake I did not notice.

**What the entry became:** About four hours a month, done by me. Makes harder: individual screens lose some freedom, and any change now costs three edits rather than one.

**Wrong turn:** The wrong turn is writing minimal, because it is true of the first week and of no week after that. A cost of nothing means nobody plans for the maintenance, and the system quietly stops matching the product.

**Trade-off:** An honest cost makes the system look like a worse investment on the page where you are proposing it. It is also the number that decides whether it is the right size.

**Unknown:** Still unknown: whether four hours holds as the product grows. It is one month, and I have written the figure with that attached rather than as a rate.


### Maintenance, in hours a month, and who does it

Section: practice. Stable action: write-maintenance.

Write your answer for “Maintenance, in hours a month, and who does it”. Use the task instructions below to decide what to include.

**Answer:** Maintenance, in hours a month, and who does it




### What the system will make harder or slower

Section: practice. Stable action: write-made-harder.

It will. A system that costs nothing and constrains nothing is a folder of pictures.

**Answer:** What the system will make harder or slower

It will. A system that costs nothing and constrains nothing is a folder of pictures.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson publishes the foundations everything else in the system rests on.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: What a design system is for
What I am trying to do: Write the purpose of your system as three problems it solves for named people, and identify what it will not attempt.

Key idea or terms:
Design system: A set of decisions made once and reused, with the documentation that lets somebody else use them. It is not a folder of components.
Drift: The same decision made slightly differently in different places, by you, over time. It is the evidence that a decision was never actually settled.
Problem for a person: Somebody, doing something, paying a cost. “We need consistency” names nobody and costs nothing, so nothing follows from it.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Writing the purpose of a tool-library design system, and writing a wish instead of a problem. “The system will provide a consistent, scalable foundation for the product.” I was pleased with it, and it survived exactly one question.

Activity: Give me one inconsistent component or rule from the supplied case. Ask me to choose the shared decision, name what must stay flexible and explain how another person would know which version is current.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Every decision you have made more than twice across your screens” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Every decision you have made more than twice across your screens”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “Every decision you have made more than twice across your screens” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- For each problem write who suffers it and how much time or quality it costs.
- Write who will actually open this in the next three months and design for them.

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — Two component pages, read for what a published system documents beyond appearance. Purpose: Shows the level of decision-recording a working system carries. Free reading, no account. Verified 2026-09-06. One organisation's system for government services; take the documentation habits, not the components or the brand. Fallback: R06.
- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — The styles index, read for how foundational decisions are grouped. Purpose: Gives a worked example of foundations documented separately from components. Free reading, no account. Verified 2026-09-06. Rebuild the reasoning; do not copy the values or treat them as a standard. Fallback: R03.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Three problems are stated for named people**

Adequate evidence: Three problems, each naming who has it and what it costs them.

0 — Purpose stated as consistency in general.

1 — Problems named without people or costs.

2 — Three problems with people and costs.

3 — As adequate, and at least one problem is drawn from an observed drift between your own screens.

Repair: For each problem write who suffers it and how much time or quality it costs. Recheck: The three problems.

**The current audience is named, not aspirational**

Adequate evidence: A stated audience for now, with what each needs.

0 — Audience unstated or imagined as a large team.

1 — Audience named without needs.

2 — Current audience with their needs.

3 — As adequate, and the scope of governance matches that audience rather than a future one.

Repair: Write who will actually open this in the next three months and design for them. Recheck: The audience statement.

**An out-of-scope list exists**

Adequate evidence: A written list of what the system does not cover.

0 — No boundary.

1 — A vague statement of focus.

2 — A specific list including one-offs and adjacent areas.

3 — As adequate, and the list names something you were tempted to include.

Repair: List everything you might be asked to systematise and mark what stays out. Recheck: The boundary list.

**Maintenance cost and rigidity are stated**

Adequate evidence: An hours-per-month estimate and a statement of what becomes harder.

0 — Costs not considered.

1 — Maintenance mentioned without an estimate.

2 — Both stated concretely.

3 — As adequate, and the estimate accounts for answering other people's questions.

Repair: Estimate the time to keep documentation current and to answer questions, and name one thing the system will slow down. Recheck: The cost statement.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson publishes the foundations everything else in the system rests on.

**Review criteria:**

- Three problems are stated for named people
- The current audience is named, not aspirational
- An out-of-scope list exists
- Maintenance cost and rigidity are stated

<details>
<summary>Reading, video and deeper explanation</summary>

- The value of a system is decisions not re-made. When the button hierarchy, the spacing scale and the error pattern are settled, every screen after that starts further along, and disagreements are about the product rather than the pixel. A collection of components without those settled decisions is a folder, and folders do not reduce anyone's work.
- Naming the people is what keeps it honest. A system for one designer needs documentation of decisions and their reasons. A system shared with an engineer needs specification of behaviour and states. A system used by people you have never met needs governance and versioning. Building the third when you need the first is a common and expensive mistake.
- Coverage beats completeness. Twelve components covering the cases that recur every week are more useful than sixty covering everything imaginable, and far cheaper to keep correct. The repeated cases are visible in your own inventory: they are the things you have already drawn more than twice.
- Systems cost something. Someone maintains them, someone answers questions about them, and they make unusual solutions harder — which is sometimes exactly the point and sometimes a real loss. Stating the cost and the out-of-scope boundary at the start prevents the slow expansion that turns a useful system into an obligation.

[GOV.UK Design System: components](https://design-system.service.gov.uk/components/).

</details>

## Lesson 2: Foundations: the decisions everything else rests on

Stable ID: m13-l02-v1. Core.

Foundations are what make components consistent. Documented as values only, they get used inconsistently within a month.

Bring: Your token and interaction sheets.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Six foundation groups documented with values and rules
- A reason recorded for each group's key decisions
- Measured contrast for every permitted text pair
- One do-and-do-not pair per group, drawn from a real mistake

### Start here: in everyday words

A design system is a shared set of decisions and reusable parts that helps a team build consistent products. In this lesson, your first small result is: Six foundation groups, each with its values, the rule for when to use them, and why those values.

**Words you will use**

- **Foundation:** A value plus a rule for when it applies. A list of values with no rules gets used inconsistently within a month.
- **The reason:** Why this value rather than another. Without it, the value gets overridden by whoever has the strongest taste in the room, including you on a bad day.
- **Permitted pair:** A text colour on a surface colour that has been measured and passes. Publishing it means nobody measures it again.

**Quick example.** Made-up example. Publishing spacing foundations for a tool-library system, and publishing the numbers alone. Six spacing values: 4, 8, 12, 16, 24 and 40. Neatly laid out, named, and in the stylesheet as custom properties.

The reader demonstrates and guides the task before asking for “Group 1 · the values, the rule for using them, and why these values”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Publish your foundations — colour, type, spacing, radius, elevation and motion — as documented decisions with reasons, measured contrast and usage rules.


### A foundation is a value plus a rule for when to use it

Section: learn. Stable action: learn-1.

A foundation is a value plus a rule for when to use it.


### Record the reason; a value with no reason gets overridden by taste

Section: learn. Stable action: learn-2.

Record the reason; a value with no reason gets overridden by taste.


### Include measured contrast for every permitted text pair

Section: learn. Stable action: learn-3.

Include measured contrast for every permitted text pair.


### Motion values belong here too, with their reduced-motion pairs

Section: learn. Stable action: learn-4.

Motion values belong here too, with their reduced-motion pairs.


### Show the wrong usage as well as the right one

Section: learn. Stable action: learn-5.

Show the wrong usage as well as the right one.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- The foundations page documented six groups. Colour: five neutrals and three semantic colours, each with permitted usages, forbidden usages and measured ratios for every text pair. Type: six steps with their jobs, minimum sizes and line-height rules. Spacing: six values with a rule that spacing between groups is always larger than spacing within them. Radius: two values with a rule about which components use which. Elevation: two levels with the statement that elevation never carries meaning alone. Motion: three durations with their reduced-motion pairs. Each group carried one do-and-do-not pair drawn from a real mistake.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Convert values into decisions

Section: practice-plan. Stable action: step-1-brief.

Six foundation groups, each with its values, the rule for when to use them, and why those values.

- Take each token group and write the rule for when to use it.
- Add the reason the value was chosen.

**Start here:** Take the group you use most and write one sentence about when each value applies.

**Enough:** Every group has a rule that would settle an argument, not only a list of permitted values.

**Foundation:** A value plus a rule for when it applies. A list of values with no rules gets used inconsistently within a month.

**The reason:** Why this value rather than another. Without it, the value gets overridden by whoever has the strongest taste in the room, including you on a bad day.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Publishing spacing foundations for a tool-library system, and publishing the numbers alone.

**What I published:** Six spacing values: 4, 8, 12, 16, 24 and 40. Neatly laid out, named, and in the stylesheet as custom properties.

**What happened within a fortnight:** Every screen used values from the scale and none of them looked related. One screen had 16 between a title and its meta row; another had 24 in the same place.

**Why the scale had not helped:** It said which numbers were allowed and nothing about when. Six permitted values used arbitrarily is the same problem as arbitrary values, with extra steps.

**What I added:** One rule: the gap between two groups is always larger than the gap within either. That single sentence decided most of the cases the scale had left open.

**What it cost me:** Two screens had to change, because they had been using a within-group gap larger than the between-group one, and neither had looked wrong until the rule existed.

**Wrong turn:** The wrong turn is publishing the values and calling it a foundation, because the values are the part that already exists and is easy to lay out. The rule is the whole difference between a scale and a system.

**Trade-off:** A rule removes freedom on individual screens, and two of mine were worse for a week until I found a better arrangement within it.

**Unknown:** Still unknown: whether six values is too many. Four might decide more and allow less, and I have not tried it.


### Group 1 · the values, the rule for using them, and why these values

Section: practice-plan. Stable action: write-group-1.

Colour, type, spacing, radius, elevation, motion. Start with the one you use most.

**Answer:** Group 1 · the values, the rule for using them, and why these values

Colour, type, spacing, radius, elevation, motion. Start with the one you use most.

<details>
<summary>Example</summary>

Example (made up): spacing 4, 8, 12, 16, 24, 40. Rule: the gap between groups is always larger than the gap within one. Why: it was the smallest set that made every screen I had already drawn work.

</details>


### Group 2 · the values, the rule for using them, and why these values

Section: practice-plan. Stable action: write-group-2.

Write your answer for “Group 2 · the values, the rule for using them, and why these values”. Use the task instructions below to decide what to include.

**Answer:** Group 2 · the values, the rule for using them, and why these values




### Group 3 · the values, the rule for using them, and why these values

Section: practice-plan. Stable action: write-group-3.

Write your answer for “Group 3 · the values, the rule for using them, and why these values”. Use the task instructions below to decide what to include.

**Answer:** Group 3 · the values, the rule for using them, and why these values




### Group 4 · the values, the rule for using them, and why these values

Section: practice-plan. Stable action: write-group-4.

Write your answer for “Group 4 · the values, the rule for using them, and why these values”. Use the task instructions below to decide what to include.

**Answer:** Group 4 · the values, the rule for using them, and why these values




### Group 5 · the values, the rule for using them, and why these values

Section: practice-plan. Stable action: write-group-5.

Write your answer for “Group 5 · the values, the rule for using them, and why these values”. Use the task instructions below to decide what to include.

**Answer:** Group 5 · the values, the rule for using them, and why these values




### Group 6 · the values, the rule for using them, and why these values

Section: practice-plan. Stable action: write-group-6.

Write your answer for “Group 6 · the values, the rule for using them, and why these values”. Use the task instructions below to decide what to include.

**Answer:** Group 6 · the values, the rule for using them, and why these values




### Publish the contrast table

Section: practice-plan. Stable action: step-2-brief.

A table of permitted text pairs with measured ratios, and a list of pairs that are explicitly forbidden.

- List permitted text-on-surface pairs with measured ratios.
- List forbidden pairs explicitly.

**Start here:** Copy the measurements you already made in Module 11 rather than measuring again.

**Enough:** The forbidden list is not empty, because in any real palette some pairs fail.

**Permitted pair:** A text colour on a surface colour that has been measured and passes. Publishing it means nobody measures it again.

**Forbidden pair:** One that has been measured and fails. Listing it is more useful than leaving it out, because leaving it out looks like nobody checked.


### Every permitted text-on-surface pair, with its measured ratio

Section: practice-plan. Stable action: write-permitted-pairs.

Write your answer for “Every permitted text-on-surface pair, with its measured ratio”. Use the task instructions below to decide what to include.

**Answer:** Every permitted text-on-surface pair, with its measured ratio




### Pairs that are explicitly forbidden, and why

Section: practice-plan. Stable action: write-forbidden-pairs.

A forbidden pair listed is a pair nobody has to measure again.

**Answer:** Pairs that are explicitly forbidden, and why

A forbidden pair listed is a pair nobody has to measure again.


### Document motion

Section: practice-plan. Stable action: step-3-brief.

Motion durations and easings brought into the foundations with their reduced-motion pairs.

- Bring your m09 durations and easings into the foundations.
- Record the reduced-motion pair for each.

**Start here:** Open your Module 9 sheet and move the values across rather than rewriting them.

**Enough:** Every motion value has a reduced version beside it, including the ones you think are too small to matter.

**Reduced-motion pair:** What each transition does when somebody has asked their device for less motion. It belongs beside the value, or it gets forgotten per component.


### Your durations and easings from Module 9, with what each is for

Section: practice-plan. Stable action: write-motion-values.

Write your answer for “Your durations and easings from Module 9, with what each is for”. Use the task instructions below to decide what to include.

**Answer:** Your durations and easings from Module 9, with what each is for




### The reduced-motion pair for each one

Section: practice-plan. Stable action: write-reduced-pairs.

Write your answer for “The reduced-motion pair for each one”. Use the task instructions below to decide what to include.

**Answer:** The reduced-motion pair for each one




### Show the wrong usage

Section: practice-plan. Stable action: step-4-brief.

One do-and-do-not pair for each group, each drawn from a mistake you actually made.

- For each group, produce one do-and-do-not example.
- Draw each from a mistake you have actually made.

**Start here:** For each group, find a screen where you got it wrong and use that as the do-not.

**Enough:** Every do-not is something you actually did, not something nobody would do.

**Do-and-do-not:** The right usage beside the wrong one. The wrong one is what people learn from, because it names the mistake they were about to make.

**From a real mistake:** Taken from your own screens rather than invented. Invented wrong examples tend to be absurd, and nobody was going to make them.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six foundation entries from a made up tool-library system. For each one, decide what it is missing, if anything.

Spacing: 4, 8, 12, 16, 24, 40. Use these values only.

- complete
- missing the rule
- missing the reason

<details>
<summary>After your attempt</summary>

complete — It says which numbers are allowed. It does not say when any of them applies, so six permitted values get used arbitrarily.

missing the rule — Use these only is a constraint, not a rule. A rule would say that gaps between groups exceed gaps within them.

missing the reason — It is missing that too, and the rule is the more urgent gap.

Now read your own six groups the same way, and fix whichever part is missing.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six foundation entries from a made up tool-library system. For each one, decide what it is missing, if anything.

Status colour: amber. Use for items with fewer than three places left, always with the count beside it. Chosen because the greyscale check showed it indistinguishable from red on its own.

- complete
- missing the rule
- missing the reason

<details>
<summary>After your attempt</summary>

complete — Value, rule and reason, with the reason coming from a check that actually happened. A reader could apply it and could argue with it.

missing the rule — The rule is there: fewer than three places, always with the count.

missing the reason — The reason is the greyscale finding, which is the strongest kind because it is evidence rather than preference.

Now read your own six groups the same way, and fix whichever part is missing.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six foundation entries from a made up tool-library system. For each one, decide what it is missing, if anything.

Radius: 4 pixels for controls, 8 for containers.

- complete
- missing the rule
- missing the reason

<details>
<summary>After your attempt</summary>

complete — It is usable, and the first time somebody prefers 6 there is nothing to say back.

missing the rule — The rule is present and clear: controls get one, containers get the other.

missing the reason — Without a reason it is a preference, and preferences lose to whoever feels strongest that week.

Now read your own six groups the same way, and fix whichever part is missing.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six foundation entries from a made up tool-library system. For each one, decide what it is missing, if anything.

Elevation: two levels. Never use elevation as the only way of conveying meaning, because it disappears in high-contrast modes and in print.

- complete
- missing the rule
- missing the reason

<details>
<summary>After your attempt</summary>

complete — It has a prohibition and a reason. What it lacks is a rule for when each of the two levels is used.

missing the rule — Never do this is half a rule. A reader still does not know which level a dialogue gets and which a card gets.

missing the reason — The reason is there and it is a good one.

Now read your own six groups the same way, and fix whichever part is missing.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six foundation entries from a made up tool-library system. For each one, decide what it is missing, if anything.

Type: six steps. Step 5 for page titles, 4 for section headings, 3 for body, 2 for meta, never below 2 for anything a person must read. Six because seven produced two steps nobody could tell apart.

- complete
- missing the rule
- missing the reason

<details>
<summary>After your attempt</summary>

complete — Values, a rule per step, a floor, and a reason taken from an actual attempt at seven. Nothing is left to taste.

missing the rule — Each step has a job and there is a minimum.

missing the reason — The reason names something that happened rather than a principle.

Now read your own six groups the same way, and fix whichever part is missing.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six foundation entries from a made up tool-library system. For each one, decide what it is missing, if anything.

Motion: 120ms for state changes, 240ms for things entering. Reduced-motion pairs are documented per component.

- complete
- missing the rule
- missing the reason

<details>
<summary>After your attempt</summary>

complete — The durations have jobs, so it looks complete. Documented per component is where it falls down.

missing the rule — The reduced pair belongs beside the value, not per component. Left to each component it gets forgotten by the third one.

missing the reason — It is missing a reason as well, and the scattered reduced pairs are the more damaging gap.

Now read your own six groups the same way, and fix whichever part is missing.

</details>


### For each group: one do and one do-not, drawn from a mistake you actually made

Section: practice-plan. Stable action: write-do-not-pairs.

Write your answer for “For each group: one do and one do-not, drawn from a mistake you actually made”. Use the task instructions below to decide what to include.

**Answer:** For each group: one do and one do-not, drawn from a mistake you actually made



<details>
<summary>Example</summary>

Example (made up): do use the status colour with its word beside it. Do not use it alone, as I did on the results card until the greyscale check in Module 11.

</details>


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You have published six spacing values and screens still look unrelated. What is missing?

- A rule for when each value applies. Six permitted values used arbitrarily is arbitrary spacing with extra steps.
- The scale has too many values.
- The values are not being used, so it is an adoption problem.

<details>
<summary>After your attempt</summary>

A rule for when each value applies. Six permitted values used arbitrarily is arbitrary spacing with extra steps. — One sentence — the gap between groups always exceeds the gap within them — decides most of the cases the scale leaves open. That sentence is the foundation; the numbers are the input to it.

The scale has too many values. — Fewer values would help a little by removing choices. The rule is what makes any number of values consistent.

The values are not being used, so it is an adoption problem. — They are being used, which is why this is worth noticing. Permitted and consistent are different things.

Improve: Add a rule for when each value applies to your spacing group in step 1, and record the change in step 5.

Check again: Every foundation group has a rule as well as values.

Answers to revisit: group-1, group-2, group-3, group-4, group-5, group-6, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Foundations feel like the easy part of the system. Are they?

- They are the part everything else inherits, so a weak scale or an unmeasured pair propagates into every component.
- Yes, because the values already exist from earlier modules.
- Yes for spacing and type, no for colour.

<details>
<summary>After your attempt</summary>

They are the part everything else inherits, so a weak scale or an unmeasured pair propagates into every component. — Fixing a foundation later means touching everything built on it. That is the opposite of easy, and it is why the reasons and rules matter more here than anywhere else in the system.

Yes, because the values already exist from earlier modules. — The values exist. The rules, the reasons and the measured pairs are the work, and they are what components will inherit.

Yes for spacing and type, no for colour. — Colour carries the contrast measurements, and a spacing scale with no rule propagates just as widely.

Improve: Add the reason to any group in step 1 that has only values and a rule. Record the change in step 5.

Check again: No group could be overridden by somebody simply preferring a different number.

Answers to revisit: group-1, group-2, group-3, group-4, group-5, group-6, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your do-and-do-not examples are invented rather than taken from your own screens. Does it matter?

- Yes. Invented wrong examples tend to be absurd, and nobody was going to make them.
- Not really, as long as the right usage is clear.
- It matters only if somebody checks where they came from.

<details>
<summary>After your attempt</summary>

Yes. Invented wrong examples tend to be absurd, and nobody was going to make them. — The mistakes worth showing are the plausible ones, which means the ones you actually made. A do-not nobody was tempted by teaches nothing.

Not really, as long as the right usage is clear. — The right usage is usually obvious. The wrong one is where the teaching is, and only if it is a mistake somebody would make.

It matters only if somebody checks where they came from. — Nobody will check. The example will simply fail to prevent the mistake it was meant to prevent.

Improve: Replace one invented do-not in step 4 with a mistake from your own screens. Record the change in step 5.

Check again: Every do-not is traceable to a real screen of yours.

Answers to revisit: do-not-pairs, improvement-made

</details>


### Check against a screen

Section: practice. Stable action: step-5-brief.

One built screen checked value by value, with every value in use that the foundations do not permit.

- Take one built screen and check every value against the foundations.
- Record any value in use that the foundations do not permit.
- Save the foundations page.

**Start here:** Open the inspector on one screen and read the computed values rather than trusting the stylesheet.

**Enough:** For each unpermitted value you decided whether to add it to the foundations or change the screen.

**Value in use but not permitted:** Something on a real screen that the foundations do not allow. Either the foundations are wrong or the screen is, and both are useful findings.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### See the decision being made

Section: practice. Stable action: step-5-demo.

Made-up example. Checking a tool-library screen against its own foundations, and letting the screen win every time.

**What I found:** Nine values on the screen that the foundations did not permit. A 10 pixel gap, a 14 pixel type size, a grey that was not on the list, and six more.

**What I did:** Added all nine to the foundations. It took ten minutes, the screen passed, and the foundations page was now longer and more complete.

**What the foundations had become:** A record of every value I had ever used. Fifteen spacing values instead of six, which permits everything and decides nothing.

**What I should have asked of each one:** Is this value doing something the permitted ones cannot? For the 10 pixel gap, no: 8 worked and nobody could tell. For one of the greys, yes: it was the only one that passed contrast on the tinted panel.

**What happened in the end:** Seven of the nine changed on the screen. Two joined the foundations, each with a rule saying when they apply and a note of what forced them.

**Wrong turn:** The wrong turn is adding every unpermitted value to the foundations, because it is quicker than changing the screen and it makes the check pass. A foundation that permits everything you have already done is a record rather than a decision.

**Trade-off:** Changing seven values on a finished screen is fiddly, and two of them looked very slightly better before.

**Unknown:** Still unknown: whether the tinted panel should exist at all, since it is the thing that forced a new grey. That is a question for the component review rather than for the foundations.


### Which screen you checked, value by value

Section: practice. Stable action: write-screen-checked.

Write your answer for “Which screen you checked, value by value”. Use the task instructions below to decide what to include.

**Answer:** Which screen you checked, value by value




### Every value in use that the foundations do not permit

Section: practice. Stable action: write-not-permitted.

There will be some. Deciding whether to add the value or change the screen is the point of this step.

**Answer:** Every value in use that the foundations do not permit

There will be some. Deciding whether to add the value or change the screen is the point of this step.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson specifies one component completely enough for somebody else to build it.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Foundations: the decisions everything else rests on
What I am trying to do: Publish your foundations — colour, type, spacing, radius, elevation and motion — as documented decisions with reasons, measured contrast and usage rules.

Key idea or terms:
Foundation: A value plus a rule for when it applies. A list of values with no rules gets used inconsistently within a month.
The reason: Why this value rather than another. Without it, the value gets overridden by whoever has the strongest taste in the room, including you on a bad day.
Permitted pair: A text colour on a surface colour that has been measured and passes. Publishing it means nobody measures it again.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Publishing spacing foundations for a tool-library system, and publishing the numbers alone. Six spacing values: 4, 8, 12, 16, 24 and 40. Neatly laid out, named, and in the stylesheet as custom properties.

Activity: Give me one inconsistent component or rule from the supplied case. Ask me to choose the shared decision, name what must stay flexible and explain how another person would know which version is current.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Group 1 · the values, the rule for using them, and why these values” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Group 1 · the values, the rule for using them, and why these values”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “Group 1 · the values, the rule for using them, and why these values” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- For each group write when to use it and why the value was chosen; both are needed.
- Measure every pair you allow, including quiet text, and split them into permitted and forbidden.

- R06: [GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/) — Colour, typography, spacing and layout, read for how each decision is documented and constrained. Purpose: Shows a working example of foundations published as rules rather than values. Free reading, no account. Verified 2026-09-06. Rebuild the reasoning and your own values; the government palette and type are not a standard. Fallback: R03.
- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The thresholds and their exceptions. Purpose: Supplies the measurable requirement the contrast table records against. Free reading, no account. Verified 2026-09-06. A passing ratio is a floor, not proof of legibility. Fallback: R29.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Each foundation group has values, rules and reasons**

Adequate evidence: Six documented groups, each with usage rules and the reasoning behind key values.

0 — Values only.

1 — Values and rules without reasons.

2 — All three for every group.

3 — As adequate, and one reason references evidence from an earlier module.

Repair: For each group write when to use it and why the value was chosen; both are needed. Recheck: The foundations page.

**Contrast is measured and permitted pairs listed**

Adequate evidence: A table of permitted pairs with ratios and an explicit forbidden list.

0 — No contrast information.

1 — Ratios recorded without permitted or forbidden guidance.

2 — Both lists with measured ratios.

3 — As adequate, and quiet text such as captions and disabled labels is covered.

Repair: Measure every pair you allow, including quiet text, and split them into permitted and forbidden. Recheck: The contrast table.

**Motion values include reduced-motion pairs**

Adequate evidence: Durations and easings documented with their reduced alternatives.

0 — Motion absent from the foundations.

1 — Durations documented without reduced pairs.

2 — Both documented together.

3 — As adequate, and essential motion is distinguished from decorative.

Repair: Bring your m09 sheet into the foundations and add the reduced pair for each entry. Recheck: The motion foundations.

**Do-and-do-not pairs come from real mistakes**

Adequate evidence: One pair per group, each traceable to something that actually went wrong.

0 — No examples.

1 — Invented examples.

2 — Examples drawn from real mistakes in your work.

3 — As adequate, and each names the consequence of the wrong usage.

Repair: Look back through your screens for misuse you have already committed and photograph both versions. Recheck: The example pairs.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson specifies one component completely enough for somebody else to build it.

**Review criteria:**

- Each foundation group has values, rules and reasons
- Contrast is measured and permitted pairs listed
- Motion values include reduced-motion pairs
- Do-and-do-not pairs come from real mistakes

<details>
<summary>Reading, video and deeper explanation</summary>

- A palette is not a foundation. “Surface-muted, used for panels that sit behind primary content, never for text backgrounds below 14px” is a foundation, because it answers the question someone will actually have. Publishing values alone leaves every future decision to be re-argued from taste, which is exactly what the system was supposed to prevent.
- Reasons are what survive disagreement. Someone will want a slightly different grey, and a reason — this is the lightest neutral that keeps body text above the contrast threshold — settles it in one sentence. Without reasons, the discussion is preference against preference and the person with more time wins.
- Contrast belongs in the foundations because it is where pairs get chosen. Publishing the measured ratios beside permitted combinations prevents the common failure where a component is built from two tokens that individually seem fine and together fall below the threshold.
- Showing the wrong usage is unusually valuable. A do-and-do-not pair communicates a rule faster than a paragraph, and it pre-empts the specific misuse you have already seen happen — which, in your own work, you can name from experience rather than imagining.

[GOV.UK Design System: styles](https://design-system.service.gov.uk/styles/).

</details>

## Lesson 3: The anatomy of one component

Stable ID: m13-l03-v1. Core.

A component specification is what lets someone else build it correctly without asking you. That is the whole test.

Bring: Your inventory and key tables.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Named anatomy for one component
- A variant-by-state grid with every cell decided
- Content rules covering long, missing and unusual values
- Keyboard behaviour and a when-not-to-use section

### Start here: in everyday words

A design system is a shared set of decisions and reusable parts that helps a team build consistent products. In this lesson, your first small result is: One component chosen with a reason, and every part named with the optional ones marked.

**Words you will use**

- **Anatomy:** The named parts of a component. Naming them is what lets two people talk about the same thing without pointing at a screen.
- **Optional part:** Something that may be absent. Marking it forces the question of what the layout does without it, which is where most components break.
- **Variant:** A deliberate difference you decided: compact, unavailable, featured. It is chosen at design time.

**Quick example.** Made-up example. Specifying a tool card, and putting a state in the variant column. Default, compact, unavailable, loading and error. Five variants, which felt thorough.

The reader demonstrates and guides the task before asking for “Which component you are specifying, and why this one”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Specify one component completely: anatomy, variants, states, content rules, keyboard behaviour and when not to use it.


### Anatomy names the parts, so people can talk about them precisely

Section: learn. Stable action: learn-1.

Anatomy names the parts, so people can talk about them precisely.


### Idea 2: Variants are deliberate differences; states are situations the…

Section: learn. Stable action: learn-2.

Variants are deliberate differences; states are situations the same variant enters.


### Content rules prevent the component breaking on real text

Section: learn. Stable action: learn-3.

Content rules prevent the component breaking on real text.


### Keyboard behaviour belongs in the specification, not in a later ticket

Section: learn. Stable action: learn-4.

Keyboard behaviour belongs in the specification, not in a later ticket.


### A when-not-to-use section is what stops a component being misapplied

Section: learn. Stable action: learn-5.

A when-not-to-use section is what stops a component being misapplied.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- The class card was specified. Anatomy: container, image slot (optional), title, meta row, status area, action. Variants: default, compact, unavailable. States for each: default, hover, focus, loading, error. Content rules: title truncates to two lines keeping the beginning, meta row wraps rather than truncating, status area always shows text as well as colour, image slot may be absent without changing layout height. Keyboard: the whole card is not a target — the title is the link and the action is a button, matching the m09 tables. When not to use: not for a single featured item, where a dedicated layout reads better; not as a navigation element.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Name the parts

Section: practice-plan. Stable action: step-1-brief.

One component chosen with a reason, and every part named with the optional ones marked.

- Read the assigned component page for a comparable component.
- Name every part of your component, marking optional ones.

**Start here:** Draw the component and label every part, including the container itself.

**Enough:** Somebody could refer to any part of it by name in a sentence you would understand.

**Anatomy:** The named parts of a component. Naming them is what lets two people talk about the same thing without pointing at a screen.

**Optional part:** Something that may be absent. Marking it forces the question of what the layout does without it, which is where most components break.


### Which component you are specifying, and why this one

Section: practice-plan. Stable action: write-component-chosen.

The one that appears most often, or the one an engineer has asked you about.

**Answer:** Which component you are specifying, and why this one

The one that appears most often, or the one an engineer has asked you about.


### Every part, with the optional ones marked

Section: practice-plan. Stable action: write-anatomy-parts.

Write your answer for “Every part, with the optional ones marked”. Use the task instructions below to decide what to include.

**Answer:** Every part, with the optional ones marked



<details>
<summary>Example</summary>

Example (made up): container, image slot (optional), title, meta row, status area, action.

</details>


### Build the grid

Section: practice-plan. Stable action: step-2-brief.

Variants and states separated, with every applicable cell of the grid decided and the impossible ones marked.

- List variants down one axis and states across the other.
- Decide every applicable cell, marking the ones that cannot occur.

**Start here:** Draw the grid before filling anything in: variants down, states across.

**Enough:** No cell is blank. Every one is either decided or marked as impossible.

**Variant:** A deliberate difference you decided: compact, unavailable, featured. It is chosen at design time.

**State:** A situation the same variant enters: hover, focus, loading, error. It is entered at run time.

**Impossible cell:** A combination that cannot happen. Marking it is a decision; leaving it blank looks like an oversight.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Specifying a tool card, and putting a state in the variant column.

**What I listed as variants:** Default, compact, unavailable, loading and error. Five variants, which felt thorough.

**What went wrong when it was built:** The engineer asked what the compact card looks like while loading. My list had no answer, because loading was sitting beside compact rather than crossing it.

**The distinction I had missed:** Compact is a decision I make when I place the card. Loading is a situation the card is in for two seconds. One is chosen at design time, the other at run time.

**What the grid became:** Three variants down the side — default, compact, unavailable — and five states across the top. Fifteen cells, of which twelve needed deciding and three could not occur.

**The three that could not occur:** An unavailable card has no hover treatment, because there is nothing to press. I marked those cells rather than leaving them blank, so nobody has to ask whether I forgot.

**Wrong turn:** The wrong turn is listing states as variants, because in a design file they all look like different versions of the card. The grid is what exposes it: a list has no second axis for the question to appear on.

**Trade-off:** Fifteen cells is more work than five, and eight of them are nearly identical. The four that are not are the ones somebody would otherwise have had to ask about.

**Unknown:** Still unknown: whether the compact variant needs an error state at all, since nothing in it can fail independently. I decided the cell anyway rather than leaving it open.


### The variants, and what makes each one a deliberate difference

Section: practice-plan. Stable action: write-variants.

A variant is a decision. A state is a situation the same variant enters.

**Answer:** The variants, and what makes each one a deliberate difference

A variant is a decision. A state is a situation the same variant enters.


### Every variant against every state, with the cells that cannot occur marked

Section: practice-plan. Stable action: write-state-grid.

Write your answer for “Every variant against every state, with the cells that cannot occur marked”. Use the task instructions below to decide what to include.

**Answer:** Every variant against every state, with the cells that cannot occur marked



<details>
<summary>Example</summary>

Example (made up): unavailable variant, hover state: no hover treatment, because there is nothing to press.

</details>


### Write content rules

Section: practice-plan. Stable action: step-3-brief.

Content rules covering long values, missing optional parts, and a truncation rule that says what it preserves.

- Specify behaviour for long, short, missing and unusual values.
- State the truncation rule and what it preserves.

**Start here:** Find the longest real title in your data and put it into the component.

**Enough:** No content rule uses the words appropriate, reasonable or sensible.

**Content rule:** What the component does with text it was not designed for. Real content is longer, shorter and stranger than the content in your design file.

**Truncation:** Cutting text that does not fit. The rule has to say what is preserved, because the beginning and the end carry different information.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six lines from a made up tool card specification. For each one, decide whether an engineer could build it without asking you.

The title truncates to two lines, keeping the beginning, because the beginning distinguishes one tool from another.

- buildable as written
- needs one question answered
- not a specification at all

<details>
<summary>After your attempt</summary>

buildable as written — How many lines, which end survives, and why. Nothing is left to interpretation.

needs one question answered — The three things somebody would ask are all answered in the sentence.

not a specification at all — It is one of the more complete lines a specification can carry.

Now read your own content rules the same way, and rewrite anything in the second or third group.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six lines from a made up tool card specification. For each one, decide whether an engineer could build it without asking you.

The title should be an appropriate length for the card.

- buildable as written
- needs one question answered
- not a specification at all

<details>
<summary>After your attempt</summary>

buildable as written — Appropriate is decided by whoever is building it, which means it is not decided.

needs one question answered — It needs the whole rule, not a clarification.

not a specification at all — It reads like a requirement and contains no decision. These lines are the ones that survive review because nobody can disagree with them.

Now read your own content rules the same way, and rewrite anything in the second or third group.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six lines from a made up tool card specification. For each one, decide whether an engineer could build it without asking you.

If the image is absent, the card keeps its full height and the text block is vertically centred.

- buildable as written
- needs one question answered
- not a specification at all

<details>
<summary>After your attempt</summary>

buildable as written — The two things that matter about a missing optional part — the height and the arrangement — are both decided.

needs one question answered — Nothing is left open.

not a specification at all — It is exactly what a content rule should look like.

Now read your own content rules the same way, and rewrite anything in the second or third group.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six lines from a made up tool card specification. For each one, decide whether an engineer could build it without asking you.

The meta row wraps rather than truncating.

- buildable as written
- needs one question answered
- not a specification at all

<details>
<summary>After your attempt</summary>

buildable as written — It says what happens and not how far. Three lines of meta on a compact card may be wrong, and nothing here says.

needs one question answered — Wrapping to a maximum of how many lines, and what happens after that. One question, quickly answered.

not a specification at all — It carries a real decision: wrap rather than truncate. It is simply incomplete.

Now read your own content rules the same way, and rewrite anything in the second or third group.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six lines from a made up tool card specification. For each one, decide whether an engineer could build it without asking you.

The status area shows the status.

- buildable as written
- needs one question answered
- not a specification at all

<details>
<summary>After your attempt</summary>

buildable as written — It names the part and restates its name. Nothing about what it shows, in what words, or how.

needs one question answered — It needs all of them: the wording, whether colour is involved, and what happens when the status is unknown.

not a specification at all — A part described by its own name is the commonest empty line in a component specification.

Now read your own content rules the same way, and rewrite anything in the second or third group.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six lines from a made up tool card specification. For each one, decide whether an engineer could build it without asking you.

The whole card is not a target. The title is the link and the action is a button, matching the Module 9 key table.

- buildable as written
- needs one question answered
- not a specification at all

<details>
<summary>After your attempt</summary>

buildable as written — It says what is interactive, what each thing is, and where the behaviour is specified. An engineer can build it and check it.

needs one question answered — The reference to the key table answers the questions about keys.

not a specification at all — It is a decision with consequences, which is what a specification is made of.

Now read your own content rules the same way, and rewrite anything in the second or third group.

</details>


### What happens with a value far longer than you designed for

Section: practice-plan. Stable action: write-long-values.

Write your answer for “What happens with a value far longer than you designed for”. Use the task instructions below to decide what to include.

**Answer:** What happens with a value far longer than you designed for




### What happens when an optional part is absent

Section: practice-plan. Stable action: write-missing-values.

Does the layout keep its height, collapse, or rearrange? Decide it here rather than per screen.

**Answer:** What happens when an optional part is absent

Does the layout keep its height, collapse, or rearrange? Decide it here rather than per screen.


### The truncation rule, and what it preserves

Section: practice-plan. Stable action: write-truncation.

Write your answer for “The truncation rule, and what it preserves”. Use the task instructions below to decide what to include.

**Answer:** The truncation rule, and what it preserves



<details>
<summary>Example</summary>

Example (made up): the title truncates to two lines keeping the beginning, because the beginning is what distinguishes one class from another.

</details>


### Add behaviour and boundaries

Section: practice-plan. Stable action: step-4-brief.

Keyboard behaviour brought from your Module 9 table, and a when-not-to-use section naming what to use instead.

- Bring the keyboard behaviour from your m09 table.
- Write when not to use this component and what to use instead.

**Start here:** Copy the keyboard rows from your Module 9 table rather than writing them again.

**Enough:** Each prohibition names an alternative.

**When not to use:** The section that stops a component being applied to something it was never for. Without it, every component eventually becomes every component.

**What to use instead:** The other half of the boundary. A prohibition with no alternative gets ignored, because somebody still has to build the screen.


### The keyboard behaviour, brought from your Module 9 table

Section: practice-plan. Stable action: write-keyboard-spec.

Write your answer for “The keyboard behaviour, brought from your Module 9 table”. Use the task instructions below to decide what to include.

**Answer:** The keyboard behaviour, brought from your Module 9 table




### When not to use this component, and what to use instead

Section: practice-plan. Stable action: write-when-not.

This is the section that stops a component being applied to things it was never for.

**Answer:** When not to use this component, and what to use instead

This is the section that stops a component being applied to things it was never for.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your component specification has the visual design, the variants and the states. Is it complete?

- Not yet. Content rules, keyboard behaviour and a when-not-to-use section are what make it reusable, and they are what designers most often leave out.
- Yes, since those three cover what the component looks like in every situation.
- Nearly, apart from the colour values.

<details>
<summary>After your attempt</summary>

Not yet. Content rules, keyboard behaviour and a when-not-to-use section are what make it reusable, and they are what designers most often leave out. — The visual design is one part. What lets somebody build it without asking you is the anatomy, the decided grid, the content rules and the boundaries.

Yes, since those three cover what the component looks like in every situation. — They cover appearance in every situation. Nothing yet says what happens to a title of eleven words, or which key does what.

Nearly, apart from the colour values. — Colour comes from the foundations. The gaps are behaviour and content.

Improve: Add the missing sections in steps 3 and 4, and record the change in step 5.

Check again: Your specification covers content, keyboard and boundaries as well as appearance.

Answers to revisit: given-to, questions-asked, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You have listed loading and error alongside compact and unavailable as variants. What goes wrong?

- They are states rather than variants, so nothing says what a compact card looks like while loading.
- Nothing, provided all five are specified.
- The list is simply too long.

<details>
<summary>After your attempt</summary>

They are states rather than variants, so nothing says what a compact card looks like while loading. — A variant is chosen at design time; a state is entered at run time. Listing them together removes the second axis, and the combinations stop being visible.

Nothing, provided all five are specified. — All five being specified leaves fifteen combinations of which five are covered.

The list is simply too long. — Length is not the problem. The grid is usually more cells than the list, and it answers questions the list cannot.

Improve: Rebuild the grid in step 2 with variants down and states across, and decide or exclude every cell. Record the change in step 5.

Check again: No cell of the grid is blank.

Answers to revisit: variants, state-grid, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A content rule says the title should be an appropriate length. What is wrong with it?

- Appropriate is decided by whoever builds it, so the decision has been handed back rather than made.
- Nothing, since the designer will review the build.
- It should specify a character count instead.

<details>
<summary>After your attempt</summary>

Appropriate is decided by whoever builds it, so the decision has been handed back rather than made. — Lines like this survive review because nobody can disagree with them. The buildable version names the number of lines, which end survives, and why.

Nothing, since the designer will review the build. — Reviewing afterwards costs a round trip on something a sentence could have settled.

It should specify a character count instead. — A character count is one way and often the wrong one, since two lines of a proportional typeface is not a fixed count. Lines and which end survives is usually better.

Improve: Rewrite that rule in step 3 to name lines, the end preserved and the reason. Record the change in step 5.

Check again: No content rule leaves a decision to the reader.

Answers to revisit: long-values, missing-values, truncation, improvement-made

</details>


### Test the specification

Section: practice. Stable action: step-5-brief.

The specification given to somebody, or built from cold by you, with every question they had to ask recorded.

- Give it to someone and ask what they would build.
- Record every question they had to ask you.
- Save the specification and the questions.

**Start here:** Hand it over without explaining anything, and write down every question rather than answering it immediately.

**Enough:** The questions are recorded as holes in the document rather than as things you explained away.

**Testing a specification:** Giving it to somebody and asking what they would build. Every question they ask is a hole, and the questions are the result.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### See the decision being made

Section: practice. Stable action: step-5-demo.

Made-up example. Testing a tool card specification, and defending it instead of testing it.

**What I did:** Sent the specification and sat with the person while they read it, which seemed helpful.

**What happened:** They asked what the compact card does with a long title. I answered in four seconds, they nodded, and we both moved on.

**What that cost:** The question was a hole in the document, and it had just been filled by my being in the room. Nothing changed in the specification, and I had forgotten the question by the afternoon.

**What I did the second time:** Sent it and said I would answer everything at the end. Five questions arrived, written down, and I answered all five afterwards.

**What the five turned into:** Four sentences added to the specification, and one genuine ambiguity I had not noticed: whether the unavailable variant can also be compact. Nothing in the document said, and I had not decided.

**Wrong turn:** The wrong turn is answering questions as they arrive, because being helpful is the natural thing to do and it destroys the result. The questions are the finding, and answering them in the room deletes the evidence.

**Trade-off:** Refusing to answer for twenty minutes feels obstructive, and the person reading it works more slowly than they would have with you narrating.

**Unknown:** Still unknown: how many holes remain that this reader happened not to hit. One reader finds the holes one reader finds.


### Who you gave it to, or how you tested it alone

Section: practice. Stable action: write-given-to.

If nobody is available, leave it a day and build from it yourself without looking at the screens. Write that here.

**Answer:** Who you gave it to, or how you tested it alone

If nobody is available, leave it a day and build from it yourself without looking at the screens. Write that here.


### Every question they had to ask you

Section: practice. Stable action: write-questions-asked.

Each question is a hole in the specification. That is the whole result of this step.

**Answer:** Every question they had to ask you

Each question is a hole in the specification. That is the whole result of this step.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson builds this component and finds out which of its states actually exist.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: The anatomy of one component
What I am trying to do: Specify one component completely: anatomy, variants, states, content rules, keyboard behaviour and when not to use it.

Key idea or terms:
Anatomy: The named parts of a component. Naming them is what lets two people talk about the same thing without pointing at a screen.
Optional part: Something that may be absent. Marking it forces the question of what the layout does without it, which is where most components break.
Variant: A deliberate difference you decided: compact, unavailable, featured. It is chosen at design time.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Specifying a tool card, and putting a state in the variant column. Default, compact, unavailable, loading and error. Five variants, which felt thorough.

Activity: Give me one inconsistent component or rule from the supplied case. Ask me to choose the shared decision, name what must stay flexible and explain how another person would know which version is current.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Which component you are specifying, and why this one” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Which component you are specifying, and why this one”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “Which component you are specifying, and why this one” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Draw the component and label each region; mark anything that may be absent.
- Draw the grid and fill every cell; the empty ones are the work.

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — One comparable component, read for anatomy, variants, states, content rules and when not to use it. Purpose: Supplies the structure of a complete specification. Free reading, no account. Verified 2026-09-06. Take the specification structure, not the visual design or the government brand. Fallback: R06.
- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — The pattern matching your component, read for its keyboard interaction. Purpose: Ensures the specification's key behaviour matches established expectations. Free reading, no account. Verified 2026-09-06; pages carry no date. Semantics and keys only; guidance rather than a conformance standard. Fallback: R14.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Anatomy names every part including optional ones**

Adequate evidence: A labelled diagram or list of parts with optionality marked.

0 — No anatomy.

1 — Parts named without optionality.

2 — All parts named with optional ones marked.

3 — As adequate, and the naming is reused consistently in the rest of the specification.

Repair: Draw the component and label each region; mark anything that may be absent. Recheck: The anatomy.

**The variant-by-state grid is complete**

Adequate evidence: A grid with every applicable cell decided and impossible cells marked.

0 — Variants listed without states.

1 — A partial grid.

2 — Complete grid with impossible combinations marked.

3 — As adequate, and one gap found by the grid is recorded as a design decision.

Repair: Draw the grid and fill every cell; the empty ones are the work. Recheck: The completed grid.

**Content rules cover long, missing and unusual values**

Adequate evidence: Rules for truncation, wrapping, absence and edge values.

0 — No content rules.

1 — Length limits without behaviour.

2 — Behaviour specified for each case.

3 — As adequate, and the truncation rule preserves the distinguishing part of the value.

Repair: Take your worst real content and write what the component does with each case. Recheck: The content rules.

**Keyboard behaviour and boundaries are specified**

Adequate evidence: Key behaviour from the m09 table plus a when-not-to-use section.

0 — Neither specified.

1 — One of the two.

2 — Both specified with alternatives named.

3 — As adequate, and the boundary section cites a real misuse you have seen.

Repair: Copy the key table into the specification and write two sentences on when to use something else. Recheck: The behaviour and boundary sections.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson builds this component and finds out which of its states actually exist.

**Review criteria:**

- Anatomy names every part including optional ones
- The variant-by-state grid is complete
- Content rules cover long, missing and unusual values
- Keyboard behaviour and boundaries are specified

<details>
<summary>Reading, video and deeper explanation</summary>

- Naming the parts makes everything else possible. Once a component has a container, a label, an optional icon and a status area, a conversation about it stops being gestural and becomes precise: “the status area wraps when the label runs long” is actionable, and “the card looks broken sometimes” is not.
- Variants and states get confused constantly. A variant is a deliberate difference you chose — primary, secondary, quiet — while a state is a situation the component finds itself in: focused, loading, disabled, error. Every variant can enter every applicable state, which is what makes the specification a grid rather than a list, and which is where most gaps are found.
- Content rules are what keep a component alive in production. Minimum and maximum lengths, what happens when the label wraps or truncates, whether an icon is optional, what a missing value shows — all of these were discovered in your m08 dense-data lesson, and writing them down here prevents rediscovering them per screen.
- The when-not-to-use section is the mark of a specification written by someone who has watched a component be misused. It is also the cheapest governance available: a rule that says “not for navigation; use a link” prevents an entire category of future misuse without a single meeting.

[GOV.UK Design System: components](https://design-system.service.gov.uk/components/).

</details>

## Lesson 4: Build it, and prove the states exist

Stable ID: m13-l04-v1. Core.

A specified state that has never been rendered is a guess. Building the grid is what turns the specification into a system.

Bring: Your component specification and a text editor.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- The component built from tokens
- A page showing every variant against every state
- Three awkward content cases rendered
- A list of specification problems the build revealed

### Start here: in everyday words

A design system is a shared set of decisions and reusable parts that helps a team build consistent products. In this lesson, your first small result is: The component built from token values only, with any value the foundations do not have written down rather than added.

**Words you will use**

- **Built from tokens:** Every colour, size and space coming from a named foundation value rather than being typed in. It is what makes one change reach everything.
- **Missing token:** A value the component needs that the foundations do not offer. It is a finding about one of the two, and it should not be resolved by quietly typing a number.
- **Demonstrable on demand:** You can make the state appear whenever you want, usually by adding a class. A state that only shows up when the network is slow cannot be reviewed.

**Quick example.** Made-up example. Building the states of a tool card, and treating a difficult state as a coding problem. The loading state on the compact variant. I spent an hour on it and every version either changed the card’s height or lost the status line.

The reader demonstrates and guides the task before asking for “Where the component and its states page live”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Build your specified component in HTML and CSS with every state demonstrable, and publish a page showing all of them at once.


### Build from the foundations: every value comes from a token

Section: learn. Stable action: learn-1.

Build from the foundations: every value comes from a token.


### Every state in the grid must be demonstrable on demand

Section: learn. Stable action: learn-2.

Every state in the grid must be demonstrable on demand.


### A single page showing all states is the system's most useful artefact

Section: learn. Stable action: learn-3.

A single page showing all states is the system's most useful artefact.


### Build the awkward content case, not the tidy one

Section: learn. Stable action: learn-4.

Build the awkward content case, not the tidy one.


### If a state is hard to build, the specification may be wrong

Section: learn. Stable action: learn-5.

If a state is hard to build, the specification may be wrong.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- The class card was built in about eighty lines, every value from a token. The states page shows three variants against five states, plus three content cases: a very long title, a missing image and a class with one place left. Building revealed two specification problems. The loading and unavailable states looked nearly identical in greyscale and needed a second distinguishing signal. And the compact variant could not accommodate the status text at all, which meant it was either a different component or the status rule needed changing — recorded as an open decision rather than patched.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Build the default

Section: practice-plan. Stable action: step-1-brief.

The component built from token values only, with any value the foundations do not have written down rather than added.

- Build the component using only token values.
- Record any value you needed that the foundations do not have.

**Start here:** Open your foundations page beside the editor and refer to it rather than to the design file.

**Enough:** No raw value appears in the component, and anything you were tempted to type is written down instead.

**Built from tokens:** Every colour, size and space coming from a named foundation value rather than being typed in. It is what makes one change reach everything.

**Missing token:** A value the component needs that the foundations do not offer. It is a finding about one of the two, and it should not be resolved by quietly typing a number.


### Where the component and its states page live

Section: practice-plan. Stable action: write-built-where.

One HTML file and your existing stylesheet, in your own folder. No framework or build step.

**Answer:** Where the component and its states page live

One HTML file and your existing stylesheet, in your own folder. No framework or build step.


### How you kept every value coming from a token

Section: practice-plan. Stable action: write-tokens-only.

Write your answer for “How you kept every value coming from a token”. Use the task instructions below to decide what to include.

**Answer:** How you kept every value coming from a token




### Any value you needed that the foundations do not have

Section: practice-plan. Stable action: write-missing-tokens.

Do not quietly add it. Write it here and decide in step 5 whether the foundations or the component is wrong.

**Answer:** Any value you needed that the foundations do not have

Do not quietly add it. Write it here and decide in step 5 whether the foundations or the component is wrong.


### Build the states

Section: practice-plan. Stable action: step-2-brief.

Every state from the grid built so it can be shown on demand, with any that were hard to build noted.

- Add each state from the grid so it can be shown on demand.
- Include focus, loading, disabled and error where applicable.

**Start here:** Build the state you are least sure about first, before the easy ones.

**Enough:** Every state can be shown by you, deliberately, in a second.

**Demonstrable on demand:** You can make the state appear whenever you want, usually by adding a class. A state that only shows up when the network is slow cannot be reviewed.

**Hard to build:** A signal, not an obstacle. A state that fights the markup usually means the specification asked for something the component is not shaped for.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Building the states of a tool card, and treating a difficult state as a coding problem.

**What was difficult:** The loading state on the compact variant. I spent an hour on it and every version either changed the card’s height or lost the status line.

**What I assumed:** That I was not good enough at CSS yet. It was my second week of building and that assumption was comfortable.

**What was actually wrong:** The compact variant has no room for the status text at all. The loading state has to reserve that room, and the variant’s whole reason for existing is not having it.

**What that meant:** Either the compact card is a different component, or the status rule is wrong. Both are design decisions, and neither is fixable in CSS.

**What I recorded:** The hour as a finding rather than a failure, and the question as an open decision for the variant lesson rather than something patched at three in the afternoon.

**Wrong turn:** The wrong turn is treating a state that will not build as a problem with your skill, because early on that is always plausible. A state that fights the markup is usually a specification saying two incompatible things.

**Trade-off:** Stopping to record it leaves a visibly incomplete states page, and somebody looking at it will assume you ran out of time.

**Unknown:** Still unknown: whether the compact variant should exist at all. It was added because a screen felt cramped, which is a weaker reason than I thought when I wrote it.


### Which states you built, and how each one can be shown on demand

Section: practice-plan. Stable action: write-states-built.

Showable on demand means a class you can add, or a copy of the markup on the page. Not something that only appears if the network is slow.

**Answer:** Which states you built, and how each one can be shown on demand

Showable on demand means a class you can add, or a copy of the markup on the page. Not something that only appears if the network is slow.


### Any state that was hard to build, and what that suggested about the specification

Section: practice-plan. Stable action: write-hard-to-build.

Write your answer for “Any state that was hard to build, and what that suggested about the specification”. Use the task instructions below to decide what to include.

**Answer:** Any state that was hard to build, and what that suggested about the specification




### Make the states page

Section: practice-plan. Stable action: step-3-brief.

One page showing every variant against every state, with each cell labelled so it reads without explanation.

- Render every variant against every state on one page.
- Label each cell so the page is readable without explanation.

**Start here:** Copy the markup once per cell rather than trying to build something clever that generates them.

**Enough:** Somebody could find the cell they need without asking you which is which.

**States page:** One page holding every combination at once. It is the most useful artefact a design system produces, because it is checkable in one look.

**Labelled cell:** The variant and the state named beside each example. Without labels the page is a mood board.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Building the states page for a tool-library system, and building it for somebody who already knew.

**What I made:** A grid of fifteen cards, three rows and five columns, laid out neatly with no text on it anywhere.

**Why it looked fine to me:** I knew the order. Row two was compact, column four was loading, and I could read the page as a table because I had drawn the table.

**What happened when somebody else opened it:** They asked which one was the error state. Two of the columns look very similar until you know what you are looking at, and the page offered nothing to look it up with.

**What I added:** The variant and the state named above every cell. Thirty small labels, ten minutes, and the page stopped needing me beside it.

**What else the labels caught:** Writing them out showed that two cells were the same markup pasted twice. One state had never actually been built and I had not noticed while the page was unlabelled.

**Wrong turn:** The wrong turn is laying out a states page as a grid whose meaning comes from its position, because that reads perfectly to the person who built it. Everyone else sees a collection of similar cards.

**Trade-off:** Thirty labels make the page busier and less attractive to show. It is a reference rather than a portfolio image, and a reference has to be readable alone.

**Unknown:** Still unknown: whether anybody will use this page in a month. It exists, and whether it is consulted is something the documentation lesson tests rather than this one.


### How the page is laid out, and how each cell is labelled

Section: practice-plan. Stable action: write-page-layout.

Write your answer for “How the page is laid out, and how each cell is labelled”. Use the task instructions below to decide what to include.

**Answer:** How the page is laid out, and how each cell is labelled



<details>
<summary>Example</summary>

Example (made up): three variants down the page, five states across each row, with the variant and state named above every cell.

</details>


### What somebody would understand from it without you explaining anything

Section: practice-plan. Stable action: write-page-readable.

Write your answer for “What somebody would understand from it without you explaining anything”. Use the task instructions below to decide what to include.

**Answer:** What somebody would understand from it without you explaining anything




### Add the awkward content

Section: practice-plan. Stable action: step-4-brief.

Three awkward content cases rendered, with which content rules held and which did not.

- Render the long title, the missing value and the edge case.
- Check the content rules hold.

**Start here:** Find the longest real title in your data and paste it in before you look at anything else.

**Enough:** Each awkward case is rendered on the page rather than described.

**Awkward content:** The long title, the missing value, the edge case. Components survive tidy content and break on real content, so tidy content proves nothing.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six things found while building a made up tool card. For each one, decide what kind of problem it is.

A title of eleven words pushes the action out of the card, and the specification says nothing about how long a title may be.

- a build problem
- a specification problem
- a foundations problem

<details>
<summary>After your attempt</summary>

a build problem — You can make it stop overflowing in a minute. What you cannot decide in a minute is which end of the title survives.

a specification problem — The content rule is missing. Fixing it in CSS chooses an answer silently, and the next person builds a different one.

a foundations problem — Nothing about spacing or type is at fault.

Now sort your own findings the same way, and let the specification problems go into step 5 rather than being patched here.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six things found while building a made up tool card. For each one, decide what kind of problem it is.

The loading and unavailable states are indistinguishable in greyscale.

- a build problem
- a specification problem
- a foundations problem

<details>
<summary>After your attempt</summary>

a build problem — Both were built exactly as specified.

a specification problem — The specification gave two states one distinguishing signal, and it was colour. A second signal has to be decided rather than picked in the editor.

a foundations problem — The foundations already forbid colour-only meaning, which is how this was caught. The component broke the rule.

Now sort your own findings the same way, and let the specification problems go into step 5 rather than being patched here.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six things found while building a made up tool card. For each one, decide what kind of problem it is.

The card needs a 6 pixel gap, and the spacing scale offers 4 and 8.

- a build problem
- a specification problem
- a foundations problem

<details>
<summary>After your attempt</summary>

a build problem — Typing 6 makes it look right and puts a raw value in a component built from tokens.

a specification problem — The specification did not name a number, and it was not supposed to.

a foundations problem — Either 4 or 8 works and nobody can tell, or the scale genuinely lacks a step. Both answers belong on the foundations page rather than in the card.

Now sort your own findings the same way, and let the specification problems go into step 5 rather than being patched here.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six things found while building a made up tool card. For each one, decide what kind of problem it is.

The focus ring is clipped by the card’s edge because the container hides overflow.

- a build problem
- a specification problem
- a foundations problem

<details>
<summary>After your attempt</summary>

a build problem — The specification asks for a visible focus ring and the markup is cutting it off. This one really is a coding fix.

a specification problem — The specification is right; the build does not do what it says.

a foundations problem — The ring value came from the foundations and is fine.

Now sort your own findings the same way, and let the specification problems go into step 5 rather than being patched here.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six things found while building a made up tool card. For each one, decide what kind of problem it is.

The compact variant has no room for the status text, which every card is required to show.

- a build problem
- a specification problem
- a foundations problem

<details>
<summary>After your attempt</summary>

a build problem — No amount of building creates room that the variant exists in order not to have.

a specification problem — Two rules contradict each other: compact means less, and status is always shown. One of them has to change, and it is a decision.

a foundations problem — Nothing in the foundations is involved.

Now sort your own findings the same way, and let the specification problems go into step 5 rather than being patched here.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six things found while building a made up tool card. For each one, decide what kind of problem it is.

With no image the card collapses to half height, and the specification says the height is kept.

- a build problem
- a specification problem
- a foundations problem

<details>
<summary>After your attempt</summary>

a build problem — The rule exists, is clear, and is not implemented. Straightforward to fix.

a specification problem — The specification already decided this one, which is what makes it a build problem rather than a question.

a foundations problem — No foundation value is involved.

Now sort your own findings the same way, and let the specification problems go into step 5 rather than being patched here.

</details>


### The three awkward cases you rendered, and what happened

Section: practice-plan. Stable action: write-awkward-cases.

Write your answer for “The three awkward cases you rendered, and what happened”. Use the task instructions below to decide what to include.

**Answer:** The three awkward cases you rendered, and what happened



<details>
<summary>Example</summary>

Example (made up): a title of eleven words, a class with no image, and one with a single place left.

</details>


### Which content rules held, and which did not

Section: practice-plan. Stable action: write-rules-held.

Write your answer for “Which content rules held, and which did not”. Use the task instructions below to decide what to include.

**Answer:** Which content rules held, and which did not




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You plan to add the remaining states when a screen needs them. What is wrong with that?

- The first screen using the component under real conditions needs them, and retrofitting means changing a design that assumed they did not exist.
- Nothing, provided the specification lists them.
- It is inefficient to come back to the component twice.

<details>
<summary>After your attempt</summary>

The first screen using the component under real conditions needs them, and retrofitting means changing a design that assumed they did not exist. — Loading, empty and error are not rare. Building them now costs an hour on the states page; building them later costs a redesign of whatever was laid out without room for them.

Nothing, provided the specification lists them. — A specified state nobody has rendered is a guess. The build is what finds out whether it is possible.

It is inefficient to come back to the component twice. — That is the smallest cost. The real one is the screen that has to change.

Improve: Build any state in step 2 you were going to leave until later, and record what it showed. Note the change in step 5.

Check again: Every cell of your grid exists on the states page.

Answers to revisit: states-built, hard-to-build, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A state takes an hour and will not build properly. What is the most likely explanation?

- The specification is asking for two incompatible things, and no amount of building resolves a contradiction.
- Your CSS is not good enough yet.
- The component needs to be rebuilt from scratch.

<details>
<summary>After your attempt</summary>

The specification is asking for two incompatible things, and no amount of building resolves a contradiction. — A compact variant that must also show a status is the usual shape of it. That is a design decision, and it should be recorded as an open one rather than patched at the end of the afternoon.

Your CSS is not good enough yet. — Sometimes true, and it is the comfortable assumption early on. Check the specification for a contradiction before assuming it.

The component needs to be rebuilt from scratch. — A rebuild against the same contradictory specification produces the same hour.

Improve: Write that state into the hard-to-build field in step 2 with what it suggests, and into the specification problems in step 5. Record the change.

Check again: Nothing difficult was resolved by quietly changing the design.

Answers to revisit: states-built, hard-to-build, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The card needs a 6 pixel gap and your scale offers 4 and 8. What should you do?

- Try 4 and 8 first. If neither works, that is a finding about the foundations rather than a reason to type 6.
- Use 6, since the component has to look right.
- Redesign the card so it does not need the gap.

<details>
<summary>After your attempt</summary>

Try 4 and 8 first. If neither works, that is a finding about the foundations rather than a reason to type 6. — Usually one of them works and nobody can tell. When neither does, the scale genuinely lacks a step, and that belongs on the foundations page with a reason rather than inside one component.

Use 6, since the component has to look right. — A raw value inside a component built from tokens is the first crack. The next one is easier to justify, and by the tenth the system permits everything.

Redesign the card so it does not need the gap. — Possible and usually excessive. Trying the two neighbouring values takes thirty seconds.

Improve: Record any value you needed in step 1 rather than adding it, and decide in step 5 whether the component or the foundations changes. Note the change.

Check again: No raw value sits in the component.

Answers to revisit: built-where, tokens-only, missing-tokens, improvement-made

</details>


### Record what the build revealed

Section: practice. Stable action: step-5-brief.

The specification problems the build revealed, plus greyscale and keyboard checks run on the states page.

- List the specification problems you found.
- Check the states in greyscale and by keyboard.
- Save the component, the page and the problem list.

**Start here:** Turn on greyscale with the whole states page open, and look across the rows rather than down them.

**Enough:** The specification problems are written as open decisions rather than as things you patched.

**What the build reveals:** Contradictions a document can hold quite comfortably and a browser cannot. Every one is a finding about the specification.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Every specification problem the build found

Section: practice. Stable action: write-spec-problems.

Write your answer for “Every specification problem the build found”. Use the task instructions below to decide what to include.

**Answer:** Every specification problem the build found




### What the greyscale and keyboard checks showed on the states page

Section: practice. Stable action: write-grey-keyboard.

A states page is the easiest place in the whole system to run both, because everything is visible at once.

**Answer:** What the greyscale and keyboard checks showed on the states page

A states page is the easiest place in the whole system to run both, because everything is visible at once.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson settles whether the compact card is a variant at all.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Build it, and prove the states exist
What I am trying to do: Build your specified component in HTML and CSS with every state demonstrable, and publish a page showing all of them at once.

Key idea or terms:
Built from tokens: Every colour, size and space coming from a named foundation value rather than being typed in. It is what makes one change reach everything.
Missing token: A value the component needs that the foundations do not offer. It is a finding about one of the two, and it should not be resolved by quietly typing a number.
Demonstrable on demand: You can make the state appear whenever you want, usually by adding a class. A state that only shows up when the network is slow cannot be reviewed.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Building the states of a tool card, and treating a difficult state as a coding problem. The loading state on the compact variant. I spent an hour on it and every version either changed the card’s height or lost the status line.

Activity: Give me one inconsistent component or rule from the supplied case. Ask me to choose the shared decision, name what must stay flexible and explain how another person would know which version is current.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Where the component and its states page live” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Where the component and its states page live”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “Where the component and its states page live” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Search the component's styles for literal values and replace or record each one.
- Build the missing states and put them all on one page with labels.

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The CSS sections you need for states: pseudo-classes, custom properties and layout. Purpose: Supplies the implementation for the state grid. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.
- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — The same comparable component, read for how its states are presented and documented. Purpose: Shows how a published system demonstrates states rather than describing them. Free reading, no account. Verified 2026-09-06. Take the presentation approach, not the visual design. Fallback: R06.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The component is built entirely from tokens**

Adequate evidence: Source using custom properties throughout, with any exception recorded.

0 — Raw values used.

1 — Mostly tokens with untracked exceptions.

2 — Tokens throughout, exceptions recorded and resolved.

3 — As adequate, and a missing foundation role was added deliberately.

Repair: Search the component's styles for literal values and replace or record each one. Recheck: The component source.

**Every state is demonstrable on one page**

Adequate evidence: A states page rendering every applicable variant-state combination, labelled.

0 — Only the default state built.

1 — Some states built, not collected on one page.

2 — All states on one labelled page.

3 — As adequate, and states that look alike are identified and differentiated.

Repair: Build the missing states and put them all on one page with labels. Recheck: The states page.

**Awkward content cases are rendered**

Adequate evidence: Long, missing and edge-case content shown beside the tidy versions.

0 — Tidy content only.

1 — One awkward case.

2 — Three cases rendered with content rules verified.

3 — As adequate, and a content rule was corrected because of what rendering showed.

Repair: Add your worst real values to the states page and check the rules hold. Recheck: The content cases.

**Specification problems found are recorded**

Adequate evidence: A list of contradictions, gaps or ambiguities surfaced by building.

0 — Problems worked around silently.

1 — Noticed but not recorded.

2 — Recorded with the decision or the open question.

3 — As adequate, and one problem is left open rather than patched.

Repair: Write down every moment the build did not match the specification. Recheck: The problem list.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson settles whether the compact card is a variant at all.

**Review criteria:**

- The component is built entirely from tokens
- Every state is demonstrable on one page
- Awkward content cases are rendered
- Specification problems found are recorded

<details>
<summary>Reading, video and deeper explanation</summary>

- Building from tokens is what keeps the component consistent with everything else, and it is the moment your foundations get tested: a component that needs a value the foundations do not have has found either a missing role or an unnecessary variation, exactly as in m08.
- A demonstrable state is one you can show without simulating a server or waiting for an error. Building a page where every state is rendered side by side — every variant against every state — is unglamorous and repays itself constantly: in review, in handover, in testing, and in noticing that two states look identical.
- The awkward content case belongs in that page. Show the long title, the missing image and the unusual number beside the tidy versions, because those are the ones that break and the ones people forget to check when they change something.
- Difficulty is information. A state that is awkward to build often indicates a specification problem: two states that need to be visible simultaneously, a variant that is really a different component, or content rules that contradict each other. Record the difficulty rather than working around it silently.

[MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core).

</details>

## Lesson 5: Variant, or a different component?

Stable ID: m13-l05-v1. Core.

Every system eventually accumulates a component with eleven variants that nobody can hold in their head. The decision rule is what prevents it.

Bring: Your inventory and one built component.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A written variant-or-component test
- Three borderline cases decided with the test applied
- A variant count per component with anything over the limit flagged
- One case decided against reuse, with the reason

### Start here: in everyday words

A design system is a shared set of decisions and reusable parts that helps a team build consistent products. In this lesson, your first small result is: Four questions written down that decide variant or component, each answerable in a sentence.

**Words you will use**

- **Variant:** The same job, done with different emphasis or density. A compact card is still offering you something to choose.
- **Separate component:** A different job, however similar it looks. A record of something you already own is not an option to choose, whatever the shape of the box.
- **The job:** What the reader is doing with it. Choosing between options, reading a record, being sold something: three different jobs that can look identical.

**Quick example.** Made-up example. Deciding whether a booking summary is a variant of the tool card, and deciding by looking. A box with an image, a title, a meta row and an action. Beside the tool card, the two were almost indistinguishable.

The reader demonstrates and guides the task before asking for “The question about the job it does”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Decide for three borderline cases whether they are variants of an existing component or new components, using a written test you can reuse.


### A variant shares the component's job and differs in emphasis or density

Section: learn. Stable action: learn-1.

A variant shares the component's job and differs in emphasis or density.


### A different job means a different component, however similar it looks

Section: learn. Stable action: learn-2.

A different job means a different component, however similar it looks.


### Idea 3: If a variant needs its own content rules and states, it is pro…

Section: learn. Stable action: learn-3.

If a variant needs its own content rules and states, it is probably separate.


### Count the variants: beyond about four, the abstraction is usually wrong

Section: learn. Stable action: learn-4.

Count the variants: beyond about four, the abstraction is usually wrong.


### Write the test once and apply it, rather than deciding case by case

Section: learn. Stable action: learn-5.

Write the test once and apply it, rather than deciding case by case.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Three borderline cases were tested. The compact card: same job, same content rules, one fewer state — a variant. The booking summary: different job (a record of something you own, not an option to choose), different required fields, different actions — a separate component, despite looking almost identical. The promotional card: different job again, and its own content rules — separate, and marked out of scope entirely, since marketing surfaces were excluded in lesson 1. The test was written down and applied to two further cases the following week without re-argument.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Write the test

Section: practice-plan. Stable action: step-1-brief.

Four questions written down that decide variant or component, each answerable in a sentence.

- Write the questions that decide variant or component: job, content rules, states, count.
- Make each answerable in a sentence.

**Start here:** Write the job question first. It settles most cases on its own.

**Enough:** Each question can be answered yes or no about a real item, without discussion.

**Variant:** The same job, done with different emphasis or density. A compact card is still offering you something to choose.

**Separate component:** A different job, however similar it looks. A record of something you already own is not an option to choose, whatever the shape of the box.


### The question about the job it does

Section: practice-plan. Stable action: write-test-job.

Write your answer for “The question about the job it does”. Use the task instructions below to decide what to include.

**Answer:** The question about the job it does



<details>
<summary>Example</summary>

Example (made up): does it do the same job for the reader, or a different one?

</details>


### The question about content rules

Section: practice-plan. Stable action: write-test-content.

Write your answer for “The question about content rules”. Use the task instructions below to decide what to include.

**Answer:** The question about content rules




### The question about states

Section: practice-plan. Stable action: write-test-states.

Write your answer for “The question about states”. Use the task instructions below to decide what to include.

**Answer:** The question about states




### The question about how many variants there already are

Section: practice-plan. Stable action: write-test-count.

Beyond about four, the abstraction is usually wrong and you are holding two components in one.

**Answer:** The question about how many variants there already are

Beyond about four, the abstraction is usually wrong and you are holding two components in one.


### Apply it to three cases

Section: practice-plan. Stable action: step-2-brief.

Three borderline items decided by answering all four questions, not by how similar they look.

- Take three borderline items from your inventory.
- Answer each question and record the decision.

**Start here:** For each case, write what the reader is doing with it before writing anything about how it looks.

**Enough:** Each decision rests on the answers rather than on how similar the two things are.

**The job:** What the reader is doing with it. Choosing between options, reading a record, being sold something: three different jobs that can look identical.

**Conditional behaviour:** A component that behaves differently depending on where it is. It is what reuse-for-a-different-job produces, and it is harder to maintain than two clear components.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Deciding whether a booking summary is a variant of the tool card, and deciding by looking.

**What I saw:** A box with an image, a title, a meta row and an action. Beside the tool card, the two were almost indistinguishable.

**What I decided:** A variant. It would have meant one more entry in the grid and no new documentation, which was the answer I wanted.

**What the job question found:** The tool card offers you something to choose. The booking summary is a record of something you already have. The reader is doing two different things.

**What followed from that:** Different required fields, because a booking has a collection time and a reference. Different actions: Reserve against Cancel. Different states: a booking can be overdue and a tool cannot.

**What reuse would have produced:** One component with conditional behaviour, where half the fields are hidden depending on context, and two screens that behave differently for reasons nobody could explain a month later.

**Wrong turn:** The wrong turn is deciding by how similar they look, because in a design file that is the most visible fact about them. Similar appearance is what a shared foundation produces, and it says nothing about the job.

**Trade-off:** Two components mean two specifications, two documentation pages and two things to maintain, for boxes that look nearly the same. Somebody will ask why, and the answer is the job.

**Unknown:** Still unknown: whether they will drift apart visually over time. If they do not, somebody will propose merging them again, and the test is what settles it without re-arguing.


### Case 1 · the item, the four answers, and the decision

Section: practice-plan. Stable action: write-case-1.

Write your answer for “Case 1 · the item, the four answers, and the decision”. Use the task instructions below to decide what to include.

**Answer:** Case 1 · the item, the four answers, and the decision



<details>
<summary>Example</summary>

Example (made up): compact card. Same job, same content rules, one fewer state, second variant. Decision: a variant.

</details>


### Case 2 · the item, the four answers, and the decision

Section: practice-plan. Stable action: write-case-2.

Write your answer for “Case 2 · the item, the four answers, and the decision”. Use the task instructions below to decide what to include.

**Answer:** Case 2 · the item, the four answers, and the decision




### Case 3 · the item, the four answers, and the decision

Section: practice-plan. Stable action: write-case-3.

Write your answer for “Case 3 · the item, the four answers, and the decision”. Use the task instructions below to decide what to include.

**Answer:** Case 3 · the item, the four answers, and the decision




### Count the variants

Section: practice-plan. Stable action: step-3-brief.

A variant count per component, with anything over four examined as a possible family.

- Count variants per component.
- Flag anything over four and check whether it is a family.

**Start here:** Count them from your inventory rather than from memory.

**Enough:** Anything over four has been looked at rather than noted.

**Variant count:** How many deliberate versions one component has. Beyond about four, nobody can hold them in their head and the abstraction is usually wrong.

**Family:** Several related components sharing foundations rather than one component with many variants. It is often what an over-varied component really is.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Counting variants in a tool-library system, and counting the ones on the documentation page.

**What I counted:** Three. Default, compact, unavailable, exactly as documented, comfortably under the limit I had set.

**What made me look again:** A screen that looked unfamiliar. The card on it had no image and a tighter meta row, and it was not any of the three.

**What I found in the stylesheet:** Four more. A card with the image hidden, one with reduced padding, one with the action moved, and one that existed only inside the search results. Each added on a screen, each perfectly reasonable at the time.

**What the real count was:** Seven. Past the limit, and four of them undocumented, which is why nobody had noticed the system passing its own rule.

**What I did:** Two of the four merged into the compact variant with a small change. Two were a different job and became the search result row, which is now its own component.

**Wrong turn:** The wrong turn is counting from the documentation, because the documentation is the record of variants somebody decided to write down. The stylesheet is the record of variants that exist.

**Trade-off:** Counting from the code takes an afternoon and finds things you would rather not have found, in screens that are already shipped.

**Unknown:** Still unknown: how many more are hiding in screens I did not open. I checked the eleven screens in the product and there may be others in prototypes.


### Variants per component

Section: practice-plan. Stable action: write-variant-counts.

Write your answer for “Variants per component”. Use the task instructions below to decide what to include.

**Answer:** Variants per component




### Anything over four, and whether it is really a family of components

Section: practice-plan. Stable action: write-over-limit.

Write your answer for “Anything over four, and whether it is really a family of components”. Use the task instructions below to decide what to include.

**Answer:** Anything over four, and whether it is really a family of components




### Split or merge

Section: practice-plan. Stable action: step-4-brief.

One component split or merged, with the inventory and the affected specifications updated.

- Split one component that was carrying two jobs, or merge two that share one.
- Update the inventory and the specifications.

**Start here:** Take the component with the most variants and ask whether two of them are really doing the same job.

**Enough:** The inventory reflects the decision, not only your notes.

**Splitting:** Turning one component carrying two jobs into two. It usually removes conditional behaviour and shortens both specifications.

**Merging:** Combining two that genuinely share a job. It is rarer than splitting and worth doing when it happens.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six pairs from a made up tool-library inventory. For each one, decide what the relationship is.

The compact card: the same offer to choose a tool, with less room, one fewer state and the same content rules.

- a variant
- a separate component
- out of scope entirely

<details>
<summary>After your attempt</summary>

a variant — Same job, same rules, less density. This is what a variant is, and it needs no documentation of its own beyond a line.

a separate component — Nothing about the reader’s task changes, so a second specification would say the same things twice.

out of scope entirely — It is squarely inside the product.

Now apply your own four questions to your three cases and record the answers rather than the impressions.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six pairs from a made up tool-library inventory. For each one, decide what the relationship is.

The booking summary: a record of a tool you already have, with a reference, a collection time and a Cancel action.

- a variant
- a separate component
- out of scope entirely

<details>
<summary>After your attempt</summary>

a variant — It looks almost identical, which is the trap. The reader is reading a record rather than choosing an option.

a separate component — Different job, different required fields, different actions, and a state a tool card cannot have. Two clear components beat one with conditions.

out of scope entirely — It is part of the product and needs documenting.

Now apply your own four questions to your three cases and record the answers rather than the impressions.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six pairs from a made up tool-library inventory. For each one, decide what the relationship is.

A promotional card advertising a membership offer on the marketing pages.

- a variant
- a separate component
- out of scope entirely

<details>
<summary>After your attempt</summary>

a variant — Its job is to sell rather than to help somebody borrow a drill.

a separate component — It would be, if the system covered marketing surfaces. Lesson 1 excluded them.

out of scope entirely — The boundary you wrote is doing its job. Letting this in is how a system acquires the maintenance that eventually stops it being maintained.

Now apply your own four questions to your three cases and record the answers rather than the impressions.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six pairs from a made up tool-library inventory. For each one, decide what the relationship is.

A large card used once, on the home page, for the tool of the month.

- a variant
- a separate component
- out of scope entirely

<details>
<summary>After your attempt</summary>

a variant — A variant used once costs maintenance for ever and saves nothing, because it is never reused.

a separate component — Same objection: a component of one is a screen.

out of scope entirely — One-off components were excluded in lesson 1. Build it on the screen and leave it there.

Now apply your own four questions to your three cases and record the answers rather than the impressions.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six pairs from a made up tool-library inventory. For each one, decide what the relationship is.

The unavailable card: the same tool, presented as not currently borrowable, with the action replaced by a waiting-list link.

- a variant
- a separate component
- out of scope entirely

<details>
<summary>After your attempt</summary>

a variant — The reader is still choosing between tools; this one happens not to be available. Same job, same content rules.

a separate component — The differences are all within the same task, which is what keeps it a variant.

out of scope entirely — It is a core case rather than an edge one.

Now apply your own four questions to your three cases and record the answers rather than the impressions.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six pairs from a made up tool-library inventory. For each one, decide what the relationship is.

A search result row: the same tool, one line, no image, used in a list of thirty.

- a variant
- a separate component
- out of scope entirely

<details>
<summary>After your attempt</summary>

a variant — It is tempting, because it is the same subject. It has different content rules, no image slot and no states in common beyond focus.

a separate component — Scanning thirty rows is a different job from comparing three cards, and it would be the fourth or fifth variant of the card as well.

out of scope entirely — It is used constantly and belongs in the system.

Now apply your own four questions to your three cases and record the answers rather than the impressions.

</details>


### What you split or merged, and what changed in the inventory

Section: practice-plan. Stable action: write-split-or-merge.

Write your answer for “What you split or merged, and what changed in the inventory”. Use the task instructions below to decide what to include.

**Answer:** What you split or merged, and what changed in the inventory




### Which specifications you had to update

Section: practice-plan. Stable action: write-specs-updated.

Write your answer for “Which specifications you had to update”. Use the task instructions below to decide what to include.

**Answer:** Which specifications you had to update




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Two things look almost identical. Is that a reason to make one a variant of the other?

- No. Similar appearance is what a shared foundation produces, and it says nothing about what the reader is doing with each one.
- Yes, since reusing the markup is simpler.
- Yes, provided the differences can be handled with options.

<details>
<summary>After your attempt</summary>

No. Similar appearance is what a shared foundation produces, and it says nothing about what the reader is doing with each one. — A tool card offers you something to choose; a booking summary is a record of something you own. The boxes look the same because both use your spacing and type.

Yes, since reusing the markup is simpler. — Simpler this week. Reuse for a different job produces conditional behaviour, which is harder to maintain than two clear components.

Yes, provided the differences can be handled with options. — Handled with options is the description of the problem. Each option is a place the two jobs are pulling apart.

Improve: Answer the job question first for each case in step 2, before anything about appearance. Record the change in step 5.

Check again: Each decision names what the reader is doing rather than what the thing looks like.

Answers to revisit: case-1, case-2, case-3, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

One of your components has seven variants. What does that suggest?

- That it is probably a family of related components rather than one component, and nobody can hold seven in their head.
- That the component is unusually flexible, which is good.
- That the variants should be reduced to four by removing three.

<details>
<summary>After your attempt</summary>

That it is probably a family of related components rather than one component, and nobody can hold seven in their head. — Past about four, the abstraction is usually carrying more than one job. Splitting it normally shortens both specifications and removes conditional behaviour.

That the component is unusually flexible, which is good. — Flexible and unpredictable are the same property described two ways. Screens start behaving differently for reasons nobody can explain.

That the variants should be reduced to four by removing three. — Sometimes right, and it assumes the three are unnecessary rather than that two jobs are present.

Improve: Examine anything over four in step 3 and say whether it is a family. Record the change in step 5.

Check again: No component has more variants than you could name from memory.

Answers to revisit: variant-counts, over-limit, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Is reuse always better?

- No. Reusing a component for a different job creates conditional behaviour and screens that behave inconsistently for reasons nobody can explain.
- Yes, since every reuse saves maintenance.
- Yes, unless the visual difference is large.

<details>
<summary>After your attempt</summary>

No. Reusing a component for a different job creates conditional behaviour and screens that behave inconsistently for reasons nobody can explain. — Reuse is better when the job is the same. When it is not, two clear components are cheaper to maintain than one with a growing set of conditions.

Yes, since every reuse saves maintenance. — It saves a component and adds conditions. Past a certain number of conditions, the shared component costs more than the two it replaced.

Yes, unless the visual difference is large. — Visual difference is the least reliable signal here. The job is the one that matters.

Improve: Write the case where you decided against reuse in step 5, with the job difference that decided it. Record the change.

Check again: Your record contains at least one deliberate decision not to reuse.

Answers to revisit: test-location, against-reuse, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

The test saved where the next case will be decided, and the case where you decided against reuse recorded with its reason.

- Save the test where future cases will be decided.
- Record the case where you decided against reuse and why.

**Start here:** Put the test on the system’s own documentation page, not in your notes.

**Enough:** Somebody else could apply your test to a new case without you.

**Deciding against reuse:** Choosing two components over one. It goes against the instinct that reuse is always better, so the reason has to be written down.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Where the test lives, so the next case is decided rather than argued

Section: practice. Stable action: write-test-location.

Write your answer for “Where the test lives, so the next case is decided rather than argued”. Use the task instructions below to decide what to include.

**Answer:** Where the test lives, so the next case is decided rather than argued




### The case where you decided against reuse, and why

Section: practice. Stable action: write-against-reuse.

Write your answer for “The case where you decided against reuse, and why”. Use the task instructions below to decide what to include.

**Answer:** The case where you decided against reuse, and why




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson writes the documentation somebody will actually use.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Variant, or a different component?
What I am trying to do: Decide for three borderline cases whether they are variants of an existing component or new components, using a written test you can reuse.

Key idea or terms:
Variant: The same job, done with different emphasis or density. A compact card is still offering you something to choose.
Separate component: A different job, however similar it looks. A record of something you already own is not an option to choose, whatever the shape of the box.
The job: What the reader is doing with it. Choosing between options, reading a record, being sold something: three different jobs that can look identical.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Deciding whether a booking summary is a variant of the tool card, and deciding by looking. A box with an image, a title, a meta row and an action. Beside the tool card, the two were almost indistinguishable.

Activity: Give me one inconsistent component or rule from the supplied case. Ask me to choose the shared decision, name what must stay flexible and explain how another person would know which version is current.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “The question about the job it does” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “The question about the job it does”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “The question about the job it does” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Write the questions you actually asked while deciding, then generalise them.
- Take three cases and answer each question in writing before deciding.

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — Two components with overlapping appearance, read for how their purposes are distinguished. Purpose: Shows a published system's boundaries between similar components. Free reading, no account. Verified 2026-09-06. One organisation's decisions; your test is your own and should be written for your product. Fallback: R06.
- R11: [GOV.UK Design System: patterns](https://design-system.service.gov.uk/patterns/) — One pattern, read for how components combine rather than multiply. Purpose: Shows the alternative to adding variants: composing existing components. Free reading, no account. Verified 2026-09-06. Patterns for multi-step government tasks; take the composition idea, not the specific patterns. Fallback: R02.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**A reusable test is written down**

Adequate evidence: A short set of questions that would settle a future case.

0 — Decisions made ad hoc.

1 — A rule stated too vaguely to apply.

2 — A test whose questions produce a decision.

3 — As adequate, and the test names what to do when the answers conflict.

Repair: Write the questions you actually asked while deciding, then generalise them. Recheck: The written test.

**Three cases are decided by applying it**

Adequate evidence: Three borderline cases with the questions answered and a decision each.

0 — Cases decided by preference.

1 — Test applied loosely.

2 — Each case answered question by question.

3 — As adequate, and one decision contradicted your initial instinct.

Repair: Take three cases and answer each question in writing before deciding. Recheck: The three decisions.

**Variant counts are checked against a limit**

Adequate evidence: A count per component with anything above the limit examined.

0 — Not counted.

1 — Counted without examining the large ones.

2 — Counted and the large ones examined for hidden families.

3 — As adequate, and one component was split as a result.

Repair: Count the variants per component and look hard at anything above four. Recheck: The variant counts.

**One decision against reuse is recorded**

Adequate evidence: A case where you chose a separate component, with the reason.

0 — Everything reused.

1 — A split made without recorded reasoning.

2 — A separation decided with the reason recorded.

3 — As adequate, and the reason cites the conditional behaviour reuse would have created.

Repair: Find the case where reuse would have required conditional rules, and record the split. Recheck: The recorded decision.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson writes the documentation somebody will actually use.

**Review criteria:**

- A reusable test is written down
- Three cases are decided by applying it
- Variant counts are checked against a limit
- One decision against reuse is recorded

<details>
<summary>Reading, video and deeper explanation</summary>

- The job is the test. A compact card and a default card do the same job — represent one item in a list — at different densities, so they are variants. A card that summarises a booking and a card that advertises a class look similar and do different jobs, and merging them produces a component whose rules contradict each other within a month.
- Content rules are a reliable signal. If the candidate variant needs different truncation, a different required field or a different set of states, it is carrying a different job, and the shared component will accumulate conditional rules until nobody can predict its behaviour.
- Counting is a useful discipline. Beyond four or five variants, the component is usually a family pretending to be one thing, and splitting it makes both halves simpler. The exception is a genuine dimension — size, for instance — where variants multiply legitimately and can be described by a rule rather than enumerated.
- Writing the test once matters more than any individual decision. A rule you can apply — same job, same content rules, same states, fewer than five — settles future cases in a minute and produces a system whose shape someone else can predict.

[GOV.UK Design System: components](https://design-system.service.gov.uk/components/).

</details>

## Lesson 6: Documentation someone will actually read

Stable ID: m13-l06-v1. Core.

Undocumented systems are systems that only work while you are available. The test is not whether it is written; it is whether it is used.

Bring: Two specified components.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Two component pages opening with when to use and when not to
- Live examples with the code beside them
- Content rules placed where a writer will find them
- A record of the questions a real reader had to ask

### Start here: in everyday words

A design system is a shared set of decisions and reusable parts that helps a team build consistent products. In this lesson, your first small result is: Both pages opening with when to use, when not to use and the alternative, with the example immediately after.

**Words you will use**

- **When to use it:** The question every reader arrives with. Leading with appearance answers a question nobody asked and buries the one they did.
- **The alternative:** What to use instead when this component is wrong. A prohibition with no alternative gets ignored, because somebody still has to build the screen.
- **Live example:** The real component rendered on the documentation page, rather than a picture of it. It cannot go out of date the way a screenshot can.

**Quick example.** Made-up example. Documenting content rules for a tool-library card, and putting them where writers do not go. A content guidelines document. Tone of voice, capitalisation, how to write titles, maximum lengths per component. Eleven pages, and genuinely good.

The reader demonstrates and guides the task before asking for “For each of your two components: when to use it, when not to, and what to use instead”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Write the documentation for two components so that a person can use them correctly without asking you, and test it by watching someone try.


### Lead with when to use it, not with what it looks like

Section: learn. Stable action: learn-1.

Lead with when to use it, not with what it looks like.


### Show the code and the design in the same place

Section: learn. Stable action: learn-2.

Show the code and the design in the same place.


### Put the content rules where someone writing content will find them

Section: learn. Stable action: learn-3.

Put the content rules where someone writing content will find them.


### Idea 4: Answer the questions people actually ask, not the ones you fin…

Section: learn. Stable action: learn-4.

Answer the questions people actually ask, not the ones you find interesting.


### Test the documentation by watching someone use it

Section: learn. Stable action: learn-5.

Test the documentation by watching someone use it.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- The card and the button pages were rewritten. Each opens with when to use it, when not to, and the alternative. Then a live example with the code beside it, the anatomy, the state grid, the content rules — including maximum label length and truncation behaviour — and the keyboard behaviour. Two people were then asked to build a screen using them. Four questions came up: what happens with two actions, whether the compact variant may be used in a grid, what the maximum title length actually is, and whether the card is clickable as a whole. All four became sentences on the pages.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Structure the page

Section: practice-plan. Stable action: step-1-brief.

Both pages opening with when to use, when not to use and the alternative, with the example immediately after.

- Read the assigned component pages for structure.
- Write when to use, when not to use, and the alternative.
- Place the example immediately after.

**Start here:** Write the when-not-to-use line first. It is harder and it decides the rest of the page.

**Enough:** A reader could tell in fifteen seconds whether this is the component they need.

**When to use it:** The question every reader arrives with. Leading with appearance answers a question nobody asked and buries the one they did.

**The alternative:** What to use instead when this component is wrong. A prohibition with no alternative gets ignored, because somebody still has to build the screen.


### For each of your two components: when to use it, when not to, and what to use instead

Section: practice-plan. Stable action: write-when-to-use.

This goes first, before anything about appearance. It is the question people actually arrive with.

**Answer:** For each of your two components: when to use it, when not to, and what to use instead

This goes first, before anything about appearance. It is the question people actually arrive with.


### What the first example shows, and where it sits on the page

Section: practice-plan. Stable action: write-example-placed.

Write your answer for “What the first example shows, and where it sits on the page”. Use the task instructions below to decide what to include.

**Answer:** What the first example shows, and where it sits on the page




### Bring code and design together

Section: practice-plan. Stable action: step-2-brief.

The markup and the specification on one page, with the state grid and anatomy alongside.

- Embed the live component or its markup beside the specification.
- Include the state grid and anatomy on the same page.

**Start here:** Embed the component itself rather than a screenshot, so the page cannot drift from the build.

**Enough:** Nothing on the page is a picture of something that exists elsewhere.

**Live example:** The real component rendered on the documentation page, rather than a picture of it. It cannot go out of date the way a screenshot can.

**One place:** Design and code in the same document. Split across two, they disagree within a month and nobody knows which is current.


### How the markup and the specification sit together on the page

Section: practice-plan. Stable action: write-code-beside.

A live example with its markup beside it. If the two live in different documents they will disagree within a month.

**Answer:** How the markup and the specification sit together on the page

A live example with its markup beside it. If the two live in different documents they will disagree within a month.


### How the state grid and anatomy appear on the same page

Section: practice-plan. Stable action: write-grid-included.

Write your answer for “How the state grid and anatomy appear on the same page”. Use the task instructions below to decide what to include.

**Answer:** How the state grid and anatomy appear on the same page




### Write for the content author

Section: practice-plan. Stable action: step-3-brief.

Content guidance written for a writer, placed with the component rather than in a separate document.

- Add maximum lengths, truncation behaviour and tone guidance.
- Put them with the component, not in a separate document.

**Start here:** Put the length and truncation rules three lines under the live example, where somebody typing will see them.

**Enough:** Nothing a writer needs is in a different document.

**Content author:** Whoever types the words that go into the component. They are not reading a design system; they are trying to write a title that fits.

**Tone guidance:** How the words should sound in this component, with an example. Two words of guidance beside the field beat a page of principles elsewhere.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Documenting content rules for a tool-library card, and putting them where writers do not go.

**What I wrote:** A content guidelines document. Tone of voice, capitalisation, how to write titles, maximum lengths per component. Eleven pages, and genuinely good.

**What happened:** Titles kept arriving at fourteen words. I asked the person writing them whether they had read the guidelines, and they had, in March.

**What they were actually doing:** Typing a title into a form while looking at a card. The guidelines were a separate document, in a different place, describing a situation rather than the one in front of them.

**What I changed:** Moved the length rule, the truncation behaviour and one example onto the card’s own page, three lines under the live example.

**What that changed:** Titles got shorter within a fortnight, and the eleven-page document became the place for the things that genuinely are general.

**Wrong turn:** The wrong turn is writing one good content document, because it is more coherent than scattering rules across components. Coherent for you, invisible for the person typing.

**Trade-off:** The same rule now appears in two places, and they can drift. Keeping the component page authoritative and the document general is how that is managed rather than avoided.

**Unknown:** Still unknown: whether the titles got shorter because of the placement or because I had just asked about them. A fortnight is not a measurement.


### Maximum lengths, truncation behaviour and tone guidance, written for a writer

Section: practice-plan. Stable action: write-content-guidance.

Write your answer for “Maximum lengths, truncation behaviour and tone guidance, written for a writer”. Use the task instructions below to decide what to include.

**Answer:** Maximum lengths, truncation behaviour and tone guidance, written for a writer



<details>
<summary>Example</summary>

Example (made up): titles read best under six words; above eleven the second line truncates and the beginning is kept.

</details>


### Where you put it, and why there

Section: practice-plan. Stable action: write-guidance-placed.

With the component. A separate content document is a document nobody opens while building a screen.

**Answer:** Where you put it, and why there

With the component. A separate content document is a document nobody opens while building a screen.


### Test the documentation

Section: practice-plan. Stable action: step-4-brief.

Somebody building a small screen from the pages alone, with every question recorded rather than answered.

- Ask someone to build a small screen using only the pages.
- Record every question they ask without answering immediately.

**Start here:** Hand over the pages and say you will answer everything at the end.

**Enough:** The questions are written down in their own words, not summarised into what you think they meant.

**Testing documentation:** Watching somebody use it. Whether it is written is not the test; whether it is used without asking you is.

**A question you cannot answer:** A decision nobody has made. It is the most valuable output of this step and the easiest to talk past.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Testing tool-library documentation, and testing it on somebody who had helped write it.

**Who I asked:** The person who had reviewed the component specification a fortnight earlier. They were available, interested and already familiar with it.

**What happened:** They built the screen in twenty minutes with one question, and I concluded the pages were in good shape.

**What was wrong with the test:** They knew the answers. Everything the page failed to say, they supplied from memory of our earlier conversation, and neither of us noticed.

**What the second reader found:** Somebody who had never seen the component asked four questions in ten minutes, including whether the whole card is clickable, which the specification had settled and the documentation had never mentioned.

**What I do now:** Ask somebody who was not involved. If nobody is available, leave the pages three days and build from them myself without opening the specification.

**Wrong turn:** The wrong turn is testing documentation on somebody who helped make the thing, because they are the easiest person to ask and the only one guaranteed to pass. Their knowledge fills exactly the holes you need to find.

**Trade-off:** A reader who knows nothing is slower, asks things you consider obvious, and the session is less comfortable. That discomfort is the result.

**Unknown:** Still unknown: whether four questions is a good or bad score. One reader finds one reader’s holes, and the number means little on its own.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six questions a reader asked about a made up tool card documentation page. For each one, decide what it tells you.

What happens if a card needs two actions?

- a sentence is missing from the page
- the page says it and says it badly
- a decision nobody has made

<details>
<summary>After your attempt</summary>

a sentence is missing from the page — There is no sentence to add yet, because nobody has decided whether two actions are allowed.

the page says it and says it badly — The page does not address it at all.

a decision nobody has made — The most valuable kind of question. It has to be decided before it can be written, and it would have appeared on a screen instead.

Now sort your own reader’s questions the same way before fixing any of them.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six questions a reader asked about a made up tool card documentation page. For each one, decide what it tells you.

What is the maximum title length? The page says the title truncates to two lines.

- a sentence is missing from the page
- the page says it and says it badly
- a decision nobody has made

<details>
<summary>After your attempt</summary>

a sentence is missing from the page — Something is there. It answers what happens when it is too long and not what too long is.

the page says it and says it badly — A writer needs a number of words to aim for, not the behaviour when they overshoot. Both belong on the page.

a decision nobody has made — The truncation decision exists; the guidance for the writer does not.

Now sort your own reader’s questions the same way before fixing any of them.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six questions a reader asked about a made up tool card documentation page. For each one, decide what it tells you.

May the compact variant be used in a grid?

- a sentence is missing from the page
- the page says it and says it badly
- a decision nobody has made

<details>
<summary>After your attempt</summary>

a sentence is missing from the page — The answer exists and is not written down. One sentence in when-to-use closes it.

the page says it and says it badly — The page does not mention grids at all.

a decision nobody has made — You know the answer, which is what makes this the easy category.

Now sort your own reader’s questions the same way before fixing any of them.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six questions a reader asked about a made up tool card documentation page. For each one, decide what it tells you.

Is the whole card clickable, or just the title?

- a sentence is missing from the page
- the page says it and says it badly
- a decision nobody has made

<details>
<summary>After your attempt</summary>

a sentence is missing from the page — The keyboard specification decided this. It has not reached the documentation page.

the page says it and says it badly — It is absent rather than unclear.

a decision nobody has made — It was made in the component specification. The gap is between two documents of yours.

Now sort your own reader’s questions the same way before fixing any of them.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six questions a reader asked about a made up tool card documentation page. For each one, decide what it tells you.

Should the title be sentence case or title case?

- a sentence is missing from the page
- the page says it and says it badly
- a decision nobody has made

<details>
<summary>After your attempt</summary>

a sentence is missing from the page — If your foundations settle it, the card page needs a line pointing there. If they do not, it moves to the third category.

the page says it and says it badly — Nothing on the page addresses it.

a decision nobody has made — Possible, and most systems have settled case long before components.

Now sort your own reader’s questions the same way before fixing any of them.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six questions a reader asked about a made up tool card documentation page. For each one, decide what it tells you.

The unavailable card looks the same as the loading one to me. Which is which?

- a sentence is missing from the page
- the page says it and says it badly
- a decision nobody has made

<details>
<summary>After your attempt</summary>

a sentence is missing from the page — A sentence explaining which is which does not fix two states that look alike.

the page says it and says it badly — The page is accurate. The component is the problem.

a decision nobody has made — The distinguishing signal has never been decided, which the build already suggested. A reader has now found it independently.

Now sort your own reader’s questions the same way before fixing any of them.

</details>


### Who you asked and what small screen they built

Section: practice-plan. Stable action: write-reader-task.

If nobody is available, leave it three days and build a screen yourself from the pages alone. Write that here.

**Answer:** Who you asked and what small screen they built

If nobody is available, leave it three days and build a screen yourself from the pages alone. Write that here.


### Every question they asked, recorded rather than answered

Section: practice-plan. Stable action: write-questions-raised.

Write your answer for “Every question they asked, recorded rather than answered”. Use the task instructions below to decide what to include.

**Answer:** Every question they asked, recorded rather than answered




### Any question you could not answer either

Section: practice-plan. Stable action: write-could-not-answer.

These are the most valuable ones. They are decisions nobody has made yet.

**Answer:** Any question you could not answer either

These are the most valuable ones. They are decisions nobody has made yet.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your documentation opens with what the component looks like. What is wrong with that order?

- Readers arrive asking whether this is the component they need, and appearance does not answer it.
- Nothing, since appearance is what identifies a component.
- It is fine if the page is short.

<details>
<summary>After your attempt</summary>

Readers arrive asking whether this is the component they need, and appearance does not answer it. — When to use, when not to, and the alternative answer the arriving question in fifteen seconds. Appearance is what the live example shows a moment later.

Nothing, since appearance is what identifies a component. — It identifies it and does not tell anybody whether it fits their screen, which is what they are deciding.

It is fine if the page is short. — Short pages get skimmed from the top, so the order matters more rather than less.

Improve: Move when-to-use and when-not-to-use to the top of both pages in step 1, and record the change in step 5.

Check again: Both pages answer whether to use it before showing what it looks like.

Answers to revisit: when-to-use, example-placed, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You have written an excellent content guidelines document covering every component. Why do titles still arrive too long?

- Because the person typing is looking at the card, and the guidance is somewhere else describing a situation rather than the one in front of them.
- Because the guidelines have not been read.
- Because the rule needs enforcing rather than documenting.

<details>
<summary>After your attempt</summary>

Because the person typing is looking at the card, and the guidance is somewhere else describing a situation rather than the one in front of them. — Three lines under the live example do what eleven good pages elsewhere cannot. The general document is still the right place for the things that genuinely are general.

Because the guidelines have not been read. — They usually have, once, months ago. Reading is not the same as having it to hand while typing.

Because the rule needs enforcing rather than documenting. — Enforcement is a different conversation, and a rule nobody can see while working is hard to enforce fairly.

Improve: Move the length and truncation guidance onto the component pages in step 3, and say where. Record the change in step 5.

Check again: A writer can see the rule without leaving the component page.

Answers to revisit: content-guidance, guidance-placed, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your reader asked a question you could not answer either. What kind of finding is that?

- A decision nobody has made, which is the most valuable thing this test produces.
- A gap in the documentation to fill later.
- A sign the component is not ready to be documented.

<details>
<summary>After your attempt</summary>

A decision nobody has made, which is the most valuable thing this test produces. — It cannot be fixed by writing, because there is nothing to write yet. Left alone it gets decided accidentally, on a screen, by whoever meets it first.

A gap in the documentation to fill later. — Filling it means deciding it, and calling it a documentation gap hides that a design decision is outstanding.

A sign the component is not ready to be documented. — Nothing is ever fully decided before documentation. The value here is that the gap has surfaced deliberately.

Improve: Record any unanswerable question in step 4 as an open decision rather than a documentation task. Note the change in step 5.

Check again: Open decisions are separated from missing sentences in your record.

Answers to revisit: reader-task, questions-raised, could-not-answer, improvement-made

</details>


### Fix and record

Section: practice. Stable action: step-5-brief.

Each question turned into a sentence on the page, and the repair the Check questions asked for.

- Turn each question into a sentence on the page.
- Note which questions you could not answer either.
- Save both pages and the question list.

**Start here:** Take the questions in the order they were asked; that order is usually the order a reader meets the gaps.

**Enough:** Every answerable question is now on the page, and the unanswerable ones are recorded as open decisions.

**Turning a question into a sentence:** Adding the answer to the page rather than to the conversation. It is the only version that helps the next reader.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Each question, and the sentence you added to the page

Section: practice. Stable action: write-questions-fixed.

Write your answer for “Each question, and the sentence you added to the page”. Use the task instructions below to decide what to include.

**Answer:** Each question, and the sentence you added to the page




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson decides who gets to change any of this.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Documentation someone will actually read
What I am trying to do: Write the documentation for two components so that a person can use them correctly without asking you, and test it by watching someone try.

Key idea or terms:
When to use it: The question every reader arrives with. Leading with appearance answers a question nobody asked and buries the one they did.
The alternative: What to use instead when this component is wrong. A prohibition with no alternative gets ignored, because somebody still has to build the screen.
Live example: The real component rendered on the documentation page, rather than a picture of it. It cannot go out of date the way a screenshot can.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Documenting content rules for a tool-library card, and putting them where writers do not go. A content guidelines document. Tone of voice, capitalisation, how to write titles, maximum lengths per component. Eleven pages, and genuinely good.

Activity: Give me one inconsistent component or rule from the supplied case. Ask me to choose the shared decision, name what must stay flexible and explain how another person would know which version is current.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “For each of your two components: when to use it, when not to, and what to use instead” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “For each of your two components: when to use it, when not to, and what to use instead”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “For each of your two components: when to use it, when not to, and what to use instead” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Move the purpose to the top and add the when-not-to-use paragraph.
- Embed the component you built in m13 lesson 4 and put the markup next to it.

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — Two component pages, read for their structure: when to use, when not to use, example, anatomy, content and behaviour. Purpose: Supplies the page structure this lesson adopts. Free reading, no account. Verified 2026-09-06. Take the structure; the components and brand are one organisation's. Fallback: R06.
- R18: [Atlassian: user stories](https://www.atlassian.com/agile/project-management/user-stories) — How a story states who, what and why, read as a model for writing usage guidance briefly. Purpose: Helps keep guidance short and centred on the reader's task. Free reading, no account. Verified 2026-09-06. Written about agile stories rather than documentation; no Jira subscription is required or implied. Fallback: R26.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Pages open with when to use and when not to**

Adequate evidence: Both pages beginning with purpose and boundaries, with an alternative named.

0 — Pages open with appearance.

1 — Purpose stated but no boundary.

2 — Both, with an alternative named.

3 — As adequate, and the boundary cites a real misuse.

Repair: Move the purpose to the top and add the when-not-to-use paragraph. Recheck: The two pages.

**Live examples sit beside the specification**

Adequate evidence: A working example and its markup on the same page as the specification.

0 — Static images only.

1 — Example present, code elsewhere.

2 — Example and code together with the specification.

3 — As adequate, and the example is the built component rather than a copy.

Repair: Embed the component you built in m13 lesson 4 and put the markup next to it. Recheck: The page with its example.

**Content rules are where a writer will find them**

Adequate evidence: Length limits, truncation and tone guidance on the component page.

0 — Content rules absent.

1 — In a separate writing document.

2 — On the component page with the rest.

3 — As adequate, and the maximum lengths are the ones you verified by rendering.

Repair: Move the content rules onto the component page and check the numbers against your states page. Recheck: The content section.

**Reader questions were recorded and turned into content**

Adequate evidence: A list of questions from a real reader with the sentences added.

0 — Documentation untested.

1 — Tested with questions answered verbally only.

2 — Questions recorded and turned into page content.

3 — As adequate, and questions you could not answer are recorded as open decisions.

Repair: Ask someone to build a screen from the pages alone and write down every question. Recheck: The question list and the updated pages.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson decides who gets to change any of this.

**Review criteria:**

- Pages open with when to use and when not to
- Live examples sit beside the specification
- Content rules are where a writer will find them
- Reader questions were recorded and turned into content

<details>
<summary>Reading, video and deeper explanation</summary>

- People arrive at documentation with a task, not a curiosity. The first thing they need is whether this is the right component, which means the page opens with when to use it and when not to. Appearance and anatomy come after, because they matter only once the choice is made.
- Design and code belong together. A designer looking at the specification and an engineer looking at the implementation should see one page, not two artefacts that drift apart. Even in a small system, keeping them together prevents the commonest system failure: documentation describing a component that no longer behaves that way.
- Content rules are used by whoever writes the words, who is often neither the designer nor the engineer. Putting maximum lengths, truncation behaviour and tone guidance where they will look — with the component, not in a separate writing document — is what stops labels arriving that break the layout.
- Testing documentation is the same discipline as testing a design. Give it to someone with a task, watch, and record every question they had to ask you. Each question is a defect in the page, and the fix is usually one sentence added where they were looking.

[GOV.UK Design System: components](https://design-system.service.gov.uk/components/).

</details>

## Lesson 7: Who decides, and how something gets in

Stable ID: m13-l07-v1. Core.

Without a route in, people fork the system quietly. Governance is what keeps a system used rather than worked around.

Bring: Your system purpose and component pages.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A written proposal route with required evidence
- A named decider and response time
- Acceptance criteria for new components
- A decision log including at least one rejection

### Start here: in everyday words

A design system is a shared set of decisions and reusable parts that helps a team build consistent products. In this lesson, your first small result is: A written route for proposing a change, and the evidence a proposal has to carry.

**Words you will use**

- **Governance:** The stated way things get into and out of the system. It is the difference between a system people use and one they route around.
- **Required evidence:** What a proposal must show before it is considered: where it is needed, what was tried, why it did not fit. It turns a wish into something decidable.
- **The decider:** The person who says yes or no. Naming yourself is a complete answer; leaving it unnamed means everybody assumes somebody else is handling it.

**Quick example.** Made-up example. Writing governance for a tool-library system, and writing the part that felt important. A careful proposal template, three acceptance criteria, and a note that proposals would be reviewed regularly.

The reader demonstrates and guides the task before asking for “Where a proposal goes, and in what form”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Write the governance for your system: how a change is proposed, who decides, what evidence is required, and how long it takes.


### Every system needs a stated way to propose a change

Section: learn. Stable action: learn-1.

Every system needs a stated way to propose a change.


### Name the decider, even when it is you

Section: learn. Stable action: learn-2.

Name the decider, even when it is you.


### Idea 3: Require evidence: where it is needed, what it replaces, why ex…

Section: learn. Stable action: learn-3.

Require evidence: where it is needed, what it replaces, why existing parts do not fit.


### State the response time, or proposals go unanswered and people give up

Section: learn. Stable action: learn-4.

State the response time, or proposals go unanswered and people give up.


### Record decisions, including rejections and their reasons

Section: learn. Stable action: learn-5.

Record decisions, including rejections and their reasons.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- The governance was one page. To propose: open an issue with the screens where it is needed, what existing component you tried, and why it did not fit. Decider: the learner, until someone else joins. Response time: within a week. Criteria: needed in at least two screens, not achievable by composing existing components, and specifiable with states and content rules. Decisions are recorded in a log with the reason. Three proposals in the first month: one accepted, one rejected because composition covered it, and one deferred pending a second use — all recorded, and the rejected one was not re-raised.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Write the route

Section: practice-plan. Stable action: step-1-brief.

A written route for proposing a change, and the evidence a proposal has to carry.

- State how someone proposes a change and where.
- List the evidence a proposal must include.

**Start here:** Write where a proposal goes before writing anything about deciding it.

**Enough:** Somebody could propose something today without asking you how.

**Governance:** The stated way things get into and out of the system. It is the difference between a system people use and one they route around.

**Required evidence:** What a proposal must show before it is considered: where it is needed, what was tried, why it did not fit. It turns a wish into something decidable.


### Where a proposal goes, and in what form

Section: practice-plan. Stable action: write-proposal-route.

A file, an issue, a message. The tool matters less than it being written down and findable.

**Answer:** Where a proposal goes, and in what form

A file, an issue, a message. The tool matters less than it being written down and findable.


### What a proposal must include

Section: practice-plan. Stable action: write-required-evidence.

Write your answer for “What a proposal must include”. Use the task instructions below to decide what to include.

**Answer:** What a proposal must include



<details>
<summary>Example</summary>

Example (made up): the screens where it is needed, which existing component was tried, and why it did not fit.

</details>


### Name the decider and timing

Section: practice-plan. Stable action: step-2-brief.

A named decider, a response time, and a rule for what happens when nobody responds.

- State who decides and within how long.
- State what happens if nobody responds.

**Start here:** Write your own name and a number of days. Both are shorter to write than to decide.

**Enough:** Somebody who gets no answer knows what they are allowed to do.

**The decider:** The person who says yes or no. Naming yourself is a complete answer; leaving it unnamed means everybody assumes somebody else is handling it.

**Response time:** How long a proposal waits. Without one, proposals go unanswered, and an unanswered proposal becomes a component built quietly on a screen.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Writing governance for a tool-library system, and writing the part that felt important.

**What I wrote:** A careful proposal template, three acceptance criteria, and a note that proposals would be reviewed regularly.

**What happened to the first proposal:** Somebody asked for a filter chip. I read it, thought about it, meant to reply, and did not. Three weeks passed.

**What they did:** Built one on their screen. Reasonably, because they had a screen to finish and no answer. It used a spacing value that was not in the foundations and had no focus state.

**What was actually missing from my page:** Not the criteria. A response time, and a rule for what happens when I do not meet it. Regularly is not a time.

**What I added:** An answer within a week. If there is no answer in a week, build what you need on your screen and open a note so the system can catch up later.

**Wrong turn:** The wrong turn is writing the criteria and skipping the timing, because criteria feel like the substance of governance. The thing that makes people route around a system is waiting, not being refused.

**Trade-off:** A week is a promise, and some weeks it will be inconvenient to keep. The alternative is silence, which people read as a no they did not have to accept.

**Unknown:** Still unknown: whether a week is the right length. It is short enough not to block a screen and long enough to think, and nothing here has tested it.


### Who decides

Section: practice-plan. Stable action: write-decider-named.

Name yourself if it is you. An unnamed decider means everybody assumes somebody else.

**Answer:** Who decides

Name yourself if it is you. An unnamed decider means everybody assumes somebody else.


### Within how long a proposal gets an answer

Section: practice-plan. Stable action: write-response-time.

Write your answer for “Within how long a proposal gets an answer”. Use the task instructions below to decide what to include.

**Answer:** Within how long a proposal gets an answer




### What happens if nobody responds in that time

Section: practice-plan. Stable action: write-no-response.

Silence is the commonest outcome, and without a rule it means the proposer quietly builds their own.

**Answer:** What happens if nobody responds in that time

Silence is the commonest outcome, and without a rule it means the proposer quietly builds their own.


### Write the criteria

Section: practice-plan. Stable action: step-3-brief.

Written criteria a new component must satisfy, including a minimum number of uses and a composition check.

- Write what a new component must satisfy to be accepted.
- Include a minimum number of uses and a composition check.

**Start here:** Write the composition check first; it is the criterion that does most of the work.

**Enough:** Each criterion could be answered from a proposal without a conversation.

**Composition check:** Asking whether existing parts arranged differently would do the job. It rejects a surprising number of proposals and costs one minute.

**Minimum uses:** A rule that something appears in at least two places before it joins the system. One use is a screen, not a component.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Writing acceptance criteria for a tool-library system, and writing criteria that accept everything.

**What I wrote:** A new component must be useful, consistent with the foundations, and well specified. Three criteria, and they read like the sort of thing a system should say.

**What happened to the first four proposals:** All four passed. Everything anybody proposes is useful to the person proposing it, nothing arrives deliberately inconsistent, and well specified describes the proposal rather than the need.

**What I had not written:** Anything that could produce a no. Criteria that cannot reject are a description of good manners.

**What I replaced them with:** Needed in at least two screens. Not achievable by arranging existing components. Specifiable with states and content rules.

**What the same four proposals did then:** One passed, two failed the composition check in about a minute each, and one failed on a single use and was recorded as deferred until a second appeared.

**Wrong turn:** The wrong turn is writing criteria as qualities rather than as tests, because qualities are easier to agree on. A criterion nothing can fail is not doing any work, and the system grows by default.

**Trade-off:** Real criteria mean saying no to people, including to yourself, about components you would quite like to build.

**Unknown:** Still unknown: whether two screens is the right threshold. It is low enough not to block obvious cases and high enough to catch a screen pretending to be a component, and nothing here has tested it.


### What a new component must satisfy to be accepted

Section: practice-plan. Stable action: write-acceptance-criteria.

A minimum number of uses, a composition check, and whether it can be specified with states and content rules.

**Answer:** What a new component must satisfy to be accepted

A minimum number of uses, a composition check, and whether it can be specified with states and content rules.


### Run it on three cases

Section: practice-plan. Stable action: step-4-brief.

Three real proposals from your own backlog run through the process, each accepted, rejected or deferred with a reason.

- Apply the process to three real proposals from your own backlog.
- Accept, reject or defer each, recording the reason.

**Start here:** Take the proposal you already have an opinion about and answer the criteria before reading your opinion back.

**Enough:** Each decision cites a criterion rather than a preference.

**Deferred:** Not yet, with a condition: a second use, a decision elsewhere, a screen that does not exist. It is a real answer, unlike silence.

**Rejected with a reason:** A no that says why, so the same proposal does not return every six weeks with the same argument.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six proposals to a made up tool-library system. For each one, decide what the process should answer.

A filter chip. Needed on the listing screen and the search screen, nothing existing does it, and it can be specified with states and content rules.

- accept
- reject
- defer

<details>
<summary>After your attempt</summary>

accept — Two uses, no existing fit, specifiable. It meets every criterion, which is what makes it an easy decision rather than a generous one.

reject — Nothing in it fails a criterion.

defer — The second use already exists, so there is nothing to wait for.

Now run your own three proposals through your criteria and record the answers with their reasons.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six proposals to a made up tool-library system. For each one, decide what the process should answer.

A statistics block for the home page. Used in exactly one place, and nowhere else is planned.

- accept
- reject
- defer

<details>
<summary>After your attempt</summary>

accept — One use is a screen, not a component. Adding it costs maintenance for ever and saves nothing.

reject — It fails the minimum-uses criterion, and the reason is short enough to record in a line.

defer — Deferring implies a second use might arrive. Nothing suggests one, and a clear no is kinder than an indefinite maybe.

Now run your own three proposals through your criteria and record the answers with their reasons.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six proposals to a made up tool-library system. For each one, decide what the process should answer.

A card with a badge in the corner. A badge component already exists, and it can be placed on the existing card.

- accept
- reject
- defer

<details>
<summary>After your attempt</summary>

accept — It would add a variant that composition already covers, and the variant count is the thing that eventually breaks a system.

reject — The composition check catches it in one minute. The answer is to place the badge on the card, which somebody can do today.

defer — There is nothing to wait for; the answer exists now.

Now run your own three proposals through your criteria and record the answers with their reasons.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six proposals to a made up tool-library system. For each one, decide what the process should answer.

A brief message that appears and disappears after an action. Needed on one screen now, and the booking flow being designed next month will need it.

- accept
- reject
- defer

<details>
<summary>After your attempt</summary>

accept — One current use, and a second that exists in a plan rather than in a screen.

reject — A flat no here is likely to be wrong within a month and produces a quietly built version in the meantime.

defer — A named condition holds it: when the booking flow exists, it has two uses. That is a real answer somebody can plan around.

Now run your own three proposals through your criteria and record the answers with their reasons.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six proposals to a made up tool-library system. For each one, decide what the process should answer.

A receipt-style record component. Genuinely needed, and marketing and account pages were excluded in the system’s scope.

- accept
- reject
- defer

<details>
<summary>After your attempt</summary>

accept — It is needed, and being needed is not the same as being in scope.

reject — The boundary decides it. Rejecting it with the scope line attached is how the boundary stays meaningful.

defer — Deferring suggests the scope might change, which is a bigger decision than this proposal.

Now run your own three proposals through your criteria and record the answers with their reasons.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six proposals to a made up tool-library system. For each one, decide what the process should answer.

A dark theme for every component. One person has asked, and nothing in the product currently supports it.

- accept
- reject
- defer

<details>
<summary>After your attempt</summary>

accept — It touches every component and every token. Accepting it as a proposal treats a project as a component.

reject — A flat no discards a reasonable request, and the tokens would have to change for it either way.

defer — Not as a proposal. It is a piece of work with its own decision, and deferring it names that rather than deciding it in a queue.

Now run your own three proposals through your criteria and record the answers with their reasons.

</details>


### Proposal 1 · what it is, the evidence, the decision and the reason

Section: practice-plan. Stable action: write-proposal-1.

Write your answer for “Proposal 1 · what it is, the evidence, the decision and the reason”. Use the task instructions below to decide what to include.

**Answer:** Proposal 1 · what it is, the evidence, the decision and the reason



<details>
<summary>Example</summary>

Example (made up): a filter chip. Needed on two screens, nothing existing fits, specifiable. Accepted.

</details>


### Proposal 2 · what it is, the evidence, the decision and the reason

Section: practice-plan. Stable action: write-proposal-2.

Write your answer for “Proposal 2 · what it is, the evidence, the decision and the reason”. Use the task instructions below to decide what to include.

**Answer:** Proposal 2 · what it is, the evidence, the decision and the reason




### Proposal 3 · what it is, the evidence, the decision and the reason

Section: practice-plan. Stable action: write-proposal-3.

Write your answer for “Proposal 3 · what it is, the evidence, the decision and the reason”. Use the task instructions below to decide what to include.

**Answer:** Proposal 3 · what it is, the evidence, the decision and the reason




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Governance sounds like bureaucracy for a system with one designer. Is it?

- A paragraph naming the route, the decider and the response time is not bureaucracy, and skipping it costs more.
- Yes, for a system this small it can be skipped.
- No, and it should be as thorough as possible.

<details>
<summary>After your attempt</summary>

A paragraph naming the route, the decider and the response time is not bureaucracy, and skipping it costs more. — Without a route in, people fork the system quietly, and you find out weeks later on a screen. The page can be one page.

Yes, for a system this small it can be skipped. — Even alone, you are the person in three months who will not remember why something was rejected. The log is for that person.

No, and it should be as thorough as possible. — Thorough governance on a small system is the version that genuinely does become bureaucracy. One page is the target.

Improve: Check your governance page fits on one page in steps 1 to 3, and cut anything that does not decide something. Record the change in step 5.

Check again: The route, the decider, the timing and the criteria all fit on one page.

Answers to revisit: log-location, rejection-recorded, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your governance has careful criteria and says proposals will be reviewed regularly. What will happen?

- Somebody will wait, get no answer, and build their own version on their screen.
- Proposals will accumulate until you have time for them.
- Nothing, since the criteria are the important part.

<details>
<summary>After your attempt</summary>

Somebody will wait, get no answer, and build their own version on their screen. — Waiting is what makes people route around a system, more than being refused. A number of days and a rule for silence are what the page is missing.

Proposals will accumulate until you have time for them. — They will accumulate somewhere else: on screens, as components nobody documented.

Nothing, since the criteria are the important part. — Criteria decide what gets in once somebody is deciding. The timing decides whether anybody uses the route at all.

Improve: Put a number of days and a rule for no response into step 2, and record the change in step 5.

Check again: Somebody who gets no answer knows what they may do.

Answers to revisit: decider-named, response-time, no-response, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You rejected a proposal and recorded only the decision. What is missing?

- The reason, without which the same proposal returns in six weeks and gets argued from scratch.
- Nothing, since the answer was no.
- An apology, so the proposer is not discouraged.

<details>
<summary>After your attempt</summary>

The reason, without which the same proposal returns in six weeks and gets argued from scratch. — A rejection with a reason can be pointed at. A rejection without one looks like a mood, and the proposer is entitled to try again when the mood might differ.

Nothing, since the answer was no. — The answer is the smallest part. What it rests on is what makes it durable.

An apology, so the proposer is not discouraged. — A clear reason is what stops it feeling arbitrary. Tone helps and is not the missing piece.

Improve: Write the reason beside the rejection in step 5, in the words you would use if it were raised again. Record the change.

Check again: Every decision in the log carries its reason.

Answers to revisit: log-location, rejection-recorded, improvement-made

</details>


### Start the log

Section: practice. Stable action: step-5-brief.

A decision log started, with the rejection written so it does not have to be argued again.

- Record the three decisions in a log.
- Save the governance page beside the system documentation.

**Start here:** Write the three decisions with dates, including the accepted one.

**Enough:** Somebody re-raising the rejected proposal could be pointed at a line rather than argued with.

**Decision log:** A dated list of what was proposed and what was decided, with reasons. It is what stops the same argument recurring every few weeks.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Where the decision log lives

Section: practice. Stable action: write-log-location.

Write your answer for “Where the decision log lives”. Use the task instructions below to decide what to include.

**Answer:** Where the decision log lives




### The rejection, written so it does not have to be argued again

Section: practice. Stable action: write-rejection-recorded.

A rejection with a reason is what stops the same proposal returning every six weeks.

**Answer:** The rejection, written so it does not have to be argued again

A rejection with a reason is what stops the same proposal returning every six weeks.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson decides how a change is announced once it has been accepted.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Who decides, and how something gets in
What I am trying to do: Write the governance for your system: how a change is proposed, who decides, what evidence is required, and how long it takes.

Key idea or terms:
Governance: The stated way things get into and out of the system. It is the difference between a system people use and one they route around.
Required evidence: What a proposal must show before it is considered: where it is needed, what was tried, why it did not fit. It turns a wish into something decidable.
The decider: The person who says yes or no. Naming yourself is a complete answer; leaving it unnamed means everybody assumes somebody else is handling it.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Writing governance for a tool-library system, and writing the part that felt important. A careful proposal template, three acceptance criteria, and a note that proposals would be reviewed regularly.

Activity: Give me one inconsistent component or rule from the supplied case. Ask me to choose the shared decision, name what must stay flexible and explain how another person would know which version is current.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Where a proposal goes, and in what form” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Where a proposal goes, and in what form”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “Where a proposal goes, and in what form” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Write the four questions a proposal must answer and where it goes.
- Write who decides, in how long, and what to do if that does not happen.

- R18: [Atlassian: user stories](https://www.atlassian.com/agile/project-management/user-stories) — How a request is written so it can be judged: who, what and why. Purpose: Gives a shape for proposals that makes them decidable rather than conversational. Free reading, no account. Verified 2026-09-06. About agile stories rather than design-system governance; no subscription is required or implied. Fallback: R26.
- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — Two component pages, read for the guidance a published component has to carry. Purpose: Shows what a contribution has to produce before a component is published. Free reading, no account. Verified 2026-09-06. Its governance suits a large organisation; scale it down deliberately rather than copying it. Fallback: R06.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**A proposal route with required evidence exists**

Adequate evidence: A written route naming where to propose and what to include.

0 — No route.

1 — A route without required evidence.

2 — Route and evidence requirements both stated.

3 — As adequate, and the evidence list is short enough that people will actually complete it.

Repair: Write the four questions a proposal must answer and where it goes. Recheck: The proposal route.

**The decider and response time are named**

Adequate evidence: A named decider and a stated turnaround, with a fallback.

0 — Neither stated.

1 — Decider named without timing.

2 — Both stated with a fallback for no response.

3 — As adequate, and the same standard is stated to apply to the decider's own proposals.

Repair: Write who decides, in how long, and what to do if that does not happen. Recheck: The decider statement.

**Acceptance criteria include a composition check**

Adequate evidence: Criteria requiring at least two uses and a check that composition cannot cover it.

0 — No criteria.

1 — Criteria without a composition check.

2 — Both present and applied.

3 — As adequate, and the criteria require a specification with states before acceptance.

Repair: Add the question “can this be built from existing components?” and require two uses. Recheck: The criteria.

**A decision log records at least one rejection with its reason**

Adequate evidence: A log of three decisions including a rejection and its reasoning.

0 — No log.

1 — Acceptances recorded only.

2 — All decisions recorded including a rejection.

3 — As adequate, and a deferral is recorded with what would change it.

Repair: Apply the process to three real proposals and record each outcome with a reason. Recheck: The decision log.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson decides how a change is announced once it has been accepted.

**Review criteria:**

- A proposal route with required evidence exists
- The decider and response time are named
- Acceptance criteria include a composition check
- A decision log records at least one rejection with its reason

<details>
<summary>Reading, video and deeper explanation</summary>

- People work around systems that have no route in. If proposing a new component means an unanswered message, the practical alternative is a one-off component in a screen, and after four of those the system no longer describes the product. A written route — how to propose, what to include, who answers, how long — costs a paragraph and prevents the fork.
- Naming the decider is uncomfortable and necessary. In a system of one, it is you, and writing that down makes the process legible to anyone else and reminds you to apply the same standard to your own proposals as to others'.
- Requiring evidence keeps the system small. Where is this needed, what does it replace, why do the existing components not fit, and how many screens would use it — four questions that reject most proposals honestly and improve the rest.
- Recording rejections matters more than recording acceptances. A rejected proposal with its reason prevents the same request arriving three times and gives the person a real answer rather than silence. Over a year, the rejection log is the clearest statement of what the system is for.

[Atlassian: user stories](https://www.atlassian.com/agile/project-management/user-stories).

</details>

## Lesson 8: Versions and breaking changes

Stable ID: m13-l08-v1. Core.

A system that changes silently is a system people stop trusting. Versioning is how a change becomes something others can plan around.

Bring: Your documented components and their change history.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A version number for the current system
- Three real changes classified major, minor or patch
- A change note for the largest one
- A deprecation rule stating how long old names survive

### Start here: in everyday words

A design system is a shared set of decisions and reusable parts that helps a team build consistent products. In this lesson, your first small result is: A version number for the system as it stands, and the three levels written in your own words.

**Words you will use**

- **Major, minor, patch:** Three levels of change. Major forces work on people using it, minor adds something new, patch fixes something without changing how it is used.
- **A released version:** One that is never edited afterwards. Changing something means a new version, which is what makes a version number worth anything.
- **Breaking change:** Anything that makes existing use stop working: a renamed token, a removed variant, a changed default. Its size in characters is irrelevant.

**Quick example.** Made-up example. Classifying a token rename in a tool-library system, and classifying it by how much typing it took. Renaming surface-alt to surface-muted, because alt said nothing and muted says what it is for.

The reader demonstrates and guides the task before asking for “The version number you are giving the system now, and what it covers”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Version your system, classify three real changes as major, minor or patch, and write the change note that tells people what to do.


### Major means people must change something; minor adds; patch fixes

Section: learn. Stable action: learn-1.

Major means people must change something; minor adds; patch fixes.


### A released version is never edited: a change means a new version

Section: learn. Stable action: learn-2.

A released version is never edited: a change means a new version.


### Renaming a token or removing a variant is a breaking change

Section: learn. Stable action: learn-3.

Renaming a token or removing a variant is a breaking change.


### A change note says what changed, why, and what the reader must do

Section: learn. Stable action: learn-4.

A change note says what changed, why, and what the reader must do.


### Deprecate before removing, and say when removal happens

Section: learn. Stable action: learn-5.

Deprecate before removing, and say when removal happens.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- The system was versioned 1.0.0 at the point the two components were documented. Three changes followed. Adding the compact card variant: minor, since nothing existing changed. Fixing the focus ring's contrast on the tinted surface: patch, because usage is unchanged. Renaming surface-alt to surface-muted for consistency: major, because every use must change, and it was released with the old name deprecated for one minor version, a change note explaining the rename, and a list of the four places it appeared. The rename was deliberately delayed until it could travel with another major change.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read the rules and set a version

Section: practice-plan. Stable action: step-1-brief.

A version number for the system as it stands, and the three levels written in your own words.

- Read the assigned specification's major, minor and patch definitions.
- Give your current system a version number and say what it covers.

**Start here:** Give the system a number today, even if it feels early. A system with no version cannot have a change note.

**Enough:** Your three definitions turn on effect rather than on size.

**Major, minor, patch:** Three levels of change. Major forces work on people using it, minor adds something new, patch fixes something without changing how it is used.

**A released version:** One that is never edited afterwards. Changing something means a new version, which is what makes a version number worth anything.


### The version number you are giving the system now, and what it covers

Section: practice-plan. Stable action: write-version-number.

Write your answer for “The version number you are giving the system now, and what it covers”. Use the task instructions below to decide what to include.

**Answer:** The version number you are giving the system now, and what it covers



<details>
<summary>Example</summary>

Example (made up): 1.0.0, covering the foundations, the card and the button as documented today.

</details>


### Major, minor and patch in your own words

Section: practice-plan. Stable action: write-rules-own-words.

Major means people must change something. Minor adds without changing. Patch fixes without changing usage.

**Answer:** Major, minor and patch in your own words

Major means people must change something. Minor adds without changing. Patch fixes without changing usage.


### Classify three changes

Section: practice-plan. Stable action: step-2-brief.

Three real changes classified by whether they force work on anybody, with any you underestimated marked.

- Take three changes you have already made or plan to make.
- Classify each by whether it forces work on others.
- Record any you had assumed was smaller than it is.

**Start here:** For each change, ask one question: does anybody have to do something because of this?

**Enough:** At least one change is classified higher than it first felt.

**Breaking change:** Anything that makes existing use stop working: a renamed token, a removed variant, a changed default. Its size in characters is irrelevant.

**Effect, not size:** The test for classification. Renaming one token is a one-word edit and forces work on everyone who used it.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Classifying a token rename in a tool-library system, and classifying it by how much typing it took.

**The change:** Renaming surface-alt to surface-muted, because alt said nothing and muted says what it is for.

**What I called it:** A patch. It is one word, it changes nothing visually, and nothing about the product looks different afterwards.

**What happened:** Four places in my own stylesheet stopped working, plus a screen somebody else had built. Nothing looked broken; the colour simply fell back to white and two panels lost their tint.

**What the classification should have been:** Major. Everyone using the old name has to change, and a silent fallback is the worst way to find out.

**What I did instead:** Released it with the old name kept and marked deprecated for one minor version, a change note listing the four places, and the removal date stated. The rename waited to travel with the next major change.

**Wrong turn:** The wrong turn is classifying by how much you typed, because a rename is the smallest edit there is. The test is whether anybody else has to do something, and a rename forces work on everyone who used the old name.

**Trade-off:** Keeping both names for a version means the system briefly has two names for one thing, which is exactly the confusion the rename was meant to end.

**Unknown:** Still unknown: whether anybody outside my own files is using the old name. I searched what I can see, and a system used elsewhere would need the change note to reach them.


### Change 1 · what it is, its classification, and why

Section: practice-plan. Stable action: write-change-1.

Write your answer for “Change 1 · what it is, its classification, and why”. Use the task instructions below to decide what to include.

**Answer:** Change 1 · what it is, its classification, and why




### Change 2 · what it is, its classification, and why

Section: practice-plan. Stable action: write-change-2.

Write your answer for “Change 2 · what it is, its classification, and why”. Use the task instructions below to decide what to include.

**Answer:** Change 2 · what it is, its classification, and why




### Change 3 · what it is, its classification, and why

Section: practice-plan. Stable action: write-change-3.

Write your answer for “Change 3 · what it is, its classification, and why”. Use the task instructions below to decide what to include.

**Answer:** Change 3 · what it is, its classification, and why




### Any change you had assumed was smaller than it is

Section: practice-plan. Stable action: write-underestimated.

There is usually one. A rename is the classic case.

**Answer:** Any change you had assumed was smaller than it is

There is usually one. A rename is the classic case.


### Write the change note

Section: practice-plan. Stable action: step-3-brief.

A change note for the largest change, listing every place affected and when the old form stops working.

- For the largest change write what changed, why, and what to do.
- List the places affected.
- Give a date or version by which the old form stops working.

**Start here:** Search your own files for the thing you are changing, and paste the list of hits into the places field.

**Enough:** A reader could carry out the change from the note without asking you where to look.

**Change note:** What changed, why, and what the reader must do. The third part is the one people write last and need first.

**Places affected:** The list of files, components or screens that have to change. A note without it is a warning rather than an instruction.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six changes to a made up tool-library system. For each one, decide how it should be classified.

Renaming surface-alt to surface-muted.

- major
- minor
- patch

<details>
<summary>After your attempt</summary>

major — Everyone using the old name has to change, and the failure is silent: the colour falls back and panels quietly lose their tint.

minor — Nothing is being added. Something is being taken away and replaced.

patch — The size of the edit is not the test. The effect on everybody else is.

Now classify your own three changes the same way and write the note for whichever came out largest.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six changes to a made up tool-library system. For each one, decide how it should be classified.

Adding a compact variant to the card. Nothing existing changes.

- major
- minor
- patch

<details>
<summary>After your attempt</summary>

major — Nobody has to do anything. Every existing use keeps working exactly as it did.

minor — New capability, no existing use affected. This is the textbook minor change.

patch — Patch is for fixes, and nothing here was broken.

Now classify your own three changes the same way and write the note for whichever came out largest.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six changes to a made up tool-library system. For each one, decide how it should be classified.

Darkening the focus ring so it passes contrast on the tinted surface. Usage is unchanged.

- major
- minor
- patch

<details>
<summary>After your attempt</summary>

major — Nobody has to change anything they wrote.

minor — Nothing new is available. Something that was wrong is now right.

patch — A fix with no change to how the component is used. It should still appear in the changelog.

Now classify your own three changes the same way and write the note for whichever came out largest.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six changes to a made up tool-library system. For each one, decide how it should be classified.

Removing the featured variant, which two screens still use.

- major
- minor
- patch

<details>
<summary>After your attempt</summary>

major — Two screens break. Removal is always major, which is why deprecation exists as the step before it.

minor — Removing is the opposite of adding.

patch — Two screens stopping working is not a fix.

Now classify your own three changes the same way and write the note for whichever came out largest.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six changes to a made up tool-library system. For each one, decide how it should be classified.

Changing the card’s default padding from 16 to 12, which affects every existing card.

- major
- minor
- patch

<details>
<summary>After your attempt</summary>

major — Every existing use changes appearance without anybody asking. A changed default is a breaking change even though nothing stops working.

minor — Nothing is being added, and existing use is affected.

patch — It is not a fix; it is a different decision, and it arrives everywhere at once.

Now classify your own three changes the same way and write the note for whichever came out largest.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six changes to a made up tool-library system. For each one, decide how it should be classified.

Correcting a spelling mistake on the card documentation page.

- major
- minor
- patch

<details>
<summary>After your attempt</summary>

major — Nobody has to do anything, and nothing renders differently.

minor — Nothing new exists.

patch — A fix with no effect on usage. Small, and still worth a line in the changelog so the page has a history.

Now classify your own three changes the same way and write the note for whichever came out largest.

</details>


### For the largest change: what changed, why, and what the reader must do

Section: practice-plan. Stable action: write-change-note.

Write your answer for “For the largest change: what changed, why, and what the reader must do”. Use the task instructions below to decide what to include.

**Answer:** For the largest change: what changed, why, and what the reader must do




### Every place it affects

Section: practice-plan. Stable action: write-places-affected.

Search your own stylesheet and documentation. A change note without a list of places is a warning rather than an instruction.

**Answer:** Every place it affects

Search your own stylesheet and documentation. A change note without a list of places is a warning rather than an instruction.


### The version or date by which the old form stops working

Section: practice-plan. Stable action: write-stops-working.

Write your answer for “The version or date by which the old form stops working”. Use the task instructions below to decide what to include.

**Answer:** The version or date by which the old form stops working




### Write the deprecation rule

Section: practice-plan. Stable action: step-4-brief.

A deprecation rule saying how long an old name survives and how deprecation is signalled.

- State how long a deprecated name survives before removal.
- State how deprecation is signalled in the documentation.

**Start here:** Choose a length in versions rather than in weeks. Weeks pass without anybody noticing.

**Enough:** Somebody using a deprecated name would find out before it stopped working.

**Deprecation:** Marking something as going away while keeping it working. It gives people a window to change, which is the difference between a plan and a surprise.

**Signalled:** Visible where somebody would meet it: on the documentation page, in the changelog, and ideally where the old name is used.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Removing an unused variant from a tool-library system, and removing it the day it stopped being needed.

**What I removed:** The featured card variant. The home page had been redesigned and no longer used it, so it was dead code in the stylesheet and a row in the grid nobody needed.

**What I checked:** The home page. It was clean, so I deleted the variant, released it, and noted it in the changelog as a removal.

**What broke two days later:** The anniversary page, which somebody had built in February and which I had not opened in months. It still used the variant, and the card fell back to the default with its layout half wrong.

**What deprecation would have done:** Kept the variant working, marked it as going away in the documentation, and named the version it would be removed at. The anniversary page would have been found during that window rather than by breaking.

**What the rule became:** A deprecated name survives one minor version, is marked on its documentation page with the removal version, and appears in the changelog when it is deprecated as well as when it goes.

**Wrong turn:** The wrong turn is removing something the moment you can see it is unused, because your own view of what uses it is always incomplete. Deprecation is what turns a removal from a surprise into a window.

**Trade-off:** Keeping something working for a version means the system carries code you have already decided against, and the grid has a row marked as going away in it.

**Unknown:** Still unknown: how many screens I do not know about. The rule assumes a window catches them, which is a better assumption than the one I made and still an assumption.


### How long a deprecated name survives before removal

Section: practice-plan. Stable action: write-deprecation-length.

Write your answer for “How long a deprecated name survives before removal”. Use the task instructions below to decide what to include.

**Answer:** How long a deprecated name survives before removal




### How deprecation is signalled in the documentation

Section: practice-plan. Stable action: write-deprecation-signal.

Write your answer for “How deprecation is signalled in the documentation”. Use the task instructions below to decide what to include.

**Answer:** How deprecation is signalled in the documentation




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Renaming one token is a one-word edit. Is it a patch?

- No. Size is irrelevant; effect is what counts, and everybody using the old name has to change.
- Yes, since nothing about the product looks different.
- Yes, if you also update all the uses yourself.

<details>
<summary>After your attempt</summary>

No. Size is irrelevant; effect is what counts, and everybody using the old name has to change. — A rename fails silently: the value falls back and things quietly lose their tint. That is a breaking change however little you typed.

Yes, since nothing about the product looks different. — Nothing looks different in your file, where you also changed the uses. Everywhere else, something has quietly stopped working.

Yes, if you also update all the uses yourself. — You can update the ones you can see. The classification is about everybody, including the screen somebody built last month.

Improve: Reclassify any change in step 2 you judged by size rather than effect, and record the change in step 5.

Check again: Every classification names who has to do something.

Answers to revisit: change-1, change-2, change-3, underestimated, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You are changing the card’s default padding from 16 to 12. Nothing breaks. What is it?

- Major. Every existing card changes appearance without anybody asking for it.
- Minor, since nothing stops working.
- Patch, since it is a refinement.

<details>
<summary>After your attempt</summary>

Major. Every existing card changes appearance without anybody asking for it. — A changed default arrives everywhere at once. Nothing stops working, and every screen using the component now looks different from the day it was signed off.

Minor, since nothing stops working. — Minor means something was added and existing use is untouched. Existing use is exactly what changed here.

Patch, since it is a refinement. — Patch is for fixing something that was wrong. This is a different decision, applied retrospectively to everything.

Improve: Check whether any of your three changes alters a default, and reclassify it. Record the change in step 5.

Check again: No change that alters existing appearance is classified below major.

Answers to revisit: changelog-entries, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your change note says what changed and why. Is that enough?

- No. What the reader must do, and where, is the part they need and the part written last.
- Yes, since they can search for it themselves.
- Yes, provided the change is in the changelog.

<details>
<summary>After your attempt</summary>

No. What the reader must do, and where, is the part they need and the part written last. — A note without a list of affected places is a warning. With the list it is an instruction somebody can follow in ten minutes.

Yes, since they can search for it themselves. — They can, once they know to. The note is what tells them, and searching is the work you already did.

Yes, provided the change is in the changelog. — The changelog says a change happened. The note says what to do about it.

Improve: Add the list of affected places and the date the old form stops working to your note in step 3. Record the change in step 5.

Check again: The note tells a reader what to do and where.

Answers to revisit: change-note, places-affected, stops-working, improvement-made

</details>


### Start the changelog

Section: practice. Stable action: step-5-brief.

The three changes recorded as changelog entries with versions, and the repair the Check questions asked for.

- Record the three changes in a changelog with versions.
- Save the versioning rules with the system documentation.

**Start here:** Write the newest entry at the top, with the version and the date.

**Enough:** Each entry says what changed and what the reader must do, if anything.

**Changelog:** A dated list of what changed at each version. It is how somebody who has been away for a month finds out what they missed.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### The three changes as changelog entries, with versions

Section: practice. Stable action: write-changelog-entries.

Write your answer for “The three changes as changelog entries, with versions”. Use the task instructions below to decide what to include.

**Answer:** The three changes as changelog entries, with versions




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson finds out whether anything you have built is actually used.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Versions and breaking changes
What I am trying to do: Version your system, classify three real changes as major, minor or patch, and write the change note that tells people what to do.

Key idea or terms:
Major, minor, patch: Three levels of change. Major forces work on people using it, minor adds something new, patch fixes something without changing how it is used.
A released version: One that is never edited afterwards. Changing something means a new version, which is what makes a version number worth anything.
Breaking change: Anything that makes existing use stop working: a renamed token, a removed variant, a changed default. Its size in characters is irrelevant.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Classifying a token rename in a tool-library system, and classifying it by how much typing it took. Renaming surface-alt to surface-muted, because alt said nothing and muted says what it is for.

Activity: Give me one inconsistent component or rule from the supplied case. Ask me to choose the shared decision, name what must stay flexible and explain how another person would know which version is current.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “The version number you are giving the system now, and what it covers” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “The version number you are giving the system now, and what it covers”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “The version number you are giving the system now, and what it covers” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Assign a version and write which parts of the system it governs.
- For each change ask who must alter their work. If anyone must, it is major.

- R67: [Semantic Versioning 2.0.0](https://semver.org/) — The major, minor and patch definitions and the rule that a released version is never modified. Purpose: Supplies the classification this lesson applies to design changes. Free reading, no account, CC BY 3.0. Verified 2026-09-06; the specification is 2.0.0 and states no date. Written for software APIs: it says nothing about design systems and gives only a minimal deprecation rule, so applying and announcing are your own work. Fallback: R18.
- R18: [Atlassian: user stories](https://www.atlassian.com/agile/project-management/user-stories) — Writing a change so that its audience knows what to do. Purpose: Shapes the change note around the reader's action rather than the author's activity. Free reading, no account. Verified 2026-09-06. About agile stories rather than release notes; no subscription is required. Fallback: R26.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The system carries a version and a stated scope**

Adequate evidence: A version number with a statement of what is covered by it.

0 — No version.

1 — A version without a stated scope.

2 — Both, with the interface named — tokens, component names, behaviour.

3 — As adequate, and the scope says what is explicitly not part of the versioned interface.

Repair: Assign a version and write which parts of the system it governs. Recheck: The version statement.

**Three changes are classified by effect, not size**

Adequate evidence: Three classifications with the reasoning about forced work.

0 — Classified by how large the edit felt.

1 — Mostly by effect with one misclassification.

2 — All three classified by whether others must change.

3 — As adequate, and one is reclassified upward after considering who is affected.

Repair: For each change ask who must alter their work. If anyone must, it is major. Recheck: The classifications.

**A change note states what to do and by when**

Adequate evidence: A note with the change, the reason, the affected places and a deadline.

0 — No note.

1 — A note describing the change only.

2 — All four elements present.

3 — As adequate, and the note is written for someone who did not attend any discussion.

Repair: Rewrite the note answering: what changed, why, what do I do, by when. Recheck: The change note.

**A deprecation rule exists**

Adequate evidence: A stated survival period for deprecated names and how deprecation is signalled.

0 — No rule.

1 — A vague intention to give notice.

2 — A stated period and signalling method.

3 — As adequate, and the rule matches the pace at which your system actually releases.

Repair: Write how long an old name stays and how someone finds out it is going. Recheck: The deprecation rule.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson finds out whether anything you have built is actually used.

**Review criteria:**

- The system carries a version and a stated scope
- Three changes are classified by effect, not size
- A change note states what to do and by when
- A deprecation rule exists

<details>
<summary>Reading, video and deeper explanation</summary>

- The assigned specification is written for software interfaces and its rules transfer cleanly: a change that forces others to alter their work is major, one that adds without breaking is minor, and a fix that changes nothing about how it is used is a patch. Applying it to a design system means treating your tokens, component names and behaviour as the interface, because that is what other people build against.
- The rule that a released version is never modified matters more in design than people expect. Quietly changing a token's value after release means two screens built a week apart look different for reasons nobody recorded, and the difference is found much later by someone who cannot explain it.
- Breaking changes in a design system are often invisible to the person making them. Renaming a token, removing a variant, changing a default, tightening a content rule — each forces work on everyone who used the old one. Classifying honestly is uncomfortable and is what makes the version number meaningful.
- The change note is what turns a version into communication. What changed, why, what you must do, and by when. The specification says nothing about how to communicate, so this part is your own: written well, it is read; written as a list of commits, it is not.

[Semantic Versioning 2.0.0](https://semver.org/).

</details>

## Lesson 9: Getting it adopted

Stable ID: m13-l09-v1. Core.

A system nobody has adopted has no effect. Migration is where you learn whether it fits the product it was built from.

Bring: Your system and two existing screens.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Two real screens migrated onto the system
- An adoption figure per screen with the counting method stated
- A blockers list with a decision for each
- Any product change made to fit the system, recorded

### Start here: in everyday words

A design system is a shared set of decisions and reusable parts that helps a team build consistent products. In this lesson, your first small result is: One real screen rebuilt from system components and tokens, with every element that could not come from the system recorded.

**Words you will use**

- **Adoption:** How much of a real screen actually comes from the system. It is the only measure of whether the system has an effect.
- **Blocker:** Something the screen needs that the system cannot supply. Each one is information about fit rather than an obstacle to migration.
- **Counting method:** What counts as one element. Any consistent rule works; an unstated one makes the figure impossible to repeat or compare.

**Quick example.** Made-up example. Measuring adoption on a tool-library screen, and measuring the wrong screen. A screen I had built the week before, specifically to show the system working. It came out at 100 per cent.

The reader demonstrates and guides the task before asking for “Which real screen, and why this one”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Migrate two existing screens onto the system, measure how much of each now comes from it, and record what blocked full adoption.


### Measure adoption: what proportion of a screen comes from the system

Section: learn. Stable action: learn-1.

Measure adoption: what proportion of a screen comes from the system.


### Migrate a real screen, not a demonstration one

Section: learn. Stable action: learn-2.

Migrate a real screen, not a demonstration one.


### Every blocker is information: a missing component, a wrong rule, a gap

Section: learn. Stable action: learn-3.

Every blocker is information: a missing component, a wrong rule, a gap.


### Partial adoption is normal; record what remains and why

Section: learn. Stable action: learn-4.

Partial adoption is normal; record what remains and why.


### Do not change the product to fit the system without saying so

Section: learn. Stable action: learn-5.

Do not change the product to fit the system without saying so.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Two screens were migrated. The class list reached 90 per cent system-provided after two blockers were fixed: a missing filter chip and a spacing value that did not exist. The booking summary reached 55 per cent, and the reasons were recorded: it needs a component the system deliberately does not cover — a receipt-style record — and its status treatment carries a distinction the system's status component flattens. The second was explicitly not resolved by simplifying the screen, since the distinction was one the m05 research had shown people using.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Migrate the first screen

Section: practice-plan. Stable action: step-1-brief.

One real screen rebuilt from system components and tokens, with every element that could not come from the system recorded.

- Rebuild one real screen using system components and tokens.
- Record every element that could not come from the system.

**Start here:** Choose the screen you are least confident about rather than the one that will migrate cleanly.

**Enough:** Every blocker names what the screen needed, not only that something did not fit.

**Adoption:** How much of a real screen actually comes from the system. It is the only measure of whether the system has an effect.

**Blocker:** Something the screen needs that the system cannot supply. Each one is information about fit rather than an obstacle to migration.


### Which real screen, and why this one

Section: practice-plan. Stable action: write-screen-1.

A real one. A screen built to demonstrate the system will reach a hundred per cent and prove nothing.

**Answer:** Which real screen, and why this one

A real one. A screen built to demonstrate the system will reach a hundred per cent and prove nothing.


### Every element that could not come from the system, and what it needed

Section: practice-plan. Stable action: write-blockers-1.

Write your answer for “Every element that could not come from the system, and what it needed”. Use the task instructions below to decide what to include.

**Answer:** Every element that could not come from the system, and what it needed




### Measure adoption

Section: practice-plan. Stable action: step-2-brief.

An adoption figure with the counting method stated so somebody could repeat it.

- Count total elements and system-provided ones.
- State the counting method so the figure is repeatable.

**Start here:** Count from the markup rather than from the picture, and write the rule you used before you start.

**Enough:** Somebody could recount your screen and get the same number.

**Counting method:** What counts as one element. Any consistent rule works; an unstated one makes the figure impossible to repeat or compare.

**By hand:** Counting from the markup with a pencil. Fifteen minutes on two screens is accurate enough to steer decisions.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Measuring adoption on a tool-library screen, and measuring the wrong screen.

**What I measured:** A screen I had built the week before, specifically to show the system working. It came out at 100 per cent.

**What that told me:** That components I had designed together worked together. It was a demonstration measuring itself.

**What I measured instead:** The real listing screen, built four months earlier, before any of this existed.

**What that came out at:** Sixty-two per cent, with two blockers: a filter chip nothing covered, and a spacing value the scale did not have.

**Why the lower number was the useful one:** It named two specific gaps, one of which went into the governance process that afternoon. The hundred per cent named nothing at all.

**Wrong turn:** The wrong turn is migrating a screen you built to show the system off, because it is quick and the number is flattering. A demonstration screen measures the system against itself.

**Trade-off:** A real screen migrates slowly and produces a number you would rather not show anybody. It is the only number that tells you whether the system fits the product.

**Unknown:** Still unknown: whether 62 per cent is good. There is nothing to compare it with, so it is a starting figure rather than a verdict.


### How you counted, stated so the figure could be repeated

Section: practice-plan. Stable action: write-counting-method.

Write your answer for “How you counted, stated so the figure could be repeated”. Use the task instructions below to decide what to include.

**Answer:** How you counted, stated so the figure could be repeated



<details>
<summary>Example</summary>

Example (made up): every visible element with its own styling counts as one, containers included, counted by hand from the markup.

</details>


### The figure for the first screen

Section: practice-plan. Stable action: write-figure-1.

Write your answer for “The figure for the first screen”. Use the task instructions below to decide what to include.

**Answer:** The figure for the first screen




### Migrate the second and compare

Section: practice-plan. Stable action: step-3-brief.

A second screen of a different kind migrated and counted the same way, with the reason the two figures differ.

- Repeat with a different kind of screen.
- Compare the two figures and note why they differ.

**Start here:** Pick something as unlike the first screen as your product allows.

**Enough:** The reason for the difference names a kind of screen rather than a difficulty.

**A different kind of screen:** One with a different job: a list against a record, a form against a summary. The gap between the two figures is where the system’s coverage ends.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Comparing adoption on two tool-library screens, and reading the gap as a failure.

**The two figures:** The listing screen reached 90 per cent after two fixes. The booking summary reached 55, and I was ready to treat that as a problem with the summary.

**What I nearly did:** Started listing what the booking summary would need in order to catch up: a record component, a second status treatment, a different action row.

**What the gap actually said:** The listing screen is the kind of screen the system was built from. The booking summary is a record of something you own, which is a different job the system was never shaped around.

**Why that matters more than the number:** Closing the gap means building a second half of the system for records. That is a real project with a cost, and it was invisible while the number looked like a screen-level failure.

**What I recorded:** Two figures, the reason they differ stated as a kind of screen, and the coverage decision written out as something to decide rather than something to fix this week.

**Wrong turn:** The wrong turn is reading a low figure as a problem with the screen, because the screen is what you were just looking at. The gap between two different kinds of screen is where the system’s coverage ends, and that is a decision rather than a defect.

**Trade-off:** Naming it as a coverage decision means the low figure stays low for now, and anybody reading the summary sees a system that covers half the product.

**Unknown:** Still unknown: whether records are worth covering at all. There are three such screens, and three may not justify a second half of the system.


### The second screen, and how it differs from the first

Section: practice-plan. Stable action: write-screen-2.

Write your answer for “The second screen, and how it differs from the first”. Use the task instructions below to decide what to include.

**Answer:** The second screen, and how it differs from the first




### Its figure, counted the same way

Section: practice-plan. Stable action: write-figure-2.

Write your answer for “Its figure, counted the same way”. Use the task instructions below to decide what to include.

**Answer:** Its figure, counted the same way




### Why the two numbers differ

Section: practice-plan. Stable action: write-why-differ.

Write your answer for “Why the two numbers differ”. Use the task instructions below to decide what to include.

**Answer:** Why the two numbers differ




### Decide the blockers

Section: practice-plan. Stable action: step-4-brief.

Each blocker decided as an addition, a one-off, or a change to the screen, with any research-supported distinction you removed made visible.

- For each blocker choose: add to the system, leave as a one-off, or change the screen.
- Record any decision that removes a distinction the research supported.

**Start here:** Take the blocker you find most annoying and decide it by the criteria rather than by the annoyance.

**Enough:** Every blocker has a decision, and any distinction you removed is written down.

**One-off:** Leaving something outside the system deliberately. It is a legitimate answer and it has to be recorded, or it becomes an accidental component.

**Changing the screen to fit:** Simplifying the product so the system covers it. Allowed, and it must be said out loud, because sometimes it removes something people were using.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six blockers found migrating made up tool-library screens. For each one, decide what the right answer is.

A filter chip, which also appears on the search screen and has no equivalent in the system.

- add it to the system
- leave it as a one-off
- change the screen

<details>
<summary>After your attempt</summary>

add it to the system — Two screens, no existing fit. It passes the governance criteria, so it goes through the process rather than being built twice.

leave it as a one-off — Two uses is what a component is for.

change the screen — Removing filtering to fit the system would be the system deciding the product.

Now decide each of your own blockers and write the reason beside it.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six blockers found migrating made up tool-library screens. For each one, decide what the right answer is.

A 10 pixel gap the scale does not have. Trying 8 makes no visible difference.

- add it to the system
- leave it as a one-off
- change the screen

<details>
<summary>After your attempt</summary>

add it to the system — Adding a value nobody can distinguish from an existing one makes the scale permit more and decide less.

leave it as a one-off — A raw value left in a screen is how drift starts again.

change the screen — Use 8. Nobody can tell, and the screen now comes from the system entirely.

Now decide each of your own blockers and write the reason beside it.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six blockers found migrating made up tool-library screens. For each one, decide what the right answer is.

A decorative banner used once a year on the anniversary page.

- add it to the system
- leave it as a one-off
- change the screen

<details>
<summary>After your attempt</summary>

add it to the system — One use a year is a screen, not a component, and it costs maintenance for ever.

leave it as a one-off — Build it on the screen and record it as deliberately outside. That record is what stops it looking like an oversight later.

change the screen — Nothing is wrong with the screen.

Now decide each of your own blockers and write the reason beside it.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six blockers found migrating made up tool-library screens. For each one, decide what the right answer is.

The booking screen distinguishes overdue from due today, and the system’s status component flattens both to late.

- add it to the system
- leave it as a one-off
- change the screen

<details>
<summary>After your attempt</summary>

add it to the system — The research showed people using the distinction, so flattening it removes something that works. The component has to carry it.

leave it as a one-off — A second status treatment on one screen is how two vocabularies start.

change the screen — This is the decision that has to be recorded in the research-cost field if you make it. Here the evidence argues against it.

Now decide each of your own blockers and write the reason beside it.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six blockers found migrating made up tool-library screens. For each one, decide what the right answer is.

A receipt-style record, on a screen the system deliberately placed out of scope.

- add it to the system
- leave it as a one-off
- change the screen

<details>
<summary>After your attempt</summary>

add it to the system — The boundary was written for a reason, and this is the first test of it.

leave it as a one-off — Outside the scope, built on the screen, recorded as such. The adoption figure for that screen stays low and the reason is stated.

change the screen — The screen needs what it needs; the system chose not to cover it.

Now decide each of your own blockers and write the reason beside it.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six blockers found migrating made up tool-library screens. For each one, decide what the right answer is.

A card variant with the action moved to the top, built on one screen months ago for no recorded reason.

- add it to the system
- leave it as a one-off
- change the screen

<details>
<summary>After your attempt</summary>

add it to the system — A variant with no reason behind it is the kind that takes the count past four.

leave it as a one-off — It would be, if there were a reason. Nobody can remember one.

change the screen — Use the standard card. If something breaks, the reason will reappear, and if nothing does, it never had one.

Now decide each of your own blockers and write the reason beside it.

</details>


### For each blocker: add to the system, leave as a one-off, or change the screen

Section: practice-plan. Stable action: write-blocker-decisions.

Write your answer for “For each blocker: add to the system, leave as a one-off, or change the screen”. Use the task instructions below to decide what to include.

**Answer:** For each blocker: add to the system, leave as a one-off, or change the screen




### Any decision that removes a distinction your research supported

Section: practice-plan. Stable action: write-research-cost.

Simplifying a screen to fit the system is allowed and has to be visible. This field is where it becomes visible.

**Answer:** Any decision that removes a distinction your research supported

Simplifying a screen to fit the system is allowed and has to be visible. This field is where it becomes visible.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your migrated screen reached 100 per cent adoption. Is that a good result?

- It depends entirely on whether it was a real screen. A demonstration screen measures the system against itself.
- Yes, since full coverage is the goal.
- Yes, provided the screen is representative.

<details>
<summary>After your attempt</summary>

It depends entirely on whether it was a real screen. A demonstration screen measures the system against itself. — A real screen built before the system existed is the only one that can tell you about fit. Sixty-two per cent with two named gaps is far more useful than a hundred with none.

Yes, since full coverage is the goal. — Full coverage of a screen designed around the system is guaranteed rather than achieved.

Yes, provided the screen is representative. — Representative is the whole question, and a screen built to show the system off is not.

Improve: Migrate a screen built before the system existed in step 1, and record its figure. Note the change in step 5.

Check again: At least one migrated screen predates the system.

Answers to revisit: screen-1, blockers-1, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Adoption is low on one screen. Is that a rollout problem?

- It is a fit problem first. If the system does not cover the real screens, no amount of advocacy changes the number.
- Yes, people need to be persuaded to use it.
- Yes, and better documentation would fix it.

<details>
<summary>After your attempt</summary>

It is a fit problem first. If the system does not cover the real screens, no amount of advocacy changes the number. — The blockers list is what separates the two. Missing components and wrong rules are fit; a system that covers everything and is still unused is rollout.

Yes, people need to be persuaded to use it. — Persuasion cannot supply a component that does not exist. Read the blockers before deciding it is about willingness.

Yes, and better documentation would fix it. — Documentation helps somebody use what exists. It does not help with what is missing.

Improve: Make sure every blocker in step 4 names what the screen needed, so fit and rollout can be told apart. Record the change in step 5.

Check again: Your blockers say what was missing rather than that something did not fit.

Answers to revisit: blocker-decisions, research-cost, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

To reach full adoption you would have to flatten a status distinction your research showed people using. Should you?

- Not silently. Changing the product to fit the system is allowed, and it must be recorded when it removes something that works.
- Yes, consistency is worth more than a small distinction.
- No, the system should never change a product.

<details>
<summary>After your attempt</summary>

Not silently. Changing the product to fit the system is allowed, and it must be recorded when it removes something that works. — The adoption figure is not the goal; it is a measure. Trading a working distinction for a higher number is a real decision, and it deserves a line rather than a quiet edit.

Yes, consistency is worth more than a small distinction. — It may be, and that is the argument to have out loud. Made silently, it looks like the system quietly deciding the product.

No, the system should never change a product. — Systems do simplify products, often usefully. The rule is that it is visible.

Improve: Record any distinction you removed in the research-cost field in step 4, and note the change in step 5.

Check again: Nothing the research supported was removed without being written down.

Answers to revisit: blocker-decisions, research-cost, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

Accepted additions fed into the governance process, and a few lines summarising the figures, the blockers and what remains.

- Write the adoption figures, blockers and decisions.
- Feed accepted additions into the governance process.
- Save the migrated screens.

**Start here:** Open your governance page and put the accepted blocker through it as a proposal.

**Enough:** Nothing was added to the system without going through your own route.

**Feeding the process:** Putting an accepted addition through the route you wrote last lesson rather than adding it directly. A process you bypass yourself is not a process.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Which accepted additions went into the governance process

Section: practice. Stable action: write-into-governance.

Write your answer for “Which accepted additions went into the governance process”. Use the task instructions below to decide what to include.

**Answer:** Which accepted additions went into the governance process




### The two figures, the blockers and what remains, in a few lines

Section: practice. Stable action: write-adoption-summary.

Write your answer for “The two figures, the blockers and what remains, in a few lines”. Use the task instructions below to decide what to include.

**Answer:** The two figures, the blockers and what remains, in a few lines




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson decides what the system is actually promising.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Getting it adopted
What I am trying to do: Migrate two existing screens onto the system, measure how much of each now comes from it, and record what blocked full adoption.

Key idea or terms:
Adoption: How much of a real screen actually comes from the system. It is the only measure of whether the system has an effect.
Blocker: Something the screen needs that the system cannot supply. Each one is information about fit rather than an obstacle to migration.
Counting method: What counts as one element. Any consistent rule works; an unstated one makes the figure impossible to repeat or compare.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Measuring adoption on a tool-library screen, and measuring the wrong screen. A screen I had built the week before, specifically to show the system working. It came out at 100 per cent.

Activity: Give me one inconsistent component or rule from the supplied case. Ask me to choose the shared decision, name what must stay flexible and explain how another person would know which version is current.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Which real screen, and why this one” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Which real screen, and why this one”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “Which real screen, and why this one” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Choose two screens you actually built earlier and rebuild them from the system.
- Count elements and system-provided elements on each screen and write how you counted.

- R11: [GOV.UK Design System: patterns](https://design-system.service.gov.uk/patterns/) — One pattern, read for how components combine into a working screen. Purpose: Shows composition as the route to coverage rather than adding components. Free reading, no account. Verified 2026-09-06. Government task patterns; take the composition approach, not the specific screens. Fallback: R02.
- R67: [Semantic Versioning 2.0.0](https://semver.org/) — The rules for additive changes. Purpose: Frames additions from migration as minor changes with a version and a note. Free reading, no account, CC BY 3.0. Verified 2026-09-06. Written for software APIs; the design-system application is yours. Fallback: R18.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Two real screens are migrated**

Adequate evidence: Two migrated screens from actual product work, not demonstrations.

0 — No migration.

1 — One screen, or a demonstration screen.

2 — Two real screens migrated.

3 — As adequate, and the two are different kinds of screen so the comparison is meaningful.

Repair: Choose two screens you actually built earlier and rebuild them from the system. Recheck: The migrated screens.

**Adoption is measured with a stated method**

Adequate evidence: A figure per screen with the counting method written down.

0 — No measurement.

1 — An impression of coverage.

2 — Counted figures with the method stated.

3 — As adequate, and the method is repeatable by someone else.

Repair: Count elements and system-provided elements on each screen and write how you counted. Recheck: The adoption figures.

**Blockers are listed with decisions**

Adequate evidence: Each blocker with a decision: add, leave, or change the screen.

0 — Blockers worked around silently.

1 — Listed without decisions.

2 — Each has a decision and a reason.

3 — As adequate, and accepted additions have gone into the governance process rather than straight into the system.

Repair: List everything that could not come from the system and decide each one explicitly. Recheck: The blockers list.

**Product changes made to fit the system are recorded**

Adequate evidence: Any simplification of a screen recorded with what it removed.

0 — Screens simplified silently.

1 — Changes noted without what was lost.

2 — Each recorded with what it removed and why that is acceptable.

3 — As adequate, and one change was rejected because it would have removed an evidenced distinction.

Repair: Compare the migrated screens with the originals and record anything that disappeared. Recheck: The change record.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson decides what the system is actually promising.

**Review criteria:**

- Two real screens are migrated
- Adoption is measured with a stated method
- Blockers are listed with decisions
- Product changes made to fit the system are recorded

<details>
<summary>Reading, video and deeper explanation</summary>

- Adoption is measurable in a rough and useful way: count the elements on a screen and count how many come from the system. That number, tracked across two or three screens, tells you far more about whether the system works than any amount of internal satisfaction with the documentation.
- The screen you migrate must be a real one. Demonstration screens are built from the components that exist, which proves nothing. A real screen contains the awkward cases, the one-offs and the compromises, and it is those that show which parts of the system are missing or wrong.
- Blockers are the most valuable output of migration. A component that nearly fits, a token that has no equivalent, a content rule that the real content violates — each is a specific improvement, and collecting them is the point of the exercise rather than an obstacle to it.
- There is a temptation to change the product so the system fits. Sometimes that is right, and it must be a recorded decision rather than a quiet simplification: a screen that lost a distinction people relied on, because the system had no component for it, is a regression dressed as consistency.

[GOV.UK Design System: patterns](https://design-system.service.gov.uk/patterns/).

</details>

## Lesson 10: What the system guarantees

Stable ID: m13-l10-v1. Core.

A system's greatest accessibility value is making the right thing the default. Its greatest risk is people assuming it guarantees more than it does.

Bring: Your m11 results and component pages.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A list of guarantees the system makes
- A re-runnable check per guarantee
- A list of responsibilities left to the user of the system
- A statement that the system claims no page-level conformance

### Start here: in everyday words

A design system is a shared set of decisions and reusable parts that helps a team build consistent products. In this lesson, your first small result is: Two lists: what a component can guarantee alone, and what depends on how components are composed.

**Words you will use**

- **Component-owned:** Something true of the component wherever it is used: its own focus ring, its keyboard behaviour, whether its states differ without colour.
- **Composition-owned:** Something that only exists once components are arranged: heading order, focus order across a page, reading order. No component can own it.
- **Guarantee:** Something you have tested and will keep testing. It is a promise with a check behind it rather than a description of intent.

**Quick example.** Made-up example. Writing accessibility guarantees for a tool-library system, and writing one that covered everything. “All components are accessible.” It was the shortest possible version and it felt like the strongest.

The reader demonstrates and guides the task before asking for “Accessibility properties a component can guarantee by itself”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Write the accessibility guarantees your system makes, prove each with a check, and state plainly what remains the responsibility of whoever uses it.


### Guarantee only what you have tested in the component itself

Section: learn. Stable action: learn-1.

Guarantee only what you have tested in the component itself.


### Idea 2: Composition can break what components guarantee: heading order…

Section: learn. Stable action: learn-2.

Composition can break what components guarantee: heading order, focus order, contrast.


### State the user's responsibilities as clearly as the system's

Section: learn. Stable action: learn-3.

State the user's responsibilities as clearly as the system's.


### A guarantee needs a check that can be re-run when the component changes

Section: learn. Stable action: learn-4.

A guarantee needs a check that can be re-run when the component changes.


### Never claim conformance for a system; components are not pages

Section: learn. Stable action: learn-5.

Never claim conformance for a system; components are not pages.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- Four guarantees were written. Focus rings meet contrast on all permitted surfaces — checked by measurement, with the surfaces listed. Interactive components match their documented keyboard behaviour — checked by walking each key table. States are distinguishable without colour — checked in greyscale. Text tokens meet the contrast threshold in their permitted pairs — checked by measurement. Four responsibilities were written opposite: page heading order, alternative text for images you supply, reading order of your composition, and testing the assembled page. The statement ended by saying the system claims no conformance, since conformance is a property of a page.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Separate component from composition

Section: practice-plan. Stable action: step-1-brief.

Two lists: what a component can guarantee alone, and what depends on how components are composed.

- List accessibility properties your components can own alone.
- List the ones that depend on how they are composed.

**Start here:** Take one accessibility property and ask whether it could be true of the component sitting alone on an empty page.

**Enough:** Nothing on the component list depends on what surrounds it.

**Component-owned:** Something true of the component wherever it is used: its own focus ring, its keyboard behaviour, whether its states differ without colour.

**Composition-owned:** Something that only exists once components are arranged: heading order, focus order across a page, reading order. No component can own it.


### Accessibility properties a component can guarantee by itself

Section: practice-plan. Stable action: write-component-owned.

Write your answer for “Accessibility properties a component can guarantee by itself”. Use the task instructions below to decide what to include.

**Answer:** Accessibility properties a component can guarantee by itself



<details>
<summary>Example</summary>

Example (made up): its own focus ring contrast, its documented keyboard behaviour, states distinguishable without colour.

</details>


### Properties that depend on how components are put together

Section: practice-plan. Stable action: write-composition-owned.

Heading order, focus order across a page, reading order, and whether the right alternative text was supplied.

**Answer:** Properties that depend on how components are put together

Heading order, focus order across a page, reading order, and whether the right alternative text was supplied.


### Write the guarantees

Section: practice-plan. Stable action: step-2-brief.

Four guarantees written as testable statements, each naming the conditions it holds under.

- Write each guarantee as a testable statement.
- Include the conditions it holds under, such as permitted surfaces.

**Start here:** Write the conditions before the statement. They are what stop the statement growing.

**Enough:** Each guarantee names what it covers and, by implication, what it does not.

**Guarantee:** Something you have tested and will keep testing. It is a promise with a check behind it rather than a description of intent.

**Conditions:** Where the guarantee holds: which surfaces, which variants, which states. Without them the promise quietly covers cases nobody checked.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Writing accessibility guarantees for a tool-library system, and writing one that covered everything.

**What I wrote:** “All components are accessible.” It was the shortest possible version and it felt like the strongest.

**What somebody did with it:** Built a page from four components, assumed the page was accessible because the parts were, and shipped it with three level-one headings and a focus order that jumped backwards.

**What my sentence had promised:** Everything, including things no component can own. Nothing in a card can decide the heading order of a page it does not know about.

**What I wrote instead:** Four narrow statements with conditions. Focus rings meet contrast on the five permitted surfaces. Interactive components match their documented keyboard behaviour. States are distinguishable in greyscale. Text tokens meet the threshold in their permitted pairs.

**What went beside them:** Four responsibilities, in the same size type: heading order, alternative text, reading order, and testing the assembled page.

**Wrong turn:** The wrong turn is writing the broad guarantee, because it is shorter and sounds more confident. It transfers responsibility for the things you cannot control onto a promise you cannot keep.

**Trade-off:** Four conditioned statements plus four responsibilities is a page rather than a sentence, and it reads as less impressive to somebody skimming for reassurance.

**Unknown:** Still unknown: whether the responsibilities list is complete. It covers what I have met so far, and a person building an unusual page will find more.


### Guarantee 1 · the statement and the conditions it holds under

Section: practice-plan. Stable action: write-guarantee-1.

Write your answer for “Guarantee 1 · the statement and the conditions it holds under”. Use the task instructions below to decide what to include.

**Answer:** Guarantee 1 · the statement and the conditions it holds under



<details>
<summary>Example</summary>

Example (made up): focus rings meet the contrast threshold on all permitted surfaces, which are the five listed in the foundations.

</details>


### Guarantee 2 · the statement and the conditions it holds under

Section: practice-plan. Stable action: write-guarantee-2.

Write your answer for “Guarantee 2 · the statement and the conditions it holds under”. Use the task instructions below to decide what to include.

**Answer:** Guarantee 2 · the statement and the conditions it holds under




### Guarantee 3 · the statement and the conditions it holds under

Section: practice-plan. Stable action: write-guarantee-3.

Write your answer for “Guarantee 3 · the statement and the conditions it holds under”. Use the task instructions below to decide what to include.

**Answer:** Guarantee 3 · the statement and the conditions it holds under




### Guarantee 4 · the statement and the conditions it holds under

Section: practice-plan. Stable action: write-guarantee-4.

Write your answer for “Guarantee 4 · the statement and the conditions it holds under”. Use the task instructions below to decide what to include.

**Answer:** Guarantee 4 · the statement and the conditions it holds under




### Attach a check to each

Section: practice-plan. Stable action: step-3-brief.

A re-runnable check attached to every guarantee, with all of them run today and the results recorded.

- Write the check that proves each guarantee.
- Run every check now and record the result.

**Start here:** Run the greyscale check on your states page first; it is the quickest of the four.

**Enough:** Every guarantee has a result beside it from today.

**Re-runnable check:** One somebody else could carry out in a few minutes when the component changes. A guarantee without one decays silently.

**Running it now:** Doing the check today rather than describing it. An unrun check is a plan.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six statements from a made up tool-library system. For each one, decide whether the system can guarantee it.

The focus ring meets the contrast threshold on every surface the foundations permit.

- the system can guarantee it
- the page author owns it
- nobody can guarantee it

<details>
<summary>After your attempt</summary>

the system can guarantee it — It is a property of the component and a fixed list of surfaces, measurable today and re-measurable when either changes.

the page author owns it — They cannot change it without leaving the system.

nobody can guarantee it — It is one of the more straightforwardly checkable things here.

Now sort your own candidate guarantees the same way, and move anything in the second group into the responsibilities list.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six statements from a made up tool-library system. For each one, decide whether the system can guarantee it.

The page has one page title and no skipped heading levels.

- the system can guarantee it
- the page author owns it
- nobody can guarantee it

<details>
<summary>After your attempt</summary>

the system can guarantee it — No component knows what else is on the page. A heading component can be correct and a page of them wrong.

the page author owns it — It exists only once components are arranged, which makes it composition rather than component.

nobody can guarantee it — It is entirely checkable, by the person who built the page.

Now sort your own candidate guarantees the same way, and move anything in the second group into the responsibilities list.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six statements from a made up tool-library system. For each one, decide whether the system can guarantee it.

Every interactive component behaves as its documented key table says.

- the system can guarantee it
- the page author owns it
- nobody can guarantee it

<details>
<summary>After your attempt</summary>

the system can guarantee it — The table is yours and the behaviour is in the component. Walking each table is the check, and it is re-runnable.

the page author owns it — They receive the behaviour; they do not build it.

nobody can guarantee it — It takes an afternoon to check and can be repeated.

Now sort your own candidate guarantees the same way, and move anything in the second group into the responsibilities list.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six statements from a made up tool-library system. For each one, decide whether the system can guarantee it.

Every image has appropriate alternative text.

- the system can guarantee it
- the page author owns it
- nobody can guarantee it

<details>
<summary>After your attempt</summary>

the system can guarantee it — The component can require alternative text. It cannot know whether the words supplied describe the picture.

the page author owns it — The words come with the content. This is the clearest example of a shared responsibility landing on the author.

nobody can guarantee it — The author can, for their own page.

Now sort your own candidate guarantees the same way, and move anything in the second group into the responsibilities list.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six statements from a made up tool-library system. For each one, decide whether the system can guarantee it.

The product conforms to WCAG 2.2 level AA.

- the system can guarantee it
- the page author owns it
- nobody can guarantee it

<details>
<summary>After your attempt</summary>

the system can guarantee it — Conformance is a property of a page, and a component set is not a page.

the page author owns it — They own testing their page, and even then conformance rests on a full tested build rather than on a claim.

nobody can guarantee it — Not as a standing promise about a product that keeps changing. This is the sentence the boundary in step 5 exists to keep out.

Now sort your own candidate guarantees the same way, and move anything in the second group into the responsibilities list.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six statements from a made up tool-library system. For each one, decide whether the system can guarantee it.

Every documented state is distinguishable with colour removed.

- the system can guarantee it
- the page author owns it
- nobody can guarantee it

<details>
<summary>After your attempt</summary>

the system can guarantee it — The states page makes it checkable in one look, and the check can be re-run whenever a state changes.

the page author owns it — They do not define the states.

nobody can guarantee it — It is one of the easiest checks in the whole system.

Now sort your own candidate guarantees the same way, and move anything in the second group into the responsibilities list.

</details>


### The check that proves each guarantee, written so it can be re-run

Section: practice-plan. Stable action: write-checks-written.

Re-run means somebody else could do it when the component changes, in a few minutes.

**Answer:** The check that proves each guarantee, written so it can be re-run

Re-run means somebody else could do it when the component changes, in a few minutes.


### The result of running every check now

Section: practice-plan. Stable action: write-checks-results.

Run them today. A guarantee whose check has never been run is a claim.

**Answer:** The result of running every check now

Run them today. A guarantee whose check has never been run is a claim.


### Write the responsibilities

Section: practice-plan. Stable action: step-4-brief.

A specific list of what remains the page author’s job.

- List what remains the page author's job.
- Be specific: structure, content, order, testing.

**Start here:** Write it as instructions to somebody building a page, not as a disclaimer.

**Enough:** Each item names a specific thing somebody must do rather than an area to be careful about.

**Responsibility list:** What the system does not do, written as clearly as what it does. It is what stops a guarantee being read as a guarantee about the page.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Writing the responsibilities list for a tool-library system, and writing it as small print.

**What I wrote:** A short paragraph at the foot of the guarantees page, beginning “Note that the system cannot guarantee page-level accessibility”, in the grey used for footnotes.

**How it read:** As a disclaimer. Something protecting me rather than something telling anybody what to do, and grey text under a list of guarantees is read by nobody.

**What happened:** A page shipped with three level-one headings. The person who built it could tell you the system was accessible and had never read the paragraph.

**What I changed:** Four numbered responsibilities beside the four guarantees, in the same type, written as instructions: set one page title, supply alternative text for your own images, check the reading order of your composition, test the assembled page.

**Why that worked better:** Each one is a thing to do rather than a thing the system does not do. Somebody reading the guarantees now reads their own tasks at the same moment.

**Wrong turn:** The wrong turn is writing responsibilities as a disclaimer, because after a page of promises the natural shape is a caveat. A caveat protects you; an instruction helps them.

**Trade-off:** Four instructions beside four guarantees makes the page look like more work for the reader, which is exactly what it is honestly reporting.

**Unknown:** Still unknown: whether people read the second column. It is at least in the same type, on the same page, which the footnote never was.


### What remains the page author’s job, specifically

Section: practice-plan. Stable action: write-user-responsibilities.

Write your answer for “What remains the page author’s job, specifically”. Use the task instructions below to decide what to include.

**Answer:** What remains the page author’s job, specifically



<details>
<summary>Example</summary>

Example (made up): the page heading order, the alternative text for images you supply, the reading order of your composition, and testing the assembled page.

</details>


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Somebody says the product is accessible because it uses your accessible design system. What is wrong?

- The system makes the defaults right. Structure, content, order and testing stay with whoever built the page, and most real failures live there.
- Nothing, if every component has been checked.
- The system would need to be tested with disabled participants first.

<details>
<summary>After your attempt</summary>

The system makes the defaults right. Structure, content, order and testing stay with whoever built the page, and most real failures live there. — No component can know the heading order of a page it does not know about. Guarantees and responsibilities have to be published together for exactly this reason.

Nothing, if every component has been checked. — Four correct components can be assembled into a page with three page titles and a focus order that jumps backwards.

The system would need to be tested with disabled participants first. — That is a separate and real gap. The error here is about the difference between components and pages.

Improve: Check your responsibilities list in step 4 names structure, content, order and testing specifically. Record the change in step 5.

Check again: The responsibilities list is as prominent as the guarantees.

Answers to revisit: user-responsibilities, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You wrote “all components are accessible” as your guarantee. What does it cost you?

- It promises things no component can own, so it transfers responsibility you cannot carry onto a sentence you cannot keep.
- Nothing, provided every component really has been checked.
- It is too vague to be useful, but harmless.

<details>
<summary>After your attempt</summary>

It promises things no component can own, so it transfers responsibility you cannot carry onto a sentence you cannot keep. — Four narrow statements with conditions are less impressive and actually true. The broad version is read as covering the page, which is where the failures are.

Nothing, provided every component really has been checked. — Checked against what? The sentence names no conditions, so it covers cases nobody tested.

It is too vague to be useful, but harmless. — It is not harmless. Somebody will build a page on the strength of it.

Improve: Add the conditions to each guarantee in step 2, naming surfaces, variants or states. Record the change in step 5.

Check again: No guarantee is written without its conditions.

Answers to revisit: guarantee-1, guarantee-2, guarantee-3, guarantee-4, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

One of your guarantees has no check attached. Does it matter?

- Yes. Without a re-runnable check it decays silently the first time the component changes.
- Not if you tested it once when you wrote it.
- Not if the guarantee is obviously true.

<details>
<summary>After your attempt</summary>

Yes. Without a re-runnable check it decays silently the first time the component changes. — A guarantee is a promise you keep re-making. The check is what makes it survive the next edit, and it also gives the next person a way to verify you.

Not if you tested it once when you wrote it. — Once is when it was true. Components change, and nothing will announce that the guarantee has stopped holding.

Not if the guarantee is obviously true. — Obviously true things are exactly what nobody rechecks after a change.

Improve: Write a check for every guarantee in step 3 and run all of them today. Record the change in step 5.

Check again: Every guarantee has a check with a result from today.

Answers to revisit: checks-written, checks-results, improvement-made

</details>


### State the boundary

Section: practice. Stable action: step-5-brief.

A written statement that the system claims no page-level conformance, and the repair the Check questions asked for.

- Write that the system claims no page-level conformance.
- Save the guarantees, checks and responsibilities together.

**Start here:** Write it in one sentence, positioned beside the guarantees rather than at the bottom of the page.

**Enough:** Somebody reading the guarantees would meet the boundary in the same breath.

**Page-level conformance:** A claim about a whole tested page. Components are not pages, so a system cannot carry it however good its parts are.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### The sentence saying the system claims no page-level conformance

Section: practice. Stable action: write-no-conformance.

Conformance is a property of a page. A component set cannot have it, whatever it guarantees.

**Answer:** The sentence saying the system claims no page-level conformance

Conformance is a property of a page. A component set cannot have it, whatever it guarantees.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson finds out which version of your system is actually true.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: What the system guarantees
What I am trying to do: Write the accessibility guarantees your system makes, prove each with a check, and state plainly what remains the responsibility of whoever uses it.

Key idea or terms:
Component-owned: Something true of the component wherever it is used: its own focus ring, its keyboard behaviour, whether its states differ without colour.
Composition-owned: Something that only exists once components are arranged: heading order, focus order across a page, reading order. No component can own it.
Guarantee: Something you have tested and will keep testing. It is a promise with a check behind it rather than a description of intent.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Writing accessibility guarantees for a tool-library system, and writing one that covered everything. “All components are accessible.” It was the shortest possible version and it felt like the strongest.

Activity: Give me one inconsistent component or rule from the supplied case. Ask me to choose the shared decision, name what must stay flexible and explain how another person would know which version is current.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Accessibility properties a component can guarantee by itself” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Accessibility properties a component can guarantee by itself”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “Accessibility properties a component can guarantee by itself” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Move anything that depends on arrangement into the responsibilities list.
- For each guarantee write how you would prove it, then do it and record what you found.

- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — The patterns for your interactive components, used as the standard your keyboard guarantee is checked against. Purpose: Gives an external reference for the behaviour you are guaranteeing. Free reading, no account. Verified 2026-09-06; pages carry no date. Guidance rather than a conformance standard; matching it is not conformance. Fallback: R14.
- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The thresholds and exceptions used for the contrast guarantees. Purpose: Supplies the measurable basis for the focus and text guarantees. Free reading, no account. Verified 2026-09-06. A ratio is a floor; the guarantee holds only for the permitted surfaces you list. Fallback: R29.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Guarantees are limited to component-level properties**

Adequate evidence: A list where every item is testable in the component in isolation.

0 — Guarantees include page-level properties.

1 — Mostly component-level with one composition claim.

2 — All items are component-level with their conditions stated.

3 — As adequate, and the conditions name the permitted surfaces or contexts.

Repair: Move anything that depends on arrangement into the responsibilities list. Recheck: The guarantees list.

**Each guarantee has a re-runnable check that was run**

Adequate evidence: A written check per guarantee with a recorded result.

0 — Guarantees asserted without checks.

1 — Checks described without results.

2 — Every check written and run with results recorded.

3 — As adequate, and the checks are written to be repeated when a component changes.

Repair: For each guarantee write how you would prove it, then do it and record what you found. Recheck: The check results.

**Responsibilities left to the user are specific**

Adequate evidence: A list naming structure, content, order and testing at minimum.

0 — No responsibilities listed.

1 — A general statement that users must also do work.

2 — Specific responsibilities named.

3 — As adequate, and each responsibility points to the module or check that covers it.

Repair: Write what a page author still has to do that no component can do for them. Recheck: The responsibilities list.

**No page-level conformance is claimed**

Adequate evidence: An explicit statement that the system does not claim conformance.

0 — Conformance implied.

1 — Ambiguous wording.

2 — Explicit statement present.

3 — As adequate, and it explains why conformance is a property of a page.

Repair: Add one sentence stating what the system does not claim and why. Recheck: The boundary statement.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The next lesson finds out which version of your system is actually true.

**Review criteria:**

- Guarantees are limited to component-level properties
- Each guarantee has a re-runnable check that was run
- Responsibilities left to the user are specific
- No page-level conformance is claimed

<details>
<summary>Reading, video and deeper explanation</summary>

- A component can guarantee its own properties: that its focus ring meets contrast on the surfaces it permits, that its keyboard behaviour matches the pattern, that its states are distinguishable without colour. Those are testable in isolation and worth stating, because they remove decisions from every future screen.
- What a component cannot guarantee is what happens when it is composed. Heading order is a property of the page; focus order depends on arrangement; contrast depends on the surface someone places it on, which is why the permitted-surfaces rule exists. Being explicit about this split is what stops a team believing the system made the product accessible.
- The responsibilities list is the other half of the guarantee. Whoever uses the system still owns the page structure, the content, the alternative text, the reading order and the testing. Writing that down is not a disclaimer; it is the instruction that makes the guarantee usable.
- Every guarantee needs a re-runnable check, or it decays. A contrast pair that passed when the token was chosen fails silently when the token changes, unless something re-checks it. At this scale the check can be manual and written down; what matters is that it exists and is repeated when the component changes.

[W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/).

</details>

## Lesson 11: One source of truth, and the copies

Stable ID: m13-l11-v1. Core.

Every system has a design representation and a code representation, and they diverge. Deciding which one is true is what prevents arguments nobody can settle.

Bring: Your documentation and built components.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A named authoritative representation with the reason
- A statement on every copy of what it reflects and when
- A drift audit of at least three components
- A change process that updates every representation

### Start here: in everyday words

A design system is a shared set of decisions and reusable parts that helps a team build consistent products. In this lesson, your first small result is: One representation named authoritative with the reason, and a statement of what the others are.

**Words you will use**

- **Authoritative representation:** The one that is true when two disagree. Naming it is what stops an argument nobody can settle.
- **Copy:** Any other representation. It is useful, it is not the system, and it has to say so on itself.
- **Drift:** Two representations quietly disagreeing. It is inevitable; the only question is how quickly it is found.

**Quick example.** Made-up example. Choosing the authority for a tool-library system, and choosing the one that was easiest to change. The design file. It is where I work, it is where the components look right, and changing something there takes a minute.

The reader demonstrates and guides the task before asking for “Which representation is authoritative, and why”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Decide which representation of your system is authoritative, write how the others stay in step, and find the drift that already exists.


### Name the authoritative representation explicitly

Section: learn. Stable action: learn-1.

Name the authoritative representation explicitly.


### The others are copies and must state that they are

Section: learn. Stable action: learn-2.

The others are copies and must state that they are.


### Drift is inevitable; the question is how quickly it is found

Section: learn. Stable action: learn-3.

Drift is inevitable; the question is how quickly it is found.


### A change process that updates only one representation guarantees drift

Section: learn. Stable action: learn-4.

A change process that updates only one representation guarantees drift.


### Audit for drift regularly and record what you find

Section: learn. Stable action: learn-5.

Audit for drift regularly and record what you find.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- The code was named authoritative, with the documentation generated from or checked against it and any design file marked a working copy carrying the version it reflected. An audit of three components found three drifts already: the card's padding differed by 4 pixels between the drawing and the build, the button had a disabled state in the drawing that had never been built, and the documentation described a truncation rule the component did not implement. Each was recorded, and the change process was rewritten to require the documentation update in the same change as the code.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Choose the authority

Section: practice-plan. Stable action: step-1-brief.

One representation named authoritative with the reason, and a statement of what the others are.

- Decide which representation is authoritative and write why.
- State what the others are and how they should be treated.

**Start here:** Ask which representation the product is actually built from, and start there.

**Enough:** If two representations disagreed tomorrow, your page says which one wins.

**Authoritative representation:** The one that is true when two disagree. Naming it is what stops an argument nobody can settle.

**Copy:** Any other representation. It is useful, it is not the system, and it has to say so on itself.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Choosing the authority for a tool-library system, and choosing the one that was easiest to change.

**What I chose:** The design file. It is where I work, it is where the components look right, and changing something there takes a minute.

**What happened over six weeks:** Three changes were made in the build and not in the file, because a screen needed them that afternoon. Two changes were made in the file and never built.

**What people were actually using:** The build. Every screen in the product came from it, and nobody except me could open the design file at all.

**What that made the authority:** A document describing a system that did not exist, which nobody consulted, being overtaken weekly by the one everybody used.

**What I changed:** Named the code authoritative, with the documentation checked against it, and marked the design file a working copy carrying the version it reflects.

**Wrong turn:** The wrong turn is naming the representation you work in, because authority feels like it should sit where the design happens. What people encounter is the built product, and a system whose truth lives somewhere most of the team cannot open is overtaken within weeks.

**Trade-off:** It means your own working file is officially not the system, which is uncomfortable, and a change now has to reach the code before it counts.

**Unknown:** Still unknown: whether this survives somebody else joining who works only in the design file. The rule would need restating rather than rewriting.


### Which representation is authoritative, and why

Section: practice-plan. Stable action: write-authoritative.

The one people actually encounter is usually the built code. Whatever you choose, say why.

**Answer:** Which representation is authoritative, and why

The one people actually encounter is usually the built code. Whatever you choose, say why.


### What the others are, and how they should be treated

Section: practice-plan. Stable action: write-copies-treated.

Write your answer for “What the others are, and how they should be treated”. Use the task instructions below to decide what to include.

**Answer:** What the others are, and how they should be treated




### Audit for drift

Section: practice-plan. Stable action: step-2-brief.

Three components compared across every representation, with each difference measured rather than eyeballed.

- Compare three components across representations.
- Measure rather than eyeballing where you can.
- Record every difference, however small.

**Start here:** Open the inspector on the built component and the drawing side by side, and compare one value at a time.

**Enough:** Every difference is written down, including the ones too small to matter.

**Drift:** Two representations quietly disagreeing. It is inevitable; the only question is how quickly it is found.

**Measuring:** Reading the computed value in the inspector and the number in the drawing, rather than looking at both and deciding they match.


### Component 1 · every difference between representations, however small

Section: practice-plan. Stable action: write-drift-1.

Write your answer for “Component 1 · every difference between representations, however small”. Use the task instructions below to decide what to include.

**Answer:** Component 1 · every difference between representations, however small



<details>
<summary>Example</summary>

Example (made up): the card padding is 16 in the drawing and 12 in the build, and the documentation says 16.

</details>


### Component 2 · every difference between representations, however small

Section: practice-plan. Stable action: write-drift-2.

Write your answer for “Component 2 · every difference between representations, however small”. Use the task instructions below to decide what to include.

**Answer:** Component 2 · every difference between representations, however small




### Component 3 · every difference between representations, however small

Section: practice-plan. Stable action: write-drift-3.

Write your answer for “Component 3 · every difference between representations, however small”. Use the task instructions below to decide what to include.

**Answer:** Component 3 · every difference between representations, however small




### Reconcile

Section: practice-plan. Stable action: step-3-brief.

Each drift resolved by deciding which version is correct, with anything surprising recorded.

- For each drift decide which version is correct.
- Update the others and record what changed.

**Start here:** For each difference, find out when and why each version changed before deciding which is correct.

**Enough:** At least one decision went against the authoritative representation, or you can say why none did.

**Which one is correct:** Not automatically the authoritative one. The authority decides which is true today; it does not decide which is right.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six differences found auditing a made up tool-library system. For each one, decide what it tells you.

Card padding is 16 in the drawing and 12 in the build. The build was changed to fit a narrow screen and the drawing was never updated.

- the build is right
- the drawing is right
- the documentation is describing something that never existed

<details>
<summary>After your attempt</summary>

the build is right — It was changed for a reason that still applies, and it is what every screen currently shows. The drawing is behind.

the drawing is right — The drawing records an intention that a real constraint overtook.

the documentation is describing something that never existed — Both values existed; one is simply older.

Now decide each of your own drifts, and note the ones where the authoritative version turned out to be wrong.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six differences found auditing a made up tool-library system. For each one, decide what it tells you.

The drawing has a disabled state for the button. Nothing in the build implements it, and no screen uses it.

- the build is right
- the drawing is right
- the documentation is describing something that never existed

<details>
<summary>After your attempt</summary>

the build is right — The build is right about today and says nothing about whether the state should exist.

the drawing is right — It is right that a disabled state is probably needed. It is not evidence that one exists.

the documentation is describing something that never existed — A state that was drawn, documented and never built is the commonest drift of all, and the honest fix is to build it or to remove it from the documentation.

Now decide each of your own drifts, and note the ones where the authoritative version turned out to be wrong.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six differences found auditing a made up tool-library system. For each one, decide what it tells you.

The documentation says the title truncates to two lines. The build truncates to one.

- the build is right
- the drawing is right
- the documentation is describing something that never existed

<details>
<summary>After your attempt</summary>

the build is right — Truncating to one line loses the second half of most titles, and the two-line rule was decided against real content.

the drawing is right — The rule was reasoned from real titles. The build is a defect, and this is a case where the authority is true and wrong.

the documentation is describing something that never existed — It was decided and specified; it simply was not built.

Now decide each of your own drifts, and note the ones where the authoritative version turned out to be wrong.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six differences found auditing a made up tool-library system. For each one, decide what it tells you.

The focus ring is one colour in the drawing and another in the build. The build’s version passes contrast on the tinted panel and the drawing’s does not.

- the build is right
- the drawing is right
- the documentation is describing something that never existed

<details>
<summary>After your attempt</summary>

the build is right — It was changed for a measured reason during the accessibility work. The drawing predates the measurement.

the drawing is right — It looks better and fails a check that matters more.

the documentation is describing something that never existed — Both rings exist; one has been superseded.

Now decide each of your own drifts, and note the ones where the authoritative version turned out to be wrong.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six differences found auditing a made up tool-library system. For each one, decide what it tells you.

The drawing shows a compact variant with an image. The build has no image slot in compact, and the specification says compact has none.

- the build is right
- the drawing is right
- the documentation is describing something that never existed

<details>
<summary>After your attempt</summary>

the build is right — The build and the specification agree, which makes the drawing the odd one out, probably an experiment nobody deleted.

the drawing is right — One representation against two, with no recorded decision behind it.

the documentation is describing something that never existed — The documentation is correct here; the drawing is the stray.

Now decide each of your own drifts, and note the ones where the authoritative version turned out to be wrong.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six differences found auditing a made up tool-library system. For each one, decide what it tells you.

The documentation describes a hover treatment for the unavailable card. The specification marked that cell as impossible.

- the build is right
- the drawing is right
- the documentation is describing something that never existed

<details>
<summary>After your attempt</summary>

the build is right — The build follows the specification, so it is right and it is not the interesting finding.

the drawing is right — No drawing is involved.

the documentation is describing something that never existed — Somebody wrote a section for completeness that contradicts a decision already made. Written documentation drifts towards being tidy rather than being true.

Now decide each of your own drifts, and note the ones where the authoritative version turned out to be wrong.

</details>


### For each drift: which version is correct, and what you changed

Section: practice-plan. Stable action: write-which-correct.

Write your answer for “For each drift: which version is correct, and what you changed”. Use the task instructions below to decide what to include.

**Answer:** For each drift: which version is correct, and what you changed




### Anything that surprised you about which one was right

Section: practice-plan. Stable action: write-surprises.

The build is right more often than people expect, because it is the version that had to work.

**Answer:** Anything that surprised you about which one was right

The build is right more often than people expect, because it is the version that had to work.


### Fix the process

Section: practice-plan. Stable action: step-4-brief.

The steps a change must take through every representation, added to the governance page.

- Write the steps a change must take through every representation.
- Add it to the governance page.

**Start here:** Write the steps as a checklist a change has to pass, not as a principle.

**Enough:** The process names every representation you have, including the working copy.

**Updating one representation:** The guaranteed way to produce drift. A change process that does not name every representation produces it by design.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Fixing the change process for a tool-library system, and fixing it with an intention.

**What I wrote:** “Keep the documentation and the design file up to date when components change.” True, agreed by everybody, and impossible to fail.

**What happened over the next month:** Three changes reached the code. One reached the documentation. The design file was updated once, for a change that had not been made anywhere else.

**Why the sentence had not helped:** It describes a state rather than a step. Nothing in it ever tells you that you are not finished, because nothing in it is a thing to do.

**What I replaced it with:** Four steps a change must pass: change the code, update the component documentation, update the changelog, mark the design file with the version it now reflects. A change is not done until all four are ticked.

**What that changed:** The next change took eight minutes longer and left nothing behind. The one after that revealed the design file had been stale for six weeks, which the checklist made visible rather than the drift audit.

**Wrong turn:** The wrong turn is writing the process as a principle, because principles are what change processes usually sound like. A principle cannot be unfinished, so nothing ever reminds you that you have only done part of it.

**Trade-off:** Four steps make every change slower, including the one-line urgent ones, and there will be afternoons when you skip them knowingly.

**Unknown:** Still unknown: whether the checklist survives pressure. It is a list I wrote for myself, and nothing enforces it except noticing.


### The steps a change must take through every representation

Section: practice-plan. Stable action: write-change-steps.

Write your answer for “The steps a change must take through every representation”. Use the task instructions below to decide what to include.

**Answer:** The steps a change must take through every representation




### How this reached the governance page

Section: practice-plan. Stable action: write-added-governance.

Write your answer for “How this reached the governance page”. Use the task instructions below to decide what to include.

**Answer:** How this reached the governance page




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Is the design file the design system?

- It is one representation. What people encounter is the built product, and a system whose authority lives in a file most of the team cannot open is overtaken within weeks.
- Yes, since that is where the design decisions are made.
- Yes for designers, and the code is the system for engineers.

<details>
<summary>After your attempt</summary>

It is one representation. What people encounter is the built product, and a system whose authority lives in a file most of the team cannot open is overtaken within weeks. — The file is genuinely useful. It stops being the system the first time a change is made in the build that afternoon and never reaches the file.

Yes, since that is where the design decisions are made. — Decisions are made there and they are not what anybody uses. Six weeks of small build changes and the file describes something that does not exist.

Yes for designers, and the code is the system for engineers. — Two authorities is the same as none, because nothing settles a disagreement.

Improve: Name one authoritative representation in step 1 with the reason, and record the change in step 5.

Check again: If two representations disagreed tomorrow, your page says which wins.

Answers to revisit: authoritative, copies-treated, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The build and the documentation disagree, and you have named the build authoritative. Is the build automatically right?

- No. The authority decides which is true today; whether it is right is a separate question.
- Yes, that is what authoritative means.
- Yes, unless the documentation has a reason recorded.

<details>
<summary>After your attempt</summary>

No. The authority decides which is true today; whether it is right is a separate question. — A truncation rule reasoned from real titles and built to one line is a defect in the build. The authority tells you where the fix goes rather than who was correct.

Yes, that is what authoritative means. — It means the build is what people are getting. Two of the drifts you find will be things the build got wrong.

Yes, unless the documentation has a reason recorded. — A recorded reason helps you decide, and the principle holds whether or not one was written down.

Improve: For each drift in step 3, say which version is correct as well as which is authoritative. Record the change in step 5.

Check again: Correct and authoritative are answered separately for each drift.

Answers to revisit: which-correct, surprises, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You fixed three drifts. Will the audit have to be repeated?

- Yes, because drift is inevitable. The useful change is a process that updates every representation in the same change.
- No, now that the representations agree.
- Only if somebody else joins the work.

<details>
<summary>After your attempt</summary>

Yes, because drift is inevitable. The useful change is a process that updates every representation in the same change. — Fixing today’s three is maintenance. The process is what decides whether the next three appear in a fortnight or in a year.

No, now that the representations agree. — They agree this afternoon. The next urgent change made in one place starts it again.

Only if somebody else joins the work. — One person produces drift perfectly well, by making a change in the build at four o’clock and meaning to update the file tomorrow.

Improve: Write the change process into step 4 and add it to the governance page. Record the change in step 5.

Check again: A change now has to pass through every representation before it counts as done.

Answers to revisit: change-steps, added-governance, improvement-made

</details>


### Label the copies

Section: practice. Stable action: step-5-brief.

Every non-authoritative representation labelled with what it reflects and when.

- Mark each non-authoritative representation with its version and date.
- Save the audit and the updated process.

**Start here:** Put the label on the first page of the copy, not in a note at the end.

**Enough:** Somebody opening a copy learns immediately that it is one.

**Labelling a copy:** Writing on it what version it reflects and when it was updated. It turns a misleading document into a dated one.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### What each non-authoritative representation now says about itself

Section: practice. Stable action: write-copies-labelled.

Write your answer for “What each non-authoritative representation now says about itself”. Use the task instructions below to decide what to include.

**Answer:** What each non-authoritative representation now says about itself



<details>
<summary>Example</summary>

Example (made up): working copy reflecting version 1.2.0, updated 14 March. Not authoritative.

</details>


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The last lesson of the module reviews the system and removes something from it.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: One source of truth, and the copies
What I am trying to do: Decide which representation of your system is authoritative, write how the others stay in step, and find the drift that already exists.

Key idea or terms:
Authoritative representation: The one that is true when two disagree. Naming it is what stops an argument nobody can settle.
Copy: Any other representation. It is useful, it is not the system, and it has to say so on itself.
Drift: Two representations quietly disagreeing. It is inevitable; the only question is how quickly it is found.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Choosing the authority for a tool-library system, and choosing the one that was easiest to change. The design file. It is where I work, it is where the components look right, and changing something there takes a minute.

Activity: Give me one inconsistent component or rule from the supplied case. Ask me to choose the shared decision, name what must stay flexible and explain how another person would know which version is current.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Which representation is authoritative, and why” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Which representation is authoritative, and why”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “Which representation is authoritative, and why” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Choose the representation people actually meet and write one sentence naming it as authoritative.
- Add a line at the top of each copy stating the version it reflects and when it was synchronised.

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — How a published system presents code and design together for one component. Purpose: Shows a working answer to the single-source question at a larger scale. Free reading, no account. Verified 2026-09-06. Its scale and staffing differ from yours; scale the approach down deliberately. Fallback: R06.
- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The CSS custom properties sections, read as the mechanism that keeps token values in one place. Purpose: Connects the single-source principle to how values are actually shared in code. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**An authoritative representation is named with a reason**

Adequate evidence: A written statement naming the authority and why.

0 — No authority named.

1 — Named without reasoning.

2 — Named with a reason connected to what people actually encounter.

3 — As adequate, and the statement says how a disagreement is resolved in practice.

Repair: Choose the representation people actually meet and write one sentence naming it as authoritative. Recheck: The authority statement.

**Copies state what they reflect and when**

Adequate evidence: Each non-authoritative representation labelled with version and date.

0 — Copies unlabelled.

1 — Some labelled.

2 — All labelled with version and date.

3 — As adequate, and the label says what to do if the copy disagrees with the authority.

Repair: Add a line at the top of each copy stating the version it reflects and when it was synchronised. Recheck: The labelled copies.

**A drift audit covers at least three components**

Adequate evidence: Three components compared with differences recorded, measured where possible.

0 — No audit.

1 — Compared by eye without recording specifics.

2 — Three compared with differences recorded.

3 — As adequate, and at least one drift was found that had already reached a screen.

Repair: Pick three components and compare their values across representations, measuring rather than judging. Recheck: The audit record.

**The change process updates every representation**

Adequate evidence: A written process requiring all representations to be updated together.

0 — No process.

1 — A process covering one representation.

2 — All representations covered in one change.

3 — As adequate, and the process is short enough that it will actually be followed.

Repair: Write the change steps and add them to the governance page. Recheck: The updated process.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. The last lesson of the module reviews the system and removes something from it.

**Review criteria:**

- An authoritative representation is named with a reason
- Copies state what they reflect and when
- A drift audit covers at least three components
- The change process updates every representation

<details>
<summary>Reading, video and deeper explanation</summary>

- Design and code representations of the same component are never quite identical, and when a screen disagrees with a design file, someone has to decide which is right. Naming the authority in advance settles it: usually the code, because that is what people meet, with the design file as a working copy. Whichever you choose, choosing is what matters.
- Copies should announce themselves. A design file that says at the top which version of the system it reflects, and when it was last synchronised, prevents a designer building against a component that changed a month ago — which is the commonest way drift becomes screens.
- Drift is not preventable at any scale you will work at; the goal is finding it quickly. A short periodic audit — compare three components in both representations, record the differences — is enough at this size, and it is far cheaper than the confusion it prevents.
- The change process is where drift is created. If a change updates the code and not the documentation, or the design file and not the code, the divergence starts immediately. Writing the steps a change must take through every representation is the practical fix, and it belongs with your governance page.

[GOV.UK Design System: components](https://design-system.service.gov.uk/components/).

</details>

## Lesson 12: Review the system and remove something

Stable ID: m13-l12-v1. Core.

Systems accumulate. Reviewing what is unused and removing it is the maintenance work that keeps a system usable.

Bring: Your adoption data and decision log.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A usage review naming unused components
- At least one thing deprecated or removed, through the process
- Workarounds found in real screens, each with a decision
- A six-month plan with an honest maintenance estimate

### Start here: in everyday words

A design system is a shared set of decisions and reusable parts that helps a team build consistent products. In this lesson, your first small result is: Every component listed with where it is actually used, and anything used nowhere marked.

**Words you will use**

- **Review against use:** Judging the system by what the product actually contains rather than by whether the set feels complete.
- **Unused component:** Cost with no benefit. It is maintained, documented, versioned and looked at by everybody learning the system, and it does nothing.
- **Workaround:** Something built on a screen rather than taken from the system. Each one is a gap, and the person who built it already knows what the gap is.

**Quick example.** Made-up example. Reviewing a tool-library system, and reviewing it for completeness. Went through the system asking what was missing. A modal, a tabs component, a pagination control — three obvious holes in any component set.

The reader demonstrates and guides the task before asking for “Every component and where it is actually used”.

### What this lesson will help you do

Section: learn. Stable action: welcome.

Review the system against how it has actually been used, remove or deprecate at least one thing, and write the six-month plan with its maintenance cost.


### Review against use, not against completeness

Section: learn. Stable action: learn-1.

Review against use, not against completeness.


### Unused components are cost without benefit; deprecate them

Section: learn. Stable action: learn-2.

Unused components are cost without benefit; deprecate them.


### Look for the things people worked around; each is a gap

Section: learn. Stable action: learn-3.

Look for the things people worked around; each is a gap.


### Removal is a major change and needs the same process as an addition

Section: learn. Stable action: learn-4.

Removal is a major change and needs the same process as an addition.


### Plan the next six months with an honest maintenance estimate

Section: learn. Stable action: learn-5.

Plan the next six months with an honest maintenance estimate.


### See the idea in a supplied example

Section: learn. Stable action: worked-example.

Read the example and notice the decision being made. It is practice material, not research you conducted or evidence about your design.

- The review found three unused components, two of which had been built speculatively in the first week; both were deprecated with a note, and the third was kept because a planned screen needed it, with the reason recorded. Two workarounds were found in the learner's own screens: a status treatment the system flattened and a compact list row that did not exist. The first became a governance proposal; the second was accepted as a minor addition. The plan estimated three hours a month, listed what would be skipped if that was not available — the drift audit first, documentation last — and named the review date.


### Choose where you will do the work

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Review against use

Section: practice-plan. Stable action: step-1-brief.

Every component listed with where it is actually used, and anything used nowhere marked.

- List every component and where it is actually used.
- Mark anything used nowhere.

**Start here:** Search your screens for each component name rather than working from memory.

**Enough:** Every component has a list of places or the word nowhere beside it.

**Review against use:** Judging the system by what the product actually contains rather than by whether the set feels complete.

**Unused component:** Cost with no benefit. It is maintained, documented, versioned and looked at by everybody learning the system, and it does nothing.


### Every component and where it is actually used

Section: practice-plan. Stable action: write-usage-list.

Search your screens. Where you believe it is used is not the same as where it is.

**Answer:** Every component and where it is actually used

Search your screens. Where you believe it is used is not the same as where it is.


### Anything used nowhere

Section: practice-plan. Stable action: write-used-nowhere.

Write your answer for “Anything used nowhere”. Use the task instructions below to decide what to include.

**Answer:** Anything used nowhere




### Find the workarounds

Section: practice-plan. Stable action: step-2-brief.

Every one-off built instead of using the system, with what did not fit named for each.

- Look through your screens for one-offs built instead of using the system.
- For each, name what did not fit.

**Start here:** Search your screens for styling that does not come from the system, rather than listing what the system lacks.

**Enough:** Every workaround names what did not fit, in the words of the person who built it.

**Workaround:** Something built on a screen rather than taken from the system. Each one is a gap, and the person who built it already knows what the gap is.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Reviewing a tool-library system, and reviewing it for completeness.

**How I started:** Went through the system asking what was missing. A modal, a tabs component, a pagination control — three obvious holes in any component set.

**What that list was based on:** Other people’s systems. None of the three appeared anywhere in my product, and building them would have added three components nobody would use.

**What I did instead:** Went through the screens asking what had been built outside the system. That is a search of eleven real pages rather than a memory of what systems usually contain.

**What it found:** Two workarounds. A status treatment that carried a distinction the system flattens, and a compact list row that did not exist. Both were mine, built in a hurry, and both were real gaps.

**What happened to them:** The status went through governance as a proposal. The list row was accepted as a minor addition. Neither would have appeared on a list of what a component set ought to have.

**Wrong turn:** The wrong turn is reviewing for completeness, because a component set has an obvious shape and it is easy to notice what is missing from it. It produces components for a product you do not have.

**Trade-off:** Reviewing against use means the system stays lopsided: no modal, no tabs, and two things nobody else’s system has. That is the correct shape for this product and it looks unfinished beside a published one.

**Unknown:** Still unknown: whether a modal will be needed next quarter. If it is, it arrives through governance with two screens behind it rather than by anticipation.


### Every one-off built on a screen instead of using the system

Section: practice-plan. Stable action: write-workarounds-found.

Your own screens count. A workaround you built yourself is the clearest evidence of a gap.

**Answer:** Every one-off built on a screen instead of using the system

Your own screens count. A workaround you built yourself is the clearest evidence of a gap.


### For each: what did not fit

Section: practice-plan. Stable action: write-what-did-not-fit.

Write your answer for “For each: what did not fit”. Use the task instructions below to decide what to include.

**Answer:** For each: what did not fit




### Remove and add through the process

Section: practice-plan. Stable action: step-3-brief.

At least one thing deprecated through the process, the justified additions proposed, and both changes versioned.

- Deprecate at least one unused component with a note and a period.
- Propose the additions the workarounds justify.
- Version both changes correctly.

**Start here:** Take the component used nowhere and write the deprecation note before anything else.

**Enough:** Nothing was removed or added by editing directly.

**Deprecating:** Marking something as going away while keeping it working. Removal is a major change, and it goes through the same process as an addition.

**Through the process:** Using your own governance route rather than editing directly. A process the owner bypasses is not one.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six components from a made up tool-library system, reviewed against real use. For each one, decide what should happen.

The card. Used on six screens.

- keep it
- deprecate it
- keep it and record why

<details>
<summary>After your attempt</summary>

keep it — Six uses is exactly what a component is for. Nothing to decide.

deprecate it — It is the most used thing in the system.

keep it and record why — No reasoning is needed for something this widely used.

Now decide each of your own components and put the deprecation through your own governance route.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six components from a made up tool-library system, reviewed against real use. For each one, decide what should happen.

A statistics tile, built in the first week, used nowhere.

- keep it
- deprecate it
- keep it and record why

<details>
<summary>After your attempt</summary>

keep it — It costs maintenance, documentation and the attention of everybody learning the system, and returns nothing.

deprecate it — Speculative components from the first week are the classic case. Deprecate with a note and a period, through the process.

keep it and record why — There is no why. Nothing is planned that needs it.

Now decide each of your own components and put the deprecation through your own governance route.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six components from a made up tool-library system, reviewed against real use. For each one, decide what should happen.

A notification banner, used nowhere yet, and the booking flow being designed this month needs it.

- keep it
- deprecate it
- keep it and record why

<details>
<summary>After your attempt</summary>

keep it — Keeping it silently means the next reviewer deprecates it, having no idea why it is there.

deprecate it — It has a use arriving within weeks, and deprecating it now means building it again in a month.

keep it and record why — Keep it with the reason and the expected date attached. That note is what survives until the flow exists.

Now decide each of your own components and put the deprecation through your own governance route.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six components from a made up tool-library system, reviewed against real use. For each one, decide what should happen.

An older button variant, used on two screens, both of which are being retired next month.

- keep it
- deprecate it
- keep it and record why

<details>
<summary>After your attempt</summary>

keep it — Its only uses are going away, so keeping it means carrying it indefinitely for nothing.

deprecate it — Deprecate now with a period that outlasts the two screens. The window and the retirement can run together.

keep it and record why — There is no reason to keep it once the screens go.

Now decide each of your own components and put the deprecation through your own governance route.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six components from a made up tool-library system, reviewed against real use. For each one, decide what should happen.

The filter chip, added last month through governance, used on two screens.

- keep it
- deprecate it
- keep it and record why

<details>
<summary>After your attempt</summary>

keep it — Two uses, added deliberately, doing its job.

deprecate it — Nothing about it has failed.

keep it and record why — The governance log already records why it exists.

Now decide each of your own components and put the deprecation through your own governance route.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six components from a made up tool-library system, reviewed against real use. For each one, decide what should happen.

A tabs component, built because most design systems have one, used nowhere and nothing planned.

- keep it
- deprecate it
- keep it and record why

<details>
<summary>After your attempt</summary>

keep it — It is in the system because other systems have one, which is a reason about other systems.

deprecate it — No use, nothing planned. It is the completeness instinct made permanent, and removing it is what maturity looks like.

keep it and record why — There is nothing to record beyond a habit.

Now decide each of your own components and put the deprecation through your own governance route.

</details>


### What you deprecated, with the note and the period

Section: practice-plan. Stable action: write-deprecated.

Write your answer for “What you deprecated, with the note and the period”. Use the task instructions below to decide what to include.

**Answer:** What you deprecated, with the note and the period




### The additions the workarounds justify, put through governance

Section: practice-plan. Stable action: write-proposed.

Write your answer for “The additions the workarounds justify, put through governance”. Use the task instructions below to decide what to include.

**Answer:** The additions the workarounds justify, put through governance




### How both changes were versioned

Section: practice-plan. Stable action: write-versioned.

Write your answer for “How both changes were versioned”. Use the task instructions below to decide what to include.

**Answer:** How both changes were versioned




### Write the plan

Section: practice-plan. Stable action: step-4-brief.

A monthly maintenance estimate, an order for what gets skipped first, and the next review date.

- Estimate monthly maintenance in hours.
- List what gets skipped first if that time is unavailable.
- Set the next review date.

**Start here:** Estimate from what this module actually took rather than from what you hope it will take.

**Enough:** The skip order is written down, so a busy month does not decide it.

**What gets skipped first:** The order in which maintenance is dropped when the time is not there. Deciding it now prevents the wrong thing being dropped in a busy month.

**Review date:** A date rather than an intention. Systems accumulate quietly, and the review is what catches it.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Planning six months of maintenance for a tool-library system, and planning for a good month.

**What I wrote:** Three hours a month: a drift audit, documentation updates, and a look at anything proposed. It was a reasonable estimate of the work.

**What the third month was like:** A deadline. The three hours did not happen at all, and what got dropped was decided at half past five on a Thursday.

**What got dropped:** The drift audit, because it feels like checking rather than doing. The documentation got updated, because a change had just been made and it was in front of me.

**Why that was the wrong order:** Documentation for one change catches up next month anyway. The drift audit is the only thing that finds problems nobody has noticed, and skipping it is invisible for months.

**What I added to the plan:** A skip order, written in advance: the drift audit is protected, documentation waits, the proposal review waits. Deciding it calmly meant a busy Thursday did not decide it.

**Wrong turn:** The wrong turn is planning the hours without planning what happens when there are none, because the estimate is the part that feels like planning. The busy month decides the order instead, and it always drops the invisible thing.

**Trade-off:** Protecting the audit means documentation is sometimes a month behind, and somebody will read a page that describes last month’s component.

**Unknown:** Still unknown: whether three hours is right. It is an estimate from one month of real work, and the next review is where it gets corrected.


### Monthly maintenance, in hours

Section: practice-plan. Stable action: write-monthly-hours.

Write your answer for “Monthly maintenance, in hours”. Use the task instructions below to decide what to include.

**Answer:** Monthly maintenance, in hours




### What gets skipped first if that time is not available

Section: practice-plan. Stable action: write-skipped-first.

Deciding the order now is what stops the wrong thing being dropped in a busy month.

**Answer:** What gets skipped first if that time is not available

Deciding the order now is what stops the wrong thing being dropped in a busy month.


### The next review date

Section: practice-plan. Stable action: write-review-date.

Write your answer for “The next review date”. Use the task instructions below to decide what to include.

**Answer:** The next review date




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Is a bigger system a more mature system?

- No. A system covering the real cases in twelve components is more mature than one with sixty nobody can navigate, and maturity shows in what has been removed.
- Generally yes, since more coverage helps more cases.
- Yes, if the components are well documented.

<details>
<summary>After your attempt</summary>

No. A system covering the real cases in twelve components is more mature than one with sixty nobody can navigate, and maturity shows in what has been removed. — Every component is maintained, documented, versioned and read by everybody learning the system. An unused one takes all of that and returns nothing.

Generally yes, since more coverage helps more cases. — Coverage of cases you have helps. Coverage of cases other products have is cost.

Yes, if the components are well documented. — Documenting something nobody uses is more of the same cost, done more carefully.

Improve: Deprecate at least one unused component in step 3, through your governance route. Record the change in step 5.

Check again: The system is smaller than it was this morning.

Answers to revisit: deprecated, proposed, versioned, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You reviewed the system and listed what it was missing compared with other design systems. What is wrong with that?

- It produces components for a product you do not have. The useful review searches your own screens for what was built outside the system.
- Nothing, since those components will be needed eventually.
- It is a reasonable starting point to prioritise from.

<details>
<summary>After your attempt</summary>

It produces components for a product you do not have. The useful review searches your own screens for what was built outside the system. — A modal, tabs and pagination are what component sets usually contain. Your two real gaps were a flattened status distinction and a compact list row, and neither would appear on that list.

Nothing, since those components will be needed eventually. — Eventually is what governance is for. Anticipation is how a system acquires components nobody uses.

It is a reasonable starting point to prioritise from. — It prioritises a list of things nobody has asked for above two things somebody has already worked around.

Improve: Search your screens for workarounds in step 2 and let those decide the additions. Record the change in step 5.

Check again: Every proposed addition comes from something built on a real screen.

Answers to revisit: workarounds-found, what-did-not-fit, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You are deprecating an unused component. Does it need to go through governance?

- Yes. Removal is a major change, and a process its owner bypasses is not a process.
- No, since nobody is using it.
- No, governance is for additions.

<details>
<summary>After your attempt</summary>

Yes. Removal is a major change, and a process its owner bypasses is not a process. — It is also how you find out that something you believe is unused is used on a page you had forgotten. The route and the version both matter.

No, since nobody is using it. — That is your view of who is using it, which is the thing a route exists to check.

No, governance is for additions. — Removals break things, which is more than most additions do.

Improve: Put the deprecation through your governance route in step 3 and record it in the log. Note the change in step 5.

Check again: Both the removal and the additions went through the process you wrote.

Answers to revisit: deprecated, proposed, versioned, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

The decision log and changelog updated, and the repair the Check questions asked for.

- Update the decision log and the changelog.
- Save the review with the plan.

**Start here:** Write the deprecation into the changelog with its version before you close anything.

**Enough:** Somebody picking this up in six months could see what was decided and why.

**Closing the loop:** Every decision from this review appearing in the log, and every change in the changelog, so the next review starts from a record rather than from memory.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### What you added to the decision log and the changelog

Section: practice. Stable action: write-log-updated.

Write your answer for “What you added to the decision log and the changelog”. Use the task instructions below to decide what to include.

**Answer:** What you added to the decision log and the changelog




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. This closes Module 13. Module 14 moves from building the system to working with the people who use it.


<details>
<summary>Optional: learn with an AI app</summary>

Optional learning activity: use a text-based AI chat to hear the idea another way and practise it through questions.

- Open any text-based AI chat you already use. A free option is enough; do not start a trial or upgrade for this activity.
- Start a new chat, copy the whole prompt below and paste it into the message box. Then send it.
- Answer in your own words. Do not paste names, account details, private participant notes or confidential work. Stop after the short activity and return to the named course answer.

```text
I am a complete beginner learning product design. Teach me through a short activity, not a long lecture.

Lesson: Review the system and remove something
What I am trying to do: Review the system against how it has actually been used, remove or deprecate at least one thing, and write the six-month plan with its maintenance cost.

Key idea or terms:
Review against use: Judging the system by what the product actually contains rather than by whether the set feels complete.
Unused component: Cost with no benefit. It is maintained, documented, versioned and looked at by everybody learning the system, and it does nothing.
Workaround: Something built on a screen rather than taken from the system. Each one is a gap, and the person who built it already knows what the gap is.

Supplied practice material (fictional or labelled practice, not my research):
Made-up example. Reviewing a tool-library system, and reviewing it for completeness. Went through the system asking what was missing. A modal, a tabs component, a pagination control — three obvious holes in any component set.

Activity: Give me one inconsistent component or rule from the supplied case. Ask me to choose the shared decision, name what must stay flexible and explain how another person would know which version is current.

Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.
When the activity is finished, tell me to return to the course answer called “Every component and where it is actually used” and write my own decision. Do not write that answer for me.
```

**Come back to the course:** Return to “Every component and where it is actually used”. Write or revise the answer in your own words, then name one reason for your choice. The AI conversation is practice; your course answer is the work you keep.

**Continue without AI:** Stay in this course and use the first “Try the distinction” question. Choose an answer, read the explanation, then return to “Every component and where it is actually used” and write one sentence in your own words.

</details>
<details>
<summary>Optional hints and reference material</summary>

- Go through your screens and record where each component actually appears.
- Take one unused component and deprecate it properly, including the note.

- R17: [GOV.UK Design System: components](https://design-system.service.gov.uk/components/) — Two component pages, read for how usage guidance is stated and would have to be revised. Purpose: Shows the documentation a removal or replacement would have to update. Free reading, no account. Verified 2026-09-06. Larger scale than yours; take the practice and reduce the ceremony. Fallback: R06.
- R67: [Semantic Versioning 2.0.0](https://semver.org/) — The rules for breaking changes and the minimal deprecation guidance. Purpose: Classifies removal correctly and sets the deprecation period. Free reading, no account, CC BY 3.0. Verified 2026-09-06. It recommends at least one minor release before removal and says nothing about how to announce it. Fallback: R18.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Usage is reviewed and unused components identified**

Adequate evidence: A list of components with where each is used, and the unused ones marked.

0 — No usage review.

1 — Usage described from memory.

2 — Each component checked against real screens.

3 — As adequate, and speculative components built without a use are identified as such.

Repair: Go through your screens and record where each component actually appears. Recheck: The usage list.

**At least one removal or deprecation went through the process**

Adequate evidence: A deprecation with a note, a period and a version, recorded in the log.

0 — Nothing removed.

1 — Something removed quietly.

2 — Removal through the process with note, period and version.

3 — As adequate, and a component was kept with a recorded reason rather than removed reflexively.

Repair: Take one unused component and deprecate it properly, including the note. Recheck: The deprecation record.

**Workarounds are found in real screens and decided**

Adequate evidence: One-offs identified with what did not fit and a decision each.

0 — Not examined.

1 — Workarounds noticed without decisions.

2 — Each with a cause and a decision.

3 — As adequate, and at least one has entered the governance process as a proposal.

Repair: Look for the components you built inside screens rather than in the system, and ask why. Recheck: The workaround list.

**The plan has an honest estimate and a skip order**

Adequate evidence: Monthly hours, what is dropped first when time is short, and a review date.

0 — No plan.

1 — A plan without an estimate.

2 — Estimate, skip order and review date all present.

3 — As adequate, and the estimate matches the time you actually spent this module.

Repair: Estimate from what this module actually cost you, then decide what is dropped first. Recheck: The plan.

</details>
The progress bar counts required actions with saved work. It is not a score or proof of mastery. Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. The timer records time while you actively use this course. It pauses outside the course and after five quiet minutes; add external work time manually. Time never completes practice.

**Keep for later:** Open Your work and choose Ready for review. This closes Module 13. Module 14 moves from building the system to working with the people who use it.

**Review criteria:**

- Usage is reviewed and unused components identified
- At least one removal or deprecation went through the process
- Workarounds are found in real screens and decided
- The plan has an honest estimate and a skip order

<details>
<summary>Reading, video and deeper explanation</summary>

- The review question is what has actually been used. Components that appear in no screen are pure cost: they are documented, maintained, versioned and read by people deciding what to use. Removing them makes the rest easier to hold in mind, which is the main thing a small system has going for it.
- Workarounds are the other half. Where someone built a one-off instead of using the system, something did not fit — a missing component, a wrong content rule, a variant that could not stretch. Those are the additions worth making, and they are visible in your migration blockers and your own screens.
- Removal is a breaking change and should go through the same route as an addition: proposed, decided, versioned, announced with a deprecation period. Systems that remove things quietly are as untrustworthy as systems that change values quietly.
- The plan matters because systems fail slowly. Six months of no maintenance produces documentation nobody trusts and drift nobody has measured. An honest estimate — a few hours a month, with what happens if that time is not available — is more useful than an ambitious plan that will not be followed.

[GOV.UK Design System: components](https://design-system.service.gov.uk/components/).

</details>
