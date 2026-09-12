# Analytics and experiments

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the small-action teaching and tracking standard](docs/COURSE-AUTHORING.md#small-action-and-tracking-contract--12-september-2026). All 43 lessons in Modules 1–5 use saved action flows. Published, teaching-refined, learner-validated and assessed remain separate states.

Generated from src/module15.ts; edit that source, then run npm run docs:generate. Level 5 · Module m15 · requirement areas 14. Optional effort 30 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m14. This is guidance for meaningful practice, not a lock. Module approved resource pair: R20 / R07. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: What you are actually trying to measure

Stable ID: m15-l01-v1. Core. Areas 14. Optional effort ~120 min.

**Objective.** Build a metric tree for your product connecting one outcome to the behaviours beneath it, and mark which nodes you could observe and which you could not.

**Bring forward.** Your m14 release plan and m05 findings.

Most measurement arguments are about the wrong number because nobody wrote down which outcome it was supposed to serve.

### Learn

The assigned guidance frames measurement as starting from what success means for the service, and the practical instrument is a tree: the outcome at the top, the behaviours that produce it beneath, and the countable events beneath those. Built downward it stays connected to something that matters; built upward from whatever the analytics happened to record, it produces the familiar dashboard nobody uses.

Activity is not value. Page views, sessions and clicks are counts of things happening; they become useful only when tied to a behaviour that produces the outcome. A rise in views of the cancellation page might mean people are finding it, or that more people need it, and without the tree you cannot tell which and will report whichever suits.

Marking observability is the part that makes the tree honest for your situation. You have no analytics platform and no traffic, so most nodes will be unobservable, and that is the finding rather than a failure: it tells you which questions need conversations, which need a small manual count, and which are simply unavailable.

A measure you cannot act on is decoration. If a number moves and nobody would do anything differently, it does not belong in the tree; it belongs in a list of things you might look at out of curiosity, which is a different document.

**Common misconception.** “More metrics give a fuller picture.” They give more numbers to argue with. Three numbers connected to an outcome, with their limits stated, support decisions; twenty unconnected numbers support whichever conclusion someone wanted.

### Worked example

The tree for the booking product: outcome — people who intend to attend a class actually attend one. Beneath it: they find a suitable class; they complete a booking without duplicating payment; they arrive prepared. Beneath those: searches that produce results, bookings completed in one session, duplicate payments, prepared-arrival reports from the provider. Observability: the first two are unobservable without analytics; duplicate payments are countable from the provider's records; preparedness is only askable. Two candidate metrics were removed for being unactionable, including time on page.

#### What you are actually trying to measure

Build a metric tree for your product connecting one outcome to the behaviours beneath it, and mark which nodes you could observe and which you could not.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Paper or a text file for the tree. Nothing else; this lesson is reasoning, not tooling.

- Starting material: Your release plan and research findings.
- Create HaruCourse/Practice/m15-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and state the outcome

**See it first.** Made-up example. Naming the outcome for a tool library, and naming something the product does.

- **What I wrote:** “People can book tools online.” It is what the product exists to do, it is true, and it took four seconds.
- **Why it was not an outcome:** It describes the product. If the product disappeared tomorrow, the sentence would simply stop being true, and nothing in it says what anybody was trying to achieve.
- **The test I applied:** Would this sentence still make sense if the product were a telephone line and a paper ledger? “People can book tools online” would not. The outcome should survive the change.
- **What I wrote instead:** “People who need a tool for a job get one, use it, and bring it back.” That is true of the phone line, the ledger and the website, and it is what any of them exists to produce.
- **What that changed underneath:** The tree stopped being about booking and started including collecting and returning, which is where two of the three real problems turned out to be.

**The wrong turn:** The wrong turn is describing the product, because the product is the thing in front of you and describing it feels like naming a purpose. A tree built on it can only ever be about the screens you already have.

**What it costs:** An outcome that survives replacing the product is vaguer and harder to count, and somebody will ask what it has to do with this quarter’s work.

**Still unknown:** Still unknown: whether people who fail to borrow simply go and buy one. Nothing in the tree can see somebody who gave up before arriving.

- Read the assigned guidance on defining success.
- Write the one outcome your product exists to produce.

**You should end up with:** One outcome written as something that happens to a person, and one of your own outputs named as an output.

Worksheet fields for this step:

- The one outcome your product exists to produce — Something that happens to a person, not something that happens on a screen.
- One thing your product does that is an output rather than an outcome

<details>
<summary>Help with this step</summary>

- **Outcome:** Something that is true for a person afterwards. It is what the product exists for and it is rarely countable directly.
- **Output:** Something the product does or that exists: a screen shipped, a message sent, a page viewed. Easy to count and not the point.

Stuck starting? Finish this sentence: “this product exists so that people …”, and do not mention a screen.

Is it enough? Your outcome would still make sense if the product were replaced by something completely different.

</details>

#### 2. Build the tree downward

- List the behaviours that produce the outcome.
- Beneath each, list events that would indicate it.
- Stop when the leaves are countable in principle.

**You should end up with:** Three branches, each naming a behaviour and the events beneath it that would indicate it.

Worksheet fields for this step, revealed a few at a time in the app:

- Branch 1 · the behaviour, and the events beneath it that would indicate it — Stop when the leaves are countable in principle, even if you cannot count them today.
- Branch 2 · the behaviour, and the events beneath it that would indicate it
- Branch 3 · the behaviour, and the events beneath it that would indicate it

<details>
<summary>Help with this step</summary>

- **Metric tree:** An outcome at the top, the behaviours that produce it beneath, and countable events beneath those. It is what connects a number to a reason for caring about it.
- **Leaf:** The bottom of a branch: something that could be counted in principle, even if nobody can count it today.

Stuck starting? Take the outcome and ask what has to happen for it to be true. Those are your behaviours.

Is it enough? Every leaf is a thing that either happens or does not, rather than a quantity of feeling.

</details>

#### 3. Separate outcome from activity

**See it first.** Made-up example. Building a metric tree for a tool library, and building it up from what was countable.

- **How I started:** With what I could get: page views, searches, time on page, bookings started, bookings completed. Five real numbers, all available.
- **What I built with them:** A tidy tree, with the countable things at the bottom and increasingly vague headings above them until the top said engagement.
- **What was wrong with it:** Engagement is not something anybody wants. Nobody comes to a tool library to engage with it; they come to borrow a drill and take it home.
- **What starting from the top produced:** People who need a tool get one, use it, and bring it back. Beneath that: they find a tool that suits the job; they collect it without a wasted journey; they return it on time.
- **What happened to my five numbers:** Two connected. Bookings completed sits under collecting without a wasted journey. Duplicate payments sits there too. Searches, page views and time on page connected to nothing, because a search that finds nothing looks identical to one that works.

**The wrong turn:** The wrong turn is building upward from what you can count, because those numbers exist and the outcome does not. It produces a tree whose top is a word nobody outside the team wants.

**What it costs:** Starting from the outcome means most of your tree is unobservable, and the report is much shorter than one built from available numbers.

**Still unknown:** Still unknown: whether people return tools late because they forgot or because the hours are awkward. The tree says the return happens; nothing in it says why.

- Mark each node as outcome or activity.
- Check every activity node is connected upward to an outcome.

**You should end up with:** Every node marked outcome or activity, with any activity node not connected upward identified.

Worksheet fields for this step:

- Each node marked outcome or activity — Activity is something people do. Outcome is something that is true afterwards. Activity is not value.
- Any activity node not connected upward to an outcome — An unconnected activity metric is the one that gets reported for years without anybody asking what it is for.

<details>
<summary>Help with this step</summary>

- **Activity metric:** A count of things happening: sessions, clicks, searches. It can rise while the outcome falls, which is why it needs a connection upward.
- **Unconnected metric:** One nobody can trace to an outcome. It gets reported every month for years, and no value of it ever changes a decision.

Stuck starting? Mark the leaves first; activity and outcome are easiest to tell apart at the bottom.

Is it enough? Every activity node has a path upward to the outcome, or is marked as having none.

</details>

#### 4. Mark observability

- Mark each node observable, askable, or unavailable to you.
- Note what you would need to observe the unavailable ones.

**You should end up with:** Every node marked observable, askable or unavailable, with what you would need for the unavailable ones.

**Try it with help.** Six candidate metrics for a made up tool library. For each one, decide what kind it is.

- The number of people charged twice for one booking, counted from the payment provider’s records.
  - **an outcome you could observe** — It is a thing that happened to a person, it is bad, and it can be counted today. Every value of it suggests an action.
  - an activity metric — Nobody set out to pay twice. It is a consequence rather than a behaviour.
  - not actionable at all — It is one of the few on this list that points straight at work.
- The number of searches performed each week.
  - an outcome you could observe — Nothing is true for anybody afterwards. It rises when search works well and when it works badly.
  - **an activity metric** — A count of people doing something, with no direction. It needs a connection upward, and it usually does not have one.
  - not actionable at all — It becomes actionable if paired with whether the search found anything, which is the connection it lacks.
- Average time on the tool detail page.
  - an outcome you could observe — Nothing about it is an outcome for anybody.
  - an activity metric — It is one, and the deeper problem is that no value of it implies an action: it goes up when people are interested and when they are lost.
  - **not actionable at all** — This is the classic metric to remove. Whatever it does, somebody can explain it as good news.
- The proportion of tools returned by their due date.
  - **an outcome you could observe** — It is part of the outcome and it is countable from the library’s own records. A fall in it is a reason to look at something.
  - an activity metric — Returning is a behaviour, and this one sits directly under the outcome rather than floating.
  - not actionable at all — A change in it would change what somebody does.
- Whether people arrive knowing what they need to bring.
  - an outcome you could observe — It is genuinely part of the outcome and it cannot be observed: nothing in any record shows what somebody knew.
  - an activity metric — It is not a behaviour anybody performs on the product.
  - **not actionable at all** — Not as a metric. It is askable, which makes it real evidence and not a number, and the tree should mark it that way rather than dropping it.
- Bookings completed in a single visit rather than across two.
  - an outcome you could observe — Completing in one visit is convenient and is not itself what anybody wanted; somebody checking with a partner and returning is fine.
  - **an activity metric** — A behaviour with a plausible connection upward to collecting without a wasted journey. Useful, once that connection is written down.
  - not actionable at all — It is actionable, as long as nobody treats a return visit as a failure.

**Then:** Now mark your own nodes the same way, and check every askable one says so rather than pretending to be countable.

**What to watch for:** Two different reasons to be unactionable. Time on page can be read as good news whatever it does; arriving prepared is worth knowing and cannot be counted at all. The first is removed, the second is marked askable and kept.

Worksheet fields for this step:

- Each node marked observable, askable, or unavailable to you
- What you would need in order to observe the unavailable ones

<details>
<summary>Help with this step</summary>

- **Observable:** You could count it with what you have: a provider’s records, a support log, a count done by hand.
- **Askable:** You could only find out by asking somebody. It is real evidence and it is not a measurement.
- **Unavailable:** Neither, today. Saying so is what stops a tree implying data nobody has.

Stuck starting? Go leaf by leaf and ask where the number would actually come from.

Is it enough? Nothing is marked observable unless you could name the record it comes from.

</details>

#### 5. Remove the unactionable

- Remove any metric nobody would act on.
- Record the two you removed and why.
- Save the tree.

**You should end up with:** Two metrics removed for being unactionable, with the reason nobody would act on them.

Worksheet fields for this step:

- Two metrics you removed, and why nobody would act on them
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Unactionable:** No value of it would change what anybody does. Usually because it can be read as good news whichever way it moves.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? For each candidate, ask what you would do if it doubled, and what you would do if it halved.

Is it enough? Both removals name what would have happened in each direction, which is why nothing would.

</details>

**Save and continue.** Saved for you: Your outcome, the branches, the marks and the removals save as you type, on this device first and then online. Kept outside the app: A drawn tree on paper is often clearer than a written one. Photograph it, keep it in your own folder, and note the file name here. What your creator sees: Your creator reads the observability marks and the two removals. A tree where everything is observable usually means it was built from the available numbers. Your next action: Open Your work and choose Ready for review. The next lesson counts people through one task and finds out what counting cannot tell you.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write the outcome first, then ask what behaviours would produce it, then what would indicate each behaviour.

</details>

<details>
<summary>Hint 2</summary>

For each activity node, trace the path upward. Anything unconnected is a number without a purpose.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: What you are actually trying to measure.
Task: Build a metric tree for your product connecting one outcome to the behaviours beneath it, and mark which nodes you could observe and which you could not.
Challenge one thing at a time, and start with the mistake this lesson is about: “More metrics give a fuller picture.” They give more numbers to argue with. Three numbers connected to an outcome, with their limits stated, support decisions; twenty unconnected numbers support whichever conclusion someone wanted.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the tree and ask whether the tree starts from an outcome and reaches countable events. Look at the labelled tree and ask whether outcome and activity nodes are distinguished. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m15-l01-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The tree starts from an outcome and reaches countable events: A tree with a stated outcome at the top and countable leaves. Outcome and activity nodes are distinguished: Each node labelled, with activity nodes connected upward. Every node is marked observable, askable or unavailable: An observability mark per node with what would be needed for the unavailable ones. Unactionable metrics are removed with reasons: At least two removals with the reason each would change nothing.

**Bring forward:** A metric tree with honest observability marks shows quantitative reasoning without pretending to data you do not have. Module handoff: Avoid unsupported impact claims in all case studies


### Practice and pause points

- Read and state the outcome (~25 min): Read the assigned guidance on defining success. Write the one outcome your product exists to produce.
- Build the tree downward (~30 min): List the behaviours that produce the outcome. Beneath each, list events that would indicate it. Stop when the leaves are countable in principle.
- Separate outcome from activity (~25 min): Mark each node as outcome or activity. Check every activity node is connected upward to an outcome.
- Mark observability (~25 min): Mark each node observable, askable, or unavailable to you. Note what you would need to observe the unavailable ones.
- Remove the unactionable (~15 min): Remove any metric nobody would act on. Record the two you removed and why. Save the tree.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper or a text file for the tree. Nothing else; this lesson is reasoning, not tooling.

### Output

A metric tree from one outcome down to countable events; Outcome and activity metrics distinguished; An observability mark on every node; Two candidate metrics removed for being unactionable

### Checks

- Why build the tree downward from an outcome? Answer: Because building upward from available data produces numbers with no stated purpose, which is how dashboards become decoration.
- What is wrong with reporting activity? Answer: Activity can rise for opposite reasons. Without the connection to an outcome, an increase can be read as success or as a problem, and it usually gets read as whichever is convenient.
- Why mark observability? Answer: Because it tells you which questions need conversations, which need a manual count, and which you simply cannot answer — which is a real finding for someone without analytics.

### Rubric and remediation

**The tree starts from an outcome and reaches countable events**

Adequate evidence: A tree with a stated outcome at the top and countable leaves.

- 0 — A list of available metrics.
- 1 — A tree built from data upward.
- 2 — Built downward from an outcome to countable leaves.
- 3 — As adequate, and the outcome is one someone outside the team would recognise as mattering.

If below 2: Write the outcome first, then ask what behaviours would produce it, then what would indicate each behaviour. Show at recheck: The tree.

**Outcome and activity nodes are distinguished**

Adequate evidence: Each node labelled, with activity nodes connected upward.

- 0 — Not distinguished.
- 1 — Labelled without checking connections.
- 2 — Labelled and every activity node connected to an outcome.
- 3 — As adequate, and an activity metric that could move for opposite reasons is annotated as ambiguous.

If below 2: For each activity node, trace the path upward. Anything unconnected is a number without a purpose. Show at recheck: The labelled tree.

**Every node is marked observable, askable or unavailable**

Adequate evidence: An observability mark per node with what would be needed for the unavailable ones.

- 0 — Not marked.
- 1 — Marked without stating what is missing.
- 2 — All marked, with requirements named for the unavailable.
- 3 — As adequate, and the askable nodes have a planned conversation rather than an intention.

If below 2: Go node by node asking how you would see this today with what you actually have. Show at recheck: The marked tree.

**Unactionable metrics are removed with reasons**

Adequate evidence: At least two removals with the reason each would change nothing.

- 0 — Nothing removed.
- 1 — Removed without reasons.
- 2 — Two removed with reasons recorded.
- 3 — As adequate, and one removal is a metric you were attached to.

If below 2: For each metric ask what you would do differently if it moved. If nothing, remove it. Show at recheck: The removal list.

### Portfolio contribution

A metric tree with honest observability marks shows quantitative reasoning without pretending to data you do not have.

### Assigned resources

- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Defining what success means and choosing measures that reflect it. Purpose: Supplies the outcome-first framing this lesson builds on. Effort: 45–60 selected min. Free reading, no account. Verified 2026-09-06. Written for government services that publish performance data; you have neither the platform nor the traffic, so the observability marks are essential. Fallback: R07.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The point on defining success and publishing performance data. Purpose: Connects measurement to an accountability the service standard makes explicit. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Statutory context; take the discipline of stating success in advance. Fallback: R07.

## Lesson 2: Funnels, and what a drop-off does not tell you

Stable ID: m15-l02-v1. Core. Areas 14. Optional effort ~120 min.

**Objective.** Build a funnel for one task from explicitly synthetic counts, identify the largest drop, and write three different explanations that the data cannot distinguish between.

**Bring forward.** Your m07 flow and m10 findings.

A funnel shows you where people stop. It never shows you why, and the gap between those two is where most bad product decisions are made.

### Learn

A funnel is a simple instrument: define the steps of one task, count how many people reach each, and look at where the number falls. Its value is direction — it tells you where to spend qualitative effort — and its danger is that the shape looks explanatory when it is only descriptive.

Every drop has multiple explanations. People leaving at payment might not trust the payment, might have discovered a cost, might have intended to check with someone, or might have been interrupted. The funnel cannot separate these, and the choice between them is usually made by whoever has the strongest opinion unless someone goes and finds out.

Some drops are healthy. A step that filters out people who cannot attend on that date is doing its job, and treating every fall as a leak leads to designs that push people forward into commitments they will regret and cancel. Ask what a correct drop would look like before treating one as a problem.

Because you have no real traffic, this lesson uses synthetic counts, and the rule from the resource catalog applies: label them synthetic wherever they appear, including in a portfolio. A funnel built from invented numbers teaches the reasoning and proves nothing about a real product.

**Common misconception.** “The funnel shows the problem is at checkout.” It shows people stop there. The problem may have been created three steps earlier by a price that was not shown, and the funnel cannot tell you that.

### Worked example

A synthetic funnel for the booking task, clearly labelled: 1,000 reach the class list, 420 open a class, 180 begin booking, 96 reach payment, 71 complete. The largest proportional drop is from opening a class to beginning a booking. Three explanations that fit equally: the price is higher than expected at that point; the date is inconvenient and there is no easy route to alternatives; and people are checking with someone else and will return later, which the funnel would count as a loss. The third would need a returning-visitor view the data does not have. The write-up marks every number synthetic.

#### Funnels, and what a drop-off does not tell you

Build a funnel for one task from explicitly synthetic counts, identify the largest drop, and write three different explanations that the data cannot distinguish between.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A spreadsheet or a hand-drawn chart with synthetic counts. No analytics account is needed; the catalog's analytics demo account remains optional and unverified for signed-in use.

- Starting material: Your flow and your usability findings.
- Create HaruCourse/Practice/m15-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Define the steps

- Take one task from your flow and list its steps in order.
- Decide what counts as reaching each step.

**You should end up with:** One task with its steps in order, and a written definition of what counts as reaching each.

Worksheet fields for this step:

- One task, with its steps in order
- For each step: what counts as reaching it — Reaching a screen, pressing something, arriving at an outcome. Two people will count differently unless this is written down.

<details>
<summary>Help with this step</summary>

- **Funnel:** A count of people reaching each step of one task. It shows where people stop and never why.
- **What counts as reaching:** The definition of each step. Without it, two people count the same thing differently and the numbers cannot be compared.

Stuck starting? Take one task from your own flow and write its steps before thinking about any numbers.

Is it enough? Somebody else could count your funnel and get the same answer.

</details>

#### 2. Populate with synthetic counts

**See it first.** Made-up example. Reading a synthetic funnel for a tool library, and reading the wrong drop as the biggest.

- **The numbers:** Synthetic throughout: 1,000 reach the list, 420 open a tool, 180 begin booking, 96 reach payment, 71 complete.
- **What I said first:** The biggest problem is the list: we lose 580 people there, more than everywhere else combined.
- **Why that is the wrong reading:** 580 is the largest number because 1,000 is the largest starting point. Most of a landing audience never wanted to borrow anything today.
- **What the proportions showed:** 58 per cent at the list, then 57 per cent from opening a tool to beginning a booking, then 47, then 26. The second is nearly as steep and applies to people who had already chosen a tool.
- **Why that step is the interesting one:** Everybody in it has shown intent. Whatever stops them there is stopping people who wanted the thing, which is not true of the first step at all.

**The wrong turn:** The wrong turn is ranking by the number lost, because that number is the largest and it is at the top. The top of a funnel is where the least committed people are, and losing them is mostly correct.

**What it costs:** Proportional drops make the top of the funnel look less urgent than it feels, and somebody will point out that 580 people is a lot of people.

**Still unknown:** Still unknown: everything about why, and these numbers are invented anyway. The arithmetic is the thing being practised here, not the product.

- Invent plausible counts and label them synthetic.
- Calculate the proportional drop at each step, not just the absolute.

**You should end up with:** Invented counts marked synthetic, the proportional drop at each step with your working, and the largest one identified.

Worksheet fields for this step:

- Your invented counts at each step, marked synthetic
- The proportional drop at each step, with your working — Proportional drop is the number lost at a step divided by the number who reached it. 420 to 180 loses 240 of 420, which is about 57 per cent.
- The largest proportional drop, and why it is not simply the largest number lost

<details>
<summary>Help with this step</summary>

- **Proportional drop:** People lost at a step divided by people who reached it. Going from 420 to 180 loses 240 of 420, about 57 per cent.
- **Absolute drop:** The raw number lost. The biggest one is usually at the top, where the most people are, which is why it is the wrong thing to rank by.
- **Synthetic:** Invented for practice. The arithmetic is real and the numbers are not, and every place they appear has to say so.

Stuck starting? Work out the proportion for each step by hand, writing the division you did.

Is it enough? Your largest drop is the largest proportion, and you can say why that is the right ranking.

</details>

#### 3. Write competing explanations

**See it first.** Made-up example. Explaining a drop in a synthetic tool-library funnel, and writing three versions of one explanation.

- **What I wrote:** The price is a surprise; the price appears too late; people do not expect to pay at all. Three lines, and I felt I had covered the possibilities.
- **What they had in common:** All three are about price. If any of them is right, the work is the same work: show the cost earlier.
- **Why that is a problem:** Three explanations that imply one piece of work is one explanation written three ways. It feels like breadth and it narrows the investigation to a single hypothesis.
- **The test I started using:** Would these three send me to do different things? If not, at least two of them are the same.
- **What the real three became:** The price surprises people at that point. The dates available do not suit them and nothing offers alternatives. They are checking with somebody else and will return, which this funnel counts as a loss. Three different pieces of work, and the third needs data I do not have.

**The wrong turn:** The wrong turn is generating variations of your first idea, because the first idea arrives immediately and the variations arrive easily after it. Three explanations pointing at one fix leave you as narrow as one.

**What it costs:** Genuinely different explanations are harder to think of and make the finding look less conclusive, because now there are three quite separate things to investigate.

**Still unknown:** Still unknown: whether any of the three is right, and the numbers are invented in any case. What the exercise produces is the habit rather than an answer about a product.

- For the largest drop, write three explanations that fit the numbers.
- State what evidence would separate them.

**You should end up with:** Three explanations for the largest drop that the numbers cannot distinguish, each with the evidence that would separate it.

**Try it with help.** Six things somebody said about the same made up drop in a synthetic funnel. For each one, decide what it is.

- The price appears later than people expect, so they stop when they see it.
  - **an explanation the data allows** — It fits the numbers exactly, and so do two others. That is what makes it an explanation rather than a finding.
  - a conclusion the data cannot support — It is not being asserted as true; it is one candidate.
  - something the funnel cannot see at all — The funnel cannot confirm it and the step it describes is inside the funnel.
- The problem is at this step, so we should redesign this screen.
  - an explanation the data allows — It skips straight past explanation to a decision.
  - **a conclusion the data cannot support** — People stopping at a step does not mean the step caused it. The cause may be three screens earlier, which the funnel cannot show.
  - something the funnel cannot see at all — The step is visible; the causation is not.
- People are checking with somebody else and will come back tomorrow.
  - an explanation the data allows — It fits the numbers, and this funnel counts sessions rather than people, so a return would be counted as a new visitor and this explanation is invisible to it.
  - a conclusion the data cannot support — It is offered as a possibility rather than a conclusion.
  - **something the funnel cannot see at all** — Without a returning-visitor view, somebody coming back is indistinguishable from somebody leaving for ever.
- The dates available do not suit them and there is no easy route to alternatives.
  - **an explanation the data allows** — Consistent with the same numbers as the price explanation, and it implies completely different work.
  - a conclusion the data cannot support — Nothing is being asserted.
  - something the funnel cannot see at all — The funnel cannot distinguish it, and it is at least about a step the funnel counts.
- Our drop here is worse than the industry average, so we are underperforming.
  - an explanation the data allows — It explains nothing about what happened.
  - **a conclusion the data cannot support** — Two funnels defined differently are not comparable, and these particular numbers are invented. It is a comparison of two things that were never measured the same way.
  - something the funnel cannot see at all — The funnel can see its own numbers; what it cannot see is anybody else’s definitions.
- It is worse on phones than on laptops.
  - an explanation the data allows — It might well be true and this funnel is not split by device, so nothing in it speaks to the question.
  - a conclusion the data cannot support — It would become one if asserted; as written it is a claim about a split the data does not have.
  - **something the funnel cannot see at all** — Any claim about a group the funnel does not separate is invisible to it. Splitting it would be a reasonable next step.

**Then:** Now write your own three explanations, and check none of them is really a conclusion or a claim about something the funnel cannot see.

**What to watch for:** Three different failures. A conclusion asserts cause from position; a claim about returning visitors or devices needs a split the funnel does not have; and an industry comparison compares two definitions nobody has reconciled.

Worksheet fields for this step:

- Three explanations for the largest drop that the numbers cannot tell apart
- For each: what evidence would separate it from the others

<details>
<summary>Help with this step</summary>

- **Competing explanation:** A different reason that fits the same numbers exactly. There are always several, and a funnel cannot choose between them.
- **Separating evidence:** What you would have to observe or ask to tell two explanations apart. It is what turns a funnel into a research question.

Stuck starting? Write three explanations that are as different from each other as you can make them.

Is it enough? The three imply three different pieces of work.

</details>

#### 4. Find the healthy drops

- Identify any step where people leaving is correct.
- Write what a healthy drop would look like there.

**You should end up with:** A step where people leaving is correct, with what a healthy drop looks like there.

Worksheet fields for this step:

- A step where people leaving is the right outcome, and what a healthy drop looks like there

<details>
<summary>Help with this step</summary>

- **Healthy drop:** People leaving because they should: the tool is the wrong size, the class is not for them. A funnel counts it identically to a failure.

Stuck starting? Look for a step whose job is partly to send people away.

Is it enough? You named what a good drop would look like there, not only that one exists.

</details>

#### 5. Label and record

- Mark every number synthetic on the chart itself.
- Save the funnel with the explanations.

**You should end up with:** Every number marked synthetic on the chart itself, and the repair the Check questions asked for.

Worksheet fields for this step:

- How every number is marked synthetic on the chart itself — On the chart, not only in a caption. Charts travel away from their captions.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Labelling on the chart:** Putting the word synthetic in the chart rather than in a caption. Charts get screenshotted and travel without their captions.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Put the word into the chart title, not underneath it.

Is it enough? A screenshot of your chart alone would still say the numbers are invented.

</details>

**Save and continue.** Saved for you: Your steps, the synthetic counts, the proportions and the explanations save as you type, on this device first and then online. Kept outside the app: A hand-drawn funnel or a spreadsheet stays in your own folder, with the synthetic label on the chart. No analytics account is involved. What your creator sees: Your creator reads the three explanations and the evidence that would separate them. A funnel with one explanation is a conclusion with a chart attached. Your next action: Open Your work and choose Ready for review. The next lesson takes the rates you have been writing and asks what they can support.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Take your m07 flow and use its actual steps, defining what counts as reaching each.

</details>

<details>
<summary>Hint 2</summary>

Add the label to the chart itself; a caption elsewhere does not travel with a screenshot.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Funnels, and what a drop-off does not tell you.
Task: Build a funnel for one task from explicitly synthetic counts, identify the largest drop, and write three different explanations that the data cannot distinguish between.
Challenge one thing at a time, and start with the mistake this lesson is about: “The funnel shows the problem is at checkout.” It shows people stop there. The problem may have been created three steps earlier by a price that was not shown, and the funnel cannot tell you that.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the funnel steps and ask whether the funnel's steps match a real task. Look at the labelled funnel and ask whether synthetic counts are labelled wherever they appear. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m15-l02-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The funnel's steps match a real task: Steps drawn from your own flow with a stated definition of reaching each. Synthetic counts are labelled wherever they appear: The word synthetic on the chart, in the write-up and in any portfolio use. Three competing explanations are written with separating evidence: Three plausible causes for the largest drop and what would distinguish them. Healthy drops are identified: At least one step where leaving is correct, with what healthy looks like.

**Bring forward:** A funnel with competing explanations is more credible than one with a conclusion, and the synthetic labelling protects you from an easy criticism. Module handoff: Avoid unsupported impact claims in all case studies


### Practice and pause points

- Define the steps (~25 min): Take one task from your flow and list its steps in order. Decide what counts as reaching each step.
- Populate with synthetic counts (~25 min): Invent plausible counts and label them synthetic. Calculate the proportional drop at each step, not just the absolute.
- Write competing explanations (~30 min): For the largest drop, write three explanations that fit the numbers. State what evidence would separate them.
- Find the healthy drops (~25 min): Identify any step where people leaving is correct. Write what a healthy drop would look like there.
- Label and record (~15 min): Mark every number synthetic on the chart itself. Save the funnel with the explanations.

Pause after any step; save the artifact and next action.

**Free tool path.** A spreadsheet or a hand-drawn chart with synthetic counts. No analytics account is needed; the catalog's analytics demo account remains optional and unverified for signed-in use.

### Output

A funnel of one task with clearly labelled synthetic counts; The largest drop identified proportionally; Three explanations the data cannot distinguish; A note of which drops might be correct rather than problems

### Checks

- What does a funnel tell you? Answer: Where people stop. Not why they stopped, and not whether stopping was a problem, both of which need other methods.
- Why look at proportional drops? Answer: Because a small absolute fall late in a funnel can be a large proportion of the people who got that far, and that is where the design is failing the committed.
- When is a drop healthy? Answer: When the step correctly filters people who should not continue. Treating that as a leak produces designs that push people into commitments they cancel.

### Rubric and remediation

**The funnel's steps match a real task**

Adequate evidence: Steps drawn from your own flow with a stated definition of reaching each.

- 0 — Generic funnel stages.
- 1 — Steps from the flow without definitions.
- 2 — Steps and definitions both from your own task.
- 3 — As adequate, and a step is split because it hid a decision point.

If below 2: Take your m07 flow and use its actual steps, defining what counts as reaching each. Show at recheck: The funnel steps.

**Synthetic counts are labelled wherever they appear**

Adequate evidence: The word synthetic on the chart, in the write-up and in any portfolio use.

- 0 — Numbers presented without qualification.
- 1 — Labelled in one place only.
- 2 — Labelled everywhere the numbers appear.
- 3 — As adequate, and the label states why synthetic data was used.

If below 2: Add the label to the chart itself; a caption elsewhere does not travel with a screenshot. Show at recheck: The labelled funnel.

**Three competing explanations are written with separating evidence**

Adequate evidence: Three plausible causes for the largest drop and what would distinguish them.

- 0 — One explanation asserted.
- 1 — Several explanations without separating evidence.
- 2 — Three with what would separate them.
- 3 — As adequate, and one explanation would make the drop acceptable rather than a problem.

If below 2: For your largest drop, write every reason a person might stop there, then what evidence would rule each in or out. Show at recheck: The explanations.

**Healthy drops are identified**

Adequate evidence: At least one step where leaving is correct, with what healthy looks like.

- 0 — Every drop treated as a loss.
- 1 — Healthy drops mentioned generally.
- 2 — At least one identified with its expected shape.
- 3 — As adequate, and the write-up warns against optimising it away.

If below 2: Ask at each step whether some people should stop here. Where the answer is yes, say what proportion would be reasonable. Show at recheck: The healthy-drop note.

### Portfolio contribution

A funnel with competing explanations is more credible than one with a conclusion, and the synthetic labelling protects you from an easy criticism.

### Assigned resources

- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — The sections on using performance data and on what a measure can and cannot show. Purpose: Supports reading a funnel as direction rather than explanation. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Government context with real data; your counts are synthetic and must be labelled as such everywhere. Fallback: R07.
- R63: [UK Analysis Function: data visualisation charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/) — The rules for bar charts, axes and labelling. Purpose: Keeps the funnel chart honest about proportions and readable without a legend. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06; published 19 May 2022. It excludes interactive charts and dashboards. Fallback: R29.

## Lesson 3: Rates, intervals and small numbers

Stable ID: m15-l03-v1. Core. Areas 14. Optional effort ~120 min.

**Objective.** Attach an interval to three rates from your own work, and rewrite any claim the interval cannot support.

**Bring forward.** Your m05 survey results, m10 test results and the funnel.

A rate with no interval is a claim pretending to be a measurement, and it is the commonest way design work misleads people.

### Learn

The assigned interval reading explains that a rate is an estimate with uncertainty attached, and that the uncertainty shrinks slowly as the sample grows. At the sizes available to you — a survey of twenty-two, a test of five — the interval around any percentage covers so much ground that the percentage carries almost no information, which is why this course has insisted on counts since m05.

The practical rule has two branches. If you must report a rate, attach the interval and show your inputs. If the interval is so wide that the rate is uninformative, report the count and let the reader see the size directly. Both are honest; only the bare percentage is not.

The sample-size reading is for planning: it tells you what a study designed to measure a binary outcome would need. It is not a justification for a claim made from a smaller sample, and it explicitly excludes surveys, card sorting and tree testing, which is why m05, m06 and m10 all reported counts.

Comparing two rates is harder than reporting one, because both carry intervals and the difference carries a wider one still. Two overlapping intervals do not establish a difference, and reporting “A improved on B” from small samples is the failure mode most likely to reach a decision meeting unchallenged.

**Common misconception.** “Percentages are more professional than counts.” They look more precise. At small samples the precision is fictional, and a reader who checks the sample will trust nothing else in the document.

### Worked example

Three rates were reworked. From the m05 survey: 9 of 22 unsure their payment had gone through, previously written as 41 per cent. With the interval computed and shown, the range covered roughly a quarter to three-fifths, so the claim became the count. From the m10 test: 2 of 3 could not tell the place was held, previously written as 67 per cent, rewritten as the count with the sample route stated. From the synthetic funnel: a comparison between two steps was removed entirely, because the numbers were invented and comparing invented numbers produces nothing.

#### Rates, intervals and small numbers

Attach an interval to three rates from your own work, and rewrite any claim the interval cannot support.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A spreadsheet or calculator using a published interval formula, with your inputs shown. The interval reading gives no formulas, so name the one you used.

- Starting material: Any counts you hold from earlier modules.
- Create HaruCourse/Practice/m15-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and gather

- Read the assigned interval and sample-size readings.
- Collect three rates you have written or been tempted to write.

**You should end up with:** Three rates gathered with the counts behind them.

Worksheet fields for this step:

- Three rates you have written or were tempted to write, with the counts behind them — The count is the part that matters. 41 per cent from 9 of 22 and 41 per cent from 410 of 1,000 are different claims.

<details>
<summary>Help with this step</summary>

- **Rate:** A proportion expressed as a percentage. It hides the count, and the count is what decides how much it can support.
- **The count behind it:** How many out of how many. Two identical percentages from 22 people and 1,000 people are entirely different claims.

Stuck starting? Go through your own documents and find every percentage you have written.

Is it enough? Each rate has its two numbers beside it.

</details>

#### 2. Compute the intervals

**See it first.** Made-up example. Reporting a survey result from a tool library, and reporting it as a percentage.

- **What I wrote:** “41 per cent of members were unsure whether their payment had gone through.” It looked precise and it fitted neatly into a sentence.
- **What was behind it:** Nine people out of twenty-two who answered a survey. I knew that; the sentence did not say it.
- **What the interval was:** Roughly 24 to 61 per cent. So the honest version of my precise-looking claim is somewhere between a quarter and three-fifths.
- **What happened when somebody checked:** They asked how many people. Once twenty-two was said out loud, the 41 per cent read as false precision, and everything else in the document was read more suspiciously.
- **What I wrote instead:** “Nine of the twenty-two members who answered the survey were unsure whether their payment had gone through.” Smaller, checkable, and nothing in it can be overturned by asking one question.

**The wrong turn:** The wrong turn is converting a small count to a percentage, because percentages look more professional and fit better in a sentence. At small samples the precision is fictional, and the first reader who asks about the sample stops trusting the rest.

**What it costs:** Counts read as less impressive and invite the question of whether nine people is enough. That question is the right one to be having.

**Still unknown:** Still unknown: whether the twenty-two are like the members who did not answer. The interval covers sampling variation and says nothing about who chose to reply.

- Compute an interval for each rate, showing your inputs.
- Name the formula or tool you used.

**You should end up with:** An interval computed for each rate with the inputs shown and the method named, plus what an interval means in your own words.

Worksheet fields for this step:

- The formula or tool you used, named — Any published interval formula for a proportion. Name it so somebody can check your arithmetic.
- For each rate: the interval, with the inputs you used
- What the interval means, in your own words — Roughly: the range of true values that would not be surprising, given this many people.

<details>
<summary>Help with this step</summary>

- **Interval:** The range of true values that would not be surprising, given how many people you asked. Small counts produce wide ranges.
- **Showing your inputs:** Writing the two counts and the method you used. It lets somebody check the arithmetic rather than trusting it.

Stuck starting? Compute the interval for your smallest count first; it is where the difference is most obvious.

Is it enough? Somebody could recompute each interval from what you wrote.

</details>

#### 3. Rewrite the claims

- Rewrite any claim the interval cannot support.
- Prefer counts with the sample route stated.

**You should end up with:** Each claim rewritten so the interval supports it, with how those people came to be asked.

**Try it with help.** Six sentences from a made up tool-library report. For each one, decide whether the numbers behind it support the claim.

- Nine of the twenty-two members who answered the survey were unsure whether their payment had gone through.
  - **supportable as written** — The count, the denominator and the route are all present. Nothing in it can be overturned by asking one question.
  - needs the count instead — The count is what it already is.
  - the interval is not the problem — No interval is being claimed, so none is needed.
- 41 per cent of members were unsure whether their payment had gone through.
  - supportable as written — The interval runs from about a quarter to three-fifths, so the second digit is fictional.
  - **needs the count instead** — Nine of twenty-two says the same thing without implying a precision the sample cannot carry. It also quietly changes members to members who answered.
  - the interval is not the problem — The interval is exactly the problem here, along with the word members.
- 67 per cent of participants could not tell the place was held.
  - supportable as written — Sixty-seven per cent of three people is two people. The percentage is arithmetic dressed as a measurement.
  - **needs the count instead** — Two of the three people we watched. It is a real and useful finding, stated at the size it is.
  - the interval is not the problem — An interval on three people would cover almost everything, which is the point.
- 80 per cent of the forty people who volunteered for our panel found the new flow clearer.
  - supportable as written — Forty is a reasonable count and the interval is not wide. Who those forty are is the difficulty.
  - needs the count instead — Thirty-two of forty is better and does not fix it either.
  - **the interval is not the problem** — People who volunteer for a panel are unlike people who do not, and no arithmetic corrects that. The route has to be stated and the claim narrowed to the panel.
- Completion rose from 7.1 per cent to 9.4 per cent between the two synthetic funnels.
  - supportable as written — Both numbers were invented, so the comparison measures nothing at all.
  - needs the count instead — The counts are invented too.
  - **the interval is not the problem** — Comparing invented numbers produces an invented difference. The repair is to remove the comparison rather than to qualify it.
- The payment provider’s records show eleven duplicate payments in March.
  - **supportable as written** — A complete count from a record, not a sample. There is no interval because nothing was estimated.
  - needs the count instead — It is already a count.
  - the interval is not the problem — There is indeed no interval here, because nothing was estimated from a sample. A complete count from a record needs no range around it.

**Then:** Now rewrite your own three, and check each says how the people came to be asked.

**What to watch for:** Not every problem is an interval. A panel of volunteers, a synthetic comparison and a complete count all need different handling, and only one of the three is about sample size.

Worksheet fields for this step:

- Each claim rewritten so the interval supports it — Usually this means the count with the route stated: 9 of 22 people who answered the survey.
- For each: how those people came to be asked — Recruited how, from where. A rate from people who volunteered is about people who volunteer.

<details>
<summary>Help with this step</summary>

- **Reporting the count:** Nine of twenty-two, rather than 41 per cent. It is the honest form for small numbers and it invites the right questions.
- **Sample route:** How those people came to be asked. A rate from volunteers is a rate about volunteers, and no interval fixes that.

Stuck starting? Rewrite the smallest-sample claim first, as a count with its route.

Is it enough? No rewritten claim says more than the numbers behind it allow.

</details>

#### 4. Handle a comparison

**See it first.** Made-up example. Comparing two rates from a tool-library study, and comparing invented ones.

- **What I had:** Completion at 7.1 per cent in one synthetic funnel and 9.4 per cent in another, built a fortnight apart while I was practising the arithmetic.
- **What I wrote:** Completion rose by 2.3 points between the two versions. It looked like a result and it was the most encouraging line in the document.
- **What was wrong with it:** Both numbers were invented by me. The difference between two things I made up is a thing I made up, and no interval makes it mean anything.
- **Why an interval would not have saved it:** I nearly computed one and qualified the comparison instead. That would have dressed an invented difference in real arithmetic, which is worse than leaving it plain.
- **What I did:** Removed the comparison entirely and wrote one line saying the two funnels were practice material and could not be compared. The document got shorter and stopped containing a false finding.

**The wrong turn:** The wrong turn is qualifying a comparison that should be removed, because qualifying is the move this lesson keeps asking for. Arithmetic applied to invented numbers makes them look measured.

**What it costs:** Removing it left the document with no encouraging line in it, which is an honest description of what the practice material could show.

**Still unknown:** Still unknown: whether the real completion rate is anywhere near either figure. Nothing here measured it, and the document now says so.

- Take a comparison between two rates and examine both intervals.
- Qualify or abandon the comparison, and say why.

**You should end up with:** One comparison examined with both intervals, then qualified or abandoned with the reason.

Worksheet fields for this step:

- A comparison between two rates, with both intervals
- Whether you qualified it or abandoned it, and why — Overlapping intervals mean the difference could easily be nothing.

<details>
<summary>Help with this step</summary>

- **Comparing two rates:** Harder than reporting one. Two wide intervals that overlap mean the difference could easily be nothing at all.
- **Abandoning a comparison:** A legitimate result. Removing it is better than qualifying it so heavily that nobody reads the qualification.

Stuck starting? Write both intervals down and see whether they overlap before deciding anything.

Is it enough? Your decision names the overlap, or names a different reason such as invented numbers.

</details>

#### 5. Write your rule

- Write when you will report a rate rather than a count.
- Save the calculations and the rewritten claims.

**You should end up with:** A written rule for when you will report a rate at all, and the repair the Check questions asked for.

Worksheet fields for this step:

- Your written rule for when you will report a rate at all
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **A reporting rule:** Your own threshold, written once and applied. It saves the argument every time and it makes your documents consistent.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Pick a count below which you will always report counts, and write it down.

Is it enough? The rule is specific enough that you could apply it without thinking next time.

</details>

**Save and continue.** Saved for you: Your rates, the intervals, the rewrites and your reporting rule save as you type, on this device first and then online. Kept outside the app: A spreadsheet with your interval working stays in your own folder. Keep the inputs visible in it, so the arithmetic can be checked later. What your creator sees: Your creator reads the rewritten claims and the sample routes. A document where every claim shrank is the expected result of this lesson. Your next action: Open Your work and choose Ready for review. The next lesson designs an experiment you almost certainly cannot run.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Compute each interval in a spreadsheet and record the numbers you put in.

</details>

<details>
<summary>Hint 2</summary>

Replace each percentage with the count and add who the sample was.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Rates, intervals and small numbers.
Task: Attach an interval to three rates from your own work, and rewrite any claim the interval cannot support.
Challenge one thing at a time, and start with the mistake this lesson is about: “Percentages are more professional than counts.” They look more precise. At small samples the precision is fictional, and a reader who checks the sample will trust nothing else in the document.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the three calculations and ask whether three intervals are computed with inputs shown. Look at the rewritten claims and ask whether unsupportable claims are rewritten as counts. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m15-l03-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Three intervals are computed with inputs shown: Three calculations with the sample size, the rate, the method and the resulting range. Unsupportable claims are rewritten as counts: Rewritten sentences using counts and stating the recruitment route. A comparison is qualified or abandoned: One two-rate comparison examined, with a decision and reasoning. A personal rule for reporting rates is written: A stated threshold or condition under which you will use a rate.

**Bring forward:** Showing a claim you rewrote, with the interval that forced it, is stronger evidence of judgement than any correct number. Module handoff: Avoid unsupported impact claims in all case studies


### Practice and pause points

- Read and gather (~25 min): Read the assigned interval and sample-size readings. Collect three rates you have written or been tempted to write.
- Compute the intervals (~30 min): Compute an interval for each rate, showing your inputs. Name the formula or tool you used.
- Rewrite the claims (~25 min): Rewrite any claim the interval cannot support. Prefer counts with the sample route stated.
- Handle a comparison (~25 min): Take a comparison between two rates and examine both intervals. Qualify or abandon the comparison, and say why.
- Write your rule (~15 min): Write when you will report a rate rather than a count. Save the calculations and the rewritten claims.

Pause after any step; save the artifact and next action.

**Free tool path.** A spreadsheet or calculator using a published interval formula, with your inputs shown. The interval reading gives no formulas, so name the one you used.

### Output

Three rates with computed intervals and inputs shown; Any unsupportable claim rewritten as a count; A written rule for when you will report a rate at all; One comparison abandoned or qualified

### Checks

- Why does a small sample produce a wide interval? Answer: Because a few observations are compatible with many underlying rates. The interval narrows slowly as the sample grows, which is why small studies report counts.
- What is the sample-size reading for? Answer: Planning a study designed to measure. It does not justify claims from smaller samples and excludes surveys, card sorting and tree testing.
- Why is comparing two rates harder? Answer: Because both carry uncertainty and the difference carries more. Overlapping intervals do not establish that one is higher than the other.

### Rubric and remediation

**Three intervals are computed with inputs shown**

Adequate evidence: Three calculations with the sample size, the rate, the method and the resulting range.

- 0 — No calculation.
- 1 — Intervals asserted without inputs.
- 2 — All three computed with inputs and method shown.
- 3 — As adequate, and the width is described in words as well as numbers.

If below 2: Compute each interval in a spreadsheet and record the numbers you put in. Show at recheck: The three calculations.

**Unsupportable claims are rewritten as counts**

Adequate evidence: Rewritten sentences using counts and stating the recruitment route.

- 0 — Percentages retained.
- 1 — Some rewritten, some retained.
- 2 — All unsupportable rates rewritten as counts with routes.
- 3 — As adequate, and one rewrite is shown beside the original for comparison.

If below 2: Replace each percentage with the count and add who the sample was. Show at recheck: The rewritten claims.

**A comparison is qualified or abandoned**

Adequate evidence: One two-rate comparison examined, with a decision and reasoning.

- 0 — Comparison retained unqualified.
- 1 — Qualified vaguely.
- 2 — Examined against both intervals and decided.
- 3 — As adequate, and the decision is to abandon it where the intervals overlap substantially.

If below 2: Compute both intervals and check whether they overlap; if they do, the comparison is not supported. Show at recheck: The comparison decision.

**A personal rule for reporting rates is written**

Adequate evidence: A stated threshold or condition under which you will use a rate.

- 0 — No rule.
- 1 — A rule too vague to apply.
- 2 — A rule that would decide a real case.
- 3 — As adequate, and it names what you will do when someone asks for a percentage anyway.

If below 2: Write the sample size below which you will always report counts, and what you will say if pressed. Show at recheck: The rule.

### Portfolio contribution

Showing a claim you rewrote, with the interval that forced it, is stronger evidence of judgement than any correct number.

### Assigned resources

- R37: [NN/g: confidence intervals and margins of error](https://www.nngroup.com/articles/confidence-interval/) — What an interval means, confidence levels, and the effect of sample size and variability. Purpose: Supplies the reasoning and the reason to report counts. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. It deliberately gives no formulas, so name the one you used and show your inputs. Fallback: R45.
- R45: [NN/g: sample sizes for quantitative studies](https://www.nngroup.com/articles/summary-quant-sample-sizes/) — Recommended counts and the assumptions behind them. Purpose: Shows what a study designed to measure would need, as a contrast with what you have. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Binary success metrics only; it excludes A/B tests, surveys, card sorting and tree testing and does not license claims from smaller samples. Fallback: R37.

## Lesson 4: Designing an experiment you cannot run

Stable ID: m15-l04-v1. Core. Areas 14. Optional effort ~120 min.

**Objective.** Design one A/B test properly — hypothesis, variants, primary and guardrail metrics, required sample and duration — and then write why you cannot run it and what you will do instead.

**Bring forward.** Your metric tree and a design decision you are unsure about.

Knowing what a real experiment requires is what lets you refuse a fake one, which is the situation you will actually be in.

### Learn

A hypothesis is what makes an experiment interpretable. “Showing that the place is held will reduce duplicate payments, because participants told us they were unsure whether their place was secured” states the expectation and the reasoning, and it can be wrong — which is what distinguishes it from trying two designs to see which does better.

One primary metric decides the result; guardrails prevent winning by damage. If the variant increases completions while increasing refund requests, the guardrail catches what the primary metric would have hidden. Choosing both before running is what stops the result being reinterpreted afterwards.

The assigned article is explicit about the constraints: A/B testing is unsuitable for low-traffic pages, needs a duration of one to two weeks beyond the sample requirement to cover behavioural fluctuation, and cannot reliably test several changes at once. Those are the facts that will make your test impossible, and knowing them precisely is the point of designing it.

The article is equally clear that a test cannot tell you why behaviour changed. That is why the honest plan for a learner without traffic is a designed experiment, a written refusal, and a qualitative alternative — three conversations, a small usability comparison — which answers a narrower question truthfully rather than a broader one falsely.

**Common misconception.** “We can run a quick A/B test to settle this.” With low traffic, a short test produces a difference that is noise, and the noise will be read as a result. Designing the test properly is what shows why that would happen.

### Worked example

The designed test: hypothesis, that a held-place message reduces duplicate payments; variants, current and with the message; primary metric, duplicate payments per hundred bookings; guardrails, completion rate and support contacts. The required sample, using the article's reasoning, was far beyond the product's traffic — the honest calculation showed months of data for a plausible effect. The refusal was written, with what would change it: ten times the traffic, or a much larger expected effect. The alternative was three moderated comparisons plus counting duplicate payments in the provider's records before and after, with the confounding stated.

#### Designing an experiment you cannot run

Design one A/B test properly — hypothesis, variants, primary and guardrail metrics, required sample and duration — and then write why you cannot run it and what you will do instead.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written design plus a spreadsheet for the sample calculation. No experimentation platform is involved, and none would help without traffic.

- Starting material: Your metric tree and an open design question.
- Create HaruCourse/Practice/m15-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read the constraints

- Read the assigned A/B testing article.
- Write its stated limits on traffic, duration and simultaneous changes.

**You should end up with:** The limits the reading states on traffic, duration and changing more than one thing.

Worksheet fields for this step:

- The limits the reading states on traffic, duration and simultaneous changes

<details>
<summary>Help with this step</summary>

- **A/B test:** Showing two versions to two randomly split groups and comparing one metric. It answers whether, never why.
- **Simultaneous changes:** More than one difference between the variants. The result then tells you the pair did something, and nothing about which part.

Stuck starting? Read the assigned article looking only for the numbers and the constraints.

Is it enough? You could say, in one sentence, what an experiment needs in order to mean anything.

</details>

#### 2. Write the hypothesis and variants

**See it first.** Made-up example. Writing variants for a tool-library test, and changing two things at once.

- **What I designed:** Version A as it is now. Version B with the held-place message and a redesigned confirmation screen, because both were ready and both were meant to help.
- **Why that seemed efficient:** One test instead of two, and half the traffic needed. Everything about it looked like a saving.
- **What a result would have meant:** If duplicates fell, the pair did something. Which of the two, and whether one of them made things worse while the other more than compensated, is unanswerable.
- **What a null result would have meant:** Even worse: the pair did nothing on balance, which is consistent with one helping and the other harming by the same amount.
- **What I did instead:** One change: the message. The confirmation redesign goes separately, or ships without a test on the strength of the reasoning behind it.

**The wrong turn:** The wrong turn is bundling two ready changes into one test, because it halves the traffic needed and feels efficient. The result is then uninterpretable in both directions, which costs more than the traffic saved.

**What it costs:** Testing one thing means the other ships untested or waits, and waiting is expensive when traffic is the constraint already.

**Still unknown:** Still unknown: whether the two interact. Separate tests would not show that either, and this is one of the things a small product simply cannot find out.

- State what you expect, why, and what would disprove it.
- Define exactly one change between the variants.

**You should end up with:** A hypothesis with its reasoning and what would disprove it, and two variants differing in exactly one thing.

Worksheet fields for this step:

- What you expect, why, and what would disprove it — The why matters. A hypothesis with no reasoning behind it cannot be wrong in an interesting way.
- The two variants, differing in exactly one thing — Exactly one. Two changes at once produce a result nobody can interpret.

<details>
<summary>Help with this step</summary>

- **Hypothesis:** What you expect and why. The why is what makes a negative result informative rather than merely disappointing.
- **Disprovable:** Something that could come back saying no. A hypothesis nothing could contradict is a preference.

Stuck starting? Write the why before the what. The reasoning is what the test is really examining.

Is it enough? Exactly one thing differs between your variants, and you can say what a no would look like.

</details>

#### 3. Choose metrics

**See it first.** Made-up example. Designing a test for a tool library, and choosing the effect size afterwards.

- **What I did first:** Worked out how much traffic we have, then found the effect size that would be detectable with it. About twelve percentage points.
- **Why that felt sensible:** It made the test feasible. Anything smaller was unreachable, so twelve became the number I designed around.
- **What it actually meant:** I was committing to only noticing an enormous effect. A message that cut duplicate payments by a third would have come back as no result at all.
- **What choosing first produced:** The smallest effect worth acting on is about three points, because below that the work costs more than it saves. That number came from the problem rather than from the traffic.
- **What the honest calculation then showed:** Months of data for three points, at this traffic. The test is not available, which is a finding rather than a failure, and it is the finding the lesson is asking for.

**The wrong turn:** The wrong turn is working backwards from the traffic you have, because it makes the test possible. What it produces is a test that can only detect effects so large you would not need a test to see them.

**What it costs:** Choosing the effect size from the problem usually means concluding that you cannot run the experiment, which is a worse outcome to report and a true one.

**Still unknown:** Still unknown: what the real duplicate-payment rate is. The calculation used a plausible figure, labelled as an assumption, and a different one would change the months considerably.

- Choose one primary metric from your metric tree.
- Choose guardrails that must not get worse.
- State the smallest effect that would matter.

**You should end up with:** One primary metric, at least two guardrails, and the smallest effect that would matter with its reason.

Worksheet fields for this step:

- One primary metric, taken from your metric tree
- At least two guardrails that must not get worse
- The smallest effect that would matter, and why that size — This number decides how much data you need. Choosing it first is what makes the calculation honest.

<details>
<summary>Help with this step</summary>

- **Primary metric:** The one the decision rests on. More than one means whichever moves becomes the primary one afterwards.
- **Guardrail:** Something that must not get worse. It is how you notice that your improvement cost something elsewhere.
- **Smallest effect that matters:** The difference below which you would do nothing. It decides how much data is needed, which is why it is chosen before the calculation.

Stuck starting? Choose the smallest effect you would act on before looking at any traffic figure.

Is it enough? Your effect size came from the problem rather than from what is detectable.

</details>

#### 4. Estimate the requirement

- Estimate the sample needed for that effect and the duration.
- Compare with the traffic you actually have.

**You should end up with:** A sample estimate with your inputs, a duration at your actual traffic, and where that traffic figure comes from.

Worksheet fields for this step:

- The sample needed for that effect, with your inputs and method
- How long that would take at your actual traffic
- The traffic you actually have, and where that number comes from — If you do not know, say so and use a plausible figure labelled as an assumption.

<details>
<summary>Help with this step</summary>

- **Required sample:** How many people each variant needs before a difference of the size you care about could be told apart from noise. Smaller effects need far more people.
- **Duration:** The sample divided by your weekly traffic. It is the number that usually ends the conversation.

Stuck starting? Do the arithmetic with the numbers you have, and label any assumption as an assumption.

Is it enough? Somebody could check your calculation from the inputs you wrote down.

</details>

#### 5. Refuse, and plan the alternative

- Write why you cannot run it and what would change that.
- Plan the qualitative alternative and what it can answer.
- Save the design, the refusal and the alternative.

**You should end up with:** A written refusal with what would change it, a qualitative alternative, and the confounding named for any before-and-after count.

**Try it with help.** Six proposals about the same made up experiment at a tool library, where the calculation showed months of data would be needed. For each one, decide what it would produce.

- Run it for two weeks anyway and see what the numbers say.
  - an honest answer — At this traffic, two weeks cannot distinguish a three-point effect from nothing at all.
  - **noise that will be read as a result** — Whatever difference appears will be noise, and somebody will act on it. This is the outcome the calculation exists to prevent.
  - a different question entirely — It is the same question, asked in a way that cannot answer it.
- Watch three people attempt a booking with each version and record what they do and say.
  - an honest answer — It is honest about its own scope, and it does not answer how often duplicates happen.
  - noise that will be read as a result — Nothing about it is dressed as a measurement, as long as nobody reports three people as a rate.
  - **a different question entirely** — It answers why rather than how much, which is the question that is actually available. Both are worth having and they are not substitutes.
- Count duplicate payments in the provider’s records for the month before and the month after shipping, and state what else changed.
  - **an honest answer** — A complete count rather than a sample, with the confounding stated. It is weaker than an experiment and it is not pretending otherwise.
  - noise that will be read as a result — The risk exists and is managed by naming what else changed in the same sentence.
  - a different question entirely — It is the same question, answered as well as the situation allows.
- Test a much bigger change instead, since a larger effect needs less data.
  - an honest answer — The arithmetic is right and the test now examines something you were not asking about.
  - noise that will be read as a result — It could produce a real result, about a different change.
  - **a different question entirely** — Redesigning the question to fit the available data is how you end up testing what is testable rather than what matters.
- Run it and stop as soon as the difference looks convincing.
  - an honest answer — Stopping when it looks good guarantees that it will look good at some point, whatever is true.
  - **noise that will be read as a result** — Checking repeatedly and stopping on a favourable moment manufactures differences out of noise. It is the commonest way a real test produces a false result.
  - a different question entirely — The question is unchanged; the method has stopped being able to answer it.
- Ship it to everybody, count duplicates for four weeks, and set a condition that would make you reverse it.
  - **an honest answer** — It is not an experiment and it does not claim to be. A named signal, a period and a reversal condition is what the release-plan lesson asked for.
  - noise that will be read as a result — The reversal condition is what keeps it honest: the answer can be no.
  - a different question entirely — It is the same question with the best method available at this size.

**Then:** Now write your own refusal and choose your alternative from the first group.

**What to watch for:** The two that manufacture results do it differently: running an underpowered test produces noise, and stopping when it looks good produces noise on purpose. The honest answers are the ones that say plainly what they are not.

Worksheet fields for this step:

- Why you cannot run it, and what would change that
- The qualitative alternative, and what it can and cannot answer
- For any before-and-after counting: what else could explain a change
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Refusing a test:** Saying it cannot be run and why. It is a professional result, and the alternative is to run one that produces noise somebody will read as a result.
- **Confounding:** Something else that changed at the same time. A before-and-after count is always confounded by whatever else happened that month.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write the refusal in one sentence, then say what would have to change for the test to be possible.

Is it enough? Your alternative says what it cannot answer as clearly as what it can.

</details>

**Save and continue.** Saved for you: Your hypothesis, metrics, calculation, refusal and alternative save as you type, on this device first and then online. Kept outside the app: The sample calculation belongs in a spreadsheet in your own folder with its inputs visible, so somebody can check it rather than trust it. What your creator sees: Your creator reads the refusal and the effect size. An experiment designed to be feasible is the commonest thing to find here. Your next action: Open Your work and choose Ready for review. The next lesson reads numbers somebody else produced.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write “I expect … because … and I would be wrong if …”.

</details>

<details>
<summary>Hint 2</summary>

Choose the one metric that decides the result, then name what must not get worse.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Designing an experiment you cannot run.
Task: Design one A/B test properly — hypothesis, variants, primary and guardrail metrics, required sample and duration — and then write why you cannot run it and what you will do instead.
Challenge one thing at a time, and start with the mistake this lesson is about: “We can run a quick A/B test to settle this.” With low traffic, a short test produces a difference that is noise, and the noise will be read as a result. Designing the test properly is what shows why that would happen.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the hypothesis and ask whether A hypothesis states expectation, reasoning and disproof. Look at the metric choice and ask whether one primary metric and guardrails are chosen in advance. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m15-l04-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** A hypothesis states expectation, reasoning and disproof: A written hypothesis naming what you expect, why, and what result would refute it. One primary metric and guardrails are chosen in advance: A single primary metric from the tree and at least two guardrails. Sample and duration are estimated against real traffic: An estimate with inputs, compared with the traffic actually available. A refusal and a qualitative alternative are written: A written statement of why the test cannot run, what would change it, and what you will do instead.

**Bring forward:** A properly designed experiment with an honest refusal is a stronger portfolio item than a claimed test result nobody can verify. Module handoff: Avoid unsupported impact claims in all case studies


### Practice and pause points

- Read the constraints (~25 min): Read the assigned A/B testing article. Write its stated limits on traffic, duration and simultaneous changes.
- Write the hypothesis and variants (~25 min): State what you expect, why, and what would disprove it. Define exactly one change between the variants.
- Choose metrics (~30 min): Choose one primary metric from your metric tree. Choose guardrails that must not get worse. State the smallest effect that would matter.
- Estimate the requirement (~25 min): Estimate the sample needed for that effect and the duration. Compare with the traffic you actually have.
- Refuse, and plan the alternative (~15 min): Write why you cannot run it and what would change that. Plan the qualitative alternative and what it can answer. Save the design, the refusal and the alternative.

Pause after any step; save the artifact and next action.

**Free tool path.** Written design plus a spreadsheet for the sample calculation. No experimentation platform is involved, and none would help without traffic.

### Output

A written hypothesis with its reasoning; One primary metric and at least two guardrails; A required sample and duration estimate with inputs; A written refusal and a qualitative alternative

### Checks

- Why state the hypothesis before the variants? Answer: Because it makes the result interpretable and capable of being wrong. Comparing two designs to see which wins produces a number with no explanation attached.
- What are guardrail metrics for? Answer: To catch a variant that improves the primary metric by causing harm elsewhere — more completions with more refunds, for instance.
- Why is designing an unrunnable test worth doing? Answer: Because it shows precisely why a quick test would produce noise, and it produces an honest alternative instead of a fake result.

### Rubric and remediation

**A hypothesis states expectation, reasoning and disproof**

Adequate evidence: A written hypothesis naming what you expect, why, and what result would refute it.

- 0 — Two variants with no hypothesis.
- 1 — An expectation without reasoning or disproof.
- 2 — All three present.
- 3 — As adequate, and the reasoning cites a specific research finding.

If below 2: Write “I expect … because … and I would be wrong if …”. Show at recheck: The hypothesis.

**One primary metric and guardrails are chosen in advance**

Adequate evidence: A single primary metric from the tree and at least two guardrails.

- 0 — Several metrics with no primary.
- 1 — A primary without guardrails.
- 2 — One primary and two or more guardrails, chosen before running.
- 3 — As adequate, and the smallest effect worth detecting is stated.

If below 2: Choose the one metric that decides the result, then name what must not get worse. Show at recheck: The metric choice.

**Sample and duration are estimated against real traffic**

Adequate evidence: An estimate with inputs, compared with the traffic actually available.

- 0 — No estimate.
- 1 — An estimate without comparison to real traffic.
- 2 — Both, with the shortfall visible.
- 3 — As adequate, and the estimate includes the article's recommended minimum duration on top of the sample requirement.

If below 2: Estimate the sample for your smallest meaningful effect and set it beside your actual traffic. Show at recheck: The estimate.

**A refusal and a qualitative alternative are written**

Adequate evidence: A written statement of why the test cannot run, what would change it, and what you will do instead.

- 0 — No refusal; the test is presented as runnable.
- 1 — A refusal without an alternative.
- 2 — Both, with what the alternative can and cannot answer.
- 3 — As adequate, and the alternative's confounds are stated.

If below 2: Write the sentence beginning “this cannot run because …” and then plan the conversations you can have. Show at recheck: The refusal and alternative.

### Portfolio contribution

A properly designed experiment with an honest refusal is a stronger portfolio item than a claimed test result nobody can verify.

### Assigned resources

- R68: [NN/g: A/B testing 101](https://www.nngroup.com/articles/ab-testing/) — What an A/B test compares, its traffic and duration requirements, the significance convention, and its inability to explain why. Purpose: Supplies the constraints that make the refusal specific rather than vague. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06; published 30 August 2024. It names no tools, excludes multivariate design and gives no post-test analysis. With no traffic, the honest exercise is the design and the refusal, never a claimed result. Fallback: R37.
- R45: [NN/g: sample sizes for quantitative studies](https://www.nngroup.com/articles/summary-quant-sample-sizes/) — Sample sizes for binary success metrics. Purpose: Gives a basis for the sample estimate while stating its own exclusions. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Binary metrics only; it explicitly does not cover A/B tests, so treat the estimate as an order of magnitude rather than a calculation. Fallback: R37.

## Lesson 5: Reading someone else's numbers

Stable ID: m15-l05-v1. Core. Areas 14. Optional effort ~120 min.

**Objective.** Take a published or supplied set of figures, list the five questions you would need answered before acting on it, and rewrite one of its claims to match what it actually supports.

**Bring forward.** Any real published figures about a product or service.

You will be handed numbers far more often than you will produce them, and the useful skill is asking what they are not telling you.

### Learn

The five questions cover most misreadings. Who was counted decides whether the population is the one you care about. The period decides comparability, since a fortnight containing a holiday is not a normal fortnight. Concurrent changes are the usual reason a number moved. The denominator is the most frequently omitted fact, because a rise in a percentage can come entirely from a fall in the base. And the decision being justified tells you what the number is doing in the room.

None of this requires statistical expertise. It requires refusing to accept a number without its context, which is a habit rather than a technique, and it makes you useful in meetings where everyone else is treating a chart as self-evident.

The chart itself often carries the answer or hides it. The assigned chart guidance names the conventions — a full axis, direct labels, an accessible palette, published underlying data — and a chart that breaks them frequently does so in the direction of its author's argument.

Rewriting a claim to match its support is the exercise. It is the same discipline you applied to your own rates, applied to someone else's, and it is how you learn to do it under pressure with a number you did not produce.

**Common misconception.** “The data speaks for itself.” Data is selected, framed and presented by someone with a purpose. The questions are not an accusation; they are the ordinary work of reading a number.

### Worked example

A published figure claimed a 30 per cent improvement in completions after a redesign. The five questions: who was counted — new visitors only, it turned out, excluding returning ones; what period — four weeks against a comparison period containing a public holiday; what else changed — a marketing campaign ran concurrently; what is the denominator — total visits fell, so completions per visit rose while completions fell; and what decision it justified — further investment in the redesign. The claim was rewritten as: completions per visit rose over four weeks, during which visits fell and a campaign ran, so the redesign's contribution cannot be separated.

#### Reading someone else's numbers

Take a published or supplied set of figures, list the five questions you would need answered before acting on it, and rewrite one of its claims to match what it actually supports.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Any published report or article with figures. The exercise is reading and writing; no data access is needed.

- Starting material: A public report, dashboard screenshot or article with numbers.
- Create HaruCourse/Practice/m15-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Choose the figures

**See it first.** Made-up example. Choosing figures to examine, and choosing something too easy.

- **What I picked first:** An obviously overblown marketing page claiming a 400 per cent improvement, with no numbers behind it at all.
- **What the exercise produced:** Five questions, five absences, and a rewrite that said nothing could be concluded. It took four minutes and taught me nothing.
- **Why it was too easy:** Nobody was going to believe it anyway. The claims that matter are the ones that look careful, from people being honest, where the problem is in what got selected.
- **What I chose instead:** A published case study with real figures, a stated period and a plausible claim, written by somebody who was clearly trying to be accurate.
- **What that found:** New visitors only, a comparison period containing a holiday, and a campaign running at the same time. None of it hidden, none of it mentioned in the claim, and the rewrite was genuinely harder to write.

**The wrong turn:** The wrong turn is picking an obviously bad claim, because it is satisfying and the questions all come back absent. The skill is reading careful work, where the selection is invisible and the author was not trying to mislead anybody.

**What it costs:** A careful source takes an hour rather than four minutes, and you may end up concluding that the claim mostly holds.

**Still unknown:** Still unknown: whether the author knew about the campaign. Nothing in the report says, and the rewrite treats it as a confound rather than as a concealment.

- Find a public report, article or dashboard image with numbers and a claim.
- Write the claim exactly as stated.

**You should end up with:** A real set of figures with a claim, and the claim copied exactly.

Worksheet fields for this step:

- Where the figures came from — A public report, an article, a dashboard image, a case study. Anything with numbers and a claim attached.
- The claim, copied exactly as stated — Exactly. Paraphrasing quietly repairs the parts you are about to examine.

<details>
<summary>Help with this step</summary>

- **A claim:** The sentence the numbers are being used to support. It is what you are examining, rather than the numbers themselves.
- **Copying exactly:** Writing it word for word. Paraphrasing repairs the vagueness you are about to examine, and then the exercise finds nothing.

Stuck starting? Find something with a percentage and a conclusion in the same paragraph.

Is it enough? The claim is in quotation marks and is somebody else’s wording.

</details>

#### 2. Ask the five questions

**See it first.** Made-up example. Reading a published claim about a redesign, and reading it as arithmetic.

- **The claim:** “Completions rose 30 per cent after the redesign.” A clear number and a clear cause, in one sentence.
- **What I checked first:** The arithmetic. It was right: the figures given did produce 30 per cent, and I nearly stopped there.
- **What the who question found:** New visitors only. Returning visitors were excluded, and a redesign is exactly the kind of change that affects the two differently.
- **What the denominator question found:** Completions per visit rose. Total visits fell over the same period, so the number of completed bookings actually went down.
- **What the rewritten claim became:** “Completions per visit among new visitors rose over four weeks, during which total visits fell and a campaign ran, so the redesign’s contribution cannot be separated.” Longer, duller, and the only version that is true.

**The wrong turn:** The wrong turn is checking whether the arithmetic is right, because that is the checkable part and it usually is. Everything that makes a number misleading happens before the arithmetic: who was counted, over what period, against what.

**What it costs:** The rewritten claim is three times as long and has no headline in it, which is why the original was written the way it was.

**Still unknown:** Still unknown: whether the redesign helped at all. Nothing in the published figures could separate it from the campaign, and the honest answer is that it is unknown rather than that it did not.

- Ask who, when, what else changed, what the denominator is, and what decision it serves.
- Record which answers are available and which are absent.

**You should end up with:** Five questions asked of the figures, each with the answer you could find or a note that it is absent.

Worksheet fields for this step, revealed a few at a time in the app:

- Who was counted, and who was excluded?
- What period, and is it comparable to what it is compared with? — Holidays, seasons and campaigns all make two periods incomparable.
- What else changed at the same time? — Almost always something did. An absence of information here is itself an answer.
- What is the denominator? — A rate can rise because the top grew or because the bottom shrank, and those mean opposite things.
- What decision is this number being used to justify?

<details>
<summary>Help with this step</summary>

- **Denominator:** What the number is out of. It is the most commonly missing piece, and a rate can rise because the bottom shrank.
- **An absent answer:** A finding. If a report does not say who was counted, that is information about the report.

Stuck starting? Ask who was counted first. It changes the meaning of everything after it.

Is it enough? Every question has an answer or the word absent beside it.

</details>

#### 3. Examine the presentation

- Check the chart against the assigned conventions.
- Note anything that emphasises or hides part of the picture.

**You should end up with:** Anything in the presentation that emphasises or hides part of the picture.

**Try it with help.** Six presentation choices from a made up report. For each one, decide what it does to the reader.

- A bar chart whose vertical axis begins at 68 rather than 0, showing values of 71 and 74.
  - **makes a small difference look large** — The bars appear to double while the values differ by three. It is the commonest way a chart misleads without stating anything untrue.
  - hides a comparison — Both values are shown; it is their proportions that are distorted.
  - reasonable as drawn — It is sometimes defensible for a line chart of a narrow range, and rarely for bars, where length is the whole message.
- A chart showing the four weeks after a change, with nothing before it.
  - makes a small difference look large — Nothing about the scale is at fault.
  - **hides a comparison** — Without the weeks before, a rise cannot be told from a normal fluctuation. Selecting the window is a choice the chart does not announce.
  - reasonable as drawn — It would be if the previous period were beside it.
- A chart of percentages with no counts anywhere on it.
  - makes a small difference look large — The scale may be honest.
  - **hides a comparison** — Without the counts, a bar built from nine people looks identical to one built from nine hundred. The denominator is the missing comparison.
  - reasonable as drawn — Percentages alone are readable and not checkable.
- A line chart of a stable metric with the axis beginning at zero, so the line is almost flat.
  - makes a small difference look large — It does the opposite: it makes real variation look like nothing.
  - hides a comparison — Everything is present.
  - **reasonable as drawn** — It is the conservative choice and it is defensible. Whether it is the most informative is a different question from whether it misleads.
- Two series on one chart with two different vertical scales, chosen so the lines cross.
  - **makes a small difference look large** — Two independent scales can be set to produce almost any apparent relationship, including one that does not exist.
  - hides a comparison — Both series are visible; what is hidden is that they are not comparable.
  - reasonable as drawn — It is occasionally necessary and it should always be pointed out in the caption.
- A chart annotated with the date a marketing campaign began, alongside the redesign date.
  - makes a small difference look large — Nothing about the scale is involved.
  - hides a comparison — It does the opposite: it shows the reader the confounding rather than leaving them to find it.
  - **reasonable as drawn** — This is what an honest chart of a confounded period looks like, and it is rare enough to be worth noticing.

**Then:** Now look at your own chosen chart and write down what its presentation does.

**What to watch for:** Two of the six are honest and one of those is generous to the reader. What separates them is whether the thing that would complicate the story is on the chart or left off it.

Worksheet fields for this step:

- Anything in the presentation that emphasises or hides part of the picture — A truncated axis, a selected period, a missing comparison, a chart type that flatters one series.

<details>
<summary>Help with this step</summary>

- **Truncated axis:** A chart whose scale does not start at zero, making a small difference look large. Sometimes legitimate and always worth noticing.
- **Selected period:** A window chosen to include or exclude something. The choice is invisible unless you ask what a longer view would show.

Stuck starting? Look at the axis first, then at what period is shown, then at what is missing.

Is it enough? You named something specific about the drawing rather than about the numbers.

</details>

#### 4. Rewrite the claim

- Rewrite it to say only what the figures support.
- Keep it readable; the point is honesty, not hedging.

**You should end up with:** The claim rewritten to say only what the figures support, and still readable.

Worksheet fields for this step:

- The claim, rewritten to say only what the figures support — Readable, not hedged into meaninglessness. The aim is honesty rather than caution.

<details>
<summary>Help with this step</summary>

- **Rewriting rather than hedging:** Saying the smaller true thing, rather than the large thing with qualifications attached. Qualifications get dropped when the claim is repeated.

Stuck starting? Write the version you would be willing to defend to somebody who had the underlying data.

Is it enough? Your rewrite is a sentence somebody would actually read.

</details>

#### 5. Record

- Note which question was most revealing.
- Save the original claim, the questions and the rewrite.

**You should end up with:** Which question was most revealing and why, and the repair the Check questions asked for.

Worksheet fields for this step:

- Which question was most revealing, and why
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **The most revealing question:** The one that changed your reading most. It is usually who was counted or what the denominator is, and knowing which teaches you where to start next time.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Look back at the five answers and find the one that changed the claim most.

Is it enough? You named a question rather than a fact.

</details>

**Save and continue.** Saved for you: The claim, the five answers, the presentation notes and the rewrite save as you type, on this device first and then online. Kept outside the app: Keep a copy or a screenshot of the original in your own folder, since published pages change and the rewrite needs its original beside it. What your creator sees: Your creator reads the original claim beside your rewrite. The gap between them is the whole result of this lesson. Your next action: Open Your work and choose Ready for review. The next lesson puts a count and an observation about the same thing side by side.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Find a real published claim and work through the five questions in writing.

</details>

<details>
<summary>Hint 2</summary>

Mark each answer as stated in the source, inferable, or absent.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Reading someone else's numbers.
Task: Take a published or supplied set of figures, list the five questions you would need answered before acting on it, and rewrite one of its claims to match what it actually supports.
Challenge one thing at a time, and start with the mistake this lesson is about: “The data speaks for itself.” Data is selected, framed and presented by someone with a purpose. The questions are not an accusation; they are the ordinary work of reading a number.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the questioned claim and ask whether five questions are asked of a real published claim. Look at the answer record and ask whether available and unavailable answers are distinguished. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m15-l05-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Five questions are asked of a real published claim: A real claim quoted with all five questions applied. Available and unavailable answers are distinguished: A record of which answers the source provides and which it omits. The presentation is checked against chart conventions: A check of axis, labelling and colour against the assigned guidance. The claim is rewritten to match its support: A rewritten claim that is both honest and readable.

**Bring forward:** A public claim analysed and rewritten is a compact demonstration of quantitative judgement and does not require access to any proprietary data. Module handoff: Avoid unsupported impact claims in all case studies


### Practice and pause points

- Choose the figures (~25 min): Find a public report, article or dashboard image with numbers and a claim. Write the claim exactly as stated.
- Ask the five questions (~30 min): Ask who, when, what else changed, what the denominator is, and what decision it serves. Record which answers are available and which are absent.
- Examine the presentation (~25 min): Check the chart against the assigned conventions. Note anything that emphasises or hides part of the picture.
- Rewrite the claim (~25 min): Rewrite it to say only what the figures support. Keep it readable; the point is honesty, not hedging.
- Record (~15 min): Note which question was most revealing. Save the original claim, the questions and the rewrite.

Pause after any step; save the artifact and next action.

**Free tool path.** Any published report or article with figures. The exercise is reading and writing; no data access is needed.

### Output

Five questions asked of a real set of figures; The answers you could find and the ones you could not; One claim rewritten to match its support; A note of what the chart's presentation emphasised or hid

### Checks

- Which question is most often unanswered? Answer: The denominator. A percentage can rise entirely because the base fell, and the base is frequently absent from the presentation.
- Why ask what else changed? Answer: Because something almost always did — a campaign, a season, a release — and without that the change is attributed to whatever the author was arguing for.
- Is asking these questions hostile? Answer: No, it is ordinary reading. Numbers are selected and framed by people, and treating a chart as self-evident is how bad decisions get made confidently.

### Rubric and remediation

**Five questions are asked of a real published claim**

Adequate evidence: A real claim quoted with all five questions applied.

- 0 — An invented example.
- 1 — A real claim with fewer than five questions.
- 2 — A real claim with all five asked.
- 3 — As adequate, and a sixth question specific to the domain is added.

If below 2: Find a real published claim and work through the five questions in writing. Show at recheck: The questioned claim.

**Available and unavailable answers are distinguished**

Adequate evidence: A record of which answers the source provides and which it omits.

- 0 — Answers guessed.
- 1 — Answers given without distinguishing found from assumed.
- 2 — Clear separation of available and absent.
- 3 — As adequate, and the absent ones are ranked by how much they matter.

If below 2: Mark each answer as stated in the source, inferable, or absent. Show at recheck: The answer record.

**The presentation is checked against chart conventions**

Adequate evidence: A check of axis, labelling and colour against the assigned guidance.

- 0 — Presentation not examined.
- 1 — Examined impressionistically.
- 2 — Checked against specific conventions with findings.
- 3 — As adequate, and a presentation choice is linked to the argument it supports.

If below 2: Compare the chart with the guidance's rules for axes and labelling and note the breaches. Show at recheck: The presentation check.

**The claim is rewritten to match its support**

Adequate evidence: A rewritten claim that is both honest and readable.

- 0 — Not rewritten.
- 1 — Rewritten into unreadable hedging.
- 2 — Rewritten to say what is supported, clearly.
- 3 — As adequate, and the rewrite is shorter than the original.

If below 2: Write the sentence the figures actually support, then cut it until it reads well. Show at recheck: The rewritten claim.

### Portfolio contribution

A public claim analysed and rewritten is a compact demonstration of quantitative judgement and does not require access to any proprietary data.

### Assigned resources

- R63: [UK Analysis Function: data visualisation charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/) — Axes, gridlines, direct labelling, colour contrast and publishing the underlying data. Purpose: Supplies the conventions against which a published chart is checked. Effort: 45–60 selected min. Free reading, no account. Verified 2026-09-06; published 19 May 2022. Written for government statistics; it excludes interactive dashboards. Fallback: R29.
- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Using performance data and what it can support. Purpose: Frames the five questions as ordinary practice rather than scepticism. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Government context; the questions transfer to any published figure. Fallback: R07.

## Lesson 6: Numbers and conversations together

Stable ID: m15-l06-v1. Core. Areas 14. Optional effort ~120 min.

**Objective.** Take one quantitative finding and one qualitative finding about the same behaviour, and write what each explains that the other cannot.

**Bring forward.** Your funnel, your m05 findings and your m10 test results.

Numbers show where and how much; conversations show why. Used alone, each produces a confident wrong answer of a different kind.

### Learn

The division of labour is clean. A count tells you that people stop at a step and roughly how many; it cannot tell you what they were thinking. A conversation tells you what someone believed and expected; it cannot tell you how many people share that belief. Used together, each covers the other's blind spot, which is why the strongest evidence in any product argument is usually one of each.

The order does not matter but the pairing does. If a number surprises you, go and watch three people; if three people surprise you, look for a count that indicates whether it is widespread. Neither step is expensive at your scale, and the pair is far more persuasive than either alone.

A count without a mechanism cannot be acted on. Knowing that people leave at payment tells nobody what to change, and teams presented with that fact alone tend to change something visible and re-measure hopefully. That is how products acquire changes nobody can explain.

Contradictions are informative. If your count suggests a problem is rare and your conversations suggest it is severe, both may be right: rare and severe is a real category, and it is the one most often dismissed by whichever evidence type the team prefers.

**Common misconception.** “Quantitative evidence is more objective.” It is more precise about different things. A precisely counted event whose cause nobody understands is not more objective than three careful observations of why it happens.

### Worked example

The pairing: the synthetic funnel showed the largest drop between opening a class and starting a booking; the m05 observation showed a participant checking the price against a screenshot from a friend, twice, because the displayed price did not match what she remembered. The count located the problem, the observation supplied a mechanism, and together they produced a specific change — showing the price consistently and earlier. Written separately, the count would have produced a redesign of the booking button and the observation would have been dismissed as one person.

#### Numbers and conversations together

Take one quantitative finding and one qualitative finding about the same behaviour, and write what each explains that the other cannot.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Your existing findings and a written comparison. No new data collection is required.

- Starting material: One count and one qualitative finding about the same thing.
- Create HaruCourse/Practice/m15-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Pair the findings

- Choose one count and one observation about the same behaviour.
- State what each says on its own.

**You should end up with:** One count and one observation about the same behaviour, each stated on its own terms.

Worksheet fields for this step:

- The count, and what it says on its own — From your funnel, your provider’s records, or anything you can count. Say if it is synthetic.
- The observation, and what it says on its own — From your own sessions. One person doing one thing, described as what they did rather than what it means.
- How you know they are about the same behaviour

<details>
<summary>Help with this step</summary>

- **Quantitative:** Counting. It shows scale and location: how many, and where.
- **Qualitative:** Watching and asking. It shows mechanism: what happened and why, for the people you watched.

Stuck starting? Start from whichever you already have and look for its pair.

Is it enough? Both are about the same behaviour rather than about the same screen.

</details>

#### 2. Write the gaps

**See it first.** Made-up example. Pairing a count and an observation at a tool library, and dismissing the one with fewer people in it.

- **What I had:** A synthetic funnel showing the largest drop between opening a tool and starting a booking. And one session where somebody checked the price twice against a screenshot from a friend.
- **What I did with the observation:** Set it aside. One person, one session, and the funnel was about everybody. The count felt like the serious evidence.
- **What the count alone produced:** A plan to redesign the booking button, because that is what sits at the step where people stop. Two weeks of work aimed at the nearest visible thing.
- **What the observation supplied:** A mechanism: the price shown on the listing did not match the price at the next step, so she went back to check. The button was never the problem.
- **What the two together produced:** Show the same price in both places, earlier. The count said it was worth doing, the observation said what to do, and neither would have produced it alone.

**The wrong turn:** The wrong turn is ranking the evidence by how many people are in it, because that is the obvious comparison and it is the wrong axis. A count with no mechanism produces a redesign of whatever is nearest the drop.

**What it costs:** Acting on one observation means acting on a mechanism you have seen once, and it may be rare. The count is what says the area is worth the work.

**Still unknown:** Still unknown: how many people meet the price mismatch. One person did; the funnel cannot see the reason; and the change is cheap enough that the pair is enough to justify it.

- Write what the count cannot tell you.
- Write what the observation cannot tell you.
- Check the two gaps are genuinely different.

**You should end up with:** What each finding cannot tell you, and how the two gaps differ.

Worksheet fields for this step:

- What the count cannot tell you
- What the observation cannot tell you
- How the two gaps differ — If they are the same gap, the two findings are not complementary and one of them is the wrong pair.

<details>
<summary>Help with this step</summary>

- **A count without a mechanism:** A problem you cannot fix, because nothing says what causes it. It produces redesigns of whatever is nearest.
- **A mechanism without a count:** A problem you cannot prioritise, because nothing says how often. It produces work on whatever was most vivid.

Stuck starting? Write what each one cannot tell you before writing anything about what they mean together.

Is it enough? The two gaps are genuinely different: one about why, one about how many.

</details>

#### 3. Propose a change from both

- Write a change that neither finding alone would have produced.
- State which part of the evidence supports which part of the change.

**You should end up with:** A change neither finding alone would have produced, with which evidence supports which part.

**Try it with help.** Six questions about a made up tool library. For each one, decide which kind of evidence can answer it.

- How many people were charged twice last month?
  - **counting** — A complete count from the payment records. Nothing about watching would produce the number.
  - watching or asking — You would have to watch an implausible number of people to establish a rate.
  - neither on its own — The record has it.
- Why did those people pay a second time?
  - counting — No count contains a reason. The record shows two payments and nothing about what the person believed.
  - **watching or asking** — Three conversations would produce a mechanism, which is the thing that tells you what to change.
  - neither on its own — Asking works here, as long as nobody reports three people as a rate.
- At which step do most people stop?
  - **counting** — A funnel answers exactly this and nothing else.
  - watching or asking — Watching five people tells you where five people stopped.
  - neither on its own — It is the clearest case for counting there is.
- Is this worth two weeks of work?
  - counting — A count says how often. It says nothing about how bad it is when it happens.
  - watching or asking — An observation says how bad it is for one person and nothing about how many.
  - **neither on its own** — Prioritising needs both: how often, from counting, and how much harm, from watching. This is the question the pair exists for.
- Does the phrase place held mean anything to people?
  - counting — No behaviour distinguishes somebody who understood it from somebody who ignored it.
  - **watching or asking** — Asking three people to say what it means in their own words answers it in ten minutes.
  - neither on its own — Asking is sufficient, and the answer applies to the people you asked.
- Is the problem worse on phones than on laptops?
  - **counting** — A split by device answers it, if the data has one. Without the split it is unanswerable by any method.
  - watching or asking — You could watch people on both, and you would need a great many to compare rates.
  - neither on its own — It is a comparison of frequencies, which is what counting is for.

**Then:** Now write your own change, and say which half of your evidence supports which half of it.

**What to watch for:** The one worth remembering is whether something is worth two weeks. Frequency comes from counting and severity comes from watching, and prioritising needs both, which is why single-method decisions go wrong in two opposite ways.

Worksheet fields for this step:

- A change neither finding alone would have produced
- Which part of the evidence supports which part of the change

<details>
<summary>Help with this step</summary>

- **A change that needed both:** One where the count says the area matters and the observation says what to do. Either alone produces a different and usually worse change.

Stuck starting? Write the change first, then go back and label which evidence supports which part.

Is it enough? Removing either finding would change the proposal.

</details>

#### 4. Look for contradiction

**See it first.** Made-up example. Finding a disagreement between a tool-library count and an observation, and explaining it away.

- **The disagreement:** The records show eleven duplicate payments in March. In three sessions, all three people said they would have paid again if they were not being watched, and none of them did.
- **What I wrote at first:** That the sessions were unrepresentative, and eleven is the real number. It resolved the disagreement and let me move on.
- **What that discarded:** The most interesting thing in the study. Three of three saying they would have paid again, against eleven recorded, suggests the records are not counting everybody it happens to.
- **What would explain it:** A second payment made on a different card, or by somebody ringing the library, would not appear as a duplicate in the provider’s records at all.
- **What I did:** Kept both, wrote the possible explanation, and added one question to the next three sessions: what did you actually do next? The count may be an undercount, which is a finding neither method produced alone.

**The wrong turn:** The wrong turn is resolving a contradiction by declaring one side unrepresentative, because the small sample is always the easier one to dismiss. A disagreement between methods is usually about what each one can see.

**What it costs:** Keeping the contradiction means the report has no single number in it and ends with a question rather than a figure.

**Still unknown:** Still unknown: whether the records undercount, and by how much. Three people cannot establish it, and the next three sessions have a question that might.

- Check whether the two disagree in any respect.
- If they do, keep both and write what would explain the disagreement.

**You should end up with:** Any disagreement between the two findings, kept, with what would explain it.

Worksheet fields for this step:

- Any respect in which the two disagree — Keep it. A contradiction is a finding, not an error to be resolved by picking the number.
- What would explain the disagreement

<details>
<summary>Help with this step</summary>

- **Contradiction:** The two findings disagreeing. It is a finding in itself, and resolving it by picking the number discards the more interesting half.

Stuck starting? Look for the place where the observation suggests something the count does not show.

Is it enough? Any contradiction is written down rather than resolved by preference.

</details>

#### 5. Record

- Write which finding you would have trusted alone, and why that would have been wrong.
- Save the pairing and the proposal.

**You should end up with:** One line each on what the count added and what the observation added, and the repair the Check questions asked for.

Worksheet fields for this step:

- In one line each: what the count added and what the observation added
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **What each added:** The specific contribution of each method to this decision. It is the sentence that makes the pairing repeatable.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write both lines in the form: without this, I would have ….

Is it enough? Neither line could be written about the other method.

</details>

**Save and continue.** Saved for you: Your paired findings, the gaps, the proposal and any contradiction save as you type, on this device first and then online. Kept outside the app: Session notes stay in your own private folder. Nothing identifying anybody belongs in this worksheet. What your creator sees: Your creator reads the contradiction and the two gaps. A pairing with no contradiction and identical gaps usually means the two findings were the same finding. Your next action: Open Your work and choose Ready for review. The next lesson decides what should be recorded about people at all.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Pick the behaviour first, then find the count and the observation about it.

</details>

<details>
<summary>Hint 2</summary>

For each finding write the question it cannot answer; if the two questions match, you have paired the wrong findings.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Numbers and conversations together.
Task: Take one quantitative finding and one qualitative finding about the same behaviour, and write what each explains that the other cannot.
Challenge one thing at a time, and start with the mistake this lesson is about: “Quantitative evidence is more objective.” It is more precise about different things. A precisely counted event whose cause nobody understands is not more objective than three careful observations of why it happens.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the paired findings and ask whether both findings concern the same behaviour. Look at the gap statements and ask whether the gaps of each are stated and genuinely different. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m15-l06-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Both findings concern the same behaviour: A count and an observation about one behaviour, each stated. The gaps of each are stated and genuinely different: A written gap per finding, describing different kinds of ignorance. A change proposal draws on both: A proposal with each element traced to the count or the observation. Contradictions are kept and explained rather than resolved away: Any disagreement recorded with a candidate explanation.

**Bring forward:** A paired finding with a traced proposal is exactly what mixed-methods competence looks like on a page, and it is rare in junior portfolios. Module handoff: Avoid unsupported impact claims in all case studies


### Practice and pause points

- Pair the findings (~25 min): Choose one count and one observation about the same behaviour. State what each says on its own.
- Write the gaps (~30 min): Write what the count cannot tell you. Write what the observation cannot tell you. Check the two gaps are genuinely different.
- Propose a change from both (~25 min): Write a change that neither finding alone would have produced. State which part of the evidence supports which part of the change.
- Look for contradiction (~25 min): Check whether the two disagree in any respect. If they do, keep both and write what would explain the disagreement.
- Record (~15 min): Write which finding you would have trusted alone, and why that would have been wrong. Save the pairing and the proposal.

Pause after any step; save the artifact and next action.

**Free tool path.** Your existing findings and a written comparison. No new data collection is required.

### Output

One quantitative and one qualitative finding about the same behaviour; What each explains that the other cannot; A change proposal that needed both; Any contradiction between them, kept rather than resolved

### Checks

- What does a count contribute that a conversation cannot? Answer: Scale and location: how many, and where. A conversation cannot establish either, however clear the mechanism it reveals.
- What happens when only a count is available? Answer: Teams change something visible and re-measure hopefully, because the number identifies a place without identifying a cause.
- What does a contradiction between the two mean? Answer: Often that the problem is rare and severe, or common and mild. Both are real categories, and dropping one source to resolve the tension loses the finding.

### Rubric and remediation

**Both findings concern the same behaviour**

Adequate evidence: A count and an observation about one behaviour, each stated.

- 0 — Two unrelated findings.
- 1 — Loosely related findings.
- 2 — Both concern the same behaviour precisely.
- 3 — As adequate, and the behaviour is one your metric tree already names.

If below 2: Pick the behaviour first, then find the count and the observation about it. Show at recheck: The paired findings.

**The gaps of each are stated and genuinely different**

Adequate evidence: A written gap per finding, describing different kinds of ignorance.

- 0 — Gaps not stated.
- 1 — Gaps stated but essentially the same.
- 2 — Two genuinely different gaps.
- 3 — As adequate, and each gap names what method would fill it.

If below 2: For each finding write the question it cannot answer; if the two questions match, you have paired the wrong findings. Show at recheck: The gap statements.

**A change proposal draws on both**

Adequate evidence: A proposal with each element traced to the count or the observation.

- 0 — A proposal from one source.
- 1 — Both cited without tracing.
- 2 — Each element traced to its source.
- 3 — As adequate, and the write-up says what the proposal would have been from each source alone.

If below 2: Write the change, then annotate which finding supports each part of it. Show at recheck: The traced proposal.

**Contradictions are kept and explained rather than resolved away**

Adequate evidence: Any disagreement recorded with a candidate explanation.

- 0 — Contradiction dropped.
- 1 — Noted without explanation.
- 2 — Kept with an explanation and what would settle it.
- 3 — As adequate, and the rare-and-severe possibility is considered explicitly.

If below 2: Look for where the count and the observation imply different urgencies, and write why both could be true. Show at recheck: The contradiction note.

### Portfolio contribution

A paired finding with a traced proposal is exactly what mixed-methods competence looks like on a page, and it is rare in junior portfolios.

### Assigned resources

- R04: [GOV.UK: analyse a research session](https://www.gov.uk/service-manual/user-research/analyse-a-research-session) — Turning observations into findings and decisions. Purpose: Supplies the qualitative half of the pairing and its discipline. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. It does not discuss quantitative work; the pairing is this lesson's own. Fallback: R08.
- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Choosing measures and interpreting them alongside other evidence. Purpose: Supplies the quantitative half and warns against reading numbers alone. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Government context with real data; your counts remain small or synthetic and must be labelled. Fallback: R07.

## Lesson 7: What to record, and what to refuse to record

Stable ID: m15-l07-v1. Core. Areas 14. Optional effort ~120 min.

**Objective.** Write an instrumentation plan naming every event you would record, why, how long it is kept, and at least two things you will deliberately not collect.

**Bring forward.** Your metric tree and your m05 data plan.

Every measurement is a collection of somebody's behaviour. Designers are frequently the only person in the room who asks whether it should be collected at all.

### Learn

Instrumentation grows by default: it is easier to record everything and decide later, and that is exactly the habit that produces a store of behavioural data with no stated purpose and no deletion date. Tying every event to a question from your metric tree keeps the collection proportionate and makes it defensible.

Purpose, owner and retention should be recorded per event, in the same way your m05 data plan recorded them for research material. An event nobody can name a purpose for should not be collected; an event with no retention period will be kept indefinitely by default.

Some data is riskier than its usefulness justifies. Free text can contain anything, including things people did not intend to disclose; precise location is identifying in combination with almost anything; and identifiers that link sessions turn anonymous counts into personal records. The design question is whether the answer you get is worth what you now hold.

Refusal is a design act. Writing down what you chose not to collect, and why, is what makes the decision visible later when someone asks why the dashboard cannot answer a question. It also gives you a defensible position when the request is for something intrusive: not a preference, but a recorded decision with a reason.

**Common misconception.** “Collect everything now, decide later.” Later never arrives, and in the meantime you hold data you cannot justify, cannot delete confidently and must protect. Deciding first is cheaper and safer.

### Worked example

The plan listed nine events, each tied to a node in the metric tree, with a purpose, an owner and a retention period of ninety days. Two refusals were recorded: no free-text capture from the search box, because the question it would answer did not justify holding whatever people type; and no precise location, since the coarse area answered the only question that mattered. One event was reduced rather than removed: rather than recording the exact class booked, it recorded that a booking occurred, since the identity of the class answered no question in the tree.

#### What to record, and what to refuse to record

Write an instrumentation plan naming every event you would record, why, how long it is kept, and at least two things you will deliberately not collect.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A written plan. Whether it is ever implemented is a separate question; the reasoning is the deliverable.

- Starting material: Your metric tree and privacy plan.
- Create HaruCourse/Practice/m15-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Derive events from questions

- For each observable node in your tree, name the event that would indicate it.
- Discard any event with no question behind it.

**You should end up with:** An event for each observable node, derived from the question it answers, with anything unmotivated discarded.

Worksheet fields for this step:

- For each observable node in your tree: the event that would indicate it — Start from the question. An event with no question behind it does not go on the list.
- Events you discarded because nothing was asking for them

<details>
<summary>Help with this step</summary>

- **Instrumentation plan:** The written list of what gets recorded about people, why, and for how long. Writing it is often the only moment anybody asks whether it should be recorded at all.
- **Event:** One thing being recorded when it happens. It should exist because a named question needs it, not because it might be useful.

Stuck starting? Take the observable nodes from your tree and write the event each one needs.

Is it enough? Every event on the list can name the question it answers.

</details>

#### 2. Add purpose, owner and retention

**See it first.** Made-up example. Planning what to record for a tool library, and planning to decide later.

- **What I proposed:** Record everything available now and work out what we need once we have some data. It is what everybody suggests and it sounds cautious.
- **What that produced in three months:** Forty-one events, eleven of which nobody could explain, including the full text of every search and the exact street-level location of every session.
- **Why nobody removed them:** Removing data feels risky, because somebody might be using it. With no purpose written against each event, nobody could tell whether anybody was.
- **What it cost:** Three months of holding search text and locations that answered no question, that had to be protected, and that could not be confidently deleted.
- **What deciding first produced instead:** Nine events, each tied to a node in the tree, each with a purpose, an owner and ninety days. Anything not on the list is not collected, which is a much easier rule to hold.

**The wrong turn:** The wrong turn is collecting first and deciding later, because it is the cautious-sounding option and later never arrives. In the meantime you hold data you cannot justify, cannot confidently delete and must protect.

**What it costs:** Deciding first means that in six months a question will arrive that the data cannot answer, and you will have to wait ninety days to answer it.

**Still unknown:** Still unknown: which question that will be. The cost of waiting for it is smaller and more visible than the cost of holding everything.

- Write why each event is collected and who is responsible.
- Set a retention period and a deletion mechanism.

**You should end up with:** A purpose, an owner and a retention period for every event, with a deletion mechanism.

Worksheet fields for this step:

- For each event: why it is collected and who is responsible for it
- How long each is kept, and how it is deleted — A retention period with no deletion mechanism is a wish. Say what actually removes it.

<details>
<summary>Help with this step</summary>

- **Retention:** How long it is kept before deletion. Data with no retention period is kept for ever by default, which is a decision made by nobody.
- **Owner:** The person responsible for it. Without a name, nobody reviews it, nobody deletes it, and nobody can answer a question about it.

Stuck starting? Write the purpose and the owner before the retention period; the period follows from what it is for.

Is it enough? Every event has a name against it and a period with a mechanism.

</details>

#### 3. Assess risk

- Mark any free text, location or cross-session identifier.
- For each, ask whether the answer justifies holding it.

**You should end up with:** Free text, location and cross-session identifiers marked, with a judgement on whether the answer justifies holding each.

**Try it with help.** Six proposed events for a made up tool library. For each one, decide what the plan should do with it.

- That a booking was completed, with the date.
  - **collect it** — It answers a node in the tree directly, contains nothing about anybody, and is the smallest form of the thing.
  - reduce it — There is very little left to remove.
  - refuse it — Without it, nothing in the tree can be observed at all.
- The full text of everything typed into the search box.
  - collect it — People type names, addresses and all sorts of things into search boxes, and you cannot know in advance what arrives.
  - reduce it — A reduced version exists — whether a search returned results — and it is a different event answering a different question.
  - **refuse it** — The question it would answer is what people look for, which is interesting and does not justify holding whatever anybody types.
- Which specific tool was booked, on every booking.
  - collect it — Nothing in the tree asks which tool, so it is being collected because it is available.
  - **reduce it** — Record that a booking happened. The identity of the tool answers no question you have written down, and can be added later if one appears.
  - refuse it — It is not risky in itself, so refusing it outright is stronger than needed.
- Precise location at the moment of booking.
  - collect it — Street-level location is among the most sensitive things you can hold, and nothing in the tree needs it.
  - reduce it — A coarse area answers the only question that mattered, which makes the reduced version a different and acceptable event.
  - **refuse it** — Refusing the precise version and recording the coarse one, if anything, is the right shape. The refusal is worth documenting either way.
- Whether a search returned any results.
  - **collect it** — It answers a real question — do people find what they came for — and contains nothing about what they typed.
  - reduce it — It is already the reduced form of the search-text event.
  - refuse it — It carries no personal content at all.
- An identifier linking every session by the same person over two years.
  - collect it — Two years of one person’s history is a different kind of data from a set of events, with different obligations.
  - **reduce it** — A session identifier that expires, or a ninety-day window, answers the returning-visitor question in the tree without building a two-year history.
  - refuse it — Refusing entirely loses the returning-visitor distinction, which an earlier lesson showed the funnel genuinely needs.

**Then:** Now mark your own events the same way, and write the reason beside every refusal and reduction.

**What to watch for:** Reducing is the answer more often than refusing. Most risky events have a smaller version that answers the actual question, and finding it is usually five minutes of thinking about what the question was.

Worksheet fields for this step:

- Any free text, location or cross-session identifier, marked
- For each: whether the answer justifies holding it — Ask what question it answers and what you would do differently with the answer. If neither is clear, it does not justify it.

<details>
<summary>Help with this step</summary>

- **Free text:** Anything a person types. It can contain names, addresses, health details and anything else, which is why it is the highest-risk thing to record.
- **Cross-session identifier:** Something linking a person’s visits together. It turns a set of anonymous events into a history of one individual, which is a different decision with different obligations.

Stuck starting? Go through the list and mark anything a person typed, anywhere they were, or anything linking visits.

Is it enough? Every marked item has a judgement rather than a note to think about it later.

</details>

#### 4. Refuse and reduce

**See it first.** Made-up example. Refusing to record something at a tool library, and refusing it on instinct.

- **What I wrote:** No location data. It felt intrusive and I did not want to hold it.
- **What happened when it was proposed again:** Somebody asked which collection branch people were nearest, which is a reasonable planning question. My refusal said nothing about questions, so it had nothing to say back.
- **Why the instinct version failed:** A refusal with no reasoning reads as squeamishness. Six weeks later somebody with a good question wins the argument, and the precise version is what gets built.
- **What I wrote instead:** No precise location. The question is which branch people are nearest, and a coarse area answers it. Precise location answers nothing extra and is among the most sensitive things we could hold.
- **What that version could do:** It survived the second proposal, because it accepted the question and refused only the part that answered nothing.

**The wrong turn:** The wrong turn is refusing on instinct, because the instinct is usually right and the argument is not written down. A refusal with no question in it loses to the first colleague who has one.

**What it costs:** Naming the question means conceding that the data would be useful for something, which feels like weakening your own position.

**Still unknown:** Still unknown: whether coarse areas are coarse enough. It depends on how thinly people are spread, and the plan says the judgement rather than pretending it is settled.

- Record at least two things you will not collect, with reasons.
- Reduce one event to the minimum that answers its question.

**You should end up with:** At least two documented refusals with reasons, and one event reduced to the minimum that answers its question.

Worksheet fields for this step:

- At least two things you will deliberately not collect, with reasons
- One event reduced to the minimum that answers its question

<details>
<summary>Help with this step</summary>

- **Documented refusal:** Writing down what you decided not to collect and why. It stops the same thing being proposed as a new idea every quarter.
- **Reduction:** Keeping the part that answers the question and dropping the rest. It is usually available and usually overlooked.

Stuck starting? For each refusal, write what question it would have answered, so the refusal is arguable rather than squeamish.

Is it enough? Both refusals name a question and say why the answer did not justify the collection.

</details>

#### 5. Check jurisdiction

- Note that legal requirements differ by country and that you have not verified Indian requirements here.
- Save the plan with the refusals.

**You should end up with:** A written note that legal requirements differ by country and that you have not verified them here.

Worksheet fields for this step:

- The note saying legal requirements differ by country and that you have not verified them — This lesson teaches the reasoning. It is not legal advice and the plan should say so.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Jurisdiction:** Where the rules apply. Requirements differ by country, and this lesson teaches reasoning rather than law.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write one sentence saying what this plan is and what it is not.

Is it enough? Nobody could mistake the plan for a legal review.

</details>

**Save and continue.** Saved for you: Your event list, purposes, retention periods, refusals and reductions save as you type, on this device first and then online. Kept outside the app: Nothing about real people belongs in this worksheet. The plan describes what would be collected, not any collected data. What your creator sees: Your creator reads the refusals and the reduction. A plan with no refusals in it usually means nothing was examined. Your next action: Open Your work and choose Ready for review. The next lesson looks at a number moving over time and asks what else was happening.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Delete any event you cannot attach to a node, and record that you did.

</details>

<details>
<summary>Hint 2</summary>

Complete the three fields for each event; anything without a purpose should not be collected.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: What to record, and what to refuse to record.
Task: Write an instrumentation plan naming every event you would record, why, how long it is kept, and at least two things you will deliberately not collect.
Challenge one thing at a time, and start with the mistake this lesson is about: “Collect everything now, decide later.” Later never arrives, and in the meantime you hold data you cannot justify, cannot delete confidently and must protect. Deciding first is cheaper and safer.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the traced event list and ask whether every event traces to a question in the metric tree. Look at the completed plan and ask whether purpose, owner and retention are recorded per event. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m15-l07-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every event traces to a question in the metric tree: An event list with a tree node beside each entry. Purpose, owner and retention are recorded per event: Three fields completed for every event, with a deletion mechanism. At least two refusals are documented with reasons: Two things deliberately not collected, each with the reasoning. One event is reduced to the minimum that answers its question: An event narrowed, with what was dropped and why it was unnecessary.

**Bring forward:** An instrumentation plan with documented refusals is unusual in a design portfolio and signals that you think about the people behind the numbers. Module handoff: Avoid unsupported impact claims in all case studies


### Practice and pause points

- Derive events from questions (~25 min): For each observable node in your tree, name the event that would indicate it. Discard any event with no question behind it.
- Add purpose, owner and retention (~30 min): Write why each event is collected and who is responsible. Set a retention period and a deletion mechanism.
- Assess risk (~25 min): Mark any free text, location or cross-session identifier. For each, ask whether the answer justifies holding it.
- Refuse and reduce (~25 min): Record at least two things you will not collect, with reasons. Reduce one event to the minimum that answers its question.
- Check jurisdiction (~15 min): Note that legal requirements differ by country and that you have not verified Indian requirements here. Save the plan with the refusals.

Pause after any step; save the artifact and next action.

**Free tool path.** A written plan. Whether it is ever implemented is a separate question; the reasoning is the deliverable.

### Output

An event list tied to metric-tree questions; A purpose, owner and retention period per event; At least two documented refusals with reasons; One event reduced rather than removed

### Checks

- Why tie every event to a question? Answer: Because collection grows by default otherwise, producing data with no purpose, no deletion date and a protection obligation nobody planned for.
- What makes free text risky? Answer: It can contain anything, including information people did not intend to disclose. The question it answers rarely justifies holding whatever someone types.
- Why document a refusal? Answer: So the decision is visible later, and so the position is a recorded reason rather than a preference when the request returns.

### Rubric and remediation

**Every event traces to a question in the metric tree**

Adequate evidence: An event list with a tree node beside each entry.

- 0 — Events listed by what is easy to record.
- 1 — Some traced, others speculative.
- 2 — Every event traces to a named question.
- 3 — As adequate, and speculative events were discarded explicitly.

If below 2: Delete any event you cannot attach to a node, and record that you did. Show at recheck: The traced event list.

**Purpose, owner and retention are recorded per event**

Adequate evidence: Three fields completed for every event, with a deletion mechanism.

- 0 — None recorded.
- 1 — Purpose only.
- 2 — All three with a deletion mechanism.
- 3 — As adequate, and the retention periods differ by risk rather than being uniform.

If below 2: Complete the three fields for each event; anything without a purpose should not be collected. Show at recheck: The completed plan.

**At least two refusals are documented with reasons**

Adequate evidence: Two things deliberately not collected, each with the reasoning.

- 0 — No refusals.
- 1 — Refusals implied by absence.
- 2 — Two documented with reasons.
- 3 — As adequate, and one refusal concerns something a stakeholder would plausibly request.

If below 2: Write what you could collect and chose not to, and why the answer was not worth the holding. Show at recheck: The refusal list.

**One event is reduced to the minimum that answers its question**

Adequate evidence: An event narrowed, with what was dropped and why it was unnecessary.

- 0 — No reduction.
- 1 — Reduced without stating what was dropped.
- 2 — Reduced with the dropped detail and its reason.
- 3 — As adequate, and the reduction removes an identifying element.

If below 2: Take your richest event and ask what the question actually needs; drop the rest. Show at recheck: The reduced event.

### Portfolio contribution

An instrumentation plan with documented refusals is unusual in a design portfolio and signals that you think about the people behind the numbers.

### Assigned resources

- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Choosing what to measure and why. Purpose: Keeps the event list tied to questions rather than to availability. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. It does not address data-protection obligations, which differ by jurisdiction and are not verified here for India. Fallback: R07.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The point on creating a secure service which protects users' privacy. Purpose: Places collection decisions inside a stated set of obligations. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. UK government obligations; check Indian requirements from a primary source before implementing anything. Fallback: R07.

## Lesson 8: Time, cohorts and the number that moved by itself

Stable ID: m15-l08-v1. Core. Areas 14. Optional effort ~120 min.

**Objective.** Take one metric over time, identify what could make it move without any design change, and rework a comparison into a cohort that controls for one of them.

**Bring forward.** Your funnel and metric tree.

Most numbers move for reasons nobody designed, and attributing that movement to your work is the easiest mistake to make and the hardest to retract.

### Learn

A metric is a sum of behaviour from many causes. Term dates, festivals, weather, a mention somewhere, a campaign, a competitor's outage — each moves numbers without anyone touching the design. Before attributing a change to your work, listing what else was happening is the minimum honest step, and it frequently produces a better explanation than the one you were hoping for.

Mixing new and returning people is the commonest hidden confound in a product metric. New people are learning; returning people are executing. A change that helps beginners and slows experts can leave the combined number flat, which is the shape most likely to be reported as no effect when in fact there were two.

A cohort is the practical response: take the people who arrived in one week and follow them, then compare with the people who arrived in another. It does not control for everything, and it removes the largest and most common distortion, which is that the mix of people changed rather than their behaviour.

The limitations paragraph is the part that matters most here. Even a cohort comparison at your scale cannot separate a design change from a concurrent campaign, and saying so is what keeps the analysis useful rather than persuasive.

**Common misconception.** “The number went up after we shipped, so the change worked.” Something else also happened in that period, always. Naming the alternatives is not pedantry; it is the difference between a finding and a coincidence you have committed to.

### Worked example

The synthetic funnel was extended over eight weeks. Completions rose in week five, when the design shipped — and also when a local festival ended and a provider's promotion ran. Three non-design explanations were listed. The comparison was reworked as a cohort: people arriving in week two versus week six, followed for their first fourteen days, which removed the effect of the changing mix of new and returning visitors. The write-up stated plainly that the promotion could not be separated, that the numbers were synthetic, and that the exercise demonstrates the method rather than a result.

#### Time, cohorts and the number that moved by itself

Take one metric over time, identify what could make it move without any design change, and rework a comparison into a cohort that controls for one of them.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A spreadsheet with your synthetic counts split by arrival week. No analytics tool is required.

- Starting material: Your funnel with its synthetic counts.
- Create HaruCourse/Practice/m15-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Extend the metric over time

**See it first.** Made-up example. Plotting a tool-library metric over time, and plotting two points.

- **What I drew:** The month before and the month after. Two bars, the second taller, and the change marked between them.
- **What it showed:** A clear rise. It is the chart that appears in most before-and-after reports and it is almost impossible to read as anything else.
- **What eight periods showed instead:** The metric moved by a similar amount in four of the eight weeks, in both directions, with nothing shipped in any of them.
- **What that did to the two-bar chart:** It became one of several similar movements rather than an event. The rise was still there; what had gone was the reason to think it meant anything.
- **What I learned about the shape:** Two points always look like a change, because two points always differ. Eight points show what normal variation is, which is the thing you need before you can call anything unusual.

**The wrong turn:** The wrong turn is plotting the before and the after, because that is the comparison you care about. Two points cannot show variation, so every difference between them looks like an event.

**What it costs:** Eight periods of synthetic data takes longer to invent and produces a chart with no clear story in it, which is an accurate picture of what a small product usually has.

**Still unknown:** Still unknown: how much variation is normal in the real metric. These numbers are invented, and the habit of looking at the variation before the change is what the exercise is for.

- Plot one metric across at least eight periods, labelled synthetic.
- Mark when your design change would have shipped.

**You should end up with:** One metric plotted across at least eight periods, labelled synthetic, with the ship point marked.

Worksheet fields for this step:

- The metric, across at least eight periods, labelled synthetic
- When your design change would have shipped

<details>
<summary>Help with this step</summary>

- **Over time:** Enough periods to see what normal variation looks like. Two points look like a change; eight show whether it was one.
- **Marking the ship point:** Putting your change on the chart. It is honest, and it also shows how much movement there was before it.

Stuck starting? Plot eight periods before marking anything, so you see the variation first.

Is it enough? You can see what an ordinary week-to-week wobble looks like in your own numbers.

</details>

#### 2. List the other causes

**See it first.** Made-up example. Reading a rise in completions at a tool library, and attributing it.

- **What I saw:** Completions rose sharply in week five, which is the week the held-place message shipped. The chart looked like a textbook illustration of a change working.
- **What I wrote:** The message reduced duplicate payments and raised completions. It was the first genuinely encouraging thing in the project.
- **What I had not asked:** What else happened in week five. It took one conversation to find out: a local festival had ended, and the provider had run a promotion in the same week.
- **What the earlier weeks showed:** Week two had a rise almost as large, with nothing shipped at all. The ordinary wobble in this metric was bigger than I had assumed.
- **What I wrote instead:** Completions rose in week five, when the message shipped, a festival ended and a promotion ran. The three cannot be separated, and a similar rise occurred in week two with no change at all.

**The wrong turn:** The wrong turn is reading a rise after a change as a result of the change, because the timing is the most visible fact available. Something else always happened in the same period, and the ordinary variation is usually larger than anybody expects.

**What it costs:** Naming the alternatives means the most encouraging chart in the project stops being evidence, and somebody will feel you have talked yourself out of a success.

**Still unknown:** Still unknown: whether the message did anything at all. The honest position is that nothing here can tell, and the numbers are synthetic in any case.

- List everything else that could move the number in that period.
- Include seasonality, campaigns, holidays and external events.

**You should end up with:** Everything else that could move the number listed, with the ones that actually happened in the same period marked.

Worksheet fields for this step:

- Everything else that could move this number in that period — Seasons, holidays, festivals, campaigns, weather, a news story, a price change, a competitor.
- Which of those actually happened in the same period

<details>
<summary>Help with this step</summary>

- **Seasonality:** Regular movement caused by the calendar: term times, festivals, weather, paydays. It moves numbers more than most design changes do.
- **Concurrent change:** Anything else that happened in the same period. There is always at least one, and naming it is the difference between a finding and a coincidence.

Stuck starting? Ask somebody, or check a calendar, before writing anything about your own change.

Is it enough? Your list contains at least one thing that really did happen in the same period.

</details>

#### 3. Build a cohort

- Split people by the period they arrived.
- Follow each group for the same length of time.
- Compare like with like rather than period totals.

**You should end up with:** A cohort comparison replacing a before-and-after one, with the two groups and the follow-up length named.

**Try it with help.** Six explanations for a rise in a made up tool-library metric during the week a change shipped. For each one, decide what a cohort comparison does to it.

- More of the people that week were returning members, who complete more often than first-time visitors.
  - **the cohort removes it** — Splitting by arrival period and following each group for the same length of time is exactly what this is for.
  - the cohort does not touch it — It is the main thing a cohort does control for.
  - it was never a real alternative — Mix shifts are one of the commonest causes of a period total moving.
- A local festival ended that week, so more people were at home and doing jobs.
  - the cohort removes it — Both cohorts still live in their own calendar weeks, and the festival affects one of them.
  - **the cohort does not touch it** — A cohort controls for who the people are, not for what was happening in the world that week. This is the limit worth stating.
  - it was never a real alternative — It is entirely plausible and it is why the write-up has to name it.
- The provider ran a promotion in the same week.
  - the cohort removes it — A promotion affects the calendar period, so it affects one cohort and not the other.
  - **the cohort does not touch it** — Concurrent changes are the thing no amount of cohorting fixes, which is why the honest conclusion names them.
  - it was never a real alternative — It is the strongest competing explanation on the list.
- People who arrived earlier have had longer to complete a booking, so their totals are higher.
  - **the cohort removes it** — Following each group for the same fourteen days is what removes it. Without that, earlier groups always look better.
  - the cohort does not touch it — It is the second thing a cohort is for, after the mix.
  - it was never a real alternative — It is a real and easy mistake to make in any before-and-after comparison.
- It is ordinary variation; week two rose almost as much with nothing shipped.
  - the cohort removes it — A cohort does not make noise smaller.
  - the cohort does not touch it — True, and the more useful point is different.
  - **it was never a real alternative** — It is not an alternative explanation at all; it is the observation that there may be nothing to explain. Plotting eight periods is what makes it visible.
- It rained all week, so fewer people came in person and more booked online.
  - the cohort removes it — Weather belongs to the calendar week rather than to the group of people.
  - **the cohort does not touch it** — Anything about the world in that period survives cohorting, which is most of the interesting confounds.
  - it was never a real alternative — It is a plausible cause and worth listing.

**Then:** Now build your own cohort, and write the two lists: what it controls for and what survives it.

**What to watch for:** A cohort controls for who the people are and how long they have had. It does nothing about what was happening in the world that week, which is where the strongest competing explanations usually live.

Worksheet fields for this step:

- How you split people by the period they arrived — A cohort is a group defined by when they first arrived, followed for the same length of time each.
- The comparison: which two cohorts, followed for how long

<details>
<summary>Help with this step</summary>

- **Cohort:** A group defined by when they arrived, followed for the same length of time. It compares like with like instead of comparing two calendar periods.
- **Mix change:** The proportion of new to returning people shifting between periods. It moves period totals on its own, and a cohort removes it.

Stuck starting? Split your synthetic numbers by the week people first arrived, and follow each group the same number of days.

Is it enough? Both cohorts have been followed for the same length of time.

</details>

#### 4. State the controls

- Write what the cohort controls for.
- Write what it does not, especially concurrent changes.

**You should end up with:** What the cohort controls for and what it does not, written as two lists.

Worksheet fields for this step:

- What the cohort controls for — Usually the changing mix of new and returning people, and the different lengths of time each group has had.
- What it does not control for

<details>
<summary>Help with this step</summary>

- **Controlling for something:** Arranging the comparison so that one cause cannot explain the difference. It is never all of them.

Stuck starting? Write the does-not list first; it is longer and more important.

Is it enough? The second list includes everything about the world in that period.

</details>

#### 5. Record

- Name the explanation you cannot rule out.
- Save the chart, the cohort and the limitations.

**You should end up with:** One explanation you cannot rule out named, and the synthetic label placed where it travels.

Worksheet fields for this step:

- The one explanation you cannot rule out, named
- Where the synthetic label appears
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **What you cannot rule out:** The competing explanation that survives your best comparison. Naming it is usually the most useful sentence in the analysis.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Take the strongest thing from your does-not-control list and name it plainly.

Is it enough? The sentence would stop somebody quoting your cohort as proof.

</details>

**Save and continue.** Saved for you: Your plotted metric, the other causes, the cohort and the controls save as you type, on this device first and then online. Kept outside the app: The spreadsheet with your cohort split stays in your own folder, with the synthetic label in the chart title. What your creator sees: Your creator reads the does-not-control list and the explanation you kept. A cohort presented as a clean result is the thing this lesson exists to prevent. Your next action: Open Your work and choose Ready for review. The next lesson presents all of this to somebody without misleading them.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write everything that happened in that period that could affect the number, before writing any conclusion.

</details>

<details>
<summary>Hint 2</summary>

Split by arrival week and give each group the same follow-up window.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Time, cohorts and the number that moved by itself.
Task: Take one metric over time, identify what could make it move without any design change, and rework a comparison into a cohort that controls for one of them.
Challenge one thing at a time, and start with the mistake this lesson is about: “The number went up after we shipped, so the change worked.” Something else also happened in that period, always. Naming the alternatives is not pedantry; it is the difference between a finding and a coincidence you have committed to.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the explanation list and ask whether non-design explanations are listed for the movement. Look at the cohort comparison and ask whether A cohort comparison replaces the period comparison. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m15-l08-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Non-design explanations are listed for the movement: A list of concurrent causes covering seasonality, promotion and external events. A cohort comparison replaces the period comparison: Groups defined by arrival period and followed for equal durations. What the cohort controls for is stated: A written statement of what the method removes and what it leaves. An unrulable-out explanation is named: One alternative explicitly named as unresolvable with this data.

**Bring forward:** A cohort analysis with an unresolvable alternative named is a compact demonstration that you will not overclaim from a chart. Module handoff: Avoid unsupported impact claims in all case studies


### Practice and pause points

- Extend the metric over time (~25 min): Plot one metric across at least eight periods, labelled synthetic. Mark when your design change would have shipped.
- List the other causes (~30 min): List everything else that could move the number in that period. Include seasonality, campaigns, holidays and external events.
- Build a cohort (~30 min): Split people by the period they arrived. Follow each group for the same length of time. Compare like with like rather than period totals.
- State the controls (~20 min): Write what the cohort controls for. Write what it does not, especially concurrent changes.
- Record (~15 min): Name the explanation you cannot rule out. Save the chart, the cohort and the limitations.

Pause after any step; save the artifact and next action.

**Free tool path.** A spreadsheet with your synthetic counts split by arrival week. No analytics tool is required.

### Output

A metric over time with non-design explanations listed; A cohort comparison replacing a before-and-after one; A statement of what the cohort does and does not control for; One explanation you cannot rule out, named

### Checks

- Why list non-design explanations first? Answer: Because they are usually present and often larger. Attributing a movement to your work without ruling them out is how a coincidence becomes a commitment.
- What does mixing new and returning people hide? Answer: Two opposite effects cancelling: a change that helps beginners and slows experts can leave the combined number flat and be reported as no effect.
- What does a cohort not control for? Answer: Anything happening to everyone at the same time — a campaign, a season, an outage. Saying so is what keeps the comparison honest.

### Rubric and remediation

**Non-design explanations are listed for the movement**

Adequate evidence: A list of concurrent causes covering seasonality, promotion and external events.

- 0 — Change attributed to the design.
- 1 — One or two alternatives noted.
- 2 — A list covering the usual categories.
- 3 — As adequate, and one alternative is judged more likely than the design change.

If below 2: Write everything that happened in that period that could affect the number, before writing any conclusion. Show at recheck: The explanation list.

**A cohort comparison replaces the period comparison**

Adequate evidence: Groups defined by arrival period and followed for equal durations.

- 0 — Period totals compared.
- 1 — Cohorts defined but followed for unequal periods.
- 2 — Equal-length follow-up for defined cohorts.
- 3 — As adequate, and new and returning people are separated explicitly.

If below 2: Split by arrival week and give each group the same follow-up window. Show at recheck: The cohort comparison.

**What the cohort controls for is stated**

Adequate evidence: A written statement of what the method removes and what it leaves.

- 0 — Not stated.
- 1 — Controls claimed without limits.
- 2 — Both stated plainly.
- 3 — As adequate, and it names which uncontrolled factor would most change the reading.

If below 2: Write one sentence on what changed between groups other than the design. Show at recheck: The controls statement.

**An unrulable-out explanation is named**

Adequate evidence: One alternative explicitly named as unresolvable with this data.

- 0 — None named.
- 1 — Named vaguely.
- 2 — Named specifically with why it cannot be separated.
- 3 — As adequate, and the write-up says what data would separate it.

If below 2: Choose the strongest alternative and write why your data cannot rule it out. Show at recheck: The named explanation.

### Portfolio contribution

A cohort analysis with an unresolvable alternative named is a compact demonstration that you will not overclaim from a chart.

### Assigned resources

- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Interpreting performance data over time and the caution it requires. Purpose: Supports reading movement as multi-causal rather than attributable. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Written for services with real longitudinal data; your counts are synthetic and must be labelled. Fallback: R07.
- R37: [NN/g: confidence intervals and margins of error](https://www.nngroup.com/articles/confidence-interval/) — How sample size affects the reliability of a difference. Purpose: Prevents reading a small cohort difference as a real effect. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. No formulas; use a published one and show inputs if you quantify anything. Fallback: R45.

## Lesson 9: Presenting numbers without misleading anyone

Stable ID: m15-l09-v1. Core. Areas 14. Optional effort ~120 min.

**Objective.** Present one analysis to a stakeholder in a page or three slides, with the uncertainty visible, and record which part they remembered afterwards.

**Bring forward.** Your funnel, cohort work and paired findings.

The presentation is where careful analysis usually becomes an overclaim, because a clean chart is more persuasive than a caveat.

### Learn

A presentation is a design problem with an honesty constraint. The decision goes first because that is what the audience needs; the method goes last because it explains how much weight the decision can bear. Reversing them produces the familiar deck where the recommendation appears on slide fourteen and is remembered without its conditions.

Uncertainty must be visible in the object people look at. An interval drawn on the chart, a sample size in the subtitle, a note that counts are synthetic — all of these survive a screenshot. A caveat spoken aloud or written in a footnote does not, and the screenshot is what gets forwarded.

Saying what would change your conclusion is the strongest available signal that the analysis is honest. It also protects you: when the number moves next quarter, you have already written what that would mean rather than defending a position you took from weaker evidence.

Assume the chart travels alone. It will be pasted into a message, shown in another meeting, and remembered as a fact. Everything the reader needs to interpret it correctly — denominator, period, sample, synthetic label — has to be on the image itself.

**Common misconception.** “I explained the caveats when I presented it.” The caveats stayed in the room; the chart went everywhere. If a limitation matters, it belongs in the picture.

### Worked example

The analysis was presented in three slides. First: the decision — fix the held-place message before touching payment, because that is where the evidence points. Second: the evidence, with the funnel chart labelled synthetic, the sample of the qualitative work stated on the slide, and the interval shown on the one rate that appeared. Third: what would change the conclusion — if duplicate payments did not fall over four weeks, the cause is elsewhere. Afterwards, the person remembered the decision and the phrase “two of three”, which was the intended pair; nobody quoted a percentage, because none was shown.

#### Presenting numbers without misleading anyone

Present one analysis to a stakeholder in a page or three slides, with the uncertainty visible, and record which part they remembered afterwards.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A page of text or three slides in any free editor, with a hand-drawn or spreadsheet chart. Nothing here requires a presentation platform.

- Starting material: Your analysis and its limitations.
- Create HaruCourse/Practice/m15-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Write the decision first

- State the decision the analysis supports in one sentence.
- Put it at the top, before any method.

**You should end up with:** The decision the analysis supports, in one sentence, placed before any method.

Worksheet fields for this step:

- The decision this analysis supports, in one sentence — At the top, before any method. Somebody reading only this line should know what you are asking for.

<details>
<summary>Help with this step</summary>

- **Leading with the decision:** Putting what you are asking for first. Method first makes the audience wait, and they decide what they think during the waiting.

Stuck starting? Write the sentence you would say if you had ten seconds.

Is it enough? Somebody reading only that line would know what you want them to do.

</details>

#### 2. Build the chart honestly

**See it first.** Made-up example. Presenting a tool-library analysis, and putting the caveats in the talking.

- **What I showed:** One clean chart with a clear rise, and I explained carefully that the numbers were synthetic, the sample was three people, and a promotion had run in the same week.
- **How it went:** Well. Everybody understood the caveats, asked good questions, and nobody was misled in the room.
- **What happened three weeks later:** The chart appeared in somebody else’s summary, with a sentence underneath saying completions rose after the redesign. Not dishonestly: they had the picture and not the conversation.
- **What the chart had said about itself:** Nothing. A clean axis, two bars and a title. Every limitation lived in a room that no longer existed.
- **What I do now:** Synthetic in the title, the sample beside the bar, the period on the axis, and the promotion marked on the chart with a line. It is uglier and it survives being screenshotted.

**The wrong turn:** The wrong turn is explaining the caveats aloud, because the explanation lands and the room understands. The caveats stay in the room; the chart goes everywhere.

**What it costs:** A chart carrying its own limitations is busier and less persuasive, which is the correct level of persuasive for what it shows.

**Still unknown:** Still unknown: whether anybody reads the annotations. They at least give somebody quoting it the chance to notice, which a clean chart does not.

- Follow the assigned chart conventions.
- Put the sample, period and any synthetic label on the chart.
- Show the interval where a rate appears.

**You should end up with:** A chart following the assigned conventions, with the sample, period, synthetic label and any interval on the chart itself.

Worksheet fields for this step:

- What the chart shows, and how it follows the assigned conventions
- What appears on the chart itself: sample, period, synthetic label, interval — On the chart, not in the notes. The chart is what travels.
- Check: any number shown without its denominator and period

<details>
<summary>Help with this step</summary>

- **On the chart:** Inside the picture, not in the caption or the notes. Charts get screenshotted and travel without anything around them.
- **Interval on the chart:** The uncertainty drawn, usually as a range. It is the difference between a number and a measurement.

Stuck starting? Draw the chart, then add everything somebody would need if they saw only the picture.

Is it enough? A screenshot of the chart alone would not mislead anybody.

</details>

#### 3. Write the change condition

**See it first.** Made-up example. Writing a change condition for a tool-library analysis, and writing one that could not happen.

- **What I wrote:** “If the evidence changes, I will revisit this.” It sounded open-minded and it committed me to nothing at all.
- **Why it is empty:** No particular evidence would trigger it, and no date says when anybody looks. It is a sentence that survives every outcome.
- **What I nearly wrote instead:** “If duplicate payments do not fall substantially.” Better, and substantially is doing the same work as the first version: nobody can say afterwards whether it happened.
- **What it became:** “If duplicate payments in the provider’s records are not lower in the month after shipping than in the month before, the cause is elsewhere and the work moves to the payment confirmation.”
- **What that version does:** It names a source, a period and a next step. Somebody can hold me to it, which is the whole point of writing one.

**The wrong turn:** The wrong turn is writing a condition that cannot fail, because it keeps your options open and sounds properly scientific. A condition nothing could satisfy is not a commitment.

**What it costs:** A real condition means you may have to say in four weeks that your work did not help, in front of the people who approved it.

**Still unknown:** Still unknown: whether a month is long enough, and whether the records capture every duplicate. The earlier contradiction suggested they may not, and the condition is stated in terms of what the records show rather than what happens.

- State what result would change your conclusion.
- Say when you would look.

**You should end up with:** A stated result that would change your conclusion, and when you would look.

Worksheet fields for this step:

- The result that would change your conclusion, and when you would look

<details>
<summary>Help with this step</summary>

- **Change condition:** What would make you say you were wrong. Including it is what separates an analysis from an argument.

Stuck starting? Finish this sentence: “if, in four weeks, … then the cause is elsewhere”.

Is it enough? The condition could actually occur and you have said when you would look.

</details>

#### 4. Present it

- Present to someone who was not involved.
- Do not narrate the caveats; let the material carry them.

**You should end up with:** The analysis presented to somebody, or rehearsed and labelled, with what they asked.

**Try it with help.** Six things that might appear on a slide about a made up tool-library analysis. For each one, decide whether it should be there.

- Fix the held-place message before touching payment.
  - **belongs on the slide** — The decision goes first and largest. Somebody who reads only one line should read this one.
  - belongs in the notes — Notes are for things that support the decision, not for the decision.
  - should not be shown at all — It is the point of the presentation.
- Two of the three people we watched could not tell their place was held.
  - **belongs on the slide** — The count and the sample travel together, which is what stops it becoming 67 per cent in somebody else’s summary.
  - belongs in the notes — In the notes it separates from the claim immediately.
  - should not be shown at all — It is the qualitative half of the evidence.
- The word synthetic in the chart title.
  - **belongs on the slide** — In the title, so it survives the screenshot. This is the single most important piece of labelling in the module.
  - belongs in the notes — The notes do not travel with the image.
  - should not be shown at all — Hiding it would be the failure the whole module is about.
- The formula used to compute the interval, with its inputs.
  - belongs on the slide — It is checkable detail rather than something the audience needs while deciding.
  - **belongs in the notes** — Available to anybody who wants to verify, and out of the way of the decision.
  - should not be shown at all — It has to be available somewhere, or the interval cannot be checked.
- A headline reading 67 per cent of participants.
  - belongs on the slide — Sixty-seven per cent of three people is two people, and the percentage is the part that gets quoted.
  - belongs in the notes — Anywhere it appears it can be lifted out.
  - **should not be shown at all** — The earlier lesson settled this: at this sample the rate is arithmetic dressed as a measurement.
- A marked line on the chart showing when the provider’s promotion ran.
  - **belongs on the slide** — It is the strongest competing explanation, and on the chart it travels with the picture that would otherwise imply your change caused the rise.
  - belongs in the notes — A confound in the notes is a confound nobody sees.
  - should not be shown at all — Leaving it off is what makes the chart misleading.

**Then:** Now check your own slides: everything that would change how somebody reads the chart should be on it.

**What to watch for:** The test is what happens to the picture alone. Anything that would change how somebody reads it belongs inside it; anything that only lets them verify it can live in the notes.

Worksheet fields for this step:

- Who you presented it to, or how you rehearsed it — No stakeholder available: present it to anybody who will listen for five minutes, and label it a rehearsal.
- What they asked

<details>
<summary>Help with this step</summary>

- **Rehearsal:** Presenting to somebody who is not going to decide anything. It tests the presentation and it is labelled as a rehearsal.
- **Their questions:** The best evidence about what the presentation left unclear. Write them down rather than answering and forgetting.

Stuck starting? Present it without apologising for the sample size; the slide already says it.

Is it enough? Their questions are written down in their own words.

</details>

#### 5. Check what survived

- Ask afterwards what they took away.
- Record any misreading and fix the material rather than explaining again.

**You should end up with:** What the audience remembered afterwards, and anything remembered more confidently than the evidence supports.

Worksheet fields for this step:

- What they remembered afterwards, in their words — Ask a day later if you can. What is remembered is what will be repeated.
- Anything remembered more confidently than your evidence supports
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **What is remembered:** What will be repeated. It is the only measure of whether the presentation worked, and it is usually two things.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Ask a day later what they took from it, and write their words rather than a summary.

Is it enough? You recorded what they said, including the parts that overstated your evidence.

</details>

**Save and continue.** Saved for you: Your decision sentence, the chart notes, the change condition and what was remembered save as you type, on this device first and then online. Kept outside the app: The slides or the page stay in your own folder. If the chart is going anywhere else, check once more that it says synthetic in its own title. What your creator sees: Your creator reads what the audience remembered. That is the only measure of whether the presentation worked. Your next action: Open Your work and choose Ready for review. The next lesson asks when measuring is the wrong thing to do at all.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Move your recommendation to the top and cut everything before it.

</details>

<details>
<summary>Hint 2</summary>

Add the sample and period into the chart's subtitle, where a screenshot keeps them.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Presenting numbers without misleading anyone.
Task: Present one analysis to a stakeholder in a page or three slides, with the uncertainty visible, and record which part they remembered afterwards.
Challenge one thing at a time, and start with the mistake this lesson is about: “I explained the caveats when I presented it.” The caveats stayed in the room; the chart went everywhere. If a limitation matters, it belongs in the picture.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the opening and ask whether the decision comes first and fits a sentence. Look at the chart and ask whether sample, period and uncertainty are on the chart. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m15-l09-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The decision comes first and fits a sentence: A one-sentence decision at the start, before any method. Sample, period and uncertainty are on the chart: A chart carrying its own sample, period, synthetic label and interval where relevant. A condition that would change the conclusion is stated: A written condition with a time to look. What the audience remembered was checked and acted on: A record of what they took away and a change to the material where it misled.

**Bring forward:** A three-slide analysis whose chart carries its own limits is a good example of communicating uncertainty without becoming unreadable. Module handoff: Avoid unsupported impact claims in all case studies


### Practice and pause points

- Write the decision first (~25 min): State the decision the analysis supports in one sentence. Put it at the top, before any method.
- Build the chart honestly (~30 min): Follow the assigned chart conventions. Put the sample, period and any synthetic label on the chart. Show the interval where a rate appears.
- Write the change condition (~25 min): State what result would change your conclusion. Say when you would look.
- Present it (~25 min): Present to someone who was not involved. Do not narrate the caveats; let the material carry them.
- Check what survived (~15 min): Ask afterwards what they took away. Record any misreading and fix the material rather than explaining again.

Pause after any step; save the artifact and next action.

**Free tool path.** A page of text or three slides in any free editor, with a hand-drawn or spreadsheet chart. Nothing here requires a presentation platform.

### Output

A presentation of at most three slides or one page; Uncertainty shown in the chart itself; A stated condition that would change the conclusion; A note of what the audience remembered

### Checks

- Why does uncertainty belong in the chart? Answer: Because the chart travels alone. Spoken caveats stay in the room and the image is what gets forwarded and remembered.
- Why lead with the decision? Answer: Because it is what the audience needs. Method-first presentations bury the recommendation and it gets remembered without its conditions.
- What does the change condition protect? Answer: Your credibility and your future flexibility: you have already said what would make you revise, rather than defending a position taken from weak evidence.

### Rubric and remediation

**The decision comes first and fits a sentence**

Adequate evidence: A one-sentence decision at the start, before any method.

- 0 — Method first.
- 1 — Decision present but late.
- 2 — Decision first, in one sentence.
- 3 — As adequate, and it names who has to act.

If below 2: Move your recommendation to the top and cut everything before it. Show at recheck: The opening.

**Sample, period and uncertainty are on the chart**

Adequate evidence: A chart carrying its own sample, period, synthetic label and interval where relevant.

- 0 — A bare chart.
- 1 — Some context in the notes.
- 2 — All context on the image itself.
- 3 — As adequate, and the chart follows the assigned axis and labelling conventions.

If below 2: Add the sample and period into the chart's subtitle, where a screenshot keeps them. Show at recheck: The chart.

**A condition that would change the conclusion is stated**

Adequate evidence: A written condition with a time to look.

- 0 — No condition.
- 1 — A condition without a period.
- 2 — Both stated.
- 3 — As adequate, and the condition is one that could realistically occur.

If below 2: Write what result would make you revise this, and when you would check. Show at recheck: The change condition.

**What the audience remembered was checked and acted on**

Adequate evidence: A record of what they took away and a change to the material where it misled.

- 0 — Not checked.
- 1 — Checked without acting.
- 2 — Checked and the material corrected.
- 3 — As adequate, and a misreading is traced to a specific presentation choice.

If below 2: Ask someone what they took from it a day later, and fix whatever they got wrong. Show at recheck: The takeaway record.

### Portfolio contribution

A three-slide analysis whose chart carries its own limits is a good example of communicating uncertainty without becoming unreadable.

### Assigned resources

- R63: [UK Analysis Function: data visualisation charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/) — Axes, direct labelling, colour contrast, alternative text and publishing the data. Purpose: Supplies the conventions that keep the presented chart honest. Effort: 45–60 selected min. Free reading, no account. Verified 2026-09-06; published 19 May 2022. Excludes interactive dashboards; the alternative-text requirement applies to your slides too. Fallback: R29.
- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Reporting performance honestly. Purpose: Frames the presentation as accountability rather than persuasion. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Government publishing context; the discipline transfers, the obligation does not. Fallback: R07.

## Lesson 10: When not to measure

Stable ID: m15-l10-v1. Core. Areas 14. Optional effort ~120 min.

**Objective.** Identify two decisions in your work that should not wait for data, and write what you would do instead and why that is defensible.

**Bring forward.** Your metric tree, open questions and delivery backlog.

Measurement is expensive and slow. Some decisions are cheaper to make and reverse than to measure, and knowing which is a professional skill.

### Learn

The comparison is between two costs: what it would take to measure, and what being wrong would cost. A reversible wording change costs an hour to make and an hour to undo; measuring it properly costs weeks and traffic you do not have. Making it, watching, and reversing if needed is not sloppiness — it is the cheaper path with the same eventual accuracy.

Irreversibility changes the calculation. A decision that is expensive to unmake — a pricing change, a data-collection choice, anything affecting people's money — justifies more evidence, because the cost of being wrong is high and the correction is slow.

Some measurement is not acceptable regardless of cost. Testing which wording extracts more personal data, or which pattern makes cancellation hardest, are experiments with results — and running them is a choice about who you are working for. Recognising those and refusing them is part of this module.

Delay has a cost that is rarely counted. Waiting a month for evidence means a month of the current design's problems continuing, and that cost belongs in the comparison alongside the risk of acting without data.

**Common misconception.** “We should be data-driven.” Data-informed decisions are good; waiting for data on decisions that are cheap to reverse is expensive theatre, and it usually means the current problem continues while everyone feels rigorous.

### Worked example

Two decisions were identified. First: the wording of the held-place message. Cheap to change, cheap to reverse, no traffic to test it with — the decision was to write the clearest version, ship it, and ask three people the following week. Second: whether to shorten the booking form by removing a field. This affects data the provider relies on, so removal is not cheaply reversible; the decision was to ask the provider what the field is used for before touching it. One measurement was refused outright: a proposal to test which cancellation flow produced fewer cancellations, which would have been a test of how well the flow obstructs people.

#### When not to measure

Identify two decisions in your work that should not wait for data, and write what you would do instead and why that is defensible.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written reasoning. This lesson is judgement, not tooling.

- Starting material: Your metric tree and current decisions.
- Create HaruCourse/Practice/m15-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. List open decisions

**See it first.** Made-up example. Judging how reversible a tool-library decision is, and judging it from my own side.

- **The decision:** Removing a field from the booking form. From where I sat it was one of the most reversible things imaginable: five minutes to put back.
- **What I meant by reversible:** Easy for me to undo. That is the version of the question everybody answers, because it is the one you can see.
- **What the other side of it was:** The provider used that field to plan which branch would need staffing on Saturdays. Three weeks without it and the rota is built on guesswork, and the bookings made in those weeks are gone.
- **What reversible really asks:** Whether the consequences can be undone, not whether the change can. Putting the field back does not recover three weeks of missing information.
- **What I did:** Moved it to the measure-first list, and the measurement was one conversation with the provider about what the field is for.

**The wrong turn:** The wrong turn is judging reversibility by how easy the change is to undo in your own file. What matters is whether the effects can be undone, and those usually land on somebody you have not asked.

**What it costs:** Asking before changing means slower decisions, and sometimes the answer is that nobody uses the field and the conversation was unnecessary.

**Still unknown:** Still unknown: how many other fields are quietly depended on. One conversation found one, and the same question would probably find more.

- List decisions currently waiting for evidence.
- For each, note how reversible it is.

**You should end up with:** Decisions currently waiting for evidence, each marked for how reversible it is.

Worksheet fields for this step:

- Decisions currently waiting for evidence
- For each: how reversible it is, and how you know — Reversible means you could undo it next week without cost to anybody. A wording change usually is; removing a field somebody depends on usually is not.

<details>
<summary>Help with this step</summary>

- **Reversible decision:** One you could undo next week at no cost to anybody. Most wording and layout decisions are; anything touching data other people rely on usually is not.
- **Waiting for data:** A decision with its own cost: the current problem continues while everybody feels rigorous.

Stuck starting? List what is currently blocked, then ask of each how hard it would be to undo.

Is it enough? Every decision has a reversibility judgement with a reason.

</details>

#### 2. Compare the costs

**See it first.** Made-up example. Deciding the wording of a tool-library message, and waiting to be sure.

- **What we did:** Held the wording decision until we could test it, because guessing at wording felt unrigorous and testing is what a careful team does.
- **What testing would have needed:** Traffic we do not have. The earlier calculation put a detectable difference months away, so the honest cost of measuring was several months of delay.
- **What the delay actually cost:** Three months of the existing message, which we already had reason to think was confusing people into paying twice. The current problem continued while we felt careful.
- **What the cost of being wrong was:** A worse sentence, visible on one screen, changeable in five minutes, noticeable by asking three people. A week of a slightly worse message, at most.
- **What we should have done:** Written the clearest version, shipped it, and asked three people the following week. The decision is cheaper to make and reverse than to measure, which is the whole test.

**The wrong turn:** The wrong turn is treating waiting as the cautious option, because deciding without data feels like guessing. Waiting is a decision too, and its cost is that the current version keeps running.

**What it costs:** Deciding without measurement means occasionally shipping something worse, and you will not know which times those were.

**Still unknown:** Still unknown: whether the new wording is better. Three conversations next week will say what people think it means, which is not the same as knowing it reduced anything.

- Estimate the cost of measuring: time, traffic, delay.
- Estimate the cost of being wrong, including how long the error would persist.

**You should end up with:** For each decision, the cost of measuring and the cost of being wrong, including how long an error would persist.

Worksheet fields for this step:

- For each: the cost of measuring, in time, traffic and delay
- For each: the cost of being wrong, including how long the error would persist — A wrong wording persists until somebody notices. A wrong removal persists until somebody complains, which may be never.

<details>
<summary>Help with this step</summary>

- **Cost of measuring:** Time, traffic, delay and the work of running it. At small scale the delay is usually the largest part.
- **How long the error persists:** The multiplier on being wrong. A mistake noticed in a week costs a week; one nobody can notice costs until somebody complains.

Stuck starting? For each decision, write how long the error would last before anybody could notice it.

Is it enough? Both costs are written as time or money rather than as feelings about risk.

</details>

#### 3. Decide and plan the alternative

- Choose two decisions to make without measurement.
- Write what you will do instead and how you would notice a mistake.

**You should end up with:** Two decisions chosen to make without measuring, with what you will do instead and how you would notice a mistake.

**Try it with help.** Six decisions at a made up tool library. For each one, decide what the right approach is.

- The exact wording of the held-place message. Changeable in five minutes.
  - **decide now and watch** — Cheap to change, cheap to reverse, and no traffic to test it with. Write the clearest version, ship it, and ask three people next week.
  - measure first — Measuring costs months of delay to settle a five-minute decision.
  - do not measure this at all — Asking three people afterwards is worth doing; it is the waiting beforehand that is wrong.
- Removing a field from the booking form. The provider may be using the data for something.
  - decide now and watch — Removing data other people depend on is not cheaply reversible, and the mistake may go unnoticed for months.
  - **measure first** — Find out what it is used for before touching it. The measurement here is one conversation with the provider rather than a study.
  - do not measure this at all — There is nothing objectionable about finding out what a field is for.
- Testing which cancellation flow produces fewer cancellations.
  - decide now and watch — Deciding it at all accepts the framing that fewer cancellations is the goal.
  - measure first — A well-run test would answer it precisely, and what it would measure is how effectively the flow obstructs people who want to leave.
  - **do not measure this at all** — The test optimises for something nobody should be optimising for. Refusing it, with the reason, is the answer.
- Which of two shades the primary button should be, both of which pass contrast.
  - **decide now and watch** — Cheap, reversible and almost certainly inconsequential. Choose one and spend the attention elsewhere.
  - measure first — This is the classic example of a measurement whose cost exceeds any plausible value of the answer.
  - do not measure this at all — There is nothing wrong with measuring it; it is simply not worth it.
- Raising the membership fee by ten per cent.
  - decide now and watch — Reversing a price rise is expensive and public, and the people who left because of it do not come back.
  - **measure first** — Not necessarily a test: asking members, and looking at what happened when the fee last changed, are both measurements in the useful sense.
  - do not measure this at all — It is an ordinary business decision that benefits from evidence.
- Recording how long each named member takes to return tools, to identify unreliable people.
  - decide now and watch — Nothing about it is a design decision to be shipped and watched.
  - measure first — It is entirely measurable, which is what makes the refusal a judgement rather than a limitation.
  - **do not measure this at all** — Building a per-person reliability record changes what the library is. The refusal belongs in writing, with the reason.

**Then:** Now choose your own two, and write what you will do instead of measuring.

**What to watch for:** Three questions sort most cases. How expensive is the measurement, how expensive is being wrong, and should anybody be optimising this at all? The third one is not about cost and it overrides the other two.

Worksheet fields for this step:

- The two you will decide without measuring, and why
- What you will do instead, including how you would notice a mistake

<details>
<summary>Help with this step</summary>

- **Deciding without data:** Choosing on reasoning, shipping, and arranging to find out. It is appropriate when the decision is cheap to reverse and the measurement is expensive.
- **Noticing a mistake:** The arrangement that would tell you. Without it, deciding quickly becomes deciding blindly, which is a different thing.

Stuck starting? Pick the two where the measurement is expensive and the mistake is cheap.

Is it enough? Both have a way you would find out you were wrong.

</details>

#### 4. Find the refusal

- Identify a measurement that should not be run at all.
- Write why, and what you would say if asked to run it.

**You should end up with:** One measurement that should not be run at all, with the reason and what you would say if asked.

Worksheet fields for this step:

- A measurement that should not be run at all, and why — Some tests optimise for something nobody should be optimising for. A test of which cancellation flow produces fewer cancellations is a test of how well it obstructs people.
- What you would say if asked to run it

<details>
<summary>Help with this step</summary>

- **An ethical refusal:** Declining to measure something because the measurement itself, or what it would optimise for, is wrong. It is a separate question from cost.
- **What you would say:** The sentence prepared in advance. Under pressure, the objection has to be available rather than constructed.

Stuck starting? Look for a measurement whose answer would be used to make something worse for people.

Is it enough? Your reply offers something else rather than only refusing.

</details>

#### 5. Record

- Record the reasoning so the decisions can be revisited.
- Save the comparisons and the refusal.

**You should end up with:** The reasoning recorded so the decisions can be revisited, and the repair the Check questions asked for.

Worksheet fields for this step:

- How the reasoning is recorded so the decisions can be revisited
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Revisitable:** Written where the decision will be questioned again, with the reasoning rather than only the outcome.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Put the reasoning where the decision lives, not in a separate note.

Is it enough? Somebody reopening the decision would find why it was made as well as what was decided.

</details>

**Save and continue.** Saved for you: Your decisions, the cost comparisons, what you will do instead and the refusal save as you type, on this device first and then online. Kept outside the app: The reasoning belongs wherever the decision is recorded, so somebody reopening it finds both. This worksheet is your working copy. What your creator sees: Your creator reads the refusal and the noticing arrangements. Deciding quickly with no way to find out is the failure this lesson guards against. Your next action: Open Your work and choose Ready for review. The next lesson writes the plan you could actually start on Monday.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

List what you are waiting on and ask how hard each would be to undo.

</details>

<details>
<summary>Hint 2</summary>

Write what a month of waiting costs in the current design's problems.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: When not to measure.
Task: Identify two decisions in your work that should not wait for data, and write what you would do instead and why that is defensible.
Challenge one thing at a time, and start with the mistake this lesson is about: “We should be data-driven.” Data-informed decisions are good; waiting for data on decisions that are cheap to reverse is expensive theatre, and it usually means the current problem continues while everyone feels rigorous.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the decision list and ask whether two decisions are identified with reversibility assessed. Look at the cost comparison and ask whether costs of measuring and of being wrong are both estimated. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m15-l10-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Two decisions are identified with reversibility assessed: Two real decisions with a reversibility judgement each. Costs of measuring and of being wrong are both estimated: Two estimates per decision, including the cost of delay. The alternative includes how a mistake would be noticed: A plan for acting without measurement plus a signal that would reveal an error. One measurement is refused with a stated reason: A refusal on ethical grounds with what you would say if asked.

**Bring forward:** A written refusal to measure something, with the reasoning, is a strong signal of professional judgement and is rarely seen in a portfolio. Module handoff: Avoid unsupported impact claims in all case studies


### Practice and pause points

- List open decisions (~25 min): List decisions currently waiting for evidence. For each, note how reversible it is.
- Compare the costs (~30 min): Estimate the cost of measuring: time, traffic, delay. Estimate the cost of being wrong, including how long the error would persist.
- Decide and plan the alternative (~25 min): Choose two decisions to make without measurement. Write what you will do instead and how you would notice a mistake.
- Find the refusal (~25 min): Identify a measurement that should not be run at all. Write why, and what you would say if asked to run it.
- Record (~15 min): Record the reasoning so the decisions can be revisited. Save the comparisons and the refusal.

Pause after any step; save the artifact and next action.

**Free tool path.** Written reasoning. This lesson is judgement, not tooling.

### Output

Two decisions identified as not worth measuring, with reasoning; The cost of measuring compared with the cost of being wrong; What you will do instead, including how you would notice a mistake; One measurement refused on ethical grounds, with the reason

### Checks

- What decides whether to measure? Answer: The cost of measuring against the cost of being wrong, including how long the error would persist and how easily it could be reversed.
- What raises the bar for evidence? Answer: Irreversibility and stakes: anything affecting money, data collection or something expensive to unmake justifies more before acting.
- When should a measurement be refused? Answer: When the result would be used against the people being measured — optimising obstruction, or extracting data — regardless of how cheap the test is.

### Rubric and remediation

**Two decisions are identified with reversibility assessed**

Adequate evidence: Two real decisions with a reversibility judgement each.

- 0 — No decisions identified.
- 1 — Decisions listed without reversibility.
- 2 — Two with reversibility assessed.
- 3 — As adequate, and one is deliberately kept for measurement because it is irreversible.

If below 2: List what you are waiting on and ask how hard each would be to undo. Show at recheck: The decision list.

**Costs of measuring and of being wrong are both estimated**

Adequate evidence: Two estimates per decision, including the cost of delay.

- 0 — Neither estimated.
- 1 — One side estimated.
- 2 — Both, including delay.
- 3 — As adequate, and the delay cost is expressed in what continues to happen meanwhile.

If below 2: Write what a month of waiting costs in the current design's problems. Show at recheck: The cost comparison.

**The alternative includes how a mistake would be noticed**

Adequate evidence: A plan for acting without measurement plus a signal that would reveal an error.

- 0 — Act-and-hope.
- 1 — An alternative without a detection signal.
- 2 — Both, with a time to check.
- 3 — As adequate, and the signal is something you could realistically observe.

If below 2: For each decision write what you would see if it were wrong, and when you would look. Show at recheck: The alternative plans.

**One measurement is refused with a stated reason**

Adequate evidence: A refusal on ethical grounds with what you would say if asked.

- 0 — No refusal considered.
- 1 — A refusal without reasoning.
- 2 — Refusal with reasoning and a prepared response.
- 3 — As adequate, and the refusal names who the measurement would have served.

If below 2: Ask which experiment you would be uncomfortable explaining to a participant, and write the refusal. Show at recheck: The refusal.

### Portfolio contribution

A written refusal to measure something, with the reasoning, is a strong signal of professional judgement and is rarely seen in a portfolio.

### Assigned resources

- R07: [GOV.UK: discovery phase](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) — Deciding what to do next under uncertainty and what a discovery is trying to establish. Purpose: Frames measurement as one option among several for reducing uncertainty. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06; published 18 November 2016. It prefers primary fieldwork and does not discuss experiment economics, which is this lesson's own. Fallback: R19.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The points on iterating and improving frequently and on making sure everyone can use the service. Purpose: Supports the ethical refusal with a stated standard rather than only a preference. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Government obligations; the ethical reasoning here is the course's own. Fallback: R07.

## Lesson 11: A measurement plan you could actually run

Stable ID: m15-l11-v1. Core. Areas 14. Optional effort ~120 min.

**Objective.** Write a measurement plan for your project that uses only what you can obtain, states what each measure supports, and names the questions it leaves unanswered.

**Bring forward.** Your metric tree, instrumentation plan and refusals.

A plan that assumes analytics you do not have is a wish. A plan built from counts, records and conversations is a thing you can start on Monday.

### Learn

The plan has to be built from available material. A small provider has records: bookings, cancellations, refunds, support messages. You can count things by hand for a month. You can talk to five people. None of that is a dashboard, and together they answer more than most dashboards do, because each was chosen for a question.

Each measure needs its claim attached. “Refund requests per hundred bookings, from the provider's records, monthly” supports a statement about refunds and nothing about satisfaction, and writing that down when you choose the measure prevents it being stretched later.

Small plans get executed. Three measures collected consistently for three months are worth more than a plan of ten that lapses in week two, and the discipline of choosing three forces you to decide which questions actually matter.

The unanswered list is the honest counterpart. State what this plan cannot tell you — anything about people who never arrive, anything about why, anything at population scale — so that when someone asks, the answer is a recorded limitation rather than an improvised estimate.

**Common misconception.** “Without analytics we cannot measure anything.” You can count what a small business already records, count things by hand, and ask people. What you cannot do is claim precision or scale, and saying so is what makes the rest usable.

### Worked example

The plan had three measures, each with a claim and a limit. Duplicate payments per hundred bookings, from the provider's records, monthly — supports a statement about payment confusion, not about its cause. Cancellations within 24 hours of booking, monthly — supports a statement about commitment confidence, not about satisfaction. Five conversations a quarter with recent bookers — supports mechanisms, not prevalence. Review date set. Unanswered: anything about people who never reached the site, anything about how the numbers compare with similar providers, and anything at population scale.

#### A measurement plan you could actually run

Write a measurement plan for your project that uses only what you can obtain, states what each measure supports, and names the questions it leaves unanswered.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A written plan and a spreadsheet. The provider's own records and a handful of conversations are the whole data infrastructure.

- Starting material: Your metric tree and instrumentation decisions.
- Create HaruCourse/Practice/m15-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Inventory what exists

**See it first.** Made-up example. Inventorying what a tool library records, and asking the wrong question.

- **What I asked:** “Do you have any analytics?” The answer was no, and I wrote down that there was no data available.
- **What that question had meant to them:** Website statistics. It is what analytics means to somebody who does not work in software, and the answer was accurate.
- **What I asked the second time:** “What do you write down, and where?” A different question entirely, and it took twenty minutes to answer.
- **What came back:** Every payment in the provider’s dashboard. Every booking in a shared spreadsheet, with the date made and the date collected. Every complaint in one email folder. Eleven years of a paper ledger in a cupboard.
- **What the plan was built from:** Two of those. None of it is analytics and all of it is data, and the first question had made it invisible.

**The wrong turn:** The wrong turn is asking whether they have data, because the word means software to you and statistics to them. Asking what they write down finds the records that have been there all along.

**What it costs:** Records kept by hand are inconsistent, incomplete in places, and take an hour to count. They exist, which no analytics package does.

**Still unknown:** Still unknown: how reliably the booking spreadsheet is filled in. Somebody types it and somebody sometimes forgets, and the plan says the measure is approximate rather than assuming otherwise.

- List records the product or provider already keeps.
- List what you could count by hand and who you could ask.

**You should end up with:** An inventory of records that already exist, plus what you could count by hand and who you could ask.

Worksheet fields for this step:

- Records the product or the provider already keeps — Payment records, booking records, a support log, an email inbox, a paper ledger. Small organisations keep more than they realise.
- What you could count by hand, and who you could ask

<details>
<summary>Help with this step</summary>

- **Existing records:** What the organisation already keeps without calling it data: payment records, a booking book, a support inbox. It is usually the best source available.
- **Counting by hand:** Going through a month of records with a pencil. It is slow, accurate and available today, and it is how most small organisations should start.

Stuck starting? Ask what the provider already keeps before thinking about what you would like to have.

Is it enough? Your inventory contains at least one source nobody would call analytics.

</details>

#### 2. Choose three measures

**See it first.** Made-up example. Writing a measurement plan for a tool library, and writing one for a product that does not exist.

- **What I wrote first:** Eleven measures: funnel conversion by step, time to first booking, return visitor rate, search success rate, and seven more. It looked like a proper plan.
- **What every one of them needed:** Analytics the library does not have and is not going to buy. The plan was for a different organisation with a different budget.
- **What it would have produced:** Nothing at all, for months, followed by a conversation about buying a tool, followed by more months.
- **What I built the second plan from:** What the provider already keeps. Payment records, the booking book, and the library’s own email. Between them: duplicate payments, cancellations within a day, and five conversations a quarter.
- **What that plan could do:** Start on Monday, with a pencil. It answers less than the eleven would have, and it is the only one of the two that produces a number this month.

**The wrong turn:** The wrong turn is writing the plan the metric tree deserves rather than the plan this organisation can run. A plan that assumes tooling you do not have is a wish with a review date on it.

**What it costs:** Three hand-counted measures answer far less than a proper analytics setup would, and somebody will point out how crude they are.

**Still unknown:** Still unknown: almost everything about people who never arrive. No plan built from a provider’s records can see them, and the unanswered list says so.

- Choose three that answer nodes in your metric tree.
- Prefer measures you can obtain without new tooling.

**You should end up with:** Three measures, each answering a node in your tree, obtainable without new tooling.

Worksheet fields for this step, revealed a few at a time in the app:

- Measure 1 · what it is, where it comes from, and how often
- Measure 2 · what it is, where it comes from, and how often
- Measure 3 · what it is, where it comes from, and how often

<details>
<summary>Help with this step</summary>

- **Obtainable:** Available from a record, a count or a conversation you could arrange this month. Anything needing new tooling is a plan for later.
- **Small:** Three measures. Ten produce a document nobody maintains, and the first month of a plan is where most of them die.

Stuck starting? Choose the measure you could produce this afternoon from an existing record.

Is it enough? Every measure names where the number comes from and how often it is produced.

</details>

#### 3. Attach claims and limits

- For each measure write what it supports and what it does not.
- Include the sample or source in the statement.

**You should end up with:** For each measure, the claim it supports and the claim it does not, with the source inside the statement.

**Try it with help.** Six candidate measures for a made up tool library with no analytics. For each one, decide whether the plan can include it.

- Duplicate payments per hundred bookings, from the payment provider’s records, monthly.
  - **obtainable today** — The provider already records every payment. Counting duplicates is an hour with a spreadsheet each month.
  - needs tooling you do not have — Nothing new is required; the records exist because payments happened.
  - obtainable and not worth it — It is the closest thing to the outcome in the whole tree.
- Conversion at each step of the booking funnel.
  - obtainable today — Nothing records who reached which screen. The funnel you built was synthetic for exactly this reason.
  - **needs tooling you do not have** — It needs page-level instrumentation, which is a project rather than a measure.
  - obtainable and not worth it — It would be genuinely useful if it existed, which is what makes it a plan for later.
- Cancellations within a day of booking, from the booking book, monthly.
  - **obtainable today** — Both dates are already written down. It is a count somebody can do with a pencil.
  - needs tooling you do not have — The booking book is the tooling.
  - obtainable and not worth it — It speaks to confidence at the moment of booking, which is a node in the tree.
- Five conversations a quarter with recent bookers.
  - **obtainable today** — Five people, four times a year, arranged by email. It is the only source of mechanism in the plan.
  - needs tooling you do not have — It needs a kettle.
  - obtainable and not worth it — It answers the why questions nothing else in the plan can touch.
- Average time on the tool detail page.
  - obtainable today — It would need instrumentation as well, so it fails twice.
  - needs tooling you do not have — True, and the more important objection is that it was removed from the tree in the first lesson as unactionable.
  - **obtainable and not worth it** — Even handed to you free, no value of it would change what anybody does.
- How the duplicate-payment rate compares with similar providers.
  - obtainable today — Nobody publishes it, and definitions would differ even if they did.
  - **needs tooling you do not have** — It needs data that is not yours and a shared definition that does not exist. It belongs on the unanswered list.
  - obtainable and not worth it — It would be worth having; it is simply unavailable.

**Then:** Now check your own three: each should be obtainable this month and worth the hour it costs.

**What to watch for:** Two different reasons to leave something out. Some measures are unavailable, and belong on the unanswered list; others are available and still useless, and belong nowhere.

Worksheet fields for this step:

- For each measure: the claim it supports and the claim it does not
- How the source or sample appears in the statement itself

<details>
<summary>Help with this step</summary>

- **The claim it supports:** What you could honestly say from it. Writing it now stops it growing later.
- **Source in the statement:** Putting where the number came from into the sentence itself, so the two cannot be separated when it is repeated.

Stuck starting? Write the limit before the claim; it is harder and it constrains the claim.

Is it enough? Every claim contains its own source, so it cannot be quoted without it.

</details>

#### 4. Set the review

- Set a date and an owner for reviewing the measures.
- Decide what would make you change or drop one.

**You should end up with:** A review date, an owner, and what would make you change or drop a measure.

Worksheet fields for this step:

- The review date and the owner
- What would make you change or drop a measure — A measure nobody has looked at twice is a measure to drop.

<details>
<summary>Help with this step</summary>

- **Review date:** A date, with a name. Without it a measurement plan becomes a document, and the measures stop being produced without anybody deciding.
- **Dropping a measure:** Removing one nobody has used. It is maintenance, and a plan that only ever grows is one nobody maintains.

Stuck starting? Set the date three months out and write your own name against it.

Is it enough? The drop condition could actually be met.

</details>

#### 5. Write the unanswered list

- List the questions this plan leaves open.
- Save the plan with its limits.

**You should end up with:** A list of the questions this plan cannot answer, and the repair the Check questions asked for.

Worksheet fields for this step:

- The questions this plan leaves open — Anything about people who never arrived, anything comparative, anything at population scale.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Unanswered list:** What the plan leaves open. It is what stops the three measures being treated as the whole picture.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Start with everybody who never arrives; no record of yours can see them.

Is it enough? The list names specific questions rather than saying the plan is limited.

</details>

**Save and continue.** Saved for you: Your inventory, the three measures, their claims and limits and the review date save as you type, on this device first and then online. Kept outside the app: The counting itself happens in a spreadsheet in your own folder. Nothing identifying anybody belongs in it or here. What your creator sees: Your creator reads whether the three measures could be produced this month. A plan that needs tooling is a plan for a different organisation. Your next action: Open Your work and choose Ready for review. The last lesson of the module writes down what none of this can say.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Replace any measure needing tooling with one you could collect this month.

</details>

<details>
<summary>Hint 2</summary>

For each measure write the sentence it supports and the sentence it does not.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: A measurement plan you could actually run.
Task: Write a measurement plan for your project that uses only what you can obtain, states what each measure supports, and names the questions it leaves unanswered.
Challenge one thing at a time, and start with the mistake this lesson is about: “Without analytics we cannot measure anything.” You can count what a small business already records, count things by hand, and ask people. What you cannot do is claim precision or scale, and saying so is what makes the rest usable.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the measure list and ask whether measures are obtainable with existing records or effort. Look at the claims and limits and ask whether each carries a claim and a limit. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m15-l11-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Measures are obtainable with existing records or effort: Three measures with their source named and no new tooling assumed. Each carries a claim and a limit: A supported claim and an excluded claim per measure. A review date and owner exist: A date, a person and a condition for changing a measure. Unanswered questions are listed: A list of what the plan cannot answer, including scale and cause.

**Bring forward:** A measurement plan built from a small business's real records is more impressive than a dashboard mockup, because it could actually run. Module handoff: Avoid unsupported impact claims in all case studies


### Practice and pause points

- Inventory what exists (~25 min): List records the product or provider already keeps. List what you could count by hand and who you could ask.
- Choose three measures (~30 min): Choose three that answer nodes in your metric tree. Prefer measures you can obtain without new tooling.
- Attach claims and limits (~25 min): For each measure write what it supports and what it does not. Include the sample or source in the statement.
- Set the review (~25 min): Set a date and an owner for reviewing the measures. Decide what would make you change or drop one.
- Write the unanswered list (~15 min): List the questions this plan leaves open. Save the plan with its limits.

Pause after any step; save the artifact and next action.

**Free tool path.** A written plan and a spreadsheet. The provider's own records and a handful of conversations are the whole data infrastructure.

### Output

Three measures obtainable with what you have; A claim and a limit per measure; A review date and an owner; A list of questions the plan cannot answer

### Checks

- What can you measure without analytics? Answer: Whatever the business already records, whatever you can count by hand, and whatever people will tell you. That is enough for real questions and not enough for claims about scale.
- Why only three measures? Answer: Because three collected consistently beat ten intended. Choosing three forces the decision about which questions actually matter.
- Why write the unanswered list? Answer: So that a question outside the plan gets a recorded limitation rather than an improvised estimate.

### Rubric and remediation

**Measures are obtainable with existing records or effort**

Adequate evidence: Three measures with their source named and no new tooling assumed.

- 0 — Measures assume analytics you do not have.
- 1 — Mixed, with one unobtainable measure.
- 2 — All three obtainable with named sources.
- 3 — As adequate, and at least one comes from records the provider already keeps.

If below 2: Replace any measure needing tooling with one you could collect this month. Show at recheck: The measure list.

**Each carries a claim and a limit**

Adequate evidence: A supported claim and an excluded claim per measure.

- 0 — Neither stated.
- 1 — Claims stated without limits.
- 2 — Both for every measure.
- 3 — As adequate, and the limits name the claim someone will try to make from it.

If below 2: For each measure write the sentence it supports and the sentence it does not. Show at recheck: The claims and limits.

**A review date and owner exist**

Adequate evidence: A date, a person and a condition for changing a measure.

- 0 — No review.
- 1 — A date without an owner.
- 2 — Date, owner and change condition.
- 3 — As adequate, and the review is soon enough to correct a bad measure.

If below 2: Set a date within three months and name who checks. Show at recheck: The review plan.

**Unanswered questions are listed**

Adequate evidence: A list of what the plan cannot answer, including scale and cause.

- 0 — Not listed.
- 1 — A general caveat.
- 2 — Specific unanswered questions listed.
- 3 — As adequate, and one names what it would take to answer it.

If below 2: Write the questions people will ask that these three measures cannot address. Show at recheck: The unanswered list.

### Portfolio contribution

A measurement plan built from a small business's real records is more impressive than a dashboard mockup, because it could actually run.

### Assigned resources

- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Choosing measures, collecting them and reviewing them. Purpose: Supplies the structure of a plan that is maintained rather than written once. Effort: 45–60 selected min. Free reading, no account. Verified 2026-09-06. It assumes a service with real traffic and published data; scale the practice down to counts and conversations. Fallback: R07.
- R04: [GOV.UK: analyse a research session](https://www.gov.uk/service-manual/user-research/analyse-a-research-session) — Turning small evidence into findings. Purpose: Supports the conversational measures with a method for using them. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Written for research sessions; the discipline transfers to periodic conversations. Fallback: R08.

## Lesson 12: What your numbers cannot say

Stable ID: m15-l12-v1. Core. Areas 14. Optional effort ~120 min.

**Objective.** Write the limitations page for all your quantitative work in this module, and rehearse defending one honest conclusion against pressure for a stronger one.

**Bring forward.** Everything quantitative from this module.

The pressure to overstate is real and usually polite. Rehearsing the honest answer is what makes it available when you need it.

### Learn

A limitations page is reusable. Written once, it carries into the case study, the portfolio and the interview, and it stops you rewriting caveats under time pressure — which is when they get softened. It also makes the work reviewable: someone can check whether your conclusions stay inside it.

The categories differ and matter. Synthetic data supports method demonstration and nothing else. Small real samples support existence and severity claims, not prevalence. Unavailable measures support nothing at all, and the honest response is to say what would be needed rather than to substitute a proxy quietly.

The pressure conversation is worth rehearsing because it is predictable: someone will ask for a percentage, a projection or a confident yes. The useful reply offers what the evidence supports and names what would be needed for more — which is more helpful than a refusal and more honest than a number.

Recording where you were tempted is the last discipline of this module. The place you wanted to round up, extend a trend, or drop an inconvenient participant is the place you will slip when nobody is watching, and writing it down now is a genuine safeguard.

**Common misconception.** “Being rigorous makes me less useful.” Being unreliable makes you less useful. A person who says what the evidence supports, offers the next step, and is right about the limits becomes the person whose numbers are trusted.

### Worked example

The limitations page listed: all funnel figures synthetic and labelled; the survey at 22 responses through two groups; usability findings from three and then two participants; no analytics and no traffic, so no rate is reportable at population scale; the cohort exercise demonstrating method on synthetic data only. The rehearsed exchange: asked for the percentage improvement, the answer was “I cannot give you one honestly — what I have is that two of three participants could not tell their place was held, and duplicate payments in the provider's records over the next month would tell us whether the change helped. I can have that number in four weeks.” The temptation recorded: wanting to present the synthetic funnel without the label because it looked convincing.

#### What your numbers cannot say

Write the limitations page for all your quantitative work in this module, and rehearse defending one honest conclusion against pressure for a stronger one.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: One written page. Rehearsal with another person or aloud to yourself.

- Starting material: Your funnel, cohort, plan and presentations.
- Create HaruCourse/Practice/m15-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Collect the limitations

- Gather every caveat from this module into one page.
- Group them by kind rather than by lesson.

**You should end up with:** Every caveat from this module gathered onto one page and grouped by kind.

Worksheet fields for this step:

- Every caveat from this module, gathered onto one page — Go lesson by lesson. Each one produced at least one.
- Grouped by kind rather than by lesson

<details>
<summary>Help with this step</summary>

- **Limitations page:** One reusable page saying what your quantitative work can and cannot support. Written once, it saves rewriting the same sentences in every document.
- **Grouping by kind:** Synthetic, small-sample and unavailable are three different problems with three different answers. Grouped by lesson they look like a list of excuses.

Stuck starting? Go back through the eleven lessons and copy out every caveat you wrote.

Is it enough? Nothing from the module is missing, including the parts you would rather not restate.

</details>

#### 2. Separate the categories

**See it first.** Made-up example. Writing the limitations page for a tool-library project, and writing it as one list.

- **What I wrote:** Fourteen bullet points, in the order the lessons came. Synthetic funnels next to a twenty-two person survey next to the absence of analytics.
- **How it read:** As a list of apologies. Fourteen reasons not to believe anything, with no shape, and a reader would either skip it or discount the whole project.
- **What was wrong with the order:** It mixed three completely different problems. Invented numbers support nothing about the product; a small sample supports real counts; an unmeasured thing is simply unknown.
- **What grouping produced:** Three short sections with a heading each, saying what that kind of evidence can support. The synthetic section is a warning; the small-sample section is a list of things I can actually say.
- **Why that is a better document:** It reads as a statement of what I know rather than a list of what I do not. The same fourteen facts, in a shape somebody can use.

**The wrong turn:** The wrong turn is listing limitations in the order you met them, because that is how they accumulated. Three kinds of limitation mixed together read as one long apology, and the useful half disappears into it.

**What it costs:** Grouping takes half an hour and means deciding which category each caveat belongs in, and one or two genuinely straddle.

**Still unknown:** Still unknown: whether anybody reads a limitations page at all. It at least exists to be pointed at when a claim starts growing.

- Mark what is synthetic, what is small-sample and what is unavailable.
- State what each category can and cannot support.

**You should end up with:** The three categories separated, each with what it can and cannot support.

Worksheet fields for this step:

- What is synthetic, and what synthetic work can support — It can support a claim about a method. It can support nothing at all about your product.
- What is small-sample, and what a small sample can support — Counts with their route stated. Mechanisms. Not rates, and not comparisons.
- What is unavailable, and what that leaves unknown

<details>
<summary>Help with this step</summary>

- **Synthetic:** Invented numbers. They can demonstrate a method and say nothing whatever about your product.
- **Small sample:** Real people, too few for a rate. They support counts with their route, and mechanisms, and neither rates nor comparisons.
- **Unavailable:** Not measured by anybody. It is different from measured and inconclusive, and the difference matters to whoever reads it.

Stuck starting? Put each caveat under one of the three headings before writing anything about what it supports.

Is it enough? The small-sample section reads as a list of things you can say.

</details>

#### 3. Rehearse the pressure

- Write the request you expect for a stronger claim.
- Write your reply, offering what you can support and what would be needed.
- Say it aloud, or with someone playing the requester.

**You should end up with:** The expected request for a stronger claim, your reply offering what you can support, and a record of saying it aloud.

**Try it with help.** Six replies to a made up request for a percentage that the evidence cannot support. For each one, decide what it does.

- I cannot give you one honestly. What I have is that two of three people we watched could not tell their place was held, and duplicate payments over the next month would tell us whether the change helped. I can have that in four weeks.
  - **honest and useful** — It refuses, offers what exists, and names what would produce more, with a date. Nobody leaves the conversation empty-handed.
  - honest and unhelpful — It gives two usable things and a timeline.
  - an overclaim — Every claim in it is bounded by its sample.
- The data does not support that.
  - honest and useful — It is true and it hands back nothing at all.
  - **honest and unhelpful** — The person still needs something for the slide. A refusal with no alternative usually loses to somebody else’s worse number.
  - an overclaim — Nothing is being claimed.
- Roughly two-thirds, though the sample is small.
  - honest and useful — The caveat is attached and will be dropped the moment it reaches a slide.
  - honest and unhelpful — It is helpful and it is not honest at three people.
  - **an overclaim** — Two-thirds of three is two people. The fraction survives into the summary and the sample does not.
- I can get you a real number in four weeks from the payment records. For now, two of the three people we watched could not tell.
  - **honest and useful** — It leads with what is coming and gives something to use meanwhile, with the sample attached to it.
  - honest and unhelpful — It answers both the immediate need and the underlying one.
  - an overclaim — The count carries its denominator.
- Directionally it is around 60 to 70 per cent.
  - honest and useful — Directionally is a word that makes an invented range sound considered.
  - honest and unhelpful — It is extremely helpful and it is fabricated.
  - **an overclaim** — A range invented to sound cautious is still a number that did not come from anywhere. It will be quoted without the first word.
- I would rather not put a percentage on it, but use your judgement.
  - honest and useful — It offers nothing and hands the decision to somebody with less information than you.
  - **honest and unhelpful** — It is honest about your position and abandons the person, who will now invent something.
  - an overclaim — You are not claiming anything, which is precisely the problem.

**Then:** Now write your own reply, and check it offers something as well as declining something.

**What to watch for:** The overclaims both sound careful: roughly, and directionally. Both survive into a slide with the hedge removed. The useful replies all name something you can support and something that would produce more.

Worksheet fields for this step:

- The request you expect for a stronger claim, in the words somebody would use
- Your reply: what you cannot give, what you can, and what would be needed
- How you rehearsed it, and what was hard to say — Aloud, to somebody or to yourself. The sentence has to be available under pressure, which means having said it once.

<details>
<summary>Help with this step</summary>

- **The polite pressure:** Somebody reasonable asking for a percentage for a slide. It is not an attack and it is the moment most overclaims are made.
- **Offering instead:** Answering with what you can support and what would be needed for more. A refusal with nothing attached sounds obstructive and usually loses.

Stuck starting? Write the request in the words somebody would actually use, then write your answer to that.

Is it enough? Your reply offers two things: what you have, and what would produce more.

</details>

#### 4. Record the temptation

**See it first.** Made-up example. Recording a temptation from a tool-library module, and recording a safe one.

- **What I wrote first:** “I was tempted to overstate the findings.” True of everybody, about nothing in particular, and I felt I had been admirably honest.
- **Why it is useless:** It names no moment, so it cannot warn me about anything. A general confession is a way of not making a specific one.
- **The actual moment:** Building the slide deck. The synthetic funnel chart looked convincing, and the word synthetic in the title made it look like practice material, which it is.
- **What I nearly did:** Moved the label to the notes. I had a reason ready — the audience knew it was synthetic — and the reason arrived after the wish.
- **What writing it down does:** The next time I build a deck, that is the moment I will recognise. A named temptation is a warning; a general one is a paragraph.

**The wrong turn:** The wrong turn is confessing in general, because it is comfortable and sounds self-aware. A temptation with no moment attached cannot warn you about anything.

**What it costs:** Naming the specific moment means writing down something slightly discreditable about yourself, in a document somebody else will read.

**Still unknown:** Still unknown: whether I would have done it. I did not, and being confident that I never would is the belief this exercise is aimed at.

- Write where you wanted to overstate during this module.
- Note what would have made it easy to do so.

**You should end up with:** Where you were tempted to overstate during this module, and why that moment was tempting.

Worksheet fields for this step:

- Where you wanted to overstate during this module
- Why that particular moment was tempting

<details>
<summary>Help with this step</summary>

- **Recording the temptation:** Naming where you wanted to overstate. It is where you will slip later, and knowing it is most of the defence.

Stuck starting? Think of the moment your work looked most convincing, and ask what you left out to make it look that way.

Is it enough? You named a specific moment rather than a general tendency.

</details>

#### 5. File it

- Store the page where your case study and portfolio can reuse it.
- Save the rehearsed reply with it.

**You should end up with:** The page filed where you can reuse it, and the repair the Check questions asked for.

Worksheet fields for this step:

- Where the page lives so you can reuse it
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Reusable:** Kept where your next report will be written, so the sentences do not have to be reconstructed each time.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Put it with your project record rather than with this module’s notes.

Is it enough? You could paste the right section into a report next month without rewriting it.

</details>

**Save and continue.** Saved for you: Your limitations page, the three categories, the rehearsed reply and the temptation save as you type, on this device first and then online. Kept outside the app: File the page with your project record rather than with this module’s notes, so the next report can use it. What your creator sees: Your creator reads the temptation you named. A module with no temptation recorded usually means the work never looked convincing enough to be worth overstating. Your next action: Open Your work and choose Ready for review. This closes Module 15. Module 16 turns to AI-assisted work and AI products.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Go through each lesson's output and copy its limitation into one file.

</details>

<details>
<summary>Hint 2</summary>

Sort your caveats into the three kinds and write what each can support.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: What your numbers cannot say.
Task: Write the limitations page for all your quantitative work in this module, and rehearse defending one honest conclusion against pressure for a stronger one.
Challenge one thing at a time, and start with the mistake this lesson is about: “Being rigorous makes me less useful.” Being unreliable makes you less useful. A person who says what the evidence supports, offers the next step, and is right about the limits becomes the person whose numbers are trusted.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the limitations page and ask whether one page collects every limitation from the module. Look at the categorised page and ask whether synthetic, small-sample and unavailable are separated. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m15-l12-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** One page collects every limitation from the module: A single reusable page covering all quantitative work here. Synthetic, small-sample and unavailable are separated: Three categories with what each supports stated. A reply to pressure is written and rehearsed: A written exchange with an offer of what you can support and a timeline. A temptation is recorded honestly: A named moment where you wanted to overstate, with what made it tempting.

**Bring forward:** The limitations page is directly reusable in the case study and is the artefact most likely to make an experienced reviewer trust the rest. Module handoff: Avoid unsupported impact claims in all case studies


### Practice and pause points

- Collect the limitations (~30 min): Gather every caveat from this module into one page. Group them by kind rather than by lesson.
- Separate the categories (~25 min): Mark what is synthetic, what is small-sample and what is unavailable. State what each category can and cannot support.
- Rehearse the pressure (~30 min): Write the request you expect for a stronger claim. Write your reply, offering what you can support and what would be needed. Say it aloud, or with someone playing the requester.
- Record the temptation (~20 min): Write where you wanted to overstate during this module. Note what would have made it easy to do so.
- File it (~15 min): Store the page where your case study and portfolio can reuse it. Save the rehearsed reply with it.

Pause after any step; save the artifact and next action.

**Free tool path.** One written page. Rehearsal with another person or aloud to yourself.

### Output

A reusable limitations page covering all this module's work; Categories separated: synthetic, small sample, unavailable; A rehearsed reply to a request for a stronger claim; A recorded temptation, named honestly

### Checks

- What can synthetic data support? Answer: A demonstration of method and nothing else. Labelled clearly, it is a legitimate teaching and portfolio artefact; unlabelled it is a fabricated result.
- What is the useful reply to a request for a percentage? Answer: What the evidence supports, plus what would be needed for the stronger claim and when you could have it. That is more helpful than a refusal and more honest than a number.
- Why record where you were tempted? Answer: Because that is where you will slip under deadline pressure, and naming it now is a real safeguard rather than a gesture.

### Rubric and remediation

**One page collects every limitation from the module**

Adequate evidence: A single reusable page covering all quantitative work here.

- 0 — Limitations scattered across documents.
- 1 — A partial collection.
- 2 — One page covering everything, grouped by kind.
- 3 — As adequate, and it is written to be pasted into a case study unchanged.

If below 2: Go through each lesson's output and copy its limitation into one file. Show at recheck: The limitations page.

**Synthetic, small-sample and unavailable are separated**

Adequate evidence: Three categories with what each supports stated.

- 0 — All caveats treated the same.
- 1 — Two categories distinguished.
- 2 — All three with their support levels.
- 3 — As adequate, and the synthetic category names where the label must appear.

If below 2: Sort your caveats into the three kinds and write what each can support. Show at recheck: The categorised page.

**A reply to pressure is written and rehearsed**

Adequate evidence: A written exchange with an offer of what you can support and a timeline.

- 0 — No preparation.
- 1 — A refusal without an alternative.
- 2 — A reply offering what is supportable and what would be needed.
- 3 — As adequate, and it was rehearsed aloud with someone playing the requester.

If below 2: Write the request you fear and the sentence you would want to have ready. Show at recheck: The rehearsed reply.

**A temptation is recorded honestly**

Adequate evidence: A named moment where you wanted to overstate, with what made it tempting.

- 0 — None recorded.
- 1 — A generic acknowledgement.
- 2 — A specific moment with its conditions.
- 3 — As adequate, and a safeguard is named for next time.

If below 2: Look back through the module for the number you wished were stronger, and write it down. Show at recheck: The temptation note.

### Portfolio contribution

The limitations page is directly reusable in the case study and is the artefact most likely to make an experienced reviewer trust the rest.

### Assigned resources

- R37: [NN/g: confidence intervals and margins of error](https://www.nngroup.com/articles/confidence-interval/) — What uncertainty means for a reported figure. Purpose: Grounds the limitations page in the reason small samples cannot carry rates. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. No formulas; the page is about interpretation rather than calculation. Fallback: R45.
- R04: [GOV.UK: analyse a research session](https://www.gov.uk/service-manual/user-research/analyse-a-research-session) — Separating observations, interpretations and decisions. Purpose: Supplies the vocabulary for saying precisely what each claim rests on. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Written for qualitative sessions; the separation applies to quantitative claims too. Fallback: R08.
