# Analytics and experiments

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the all-course action contract](docs/COURSE-AUTHORING.md#all-course-action-contract--13-september-2026). All 224 published teaching lessons use saved action flows. Published, teaching-refined, learner-validated and assessed remain separate states.

Generated from src/module15.ts; edit that source, then run npm run docs:generate. Level 5 · Module m15 · requirement areas 14. Optional effort 30 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m14. This is guidance for meaningful practice, not a lock. Module approved resource pair: R20 / R07. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: What you are actually trying to measure

Stable ID: m15-l01-v1. Core.

Most measurement arguments are about the wrong number because nobody wrote down which outcome it was supposed to serve.

Bring: Your release plan and research findings.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A metric tree from one outcome down to countable events
- Outcome and activity metrics distinguished
- An observability mark on every node
- Two candidate metrics removed for being unactionable

### Start with a clear task

Section: learn. Stable action: welcome.

Build a metric tree for your product connecting one outcome to the behaviours beneath it, and mark which nodes you could observe and which you could not.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Start from the outcome someone cares about, not from what is easy to count.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

A metric tree connects an outcome to the behaviours that produce it.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Distinguish outcome metrics from activity metrics; activity is not value.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Mark which nodes you could actually observe with what you have.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

A metric you cannot act on is a number, not a measure.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The tree for the booking product: outcome — people who intend to attend a class actually attend one. Beneath it: they find a suitable class; they complete a booking without duplicating payment; they arrive prepared. Beneath those: searches that produce results, bookings completed in one session, duplicate payments, prepared-arrival reports from the provider. Observability: the first two are unobservable without analytics; duplicate payments are countable from the provider's records; preparedness is only askable. Two candidate metrics were removed for being unactionable, including time on page.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and state the outcome

Section: practice-plan. Stable action: step-1-brief.

One outcome written as something that happens to a person, and one of your own outputs named as an output.

- Read the assigned guidance on defining success.
- Write the one outcome your product exists to produce.

**Start here:** Finish this sentence: “this product exists so that people …”, and do not mention a screen.

**Enough:** Your outcome would still make sense if the product were replaced by something completely different.

**Outcome:** Something that is true for a person afterwards. It is what the product exists for and it is rarely countable directly.

**Output:** Something the product does or that exists: a screen shipped, a message sent, a page viewed. Easy to count and not the point.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Naming the outcome for a tool library, and naming something the product does.

**What I wrote:** “People can book tools online.” It is what the product exists to do, it is true, and it took four seconds.

**Why it was not an outcome:** It describes the product. If the product disappeared tomorrow, the sentence would simply stop being true, and nothing in it says what anybody was trying to achieve.

**The test I applied:** Would this sentence still make sense if the product were a telephone line and a paper ledger? “People can book tools online” would not. The outcome should survive the change.

**What I wrote instead:** “People who need a tool for a job get one, use it, and bring it back.” That is true of the phone line, the ledger and the website, and it is what any of them exists to produce.

**What that changed underneath:** The tree stopped being about booking and started including collecting and returning, which is where two of the three real problems turned out to be.

**Wrong turn:** The wrong turn is describing the product, because the product is the thing in front of you and describing it feels like naming a purpose. A tree built on it can only ever be about the screens you already have.

**Trade-off:** An outcome that survives replacing the product is vaguer and harder to count, and somebody will ask what it has to do with this quarter’s work.

**Unknown:** Still unknown: whether people who fail to borrow simply go and buy one. Nothing in the tree can see somebody who gave up before arriving.


### The one outcome your product exists to produce

Section: practice-plan. Stable action: write-the-outcome.

Something that happens to a person, not something that happens on a screen.

**Answer:** The one outcome your product exists to produce

Something that happens to a person, not something that happens on a screen.

<details>
<summary>Example</summary>

Example (made up): people who intend to attend a class actually attend one.

</details>


### One thing your product does that is an output rather than an outcome

Section: practice-plan. Stable action: write-output-vs-outcome.

Write your answer for “One thing your product does that is an output rather than an outcome”. Use the task instructions below to decide what to include.

**Answer:** One thing your product does that is an output rather than an outcome




### Build the tree downward

Section: practice-plan. Stable action: step-2-brief.

Three branches, each naming a behaviour and the events beneath it that would indicate it.

- List the behaviours that produce the outcome.
- Beneath each, list events that would indicate it.
- Stop when the leaves are countable in principle.

**Start here:** Take the outcome and ask what has to happen for it to be true. Those are your behaviours.

**Enough:** Every leaf is a thing that either happens or does not, rather than a quantity of feeling.

**Metric tree:** An outcome at the top, the behaviours that produce it beneath, and countable events beneath those. It is what connects a number to a reason for caring about it.

**Leaf:** The bottom of a branch: something that could be counted in principle, even if nobody can count it today.


### Branch 1 · the behaviour, and the events beneath it that would indicate it

Section: practice-plan. Stable action: write-branch-1.

Stop when the leaves are countable in principle, even if you cannot count them today.

**Answer:** Branch 1 · the behaviour, and the events beneath it that would indicate it

Stop when the leaves are countable in principle, even if you cannot count them today.

<details>
<summary>Example</summary>

Example (made up): they complete a booking without paying twice. Beneath it: bookings completed in one session; duplicate payments recorded by the provider.

</details>


### Branch 2 · the behaviour, and the events beneath it that would indicate it

Section: practice-plan. Stable action: write-branch-2.

Write your answer for “Branch 2 · the behaviour, and the events beneath it that would indicate it”. Use the task instructions below to decide what to include.

**Answer:** Branch 2 · the behaviour, and the events beneath it that would indicate it




### Branch 3 · the behaviour, and the events beneath it that would indicate it

Section: practice-plan. Stable action: write-branch-3.

Write your answer for “Branch 3 · the behaviour, and the events beneath it that would indicate it”. Use the task instructions below to decide what to include.

**Answer:** Branch 3 · the behaviour, and the events beneath it that would indicate it




### Separate outcome from activity

Section: practice-plan. Stable action: step-3-brief.

Every node marked outcome or activity, with any activity node not connected upward identified.

- Mark each node as outcome or activity.
- Check every activity node is connected upward to an outcome.

**Start here:** Mark the leaves first; activity and outcome are easiest to tell apart at the bottom.

**Enough:** Every activity node has a path upward to the outcome, or is marked as having none.

**Activity metric:** A count of things happening: sessions, clicks, searches. It can rise while the outcome falls, which is why it needs a connection upward.

**Unconnected metric:** One nobody can trace to an outcome. It gets reported every month for years, and no value of it ever changes a decision.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Building a metric tree for a tool library, and building it up from what was countable.

**How I started:** With what I could get: page views, searches, time on page, bookings started, bookings completed. Five real numbers, all available.

**What I built with them:** A tidy tree, with the countable things at the bottom and increasingly vague headings above them until the top said engagement.

**What was wrong with it:** Engagement is not something anybody wants. Nobody comes to a tool library to engage with it; they come to borrow a drill and take it home.

**What starting from the top produced:** People who need a tool get one, use it, and bring it back. Beneath that: they find a tool that suits the job; they collect it without a wasted journey; they return it on time.

**What happened to my five numbers:** Two connected. Bookings completed sits under collecting without a wasted journey. Duplicate payments sits there too. Searches, page views and time on page connected to nothing, because a search that finds nothing looks identical to one that works.

**Wrong turn:** The wrong turn is building upward from what you can count, because those numbers exist and the outcome does not. It produces a tree whose top is a word nobody outside the team wants.

**Trade-off:** Starting from the outcome means most of your tree is unobservable, and the report is much shorter than one built from available numbers.

**Unknown:** Still unknown: whether people return tools late because they forgot or because the hours are awkward. The tree says the return happens; nothing in it says why.


### Each node marked outcome or activity

Section: practice-plan. Stable action: write-marked-kind.

Activity is something people do. Outcome is something that is true afterwards. Activity is not value.

**Answer:** Each node marked outcome or activity

Activity is something people do. Outcome is something that is true afterwards. Activity is not value.


### Any activity node not connected upward to an outcome

Section: practice-plan. Stable action: write-connected-upward.

An unconnected activity metric is the one that gets reported for years without anybody asking what it is for.

**Answer:** Any activity node not connected upward to an outcome

An unconnected activity metric is the one that gets reported for years without anybody asking what it is for.


### Mark observability

Section: practice-plan. Stable action: step-4-brief.

Every node marked observable, askable or unavailable, with what you would need for the unavailable ones.

- Mark each node observable, askable, or unavailable to you.
- Note what you would need to observe the unavailable ones.

**Start here:** Go leaf by leaf and ask where the number would actually come from.

**Enough:** Nothing is marked observable unless you could name the record it comes from.

**Observable:** You could count it with what you have: a provider’s records, a support log, a count done by hand.

**Askable:** You could only find out by asking somebody. It is real evidence and it is not a measurement.

**Unavailable:** Neither, today. Saying so is what stops a tree implying data nobody has.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six candidate metrics for a made up tool library. For each one, decide what kind it is.

The number of people charged twice for one booking, counted from the payment provider’s records.

- an outcome you could observe
- an activity metric
- not actionable at all

<details>
<summary>After your attempt</summary>

an outcome you could observe — It is a thing that happened to a person, it is bad, and it can be counted today. Every value of it suggests an action.

an activity metric — Nobody set out to pay twice. It is a consequence rather than a behaviour.

not actionable at all — It is one of the few on this list that points straight at work.

Now mark your own nodes the same way, and check every askable one says so rather than pretending to be countable.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six candidate metrics for a made up tool library. For each one, decide what kind it is.

The number of searches performed each week.

- an outcome you could observe
- an activity metric
- not actionable at all

<details>
<summary>After your attempt</summary>

an outcome you could observe — Nothing is true for anybody afterwards. It rises when search works well and when it works badly.

an activity metric — A count of people doing something, with no direction. It needs a connection upward, and it usually does not have one.

not actionable at all — It becomes actionable if paired with whether the search found anything, which is the connection it lacks.

Now mark your own nodes the same way, and check every askable one says so rather than pretending to be countable.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six candidate metrics for a made up tool library. For each one, decide what kind it is.

Average time on the tool detail page.

- an outcome you could observe
- an activity metric
- not actionable at all

<details>
<summary>After your attempt</summary>

an outcome you could observe — Nothing about it is an outcome for anybody.

an activity metric — It is one, and the deeper problem is that no value of it implies an action: it goes up when people are interested and when they are lost.

not actionable at all — This is the classic metric to remove. Whatever it does, somebody can explain it as good news.

Now mark your own nodes the same way, and check every askable one says so rather than pretending to be countable.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six candidate metrics for a made up tool library. For each one, decide what kind it is.

The proportion of tools returned by their due date.

- an outcome you could observe
- an activity metric
- not actionable at all

<details>
<summary>After your attempt</summary>

an outcome you could observe — It is part of the outcome and it is countable from the library’s own records. A fall in it is a reason to look at something.

an activity metric — Returning is a behaviour, and this one sits directly under the outcome rather than floating.

not actionable at all — A change in it would change what somebody does.

Now mark your own nodes the same way, and check every askable one says so rather than pretending to be countable.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six candidate metrics for a made up tool library. For each one, decide what kind it is.

Whether people arrive knowing what they need to bring.

- an outcome you could observe
- an activity metric
- not actionable at all

<details>
<summary>After your attempt</summary>

an outcome you could observe — It is genuinely part of the outcome and it cannot be observed: nothing in any record shows what somebody knew.

an activity metric — It is not a behaviour anybody performs on the product.

not actionable at all — Not as a metric. It is askable, which makes it real evidence and not a number, and the tree should mark it that way rather than dropping it.

Now mark your own nodes the same way, and check every askable one says so rather than pretending to be countable.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six candidate metrics for a made up tool library. For each one, decide what kind it is.

Bookings completed in a single visit rather than across two.

- an outcome you could observe
- an activity metric
- not actionable at all

<details>
<summary>After your attempt</summary>

an outcome you could observe — Completing in one visit is convenient and is not itself what anybody wanted; somebody checking with a partner and returning is fine.

an activity metric — A behaviour with a plausible connection upward to collecting without a wasted journey. Useful, once that connection is written down.

not actionable at all — It is actionable, as long as nobody treats a return visit as a failure.

Now mark your own nodes the same way, and check every askable one says so rather than pretending to be countable.

</details>


### Each node marked observable, askable, or unavailable to you

Section: practice-plan. Stable action: write-observability.

Write your answer for “Each node marked observable, askable, or unavailable to you”. Use the task instructions below to decide what to include.

**Answer:** Each node marked observable, askable, or unavailable to you



<details>
<summary>Example</summary>

Example (made up): duplicate payments — observable from the provider’s records. Whether people arrive prepared — askable only.

</details>


### What you would need in order to observe the unavailable ones

Section: practice-plan. Stable action: write-what-needed.

Write your answer for “What you would need in order to observe the unavailable ones”. Use the task instructions below to decide what to include.

**Answer:** What you would need in order to observe the unavailable ones




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Would more metrics give a fuller picture?

- They give more numbers to argue with. Three connected to an outcome with their limits stated support decisions; twenty unconnected ones support whichever conclusion somebody wanted.
- Yes, as long as each one is accurate.
- Yes, because you cannot know in advance which will matter.

<details>
<summary>After your attempt</summary>

They give more numbers to argue with. Three connected to an outcome with their limits stated support decisions; twenty unconnected ones support whichever conclusion somebody wanted. — Every unconnected number is available to whoever is arguing. A small tree with observability marked is harder to misuse and easier to act on.

Yes, as long as each one is accurate. — Accuracy is not the problem. Twenty accurate numbers with no connection to an outcome is a menu.

Yes, because you cannot know in advance which will matter. — The tree is how you decide which will matter, which is the work this lesson is about.

Improve: Check every activity node in step 3 has a path upward, and remove or mark the ones that do not. Record the change in step 5.

Check again: No number in your tree floats without a connection.

Answers to revisit: marked-kind, connected-upward, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You built your tree upward from the numbers you can actually get. What tends to happen?

- The top becomes a word nobody outside the team wants, such as engagement, because the available numbers do not add up to an outcome.
- Nothing much, since the numbers are the same either way.
- It is more practical, since unobservable nodes cannot be used.

<details>
<summary>After your attempt</summary>

The top becomes a word nobody outside the team wants, such as engagement, because the available numbers do not add up to an outcome. — Nobody comes to a tool library to engage with it. Starting from the outcome produces a shorter tree with more unobservable nodes, which is the honest shape.

Nothing much, since the numbers are the same either way. — The numbers are the same and their meaning is not. Built upward, searches and time on page look like they belong.

It is more practical, since unobservable nodes cannot be used. — Unobservable nodes are what tell you what you are missing. Leaving them out makes the gap invisible.

Improve: Rebuild one branch in step 2 starting from the outcome, and see which of your numbers survive. Record the change in step 5.

Check again: Your top node is something a person outside the team would want.

Answers to revisit: branch-1, branch-2, branch-3, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Time on page is easy to get and everybody reports it. Should it be in your tree?

- No. It rises when people are interested and when they are lost, so no value of it changes what anybody does.
- Yes, since it is a useful indicator of engagement.
- Yes, as a supporting metric alongside others.

<details>
<summary>After your attempt</summary>

No. It rises when people are interested and when they are lost, so no value of it changes what anybody does. — The test is what you would do if it doubled and what you would do if it halved. When the answer to both is nothing, the number exists to be reported rather than used.

Yes, since it is a useful indicator of engagement. — Engagement is the word that lets an unactionable number look meaningful. Ask which action a change in it would trigger.

Yes, as a supporting metric alongside others. — Supporting metric usually means one that can be quoted when it agrees with you.

Improve: Apply the doubled-or-halved test to every leaf in step 5 and remove two. Record the change.

Check again: Every metric left would trigger a different action depending on which way it moved.

Answers to revisit: removed-two, improvement-made

</details>


### Remove the unactionable

Section: practice. Stable action: step-5-brief.

Two metrics removed for being unactionable, with the reason nobody would act on them.

- Remove any metric nobody would act on.
- Record the two you removed and why.
- Save the tree.

**Start here:** For each candidate, ask what you would do if it doubled, and what you would do if it halved.

**Enough:** Both removals name what would have happened in each direction, which is why nothing would.

**Unactionable:** No value of it would change what anybody does. Usually because it can be read as good news whichever way it moves.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Two metrics you removed, and why nobody would act on them

Section: practice. Stable action: write-removed-two.

Write your answer for “Two metrics you removed, and why nobody would act on them”. Use the task instructions below to decide what to include.

**Answer:** Two metrics you removed, and why nobody would act on them



<details>
<summary>Example</summary>

Example (made up): time on page. It goes up when people are engaged and when they are lost, so no value of it changes what anybody does.

</details>


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson counts people through one task and finds out what counting cannot tell you.


<details>
<summary>Optional hints and reference material</summary>

- Write the outcome first, then ask what behaviours would produce it, then what would indicate each behaviour.
- For each activity node, trace the path upward. Anything unconnected is a number without a purpose.

- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Defining what success means and choosing measures that reflect it. Purpose: Supplies the outcome-first framing this lesson builds on. Free reading, no account. Verified 2026-09-06. Written for government services that publish performance data; you have neither the platform nor the traffic, so the observability marks are essential. Fallback: R07.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The point on defining success and publishing performance data. Purpose: Connects measurement to an accountability the service standard makes explicit. Free reading, no account. Verified 2026-09-06. Statutory context; take the discipline of stating success in advance. Fallback: R07.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The tree starts from an outcome and reaches countable events**

Adequate evidence: A tree with a stated outcome at the top and countable leaves.

0 — A list of available metrics.

1 — A tree built from data upward.

2 — Built downward from an outcome to countable leaves.

3 — As adequate, and the outcome is one someone outside the team would recognise as mattering.

Repair: Write the outcome first, then ask what behaviours would produce it, then what would indicate each behaviour. Recheck: The tree.

**Outcome and activity nodes are distinguished**

Adequate evidence: Each node labelled, with activity nodes connected upward.

0 — Not distinguished.

1 — Labelled without checking connections.

2 — Labelled and every activity node connected to an outcome.

3 — As adequate, and an activity metric that could move for opposite reasons is annotated as ambiguous.

Repair: For each activity node, trace the path upward. Anything unconnected is a number without a purpose. Recheck: The labelled tree.

**Every node is marked observable, askable or unavailable**

Adequate evidence: An observability mark per node with what would be needed for the unavailable ones.

0 — Not marked.

1 — Marked without stating what is missing.

2 — All marked, with requirements named for the unavailable.

3 — As adequate, and the askable nodes have a planned conversation rather than an intention.

Repair: Go node by node asking how you would see this today with what you actually have. Recheck: The marked tree.

**Unactionable metrics are removed with reasons**

Adequate evidence: At least two removals with the reason each would change nothing.

0 — Nothing removed.

1 — Removed without reasons.

2 — Two removed with reasons recorded.

3 — As adequate, and one removal is a metric you were attached to.

Repair: For each metric ask what you would do differently if it moved. If nothing, remove it. Recheck: The removal list.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson counts people through one task and finds out what counting cannot tell you.

**Review criteria:**

- The tree starts from an outcome and reaches countable events
- Outcome and activity nodes are distinguished
- Every node is marked observable, askable or unavailable
- Unactionable metrics are removed with reasons

<details>
<summary>Reading, video and deeper explanation</summary>

- The assigned guidance frames measurement as starting from what success means for the service, and the practical instrument is a tree: the outcome at the top, the behaviours that produce it beneath, and the countable events beneath those. Built downward it stays connected to something that matters; built upward from whatever the analytics happened to record, it produces the familiar dashboard nobody uses.
- Activity is not value. Page views, sessions and clicks are counts of things happening; they become useful only when tied to a behaviour that produces the outcome. A rise in views of the cancellation page might mean people are finding it, or that more people need it, and without the tree you cannot tell which and will report whichever suits.
- Marking observability is the part that makes the tree honest for your situation. You have no analytics platform and no traffic, so most nodes will be unobservable, and that is the finding rather than a failure: it tells you which questions need conversations, which need a small manual count, and which are simply unavailable.
- A measure you cannot act on is decoration. If a number moves and nobody would do anything differently, it does not belong in the tree; it belongs in a list of things you might look at out of curiosity, which is a different document.

[GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success).

</details>

## Lesson 2: Funnels, and what a drop-off does not tell you

Stable ID: m15-l02-v1. Core.

A funnel shows you where people stop. It never shows you why, and the gap between those two is where most bad product decisions are made.

Bring: Your flow and your usability findings.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A funnel of one task with clearly labelled synthetic counts
- The largest drop identified proportionally
- Three explanations the data cannot distinguish
- A note of which drops might be correct rather than problems

### Start with a clear task

Section: learn. Stable action: welcome.

Build a funnel for one task from explicitly synthetic counts, identify the largest drop, and write three different explanations that the data cannot distinguish between.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

A funnel counts people reaching each step of one task.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

The biggest drop is where to look, not what to fix.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Several explanations always fit the same drop.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Some drops are correct: people who should not continue, leaving.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Label synthetic data as synthetic, every time it appears.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A synthetic funnel for the booking task, clearly labelled: 1,000 reach the class list, 420 open a class, 180 begin booking, 96 reach payment, 71 complete. The largest proportional drop is from opening a class to beginning a booking. Three explanations that fit equally: the price is higher than expected at that point; the date is inconvenient and there is no easy route to alternatives; and people are checking with someone else and will return later, which the funnel would count as a loss. The third would need a returning-visitor view the data does not have. The write-up marks every number synthetic.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Define the steps

Section: practice-plan. Stable action: step-1-brief.

One task with its steps in order, and a written definition of what counts as reaching each.

- Take one task from your flow and list its steps in order.
- Decide what counts as reaching each step.

**Start here:** Take one task from your own flow and write its steps before thinking about any numbers.

**Enough:** Somebody else could count your funnel and get the same answer.

**Funnel:** A count of people reaching each step of one task. It shows where people stop and never why.

**What counts as reaching:** The definition of each step. Without it, two people count the same thing differently and the numbers cannot be compared.


### One task, with its steps in order

Section: practice-plan. Stable action: write-task-steps.

Write your answer for “One task, with its steps in order”. Use the task instructions below to decide what to include.

**Answer:** One task, with its steps in order




### For each step: what counts as reaching it

Section: practice-plan. Stable action: write-counts-as.

Reaching a screen, pressing something, arriving at an outcome. Two people will count differently unless this is written down.

**Answer:** For each step: what counts as reaching it

Reaching a screen, pressing something, arriving at an outcome. Two people will count differently unless this is written down.


### Populate with synthetic counts

Section: practice-plan. Stable action: step-2-brief.

Invented counts marked synthetic, the proportional drop at each step with your working, and the largest one identified.

- Invent plausible counts and label them synthetic.
- Calculate the proportional drop at each step, not just the absolute.

**Start here:** Work out the proportion for each step by hand, writing the division you did.

**Enough:** Your largest drop is the largest proportion, and you can say why that is the right ranking.

**Proportional drop:** People lost at a step divided by people who reached it. Going from 420 to 180 loses 240 of 420, about 57 per cent.

**Absolute drop:** The raw number lost. The biggest one is usually at the top, where the most people are, which is why it is the wrong thing to rank by.

**Synthetic:** Invented for practice. The arithmetic is real and the numbers are not, and every place they appear has to say so.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Reading a synthetic funnel for a tool library, and reading the wrong drop as the biggest.

**The numbers:** Synthetic throughout: 1,000 reach the list, 420 open a tool, 180 begin booking, 96 reach payment, 71 complete.

**What I said first:** The biggest problem is the list: we lose 580 people there, more than everywhere else combined.

**Why that is the wrong reading:** 580 is the largest number because 1,000 is the largest starting point. Most of a landing audience never wanted to borrow anything today.

**What the proportions showed:** 58 per cent at the list, then 57 per cent from opening a tool to beginning a booking, then 47, then 26. The second is nearly as steep and applies to people who had already chosen a tool.

**Why that step is the interesting one:** Everybody in it has shown intent. Whatever stops them there is stopping people who wanted the thing, which is not true of the first step at all.

**Wrong turn:** The wrong turn is ranking by the number lost, because that number is the largest and it is at the top. The top of a funnel is where the least committed people are, and losing them is mostly correct.

**Trade-off:** Proportional drops make the top of the funnel look less urgent than it feels, and somebody will point out that 580 people is a lot of people.

**Unknown:** Still unknown: everything about why, and these numbers are invented anyway. The arithmetic is the thing being practised here, not the product.


### Your invented counts at each step, marked synthetic

Section: practice-plan. Stable action: write-counts-invented.

Write your answer for “Your invented counts at each step, marked synthetic”. Use the task instructions below to decide what to include.

**Answer:** Your invented counts at each step, marked synthetic



<details>
<summary>Example</summary>

Example (made up, synthetic): 1,000 reach the list, 420 open a tool, 180 begin booking, 96 reach payment, 71 complete.

</details>


### The proportional drop at each step, with your working

Section: practice-plan. Stable action: write-proportional-drops.

Proportional drop is the number lost at a step divided by the number who reached it. 420 to 180 loses 240 of 420, which is about 57 per cent.

**Answer:** The proportional drop at each step, with your working

Proportional drop is the number lost at a step divided by the number who reached it. 420 to 180 loses 240 of 420, which is about 57 per cent.


### The largest proportional drop, and why it is not simply the largest number lost

Section: practice-plan. Stable action: write-largest-drop.

Write your answer for “The largest proportional drop, and why it is not simply the largest number lost”. Use the task instructions below to decide what to include.

**Answer:** The largest proportional drop, and why it is not simply the largest number lost




### Write competing explanations

Section: practice-plan. Stable action: step-3-brief.

Three explanations for the largest drop that the numbers cannot distinguish, each with the evidence that would separate it.

- For the largest drop, write three explanations that fit the numbers.
- State what evidence would separate them.

**Start here:** Write three explanations that are as different from each other as you can make them.

**Enough:** The three imply three different pieces of work.

**Competing explanation:** A different reason that fits the same numbers exactly. There are always several, and a funnel cannot choose between them.

**Separating evidence:** What you would have to observe or ask to tell two explanations apart. It is what turns a funnel into a research question.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Explaining a drop in a synthetic tool-library funnel, and writing three versions of one explanation.

**What I wrote:** The price is a surprise; the price appears too late; people do not expect to pay at all. Three lines, and I felt I had covered the possibilities.

**What they had in common:** All three are about price. If any of them is right, the work is the same work: show the cost earlier.

**Why that is a problem:** Three explanations that imply one piece of work is one explanation written three ways. It feels like breadth and it narrows the investigation to a single hypothesis.

**The test I started using:** Would these three send me to do different things? If not, at least two of them are the same.

**What the real three became:** The price surprises people at that point. The dates available do not suit them and nothing offers alternatives. They are checking with somebody else and will return, which this funnel counts as a loss. Three different pieces of work, and the third needs data I do not have.

**Wrong turn:** The wrong turn is generating variations of your first idea, because the first idea arrives immediately and the variations arrive easily after it. Three explanations pointing at one fix leave you as narrow as one.

**Trade-off:** Genuinely different explanations are harder to think of and make the finding look less conclusive, because now there are three quite separate things to investigate.

**Unknown:** Still unknown: whether any of the three is right, and the numbers are invented in any case. What the exercise produces is the habit rather than an answer about a product.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six things somebody said about the same made up drop in a synthetic funnel. For each one, decide what it is.

The price appears later than people expect, so they stop when they see it.

- an explanation the data allows
- a conclusion the data cannot support
- something the funnel cannot see at all

<details>
<summary>After your attempt</summary>

an explanation the data allows — It fits the numbers exactly, and so do two others. That is what makes it an explanation rather than a finding.

a conclusion the data cannot support — It is not being asserted as true; it is one candidate.

something the funnel cannot see at all — The funnel cannot confirm it and the step it describes is inside the funnel.

Now write your own three explanations, and check none of them is really a conclusion or a claim about something the funnel cannot see.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six things somebody said about the same made up drop in a synthetic funnel. For each one, decide what it is.

The problem is at this step, so we should redesign this screen.

- an explanation the data allows
- a conclusion the data cannot support
- something the funnel cannot see at all

<details>
<summary>After your attempt</summary>

an explanation the data allows — It skips straight past explanation to a decision.

a conclusion the data cannot support — People stopping at a step does not mean the step caused it. The cause may be three screens earlier, which the funnel cannot show.

something the funnel cannot see at all — The step is visible; the causation is not.

Now write your own three explanations, and check none of them is really a conclusion or a claim about something the funnel cannot see.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six things somebody said about the same made up drop in a synthetic funnel. For each one, decide what it is.

People are checking with somebody else and will come back tomorrow.

- an explanation the data allows
- a conclusion the data cannot support
- something the funnel cannot see at all

<details>
<summary>After your attempt</summary>

an explanation the data allows — It fits the numbers, and this funnel counts sessions rather than people, so a return would be counted as a new visitor and this explanation is invisible to it.

a conclusion the data cannot support — It is offered as a possibility rather than a conclusion.

something the funnel cannot see at all — Without a returning-visitor view, somebody coming back is indistinguishable from somebody leaving for ever.

Now write your own three explanations, and check none of them is really a conclusion or a claim about something the funnel cannot see.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six things somebody said about the same made up drop in a synthetic funnel. For each one, decide what it is.

The dates available do not suit them and there is no easy route to alternatives.

- an explanation the data allows
- a conclusion the data cannot support
- something the funnel cannot see at all

<details>
<summary>After your attempt</summary>

an explanation the data allows — Consistent with the same numbers as the price explanation, and it implies completely different work.

a conclusion the data cannot support — Nothing is being asserted.

something the funnel cannot see at all — The funnel cannot distinguish it, and it is at least about a step the funnel counts.

Now write your own three explanations, and check none of them is really a conclusion or a claim about something the funnel cannot see.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six things somebody said about the same made up drop in a synthetic funnel. For each one, decide what it is.

Our drop here is worse than the industry average, so we are underperforming.

- an explanation the data allows
- a conclusion the data cannot support
- something the funnel cannot see at all

<details>
<summary>After your attempt</summary>

an explanation the data allows — It explains nothing about what happened.

a conclusion the data cannot support — Two funnels defined differently are not comparable, and these particular numbers are invented. It is a comparison of two things that were never measured the same way.

something the funnel cannot see at all — The funnel can see its own numbers; what it cannot see is anybody else’s definitions.

Now write your own three explanations, and check none of them is really a conclusion or a claim about something the funnel cannot see.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six things somebody said about the same made up drop in a synthetic funnel. For each one, decide what it is.

It is worse on phones than on laptops.

- an explanation the data allows
- a conclusion the data cannot support
- something the funnel cannot see at all

<details>
<summary>After your attempt</summary>

an explanation the data allows — It might well be true and this funnel is not split by device, so nothing in it speaks to the question.

a conclusion the data cannot support — It would become one if asserted; as written it is a claim about a split the data does not have.

something the funnel cannot see at all — Any claim about a group the funnel does not separate is invisible to it. Splitting it would be a reasonable next step.

Now write your own three explanations, and check none of them is really a conclusion or a claim about something the funnel cannot see.

</details>


### Three explanations for the largest drop that the numbers cannot tell apart

Section: practice-plan. Stable action: write-three-explanations.

Write your answer for “Three explanations for the largest drop that the numbers cannot tell apart”. Use the task instructions below to decide what to include.

**Answer:** Three explanations for the largest drop that the numbers cannot tell apart




### For each: what evidence would separate it from the others

Section: practice-plan. Stable action: write-what-separates.

Write your answer for “For each: what evidence would separate it from the others”. Use the task instructions below to decide what to include.

**Answer:** For each: what evidence would separate it from the others




### Find the healthy drops

Section: practice-plan. Stable action: step-4-brief.

A step where people leaving is correct, with what a healthy drop looks like there.

- Identify any step where people leaving is correct.
- Write what a healthy drop would look like there.

**Start here:** Look for a step whose job is partly to send people away.

**Enough:** You named what a good drop would look like there, not only that one exists.

**Healthy drop:** People leaving because they should: the tool is the wrong size, the class is not for them. A funnel counts it identically to a failure.


### A step where people leaving is the right outcome, and what a healthy drop looks like there

Section: practice-plan. Stable action: write-healthy-drop.

Write your answer for “A step where people leaving is the right outcome, and what a healthy drop looks like there”. Use the task instructions below to decide what to include.

**Answer:** A step where people leaving is the right outcome, and what a healthy drop looks like there



<details>
<summary>Example</summary>

Example (made up): people who open a tool and find it is the wrong size should leave. A drop there is the listing doing its job.

</details>


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The funnel shows most people stop at checkout. Does that mean the problem is at checkout?

- No. It shows people stop there. The problem may have been created three steps earlier by a price that was never shown.
- Yes, since that is the step where they leave.
- Yes, unless the earlier steps also show drops.

<details>
<summary>After your attempt</summary>

No. It shows people stop there. The problem may have been created three steps earlier by a price that was never shown. — A funnel locates where to look, not what to fix. Several explanations always fit the same drop, and choosing one without evidence is how expensive redesigns of the wrong screen happen.

Yes, since that is the step where they leave. — Where somebody leaves is where the accumulated reasons become too much. It is not necessarily where any of them started.

Yes, unless the earlier steps also show drops. — A step can create a problem without losing anybody, by setting an expectation that fails later.

Improve: Write three explanations for your largest drop in step 3, at least one of which is about an earlier step. Record the change in step 5.

Check again: Your explanations are not all about the step where the drop appears.

Answers to revisit: three-explanations, what-separates, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The biggest number of people is lost at the first step. Is that your biggest problem?

- Probably not. The top of a funnel holds the least committed people, and losing most of them is correct.
- Yes, since that is where most people are lost.
- Yes, because improving it would affect the most people.

<details>
<summary>After your attempt</summary>

Probably not. The top of a funnel holds the least committed people, and losing most of them is correct. — Ranking by proportion rather than by count moves attention to steps where people had already shown intent. Those are the ones where a loss means something.

Yes, since that is where most people are lost. — It is where most people are, so it is where most people leave. The proportion is what makes steps comparable.

Yes, because improving it would affect the most people. — It would affect the most people who were never going to continue.

Improve: Work out proportional drops in step 2 and identify the largest by proportion. Record the change in step 5.

Check again: Your largest drop was chosen by proportion with the working shown.

Answers to revisit: counts-invented, proportional-drops, largest-drop, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your funnel uses invented numbers and the caption says so. Is that enough?

- No. Charts get screenshotted and travel without their captions, so the word belongs in the chart itself.
- Yes, a caption is a clear label.
- Yes, since everybody in the room knows.

<details>
<summary>After your attempt</summary>

No. Charts get screenshotted and travel without their captions, so the word belongs in the chart itself. — A synthetic funnel quoted six months later as a real conversion rate is the exact damage this rule prevents, and it costs four words to avoid.

Yes, a caption is a clear label. — It is clear while it is attached, which is not for long.

Yes, since everybody in the room knows. — Everybody in the room does. The chart outlives the room.

Improve: Move the synthetic label into the chart title in step 5 and record the change.

Check again: A screenshot of the chart alone still says the numbers are invented.

Answers to revisit: labelled-chart, improvement-made

</details>


### Label and record

Section: practice. Stable action: step-5-brief.

Every number marked synthetic on the chart itself, and the repair the Check questions asked for.

- Mark every number synthetic on the chart itself.
- Save the funnel with the explanations.

**Start here:** Put the word into the chart title, not underneath it.

**Enough:** A screenshot of your chart alone would still say the numbers are invented.

**Labelling on the chart:** Putting the word synthetic in the chart rather than in a caption. Charts get screenshotted and travel without their captions.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### How every number is marked synthetic on the chart itself

Section: practice. Stable action: write-labelled-chart.

On the chart, not only in a caption. Charts travel away from their captions.

**Answer:** How every number is marked synthetic on the chart itself

On the chart, not only in a caption. Charts travel away from their captions.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson takes the rates you have been writing and asks what they can support.


<details>
<summary>Optional hints and reference material</summary>

- Take your m07 flow and use its actual steps, defining what counts as reaching each.
- Add the label to the chart itself; a caption elsewhere does not travel with a screenshot.

- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — The sections on using performance data and on what a measure can and cannot show. Purpose: Supports reading a funnel as direction rather than explanation. Free reading, no account. Verified 2026-09-06. Government context with real data; your counts are synthetic and must be labelled as such everywhere. Fallback: R07.
- R63: [UK Analysis Function: data visualisation charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/) — The rules for bar charts, axes and labelling. Purpose: Keeps the funnel chart honest about proportions and readable without a legend. Free reading, no account. Verified 2026-09-06; published 19 May 2022. It excludes interactive charts and dashboards. Fallback: R29.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The funnel's steps match a real task**

Adequate evidence: Steps drawn from your own flow with a stated definition of reaching each.

0 — Generic funnel stages.

1 — Steps from the flow without definitions.

2 — Steps and definitions both from your own task.

3 — As adequate, and a step is split because it hid a decision point.

Repair: Take your m07 flow and use its actual steps, defining what counts as reaching each. Recheck: The funnel steps.

**Synthetic counts are labelled wherever they appear**

Adequate evidence: The word synthetic on the chart, in the write-up and in any portfolio use.

0 — Numbers presented without qualification.

1 — Labelled in one place only.

2 — Labelled everywhere the numbers appear.

3 — As adequate, and the label states why synthetic data was used.

Repair: Add the label to the chart itself; a caption elsewhere does not travel with a screenshot. Recheck: The labelled funnel.

**Three competing explanations are written with separating evidence**

Adequate evidence: Three plausible causes for the largest drop and what would distinguish them.

0 — One explanation asserted.

1 — Several explanations without separating evidence.

2 — Three with what would separate them.

3 — As adequate, and one explanation would make the drop acceptable rather than a problem.

Repair: For your largest drop, write every reason a person might stop there, then what evidence would rule each in or out. Recheck: The explanations.

**Healthy drops are identified**

Adequate evidence: At least one step where leaving is correct, with what healthy looks like.

0 — Every drop treated as a loss.

1 — Healthy drops mentioned generally.

2 — At least one identified with its expected shape.

3 — As adequate, and the write-up warns against optimising it away.

Repair: Ask at each step whether some people should stop here. Where the answer is yes, say what proportion would be reasonable. Recheck: The healthy-drop note.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson takes the rates you have been writing and asks what they can support.

**Review criteria:**

- The funnel's steps match a real task
- Synthetic counts are labelled wherever they appear
- Three competing explanations are written with separating evidence
- Healthy drops are identified

<details>
<summary>Reading, video and deeper explanation</summary>

- A funnel is a simple instrument: define the steps of one task, count how many people reach each, and look at where the number falls. Its value is direction — it tells you where to spend qualitative effort — and its danger is that the shape looks explanatory when it is only descriptive.
- Every drop has multiple explanations. People leaving at payment might not trust the payment, might have discovered a cost, might have intended to check with someone, or might have been interrupted. The funnel cannot separate these, and the choice between them is usually made by whoever has the strongest opinion unless someone goes and finds out.
- Some drops are healthy. A step that filters out people who cannot attend on that date is doing its job, and treating every fall as a leak leads to designs that push people forward into commitments they will regret and cancel. Ask what a correct drop would look like before treating one as a problem.
- Because you have no real traffic, this lesson uses synthetic counts, and the rule from the resource catalog applies: label them synthetic wherever they appear, including in a portfolio. A funnel built from invented numbers teaches the reasoning and proves nothing about a real product.

[GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success).

</details>

## Lesson 3: Rates, intervals and small numbers

Stable ID: m15-l03-v1. Core.

A rate with no interval is a claim pretending to be a measurement, and it is the commonest way design work misleads people.

Bring: Any counts you hold from earlier modules.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Three rates with computed intervals and inputs shown
- Any unsupportable claim rewritten as a count
- A written rule for when you will report a rate at all
- One comparison abandoned or qualified

### Start with a clear task

Section: learn. Stable action: welcome.

Attach an interval to three rates from your own work, and rewrite any claim the interval cannot support.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

A rate from a small count carries a wide interval.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Report the interval beside the rate, or report the count instead.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Sample size guidance is for planning, not for justifying claims afterwards.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Comparing two rates needs more care than reporting one.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Rewriting a claim you cannot support is the exercise, not a failure.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Three rates were reworked. From the m05 survey: 9 of 22 unsure their payment had gone through, previously written as 41 per cent. With the interval computed and shown, the range covered roughly a quarter to three-fifths, so the claim became the count. From the m10 test: 2 of 3 could not tell the place was held, previously written as 67 per cent, rewritten as the count with the sample route stated. From the synthetic funnel: a comparison between two steps was removed entirely, because the numbers were invented and comparing invented numbers produces nothing.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and gather

Section: practice-plan. Stable action: step-1-brief.

Three rates gathered with the counts behind them.

- Read the assigned interval and sample-size readings.
- Collect three rates you have written or been tempted to write.

**Start here:** Go through your own documents and find every percentage you have written.

**Enough:** Each rate has its two numbers beside it.

**Rate:** A proportion expressed as a percentage. It hides the count, and the count is what decides how much it can support.

**The count behind it:** How many out of how many. Two identical percentages from 22 people and 1,000 people are entirely different claims.


### Three rates you have written or were tempted to write, with the counts behind them

Section: practice-plan. Stable action: write-three-rates.

The count is the part that matters. 41 per cent from 9 of 22 and 41 per cent from 410 of 1,000 are different claims.

**Answer:** Three rates you have written or were tempted to write, with the counts behind them

The count is the part that matters. 41 per cent from 9 of 22 and 41 per cent from 410 of 1,000 are different claims.

<details>
<summary>Example</summary>

Example (made up): 41 per cent were unsure their payment had gone through, from 9 of 22 survey answers.

</details>


### Compute the intervals

Section: practice-plan. Stable action: step-2-brief.

An interval computed for each rate with the inputs shown and the method named, plus what an interval means in your own words.

- Compute an interval for each rate, showing your inputs.
- Name the formula or tool you used.

**Start here:** Compute the interval for your smallest count first; it is where the difference is most obvious.

**Enough:** Somebody could recompute each interval from what you wrote.

**Interval:** The range of true values that would not be surprising, given how many people you asked. Small counts produce wide ranges.

**Showing your inputs:** Writing the two counts and the method you used. It lets somebody check the arithmetic rather than trusting it.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Reporting a survey result from a tool library, and reporting it as a percentage.

**What I wrote:** “41 per cent of members were unsure whether their payment had gone through.” It looked precise and it fitted neatly into a sentence.

**What was behind it:** Nine people out of twenty-two who answered a survey. I knew that; the sentence did not say it.

**What the interval was:** Roughly 24 to 61 per cent. So the honest version of my precise-looking claim is somewhere between a quarter and three-fifths.

**What happened when somebody checked:** They asked how many people. Once twenty-two was said out loud, the 41 per cent read as false precision, and everything else in the document was read more suspiciously.

**What I wrote instead:** “Nine of the twenty-two members who answered the survey were unsure whether their payment had gone through.” Smaller, checkable, and nothing in it can be overturned by asking one question.

**Wrong turn:** The wrong turn is converting a small count to a percentage, because percentages look more professional and fit better in a sentence. At small samples the precision is fictional, and the first reader who asks about the sample stops trusting the rest.

**Trade-off:** Counts read as less impressive and invite the question of whether nine people is enough. That question is the right one to be having.

**Unknown:** Still unknown: whether the twenty-two are like the members who did not answer. The interval covers sampling variation and says nothing about who chose to reply.


### The formula or tool you used, named

Section: practice-plan. Stable action: write-interval-method.

Any published interval formula for a proportion. Name it so somebody can check your arithmetic.

**Answer:** The formula or tool you used, named

Any published interval formula for a proportion. Name it so somebody can check your arithmetic.


### For each rate: the interval, with the inputs you used

Section: practice-plan. Stable action: write-intervals-computed.

Write your answer for “For each rate: the interval, with the inputs you used”. Use the task instructions below to decide what to include.

**Answer:** For each rate: the interval, with the inputs you used



<details>
<summary>Example</summary>

Example (made up): 9 of 22 gives about 41 per cent, with an interval running from roughly 24 to 61 per cent.

</details>


### What the interval means, in your own words

Section: practice-plan. Stable action: write-what-interval-means.

Roughly: the range of true values that would not be surprising, given this many people.

**Answer:** What the interval means, in your own words

Roughly: the range of true values that would not be surprising, given this many people.


### Rewrite the claims

Section: practice-plan. Stable action: step-3-brief.

Each claim rewritten so the interval supports it, with how those people came to be asked.

- Rewrite any claim the interval cannot support.
- Prefer counts with the sample route stated.

**Start here:** Rewrite the smallest-sample claim first, as a count with its route.

**Enough:** No rewritten claim says more than the numbers behind it allow.

**Reporting the count:** Nine of twenty-two, rather than 41 per cent. It is the honest form for small numbers and it invites the right questions.

**Sample route:** How those people came to be asked. A rate from volunteers is a rate about volunteers, and no interval fixes that.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six sentences from a made up tool-library report. For each one, decide whether the numbers behind it support the claim.

Nine of the twenty-two members who answered the survey were unsure whether their payment had gone through.

- supportable as written
- needs the count instead
- the interval is not the problem

<details>
<summary>After your attempt</summary>

supportable as written — The count, the denominator and the route are all present. Nothing in it can be overturned by asking one question.

needs the count instead — The count is what it already is.

the interval is not the problem — No interval is being claimed, so none is needed.

Now rewrite your own three, and check each says how the people came to be asked.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six sentences from a made up tool-library report. For each one, decide whether the numbers behind it support the claim.

41 per cent of members were unsure whether their payment had gone through.

- supportable as written
- needs the count instead
- the interval is not the problem

<details>
<summary>After your attempt</summary>

supportable as written — The interval runs from about a quarter to three-fifths, so the second digit is fictional.

needs the count instead — Nine of twenty-two says the same thing without implying a precision the sample cannot carry. It also quietly changes members to members who answered.

the interval is not the problem — The interval is exactly the problem here, along with the word members.

Now rewrite your own three, and check each says how the people came to be asked.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six sentences from a made up tool-library report. For each one, decide whether the numbers behind it support the claim.

67 per cent of participants could not tell the place was held.

- supportable as written
- needs the count instead
- the interval is not the problem

<details>
<summary>After your attempt</summary>

supportable as written — Sixty-seven per cent of three people is two people. The percentage is arithmetic dressed as a measurement.

needs the count instead — Two of the three people we watched. It is a real and useful finding, stated at the size it is.

the interval is not the problem — An interval on three people would cover almost everything, which is the point.

Now rewrite your own three, and check each says how the people came to be asked.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six sentences from a made up tool-library report. For each one, decide whether the numbers behind it support the claim.

80 per cent of the forty people who volunteered for our panel found the new flow clearer.

- supportable as written
- needs the count instead
- the interval is not the problem

<details>
<summary>After your attempt</summary>

supportable as written — Forty is a reasonable count and the interval is not wide. Who those forty are is the difficulty.

needs the count instead — Thirty-two of forty is better and does not fix it either.

the interval is not the problem — People who volunteer for a panel are unlike people who do not, and no arithmetic corrects that. The route has to be stated and the claim narrowed to the panel.

Now rewrite your own three, and check each says how the people came to be asked.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six sentences from a made up tool-library report. For each one, decide whether the numbers behind it support the claim.

Completion rose from 7.1 per cent to 9.4 per cent between the two synthetic funnels.

- supportable as written
- needs the count instead
- the interval is not the problem

<details>
<summary>After your attempt</summary>

supportable as written — Both numbers were invented, so the comparison measures nothing at all.

needs the count instead — The counts are invented too.

the interval is not the problem — Comparing invented numbers produces an invented difference. The repair is to remove the comparison rather than to qualify it.

Now rewrite your own three, and check each says how the people came to be asked.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six sentences from a made up tool-library report. For each one, decide whether the numbers behind it support the claim.

The payment provider’s records show eleven duplicate payments in March.

- supportable as written
- needs the count instead
- the interval is not the problem

<details>
<summary>After your attempt</summary>

supportable as written — A complete count from a record, not a sample. There is no interval because nothing was estimated.

needs the count instead — It is already a count.

the interval is not the problem — There is indeed no interval here, because nothing was estimated from a sample. A complete count from a record needs no range around it.

Now rewrite your own three, and check each says how the people came to be asked.

</details>


### Each claim rewritten so the interval supports it

Section: practice-plan. Stable action: write-rewritten-claims.

Usually this means the count with the route stated: 9 of 22 people who answered the survey.

**Answer:** Each claim rewritten so the interval supports it

Usually this means the count with the route stated: 9 of 22 people who answered the survey.


### For each: how those people came to be asked

Section: practice-plan. Stable action: write-route-stated.

Recruited how, from where. A rate from people who volunteered is about people who volunteer.

**Answer:** For each: how those people came to be asked

Recruited how, from where. A rate from people who volunteered is about people who volunteer.


### Handle a comparison

Section: practice-plan. Stable action: step-4-brief.

One comparison examined with both intervals, then qualified or abandoned with the reason.

- Take a comparison between two rates and examine both intervals.
- Qualify or abandon the comparison, and say why.

**Start here:** Write both intervals down and see whether they overlap before deciding anything.

**Enough:** Your decision names the overlap, or names a different reason such as invented numbers.

**Comparing two rates:** Harder than reporting one. Two wide intervals that overlap mean the difference could easily be nothing at all.

**Abandoning a comparison:** A legitimate result. Removing it is better than qualifying it so heavily that nobody reads the qualification.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Comparing two rates from a tool-library study, and comparing invented ones.

**What I had:** Completion at 7.1 per cent in one synthetic funnel and 9.4 per cent in another, built a fortnight apart while I was practising the arithmetic.

**What I wrote:** Completion rose by 2.3 points between the two versions. It looked like a result and it was the most encouraging line in the document.

**What was wrong with it:** Both numbers were invented by me. The difference between two things I made up is a thing I made up, and no interval makes it mean anything.

**Why an interval would not have saved it:** I nearly computed one and qualified the comparison instead. That would have dressed an invented difference in real arithmetic, which is worse than leaving it plain.

**What I did:** Removed the comparison entirely and wrote one line saying the two funnels were practice material and could not be compared. The document got shorter and stopped containing a false finding.

**Wrong turn:** The wrong turn is qualifying a comparison that should be removed, because qualifying is the move this lesson keeps asking for. Arithmetic applied to invented numbers makes them look measured.

**Trade-off:** Removing it left the document with no encouraging line in it, which is an honest description of what the practice material could show.

**Unknown:** Still unknown: whether the real completion rate is anywhere near either figure. Nothing here measured it, and the document now says so.


### A comparison between two rates, with both intervals

Section: practice-plan. Stable action: write-comparison-examined.

Write your answer for “A comparison between two rates, with both intervals”. Use the task instructions below to decide what to include.

**Answer:** A comparison between two rates, with both intervals




### Whether you qualified it or abandoned it, and why

Section: practice-plan. Stable action: write-comparison-decision.

Overlapping intervals mean the difference could easily be nothing.

**Answer:** Whether you qualified it or abandoned it, and why

Overlapping intervals mean the difference could easily be nothing.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Are percentages more professional than counts?

- They look more precise. At small samples the precision is fictional, and a reader who checks the sample will trust nothing else in the document.
- Yes, since they allow comparison between studies.
- Yes, provided the sample size is stated nearby.

<details>
<summary>After your attempt</summary>

They look more precise. At small samples the precision is fictional, and a reader who checks the sample will trust nothing else in the document. — Sixty-seven per cent of three people is two people. Counts read as less impressive and survive the first question, which percentages from small samples do not.

Yes, since they allow comparison between studies. — Comparison needs both intervals and compatible definitions. A percentage from twenty-two people compares with very little.

Yes, provided the sample size is stated nearby. — Stated nearby, the percentage is still the part that gets quoted.

Improve: Rewrite your smallest-sample claim as a count with its route in step 3, and record the change in step 5.

Check again: No claim from a small sample is expressed as a percentage.

Answers to revisit: rewritten-claims, route-stated, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Two of your rates differ by eight points, and both intervals are about twenty points wide and overlap. What can you say?

- That the difference could easily be nothing. The honest move is to qualify it heavily or drop the comparison.
- That one is higher than the other, which is what the numbers show.
- That the difference is suggestive and worth investigating.

<details>
<summary>After your attempt</summary>

That the difference could easily be nothing. The honest move is to qualify it heavily or drop the comparison. — Comparing two rates needs more care than reporting one, and overlapping intervals mean the samples are consistent with no difference at all.

That one is higher than the other, which is what the numbers show. — The numbers show it in these samples. Another twenty-two people could easily reverse it.

That the difference is suggestive and worth investigating. — That wording survives into summaries as a finding. If you keep it, say plainly that the samples are consistent with no difference.

Improve: Examine both intervals in step 4 and decide to qualify or abandon, with the reason. Record the change in step 5.

Check again: Your comparison names the overlap.

Answers to revisit: comparison-examined, comparison-decision, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Eighty per cent of your forty panel volunteers preferred the new flow. The interval is not too wide. Is the claim sound?

- The interval is not the problem. People who volunteer for a panel are unlike people who do not, and no arithmetic corrects that.
- Yes, forty is a reasonable sample.
- Yes, if the panel was recruited randomly from members.

<details>
<summary>After your attempt</summary>

The interval is not the problem. People who volunteer for a panel are unlike people who do not, and no arithmetic corrects that. — The repair is to state the route and narrow the claim to the panel. Sample size and sample route are two different things, and only one of them has a formula.

Yes, forty is a reasonable sample. — Forty of whom is the question the interval cannot answer.

Yes, if the panel was recruited randomly from members. — Then it would be much stronger, and volunteering to join is the step that breaks it.

Improve: Add how the people came to be asked beside every rate in step 3, and narrow any claim that outruns it. Record the change in step 5.

Check again: Every claim says who the people were and how they were reached.

Answers to revisit: rewritten-claims, route-stated, improvement-made

</details>


### Write your rule

Section: practice. Stable action: step-5-brief.

A written rule for when you will report a rate at all, and the repair the Check questions asked for.

- Write when you will report a rate rather than a count.
- Save the calculations and the rewritten claims.

**Start here:** Pick a count below which you will always report counts, and write it down.

**Enough:** The rule is specific enough that you could apply it without thinking next time.

**A reporting rule:** Your own threshold, written once and applied. It saves the argument every time and it makes your documents consistent.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Your written rule for when you will report a rate at all

Section: practice. Stable action: write-reporting-rule.

Write your answer for “Your written rule for when you will report a rate at all”. Use the task instructions below to decide what to include.

**Answer:** Your written rule for when you will report a rate at all



<details>
<summary>Example</summary>

Example (made up): counts below about thirty are reported as counts. Above that, the rate goes with its interval and its sample route.

</details>


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson designs an experiment you almost certainly cannot run.


<details>
<summary>Optional hints and reference material</summary>

- Compute each interval in a spreadsheet and record the numbers you put in.
- Replace each percentage with the count and add who the sample was.

- R37: [NN/g: confidence intervals and margins of error](https://www.nngroup.com/articles/confidence-interval/) — What an interval means, confidence levels, and the effect of sample size and variability. Purpose: Supplies the reasoning and the reason to report counts. Free reading, no account. Verified 2026-09-06. It deliberately gives no formulas, so name the one you used and show your inputs. Fallback: R45.
- R45: [NN/g: sample sizes for quantitative studies](https://www.nngroup.com/articles/summary-quant-sample-sizes/) — Recommended counts and the assumptions behind them. Purpose: Shows what a study designed to measure would need, as a contrast with what you have. Free reading, no account. Verified 2026-09-06. Binary success metrics only; it excludes A/B tests, surveys, card sorting and tree testing and does not license claims from smaller samples. Fallback: R37.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Three intervals are computed with inputs shown**

Adequate evidence: Three calculations with the sample size, the rate, the method and the resulting range.

0 — No calculation.

1 — Intervals asserted without inputs.

2 — All three computed with inputs and method shown.

3 — As adequate, and the width is described in words as well as numbers.

Repair: Compute each interval in a spreadsheet and record the numbers you put in. Recheck: The three calculations.

**Unsupportable claims are rewritten as counts**

Adequate evidence: Rewritten sentences using counts and stating the recruitment route.

0 — Percentages retained.

1 — Some rewritten, some retained.

2 — All unsupportable rates rewritten as counts with routes.

3 — As adequate, and one rewrite is shown beside the original for comparison.

Repair: Replace each percentage with the count and add who the sample was. Recheck: The rewritten claims.

**A comparison is qualified or abandoned**

Adequate evidence: One two-rate comparison examined, with a decision and reasoning.

0 — Comparison retained unqualified.

1 — Qualified vaguely.

2 — Examined against both intervals and decided.

3 — As adequate, and the decision is to abandon it where the intervals overlap substantially.

Repair: Compute both intervals and check whether they overlap; if they do, the comparison is not supported. Recheck: The comparison decision.

**A personal rule for reporting rates is written**

Adequate evidence: A stated threshold or condition under which you will use a rate.

0 — No rule.

1 — A rule too vague to apply.

2 — A rule that would decide a real case.

3 — As adequate, and it names what you will do when someone asks for a percentage anyway.

Repair: Write the sample size below which you will always report counts, and what you will say if pressed. Recheck: The rule.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson designs an experiment you almost certainly cannot run.

**Review criteria:**

- Three intervals are computed with inputs shown
- Unsupportable claims are rewritten as counts
- A comparison is qualified or abandoned
- A personal rule for reporting rates is written

<details>
<summary>Reading, video and deeper explanation</summary>

- The assigned interval reading explains that a rate is an estimate with uncertainty attached, and that the uncertainty shrinks slowly as the sample grows. At the sizes available to you — a survey of twenty-two, a test of five — the interval around any percentage covers so much ground that the percentage carries almost no information, which is why this course has insisted on counts since m05.
- The practical rule has two branches. If you must report a rate, attach the interval and show your inputs. If the interval is so wide that the rate is uninformative, report the count and let the reader see the size directly. Both are honest; only the bare percentage is not.
- The sample-size reading is for planning: it tells you what a study designed to measure a binary outcome would need. It is not a justification for a claim made from a smaller sample, and it explicitly excludes surveys, card sorting and tree testing, which is why m05, m06 and m10 all reported counts.
- Comparing two rates is harder than reporting one, because both carry intervals and the difference carries a wider one still. Two overlapping intervals do not establish a difference, and reporting “A improved on B” from small samples is the failure mode most likely to reach a decision meeting unchallenged.

[NN/g: confidence intervals and margins of error](https://www.nngroup.com/articles/confidence-interval/).

</details>

## Lesson 4: Designing an experiment you cannot run

Stable ID: m15-l04-v1. Core.

Knowing what a real experiment requires is what lets you refuse a fake one, which is the situation you will actually be in.

Bring: Your metric tree and an open design question.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A written hypothesis with its reasoning
- One primary metric and at least two guardrails
- A required sample and duration estimate with inputs
- A written refusal and a qualitative alternative

### Start with a clear task

Section: learn. Stable action: welcome.

Design one A/B test properly — hypothesis, variants, primary and guardrail metrics, required sample and duration — and then write why you cannot run it and what you will do instead.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

State the hypothesis before the variants: what you expect and why.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Choose one primary metric and guardrails that must not get worse.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Test one change; several at once produce an uninterpretable result.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Required traffic and duration are constraints, not formalities.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

An experiment cannot tell you why; it needs qualitative work beside it.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The designed test: hypothesis, that a held-place message reduces duplicate payments; variants, current and with the message; primary metric, duplicate payments per hundred bookings; guardrails, completion rate and support contacts. The required sample, using the article's reasoning, was far beyond the product's traffic — the honest calculation showed months of data for a plausible effect. The refusal was written, with what would change it: ten times the traffic, or a much larger expected effect. The alternative was three moderated comparisons plus counting duplicate payments in the provider's records before and after, with the confounding stated.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read the constraints

Section: practice-plan. Stable action: step-1-brief.

The limits the reading states on traffic, duration and changing more than one thing.

- Read the assigned A/B testing article.
- Write its stated limits on traffic, duration and simultaneous changes.

**Start here:** Read the assigned article looking only for the numbers and the constraints.

**Enough:** You could say, in one sentence, what an experiment needs in order to mean anything.

**A/B test:** Showing two versions to two randomly split groups and comparing one metric. It answers whether, never why.

**Simultaneous changes:** More than one difference between the variants. The result then tells you the pair did something, and nothing about which part.


### The limits the reading states on traffic, duration and simultaneous changes

Section: practice-plan. Stable action: write-stated-limits.

Write your answer for “The limits the reading states on traffic, duration and simultaneous changes”. Use the task instructions below to decide what to include.

**Answer:** The limits the reading states on traffic, duration and simultaneous changes




### Write the hypothesis and variants

Section: practice-plan. Stable action: step-2-brief.

A hypothesis with its reasoning and what would disprove it, and two variants differing in exactly one thing.

- State what you expect, why, and what would disprove it.
- Define exactly one change between the variants.

**Start here:** Write the why before the what. The reasoning is what the test is really examining.

**Enough:** Exactly one thing differs between your variants, and you can say what a no would look like.

**Hypothesis:** What you expect and why. The why is what makes a negative result informative rather than merely disappointing.

**Disprovable:** Something that could come back saying no. A hypothesis nothing could contradict is a preference.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Writing variants for a tool-library test, and changing two things at once.

**What I designed:** Version A as it is now. Version B with the held-place message and a redesigned confirmation screen, because both were ready and both were meant to help.

**Why that seemed efficient:** One test instead of two, and half the traffic needed. Everything about it looked like a saving.

**What a result would have meant:** If duplicates fell, the pair did something. Which of the two, and whether one of them made things worse while the other more than compensated, is unanswerable.

**What a null result would have meant:** Even worse: the pair did nothing on balance, which is consistent with one helping and the other harming by the same amount.

**What I did instead:** One change: the message. The confirmation redesign goes separately, or ships without a test on the strength of the reasoning behind it.

**Wrong turn:** The wrong turn is bundling two ready changes into one test, because it halves the traffic needed and feels efficient. The result is then uninterpretable in both directions, which costs more than the traffic saved.

**Trade-off:** Testing one thing means the other ships untested or waits, and waiting is expensive when traffic is the constraint already.

**Unknown:** Still unknown: whether the two interact. Separate tests would not show that either, and this is one of the things a small product simply cannot find out.


### What you expect, why, and what would disprove it

Section: practice-plan. Stable action: write-hypothesis.

The why matters. A hypothesis with no reasoning behind it cannot be wrong in an interesting way.

**Answer:** What you expect, why, and what would disprove it

The why matters. A hypothesis with no reasoning behind it cannot be wrong in an interesting way.

<details>
<summary>Example</summary>

Example (made up): a held-place message reduces duplicate payments, because people currently pay again when they cannot tell whether the first payment worked. If duplicates do not fall, the cause is elsewhere.

</details>


### The two variants, differing in exactly one thing

Section: practice-plan. Stable action: write-variants.

Exactly one. Two changes at once produce a result nobody can interpret.

**Answer:** The two variants, differing in exactly one thing

Exactly one. Two changes at once produce a result nobody can interpret.


### Choose metrics

Section: practice-plan. Stable action: step-3-brief.

One primary metric, at least two guardrails, and the smallest effect that would matter with its reason.

- Choose one primary metric from your metric tree.
- Choose guardrails that must not get worse.
- State the smallest effect that would matter.

**Start here:** Choose the smallest effect you would act on before looking at any traffic figure.

**Enough:** Your effect size came from the problem rather than from what is detectable.

**Primary metric:** The one the decision rests on. More than one means whichever moves becomes the primary one afterwards.

**Guardrail:** Something that must not get worse. It is how you notice that your improvement cost something elsewhere.

**Smallest effect that matters:** The difference below which you would do nothing. It decides how much data is needed, which is why it is chosen before the calculation.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Designing a test for a tool library, and choosing the effect size afterwards.

**What I did first:** Worked out how much traffic we have, then found the effect size that would be detectable with it. About twelve percentage points.

**Why that felt sensible:** It made the test feasible. Anything smaller was unreachable, so twelve became the number I designed around.

**What it actually meant:** I was committing to only noticing an enormous effect. A message that cut duplicate payments by a third would have come back as no result at all.

**What choosing first produced:** The smallest effect worth acting on is about three points, because below that the work costs more than it saves. That number came from the problem rather than from the traffic.

**What the honest calculation then showed:** Months of data for three points, at this traffic. The test is not available, which is a finding rather than a failure, and it is the finding the lesson is asking for.

**Wrong turn:** The wrong turn is working backwards from the traffic you have, because it makes the test possible. What it produces is a test that can only detect effects so large you would not need a test to see them.

**Trade-off:** Choosing the effect size from the problem usually means concluding that you cannot run the experiment, which is a worse outcome to report and a true one.

**Unknown:** Still unknown: what the real duplicate-payment rate is. The calculation used a plausible figure, labelled as an assumption, and a different one would change the months considerably.


### One primary metric, taken from your metric tree

Section: practice-plan. Stable action: write-primary.

Write your answer for “One primary metric, taken from your metric tree”. Use the task instructions below to decide what to include.

**Answer:** One primary metric, taken from your metric tree




### At least two guardrails that must not get worse

Section: practice-plan. Stable action: write-guardrails.

Write your answer for “At least two guardrails that must not get worse”. Use the task instructions below to decide what to include.

**Answer:** At least two guardrails that must not get worse



<details>
<summary>Example</summary>

Example (made up): completion rate, and support contacts about bookings.

</details>


### The smallest effect that would matter, and why that size

Section: practice-plan. Stable action: write-smallest-effect.

This number decides how much data you need. Choosing it first is what makes the calculation honest.

**Answer:** The smallest effect that would matter, and why that size

This number decides how much data you need. Choosing it first is what makes the calculation honest.


### Estimate the requirement

Section: practice-plan. Stable action: step-4-brief.

A sample estimate with your inputs, a duration at your actual traffic, and where that traffic figure comes from.

- Estimate the sample needed for that effect and the duration.
- Compare with the traffic you actually have.

**Start here:** Do the arithmetic with the numbers you have, and label any assumption as an assumption.

**Enough:** Somebody could check your calculation from the inputs you wrote down.

**Required sample:** How many people each variant needs before a difference of the size you care about could be told apart from noise. Smaller effects need far more people.

**Duration:** The sample divided by your weekly traffic. It is the number that usually ends the conversation.


### The sample needed for that effect, with your inputs and method

Section: practice-plan. Stable action: write-sample-estimate.

Write your answer for “The sample needed for that effect, with your inputs and method”. Use the task instructions below to decide what to include.

**Answer:** The sample needed for that effect, with your inputs and method




### How long that would take at your actual traffic

Section: practice-plan. Stable action: write-duration.

Write your answer for “How long that would take at your actual traffic”. Use the task instructions below to decide what to include.

**Answer:** How long that would take at your actual traffic




### The traffic you actually have, and where that number comes from

Section: practice-plan. Stable action: write-actual-traffic.

If you do not know, say so and use a plausible figure labelled as an assumption.

**Answer:** The traffic you actually have, and where that number comes from

If you do not know, say so and use a plausible figure labelled as an assumption.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Somebody suggests a quick A/B test to settle a design disagreement. What is the problem?

- With low traffic, a short test produces a difference that is noise, and the noise will be read as a result.
- A/B tests cannot settle design disagreements.
- It would take too long to set up.

<details>
<summary>After your attempt</summary>

With low traffic, a short test produces a difference that is noise, and the noise will be read as a result. — Designing the test properly is what shows this: the required sample for an effect worth acting on is usually months of data. A test that cannot detect the effect you care about settles nothing and looks as though it did.

A/B tests cannot settle design disagreements. — A properly powered one can settle a narrow version of the question. The problem here is the power rather than the method.

It would take too long to set up. — Setup is usually the smallest cost. The traffic is the constraint.

Improve: Calculate the required sample and the duration in step 4 using your real traffic, and record the change in step 5.

Check again: Your duration is based on a traffic figure with a stated source.

Answers to revisit: sample-estimate, duration, actual-traffic, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You chose your effect size by finding what would be detectable with your traffic. What did that do?

- It committed you to noticing only enormous effects, and to reporting a real improvement as no result.
- Nothing much, since the calculation is the same either way.
- It made the test feasible, which is a reasonable trade.

<details>
<summary>After your attempt</summary>

It committed you to noticing only enormous effects, and to reporting a real improvement as no result. — The smallest effect worth acting on comes from the problem: below what difference would you do nothing? Choosing it first is what makes the calculation an honest test of feasibility.

Nothing much, since the calculation is the same either way. — The arithmetic is the same and the meaning is reversed. One asks what you need; the other asks what you can get away with.

It made the test feasible, which is a reasonable trade. — Feasible and uninformative is not a trade; it is the appearance of one.

Improve: Choose the smallest effect that would matter from the problem, in step 3, and redo the calculation. Record the change in step 5.

Check again: Your effect size has a reason that is about the problem rather than the traffic.

Answers to revisit: primary, guardrails, smallest-effect, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You will ship the change and count duplicate payments before and after. Is that an experiment?

- No, and it is the best available answer, as long as the write-up names what else changed in the same period.
- Yes, in effect, since you are comparing two periods.
- No, so it should not be reported at all.

<details>
<summary>After your attempt</summary>

No, and it is the best available answer, as long as the write-up names what else changed in the same period. — A before-and-after count is confounded by everything else that happened that month. Stating that alongside the figure is what keeps it honest rather than what disqualifies it.

Yes, in effect, since you are comparing two periods. — Two periods are not two randomly split groups. Everything about the world differs between them as well as your change.

No, so it should not be reported at all. — At this scale it is the strongest evidence available, and the alternative is nothing.

Improve: Write the confounding beside the before-and-after plan in step 5, naming something specific that also changed. Record the change.

Check again: Your alternative names its confounding rather than only its method.

Answers to revisit: refusal, alternative, confounding, improvement-made

</details>


### Refuse, and plan the alternative

Section: practice. Stable action: step-5-brief.

A written refusal with what would change it, a qualitative alternative, and the confounding named for any before-and-after count.

- Write why you cannot run it and what would change that.
- Plan the qualitative alternative and what it can answer.
- Save the design, the refusal and the alternative.

**Start here:** Write the refusal in one sentence, then say what would have to change for the test to be possible.

**Enough:** Your alternative says what it cannot answer as clearly as what it can.

**Refusing a test:** Saying it cannot be run and why. It is a professional result, and the alternative is to run one that produces noise somebody will read as a result.

**Confounding:** Something else that changed at the same time. A before-and-after count is always confounded by whatever else happened that month.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Try the distinction · 1 of 6

Section: practice. Stable action: step-5-sort-1.

Six proposals about the same made up experiment at a tool library, where the calculation showed months of data would be needed. For each one, decide what it would produce.

Run it for two weeks anyway and see what the numbers say.

- an honest answer
- noise that will be read as a result
- a different question entirely

<details>
<summary>After your attempt</summary>

an honest answer — At this traffic, two weeks cannot distinguish a three-point effect from nothing at all.

noise that will be read as a result — Whatever difference appears will be noise, and somebody will act on it. This is the outcome the calculation exists to prevent.

a different question entirely — It is the same question, asked in a way that cannot answer it.

Now write your own refusal and choose your alternative from the first group.

</details>


### Try the distinction · 2 of 6

Section: practice. Stable action: step-5-sort-2.

Six proposals about the same made up experiment at a tool library, where the calculation showed months of data would be needed. For each one, decide what it would produce.

Watch three people attempt a booking with each version and record what they do and say.

- an honest answer
- noise that will be read as a result
- a different question entirely

<details>
<summary>After your attempt</summary>

an honest answer — It is honest about its own scope, and it does not answer how often duplicates happen.

noise that will be read as a result — Nothing about it is dressed as a measurement, as long as nobody reports three people as a rate.

a different question entirely — It answers why rather than how much, which is the question that is actually available. Both are worth having and they are not substitutes.

Now write your own refusal and choose your alternative from the first group.

</details>


### Try the distinction · 3 of 6

Section: practice. Stable action: step-5-sort-3.

Six proposals about the same made up experiment at a tool library, where the calculation showed months of data would be needed. For each one, decide what it would produce.

Count duplicate payments in the provider’s records for the month before and the month after shipping, and state what else changed.

- an honest answer
- noise that will be read as a result
- a different question entirely

<details>
<summary>After your attempt</summary>

an honest answer — A complete count rather than a sample, with the confounding stated. It is weaker than an experiment and it is not pretending otherwise.

noise that will be read as a result — The risk exists and is managed by naming what else changed in the same sentence.

a different question entirely — It is the same question, answered as well as the situation allows.

Now write your own refusal and choose your alternative from the first group.

</details>


### Try the distinction · 4 of 6

Section: practice. Stable action: step-5-sort-4.

Six proposals about the same made up experiment at a tool library, where the calculation showed months of data would be needed. For each one, decide what it would produce.

Test a much bigger change instead, since a larger effect needs less data.

- an honest answer
- noise that will be read as a result
- a different question entirely

<details>
<summary>After your attempt</summary>

an honest answer — The arithmetic is right and the test now examines something you were not asking about.

noise that will be read as a result — It could produce a real result, about a different change.

a different question entirely — Redesigning the question to fit the available data is how you end up testing what is testable rather than what matters.

Now write your own refusal and choose your alternative from the first group.

</details>


### Try the distinction · 5 of 6

Section: practice. Stable action: step-5-sort-5.

Six proposals about the same made up experiment at a tool library, where the calculation showed months of data would be needed. For each one, decide what it would produce.

Run it and stop as soon as the difference looks convincing.

- an honest answer
- noise that will be read as a result
- a different question entirely

<details>
<summary>After your attempt</summary>

an honest answer — Stopping when it looks good guarantees that it will look good at some point, whatever is true.

noise that will be read as a result — Checking repeatedly and stopping on a favourable moment manufactures differences out of noise. It is the commonest way a real test produces a false result.

a different question entirely — The question is unchanged; the method has stopped being able to answer it.

Now write your own refusal and choose your alternative from the first group.

</details>


### Try the distinction · 6 of 6

Section: practice. Stable action: step-5-sort-6.

Six proposals about the same made up experiment at a tool library, where the calculation showed months of data would be needed. For each one, decide what it would produce.

Ship it to everybody, count duplicates for four weeks, and set a condition that would make you reverse it.

- an honest answer
- noise that will be read as a result
- a different question entirely

<details>
<summary>After your attempt</summary>

an honest answer — It is not an experiment and it does not claim to be. A named signal, a period and a reversal condition is what the release-plan lesson asked for.

noise that will be read as a result — The reversal condition is what keeps it honest: the answer can be no.

a different question entirely — It is the same question with the best method available at this size.

Now write your own refusal and choose your alternative from the first group.

</details>


### Why you cannot run it, and what would change that

Section: practice. Stable action: write-refusal.

Write your answer for “Why you cannot run it, and what would change that”. Use the task instructions below to decide what to include.

**Answer:** Why you cannot run it, and what would change that




### The qualitative alternative, and what it can and cannot answer

Section: practice. Stable action: write-alternative.

Write your answer for “The qualitative alternative, and what it can and cannot answer”. Use the task instructions below to decide what to include.

**Answer:** The qualitative alternative, and what it can and cannot answer




### For any before-and-after counting: what else could explain a change

Section: practice. Stable action: write-confounding.

Write your answer for “For any before-and-after counting: what else could explain a change”. Use the task instructions below to decide what to include.

**Answer:** For any before-and-after counting: what else could explain a change




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson reads numbers somebody else produced.


<details>
<summary>Optional hints and reference material</summary>

- Write “I expect … because … and I would be wrong if …”.
- Choose the one metric that decides the result, then name what must not get worse.

- R68: [NN/g: A/B testing 101](https://www.nngroup.com/articles/ab-testing/) — What an A/B test compares, its traffic and duration requirements, the significance convention, and its inability to explain why. Purpose: Supplies the constraints that make the refusal specific rather than vague. Free reading, no account. Verified 2026-09-06; published 30 August 2024. It names no tools, excludes multivariate design and gives no post-test analysis. With no traffic, the honest exercise is the design and the refusal, never a claimed result. Fallback: R37.
- R45: [NN/g: sample sizes for quantitative studies](https://www.nngroup.com/articles/summary-quant-sample-sizes/) — Sample sizes for binary success metrics. Purpose: Gives a basis for the sample estimate while stating its own exclusions. Free reading, no account. Verified 2026-09-06. Binary metrics only; it explicitly does not cover A/B tests, so treat the estimate as an order of magnitude rather than a calculation. Fallback: R37.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**A hypothesis states expectation, reasoning and disproof**

Adequate evidence: A written hypothesis naming what you expect, why, and what result would refute it.

0 — Two variants with no hypothesis.

1 — An expectation without reasoning or disproof.

2 — All three present.

3 — As adequate, and the reasoning cites a specific research finding.

Repair: Write “I expect … because … and I would be wrong if …”. Recheck: The hypothesis.

**One primary metric and guardrails are chosen in advance**

Adequate evidence: A single primary metric from the tree and at least two guardrails.

0 — Several metrics with no primary.

1 — A primary without guardrails.

2 — One primary and two or more guardrails, chosen before running.

3 — As adequate, and the smallest effect worth detecting is stated.

Repair: Choose the one metric that decides the result, then name what must not get worse. Recheck: The metric choice.

**Sample and duration are estimated against real traffic**

Adequate evidence: An estimate with inputs, compared with the traffic actually available.

0 — No estimate.

1 — An estimate without comparison to real traffic.

2 — Both, with the shortfall visible.

3 — As adequate, and the estimate includes the article's recommended minimum duration on top of the sample requirement.

Repair: Estimate the sample for your smallest meaningful effect and set it beside your actual traffic. Recheck: The estimate.

**A refusal and a qualitative alternative are written**

Adequate evidence: A written statement of why the test cannot run, what would change it, and what you will do instead.

0 — No refusal; the test is presented as runnable.

1 — A refusal without an alternative.

2 — Both, with what the alternative can and cannot answer.

3 — As adequate, and the alternative's confounds are stated.

Repair: Write the sentence beginning “this cannot run because …” and then plan the conversations you can have. Recheck: The refusal and alternative.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson reads numbers somebody else produced.

**Review criteria:**

- A hypothesis states expectation, reasoning and disproof
- One primary metric and guardrails are chosen in advance
- Sample and duration are estimated against real traffic
- A refusal and a qualitative alternative are written

<details>
<summary>Reading, video and deeper explanation</summary>

- A hypothesis is what makes an experiment interpretable. “Showing that the place is held will reduce duplicate payments, because participants told us they were unsure whether their place was secured” states the expectation and the reasoning, and it can be wrong — which is what distinguishes it from trying two designs to see which does better.
- One primary metric decides the result; guardrails prevent winning by damage. If the variant increases completions while increasing refund requests, the guardrail catches what the primary metric would have hidden. Choosing both before running is what stops the result being reinterpreted afterwards.
- The assigned article is explicit about the constraints: A/B testing is unsuitable for low-traffic pages, needs a duration of one to two weeks beyond the sample requirement to cover behavioural fluctuation, and cannot reliably test several changes at once. Those are the facts that will make your test impossible, and knowing them precisely is the point of designing it.
- The article is equally clear that a test cannot tell you why behaviour changed. That is why the honest plan for a learner without traffic is a designed experiment, a written refusal, and a qualitative alternative — three conversations, a small usability comparison — which answers a narrower question truthfully rather than a broader one falsely.

[NN/g: A/B testing 101](https://www.nngroup.com/articles/ab-testing/).

</details>

## Lesson 5: Reading someone else's numbers

Stable ID: m15-l05-v1. Core.

You will be handed numbers far more often than you will produce them, and the useful skill is asking what they are not telling you.

Bring: A public report, dashboard screenshot or article with numbers.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Five questions asked of a real set of figures
- The answers you could find and the ones you could not
- One claim rewritten to match its support
- A note of what the chart's presentation emphasised or hid

### Start with a clear task

Section: learn. Stable action: welcome.

Take a published or supplied set of figures, list the five questions you would need answered before acting on it, and rewrite one of its claims to match what it actually supports.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Ask who was counted and who was excluded.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Ask what period, and whether it is comparable to the last one.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Ask what changed at the same time; almost always something did.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Ask what the denominator is; it is often the missing information.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Ask what decision this number is being used to justify.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- A published figure claimed a 30 per cent improvement in completions after a redesign. The five questions: who was counted — new visitors only, it turned out, excluding returning ones; what period — four weeks against a comparison period containing a public holiday; what else changed — a marketing campaign ran concurrently; what is the denominator — total visits fell, so completions per visit rose while completions fell; and what decision it justified — further investment in the redesign. The claim was rewritten as: completions per visit rose over four weeks, during which visits fell and a campaign ran, so the redesign's contribution cannot be separated.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Choose the figures

Section: practice-plan. Stable action: step-1-brief.

A real set of figures with a claim, and the claim copied exactly.

- Find a public report, article or dashboard image with numbers and a claim.
- Write the claim exactly as stated.

**Start here:** Find something with a percentage and a conclusion in the same paragraph.

**Enough:** The claim is in quotation marks and is somebody else’s wording.

**A claim:** The sentence the numbers are being used to support. It is what you are examining, rather than the numbers themselves.

**Copying exactly:** Writing it word for word. Paraphrasing repairs the vagueness you are about to examine, and then the exercise finds nothing.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Choosing figures to examine, and choosing something too easy.

**What I picked first:** An obviously overblown marketing page claiming a 400 per cent improvement, with no numbers behind it at all.

**What the exercise produced:** Five questions, five absences, and a rewrite that said nothing could be concluded. It took four minutes and taught me nothing.

**Why it was too easy:** Nobody was going to believe it anyway. The claims that matter are the ones that look careful, from people being honest, where the problem is in what got selected.

**What I chose instead:** A published case study with real figures, a stated period and a plausible claim, written by somebody who was clearly trying to be accurate.

**What that found:** New visitors only, a comparison period containing a holiday, and a campaign running at the same time. None of it hidden, none of it mentioned in the claim, and the rewrite was genuinely harder to write.

**Wrong turn:** The wrong turn is picking an obviously bad claim, because it is satisfying and the questions all come back absent. The skill is reading careful work, where the selection is invisible and the author was not trying to mislead anybody.

**Trade-off:** A careful source takes an hour rather than four minutes, and you may end up concluding that the claim mostly holds.

**Unknown:** Still unknown: whether the author knew about the campaign. Nothing in the report says, and the rewrite treats it as a confound rather than as a concealment.


### Where the figures came from

Section: practice-plan. Stable action: write-source-used.

A public report, an article, a dashboard image, a case study. Anything with numbers and a claim attached.

**Answer:** Where the figures came from

A public report, an article, a dashboard image, a case study. Anything with numbers and a claim attached.


### The claim, copied exactly as stated

Section: practice-plan. Stable action: write-claim-exact.

Exactly. Paraphrasing quietly repairs the parts you are about to examine.

**Answer:** The claim, copied exactly as stated

Exactly. Paraphrasing quietly repairs the parts you are about to examine.


### Ask the five questions

Section: practice-plan. Stable action: step-2-brief.

Five questions asked of the figures, each with the answer you could find or a note that it is absent.

- Ask who, when, what else changed, what the denominator is, and what decision it serves.
- Record which answers are available and which are absent.

**Start here:** Ask who was counted first. It changes the meaning of everything after it.

**Enough:** Every question has an answer or the word absent beside it.

**Denominator:** What the number is out of. It is the most commonly missing piece, and a rate can rise because the bottom shrank.

**An absent answer:** A finding. If a report does not say who was counted, that is information about the report.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Reading a published claim about a redesign, and reading it as arithmetic.

**The claim:** “Completions rose 30 per cent after the redesign.” A clear number and a clear cause, in one sentence.

**What I checked first:** The arithmetic. It was right: the figures given did produce 30 per cent, and I nearly stopped there.

**What the who question found:** New visitors only. Returning visitors were excluded, and a redesign is exactly the kind of change that affects the two differently.

**What the denominator question found:** Completions per visit rose. Total visits fell over the same period, so the number of completed bookings actually went down.

**What the rewritten claim became:** “Completions per visit among new visitors rose over four weeks, during which total visits fell and a campaign ran, so the redesign’s contribution cannot be separated.” Longer, duller, and the only version that is true.

**Wrong turn:** The wrong turn is checking whether the arithmetic is right, because that is the checkable part and it usually is. Everything that makes a number misleading happens before the arithmetic: who was counted, over what period, against what.

**Trade-off:** The rewritten claim is three times as long and has no headline in it, which is why the original was written the way it was.

**Unknown:** Still unknown: whether the redesign helped at all. Nothing in the published figures could separate it from the campaign, and the honest answer is that it is unknown rather than that it did not.


### Who was counted, and who was excluded?

Section: practice-plan. Stable action: write-q-who.

Write your answer for “Who was counted, and who was excluded?”. Use the task instructions below to decide what to include.

**Answer:** Who was counted, and who was excluded?




### What period, and is it comparable to what it is compared with?

Section: practice-plan. Stable action: write-q-when.

Holidays, seasons and campaigns all make two periods incomparable.

**Answer:** What period, and is it comparable to what it is compared with?

Holidays, seasons and campaigns all make two periods incomparable.


### What else changed at the same time?

Section: practice-plan. Stable action: write-q-else.

Almost always something did. An absence of information here is itself an answer.

**Answer:** What else changed at the same time?

Almost always something did. An absence of information here is itself an answer.


### What is the denominator?

Section: practice-plan. Stable action: write-q-denominator.

A rate can rise because the top grew or because the bottom shrank, and those mean opposite things.

**Answer:** What is the denominator?

A rate can rise because the top grew or because the bottom shrank, and those mean opposite things.


### What decision is this number being used to justify?

Section: practice-plan. Stable action: write-q-decision.

Write your answer for “What decision is this number being used to justify?”. Use the task instructions below to decide what to include.

**Answer:** What decision is this number being used to justify?




### Examine the presentation

Section: practice-plan. Stable action: step-3-brief.

Anything in the presentation that emphasises or hides part of the picture.

- Check the chart against the assigned conventions.
- Note anything that emphasises or hides part of the picture.

**Start here:** Look at the axis first, then at what period is shown, then at what is missing.

**Enough:** You named something specific about the drawing rather than about the numbers.

**Truncated axis:** A chart whose scale does not start at zero, making a small difference look large. Sometimes legitimate and always worth noticing.

**Selected period:** A window chosen to include or exclude something. The choice is invisible unless you ask what a longer view would show.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six presentation choices from a made up report. For each one, decide what it does to the reader.

A bar chart whose vertical axis begins at 68 rather than 0, showing values of 71 and 74.

- makes a small difference look large
- hides a comparison
- reasonable as drawn

<details>
<summary>After your attempt</summary>

makes a small difference look large — The bars appear to double while the values differ by three. It is the commonest way a chart misleads without stating anything untrue.

hides a comparison — Both values are shown; it is their proportions that are distorted.

reasonable as drawn — It is sometimes defensible for a line chart of a narrow range, and rarely for bars, where length is the whole message.

Now look at your own chosen chart and write down what its presentation does.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six presentation choices from a made up report. For each one, decide what it does to the reader.

A chart showing the four weeks after a change, with nothing before it.

- makes a small difference look large
- hides a comparison
- reasonable as drawn

<details>
<summary>After your attempt</summary>

makes a small difference look large — Nothing about the scale is at fault.

hides a comparison — Without the weeks before, a rise cannot be told from a normal fluctuation. Selecting the window is a choice the chart does not announce.

reasonable as drawn — It would be if the previous period were beside it.

Now look at your own chosen chart and write down what its presentation does.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six presentation choices from a made up report. For each one, decide what it does to the reader.

A chart of percentages with no counts anywhere on it.

- makes a small difference look large
- hides a comparison
- reasonable as drawn

<details>
<summary>After your attempt</summary>

makes a small difference look large — The scale may be honest.

hides a comparison — Without the counts, a bar built from nine people looks identical to one built from nine hundred. The denominator is the missing comparison.

reasonable as drawn — Percentages alone are readable and not checkable.

Now look at your own chosen chart and write down what its presentation does.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six presentation choices from a made up report. For each one, decide what it does to the reader.

A line chart of a stable metric with the axis beginning at zero, so the line is almost flat.

- makes a small difference look large
- hides a comparison
- reasonable as drawn

<details>
<summary>After your attempt</summary>

makes a small difference look large — It does the opposite: it makes real variation look like nothing.

hides a comparison — Everything is present.

reasonable as drawn — It is the conservative choice and it is defensible. Whether it is the most informative is a different question from whether it misleads.

Now look at your own chosen chart and write down what its presentation does.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six presentation choices from a made up report. For each one, decide what it does to the reader.

Two series on one chart with two different vertical scales, chosen so the lines cross.

- makes a small difference look large
- hides a comparison
- reasonable as drawn

<details>
<summary>After your attempt</summary>

makes a small difference look large — Two independent scales can be set to produce almost any apparent relationship, including one that does not exist.

hides a comparison — Both series are visible; what is hidden is that they are not comparable.

reasonable as drawn — It is occasionally necessary and it should always be pointed out in the caption.

Now look at your own chosen chart and write down what its presentation does.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six presentation choices from a made up report. For each one, decide what it does to the reader.

A chart annotated with the date a marketing campaign began, alongside the redesign date.

- makes a small difference look large
- hides a comparison
- reasonable as drawn

<details>
<summary>After your attempt</summary>

makes a small difference look large — Nothing about the scale is involved.

hides a comparison — It does the opposite: it shows the reader the confounding rather than leaving them to find it.

reasonable as drawn — This is what an honest chart of a confounded period looks like, and it is rare enough to be worth noticing.

Now look at your own chosen chart and write down what its presentation does.

</details>


### Anything in the presentation that emphasises or hides part of the picture

Section: practice-plan. Stable action: write-chart-issues.

A truncated axis, a selected period, a missing comparison, a chart type that flatters one series.

**Answer:** Anything in the presentation that emphasises or hides part of the picture

A truncated axis, a selected period, a missing comparison, a chart type that flatters one series.


### Rewrite the claim

Section: practice-plan. Stable action: step-4-brief.

The claim rewritten to say only what the figures support, and still readable.

- Rewrite it to say only what the figures support.
- Keep it readable; the point is honesty, not hedging.

**Start here:** Write the version you would be willing to defend to somebody who had the underlying data.

**Enough:** Your rewrite is a sentence somebody would actually read.

**Rewriting rather than hedging:** Saying the smaller true thing, rather than the large thing with qualifications attached. Qualifications get dropped when the claim is repeated.


### The claim, rewritten to say only what the figures support

Section: practice-plan. Stable action: write-claim-rewritten.

Readable, not hedged into meaninglessness. The aim is honesty rather than caution.

**Answer:** The claim, rewritten to say only what the figures support

Readable, not hedged into meaninglessness. The aim is honesty rather than caution.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Does the data speak for itself?

- It is selected, framed and presented by somebody with a purpose. The five questions are the ordinary work of reading a number.
- Yes, if it comes from a reliable source.
- Yes, once the methodology is published.

<details>
<summary>After your attempt</summary>

It is selected, framed and presented by somebody with a purpose. The five questions are the ordinary work of reading a number. — Asking who was counted is not an accusation. Every report includes some people and excludes others, over some period rather than another, and those choices are usually invisible in the claim.

Yes, if it comes from a reliable source. — A reliable source selects and frames too. Reliability makes the numbers accurate rather than complete.

Yes, once the methodology is published. — A published methodology is what lets you answer the five questions. It does not answer them for you.

Improve: Answer all five questions in step 2, including writing absent where the report does not say. Record the change in step 5.

Check again: No question is left blank rather than marked absent.

Answers to revisit: q-who, q-when, q-else, q-denominator, q-decision, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The arithmetic in the report checks out. Does that settle it?

- No. Everything that makes a number misleading happens before the arithmetic: who was counted, over what period, against what.
- Largely, since incorrect arithmetic is the main risk.
- Yes, unless the source is untrustworthy.

<details>
<summary>After your attempt</summary>

No. Everything that makes a number misleading happens before the arithmetic: who was counted, over what period, against what. — Completions per visit can rise while completions fall, if visits fell further. Both numbers are correct and the claim is the opposite of what happened.

Largely, since incorrect arithmetic is the main risk. — Incorrect arithmetic is rare in published work and easy to catch. The selection is neither.

Yes, unless the source is untrustworthy. — Trustworthy people produce misleading numbers routinely, without intending to.

Improve: Answer the denominator question in step 2 specifically, and say what would have had to change for the claim to be true. Record the change in step 5.

Check again: Your denominator answer says what the number is out of.

Answers to revisit: q-who, q-when, q-else, q-denominator, q-decision, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your rewritten claim is three times as long and has no headline in it. Is that a failure?

- No. That length is what the figures actually support, and the original was short because it said more than they do.
- Yes, since nobody will read it.
- Yes, the rewrite should keep the original structure.

<details>
<summary>After your attempt</summary>

No. That length is what the figures actually support, and the original was short because it said more than they do. — The aim is honesty rather than caution: the smaller true statement, written readably. Hedging the large claim would be worse, because qualifications get dropped when a claim is repeated.

Yes, since nobody will read it. — People read specific sentences perfectly well. What they do not read is a claim buried in four qualifications.

Yes, the rewrite should keep the original structure. — The original structure is what carried the unsupported part.

Improve: Check your rewrite in step 4 states a smaller true thing rather than the same thing with qualifications. Record the change in step 5.

Check again: The rewrite could be defended to somebody holding the underlying data.

Answers to revisit: claim-rewritten, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

Which question was most revealing and why, and the repair the Check questions asked for.

- Note which question was most revealing.
- Save the original claim, the questions and the rewrite.

**Start here:** Look back at the five answers and find the one that changed the claim most.

**Enough:** You named a question rather than a fact.

**The most revealing question:** The one that changed your reading most. It is usually who was counted or what the denominator is, and knowing which teaches you where to start next time.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Which question was most revealing, and why

Section: practice. Stable action: write-most-revealing.

Write your answer for “Which question was most revealing, and why”. Use the task instructions below to decide what to include.

**Answer:** Which question was most revealing, and why




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson puts a count and an observation about the same thing side by side.


<details>
<summary>Optional hints and reference material</summary>

- Find a real published claim and work through the five questions in writing.
- Mark each answer as stated in the source, inferable, or absent.

- R63: [UK Analysis Function: data visualisation charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/) — Axes, gridlines, direct labelling, colour contrast and publishing the underlying data. Purpose: Supplies the conventions against which a published chart is checked. Free reading, no account. Verified 2026-09-06; published 19 May 2022. Written for government statistics; it excludes interactive dashboards. Fallback: R29.
- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Using performance data and what it can support. Purpose: Frames the five questions as ordinary practice rather than scepticism. Free reading, no account. Verified 2026-09-06. Government context; the questions transfer to any published figure. Fallback: R07.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Five questions are asked of a real published claim**

Adequate evidence: A real claim quoted with all five questions applied.

0 — An invented example.

1 — A real claim with fewer than five questions.

2 — A real claim with all five asked.

3 — As adequate, and a sixth question specific to the domain is added.

Repair: Find a real published claim and work through the five questions in writing. Recheck: The questioned claim.

**Available and unavailable answers are distinguished**

Adequate evidence: A record of which answers the source provides and which it omits.

0 — Answers guessed.

1 — Answers given without distinguishing found from assumed.

2 — Clear separation of available and absent.

3 — As adequate, and the absent ones are ranked by how much they matter.

Repair: Mark each answer as stated in the source, inferable, or absent. Recheck: The answer record.

**The presentation is checked against chart conventions**

Adequate evidence: A check of axis, labelling and colour against the assigned guidance.

0 — Presentation not examined.

1 — Examined impressionistically.

2 — Checked against specific conventions with findings.

3 — As adequate, and a presentation choice is linked to the argument it supports.

Repair: Compare the chart with the guidance's rules for axes and labelling and note the breaches. Recheck: The presentation check.

**The claim is rewritten to match its support**

Adequate evidence: A rewritten claim that is both honest and readable.

0 — Not rewritten.

1 — Rewritten into unreadable hedging.

2 — Rewritten to say what is supported, clearly.

3 — As adequate, and the rewrite is shorter than the original.

Repair: Write the sentence the figures actually support, then cut it until it reads well. Recheck: The rewritten claim.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson puts a count and an observation about the same thing side by side.

**Review criteria:**

- Five questions are asked of a real published claim
- Available and unavailable answers are distinguished
- The presentation is checked against chart conventions
- The claim is rewritten to match its support

<details>
<summary>Reading, video and deeper explanation</summary>

- The five questions cover most misreadings. Who was counted decides whether the population is the one you care about. The period decides comparability, since a fortnight containing a holiday is not a normal fortnight. Concurrent changes are the usual reason a number moved. The denominator is the most frequently omitted fact, because a rise in a percentage can come entirely from a fall in the base. And the decision being justified tells you what the number is doing in the room.
- None of this requires statistical expertise. It requires refusing to accept a number without its context, which is a habit rather than a technique, and it makes you useful in meetings where everyone else is treating a chart as self-evident.
- The chart itself often carries the answer or hides it. The assigned chart guidance names the conventions — a full axis, direct labels, an accessible palette, published underlying data — and a chart that breaks them frequently does so in the direction of its author's argument.
- Rewriting a claim to match its support is the exercise. It is the same discipline you applied to your own rates, applied to someone else's, and it is how you learn to do it under pressure with a number you did not produce.

[UK Analysis Function: data visualisation charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/).

</details>

## Lesson 6: Numbers and conversations together

Stable ID: m15-l06-v1. Core.

Numbers show where and how much; conversations show why. Used alone, each produces a confident wrong answer of a different kind.

Bring: One count and one qualitative finding about the same thing.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- One quantitative and one qualitative finding about the same behaviour
- What each explains that the other cannot
- A change proposal that needed both
- Any contradiction between them, kept rather than resolved

### Start with a clear task

Section: learn. Stable action: welcome.

Take one quantitative finding and one qualitative finding about the same behaviour, and write what each explains that the other cannot.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Quantitative shows scale and location; qualitative shows mechanism.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Start from whichever you have and use the other to fill its gap.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

A count without a mechanism produces an unfixable problem.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

A mechanism without a count produces an unprioritisable one.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Contradictions between them are findings, not errors.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The pairing: the synthetic funnel showed the largest drop between opening a class and starting a booking; the m05 observation showed a participant checking the price against a screenshot from a friend, twice, because the displayed price did not match what she remembered. The count located the problem, the observation supplied a mechanism, and together they produced a specific change — showing the price consistently and earlier. Written separately, the count would have produced a redesign of the booking button and the observation would have been dismissed as one person.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Pair the findings

Section: practice-plan. Stable action: step-1-brief.

One count and one observation about the same behaviour, each stated on its own terms.

- Choose one count and one observation about the same behaviour.
- State what each says on its own.

**Start here:** Start from whichever you already have and look for its pair.

**Enough:** Both are about the same behaviour rather than about the same screen.

**Quantitative:** Counting. It shows scale and location: how many, and where.

**Qualitative:** Watching and asking. It shows mechanism: what happened and why, for the people you watched.


### The count, and what it says on its own

Section: practice-plan. Stable action: write-quantitative.

From your funnel, your provider’s records, or anything you can count. Say if it is synthetic.

**Answer:** The count, and what it says on its own

From your funnel, your provider’s records, or anything you can count. Say if it is synthetic.


### The observation, and what it says on its own

Section: practice-plan. Stable action: write-qualitative.

From your own sessions. One person doing one thing, described as what they did rather than what it means.

**Answer:** The observation, and what it says on its own

From your own sessions. One person doing one thing, described as what they did rather than what it means.


### How you know they are about the same behaviour

Section: practice-plan. Stable action: write-same-behaviour.

Write your answer for “How you know they are about the same behaviour”. Use the task instructions below to decide what to include.

**Answer:** How you know they are about the same behaviour




### Write the gaps

Section: practice-plan. Stable action: step-2-brief.

What each finding cannot tell you, and how the two gaps differ.

- Write what the count cannot tell you.
- Write what the observation cannot tell you.
- Check the two gaps are genuinely different.

**Start here:** Write what each one cannot tell you before writing anything about what they mean together.

**Enough:** The two gaps are genuinely different: one about why, one about how many.

**A count without a mechanism:** A problem you cannot fix, because nothing says what causes it. It produces redesigns of whatever is nearest.

**A mechanism without a count:** A problem you cannot prioritise, because nothing says how often. It produces work on whatever was most vivid.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Pairing a count and an observation at a tool library, and dismissing the one with fewer people in it.

**What I had:** A synthetic funnel showing the largest drop between opening a tool and starting a booking. And one session where somebody checked the price twice against a screenshot from a friend.

**What I did with the observation:** Set it aside. One person, one session, and the funnel was about everybody. The count felt like the serious evidence.

**What the count alone produced:** A plan to redesign the booking button, because that is what sits at the step where people stop. Two weeks of work aimed at the nearest visible thing.

**What the observation supplied:** A mechanism: the price shown on the listing did not match the price at the next step, so she went back to check. The button was never the problem.

**What the two together produced:** Show the same price in both places, earlier. The count said it was worth doing, the observation said what to do, and neither would have produced it alone.

**Wrong turn:** The wrong turn is ranking the evidence by how many people are in it, because that is the obvious comparison and it is the wrong axis. A count with no mechanism produces a redesign of whatever is nearest the drop.

**Trade-off:** Acting on one observation means acting on a mechanism you have seen once, and it may be rare. The count is what says the area is worth the work.

**Unknown:** Still unknown: how many people meet the price mismatch. One person did; the funnel cannot see the reason; and the change is cheap enough that the pair is enough to justify it.


### What the count cannot tell you

Section: practice-plan. Stable action: write-count-cannot.

Write your answer for “What the count cannot tell you”. Use the task instructions below to decide what to include.

**Answer:** What the count cannot tell you




### What the observation cannot tell you

Section: practice-plan. Stable action: write-observation-cannot.

Write your answer for “What the observation cannot tell you”. Use the task instructions below to decide what to include.

**Answer:** What the observation cannot tell you




### How the two gaps differ

Section: practice-plan. Stable action: write-gaps-differ.

If they are the same gap, the two findings are not complementary and one of them is the wrong pair.

**Answer:** How the two gaps differ

If they are the same gap, the two findings are not complementary and one of them is the wrong pair.


### Propose a change from both

Section: practice-plan. Stable action: step-3-brief.

A change neither finding alone would have produced, with which evidence supports which part.

- Write a change that neither finding alone would have produced.
- State which part of the evidence supports which part of the change.

**Start here:** Write the change first, then go back and label which evidence supports which part.

**Enough:** Removing either finding would change the proposal.

**A change that needed both:** One where the count says the area matters and the observation says what to do. Either alone produces a different and usually worse change.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six questions about a made up tool library. For each one, decide which kind of evidence can answer it.

How many people were charged twice last month?

- counting
- watching or asking
- neither on its own

<details>
<summary>After your attempt</summary>

counting — A complete count from the payment records. Nothing about watching would produce the number.

watching or asking — You would have to watch an implausible number of people to establish a rate.

neither on its own — The record has it.

Now write your own change, and say which half of your evidence supports which half of it.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six questions about a made up tool library. For each one, decide which kind of evidence can answer it.

Why did those people pay a second time?

- counting
- watching or asking
- neither on its own

<details>
<summary>After your attempt</summary>

counting — No count contains a reason. The record shows two payments and nothing about what the person believed.

watching or asking — Three conversations would produce a mechanism, which is the thing that tells you what to change.

neither on its own — Asking works here, as long as nobody reports three people as a rate.

Now write your own change, and say which half of your evidence supports which half of it.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six questions about a made up tool library. For each one, decide which kind of evidence can answer it.

At which step do most people stop?

- counting
- watching or asking
- neither on its own

<details>
<summary>After your attempt</summary>

counting — A funnel answers exactly this and nothing else.

watching or asking — Watching five people tells you where five people stopped.

neither on its own — It is the clearest case for counting there is.

Now write your own change, and say which half of your evidence supports which half of it.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six questions about a made up tool library. For each one, decide which kind of evidence can answer it.

Is this worth two weeks of work?

- counting
- watching or asking
- neither on its own

<details>
<summary>After your attempt</summary>

counting — A count says how often. It says nothing about how bad it is when it happens.

watching or asking — An observation says how bad it is for one person and nothing about how many.

neither on its own — Prioritising needs both: how often, from counting, and how much harm, from watching. This is the question the pair exists for.

Now write your own change, and say which half of your evidence supports which half of it.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six questions about a made up tool library. For each one, decide which kind of evidence can answer it.

Does the phrase place held mean anything to people?

- counting
- watching or asking
- neither on its own

<details>
<summary>After your attempt</summary>

counting — No behaviour distinguishes somebody who understood it from somebody who ignored it.

watching or asking — Asking three people to say what it means in their own words answers it in ten minutes.

neither on its own — Asking is sufficient, and the answer applies to the people you asked.

Now write your own change, and say which half of your evidence supports which half of it.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six questions about a made up tool library. For each one, decide which kind of evidence can answer it.

Is the problem worse on phones than on laptops?

- counting
- watching or asking
- neither on its own

<details>
<summary>After your attempt</summary>

counting — A split by device answers it, if the data has one. Without the split it is unanswerable by any method.

watching or asking — You could watch people on both, and you would need a great many to compare rates.

neither on its own — It is a comparison of frequencies, which is what counting is for.

Now write your own change, and say which half of your evidence supports which half of it.

</details>


### A change neither finding alone would have produced

Section: practice-plan. Stable action: write-change-proposed.

Write your answer for “A change neither finding alone would have produced”. Use the task instructions below to decide what to include.

**Answer:** A change neither finding alone would have produced




### Which part of the evidence supports which part of the change

Section: practice-plan. Stable action: write-which-supports.

Write your answer for “Which part of the evidence supports which part of the change”. Use the task instructions below to decide what to include.

**Answer:** Which part of the evidence supports which part of the change




### Look for contradiction

Section: practice-plan. Stable action: step-4-brief.

Any disagreement between the two findings, kept, with what would explain it.

- Check whether the two disagree in any respect.
- If they do, keep both and write what would explain the disagreement.

**Start here:** Look for the place where the observation suggests something the count does not show.

**Enough:** Any contradiction is written down rather than resolved by preference.

**Contradiction:** The two findings disagreeing. It is a finding in itself, and resolving it by picking the number discards the more interesting half.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Finding a disagreement between a tool-library count and an observation, and explaining it away.

**The disagreement:** The records show eleven duplicate payments in March. In three sessions, all three people said they would have paid again if they were not being watched, and none of them did.

**What I wrote at first:** That the sessions were unrepresentative, and eleven is the real number. It resolved the disagreement and let me move on.

**What that discarded:** The most interesting thing in the study. Three of three saying they would have paid again, against eleven recorded, suggests the records are not counting everybody it happens to.

**What would explain it:** A second payment made on a different card, or by somebody ringing the library, would not appear as a duplicate in the provider’s records at all.

**What I did:** Kept both, wrote the possible explanation, and added one question to the next three sessions: what did you actually do next? The count may be an undercount, which is a finding neither method produced alone.

**Wrong turn:** The wrong turn is resolving a contradiction by declaring one side unrepresentative, because the small sample is always the easier one to dismiss. A disagreement between methods is usually about what each one can see.

**Trade-off:** Keeping the contradiction means the report has no single number in it and ends with a question rather than a figure.

**Unknown:** Still unknown: whether the records undercount, and by how much. Three people cannot establish it, and the next three sessions have a question that might.


### Any respect in which the two disagree

Section: practice-plan. Stable action: write-contradiction-found.

Keep it. A contradiction is a finding, not an error to be resolved by picking the number.

**Answer:** Any respect in which the two disagree

Keep it. A contradiction is a finding, not an error to be resolved by picking the number.


### What would explain the disagreement

Section: practice-plan. Stable action: write-what-would-explain.

Write your answer for “What would explain the disagreement”. Use the task instructions below to decide what to include.

**Answer:** What would explain the disagreement




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Is quantitative evidence more objective?

- It is more precise about different things. A precisely counted event whose cause nobody understands is not more objective than three careful observations of why it happens.
- Yes, since it does not depend on interpretation.
- Yes, when the sample is large enough.

<details>
<summary>After your attempt</summary>

It is more precise about different things. A precisely counted event whose cause nobody understands is not more objective than three careful observations of why it happens. — Counting is precise about scale and location. Watching is precise about mechanism. Treating one as the serious evidence produces decisions with a predictable shape of error.

Yes, since it does not depend on interpretation. — What to count, who to include and what period all depend on judgement, as the previous lesson showed.

Yes, when the sample is large enough. — A large sample makes the count reliable. It does not make it say anything about why.

Improve: Write what the count cannot tell you in step 2, in the same detail as what it can. Record the change in step 5.

Check again: Both gaps are written out, and they are different gaps.

Answers to revisit: count-cannot, observation-cannot, gaps-differ, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your funnel shows where people stop, and you have no observations. What is likely to happen?

- You will redesign whatever is nearest the drop, because the count gives no mechanism and something has to be chosen.
- You will make a reasonable guess, which is usually fine.
- You will need a larger sample before deciding.

<details>
<summary>After your attempt</summary>

You will redesign whatever is nearest the drop, because the count gives no mechanism and something has to be chosen. — A drop at the booking step produces a redesigned booking button, when the cause may be a price shown differently two screens earlier. The count locates; only watching explains.

You will make a reasonable guess, which is usually fine. — The guess is usually the nearest visible element, which is the one the count happens to point at.

You will need a larger sample before deciding. — More of the same kind of evidence does not supply a mechanism.

Improve: Pair your count with an observation in step 1, or write plainly that you have none and what you would watch. Record the change in step 5.

Check again: Your proposal rests on something more than where the drop is.

Answers to revisit: quantitative, qualitative, same-behaviour, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your count and your observation disagree. What should you do?

- Keep both and write what would explain the disagreement. A contradiction is a finding rather than an error.
- Trust the count, since it covers more people.
- Trust the observation, since you watched it happen.

<details>
<summary>After your attempt</summary>

Keep both and write what would explain the disagreement. A contradiction is a finding rather than an error. — Resolving it by picking the number discards the more interesting half. The explanation is usually about who each method saw: the count includes people the session never reached.

Trust the count, since it covers more people. — It covers more people and says nothing about why. The disagreement may be exactly where the mechanism lives.

Trust the observation, since you watched it happen. — You watched it happen once. The count may be telling you it is rare.

Improve: Write the contradiction and a possible explanation in step 4 rather than resolving it. Record the change in step 5.

Check again: Your record keeps both findings, including the inconvenient one.

Answers to revisit: contradiction-found, what-would-explain, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

One line each on what the count added and what the observation added, and the repair the Check questions asked for.

- Write which finding you would have trusted alone, and why that would have been wrong.
- Save the pairing and the proposal.

**Start here:** Write both lines in the form: without this, I would have ….

**Enough:** Neither line could be written about the other method.

**What each added:** The specific contribution of each method to this decision. It is the sentence that makes the pairing repeatable.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### In one line each: what the count added and what the observation added

Section: practice. Stable action: write-what-each-added.

Write your answer for “In one line each: what the count added and what the observation added”. Use the task instructions below to decide what to include.

**Answer:** In one line each: what the count added and what the observation added




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson decides what should be recorded about people at all.


<details>
<summary>Optional hints and reference material</summary>

- Pick the behaviour first, then find the count and the observation about it.
- For each finding write the question it cannot answer; if the two questions match, you have paired the wrong findings.

- R04: [GOV.UK: analyse a research session](https://www.gov.uk/service-manual/user-research/analyse-a-research-session) — Turning observations into findings and decisions. Purpose: Supplies the qualitative half of the pairing and its discipline. Free reading, no account. Verified 2026-09-06. It does not discuss quantitative work; the pairing is this lesson's own. Fallback: R08.
- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Choosing measures and interpreting them alongside other evidence. Purpose: Supplies the quantitative half and warns against reading numbers alone. Free reading, no account. Verified 2026-09-06. Government context with real data; your counts remain small or synthetic and must be labelled. Fallback: R07.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Both findings concern the same behaviour**

Adequate evidence: A count and an observation about one behaviour, each stated.

0 — Two unrelated findings.

1 — Loosely related findings.

2 — Both concern the same behaviour precisely.

3 — As adequate, and the behaviour is one your metric tree already names.

Repair: Pick the behaviour first, then find the count and the observation about it. Recheck: The paired findings.

**The gaps of each are stated and genuinely different**

Adequate evidence: A written gap per finding, describing different kinds of ignorance.

0 — Gaps not stated.

1 — Gaps stated but essentially the same.

2 — Two genuinely different gaps.

3 — As adequate, and each gap names what method would fill it.

Repair: For each finding write the question it cannot answer; if the two questions match, you have paired the wrong findings. Recheck: The gap statements.

**A change proposal draws on both**

Adequate evidence: A proposal with each element traced to the count or the observation.

0 — A proposal from one source.

1 — Both cited without tracing.

2 — Each element traced to its source.

3 — As adequate, and the write-up says what the proposal would have been from each source alone.

Repair: Write the change, then annotate which finding supports each part of it. Recheck: The traced proposal.

**Contradictions are kept and explained rather than resolved away**

Adequate evidence: Any disagreement recorded with a candidate explanation.

0 — Contradiction dropped.

1 — Noted without explanation.

2 — Kept with an explanation and what would settle it.

3 — As adequate, and the rare-and-severe possibility is considered explicitly.

Repair: Look for where the count and the observation imply different urgencies, and write why both could be true. Recheck: The contradiction note.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson decides what should be recorded about people at all.

**Review criteria:**

- Both findings concern the same behaviour
- The gaps of each are stated and genuinely different
- A change proposal draws on both
- Contradictions are kept and explained rather than resolved away

<details>
<summary>Reading, video and deeper explanation</summary>

- The division of labour is clean. A count tells you that people stop at a step and roughly how many; it cannot tell you what they were thinking. A conversation tells you what someone believed and expected; it cannot tell you how many people share that belief. Used together, each covers the other's blind spot, which is why the strongest evidence in any product argument is usually one of each.
- The order does not matter but the pairing does. If a number surprises you, go and watch three people; if three people surprise you, look for a count that indicates whether it is widespread. Neither step is expensive at your scale, and the pair is far more persuasive than either alone.
- A count without a mechanism cannot be acted on. Knowing that people leave at payment tells nobody what to change, and teams presented with that fact alone tend to change something visible and re-measure hopefully. That is how products acquire changes nobody can explain.
- Contradictions are informative. If your count suggests a problem is rare and your conversations suggest it is severe, both may be right: rare and severe is a real category, and it is the one most often dismissed by whichever evidence type the team prefers.

[GOV.UK: analyse a research session](https://www.gov.uk/service-manual/user-research/analyse-a-research-session).

</details>

## Lesson 7: What to record, and what to refuse to record

Stable ID: m15-l07-v1. Core.

Every measurement is a collection of somebody's behaviour. Designers are frequently the only person in the room who asks whether it should be collected at all.

Bring: Your metric tree and privacy plan.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- An event list tied to metric-tree questions
- A purpose, owner and retention period per event
- At least two documented refusals with reasons
- One event reduced rather than removed

### Start with a clear task

Section: learn. Stable action: welcome.

Write an instrumentation plan naming every event you would record, why, how long it is kept, and at least two things you will deliberately not collect.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Record what a named question needs, not what might be useful later.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Each event should have an owner, a purpose and a retention period.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Free-text and location are high-risk; think hard before recording either.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Anonymous and identified are different decisions with different obligations.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Refusing to collect something is a design decision worth documenting.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The plan listed nine events, each tied to a node in the metric tree, with a purpose, an owner and a retention period of ninety days. Two refusals were recorded: no free-text capture from the search box, because the question it would answer did not justify holding whatever people type; and no precise location, since the coarse area answered the only question that mattered. One event was reduced rather than removed: rather than recording the exact class booked, it recorded that a booking occurred, since the identity of the class answered no question in the tree.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Derive events from questions

Section: practice-plan. Stable action: step-1-brief.

An event for each observable node, derived from the question it answers, with anything unmotivated discarded.

- For each observable node in your tree, name the event that would indicate it.
- Discard any event with no question behind it.

**Start here:** Take the observable nodes from your tree and write the event each one needs.

**Enough:** Every event on the list can name the question it answers.

**Instrumentation plan:** The written list of what gets recorded about people, why, and for how long. Writing it is often the only moment anybody asks whether it should be recorded at all.

**Event:** One thing being recorded when it happens. It should exist because a named question needs it, not because it might be useful.


### For each observable node in your tree: the event that would indicate it

Section: practice-plan. Stable action: write-events-derived.

Start from the question. An event with no question behind it does not go on the list.

**Answer:** For each observable node in your tree: the event that would indicate it

Start from the question. An event with no question behind it does not go on the list.


### Events you discarded because nothing was asking for them

Section: practice-plan. Stable action: write-discarded.

Write your answer for “Events you discarded because nothing was asking for them”. Use the task instructions below to decide what to include.

**Answer:** Events you discarded because nothing was asking for them




### Add purpose, owner and retention

Section: practice-plan. Stable action: step-2-brief.

A purpose, an owner and a retention period for every event, with a deletion mechanism.

- Write why each event is collected and who is responsible.
- Set a retention period and a deletion mechanism.

**Start here:** Write the purpose and the owner before the retention period; the period follows from what it is for.

**Enough:** Every event has a name against it and a period with a mechanism.

**Retention:** How long it is kept before deletion. Data with no retention period is kept for ever by default, which is a decision made by nobody.

**Owner:** The person responsible for it. Without a name, nobody reviews it, nobody deletes it, and nobody can answer a question about it.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Planning what to record for a tool library, and planning to decide later.

**What I proposed:** Record everything available now and work out what we need once we have some data. It is what everybody suggests and it sounds cautious.

**What that produced in three months:** Forty-one events, eleven of which nobody could explain, including the full text of every search and the exact street-level location of every session.

**Why nobody removed them:** Removing data feels risky, because somebody might be using it. With no purpose written against each event, nobody could tell whether anybody was.

**What it cost:** Three months of holding search text and locations that answered no question, that had to be protected, and that could not be confidently deleted.

**What deciding first produced instead:** Nine events, each tied to a node in the tree, each with a purpose, an owner and ninety days. Anything not on the list is not collected, which is a much easier rule to hold.

**Wrong turn:** The wrong turn is collecting first and deciding later, because it is the cautious-sounding option and later never arrives. In the meantime you hold data you cannot justify, cannot confidently delete and must protect.

**Trade-off:** Deciding first means that in six months a question will arrive that the data cannot answer, and you will have to wait ninety days to answer it.

**Unknown:** Still unknown: which question that will be. The cost of waiting for it is smaller and more visible than the cost of holding everything.


### For each event: why it is collected and who is responsible for it

Section: practice-plan. Stable action: write-purpose-owner.

Write your answer for “For each event: why it is collected and who is responsible for it”. Use the task instructions below to decide what to include.

**Answer:** For each event: why it is collected and who is responsible for it




### How long each is kept, and how it is deleted

Section: practice-plan. Stable action: write-retention.

A retention period with no deletion mechanism is a wish. Say what actually removes it.

**Answer:** How long each is kept, and how it is deleted

A retention period with no deletion mechanism is a wish. Say what actually removes it.


### Assess risk

Section: practice-plan. Stable action: step-3-brief.

Free text, location and cross-session identifiers marked, with a judgement on whether the answer justifies holding each.

- Mark any free text, location or cross-session identifier.
- For each, ask whether the answer justifies holding it.

**Start here:** Go through the list and mark anything a person typed, anywhere they were, or anything linking visits.

**Enough:** Every marked item has a judgement rather than a note to think about it later.

**Free text:** Anything a person types. It can contain names, addresses, health details and anything else, which is why it is the highest-risk thing to record.

**Cross-session identifier:** Something linking a person’s visits together. It turns a set of anonymous events into a history of one individual, which is a different decision with different obligations.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six proposed events for a made up tool library. For each one, decide what the plan should do with it.

That a booking was completed, with the date.

- collect it
- reduce it
- refuse it

<details>
<summary>After your attempt</summary>

collect it — It answers a node in the tree directly, contains nothing about anybody, and is the smallest form of the thing.

reduce it — There is very little left to remove.

refuse it — Without it, nothing in the tree can be observed at all.

Now mark your own events the same way, and write the reason beside every refusal and reduction.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six proposed events for a made up tool library. For each one, decide what the plan should do with it.

The full text of everything typed into the search box.

- collect it
- reduce it
- refuse it

<details>
<summary>After your attempt</summary>

collect it — People type names, addresses and all sorts of things into search boxes, and you cannot know in advance what arrives.

reduce it — A reduced version exists — whether a search returned results — and it is a different event answering a different question.

refuse it — The question it would answer is what people look for, which is interesting and does not justify holding whatever anybody types.

Now mark your own events the same way, and write the reason beside every refusal and reduction.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six proposed events for a made up tool library. For each one, decide what the plan should do with it.

Which specific tool was booked, on every booking.

- collect it
- reduce it
- refuse it

<details>
<summary>After your attempt</summary>

collect it — Nothing in the tree asks which tool, so it is being collected because it is available.

reduce it — Record that a booking happened. The identity of the tool answers no question you have written down, and can be added later if one appears.

refuse it — It is not risky in itself, so refusing it outright is stronger than needed.

Now mark your own events the same way, and write the reason beside every refusal and reduction.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six proposed events for a made up tool library. For each one, decide what the plan should do with it.

Precise location at the moment of booking.

- collect it
- reduce it
- refuse it

<details>
<summary>After your attempt</summary>

collect it — Street-level location is among the most sensitive things you can hold, and nothing in the tree needs it.

reduce it — A coarse area answers the only question that mattered, which makes the reduced version a different and acceptable event.

refuse it — Refusing the precise version and recording the coarse one, if anything, is the right shape. The refusal is worth documenting either way.

Now mark your own events the same way, and write the reason beside every refusal and reduction.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six proposed events for a made up tool library. For each one, decide what the plan should do with it.

Whether a search returned any results.

- collect it
- reduce it
- refuse it

<details>
<summary>After your attempt</summary>

collect it — It answers a real question — do people find what they came for — and contains nothing about what they typed.

reduce it — It is already the reduced form of the search-text event.

refuse it — It carries no personal content at all.

Now mark your own events the same way, and write the reason beside every refusal and reduction.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six proposed events for a made up tool library. For each one, decide what the plan should do with it.

An identifier linking every session by the same person over two years.

- collect it
- reduce it
- refuse it

<details>
<summary>After your attempt</summary>

collect it — Two years of one person’s history is a different kind of data from a set of events, with different obligations.

reduce it — A session identifier that expires, or a ninety-day window, answers the returning-visitor question in the tree without building a two-year history.

refuse it — Refusing entirely loses the returning-visitor distinction, which an earlier lesson showed the funnel genuinely needs.

Now mark your own events the same way, and write the reason beside every refusal and reduction.

</details>


### Any free text, location or cross-session identifier, marked

Section: practice-plan. Stable action: write-risky-marked.

Write your answer for “Any free text, location or cross-session identifier, marked”. Use the task instructions below to decide what to include.

**Answer:** Any free text, location or cross-session identifier, marked




### For each: whether the answer justifies holding it

Section: practice-plan. Stable action: write-justified.

Ask what question it answers and what you would do differently with the answer. If neither is clear, it does not justify it.

**Answer:** For each: whether the answer justifies holding it

Ask what question it answers and what you would do differently with the answer. If neither is clear, it does not justify it.


### Refuse and reduce

Section: practice-plan. Stable action: step-4-brief.

At least two documented refusals with reasons, and one event reduced to the minimum that answers its question.

- Record at least two things you will not collect, with reasons.
- Reduce one event to the minimum that answers its question.

**Start here:** For each refusal, write what question it would have answered, so the refusal is arguable rather than squeamish.

**Enough:** Both refusals name a question and say why the answer did not justify the collection.

**Documented refusal:** Writing down what you decided not to collect and why. It stops the same thing being proposed as a new idea every quarter.

**Reduction:** Keeping the part that answers the question and dropping the rest. It is usually available and usually overlooked.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Refusing to record something at a tool library, and refusing it on instinct.

**What I wrote:** No location data. It felt intrusive and I did not want to hold it.

**What happened when it was proposed again:** Somebody asked which collection branch people were nearest, which is a reasonable planning question. My refusal said nothing about questions, so it had nothing to say back.

**Why the instinct version failed:** A refusal with no reasoning reads as squeamishness. Six weeks later somebody with a good question wins the argument, and the precise version is what gets built.

**What I wrote instead:** No precise location. The question is which branch people are nearest, and a coarse area answers it. Precise location answers nothing extra and is among the most sensitive things we could hold.

**What that version could do:** It survived the second proposal, because it accepted the question and refused only the part that answered nothing.

**Wrong turn:** The wrong turn is refusing on instinct, because the instinct is usually right and the argument is not written down. A refusal with no question in it loses to the first colleague who has one.

**Trade-off:** Naming the question means conceding that the data would be useful for something, which feels like weakening your own position.

**Unknown:** Still unknown: whether coarse areas are coarse enough. It depends on how thinly people are spread, and the plan says the judgement rather than pretending it is settled.


### At least two things you will deliberately not collect, with reasons

Section: practice-plan. Stable action: write-refusals.

Write your answer for “At least two things you will deliberately not collect, with reasons”. Use the task instructions below to decide what to include.

**Answer:** At least two things you will deliberately not collect, with reasons



<details>
<summary>Example</summary>

Example (made up): no free-text capture from the search box. The question it would answer is what people look for, and that does not justify holding whatever anybody types.

</details>


### One event reduced to the minimum that answers its question

Section: practice-plan. Stable action: write-reduced.

Write your answer for “One event reduced to the minimum that answers its question”. Use the task instructions below to decide what to include.

**Answer:** One event reduced to the minimum that answers its question



<details>
<summary>Example</summary>

Example (made up): record that a booking happened rather than which tool was booked, because the tool answers no question in the tree.

</details>


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Somebody suggests collecting everything now and deciding what you need later. What is wrong with that?

- Later never arrives, and in the meantime you hold data you cannot justify, cannot confidently delete and must protect.
- Nothing, provided the data is kept secure.
- It is only a problem for personal data.

<details>
<summary>After your attempt</summary>

Later never arrives, and in the meantime you hold data you cannot justify, cannot confidently delete and must protect. — Without a purpose written against each event, nobody can tell whether anybody is using it, so nothing is ever removed. Deciding first is cheaper and safer.

Nothing, provided the data is kept secure. — Security is the obligation it creates. The question is whether the obligation was worth taking on.

It is only a problem for personal data. — Free text and cross-session identifiers become personal data whether or not anybody planned for them to.

Improve: Discard any event in step 1 that cannot name the question it answers, and record the change in step 5.

Check again: Every event on your list has a question behind it.

Answers to revisit: events-derived, discarded, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You want to record the full text people type into the search box. What is the test?

- What question it answers, and whether that answer justifies holding whatever anybody types.
- Whether the data is stored securely.
- Whether people have consented.

<details>
<summary>After your attempt</summary>

What question it answers, and whether that answer justifies holding whatever anybody types. — People type names, addresses and all sorts into search boxes. Whether a search returned results answers most of the same question and holds none of the content.

Whether the data is stored securely. — Storing it securely is required and does not address whether it should be held.

Whether people have consented. — Consent is necessary in many places and it does not make an unjustified collection justified.

Improve: Write the reduced version of one risky event in step 4 and say what question it still answers. Record the change in step 5.

Check again: Every risky event is either refused or reduced, with a reason.

Answers to revisit: refusals, reduced, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your plan sets a ninety-day retention period. Is that enough?

- Only with a deletion mechanism. A period with nothing that actually removes the data is a wish.
- Yes, since the period is documented.
- Yes, ninety days is a reasonable default.

<details>
<summary>After your attempt</summary>

Only with a deletion mechanism. A period with nothing that actually removes the data is a wish. — Data outlives intentions. Saying what deletes it, and who is responsible, is what turns the period into a property of the system rather than a paragraph in a document.

Yes, since the period is documented. — Documented periods are commonly exceeded by years, because nothing enforces them.

Yes, ninety days is a reasonable default. — The length may well be right. What is missing is what happens on day ninety-one.

Improve: Add the deletion mechanism and the owner to each event in step 2, and record the change in step 5.

Check again: Every retention period names what removes the data.

Answers to revisit: purpose-owner, retention, improvement-made

</details>


### Check jurisdiction

Section: practice. Stable action: step-5-brief.

A written note that legal requirements differ by country and that you have not verified them here.

- Note that legal requirements differ by country and that you have not verified Indian requirements here.
- Save the plan with the refusals.

**Start here:** Write one sentence saying what this plan is and what it is not.

**Enough:** Nobody could mistake the plan for a legal review.

**Jurisdiction:** Where the rules apply. Requirements differ by country, and this lesson teaches reasoning rather than law.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### The note saying legal requirements differ by country and that you have not verified them

Section: practice. Stable action: write-jurisdiction-note.

This lesson teaches the reasoning. It is not legal advice and the plan should say so.

**Answer:** The note saying legal requirements differ by country and that you have not verified them

This lesson teaches the reasoning. It is not legal advice and the plan should say so.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson looks at a number moving over time and asks what else was happening.


<details>
<summary>Optional hints and reference material</summary>

- Delete any event you cannot attach to a node, and record that you did.
- Complete the three fields for each event; anything without a purpose should not be collected.

- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Choosing what to measure and why. Purpose: Keeps the event list tied to questions rather than to availability. Free reading, no account. Verified 2026-09-06. It does not address data-protection obligations, which differ by jurisdiction and are not verified here for India. Fallback: R07.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The point on creating a secure service which protects users' privacy. Purpose: Places collection decisions inside a stated set of obligations. Free reading, no account. Verified 2026-09-06. UK government obligations; check Indian requirements from a primary source before implementing anything. Fallback: R07.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Every event traces to a question in the metric tree**

Adequate evidence: An event list with a tree node beside each entry.

0 — Events listed by what is easy to record.

1 — Some traced, others speculative.

2 — Every event traces to a named question.

3 — As adequate, and speculative events were discarded explicitly.

Repair: Delete any event you cannot attach to a node, and record that you did. Recheck: The traced event list.

**Purpose, owner and retention are recorded per event**

Adequate evidence: Three fields completed for every event, with a deletion mechanism.

0 — None recorded.

1 — Purpose only.

2 — All three with a deletion mechanism.

3 — As adequate, and the retention periods differ by risk rather than being uniform.

Repair: Complete the three fields for each event; anything without a purpose should not be collected. Recheck: The completed plan.

**At least two refusals are documented with reasons**

Adequate evidence: Two things deliberately not collected, each with the reasoning.

0 — No refusals.

1 — Refusals implied by absence.

2 — Two documented with reasons.

3 — As adequate, and one refusal concerns something a stakeholder would plausibly request.

Repair: Write what you could collect and chose not to, and why the answer was not worth the holding. Recheck: The refusal list.

**One event is reduced to the minimum that answers its question**

Adequate evidence: An event narrowed, with what was dropped and why it was unnecessary.

0 — No reduction.

1 — Reduced without stating what was dropped.

2 — Reduced with the dropped detail and its reason.

3 — As adequate, and the reduction removes an identifying element.

Repair: Take your richest event and ask what the question actually needs; drop the rest. Recheck: The reduced event.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson looks at a number moving over time and asks what else was happening.

**Review criteria:**

- Every event traces to a question in the metric tree
- Purpose, owner and retention are recorded per event
- At least two refusals are documented with reasons
- One event is reduced to the minimum that answers its question

<details>
<summary>Reading, video and deeper explanation</summary>

- Instrumentation grows by default: it is easier to record everything and decide later, and that is exactly the habit that produces a store of behavioural data with no stated purpose and no deletion date. Tying every event to a question from your metric tree keeps the collection proportionate and makes it defensible.
- Purpose, owner and retention should be recorded per event, in the same way your m05 data plan recorded them for research material. An event nobody can name a purpose for should not be collected; an event with no retention period will be kept indefinitely by default.
- Some data is riskier than its usefulness justifies. Free text can contain anything, including things people did not intend to disclose; precise location is identifying in combination with almost anything; and identifiers that link sessions turn anonymous counts into personal records. The design question is whether the answer you get is worth what you now hold.
- Refusal is a design act. Writing down what you chose not to collect, and why, is what makes the decision visible later when someone asks why the dashboard cannot answer a question. It also gives you a defensible position when the request is for something intrusive: not a preference, but a recorded decision with a reason.

[GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success).

</details>

## Lesson 8: Time, cohorts and the number that moved by itself

Stable ID: m15-l08-v1. Core.

Most numbers move for reasons nobody designed, and attributing that movement to your work is the easiest mistake to make and the hardest to retract.

Bring: Your funnel with its synthetic counts.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A metric over time with non-design explanations listed
- A cohort comparison replacing a before-and-after one
- A statement of what the cohort does and does not control for
- One explanation you cannot rule out, named

### Start with a clear task

Section: learn. Stable action: welcome.

Take one metric over time, identify what could make it move without any design change, and rework a comparison into a cohort that controls for one of them.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Seasonality, campaigns, holidays and news move numbers on their own.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

New and returning people behave differently; mixing them hides both.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

A cohort follows one group over time and compares like with like.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Before-and-after comparisons carry every concurrent change with them.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

State what you cannot control for; it is usually the most important part.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The synthetic funnel was extended over eight weeks. Completions rose in week five, when the design shipped — and also when a local festival ended and a provider's promotion ran. Three non-design explanations were listed. The comparison was reworked as a cohort: people arriving in week two versus week six, followed for their first fourteen days, which removed the effect of the changing mix of new and returning visitors. The write-up stated plainly that the promotion could not be separated, that the numbers were synthetic, and that the exercise demonstrates the method rather than a result.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Extend the metric over time

Section: practice-plan. Stable action: step-1-brief.

One metric plotted across at least eight periods, labelled synthetic, with the ship point marked.

- Plot one metric across at least eight periods, labelled synthetic.
- Mark when your design change would have shipped.

**Start here:** Plot eight periods before marking anything, so you see the variation first.

**Enough:** You can see what an ordinary week-to-week wobble looks like in your own numbers.

**Over time:** Enough periods to see what normal variation looks like. Two points look like a change; eight show whether it was one.

**Marking the ship point:** Putting your change on the chart. It is honest, and it also shows how much movement there was before it.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Plotting a tool-library metric over time, and plotting two points.

**What I drew:** The month before and the month after. Two bars, the second taller, and the change marked between them.

**What it showed:** A clear rise. It is the chart that appears in most before-and-after reports and it is almost impossible to read as anything else.

**What eight periods showed instead:** The metric moved by a similar amount in four of the eight weeks, in both directions, with nothing shipped in any of them.

**What that did to the two-bar chart:** It became one of several similar movements rather than an event. The rise was still there; what had gone was the reason to think it meant anything.

**What I learned about the shape:** Two points always look like a change, because two points always differ. Eight points show what normal variation is, which is the thing you need before you can call anything unusual.

**Wrong turn:** The wrong turn is plotting the before and the after, because that is the comparison you care about. Two points cannot show variation, so every difference between them looks like an event.

**Trade-off:** Eight periods of synthetic data takes longer to invent and produces a chart with no clear story in it, which is an accurate picture of what a small product usually has.

**Unknown:** Still unknown: how much variation is normal in the real metric. These numbers are invented, and the habit of looking at the variation before the change is what the exercise is for.


### The metric, across at least eight periods, labelled synthetic

Section: practice-plan. Stable action: write-metric-plotted.

Write your answer for “The metric, across at least eight periods, labelled synthetic”. Use the task instructions below to decide what to include.

**Answer:** The metric, across at least eight periods, labelled synthetic




### When your design change would have shipped

Section: practice-plan. Stable action: write-ship-marked.

Write your answer for “When your design change would have shipped”. Use the task instructions below to decide what to include.

**Answer:** When your design change would have shipped




### List the other causes

Section: practice-plan. Stable action: step-2-brief.

Everything else that could move the number listed, with the ones that actually happened in the same period marked.

- List everything else that could move the number in that period.
- Include seasonality, campaigns, holidays and external events.

**Start here:** Ask somebody, or check a calendar, before writing anything about your own change.

**Enough:** Your list contains at least one thing that really did happen in the same period.

**Seasonality:** Regular movement caused by the calendar: term times, festivals, weather, paydays. It moves numbers more than most design changes do.

**Concurrent change:** Anything else that happened in the same period. There is always at least one, and naming it is the difference between a finding and a coincidence.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Reading a rise in completions at a tool library, and attributing it.

**What I saw:** Completions rose sharply in week five, which is the week the held-place message shipped. The chart looked like a textbook illustration of a change working.

**What I wrote:** The message reduced duplicate payments and raised completions. It was the first genuinely encouraging thing in the project.

**What I had not asked:** What else happened in week five. It took one conversation to find out: a local festival had ended, and the provider had run a promotion in the same week.

**What the earlier weeks showed:** Week two had a rise almost as large, with nothing shipped at all. The ordinary wobble in this metric was bigger than I had assumed.

**What I wrote instead:** Completions rose in week five, when the message shipped, a festival ended and a promotion ran. The three cannot be separated, and a similar rise occurred in week two with no change at all.

**Wrong turn:** The wrong turn is reading a rise after a change as a result of the change, because the timing is the most visible fact available. Something else always happened in the same period, and the ordinary variation is usually larger than anybody expects.

**Trade-off:** Naming the alternatives means the most encouraging chart in the project stops being evidence, and somebody will feel you have talked yourself out of a success.

**Unknown:** Still unknown: whether the message did anything at all. The honest position is that nothing here can tell, and the numbers are synthetic in any case.


### Everything else that could move this number in that period

Section: practice-plan. Stable action: write-other-causes-list.

Seasons, holidays, festivals, campaigns, weather, a news story, a price change, a competitor.

**Answer:** Everything else that could move this number in that period

Seasons, holidays, festivals, campaigns, weather, a news story, a price change, a competitor.


### Which of those actually happened in the same period

Section: practice-plan. Stable action: write-same-period.

Write your answer for “Which of those actually happened in the same period”. Use the task instructions below to decide what to include.

**Answer:** Which of those actually happened in the same period




### Build a cohort

Section: practice-plan. Stable action: step-3-brief.

A cohort comparison replacing a before-and-after one, with the two groups and the follow-up length named.

- Split people by the period they arrived.
- Follow each group for the same length of time.
- Compare like with like rather than period totals.

**Start here:** Split your synthetic numbers by the week people first arrived, and follow each group the same number of days.

**Enough:** Both cohorts have been followed for the same length of time.

**Cohort:** A group defined by when they arrived, followed for the same length of time. It compares like with like instead of comparing two calendar periods.

**Mix change:** The proportion of new to returning people shifting between periods. It moves period totals on its own, and a cohort removes it.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six explanations for a rise in a made up tool-library metric during the week a change shipped. For each one, decide what a cohort comparison does to it.

More of the people that week were returning members, who complete more often than first-time visitors.

- the cohort removes it
- the cohort does not touch it
- it was never a real alternative

<details>
<summary>After your attempt</summary>

the cohort removes it — Splitting by arrival period and following each group for the same length of time is exactly what this is for.

the cohort does not touch it — It is the main thing a cohort does control for.

it was never a real alternative — Mix shifts are one of the commonest causes of a period total moving.

Now build your own cohort, and write the two lists: what it controls for and what survives it.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six explanations for a rise in a made up tool-library metric during the week a change shipped. For each one, decide what a cohort comparison does to it.

A local festival ended that week, so more people were at home and doing jobs.

- the cohort removes it
- the cohort does not touch it
- it was never a real alternative

<details>
<summary>After your attempt</summary>

the cohort removes it — Both cohorts still live in their own calendar weeks, and the festival affects one of them.

the cohort does not touch it — A cohort controls for who the people are, not for what was happening in the world that week. This is the limit worth stating.

it was never a real alternative — It is entirely plausible and it is why the write-up has to name it.

Now build your own cohort, and write the two lists: what it controls for and what survives it.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six explanations for a rise in a made up tool-library metric during the week a change shipped. For each one, decide what a cohort comparison does to it.

The provider ran a promotion in the same week.

- the cohort removes it
- the cohort does not touch it
- it was never a real alternative

<details>
<summary>After your attempt</summary>

the cohort removes it — A promotion affects the calendar period, so it affects one cohort and not the other.

the cohort does not touch it — Concurrent changes are the thing no amount of cohorting fixes, which is why the honest conclusion names them.

it was never a real alternative — It is the strongest competing explanation on the list.

Now build your own cohort, and write the two lists: what it controls for and what survives it.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six explanations for a rise in a made up tool-library metric during the week a change shipped. For each one, decide what a cohort comparison does to it.

People who arrived earlier have had longer to complete a booking, so their totals are higher.

- the cohort removes it
- the cohort does not touch it
- it was never a real alternative

<details>
<summary>After your attempt</summary>

the cohort removes it — Following each group for the same fourteen days is what removes it. Without that, earlier groups always look better.

the cohort does not touch it — It is the second thing a cohort is for, after the mix.

it was never a real alternative — It is a real and easy mistake to make in any before-and-after comparison.

Now build your own cohort, and write the two lists: what it controls for and what survives it.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six explanations for a rise in a made up tool-library metric during the week a change shipped. For each one, decide what a cohort comparison does to it.

It is ordinary variation; week two rose almost as much with nothing shipped.

- the cohort removes it
- the cohort does not touch it
- it was never a real alternative

<details>
<summary>After your attempt</summary>

the cohort removes it — A cohort does not make noise smaller.

the cohort does not touch it — True, and the more useful point is different.

it was never a real alternative — It is not an alternative explanation at all; it is the observation that there may be nothing to explain. Plotting eight periods is what makes it visible.

Now build your own cohort, and write the two lists: what it controls for and what survives it.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six explanations for a rise in a made up tool-library metric during the week a change shipped. For each one, decide what a cohort comparison does to it.

It rained all week, so fewer people came in person and more booked online.

- the cohort removes it
- the cohort does not touch it
- it was never a real alternative

<details>
<summary>After your attempt</summary>

the cohort removes it — Weather belongs to the calendar week rather than to the group of people.

the cohort does not touch it — Anything about the world in that period survives cohorting, which is most of the interesting confounds.

it was never a real alternative — It is a plausible cause and worth listing.

Now build your own cohort, and write the two lists: what it controls for and what survives it.

</details>


### How you split people by the period they arrived

Section: practice-plan. Stable action: write-cohort-split.

A cohort is a group defined by when they first arrived, followed for the same length of time each.

**Answer:** How you split people by the period they arrived

A cohort is a group defined by when they first arrived, followed for the same length of time each.


### The comparison: which two cohorts, followed for how long

Section: practice-plan. Stable action: write-cohort-comparison.

Write your answer for “The comparison: which two cohorts, followed for how long”. Use the task instructions below to decide what to include.

**Answer:** The comparison: which two cohorts, followed for how long



<details>
<summary>Example</summary>

Example (made up, synthetic): people arriving in week two against people arriving in week six, each followed for their first fourteen days.

</details>


### State the controls

Section: practice-plan. Stable action: step-4-brief.

What the cohort controls for and what it does not, written as two lists.

- Write what the cohort controls for.
- Write what it does not, especially concurrent changes.

**Start here:** Write the does-not list first; it is longer and more important.

**Enough:** The second list includes everything about the world in that period.

**Controlling for something:** Arranging the comparison so that one cause cannot explain the difference. It is never all of them.


### What the cohort controls for

Section: practice-plan. Stable action: write-controls-for.

Usually the changing mix of new and returning people, and the different lengths of time each group has had.

**Answer:** What the cohort controls for

Usually the changing mix of new and returning people, and the different lengths of time each group has had.


### What it does not control for

Section: practice-plan. Stable action: write-does-not-control.

Write your answer for “What it does not control for”. Use the task instructions below to decide what to include.

**Answer:** What it does not control for




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The number went up the week you shipped. Did the change work?

- Unknown. Something else also happened in that period, always, and the ordinary variation is usually larger than people expect.
- Probably, since the timing matches.
- Yes, unless somebody can name a specific alternative.

<details>
<summary>After your attempt</summary>

Unknown. Something else also happened in that period, always, and the ordinary variation is usually larger than people expect. — Plotting eight periods shows what a normal wobble looks like. A rise in the ship week, with a festival and a promotion in it, cannot be attributed to any of the three.

Probably, since the timing matches. — Timing is the most visible fact and the weakest evidence. Everything that happened that week has the same timing.

Yes, unless somebody can name a specific alternative. — Naming alternatives is your job here rather than the objector’s, and there is always at least one.

Improve: List what else happened in the same period in step 2, and check the calendar rather than relying on memory. Record the change in step 5.

Check again: At least one concurrent change is named.

Answers to revisit: other-causes-list, same-period, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your cohort comparison removes the mix of new and returning people. Does that make it a clean result?

- No. A cohort controls for who the people are and how long they have had, and does nothing about what was happening in the world that week.
- Yes, since the two groups are now comparable.
- Yes, provided both cohorts are large enough.

<details>
<summary>After your attempt</summary>

No. A cohort controls for who the people are and how long they have had, and does nothing about what was happening in the world that week. — The promotion and the festival affect one cohort’s calendar weeks and not the other’s. The controls list is short and the does-not list is where the strongest explanations sit.

Yes, since the two groups are now comparable. — Comparable in composition. They lived through different weeks, and the weeks are what changed.

Yes, provided both cohorts are large enough. — Size addresses noise rather than confounding.

Improve: Write the does-not-control list in step 4 before the controls-for list. Record the change in step 5.

Check again: Your does-not list is longer than your controls list.

Answers to revisit: controls-for, does-not-control, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your synthetic cohort chart shows a clear difference. What must accompany it?

- The synthetic label on the chart, and the explanation you cannot rule out beside the conclusion.
- The cohort definition, so it can be reproduced.
- Nothing, since the method is sound.

<details>
<summary>After your attempt</summary>

The synthetic label on the chart, and the explanation you cannot rule out beside the conclusion. — The chart will travel without its caption, and the exercise demonstrates the method rather than a result. Both sentences belong in the picture rather than in the notes.

The cohort definition, so it can be reproduced. — Necessary and not sufficient. A reproducible chart of invented numbers is still invented.

Nothing, since the method is sound. — The method is the thing being practised. The numbers are made up and the chart does not say so unless you make it.

Improve: Put the synthetic label on the chart itself and name the unresolvable explanation in step 5. Record the change.

Check again: A screenshot of the chart alone still says the numbers are invented.

Answers to revisit: cannot-rule-out, synthetic-note, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

One explanation you cannot rule out named, and the synthetic label placed where it travels.

- Name the explanation you cannot rule out.
- Save the chart, the cohort and the limitations.

**Start here:** Take the strongest thing from your does-not-control list and name it plainly.

**Enough:** The sentence would stop somebody quoting your cohort as proof.

**What you cannot rule out:** The competing explanation that survives your best comparison. Naming it is usually the most useful sentence in the analysis.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### The one explanation you cannot rule out, named

Section: practice. Stable action: write-cannot-rule-out.

Write your answer for “The one explanation you cannot rule out, named”. Use the task instructions below to decide what to include.

**Answer:** The one explanation you cannot rule out, named




### Where the synthetic label appears

Section: practice. Stable action: write-synthetic-note.

Write your answer for “Where the synthetic label appears”. Use the task instructions below to decide what to include.

**Answer:** Where the synthetic label appears




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson presents all of this to somebody without misleading them.


<details>
<summary>Optional hints and reference material</summary>

- Write everything that happened in that period that could affect the number, before writing any conclusion.
- Split by arrival week and give each group the same follow-up window.

- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Interpreting performance data over time and the caution it requires. Purpose: Supports reading movement as multi-causal rather than attributable. Free reading, no account. Verified 2026-09-06. Written for services with real longitudinal data; your counts are synthetic and must be labelled. Fallback: R07.
- R37: [NN/g: confidence intervals and margins of error](https://www.nngroup.com/articles/confidence-interval/) — How sample size affects the reliability of a difference. Purpose: Prevents reading a small cohort difference as a real effect. Free reading, no account. Verified 2026-09-06. No formulas; use a published one and show inputs if you quantify anything. Fallback: R45.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Non-design explanations are listed for the movement**

Adequate evidence: A list of concurrent causes covering seasonality, promotion and external events.

0 — Change attributed to the design.

1 — One or two alternatives noted.

2 — A list covering the usual categories.

3 — As adequate, and one alternative is judged more likely than the design change.

Repair: Write everything that happened in that period that could affect the number, before writing any conclusion. Recheck: The explanation list.

**A cohort comparison replaces the period comparison**

Adequate evidence: Groups defined by arrival period and followed for equal durations.

0 — Period totals compared.

1 — Cohorts defined but followed for unequal periods.

2 — Equal-length follow-up for defined cohorts.

3 — As adequate, and new and returning people are separated explicitly.

Repair: Split by arrival week and give each group the same follow-up window. Recheck: The cohort comparison.

**What the cohort controls for is stated**

Adequate evidence: A written statement of what the method removes and what it leaves.

0 — Not stated.

1 — Controls claimed without limits.

2 — Both stated plainly.

3 — As adequate, and it names which uncontrolled factor would most change the reading.

Repair: Write one sentence on what changed between groups other than the design. Recheck: The controls statement.

**An unrulable-out explanation is named**

Adequate evidence: One alternative explicitly named as unresolvable with this data.

0 — None named.

1 — Named vaguely.

2 — Named specifically with why it cannot be separated.

3 — As adequate, and the write-up says what data would separate it.

Repair: Choose the strongest alternative and write why your data cannot rule it out. Recheck: The named explanation.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson presents all of this to somebody without misleading them.

**Review criteria:**

- Non-design explanations are listed for the movement
- A cohort comparison replaces the period comparison
- What the cohort controls for is stated
- An unrulable-out explanation is named

<details>
<summary>Reading, video and deeper explanation</summary>

- A metric is a sum of behaviour from many causes. Term dates, festivals, weather, a mention somewhere, a campaign, a competitor's outage — each moves numbers without anyone touching the design. Before attributing a change to your work, listing what else was happening is the minimum honest step, and it frequently produces a better explanation than the one you were hoping for.
- Mixing new and returning people is the commonest hidden confound in a product metric. New people are learning; returning people are executing. A change that helps beginners and slows experts can leave the combined number flat, which is the shape most likely to be reported as no effect when in fact there were two.
- A cohort is the practical response: take the people who arrived in one week and follow them, then compare with the people who arrived in another. It does not control for everything, and it removes the largest and most common distortion, which is that the mix of people changed rather than their behaviour.
- The limitations paragraph is the part that matters most here. Even a cohort comparison at your scale cannot separate a design change from a concurrent campaign, and saying so is what keeps the analysis useful rather than persuasive.

[GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success).

</details>

## Lesson 9: Presenting numbers without misleading anyone

Stable ID: m15-l09-v1. Core.

The presentation is where careful analysis usually becomes an overclaim, because a clean chart is more persuasive than a caveat.

Bring: Your analysis and its limitations.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A presentation of at most three slides or one page
- Uncertainty shown in the chart itself
- A stated condition that would change the conclusion
- A note of what the audience remembered

### Start with a clear task

Section: learn. Stable action: welcome.

Present one analysis to a stakeholder in a page or three slides, with the uncertainty visible, and record which part they remembered afterwards.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Lead with the decision the analysis supports, not the method.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Put the uncertainty in the chart, not only in the notes.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Say what would change your conclusion.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Never show a number without its denominator and period.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Expect the chart to travel alone; design it to survive that.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The analysis was presented in three slides. First: the decision — fix the held-place message before touching payment, because that is where the evidence points. Second: the evidence, with the funnel chart labelled synthetic, the sample of the qualitative work stated on the slide, and the interval shown on the one rate that appeared. Third: what would change the conclusion — if duplicate payments did not fall over four weeks, the cause is elsewhere. Afterwards, the person remembered the decision and the phrase “two of three”, which was the intended pair; nobody quoted a percentage, because none was shown.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Write the decision first

Section: practice-plan. Stable action: step-1-brief.

The decision the analysis supports, in one sentence, placed before any method.

- State the decision the analysis supports in one sentence.
- Put it at the top, before any method.

**Start here:** Write the sentence you would say if you had ten seconds.

**Enough:** Somebody reading only that line would know what you want them to do.

**Leading with the decision:** Putting what you are asking for first. Method first makes the audience wait, and they decide what they think during the waiting.


### The decision this analysis supports, in one sentence

Section: practice-plan. Stable action: write-decision-sentence.

At the top, before any method. Somebody reading only this line should know what you are asking for.

**Answer:** The decision this analysis supports, in one sentence

At the top, before any method. Somebody reading only this line should know what you are asking for.

<details>
<summary>Example</summary>

Example (made up): fix the held-place message before touching payment, because that is where the evidence points.

</details>


### Build the chart honestly

Section: practice-plan. Stable action: step-2-brief.

A chart following the assigned conventions, with the sample, period, synthetic label and any interval on the chart itself.

- Follow the assigned chart conventions.
- Put the sample, period and any synthetic label on the chart.
- Show the interval where a rate appears.

**Start here:** Draw the chart, then add everything somebody would need if they saw only the picture.

**Enough:** A screenshot of the chart alone would not mislead anybody.

**On the chart:** Inside the picture, not in the caption or the notes. Charts get screenshotted and travel without anything around them.

**Interval on the chart:** The uncertainty drawn, usually as a range. It is the difference between a number and a measurement.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Presenting a tool-library analysis, and putting the caveats in the talking.

**What I showed:** One clean chart with a clear rise, and I explained carefully that the numbers were synthetic, the sample was three people, and a promotion had run in the same week.

**How it went:** Well. Everybody understood the caveats, asked good questions, and nobody was misled in the room.

**What happened three weeks later:** The chart appeared in somebody else’s summary, with a sentence underneath saying completions rose after the redesign. Not dishonestly: they had the picture and not the conversation.

**What the chart had said about itself:** Nothing. A clean axis, two bars and a title. Every limitation lived in a room that no longer existed.

**What I do now:** Synthetic in the title, the sample beside the bar, the period on the axis, and the promotion marked on the chart with a line. It is uglier and it survives being screenshotted.

**Wrong turn:** The wrong turn is explaining the caveats aloud, because the explanation lands and the room understands. The caveats stay in the room; the chart goes everywhere.

**Trade-off:** A chart carrying its own limitations is busier and less persuasive, which is the correct level of persuasive for what it shows.

**Unknown:** Still unknown: whether anybody reads the annotations. They at least give somebody quoting it the chance to notice, which a clean chart does not.


### What the chart shows, and how it follows the assigned conventions

Section: practice-plan. Stable action: write-chart-built.

Write your answer for “What the chart shows, and how it follows the assigned conventions”. Use the task instructions below to decide what to include.

**Answer:** What the chart shows, and how it follows the assigned conventions




### What appears on the chart itself: sample, period, synthetic label, interval

Section: practice-plan. Stable action: write-on-the-chart.

On the chart, not in the notes. The chart is what travels.

**Answer:** What appears on the chart itself: sample, period, synthetic label, interval

On the chart, not in the notes. The chart is what travels.


### Check: any number shown without its denominator and period

Section: practice-plan. Stable action: write-no-denominator.

Write your answer for “Check: any number shown without its denominator and period”. Use the task instructions below to decide what to include.

**Answer:** Check: any number shown without its denominator and period




### Write the change condition

Section: practice-plan. Stable action: step-3-brief.

A stated result that would change your conclusion, and when you would look.

- State what result would change your conclusion.
- Say when you would look.

**Start here:** Finish this sentence: “if, in four weeks, … then the cause is elsewhere”.

**Enough:** The condition could actually occur and you have said when you would look.

**Change condition:** What would make you say you were wrong. Including it is what separates an analysis from an argument.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Writing a change condition for a tool-library analysis, and writing one that could not happen.

**What I wrote:** “If the evidence changes, I will revisit this.” It sounded open-minded and it committed me to nothing at all.

**Why it is empty:** No particular evidence would trigger it, and no date says when anybody looks. It is a sentence that survives every outcome.

**What I nearly wrote instead:** “If duplicate payments do not fall substantially.” Better, and substantially is doing the same work as the first version: nobody can say afterwards whether it happened.

**What it became:** “If duplicate payments in the provider’s records are not lower in the month after shipping than in the month before, the cause is elsewhere and the work moves to the payment confirmation.”

**What that version does:** It names a source, a period and a next step. Somebody can hold me to it, which is the whole point of writing one.

**Wrong turn:** The wrong turn is writing a condition that cannot fail, because it keeps your options open and sounds properly scientific. A condition nothing could satisfy is not a commitment.

**Trade-off:** A real condition means you may have to say in four weeks that your work did not help, in front of the people who approved it.

**Unknown:** Still unknown: whether a month is long enough, and whether the records capture every duplicate. The earlier contradiction suggested they may not, and the condition is stated in terms of what the records show rather than what happens.


### The result that would change your conclusion, and when you would look

Section: practice-plan. Stable action: write-change-condition.

Write your answer for “The result that would change your conclusion, and when you would look”. Use the task instructions below to decide what to include.

**Answer:** The result that would change your conclusion, and when you would look




### Present it

Section: practice-plan. Stable action: step-4-brief.

The analysis presented to somebody, or rehearsed and labelled, with what they asked.

- Present to someone who was not involved.
- Do not narrate the caveats; let the material carry them.

**Start here:** Present it without apologising for the sample size; the slide already says it.

**Enough:** Their questions are written down in their own words.

**Rehearsal:** Presenting to somebody who is not going to decide anything. It tests the presentation and it is labelled as a rehearsal.

**Their questions:** The best evidence about what the presentation left unclear. Write them down rather than answering and forgetting.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six things that might appear on a slide about a made up tool-library analysis. For each one, decide whether it should be there.

Fix the held-place message before touching payment.

- belongs on the slide
- belongs in the notes
- should not be shown at all

<details>
<summary>After your attempt</summary>

belongs on the slide — The decision goes first and largest. Somebody who reads only one line should read this one.

belongs in the notes — Notes are for things that support the decision, not for the decision.

should not be shown at all — It is the point of the presentation.

Now check your own slides: everything that would change how somebody reads the chart should be on it.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six things that might appear on a slide about a made up tool-library analysis. For each one, decide whether it should be there.

Two of the three people we watched could not tell their place was held.

- belongs on the slide
- belongs in the notes
- should not be shown at all

<details>
<summary>After your attempt</summary>

belongs on the slide — The count and the sample travel together, which is what stops it becoming 67 per cent in somebody else’s summary.

belongs in the notes — In the notes it separates from the claim immediately.

should not be shown at all — It is the qualitative half of the evidence.

Now check your own slides: everything that would change how somebody reads the chart should be on it.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six things that might appear on a slide about a made up tool-library analysis. For each one, decide whether it should be there.

The word synthetic in the chart title.

- belongs on the slide
- belongs in the notes
- should not be shown at all

<details>
<summary>After your attempt</summary>

belongs on the slide — In the title, so it survives the screenshot. This is the single most important piece of labelling in the module.

belongs in the notes — The notes do not travel with the image.

should not be shown at all — Hiding it would be the failure the whole module is about.

Now check your own slides: everything that would change how somebody reads the chart should be on it.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six things that might appear on a slide about a made up tool-library analysis. For each one, decide whether it should be there.

The formula used to compute the interval, with its inputs.

- belongs on the slide
- belongs in the notes
- should not be shown at all

<details>
<summary>After your attempt</summary>

belongs on the slide — It is checkable detail rather than something the audience needs while deciding.

belongs in the notes — Available to anybody who wants to verify, and out of the way of the decision.

should not be shown at all — It has to be available somewhere, or the interval cannot be checked.

Now check your own slides: everything that would change how somebody reads the chart should be on it.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six things that might appear on a slide about a made up tool-library analysis. For each one, decide whether it should be there.

A headline reading 67 per cent of participants.

- belongs on the slide
- belongs in the notes
- should not be shown at all

<details>
<summary>After your attempt</summary>

belongs on the slide — Sixty-seven per cent of three people is two people, and the percentage is the part that gets quoted.

belongs in the notes — Anywhere it appears it can be lifted out.

should not be shown at all — The earlier lesson settled this: at this sample the rate is arithmetic dressed as a measurement.

Now check your own slides: everything that would change how somebody reads the chart should be on it.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six things that might appear on a slide about a made up tool-library analysis. For each one, decide whether it should be there.

A marked line on the chart showing when the provider’s promotion ran.

- belongs on the slide
- belongs in the notes
- should not be shown at all

<details>
<summary>After your attempt</summary>

belongs on the slide — It is the strongest competing explanation, and on the chart it travels with the picture that would otherwise imply your change caused the rise.

belongs in the notes — A confound in the notes is a confound nobody sees.

should not be shown at all — Leaving it off is what makes the chart misleading.

Now check your own slides: everything that would change how somebody reads the chart should be on it.

</details>


### Who you presented it to, or how you rehearsed it

Section: practice-plan. Stable action: write-presented-to.

No stakeholder available: present it to anybody who will listen for five minutes, and label it a rehearsal.

**Answer:** Who you presented it to, or how you rehearsed it

No stakeholder available: present it to anybody who will listen for five minutes, and label it a rehearsal.


### What they asked

Section: practice-plan. Stable action: write-questions-asked.

Write your answer for “What they asked”. Use the task instructions below to decide what to include.

**Answer:** What they asked




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You explained all the caveats when you presented it. Is that enough?

- No. The caveats stayed in the room and the chart went everywhere, so anything that matters belongs in the picture.
- Yes, since the audience understood them at the time.
- Yes, if the caveats are also in the notes.

<details>
<summary>After your attempt</summary>

No. The caveats stayed in the room and the chart went everywhere, so anything that matters belongs in the picture. — Three weeks later the chart appears in somebody else’s summary with a confident sentence under it. They had the picture and not the conversation, and the picture said nothing about itself.

Yes, since the audience understood them at the time. — They did. The problem is everybody who sees the chart afterwards.

Yes, if the caveats are also in the notes. — Notes do not travel with a screenshot either.

Improve: Move the sample, the period, the synthetic label and any confound onto the chart itself in step 2. Record the change in step 5.

Check again: A screenshot of your chart alone would not mislead anybody.

Answers to revisit: chart-built, on-the-chart, no-denominator, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Where should the decision go in a three-slide presentation?

- First, before any method, in one sentence.
- Last, after the evidence has been laid out.
- Second, after establishing the method’s credibility.

<details>
<summary>After your attempt</summary>

First, before any method, in one sentence. — Method first makes the audience wait, and they form a view during the waiting. Leading with the decision means everything after it is read as support for something specific.

Last, after the evidence has been laid out. — By then people have decided. The evidence has been read as a general report rather than as an argument for anything.

Second, after establishing the method’s credibility. — Credibility comes from the evidence being honest, not from it arriving first.

Improve: Put the decision sentence at the top in step 1, before anything about method. Record the change in step 5.

Check again: Somebody reading only your first line knows what you are asking for.

Answers to revisit: decision-sentence, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your audience remembered a figure more confidently than your evidence supports. What does that tell you?

- That the presentation let it travel that way, and the fix is in the slide rather than in a correction.
- That the audience was not listening carefully.
- That you should send a written correction.

<details>
<summary>After your attempt</summary>

That the presentation let it travel that way, and the fix is in the slide rather than in a correction. — What is remembered is what will be repeated. If a number was remembered without its sample, the number and the sample were not close enough together on the slide.

That the audience was not listening carefully. — Audiences remember two things. Which two is decided by the design of the slide.

That you should send a written correction. — Worth doing and it does not reach everybody the chart already reached.

Improve: Change the slide so the figure cannot be separated from its sample, in step 2. Record the change in step 5.

Check again: Every number on your slide carries its denominator and period beside it.

Answers to revisit: chart-built, on-the-chart, no-denominator, improvement-made

</details>


### Check what survived

Section: practice. Stable action: step-5-brief.

What the audience remembered afterwards, and anything remembered more confidently than the evidence supports.

- Ask afterwards what they took away.
- Record any misreading and fix the material rather than explaining again.

**Start here:** Ask a day later what they took from it, and write their words rather than a summary.

**Enough:** You recorded what they said, including the parts that overstated your evidence.

**What is remembered:** What will be repeated. It is the only measure of whether the presentation worked, and it is usually two things.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### What they remembered afterwards, in their words

Section: practice. Stable action: write-remembered.

Ask a day later if you can. What is remembered is what will be repeated.

**Answer:** What they remembered afterwards, in their words

Ask a day later if you can. What is remembered is what will be repeated.


### Anything remembered more confidently than your evidence supports

Section: practice. Stable action: write-travelled-wrong.

Write your answer for “Anything remembered more confidently than your evidence supports”. Use the task instructions below to decide what to include.

**Answer:** Anything remembered more confidently than your evidence supports




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson asks when measuring is the wrong thing to do at all.


<details>
<summary>Optional hints and reference material</summary>

- Move your recommendation to the top and cut everything before it.
- Add the sample and period into the chart's subtitle, where a screenshot keeps them.

- R63: [UK Analysis Function: data visualisation charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/) — Axes, direct labelling, colour contrast, alternative text and publishing the data. Purpose: Supplies the conventions that keep the presented chart honest. Free reading, no account. Verified 2026-09-06; published 19 May 2022. Excludes interactive dashboards; the alternative-text requirement applies to your slides too. Fallback: R29.
- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Reporting performance honestly. Purpose: Frames the presentation as accountability rather than persuasion. Free reading, no account. Verified 2026-09-06. Government publishing context; the discipline transfers, the obligation does not. Fallback: R07.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The decision comes first and fits a sentence**

Adequate evidence: A one-sentence decision at the start, before any method.

0 — Method first.

1 — Decision present but late.

2 — Decision first, in one sentence.

3 — As adequate, and it names who has to act.

Repair: Move your recommendation to the top and cut everything before it. Recheck: The opening.

**Sample, period and uncertainty are on the chart**

Adequate evidence: A chart carrying its own sample, period, synthetic label and interval where relevant.

0 — A bare chart.

1 — Some context in the notes.

2 — All context on the image itself.

3 — As adequate, and the chart follows the assigned axis and labelling conventions.

Repair: Add the sample and period into the chart's subtitle, where a screenshot keeps them. Recheck: The chart.

**A condition that would change the conclusion is stated**

Adequate evidence: A written condition with a time to look.

0 — No condition.

1 — A condition without a period.

2 — Both stated.

3 — As adequate, and the condition is one that could realistically occur.

Repair: Write what result would make you revise this, and when you would check. Recheck: The change condition.

**What the audience remembered was checked and acted on**

Adequate evidence: A record of what they took away and a change to the material where it misled.

0 — Not checked.

1 — Checked without acting.

2 — Checked and the material corrected.

3 — As adequate, and a misreading is traced to a specific presentation choice.

Repair: Ask someone what they took from it a day later, and fix whatever they got wrong. Recheck: The takeaway record.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson asks when measuring is the wrong thing to do at all.

**Review criteria:**

- The decision comes first and fits a sentence
- Sample, period and uncertainty are on the chart
- A condition that would change the conclusion is stated
- What the audience remembered was checked and acted on

<details>
<summary>Reading, video and deeper explanation</summary>

- A presentation is a design problem with an honesty constraint. The decision goes first because that is what the audience needs; the method goes last because it explains how much weight the decision can bear. Reversing them produces the familiar deck where the recommendation appears on slide fourteen and is remembered without its conditions.
- Uncertainty must be visible in the object people look at. An interval drawn on the chart, a sample size in the subtitle, a note that counts are synthetic — all of these survive a screenshot. A caveat spoken aloud or written in a footnote does not, and the screenshot is what gets forwarded.
- Saying what would change your conclusion is the strongest available signal that the analysis is honest. It also protects you: when the number moves next quarter, you have already written what that would mean rather than defending a position you took from weaker evidence.
- Assume the chart travels alone. It will be pasted into a message, shown in another meeting, and remembered as a fact. Everything the reader needs to interpret it correctly — denominator, period, sample, synthetic label — has to be on the image itself.

[UK Analysis Function: data visualisation charts](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/).

</details>

## Lesson 10: When not to measure

Stable ID: m15-l10-v1. Core.

Measurement is expensive and slow. Some decisions are cheaper to make and reverse than to measure, and knowing which is a professional skill.

Bring: Your metric tree and current decisions.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Two decisions identified as not worth measuring, with reasoning
- The cost of measuring compared with the cost of being wrong
- What you will do instead, including how you would notice a mistake
- One measurement refused on ethical grounds, with the reason

### Start with a clear task

Section: learn. Stable action: welcome.

Identify two decisions in your work that should not wait for data, and write what you would do instead and why that is defensible.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Compare the cost of measuring with the cost of being wrong.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Reversible, low-cost decisions rarely justify measurement.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Ethical limits exist: some things should not be measured on people.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Some questions are answerable by asking three people this afternoon.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Waiting for data is a decision with its own cost.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Two decisions were identified. First: the wording of the held-place message. Cheap to change, cheap to reverse, no traffic to test it with — the decision was to write the clearest version, ship it, and ask three people the following week. Second: whether to shorten the booking form by removing a field. This affects data the provider relies on, so removal is not cheaply reversible; the decision was to ask the provider what the field is used for before touching it. One measurement was refused outright: a proposal to test which cancellation flow produced fewer cancellations, which would have been a test of how well the flow obstructs people.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### List open decisions

Section: practice-plan. Stable action: step-1-brief.

Decisions currently waiting for evidence, each marked for how reversible it is.

- List decisions currently waiting for evidence.
- For each, note how reversible it is.

**Start here:** List what is currently blocked, then ask of each how hard it would be to undo.

**Enough:** Every decision has a reversibility judgement with a reason.

**Reversible decision:** One you could undo next week at no cost to anybody. Most wording and layout decisions are; anything touching data other people rely on usually is not.

**Waiting for data:** A decision with its own cost: the current problem continues while everybody feels rigorous.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Judging how reversible a tool-library decision is, and judging it from my own side.

**The decision:** Removing a field from the booking form. From where I sat it was one of the most reversible things imaginable: five minutes to put back.

**What I meant by reversible:** Easy for me to undo. That is the version of the question everybody answers, because it is the one you can see.

**What the other side of it was:** The provider used that field to plan which branch would need staffing on Saturdays. Three weeks without it and the rota is built on guesswork, and the bookings made in those weeks are gone.

**What reversible really asks:** Whether the consequences can be undone, not whether the change can. Putting the field back does not recover three weeks of missing information.

**What I did:** Moved it to the measure-first list, and the measurement was one conversation with the provider about what the field is for.

**Wrong turn:** The wrong turn is judging reversibility by how easy the change is to undo in your own file. What matters is whether the effects can be undone, and those usually land on somebody you have not asked.

**Trade-off:** Asking before changing means slower decisions, and sometimes the answer is that nobody uses the field and the conversation was unnecessary.

**Unknown:** Still unknown: how many other fields are quietly depended on. One conversation found one, and the same question would probably find more.


### Decisions currently waiting for evidence

Section: practice-plan. Stable action: write-open-decisions.

Write your answer for “Decisions currently waiting for evidence”. Use the task instructions below to decide what to include.

**Answer:** Decisions currently waiting for evidence




### For each: how reversible it is, and how you know

Section: practice-plan. Stable action: write-reversibility.

Reversible means you could undo it next week without cost to anybody. A wording change usually is; removing a field somebody depends on usually is not.

**Answer:** For each: how reversible it is, and how you know

Reversible means you could undo it next week without cost to anybody. A wording change usually is; removing a field somebody depends on usually is not.


### Compare the costs

Section: practice-plan. Stable action: step-2-brief.

For each decision, the cost of measuring and the cost of being wrong, including how long an error would persist.

- Estimate the cost of measuring: time, traffic, delay.
- Estimate the cost of being wrong, including how long the error would persist.

**Start here:** For each decision, write how long the error would last before anybody could notice it.

**Enough:** Both costs are written as time or money rather than as feelings about risk.

**Cost of measuring:** Time, traffic, delay and the work of running it. At small scale the delay is usually the largest part.

**How long the error persists:** The multiplier on being wrong. A mistake noticed in a week costs a week; one nobody can notice costs until somebody complains.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Deciding the wording of a tool-library message, and waiting to be sure.

**What we did:** Held the wording decision until we could test it, because guessing at wording felt unrigorous and testing is what a careful team does.

**What testing would have needed:** Traffic we do not have. The earlier calculation put a detectable difference months away, so the honest cost of measuring was several months of delay.

**What the delay actually cost:** Three months of the existing message, which we already had reason to think was confusing people into paying twice. The current problem continued while we felt careful.

**What the cost of being wrong was:** A worse sentence, visible on one screen, changeable in five minutes, noticeable by asking three people. A week of a slightly worse message, at most.

**What we should have done:** Written the clearest version, shipped it, and asked three people the following week. The decision is cheaper to make and reverse than to measure, which is the whole test.

**Wrong turn:** The wrong turn is treating waiting as the cautious option, because deciding without data feels like guessing. Waiting is a decision too, and its cost is that the current version keeps running.

**Trade-off:** Deciding without measurement means occasionally shipping something worse, and you will not know which times those were.

**Unknown:** Still unknown: whether the new wording is better. Three conversations next week will say what people think it means, which is not the same as knowing it reduced anything.


### For each: the cost of measuring, in time, traffic and delay

Section: practice-plan. Stable action: write-cost-of-measuring.

Write your answer for “For each: the cost of measuring, in time, traffic and delay”. Use the task instructions below to decide what to include.

**Answer:** For each: the cost of measuring, in time, traffic and delay




### For each: the cost of being wrong, including how long the error would persist

Section: practice-plan. Stable action: write-cost-of-wrong.

A wrong wording persists until somebody notices. A wrong removal persists until somebody complains, which may be never.

**Answer:** For each: the cost of being wrong, including how long the error would persist

A wrong wording persists until somebody notices. A wrong removal persists until somebody complains, which may be never.


### Decide and plan the alternative

Section: practice-plan. Stable action: step-3-brief.

Two decisions chosen to make without measuring, with what you will do instead and how you would notice a mistake.

- Choose two decisions to make without measurement.
- Write what you will do instead and how you would notice a mistake.

**Start here:** Pick the two where the measurement is expensive and the mistake is cheap.

**Enough:** Both have a way you would find out you were wrong.

**Deciding without data:** Choosing on reasoning, shipping, and arranging to find out. It is appropriate when the decision is cheap to reverse and the measurement is expensive.

**Noticing a mistake:** The arrangement that would tell you. Without it, deciding quickly becomes deciding blindly, which is a different thing.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six decisions at a made up tool library. For each one, decide what the right approach is.

The exact wording of the held-place message. Changeable in five minutes.

- decide now and watch
- measure first
- do not measure this at all

<details>
<summary>After your attempt</summary>

decide now and watch — Cheap to change, cheap to reverse, and no traffic to test it with. Write the clearest version, ship it, and ask three people next week.

measure first — Measuring costs months of delay to settle a five-minute decision.

do not measure this at all — Asking three people afterwards is worth doing; it is the waiting beforehand that is wrong.

Now choose your own two, and write what you will do instead of measuring.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six decisions at a made up tool library. For each one, decide what the right approach is.

Removing a field from the booking form. The provider may be using the data for something.

- decide now and watch
- measure first
- do not measure this at all

<details>
<summary>After your attempt</summary>

decide now and watch — Removing data other people depend on is not cheaply reversible, and the mistake may go unnoticed for months.

measure first — Find out what it is used for before touching it. The measurement here is one conversation with the provider rather than a study.

do not measure this at all — There is nothing objectionable about finding out what a field is for.

Now choose your own two, and write what you will do instead of measuring.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six decisions at a made up tool library. For each one, decide what the right approach is.

Testing which cancellation flow produces fewer cancellations.

- decide now and watch
- measure first
- do not measure this at all

<details>
<summary>After your attempt</summary>

decide now and watch — Deciding it at all accepts the framing that fewer cancellations is the goal.

measure first — A well-run test would answer it precisely, and what it would measure is how effectively the flow obstructs people who want to leave.

do not measure this at all — The test optimises for something nobody should be optimising for. Refusing it, with the reason, is the answer.

Now choose your own two, and write what you will do instead of measuring.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six decisions at a made up tool library. For each one, decide what the right approach is.

Which of two shades the primary button should be, both of which pass contrast.

- decide now and watch
- measure first
- do not measure this at all

<details>
<summary>After your attempt</summary>

decide now and watch — Cheap, reversible and almost certainly inconsequential. Choose one and spend the attention elsewhere.

measure first — This is the classic example of a measurement whose cost exceeds any plausible value of the answer.

do not measure this at all — There is nothing wrong with measuring it; it is simply not worth it.

Now choose your own two, and write what you will do instead of measuring.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six decisions at a made up tool library. For each one, decide what the right approach is.

Raising the membership fee by ten per cent.

- decide now and watch
- measure first
- do not measure this at all

<details>
<summary>After your attempt</summary>

decide now and watch — Reversing a price rise is expensive and public, and the people who left because of it do not come back.

measure first — Not necessarily a test: asking members, and looking at what happened when the fee last changed, are both measurements in the useful sense.

do not measure this at all — It is an ordinary business decision that benefits from evidence.

Now choose your own two, and write what you will do instead of measuring.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six decisions at a made up tool library. For each one, decide what the right approach is.

Recording how long each named member takes to return tools, to identify unreliable people.

- decide now and watch
- measure first
- do not measure this at all

<details>
<summary>After your attempt</summary>

decide now and watch — Nothing about it is a design decision to be shipped and watched.

measure first — It is entirely measurable, which is what makes the refusal a judgement rather than a limitation.

do not measure this at all — Building a per-person reliability record changes what the library is. The refusal belongs in writing, with the reason.

Now choose your own two, and write what you will do instead of measuring.

</details>


### The two you will decide without measuring, and why

Section: practice-plan. Stable action: write-two-decisions.

Write your answer for “The two you will decide without measuring, and why”. Use the task instructions below to decide what to include.

**Answer:** The two you will decide without measuring, and why




### What you will do instead, including how you would notice a mistake

Section: practice-plan. Stable action: write-instead.

Write your answer for “What you will do instead, including how you would notice a mistake”. Use the task instructions below to decide what to include.

**Answer:** What you will do instead, including how you would notice a mistake



<details>
<summary>Example</summary>

Example (made up): write the clearest version, ship it, and ask three people next week what they thought it meant.

</details>


### Find the refusal

Section: practice-plan. Stable action: step-4-brief.

One measurement that should not be run at all, with the reason and what you would say if asked.

- Identify a measurement that should not be run at all.
- Write why, and what you would say if asked to run it.

**Start here:** Look for a measurement whose answer would be used to make something worse for people.

**Enough:** Your reply offers something else rather than only refusing.

**An ethical refusal:** Declining to measure something because the measurement itself, or what it would optimise for, is wrong. It is a separate question from cost.

**What you would say:** The sentence prepared in advance. Under pressure, the objection has to be available rather than constructed.


### A measurement that should not be run at all, and why

Section: practice-plan. Stable action: write-refused-measurement.

Some tests optimise for something nobody should be optimising for. A test of which cancellation flow produces fewer cancellations is a test of how well it obstructs people.

**Answer:** A measurement that should not be run at all, and why

Some tests optimise for something nobody should be optimising for. A test of which cancellation flow produces fewer cancellations is a test of how well it obstructs people.


### What you would say if asked to run it

Section: practice-plan. Stable action: write-what-you-would-say.

Write your answer for “What you would say if asked to run it”. Use the task instructions below to decide what to include.

**Answer:** What you would say if asked to run it




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Should you be data-driven?

- Data-informed decisions are good; waiting for data on decisions that are cheap to reverse is expensive theatre.
- Yes, decisions should rest on evidence wherever possible.
- No, experience is usually a better guide.

<details>
<summary>After your attempt</summary>

Data-informed decisions are good; waiting for data on decisions that are cheap to reverse is expensive theatre. — The current problem continues while everybody feels rigorous. Comparing the cost of measuring with the cost of being wrong is the actual skill.

Yes, decisions should rest on evidence wherever possible. — Wherever possible includes cases where the evidence costs months and the decision costs five minutes to undo.

No, experience is usually a better guide. — That is the opposite error. The judgement is about which decisions are worth the cost.

Improve: Compare both costs for every open decision in step 2, in time rather than in feelings. Record the change in step 5.

Check again: Each decision has two costs written as quantities.

Answers to revisit: cost-of-measuring, cost-of-wrong, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You decide the message wording without measuring. What must accompany that?

- A way you would notice you were wrong, such as asking three people the following week.
- Nothing, since the decision is reversible.
- A note that it was not tested.

<details>
<summary>After your attempt</summary>

A way you would notice you were wrong, such as asking three people the following week. — Without it, deciding quickly becomes deciding blindly. The arrangement to find out is what makes the speed defensible.

Nothing, since the decision is reversible. — Reversible only helps if somebody notices it needs reversing.

A note that it was not tested. — Honest and insufficient. A note does not tell you anything later.

Improve: Write how you would notice a mistake for both decisions in step 3. Record the change in step 5.

Check again: Both decisions have something arranged that would tell you.

Answers to revisit: two-decisions, instead, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Somebody asks you to test which cancellation flow produces fewer cancellations. What is the objection?

- It would measure how effectively the flow obstructs people who want to leave, which is not something to optimise.
- The traffic is too low for a reliable result.
- Cancellation rate is a poor metric.

<details>
<summary>After your attempt</summary>

It would measure how effectively the flow obstructs people who want to leave, which is not something to optimise. — The test would work. That is what makes this a judgement rather than a limitation, and the reply should offer something else: measuring why people cancel, for instance.

The traffic is too low for a reliable result. — True here and beside the point. If traffic were ample the objection would be unchanged.

Cancellation rate is a poor metric. — It is a reasonable thing to know. What is wrong is optimising a flow against it.

Improve: Write what you would say in step 4, offering an alternative rather than only refusing. Record the change in step 5.

Check again: Your reply names something you would measure instead.

Answers to revisit: refused-measurement, what-you-would-say, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

The reasoning recorded so the decisions can be revisited, and the repair the Check questions asked for.

- Record the reasoning so the decisions can be revisited.
- Save the comparisons and the refusal.

**Start here:** Put the reasoning where the decision lives, not in a separate note.

**Enough:** Somebody reopening the decision would find why it was made as well as what was decided.

**Revisitable:** Written where the decision will be questioned again, with the reasoning rather than only the outcome.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### How the reasoning is recorded so the decisions can be revisited

Section: practice. Stable action: write-revisitable.

Write your answer for “How the reasoning is recorded so the decisions can be revisited”. Use the task instructions below to decide what to include.

**Answer:** How the reasoning is recorded so the decisions can be revisited




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson writes the plan you could actually start on Monday.


<details>
<summary>Optional hints and reference material</summary>

- List what you are waiting on and ask how hard each would be to undo.
- Write what a month of waiting costs in the current design's problems.

- R07: [GOV.UK: discovery phase](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) — Deciding what to do next under uncertainty and what a discovery is trying to establish. Purpose: Frames measurement as one option among several for reducing uncertainty. Free reading, no account. Verified 2026-09-06; published 18 November 2016. It prefers primary fieldwork and does not discuss experiment economics, which is this lesson's own. Fallback: R19.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The points on iterating and improving frequently and on making sure everyone can use the service. Purpose: Supports the ethical refusal with a stated standard rather than only a preference. Free reading, no account. Verified 2026-09-06. Government obligations; the ethical reasoning here is the course's own. Fallback: R07.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Two decisions are identified with reversibility assessed**

Adequate evidence: Two real decisions with a reversibility judgement each.

0 — No decisions identified.

1 — Decisions listed without reversibility.

2 — Two with reversibility assessed.

3 — As adequate, and one is deliberately kept for measurement because it is irreversible.

Repair: List what you are waiting on and ask how hard each would be to undo. Recheck: The decision list.

**Costs of measuring and of being wrong are both estimated**

Adequate evidence: Two estimates per decision, including the cost of delay.

0 — Neither estimated.

1 — One side estimated.

2 — Both, including delay.

3 — As adequate, and the delay cost is expressed in what continues to happen meanwhile.

Repair: Write what a month of waiting costs in the current design's problems. Recheck: The cost comparison.

**The alternative includes how a mistake would be noticed**

Adequate evidence: A plan for acting without measurement plus a signal that would reveal an error.

0 — Act-and-hope.

1 — An alternative without a detection signal.

2 — Both, with a time to check.

3 — As adequate, and the signal is something you could realistically observe.

Repair: For each decision write what you would see if it were wrong, and when you would look. Recheck: The alternative plans.

**One measurement is refused with a stated reason**

Adequate evidence: A refusal on ethical grounds with what you would say if asked.

0 — No refusal considered.

1 — A refusal without reasoning.

2 — Refusal with reasoning and a prepared response.

3 — As adequate, and the refusal names who the measurement would have served.

Repair: Ask which experiment you would be uncomfortable explaining to a participant, and write the refusal. Recheck: The refusal.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson writes the plan you could actually start on Monday.

**Review criteria:**

- Two decisions are identified with reversibility assessed
- Costs of measuring and of being wrong are both estimated
- The alternative includes how a mistake would be noticed
- One measurement is refused with a stated reason

<details>
<summary>Reading, video and deeper explanation</summary>

- The comparison is between two costs: what it would take to measure, and what being wrong would cost. A reversible wording change costs an hour to make and an hour to undo; measuring it properly costs weeks and traffic you do not have. Making it, watching, and reversing if needed is not sloppiness — it is the cheaper path with the same eventual accuracy.
- Irreversibility changes the calculation. A decision that is expensive to unmake — a pricing change, a data-collection choice, anything affecting people's money — justifies more evidence, because the cost of being wrong is high and the correction is slow.
- Some measurement is not acceptable regardless of cost. Testing which wording extracts more personal data, or which pattern makes cancellation hardest, are experiments with results — and running them is a choice about who you are working for. Recognising those and refusing them is part of this module.
- Delay has a cost that is rarely counted. Waiting a month for evidence means a month of the current design's problems continuing, and that cost belongs in the comparison alongside the risk of acting without data.

[GOV.UK: discovery phase](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works).

</details>

## Lesson 11: A measurement plan you could actually run

Stable ID: m15-l11-v1. Core.

A plan that assumes analytics you do not have is a wish. A plan built from counts, records and conversations is a thing you can start on Monday.

Bring: Your metric tree and instrumentation decisions.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Three measures obtainable with what you have
- A claim and a limit per measure
- A review date and an owner
- A list of questions the plan cannot answer

### Start with a clear task

Section: learn. Stable action: welcome.

Write a measurement plan for your project that uses only what you can obtain, states what each measure supports, and names the questions it leaves unanswered.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Build from what you can obtain: provider records, manual counts, conversations.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

State per measure what claim it supports and what it does not.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Set a review date, or the plan becomes a document.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Keep it small: three measures you collect beat ten you intend to.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Name the questions that stay unanswered.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The plan had three measures, each with a claim and a limit. Duplicate payments per hundred bookings, from the provider's records, monthly — supports a statement about payment confusion, not about its cause. Cancellations within 24 hours of booking, monthly — supports a statement about commitment confidence, not about satisfaction. Five conversations a quarter with recent bookers — supports mechanisms, not prevalence. Review date set. Unanswered: anything about people who never reached the site, anything about how the numbers compare with similar providers, and anything at population scale.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Inventory what exists

Section: practice-plan. Stable action: step-1-brief.

An inventory of records that already exist, plus what you could count by hand and who you could ask.

- List records the product or provider already keeps.
- List what you could count by hand and who you could ask.

**Start here:** Ask what the provider already keeps before thinking about what you would like to have.

**Enough:** Your inventory contains at least one source nobody would call analytics.

**Existing records:** What the organisation already keeps without calling it data: payment records, a booking book, a support inbox. It is usually the best source available.

**Counting by hand:** Going through a month of records with a pencil. It is slow, accurate and available today, and it is how most small organisations should start.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Inventorying what a tool library records, and asking the wrong question.

**What I asked:** “Do you have any analytics?” The answer was no, and I wrote down that there was no data available.

**What that question had meant to them:** Website statistics. It is what analytics means to somebody who does not work in software, and the answer was accurate.

**What I asked the second time:** “What do you write down, and where?” A different question entirely, and it took twenty minutes to answer.

**What came back:** Every payment in the provider’s dashboard. Every booking in a shared spreadsheet, with the date made and the date collected. Every complaint in one email folder. Eleven years of a paper ledger in a cupboard.

**What the plan was built from:** Two of those. None of it is analytics and all of it is data, and the first question had made it invisible.

**Wrong turn:** The wrong turn is asking whether they have data, because the word means software to you and statistics to them. Asking what they write down finds the records that have been there all along.

**Trade-off:** Records kept by hand are inconsistent, incomplete in places, and take an hour to count. They exist, which no analytics package does.

**Unknown:** Still unknown: how reliably the booking spreadsheet is filled in. Somebody types it and somebody sometimes forgets, and the plan says the measure is approximate rather than assuming otherwise.


### Records the product or the provider already keeps

Section: practice-plan. Stable action: write-existing-records.

Payment records, booking records, a support log, an email inbox, a paper ledger. Small organisations keep more than they realise.

**Answer:** Records the product or the provider already keeps

Payment records, booking records, a support log, an email inbox, a paper ledger. Small organisations keep more than they realise.


### What you could count by hand, and who you could ask

Section: practice-plan. Stable action: write-countable-askable.

Write your answer for “What you could count by hand, and who you could ask”. Use the task instructions below to decide what to include.

**Answer:** What you could count by hand, and who you could ask




### Choose three measures

Section: practice-plan. Stable action: step-2-brief.

Three measures, each answering a node in your tree, obtainable without new tooling.

- Choose three that answer nodes in your metric tree.
- Prefer measures you can obtain without new tooling.

**Start here:** Choose the measure you could produce this afternoon from an existing record.

**Enough:** Every measure names where the number comes from and how often it is produced.

**Obtainable:** Available from a record, a count or a conversation you could arrange this month. Anything needing new tooling is a plan for later.

**Small:** Three measures. Ten produce a document nobody maintains, and the first month of a plan is where most of them die.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Writing a measurement plan for a tool library, and writing one for a product that does not exist.

**What I wrote first:** Eleven measures: funnel conversion by step, time to first booking, return visitor rate, search success rate, and seven more. It looked like a proper plan.

**What every one of them needed:** Analytics the library does not have and is not going to buy. The plan was for a different organisation with a different budget.

**What it would have produced:** Nothing at all, for months, followed by a conversation about buying a tool, followed by more months.

**What I built the second plan from:** What the provider already keeps. Payment records, the booking book, and the library’s own email. Between them: duplicate payments, cancellations within a day, and five conversations a quarter.

**What that plan could do:** Start on Monday, with a pencil. It answers less than the eleven would have, and it is the only one of the two that produces a number this month.

**Wrong turn:** The wrong turn is writing the plan the metric tree deserves rather than the plan this organisation can run. A plan that assumes tooling you do not have is a wish with a review date on it.

**Trade-off:** Three hand-counted measures answer far less than a proper analytics setup would, and somebody will point out how crude they are.

**Unknown:** Still unknown: almost everything about people who never arrive. No plan built from a provider’s records can see them, and the unanswered list says so.


### Measure 1 · what it is, where it comes from, and how often

Section: practice-plan. Stable action: write-measure-1.

Write your answer for “Measure 1 · what it is, where it comes from, and how often”. Use the task instructions below to decide what to include.

**Answer:** Measure 1 · what it is, where it comes from, and how often



<details>
<summary>Example</summary>

Example (made up): duplicate payments per hundred bookings, from the payment provider’s records, monthly.

</details>


### Measure 2 · what it is, where it comes from, and how often

Section: practice-plan. Stable action: write-measure-2.

Write your answer for “Measure 2 · what it is, where it comes from, and how often”. Use the task instructions below to decide what to include.

**Answer:** Measure 2 · what it is, where it comes from, and how often




### Measure 3 · what it is, where it comes from, and how often

Section: practice-plan. Stable action: write-measure-3.

Write your answer for “Measure 3 · what it is, where it comes from, and how often”. Use the task instructions below to decide what to include.

**Answer:** Measure 3 · what it is, where it comes from, and how often




### Attach claims and limits

Section: practice-plan. Stable action: step-3-brief.

For each measure, the claim it supports and the claim it does not, with the source inside the statement.

- For each measure write what it supports and what it does not.
- Include the sample or source in the statement.

**Start here:** Write the limit before the claim; it is harder and it constrains the claim.

**Enough:** Every claim contains its own source, so it cannot be quoted without it.

**The claim it supports:** What you could honestly say from it. Writing it now stops it growing later.

**Source in the statement:** Putting where the number came from into the sentence itself, so the two cannot be separated when it is repeated.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six candidate measures for a made up tool library with no analytics. For each one, decide whether the plan can include it.

Duplicate payments per hundred bookings, from the payment provider’s records, monthly.

- obtainable today
- needs tooling you do not have
- obtainable and not worth it

<details>
<summary>After your attempt</summary>

obtainable today — The provider already records every payment. Counting duplicates is an hour with a spreadsheet each month.

needs tooling you do not have — Nothing new is required; the records exist because payments happened.

obtainable and not worth it — It is the closest thing to the outcome in the whole tree.

Now check your own three: each should be obtainable this month and worth the hour it costs.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six candidate measures for a made up tool library with no analytics. For each one, decide whether the plan can include it.

Conversion at each step of the booking funnel.

- obtainable today
- needs tooling you do not have
- obtainable and not worth it

<details>
<summary>After your attempt</summary>

obtainable today — Nothing records who reached which screen. The funnel you built was synthetic for exactly this reason.

needs tooling you do not have — It needs page-level instrumentation, which is a project rather than a measure.

obtainable and not worth it — It would be genuinely useful if it existed, which is what makes it a plan for later.

Now check your own three: each should be obtainable this month and worth the hour it costs.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six candidate measures for a made up tool library with no analytics. For each one, decide whether the plan can include it.

Cancellations within a day of booking, from the booking book, monthly.

- obtainable today
- needs tooling you do not have
- obtainable and not worth it

<details>
<summary>After your attempt</summary>

obtainable today — Both dates are already written down. It is a count somebody can do with a pencil.

needs tooling you do not have — The booking book is the tooling.

obtainable and not worth it — It speaks to confidence at the moment of booking, which is a node in the tree.

Now check your own three: each should be obtainable this month and worth the hour it costs.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six candidate measures for a made up tool library with no analytics. For each one, decide whether the plan can include it.

Five conversations a quarter with recent bookers.

- obtainable today
- needs tooling you do not have
- obtainable and not worth it

<details>
<summary>After your attempt</summary>

obtainable today — Five people, four times a year, arranged by email. It is the only source of mechanism in the plan.

needs tooling you do not have — It needs a kettle.

obtainable and not worth it — It answers the why questions nothing else in the plan can touch.

Now check your own three: each should be obtainable this month and worth the hour it costs.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six candidate measures for a made up tool library with no analytics. For each one, decide whether the plan can include it.

Average time on the tool detail page.

- obtainable today
- needs tooling you do not have
- obtainable and not worth it

<details>
<summary>After your attempt</summary>

obtainable today — It would need instrumentation as well, so it fails twice.

needs tooling you do not have — True, and the more important objection is that it was removed from the tree in the first lesson as unactionable.

obtainable and not worth it — Even handed to you free, no value of it would change what anybody does.

Now check your own three: each should be obtainable this month and worth the hour it costs.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six candidate measures for a made up tool library with no analytics. For each one, decide whether the plan can include it.

How the duplicate-payment rate compares with similar providers.

- obtainable today
- needs tooling you do not have
- obtainable and not worth it

<details>
<summary>After your attempt</summary>

obtainable today — Nobody publishes it, and definitions would differ even if they did.

needs tooling you do not have — It needs data that is not yours and a shared definition that does not exist. It belongs on the unanswered list.

obtainable and not worth it — It would be worth having; it is simply unavailable.

Now check your own three: each should be obtainable this month and worth the hour it costs.

</details>


### For each measure: the claim it supports and the claim it does not

Section: practice-plan. Stable action: write-claims-limits.

Write your answer for “For each measure: the claim it supports and the claim it does not”. Use the task instructions below to decide what to include.

**Answer:** For each measure: the claim it supports and the claim it does not



<details>
<summary>Example</summary>

Example (made up): supports a statement about payment confusion. Does not support a statement about why, or about people who never got that far.

</details>


### How the source or sample appears in the statement itself

Section: practice-plan. Stable action: write-source-in-statement.

Write your answer for “How the source or sample appears in the statement itself”. Use the task instructions below to decide what to include.

**Answer:** How the source or sample appears in the statement itself




### Set the review

Section: practice-plan. Stable action: step-4-brief.

A review date, an owner, and what would make you change or drop a measure.

- Set a date and an owner for reviewing the measures.
- Decide what would make you change or drop one.

**Start here:** Set the date three months out and write your own name against it.

**Enough:** The drop condition could actually be met.

**Review date:** A date, with a name. Without it a measurement plan becomes a document, and the measures stop being produced without anybody deciding.

**Dropping a measure:** Removing one nobody has used. It is maintenance, and a plan that only ever grows is one nobody maintains.


### The review date and the owner

Section: practice-plan. Stable action: write-review-date-owner.

Write your answer for “The review date and the owner”. Use the task instructions below to decide what to include.

**Answer:** The review date and the owner




### What would make you change or drop a measure

Section: practice-plan. Stable action: write-drop-condition.

A measure nobody has looked at twice is a measure to drop.

**Answer:** What would make you change or drop a measure

A measure nobody has looked at twice is a measure to drop.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Without analytics, can you measure anything?

- You can count what the organisation already records, count things by hand and ask people. What you cannot do is claim precision or scale.
- Not usefully, so the honest answer is to wait for tooling.
- Yes, and the results are as good as analytics would give.

<details>
<summary>After your attempt</summary>

You can count what the organisation already records, count things by hand and ask people. What you cannot do is claim precision or scale. — Payment records, a booking book and five conversations produce a plan that starts on Monday. Saying plainly what it cannot support is what makes the rest usable.

Not usefully, so the honest answer is to wait for tooling. — Waiting produces nothing for months and then a conversation about budget. The provider’s records are sitting there.

Yes, and the results are as good as analytics would give. — They are not. They are obtainable, which is a different and more useful property at this scale.

Improve: Replace any measure in step 2 that needs tooling with one from an existing record. Record the change in step 5.

Check again: Every measure could be produced this month.

Answers to revisit: measure-1, measure-2, measure-3, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your plan has eleven measures. Is that thorough?

- Three you will collect beat ten you intend to. A long plan is one nobody maintains past the first month.
- Yes, more measures give a fuller picture.
- Yes, provided they are all obtainable.

<details>
<summary>After your attempt</summary>

Three you will collect beat ten you intend to. A long plan is one nobody maintains past the first month. — Each measure costs time every period, for ever. Keeping it to three means the plan survives a busy month, which is when measurement is usually abandoned.

Yes, more measures give a fuller picture. — The first lesson dealt with this: more numbers give more to argue with rather than more understanding.

Yes, provided they are all obtainable. — Obtainable each month, by somebody, in the time available. Eleven rarely is.

Improve: Reduce step 2 to three measures and move the rest to the unanswered list or drop them. Record the change in step 5.

Check again: Your plan has three measures and a named owner.

Answers to revisit: measure-1, measure-2, measure-3, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

One of your measures has a claim written beside it but no limit. What is the risk?

- The claim grows. Written now, the limit travels with it; written later, it is a correction nobody reads.
- Not much, since the limits are obvious.
- It makes the plan harder to read.

<details>
<summary>After your attempt</summary>

The claim grows. Written now, the limit travels with it; written later, it is a correction nobody reads. — Duplicate payments from a provider’s records support a statement about payment confusion and not about its cause. Both sentences belong beside the measure from the start.

Not much, since the limits are obvious. — They are obvious to you this week. They are invisible to whoever quotes the number in six months.

It makes the plan harder to read. — A limit is one clause. The risk is about what the measure gets used to argue.

Improve: Write the limit beside every claim in step 3, and put the source inside the statement. Record the change in step 5.

Check again: Every measure carries a claim, a limit and a source.

Answers to revisit: claims-limits, source-in-statement, improvement-made

</details>


### Write the unanswered list

Section: practice. Stable action: step-5-brief.

A list of the questions this plan cannot answer, and the repair the Check questions asked for.

- List the questions this plan leaves open.
- Save the plan with its limits.

**Start here:** Start with everybody who never arrives; no record of yours can see them.

**Enough:** The list names specific questions rather than saying the plan is limited.

**Unanswered list:** What the plan leaves open. It is what stops the three measures being treated as the whole picture.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### The questions this plan leaves open

Section: practice. Stable action: write-unanswered-list.

Anything about people who never arrived, anything comparative, anything at population scale.

**Answer:** The questions this plan leaves open

Anything about people who never arrived, anything comparative, anything at population scale.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The last lesson of the module writes down what none of this can say.


<details>
<summary>Optional hints and reference material</summary>

- Replace any measure needing tooling with one you could collect this month.
- For each measure write the sentence it supports and the sentence it does not.

- R20: [GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success) — Choosing measures, collecting them and reviewing them. Purpose: Supplies the structure of a plan that is maintained rather than written once. Free reading, no account. Verified 2026-09-06. It assumes a service with real traffic and published data; scale the practice down to counts and conversations. Fallback: R07.
- R04: [GOV.UK: analyse a research session](https://www.gov.uk/service-manual/user-research/analyse-a-research-session) — Turning small evidence into findings. Purpose: Supports the conversational measures with a method for using them. Free reading, no account. Verified 2026-09-06. Written for research sessions; the discipline transfers to periodic conversations. Fallback: R08.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Measures are obtainable with existing records or effort**

Adequate evidence: Three measures with their source named and no new tooling assumed.

0 — Measures assume analytics you do not have.

1 — Mixed, with one unobtainable measure.

2 — All three obtainable with named sources.

3 — As adequate, and at least one comes from records the provider already keeps.

Repair: Replace any measure needing tooling with one you could collect this month. Recheck: The measure list.

**Each carries a claim and a limit**

Adequate evidence: A supported claim and an excluded claim per measure.

0 — Neither stated.

1 — Claims stated without limits.

2 — Both for every measure.

3 — As adequate, and the limits name the claim someone will try to make from it.

Repair: For each measure write the sentence it supports and the sentence it does not. Recheck: The claims and limits.

**A review date and owner exist**

Adequate evidence: A date, a person and a condition for changing a measure.

0 — No review.

1 — A date without an owner.

2 — Date, owner and change condition.

3 — As adequate, and the review is soon enough to correct a bad measure.

Repair: Set a date within three months and name who checks. Recheck: The review plan.

**Unanswered questions are listed**

Adequate evidence: A list of what the plan cannot answer, including scale and cause.

0 — Not listed.

1 — A general caveat.

2 — Specific unanswered questions listed.

3 — As adequate, and one names what it would take to answer it.

Repair: Write the questions people will ask that these three measures cannot address. Recheck: The unanswered list.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The last lesson of the module writes down what none of this can say.

**Review criteria:**

- Measures are obtainable with existing records or effort
- Each carries a claim and a limit
- A review date and owner exist
- Unanswered questions are listed

<details>
<summary>Reading, video and deeper explanation</summary>

- The plan has to be built from available material. A small provider has records: bookings, cancellations, refunds, support messages. You can count things by hand for a month. You can talk to five people. None of that is a dashboard, and together they answer more than most dashboards do, because each was chosen for a question.
- Each measure needs its claim attached. “Refund requests per hundred bookings, from the provider's records, monthly” supports a statement about refunds and nothing about satisfaction, and writing that down when you choose the measure prevents it being stretched later.
- Small plans get executed. Three measures collected consistently for three months are worth more than a plan of ten that lapses in week two, and the discipline of choosing three forces you to decide which questions actually matter.
- The unanswered list is the honest counterpart. State what this plan cannot tell you — anything about people who never arrive, anything about why, anything at population scale — so that when someone asks, the answer is a recorded limitation rather than an improvised estimate.

[GOV.UK: measuring success](https://www.gov.uk/service-manual/measuring-success).

</details>

## Lesson 12: What your numbers cannot say

Stable ID: m15-l12-v1. Core.

The pressure to overstate is real and usually polite. Rehearsing the honest answer is what makes it available when you need it.

Bring: Your funnel, cohort, plan and presentations.

Starting route: Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- A reusable limitations page covering all this module's work
- Categories separated: synthetic, small sample, unavailable
- A rehearsed reply to a request for a stronger claim
- A recorded temptation, named honestly

### Start with a clear task

Section: learn. Stable action: welcome.

Write the limitations page for all your quantitative work in this module, and rehearse defending one honest conclusion against pressure for a stronger one.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Collect every limitation into one page you can reuse.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Distinguish synthetic data, small samples and unavailable measures.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Prepare the sentence you will say when asked for a stronger claim.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Offer what you can support instead of what you cannot.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Record where you were tempted; that is where you will slip later.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The limitations page listed: all funnel figures synthetic and labelled; the survey at 22 responses through two groups; usability findings from three and then two participants; no analytics and no traffic, so no rate is reportable at population scale; the cohort exercise demonstrating method on synthetic data only. The rehearsed exchange: asked for the percentage improvement, the answer was “I cannot give you one honestly — what I have is that two of three participants could not tell their place was held, and duplicate payments in the provider's records over the next month would tell us whether the change helped. I can have that number in four weeks.” The temptation recorded: wanting to present the synthetic funnel without the label because it looked convincing.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time. Alternative route: Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Collect the limitations

Section: practice-plan. Stable action: step-1-brief.

Every caveat from this module gathered onto one page and grouped by kind.

- Gather every caveat from this module into one page.
- Group them by kind rather than by lesson.

**Start here:** Go back through the eleven lessons and copy out every caveat you wrote.

**Enough:** Nothing from the module is missing, including the parts you would rather not restate.

**Limitations page:** One reusable page saying what your quantitative work can and cannot support. Written once, it saves rewriting the same sentences in every document.

**Grouping by kind:** Synthetic, small-sample and unavailable are three different problems with three different answers. Grouped by lesson they look like a list of excuses.


### Every caveat from this module, gathered onto one page

Section: practice-plan. Stable action: write-all-limitations.

Go lesson by lesson. Each one produced at least one.

**Answer:** Every caveat from this module, gathered onto one page

Go lesson by lesson. Each one produced at least one.


### Grouped by kind rather than by lesson

Section: practice-plan. Stable action: write-grouped.

Write your answer for “Grouped by kind rather than by lesson”. Use the task instructions below to decide what to include.

**Answer:** Grouped by kind rather than by lesson




### Separate the categories

Section: practice-plan. Stable action: step-2-brief.

The three categories separated, each with what it can and cannot support.

- Mark what is synthetic, what is small-sample and what is unavailable.
- State what each category can and cannot support.

**Start here:** Put each caveat under one of the three headings before writing anything about what it supports.

**Enough:** The small-sample section reads as a list of things you can say.

**Synthetic:** Invented numbers. They can demonstrate a method and say nothing whatever about your product.

**Small sample:** Real people, too few for a rate. They support counts with their route, and mechanisms, and neither rates nor comparisons.

**Unavailable:** Not measured by anybody. It is different from measured and inconclusive, and the difference matters to whoever reads it.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Writing the limitations page for a tool-library project, and writing it as one list.

**What I wrote:** Fourteen bullet points, in the order the lessons came. Synthetic funnels next to a twenty-two person survey next to the absence of analytics.

**How it read:** As a list of apologies. Fourteen reasons not to believe anything, with no shape, and a reader would either skip it or discount the whole project.

**What was wrong with the order:** It mixed three completely different problems. Invented numbers support nothing about the product; a small sample supports real counts; an unmeasured thing is simply unknown.

**What grouping produced:** Three short sections with a heading each, saying what that kind of evidence can support. The synthetic section is a warning; the small-sample section is a list of things I can actually say.

**Why that is a better document:** It reads as a statement of what I know rather than a list of what I do not. The same fourteen facts, in a shape somebody can use.

**Wrong turn:** The wrong turn is listing limitations in the order you met them, because that is how they accumulated. Three kinds of limitation mixed together read as one long apology, and the useful half disappears into it.

**Trade-off:** Grouping takes half an hour and means deciding which category each caveat belongs in, and one or two genuinely straddle.

**Unknown:** Still unknown: whether anybody reads a limitations page at all. It at least exists to be pointed at when a claim starts growing.


### What is synthetic, and what synthetic work can support

Section: practice-plan. Stable action: write-synthetic-items.

It can support a claim about a method. It can support nothing at all about your product.

**Answer:** What is synthetic, and what synthetic work can support

It can support a claim about a method. It can support nothing at all about your product.


### What is small-sample, and what a small sample can support

Section: practice-plan. Stable action: write-small-sample-items.

Counts with their route stated. Mechanisms. Not rates, and not comparisons.

**Answer:** What is small-sample, and what a small sample can support

Counts with their route stated. Mechanisms. Not rates, and not comparisons.


### What is unavailable, and what that leaves unknown

Section: practice-plan. Stable action: write-unavailable-items.

Write your answer for “What is unavailable, and what that leaves unknown”. Use the task instructions below to decide what to include.

**Answer:** What is unavailable, and what that leaves unknown




### Rehearse the pressure

Section: practice-plan. Stable action: step-3-brief.

The expected request for a stronger claim, your reply offering what you can support, and a record of saying it aloud.

- Write the request you expect for a stronger claim.
- Write your reply, offering what you can support and what would be needed.
- Say it aloud, or with someone playing the requester.

**Start here:** Write the request in the words somebody would actually use, then write your answer to that.

**Enough:** Your reply offers two things: what you have, and what would produce more.

**The polite pressure:** Somebody reasonable asking for a percentage for a slide. It is not an attack and it is the moment most overclaims are made.

**Offering instead:** Answering with what you can support and what would be needed for more. A refusal with nothing attached sounds obstructive and usually loses.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six replies to a made up request for a percentage that the evidence cannot support. For each one, decide what it does.

I cannot give you one honestly. What I have is that two of three people we watched could not tell their place was held, and duplicate payments over the next month would tell us whether the change helped. I can have that in four weeks.

- honest and useful
- honest and unhelpful
- an overclaim

<details>
<summary>After your attempt</summary>

honest and useful — It refuses, offers what exists, and names what would produce more, with a date. Nobody leaves the conversation empty-handed.

honest and unhelpful — It gives two usable things and a timeline.

an overclaim — Every claim in it is bounded by its sample.

Now write your own reply, and check it offers something as well as declining something.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six replies to a made up request for a percentage that the evidence cannot support. For each one, decide what it does.

The data does not support that.

- honest and useful
- honest and unhelpful
- an overclaim

<details>
<summary>After your attempt</summary>

honest and useful — It is true and it hands back nothing at all.

honest and unhelpful — The person still needs something for the slide. A refusal with no alternative usually loses to somebody else’s worse number.

an overclaim — Nothing is being claimed.

Now write your own reply, and check it offers something as well as declining something.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six replies to a made up request for a percentage that the evidence cannot support. For each one, decide what it does.

Roughly two-thirds, though the sample is small.

- honest and useful
- honest and unhelpful
- an overclaim

<details>
<summary>After your attempt</summary>

honest and useful — The caveat is attached and will be dropped the moment it reaches a slide.

honest and unhelpful — It is helpful and it is not honest at three people.

an overclaim — Two-thirds of three is two people. The fraction survives into the summary and the sample does not.

Now write your own reply, and check it offers something as well as declining something.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six replies to a made up request for a percentage that the evidence cannot support. For each one, decide what it does.

I can get you a real number in four weeks from the payment records. For now, two of the three people we watched could not tell.

- honest and useful
- honest and unhelpful
- an overclaim

<details>
<summary>After your attempt</summary>

honest and useful — It leads with what is coming and gives something to use meanwhile, with the sample attached to it.

honest and unhelpful — It answers both the immediate need and the underlying one.

an overclaim — The count carries its denominator.

Now write your own reply, and check it offers something as well as declining something.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six replies to a made up request for a percentage that the evidence cannot support. For each one, decide what it does.

Directionally it is around 60 to 70 per cent.

- honest and useful
- honest and unhelpful
- an overclaim

<details>
<summary>After your attempt</summary>

honest and useful — Directionally is a word that makes an invented range sound considered.

honest and unhelpful — It is extremely helpful and it is fabricated.

an overclaim — A range invented to sound cautious is still a number that did not come from anywhere. It will be quoted without the first word.

Now write your own reply, and check it offers something as well as declining something.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six replies to a made up request for a percentage that the evidence cannot support. For each one, decide what it does.

I would rather not put a percentage on it, but use your judgement.

- honest and useful
- honest and unhelpful
- an overclaim

<details>
<summary>After your attempt</summary>

honest and useful — It offers nothing and hands the decision to somebody with less information than you.

honest and unhelpful — It is honest about your position and abandons the person, who will now invent something.

an overclaim — You are not claiming anything, which is precisely the problem.

Now write your own reply, and check it offers something as well as declining something.

</details>


### The request you expect for a stronger claim, in the words somebody would use

Section: practice-plan. Stable action: write-the-request.

Write your answer for “The request you expect for a stronger claim, in the words somebody would use”. Use the task instructions below to decide what to include.

**Answer:** The request you expect for a stronger claim, in the words somebody would use



<details>
<summary>Example</summary>

Example (made up): can you give me a percentage for the slide?

</details>


### Your reply: what you cannot give, what you can, and what would be needed

Section: practice-plan. Stable action: write-your-reply.

Write your answer for “Your reply: what you cannot give, what you can, and what would be needed”. Use the task instructions below to decide what to include.

**Answer:** Your reply: what you cannot give, what you can, and what would be needed




### How you rehearsed it, and what was hard to say

Section: practice-plan. Stable action: write-said-aloud.

Aloud, to somebody or to yourself. The sentence has to be available under pressure, which means having said it once.

**Answer:** How you rehearsed it, and what was hard to say

Aloud, to somebody or to yourself. The sentence has to be available under pressure, which means having said it once.


### Record the temptation

Section: practice-plan. Stable action: step-4-brief.

Where you were tempted to overstate during this module, and why that moment was tempting.

- Write where you wanted to overstate during this module.
- Note what would have made it easy to do so.

**Start here:** Think of the moment your work looked most convincing, and ask what you left out to make it look that way.

**Enough:** You named a specific moment rather than a general tendency.

**Recording the temptation:** Naming where you wanted to overstate. It is where you will slip later, and knowing it is most of the defence.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Recording a temptation from a tool-library module, and recording a safe one.

**What I wrote first:** “I was tempted to overstate the findings.” True of everybody, about nothing in particular, and I felt I had been admirably honest.

**Why it is useless:** It names no moment, so it cannot warn me about anything. A general confession is a way of not making a specific one.

**The actual moment:** Building the slide deck. The synthetic funnel chart looked convincing, and the word synthetic in the title made it look like practice material, which it is.

**What I nearly did:** Moved the label to the notes. I had a reason ready — the audience knew it was synthetic — and the reason arrived after the wish.

**What writing it down does:** The next time I build a deck, that is the moment I will recognise. A named temptation is a warning; a general one is a paragraph.

**Wrong turn:** The wrong turn is confessing in general, because it is comfortable and sounds self-aware. A temptation with no moment attached cannot warn you about anything.

**Trade-off:** Naming the specific moment means writing down something slightly discreditable about yourself, in a document somebody else will read.

**Unknown:** Still unknown: whether I would have done it. I did not, and being confident that I never would is the belief this exercise is aimed at.


### Where you wanted to overstate during this module

Section: practice-plan. Stable action: write-temptation-named.

Write your answer for “Where you wanted to overstate during this module”. Use the task instructions below to decide what to include.

**Answer:** Where you wanted to overstate during this module



<details>
<summary>Example</summary>

Example (made up): wanting to show the synthetic funnel without the label, because it looked convincing.

</details>


### Why that particular moment was tempting

Section: practice-plan. Stable action: write-why-tempting.

Write your answer for “Why that particular moment was tempting”. Use the task instructions below to decide what to include.

**Answer:** Why that particular moment was tempting




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Does being rigorous make you less useful?

- Being unreliable makes you less useful. Somebody who says what the evidence supports, offers the next step and is right about the limits becomes the person whose numbers are trusted.
- Somewhat, since people want answers rather than caveats.
- No, rigour speaks for itself.

<details>
<summary>After your attempt</summary>

Being unreliable makes you less useful. Somebody who says what the evidence supports, offers the next step and is right about the limits becomes the person whose numbers are trusted. — The reply that works names what you have, and what would produce more, with a date. A flat refusal is honest and loses to somebody else’s worse number.

Somewhat, since people want answers rather than caveats. — They want answers they can rely on. A number that collapses when checked costs you the next three conversations.

No, rigour speaks for itself. — It does not. Rigour with nothing offered alongside it reads as obstruction.

Improve: Check your reply in step 3 offers something as well as declining something. Record the change in step 5.

Check again: Your reply names what you have and what would produce more.

Answers to revisit: the-request, your-reply, said-aloud, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You listed fourteen limitations in the order the lessons came. What is wrong with that?

- It mixes three different problems and reads as one long apology, so the useful half disappears.
- Nothing, as long as all fourteen are there.
- Fourteen is too many to be credible.

<details>
<summary>After your attempt</summary>

It mixes three different problems and reads as one long apology, so the useful half disappears. — Synthetic supports nothing about your product; a small sample supports real counts; unavailable is simply unknown. Grouped, the page becomes a statement of what you know.

Nothing, as long as all fourteen are there. — Completeness is necessary and the shape decides whether anybody can use it.

Fourteen is too many to be credible. — Fourteen is an honest count for a module of this size. The order is what makes it unreadable.

Improve: Regroup the page under the three headings in step 2 and say what each kind supports. Record the change in step 5.

Check again: Your page has three sections rather than one list.

Answers to revisit: synthetic-items, small-sample-items, unavailable-items, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Asked for a percentage, you answer “roughly two-thirds, though the sample is small”. What happens next?

- Two-thirds reaches the slide and the caveat does not. Two of three people is two people.
- Nothing, since the caveat was stated.
- The audience will ask about the sample if it matters.

<details>
<summary>After your attempt</summary>

Two-thirds reaches the slide and the caveat does not. Two of three people is two people. — Hedged numbers travel without their hedges. The version that survives is the count with its denominator attached, because the two cannot be separated.

Nothing, since the caveat was stated. — It was stated aloud, once, to one person, and the number is what gets written down.

The audience will ask about the sample if it matters. — The audience three steps later does not know there was a sample to ask about.

Improve: Rewrite your reply in step 3 so every number carries its denominator inside the sentence. Record the change in step 5.

Check again: No number in your reply can be quoted without its sample.

Answers to revisit: the-request, your-reply, said-aloud, improvement-made

</details>


### File it

Section: practice. Stable action: step-5-brief.

The page filed where you can reuse it, and the repair the Check questions asked for.

- Store the page where your case study and portfolio can reuse it.
- Save the rehearsed reply with it.

**Start here:** Put it with your project record rather than with this module’s notes.

**Enough:** You could paste the right section into a report next month without rewriting it.

**Reusable:** Kept where your next report will be written, so the sentences do not have to be reconstructed each time.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Where the page lives so you can reuse it

Section: practice. Stable action: write-where-filed.

Write your answer for “Where the page lives so you can reuse it”. Use the task instructions below to decide what to include.

**Answer:** Where the page lives so you can reuse it




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. This closes Module 15. Module 16 turns to AI-assisted work and AI products.


<details>
<summary>Optional hints and reference material</summary>

- Go through each lesson's output and copy its limitation into one file.
- Sort your caveats into the three kinds and write what each can support.

- R37: [NN/g: confidence intervals and margins of error](https://www.nngroup.com/articles/confidence-interval/) — What uncertainty means for a reported figure. Purpose: Grounds the limitations page in the reason small samples cannot carry rates. Free reading, no account. Verified 2026-09-06. No formulas; the page is about interpretation rather than calculation. Fallback: R45.
- R04: [GOV.UK: analyse a research session](https://www.gov.uk/service-manual/user-research/analyse-a-research-session) — Separating observations, interpretations and decisions. Purpose: Supplies the vocabulary for saying precisely what each claim rests on. Free reading, no account. Verified 2026-09-06. Written for qualitative sessions; the separation applies to quantitative claims too. Fallback: R08.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**One page collects every limitation from the module**

Adequate evidence: A single reusable page covering all quantitative work here.

0 — Limitations scattered across documents.

1 — A partial collection.

2 — One page covering everything, grouped by kind.

3 — As adequate, and it is written to be pasted into a case study unchanged.

Repair: Go through each lesson's output and copy its limitation into one file. Recheck: The limitations page.

**Synthetic, small-sample and unavailable are separated**

Adequate evidence: Three categories with what each supports stated.

0 — All caveats treated the same.

1 — Two categories distinguished.

2 — All three with their support levels.

3 — As adequate, and the synthetic category names where the label must appear.

Repair: Sort your caveats into the three kinds and write what each can support. Recheck: The categorised page.

**A reply to pressure is written and rehearsed**

Adequate evidence: A written exchange with an offer of what you can support and a timeline.

0 — No preparation.

1 — A refusal without an alternative.

2 — A reply offering what is supportable and what would be needed.

3 — As adequate, and it was rehearsed aloud with someone playing the requester.

Repair: Write the request you fear and the sentence you would want to have ready. Recheck: The rehearsed reply.

**A temptation is recorded honestly**

Adequate evidence: A named moment where you wanted to overstate, with what made it tempting.

0 — None recorded.

1 — A generic acknowledgement.

2 — A specific moment with its conditions.

3 — As adequate, and a safeguard is named for next time.

Repair: Look back through the module for the number you wished were stronger, and write it down. Recheck: The temptation note.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. This closes Module 15. Module 16 turns to AI-assisted work and AI products.

**Review criteria:**

- One page collects every limitation from the module
- Synthetic, small-sample and unavailable are separated
- A reply to pressure is written and rehearsed
- A temptation is recorded honestly

<details>
<summary>Reading, video and deeper explanation</summary>

- A limitations page is reusable. Written once, it carries into the case study, the portfolio and the interview, and it stops you rewriting caveats under time pressure — which is when they get softened. It also makes the work reviewable: someone can check whether your conclusions stay inside it.
- The categories differ and matter. Synthetic data supports method demonstration and nothing else. Small real samples support existence and severity claims, not prevalence. Unavailable measures support nothing at all, and the honest response is to say what would be needed rather than to substitute a proxy quietly.
- The pressure conversation is worth rehearsing because it is predictable: someone will ask for a percentage, a projection or a confident yes. The useful reply offers what the evidence supports and names what would be needed for more — which is more helpful than a refusal and more honest than a number.
- Recording where you were tempted is the last discipline of this module. The place you wanted to round up, extend a trend, or drop an inconvenient participant is the place you will slip when nobody is watching, and writing it down now is a genuine safeguard.

[NN/g: confidence intervals and margins of error](https://www.nngroup.com/articles/confidence-interval/).

</details>
